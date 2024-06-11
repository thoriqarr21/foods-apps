/* eslint-disable no-underscore-dangle */
// import FavoriteMakananIdb from '../data/favorite-resto-idb';
import {
  createLikeMakananButtonTemplate,
  createUnlikeMakananButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteMakanans, makanan }) {
    this._likeButtonContainer = likeButtonContainer;
    this._makanan = makanan;
    this._favoriteMakanans = favoriteMakanans;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._makanan;

    if (await this._isMakananExist(id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isMakananExist(id) {
    const makanan = await this._favoriteMakanans.getMakanan(id);
    return !!makanan;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = createLikeMakananButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteMakanans.putMakanan(this._makanan);
      this._renderButton();
    });
  },

  _renderLikedButton() {
    this._likeButtonContainer.innerHTML = createUnlikeMakananButtonTemplate();

    const likedButton = document.getElementById('likeButton');
    likedButton.addEventListener('click', async () => {
      await this._favoriteMakanans.deleteMakanan(this._makanan.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
