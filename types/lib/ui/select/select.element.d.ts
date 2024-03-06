import { LitElement } from 'lit';
import { SelectItemType } from '.';
export type SelectState = {
    open: boolean;
    disabled: boolean;
    multiple: boolean;
    options: Array<SelectItemType>;
    value: Array<SelectItemType>;
};
export declare const selectContext: {
    __context__: SelectState;
};
declare const SelectElement_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SelectElement extends SelectElement_base {
    id: string;
    name: string;
    value: string;
    placeholder: string;
    options: Array<SelectItemType>;
    disabled: boolean;
    multiple: boolean;
    state: {
        open: boolean;
        disabled: boolean;
        value: SelectItemType[];
        options: SelectItemType[];
        multiple: boolean;
    };
    originalItem: Array<SelectItemType>;
    protected defaultClass: string;
    protected get elementClass(): string;
    protected updated(): void;
    protected onClick(e: MouseEvent): void;
    protected onKeydown(e: KeyboardEvent): void;
    enter(): void;
    escape(): void;
    next(): void;
    previous(): void;
    updateFocus(): void;
    onTrigger(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=select.element.d.ts.map