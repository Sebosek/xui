import { Component, h, Prop, Host } from '@stencil/core';
import { gutter } from './grid.gutter';

@Component({
  tag: 'xui-grid',
  styleUrl: 'grid.scss',
  scoped: true,
})
export class Grid {
  @Prop({ reflectToAttr: true, mutable: true }) gutter: gutter | undefined;

  render() {
    return (
      <Host
        class={{
          [`gutter-${this.gutter}`]: !!this.gutter
        }}
      >
        <slot />
      </Host>
    );
  }
}
