import { LitElement } from 'lit';
import { SelectState } from './select.element';
declare const SelectTrigger_base: (new (...args: any[]) => import("$lib/tailwind/tailwind.mixin").TailwindMixinInterface) & typeof LitElement;
export declare class SelectTrigger extends SelectTrigger_base {
    state: SelectState | undefined;
    protected defaultClass: string;
    get chevronUp(): import("lit-html").TemplateResult<1>;
    get chevronDown(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=select.trigger.d.ts.map