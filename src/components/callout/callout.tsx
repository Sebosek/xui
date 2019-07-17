import { Component, h, Prop, Method, Element, Watch, Host } from '@stencil/core';
import { type } from './callout.type';
import { state } from './callout.state';

@Component({
  tag: 'xui-callout',
  styleUrl: 'callout.scss',
  shadow: true
})
export class Callout {
  private _timer : number

  constructor() {
    this.destroy = this.destroy.bind(this)
  }

  @Prop({ reflect: true }) closeable : boolean = false
  @Prop({ reflect: true }) type : type | null
  @Prop({ reflect: true }) timeout : number = 5000
  @Prop({ reflect: true, mutable: true }) state : state = 'init'

  @Watch('state') watchState(newValue: state) {
    if (newValue === 'running') {
      this._timer = setTimeout(this.destroy, this.timeout)
    }

    if (newValue === 'destroyed') {
      this.destroy()
    }
  }

  @Element() el : HTMLElement
  message : HTMLElement

  @Method() async destroy() {
    this.message.classList.toggle('closing', true)
    setTimeout(() => this.el.remove(), 200)
  }

  componentDidUnload() {
    clearTimeout(this._timer)
  }

  render() {
    return (
      <Host
        class="message"
        ref={(el : HTMLElement) => this.message = el}
      >
        {this.success()}
        {this.danger()}
        {this.info()}
        <div class="text">
          <slot></slot>
        </div>
        {this.close()}
      </Host>
    )
  }

  private close() {
    return (
      this.closeable &&
      <svg
        class="icon close"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={this.destroy}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
        </g>
      </svg>
    )
  }

  private success() {
    return (
      this.type === 'success' &&
      <svg class="icon success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/>
        </g>
      </svg>
    )
  }

  private danger() {
    return (
      this.type === 'danger' &&
      <svg class="icon danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
        </g>
      </svg>
    )
  }

  private info() {
    return (
      this.type === 'info' &&
      <svg class="icon info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
        </g>
      </svg>
    )
  }
}
