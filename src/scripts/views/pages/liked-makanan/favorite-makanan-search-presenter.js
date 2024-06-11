/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class FavoriteMakananSearchPresenter {
  constructor({ favoriteMakanans }) {
    this._listenToSearchRequestByUser();
    this._favoriteMakanans = favoriteMakanans;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchMakanans(event.target.value);
    });
  }

  async _searchMakanans(latestQuery) {
    this._latestQuery = latestQuery.trim();
    const foundMakanans = await this._favoriteMakanans.searchMakanans(this.latestQuery);
    this._showFoundMakanans(foundMakanans);
  }

  _showFoundMakanans(makanans) {
    console.log(makanans);
    const html = makanans.reduce(
      (carry, makanan) => carry.concat(`
          <li class="makanan">
            <span class="food__title">${makanan.name || '-'}</span>
          </li>
        `),
      '',
    );
    document.querySelector('.makanans').innerHTML = html;
    document
      .getElementById('makanan-search-container')
      .dispatchEvent(new Event('makanans:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMakananSearchPresenter;
