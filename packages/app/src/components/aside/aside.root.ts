import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { twMerge } from 'tailwind-merge'

@customElement('aside-root')
export class AsideRoot extends BaseElement(LitElement) {
  protected defaultClass = twMerge(
    'fixed top-10 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto',
    'border-r border-border md:sticky md:block'
  )
  render() {
    return html`
      <div class=${this.elementClass}>
        <div class="h-full py-6 pr-4 lg:py-8">
          <slot></slot>
        </div>
      </div>
    `
  }
}
