/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface XuiButton {
    'disabled': boolean;
    'ghost': boolean;
    'text': string;
    'type': 'default' | 'primary' | 'danger';
  }
  interface XuiCheckbox {
    'checked': boolean;
    'disabled': boolean;
    'intermediate': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number;
  }
  interface XuiColor {
    'color': string;
    'steps': number;
  }
  interface XuiInput {
    'disabled': boolean;
    'name': string;
    'placeholder': string;
    'prefixes': Array<(input: HTMLXuiInputElement) => HTMLElement>;
    'suffixes': Array<(input: HTMLXuiInputElement) => HTMLElement>;
    'type': string;
    'value': string | number;
  }
  interface XuiMenu {}
  interface XuiMenuItem {
    'defaultCursor': boolean;
  }
  interface XuiPopup {
    'multipleClicks': boolean;
    'offclickCloses': boolean;
    'state': 'shown' | 'hidden';
  }
  interface XuiRadio {
    'checked': boolean;
    'disabled': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number | null;
  }
  interface XuiToggle {
    'disabled': boolean;
    'switched': boolean;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLXuiButtonElement extends Components.XuiButton, HTMLStencilElement {}
  var HTMLXuiButtonElement: {
    prototype: HTMLXuiButtonElement;
    new (): HTMLXuiButtonElement;
  };

  interface HTMLXuiCheckboxElement extends Components.XuiCheckbox, HTMLStencilElement {}
  var HTMLXuiCheckboxElement: {
    prototype: HTMLXuiCheckboxElement;
    new (): HTMLXuiCheckboxElement;
  };

  interface HTMLXuiColorElement extends Components.XuiColor, HTMLStencilElement {}
  var HTMLXuiColorElement: {
    prototype: HTMLXuiColorElement;
    new (): HTMLXuiColorElement;
  };

  interface HTMLXuiInputElement extends Components.XuiInput, HTMLStencilElement {}
  var HTMLXuiInputElement: {
    prototype: HTMLXuiInputElement;
    new (): HTMLXuiInputElement;
  };

  interface HTMLXuiMenuElement extends Components.XuiMenu, HTMLStencilElement {}
  var HTMLXuiMenuElement: {
    prototype: HTMLXuiMenuElement;
    new (): HTMLXuiMenuElement;
  };

  interface HTMLXuiMenuItemElement extends Components.XuiMenuItem, HTMLStencilElement {}
  var HTMLXuiMenuItemElement: {
    prototype: HTMLXuiMenuItemElement;
    new (): HTMLXuiMenuItemElement;
  };

  interface HTMLXuiPopupElement extends Components.XuiPopup, HTMLStencilElement {}
  var HTMLXuiPopupElement: {
    prototype: HTMLXuiPopupElement;
    new (): HTMLXuiPopupElement;
  };

  interface HTMLXuiRadioElement extends Components.XuiRadio, HTMLStencilElement {}
  var HTMLXuiRadioElement: {
    prototype: HTMLXuiRadioElement;
    new (): HTMLXuiRadioElement;
  };

  interface HTMLXuiToggleElement extends Components.XuiToggle, HTMLStencilElement {}
  var HTMLXuiToggleElement: {
    prototype: HTMLXuiToggleElement;
    new (): HTMLXuiToggleElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'xui-button': HTMLXuiButtonElement;
    'xui-checkbox': HTMLXuiCheckboxElement;
    'xui-color': HTMLXuiColorElement;
    'xui-input': HTMLXuiInputElement;
    'xui-menu': HTMLXuiMenuElement;
    'xui-menu-item': HTMLXuiMenuItemElement;
    'xui-popup': HTMLXuiPopupElement;
    'xui-radio': HTMLXuiRadioElement;
    'xui-toggle': HTMLXuiToggleElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface XuiButton extends JSXBase.HTMLAttributes<HTMLXuiButtonElement> {
    'disabled'?: boolean;
    'ghost'?: boolean;
    'text'?: string;
    'type'?: 'default' | 'primary' | 'danger';
  }
  interface XuiCheckbox extends JSXBase.HTMLAttributes<HTMLXuiCheckboxElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'intermediate'?: boolean;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string | number | boolean>) => void;
    'tabindex'?: number;
    'value'?: string | number;
  }
  interface XuiColor extends JSXBase.HTMLAttributes<HTMLXuiColorElement> {
    'color'?: string;
    'steps'?: number;
  }
  interface XuiInput extends JSXBase.HTMLAttributes<HTMLXuiInputElement> {
    'disabled'?: boolean;
    'name'?: string;
    'placeholder'?: string;
    'prefixes'?: Array<(input: HTMLXuiInputElement) => HTMLElement>;
    'suffixes'?: Array<(input: HTMLXuiInputElement) => HTMLElement>;
    'type'?: string;
    'value'?: string | number;
  }
  interface XuiMenu extends JSXBase.HTMLAttributes<HTMLXuiMenuElement> {}
  interface XuiMenuItem extends JSXBase.HTMLAttributes<HTMLXuiMenuItemElement> {
    'defaultCursor'?: boolean;
  }
  interface XuiPopup extends JSXBase.HTMLAttributes<HTMLXuiPopupElement> {
    'multipleClicks'?: boolean;
    'offclickCloses'?: boolean;
    'state'?: 'shown' | 'hidden';
  }
  interface XuiRadio extends JSXBase.HTMLAttributes<HTMLXuiRadioElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'name'?: string;
    'onSelected'?: (event: CustomEvent<void | string | number>) => void;
    'tabindex'?: number;
    'value'?: string | number | null;
  }
  interface XuiToggle extends JSXBase.HTMLAttributes<HTMLXuiToggleElement> {
    'disabled'?: boolean;
    'onChanged'?: (event: CustomEvent<boolean>) => void;
    'switched'?: boolean;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'xui-button': XuiButton;
    'xui-checkbox': XuiCheckbox;
    'xui-color': XuiColor;
    'xui-input': XuiInput;
    'xui-menu': XuiMenu;
    'xui-menu-item': XuiMenuItem;
    'xui-popup': XuiPopup;
    'xui-radio': XuiRadio;
    'xui-toggle': XuiToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


