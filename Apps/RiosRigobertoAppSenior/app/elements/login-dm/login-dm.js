import { BGADPGrantingTicketsPostV0, BGADPGrantingTicketsDeleteV0 } from '@cells-components/bgadp-granting-tickets-v0/bgadp-granting-tickets-v0.js';
import { LitElement } from 'lit-element';

export class LoginDm extends LitElement {

  constructor() {
    super();
    this.host = 'https://artichoke.platform.bbva.com';
    this.country = 'pe';
    this.version = '0';
  }

  static get is() {
    return 'login-dm';
  }

  static get properties() {
    return {
      host: {
        type: String
      },
      country: {
        type: String
      }
    };
  }
  /**
   * Creates the bgadp object and launch the request to granting ticket service for login.
   * @param {String} config.userId
   * @param {String} config.password
   * @param {String} config.consumerId
   */
  login({ userId, password, consumerId }) {
    console.log(userId, password, consumerId);
    const dp = new BGADPGrantingTicketsPostV0(this.country, {
      host: this.host,
      version: this.version
    });

    dp.generateRequest({
      consumerId,
      userId,
      password
    }).then(this._parseLoginResponse.bind(this)).catch(this._parseLoginError.bind(this));
  }
  /**
   * Use this function to parse the service response.
   * In this sample we just dispatch an event with the raw data.
   * @param {*} response xhr Response
   */
  _parseLoginResponse({ response }) {
    this.dispatchEvent(new CustomEvent('login-success', {
      composed: true,
      detail: response
    }));
  }
  /**
   * Use this function to parse the service error.
   * In this sample we just dispatch an event with the error.
   * @param {*} error
   */
  _parseLoginError(error) {
    this.dispatchEvent(new CustomEvent('login-error', {
      composed: true,
      detail: error
    }));

  }


  /**
   * Creates the bgadp object and launch the request to granting ticket service for logout.
   */
  logout() {
    const dp = new BGADPGrantingTicketsDeleteV0(this.country, {
      host: this.host,
      version: this.version
    });

    dp.generateRequest().then(this._parseLogoutResponse.bind(this)).catch(this._parseLogoutError.bind(this));
  }


  /**
   * Function to parse the service response.
   * In this sample we just dispatch an event with the raw data.
   * @param {*} response xhr Response
   */
  _parseLogoutResponse({ response }) {
    this.dispatchEvent(new CustomEvent('logout-success', {
      composed: true,
      detail: response
    }));
  }
  /**
   * Function to parse the service error.
   * In this sample we just dispatch an event with the error.
   * @param {*} error
   */
  _parseLogoutError(error) {
    this.dispatchEvent(new CustomEvent('logout-error', {
      composed: true,
      detail: error
    }));

  }

}

window.customElements.define(LoginDm.is, LoginDm);
