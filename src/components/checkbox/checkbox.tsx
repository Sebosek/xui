import { Component, Event, h, Prop, Host, Listen, EventEmitter, Watch, Element } from '@stencil/core';
import { state } from '../shared/state';

@Component({
  tag: 'xui-checkbox',
  styleUrl: 'checkbox.scss',
  scoped: true,
})
export class Checkbox {
  private __activationKeys = [' ', 'Enter']
  private __definedIndex = 0

  @Prop({ reflect: true }) name: string
  @Prop({ reflect: true, mutable: true }) checked: boolean = false
  @Prop({ reflect: true, mutable: true }) intermediate: boolean = false
  @Prop({ reflect: true, mutable: true }) value: string | number
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false
  @Prop({ reflect: true, mutable: true }) tabindex: number = 0
  @Prop({ reflect: true, mutable: true }) state: state = 'normal'

  @Watch('disabled') watchDisabled(newValue: boolean) {
    if (newValue) {
      this.__definedIndex = this.tabindex;
      this.tabindex = -1;
    }
    else {
      this.tabindex = this.__definedIndex;
    }
  }

  @Watch('state') watchState(newValue: string) {
    if (newValue === 'focus') {
      this.el.focus()
    }
  }

  @Element() el: HTMLXuiCheckboxElement

  @Event() changed: EventEmitter<string | number | boolean>

  @Listen('click') handleClick(ev: MouseEvent) {
    ev.stopPropagation()
    this.toggle()
  }

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    if (this.__activationKeys.includes(ev.key)) {
      this.toggle()
    }
  }

  componentWillLoad() {
    this.watchDisabled(this.disabled)
  }

  componentDidLoad() {
    this.watchState(this.state)
  }

  render() {
    return (
      <Host
        class={{
          [this.state]: true,
        }}
      >
        <input
          type="checkbox"
          checked={this.checked}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
        />
        <div class="control">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </g>
          </svg>
        </div>
      </Host>
    );
  }

  private toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked
    this.intermediate = false;
    const value = !this.checked || (this.value || true)

    this.changed.emit(value)
  }
}
