import { Component, h, Method, State } from '@stencil/core';
import { type } from '../callout/callout.type';

export interface Toast {
  text: string;
  element: HTMLXuiCalloutElement;
  timer: number;
  timeout?: number;
  type?: type;
}

export interface ToastOpts {
  text: string;
  timeout?: number;
  type?: type;
}

const MAX_TOASTS_COUNT = 5
const TOAST_TIMEOUT = 5000

@Component({
  tag: 'xui-toast-controller',
  styleUrl: 'toast-controller.scss',
  scoped: true,
})
export class ToastController {
  @State() messages: Array<Toast> = []

  @Method() async message({ 
    text,
    timeout = TOAST_TIMEOUT,
    type = null,
  }: ToastOpts): Promise<Toast> {
    if (this.messages.length > MAX_TOASTS_COUNT) {
      this.messages.slice(0, this.messages.length - MAX_TOASTS_COUNT + 1).forEach(this.removeToast)
    }

    const toast: Toast = {
      text,
      element: null,
      timer: 0,
      timeout,
      type,
    }

    toast.timer = setTimeout(() => toast.element.destroy(), timeout)
    this.messages = [ ...this.messages, toast ]
    return toast
  }

  render() {
    return (
      <div class="controller">
        {this.messages.map(toast => (
          <xui-callout
            type={toast.type}
            ref={(c: HTMLXuiCalloutElement) => toast.element = c}
            closeable
          >{toast.text}</xui-callout>
        ))}
      </div>
    )
  }

  private removeToast(toast: Toast) {
    clearTimeout(toast.timer)

    toast.element.destroy()
  }
}
