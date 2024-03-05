import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindMixin } from '$lib/tailwind/tailwind.mixin'
import { twMerge } from 'tailwind-merge'

@customElement('separator-element')
export class SeparatorElement extends TailwindMixin(LitElement) {
  @property({ type: String }) type: 'vertical' | 'horizontal' = 'horizontal'

  protected defaultClass = 'shrink-0 border-border'

  protected get elementClass() {
    return twMerge(this.defaultClass, this.type === 'horizontal' ? 'border-b' : 'border-l', this.getAttribute('class'))
  }

  render() {
    return html`<div class=${this.elementClass}></div>`
  }
}
