/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest'
import '../lib/checkbox/checkbox.element'

describe('Checkbox element', async () => {
  const TAG = 'checkbox-element'

  function getInsideElement(): HTMLElement | null | undefined {
    return document.body.querySelector(TAG)?.shadowRoot?.querySelector('div')
  }

  it('should be unchecked', async () => {
    document.body.innerHTML = `<${TAG}>Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // unchecked mode
    expect(el.querySelector('div#unchecked')).not.toBeNull()
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#partly')).toBeNull()
  })

  it('should be checked', async () => {
    document.body.innerHTML = `<${TAG} checked="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).toBeNull()
  })

  it('should be checked with any parameters', async () => {
    document.body.innerHTML = `<${TAG} checked>Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).toBeNull()
  })

  it('should be partly checked - 1', async () => {
    document.body.innerHTML = `<${TAG} checked="true" isPartlySelected="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // partly checked mode
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).not.toBeNull()
  })

  it('should be partly checked - 2', async () => {
    document.body.innerHTML = `<${TAG} checked="false" isPartlySelected="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // partly checked mode
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).not.toBeNull()
  })

  it('should be partly checked - 3', async () => {
    document.body.innerHTML = `<${TAG} isPartlySelected="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // partly checked mode
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).not.toBeNull()
  })

  it('should be unchecked & disabled', async () => {
    document.body.innerHTML = `<${TAG} disabled="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex relative left-px items-center opacity-50 cursor-default')
    // unchecked mode
    expect(el.querySelector('div#unchecked')).not.toBeNull()
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#partly')).toBeNull()
  })

  it('should be checked & disabled', async () => {
    document.body.innerHTML = `<${TAG} checked="true" disabled="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex relative left-px items-center opacity-50 cursor-default')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).toBeNull()
  })

  it('should be partly checked & disabled', async () => {
    document.body.innerHTML = `<${TAG} checked="true" isPartlySelected="true" disabled="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex relative left-px items-center opacity-50 cursor-default')
    // partly checked mode
    expect(el.querySelector('div#checked')).toBeNull()
    expect(el.querySelector('div#unchecked')).toBeNull()
    expect(el.querySelector('div#partly')).not.toBeNull()
  })

  it('should be default size', async () => {
    document.body.innerHTML = `<${TAG} checked="true">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#checked')?.className).toContain("h-4 w-4")
  })

  it('should be small', async () => {
    document.body.innerHTML = `<${TAG} checked="true" size="sm">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#checked')?.className).toContain("h-3 w-3")
  })

  it('should be large', async () => {
    document.body.innerHTML = `<${TAG} checked="true" size="lg">Test</${TAG}>`

    const el = await vi.waitUntil(() => getInsideElement())

    expect(el).not.toBeNull()
    expect(el.className).toContain('flex cursor-pointer relative left-px items-center')
    // checked mode
    expect(el.querySelector('div#checked')).not.toBeNull()
    expect(el.querySelector('div#checked')?.className).toContain("h-5 w-5")
  })

})
