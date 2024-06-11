import MakananSource from "../../data/makanandb-source";
import { createDaerahItemTemplate } from "../templates/template-creator";

const Daerah = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Dearah</h2>
    <div id="daerah" class="foods">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const daerahs = await MakananSource.daerahList();
    const daerahContainer = document.querySelector("#daerah");
    daerahs.forEach((daerah) => {
      daerahContainer.innerHTML += createDaerahItemTemplate(daerah);
    });
  },
};

export default Daerah;
