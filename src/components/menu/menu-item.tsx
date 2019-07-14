import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'xui-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true
})
export class MenuItem {
  @Prop({ reflect: true }) defaultCursor : boolean = false

  render() {
    return (
      <Host
        class={{
          'default': this.defaultCursor
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
