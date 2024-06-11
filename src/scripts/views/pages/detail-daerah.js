import UrlParser from "../../routes/url-parser";
import MakananSource from "../../data/makanandb-source";
import { createDaerahDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import FavoriteMakananIdb from "../../data/favorite-makanan-idb";
import PostReview from "../../utils/post-resep";

const DetailDaerah = {
  async render() {
    return `

      <div id="daerah">
      </div>
      
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const daerah = await MakananSource.daerahDetail(url.daerahId);
    const daerahContainer = document.querySelector("#daerah");

    daerahContainer.innerHTML = createDaerahDetailTemplate(daerah.daerah);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default DetailDaerah;
