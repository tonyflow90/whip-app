// import { html, render } from '../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';


class ElAudio extends HTMLElement {

    constructor() {
        super();
        this.active = false
        this.url = '';
        this.timeout = 1000;
        this.audioBuffer = undefined;
    }

    connectedCallback(e) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();
        fetch(this.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.audioBuffer = audioBuffer;
            });
    }

    disconnectedCallback() {
    }

    static get observedAttributes() {
        return ['url', 'timeout'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case 'url':
                this.url = newVal;
                break;
            case 'timeout':
                this.timeout = newVal;
                break;
        }
    }

    playSound() {
        if(!this.active)  {
            this.active=true;
            this._play(this.audioBuffer);
        }
    }

    _play(audioBuffer) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
        setTimeout(() => {
            source.stop();
            this.active = false;
        }, this.timeout);
    }

    _playTestSound() {
        this._setActive(true);
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();
        var oscillator = context.createOscillator();
        oscillator.frequency.value = 200;
        oscillator.connect(context.destination);
        oscillator.start(0);
        setTimeout(() => {
            oscillator.stop(0);
            this.active = false;
        }, this.timeout);
    }

}

window.customElements.define('el-audio', ElAudio);