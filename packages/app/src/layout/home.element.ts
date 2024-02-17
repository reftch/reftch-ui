import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('home-element')
export class HomeElement extends BaseElement(LitElement) {
  render() {
    return html`
      <div>
        <h1 class="text-2xl text-primary">Home Element</h1>
        <slot></slot>

        <div class="flex gap-2">
          <button-element>Default</button-element>
          <button-element variant="secondary">Secondary</button-element>
          <button-element variant="destructive">Destructive</button-element>
          <button-element variant="outline">Outline</button-element>
          <button-element variant="ghost">Ghost</button-element>
          <button-element variant="link">Link</button-element>
        </div>
      </div>
    `
  }
}
