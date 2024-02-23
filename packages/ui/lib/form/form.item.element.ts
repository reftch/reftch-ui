import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('form-item')
export class FormItem extends BaseElement(LitElement) {
  @property({ type: Boolean }) show = true

  protected defaultClass =
    'text-sm text-primary rtl:text-right font-medium block mb-1'

  get wrapper() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }

  render() {
    return html`${this.show ? this.wrapper : html`<slot></slot>`}`
  }
}
