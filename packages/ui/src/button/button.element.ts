import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { twMerge } from 'tailwind-merge'

export type ButtonColor = keyof typeof colorClasses

const colorClasses = {
  default: 'w-full bg-primary text-primary-foreground shadow hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  none: '',
}

type ButtonSize = keyof typeof size

const size = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
}

@customElement('button-element')
export class ButtonElement extends BaseElement(LitElement) {
  @property({ type: String }) variant: ButtonColor = 'default'
  @property({ type: String }) size: ButtonSize = 'default'
  @property({ type: Boolean }) disabled = false

  protected defaultClass = twMerge(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
    'text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring'
  )

  protected get elementClass() {
    return twMerge(
      this.defaultClass,
      colorClasses[this.variant],
      size[this.size],
      this.disabled && 'opacity-50 cursor-default',
      this.getAttribute('class')
    )
  }

  render() {
    return html`
      <button class=${this.elementClass}>
        <slot></slot>
      </button>
    `
  }
}
