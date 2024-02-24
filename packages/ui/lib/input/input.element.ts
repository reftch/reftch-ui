import { LitElement, PropertyValueMap, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'
import { createRef, ref } from 'lit/directives/ref.js'

@customElement('input-element')
export class InputElement extends BaseElement(LitElement) {
  @property({ type: String }) type: 'hidden' | 'text' | 'number' = 'text'
  @property({ type: String }) name = ''
  @property({ type: String }) value: string = ''
  @property({ type: String }) placeholder = ''
  @property({ type: Boolean }) focusable = false
  @property({ type: Boolean }) disabled = false

  inputRef = createRef<HTMLInputElement>()

  protected defaultClass = twMerge(
    'flex h-9 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'isabled:cursor-not-allowed disabled:opacity-50'
  )

  protected firstUpdated(): void {
    if (this.focusable) {
      setTimeout(() => this.inputRef.value?.focus(), 10)
    }
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (this.inputRef.value?.value) {
      this.inputRef.value.value = this.value
    }
  }
  protected onKeyup(e: Event): void {
    this.emit('change', {
      id: this.id,
      value: (e.target as HTMLInputElement).value,
    })
  }

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      this.disabled && 'opacity-50 focus-visible:ring-0 cursor-default tab',
      this.getAttribute('class')
    )
  }

  render() {
    return html`
      <input
        ${ref(this.inputRef)}
        id=${this.id}
        name=${this.name}
        type=${this.type}
        class=${this.elementClass}
        value=${this.value}
        placeholder=${this.placeholder}
        @keyup=${this.onKeyup}
      />
    `
  }
}
