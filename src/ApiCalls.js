const ApiCalls = {
  getSingleMovie(movieId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error.message))
  },

  postUserLogin(userLoginInfo) {
    console.log(userLoginInfo)
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginInfo)
    })
    .then(response => response.json())
    .then(data => console.log('success:', data))
    .catch(err => console.log('failed', err.message))
  }
}
export default ApiCalls;
