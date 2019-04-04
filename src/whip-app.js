// import { html, render } from '../node_modules/lit-html/lit-html.js';
import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

import './el-audio.js'
import './el-gyroscope.js'

class WhipApp extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        render(this.template(), this._shadowRoot, {
            eventContext: this
        });
    }

    toggleAccelerationDialog(e) {
        e.preventDefault();
        let el = this._shadowRoot.querySelector('#accelerationDialog')
        if (el.open) {
            el.close();
        } else {
            el.showModal();
        }
    }

    _playSound(e) {
        e.preventDefault();
        let el = this._shadowRoot.querySelector('#audio')
        el.playSound();
    }

    _formatNumber(number) {
        return number.toFixed(3);
    }

    template() {
        return html `
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
                    background-color: #008b8b;
                    height: 100vh;
                }

                .header {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    min-height: 72px;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    flex: auto;
                    justify-content: center;
                    align-items: center;
                }

                .footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding: 12px;
                    bottom: 0;
                }

                .social {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding: 12px;
                    bottom: 0;
                }

                .acceleration {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                }

                dialog {
                    position: fixed;
                    bottom: 0;
                    background-color: black;
                    color: #A9A9A9;
                    width: 100vw;
                    padding:0;
                    margin: 0;
                    border: none;
                }

                dialog a {
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    padding:12px;
                }

                .whip-image {
                    border-radius:50%;
                    max-width:400px;
                    width: 80vw;
                }
                .icon {
                    width: 48px;
                    padding: 12px;
                    color: grey;
                }
                </style>
                <el-gyroscope id="gyroscope" x-axis="${this.x}" y-axis="${this.y}" z-axis="${this.z}"></el-gyroscope>

                <el-audio id="audio" url="./audio/whip.mp3" timeout="550"></el-audio>

                <dialog id="accelerationDialog">
                        <div class="acceleration">
                            <p>x-axis: ${this._formatNumber(this.x)}</p>
                            <p>y-axis: ${this._formatNumber(this.y)}</p>
                            <p>y-axis: ${this._formatNumber(this.z)}</p>
                        </div>
                        <a @click=${this.toggleAccelerationDialog}>close</a>
                </dialog>

                <div class="flex-container">
                    <div class="header">
                        <div title>Whip-App</div>
                    </div>

                    <div class="content">
                        <div @click=${this._playSound}>
                            <img class="whip-image" src="./images/whip.png"/>
                        </div>
                    </div>

                    <div class="footer">
                        <!-- <a @click=${this.toggleAccelerationDialog}>Show Acceleration</a> -->
                        <!-- <br/> -->
                        <a>Made by</a>
                        <a>tonyflow90</a>
                        <div class="social">
                            <a href="https://github.com/tonyflow90">
                                <img class="icon" src="./images/github.svg"/>
                            </a>
                            <a href="https://twitter.com/itzeme">
                                <img class="icon" src="./images/twitter.svg"/>
                            </a>
                        </div>
                    </div>
                </div>
        `;
    }
}

window.customElements.define('whip-app', WhipApp);