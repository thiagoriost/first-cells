import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-dev-demo-helper/demo-build.js';

import styles from './dm-rigoberto-rios.css.js';
import './fake-login.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <dm-rigoberto-rios></dm-rigoberto-rios>
 * ```
 */
export class DmRigobertoRios extends LitElement {

  static get properties(){
    return {
      host: { type: String, },
      version: { type: Number, },
      requiredToken: {
        type: String,
        attribute: 'required-token',
      },
      native: { type: Boolean, },
      cardId: {
        type: String,
        attribute: 'card-id',
      }
    }
  }

  constructor() {
    super();
    Object.assign(this, {
      host: '',
      version: 1,
      requiredToken: 'tsec',
      native: false,
    });
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('dm-rigoberto-rios-shared-styles'),
    ];
  }

  get config() {
    return {
      htmlContext: this,
      host: this.host,
      version: this.version,
      requiredToken: this.requiredToken,
      native: this.native
    };
  }

  getCardsList() {
    this.dispatchEvent(new CustomEvent('cards-request-start', { bubbles: true, }));
    getCardsList(this.config)
      .then((data) => {
        this.dispatchEvent(new CustomEvent('cards-request-success', {
          bubbles: true,
          detail: data
        }));
      })
      .catch(error => {
        this.dispatchEvent(new CustomEvent('cards-request-error', {
          bubbles: true,
          detail: error
        }));
      });
  }

  getCardsListActive({value}) {
    if (value) {
      this.getCards();
    }
  }

  getCardDetail() {
    this.dispatchEvent(new CustomEvent('card-detail-request-start', { bubbles: true }));
    getCardDetail(this.cardId, this.config, this)
      .then(data => {
        this.dispatchEvent(new CustomEvent('card-detail-request-success', {
          bubbles: true,
          detail: data
        }));
      })
      .catch(error => {
        this.dispatchEvent(new CustomEvent('card-detail-request-error', {
          bubbles: true,
          detail: error
        }));
      });
  }

  getCardDetailActive({value}) {
    if (value) {
      this.getCardDetail();
    }
  }

  render() {
    return html`
    <body>
    <bbva-dev-demo-helper events='["fake-login", "cards-request-start", "cards-request-success", "cards-request-error", "card-detail-request-start", "card-detail-request-success", "card-detail-request-error"]'>
      <bbva-dev-demo-case heading="WebComponent events" description="Requests by methods and events in webcomponent" src="./basic.html">
        <template>
          <fake-login></fake-login>
          <dm-rigoberto-rios id="cardsDM" version="0"></dm-rigoberto-rios>
          <dm-rigoberto-rios id="cardDetailDM" card-id="1102"></dm-rigoberto-rios>
          <bbva-button-default class="btn full-width" disabled>getCards()</bbva-button-default>
          <bbva-button-default class="btn full-width" disabled>getCardDetail()</bbva-button-default>
          <div class="loading" hidden>Cargando datos...</div>
          <script type="module">
            const fakeLogin = document.querySelector('fake-login');
            const cardsDM = document.querySelector('#cardsDM');
            const cardDetailDM = document.querySelector('#cardDetailDM');
            const buttons = document.querySelectorAll('.btn');
            const loading = document.querySelector('.loading');

            /**
             * Se habilitan los botones cuando se realiza la autenticación
            */
            fakeLogin.addEventListener('fake-login', () => {
              buttons.forEach(button => button.removeAttribute('disabled'));
            });

            /**
             * Se invoca el método getCards del componente
            */
            buttons[0].addEventListener('click', () => {
              cardsDM.getCardsList();
              loading.hidden = false;
              buttons[0].setAttribute('disabled', true);
            });

            /**
             * Se agrega el listener de éxito para habilitar el botón y apagar el indicador de carga de datos
            */
            cardsDM.addEventListener('cards-request-success', () => {
              loading.hidden = true;
              buttons[0].removeAttribute('disabled');
            });

            /**
             * Se agrega el listener de falla para habilitar el botón y apagar el indicador de carga de datos
            */
            cardsDM.addEventListener('cards-request-error', () => {
              loading.hidden = true;
              buttons[0].removeAttribute('disabled');
            });

          /**
             * Se invoca el método getCards del componente
            */
            buttons[1].addEventListener('click', () => {
              cardDetailDM.getCardDetail();
              loading.hidden = false;
              buttons[1].setAttribute('disabled', true);
            });

            /**
             * Se agrega el listener de éxito para habilitar el botón y apagar el indicador de carga de datos
            */
            cardDetailDM.addEventListener('card-detail-request-success', () => {
              loading.hidden = true;
              buttons[1].removeAttribute('disabled');
            });

            /**
             * Se agrega el listener de falla para habilitar el botón y apagar el indicador de carga de datos
            */
            cardDetailDM.addEventListener('card-detail-request-error', () => {
              loading.hidden = true;
              buttons[1].removeAttribute('disabled');
            });

            /**
             * Se inicializa la propiedad host para los componentes
             */
            fakeLogin.host = cardsDM.host = cardDetailDM.host = 'https://artichoke.platform.bbva.com';

          </script>
        </template>
      </bbva-dev-demo-case>
    </bbva-dev-demo-helper>
  </body>
    `;
  }
}
