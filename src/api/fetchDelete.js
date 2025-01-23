import Axios from 'axios';

const fetchDelete = (url) => {
  return Axios.delete(url).catch((error) => console.error('Error delete data:', error));
};

export default fetchDelete;
