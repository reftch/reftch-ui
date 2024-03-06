import { LitElement } from 'lit';
import { SelectState } from './select.element';
declare const SelectValue_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SelectValue extends SelectValue_base {
    placeholder: string;
    state: SelectState | undefined;
    protected defaultClass: string;
    protected get elementClass(): string;
    get selectedValue(): string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=select.value.d.ts.map