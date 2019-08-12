import { Component, Event, EventEmitter, h, Prop, Watch, State } from '@stencil/core';
import { size } from './avatar.size';

@Component({
  tag: 'xui-avatar',
  styleUrl: 'avatar.scss',
  scoped: true,
})
export class Avatar {
  @Prop({ reflect: true }) size : size = 'm'
  @Prop({ reflect: true }) initials : string
  @Prop({ reflect: true }) src : string

  @State() path : string

  @Watch('initials') watchInitials(newValue : string) {
    this.initials = newValue.trim().substr(0, 3)
  }

  @Watch('src') async watchSrc(newValue : string) {
    if (!newValue) return;

    try {
      const response = await fetch(newValue)
      if (!response.ok) {
        const message = `Unable to load data from '${newValue}'`

        console.warn(`[Avatar] ${message}`, response)
        this.error.emit()
        return
      }

      const data = await response.blob()
      this.path = URL.createObjectURL(data)
    } catch (e) {
      const message = `Unable to retrieve data from '${newValue}'`

      console.error(`[Avatar] ${message}`, e)
      this.error.emit()
    }
  }

  @Event({
    eventName: 'loading-error'
  }) error: EventEmitter

  async componentDidLoad() {
    await this.watchSrc(this.src)
  }

  render() {
    return (
      <figure
        data-initials={!!this.initials && this.initials}
        class={{
          [this.size]: true,
          'loaded': !!this.path,
          'loading': this.src && !this.path
        }}
      >
        {this.path && <img src={this.path} />}
      </figure>
    )
  }
}
