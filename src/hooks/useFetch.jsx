export const api = "https://api.mercadolibre.com/sites/MLB";

export const requestConfig = (method, data) => {
  let config;

  if(method === "GET"){
    config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      }
    }
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    }
  }

  return config;
}
