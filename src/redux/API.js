import axios from 'axios';

axios.defaults.baseURL = 'https://664deb72ede9a2b556557b25.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get('/contacts');
    console.log(response.data);
    return response.data;
  } catch (e) {}
};
