import { Component, h } from '@stencil/core';

@Component({
  tag: 'xui-form-item',
  styleUrl: 'form-item.scss',
  scoped: true,
})
export class FormItem {
  render() {
    return (
      <label>
        <div class="label">
          <slot name="label" />
        </div>
        <div class="content">
          <slot />
        </div>
        <div class="messages">
          <slot name="message" />
        </div>
      </label>
    )
  }
}
