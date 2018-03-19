
import {Polymer} from '@polymer/polymer';

import css from './style.pcss';
import template from './template.html';

export default class SkButton extends Polymer.Element {
  static get template() {
    return Polymer.html([`<style>${css}</style> ${template}`]);
  }
}

window.customElements.define('sk-button', SkButton, {extends: 'button'});
