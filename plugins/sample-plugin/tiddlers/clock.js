'use strict';

var widget_js = require('$:/core/modules/widgets/widget.js');

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id
};

class ClockWidget extends widget_js.widget {
  /**
   * @type {string}
   */
  id;

  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
    this.logger = new $tw.utils.Logger("clock-widget");

    /**
     * Example to using third party module.
     */
    this.id = nanoid();
  }

  render(parent, nextSibling) {
    if (!$tw.browser) {
      return;
    }
    this.logger.log("Rendering clock DOM nodes");
    this.computeAttributes();
    this.parentDomNode = parent;
    this.domNode = $tw.utils.domMaker("div", {
      document: this.document,
      class: "tc-clock-widget",
    });
    parent.insertBefore(this.domNode, nextSibling);
    this.tick();
  }

  tick() {
    this.logger.log("Tick!");
    if (!document.contains(this.domNode)) {
      // Apparently the widget was removed from the DOM. Do some clean up.
      return this.stop();
    }
    this.start();
    this.domNode.innerHTML = this.dateString;
  }

  start() {
    if (!this.clockTicker) {
      this.logger.log("Starting clock");
      this.clockTicker = setInterval(this.tick.bind(this), 1000);
    }
  }

  stop() {
    this.logger.log("Stopping clock");
    clearInterval(this.clockTicker);
    this.clockTicker = null;
  }

  get dateString() {
    const format = "DDth MMM YYYY at hh12:0mm:0ss am";
    return this.id + ":" + $tw.utils.formatDateString(new Date(), format);
  }
}

exports["clock-widget"] = ClockWidget;
