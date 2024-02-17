import { LitElement, html } from 'lit'
import { BaseElement } from '@reftch-ui/tailwind'
import { customElement } from 'lit/decorators.js'

@customElement('button-element')
export class ButtonElement extends BaseElement(LitElement) {
  protected defaultClass = 'bg-gray-200 text-sm px-2.5 py-2 rounded-md text-sm border border-gray-100'

  render() {
    return html`
      <button class=${this.elementClass}>
        <slot></slot>
      </button>
    `
  }
}
