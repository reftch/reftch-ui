import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

@customElement('dialog-overlay')
export class DialogOverlay extends BaseElement(LitElement) {
  protected get elementClass() {
    return twMerge('fixed inset-0 z-50 bg-background/10 backdrop-blur-sm')
  }

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
