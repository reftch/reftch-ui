import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('aside-container')
export class AsideContainer extends BaseElement(LitElement) {
  @property({ type: String }) title = ''
  protected defaultClass = 'space-y-3'

  get renderTitle() {
    return html`
      <h4 class="mb-1 mt-5 ml-[9px] px-2.5 py-2 pl-8 text-xs font-medium uppercase text-muted-foreground">
        ${this.title}
      </h4>
    `
  }

  render() {
    return html`
      <nav class=${this.elementClass}>
        <div class="flex w-full flex-col pb-[10px]">
          ${this.title ? this.renderTitle : nothing}
          <slot></slot>
        </div>
      </nav>
    `
  }
}
