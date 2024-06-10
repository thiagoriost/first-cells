import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';


class HomePage extends CellsPage {
  static get is() {
    return 'home-page';
  }

  constructor() {
    console.log('constructor => home-page');
    super();
  }

  goToAnotherPage(_page) {
    this.navigate(_page);
  }

  render() {
    return html`

    <demo-app-template data-cells-type="template">
      <div slot="app-main-content">
        <h1>home-page</h1>
        <bbva-button-default type="submit" @click=${()=>this.goToAnotherPage('login')}>
          Go to login-page
        </bbva-button-default>
        <bbva-button-default type="submit" @click=${()=>this.goToAnotherPage('goal')}>
          Go to goal-page
        </bbva-button-default>
         <bbva-button-default type="submit" @click=${()=>this.goToAnotherPage('testinglitcomponent')}>
          Go to testlitComponent-page
        </bbva-button-default>
      </div>
    </demo-app-template>

  `;
  }

}
window.customElements.define(HomePage.is, HomePage);
