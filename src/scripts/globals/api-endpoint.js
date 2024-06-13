import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}makanan`,
  DETAIL: (id) => `${CONFIG.BASE_URL}makanan/${id}`,
  DAERAH: `${CONFIG.BASE_URL}daerah`,
  DETAILDAERAH: (IDBObjectStore) => `${CONFIG.BASE_URL}daerah/${IDBObjectStore}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}coment`,
};

export default API_ENDPOINT;
