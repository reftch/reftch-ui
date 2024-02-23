import { LitElement, html, nothing } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'
import { consume } from '@lit/context'
import { DialogState, dialogContext } from './dialog.root'

import './dialog.close'
import './dialog.overlay'

@customElement('dialog-content')
export class DialogContent extends BaseElement(LitElement) {
  @consume({ context: dialogContext, subscribe: true })
  state: DialogState | undefined

  protected defaultClass = twMerge(
    'fixed left-[50%] top-[50%] z-99 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
    'gap-4 border border-border bg-card p-6 shadow-2xl sm:rounded-lg md:w-full',
    'animate-fade-in-2'
  )

  render() {
    return html`
      <dialog-overlay>
        <div class=${this.elementClass}>
          <slot></slot>
          ${this.state?.closeButton
            ? html`<dialog-close></dialog-close>`
            : nothing}
        </div>
      </dialog-overlay>
    `
  }
}
