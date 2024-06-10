import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';

import '../../components/my-first-custom/my-first-custom-element.js';
/**
 * AL crear una nueva pagina, recordar configurar la ruta en
 * Apps\MyGoals\app\scripts\app.js
 * Apps\MyGoals\app\config\dev.js
 */

class Testinglitcomponent extends CellsPage {
  static get is() {
    return 'testinglitcomponent-page';
  }

  constructor() {
    console.log('constructor => testinglitcomponent-page');
    super();
  }

  goToAnotherPage(_page) {
    this.navigate(_page);
  }

  render() {
    return html`

    <demo-app-template data-cells-type="template">
      <div slot="app-main-content">

        <h1>testinglitcomponent-page</h1>
        <bbva-button-default type="submit" @click=${()=>this.goToAnotherPage('home')}>
          Go to home-page
        </bbva-button-default>
        <my-first-custom-element></my-first-custom-element>
      </div>
    </demo-app-template>

  `;
  }

}
window.customElements.define(Testinglitcomponent.is, Testinglitcomponent);
