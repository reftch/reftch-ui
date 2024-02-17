import { LitElement, unsafeCSS } from 'lit'
import { twMerge } from 'tailwind-merge'
import style from './tailwind.global.css?inline'

const tailwindCSS = unsafeCSS(style)

export declare class BaseTailwindCSSClass {}

type Constructor<T = {}> = new (...args: any[]) => T

export const BaseElement = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class BaseTailwindCSSClass extends superClass {
    static styles = [tailwindCSS, unsafeCSS(style)]

    protected defaultClass = ''

    protected get elementClass() {
      return twMerge(this.defaultClass, this.getAttribute('class'))
    }
  }

  // Cast return type to the superClass type passed in
  return BaseTailwindCSSClass as Constructor<BaseTailwindCSSClass> & T
}