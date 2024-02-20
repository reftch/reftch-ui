import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('dialog-description')
export class DialogDescription extends BaseElement(LitElement) {
  protected defaultClass = 'relative top-0.5 text-sm text-muted-foreground'

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
