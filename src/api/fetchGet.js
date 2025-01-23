import Axios from "axios";

const fetchGet = (url) => {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export default fetchGet;
