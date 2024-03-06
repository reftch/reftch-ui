import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { consume } from '@lit/context'
import { SelectState, selectContext } from './select.element'
import { twMerge } from 'tailwind-merge'
import { SelectItemType } from '.'

@customElement('select-value')
export class SelectValue extends TailwindMixin(LitElement) {
  @property() placeholder: string = ''

  @consume({ context: selectContext, subscribe: true })
  state: SelectState | undefined

  protected defaultClass = twMerge(
    'w-full h-9 cursor-pointer text-gray-600 dark:text-gray-200 rounded-md transition-colors px-3 py-1.5 text-sm',
    'border border-border bg-input ring-offset-background',
    'placeholder:text-muted-foreground text-primary select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  )

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      this.state?.disabled && 'opacity-50 focus-visible:ring-0 cursor-default tab',
      this.getAttribute('class')
    )
  }

  get selectedValue() {
    if (this.state?.value.length === 0) {
      return ''
    }

    if (this.state?.multiple) {
      return this.state?.value.map((v: SelectItemType) => `${v.id}`).toString()
    } else {
      return this.state?.value[0].label ?? ''
    }
  }

  render() {
    return html`
      <input
        class=${this.elementClass}
        placeholder=${this.placeholder}
        value=${this.selectedValue}
        tabindex=${this.state?.disabled ? '-1' : '0'}
        readonly
      />
    `
  }
}
