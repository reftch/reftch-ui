import { LitElement } from 'lit';
export declare class TailwindMixinInterface {
    protected defaultClass: string;
    protected get elementClass(): string;
}
type Constructor<T = {}> = new (...args: any[]) => T;
export declare const TailwindMixin: <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => Constructor<TailwindMixinInterface> & T;
export {};
