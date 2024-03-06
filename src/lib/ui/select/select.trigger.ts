import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { consume } from '@lit/context'
import { SelectState, selectContext } from './select.element'
import { twMerge } from 'tailwind-merge'

@customElement('select-trigger')
export class SelectTrigger extends TailwindMixin(LitElement) {
  @consume({ context: selectContext, subscribe: true })
  state: SelectState | undefined

  protected defaultClass: string = twMerge('relative whitespace-nowrap h-9 w-full select-none')

  get chevronUp() {
    return html`
      <div class="absolute top-3 right-3 w-2.5 h-2.5 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="currentColor"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </div>
    `
  }

  get chevronDown() {
    return html`
      <div class="absolute top-3 right-3 w-2.5 h-2.5 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="currentColor"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </div>
    `
  }

  render() {
    return html`
      <div class=${this.elementClass}>
        <slot></slot>
        ${!this.state?.open ? this.chevronUp : this.chevronDown}
      </div>
    `
  }
}
