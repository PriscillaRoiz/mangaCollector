import axios from 'axios'
    
// function getIsbn (input) {
   
//   axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${input}`)
//   .then((response)=>{
//     console.log(response)
//   })
// }
  
function getIsbn () {
   
    return axios.get(`http://localhost:3000/resultado.json`)
    // .then((response)=>{
    //   console.log(response.data.items[0].volumeInfo.title)
    //   return response.data.items[0].volumeInfo.title
    // })
  }

export default getIsbn