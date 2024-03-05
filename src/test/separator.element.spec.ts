/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import '$lib/ui/separator/separator.element'

describe('Separator element', async () => {
  const TAG = 'separator-element'

  function getInsideButton(): HTMLElement | null | undefined {
    return document.body.querySelector(TAG)?.shadowRoot?.querySelector('div')
  }

  it('should be horizontal in default', async () => {
    document.body.innerHTML = `<${TAG}></${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.className).toContain('shrink-0 border-border border-b')
  })

  it('should be vertical', async () => {
    document.body.innerHTML = `<${TAG} type="vertical"></${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.className).toContain('shrink-0 border-border border-l')
  })
})
