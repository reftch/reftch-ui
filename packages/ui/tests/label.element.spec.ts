/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import '../lib/label/label.element'

describe('Checkbox element', async () => {
  const TAG = 'label-element'

  function getInsideElement<T extends HTMLElement>(): T | null | undefined {
    return document.body.querySelector(TAG)?.shadowRoot?.querySelector<T>('label')
  }

  it('should be in default state', async () => {
    document.body.innerHTML = `<${TAG}>Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('text-primary text-base font-semibold')
    expect(el.classList).not.toContain('font-medium')
    expect(el.classList).not.toContain('text-red-500')
    expect(el.classList).not.toContain('dark:text-red-700')
  })
})
