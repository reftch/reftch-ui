import { LitElement, unsafeCSS } from 'lit'
import style from './tailwind.global.css?inline'
import { twMerge } from 'tailwind-merge'

const tailwindCSS = unsafeCSS(style)

// Define the interface for the mixin
export declare class TailwindMixinInterface {
  protected defaultClass: string
  protected get elementClass(): string
  protected emit<T = any>(name: string, detail?: T): void 
}

type Constructor<T = {}> = new (...args: any[]) => T

export const TailwindMixin = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class BaseTailwindCSSClass extends superClass {
    static styles = [tailwindCSS, unsafeCSS(style)]

    protected defaultClass = ''

    protected get elementClass(): string {
      return twMerge(this.defaultClass, this.getAttribute('class'))
    }

    protected emit<T = any>(name: string, detail?: T) {
      const event = new CustomEvent<T>(name, { detail: detail, bubbles: true, composed: true })
      this.dispatchEvent(event)
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return BaseTailwindCSSClass as unknown as Constructor<TailwindMixinInterface> & T
}