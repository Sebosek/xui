import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'xui-label',
  styleUrl: 'label.scss',
  scoped: true
})
export class Label {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
