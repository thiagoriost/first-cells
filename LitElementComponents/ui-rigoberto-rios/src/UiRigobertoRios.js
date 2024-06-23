import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ui-rigoberto-rios.css.js';
import '@bbva-web-components/bbva-list-card';

export class UiRigobertoRios extends LitElement {

  static get properties() {
    return {
      /**
       * Description for property
       */
      name: {
        type: String,
      },
      itemList: {
        type: Array,
        attribute: 'item-list',
      },
    };
  }

  constructor() {
    super();
    this.name = 'Cells';
    this.itemList = [
      {
        'cardId': '1102',
        'number': '4165 5738 3765 5476',
        'numberType': {
          'id': 'PAN',
          'name': 'Permanent Account Number'
        },
        'cardType': {
          'id': 'CREDIT_CARD',
          'name': 'Tarjeta de crédito'
        },
        'title': {
          'id': 'CREDIT_MX',
          'name': 'Tarjeta de crédito'
        },
        'alias': 'Mi otra tarjeta crédito',
        'cutOffDate': '2017-10-01T12:00:00Z',
        'brandAssociation': {
          'id': 'VISA',
          'name': 'VISA'
        },
        'physicalSupport': {
          'id': 'NORMAL_PLASTIC',
          'name': 'Plástico normal'
        },
        'expirationDate': '2018-02-01T12:00:00Z',
        'holderName': 'Hugo Sánchez',
        'currencies': [ {
          'currency': 'MXN',
          'isMajor': true
        } ],
        'grantedCredits': [ {
          'amount': 100000,
          'currency': 'MXN'
        } ],
        'availableBalance': {
          'currentBalances': [ {
            'amount': 60000,
            'currency': 'MXN'
          } ],
          'postedBalances': [ {
            'amount': 60000,
            'currency': 'MXN'
          } ],
          'pendingBalances': [ {
            'amount': 0,
            'currency': 'MXN'
          } ]
        },
        'disposedBalance': {
          'currentBalances': [ {
            'amount': 40000,
            'currency': 'MXN'
          } ],
          'postedBalances': [ {
            'amount': 40000,
            'currency': 'MXN'
          } ],
          'pendingBalances': [ {
            'amount': 0,
            'currency': 'MXN'
          } ]
        },
        'status': {
          'id': 'OPERATIVE',
          'name': 'Operative card'
        },
        'images': [ {
          'id': 'FRONT_CARD',
          'name': 'Front face of the card',
          'url': 'https://www.bbva.com.co/content/dam/public-web/colombia/new-beginning/tarjetas-credito/mastercard-black.im1559860612544im.png?imwidth=768'
        }, {
          'id': 'BACK_CARD',
          'name': 'Back face of the card',
          'url': '/imageBack.jpg'
        } ]
      },
      {
        'cardId': '1101',
        'number': '4165 5738 3765 9836',
        'numberType': {
          'id': 'PAN',
          'name': 'Permanent Account Number'
        },
        'cardType': {
          'id': 'CREDIT_CARD',
          'name': 'Tarjeta de crédito'
        },
        'title': {
          'id': 'CREDIT_MX',
          'name': 'Tarjeta de crédito'
        },
        'alias': 'Mi tarjeta crédito *59836',
        'cutOffDate': '2016-10-01T12:00:00Z',
        'brandAssociation': {
          'id': 'VISA',
          'name': 'VISA'
        },
        'physicalSupport': {
          'id': 'NORMAL_PLASTIC',
          'name': 'Plástico normal'
        },
        'expirationDate': '2018-02-01T12:00:00Z',
        'holderName': 'Hugo Sánchez',
        'currencies': [ {
          'currency': 'MXN',
          'isMajor': true
        } ],
        'grantedCredits': [ {
          'amount': 80000,
          'currency': 'MXN'
        } ],
        'availableBalance': {
          'currentBalances': [ {
            'amount': 65000,
            'currency': 'MXN'
          } ],
          'postedBalances': [ {
            'amount': 15000,
            'currency': 'MXN'
          } ],
          'pendingBalances': [ {
            'amount': 50000,
            'currency': 'MXN'
          } ]
        },
        'disposedBalance': {
          'currentBalances': [ {
            'amount': 40000,
            'currency': 'MXN'
          } ],
          'postedBalances': [ {
            'amount': 15000,
            'currency': 'MXN'
          } ],
          'pendingBalances': [ {
            'amount': 0,
            'currency': 'MXN'
          } ]
        },
        'status': {
          'id': 'BLOCKED',
          'name': 'Blocked card'
        },
        'images': [ {
          'id': 'FRONT_CARD',
          'name': 'Front face of the card',
          'url': 'https://www.bbva.com.co/content/dam/public-web/colombia/new-beginning/tarjetas-credito/mastercard-platinum.im1559857656490im.png?imwidth=768'
        }, {
          'id': 'BACK_CARD',
          'name': 'Back face of the card',
          'url': '/imageBack.jpg'
        } ]
      }
    ];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('ui-rigoberto-rios-shared-styles'),
    ];
  }

  _handleClick(evt) {
    const { item } = evt.target;
    this.dispatchEvent(new CustomEvent('item-click', {
      bubbles: true,
      detail: item
    }));
  }

  render() {
    return html`
      <slot>
        ${this.itemList.map(item => html`
          <bbva-list-card
            type="card"
            card-title="${item.title.name}"
            card-image="${item.images[0].url}"
            currency-code="${item.currencies[0].currency}"
            amount="${item.availableBalance.currentBalances[0].amount}"
            num-product="${item.cardId}"
            @list-card-item-click="${ this._handleClick }"
            .item="${ item }"
          ></bbva-list-card>
        `)}
      </slot>
    `;
  }
}
