import { Component, Event, EventEmitter, h, Host, Prop, Listen, Watch } from "@stencil/core";

@Component({
  tag: 'xui-radio',
  styleUrl: 'radio.scss',
  scoped: true
})
export class Radio {
  private __activationKeys = [' ', 'Enter']
  private __definedIndex = 0
  private __radioEl: HTMLInputElement

  @Prop({ reflectToAttr: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) checked: boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number | null
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean = false
  @Prop({ reflect: true, mutable: true }) tabindex: number = 0

  @Watch('disabled') watchDisabled(newValue: boolean) {
    if (newValue) {
      this.__definedIndex = this.tabindex;
      this.tabindex = -1;
    }
    else {
      this.tabindex = this.__definedIndex;
    }
  }

  @Event() selected: EventEmitter<void | string | number>

  @Listen('click') handleSelect() {
    this.__radioEl.checked = true
    this.selected.emit(this.value)
  }

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    if (this.__activationKeys.includes(ev.key)) {
      this.handleSelect()
    }
  }

  componentWillLoad() {
    this.watchDisabled(this.disabled)
  }

  componentDidLoad() {
    if (this.checked) {
      this.handleSelect()
    }
  }

  render() {
    return (
      <Host>
        <input
          type="radio"
          name={this.name}
          value={this.value}
          ref={(el: HTMLInputElement) => this.__radioEl = el}
        />
        <div class="control" />
      </Host>
    );
  }
}
