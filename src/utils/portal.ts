interface MountOptions {
  deepClone?: boolean
}

class Portal {
  private clone: HTMLElement
  private el: HTMLElement

  constructor() {
    this.updatePosition = this.updatePosition.bind(this)
  }

  public get source(): HTMLElement {
    return this.el
  }

  public mount(el: HTMLElement, { deepClone }: MountOptions = {}) {
    this.el = el
    this.clone = el.cloneNode(deepClone) as HTMLElement

    this.el.insertAdjacentElement('afterend', this.clone)
    this.el.style.visibility = 'hidden'
    this.clone.style.position = 'fixed'

    document.body.appendChild(this.clone)
    document.addEventListener('resize', this.updatePosition)
    document.addEventListener('scroll', this.updatePosition)

    this.updatePosition();
  }

  public unmount() {
    removeEventListener('resize', this.updatePosition)
    removeEventListener('scroll', this.updatePosition)

    document.body.removeChild(this.clone)
    this.el.style.visibility = 'initial'
  }

  private updatePosition() {
    const { top, left, width } = this.el.getBoundingClientRect()

    this.clone.style.top = `${top}px`
    this.clone.style.left = `${left}px`
    this.clone.style.width = `${width}px`

    this.clone.style.transform = 'none'
    this.clone.style.minWidth = 'initial'
    this.clone.style.maxWidth = 'initial'
    this.clone.style.transform = 'initial'
  }
}

export const portal = new Portal();
