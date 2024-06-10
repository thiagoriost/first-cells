import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

bbva-form-text,
bbva-form-password {
  margin: 0 0 1rem;
}

bbva-button-default {
  width: 100%;
}

bbva-progress-content {
  height: 176px;
}
`;
