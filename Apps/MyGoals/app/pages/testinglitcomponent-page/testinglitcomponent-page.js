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

    <h1>TEST</h1>

  `;
  }

}
window.customElements.define(Testinglitcomponent.is, Testinglitcomponent);
