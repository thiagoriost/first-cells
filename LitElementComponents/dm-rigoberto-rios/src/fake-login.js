import { LitElement, html } from 'lit-element';
  import { BGADPGrantingTicketsPOST } from '@cells-components/bgadp-granting-tickets';

  class FakeLogin extends LitElement {
    static get is(){
      return 'fake-login';
    }
    static get properties(){
      return {
        host: {
          type: String,
        },
        requiredToken: {
          type: String,
          attribute: 'required-token',
        },
      };
    }
    constructor() {
      super();
      this.host = '';
      this.requiredToken = 'tsec';
      if (!window.sessionStorage[ this.requiredToken ]) {
        window.sessionStorage[ this.requiredToken ] = ' ';
      }
    }

    updated(properties) {
      if (properties.has('host') && this.host ) {
        this._login();
      }
    }

    _login() {
      const session = new BGADPGrantingTicketsPOST('mx', {
        host: this.host,
        version: 0,
        requiredToken: this.requiredToken
      });
      session.htmlContext = this;
      session.generateRequest(true, {
        userId: '1234567890',
        password: '112233',
        consumerId: '10000033'
      }).then(() => {
        this.dispatchEvent(new CustomEvent('fake-login', {
          bubbles: true,
        }));
      });
    }
  }
  window.customElements.define(FakeLogin.is, FakeLogin);
