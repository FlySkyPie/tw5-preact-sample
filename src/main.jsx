import { render } from 'preact';
import "preact/debug"; // Enable this with devtool extension for debug purpose

import { widget as Widget } from "$:/core/modules/widgets/widget.js";
import { App } from './app.jsx';

class ClockWidget extends Widget {
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
  }

  render(parent, nextSibling) {
    if (!$tw.browser) {
      return;
    }

    render(<App />, parent);
  }
}

export { ClockWidget as "clock-widget" };
