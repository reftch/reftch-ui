var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindMixin } from '$ui';
import { twMerge } from 'tailwind-merge';
let SeparatorElement = class SeparatorElement extends TailwindMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.type = 'horizontal';
        this.defaultClass = 'shrink-0 bg-border border-border';
    }
    get elementClass() {
        return twMerge(this.defaultClass, this.type === 'horizontal' ? 'border-b' : 'border-l', this.getAttribute('class'));
    }
    render() {
        return html ` <div class=${this.elementClass}></div> `;
    }
};
__decorate([
    property({ type: String })
], SeparatorElement.prototype, "type", void 0);
SeparatorElement = __decorate([
    customElement('separator-element')
], SeparatorElement);
export { SeparatorElement };
