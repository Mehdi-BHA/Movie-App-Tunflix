const API_KEY = "71741288544550e3b57f3a8dca4493fc"

const requests = {
    trending : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    comedy : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    documentaries : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`


}

export default requests;