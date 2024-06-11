import MakananSource from "../../data/makanandb-source";
import { createMakananItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Explore Makanan</h2>
    <div id="makanan" class="foods">
      `;
  },

  async afterRender() {
    const makanans = await MakananSource.makananList();
    const makananContainer = document.querySelector("#makanan");
    makanans.forEach((makanan) => {
      makananContainer.innerHTML += createMakananItemTemplate(makanan);
    });
  },
};

export default Home;
