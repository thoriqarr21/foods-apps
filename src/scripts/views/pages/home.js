import MakananSource from "../../data/makanandb-source";
import { createMakananItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section class="flex justify-center tentang gap-36 mt-10">
    <img class="logo" src="./images/heros/saborama.png" alt="web image">
    <div class="tentang">
        <div><p class="text-6xl text-[#ABA944]">SABORAMA</p></div>
        <div class="w-[600px] h-56 p-2 ">
            <p class="text-gray-600">
                Selamat datang di Saborama, tempat di mana rasa dan budaya bertemu dalam harmoni yang sempurna. Saborama adalah destinasi digital yang dirancang untuk membawa Anda menjelajahi kekayaan kuliner Nusantara, dari Sabang hingga Merauke. Melalui Saborama, kami mengajak Anda untuk menikmati kelezatan makanan khas dari setiap provinsi di Indonesia sambil mendalami cerita-cerita menarik yang menyertainya.
                Saborama hadir sebagai platform digital yang didedikasikan untuk menggali, mendokumentasikan, dan mempromosikan makanan khas dari setiap sudut Indonesia. Dari rendang yang kaya 
                rempah di Sumatra hingga papeda yang unik di Papua, 
                kami berkomitmen untuk menyajikan kekayaan rasa dan cerita di balik setiap hidangan.</p>

        </div>
        
    </div>
</section>


<section class="flex justify-center mt-0 mb-15 jelajah">
<div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
<div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
    <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
    <h2 class="text-3xl font-bold sm:text-4xl text-gray-700">Jelajahi Keunikan Kuliner Nusantara</h2>

    <p class="mt-4 text-gray-600">
        Saborama mengajak Anda untuk menyelami kekayaan rasa dan cerita di balik setiap hidangan khas dari berbagai daerah di Indonesia.
        Dari Sabang hingga Merauke,
        temukan bagaimana makanan menjadi cerminan budaya dan tradisi lokal yang kaya.
    </p>

    <a
        href="#makanan"
        class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
    >
    Mulai Petualangan Kuliner
    </a>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10 text-yellow-400 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              
              
        </span>

        <h2 class="mt-2 font-bold">Edukasi Kuliner</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Menyediakan informasi mendalam tentang makanan khas daerah bahan, dan cara pembuatannya.
        </p>
    </a>

    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
            class="size-10 text-[#ABA944]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2 12h4l2 10M22 12h-4l-2 10"
            ></path>
          </svg>
        </span>
        <h2 class="mt-2 font-bold">Promosi Budaya</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Mengangkat cerita di balik setiap hidangan, menyoroti bagaimana kuliner mencerminkan identitas dan tradisi budaya lokal.
        </p>
    </a>

    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="size-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 2a2 2 0 00-2 2v8.67l-1.88-.47a2 2 0 00-1.37.05l-4 1A2 2 0 005 14v6a2 2 0 002 2h8a2 2 0 002-2v-6.67l4-1V14a2 2 0 00-1.12-1.79l-4-1V4a2 2 0 00-2-2z"
                ></path>
                </svg>

          
        </span>

        <h2 class="mt-2 font-bold">Eksplorasi Rasa</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Mengajak Anda untuk merasakan keanekaragaman rasa dari berbagai daerah, mendorong apresiasi terhadap keunikan setiap hidangan.
        </p>
    </a>

    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10 text-orange-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
              </svg>
              
        </span>

        <h2 class="mt-2 font-bold">Dukungan Lokal</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Membantu usaha kecil dan menengah (UKM) kuliner lokal untuk mencapai pasar yang lebih luas melalui promosi dan kolaborasi.
        </p>
    </a>

    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
            class="size-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          

        <h2 class="mt-2 font-bold">Pengembangan Platform</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Terus mengembangkan platform Saborama untuk menjadi sumber terpercaya tentang kuliner Nusantara, serta memfasilitasi interaksi antara pengguna dan pelaku industri kuliner lokal.
        </p>
    </a>

    <a
        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="#"
    >
        <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
            class="size-10 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4m4 0V4a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2z"
            ></path>
          </svg>                  
        </span>

        <h2 class="mt-2 font-bold">Kolaborasi Ekosistem</h2>

        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Bermitra dengan berbagai pihak, termasuk pemerintah, lembaga budaya, dan komunitas lokal, untuk memperkuat ekosistem kuliner Indonesia dan meningkatkan dampak positifnya secara holistik.
        </p>
    </a>
    </div>
</div>
</div>
</section>
    <div class="content">
    <h2 class="content__heading font-semibold text-4xl text-gray-500">Kelezatan Nusantara Eksplorasi Makanan Khas Setiap Provinsi</h2>
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
