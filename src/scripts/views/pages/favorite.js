/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import FavoriteMakananIdb from "../../data/favorite-makanan-idb";
import { createMakananItemTemplate } from "../templates/template-creator";
import FavoriteMakananView from "./liked-makanan/favorite-makanan-view";
import FavoriteMakananShowPresenter from "./liked-makanan/favorite-makanan-show-presenter";
import FavoriteMakananSearchPresenter from "./liked-makanan/favorite-makanan-search-presenter";

const view = new FavoriteMakananView();
const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMakananShowPresenter({
      view,
      favoriteMakanans: FavoriteMakananIdb,
    });
  },
};

export default Favorite;
