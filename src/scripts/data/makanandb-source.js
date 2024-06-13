import API_ENDPOINT from '../globals/api-endpoint';

class MakananSource {
  static async makananList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.makanans;
  }

  static async makananDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
  static async daerahList() {
    const response = await fetch(API_ENDPOINT.DAERAH);
    const responseJson = await response.json();
    return responseJson.daerahs;
  }

  static async daerahDetail(daerahId) {
    const response = await fetch(API_ENDPOINT.DETAILDAERAH(daerahId));
    return response.json();
  }

  static async postComent(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    return response.json();
  }
}

export default MakananSource;
