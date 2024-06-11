import UrlParser from "../../routes/url-parser";
import MakananSource from "../../data/makanandb-source";
import { createMakananDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import FavoriteMakananIdb from "../../data/favorite-makanan-idb";
import PostResep from "../../utils/post-resep";

const Detail = {
  async render() {
    return `
      <div id="makanan" class="food"></div>
      <div id="likeButtonContainer"></div>

      <div class="form-resep">
          <form>
            <div class="mb-3">
              <label for="inputBahan" class="form-label">Bahan</label>
              <input name="inputBahan" type="text" class="form-control" id="inputBahan">
            </div>
            <div class="mb-3">
              <label for="inputCaraMasak" class="form-label">CaraMasak</label>
              <input name="inputCaraMasak" type="text" class="form-control" id="inputCaraMasak">
            </div>
            <button id="submit-resep" type="submit" class="btn">Submit</button>
          </form>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const makanan = await MakananSource.makananDetail(url.id);
    const makananContainer = document.querySelector("#makanan");

    makananContainer.innerHTML = createMakananDetailTemplate(
      makanan.makanan
    );
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteMakanans: FavoriteMakananIdb,
      makanan: {
        id: makanan.makanan.id,
        name: makanan.makanan.name,
        publisher: makanan.makanan.publisher,
        description: makanan.makanan.description,
        tingkatSulit: makanan.makanan.tingkatSulit,
        waktu: makanan.makanan.waktu,
        rating: makanan.makanan.rating,
        image: makanan.makanan.image,
        daerahId: makanan.makanan.daerahId,
      },
    });

    const submitResep = document.getElementById("submit-resep");
    submitResep.addEventListener("click", (event) => {
      event.preventDefault();
      PostResep();
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
