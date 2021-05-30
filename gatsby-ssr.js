import React from 'react'

export const onRenderBody = function ({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      key="https://static.opentok.com/v2/js/opentok.min.js"
      src="https://static.opentok.com/v2/js/opentok.min.js"
      crossorigin="anonymous"
      async
    />,
  ])
}
