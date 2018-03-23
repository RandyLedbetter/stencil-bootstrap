/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  RouterHistory,
} from '@stencil/router';

import {
  StbCollapse as StbCollapse
} from './components/collapse/collapse';

declare global {
  interface HTMLStbCollapseElement extends StbCollapse, HTMLStencilElement {
  }
  var HTMLStbCollapseElement: {
    prototype: HTMLStbCollapseElement;
    new (): HTMLStbCollapseElement;
  };
  interface HTMLElementTagNameMap {
    "stb-collapse": HTMLStbCollapseElement;
  }
  interface ElementTagNameMap {
    "stb-collapse": HTMLStbCollapseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-collapse": JSXElements.StbCollapseAttributes;
    }
  }
  namespace JSXElements {
    export interface StbCollapseAttributes extends HTMLAttributes {
      active?: boolean;
      activeClass?: string;
      animation?: any;
      disabled?: boolean;
      type?: string;
    }
  }
}


import {
  StbDropdown as StbDropdown
} from './components/dropdown/dropdown';

declare global {
  interface HTMLStbDropdownElement extends StbDropdown, HTMLStencilElement {
  }
  var HTMLStbDropdownElement: {
    prototype: HTMLStbDropdownElement;
    new (): HTMLStbDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "stb-dropdown": HTMLStbDropdownElement;
  }
  interface ElementTagNameMap {
    "stb-dropdown": HTMLStbDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-dropdown": JSXElements.StbDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface StbDropdownAttributes extends HTMLAttributes {
      animation?: any;
      ariaHidden?: string;
      disabled?: boolean;
      effect?: string;
      keyboard?: boolean;
      modalDialogCentered?: string;
      options?: any;
      size?: 'sm' | 'lg';
    }
  }
}


import {
  StbModal as StbModal
} from './components/modal/stb-modal';

declare global {
  interface HTMLStbModalElement extends StbModal, HTMLStencilElement {
  }
  var HTMLStbModalElement: {
    prototype: HTMLStbModalElement;
    new (): HTMLStbModalElement;
  };
  interface HTMLElementTagNameMap {
    "stb-modal": HTMLStbModalElement;
  }
  interface ElementTagNameMap {
    "stb-modal": HTMLStbModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-modal": JSXElements.StbModalAttributes;
    }
  }
  namespace JSXElements {
    export interface StbModalAttributes extends HTMLAttributes {
      animation?: any;
      ariaHidden?: string;
      ariaLabelledBy?: string;
      effect?: string;
      keyboard?: boolean;
      modalDialogCentered?: string;
      options?: any;
      size?: 'sm' | 'lg';
    }
  }
}


import {
  StbDropdown as StbToggle
} from './components/toggle/toggle';

declare global {
  interface HTMLStbToggleElement extends StbToggle, HTMLStencilElement {
  }
  var HTMLStbToggleElement: {
    prototype: HTMLStbToggleElement;
    new (): HTMLStbToggleElement;
  };
  interface HTMLElementTagNameMap {
    "stb-toggle": HTMLStbToggleElement;
  }
  interface ElementTagNameMap {
    "stb-toggle": HTMLStbToggleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-toggle": JSXElements.StbToggleAttributes;
    }
  }
  namespace JSXElements {
    export interface StbToggleAttributes extends HTMLAttributes {
      active?: boolean;
      activeClass?: string;
      animation?: any;
      disabled?: boolean;
      type?: string;
    }
  }
}


import {
  StbPageComponents as StbPageComponents
} from './pages/components/components';

declare global {
  interface HTMLStbPageComponentsElement extends StbPageComponents, HTMLStencilElement {
  }
  var HTMLStbPageComponentsElement: {
    prototype: HTMLStbPageComponentsElement;
    new (): HTMLStbPageComponentsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-components": HTMLStbPageComponentsElement;
  }
  interface ElementTagNameMap {
    "stb-page-components": HTMLStbPageComponentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-components": JSXElements.StbPageComponentsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageComponentsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppHome as AppHome
} from './pages/home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyApp as MyApp
} from './pages/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
