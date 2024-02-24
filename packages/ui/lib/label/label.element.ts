import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

@customElement('label-element')
export class LabelElement extends BaseElement(LitElement) {
  @property({ type: Boolean }) error = false

  protected defaultClass = 'text-primary text-base font-semibold'

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      this.error && 'font-medium text-red-500 dark:text-red-700',
      this.getAttribute('class')
    )
  }

  render() {
    return html`
      <label class=${this.elementClass} htmlFor=${this.getAttribute('htmlFor')!}>
        <slot></slot>
      </label>
    `
  }
}
