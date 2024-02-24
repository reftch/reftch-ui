import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('home-page')
export class HomePage extends BaseElement(LitElement) {
  render() {
    return html`
      <div class="p-0 text-primary">
        <header-element>reftch ui</header-element>

        <aside-root>
          <aside-container>
            <aside-item href="/docs/introduction" type="bold">Introduction</aside-item>
            <aside-item href="/docs/getting-started" type="bold">Getting Started</aside-item>
          </aside-container>
          <aside-container title="Components">
            <aside-item href="/docs/button">Button</aside-item>
            <aside-item href="/docs/radio">Radio</aside-item>
          </aside-container>
        </aside-root>
      </div>
    `
  }
}
