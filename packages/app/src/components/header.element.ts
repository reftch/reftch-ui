import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('header-element')
export class HeaderElement extends BaseElement(LitElement) {
  render() {
    return html`
      <div class="pb-0">
        <div class="text-2xl text-primary font-bold leading-none tracking-tight p-7 pl-10">
          <slot></slot>
        </div>
        <separator-element></separator-element>
      </div>
    `
  }
}
