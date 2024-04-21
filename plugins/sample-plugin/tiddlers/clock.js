'use strict';

var widget_js = require('$:/core/modules/widgets/widget.js');

var n,
  l$2,
  u$3,
  i$2,
  o$1,
  r$1,
  f$3,
  e$1,
  c$2,
  s$2,
  h$1 = {},
  v$2 = [],
  p$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  y$1 = Array.isArray;
function d$2(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function _(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function g(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return b$1(l, f, i, o, null);
}
function b$1(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == r ? ++u$3 : r,
    __i: -1,
    __u: 0
  };
  return null == r && null != l$2.vnode && l$2.vnode(f), f;
}
function w$2(n) {
  return n.children;
}
function k$1(n, l) {
  this.props = n, this.context = l;
}
function x$1(n, l) {
  if (null == l) return n.__ ? x$1(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? x$1(n) : null;
}
function C$1(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return C$1(n);
  }
}
function P(n) {
  (!n.__d && (n.__d = !0) && i$2.push(n) && !S$1.__r++ || o$1 !== l$2.debounceRendering) && ((o$1 = l$2.debounceRendering) || r$1)(S$1);
}
function S$1() {
  var n, u, t, o, r, e, c, s;
  for (i$2.sort(f$3); n = i$2.shift();) n.__d && (u = i$2.length, o = void 0, e = (r = (t = n).__v).__e, c = [], s = [], t.__P && ((o = d$2({}, r)).__v = r.__v + 1, l$2.vnode && l$2.vnode(o), O$1(t.__P, o, r, t.__n, void 0 !== t.__P.ownerSVGElement, 32 & r.__u ? [e] : null, c, null == e ? x$1(r) : e, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, j$1(c, o, s), o.__e != e && C$1(o)), i$2.length > u && i$2.sort(f$3));
  S$1.__r = 0;
}
function $$1(n, l, u, t, i, o, r, f, e, c, s) {
  var a,
    p,
    y,
    d,
    _,
    g = t && t.__k || v$2,
    b = l.length;
  for (u.__d = e, I$1(u, l, g), e = u.__d, a = 0; a < b; a++) null != (y = u.__k[a]) && "boolean" != typeof y && "function" != typeof y && (p = -1 === y.__i ? h$1 : g[y.__i] || h$1, y.__i = a, O$1(n, y, p, i, o, r, f, e, c, s), d = y.__e, y.ref && p.ref != y.ref && (p.ref && N(p.ref, null, y), s.push(y.ref, y.__c || d, y)), null == _ && null != d && (_ = d), 65536 & y.__u || p.__k === y.__k ? (e && !e.isConnected && (e = x$1(p)), e = H$1(y, e, n)) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
  u.__d = e, u.__e = _;
}
function I$1(n, l, u) {
  var t,
    i,
    o,
    r,
    f,
    e = l.length,
    c = u.length,
    s = c,
    a = 0;
  for (n.__k = [], t = 0; t < e; t++) r = t + a, null != (i = n.__k[t] = null == (i = l[t]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? b$1(null, i, null, null, null) : y$1(i) ? b$1(w$2, {
    children: i
  }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? b$1(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = n, i.__b = n.__b + 1, f = A(i, u, r, s), i.__i = f, o = null, -1 !== f && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f === r + 1 ? a++ : f > r ? s > e - r ? a += f - r : a-- : f < r ? f == r - 1 && (a = f - r) : a = 0, f !== t + a && (i.__u |= 65536))) : (o = u[r]) && null == o.key && o.__e && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x$1(o)), q(o, o, !1), u[r] = null, s--);
  if (s) for (t = 0; t < c; t++) null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x$1(o)), q(o, o));
}
function H$1(n, l, u) {
  var t, i;
  if ("function" == typeof n.type) {
    for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = H$1(t[i], l, u));
    return l;
  }
  n.__e != l && (u.insertBefore(n.__e, l || null), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 === l.nodeType);
  return l;
}
function T$1(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (y$1(n) ? n.some(function (n) {
    T$1(n, l);
  }) : l.push(n)), l;
}
function A(n, l, u, t) {
  var i = n.key,
    o = n.type,
    r = u - 1,
    f = u + 1,
    e = l[u];
  if (null === e || e && i == e.key && o === e.type && 0 == (131072 & e.__u)) return u;
  if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
      r--;
    }
    if (f < l.length) {
      if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}
