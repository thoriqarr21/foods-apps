class DataList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
      <section class="content">
      <div class="explore">
        <div class="teks">Explore Restaurant</div>
        <div class="listdata" id="list"></div>
      </div>
    </section>
          `;
  }
}

customElements.define('data-list', DataList);
