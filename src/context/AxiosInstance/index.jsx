import axios from "axios";

export const connectEvolution = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        apikey:'B6D711FCDE4D4FD5936544120E713976'
    },
  });