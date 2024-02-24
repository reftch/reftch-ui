import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { consume } from '@lit/context'
import { SelectState, selectContext } from './select.element'
import { twMerge } from 'tailwind-merge'

@customElement('select-item')
export class SelectItem extends BaseElement(LitElement) {
  @property() value = ''

  @consume({ context: selectContext, subscribe: true })
  state: SelectState | undefined

  protected defaultClass = twMerge(
    'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-3 pr-2 text-sm text-ellipsis',
    'outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    'hover:bg-muted text-primary'
  )

  get label() {
    const slot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot')
    return slot
      ?.assignedNodes()
      .map((n) => n.textContent)
      .join('')
  }

  onSelect() {
    if (this.state) {
      this.state.value.id = this.value
      this.state.value.label = this.label ?? ''
    }
  }

  protected get elementClass() {
    return twMerge(this.defaultClass, this.value === this.state?.value.id && 'bg-muted', this.getAttribute('class'))
  }

  render() {
    return html`
      <div @click=${this.onSelect} class=${this.elementClass}>
        <div class="w-full flex justify-between">
          <div>
            <slot></slot>
          </div>
          <div>${this.value === this.state?.value.id ? this.checked : nothing}</div>
        </div>
      </div>
    `
  }

  get checked() {
    return html`
      <div class="relative top-0.5 w-2.5 h-2.5 opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="currentColor"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </div>
    `
  }
}
