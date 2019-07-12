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
  @Prop({ reflect: true }) ghost: boolean

  render() {
    return (
      <Host
        class={{
          'ghost': this.ghost,
          'disabled': this.disabled,
          'primary': this.type === 'primary',
          'danger': this.type === 'danger',
        }}
      >
        {this.text && <button>{this.text}</button>}
      </Host>
    )
  }
}
