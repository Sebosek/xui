import { Component, h, Prop, Watch } from '@stencil/core';

class HSL {
  hue: number = 0;
  saturation: number = 0;
  lightness: number = 0;
  alpha: number = 1;

  toString() {
    return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha})`
  }
}

@Component({
  tag: 'xui-color',
  styleUrl: 'color.scss',
  shadow: true,
})
export class Color {
  __hsl : HSL = new HSL()
  __regex : RegExp = /^hsla?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})(,\s?(\d|\d\.\d+))?\)$/gi

  @Prop({ reflect: true }) steps : number = 2
  @Prop({ reflect: true }) color : string

  @Watch('color')
  watchColor(value: string) {
    const result = this.__regex.exec(value)

    if (result) {
      this.__hsl.hue = parseInt(result[1], 10)
      this.__hsl.saturation = parseInt(result[2], 10)
      this.__hsl.lightness = parseInt(result[3], 10)
      this.__hsl.alpha = parseInt(result[5], 10) || 1

      return
    }

    console.warn(`value ${value} is not valid HSLa color`)
  }

  componentWillLoad() {
    this.watchColor(this.color)
  }

  render() {
    console.log('rendering', this.__hsl.toString(), this.styles())

    return ([
      // <Host
      //   style={this.styles()}
      // >
      //   <div>
      //     Here comes colors
      //   </div>
      // </Host>,
      <div class="colors">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
      <div class="colors danger">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
      <div class="colors warning">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
      <div class="colors success">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
      <div class="colors border">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
      <div class="colors font">
        <div class="h900"></div>
        <div class="h800"></div>
        <div class="h700"></div>
        <div class="h600"></div>
        <div class="h500"></div>
        <div class="h400"></div>
        <div class="h300"></div>
        <div class="h200"></div>
        <div class="h100"></div>
      </div>,
    ])
  }

  private styles() {
    const result = {}
    if (this.__hsl) {
      result['background'] = this.__hsl.toString()
    }

    return result
  }
}
