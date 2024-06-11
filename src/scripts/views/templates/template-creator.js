/* eslint-disable import/no-extraneous-dependencies */
// import CONFIG from '../../globals/config';

const createMakananDetailTemplate = (makanan) => `
  <h2 class="food__title">${makanan.name || '-'}</h2>
  <img class="food__poster" src="${
  makanan.image
}" alt="${makanan.name}" />
  <div class="food__info">
    <h3>Information</h3>
    <h4>publisher</h4>
    <p>${makanan.publisher}</p>
    <h4>Rating</h4>
    <p>${makanan.rating}</p>
  </div>
  <div class="food__overview">
    <h3>Description</h3>
    <p>${makanan.description}</p>
    <h3>waktu</h3>
    <p>${makanan.waktu}</p>
    <h3>tingkatSulit</h3>
    <p>${makanan.tingkatSulit}</p>

    <h2 tabindex="0" id="makan-detail-form-resep-title" class="teks-resep"><span>Resep</span></h2>
    <div tabindex="0" class="detail-resep">
      ${makanan.reseps
    .map(
      (resep) => `
        <div class="detail-resep-item">
          <div class="resep-header">
            <p class="resep-bahan">${resep.bahan}</p>
          </div>
          <div class="resep-body">
            ${resep.caraMasak}
          </div>
        </div>
      `,
    )
    .join('')}
    </div>
  </div>
`;

const createMakananItemTemplate = (makanan) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="lazyload food-item__header__poster" data-src="${makanan.image}" alt="${
  makanan.name || '-'
}">
      <div class="food-item__header__rating">
        <p>⭐️<span class="food-item__header__rating__score">${
  makanan.rating || '-'
}</span></p>
      </div>
    </div>
    <div class="food-item__content">
    <p class="food_city">${makanan.publisher || '-'}</p>
      <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
      <p>${makanan.tingkatSulit || '-'}</p>
      <p>${makanan.waktu || '-'}</p>
      <p>${makanan.description || '-'}</p>
      
    </div>

  </div>
`;
const createDaerahDetailTemplate = (daerah) => `
<div class="center">
<div class="container">
        <div class="image-container">
            <img src="${
              daerah.pictureId
            }" alt="${daerah.name}"/>
        </div>
        <div class="text-container">
            <h1>${daerah.name}</h1>
            <p>${daerah.deskripsi}</p>
        </div>
    </div>
    </div>
<div class="content">
<h2 class="content__heading">Explore Makanan Khas ${daerah.name || '-'}</h2>
<div class="foods">
      ${daerah.makanans
    .map(
      (makanan) => `
      <div class="food-item">
      <div class="food-item__header">
        <img class="lazyload food-item__header__poster" data-src="${makanan.image}" alt="${
    makanan.name || '-'
  }">
        <div class="food-item__header__rating">
          <p>⭐️<span class="food-item__header__rating__score">${
    makanan.rating || '-'
  }</span></p>
        </div>
      </div>
      <div class="food-item__content">
      <p class="food_city">${makanan.publisher || '-'}</p>
        <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
        <p>${makanan.tingkatSulit || '-'}</p>
        <p>${makanan.waktu || '-'}</p>
        <p>${makanan.description || '-'}</p>
        
      </div>
  
    </div>

      `,
    )
    .join('')}
    </div>
    </div>
  </div>
`;

const createDaerahItemTemplate = (daerah) => `
  <div class="food-item">
    <div class="food-item__header">
      <img class="lazyload food-item__header__poster" data-src="${daerah.pictureId}" alt="${
  daerah.name || '-'
}">    
<div class="food-item__content">
<h3 class="food__title"><a href="/#/detail-daerah/${daerah.daerahId}">${daerah.name || '-'}</a></h3>
<p>${daerah.deskripsi || '-'}</p>
    </div>
    </div>
  </div>
`;

const createLikeMakananButtonTemplate = () => `
  <button aria-label="like this makanan" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMakananButtonTemplate = () => `
  <button aria-label="unlike this makanan" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMakananItemTemplate,
  createMakananDetailTemplate,
  createDaerahItemTemplate,
  createDaerahDetailTemplate,
  createLikeMakananButtonTemplate,
  createUnlikeMakananButtonTemplate,
};
