import { unsafeCSS } from 'lit';
import style from './tailwind.global.css?raw';
// import style from './tailwind.global.css?inline'
import { twMerge } from 'tailwind-merge';
const tailwindCSS = unsafeCSS(style);
export const TailwindMixin = (superClass, style) => {
    class BaseTailwindCSSClass extends superClass {
        constructor() {
            super(...arguments);
            this.defaultClass = '';
        }
        get elementClass() {
            return twMerge(this.defaultClass, this.getAttribute('class'));
        }
    }
    BaseTailwindCSSClass.styles = [tailwindCSS, unsafeCSS(style)];
    // Cast return type to your mixin's interface intersected with the superClass type
    return BaseTailwindCSSClass;
};
