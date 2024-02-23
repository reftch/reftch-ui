import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BaseElement } from '@reftch-ui/tailwind'
import { twMerge } from 'tailwind-merge'

export type PanelValue = {
  id: string,
  value: string
}

@customElement('panel-element')
export class PanelElement extends BaseElement(LitElement) {
  @property({ attribute: false })
  item = null

  @property({ type: Array })
  columns: Array<PanelValue> = []

  protected defaultClass = 'text-primary text-base'

  protected get elementClass() {
    return twMerge(this.defaultClass, this.getAttribute('class'))
  }

  private gridRowClasses = twMerge(
    'w-full inline-grid gap-[5px] cursor-pointer grid-cols-[40%_60%] text-sm items-center'
  )

  render() {
    return html`
      <div class="bg-primary-active rounded-lg">
        <div class="select-text mx-2 rounded-lg">
          ${this.columns.map(
            (c: PanelValue, idx: number) => html`
              <div class=${this.gridRowClasses}>
                <div class="whitespace-nowrap overflow-hidden text-ellipsis p-2 font-semibold">${c.value}</div>
                <div class="whitespace-nowrap overflow-hidden text-ellipsis">${c.value}</div>
              </div>
              ${idx !== this.columns.length - 1 ? html`<separator-element></separator-element>` : nothing}
            `
          )}
        </div>
      </div>
    `
  }
}
