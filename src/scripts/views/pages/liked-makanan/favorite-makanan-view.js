/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { createMakananItemTemplate } from '../../templates/template-creator';

class FavoriteMakananView {
  getTemplate() {
    return `                
        <h2 class="content__heading">Your Liked Makanan</h2>               
        <div class="makanan-result-container">
          <div id="makanan" class="foods">

          </div>
        </div
      `;
  }

  getFavoriteMakananTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Makanan</h2>
        <div id="makanan" class="foods">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showMakanans(makanans) {
    this.showFavoriteMakanans(makanans);
  }

  showFavoriteMakanans(makanans) {
    let html;
    if (makanans.length) {
      html = makanans.reduce(
        (carry, makanan) => carry.concat(createMakananItemTemplate(makanan)),
        '',
      );
    } else {
      html = this._getEmptyMakananTemplate();
    }
    document.getElementById('makanan').innerHTML = html;
    document
      .getElementById('makanan')
      .dispatchEvent(new Event('makanan:updated'));
  }

  _getEmptyMakananTemplate() {
    return `
      <div class="makanan__not__found">
        Tidak ada makanan untuk ditampilkan
      </div>
    `;
  }
}
export default FavoriteMakananView;
