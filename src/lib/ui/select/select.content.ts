import { LitElement, html, nothing } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { consume } from '@lit/context'
import { SelectState, selectContext } from './select.element'
import { twMerge } from 'tailwind-merge'
import { SelectItemType } from '.'

@customElement('select-content')
export class SelectContent extends TailwindMixin(LitElement) {
  @consume({ context: selectContext, subscribe: true })
  state: SelectState | undefined

  protected defaultClass = twMerge(
    'absolute w-full z-50 mt-[5px] max-h-72 overflow-y-auto overflow-x-hidden rounded-md border border-border',
    'bg-input text-primary shadow-md',
    'transition-all duration-500 ease-out invisible opacity-0',
    'animate-fade-in'
  )

  protected get elementClass() {
    return twMerge(this.defaultClass, this.state?.open && 'visible opacity-100', this.getAttribute('class'))
  }

  get renderOptionsContent() {
    return this.state?.options.map(
      (item: SelectItemType) => html`<select-item value=${item.id}>${item.label}</select-item>`
    )
  }

  get content() {
    return html`
      <div class=${this.elementClass}>
        <div class="py-1 text-sm">${this.renderOptionsContent}</div>
      </div>
    `
  }

  render() {
    return this.state?.open ? this.content : nothing
  }
}
