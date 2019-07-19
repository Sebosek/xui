import { Component, h, Prop, Watch } from '@stencil/core';
import { size } from './avatar.size';

@Component({
  tag: 'xui-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar {
  @Prop({ reflectToAttr: true, mutable: true }) size : size = 'm'
  @Prop({ reflectToAttr: true, mutable: true }) initials : string
  @Prop({ reflectToAttr: true, mutable: true }) src : string

  @Watch('initials') watchInitials(newValue : string) {
    this.initials = newValue.trim().substr(0, 2)
  }

  render() {
    return (
      <figure
        data-initials={!!this.initials && this.initials}
        class={{ [this.size]: true }}
      >
        {this.src && <img src={this.src} />}
      </figure>
    )
  }
}
