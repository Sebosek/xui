import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'xui-password',
  scoped: true,
})
export class Password {
  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean
  @Prop({ reflectToAttr: true, mutable: true }) readable: boolean

  render() {
    return (
      <xui-input
        placeholder={this.placeholder}
        value={this.value}
        name={this.name}
        disabled={this.disabled}
        type={this.readable ? 'input' : 'password'}
        suffixes={[
          _ => this.toggle()
        ]}
      ></xui-input>
    );
  }

  private toggle() {
    return (
      <span onClick={() => this.readable = !this.readable}>
        {this.readable ? 'hide' : 'show'}
      </span>
    )
  }
}