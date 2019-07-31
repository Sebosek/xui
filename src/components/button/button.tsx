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

  /**
   * Improvement!
   * Support 3 level of buttones:
   * 1st (primary) - fully filled button, mono font color
   * 2nd (secondary) - button with a border and font color based on button type
   * 3rd (tertiary) - ghost button
   **/
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
