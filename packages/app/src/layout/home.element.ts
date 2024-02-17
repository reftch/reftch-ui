import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('home-element')
export class HomeElement extends BaseElement(LitElement) {
  render() {
    return html`
      <div>
        <h1 class="text-2xl">Home Element</h1>
        <slot></slot>

        <button-element>Click me!</button-element>
      </div>
    `
  }
}
