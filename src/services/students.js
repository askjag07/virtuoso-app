export const getStudents = async function (token) {
  let res = await fetch(`https://govirtuoso.org/api/students`, {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      token: token,
    }),
  })

  return await res.json()
}
