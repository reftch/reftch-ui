import { LitElement } from 'lit';
type CheckboxSize = keyof typeof size;
declare const size: {
    default: string;
    sm: string;
    lg: string;
};
declare const CheckboxElement_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class CheckboxElement extends CheckboxElement_base {
    checked: boolean;
    disabled: boolean;
    isPartlySelected: boolean;
    size: CheckboxSize;
    get checkboxUnchecked(): import("lit-html").TemplateResult<1>;
    get checkboxChecked(): import("lit-html").TemplateResult<1>;
    get checkboxPartly(): import("lit-html").TemplateResult<1>;
    handleClick: () => void;
    protected defaultClass: string;
    protected get elementClass(): string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=checkbox.element.d.ts.map