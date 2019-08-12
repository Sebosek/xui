import { Component, Event, EventEmitter, h, Prop, Watch, State } from '@stencil/core';
import { size } from './avatar.size';

@Component({
  tag: 'xui-avatar',
  styleUrl: 'avatar.scss',
  scoped: true,
})
export class Avatar {
  /**
   * Sets an avatar size.
   */
  @Prop({ reflect: true }) size : size = 'm'

  /**
   * Sets avatar initials.
   * The value is trimmed to two characters in total.
   */
  @Prop({ reflect: true }) initials : string

  /**
   * Sets the source for async image loading.
   * With every change, the image is asynchronously loaded.
   */
  @Prop({ reflect: true }) src : string

  @State() path : string

  @Watch('initials') watchInitials(newValue : string) {
    this.initials = newValue.trim().substr(0, 2)
  }

  @Watch('src') async watchSrc(newValue : string) {
    if (!newValue) {
      this.path = null;
      return;
    }

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

  /**
   * An event is emitted if async loading fails.
   */
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
