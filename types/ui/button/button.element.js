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
const colorClasses = {
    default: 'w-full bg-primary text-primary-foreground shadow-sm hover:bg-default/90',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline: 'text-secondary-foreground border border-input shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    none: '',
};
const size = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
};
let ButtonElement = class ButtonElement extends TailwindMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'default';
        this.disabled = false;
        this.defaultClass = twMerge('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors', 'focus:outline-none focus:ring-2 focus:ring-ring');
        this.onClick = (e) => {
            e.preventDefault();
            if (this.disabled) {
                e.stopPropagation();
            }
        };
    }
    get elementClass() {
        return twMerge(this.defaultClass, colorClasses[this.variant], size[this.size], this.disabled && 'opacity-50 cursor-default', this.getAttribute('class'));
    }
    render() {
        return html `
      <button
        id=${this.id}
        class=${this.elementClass}
        aria-label=${this.getAttribute('aria-label')}
        @click=${this.onClick}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
    }
};
__decorate([
    property({ type: String })
], ButtonElement.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], ButtonElement.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], ButtonElement.prototype, "disabled", void 0);
ButtonElement = __decorate([
    customElement('button-element')
], ButtonElement);
export { ButtonElement };
