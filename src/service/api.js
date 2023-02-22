import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://sandra-back-render.onrender.com/',
  baseURL: 'https://sandra-base.herokuapp.com/',
  // baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const tgSandra = axios.create({
  // baseURL: 'https://api.telegram.org/bot6096389512:AAEqOmZLflg5D-zito8B7Uk0COTOTySqKxI/sendMessage?chat_id=525427019&text=',
  baseURL: 'https://api.telegram.org/bot6096389512:AAEqOmZLflg5D-zito8B7Uk0COTOTySqKxI/sendMessage?chat_id=163995726&text=',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  instance,
  tgSandra
};
