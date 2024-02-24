import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('dialog-footer')
export class DialogFooter extends BaseElement(LitElement) {
  protected defaultClass = 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
