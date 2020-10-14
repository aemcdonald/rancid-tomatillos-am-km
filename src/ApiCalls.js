const ApiCalls = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error.message))
  },

  getSingleMovie(movieId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error.message))
  },

  postUserLogin(userLoginInfo) {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginInfo)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('failed', err.message))
  },

  getUserRatings(userId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error.message))
  },

}
export default ApiCalls;
