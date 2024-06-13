import UrlParser from "../../routes/url-parser";
import MakananSource from "../../data/makanandb-source";
import { createMakananDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import FavoriteMakananIdb from "../../data/favorite-makanan-idb";
import PostComent from "../../utils/post-coment";

const Detail = {
  async render() {
    return `
    <div class="content">
      <div id="makanan" class="food"></div>
      <div id="likeButtonContainer"></div>

      <div class="form-coment">
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="mb-3">
              <label for="inputKomentar" class="form-label">Komentar</label>
              <input name="inputKomentar" type="text" class="form-control" id="inputKomentar">
            </div>
            <button id="submit-coment" type="submit" class="btn">Submit</button>
          </form>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const makanan = await MakananSource.makananDetail(url.id);
    const makananContainer = document.querySelector("#makanan");

    makananContainer.innerHTML = createMakananDetailTemplate(makanan.makanan);
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
      },
    });

    const submitComent = document.getElementById("submit-coment");
    submitComent.addEventListener("click", (event) => {
      event.preventDefault();
      PostComent();
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
