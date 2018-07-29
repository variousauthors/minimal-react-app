declare module 'react-dom' {
  import {
    ReactInstance, Component, ComponentState,
    ReactElement, SFCElement, CElement,
    DOMAttributes, DOMElement, ReactNode
  } from 'react';

  export function findDOMNode<E extends Element>(instance: ReactInstance): E;
  export function findDOMNode(instance: ReactInstance): Element;
  export function unmountComponentAtNode(container: Element): boolean;

  export const version: string;
  export const render: Renderer;
  export const hydrate: Renderer;

  export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
  export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
  export function unstable_batchedUpdates(callback: () => any): void;
  export function createPortal(element: ReactNode, container: Element): JSX.Element

  export function unstable_renderSubtreeIntoContainer<P extends DOMAttributes<T>, T extends Element>(
    parentComponent: Component<any>,
    element: DOMElement<P, T>,
    container: Element,
    callback?: (element: T) => any): T;
  export function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any): T;
  export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;

  export interface Renderer {
    <P extends DOMAttributes<T>, T extends Element>(
      element: DOMElement<P, T>,
      container: Element | null,
      callback?: (element: T) => any
    ): T;
    <P>(
      element: SFCElement<P>,
      container: Element | null,
      callback?: () => any
    ): void;
    <P, T extends Component<P, ComponentState>>(
      element: CElement<P, T>,
      container: Element | null,
      callback?: (component: T) => any
    ): T;
    <P>(
      element: ReactElement<P>,
      container: Element | null,
      callback?: (component?: Component<P, ComponentState> | Element) => any
    ): Component<P, ComponentState> | Element | void;
    <P>(
      parentComponent: Component<any>,
      element: SFCElement<P>,
      container: Element,
      callback?: () => any
    ): void;
  }
}
