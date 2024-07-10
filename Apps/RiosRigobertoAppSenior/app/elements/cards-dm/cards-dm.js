import { BGADPCustomersGetV1 } from '@cells-components/bgadp-customers-v1';
import { BGADPCardsBalancesGetV1 } from '@cells-components/bgadp-cards-v1';
import { LitElement } from 'lit-element';

export class DashboardDm extends LitElement {

  constructor() {
    super();
    console.log('DashboardDm');
    this.host = 'https://artichoke.platform.bbva.com';
    this.country = 'pe';
    this.customerVersion = '1';
  }

  static get is() {
    return 'cards-dm';
  }

  static get properties() {
    return {
      host: {
        type: String
      },
      country: {
        type: String
      },
      customerVersion: {
        type: String,
        attribute: 'customer-version'
      }
    };
  }

  getCustomers() {
    console.log('getCustomers');
    const dp = new BGADPCustomersGetV1({
      host: this.host,
      version: this.customerVersion
    });

    dp.generateRequest().then(this._parseCustomers.bind(this)).catch(error => {
      this.dispatchEvent(new CustomEvent('cutomers-error', {
        composed: true,
        detail: error
      }));

    });
  }

  _parseCustomers({ response }) {
    console.log(response);
    const data = JSON.parse(response).data;
    this.dispatchEvent(new CustomEvent('customers-success', {
      composed: true,
      detail: data
    }));
  }

}

window.customElements.define(DashboardDm.is, DashboardDm);
