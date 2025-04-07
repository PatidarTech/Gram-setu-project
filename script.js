(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
var Bu = {
    exports: {}
}
  , tl = {}
  , Wu = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn = Symbol.for("react.element")
  , rc = Symbol.for("react.portal")
  , lc = Symbol.for("react.fragment")
  , ic = Symbol.for("react.strict_mode")
  , oc = Symbol.for("react.profiler")
  , uc = Symbol.for("react.provider")
  , sc = Symbol.for("react.context")
  , ac = Symbol.for("react.forward_ref")
  , cc = Symbol.for("react.suspense")
  , dc = Symbol.for("react.memo")
  , fc = Symbol.for("react.lazy")
  , Oo = Symbol.iterator;
function pc(e) {
    return e === null || typeof e != "object" ? null : (e = Oo && e[Oo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Qu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ku = Object.assign
  , Yu = {};
function on(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yu,
    this.updater = n || Qu
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Gu() {}
Gu.prototype = on.prototype;
function Ui(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yu,
    this.updater = n || Qu
}
var $i = Ui.prototype = new Gu;
$i.constructor = Ui;
Ku($i, on.prototype);
$i.isPureReactComponent = !0;
var Do = Array.isArray
  , Xu = Object.prototype.hasOwnProperty
  , Ai = {
    current: null
}
  , Zu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ju(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Xu.call(t, r) && !Zu.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++)
            s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Xn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Ai.current
    }
}
function mc(e, t) {
    return {
        $$typeof: Xn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Hi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn
}
function hc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Io = /\/+/g;
function wl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hc("" + e.key) : t.toString(36)
}
function xr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xn:
            case rc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + wl(o, 0) : r,
        Do(l) ? (n = "",
        e != null && (n = e.replace(Io, "$&/") + "/"),
        xr(l, t, n, "", function(c) {
            return c
        })) : l != null && (Hi(l) && (l = mc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Io, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Do(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + wl(i, u);
            o += xr(i, t, n, s, l)
        }
    else if (s = pc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + wl(i, u++),
            o += xr(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function nr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return xr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function vc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var se = {
    current: null
}
  , wr = {
    transition: null
}
  , yc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Ai
};
function qu() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Hi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = lc;
L.Profiler = oc;
L.PureComponent = Ui;
L.StrictMode = ic;
L.Suspense = cc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
L.act = qu;
L.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ku({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Ai.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            Xu.call(t, s) && !Zu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++)
            u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: Xn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
L.createContext = function(e) {
    return e = {
        $$typeof: sc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: uc,
        _context: e
    },
    e.Consumer = e
}
;
L.createElement = Ju;
L.createFactory = function(e) {
    var t = Ju.bind(null, e);
    return t.type = e,
    t
}
;
L.createRef = function() {
    return {
        current: null
    }
}
;
L.forwardRef = function(e) {
    return {
        $$typeof: ac,
        render: e
    }
}
;
L.isValidElement = Hi;
L.lazy = function(e) {
    return {
        $$typeof: fc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: vc
    }
}
;
L.memo = function(e, t) {
    return {
        $$typeof: dc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
L.startTransition = function(e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e()
    } finally {
        wr.transition = t
    }
}
;
L.unstable_act = qu;
L.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
}
;
L.useContext = function(e) {
    return se.current.useContext(e)
}
;
L.useDebugValue = function() {}
;
L.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
}
;
L.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
}
;
L.useId = function() {
    return se.current.useId()
}
;
L.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
;
L.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
}
;
L.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
}
;
L.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
}
;
L.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
}
;
L.useRef = function(e) {
    return se.current.useRef(e)
}
;
L.useState = function(e) {
    return se.current.useState(e)
}
;
L.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
;
L.useTransition = function() {
    return se.current.useTransition()
}
;
L.version = "18.3.1";
Wu.exports = L;
var rt = Wu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc = rt
  , xc = Symbol.for("react.element")
  , wc = Symbol.for("react.fragment")
  , kc = Object.prototype.hasOwnProperty
  , Sc = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Nc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function bu(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        kc.call(t, r) && !Nc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: xc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Sc.current
    }
}
tl.Fragment = wc;
tl.jsx = bu;
tl.jsxs = bu;
Bu.exports = tl;
var d = Bu.exports
  , es = {
    exports: {}
}
  , xe = {}
  , ts = {
    exports: {}
}
  , ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var z = E.length;
        E.push(P);
        e: for (; 0 < z; ) {
            var W = z - 1 >>> 1
              , X = E[W];
            if (0 < l(X, P))
                E[W] = P,
                E[z] = X,
                z = W;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var P = E[0]
          , z = E.pop();
        if (z !== P) {
            E[0] = z;
            e: for (var W = 0, X = E.length, er = X >>> 1; W < er; ) {
                var yt = 2 * (W + 1) - 1
                  , xl = E[yt]
                  , gt = yt + 1
                  , tr = E[gt];
                if (0 > l(xl, z))
                    gt < X && 0 > l(tr, xl) ? (E[W] = tr,
                    E[gt] = z,
                    W = gt) : (E[W] = xl,
                    E[yt] = z,
                    W = yt);
                else if (gt < X && 0 > l(tr, z))
                    E[W] = tr,
                    E[gt] = z,
                    W = gt;
                else
                    break e
            }
        }
        return P
    }
    function l(E, P) {
        var z = E.sortIndex - P.sortIndex;
        return z !== 0 ? z : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = []
      , c = []
      , v = 1
      , h = null
      , m = 3
      , x = !1
      , w = !1
      , k = !1
      , F = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(E) {
        for (var P = n(c); P !== null; ) {
            if (P.callback === null)
                r(c);
            else if (P.startTime <= E)
                r(c),
                P.sortIndex = P.expirationTime,
                t(s, P);
            else
                break;
            P = n(c)
        }
    }
    function y(E) {
        if (k = !1,
        p(E),
        !w)
            if (n(s) !== null)
                w = !0,
                yl(N);
            else {
                var P = n(c);
                P !== null && gl(y, P.startTime - E)
            }
    }
    function N(E, P) {
        w = !1,
        k && (k = !1,
        f(_),
        _ = -1),
        x = !0;
        var z = m;
        try {
            for (p(P),
            h = n(s); h !== null && (!(h.expirationTime > P) || E && !_e()); ) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var X = W(h.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof X == "function" ? h.callback = X : h === n(s) && r(s),
                    p(P)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var er = !0;
            else {
                var yt = n(c);
                yt !== null && gl(y, yt.startTime - P),
                er = !1
            }
            return er
        } finally {
            h = null,
            m = z,
            x = !1
        }
    }
    var C = !1
      , j = null
      , _ = -1
      , B = 5
      , T = -1;
    function _e() {
        return !(e.unstable_now() - T < B)
    }
    function an() {
        if (j !== null) {
            var E = e.unstable_now();
            T = E;
            var P = !0;
            try {
                P = j(!0, E)
            } finally {
                P ? cn() : (C = !1,
                j = null)
            }
        } else
            C = !1
    }
    var cn;
    if (typeof a == "function")
        cn = function() {
            a(an)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ro = new MessageChannel
          , nc = Ro.port2;
        Ro.port1.onmessage = an,
        cn = function() {
            nc.postMessage(null)
        }
    } else
        cn = function() {
            F(an, 0)
        }
        ;
    function yl(E) {
        j = E,
        C || (C = !0,
        cn())
    }
    function gl(E, P) {
        _ = F(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        yl(N))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(E) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = m
        }
        var z = m;
        m = P;
        try {
            return E()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, P) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var z = m;
        m = E;
        try {
            return P()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, P, z) {
        var W = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? W + z : W) : z = W,
        E) {
        case 1:
            var X = -1;
            break;
        case 2:
            X = 250;
            break;
        case 5:
            X = 1073741823;
            break;
        case 4:
            X = 1e4;
            break;
        default:
            X = 5e3
        }
        return X = z + X,
        E = {
            id: v++,
            callback: P,
            priorityLevel: E,
            startTime: z,
            expirationTime: X,
            sortIndex: -1
        },
        z > W ? (E.sortIndex = z,
        t(c, E),
        n(s) === null && E === n(c) && (k ? (f(_),
        _ = -1) : k = !0,
        gl(y, z - W))) : (E.sortIndex = X,
        t(s, E),
        w || x || (w = !0,
        yl(N))),
        E
    }
    ,
    e.unstable_shouldYield = _e,
    e.unstable_wrapCallback = function(E) {
        var P = m;
        return function() {
            var z = m;
            m = P;
            try {
                return E.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
}
)(ns);
ts.exports = ns;
var Ec = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc = rt
  , ge = Ec;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var rs = new Set
  , Mn = {};
function Tt(e, t) {
    qt(e, t),
    qt(e + "Capture", t)
}
function qt(e, t) {
    for (Mn[e] = t,
    e = 0; e < t.length; e++)
        rs.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Kl = Object.prototype.hasOwnProperty
  , jc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Fo = {}
  , Uo = {};
function _c(e) {
    return Kl.call(Uo, e) ? !0 : Kl.call(Fo, e) ? !1 : jc.test(e) ? Uo[e] = !0 : (Fo[e] = !0,
    !1)
}
function Pc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function zc(e, t, n, r) {
    if (t === null || typeof t > "u" || Pc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Vi = /[\-:]([a-z])/g;
function Bi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Vi, Bi);
    te[t] = new ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Vi, Bi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Vi, Bi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
te.xlinkHref = new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zc(t, n, l, r) && (n = null),
    r || l === null ? _c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , rr = Symbol.for("react.element")
  , Ot = Symbol.for("react.portal")
  , Dt = Symbol.for("react.fragment")
  , Qi = Symbol.for("react.strict_mode")
  , Yl = Symbol.for("react.profiler")
  , ls = Symbol.for("react.provider")
  , is = Symbol.for("react.context")
  , Ki = Symbol.for("react.forward_ref")
  , Gl = Symbol.for("react.suspense")
  , Xl = Symbol.for("react.suspense_list")
  , Yi = Symbol.for("react.memo")
  , Je = Symbol.for("react.lazy")
  , os = Symbol.for("react.offscreen")
  , $o = Symbol.iterator;
function dn(e) {
    return e === null || typeof e != "object" ? null : (e = $o && e[$o] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var H = Object.assign, kl;
function xn(e) {
    if (kl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            kl = t && t[1] || ""
        }
    return `
` + kl + e
}
var Sl = !1;
function Nl(e, t) {
    if (!e || Sl)
        return "";
    Sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Sl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}
function Lc(e) {
    switch (e.tag) {
    case 5:
        return xn(e.type);
    case 16:
        return xn("Lazy");
    case 13:
        return xn("Suspense");
    case 19:
        return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Nl(e.type, !1),
        e;
    case 11:
        return e = Nl(e.type.render, !1),
        e;
    case 1:
        return e = Nl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Dt:
        return "Fragment";
    case Ot:
        return "Portal";
    case Yl:
        return "Profiler";
    case Qi:
        return "StrictMode";
    case Gl:
        return "Suspense";
    case Xl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case is:
            return (e.displayName || "Context") + ".Consumer";
        case ls:
            return (e._context.displayName || "Context") + ".Provider";
        case Ki:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Yi:
            return t = e.displayName || null,
            t !== null ? t : Zl(e.type) || "Memo";
        case Je:
            t = e._payload,
            e = e._init;
            try {
                return Zl(e(t))
            } catch {}
        }
    return null
}
function Tc(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zl(t);
    case 8:
        return t === Qi ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function us(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Mc(e) {
    var t = us(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function lr(e) {
    e._valueTracker || (e._valueTracker = Mc(e))
}
function ss(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = us(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Jl(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ao(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function as(e, t) {
    t = t.checked,
    t != null && Wi(e, "checked", t, !1)
}
function ql(e, t) {
    as(e, t);
    var n = ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? bl(e, t.type, n) : t.hasOwnProperty("defaultValue") && bl(e, t.type, ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ho(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function bl(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;
function Kt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ei(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(g(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Vo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(g(92));
            if (wn(n)) {
                if (1 < n.length)
                    throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}
function cs(e, t) {
    var n = ft(t.value)
      , r = ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ds(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ti(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ir, fs = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ir = ir || document.createElement("div"),
        ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ir.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Rn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Rc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Rc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Nn[t] = Nn[e]
    })
});
function ps(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}
function ms(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = ps(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Oc = H({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ni(e, t) {
    if (t) {
        if (Oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(g(62))
    }
}
function ri(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var li = null;
function Gi(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ii = null
  , Yt = null
  , Gt = null;
function Wo(e) {
    if (e = qn(e)) {
        if (typeof ii != "function")
            throw Error(g(280));
        var t = e.stateNode;
        t && (t = ol(t),
        ii(e.stateNode, e.type, t))
    }
}
function hs(e) {
    Yt ? Gt ? Gt.push(e) : Gt = [e] : Yt = e
}
function vs() {
    if (Yt) {
        var e = Yt
          , t = Gt;
        if (Gt = Yt = null,
        Wo(e),
        t)
            for (e = 0; e < t.length; e++)
                Wo(t[e])
    }
}
function ys(e, t) {
    return e(t)
}
function gs() {}
var El = !1;
function xs(e, t, n) {
    if (El)
        return e(t, n);
    El = !0;
    try {
        return ys(e, t, n)
    } finally {
        El = !1,
        (Yt !== null || Gt !== null) && (gs(),
        vs())
    }
}
function On(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ol(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(g(231, t, typeof n));
    return n
}
var oi = !1;
if (Qe)
    try {
        var fn = {};
        Object.defineProperty(fn, "passive", {
            get: function() {
                oi = !0
            }
        }),
        window.addEventListener("test", fn, fn),
        window.removeEventListener("test", fn, fn)
    } catch {
        oi = !1
    }
function Dc(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (v) {
        this.onError(v)
    }
}
var En = !1
  , Mr = null
  , Rr = !1
  , ui = null
  , Ic = {
    onError: function(e) {
        En = !0,
        Mr = e
    }
};
function Fc(e, t, n, r, l, i, o, u, s) {
    En = !1,
    Mr = null,
    Dc.apply(Ic, arguments)
}
function Uc(e, t, n, r, l, i, o, u, s) {
    if (Fc.apply(this, arguments),
    En) {
        if (En) {
            var c = Mr;
            En = !1,
            Mr = null
        } else
            throw Error(g(198));
        Rr || (Rr = !0,
        ui = c)
    }
}
function Mt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ws(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Qo(e) {
    if (Mt(e) !== e)
        throw Error(g(188))
}
function $c(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e),
        t === null)
            throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return Qo(l),
                    e;
                if (i === r)
                    return Qo(l),
                    t;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(g(189))
            }
        }
        if (n.alternate !== r)
            throw Error(g(190))
    }
    if (n.tag !== 3)
        throw Error(g(188));
    return n.stateNode.current === n ? e : t
}
function ks(e) {
    return e = $c(e),
    e !== null ? Ss(e) : null
}
function Ss(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ss(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ns = ge.unstable_scheduleCallback
  , Ko = ge.unstable_cancelCallback
  , Ac = ge.unstable_shouldYield
  , Hc = ge.unstable_requestPaint
  , Q = ge.unstable_now
  , Vc = ge.unstable_getCurrentPriorityLevel
  , Xi = ge.unstable_ImmediatePriority
  , Es = ge.unstable_UserBlockingPriority
  , Or = ge.unstable_NormalPriority
  , Bc = ge.unstable_LowPriority
  , Cs = ge.unstable_IdlePriority
  , nl = null
  , Ue = null;
function Wc(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Yc
  , Qc = Math.log
  , Kc = Math.LN2;
function Yc(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Qc(e) / Kc | 0) | 0
}
var or = 64
  , ur = 4194304;
function kn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Dr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = kn(u) : (i &= o,
        i !== 0 && (r = kn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = kn(o) : i !== 0 && (r = kn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Me(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Gc(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Xc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Me(i)
          , u = 1 << o
          , s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = Gc(u, t)) : s <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function si(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function js() {
    var e = or;
    return or <<= 1,
    !(or & 4194240) && (or = 64),
    e
}
function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Me(t),
    e[t] = n
}
function Zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Me(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function Zi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Me(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var R = 0;
function _s(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ps, Ji, zs, Ls, Ts, ai = !1, sr = [], lt = null, it = null, ot = null, Dn = new Map, In = new Map, be = [], Jc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yo(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lt = null;
        break;
    case "dragenter":
    case "dragleave":
        it = null;
        break;
    case "mouseover":
    case "mouseout":
        ot = null;
        break;
    case "pointerover":
    case "pointerout":
        Dn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        In.delete(t.pointerId)
    }
}
function pn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = qn(t),
    t !== null && Ji(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function qc(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return lt = pn(lt, e, t, n, r, l),
        !0;
    case "dragenter":
        return it = pn(it, e, t, n, r, l),
        !0;
    case "mouseover":
        return ot = pn(ot, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Dn.set(i, pn(Dn.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        In.set(i, pn(In.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function Ms(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ws(n),
                t !== null) {
                    e.blockedOn = t,
                    Ts(e.priority, function() {
                        zs(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function kr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            li = r,
            n.target.dispatchEvent(r),
            li = null
        } else
            return t = qn(n),
            t !== null && Ji(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Go(e, t, n) {
    kr(e) && n.delete(t)
}
function bc() {
    ai = !1,
    lt !== null && kr(lt) && (lt = null),
    it !== null && kr(it) && (it = null),
    ot !== null && kr(ot) && (ot = null),
    Dn.forEach(Go),
    In.forEach(Go)
}
function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ai || (ai = !0,
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, bc)))
}
function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < sr.length) {
        mn(sr[0], e);
        for (var n = 1; n < sr.length; n++) {
            var r = sr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && mn(lt, e),
    it !== null && mn(it, e),
    ot !== null && mn(ot, e),
    Dn.forEach(t),
    In.forEach(t),
    n = 0; n < be.length; n++)
        r = be[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < be.length && (n = be[0],
    n.blockedOn === null); )
        Ms(n),
        n.blockedOn === null && be.shift()
}
var Xt = Xe.ReactCurrentBatchConfig
  , Ir = !0;
function ed(e, t, n, r) {
    var l = R
      , i = Xt.transition;
    Xt.transition = null;
    try {
        R = 1,
        qi(e, t, n, r)
    } finally {
        R = l,
        Xt.transition = i
    }
}
function td(e, t, n, r) {
    var l = R
      , i = Xt.transition;
    Xt.transition = null;
    try {
        R = 4,
        qi(e, t, n, r)
    } finally {
        R = l,
        Xt.transition = i
    }
}
function qi(e, t, n, r) {
    if (Ir) {
        var l = ci(e, t, n, r);
        if (l === null)
            Dl(e, t, r, Fr, n),
            Yo(e, r);
        else if (qc(l, e, t, n, r))
            r.stopPropagation();
        else if (Yo(e, r),
        t & 4 && -1 < Jc.indexOf(e)) {
            for (; l !== null; ) {
                var i = qn(l);
                if (i !== null && Ps(i),
                i = ci(e, t, n, r),
                i === null && Dl(e, t, r, Fr, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Dl(e, t, r, null, n)
    }
}
var Fr = null;
function ci(e, t, n, r) {
    if (Fr = null,
    e = Gi(r),
    e = kt(e),
    e !== null)
        if (t = Mt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ws(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fr = e,
    null
}
function Rs(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Vc()) {
        case Xi:
            return 1;
        case Es:
            return 4;
        case Or:
        case Bc:
            return 16;
        case Cs:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tt = null
  , bi = null
  , Sr = null;
function Os() {
    if (Sr)
        return Sr;
    var e, t = bi, n = t.length, r, l = "value"in tt ? tt.value : tt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Nr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ar() {
    return !0
}
function Xo() {
    return !1
}
function we(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ar : Xo,
        this.isPropagationStopped = Xo,
        this
    }
    return H(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }),
    t
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, eo = we(un), Jn = H({}, un, {
    view: 0,
    detail: 0
}), nd = we(Jn), jl, _l, hn, rl = H({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (jl = e.screenX - hn.screenX,
        _l = e.screenY - hn.screenY) : _l = jl = 0,
        hn = e),
        jl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : _l
    }
}), Zo = we(rl), rd = H({}, rl, {
    dataTransfer: 0
}), ld = we(rd), id = H({}, Jn, {
    relatedTarget: 0
}), Pl = we(id), od = H({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), ud = we(od), sd = H({}, un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), ad = we(sd), cd = H({}, un, {
    data: 0
}), Jo = we(cd), dd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, fd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, pd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function md(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = pd[e]) ? !!t[e] : !1
}
function to() {
    return md
}
var hd = H({}, Jn, {
    key: function(e) {
        if (e.key) {
            var t = dd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Nr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function(e) {
        return e.type === "keypress" ? Nr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , vd = we(hd)
  , yd = H({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , qo = we(yd)
  , gd = H({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to
})
  , xd = we(gd)
  , wd = H({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , kd = we(wd)
  , Sd = H({}, rl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Nd = we(Sd)
  , Ed = [9, 13, 27, 32]
  , no = Qe && "CompositionEvent"in window
  , Cn = null;
Qe && "documentMode"in document && (Cn = document.documentMode);
var Cd = Qe && "TextEvent"in window && !Cn
  , Ds = Qe && (!no || Cn && 8 < Cn && 11 >= Cn)
  , bo = " "
  , eu = !1;
function Is(e, t) {
    switch (e) {
    case "keyup":
        return Ed.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Fs(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var It = !1;
function jd(e, t) {
    switch (e) {
    case "compositionend":
        return Fs(t);
    case "keypress":
        return t.which !== 32 ? null : (eu = !0,
        bo);
    case "textInput":
        return e = t.data,
        e === bo && eu ? null : e;
    default:
        return null
    }
}
function _d(e, t) {
    if (It)
        return e === "compositionend" || !no && Is(e, t) ? (e = Os(),
        Sr = bi = tt = null,
        It = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ds && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Pd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Pd[e.type] : t === "textarea"
}
function Us(e, t, n, r) {
    hs(r),
    t = Ur(t, "onChange"),
    0 < t.length && (n = new eo("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var jn = null
  , Un = null;
function zd(e) {
    Xs(e, 0)
}
function ll(e) {
    var t = $t(e);
    if (ss(t))
        return e
}
function Ld(e, t) {
    if (e === "change")
        return t
}
var $s = !1;
if (Qe) {
    var zl;
    if (Qe) {
        var Ll = "oninput"in document;
        if (!Ll) {
            var nu = document.createElement("div");
            nu.setAttribute("oninput", "return;"),
            Ll = typeof nu.oninput == "function"
        }
        zl = Ll
    } else
        zl = !1;
    $s = zl && (!document.documentMode || 9 < document.documentMode)
}
function ru() {
    jn && (jn.detachEvent("onpropertychange", As),
    Un = jn = null)
}
function As(e) {
    if (e.propertyName === "value" && ll(Un)) {
        var t = [];
        Us(t, Un, e, Gi(e)),
        xs(zd, t)
    }
}
function Td(e, t, n) {
    e === "focusin" ? (ru(),
    jn = t,
    Un = n,
    jn.attachEvent("onpropertychange", As)) : e === "focusout" && ru()
}
function Md(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ll(Un)
}
function Rd(e, t) {
    if (e === "click")
        return ll(t)
}
function Od(e, t) {
    if (e === "input" || e === "change")
        return ll(t)
}
function Dd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Dd;
function $n(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Kl.call(t, l) || !Oe(e[l], t[l]))
            return !1
    }
    return !0
}
function lu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function iu(e, t) {
    var n = lu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = lu(n)
    }
}
function Hs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hs(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Vs() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Tr(e.document)
    }
    return t
}
function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Id(e) {
    var t = Vs()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Hs(n.ownerDocument.documentElement, n)) {
        if (r !== null && ro(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = iu(n, i);
                var o = iu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Fd = Qe && "documentMode"in document && 11 >= document.documentMode
  , Ft = null
  , di = null
  , _n = null
  , fi = !1;
function ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi || Ft == null || Ft !== Tr(r) || (r = Ft,
    "selectionStart"in r && ro(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    _n && $n(_n, r) || (_n = r,
    r = Ur(di, "onSelect"),
    0 < r.length && (t = new eo("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ft)))
}
function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ut = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd")
}
  , Tl = {}
  , Bs = {};
Qe && (Bs = document.createElement("div").style,
"AnimationEvent"in window || (delete Ut.animationend.animation,
delete Ut.animationiteration.animation,
delete Ut.animationstart.animation),
"TransitionEvent"in window || delete Ut.transitionend.transition);
function il(e) {
    if (Tl[e])
        return Tl[e];
    if (!Ut[e])
        return e;
    var t = Ut[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Bs)
            return Tl[e] = t[n];
    return e
}
var Ws = il("animationend")
  , Qs = il("animationiteration")
  , Ks = il("animationstart")
  , Ys = il("transitionend")
  , Gs = new Map
  , uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
    Gs.set(e, t),
    Tt(t, [e])
}
for (var Ml = 0; Ml < uu.length; Ml++) {
    var Rl = uu[Ml]
      , Ud = Rl.toLowerCase()
      , $d = Rl[0].toUpperCase() + Rl.slice(1);
    mt(Ud, "on" + $d)
}
mt(Ws, "onAnimationEnd");
mt(Qs, "onAnimationIteration");
mt(Ks, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Ys, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function su(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Uc(r, t, void 0, e),
    e.currentTarget = null
}
function Xs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , s = u.instance
                      , c = u.currentTarget;
                    if (u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    su(l, u, c),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    s = u.instance,
                    c = u.currentTarget,
                    u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    su(l, u, c),
                    i = s
                }
        }
    }
    if (Rr)
        throw e = ui,
        Rr = !1,
        ui = null,
        e
}
function D(e, t) {
    var n = t[yi];
    n === void 0 && (n = t[yi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Zs(t, e, 2, !1),
    n.add(r))
}
function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Zs(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
    if (!e[dr]) {
        e[dr] = !0,
        rs.forEach(function(n) {
            n !== "selectionchange" && (Ad.has(n) || Ol(n, !1, e),
            Ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0,
        Ol("selectionchange", !1, t))
    }
}
function Zs(e, t, n, r) {
    switch (Rs(t)) {
    case 1:
        var l = ed;
        break;
    case 4:
        l = td;
        break;
    default:
        l = qi
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Dl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = kt(u),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    xs(function() {
        var c = i
          , v = Gi(n)
          , h = [];
        e: {
            var m = Gs.get(e);
            if (m !== void 0) {
                var x = eo
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Nr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = vd;
                    break;
                case "focusin":
                    w = "focus",
                    x = Pl;
                    break;
                case "focusout":
                    w = "blur",
                    x = Pl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Pl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = Zo;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = ld;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = xd;
                    break;
                case Ws:
                case Qs:
                case Ks:
                    x = ud;
                    break;
                case Ys:
                    x = kd;
                    break;
                case "scroll":
                    x = nd;
                    break;
                case "wheel":
                    x = Nd;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = ad;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = qo
                }
                var k = (t & 4) !== 0
                  , F = !k && e === "scroll"
                  , f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var a = c, p; a !== null; ) {
                    p = a;
                    var y = p.stateNode;
                    if (p.tag === 5 && y !== null && (p = y,
                    f !== null && (y = On(a, f),
                    y != null && k.push(Hn(a, y, p)))),
                    F)
                        break;
                    a = a.return
                }
                0 < k.length && (m = new x(m,w,null,n,v),
                h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== li && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ke]))
                    break e;
                if ((x || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = c,
                w = w ? kt(w) : null,
                w !== null && (F = Mt(w),
                w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = c),
                x !== w)) {
                    if (k = Zo,
                    y = "onMouseLeave",
                    f = "onMouseEnter",
                    a = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = qo,
                    y = "onPointerLeave",
                    f = "onPointerEnter",
                    a = "pointer"),
                    F = x == null ? m : $t(x),
                    p = w == null ? m : $t(w),
                    m = new k(y,a + "leave",x,n,v),
                    m.target = F,
                    m.relatedTarget = p,
                    y = null,
                    kt(v) === c && (k = new k(f,a + "enter",w,n,v),
                    k.target = p,
                    k.relatedTarget = F,
                    y = k),
                    F = y,
                    x && w)
                        t: {
                            for (k = x,
                            f = w,
                            a = 0,
                            p = k; p; p = Rt(p))
                                a++;
                            for (p = 0,
                            y = f; y; y = Rt(y))
                                p++;
                            for (; 0 < a - p; )
                                k = Rt(k),
                                a--;
                            for (; 0 < p - a; )
                                f = Rt(f),
                                p--;
                            for (; a--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = Rt(k),
                                f = Rt(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && au(h, m, x, k, !1),
                    w !== null && F !== null && au(h, F, w, k, !0)
                }
            }
            e: {
                if (m = c ? $t(c) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var N = Ld;
                else if (tu(m))
                    if ($s)
                        N = Od;
                    else {
                        N = Md;
                        var C = Td
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Rd);
                if (N && (N = N(e, c))) {
                    Us(h, N, n, v);
                    break e
                }
                C && C(e, m, c),
                e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && bl(m, "number", m.value)
            }
            switch (C = c ? $t(c) : window,
            e) {
            case "focusin":
                (tu(C) || C.contentEditable === "true") && (Ft = C,
                di = c,
                _n = null);
                break;
            case "focusout":
                _n = di = Ft = null;
                break;
            case "mousedown":
                fi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                fi = !1,
                ou(h, n, v);
                break;
            case "selectionchange":
                if (Fd)
                    break;
            case "keydown":
            case "keyup":
                ou(h, n, v)
            }
            var j;
            if (no)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                It ? Is(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Ds && n.locale !== "ko" && (It || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && It && (j = Os()) : (tt = v,
            bi = "value"in tt ? tt.value : tt.textContent,
            It = !0)),
            C = Ur(c, _),
            0 < C.length && (_ = new Jo(_,e,null,n,v),
            h.push({
                event: _,
                listeners: C
            }),
            j ? _.data = j : (j = Fs(n),
            j !== null && (_.data = j)))),
            (j = Cd ? jd(e, n) : _d(e, n)) && (c = Ur(c, "onBeforeInput"),
            0 < c.length && (v = new Jo("onBeforeInput","beforeinput",null,n,v),
            h.push({
                event: v,
                listeners: c
            }),
            v.data = j))
        }
        Xs(h, t)
    })
}
function Hn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ur(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = On(e, n),
        i != null && r.unshift(Hn(e, i, l)),
        i = On(e, t),
        i != null && r.push(Hn(e, i, l))),
        e = e.return
    }
    return r
}
function Rt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function au(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , c = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && c !== null && (u = c,
        l ? (s = On(n, i),
        s != null && o.unshift(Hn(n, s, u))) : l || (s = On(n, i),
        s != null && o.push(Hn(n, s, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Hd = /\r\n?/g
  , Vd = /\u0000|\uFFFD/g;
function cu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hd, `
`).replace(Vd, "")
}
function fr(e, t, n) {
    if (t = cu(t),
    cu(e) !== t && n)
        throw Error(g(425))
}
function $r() {}
var pi = null
  , mi = null;
function hi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0
  , Bd = typeof clearTimeout == "function" ? clearTimeout : void 0
  , du = typeof Promise == "function" ? Promise : void 0
  , Wd = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
    return du.resolve(null).then(e).catch(Qd)
}
: vi;
function Qd(e) {
    setTimeout(function() {
        throw e
    })
}
function Il(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Fn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}
function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function fu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var sn = Math.random().toString(36).slice(2)
  , Fe = "__reactFiber$" + sn
  , Vn = "__reactProps$" + sn
  , Ke = "__reactContainer$" + sn
  , yi = "__reactEvents$" + sn
  , Kd = "__reactListeners$" + sn
  , Yd = "__reactHandles$" + sn;
function kt(e) {
    var t = e[Fe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ke] || n[Fe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = fu(e); e !== null; ) {
                    if (n = e[Fe])
                        return n;
                    e = fu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qn(e) {
    return e = e[Fe] || e[Ke],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function $t(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(g(33))
}
function ol(e) {
    return e[Vn] || null
}
var gi = []
  , At = -1;
function ht(e) {
    return {
        current: e
    }
}
function I(e) {
    0 > At || (e.current = gi[At],
    gi[At] = null,
    At--)
}
function O(e, t) {
    At++,
    gi[At] = e.current,
    e.current = t
}
var pt = {}
  , ie = ht(pt)
  , fe = ht(!1)
  , jt = pt;
function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function pe(e) {
    return e = e.childContextTypes,
    e != null
}
function Ar() {
    I(fe),
    I(ie)
}
function pu(e, t, n) {
    if (ie.current !== pt)
        throw Error(g(168));
    O(ie, t),
    O(fe, n)
}
function Js(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(g(108, Tc(e) || "Unknown", l));
    return H({}, n, r)
}
function Hr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt,
    jt = ie.current,
    O(ie, e),
    O(fe, fe.current),
    !0
}
function mu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(g(169));
    n ? (e = Js(e, t, jt),
    r.__reactInternalMemoizedMergedChildContext = e,
    I(fe),
    I(ie),
    O(ie, e)) : I(fe),
    O(fe, n)
}
var He = null
  , ul = !1
  , Fl = !1;
function qs(e) {
    He === null ? He = [e] : He.push(e)
}
function Gd(e) {
    ul = !0,
    qs(e)
}
function vt() {
    if (!Fl && He !== null) {
        Fl = !0;
        var e = 0
          , t = R;
        try {
            var n = He;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            He = null,
            ul = !1
        } catch (l) {
            throw He !== null && (He = He.slice(e + 1)),
            Ns(Xi, vt),
            l
        } finally {
            R = t,
            Fl = !1
        }
    }
    return null
}
var Ht = []
  , Vt = 0
  , Vr = null
  , Br = 0
  , ke = []
  , Se = 0
  , _t = null
  , Ve = 1
  , Be = "";
function xt(e, t) {
    Ht[Vt++] = Br,
    Ht[Vt++] = Vr,
    Vr = e,
    Br = t
}
function bs(e, t, n) {
    ke[Se++] = Ve,
    ke[Se++] = Be,
    ke[Se++] = _t,
    _t = e;
    var r = Ve;
    e = Be;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Me(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Ve = 1 << 32 - Me(t) + l | n << l | r,
        Be = i + e
    } else
        Ve = 1 << i | n << l | r,
        Be = e
}
function lo(e) {
    e.return !== null && (xt(e, 1),
    bs(e, 1, 0))
}
function io(e) {
    for (; e === Vr; )
        Vr = Ht[--Vt],
        Ht[Vt] = null,
        Br = Ht[--Vt],
        Ht[Vt] = null;
    for (; e === _t; )
        _t = ke[--Se],
        ke[Se] = null,
        Be = ke[--Se],
        ke[Se] = null,
        Ve = ke[--Se],
        ke[Se] = null
}
var ye = null
  , ve = null
  , U = !1
  , Te = null;
function ea(e, t) {
    var n = Ne(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function hu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = ut(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = _t !== null ? {
            id: Ve,
            overflow: Be
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ne(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ye = e,
        ve = null,
        !0) : !1;
    default:
        return !1
    }
}
function xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wi(e) {
    if (U) {
        var t = ve;
        if (t) {
            var n = t;
            if (!hu(e, t)) {
                if (xi(e))
                    throw Error(g(418));
                t = ut(n.nextSibling);
                var r = ye;
                t && hu(e, t) ? ea(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                ye = e)
            }
        } else {
            if (xi(e))
                throw Error(g(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            ye = e
        }
    }
}
function vu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ye = e
}
function pr(e) {
    if (e !== ye)
        return !1;
    if (!U)
        return vu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps)),
    t && (t = ve)) {
        if (xi(e))
            throw ta(),
            Error(g(418));
        for (; t; )
            ea(e, t),
            t = ut(t.nextSibling)
    }
    if (vu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(g(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = ye ? ut(e.stateNode.nextSibling) : null;
    return !0
}
function ta() {
    for (var e = ve; e; )
        e = ut(e.nextSibling)
}
function en() {
    ve = ye = null,
    U = !1
}
function oo(e) {
    Te === null ? Te = [e] : Te.push(e)
}
var Xd = Xe.ReactCurrentBatchConfig;
function vn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(g(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(g(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(g(284));
        if (!n._owner)
            throw Error(g(290, e))
    }
    return e
}
function mr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function yu(e) {
    var t = e._init;
    return t(e._payload)
}
function na(e) {
    function t(f, a) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [a],
            f.flags |= 16) : p.push(a)
        }
    }
    function n(f, a) {
        if (!e)
            return null;
        for (; a !== null; )
            t(f, a),
            a = a.sibling;
        return null
    }
    function r(f, a) {
        for (f = new Map; a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
            a = a.sibling;
        return f
    }
    function l(f, a) {
        return f = dt(f, a),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, a, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < a ? (f.flags |= 2,
        a) : p) : (f.flags |= 2,
        a)) : (f.flags |= 1048576,
        a)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, a, p, y) {
        return a === null || a.tag !== 6 ? (a = Wl(p, f.mode, y),
        a.return = f,
        a) : (a = l(a, p),
        a.return = f,
        a)
    }
    function s(f, a, p, y) {
        var N = p.type;
        return N === Dt ? v(f, a, p.props.children, y, p.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && yu(N) === a.type) ? (y = l(a, p.props),
        y.ref = vn(f, a, p),
        y.return = f,
        y) : (y = Lr(p.type, p.key, p.props, null, f.mode, y),
        y.ref = vn(f, a, p),
        y.return = f,
        y)
    }
    function c(f, a, p, y) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = Ql(p, f.mode, y),
        a.return = f,
        a) : (a = l(a, p.children || []),
        a.return = f,
        a)
    }
    function v(f, a, p, y, N) {
        return a === null || a.tag !== 7 ? (a = Ct(p, f.mode, y, N),
        a.return = f,
        a) : (a = l(a, p),
        a.return = f,
        a)
    }
    function h(f, a, p) {
        if (typeof a == "string" && a !== "" || typeof a == "number")
            return a = Wl("" + a, f.mode, p),
            a.return = f,
            a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
            case rr:
                return p = Lr(a.type, a.key, a.props, null, f.mode, p),
                p.ref = vn(f, null, a),
                p.return = f,
                p;
            case Ot:
                return a = Ql(a, f.mode, p),
                a.return = f,
                a;
            case Je:
                var y = a._init;
                return h(f, y(a._payload), p)
            }
            if (wn(a) || dn(a))
                return a = Ct(a, f.mode, p, null),
                a.return = f,
                a;
            mr(f, a)
        }
        return null
    }
    function m(f, a, p, y) {
        var N = a !== null ? a.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return N !== null ? null : u(f, a, "" + p, y);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                return p.key === N ? s(f, a, p, y) : null;
            case Ot:
                return p.key === N ? c(f, a, p, y) : null;
            case Je:
                return N = p._init,
                m(f, a, N(p._payload), y)
            }
            if (wn(p) || dn(p))
                return N !== null ? null : v(f, a, p, y, null);
            mr(f, p)
        }
        return null
    }
    function x(f, a, p, y, N) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return f = f.get(p) || null,
            u(a, f, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case rr:
                return f = f.get(y.key === null ? p : y.key) || null,
                s(a, f, y, N);
            case Ot:
                return f = f.get(y.key === null ? p : y.key) || null,
                c(a, f, y, N);
            case Je:
                var C = y._init;
                return x(f, a, p, C(y._payload), N)
            }
            if (wn(y) || dn(y))
                return f = f.get(p) || null,
                v(a, f, y, N, null);
            mr(a, y)
        }
        return null
    }
    function w(f, a, p, y) {
        for (var N = null, C = null, j = a, _ = a = 0, B = null; j !== null && _ < p.length; _++) {
            j.index > _ ? (B = j,
            j = null) : B = j.sibling;
            var T = m(f, j, p[_], y);
            if (T === null) {
                j === null && (j = B);
                break
            }
            e && j && T.alternate === null && t(f, j),
            a = i(T, a, _),
            C === null ? N = T : C.sibling = T,
            C = T,
            j = B
        }
        if (_ === p.length)
            return n(f, j),
            U && xt(f, _),
            N;
        if (j === null) {
            for (; _ < p.length; _++)
                j = h(f, p[_], y),
                j !== null && (a = i(j, a, _),
                C === null ? N = j : C.sibling = j,
                C = j);
            return U && xt(f, _),
            N
        }
        for (j = r(f, j); _ < p.length; _++)
            B = x(j, f, _, p[_], y),
            B !== null && (e && B.alternate !== null && j.delete(B.key === null ? _ : B.key),
            a = i(B, a, _),
            C === null ? N = B : C.sibling = B,
            C = B);
        return e && j.forEach(function(_e) {
            return t(f, _e)
        }),
        U && xt(f, _),
        N
    }
    function k(f, a, p, y) {
        var N = dn(p);
        if (typeof N != "function")
            throw Error(g(150));
        if (p = N.call(p),
        p == null)
            throw Error(g(151));
        for (var C = N = null, j = a, _ = a = 0, B = null, T = p.next(); j !== null && !T.done; _++,
        T = p.next()) {
            j.index > _ ? (B = j,
            j = null) : B = j.sibling;
            var _e = m(f, j, T.value, y);
            if (_e === null) {
                j === null && (j = B);
                break
            }
            e && j && _e.alternate === null && t(f, j),
            a = i(_e, a, _),
            C === null ? N = _e : C.sibling = _e,
            C = _e,
            j = B
        }
        if (T.done)
            return n(f, j),
            U && xt(f, _),
            N;
        if (j === null) {
            for (; !T.done; _++,
            T = p.next())
                T = h(f, T.value, y),
                T !== null && (a = i(T, a, _),
                C === null ? N = T : C.sibling = T,
                C = T);
            return U && xt(f, _),
            N
        }
        for (j = r(f, j); !T.done; _++,
        T = p.next())
            T = x(j, f, _, T.value, y),
            T !== null && (e && T.alternate !== null && j.delete(T.key === null ? _ : T.key),
            a = i(T, a, _),
            C === null ? N = T : C.sibling = T,
            C = T);
        return e && j.forEach(function(an) {
            return t(f, an)
        }),
        U && xt(f, _),
        N
    }
    function F(f, a, p, y) {
        if (typeof p == "object" && p !== null && p.type === Dt && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                e: {
                    for (var N = p.key, C = a; C !== null; ) {
                        if (C.key === N) {
                            if (N = p.type,
                            N === Dt) {
                                if (C.tag === 7) {
                                    n(f, C.sibling),
                                    a = l(C, p.props.children),
                                    a.return = f,
                                    f = a;
                                    break e
                                }
                            } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && yu(N) === C.type) {
                                n(f, C.sibling),
                                a = l(C, p.props),
                                a.ref = vn(f, C, p),
                                a.return = f,
                                f = a;
                                break e
                            }
                            n(f, C);
                            break
                        } else
                            t(f, C);
                        C = C.sibling
                    }
                    p.type === Dt ? (a = Ct(p.props.children, f.mode, y, p.key),
                    a.return = f,
                    f = a) : (y = Lr(p.type, p.key, p.props, null, f.mode, y),
                    y.ref = vn(f, a, p),
                    y.return = f,
                    f = y)
                }
                return o(f);
            case Ot:
                e: {
                    for (C = p.key; a !== null; ) {
                        if (a.key === C)
                            if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                                n(f, a.sibling),
                                a = l(a, p.children || []),
                                a.return = f,
                                f = a;
                                break e
                            } else {
                                n(f, a);
                                break
                            }
                        else
                            t(f, a);
                        a = a.sibling
                    }
                    a = Ql(p, f.mode, y),
                    a.return = f,
                    f = a
                }
                return o(f);
            case Je:
                return C = p._init,
                F(f, a, C(p._payload), y)
            }
            if (wn(p))
                return w(f, a, p, y);
            if (dn(p))
                return k(f, a, p, y);
            mr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        a !== null && a.tag === 6 ? (n(f, a.sibling),
        a = l(a, p),
        a.return = f,
        f = a) : (n(f, a),
        a = Wl(p, f.mode, y),
        a.return = f,
        f = a),
        o(f)) : n(f, a)
    }
    return F
}
var tn = na(!0)
  , ra = na(!1)
  , Wr = ht(null)
  , Qr = null
  , Bt = null
  , uo = null;
function so() {
    uo = Bt = Qr = null
}
function ao(e) {
    var t = Wr.current;
    I(Wr),
    e._currentValue = t
}
function ki(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Zt(e, t) {
    Qr = e,
    uo = Bt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (de = !0),
    e.firstContext = null)
}
function Ce(e) {
    var t = e._currentValue;
    if (uo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Bt === null) {
            if (Qr === null)
                throw Error(g(308));
            Bt = e,
            Qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Bt = Bt.next = e;
    return t
}
var St = null;
function co(e) {
    St === null ? St = [e] : St.push(e)
}
function la(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    co(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ye(e, r)
}
function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qe = !1;
function fo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ia(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function We(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ye(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    co(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ye(e, n)
}
function Er(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Zi(e, n)
    }
}
function gu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Kr(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , c = s.next;
        s.next = null,
        o === null ? i = c : o.next = c,
        o = s;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        u = v.lastBaseUpdate,
        u !== o && (u === null ? v.firstBaseUpdate = c : u.next = c,
        v.lastBaseUpdate = s))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0,
        v = c = s = null,
        u = i;
        do {
            var m = u.lane
              , x = u.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = u;
                    switch (m = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            h = w.call(x, h, m);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        m = typeof w == "function" ? w.call(x, h, m) : w,
                        m == null)
                            break e;
                        h = H({}, h, m);
                        break e;
                    case 2:
                        qe = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                v === null ? (c = v = x,
                s = h) : v = v.next = x,
                o |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (v === null && (s = h),
        l.baseState = s,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = v,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        zt |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function xu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(g(191, l));
                l.call(r)
            }
        }
}
var bn = {}
  , $e = ht(bn)
  , Bn = ht(bn)
  , Wn = ht(bn);
function Nt(e) {
    if (e === bn)
        throw Error(g(174));
    return e
}
function po(e, t) {
    switch (O(Wn, t),
    O(Bn, e),
    O($e, bn),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ti(t, e)
    }
    I($e),
    O($e, t)
}
function nn() {
    I($e),
    I(Bn),
    I(Wn)
}
function oa(e) {
    Nt(Wn.current);
    var t = Nt($e.current)
      , n = ti(t, e.type);
    t !== n && (O(Bn, e),
    O($e, n))
}
function mo(e) {
    Bn.current === e && (I($e),
    I(Bn))
}
var $ = ht(0);
function Yr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ul = [];
function ho() {
    for (var e = 0; e < Ul.length; e++)
        Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var Cr = Xe.ReactCurrentDispatcher
  , $l = Xe.ReactCurrentBatchConfig
  , Pt = 0
  , A = null
  , Y = null
  , Z = null
  , Gr = !1
  , Pn = !1
  , Qn = 0
  , Zd = 0;
function ne() {
    throw Error(g(321))
}
function vo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function yo(e, t, n, r, l, i) {
    if (Pt = i,
    A = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Cr.current = e === null || e.memoizedState === null ? ef : tf,
    e = n(r, l),
    Pn) {
        i = 0;
        do {
            if (Pn = !1,
            Qn = 0,
            25 <= i)
                throw Error(g(301));
            i += 1,
            Z = Y = null,
            t.updateQueue = null,
            Cr.current = nf,
            e = n(r, l)
        } while (Pn)
    }
    if (Cr.current = Xr,
    t = Y !== null && Y.next !== null,
    Pt = 0,
    Z = Y = A = null,
    Gr = !1,
    t)
        throw Error(g(300));
    return e
}
function go() {
    var e = Qn !== 0;
    return Qn = 0,
    e
}
function Ie() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? A.memoizedState = Z = e : Z = Z.next = e,
    Z
}
function je() {
    if (Y === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Y.next;
    var t = Z === null ? A.memoizedState : Z.next;
    if (t !== null)
        Z = t,
        Y = e;
    else {
        if (e === null)
            throw Error(g(310));
        Y = e,
        e = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null
        },
        Z === null ? A.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Al(e) {
    var t = je()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = Y
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , s = null
          , c = i;
        do {
            var v = c.lane;
            if ((Pt & v) === v)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: v,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = h,
                o = r) : s = s.next = h,
                A.lanes |= v,
                zt |= v
            }
            c = c.next
        } while (c !== null && c !== i);
        s === null ? o = r : s.next = u,
        Oe(r, t.memoizedState) || (de = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            A.lanes |= i,
            zt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Hl(e) {
    var t = je()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Oe(i, t.memoizedState) || (de = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function ua() {}
function sa(e, t) {
    var n = A
      , r = je()
      , l = t()
      , i = !Oe(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    de = !0),
    r = r.queue,
    xo(da.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yn(9, ca.bind(null, n, r, l, t), void 0, null),
        J === null)
            throw Error(g(349));
        Pt & 30 || aa(n, t, l)
    }
    return l
}
function aa(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = A.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    A.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ca(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    fa(t) && pa(e)
}
function da(e, t, n) {
    return n(function() {
        fa(t) && pa(e)
    })
}
function fa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function pa(e) {
    var t = Ye(e, 1);
    t !== null && Re(t, e, 1, -1)
}
function wu(e) {
    var t = Ie();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = bd.bind(null, A, e),
    [t.memoizedState, e]
}
function Yn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = A.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    A.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ma() {
    return je().memoizedState
}
function jr(e, t, n, r) {
    var l = Ie();
    A.flags |= e,
    l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r)
}
function sl(e, t, n, r) {
    var l = je();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Y !== null) {
        var o = Y.memoizedState;
        if (i = o.destroy,
        r !== null && vo(r, o.deps)) {
            l.memoizedState = Yn(t, n, i, r);
            return
        }
    }
    A.flags |= e,
    l.memoizedState = Yn(1 | t, n, i, r)
}
function ku(e, t) {
    return jr(8390656, 8, e, t)
}
function xo(e, t) {
    return sl(2048, 8, e, t)
}
function ha(e, t) {
    return sl(4, 2, e, t)
}
function va(e, t) {
    return sl(4, 4, e, t)
}
function ya(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ga(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    sl(4, 4, ya.bind(null, t, e), n)
}
function wo() {}
function xa(e, t) {
    var n = je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function wa(e, t) {
    var n = je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ka(e, t, n) {
    return Pt & 21 ? (Oe(n, t) || (n = js(),
    A.lanes |= n,
    zt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    de = !0),
    e.memoizedState = n)
}
function Jd(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1),
        t()
    } finally {
        R = n,
        $l.transition = r
    }
}
function Sa() {
    return je().memoizedState
}
function qd(e, t, n) {
    var r = ct(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Na(e))
        Ea(t, n);
    else if (n = la(e, t, n, r),
    n !== null) {
        var l = ue();
        Re(n, e, r, l),
        Ca(n, t, r)
    }
}
function bd(e, t, n) {
    var r = ct(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Na(e))
        Ea(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Oe(u, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    co(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = la(e, t, l, r),
        n !== null && (l = ue(),
        Re(n, e, r, l),
        Ca(n, t, r))
    }
}
function Na(e) {
    var t = e.alternate;
    return e === A || t !== null && t === A
}
function Ea(e, t) {
    Pn = Gr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ca(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Zi(e, n)
    }
}
var Xr = {
    readContext: Ce,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , ef = {
    readContext: Ce,
    useCallback: function(e, t) {
        return Ie().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ce,
    useEffect: ku,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        jr(4194308, 4, ya.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return jr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return jr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ie();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ie();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = qd.bind(null, A, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ie();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: wu,
    useDebugValue: wo,
    useDeferredValue: function(e) {
        return Ie().memoizedState = e
    },
    useTransition: function() {
        var e = wu(!1)
          , t = e[0];
        return e = Jd.bind(null, e[1]),
        Ie().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = A
          , l = Ie();
        if (U) {
            if (n === void 0)
                throw Error(g(407));
            n = n()
        } else {
            if (n = t(),
            J === null)
                throw Error(g(349));
            Pt & 30 || aa(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        ku(da.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Yn(9, ca.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ie()
          , t = J.identifierPrefix;
        if (U) {
            var n = Be
              , r = Ve;
            n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Zd++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , tf = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: xo,
    useImperativeHandle: ga,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: wa,
    useReducer: Al,
    useRef: ma,
    useState: function() {
        return Al(Kn)
    },
    useDebugValue: wo,
    useDeferredValue: function(e) {
        var t = je();
        return ka(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = Al(Kn)[0]
          , t = je().memoizedState;
        return [e, t]
    },
    useMutableSource: ua,
    useSyncExternalStore: sa,
    useId: Sa,
    unstable_isNewReconciler: !1
}
  , nf = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: xo,
    useImperativeHandle: ga,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: wa,
    useReducer: Hl,
    useRef: ma,
    useState: function() {
        return Hl(Kn)
    },
    useDebugValue: wo,
    useDeferredValue: function(e) {
        var t = je();
        return Y === null ? t.memoizedState = e : ka(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = Hl(Kn)[0]
          , t = je().memoizedState;
        return [e, t]
    },
    useMutableSource: ua,
    useSyncExternalStore: sa,
    useId: Sa,
    unstable_isNewReconciler: !1
};
function ze(e, t) {
    if (e && e.defaultProps) {
        t = H({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Si(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : H({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = We(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (Re(t, e, l, r),
        Er(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = We(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (Re(t, e, l, r),
        Er(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = ct(e)
          , l = We(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = st(e, l, r),
        t !== null && (Re(t, e, r, n),
        Er(t, e, r))
    }
};
function Su(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(l, i) : !0
}
function ja(e, t, n) {
    var r = !1
      , l = pt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ce(i) : (l = pe(t) ? jt : ie.current,
    r = t.contextTypes,
    i = (r = r != null) ? bt(e, l) : pt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = al,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Nu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null)
}
function Ni(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    fo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ce(i) : (i = pe(t) ? jt : ie.current,
    l.context = bt(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Si(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && al.enqueueReplaceState(l, l.state, null),
    Kr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function rn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Lc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Vl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ei(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var rf = typeof WeakMap == "function" ? WeakMap : Map;
function _a(e, t, n) {
    n = We(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0,
        Oi = r),
        Ei(e, t)
    }
    ,
    n
}
function Pa(e, t, n) {
    n = We(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Ei(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ei(e, t),
        typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Eu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new rf;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = gf.bind(null, e, t, n),
    t.then(e, e))
}
function Cu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ju(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1),
    t.tag = 2,
    st(n, t, 1))),
    n.lanes |= 1),
    e)
}
var lf = Xe.ReactCurrentOwner
  , de = !1;
function oe(e, t, n, r) {
    t.child = e === null ? ra(t, null, n, r) : tn(t, e.child, n, r)
}
function _u(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Zt(t, l),
    r = yo(e, t, n, r, i, l),
    n = go(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ge(e, t, l)) : (U && n && lo(t),
    t.flags |= 1,
    oe(e, t, r, l),
    t.child)
}
function Pu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Po(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        za(e, t, i, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : $n,
        n(o, r) && e.ref === t.ref)
            return Ge(e, t, l)
    }
    return t.flags |= 1,
    e = dt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function za(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if ($n(i, r) && e.ref === t.ref)
            if (de = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (de = !0);
            else
                return t.lanes = e.lanes,
                Ge(e, t, l)
    }
    return Ci(e, t, n, r, l)
}
function La(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            O(Qt, he),
            he |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                O(Qt, he),
                he |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            O(Qt, he),
            he |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        O(Qt, he),
        he |= r;
    return oe(e, t, l, n),
    t.child
}
function Ta(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ci(e, t, n, r, l) {
    var i = pe(n) ? jt : ie.current;
    return i = bt(t, i),
    Zt(t, l),
    n = yo(e, t, n, r, i, l),
    r = go(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ge(e, t, l)) : (U && r && lo(t),
    t.flags |= 1,
    oe(e, t, n, l),
    t.child)
}
function zu(e, t, n, r, l) {
    if (pe(n)) {
        var i = !0;
        Hr(t)
    } else
        i = !1;
    if (Zt(t, l),
    t.stateNode === null)
        _r(e, t),
        ja(t, n, r),
        Ni(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var s = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ce(c) : (c = pe(n) ? jt : ie.current,
        c = bt(t, c));
        var v = n.getDerivedStateFromProps
          , h = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Nu(t, o, r, c),
        qe = !1;
        var m = t.memoizedState;
        o.state = m,
        Kr(t, r, o, l),
        s = t.memoizedState,
        u !== r || m !== s || fe.current || qe ? (typeof v == "function" && (Si(t, n, v, r),
        s = t.memoizedState),
        (u = qe || Su(t, n, u, r, m, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = c,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        ia(e, t),
        u = t.memoizedProps,
        c = t.type === t.elementType ? u : ze(t.type, u),
        o.props = c,
        h = t.pendingProps,
        m = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Ce(s) : (s = pe(n) ? jt : ie.current,
        s = bt(t, s));
        var x = n.getDerivedStateFromProps;
        (v = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || m !== s) && Nu(t, o, r, s),
        qe = !1,
        m = t.memoizedState,
        o.state = m,
        Kr(t, r, o, l);
        var w = t.memoizedState;
        u !== h || m !== w || fe.current || qe ? (typeof x == "function" && (Si(t, n, x, r),
        w = t.memoizedState),
        (c = qe || Su(t, n, c, r, m, w, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = s,
        r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ji(e, t, n, r, i, l)
}
function ji(e, t, n, r, l, i) {
    Ta(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && mu(t, n, !1),
        Ge(e, t, i);
    r = t.stateNode,
    lf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = tn(t, e.child, null, i),
    t.child = tn(t, null, u, i)) : oe(e, t, u, i),
    t.memoizedState = r.state,
    l && mu(t, n, !0),
    t.child
}
function Ma(e) {
    var t = e.stateNode;
    t.pendingContext ? pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pu(e, t.context, !1),
    po(e, t.containerInfo)
}
function Lu(e, t, n, r, l) {
    return en(),
    oo(l),
    t.flags |= 256,
    oe(e, t, n, r),
    t.child
}
var _i = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Pi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ra(e, t, n) {
    var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    O($, l & 1),
    e === null)
        return wi(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = fl(o, r, 0, null),
        e = Ct(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Pi(n),
        t.memoizedState = _i,
        e) : ko(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return of(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = dt(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = dt(u, i) : (i = Ct(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Pi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = _i,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = dt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ko(e, t) {
    return t = fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function hr(e, t, n, r) {
    return r !== null && oo(r),
    tn(t, e.child, null, n),
    e = ko(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function of(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Vl(Error(g(422))),
        hr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = fl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Ct(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && tn(t, e.child, null, o),
        t.child.memoizedState = Pi(o),
        t.memoizedState = _i,
        i);
    if (!(t.mode & 1))
        return hr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(g(419)),
        r = Vl(i, r, void 0),
        hr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    de || u) {
        if (r = J,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Ye(e, l),
            Re(r, e, l, -1))
        }
        return _o(),
        r = Vl(Error(g(421))),
        hr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = xf.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    ve = ut(l.nextSibling),
    ye = t,
    U = !0,
    Te = null,
    e !== null && (ke[Se++] = Ve,
    ke[Se++] = Be,
    ke[Se++] = _t,
    Ve = e.id,
    Be = e.overflow,
    _t = t),
    t = ko(t, r.children),
    t.flags |= 4096,
    t)
}
function Tu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ki(e.return, t, n)
}
function Bl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function Oa(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (oe(e, t, r.children, n),
    r = $.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Tu(e, n, t);
                else if (e.tag === 19)
                    Tu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (O($, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Yr(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Bl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Yr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Bl(t, !0, n, null, i);
            break;
        case "together":
            Bl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function _r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ge(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    zt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child,
        n = dt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = dt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function uf(e, t, n) {
    switch (t.tag) {
    case 3:
        Ma(t),
        en();
        break;
    case 5:
        oa(t);
        break;
    case 1:
        pe(t.type) && Hr(t);
        break;
    case 4:
        po(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        O(Wr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (O($, $.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ra(e, t, n) : (O($, $.current & 1),
            e = Ge(e, t, n),
            e !== null ? e.sibling : null);
        O($, $.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Oa(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        O($, $.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        La(e, t, n)
    }
    return Ge(e, t, n)
}
var Da, zi, Ia, Fa;
Da = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
zi = function() {}
;
Ia = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Nt($e.current);
        var i = null;
        switch (n) {
        case "input":
            l = Jl(e, l),
            r = Jl(e, r),
            i = [];
            break;
        case "select":
            l = H({}, l, {
                value: void 0
            }),
            r = H({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = ei(e, l),
            r = ei(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r)
        }
        ni(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && s !== u && (s != null || u != null))
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mn.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e),
                    i || u === s || (i = [])) : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Fa = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function yn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function sf(e, t, n) {
    var r = t.pendingProps;
    switch (io(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return pe(t.type) && Ar(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        nn(),
        I(fe),
        I(ie),
        ho(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Te !== null && (Fi(Te),
        Te = null))),
        zi(e, t),
        re(t),
        null;
    case 5:
        mo(t);
        var l = Nt(Wn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ia(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(g(166));
                return re(t),
                null
            }
            if (e = Nt($e.current),
            pr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Fe] = t,
                r[Vn] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    D("cancel", r),
                    D("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    D("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Sn.length; l++)
                        D(Sn[l], r);
                    break;
                case "source":
                    D("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    D("error", r),
                    D("load", r);
                    break;
                case "details":
                    D("toggle", r);
                    break;
                case "input":
                    Ao(r, i),
                    D("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    D("invalid", r);
                    break;
                case "textarea":
                    Vo(r, i),
                    D("invalid", r)
                }
                ni(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", "" + u]) : Mn.hasOwnProperty(o) && u != null && o === "onScroll" && D("scroll", r)
                    }
                switch (n) {
                case "input":
                    lr(r),
                    Ho(r, i, !0);
                    break;
                case "textarea":
                    lr(r),
                    Bo(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = $r)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ds(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Fe] = t,
                e[Vn] = r,
                Da(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ri(n, r),
                    n) {
                    case "dialog":
                        D("cancel", e),
                        D("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        D("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Sn.length; l++)
                            D(Sn[l], e);
                        l = r;
                        break;
                    case "source":
                        D("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        D("error", e),
                        D("load", e),
                        l = r;
                        break;
                    case "details":
                        D("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ao(e, r),
                        l = Jl(e, r),
                        D("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = H({}, r, {
                            value: void 0
                        }),
                        D("invalid", e);
                        break;
                    case "textarea":
                        Vo(e, r),
                        l = ei(e, r),
                        D("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    ni(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? ms(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && fs(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Rn(e, s) : typeof s == "number" && Rn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mn.hasOwnProperty(i) ? s != null && i === "onScroll" && D("scroll", e) : s != null && Wi(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        lr(e),
                        Ho(e, r, !1);
                        break;
                    case "textarea":
                        lr(e),
                        Bo(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Kt(e, !!r.multiple, i, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = $r)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Fa(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(g(166));
            if (n = Nt(Wn.current),
            Nt($e.current),
            pr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Fe] = t,
                (i = r.nodeValue !== n) && (e = ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Fe] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (I($),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
                ta(),
                en(),
                t.flags |= 98560,
                i = !1;
            else if (i = pr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(g(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(g(317));
                    i[Fe] = t
                } else
                    en(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                i = !1
            } else
                Te !== null && (Fi(Te),
                Te = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || $.current & 1 ? G === 0 && (G = 3) : _o())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return nn(),
        zi(e, t),
        e === null && An(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return ao(t.type._context),
        re(t),
        null;
    case 17:
        return pe(t.type) && Ar(),
        re(t),
        null;
    case 19:
        if (I($),
        i = t.memoizedState,
        i === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                yn(i, !1);
            else {
                if (G !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Yr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            yn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return O($, $.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Q() > ln && (t.flags |= 128,
                r = !0,
                yn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Yr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    yn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
                        return re(t),
                        null
                } else
                    2 * Q() - i.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    yn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Q(),
        t.sibling = null,
        n = $.current,
        O($, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return jo(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? he & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(g(156, t.tag))
}
function af(e, t) {
    switch (io(t),
    t.tag) {
    case 1:
        return pe(t.type) && Ar(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return nn(),
        I(fe),
        I(ie),
        ho(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return mo(t),
        null;
    case 13:
        if (I($),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(g(340));
            en()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return I($),
        null;
    case 4:
        return nn(),
        null;
    case 10:
        return ao(t.type._context),
        null;
    case 22:
    case 23:
        return jo(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var vr = !1
  , le = !1
  , cf = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Wt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                V(e, t, r)
            }
        else
            n.current = null
}
function Li(e, t, n) {
    try {
        n()
    } catch (r) {
        V(e, t, r)
    }
}
var Mu = !1;
function df(e, t) {
    if (pi = Ir,
    e = Vs(),
    ro(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , s = -1
                      , c = 0
                      , v = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l),
                        h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (x = h.firstChild) !== null; )
                            m = h,
                            h = x;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++c === l && (u = o),
                            m === i && ++v === r && (s = o),
                            (x = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = x
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (mi = {
        focusedElem: e,
        selectionRange: n
    },
    Ir = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , F = w.memoizedState
                                  , f = t.stateNode
                                  , a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ze(t.type, k), F);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                        }
                } catch (y) {
                    V(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = Mu,
    Mu = !1,
    w
}
function zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Li(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function cl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ti(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ua(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ua(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Fe],
    delete t[Vn],
    delete t[yi],
    delete t[Kd],
    delete t[Yd])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function $a(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ru(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || $a(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Mi(e, t, n),
        e = e.sibling; e !== null; )
            Mi(e, t, n),
            e = e.sibling
}
function Ri(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ri(e, t, n),
        e = e.sibling; e !== null; )
            Ri(e, t, n),
            e = e.sibling
}
var b = null
  , Le = !1;
function Ze(e, t, n) {
    for (n = n.child; n !== null; )
        Aa(e, t, n),
        n = n.sibling
}
function Aa(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(nl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Wt(n, t);
    case 6:
        var r = b
          , l = Le;
        b = null,
        Ze(e, t, n),
        b = r,
        Le = l,
        b !== null && (Le ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
    case 18:
        b !== null && (Le ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n),
        Fn(e)) : Il(b, n.stateNode));
        break;
    case 4:
        r = b,
        l = Le,
        b = n.stateNode.containerInfo,
        Le = !0,
        Ze(e, t, n),
        b = r,
        Le = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Li(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Ze(e, t, n);
        break;
    case 1:
        if (!le && (Wt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                V(n, t, u)
            }
        Ze(e, t, n);
        break;
    case 21:
        Ze(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        Ze(e, t, n),
        le = r) : Ze(e, t, n);
        break;
    default:
        Ze(e, t, n)
    }
}
function Ou(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new cf),
        t.forEach(function(r) {
            var l = wf.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Pe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        b = u.stateNode,
                        Le = !1;
                        break e;
                    case 3:
                        b = u.stateNode.containerInfo,
                        Le = !0;
                        break e;
                    case 4:
                        b = u.stateNode.containerInfo,
                        Le = !0;
                        break e
                    }
                    u = u.return
                }
                if (b === null)
                    throw Error(g(160));
                Aa(i, o, l),
                b = null,
                Le = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (c) {
                V(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ha(t, e),
            t = t.sibling
}
function Ha(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pe(t, e),
        De(e),
        r & 4) {
            try {
                zn(3, e, e.return),
                cl(3, e)
            } catch (k) {
                V(e, e.return, k)
            }
            try {
                zn(5, e, e.return)
            } catch (k) {
                V(e, e.return, k)
            }
        }
        break;
    case 1:
        Pe(t, e),
        De(e),
        r & 512 && n !== null && Wt(n, n.return);
        break;
    case 5:
        if (Pe(t, e),
        De(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Rn(l, "")
            } catch (k) {
                V(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && as(l, i),
                    ri(u, o);
                    var c = ri(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var v = s[o]
                          , h = s[o + 1];
                        v === "style" ? ms(l, h) : v === "dangerouslySetInnerHTML" ? fs(l, h) : v === "children" ? Rn(l, h) : Wi(l, v, h, c)
                    }
                    switch (u) {
                    case "input":
                        ql(l, i);
                        break;
                    case "textarea":
                        cs(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Kt(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Kt(l, !!i.multiple, i.defaultValue, !0) : Kt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Vn] = i
                } catch (k) {
                    V(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Pe(t, e),
        De(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(g(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (k) {
                V(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Pe(t, e),
        De(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fn(t.containerInfo)
            } catch (k) {
                V(e, e.return, k)
            }
        break;
    case 4:
        Pe(t, e),
        De(e);
        break;
    case 13:
        Pe(t, e),
        De(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (Eo = Q())),
        r & 4 && Ou(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (c = le) || v,
        Pe(t, e),
        le = c) : Pe(t, e),
        De(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !v && e.mode & 1)
                for (S = e,
                v = e.child; v !== null; ) {
                    for (h = S = v; S !== null; ) {
                        switch (m = S,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            zn(4, m, m.return);
                            break;
                        case 1:
                            Wt(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    V(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Wt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Iu(h);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        S = x) : Iu(h)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (v === null) {
                        v = h;
                        try {
                            l = h.stateNode,
                            c ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode,
                            s = h.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = ps("display", o))
                        } catch (k) {
                            V(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (v === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (k) {
                            V(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    v === h && (v = null),
                    h = h.return
                }
                v === h && (v = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Pe(t, e),
        De(e),
        r & 4 && Ou(e);
        break;
    case 21:
        break;
    default:
        Pe(t, e),
        De(e)
    }
}
function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if ($a(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Rn(l, ""),
                r.flags &= -33);
                var i = Ru(e);
                Ri(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = Ru(e);
                Mi(e, u, o);
                break;
            default:
                throw Error(g(161))
            }
        } catch (s) {
            V(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ff(e, t, n) {
    S = e,
    Va(e)
}
function Va(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || vr;
            if (!o) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = vr;
                var c = le;
                if (vr = o,
                (le = s) && !c)
                    for (S = l; S !== null; )
                        o = S,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Fu(l) : s !== null ? (s.return = o,
                        S = s) : Fu(l);
                for (; i !== null; )
                    S = i,
                    Va(i),
                    i = i.sibling;
                S = l,
                vr = u,
                le = c
            }
            Du(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            S = i) : Du(e)
    }
}
function Du(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && xu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            xu(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var v = c.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && Fn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(g(163))
                    }
                le || t.flags & 512 && Ti(t)
            } catch (m) {
                V(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Iu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Fu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    cl(4, t)
                } catch (s) {
                    V(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        V(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Ti(t)
                } catch (s) {
                    V(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ti(t)
                } catch (s) {
                    V(t, o, s)
                }
            }
        } catch (s) {
            V(t, t.return, s)
        }
        if (t === e) {
            S = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            S = u;
            break
        }
        S = t.return
    }
}
var pf = Math.ceil
  , Zr = Xe.ReactCurrentDispatcher
  , So = Xe.ReactCurrentOwner
  , Ee = Xe.ReactCurrentBatchConfig
  , M = 0
  , J = null
  , K = null
  , ee = 0
  , he = 0
  , Qt = ht(0)
  , G = 0
  , Gn = null
  , zt = 0
  , dl = 0
  , No = 0
  , Ln = null
  , ce = null
  , Eo = 0
  , ln = 1 / 0
  , Ae = null
  , Jr = !1
  , Oi = null
  , at = null
  , yr = !1
  , nt = null
  , qr = 0
  , Tn = 0
  , Di = null
  , Pr = -1
  , zr = 0;
function ue() {
    return M & 6 ? Q() : Pr !== -1 ? Pr : Pr = Q()
}
function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : Xd.transition !== null ? (zr === 0 && (zr = js()),
    zr) : (e = R,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Rs(e.type)),
    e) : 1
}
function Re(e, t, n, r) {
    if (50 < Tn)
        throw Tn = 0,
        Di = null,
        Error(g(185));
    Zn(e, n, r),
    (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (dl |= n),
    G === 4 && et(e, ee)),
    me(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (ln = Q() + 500,
    ul && vt()))
}
function me(e, t) {
    var n = e.callbackNode;
    Xc(e, t);
    var r = Dr(e, e === J ? ee : 0);
    if (r === 0)
        n !== null && Ko(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ko(n),
        t === 1)
            e.tag === 0 ? Gd(Uu.bind(null, e)) : qs(Uu.bind(null, e)),
            Wd(function() {
                !(M & 6) && vt()
            }),
            n = null;
        else {
            switch (_s(r)) {
            case 1:
                n = Xi;
                break;
            case 4:
                n = Es;
                break;
            case 16:
                n = Or;
                break;
            case 536870912:
                n = Cs;
                break;
            default:
                n = Or
            }
            n = Za(n, Ba.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ba(e, t) {
    if (Pr = -1,
    zr = 0,
    M & 6)
        throw Error(g(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n)
        return null;
    var r = Dr(e, e === J ? ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = br(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = Qa();
        (J !== e || ee !== t) && (Ae = null,
        ln = Q() + 500,
        Et(e, t));
        do
            try {
                vf();
                break
            } catch (u) {
                Wa(e, u)
            }
        while (!0);
        so(),
        Zr.current = i,
        M = l,
        K !== null ? t = 0 : (J = null,
        ee = 0,
        t = G)
    }
    if (t !== 0) {
        if (t === 2 && (l = si(e),
        l !== 0 && (r = l,
        t = Ii(e, l))),
        t === 1)
            throw n = Gn,
            Et(e, 0),
            et(e, r),
            me(e, Q()),
            n;
        if (t === 6)
            et(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !mf(l) && (t = br(e, r),
            t === 2 && (i = si(e),
            i !== 0 && (r = i,
            t = Ii(e, i))),
            t === 1))
                throw n = Gn,
                Et(e, 0),
                et(e, r),
                me(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(g(345));
            case 2:
                wt(e, ce, Ae);
                break;
            case 3:
                if (et(e, r),
                (r & 130023424) === r && (t = Eo + 500 - Q(),
                10 < t)) {
                    if (Dr(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = vi(wt.bind(null, e, ce, Ae), t);
                    break
                }
                wt(e, ce, Ae);
                break;
            case 4:
                if (et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Me(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pf(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = vi(wt.bind(null, e, ce, Ae), r);
                    break
                }
                wt(e, ce, Ae);
                break;
            case 5:
                wt(e, ce, Ae);
                break;
            default:
                throw Error(g(329))
            }
        }
    }
    return me(e, Q()),
    e.callbackNode === n ? Ba.bind(null, e) : null
}
function Ii(e, t) {
    var n = Ln;
    return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    e = br(e, t),
    e !== 2 && (t = ce,
    ce = n,
    t !== null && Fi(t)),
    e
}
function Fi(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}
function mf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function et(e, t) {
    for (t &= ~No,
    t &= ~dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Me(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Uu(e) {
    if (M & 6)
        throw Error(g(327));
    Jt();
    var t = Dr(e, 0);
    if (!(t & 1))
        return me(e, Q()),
        null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = si(e);
        r !== 0 && (t = r,
        n = Ii(e, r))
    }
    if (n === 1)
        throw n = Gn,
        Et(e, 0),
        et(e, t),
        me(e, Q()),
        n;
    if (n === 6)
        throw Error(g(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    wt(e, ce, Ae),
    me(e, Q()),
    null
}
function Co(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (ln = Q() + 500,
        ul && vt())
    }
}
function Lt(e) {
    nt !== null && nt.tag === 0 && !(M & 6) && Jt();
    var t = M;
    M |= 1;
    var n = Ee.transition
      , r = R;
    try {
        if (Ee.transition = null,
        R = 1,
        e)
            return e()
    } finally {
        R = r,
        Ee.transition = n,
        M = t,
        !(M & 6) && vt()
    }
}
function jo() {
    he = Qt.current,
    I(Qt)
}
function Et(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Bd(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (io(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ar();
                break;
            case 3:
                nn(),
                I(fe),
                I(ie),
                ho();
                break;
            case 5:
                mo(r);
                break;
            case 4:
                nn();
                break;
            case 13:
                I($);
                break;
            case 19:
                I($);
                break;
            case 10:
                ao(r.type._context);
                break;
            case 22:
            case 23:
                jo()
            }
            n = n.return
        }
    if (J = e,
    K = e = dt(e.current, null),
    ee = he = t,
    G = 0,
    Gn = null,
    No = dl = zt = 0,
    ce = Ln = null,
    St !== null) {
        for (t = 0; t < St.length; t++)
            if (n = St[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        St = null
    }
    return e
}
function Wa(e, t) {
    do {
        var n = K;
        try {
            if (so(),
            Cr.current = Xr,
            Gr) {
                for (var r = A.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Gr = !1
            }
            if (Pt = 0,
            Z = Y = A = null,
            Pn = !1,
            Qn = 0,
            So.current = null,
            n === null || n.return === null) {
                G = 1,
                Gn = t,
                K = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , s = t;
                if (t = ee,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , v = u
                      , h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue,
                        v.memoizedState = m.memoizedState,
                        v.lanes = m.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var x = Cu(o);
                    if (x !== null) {
                        x.flags &= -257,
                        ju(x, o, u, i, t),
                        x.mode & 1 && Eu(i, c, t),
                        t = x,
                        s = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Eu(i, c, t),
                            _o();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (U && u.mode & 1) {
                    var F = Cu(o);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                        ju(F, o, u, i, t),
                        oo(rn(s, u));
                        break e
                    }
                }
                i = s = rn(s, u),
                G !== 4 && (G = 2),
                Ln === null ? Ln = [i] : Ln.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = _a(i, s, t);
                        gu(i, f);
                        break e;
                    case 1:
                        u = s;
                        var a = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (at === null || !at.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = Pa(i, u, t);
                            gu(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ya(n)
        } catch (N) {
            t = N,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Qa() {
    var e = Zr.current;
    return Zr.current = Xr,
    e === null ? Xr : e
}
function _o() {
    (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || !(zt & 268435455) && !(dl & 268435455) || et(J, ee)
}
function br(e, t) {
    var n = M;
    M |= 2;
    var r = Qa();
    (J !== e || ee !== t) && (Ae = null,
    Et(e, t));
    do
        try {
            hf();
            break
        } catch (l) {
            Wa(e, l)
        }
    while (!0);
    if (so(),
    M = n,
    Zr.current = r,
    K !== null)
        throw Error(g(261));
    return J = null,
    ee = 0,
    G
}
function hf() {
    for (; K !== null; )
        Ka(K)
}
function vf() {
    for (; K !== null && !Ac(); )
        Ka(K)
}
function Ka(e) {
    var t = Xa(e.alternate, e, he);
    e.memoizedProps = e.pendingProps,
    t === null ? Ya(e) : K = t,
    So.current = null
}
function Ya(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = af(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                G = 6,
                K = null;
                return
            }
        } else if (n = sf(n, t, he),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    G === 0 && (G = 5)
}
function wt(e, t, n) {
    var r = R
      , l = Ee.transition;
    try {
        Ee.transition = null,
        R = 1,
        yf(e, t, n, r)
    } finally {
        Ee.transition = l,
        R = r
    }
    return null
}
function yf(e, t, n, r) {
    do
        Jt();
    while (nt !== null);
    if (M & 6)
        throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(g(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Zc(e, i),
    e === J && (K = J = null,
    ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yr || (yr = !0,
    Za(Or, function() {
        return Jt(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ee.transition,
        Ee.transition = null;
        var o = R;
        R = 1;
        var u = M;
        M |= 4,
        So.current = null,
        df(e, n),
        Ha(n, e),
        Id(mi),
        Ir = !!pi,
        mi = pi = null,
        e.current = n,
        ff(n),
        Hc(),
        M = u,
        R = o,
        Ee.transition = i
    } else
        e.current = n;
    if (yr && (yr = !1,
    nt = e,
    qr = l),
    i = e.pendingLanes,
    i === 0 && (at = null),
    Wc(n.stateNode),
    me(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Jr)
        throw Jr = !1,
        e = Oi,
        Oi = null,
        e;
    return qr & 1 && e.tag !== 0 && Jt(),
    i = e.pendingLanes,
    i & 1 ? e === Di ? Tn++ : (Tn = 0,
    Di = e) : Tn = 0,
    vt(),
    null
}
function Jt() {
    if (nt !== null) {
        var e = _s(qr)
          , t = Ee.transition
          , n = R;
        try {
            if (Ee.transition = null,
            R = 16 > e ? 16 : e,
            nt === null)
                var r = !1;
            else {
                if (e = nt,
                nt = null,
                qr = 0,
                M & 6)
                    throw Error(g(331));
                var l = M;
                for (M |= 4,
                S = e.current; S !== null; ) {
                    var i = S
                      , o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (S = c; S !== null; ) {
                                    var v = S;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zn(8, v, i)
                                    }
                                    var h = v.child;
                                    if (h !== null)
                                        h.return = v,
                                        S = h;
                                    else
                                        for (; S !== null; ) {
                                            v = S;
                                            var m = v.sibling
                                              , x = v.return;
                                            if (Ua(v),
                                            v === c) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        k.sibling = null,
                                        k = F
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        S = o;
                    else
                        e: for (; S !== null; ) {
                            if (i = S,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zn(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                S = f;
                                break e
                            }
                            S = i.return
                        }
                }
                var a = e.current;
                for (S = a; S !== null; ) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        S = p;
                    else
                        e: for (o = a; S !== null; ) {
                            if (u = S,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        cl(9, u)
                                    }
                                } catch (N) {
                                    V(u, u.return, N)
                                }
                            if (u === o) {
                                S = null;
                                break e
                            }
                            var y = u.sibling;
                            if (y !== null) {
                                y.return = u.return,
                                S = y;
                                break e
                            }
                            S = u.return
                        }
                }
                if (M = l,
                vt(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(nl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            R = n,
            Ee.transition = t
        }
    }
    return !1
}
function $u(e, t, n) {
    t = rn(n, t),
    t = _a(e, t, 1),
    e = st(e, t, 1),
    t = ue(),
    e !== null && (Zn(e, 1, t),
    me(e, t))
}
function V(e, t, n) {
    if (e.tag === 3)
        $u(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                $u(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = rn(n, e),
                    e = Pa(t, e, 1),
                    t = st(t, e, 1),
                    e = ue(),
                    t !== null && (Zn(t, 1, e),
                    me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    J === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Q() - Eo ? Et(e, 0) : No |= n),
    me(e, t)
}
function Ga(e, t) {
    t === 0 && (e.mode & 1 ? (t = ur,
    ur <<= 1,
    !(ur & 130023424) && (ur = 4194304)) : t = 1);
    var n = ue();
    e = Ye(e, t),
    e !== null && (Zn(e, t, n),
    me(e, n))
}
function xf(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ga(e, n)
}
function wf(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(g(314))
    }
    r !== null && r.delete(t),
    Ga(e, n)
}
var Xa;
Xa = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current)
            de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return de = !1,
                uf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else
        de = !1,
        U && t.flags & 1048576 && bs(t, Br, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        _r(e, t),
        e = t.pendingProps;
        var l = bt(t, ie.current);
        Zt(t, n),
        l = yo(null, t, r, e, l, n);
        var i = go();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        pe(r) ? (i = !0,
        Hr(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        fo(t),
        l.updater = al,
        t.stateNode = l,
        l._reactInternals = t,
        Ni(t, r, e, n),
        t = ji(null, t, r, !0, i, n)) : (t.tag = 0,
        U && i && lo(t),
        oe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (_r(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Sf(r),
            e = ze(r, e),
            l) {
            case 0:
                t = Ci(null, t, r, e, n);
                break e;
            case 1:
                t = zu(null, t, r, e, n);
                break e;
            case 11:
                t = _u(null, t, r, e, n);
                break e;
            case 14:
                t = Pu(null, t, r, ze(r.type, e), n);
                break e
            }
            throw Error(g(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Ci(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        zu(e, t, r, l, n);
    case 3:
        e: {
            if (Ma(t),
            e === null)
                throw Error(g(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            ia(e, t),
            Kr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = rn(Error(g(423)), t),
                    t = Lu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = rn(Error(g(424)), t),
                    t = Lu(e, t, r, n, l);
                    break e
                } else
                    for (ve = ut(t.stateNode.containerInfo.firstChild),
                    ye = t,
                    U = !0,
                    Te = null,
                    n = ra(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (en(),
                r === l) {
                    t = Ge(e, t, n);
                    break e
                }
                oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return oa(t),
        e === null && wi(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        hi(r, l) ? o = null : i !== null && hi(r, i) && (t.flags |= 32),
        Ta(e, t),
        oe(e, t, o, n),
        t.child;
    case 6:
        return e === null && wi(t),
        null;
    case 13:
        return Ra(e, t, n);
    case 4:
        return po(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = tn(t, null, r, n) : oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        _u(e, t, r, l, n);
    case 7:
        return oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            O(Wr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Oe(i.value, o)) {
                    if (i.children === l.children && !fe.current) {
                        t = Ge(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = We(-1, n & -n),
                                        s.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var v = c.pending;
                                            v === null ? s.next = s : (s.next = v.next,
                                            v.next = s),
                                            c.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    ki(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(g(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            ki(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            oe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        Zt(t, n),
        l = Ce(l),
        r = r(l),
        t.flags |= 1,
        oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ze(r, t.pendingProps),
        l = ze(r.type, l),
        Pu(e, t, r, l, n);
    case 15:
        return za(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        _r(e, t),
        t.tag = 1,
        pe(r) ? (e = !0,
        Hr(t)) : e = !1,
        Zt(t, n),
        ja(t, r, l),
        Ni(t, r, l, n),
        ji(null, t, r, !0, e, n);
    case 19:
        return Oa(e, t, n);
    case 22:
        return La(e, t, n)
    }
    throw Error(g(156, t.tag))
}
;
function Za(e, t) {
    return Ns(e, t)
}
function kf(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ne(e, t, n, r) {
    return new kf(e,t,n,r)
}
function Po(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Sf(e) {
    if (typeof e == "function")
        return Po(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ki)
            return 11;
        if (e === Yi)
            return 14
    }
    return 2
}
function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ne(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Lr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Po(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Dt:
            return Ct(n.children, l, i, t);
        case Qi:
            o = 8,
            l |= 8;
            break;
        case Yl:
            return e = Ne(12, n, t, l | 2),
            e.elementType = Yl,
            e.lanes = i,
            e;
        case Gl:
            return e = Ne(13, n, t, l),
            e.elementType = Gl,
            e.lanes = i,
            e;
        case Xl:
            return e = Ne(19, n, t, l),
            e.elementType = Xl,
            e.lanes = i,
            e;
        case os:
            return fl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ls:
                    o = 10;
                    break e;
                case is:
                    o = 9;
                    break e;
                case Ki:
                    o = 11;
                    break e;
                case Yi:
                    o = 14;
                    break e;
                case Je:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return t = Ne(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Ct(e, t, n, r) {
    return e = Ne(7, e, r, t),
    e.lanes = n,
    e
}
function fl(e, t, n, r) {
    return e = Ne(22, e, r, t),
    e.elementType = os,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Wl(e, t, n) {
    return e = Ne(6, e, null, t),
    e.lanes = n,
    e
}
function Ql(e, t, n) {
    return t = Ne(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Nf(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cl(0),
    this.expirationTimes = Cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function zo(e, t, n, r, l, i, o, u, s) {
    return e = new Nf(e,t,n,u,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ne(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    fo(i),
    e
}
function Ef(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ot,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ja(e) {
    if (!e)
        return pt;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1)
            throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return Js(e, n, t)
    }
    return t
}
function qa(e, t, n, r, l, i, o, u, s) {
    return e = zo(n, r, !0, e, l, i, o, u, s),
    e.context = Ja(null),
    n = e.current,
    r = ue(),
    l = ct(n),
    i = We(r, l),
    i.callback = t ?? null,
    st(n, i, l),
    e.current.lanes = l,
    Zn(e, l, r),
    me(e, r),
    e
}
function pl(e, t, n, r) {
    var l = t.current
      , i = ue()
      , o = ct(l);
    return n = Ja(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = We(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = st(l, t, o),
    e !== null && (Re(e, l, o, i),
    Er(e, l, o)),
    o
}
function el(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Au(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Lo(e, t) {
    Au(e, t),
    (e = e.alternate) && Au(e, t)
}
function Cf() {
    return null
}
var ba = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function To(e) {
    this._internalRoot = e
}
ml.prototype.render = To.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(g(409));
    pl(e, t, null, null)
}
;
ml.prototype.unmount = To.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lt(function() {
            pl(null, e, null, null)
        }),
        t[Ke] = null
    }
}
;
function ml(e) {
    this._internalRoot = e
}
ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ls();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++)
            ;
        be.splice(n, 0, e),
        n === 0 && Ms(e)
    }
}
;
function Mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Hu() {}
function jf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = el(o);
                i.call(c)
            }
        }
        var o = qa(t, r, e, 0, null, !1, !1, "", Hu);
        return e._reactRootContainer = o,
        e[Ke] = o.current,
        An(e.nodeType === 8 ? e.parentNode : e),
        Lt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var c = el(s);
            u.call(c)
        }
    }
    var s = zo(e, 0, !1, null, null, !1, !1, "", Hu);
    return e._reactRootContainer = s,
    e[Ke] = s.current,
    An(e.nodeType === 8 ? e.parentNode : e),
    Lt(function() {
        pl(t, s, n, r)
    }),
    s
}
function vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = el(o);
                u.call(s)
            }
        }
        pl(t, o, e, l)
    } else
        o = jf(n, t, e, l, r);
    return el(o)
}
Ps = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = kn(t.pendingLanes);
            n !== 0 && (Zi(t, n | 1),
            me(t, Q()),
            !(M & 6) && (ln = Q() + 500,
            vt()))
        }
        break;
    case 13:
        Lt(function() {
            var r = Ye(e, 1);
            if (r !== null) {
                var l = ue();
                Re(r, e, 1, l)
            }
        }),
        Lo(e, 1)
    }
}
;
Ji = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = ue();
            Re(t, e, 134217728, n)
        }
        Lo(e, 134217728)
    }
}
;
zs = function(e) {
    if (e.tag === 13) {
        var t = ct(e)
          , n = Ye(e, t);
        if (n !== null) {
            var r = ue();
            Re(n, e, t, r)
        }
        Lo(e, t)
    }
}
;
Ls = function() {
    return R
}
;
Ts = function(e, t) {
    var n = R;
    try {
        return R = e,
        t()
    } finally {
        R = n
    }
}
;
ii = function(e, t, n) {
    switch (t) {
    case "input":
        if (ql(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = ol(r);
                    if (!l)
                        throw Error(g(90));
                    ss(r),
                    ql(r, l)
                }
            }
        }
        break;
    case "textarea":
        cs(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Kt(e, !!n.multiple, t, !1)
    }
}
;
ys = Co;
gs = Lt;
var _f = {
    usingClientEntryPoint: !1,
    Events: [qn, $t, ol, hs, vs, Co]
}
  , gn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Pf = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ks(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Cf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            nl = gr.inject(Pf),
            Ue = gr
        } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mo(t))
        throw Error(g(200));
    return Ef(e, t, null, n)
}
;
xe.createRoot = function(e, t) {
    if (!Mo(e))
        throw Error(g(299));
    var n = !1
      , r = ""
      , l = ba;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = zo(e, 1, !1, null, null, n, !1, r, l),
    e[Ke] = t.current,
    An(e.nodeType === 8 ? e.parentNode : e),
    new To(t)
}
;
xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","),
        Error(g(268, e)));
    return e = ks(t),
    e = e === null ? null : e.stateNode,
    e
}
;
xe.flushSync = function(e) {
    return Lt(e)
}
;
xe.hydrate = function(e, t, n) {
    if (!hl(t))
        throw Error(g(200));
    return vl(null, e, t, !0, n)
}
;
xe.hydrateRoot = function(e, t, n) {
    if (!Mo(e))
        throw Error(g(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = ba;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = qa(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Ke] = t.current,
    An(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ml(t)
}
;
xe.render = function(e, t, n) {
    if (!hl(t))
        throw Error(g(200));
    return vl(null, e, t, !1, n)
}
;
xe.unmountComponentAtNode = function(e) {
    if (!hl(e))
        throw Error(g(40));
    return e._reactRootContainer ? (Lt(function() {
        vl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ke] = null
        })
    }),
    !0) : !1
}
;
xe.unstable_batchedUpdates = Co;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hl(n))
        throw Error(g(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(g(38));
    return vl(e, t, n, !1, r)
}
;
xe.version = "18.3.1-next-f1338f8080-20240426";
function ec() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)
        } catch (e) {
            console.error(e)
        }
}
ec(),
es.exports = xe;
var zf = es.exports, tc, Vu = zf;
tc = Vu.createRoot,
Vu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , q = (e, t) => {
    const n = rt.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: u="", children: s, ...c}, v) => rt.createElement("svg", {
        ref: v,
        ...Lf,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Tf(e)}`, u].join(" "),
        ...c
    }, [...t.map( ([h,m]) => rt.createElement(h, m)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = q("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = q("BookOpen", [["path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    key: "vv98re"
}], ["path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    key: "1cyq3y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = q("Book", [["path", {
    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
    key: "t4utmx"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = q("Briefcase", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2",
    key: "eto64e"
}], ["path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "zwj3tp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = q("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = q("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = q("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = q("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = q("Factory", [["path", {
    d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
    key: "159hny"
}], ["path", {
    d: "M17 18h1",
    key: "uldtlt"
}], ["path", {
    d: "M12 18h1",
    key: "s9uhes"
}], ["path", {
    d: "M7 18h1",
    key: "1neino"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = q("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = q("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = q("Leaf", [["path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    key: "nnexq3"
}], ["path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    key: "mt58a7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = q("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = q("Recycle", [["path", {
    d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
    key: "x6z5xu"
}], ["path", {
    d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
    key: "1x4zh5"
}], ["path", {
    d: "m14 16-3 3 3 3",
    key: "f6jyew"
}], ["path", {
    d: "M8.293 13.596 7.196 9.5 3.1 10.598",
    key: "wf1obh"
}], ["path", {
    d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
    key: "9tzpgr"
}], ["path", {
    d: "m13.378 9.633 4.096 1.098 1.097-4.096",
    key: "1oe83g"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = q("Sprout", [["path", {
    d: "M7 20h10",
    key: "e6iznv"
}], ["path", {
    d: "M10 20c5.5-2.5.8-6.4 3-10",
    key: "161w41"
}], ["path", {
    d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
    key: "9gtqwd"
}], ["path", {
    d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
    key: "bkxnd2"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = q("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = q("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = q("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Zf = () => {
    const [e,t] = rt.useState(!1)
      , n = [{
        name: "Home",
        href: "#"
    }, {
        name: "Complaints",
        href: "#complaints"
    }, {
        name: "Schemes",
        href: "#schemes"
    }, {
        name: "Skill Hub",
        href: "#skillhub"
    }, {
        name: "Waste Management",
        href: "#waste"
    }];
    return d.jsx("nav", {
        className: "bg-white shadow-lg fixed w-full z-50",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [d.jsxs("div", {
                className: "flex justify-between h-16",
                children: [d.jsx("div", {
                    className: "flex items-center",
                    children: d.jsx("span", {
                        className: "text-green-700 text-2xl font-bold",
                        children: "GramSetu"
                    })
                }), d.jsxs("div", {
                    className: "hidden md:flex items-center space-x-8",
                    children: [n.map(r => d.jsx("a", {
                        href: r.href,
                        className: "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: r.name
                    }, r.name)), d.jsx("button", {
                        className: "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",
                        children: "Login"
                    })]
                }), d.jsx("div", {
                    className: "md:hidden flex items-center",
                    children: d.jsx("button", {
                        onClick: () => t(!e),
                        className: "text-gray-700 hover:text-green-600",
                        children: e ? d.jsx(Xf, {
                            size: 24
                        }) : d.jsx(Wf, {
                            size: 24
                        })
                    })
                })]
            }), e && d.jsx("div", {
                className: "md:hidden",
                children: d.jsxs("div", {
                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                    children: [n.map(r => d.jsx("a", {
                        href: r.href,
                        className: "text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium",
                        children: r.name
                    }, r.name)), d.jsx("button", {
                        className: "w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors mt-4",
                        children: "Login"
                    })]
                })
            })]
        })
    })
}
  , Jf = () => d.jsx("div", {
    className: "pt-16",
    children: d.jsxs("div", {
        className: "relative bg-cover bg-center h-[600px]",
        style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1595344416261-3b2b7b8b8e2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
        },
        children: [d.jsx("div", {
            className: "absolute inset-0 bg-black bg-opacity-50"
        }), d.jsxs("div", {
            className: "relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",
            children: [d.jsx("h1", {
                className: "text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl",
                children: "Empowering Rural India"
            }), d.jsx("p", {
                className: "mt-6 text-xl text-white max-w-3xl",
                children: "GramSetu bridges the gap between rural communities and development opportunities. Access government schemes, skill development programs, and more - all in one place."
            }), d.jsxs("div", {
                className: "mt-10 flex space-x-4",
                children: [d.jsx("a", {
                    href: "#schemes",
                    className: "inline-block bg-green-600 px-8 py-3 rounded-md text-white font-medium hover:bg-green-700 transition-colors",
                    children: "Explore Schemes"
                }), d.jsx("a", {
                    href: "#complaints",
                    className: "inline-block bg-white px-8 py-3 rounded-md text-green-700 font-medium hover:bg-gray-100 transition-colors",
                    children: "File Complaint"
                })]
            })]
        })]
    })
})
  , qf = [{
    title: "PMAY-G",
    description: "Housing scheme for rural families",
    icon: Vf,
    color: "bg-blue-100 text-blue-600"
}, {
    title: "MGNREGA",
    description: "Employment guarantee scheme",
    icon: Gf,
    color: "bg-green-100 text-green-600"
}, {
    title: "DDU-GKY",
    description: "Skill development program",
    icon: Rf,
    color: "bg-purple-100 text-purple-600"
}, {
    title: "PMKSY",
    description: "Agricultural development scheme",
    icon: Kf,
    color: "bg-orange-100 text-orange-600"
}]
  , bf = () => d.jsx("section", {
    id: "schemes",
    className: "py-20 bg-white",
    children: d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h2", {
                className: "text-3xl font-bold text-gray-900",
                children: "Government Schemes"
            }), d.jsx("p", {
                className: "mt-4 text-lg text-gray-600",
                children: "Explore various government schemes designed to benefit rural communities"
            })]
        }), d.jsx("div", {
            className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
            children: qf.map(e => d.jsxs("div", {
                className: "relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow",
                children: [d.jsx("div", {
                    className: `inline-flex p-3 rounded-lg ${e.color}`,
                    children: d.jsx(e.icon, {
                        size: 24
                    })
                }), d.jsx("h3", {
                    className: "mt-4 text-lg font-medium text-gray-900",
                    children: e.title
                }), d.jsx("p", {
                    className: "mt-2 text-gray-500",
                    children: e.description
                }), d.jsxs("a", {
                    href: "#",
                    className: "mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700",
                    children: ["Learn more", d.jsx("span", {
                        className: "ml-1",
                        children: "→"
                    })]
                })]
            }, e.title))
        })]
    })
})
  , ep = [{
    title: "Digital Literacy",
    description: "Learn basic computer and internet skills",
    duration: "3 months",
    icon: $f
}, {
    title: "Photography",
    description: "Master the art of digital photography",
    duration: "2 months",
    icon: If
}, {
    title: "Business Skills",
    description: "Entrepreneurship and business management",
    duration: "4 months",
    icon: Df
}, {
    title: "Language Skills",
    description: "English speaking and writing",
    duration: "3 months",
    icon: Of
}]
  , tp = () => d.jsx("section", {
    id: "skillhub",
    className: "py-20 bg-gray-50",
    children: d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h2", {
                className: "text-3xl font-bold text-gray-900",
                children: "Skill Development Hub"
            }), d.jsx("p", {
                className: "mt-4 text-lg text-gray-600",
                children: "Enhance your skills with our carefully curated courses"
            })]
        }), d.jsx("div", {
            className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
            children: ep.map(e => d.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                children: [d.jsxs("div", {
                    className: "p-6",
                    children: [d.jsx(e.icon, {
                        className: "h-8 w-8 text-green-600"
                    }), d.jsx("h3", {
                        className: "mt-4 text-lg font-medium text-gray-900",
                        children: e.title
                    }), d.jsx("p", {
                        className: "mt-2 text-gray-500",
                        children: e.description
                    }), d.jsx("div", {
                        className: "mt-4 flex items-center text-sm text-gray-500",
                        children: d.jsxs("span", {
                            children: ["Duration: ", e.duration]
                        })
                    })]
                }), d.jsx("div", {
                    className: "px-6 py-4 bg-gray-50",
                    children: d.jsx("button", {
                        className: "w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",
                        children: "Enroll Now"
                    })
                })]
            }, e.title))
        })]
    })
})
  , np = () => d.jsx("section", {
    id: "waste",
    className: "py-20 bg-white",
    children: d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h2", {
                className: "text-3xl font-bold text-gray-900",
                children: "Agri Waste Management"
            }), d.jsx("p", {
                className: "mt-4 text-lg text-gray-600",
                children: "Sustainable solutions for agricultural waste management"
            })]
        }), d.jsxs("div", {
            className: "mt-16",
            children: [d.jsxs("div", {
                className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
                children: [d.jsxs("div", {
                    className: "bg-green-50 p-6 rounded-lg",
                    children: [d.jsx(Qf, {
                        className: "h-8 w-8 text-green-600"
                    }), d.jsx("h3", {
                        className: "mt-4 text-lg font-medium text-gray-900",
                        children: "Waste Collection"
                    }), d.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Schedule pickup for agricultural waste"
                    })]
                }), d.jsxs("div", {
                    className: "bg-green-50 p-6 rounded-lg",
                    children: [d.jsx(Bf, {
                        className: "h-8 w-8 text-green-600"
                    }), d.jsx("h3", {
                        className: "mt-4 text-lg font-medium text-gray-900",
                        children: "Composting"
                    }), d.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Convert waste into valuable compost"
                    })]
                }), d.jsxs("div", {
                    className: "bg-green-50 p-6 rounded-lg",
                    children: [d.jsx(Af, {
                        className: "h-8 w-8 text-green-600"
                    }), d.jsx("h3", {
                        className: "mt-4 text-lg font-medium text-gray-900",
                        children: "Processing"
                    }), d.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Modern waste processing facilities"
                    })]
                }), d.jsxs("div", {
                    className: "bg-green-50 p-6 rounded-lg",
                    children: [d.jsx(Yf, {
                        className: "h-8 w-8 text-green-600"
                    }), d.jsx("h3", {
                        className: "mt-4 text-lg font-medium text-gray-900",
                        children: "Transportation"
                    }), d.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Efficient waste transport services"
                    })]
                })]
            }), d.jsxs("div", {
                className: "mt-12 bg-green-600 rounded-lg p-8 text-white",
                children: [d.jsx("h3", {
                    className: "text-2xl font-bold",
                    children: "Report Waste Collection"
                }), d.jsxs("form", {
                    className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2",
                    children: [d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium",
                            children: "Location"
                        }), d.jsx("input", {
                            type: "text",
                            className: "mt-1 block w-full rounded-md bg-green-500 border-green-400 text-white placeholder-green-200",
                            placeholder: "Enter location"
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium",
                            children: "Waste Type"
                        }), d.jsxs("select", {
                            className: "mt-1 block w-full rounded-md bg-green-500 border-green-400 text-white",
                            children: [d.jsx("option", {
                                children: "Crop Residue"
                            }), d.jsx("option", {
                                children: "Animal Waste"
                            }), d.jsx("option", {
                                children: "Agricultural Plastic"
                            }), d.jsx("option", {
                                children: "Other"
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "md:col-span-2",
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium",
                            children: "Description"
                        }), d.jsx("textarea", {
                            className: "mt-1 block w-full rounded-md bg-green-500 border-green-400 text-white placeholder-green-200",
                            rows: 3,
                            placeholder: "Describe the waste collection needed"
                        })]
                    }), d.jsx("div", {
                        className: "md:col-span-2",
                        children: d.jsx("button", {
                            className: "w-full bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition-colors",
                            children: "Submit Report"
                        })
                    })]
                })]
            })]
        })]
    })
})
  , rp = () => {
    const [e,t] = rt.useState("file");
    return d.jsx("section", {
        id: "complaints",
        className: "py-20 bg-gray-50",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [d.jsxs("div", {
                className: "text-center",
                children: [d.jsx("h2", {
                    className: "text-3xl font-bold text-gray-900",
                    children: "Complaint Portal"
                }), d.jsx("p", {
                    className: "mt-4 text-lg text-gray-600",
                    children: "File and track your complaints efficiently"
                })]
            }), d.jsxs("div", {
                className: "mt-12",
                children: [d.jsx("div", {
                    className: "border-b border-gray-200",
                    children: d.jsxs("nav", {
                        className: "-mb-px flex space-x-8",
                        children: [d.jsx("button", {
                            className: `${e === "file" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,
                            onClick: () => t("file"),
                            children: "File Complaint"
                        }), d.jsx("button", {
                            className: `${e === "track" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,
                            onClick: () => t("track"),
                            children: "Track Complaints"
                        })]
                    })
                }), d.jsx("div", {
                    className: "mt-8",
                    children: e === "file" ? d.jsx("div", {
                        className: "bg-white shadow rounded-lg p-6",
                        children: d.jsxs("form", {
                            className: "space-y-6",
                            children: [d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Category"
                                }), d.jsxs("select", {
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
                                    children: [d.jsx("option", {
                                        children: "Infrastructure"
                                    }), d.jsx("option", {
                                        children: "Water Supply"
                                    }), d.jsx("option", {
                                        children: "Electricity"
                                    }), d.jsx("option", {
                                        children: "Sanitation"
                                    }), d.jsx("option", {
                                        children: "Others"
                                    })]
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Subject"
                                }), d.jsx("input", {
                                    type: "text",
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
                                    placeholder: "Brief subject of your complaint"
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Description"
                                }), d.jsx("textarea", {
                                    rows: 4,
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
                                    placeholder: "Detailed description of your complaint"
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Location"
                                }), d.jsx("input", {
                                    type: "text",
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
                                    placeholder: "Enter location details"
                                })]
                            }), d.jsx("div", {
                                children: d.jsx("button", {
                                    type: "submit",
                                    className: "w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",
                                    children: "Submit Complaint"
                                })
                            })]
                        })
                    }) : d.jsxs("div", {
                        className: "bg-white shadow rounded-lg overflow-hidden",
                        children: [d.jsx("div", {
                            className: "p-4 border-b border-gray-200",
                            children: d.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [d.jsx("h3", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "Recent Complaints"
                                }), d.jsxs("button", {
                                    className: "flex items-center text-sm text-gray-600 hover:text-gray-900",
                                    children: [d.jsx(Hf, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Filter"]
                                })]
                            })
                        }), d.jsxs("div", {
                            className: "divide-y divide-gray-200",
                            children: [d.jsx("div", {
                                className: "p-4",
                                children: d.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [d.jsxs("div", {
                                        children: [d.jsx("h4", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "Road Maintenance Required"
                                        }), d.jsx("p", {
                                            className: "text-sm text-gray-500",
                                            children: "Infrastructure"
                                        })]
                                    }), d.jsxs("span", {
                                        className: "flex items-center text-yellow-600",
                                        children: [d.jsx(Uf, {
                                            className: "h-4 w-4 mr-1"
                                        }), "Pending"]
                                    })]
                                })
                            }), d.jsx("div", {
                                className: "p-4",
                                children: d.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [d.jsxs("div", {
                                        children: [d.jsx("h4", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "Water Supply Issue"
                                        }), d.jsx("p", {
                                            className: "text-sm text-gray-500",
                                            children: "Water Supply"
                                        })]
                                    }), d.jsxs("span", {
                                        className: "flex items-center text-green-600",
                                        children: [d.jsx(Ff, {
                                            className: "h-4 w-4 mr-1"
                                        }), "Resolved"]
                                    })]
                                })
                            }), d.jsx("div", {
                                className: "p-4",
                                children: d.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [d.jsxs("div", {
                                        children: [d.jsx("h4", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "Street Light Not Working"
                                        }), d.jsx("p", {
                                            className: "text-sm text-gray-500",
                                            children: "Electricity"
                                        })]
                                    }), d.jsxs("span", {
                                        className: "flex items-center text-red-600",
                                        children: [d.jsx(Mf, {
                                            className: "h-4 w-4 mr-1"
                                        }), "Escalated"]
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
;
function lp() {
    return d.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-green-50 to-white",
        children: [d.jsx(Zf, {}), d.jsxs("main", {
            children: [d.jsx(Jf, {}), d.jsx(rp, {}), d.jsx(bf, {}), d.jsx(tp, {}), d.jsx(np, {})]
        }), d.jsx("footer", {
            className: "bg-green-900 text-white py-8 mt-20",
            children: d.jsx("div", {
                className: "container mx-auto px-4",
                children: d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "GramSetu"
                    }), d.jsx("p", {
                        className: "text-green-200",
                        children: "Bridging Rural Development Through Technology"
                    })]
                })
            })
        })]
    })
}
tc(document.getElementById("root")).render(d.jsx(rt.StrictMode, {
    children: d.jsx(lp, {})
}));
