/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class FavoriteMakananShowPresenter {
  constructor({ view, favoriteMakanans }) {
    this._view = view;

    this._favoriteMakanans = favoriteMakanans;
    this._showFavoriteMakanans();
  }

  async _showFavoriteMakanans() {
    const makanans = await this._favoriteMakanans.getAllMakanan();
    this._displayMakanans(makanans);
  }

  _displayMakanans(makanans) {
    this._view.showFavoriteMakanans(makanans);
  }
}

export default FavoriteMakananShowPresenter;