function F$1(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || p$1.test(l) ? u : u + "px";
}
function L$1(n, l, u, t, i) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || F$1(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || F$1(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = e$1, n.addEventListener(l, o ? s$2 : c$2, o)) : n.removeEventListener(l, o ? s$2 : c$2, o);else {
    if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function M$1(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u.t) u.t = e$1++;else if (u.t < t.u) return;
      return t(l$2.event ? l$2.event(u) : u);
    }
  };
}
function O$1(n, u, t, i, o, r, f, e, c, s) {
  var a,
    h,
    v,
    p,
    _,
    g,
    b,
    m,
    x,
    C,
    P,
    S,
    I,
    H,
    T,
    A = u.type;
  if (void 0 !== u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [e = u.__e = t.__e]), (a = l$2.__b) && a(u);
  n: if ("function" == typeof A) try {
    if (m = u.props, x = (a = A.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? b = (h = u.__c = t.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? u.__c = h = new A(m, C) : (u.__c = h = new k$1(m, C), h.constructor = A, h.render = B$2), x && x.sub(h), h.props = m, h.state || (h.state = {}), h.context = C, h.__n = i, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != A.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d$2({}, h.__s)), d$2(h.__s, A.getDerivedStateFromProps(m, h.__s))), p = h.props, _ = h.state, h.__v = u, v) null == A.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (null == A.getDerivedStateFromProps && m !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, C), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, C) || u.__v === t.__v)) {
        for (u.__v !== t.__v && (h.props = m, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
          n && (n.__ = u);
        }), P = 0; P < h._sb.length; P++) h.__h.push(h._sb[P]);
        h._sb = [], h.__h.length && f.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(p, _, g);
      });
    }
    if (h.context = C, h.props = m, h.__P = n, h.__e = !1, S = l$2.__r, I = 0, "prototype" in A && A.prototype.render) {
      for (h.state = h.__s, h.__d = !1, S && S(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
      h._sb = [];
    } else do {
      h.__d = !1, S && S(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++I < 25);
    h.state = h.__s, null != h.getChildContext && (i = d$2(d$2({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (g = h.getSnapshotBeforeUpdate(p, _)), $$1(n, y$1(T = null != a && a.type === w$2 && null == a.key ? a.props.children : a) ? T : [T], u, t, i, o, r, f, e, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && f.push(h), b && (h.__E = h.__ = null);
  } catch (n) {
    u.__v = null, c || null != r ? (u.__e = e, u.__u |= c ? 160 : 32, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l$2.__e(n, u, t);
  } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z$2(t.__e, u, t, i, o, r, f, c, s);
  (a = l$2.diffed) && a(u);
}
function j$1(n, u, t) {
  u.__d = void 0;
  for (var i = 0; i < t.length; i++) N(t[i], t[++i], t[++i]);
  l$2.__c && l$2.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l$2.__e(n, u.__v);
    }
  });
}
function z$2(l, u, t, i, o, r, f, e, c) {
  var s,
    a,
    v,
    p,
    d,
    g,
    b,
    m = t.props,
    w = u.props,
    k = u.type;
  if ("svg" === k && (o = !0), null != r) for (s = 0; s < r.length; s++) if ((d = r[s]) && "setAttribute" in d == !!k && (k ? d.localName === k : 3 === d.nodeType)) {
    l = d, r[s] = null;
    break;
  }
  if (null == l) {
    if (null === k) return document.createTextNode(w);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, w.is && w), r = null, e = !1;
  }
  if (null === k) m === w || e && l.data === w || (l.data = w);else {
    if (r = r && n.call(l.childNodes), m = t.props || h$1, !e && null != r) for (m = {}, s = 0; s < l.attributes.length; s++) m[(d = l.attributes[s]).name] = d.value;
    for (s in m) d = m[s], "children" == s || ("dangerouslySetInnerHTML" == s ? v = d : "key" === s || s in w || L$1(l, s, null, d, o));
    for (s in w) d = w[s], "children" == s ? p = d : "dangerouslySetInnerHTML" == s ? a = d : "value" == s ? g = d : "checked" == s ? b = d : "key" === s || e && "function" != typeof d || m[s] === d || L$1(l, s, d, m[s], o);
    if (a) e || v && (a.__html === v.__html || a.__html === l.innerHTML) || (l.innerHTML = a.__html), u.__k = [];else if (v && (l.innerHTML = ""), $$1(l, y$1(p) ? p : [p], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && x$1(t, 0), e, c), null != r) for (s = r.length; s--;) null != r[s] && _(r[s]);
    e || (s = "value", void 0 !== g && (g !== l[s] || "progress" === k && !g || "option" === k && g !== m[s]) && L$1(l, s, g, m[s], !1), s = "checked", void 0 !== b && b !== l[s] && L$1(l, s, b, m[s], !1));
  }
  return l;
}
function N(n, u, t) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l$2.__e(n, t);
  }
}
function q(n, u, t) {
  var i, o;
  if (l$2.unmount && l$2.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l$2.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q(i[o], u, t || "function" != typeof n.type);
  t || null == n.__e || _(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function B$2(n, l, u) {
  return this.constructor(n, u);
}
function D$1(u, t, i) {
  var o, r, f, e;
  l$2.__ && l$2.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], O$1(t, u = (!o && i || t).__k = g(w$2, null, [u]), r || h$1, h$1, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), j$1(f, u, e);
}
n = v$2.slice, l$2 = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u$3 = 0, k$1.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$2({}, this.state), "function" == typeof n && (n = n(d$2({}, u), this.props)), n && d$2(u, n), null != n && this.__v && (l && this._sb.push(l), P(this));
}, k$1.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), P(this));
}, k$1.prototype.render = w$2, i$2 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$3 = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, S$1.__r = 0, e$1 = 0, c$2 = M$1(!1), s$2 = M$1(!0);

