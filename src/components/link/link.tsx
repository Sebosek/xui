import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'xui-link',
  styleUrl: 'link.scss',
  scoped: true,
})
export class Link {
  @Prop({ reflect: true }) href: string
  @Prop({ reflect: true }) target: string

  render() {
    return (
      <a
        href={this.href}
        target={this.target}
      ><slot /></a>
    )
  }
}