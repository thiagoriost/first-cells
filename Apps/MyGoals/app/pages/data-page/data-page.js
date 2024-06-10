import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import { bbvaReturn } from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';

const iconReturn = bbvaReturn();

class DataPage extends CellsPage {
  static get is() {
    return 'data-page';
  }

  constructor() {
    console.log('constructor => data-page');
    super();
    this.totalGoalAmount = 0;
    this.totalSavedAmount = 0;
    this.handleChannels();
  }

  handleChannels() {
    this.subscribe('total-goals-channel', data => {
      this.totalGoalAmount = data.totalGoalAmount;
      this.totalSavedAmount = data.totalSavedAmount;
    });
  }

  static get properties() {
    return {
      totalSavedAmount: { type: Number },
      totalGoalAmount: { type: Number },
      goals: { type: Array }
    };
  }

  static get styles() {
    return css`
    bbva-web-link {
      margin: 1rem 0;
    }
  `;
  }

  goToAnotherPage(_page) {
    this.navigate(_page);
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app-main-content">
        <bbva-web-link @click=${()=>this.goToAnotherPage('goal')}>Back to goal page</bbva-web-link>
          ${this._summaryTpl}
        </div>
      </demo-app-template>
      `;
  }

  get _summaryTpl() {
    return html`
    <bbva-list-goal
      goal-title="Summary"
      progress-bar-color="#48AE64"
      amount=${this.totalSavedAmount}
      total-amount=${this.totalGoalAmount}
      show-amounts
      decimals-hidden
      description3="Saved"
      percentage
      badge-type="success"
      badge-title="${this.totalSavedAmount >= this.totalGoalAmount ? 'Completed!' : ''}"
      >
    </bbva-list-goal>
  `;
  }

}
window.customElements.define(DataPage.is, DataPage);
