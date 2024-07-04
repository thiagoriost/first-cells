import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import { bbvaHelp } from '@bbva-web-components/bbva-foundations-icons';
import { bbvaWebFormFieldAmbient } from '@bbva-web-components/bbva-web-form-field';
import { bbvaWebButtonDefaultAmbient } from '@bbva-web-components/bbva-web-button-default';
import { bbvaWebLinkAmbient } from '@bbva-web-components/bbva-web-link';

import '@bbva-web-components/bbva-header-main/bbva-header-main.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import '@bbva-web-components/bbva-web-form-password/bbva-web-form-password.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-web-components/bbva-foundations-grid-default-layout/bbva-foundations-grid-default-layout.js';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@cells-demo/demo-data-dm/demo-data-dm.js';

import '../../elements/login-dm/login-dm';

import styles from './login-page-styles.js';

const menuHelp = bbvaHelp();

const DEFAULT_I18N_KEYS = {
  loginTitle: 'login-page.title',
  help: 'login-page.help',
  userInputLabel: 'login-page.user-input-label',
  userPasswordLabel: 'login-page.user-password-label',
  button: 'login-page.button',
  forgetPassword: 'login-page.forget-password',
  clientButton: 'login-page.client-button',
};

class LoginMobilePage extends intl(CellsPage) {
  static get is() {
    return 'login-page';
  }

  static get properties() {
    return {
      user: {
        type: String,
      },
      password: {
        type: String,
      },
      host: {
        type: String
      },
      country: {
        type: String
      },
      pageState: {
        type: Object,
        attribute: false,
      },
      language: {
        type: String,
      },
      dark: {
        type: String,
      },
      i18nKeys: {
        type: Object,
        attribute: false,
      },
    };
  }

  static get styles() {
    return [
      styles,
      bbvaWebFormFieldAmbient.dark,
      bbvaWebButtonDefaultAmbient.dark,
      bbvaWebLinkAmbient.dark,
    ];
  }

  constructor() {
    super();
    this.user = 'L73740016';
    this.password = '112233';
    this.i18nKeys = DEFAULT_I18N_KEYS;
    this.subscribe('page_state', (pageState) => (this.pageState = pageState));
    this.host = 'https://artichoke.platform.bbva.com';
    this.country = 'pe';
    this.version = '0';
    this.dispatchEvent(
      new CustomEvent('application-started', {
        bubbles: true,
        composed: true,
      })
    );
  }

  update(props) {
    if (props.has('i18nKeys')) {
      this._i18nKeys = { ...DEFAULT_I18N_KEYS, ...this.i18nKeys };
    }

    return super.update && super.update(props);
  }

  firstUpdated(props) {
    // eslint-disable-next-line no-unused-expressions
    super.firstUpdated && super.firstUpdated(props);
    const queryScope = this.shadowRoot ? this.shadowRoot : this;

    this.language = localStorage.getItem('language') || window.IntlMsg.lang;

    this._setSettings();

    this._dm = queryScope.querySelector('demo-data-dm');

    const gridDefaultPageTemplateNode =
      queryScope.querySelector('demo-app-template');
    Object.assign(gridDefaultPageTemplateNode.regionAttributes, {
      header: { ambient: 'dark300' },
      main: { ambient: 'dark300' },
      'main-content': { 'data-region': 'full-height' },
    });

    const [user, password, button] = queryScope.querySelectorAll('.input');
    this._controlItems = { user, password, button };

    this._controlItems.user.addEventListener(
      'input',
      this._checkRequire.bind(this)
    );

    this._controlItems.password.addEventListener(
      'input',
      this._checkRequire.bind(this)
    );

    queryScope
      .querySelector('#loginForm')
      .addEventListener('submit', this._doLogin.bind(this));

    queryScope.addEventListener(
      'header-main-icon-right-primary-click',
      this._navigateHelp.bind(this)
    );

    this.dispatchEvent(
      new CustomEvent('application-started', {
        bubbles: true,
        composed: true,
      })
    );
  }

  _checkRequire() {
    if (
      this._controlItems.user.value !== '' &&
      this._controlItems.password.value !== ''
    ) {
      this._controlItems.button.disabled = false;
      return;
    }
    this._controlItems.button.disabled = true;
  }

  _doLogin(e) {
    console.log(1111);
    e.preventDefault();
    e.stopPropagation();
    this._dm.getUserSettings();
  }

  _getUserSettings({ detail }) {
    const { lang } = detail;
    localStorage.setItem('language', lang);
    this.language = lang;

    window.setTimeout(() => {
      this._setSettings();
    }, 0);

  }

  _setSettings() {
    window.IntlMsg.lang = this.language;

    // this.navigate('cards');
  }

  _navigateHelp(e) {
    e.preventDefault();
    e.stopPropagation();
    this.navigate('help');
  }

  get _headerTpl() {
    return html`
      <bbva-header-main
        slot="app-header"
        variant="transparent"
        .iconRightPrimary="${menuHelp}"
        accessibility-text-icon-right-primary="${this.t(this.i18nKeys.help)}"
        image="https://movil.bbva.es/apps/woody/assets/vendor/res/img/logos/logo-white-1c1c2a68cc4c755b9ebacef725dd3421.svg"
      >
      <h1>rigo</h1>
      </bbva-header-main>
    `;
  }

  goToAnotherPage(_page) {
    this.shadowRoot.querySelector('#dm').login({

      userId: this.user,

      // userId: 'L73740016',

      password: this.password,

      // password: '112233',

      consumerId: window.AppConfig.consumerId

      // consumerId: window.AppConfig.consumerId
    });

    this.navigate(_page);
  }


  get _mainContentTpl() {
    return html`
      <div class="neutral-primary" slot="app-main-content">
        <form
          id="loginForm"
          action="#"
          method="post"
          target="_blank"
          class="content"
        >
          <div class="main-inputs" ambient="dark300">
            <bbva-web-form-text
              id="user"
              class="input"
              required=""
              name="user"
              @change=${({target})=>this[target.name] = target.value}
              label="${this.t(this.i18nKeys.userInputLabel)}"
              value=${this.user}
            ></bbva-web-form-text>
            <bbva-web-form-password
              id="password"
              class="input"
              name="password"
              @change=${({target})=>this[target.name] = target.value}
              label="${this.t(this.i18nKeys.userPasswordLabel)}"
              required=""
              value=${this.password}
            ></bbva-web-form-password>

          </div>

          <div class="main-buttons" ambient="dark300">
            <bbva-web-button-default
              class="input"
              disabled
              variant="positive"
              type="button"
              @click=${()=>this.goToAnotherPage('cards')}
              >${this.t(this.i18nKeys.button)}</bbva-web-button-default
            >

          </div>
          <login-dm id="dm" .host="${this.host}" .country="${this.country}" .version="${this.version}" @login-success="${this._onLoginSuccess}"
            @login-error="${this._onLoginError}"></login-dm>
        </form>

        <demo-data-dm @settings="${this._getUserSettings}"></demo-data-dm>
      </div>
    `;
  }

  render() {
    return html` <demo-app-template page-title="${this.t(this.i18nKeys.loginTitle)}">
      ${this._mainContentTpl}
    </demo-app-template>`;
  }

  _onLoginSuccess(e) {
    console.log(e);
    this.publish('detailRespoLogin', e.detail);
    this.navigate('cards');
  }

  _onLoginError({ detail }) {
    console.log(detail);
    const response = JSON.parse(detail.response);
    alert(response['http-status'] === 403 ? 'Credenciales Invalidas' : 'Error contacta al administrado');
  }
}
window.customElements.define(LoginMobilePage.is, LoginMobilePage);
