/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import '../lib/button/button.element'

describe('Button element', async () => {
  const TAG = 'button-element'

  function getInsideButton(): HTMLElement | null | undefined {
    return document.body.querySelector(TAG)?.shadowRoot?.querySelector('button')
  }

  it('should be primary dy default', async () => {
    document.body.innerHTML = `<${TAG}>Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('text-background')
    expect(el.classList).toContain('bg-default')
  })

  it('should be in secondary mode', async () => {
    document.body.innerHTML = `<${TAG} variant="secondary">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('bg-secondary')
    expect(el.classList).toContain('text-secondary-foreground')
  })

  it('should be in destructive mode', async () => {
    document.body.innerHTML = `<${TAG} variant="destructive">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('bg-destructive')
    expect(el.classList).toContain('text-destructive-foreground')
  })

  it('should be in outline mode', async () => {
    document.body.innerHTML = `<${TAG} variant="outline">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('bg-background')
  })

  it('should be in ghost mode', async () => {
    document.body.innerHTML = `<${TAG} variant="ghost">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('hover:bg-accent')
    expect(el.classList).toContain('hover:text-accent-foreground')
  })

  it('should be in link mode', async () => {
    document.body.innerHTML = `<${TAG} variant="link">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.classList).toContain('text-primary')
    expect(el.classList).toContain('underline-offset-4')
    expect(el.classList).toContain('hover:underline')
  })

  it('should be in none mode', async () => {
    document.body.innerHTML = `<${TAG} variant="none">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())

    expect(el).not.toBeNull()
    expect(el.className).toContain(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring h-9 px-4 py-2'
    )
  })

  it('should dispatch event on button click', async () => {
    const spyClick = vi.fn()
    document.body.innerHTML = `<${TAG}>Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideButton())
    el?.addEventListener('click', spyClick)

    el?.click()
    expect(spyClick).toHaveBeenCalled()
  })
})