import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('form-description')
export class FormDescription extends BaseElement(LitElement) {
  protected defaultClass = 'text-sm relative opacity-70'

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
