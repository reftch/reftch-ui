const delegates: Array<DelegatedListener> = []

export type EventListener = {
  _onkeydown(e: Event): void
}

export class DelegatedListener {
  delegated: EventListener

  constructor(delegated: EventListener) {
    this.delegated = delegated
    addEventListener('keydown', this)
    delegates.push(this)
  }

  unsubscribe() {
    removeEventListener('keydown', this)
    delegates.splice(delegates.length - 1, 1)
  }

  handleEvent(event: Event) {
    const last = delegates[delegates.length - 1]
    if (last) {
      last.delegated._onkeydown(event)
    }
  }
}
