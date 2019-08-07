import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'xui-form-control',
  styleUrl: 'form-control.scss',
  scoped: true,
})
export class FormControl {
  render() {
    return (
      <Host>
        <div class="control">
          <slot name="control" />
        </div>
        <div class="description">
          <slot />
        </div>
      </Host>
    )
  }
}
