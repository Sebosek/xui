import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';

const BEAK_SIZE = 3

@Component({
  tag: 'xui-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class Tooltip {
  private __tooltip: HTMLElement
  private __beak: HTMLElement

  @Prop({ reflect: true }) text: string

  @Watch('text') watchText() {
    const { left, right } = this.__tooltip.getBoundingClientRect()
    const { width } = document.documentElement.getBoundingClientRect()

    if (left < 0) {
      this.tooltipToLeft().beakToLeft()
    }

    if (right > width) {
      this.tooltipToRight().beakToRight()
    }
  }

  @State() width: number

  @Element() el: HTMLXuiTooltipElement

  componentDidLoad() {
    this.watchText()
  }

  render() {
    return (
      <Host>
        <div
          class="tooltip"
          ref={(e: HTMLElement) => this.__tooltip = e}
        >
          {this.text}
        </div>
        <div
          class="beak"
          ref={(e: HTMLElement) => this.__beak = e}
        ></div>
        <slot />
      </Host>
    )
  }

  private tooltipToRight(): Tooltip {
    this.__tooltip.style.left = 'auto'
    this.__tooltip.style.right = '0'
    this.__tooltip.style.transform = 'none'

    return this
  }

  private tooltipToLeft(): Tooltip {
    const { width } = this.__tooltip.getBoundingClientRect()

    this.__tooltip.style.left = `${width / 2}px`

    return this
  }

  private beakToRight(): Tooltip {
    const { width } = this.el.getBoundingClientRect()

    this.__beak.style.left = `auto`
    this.__beak.style.right = `${(width / 2) - BEAK_SIZE}px`

    return this
  }

  private beakToLeft(): Tooltip {
    const { width } = this.el.getBoundingClientRect()

    this.__beak.style.left = `${(width / 2) - BEAK_SIZE}px`

    return this
  }
}
