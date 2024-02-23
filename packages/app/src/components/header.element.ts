import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('header-element')
export class HeaderElement extends BaseElement(LitElement) {
  render() {
    return html`
      <div class="pb-0">
        <div
          class="text-xl text-primary font-semibold leading-none tracking-tight p-7 pl-7"
        >
          Reftch UI Components
        </div>
        <separator-element></separator-element>
      </div>
    `
  }
}
