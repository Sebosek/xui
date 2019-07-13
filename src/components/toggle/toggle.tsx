import { Component, Event, EventEmitter, h, Host, Prop, Listen, Watch } from "@stencil/core";

@Component({
  tag: 'xui-toggle',
  styleUrl: 'toggle.scss',
  scoped: true,
})
export class Toggle {
  private __activationKeys = [' ', 'Enter']

  @Prop({ reflect: true, mutable: true }) switched: boolean = false
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false

  @Watch('switched') watchSwitched() {
    this.changed.emit(this.switched)
  }

  @Event() changed: EventEmitter<boolean>

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    if (this.__activationKeys.includes(ev.key)) {
      this.toggle()
    }
  }

  @Listen('click') handleClick() {
    this.toggle()
  }

  render() {
    return (
      <Host
        class={{
          'switched': this.switched,
          'play-switched': this.switched,
          'play-unswitched': !this.switched,
        }}
        tabIndex="0"
      ></Host>
    )
  }

  private toggle() {
    this.switched = !this.switched
  }
}
