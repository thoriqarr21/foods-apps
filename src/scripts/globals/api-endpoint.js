import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}makanan`,
  DETAIL: (id) => `${CONFIG.BASE_URL}makanan/${id}`,
  DAERAH: `${CONFIG.BASE_URL}daerah`,
  DETAILDAERAH: (daerahId) => `${CONFIG.BASE_URL}daerah/${daerahId}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}resep`,
};

export default API_ENDPOINT;
