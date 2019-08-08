import { Component, h } from '@stencil/core';

@Component({
  tag: 'xui-text',
  styleUrl: 'text.scss',
  scoped: true
})
export class Text {
  render() {
    return (
      <slot />
    );
  }
}
