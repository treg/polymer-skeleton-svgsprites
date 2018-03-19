import logo from '../../../assets/logo.svg';
import {Polymer} from '@polymer/polymer';

import css from './style.pcss';
import template from './template.html';
import '../../dumbs/sk-button';

export default class SkApp extends PolymerElement {

  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      }
    };
  }

  static get template() {
    return Polymer.html([`<style>${css}</style> ${template}`]);
  }
}

window.customElements.define('sk-app', SkApp);
