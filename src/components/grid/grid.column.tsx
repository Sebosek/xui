import { Component, h, Prop, Host } from '@stencil/core';
import { cols } from './grid.column.cols';

@Component({
  tag: 'xui-grid-column',
  styleUrl: 'grid.column.scss',
  scoped: true
})
export class Column {
  /**
   * Defines general column width
   * @type {cols}
   */
  @Prop({ reflect: true }) cols: cols | undefined;

  /**
   * Defines column pulling
   * @type {cols}
   */
  @Prop({ reflect: true }) pull: cols | undefined;

  /**
   * Defines column pushing
   * @type {cols}
   */
  @Prop({ reflect: true }) push: cols | undefined;

  render() {
    return (
      <Host
        class={{
          [`col-${this.cols}`]: !!this.cols,
          // [`col-xs-${this.sizeXs}`]: !!this.sizeXs,
          // [`col-sm-${this.sizeSm}`]: !!this.sizeSm,
          // [`col-md-${this.sizeMd}`]: !!this.sizeMd,
          // [`col-lg-${this.sizeLg}`]: !!this.sizeLg,
          [`col-pull-${this.pull}`]: !!this.pull,
          [`col-push-${this.push}`]: !!this.push,
        }}
      >
        <slot />
      </Host>
    );
  }
}
