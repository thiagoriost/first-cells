import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-demo/demo-app-template/demo-app-template.js';
import { BGADPCardsBalancesGetV1 } from '@cells-components/bgadp-cards-v1';

// import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-help-modal';
import '@bbva-web-components/bbva-card-contact';
import '../../elements/dashboard-dm/dashboard-dm';
import '../../elements/login-dm/login-dm';


class HomePage extends CellsPage {
  static get is() {
    return 'cards-page';
  }

  constructor() {
    super();
    console.log('constructor => cards-page');
    this.host = 'https://artichoke.platform.bbva.com';
    this.country = 'pe';
    this.customerVersion = '0';
    this.apiVersion = window.AppConfig.financialOverviewVersion;
    this.customers = [];
    this.dataLogin = {};
  }

  static get properties() {
    return {
      userName: { type: String },
      customers: { type: Array },
      customerVersion: { type: Array },
      country: { type: String },
      host: { type: String },
      apiVersion: { type: String },
      dataLogin: {
        type: Object,
        attribute: false,
      }
    };
  }

  goToAnotherPage(_page) {
    this.navigate(_page);
  }

  onPageEnter() {
    this.subscribe('detailRespoLogin', (login) => this.dataLogin = JSON.parse(login));
    console.log(this.dataLogin);
    if (!this.customers.length) {
      this.shadowRoot.querySelector('#dm').getCustomers();
    }

    /* if (!this.customers.length) {
      this.shadowRoot.querySelector('#dm').getCustomers();
    } */
  }

  get customerList() {
    if (!this.customers.length) {
      return null;
    }

    return this.customers.map((customer) => {

      return html`
        <bbva-card-contact name="${customer.firstName}" info="${customer.lastName}"></bbva-card-contact>
      `;
    });
  }

  _logout() {
    console.log('_logout');

    // this.shadowRoot.querySelector('#loginDm').logout();
  }

  _onCustomersSuccess(evt) {
    console.log(evt);
    this.customers = evt.detail || [];
    this.userName = evt.detail ? evt.detail[0].firstName : '';
  }
  _onLogoutSuccess() {
    console.log('_onLogoutSuccess');
    window.cells.logout();
  }

  render() {
    return html`
    <demo-app-template data-cells-type="template">
      <div slot="app-main-content">
        <div slot="app__header">
            <bbva-header-main
              icon-left-primary="coronita:on"

              @header-main-icon-left-primary-click=${()=>console.log('this._logoutModal.open()') } text="BBVA">
            </bbva-header-main>
          </div>

          <div slot="app__main" class="container">
          ${this.customerList ? html`${this.customerList}` : html`<cells-skeleton-loading-page visible>
          </cells-skeleton-loading-page>`}

          <bbva-help-modal id="logoutModal" header-icon="coronita:info"
            header-text='dashboard-page.logout-modal.header'
            button-text='dashboard-page.logout-modal.button' @help-modal-footer-button-click=${this._logout}>
            <div slot="slot-content">
              <span>'dashboard-page.logout-modal.slot'</span>
            </div>
          </bbva-help-modal>
        </div>
        <dashboard-dm id="dm" .host="${this.host}" .customers-version="${this.apiVersion}"
          @customers-success="${this._onCustomersSuccess}"></dashboard-dm>
          <h1>Cards</h1>
        <login-dm id="loginDm" .host="${this.host}" .country="${this.country}" .version="${this.apiVersion}"
          @logout-success="${this._onLogoutSuccess}" @logout-error="${this._onLogoutError}"></login-dm>
      </div>
    </demo-app-template>
  `;
  }

}
window.customElements.define(HomePage.is, HomePage);
