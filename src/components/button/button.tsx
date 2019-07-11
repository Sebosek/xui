import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'xui-button',
  styleUrl: 'button.scss',
  scoped: true,
})
export class Button {
  @Prop({ reflect: true }) text: string
  @Prop({ reflect: true }) type: 'default' | 'primary' | 'danger' = 'default'
  @Prop({ reflect: true }) disabled: boolean
  @Prop({ reflect: true }) inverted: boolean
  @Prop({ reflect: true }) ghost: boolean

  render() {
    return (
      <Host
        class={{
          'ghost': this.ghost,
          'inverted': this.inverted,
          'disabled': this.disabled,
        }}
      >
        {this.text && <button>{this.text}</button>}
      </Host>
    )
  }
}
