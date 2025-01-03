
import axios from 'axios';
async function getTrendingMov(){
    let data
    let movie
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data.results
        })
        .catch(err => console.error(err));
       
        return data
        


}
async function getTopratedMov(){
    let data
    let movie
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data.results
        })
        .catch(err => console.error(err));
       
        return data
        


}
async function getNowplayingMov(){
    let data
    let movie
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data.results
        })
        .catch(err => console.error(err));
       
        return data
        


}
async function getComedyMov(page){
    let data
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=35`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
      await axios
        .request(options)
        .then(res => {
            // 
            data=res.data
        })
        .catch(err => console.error(err));
        
        return data
}
async function getDramaMov(page){
    let data
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=18`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data
        })
        .catch(err => console.error(err));

        
        return data
}
async function getActionMov(page){
    let data
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=28`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data
        })
        .catch(err => console.error(err));
        return data
}
async function getUpcomingMov(page){
    let data
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
  }
      };
      
     await axios
        .request(options)
        .then(res => {
            
            data = res.data
        })
        .catch(err => console.error(err));
        return data
}
async function searchMovies(page,query){
    let data = {
        results:[],
        total_pages:0
    }
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
        }
      };
      const options1 = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsIm5iZiI6MTY4NzgxNzY1Mi41MjE5OTk4LCJzdWIiOiI2NDlhMGRiNGZlZDU5NzAxMmNlYjVlYzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ly6wetUFMFN2skJcdXUgYJNs4I_Y4CJr8GSAD_ZifeU'
        }
      };
      
      await axios
        .request(options)
        .then(res =>{
            
            data.results=[...data.results,...res.data.results]
            data.total_pages=data.total_pages+res.data.total_pages
        })
        .catch(err => console.error(err));
    await axios
        .request(options1)
        .then(res =>{
            
            data.results=[...data.results,...res.data.results]
            data.total_pages=data.total_pages+res.data.total_pages
        })
        .catch(err => console.error(err));

        data.results= data.results.sort((a, b)=>b.popularity-a.popularity)
        data.total_pages-=1
        return data
}
async function watchMovies(id){
    let data

}

export default {
    getTrendingMov,
    getTopratedMov,
    getNowplayingMov,
    getComedyMov,
    getDramaMov,
    getActionMov,
    getUpcomingMov,
    searchMovies
}
