class mainContent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
      <main id="mainContent"></main>
            `;
  }
}

customElements.define('main-content', mainContent);
