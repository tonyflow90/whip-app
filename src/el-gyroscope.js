// import { html, render } from '../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';

class ElGyroscope extends HTMLElement {

  constructor() {
    super();
    this.xAxis = 0;
    this.yAxis = 0;
    this.zAxis = 0;
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    render(this.template(), this._shadowRoot, { eventContext: this });
  }

  connectedCallback(e) {
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this.deviceMotionListener.bind(this), false);
    }
    else {
      const toast = document.querySelector('paper-toast');
      this.$.toast.textContent = "devicemotion not supported on your device or browser.";
      this.$.toast.open();
    }
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['xAxis', 'yAxis', 'zAxis'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case 'xAxis':
        this.xAxis = newVal;
        break;
      case 'yAxis':
        this.yAxis = newVal;
        break;
      case 'zAxis':
        this.zAxis = newVal;
        break;
    }
  }

  deviceMotionListener(event) {
    this.setAttribute('x-axis', (event.acceleration.x != null || event.acceleration.x != undefined ? event.acceleration.x : 0) );
    this.setAttribute('y-axis', (event.acceleration.y != null || event.acceleration.y != undefined ? event.acceleration.y : 0) );
    this.setAttribute('z-axis', (event.acceleration.z != null || event.acceleration.z != undefined ? event.acceleration.z : 0) );
  }

  template() {
    return html`
        <style>
          :host {
            display: block;
          }
          dialog {
            background-color: black;
            color: #A9A9A9;
            width: 100vw;
            padding: 12px 0px 12px 0px;
            margin: 0;
            border: none;
            border-radius: 25px;
          }
        </style>
        <dialog id="accelerationDialog">
          <p>devicemotion not supported on your device or browser.</p>
        </dialog>
    `;
  }
}

window.customElements.define('el-gyroscope', ElGyroscope);