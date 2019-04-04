// import { html, render } from '../node_modules/lit-html/lit-html.js';
import {
  html,
  render
} from 'https://unpkg.com/lit-html?module';

class ElGyroscope extends HTMLElement {

  constructor() {
    super();
    this.xAxis = 0;
    this.yAxis = 0;
    this.zAxis = 0;
    this._shadowRoot = this.attachShadow({
      'mode': 'open'
    });
    render(this.template(), this._shadowRoot, {
      eventContext: this
    });
  }

  connectedCallback(e) {
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this._deviceMotionListener.bind(this), false);
    } else {
      let el = this._shadowRoot.querySelector('#errorDialog')
      el.showModal();
    }
  }

  disconnectedCallback() {}

  get xAxis() {
    return this.getAttribute('xAxis');
  }

  set xAxis(newValue) {
    this.setAttribute('xAxis', newValue);
  }


  get yAxis() {
    return this.getAttribute('yAxis');
  }

  set yAxis(newValue) {
    this.setAttribute('yAxis', newValue);
  }


  get zAxis() {
    return this.getAttribute('zAxis');
  }

  set zAxis(newValue) {
    this.setAttribute('zAxis', newValue);
  }

  _close() {
    let el = this._shadowRoot.querySelector('#errorDialog')
    el.close();
  }

  _deviceMotionListener(event) {
    this.setAttribute('x-axis', (event.acceleration.x != null || event.acceleration.x != undefined ? event.acceleration.x : 0));
    this.setAttribute('y-axis', (event.acceleration.y != null || event.acceleration.y != undefined ? event.acceleration.y : 0));
    this.setAttribute('z-axis', (event.acceleration.z != null || event.acceleration.z != undefined ? event.acceleration.z : 0));
  }

  template() {
    return html `
        <style>
          :host {
            display: block;
          }
          dialog {
            bottom:0;
            position: fixed;
            flex-direction: column;
            background-color: black;
            color: #A9A9A9;
            width: 100vw;
            border: none;
          }
          p {
            display:flex;
            align-items: center;
            justify-content: center;
          }
        </style>
         <dialog id="errorDialog">
          <p>devicemotion not supported on your device or browser.</p>
          <a @click=${this._close}>close</a>
        </dialog>
    `;
  }
}

window.customElements.define('el-gyroscope', ElGyroscope);