import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './my-first-custom-element.css.js';
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
 *   <my-first-custom-element></my-first-custom-element>
 * ```
 */
export class MyFirstCustomElement extends LitElement {

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
      getComponentSharedStyles('my-first-custom-element-shared-styles'),
    ];
  }

  _submit(ev) {
    ev.preventDefault();
    this.loading = true;
    this.dispatchEvent(new CustomEvent('my-custom-element-submit', {
      bubbles: true,
      composed: true,
      detail: {
        username: this.userInputValue,
        password: this.passwordInputValue
      }
    }));
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  render() {
    return html`
    <slot></slot>
    <form ?hidden="${this.loading}">
      <bbva-form-text
          required
          label=${this.userInputLabel}
          .value=${this.userInputValue}
          @input="${(e) => this.userInputValue = e.target.value}"
          >
        </bbva-form-text>
        <bbva-form-password
          required
          label=${this.passwordInputLabel}
          .value=${this.passwordInputValue}
          @input="${(e) => this.passwordInputValue = e.target.value}"
          type="password">
        </bbva-form-password>
        <bbva-button-default type="submit" ?disabled="${!this.userInputValue || !this.passwordInputValue}" @click="${this._submit}">
          ${this.buttonText}
        </bbva-button-default>
    </form>
    <bbva-progress-content ?visible="${this.loading}"></bbva-progress-content>
    `;
  }
}
