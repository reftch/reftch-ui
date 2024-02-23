import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('dialog-title')
export class DialogTitle extends BaseElement(LitElement) {
  protected defaultClass =
    'text-lg font-semibold leading-none tracking-tight text-primary'

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
