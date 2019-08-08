import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'xui-loading',
  styleUrl: 'loading.scss',
  scoped: true,
})
export class Loading {
  @Prop({ reflect: true }) size: 12 | 24 | 32 = 12

  render() {
    return (
      <div class={{
        loading: true,
        [`size-${this.size}`]: true,
      }}></div>
    )
  }
}