import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLB",
  headers: {
    "Content-Type": "application/json"
  }
})

export default useAxios;
