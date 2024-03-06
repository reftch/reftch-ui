import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { createContext, provide } from '@lit/context'
import { twMerge } from 'tailwind-merge'
import { SelectItemType } from '.'

export type SelectState = {
  open: boolean
  disabled: boolean
  multiple: boolean
  options: Array<SelectItemType>
  value: Array<SelectItemType>
}

export const selectContext = createContext<SelectState>('select')

@customElement('select-element')
export class SelectElement extends TailwindMixin(LitElement) {
  @property({ type: String }) id = ''
  @property({ type: String }) name = ''
  @property({ type: String }) value: string = ''
  @property({ type: String }) placeholder: string = 'Select...'
  @property({ type: Array }) options: Array<SelectItemType> = []
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) multiple = false

  @provide({ context: selectContext })
  state = {
    open: false,
    disabled: this.disabled,
    value: [] as Array<SelectItemType>,
    options: this.options,
    multiple: this.multiple,
  }

  originalItem: Array<SelectItemType> = []

  protected defaultClass = 'select-none'

  protected get elementClass() {
    return twMerge(this.defaultClass, !this.disabled ? 'cursor-pointer' : 'cursor-default', this.getAttribute('class'))
  }

  protected updated(): void {
    this.state = { open: false, disabled: this.disabled, value: [], options: this.options, multiple: this.multiple }
    if (this.value && this.options.length > 0) {
      const idx = this.options.findIndex((i: SelectItemType) => i.id === this.value)
      if (idx !== -1) {
        const value = this.state.value
        value.push({ id: this.options[idx].id, label: this.options[idx].label })
        this.state = {
          ...this.state,
          value: value,
        }
      }
    }
  }

  protected onClick(e: MouseEvent) {
    // detecting click outside for closing content
    if (!e.composedPath().includes(this)) {
      this.state = { ...this.state, open: false }
    }
  }

  protected onKeydown(e: KeyboardEvent) {
    switch (e.code) {
      case 'Enter':
      case 'Space':
        this.enter()
        break
      case 'ArrowDown':
        this.next()
        break
      case 'ArrowUp':
        this.previous()
        break
      case 'Escape':
        this.escape()
        break
    }
  }

  enter() {
    if (!this.state.open) {
      this.originalItem = this.state.value
    }
    this.state = { ...this.state, open: !this.state.open }
    this.emit('change', { id: this.id, value: this.state.value })
  }

  escape() {
    if (this.state.open) {
      this.state.value = this.originalItem!
      this.state = { ...this.state, open: false }
    }
  }

  next() {
    let idx = this.options.findIndex((i: SelectItemType) => i.id === this.state.value[0].id)
    if (idx < this.options.length - 1) {
      this.state = { ...this.state, value: [{ id: this.options[idx + 1].id, label: this.options[idx + 1].label }] }
    }
  }

  previous() {
    const idx = this.options.findIndex((i: SelectItemType) => i.id === this.state.value[0].id)
    if (idx !== -1 && idx > 0) {
      this.state = { ...this.state, value: [{ id: this.options[idx - 1].id, label: this.options[idx - 1].label }] }
    }
  }

  updateFocus() {
    const el = this.shadowRoot?.querySelector<HTMLElement>('select-trigger')
    el?.childNodes.forEach((n: Node) => {
      if (n.nodeName.toLowerCase() === 'select-value') {
        const el = (n as LitElement).shadowRoot?.querySelector<HTMLInputElement>('input')
        el?.focus()
      }
    })
  }

  onTrigger() {
    if (this.state.disabled || !this.state.options || this.state.options.length === 0) {
      return
    }

    this.state = { ...this.state, open: !this.state.open }
    if (!this.state.open) {
      this.updateFocus()
      this.emit('change', { id: this.id, value: this.multiple ? this.state.value : this.state.value[0] })
    } else {
      this.originalItem = this.state.value
    }
  }

  render() {
    return html`
      <div class=${this.elementClass} @click=${this.onTrigger}>
        <select-trigger>
          <select-value placeholder=${this.placeholder}></select-value>
        </select-trigger>
        <select-content></select-content>
      </div>
    `
  }
}
