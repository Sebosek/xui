import { Component, h, Method, State } from '@stencil/core';

export interface Toast {
  text: string;
  timer: number;
  element: HTMLXuiCalloutElement;
}

export interface ToastOpts {
  text: string;
  timeout?: number;
}

const TOAST_TIMEOUT = 5000

@Component({
  tag: 'xui-toast-controller',
  styleUrl: 'toast-controller.scss',
  scoped: true,
})
export class ToastController {
  @State() messages: Array<Toast> = []

  @Method() async message({ text, timeout = TOAST_TIMEOUT }: ToastOpts): Promise<Toast> {
    const toast: Toast = {
      text,
      timer: 0,
      element: null
    }

    toast.timer = setTimeout(() => toast.element.destroy(), timeout)
    this.messages = [ ...this.messages, toast ]

    return toast
  }

  render() {
    return (
      <div>
        {this.messages.map(toast => (
          <xui-callout
            ref={(c: HTMLXuiCalloutElement) => toast.element = c}
          >{toast.text}</xui-callout>
        ))}
      </div>
    )
  }
}