"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.20.2", l$2, {
  Fragment: w$2,
  Component: k$1
});

var o = {};
function a$1(e) {
  return e.type === w$2 ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
}
var i$1 = [],
  s$1 = [];
function c$1() {
  return i$1.length > 0 ? i$1[i$1.length - 1] : null;
}
var l$1 = !1;
function u$2(e) {
  return "function" == typeof e.type && e.type != w$2;
}
function f$2(n) {
  for (var e = [n], t = n; null != t.__o;) e.push(t.__o), t = t.__o;
  return e.reduce(function (n, e) {
    n += "  in " + a$1(e);
    var t = e.__source;
    return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : l$1 || (l$1 = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}
var p = "function" == typeof WeakMap;
function d$1(n) {
  var e = [];
  return n.__k ? (n.__k.forEach(function (n) {
    n && "function" == typeof n.type ? e.push.apply(e, d$1(n)) : n && "string" == typeof n.type && e.push(n.type);
  }), e) : e;
}
function h(n) {
  return n ? "function" == typeof n.type ? null === n.__ ? null !== n.__e && null !== n.__e.parentNode ? n.__e.parentNode.localName : "" : h(n.__) : n.type : "";
}
var v$1 = k$1.prototype.setState;
function y(n) {
  return "table" === n || "tfoot" === n || "tbody" === n || "thead" === n || "td" === n || "tr" === n || "th" === n;
}
k$1.prototype.setState = function (n, e) {
  return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f$2(c$1())), v$1.call(this, n, e);
};
var m$1 = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
  b = k$1.prototype.forceUpdate;
function w$1(n) {
  var e = n.props,
    t = a$1(n),
    o = "";
  for (var r in e) if (e.hasOwnProperty(r) && "children" !== r) {
    var i = e[r];
    "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
  }
  var s = e.children;
  return "<" + t + o + (s && s.length ? ">..</" + t + ">" : " />");
}
k$1.prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f$2(c$1())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f$2(this.__v)), b.call(this, n);
}, function () {
  !function () {
    var n = l$2.__b,
      t = l$2.diffed,
      o = l$2.__,
      r = l$2.vnode,
      a = l$2.__r;
    l$2.diffed = function (n) {
      u$2(n) && s$1.pop(), i$1.pop(), t && t(n);
    }, l$2.__b = function (e) {
      u$2(e) && i$1.push(e), n && n(e);
    }, l$2.__ = function (n, e) {
      s$1 = [], o && o(n, e);
    }, l$2.vnode = function (n) {
      n.__o = s$1.length > 0 ? s$1[s$1.length - 1] : null, r && r(n);
    }, l$2.__r = function (n) {
      u$2(n) && s$1.push(n), a && a(n);
    };
  }();
  var n = !1,
    t = l$2.__b,
    r = l$2.diffed,
    c = l$2.vnode,
    l = l$2.__r,
    v = l$2.__e,
    b = l$2.__,
    g = l$2.__h,
    E = p ? {
      useEffect: new WeakMap(),
      useLayoutEffect: new WeakMap(),
      lazyPropTypes: new WeakMap()
    } : null,
    k = [];
  l$2.__e = function (n, e, t, o) {
    if (e && e.__c && "function" == typeof n.then) {
      var r = n;
      n = new Error("Missing Suspense. The throwing component was: " + a$1(e));
      for (var i = e; i; i = i.__) if (i.__c && i.__c.__c) {
        n = r;
        break;
      }
      if (n instanceof Error) throw n;
    }
    try {
      (o = o || {}).componentStack = f$2(e), v(n, e, t, o), "function" != typeof n.then && setTimeout(function () {
        throw n;
      });
    } catch (n) {
      throw n;
    }
  }, l$2.__ = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t;
    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t = !0;
        break;
      default:
        t = !1;
    }
    if (!t) {
      var o = a$1(n);
      throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
    }
    b && b(n, e);
  }, l$2.__b = function (e) {
    var r = e.type;
    if (n = !0, void 0 === r) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w$1(e) + "\n\n" + f$2(e));
    if (null != r && "object" == typeof r) {
      if (void 0 !== r.__k && void 0 !== r.__e) throw new Error("Invalid type passed to createElement(): " + r + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a$1(e) + " = " + w$1(r) + ";\n  let vnode = <My" + a$1(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f$2(e));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r) ? "array" : r));
    }
    if (void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof e.ref + "] instead\n" + w$1(e) + "\n\n" + f$2(e));
    if ("string" == typeof e.type) for (var i in e.props) if ("o" === i[0] && "n" === i[1] && "function" != typeof e.props[i] && null != e.props[i]) throw new Error("Component's \"" + i + '" property should be a function, but got [' + typeof e.props[i] + "] instead\n" + w$1(e) + "\n\n" + f$2(e));
    if ("function" == typeof e.type && e.type.propTypes) {
      if ("Lazy" === e.type.displayName && E && !E.lazyPropTypes.has(e.type)) {
        var s = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var c = e.type();
          E.lazyPropTypes.set(e.type, !0), console.warn(s + "Component wrapped in lazy() is " + a$1(c));
        } catch (n) {
          console.warn(s + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var l = e.props;
      e.type.__f && delete (l = function (n, e) {
        for (var t in e) n[t] = e[t];
        return n;
      }({}, l)).ref, function (n, e, t, r, a) {
        Object.keys(n).forEach(function (t) {
          var i;
          try {
            i = n[t](e, t, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n) {
            i = n;
          }
          i && !(i.message in o) && (o[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
        });
      }(e.type.propTypes, l, 0, a$1(e), function () {
        return f$2(e);
      });
    }
    t && t(e);
  }, l$2.__r = function (e) {
    l && l(e), n = !0;
  }, l$2.__h = function (e, t, o) {
    if (!e || !n) throw new Error("Hook can only be invoked from render methods.");
    g && g(e, t, o);
  };
  var _ = function (n, e) {
      return {
        get: function () {
          var t = "get" + n + e;
          k && k.indexOf(t) < 0 && (k.push(t), console.warn("getting vnode." + n + " is deprecated, " + e));
        },
        set: function () {
          var t = "set" + n + e;
          k && k.indexOf(t) < 0 && (k.push(t), console.warn("setting vnode." + n + " is not allowed, " + e));
        }
      };
    },
    I = {
      nodeName: _("nodeName", "use vnode.type"),
      attributes: _("attributes", "use vnode.props"),
      children: _("children", "use vnode.props.children")
    },
    T = Object.create({}, I);
  l$2.vnode = function (n) {
    var e = n.props;
    if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
      var t = n.props = {};
      for (var o in e) {
        var r = e[o];
        "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : t[o] = r;
      }
    }
    n.__proto__ = T, c && c(n);
  }, l$2.diffed = function (e) {
    var t,
      o = e.type,
      i = e.__;
    if (e.__k && e.__k.forEach(function (n) {
      if ("object" == typeof n && n && void 0 === n.type) {
        var t = Object.keys(n).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + f$2(e));
      }
    }), "string" == typeof o && (y(o) || "p" === o)) {
      var s = h(i);
      if ("" !== s) "table" === o && "td" !== s && y(s) ? (console.log(s, i.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w$1(e) + "\n\n" + f$2(e))) : "thead" !== o && "tfoot" !== o && "tbody" !== o || "table" === s ? "tr" === o && "thead" !== s && "tfoot" !== s && "tbody" !== s && "table" !== s ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + w$1(e) + "\n\n" + f$2(e)) : "td" === o && "tr" !== s ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w$1(e) + "\n\n" + f$2(e)) : "th" === o && "tr" !== s && console.error("Improper nesting of table. Your <th> should have a <tr>." + w$1(e) + "\n\n" + f$2(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w$1(e) + "\n\n" + f$2(e));else if ("p" === o) {
        var c = d$1(e).filter(function (n) {
          return m$1.test(n);
        });
        c.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c.join(", ") + "as child-elements." + w$1(e) + "\n\n" + f$2(e));
      }
    }
    if (n = !1, r && r(e), null != e.__k) for (var l = [], u = 0; u < e.__k.length; u++) {
      var p = e.__k[u];
      if (p && null != p.key) {
        var v = p.key;
        if (-1 !== l.indexOf(v)) {
          console.error('Following component has two or more children with the same key attribute: "' + v + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w$1(e) + "\n\n" + f$2(e));
          break;
        }
        l.push(v);
      }
    }
    if (null != e.__c && null != e.__c.__H) {
      var b = e.__c.__H.__;
      if (b) for (var g = 0; g < b.length; g += 1) {
        var E = b[g];
        if (E.__H) for (var k = 0; k < E.__H.length; k++) if ((t = E.__H[k]) != t) {
          var _ = a$1(e);
          throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g + " in component " + _ + " was called with NaN.");
        }
      }
    }
  };
}();

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body {\n  font-family: \"Montserrat\", sans-serif;\n  background: #1e293b;\n  color: #f8fafc;\n}\n\n.styles-module_app__EH0ms {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem;\n  text-align: center;\n}\nheader h1 {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 768px) {\n  header h1 {\n    font-size: 3rem;\n  }\n}\nheader p {\n  color: #94a3b8;\n}\n\n.styles-module_tag-list__0HFlw {\n  width: 30rem;\n  max-width: 90vw;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  gap: 1rem 0;\n  position: relative;\n  padding: 1.5rem 0;\n  overflow: hidden;\n}\n\n.styles-module_loop-slider__8s3mm .styles-module_inner__HAH1n {\n  display: flex;\n  width: fit-content;\n  animation-name: styles-module_loop__MmbeS;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: var(--direction);\n  animation-duration: var(--duration);\n}\n\n.styles-module_tag__ljvG- {\n  display: flex;\n  align-items: center;\n  gap: 0 0.2rem;\n  color: #e2e8f0;\n  font-size: 0.9rem;\n  background-color: #334155;\n  border-radius: 0.4rem;\n  padding: 0.7rem 1rem;\n  margin-right: 1rem;\n  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem 1.5rem rgba(0, 0, 0, 0.4);\n}\n.styles-module_tag__ljvG- span {\n  font-size: 1.2rem;\n  color: #64748b;\n}\n\n.styles-module_fade__W-Ig- {\n  pointer-events: none;\n  background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);\n  position: absolute;\n  inset: 0;\n}\n\n@keyframes styles-module_loop__MmbeS {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}";
var styles = {"app":"styles-module_app__EH0ms","tag-list":"styles-module_tag-list__0HFlw","loop-slider":"styles-module_loop-slider__8s3mm","inner":"styles-module_inner__HAH1n","loop":"styles-module_loop__MmbeS","tag":"styles-module_tag__ljvG-","fade":"styles-module_fade__W-Ig-"};
styleInject(css_248z);

var r,
  u$1,
  i,
  f$1 = [],
  c = [],
  e = l$2,
  a = e.__b,
  v = e.__r,
  l = e.diffed,
  m = e.__c,
  s = e.unmount,
  d = e.__;
function j() {
  for (var n; n = f$1.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z$1), n.__H.__h.forEach(B$1), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], e.__e(t, n.__v);
  }
}
e.__b = function (n) {
  r = null, a && a(n);
}, e.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), d && d(n, t);
}, e.__r = function (n) {
  v && v(n);
  var i = (r = n.__c).__H;
  i && (u$1 === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(z$1), i.__h.forEach(B$1), i.__h = [], 0)), u$1 = r;
}, e.diffed = function (n) {
  l && l(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f$1.push(t) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u$1 = r = null;
}, e.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z$1), n.__h = n.__h.filter(function (n) {
        return !n.__ || B$1(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], e.__e(r, n.__v);
    }
  }), m && m(n, t);
}, e.unmount = function (n) {
  s && s(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z$1(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && e.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function () {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z$1(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B$1(n) {
  var t = r;
  n.__c = n.__(), r = t;
}

function S(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  this.props = n, this.context = t;
}
(E.prototype = new k$1()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var x = l$2.__b;
l$2.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var M = l$2.__e;
l$2.__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  M(n, t, e, r);
};
var O = l$2.unmount;
function T(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = S({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return T(n, t, e);
  })), n;
}
function F(n, t, e) {
  return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return F(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
}
function I() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function D() {
  this.u = null, this.o = null;
}
l$2.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), O && O(n);
}, (I.prototype = new k$1()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = L(r.__v),
    o = !1,
    i = function () {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function () {
    if (! --r.__u) {
      if (r.state.__a) {
        var n = r.state.__a;
        r.__v.__k[0] = F(n, n.__c.__P, n.__c.__O);
      }
      var t;
      for (r.setState({
        __a: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, I.prototype.componentWillUnmount = function () {
  this.t = [];
}, I.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = T(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && g(w$2, null, n.fallback);
  return i && (i.__u &= -33), [g(w$2, null, e.__a ? null : n.children), i];
};
var V = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
(D.prototype = new k$1()).__a = function (n) {
  var t = this,
    e = L(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), V(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, D.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = T$1(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    V(n, e, t);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  H = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Z = /[A-Z0-9]/g,
  Y = "undefined" != typeof document,
  $ = function (n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
k$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(k$1.prototype, t, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var J = l$2.event;
function K() {}
function Q() {
  return this.cancelBubble;
}
function X() {
  return this.defaultPrevented;
}
l$2.event = function (n) {
  return J && (n = J(n)), n.persist = K, n.isPropagationStopped = Q, n.isDefaultPrevented = X, n.nativeEvent = n;
};
var tn = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    }
  },
  en = l$2.vnode;
l$2.vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {};
    for (var o in t) {
      var i = t[o];
      if (!("value" === o && "defaultValue" in t && null == i || Y && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
        var l = o.toLowerCase();
        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "translate" === l && "no" === i ? i = !1 : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || $(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : H.test(o) ? o = l : -1 === e.indexOf("-") && B.test(o) ? o = o.replace(Z, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = T$1(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = T$1(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", tn)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = z, en && en(n);
};
var rn = l$2.__r;
l$2.__r = function (n) {
  rn && rn(n), n.__c;
};
var un = l$2.diffed;
l$2.diffed = function (n) {
  un && un(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value);
};

var f = 0;
function u(e, t, n, o, i, u) {
  var a,
    c,
    p = {};
  for (c in t) "ref" == c ? a = t[c] : p[c] = t[c];
  var l = {
    type: e,
    props: p,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --f,
    __i: -1,
    __u: 0,
    __source: i,
    __self: u
  };
  if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
  return l$2.vnode && l$2.vnode(l), l;
}

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

/**
 * @param {number} min 
 * @param {number} max 
 */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * @param {unknown[]} arr 
 */
const shuffle = arr => [...arr].sort(() => .5 - Math.random());
const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false
}) => {
  return /*#__PURE__*/u("div", {
    class: styles['loop-slider'],
    style: {
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    },
    children: /*#__PURE__*/u("div", {
      class: styles['inner'],
      children: [children, children]
    })
  });
};
const Tag = ({
  text
}) => /*#__PURE__*/u("div", {
  class: styles['tag'],
  children: [/*#__PURE__*/u("span", {
    children: "#"
  }), " ", text]
});

/**
 * @credit https://codepen.io/ykadosh/pen/KKezJzz
 */
const App = () => /*#__PURE__*/u("div", {
  class: styles['app'],
  children: [/*#__PURE__*/u("header", {
    children: [/*#__PURE__*/u("h1", {
      children: "Infinite Scroll Animation"
    }), /*#__PURE__*/u("p", {
      children: "CSS only, content independent, bi-directional, customizable"
    })]
  }), /*#__PURE__*/u("div", {
    class: styles['tag-list'],
    children: [[...new Array(ROWS)].map((_, i) => /*#__PURE__*/u(InfiniteLoopSlider, {
      duration: random(DURATION - 5000, DURATION + 5000),
      reverse: i % 2,
      children: shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => /*#__PURE__*/u(Tag, {
        text: tag
      }, tag))
    }, i)), /*#__PURE__*/u("div", {
      class: styles['fade']
    })]
  })]
});

class ClockWidget extends widget_js.widget {
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
  }
  render(parent, nextSibling) {
    if (!$tw.browser) {
      return;
    }
    D$1( /*#__PURE__*/u(App, {}), parent);
  }
}

exports["clock-widget"] = ClockWidget;
