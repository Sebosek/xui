import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'xui-tab-item',
  shadow: true,
})
export class TabItem {
  @Prop({ reflect: true }) title: string
  @Prop({ reflect: true }) key: string

  render() {
    return (
      <slot />
    )
  }
}
