import { Component, h } from '@stencil/core';

@Component({
  tag: 'bug-component',
  scoped: true,
})
export class Bug {
  render() {
    return (
      <span>
        <span>🐛</span>
        <span>🐇</span>
      </span>
    )
  }
}
