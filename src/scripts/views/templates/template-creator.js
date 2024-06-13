/* eslint-disable import/no-extraneous-dependencies */
// import CONFIG from '../../globals/config';

const createMakananDetailTemplate = (makanan) => `
    <div class="food__overview">
    <div class="food__info">
        <h2 class="food__title text-4xl">${makanan.name || '-'}</h2>
        <img
            class="food__poster"
            src="${
    makanan.image
    }"
            alt="${makanan.name}"
        />
            <h3>Information</h3>
            <h4 class="font-semibold text-gray-700 text-2xl">
                Publisher : <span class="font-normal">${makanan.publisher}</span>
            </h4>
            <h4>Rating : <span class="font-normal">⭐️ ${makanan.rating}</span></h4>
        </div>
        <div class="food__ringkasan">
            <h3 class="text-3xl font-semibold text-gray-700 mb-4 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-9 text-yellow-300"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                    />
                </svg>
                <span class="ml-4">Ringkasan</span>
            </h3>
            <p class="text-base font-normal leading-relaxed">
                ${makanan.description}
            </p>
            <h3>Waktu Pengerjaan</h3>
            <p>${makanan.waktu}</p>
            <h3>Tingkat Kesulitan Saat Memasak</h3>
            <p>${makanan.tingkatSulit}</p>
        </div>
    </div>

    <h2 tabindex="0" id="makan-detail-form-coment-title" class="teks-coment">
        <span class="text-4xl">Coment</span>
    </h2>
    <div tabindex="0" class="detail-coment">
        ${makanan.coments .map( (coment) => `
        <div class="detail-coment-item">
            <div class="coment-header">
                <p class="coment-name">${coment.name}</p>
            </div>
            <div class="coment-body">${coment.komentar}</div>
        </div>
        `, ) .join('')}
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
      <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
      <p>${makanan.description || '-'}</p>
      
    </div>

  </div>
`;
const createDaerahDetailTemplate = (daerah) => `
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
<h2 class="content__heading font-semibold text-2xl text-gray-500">Kelezatan Nusantara Makanan Khas Provinsi ${daerah.name || '-'}</h2>
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
        <h3 class="food__title"><a href="/#/detail/${makanan.id}">${makanan.name || '-'}</a></h3>
        <p>${makanan.description || '-'}</p>
        
      </div>
  
    </div>

      `,
    )
    .join('')}
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
<h3 class="food__title"><a href="/#/detail-daerah/${daerah.id}">${daerah.name || '-'}</a></h3>
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
