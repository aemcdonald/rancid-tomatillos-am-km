const ApiCalls = {
  getSingleMovie(movieId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error.message))
  }
}
export default ApiCalls;
