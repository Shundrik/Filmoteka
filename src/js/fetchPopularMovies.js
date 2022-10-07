// https://api.themoviedb.org/3/trending/all/day?api_key='301d018a3b09052968e9ce18b1793bab'

const axios = require('axios').default;

const API_KEY = '301d018a3b09052968e9ce18b1793bab';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';


 export async function fetchPopularMovies() {
    
       try {
        const moviesDataArray = await axios.get(`${BASE_URL}${API_KEY}`)
     if (moviesDataArray.status != 200) {
        return
     }
    
    console.log(moviesDataArray)

    const moviesDataforMarkupCreator = moviesDataArray.data.results
        
    
    return moviesDataforMarkupCreator
       } catch (error) {
        console.log(error)
       }
     
     
}


