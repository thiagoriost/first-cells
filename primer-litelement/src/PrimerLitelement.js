import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './primer-litelement.css.js';
import '@bbva-web-components/bbva-form-text/bbva-form-text.js';
import '@bbva-web-components/bbva-form-password/bbva-form-password.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-progress-content/bbva-progress-content.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <primer-litelement></primer-litelement>
 * ```
 */
export class PrimerLitelement extends LitElement {
  static get properties() {
    return {
      userInputLabel: {
        type: String,
        attribute: 'user-input-label'
      },
      userInputValue: {
        type: String,
        attribute: 'user-input-value'
      },
      passwordInputLabel: {
        type: String,
        attribute: 'password-input-label'
      },
      passwordInputValue: {
        type: String,
        attribute: 'password-input-value'
      },
      buttonText: {
        type: String,
        attribute: 'button-text'
      },
      loading: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.userInputLabel = 'Username';
    this.userInputValue = '';
    this.passwordInputLabel = 'Password';
    this.passwordInputValue = '';
    this.buttonText = 'Submit';
    this.loading = false;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('primer-litelement-shared-styles'),
    ];
  }

  render() {
    return html`
      <h1>BBVA</h1>
      ${
        this.loading
        ? html` <bbva-progress-content ?visible="${this.loading}"></bbva-progress-content> `
        : html`
            <form>
              <bbva-form-text
                required
                label=${this.userInputLabel}
                .value=${this.userInputValue}
                @input="${(e) => {this.userInputValue = e.target.value; console.log(this.userInputValue)}}"
                >
              </bbva-form-text>
              <bbva-form-password
                required
                label=${this.passwordInputLabel}
                .value=${this.passwordInputValue}
                @input="${(e) => {this.passwordInputValue = e.target.value; console.log(this.passwordInputValue)}}"
                type="password">
              </bbva-form-password>
              <bbva-button-default type="submit" ?disabled="${!this.userInputValue || !this.passwordInputValue}">
                ${this.buttonText}
              </bbva-button-default>
            </form>
      `}
    `;
  }
}
