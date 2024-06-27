import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-demo/demo-app-template/demo-app-template.js';

// import '@bbva-web-components/bbva-button-default/bbva-button-default.js';


class HomePage extends CellsPage {
  static get is() {
    return 'cards-page';
  }

  constructor() {
    console.log('constructor => cards-page');
    super();
    this.host = window.AppConfig.host;
    this.country = window.AppConfig.country;
    this.apiVersion = window.AppConfig.financialOverviewVersion;
    this.customers = [];
  }

  static get properties() {
    return {
      userName: { type: String },
      customers: { type: Array },
      host: { type: String },
      apiVersion: { type: String }
    };
  }

  goToAnotherPage(_page) {
    this.navigate(_page);
  }

  onPageEnter() {
    this.subscribe('user_name', (userName) => this.userName = userName);
    console.log(this.userName);
    /* if (!this.customers.length) {
      this.shadowRoot.querySelector('#dm').getCustomers();
    } */
  }

  render() {
    return html`
    <demo-app-template data-cells-type="template">
      <div slot="app-main-content">
        <h1>Cards</h1>
      </div>
    </demo-app-template>
  `;
  }

}
window.customElements.define(HomePage.is, HomePage);
