import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

type CheckboxSize = keyof typeof size

const size = {
  default: 'h-4 w-4',
  sm: 'h-3 w-3',
  lg: 'h-5 w-5',
}

@customElement('checkbox-element')
export class CheckboxElement extends BaseElement(LitElement) {
  @property({ type: Boolean }) checked = false
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) isPartlySelected = false
  @property({ type: String }) size: CheckboxSize = 'default'

  get checkboxUnchecked() {
    return html`
      <div id="unchecked" class=${size[this.size]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
          />
        </svg>
      </div>
    `
  }

  get checkboxChecked() {
    return html`
      <div id="checked" class=${size[this.size]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
          />
        </svg>
      </div>
    `
  }

  get checkboxPartly() {
    return html`
      <div id="partly" class=${size[this.size]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
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
        ${this.isPartlySelected
          ? this.checkboxPartly
          : this.checked
            ? this.checkboxChecked
            : this.checkboxUnchecked}
        <slot></slot>
      </div>
    `
  }
}
