import { LitElement, unsafeCSS } from 'lit'
import * as style from './tailwind.global.css'
import { twMerge } from 'tailwind-merge'

const tailwindCSS = unsafeCSS(style)

// Define the interface for the mixin
export declare class TailwindMixinInterface {
  protected defaultClass: string
  protected get elementClass(): string
}

type Constructor<T = {}> = new (...args: any[]) => T

export const TailwindMixin = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class BaseTailwindCSSClass extends superClass {
    static styles = [tailwindCSS, unsafeCSS(style)]

    protected defaultClass = ''

    protected get elementClass(): string {
      return twMerge(this.defaultClass, this.getAttribute('class'))
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return BaseTailwindCSSClass as unknown as Constructor<TailwindMixinInterface> & T
}