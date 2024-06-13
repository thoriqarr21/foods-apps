class JumbotronHero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <article>
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/banner-small.jpg" >
      <img  class="jumbotron" src="./images/heros/banner-large.jpg" alt="web image">
    </picture>
    </article>
        `;
  }
}

customElements.define('jumbotron-hero', JumbotronHero);
