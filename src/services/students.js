export const getStudents = async function (token) {
  let res = await fetch(`http://localhost:8080/students`, {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      token: token,
    }),
  })

  return await res.json()
}
