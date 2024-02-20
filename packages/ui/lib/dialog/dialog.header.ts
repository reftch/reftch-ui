import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('dialog-header')
export class DialogHeader extends BaseElement(LitElement) {
  protected defaultClass = 'flex flex-col space-y-1.5 text-center sm:text-left'

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
