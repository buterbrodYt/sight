import Axios from "axios";

const fetchPost = (url, value) => {
  return Axios.post(url, value);
};

export default fetchPost;
