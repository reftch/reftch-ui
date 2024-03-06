import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { consume } from '@lit/context'
import { SelectState, selectContext } from './select.element'
import { twMerge } from 'tailwind-merge'
import { SelectItemType } from '.'

@customElement('select-item')
export class SelectItem extends TailwindMixin(LitElement) {
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
      const option = this.state.options.find((v: SelectItemType) => v.id === this.value)
      if (option) {
        const idx = this.state.value.findIndex((v: SelectItemType) => v.id === this.value)
        if (this.state.multiple) {
          if (idx === -1) {
            this.state.value.push({ id: option.id, label: option.label })
          } else {
            this.state.value.splice(idx, 1)
          }
        } else {
          if (this.state.value.length === 0) {
            this.state.value.push({ id: option.id, label: option.label })
          }
          this.state.value[0].id = option.id
          this.state.value[0].label = option.label
        }
      }
    }
  }

  protected get elementClass() {
    return twMerge(this.defaultClass, this.selectedIndex !== -1 && 'bg-muted', this.getAttribute('class'))
  }

  get selectedIndex() {
    return this.state?.value.findIndex((v: SelectItemType) => v.id === this.value)
  }

  render() {
    return html`
      <div @click=${this.onSelect} class=${this.elementClass}>
        <div class="w-full flex justify-between">
          <div>
            <slot></slot>
          </div>
          <div>${this.selectedIndex !== -1 ? this.checked : nothing}</div>
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
