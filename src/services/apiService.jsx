import { api, requestConfig } from "../hooks/useFetch";
import { toast } from "react-toastify";

const Select = async (body) => {
  const config = requestConfig("GET");

  try {
    const { query, offset } = body;

    const response = await fetch(api + `/search?q=${query}&offset=${offset}`, config).then(res => res.json());

    if(response.error){
      toast.error(response.message)
    }

    return response;
  } catch (err) {
    toast.error("Algo deu errado, tente novamente mais tarde.");
  }
}

const apiService = {
  Select,
}

export default apiService;
