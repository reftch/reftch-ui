import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

@customElement('dropdown-menu-item')
export class DropdownMenuItem extends BaseElement(LitElement) {
  @property({ type: Boolean }) disabled = false

  protected defaultClass = twMerge(
    'relative flex cursor-default select-none items-center rounded-sm px-3 py-1.5',
    'text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
    'cursor-pointer hover:bg-muted'
  )

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
