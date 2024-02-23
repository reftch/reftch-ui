import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { createContext, provide } from '@lit/context'
import { twMerge } from 'tailwind-merge'

export type SelectItemType = {
  id: string
  label: string
}

export type SelectState = {
  open: boolean
  disabled: boolean
  options: Array<SelectItemType>
  value: SelectItemType
}

export const selectContext = createContext<SelectState>({
  open: false,
  disabled: true,
  options: [],
  value: { id: '', label: '' },
})

@customElement('select-element')
export class SelectElement extends BaseElement(LitElement) {
  @property({ type: String }) id = ''
  @property({ type: String }) name = ''
  @property({ type: String }) value: string = ''
  @property({ type: String }) placeholder: string = 'Select...'
  @property({ type: Array }) options: Array<SelectItemType> = []
  @property({ type: Boolean }) disabled = false

  @provide({ context: selectContext })
  state = {
    open: false,
    disabled: this.disabled,
    value: { id: this.value, label: '' },
    options: this.options,
  }

  originalItem: SelectItemType | undefined

  protected defaultClass = `select-none`

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      !this.disabled ? 'cursor-pointer' : 'cursor-default',
      this.getAttribute('class')
    )
  }

  protected updated(): void {
    this.state = {
      open: false,
      disabled: this.disabled,
      value: { id: this.value, label: '' },
      options: this.options,
    }
    if (this.value && this.options.length > 0) {
      const idx = this.options.findIndex(
        (i: SelectItemType) => i.id === this.value
      )
      if (idx !== -1) {
        this.state = {
          ...this.state,
          value: { id: this.options[idx].id, label: this.options[idx].label },
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
    let idx = this.options.findIndex(
      (i: SelectItemType) => i.id === this.state.value.id
    )
    if (idx < this.options.length - 1) {
      this.state = {
        ...this.state,
        value: {
          id: this.options[idx + 1].id,
          label: this.options[idx + 1].label,
        },
      }
    }
  }

  previous() {
    const idx = this.options.findIndex(
      (i: SelectItemType) => i.id === this.state.value.id
    )
    if (idx !== -1 && idx > 0) {
      this.state = {
        ...this.state,
        value: {
          id: this.options[idx - 1].id,
          label: this.options[idx - 1].label,
        },
      }
    }
  }

  updateFocus() {
    const el = this.shadowRoot?.querySelector<HTMLElement>('select-trigger')
    el?.childNodes.forEach((n: Node) => {
      if (n.nodeName.toLowerCase() === 'select-value') {
        const el = (
          n as LitElement
        ).shadowRoot?.querySelector<HTMLInputElement>('input')
        el?.focus()
      }
    })
  }

  onTrigger() {
    if (this.state.disabled) {
      return
    }

    this.state = { ...this.state, open: !this.state.open }
    if (!this.state.open) {
      this.updateFocus()
      this.emit('change', { id: this.id, value: this.state.value })
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
