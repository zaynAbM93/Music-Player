const url = "http://localhost:3000/songs";
const fetchData = async () => {
   let response = await fetch (url)
   if (response.ok) {
   return response.json();
   }

}


export default fetchData



