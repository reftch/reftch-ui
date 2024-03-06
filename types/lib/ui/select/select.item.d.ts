import { LitElement } from 'lit';
import { SelectState } from './select.element';
declare const SelectItem_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SelectItem extends SelectItem_base {
    value: string;
    state: SelectState | undefined;
    protected defaultClass: string;
    get label(): string | undefined;
    onSelect(): void;
    protected get elementClass(): string;
    get selectedIndex(): number | undefined;
    render(): import("lit-html").TemplateResult<1>;
    get checked(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=select.item.d.ts.map