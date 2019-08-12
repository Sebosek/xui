import { Component, h,  Prop } from '@stencil/core';
import { level } from './title.level';

@Component({
  tag: 'xui-title',
  styleUrl: 'title.scss',
  scoped: true,
})
export class Title {
  /**
   * Defines general column size
   * @type {cols}
   */
  @Prop({ reflect: true }) level: level = 1

  @Prop({ reflectToAttr: true, mutable: true }) spaceless: boolean

  render() {
    switch (this.level) {
      case 1:
        return <h1 class={{ spaceless: this.spaceless }}><slot /></h1>;
      case 2:
        return <h2 class={{ spaceless: this.spaceless }}><slot /></h2>;
      case 3:
        return <h3 class={{ spaceless: this.spaceless }}><slot /></h3>;
      case 4:
        return <h4 class={{ spaceless: this.spaceless }}><slot /></h4>;
    }
  }
}
