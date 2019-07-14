import { Component, Element, h, Prop, Host } from '@stencil/core';

@Component( {
  tag: 'xui-input',
  styleUrl: 'input.scss',
  scoped: true,
})
export class Input {
  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string
  @Prop({ reflectToAttr: true, mutable: true }) type: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean
  @Prop() prefixes: Array<(input: HTMLXuiInputElement) => HTMLElement> = []
  @Prop() suffixes: Array<(input: HTMLXuiInputElement) => HTMLElement> = []

  @Element() el: HTMLXuiInputElement

  render() {
    return (
      <Host>
        {this.prefixes && this.prefixes.map((prefix) =>
          <div class="addon">
            <div class="control">{prefix(this.el)}</div>
          </div>
        )}

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.setValue}
          disabled={this.disabled}
        />

        {this.suffixes && this.suffixes.map((sufix) =>
          <div class="addon">
            <div class="control">{sufix(this.el)}</div>
          </div>
        )}
      </Host>
    );
  }

  private setValue(ev: any) {
    this.value = ev.target.value
  }
}
