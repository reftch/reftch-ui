import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

type RadioSize = keyof typeof size

const size = {
  default: 'h-4 w-4',
  sm: 'h-3 w-3',
  lg: 'h-5 w-5',
}

@customElement('radio-element')
export class RadioElement extends BaseElement(LitElement) {
  @property({ type: Boolean }) checked = false
  @property({ type: Boolean }) disabled = false
  @property({ type: String }) size: RadioSize = 'default'

  get radioUnchecked() {
    return html`
      <div id="unchecked" class=${size[this.size]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
          />
        </svg>
      </div>
    `
  }

  get radioChecked() {
    return html`
      <div id="checked" class=${size[this.size]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
          />
        </svg>
      </div>
    `
  }

  handleClick = () => {
    if (!this.disabled) {
      this.emit('change', { value: this.checked })
    }
  }

  protected defaultClass = 'flex cursor-pointer relative left-px items-center'

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      this.disabled && 'opacity-50 cursor-default',
      this.getAttribute('class')
    )
  }

  render() {
    return html`
      <div class=${this.elementClass} @click=${this.handleClick}>
        ${this.checked ? this.radioChecked : this.radioUnchecked}
        <div
          class="relative inline-block pl-[0.5em] whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <slot></slot>
        </div>
      </div>
    `
  }
}
