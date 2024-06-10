import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';

/**
 * AL crear una nueva pagina, recordar configurar la ruta en
 * Apps\MyGoals\app\scripts\app.js
 * Apps\MyGoals\app\config\dev.js
 */

class StandarPage extends CellsPage {
  static get is() {
    return 'standar-page';
  }

  constructor() {
    console.log('constructor => standar-page');
    super();
  }

  render() {
    return html`

    <demo-app-template data-cells-type="template">
      <div slot="app-main-content">
        <h1>standar-page</h1>
      </div>
    </demo-app-template>

  `;
  }

}
window.customElements.define(StandarPage.is, StandarPage);
