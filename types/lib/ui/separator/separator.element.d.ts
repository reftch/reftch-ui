import { LitElement } from 'lit';
declare const SeparatorElement_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SeparatorElement extends SeparatorElement_base {
    type: 'vertical' | 'horizontal';
    protected defaultClass: string;
    protected get elementClass(): string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=separator.element.d.ts.map