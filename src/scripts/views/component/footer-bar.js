class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
      <p>
      Copyright © 2024 - Warsep Apps
    </p>
            `;
  }
}

customElements.define('footer-bar', FooterBar);
