import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'
import { DelegatedListener, EventListener } from './delegated.listener'
import { createContext, provide } from '@lit/context'
import elementStyles from "./dialog.root.css?inline";

export type DialogState = {
  closeButton: boolean
}

export const dialogContext = createContext<DialogState>({
  closeButton: false,
})

@customElement('dialog-root')
export class DialogRoot extends BaseElement(LitElement, elementStyles) implements EventListener {
  private delegatedListener: DelegatedListener | undefined

  @property({ type: Boolean }) closeButton = true

  @provide({ context: dialogContext })
  state = { closeButton: true }

  connectedCallback(): void {
    super.connectedCallback()
    this.delegatedListener = new DelegatedListener(this)
    this.state.closeButton = this.closeButton
  }

  _onkeydown(e: Event) {
    e.stopPropagation()
    if ((e as KeyboardEvent).key === 'Escape') {
      this.delegatedListener?.unsubscribe()
      this.emit('close')
    }
  }

  protected defaultClass = twMerge('fixed w-screen h-screen bg-[rgba(0,0,0,0.05)] z-99 left-0 top-0')

  render() {
    return html`
      <div class="modal">
        <slot></slot>
      </div>
    `
  }
}
