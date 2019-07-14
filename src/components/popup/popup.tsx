import { Component, Prop, Watch, Element, h, Listen } from '@stencil/core';
import { portal } from '../../utils/portal';

@Component({
  tag: 'xui-popup',
  styleUrl: 'popup.scss',
  shadow: true
})
export class Popup {
  constructor() {
    this.handleOffClick = this.handleOffClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  @Element() el : HTMLElement

  @Prop({ reflect: true, mutable: true }) state : 'shown' | 'hidden' = 'hidden'
  @Prop({ reflect: true, mutable: true }) offclickCloses : boolean = false
  @Prop({ reflect: true, mutable: true }) multipleClicks : boolean = false

  @Watch('state') watchState(newValue : 'shown' | 'hidden') {
    if (newValue === 'shown') {
      portal.mount(this.el)

      if (this.offclickCloses) {
        setTimeout(() => document.addEventListener('click', this.handleOffClick), 0)
      }
    }

    if (newValue === 'hidden') {
      portal.unmount()

      if (this.offclickCloses) {
        document.removeEventListener('click', this.handleOffClick)
      }
    }
  }

  @Listen('click') handleClick() {
    if (this.multipleClicks) {
      return
    }

    portal.source.setAttribute('state', 'hidden')
  }

  handleOffClick(ev : MouseEvent) {
    const target = ev.target as HTMLElement
    if (!target) {
      return
    }

    if (target.closest('xui-popup')) {
      // click inside pop-up
      return
    }

    this.state = 'hidden'
  }

  render() {
    return (
      <div {...this.styles()}>
        <slot />
      </div>
    )
  }

  private styles() {
    return ({
      'class': {
        'popup': true,
        'shown': this.state === 'shown',
      }
    })
  }
}
