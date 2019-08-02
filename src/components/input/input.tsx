import { Component, Element, h, Prop, Host } from '@stencil/core';
import { state } from '../shared/state';

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
  @Prop({ reflect: true, mutable: true }) state: state = 'normal'

  @Element() el: HTMLXuiInputElement

  render() {
    return (
      <Host
        class={{
          [this.state]: true
        }}
      >
        {this.prefixes && this.prefixes.map((prefix) =>
          <div class="addon">
            <div class="control">
              {this.renderEl(prefix)}
            </div>
          </div>
        )}

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.setValue}
          disabled={this.disabled}
          autofocus={this.state === 'focus'}
        />

        {this.suffixes && this.suffixes.map((sufix) =>
          <div class="addon">
            <div class="control">
              {this.renderEl(sufix)}
            </div>
          </div>
        )}
      </Host>
    );
  }

  private setValue(ev: any) {
    this.value = ev.target.value
  }

  private renderEl(fnc: (input: HTMLXuiInputElement) => HTMLElement) {
    const res = fnc(this.el)
    if (res.outerHTML) {
      return <div innerHTML={res.outerHTML}></div>
    }

    return res
  }
}
