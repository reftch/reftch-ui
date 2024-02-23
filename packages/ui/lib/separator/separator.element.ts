import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

@customElement('separator-element')
export class SeparatorElement extends BaseElement(LitElement) {
  @property({ type: String }) type: 'vertical' | 'horizontal' = 'horizontal'

  protected defaultClass = 'shrink-0 bg-border border-border'

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      this.type === 'horizontal' ? 'border-b' : 'border-l',
      this.getAttribute('class')
    )
  }

  render() {
    return html` <div class=${this.elementClass}></div> `
  }
}
