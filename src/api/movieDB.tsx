import axios from "axios";

const movieDB = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"080f189d3b764626563264e28d43c658",
        language:"es-ES",
    }
});


export default movieDB;