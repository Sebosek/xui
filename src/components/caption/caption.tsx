import { Component, h, Host, Prop } from '@stencil/core';
import { JsxElement } from 'typescript';

@Component({
  tag: 'xui-caption',
  styleUrl: 'caption.scss',
  scoped: true
})
export class Caption {
  @Prop({ reflect: true }) type: 'info' | 'success' | 'question' | 'error' = 'info'

  protected get componentIcon(): { [key: string]: () => JsxElement } {
    return ({
      'info': this.info,
      'success': this.success,
      'question': this.question,
      'error': this.error,
    })
  }

  render() {
    return (
      <Host
        class={{
          [this.type]: true
        }}
      >
        <span class="icon">
          {this.componentIcon[this.type]()}
        </span>

        <slot />
      </Host>
    );
  }

  private error() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
        </g>
      </svg>
    )
  }

  private question() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"/>
        </g>
      </svg>
    )
  }

  private info() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
        </g>
      </svg>
    )
  }

  private success() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/>
        </g>
      </svg>
    )
  }
}
