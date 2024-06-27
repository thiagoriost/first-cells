// import { setDocumentCustomStyles, } from '@bbva-web-components/bbva-core-lit-helpers';
import { generateFlatGridZones, grid } from '@bbva-web-components/bbva-foundations-styles';
import { css, } from 'lit-element';
import { setDocumentCustomStyles, setComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';

setDocumentCustomStyles(generateFlatGridZones(grid));

setDocumentCustomStyles(css`
  body {
    margin: 0;
  }
`);

setComponentSharedStyles('bbva-button-default-shared-styles', css`
  :host(.btn) {
    margin-top: 2rem;
  }
`);
