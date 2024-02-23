import { BaseElement } from '@reftch-ui/tailwind'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('home-page')
export class HomePage extends BaseElement(LitElement) {
  render() {
    return html`
      <div class="p-0">
        <header-element></header-element>

        <div class="flex flex-row text-primary">
          <aside class="fixed top-10 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border md:sticky md:block">
          <div class="h-full py-6 pr-4 lg:py-8">
            <nav class="space-y-3">
            <div class="flex w-full flex-col pb-[50px]">
             <div class="grid grid-flow-row auto-rows-max gap-0.5 pb-8 pl-4 text-sm">
              <a href="/docs/introduction" class="group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-transparent hover:bg-muted/50" target="" rel="">
              Introduction  </a>
              <a href="/docs/getting-started" class="group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-transparent hover:bg-muted/50" target="" rel="">
              Getting Started  </a>
              </div><div class="pb-4">
                <h4 class="mb-1 ml-[9px] rounded-md px-2.5 py-2 pl-4 text-xs font-medium uppercase text-muted-foreground">Components</h4> 
                <div class="grid grid-flow-row auto-rows-max gap-0.5 pl-4 text-sm">
                <a href="/docs/components/accordion" class="group inline-flex w-full items-center rounded-md px-2.5 py-1.5 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/50" target="" rel="">
                  Accordion  
                </a>
                <a href="/docs/components/alert-dialog" class="group inline-flex w-full items-center rounded-md px-2.5 py-1.5 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/50" target="" rel="">
                  Alert Dialog  
                </a>
               </div>
               </div>
               </div> 
               </nav>
               </div>
          </aside>">
            Navigation
          </div>
          <div class="basis-3/4">
            Content
          </div>
        </div>

        <div class="flex gap-2">
          <button-element>Default</button-element>
          <button-element variant="secondary">Secondary</button-element>
                  <button-element variant="destructive">Destructive</button-element>
          <button-element variant="outline">Outline</button-element>
          <button-element variant="ghost">Ghost</button-element>
          <button-element variant="link">Link</button-element>
        </div>
      </div>
    `
  }
}
