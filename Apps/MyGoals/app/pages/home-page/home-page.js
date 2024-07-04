import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@bbva-web-components/bbva-help-modal';
import '@bbva-web-components/bbva-card-contact';
import '../../elements/dashboard-dm/dashboard-dm';
import '../../elements/login-dm/login-dm';

class CardsPage extends intl(CellsPage) {
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
    this.dataLogin = {};
  }

  static get properties() {
    return {
      userName: { type: String },
      customers: { type: Array },
      host: { type: String },
      apiVersion: { type: String },
      dataLogin: {
        type: Object,
        attribute: false,
      }
    };
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._logoutModal = this.shadowRoot.querySelector('#logoutModal');
  }

  onPageEnter() {
    this.subscribe('detailRespoLogin', (login) => this.dataLogin = JSON.parse(login));
    console.log(this.dataLogin);
    /* this.subscribe('user_name', (userName) => this.userName = userName);

    if (!this.customers.length) {
      this.shadowRoot.querySelector('#dm').getCustomers();
    } */
  }

  onPageLeave() {

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
  _onCustomersSuccess(evt) {
    this.customers = evt.detail || [];
    this.userName = evt.detail ? evt.detail[0].firstName : '';
  }
  _logout() {
    this.shadowRoot.querySelector('#loginDm').logout();
  }

  _onLogoutSuccess() {
    window.cells.logout();
  }

  _onLogoutError(error) {
    console.log(error);
  }
  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            icon-left-primary="coronita:on"
            accessibility-text-icon-left-primary="${this.t('cards-page.logout-modal.header')}"
            @header-main-icon-left-primary-click=${()=>this._logoutModal.open()} text=${this.t('cards-page.header')}>
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
          ${this.customerList ? html`${this.customerList}` : html`<cells-skeleton-loading-page visible>
          </cells-skeleton-loading-page>`}

          <bbva-help-modal id="logoutModal" header-icon="coronita:info"
            header-text=${this.t('cards-page.logout-modal.header')}
            button-text=${this.t('cards-page.logout-modal.button')} @help-modal-footer-button-click=${this._logout}>
            <div slot="slot-content">
              <span>${this.t('cards-page.logout-modal.slot')}</span>
            </div>
          </bbva-help-modal>
        </div>
        <dashboard-dm id="dm" .host="${this.host}" .customers-version="${this.apiVersion}"
          @customers-success="${this._onCustomersSuccess}"></dashboard-dm>
        <login-dm id="loginDm" .host="${this.host}" .country="${this.country}" .version="${this.apiVersion}"
          @logout-success="${this._onLogoutSuccess}" @logout-error="${this._onLogoutError}"></login-dm>
      </cells-template-paper-drawer-panel>
      `;
  }

  static get styles() {
    return css`
      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
      }

      cells-template-paper-drawer-panel {
        background-color: #5472d3;
      }
    `;
  }
}

window.customElements.define(CardsPage.is, CardsPage);
