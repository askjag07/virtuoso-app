import React from 'react'
import { navigate } from 'gatsby'
import { OpenTokSDK } from 'opentok-accelerator-core'
import ScreenShareAccPack from 'opentok-screen-sharing'

import Seo from '../components/seo'
import '../styles/meeting.scss'

import { getAuthenticated } from '../services/auth'

let profile = {}
let otSDK

export default class Meet extends React.Component {
  _isMounted = false
  state = {
    session: null,
    connected: false,
    active: false,
    publishers: null,
    subscribers: null,
    meta: null,
    streamMap: null,
    localPublisherId: null,
    localAudioEnabled: true,
    localVideoEnabled: true,
    admin: true,
    kick: null,
  }
  constructor(props) {
    super(props)
    this.handleSignal = this.handleSignal.bind(this)
    this.startCall = this.startCall.bind(this)
    this.endCall = this.endCall.bind(this)
    this.toggleLocalAudio = this.toggleLocalAudio.bind(this)
    this.toggleLocalVideo = this.toggleLocalVideo.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
    this.kickOut = this.kickOut.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    const { state, admin } = getAuthenticated()
    this.setState({ admin: admin })
    if (!state) {
      navigate('/app/login/', {
        replace: true,
      })
    } else {
      otSDK = new OpenTokSDK({
        apiKey: '47252384',
        sessionId:
          '1_MX40NzI1MjM4NH5-MTYyMzMwNzQ5MzE3Nn5VYWNnSkgra0RoWStwWmlVeVJ5SWRidjB-fg',
        token:
          'T1==cGFydG5lcl9pZD00NzI1MjM4NCZzaWc9NjZkMjQ1MjkwNjA3ZjJlYTNjNzQ0OWNkYmFlYjdjOTkxZDZlNGQzZTpzZXNzaW9uX2lkPTFfTVg0ME56STFNak00Tkg1LU1UWXlNek13TnpRNU16RTNObjVWWVdOblNrZ3JhMFJvV1N0d1dtbFZlVko1U1dSaWRqQi1mZyZjcmVhdGVfdGltZT0xNjIzMzA3NTI3Jm5vbmNlPTAuMjIxNDQ3MzU0NDA1MjE1OCZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjI1ODk5NTI3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      })
      const session = otSDK.session
      otSDK
        .connect()
        .then(() => this.setState({ session: session, connected: true }))
      profile = JSON.parse(window.sessionStorage.getItem('profile'))
    }
  }

  startCall() {
    if (this._isMounted) {
      const { session, streamMap } = this.state

      const subscribeToStream = stream => {
        if (streamMap && streamMap[stream.id]) {
          return
        }
        const type = stream.videoType
        otSDK
          .subscribe(stream, `${type}SubscriberContainer`, {
            insertMode: 'append',
            width: '100%',
            height: '100%',
            preferredFrameRate: 15,
            preferredResolution: '640x480',
            showControls: true,
            style: {
              buttonDisplayMode: 'off',
              nameDisplayMode: 'on',
              archiveStatusDisplayMode: 'off',
              audioLevelDisplayMode: 'off',
            },
            fitMode: 'contain',
          })
          .then(() => this.setState(otSDK.state()))
      }

      session.streams.forEach(subscribeToStream)

      otSDK.on({
        streamCreated: ({ stream }) => subscribeToStream(stream),
        streamDestroyed: () => this.setState(otSDK.state()),
        signal: e => this.handleSignal(e),
      })

      otSDK
        .publish('cameraPublisherContainer', {
          insertMode: 'append',
          audioBitrate: 12000,
          audioFallbackEnabled: false,
          autoGainControl: false,
          resolution: '640x480',
          frameRate: 15,
          videoContentHint: 'detail',
          width: '100%',
          height: '100%',
          showControls: true,
          name: profile.Full_name,
          style: {
            buttonDisplayMode: 'off',
            nameDisplayMode: 'off',
            archiveStatusDisplayMode: 'off',
            audioLevelDisplayMode: 'on',
          },
        })
        .then(publisher => {
          this.setState(
            Object.assign({}, otSDK.state(), { localPublisherId: publisher.id })
          )
        })
        .catch(error => console.error(error))

      this.setState({ active: true })
      new ScreenShareAccPack({
        session: session,
        screenSharingContainer: 'screenPublisherContainer',
        extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
        annotation: false,
        externalWindow: false,
        localScreenProperties: {
          insertMode: 'append',
          width: '100%',
          height: '100%',
          showControls: true,
          name: profile.Full_name,
          style: {
            buttonDisplayMode: 'off',
            nameDisplayMode: 'on',
            archiveStatusDisplayMode: 'off',
            audioLevelDisplayMode: 'off',
          },
          videoSource: 'window',
          fitMode: 'contain',
        },
      })
    }
  }

  handleSignal(e) {
    if (this._isMounted) {
      if (!profile.Admin) {
        switch (e.data.replace(/"/g, '')) {
          case 'mute':
            otSDK.enablePublisherAudio(false)
            this.setState({ localAudioEnabled: false })
            break
          case 'bye':
            this.endCall()
            break
          default:
            console.log(e)
        }
      }
    }
  }

  endCall() {
    if (this._isMounted) {
      otSDK.disconnect()
      this.setState({
        session: null,
        connected: false,
        active: false,
        publishers: null,
        subscribers: null,
        meta: null,
        streamMap: null,
        localPublisherId: null,
        localAudioEnabled: true,
        localVideoEnabled: true,
      })
      window.localStorage.clear()
      navigate('/app/')
    }
  }

  toggleLocalAudio() {
    if (this._isMounted) {
      const { localAudioEnabled } = this.state
      const enabled = !localAudioEnabled
      otSDK.enablePublisherAudio(enabled)
      this.setState({ localAudioEnabled: enabled })
    }
  }

  toggleLocalVideo() {
    if (this._isMounted) {
      const { localVideoEnabled } = this.state
      const enabled = !localVideoEnabled
      otSDK.enablePublisherVideo(enabled)
      this.setState({ localVideoEnabled: enabled })
    }
  }

  toggleAudio() {
    if (this._isMounted) {
      otSDK.signal('mod', 'mute', null, function (error) {
        if (error) {
          console.error(`SIGERR (${error.name}):\n\n${error.message}`)
        } else {
          console.log('Signal sent.')
        }
      })
    }
  }
  handleEvent(e) {
    if (this._isMounted) {
      const { subscribers, kick } = this.state
      if (kick) {
        otSDK.signal(
          'mod',
          'bye',
          subscribers.camera[e.target.parentElement.parentElement.id].stream
            .connection,
          function (error) {
            if (error) {
              console.error(`SIGERR (${error.name}):\n\n${error.message}`)
            } else {
              console.log('Signal sent.')
            }
          }
        )
        this.setState({ kick: false })
      }
    }
  }
  kickOut() {
    if (this._isMounted) {
      const { kick } = this.state
      if (kick === null) {
        document
          .querySelectorAll('.OT_subscriber')
          .forEach(item =>
            item.addEventListener('dblclick', e => this.handleEvent(e), true)
          )
      }
      this.setState({ kick: true })
    }
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    const {
      admin,
      meta,
      connected,
      active,
      localAudioEnabled,
      localVideoEnabled,
    } = this.state

    if (connected && !active) {
      this.startCall()
    }

    return (
      <div className="position-fixed bottom-0 left-0 start-0 end-0">
        <Seo title="Meeting" />
        {!connected && (
          <div
            className="spinner-border text-primary center position-fixed"
            role="status"
          >
            <span className="visually-hidden">Connecting...</span>
          </div>
        )}
        <div
          className={`App-video-container d-flex position-relative justify-content-center align-items-center bg-black vw-100 vh-100 d-flex ${
            active ? '' : 'd-none'
          }`}
        >
          <div
            id="cameraPublisherContainer"
            className={`video-container d-flex ${
              !!(meta ? meta.subscriber.camera : 0) ||
              (meta ? meta.subscriber.screen : false)
                ? 'small bg-dark position-absolute top-0 end-0 shadow-lg rounded-bottom'
                : ''
            }`}
          >
            <button
              className="btn btn-sm text-white text-nowrap ms-2 me-1 mb-1"
              disabled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              <small className="align-top">
                {meta ? meta.subscriber.camera + 1 : 1}
              </small>
            </button>
          </div>
          <div id="screenPublisherContainer" className="d-none" />
          <div
            id="cameraSubscriberContainer"
            className={`video-container d-flex justify-content-center align-items-center ${
              (meta ? meta.subscriber.screen : false)
                ? 'left flex-column flex-nowrap overflow-scroll start-0'
                : `active-${meta ? meta.subscriber.camera : 0} `
            } ${(meta ? meta.subscriber.camera : 0) ? 'd-flex' : 'd-none'}`}
          />
          <div
            id="screenSubscriberContainer"
            className={`video-container d-flex justify-content-center align-items-center ${
              !(meta ? meta.subscriber.screen : false) ? 'd-none' : ''
            }`}
          ></div>
        </div>
        <footer
          className={`position-absolute bottom-0 mb-3 justify-content-center align-items-center w-100 ${
            active ? 'd-flex' : 'd-none'
          }`}
        >
          <div id="controls" className="bg-dark rounded shadow-lg p-2">
            <button
              className="btn text-white mb-1"
              onClick={this.toggleLocalAudio}
              type="button"
            >
              {localAudioEnabled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z" />
                  <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
                </svg>
              )}
            </button>
            <button
              className="btn text-white mb-1"
              onClick={this.toggleLocalVideo}
              type="button"
            >
              {localVideoEnabled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"
                  />
                </svg>
              )}
            </button>
            <button
              className={`btn text-white mb-1 ${admin ? '' : 'd-none'}`}
              id="startScreenSharing"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z" />
              </svg>
            </button>
            <button
              className={`btn mb-1 text-white ${admin ? '' : 'd-none'}`}
              type="button"
              onClick={this.toggleAudio}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button
              className={`btn mb-1 text-white ${admin ? '' : 'd-none'}`}
              type="button"
              onClick={this.kickOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <button
              className="btn btn-danger ms-2"
              type="button"
              onClick={this.endCall}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <a className="btn mb-1 text-white ms-2" href="./C1.zip" download>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z" />
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
