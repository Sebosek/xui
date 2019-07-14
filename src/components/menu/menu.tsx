import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'xui-menu',
  styleUrl: 'menu.scss',
  shadow: true
})
export class Menu {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
