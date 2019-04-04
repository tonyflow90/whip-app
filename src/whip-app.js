// import { html, render } from '../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';

import './el-audio.js'
import './el-gyroscope.js'

class WhipApp extends HTMLElement {
    constructor() {
        super();
        this.x=0;
        this.y=0;
        this.z=0;
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        render(this.template(), this._shadowRoot, { eventContext: this });
    }

    _toggleShowAcceleration(e) {
        e.preventDefault();
        let el = this._shadowRoot.querySelector('#accelerationDialog')
        el.open = !el.open;
    }

    _formatNumber(number) {
        return number.toFixed(3);
    }

    _playSound(e) {
        e.preventDefault();
        let el = this._shadowRoot.querySelector('#audio')
        el.playSound();
    }

    template() {
        return html`
                <style>
                :host {
                    display: block;
                }

                [title] {
                    font-family: "RNS-B";
                    font-size: 48px;
                }

                .flex-container {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    height: 100vh;
                }

                .header {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    background-color: #008b8b;
                    min-height: 72px;
                }

                .acceleration {
                    display: flex;
                    align-items: flex-end;
                    flex-direction: column;
                }


                .acceleration-items {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    flex: auto;
                    background-color: #A9A9A9;
                    justify-content: center;
                    align-items: center;
                }

                .footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    background-color: black;
                    color: white;
                    padding: 12px;
                    bottom: 0;
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
                <el-gyroscope id="gyroscope" x-axis="${this.x}" y-axis="${this.y}" z-axis="${this.z}"></el-gyroscope>

                <el-audio id="audio" url="./audio/whip.mp3" timeout="550"></el-audio>

                <dialog id="accelerationDialog">
                    <div class="acceleration">
                        <div class="acceleration-items">
                            <p>x-axis: ${this._formatNumber(this.x)}</p>
                            <p>y-axis: ${this._formatNumber(this.y)}</p>
                            <p>y-axis: ${this._formatNumber(this.z)}</p>
                        </div>
                    </div>
                </dialog>

                <div class="flex-container">
                    <div class="header">
                        <div title>Whip</div>
                    </div>

                    <div class="content">
                        <button @click=${this._toggleShowAcceleration}>Show Acceleration ✅</button>
                        <div @click=${this._playSound}>
                            <img src="./images/whip.png"/>
                        </div>
                    </div>

                    <div class="footer">
                        <div>Made by</div>
                        <div>Keno Bohlen</div>
                    </div>
                </div>
        `;
    }
}

window.customElements.define('whip-app', WhipApp);