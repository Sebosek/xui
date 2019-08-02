import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'xui-popover',
  styleUrl: 'popover.scss',
  scoped: true
})
export class PopOver {
  @Prop({ reflect: true }) title: string = ''
  @Prop({ reflect: true }) direction: 'top' | 'left' | 'bottom' | 'right' | 'none' = 'none'

  render() {
    return (
      <Host>
        <div
          class={{
            'popover': true,
            [this.direction]: true,
          }}
        >
          {this.title && <div class="title">{this.title}</div>}
          <slot name="content" />
        </div>
        
        <slot />
      </Host>
    )
  }
}