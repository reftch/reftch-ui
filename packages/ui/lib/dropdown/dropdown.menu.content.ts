import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

@customElement('dropdown-menu-content')
export class DropdownMenuContent extends BaseElement(LitElement) {
  protected defaultClass = twMerge(
    'absolute z-50 mt-1 min-w-[7rem] overflow-hidden rounded-md border',
    'bg-popover p-1 text-popover-foreground shadow-md',
    'animate-fade-in'
  )

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
      </div>
    `
  }
}
