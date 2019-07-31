import { Component, h, Prop, Host, Watch } from '@stencil/core';

@Component({
  tag: 'xui-button',
  styleUrl: 'button.scss',
  scoped: true,
})
export class Button {
  private __button: HTMLButtonElement

  @Prop({ reflect: true }) text: string
  @Prop({ reflect: true }) type: 'default' | 'primary' | 'danger' = 'default'
  @Prop({ reflect: true }) disabled: boolean
  @Prop({ reflect: true }) ghost: boolean
  @Prop({ reflect: true, mutable: true }) state: 'none' | 'hover' | 'focus' | 'active' = 'none'

  @Watch('state') watchState(newValue: string) {
    if (newValue === 'focus') {
      this.__button.focus()
    }
  }

  componentDidLoad() {
    this.watchState(this.state)
  }

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
          [this.state]: true,
        }}
      >
        {this.text && <button ref={(el: HTMLButtonElement) => this.__button = el}>{this.text}</button>}
      </Host>
    )
  }
}
