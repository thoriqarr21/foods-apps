/* eslint-disable no-console */
import MakananSource from "../data/makanandb-source";
import UrlParser from "../routes/url-parser";

const PostResep = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputResepBahan = document.getElementById("inputName");
  const inputCaraMasak = document.getElementById("inputCaraMasak");
  const resepContainer = document.querySelector(".detail-resep");

  if (resepContainer) {
    const dataInput = {
      id: url.id,
      bahan: inputResepBahan.value,
      caraMasak: inputCaraMasak.value,
    };

    const newResep = document.createElement("div");
    newResep.innerHTML = `
      <div class="header-resep">
        <p class="bahan-resep">
          <i title="makanan" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>
          ${dataInput.bahan}
        </p>
      </div>
      <div class="body-resep">
        ${dataInput.caraMasak}
      </div>
    `;

    await MakananSource.postReview(dataInput);
    resepContainer.appendChild(newResep); // Use appendChild to add the new review
    inputResepBahan.value = "";
    inputCaraMasak.value = "";
  } else {
    console.error("Review container not found.");
  }
};

export default PostResep;
