import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    return axios.get(`${baseUrl}/all`)
    .then(response=>response.data)
    .catch(error=>console.log('error:',error))
}

const getOne = (name) => {
    return axios.get(`${baseUrl}/name/${name}`)
    .then(r=>r.data)
    .catch(e=>console.log('error: ',e))
};


export default {getAll, getOne}