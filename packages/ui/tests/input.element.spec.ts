/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import '../lib/input/input.element'

describe('Checkbox element', async () => {
  const TAG = 'input-element'

  function getInsideElement<T extends HTMLElement>(): T | null | undefined {
    return document.body
      .querySelector(TAG)
      ?.shadowRoot?.querySelector<T>('input')
  }

  it('should be in default state', async () => {
    document.body.innerHTML = `<${TAG}></${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain(
      'flex h-9 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 isabled:cursor-not-allowed disabled:opacity-50'
    )
  })

  it('should enter the value', async () => {
    document.body.innerHTML = `<${TAG} value="Test">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement<HTMLInputElement>())

    expect(el).not.toBeNull()
    expect(el.value).toEqual('Test')
  })

  it('should be disabled', async () => {
    document.body.innerHTML = `<${TAG} disabled="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement<HTMLInputElement>())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('opacity-50')
    expect(el.classList).toContain('focus-visible:ring-0')
    expect(el.classList).toContain('cursor-default')
    expect(el.classList).toContain('tab')
  })
})
