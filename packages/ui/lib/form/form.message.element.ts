import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'

@customElement('form-message')
export class FormMessage extends BaseElement(LitElement) {
  @property() error = ''
  protected defaultClass = 'pt-2 text-sm font-medium text-red-500 dark:text-red-700'

  render() {
    return html` <p>${this.error ? this.error : html`<slot></slot>`}</p> `
  }
}
