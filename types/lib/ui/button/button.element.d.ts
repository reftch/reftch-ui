import { LitElement } from 'lit';
export type ButtonColor = keyof typeof colorClasses;
declare const colorClasses: {
    default: string;
    destructive: string;
    outline: string;
    secondary: string;
    ghost: string;
    link: string;
    none: string;
};
type ButtonSize = keyof typeof size;
declare const size: {
    default: string;
    sm: string;
    lg: string;
    icon: string;
};
declare const ButtonElement_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class ButtonElement extends ButtonElement_base {
    variant: ButtonColor;
    size: ButtonSize;
    disabled: boolean;
    protected defaultClass: string;
    protected get elementClass(): string;
    onClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=button.element.d.ts.map