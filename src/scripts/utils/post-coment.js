/* eslint-disable no-console */
import MakananSource from "../data/makanandb-source";
import UrlParser from "../routes/url-parser";

const PostComent = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputName = document.getElementById("inputName");
  const inputKomentar = document.getElementById("inputKomentar");
  const comentContainer = document.querySelector(".detail-coment");

  if (comentContainer) {
    const dataInput = {
      id: url.id,
      name: inputName.value,
      komentar: inputKomentar.value,
    };

    const newComent = document.createElement("div");
    newComent.innerHTML = `
      <div class="header-coment">
        <p class="name-coment">
          <i title="makanan" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>
          ${dataInput.name}
        </p>
      </div>
      <div class="body-coment">
        ${dataInput.komentar}
      </div>
    `;

    await MakananSource.postComent(dataInput);
    comentContainer.appendChild(newComent); // Use appendChild to add the new review
    inputName.value = "";
    inputKomentar.value = "";
  } else {
    console.error("Review container not found.");
  }
};

export default PostComent;
