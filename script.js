const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/properties-DkqQM_V7.js", "assets/property-card-DFneGOAh.js", "assets/index-DbaXOGLI.js", "assets/properties._slug-CJHCY0Ib.js"]))) => i.map(i => d[i]);
function tS(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Zc = {
    exports: {}
}
  , rs = {};
var qp;
function nS() {
    if (qp)
        return rs;
    qp = 1;
    var n = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function r(l, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            f = {};
            for (var h in u)
                h !== "key" && (f[h] = u[h])
        } else
            f = u;
        return u = f.ref,
        {
            $$typeof: n,
            type: l,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return rs.Fragment = a,
    rs.jsx = r,
    rs.jsxs = r,
    rs
}
var Zp;
function aS() {
    return Zp || (Zp = 1,
    Zc.exports = nS()),
    Zc.exports
}
var P = aS()
  , Vc = {
    exports: {}
}
  , de = {};
var Vp;
function iS() {
    if (Vp)
        return de;
    Vp = 1;
    var n = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , g = Symbol.for("react.activity")
      , _ = Symbol.iterator;
    function x(O) {
        return O === null || typeof O != "object" ? null : (O = _ && O[_] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var R = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , M = Object.assign
      , E = {};
    function C(O, V, F) {
        this.props = O,
        this.context = V,
        this.refs = E,
        this.updater = F || R
    }
    C.prototype.isReactComponent = {},
    C.prototype.setState = function(O, V) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, V, "setState")
    }
    ,
    C.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function H() {}
    H.prototype = C.prototype;
    function Z(O, V, F) {
        this.props = O,
        this.context = V,
        this.refs = E,
        this.updater = F || R
    }
    var k = Z.prototype = new H;
    k.constructor = Z,
    M(k, C.prototype),
    k.isPureReactComponent = !0;
    var I = Array.isArray;
    function J() {}
    var Q = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , G = Object.prototype.hasOwnProperty;
    function $(O, V, F) {
        var W = F.ref;
        return {
            $$typeof: n,
            type: O,
            key: V,
            ref: W !== void 0 ? W : null,
            props: F
        }
    }
    function ce(O, V) {
        return $(O.type, V, O.props)
    }
    function se(O) {
        return typeof O == "object" && O !== null && O.$$typeof === n
    }
    function _e(O) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(F) {
            return V[F]
        })
    }
    var je = /\/+/g;
    function Ie(O, V) {
        return typeof O == "object" && O !== null && O.key != null ? _e("" + O.key) : V.toString(36)
    }
    function Qe(O) {
        switch (O.status) {
        case "fulfilled":
            return O.value;
        case "rejected":
            throw O.reason;
        default:
            switch (typeof O.status == "string" ? O.then(J, J) : (O.status = "pending",
            O.then(function(V) {
                O.status === "pending" && (O.status = "fulfilled",
                O.value = V)
            }, function(V) {
                O.status === "pending" && (O.status = "rejected",
                O.reason = V)
            })),
            O.status) {
            case "fulfilled":
                return O.value;
            case "rejected":
                throw O.reason
            }
        }
        throw O
    }
    function U(O, V, F, W, le) {
        var ge = typeof O;
        (ge === "undefined" || ge === "boolean") && (O = null);
        var Re = !1;
        if (O === null)
            Re = !0;
        else
            switch (ge) {
            case "bigint":
            case "string":
            case "number":
                Re = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case n:
                case a:
                    Re = !0;
                    break;
                case v:
                    return Re = O._init,
                    U(Re(O._payload), V, F, W, le)
                }
            }
        if (Re)
            return le = le(O),
            Re = W === "" ? "." + Ie(O, 0) : W,
            I(le) ? (F = "",
            Re != null && (F = Re.replace(je, "$&/") + "/"),
            U(le, V, F, "", function(yn) {
                return yn
            })) : le != null && (se(le) && (le = ce(le, F + (le.key == null || O && O.key === le.key ? "" : ("" + le.key).replace(je, "$&/") + "/") + Re)),
            V.push(le)),
            1;
        Re = 0;
        var $e = W === "" ? "." : W + ":";
        if (I(O))
            for (var qe = 0; qe < O.length; qe++)
                W = O[qe],
                ge = $e + Ie(W, qe),
                Re += U(W, V, F, ge, le);
        else if (qe = x(O),
        typeof qe == "function")
            for (O = qe.call(O),
            qe = 0; !(W = O.next()).done; )
                W = W.value,
                ge = $e + Ie(W, qe++),
                Re += U(W, V, F, ge, le);
        else if (ge === "object") {
            if (typeof O.then == "function")
                return U(Qe(O), V, F, W, le);
            throw V = String(O),
            Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Re
    }
    function K(O, V, F) {
        if (O == null)
            return O;
        var W = []
          , le = 0;
        return U(O, W, "", "", function(ge) {
            return V.call(F, ge, le++)
        }),
        W
    }
    function oe(O) {
        if (O._status === -1) {
            var V = O._result;
            V = V(),
            V.then(function(F) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = F)
            }, function(F) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = F)
            }),
            O._status === -1 && (O._status = 0,
            O._result = V)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var ze = typeof reportError == "function" ? reportError : function(O) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var V = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
                error: O
            });
            if (!window.dispatchEvent(V))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", O);
            return
        }
        console.error(O)
    }
      , Ne = {
        map: K,
        forEach: function(O, V, F) {
            K(O, function() {
                V.apply(this, arguments)
            }, F)
        },
        count: function(O) {
            var V = 0;
            return K(O, function() {
                V++
            }),
            V
        },
        toArray: function(O) {
            return K(O, function(V) {
                return V
            }) || []
        },
        only: function(O) {
            if (!se(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    };
    return de.Activity = g,
    de.Children = Ne,
    de.Component = C,
    de.Fragment = r,
    de.Profiler = u,
    de.PureComponent = Z,
    de.StrictMode = l,
    de.Suspense = y,
    de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q,
    de.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(O) {
            return Q.H.useMemoCache(O)
        }
    },
    de.cache = function(O) {
        return function() {
            return O.apply(null, arguments)
        }
    }
    ,
    de.cacheSignal = function() {
        return null
    }
    ,
    de.cloneElement = function(O, V, F) {
        if (O == null)
            throw Error("The argument must be a React element, but you passed " + O + ".");
        var W = M({}, O.props)
          , le = O.key;
        if (V != null)
            for (ge in V.key !== void 0 && (le = "" + V.key),
            V)
                !G.call(V, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && V.ref === void 0 || (W[ge] = V[ge]);
        var ge = arguments.length - 2;
        if (ge === 1)
            W.children = F;
        else if (1 < ge) {
            for (var Re = Array(ge), $e = 0; $e < ge; $e++)
                Re[$e] = arguments[$e + 2];
            W.children = Re
        }
        return $(O.type, le, W)
    }
    ,
    de.createContext = function(O) {
        return O = {
            $$typeof: d,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        O.Provider = O,
        O.Consumer = {
            $$typeof: f,
            _context: O
        },
        O
    }
    ,
    de.createElement = function(O, V, F) {
        var W, le = {}, ge = null;
        if (V != null)
            for (W in V.key !== void 0 && (ge = "" + V.key),
            V)
                G.call(V, W) && W !== "key" && W !== "__self" && W !== "__source" && (le[W] = V[W]);
        var Re = arguments.length - 2;
        if (Re === 1)
            le.children = F;
        else if (1 < Re) {
            for (var $e = Array(Re), qe = 0; qe < Re; qe++)
                $e[qe] = arguments[qe + 2];
            le.children = $e
        }
        if (O && O.defaultProps)
            for (W in Re = O.defaultProps,
            Re)
                le[W] === void 0 && (le[W] = Re[W]);
        return $(O, ge, le)
    }
    ,
    de.createRef = function() {
        return {
            current: null
        }
    }
    ,
    de.forwardRef = function(O) {
        return {
            $$typeof: h,
            render: O
        }
    }
    ,
    de.isValidElement = se,
    de.lazy = function(O) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: oe
        }
    }
    ,
    de.memo = function(O, V) {
        return {
            $$typeof: p,
            type: O,
            compare: V === void 0 ? null : V
        }
    }
    ,
    de.startTransition = function(O) {
        var V = Q.T
          , F = {};
        Q.T = F;
        try {
            var W = O()
              , le = Q.S;
            le !== null && le(F, W),
            typeof W == "object" && W !== null && typeof W.then == "function" && W.then(J, ze)
        } catch (ge) {
            ze(ge)
        } finally {
            V !== null && F.types !== null && (V.types = F.types),
            Q.T = V
        }
    }
    ,
    de.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }
    ,
    de.use = function(O) {
        return Q.H.use(O)
    }
    ,
    de.useActionState = function(O, V, F) {
        return Q.H.useActionState(O, V, F)
    }
    ,
    de.useCallback = function(O, V) {
        return Q.H.useCallback(O, V)
    }
    ,
    de.useContext = function(O) {
        return Q.H.useContext(O)
    }
    ,
    de.useDebugValue = function() {}
    ,
    de.useDeferredValue = function(O, V) {
        return Q.H.useDeferredValue(O, V)
    }
    ,
    de.useEffect = function(O, V) {
        return Q.H.useEffect(O, V)
    }
    ,
    de.useEffectEvent = function(O) {
        return Q.H.useEffectEvent(O)
    }
    ,
    de.useId = function() {
        return Q.H.useId()
    }
    ,
    de.useImperativeHandle = function(O, V, F) {
        return Q.H.useImperativeHandle(O, V, F)
    }
    ,
    de.useInsertionEffect = function(O, V) {
        return Q.H.useInsertionEffect(O, V)
    }
    ,
    de.useLayoutEffect = function(O, V) {
        return Q.H.useLayoutEffect(O, V)
    }
    ,
    de.useMemo = function(O, V) {
        return Q.H.useMemo(O, V)
    }
    ,
    de.useOptimistic = function(O, V) {
        return Q.H.useOptimistic(O, V)
    }
    ,
    de.useReducer = function(O, V, F) {
        return Q.H.useReducer(O, V, F)
    }
    ,
    de.useRef = function(O) {
        return Q.H.useRef(O)
    }
    ,
    de.useState = function(O) {
        return Q.H.useState(O)
    }
    ,
    de.useSyncExternalStore = function(O, V, F) {
        return Q.H.useSyncExternalStore(O, V, F)
    }
    ,
    de.useTransition = function() {
        return Q.H.useTransition()
    }
    ,
    de.version = "19.2.5",
    de
}
var Yp;
function ws() {
    return Yp || (Yp = 1,
    Vc.exports = iS()),
    Vc.exports
}
var re = ws();
const ps = tS(re);
var Yc = {
    exports: {}
}
  , ss = {}
  , Qc = {
    exports: {}
}
  , Gc = {};
var Qp;
function rS() {
    return Qp || (Qp = 1,
    (function(n) {
        function a(U, K) {
            var oe = U.length;
            U.push(K);
            e: for (; 0 < oe; ) {
                var ze = oe - 1 >>> 1
                  , Ne = U[ze];
                if (0 < u(Ne, K))
                    U[ze] = K,
                    U[oe] = Ne,
                    oe = ze;
                else
                    break e
            }
        }
        function r(U) {
            return U.length === 0 ? null : U[0]
        }
        function l(U) {
            if (U.length === 0)
                return null;
            var K = U[0]
              , oe = U.pop();
            if (oe !== K) {
                U[0] = oe;
                e: for (var ze = 0, Ne = U.length, O = Ne >>> 1; ze < O; ) {
                    var V = 2 * (ze + 1) - 1
                      , F = U[V]
                      , W = V + 1
                      , le = U[W];
                    if (0 > u(F, oe))
                        W < Ne && 0 > u(le, F) ? (U[ze] = le,
                        U[W] = oe,
                        ze = W) : (U[ze] = F,
                        U[V] = oe,
                        ze = V);
                    else if (W < Ne && 0 > u(le, oe))
                        U[ze] = le,
                        U[W] = oe,
                        ze = W;
                    else
                        break e
                }
            }
            return K
        }
        function u(U, K) {
            var oe = U.sortIndex - K.sortIndex;
            return oe !== 0 ? oe : U.id - K.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , h = d.now();
            n.unstable_now = function() {
                return d.now() - h
            }
        }
        var y = []
          , p = []
          , v = 1
          , g = null
          , _ = 3
          , x = !1
          , R = !1
          , M = !1
          , E = !1
          , C = typeof setTimeout == "function" ? setTimeout : null
          , H = typeof clearTimeout == "function" ? clearTimeout : null
          , Z = typeof setImmediate < "u" ? setImmediate : null;
        function k(U) {
            for (var K = r(p); K !== null; ) {
                if (K.callback === null)
                    l(p);
                else if (K.startTime <= U)
                    l(p),
                    K.sortIndex = K.expirationTime,
                    a(y, K);
                else
                    break;
                K = r(p)
            }
        }
        function I(U) {
            if (M = !1,
            k(U),
            !R)
                if (r(y) !== null)
                    R = !0,
                    J || (J = !0,
                    _e());
                else {
                    var K = r(p);
                    K !== null && Qe(I, K.startTime - U)
                }
        }
        var J = !1
          , Q = -1
          , G = 5
          , $ = -1;
        function ce() {
            return E ? !0 : !(n.unstable_now() - $ < G)
        }
        function se() {
            if (E = !1,
            J) {
                var U = n.unstable_now();
                $ = U;
                var K = !0;
                try {
                    e: {
                        R = !1,
                        M && (M = !1,
                        H(Q),
                        Q = -1),
                        x = !0;
                        var oe = _;
                        try {
                            t: {
                                for (k(U),
                                g = r(y); g !== null && !(g.expirationTime > U && ce()); ) {
                                    var ze = g.callback;
                                    if (typeof ze == "function") {
                                        g.callback = null,
                                        _ = g.priorityLevel;
                                        var Ne = ze(g.expirationTime <= U);
                                        if (U = n.unstable_now(),
                                        typeof Ne == "function") {
                                            g.callback = Ne,
                                            k(U),
                                            K = !0;
                                            break t
                                        }
                                        g === r(y) && l(y),
                                        k(U)
                                    } else
                                        l(y);
                                    g = r(y)
                                }
                                if (g !== null)
                                    K = !0;
                                else {
                                    var O = r(p);
                                    O !== null && Qe(I, O.startTime - U),
                                    K = !1
                                }
                            }
                            break e
                        } finally {
                            g = null,
                            _ = oe,
                            x = !1
                        }
                        K = void 0
                    }
                } finally {
                    K ? _e() : J = !1
                }
            }
        }
        var _e;
        if (typeof Z == "function")
            _e = function() {
                Z(se)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var je = new MessageChannel
              , Ie = je.port2;
            je.port1.onmessage = se,
            _e = function() {
                Ie.postMessage(null)
            }
        } else
            _e = function() {
                C(se, 0)
            }
            ;
        function Qe(U, K) {
            Q = C(function() {
                U(n.unstable_now())
            }, K)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return _
        }
        ,
        n.unstable_next = function(U) {
            switch (_) {
            case 1:
            case 2:
            case 3:
                var K = 3;
                break;
            default:
                K = _
            }
            var oe = _;
            _ = K;
            try {
                return U()
            } finally {
                _ = oe
            }
        }
        ,
        n.unstable_requestPaint = function() {
            E = !0
        }
        ,
        n.unstable_runWithPriority = function(U, K) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var oe = _;
            _ = U;
            try {
                return K()
            } finally {
                _ = oe
            }
        }
        ,
        n.unstable_scheduleCallback = function(U, K, oe) {
            var ze = n.unstable_now();
            switch (typeof oe == "object" && oe !== null ? (oe = oe.delay,
            oe = typeof oe == "number" && 0 < oe ? ze + oe : ze) : oe = ze,
            U) {
            case 1:
                var Ne = -1;
                break;
            case 2:
                Ne = 250;
                break;
            case 5:
                Ne = 1073741823;
                break;
            case 4:
                Ne = 1e4;
                break;
            default:
                Ne = 5e3
            }
            return Ne = oe + Ne,
            U = {
                id: v++,
                callback: K,
                priorityLevel: U,
                startTime: oe,
                expirationTime: Ne,
                sortIndex: -1
            },
            oe > ze ? (U.sortIndex = oe,
            a(p, U),
            r(y) === null && U === r(p) && (M ? (H(Q),
            Q = -1) : M = !0,
            Qe(I, oe - ze))) : (U.sortIndex = Ne,
            a(y, U),
            R || x || (R = !0,
            J || (J = !0,
            _e()))),
            U
        }
        ,
        n.unstable_shouldYield = ce,
        n.unstable_wrapCallback = function(U) {
            var K = _;
            return function() {
                var oe = _;
                _ = K;
                try {
                    return U.apply(this, arguments)
                } finally {
                    _ = oe
                }
            }
        }
    }
    )(Gc)),
    Gc
}
var Gp;
function sS() {
    return Gp || (Gp = 1,
    Qc.exports = rS()),
    Qc.exports
}
var Xc = {
    exports: {}
}
  , _t = {};
var Xp;
function lS() {
    if (Xp)
        return _t;
    Xp = 1;
    var n = ws();
    function a(y) {
        var p = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                p += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var l = {
        d: {
            f: r,
            r: function() {
                throw Error(a(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function f(y, p, v) {
        var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: g == null ? null : "" + g,
            children: y,
            containerInfo: p,
            implementation: v
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(y, p) {
        if (y === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
    _t.createPortal = function(y, p) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(a(299));
        return f(y, p, null, v)
    }
    ,
    _t.flushSync = function(y) {
        var p = d.T
          , v = l.p;
        try {
            if (d.T = null,
            l.p = 2,
            y)
                return y()
        } finally {
            d.T = p,
            l.p = v,
            l.d.f()
        }
    }
    ,
    _t.preconnect = function(y, p) {
        typeof y == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        l.d.C(y, p))
    }
    ,
    _t.prefetchDNS = function(y) {
        typeof y == "string" && l.d.D(y)
    }
    ,
    _t.preinit = function(y, p) {
        if (typeof y == "string" && p && typeof p.as == "string") {
            var v = p.as
              , g = h(v, p.crossOrigin)
              , _ = typeof p.integrity == "string" ? p.integrity : void 0
              , x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            v === "style" ? l.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: g,
                integrity: _,
                fetchPriority: x
            }) : v === "script" && l.d.X(y, {
                crossOrigin: g,
                integrity: _,
                fetchPriority: x,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    _t.preinitModule = function(y, p) {
        if (typeof y == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var v = h(p.as, p.crossOrigin);
                    l.d.M(y, {
                        crossOrigin: v,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && l.d.M(y)
    }
    ,
    _t.preload = function(y, p) {
        if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var v = p.as
              , g = h(v, p.crossOrigin);
            l.d.L(y, v, {
                crossOrigin: g,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    _t.preloadModule = function(y, p) {
        if (typeof y == "string")
            if (p) {
                var v = h(p.as, p.crossOrigin);
                l.d.m(y, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: v,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                l.d.m(y)
    }
    ,
    _t.requestFormReset = function(y) {
        l.d.r(y)
    }
    ,
    _t.unstable_batchedUpdates = function(y, p) {
        return y(p)
    }
    ,
    _t.useFormState = function(y, p, v) {
        return d.H.useFormState(y, p, v)
    }
    ,
    _t.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    _t.version = "19.2.5",
    _t
}
var Pp;
function mg() {
    if (Pp)
        return Xc.exports;
    Pp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (a) {
                console.error(a)
            }
    }
    return n(),
    Xc.exports = lS(),
    Xc.exports
}
var Kp;
function uS() {
    if (Kp)
        return ss;
    Kp = 1;
    var n = sS()
      , a = ws()
      , r = mg();
    function l(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                t += "&args[]=" + encodeURIComponent(arguments[i])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function f(e) {
        var t = e
          , i = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (i = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? i : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function h(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (f(e) !== e)
            throw Error(l(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(l(188));
            return t !== e ? null : e
        }
        for (var i = e, s = t; ; ) {
            var o = i.return;
            if (o === null)
                break;
            var c = o.alternate;
            if (c === null) {
                if (s = o.return,
                s !== null) {
                    i = s;
                    continue
                }
                break
            }
            if (o.child === c.child) {
                for (c = o.child; c; ) {
                    if (c === i)
                        return y(o),
                        e;
                    if (c === s)
                        return y(o),
                        t;
                    c = c.sibling
                }
                throw Error(l(188))
            }
            if (i.return !== s.return)
                i = o,
                s = c;
            else {
                for (var m = !1, b = o.child; b; ) {
                    if (b === i) {
                        m = !0,
                        i = o,
                        s = c;
                        break
                    }
                    if (b === s) {
                        m = !0,
                        s = o,
                        i = c;
                        break
                    }
                    b = b.sibling
                }
                if (!m) {
                    for (b = c.child; b; ) {
                        if (b === i) {
                            m = !0,
                            i = c,
                            s = o;
                            break
                        }
                        if (b === s) {
                            m = !0,
                            s = c,
                            i = o;
                            break
                        }
                        b = b.sibling
                    }
                    if (!m)
                        throw Error(l(189))
                }
            }
            if (i.alternate !== s)
                throw Error(l(190))
        }
        if (i.tag !== 3)
            throw Error(l(188));
        return i.stateNode.current === i ? e : t
    }
    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = v(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var g = Object.assign
      , _ = Symbol.for("react.element")
      , x = Symbol.for("react.transitional.element")
      , R = Symbol.for("react.portal")
      , M = Symbol.for("react.fragment")
      , E = Symbol.for("react.strict_mode")
      , C = Symbol.for("react.profiler")
      , H = Symbol.for("react.consumer")
      , Z = Symbol.for("react.context")
      , k = Symbol.for("react.forward_ref")
      , I = Symbol.for("react.suspense")
      , J = Symbol.for("react.suspense_list")
      , Q = Symbol.for("react.memo")
      , G = Symbol.for("react.lazy")
      , $ = Symbol.for("react.activity")
      , ce = Symbol.for("react.memo_cache_sentinel")
      , se = Symbol.iterator;
    function _e(e) {
        return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var je = Symbol.for("react.client.reference");
    function Ie(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === je ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case M:
            return "Fragment";
        case C:
            return "Profiler";
        case E:
            return "StrictMode";
        case I:
            return "Suspense";
        case J:
            return "SuspenseList";
        case $:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case R:
                return "Portal";
            case Z:
                return e.displayName || "Context";
            case H:
                return (e._context.displayName || "Context") + ".Consumer";
            case k:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Q:
                return t = e.displayName || null,
                t !== null ? t : Ie(e.type) || "Memo";
            case G:
                t = e._payload,
                e = e._init;
                try {
                    return Ie(e(t))
                } catch {}
            }
        return null
    }
    var Qe = Array.isArray
      , U = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , oe = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ze = []
      , Ne = -1;
    function O(e) {
        return {
            current: e
        }
    }
    function V(e) {
        0 > Ne || (e.current = ze[Ne],
        ze[Ne] = null,
        Ne--)
    }
    function F(e, t) {
        Ne++,
        ze[Ne] = e.current,
        e.current = t
    }
    var W = O(null)
      , le = O(null)
      , ge = O(null)
      , Re = O(null);
    function $e(e, t) {
        switch (F(ge, t),
        F(le, e),
        F(W, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? op(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = op(t),
                e = cp(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        V(W),
        F(W, e)
    }
    function qe() {
        V(W),
        V(le),
        V(ge)
    }
    function yn(e) {
        e.memoizedState !== null && F(Re, e);
        var t = W.current
          , i = cp(t, e.type);
        t !== i && (F(le, e),
        F(W, i))
    }
    function gn(e) {
        le.current === e && (V(W),
        V(le)),
        Re.current === e && (V(Re),
        ts._currentValue = oe)
    }
    var Qn, cr;
    function ln(e) {
        if (Qn === void 0)
            try {
                throw Error()
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                Qn = t && t[1] || "",
                cr = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Qn + e + cr
    }
    var fr = !1;
    function ci(e, t) {
        if (!e || fr)
            return "";
        fr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (L) {
                                    var j = L
                                }
                                Reflect.construct(e, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (L) {
                                    j = L
                                }
                                e.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (L) {
                                j = L
                            }
                            (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (L) {
                        if (L && j && typeof L.stack == "string")
                            return [L.stack, j.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = s.DetermineComponentFrameRoot()
              , m = c[0]
              , b = c[1];
            if (m && b) {
                var w = m.split(`
`)
                  , N = b.split(`
`);
                for (o = s = 0; s < w.length && !w[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                for (; o < N.length && !N[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (s === w.length || o === N.length)
                    for (s = w.length - 1,
                    o = N.length - 1; 1 <= s && 0 <= o && w[s] !== N[o]; )
                        o--;
                for (; 1 <= s && 0 <= o; s--,
                o--)
                    if (w[s] !== N[o]) {
                        if (s !== 1 || o !== 1)
                            do
                                if (s--,
                                o--,
                                0 > o || w[s] !== N[o]) {
                                    var B = `
` + w[s].replace(" at new ", " at ");
                                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)),
                                    B
                                }
                            while (1 <= s && 0 <= o);
                        break
                    }
            }
        } finally {
            fr = !1,
            Error.prepareStackTrace = i
        }
        return (i = e ? e.displayName || e.name : "") ? ln(i) : ""
    }
    function Ts(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return ln(e.type);
        case 16:
            return ln("Lazy");
        case 13:
            return e.child !== t && t !== null ? ln("Suspense Fallback") : ln("Suspense");
        case 19:
            return ln("SuspenseList");
        case 0:
        case 15:
            return ci(e.type, !1);
        case 11:
            return ci(e.type.render, !1);
        case 1:
            return ci(e.type, !0);
        case 31:
            return ln("Activity");
        default:
            return ""
        }
    }
    function vn(e) {
        try {
            var t = ""
              , i = null;
            do
                t += Ts(e, i),
                i = e,
                e = e.return;
            while (e);
            return t
        } catch (s) {
            return `
Error generating stack: ` + s.message + `
` + s.stack
        }
    }
    var Na = Object.prototype.hasOwnProperty
      , tn = n.unstable_scheduleCallback
      , dr = n.unstable_cancelCallback
      , As = n.unstable_shouldYield
      , Au = n.unstable_requestPaint
      , St = n.unstable_now
      , Ye = n.unstable_getCurrentPriorityLevel
      , ht = n.unstable_ImmediatePriority
      , un = n.unstable_UserBlockingPriority
      , fi = n.unstable_NormalPriority
      , Uv = n.unstable_LowPriority
      , Yf = n.unstable_IdlePriority
      , Bv = n.log
      , kv = n.unstable_setDisableYieldValue
      , hr = null
      , jt = null;
    function Gn(e) {
        if (typeof Bv == "function" && kv(e),
        jt && typeof jt.setStrictMode == "function")
            try {
                jt.setStrictMode(hr, e)
            } catch {}
    }
    var Lt = Math.clz32 ? Math.clz32 : Zv
      , Hv = Math.log
      , qv = Math.LN2;
    function Zv(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Hv(e) / qv | 0) | 0
    }
    var Os = 256
      , Cs = 262144
      , Ms = 4194304;
    function ja(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
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
            return 64;
        case 128:
            return 128;
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
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function zs(e, t, i) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var o = 0
          , c = e.suspendedLanes
          , m = e.pingedLanes;
        e = e.warmLanes;
        var b = s & 134217727;
        return b !== 0 ? (s = b & ~c,
        s !== 0 ? o = ja(s) : (m &= b,
        m !== 0 ? o = ja(m) : i || (i = b & ~e,
        i !== 0 && (o = ja(i))))) : (b = s & ~c,
        b !== 0 ? o = ja(b) : m !== 0 ? o = ja(m) : i || (i = s & ~e,
        i !== 0 && (o = ja(i)))),
        o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o,
        i = t & -t,
        c >= i || c === 32 && (i & 4194048) !== 0) ? t : o
    }
    function mr(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Vv(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Qf() {
        var e = Ms;
        return Ms <<= 1,
        (Ms & 62914560) === 0 && (Ms = 4194304),
        e
    }
    function Ou(e) {
        for (var t = [], i = 0; 31 > i; i++)
            t.push(e);
        return t
    }
    function pr(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Yv(e, t, i, s, o, c) {
        var m = e.pendingLanes;
        e.pendingLanes = i,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= i,
        e.entangledLanes &= i,
        e.errorRecoveryDisabledLanes &= i,
        e.shellSuspendCounter = 0;
        var b = e.entanglements
          , w = e.expirationTimes
          , N = e.hiddenUpdates;
        for (i = m & ~i; 0 < i; ) {
            var B = 31 - Lt(i)
              , Y = 1 << B;
            b[B] = 0,
            w[B] = -1;
            var j = N[B];
            if (j !== null)
                for (N[B] = null,
                B = 0; B < j.length; B++) {
                    var L = j[B];
                    L !== null && (L.lane &= -536870913)
                }
            i &= ~Y
        }
        s !== 0 && Gf(e, s, 0),
        c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t))
    }
    function Gf(e, t, i) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var s = 31 - Lt(t);
        e.entangledLanes |= t,
        e.entanglements[s] = e.entanglements[s] | 1073741824 | i & 261930
    }
    function Xf(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i; ) {
            var s = 31 - Lt(i)
              , o = 1 << s;
            o & t | e[s] & t && (e[s] |= t),
            i &= ~o
        }
    }
    function Pf(e, t) {
        var i = t & -t;
        return i = (i & 42) !== 0 ? 1 : Cu(i),
        (i & (e.suspendedLanes | t)) !== 0 ? 0 : i
    }
    function Cu(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Mu(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Kf() {
        var e = K.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Np(e.type))
    }
    function Ff(e, t) {
        var i = K.p;
        try {
            return K.p = e,
            t()
        } finally {
            K.p = i
        }
    }
    var Xn = Math.random().toString(36).slice(2)
      , mt = "__reactFiber$" + Xn
      , wt = "__reactProps$" + Xn
      , di = "__reactContainer$" + Xn
      , zu = "__reactEvents$" + Xn
      , Qv = "__reactListeners$" + Xn
      , Gv = "__reactHandles$" + Xn
      , Jf = "__reactResources$" + Xn
      , yr = "__reactMarker$" + Xn;
    function Du(e) {
        delete e[mt],
        delete e[wt],
        delete e[zu],
        delete e[Qv],
        delete e[Gv]
    }
    function hi(e) {
        var t = e[mt];
        if (t)
            return t;
        for (var i = e.parentNode; i; ) {
            if (t = i[di] || i[mt]) {
                if (i = t.alternate,
                t.child !== null || i !== null && i.child !== null)
                    for (e = gp(e); e !== null; ) {
                        if (i = e[mt])
                            return i;
                        e = gp(e)
                    }
                return t
            }
            e = i,
            i = e.parentNode
        }
        return null
    }
    function mi(e) {
        if (e = e[mt] || e[di]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function gr(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function pi(e) {
        var t = e[Jf];
        return t || (t = e[Jf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function ct(e) {
        e[yr] = !0
    }
    var If = new Set
      , $f = {};
    function La(e, t) {
        yi(e, t),
        yi(e + "Capture", t)
    }
    function yi(e, t) {
        for ($f[e] = t,
        e = 0; e < t.length; e++)
            If.add(t[e])
    }
    var Xv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Wf = {}
      , ed = {};
    function Pv(e) {
        return Na.call(ed, e) ? !0 : Na.call(Wf, e) ? !1 : Xv.test(e) ? ed[e] = !0 : (Wf[e] = !0,
        !1)
    }
    function Ds(e, t, i) {
        if (Pv(t))
            if (i === null)
                e.removeAttribute(t);
            else {
                switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var s = t.toLowerCase().slice(0, 5);
                    if (s !== "data-" && s !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + i)
            }
    }
    function Ns(e, t, i) {
        if (i === null)
            e.removeAttribute(t);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + i)
        }
    }
    function bn(e, t, i, s) {
        if (s === null)
            e.removeAttribute(i);
        else {
            switch (typeof s) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(i);
                return
            }
            e.setAttributeNS(t, i, "" + s)
        }
    }
    function Qt(e) {
        switch (typeof e) {
        case "bigint":
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
    function td(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Kv(e, t, i) {
        var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var o = s.get
              , c = s.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(m) {
                    i = "" + m,
                    c.call(this, m)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: s.enumerable
            }),
            {
                getValue: function() {
                    return i
                },
                setValue: function(m) {
                    i = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Nu(e) {
        if (!e._valueTracker) {
            var t = td(e) ? "checked" : "value";
            e._valueTracker = Kv(e, t, "" + e[t])
        }
    }
    function nd(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var i = t.getValue()
          , s = "";
        return e && (s = td(e) ? e.checked ? "true" : "false" : e.value),
        e = s,
        e !== i ? (t.setValue(e),
        !0) : !1
    }
    function js(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Fv = /[\n"\\]/g;
    function Gt(e) {
        return e.replace(Fv, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ju(e, t, i, s, o, c, m, b) {
        e.name = "",
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"),
        t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"),
        t != null ? Lu(e, m, Qt(t)) : i != null ? Lu(e, m, Qt(i)) : s != null && e.removeAttribute("value"),
        o == null && c != null && (e.defaultChecked = !!c),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Qt(b) : e.removeAttribute("name")
    }
    function ad(e, t, i, s, o, c, m, b) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c),
        t != null || i != null) {
            if (!(c !== "submit" && c !== "reset" || t != null)) {
                Nu(e);
                return
            }
            i = i != null ? "" + Qt(i) : "",
            t = t != null ? "" + Qt(t) : i,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        s = s ?? o,
        s = typeof s != "function" && typeof s != "symbol" && !!s,
        e.checked = b ? e.checked : !!s,
        e.defaultChecked = !!s,
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m),
        Nu(e)
    }
    function Lu(e, t, i) {
        t === "number" && js(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i)
    }
    function gi(e, t, i, s) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < i.length; o++)
                t["$" + i[o]] = !0;
            for (i = 0; i < e.length; i++)
                o = t.hasOwnProperty("$" + e[i].value),
                e[i].selected !== o && (e[i].selected = o),
                o && s && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + Qt(i),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === i) {
                    e[o].selected = !0,
                    s && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function id(e, t, i) {
        if (t != null && (t = "" + Qt(t),
        t !== e.value && (e.value = t),
        i == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = i != null ? "" + Qt(i) : ""
    }
    function rd(e, t, i, s) {
        if (t == null) {
            if (s != null) {
                if (i != null)
                    throw Error(l(92));
                if (Qe(s)) {
                    if (1 < s.length)
                        throw Error(l(93));
                    s = s[0]
                }
                i = s
            }
            i == null && (i = ""),
            t = i
        }
        i = Qt(t),
        e.defaultValue = i,
        s = e.textContent,
        s === i && s !== "" && s !== null && (e.value = s),
        Nu(e)
    }
    function vi(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Jv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function sd(e, t, i) {
        var s = t.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, i) : typeof i != "number" || i === 0 || Jv.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px"
    }
    function ld(e, t, i) {
        if (t != null && typeof t != "object")
            throw Error(l(62));
        if (e = e.style,
        i != null) {
            for (var s in i)
                !i.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var o in t)
                s = t[o],
                t.hasOwnProperty(o) && i[o] !== s && sd(e, o, s)
        } else
            for (var c in t)
                t.hasOwnProperty(c) && sd(e, c, t[c])
    }
    function Uu(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
    var Iv = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , $v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ls(e) {
        return $v.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Sn() {}
    var Bu = null;
    function ku(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var bi = null
      , Si = null;
    function ud(e) {
        var t = mi(e);
        if (t && (e = t.stateNode)) {
            var i = e[wt] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ju(e, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name),
                t = i.name,
                i.type === "radio" && t != null) {
                    for (i = e; i.parentNode; )
                        i = i.parentNode;
                    for (i = i.querySelectorAll('input[name="' + Gt("" + t) + '"][type="radio"]'),
                    t = 0; t < i.length; t++) {
                        var s = i[t];
                        if (s !== e && s.form === e.form) {
                            var o = s[wt] || null;
                            if (!o)
                                throw Error(l(90));
                            ju(s, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (t = 0; t < i.length; t++)
                        s = i[t],
                        s.form === e.form && nd(s)
                }
                break e;
            case "textarea":
                id(e, i.value, i.defaultValue);
                break e;
            case "select":
                t = i.value,
                t != null && gi(e, !!i.multiple, t, !1)
            }
        }
    }
    var Hu = !1;
    function od(e, t, i) {
        if (Hu)
            return e(t, i);
        Hu = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (Hu = !1,
            (bi !== null || Si !== null) && (xl(),
            bi && (t = bi,
            e = Si,
            Si = bi = null,
            ud(t),
            e)))
                for (t = 0; t < e.length; t++)
                    ud(e[t])
        }
    }
    function vr(e, t) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var s = i[wt] || null;
        if (s === null)
            return null;
        i = s[t];
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
            (s = !s.disabled) || (e = e.type,
            s = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !s;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(l(231, t, typeof i));
        return i
    }
    var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , qu = !1;
    if (_n)
        try {
            var br = {};
            Object.defineProperty(br, "passive", {
                get: function() {
                    qu = !0
                }
            }),
            window.addEventListener("test", br, br),
            window.removeEventListener("test", br, br)
        } catch {
            qu = !1
        }
    var Pn = null
      , Zu = null
      , Us = null;
    function cd() {
        if (Us)
            return Us;
        var e, t = Zu, i = t.length, s, o = "value"in Pn ? Pn.value : Pn.textContent, c = o.length;
        for (e = 0; e < i && t[e] === o[e]; e++)
            ;
        var m = i - e;
        for (s = 1; s <= m && t[i - s] === o[c - s]; s++)
            ;
        return Us = o.slice(e, 1 < s ? 1 - s : void 0)
    }
    function Bs(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function ks() {
        return !0
    }
    function fd() {
        return !1
    }
    function Rt(e) {
        function t(i, s, o, c, m) {
            this._reactName = i,
            this._targetInst = o,
            this.type = s,
            this.nativeEvent = c,
            this.target = m,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (i = e[b],
                this[b] = i ? i(c) : c[b]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? ks : fd,
            this.isPropagationStopped = fd,
            this
        }
        return g(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                this.isDefaultPrevented = ks)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                this.isPropagationStopped = ks)
            },
            persist: function() {},
            isPersistent: ks
        }),
        t
    }
    var Ua = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Hs = Rt(Ua), Sr = g({}, Ua, {
        view: 0,
        detail: 0
    }), Wv = Rt(Sr), Vu, Yu, _r, qs = g({}, Sr, {
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
        getModifierState: Gu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (Vu = e.screenX - _r.screenX,
            Yu = e.screenY - _r.screenY) : Yu = Vu = 0,
            _r = e),
            Vu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Yu
        }
    }), dd = Rt(qs), e0 = g({}, qs, {
        dataTransfer: 0
    }), t0 = Rt(e0), n0 = g({}, Sr, {
        relatedTarget: 0
    }), Qu = Rt(n0), a0 = g({}, Ua, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), i0 = Rt(a0), r0 = g({}, Ua, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), s0 = Rt(r0), l0 = g({}, Ua, {
        data: 0
    }), hd = Rt(l0), u0 = {
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
    }, o0 = {
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
    }, c0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function f0(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = c0[e]) ? !!t[e] : !1
    }
    function Gu() {
        return f0
    }
    var d0 = g({}, Sr, {
        key: function(e) {
            if (e.key) {
                var t = u0[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Bs(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? o0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Gu,
        charCode: function(e) {
            return e.type === "keypress" ? Bs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Bs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , h0 = Rt(d0)
      , m0 = g({}, qs, {
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
      , md = Rt(m0)
      , p0 = g({}, Sr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Gu
    })
      , y0 = Rt(p0)
      , g0 = g({}, Ua, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , v0 = Rt(g0)
      , b0 = g({}, qs, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , S0 = Rt(b0)
      , _0 = g({}, Ua, {
        newState: 0,
        oldState: 0
    })
      , x0 = Rt(_0)
      , E0 = [9, 13, 27, 32]
      , Xu = _n && "CompositionEvent"in window
      , xr = null;
    _n && "documentMode"in document && (xr = document.documentMode);
    var w0 = _n && "TextEvent"in window && !xr
      , pd = _n && (!Xu || xr && 8 < xr && 11 >= xr)
      , yd = " "
      , gd = !1;
    function vd(e, t) {
        switch (e) {
        case "keyup":
            return E0.indexOf(t.keyCode) !== -1;
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
    function bd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var _i = !1;
    function R0(e, t) {
        switch (e) {
        case "compositionend":
            return bd(t);
        case "keypress":
            return t.which !== 32 ? null : (gd = !0,
            yd);
        case "textInput":
            return e = t.data,
            e === yd && gd ? null : e;
        default:
            return null
        }
    }
    function T0(e, t) {
        if (_i)
            return e === "compositionend" || !Xu && vd(e, t) ? (e = cd(),
            Us = Zu = Pn = null,
            _i = !1,
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
            return pd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var A0 = {
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
    function Sd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!A0[e.type] : t === "textarea"
    }
    function _d(e, t, i, s) {
        bi ? Si ? Si.push(s) : Si = [s] : bi = s,
        t = Cl(t, "onChange"),
        0 < t.length && (i = new Hs("onChange","change",null,i,s),
        e.push({
            event: i,
            listeners: t
        }))
    }
    var Er = null
      , wr = null;
    function O0(e) {
        ap(e, 0)
    }
    function Zs(e) {
        var t = gr(e);
        if (nd(t))
            return e
    }
    function xd(e, t) {
        if (e === "change")
            return t
    }
    var Ed = !1;
    if (_n) {
        var Pu;
        if (_n) {
            var Ku = "oninput"in document;
            if (!Ku) {
                var wd = document.createElement("div");
                wd.setAttribute("oninput", "return;"),
                Ku = typeof wd.oninput == "function"
            }
            Pu = Ku
        } else
            Pu = !1;
        Ed = Pu && (!document.documentMode || 9 < document.documentMode)
    }
    function Rd() {
        Er && (Er.detachEvent("onpropertychange", Td),
        wr = Er = null)
    }
    function Td(e) {
        if (e.propertyName === "value" && Zs(wr)) {
            var t = [];
            _d(t, wr, e, ku(e)),
            od(O0, t)
        }
    }
    function C0(e, t, i) {
        e === "focusin" ? (Rd(),
        Er = t,
        wr = i,
        Er.attachEvent("onpropertychange", Td)) : e === "focusout" && Rd()
    }
    function M0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Zs(wr)
    }
    function z0(e, t) {
        if (e === "click")
            return Zs(t)
    }
    function D0(e, t) {
        if (e === "input" || e === "change")
            return Zs(t)
    }
    function N0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Ut = typeof Object.is == "function" ? Object.is : N0;
    function Rr(e, t) {
        if (Ut(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var i = Object.keys(e)
          , s = Object.keys(t);
        if (i.length !== s.length)
            return !1;
        for (s = 0; s < i.length; s++) {
            var o = i[s];
            if (!Na.call(t, o) || !Ut(e[o], t[o]))
                return !1
        }
        return !0
    }
    function Ad(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Od(e, t) {
        var i = Ad(e);
        e = 0;
        for (var s; i; ) {
            if (i.nodeType === 3) {
                if (s = e + i.textContent.length,
                e <= t && s >= t)
                    return {
                        node: i,
                        offset: t - e
                    };
                e = s
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Ad(i)
        }
    }
    function Cd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Md(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = js(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = t.contentWindow;
            else
                break;
            t = js(e.document)
        }
        return t
    }
    function Fu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var j0 = _n && "documentMode"in document && 11 >= document.documentMode
      , xi = null
      , Ju = null
      , Tr = null
      , Iu = !1;
    function zd(e, t, i) {
        var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Iu || xi == null || xi !== js(s) || (s = xi,
        "selectionStart"in s && Fu(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        Tr && Rr(Tr, s) || (Tr = s,
        s = Cl(Ju, "onSelect"),
        0 < s.length && (t = new Hs("onSelect","select",null,t,i),
        e.push({
            event: t,
            listeners: s
        }),
        t.target = xi)))
    }
    function Ba(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(),
        i["Webkit" + e] = "webkit" + t,
        i["Moz" + e] = "moz" + t,
        i
    }
    var Ei = {
        animationend: Ba("Animation", "AnimationEnd"),
        animationiteration: Ba("Animation", "AnimationIteration"),
        animationstart: Ba("Animation", "AnimationStart"),
        transitionrun: Ba("Transition", "TransitionRun"),
        transitionstart: Ba("Transition", "TransitionStart"),
        transitioncancel: Ba("Transition", "TransitionCancel"),
        transitionend: Ba("Transition", "TransitionEnd")
    }
      , $u = {}
      , Dd = {};
    _n && (Dd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ei.animationend.animation,
    delete Ei.animationiteration.animation,
    delete Ei.animationstart.animation),
    "TransitionEvent"in window || delete Ei.transitionend.transition);
    function ka(e) {
        if ($u[e])
            return $u[e];
        if (!Ei[e])
            return e;
        var t = Ei[e], i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in Dd)
                return $u[e] = t[i];
        return e
    }
    var Nd = ka("animationend")
      , jd = ka("animationiteration")
      , Ld = ka("animationstart")
      , L0 = ka("transitionrun")
      , U0 = ka("transitionstart")
      , B0 = ka("transitioncancel")
      , Ud = ka("transitionend")
      , Bd = new Map
      , Wu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Wu.push("scrollEnd");
    function nn(e, t) {
        Bd.set(e, t),
        La(t, [e])
    }
    var Vs = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Xt = []
      , wi = 0
      , eo = 0;
    function Ys() {
        for (var e = wi, t = eo = wi = 0; t < e; ) {
            var i = Xt[t];
            Xt[t++] = null;
            var s = Xt[t];
            Xt[t++] = null;
            var o = Xt[t];
            Xt[t++] = null;
            var c = Xt[t];
            if (Xt[t++] = null,
            s !== null && o !== null) {
                var m = s.pending;
                m === null ? o.next = o : (o.next = m.next,
                m.next = o),
                s.pending = o
            }
            c !== 0 && kd(i, o, c)
        }
    }
    function Qs(e, t, i, s) {
        Xt[wi++] = e,
        Xt[wi++] = t,
        Xt[wi++] = i,
        Xt[wi++] = s,
        eo |= s,
        e.lanes |= s,
        e = e.alternate,
        e !== null && (e.lanes |= s)
    }
    function to(e, t, i, s) {
        return Qs(e, t, i, s),
        Gs(e)
    }
    function Ha(e, t) {
        return Qs(e, null, null, t),
        Gs(e)
    }
    function kd(e, t, i) {
        e.lanes |= i;
        var s = e.alternate;
        s !== null && (s.lanes |= i);
        for (var o = !1, c = e.return; c !== null; )
            c.childLanes |= i,
            s = c.alternate,
            s !== null && (s.childLanes |= i),
            c.tag === 22 && (e = c.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = c,
            c = c.return;
        return e.tag === 3 ? (c = e.stateNode,
        o && t !== null && (o = 31 - Lt(i),
        e = c.hiddenUpdates,
        s = e[o],
        s === null ? e[o] = [t] : s.push(t),
        t.lane = i | 536870912),
        c) : null
    }
    function Gs(e) {
        if (50 < Kr)
            throw Kr = 0,
            fc = null,
            Error(l(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ri = {};
    function k0(e, t, i, s) {
        this.tag = e,
        this.key = i,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = s,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Bt(e, t, i, s) {
        return new k0(e,t,i,s)
    }
    function no(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function xn(e, t) {
        var i = e.alternate;
        return i === null ? (i = Bt(e.tag, t, e.key, e.mode),
        i.elementType = e.elementType,
        i.type = e.type,
        i.stateNode = e.stateNode,
        i.alternate = e,
        e.alternate = i) : (i.pendingProps = t,
        i.type = e.type,
        i.flags = 0,
        i.subtreeFlags = 0,
        i.deletions = null),
        i.flags = e.flags & 65011712,
        i.childLanes = e.childLanes,
        i.lanes = e.lanes,
        i.child = e.child,
        i.memoizedProps = e.memoizedProps,
        i.memoizedState = e.memoizedState,
        i.updateQueue = e.updateQueue,
        t = e.dependencies,
        i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        i.sibling = e.sibling,
        i.index = e.index,
        i.ref = e.ref,
        i.refCleanup = e.refCleanup,
        i
    }
    function Hd(e, t) {
        e.flags &= 65011714;
        var i = e.alternate;
        return i === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = i.childLanes,
        e.lanes = i.lanes,
        e.child = i.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = i.memoizedProps,
        e.memoizedState = i.memoizedState,
        e.updateQueue = i.updateQueue,
        e.type = i.type,
        t = i.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Xs(e, t, i, s, o, c) {
        var m = 0;
        if (s = e,
        typeof e == "function")
            no(e) && (m = 1);
        else if (typeof e == "string")
            m = Yb(e, i, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case $:
                return e = Bt(31, i, t, o),
                e.elementType = $,
                e.lanes = c,
                e;
            case M:
                return qa(i.children, o, c, t);
            case E:
                m = 8,
                o |= 24;
                break;
            case C:
                return e = Bt(12, i, t, o | 2),
                e.elementType = C,
                e.lanes = c,
                e;
            case I:
                return e = Bt(13, i, t, o),
                e.elementType = I,
                e.lanes = c,
                e;
            case J:
                return e = Bt(19, i, t, o),
                e.elementType = J,
                e.lanes = c,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case Z:
                        m = 10;
                        break e;
                    case H:
                        m = 9;
                        break e;
                    case k:
                        m = 11;
                        break e;
                    case Q:
                        m = 14;
                        break e;
                    case G:
                        m = 16,
                        s = null;
                        break e
                    }
                m = 29,
                i = Error(l(130, e === null ? "null" : typeof e, "")),
                s = null
            }
        return t = Bt(m, i, t, o),
        t.elementType = e,
        t.type = s,
        t.lanes = c,
        t
    }
    function qa(e, t, i, s) {
        return e = Bt(7, e, s, t),
        e.lanes = i,
        e
    }
    function ao(e, t, i) {
        return e = Bt(6, e, null, t),
        e.lanes = i,
        e
    }
    function qd(e) {
        var t = Bt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function io(e, t, i) {
        return t = Bt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = i,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Zd = new WeakMap;
    function Pt(e, t) {
        if (typeof e == "object" && e !== null) {
            var i = Zd.get(e);
            return i !== void 0 ? i : (t = {
                value: e,
                source: t,
                stack: vn(t)
            },
            Zd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: vn(t)
        }
    }
    var Ti = []
      , Ai = 0
      , Ps = null
      , Ar = 0
      , Kt = []
      , Ft = 0
      , Kn = null
      , on = 1
      , cn = "";
    function En(e, t) {
        Ti[Ai++] = Ar,
        Ti[Ai++] = Ps,
        Ps = e,
        Ar = t
    }
    function Vd(e, t, i) {
        Kt[Ft++] = on,
        Kt[Ft++] = cn,
        Kt[Ft++] = Kn,
        Kn = e;
        var s = on;
        e = cn;
        var o = 32 - Lt(s) - 1;
        s &= ~(1 << o),
        i += 1;
        var c = 32 - Lt(t) + o;
        if (30 < c) {
            var m = o - o % 5;
            c = (s & (1 << m) - 1).toString(32),
            s >>= m,
            o -= m,
            on = 1 << 32 - Lt(t) + o | i << o | s,
            cn = c + e
        } else
            on = 1 << c | i << o | s,
            cn = e
    }
    function ro(e) {
        e.return !== null && (En(e, 1),
        Vd(e, 1, 0))
    }
    function so(e) {
        for (; e === Ps; )
            Ps = Ti[--Ai],
            Ti[Ai] = null,
            Ar = Ti[--Ai],
            Ti[Ai] = null;
        for (; e === Kn; )
            Kn = Kt[--Ft],
            Kt[Ft] = null,
            cn = Kt[--Ft],
            Kt[Ft] = null,
            on = Kt[--Ft],
            Kt[Ft] = null
    }
    function Yd(e, t) {
        Kt[Ft++] = on,
        Kt[Ft++] = cn,
        Kt[Ft++] = Kn,
        on = t.id,
        cn = t.overflow,
        Kn = e
    }
    var pt = null
      , Ge = null
      , we = !1
      , Fn = null
      , Jt = !1
      , lo = Error(l(519));
    function Jn(e) {
        var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Or(Pt(t, e)),
        lo
    }
    function Qd(e) {
        var t = e.stateNode
          , i = e.type
          , s = e.memoizedProps;
        switch (t[mt] = e,
        t[wt] = s,
        i) {
        case "dialog":
            Se("cancel", t),
            Se("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Se("load", t);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Jr.length; i++)
                Se(Jr[i], t);
            break;
        case "source":
            Se("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Se("error", t),
            Se("load", t);
            break;
        case "details":
            Se("toggle", t);
            break;
        case "input":
            Se("invalid", t),
            ad(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
            break;
        case "select":
            Se("invalid", t);
            break;
        case "textarea":
            Se("invalid", t),
            rd(t, s.value, s.defaultValue, s.children)
        }
        i = s.children,
        typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || s.suppressHydrationWarning === !0 || lp(t.textContent, i) ? (s.popover != null && (Se("beforetoggle", t),
        Se("toggle", t)),
        s.onScroll != null && Se("scroll", t),
        s.onScrollEnd != null && Se("scrollend", t),
        s.onClick != null && (t.onclick = Sn),
        t = !0) : t = !1,
        t || Jn(e, !0)
    }
    function Gd(e) {
        for (pt = e.return; pt; )
            switch (pt.tag) {
            case 5:
            case 31:
            case 13:
                Jt = !1;
                return;
            case 27:
            case 3:
                Jt = !0;
                return;
            default:
                pt = pt.return
            }
    }
    function Oi(e) {
        if (e !== pt)
            return !1;
        if (!we)
            return Gd(e),
            we = !0,
            !1;
        var t = e.tag, i;
        if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type,
        i = !(i !== "form" && i !== "button") || Tc(e.type, e.memoizedProps)),
        i = !i),
        i && Ge && Jn(e),
        Gd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            Ge = yp(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            Ge = yp(e)
        } else
            t === 27 ? (t = Ge,
            ca(e.type) ? (e = zc,
            zc = null,
            Ge = e) : Ge = t) : Ge = pt ? $t(e.stateNode.nextSibling) : null;
        return !0
    }
    function Za() {
        Ge = pt = null,
        we = !1
    }
    function uo() {
        var e = Fn;
        return e !== null && (Ct === null ? Ct = e : Ct.push.apply(Ct, e),
        Fn = null),
        e
    }
    function Or(e) {
        Fn === null ? Fn = [e] : Fn.push(e)
    }
    var oo = O(null)
      , Va = null
      , wn = null;
    function In(e, t, i) {
        F(oo, t._currentValue),
        t._currentValue = i
    }
    function Rn(e) {
        e._currentValue = oo.current,
        V(oo)
    }
    function co(e, t, i) {
        for (; e !== null; ) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
            e === i)
                break;
            e = e.return
        }
    }
    function fo(e, t, i, s) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
                var m = o.child;
                c = c.firstContext;
                e: for (; c !== null; ) {
                    var b = c;
                    c = o;
                    for (var w = 0; w < t.length; w++)
                        if (b.context === t[w]) {
                            c.lanes |= i,
                            b = c.alternate,
                            b !== null && (b.lanes |= i),
                            co(c.return, i, e),
                            s || (m = null);
                            break e
                        }
                    c = b.next
                }
            } else if (o.tag === 18) {
                if (m = o.return,
                m === null)
                    throw Error(l(341));
                m.lanes |= i,
                c = m.alternate,
                c !== null && (c.lanes |= i),
                co(m, i, e),
                m = null
            } else
                m = o.child;
            if (m !== null)
                m.return = o;
            else
                for (m = o; m !== null; ) {
                    if (m === e) {
                        m = null;
                        break
                    }
                    if (o = m.sibling,
                    o !== null) {
                        o.return = m.return,
                        m = o;
                        break
                    }
                    m = m.return
                }
            o = m
        }
    }
    function Ci(e, t, i, s) {
        e = null;
        for (var o = t, c = !1; o !== null; ) {
            if (!c) {
                if ((o.flags & 524288) !== 0)
                    c = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var m = o.alternate;
                if (m === null)
                    throw Error(l(387));
                if (m = m.memoizedProps,
                m !== null) {
                    var b = o.type;
                    Ut(o.pendingProps.value, m.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (o === Re.current) {
                if (m = o.alternate,
                m === null)
                    throw Error(l(387));
                m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ts) : e = [ts])
            }
            o = o.return
        }
        e !== null && fo(t, e, i, s),
        t.flags |= 262144
    }
    function Ks(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Ut(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ya(e) {
        Va = e,
        wn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function yt(e) {
        return Xd(Va, e)
    }
    function Fs(e, t) {
        return Va === null && Ya(e),
        Xd(e, t)
    }
    function Xd(e, t) {
        var i = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: i,
            next: null
        },
        wn === null) {
            if (e === null)
                throw Error(l(308));
            wn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            wn = wn.next = t;
        return i
    }
    var H0 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(i, s) {
                e.push(s)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(i) {
                return i()
            })
        }
    }
      , q0 = n.unstable_scheduleCallback
      , Z0 = n.unstable_NormalPriority
      , tt = {
        $$typeof: Z,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ho() {
        return {
            controller: new H0,
            data: new Map,
            refCount: 0
        }
    }
    function Cr(e) {
        e.refCount--,
        e.refCount === 0 && q0(Z0, function() {
            e.controller.abort()
        })
    }
    var Mr = null
      , mo = 0
      , Mi = 0
      , zi = null;
    function V0(e, t) {
        if (Mr === null) {
            var i = Mr = [];
            mo = 0,
            Mi = gc(),
            zi = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    i.push(s)
                }
            }
        }
        return mo++,
        t.then(Pd, Pd),
        t
    }
    function Pd() {
        if (--mo === 0 && Mr !== null) {
            zi !== null && (zi.status = "fulfilled");
            var e = Mr;
            Mr = null,
            Mi = 0,
            zi = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Y0(e, t) {
        var i = []
          , s = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                i.push(o)
            }
        };
        return e.then(function() {
            s.status = "fulfilled",
            s.value = t;
            for (var o = 0; o < i.length; o++)
                (0,
                i[o])(t)
        }, function(o) {
            for (s.status = "rejected",
            s.reason = o,
            o = 0; o < i.length; o++)
                (0,
                i[o])(void 0)
        }),
        s
    }
    var Kd = U.S;
    U.S = function(e, t) {
        zm = St(),
        typeof t == "object" && t !== null && typeof t.then == "function" && V0(e, t),
        Kd !== null && Kd(e, t)
    }
    ;
    var Qa = O(null);
    function po() {
        var e = Qa.current;
        return e !== null ? e : Ze.pooledCache
    }
    function Js(e, t) {
        t === null ? F(Qa, Qa.current) : F(Qa, t.pool)
    }
    function Fd() {
        var e = po();
        return e === null ? null : {
            parent: tt._currentValue,
            pool: e
        }
    }
    var Di = Error(l(460))
      , yo = Error(l(474))
      , Is = Error(l(542))
      , $s = {
        then: function() {}
    };
    function Jd(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Id(e, t, i) {
        switch (i = e[i],
        i === void 0 ? e.push(t) : i !== t && (t.then(Sn, Sn),
        t = i),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Wd(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Sn, Sn);
            else {
                if (e = Ze,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(l(482));
                e = t,
                e.status = "pending",
                e.then(function(s) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "fulfilled",
                        o.value = s
                    }
                }, function(s) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "rejected",
                        o.reason = s
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Wd(e),
                e
            }
            throw Xa = t,
            Di
        }
    }
    function Ga(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (i) {
            throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Xa = i,
            Di) : i
        }
    }
    var Xa = null;
    function $d() {
        if (Xa === null)
            throw Error(l(459));
        var e = Xa;
        return Xa = null,
        e
    }
    function Wd(e) {
        if (e === Di || e === Is)
            throw Error(l(483))
    }
    var Ni = null
      , zr = 0;
    function Ws(e) {
        var t = zr;
        return zr += 1,
        Ni === null && (Ni = []),
        Id(Ni, e, t)
    }
    function Dr(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function el(e, t) {
        throw t.$$typeof === _ ? Error(l(525)) : (e = Object.prototype.toString.call(t),
        Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function eh(e) {
        function t(z, A) {
            if (e) {
                var D = z.deletions;
                D === null ? (z.deletions = [A],
                z.flags |= 16) : D.push(A)
            }
        }
        function i(z, A) {
            if (!e)
                return null;
            for (; A !== null; )
                t(z, A),
                A = A.sibling;
            return null
        }
        function s(z) {
            for (var A = new Map; z !== null; )
                z.key !== null ? A.set(z.key, z) : A.set(z.index, z),
                z = z.sibling;
            return A
        }
        function o(z, A) {
            return z = xn(z, A),
            z.index = 0,
            z.sibling = null,
            z
        }
        function c(z, A, D) {
            return z.index = D,
            e ? (D = z.alternate,
            D !== null ? (D = D.index,
            D < A ? (z.flags |= 67108866,
            A) : D) : (z.flags |= 67108866,
            A)) : (z.flags |= 1048576,
            A)
        }
        function m(z) {
            return e && z.alternate === null && (z.flags |= 67108866),
            z
        }
        function b(z, A, D, q) {
            return A === null || A.tag !== 6 ? (A = ao(D, z.mode, q),
            A.return = z,
            A) : (A = o(A, D),
            A.return = z,
            A)
        }
        function w(z, A, D, q) {
            var ue = D.type;
            return ue === M ? B(z, A, D.props.children, q, D.key) : A !== null && (A.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === G && Ga(ue) === A.type) ? (A = o(A, D.props),
            Dr(A, D),
            A.return = z,
            A) : (A = Xs(D.type, D.key, D.props, null, z.mode, q),
            Dr(A, D),
            A.return = z,
            A)
        }
        function N(z, A, D, q) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = io(D, z.mode, q),
            A.return = z,
            A) : (A = o(A, D.children || []),
            A.return = z,
            A)
        }
        function B(z, A, D, q, ue) {
            return A === null || A.tag !== 7 ? (A = qa(D, z.mode, q, ue),
            A.return = z,
            A) : (A = o(A, D),
            A.return = z,
            A)
        }
        function Y(z, A, D) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = ao("" + A, z.mode, D),
                A.return = z,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case x:
                    return D = Xs(A.type, A.key, A.props, null, z.mode, D),
                    Dr(D, A),
                    D.return = z,
                    D;
                case R:
                    return A = io(A, z.mode, D),
                    A.return = z,
                    A;
                case G:
                    return A = Ga(A),
                    Y(z, A, D)
                }
                if (Qe(A) || _e(A))
                    return A = qa(A, z.mode, D, null),
                    A.return = z,
                    A;
                if (typeof A.then == "function")
                    return Y(z, Ws(A), D);
                if (A.$$typeof === Z)
                    return Y(z, Fs(z, A), D);
                el(z, A)
            }
            return null
        }
        function j(z, A, D, q) {
            var ue = A !== null ? A.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return ue !== null ? null : b(z, A, "" + D, q);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case x:
                    return D.key === ue ? w(z, A, D, q) : null;
                case R:
                    return D.key === ue ? N(z, A, D, q) : null;
                case G:
                    return D = Ga(D),
                    j(z, A, D, q)
                }
                if (Qe(D) || _e(D))
                    return ue !== null ? null : B(z, A, D, q, null);
                if (typeof D.then == "function")
                    return j(z, A, Ws(D), q);
                if (D.$$typeof === Z)
                    return j(z, A, Fs(z, D), q);
                el(z, D)
            }
            return null
        }
        function L(z, A, D, q, ue) {
            if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
                return z = z.get(D) || null,
                b(A, z, "" + q, ue);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                case x:
                    return z = z.get(q.key === null ? D : q.key) || null,
                    w(A, z, q, ue);
                case R:
                    return z = z.get(q.key === null ? D : q.key) || null,
                    N(A, z, q, ue);
                case G:
                    return q = Ga(q),
                    L(z, A, D, q, ue)
                }
                if (Qe(q) || _e(q))
                    return z = z.get(D) || null,
                    B(A, z, q, ue, null);
                if (typeof q.then == "function")
                    return L(z, A, D, Ws(q), ue);
                if (q.$$typeof === Z)
                    return L(z, A, D, Fs(A, q), ue);
                el(A, q)
            }
            return null
        }
        function te(z, A, D, q) {
            for (var ue = null, Ae = null, ae = A, ye = A = 0, Ee = null; ae !== null && ye < D.length; ye++) {
                ae.index > ye ? (Ee = ae,
                ae = null) : Ee = ae.sibling;
                var Oe = j(z, ae, D[ye], q);
                if (Oe === null) {
                    ae === null && (ae = Ee);
                    break
                }
                e && ae && Oe.alternate === null && t(z, ae),
                A = c(Oe, A, ye),
                Ae === null ? ue = Oe : Ae.sibling = Oe,
                Ae = Oe,
                ae = Ee
            }
            if (ye === D.length)
                return i(z, ae),
                we && En(z, ye),
                ue;
            if (ae === null) {
                for (; ye < D.length; ye++)
                    ae = Y(z, D[ye], q),
                    ae !== null && (A = c(ae, A, ye),
                    Ae === null ? ue = ae : Ae.sibling = ae,
                    Ae = ae);
                return we && En(z, ye),
                ue
            }
            for (ae = s(ae); ye < D.length; ye++)
                Ee = L(ae, z, ye, D[ye], q),
                Ee !== null && (e && Ee.alternate !== null && ae.delete(Ee.key === null ? ye : Ee.key),
                A = c(Ee, A, ye),
                Ae === null ? ue = Ee : Ae.sibling = Ee,
                Ae = Ee);
            return e && ae.forEach(function(pa) {
                return t(z, pa)
            }),
            we && En(z, ye),
            ue
        }
        function fe(z, A, D, q) {
            if (D == null)
                throw Error(l(151));
            for (var ue = null, Ae = null, ae = A, ye = A = 0, Ee = null, Oe = D.next(); ae !== null && !Oe.done; ye++,
            Oe = D.next()) {
                ae.index > ye ? (Ee = ae,
                ae = null) : Ee = ae.sibling;
                var pa = j(z, ae, Oe.value, q);
                if (pa === null) {
                    ae === null && (ae = Ee);
                    break
                }
                e && ae && pa.alternate === null && t(z, ae),
                A = c(pa, A, ye),
                Ae === null ? ue = pa : Ae.sibling = pa,
                Ae = pa,
                ae = Ee
            }
            if (Oe.done)
                return i(z, ae),
                we && En(z, ye),
                ue;
            if (ae === null) {
                for (; !Oe.done; ye++,
                Oe = D.next())
                    Oe = Y(z, Oe.value, q),
                    Oe !== null && (A = c(Oe, A, ye),
                    Ae === null ? ue = Oe : Ae.sibling = Oe,
                    Ae = Oe);
                return we && En(z, ye),
                ue
            }
            for (ae = s(ae); !Oe.done; ye++,
            Oe = D.next())
                Oe = L(ae, z, ye, Oe.value, q),
                Oe !== null && (e && Oe.alternate !== null && ae.delete(Oe.key === null ? ye : Oe.key),
                A = c(Oe, A, ye),
                Ae === null ? ue = Oe : Ae.sibling = Oe,
                Ae = Oe);
            return e && ae.forEach(function(eS) {
                return t(z, eS)
            }),
            we && En(z, ye),
            ue
        }
        function He(z, A, D, q) {
            if (typeof D == "object" && D !== null && D.type === M && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case x:
                    e: {
                        for (var ue = D.key; A !== null; ) {
                            if (A.key === ue) {
                                if (ue = D.type,
                                ue === M) {
                                    if (A.tag === 7) {
                                        i(z, A.sibling),
                                        q = o(A, D.props.children),
                                        q.return = z,
                                        z = q;
                                        break e
                                    }
                                } else if (A.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === G && Ga(ue) === A.type) {
                                    i(z, A.sibling),
                                    q = o(A, D.props),
                                    Dr(q, D),
                                    q.return = z,
                                    z = q;
                                    break e
                                }
                                i(z, A);
                                break
                            } else
                                t(z, A);
                            A = A.sibling
                        }
                        D.type === M ? (q = qa(D.props.children, z.mode, q, D.key),
                        q.return = z,
                        z = q) : (q = Xs(D.type, D.key, D.props, null, z.mode, q),
                        Dr(q, D),
                        q.return = z,
                        z = q)
                    }
                    return m(z);
                case R:
                    e: {
                        for (ue = D.key; A !== null; ) {
                            if (A.key === ue)
                                if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                                    i(z, A.sibling),
                                    q = o(A, D.children || []),
                                    q.return = z,
                                    z = q;
                                    break e
                                } else {
                                    i(z, A);
                                    break
                                }
                            else
                                t(z, A);
                            A = A.sibling
                        }
                        q = io(D, z.mode, q),
                        q.return = z,
                        z = q
                    }
                    return m(z);
                case G:
                    return D = Ga(D),
                    He(z, A, D, q)
                }
                if (Qe(D))
                    return te(z, A, D, q);
                if (_e(D)) {
                    if (ue = _e(D),
                    typeof ue != "function")
                        throw Error(l(150));
                    return D = ue.call(D),
                    fe(z, A, D, q)
                }
                if (typeof D.then == "function")
                    return He(z, A, Ws(D), q);
                if (D.$$typeof === Z)
                    return He(z, A, Fs(z, D), q);
                el(z, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D,
            A !== null && A.tag === 6 ? (i(z, A.sibling),
            q = o(A, D),
            q.return = z,
            z = q) : (i(z, A),
            q = ao(D, z.mode, q),
            q.return = z,
            z = q),
            m(z)) : i(z, A)
        }
        return function(z, A, D, q) {
            try {
                zr = 0;
                var ue = He(z, A, D, q);
                return Ni = null,
                ue
            } catch (ae) {
                if (ae === Di || ae === Is)
                    throw ae;
                var Ae = Bt(29, ae, null, z.mode);
                return Ae.lanes = q,
                Ae.return = z,
                Ae
            }
        }
    }
    var Pa = eh(!0)
      , th = eh(!1)
      , $n = !1;
    function go(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function vo(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Wn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ea(e, t, i) {
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (De & 2) !== 0) {
            var o = s.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            s.pending = t,
            t = Gs(e),
            kd(e, null, i),
            t
        }
        return Qs(e, s, t, i),
        Gs(e)
    }
    function Nr(e, t, i) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (i & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
            i |= s,
            t.lanes = i,
            Xf(e, i)
        }
    }
    function bo(e, t) {
        var i = e.updateQueue
          , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
        i === s)) {
            var o = null
              , c = null;
            if (i = i.firstBaseUpdate,
            i !== null) {
                do {
                    var m = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? o = c = m : c = c.next = m,
                    i = i.next
                } while (i !== null);
                c === null ? o = c = t : c = c.next = t
            } else
                o = c = t;
            i = {
                baseState: s.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: s.shared,
                callbacks: s.callbacks
            },
            e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
        e === null ? i.firstBaseUpdate = t : e.next = t,
        i.lastBaseUpdate = t
    }
    var So = !1;
    function jr() {
        if (So) {
            var e = zi;
            if (e !== null)
                throw e
        }
    }
    function Lr(e, t, i, s) {
        So = !1;
        var o = e.updateQueue;
        $n = !1;
        var c = o.firstBaseUpdate
          , m = o.lastBaseUpdate
          , b = o.shared.pending;
        if (b !== null) {
            o.shared.pending = null;
            var w = b
              , N = w.next;
            w.next = null,
            m === null ? c = N : m.next = N,
            m = w;
            var B = e.alternate;
            B !== null && (B = B.updateQueue,
            b = B.lastBaseUpdate,
            b !== m && (b === null ? B.firstBaseUpdate = N : b.next = N,
            B.lastBaseUpdate = w))
        }
        if (c !== null) {
            var Y = o.baseState;
            m = 0,
            B = N = w = null,
            b = c;
            do {
                var j = b.lane & -536870913
                  , L = j !== b.lane;
                if (L ? (xe & j) === j : (s & j) === j) {
                    j !== 0 && j === Mi && (So = !0),
                    B !== null && (B = B.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var te = e
                          , fe = b;
                        j = t;
                        var He = i;
                        switch (fe.tag) {
                        case 1:
                            if (te = fe.payload,
                            typeof te == "function") {
                                Y = te.call(He, Y, j);
                                break e
                            }
                            Y = te;
                            break e;
                        case 3:
                            te.flags = te.flags & -65537 | 128;
                        case 0:
                            if (te = fe.payload,
                            j = typeof te == "function" ? te.call(He, Y, j) : te,
                            j == null)
                                break e;
                            Y = g({}, Y, j);
                            break e;
                        case 2:
                            $n = !0
                        }
                    }
                    j = b.callback,
                    j !== null && (e.flags |= 64,
                    L && (e.flags |= 8192),
                    L = o.callbacks,
                    L === null ? o.callbacks = [j] : L.push(j))
                } else
                    L = {
                        lane: j,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    B === null ? (N = B = L,
                    w = Y) : B = B.next = L,
                    m |= j;
                if (b = b.next,
                b === null) {
                    if (b = o.shared.pending,
                    b === null)
                        break;
                    L = b,
                    b = L.next,
                    L.next = null,
                    o.lastBaseUpdate = L,
                    o.shared.pending = null
                }
            } while (!0);
            B === null && (w = Y),
            o.baseState = w,
            o.firstBaseUpdate = N,
            o.lastBaseUpdate = B,
            c === null && (o.shared.lanes = 0),
            ra |= m,
            e.lanes = m,
            e.memoizedState = Y
        }
    }
    function nh(e, t) {
        if (typeof e != "function")
            throw Error(l(191, e));
        e.call(t)
    }
    function ah(e, t) {
        var i = e.callbacks;
        if (i !== null)
            for (e.callbacks = null,
            e = 0; e < i.length; e++)
                nh(i[e], t)
    }
    var ji = O(null)
      , tl = O(0);
    function ih(e, t) {
        e = jn,
        F(tl, e),
        F(ji, t),
        jn = e | t.baseLanes
    }
    function _o() {
        F(tl, jn),
        F(ji, ji.current)
    }
    function xo() {
        jn = tl.current,
        V(ji),
        V(tl)
    }
    var kt = O(null)
      , It = null;
    function ta(e) {
        var t = e.alternate;
        F(We, We.current & 1),
        F(kt, e),
        It === null && (t === null || ji.current !== null || t.memoizedState !== null) && (It = e)
    }
    function Eo(e) {
        F(We, We.current),
        F(kt, e),
        It === null && (It = e)
    }
    function rh(e) {
        e.tag === 22 ? (F(We, We.current),
        F(kt, e),
        It === null && (It = e)) : na()
    }
    function na() {
        F(We, We.current),
        F(kt, kt.current)
    }
    function Ht(e) {
        V(kt),
        It === e && (It = null),
        V(We)
    }
    var We = O(0);
    function nl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated,
                i === null || Cc(i) || Mc(i)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
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
    var Tn = 0
      , pe = null
      , Be = null
      , nt = null
      , al = !1
      , Li = !1
      , Ka = !1
      , il = 0
      , Ur = 0
      , Ui = null
      , Q0 = 0;
    function Fe() {
        throw Error(l(321))
    }
    function wo(e, t) {
        if (t === null)
            return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Ut(e[i], t[i]))
                return !1;
        return !0
    }
    function Ro(e, t, i, s, o, c) {
        return Tn = c,
        pe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        U.H = e === null || e.memoizedState === null ? Vh : qo,
        Ka = !1,
        c = i(s, o),
        Ka = !1,
        Li && (c = lh(t, i, s, o)),
        sh(e),
        c
    }
    function sh(e) {
        U.H = Hr;
        var t = Be !== null && Be.next !== null;
        if (Tn = 0,
        nt = Be = pe = null,
        al = !1,
        Ur = 0,
        Ui = null,
        t)
            throw Error(l(300));
        e === null || at || (e = e.dependencies,
        e !== null && Ks(e) && (at = !0))
    }
    function lh(e, t, i, s) {
        pe = e;
        var o = 0;
        do {
            if (Li && (Ui = null),
            Ur = 0,
            Li = !1,
            25 <= o)
                throw Error(l(301));
            if (o += 1,
            nt = Be = null,
            e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            U.H = Yh,
            c = t(i, s)
        } while (Li);
        return c
    }
    function G0() {
        var e = U.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Br(t) : t,
        e = e.useState()[0],
        (Be !== null ? Be.memoizedState : null) !== e && (pe.flags |= 1024),
        t
    }
    function To() {
        var e = il !== 0;
        return il = 0,
        e
    }
    function Ao(e, t, i) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~i
    }
    function Oo(e) {
        if (al) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            al = !1
        }
        Tn = 0,
        nt = Be = pe = null,
        Li = !1,
        Ur = il = 0,
        Ui = null
    }
    function xt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return nt === null ? pe.memoizedState = nt = e : nt = nt.next = e,
        nt
    }
    function et() {
        if (Be === null) {
            var e = pe.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Be.next;
        var t = nt === null ? pe.memoizedState : nt.next;
        if (t !== null)
            nt = t,
            Be = e;
        else {
            if (e === null)
                throw pe.alternate === null ? Error(l(467)) : Error(l(310));
            Be = e,
            e = {
                memoizedState: Be.memoizedState,
                baseState: Be.baseState,
                baseQueue: Be.baseQueue,
                queue: Be.queue,
                next: null
            },
            nt === null ? pe.memoizedState = nt = e : nt = nt.next = e
        }
        return nt
    }
    function rl() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Br(e) {
        var t = Ur;
        return Ur += 1,
        Ui === null && (Ui = []),
        e = Id(Ui, e, t),
        t = pe,
        (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate,
        U.H = t === null || t.memoizedState === null ? Vh : qo),
        e
    }
    function sl(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Br(e);
            if (e.$$typeof === Z)
                return yt(e)
        }
        throw Error(l(438, String(e)))
    }
    function Co(e) {
        var t = null
          , i = pe.updateQueue;
        if (i !== null && (t = i.memoCache),
        t == null) {
            var s = pe.alternate;
            s !== null && (s = s.updateQueue,
            s !== null && (s = s.memoCache,
            s != null && (t = {
                data: s.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        i === null && (i = rl(),
        pe.updateQueue = i),
        i.memoCache = t,
        i = t.data[t.index],
        i === void 0)
            for (i = t.data[t.index] = Array(e),
            s = 0; s < e; s++)
                i[s] = ce;
        return t.index++,
        i
    }
    function An(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ll(e) {
        var t = et();
        return Mo(t, Be, e)
    }
    function Mo(e, t, i) {
        var s = e.queue;
        if (s === null)
            throw Error(l(311));
        s.lastRenderedReducer = i;
        var o = e.baseQueue
          , c = s.pending;
        if (c !== null) {
            if (o !== null) {
                var m = o.next;
                o.next = c.next,
                c.next = m
            }
            t.baseQueue = o = c,
            s.pending = null
        }
        if (c = e.baseState,
        o === null)
            e.memoizedState = c;
        else {
            t = o.next;
            var b = m = null
              , w = null
              , N = t
              , B = !1;
            do {
                var Y = N.lane & -536870913;
                if (Y !== N.lane ? (xe & Y) === Y : (Tn & Y) === Y) {
                    var j = N.revertLane;
                    if (j === 0)
                        w !== null && (w = w.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }),
                        Y === Mi && (B = !0);
                    else if ((Tn & j) === j) {
                        N = N.next,
                        j === Mi && (B = !0);
                        continue
                    } else
                        Y = {
                            lane: 0,
                            revertLane: N.revertLane,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        },
                        w === null ? (b = w = Y,
                        m = c) : w = w.next = Y,
                        pe.lanes |= j,
                        ra |= j;
                    Y = N.action,
                    Ka && i(c, Y),
                    c = N.hasEagerState ? N.eagerState : i(c, Y)
                } else
                    j = {
                        lane: Y,
                        revertLane: N.revertLane,
                        gesture: N.gesture,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    },
                    w === null ? (b = w = j,
                    m = c) : w = w.next = j,
                    pe.lanes |= Y,
                    ra |= Y;
                N = N.next
            } while (N !== null && N !== t);
            if (w === null ? m = c : w.next = b,
            !Ut(c, e.memoizedState) && (at = !0,
            B && (i = zi,
            i !== null)))
                throw i;
            e.memoizedState = c,
            e.baseState = m,
            e.baseQueue = w,
            s.lastRenderedState = c
        }
        return o === null && (s.lanes = 0),
        [e.memoizedState, s.dispatch]
    }
    function zo(e) {
        var t = et()
          , i = t.queue;
        if (i === null)
            throw Error(l(311));
        i.lastRenderedReducer = e;
        var s = i.dispatch
          , o = i.pending
          , c = t.memoizedState;
        if (o !== null) {
            i.pending = null;
            var m = o = o.next;
            do
                c = e(c, m.action),
                m = m.next;
            while (m !== o);
            Ut(c, t.memoizedState) || (at = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            i.lastRenderedState = c
        }
        return [c, s]
    }
    function uh(e, t, i) {
        var s = pe
          , o = et()
          , c = we;
        if (c) {
            if (i === void 0)
                throw Error(l(407));
            i = i()
        } else
            i = t();
        var m = !Ut((Be || o).memoizedState, i);
        if (m && (o.memoizedState = i,
        at = !0),
        o = o.queue,
        jo(fh.bind(null, s, o, e), [e]),
        o.getSnapshot !== t || m || nt !== null && nt.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            Bi(9, {
                destroy: void 0
            }, ch.bind(null, s, o, i, t), null),
            Ze === null)
                throw Error(l(349));
            c || (Tn & 127) !== 0 || oh(s, t, i)
        }
        return i
    }
    function oh(e, t, i) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: i
        },
        t = pe.updateQueue,
        t === null ? (t = rl(),
        pe.updateQueue = t,
        t.stores = [e]) : (i = t.stores,
        i === null ? t.stores = [e] : i.push(e))
    }
    function ch(e, t, i, s) {
        t.value = i,
        t.getSnapshot = s,
        dh(t) && hh(e)
    }
    function fh(e, t, i) {
        return i(function() {
            dh(t) && hh(e)
        })
    }
    function dh(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Ut(e, i)
        } catch {
            return !0
        }
    }
    function hh(e) {
        var t = Ha(e, 2);
        t !== null && Mt(t, e, 2)
    }
    function Do(e) {
        var t = xt();
        if (typeof e == "function") {
            var i = e;
            if (e = i(),
            Ka) {
                Gn(!0);
                try {
                    i()
                } finally {
                    Gn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: An,
            lastRenderedState: e
        },
        t
    }
    function mh(e, t, i, s) {
        return e.baseState = i,
        Mo(e, Be, typeof s == "function" ? s : An)
    }
    function X0(e, t, i, s, o) {
        if (cl(e))
            throw Error(l(485));
        if (e = t.action,
        e !== null) {
            var c = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    c.listeners.push(m)
                }
            };
            U.T !== null ? i(!0) : c.isTransition = !1,
            s(c),
            i = t.pending,
            i === null ? (c.next = t.pending = c,
            ph(t, c)) : (c.next = i.next,
            t.pending = i.next = c)
        }
    }
    function ph(e, t) {
        var i = t.action
          , s = t.payload
          , o = e.state;
        if (t.isTransition) {
            var c = U.T
              , m = {};
            U.T = m;
            try {
                var b = i(o, s)
                  , w = U.S;
                w !== null && w(m, b),
                yh(e, t, b)
            } catch (N) {
                No(e, t, N)
            } finally {
                c !== null && m.types !== null && (c.types = m.types),
                U.T = c
            }
        } else
            try {
                c = i(o, s),
                yh(e, t, c)
            } catch (N) {
                No(e, t, N)
            }
    }
    function yh(e, t, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(s) {
            gh(e, t, s)
        }, function(s) {
            return No(e, t, s)
        }) : gh(e, t, i)
    }
    function gh(e, t, i) {
        t.status = "fulfilled",
        t.value = i,
        vh(t),
        e.state = i,
        t = e.pending,
        t !== null && (i = t.next,
        i === t ? e.pending = null : (i = i.next,
        t.next = i,
        ph(e, i)))
    }
    function No(e, t, i) {
        var s = e.pending;
        if (e.pending = null,
        s !== null) {
            s = s.next;
            do
                t.status = "rejected",
                t.reason = i,
                vh(t),
                t = t.next;
            while (t !== s)
        }
        e.action = null
    }
    function vh(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function bh(e, t) {
        return t
    }
    function Sh(e, t) {
        if (we) {
            var i = Ze.formState;
            if (i !== null) {
                e: {
                    var s = pe;
                    if (we) {
                        if (Ge) {
                            t: {
                                for (var o = Ge, c = Jt; o.nodeType !== 8; ) {
                                    if (!c) {
                                        o = null;
                                        break t
                                    }
                                    if (o = $t(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                c = o.data,
                                o = c === "F!" || c === "F" ? o : null
                            }
                            if (o) {
                                Ge = $t(o.nextSibling),
                                s = o.data === "F!";
                                break e
                            }
                        }
                        Jn(s)
                    }
                    s = !1
                }
                s && (t = i[0])
            }
        }
        return i = xt(),
        i.memoizedState = i.baseState = t,
        s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: bh,
            lastRenderedState: t
        },
        i.queue = s,
        i = Hh.bind(null, pe, s),
        s.dispatch = i,
        s = Do(!1),
        c = Ho.bind(null, pe, !1, s.queue),
        s = xt(),
        o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        s.queue = o,
        i = X0.bind(null, pe, o, c, i),
        o.dispatch = i,
        s.memoizedState = e,
        [t, i, !1]
    }
    function _h(e) {
        var t = et();
        return xh(t, Be, e)
    }
    function xh(e, t, i) {
        if (t = Mo(e, t, bh)[0],
        e = ll(An)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var s = Br(t)
            } catch (m) {
                throw m === Di ? Is : m
            }
        else
            s = t;
        t = et();
        var o = t.queue
          , c = o.dispatch;
        return i !== t.memoizedState && (pe.flags |= 2048,
        Bi(9, {
            destroy: void 0
        }, P0.bind(null, o, i), null)),
        [s, c, e]
    }
    function P0(e, t) {
        e.action = t
    }
    function Eh(e) {
        var t = et()
          , i = Be;
        if (i !== null)
            return xh(t, i, e);
        et(),
        t = t.memoizedState,
        i = et();
        var s = i.queue.dispatch;
        return i.memoizedState = e,
        [t, s, !1]
    }
    function Bi(e, t, i, s) {
        return e = {
            tag: e,
            create: i,
            deps: s,
            inst: t,
            next: null
        },
        t = pe.updateQueue,
        t === null && (t = rl(),
        pe.updateQueue = t),
        i = t.lastEffect,
        i === null ? t.lastEffect = e.next = e : (s = i.next,
        i.next = e,
        e.next = s,
        t.lastEffect = e),
        e
    }
    function wh() {
        return et().memoizedState
    }
    function ul(e, t, i, s) {
        var o = xt();
        pe.flags |= e,
        o.memoizedState = Bi(1 | t, {
            destroy: void 0
        }, i, s === void 0 ? null : s)
    }
    function ol(e, t, i, s) {
        var o = et();
        s = s === void 0 ? null : s;
        var c = o.memoizedState.inst;
        Be !== null && s !== null && wo(s, Be.memoizedState.deps) ? o.memoizedState = Bi(t, c, i, s) : (pe.flags |= e,
        o.memoizedState = Bi(1 | t, c, i, s))
    }
    function Rh(e, t) {
        ul(8390656, 8, e, t)
    }
    function jo(e, t) {
        ol(2048, 8, e, t)
    }
    function K0(e) {
        pe.flags |= 4;
        var t = pe.updateQueue;
        if (t === null)
            t = rl(),
            pe.updateQueue = t,
            t.events = [e];
        else {
            var i = t.events;
            i === null ? t.events = [e] : i.push(e)
        }
    }
    function Th(e) {
        var t = et().memoizedState;
        return K0({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((De & 2) !== 0)
                throw Error(l(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function Ah(e, t) {
        return ol(4, 2, e, t)
    }
    function Oh(e, t) {
        return ol(4, 4, e, t)
    }
    function Ch(e, t) {
        if (typeof t == "function") {
            e = e();
            var i = t(e);
            return function() {
                typeof i == "function" ? i() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Mh(e, t, i) {
        i = i != null ? i.concat([e]) : null,
        ol(4, 4, Ch.bind(null, t, e), i)
    }
    function Lo() {}
    function zh(e, t) {
        var i = et();
        t = t === void 0 ? null : t;
        var s = i.memoizedState;
        return t !== null && wo(t, s[1]) ? s[0] : (i.memoizedState = [e, t],
        e)
    }
    function Dh(e, t) {
        var i = et();
        t = t === void 0 ? null : t;
        var s = i.memoizedState;
        if (t !== null && wo(t, s[1]))
            return s[0];
        if (s = e(),
        Ka) {
            Gn(!0);
            try {
                e()
            } finally {
                Gn(!1)
            }
        }
        return i.memoizedState = [s, t],
        s
    }
    function Uo(e, t, i) {
        return i === void 0 || (Tn & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i,
        e = Nm(),
        pe.lanes |= e,
        ra |= e,
        i)
    }
    function Nh(e, t, i, s) {
        return Ut(i, t) ? i : ji.current !== null ? (e = Uo(e, i, s),
        Ut(e, t) || (at = !0),
        e) : (Tn & 42) === 0 || (Tn & 1073741824) !== 0 && (xe & 261930) === 0 ? (at = !0,
        e.memoizedState = i) : (e = Nm(),
        pe.lanes |= e,
        ra |= e,
        t)
    }
    function jh(e, t, i, s, o) {
        var c = K.p;
        K.p = c !== 0 && 8 > c ? c : 8;
        var m = U.T
          , b = {};
        U.T = b,
        Ho(e, !1, t, i);
        try {
            var w = o()
              , N = U.S;
            if (N !== null && N(b, w),
            w !== null && typeof w == "object" && typeof w.then == "function") {
                var B = Y0(w, s);
                kr(e, t, B, Vt(e))
            } else
                kr(e, t, s, Vt(e))
        } catch (Y) {
            kr(e, t, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, Vt())
        } finally {
            K.p = c,
            m !== null && b.types !== null && (m.types = b.types),
            U.T = m
        }
    }
    function F0() {}
    function Bo(e, t, i, s) {
        if (e.tag !== 5)
            throw Error(l(476));
        var o = Lh(e).queue;
        jh(e, o, t, oe, i === null ? F0 : function() {
            return Uh(e),
            i(s)
        }
        )
    }
    function Lh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: oe,
            baseState: oe,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: An,
                lastRenderedState: oe
            },
            next: null
        };
        var i = {};
        return t.next = {
            memoizedState: i,
            baseState: i,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: An,
                lastRenderedState: i
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Uh(e) {
        var t = Lh(e);
        t.next === null && (t = e.alternate.memoizedState),
        kr(e, t.next.queue, {}, Vt())
    }
    function ko() {
        return yt(ts)
    }
    function Bh() {
        return et().memoizedState
    }
    function kh() {
        return et().memoizedState
    }
    function J0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var i = Vt();
                e = Wn(i);
                var s = ea(t, e, i);
                s !== null && (Mt(s, t, i),
                Nr(s, t, i)),
                t = {
                    cache: ho()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function I0(e, t, i) {
        var s = Vt();
        i = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cl(e) ? qh(t, i) : (i = to(e, t, i, s),
        i !== null && (Mt(i, e, s),
        Zh(i, t, s)))
    }
    function Hh(e, t, i) {
        var s = Vt();
        kr(e, t, i, s)
    }
    function kr(e, t, i, s) {
        var o = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (cl(e))
            qh(t, o);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var m = t.lastRenderedState
                      , b = c(m, i);
                    if (o.hasEagerState = !0,
                    o.eagerState = b,
                    Ut(b, m))
                        return Qs(e, t, o, 0),
                        Ze === null && Ys(),
                        !1
                } catch {}
            if (i = to(e, t, o, s),
            i !== null)
                return Mt(i, e, s),
                Zh(i, t, s),
                !0
        }
        return !1
    }
    function Ho(e, t, i, s) {
        if (s = {
            lane: 2,
            revertLane: gc(),
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cl(e)) {
            if (t)
                throw Error(l(479))
        } else
            t = to(e, i, s, 2),
            t !== null && Mt(t, e, 2)
    }
    function cl(e) {
        var t = e.alternate;
        return e === pe || t !== null && t === pe
    }
    function qh(e, t) {
        Li = al = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        e.pending = t
    }
    function Zh(e, t, i) {
        if ((i & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
            i |= s,
            t.lanes = i,
            Xf(e, i)
        }
    }
    var Hr = {
        readContext: yt,
        use: sl,
        useCallback: Fe,
        useContext: Fe,
        useEffect: Fe,
        useImperativeHandle: Fe,
        useLayoutEffect: Fe,
        useInsertionEffect: Fe,
        useMemo: Fe,
        useReducer: Fe,
        useRef: Fe,
        useState: Fe,
        useDebugValue: Fe,
        useDeferredValue: Fe,
        useTransition: Fe,
        useSyncExternalStore: Fe,
        useId: Fe,
        useHostTransitionStatus: Fe,
        useFormState: Fe,
        useActionState: Fe,
        useOptimistic: Fe,
        useMemoCache: Fe,
        useCacheRefresh: Fe
    };
    Hr.useEffectEvent = Fe;
    var Vh = {
        readContext: yt,
        use: sl,
        useCallback: function(e, t) {
            return xt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: yt,
        useEffect: Rh,
        useImperativeHandle: function(e, t, i) {
            i = i != null ? i.concat([e]) : null,
            ul(4194308, 4, Ch.bind(null, t, e), i)
        },
        useLayoutEffect: function(e, t) {
            return ul(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ul(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var i = xt();
            t = t === void 0 ? null : t;
            var s = e();
            if (Ka) {
                Gn(!0);
                try {
                    e()
                } finally {
                    Gn(!1)
                }
            }
            return i.memoizedState = [s, t],
            s
        },
        useReducer: function(e, t, i) {
            var s = xt();
            if (i !== void 0) {
                var o = i(t);
                if (Ka) {
                    Gn(!0);
                    try {
                        i(t)
                    } finally {
                        Gn(!1)
                    }
                }
            } else
                o = t;
            return s.memoizedState = s.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            s.queue = e,
            e = e.dispatch = I0.bind(null, pe, e),
            [s.memoizedState, e]
        },
        useRef: function(e) {
            var t = xt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Do(e);
            var t = e.queue
              , i = Hh.bind(null, pe, t);
            return t.dispatch = i,
            [e.memoizedState, i]
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = xt();
            return Uo(i, e, t)
        },
        useTransition: function() {
            var e = Do(!1);
            return e = jh.bind(null, pe, e.queue, !0, !1),
            xt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, i) {
            var s = pe
              , o = xt();
            if (we) {
                if (i === void 0)
                    throw Error(l(407));
                i = i()
            } else {
                if (i = t(),
                Ze === null)
                    throw Error(l(349));
                (xe & 127) !== 0 || oh(s, t, i)
            }
            o.memoizedState = i;
            var c = {
                value: i,
                getSnapshot: t
            };
            return o.queue = c,
            Rh(fh.bind(null, s, c, e), [e]),
            s.flags |= 2048,
            Bi(9, {
                destroy: void 0
            }, ch.bind(null, s, c, i, t), null),
            i
        },
        useId: function() {
            var e = xt()
              , t = Ze.identifierPrefix;
            if (we) {
                var i = cn
                  , s = on;
                i = (s & ~(1 << 32 - Lt(s) - 1)).toString(32) + i,
                t = "_" + t + "R_" + i,
                i = il++,
                0 < i && (t += "H" + i.toString(32)),
                t += "_"
            } else
                i = Q0++,
                t = "_" + t + "r_" + i.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: ko,
        useFormState: Sh,
        useActionState: Sh,
        useOptimistic: function(e) {
            var t = xt();
            t.memoizedState = t.baseState = e;
            var i = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = i,
            t = Ho.bind(null, pe, !0, i),
            i.dispatch = t,
            [e, t]
        },
        useMemoCache: Co,
        useCacheRefresh: function() {
            return xt().memoizedState = J0.bind(null, pe)
        },
        useEffectEvent: function(e) {
            var t = xt()
              , i = {
                impl: e
            };
            return t.memoizedState = i,
            function() {
                if ((De & 2) !== 0)
                    throw Error(l(440));
                return i.impl.apply(void 0, arguments)
            }
        }
    }
      , qo = {
        readContext: yt,
        use: sl,
        useCallback: zh,
        useContext: yt,
        useEffect: jo,
        useImperativeHandle: Mh,
        useInsertionEffect: Ah,
        useLayoutEffect: Oh,
        useMemo: Dh,
        useReducer: ll,
        useRef: wh,
        useState: function() {
            return ll(An)
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = et();
            return Nh(i, Be.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ll(An)[0]
              , t = et().memoizedState;
            return [typeof e == "boolean" ? e : Br(e), t]
        },
        useSyncExternalStore: uh,
        useId: Bh,
        useHostTransitionStatus: ko,
        useFormState: _h,
        useActionState: _h,
        useOptimistic: function(e, t) {
            var i = et();
            return mh(i, Be, e, t)
        },
        useMemoCache: Co,
        useCacheRefresh: kh
    };
    qo.useEffectEvent = Th;
    var Yh = {
        readContext: yt,
        use: sl,
        useCallback: zh,
        useContext: yt,
        useEffect: jo,
        useImperativeHandle: Mh,
        useInsertionEffect: Ah,
        useLayoutEffect: Oh,
        useMemo: Dh,
        useReducer: zo,
        useRef: wh,
        useState: function() {
            return zo(An)
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = et();
            return Be === null ? Uo(i, e, t) : Nh(i, Be.memoizedState, e, t)
        },
        useTransition: function() {
            var e = zo(An)[0]
              , t = et().memoizedState;
            return [typeof e == "boolean" ? e : Br(e), t]
        },
        useSyncExternalStore: uh,
        useId: Bh,
        useHostTransitionStatus: ko,
        useFormState: Eh,
        useActionState: Eh,
        useOptimistic: function(e, t) {
            var i = et();
            return Be !== null ? mh(i, Be, e, t) : (i.baseState = e,
            [e, i.queue.dispatch])
        },
        useMemoCache: Co,
        useCacheRefresh: kh
    };
    Yh.useEffectEvent = Th;
    function Zo(e, t, i, s) {
        t = e.memoizedState,
        i = i(s, t),
        i = i == null ? t : g({}, t, i),
        e.memoizedState = i,
        e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Vo = {
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var s = Vt()
              , o = Wn(s);
            o.payload = t,
            i != null && (o.callback = i),
            t = ea(e, o, s),
            t !== null && (Mt(t, e, s),
            Nr(t, e, s))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var s = Vt()
              , o = Wn(s);
            o.tag = 1,
            o.payload = t,
            i != null && (o.callback = i),
            t = ea(e, o, s),
            t !== null && (Mt(t, e, s),
            Nr(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = Vt()
              , s = Wn(i);
            s.tag = 2,
            t != null && (s.callback = t),
            t = ea(e, s, i),
            t !== null && (Mt(t, e, i),
            Nr(t, e, i))
        }
    };
    function Qh(e, t, i, s, o, c, m) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, c, m) : t.prototype && t.prototype.isPureReactComponent ? !Rr(i, s) || !Rr(o, c) : !0
    }
    function Gh(e, t, i, s) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s),
        t.state !== e && Vo.enqueueReplaceState(t, t.state, null)
    }
    function Fa(e, t) {
        var i = t;
        if ("ref"in t) {
            i = {};
            for (var s in t)
                s !== "ref" && (i[s] = t[s])
        }
        if (e = e.defaultProps) {
            i === t && (i = g({}, i));
            for (var o in e)
                i[o] === void 0 && (i[o] = e[o])
        }
        return i
    }
    function Xh(e) {
        Vs(e)
    }
    function Ph(e) {
        console.error(e)
    }
    function Kh(e) {
        Vs(e)
    }
    function fl(e, t) {
        try {
            var i = e.onUncaughtError;
            i(t.value, {
                componentStack: t.stack
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Fh(e, t, i) {
        try {
            var s = e.onCaughtError;
            s(i.value, {
                componentStack: i.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function Yo(e, t, i) {
        return i = Wn(i),
        i.tag = 3,
        i.payload = {
            element: null
        },
        i.callback = function() {
            fl(e, t)
        }
        ,
        i
    }
    function Jh(e) {
        return e = Wn(e),
        e.tag = 3,
        e
    }
    function Ih(e, t, i, s) {
        var o = i.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = s.value;
            e.payload = function() {
                return o(c)
            }
            ,
            e.callback = function() {
                Fh(t, i, s)
            }
        }
        var m = i.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
            Fh(t, i, s),
            typeof o != "function" && (sa === null ? sa = new Set([this]) : sa.add(this));
            var b = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function $0(e, t, i, s, o) {
        if (i.flags |= 32768,
        s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = i.alternate,
            t !== null && Ci(t, i, o, !0),
            i = kt.current,
            i !== null) {
                switch (i.tag) {
                case 31:
                case 13:
                    return It === null ? El() : i.alternate === null && Je === 0 && (Je = 3),
                    i.flags &= -257,
                    i.flags |= 65536,
                    i.lanes = o,
                    s === $s ? i.flags |= 16384 : (t = i.updateQueue,
                    t === null ? i.updateQueue = new Set([s]) : t.add(s),
                    mc(e, s, o)),
                    !1;
                case 22:
                    return i.flags |= 65536,
                    s === $s ? i.flags |= 16384 : (t = i.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s])
                    },
                    i.updateQueue = t) : (i = t.retryQueue,
                    i === null ? t.retryQueue = new Set([s]) : i.add(s)),
                    mc(e, s, o)),
                    !1
                }
                throw Error(l(435, i.tag))
            }
            return mc(e, s, o),
            El(),
            !1
        }
        if (we)
            return t = kt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = o,
            s !== lo && (e = Error(l(422), {
                cause: s
            }),
            Or(Pt(e, i)))) : (s !== lo && (t = Error(l(423), {
                cause: s
            }),
            Or(Pt(t, i))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            s = Pt(s, i),
            o = Yo(e.stateNode, s, o),
            bo(e, o),
            Je !== 4 && (Je = 2)),
            !1;
        var c = Error(l(520), {
            cause: s
        });
        if (c = Pt(c, i),
        Pr === null ? Pr = [c] : Pr.push(c),
        Je !== 4 && (Je = 2),
        t === null)
            return !0;
        s = Pt(s, i),
        i = t;
        do {
            switch (i.tag) {
            case 3:
                return i.flags |= 65536,
                e = o & -o,
                i.lanes |= e,
                e = Yo(i.stateNode, s, e),
                bo(i, e),
                !1;
            case 1:
                if (t = i.type,
                c = i.stateNode,
                (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (sa === null || !sa.has(c))))
                    return i.flags |= 65536,
                    o &= -o,
                    i.lanes |= o,
                    o = Jh(o),
                    Ih(o, e, i, s),
                    bo(i, o),
                    !1
            }
            i = i.return
        } while (i !== null);
        return !1
    }
    var Qo = Error(l(461))
      , at = !1;
    function gt(e, t, i, s) {
        t.child = e === null ? th(t, null, i, s) : Pa(t, e.child, i, s)
    }
    function $h(e, t, i, s, o) {
        i = i.render;
        var c = t.ref;
        if ("ref"in s) {
            var m = {};
            for (var b in s)
                b !== "ref" && (m[b] = s[b])
        } else
            m = s;
        return Ya(t),
        s = Ro(e, t, i, m, c, o),
        b = To(),
        e !== null && !at ? (Ao(e, t, o),
        On(e, t, o)) : (we && b && ro(t),
        t.flags |= 1,
        gt(e, t, s, o),
        t.child)
    }
    function Wh(e, t, i, s, o) {
        if (e === null) {
            var c = i.type;
            return typeof c == "function" && !no(c) && c.defaultProps === void 0 && i.compare === null ? (t.tag = 15,
            t.type = c,
            em(e, t, c, s, o)) : (e = Xs(i.type, null, s, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        !$o(e, o)) {
            var m = c.memoizedProps;
            if (i = i.compare,
            i = i !== null ? i : Rr,
            i(m, s) && e.ref === t.ref)
                return On(e, t, o)
        }
        return t.flags |= 1,
        e = xn(c, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function em(e, t, i, s, o) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Rr(c, s) && e.ref === t.ref)
                if (at = !1,
                t.pendingProps = s = c,
                $o(e, o))
                    (e.flags & 131072) !== 0 && (at = !0);
                else
                    return t.lanes = e.lanes,
                    On(e, t, o)
        }
        return Go(e, t, i, s, o)
    }
    function tm(e, t, i, s) {
        var o = s.children
          , c = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        s.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | i : i,
                e !== null) {
                    for (s = t.child = e.child,
                    o = 0; s !== null; )
                        o = o | s.lanes | s.childLanes,
                        s = s.sibling;
                    s = o & ~c
                } else
                    s = 0,
                    t.child = null;
                return nm(e, t, c, i, s)
            }
            if ((i & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Js(t, c !== null ? c.cachePool : null),
                c !== null ? ih(t, c) : _o(),
                rh(t);
            else
                return s = t.lanes = 536870912,
                nm(e, t, c !== null ? c.baseLanes | i : i, i, s)
        } else
            c !== null ? (Js(t, c.cachePool),
            ih(t, c),
            na(),
            t.memoizedState = null) : (e !== null && Js(t, null),
            _o(),
            na());
        return gt(e, t, o, i),
        t.child
    }
    function qr(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function nm(e, t, i, s, o) {
        var c = po();
        return c = c === null ? null : {
            parent: tt._currentValue,
            pool: c
        },
        t.memoizedState = {
            baseLanes: i,
            cachePool: c
        },
        e !== null && Js(t, null),
        _o(),
        rh(t),
        e !== null && Ci(e, t, s, !0),
        t.childLanes = o,
        null
    }
    function dl(e, t) {
        return t = ml({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function am(e, t, i) {
        return Pa(t, e.child, null, i),
        e = dl(t, t.pendingProps),
        e.flags |= 2,
        Ht(t),
        t.memoizedState = null,
        e
    }
    function W0(e, t, i) {
        var s = t.pendingProps
          , o = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (we) {
                if (s.mode === "hidden")
                    return e = dl(t, s),
                    t.lanes = 536870912,
                    qr(null, e);
                if (Eo(t),
                (e = Ge) ? (e = pp(e, Jt),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Kn !== null ? {
                        id: on,
                        overflow: cn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = qd(e),
                i.return = t,
                t.child = i,
                pt = t,
                Ge = null)) : e = null,
                e === null)
                    throw Jn(t);
                return t.lanes = 536870912,
                null
            }
            return dl(t, s)
        }
        var c = e.memoizedState;
        if (c !== null) {
            var m = c.dehydrated;
            if (Eo(t),
            o)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = am(e, t, i);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(l(558));
            else if (at || Ci(e, t, i, !1),
            o = (i & e.childLanes) !== 0,
            at || o) {
                if (s = Ze,
                s !== null && (m = Pf(s, i),
                m !== 0 && m !== c.retryLane))
                    throw c.retryLane = m,
                    Ha(e, m),
                    Mt(s, e, m),
                    Qo;
                El(),
                t = am(e, t, i)
            } else
                e = c.treeContext,
                Ge = $t(m.nextSibling),
                pt = t,
                we = !0,
                Fn = null,
                Jt = !1,
                e !== null && Yd(t, e),
                t = dl(t, s),
                t.flags |= 4096;
            return t
        }
        return e = xn(e.child, {
            mode: s.mode,
            children: s.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function hl(e, t) {
        var i = t.ref;
        if (i === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof i != "function" && typeof i != "object")
                throw Error(l(284));
            (e === null || e.ref !== i) && (t.flags |= 4194816)
        }
    }
    function Go(e, t, i, s, o) {
        return Ya(t),
        i = Ro(e, t, i, s, void 0, o),
        s = To(),
        e !== null && !at ? (Ao(e, t, o),
        On(e, t, o)) : (we && s && ro(t),
        t.flags |= 1,
        gt(e, t, i, o),
        t.child)
    }
    function im(e, t, i, s, o, c) {
        return Ya(t),
        t.updateQueue = null,
        i = lh(t, s, i, o),
        sh(e),
        s = To(),
        e !== null && !at ? (Ao(e, t, c),
        On(e, t, c)) : (we && s && ro(t),
        t.flags |= 1,
        gt(e, t, i, c),
        t.child)
    }
    function rm(e, t, i, s, o) {
        if (Ya(t),
        t.stateNode === null) {
            var c = Ri
              , m = i.contextType;
            typeof m == "object" && m !== null && (c = yt(m)),
            c = new i(s,c),
            t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Vo,
            t.stateNode = c,
            c._reactInternals = t,
            c = t.stateNode,
            c.props = s,
            c.state = t.memoizedState,
            c.refs = {},
            go(t),
            m = i.contextType,
            c.context = typeof m == "object" && m !== null ? yt(m) : Ri,
            c.state = t.memoizedState,
            m = i.getDerivedStateFromProps,
            typeof m == "function" && (Zo(t, i, m, s),
            c.state = t.memoizedState),
            typeof i.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            m !== c.state && Vo.enqueueReplaceState(c, c.state, null),
            Lr(t, s, c, o),
            jr(),
            c.state = t.memoizedState),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            s = !0
        } else if (e === null) {
            c = t.stateNode;
            var b = t.memoizedProps
              , w = Fa(i, b);
            c.props = w;
            var N = c.context
              , B = i.contextType;
            m = Ri,
            typeof B == "object" && B !== null && (m = yt(B));
            var Y = i.getDerivedStateFromProps;
            B = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            B || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || N !== m) && Gh(t, c, s, m),
            $n = !1;
            var j = t.memoizedState;
            c.state = j,
            Lr(t, s, c, o),
            jr(),
            N = t.memoizedState,
            b || j !== N || $n ? (typeof Y == "function" && (Zo(t, i, Y, s),
            N = t.memoizedState),
            (w = $n || Qh(t, i, w, s, j, N, m)) ? (B || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = s,
            t.memoizedState = N),
            c.props = s,
            c.state = N,
            c.context = m,
            s = w) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            s = !1)
        } else {
            c = t.stateNode,
            vo(e, t),
            m = t.memoizedProps,
            B = Fa(i, m),
            c.props = B,
            Y = t.pendingProps,
            j = c.context,
            N = i.contextType,
            w = Ri,
            typeof N == "object" && N !== null && (w = yt(N)),
            b = i.getDerivedStateFromProps,
            (N = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== Y || j !== w) && Gh(t, c, s, w),
            $n = !1,
            j = t.memoizedState,
            c.state = j,
            Lr(t, s, c, o),
            jr();
            var L = t.memoizedState;
            m !== Y || j !== L || $n || e !== null && e.dependencies !== null && Ks(e.dependencies) ? (typeof b == "function" && (Zo(t, i, b, s),
            L = t.memoizedState),
            (B = $n || Qh(t, i, B, s, j, L, w) || e !== null && e.dependencies !== null && Ks(e.dependencies)) ? (N || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, L, w),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, L, w)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = s,
            t.memoizedState = L),
            c.props = s,
            c.state = L,
            c.context = w,
            s = B) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024),
            s = !1)
        }
        return c = s,
        hl(e, t),
        s = (t.flags & 128) !== 0,
        c || s ? (c = t.stateNode,
        i = s && typeof i.getDerivedStateFromError != "function" ? null : c.render(),
        t.flags |= 1,
        e !== null && s ? (t.child = Pa(t, e.child, null, o),
        t.child = Pa(t, null, i, o)) : gt(e, t, i, o),
        t.memoizedState = c.state,
        e = t.child) : e = On(e, t, o),
        e
    }
    function sm(e, t, i, s) {
        return Za(),
        t.flags |= 256,
        gt(e, t, i, s),
        t.child
    }
    var Xo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Po(e) {
        return {
            baseLanes: e,
            cachePool: Fd()
        }
    }
    function Ko(e, t, i) {
        return e = e !== null ? e.childLanes & ~i : 0,
        t && (e |= Zt),
        e
    }
    function lm(e, t, i) {
        var s = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, m;
        if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0),
        m && (o = !0,
        t.flags &= -129),
        m = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (we) {
                if (o ? ta(t) : na(),
                (e = Ge) ? (e = pp(e, Jt),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Kn !== null ? {
                        id: on,
                        overflow: cn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = qd(e),
                i.return = t,
                t.child = i,
                pt = t,
                Ge = null)) : e = null,
                e === null)
                    throw Jn(t);
                return Mc(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var b = s.children;
            return s = s.fallback,
            o ? (na(),
            o = t.mode,
            b = ml({
                mode: "hidden",
                children: b
            }, o),
            s = qa(s, o, i, null),
            b.return = t,
            s.return = t,
            b.sibling = s,
            t.child = b,
            s = t.child,
            s.memoizedState = Po(i),
            s.childLanes = Ko(e, m, i),
            t.memoizedState = Xo,
            qr(null, s)) : (ta(t),
            Fo(t, b))
        }
        var w = e.memoizedState;
        if (w !== null && (b = w.dehydrated,
        b !== null)) {
            if (c)
                t.flags & 256 ? (ta(t),
                t.flags &= -257,
                t = Jo(e, t, i)) : t.memoizedState !== null ? (na(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (na(),
                b = s.fallback,
                o = t.mode,
                s = ml({
                    mode: "visible",
                    children: s.children
                }, o),
                b = qa(b, o, i, null),
                b.flags |= 2,
                s.return = t,
                b.return = t,
                s.sibling = b,
                t.child = s,
                Pa(t, e.child, null, i),
                s = t.child,
                s.memoizedState = Po(i),
                s.childLanes = Ko(e, m, i),
                t.memoizedState = Xo,
                t = qr(null, s));
            else if (ta(t),
            Mc(b)) {
                if (m = b.nextSibling && b.nextSibling.dataset,
                m)
                    var N = m.dgst;
                m = N,
                s = Error(l(419)),
                s.stack = "",
                s.digest = m,
                Or({
                    value: s,
                    source: null,
                    stack: null
                }),
                t = Jo(e, t, i)
            } else if (at || Ci(e, t, i, !1),
            m = (i & e.childLanes) !== 0,
            at || m) {
                if (m = Ze,
                m !== null && (s = Pf(m, i),
                s !== 0 && s !== w.retryLane))
                    throw w.retryLane = s,
                    Ha(e, s),
                    Mt(m, e, s),
                    Qo;
                Cc(b) || El(),
                t = Jo(e, t, i)
            } else
                Cc(b) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = w.treeContext,
                Ge = $t(b.nextSibling),
                pt = t,
                we = !0,
                Fn = null,
                Jt = !1,
                e !== null && Yd(t, e),
                t = Fo(t, s.children),
                t.flags |= 4096);
            return t
        }
        return o ? (na(),
        b = s.fallback,
        o = t.mode,
        w = e.child,
        N = w.sibling,
        s = xn(w, {
            mode: "hidden",
            children: s.children
        }),
        s.subtreeFlags = w.subtreeFlags & 65011712,
        N !== null ? b = xn(N, b) : (b = qa(b, o, i, null),
        b.flags |= 2),
        b.return = t,
        s.return = t,
        s.sibling = b,
        t.child = s,
        qr(null, s),
        s = t.child,
        b = e.child.memoizedState,
        b === null ? b = Po(i) : (o = b.cachePool,
        o !== null ? (w = tt._currentValue,
        o = o.parent !== w ? {
            parent: w,
            pool: w
        } : o) : o = Fd(),
        b = {
            baseLanes: b.baseLanes | i,
            cachePool: o
        }),
        s.memoizedState = b,
        s.childLanes = Ko(e, m, i),
        t.memoizedState = Xo,
        qr(e.child, s)) : (ta(t),
        i = e.child,
        e = i.sibling,
        i = xn(i, {
            mode: "visible",
            children: s.children
        }),
        i.return = t,
        i.sibling = null,
        e !== null && (m = t.deletions,
        m === null ? (t.deletions = [e],
        t.flags |= 16) : m.push(e)),
        t.child = i,
        t.memoizedState = null,
        i)
    }
    function Fo(e, t) {
        return t = ml({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function ml(e, t) {
        return e = Bt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Jo(e, t, i) {
        return Pa(t, e.child, null, i),
        e = Fo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function um(e, t, i) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
        co(e.return, t, i)
    }
    function Io(e, t, i, s, o, c) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: i,
            tailMode: o,
            treeForkCount: c
        } : (m.isBackwards = t,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = s,
        m.tail = i,
        m.tailMode = o,
        m.treeForkCount = c)
    }
    function om(e, t, i) {
        var s = t.pendingProps
          , o = s.revealOrder
          , c = s.tail;
        s = s.children;
        var m = We.current
          , b = (m & 2) !== 0;
        if (b ? (m = m & 1 | 2,
        t.flags |= 128) : m &= 1,
        F(We, m),
        gt(e, t, s, i),
        s = we ? Ar : 0,
        !b && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && um(e, i, t);
                else if (e.tag === 19)
                    um(e, i, t);
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
        switch (o) {
        case "forwards":
            for (i = t.child,
            o = null; i !== null; )
                e = i.alternate,
                e !== null && nl(e) === null && (o = i),
                i = i.sibling;
            i = o,
            i === null ? (o = t.child,
            t.child = null) : (o = i.sibling,
            i.sibling = null),
            Io(t, !1, o, i, c, s);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (i = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && nl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = i,
                i = o,
                o = e
            }
            Io(t, !0, i, null, c, s);
            break;
        case "together":
            Io(t, !1, null, null, void 0, s);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function On(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies),
        ra |= t.lanes,
        (i & t.childLanes) === 0)
            if (e !== null) {
                if (Ci(e, t, i, !1),
                (i & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(l(153));
        if (t.child !== null) {
            for (e = t.child,
            i = xn(e, e.pendingProps),
            t.child = i,
            i.return = t; e.sibling !== null; )
                e = e.sibling,
                i = i.sibling = xn(e, e.pendingProps),
                i.return = t;
            i.sibling = null
        }
        return t.child
    }
    function $o(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Ks(e)))
    }
    function eb(e, t, i) {
        switch (t.tag) {
        case 3:
            $e(t, t.stateNode.containerInfo),
            In(t, tt, e.memoizedState.cache),
            Za();
            break;
        case 27:
        case 5:
            yn(t);
            break;
        case 4:
            $e(t, t.stateNode.containerInfo);
            break;
        case 10:
            In(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Eo(t),
                null;
            break;
        case 13:
            var s = t.memoizedState;
            if (s !== null)
                return s.dehydrated !== null ? (ta(t),
                t.flags |= 128,
                null) : (i & t.child.childLanes) !== 0 ? lm(e, t, i) : (ta(t),
                e = On(e, t, i),
                e !== null ? e.sibling : null);
            ta(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (s = (i & t.childLanes) !== 0,
            s || (Ci(e, t, i, !1),
            s = (i & t.childLanes) !== 0),
            o) {
                if (s)
                    return om(e, t, i);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            F(We, We.current),
            s)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            tm(e, t, i, t.pendingProps);
        case 24:
            In(t, tt, e.memoizedState.cache)
        }
        return On(e, t, i)
    }
    function cm(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                at = !0;
            else {
                if (!$o(e, i) && (t.flags & 128) === 0)
                    return at = !1,
                    eb(e, t, i);
                at = (e.flags & 131072) !== 0
            }
        else
            at = !1,
            we && (t.flags & 1048576) !== 0 && Vd(t, Ar, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var s = t.pendingProps;
                if (e = Ga(t.elementType),
                t.type = e,
                typeof e == "function")
                    no(e) ? (s = Fa(e, s),
                    t.tag = 1,
                    t = rm(null, t, e, s, i)) : (t.tag = 0,
                    t = Go(null, t, e, s, i));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === k) {
                            t.tag = 11,
                            t = $h(null, t, e, s, i);
                            break e
                        } else if (o === Q) {
                            t.tag = 14,
                            t = Wh(null, t, e, s, i);
                            break e
                        }
                    }
                    throw t = Ie(e) || e,
                    Error(l(306, t, ""))
                }
            }
            return t;
        case 0:
            return Go(e, t, t.type, t.pendingProps, i);
        case 1:
            return s = t.type,
            o = Fa(s, t.pendingProps),
            rm(e, t, s, o, i);
        case 3:
            e: {
                if ($e(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(l(387));
                s = t.pendingProps;
                var c = t.memoizedState;
                o = c.element,
                vo(e, t),
                Lr(t, s, null, i);
                var m = t.memoizedState;
                if (s = m.cache,
                In(t, tt, s),
                s !== c.cache && fo(t, [tt], i, !0),
                jr(),
                s = m.element,
                c.isDehydrated)
                    if (c = {
                        element: s,
                        isDehydrated: !1,
                        cache: m.cache
                    },
                    t.updateQueue.baseState = c,
                    t.memoizedState = c,
                    t.flags & 256) {
                        t = sm(e, t, s, i);
                        break e
                    } else if (s !== o) {
                        o = Pt(Error(l(424)), t),
                        Or(o),
                        t = sm(e, t, s, i);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        Ge = $t(e.firstChild),
                        pt = t,
                        we = !0,
                        Fn = null,
                        Jt = !0,
                        i = th(t, null, s, i),
                        t.child = i; i; )
                            i.flags = i.flags & -3 | 4096,
                            i = i.sibling;
                else {
                    if (Za(),
                    s === o) {
                        t = On(e, t, i);
                        break e
                    }
                    gt(e, t, s, i)
                }
                t = t.child
            }
            return t;
        case 26:
            return hl(e, t),
            e === null ? (i = _p(t.type, null, t.pendingProps, null)) ? t.memoizedState = i : we || (i = t.type,
            e = t.pendingProps,
            s = Ml(ge.current).createElement(i),
            s[mt] = t,
            s[wt] = e,
            vt(s, i, e),
            ct(s),
            t.stateNode = s) : t.memoizedState = _p(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return yn(t),
            e === null && we && (s = t.stateNode = vp(t.type, t.pendingProps, ge.current),
            pt = t,
            Jt = !0,
            o = Ge,
            ca(t.type) ? (zc = o,
            Ge = $t(s.firstChild)) : Ge = o),
            gt(e, t, t.pendingProps.children, i),
            hl(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && we && ((o = s = Ge) && (s = Mb(s, t.type, t.pendingProps, Jt),
            s !== null ? (t.stateNode = s,
            pt = t,
            Ge = $t(s.firstChild),
            Jt = !1,
            o = !0) : o = !1),
            o || Jn(t)),
            yn(t),
            o = t.type,
            c = t.pendingProps,
            m = e !== null ? e.memoizedProps : null,
            s = c.children,
            Tc(o, c) ? s = null : m !== null && Tc(o, m) && (t.flags |= 32),
            t.memoizedState !== null && (o = Ro(e, t, G0, null, null, i),
            ts._currentValue = o),
            hl(e, t),
            gt(e, t, s, i),
            t.child;
        case 6:
            return e === null && we && ((e = i = Ge) && (i = zb(i, t.pendingProps, Jt),
            i !== null ? (t.stateNode = i,
            pt = t,
            Ge = null,
            e = !0) : e = !1),
            e || Jn(t)),
            null;
        case 13:
            return lm(e, t, i);
        case 4:
            return $e(t, t.stateNode.containerInfo),
            s = t.pendingProps,
            e === null ? t.child = Pa(t, null, s, i) : gt(e, t, s, i),
            t.child;
        case 11:
            return $h(e, t, t.type, t.pendingProps, i);
        case 7:
            return gt(e, t, t.pendingProps, i),
            t.child;
        case 8:
            return gt(e, t, t.pendingProps.children, i),
            t.child;
        case 12:
            return gt(e, t, t.pendingProps.children, i),
            t.child;
        case 10:
            return s = t.pendingProps,
            In(t, t.type, s.value),
            gt(e, t, s.children, i),
            t.child;
        case 9:
            return o = t.type._context,
            s = t.pendingProps.children,
            Ya(t),
            o = yt(o),
            s = s(o),
            t.flags |= 1,
            gt(e, t, s, i),
            t.child;
        case 14:
            return Wh(e, t, t.type, t.pendingProps, i);
        case 15:
            return em(e, t, t.type, t.pendingProps, i);
        case 19:
            return om(e, t, i);
        case 31:
            return W0(e, t, i);
        case 22:
            return tm(e, t, i, t.pendingProps);
        case 24:
            return Ya(t),
            s = yt(tt),
            e === null ? (o = po(),
            o === null && (o = Ze,
            c = ho(),
            o.pooledCache = c,
            c.refCount++,
            c !== null && (o.pooledCacheLanes |= i),
            o = c),
            t.memoizedState = {
                parent: s,
                cache: o
            },
            go(t),
            In(t, tt, o)) : ((e.lanes & i) !== 0 && (vo(e, t),
            Lr(t, null, null, i),
            jr()),
            o = e.memoizedState,
            c = t.memoizedState,
            o.parent !== s ? (o = {
                parent: s,
                cache: s
            },
            t.memoizedState = o,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
            In(t, tt, s)) : (s = c.cache,
            In(t, tt, s),
            s !== o.cache && fo(t, [tt], i, !0))),
            gt(e, t, t.pendingProps.children, i),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(l(156, t.tag))
    }
    function Cn(e) {
        e.flags |= 4
    }
    function Wo(e, t, i, s, o) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (o & 335544128) === o)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Bm())
                    e.flags |= 8192;
                else
                    throw Xa = $s,
                    yo
        } else
            e.flags &= -16777217
    }
    function fm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Tp(t))
            if (Bm())
                e.flags |= 8192;
            else
                throw Xa = $s,
                yo
    }
    function pl(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Qf() : 536870912,
        e.lanes |= t,
        Zi |= t)
    }
    function Zr(e, t) {
        if (!we)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null; )
                    t.alternate !== null && (i = t),
                    t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var s = null; i !== null; )
                    i.alternate !== null && (s = i),
                    i = i.sibling;
                s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
            }
    }
    function Xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , i = 0
          , s = 0;
        if (t)
            for (var o = e.child; o !== null; )
                i |= o.lanes | o.childLanes,
                s |= o.subtreeFlags & 65011712,
                s |= o.flags & 65011712,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                i |= o.lanes | o.childLanes,
                s |= o.subtreeFlags,
                s |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= s,
        e.childLanes = i,
        t
    }
    function tb(e, t, i) {
        var s = t.pendingProps;
        switch (so(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Xe(t),
            null;
        case 1:
            return Xe(t),
            null;
        case 3:
            return i = t.stateNode,
            s = null,
            e !== null && (s = e.memoizedState.cache),
            t.memoizedState.cache !== s && (t.flags |= 2048),
            Rn(tt),
            qe(),
            i.pendingContext && (i.context = i.pendingContext,
            i.pendingContext = null),
            (e === null || e.child === null) && (Oi(t) ? Cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            uo())),
            Xe(t),
            null;
        case 26:
            var o = t.type
              , c = t.memoizedState;
            return e === null ? (Cn(t),
            c !== null ? (Xe(t),
            fm(t, c)) : (Xe(t),
            Wo(t, o, null, s, i))) : c ? c !== e.memoizedState ? (Cn(t),
            Xe(t),
            fm(t, c)) : (Xe(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== s && Cn(t),
            Xe(t),
            Wo(t, o, e, s, i)),
            null;
        case 27:
            if (gn(t),
            i = ge.current,
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && Cn(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Xe(t),
                    null
                }
                e = W.current,
                Oi(t) ? Qd(t) : (e = vp(o, s, i),
                t.stateNode = e,
                Cn(t))
            }
            return Xe(t),
            null;
        case 5:
            if (gn(t),
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && Cn(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Xe(t),
                    null
                }
                if (c = W.current,
                Oi(t))
                    Qd(t);
                else {
                    var m = Ml(ge.current);
                    switch (c) {
                    case 1:
                        c = m.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            c = m.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            c = m.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof s.is == "string" ? m.createElement("select", {
                                is: s.is
                            }) : m.createElement("select"),
                            s.multiple ? c.multiple = !0 : s.size && (c.size = s.size);
                            break;
                        default:
                            c = typeof s.is == "string" ? m.createElement(o, {
                                is: s.is
                            }) : m.createElement(o)
                        }
                    }
                    c[mt] = t,
                    c[wt] = s;
                    e: for (m = t.child; m !== null; ) {
                        if (m.tag === 5 || m.tag === 6)
                            c.appendChild(m.stateNode);
                        else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                            m.child.return = m,
                            m = m.child;
                            continue
                        }
                        if (m === t)
                            break e;
                        for (; m.sibling === null; ) {
                            if (m.return === null || m.return === t)
                                break e;
                            m = m.return
                        }
                        m.sibling.return = m.return,
                        m = m.sibling
                    }
                    t.stateNode = c;
                    e: switch (vt(c, o, s),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        s = !!s.autoFocus;
                        break e;
                    case "img":
                        s = !0;
                        break e;
                    default:
                        s = !1
                    }
                    s && Cn(t)
                }
            }
            return Xe(t),
            Wo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, i),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== s && Cn(t);
            else {
                if (typeof s != "string" && t.stateNode === null)
                    throw Error(l(166));
                if (e = ge.current,
                Oi(t)) {
                    if (e = t.stateNode,
                    i = t.memoizedProps,
                    s = null,
                    o = pt,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            s = o.memoizedProps
                        }
                    e[mt] = t,
                    e = !!(e.nodeValue === i || s !== null && s.suppressHydrationWarning === !0 || lp(e.nodeValue, i)),
                    e || Jn(t, !0)
                } else
                    e = Ml(e).createTextNode(s),
                    e[mt] = t,
                    t.stateNode = e
            }
            return Xe(t),
            null;
        case 31:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (s = Oi(t),
                i !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(l(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(l(557));
                        e[mt] = t
                    } else
                        Za(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Xe(t),
                    e = !1
                } else
                    i = uo(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (Ht(t),
                    t) : (Ht(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(l(558))
            }
            return Xe(t),
            null;
        case 13:
            if (s = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = Oi(t),
                s !== null && s.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(l(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(l(317));
                        o[mt] = t
                    } else
                        Za(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Xe(t),
                    o = !1
                } else
                    o = uo(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return t.flags & 256 ? (Ht(t),
                    t) : (Ht(t),
                    null)
            }
            return Ht(t),
            (t.flags & 128) !== 0 ? (t.lanes = i,
            t) : (i = s !== null,
            e = e !== null && e.memoizedState !== null,
            i && (s = t.child,
            o = null,
            s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (o = s.alternate.memoizedState.cachePool.pool),
            c = null,
            s.memoizedState !== null && s.memoizedState.cachePool !== null && (c = s.memoizedState.cachePool.pool),
            c !== o && (s.flags |= 2048)),
            i !== e && i && (t.child.flags |= 8192),
            pl(t, t.updateQueue),
            Xe(t),
            null);
        case 4:
            return qe(),
            e === null && _c(t.stateNode.containerInfo),
            Xe(t),
            null;
        case 10:
            return Rn(t.type),
            Xe(t),
            null;
        case 19:
            if (V(We),
            s = t.memoizedState,
            s === null)
                return Xe(t),
                null;
            if (o = (t.flags & 128) !== 0,
            c = s.rendering,
            c === null)
                if (o)
                    Zr(s, !1);
                else {
                    if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (c = nl(e),
                            c !== null) {
                                for (t.flags |= 128,
                                Zr(s, !1),
                                e = c.updateQueue,
                                t.updateQueue = e,
                                pl(t, e),
                                t.subtreeFlags = 0,
                                e = i,
                                i = t.child; i !== null; )
                                    Hd(i, e),
                                    i = i.sibling;
                                return F(We, We.current & 1 | 2),
                                we && En(t, s.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && St() > Sl && (t.flags |= 128,
                    o = !0,
                    Zr(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = nl(c),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        pl(t, e),
                        Zr(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !c.alternate && !we)
                            return Xe(t),
                            null
                    } else
                        2 * St() - s.renderingStartTime > Sl && i !== 536870912 && (t.flags |= 128,
                        o = !0,
                        Zr(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (c.sibling = t.child,
                t.child = c) : (e = s.last,
                e !== null ? e.sibling = c : t.child = c,
                s.last = c)
            }
            return s.tail !== null ? (e = s.tail,
            s.rendering = e,
            s.tail = e.sibling,
            s.renderingStartTime = St(),
            e.sibling = null,
            i = We.current,
            F(We, o ? i & 1 | 2 : i & 1),
            we && En(t, s.treeForkCount),
            e) : (Xe(t),
            null);
        case 22:
        case 23:
            return Ht(t),
            xo(),
            s = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192),
            s ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (Xe(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t),
            i = t.updateQueue,
            i !== null && pl(t, i.retryQueue),
            i = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            s = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
            s !== i && (t.flags |= 2048),
            e !== null && V(Qa),
            null;
        case 24:
            return i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Rn(tt),
            Xe(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(l(156, t.tag))
    }
    function nb(e, t) {
        switch (so(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Rn(tt),
            qe(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return gn(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (Ht(t),
                t.alternate === null)
                    throw Error(l(340));
                Za()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (Ht(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(l(340));
                Za()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return V(We),
            null;
        case 4:
            return qe(),
            null;
        case 10:
            return Rn(t.type),
            null;
        case 22:
        case 23:
            return Ht(t),
            xo(),
            e !== null && V(Qa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Rn(tt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function dm(e, t) {
        switch (so(t),
        t.tag) {
        case 3:
            Rn(tt),
            qe();
            break;
        case 26:
        case 27:
        case 5:
            gn(t);
            break;
        case 4:
            qe();
            break;
        case 31:
            t.memoizedState !== null && Ht(t);
            break;
        case 13:
            Ht(t);
            break;
        case 19:
            V(We);
            break;
        case 10:
            Rn(t.type);
            break;
        case 22:
        case 23:
            Ht(t),
            xo(),
            e !== null && V(Qa);
            break;
        case 24:
            Rn(tt)
        }
    }
    function Vr(e, t) {
        try {
            var i = t.updateQueue
              , s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var o = s.next;
                i = o;
                do {
                    if ((i.tag & e) === e) {
                        s = void 0;
                        var c = i.create
                          , m = i.inst;
                        s = c(),
                        m.destroy = s
                    }
                    i = i.next
                } while (i !== o)
            }
        } catch (b) {
            Ue(t, t.return, b)
        }
    }
    function aa(e, t, i) {
        try {
            var s = t.updateQueue
              , o = s !== null ? s.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                s = c;
                do {
                    if ((s.tag & e) === e) {
                        var m = s.inst
                          , b = m.destroy;
                        if (b !== void 0) {
                            m.destroy = void 0,
                            o = t;
                            var w = i
                              , N = b;
                            try {
                                N()
                            } catch (B) {
                                Ue(o, w, B)
                            }
                        }
                    }
                    s = s.next
                } while (s !== c)
            }
        } catch (B) {
            Ue(t, t.return, B)
        }
    }
    function hm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var i = e.stateNode;
            try {
                ah(t, i)
            } catch (s) {
                Ue(e, e.return, s)
            }
        }
    }
    function mm(e, t, i) {
        i.props = Fa(e.type, e.memoizedProps),
        i.state = e.memoizedState;
        try {
            i.componentWillUnmount()
        } catch (s) {
            Ue(e, t, s)
        }
    }
    function Yr(e, t) {
        try {
            var i = e.ref;
            if (i !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var s = e.stateNode;
                    break;
                case 30:
                    s = e.stateNode;
                    break;
                default:
                    s = e.stateNode
                }
                typeof i == "function" ? e.refCleanup = i(s) : i.current = s
            }
        } catch (o) {
            Ue(e, t, o)
        }
    }
    function fn(e, t) {
        var i = e.ref
          , s = e.refCleanup;
        if (i !== null)
            if (typeof s == "function")
                try {
                    s()
                } catch (o) {
                    Ue(e, t, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof i == "function")
                try {
                    i(null)
                } catch (o) {
                    Ue(e, t, o)
                }
            else
                i.current = null
    }
    function pm(e) {
        var t = e.type
          , i = e.memoizedProps
          , s = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                i.autoFocus && s.focus();
                break e;
            case "img":
                i.src ? s.src = i.src : i.srcSet && (s.srcset = i.srcSet)
            }
        } catch (o) {
            Ue(e, e.return, o)
        }
    }
    function ec(e, t, i) {
        try {
            var s = e.stateNode;
            wb(s, e.type, i, t),
            s[wt] = t
        } catch (o) {
            Ue(e, e.return, o)
        }
    }
    function ym(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ca(e.type) || e.tag === 4
    }
    function tc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || ym(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && ca(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function nc(e, t, i) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i,
            t.appendChild(e),
            i = i._reactRootContainer,
            i != null || t.onclick !== null || (t.onclick = Sn));
        else if (s !== 4 && (s === 27 && ca(e.type) && (i = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (nc(e, t, i),
            e = e.sibling; e !== null; )
                nc(e, t, i),
                e = e.sibling
    }
    function yl(e, t, i) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (s !== 4 && (s === 27 && ca(e.type) && (i = e.stateNode),
        e = e.child,
        e !== null))
            for (yl(e, t, i),
            e = e.sibling; e !== null; )
                yl(e, t, i),
                e = e.sibling
    }
    function gm(e) {
        var t = e.stateNode
          , i = e.memoizedProps;
        try {
            for (var s = e.type, o = t.attributes; o.length; )
                t.removeAttributeNode(o[0]);
            vt(t, s, i),
            t[mt] = e,
            t[wt] = i
        } catch (c) {
            Ue(e, e.return, c)
        }
    }
    var Mn = !1
      , it = !1
      , ac = !1
      , vm = typeof WeakSet == "function" ? WeakSet : Set
      , ft = null;
    function ab(e, t) {
        if (e = e.containerInfo,
        wc = Bl,
        e = Md(e),
        Fu(e)) {
            if ("selectionStart"in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var s = i.getSelection && i.getSelection();
                    if (s && s.rangeCount !== 0) {
                        i = s.anchorNode;
                        var o = s.anchorOffset
                          , c = s.focusNode;
                        s = s.focusOffset;
                        try {
                            i.nodeType,
                            c.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var m = 0
                          , b = -1
                          , w = -1
                          , N = 0
                          , B = 0
                          , Y = e
                          , j = null;
                        t: for (; ; ) {
                            for (var L; Y !== i || o !== 0 && Y.nodeType !== 3 || (b = m + o),
                            Y !== c || s !== 0 && Y.nodeType !== 3 || (w = m + s),
                            Y.nodeType === 3 && (m += Y.nodeValue.length),
                            (L = Y.firstChild) !== null; )
                                j = Y,
                                Y = L;
                            for (; ; ) {
                                if (Y === e)
                                    break t;
                                if (j === i && ++N === o && (b = m),
                                j === c && ++B === s && (w = m),
                                (L = Y.nextSibling) !== null)
                                    break;
                                Y = j,
                                j = Y.parentNode
                            }
                            Y = L
                        }
                        i = b === -1 || w === -1 ? null : {
                            start: b,
                            end: w
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (Rc = {
            focusedElem: e,
            selectionRange: i
        },
        Bl = !1,
        ft = t; ft !== null; )
            if (t = ft,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                ft = e;
            else
                for (; ft !== null; ) {
                    switch (t = ft,
                    c = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (i = 0; i < e.length; i++)
                                o = e[i],
                                o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0,
                            i = t,
                            o = c.memoizedProps,
                            c = c.memoizedState,
                            s = i.stateNode;
                            try {
                                var te = Fa(i.type, o);
                                e = s.getSnapshotBeforeUpdate(te, c),
                                s.__reactInternalSnapshotBeforeUpdate = e
                            } catch (fe) {
                                Ue(i, i.return, fe)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            i = e.nodeType,
                            i === 9)
                                Oc(e);
                            else if (i === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Oc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(l(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        ft = e;
                        break
                    }
                    ft = t.return
                }
    }
    function bm(e, t, i) {
        var s = i.flags;
        switch (i.tag) {
        case 0:
        case 11:
        case 15:
            Dn(e, i),
            s & 4 && Vr(5, i);
            break;
        case 1:
            if (Dn(e, i),
            s & 4)
                if (e = i.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (m) {
                        Ue(i, i.return, m)
                    }
                else {
                    var o = Fa(i.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (m) {
                        Ue(i, i.return, m)
                    }
                }
            s & 64 && hm(i),
            s & 512 && Yr(i, i.return);
            break;
        case 3:
            if (Dn(e, i),
            s & 64 && (e = i.updateQueue,
            e !== null)) {
                if (t = null,
                i.child !== null)
                    switch (i.child.tag) {
                    case 27:
                    case 5:
                        t = i.child.stateNode;
                        break;
                    case 1:
                        t = i.child.stateNode
                    }
                try {
                    ah(e, t)
                } catch (m) {
                    Ue(i, i.return, m)
                }
            }
            break;
        case 27:
            t === null && s & 4 && gm(i);
        case 26:
        case 5:
            Dn(e, i),
            t === null && s & 4 && pm(i),
            s & 512 && Yr(i, i.return);
            break;
        case 12:
            Dn(e, i);
            break;
        case 31:
            Dn(e, i),
            s & 4 && xm(e, i);
            break;
        case 13:
            Dn(e, i),
            s & 4 && Em(e, i),
            s & 64 && (e = i.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (i = db.bind(null, i),
            Db(e, i))));
            break;
        case 22:
            if (s = i.memoizedState !== null || Mn,
            !s) {
                t = t !== null && t.memoizedState !== null || it,
                o = Mn;
                var c = it;
                Mn = s,
                (it = t) && !c ? Nn(e, i, (i.subtreeFlags & 8772) !== 0) : Dn(e, i),
                Mn = o,
                it = c
            }
            break;
        case 30:
            break;
        default:
            Dn(e, i)
        }
    }
    function Sm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Sm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Du(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Pe = null
      , Tt = !1;
    function zn(e, t, i) {
        for (i = i.child; i !== null; )
            _m(e, t, i),
            i = i.sibling
    }
    function _m(e, t, i) {
        if (jt && typeof jt.onCommitFiberUnmount == "function")
            try {
                jt.onCommitFiberUnmount(hr, i)
            } catch {}
        switch (i.tag) {
        case 26:
            it || fn(i, t),
            zn(e, t, i),
            i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode,
            i.parentNode.removeChild(i));
            break;
        case 27:
            it || fn(i, t);
            var s = Pe
              , o = Tt;
            ca(i.type) && (Pe = i.stateNode,
            Tt = !1),
            zn(e, t, i),
            $r(i.stateNode),
            Pe = s,
            Tt = o;
            break;
        case 5:
            it || fn(i, t);
        case 6:
            if (s = Pe,
            o = Tt,
            Pe = null,
            zn(e, t, i),
            Pe = s,
            Tt = o,
            Pe !== null)
                if (Tt)
                    try {
                        (Pe.nodeType === 9 ? Pe.body : Pe.nodeName === "HTML" ? Pe.ownerDocument.body : Pe).removeChild(i.stateNode)
                    } catch (c) {
                        Ue(i, t, c)
                    }
                else
                    try {
                        Pe.removeChild(i.stateNode)
                    } catch (c) {
                        Ue(i, t, c)
                    }
            break;
        case 18:
            Pe !== null && (Tt ? (e = Pe,
            hp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, i.stateNode),
            Fi(e)) : hp(Pe, i.stateNode));
            break;
        case 4:
            s = Pe,
            o = Tt,
            Pe = i.stateNode.containerInfo,
            Tt = !0,
            zn(e, t, i),
            Pe = s,
            Tt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            aa(2, i, t),
            it || aa(4, i, t),
            zn(e, t, i);
            break;
        case 1:
            it || (fn(i, t),
            s = i.stateNode,
            typeof s.componentWillUnmount == "function" && mm(i, t, s)),
            zn(e, t, i);
            break;
        case 21:
            zn(e, t, i);
            break;
        case 22:
            it = (s = it) || i.memoizedState !== null,
            zn(e, t, i),
            it = s;
            break;
        default:
            zn(e, t, i)
        }
    }
    function xm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Fi(e)
            } catch (i) {
                Ue(t, t.return, i)
            }
        }
    }
    function Em(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Fi(e)
            } catch (i) {
                Ue(t, t.return, i)
            }
    }
    function ib(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new vm),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new vm),
            t;
        default:
            throw Error(l(435, e.tag))
        }
    }
    function gl(e, t) {
        var i = ib(e);
        t.forEach(function(s) {
            if (!i.has(s)) {
                i.add(s);
                var o = hb.bind(null, e, s);
                s.then(o, o)
            }
        })
    }
    function At(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var s = 0; s < i.length; s++) {
                var o = i[s]
                  , c = e
                  , m = t
                  , b = m;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (ca(b.type)) {
                            Pe = b.stateNode,
                            Tt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Pe = b.stateNode,
                        Tt = !1;
                        break e;
                    case 3:
                    case 4:
                        Pe = b.stateNode.containerInfo,
                        Tt = !0;
                        break e
                    }
                    b = b.return
                }
                if (Pe === null)
                    throw Error(l(160));
                _m(c, m, o),
                Pe = null,
                Tt = !1,
                c = o.alternate,
                c !== null && (c.return = null),
                o.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                wm(t, e),
                t = t.sibling
    }
    var an = null;
    function wm(e, t) {
        var i = e.alternate
          , s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            At(t, e),
            Ot(e),
            s & 4 && (aa(3, e, e.return),
            Vr(3, e),
            aa(5, e, e.return));
            break;
        case 1:
            At(t, e),
            Ot(e),
            s & 512 && (it || i === null || fn(i, i.return)),
            s & 64 && Mn && (e = e.updateQueue,
            e !== null && (s = e.callbacks,
            s !== null && (i = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = i === null ? s : i.concat(s))));
            break;
        case 26:
            var o = an;
            if (At(t, e),
            Ot(e),
            s & 512 && (it || i === null || fn(i, i.return)),
            s & 4) {
                var c = i !== null ? i.memoizedState : null;
                if (s = e.memoizedState,
                i === null)
                    if (s === null)
                        if (e.stateNode === null) {
                            e: {
                                s = e.type,
                                i = e.memoizedProps,
                                o = o.ownerDocument || o;
                                t: switch (s) {
                                case "title":
                                    c = o.getElementsByTagName("title")[0],
                                    (!c || c[yr] || c[mt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(s),
                                    o.head.insertBefore(c, o.querySelector("head > title"))),
                                    vt(c, s, i),
                                    c[mt] = e,
                                    ct(c),
                                    s = c;
                                    break e;
                                case "link":
                                    var m = wp("link", "href", o).get(s + (i.href || ""));
                                    if (m) {
                                        for (var b = 0; b < m.length; b++)
                                            if (c = m[b],
                                            c.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && c.getAttribute("rel") === (i.rel == null ? null : i.rel) && c.getAttribute("title") === (i.title == null ? null : i.title) && c.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(s),
                                    vt(c, s, i),
                                    o.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (m = wp("meta", "content", o).get(s + (i.content || ""))) {
                                        for (b = 0; b < m.length; b++)
                                            if (c = m[b],
                                            c.getAttribute("content") === (i.content == null ? null : "" + i.content) && c.getAttribute("name") === (i.name == null ? null : i.name) && c.getAttribute("property") === (i.property == null ? null : i.property) && c.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && c.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(s),
                                    vt(c, s, i),
                                    o.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(l(468, s))
                                }
                                c[mt] = e,
                                ct(c),
                                s = c
                            }
                            e.stateNode = s
                        } else
                            Rp(o, e.type, e.stateNode);
                    else
                        e.stateNode = Ep(o, s, e.memoizedProps);
                else
                    c !== s ? (c === null ? i.stateNode !== null && (i = i.stateNode,
                    i.parentNode.removeChild(i)) : c.count--,
                    s === null ? Rp(o, e.type, e.stateNode) : Ep(o, s, e.memoizedProps)) : s === null && e.stateNode !== null && ec(e, e.memoizedProps, i.memoizedProps)
            }
            break;
        case 27:
            At(t, e),
            Ot(e),
            s & 512 && (it || i === null || fn(i, i.return)),
            i !== null && s & 4 && ec(e, e.memoizedProps, i.memoizedProps);
            break;
        case 5:
            if (At(t, e),
            Ot(e),
            s & 512 && (it || i === null || fn(i, i.return)),
            e.flags & 32) {
                o = e.stateNode;
                try {
                    vi(o, "")
                } catch (te) {
                    Ue(e, e.return, te)
                }
            }
            s & 4 && e.stateNode != null && (o = e.memoizedProps,
            ec(e, o, i !== null ? i.memoizedProps : o)),
            s & 1024 && (ac = !0);
            break;
        case 6:
            if (At(t, e),
            Ot(e),
            s & 4) {
                if (e.stateNode === null)
                    throw Error(l(162));
                s = e.memoizedProps,
                i = e.stateNode;
                try {
                    i.nodeValue = s
                } catch (te) {
                    Ue(e, e.return, te)
                }
            }
            break;
        case 3:
            if (Nl = null,
            o = an,
            an = zl(t.containerInfo),
            At(t, e),
            an = o,
            Ot(e),
            s & 4 && i !== null && i.memoizedState.isDehydrated)
                try {
                    Fi(t.containerInfo)
                } catch (te) {
                    Ue(e, e.return, te)
                }
            ac && (ac = !1,
            Rm(e));
            break;
        case 4:
            s = an,
            an = zl(e.stateNode.containerInfo),
            At(t, e),
            Ot(e),
            an = s;
            break;
        case 12:
            At(t, e),
            Ot(e);
            break;
        case 31:
            At(t, e),
            Ot(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            gl(e, s)));
            break;
        case 13:
            At(t, e),
            Ot(e),
            e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (bl = St()),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            gl(e, s)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var w = i !== null && i.memoizedState !== null
              , N = Mn
              , B = it;
            if (Mn = N || o,
            it = B || w,
            At(t, e),
            it = B,
            Mn = N,
            Ot(e),
            s & 8192)
                e: for (t = e.stateNode,
                t._visibility = o ? t._visibility & -2 : t._visibility | 1,
                o && (i === null || w || Mn || it || Ja(e)),
                i = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (i === null) {
                            w = i = t;
                            try {
                                if (c = w.stateNode,
                                o)
                                    m = c.style,
                                    typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                else {
                                    b = w.stateNode;
                                    var Y = w.memoizedProps.style
                                      , j = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    b.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim()
                                }
                            } catch (te) {
                                Ue(w, w.return, te)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (i === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = o ? "" : w.memoizedProps
                            } catch (te) {
                                Ue(w, w.return, te)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (i === null) {
                            w = t;
                            try {
                                var L = w.stateNode;
                                o ? mp(L, !0) : mp(w.stateNode, !1)
                            } catch (te) {
                                Ue(w, w.return, te)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        i === t && (i = null),
                        t = t.return
                    }
                    i === t && (i = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            s & 4 && (s = e.updateQueue,
            s !== null && (i = s.retryQueue,
            i !== null && (s.retryQueue = null,
            gl(e, i))));
            break;
        case 19:
            At(t, e),
            Ot(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            gl(e, s)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            At(t, e),
            Ot(e)
        }
    }
    function Ot(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var i, s = e.return; s !== null; ) {
                    if (ym(s)) {
                        i = s;
                        break
                    }
                    s = s.return
                }
                if (i == null)
                    throw Error(l(160));
                switch (i.tag) {
                case 27:
                    var o = i.stateNode
                      , c = tc(e);
                    yl(e, c, o);
                    break;
                case 5:
                    var m = i.stateNode;
                    i.flags & 32 && (vi(m, ""),
                    i.flags &= -33);
                    var b = tc(e);
                    yl(e, b, m);
                    break;
                case 3:
                case 4:
                    var w = i.stateNode.containerInfo
                      , N = tc(e);
                    nc(e, N, w);
                    break;
                default:
                    throw Error(l(161))
                }
            } catch (B) {
                Ue(e, e.return, B)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Rm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Rm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Dn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                bm(e, t.alternate, t),
                t = t.sibling
    }
    function Ja(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                aa(4, t, t.return),
                Ja(t);
                break;
            case 1:
                fn(t, t.return);
                var i = t.stateNode;
                typeof i.componentWillUnmount == "function" && mm(t, t.return, i),
                Ja(t);
                break;
            case 27:
                $r(t.stateNode);
            case 26:
            case 5:
                fn(t, t.return),
                Ja(t);
                break;
            case 22:
                t.memoizedState === null && Ja(t);
                break;
            case 30:
                Ja(t);
                break;
            default:
                Ja(t)
            }
            e = e.sibling
        }
    }
    function Nn(e, t, i) {
        for (i = i && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var s = t.alternate
              , o = e
              , c = t
              , m = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Nn(o, c, i),
                Vr(4, c);
                break;
            case 1:
                if (Nn(o, c, i),
                s = c,
                o = s.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (N) {
                        Ue(s, s.return, N)
                    }
                if (s = c,
                o = s.updateQueue,
                o !== null) {
                    var b = s.stateNode;
                    try {
                        var w = o.shared.hiddenCallbacks;
                        if (w !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < w.length; o++)
                                nh(w[o], b)
                    } catch (N) {
                        Ue(s, s.return, N)
                    }
                }
                i && m & 64 && hm(c),
                Yr(c, c.return);
                break;
            case 27:
                gm(c);
            case 26:
            case 5:
                Nn(o, c, i),
                i && s === null && m & 4 && pm(c),
                Yr(c, c.return);
                break;
            case 12:
                Nn(o, c, i);
                break;
            case 31:
                Nn(o, c, i),
                i && m & 4 && xm(o, c);
                break;
            case 13:
                Nn(o, c, i),
                i && m & 4 && Em(o, c);
                break;
            case 22:
                c.memoizedState === null && Nn(o, c, i),
                Yr(c, c.return);
                break;
            case 30:
                break;
            default:
                Nn(o, c, i)
            }
            t = t.sibling
        }
    }
    function ic(e, t) {
        var i = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== i && (e != null && e.refCount++,
        i != null && Cr(i))
    }
    function rc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Cr(e))
    }
    function rn(e, t, i, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Tm(e, t, i, s),
                t = t.sibling
    }
    function Tm(e, t, i, s) {
        var o = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            rn(e, t, i, s),
            o & 2048 && Vr(9, t);
            break;
        case 1:
            rn(e, t, i, s);
            break;
        case 3:
            rn(e, t, i, s),
            o & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Cr(e)));
            break;
        case 12:
            if (o & 2048) {
                rn(e, t, i, s),
                e = t.stateNode;
                try {
                    var c = t.memoizedProps
                      , m = c.id
                      , b = c.onPostCommit;
                    typeof b == "function" && b(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (w) {
                    Ue(t, t.return, w)
                }
            } else
                rn(e, t, i, s);
            break;
        case 31:
            rn(e, t, i, s);
            break;
        case 13:
            rn(e, t, i, s);
            break;
        case 23:
            break;
        case 22:
            c = t.stateNode,
            m = t.alternate,
            t.memoizedState !== null ? c._visibility & 2 ? rn(e, t, i, s) : Qr(e, t) : c._visibility & 2 ? rn(e, t, i, s) : (c._visibility |= 2,
            ki(e, t, i, s, (t.subtreeFlags & 10256) !== 0 || !1)),
            o & 2048 && ic(m, t);
            break;
        case 24:
            rn(e, t, i, s),
            o & 2048 && rc(t.alternate, t);
            break;
        default:
            rn(e, t, i, s)
        }
    }
    function ki(e, t, i, s, o) {
        for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var c = e
              , m = t
              , b = i
              , w = s
              , N = m.flags;
            switch (m.tag) {
            case 0:
            case 11:
            case 15:
                ki(c, m, b, w, o),
                Vr(8, m);
                break;
            case 23:
                break;
            case 22:
                var B = m.stateNode;
                m.memoizedState !== null ? B._visibility & 2 ? ki(c, m, b, w, o) : Qr(c, m) : (B._visibility |= 2,
                ki(c, m, b, w, o)),
                o && N & 2048 && ic(m.alternate, m);
                break;
            case 24:
                ki(c, m, b, w, o),
                o && N & 2048 && rc(m.alternate, m);
                break;
            default:
                ki(c, m, b, w, o)
            }
            t = t.sibling
        }
    }
    function Qr(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var i = e
                  , s = t
                  , o = s.flags;
                switch (s.tag) {
                case 22:
                    Qr(i, s),
                    o & 2048 && ic(s.alternate, s);
                    break;
                case 24:
                    Qr(i, s),
                    o & 2048 && rc(s.alternate, s);
                    break;
                default:
                    Qr(i, s)
                }
                t = t.sibling
            }
    }
    var Gr = 8192;
    function Hi(e, t, i) {
        if (e.subtreeFlags & Gr)
            for (e = e.child; e !== null; )
                Am(e, t, i),
                e = e.sibling
    }
    function Am(e, t, i) {
        switch (e.tag) {
        case 26:
            Hi(e, t, i),
            e.flags & Gr && e.memoizedState !== null && Qb(i, an, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Hi(e, t, i);
            break;
        case 3:
        case 4:
            var s = an;
            an = zl(e.stateNode.containerInfo),
            Hi(e, t, i),
            an = s;
            break;
        case 22:
            e.memoizedState === null && (s = e.alternate,
            s !== null && s.memoizedState !== null ? (s = Gr,
            Gr = 16777216,
            Hi(e, t, i),
            Gr = s) : Hi(e, t, i));
            break;
        default:
            Hi(e, t, i)
        }
    }
    function Om(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Xr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    ft = s,
                    Mm(s, e)
                }
            Om(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Cm(e),
                e = e.sibling
    }
    function Cm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Xr(e),
            e.flags & 2048 && aa(9, e, e.return);
            break;
        case 3:
            Xr(e);
            break;
        case 12:
            Xr(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            vl(e)) : Xr(e);
            break;
        default:
            Xr(e)
        }
    }
    function vl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    ft = s,
                    Mm(s, e)
                }
            Om(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                aa(8, t, t.return),
                vl(t);
                break;
            case 22:
                i = t.stateNode,
                i._visibility & 2 && (i._visibility &= -3,
                vl(t));
                break;
            default:
                vl(t)
            }
            e = e.sibling
        }
    }
    function Mm(e, t) {
        for (; ft !== null; ) {
            var i = ft;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                aa(8, i, t);
                break;
            case 23:
            case 22:
                if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                    var s = i.memoizedState.cachePool.pool;
                    s != null && s.refCount++
                }
                break;
            case 24:
                Cr(i.memoizedState.cache)
            }
            if (s = i.child,
            s !== null)
                s.return = i,
                ft = s;
            else
                e: for (i = e; ft !== null; ) {
                    s = ft;
                    var o = s.sibling
                      , c = s.return;
                    if (Sm(s),
                    s === i) {
                        ft = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = c,
                        ft = o;
                        break e
                    }
                    ft = c
                }
        }
    }
    var rb = {
        getCacheForType: function(e) {
            var t = yt(tt)
              , i = t.data.get(e);
            return i === void 0 && (i = e(),
            t.data.set(e, i)),
            i
        },
        cacheSignal: function() {
            return yt(tt).controller.signal
        }
    }
      , sb = typeof WeakMap == "function" ? WeakMap : Map
      , De = 0
      , Ze = null
      , be = null
      , xe = 0
      , Le = 0
      , qt = null
      , ia = !1
      , qi = !1
      , sc = !1
      , jn = 0
      , Je = 0
      , ra = 0
      , Ia = 0
      , lc = 0
      , Zt = 0
      , Zi = 0
      , Pr = null
      , Ct = null
      , uc = !1
      , bl = 0
      , zm = 0
      , Sl = 1 / 0
      , _l = null
      , sa = null
      , lt = 0
      , la = null
      , Vi = null
      , Ln = 0
      , oc = 0
      , cc = null
      , Dm = null
      , Kr = 0
      , fc = null;
    function Vt() {
        return (De & 2) !== 0 && xe !== 0 ? xe & -xe : U.T !== null ? gc() : Kf()
    }
    function Nm() {
        if (Zt === 0)
            if ((xe & 536870912) === 0 || we) {
                var e = Cs;
                Cs <<= 1,
                (Cs & 3932160) === 0 && (Cs = 262144),
                Zt = e
            } else
                Zt = 536870912;
        return e = kt.current,
        e !== null && (e.flags |= 32),
        Zt
    }
    function Mt(e, t, i) {
        (e === Ze && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null) && (Yi(e, 0),
        ua(e, xe, Zt, !1)),
        pr(e, i),
        ((De & 2) === 0 || e !== Ze) && (e === Ze && ((De & 2) === 0 && (Ia |= i),
        Je === 4 && ua(e, xe, Zt, !1)),
        dn(e))
    }
    function jm(e, t, i) {
        if ((De & 6) !== 0)
            throw Error(l(327));
        var s = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || mr(e, t)
          , o = s ? ob(e, t) : hc(e, t, !0)
          , c = s;
        do {
            if (o === 0) {
                qi && !s && ua(e, t, 0, !1);
                break
            } else {
                if (i = e.current.alternate,
                c && !lb(i)) {
                    o = hc(e, t, !1),
                    c = !1;
                    continue
                }
                if (o === 2) {
                    if (c = t,
                    e.errorRecoveryDisabledLanes & c)
                        var m = 0;
                    else
                        m = e.pendingLanes & -536870913,
                        m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        t = m;
                        e: {
                            var b = e;
                            o = Pr;
                            var w = b.current.memoizedState.isDehydrated;
                            if (w && (Yi(b, m).flags |= 256),
                            m = hc(b, m, !1),
                            m !== 2) {
                                if (sc && !w) {
                                    b.errorRecoveryDisabledLanes |= c,
                                    Ia |= c,
                                    o = 4;
                                    break e
                                }
                                c = Ct,
                                Ct = o,
                                c !== null && (Ct === null ? Ct = c : Ct.push.apply(Ct, c))
                            }
                            o = m
                        }
                        if (c = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    Yi(e, 0),
                    ua(e, t, 0, !0);
                    break
                }
                e: {
                    switch (s = e,
                    c = o,
                    c) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ua(s, t, Zt, !ia);
                        break e;
                    case 2:
                        Ct = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                    }
                    if ((t & 62914560) === t && (o = bl + 300 - St(),
                    10 < o)) {
                        if (ua(s, t, Zt, !ia),
                        zs(s, 0, !0) !== 0)
                            break e;
                        Ln = t,
                        s.timeoutHandle = fp(Lm.bind(null, s, i, Ct, _l, uc, t, Zt, Ia, Zi, ia, c, "Throttled", -0, 0), o);
                        break e
                    }
                    Lm(s, i, Ct, _l, uc, t, Zt, Ia, Zi, ia, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        dn(e)
    }
    function Lm(e, t, i, s, o, c, m, b, w, N, B, Y, j, L) {
        if (e.timeoutHandle = -1,
        Y = t.subtreeFlags,
        Y & 8192 || (Y & 16785408) === 16785408) {
            Y = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Sn
            },
            Am(t, c, Y);
            var te = (c & 62914560) === c ? bl - St() : (c & 4194048) === c ? zm - St() : 0;
            if (te = Gb(Y, te),
            te !== null) {
                Ln = c,
                e.cancelPendingCommit = te(Ym.bind(null, e, t, c, i, s, o, m, b, w, B, Y, null, j, L)),
                ua(e, c, m, !N);
                return
            }
        }
        Ym(e, t, c, i, s, o, m, b, w)
    }
    function lb(e) {
        for (var t = e; ; ) {
            var i = t.tag;
            if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue,
            i !== null && (i = i.stores,
            i !== null)))
                for (var s = 0; s < i.length; s++) {
                    var o = i[s]
                      , c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ut(c(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (i = t.child,
            t.subtreeFlags & 16384 && i !== null)
                i.return = t,
                t = i;
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
    function ua(e, t, i, s) {
        t &= ~lc,
        t &= ~Ia,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        s && (e.warmLanes |= t),
        s = e.expirationTimes;
        for (var o = t; 0 < o; ) {
            var c = 31 - Lt(o)
              , m = 1 << c;
            s[c] = -1,
            o &= ~m
        }
        i !== 0 && Gf(e, i, t)
    }
    function xl() {
        return (De & 6) === 0 ? (Fr(0),
        !1) : !0
    }
    function dc() {
        if (be !== null) {
            if (Le === 0)
                var e = be.return;
            else
                e = be,
                wn = Va = null,
                Oo(e),
                Ni = null,
                zr = 0,
                e = be;
            for (; e !== null; )
                dm(e.alternate, e),
                e = e.return;
            be = null
        }
    }
    function Yi(e, t) {
        var i = e.timeoutHandle;
        i !== -1 && (e.timeoutHandle = -1,
        Ab(i)),
        i = e.cancelPendingCommit,
        i !== null && (e.cancelPendingCommit = null,
        i()),
        Ln = 0,
        dc(),
        Ze = e,
        be = i = xn(e.current, null),
        xe = t,
        Le = 0,
        qt = null,
        ia = !1,
        qi = mr(e, t),
        sc = !1,
        Zi = Zt = lc = Ia = ra = Je = 0,
        Ct = Pr = null,
        uc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements,
            s &= t; 0 < s; ) {
                var o = 31 - Lt(s)
                  , c = 1 << o;
                t |= e[o],
                s &= ~c
            }
        return jn = t,
        Ys(),
        i
    }
    function Um(e, t) {
        pe = null,
        U.H = Hr,
        t === Di || t === Is ? (t = $d(),
        Le = 3) : t === yo ? (t = $d(),
        Le = 4) : Le = t === Qo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        qt = t,
        be === null && (Je = 1,
        fl(e, Pt(t, e.current)))
    }
    function Bm() {
        var e = kt.current;
        return e === null ? !0 : (xe & 4194048) === xe ? It === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === It : !1
    }
    function km() {
        var e = U.H;
        return U.H = Hr,
        e === null ? Hr : e
    }
    function Hm() {
        var e = U.A;
        return U.A = rb,
        e
    }
    function El() {
        Je = 4,
        ia || (xe & 4194048) !== xe && kt.current !== null || (qi = !0),
        (ra & 134217727) === 0 && (Ia & 134217727) === 0 || Ze === null || ua(Ze, xe, Zt, !1)
    }
    function hc(e, t, i) {
        var s = De;
        De |= 2;
        var o = km()
          , c = Hm();
        (Ze !== e || xe !== t) && (_l = null,
        Yi(e, t)),
        t = !1;
        var m = Je;
        e: do
            try {
                if (Le !== 0 && be !== null) {
                    var b = be
                      , w = qt;
                    switch (Le) {
                    case 8:
                        dc(),
                        m = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        kt.current === null && (t = !0);
                        var N = Le;
                        if (Le = 0,
                        qt = null,
                        Qi(e, b, w, N),
                        i && qi) {
                            m = 0;
                            break e
                        }
                        break;
                    default:
                        N = Le,
                        Le = 0,
                        qt = null,
                        Qi(e, b, w, N)
                    }
                }
                ub(),
                m = Je;
                break
            } catch (B) {
                Um(e, B)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        wn = Va = null,
        De = s,
        U.H = o,
        U.A = c,
        be === null && (Ze = null,
        xe = 0,
        Ys()),
        m
    }
    function ub() {
        for (; be !== null; )
            qm(be)
    }
    function ob(e, t) {
        var i = De;
        De |= 2;
        var s = km()
          , o = Hm();
        Ze !== e || xe !== t ? (_l = null,
        Sl = St() + 500,
        Yi(e, t)) : qi = mr(e, t);
        e: do
            try {
                if (Le !== 0 && be !== null) {
                    t = be;
                    var c = qt;
                    t: switch (Le) {
                    case 1:
                        Le = 0,
                        qt = null,
                        Qi(e, t, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (Jd(c)) {
                            Le = 0,
                            qt = null,
                            Zm(t);
                            break
                        }
                        t = function() {
                            Le !== 2 && Le !== 9 || Ze !== e || (Le = 7),
                            dn(e)
                        }
                        ,
                        c.then(t, t);
                        break e;
                    case 3:
                        Le = 7;
                        break e;
                    case 4:
                        Le = 5;
                        break e;
                    case 7:
                        Jd(c) ? (Le = 0,
                        qt = null,
                        Zm(t)) : (Le = 0,
                        qt = null,
                        Qi(e, t, c, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (be.tag) {
                        case 26:
                            m = be.memoizedState;
                        case 5:
                        case 27:
                            var b = be;
                            if (m ? Tp(m) : b.stateNode.complete) {
                                Le = 0,
                                qt = null;
                                var w = b.sibling;
                                if (w !== null)
                                    be = w;
                                else {
                                    var N = b.return;
                                    N !== null ? (be = N,
                                    wl(N)) : be = null
                                }
                                break t
                            }
                        }
                        Le = 0,
                        qt = null,
                        Qi(e, t, c, 5);
                        break;
                    case 6:
                        Le = 0,
                        qt = null,
                        Qi(e, t, c, 6);
                        break;
                    case 8:
                        dc(),
                        Je = 6;
                        break e;
                    default:
                        throw Error(l(462))
                    }
                }
                cb();
                break
            } catch (B) {
                Um(e, B)
            }
        while (!0);
        return wn = Va = null,
        U.H = s,
        U.A = o,
        De = i,
        be !== null ? 0 : (Ze = null,
        xe = 0,
        Ys(),
        Je)
    }
    function cb() {
        for (; be !== null && !As(); )
            qm(be)
    }
    function qm(e) {
        var t = cm(e.alternate, e, jn);
        e.memoizedProps = e.pendingProps,
        t === null ? wl(e) : be = t
    }
    function Zm(e) {
        var t = e
          , i = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = im(i, t, t.pendingProps, t.type, void 0, xe);
            break;
        case 11:
            t = im(i, t, t.pendingProps, t.type.render, t.ref, xe);
            break;
        case 5:
            Oo(t);
        default:
            dm(i, t),
            t = be = Hd(t, jn),
            t = cm(i, t, jn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? wl(e) : be = t
    }
    function Qi(e, t, i, s) {
        wn = Va = null,
        Oo(t),
        Ni = null,
        zr = 0;
        var o = t.return;
        try {
            if ($0(e, o, t, i, xe)) {
                Je = 1,
                fl(e, Pt(i, e.current)),
                be = null;
                return
            }
        } catch (c) {
            if (o !== null)
                throw be = o,
                c;
            Je = 1,
            fl(e, Pt(i, e.current)),
            be = null;
            return
        }
        t.flags & 32768 ? (we || s === 1 ? e = !0 : qi || (xe & 536870912) !== 0 ? e = !1 : (ia = e = !0,
        (s === 2 || s === 9 || s === 3 || s === 6) && (s = kt.current,
        s !== null && s.tag === 13 && (s.flags |= 16384))),
        Vm(t, e)) : wl(t)
    }
    function wl(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Vm(t, ia);
                return
            }
            e = t.return;
            var i = tb(t.alternate, t, jn);
            if (i !== null) {
                be = i;
                return
            }
            if (t = t.sibling,
            t !== null) {
                be = t;
                return
            }
            be = t = e
        } while (t !== null);
        Je === 0 && (Je = 5)
    }
    function Vm(e, t) {
        do {
            var i = nb(e.alternate, e);
            if (i !== null) {
                i.flags &= 32767,
                be = i;
                return
            }
            if (i = e.return,
            i !== null && (i.flags |= 32768,
            i.subtreeFlags = 0,
            i.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                be = e;
                return
            }
            be = e = i
        } while (e !== null);
        Je = 6,
        be = null
    }
    function Ym(e, t, i, s, o, c, m, b, w) {
        e.cancelPendingCommit = null;
        do
            Rl();
        while (lt !== 0);
        if ((De & 6) !== 0)
            throw Error(l(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(l(177));
            if (c = t.lanes | t.childLanes,
            c |= eo,
            Yv(e, i, c, m, b, w),
            e === Ze && (be = Ze = null,
            xe = 0),
            Vi = t,
            la = e,
            Ln = i,
            oc = c,
            cc = o,
            Dm = s,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            mb(fi, function() {
                return Km(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            s = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || s) {
                s = U.T,
                U.T = null,
                o = K.p,
                K.p = 2,
                m = De,
                De |= 4;
                try {
                    ab(e, t, i)
                } finally {
                    De = m,
                    K.p = o,
                    U.T = s
                }
            }
            lt = 1,
            Qm(),
            Gm(),
            Xm()
        }
    }
    function Qm() {
        if (lt === 1) {
            lt = 0;
            var e = la
              , t = Vi
              , i = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || i) {
                i = U.T,
                U.T = null;
                var s = K.p;
                K.p = 2;
                var o = De;
                De |= 4;
                try {
                    wm(t, e);
                    var c = Rc
                      , m = Md(e.containerInfo)
                      , b = c.focusedElem
                      , w = c.selectionRange;
                    if (m !== b && b && b.ownerDocument && Cd(b.ownerDocument.documentElement, b)) {
                        if (w !== null && Fu(b)) {
                            var N = w.start
                              , B = w.end;
                            if (B === void 0 && (B = N),
                            "selectionStart"in b)
                                b.selectionStart = N,
                                b.selectionEnd = Math.min(B, b.value.length);
                            else {
                                var Y = b.ownerDocument || document
                                  , j = Y && Y.defaultView || window;
                                if (j.getSelection) {
                                    var L = j.getSelection()
                                      , te = b.textContent.length
                                      , fe = Math.min(w.start, te)
                                      , He = w.end === void 0 ? fe : Math.min(w.end, te);
                                    !L.extend && fe > He && (m = He,
                                    He = fe,
                                    fe = m);
                                    var z = Od(b, fe)
                                      , A = Od(b, He);
                                    if (z && A && (L.rangeCount !== 1 || L.anchorNode !== z.node || L.anchorOffset !== z.offset || L.focusNode !== A.node || L.focusOffset !== A.offset)) {
                                        var D = Y.createRange();
                                        D.setStart(z.node, z.offset),
                                        L.removeAllRanges(),
                                        fe > He ? (L.addRange(D),
                                        L.extend(A.node, A.offset)) : (D.setEnd(A.node, A.offset),
                                        L.addRange(D))
                                    }
                                }
                            }
                        }
                        for (Y = [],
                        L = b; L = L.parentNode; )
                            L.nodeType === 1 && Y.push({
                                element: L,
                                left: L.scrollLeft,
                                top: L.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < Y.length; b++) {
                            var q = Y[b];
                            q.element.scrollLeft = q.left,
                            q.element.scrollTop = q.top
                        }
                    }
                    Bl = !!wc,
                    Rc = wc = null
                } finally {
                    De = o,
                    K.p = s,
                    U.T = i
                }
            }
            e.current = t,
            lt = 2
        }
    }
    function Gm() {
        if (lt === 2) {
            lt = 0;
            var e = la
              , t = Vi
              , i = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || i) {
                i = U.T,
                U.T = null;
                var s = K.p;
                K.p = 2;
                var o = De;
                De |= 4;
                try {
                    bm(e, t.alternate, t)
                } finally {
                    De = o,
                    K.p = s,
                    U.T = i
                }
            }
            lt = 3
        }
    }
    function Xm() {
        if (lt === 4 || lt === 3) {
            lt = 0,
            Au();
            var e = la
              , t = Vi
              , i = Ln
              , s = Dm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0,
            Vi = la = null,
            Pm(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (o === 0 && (sa = null),
            Mu(i),
            t = t.stateNode,
            jt && typeof jt.onCommitFiberRoot == "function")
                try {
                    jt.onCommitFiberRoot(hr, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (s !== null) {
                t = U.T,
                o = K.p,
                K.p = 2,
                U.T = null;
                try {
                    for (var c = e.onRecoverableError, m = 0; m < s.length; m++) {
                        var b = s[m];
                        c(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    U.T = t,
                    K.p = o
                }
            }
            (Ln & 3) !== 0 && Rl(),
            dn(e),
            o = e.pendingLanes,
            (i & 261930) !== 0 && (o & 42) !== 0 ? e === fc ? Kr++ : (Kr = 0,
            fc = e) : Kr = 0,
            Fr(0)
        }
    }
    function Pm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Cr(t)))
    }
    function Rl() {
        return Qm(),
        Gm(),
        Xm(),
        Km()
    }
    function Km() {
        if (lt !== 5)
            return !1;
        var e = la
          , t = oc;
        oc = 0;
        var i = Mu(Ln)
          , s = U.T
          , o = K.p;
        try {
            K.p = 32 > i ? 32 : i,
            U.T = null,
            i = cc,
            cc = null;
            var c = la
              , m = Ln;
            if (lt = 0,
            Vi = la = null,
            Ln = 0,
            (De & 6) !== 0)
                throw Error(l(331));
            var b = De;
            if (De |= 4,
            Cm(c.current),
            Tm(c, c.current, m, i),
            De = b,
            Fr(0, !1),
            jt && typeof jt.onPostCommitFiberRoot == "function")
                try {
                    jt.onPostCommitFiberRoot(hr, c)
                } catch {}
            return !0
        } finally {
            K.p = o,
            U.T = s,
            Pm(e, t)
        }
    }
    function Fm(e, t, i) {
        t = Pt(i, t),
        t = Yo(e.stateNode, t, 2),
        e = ea(e, t, 2),
        e !== null && (pr(e, 2),
        dn(e))
    }
    function Ue(e, t, i) {
        if (e.tag === 3)
            Fm(e, e, i);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Fm(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (sa === null || !sa.has(s))) {
                        e = Pt(i, e),
                        i = Jh(2),
                        s = ea(t, i, 2),
                        s !== null && (Ih(i, s, t, e),
                        pr(s, 2),
                        dn(s));
                        break
                    }
                }
                t = t.return
            }
    }
    function mc(e, t, i) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new sb;
            var o = new Set;
            s.set(t, o)
        } else
            o = s.get(t),
            o === void 0 && (o = new Set,
            s.set(t, o));
        o.has(i) || (sc = !0,
        o.add(i),
        e = fb.bind(null, e, t, i),
        t.then(e, e))
    }
    function fb(e, t, i) {
        var s = e.pingCache;
        s !== null && s.delete(t),
        e.pingedLanes |= e.suspendedLanes & i,
        e.warmLanes &= ~i,
        Ze === e && (xe & i) === i && (Je === 4 || Je === 3 && (xe & 62914560) === xe && 300 > St() - bl ? (De & 2) === 0 && Yi(e, 0) : lc |= i,
        Zi === xe && (Zi = 0)),
        dn(e)
    }
    function Jm(e, t) {
        t === 0 && (t = Qf()),
        e = Ha(e, t),
        e !== null && (pr(e, t),
        dn(e))
    }
    function db(e) {
        var t = e.memoizedState
          , i = 0;
        t !== null && (i = t.retryLane),
        Jm(e, i)
    }
    function hb(e, t) {
        var i = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var s = e.stateNode
              , o = e.memoizedState;
            o !== null && (i = o.retryLane);
            break;
        case 19:
            s = e.stateNode;
            break;
        case 22:
            s = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
        }
        s !== null && s.delete(t),
        Jm(e, i)
    }
    function mb(e, t) {
        return tn(e, t)
    }
    var Tl = null
      , Gi = null
      , pc = !1
      , Al = !1
      , yc = !1
      , oa = 0;
    function dn(e) {
        e !== Gi && e.next === null && (Gi === null ? Tl = Gi = e : Gi = Gi.next = e),
        Al = !0,
        pc || (pc = !0,
        yb())
    }
    function Fr(e, t) {
        if (!yc && Al) {
            yc = !0;
            do
                for (var i = !1, s = Tl; s !== null; ) {
                    if (e !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0)
                            var c = 0;
                        else {
                            var m = s.suspendedLanes
                              , b = s.pingedLanes;
                            c = (1 << 31 - Lt(42 | e) + 1) - 1,
                            c &= o & ~(m & ~b),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (i = !0,
                        ep(s, c))
                    } else
                        c = xe,
                        c = zs(s, s === Ze ? c : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                        (c & 3) === 0 || mr(s, c) || (i = !0,
                        ep(s, c));
                    s = s.next
                }
            while (i);
            yc = !1
        }
    }
    function pb() {
        Im()
    }
    function Im() {
        Al = pc = !1;
        var e = 0;
        oa !== 0 && Tb() && (e = oa);
        for (var t = St(), i = null, s = Tl; s !== null; ) {
            var o = s.next
              , c = $m(s, t);
            c === 0 ? (s.next = null,
            i === null ? Tl = o : i.next = o,
            o === null && (Gi = i)) : (i = s,
            (e !== 0 || (c & 3) !== 0) && (Al = !0)),
            s = o
        }
        lt !== 0 && lt !== 5 || Fr(e),
        oa !== 0 && (oa = 0)
    }
    function $m(e, t) {
        for (var i = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
            var m = 31 - Lt(c)
              , b = 1 << m
              , w = o[m];
            w === -1 ? ((b & i) === 0 || (b & s) !== 0) && (o[m] = Vv(b, t)) : w <= t && (e.expiredLanes |= b),
            c &= ~b
        }
        if (t = Ze,
        i = xe,
        i = zs(e, e === t ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s = e.callbackNode,
        i === 0 || e === t && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null)
            return s !== null && s !== null && dr(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((i & 3) === 0 || mr(e, i)) {
            if (t = i & -i,
            t === e.callbackPriority)
                return t;
            switch (s !== null && dr(s),
            Mu(i)) {
            case 2:
            case 8:
                i = un;
                break;
            case 32:
                i = fi;
                break;
            case 268435456:
                i = Yf;
                break;
            default:
                i = fi
            }
            return s = Wm.bind(null, e),
            i = tn(i, s),
            e.callbackPriority = t,
            e.callbackNode = i,
            t
        }
        return s !== null && s !== null && dr(s),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Wm(e, t) {
        if (lt !== 0 && lt !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var i = e.callbackNode;
        if (Rl() && e.callbackNode !== i)
            return null;
        var s = xe;
        return s = zs(e, e === Ze ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s === 0 ? null : (jm(e, s, t),
        $m(e, St()),
        e.callbackNode != null && e.callbackNode === i ? Wm.bind(null, e) : null)
    }
    function ep(e, t) {
        if (Rl())
            return null;
        jm(e, t, !0)
    }
    function yb() {
        Ob(function() {
            (De & 6) !== 0 ? tn(ht, pb) : Im()
        })
    }
    function gc() {
        if (oa === 0) {
            var e = Mi;
            e === 0 && (e = Os,
            Os <<= 1,
            (Os & 261888) === 0 && (Os = 256)),
            oa = e
        }
        return oa
    }
    function tp(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ls("" + e)
    }
    function np(e, t) {
        var i = t.ownerDocument.createElement("input");
        return i.name = t.name,
        i.value = t.value,
        e.id && i.setAttribute("form", e.id),
        t.parentNode.insertBefore(i, t),
        e = new FormData(e),
        i.parentNode.removeChild(i),
        e
    }
    function gb(e, t, i, s, o) {
        if (t === "submit" && i && i.stateNode === o) {
            var c = tp((o[wt] || null).action)
              , m = s.submitter;
            m && (t = (t = m[wt] || null) ? tp(t.formAction) : m.getAttribute("formAction"),
            t !== null && (c = t,
            m = null));
            var b = new Hs("action","action",null,s,o);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (oa !== 0) {
                                var w = m ? np(o, m) : new FormData(o);
                                Bo(i, {
                                    pending: !0,
                                    data: w,
                                    method: o.method,
                                    action: c
                                }, null, w)
                            }
                        } else
                            typeof c == "function" && (b.preventDefault(),
                            w = m ? np(o, m) : new FormData(o),
                            Bo(i, {
                                pending: !0,
                                data: w,
                                method: o.method,
                                action: c
                            }, c, w))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var vc = 0; vc < Wu.length; vc++) {
        var bc = Wu[vc]
          , vb = bc.toLowerCase()
          , bb = bc[0].toUpperCase() + bc.slice(1);
        nn(vb, "on" + bb)
    }
    nn(Nd, "onAnimationEnd"),
    nn(jd, "onAnimationIteration"),
    nn(Ld, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(L0, "onTransitionRun"),
    nn(U0, "onTransitionStart"),
    nn(B0, "onTransitionCancel"),
    nn(Ud, "onTransitionEnd"),
    yi("onMouseEnter", ["mouseout", "mouseover"]),
    yi("onMouseLeave", ["mouseout", "mouseover"]),
    yi("onPointerEnter", ["pointerout", "pointerover"]),
    yi("onPointerLeave", ["pointerout", "pointerover"]),
    La("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    La("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    La("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    La("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    La("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    La("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Sb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jr));
    function ap(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var s = e[i]
              , o = s.event;
            s = s.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var m = s.length - 1; 0 <= m; m--) {
                        var b = s[m]
                          , w = b.instance
                          , N = b.currentTarget;
                        if (b = b.listener,
                        w !== c && o.isPropagationStopped())
                            break e;
                        c = b,
                        o.currentTarget = N;
                        try {
                            c(o)
                        } catch (B) {
                            Vs(B)
                        }
                        o.currentTarget = null,
                        c = w
                    }
                else
                    for (m = 0; m < s.length; m++) {
                        if (b = s[m],
                        w = b.instance,
                        N = b.currentTarget,
                        b = b.listener,
                        w !== c && o.isPropagationStopped())
                            break e;
                        c = b,
                        o.currentTarget = N;
                        try {
                            c(o)
                        } catch (B) {
                            Vs(B)
                        }
                        o.currentTarget = null,
                        c = w
                    }
            }
        }
    }
    function Se(e, t) {
        var i = t[zu];
        i === void 0 && (i = t[zu] = new Set);
        var s = e + "__bubble";
        i.has(s) || (ip(t, e, 2, !1),
        i.add(s))
    }
    function Sc(e, t, i) {
        var s = 0;
        t && (s |= 4),
        ip(i, e, s, t)
    }
    var Ol = "_reactListening" + Math.random().toString(36).slice(2);
    function _c(e) {
        if (!e[Ol]) {
            e[Ol] = !0,
            If.forEach(function(i) {
                i !== "selectionchange" && (Sb.has(i) || Sc(i, !1, e),
                Sc(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ol] || (t[Ol] = !0,
            Sc("selectionchange", !1, t))
        }
    }
    function ip(e, t, i, s) {
        switch (Np(t)) {
        case 2:
            var o = Kb;
            break;
        case 8:
            o = Fb;
            break;
        default:
            o = Uc
        }
        i = o.bind(null, t, i, e),
        o = void 0,
        !qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        s ? o !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, i, !0) : o !== void 0 ? e.addEventListener(t, i, {
            passive: o
        }) : e.addEventListener(t, i, !1)
    }
    function xc(e, t, i, s, o) {
        var c = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ; ) {
                if (s === null)
                    return;
                var m = s.tag;
                if (m === 3 || m === 4) {
                    var b = s.stateNode.containerInfo;
                    if (b === o)
                        break;
                    if (m === 4)
                        for (m = s.return; m !== null; ) {
                            var w = m.tag;
                            if ((w === 3 || w === 4) && m.stateNode.containerInfo === o)
                                return;
                            m = m.return
                        }
                    for (; b !== null; ) {
                        if (m = hi(b),
                        m === null)
                            return;
                        if (w = m.tag,
                        w === 5 || w === 6 || w === 26 || w === 27) {
                            s = c = m;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                s = s.return
            }
        od(function() {
            var N = c
              , B = ku(i)
              , Y = [];
            e: {
                var j = Bd.get(e);
                if (j !== void 0) {
                    var L = Hs
                      , te = e;
                    switch (e) {
                    case "keypress":
                        if (Bs(i) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        L = h0;
                        break;
                    case "focusin":
                        te = "focus",
                        L = Qu;
                        break;
                    case "focusout":
                        te = "blur",
                        L = Qu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        L = Qu;
                        break;
                    case "click":
                        if (i.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        L = dd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        L = t0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        L = y0;
                        break;
                    case Nd:
                    case jd:
                    case Ld:
                        L = i0;
                        break;
                    case Ud:
                        L = v0;
                        break;
                    case "scroll":
                    case "scrollend":
                        L = Wv;
                        break;
                    case "wheel":
                        L = S0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        L = s0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        L = md;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        L = x0
                    }
                    var fe = (t & 4) !== 0
                      , He = !fe && (e === "scroll" || e === "scrollend")
                      , z = fe ? j !== null ? j + "Capture" : null : j;
                    fe = [];
                    for (var A = N, D; A !== null; ) {
                        var q = A;
                        if (D = q.stateNode,
                        q = q.tag,
                        q !== 5 && q !== 26 && q !== 27 || D === null || z === null || (q = vr(A, z),
                        q != null && fe.push(Ir(A, q, D))),
                        He)
                            break;
                        A = A.return
                    }
                    0 < fe.length && (j = new L(j,te,null,i,B),
                    Y.push({
                        event: j,
                        listeners: fe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (j = e === "mouseover" || e === "pointerover",
                    L = e === "mouseout" || e === "pointerout",
                    j && i !== Bu && (te = i.relatedTarget || i.fromElement) && (hi(te) || te[di]))
                        break e;
                    if ((L || j) && (j = B.window === B ? B : (j = B.ownerDocument) ? j.defaultView || j.parentWindow : window,
                    L ? (te = i.relatedTarget || i.toElement,
                    L = N,
                    te = te ? hi(te) : null,
                    te !== null && (He = f(te),
                    fe = te.tag,
                    te !== He || fe !== 5 && fe !== 27 && fe !== 6) && (te = null)) : (L = null,
                    te = N),
                    L !== te)) {
                        if (fe = dd,
                        q = "onMouseLeave",
                        z = "onMouseEnter",
                        A = "mouse",
                        (e === "pointerout" || e === "pointerover") && (fe = md,
                        q = "onPointerLeave",
                        z = "onPointerEnter",
                        A = "pointer"),
                        He = L == null ? j : gr(L),
                        D = te == null ? j : gr(te),
                        j = new fe(q,A + "leave",L,i,B),
                        j.target = He,
                        j.relatedTarget = D,
                        q = null,
                        hi(B) === N && (fe = new fe(z,A + "enter",te,i,B),
                        fe.target = D,
                        fe.relatedTarget = He,
                        q = fe),
                        He = q,
                        L && te)
                            t: {
                                for (fe = _b,
                                z = L,
                                A = te,
                                D = 0,
                                q = z; q; q = fe(q))
                                    D++;
                                q = 0;
                                for (var ue = A; ue; ue = fe(ue))
                                    q++;
                                for (; 0 < D - q; )
                                    z = fe(z),
                                    D--;
                                for (; 0 < q - D; )
                                    A = fe(A),
                                    q--;
                                for (; D--; ) {
                                    if (z === A || A !== null && z === A.alternate) {
                                        fe = z;
                                        break t
                                    }
                                    z = fe(z),
                                    A = fe(A)
                                }
                                fe = null
                            }
                        else
                            fe = null;
                        L !== null && rp(Y, j, L, fe, !1),
                        te !== null && He !== null && rp(Y, He, te, fe, !0)
                    }
                }
                e: {
                    if (j = N ? gr(N) : window,
                    L = j.nodeName && j.nodeName.toLowerCase(),
                    L === "select" || L === "input" && j.type === "file")
                        var Ae = xd;
                    else if (Sd(j))
                        if (Ed)
                            Ae = D0;
                        else {
                            Ae = M0;
                            var ae = C0
                        }
                    else
                        L = j.nodeName,
                        !L || L.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && Uu(N.elementType) && (Ae = xd) : Ae = z0;
                    if (Ae && (Ae = Ae(e, N))) {
                        _d(Y, Ae, i, B);
                        break e
                    }
                    ae && ae(e, j, N),
                    e === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && Lu(j, "number", j.value)
                }
                switch (ae = N ? gr(N) : window,
                e) {
                case "focusin":
                    (Sd(ae) || ae.contentEditable === "true") && (xi = ae,
                    Ju = N,
                    Tr = null);
                    break;
                case "focusout":
                    Tr = Ju = xi = null;
                    break;
                case "mousedown":
                    Iu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Iu = !1,
                    zd(Y, i, B);
                    break;
                case "selectionchange":
                    if (j0)
                        break;
                case "keydown":
                case "keyup":
                    zd(Y, i, B)
                }
                var ye;
                if (Xu)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var Ee = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Ee = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Ee = "onCompositionUpdate";
                            break e
                        }
                        Ee = void 0
                    }
                else
                    _i ? vd(e, i) && (Ee = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ee = "onCompositionStart");
                Ee && (pd && i.locale !== "ko" && (_i || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && _i && (ye = cd()) : (Pn = B,
                Zu = "value"in Pn ? Pn.value : Pn.textContent,
                _i = !0)),
                ae = Cl(N, Ee),
                0 < ae.length && (Ee = new hd(Ee,e,null,i,B),
                Y.push({
                    event: Ee,
                    listeners: ae
                }),
                ye ? Ee.data = ye : (ye = bd(i),
                ye !== null && (Ee.data = ye)))),
                (ye = w0 ? R0(e, i) : T0(e, i)) && (Ee = Cl(N, "onBeforeInput"),
                0 < Ee.length && (ae = new hd("onBeforeInput","beforeinput",null,i,B),
                Y.push({
                    event: ae,
                    listeners: Ee
                }),
                ae.data = ye)),
                gb(Y, e, N, i, B)
            }
            ap(Y, t)
        })
    }
    function Ir(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }
    function Cl(e, t) {
        for (var i = t + "Capture", s = []; e !== null; ) {
            var o = e
              , c = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || c === null || (o = vr(e, i),
            o != null && s.unshift(Ir(e, o, c)),
            o = vr(e, t),
            o != null && s.push(Ir(e, o, c))),
            e.tag === 3)
                return s;
            e = e.return
        }
        return []
    }
    function _b(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function rp(e, t, i, s, o) {
        for (var c = t._reactName, m = []; i !== null && i !== s; ) {
            var b = i
              , w = b.alternate
              , N = b.stateNode;
            if (b = b.tag,
            w !== null && w === s)
                break;
            b !== 5 && b !== 26 && b !== 27 || N === null || (w = N,
            o ? (N = vr(i, c),
            N != null && m.unshift(Ir(i, N, w))) : o || (N = vr(i, c),
            N != null && m.push(Ir(i, N, w)))),
            i = i.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var xb = /\r\n?/g
      , Eb = /\u0000|\uFFFD/g;
    function sp(e) {
        return (typeof e == "string" ? e : "" + e).replace(xb, `
`).replace(Eb, "")
    }
    function lp(e, t) {
        return t = sp(t),
        sp(e) === t
    }
    function ke(e, t, i, s, o, c) {
        switch (i) {
        case "children":
            typeof s == "string" ? t === "body" || t === "textarea" && s === "" || vi(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && vi(e, "" + s);
            break;
        case "className":
            Ns(e, "class", s);
            break;
        case "tabIndex":
            Ns(e, "tabindex", s);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ns(e, i, s);
            break;
        case "style":
            ld(e, s, c);
            break;
        case "data":
            if (t !== "object") {
                Ns(e, "data", s);
                break
            }
        case "src":
        case "href":
            if (s === "" && (t !== "a" || i !== "href")) {
                e.removeAttribute(i);
                break
            }
            if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(i);
                break
            }
            s = Ls("" + s),
            e.setAttribute(i, s);
            break;
        case "action":
        case "formAction":
            if (typeof s == "function") {
                e.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (i === "formAction" ? (t !== "input" && ke(e, t, "name", o.name, o, null),
                ke(e, t, "formEncType", o.formEncType, o, null),
                ke(e, t, "formMethod", o.formMethod, o, null),
                ke(e, t, "formTarget", o.formTarget, o, null)) : (ke(e, t, "encType", o.encType, o, null),
                ke(e, t, "method", o.method, o, null),
                ke(e, t, "target", o.target, o, null)));
            if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(i);
                break
            }
            s = Ls("" + s),
            e.setAttribute(i, s);
            break;
        case "onClick":
            s != null && (e.onclick = Sn);
            break;
        case "onScroll":
            s != null && Se("scroll", e);
            break;
        case "onScrollEnd":
            s != null && Se("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(l(61));
                if (i = s.__html,
                i != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = i
                }
            }
            break;
        case "multiple":
            e.multiple = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "muted":
            e.muted = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            i = Ls("" + s),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, "" + s) : e.removeAttribute(i);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
            break;
        case "capture":
        case "download":
            s === !0 ? e.setAttribute(i, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, s) : e.removeAttribute(i);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(i, s) : e.removeAttribute(i);
            break;
        case "rowSpan":
        case "start":
            s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(i) : e.setAttribute(i, s);
            break;
        case "popover":
            Se("beforetoggle", e),
            Se("toggle", e),
            Ds(e, "popover", s);
            break;
        case "xlinkActuate":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
            break;
        case "xlinkArcrole":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
            break;
        case "xlinkRole":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
            break;
        case "xlinkShow":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
            break;
        case "xlinkTitle":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
            break;
        case "xlinkType":
            bn(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
            break;
        case "xmlBase":
            bn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
            break;
        case "xmlLang":
            bn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
            break;
        case "xmlSpace":
            bn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
            break;
        case "is":
            Ds(e, "is", s);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Iv.get(i) || i,
            Ds(e, i, s))
        }
    }
    function Ec(e, t, i, s, o, c) {
        switch (i) {
        case "style":
            ld(e, s, c);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(l(61));
                if (i = s.__html,
                i != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = i
                }
            }
            break;
        case "children":
            typeof s == "string" ? vi(e, s) : (typeof s == "number" || typeof s == "bigint") && vi(e, "" + s);
            break;
        case "onScroll":
            s != null && Se("scroll", e);
            break;
        case "onScrollEnd":
            s != null && Se("scrollend", e);
            break;
        case "onClick":
            s != null && (e.onclick = Sn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!$f.hasOwnProperty(i))
                e: {
                    if (i[0] === "o" && i[1] === "n" && (o = i.endsWith("Capture"),
                    t = i.slice(2, o ? i.length - 7 : void 0),
                    c = e[wt] || null,
                    c = c != null ? c[i] : null,
                    typeof c == "function" && e.removeEventListener(t, c, o),
                    typeof s == "function")) {
                        typeof c != "function" && c !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)),
                        e.addEventListener(t, s, o);
                        break e
                    }
                    i in e ? e[i] = s : s === !0 ? e.setAttribute(i, "") : Ds(e, i, s)
                }
        }
    }
    function vt(e, t, i) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Se("error", e),
            Se("load", e);
            var s = !1, o = !1, c;
            for (c in i)
                if (i.hasOwnProperty(c)) {
                    var m = i[c];
                    if (m != null)
                        switch (c) {
                        case "src":
                            s = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            ke(e, t, c, m, i, null)
                        }
                }
            o && ke(e, t, "srcSet", i.srcSet, i, null),
            s && ke(e, t, "src", i.src, i, null);
            return;
        case "input":
            Se("invalid", e);
            var b = c = m = o = null
              , w = null
              , N = null;
            for (s in i)
                if (i.hasOwnProperty(s)) {
                    var B = i[s];
                    if (B != null)
                        switch (s) {
                        case "name":
                            o = B;
                            break;
                        case "type":
                            m = B;
                            break;
                        case "checked":
                            w = B;
                            break;
                        case "defaultChecked":
                            N = B;
                            break;
                        case "value":
                            c = B;
                            break;
                        case "defaultValue":
                            b = B;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (B != null)
                                throw Error(l(137, t));
                            break;
                        default:
                            ke(e, t, s, B, i, null)
                        }
                }
            ad(e, c, b, w, N, m, o, !1);
            return;
        case "select":
            Se("invalid", e),
            s = m = c = null;
            for (o in i)
                if (i.hasOwnProperty(o) && (b = i[o],
                b != null))
                    switch (o) {
                    case "value":
                        c = b;
                        break;
                    case "defaultValue":
                        m = b;
                        break;
                    case "multiple":
                        s = b;
                    default:
                        ke(e, t, o, b, i, null)
                    }
            t = c,
            i = m,
            e.multiple = !!s,
            t != null ? gi(e, !!s, t, !1) : i != null && gi(e, !!s, i, !0);
            return;
        case "textarea":
            Se("invalid", e),
            c = o = s = null;
            for (m in i)
                if (i.hasOwnProperty(m) && (b = i[m],
                b != null))
                    switch (m) {
                    case "value":
                        s = b;
                        break;
                    case "defaultValue":
                        o = b;
                        break;
                    case "children":
                        c = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(l(91));
                        break;
                    default:
                        ke(e, t, m, b, i, null)
                    }
            rd(e, s, o, c);
            return;
        case "option":
            for (w in i)
                i.hasOwnProperty(w) && (s = i[w],
                s != null) && (w === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : ke(e, t, w, s, i, null));
            return;
        case "dialog":
            Se("beforetoggle", e),
            Se("toggle", e),
            Se("cancel", e),
            Se("close", e);
            break;
        case "iframe":
        case "object":
            Se("load", e);
            break;
        case "video":
        case "audio":
            for (s = 0; s < Jr.length; s++)
                Se(Jr[s], e);
            break;
        case "image":
            Se("error", e),
            Se("load", e);
            break;
        case "details":
            Se("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            Se("error", e),
            Se("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (N in i)
                if (i.hasOwnProperty(N) && (s = i[N],
                s != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                    default:
                        ke(e, t, N, s, i, null)
                    }
            return;
        default:
            if (Uu(t)) {
                for (B in i)
                    i.hasOwnProperty(B) && (s = i[B],
                    s !== void 0 && Ec(e, t, B, s, i, void 0));
                return
            }
        }
        for (b in i)
            i.hasOwnProperty(b) && (s = i[b],
            s != null && ke(e, t, b, s, i, null))
    }
    function wb(e, t, i, s) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , c = null
              , m = null
              , b = null
              , w = null
              , N = null
              , B = null;
            for (L in i) {
                var Y = i[L];
                if (i.hasOwnProperty(L) && Y != null)
                    switch (L) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        w = Y;
                    default:
                        s.hasOwnProperty(L) || ke(e, t, L, null, s, Y)
                    }
            }
            for (var j in s) {
                var L = s[j];
                if (Y = i[j],
                s.hasOwnProperty(j) && (L != null || Y != null))
                    switch (j) {
                    case "type":
                        c = L;
                        break;
                    case "name":
                        o = L;
                        break;
                    case "checked":
                        N = L;
                        break;
                    case "defaultChecked":
                        B = L;
                        break;
                    case "value":
                        m = L;
                        break;
                    case "defaultValue":
                        b = L;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        L !== Y && ke(e, t, j, L, s, Y)
                    }
            }
            ju(e, m, b, w, N, B, c, o);
            return;
        case "select":
            L = m = b = j = null;
            for (c in i)
                if (w = i[c],
                i.hasOwnProperty(c) && w != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        L = w;
                    default:
                        s.hasOwnProperty(c) || ke(e, t, c, null, s, w)
                    }
            for (o in s)
                if (c = s[o],
                w = i[o],
                s.hasOwnProperty(o) && (c != null || w != null))
                    switch (o) {
                    case "value":
                        j = c;
                        break;
                    case "defaultValue":
                        b = c;
                        break;
                    case "multiple":
                        m = c;
                    default:
                        c !== w && ke(e, t, o, c, s, w)
                    }
            t = b,
            i = m,
            s = L,
            j != null ? gi(e, !!i, j, !1) : !!s != !!i && (t != null ? gi(e, !!i, t, !0) : gi(e, !!i, i ? [] : "", !1));
            return;
        case "textarea":
            L = j = null;
            for (b in i)
                if (o = i[b],
                i.hasOwnProperty(b) && o != null && !s.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ke(e, t, b, null, s, o)
                    }
            for (m in s)
                if (o = s[m],
                c = i[m],
                s.hasOwnProperty(m) && (o != null || c != null))
                    switch (m) {
                    case "value":
                        j = o;
                        break;
                    case "defaultValue":
                        L = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(l(91));
                        break;
                    default:
                        o !== c && ke(e, t, m, o, s, c)
                    }
            id(e, j, L);
            return;
        case "option":
            for (var te in i)
                j = i[te],
                i.hasOwnProperty(te) && j != null && !s.hasOwnProperty(te) && (te === "selected" ? e.selected = !1 : ke(e, t, te, null, s, j));
            for (w in s)
                j = s[w],
                L = i[w],
                s.hasOwnProperty(w) && j !== L && (j != null || L != null) && (w === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : ke(e, t, w, j, s, L));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var fe in i)
                j = i[fe],
                i.hasOwnProperty(fe) && j != null && !s.hasOwnProperty(fe) && ke(e, t, fe, null, s, j);
            for (N in s)
                if (j = s[N],
                L = i[N],
                s.hasOwnProperty(N) && j !== L && (j != null || L != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (j != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        ke(e, t, N, j, s, L)
                    }
            return;
        default:
            if (Uu(t)) {
                for (var He in i)
                    j = i[He],
                    i.hasOwnProperty(He) && j !== void 0 && !s.hasOwnProperty(He) && Ec(e, t, He, void 0, s, j);
                for (B in s)
                    j = s[B],
                    L = i[B],
                    !s.hasOwnProperty(B) || j === L || j === void 0 && L === void 0 || Ec(e, t, B, j, s, L);
                return
            }
        }
        for (var z in i)
            j = i[z],
            i.hasOwnProperty(z) && j != null && !s.hasOwnProperty(z) && ke(e, t, z, null, s, j);
        for (Y in s)
            j = s[Y],
            L = i[Y],
            !s.hasOwnProperty(Y) || j === L || j == null && L == null || ke(e, t, Y, j, s, L)
    }
    function up(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Rb() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), s = 0; s < i.length; s++) {
                var o = i[s]
                  , c = o.transferSize
                  , m = o.initiatorType
                  , b = o.duration;
                if (c && b && up(m)) {
                    for (m = 0,
                    b = o.responseEnd,
                    s += 1; s < i.length; s++) {
                        var w = i[s]
                          , N = w.startTime;
                        if (N > b)
                            break;
                        var B = w.transferSize
                          , Y = w.initiatorType;
                        B && up(Y) && (w = w.responseEnd,
                        m += B * (w < b ? 1 : (b - N) / (w - N)))
                    }
                    if (--s,
                    t += 8 * (c + m) / (o.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var wc = null
      , Rc = null;
    function Ml(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function op(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function cp(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Tc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ac = null;
    function Tb() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ac ? !1 : (Ac = e,
        !0) : (Ac = null,
        !1)
    }
    var fp = typeof setTimeout == "function" ? setTimeout : void 0
      , Ab = typeof clearTimeout == "function" ? clearTimeout : void 0
      , dp = typeof Promise == "function" ? Promise : void 0
      , Ob = typeof queueMicrotask == "function" ? queueMicrotask : typeof dp < "u" ? function(e) {
        return dp.resolve(null).then(e).catch(Cb)
    }
    : fp;
    function Cb(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ca(e) {
        return e === "head"
    }
    function hp(e, t) {
        var i = t
          , s = 0;
        do {
            var o = i.nextSibling;
            if (e.removeChild(i),
            o && o.nodeType === 8)
                if (i = o.data,
                i === "/$" || i === "/&") {
                    if (s === 0) {
                        e.removeChild(o),
                        Fi(t);
                        return
                    }
                    s--
                } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
                    s++;
                else if (i === "html")
                    $r(e.ownerDocument.documentElement);
                else if (i === "head") {
                    i = e.ownerDocument.head,
                    $r(i);
                    for (var c = i.firstChild; c; ) {
                        var m = c.nextSibling
                          , b = c.nodeName;
                        c[yr] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && c.rel.toLowerCase() === "stylesheet" || i.removeChild(c),
                        c = m
                    }
                } else
                    i === "body" && $r(e.ownerDocument.body);
            i = o
        } while (i);
        Fi(t)
    }
    function mp(e, t) {
        var i = e;
        e = 0;
        do {
            var s = i.nextSibling;
            if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display,
            i.style.display = "none") : (i.style.display = i._stashedDisplay || "",
            i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue,
            i.nodeValue = "") : i.nodeValue = i._stashedText || ""),
            s && s.nodeType === 8)
                if (i = s.data,
                i === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
            i = s
        } while (i)
    }
    function Oc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var i = t;
            switch (t = t.nextSibling,
            i.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Oc(i),
                Du(i);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (i.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(i)
        }
    }
    function Mb(e, t, i, s) {
        for (; e.nodeType === 1; ) {
            var o = i;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (s) {
                if (!e[yr])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"),
                        c === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"),
                        (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === c)
                    return e
            } else
                return e;
            if (e = $t(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function zb(e, t, i) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = $t(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function pp(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Cc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Mc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Db(e, t) {
        var i = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || i.readyState !== "loading")
            t();
        else {
            var s = function() {
                t(),
                i.removeEventListener("DOMContentLoaded", s)
            };
            i.addEventListener("DOMContentLoaded", s),
            e._reactRetry = s
        }
    }
    function $t(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var zc = null;
    function yp(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "/$" || i === "/&") {
                    if (t === 0)
                        return $t(e.nextSibling);
                    t--
                } else
                    i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function gp(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    i !== "/$" && i !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function vp(e, t, i) {
        switch (t = Ml(i),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(l(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(l(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(l(454));
            return e;
        default:
            throw Error(l(451))
        }
    }
    function $r(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Du(e)
    }
    var Wt = new Map
      , bp = new Set;
    function zl(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Un = K.d;
    K.d = {
        f: Nb,
        r: jb,
        D: Lb,
        C: Ub,
        L: Bb,
        m: kb,
        X: qb,
        S: Hb,
        M: Zb
    };
    function Nb() {
        var e = Un.f()
          , t = xl();
        return e || t
    }
    function jb(e) {
        var t = mi(e);
        t !== null && t.tag === 5 && t.type === "form" ? Uh(t) : Un.r(e)
    }
    var Xi = typeof document > "u" ? null : document;
    function Sp(e, t, i) {
        var s = Xi;
        if (s && typeof t == "string" && t) {
            var o = Gt(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof i == "string" && (o += '[crossorigin="' + i + '"]'),
            bp.has(o) || (bp.add(o),
            e = {
                rel: e,
                crossOrigin: i,
                href: t
            },
            s.querySelector(o) === null && (t = s.createElement("link"),
            vt(t, "link", e),
            ct(t),
            s.head.appendChild(t)))
        }
    }
    function Lb(e) {
        Un.D(e),
        Sp("dns-prefetch", e, null)
    }
    function Ub(e, t) {
        Un.C(e, t),
        Sp("preconnect", e, t)
    }
    function Bb(e, t, i) {
        Un.L(e, t, i);
        var s = Xi;
        if (s && e && t) {
            var o = 'link[rel="preload"][as="' + Gt(t) + '"]';
            t === "image" && i && i.imageSrcSet ? (o += '[imagesrcset="' + Gt(i.imageSrcSet) + '"]',
            typeof i.imageSizes == "string" && (o += '[imagesizes="' + Gt(i.imageSizes) + '"]')) : o += '[href="' + Gt(e) + '"]';
            var c = o;
            switch (t) {
            case "style":
                c = Pi(e);
                break;
            case "script":
                c = Ki(e)
            }
            Wt.has(c) || (e = g({
                rel: "preload",
                href: t === "image" && i && i.imageSrcSet ? void 0 : e,
                as: t
            }, i),
            Wt.set(c, e),
            s.querySelector(o) !== null || t === "style" && s.querySelector(Wr(c)) || t === "script" && s.querySelector(es(c)) || (t = s.createElement("link"),
            vt(t, "link", e),
            ct(t),
            s.head.appendChild(t)))
        }
    }
    function kb(e, t) {
        Un.m(e, t);
        var i = Xi;
        if (i && e) {
            var s = t && typeof t.as == "string" ? t.as : "script"
              , o = 'link[rel="modulepreload"][as="' + Gt(s) + '"][href="' + Gt(e) + '"]'
              , c = o;
            switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Ki(e)
            }
            if (!Wt.has(c) && (e = g({
                rel: "modulepreload",
                href: e
            }, t),
            Wt.set(c, e),
            i.querySelector(o) === null)) {
                switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (i.querySelector(es(c)))
                        return
                }
                s = i.createElement("link"),
                vt(s, "link", e),
                ct(s),
                i.head.appendChild(s)
            }
        }
    }
    function Hb(e, t, i) {
        Un.S(e, t, i);
        var s = Xi;
        if (s && e) {
            var o = pi(s).hoistableStyles
              , c = Pi(e);
            t = t || "default";
            var m = o.get(c);
            if (!m) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (m = s.querySelector(Wr(c)))
                    b.loading = 5;
                else {
                    e = g({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, i),
                    (i = Wt.get(c)) && Dc(e, i);
                    var w = m = s.createElement("link");
                    ct(w),
                    vt(w, "link", e),
                    w._p = new Promise(function(N, B) {
                        w.onload = N,
                        w.onerror = B
                    }
                    ),
                    w.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    w.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Dl(m, t, s)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: b
                },
                o.set(c, m)
            }
        }
    }
    function qb(e, t) {
        Un.X(e, t);
        var i = Xi;
        if (i && e) {
            var s = pi(i).hoistableScripts
              , o = Ki(e)
              , c = s.get(o);
            c || (c = i.querySelector(es(o)),
            c || (e = g({
                src: e,
                async: !0
            }, t),
            (t = Wt.get(o)) && Nc(e, t),
            c = i.createElement("script"),
            ct(c),
            vt(c, "link", e),
            i.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            s.set(o, c))
        }
    }
    function Zb(e, t) {
        Un.M(e, t);
        var i = Xi;
        if (i && e) {
            var s = pi(i).hoistableScripts
              , o = Ki(e)
              , c = s.get(o);
            c || (c = i.querySelector(es(o)),
            c || (e = g({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Wt.get(o)) && Nc(e, t),
            c = i.createElement("script"),
            ct(c),
            vt(c, "link", e),
            i.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            s.set(o, c))
        }
    }
    function _p(e, t, i, s) {
        var o = (o = ge.current) ? zl(o) : null;
        if (!o)
            throw Error(l(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof i.precedence == "string" && typeof i.href == "string" ? (t = Pi(i.href),
            i = pi(o).hoistableStyles,
            s = i.get(t),
            s || (s = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            i.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
                e = Pi(i.href);
                var c = pi(o).hoistableStyles
                  , m = c.get(e);
                if (m || (o = o.ownerDocument || o,
                m = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(e, m),
                (c = o.querySelector(Wr(e))) && !c._p && (m.instance = c,
                m.state.loading = 5),
                Wt.has(e) || (i = {
                    rel: "preload",
                    as: "style",
                    href: i.href,
                    crossOrigin: i.crossOrigin,
                    integrity: i.integrity,
                    media: i.media,
                    hrefLang: i.hrefLang,
                    referrerPolicy: i.referrerPolicy
                },
                Wt.set(e, i),
                c || Vb(o, e, i, m.state))),
                t && s === null)
                    throw Error(l(528, ""));
                return m
            }
            if (t && s !== null)
                throw Error(l(529, ""));
            return null;
        case "script":
            return t = i.async,
            i = i.src,
            typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ki(i),
            i = pi(o).hoistableScripts,
            s = i.get(t),
            s || (s = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            i.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(l(444, e))
        }
    }
    function Pi(e) {
        return 'href="' + Gt(e) + '"'
    }
    function Wr(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function xp(e) {
        return g({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Vb(e, t, i, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"),
        s.preload = t,
        t.addEventListener("load", function() {
            return s.loading |= 1
        }),
        t.addEventListener("error", function() {
            return s.loading |= 2
        }),
        vt(t, "link", i),
        ct(t),
        e.head.appendChild(t))
    }
    function Ki(e) {
        return '[src="' + Gt(e) + '"]'
    }
    function es(e) {
        return "script[async]" + e
    }
    function Ep(e, t, i) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var s = e.querySelector('style[data-href~="' + Gt(i.href) + '"]');
                if (s)
                    return t.instance = s,
                    ct(s),
                    s;
                var o = g({}, i, {
                    "data-href": i.href,
                    "data-precedence": i.precedence,
                    href: null,
                    precedence: null
                });
                return s = (e.ownerDocument || e).createElement("style"),
                ct(s),
                vt(s, "style", o),
                Dl(s, i.precedence, e),
                t.instance = s;
            case "stylesheet":
                o = Pi(i.href);
                var c = e.querySelector(Wr(o));
                if (c)
                    return t.state.loading |= 4,
                    t.instance = c,
                    ct(c),
                    c;
                s = xp(i),
                (o = Wt.get(o)) && Dc(s, o),
                c = (e.ownerDocument || e).createElement("link"),
                ct(c);
                var m = c;
                return m._p = new Promise(function(b, w) {
                    m.onload = b,
                    m.onerror = w
                }
                ),
                vt(c, "link", s),
                t.state.loading |= 4,
                Dl(c, i.precedence, e),
                t.instance = c;
            case "script":
                return c = Ki(i.src),
                (o = e.querySelector(es(c))) ? (t.instance = o,
                ct(o),
                o) : (s = i,
                (o = Wt.get(c)) && (s = g({}, i),
                Nc(s, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                ct(o),
                vt(o, "link", s),
                e.head.appendChild(o),
                t.instance = o);
            case "void":
                return null;
            default:
                throw Error(l(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance,
            t.state.loading |= 4,
            Dl(s, i.precedence, e));
        return t.instance
    }
    function Dl(e, t, i) {
        for (var s = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = s.length ? s[s.length - 1] : null, c = o, m = 0; m < s.length; m++) {
            var b = s[m];
            if (b.dataset.precedence === t)
                c = b;
            else if (c !== o)
                break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = i.nodeType === 9 ? i.head : i,
        t.insertBefore(e, t.firstChild))
    }
    function Dc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Nc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Nl = null;
    function wp(e, t, i) {
        if (Nl === null) {
            var s = new Map
              , o = Nl = new Map;
            o.set(i, s)
        } else
            o = Nl,
            s = o.get(i),
            s || (s = new Map,
            o.set(i, s));
        if (s.has(e))
            return s;
        for (s.set(e, null),
        i = i.getElementsByTagName(e),
        o = 0; o < i.length; o++) {
            var c = i[o];
            if (!(c[yr] || c[mt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = c.getAttribute(t) || "";
                m = e + m;
                var b = s.get(m);
                b ? b.push(c) : s.set(m, [c])
            }
        }
        return s
    }
    function Rp(e, t, i) {
        e = e.ownerDocument || e,
        e.head.insertBefore(i, t === "title" ? e.querySelector("head > title") : null)
    }
    function Yb(e, t, i) {
        if (i === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Tp(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Qb(e, t, i, s) {
        if (i.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (i.state.loading & 4) === 0) {
            if (i.instance === null) {
                var o = Pi(s.href)
                  , c = t.querySelector(Wr(o));
                if (c) {
                    t = c._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = jl.bind(e),
                    t.then(e, e)),
                    i.state.loading |= 4,
                    i.instance = c,
                    ct(c);
                    return
                }
                c = t.ownerDocument || t,
                s = xp(s),
                (o = Wt.get(o)) && Dc(s, o),
                c = c.createElement("link"),
                ct(c);
                var m = c;
                m._p = new Promise(function(b, w) {
                    m.onload = b,
                    m.onerror = w
                }
                ),
                vt(c, "link", s),
                i.instance = c
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(i, t),
            (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++,
            i = jl.bind(e),
            t.addEventListener("load", i),
            t.addEventListener("error", i))
        }
    }
    var jc = 0;
    function Gb(e, t) {
        return e.stylesheets && e.count === 0 && Ul(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(i) {
            var s = setTimeout(function() {
                if (e.stylesheets && Ul(e, e.stylesheets),
                e.unsuspend) {
                    var c = e.unsuspend;
                    e.unsuspend = null,
                    c()
                }
            }, 6e4 + t);
            0 < e.imgBytes && jc === 0 && (jc = 62500 * Rb());
            var o = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Ul(e, e.stylesheets),
                e.unsuspend)) {
                    var c = e.unsuspend;
                    e.unsuspend = null,
                    c()
                }
            }, (e.imgBytes > jc ? 50 : 800) + t);
            return e.unsuspend = i,
            function() {
                e.unsuspend = null,
                clearTimeout(s),
                clearTimeout(o)
            }
        }
        : null
    }
    function jl() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Ul(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Ll = null;
    function Ul(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Ll = new Map,
        t.forEach(Xb, e),
        Ll = null,
        jl.call(e))
    }
    function Xb(e, t) {
        if (!(t.state.loading & 4)) {
            var i = Ll.get(e);
            if (i)
                var s = i.get(null);
            else {
                i = new Map,
                Ll.set(e, i);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
                    var m = o[c];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (i.set(m.dataset.precedence, m),
                    s = m)
                }
                s && i.set(null, s)
            }
            o = t.instance,
            m = o.getAttribute("data-precedence"),
            c = i.get(m) || s,
            c === s && i.set(null, o),
            i.set(m, o),
            this.count++,
            s = jl.bind(this),
            o.addEventListener("load", s),
            o.addEventListener("error", s),
            c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var ts = {
        $$typeof: Z,
        Provider: null,
        Consumer: null,
        _currentValue: oe,
        _currentValue2: oe,
        _threadCount: 0
    };
    function Pb(e, t, i, s, o, c, m, b, w) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Ou(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ou(0),
        this.hiddenUpdates = Ou(null),
        this.identifierPrefix = s,
        this.onUncaughtError = o,
        this.onCaughtError = c,
        this.onRecoverableError = m,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = w,
        this.incompleteTransitions = new Map
    }
    function Ap(e, t, i, s, o, c, m, b, w, N, B, Y) {
        return e = new Pb(e,t,i,m,w,N,B,Y,b),
        t = 1,
        c === !0 && (t |= 24),
        c = Bt(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        t = ho(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        c.memoizedState = {
            element: s,
            isDehydrated: i,
            cache: t
        },
        go(c),
        e
    }
    function Op(e) {
        return e ? (e = Ri,
        e) : Ri
    }
    function Cp(e, t, i, s, o, c) {
        o = Op(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = Wn(t),
        s.payload = {
            element: i
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        i = ea(e, s, t),
        i !== null && (Mt(i, e, t),
        Nr(i, e, t))
    }
    function Mp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }
    function Lc(e, t) {
        Mp(e, t),
        (e = e.alternate) && Mp(e, t)
    }
    function zp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Ha(e, 67108864);
            t !== null && Mt(t, e, 67108864),
            Lc(e, 67108864)
        }
    }
    function Dp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Vt();
            t = Cu(t);
            var i = Ha(e, t);
            i !== null && Mt(i, e, t),
            Lc(e, t)
        }
    }
    var Bl = !0;
    function Kb(e, t, i, s) {
        var o = U.T;
        U.T = null;
        var c = K.p;
        try {
            K.p = 2,
            Uc(e, t, i, s)
        } finally {
            K.p = c,
            U.T = o
        }
    }
    function Fb(e, t, i, s) {
        var o = U.T;
        U.T = null;
        var c = K.p;
        try {
            K.p = 8,
            Uc(e, t, i, s)
        } finally {
            K.p = c,
            U.T = o
        }
    }
    function Uc(e, t, i, s) {
        if (Bl) {
            var o = Bc(s);
            if (o === null)
                xc(e, t, s, kl, i),
                jp(e, s);
            else if (Ib(o, e, t, i, s))
                s.stopPropagation();
            else if (jp(e, s),
            t & 4 && -1 < Jb.indexOf(e)) {
                for (; o !== null; ) {
                    var c = mi(o);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var m = ja(c.pendingLanes);
                                if (m !== 0) {
                                    var b = c;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; m; ) {
                                        var w = 1 << 31 - Lt(m);
                                        b.entanglements[1] |= w,
                                        m &= ~w
                                    }
                                    dn(c),
                                    (De & 6) === 0 && (Sl = St() + 500,
                                    Fr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = Ha(c, 2),
                            b !== null && Mt(b, c, 2),
                            xl(),
                            Lc(c, 2)
                        }
                    if (c = Bc(s),
                    c === null && xc(e, t, s, kl, i),
                    c === o)
                        break;
                    o = c
                }
                o !== null && s.stopPropagation()
            } else
                xc(e, t, s, null, i)
        }
    }
    function Bc(e) {
        return e = ku(e),
        kc(e)
    }
    var kl = null;
    function kc(e) {
        if (kl = null,
        e = hi(e),
        e !== null) {
            var t = f(e);
            if (t === null)
                e = null;
            else {
                var i = t.tag;
                if (i === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 31) {
                    if (e = h(t),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return kl = e,
        null
    }
    function Np(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ye()) {
            case ht:
                return 2;
            case un:
                return 8;
            case fi:
            case Uv:
                return 32;
            case Yf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Hc = !1
      , fa = null
      , da = null
      , ha = null
      , ns = new Map
      , as = new Map
      , ma = []
      , Jb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function jp(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            fa = null;
            break;
        case "dragenter":
        case "dragleave":
            da = null;
            break;
        case "mouseover":
        case "mouseout":
            ha = null;
            break;
        case "pointerover":
        case "pointerout":
            ns.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            as.delete(t.pointerId)
        }
    }
    function is(e, t, i, s, o, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: s,
            nativeEvent: c,
            targetContainers: [o]
        },
        t !== null && (t = mi(t),
        t !== null && zp(t)),
        e) : (e.eventSystemFlags |= s,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function Ib(e, t, i, s, o) {
        switch (t) {
        case "focusin":
            return fa = is(fa, e, t, i, s, o),
            !0;
        case "dragenter":
            return da = is(da, e, t, i, s, o),
            !0;
        case "mouseover":
            return ha = is(ha, e, t, i, s, o),
            !0;
        case "pointerover":
            var c = o.pointerId;
            return ns.set(c, is(ns.get(c) || null, e, t, i, s, o)),
            !0;
        case "gotpointercapture":
            return c = o.pointerId,
            as.set(c, is(as.get(c) || null, e, t, i, s, o)),
            !0
        }
        return !1
    }
    function Lp(e) {
        var t = hi(e.target);
        if (t !== null) {
            var i = f(t);
            if (i !== null) {
                if (t = i.tag,
                t === 13) {
                    if (t = d(i),
                    t !== null) {
                        e.blockedOn = t,
                        Ff(e.priority, function() {
                            Dp(i)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = h(i),
                    t !== null) {
                        e.blockedOn = t,
                        Ff(e.priority, function() {
                            Dp(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Hl(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var i = Bc(e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var s = new i.constructor(i.type,i);
                Bu = s,
                i.target.dispatchEvent(s),
                Bu = null
            } else
                return t = mi(i),
                t !== null && zp(t),
                e.blockedOn = i,
                !1;
            t.shift()
        }
        return !0
    }
    function Up(e, t, i) {
        Hl(e) && i.delete(t)
    }
    function $b() {
        Hc = !1,
        fa !== null && Hl(fa) && (fa = null),
        da !== null && Hl(da) && (da = null),
        ha !== null && Hl(ha) && (ha = null),
        ns.forEach(Up),
        as.forEach(Up)
    }
    function ql(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Hc || (Hc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, $b)))
    }
    var Zl = null;
    function Bp(e) {
        Zl !== e && (Zl = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Zl === e && (Zl = null);
            for (var t = 0; t < e.length; t += 3) {
                var i = e[t]
                  , s = e[t + 1]
                  , o = e[t + 2];
                if (typeof s != "function") {
                    if (kc(s || i) === null)
                        continue;
                    break
                }
                var c = mi(i);
                c !== null && (e.splice(t, 3),
                t -= 3,
                Bo(c, {
                    pending: !0,
                    data: o,
                    method: i.method,
                    action: s
                }, s, o))
            }
        }))
    }
    function Fi(e) {
        function t(w) {
            return ql(w, e)
        }
        fa !== null && ql(fa, e),
        da !== null && ql(da, e),
        ha !== null && ql(ha, e),
        ns.forEach(t),
        as.forEach(t);
        for (var i = 0; i < ma.length; i++) {
            var s = ma[i];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < ma.length && (i = ma[0],
        i.blockedOn === null); )
            Lp(i),
            i.blockedOn === null && ma.shift();
        if (i = (e.ownerDocument || e).$$reactFormReplay,
        i != null)
            for (s = 0; s < i.length; s += 3) {
                var o = i[s]
                  , c = i[s + 1]
                  , m = o[wt] || null;
                if (typeof c == "function")
                    m || Bp(i);
                else if (m) {
                    var b = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c,
                        m = c[wt] || null)
                            b = m.formAction;
                        else if (kc(o) !== null)
                            continue
                    } else
                        b = m.action;
                    typeof b == "function" ? i[s + 1] = b : (i.splice(s, 3),
                    s -= 3),
                    Bp(i)
                }
            }
    }
    function kp() {
        function e(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(m) {
                        return o = m
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            o !== null && (o(),
            o = null),
            s || setTimeout(i, 20)
        }
        function i() {
            if (!s && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var s = !1
              , o = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(i, 100),
            function() {
                s = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function qc(e) {
        this._internalRoot = e
    }
    Vl.prototype.render = qc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(l(409));
        var i = t.current
          , s = Vt();
        Cp(i, s, e, t, null, null)
    }
    ,
    Vl.prototype.unmount = qc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Cp(e.current, 2, null, e, null, null),
            xl(),
            t[di] = null
        }
    }
    ;
    function Vl(e) {
        this._internalRoot = e
    }
    Vl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Kf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < ma.length && t !== 0 && t < ma[i].priority; i++)
                ;
            ma.splice(i, 0, e),
            i === 0 && Lp(e)
        }
    }
    ;
    var Hp = a.version;
    if (Hp !== "19.2.5")
        throw Error(l(527, Hp, "19.2.5"));
    K.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
            Error(l(268, e)));
        return e = p(t),
        e = e !== null ? v(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Wb = {
        bundleType: 0,
        version: "19.2.5",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.2.5"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Yl.isDisabled && Yl.supportsFiber)
            try {
                hr = Yl.inject(Wb),
                jt = Yl
            } catch {}
    }
    return ss.createRoot = function(e, t) {
        if (!u(e))
            throw Error(l(299));
        var i = !1
          , s = ""
          , o = Xh
          , c = Ph
          , m = Kh;
        return t != null && (t.unstable_strictMode === !0 && (i = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        t = Ap(e, 1, !1, null, null, i, s, null, o, c, m, kp),
        e[di] = t.current,
        _c(e),
        new qc(t)
    }
    ,
    ss.hydrateRoot = function(e, t, i) {
        if (!u(e))
            throw Error(l(299));
        var s = !1
          , o = ""
          , c = Xh
          , m = Ph
          , b = Kh
          , w = null;
        return i != null && (i.unstable_strictMode === !0 && (s = !0),
        i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
        i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
        i.onCaughtError !== void 0 && (m = i.onCaughtError),
        i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
        i.formState !== void 0 && (w = i.formState)),
        t = Ap(e, 1, !0, t, i ?? null, s, o, w, c, m, b, kp),
        t.context = Op(null),
        i = t.current,
        s = Vt(),
        s = Cu(s),
        o = Wn(s),
        o.callback = null,
        ea(i, o, s),
        i = s,
        t.current.lanes = i,
        pr(t, i),
        dn(t),
        e[di] = t.current,
        _c(e),
        new Vl(t)
    }
    ,
    ss.version = "19.2.5",
    ss
}
var Fp;
function oS() {
    if (Fp)
        return Yc.exports;
    Fp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (a) {
                console.error(a)
            }
    }
    return n(),
    Yc.exports = uS(),
    Yc.exports
}
var cS = oS()
  , fS = "__TSS_CONTEXT"
  , ff = Symbol.for("TSS_SERVER_FUNCTION")
  , dS = "application/x-tss-framed"
  , Bn = {
    JSON: 0,
    CHUNK: 1,
    END: 2,
    ERROR: 3
}
  , hS = /;\s*v=(\d+)/;
function mS(n) {
    const a = n.match(hS);
    return a ? parseInt(a[1], 10) : void 0
}
function pS(n) {
    const a = mS(n);
    if (a !== void 0 && a !== 1)
        throw new Error(`Incompatible framed protocol version: server=${a}, client=1. Please ensure client and server are using compatible versions.`)
}
var pg = () => window.__TSS_START_OPTIONS__
  , yg = !1;
function ys(n) {
    return n[n.length - 1]
}
function yS(n) {
    return typeof n == "function"
}
function _a(n, a) {
    return yS(n) ? n(a) : n
}
var gS = Object.prototype.hasOwnProperty
  , Jp = Object.prototype.propertyIsEnumerable
  , vS = () => Object.create(null)
  , $a = (n, a) => Wa(n, a, vS);
function Wa(n, a, r= () => ({}), l=0) {
    if (n === a)
        return n;
    if (l > 500)
        return a;
    const u = a
      , f = Wp(n) && Wp(u);
    if (!f && !(ir(n) && ir(u)))
        return u;
    const d = f ? n : Ip(n);
    if (!d)
        return u;
    const h = f ? u : Ip(u);
    if (!h)
        return u;
    const y = d.length
      , p = h.length
      , v = f ? new Array(p) : r();
    let g = 0;
    for (let _ = 0; _ < p; _++) {
        const x = f ? _ : h[_]
          , R = n[x]
          , M = u[x];
        if (R === M) {
            v[x] = R,
            (f ? _ < y : gS.call(n, x)) && g++;
            continue
        }
        if (R === null || M === null || typeof R != "object" || typeof M != "object") {
            v[x] = M;
            continue
        }
        const E = Wa(R, M, r, l + 1);
        v[x] = E,
        E === R && g++
    }
    return y === p && g === y ? n : v
}
function Ip(n) {
    const a = Object.getOwnPropertyNames(n);
    for (const u of a)
        if (!Jp.call(n, u))
            return !1;
    const r = Object.getOwnPropertySymbols(n);
    if (r.length === 0)
        return a;
    const l = a;
    for (const u of r) {
        if (!Jp.call(n, u))
            return !1;
        l.push(u)
    }
    return l
}
function ir(n) {
    if (!$p(n))
        return !1;
    const a = n.constructor;
    if (typeof a > "u")
        return !0;
    const r = a.prototype;
    return !(!$p(r) || !r.hasOwnProperty("isPrototypeOf"))
}
function $p(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Wp(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function zt(n, a, r) {
    if (n === a)
        return !0;
    if (typeof n != typeof a)
        return !1;
    if (Array.isArray(n) && Array.isArray(a)) {
        if (n.length !== a.length)
            return !1;
        for (let l = 0, u = n.length; l < u; l++)
            if (!zt(n[l], a[l], r))
                return !1;
        return !0
    }
    if (ir(n) && ir(a)) {
        const l = r?.ignoreUndefined ?? !0;
        if (r?.partial) {
            for (const d in a)
                if ((!l || a[d] !== void 0) && !zt(n[d], a[d], r))
                    return !1;
            return !0
        }
        let u = 0;
        if (!l)
            u = Object.keys(n).length;
        else
            for (const d in n)
                n[d] !== void 0 && u++;
        let f = 0;
        for (const d in a)
            if ((!l || a[d] !== void 0) && (f++,
            f > u || !zt(n[d], a[d], r)))
                return !1;
        return u === f
    }
    return !1
}
function ii(n) {
    let a, r;
    const l = new Promise( (u, f) => {
        a = u,
        r = f
    }
    );
    return l.status = "pending",
    l.resolve = u => {
        l.status = "resolved",
        l.value = u,
        a(u),
        n?.(u)
    }
    ,
    l.reject = u => {
        l.status = "rejected",
        r(u)
    }
    ,
    l
}
function bS(n) {
    return typeof n?.message != "string" ? !1 : n.message.startsWith("Failed to fetch dynamically imported module") || n.message.startsWith("error loading dynamically imported module") || n.message.startsWith("Importing a module script failed")
}
function gs(n) {
    return !!(n && typeof n == "object" && typeof n.then == "function")
}
function SS(n) {
    return n.replace(/[\x00-\x1f\x7f]/g, "")
}
function ey(n) {
    let a;
    try {
        a = decodeURI(n)
    } catch {
        a = n.replaceAll(/%[0-9A-F]{2}/gi, r => {
            try {
                return decodeURI(r)
            } catch {
                return r
            }
        }
        )
    }
    return SS(a)
}
var _S = ["http:", "https:", "mailto:", "tel:"];
function nu(n, a) {
    if (!n)
        return !1;
    try {
        const r = new URL(n);
        return !a.has(r.protocol)
    } catch {
        return !1
    }
}
var xS = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , ES = /[&><\u2028\u2029]/g;
function wS(n) {
    return n.replace(ES, a => xS[a])
}
function ls(n) {
    if (!n)
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    const a = /%25|%5C/gi;
    let r = 0, l = "", u;
    for (; (u = a.exec(n)) !== null; )
        l += ey(n.slice(r, u.index)) + u[0],
        r = a.lastIndex;
    l = l + ey(r ? n.slice(r) : n);
    let f = !1;
    return l.startsWith("//") && (f = !0,
    l = "/" + l.replace(/^\/+/, "")),
    {
        path: l,
        handledProtocolRelativeURL: f
    }
}
function RS(n) {
    return /\s|[^\u0000-\u007F]/.test(n) ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : n
}
function TS(n, a) {
    if (n === a)
        return !0;
    if (n.length !== a.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (n[r] !== a[r])
            return !1;
    return !0
}
function Nt() {
    throw new Error("Invariant failed")
}
function vs(n) {
    const a = new Map;
    let r, l;
    const u = f => {
        f.next && (f.prev ? (f.prev.next = f.next,
        f.next.prev = f.prev,
        f.next = void 0,
        l && (l.next = f,
        f.prev = l)) : (f.next.prev = void 0,
        r = f.next,
        f.next = void 0,
        l && (f.prev = l,
        l.next = f)),
        l = f)
    }
    ;
    return {
        get(f) {
            const d = a.get(f);
            if (d)
                return u(d),
                d.value
        },
        set(f, d) {
            if (a.size >= n && r) {
                const y = r;
                a.delete(y.key),
                y.next && (r = y.next,
                y.next.prev = void 0),
                y === l && (l = void 0)
            }
            const h = a.get(f);
            if (h)
                h.value = d,
                u(h);
            else {
                const y = {
                    key: f,
                    value: d,
                    prev: l
                };
                l && (l.next = y),
                l = y,
                r || (r = y),
                a.set(f, y)
            }
        },
        clear() {
            a.clear(),
            r = void 0,
            l = void 0
        }
    }
}
var xa = 4
  , gg = 5;
function AS(n) {
    const a = n.indexOf("{");
    if (a === -1)
        return null;
    const r = n.indexOf("}", a);
    return r === -1 || a + 1 >= n.length ? null : [a, r]
}
function Of(n, a, r=new Uint16Array(6)) {
    const l = n.indexOf("/", a)
      , u = l === -1 ? n.length : l
      , f = n.substring(a, u);
    if (!f || !f.includes("$"))
        return r[0] = 0,
        r[1] = a,
        r[2] = a,
        r[3] = u,
        r[4] = u,
        r[5] = u,
        r;
    if (f === "$") {
        const h = n.length;
        return r[0] = 2,
        r[1] = a,
        r[2] = a,
        r[3] = h,
        r[4] = h,
        r[5] = h,
        r
    }
    if (f.charCodeAt(0) === 36)
        return r[0] = 1,
        r[1] = a,
        r[2] = a + 1,
        r[3] = u,
        r[4] = u,
        r[5] = u,
        r;
    const d = AS(f);
    if (d) {
        const [h,y] = d
          , p = f.charCodeAt(h + 1);
        if (p === 45) {
            if (h + 2 < f.length && f.charCodeAt(h + 2) === 36) {
                const v = h + 3
                  , g = y;
                if (v < g)
                    return r[0] = 3,
                    r[1] = a + h,
                    r[2] = a + v,
                    r[3] = a + g,
                    r[4] = a + y + 1,
                    r[5] = u,
                    r
            }
        } else if (p === 36) {
            const v = h + 1
              , g = h + 2;
            return g === y ? (r[0] = 2,
            r[1] = a + h,
            r[2] = a + v,
            r[3] = a + g,
            r[4] = a + y + 1,
            r[5] = n.length,
            r) : (r[0] = 1,
            r[1] = a + h,
            r[2] = a + g,
            r[3] = a + y,
            r[4] = a + y + 1,
            r[5] = u,
            r)
        }
    }
    return r[0] = 0,
    r[1] = a,
    r[2] = a,
    r[3] = u,
    r[4] = u,
    r[5] = u,
    r
}
function yu(n, a, r, l, u, f, d) {
    d?.(r);
    let h = l;
    {
        const y = r.fullPath ?? r.from
          , p = y.length
          , v = r.options?.caseSensitive ?? n
          , g = !!(r.options?.params?.parse && r.options?.skipRouteOnParseError?.params);
        for (; h < p; ) {
            const x = Of(y, h, a);
            let R;
            const M = h
              , E = x[5];
            switch (h = E + 1,
            f++,
            x[0]) {
            case 0:
                {
                    const C = y.substring(x[2], x[3]);
                    if (v) {
                        const H = u.static?.get(C);
                        if (H)
                            R = H;
                        else {
                            u.static ??= new Map;
                            const Z = ei(r.fullPath ?? r.from);
                            Z.parent = u,
                            Z.depth = f,
                            R = Z,
                            u.static.set(C, Z)
                        }
                    } else {
                        const H = C.toLowerCase()
                          , Z = u.staticInsensitive?.get(H);
                        if (Z)
                            R = Z;
                        else {
                            u.staticInsensitive ??= new Map;
                            const k = ei(r.fullPath ?? r.from);
                            k.parent = u,
                            k.depth = f,
                            R = k,
                            u.staticInsensitive.set(H, k)
                        }
                    }
                    break
                }
            case 1:
                {
                    const C = y.substring(M, x[1])
                      , H = y.substring(x[4], E)
                      , Z = v && !!(C || H)
                      , k = C ? Z ? C : C.toLowerCase() : void 0
                      , I = H ? Z ? H : H.toLowerCase() : void 0
                      , J = !g && u.dynamic?.find(Q => !Q.skipOnParamError && Q.caseSensitive === Z && Q.prefix === k && Q.suffix === I);
                    if (J)
                        R = J;
                    else {
                        const Q = Kc(1, r.fullPath ?? r.from, Z, k, I);
                        R = Q,
                        Q.depth = f,
                        Q.parent = u,
                        u.dynamic ??= [],
                        u.dynamic.push(Q)
                    }
                    break
                }
            case 3:
                {
                    const C = y.substring(M, x[1])
                      , H = y.substring(x[4], E)
                      , Z = v && !!(C || H)
                      , k = C ? Z ? C : C.toLowerCase() : void 0
                      , I = H ? Z ? H : H.toLowerCase() : void 0
                      , J = !g && u.optional?.find(Q => !Q.skipOnParamError && Q.caseSensitive === Z && Q.prefix === k && Q.suffix === I);
                    if (J)
                        R = J;
                    else {
                        const Q = Kc(3, r.fullPath ?? r.from, Z, k, I);
                        R = Q,
                        Q.parent = u,
                        Q.depth = f,
                        u.optional ??= [],
                        u.optional.push(Q)
                    }
                    break
                }
            case 2:
                {
                    const C = y.substring(M, x[1])
                      , H = y.substring(x[4], E)
                      , Z = v && !!(C || H)
                      , k = C ? Z ? C : C.toLowerCase() : void 0
                      , I = H ? Z ? H : H.toLowerCase() : void 0
                      , J = Kc(2, r.fullPath ?? r.from, Z, k, I);
                    R = J,
                    J.parent = u,
                    J.depth = f,
                    u.wildcard ??= [],
                    u.wildcard.push(J)
                }
            }
            u = R
        }
        if (g && r.children && !r.isRoot && r.id && r.id.charCodeAt(r.id.lastIndexOf("/") + 1) === 95) {
            const x = ei(r.fullPath ?? r.from);
            x.kind = gg,
            x.parent = u,
            f++,
            x.depth = f,
            u.pathless ??= [],
            u.pathless.push(x),
            u = x
        }
        const _ = (r.path || !r.children) && !r.isRoot;
        if (_ && y.endsWith("/")) {
            const x = ei(r.fullPath ?? r.from);
            x.kind = xa,
            x.parent = u,
            f++,
            x.depth = f,
            u.index = x,
            u = x
        }
        u.parse = r.options?.params?.parse ?? null,
        u.skipOnParamError = g,
        u.parsingPriority = r.options?.skipRouteOnParseError?.priority ?? 0,
        _ && !u.route && (u.route = r,
        u.fullPath = r.fullPath ?? r.from)
    }
    if (r.children)
        for (const y of r.children)
            yu(n, a, y, h, u, f, d)
}
function Pc(n, a) {
    if (n.skipOnParamError && !a.skipOnParamError)
        return -1;
    if (!n.skipOnParamError && a.skipOnParamError)
        return 1;
    if (n.skipOnParamError && a.skipOnParamError && (n.parsingPriority || a.parsingPriority))
        return a.parsingPriority - n.parsingPriority;
    if (n.prefix && a.prefix && n.prefix !== a.prefix) {
        if (n.prefix.startsWith(a.prefix))
            return -1;
        if (a.prefix.startsWith(n.prefix))
            return 1
    }
    if (n.suffix && a.suffix && n.suffix !== a.suffix) {
        if (n.suffix.endsWith(a.suffix))
            return -1;
        if (a.suffix.endsWith(n.suffix))
            return 1
    }
    return n.prefix && !a.prefix ? -1 : !n.prefix && a.prefix ? 1 : n.suffix && !a.suffix ? -1 : !n.suffix && a.suffix ? 1 : n.caseSensitive && !a.caseSensitive ? -1 : !n.caseSensitive && a.caseSensitive ? 1 : 0
}
function va(n) {
    if (n.pathless)
        for (const a of n.pathless)
            va(a);
    if (n.static)
        for (const a of n.static.values())
            va(a);
    if (n.staticInsensitive)
        for (const a of n.staticInsensitive.values())
            va(a);
    if (n.dynamic?.length) {
        n.dynamic.sort(Pc);
        for (const a of n.dynamic)
            va(a)
    }
    if (n.optional?.length) {
        n.optional.sort(Pc);
        for (const a of n.optional)
            va(a)
    }
    if (n.wildcard?.length) {
        n.wildcard.sort(Pc);
        for (const a of n.wildcard)
            va(a)
    }
}
function ei(n) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: n,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}
function Kc(n, a, r, l, u) {
    return {
        kind: n,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: a,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: r,
        prefix: l,
        suffix: u
    }
}
function OS(n, a) {
    const r = ei("/")
      , l = new Uint16Array(6);
    for (const u of n)
        yu(!1, l, u, 1, r, 0);
    va(r),
    a.masksTree = r,
    a.flatCache = vs(1e3)
}
function CS(n, a) {
    n ||= "/";
    const r = a.flatCache.get(n);
    if (r)
        return r;
    const l = Cf(n, a.masksTree);
    return a.flatCache.set(n, l),
    l
}
function MS(n, a, r, l, u) {
    n ||= "/",
    l ||= "/";
    const f = a ? `case\0${n}` : n;
    let d = u.singleCache.get(f);
    return d || (d = ei("/"),
    yu(a, new Uint16Array(6), {
        from: n
    }, 1, d, 0),
    u.singleCache.set(f, d)),
    Cf(l, d, r)
}
function zS(n, a, r=!1) {
    const l = r ? n : `nofuzz\0${n}`
      , u = a.matchCache.get(l);
    if (u !== void 0)
        return u;
    n ||= "/";
    let f;
    try {
        f = Cf(n, a.segmentTree, r)
    } catch (d) {
        if (d instanceof URIError)
            f = null;
        else
            throw d
    }
    return f && (f.branch = jS(f.route)),
    a.matchCache.set(l, f),
    f
}
function DS(n) {
    return n === "/" ? n : n.replace(/\/{1,}$/, "")
}
function NS(n, a=!1, r) {
    const l = ei(n.fullPath)
      , u = new Uint16Array(6)
      , f = {}
      , d = {};
    let h = 0;
    return yu(a, u, n, 1, l, 0, y => {
        if (r?.(y, h),
        y.id in f && Nt(),
        f[y.id] = y,
        h !== 0 && y.path) {
            const p = DS(y.fullPath);
            (!d[p] || y.fullPath.endsWith("/")) && (d[p] = y)
        }
        h++
    }
    ),
    va(l),
    {
        processedTree: {
            segmentTree: l,
            singleCache: vs(1e3),
            matchCache: vs(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: f,
        routesByPath: d
    }
}
function Cf(n, a, r=!1) {
    const l = n.split("/")
      , u = US(n, l, a, r);
    if (!u)
        return null;
    const [f] = vg(n, l, u);
    return {
        route: u.node.route,
        rawParams: f,
        parsedParams: u.parsedParams
    }
}
function vg(n, a, r) {
    const l = LS(r.node);
    let u = null;
    const f = Object.create(null);
    let d = r.extract?.part ?? 0
      , h = r.extract?.node ?? 0
      , y = r.extract?.path ?? 0
      , p = r.extract?.segment ?? 0;
    for (; h < l.length; d++,
    h++,
    y++,
    p++) {
        const v = l[h];
        if (v.kind === xa)
            break;
        if (v.kind === gg) {
            p--,
            d--,
            y--;
            continue
        }
        const g = a[d]
          , _ = y;
        if (g && (y += g.length),
        v.kind === 1) {
            u ??= r.node.fullPath.split("/");
            const x = u[p]
              , R = v.prefix?.length ?? 0;
            if (x.charCodeAt(R) === 123) {
                const M = v.suffix?.length ?? 0
                  , E = x.substring(R + 2, x.length - M - 1)
                  , C = g.substring(R, g.length - M);
                f[E] = decodeURIComponent(C)
            } else {
                const M = x.substring(1);
                f[M] = decodeURIComponent(g)
            }
        } else if (v.kind === 3) {
            if (r.skipped & 1 << h) {
                d--,
                y = _ - 1;
                continue
            }
            u ??= r.node.fullPath.split("/");
            const x = u[p]
              , R = v.prefix?.length ?? 0
              , M = v.suffix?.length ?? 0
              , E = x.substring(R + 3, x.length - M - 1)
              , C = v.suffix || v.prefix ? g.substring(R, g.length - M) : g;
            C && (f[E] = decodeURIComponent(C))
        } else if (v.kind === 2) {
            const x = v
              , R = n.substring(_ + (x.prefix?.length ?? 0), n.length - (x.suffix?.length ?? 0))
              , M = decodeURIComponent(R);
            f["*"] = M,
            f._splat = M;
            break
        }
    }
    return r.rawParams && Object.assign(f, r.rawParams),
    [f, {
        part: d,
        node: h,
        path: y,
        segment: p
    }]
}
function jS(n) {
    const a = [n];
    for (; n.parentRoute; )
        n = n.parentRoute,
        a.push(n);
    return a.reverse(),
    a
}
function LS(n) {
    const a = Array(n.depth + 1);
    do
        a[n.depth] = n,
        n = n.parent;
    while (n);
    return a
}
function US(n, a, r, l) {
    if (n === "/" && r.index)
        return {
            node: r.index,
            skipped: 0
        };
    const u = !ys(a)
      , f = u && n !== "/"
      , d = a.length - (u ? 1 : 0)
      , h = [{
        node: r,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0
    }];
    let y = null
      , p = null;
    for (; h.length; ) {
        const v = h.pop()
          , {node: g, index: _, skipped: x, depth: R, statics: M, dynamics: E, optionals: C} = v;
        let {extract: H, rawParams: Z, parsedParams: k} = v;
        if (g.kind === 2 && g.route && !Gl(p, v))
            continue;
        if (g.skipOnParamError) {
            if (!ty(n, a, v))
                continue;
            Z = v.rawParams,
            H = v.extract,
            k = v.parsedParams
        }
        l && g.route && g.kind !== xa && Gl(y, v) && (y = v);
        const I = _ === d;
        if (I && (g.route && (!f || g.kind === xa || g.kind === 2) && Gl(p, v) && (p = v),
        !g.optional && !g.wildcard && !g.index && !g.pathless))
            continue;
        const J = I ? void 0 : a[_];
        let Q;
        if (I && g.index) {
            const G = {
                node: g.index,
                index: _,
                skipped: x,
                depth: R + 1,
                statics: M,
                dynamics: E,
                optionals: C,
                extract: H,
                rawParams: Z,
                parsedParams: k
            };
            let $ = !0;
            if (g.index.skipOnParamError && (ty(n, a, G) || ($ = !1)),
            $) {
                if (!E && !C && !x && BS(M, d))
                    return G;
                Gl(p, G) && (p = G)
            }
        }
        if (g.wildcard)
            for (let G = g.wildcard.length - 1; G >= 0; G--) {
                const $ = g.wildcard[G]
                  , {prefix: ce, suffix: se} = $;
                if (!(ce && (I || !($.caseSensitive ? J : Q ??= J.toLowerCase()).startsWith(ce)))) {
                    if (se) {
                        if (I)
                            continue;
                        const _e = a.slice(_).join("/").slice(-se.length);
                        if (($.caseSensitive ? _e : _e.toLowerCase()) !== se)
                            continue
                    }
                    h.push({
                        node: $,
                        index: d,
                        skipped: x,
                        depth: R + 1,
                        statics: M,
                        dynamics: E,
                        optionals: C,
                        extract: H,
                        rawParams: Z,
                        parsedParams: k
                    })
                }
            }
        if (g.optional) {
            const G = x | 1 << R
              , $ = R + 1;
            for (let ce = g.optional.length - 1; ce >= 0; ce--) {
                const se = g.optional[ce];
                h.push({
                    node: se,
                    index: _,
                    skipped: G,
                    depth: $,
                    statics: M,
                    dynamics: E,
                    optionals: C,
                    extract: H,
                    rawParams: Z,
                    parsedParams: k
                })
            }
            if (!I)
                for (let ce = g.optional.length - 1; ce >= 0; ce--) {
                    const se = g.optional[ce]
                      , {prefix: _e, suffix: je} = se;
                    if (_e || je) {
                        const Ie = se.caseSensitive ? J : Q ??= J.toLowerCase();
                        if (_e && !Ie.startsWith(_e) || je && !Ie.endsWith(je))
                            continue
                    }
                    h.push({
                        node: se,
                        index: _ + 1,
                        skipped: x,
                        depth: $,
                        statics: M,
                        dynamics: E,
                        optionals: C + Ql(d, _),
                        extract: H,
                        rawParams: Z,
                        parsedParams: k
                    })
                }
        }
        if (!I && g.dynamic && J)
            for (let G = g.dynamic.length - 1; G >= 0; G--) {
                const $ = g.dynamic[G]
                  , {prefix: ce, suffix: se} = $;
                if (ce || se) {
                    const _e = $.caseSensitive ? J : Q ??= J.toLowerCase();
                    if (ce && !_e.startsWith(ce) || se && !_e.endsWith(se))
                        continue
                }
                h.push({
                    node: $,
                    index: _ + 1,
                    skipped: x,
                    depth: R + 1,
                    statics: M,
                    dynamics: E + Ql(d, _),
                    optionals: C,
                    extract: H,
                    rawParams: Z,
                    parsedParams: k
                })
            }
        if (!I && g.staticInsensitive) {
            const G = g.staticInsensitive.get(Q ??= J.toLowerCase());
            G && h.push({
                node: G,
                index: _ + 1,
                skipped: x,
                depth: R + 1,
                statics: M + Ql(d, _),
                dynamics: E,
                optionals: C,
                extract: H,
                rawParams: Z,
                parsedParams: k
            })
        }
        if (!I && g.static) {
            const G = g.static.get(J);
            G && h.push({
                node: G,
                index: _ + 1,
                skipped: x,
                depth: R + 1,
                statics: M + Ql(d, _),
                dynamics: E,
                optionals: C,
                extract: H,
                rawParams: Z,
                parsedParams: k
            })
        }
        if (g.pathless) {
            const G = R + 1;
            for (let $ = g.pathless.length - 1; $ >= 0; $--) {
                const ce = g.pathless[$];
                h.push({
                    node: ce,
                    index: _,
                    skipped: x,
                    depth: G,
                    statics: M,
                    dynamics: E,
                    optionals: C,
                    extract: H,
                    rawParams: Z,
                    parsedParams: k
                })
            }
        }
    }
    if (p)
        return p;
    if (l && y) {
        let v = y.index;
        for (let _ = 0; _ < y.index; _++)
            v += a[_].length;
        const g = v === n.length ? "/" : n.slice(v);
        return y.rawParams ??= Object.create(null),
        y.rawParams["**"] = decodeURIComponent(g),
        y
    }
    return null
}
function Ql(n, a) {
    return 2 ** (n - a - 1)
}
function BS(n, a) {
    return n === 2 ** (a - 1) - 1
}
function ty(n, a, r) {
    try {
        const [l,u] = vg(n, a, r);
        r.rawParams = l,
        r.extract = u;
        const f = r.node.parse(l);
        return r.parsedParams = Object.assign(Object.create(null), r.parsedParams, f),
        !0
    } catch {
        return null
    }
}
function Gl(n, a) {
    return n ? a.statics > n.statics || a.statics === n.statics && (a.dynamics > n.dynamics || a.dynamics === n.dynamics && (a.optionals > n.optionals || a.optionals === n.optionals && ((a.node.kind === xa) > (n.node.kind === xa) || a.node.kind === xa == (n.node.kind === xa) && a.depth > n.depth))) : !0
}
function Il(n) {
    return Mf(n.filter(a => a !== void 0).join("/"))
}
function Mf(n) {
    return n.replace(/\/{2,}/g, "/")
}
function bg(n) {
    return n === "/" ? n : n.replace(/^\/{1,}/, "")
}
function wa(n) {
    const a = n.length;
    return a > 1 && n[a - 1] === "/" ? n.replace(/\/{1,}$/, "") : n
}
function Sg(n) {
    return wa(bg(n))
}
function au(n, a) {
    return n?.endsWith("/") && n !== "/" && n !== `${a}/` ? n.slice(0, -1) : n
}
function kS(n, a, r) {
    return au(n, r) === au(a, r)
}
function HS({base: n, to: a, trailingSlash: r="never", cache: l}) {
    const u = a.startsWith("/")
      , f = !u && a === ".";
    let d;
    if (l) {
        d = u ? a : f ? n : n + "\0" + a;
        const g = l.get(d);
        if (g)
            return g
    }
    let h;
    if (f)
        h = n.split("/");
    else if (u)
        h = a.split("/");
    else {
        for (h = n.split("/"); h.length > 1 && ys(h) === ""; )
            h.pop();
        const g = a.split("/");
        for (let _ = 0, x = g.length; _ < x; _++) {
            const R = g[_];
            R === "" ? _ ? _ === x - 1 && h.push(R) : h = [R] : R === ".." ? h.pop() : R === "." || h.push(R)
        }
    }
    h.length > 1 && (ys(h) === "" ? r === "never" && h.pop() : r === "always" && h.push(""));
    let y, p = "";
    for (let g = 0; g < h.length; g++) {
        g > 0 && (p += "/");
        const _ = h[g];
        if (!_)
            continue;
        y = Of(_, 0, y);
        const x = y[0];
        if (x === 0) {
            p += _;
            continue
        }
        const R = y[5]
          , M = _.substring(0, y[1])
          , E = _.substring(y[4], R)
          , C = _.substring(y[2], y[3]);
        x === 1 ? p += M || E ? `${M}{$${C}}${E}` : `$${C}` : x === 2 ? p += M || E ? `${M}{$}${E}` : "$" : p += `${M}{-$${C}}${E}`
    }
    p = Mf(p);
    const v = p || "/";
    return d && l && l.set(d, v),
    v
}
function qS(n) {
    const a = new Map(n.map(u => [encodeURIComponent(u), u]))
      , r = Array.from(a.keys()).map(u => u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      , l = new RegExp(r,"g");
    return u => u.replace(l, f => a.get(f) ?? f)
}
function Fc(n, a, r) {
    const l = a[n];
    return typeof l != "string" ? l : n === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(l) ? l : l.split("/").map(u => ay(u, r)).join("/") : ay(l, r)
}
function ny({path: n, params: a, decoder: r, ...l}) {
    let u = !1;
    const f = Object.create(null);
    if (!n || n === "/")
        return {
            interpolatedPath: "/",
            usedParams: f,
            isMissingParams: u
        };
    if (!n.includes("$"))
        return {
            interpolatedPath: n,
            usedParams: f,
            isMissingParams: u
        };
    const d = n.length;
    let h = 0, y, p = "";
    for (; h < d; ) {
        const v = h;
        y = Of(n, v, y);
        const g = y[5];
        if (h = g + 1,
        v === g)
            continue;
        const _ = y[0];
        if (_ === 0) {
            p += "/" + n.substring(v, g);
            continue
        }
        if (_ === 2) {
            const x = a._splat;
            f._splat = x,
            f["*"] = x;
            const R = n.substring(v, y[1])
              , M = n.substring(y[4], g);
            if (!x) {
                u = !0,
                (R || M) && (p += "/" + R + M);
                continue
            }
            const E = Fc("_splat", a, r);
            p += "/" + R + E + M;
            continue
        }
        if (_ === 1) {
            const x = n.substring(y[2], y[3]);
            !u && !(x in a) && (u = !0),
            f[x] = a[x];
            const R = n.substring(v, y[1])
              , M = n.substring(y[4], g)
              , E = Fc(x, a, r) ?? "undefined";
            p += "/" + R + E + M;
            continue
        }
        if (_ === 3) {
            const x = n.substring(y[2], y[3])
              , R = a[x];
            if (R == null)
                continue;
            f[x] = R;
            const M = n.substring(v, y[1])
              , E = n.substring(y[4], g)
              , C = Fc(x, a, r) ?? "";
            p += "/" + M + C + E;
            continue
        }
    }
    return n.endsWith("/") && (p += "/"),
    {
        usedParams: f,
        interpolatedPath: p || "/",
        isMissingParams: u
    }
}
function ay(n, a) {
    const r = encodeURIComponent(n);
    return a?.(r) ?? r
}
function ZS(n={}) {
    if (n.isNotFound = !0,
    n.throw)
        throw n;
    return n
}
function dt(n) {
    return n?.isNotFound === !0
}
function VS() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var YS = "tsr-scroll-restoration-v1_3";
function QS() {
    const n = VS();
    if (!n)
        return null;
    let a = {};
    try {
        const l = JSON.parse(n.getItem("tsr-scroll-restoration-v1_3") || "{}");
        ir(l) && (a = l)
    } catch {}
    return {
        get state() {
            return a
        },
        set: l => {
            a = _a(l, a) || a
        }
        ,
        persist: () => {
            try {
                n.setItem(YS, JSON.stringify(a))
            } catch {}
        }
    }
}
var iy = QS()
  , GS = n => n.state.__TSR_key || n.href;
function XS(n) {
    const a = [];
    let r;
    for (; r = n.parentNode; )
        a.push(`${n.tagName}:nth-child(${Array.prototype.indexOf.call(r.children, n) + 1})`),
        n = r;
    return `${a.reverse().join(" > ")}`.toLowerCase()
}
var Xl = !1
  , us = "window"
  , ry = "data-scroll-restoration-id";
function PS(n, a) {
    if (!iy)
        return;
    const r = iy;
    if ((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
    n.isScrollRestorationSetup || !r)
        return;
    n.isScrollRestorationSetup = !0,
    Xl = !1;
    const l = n.options.getScrollRestorationKey || GS
      , u = new Map;
    window.history.scrollRestoration = "manual";
    const f = h => {
        if (!(Xl || !n.isScrollRestoring))
            if (h.target === document || h.target === window)
                u.set(us, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
            else {
                const y = h.target;
                u.set(y, {
                    scrollX: y.scrollLeft || 0,
                    scrollY: y.scrollTop || 0
                })
            }
    }
      , d = h => {
        if (!n.isScrollRestoring || !h || u.size === 0 || !r)
            return;
        const y = r.state[h] ||= {};
        for (const [p,v] of u) {
            let g;
            if (p === us)
                g = us;
            else if (p.isConnected) {
                const _ = p.getAttribute(ry);
                g = _ ? `[${ry}="${_}"]` : XS(p)
            }
            g && (y[g] = v)
        }
    }
    ;
    document.addEventListener("scroll", f, !0),
    n.subscribe("onBeforeLoad", h => {
        d(h.fromLocation ? l(h.fromLocation) : void 0),
        u.clear()
    }
    ),
    window.addEventListener("pagehide", () => {
        d(l(n.stores.resolvedLocation.get() ?? n.stores.location.get())),
        r.persist()
    }
    ),
    n.subscribe("onRendered", h => {
        const y = l(h.toLocation)
          , p = n.options.scrollRestorationBehavior
          , v = n.options.scrollToTopSelectors;
        if (u.clear(),
        !n.resetNextScroll) {
            n.resetNextScroll = !0;
            return
        }
        if (!(typeof n.options.scrollRestoration == "function" && !n.options.scrollRestoration({
            location: n.latestLocation
        }))) {
            Xl = !0;
            try {
                const g = n.isScrollRestoring ? r.state[y] : void 0;
                let _ = !1;
                if (g)
                    for (const x in g) {
                        const R = g[x];
                        if (!ir(R))
                            continue;
                        const {scrollX: M, scrollY: E} = R;
                        if (!(!Number.isFinite(M) || !Number.isFinite(E))) {
                            if (x === us)
                                window.scrollTo({
                                    top: E,
                                    left: M,
                                    behavior: p
                                }),
                                _ = !0;
                            else if (x) {
                                let C;
                                try {
                                    C = document.querySelector(x)
                                } catch {
                                    continue
                                }
                                C && (C.scrollLeft = M,
                                C.scrollTop = E,
                                _ = !0)
                            }
                        }
                    }
                if (!_) {
                    const x = n.history.location.hash.slice(1);
                    if (x) {
                        const R = window.history.state?.__hashScrollIntoViewOptions ?? !0;
                        if (R) {
                            const M = document.getElementById(x);
                            M && M.scrollIntoView(R)
                        }
                    } else {
                        const R = {
                            top: 0,
                            left: 0,
                            behavior: p
                        };
                        if (window.scrollTo(R),
                        v)
                            for (const M of v) {
                                if (M === us)
                                    continue;
                                const E = typeof M == "function" ? M() : document.querySelector(M);
                                E && E.scrollTo(R)
                            }
                    }
                }
            } finally {
                Xl = !1
            }
            n.isScrollRestoring && r.set(g => (g[y] ||= {},
            g))
        }
    }
    )
}
function _g(n, a=String) {
    const r = new URLSearchParams;
    for (const l in n) {
        const u = n[l];
        u !== void 0 && r.set(l, a(u))
    }
    return r.toString()
}
function Jc(n) {
    return n ? n === "false" ? !1 : n === "true" ? !0 : +n * 0 === 0 && +n + "" === n ? +n : n : ""
}
function KS(n) {
    const a = new URLSearchParams(n)
      , r = Object.create(null);
    for (const [l,u] of a.entries()) {
        const f = r[l];
        f == null ? r[l] = Jc(u) : Array.isArray(f) ? f.push(Jc(u)) : r[l] = [f, Jc(u)]
    }
    return r
}
var FS = IS(JSON.parse)
  , JS = $S(JSON.stringify, JSON.parse);
function IS(n) {
    return a => {
        a[0] === "?" && (a = a.substring(1));
        const r = KS(a);
        for (const l in r) {
            const u = r[l];
            if (typeof u == "string")
                try {
                    r[l] = n(u)
                } catch {}
        }
        return r
    }
}
function $S(n, a) {
    const r = typeof a == "function";
    function l(u) {
        if (typeof u == "object" && u !== null)
            try {
                return n(u)
            } catch {}
        else if (r && typeof u == "string")
            try {
                return a(u),
                n(u)
            } catch {}
        return u
    }
    return u => {
        const f = _g(u, l);
        return f ? `?${f}` : ""
    }
}
var ni = "__root__";
function xg(n) {
    if (n.statusCode = n.statusCode || n.code || 307,
    !n._builtLocation && !n.reloadDocument && typeof n.href == "string")
        try {
            new URL(n.href),
            n.reloadDocument = !0
        } catch {}
    const a = new Headers(n.headers);
    n.href && a.get("Location") === null && a.set("Location", n.href);
    const r = new Response(null,{
        status: n.statusCode,
        headers: a
    });
    if (r.options = n,
    n.throw)
        throw r;
    return r
}
function Dt(n) {
    return n instanceof Response && !!n.options
}
function WS(n) {
    if (n !== null && typeof n == "object" && n.isSerializedRedirect)
        return xg(n)
}
function e_(n) {
    return {
        input: ({url: a}) => {
            for (const r of n)
                a = df(r, a);
            return a
        }
        ,
        output: ({url: a}) => {
            for (let r = n.length - 1; r >= 0; r--)
                a = Eg(n[r], a);
            return a
        }
    }
}
function t_(n) {
    const a = Sg(n.basepath)
      , r = `/${a}`
      , l = `${r}/`
      , u = n.caseSensitive ? r : r.toLowerCase()
      , f = n.caseSensitive ? l : l.toLowerCase();
    return {
        input: ({url: d}) => {
            const h = n.caseSensitive ? d.pathname : d.pathname.toLowerCase();
            return h === u ? d.pathname = "/" : h.startsWith(f) && (d.pathname = d.pathname.slice(r.length)),
            d
        }
        ,
        output: ({url: d}) => (d.pathname = Il(["/", a, d.pathname]),
        d)
    }
}
function df(n, a) {
    const r = n?.input?.({
        url: a
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return a
}
function Eg(n, a) {
    const r = n?.output?.({
        url: a
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return a
}
function n_(n, a) {
    const {createMutableStore: r, createReadonlyStore: l, batch: u, init: f} = a
      , d = new Map
      , h = new Map
      , y = new Map
      , p = r(n.status)
      , v = r(n.loadedAt)
      , g = r(n.isLoading)
      , _ = r(n.isTransitioning)
      , x = r(n.location)
      , R = r(n.resolvedLocation)
      , M = r(n.statusCode)
      , E = r(n.redirect)
      , C = r([])
      , H = r([])
      , Z = r([])
      , k = l( () => Ic(d, C.get()))
      , I = l( () => Ic(h, H.get()))
      , J = l( () => Ic(y, Z.get()))
      , Q = l( () => C.get()[0])
      , G = l( () => C.get().some(K => d.get(K)?.get().status === "pending"))
      , $ = l( () => ({
        locationHref: x.get().href,
        resolvedLocationHref: R.get()?.href,
        status: p.get()
    }))
      , ce = l( () => ({
        status: p.get(),
        loadedAt: v.get(),
        isLoading: g.get(),
        isTransitioning: _.get(),
        matches: k.get(),
        location: x.get(),
        resolvedLocation: R.get(),
        statusCode: M.get(),
        redirect: E.get()
    }))
      , se = vs(64);
    function _e(K) {
        let oe = se.get(K);
        return oe || (oe = l( () => {
            const ze = C.get();
            for (const Ne of ze) {
                const O = d.get(Ne);
                if (O && O.routeId === K)
                    return O.get()
            }
        }
        ),
        se.set(K, oe)),
        oe
    }
    const je = {
        status: p,
        loadedAt: v,
        isLoading: g,
        isTransitioning: _,
        location: x,
        resolvedLocation: R,
        statusCode: M,
        redirect: E,
        matchesId: C,
        pendingIds: H,
        cachedIds: Z,
        matches: k,
        pendingMatches: I,
        cachedMatches: J,
        firstId: Q,
        hasPending: G,
        matchRouteDeps: $,
        matchStores: d,
        pendingMatchStores: h,
        cachedMatchStores: y,
        __store: ce,
        getRouteMatchStore: _e,
        setMatches: Ie,
        setPending: Qe,
        setCached: U
    };
    Ie(n.matches),
    f?.(je);
    function Ie(K) {
        $c(K, d, C, r, u)
    }
    function Qe(K) {
        $c(K, h, H, r, u)
    }
    function U(K) {
        $c(K, y, Z, r, u)
    }
    return je
}
function Ic(n, a) {
    const r = [];
    for (const l of a) {
        const u = n.get(l);
        u && r.push(u.get())
    }
    return r
}
function $c(n, a, r, l, u) {
    const f = n.map(h => h.id)
      , d = new Set(f);
    u( () => {
        for (const h of a.keys())
            d.has(h) || a.delete(h);
        for (const h of n) {
            const y = a.get(h.id);
            if (!y) {
                const p = l(h);
                p.routeId = h.routeId,
                a.set(h.id, p);
                continue
            }
            y.routeId = h.routeId,
            y.get() !== h && y.set(h)
        }
        TS(r.get(), f) || r.set(f)
    }
    )
}
var hf = n => {
    if (!n.rendered)
        return n.rendered = !0,
        n.onReady?.()
}
  , a_ = n => n.stores.matchesId.get().some(a => n.stores.matchStores.get(a)?.get()._forcePending)
  , gu = (n, a) => !!(n.preload && !n.router.stores.matchStores.has(a))
  , ai = (n, a, r=!0) => {
    const l = {
        ...n.router.options.context ?? {}
    }
      , u = r ? a : a - 1;
    for (let f = 0; f <= u; f++) {
        const d = n.matches[f];
        if (!d)
            continue;
        const h = n.router.getMatch(d.id);
        h && Object.assign(l, h.__routeContext, h.__beforeLoadContext)
    }
    return l
}
  , sy = (n, a) => {
    if (!n.matches.length)
        return;
    const r = a.routeId
      , l = n.matches.findIndex(d => d.routeId === n.router.routeTree.id)
      , u = l >= 0 ? l : 0;
    let f = r ? n.matches.findIndex(d => d.routeId === r) : n.firstBadMatchIndex ?? n.matches.length - 1;
    f < 0 && (f = u);
    for (let d = f; d >= 0; d--) {
        const h = n.matches[d];
        if (n.router.looseRoutesById[h.routeId].options.notFoundComponent)
            return d
    }
    return r ? f : u
}
  , Ea = (n, a, r) => {
    if (!(!Dt(r) && !dt(r)))
        throw Dt(r) && r.redirectHandled && !r.options.reloadDocument || (a && (a._nonReactive.beforeLoadPromise?.resolve(),
        a._nonReactive.loaderPromise?.resolve(),
        a._nonReactive.beforeLoadPromise = void 0,
        a._nonReactive.loaderPromise = void 0,
        a._nonReactive.error = r,
        n.updateMatch(a.id, l => ({
            ...l,
            status: Dt(r) ? "redirected" : dt(r) ? "notFound" : l.status === "pending" ? "success" : l.status,
            context: ai(n, a.index),
            isFetching: !1,
            error: r
        })),
        dt(r) && !r.routeId && (r.routeId = a.routeId),
        a._nonReactive.loadPromise?.resolve()),
        Dt(r) && (n.rendered = !0,
        r.options._fromLocation = n.location,
        r.redirectHandled = !0,
        r = n.router.resolveRedirect(r))),
        r
}
  , wg = (n, a) => {
    const r = n.router.getMatch(a);
    return !!(!r || r._nonReactive.dehydrated)
}
  , ly = (n, a, r) => {
    const l = ai(n, r);
    n.updateMatch(a, u => ({
        ...u,
        context: l
    }))
}
  , os = (n, a, r, l) => {
    const {id: u, routeId: f} = n.matches[a]
      , d = n.router.looseRoutesById[f];
    if (r instanceof Promise)
        throw r;
    r.routerCode = l,
    n.firstBadMatchIndex ??= a,
    Ea(n, n.router.getMatch(u), r);
    try {
        d.options.onError?.(r)
    } catch (h) {
        r = h,
        Ea(n, n.router.getMatch(u), r)
    }
    n.updateMatch(u, h => (h._nonReactive.beforeLoadPromise?.resolve(),
    h._nonReactive.beforeLoadPromise = void 0,
    h._nonReactive.loadPromise?.resolve(),
    {
        ...h,
        error: r,
        status: "error",
        isFetching: !1,
        updatedAt: Date.now(),
        abortController: new AbortController
    })),
    !n.preload && !Dt(r) && !dt(r) && (n.serialError ??= r)
}
  , Rg = (n, a, r, l) => {
    if (l._nonReactive.pendingTimeout !== void 0)
        return;
    const u = r.options.pendingMs ?? n.router.options.defaultPendingMs;
    if (n.onReady && !gu(n, a) && (r.options.loader || r.options.beforeLoad || Ag(r)) && typeof u == "number" && u !== 1 / 0 && (r.options.pendingComponent ?? n.router.options?.defaultPendingComponent)) {
        const f = setTimeout( () => {
            hf(n)
        }
        , u);
        l._nonReactive.pendingTimeout = f
    }
}
  , i_ = (n, a, r) => {
    const l = n.router.getMatch(a);
    if (!l._nonReactive.beforeLoadPromise && !l._nonReactive.loaderPromise)
        return;
    Rg(n, a, r, l);
    const u = () => {
        const f = n.router.getMatch(a);
        f.preload && (f.status === "redirected" || f.status === "notFound") && Ea(n, f, f.error)
    }
    ;
    return l._nonReactive.beforeLoadPromise ? l._nonReactive.beforeLoadPromise.then(u) : u()
}
  , r_ = (n, a, r, l) => {
    const u = n.router.getMatch(a);
    let f = u._nonReactive.loadPromise;
    u._nonReactive.loadPromise = ii( () => {
        f?.resolve(),
        f = void 0
    }
    );
    const {paramsError: d, searchError: h} = u;
    d && os(n, r, d, "PARSE_PARAMS"),
    h && os(n, r, h, "VALIDATE_SEARCH"),
    Rg(n, a, l, u);
    const y = new AbortController;
    let p = !1;
    const v = () => {
        p || (p = !0,
        n.updateMatch(a, k => ({
            ...k,
            isFetching: "beforeLoad",
            fetchCount: k.fetchCount + 1,
            abortController: y
        })))
    }
      , g = () => {
        u._nonReactive.beforeLoadPromise?.resolve(),
        u._nonReactive.beforeLoadPromise = void 0,
        n.updateMatch(a, k => ({
            ...k,
            isFetching: !1
        }))
    }
    ;
    if (!l.options.beforeLoad) {
        n.router.batch( () => {
            v(),
            g()
        }
        );
        return
    }
    u._nonReactive.beforeLoadPromise = ii();
    const _ = {
        ...ai(n, r, !1),
        ...u.__routeContext
    }
      , {search: x, params: R, cause: M} = u
      , E = gu(n, a)
      , C = {
        search: x,
        abortController: y,
        params: R,
        preload: E,
        context: _,
        location: n.location,
        navigate: k => n.router.navigate({
            ...k,
            _fromLocation: n.location
        }),
        buildLocation: n.router.buildLocation,
        cause: E ? "preload" : M,
        matches: n.matches,
        routeId: l.id,
        ...n.router.options.additionalContext
    }
      , H = k => {
        if (k === void 0) {
            n.router.batch( () => {
                v(),
                g()
            }
            );
            return
        }
        (Dt(k) || dt(k)) && (v(),
        os(n, r, k, "BEFORE_LOAD")),
        n.router.batch( () => {
            v(),
            n.updateMatch(a, I => ({
                ...I,
                __beforeLoadContext: k
            })),
            g()
        }
        )
    }
    ;
    let Z;
    try {
        if (Z = l.options.beforeLoad(C),
        gs(Z))
            return v(),
            Z.catch(k => {
                os(n, r, k, "BEFORE_LOAD")
            }
            ).then(H)
    } catch (k) {
        v(),
        os(n, r, k, "BEFORE_LOAD")
    }
    H(Z)
}
  , s_ = (n, a) => {
    const {id: r, routeId: l} = n.matches[a]
      , u = n.router.looseRoutesById[l]
      , f = () => h()
      , d = () => r_(n, r, a, u)
      , h = () => {
        if (wg(n, r))
            return;
        const y = i_(n, r, u);
        return gs(y) ? y.then(d) : d()
    }
    ;
    return f()
}
  , l_ = (n, a, r) => {
    const l = n.router.getMatch(a);
    if (!l || !r.options.head && !r.options.scripts && !r.options.headers)
        return;
    const u = {
        ssr: n.router.options.ssr,
        matches: n.matches,
        match: l,
        params: l.params,
        loaderData: l.loaderData
    };
    return Promise.all([r.options.head?.(u), r.options.scripts?.(u), r.options.headers?.(u)]).then( ([f,d,h]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: h,
        scripts: d,
        styles: f?.styles
    }))
}
  , Tg = (n, a, r, l, u) => {
    const f = a[l - 1]
      , {params: d, loaderDeps: h, abortController: y, cause: p} = n.router.getMatch(r)
      , v = ai(n, l)
      , g = gu(n, r);
    return {
        params: d,
        deps: h,
        preload: !!g,
        parentMatchPromise: f,
        abortController: y,
        context: v,
        location: n.location,
        navigate: _ => n.router.navigate({
            ..._,
            _fromLocation: n.location
        }),
        cause: g ? "preload" : p,
        route: u,
        ...n.router.options.additionalContext
    }
}
  , uy = async (n, a, r, l, u) => {
    try {
        const f = n.router.getMatch(r);
        try {
            (!(yg ?? n.router.isServer) || f.ssr === !0) && bs(u);
            const d = u.options.loader
              , h = typeof d == "function" ? d : d?.handler
              , y = h?.(Tg(n, a, r, l, u))
              , p = !!h && gs(y);
            if ((p || u._lazyPromise || u._componentsPromise || u.options.head || u.options.scripts || u.options.headers || f._nonReactive.minPendingPromise) && n.updateMatch(r, g => ({
                ...g,
                isFetching: "loader"
            })),
            h) {
                const g = p ? await y : y;
                Ea(n, n.router.getMatch(r), g),
                g !== void 0 && n.updateMatch(r, _ => ({
                    ..._,
                    loaderData: g
                }))
            }
            u._lazyPromise && await u._lazyPromise;
            const v = f._nonReactive.minPendingPromise;
            v && await v,
            u._componentsPromise && await u._componentsPromise,
            n.updateMatch(r, g => ({
                ...g,
                error: void 0,
                context: ai(n, l),
                status: "success",
                isFetching: !1,
                updatedAt: Date.now()
            }))
        } catch (d) {
            let h = d;
            if (h?.name === "AbortError") {
                if (f.abortController.signal.aborted) {
                    f._nonReactive.loaderPromise?.resolve(),
                    f._nonReactive.loaderPromise = void 0;
                    return
                }
                n.updateMatch(r, p => ({
                    ...p,
                    status: p.status === "pending" ? "success" : p.status,
                    isFetching: !1,
                    context: ai(n, l)
                }));
                return
            }
            const y = f._nonReactive.minPendingPromise;
            y && await y,
            dt(d) && await u.options.notFoundComponent?.preload?.(),
            Ea(n, n.router.getMatch(r), d);
            try {
                u.options.onError?.(d)
            } catch (p) {
                h = p,
                Ea(n, n.router.getMatch(r), p)
            }
            !Dt(h) && !dt(h) && await bs(u, ["errorComponent"]),
            n.updateMatch(r, p => ({
                ...p,
                error: h,
                context: ai(n, l),
                status: "error",
                isFetching: !1
            }))
        }
    } catch (f) {
        const d = n.router.getMatch(r);
        d && (d._nonReactive.loaderPromise = void 0),
        Ea(n, d, f)
    }
}
  , u_ = async (n, a, r) => {
    async function l(x, R, M, E, C) {
        const H = Date.now() - R.updatedAt
          , Z = x ? C.options.preloadStaleTime ?? n.router.options.defaultPreloadStaleTime ?? 3e4 : C.options.staleTime ?? n.router.options.defaultStaleTime ?? 0
          , k = C.options.shouldReload
          , I = typeof k == "function" ? k(Tg(n, a, u, r, C)) : k
          , {status: J, invalid: Q} = E
          , G = H >= Z && (!!n.forceStaleReload || E.cause === "enter" || M !== void 0 && M !== E.id);
        d = J === "success" && (Q || (I ?? G)),
        x && C.options.preload === !1 || (d && !n.sync && v ? (h = !0,
        (async () => {
            try {
                await uy(n, a, u, r, C);
                const $ = n.router.getMatch(u);
                $._nonReactive.loaderPromise?.resolve(),
                $._nonReactive.loadPromise?.resolve(),
                $._nonReactive.loaderPromise = void 0,
                $._nonReactive.loadPromise = void 0
            } catch ($) {
                Dt($) && await n.router.navigate($.options)
            }
        }
        )()) : J !== "success" || d ? await uy(n, a, u, r, C) : ly(n, u, r))
    }
    const {id: u, routeId: f} = n.matches[r];
    let d = !1
      , h = !1;
    const y = n.router.looseRoutesById[f]
      , p = y.options.loader
      , v = ((typeof p == "function" ? void 0 : p?.staleReloadMode) ?? n.router.options.defaultStaleReloadMode) !== "blocking";
    if (wg(n, u)) {
        if (!n.router.getMatch(u))
            return n.matches[r];
        ly(n, u, r)
    } else {
        const x = n.router.getMatch(u)
          , R = n.router.stores.matchesId.get()[r]
          , M = (R && n.router.stores.matchStores.get(R) || null)?.routeId === f ? R : n.router.stores.matches.get().find(C => C.routeId === f)?.id
          , E = gu(n, u);
        if (x._nonReactive.loaderPromise) {
            if (x.status === "success" && !n.sync && !x.preload && v)
                return x;
            await x._nonReactive.loaderPromise;
            const C = n.router.getMatch(u)
              , H = C._nonReactive.error || C.error;
            H && Ea(n, C, H),
            C.status === "pending" && await l(E, x, M, C, y)
        } else {
            const C = E && !n.router.stores.matchStores.has(u)
              , H = n.router.getMatch(u);
            H._nonReactive.loaderPromise = ii(),
            C !== H.preload && n.updateMatch(u, Z => ({
                ...Z,
                preload: C
            })),
            await l(E, x, M, H, y)
        }
    }
    const g = n.router.getMatch(u);
    h || (g._nonReactive.loaderPromise?.resolve(),
    g._nonReactive.loadPromise?.resolve(),
    g._nonReactive.loadPromise = void 0),
    clearTimeout(g._nonReactive.pendingTimeout),
    g._nonReactive.pendingTimeout = void 0,
    h || (g._nonReactive.loaderPromise = void 0),
    g._nonReactive.dehydrated = void 0;
    const _ = h ? g.isFetching : !1;
    return _ !== g.isFetching || g.invalid !== !1 ? (n.updateMatch(u, x => ({
        ...x,
        isFetching: _,
        invalid: !1
    })),
    n.router.getMatch(u)) : g
}
;
async function oy(n) {
    const a = n
      , r = [];
    a_(a.router) && hf(a);
    let l;
    for (let _ = 0; _ < a.matches.length; _++) {
        try {
            const x = s_(a, _);
            gs(x) && await x
        } catch (x) {
            if (Dt(x))
                throw x;
            if (dt(x))
                l = x;
            else if (!a.preload)
                throw x;
            break
        }
        if (a.serialError || a.firstBadMatchIndex != null)
            break
    }
    const u = a.firstBadMatchIndex ?? a.matches.length
      , f = l && !a.preload ? sy(a, l) : void 0
      , d = l && a.preload ? 0 : f !== void 0 ? Math.min(f + 1, u) : u;
    let h, y;
    for (let _ = 0; _ < d; _++)
        r.push(u_(a, r, _));
    try {
        await Promise.all(r)
    } catch {
        const _ = await Promise.allSettled(r);
        for (const x of _) {
            if (x.status !== "rejected")
                continue;
            const R = x.reason;
            if (Dt(R))
                throw R;
            dt(R) ? h ??= R : y ??= R
        }
        if (y !== void 0)
            throw y
    }
    const p = h ?? (l && !a.preload ? l : void 0);
    let v = a.firstBadMatchIndex !== void 0 ? a.firstBadMatchIndex : a.matches.length - 1;
    if (!p && l && a.preload)
        return a.matches;
    if (p) {
        const _ = sy(a, p);
        _ === void 0 && Nt();
        const x = a.matches[_]
          , R = a.router.looseRoutesById[x.routeId]
          , M = a.router.options?.defaultNotFoundComponent;
        !R.options.notFoundComponent && M && (R.options.notFoundComponent = M),
        p.routeId = x.routeId;
        const E = x.routeId === a.router.routeTree.id;
        a.updateMatch(x.id, C => ({
            ...C,
            ...E ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: p
            },
            isFetching: !1
        })),
        v = _,
        await bs(R, ["notFoundComponent"])
    } else if (!a.preload) {
        const _ = a.matches[0];
        _.globalNotFound || a.router.getMatch(_.id)?.globalNotFound && a.updateMatch(_.id, x => ({
            ...x,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (a.serialError && a.firstBadMatchIndex !== void 0) {
        const _ = a.router.looseRoutesById[a.matches[a.firstBadMatchIndex].routeId];
        await bs(_, ["errorComponent"])
    }
    for (let _ = 0; _ <= v; _++) {
        const {id: x, routeId: R} = a.matches[_]
          , M = a.router.looseRoutesById[R];
        try {
            const E = l_(a, x, M);
            if (E) {
                const C = await E;
                a.updateMatch(x, H => ({
                    ...H,
                    ...C
                }))
            }
        } catch (E) {
            console.error(`Error executing head for route ${R}:`, E)
        }
    }
    const g = hf(a);
    if (gs(g) && await g,
    p)
        throw p;
    if (a.serialError && !a.preload && !a.onReady)
        throw a.serialError;
    return a.matches
}
function cy(n, a) {
    const r = a.map(l => n.options[l]?.preload?.()).filter(Boolean);
    if (r.length !== 0)
        return Promise.all(r)
}
function bs(n, a=$l) {
    !n._lazyLoaded && n._lazyPromise === void 0 && (n.lazyFn ? n._lazyPromise = n.lazyFn().then(l => {
        const {id: u, ...f} = l.options;
        Object.assign(n.options, f),
        n._lazyLoaded = !0,
        n._lazyPromise = void 0
    }
    ) : n._lazyLoaded = !0);
    const r = () => n._componentsLoaded ? void 0 : a === $l ? ( () => {
        if (n._componentsPromise === void 0) {
            const l = cy(n, $l);
            l ? n._componentsPromise = l.then( () => {
                n._componentsLoaded = !0,
                n._componentsPromise = void 0
            }
            ) : n._componentsLoaded = !0
        }
        return n._componentsPromise
    }
    )() : cy(n, a);
    return n._lazyPromise ? n._lazyPromise.then(r) : r()
}
function Ag(n) {
    for (const a of $l)
        if (n.options[a]?.preload)
            return !0;
    return !1
}
var $l = ["component", "errorComponent", "pendingComponent", "notFoundComponent"]
  , Ra = "__TSR_index"
  , fy = "popstate"
  , dy = "beforeunload";
function o_(n) {
    let a = n.getLocation();
    const r = new Set
      , l = d => {
        a = n.getLocation(),
        r.forEach(h => h({
            location: a,
            action: d
        }))
    }
      , u = d => {
        n.notifyOnIndexChange ?? !0 ? l(d) : a = n.getLocation()
    }
      , f = async ({task: d, navigateOpts: h, ...y}) => {
        if (h?.ignoreBlocker ?? !1) {
            d();
            return
        }
        const p = n.getBlockers?.() ?? []
          , v = y.type === "PUSH" || y.type === "REPLACE";
        if (typeof document < "u" && p.length && v)
            for (const g of p) {
                const _ = iu(y.path, y.state);
                if (await g.blockerFn({
                    currentLocation: a,
                    nextLocation: _,
                    action: y.type
                })) {
                    n.onBlocked?.();
                    return
                }
            }
        d()
    }
    ;
    return {
        get location() {
            return a
        },
        get length() {
            return n.getLength()
        },
        subscribers: r,
        subscribe: d => (r.add(d),
        () => {
            r.delete(d)
        }
        ),
        push: (d, h, y) => {
            const p = a.state[Ra];
            h = hy(p + 1, h),
            f({
                task: () => {
                    n.pushState(d, h),
                    l({
                        type: "PUSH"
                    })
                }
                ,
                navigateOpts: y,
                type: "PUSH",
                path: d,
                state: h
            })
        }
        ,
        replace: (d, h, y) => {
            const p = a.state[Ra];
            h = hy(p, h),
            f({
                task: () => {
                    n.replaceState(d, h),
                    l({
                        type: "REPLACE"
                    })
                }
                ,
                navigateOpts: y,
                type: "REPLACE",
                path: d,
                state: h
            })
        }
        ,
        go: (d, h) => {
            f({
                task: () => {
                    n.go(d),
                    u({
                        type: "GO",
                        index: d
                    })
                }
                ,
                navigateOpts: h,
                type: "GO"
            })
        }
        ,
        back: d => {
            f({
                task: () => {
                    n.back(d?.ignoreBlocker ?? !1),
                    u({
                        type: "BACK"
                    })
                }
                ,
                navigateOpts: d,
                type: "BACK"
            })
        }
        ,
        forward: d => {
            f({
                task: () => {
                    n.forward(d?.ignoreBlocker ?? !1),
                    u({
                        type: "FORWARD"
                    })
                }
                ,
                navigateOpts: d,
                type: "FORWARD"
            })
        }
        ,
        canGoBack: () => a.state[Ra] !== 0,
        createHref: d => n.createHref(d),
        block: d => {
            if (!n.setBlockers)
                return () => {}
                ;
            const h = n.getBlockers?.() ?? [];
            return n.setBlockers([...h, d]),
            () => {
                const y = n.getBlockers?.() ?? [];
                n.setBlockers?.(y.filter(p => p !== d))
            }
        }
        ,
        flush: () => n.flush?.(),
        destroy: () => n.destroy?.(),
        notify: l
    }
}
function hy(n, a) {
    a || (a = {});
    const r = zf();
    return {
        ...a,
        key: r,
        __TSR_key: r,
        [Ra]: n
    }
}
function c_(n) {
    const a = typeof document < "u" ? window : void 0
      , r = a.history.pushState
      , l = a.history.replaceState;
    let u = [];
    const f = () => u
      , d = G => u = G
      , h = (G => G)
      , y = ( () => iu(`${a.location.pathname}${a.location.search}${a.location.hash}`, a.history.state));
    if (!a.history.state?.__TSR_key && !a.history.state?.key) {
        const G = zf();
        a.history.replaceState({
            [Ra]: 0,
            key: G,
            __TSR_key: G
        }, "")
    }
    let p = y(), v, g = !1, _ = !1, x = !1, R = !1;
    const M = () => p;
    let E, C;
    const H = () => {
        E && (Q._ignoreSubscribers = !0,
        (E.isPush ? a.history.pushState : a.history.replaceState)(E.state, "", E.href),
        Q._ignoreSubscribers = !1,
        E = void 0,
        C = void 0,
        v = void 0)
    }
      , Z = (G, $, ce) => {
        const se = h($);
        C || (v = p),
        p = iu($, ce),
        E = {
            href: se,
            state: ce,
            isPush: E?.isPush || G === "push"
        },
        C || (C = Promise.resolve().then( () => H()))
    }
      , k = G => {
        p = y(),
        Q.notify({
            type: G
        })
    }
      , I = async () => {
        if (_) {
            _ = !1;
            return
        }
        const G = y()
          , $ = G.state[Ra] - p.state[Ra]
          , ce = $ === 1
          , se = $ === -1
          , _e = !ce && !se || g;
        g = !1;
        const je = _e ? "GO" : se ? "BACK" : "FORWARD"
          , Ie = _e ? {
            type: "GO",
            index: $
        } : {
            type: se ? "BACK" : "FORWARD"
        };
        if (x)
            x = !1;
        else {
            const Qe = f();
            if (typeof document < "u" && Qe.length) {
                for (const U of Qe)
                    if (await U.blockerFn({
                        currentLocation: p,
                        nextLocation: G,
                        action: je
                    })) {
                        _ = !0,
                        a.history.go(1),
                        Q.notify(Ie);
                        return
                    }
            }
        }
        p = y(),
        Q.notify(Ie)
    }
      , J = G => {
        if (R) {
            R = !1;
            return
        }
        let $ = !1;
        const ce = f();
        if (typeof document < "u" && ce.length)
            for (const se of ce) {
                const _e = se.enableBeforeUnload ?? !0;
                if (_e === !0) {
                    $ = !0;
                    break
                }
                if (typeof _e == "function" && _e() === !0) {
                    $ = !0;
                    break
                }
            }
        if ($)
            return G.preventDefault(),
            G.returnValue = ""
    }
      , Q = o_({
        getLocation: M,
        getLength: () => a.history.length,
        pushState: (G, $) => Z("push", G, $),
        replaceState: (G, $) => Z("replace", G, $),
        back: G => (G && (x = !0),
        R = !0,
        a.history.back()),
        forward: G => {
            G && (x = !0),
            R = !0,
            a.history.forward()
        }
        ,
        go: G => {
            g = !0,
            a.history.go(G)
        }
        ,
        createHref: G => h(G),
        flush: H,
        destroy: () => {
            a.history.pushState = r,
            a.history.replaceState = l,
            a.removeEventListener(dy, J, {
                capture: !0
            }),
            a.removeEventListener(fy, I)
        }
        ,
        onBlocked: () => {
            v && p !== v && (p = v)
        }
        ,
        getBlockers: f,
        setBlockers: d,
        notifyOnIndexChange: !1
    });
    return a.addEventListener(dy, J, {
        capture: !0
    }),
    a.addEventListener(fy, I),
    a.history.pushState = function(...G) {
        const $ = r.apply(a.history, G);
        return Q._ignoreSubscribers || k("PUSH"),
        $
    }
    ,
    a.history.replaceState = function(...G) {
        const $ = l.apply(a.history, G);
        return Q._ignoreSubscribers || k("REPLACE"),
        $
    }
    ,
    Q
}
function f_(n) {
    let a = n.replace(/[\x00-\x1f\x7f]/g, "");
    return a.startsWith("//") && (a = "/" + a.replace(/^\/+/, "")),
    a
}
function iu(n, a) {
    const r = f_(n)
      , l = r.indexOf("#")
      , u = r.indexOf("?")
      , f = zf();
    return {
        href: r,
        pathname: r.substring(0, l > 0 ? u > 0 ? Math.min(l, u) : l : u > 0 ? u : r.length),
        hash: l > -1 ? r.substring(l) : "",
        search: u > -1 ? r.slice(u, l === -1 ? void 0 : l) : "",
        state: a || {
            [Ra]: 0,
            key: f,
            __TSR_key: f
        }
    }
}
function zf() {
    return (Math.random() + 1).toString(36).substring(7)
}
function d_(n) {
    return n instanceof Error ? {
        name: n.name,
        message: n.message
    } : {
        data: n
    }
}
function tr(n, a) {
    const r = a
      , l = n;
    return {
        fromLocation: r,
        toLocation: l,
        pathChanged: r?.pathname !== l.pathname,
        hrefChanged: r?.href !== l.href,
        hashChanged: r?.hash !== l.hash
    }
}
var h_ = class {
    constructor(n, a) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this.resetNextScroll = !0,
        this.shouldViewTransition = void 0,
        this.isViewTransitionTypesSupported = void 0,
        this.subscribers = new Set,
        this.isScrollRestoring = !1,
        this.isScrollRestorationSetup = !1,
        this.startTransition = r => r(),
        this.update = r => {
            const l = this.options
              , u = this.basepath ?? l?.basepath ?? "/"
              , f = this.basepath === void 0
              , d = l?.rewrite;
            if (this.options = {
                ...l,
                ...r
            },
            this.isServer = this.options.isServer ?? typeof document > "u",
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = qS(this.options.pathParamsAllowedCharacters)),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = c_()),
            this.origin = this.options.origin,
            this.origin || (window?.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let v;
                this.resolvePathCache = vs(1e3),
                v = this.buildRouteTree(),
                this.setRoutes(v)
            }
            if (!this.stores && this.latestLocation) {
                const v = this.getStoreConfig(this);
                this.batch = v.batch,
                this.stores = n_(p_(this.latestLocation), v),
                PS(this)
            }
            let h = !1;
            const y = this.options.basepath ?? "/"
              , p = this.options.rewrite;
            if (f || u !== y || d !== p) {
                this.basepath = y;
                const v = []
                  , g = Sg(y);
                g && g !== "/" && v.push(t_({
                    basepath: y
                })),
                p && v.push(p),
                this.rewrite = v.length === 0 ? void 0 : v.length === 1 ? v[0] : e_(v),
                this.history && this.updateLatestLocation(),
                h = !0
            }
            h && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" && "CSS"in window && typeof window.CSS?.supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            const r = NS(this.routeTree, this.options.caseSensitive, (l, u) => {
                l.init({
                    originalIndex: u
                })
            }
            );
            return this.options.routeMasks && OS(this.options.routeMasks, r.processedTree),
            r
        }
        ,
        this.subscribe = (r, l) => {
            const u = {
                eventType: r,
                fn: l
            };
            return this.subscribers.add(u),
            () => {
                this.subscribers.delete(u)
            }
        }
        ,
        this.emit = r => {
            this.subscribers.forEach(l => {
                l.eventType === r.type && l.fn(r)
            }
            )
        }
        ,
        this.parseLocation = (r, l) => {
            const u = ({pathname: y, search: p, hash: v, href: g, state: _}) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(y)) {
                    const C = this.options.parseSearch(p)
                      , H = this.options.stringifySearch(C);
                    return {
                        href: y + H + v,
                        publicHref: y + H + v,
                        pathname: ls(y).path,
                        external: !1,
                        searchStr: H,
                        search: $a(l?.search, C),
                        hash: ls(v.slice(1)).path,
                        state: Wa(l?.state, _)
                    }
                }
                const x = new URL(g,this.origin)
                  , R = df(this.rewrite, x)
                  , M = this.options.parseSearch(R.search)
                  , E = this.options.stringifySearch(M);
                return R.search = E,
                {
                    href: R.href.replace(R.origin, ""),
                    publicHref: g,
                    pathname: ls(R.pathname).path,
                    external: !!this.rewrite && R.origin !== this.origin,
                    searchStr: E,
                    search: $a(l?.search, M),
                    hash: ls(R.hash.slice(1)).path,
                    state: Wa(l?.state, _)
                }
            }
              , f = u(r)
              , {__tempLocation: d, __tempKey: h} = f.state;
            if (d && (!h || h === this.tempLocationKey)) {
                const y = u(d);
                return y.state.key = f.state.key,
                y.state.__TSR_key = f.state.__TSR_key,
                delete y.state.__tempLocation,
                {
                    ...y,
                    maskedLocation: f
                }
            }
            return f
        }
        ,
        this.resolvePathWithBase = (r, l) => HS({
            base: r,
            to: Mf(l),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache
        }),
        this.matchRoutes = (r, l, u) => typeof r == "string" ? this.matchRoutesInternal({
            pathname: r,
            search: l
        }, u) : this.matchRoutesInternal(r, l),
        this.getMatchedRoutes = r => y_({
            pathname: r,
            routesById: this.routesById,
            processedTree: this.processedTree
        }),
        this.cancelMatch = r => {
            const l = this.getMatch(r);
            l && (l.abortController.abort(),
            clearTimeout(l._nonReactive.pendingTimeout),
            l._nonReactive.pendingTimeout = void 0)
        }
        ,
        this.cancelMatches = () => {
            this.stores.pendingIds.get().forEach(r => {
                this.cancelMatch(r)
            }
            ),
            this.stores.matchesId.get().forEach(r => {
                if (this.stores.pendingMatchStores.has(r))
                    return;
                const l = this.stores.matchStores.get(r)?.get();
                l && (l.status === "pending" || l.isFetching === "loader") && this.cancelMatch(r)
            }
            )
        }
        ,
        this.buildLocation = r => {
            const l = (f={}) => {
                const d = f._fromLocation || this.pendingBuiltLocation || this.latestLocation
                  , h = this.matchRoutesLightweight(d);
                f.from;
                const y = f.unsafeRelative === "path" ? d.pathname : f.from ?? h.fullPath
                  , p = this.resolvePathWithBase(y, ".")
                  , v = h.search
                  , g = Object.assign(Object.create(null), h.params)
                  , _ = f.to ? this.resolvePathWithBase(p, `${f.to}`) : this.resolvePathWithBase(p, ".")
                  , x = f.params === !1 || f.params === null ? Object.create(null) : (f.params ?? !0) === !0 ? g : Object.assign(g, _a(f.params, g))
                  , R = this.getMatchedRoutes(_);
                let M = R.matchedRoutes;
                if ((!R.foundRoute || R.foundRoute.path !== "/" && R.routeParams["**"]) && this.options.notFoundRoute && (M = [...M, this.options.notFoundRoute]),
                Object.keys(x).length > 0)
                    for (const ce of M) {
                        const se = ce.options.params?.stringify ?? ce.options.stringifyParams;
                        if (se)
                            try {
                                Object.assign(x, se(x))
                            } catch {}
                    }
                const E = r.leaveParams ? _ : ls(ny({
                    path: _,
                    params: x,
                    decoder: this.pathParamsDecoder,
                    server: this.isServer
                }).interpolatedPath).path;
                let C = v;
                if (r._includeValidateSearch && this.options.search?.strict) {
                    const ce = {};
                    M.forEach(se => {
                        if (se.options.validateSearch)
                            try {
                                Object.assign(ce, Wl(se.options.validateSearch, {
                                    ...ce,
                                    ...C
                                }))
                            } catch {}
                    }
                    ),
                    C = ce
                }
                C = g_({
                    search: C,
                    dest: f,
                    destRoutes: M,
                    _includeValidateSearch: r._includeValidateSearch
                }),
                C = $a(v, C);
                const H = this.options.stringifySearch(C)
                  , Z = f.hash === !0 ? d.hash : f.hash ? _a(f.hash, d.hash) : void 0
                  , k = Z ? `#${Z}` : "";
                let I = f.state === !0 ? d.state : f.state ? _a(f.state, d.state) : {};
                I = Wa(d.state, I);
                const J = `${E}${H}${k}`;
                let Q, G, $ = !1;
                if (this.rewrite) {
                    const ce = new URL(J,this.origin)
                      , se = Eg(this.rewrite, ce);
                    Q = ce.href.replace(ce.origin, ""),
                    se.origin !== this.origin ? (G = se.href,
                    $ = !0) : G = se.pathname + se.search + se.hash
                } else
                    Q = RS(J),
                    G = Q;
                return {
                    publicHref: G,
                    href: Q,
                    pathname: E,
                    search: C,
                    searchStr: H,
                    state: I,
                    hash: Z ?? "",
                    external: $,
                    unmaskOnReload: f.unmaskOnReload
                }
            }
              , u = (f={}, d) => {
                const h = l(f);
                let y = d ? l(d) : void 0;
                if (!y) {
                    const p = Object.create(null);
                    if (this.options.routeMasks) {
                        const v = CS(h.pathname, this.processedTree);
                        if (v) {
                            Object.assign(p, v.rawParams);
                            const {from: g, params: _, ...x} = v.route
                              , R = _ === !1 || _ === null ? Object.create(null) : (_ ?? !0) === !0 ? p : Object.assign(p, _a(_, p));
                            d = {
                                from: r.from,
                                ...x,
                                params: R
                            },
                            y = l(d)
                        }
                    }
                }
                return y && (h.maskedLocation = y),
                h
            }
            ;
            return r.mask ? u(r, {
                from: r.from,
                ...r.mask
            }) : u(r)
        }
        ,
        this.commitLocation = async ({viewTransition: r, ignoreBlocker: l, ...u}) => {
            const f = () => {
                const y = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                y.forEach(v => {
                    u.state[v] = this.latestLocation.state[v]
                }
                );
                const p = zt(u.state, this.latestLocation.state);
                return y.forEach(v => {
                    delete u.state[v]
                }
                ),
                p
            }
              , d = wa(this.latestLocation.href) === wa(u.href);
            let h = this.commitLocationPromise;
            if (this.commitLocationPromise = ii( () => {
                h?.resolve(),
                h = void 0
            }
            ),
            d && f())
                this.load();
            else {
                let {maskedLocation: y, hashScrollIntoView: p, ...v} = u;
                y && (v = {
                    ...y,
                    state: {
                        ...y.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...v,
                            search: v.searchStr,
                            state: {
                                ...v.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (v.state.__tempKey = this.tempLocationKey)),
                v.state.__hashScrollIntoViewOptions = p ?? this.options.defaultHashScrollIntoView ?? !0,
                this.shouldViewTransition = r,
                this.history[u.replace ? "replace" : "push"](v.publicHref, v.state, {
                    ignoreBlocker: l
                })
            }
            return this.resetNextScroll = u.resetScroll ?? !0,
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: r, resetScroll: l, hashScrollIntoView: u, viewTransition: f, ignoreBlocker: d, href: h, ...y}={}) => {
            if (h) {
                const g = this.history.location.state.__TSR_index
                  , _ = iu(h, {
                    __TSR_index: r ? g : g + 1
                })
                  , x = new URL(_.pathname,this.origin);
                y.to = df(this.rewrite, x).pathname,
                y.search = this.options.parseSearch(_.search),
                y.hash = _.hash.slice(1)
            }
            const p = this.buildLocation({
                ...y,
                _includeValidateSearch: !0
            });
            this.pendingBuiltLocation = p;
            const v = this.commitLocation({
                ...p,
                viewTransition: f,
                replace: r,
                resetScroll: l,
                hashScrollIntoView: u,
                ignoreBlocker: d
            });
            return Promise.resolve().then( () => {
                this.pendingBuiltLocation === p && (this.pendingBuiltLocation = void 0)
            }
            ),
            v
        }
        ,
        this.navigate = async ({to: r, reloadDocument: l, href: u, publicHref: f, ...d}) => {
            let h = !1;
            if (u)
                try {
                    new URL(`${u}`),
                    h = !0
                } catch {}
            if (h && !l && (l = !0),
            l) {
                if (r !== void 0 || !u) {
                    const p = this.buildLocation({
                        to: r,
                        ...d
                    });
                    u = u ?? p.publicHref,
                    f = f ?? p.publicHref
                }
                const y = !h && f ? f : u;
                if (nu(y, this.protocolAllowlist))
                    return Promise.resolve();
                if (!d.ignoreBlocker) {
                    const p = this.history.getBlockers?.() ?? [];
                    for (const v of p)
                        if (v?.blockerFn && await v.blockerFn({
                            currentLocation: this.latestLocation,
                            nextLocation: this.latestLocation,
                            action: "PUSH"
                        }))
                            return Promise.resolve()
                }
                return d.replace ? window.location.replace(y) : window.location.href = y,
                Promise.resolve()
            }
            return this.buildAndCommitLocation({
                ...d,
                href: u,
                to: r,
                _isNavigate: !0
            })
        }
        ,
        this.beforeLoad = () => {
            this.cancelMatches(),
            this.updateLatestLocation();
            const r = this.matchRoutes(this.latestLocation)
              , l = this.stores.cachedMatches.get().filter(u => !r.some(f => f.id === u.id));
            this.batch( () => {
                this.stores.status.set("pending"),
                this.stores.statusCode.set(200),
                this.stores.isLoading.set(!0),
                this.stores.location.set(this.latestLocation),
                this.stores.setPending(r),
                this.stores.setCached(l)
            }
            )
        }
        ,
        this.load = async r => {
            let l, u, f;
            const d = this.stores.resolvedLocation.get() ?? this.stores.location.get();
            for (f = new Promise(y => {
                this.startTransition(async () => {
                    try {
                        this.beforeLoad();
                        const p = this.latestLocation
                          , v = tr(p, this.stores.resolvedLocation.get());
                        this.stores.redirect.get() || this.emit({
                            type: "onBeforeNavigate",
                            ...v
                        }),
                        this.emit({
                            type: "onBeforeLoad",
                            ...v
                        }),
                        await oy({
                            router: this,
                            sync: r?.sync,
                            forceStaleReload: d.href === p.href,
                            matches: this.stores.pendingMatches.get(),
                            location: p,
                            updateMatch: this.updateMatch,
                            onReady: async () => {
                                this.startTransition( () => {
                                    this.startViewTransition(async () => {
                                        let g = null
                                          , _ = null
                                          , x = null
                                          , R = null;
                                        this.batch( () => {
                                            const M = this.stores.pendingMatches.get()
                                              , E = M.length
                                              , C = this.stores.matches.get();
                                            g = E ? C.filter(k => !this.stores.pendingMatchStores.has(k.id)) : null;
                                            const H = new Set;
                                            for (const k of this.stores.pendingMatchStores.values())
                                                k.routeId && H.add(k.routeId);
                                            const Z = new Set;
                                            for (const k of this.stores.matchStores.values())
                                                k.routeId && Z.add(k.routeId);
                                            _ = E ? C.filter(k => !H.has(k.routeId)) : null,
                                            x = E ? M.filter(k => !Z.has(k.routeId)) : null,
                                            R = E ? M.filter(k => Z.has(k.routeId)) : C,
                                            this.stores.isLoading.set(!1),
                                            this.stores.loadedAt.set(Date.now()),
                                            E && (this.stores.setMatches(M),
                                            this.stores.setPending([]),
                                            this.stores.setCached([...this.stores.cachedMatches.get(), ...g.filter(k => k.status !== "error" && k.status !== "notFound" && k.status !== "redirected")]),
                                            this.clearExpiredCache())
                                        }
                                        );
                                        for (const [M,E] of [[_, "onLeave"], [x, "onEnter"], [R, "onStay"]])
                                            if (M)
                                                for (const C of M)
                                                    this.looseRoutesById[C.routeId].options[E]?.(C)
                                    }
                                    )
                                }
                                )
                            }
                        })
                    } catch (p) {
                        Dt(p) ? (l = p,
                        this.navigate({
                            ...l.options,
                            replace: !0,
                            ignoreBlocker: !0
                        })) : dt(p) && (u = p);
                        const v = l ? l.status : u ? 404 : this.stores.matches.get().some(g => g.status === "error") ? 500 : 200;
                        this.batch( () => {
                            this.stores.statusCode.set(v),
                            this.stores.redirect.set(l)
                        }
                        )
                    }
                    this.latestLoadPromise === f && (this.commitLocationPromise?.resolve(),
                    this.latestLoadPromise = void 0,
                    this.commitLocationPromise = void 0),
                    y()
                }
                )
            }
            ),
            this.latestLoadPromise = f,
            await f; this.latestLoadPromise && f !== this.latestLoadPromise; )
                await this.latestLoadPromise;
            let h;
            this.hasNotFoundMatch() ? h = 404 : this.stores.matches.get().some(y => y.status === "error") && (h = 500),
            h !== void 0 && this.stores.statusCode.set(h)
        }
        ,
        this.startViewTransition = r => {
            const l = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            l && typeof document < "u" && "startViewTransition"in document && typeof document.startViewTransition == "function") {
                let u;
                if (typeof l == "object" && this.isViewTransitionTypesSupported) {
                    const f = this.latestLocation
                      , d = this.stores.resolvedLocation.get()
                      , h = typeof l.types == "function" ? l.types(tr(f, d)) : l.types;
                    if (h === !1) {
                        r();
                        return
                    }
                    u = {
                        update: r,
                        types: h
                    }
                } else
                    u = r;
                document.startViewTransition(u)
            } else
                r()
        }
        ,
        this.updateMatch = (r, l) => {
            this.startTransition( () => {
                const u = this.stores.pendingMatchStores.get(r);
                if (u) {
                    u.set(l);
                    return
                }
                const f = this.stores.matchStores.get(r);
                if (f) {
                    f.set(l);
                    return
                }
                const d = this.stores.cachedMatchStores.get(r);
                if (d) {
                    const h = l(d.get());
                    h.status === "redirected" ? this.stores.cachedMatchStores.delete(r) && this.stores.cachedIds.set(y => y.filter(p => p !== r)) : d.set(h)
                }
            }
            )
        }
        ,
        this.getMatch = r => this.stores.cachedMatchStores.get(r)?.get() ?? this.stores.pendingMatchStores.get(r)?.get() ?? this.stores.matchStores.get(r)?.get(),
        this.invalidate = r => {
            const l = u => r?.filter?.(u) ?? !0 ? {
                ...u,
                invalid: !0,
                ...r?.forcePending || u.status === "error" || u.status === "notFound" ? {
                    status: "pending",
                    error: void 0
                } : void 0
            } : u;
            return this.batch( () => {
                this.stores.setMatches(this.stores.matches.get().map(l)),
                this.stores.setCached(this.stores.cachedMatches.get().map(l)),
                this.stores.setPending(this.stores.pendingMatches.get().map(l))
            }
            ),
            this.shouldViewTransition = !1,
            this.load({
                sync: r?.sync
            })
        }
        ,
        this.getParsedLocationHref = r => r.publicHref || "/",
        this.resolveRedirect = r => {
            const l = r.headers.get("Location");
            if (!r.options.href || r.options._builtLocation) {
                const u = r.options._builtLocation ?? this.buildLocation(r.options)
                  , f = this.getParsedLocationHref(u);
                r.options.href = f,
                r.headers.set("Location", f)
            } else if (l)
                try {
                    const u = new URL(l);
                    if (this.origin && u.origin === this.origin) {
                        const f = u.pathname + u.search + u.hash;
                        r.options.href = f,
                        r.headers.set("Location", f)
                    }
                } catch {}
            if (r.options.href && !r.options._builtLocation && nu(r.options.href, this.protocolAllowlist))
                throw new Error("Redirect blocked: unsafe protocol");
            return r.headers.get("Location") || r.headers.set("Location", r.options.href),
            r
        }
        ,
        this.clearCache = r => {
            const l = r?.filter;
            l !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(u => !l(u))) : this.stores.setCached([])
        }
        ,
        this.clearExpiredCache = () => {
            const r = Date.now()
              , l = u => {
                const f = this.looseRoutesById[u.routeId];
                if (!f.options.loader)
                    return !0;
                const d = (u.preload ? f.options.preloadGcTime ?? this.options.defaultPreloadGcTime : f.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
                return u.status === "error" ? !0 : r - u.updatedAt >= d
            }
            ;
            this.clearCache({
                filter: l
            })
        }
        ,
        this.loadRouteChunk = bs,
        this.preloadRoute = async r => {
            const l = r._builtLocation ?? this.buildLocation(r);
            let u = this.matchRoutes(l, {
                throwOnError: !0,
                preload: !0,
                dest: r
            });
            const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()])
              , d = new Set([...f, ...this.stores.cachedIds.get()])
              , h = u.filter(y => !d.has(y.id));
            if (h.length) {
                const y = this.stores.cachedMatches.get();
                this.stores.setCached([...y, ...h])
            }
            try {
                return u = await oy({
                    router: this,
                    matches: u,
                    location: l,
                    preload: !0,
                    updateMatch: (y, p) => {
                        f.has(y) ? u = u.map(v => v.id === y ? p(v) : v) : this.updateMatch(y, p)
                    }
                }),
                u
            } catch (y) {
                if (Dt(y))
                    return y.options.reloadDocument ? void 0 : await this.preloadRoute({
                        ...y.options,
                        _fromLocation: l
                    });
                dt(y) || console.error(y);
                return
            }
        }
        ,
        this.matchRoute = (r, l) => {
            const u = {
                ...r,
                to: r.to ? this.resolvePathWithBase(r.from || "", r.to) : void 0,
                params: r.params || {},
                leaveParams: !0
            }
              , f = this.buildLocation(u);
            if (l?.pending && this.stores.status.get() !== "pending")
                return !1;
            const d = (l?.pending === void 0 ? !this.stores.isLoading.get() : l.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , h = MS(f.pathname, l?.caseSensitive ?? !1, l?.fuzzy ?? !1, d.pathname, this.processedTree);
            return !h || r.params && !zt(h.rawParams, r.params, {
                partial: !0
            }) ? !1 : l?.includeSearch ?? !0 ? zt(d.search, f.search, {
                partial: !0
            }) ? h.rawParams : !1 : h.rawParams
        }
        ,
        this.hasNotFoundMatch = () => this.stores.matches.get().some(r => r.status === "notFound" || r.globalNotFound),
        this.getStoreConfig = a,
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...n,
            caseSensitive: n.caseSensitive ?? !1,
            notFoundMode: n.notFoundMode ?? "fuzzy",
            stringifySearch: n.stringifySearch ?? JS,
            parseSearch: n.parseSearch ?? FS,
            protocolAllowlist: n.protocolAllowlist ?? _S
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this)
    }
    isShell() {
        return !!this.options.isShell
    }
    isPrerendering() {
        return !!this.options.isPrerendering
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes({routesById: n, routesByPath: a, processedTree: r}) {
        this.routesById = n,
        this.routesByPath = a,
        this.processedTree = r;
        const l = this.options.notFoundRoute;
        l && (l.init({
            originalIndex: 99999999999
        }),
        this.routesById[l.id] = l)
    }
    get looseRoutesById() {
        return this.routesById
    }
    getParentContext(n) {
        return n?.id ? n.context ?? this.options.context ?? void 0 : this.options.context ?? void 0
    }
    matchRoutesInternal(n, a) {
        const r = this.getMatchedRoutes(n.pathname)
          , {foundRoute: l, routeParams: u, parsedParams: f} = r;
        let {matchedRoutes: d} = r
          , h = !1;
        (l ? l.path !== "/" && u["**"] : wa(n.pathname)) && (this.options.notFoundRoute ? d = [...d, this.options.notFoundRoute] : h = !0);
        const y = h ? b_(this.options.notFoundMode, d) : void 0
          , p = new Array(d.length)
          , v = new Map;
        for (const g of this.stores.matchStores.values())
            g.routeId && v.set(g.routeId, g.get());
        for (let g = 0; g < d.length; g++) {
            const _ = d[g]
              , x = p[g - 1];
            let R, M, E;
            {
                const je = x?.search ?? n.search
                  , Ie = x?._strictSearch ?? void 0;
                try {
                    const Qe = Wl(_.options.validateSearch, {
                        ...je
                    }) ?? void 0;
                    R = {
                        ...je,
                        ...Qe
                    },
                    M = {
                        ...Ie,
                        ...Qe
                    },
                    E = void 0
                } catch (Qe) {
                    let U = Qe;
                    if (Qe instanceof ru || (U = new ru(Qe.message,{
                        cause: Qe
                    })),
                    a?.throwOnError)
                        throw U;
                    R = je,
                    M = {},
                    E = U
                }
            }
            const C = _.options.loaderDeps?.({
                search: R
            }) ?? ""
              , H = C ? JSON.stringify(C) : ""
              , {interpolatedPath: Z, usedParams: k} = ny({
                path: _.fullPath,
                params: u,
                decoder: this.pathParamsDecoder,
                server: this.isServer
            })
              , I = _.id + Z + H
              , J = this.getMatch(I)
              , Q = v.get(_.id)
              , G = J?._strictParams ?? k;
            let $;
            if (!J)
                try {
                    my(_, k, f, G)
                } catch (je) {
                    if (dt(je) || Dt(je) ? $ = je : $ = new m_(je.message,{
                        cause: je
                    }),
                    a?.throwOnError)
                        throw $
                }
            Object.assign(u, G);
            const ce = Q ? "stay" : "enter";
            let se;
            if (J)
                se = {
                    ...J,
                    cause: ce,
                    params: Q?.params ?? u,
                    _strictParams: G,
                    search: $a(Q ? Q.search : J.search, R),
                    _strictSearch: M
                };
            else {
                const je = _.options.loader || _.options.beforeLoad || _.lazyFn || Ag(_) ? "pending" : "success";
                se = {
                    id: I,
                    ssr: _.options.ssr,
                    index: g,
                    routeId: _.id,
                    params: Q?.params ?? u,
                    _strictParams: G,
                    pathname: Z,
                    updatedAt: Date.now(),
                    search: Q ? $a(Q.search, R) : R,
                    _strictSearch: M,
                    searchError: void 0,
                    status: je,
                    isFetching: !1,
                    error: void 0,
                    paramsError: $,
                    __routeContext: void 0,
                    _nonReactive: {
                        loadPromise: ii()
                    },
                    __beforeLoadContext: void 0,
                    context: {},
                    abortController: new AbortController,
                    fetchCount: 0,
                    cause: ce,
                    loaderDeps: Q ? Wa(Q.loaderDeps, C) : C,
                    invalid: !1,
                    preload: !1,
                    links: void 0,
                    scripts: void 0,
                    headScripts: void 0,
                    meta: void 0,
                    staticData: _.options.staticData || {},
                    fullPath: _.fullPath
                }
            }
            a?.preload || (se.globalNotFound = y === _.id),
            se.searchError = E;
            const _e = this.getParentContext(x);
            se.context = {
                ..._e,
                ...se.__routeContext,
                ...se.__beforeLoadContext
            },
            p[g] = se
        }
        for (let g = 0; g < p.length; g++) {
            const _ = p[g]
              , x = this.looseRoutesById[_.routeId]
              , R = this.getMatch(_.id)
              , M = v.get(_.routeId);
            if (_.params = M ? $a(M.params, u) : u,
            !R) {
                const E = p[g - 1]
                  , C = this.getParentContext(E);
                if (x.options.context) {
                    const H = {
                        deps: _.loaderDeps,
                        params: _.params,
                        context: C ?? {},
                        location: n,
                        navigate: Z => this.navigate({
                            ...Z,
                            _fromLocation: n
                        }),
                        buildLocation: this.buildLocation,
                        cause: _.cause,
                        abortController: _.abortController,
                        preload: !!_.preload,
                        matches: p,
                        routeId: x.id
                    };
                    _.__routeContext = x.options.context(H) ?? void 0
                }
                _.context = {
                    ...C,
                    ..._.__routeContext,
                    ..._.__beforeLoadContext
                }
            }
        }
        return p
    }
    matchRoutesLightweight(n) {
        const {matchedRoutes: a, routeParams: r, parsedParams: l} = this.getMatchedRoutes(n.pathname)
          , u = ys(a)
          , f = {
            ...n.search
        };
        for (const v of a)
            try {
                Object.assign(f, Wl(v.options.validateSearch, f))
            } catch {}
        const d = ys(this.stores.matchesId.get())
          , h = d && this.stores.matchStores.get(d)?.get()
          , y = h && h.routeId === u.id && h.pathname === n.pathname;
        let p;
        if (y)
            p = h.params;
        else {
            const v = Object.assign(Object.create(null), r);
            for (const g of a)
                try {
                    my(g, r, l ?? {}, v)
                } catch {}
            p = v
        }
        return {
            matchedRoutes: a,
            fullPath: u.fullPath,
            search: f,
            params: p
        }
    }
}
  , ru = class extends Error {
}
  , m_ = class extends Error {
}
;
function p_(n) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: n,
        matches: [],
        statusCode: 200
    }
}
function Wl(n, a) {
    if (n == null)
        return {};
    if ("~standard"in n) {
        const r = n["~standard"].validate(a);
        if (r instanceof Promise)
            throw new ru("Async validation not supported");
        if (r.issues)
            throw new ru(JSON.stringify(r.issues, void 0, 2),{
                cause: r
            });
        return r.value
    }
    return "parse"in n ? n.parse(a) : typeof n == "function" ? n(a) : {}
}
function y_({pathname: n, routesById: a, processedTree: r}) {
    const l = Object.create(null)
      , u = wa(n);
    let f, d;
    const h = zS(u, r, !0);
    return h && (f = h.route,
    Object.assign(l, h.rawParams),
    d = Object.assign(Object.create(null), h.parsedParams)),
    {
        matchedRoutes: h?.branch || [a.__root__],
        routeParams: l,
        foundRoute: f,
        parsedParams: d
    }
}
function g_({search: n, dest: a, destRoutes: r, _includeValidateSearch: l}) {
    return v_(r)(n, a, l ?? !1)
}
function v_(n) {
    const a = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const u of n) {
        if ("search"in u.options)
            u.options.search?.middlewares && a.middlewares.push(...u.options.search.middlewares);
        else if (u.options.preSearchFilters || u.options.postSearchFilters) {
            const f = ({search: d, next: h}) => {
                let y = d;
                "preSearchFilters"in u.options && u.options.preSearchFilters && (y = u.options.preSearchFilters.reduce( (v, g) => g(v), d));
                const p = h(y);
                return "postSearchFilters"in u.options && u.options.postSearchFilters ? u.options.postSearchFilters.reduce( (v, g) => g(v), p) : p
            }
            ;
            a.middlewares.push(f)
        }
        if (u.options.validateSearch) {
            const f = ({search: d, next: h}) => {
                const y = h(d);
                if (!a._includeValidateSearch)
                    return y;
                try {
                    return {
                        ...y,
                        ...Wl(u.options.validateSearch, y) ?? void 0
                    }
                } catch {
                    return y
                }
            }
            ;
            a.middlewares.push(f)
        }
    }
    const r = ({search: u}) => {
        const f = a.dest;
        return f.search ? f.search === !0 ? u : _a(f.search, u) : {}
    }
    ;
    a.middlewares.push(r);
    const l = (u, f, d) => {
        if (u >= d.length)
            return f;
        const h = d[u];
        return h({
            search: f,
            next: p => l(u + 1, p, d)
        })
    }
    ;
    return function(f, d, h) {
        return a.dest = d,
        a._includeValidateSearch = h,
        l(0, f, a.middlewares)
    }
}
function b_(n, a) {
    if (n !== "root")
        for (let r = a.length - 1; r >= 0; r--) {
            const l = a[r];
            if (l.children)
                return l.id
        }
    return ni
}
function my(n, a, r, l) {
    const u = n.options.params?.parse ?? n.options.parseParams;
    if (u)
        if (n.options.skipRouteOnParseError)
            for (const f in a)
                f in r && (l[f] = r[f]);
        else {
            const f = u(l);
            Object.assign(l, f)
        }
}
var mn = Symbol.for("TSR_DEFERRED_PROMISE");
function S_(n, a) {
    const r = n;
    return r[mn] || (r[mn] = {
        status: "pending"
    },
    r.then(l => {
        r[mn].status = "success",
        r[mn].data = l
    }
    ).catch(l => {
        r[mn].status = "error",
        r[mn].error = {
            data: d_(l),
            __isServerError: !0
        }
    }
    )),
    r
}
var __ = "Error preloading route! ☝️";
function py(n, a) {
    if (n)
        return typeof n == "string" ? n : n[a]
}
function x_(n) {
    return typeof n == "string" ? {
        href: n,
        crossOrigin: void 0
    } : n
}
function E_(n) {
    if (n.tag !== "link")
        return;
    const a = n.attrs?.rel
      , r = n.attrs?.href;
    if (typeof r == "string" && (typeof a == "string" ? a.split(/\s+/) : []).includes("stylesheet"))
        return r
}
function w_(n, a) {
    const r = E_(a);
    return !!r && n?.inlineCss?.styles[r] !== void 0
}
var Og = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(n) {
        if (this.init = a => {
            this.originalIndex = a.originalIndex;
            const r = this.options
              , l = !r?.path && !r?.id;
            this.parentRoute = this.options.getParentRoute?.(),
            l ? this._path = ni : this.parentRoute || Nt();
            let u = l ? ni : r?.path;
            u && u !== "/" && (u = bg(u));
            const f = r?.id || u;
            let d = l ? ni : Il([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
            u === "__root__" && (u = "/"),
            d !== "__root__" && (d = Il(["/", d]));
            const h = d === "__root__" ? "/" : Il([this.parentRoute.fullPath, u]);
            this._path = u,
            this._id = d,
            this._fullPath = h,
            this._to = wa(h)
        }
        ,
        this.addChildren = a => this._addFileChildren(a),
        this._addFileChildren = a => (Array.isArray(a) && (this.children = a),
        typeof a == "object" && a !== null && (this.children = Object.values(a)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = a => (Object.assign(this.options, a),
        this),
        this.update = a => (Object.assign(this.options, a),
        this),
        this.lazy = a => (this.lazyFn = a,
        this),
        this.redirect = a => xg({
            from: this.fullPath,
            ...a
        }),
        this.options = n || {},
        this.isRoot = !n?.getParentRoute,
        n?.id && n?.path)
            throw new Error("Route cannot have both an 'id' and a 'path' option.")
    }
}
  , R_ = class extends Og {
    constructor(n) {
        super(n)
    }
}
;
function T_(n) {
    if (typeof document < "u" && document.querySelector) {
        const a = n.stores.location.get()
          , r = a.state.__hashScrollIntoViewOptions ?? !0;
        if (r && a.hash !== "") {
            const l = document.getElementById(a.hash);
            l && l.scrollIntoView(r)
        }
    }
}
var A_ = (n => (n[n.AggregateError = 1] = "AggregateError",
n[n.ArrowFunction = 2] = "ArrowFunction",
n[n.ErrorPrototypeStack = 4] = "ErrorPrototypeStack",
n[n.ObjectAssign = 8] = "ObjectAssign",
n[n.BigIntTypedArray = 16] = "BigIntTypedArray",
n[n.RegExp = 32] = "RegExp",
n))(A_ || {})
  , qn = Symbol.asyncIterator
  , Cg = Symbol.hasInstance
  , nr = Symbol.isConcatSpreadable
  , Zn = Symbol.iterator
  , Mg = Symbol.match
  , zg = Symbol.matchAll
  , Dg = Symbol.replace
  , Ng = Symbol.search
  , jg = Symbol.species
  , Lg = Symbol.split
  , Ug = Symbol.toPrimitive
  , ar = Symbol.toStringTag
  , Bg = Symbol.unscopables
  , kg = {
    [qn]: 0,
    [Cg]: 1,
    [nr]: 2,
    [Zn]: 3,
    [Mg]: 4,
    [zg]: 5,
    [Dg]: 6,
    [Ng]: 7,
    [jg]: 8,
    [Lg]: 9,
    [Ug]: 10,
    [ar]: 11,
    [Bg]: 12
}
  , O_ = {
    0: qn,
    1: Cg,
    2: nr,
    3: Zn,
    4: Mg,
    5: zg,
    6: Dg,
    7: Ng,
    8: jg,
    9: Lg,
    10: Ug,
    11: ar,
    12: Bg
}
  , S = void 0
  , C_ = {
    2: !0,
    3: !1,
    1: S,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN
}
  , M_ = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError"
}
  , z_ = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function Me(n, a, r, l, u, f, d, h, y, p, v, g) {
    return {
        t: n,
        i: a,
        s: r,
        c: l,
        m: u,
        p: f,
        e: d,
        a: h,
        f: y,
        b: p,
        o: v,
        l: g
    }
}
function Ca(n) {
    return Me(2, S, n, S, S, S, S, S, S, S, S, S)
}
var Hg = Ca(2)
  , qg = Ca(3)
  , D_ = Ca(1)
  , N_ = Ca(0)
  , j_ = Ca(4)
  , L_ = Ca(5)
  , U_ = Ca(6)
  , B_ = Ca(7);
function k_(n) {
    switch (n) {
    case '"':
        return '\\"';
    case "\\":
        return "\\\\";
    case `
`:
        return "\\n";
    case "\r":
        return "\\r";
    case "\b":
        return "\\b";
    case "	":
        return "\\t";
    case "\f":
        return "\\f";
    case "<":
        return "\\x3C";
    case "\u2028":
        return "\\u2028";
    case "\u2029":
        return "\\u2029";
    default:
        return S
    }
}
function Ma(n) {
    let a = "", r = 0, l;
    for (let u = 0, f = n.length; u < f; u++)
        l = k_(n[u]),
        l && (a += n.slice(r, u) + l,
        r = u + 1);
    return r === 0 ? a = n : a += n.slice(r),
    a
}
function H_(n) {
    switch (n) {
    case "\\\\":
        return "\\";
    case '\\"':
        return '"';
    case "\\n":
        return `
`;
    case "\\r":
        return "\r";
    case "\\b":
        return "\b";
    case "\\t":
        return "	";
    case "\\f":
        return "\f";
    case "\\x3C":
        return "<";
    case "\\u2028":
        return "\u2028";
    case "\\u2029":
        return "\u2029";
    default:
        return n
    }
}
function za(n) {
    return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, H_)
}
var Pl = "__SEROVAL_REFS__"
  , Zg = new Map
  , Wi = new Map;
function Vg(n) {
    return Zg.has(n)
}
function q_(n) {
    return Wi.has(n)
}
function Z_(n) {
    if (Vg(n))
        return Zg.get(n);
    throw new v1(n)
}
function V_(n) {
    if (q_(n))
        return Wi.get(n);
    throw new b1(n)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, Pl, {
    value: Wi,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, Pl, {
    value: Wi,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, Pl, {
    value: Wi,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, Pl, {
    value: Wi,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function Df(n) {
    return n instanceof EvalError ? 1 : n instanceof RangeError ? 2 : n instanceof ReferenceError ? 3 : n instanceof SyntaxError ? 4 : n instanceof TypeError ? 5 : n instanceof URIError ? 6 : 0
}
function Y_(n) {
    let a = M_[Df(n)];
    return n.name !== a ? {
        name: n.name
    } : n.constructor.name !== a ? {
        name: n.constructor.name
    } : {}
}
function Yg(n, a) {
    let r = Y_(n)
      , l = Object.getOwnPropertyNames(n);
    for (let u = 0, f = l.length, d; u < f; u++)
        d = l[u],
        d !== "name" && d !== "message" && (d === "stack" ? a & 4 && (r = r || {},
        r[d] = n[d]) : (r = r || {},
        r[d] = n[d]));
    return r
}
function Qg(n) {
    return Object.isFrozen(n) ? 3 : Object.isSealed(n) ? 2 : Object.isExtensible(n) ? 0 : 1
}
function Q_(n) {
    switch (n) {
    case Number.POSITIVE_INFINITY:
        return L_;
    case Number.NEGATIVE_INFINITY:
        return U_
    }
    return n !== n ? B_ : Object.is(n, -0) ? j_ : Me(0, S, n, S, S, S, S, S, S, S, S, S)
}
function Gg(n) {
    return Me(1, S, Ma(n), S, S, S, S, S, S, S, S, S)
}
function G_(n) {
    return Me(3, S, "" + n, S, S, S, S, S, S, S, S, S)
}
function X_(n) {
    return Me(4, n, S, S, S, S, S, S, S, S, S, S)
}
function P_(n, a) {
    let r = a.valueOf();
    return Me(5, n, r !== r ? "" : a.toISOString(), S, S, S, S, S, S, S, S, S)
}
function K_(n, a) {
    return Me(6, n, S, Ma(a.source), a.flags, S, S, S, S, S, S, S)
}
function F_(n, a) {
    return Me(17, n, kg[a], S, S, S, S, S, S, S, S, S)
}
function J_(n, a) {
    return Me(18, n, Ma(Z_(a)), S, S, S, S, S, S, S, S, S)
}
function I_(n, a, r) {
    return Me(25, n, r, Ma(a), S, S, S, S, S, S, S, S)
}
function $_(n, a, r) {
    return Me(9, n, S, S, S, S, S, r, S, S, Qg(a), S)
}
function W_(n, a) {
    return Me(21, n, S, S, S, S, S, S, a, S, S, S)
}
function e1(n, a, r) {
    return Me(15, n, S, a.constructor.name, S, S, S, S, r, a.byteOffset, S, a.length)
}
function t1(n, a, r) {
    return Me(16, n, S, a.constructor.name, S, S, S, S, r, a.byteOffset, S, a.byteLength)
}
function n1(n, a, r) {
    return Me(20, n, S, S, S, S, S, S, r, a.byteOffset, S, a.byteLength)
}
function a1(n, a, r) {
    return Me(13, n, Df(a), S, Ma(a.message), r, S, S, S, S, S, S)
}
function i1(n, a, r) {
    return Me(14, n, Df(a), S, Ma(a.message), r, S, S, S, S, S, S)
}
function r1(n, a) {
    return Me(7, n, S, S, S, S, S, a, S, S, S, S)
}
function s1(n, a) {
    return Me(28, S, S, S, S, S, S, [n, a], S, S, S, S)
}
function l1(n, a) {
    return Me(30, S, S, S, S, S, S, [n, a], S, S, S, S)
}
function u1(n, a, r) {
    return Me(31, n, S, S, S, S, S, r, a, S, S, S)
}
function o1(n, a) {
    return Me(32, n, S, S, S, S, S, S, a, S, S, S)
}
function c1(n, a) {
    return Me(33, n, S, S, S, S, S, S, a, S, S, S)
}
function f1(n, a) {
    return Me(34, n, S, S, S, S, S, S, a, S, S, S)
}
function d1(n, a, r, l) {
    return Me(35, n, r, S, S, S, S, a, S, S, S, l)
}
var h1 = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function m1(n) {
    return `Seroval Error (step: ${h1[n]})`
}
var p1 = (n, a) => m1(n)
  , Xg = class extends Error {
    constructor(n, a) {
        super(p1(n)),
        this.cause = a
    }
}
  , yy = class extends Xg {
    constructor(n) {
        super("parsing", n)
    }
}
  , y1 = class extends Xg {
    constructor(n) {
        super("deserialization", n)
    }
}
;
function Yn(n) {
    return `Seroval Error (specific: ${n})`
}
var vu = class extends Error {
    constructor(a) {
        super(Yn(1)),
        this.value = a
    }
}
  , Pg = class extends Error {
    constructor(a) {
        super(Yn(2))
    }
}
  , g1 = class extends Error {
    constructor(n) {
        super(Yn(3))
    }
}
  , Rs = class extends Error {
    constructor(n) {
        super(Yn(4))
    }
}
  , v1 = class extends Error {
    constructor(n) {
        super(Yn(5)),
        this.value = n
    }
}
  , b1 = class extends Error {
    constructor(n) {
        super(Yn(6))
    }
}
  , S1 = class extends Error {
    constructor(n) {
        super(Yn(7))
    }
}
  , Da = class extends Error {
    constructor(n) {
        super(Yn(8))
    }
}
  , _1 = class extends Error {
    constructor(a) {
        super(Yn(9))
    }
}
  , x1 = class {
    constructor(n, a) {
        this.value = n,
        this.replacement = a
    }
}
  , bu = () => {
    let n = {
        p: 0,
        s: 0,
        f: 0
    };
    return n.p = new Promise( (a, r) => {
        n.s = a,
        n.f = r
    }
    ),
    n
}
  , E1 = (n, a) => {
    n.s(a),
    n.p.s = 1,
    n.p.v = a
}
  , w1 = (n, a) => {
    n.f(a),
    n.p.s = 2,
    n.p.v = a
}
;
bu.toString();
E1.toString();
w1.toString();
var R1 = () => {
    let n = []
      , a = []
      , r = !0
      , l = !1
      , u = 0
      , f = (y, p, v) => {
        for (v = 0; v < u; v++)
            a[v] && a[v][p](y)
    }
      , d = (y, p, v, g) => {
        for (p = 0,
        v = n.length; p < v; p++)
            g = n[p],
            !r && p === v - 1 ? y[l ? "return" : "throw"](g) : y.next(g)
    }
      , h = (y, p) => (r && (p = u++,
    a[p] = y),
    d(y),
    () => {
        r && (a[p] = a[u],
        a[u--] = void 0)
    }
    );
    return {
        __SEROVAL_STREAM__: !0,
        on: y => h(y),
        next: y => {
            r && (n.push(y),
            f(y, "next"))
        }
        ,
        throw: y => {
            r && (n.push(y),
            f(y, "throw"),
            r = !1,
            l = !1,
            a.length = 0)
        }
        ,
        return: y => {
            r && (n.push(y),
            f(y, "return"),
            r = !1,
            l = !0,
            a.length = 0)
        }
    }
}
  , T1 = n => a => () => {
    let r = 0
      , l = {
        [n]: () => l,
        next: () => {
            if (r > a.d)
                return {
                    done: !0,
                    value: void 0
                };
            let u = r++
              , f = a.v[u];
            if (u === a.t)
                throw f;
            return {
                done: u === a.d,
                value: f
            }
        }
    };
    return l
}
  , A1 = (n, a) => r => () => {
    let l = 0
      , u = -1
      , f = !1
      , d = []
      , h = []
      , y = (v=0, g=h.length) => {
        for (; v < g; v++)
            h[v].s({
                done: !0,
                value: void 0
            })
    }
    ;
    r.on({
        next: v => {
            let g = h.shift();
            g && g.s({
                done: !1,
                value: v
            }),
            d.push(v)
        }
        ,
        throw: v => {
            let g = h.shift();
            g && g.f(v),
            y(),
            u = d.length,
            f = !0,
            d.push(v)
        }
        ,
        return: v => {
            let g = h.shift();
            g && g.s({
                done: !0,
                value: v
            }),
            y(),
            u = d.length,
            d.push(v)
        }
    });
    let p = {
        [n]: () => p,
        next: () => {
            if (u === -1) {
                let _ = l++;
                if (_ >= d.length) {
                    let x = a();
                    return h.push(x),
                    x.p
                }
                return {
                    done: !1,
                    value: d[_]
                }
            }
            if (l > u)
                return {
                    done: !0,
                    value: void 0
                };
            let v = l++
              , g = d[v];
            if (v !== u)
                return {
                    done: !1,
                    value: g
                };
            if (f)
                throw g;
            return {
                done: !0,
                value: g
            }
        }
    };
    return p
}
  , Kg = n => {
    let a = atob(n)
      , r = a.length
      , l = new Uint8Array(r);
    for (let u = 0; u < r; u++)
        l[u] = a.charCodeAt(u);
    return l.buffer
}
;
Kg.toString();
function O1(n) {
    return "__SEROVAL_SEQUENCE__"in n
}
function Fg(n, a, r) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: n,
        t: a,
        d: r
    }
}
function C1(n) {
    let a = []
      , r = -1
      , l = -1
      , u = n[Zn]();
    for (; ; )
        try {
            let f = u.next();
            if (a.push(f.value),
            f.done) {
                l = a.length - 1;
                break
            }
        } catch (f) {
            r = a.length,
            a.push(f)
        }
    return Fg(a, r, l)
}
var M1 = T1(Zn);
function z1(n) {
    return M1(n)
}
var D1 = {}
  , N1 = {}
  , j1 = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function Su(n) {
    return "__SEROVAL_STREAM__"in n
}
function ui() {
    return R1()
}
function L1(n) {
    let a = ui()
      , r = n[qn]();
    async function l() {
        try {
            let u = await r.next();
            u.done ? a.return(u.value) : (a.next(u.value),
            await l())
        } catch (u) {
            a.throw(u)
        }
    }
    return l().catch( () => {}
    ),
    a
}
var U1 = A1(qn, bu);
function B1(n) {
    return U1(n)
}
async function k1(n) {
    try {
        return [1, await n]
    } catch (a) {
        return [0, a]
    }
}
function H1(n, a) {
    return {
        plugins: a.plugins,
        mode: n,
        marked: new Set,
        features: 63 ^ (a.disabledFeatures || 0),
        refs: a.refs || new Map,
        depthLimit: a.depthLimit || 1e3
    }
}
function eu(n, a) {
    n.marked.add(a)
}
function q1(n, a) {
    let r = n.refs.size;
    return n.refs.set(a, r),
    r
}
function _u(n, a) {
    let r = n.refs.get(a);
    return r != null ? (eu(n, r),
    {
        type: 1,
        value: X_(r)
    }) : {
        type: 0,
        value: q1(n, a)
    }
}
function Nf(n, a) {
    let r = _u(n, a);
    return r.type === 1 ? r : Vg(a) ? {
        type: 2,
        value: J_(r.value, a)
    } : r
}
function ti(n, a) {
    let r = Nf(n, a);
    if (r.type !== 0)
        return r.value;
    if (a in kg)
        return F_(r.value, a);
    throw new vu(a)
}
function xu(n, a) {
    let r = _u(n, j1[a]);
    return r.type === 1 ? r.value : Me(26, r.value, a, S, S, S, S, S, S, S, S, S)
}
function Z1(n) {
    let a = _u(n, D1);
    return a.type === 1 ? a.value : Me(27, a.value, S, S, S, S, S, S, ti(n, Zn), S, S, S)
}
function V1(n) {
    let a = _u(n, N1);
    return a.type === 1 ? a.value : Me(29, a.value, S, S, S, S, S, [xu(n, 1), ti(n, qn)], S, S, S, S)
}
function Y1(n, a, r, l) {
    return Me(r ? 11 : 10, n, S, S, S, l, S, S, S, S, Qg(a), S)
}
function Q1(n, a, r, l) {
    return Me(8, a, S, S, S, S, {
        k: r,
        v: l
    }, S, xu(n, 0), S, S, S)
}
function G1(n, a, r) {
    let l = new Uint8Array(r)
      , u = "";
    for (let f = 0, d = l.length; f < d; f++)
        u += String.fromCharCode(l[f]);
    return Me(19, a, Ma(btoa(u)), S, S, S, S, S, xu(n, 5), S, S, S)
}
function X1(n, a) {
    return {
        base: H1(n, a),
        child: void 0
    }
}
var P1 = class {
    constructor(n, a) {
        this._p = n,
        this.depth = a
    }
    parse(n) {
        return ut(this._p, this.depth, n)
    }
}
;
async function K1(n, a, r) {
    let l = [];
    for (let u = 0, f = r.length; u < f; u++)
        u in r ? l[u] = await ut(n, a, r[u]) : l[u] = 0;
    return l
}
async function F1(n, a, r, l) {
    return $_(r, l, await K1(n, a, l))
}
async function jf(n, a, r) {
    let l = Object.entries(r)
      , u = []
      , f = [];
    for (let d = 0, h = l.length; d < h; d++)
        u.push(Ma(l[d][0])),
        f.push(await ut(n, a, l[d][1]));
    return Zn in r && (u.push(ti(n.base, Zn)),
    f.push(s1(Z1(n.base), await ut(n, a, C1(r))))),
    qn in r && (u.push(ti(n.base, qn)),
    f.push(l1(V1(n.base), await ut(n, a, L1(r))))),
    ar in r && (u.push(ti(n.base, ar)),
    f.push(Gg(r[ar]))),
    nr in r && (u.push(ti(n.base, nr)),
    f.push(r[nr] ? Hg : qg)),
    {
        k: u,
        v: f
    }
}
async function Wc(n, a, r, l, u) {
    return Y1(r, l, u, await jf(n, a, l))
}
async function J1(n, a, r, l) {
    return W_(r, await ut(n, a, l.valueOf()))
}
async function I1(n, a, r, l) {
    return e1(r, l, await ut(n, a, l.buffer))
}
async function $1(n, a, r, l) {
    return t1(r, l, await ut(n, a, l.buffer))
}
async function W1(n, a, r, l) {
    return n1(r, l, await ut(n, a, l.buffer))
}
async function gy(n, a, r, l) {
    let u = Yg(l, n.base.features);
    return a1(r, l, u ? await jf(n, a, u) : S)
}
async function ex(n, a, r, l) {
    let u = Yg(l, n.base.features);
    return i1(r, l, u ? await jf(n, a, u) : S)
}
async function tx(n, a, r, l) {
    let u = []
      , f = [];
    for (let[d,h] of l.entries())
        u.push(await ut(n, a, d)),
        f.push(await ut(n, a, h));
    return Q1(n.base, r, u, f)
}
async function nx(n, a, r, l) {
    let u = [];
    for (let f of l.keys())
        u.push(await ut(n, a, f));
    return r1(r, u)
}
async function Jg(n, a, r, l) {
    let u = n.base.plugins;
    if (u)
        for (let f = 0, d = u.length; f < d; f++) {
            let h = u[f];
            if (h.parse.async && h.test(l))
                return I_(r, h.tag, await h.parse.async(l, new P1(n,a), {
                    id: r
                }))
        }
    return S
}
async function ax(n, a, r, l) {
    let[u,f] = await k1(l);
    return Me(12, r, u, S, S, S, S, S, await ut(n, a, f), S, S, S)
}
function ix(n, a, r, l, u) {
    let f = []
      , d = r.on({
        next: h => {
            eu(this.base, a),
            ut(this, n, h).then(y => {
                f.push(o1(a, y))
            }
            , y => {
                u(y),
                d()
            }
            )
        }
        ,
        throw: h => {
            eu(this.base, a),
            ut(this, n, h).then(y => {
                f.push(c1(a, y)),
                l(f),
                d()
            }
            , y => {
                u(y),
                d()
            }
            )
        }
        ,
        return: h => {
            eu(this.base, a),
            ut(this, n, h).then(y => {
                f.push(f1(a, y)),
                l(f),
                d()
            }
            , y => {
                u(y),
                d()
            }
            )
        }
    })
}
async function rx(n, a, r, l) {
    return u1(r, xu(n.base, 4), await new Promise(ix.bind(n, a, r, l)))
}
async function sx(n, a, r, l) {
    let u = [];
    for (let f = 0, d = l.v.length; f < d; f++)
        u[f] = await ut(n, a, l.v[f]);
    return d1(r, u, l.t, l.d)
}
async function lx(n, a, r, l) {
    if (Array.isArray(l))
        return F1(n, a, r, l);
    if (Su(l))
        return rx(n, a, r, l);
    if (O1(l))
        return sx(n, a, r, l);
    let u = l.constructor;
    if (u === x1)
        return ut(n, a, l.replacement);
    let f = await Jg(n, a, r, l);
    if (f)
        return f;
    switch (u) {
    case Object:
        return Wc(n, a, r, l, !1);
    case S:
        return Wc(n, a, r, l, !0);
    case Date:
        return P_(r, l);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return gy(n, a, r, l);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return J1(n, a, r, l);
    case ArrayBuffer:
        return G1(n.base, r, l);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return I1(n, a, r, l);
    case DataView:
        return W1(n, a, r, l);
    case Map:
        return tx(n, a, r, l);
    case Set:
        return nx(n, a, r, l)
    }
    if (u === Promise || l instanceof Promise)
        return ax(n, a, r, l);
    let d = n.base.features;
    if (d & 32 && u === RegExp)
        return K_(r, l);
    if (d & 16)
        switch (u) {
        case BigInt64Array:
        case BigUint64Array:
            return $1(n, a, r, l)
        }
    if (d & 1 && typeof AggregateError < "u" && (u === AggregateError || l instanceof AggregateError))
        return ex(n, a, r, l);
    if (l instanceof Error)
        return gy(n, a, r, l);
    if (Zn in l || qn in l)
        return Wc(n, a, r, l, !!u);
    throw new vu(l)
}
async function ux(n, a, r) {
    let l = Nf(n.base, r);
    if (l.type !== 0)
        return l.value;
    let u = await Jg(n, a, l.value, r);
    if (u)
        return u;
    throw new vu(r)
}
async function ut(n, a, r) {
    switch (typeof r) {
    case "boolean":
        return r ? Hg : qg;
    case "undefined":
        return D_;
    case "string":
        return Gg(r);
    case "number":
        return Q_(r);
    case "bigint":
        return G_(r);
    case "object":
        {
            if (r) {
                let l = Nf(n.base, r);
                return l.type === 0 ? await lx(n, a + 1, l.value, r) : l.value
            }
            return N_
        }
    case "symbol":
        return ti(n.base, r);
    case "function":
        return ux(n, a, r);
    default:
        throw new vu(r)
    }
}
async function ox(n, a) {
    try {
        return await ut(n, 0, a)
    } catch (r) {
        throw r instanceof yy ? r : new yy(r)
    }
}
var cx = (n => (n[n.Vanilla = 1] = "Vanilla",
n[n.Cross = 2] = "Cross",
n))(cx || {});
function Ig(n, a) {
    for (let r = 0, l = a.length; r < l; r++) {
        let u = a[r];
        n.has(u) || (n.add(u),
        u.extends && Ig(n, u.extends))
    }
}
function $g(n) {
    if (n) {
        let a = new Set;
        return Ig(a, n),
        [...a]
    }
}
function fx(n) {
    switch (n) {
    case "Int8Array":
        return Int8Array;
    case "Int16Array":
        return Int16Array;
    case "Int32Array":
        return Int32Array;
    case "Uint8Array":
        return Uint8Array;
    case "Uint16Array":
        return Uint16Array;
    case "Uint32Array":
        return Uint32Array;
    case "Uint8ClampedArray":
        return Uint8ClampedArray;
    case "Float32Array":
        return Float32Array;
    case "Float64Array":
        return Float64Array;
    case "BigInt64Array":
        return BigInt64Array;
    case "BigUint64Array":
        return BigUint64Array;
    default:
        throw new S1(n)
    }
}
var dx = 1e6
  , hx = 1e4
  , mx = 2e4;
function Wg(n, a) {
    switch (a) {
    case 3:
        return Object.freeze(n);
    case 1:
        return Object.preventExtensions(n);
    case 2:
        return Object.seal(n);
    default:
        return n
    }
}
var px = 1e3;
function yx(n, a) {
    var r;
    return {
        mode: n,
        plugins: a.plugins,
        refs: a.refs || new Map,
        features: (r = a.features) != null ? r : 63 ^ (a.disabledFeatures || 0),
        depthLimit: a.depthLimit || px
    }
}
function gx(n) {
    return {
        mode: 2,
        base: yx(2, n),
        child: S
    }
}
var vx = class {
    constructor(n, a) {
        this._p = n,
        this.depth = a
    }
    deserialize(n) {
        return Ve(this._p, this.depth, n)
    }
}
;
function ev(n, a) {
    if (a < 0 || !Number.isFinite(a) || !Number.isInteger(a))
        throw new Da({
            t: 4,
            i: a
        });
    if (n.refs.has(a))
        throw new Error("Conflicted ref id: " + a)
}
function bx(n, a, r) {
    return ev(n.base, a),
    n.state.marked.has(a) && n.base.refs.set(a, r),
    r
}
function Sx(n, a, r) {
    return ev(n.base, a),
    n.base.refs.set(a, r),
    r
}
function ot(n, a, r) {
    return n.mode === 1 ? bx(n, a, r) : Sx(n, a, r)
}
function mf(n, a, r) {
    if (Object.hasOwn(a, r))
        return a[r];
    throw new Da(n)
}
function _x(n, a) {
    return ot(n, a.i, V_(za(a.s)))
}
function xx(n, a, r) {
    let l = r.a
      , u = l.length
      , f = ot(n, r.i, new Array(u));
    for (let d = 0, h; d < u; d++)
        h = l[d],
        h && (f[d] = Ve(n, a, h));
    return Wg(f, r.o),
    f
}
function Ex(n) {
    switch (n) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
        return !1;
    default:
        return !0
    }
}
function wx(n) {
    switch (n) {
    case qn:
    case nr:
    case ar:
    case Zn:
        return !0;
    default:
        return !1
    }
}
function vy(n, a, r) {
    Ex(a) ? n[a] = r : Object.defineProperty(n, a, {
        value: r,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function Rx(n, a, r, l, u) {
    if (typeof l == "string")
        vy(r, za(l), Ve(n, a, u));
    else {
        let f = Ve(n, a, l);
        switch (typeof f) {
        case "string":
            vy(r, f, Ve(n, a, u));
            break;
        case "symbol":
            wx(f) && (r[f] = Ve(n, a, u));
            break;
        default:
            throw new Da(l)
        }
    }
}
function tv(n, a, r, l) {
    let u = r.k;
    if (u.length > 0)
        for (let f = 0, d = r.v, h = u.length; f < h; f++)
            Rx(n, a, l, u[f], d[f]);
    return l
}
function Tx(n, a, r) {
    let l = ot(n, r.i, r.t === 10 ? {} : Object.create(null));
    return tv(n, a, r.p, l),
    Wg(l, r.o),
    l
}
function Ax(n, a) {
    return ot(n, a.i, new Date(a.s))
}
function Ox(n, a) {
    if (n.base.features & 32) {
        let r = za(a.c);
        if (r.length > mx)
            throw new Da(a);
        return ot(n, a.i, new RegExp(r,a.m))
    }
    throw new Pg(a)
}
function Cx(n, a, r) {
    let l = ot(n, r.i, new Set);
    for (let u = 0, f = r.a, d = f.length; u < d; u++)
        l.add(Ve(n, a, f[u]));
    return l
}
function Mx(n, a, r) {
    let l = ot(n, r.i, new Map);
    for (let u = 0, f = r.e.k, d = r.e.v, h = f.length; u < h; u++)
        l.set(Ve(n, a, f[u]), Ve(n, a, d[u]));
    return l
}
function zx(n, a) {
    if (a.s.length > dx)
        throw new Da(a);
    return ot(n, a.i, Kg(za(a.s)))
}
function Dx(n, a, r) {
    var l;
    let u = fx(r.c)
      , f = Ve(n, a, r.f)
      , d = (l = r.b) != null ? l : 0;
    if (d < 0 || d > f.byteLength)
        throw new Da(r);
    return ot(n, r.i, new u(f,d,r.l))
}
function Nx(n, a, r) {
    var l;
    let u = Ve(n, a, r.f)
      , f = (l = r.b) != null ? l : 0;
    if (f < 0 || f > u.byteLength)
        throw new Da(r);
    return ot(n, r.i, new DataView(u,f,r.l))
}
function nv(n, a, r, l) {
    if (r.p) {
        let u = tv(n, a, r.p, {});
        Object.defineProperties(l, Object.getOwnPropertyDescriptors(u))
    }
    return l
}
function jx(n, a, r) {
    let l = ot(n, r.i, new AggregateError([],za(r.m)));
    return nv(n, a, r, l)
}
function Lx(n, a, r) {
    let l = mf(r, z_, r.s)
      , u = ot(n, r.i, new l(za(r.m)));
    return nv(n, a, r, u)
}
function Ux(n, a, r) {
    let l = bu()
      , u = ot(n, r.i, l.p)
      , f = Ve(n, a, r.f);
    return r.s ? l.s(f) : l.f(f),
    u
}
function Bx(n, a, r) {
    return ot(n, r.i, Object(Ve(n, a, r.f)))
}
function kx(n, a, r) {
    let l = n.base.plugins;
    if (l) {
        let u = za(r.c);
        for (let f = 0, d = l.length; f < d; f++) {
            let h = l[f];
            if (h.tag === u)
                return ot(n, r.i, h.deserialize(r.s, new vx(n,a), {
                    id: r.i
                }))
        }
    }
    throw new g1(r.c)
}
function Hx(n, a) {
    return ot(n, a.i, ot(n, a.s, bu()).p)
}
function qx(n, a, r) {
    let l = n.base.refs.get(r.i);
    if (l)
        return l.s(Ve(n, a, r.a[1])),
        S;
    throw new Rs("Promise")
}
function Zx(n, a, r) {
    let l = n.base.refs.get(r.i);
    if (l)
        return l.f(Ve(n, a, r.a[1])),
        S;
    throw new Rs("Promise")
}
function Vx(n, a, r) {
    Ve(n, a, r.a[0]);
    let l = Ve(n, a, r.a[1]);
    return z1(l)
}
function Yx(n, a, r) {
    Ve(n, a, r.a[0]);
    let l = Ve(n, a, r.a[1]);
    return B1(l)
}
function Qx(n, a, r) {
    let l = ot(n, r.i, ui())
      , u = r.a
      , f = u.length;
    if (f)
        for (let d = 0; d < f; d++)
            Ve(n, a, u[d]);
    return l
}
function Gx(n, a, r) {
    let l = n.base.refs.get(r.i);
    if (l && Su(l))
        return l.next(Ve(n, a, r.f)),
        S;
    throw new Rs("Stream")
}
function Xx(n, a, r) {
    let l = n.base.refs.get(r.i);
    if (l && Su(l))
        return l.throw(Ve(n, a, r.f)),
        S;
    throw new Rs("Stream")
}
function Px(n, a, r) {
    let l = n.base.refs.get(r.i);
    if (l && Su(l))
        return l.return(Ve(n, a, r.f)),
        S;
    throw new Rs("Stream")
}
function Kx(n, a, r) {
    return Ve(n, a, r.f),
    S
}
function Fx(n, a, r) {
    return Ve(n, a, r.a[1]),
    S
}
function Jx(n, a, r) {
    let l = ot(n, r.i, Fg([], r.s, r.l));
    for (let u = 0, f = r.a.length; u < f; u++)
        l.v[u] = Ve(n, a, r.a[u]);
    return l
}
function Ve(n, a, r) {
    if (a > n.base.depthLimit)
        throw new _1(n.base.depthLimit);
    switch (a += 1,
    r.t) {
    case 2:
        return mf(r, C_, r.s);
    case 0:
        return Number(r.s);
    case 1:
        return za(String(r.s));
    case 3:
        if (String(r.s).length > hx)
            throw new Da(r);
        return BigInt(r.s);
    case 4:
        return n.base.refs.get(r.i);
    case 18:
        return _x(n, r);
    case 9:
        return xx(n, a, r);
    case 10:
    case 11:
        return Tx(n, a, r);
    case 5:
        return Ax(n, r);
    case 6:
        return Ox(n, r);
    case 7:
        return Cx(n, a, r);
    case 8:
        return Mx(n, a, r);
    case 19:
        return zx(n, r);
    case 16:
    case 15:
        return Dx(n, a, r);
    case 20:
        return Nx(n, a, r);
    case 14:
        return jx(n, a, r);
    case 13:
        return Lx(n, a, r);
    case 12:
        return Ux(n, a, r);
    case 17:
        return mf(r, O_, r.s);
    case 21:
        return Bx(n, a, r);
    case 25:
        return kx(n, a, r);
    case 22:
        return Hx(n, r);
    case 23:
        return qx(n, a, r);
    case 24:
        return Zx(n, a, r);
    case 28:
        return Vx(n, a, r);
    case 30:
        return Yx(n, a, r);
    case 31:
        return Qx(n, a, r);
    case 32:
        return Gx(n, a, r);
    case 33:
        return Xx(n, a, r);
    case 34:
        return Px(n, a, r);
    case 27:
        return Kx(n, a, r);
    case 29:
        return Fx(n, a, r);
    case 35:
        return Jx(n, a, r);
    default:
        throw new Pg(r)
    }
}
function Ix(n, a) {
    try {
        return Ve(n, 0, a)
    } catch (r) {
        throw new y1(r)
    }
}
var $x = () => T;
$x.toString();
function by(n, a) {
    let r = $g(a.plugins)
      , l = gx({
        plugins: r,
        refs: a.refs,
        features: a.features,
        disabledFeatures: a.disabledFeatures,
        depthLimit: a.depthLimit
    });
    return Ix(l, n)
}
async function Wx(n, a={}) {
    let r = $g(a.plugins)
      , l = X1(1, {
        plugins: r,
        disabledFeatures: a.disabledFeatures
    });
    return {
        t: await ox(l, n),
        f: l.base.features,
        m: Array.from(l.base.marked)
    }
}
function eE(n) {
    return {
        tag: "$TSR/t/" + n.key,
        test: n.test,
        parse: {
            sync(a, r, l) {
                return {
                    v: r.parse(n.toSerializable(a))
                }
            },
            async async(a, r, l) {
                return {
                    v: await r.parse(n.toSerializable(a))
                }
            },
            stream(a, r, l) {
                return {
                    v: r.parse(n.toSerializable(a))
                }
            }
        },
        serialize: void 0,
        deserialize(a, r, l) {
            return n.fromSerializable(r.deserialize(a.v))
        }
    }
}
var tE = class {
    constructor(n, a) {
        this.stream = n,
        this.hint = a?.hint ?? "binary"
    }
}
  , su = globalThis.Buffer
  , av = !!su && typeof su.from == "function";
function iv(n) {
    if (n.length === 0)
        return "";
    if (av)
        return su.from(n).toString("base64");
    const a = 32768
      , r = [];
    for (let l = 0; l < n.length; l += a) {
        const u = n.subarray(l, l + a);
        r.push(String.fromCharCode.apply(null, u))
    }
    return btoa(r.join(""))
}
function rv(n) {
    if (n.length === 0)
        return new Uint8Array(0);
    if (av) {
        const l = su.from(n, "base64");
        return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)
    }
    const a = atob(n)
      , r = new Uint8Array(a.length);
    for (let l = 0; l < a.length; l++)
        r[l] = a.charCodeAt(l);
    return r
}
var cs = Object.create(null)
  , fs = Object.create(null)
  , nE = n => new ReadableStream({
    start(a) {
        n.on({
            next(r) {
                try {
                    a.enqueue(rv(r))
                } catch {}
            },
            throw(r) {
                a.error(r)
            },
            return() {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , aE = new TextEncoder
  , iE = n => new ReadableStream({
    start(a) {
        n.on({
            next(r) {
                try {
                    typeof r == "string" ? a.enqueue(aE.encode(r)) : a.enqueue(rv(r.$b64))
                } catch {}
            },
            throw(r) {
                a.error(r)
            },
            return() {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , rE = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))"
  , sE = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function Sy(n) {
    const a = ui()
      , r = n.getReader();
    return (async () => {
        try {
            for (; ; ) {
                const {done: l, value: u} = await r.read();
                if (l) {
                    a.return(void 0);
                    break
                }
                a.next(iv(u))
            }
        } catch (l) {
            a.throw(l)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    a
}
function _y(n) {
    const a = ui()
      , r = n.getReader()
      , l = new TextDecoder("utf-8",{
        fatal: !0
    });
    return (async () => {
        try {
            for (; ; ) {
                const {done: u, value: f} = await r.read();
                if (u) {
                    try {
                        const d = l.decode();
                        d.length > 0 && a.next(d)
                    } catch {}
                    a.return(void 0);
                    break
                }
                try {
                    const d = l.decode(f, {
                        stream: !0
                    });
                    d.length > 0 && a.next(d)
                } catch {
                    a.next({
                        $b64: iv(f)
                    })
                }
            }
        } catch (u) {
            a.throw(u)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    a
}
var lE = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(n) {
            return n === cs
        },
        parse: {
            sync(n, a, r) {
                return {}
            },
            async async(n, a, r) {
                return {}
            },
            stream(n, a, r) {
                return {}
            }
        },
        serialize(n, a, r) {
            return rE
        },
        deserialize(n, a, r) {
            return cs
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(n) {
            return n === fs
        },
        parse: {
            sync(n, a, r) {
                return {}
            },
            async async(n, a, r) {
                return {}
            },
            stream(n, a, r) {
                return {}
            }
        },
        serialize(n, a, r) {
            return sE
        },
        deserialize(n, a, r) {
            return fs
        }
    }],
    test(n) {
        return n instanceof tE
    },
    parse: {
        sync(n, a, r) {
            const l = n.hint === "text" ? fs : cs;
            return {
                hint: a.parse(n.hint),
                factory: a.parse(l),
                stream: a.parse(ui())
            }
        },
        async async(n, a, r) {
            const l = n.hint === "text" ? fs : cs
              , u = n.hint === "text" ? _y(n.stream) : Sy(n.stream);
            return {
                hint: await a.parse(n.hint),
                factory: await a.parse(l),
                stream: await a.parse(u)
            }
        },
        stream(n, a, r) {
            const l = n.hint === "text" ? fs : cs
              , u = n.hint === "text" ? _y(n.stream) : Sy(n.stream);
            return {
                hint: a.parse(n.hint),
                factory: a.parse(l),
                stream: a.parse(u)
            }
        }
    },
    serialize(n, a, r) {
        return "(" + a.serialize(n.factory) + ")(" + a.serialize(n.stream) + ")"
    },
    deserialize(n, a, r) {
        const l = a.deserialize(n.stream);
        return a.deserialize(n.hint) === "text" ? iE(l) : nE(l)
    }
};
function uE(n) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(a, r, l) {
            return n(typeof r?.deserialize == "function" ? r.deserialize(a.streamId) : a.streamId)
        }
    }
}
var oE = {
    tag: "$TSR/Error",
    test(n) {
        return n instanceof Error
    },
    parse: {
        sync(n, a) {
            return {
                message: a.parse(n.message)
            }
        },
        async async(n, a) {
            return {
                message: await a.parse(n.message)
            }
        },
        stream(n, a) {
            return {
                message: a.parse(n.message)
            }
        }
    },
    serialize(n, a) {
        return "new Error(" + a.serialize(n.message) + ")"
    },
    deserialize(n, a) {
        return new Error(a.deserialize(n.message))
    }
}
  , Sa = {}
  , sv = n => new ReadableStream({
    start: a => {
        n.on({
            next: r => {
                try {
                    a.enqueue(r)
                } catch {}
            }
            ,
            throw: r => {
                a.error(r)
            }
            ,
            return: () => {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , cE = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(n) {
        return n === Sa
    },
    parse: {
        sync() {
            return Sa
        },
        async async() {
            return await Promise.resolve(Sa)
        },
        stream() {
            return Sa
        }
    },
    serialize() {
        return sv.toString()
    },
    deserialize() {
        return Sa
    }
};
function xy(n) {
    let a = ui()
      , r = n.getReader();
    async function l() {
        try {
            let u = await r.read();
            u.done ? a.return(u.value) : (a.next(u.value),
            await l())
        } catch (u) {
            a.throw(u)
        }
    }
    return l().catch( () => {}
    ),
    a
}
var fE = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [cE],
    test(n) {
        return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream
    },
    parse: {
        sync(n, a) {
            return {
                factory: a.parse(Sa),
                stream: a.parse(ui())
            }
        },
        async async(n, a) {
            return {
                factory: await a.parse(Sa),
                stream: await a.parse(xy(n))
            }
        },
        stream(n, a) {
            return {
                factory: a.parse(Sa),
                stream: a.parse(xy(n))
            }
        }
    },
    serialize(n, a) {
        return "(" + a.serialize(n.factory) + ")(" + a.serialize(n.stream) + ")"
    },
    deserialize(n, a) {
        let r = a.deserialize(n.stream);
        return sv(r)
    }
}
  , dE = fE
  , hE = [oE, lE, dE];
function mE() {
    return [...pg()?.serializationAdapters?.map(eE) ?? [], ...hE]
}
var Ey = new TextDecoder
  , pE = new Uint8Array(0)
  , wy = 16 * 1024 * 1024
  , Ry = 32 * 1024 * 1024
  , Ty = 1024
  , Ay = 1e5;
function yE(n) {
    const a = new Map
      , r = new Map
      , l = new Set;
    let u = !1, f = null, d = 0, h;
    const y = new ReadableStream({
        start(g) {
            h = g
        },
        cancel() {
            u = !0;
            try {
                f?.cancel()
            } catch {}
            a.forEach(g => {
                try {
                    g.error(new Error("Framed response cancelled"))
                } catch {}
            }
            ),
            a.clear(),
            r.clear(),
            l.clear()
        }
    });
    function p(g) {
        const _ = r.get(g);
        if (_)
            return _;
        if (l.has(g))
            return new ReadableStream({
                start(R) {
                    R.close()
                }
            });
        if (r.size >= Ty)
            throw new Error(`Too many raw streams in framed response (max ${Ty})`);
        const x = new ReadableStream({
            start(R) {
                a.set(g, R)
            },
            cancel() {
                l.add(g),
                a.delete(g),
                r.delete(g)
            }
        });
        return r.set(g, x),
        x
    }
    function v(g) {
        return p(g),
        a.get(g)
    }
    return (async () => {
        const g = n.getReader();
        f = g;
        const _ = [];
        let x = 0;
        function R() {
            if (x < 9)
                return null;
            const E = _[0];
            if (E.length >= 9)
                return {
                    type: E[0],
                    streamId: (E[1] << 24 | E[2] << 16 | E[3] << 8 | E[4]) >>> 0,
                    length: (E[5] << 24 | E[6] << 16 | E[7] << 8 | E[8]) >>> 0
                };
            const C = new Uint8Array(9);
            let H = 0
              , Z = 9;
            for (let k = 0; k < _.length && Z > 0; k++) {
                const I = _[k]
                  , J = Math.min(I.length, Z);
                C.set(I.subarray(0, J), H),
                H += J,
                Z -= J
            }
            return {
                type: C[0],
                streamId: (C[1] << 24 | C[2] << 16 | C[3] << 8 | C[4]) >>> 0,
                length: (C[5] << 24 | C[6] << 16 | C[7] << 8 | C[8]) >>> 0
            }
        }
        function M(E) {
            if (E === 0)
                return pE;
            const C = new Uint8Array(E);
            let H = 0
              , Z = E;
            for (; Z > 0 && _.length > 0; ) {
                const k = _[0];
                if (!k)
                    break;
                const I = Math.min(k.length, Z);
                C.set(k.subarray(0, I), H),
                H += I,
                Z -= I,
                I === k.length ? _.shift() : _[0] = k.subarray(I)
            }
            return x -= E,
            C
        }
        try {
            for (; ; ) {
                const {done: E, value: C} = await g.read();
                if (u || E)
                    break;
                if (C) {
                    if (x + C.length > Ry)
                        throw new Error(`Framed response buffer exceeded ${Ry} bytes`);
                    for (_.push(C),
                    x += C.length; ; ) {
                        const H = R();
                        if (!H)
                            break;
                        const {type: Z, streamId: k, length: I} = H;
                        if (Z !== Bn.JSON && Z !== Bn.CHUNK && Z !== Bn.END && Z !== Bn.ERROR)
                            throw new Error(`Unknown frame type: ${Z}`);
                        if (Z === Bn.JSON) {
                            if (k !== 0)
                                throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (k === 0)
                            throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if (I > wy)
                            throw new Error(`Frame payload too large: ${I} bytes (max ${wy})`);
                        const J = 9 + I;
                        if (x < J)
                            break;
                        if (++d > Ay)
                            throw new Error(`Too many frames in framed response (max ${Ay})`);
                        M(9);
                        const Q = M(I);
                        switch (Z) {
                        case Bn.JSON:
                            try {
                                h.enqueue(Ey.decode(Q))
                            } catch {}
                            break;
                        case Bn.CHUNK:
                            {
                                const G = v(k);
                                G && G.enqueue(Q);
                                break
                            }
                        case Bn.END:
                            {
                                const G = v(k);
                                if (l.add(k),
                                G) {
                                    try {
                                        G.close()
                                    } catch {}
                                    a.delete(k)
                                }
                                break
                            }
                        case Bn.ERROR:
                            {
                                const G = v(k);
                                if (l.add(k),
                                G) {
                                    const $ = Ey.decode(Q);
                                    G.error(new Error($)),
                                    a.delete(k)
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (x !== 0)
                throw new Error("Incomplete frame at end of framed response");
            try {
                h.close()
            } catch {}
            a.forEach(E => {
                try {
                    E.close()
                } catch {}
            }
            ),
            a.clear()
        } catch (E) {
            try {
                h.error(E)
            } catch {}
            a.forEach(C => {
                try {
                    C.error(E)
                } catch {}
            }
            ),
            a.clear()
        } finally {
            try {
                g.releaseLock()
            } catch {}
            f = null
        }
    }
    )(),
    {
        getOrCreateStream: p,
        jsonChunks: y
    }
}
var Ss = null;
async function pf(n) {
    n.length > 0 && await Promise.allSettled(n)
}
var gE = Object.prototype.hasOwnProperty;
function lv(n) {
    for (const a in n)
        if (gE.call(n, a))
            return !0;
    return !1
}
async function vE(n, a, r) {
    Ss || (Ss = mE());
    const l = a[0]
      , u = l.fetch ?? r
      , f = l.data instanceof FormData ? "formData" : "payload"
      , d = l.headers ? new Headers(l.headers) : new Headers;
    if (d.set("x-tsr-serverFn", "true"),
    f === "payload" && d.set("accept", `${dS}, application/x-ndjson, application/json`),
    l.method === "GET") {
        if (f === "formData")
            throw new Error("FormData is not supported with GET requests");
        const y = await uv(l);
        if (y !== void 0) {
            const p = _g({
                payload: y
            });
            n.includes("?") ? n += `&${p}` : n += `?${p}`
        }
    }
    let h;
    if (l.method === "POST") {
        const y = await bE(l);
        y?.contentType && d.set("content-type", y.contentType),
        h = y?.body
    }
    return await SE(async () => u(n, {
        method: l.method,
        headers: d,
        signal: l.signal,
        body: h
    }))
}
async function uv(n) {
    let a = !1;
    const r = {};
    if (n.data !== void 0 && (a = !0,
    r.data = n.data),
    n.context && lv(n.context) && (a = !0,
    r.context = n.context),
    a)
        return ov(r)
}
async function ov(n) {
    return JSON.stringify(await Promise.resolve(Wx(n, {
        plugins: Ss
    })))
}
async function bE(n) {
    if (n.data instanceof FormData) {
        let r;
        return n.context && lv(n.context) && (r = await ov(n.context)),
        r !== void 0 && n.data.set(fS, r),
        {
            body: n.data
        }
    }
    const a = await uv(n);
    if (a)
        return {
            body: a,
            contentType: "application/json"
        }
}
async function SE(n) {
    let a;
    try {
        a = await n()
    } catch (l) {
        if (l instanceof Response)
            a = l;
        else
            throw console.log(l),
            l
    }
    if (a.headers.get("x-tss-raw") === "true")
        return a;
    const r = a.headers.get("content-type");
    if (r || Nt(),
    a.headers.get("x-tss-serialized")) {
        let l;
        if (r.includes("application/x-tss-framed")) {
            if (pS(r),
            !a.body)
                throw new Error("No response body for framed response");
            const {getOrCreateStream: u, jsonChunks: f} = yE(a.body)
              , d = [uE(u), ...Ss || []]
              , h = new Map;
            l = await _E({
                jsonStream: f,
                onMessage: y => by(y, {
                    refs: h,
                    plugins: d
                }),
                onError(y, p) {
                    console.error(y, p)
                }
            })
        } else if (r.includes("application/json")) {
            const u = await a.json()
              , f = [];
            l = by(u, {
                plugins: Ss
            }),
            await pf(f)
        }
        if (l || Nt(),
        l instanceof Error)
            throw l;
        return l
    }
    if (r.includes("application/json")) {
        const l = await a.json()
          , u = WS(l);
        if (u)
            throw u;
        if (dt(l))
            throw l;
        return l
    }
    if (!a.ok)
        throw new Error(await a.text());
    return a
}
async function _E({jsonStream: n, onMessage: a, onError: r}) {
    const l = n.getReader()
      , {value: u, done: f} = await l.read();
    if (f || !u)
        throw new Error("Stream ended before first object");
    const d = JSON.parse(u);
    let h = !1;
    const y = (async () => {
        try {
            for (; ; ) {
                const {value: g, done: _} = await l.read();
                if (_)
                    break;
                if (g)
                    try {
                        const x = [];
                        try {
                            a(JSON.parse(g))
                        } finally {}
                        await pf(x)
                    } catch (x) {
                        r?.(`Invalid JSON: ${g}`, x)
                    }
            }
        } catch (g) {
            h || r?.("Stream processing error:", g)
        }
    }
    )();
    let p;
    const v = [];
    try {
        p = a(d)
    } catch (g) {
        throw h = !0,
        l.cancel().catch( () => {}
        ),
        g
    }
    return await pf(v),
    Promise.resolve(p).catch( () => {
        h = !0,
        l.cancel().catch( () => {}
        )
    }
    ),
    y.finally( () => {
        try {
            l.releaseLock()
        } catch {}
    }
    ),
    p
}
function xE(n) {
    const a = "/_serverFn/" + n;
    return Object.assign( (...u) => {
        const f = pg()?.serverFns?.fetch;
        return vE(a, u, f ?? fetch)
    }
    , {
        url: a,
        serverFnMeta: {
            id: n
        },
        [ff]: !0
    })
}
var EE = {
    key: "$TSS/serverfn",
    test: n => typeof n != "function" || !(ff in n) ? !1 : !!n[ff],
    toSerializable: ({serverFnMeta: n}) => ({
        functionId: n.id
    }),
    fromSerializable: ({functionId: n}) => xE(n)
};
function Oy(n) {
    return n.replaceAll("\0", "/").replaceAll("�", "/")
}
function wE(n, a) {
    n.id = a.i,
    n.__beforeLoadContext = a.b,
    n.loaderData = a.l,
    n.status = a.s,
    n.ssr = a.ssr,
    n.updatedAt = a.u,
    n.error = a.e,
    a.g !== void 0 && (n.globalNotFound = a.g)
}
async function RE(n) {
    window.$_TSR || Nt();
    const a = n.options.serializationAdapters;
    if (a?.length) {
        const E = new Map;
        a.forEach(C => {
            E.set(C.key, C.fromSerializable)
        }
        ),
        window.$_TSR.t = E,
        window.$_TSR.buffer.forEach(C => C())
    }
    window.$_TSR.initialized = !0,
    window.$_TSR.router || Nt();
    const r = window.$_TSR.router;
    r.matches.forEach(E => {
        E.i = Oy(E.i)
    }
    ),
    r.lastMatchId && (r.lastMatchId = Oy(r.lastMatchId));
    const {manifest: l, dehydratedData: u, lastMatchId: f} = r;
    n.ssr = {
        manifest: l
    };
    const d = document.querySelector('meta[property="csp-nonce"]')?.content;
    n.options.ssr = {
        nonce: d
    };
    const h = n.matchRoutes(n.stores.location.get())
      , y = Promise.all(h.map(E => n.loadRouteChunk(n.looseRoutesById[E.routeId])));
    function p(E) {
        const C = n.looseRoutesById[E.routeId].options.pendingMinMs ?? n.options.defaultPendingMinMs;
        if (C) {
            const H = ii();
            E._nonReactive.minPendingPromise = H,
            E._forcePending = !0,
            setTimeout( () => {
                H.resolve(),
                n.updateMatch(E.id, Z => (Z._nonReactive.minPendingPromise = void 0,
                {
                    ...Z,
                    _forcePending: void 0
                }))
            }
            , C)
        }
    }
    function v(E) {
        const C = n.looseRoutesById[E.routeId];
        C && (C.options.ssr = E.ssr)
    }
    let g;
    h.forEach(E => {
        const C = r.matches.find(H => H.i === E.id);
        if (!C) {
            E._nonReactive.dehydrated = !1,
            E.ssr = !1,
            v(E);
            return
        }
        wE(E, C),
        v(E),
        E._nonReactive.dehydrated = E.ssr !== !1,
        (E.ssr === "data-only" || E.ssr === !1) && g === void 0 && (g = E.index,
        p(E))
    }
    ),
    n.stores.setMatches(h),
    await n.options.hydrate?.(u);
    const _ = n.stores.matches.get()
      , x = n.stores.location.get();
    await Promise.all(_.map(async E => {
        try {
            const C = n.looseRoutesById[E.routeId]
              , H = _[E.index - 1]?.context ?? n.options.context;
            if (C.options.context) {
                const J = {
                    deps: E.loaderDeps,
                    params: E.params,
                    context: H ?? {},
                    location: x,
                    navigate: Q => n.navigate({
                        ...Q,
                        _fromLocation: x
                    }),
                    buildLocation: n.buildLocation,
                    cause: E.cause,
                    abortController: E.abortController,
                    preload: !1,
                    matches: h,
                    routeId: C.id
                };
                E.__routeContext = C.options.context(J) ?? void 0
            }
            E.context = {
                ...H,
                ...E.__routeContext,
                ...E.__beforeLoadContext
            };
            const Z = {
                ssr: n.options.ssr,
                matches: _,
                match: E,
                params: E.params,
                loaderData: E.loaderData
            }
              , k = await C.options.head?.(Z)
              , I = await C.options.scripts?.(Z);
            E.meta = k?.meta,
            E.links = k?.links,
            E.headScripts = k?.scripts,
            E.styles = k?.styles,
            E.scripts = I
        } catch (C) {
            if (dt(C))
                E.error = {
                    isNotFound: !0
                },
                console.error(`NotFound error during hydration for routeId: ${E.routeId}`, C);
            else
                throw E.error = C,
                console.error(`Error during hydration for route ${E.routeId}:`, C),
                C
        }
    }
    ));
    const R = h[h.length - 1].id !== f;
    if (!h.some(E => E.ssr === !1) && !R)
        return h.forEach(E => {
            E._nonReactive.dehydrated = void 0
        }
        ),
        n.stores.resolvedLocation.set(n.stores.location.get()),
        y;
    const M = Promise.resolve().then( () => n.load()).catch(E => {
        console.error("Error during router hydration:", E)
    }
    );
    if (R) {
        const E = h[1];
        E || Nt(),
        p(E),
        E._displayPending = !0,
        E._nonReactive.displayPendingPromise = M,
        M.then( () => {
            n.batch( () => {
                n.stores.status.get() === "pending" && (n.stores.status.set("idle"),
                n.stores.resolvedLocation.set(n.stores.location.get())),
                n.updateMatch(E.id, C => ({
                    ...C,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            }
            )
        }
        )
    }
    return y
}
var lu = re.use
  , hs = typeof window < "u" ? re.useLayoutEffect : re.useEffect;
function ef(n) {
    const a = re.useRef({
        value: n,
        prev: null
    })
      , r = a.current.value;
    return n !== r && (a.current = {
        value: n,
        prev: r
    }),
    a.current.prev
}
function TE(n, a, r={}, l={}) {
    re.useEffect( () => {
        if (!n.current || l.disabled || typeof IntersectionObserver != "function")
            return;
        const u = new IntersectionObserver( ([f]) => {
            a(f)
        }
        ,r);
        return u.observe(n.current),
        () => {
            u.disconnect()
        }
    }
    , [a, r, l.disabled, n])
}
function AE(n) {
    const a = re.useRef(null);
    return re.useImperativeHandle(n, () => a.current, []),
    a
}
function OE({promise: n}) {
    if (lu)
        return lu(n);
    const a = S_(n);
    if (a[mn].status === "pending")
        throw a;
    if (a[mn].status === "error")
        throw a[mn].error;
    return a[mn].data
}
function CE(n) {
    const a = P.jsx(ME, {
        ...n
    });
    return n.fallback ? P.jsx(re.Suspense, {
        fallback: n.fallback,
        children: a
    }) : a
}
function ME(n) {
    const a = OE(n);
    return n.children(a)
}
function Lf(n) {
    const a = n.errorComponent ?? Uf;
    return P.jsx(zE, {
        getResetKey: n.getResetKey,
        onCatch: n.onCatch,
        children: ({error: r, reset: l}) => r ? re.createElement(a, {
            error: r,
            reset: l
        }) : n.children
    })
}
var zE = class extends re.Component {
    constructor(...n) {
        super(...n),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(n, a) {
        const r = n.getResetKey();
        return a.error && a.resetKey !== r ? {
            resetKey: r,
            error: null
        } : {
            resetKey: r
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(n, a) {
        this.props.onCatch && this.props.onCatch(n, a)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
}
;
function Uf({error: n}) {
    const [a,r] = re.useState(!1);
    return P.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [P.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [P.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), P.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => r(l => !l),
                children: a ? "Hide Error" : "Show Error"
            })]
        }), P.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), a ? P.jsx("div", {
            children: P.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: n.message ? P.jsx("code", {
                    children: n.message
                }) : null
            })
        }) : null]
    })
}
function DE({children: n, fallback: a=null}) {
    return Bf() ? P.jsx(ps.Fragment, {
        children: n
    }) : P.jsx(ps.Fragment, {
        children: a
    })
}
function Bf() {
    return ps.useSyncExternalStore(NE, () => !0, () => !1)
}
function NE() {
    return () => {}
}
var cv = re.createContext(null);
function bt(n) {
    return re.useContext(cv)
}
var Eu = re.createContext(void 0)
  , jE = re.createContext(void 0)
  , Ke = (n => (n[n.None = 0] = "None",
n[n.Mutable = 1] = "Mutable",
n[n.Watching = 2] = "Watching",
n[n.RecursedCheck = 4] = "RecursedCheck",
n[n.Recursed = 8] = "Recursed",
n[n.Dirty = 16] = "Dirty",
n[n.Pending = 32] = "Pending",
n))(Ke || {});
function LE({update: n, notify: a, unwatched: r}) {
    return {
        link: l,
        unlink: u,
        propagate: f,
        checkDirty: d,
        shallowPropagate: h
    };
    function l(p, v, g) {
        const _ = v.depsTail;
        if (_ !== void 0 && _.dep === p)
            return;
        const x = _ !== void 0 ? _.nextDep : v.deps;
        if (x !== void 0 && x.dep === p) {
            x.version = g,
            v.depsTail = x;
            return
        }
        const R = p.subsTail;
        if (R !== void 0 && R.version === g && R.sub === v)
            return;
        const M = v.depsTail = p.subsTail = {
            version: g,
            dep: p,
            sub: v,
            prevDep: _,
            nextDep: x,
            prevSub: R,
            nextSub: void 0
        };
        x !== void 0 && (x.prevDep = M),
        _ !== void 0 ? _.nextDep = M : v.deps = M,
        R !== void 0 ? R.nextSub = M : p.subs = M
    }
    function u(p, v=p.sub) {
        const g = p.dep
          , _ = p.prevDep
          , x = p.nextDep
          , R = p.nextSub
          , M = p.prevSub;
        return x !== void 0 ? x.prevDep = _ : v.depsTail = _,
        _ !== void 0 ? _.nextDep = x : v.deps = x,
        R !== void 0 ? R.prevSub = M : g.subsTail = M,
        M !== void 0 ? M.nextSub = R : (g.subs = R) === void 0 && r(g),
        x
    }
    function f(p) {
        let v = p.nextSub, g;
        e: do {
            const _ = p.sub;
            let x = _.flags;
            if (x & 60 ? x & 12 ? x & 4 ? !(x & 48) && y(p, _) ? (_.flags = x | 40,
            x &= 1) : x = 0 : _.flags = x & -9 | 32 : x = 0 : _.flags = x | 32,
            x & 2 && a(_),
            x & 1) {
                const R = _.subs;
                if (R !== void 0) {
                    const M = (p = R).nextSub;
                    M !== void 0 && (g = {
                        value: v,
                        prev: g
                    },
                    v = M);
                    continue
                }
            }
            if ((p = v) !== void 0) {
                v = p.nextSub;
                continue
            }
            for (; g !== void 0; )
                if (p = g.value,
                g = g.prev,
                p !== void 0) {
                    v = p.nextSub;
                    continue e
                }
            break
        } while (!0)
    }
    function d(p, v) {
        let g, _ = 0, x = !1;
        e: do {
            const R = p.dep
              , M = R.flags;
            if (v.flags & 16)
                x = !0;
            else if ((M & 17) === 17) {
                if (n(R)) {
                    const E = R.subs;
                    E.nextSub !== void 0 && h(E),
                    x = !0
                }
            } else if ((M & 33) === 33) {
                (p.nextSub !== void 0 || p.prevSub !== void 0) && (g = {
                    value: p,
                    prev: g
                }),
                p = R.deps,
                v = R,
                ++_;
                continue
            }
            if (!x) {
                const E = p.nextDep;
                if (E !== void 0) {
                    p = E;
                    continue
                }
            }
            for (; _--; ) {
                const E = v.subs
                  , C = E.nextSub !== void 0;
                if (C ? (p = g.value,
                g = g.prev) : p = E,
                x) {
                    if (n(v)) {
                        C && h(E),
                        v = p.sub;
                        continue
                    }
                    x = !1
                } else
                    v.flags &= -33;
                v = p.sub;
                const H = p.nextDep;
                if (H !== void 0) {
                    p = H;
                    continue e
                }
            }
            return x
        } while (!0)
    }
    function h(p) {
        do {
            const v = p.sub
              , g = v.flags;
            (g & 48) === 32 && (v.flags = g | 16,
            (g & 6) === 2 && a(v))
        } while ((p = p.nextSub) !== void 0)
    }
    function y(p, v) {
        let g = v.depsTail;
        for (; g !== void 0; ) {
            if (g === p)
                return !0;
            g = g.prevDep
        }
        return !1
    }
}
function UE(n, a, r) {
    const l = typeof n == "object"
      , u = l ? n : void 0;
    return {
        next: (l ? n.next : n)?.bind(u),
        error: (l ? n.error : a)?.bind(u),
        complete: (l ? n.complete : r)?.bind(u)
    }
}
const yf = [];
let tu = 0;
const {link: Cy, unlink: BE, propagate: kE, checkDirty: fv, shallowPropagate: My} = LE({
    update(n) {
        return n._update()
    },
    notify(n) {
        yf[gf++] = n,
        n.flags &= ~Ke.Watching
    },
    unwatched(n) {
        n.depsTail !== void 0 && (n.depsTail = void 0,
        n.flags = Ke.Mutable | Ke.Dirty,
        uu(n))
    }
});
let Kl = 0, gf = 0, hn, vf = 0;
function dv(n) {
    try {
        ++vf,
        n()
    } finally {
        --vf || hv()
    }
}
function uu(n) {
    const a = n.depsTail;
    let r = a !== void 0 ? a.nextDep : n.deps;
    for (; r !== void 0; )
        r = BE(r, n)
}
function hv() {
    if (!(vf > 0)) {
        for (; Kl < gf; ) {
            const n = yf[Kl];
            yf[Kl++] = void 0,
            n.notify()
        }
        Kl = 0,
        gf = 0
    }
}
function zy(n, a) {
    const r = typeof n == "function"
      , l = n
      , u = {
        _snapshot: r ? void 0 : n,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: r ? Ke.None : Ke.Mutable,
        get() {
            return hn !== void 0 && Cy(u, hn, tu),
            u._snapshot
        },
        subscribe(f) {
            const d = UE(f)
              , h = {
                current: !1
            }
              , y = HE( () => {
                u.get(),
                h.current ? d.next?.(u._snapshot) : h.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    y.stop()
                }
            }
        },
        _update(f) {
            const d = hn
              , h = a?.compare ?? Object.is;
            if (r)
                hn = u,
                ++tu,
                u.depsTail = void 0;
            else if (f === void 0)
                return !1;
            r && (u.flags = Ke.Mutable | Ke.RecursedCheck);
            try {
                const y = u._snapshot
                  , p = typeof f == "function" ? f(y) : f === void 0 && r ? l(y) : f;
                return y === void 0 || !h(y, p) ? (u._snapshot = p,
                !0) : !1
            } finally {
                hn = d,
                r && (u.flags &= ~Ke.RecursedCheck),
                uu(u)
            }
        }
    };
    return r ? (u.flags = Ke.Mutable | Ke.Dirty,
    u.get = function() {
        const f = u.flags;
        if (f & Ke.Dirty || f & Ke.Pending && fv(u.deps, u)) {
            if (u._update()) {
                const d = u.subs;
                d !== void 0 && My(d)
            }
        } else
            f & Ke.Pending && (u.flags = f & ~Ke.Pending);
        return hn !== void 0 && Cy(u, hn, tu),
        u._snapshot
    }
    ) : u.set = function(f) {
        if (u._update(f)) {
            const d = u.subs;
            d !== void 0 && (kE(d),
            My(d),
            hv())
        }
    }
    ,
    u
}
function HE(n) {
    const a = () => {
        const l = hn;
        hn = r,
        ++tu,
        r.depsTail = void 0,
        r.flags = Ke.Watching | Ke.RecursedCheck;
        try {
            return n()
        } finally {
            hn = l,
            r.flags &= ~Ke.RecursedCheck,
            uu(r)
        }
    }
      , r = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: Ke.Watching | Ke.RecursedCheck,
        notify() {
            const l = this.flags;
            l & Ke.Dirty || l & Ke.Pending && fv(this.deps, this) ? a() : this.flags = Ke.Watching
        },
        stop() {
            this.flags = Ke.None,
            this.depsTail = void 0,
            uu(this)
        }
    };
    return a(),
    r
}
var tf = {
    exports: {}
}
  , nf = {}
  , af = {
    exports: {}
}
  , rf = {};
var Dy;
function qE() {
    if (Dy)
        return rf;
    Dy = 1;
    var n = ws();
    function a(g, _) {
        return g === _ && (g !== 0 || 1 / g === 1 / _) || g !== g && _ !== _
    }
    var r = typeof Object.is == "function" ? Object.is : a
      , l = n.useState
      , u = n.useEffect
      , f = n.useLayoutEffect
      , d = n.useDebugValue;
    function h(g, _) {
        var x = _()
          , R = l({
            inst: {
                value: x,
                getSnapshot: _
            }
        })
          , M = R[0].inst
          , E = R[1];
        return f(function() {
            M.value = x,
            M.getSnapshot = _,
            y(M) && E({
                inst: M
            })
        }, [g, x, _]),
        u(function() {
            return y(M) && E({
                inst: M
            }),
            g(function() {
                y(M) && E({
                    inst: M
                })
            })
        }, [g]),
        d(x),
        x
    }
    function y(g) {
        var _ = g.getSnapshot;
        g = g.value;
        try {
            var x = _();
            return !r(g, x)
        } catch {
            return !0
        }
    }
    function p(g, _) {
        return _()
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
    return rf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v,
    rf
}
var Ny;
function ZE() {
    return Ny || (Ny = 1,
    af.exports = qE()),
    af.exports
}
var jy;
function VE() {
    if (jy)
        return nf;
    jy = 1;
    var n = ws()
      , a = ZE();
    function r(p, v) {
        return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v
    }
    var l = typeof Object.is == "function" ? Object.is : r
      , u = a.useSyncExternalStore
      , f = n.useRef
      , d = n.useEffect
      , h = n.useMemo
      , y = n.useDebugValue;
    return nf.useSyncExternalStoreWithSelector = function(p, v, g, _, x) {
        var R = f(null);
        if (R.current === null) {
            var M = {
                hasValue: !1,
                value: null
            };
            R.current = M
        } else
            M = R.current;
        R = h(function() {
            function C(J) {
                if (!H) {
                    if (H = !0,
                    Z = J,
                    J = _(J),
                    x !== void 0 && M.hasValue) {
                        var Q = M.value;
                        if (x(Q, J))
                            return k = Q
                    }
                    return k = J
                }
                if (Q = k,
                l(Z, J))
                    return Q;
                var G = _(J);
                return x !== void 0 && x(Q, G) ? (Z = J,
                Q) : (Z = J,
                k = G)
            }
            var H = !1, Z, k, I = g === void 0 ? null : g;
            return [function() {
                return C(v())
            }
            , I === null ? void 0 : function() {
                return C(I())
            }
            ]
        }, [v, g, _, x]);
        var E = u(p, R[0], R[1]);
        return d(function() {
            M.hasValue = !0,
            M.value = E
        }, [E]),
        y(E),
        E
    }
    ,
    nf
}
var Ly;
function YE() {
    return Ly || (Ly = 1,
    tf.exports = VE()),
    tf.exports
}
var QE = YE();
function GE(n, a) {
    return n === a
}
function st(n, a, r=GE) {
    const l = re.useCallback(d => {
        if (!n)
            return () => {}
            ;
        const {unsubscribe: h} = n.subscribe(d);
        return h
    }
    , [n])
      , u = re.useCallback( () => n?.get(), [n]);
    return QE.useSyncExternalStoreWithSelector(l, u, u, a, r)
}
var XE = {
    get: () => {}
    ,
    subscribe: () => ({
        unsubscribe: () => {}
    })
};
function oi(n) {
    const a = bt()
      , r = re.useContext(n.from ? jE : Eu)
      , l = n.from ?? r
      , u = l ? n.from ? a.stores.getRouteMatchStore(l) : a.stores.matchStores.get(l) : void 0
      , f = re.useRef(void 0);
    return st(u ?? XE, d => {
        if ((n.shouldThrow ?? !0) && !d && Nt(),
        d === void 0)
            return;
        const h = n.select ? n.select(d) : d;
        if (n.structuralSharing ?? a.options.defaultStructuralSharing) {
            const y = Wa(f.current, h);
            return f.current = y,
            y
        }
        return h
    }
    )
}
function mv(n) {
    return oi({
        from: n.from,
        strict: n.strict,
        structuralSharing: n.structuralSharing,
        select: a => n.select ? n.select(a.loaderData) : a.loaderData
    })
}
function pv(n) {
    const {select: a, ...r} = n;
    return oi({
        ...r,
        select: l => a ? a(l.loaderDeps) : l.loaderDeps
    })
}
function yv(n) {
    return oi({
        from: n.from,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        strict: n.strict,
        select: a => {
            const r = n.strict === !1 ? a.params : a._strictParams;
            return n.select ? n.select(r) : r
        }
    })
}
function gv(n) {
    return oi({
        from: n.from,
        strict: n.strict,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        select: a => n.select ? n.select(a.search) : a.search
    })
}
function vv(n) {
    const a = bt();
    return re.useCallback(r => a.navigate({
        ...r,
        from: r.from ?? n?.from
    }), [n?.from, a])
}
function bv(n) {
    return oi({
        ...n,
        select: a => n.select ? n.select(a.context) : a.context
    })
}
var PE = mg();
function KE(n, a) {
    const r = bt()
      , l = AE(a)
      , {activeProps: u, inactiveProps: f, activeOptions: d, to: h, preload: y, preloadDelay: p, preloadIntentProximity: v, hashScrollIntoView: g, replace: _, startTransition: x, resetScroll: R, viewTransition: M, children: E, target: C, disabled: H, style: Z, className: k, onClick: I, onBlur: J, onFocus: Q, onMouseEnter: G, onMouseLeave: $, onTouchStart: ce, ignoreBlocker: se, params: _e, search: je, hash: Ie, state: Qe, mask: U, reloadDocument: K, unsafeRelative: oe, from: ze, _fromLocation: Ne, ...O} = n
      , V = Bf()
      , F = re.useMemo( () => n, [r, n.from, n._fromLocation, n.hash, n.to, n.search, n.params, n.state, n.mask, n.unsafeRelative])
      , W = st(r.stores.location, Ye => Ye, (Ye, ht) => Ye.href === ht.href)
      , le = re.useMemo( () => {
        const Ye = {
            _fromLocation: W,
            ...F
        };
        return r.buildLocation(Ye)
    }
    , [r, W, F])
      , ge = le.maskedLocation ? le.maskedLocation.publicHref : le.publicHref
      , Re = le.maskedLocation ? le.maskedLocation.external : le.external
      , $e = re.useMemo( () => ew(ge, Re, r.history, H), [H, Re, ge, r.history])
      , qe = re.useMemo( () => {
        if ($e?.external)
            return nu($e.href, r.protocolAllowlist) ? void 0 : $e.href;
        if (!tw(h) && !(typeof h != "string" || h.indexOf(":") === -1))
            try {
                return new URL(h),
                nu(h, r.protocolAllowlist) ? void 0 : h
            } catch {}
    }
    , [h, $e, r.protocolAllowlist])
      , yn = re.useMemo( () => {
        if (qe)
            return !1;
        if (d?.exact) {
            if (!kS(W.pathname, le.pathname, r.basepath))
                return !1
        } else {
            const Ye = au(W.pathname, r.basepath)
              , ht = au(le.pathname, r.basepath);
            if (!(Ye.startsWith(ht) && (Ye.length === ht.length || Ye[ht.length] === "/")))
                return !1
        }
        return (d?.includeSearch ?? !0) && !zt(W.search, le.search, {
            partial: !d?.exact,
            ignoreUndefined: !d?.explicitUndefined
        }) ? !1 : d?.includeHash ? V && W.hash === le.hash : !0
    }
    , [d?.exact, d?.explicitUndefined, d?.includeHash, d?.includeSearch, W, qe, V, le.hash, le.pathname, le.search, r.basepath])
      , gn = yn ? _a(u, {}) ?? FE : sf
      , Qn = yn ? sf : _a(f, {}) ?? sf
      , cr = [k, gn.className, Qn.className].filter(Boolean).join(" ")
      , ln = (Z || gn.style || Qn.style) && {
        ...Z,
        ...gn.style,
        ...Qn.style
    }
      , [fr,ci] = re.useState(!1)
      , Ts = re.useRef(!1)
      , vn = n.reloadDocument || qe ? !1 : y ?? r.options.defaultPreload
      , Na = p ?? r.options.defaultPreloadDelay ?? 0
      , tn = re.useCallback( () => {
        r.preloadRoute({
            ...F,
            _builtLocation: le
        }).catch(Ye => {
            console.warn(Ye),
            console.warn(__)
        }
        )
    }
    , [r, F, le]);
    TE(l, re.useCallback(Ye => {
        Ye?.isIntersecting && tn()
    }
    , [tn]), WE, {
        disabled: !!H || vn !== "viewport"
    }),
    re.useEffect( () => {
        Ts.current || !H && vn === "render" && (tn(),
        Ts.current = !0)
    }
    , [H, tn, vn]);
    const dr = Ye => {
        const ht = Ye.currentTarget.getAttribute("target")
          , un = C !== void 0 ? C : ht;
        if (!H && !nw(Ye) && !Ye.defaultPrevented && (!un || un === "_self") && Ye.button === 0) {
            Ye.preventDefault(),
            PE.flushSync( () => {
                ci(!0)
            }
            );
            const fi = r.subscribe("onResolved", () => {
                fi(),
                ci(!1)
            }
            );
            r.navigate({
                ...F,
                replace: _,
                resetScroll: R,
                hashScrollIntoView: g,
                startTransition: x,
                viewTransition: M,
                ignoreBlocker: se
            })
        }
    }
    ;
    if (qe)
        return {
            ...O,
            ref: l,
            href: qe,
            ...E && {
                children: E
            },
            ...C && {
                target: C
            },
            ...H && {
                disabled: H
            },
            ...Z && {
                style: Z
            },
            ...k && {
                className: k
            },
            ...I && {
                onClick: I
            },
            ...J && {
                onBlur: J
            },
            ...Q && {
                onFocus: Q
            },
            ...G && {
                onMouseEnter: G
            },
            ...$ && {
                onMouseLeave: $
            },
            ...ce && {
                onTouchStart: ce
            }
        };
    const As = Ye => {
        if (H || vn !== "intent")
            return;
        if (!Na) {
            tn();
            return
        }
        const ht = Ye.currentTarget;
        if (ds.has(ht))
            return;
        const un = setTimeout( () => {
            ds.delete(ht),
            tn()
        }
        , Na);
        ds.set(ht, un)
    }
      , Au = Ye => {
        H || vn !== "intent" || tn()
    }
      , St = Ye => {
        if (H || !vn || !Na)
            return;
        const ht = Ye.currentTarget
          , un = ds.get(ht);
        un && (clearTimeout(un),
        ds.delete(ht))
    }
    ;
    return {
        ...O,
        ...gn,
        ...Qn,
        href: $e?.href,
        ref: l,
        onClick: Ji([I, dr]),
        onBlur: Ji([J, St]),
        onFocus: Ji([Q, As]),
        onMouseEnter: Ji([G, As]),
        onMouseLeave: Ji([$, St]),
        onTouchStart: Ji([ce, Au]),
        disabled: !!H,
        target: C,
        ...ln && {
            style: ln
        },
        ...cr && {
            className: cr
        },
        ...H && JE,
        ...yn && IE,
        ...V && fr && $E
    }
}
var sf = {}
  , FE = {
    className: "active"
}
  , JE = {
    role: "link",
    "aria-disabled": !0
}
  , IE = {
    "data-status": "active",
    "aria-current": "page"
}
  , $E = {
    "data-transitioning": "transitioning"
}
  , ds = new WeakMap
  , WE = {
    rootMargin: "100px"
}
  , Ji = n => a => {
    for (const r of n)
        if (r) {
            if (a.defaultPrevented)
                return;
            r(a)
        }
}
;
function ew(n, a, r, l) {
    if (!l)
        return a ? {
            href: n,
            external: !0
        } : {
            href: r.createHref(n) || "/",
            external: !1
        }
}
function tw(n) {
    if (typeof n != "string")
        return !1;
    const a = n.charCodeAt(0);
    return a === 47 ? n.charCodeAt(1) !== 47 : a === 46
}
var kf = re.forwardRef( (n, a) => {
    const {_asChild: r, ...l} = n
      , {type: u, ...f} = KE(l, a)
      , d = typeof l.children == "function" ? l.children({
        isActive: f["data-status"] === "active"
    }) : l.children;
    if (!r) {
        const {disabled: h, ...y} = f;
        return re.createElement("a", y, d)
    }
    return re.createElement(r, f, d)
}
);
function nw(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
var aw = class extends Og {
    constructor(a) {
        super(a),
        this.useMatch = r => oi({
            select: r?.select,
            from: this.id,
            structuralSharing: r?.structuralSharing
        }),
        this.useRouteContext = r => bv({
            ...r,
            from: this.id
        }),
        this.useSearch = r => gv({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useParams = r => yv({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = r => pv({
            ...r,
            from: this.id
        }),
        this.useLoaderData = r => mv({
            ...r,
            from: this.id
        }),
        this.useNavigate = () => vv({
            from: this.fullPath
        }),
        this.Link = ps.forwardRef( (r, l) => P.jsx(kf, {
            ref: l,
            from: this.fullPath,
            ...r
        }))
    }
}
;
function iw(n) {
    return new aw(n)
}
function rw() {
    return n => lw(n)
}
var sw = class extends R_ {
    constructor(n) {
        super(n),
        this.useMatch = a => oi({
            select: a?.select,
            from: this.id,
            structuralSharing: a?.structuralSharing
        }),
        this.useRouteContext = a => bv({
            ...a,
            from: this.id
        }),
        this.useSearch = a => gv({
            select: a?.select,
            structuralSharing: a?.structuralSharing,
            from: this.id
        }),
        this.useParams = a => yv({
            select: a?.select,
            structuralSharing: a?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = a => pv({
            ...a,
            from: this.id
        }),
        this.useLoaderData = a => mv({
            ...a,
            from: this.id
        }),
        this.useNavigate = () => vv({
            from: this.fullPath
        }),
        this.Link = ps.forwardRef( (a, r) => P.jsx(kf, {
            ref: r,
            from: this.fullPath,
            ...a
        }))
    }
}
;
function lw(n) {
    return new sw(n)
}
function Hf(n) {
    return new uw(n,{
        silent: !0
    }).createRoute
}
var uw = class {
    constructor(n, a) {
        this.path = n,
        this.createRoute = r => {
            const l = iw(r);
            return l.isRoot = !1,
            l
        }
        ,
        this.silent = a?.silent
    }
}
;
function ou(n, a) {
    let r, l, u, f;
    const d = () => (r || (r = n().then(y => {
        r = void 0,
        l = y[a ?? "default"]
    }
    ).catch(y => {
        if (u = y,
        bS(u) && u instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
            const p = `tanstack_router_reload:${u.message}`;
            sessionStorage.getItem(p) || (sessionStorage.setItem(p, "1"),
            f = !0)
        }
    }
    )),
    r)
      , h = function(p) {
        if (f)
            throw window.location.reload(),
            new Promise( () => {}
            );
        if (u)
            throw u;
        if (!l)
            if (lu)
                lu(d());
            else
                throw d();
        return re.createElement(l, p)
    };
    return h.preload = d,
    h
}
function ow(n) {
    const a = bt()
      , r = `not-found-${st(a.stores.location, l => l.pathname)}-${st(a.stores.status, l => l)}`;
    return P.jsx(Lf, {
        getResetKey: () => r,
        onCatch: (l, u) => {
            if (dt(l))
                n.onCatch?.(l, u);
            else
                throw l
        }
        ,
        errorComponent: ({error: l}) => {
            if (dt(l))
                return n.fallback?.(l);
            throw l
        }
        ,
        children: n.children
    })
}
function cw() {
    return P.jsx("p", {
        children: "Not Found"
    })
}
function Ii(n) {
    return P.jsx(P.Fragment, {
        children: n.children
    })
}
function Sv(n, a, r) {
    return a.options.notFoundComponent ? P.jsx(a.options.notFoundComponent, {
        ...r
    }) : n.options.defaultNotFoundComponent ? P.jsx(n.options.defaultNotFoundComponent, {
        ...r
    }) : P.jsx(cw, {})
}
function fw(n) {
    return null
}
function dw() {
    return fw(bt()),
    null
}
var _v = re.memo(function({matchId: a}) {
    const r = bt()
      , l = r.stores.matchStores.get(a);
    l || Nt();
    const u = st(r.stores.loadedAt, d => d)
      , f = st(l, d => d);
    return P.jsx(hw, {
        router: r,
        matchId: a,
        resetKey: u,
        matchState: re.useMemo( () => {
            const d = f.routeId
              , h = r.routesById[d].parentRoute?.id;
            return {
                routeId: d,
                ssr: f.ssr,
                _displayPending: f._displayPending,
                parentRouteId: h
            }
        }
        , [f._displayPending, f.routeId, f.ssr, r.routesById])
    })
});
function hw({router: n, matchId: a, resetKey: r, matchState: l}) {
    const u = n.routesById[l.routeId]
      , f = u.options.pendingComponent ?? n.options.defaultPendingComponent
      , d = f ? P.jsx(f, {}) : null
      , h = u.options.errorComponent ?? n.options.defaultErrorComponent
      , y = u.options.onCatch ?? n.options.defaultOnCatch
      , p = u.isRoot ? u.options.notFoundComponent ?? n.options.notFoundRoute?.options.component : u.options.notFoundComponent
      , v = l.ssr === !1 || l.ssr === "data-only"
      , g = (!u.isRoot || u.options.wrapInSuspense || v) && (u.options.wrapInSuspense ?? f ?? (u.options.errorComponent?.preload || v)) ? re.Suspense : Ii
      , _ = h ? Lf : Ii
      , x = p ? ow : Ii;
    return P.jsxs(u.isRoot ? u.options.shellComponent ?? Ii : Ii, {
        children: [P.jsx(Eu.Provider, {
            value: a,
            children: P.jsx(g, {
                fallback: d,
                children: P.jsx(_, {
                    getResetKey: () => r,
                    errorComponent: h || Uf,
                    onCatch: (R, M) => {
                        if (dt(R))
                            throw R.routeId ??= l.routeId,
                            R;
                        y?.(R, M)
                    }
                    ,
                    children: P.jsx(x, {
                        fallback: R => {
                            if (R.routeId ??= l.routeId,
                            !p || R.routeId && R.routeId !== l.routeId || !R.routeId && !u.isRoot)
                                throw R;
                            return re.createElement(p, R)
                        }
                        ,
                        children: v || l._displayPending ? P.jsx(DE, {
                            fallback: d,
                            children: P.jsx(Uy, {
                                matchId: a
                            })
                        }) : P.jsx(Uy, {
                            matchId: a
                        })
                    })
                })
            })
        }), l.parentRouteId === ni ? P.jsxs(P.Fragment, {
            children: [P.jsx(mw, {
                resetKey: r
            }), n.options.scrollRestoration && yg ? P.jsx(dw, {}) : null]
        }) : null]
    })
}
function mw({resetKey: n}) {
    const a = bt()
      , r = re.useRef(void 0);
    return hs( () => {
        const l = a.latestLocation.href;
        (r.current === void 0 || r.current !== l) && (a.emit({
            type: "onRendered",
            ...tr(a.stores.location.get(), a.stores.resolvedLocation.get())
        }),
        r.current = l)
    }
    , [a.latestLocation.state.__TSR_key, n, a]),
    null
}
var Uy = re.memo(function({matchId: a}) {
    const r = bt()
      , l = (v, g) => r.getMatch(v.id)?._nonReactive[g] ?? v._nonReactive[g]
      , u = r.stores.matchStores.get(a);
    u || Nt();
    const f = st(u, v => v)
      , d = f.routeId
      , h = r.routesById[d]
      , y = re.useMemo( () => {
        const v = (r.routesById[d].options.remountDeps ?? r.options.defaultRemountDeps)?.({
            routeId: d,
            loaderDeps: f.loaderDeps,
            params: f._strictParams,
            search: f._strictSearch
        });
        return v ? JSON.stringify(v) : void 0
    }
    , [d, f.loaderDeps, f._strictParams, f._strictSearch, r.options.defaultRemountDeps, r.routesById])
      , p = re.useMemo( () => {
        const v = h.options.component ?? r.options.defaultComponent;
        return v ? P.jsx(v, {}, y) : P.jsx(xv, {})
    }
    , [y, h.options.component, r.options.defaultComponent]);
    if (f._displayPending)
        throw l(f, "displayPendingPromise");
    if (f._forcePending)
        throw l(f, "minPendingPromise");
    if (f.status === "pending") {
        const v = h.options.pendingMinMs ?? r.options.defaultPendingMinMs;
        if (v) {
            const g = r.getMatch(f.id);
            if (g && !g._nonReactive.minPendingPromise) {
                const _ = ii();
                g._nonReactive.minPendingPromise = _,
                setTimeout( () => {
                    _.resolve(),
                    g._nonReactive.minPendingPromise = void 0
                }
                , v)
            }
        }
        throw l(f, "loadPromise")
    }
    if (f.status === "notFound")
        return dt(f.error) || Nt(),
        Sv(r, h, f.error);
    if (f.status === "redirected")
        throw Dt(f.error) || Nt(),
        l(f, "loadPromise");
    if (f.status === "error")
        throw f.error;
    return p
})
  , xv = re.memo(function() {
    const a = bt()
      , r = re.useContext(Eu);
    let l, u = !1, f;
    {
        const p = r ? a.stores.matchStores.get(r) : void 0;
        [l,u] = st(p, v => [v?.routeId, v?.globalNotFound ?? !1]),
        f = st(a.stores.matchesId, v => v[v.findIndex(g => g === r) + 1])
    }
    const d = l ? a.routesById[l] : void 0
      , h = a.options.defaultPendingComponent ? P.jsx(a.options.defaultPendingComponent, {}) : null;
    if (u)
        return d || Nt(),
        Sv(a, d, void 0);
    if (!f)
        return null;
    const y = P.jsx(_v, {
        matchId: f
    });
    return l === ni ? P.jsx(re.Suspense, {
        fallback: h,
        children: y
    }) : y
});
function pw() {
    const n = bt()
      , a = re.useRef({
        router: n,
        mounted: !1
    })
      , [r,l] = re.useState(!1)
      , u = st(n.stores.isLoading, g => g)
      , f = st(n.stores.hasPending, g => g)
      , d = ef(u)
      , h = u || r || f
      , y = ef(h)
      , p = u || f
      , v = ef(p);
    return n.startTransition = g => {
        l(!0),
        re.startTransition( () => {
            g(),
            l(!1)
        }
        )
    }
    ,
    re.useEffect( () => {
        const g = n.history.subscribe(n.load)
          , _ = n.buildLocation({
            to: n.latestLocation.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        return wa(n.latestLocation.publicHref) !== wa(_.publicHref) && n.commitLocation({
            ..._,
            replace: !0
        }),
        () => {
            g()
        }
    }
    , [n, n.history]),
    hs( () => {
        if (typeof window < "u" && n.ssr || a.current.router === n && a.current.mounted)
            return;
        a.current = {
            router: n,
            mounted: !0
        },
        (async () => {
            try {
                await n.load()
            } catch (_) {
                console.error(_)
            }
        }
        )()
    }
    , [n]),
    hs( () => {
        d && !u && n.emit({
            type: "onLoad",
            ...tr(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }
    , [d, n, u]),
    hs( () => {
        v && !p && n.emit({
            type: "onBeforeRouteMount",
            ...tr(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }
    , [p, v, n]),
    hs( () => {
        if (y && !h) {
            const g = tr(n.stores.location.get(), n.stores.resolvedLocation.get());
            n.emit({
                type: "onResolved",
                ...g
            }),
            dv( () => {
                n.stores.status.set("idle"),
                n.stores.resolvedLocation.set(n.stores.location.get())
            }
            ),
            g.hrefChanged && T_(n)
        }
    }
    , [h, y, n]),
    null
}
function yw() {
    const n = bt()
      , a = n.routesById[ni].options.pendingComponent ?? n.options.defaultPendingComponent
      , r = a ? P.jsx(a, {}) : null
      , l = P.jsxs(typeof document < "u" && n.ssr ? Ii : re.Suspense, {
        fallback: r,
        children: [P.jsx(pw, {}), P.jsx(gw, {})]
    });
    return n.options.InnerWrap ? P.jsx(n.options.InnerWrap, {
        children: l
    }) : l
}
function gw() {
    const n = bt()
      , a = st(n.stores.firstId, u => u)
      , r = st(n.stores.loadedAt, u => u)
      , l = a ? P.jsx(_v, {
        matchId: a
    }) : null;
    return P.jsx(Eu.Provider, {
        value: a,
        children: n.options.disableGlobalCatchBoundary ? l : P.jsx(Lf, {
            getResetKey: () => r,
            errorComponent: Uf,
            onCatch: void 0,
            children: l
        })
    })
}
var vw = n => ({
    createMutableStore: zy,
    createReadonlyStore: zy,
    batch: dv
})
  , bw = n => new Sw(n)
  , Sw = class extends h_ {
    constructor(n) {
        super(n, vw)
    }
}
;
function _w({router: n, children: a, ...r}) {
    Object.keys(r).length > 0 && n.update({
        ...n.options,
        ...r,
        context: {
            ...n.options.context,
            ...r.context
        }
    });
    const l = P.jsx(cv.Provider, {
        value: n,
        children: a
    });
    return n.options.Wrap ? P.jsx(n.options.Wrap, {
        children: l
    }) : l
}
function xw({router: n, ...a}) {
    return P.jsx(_w, {
        router: n,
        ...a,
        children: P.jsx(yw, {})
    })
}
function Ev(n) {
    const {attrs: a, children: r, nonce: l} = n;
    switch (n.tag) {
    case "title":
        return P.jsx("title", {
            ...a,
            suppressHydrationWarning: !0,
            children: r
        });
    case "meta":
        return P.jsx("meta", {
            ...a,
            suppressHydrationWarning: !0
        });
    case "link":
        return P.jsx("link", {
            ...a,
            precedence: a?.precedence ?? (a?.rel === "stylesheet" ? "default" : void 0),
            nonce: l,
            suppressHydrationWarning: !0
        });
    case "style":
        return n.inlineCss,
        P.jsx("style", {
            ...a,
            dangerouslySetInnerHTML: {
                __html: r
            },
            nonce: l
        });
    case "script":
        return P.jsx(Ew, {
            attrs: a,
            children: r
        });
    default:
        return null
    }
}
function Ew({attrs: n, children: a}) {
    bt();
    const r = Bf()
      , l = typeof n?.type == "string" && n.type !== "" && n.type !== "text/javascript" && n.type !== "module";
    if (re.useEffect( () => {
        if (!l) {
            if (n?.src) {
                const u = ( () => {
                    try {
                        const d = document.baseURI || window.location.href;
                        return new URL(n.src,d).href
                    } catch {
                        return n.src
                    }
                }
                )();
                if (Array.from(document.querySelectorAll("script[src]")).find(d => d.src === u))
                    return;
                const f = document.createElement("script");
                for (const [d,h] of Object.entries(n))
                    d !== "suppressHydrationWarning" && h !== void 0 && h !== !1 && f.setAttribute(d, typeof h == "boolean" ? "" : String(h));
                return document.head.appendChild(f),
                () => {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }
            if (typeof a == "string") {
                const u = typeof n?.type == "string" ? n.type : "text/javascript"
                  , f = typeof n?.nonce == "string" ? n.nonce : void 0;
                if (Array.from(document.querySelectorAll("script:not([src])")).find(h => {
                    if (!(h instanceof HTMLScriptElement))
                        return !1;
                    const y = h.getAttribute("type") ?? "text/javascript"
                      , p = h.getAttribute("nonce") ?? void 0;
                    return h.textContent === a && y === u && p === f
                }
                ))
                    return;
                const d = document.createElement("script");
                if (d.textContent = a,
                n)
                    for (const [h,y] of Object.entries(n))
                        h !== "suppressHydrationWarning" && y !== void 0 && y !== !1 && d.setAttribute(h, typeof y == "boolean" ? "" : String(y));
                return document.head.appendChild(d),
                () => {
                    d.parentNode && d.parentNode.removeChild(d)
                }
            }
        }
    }
    , [n, a, l]),
    l && typeof a == "string")
        return P.jsx("script", {
            ...n,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: a
            }
        });
    if (!r) {
        if (n?.src)
            return P.jsx("script", {
                ...n,
                suppressHydrationWarning: !0
            });
        if (typeof a == "string")
            return P.jsx("script", {
                ...n,
                dangerouslySetInnerHTML: {
                    __html: a
                },
                suppressHydrationWarning: !0
            })
    }
    return null
}
var ww = n => {
    const a = bt()
      , r = a.options.ssr?.nonce
      , l = st(a.stores.matches, p => p.map(v => v.meta).filter(Boolean), zt)
      , u = re.useMemo( () => {
        const p = []
          , v = {};
        let g;
        for (let _ = l.length - 1; _ >= 0; _--) {
            const x = l[_];
            for (let R = x.length - 1; R >= 0; R--) {
                const M = x[R];
                if (M)
                    if (M.title)
                        g || (g = {
                            tag: "title",
                            children: M.title
                        });
                    else if ("script:ld+json"in M)
                        try {
                            const E = JSON.stringify(M["script:ld+json"]);
                            p.push({
                                tag: "script",
                                attrs: {
                                    type: "application/ld+json"
                                },
                                children: wS(E)
                            })
                        } catch {}
                    else {
                        const E = M.name ?? M.property;
                        if (E) {
                            if (v[E])
                                continue;
                            v[E] = !0
                        }
                        p.push({
                            tag: "meta",
                            attrs: {
                                ...M,
                                nonce: r
                            }
                        })
                    }
            }
        }
        return g && p.push(g),
        r && p.push({
            tag: "meta",
            attrs: {
                property: "csp-nonce",
                content: r
            }
        }),
        p.reverse(),
        p
    }
    , [l, r])
      , f = st(a.stores.matches, p => {
        const v = p.map(x => x.links).filter(Boolean).flat(1).map(x => ({
            tag: "link",
            attrs: {
                ...x,
                nonce: r
            }
        }))
          , g = a.ssr?.manifest
          , _ = p.map(x => g?.routes[x.routeId]?.assets ?? []).filter(Boolean).flat(1).flatMap(x => x.tag === "link" ? w_(g, x) ? [] : [{
            tag: "link",
            attrs: {
                ...x.attrs,
                crossOrigin: py(n, "stylesheet") ?? x.attrs?.crossOrigin,
                suppressHydrationWarning: !0,
                nonce: r
            }
        }] : x.tag === "style" ? [{
            tag: "style",
            attrs: {
                ...x.attrs,
                nonce: r
            },
            children: x.children,
            ...x.inlineCss ? {
                inlineCss: !0
            } : {}
        }] : []);
        return [...v, ..._]
    }
    , zt)
      , d = st(a.stores.matches, p => {
        const v = [];
        return p.map(g => a.looseRoutesById[g.routeId]).forEach(g => a.ssr?.manifest?.routes[g.id]?.preloads?.filter(Boolean).forEach(_ => {
            const x = x_(_);
            v.push({
                tag: "link",
                attrs: {
                    rel: "modulepreload",
                    href: x.href,
                    crossOrigin: py(n, "modulepreload") ?? x.crossOrigin,
                    nonce: r
                }
            })
        }
        )),
        v
    }
    , zt)
      , h = st(a.stores.matches, p => p.map(v => v.styles).flat(1).filter(Boolean).map( ({children: v, ...g}) => ({
        tag: "style",
        attrs: {
            ...g,
            nonce: r
        },
        children: v
    })), zt)
      , y = st(a.stores.matches, p => p.map(v => v.headScripts).flat(1).filter(Boolean).map( ({children: v, ...g}) => ({
        tag: "script",
        attrs: {
            ...g,
            nonce: r
        },
        children: v
    })), zt);
    return Rw([...u, ...d, ...f, ...h, ...y], p => JSON.stringify(p))
}
;
function Rw(n, a) {
    const r = new Set;
    return n.filter(l => {
        const u = a(l);
        return r.has(u) ? !1 : (r.add(u),
        !0)
    }
    )
}
function Tw(n) {
    const a = ww(n.assetCrossOrigin)
      , r = bt().options.ssr?.nonce;
    return P.jsx(P.Fragment, {
        children: a.map(l => re.createElement(Ev, {
            ...l,
            key: `tsr-meta-${JSON.stringify(l)}`,
            nonce: r
        }))
    })
}
var Aw = () => {
    const n = bt()
      , a = n.options.ssr?.nonce
      , r = f => {
        const d = []
          , h = n.ssr?.manifest;
        return h ? (f.map(y => n.looseRoutesById[y.routeId]).forEach(y => h.routes[y.id]?.assets?.filter(p => p.tag === "script").forEach(p => {
            d.push({
                tag: "script",
                attrs: {
                    ...p.attrs,
                    nonce: a
                },
                children: p.children
            })
        }
        )),
        d) : []
    }
      , l = f => f.map(d => d.scripts).flat(1).filter(Boolean).map( ({children: d, ...h}) => ({
        tag: "script",
        attrs: {
            ...h,
            suppressHydrationWarning: !0,
            nonce: a
        },
        children: d
    }))
      , u = st(n.stores.matches, r, zt);
    return Ow(n, st(n.stores.matches, l, zt), u)
}
;
function Ow(n, a, r) {
    let l;
    n.serverSsr && (l = n.serverSsr.takeBufferedScripts());
    const u = [...a, ...r];
    return l && u.unshift(l),
    P.jsx(P.Fragment, {
        children: u.map( (f, d) => re.createElement(Ev, {
            ...f,
            key: `tsr-scripts-${f.tag}-${d}`
        }))
    })
}
var er = (n, a) => {
    const r = {
        type: "request",
        ...a || n
    };
    return {
        options: r,
        middleware: l => er({}, Object.assign(r, {
            middleware: l
        })),
        inputValidator: l => er({}, Object.assign(r, {
            inputValidator: l
        })),
        client: l => er({}, Object.assign(r, {
            client: l
        })),
        server: l => er({}, Object.assign(r, {
            server: l
        }))
    }
}
;
function wv(n, a) {
    for (let r = 0, l = a.length; r < l; r++) {
        const u = a[r];
        n.has(u) || (n.add(u),
        u.extends && wv(n, u.extends))
    }
}
var Cw = n => ({
    getOptions: async () => {
        const a = await n();
        if (a.serializationAdapters) {
            const r = new Set;
            wv(r, a.serializationAdapters),
            a.serializationAdapters = Array.from(r)
        }
        return a
    }
    ,
    createMiddleware: er
});
const Mw = er()
  , By = Cw( () => ({
    requestMiddleware: [Mw]
}));
var wu = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(n) {
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , zw = class extends wu {
    #e;
    #n;
    #t;
    constructor() {
        super(),
        this.#t = n => {
            if (typeof window < "u" && window.addEventListener) {
                const a = () => n();
                return window.addEventListener("visibilitychange", a, !1),
                () => {
                    window.removeEventListener("visibilitychange", a)
                }
            }
        }
    }
    onSubscribe() {
        this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#n?.(),
        this.#n = void 0)
    }
    setEventListener(n) {
        this.#t = n,
        this.#n?.(),
        this.#n = n(a => {
            typeof a == "boolean" ? this.setFocused(a) : this.onFocus()
        }
        )
    }
    setFocused(n) {
        this.#e !== n && (this.#e = n,
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(a => {
            a(n)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Rv = new zw
  , Dw = {
    setTimeout: (n, a) => setTimeout(n, a),
    clearTimeout: n => clearTimeout(n),
    setInterval: (n, a) => setInterval(n, a),
    clearInterval: n => clearInterval(n)
}
  , Nw = class {
    #e = Dw;
    #n = !1;
    setTimeoutProvider(n) {
        this.#e = n
    }
    setTimeout(n, a) {
        return this.#e.setTimeout(n, a)
    }
    clearTimeout(n) {
        this.#e.clearTimeout(n)
    }
    setInterval(n, a) {
        return this.#e.setInterval(n, a)
    }
    clearInterval(n) {
        this.#e.clearInterval(n)
    }
}
  , bf = new Nw;
function jw(n) {
    setTimeout(n, 0)
}
var Lw = typeof window > "u" || "Deno"in globalThis;
function sn() {}
function Uw(n, a) {
    return typeof n == "function" ? n(a) : n
}
function Bw(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}
function kw(n, a) {
    return Math.max(n + (a || 0) - Date.now(), 0)
}
function Sf(n, a) {
    return typeof n == "function" ? n(a) : n
}
function Hw(n, a) {
    return typeof n == "function" ? n(a) : n
}
function ky(n, a) {
    const {type: r="all", exact: l, fetchStatus: u, predicate: f, queryKey: d, stale: h} = n;
    if (d) {
        if (l) {
            if (a.queryHash !== qf(d, a.options))
                return !1
        } else if (!xs(a.queryKey, d))
            return !1
    }
    if (r !== "all") {
        const y = a.isActive();
        if (r === "active" && !y || r === "inactive" && y)
            return !1
    }
    return !(typeof h == "boolean" && a.isStale() !== h || u && u !== a.state.fetchStatus || f && !f(a))
}
function Hy(n, a) {
    const {exact: r, status: l, predicate: u, mutationKey: f} = n;
    if (f) {
        if (!a.options.mutationKey)
            return !1;
        if (r) {
            if (_s(a.options.mutationKey) !== _s(f))
                return !1
        } else if (!xs(a.options.mutationKey, f))
            return !1
    }
    return !(l && a.state.status !== l || u && !u(a))
}
function qf(n, a) {
    return (a?.queryKeyHashFn || _s)(n)
}
function _s(n) {
    return JSON.stringify(n, (a, r) => _f(r) ? Object.keys(r).sort().reduce( (l, u) => (l[u] = r[u],
    l), {}) : r)
}
function xs(n, a) {
    return n === a ? !0 : typeof n != typeof a ? !1 : n && a && typeof n == "object" && typeof a == "object" ? Object.keys(a).every(r => xs(n[r], a[r])) : !1
}
var qw = Object.prototype.hasOwnProperty;
function Tv(n, a, r=0) {
    if (n === a)
        return n;
    if (r > 500)
        return a;
    const l = qy(n) && qy(a);
    if (!l && !(_f(n) && _f(a)))
        return a;
    const f = (l ? n : Object.keys(n)).length
      , d = l ? a : Object.keys(a)
      , h = d.length
      , y = l ? new Array(h) : {};
    let p = 0;
    for (let v = 0; v < h; v++) {
        const g = l ? v : d[v]
          , _ = n[g]
          , x = a[g];
        if (_ === x) {
            y[g] = _,
            (l ? v < f : qw.call(n, g)) && p++;
            continue
        }
        if (_ === null || x === null || typeof _ != "object" || typeof x != "object") {
            y[g] = x;
            continue
        }
        const R = Tv(_, x, r + 1);
        y[g] = R,
        R === _ && p++
    }
    return f === h && p === f ? n : y
}
function qy(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function _f(n) {
    if (!Zy(n))
        return !1;
    const a = n.constructor;
    if (a === void 0)
        return !0;
    const r = a.prototype;
    return !(!Zy(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}
function Zy(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Zw(n) {
    return new Promise(a => {
        bf.setTimeout(a, n)
    }
    )
}
function Vw(n, a, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(n, a) : r.structuralSharing !== !1 ? Tv(n, a) : a
}
function Yw(n, a, r=0) {
    const l = [...n, a];
    return r && l.length > r ? l.slice(1) : l
}
function Qw(n, a, r=0) {
    const l = [a, ...n];
    return r && l.length > r ? l.slice(0, -1) : l
}
var Zf = Symbol();
function Av(n, a) {
    return !n.queryFn && a?.initialPromise ? () => a.initialPromise : !n.queryFn || n.queryFn === Zf ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}
function Gw(n, a, r) {
    let l = !1, u;
    return Object.defineProperty(n, "signal", {
        enumerable: !0,
        get: () => (u ??= a(),
        l || (l = !0,
        u.aborted ? r() : u.addEventListener("abort", r, {
            once: !0
        })),
        u)
    }),
    n
}
var Ov = ( () => {
    let n = () => Lw;
    return {
        isServer() {
            return n()
        },
        setIsServer(a) {
            n = a
        }
    }
}
)();
function Xw() {
    let n, a;
    const r = new Promise( (u, f) => {
        n = u,
        a = f
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function l(u) {
        Object.assign(r, u),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = u => {
        l({
            status: "fulfilled",
            value: u
        }),
        n(u)
    }
    ,
    r.reject = u => {
        l({
            status: "rejected",
            reason: u
        }),
        a(u)
    }
    ,
    r
}
var Pw = jw;
function Kw() {
    let n = []
      , a = 0
      , r = h => {
        h()
    }
      , l = h => {
        h()
    }
      , u = Pw;
    const f = h => {
        a ? n.push(h) : u( () => {
            r(h)
        }
        )
    }
      , d = () => {
        const h = n;
        n = [],
        h.length && u( () => {
            l( () => {
                h.forEach(y => {
                    r(y)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: h => {
            let y;
            a++;
            try {
                y = h()
            } finally {
                a--,
                a || d()
            }
            return y
        }
        ,
        batchCalls: h => (...y) => {
            f( () => {
                h(...y)
            }
            )
        }
        ,
        schedule: f,
        setNotifyFunction: h => {
            r = h
        }
        ,
        setBatchNotifyFunction: h => {
            l = h
        }
        ,
        setScheduler: h => {
            u = h
        }
    }
}
var Et = Kw()
  , Fw = class extends wu {
    #e = !0;
    #n;
    #t;
    constructor() {
        super(),
        this.#t = n => {
            if (typeof window < "u" && window.addEventListener) {
                const a = () => n(!0)
                  , r = () => n(!1);
                return window.addEventListener("online", a, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", a),
                    window.removeEventListener("offline", r)
                }
            }
        }
    }
    onSubscribe() {
        this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#n?.(),
        this.#n = void 0)
    }
    setEventListener(n) {
        this.#t = n,
        this.#n?.(),
        this.#n = n(this.setOnline.bind(this))
    }
    setOnline(n) {
        this.#e !== n && (this.#e = n,
        this.listeners.forEach(r => {
            r(n)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , cu = new Fw;
function Jw(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}
function Cv(n) {
    return (n ?? "online") === "online" ? cu.isOnline() : !0
}
var xf = class extends Error {
    constructor(n) {
        super("CancelledError"),
        this.revert = n?.revert,
        this.silent = n?.silent
    }
}
;
function Mv(n) {
    let a = !1, r = 0, l;
    const u = Xw()
      , f = () => u.status !== "pending"
      , d = M => {
        if (!f()) {
            const E = new xf(M);
            _(E),
            n.onCancel?.(E)
        }
    }
      , h = () => {
        a = !0
    }
      , y = () => {
        a = !1
    }
      , p = () => Rv.isFocused() && (n.networkMode === "always" || cu.isOnline()) && n.canRun()
      , v = () => Cv(n.networkMode) && n.canRun()
      , g = M => {
        f() || (l?.(),
        u.resolve(M))
    }
      , _ = M => {
        f() || (l?.(),
        u.reject(M))
    }
      , x = () => new Promise(M => {
        l = E => {
            (f() || p()) && M(E)
        }
        ,
        n.onPause?.()
    }
    ).then( () => {
        l = void 0,
        f() || n.onContinue?.()
    }
    )
      , R = () => {
        if (f())
            return;
        let M;
        const E = r === 0 ? n.initialPromise : void 0;
        try {
            M = E ?? n.fn()
        } catch (C) {
            M = Promise.reject(C)
        }
        Promise.resolve(M).then(g).catch(C => {
            if (f())
                return;
            const H = n.retry ?? (Ov.isServer() ? 0 : 3)
              , Z = n.retryDelay ?? Jw
              , k = typeof Z == "function" ? Z(r, C) : Z
              , I = H === !0 || typeof H == "number" && r < H || typeof H == "function" && H(r, C);
            if (a || !I) {
                _(C);
                return
            }
            r++,
            n.onFail?.(r, C),
            Zw(k).then( () => p() ? void 0 : x()).then( () => {
                a ? _(C) : R()
            }
            )
        }
        )
    }
    ;
    return {
        promise: u,
        status: () => u.status,
        cancel: d,
        continue: () => (l?.(),
        u),
        cancelRetry: h,
        continueRetry: y,
        canStart: v,
        start: () => (v() ? R() : x().then(R),
        u)
    }
}
var zv = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Bw(this.gcTime) && (this.#e = bf.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Ov.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e !== void 0 && (bf.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , Iw = class extends zv {
    #e;
    #n;
    #t;
    #i;
    #a;
    #r;
    #s;
    constructor(n) {
        super(),
        this.#s = !1,
        this.#r = n.defaultOptions,
        this.setOptions(n.options),
        this.observers = [],
        this.#i = n.client,
        this.#t = this.#i.getQueryCache(),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        this.#e = Yy(this.options),
        this.state = n.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(n) {
        if (this.options = {
            ...this.#r,
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const a = Yy(this.options);
            a.data !== void 0 && (this.setState(Vy(a.data, a.dataUpdatedAt)),
            this.#e = a)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#t.remove(this)
    }
    setData(n, a) {
        const r = Vw(this.state.data, n, this.options);
        return this.#l({
            data: r,
            type: "success",
            dataUpdatedAt: a?.updatedAt,
            manual: a?.manual
        }),
        r
    }
    setState(n, a) {
        this.#l({
            type: "setState",
            state: n,
            setStateOptions: a
        })
    }
    cancel(n) {
        const a = this.#a?.promise;
        return this.#a?.cancel(n),
        a ? a.then(sn).catch(sn) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(),
        this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(n => Hw(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Zf || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => Sf(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !kw(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        this.observers.find(a => a.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(a => a.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(a => a !== n),
        this.observers.length || (this.#a && (this.#s || this.#u() ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#t.notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #u() {
        return this.state.fetchStatus === "paused" && this.state.status === "pending"
    }
    invalidate() {
        this.state.isInvalidated || this.#l({
            type: "invalidate"
        })
    }
    async fetch(n, a) {
        if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
            if (this.state.data !== void 0 && a?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const h = this.observers.find(y => y.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController
          , l = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (this.#s = !0,
                r.signal)
            })
        }
          , u = () => {
            const h = Av(this.options, a)
              , p = ( () => {
                const v = {
                    client: this.#i,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return l(v),
                v
            }
            )();
            return this.#s = !1,
            this.options.persister ? this.options.persister(h, p, this) : h(p)
        }
          , d = ( () => {
            const h = {
                fetchOptions: a,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#i,
                state: this.state,
                fetchFn: u
            };
            return l(h),
            h
        }
        )();
        this.options.behavior?.onFetch(d, this),
        this.#n = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#l({
            type: "fetch",
            meta: d.fetchOptions?.meta
        }),
        this.#a = Mv({
            initialPromise: a?.initialPromise,
            fn: d.fetchFn,
            onCancel: h => {
                h instanceof xf && h.revert && this.setState({
                    ...this.#n,
                    fetchStatus: "idle"
                }),
                r.abort()
            }
            ,
            onFail: (h, y) => {
                this.#l({
                    type: "failed",
                    failureCount: h,
                    error: y
                })
            }
            ,
            onPause: () => {
                this.#l({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#l({
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        });
        try {
            const h = await this.#a.start();
            if (h === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(h),
            this.#t.config.onSuccess?.(h, this),
            this.#t.config.onSettled?.(h, this.state.error, this),
            h
        } catch (h) {
            if (h instanceof xf) {
                if (h.silent)
                    return this.#a.promise;
                if (h.revert) {
                    if (this.state.data === void 0)
                        throw h;
                    return this.state.data
                }
            }
            throw this.#l({
                type: "error",
                error: h
            }),
            this.#t.config.onError?.(h, this),
            this.#t.config.onSettled?.(this.state.data, h, this),
            h
        } finally {
            this.scheduleGc()
        }
    }
    #l(n) {
        const a = r => {
            switch (n.type) {
            case "failed":
                return {
                    ...r,
                    fetchFailureCount: n.failureCount,
                    fetchFailureReason: n.error
                };
            case "pause":
                return {
                    ...r,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...r,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...r,
                    ...$w(r.data, this.options),
                    fetchMeta: n.meta ?? null
                };
            case "success":
                const l = {
                    ...r,
                    ...Vy(n.data, n.dataUpdatedAt),
                    dataUpdateCount: r.dataUpdateCount + 1,
                    ...!n.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#n = n.manual ? l : void 0,
                l;
            case "error":
                const u = n.error;
                return {
                    ...r,
                    error: u,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: u,
                    fetchStatus: "idle",
                    status: "error",
                    isInvalidated: !0
                };
            case "invalidate":
                return {
                    ...r,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...r,
                    ...n.state
                }
            }
        }
        ;
        this.state = a(this.state),
        Et.batch( () => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }
            ),
            this.#t.notify({
                query: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function $w(n, a) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Cv(a.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Vy(n, a) {
    return {
        data: n,
        dataUpdatedAt: a ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Yy(n) {
    const a = typeof n.initialData == "function" ? n.initialData() : n.initialData
      , r = a !== void 0
      , l = r ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: a,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? l ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
function Qy(n) {
    return {
        onFetch: (a, r) => {
            const l = a.options
              , u = a.fetchOptions?.meta?.fetchMore?.direction
              , f = a.state.data?.pages || []
              , d = a.state.data?.pageParams || [];
            let h = {
                pages: [],
                pageParams: []
            }
              , y = 0;
            const p = async () => {
                let v = !1;
                const g = R => {
                    Gw(R, () => a.signal, () => v = !0)
                }
                  , _ = Av(a.options, a.fetchOptions)
                  , x = async (R, M, E) => {
                    if (v)
                        return Promise.reject();
                    if (M == null && R.pages.length)
                        return Promise.resolve(R);
                    const H = ( () => {
                        const J = {
                            client: a.client,
                            queryKey: a.queryKey,
                            pageParam: M,
                            direction: E ? "backward" : "forward",
                            meta: a.options.meta
                        };
                        return g(J),
                        J
                    }
                    )()
                      , Z = await _(H)
                      , {maxPages: k} = a.options
                      , I = E ? Qw : Yw;
                    return {
                        pages: I(R.pages, Z, k),
                        pageParams: I(R.pageParams, M, k)
                    }
                }
                ;
                if (u && f.length) {
                    const R = u === "backward"
                      , M = R ? Ww : Gy
                      , E = {
                        pages: f,
                        pageParams: d
                    }
                      , C = M(l, E);
                    h = await x(E, C, R)
                } else {
                    const R = n ?? f.length;
                    do {
                        const M = y === 0 ? d[0] ?? l.initialPageParam : Gy(l, h);
                        if (y > 0 && M == null)
                            break;
                        h = await x(h, M),
                        y++
                    } while (y < R)
                }
                return h
            }
            ;
            a.options.persister ? a.fetchFn = () => a.options.persister?.(p, {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal
            }, r) : a.fetchFn = p
        }
    }
}
function Gy(n, {pages: a, pageParams: r}) {
    const l = a.length - 1;
    return a.length > 0 ? n.getNextPageParam(a[l], a, r[l], r) : void 0
}
function Ww(n, {pages: a, pageParams: r}) {
    return a.length > 0 ? n.getPreviousPageParam?.(a[0], a, r[0], r) : void 0
}
var eR = class extends zv {
    #e;
    #n;
    #t;
    #i;
    constructor(n) {
        super(),
        this.#e = n.client,
        this.mutationId = n.mutationId,
        this.#t = n.mutationCache,
        this.#n = [],
        this.state = n.state || tR(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#n.includes(n) || (this.#n.push(n),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#n = this.#n.filter(a => a !== n),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#i?.continue() ?? this.execute(this.state.variables)
    }
    async execute(n) {
        const a = () => {
            this.#a({
                type: "continue"
            })
        }
          , r = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#i = Mv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, r) : Promise.reject(new Error("No mutationFn found")),
            onFail: (f, d) => {
                this.#a({
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            }
            ,
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            }
            ,
            onContinue: a,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const l = this.state.status === "pending"
          , u = !this.#i.canStart();
        try {
            if (l)
                a();
            else {
                this.#a({
                    type: "pending",
                    variables: n,
                    isPaused: u
                }),
                this.#t.config.onMutate && await this.#t.config.onMutate(n, this, r);
                const d = await this.options.onMutate?.(n, r);
                d !== this.state.context && this.#a({
                    type: "pending",
                    context: d,
                    variables: n,
                    isPaused: u
                })
            }
            const f = await this.#i.start();
            return await this.#t.config.onSuccess?.(f, n, this.state.context, this, r),
            await this.options.onSuccess?.(f, n, this.state.context, r),
            await this.#t.config.onSettled?.(f, null, this.state.variables, this.state.context, this, r),
            await this.options.onSettled?.(f, null, n, this.state.context, r),
            this.#a({
                type: "success",
                data: f
            }),
            f
        } catch (f) {
            try {
                await this.#t.config.onError?.(f, n, this.state.context, this, r)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onError?.(f, n, this.state.context, r)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.#t.config.onSettled?.(void 0, f, this.state.variables, this.state.context, this, r)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onSettled?.(void 0, f, n, this.state.context, r)
            } catch (d) {
                Promise.reject(d)
            }
            throw this.#a({
                type: "error",
                error: f
            }),
            f
        } finally {
            this.#t.runNext(this)
        }
    }
    #a(n) {
        const a = r => {
            switch (n.type) {
            case "failed":
                return {
                    ...r,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return {
                    ...r,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...r,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...r,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...r,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...r,
                    data: void 0,
                    error: n.error,
                    failureCount: r.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = a(this.state),
        Et.batch( () => {
            this.#n.forEach(r => {
                r.onMutationUpdate(n)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function tR() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var nR = class extends wu {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Set,
        this.#n = new Map,
        this.#t = 0
    }
    #e;
    #n;
    #t;
    build(n, a, r) {
        const l = new eR({
            client: n,
            mutationCache: this,
            mutationId: ++this.#t,
            options: n.defaultMutationOptions(a),
            state: r
        });
        return this.add(l),
        l
    }
    add(n) {
        this.#e.add(n);
        const a = Fl(n);
        if (typeof a == "string") {
            const r = this.#n.get(a);
            r ? r.push(n) : this.#n.set(a, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#e.delete(n)) {
            const a = Fl(n);
            if (typeof a == "string") {
                const r = this.#n.get(a);
                if (r)
                    if (r.length > 1) {
                        const l = r.indexOf(n);
                        l !== -1 && r.splice(l, 1)
                    } else
                        r[0] === n && this.#n.delete(a)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const a = Fl(n);
        if (typeof a == "string") {
            const l = this.#n.get(a)?.find(u => u.state.status === "pending");
            return !l || l === n
        } else
            return !0
    }
    runNext(n) {
        const a = Fl(n);
        return typeof a == "string" ? this.#n.get(a)?.find(l => l !== n && l.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Et.batch( () => {
            this.#e.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            this.#e.clear(),
            this.#n.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(n) {
        const a = {
            exact: !0,
            ...n
        };
        return this.getAll().find(r => Hy(a, r))
    }
    findAll(n={}) {
        return this.getAll().filter(a => Hy(n, a))
    }
    notify(n) {
        Et.batch( () => {
            this.listeners.forEach(a => {
                a(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(a => a.state.isPaused);
        return Et.batch( () => Promise.all(n.map(a => a.continue().catch(sn))))
    }
}
;
function Fl(n) {
    return n.options.scope?.id
}
var aR = class extends wu {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Map
    }
    #e;
    build(n, a, r) {
        const l = a.queryKey
          , u = a.queryHash ?? qf(l, a);
        let f = this.get(u);
        return f || (f = new Iw({
            client: n,
            queryKey: l,
            queryHash: u,
            options: n.defaultQueryOptions(a),
            state: r,
            defaultOptions: n.getQueryDefaults(l)
        }),
        this.add(f)),
        f
    }
    add(n) {
        this.#e.has(n.queryHash) || (this.#e.set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const a = this.#e.get(n.queryHash);
        a && (n.destroy(),
        a === n && this.#e.delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        Et.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return this.#e.get(n)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(n) {
        const a = {
            exact: !0,
            ...n
        };
        return this.getAll().find(r => ky(a, r))
    }
    findAll(n={}) {
        const a = this.getAll();
        return Object.keys(n).length > 0 ? a.filter(r => ky(n, r)) : a
    }
    notify(n) {
        Et.batch( () => {
            this.listeners.forEach(a => {
                a(n)
            }
            )
        }
        )
    }
    onFocus() {
        Et.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Et.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
  , iR = class {
    #e;
    #n;
    #t;
    #i;
    #a;
    #r;
    #s;
    #u;
    constructor(n={}) {
        this.#e = n.queryCache || new aR,
        this.#n = n.mutationCache || new nR,
        this.#t = n.defaultOptions || {},
        this.#i = new Map,
        this.#a = new Map,
        this.#r = 0
    }
    mount() {
        this.#r++,
        this.#r === 1 && (this.#s = Rv.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#u = cu.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#r--,
        this.#r === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#u?.(),
        this.#u = void 0)
    }
    isFetching(n) {
        return this.#e.findAll({
            ...n,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(n) {
        return this.#n.findAll({
            ...n,
            status: "pending"
        }).length
    }
    getQueryData(n) {
        const a = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(a.queryHash)?.state.data
    }
    ensureQueryData(n) {
        const a = this.defaultQueryOptions(n)
          , r = this.#e.build(this, a)
          , l = r.state.data;
        return l === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && r.isStaleByTime(Sf(a.staleTime, r)) && this.prefetchQuery(a),
        Promise.resolve(l))
    }
    getQueriesData(n) {
        return this.#e.findAll(n).map( ({queryKey: a, state: r}) => {
            const l = r.data;
            return [a, l]
        }
        )
    }
    setQueryData(n, a, r) {
        const l = this.defaultQueryOptions({
            queryKey: n
        })
          , f = this.#e.get(l.queryHash)?.state.data
          , d = Uw(a, f);
        if (d !== void 0)
            return this.#e.build(this, l).setData(d, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(n, a, r) {
        return Et.batch( () => this.#e.findAll(n).map( ({queryKey: l}) => [l, this.setQueryData(l, a, r)]))
    }
    getQueryState(n) {
        const a = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(a.queryHash)?.state
    }
    removeQueries(n) {
        const a = this.#e;
        Et.batch( () => {
            a.findAll(n).forEach(r => {
                a.remove(r)
            }
            )
        }
        )
    }
    resetQueries(n, a) {
        const r = this.#e;
        return Et.batch( () => (r.findAll(n).forEach(l => {
            l.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...n
        }, a)))
    }
    cancelQueries(n, a={}) {
        const r = {
            revert: !0,
            ...a
        }
          , l = Et.batch( () => this.#e.findAll(n).map(u => u.cancel(r)));
        return Promise.all(l).then(sn).catch(sn)
    }
    invalidateQueries(n, a={}) {
        return Et.batch( () => (this.#e.findAll(n).forEach(r => {
            r.invalidate()
        }
        ),
        n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...n,
            type: n?.refetchType ?? n?.type ?? "active"
        }, a)))
    }
    refetchQueries(n, a={}) {
        const r = {
            ...a,
            cancelRefetch: a.cancelRefetch ?? !0
        }
          , l = Et.batch( () => this.#e.findAll(n).filter(u => !u.isDisabled() && !u.isStatic()).map(u => {
            let f = u.fetch(void 0, r);
            return r.throwOnError || (f = f.catch(sn)),
            u.state.fetchStatus === "paused" ? Promise.resolve() : f
        }
        ));
        return Promise.all(l).then(sn)
    }
    fetchQuery(n) {
        const a = this.defaultQueryOptions(n);
        a.retry === void 0 && (a.retry = !1);
        const r = this.#e.build(this, a);
        return r.isStaleByTime(Sf(a.staleTime, r)) ? r.fetch(a) : Promise.resolve(r.state.data)
    }
    prefetchQuery(n) {
        return this.fetchQuery(n).then(sn).catch(sn)
    }
    fetchInfiniteQuery(n) {
        return n.behavior = Qy(n.pages),
        this.fetchQuery(n)
    }
    prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(sn).catch(sn)
    }
    ensureInfiniteQueryData(n) {
        return n.behavior = Qy(n.pages),
        this.ensureQueryData(n)
    }
    resumePausedMutations() {
        return cu.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#n
    }
    getDefaultOptions() {
        return this.#t
    }
    setDefaultOptions(n) {
        this.#t = n
    }
    setQueryDefaults(n, a) {
        this.#i.set(_s(n), {
            queryKey: n,
            defaultOptions: a
        })
    }
    getQueryDefaults(n) {
        const a = [...this.#i.values()]
          , r = {};
        return a.forEach(l => {
            xs(n, l.queryKey) && Object.assign(r, l.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(n, a) {
        this.#a.set(_s(n), {
            mutationKey: n,
            defaultOptions: a
        })
    }
    getMutationDefaults(n) {
        const a = [...this.#a.values()]
          , r = {};
        return a.forEach(l => {
            xs(n, l.mutationKey) && Object.assign(r, l.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(n) {
        if (n._defaulted)
            return n;
        const a = {
            ...this.#t.queries,
            ...this.getQueryDefaults(n.queryKey),
            ...n,
            _defaulted: !0
        };
        return a.queryHash || (a.queryHash = qf(a.queryKey, a)),
        a.refetchOnReconnect === void 0 && (a.refetchOnReconnect = a.networkMode !== "always"),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = "offlineFirst"),
        a.queryFn === Zf && (a.enabled = !1),
        a
    }
    defaultMutationOptions(n) {
        return n?._defaulted ? n : {
            ...this.#t.mutations,
            ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
            ...n,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#n.clear()
    }
}
  , rR = re.createContext(void 0)
  , sR = ({client: n, children: a}) => (re.useEffect( () => (n.mount(),
() => {
    n.unmount()
}
), [n]),
P.jsx(rR.Provider, {
    value: n,
    children: a
}));
const lR = "/assets/styles-CxbqvTur.css";
function uR() {
    return P.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background px-4",
        children: P.jsxs("div", {
            className: "max-w-md text-center",
            children: [P.jsx("p", {
                className: "text-eyebrow text-primary",
                children: "404"
            }), P.jsx("h1", {
                className: "mt-4 text-display text-5xl text-foreground",
                children: "This residence isn't listed."
            }), P.jsx("p", {
                className: "mt-4 text-sm text-muted-foreground",
                children: "The page you're looking for has been moved or never existed."
            }), P.jsx(kf, {
                to: "/",
                className: "mt-8 inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary/90",
                children: "Return home"
            })]
        })
    })
}
function oR({error: n, reset: a}) {
    console.error(n);
    const r = bt();
    return P.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background px-4",
        children: P.jsxs("div", {
            className: "max-w-md text-center",
            children: [P.jsx("h1", {
                className: "text-display text-3xl text-foreground",
                children: "Something went wrong."
            }), P.jsx("p", {
                className: "mt-4 text-sm text-muted-foreground",
                children: "We couldn't load this page. Please try again."
            }), P.jsx("button", {
                onClick: () => {
                    r.invalidate(),
                    a()
                }
                ,
                className: "mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary/90",
                children: "Try again"
            })]
        })
    })
}
const Ru = rw()({
    head: () => ({
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            name: "theme-color",
            content: "#0F5132"
        }, {
            title: "werent. — A private rental network for considered residences"
        }, {
            name: "description",
            content: "Curated long-term rentals across Sydney, Melbourne, Brisbane and Perth. Architect-designed homes, by invitation."
        }, {
            name: "author",
            content: "werent."
        }, {
            property: "og:site_name",
            content: "werent."
        }, {
            property: "og:type",
            content: "website"
        }, {
            name: "twitter:card",
            content: "summary_large_image"
        }],
        links: [{
            rel: "stylesheet",
            href: lR
        }, {
            rel: "icon",
            href: "/favicon.ico"
        }],
        scripts: [{
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                name: "werent.",
                url: "/",
                description: "A private rental network for considered residences across Australia.",
                areaServed: ["Sydney", "Melbourne", "Brisbane", "Perth"]
            })
        }]
    }),
    shellComponent: cR,
    component: fR,
    notFoundComponent: uR,
    errorComponent: oR
});
function cR({children: n}) {
    return P.jsxs("html", {
        lang: "en",
        children: [P.jsx("head", {
            children: P.jsx(Tw, {})
        }), P.jsxs("body", {
            children: [n, P.jsx(Aw, {})]
        })]
    })
}
function fR() {
    const {queryClient: n} = Ru.useRouteContext();
    return P.jsx(sR, {
        client: n,
        children: P.jsx(xv, {})
    })
}
const dR = "modulepreload"
  , hR = function(n) {
    return "/" + n
}
  , Xy = {}
  , Tu = function(a, r, l) {
    let u = Promise.resolve();
    if (r && r.length > 0) {
        let y = function(p) {
            return Promise.all(p.map(v => Promise.resolve(v).then(g => ({
                status: "fulfilled",
                value: g
            }), g => ({
                status: "rejected",
                reason: g
            }))))
        };
        document.getElementsByTagName("link");
        const d = document.querySelector("meta[property=csp-nonce]")
          , h = d?.nonce || d?.getAttribute("nonce");
        u = y(r.map(p => {
            if (p = hR(p),
            p in Xy)
                return;
            Xy[p] = !0;
            const v = p.endsWith(".css")
              , g = v ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${p}"]${g}`))
                return;
            const _ = document.createElement("link");
            if (_.rel = v ? "stylesheet" : dR,
            v || (_.as = "script"),
            _.crossOrigin = "",
            _.href = p,
            h && _.setAttribute("nonce", h),
            document.head.appendChild(_),
            v)
                return new Promise( (x, R) => {
                    _.addEventListener("load", x),
                    _.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${p}`)))
                }
                )
        }
        ))
    }
    function f(d) {
        const h = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (h.payload = d,
        window.dispatchEvent(h),
        !h.defaultPrevented)
            throw d
    }
    return u.then(d => {
        for (const h of d || [])
            h.status === "rejected" && f(h.reason);
        return a().catch(f)
    }
    )
};
var Ce;
(function(n) {
    n.assertEqual = u => {}
    ;
    function a(u) {}
    n.assertIs = a;
    function r(u) {
        throw new Error
    }
    n.assertNever = r,
    n.arrayToEnum = u => {
        const f = {};
        for (const d of u)
            f[d] = d;
        return f
    }
    ,
    n.getValidEnumValues = u => {
        const f = n.objectKeys(u).filter(h => typeof u[u[h]] != "number")
          , d = {};
        for (const h of f)
            d[h] = u[h];
        return n.objectValues(d)
    }
    ,
    n.objectValues = u => n.objectKeys(u).map(function(f) {
        return u[f]
    }),
    n.objectKeys = typeof Object.keys == "function" ? u => Object.keys(u) : u => {
        const f = [];
        for (const d in u)
            Object.prototype.hasOwnProperty.call(u, d) && f.push(d);
        return f
    }
    ,
    n.find = (u, f) => {
        for (const d of u)
            if (f(d))
                return d
    }
    ,
    n.isInteger = typeof Number.isInteger == "function" ? u => Number.isInteger(u) : u => typeof u == "number" && Number.isFinite(u) && Math.floor(u) === u;
    function l(u, f=" | ") {
        return u.map(d => typeof d == "string" ? `'${d}'` : d).join(f)
    }
    n.joinValues = l,
    n.jsonStringifyReplacer = (u, f) => typeof f == "bigint" ? f.toString() : f
}
)(Ce || (Ce = {}));
var Py;
(function(n) {
    n.mergeShapes = (a, r) => ({
        ...a,
        ...r
    })
}
)(Py || (Py = {}));
const ne = Ce.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , ba = n => {
    switch (typeof n) {
    case "undefined":
        return ne.undefined;
    case "string":
        return ne.string;
    case "number":
        return Number.isNaN(n) ? ne.nan : ne.number;
    case "boolean":
        return ne.boolean;
    case "function":
        return ne.function;
    case "bigint":
        return ne.bigint;
    case "symbol":
        return ne.symbol;
    case "object":
        return Array.isArray(n) ? ne.array : n === null ? ne.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? ne.promise : typeof Map < "u" && n instanceof Map ? ne.map : typeof Set < "u" && n instanceof Set ? ne.set : typeof Date < "u" && n instanceof Date ? ne.date : ne.object;
    default:
        return ne.unknown
    }
}
  , X = Ce.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Vn extends Error {
    get errors() {
        return this.issues
    }
    constructor(a) {
        super(),
        this.issues = [],
        this.addIssue = l => {
            this.issues = [...this.issues, l]
        }
        ,
        this.addIssues = (l=[]) => {
            this.issues = [...this.issues, ...l]
        }
        ;
        const r = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r,
        this.name = "ZodError",
        this.issues = a
    }
    format(a) {
        const r = a || function(f) {
            return f.message
        }
          , l = {
            _errors: []
        }
          , u = f => {
            for (const d of f.issues)
                if (d.code === "invalid_union")
                    d.unionErrors.map(u);
                else if (d.code === "invalid_return_type")
                    u(d.returnTypeError);
                else if (d.code === "invalid_arguments")
                    u(d.argumentsError);
                else if (d.path.length === 0)
                    l._errors.push(r(d));
                else {
                    let h = l
                      , y = 0;
                    for (; y < d.path.length; ) {
                        const p = d.path[y];
                        y === d.path.length - 1 ? (h[p] = h[p] || {
                            _errors: []
                        },
                        h[p]._errors.push(r(d))) : h[p] = h[p] || {
                            _errors: []
                        },
                        h = h[p],
                        y++
                    }
                }
        }
        ;
        return u(this),
        l
    }
    static assert(a) {
        if (!(a instanceof Vn))
            throw new Error(`Not a ZodError: ${a}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Ce.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(a=r => r.message) {
        const r = {}
          , l = [];
        for (const u of this.issues)
            if (u.path.length > 0) {
                const f = u.path[0];
                r[f] = r[f] || [],
                r[f].push(a(u))
            } else
                l.push(a(u));
        return {
            formErrors: l,
            fieldErrors: r
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Vn.create = n => new Vn(n);
const Ef = (n, a) => {
    let r;
    switch (n.code) {
    case X.invalid_type:
        n.received === ne.undefined ? r = "Required" : r = `Expected ${n.expected}, received ${n.received}`;
        break;
    case X.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(n.expected, Ce.jsonStringifyReplacer)}`;
        break;
    case X.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${Ce.joinValues(n.keys, ", ")}`;
        break;
    case X.invalid_union:
        r = "Invalid input";
        break;
    case X.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${Ce.joinValues(n.options)}`;
        break;
    case X.invalid_enum_value:
        r = `Invalid enum value. Expected ${Ce.joinValues(n.options)}, received '${n.received}'`;
        break;
    case X.invalid_arguments:
        r = "Invalid function arguments";
        break;
    case X.invalid_return_type:
        r = "Invalid function return type";
        break;
    case X.invalid_date:
        r = "Invalid date";
        break;
    case X.invalid_string:
        typeof n.validation == "object" ? "includes"in n.validation ? (r = `Invalid input: must include "${n.validation.includes}"`,
        typeof n.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith"in n.validation ? r = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith"in n.validation ? r = `Invalid input: must end with "${n.validation.endsWith}"` : Ce.assertNever(n.validation) : n.validation !== "regex" ? r = `Invalid ${n.validation}` : r = "Invalid";
        break;
    case X.too_small:
        n.type === "array" ? r = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? r = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? r = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? r = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? r = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : r = "Invalid input";
        break;
    case X.too_big:
        n.type === "array" ? r = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? r = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? r = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? r = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? r = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : r = "Invalid input";
        break;
    case X.custom:
        r = "Invalid input";
        break;
    case X.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
    case X.not_multiple_of:
        r = `Number must be a multiple of ${n.multipleOf}`;
        break;
    case X.not_finite:
        r = "Number must be finite";
        break;
    default:
        r = a.defaultError,
        Ce.assertNever(n)
    }
    return {
        message: r
    }
}
;
let mR = Ef;
function pR() {
    return mR
}
const yR = n => {
    const {data: a, path: r, errorMaps: l, issueData: u} = n
      , f = [...r, ...u.path || []]
      , d = {
        ...u,
        path: f
    };
    if (u.message !== void 0)
        return {
            ...u,
            path: f,
            message: u.message
        };
    let h = "";
    const y = l.filter(p => !!p).slice().reverse();
    for (const p of y)
        h = p(d, {
            data: a,
            defaultError: h
        }).message;
    return {
        ...u,
        path: f,
        message: h
    }
}
;
function ee(n, a) {
    const r = pR()
      , l = yR({
        issueData: a,
        data: n.data,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, r, r === Ef ? void 0 : Ef].filter(u => !!u)
    });
    n.common.issues.push(l)
}
class Yt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(a, r) {
        const l = [];
        for (const u of r) {
            if (u.status === "aborted")
                return he;
            u.status === "dirty" && a.dirty(),
            l.push(u.value)
        }
        return {
            status: a.value,
            value: l
        }
    }
    static async mergeObjectAsync(a, r) {
        const l = [];
        for (const u of r) {
            const f = await u.key
              , d = await u.value;
            l.push({
                key: f,
                value: d
            })
        }
        return Yt.mergeObjectSync(a, l)
    }
    static mergeObjectSync(a, r) {
        const l = {};
        for (const u of r) {
            const {key: f, value: d} = u;
            if (f.status === "aborted" || d.status === "aborted")
                return he;
            f.status === "dirty" && a.dirty(),
            d.status === "dirty" && a.dirty(),
            f.value !== "__proto__" && (typeof d.value < "u" || u.alwaysSet) && (l[f.value] = d.value)
        }
        return {
            status: a.value,
            value: l
        }
    }
}
const he = Object.freeze({
    status: "aborted"
})
  , ms = n => ({
    status: "dirty",
    value: n
})
  , en = n => ({
    status: "valid",
    value: n
})
  , Ky = n => n.status === "aborted"
  , Fy = n => n.status === "dirty"
  , rr = n => n.status === "valid"
  , fu = n => typeof Promise < "u" && n instanceof Promise;
var ie;
(function(n) {
    n.errToObj = a => typeof a == "string" ? {
        message: a
    } : a || {},
    n.toString = a => typeof a == "string" ? a : a?.message
}
)(ie || (ie = {}));
class Aa {
    constructor(a, r, l, u) {
        this._cachedPath = [],
        this.parent = a,
        this.data = r,
        this._path = l,
        this._key = u
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const Jy = (n, a) => {
    if (rr(a))
        return {
            success: !0,
            data: a.value
        };
    if (!n.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const r = new Vn(n.common.issues);
            return this._error = r,
            this._error
        }
    }
}
;
function ve(n) {
    if (!n)
        return {};
    const {errorMap: a, invalid_type_error: r, required_error: l, description: u} = n;
    if (a && (r || l))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return a ? {
        errorMap: a,
        description: u
    } : {
        errorMap: (d, h) => {
            const {message: y} = n;
            return d.code === "invalid_enum_value" ? {
                message: y ?? h.defaultError
            } : typeof h.data > "u" ? {
                message: y ?? l ?? h.defaultError
            } : d.code !== "invalid_type" ? {
                message: h.defaultError
            } : {
                message: y ?? r ?? h.defaultError
            }
        }
        ,
        description: u
    }
}
class Te {
    get description() {
        return this._def.description
    }
    _getType(a) {
        return ba(a.data)
    }
    _getOrReturnCtx(a, r) {
        return r || {
            common: a.parent.common,
            data: a.data,
            parsedType: ba(a.data),
            schemaErrorMap: this._def.errorMap,
            path: a.path,
            parent: a.parent
        }
    }
    _processInputParams(a) {
        return {
            status: new Yt,
            ctx: {
                common: a.parent.common,
                data: a.data,
                parsedType: ba(a.data),
                schemaErrorMap: this._def.errorMap,
                path: a.path,
                parent: a.parent
            }
        }
    }
    _parseSync(a) {
        const r = this._parse(a);
        if (fu(r))
            throw new Error("Synchronous parse encountered promise.");
        return r
    }
    _parseAsync(a) {
        const r = this._parse(a);
        return Promise.resolve(r)
    }
    parse(a, r) {
        const l = this.safeParse(a, r);
        if (l.success)
            return l.data;
        throw l.error
    }
    safeParse(a, r) {
        const l = {
            common: {
                issues: [],
                async: r?.async ?? !1,
                contextualErrorMap: r?.errorMap
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        }
          , u = this._parseSync({
            data: a,
            path: l.path,
            parent: l
        });
        return Jy(l, u)
    }
    "~validate"(a) {
        const r = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        };
        if (!this["~standard"].async)
            try {
                const l = this._parseSync({
                    data: a,
                    path: [],
                    parent: r
                });
                return rr(l) ? {
                    value: l.value
                } : {
                    issues: r.common.issues
                }
            } catch (l) {
                l?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
                r.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: a,
            path: [],
            parent: r
        }).then(l => rr(l) ? {
            value: l.value
        } : {
            issues: r.common.issues
        })
    }
    async parseAsync(a, r) {
        const l = await this.safeParseAsync(a, r);
        if (l.success)
            return l.data;
        throw l.error
    }
    async safeParseAsync(a, r) {
        const l = {
            common: {
                issues: [],
                contextualErrorMap: r?.errorMap,
                async: !0
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        }
          , u = this._parse({
            data: a,
            path: l.path,
            parent: l
        })
          , f = await (fu(u) ? u : Promise.resolve(u));
        return Jy(l, f)
    }
    refine(a, r) {
        const l = u => typeof r == "string" || typeof r > "u" ? {
            message: r
        } : typeof r == "function" ? r(u) : r;
        return this._refinement( (u, f) => {
            const d = a(u)
              , h = () => f.addIssue({
                code: X.custom,
                ...l(u)
            });
            return typeof Promise < "u" && d instanceof Promise ? d.then(y => y ? !0 : (h(),
            !1)) : d ? !0 : (h(),
            !1)
        }
        )
    }
    refinement(a, r) {
        return this._refinement( (l, u) => a(l) ? !0 : (u.addIssue(typeof r == "function" ? r(l, u) : r),
        !1))
    }
    _refinement(a) {
        return new ur({
            schema: this,
            typeName: me.ZodEffects,
            effect: {
                type: "refinement",
                refinement: a
            }
        })
    }
    superRefine(a) {
        return this._refinement(a)
    }
    constructor(a) {
        this.spa = this.safeParseAsync,
        this._def = a,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: r => this["~validate"](r)
        }
    }
    optional() {
        return Ta.create(this, this._def)
    }
    nullable() {
        return or.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return pn.create(this)
    }
    promise() {
        return pu.create(this, this._def)
    }
    or(a) {
        return hu.create([this, a], this._def)
    }
    and(a) {
        return mu.create(this, a, this._def)
    }
    transform(a) {
        return new ur({
            ...ve(this._def),
            schema: this,
            typeName: me.ZodEffects,
            effect: {
                type: "transform",
                transform: a
            }
        })
    }
    default(a) {
        const r = typeof a == "function" ? a : () => a;
        return new Rf({
            ...ve(this._def),
            innerType: this,
            defaultValue: r,
            typeName: me.ZodDefault
        })
    }
    brand() {
        return new HR({
            typeName: me.ZodBranded,
            type: this,
            ...ve(this._def)
        })
    }
    catch(a) {
        const r = typeof a == "function" ? a : () => a;
        return new Tf({
            ...ve(this._def),
            innerType: this,
            catchValue: r,
            typeName: me.ZodCatch
        })
    }
    describe(a) {
        const r = this.constructor;
        return new r({
            ...this._def,
            description: a
        })
    }
    pipe(a) {
        return Vf.create(this, a)
    }
    readonly() {
        return Af.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const gR = /^c[^\s-]{8,}$/i
  , vR = /^[0-9a-z]+$/
  , bR = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , SR = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , _R = /^[a-z0-9_-]{21}$/i
  , xR = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , ER = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , wR = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , RR = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let lf;
const TR = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , AR = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , OR = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , CR = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , MR = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , zR = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , Dv = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , DR = new RegExp(`^${Dv}$`);
function Nv(n) {
    let a = "[0-5]\\d";
    n.precision ? a = `${a}\\.\\d{${n.precision}}` : n.precision == null && (a = `${a}(\\.\\d+)?`);
    const r = n.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${a})${r}`
}
function NR(n) {
    return new RegExp(`^${Nv(n)}$`)
}
function jR(n) {
    let a = `${Dv}T${Nv(n)}`;
    const r = [];
    return r.push(n.local ? "Z?" : "Z"),
    n.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    a = `${a}(${r.join("|")})`,
    new RegExp(`^${a}$`)
}
function LR(n, a) {
    return !!((a === "v4" || !a) && TR.test(n) || (a === "v6" || !a) && OR.test(n))
}
function UR(n, a) {
    if (!xR.test(n))
        return !1;
    try {
        const [r] = n.split(".");
        if (!r)
            return !1;
        const l = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "=")
          , u = JSON.parse(atob(l));
        return !(typeof u != "object" || u === null || "typ"in u && u?.typ !== "JWT" || !u.alg || a && u.alg !== a)
    } catch {
        return !1
    }
}
function BR(n, a) {
    return !!((a === "v4" || !a) && AR.test(n) || (a === "v6" || !a) && CR.test(n))
}
class Hn extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = String(a.data)),
        this._getType(a) !== ne.string) {
            const f = this._getOrReturnCtx(a);
            return ee(f, {
                code: X.invalid_type,
                expected: ne.string,
                received: f.parsedType
            }),
            he
        }
        const l = new Yt;
        let u;
        for (const f of this._def.checks)
            if (f.kind === "min")
                a.data.length < f.value && (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.too_small,
                    minimum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "max")
                a.data.length > f.value && (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.too_big,
                    maximum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "length") {
                const d = a.data.length > f.value
                  , h = a.data.length < f.value;
                (d || h) && (u = this._getOrReturnCtx(a, u),
                d ? ee(u, {
                    code: X.too_big,
                    maximum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: f.message
                }) : h && ee(u, {
                    code: X.too_small,
                    minimum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: f.message
                }),
                l.dirty())
            } else if (f.kind === "email")
                wR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "email",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "emoji")
                lf || (lf = new RegExp(RR,"u")),
                lf.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "emoji",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "uuid")
                SR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "uuid",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "nanoid")
                _R.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "nanoid",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "cuid")
                gR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "cuid",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "cuid2")
                vR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "cuid2",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "ulid")
                bR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "ulid",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "url")
                try {
                    new URL(a.data)
                } catch {
                    u = this._getOrReturnCtx(a, u),
                    ee(u, {
                        validation: "url",
                        code: X.invalid_string,
                        message: f.message
                    }),
                    l.dirty()
                }
            else
                f.kind === "regex" ? (f.regex.lastIndex = 0,
                f.regex.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "regex",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty())) : f.kind === "trim" ? a.data = a.data.trim() : f.kind === "includes" ? a.data.includes(f.value, f.position) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: {
                        includes: f.value,
                        position: f.position
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "toLowerCase" ? a.data = a.data.toLowerCase() : f.kind === "toUpperCase" ? a.data = a.data.toUpperCase() : f.kind === "startsWith" ? a.data.startsWith(f.value) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: {
                        startsWith: f.value
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "endsWith" ? a.data.endsWith(f.value) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: {
                        endsWith: f.value
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "datetime" ? jR(f).test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: "datetime",
                    message: f.message
                }),
                l.dirty()) : f.kind === "date" ? DR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: "date",
                    message: f.message
                }),
                l.dirty()) : f.kind === "time" ? NR(f).test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    code: X.invalid_string,
                    validation: "time",
                    message: f.message
                }),
                l.dirty()) : f.kind === "duration" ? ER.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "duration",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "ip" ? LR(a.data, f.version) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "ip",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "jwt" ? UR(a.data, f.alg) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "jwt",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "cidr" ? BR(a.data, f.version) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "cidr",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "base64" ? MR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "base64",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "base64url" ? zR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                ee(u, {
                    validation: "base64url",
                    code: X.invalid_string,
                    message: f.message
                }),
                l.dirty()) : Ce.assertNever(f);
        return {
            status: l.value,
            value: a.data
        }
    }
    _regex(a, r, l) {
        return this.refinement(u => a.test(u), {
            validation: r,
            code: X.invalid_string,
            ...ie.errToObj(l)
        })
    }
    _addCheck(a) {
        return new Hn({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    email(a) {
        return this._addCheck({
            kind: "email",
            ...ie.errToObj(a)
        })
    }
    url(a) {
        return this._addCheck({
            kind: "url",
            ...ie.errToObj(a)
        })
    }
    emoji(a) {
        return this._addCheck({
            kind: "emoji",
            ...ie.errToObj(a)
        })
    }
    uuid(a) {
        return this._addCheck({
            kind: "uuid",
            ...ie.errToObj(a)
        })
    }
    nanoid(a) {
        return this._addCheck({
            kind: "nanoid",
            ...ie.errToObj(a)
        })
    }
    cuid(a) {
        return this._addCheck({
            kind: "cuid",
            ...ie.errToObj(a)
        })
    }
    cuid2(a) {
        return this._addCheck({
            kind: "cuid2",
            ...ie.errToObj(a)
        })
    }
    ulid(a) {
        return this._addCheck({
            kind: "ulid",
            ...ie.errToObj(a)
        })
    }
    base64(a) {
        return this._addCheck({
            kind: "base64",
            ...ie.errToObj(a)
        })
    }
    base64url(a) {
        return this._addCheck({
            kind: "base64url",
            ...ie.errToObj(a)
        })
    }
    jwt(a) {
        return this._addCheck({
            kind: "jwt",
            ...ie.errToObj(a)
        })
    }
    ip(a) {
        return this._addCheck({
            kind: "ip",
            ...ie.errToObj(a)
        })
    }
    cidr(a) {
        return this._addCheck({
            kind: "cidr",
            ...ie.errToObj(a)
        })
    }
    datetime(a) {
        return typeof a == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: a
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof a?.precision > "u" ? null : a?.precision,
            offset: a?.offset ?? !1,
            local: a?.local ?? !1,
            ...ie.errToObj(a?.message)
        })
    }
    date(a) {
        return this._addCheck({
            kind: "date",
            message: a
        })
    }
    time(a) {
        return typeof a == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: a
        }) : this._addCheck({
            kind: "time",
            precision: typeof a?.precision > "u" ? null : a?.precision,
            ...ie.errToObj(a?.message)
        })
    }
    duration(a) {
        return this._addCheck({
            kind: "duration",
            ...ie.errToObj(a)
        })
    }
    regex(a, r) {
        return this._addCheck({
            kind: "regex",
            regex: a,
            ...ie.errToObj(r)
        })
    }
    includes(a, r) {
        return this._addCheck({
            kind: "includes",
            value: a,
            position: r?.position,
            ...ie.errToObj(r?.message)
        })
    }
    startsWith(a, r) {
        return this._addCheck({
            kind: "startsWith",
            value: a,
            ...ie.errToObj(r)
        })
    }
    endsWith(a, r) {
        return this._addCheck({
            kind: "endsWith",
            value: a,
            ...ie.errToObj(r)
        })
    }
    min(a, r) {
        return this._addCheck({
            kind: "min",
            value: a,
            ...ie.errToObj(r)
        })
    }
    max(a, r) {
        return this._addCheck({
            kind: "max",
            value: a,
            ...ie.errToObj(r)
        })
    }
    length(a, r) {
        return this._addCheck({
            kind: "length",
            value: a,
            ...ie.errToObj(r)
        })
    }
    nonempty(a) {
        return this.min(1, ie.errToObj(a))
    }
    trim() {
        return new Hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(a => a.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(a => a.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(a => a.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(a => a.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(a => a.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(a => a.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(a => a.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(a => a.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(a => a.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(a => a.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(a => a.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(a => a.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(a => a.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(a => a.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(a => a.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(a => a.kind === "base64url")
    }
    get minLength() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "min" && (a === null || r.value > a) && (a = r.value);
        return a
    }
    get maxLength() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "max" && (a === null || r.value < a) && (a = r.value);
        return a
    }
}
Hn.create = n => new Hn({
    checks: [],
    typeName: me.ZodString,
    coerce: n?.coerce ?? !1,
    ...ve(n)
});
function kR(n, a) {
    const r = (n.toString().split(".")[1] || "").length
      , l = (a.toString().split(".")[1] || "").length
      , u = r > l ? r : l
      , f = Number.parseInt(n.toFixed(u).replace(".", ""))
      , d = Number.parseInt(a.toFixed(u).replace(".", ""));
    return f % d / 10 ** u
}
class ri extends Te {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(a) {
        if (this._def.coerce && (a.data = Number(a.data)),
        this._getType(a) !== ne.number) {
            const f = this._getOrReturnCtx(a);
            return ee(f, {
                code: X.invalid_type,
                expected: ne.number,
                received: f.parsedType
            }),
            he
        }
        let l;
        const u = new Yt;
        for (const f of this._def.checks)
            f.kind === "int" ? Ce.isInteger(a.data) || (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.invalid_type,
                expected: "integer",
                received: "float",
                message: f.message
            }),
            u.dirty()) : f.kind === "min" ? (f.inclusive ? a.data < f.value : a.data <= f.value) && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.too_small,
                minimum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message
            }),
            u.dirty()) : f.kind === "max" ? (f.inclusive ? a.data > f.value : a.data >= f.value) && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.too_big,
                maximum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message
            }),
            u.dirty()) : f.kind === "multipleOf" ? kR(a.data, f.value) !== 0 && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.not_multiple_of,
                multipleOf: f.value,
                message: f.message
            }),
            u.dirty()) : f.kind === "finite" ? Number.isFinite(a.data) || (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.not_finite,
                message: f.message
            }),
            u.dirty()) : Ce.assertNever(f);
        return {
            status: u.value,
            value: a.data
        }
    }
    gte(a, r) {
        return this.setLimit("min", a, !0, ie.toString(r))
    }
    gt(a, r) {
        return this.setLimit("min", a, !1, ie.toString(r))
    }
    lte(a, r) {
        return this.setLimit("max", a, !0, ie.toString(r))
    }
    lt(a, r) {
        return this.setLimit("max", a, !1, ie.toString(r))
    }
    setLimit(a, r, l, u) {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, {
                kind: a,
                value: r,
                inclusive: l,
                message: ie.toString(u)
            }]
        })
    }
    _addCheck(a) {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    int(a) {
        return this._addCheck({
            kind: "int",
            message: ie.toString(a)
        })
    }
    positive(a) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ie.toString(a)
        })
    }
    negative(a) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ie.toString(a)
        })
    }
    nonpositive(a) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ie.toString(a)
        })
    }
    nonnegative(a) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ie.toString(a)
        })
    }
    multipleOf(a, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: a,
            message: ie.toString(r)
        })
    }
    finite(a) {
        return this._addCheck({
            kind: "finite",
            message: ie.toString(a)
        })
    }
    safe(a) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ie.toString(a)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ie.toString(a)
        })
    }
    get minValue() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "min" && (a === null || r.value > a) && (a = r.value);
        return a
    }
    get maxValue() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "max" && (a === null || r.value < a) && (a = r.value);
        return a
    }
    get isInt() {
        return !!this._def.checks.find(a => a.kind === "int" || a.kind === "multipleOf" && Ce.isInteger(a.value))
    }
    get isFinite() {
        let a = null
          , r = null;
        for (const l of this._def.checks) {
            if (l.kind === "finite" || l.kind === "int" || l.kind === "multipleOf")
                return !0;
            l.kind === "min" ? (r === null || l.value > r) && (r = l.value) : l.kind === "max" && (a === null || l.value < a) && (a = l.value)
        }
        return Number.isFinite(r) && Number.isFinite(a)
    }
}
ri.create = n => new ri({
    checks: [],
    typeName: me.ZodNumber,
    coerce: n?.coerce || !1,
    ...ve(n)
});
class si extends Te {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(a) {
        if (this._def.coerce)
            try {
                a.data = BigInt(a.data)
            } catch {
                return this._getInvalidInput(a)
            }
        if (this._getType(a) !== ne.bigint)
            return this._getInvalidInput(a);
        let l;
        const u = new Yt;
        for (const f of this._def.checks)
            f.kind === "min" ? (f.inclusive ? a.data < f.value : a.data <= f.value) && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.too_small,
                type: "bigint",
                minimum: f.value,
                inclusive: f.inclusive,
                message: f.message
            }),
            u.dirty()) : f.kind === "max" ? (f.inclusive ? a.data > f.value : a.data >= f.value) && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.too_big,
                type: "bigint",
                maximum: f.value,
                inclusive: f.inclusive,
                message: f.message
            }),
            u.dirty()) : f.kind === "multipleOf" ? a.data % f.value !== BigInt(0) && (l = this._getOrReturnCtx(a, l),
            ee(l, {
                code: X.not_multiple_of,
                multipleOf: f.value,
                message: f.message
            }),
            u.dirty()) : Ce.assertNever(f);
        return {
            status: u.value,
            value: a.data
        }
    }
    _getInvalidInput(a) {
        const r = this._getOrReturnCtx(a);
        return ee(r, {
            code: X.invalid_type,
            expected: ne.bigint,
            received: r.parsedType
        }),
        he
    }
    gte(a, r) {
        return this.setLimit("min", a, !0, ie.toString(r))
    }
    gt(a, r) {
        return this.setLimit("min", a, !1, ie.toString(r))
    }
    lte(a, r) {
        return this.setLimit("max", a, !0, ie.toString(r))
    }
    lt(a, r) {
        return this.setLimit("max", a, !1, ie.toString(r))
    }
    setLimit(a, r, l, u) {
        return new si({
            ...this._def,
            checks: [...this._def.checks, {
                kind: a,
                value: r,
                inclusive: l,
                message: ie.toString(u)
            }]
        })
    }
    _addCheck(a) {
        return new si({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    positive(a) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ie.toString(a)
        })
    }
    negative(a) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ie.toString(a)
        })
    }
    nonpositive(a) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ie.toString(a)
        })
    }
    nonnegative(a) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ie.toString(a)
        })
    }
    multipleOf(a, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: a,
            message: ie.toString(r)
        })
    }
    get minValue() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "min" && (a === null || r.value > a) && (a = r.value);
        return a
    }
    get maxValue() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "max" && (a === null || r.value < a) && (a = r.value);
        return a
    }
}
si.create = n => new si({
    checks: [],
    typeName: me.ZodBigInt,
    coerce: n?.coerce ?? !1,
    ...ve(n)
});
class du extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = !!a.data),
        this._getType(a) !== ne.boolean) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.boolean,
                received: l.parsedType
            }),
            he
        }
        return en(a.data)
    }
}
du.create = n => new du({
    typeName: me.ZodBoolean,
    coerce: n?.coerce || !1,
    ...ve(n)
});
class sr extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = new Date(a.data)),
        this._getType(a) !== ne.date) {
            const f = this._getOrReturnCtx(a);
            return ee(f, {
                code: X.invalid_type,
                expected: ne.date,
                received: f.parsedType
            }),
            he
        }
        if (Number.isNaN(a.data.getTime())) {
            const f = this._getOrReturnCtx(a);
            return ee(f, {
                code: X.invalid_date
            }),
            he
        }
        const l = new Yt;
        let u;
        for (const f of this._def.checks)
            f.kind === "min" ? a.data.getTime() < f.value && (u = this._getOrReturnCtx(a, u),
            ee(u, {
                code: X.too_small,
                message: f.message,
                inclusive: !0,
                exact: !1,
                minimum: f.value,
                type: "date"
            }),
            l.dirty()) : f.kind === "max" ? a.data.getTime() > f.value && (u = this._getOrReturnCtx(a, u),
            ee(u, {
                code: X.too_big,
                message: f.message,
                inclusive: !0,
                exact: !1,
                maximum: f.value,
                type: "date"
            }),
            l.dirty()) : Ce.assertNever(f);
        return {
            status: l.value,
            value: new Date(a.data.getTime())
        }
    }
    _addCheck(a) {
        return new sr({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    min(a, r) {
        return this._addCheck({
            kind: "min",
            value: a.getTime(),
            message: ie.toString(r)
        })
    }
    max(a, r) {
        return this._addCheck({
            kind: "max",
            value: a.getTime(),
            message: ie.toString(r)
        })
    }
    get minDate() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "min" && (a === null || r.value > a) && (a = r.value);
        return a != null ? new Date(a) : null
    }
    get maxDate() {
        let a = null;
        for (const r of this._def.checks)
            r.kind === "max" && (a === null || r.value < a) && (a = r.value);
        return a != null ? new Date(a) : null
    }
}
sr.create = n => new sr({
    checks: [],
    coerce: n?.coerce || !1,
    typeName: me.ZodDate,
    ...ve(n)
});
class Iy extends Te {
    _parse(a) {
        if (this._getType(a) !== ne.symbol) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.symbol,
                received: l.parsedType
            }),
            he
        }
        return en(a.data)
    }
}
Iy.create = n => new Iy({
    typeName: me.ZodSymbol,
    ...ve(n)
});
class $y extends Te {
    _parse(a) {
        if (this._getType(a) !== ne.undefined) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.undefined,
                received: l.parsedType
            }),
            he
        }
        return en(a.data)
    }
}
$y.create = n => new $y({
    typeName: me.ZodUndefined,
    ...ve(n)
});
class Wy extends Te {
    _parse(a) {
        if (this._getType(a) !== ne.null) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.null,
                received: l.parsedType
            }),
            he
        }
        return en(a.data)
    }
}
Wy.create = n => new Wy({
    typeName: me.ZodNull,
    ...ve(n)
});
class eg extends Te {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(a) {
        return en(a.data)
    }
}
eg.create = n => new eg({
    typeName: me.ZodAny,
    ...ve(n)
});
class tg extends Te {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(a) {
        return en(a.data)
    }
}
tg.create = n => new tg({
    typeName: me.ZodUnknown,
    ...ve(n)
});
class Oa extends Te {
    _parse(a) {
        const r = this._getOrReturnCtx(a);
        return ee(r, {
            code: X.invalid_type,
            expected: ne.never,
            received: r.parsedType
        }),
        he
    }
}
Oa.create = n => new Oa({
    typeName: me.ZodNever,
    ...ve(n)
});
class ng extends Te {
    _parse(a) {
        if (this._getType(a) !== ne.undefined) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.void,
                received: l.parsedType
            }),
            he
        }
        return en(a.data)
    }
}
ng.create = n => new ng({
    typeName: me.ZodVoid,
    ...ve(n)
});
class pn extends Te {
    _parse(a) {
        const {ctx: r, status: l} = this._processInputParams(a)
          , u = this._def;
        if (r.parsedType !== ne.array)
            return ee(r, {
                code: X.invalid_type,
                expected: ne.array,
                received: r.parsedType
            }),
            he;
        if (u.exactLength !== null) {
            const d = r.data.length > u.exactLength.value
              , h = r.data.length < u.exactLength.value;
            (d || h) && (ee(r, {
                code: d ? X.too_big : X.too_small,
                minimum: h ? u.exactLength.value : void 0,
                maximum: d ? u.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: u.exactLength.message
            }),
            l.dirty())
        }
        if (u.minLength !== null && r.data.length < u.minLength.value && (ee(r, {
            code: X.too_small,
            minimum: u.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: u.minLength.message
        }),
        l.dirty()),
        u.maxLength !== null && r.data.length > u.maxLength.value && (ee(r, {
            code: X.too_big,
            maximum: u.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: u.maxLength.message
        }),
        l.dirty()),
        r.common.async)
            return Promise.all([...r.data].map( (d, h) => u.type._parseAsync(new Aa(r,d,r.path,h)))).then(d => Yt.mergeArray(l, d));
        const f = [...r.data].map( (d, h) => u.type._parseSync(new Aa(r,d,r.path,h)));
        return Yt.mergeArray(l, f)
    }
    get element() {
        return this._def.type
    }
    min(a, r) {
        return new pn({
            ...this._def,
            minLength: {
                value: a,
                message: ie.toString(r)
            }
        })
    }
    max(a, r) {
        return new pn({
            ...this._def,
            maxLength: {
                value: a,
                message: ie.toString(r)
            }
        })
    }
    length(a, r) {
        return new pn({
            ...this._def,
            exactLength: {
                value: a,
                message: ie.toString(r)
            }
        })
    }
    nonempty(a) {
        return this.min(1, a)
    }
}
pn.create = (n, a) => new pn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: me.ZodArray,
    ...ve(a)
});
function $i(n) {
    if (n instanceof rt) {
        const a = {};
        for (const r in n.shape) {
            const l = n.shape[r];
            a[r] = Ta.create($i(l))
        }
        return new rt({
            ...n._def,
            shape: () => a
        })
    } else
        return n instanceof pn ? new pn({
            ...n._def,
            type: $i(n.element)
        }) : n instanceof Ta ? Ta.create($i(n.unwrap())) : n instanceof or ? or.create($i(n.unwrap())) : n instanceof li ? li.create(n.items.map(a => $i(a))) : n
}
class rt extends Te {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const a = this._def.shape()
          , r = Ce.objectKeys(a);
        return this._cached = {
            shape: a,
            keys: r
        },
        this._cached
    }
    _parse(a) {
        if (this._getType(a) !== ne.object) {
            const p = this._getOrReturnCtx(a);
            return ee(p, {
                code: X.invalid_type,
                expected: ne.object,
                received: p.parsedType
            }),
            he
        }
        const {status: l, ctx: u} = this._processInputParams(a)
          , {shape: f, keys: d} = this._getCached()
          , h = [];
        if (!(this._def.catchall instanceof Oa && this._def.unknownKeys === "strip"))
            for (const p in u.data)
                d.includes(p) || h.push(p);
        const y = [];
        for (const p of d) {
            const v = f[p]
              , g = u.data[p];
            y.push({
                key: {
                    status: "valid",
                    value: p
                },
                value: v._parse(new Aa(u,g,u.path,p)),
                alwaysSet: p in u.data
            })
        }
        if (this._def.catchall instanceof Oa) {
            const p = this._def.unknownKeys;
            if (p === "passthrough")
                for (const v of h)
                    y.push({
                        key: {
                            status: "valid",
                            value: v
                        },
                        value: {
                            status: "valid",
                            value: u.data[v]
                        }
                    });
            else if (p === "strict")
                h.length > 0 && (ee(u, {
                    code: X.unrecognized_keys,
                    keys: h
                }),
                l.dirty());
            else if (p !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const p = this._def.catchall;
            for (const v of h) {
                const g = u.data[v];
                y.push({
                    key: {
                        status: "valid",
                        value: v
                    },
                    value: p._parse(new Aa(u,g,u.path,v)),
                    alwaysSet: v in u.data
                })
            }
        }
        return u.common.async ? Promise.resolve().then(async () => {
            const p = [];
            for (const v of y) {
                const g = await v.key
                  , _ = await v.value;
                p.push({
                    key: g,
                    value: _,
                    alwaysSet: v.alwaysSet
                })
            }
            return p
        }
        ).then(p => Yt.mergeObjectSync(l, p)) : Yt.mergeObjectSync(l, y)
    }
    get shape() {
        return this._def.shape()
    }
    strict(a) {
        return ie.errToObj,
        new rt({
            ...this._def,
            unknownKeys: "strict",
            ...a !== void 0 ? {
                errorMap: (r, l) => {
                    const u = this._def.errorMap?.(r, l).message ?? l.defaultError;
                    return r.code === "unrecognized_keys" ? {
                        message: ie.errToObj(a).message ?? u
                    } : {
                        message: u
                    }
                }
            } : {}
        })
    }
    strip() {
        return new rt({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new rt({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(a) {
        return new rt({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...a
            })
        })
    }
    merge(a) {
        return new rt({
            unknownKeys: a._def.unknownKeys,
            catchall: a._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...a._def.shape()
            }),
            typeName: me.ZodObject
        })
    }
    setKey(a, r) {
        return this.augment({
            [a]: r
        })
    }
    catchall(a) {
        return new rt({
            ...this._def,
            catchall: a
        })
    }
    pick(a) {
        const r = {};
        for (const l of Ce.objectKeys(a))
            a[l] && this.shape[l] && (r[l] = this.shape[l]);
        return new rt({
            ...this._def,
            shape: () => r
        })
    }
    omit(a) {
        const r = {};
        for (const l of Ce.objectKeys(this.shape))
            a[l] || (r[l] = this.shape[l]);
        return new rt({
            ...this._def,
            shape: () => r
        })
    }
    deepPartial() {
        return $i(this)
    }
    partial(a) {
        const r = {};
        for (const l of Ce.objectKeys(this.shape)) {
            const u = this.shape[l];
            a && !a[l] ? r[l] = u : r[l] = u.optional()
        }
        return new rt({
            ...this._def,
            shape: () => r
        })
    }
    required(a) {
        const r = {};
        for (const l of Ce.objectKeys(this.shape))
            if (a && !a[l])
                r[l] = this.shape[l];
            else {
                let f = this.shape[l];
                for (; f instanceof Ta; )
                    f = f._def.innerType;
                r[l] = f
            }
        return new rt({
            ...this._def,
            shape: () => r
        })
    }
    keyof() {
        return jv(Ce.objectKeys(this.shape))
    }
}
rt.create = (n, a) => new rt({
    shape: () => n,
    unknownKeys: "strip",
    catchall: Oa.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
rt.strictCreate = (n, a) => new rt({
    shape: () => n,
    unknownKeys: "strict",
    catchall: Oa.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
rt.lazycreate = (n, a) => new rt({
    shape: n,
    unknownKeys: "strip",
    catchall: Oa.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
class hu extends Te {
    _parse(a) {
        const {ctx: r} = this._processInputParams(a)
          , l = this._def.options;
        function u(f) {
            for (const h of f)
                if (h.result.status === "valid")
                    return h.result;
            for (const h of f)
                if (h.result.status === "dirty")
                    return r.common.issues.push(...h.ctx.common.issues),
                    h.result;
            const d = f.map(h => new Vn(h.ctx.common.issues));
            return ee(r, {
                code: X.invalid_union,
                unionErrors: d
            }),
            he
        }
        if (r.common.async)
            return Promise.all(l.map(async f => {
                const d = {
                    ...r,
                    common: {
                        ...r.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await f._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: d
                    }),
                    ctx: d
                }
            }
            )).then(u);
        {
            let f;
            const d = [];
            for (const y of l) {
                const p = {
                    ...r,
                    common: {
                        ...r.common,
                        issues: []
                    },
                    parent: null
                }
                  , v = y._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: p
                });
                if (v.status === "valid")
                    return v;
                v.status === "dirty" && !f && (f = {
                    result: v,
                    ctx: p
                }),
                p.common.issues.length && d.push(p.common.issues)
            }
            if (f)
                return r.common.issues.push(...f.ctx.common.issues),
                f.result;
            const h = d.map(y => new Vn(y));
            return ee(r, {
                code: X.invalid_union,
                unionErrors: h
            }),
            he
        }
    }
    get options() {
        return this._def.options
    }
}
hu.create = (n, a) => new hu({
    options: n,
    typeName: me.ZodUnion,
    ...ve(a)
});
function wf(n, a) {
    const r = ba(n)
      , l = ba(a);
    if (n === a)
        return {
            valid: !0,
            data: n
        };
    if (r === ne.object && l === ne.object) {
        const u = Ce.objectKeys(a)
          , f = Ce.objectKeys(n).filter(h => u.indexOf(h) !== -1)
          , d = {
            ...n,
            ...a
        };
        for (const h of f) {
            const y = wf(n[h], a[h]);
            if (!y.valid)
                return {
                    valid: !1
                };
            d[h] = y.data
        }
        return {
            valid: !0,
            data: d
        }
    } else if (r === ne.array && l === ne.array) {
        if (n.length !== a.length)
            return {
                valid: !1
            };
        const u = [];
        for (let f = 0; f < n.length; f++) {
            const d = n[f]
              , h = a[f]
              , y = wf(d, h);
            if (!y.valid)
                return {
                    valid: !1
                };
            u.push(y.data)
        }
        return {
            valid: !0,
            data: u
        }
    } else
        return r === ne.date && l === ne.date && +n == +a ? {
            valid: !0,
            data: n
        } : {
            valid: !1
        }
}
class mu extends Te {
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a)
          , u = (f, d) => {
            if (Ky(f) || Ky(d))
                return he;
            const h = wf(f.value, d.value);
            return h.valid ? ((Fy(f) || Fy(d)) && r.dirty(),
            {
                status: r.value,
                value: h.data
            }) : (ee(l, {
                code: X.invalid_intersection_types
            }),
            he)
        }
        ;
        return l.common.async ? Promise.all([this._def.left._parseAsync({
            data: l.data,
            path: l.path,
            parent: l
        }), this._def.right._parseAsync({
            data: l.data,
            path: l.path,
            parent: l
        })]).then( ([f,d]) => u(f, d)) : u(this._def.left._parseSync({
            data: l.data,
            path: l.path,
            parent: l
        }), this._def.right._parseSync({
            data: l.data,
            path: l.path,
            parent: l
        }))
    }
}
mu.create = (n, a, r) => new mu({
    left: n,
    right: a,
    typeName: me.ZodIntersection,
    ...ve(r)
});
class li extends Te {
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ne.array)
            return ee(l, {
                code: X.invalid_type,
                expected: ne.array,
                received: l.parsedType
            }),
            he;
        if (l.data.length < this._def.items.length)
            return ee(l, {
                code: X.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            he;
        !this._def.rest && l.data.length > this._def.items.length && (ee(l, {
            code: X.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        r.dirty());
        const f = [...l.data].map( (d, h) => {
            const y = this._def.items[h] || this._def.rest;
            return y ? y._parse(new Aa(l,d,l.path,h)) : null
        }
        ).filter(d => !!d);
        return l.common.async ? Promise.all(f).then(d => Yt.mergeArray(r, d)) : Yt.mergeArray(r, f)
    }
    get items() {
        return this._def.items
    }
    rest(a) {
        return new li({
            ...this._def,
            rest: a
        })
    }
}
li.create = (n, a) => {
    if (!Array.isArray(n))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new li({
        items: n,
        typeName: me.ZodTuple,
        rest: null,
        ...ve(a)
    })
}
;
class ag extends Te {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ne.map)
            return ee(l, {
                code: X.invalid_type,
                expected: ne.map,
                received: l.parsedType
            }),
            he;
        const u = this._def.keyType
          , f = this._def.valueType
          , d = [...l.data.entries()].map( ([h,y], p) => ({
            key: u._parse(new Aa(l,h,l.path,[p, "key"])),
            value: f._parse(new Aa(l,y,l.path,[p, "value"]))
        }));
        if (l.common.async) {
            const h = new Map;
            return Promise.resolve().then(async () => {
                for (const y of d) {
                    const p = await y.key
                      , v = await y.value;
                    if (p.status === "aborted" || v.status === "aborted")
                        return he;
                    (p.status === "dirty" || v.status === "dirty") && r.dirty(),
                    h.set(p.value, v.value)
                }
                return {
                    status: r.value,
                    value: h
                }
            }
            )
        } else {
            const h = new Map;
            for (const y of d) {
                const p = y.key
                  , v = y.value;
                if (p.status === "aborted" || v.status === "aborted")
                    return he;
                (p.status === "dirty" || v.status === "dirty") && r.dirty(),
                h.set(p.value, v.value)
            }
            return {
                status: r.value,
                value: h
            }
        }
    }
}
ag.create = (n, a, r) => new ag({
    valueType: a,
    keyType: n,
    typeName: me.ZodMap,
    ...ve(r)
});
class Es extends Te {
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ne.set)
            return ee(l, {
                code: X.invalid_type,
                expected: ne.set,
                received: l.parsedType
            }),
            he;
        const u = this._def;
        u.minSize !== null && l.data.size < u.minSize.value && (ee(l, {
            code: X.too_small,
            minimum: u.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: u.minSize.message
        }),
        r.dirty()),
        u.maxSize !== null && l.data.size > u.maxSize.value && (ee(l, {
            code: X.too_big,
            maximum: u.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: u.maxSize.message
        }),
        r.dirty());
        const f = this._def.valueType;
        function d(y) {
            const p = new Set;
            for (const v of y) {
                if (v.status === "aborted")
                    return he;
                v.status === "dirty" && r.dirty(),
                p.add(v.value)
            }
            return {
                status: r.value,
                value: p
            }
        }
        const h = [...l.data.values()].map( (y, p) => f._parse(new Aa(l,y,l.path,p)));
        return l.common.async ? Promise.all(h).then(y => d(y)) : d(h)
    }
    min(a, r) {
        return new Es({
            ...this._def,
            minSize: {
                value: a,
                message: ie.toString(r)
            }
        })
    }
    max(a, r) {
        return new Es({
            ...this._def,
            maxSize: {
                value: a,
                message: ie.toString(r)
            }
        })
    }
    size(a, r) {
        return this.min(a, r).max(a, r)
    }
    nonempty(a) {
        return this.min(1, a)
    }
}
Es.create = (n, a) => new Es({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: me.ZodSet,
    ...ve(a)
});
class ig extends Te {
    get schema() {
        return this._def.getter()
    }
    _parse(a) {
        const {ctx: r} = this._processInputParams(a);
        return this._def.getter()._parse({
            data: r.data,
            path: r.path,
            parent: r
        })
    }
}
ig.create = (n, a) => new ig({
    getter: n,
    typeName: me.ZodLazy,
    ...ve(a)
});
class rg extends Te {
    _parse(a) {
        if (a.data !== this._def.value) {
            const r = this._getOrReturnCtx(a);
            return ee(r, {
                received: r.data,
                code: X.invalid_literal,
                expected: this._def.value
            }),
            he
        }
        return {
            status: "valid",
            value: a.data
        }
    }
    get value() {
        return this._def.value
    }
}
rg.create = (n, a) => new rg({
    value: n,
    typeName: me.ZodLiteral,
    ...ve(a)
});
function jv(n, a) {
    return new lr({
        values: n,
        typeName: me.ZodEnum,
        ...ve(a)
    })
}
class lr extends Te {
    _parse(a) {
        if (typeof a.data != "string") {
            const r = this._getOrReturnCtx(a)
              , l = this._def.values;
            return ee(r, {
                expected: Ce.joinValues(l),
                received: r.parsedType,
                code: X.invalid_type
            }),
            he
        }
        if (this._cache || (this._cache = new Set(this._def.values)),
        !this._cache.has(a.data)) {
            const r = this._getOrReturnCtx(a)
              , l = this._def.values;
            return ee(r, {
                received: r.data,
                code: X.invalid_enum_value,
                options: l
            }),
            he
        }
        return en(a.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const a = {};
        for (const r of this._def.values)
            a[r] = r;
        return a
    }
    get Values() {
        const a = {};
        for (const r of this._def.values)
            a[r] = r;
        return a
    }
    get Enum() {
        const a = {};
        for (const r of this._def.values)
            a[r] = r;
        return a
    }
    extract(a, r=this._def) {
        return lr.create(a, {
            ...this._def,
            ...r
        })
    }
    exclude(a, r=this._def) {
        return lr.create(this.options.filter(l => !a.includes(l)), {
            ...this._def,
            ...r
        })
    }
}
lr.create = jv;
class sg extends Te {
    _parse(a) {
        const r = Ce.getValidEnumValues(this._def.values)
          , l = this._getOrReturnCtx(a);
        if (l.parsedType !== ne.string && l.parsedType !== ne.number) {
            const u = Ce.objectValues(r);
            return ee(l, {
                expected: Ce.joinValues(u),
                received: l.parsedType,
                code: X.invalid_type
            }),
            he
        }
        if (this._cache || (this._cache = new Set(Ce.getValidEnumValues(this._def.values))),
        !this._cache.has(a.data)) {
            const u = Ce.objectValues(r);
            return ee(l, {
                received: l.data,
                code: X.invalid_enum_value,
                options: u
            }),
            he
        }
        return en(a.data)
    }
    get enum() {
        return this._def.values
    }
}
sg.create = (n, a) => new sg({
    values: n,
    typeName: me.ZodNativeEnum,
    ...ve(a)
});
class pu extends Te {
    unwrap() {
        return this._def.type
    }
    _parse(a) {
        const {ctx: r} = this._processInputParams(a);
        if (r.parsedType !== ne.promise && r.common.async === !1)
            return ee(r, {
                code: X.invalid_type,
                expected: ne.promise,
                received: r.parsedType
            }),
            he;
        const l = r.parsedType === ne.promise ? r.data : Promise.resolve(r.data);
        return en(l.then(u => this._def.type.parseAsync(u, {
            path: r.path,
            errorMap: r.common.contextualErrorMap
        })))
    }
}
pu.create = (n, a) => new pu({
    type: n,
    typeName: me.ZodPromise,
    ...ve(a)
});
class ur extends Te {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === me.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a)
          , u = this._def.effect || null
          , f = {
            addIssue: d => {
                ee(l, d),
                d.fatal ? r.abort() : r.dirty()
            }
            ,
            get path() {
                return l.path
            }
        };
        if (f.addIssue = f.addIssue.bind(f),
        u.type === "preprocess") {
            const d = u.transform(l.data, f);
            if (l.common.async)
                return Promise.resolve(d).then(async h => {
                    if (r.value === "aborted")
                        return he;
                    const y = await this._def.schema._parseAsync({
                        data: h,
                        path: l.path,
                        parent: l
                    });
                    return y.status === "aborted" ? he : y.status === "dirty" || r.value === "dirty" ? ms(y.value) : y
                }
                );
            {
                if (r.value === "aborted")
                    return he;
                const h = this._def.schema._parseSync({
                    data: d,
                    path: l.path,
                    parent: l
                });
                return h.status === "aborted" ? he : h.status === "dirty" || r.value === "dirty" ? ms(h.value) : h
            }
        }
        if (u.type === "refinement") {
            const d = h => {
                const y = u.refinement(h, f);
                if (l.common.async)
                    return Promise.resolve(y);
                if (y instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return h
            }
            ;
            if (l.common.async === !1) {
                const h = this._def.schema._parseSync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                return h.status === "aborted" ? he : (h.status === "dirty" && r.dirty(),
                d(h.value),
                {
                    status: r.value,
                    value: h.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                }).then(h => h.status === "aborted" ? he : (h.status === "dirty" && r.dirty(),
                d(h.value).then( () => ({
                    status: r.value,
                    value: h.value
                }))))
        }
        if (u.type === "transform")
            if (l.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                if (!rr(d))
                    return he;
                const h = u.transform(d.value, f);
                if (h instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: r.value,
                    value: h
                }
            } else
                return this._def.schema._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                }).then(d => rr(d) ? Promise.resolve(u.transform(d.value, f)).then(h => ({
                    status: r.value,
                    value: h
                })) : he);
        Ce.assertNever(u)
    }
}
ur.create = (n, a, r) => new ur({
    schema: n,
    typeName: me.ZodEffects,
    effect: a,
    ...ve(r)
});
ur.createWithPreprocess = (n, a, r) => new ur({
    schema: a,
    effect: {
        type: "preprocess",
        transform: n
    },
    typeName: me.ZodEffects,
    ...ve(r)
});
class Ta extends Te {
    _parse(a) {
        return this._getType(a) === ne.undefined ? en(void 0) : this._def.innerType._parse(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ta.create = (n, a) => new Ta({
    innerType: n,
    typeName: me.ZodOptional,
    ...ve(a)
});
class or extends Te {
    _parse(a) {
        return this._getType(a) === ne.null ? en(null) : this._def.innerType._parse(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
or.create = (n, a) => new or({
    innerType: n,
    typeName: me.ZodNullable,
    ...ve(a)
});
class Rf extends Te {
    _parse(a) {
        const {ctx: r} = this._processInputParams(a);
        let l = r.data;
        return r.parsedType === ne.undefined && (l = this._def.defaultValue()),
        this._def.innerType._parse({
            data: l,
            path: r.path,
            parent: r
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Rf.create = (n, a) => new Rf({
    innerType: n,
    typeName: me.ZodDefault,
    defaultValue: typeof a.default == "function" ? a.default : () => a.default,
    ...ve(a)
});
class Tf extends Te {
    _parse(a) {
        const {ctx: r} = this._processInputParams(a)
          , l = {
            ...r,
            common: {
                ...r.common,
                issues: []
            }
        }
          , u = this._def.innerType._parse({
            data: l.data,
            path: l.path,
            parent: {
                ...l
            }
        });
        return fu(u) ? u.then(f => ({
            status: "valid",
            value: f.status === "valid" ? f.value : this._def.catchValue({
                get error() {
                    return new Vn(l.common.issues)
                },
                input: l.data
            })
        })) : {
            status: "valid",
            value: u.status === "valid" ? u.value : this._def.catchValue({
                get error() {
                    return new Vn(l.common.issues)
                },
                input: l.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Tf.create = (n, a) => new Tf({
    innerType: n,
    typeName: me.ZodCatch,
    catchValue: typeof a.catch == "function" ? a.catch : () => a.catch,
    ...ve(a)
});
class lg extends Te {
    _parse(a) {
        if (this._getType(a) !== ne.nan) {
            const l = this._getOrReturnCtx(a);
            return ee(l, {
                code: X.invalid_type,
                expected: ne.nan,
                received: l.parsedType
            }),
            he
        }
        return {
            status: "valid",
            value: a.data
        }
    }
}
lg.create = n => new lg({
    typeName: me.ZodNaN,
    ...ve(n)
});
class HR extends Te {
    _parse(a) {
        const {ctx: r} = this._processInputParams(a)
          , l = r.data;
        return this._def.type._parse({
            data: l,
            path: r.path,
            parent: r
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Vf extends Te {
    _parse(a) {
        const {status: r, ctx: l} = this._processInputParams(a);
        if (l.common.async)
            return (async () => {
                const f = await this._def.in._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                return f.status === "aborted" ? he : f.status === "dirty" ? (r.dirty(),
                ms(f.value)) : this._def.out._parseAsync({
                    data: f.value,
                    path: l.path,
                    parent: l
                })
            }
            )();
        {
            const u = this._def.in._parseSync({
                data: l.data,
                path: l.path,
                parent: l
            });
            return u.status === "aborted" ? he : u.status === "dirty" ? (r.dirty(),
            {
                status: "dirty",
                value: u.value
            }) : this._def.out._parseSync({
                data: u.value,
                path: l.path,
                parent: l
            })
        }
    }
    static create(a, r) {
        return new Vf({
            in: a,
            out: r,
            typeName: me.ZodPipeline
        })
    }
}
class Af extends Te {
    _parse(a) {
        const r = this._def.innerType._parse(a)
          , l = u => (rr(u) && (u.value = Object.freeze(u.value)),
        u);
        return fu(r) ? r.then(u => l(u)) : l(r)
    }
    unwrap() {
        return this._def.innerType
    }
}
Af.create = (n, a) => new Af({
    innerType: n,
    typeName: me.ZodReadonly,
    ...ve(a)
});
var me;
(function(n) {
    n.ZodString = "ZodString",
    n.ZodNumber = "ZodNumber",
    n.ZodNaN = "ZodNaN",
    n.ZodBigInt = "ZodBigInt",
    n.ZodBoolean = "ZodBoolean",
    n.ZodDate = "ZodDate",
    n.ZodSymbol = "ZodSymbol",
    n.ZodUndefined = "ZodUndefined",
    n.ZodNull = "ZodNull",
    n.ZodAny = "ZodAny",
    n.ZodUnknown = "ZodUnknown",
    n.ZodNever = "ZodNever",
    n.ZodVoid = "ZodVoid",
    n.ZodArray = "ZodArray",
    n.ZodObject = "ZodObject",
    n.ZodUnion = "ZodUnion",
    n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    n.ZodIntersection = "ZodIntersection",
    n.ZodTuple = "ZodTuple",
    n.ZodRecord = "ZodRecord",
    n.ZodMap = "ZodMap",
    n.ZodSet = "ZodSet",
    n.ZodFunction = "ZodFunction",
    n.ZodLazy = "ZodLazy",
    n.ZodLiteral = "ZodLiteral",
    n.ZodEnum = "ZodEnum",
    n.ZodEffects = "ZodEffects",
    n.ZodNativeEnum = "ZodNativeEnum",
    n.ZodOptional = "ZodOptional",
    n.ZodNullable = "ZodNullable",
    n.ZodDefault = "ZodDefault",
    n.ZodCatch = "ZodCatch",
    n.ZodPromise = "ZodPromise",
    n.ZodBranded = "ZodBranded",
    n.ZodPipeline = "ZodPipeline",
    n.ZodReadonly = "ZodReadonly"
}
)(me || (me = {}));
const ug = Hn.create;
ri.create;
si.create;
du.create;
sr.create;
Oa.create;
pn.create;
const qR = rt.create;
hu.create;
mu.create;
li.create;
const ZR = lr.create;
pu.create;
Ta.create;
or.create;
const Jl = {
    string: (n => Hn.create({
        ...n,
        coerce: !0
    })),
    number: (n => ri.create({
        ...n,
        coerce: !0
    })),
    boolean: (n => du.create({
        ...n,
        coerce: !0
    })),
    bigint: (n => si.create({
        ...n,
        coerce: !0
    })),
    date: (n => sr.create({
        ...n,
        coerce: !0
    }))
}
  , VR = () => Tu( () => import("./properties-DkqQM_V7.js"), __vite__mapDeps([0, 1]))
  , YR = qR({
    city: ug().optional(),
    type: ug().optional(),
    beds: Jl.number().optional(),
    min: Jl.number().optional(),
    max: Jl.number().optional(),
    featured: Jl.boolean().optional(),
    sort: ZR(["featured", "price-asc", "price-desc", "newest"]).optional()
})
  , QR = Hf("/properties")({
    validateSearch: YR,
    head: () => ({
        meta: [{
            title: "Residences — werent."
        }, {
            name: "description",
            content: "Browse the full werent. network of architect-designed long-term rentals across Sydney, Melbourne, Brisbane and Perth."
        }, {
            property: "og:title",
            content: "Residences — werent."
        }, {
            property: "og:description",
            content: "Architect-designed long-term rentals across Australia."
        }, {
            property: "og:url",
            content: "/properties"
        }],
        links: [{
            rel: "canonical",
            href: "/properties"
        }]
    }),
    component: ou(VR, "component")
})
  , GR = () => Tu( () => import("./index-DbaXOGLI.js"), __vite__mapDeps([2, 1]))
  , XR = Hf("/")({
    head: () => ({
        meta: [{
            title: "werent. — A private rental network for considered residences"
        }, {
            name: "description",
            content: "Curated long-term rentals across Sydney, Melbourne, Brisbane and Perth. Architect-designed homes, by invitation."
        }, {
            property: "og:title",
            content: "werent. — A private rental network for considered residences"
        }, {
            property: "og:description",
            content: "Architect-designed long-term rentals. By invitation."
        }, {
            property: "og:url",
            content: "/"
        }],
        links: [{
            rel: "canonical",
            href: "/"
        }]
    }),
    component: ou(GR, "component")
})
  , og = "/assets/prop-bondi-C-D59LNd.jpg"
  , uf = "/assets/prop-loft-Ckxf1LgO.jpg"
  , cg = "/assets/prop-queenslander-4iwcWCwJ.jpg"
  , fg = "/assets/prop-coastal-Bn2PomcG.jpg"
  , of = "/assets/prop-midcentury-U0VBIrMK.jpg"
  , dg = "/assets/prop-heritage-CQhtrQEX.jpg"
  , kn = "/assets/int-kitchen-_J9K_1rl.jpg"
  , ya = "/assets/int-bedroom-dPo1uIia.jpg"
  , ga = "/assets/int-bath-LMUwQvkx.jpg"
  , hg = "/assets/hero-harbour-lT1gdrNj.jpg"
  , hT = ["Sydney", "Melbourne", "Brisbane", "Perth"]
  , mT = ["House", "Apartment", "Townhouse", "Penthouse", "Villa"]
  , PR = [{
    slug: "harbour-pavilion-mosman",
    title: "The Harbour Pavilion",
    tagline: "A glass-walled retreat above Mosman Bay.",
    description: "Suspended above the water on a private headland, this four-bedroom pavilion frames Sydney Harbour as a living artwork. Sliding cedar walls open the living room to a sandstone terrace and lap pool. Designed by Tobias Partners, materials run from blackbutt timber to honed Carrara, with a custom Boffi kitchen at the heart of the home.",
    type: "House",
    city: "Sydney",
    neighbourhood: "Mosman",
    state: "NSW",
    weeklyRent: 4850,
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    internalSqm: 412,
    available: "2026-06-15",
    featured: !0,
    cover: hg,
    gallery: [hg, kn, ya, ga, of],
    amenities: ["Harbour views", "Lap pool", "Wine cellar", "Smart home", "Concierge", "Private jetty"],
    agent: {
        name: "Eloise Whitford",
        agency: "werent. Private",
        phone: "+61 2 9000 4000"
    },
    coords: {
        lat: -33.8281,
        lng: 151.2417
    }
}, {
    slug: "white-terrace-bondi",
    title: "The White Terrace",
    tagline: "Sun-bleached coastal serenity, two streets from the sand.",
    description: "A re-imagined Federation terrace finished in limewash, oak and travertine. Arched openings flow to a sheltered courtyard with mature frangipani and an outdoor bath. Three bedrooms, study, and a chef's kitchen by Cantilever.",
    type: "Townhouse",
    city: "Sydney",
    neighbourhood: "Bondi Beach",
    state: "NSW",
    weeklyRent: 2950,
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    internalSqm: 198,
    available: "2026-05-01",
    featured: !0,
    cover: og,
    gallery: [og, kn, ga, ya],
    amenities: ["Outdoor bath", "Courtyard", "Fireplace", "EV charging", "Walk to beach"],
    agent: {
        name: "Marcus Tan",
        agency: "werent. Eastern Beaches",
        phone: "+61 2 9300 1200"
    },
    coords: {
        lat: -33.8915,
        lng: 151.2767
    }
}, {
    slug: "fitzroy-foundry-loft",
    title: "Foundry Loft",
    tagline: "A cast-iron warehouse converted into a single grand room.",
    description: "Five-metre ceilings, original brickwork and crittall windows define this Fitzroy landmark. The mezzanine bedroom floats above a polished concrete floor; a custom Henrybuilt kitchen anchors the open plan. One of three lofts in the building.",
    type: "Apartment",
    city: "Melbourne",
    neighbourhood: "Fitzroy",
    state: "VIC",
    weeklyRent: 1850,
    bedrooms: 2,
    bathrooms: 2,
    carSpaces: 1,
    internalSqm: 184,
    available: "2026-04-20",
    featured: !0,
    cover: uf,
    gallery: [uf, kn, ya, ga],
    amenities: ["5m ceilings", "Crittall windows", "Mezzanine", "Secure parking", "Bike room"],
    agent: {
        name: "Anouk Lévesque",
        agency: "werent. Inner North",
        phone: "+61 3 9415 7700"
    },
    coords: {
        lat: -37.7986,
        lng: 144.9784
    }
}, {
    slug: "frangipani-queenslander-paddington",
    title: "Frangipani House",
    tagline: "A heritage Queenslander wrapped in sub-tropical garden.",
    description: "Original VJ panelling, ten-foot ceilings and silky oak floors. The verandah wraps three sides, opening to a frangipani garden and saltwater plunge. Four bedrooms, two living rooms, and a renovated kitchen that respects the home's 1908 bones.",
    type: "House",
    city: "Brisbane",
    neighbourhood: "Paddington",
    state: "QLD",
    weeklyRent: 1675,
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    internalSqm: 268,
    available: "2026-05-10",
    featured: !1,
    cover: cg,
    gallery: [cg, ya, kn, ga],
    amenities: ["Wrap verandah", "Plunge pool", "Fireplace", "Garden", "Pets considered"],
    agent: {
        name: "James O'Hara",
        agency: "werent. Brisbane",
        phone: "+61 7 3000 6600"
    },
    coords: {
        lat: -27.4595,
        lng: 153.0024
    }
}, {
    slug: "cottesloe-edge-villa",
    title: "Cottesloe Edge",
    tagline: "Board-formed concrete on the Indian Ocean.",
    description: "A Wright Feldhusen villa cantilevered above the dune line. An infinity pool aligns with the horizon; the primary suite opens to its own terrace and outdoor shower. Five bedrooms, media room, and a 1,400-bottle wine wall.",
    type: "Villa",
    city: "Perth",
    neighbourhood: "Cottesloe",
    state: "WA",
    weeklyRent: 3450,
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    internalSqm: 486,
    available: "2026-07-01",
    featured: !0,
    cover: fg,
    gallery: [fg, kn, ya, ga],
    amenities: ["Infinity pool", "Ocean frontage", "Wine wall", "Media room", "Outdoor shower"],
    agent: {
        name: "Priya Naidu",
        agency: "werent. WA",
        phone: "+61 8 9300 1100"
    },
    coords: {
        lat: -31.9988,
        lng: 115.7546
    }
}, {
    slug: "blackbutt-house-bellevue-hill",
    title: "Blackbutt House",
    tagline: "Mid-century calm under a canopy of native trees.",
    description: "A 1962 Sydney School home, sensitively restored. Low-slung blackbutt cladding, clerestory glazing, and a sunken living room around an original sandstone hearth. Three bedrooms plus studio.",
    type: "House",
    city: "Sydney",
    neighbourhood: "Bellevue Hill",
    state: "NSW",
    weeklyRent: 2450,
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    internalSqm: 242,
    available: "2026-04-08",
    featured: !1,
    cover: of,
    gallery: [of, kn, ya, ga],
    amenities: ["Architect-designed", "Studio", "Native garden", "Fireplace", "Carport"],
    agent: {
        name: "Eloise Whitford",
        agency: "werent. Private",
        phone: "+61 2 9000 4000"
    },
    coords: {
        lat: -33.8786,
        lng: 151.2616
    }
}, {
    slug: "carlton-ironwork-terrace",
    title: "Ironwork Terrace",
    tagline: "A double-fronted Victorian on a leafy Carlton boulevard.",
    description: "Original Cordova tiles, lacework balcony, marble fireplaces. Sympathetically restored with hydronic heating throughout and a contemporary rear extension overlooking a walled garden.",
    type: "Townhouse",
    city: "Melbourne",
    neighbourhood: "Carlton",
    state: "VIC",
    weeklyRent: 1495,
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    internalSqm: 215,
    available: "2026-05-25",
    featured: !1,
    cover: dg,
    gallery: [dg, kn, ya, ga],
    amenities: ["Heritage listed", "Hydronic heating", "Walled garden", "Marble fireplaces"],
    agent: {
        name: "Anouk Lévesque",
        agency: "werent. Inner North",
        phone: "+61 3 9415 7700"
    },
    coords: {
        lat: -37.7996,
        lng: 144.9669
    }
}, {
    slug: "sky-penthouse-southbank",
    title: "Southbank Sky Penthouse",
    tagline: "A full-floor residence above the Yarra.",
    description: "Three-bedroom penthouse on the 47th floor with private lift entry. Wrap-around terraces, library, butler's pantry. Building amenities include 25m pool, residents' lounge and 24-hour concierge.",
    type: "Penthouse",
    city: "Melbourne",
    neighbourhood: "Southbank",
    state: "VIC",
    weeklyRent: 3950,
    bedrooms: 3,
    bathrooms: 3,
    carSpaces: 2,
    internalSqm: 312,
    available: "2026-06-01",
    featured: !0,
    cover: kn,
    gallery: [kn, ya, ga, uf],
    amenities: ["Private lift", "Concierge", "25m pool", "Gym", "City views", "Wine room"],
    agent: {
        name: "Anouk Lévesque",
        agency: "werent. Inner North",
        phone: "+61 3 9415 7700"
    },
    coords: {
        lat: -37.8226,
        lng: 144.9648
    }
}];
function KR(n) {
    return PR.find(a => a.slug === n)
}
function FR(n) {
    return new Intl.NumberFormat("en-AU",{
        style: "currency",
        currency: "AUD",
        maximumFractionDigits: 0
    }).format(n)
}
const JR = () => Tu( () => import("./properties._slug-x5KHzaKI.js"), [])
  , IR = () => Tu( () => import("./properties._slug-CJHCY0Ib.js"), __vite__mapDeps([3, 1]))
  , $R = Hf("/properties/$slug")({
    loader: ({params: n}) => {
        const a = KR(n.slug);
        if (!a)
            throw ZS();
        return {
            property: a
        }
    }
    ,
    head: ({loaderData: n}) => {
        const a = n?.property;
        return a ? {
            meta: [{
                title: `${a.title}, ${a.neighbourhood} — werent.`
            }, {
                name: "description",
                content: `${a.tagline} ${a.bedrooms} bed, ${a.bathrooms} bath in ${a.neighbourhood}, ${a.city}. ${FR(a.weeklyRent)} per week.`
            }, {
                property: "og:title",
                content: `${a.title} — werent.`
            }, {
                property: "og:description",
                content: a.tagline
            }, {
                property: "og:type",
                content: "article"
            }, {
                property: "og:image",
                content: a.cover
            }, {
                name: "twitter:image",
                content: a.cover
            }, {
                property: "og:url",
                content: `/properties/${a.slug}`
            }],
            links: [{
                rel: "canonical",
                href: `/properties/${a.slug}`
            }],
            scripts: [{
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Residence",
                    name: a.title,
                    description: a.description,
                    image: a.gallery,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: a.neighbourhood,
                        addressRegion: a.state,
                        addressCountry: "AU"
                    },
                    numberOfRooms: a.bedrooms,
                    floorSize: {
                        "@type": "QuantitativeValue",
                        value: a.internalSqm,
                        unitCode: "MTK"
                    },
                    offers: {
                        "@type": "Offer",
                        price: a.weeklyRent,
                        priceCurrency: "AUD",
                        priceSpecification: {
                            "@type": "UnitPriceSpecification",
                            price: a.weeklyRent,
                            priceCurrency: "AUD",
                            unitText: "WEEK"
                        },
                        availability: "https://schema.org/InStock"
                    }
                })
            }]
        } : {}
    }
    ,
    component: ou(IR, "component"),
    notFoundComponent: ou(JR, "notFoundComponent")
})
  , Lv = QR.update({
    id: "/properties",
    path: "/properties",
    getParentRoute: () => Ru
})
  , WR = XR.update({
    id: "/",
    path: "/",
    getParentRoute: () => Ru
})
  , eT = $R.update({
    id: "/$slug",
    path: "/$slug",
    getParentRoute: () => Lv
})
  , tT = {
    PropertiesSlugRoute: eT
}
  , nT = Lv._addFileChildren(tT)
  , aT = {
    IndexRoute: WR,
    PropertiesRoute: nT
}
  , iT = Ru._addFileChildren(aT)
  , rT = () => {
    const n = new iR;
    return bw({
        routeTree: iT,
        context: {
            queryClient: n
        },
        scrollRestoration: !0,
        defaultPreloadStaleTime: 0
    })
}
;
async function sT() {
    const n = await rT();
    let a;
    if (By) {
        const r = await By.getOptions();
        r.serializationAdapters = r.serializationAdapters ?? [],
        window.__TSS_START_OPTIONS__ = r,
        a = r.serializationAdapters,
        n.options.defaultSsr = r.defaultSsr
    } else
        a = [],
        window.__TSS_START_OPTIONS__ = {
            serializationAdapters: a
        };
    return a.push(EE),
    n.options.serializationAdapters && a.push(...n.options.serializationAdapters),
    n.update({
        basepath: "",
        serializationAdapters: a
    }),
    n.stores.matchesId.get().length || await RE(n),
    n
}
async function lT() {
    const n = await sT();
    return window.$_TSR?.h(),
    n
}
var cf;
function uT() {
    return cf || (cf = lT()),
    P.jsx(CE, {
        promise: cf,
        children: n => P.jsx(xw, {
            router: n
        })
    })
}
re.startTransition( () => {
    cS.hydrateRoot(document, P.jsx(re.StrictMode, {
        children: P.jsx(uT, {})
    }))
}
);
export {hT as C, kf as L, mT as P, QR as R, kn as a, dg as b, ga as c, $R as d, of as e, FR as f, hg as h, P as j, PR as p, re as r, vv as u};
