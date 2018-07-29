import * as React from 'react'
import * as ReactDOM from 'react-dom'

const isDefined = (obj: {}): boolean => {
  return obj !== undefined && obj !== null
}

export default class Entry {
  private constructor() { }
  private static instance?: Entry

  public static init() {
    if (isDefined(this.instance)) {
      return this.instance
    } else {
      this.instance = new Entry()
      return this.instance
    }
  }

  public render() {
      ReactDOM.render(
        <div>Hello</div>,
        document.querySelector('#root')
      )
  }
}
