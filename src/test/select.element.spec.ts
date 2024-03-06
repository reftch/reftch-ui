/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import '$lib/ui/select'

describe('Select element', async () => {
  function mount(value?: string) {
    const options = [
      { id: 'test1', label: 'Test1' },
      { id: 'test2', label: 'Test2' },
      { id: 'test3', label: 'Test3' },
      { id: 'test4', label: 'Test4' },
    ]

    document.body.innerHTML = /*html*/ `
      <select-element 
        value=${value}
        options=${JSON.stringify(options)}
      ></select-element>    
    `
  }

  // function delay(time: number) {
  //   return new Promise(resolve => setTimeout(resolve, time));
  // }

  function getInsideElement<T extends HTMLElement>(parent: HTMLElement, tag: string, el = 'div'): T | null | undefined {
    return parent.querySelector(tag)?.shadowRoot?.querySelector<T>(el)
  }

  async function open(openWith: 'click' | (string & {}) = 'click') {
    // const user = userEvent.setup();

    let element = await vi.waitUntil(() => getInsideElement<HTMLElement>(document.body, 'select-element'))
    expect(element).not.toBeNull()
    expect(element.className).toContain('select-none cursor-pointer')

    let trigger = await vi.waitUntil(() => element.querySelector<HTMLElement>('select-trigger'))
    expect(trigger).not.toBeNull()

    let value = await vi.waitUntil(() => element.querySelector<HTMLInputElement>('select-value'))
    expect(value).not.toBeNull()

    if (openWith === 'click') {
      trigger.click()
    } else {
      value.focus()
      userEvent.type(value, openWith)
    }

    let content = await vi.waitUntil(() => getInsideElement(element, 'select-content'))
    expect(content).not.toBeNull()

    return { element, content, trigger, value }
  }

  it('opens on click', async () => {
    mount()
    await open()
  })

  it('opens by ENTER', async () => {
    mount()
    await open('{enter}')
  })

  it('opens by SPACE', async () => {
    mount()
    await open('{space}')
  })

  it('should contain default classes', async () => {
    mount()
    const { content } = await open('{space}')
    expect(content.className).toContain(
      'absolute w-full z-50 mt-1.5 max-h-96 overflow-hidden rounded-md border border-border bg-input text-popover-foreground shadow-md transition-all duration-500 ease-out animate-fade-in visible opacity-100'
    )
  })

  it('should select value 1', async () => {
    mount()
    let { element, value } = await open('{enter}')

    await userEvent.type(value, '{arrowdown}')
    await userEvent.type(value, '{enter}')

    value = await vi.waitUntil(() => element.querySelector<HTMLInputElement>('select-value'))
    expect(value).not.toBeNull()
    let input = value.shadowRoot?.querySelector('input')
    expect(input?.value).toEqual('Test1')
  })

  it('should select value 2', async () => {
    mount()
    let { element, value } = await open('{enter}')

    await userEvent.type(value, '{arrowdown}{arrowdown}')
    await userEvent.type(value, '{enter}')

    value = await vi.waitUntil(() => element.querySelector<HTMLInputElement>('select-value'))
    expect(value).not.toBeNull()
    let input = value.shadowRoot?.querySelector('input')
    expect(input?.value).toEqual('Test2')
  })

  it('should select value 1', async () => {
    mount()
    let { element, value } = await open('{enter}')

    await userEvent.type(value, '{arrowdown}{arrowdown}{arrowdonw}{arrowup}{arrowup}')
    await userEvent.type(value, '{enter}')

    value = await vi.waitUntil(() => element.querySelector<HTMLInputElement>('select-value'))
    expect(value).not.toBeNull()
    let input = value.shadowRoot?.querySelector('input')
    expect(input?.value).toEqual('Test1')
  })

  it.only('closes on escape keydown', async () => {
    mount()
    let { value } = await open()
    await userEvent.type(value, '{esc}')

    // await delay(2000)
    let element = await vi.waitUntil(() => getInsideElement<HTMLElement>(document.body, 'select-element'))
    expect(element).not.toBeNull()

    let content = await vi.waitUntil(() => element.querySelector<HTMLInputElement>('select-content'))
    expect(content).not.toBeNull()
    expect(content.innerHTML).toEqual('')
  })
})
