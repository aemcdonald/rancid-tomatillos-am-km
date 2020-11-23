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

  postNewRating(userId, ratingInfo) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ratingInfo)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('failed', err.message))
  },

  changeRating(userId, ratingId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${ratingId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) throw Error
    })
    .catch(err => console.log('failed', err.message));
  },

  getAllComments(movieId) {
    return fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`)
      .then(response => {
        return response.json()
      })
      .then(data => data)
      .catch(err => console.log('failed', err.message))
  }
}

export default ApiCalls;
