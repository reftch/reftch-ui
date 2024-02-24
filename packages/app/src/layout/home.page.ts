import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('home-page')
export class HomePage extends BaseElement(LitElement) {
  containeClass =
    'flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10'

  render() {
    return html`
      <div class="p-0 text-primary">
        <header-element>reftch ui</header-element>

        <div class="min-h-[calc(100vh-64px)]">
          <div class=${this.containeClass}>
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

            <main class="relative pb-6 pl-4 pr-4 pt-16 md:pl-0 lg:gap-10 xl:grid-cols-[1fr_220px] xl:grid text-primary">
              Content
            </main>
          </div>
        </div>
      </div>
    `
  }
}
