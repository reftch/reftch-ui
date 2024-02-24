import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('form-control')
export class FormControl extends BaseElement(LitElement) {
  @property({ type: String }) error: 'grammar' | 'false' | 'spelling' | 'true' = 'false'

  protected defaultClass = 'relative mt-1'

  render() {
    return html`
      <div class=${this.elementClass} aria-invalid=${!!this.error}>
        <slot></slot>
      </div>
    `
  }
}
