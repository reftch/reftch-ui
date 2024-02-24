import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { twMerge } from 'tailwind-merge'

@customElement('aside-item')
export class AsideItem extends BaseElement(LitElement) {
  @property({ type: String }) href = '#'
  @property({ type: String }) type: 'bold' | 'default' = 'default'

  protected defaultClass = 'grid grid-flow-row auto-rows-max gap-0.5 pl-8 text-sm'

  protected get linkClass() {
    return twMerge(
      'group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm',
      'text-foreground transition-colors focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background bg-transparent hover:bg-muted/50',
      this.type === 'bold' && 'font-semibold'
    )
  }

  render() {
    return html`
      <div class=${this.elementClass}>
        <a href=${this.href} class=${this.linkClass}>
          <slot></slot>
        </a>
      </div>
    `
  }
}