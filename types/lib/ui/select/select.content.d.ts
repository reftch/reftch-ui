import { LitElement, nothing } from 'lit';
import { SelectState } from './select.element';
declare const SelectContent_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SelectContent extends SelectContent_base {
    state: SelectState | undefined;
    protected defaultClass: string;
    protected get elementClass(): string;
    get renderOptionsContent(): import("lit-html").TemplateResult<1>[] | undefined;
    get content(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
export {};
//# sourceMappingURL=select.content.d.ts.map