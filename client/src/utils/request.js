import axios from "axios"

const request = axios.create({
    baseURL: "https://eblog-api-mern.herokuapp.com/api",
})

export default request
