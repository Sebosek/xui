import { Component, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'xui-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {
  @Prop({ reflect: true, mutable: true }) activeTab: string

  @Element() el: HTMLElement

  @State() items: Array<HTMLXuiTabItemElement> = []

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement
    const items = Array.from(slot.assignedElements())
      .filter(el => el.nodeName.localeCompare('xui-tab-item'))
      .map(item => item as HTMLXuiTabItemElement)

    this.items = items
  }

  handleTabClick(item: HTMLXuiTabItemElement) {
    this.activeTab = item.key
  }

  render() {
    return ([
      <div class="slot">
        <slot />
      </div>,
      <div>
        {this.items &&
          <div class="tabs">
            <nav>
              {this.items.map(item =>
                <a
                  class={this.isActive(item)}
                  onClick={_ => this.handleTabClick(item)}
                >{item.title}</a>
              )}
            </nav>
            <div class="body">
              {this.items.map(item =>
                <div
                  class={this.isActive(item)}
                  innerHTML={item.innerHTML}
                ></div>
              )}
            </div>
          </div>
        }
      </div>
    ])
  }

  private isActive(item: HTMLXuiTabItemElement) {
    return ({
      'active': this.activeTab === item.key
    })
  }
}
