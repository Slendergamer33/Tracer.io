(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        8923: function(e, t, n) {
            "use strict";
            n(8812)
        },
        1316: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return r
                }
            }), n(1132);
            var r = "_1pq7tdv0"
        },
        3463: function(e, t, n) {
            "use strict";
            var r = n(8570),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                s = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {};

            function l(e) {
                return r.isMemo(e) ? s : i[e.$$typeof] || a
            }
            i[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, i[r.Memo] = s;
            var c = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                g = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (g) {
                        var a = f(n);
                        a && a !== g && e(t, a, r)
                    }
                    var s = u(n);
                    d && (s = s.concat(d(n)));
                    for (var i = l(t), m = l(n), h = 0; h < s.length; ++h) {
                        var y = s[h];
                        if (!o[y] && !(r && r[y]) && !(m && m[y]) && !(i && i[y])) {
                            var b = p(n, y);
                            try {
                                c(t, y, b)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        6570: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(2096)
            }])
        },
        2096: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return e_
                }
            });
            var a = n(2322);
            n(8923);
            var o = n(7729),
                s = n.n(o),
                i = n(2784);
            let l = 0;

            function c(e, t) {
                let n = `atom${++l}`,
                    r = {
                        toString: () => n
                    };
                return "function" == typeof e ? r.read = e : (r.init = e, r.read = e => e(r), r.write = (e, t, n) => t(r, "function" == typeof n ? n(e(r)) : n)), t && (r.write = t), r
            }
            let u = e => "init" in e,
                d = e => !!e.write,
                p = new WeakMap,
                f = (e, t) => {
                    p.set(e, t), e.catch(() => {}).finally(() => p.delete(e))
                },
                g = (e, t) => {
                    let n = p.get(e);
                    n && (p.delete(e), n(t))
                },
                m = (e, t) => {
                    e.status = "fulfilled", e.value = t
                },
                h = (e, t) => {
                    e.status = "rejected", e.reason = t
                },
                y = (e, t) => "v" in e && "v" in t && Object.is(e.v, t.v),
                b = (e, t) => "e" in e && "e" in t && Object.is(e.e, t.e),
                v = e => "v" in e && e.v instanceof Promise,
                x = e => {
                    if ("e" in e) throw e.e;
                    return e.v
                },
                w = () => {
                    let e, t;
                    let n = new WeakMap,
                        r = new WeakMap,
                        a = new Map;
                    e = new Set, t = new Set;
                    let o = e => n.get(e),
                        s = (e, t) => {
                            Object.freeze(t);
                            let r = n.get(e);
                            if (n.set(e, t), a.has(e) || a.set(e, r), r && v(r)) {
                                let e = "v" in t ? t.v instanceof Promise ? t.v : Promise.resolve(t.v) : Promise.reject(t.e);
                                g(r.v, e)
                            }
                        },
                        i = (e, t, n) => {
                            let r = new Map,
                                a = !1;
                            n.forEach((n, o) => {
                                n || o !== e || (n = t), n ? (r.set(o, n), t.d.get(o) !== n && (a = !0)) : console.warn("[Bug] atom state not found")
                            }), (a || t.d.size !== r.size) && (t.d = r)
                        },
                        l = (e, t, n) => {
                            let r = o(e),
                                a = {
                                    d: (null == r ? void 0 : r.d) || new Map,
                                    v: t
                                };
                            return (n && i(e, a, n), r && y(r, a) && r.d === a.d) ? r : (s(e, a), a)
                        },
                        c = (e, t, n, r) => {
                            if (t instanceof Promise) {
                                let a;
                                let s = new Promise((r, i) => {
                                    let c = !1;
                                    t.then(t => {
                                        if (!c) {
                                            c = !0;
                                            let a = o(e),
                                                i = l(e, s, n);
                                            m(s, t), r(t), (null == a ? void 0 : a.d) !== i.d && R(e, i, null == a ? void 0 : a.d)
                                        }
                                    }, t => {
                                        if (!c) {
                                            c = !0;
                                            let r = o(e),
                                                a = l(e, s, n);
                                            h(s, t), i(t), (null == r ? void 0 : r.d) !== a.d && R(e, a, null == r ? void 0 : r.d)
                                        }
                                    }), a = e => {
                                        c || (c = !0, e.then(e => m(s, e), e => h(s, e)), r(e))
                                    }
                                });
                                return s.status = "pending", f(s, e => {
                                    e && a(e), null == r || r()
                                }), l(e, s, n)
                            }
                            return l(e, t, n)
                        },
                        p = (e, t, n) => {
                            let r = o(e),
                                a = {
                                    d: (null == r ? void 0 : r.d) || new Map,
                                    e: t
                                };
                            return (n && i(e, a, n), r && b(r, a) && r.d === a.d) ? r : (s(e, a), a)
                        },
                        w = e => {
                            let t, n;
                            let a = o(e);
                            if (a && (a.d.forEach((t, n) => {
                                    n === e || r.has(n) || w(n)
                                }), Array.from(a.d).every(([t, n]) => t === e || o(t) === n))) return a;
                            let s = new Map,
                                i = !0,
                                l = t => {
                                    if (t === e) {
                                        let e = o(t);
                                        if (e) return s.set(t, e), x(e);
                                        if (u(t)) return s.set(t, void 0), t.init;
                                        throw Error("no atom init")
                                    }
                                    let n = w(t);
                                    return s.set(t, n), x(n)
                                },
                                f = {
                                    get signal() {
                                        return t || (t = new AbortController), t.signal
                                    },
                                    get setSelf() {
                                        return d(e) || console.warn("setSelf function cannot be used with read-only atom"), !n && d(e) && (n = (...t) => {
                                            if (i && console.warn("setSelf function cannot be called in sync"), !i) return C(e, ...t)
                                        }), n
                                    }
                                };
                            try {
                                let n = e.read(l, f);
                                return c(e, n, s, () => null == t ? void 0 : t.abort())
                            } catch (t) {
                                return p(e, t, s)
                            } finally {
                                i = !1
                            }
                        },
                        k = e => x(w(e)),
                        E = e => {
                            let t = r.get(e);
                            return t || (t = L(e)), t
                        },
                        S = (e, t) => !t.l.size && (!t.t.size || 1 === t.t.size && t.t.has(e)),
                        j = e => {
                            let t = r.get(e);
                            t && S(e, t) && N(e)
                        },
                        A = e => {
                            let t = r.get(e);
                            null == t || t.t.forEach(t => {
                                if (t !== e) {
                                    let e = o(t),
                                        n = w(t);
                                    e && y(e, n) || A(t)
                                }
                            })
                        },
                        O = (e, ...t) => {
                            let n = !0,
                                r = e => x(w(e)),
                                a = (t, ...r) => {
                                    let a;
                                    if (t === e) {
                                        if (!u(t)) throw Error("atom not writable");
                                        let e = o(t),
                                            n = c(t, r[0]);
                                        e && y(e, n) || A(t)
                                    } else a = O(t, ...r);
                                    return n || $(), a
                                },
                                s = e.write(r, a, ...t);
                            return n = !1, s
                        },
                        C = (e, ...t) => {
                            let n = O(e, ...t);
                            return $(), n
                        },
                        L = (e, n) => {
                            let a = {
                                t: new Set(n && [n]),
                                l: new Set
                            };
                            if (r.set(e, a), t.add(e), w(e).d.forEach((t, n) => {
                                    let a = r.get(n);
                                    a ? a.t.add(e) : n !== e && L(n, e)
                                }), w(e), d(e) && e.onMount) {
                                let t = e.onMount((...t) => C(e, ...t));
                                t && (a.u = t)
                            }
                            return a
                        },
                        N = e => {
                            var n;
                            let a = null == (n = r.get(e)) ? void 0 : n.u;
                            a && a(), r.delete(e), t.delete(e);
                            let s = o(e);
                            s ? (v(s) && g(s.v), s.d.forEach((t, n) => {
                                if (n !== e) {
                                    let t = r.get(n);
                                    t && (t.t.delete(e), S(n, t) && N(n))
                                }
                            })) : console.warn("[Bug] could not find atom state to unmount", e)
                        },
                        R = (e, t, n) => {
                            let a = new Set(t.d.keys());
                            null == n || n.forEach((t, n) => {
                                if (a.has(n)) {
                                    a.delete(n);
                                    return
                                }
                                let o = r.get(n);
                                o && (o.t.delete(e), S(n, o) && N(n))
                            }), a.forEach(t => {
                                let n = r.get(t);
                                n ? n.t.add(e) : r.has(e) && L(t, e)
                            })
                        },
                        $ = () => {
                            for (; a.size;) {
                                let e = Array.from(a);
                                a.clear(), e.forEach(([e, t]) => {
                                    let n = o(e);
                                    if (n) {
                                        n.d !== (null == t ? void 0 : t.d) && R(e, n, null == t ? void 0 : t.d);
                                        let a = r.get(e);
                                        a && !(t && !v(t) && (y(t, n) || b(t, n))) && a.l.forEach(e => e())
                                    } else console.warn("[Bug] no atom state to flush")
                                })
                            }
                            e.forEach(e => e("state"))
                        },
                        _ = (t, n) => {
                            let r = E(t);
                            $();
                            let a = r.l;
                            return a.add(n), e.forEach(e => e("sub")), () => {
                                a.delete(n), j(t), e.forEach(e => e("unsub"))
                            }
                        };
                    return {
                        get: k,
                        set: C,
                        sub: _,
                        dev_subscribe_store: t => (e.add(t), () => {
                            e.delete(t)
                        }),
                        dev_get_mounted_atoms: () => t.values(),
                        dev_get_atom_state: e => n.get(e),
                        dev_get_mounted: e => r.get(e),
                        dev_restore_atoms: e => {
                            for (let [t, n] of e) u(t) && (c(t, n), A(t));
                            $()
                        }
                    }
                },
                k = () => (r || (r = w()), r),
                E = (0, i.createContext)(void 0),
                S = e => {
                    let t = (0, i.useContext)(E);
                    return (null == e ? void 0 : e.store) || t || k()
                },
                j = e => e instanceof Promise,
                A = i.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                });

            function O(e, t) {
                let n = S(t),
                    [
                        [r, a, o], s
                    ] = (0, i.useReducer)(t => {
                        let r = n.get(e);
                        return Object.is(t[0], r) && t[1] === n && t[2] === e ? t : [r, n, e]
                    }, void 0, () => [n.get(e), n, e]),
                    l = r;
                (a !== n || o !== e) && (s(), l = n.get(e));
                let c = null == t ? void 0 : t.delay;
                return (0, i.useEffect)(() => {
                    let t = n.sub(e, () => {
                        if ("number" == typeof c) {
                            setTimeout(s, c);
                            return
                        }
                        s()
                    });
                    return s(), t
                }, [n, e, c]), (0, i.useDebugValue)(l), j(l) ? A(l) : l
            }

            function C(e, t) {
                return [O(e, t), function(e, t) {
                    let n = S(t),
                        r = (0, i.useCallback)((...t) => {
                            if (!("write" in e)) throw Error("not writable atom");
                            return n.set(e, ...t)
                        }, [n, e]);
                    return r
                }(e, t)]
            }
            var L = n(6663),
                N = n(7606),
                R = n(9436),
                $ = n(6346);
            n(3982);
            let _ = e => {
                let {
                    className: t,
                    animated: n,
                    prefix: r,
                    sufix: o
                } = e, s = (0, L.s0)(), [l, c] = (0, i.useState)(!1), u = new Date("");
                return (0, i.useEffect)(() => {
                    c("Tracer.io" !== window.location.host)
                }, []), (0, a.jsxs)(L.fS, {
                    as: "a",
                    className: (0, L.cx)("twmqfx0", $.eR, $.pC, t),
                    animated: n,
                    href: l ? "https://github.com/Slendergamer33" : "https://github.com/Slendergamer33".concat(R.i8),
                    target: "github",
                    title: "Version ".concat(l ? "@next" : R.i8, " deployed at ").concat(u.toUTCString()),
                    onClick: () => {
                        var e;
                        return null === (e = s.click) || void 0 === e ? void 0 : e.play()
                    },
                    children: [r, l ? "" : "v".concat(R.i8), o]
                })
            };
            var T = n(5632),
                F = n(9097),
                M = n.n(F),
                I = n(6872),
                P = n(4657),
                D = n(2691),
                z = n(909),
                B = n(73),
                W = function() {
                    return (W = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                U = i.forwardRef(function(e, t) {
                    var n = W(W({}, i.useContext(B.s)), e);
                    return i.createElement("svg", W({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z",
                        stroke: "currentColor",
                        strokeLinejoin: "round"
                    }))
                }),
                H = function() {
                    return (H = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                G = i.forwardRef(function(e, t) {
                    var n = H(H({}, i.useContext(B.s)), e);
                    return i.createElement("svg", H({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                q = function() {
                    return (q = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Z = i.forwardRef(function(e, t) {
                    var n = q(q({}, i.useContext(B.s)), e);
                    return i.createElement("svg", q({
                        width: "1.5em",
                        height: "1.5em",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                V = function() {
                    return (V = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Y = i.forwardRef(function(e, t) {
                    var n = V(V({}, i.useContext(B.s)), e);
                    return i.createElement("svg", V({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                X = function() {
                    return (X = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                K = i.forwardRef(function(e, t) {
                    var n = X(X({}, i.useContext(B.s)), e);
                    return i.createElement("svg", X({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M13.848 13.317L9.505 18.28a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L6.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M13 19l4.884-5.698a2 2 0 000-2.604L13 5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M17 19l4.884-5.698a2 2 0 000-2.604L17 5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                Q = function() {
                    return (Q = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                J = i.forwardRef(function(e, t) {
                    var n = Q(Q({}, i.useContext(B.s)), e);
                    return i.createElement("svg", Q({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M2 12h6M6.25 6l.245-.28a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634L9.505 18.28a2 2 0 01-3.01 0L6.25 18",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M13 19l4.884-5.698a2 2 0 000-2.604L13 5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M17 19l4.884-5.698a2 2 0 000-2.604L17 5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                ee = function() {
                    return (ee = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                et = i.forwardRef(function(e, t) {
                    var n = ee(ee({}, i.useContext(B.s)), e);
                    return i.createElement("svg", ee({
                        width: "1.5em",
                        height: "1.5em",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M1 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H3a2 2 0 01-2-2z",
                        stroke: "currentColor"
                    }), i.createElement("path", {
                        d: "M17.5 7.5S19 9 19 11.5s-1.5 4-1.5 4M20.5 4.5S23 7 23 11.5s-2.5 7-2.5 7",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                en = function() {
                    return (en = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                er = i.forwardRef(function(e, t) {
                    var n = en(en({}, i.useContext(B.s)), e);
                    return i.createElement("svg", en({
                        width: "1.5em",
                        height: "1.5em",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("g", {
                        clipPath: "url(#sound-off_svg__clip0_3173_16686)",
                        stroke: "currentColor"
                    }, i.createElement("path", {
                        d: "M18 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), i.createElement("path", {
                        d: "M2 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H4a2 2 0 01-2-2z"
                    })), i.createElement("defs", null, i.createElement("clipPath", {
                        id: "sound-off_svg__clip0_3173_16686"
                    }, i.createElement("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z"
                    }))))
                }),
                ea = function() {
                    return (ea = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                eo = i.forwardRef(function(e, t) {
                    var n = ea(ea({}, i.useContext(B.s)), e);
                    return i.createElement("svg", ea({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M3 5h18M3 12h18M3 19h18",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                });
            let es = () => {
                    let e = document.createElement("link");
                    e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap", document.body.appendChild(e)
                },
                ei = "UA-50433259-2",
                el = () => {
                    if (window.location.host.includes("arwes.dev")) {
                        let t = document.createElement("script");
                        t.async = !0, t.src = "https://www.googletagmanager.com/gtag/js?id=" + ei, document.head.appendChild(t);
                        let n = window;

                        function e() {
                            n.dataLayer.push(arguments)
                        }
                        n.dataLayer = n.dataLayer || [], n.gtag = e, e("js", new Date), e("config", ei)
                    }
                },
                ec = Symbol();
            new WeakMap, new WeakMap;
            let eu = e => {
                if ("object" != typeof e || null === e) return;
                Object.freeze(e);
                let t = Object.getOwnPropertyNames(e);
                for (let n of t) {
                    let t = e[n];
                    eu(t)
                }
                return e
            };
            new WeakMap;
            let ed = function(e) {
                let t, n;
                let r = {
                    getItem: (r, a) => {
                        var o, s;
                        let i = e => {
                                if (t !== (e = e || "")) {
                                    try {
                                        n = JSON.parse(e)
                                    } catch {
                                        return a
                                    }
                                    t = e
                                }
                                return n
                            },
                            l = null != (s = null == (o = e()) ? void 0 : o.getItem(r)) ? s : null;
                        return l instanceof Promise ? l.then(i) : i(l)
                    },
                    setItem: (t, n) => {
                        var r;
                        return null == (r = e()) ? void 0 : r.setItem(t, JSON.stringify(n))
                    },
                    removeItem: t => {
                        var n;
                        return null == (n = e()) ? void 0 : n.removeItem(t)
                    }
                };
                return "undefined" != typeof window && "function" == typeof window.addEventListener && (r.subscribe = (t, n, r) => {
                    if (!(e() instanceof window.Storage)) return () => {};
                    let a = a => {
                        if (a.storageArea === e() && a.key === t) {
                            let e;
                            try {
                                e = JSON.parse(a.newValue || "")
                            } catch {
                                e = r
                            }
                            n(e)
                        }
                    };
                    return window.addEventListener("storage", a), () => {
                        window.removeEventListener("storage", a)
                    }
                }), r
            }(() => "undefined" != typeof window ? window.localStorage : void 0);

            function ep(e, t, n = ed) {
                let r = c(t);
                r.debugPrivate = !0, r.onMount = r => {
                    let a;
                    let o = n.getItem(e, t);
                    return o instanceof Promise ? o.then(e => r(e)) : r(o), n.subscribe && (a = n.subscribe(e, r, t)), a
                };
                let a = c(e => e(r), (a, o, s) => {
                    let i = "function" == typeof s ? s(a(r)) : s;
                    return i === ec ? (o(r, t), n.removeItem(e)) : (o(r, i), n.setItem(e, i))
                });
                return a
            }
            new WeakMap, new WeakMap;
            let ef = ep("motion", !0),
                eg = ep("audio", !0);
            var em = n(8316);
            let eh = e => {
                let {
                    children: t
                } = e, [n, r] = (0, i.useState)(!1), o = (0, i.useId)(), s = !!window.matchMedia, l = s && window.document.querySelector("#app-modal-container");
                return ((0, i.useEffect)(() => {
                    r(!0)
                }, []), n && l) ? (0, em.createPortal)(t, l, o) : (0, a.jsx)(a.Fragment, {})
            };
            n(9663);
            var ey = "czken63",
                eb = "czken67",
                ev = "czken69",
                ex = function() {
                    return (ex = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ew = i.forwardRef(function(e, t) {
                    var n = ex(ex({}, i.useContext(B.s)), e);
                    return i.createElement("svg", ex({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M15 6l-6 6 6 6",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                ek = function() {
                    return (ek = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                eE = i.forwardRef(function(e, t) {
                    var n = ek(ek({}, i.useContext(B.s)), e);
                    return i.createElement("svg", ek({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), i.createElement("path", {
                        d: "M9 6l6 6-6 6",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                });
            let eS = e => {
                    let {
                        href: t,
                        active: n,
                        children: r,
                        animated: o,
                        onClose: s,
                        onLeft: i,
                        onRight: l
                    } = e, c = (0, L.s0)();
                    return (0, a.jsx)(L.LH, {
                        children: (0, a.jsxs)(L.fS, {
                            className: "czken61",
                            animated: [(0, L.rn)(), o],
                            children: [!!i && (0, a.jsx)("button", {
                                className: (0, L.cx)($.pC, ey, "czken64", ev),
                                onClick: () => {
                                    var e;
                                    i(), null === (e = c.click) || void 0 === e || e.play()
                                },
                                children: (0, a.jsx)(ew, {})
                            }), (0, a.jsx)(M(), {
                                href: t,
                                className: (0, L.cx)(n ? (0, L.cx)($.Eo, "czken6a") : (0, L.cx)($.pC, ev), "czken62"),
                                onClick: s,
                                children: r
                            }), !!l && (0, a.jsx)("button", {
                                className: (0, L.cx)($.pC, ey, "czken65", ev),
                                onClick: () => {
                                    var e;
                                    l(), null === (e = c.click) || void 0 === e || e.play()
                                },
                                children: (0, a.jsx)(eE, {})
                            })]
                        })
                    })
                },
                ej = e => {
                    let {
                        onClose: t
                    } = e, {
                        asPath: n
                    } = (0, T.useRouter)(), r = (0, L.s0)(), [o, s] = (0, i.useState)(n.startsWith("/docs") ? "/docs" : "/"), l = () => {
                        var e;
                        t(), null === (e = r.click) || void 0 === e || e.play()
                    };
                    return (0, a.jsx)(N.PW, {
                        title: "Navigate",
                        footer: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(L.LH, {
                                children: (0, a.jsxs)("div", {
                                    className: "czken66",
                                    children: [(0, a.jsxs)(L.fS, {
                                        as: "a",
                                        href: "https://t.me/tracer.io",
                                        target: "Telegram",
                                        className: (0, L.cx)($.pC, ev, eb),
                                        animated: [(0, L.aa)("y", "1rem", 0, 0)],
                                        children: [(0, a.jsx)(U, {}), (0, a.jsx)("span", {
                                            className: $.bV,
                                            children: ""
                                        })]
                                    }),  (0, a.jsxs)(L.fS, {
                                        as: "a",
                                        href: "https://x.com/traceri0?s=21",
                                        target: "twitter",
                                        className: (0, L.cx)($.pC, ev, eb),
                                        animated: [(0, L.aa)("y", "1rem", 0, 0)],
                                        children: [(0, a.jsx)(Y, {}), (0, a.jsx)("span", {
                                            className: $.bV,
                                            children: ""
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)(L.LH, {
                                children: (0, a.jsx)(_, {
                                    className: "czken68",
                                    prefix: "Tracer.io ",
                                    animated: [(0, L.Wx)(), (0, L.aa)("y", "1rem", 0)]
                                })
                            })]
                        }),
                        onClose: l,
                        children: (0, a.jsx)(L.LH, {
                            manager: "switch",
                            checkToSend: [o],
                            children: (0, a.jsxs)("div", {
                                className: "czken60",
                                children: [(0, a.jsxs)(L.LH, {
                                    condition: () => "/docs" === o,
                                    manager: "stagger",
                                    unmountOnExited: !0,
                                    children: [(0, a.jsx)(eS, {
                                        href: "/docs",
                                        active: "/docs" === n,
                                        animated: (0, L.aa)("x", "1rem", 0),
                                        onClose: l,
                                        onLeft: () => s("/"),
                                        children: "About"
                                    }), (0, a.jsx)(eS, {
                                        href: "https://t.me/traceri0portal",
                                        active: n.startsWith(""),
                                        animated: (0, L.aa)("x", "1rem", 0),
                                        onClose: l,
                                        children: "Telegram Portal"
                                    }),(0, a.jsx)(eS, {
                                        href: "https://t.me/tracer_solana_bot",
                                        active: n.startsWith(""),
                                        animated: (0, L.aa)("x", "1rem", 0),
                                        onClose: l,
                                        children: "Telegram Bot Chat"
                                    }), (0, a.jsx)(eS, {
                                        href: "https://x.com/traceri0?s=21",
                                        active: n.startsWith(""),
                                        animated: (0, L.aa)("x", "1rem", 0),
                                        onClose: l,
                                        children: "Twitter"
                                    })]
                                }), (0, a.jsxs)(L.LH, {
                                    condition: () => "/docs" !== o,
                                    manager: "stagger",
                                    unmountOnExited: !0,
                                    children: [(0, a.jsx)(eS, {
                                        href: "/docs",
                                        active: n.startsWith("/docs"),
                                        animated: (0, L.aa)("x", "-1rem", 0),
                                        onClose: l,
                                        onRight: () => s("/docs"),
                                        children: "About"
                                    }), (0, a.jsx)(eS, {
                                        href: "https://t.me/traceri0portal",
                                        active: n.startsWith("/"),
                                        animated: (0, L.aa)("x", "-1rem", 0),
                                        onClose: l,
                                        children: "Telegram Portal"
                                    }), (0, a.jsx)(eS, {
                                        href: "https://t.me/tracer_solana_bot",
                                        active: n.startsWith("/"),
                                        animated: (0, L.aa)("x", "-1rem", 0),
                                        onClose: l,
                                        children: "Telegram Bot Chat"
                                    }), (0, a.jsx)(eS, {
                                        href: "https://x.com/traceri0?s=21",
                                        active: n.startsWith(""),
                                        animated: (0, L.aa)("x", "-1rem", 0),
                                        onClose: l,
                                        children: "Twitter"
                                    })]
                                })]
                            })
                        })
                    })
                },
                eA = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, a.jsx)(eh, {
                        children: (0, a.jsxs)(L.LH, {
                            merge: !0,
                            children: [(0, a.jsx)(L.tu, {
                                transitions: {
                                    entering: "open"
                                },
                                continuous: !0
                            }), (0, a.jsx)(L.LH, {
                                merge: !0,
                                unmountOnExited: !0,
                                children: (0, a.jsx)(ej, {
                                    onClose: t
                                })
                            })]
                        })
                    })
                };
            n(6841);
            var eO = "_1t4ewsk1",
                eC = "_1t4ewsk0";
            let eL = e => {
                    let t = (0, T.useRouter)(),
                        [n, r] = C(ef),
                        [o, s] = C(eg),
                        [l, c] = (0, i.useState)(!1),
                        u = "/" === t.asPath,
                        d = u ? (0, L.rn)() : [(0, L.Wx)(), (0, L.aa)("x", -4, 0, 0)],
                        p = u ? (0, L.rn)() : [(0, L.Wx)(), (0, L.aa)("x", 4, 0, 0)];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(N.T$, { ...e,
                            hasFrame: !u,
                            left: (0, a.jsxs)(L.LH, {
                                combine: !0,
                                manager: "stagger",
                                children: [(0, a.jsx)(L.LH, {
                                    children: (0, a.jsx)(N.TR, {
                                        animated: (0, L.Wx)(),
                                        children: !u && (0, a.jsx)(L.LH, {
                                            merge: !0,
                                            children: (0, a.jsx)(N.nJ, {
                                                className: $.bV,
                                                animated: d
                                            })
                                        })
                                    })
                                }), !u && (0, a.jsx)(L.LH, {
                                    combine: !0,
                                    manager: "stagger",
                                    duration: {
                                        stagger: .03
                                    },
                                    children: (0, a.jsxs)(N.v2, {
                                        children: [(0, a.jsx)(L.LH, {
                                            children: (0, a.jsx)(N.sN, {
                                                className: (0, L.cx)(eC, $.bV),
                                                active: t.asPath.startsWith("/docs"),
                                                animated: d,
                                                children: (0, a.jsxs)(M(), {
                                                    href: "/docs",
                                                    title: "About Tracer.io",
                                                    children: [(0, a.jsx)(I.Z, {}), " ", (0, a.jsx)("span", {
                                                        className: $.fJ,
                                                        children: "About"
                                                    })]
                                                })
                                            })
                                        })
                                        ]
                                    })
                                })]
                            }),
                            center: (0, a.jsx)(a.Fragment, {
                                children: t.asPath.startsWith("/docs") && (0, a.jsx)(L.LH, {
                                    children: (0, a.jsxs)(N.v2, {
                                        className: $.$6,
                                        animated: (0, L.Wx)(),
                                        children: [(0, a.jsx)(N.sN, {
                                            className: eC,
                                            active: t.asPath.includes(""),
                                            children: (0, a.jsx)(M(), {
                                                href: "",
                                                children: ""
                                            })
                                        }), (0, a.jsx)(N.sN, {
                                            className: eC,
                                            active: t.asPath.includes(""),
                                            children: (0, a.jsx)(M(), {
                                                href: "",
                                                children: ""
                                            })
                                        }), (0, a.jsx)(N.sN, {
                                            className: eC,
                                            active: t.asPath.includes(""),
                                            children: (0, a.jsx)(M(), {
                                                href: "",
                                                children: ""
                                            })
                                        })]
                                    })
                                })
                            }),
                            right: (0, a.jsxs)(L.LH, {
                                combine: !0,
                                manager: u ? "parallel" : "staggerReverse",
                                duration: {
                                    stagger: .03
                                },
                               children: [(0, a.jsx)(L.LH, {
                                    children: (0, a.jsx)(_, {
                                        className: $.$6,
                                        animated: p
                                    })
                                }), (0, a.jsxs)(N.v2, {
                                    className: $.$6,
                                    children: [(0, a.jsx)(L.LH, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: eC,
                                            animated: p,
                                            children: (0, a.jsx)("a", {
                                                href: "https://t.me/tracerio",
                                                target: "Telegram",
                                                title: "Telegram",
                                                children: (0, a.jsx)(U, {})
                                            })
                                        })
                                    }),,  (0, a.jsx)(L.LH, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: eC,
                                            animated: p,
                                            children: (0, a.jsx)("a", {
                                                href: "https://t.me/tracer_solana_portal",
                                                target: "Telegram",
                                                title: "Telegram Bot",
                                                children: (0, a.jsx)(U, {})
                                            })
                                        })
                                    }),
                                    (0, a.jsx)(L.LH, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: eC,
                                            animated: p,
                                            children: (0, a.jsx)("a", {
                                                href: "https://x.com/traceri0?s=21",
                                                target: "twitter",
                                                title: "Go to Twitter",
                                                children: (0, a.jsx)(Y, {})
                                            })
                                        })
                                    })]
                                }), (0, a.jsxs)(N.v2, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: (0, L.cx)(eC, $.$6),
                                            animated: p,
                                            children: (0, a.jsx)("button", {
                                                className: eO,
                                                title: n ? "Disable motion" : "Enable motion",
                                                onClick: () => r(!n),
                                                children: n ? (0, a.jsx)(K, {}) : (0, a.jsx)(J, {})
                                            })
                                        })
                                    }), (0, a.jsx)(L.LH, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: (0, L.cx)(eC, $.$6),
                                            animated: p,
                                            children: (0, a.jsx)("button", {
                                                className: eO,
                                                title: o ? "Disable audio" : "Enable audio",
                                                onClick: () => s(!o),
                                                children: o ? (0, a.jsx)(et, {}) : (0, a.jsx)(er, {})
                                            })
                                        })
                                    }), (0, a.jsx)(L.LH, {
                                        children: (0, a.jsx)(N.sN, {
                                            className: (0, L.cx)(eC, $.th),
                                            animated: p,
                                            children: (0, a.jsx)("button", {
                                                className: eO,
                                                title: "Navigate",
                                                onClick: () => c(e => !e),
                                                children: (0, a.jsx)(eo, {})
                                            })
                                        })
                                    })]
                            })
                        }), (0, a.jsx)(L.QS, {
                            duration: {
                                enter: .1,
                                exit: .1,
                                stagger: .05
                            },
                            disabled: !1,
                            dismissed: !1,
                            children: (0, a.jsx)(L.LH, {
                                root: !0,
                                active: l,
                                children: (0, a.jsx)(eA, {
                                    onClose: () => c(!1)
                                })
                            })
                        })]
                    })
                },
                eN = {
                    duration: {
                        enter: .15,
                        exit: .15,
                        stagger: .05
                    }
                },
                eR = {
                    master: {
                        volume: .8
                    },
                    categories: {
                        background: {
                            volume: .3
                        },
                        transition: {
                            volume: .5
                        },
                        interaction: {
                            volume: .7
                        },
                        notification: {
                            volume: 1
                        }
                    },
                    bleeps: {
                        click: {
                            category: "interaction",
                            sources: [{
                                src: "/assets/sounds/click.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/click.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        open: {
                            category: "interaction",
                            sources: [{
                                src: "/assets/sounds/open.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/open.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        close: {
                            category: "interaction",
                            sources: [{
                                src: "/assets/sounds/close.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/close.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        info: {
                            category: "notification",
                            sources: [{
                                src: "/assets/sounds/info.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/info.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        error: {
                            category: "notification",
                            sources: [{
                                src: "/assets/sounds/error.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/error.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        intro: {
                            category: "transition",
                            sources: [{
                                src: "/assets/sounds/intro.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/intro.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        content: {
                            category: "transition",
                            sources: [{
                                src: "/assets/sounds/content.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/content.mp3",
                                type: "audio/mpeg"
                            }]
                        },
                        type: {
                            category: "transition",
                            sources: [{
                                src: "/assets/sounds/type.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/type.mp3",
                                type: "audio/mpeg"
                            }],
                            loop: !0
                        },
                        assemble: {
                            category: "transition",
                            sources: [{
                                src: "/assets/sounds/assemble.webm",
                                type: "audio/webm"
                            }, {
                                src: "/assets/sounds/assemble.mp3",
                                type: "audio/mpeg"
                            }],
                            loop: !0
                        }
                    }
                },
                e$ = e => {
                    let {
                        Component: t,
                        pageProps: n
                    } = e;
                    (0, i.useEffect)(() => {
                        es(), el()
                    }, []);
                    let r = O(ef),
                        o = O(eg);
                    return (0, a.jsx)(L.QS, { ...eN,
                        disabled: !r,
                        children: (0, a.jsxs)(L.ix, { ...eR,
                            common: {
                                disabled: !o
                            },
                            children: [(0, a.jsxs)(s(), {
                                children: [(0, a.jsx)("meta", {
                                    httpEquiv: "X-UA-Compatible",
                                    content: "IE=edge"
                                }), (0, a.jsx)("meta", {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1.0"
                                }), (0, a.jsx)("title", {
                                    children: "Tracer.io"
                                }), (0, a.jsx)("meta", {
                                    name: "description",
                                    content: "Trader Alert System"
                                }), (0, a.jsx)("meta", {
                                    property: "og:title",
                                    content: "Arwes"
                                }), (0, a.jsx)("meta", {
                                    property: "og:site_name",
                                    content: "Arwes"
                                }), (0, a.jsx)("meta", {
                                    property: "og:description",
                                    content: "Trader Alert System"
                                }), (0, a.jsx)("meta", {
                                    property: "og:image",
                                    content: ""
                                }), (0, a.jsx)("meta", {
                                    property: "og:url",
                                    content: "#"
                                }), (0, a.jsx)("meta", {
                                    property: "og:type",
                                    content: "website"
                                }), (0, a.jsx)("meta", {
                                    name: "twitter:image:alt",
                                    content: "Tracer.io"
                                }), (0, a.jsx)("meta", {
                                    name: "twitter:card",
                                    content: "summary_large_image"
                                }), (0, a.jsx)("meta", {
                                    name: "twitter:site",
                                    content: "@traceri0"
                                })]
                            }), (0, a.jsxs)(L.LH, {
                                combine: !0,
                                manager: "stagger",
                                children: [(0, a.jsxs)(N.Zn, {
                                    children: [(0, a.jsx)(eL, {}), (0, a.jsx)(t, { ...n
                                    })]
                                }), (0, a.jsx)("div", {
                                    id: "app-modal-container"
                                })]
                            })]
                        })
                    })
                };
            var e_ = e$
        },
        6346: function(e, t, n) {
            "use strict";
            n.d(t, {
                th: function() {
                    return r
                },
                $6: function() {
                    return a
                },
                bV: function() {
                    return o
                },
                fJ: function() {
                    return s
                },
                pC: function() {
                    return l
                },
                Eo: function() {
                    return c
                },
                eR: function() {
                    return i.e
                }
            }), n(8923), n(9570);
            var r = "_1216la93",
                a = "_1216la98",
                o = "_1216la96",
                s = "_1216la99",
                i = n(1316);
            n(6920);
            var l = "_18fbd9g0",
                c = "_18fbd9g1"
        },
        7606: function(e, t, n) {
            "use strict";
            n.d(t, {
                zx: function() {
                    return P
                },
                Zb: function() {
                    return Y
                },
                dn: function() {
                    return eU
                },
                T$: function() {
                    return Z
                },
                TR: function() {
                    return U
                },
                nJ: function() {
                    return H
                },
                Zn: function() {
                    return M
                },
                v2: function() {
                    return D
                },
                sN: function() {
                    return z
                },
                PW: function() {
                    return eV
                },
                Fq: function() {
                    return V
                }
            });
            var r, a, o, s, i, l, c, u, d, p, f, g, m, h, y, b, v, x, w, k, E, S, j, A, O, C, L, N, R, $ = n(2322),
                _ = n(6663),
                T = n(5632);
            n(7533);
            let F = e => {
                let {
                    className: t,
                    animated: n
                } = e, r = (0, T.useRouter)(), a = "/" === r.asPath;
                return (0, $.jsx)(_.LH, {
                    merge: !0,
                    combine: !0,
                    children: (0, $.jsxs)(_.fS, {
                        role: "presentation",
                        className: (0, _.cx)("_1hhzp0i0", t),
                        animated: n,
                        children: [(0, $.jsx)(_.LH, {
                            children: (0, $.jsxs)(_.fS, {
                                as: "picture",
                                role: "presentation",
                                className: "_1hhzp0i1",
                                style: {
                                    filter: "brightness(".concat(a ? .4 : .3, ") blur(").concat(a ? 0 : 10, "px)")
                                },
                                animated: [(0, _.aa)("opacity", .8, 1), (0, _.aa)("scale", 1.05, 1)],
                                children: [(0, $.jsx)("source", {
                                    media: "(min-width:1280px)",
                                    srcSet: "/assets/images/background-large.webp",
                                    type: "image/webp"
                                }), (0, $.jsx)("source", {
                                    media: "(min-width:1280px)",
                                    srcSet: "/assets/images/background-large.jpg",
                                    type: "image/jpeg"
                                }), (0, $.jsx)("source", {
                                    media: "(min-width:768px)",
                                    srcSet: "/assets/images/background-medium.webp",
                                    type: "image/webp"
                                }), (0, $.jsx)("source", {
                                    media: "(min-width:768px)",
                                    srcSet: "/assets/images/background-medium.jpg",
                                    type: "image/jpeg"
                                }), (0, $.jsx)("source", {
                                    media: "(max-width:767px)",
                                    srcSet: "/assets/images/background-small.webp",
                                    type: "image/webp"
                                })]
                            })
                        }), (0, $.jsx)(_.LH, {
                            duration: {
                                enter: 2
                            },
                            unmountOnDisabled: !0,
                            children: (0, $.jsx)(_.bb, {
                                className: "_1hhzp0i3",
                                color: "hsla(180, 29%, 72%, 0.15)",
                                size: 2,
                                distance: 40,
                                originInverted: !0
                            })
                        }), (0, $.jsx)(_.LH, {
                            duration: {
                                enter: 2,
                                interval: 4
                            },
                            unmountOnDisabled: !0,
                            children: (0, $.jsx)(_.Oh, {
                                className: "_1hhzp0i4",
                                color: "hsla(180, 29%, 72%, 0.25)",
                                quantity: 20
                            })
                        })]
                    })
                })
            };
            n(36);
            let M = e => {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, $.jsxs)("div", {
                    lang: "en",
                    className: (0, _.cx)("bltsnn0", t),
                    children: [(0, $.jsx)(F, {}), (0, $.jsx)("div", {
                        className: "bltsnn1",
                        children: n
                    })]
                })
            };
            n(6195);
            var I = "th8yui3";
            let P = e => {
                let {
                    animated: t,
                    className: n,
                    tabIndex: r,
                    title: a,
                    size: o = "medium",
                    frame: s = "simple",
                    onHoverAnimateIcons: i,
                    onClick: l,
                    children: c,
                    ...u
                } = e, d = (0, _.s0)();
                return (0, $.jsxs)(_.fS, { ...u,
                    as: "button",
                    className: (0, _.cx)("th8yui0", "medium" === o && "th8yui1", "simple" === s && "th8yui4", "hexagon" === s && "th8yui6", i && "th8yui9", n),
                    animated: t,
                    tabIndex: r,
                    title: a,
                    onClick: () => {
                        var e;
                        null == l || l(), null === (e = d.click) || void 0 === e || e.play()
                    },
                    children: ["simple" === s && (0, $.jsx)("div", {
                        className: (0, _.cx)(I, "th8yui5")
                    }), "hexagon" === s && (0, $.jsxs)("div", {
                        className: (0, _.cx)(I, "th8yui7"),
                        children: [(0, $.jsx)(_.rT, {
                            className: "th8yui8",
                            color: "hsl(60 50% 90% / 8%)",
                            size: 200
                        }), (0, $.jsx)(_.oG, {
                            squareSize: 12,
                            leftBottom: !1,
                            rightTop: !1
                        })]
                    }), (0, $.jsx)("div", {
                        className: "th8yui2",
                        children: c
                    })]
                })
            };
            n(8064);
            let D = e => {
                let {
                    className: t,
                    animated: n,
                    children: r
                } = e;
                return (0, $.jsx)(_.fS, {
                    as: "ul",
                    className: (0, _.cx)("_1l69nam0", t),
                    animated: n,
                    children: r
                })
            };
            n(2475);
            let z = e => {
                let {
                    className: t,
                    animated: n,
                    active: r,
                    children: a
                } = e, o = (0, _.s0)();
                return (0, $.jsx)(_.fS, {
                    as: "li",
                    className: (0, _.cx)("_1izpm6h0", r && "_1izpm6h1", t),
                    animated: n,
                    onClick: () => {
                        var e;
                        return null === (e = o.click) || void 0 === e ? void 0 : e.play()
                    },
                    children: a
                })
            };
            var B = n(9097),
                W = n.n(B);
            n(8848);
            let U = e => {
                let {
                    className: t,
                    animated: n,
                    children: r
                } = e, a = (0, _.s0)();
                return (0, $.jsx)(_.fS, {
                    as: "h1",
                    className: (0, _.cx)("razuih0", t),
                    animated: n,
                    onClick: () => {
                        var e;
                        return null === (e = a.click) || void 0 === e ? void 0 : e.play()
                    },
                    children: (0, $.jsxs)(W(), {
                        className: "razuih2",
                        href: "/",
                        title: "Tracer.io",
                        children: [(0, $.jsx)("img", {
                            className: "razuih4",
                            src: "/logo.png",
                            alt: "Tracer.io"
                        }), r]
                    })
                })
            };
            n(9849);
            let H = e => {
                let {
                    className: t,
                    animated: n
                } = e;
                return (0, $.jsx)(_.fS, {
                    as: "img",
                    className: (0, _.cx)("_1ehj8c50", t),
                    animated: n,
                    src: "/logotype.png",
                    role: "presentation"
                })
            };
            var G = n(1316);
            n(2768);
            var q = "l9j4si3";
            let Z = e => {
                let {
                    className: t,
                    animated: n,
                    hasFrame: r,
                    left: a,
                    center: o,
                    right: s
                } = e;
                return (0, $.jsx)(_.fS, {
                    as: "header",
                    className: (0, _.cx)("l9j4si0", t),
                    animated: n,
                    children: (0, $.jsxs)("div", {
                        className: "l9j4si1",
                        children: [r && (0, $.jsx)("div", {
                            role: "presentation",
                            className: (0, _.cx)("l9j4si2", G.e),
                            children: (0, $.jsx)(_.rT, {
                                color: "hsl(180 50% 50% / 10%)",
                                size: 400
                            })
                        }), (0, $.jsx)(_.fS, {
                            className: (0, _.cx)(q, "l9j4si4"),
                            animated: (0, _.aa)("x", -12, 0),
                            children: a
                        }), (0, $.jsx)(_.fS, {
                            className: (0, _.cx)(q, "l9j4si5"),
                            animated: (0, _.aa)("scaleX", .9, 1),
                            children: o
                        }), (0, $.jsx)(_.fS, {
                            className: (0, _.cx)(q, "l9j4si6"),
                            animated: (0, _.aa)("x", 12, 0),
                            children: s
                        })]
                    })
                })
            };
            n(8278);
            let V = e => {
                let {
                    className: t,
                    style: n,
                    animated: r,
                    children: a,
                    frame: o = !0,
                    floating: s
                } = e;
                return (0, $.jsxs)(_.fS, {
                    as: "main",
                    className: (0, _.cx)("mynlp60", s && "mynlp61", t),
                    style: n,
                    animated: r,
                    children: [o && (0, $.jsx)(_.LH, {
                        children: (0, $.jsxs)(_.fS, {
                            className: "mynlp62",
                            animated: (0, _.Wx)(),
                            children: [(0, $.jsx)(_.oG, {
                                className: "page-document__svg"
                            }), (0, $.jsx)(_.rT, {
                                color: "hsl(180 50% 50% / 5%)",
                                size: 400
                            })]
                        })
                    }), (0, $.jsx)("div", {
                        className: "mynlp63",
                        children: (0, $.jsx)("div", {
                            className: "mynlp64",
                            children: (0, $.jsx)("div", {
                                className: "mynlp65",
                                children: a
                            })
                        })
                    })]
                })
            };
            n(8369);
            let Y = e => {
                let {
                    className: t,
                    animated: n,
                    src: r,
                    srcAlt: a,
                    title: o,
                    children: s
                } = e;
                return (0, $.jsxs)(_.fS, {
                    as: "article",
                    className: (0, _.cx)("_2uva910", t),
                    animated: n,
                    children: [(0, $.jsx)(_.oG, {
                        squareSize: 16,
                        leftBottom: !1,
                        rightTop: !1
                    }), (0, $.jsxs)("div", {
                        className: "_2uva911",
                        children: [(0, $.jsx)("div", {
                            className: "_2uva912",
                            children: (0, $.jsx)("img", {
                                className: "_2uva913",
                                src: r,
                                alt: a
                            })
                        }), (0, $.jsxs)("div", {
                            className: "_2uva914",
                            children: [(0, $.jsx)("h1", {
                                className: "_2uva915",
                                children: o
                            }), (0, $.jsx)("div", {
                                className: "_2uva916",
                                children: s
                            })]
                        })]
                    })]
                })
            };
            var X = n(2784),
                K = function() {
                    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                        var n, r, a = "";
                        if ("string" == typeof t || "number" == typeof t) a += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r);
                            else
                                for (n in t) t[n] && (a && (a += " "), a += n)
                        }
                        return a
                    }(e)) && (r && (r += " "), r += t);
                    return r
                },
                Q = Object.create,
                J = Object.defineProperty,
                ee = Object.defineProperties,
                et = Object.getOwnPropertyDescriptor,
                en = Object.getOwnPropertyDescriptors,
                er = Object.getOwnPropertyNames,
                ea = Object.getOwnPropertySymbols,
                eo = Object.getPrototypeOf,
                es = Object.prototype.hasOwnProperty,
                ei = Object.prototype.propertyIsEnumerable,
                el = (e, t, n) => t in e ? J(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                ec = (e, t) => {
                    for (var n in t || (t = {})) es.call(t, n) && el(e, n, t[n]);
                    if (ea)
                        for (var n of ea(t)) ei.call(t, n) && el(e, n, t[n]);
                    return e
                },
                eu = (e, t) => ee(e, en(t)),
                ed = (e, t) => {
                    var n = {};
                    for (var r in e) es.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && ea)
                        for (var r of ea(e)) 0 > t.indexOf(r) && ei.call(e, r) && (n[r] = e[r]);
                    return n
                },
                ep = (s = null != (o = (r = {
                    "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js" (e, t) {
                        var n = function() {
                            var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                                t = 0,
                                n = {},
                                r = {
                                    util: {
                                        encode: function e(t) {
                                            return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                        },
                                        type: function(e) {
                                            return Object.prototype.toString.call(e).slice(8, -1)
                                        },
                                        objId: function(e) {
                                            return e.__id || Object.defineProperty(e, "__id", {
                                                value: ++t
                                            }), e.__id
                                        },
                                        clone: function e(t, n) {
                                            var a, o;
                                            switch (n = n || {}, r.util.type(t)) {
                                                case "Object":
                                                    if (n[o = r.util.objId(t)]) return n[o];
                                                    for (var s in a = {}, n[o] = a, t) t.hasOwnProperty(s) && (a[s] = e(t[s], n));
                                                    return a;
                                                case "Array":
                                                    if (n[o = r.util.objId(t)]) return n[o];
                                                    return a = [], n[o] = a, t.forEach(function(t, r) {
                                                        a[r] = e(t, n)
                                                    }), a;
                                                default:
                                                    return t
                                            }
                                        },
                                        getLanguage: function(t) {
                                            for (; t;) {
                                                var n = e.exec(t.className);
                                                if (n) return n[1].toLowerCase();
                                                t = t.parentElement
                                            }
                                            return "none"
                                        },
                                        setLanguage: function(t, n) {
                                            t.className = t.className.replace(RegExp(e, "gi"), ""), t.classList.add("language-" + n)
                                        },
                                        isActive: function(e, t, n) {
                                            for (var r = "no-" + t; e;) {
                                                var a = e.classList;
                                                if (a.contains(t)) return !0;
                                                if (a.contains(r)) return !1;
                                                e = e.parentElement
                                            }
                                            return !!n
                                        }
                                    },
                                    languages: {
                                        plain: n,
                                        plaintext: n,
                                        text: n,
                                        txt: n,
                                        extend: function(e, t) {
                                            var n = r.util.clone(r.languages[e]);
                                            for (var a in t) n[a] = t[a];
                                            return n
                                        },
                                        insertBefore: function(e, t, n, a) {
                                            var o = (a = a || r.languages)[e],
                                                s = {};
                                            for (var i in o)
                                                if (o.hasOwnProperty(i)) {
                                                    if (i == t)
                                                        for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                                    n.hasOwnProperty(i) || (s[i] = o[i])
                                                }
                                            var c = a[e];
                                            return a[e] = s, r.languages.DFS(r.languages, function(t, n) {
                                                n === c && t != e && (this[t] = s)
                                            }), s
                                        },
                                        DFS: function e(t, n, a, o) {
                                            o = o || {};
                                            var s = r.util.objId;
                                            for (var i in t)
                                                if (t.hasOwnProperty(i)) {
                                                    n.call(t, i, t[i], a || i);
                                                    var l = t[i],
                                                        c = r.util.type(l);
                                                    "Object" !== c || o[s(l)] ? "Array" !== c || o[s(l)] || (o[s(l)] = !0, e(l, n, i, o)) : (o[s(l)] = !0, e(l, n, null, o))
                                                }
                                        }
                                    },
                                    plugins: {},
                                    highlight: function(e, t, n) {
                                        var o = {
                                            code: e,
                                            grammar: t,
                                            language: n
                                        };
                                        if (r.hooks.run("before-tokenize", o), !o.grammar) throw Error('The language "' + o.language + '" has no grammar.');
                                        return o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), a.stringify(r.util.encode(o.tokens), o.language)
                                    },
                                    tokenize: function(e, t) {
                                        var n = t.rest;
                                        if (n) {
                                            for (var l in n) t[l] = n[l];
                                            delete t.rest
                                        }
                                        var c = new s;
                                        return i(c, c.head, e),
                                            function e(t, n, s, l, c, u) {
                                                for (var d in s)
                                                    if (s.hasOwnProperty(d) && s[d]) {
                                                        var p = s[d];
                                                        p = Array.isArray(p) ? p : [p];
                                                        for (var f = 0; f < p.length; ++f) {
                                                            if (u && u.cause == d + "," + f) return;
                                                            var g = p[f],
                                                                m = g.inside,
                                                                h = !!g.lookbehind,
                                                                y = !!g.greedy,
                                                                b = g.alias;
                                                            if (y && !g.pattern.global) {
                                                                var v = g.pattern.toString().match(/[imsuy]*$/)[0];
                                                                g.pattern = RegExp(g.pattern.source, v + "g")
                                                            }
                                                            for (var x = g.pattern || g, w = l.next, k = c; w !== n.tail && (!u || !(k >= u.reach)); k += w.value.length, w = w.next) {
                                                                var E, S = w.value;
                                                                if (n.length > t.length) return;
                                                                if (!(S instanceof a)) {
                                                                    var j = 1;
                                                                    if (y) {
                                                                        if (!(E = o(x, k, t, h)) || E.index >= t.length) break;
                                                                        var A = E.index,
                                                                            O = E.index + E[0].length,
                                                                            C = k;
                                                                        for (C += w.value.length; A >= C;) C += (w = w.next).value.length;
                                                                        if (C -= w.value.length, k = C, w.value instanceof a) continue;
                                                                        for (var L = w; L !== n.tail && (C < O || "string" == typeof L.value); L = L.next) j++, C += L.value.length;
                                                                        j--, S = t.slice(k, C), E.index -= k
                                                                    } else if (!(E = o(x, 0, S, h))) continue;
                                                                    var A = E.index,
                                                                        N = E[0],
                                                                        R = S.slice(0, A),
                                                                        $ = S.slice(A + N.length),
                                                                        _ = k + S.length;
                                                                    u && _ > u.reach && (u.reach = _);
                                                                    var T = w.prev;
                                                                    R && (T = i(n, T, R), k += R.length),
                                                                        function(e, t, n) {
                                                                            for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
                                                                            t.next = r, r.prev = t, e.length -= a
                                                                        }(n, T, j);
                                                                    var F = new a(d, m ? r.tokenize(N, m) : N, b, N);
                                                                    if (w = i(n, T, F), $ && i(n, w, $), j > 1) {
                                                                        var M = {
                                                                            cause: d + "," + f,
                                                                            reach: _
                                                                        };
                                                                        e(t, n, s, w.prev, k, M), u && M.reach > u.reach && (u.reach = M.reach)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                            }(e, c, t, c.head, 0),
                                            function(e) {
                                                for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                                                return t
                                            }(c)
                                    },
                                    hooks: {
                                        all: {},
                                        add: function(e, t) {
                                            var n = r.hooks.all;
                                            n[e] = n[e] || [], n[e].push(t)
                                        },
                                        run: function(e, t) {
                                            var n = r.hooks.all[e];
                                            if (n && n.length)
                                                for (var a, o = 0; a = n[o++];) a(t)
                                        }
                                    },
                                    Token: a
                                };

                            function a(e, t, n, r) {
                                this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                            }

                            function o(e, t, n, r) {
                                e.lastIndex = t;
                                var a = e.exec(n);
                                if (a && r && a[1]) {
                                    var o = a[1].length;
                                    a.index += o, a[0] = a[0].slice(o)
                                }
                                return a
                            }

                            function s() {
                                var e = {
                                        value: null,
                                        prev: null,
                                        next: null
                                    },
                                    t = {
                                        value: null,
                                        prev: e,
                                        next: null
                                    };
                                e.next = t, this.head = e, this.tail = t, this.length = 0
                            }

                            function i(e, t, n) {
                                var r = t.next,
                                    a = {
                                        value: n,
                                        prev: t,
                                        next: r
                                    };
                                return t.next = a, r.prev = a, e.length++, a
                            }
                            return a.stringify = function e(t, n) {
                                if ("string" == typeof t) return t;
                                if (Array.isArray(t)) {
                                    var a = "";
                                    return t.forEach(function(t) {
                                        a += e(t, n)
                                    }), a
                                }
                                var o = {
                                        type: t.type,
                                        content: e(t.content, n),
                                        tag: "span",
                                        classes: ["token", t.type],
                                        attributes: {},
                                        language: n
                                    },
                                    s = t.alias;
                                s && (Array.isArray(s) ? Array.prototype.push.apply(o.classes, s) : o.classes.push(s)), r.hooks.run("wrap", o);
                                var i = "";
                                for (var l in o.attributes) i += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + i + ">" + o.content + "</" + o.tag + ">"
                            }, r
                        }();
                        t.exports = n, n.default = n
                    }
                }, function() {
                    return a || (0, r[er(r)[0]])((a = {
                        exports: {}
                    }).exports, a), a.exports
                })()) ? Q(eo(o)) : {}, ((e, t, n, r) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let n of er(t)) es.call(e, n) || void 0 === n || J(e, n, {
                            get: () => t[n],
                            enumerable: !(r = et(t, n)) || r.enumerable
                        });
                    return e
                })(o && o.__esModule ? s : J(s, "default", {
                    value: o,
                    enumerable: !0
                }), o));
            i = ep, l = {
                    pattern: /\\[\\(){}[\]^$+*?|.]/,
                    alias: "escape"
                }, u = RegExp((u = "(?:[^\\\\-]|" + (c = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source + ")") + "-" + u), d = {
                    pattern: /(<|')[^<>']+(?=[>']$)/,
                    lookbehind: !0,
                    alias: "variable"
                }, i.languages.regex = {
                    "char-class": {
                        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                        lookbehind: !0,
                        inside: {
                            "char-class-negation": {
                                pattern: /(^\[)\^/,
                                lookbehind: !0,
                                alias: "operator"
                            },
                            "char-class-punctuation": {
                                pattern: /^\[|\]$/,
                                alias: "punctuation"
                            },
                            range: {
                                pattern: u,
                                inside: {
                                    escape: c,
                                    "range-punctuation": {
                                        pattern: /-/,
                                        alias: "operator"
                                    }
                                }
                            },
                            "special-escape": l,
                            "char-set": {
                                pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                                alias: "class-name"
                            },
                            escape: c
                        }
                    },
                    "special-escape": l,
                    "char-set": {
                        pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: "class-name"
                    },
                    backreference: [{
                        pattern: /\\(?![123][0-7]{2})[1-9]/,
                        alias: "keyword"
                    }, {
                        pattern: /\\k<[^<>']+>/,
                        alias: "keyword",
                        inside: {
                            "group-name": d
                        }
                    }],
                    anchor: {
                        pattern: /[$^]|\\[ABbGZz]/,
                        alias: "function"
                    },
                    escape: c,
                    group: [{
                        pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                        alias: "punctuation",
                        inside: {
                            "group-name": d
                        }
                    }, {
                        pattern: /\)/,
                        alias: "punctuation"
                    }],
                    quantifier: {
                        pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
                        alias: "number"
                    },
                    alternation: {
                        pattern: /\|/,
                        alias: "keyword"
                    }
                }, ep.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                    boolean: /\b(?:false|true)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/
                }, ep.languages.javascript = ep.languages.extend("clike", {
                    "class-name": [ep.languages.clike["class-name"], {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                        lookbehind: !0
                    }],
                    keyword: [{
                        pattern: /((?:^|\})\s*)catch\b/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0
                    }],
                    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: {
                        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                        lookbehind: !0
                    },
                    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                }), ep.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, ep.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "regex-source": {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: !0,
                                alias: "language-regex",
                                inside: ep.languages.regex
                            },
                            "regex-delimiter": /^\/|\/$/,
                            "regex-flags": /^[a-z]+$/
                        }
                    },
                    "function-variable": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: "function"
                    },
                    parameter: [{
                        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                        lookbehind: !0,
                        inside: ep.languages.javascript
                    }, {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                        lookbehind: !0,
                        inside: ep.languages.javascript
                    }, {
                        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                        lookbehind: !0,
                        inside: ep.languages.javascript
                    }, {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                        lookbehind: !0,
                        inside: ep.languages.javascript
                    }],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                }), ep.languages.insertBefore("javascript", "string", {
                    hashbang: {
                        pattern: /^#!.*/,
                        greedy: !0,
                        alias: "comment"
                    },
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": {
                                pattern: /^`|`$/,
                                alias: "string"
                            },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    rest: ep.languages.javascript
                                }
                            },
                            string: /[\s\S]+/
                        }
                    },
                    "string-property": {
                        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "property"
                    }
                }), ep.languages.insertBefore("javascript", "operator", {
                    "literal-property": {
                        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                        lookbehind: !0,
                        alias: "property"
                    }
                }), ep.languages.markup && (ep.languages.markup.tag.addInlined("script", "javascript"), ep.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), ep.languages.js = ep.languages.javascript, ep.languages.actionscript = ep.languages.extend("javascript", {
                    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
                    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
                }), ep.languages.actionscript["class-name"].alias = "function", delete ep.languages.actionscript.parameter, delete ep.languages.actionscript["literal-property"], ep.languages.markup && ep.languages.insertBefore("actionscript", "string", {
                    xml: {
                        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                        lookbehind: !0,
                        inside: ep.languages.markup
                    }
                }), f = /#(?!\{).+/, g = {
                    pattern: /#\{[^}]+\}/,
                    alias: "variable"
                }, (p = ep).languages.coffeescript = p.languages.extend("javascript", {
                    comment: f,
                    string: [{
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0
                    }, {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        inside: {
                            interpolation: g
                        }
                    }],
                    keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                    "class-member": {
                        pattern: /@(?!\d)\w+/,
                        alias: "variable"
                    }
                }), p.languages.insertBefore("coffeescript", "comment", {
                    "multiline-comment": {
                        pattern: /###[\s\S]+?###/,
                        alias: "comment"
                    },
                    "block-regex": {
                        pattern: /\/{3}[\s\S]*?\/{3}/,
                        alias: "regex",
                        inside: {
                            comment: f,
                            interpolation: g
                        }
                    }
                }), p.languages.insertBefore("coffeescript", "string", {
                    "inline-javascript": {
                        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                        inside: {
                            delimiter: {
                                pattern: /^`|`$/,
                                alias: "punctuation"
                            },
                            script: {
                                pattern: /[\s\S]+/,
                                alias: "language-javascript",
                                inside: p.languages.javascript
                            }
                        }
                    },
                    "multiline-string": [{
                        pattern: /'''[\s\S]*?'''/,
                        greedy: !0,
                        alias: "string"
                    }, {
                        pattern: /"""[\s\S]*?"""/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            interpolation: g
                        }
                    }]
                }), p.languages.insertBefore("coffeescript", "keyword", {
                    property: /(?!\d)\w+(?=\s*:(?!:))/
                }), delete p.languages.coffeescript["template-string"], p.languages.coffee = p.languages.coffeescript, Object.defineProperty(m = ep.languages.javadoclike = {
                    parameter: {
                        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
                        lookbehind: !0
                    },
                    keyword: {
                        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
                        lookbehind: !0
                    },
                    punctuation: /[{}]/
                }, "addSupport", {
                    value: function(e, t) {
                        (e = "string" == typeof e ? [e] : e).forEach(function(e) {
                            var n = function(e) {
                                    e.inside || (e.inside = {}), e.inside.rest = t
                                },
                                r = "doc-comment";
                            if (a = ep.languages[e]) {
                                var a, o = a[r];
                                if ((o = o || (a = ep.languages.insertBefore(e, "comment", {
                                        "doc-comment": {
                                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                            lookbehind: !0,
                                            alias: "comment"
                                        }
                                    }))[r]) instanceof RegExp && (o = a[r] = {
                                        pattern: o
                                    }), Array.isArray(o))
                                    for (var s = 0, i = o.length; s < i; s++) o[s] instanceof RegExp && (o[s] = {
                                        pattern: o[s]
                                    }), n(o[s]);
                                else n(o)
                            }
                        })
                    }
                }), m.addSupport(["java", "javascript", "php"], m), y = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, (h = ep).languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + y.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + y.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + y.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + y.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {
                        pattern: y,
                        greedy: !0
                    },
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0
                    },
                    important: /!important\b/i,
                    function: {
                        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                        lookbehind: !0
                    },
                    punctuation: /[(){};:,]/
                }, h.languages.css.atrule.inside.rest = h.languages.css, (y = h.languages.markup) && (y.tag.addInlined("style", "css"), y.tag.addAttribute("style", "css")),
                function(e) {
                    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        t = (e.languages.css.selector = {
                            pattern: e.languages.css.selector.pattern,
                            lookbehind: !0,
                            inside: t = {
                                "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                                "pseudo-class": /:[-\w]+/,
                                class: /\.[-\w]+/,
                                id: /#[-\w]+/,
                                attribute: {
                                    pattern: RegExp("\\[(?:[^[\\]\"']|" + t.source + ")*\\]"),
                                    greedy: !0,
                                    inside: {
                                        punctuation: /^\[|\]$/,
                                        "case-sensitivity": {
                                            pattern: /(\s)[si]$/i,
                                            lookbehind: !0,
                                            alias: "keyword"
                                        },
                                        namespace: {
                                            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                            lookbehind: !0,
                                            inside: {
                                                punctuation: /\|$/
                                            }
                                        },
                                        "attr-name": {
                                            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                                            lookbehind: !0
                                        },
                                        "attr-value": [t, {
                                            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                            lookbehind: !0
                                        }],
                                        operator: /[|~*^$]?=/
                                    }
                                },
                                "n-th": [{
                                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                                    lookbehind: !0,
                                    inside: {
                                        number: /[\dn]+/,
                                        operator: /[+-]/
                                    }
                                }, {
                                    pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                                    lookbehind: !0
                                }],
                                combinator: />|\+|~|\|\|/,
                                punctuation: /[(),]/
                            }
                        }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
                            variable: {
                                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                                lookbehind: !0
                            }
                        }), {
                            pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
                            lookbehind: !0
                        }),
                        n = {
                            pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                            lookbehind: !0
                        };
                    e.languages.insertBefore("css", "function", {
                        operator: {
                            pattern: /(\s)[+\-*\/](?=\s)/,
                            lookbehind: !0
                        },
                        hexcode: {
                            pattern: /\B#[\da-f]{3,8}\b/i,
                            alias: "color"
                        },
                        color: [{
                            pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                            lookbehind: !0
                        }, {
                            pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                            inside: {
                                unit: t,
                                number: n,
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/
                            }
                        }],
                        entity: /\\[\da-f]{1,8}/i,
                        unit: t,
                        number: n
                    })
                }(ep),
                function(e) {
                    var t = /[*&][^\s[\]{},]+/,
                        n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                        r = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)",
                        a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                        }),
                        o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

                    function s(e, t) {
                        return t = (t || "").replace(/m/g, "") + "m", RegExp(/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                            return r
                        }).replace(/<<value>>/g, function() {
                            return e
                        }), t)
                    }
                    e.languages.yaml = {
                        scalar: {
                            pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                                return r
                            })),
                            lookbehind: !0,
                            alias: "string"
                        },
                        comment: /#.*/,
                        key: {
                            pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                                return r
                            }).replace(/<<key>>/g, function() {
                                return "(?:" + a + "|" + o + ")"
                            })),
                            lookbehind: !0,
                            greedy: !0,
                            alias: "atrule"
                        },
                        directive: {
                            pattern: /(^[ \t]*)%.+/m,
                            lookbehind: !0,
                            alias: "important"
                        },
                        datetime: {
                            pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                            lookbehind: !0,
                            alias: "number"
                        },
                        boolean: {
                            pattern: s(/false|true/.source, "i"),
                            lookbehind: !0,
                            alias: "important"
                        },
                        null: {
                            pattern: s(/null|~/.source, "i"),
                            lookbehind: !0,
                            alias: "important"
                        },
                        string: {
                            pattern: s(o),
                            lookbehind: !0,
                            greedy: !0
                        },
                        number: {
                            pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                            lookbehind: !0
                        },
                        tag: n,
                        important: t,
                        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
                    }, e.languages.yml = e.languages.yaml
                }(ep), ep.languages.markup = {
                    comment: {
                        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                        greedy: !0
                    },
                    prolog: {
                        pattern: /<\?[\s\S]+?\?>/,
                        greedy: !0
                    },
                    doctype: {
                        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: !0,
                        inside: {
                            "internal-subset": {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: null
                            },
                            string: {
                                pattern: /"[^"]*"|'[^']*'/,
                                greedy: !0
                            },
                            punctuation: /^<!|>$|[[\]]/,
                            "doctype-tag": /^DOCTYPE/i,
                            name: /[^\s<>'"]+/
                        }
                    },
                    cdata: {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        greedy: !0
                    },
                    tag: {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: !0,
                        inside: {
                            tag: {
                                pattern: /^<\/?[^\s>\/]+/,
                                inside: {
                                    punctuation: /^<\/?/,
                                    namespace: /^[^\s>\/:]+:/
                                }
                            },
                            "special-attr": [],
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, {
                                        pattern: /^(\s*)["']|["']$/,
                                        lookbehind: !0
                                    }]
                                }
                            },
                            punctuation: /\/?>/,
                            "attr-name": {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    namespace: /^[^\s>\/:]+:/
                                }
                            }
                        }
                    },
                    entity: [{
                        pattern: /&[\da-z]{1,8};/i,
                        alias: "named-entity"
                    }, /&#x?[\da-f]{1,8};/i]
                }, ep.languages.markup.tag.inside["attr-value"].inside.entity = ep.languages.markup.entity, ep.languages.markup.doctype.inside["internal-subset"].inside = ep.languages.markup, ep.hooks.add("wrap", function(e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                }), Object.defineProperty(ep.languages.markup.tag, "addInlined", {
                    value: function(e, t) {
                        var n = {},
                            n = (n["language-" + t] = {
                                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                                lookbehind: !0,
                                inside: ep.languages[t]
                            }, n.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                                "included-cdata": {
                                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                    inside: n
                                }
                            }),
                            t = (n["language-" + t] = {
                                pattern: /[\s\S]+/,
                                inside: ep.languages[t]
                            }, {});
                        t[e] = {
                            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                                return e
                            }), "i"),
                            lookbehind: !0,
                            greedy: !0,
                            inside: n
                        }, ep.languages.insertBefore("markup", "cdata", t)
                    }
                }), Object.defineProperty(ep.languages.markup.tag, "addAttribute", {
                    value: function(e, t) {
                        ep.languages.markup.tag.inside["special-attr"].push({
                            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                            lookbehind: !0,
                            inside: {
                                "attr-name": /^[^\s=]+/,
                                "attr-value": {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        value: {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: !0,
                                            alias: [t, "language-" + t],
                                            inside: ep.languages[t]
                                        },
                                        punctuation: [{
                                            pattern: /^=/,
                                            alias: "attr-equals"
                                        }, /"|'/]
                                    }
                                }
                            }
                        })
                    }
                }), ep.languages.html = ep.languages.markup, ep.languages.mathml = ep.languages.markup, ep.languages.svg = ep.languages.markup, ep.languages.xml = ep.languages.extend("markup", {}), ep.languages.ssml = ep.languages.xml, ep.languages.atom = ep.languages.xml, ep.languages.rss = ep.languages.xml,
                function(e) {
                    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

                    function n(e) {
                        return e = e.replace(/<inner>/g, function() {
                            return t
                        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                    }
                    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                        a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                            return r
                        }),
                        o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                        s = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
                            "front-matter-block": {
                                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    punctuation: /^---|---$/,
                                    "front-matter": {
                                        pattern: /\S+(?:\s+\S+)*/,
                                        alias: ["yaml", "language-yaml"],
                                        inside: e.languages.yaml
                                    }
                                }
                            },
                            blockquote: {
                                pattern: /^>(?:[\t ]*>)*/m,
                                alias: "punctuation"
                            },
                            table: {
                                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                                inside: {
                                    "table-data-rows": {
                                        pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                                        lookbehind: !0,
                                        inside: {
                                            "table-data": {
                                                pattern: RegExp(r),
                                                inside: e.languages.markdown
                                            },
                                            punctuation: /\|/
                                        }
                                    },
                                    "table-line": {
                                        pattern: RegExp("^(" + a + ")" + o + "$"),
                                        lookbehind: !0,
                                        inside: {
                                            punctuation: /\||:?-{3,}:?/
                                        }
                                    },
                                    "table-header-row": {
                                        pattern: RegExp("^" + a + "$"),
                                        inside: {
                                            "table-header": {
                                                pattern: RegExp(r),
                                                alias: "important",
                                                inside: e.languages.markdown
                                            },
                                            punctuation: /\|/
                                        }
                                    }
                                }
                            },
                            code: [{
                                pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                                lookbehind: !0,
                                alias: "keyword"
                            }, {
                                pattern: /^```[\s\S]*?^```$/m,
                                greedy: !0,
                                inside: {
                                    "code-block": {
                                        pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                        lookbehind: !0
                                    },
                                    "code-language": {
                                        pattern: /^(```).+/,
                                        lookbehind: !0
                                    },
                                    punctuation: /```/
                                }
                            }],
                            title: [{
                                pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                                alias: "important",
                                inside: {
                                    punctuation: /==+$|--+$/
                                }
                            }, {
                                pattern: /(^\s*)#.+/m,
                                lookbehind: !0,
                                alias: "important",
                                inside: {
                                    punctuation: /^#+|#+$/
                                }
                            }],
                            hr: {
                                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                                lookbehind: !0,
                                alias: "punctuation"
                            },
                            list: {
                                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                                lookbehind: !0,
                                alias: "punctuation"
                            },
                            "url-reference": {
                                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                                inside: {
                                    variable: {
                                        pattern: /^(!?\[)[^\]]+/,
                                        lookbehind: !0
                                    },
                                    string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                                    punctuation: /^[\[\]!:]|[<>]/
                                },
                                alias: "url"
                            },
                            bold: {
                                pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {
                                        pattern: /(^..)[\s\S]+(?=..$)/,
                                        lookbehind: !0,
                                        inside: {}
                                    },
                                    punctuation: /\*\*|__/
                                }
                            },
                            italic: {
                                pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {
                                        pattern: /(^.)[\s\S]+(?=.$)/,
                                        lookbehind: !0,
                                        inside: {}
                                    },
                                    punctuation: /[*_]/
                                }
                            },
                            strike: {
                                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {
                                        pattern: /(^~~?)[\s\S]+(?=\1$)/,
                                        lookbehind: !0,
                                        inside: {}
                                    },
                                    punctuation: /~~?/
                                }
                            },
                            "code-snippet": {
                                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                                lookbehind: !0,
                                greedy: !0,
                                alias: ["code", "keyword"]
                            },
                            url: {
                                pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    operator: /^!/,
                                    content: {
                                        pattern: /(^\[)[^\]]+(?=\])/,
                                        lookbehind: !0,
                                        inside: {}
                                    },
                                    variable: {
                                        pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                                        lookbehind: !0
                                    },
                                    url: {
                                        pattern: /(^\]\()[^\s)]+/,
                                        lookbehind: !0
                                    },
                                    string: {
                                        pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                                        lookbehind: !0
                                    }
                                }
                            }
                        }), ["url", "bold", "italic", "strike"].forEach(function(t) {
                            ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(n) {
                                t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                            })
                        }), e.hooks.add("after-tokenize", function(e) {
                            "markdown" !== e.language && "md" !== e.language || function e(t) {
                                if (t && "string" != typeof t)
                                    for (var n = 0, r = t.length; n < r; n++) {
                                        var a, o = t[n];
                                        "code" !== o.type ? e(o.content) : (a = o.content[1], o = o.content[3], a && o && "code-language" === a.type && "code-block" === o.type && "string" == typeof a.content && (a = a.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), a = "language-" + (a = (/[a-z][\w-]*/i.exec(a) || [""])[0].toLowerCase()), o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, a] : o.alias.push(a) : o.alias = [a]))
                                    }
                            }(e.tokens)
                        }), e.hooks.add("wrap", function(t) {
                            if ("code-block" === t.type) {
                                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                                    var o = t.classes[r],
                                        o = /language-(.+)/.exec(o);
                                    if (o) {
                                        n = o[1];
                                        break
                                    }
                                }
                                var c, u = e.languages[n];
                                u ? t.content = e.highlight((0, t.content).replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e, t) {
                                    return "#" === (t = t.toLowerCase())[0] ? l("x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))) : i[t] || e
                                }), u, n) : n && "none" !== n && e.plugins.autoloader && (c = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random()), t.attributes.id = c, e.plugins.autoloader.loadLanguages(n, function() {
                                    var t = document.getElementById(c);
                                    t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                                }))
                            }
                        }), RegExp(e.languages.markup.tag.pattern.source, "gi")),
                        i = {
                            amp: "&",
                            lt: "<",
                            gt: ">",
                            quot: '"'
                        },
                        l = String.fromCodePoint || String.fromCharCode;
                    e.languages.md = e.languages.markdown
                }(ep), ep.languages.graphql = {
                    comment: /#.*/,
                    description: {
                        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            "language-markdown": {
                                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                                lookbehind: !0,
                                inside: ep.languages.markdown
                            }
                        }
                    },
                    string: {
                        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
                        greedy: !0
                    },
                    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                    boolean: /\b(?:false|true)\b/,
                    variable: /\$[a-z_]\w*/i,
                    directive: {
                        pattern: /@[a-z_]\w*/i,
                        alias: "function"
                    },
                    "attr-name": {
                        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                        greedy: !0
                    },
                    "atom-input": {
                        pattern: /\b[A-Z]\w*Input\b/,
                        alias: "class-name"
                    },
                    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
                    constant: /\b[A-Z][A-Z_\d]*\b/,
                    "class-name": {
                        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                        lookbehind: !0
                    },
                    fragment: {
                        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    "definition-mutation": {
                        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    "definition-query": {
                        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
                    operator: /[!=|&]|\.{3}/,
                    "property-query": /\w+(?=\s*\()/,
                    object: /\w+(?=\s*\{)/,
                    punctuation: /[!(){}\[\]:=,]/,
                    property: /\w+/
                }, ep.hooks.add("after-tokenize", function(e) {
                    if ("graphql" === e.language)
                        for (var t = e.tokens.filter(function(e) {
                                return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type
                            }), n = 0; n < t.length;) {
                            var r = t[n++];
                            if ("keyword" === r.type && "mutation" === r.content) {
                                var a = [];
                                if (u(["definition-mutation", "punctuation"]) && "(" === t[n + 1].content) {
                                    n += 2;
                                    var o = d(/^\($/, /^\)$/);
                                    if (-1 === o) continue;
                                    for (; n < o; n++) {
                                        var s = t[n + 0];
                                        "variable" === s.type && (p(s, "variable-input"), a.push(s.content))
                                    }
                                    n = o + 1
                                }
                                if (u(["punctuation", "property-query"]) && "{" === t[n + 0].content && (p(t[++n + 0], "property-mutation"), 0 < a.length)) {
                                    var i = d(/^\{$/, /^\}$/);
                                    if (-1 !== i)
                                        for (var l = n; l < i; l++) {
                                            var c = t[l];
                                            "variable" === c.type && 0 <= a.indexOf(c.content) && p(c, "variable-input")
                                        }
                                }
                            }
                        }

                    function u(e, r) {
                        r = r || 0;
                        for (var a = 0; a < e.length; a++) {
                            var o = t[n + (a + r)];
                            if (!o || o.type !== e[a]) return
                        }
                        return 1
                    }

                    function d(e, r) {
                        for (var a = 1, o = n; o < t.length; o++) {
                            var s = t[o],
                                i = s.content;
                            if ("punctuation" === s.type && "string" == typeof i) {
                                if (e.test(i)) a++;
                                else if (r.test(i) && 0 == --a) return o
                            }
                        }
                        return -1
                    }

                    function p(e, t) {
                        var n = e.alias;
                        n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [], n.push(t)
                    }
                }), ep.languages.sql = {
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                        lookbehind: !0
                    },
                    variable: [{
                        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                        greedy: !0
                    }, /@[\w.$]+/],
                    string: {
                        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                        greedy: !0,
                        lookbehind: !0
                    },
                    identifier: {
                        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /^`|`$/
                        }
                    },
                    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                    punctuation: /[;[\]()`,.]/
                },
                function(e) {
                    var t = e.languages.javascript["template-string"],
                        n = t.pattern.source,
                        r = t.inside.interpolation,
                        a = r.inside["interpolation-punctuation"],
                        o = r.pattern.source;

                    function s(t, r) {
                        if (e.languages[t]) return {
                            pattern: RegExp("((?:" + r + ")\\s*)" + n),
                            lookbehind: !0,
                            greedy: !0,
                            inside: {
                                "template-punctuation": {
                                    pattern: /^`|`$/,
                                    alias: "string"
                                },
                                "embedded-code": {
                                    pattern: /[\s\S]+/,
                                    alias: t
                                }
                            }
                        }
                    }

                    function i(t, n, r) {
                        return t = {
                            code: t,
                            grammar: n,
                            language: r
                        }, e.hooks.run("before-tokenize", t), t.tokens = e.tokenize(t.code, t.grammar), e.hooks.run("after-tokenize", t), t.tokens
                    }
                    e.languages.javascript["template-string"] = [s("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), s("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), s("svg", /\bsvg/.source), s("markdown", /\b(?:markdown|md)/.source), s("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), s("sql", /\bsql/.source), t].filter(Boolean);
                    var l = {
                        javascript: !0,
                        js: !0,
                        typescript: !0,
                        ts: !0,
                        jsx: !0,
                        tsx: !0
                    };
                    e.hooks.add("after-tokenize", function(t) {
                        t.language in l && function t(n) {
                            for (var s = 0, l = n.length; s < l; s++) {
                                var c, u, d, p = n[s];
                                "string" != typeof p && (Array.isArray(c = p.content) ? "template-string" === p.type ? (p = c[1], 3 === c.length && "string" != typeof p && "embedded-code" === p.type && (u = function e(t) {
                                    return "string" == typeof t ? t : Array.isArray(t) ? t.map(e).join("") : e(t.content)
                                }(p), p = Array.isArray(p = p.alias) ? p[0] : p, d = e.languages[p]) && (c[1] = function(t, n, s) {
                                    var l = e.tokenize(t, {
                                            interpolation: {
                                                pattern: RegExp(o),
                                                lookbehind: !0
                                            }
                                        }),
                                        c = 0,
                                        u = {},
                                        l = i(l.map(function(e) {
                                            if ("string" == typeof e) return e;
                                            for (var n, r, e = e.content; - 1 !== t.indexOf((r = c++, n = "___" + s.toUpperCase() + "_" + r + "___")););
                                            return u[n] = e, n
                                        }).join(""), n, s),
                                        d = Object.keys(u);
                                    return c = 0,
                                        function t(n) {
                                            for (var o = 0; o < n.length; o++) {
                                                if (c >= d.length) return;
                                                var s, l, p, f, g, m, h, y = n[o];
                                                "string" == typeof y || "string" == typeof y.content ? (s = d[c], -1 !== (h = (m = "string" == typeof y ? y : y.content).indexOf(s)) && (++c, l = m.substring(0, h), g = u[s], p = void 0, (f = {})["interpolation-punctuation"] = a, 3 === (f = e.tokenize(g, f)).length && ((p = [1, 1]).push.apply(p, i(f[1], e.languages.javascript, "javascript")), f.splice.apply(f, p)), p = new e.Token("interpolation", f, r.alias, g), f = m.substring(h + s.length), g = [], l && g.push(l), g.push(p), f && (t(m = [f]), g.push.apply(g, m)), "string" == typeof y ? (n.splice.apply(n, [o, 1].concat(g)), o += g.length - 1) : y.content = g)) : Array.isArray(h = y.content) ? t(h) : t([h])
                                            }
                                        }(l), new e.Token(s, l, "language-" + s, t)
                                }(u, d, p))) : t(c) : "string" != typeof c && t([c]))
                            }
                        }(t.tokens)
                    })
                }(ep), (b = ep).languages.typescript = b.languages.extend("javascript", {
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    },
                    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
                }), b.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete b.languages.typescript.parameter, delete b.languages.typescript["literal-property"], v = b.languages.extend("typescript", {}), delete v["class-name"], b.languages.typescript["class-name"].inside = v, b.languages.insertBefore("typescript", "function", {
                    decorator: {
                        pattern: /@[$\w\xA0-\uFFFF]+/,
                        inside: {
                            at: {
                                pattern: /^@/,
                                alias: "operator"
                            },
                            function: /^[\s\S]+/
                        }
                    },
                    "generic-function": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                        greedy: !0,
                        inside: {
                            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: v
                            }
                        }
                    }
                }), b.languages.ts = b.languages.typescript, w = (x = ep).languages.javascript, E = "(@(?:arg|argument|param|property)\\s+(?:" + (k = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source) + "\\s+)?)", x.languages.jsdoc = x.languages.extend("javadoclike", {
                    parameter: {
                        pattern: RegExp(E + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }
                }), x.languages.insertBefore("jsdoc", "keyword", {
                    "optional-parameter": {
                        pattern: RegExp(E + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
                        lookbehind: !0,
                        inside: {
                            parameter: {
                                pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            code: {
                                pattern: /(=)[\s\S]*(?=\]$)/,
                                lookbehind: !0,
                                inside: w,
                                alias: "language-javascript"
                            },
                            punctuation: /[=[\]]/
                        }
                    },
                    "class-name": [{
                        pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                            return k
                        })),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }, {
                        pattern: RegExp("(@[a-z]+\\s+)" + k),
                        lookbehind: !0,
                        inside: {
                            string: w.string,
                            number: w.number,
                            boolean: w.boolean,
                            keyword: x.languages.typescript.keyword,
                            operator: /=>|\.\.\.|[&|?:*]/,
                            punctuation: /[.,;=<>{}()[\]]/
                        }
                    }],
                    example: {
                        pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                        lookbehind: !0,
                        inside: {
                            code: {
                                pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                                lookbehind: !0,
                                inside: w,
                                alias: "language-javascript"
                            }
                        }
                    }
                }), x.languages.javadoclike.addSupport("javascript", x.languages.jsdoc), (S = ep).languages.flow = S.languages.extend("javascript", {}), S.languages.insertBefore("flow", "keyword", {
                    type: [{
                        pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                        alias: "class-name"
                    }]
                }), S.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete S.languages.flow.parameter, S.languages.insertBefore("flow", "operator", {
                    "flow-punctuation": {
                        pattern: /\{\||\|\}/,
                        alias: "punctuation"
                    }
                }), Array.isArray(S.languages.flow.keyword) || (S.languages.flow.keyword = [S.languages.flow.keyword]), S.languages.flow.keyword.unshift({
                    pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
                    lookbehind: !0
                }), ep.languages.n4js = ep.languages.extend("javascript", {
                    keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
                }), ep.languages.insertBefore("n4js", "constant", {
                    annotation: {
                        pattern: /@+\w+/,
                        alias: "operator"
                    }
                }), ep.languages.n4jsd = ep.languages.n4js,
                function(e) {
                    function t(e, t) {
                        return RegExp(e.replace(/<ID>/g, function() {
                            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
                        }), t)
                    }
                    e.languages.insertBefore("javascript", "function-variable", {
                        "method-variable": {
                            pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                            lookbehind: !0,
                            alias: ["function-variable", "method", "function", "property-access"]
                        }
                    }), e.languages.insertBefore("javascript", "function", {
                        method: {
                            pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                            lookbehind: !0,
                            alias: ["function", "property-access"]
                        }
                    }), e.languages.insertBefore("javascript", "constant", {
                        "known-class-name": [{
                            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                            alias: "class-name"
                        }, {
                            pattern: /\b(?:[A-Z]\w*)Error\b/,
                            alias: "class-name"
                        }]
                    }), e.languages.insertBefore("javascript", "keyword", {
                        imports: {
                            pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                            lookbehind: !0,
                            inside: e.languages.javascript
                        },
                        exports: {
                            pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                            lookbehind: !0,
                            inside: e.languages.javascript
                        }
                    }), e.languages.javascript.keyword.unshift({
                        pattern: /\b(?:as|default|export|from|import)\b/,
                        alias: "module"
                    }, {
                        pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                        alias: "control-flow"
                    }, {
                        pattern: /\bnull\b/,
                        alias: ["null", "nil"]
                    }, {
                        pattern: /\bundefined\b/,
                        alias: "nil"
                    }), e.languages.insertBefore("javascript", "operator", {
                        spread: {
                            pattern: /\.{3}/,
                            alias: "operator"
                        },
                        arrow: {
                            pattern: /=>/,
                            alias: "operator"
                        }
                    }), e.languages.insertBefore("javascript", "punctuation", {
                        "property-access": {
                            pattern: t(/(\.\s*)#?<ID>/.source),
                            lookbehind: !0
                        },
                        "maybe-class-name": {
                            pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                            lookbehind: !0
                        },
                        dom: {
                            pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                            alias: "variable"
                        },
                        console: {
                            pattern: /\bconsole(?=\s*\.)/,
                            alias: "class-name"
                        }
                    });
                    for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < n.length; r++) {
                        var a = n[r],
                            o = e.languages.javascript[a],
                            a = (o = "RegExp" === e.util.type(o) ? e.languages.javascript[a] = {
                                pattern: o
                            } : o).inside || {};
                        (o.inside = a)["maybe-class-name"] = /^[A-Z][\s\S]*/
                    }
                }(ep),
                function(e) {
                    var t = e.util.clone(e.languages.javascript),
                        n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                        r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                        a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

                    function o(e, t) {
                        return RegExp(e = e.replace(/<S>/g, function() {
                            return n
                        }).replace(/<BRACES>/g, function() {
                            return r
                        }).replace(/<SPREAD>/g, function() {
                            return a
                        }), t)
                    }
                    a = o(a).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
                        spread: {
                            pattern: o(/<SPREAD>/.source),
                            inside: e.languages.jsx
                        }
                    }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
                        script: {
                            pattern: o(/=<BRACES>/.source),
                            alias: "language-javascript",
                            inside: {
                                "script-punctuation": {
                                    pattern: /^=(?=\{)/,
                                    alias: "punctuation"
                                },
                                rest: e.languages.jsx
                            }
                        }
                    }, e.languages.jsx.tag);
                    var s = function(e) {
                        return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(s).join("") : ""
                    };
                    e.hooks.add("after-tokenize", function(t) {
                        "jsx" !== t.language && "tsx" !== t.language || function t(n) {
                            for (var r = [], a = 0; a < n.length; a++) {
                                var o = n[a],
                                    i = !1;
                                "string" != typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? 0 < r.length && r[r.length - 1].tagName === s(o.content[0].content[1]) && r.pop() : "/>" !== o.content[o.content.length - 1].content && r.push({
                                    tagName: s(o.content[0].content[1]),
                                    openedBraces: 0
                                }) : 0 < r.length && "punctuation" === o.type && "{" === o.content ? r[r.length - 1].openedBraces++ : 0 < r.length && 0 < r[r.length - 1].openedBraces && "punctuation" === o.type && "}" === o.content ? r[r.length - 1].openedBraces-- : i = !0), (i || "string" == typeof o) && 0 < r.length && 0 === r[r.length - 1].openedBraces && (i = s(o), a < n.length - 1 && ("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) && (i += s(n[a + 1]), n.splice(a + 1, 1)), 0 < a && ("string" == typeof n[a - 1] || "plain-text" === n[a - 1].type) && (i = s(n[a - 1]) + i, n.splice(a - 1, 1), a--), n[a] = new e.Token("plain-text", i, null, i)), o.content && "string" != typeof o.content && t(o.content)
                            }
                        }(t.tokens)
                    })
                }(ep), A = (j = ep).util.clone(j.languages.typescript), (j.languages.tsx = j.languages.extend("jsx", A), delete j.languages.tsx.parameter, delete j.languages.tsx["literal-property"], A = j.languages.tsx.tag).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + A.pattern.source + ")", A.pattern.flags), A.lookbehind = !0, ep.languages.swift = {
                    comment: {
                        pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    "string-literal": [{
                        pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                                lookbehind: !0,
                                inside: null
                            },
                            "interpolation-punctuation": {
                                pattern: /^\)|\\\($/,
                                alias: "punctuation"
                            },
                            punctuation: /\\(?=[\r\n])/,
                            string: /[\s\S]+/
                        }
                    }, {
                        pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                                lookbehind: !0,
                                inside: null
                            },
                            "interpolation-punctuation": {
                                pattern: /^\)|\\#+\($/,
                                alias: "punctuation"
                            },
                            string: /[\s\S]+/
                        }
                    }],
                    directive: {
                        pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
                        alias: "property",
                        inside: {
                            "directive-name": /^#\w+/,
                            boolean: /\b(?:false|true)\b/,
                            number: /\b\d+(?:\.\d+)*\b/,
                            operator: /!|&&|\|\||[<>]=?/,
                            punctuation: /[(),]/
                        }
                    },
                    literal: {
                        pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                        alias: "constant"
                    },
                    "other-directive": {
                        pattern: /#\w+\b/,
                        alias: "property"
                    },
                    attribute: {
                        pattern: /@\w+/,
                        alias: "atrule"
                    },
                    "function-definition": {
                        pattern: /(\bfunc\s+)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    label: {
                        pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                        lookbehind: !0,
                        alias: "important"
                    },
                    keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
                    boolean: /\b(?:false|true)\b/,
                    nil: {
                        pattern: /\bnil\b/,
                        alias: "constant"
                    },
                    "short-argument": /\$\d+\b/,
                    omit: {
                        pattern: /\b_\b/,
                        alias: "keyword"
                    },
                    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
                    "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
                    function: /\b[a-z_]\w*(?=\s*\()/i,
                    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
                    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
                    punctuation: /[{}[\]();,.:\\]/
                }, ep.languages.swift["string-literal"].forEach(function(e) {
                    e.inside.interpolation.inside = ep.languages.swift
                }), (O = ep).languages.kotlin = O.languages.extend("clike", {
                    keyword: {
                        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                        lookbehind: !0
                    },
                    function: [{
                        pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                        greedy: !0
                    }, {
                        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
                }), delete O.languages.kotlin["class-name"], C = {
                    "interpolation-punctuation": {
                        pattern: /^\$\{?|\}$/,
                        alias: "punctuation"
                    },
                    expression: {
                        pattern: /[\s\S]+/,
                        inside: O.languages.kotlin
                    }
                }, O.languages.insertBefore("kotlin", "string", {
                    "string-literal": [{
                        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                        alias: "multiline",
                        inside: {
                            interpolation: {
                                pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                inside: C
                            },
                            string: /[\s\S]+/
                        }
                    }, {
                        pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                        alias: "singleline",
                        inside: {
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                lookbehind: !0,
                                inside: C
                            },
                            string: /[\s\S]+/
                        }
                    }],
                    char: {
                        pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                        greedy: !0
                    }
                }), delete O.languages.kotlin.string, O.languages.insertBefore("kotlin", "keyword", {
                    annotation: {
                        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                        alias: "builtin"
                    }
                }), O.languages.insertBefore("kotlin", "function", {
                    label: {
                        pattern: /\b\w+@|@\w+\b/,
                        alias: "symbol"
                    }
                }), O.languages.kt = O.languages.kotlin, O.languages.kts = O.languages.kotlin, ep.languages.c = ep.languages.extend("clike", {
                    comment: {
                        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                        greedy: !0
                    },
                    string: {
                        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                        lookbehind: !0
                    },
                    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                    function: /\b[a-z_]\w*(?=\s*\()/i,
                    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
                }), ep.languages.insertBefore("c", "string", {
                    char: {
                        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                        greedy: !0
                    }
                }), ep.languages.insertBefore("c", "string", {
                    macro: {
                        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "property",
                        inside: {
                            string: [{
                                pattern: /^(#\s*include\s*)<[^>]+>/,
                                lookbehind: !0
                            }, ep.languages.c.string],
                            char: ep.languages.c.char,
                            comment: ep.languages.c.comment,
                            "macro-name": [{
                                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                                lookbehind: !0
                            }, {
                                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                                lookbehind: !0,
                                alias: "function"
                            }],
                            directive: {
                                pattern: /^(#\s*)[a-z]+/,
                                lookbehind: !0,
                                alias: "keyword"
                            },
                            "directive-hash": /^#/,
                            punctuation: /##|\\(?=[\r\n])/,
                            expression: {
                                pattern: /\S[\s\S]*/,
                                inside: ep.languages.c
                            }
                        }
                    }
                }), ep.languages.insertBefore("c", "function", {
                    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
                }), delete ep.languages.c.boolean, ep.languages.objectivec = ep.languages.extend("c", {
                    string: {
                        pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                        greedy: !0
                    },
                    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
                }), delete ep.languages.objectivec["class-name"], ep.languages.objc = ep.languages.objectivec, ep.languages.reason = ep.languages.extend("clike", {
                    string: {
                        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                        greedy: !0
                    },
                    "class-name": /\b[A-Z]\w*/,
                    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
                    operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
                }), ep.languages.insertBefore("reason", "class-name", {
                    char: {
                        pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                        greedy: !0
                    },
                    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
                    label: {
                        pattern: /\b[a-z]\w*(?=::)/,
                        alias: "symbol"
                    }
                }), delete ep.languages.reason.function,
                function(e) {
                    for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) t = t.replace(/<self>/g, function() {
                        return t
                    });
                    t = t.replace(/<self>/g, function() {
                        return /[^\s\S]/.source
                    }), e.languages.rust = {
                        comment: [{
                            pattern: RegExp(/(^|[^\\])/.source + t),
                            lookbehind: !0,
                            greedy: !0
                        }, {
                            pattern: /(^|[^\\:])\/\/.*/,
                            lookbehind: !0,
                            greedy: !0
                        }],
                        string: {
                            pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                            greedy: !0
                        },
                        char: {
                            pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                            greedy: !0
                        },
                        attribute: {
                            pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                            greedy: !0,
                            alias: "attr-name",
                            inside: {
                                string: null
                            }
                        },
                        "closure-params": {
                            pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: {
                                "closure-punctuation": {
                                    pattern: /^\||\|$/,
                                    alias: "punctuation"
                                },
                                rest: null
                            }
                        },
                        "lifetime-annotation": {
                            pattern: /'\w+/,
                            alias: "symbol"
                        },
                        "fragment-specifier": {
                            pattern: /(\$\w+:)[a-z]+/,
                            lookbehind: !0,
                            alias: "punctuation"
                        },
                        variable: /\$\w+/,
                        "function-definition": {
                            pattern: /(\bfn\s+)\w+/,
                            lookbehind: !0,
                            alias: "function"
                        },
                        "type-definition": {
                            pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                            lookbehind: !0,
                            alias: "class-name"
                        },
                        "module-declaration": [{
                            pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                            lookbehind: !0,
                            alias: "namespace"
                        }, {
                            pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                            lookbehind: !0,
                            alias: "namespace",
                            inside: {
                                punctuation: /::/
                            }
                        }],
                        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
                        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                        macro: {
                            pattern: /\b\w+!/,
                            alias: "property"
                        },
                        constant: /\b[A-Z_][A-Z_\d]+\b/,
                        "class-name": /\b[A-Z]\w*\b/,
                        namespace: {
                            pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                            inside: {
                                punctuation: /::/
                            }
                        },
                        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
                        boolean: /\b(?:false|true)\b/,
                        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
                    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
                }(ep), ep.languages.go = ep.languages.extend("clike", {
                    string: {
                        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                    boolean: /\b(?:_|false|iota|nil|true)\b/,
                    number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
                    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
                }), ep.languages.insertBefore("go", "string", {
                    char: {
                        pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                        greedy: !0
                    }
                }), delete ep.languages.go["class-name"], L = ep, N = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, R = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                    return N.source
                }), L.languages.cpp = L.languages.extend("c", {
                    "class-name": [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                            return N.source
                        })),
                        lookbehind: !0
                    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                    keyword: N,
                    number: {
                        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0
                    },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/
                }), L.languages.insertBefore("cpp", "string", {
                    module: {
                        pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                            return R
                        }) + ")"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: /^[<"][\s\S]+/,
                            operator: /:/,
                            punctuation: /\./
                        }
                    },
                    "raw-string": {
                        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                        alias: "string",
                        greedy: !0
                    }
                }), L.languages.insertBefore("cpp", "keyword", {
                    "generic-function": {
                        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: L.languages.cpp
                            }
                        }
                    }
                }), L.languages.insertBefore("cpp", "operator", {
                    "double-colon": {
                        pattern: /::/,
                        alias: "punctuation"
                    }
                }), L.languages.insertBefore("cpp", "class-name", {
                    "base-clause": {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: L.languages.extend("cpp", {})
                    }
                }), L.languages.insertBefore("inside", "double-colon", {
                    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
                }, L.languages.cpp["base-clause"]);
            var ef = {};
            ((e, t) => {
                for (var n in t) J(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(ef, {
                dracula: () => eg,
                duotoneDark: () => em,
                duotoneLight: () => eh,
                github: () => ey,
                jettwaveDark: () => eL,
                jettwaveLight: () => eN,
                nightOwl: () => eb,
                nightOwlLight: () => ev,
                oceanicNext: () => ew,
                okaidia: () => ek,
                palenight: () => eE,
                shadesOfPurple: () => eS,
                synthwave84: () => ej,
                ultramin: () => eA,
                vsDark: () => eO,
                vsLight: () => eC
            });
            var eg = {
                    plain: {
                        color: "#F8F8F2",
                        backgroundColor: "#282A36"
                    },
                    styles: [{
                        types: ["prolog", "constant", "builtin"],
                        style: {
                            color: "rgb(189, 147, 249)"
                        }
                    }, {
                        types: ["inserted", "function"],
                        style: {
                            color: "rgb(80, 250, 123)"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            color: "rgb(255, 85, 85)"
                        }
                    }, {
                        types: ["changed"],
                        style: {
                            color: "rgb(255, 184, 108)"
                        }
                    }, {
                        types: ["punctuation", "symbol"],
                        style: {
                            color: "rgb(248, 248, 242)"
                        }
                    }, {
                        types: ["string", "char", "tag", "selector"],
                        style: {
                            color: "rgb(255, 121, 198)"
                        }
                    }, {
                        types: ["keyword", "variable"],
                        style: {
                            color: "rgb(189, 147, 249)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "rgb(98, 114, 164)"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "rgb(241, 250, 140)"
                        }
                    }]
                },
                em = {
                    plain: {
                        backgroundColor: "#2a2734",
                        color: "#9a86fd"
                    },
                    styles: [{
                        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                        style: {
                            color: "#6c6783"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            opacity: .7
                        }
                    }, {
                        types: ["tag", "operator", "number"],
                        style: {
                            color: "#e09142"
                        }
                    }, {
                        types: ["property", "function"],
                        style: {
                            color: "#9a86fd"
                        }
                    }, {
                        types: ["tag-id", "selector", "atrule-id"],
                        style: {
                            color: "#eeebff"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "#c4b9fe"
                        }
                    }, {
                        types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
                        style: {
                            color: "#ffcc99"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            textDecorationLine: "line-through"
                        }
                    }, {
                        types: ["inserted"],
                        style: {
                            textDecorationLine: "underline"
                        }
                    }, {
                        types: ["italic"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["important", "bold"],
                        style: {
                            fontWeight: "bold"
                        }
                    }, {
                        types: ["important"],
                        style: {
                            color: "#c4b9fe"
                        }
                    }]
                },
                eh = {
                    plain: {
                        backgroundColor: "#faf8f5",
                        color: "#728fcb"
                    },
                    styles: [{
                        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                        style: {
                            color: "#b6ad9a"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            opacity: .7
                        }
                    }, {
                        types: ["tag", "operator", "number"],
                        style: {
                            color: "#063289"
                        }
                    }, {
                        types: ["property", "function"],
                        style: {
                            color: "#b29762"
                        }
                    }, {
                        types: ["tag-id", "selector", "atrule-id"],
                        style: {
                            color: "#2d2006"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "#896724"
                        }
                    }, {
                        types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule"],
                        style: {
                            color: "#728fcb"
                        }
                    }, {
                        types: ["placeholder", "variable"],
                        style: {
                            color: "#93abdc"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            textDecorationLine: "line-through"
                        }
                    }, {
                        types: ["inserted"],
                        style: {
                            textDecorationLine: "underline"
                        }
                    }, {
                        types: ["italic"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["important", "bold"],
                        style: {
                            fontWeight: "bold"
                        }
                    }, {
                        types: ["important"],
                        style: {
                            color: "#896724"
                        }
                    }]
                },
                ey = {
                    plain: {
                        color: "#393A34",
                        backgroundColor: "#f6f8fa"
                    },
                    styles: [{
                        types: ["comment", "prolog", "doctype", "cdata"],
                        style: {
                            color: "#999988",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            opacity: .7
                        }
                    }, {
                        types: ["string", "attr-value"],
                        style: {
                            color: "#e3116c"
                        }
                    }, {
                        types: ["punctuation", "operator"],
                        style: {
                            color: "#393A34"
                        }
                    }, {
                        types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
                        style: {
                            color: "#36acaa"
                        }
                    }, {
                        types: ["atrule", "keyword", "attr-name", "selector"],
                        style: {
                            color: "#00a4db"
                        }
                    }, {
                        types: ["function", "deleted", "tag"],
                        style: {
                            color: "#d73a49"
                        }
                    }, {
                        types: ["function-variable"],
                        style: {
                            color: "#6f42c1"
                        }
                    }, {
                        types: ["tag", "selector", "keyword"],
                        style: {
                            color: "#00009f"
                        }
                    }]
                },
                eb = {
                    plain: {
                        color: "#d6deeb",
                        backgroundColor: "#011627"
                    },
                    styles: [{
                        types: ["changed"],
                        style: {
                            color: "rgb(162, 191, 252)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            color: "rgba(239, 83, 80, 0.56)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["inserted", "attr-name"],
                        style: {
                            color: "rgb(173, 219, 103)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "rgb(99, 119, 119)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["string", "url"],
                        style: {
                            color: "rgb(173, 219, 103)"
                        }
                    }, {
                        types: ["variable"],
                        style: {
                            color: "rgb(214, 222, 235)"
                        }
                    }, {
                        types: ["number"],
                        style: {
                            color: "rgb(247, 140, 108)"
                        }
                    }, {
                        types: ["builtin", "char", "constant", "function"],
                        style: {
                            color: "rgb(130, 170, 255)"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "rgb(199, 146, 234)"
                        }
                    }, {
                        types: ["selector", "doctype"],
                        style: {
                            color: "rgb(199, 146, 234)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "rgb(255, 203, 139)"
                        }
                    }, {
                        types: ["tag", "operator", "keyword"],
                        style: {
                            color: "rgb(127, 219, 202)"
                        }
                    }, {
                        types: ["boolean"],
                        style: {
                            color: "rgb(255, 88, 116)"
                        }
                    }, {
                        types: ["property"],
                        style: {
                            color: "rgb(128, 203, 196)"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            color: "rgb(178, 204, 214)"
                        }
                    }]
                },
                ev = {
                    plain: {
                        color: "#403f53",
                        backgroundColor: "#FBFBFB"
                    },
                    styles: [{
                        types: ["changed"],
                        style: {
                            color: "rgb(162, 191, 252)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            color: "rgba(239, 83, 80, 0.56)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["inserted", "attr-name"],
                        style: {
                            color: "rgb(72, 118, 214)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "rgb(152, 159, 177)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["string", "builtin", "char", "constant", "url"],
                        style: {
                            color: "rgb(72, 118, 214)"
                        }
                    }, {
                        types: ["variable"],
                        style: {
                            color: "rgb(201, 103, 101)"
                        }
                    }, {
                        types: ["number"],
                        style: {
                            color: "rgb(170, 9, 130)"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "rgb(153, 76, 195)"
                        }
                    }, {
                        types: ["function", "selector", "doctype"],
                        style: {
                            color: "rgb(153, 76, 195)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "rgb(17, 17, 17)"
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: "rgb(153, 76, 195)"
                        }
                    }, {
                        types: ["operator", "property", "keyword", "namespace"],
                        style: {
                            color: "rgb(12, 150, 155)"
                        }
                    }, {
                        types: ["boolean"],
                        style: {
                            color: "rgb(188, 84, 84)"
                        }
                    }]
                },
                ex = {
                    char: "#D8DEE9",
                    comment: "#999999",
                    keyword: "#c5a5c5",
                    primitive: "#5a9bcf",
                    string: "#8dc891",
                    variable: "#d7deea",
                    boolean: "#ff8b50",
                    punctuation: "#5FB3B3",
                    tag: "#fc929e",
                    function: "#79b6f2",
                    className: "#FAC863",
                    method: "#6699CC",
                    operator: "#fc929e"
                },
                ew = {
                    plain: {
                        backgroundColor: "#282c34",
                        color: "#ffffff"
                    },
                    styles: [{
                        types: ["attr-name"],
                        style: {
                            color: ex.keyword
                        }
                    }, {
                        types: ["attr-value"],
                        style: {
                            color: ex.string
                        }
                    }, {
                        types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
                        style: {
                            color: ex.comment
                        }
                    }, {
                        types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
                        style: {
                            color: ex.primitive
                        }
                    }, {
                        types: ["boolean"],
                        style: {
                            color: ex.boolean
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: ex.tag
                        }
                    }, {
                        types: ["string"],
                        style: {
                            color: ex.string
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: ex.string
                        }
                    }, {
                        types: ["selector", "char", "builtin", "inserted"],
                        style: {
                            color: ex.char
                        }
                    }, {
                        types: ["function"],
                        style: {
                            color: ex.function
                        }
                    }, {
                        types: ["operator", "entity", "url", "variable"],
                        style: {
                            color: ex.variable
                        }
                    }, {
                        types: ["keyword"],
                        style: {
                            color: ex.keyword
                        }
                    }, {
                        types: ["atrule", "class-name"],
                        style: {
                            color: ex.className
                        }
                    }, {
                        types: ["important"],
                        style: {
                            fontWeight: "400"
                        }
                    }, {
                        types: ["bold"],
                        style: {
                            fontWeight: "bold"
                        }
                    }, {
                        types: ["italic"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            opacity: .7
                        }
                    }]
                },
                ek = {
                    plain: {
                        color: "#f8f8f2",
                        backgroundColor: "#272822"
                    },
                    styles: [{
                        types: ["changed"],
                        style: {
                            color: "rgb(162, 191, 252)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            color: "#f92672",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["inserted"],
                        style: {
                            color: "rgb(173, 219, 103)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "#8292a2",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["string", "url"],
                        style: {
                            color: "#a6e22e"
                        }
                    }, {
                        types: ["variable"],
                        style: {
                            color: "#f8f8f2"
                        }
                    }, {
                        types: ["number"],
                        style: {
                            color: "#ae81ff"
                        }
                    }, {
                        types: ["builtin", "char", "constant", "function", "class-name"],
                        style: {
                            color: "#e6db74"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "#f8f8f2"
                        }
                    }, {
                        types: ["selector", "doctype"],
                        style: {
                            color: "#a6e22e",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["tag", "operator", "keyword"],
                        style: {
                            color: "#66d9ef"
                        }
                    }, {
                        types: ["boolean"],
                        style: {
                            color: "#ae81ff"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            color: "rgb(178, 204, 214)",
                            opacity: .7
                        }
                    }, {
                        types: ["tag", "property"],
                        style: {
                            color: "#f92672"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "#a6e22e !important"
                        }
                    }, {
                        types: ["doctype"],
                        style: {
                            color: "#8292a2"
                        }
                    }, {
                        types: ["rule"],
                        style: {
                            color: "#e6db74"
                        }
                    }]
                },
                eE = {
                    plain: {
                        color: "#bfc7d5",
                        backgroundColor: "#292d3e"
                    },
                    styles: [{
                        types: ["comment"],
                        style: {
                            color: "rgb(105, 112, 152)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["string", "inserted"],
                        style: {
                            color: "rgb(195, 232, 141)"
                        }
                    }, {
                        types: ["number"],
                        style: {
                            color: "rgb(247, 140, 108)"
                        }
                    }, {
                        types: ["builtin", "char", "constant", "function"],
                        style: {
                            color: "rgb(130, 170, 255)"
                        }
                    }, {
                        types: ["punctuation", "selector"],
                        style: {
                            color: "rgb(199, 146, 234)"
                        }
                    }, {
                        types: ["variable"],
                        style: {
                            color: "rgb(191, 199, 213)"
                        }
                    }, {
                        types: ["class-name", "attr-name"],
                        style: {
                            color: "rgb(255, 203, 107)"
                        }
                    }, {
                        types: ["tag", "deleted"],
                        style: {
                            color: "rgb(255, 85, 114)"
                        }
                    }, {
                        types: ["operator"],
                        style: {
                            color: "rgb(137, 221, 255)"
                        }
                    }, {
                        types: ["boolean"],
                        style: {
                            color: "rgb(255, 88, 116)"
                        }
                    }, {
                        types: ["keyword"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["doctype"],
                        style: {
                            color: "rgb(199, 146, 234)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["namespace"],
                        style: {
                            color: "rgb(178, 204, 214)"
                        }
                    }, {
                        types: ["url"],
                        style: {
                            color: "rgb(221, 221, 221)"
                        }
                    }]
                },
                eS = {
                    plain: {
                        color: "#9EFEFF",
                        backgroundColor: "#2D2A55"
                    },
                    styles: [{
                        types: ["changed"],
                        style: {
                            color: "rgb(255, 238, 128)"
                        }
                    }, {
                        types: ["deleted"],
                        style: {
                            color: "rgba(239, 83, 80, 0.56)"
                        }
                    }, {
                        types: ["inserted"],
                        style: {
                            color: "rgb(173, 219, 103)"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "rgb(179, 98, 255)",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "rgb(255, 255, 255)"
                        }
                    }, {
                        types: ["constant"],
                        style: {
                            color: "rgb(255, 98, 140)"
                        }
                    }, {
                        types: ["string", "url"],
                        style: {
                            color: "rgb(165, 255, 144)"
                        }
                    }, {
                        types: ["variable"],
                        style: {
                            color: "rgb(255, 238, 128)"
                        }
                    }, {
                        types: ["number", "boolean"],
                        style: {
                            color: "rgb(255, 98, 140)"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "rgb(255, 180, 84)"
                        }
                    }, {
                        types: ["keyword", "operator", "property", "namespace", "tag", "selector", "doctype"],
                        style: {
                            color: "rgb(255, 157, 0)"
                        }
                    }, {
                        types: ["builtin", "char", "constant", "function", "class-name"],
                        style: {
                            color: "rgb(250, 208, 0)"
                        }
                    }]
                },
                ej = {
                    plain: {
                        backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
                        backgroundImage: "#34294f",
                        color: "#f92aad",
                        textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
                    },
                    styles: [{
                        types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
                        style: {
                            color: "#495495",
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "#ccc"
                        }
                    }, {
                        types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
                        style: {
                            color: "#e2777a"
                        }
                    }, {
                        types: ["property", "selector"],
                        style: {
                            color: "#72f1b8",
                            textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
                        }
                    }, {
                        types: ["function-name"],
                        style: {
                            color: "#6196cc"
                        }
                    }, {
                        types: ["boolean", "selector-id", "function"],
                        style: {
                            color: "#fdfdfd",
                            textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
                        }
                    }, {
                        types: ["class-name", "maybe-class-name", "builtin"],
                        style: {
                            color: "#fff5f6",
                            textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
                        }
                    }, {
                        types: ["constant", "symbol"],
                        style: {
                            color: "#f92aad",
                            textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
                        }
                    }, {
                        types: ["important", "atrule", "keyword", "selector-class"],
                        style: {
                            color: "#f4eee4",
                            textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
                        }
                    }, {
                        types: ["string", "char", "attr-value", "regex", "variable"],
                        style: {
                            color: "#f87c32"
                        }
                    }, {
                        types: ["parameter"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["entity", "url"],
                        style: {
                            color: "#67cdcc"
                        }
                    }, {
                        types: ["operator"],
                        style: {
                            color: "ffffffee"
                        }
                    }, {
                        types: ["important", "bold"],
                        style: {
                            fontWeight: "bold"
                        }
                    }, {
                        types: ["italic"],
                        style: {
                            fontStyle: "italic"
                        }
                    }, {
                        types: ["entity"],
                        style: {
                            cursor: "help"
                        }
                    }, {
                        types: ["inserted"],
                        style: {
                            color: "green"
                        }
                    }]
                },
                eA = {
                    plain: {
                        color: "#282a2e",
                        backgroundColor: "#ffffff"
                    },
                    styles: [{
                        types: ["comment"],
                        style: {
                            color: "rgb(197, 200, 198)"
                        }
                    }, {
                        types: ["string", "number", "builtin", "variable"],
                        style: {
                            color: "rgb(150, 152, 150)"
                        }
                    }, {
                        types: ["class-name", "function", "tag", "attr-name"],
                        style: {
                            color: "rgb(40, 42, 46)"
                        }
                    }]
                },
                eO = {
                    plain: {
                        color: "#9CDCFE",
                        backgroundColor: "#1E1E1E"
                    },
                    styles: [{
                        types: ["prolog"],
                        style: {
                            color: "rgb(0, 0, 128)"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "rgb(106, 153, 85)"
                        }
                    }, {
                        types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                        style: {
                            color: "rgb(86, 156, 214)"
                        }
                    }, {
                        types: ["number", "inserted"],
                        style: {
                            color: "rgb(181, 206, 168)"
                        }
                    }, {
                        types: ["constant"],
                        style: {
                            color: "rgb(100, 102, 149)"
                        }
                    }, {
                        types: ["attr-name", "variable"],
                        style: {
                            color: "rgb(156, 220, 254)"
                        }
                    }, {
                        types: ["deleted", "string", "attr-value", "template-punctuation"],
                        style: {
                            color: "rgb(206, 145, 120)"
                        }
                    }, {
                        types: ["selector"],
                        style: {
                            color: "rgb(215, 186, 125)"
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: "rgb(78, 201, 176)"
                        }
                    }, {
                        types: ["tag"],
                        languages: ["markup"],
                        style: {
                            color: "rgb(86, 156, 214)"
                        }
                    }, {
                        types: ["punctuation", "operator"],
                        style: {
                            color: "rgb(212, 212, 212)"
                        }
                    }, {
                        types: ["punctuation"],
                        languages: ["markup"],
                        style: {
                            color: "#808080"
                        }
                    }, {
                        types: ["function"],
                        style: {
                            color: "rgb(220, 220, 170)"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "rgb(78, 201, 176)"
                        }
                    }, {
                        types: ["char"],
                        style: {
                            color: "rgb(209, 105, 105)"
                        }
                    }]
                },
                eC = {
                    plain: {
                        color: "#000000",
                        backgroundColor: "#ffffff"
                    },
                    styles: [{
                        types: ["comment"],
                        style: {
                            color: "rgb(0, 128, 0)"
                        }
                    }, {
                        types: ["builtin"],
                        style: {
                            color: "rgb(0, 112, 193)"
                        }
                    }, {
                        types: ["number", "variable", "inserted"],
                        style: {
                            color: "rgb(9, 134, 88)"
                        }
                    }, {
                        types: ["operator"],
                        style: {
                            color: "rgb(0, 0, 0)"
                        }
                    }, {
                        types: ["constant", "char"],
                        style: {
                            color: "rgb(129, 31, 63)"
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: "rgb(128, 0, 0)"
                        }
                    }, {
                        types: ["attr-name"],
                        style: {
                            color: "rgb(255, 0, 0)"
                        }
                    }, {
                        types: ["deleted", "string"],
                        style: {
                            color: "rgb(163, 21, 21)"
                        }
                    }, {
                        types: ["changed", "punctuation"],
                        style: {
                            color: "rgb(4, 81, 165)"
                        }
                    }, {
                        types: ["function", "keyword"],
                        style: {
                            color: "rgb(0, 0, 255)"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "rgb(38, 127, 153)"
                        }
                    }]
                },
                eL = {
                    plain: {
                        color: "#f8fafc",
                        backgroundColor: "#011627"
                    },
                    styles: [{
                        types: ["prolog"],
                        style: {
                            color: "#000080"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "#6A9955"
                        }
                    }, {
                        types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                        style: {
                            color: "#569CD6"
                        }
                    }, {
                        types: ["number", "inserted"],
                        style: {
                            color: "#B5CEA8"
                        }
                    }, {
                        types: ["constant"],
                        style: {
                            color: "#f8fafc"
                        }
                    }, {
                        types: ["attr-name", "variable"],
                        style: {
                            color: "#9CDCFE"
                        }
                    }, {
                        types: ["deleted", "string", "attr-value", "template-punctuation"],
                        style: {
                            color: "#cbd5e1"
                        }
                    }, {
                        types: ["selector"],
                        style: {
                            color: "#D7BA7D"
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["tag"],
                        languages: ["markup"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["punctuation", "operator"],
                        style: {
                            color: "#D4D4D4"
                        }
                    }, {
                        types: ["punctuation"],
                        languages: ["markup"],
                        style: {
                            color: "#808080"
                        }
                    }, {
                        types: ["function"],
                        style: {
                            color: "#7dd3fc"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["char"],
                        style: {
                            color: "#D16969"
                        }
                    }]
                },
                eN = {
                    plain: {
                        color: "#0f172a",
                        backgroundColor: "#f1f5f9"
                    },
                    styles: [{
                        types: ["prolog"],
                        style: {
                            color: "#000080"
                        }
                    }, {
                        types: ["comment"],
                        style: {
                            color: "#6A9955"
                        }
                    }, {
                        types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                        style: {
                            color: "#0c4a6e"
                        }
                    }, {
                        types: ["number", "inserted"],
                        style: {
                            color: "#B5CEA8"
                        }
                    }, {
                        types: ["constant"],
                        style: {
                            color: "#0f172a"
                        }
                    }, {
                        types: ["attr-name", "variable"],
                        style: {
                            color: "#0c4a6e"
                        }
                    }, {
                        types: ["deleted", "string", "attr-value", "template-punctuation"],
                        style: {
                            color: "#64748b"
                        }
                    }, {
                        types: ["selector"],
                        style: {
                            color: "#D7BA7D"
                        }
                    }, {
                        types: ["tag"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["tag"],
                        languages: ["markup"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["punctuation", "operator"],
                        style: {
                            color: "#475569"
                        }
                    }, {
                        types: ["punctuation"],
                        languages: ["markup"],
                        style: {
                            color: "#808080"
                        }
                    }, {
                        types: ["function"],
                        style: {
                            color: "#0e7490"
                        }
                    }, {
                        types: ["class-name"],
                        style: {
                            color: "#0ea5e9"
                        }
                    }, {
                        types: ["char"],
                        style: {
                            color: "#D16969"
                        }
                    }]
                },
                eR = (e, t) => {
                    let {
                        plain: n
                    } = e, r = e.styles.reduce((e, n) => {
                        let {
                            languages: r,
                            style: a
                        } = n;
                        return r && !r.includes(t) || n.types.forEach(t => {
                            let n = ec(ec({}, e[t]), a);
                            e[t] = n
                        }), e
                    }, {});
                    return r.root = n, r.plain = eu(ec({}, n), {
                        backgroundColor: void 0
                    }), r
                },
                e$ = (e, t) => {
                    let [n, r] = (0, X.useState)(eR(t, e)), a = (0, X.useRef)(), o = (0, X.useRef)();
                    return (0, X.useEffect)(() => {
                        (t !== a.current || e !== o.current) && (a.current = t, o.current = e, r(eR(t, e)))
                    }, [e, t]), n
                },
                e_ = e => (0, X.useCallback)(t => {
                    var {
                        className: n,
                        style: r,
                        line: a
                    } = t, o = ed(t, ["className", "style", "line"]);
                    let s = eu(ec({}, o), {
                        className: K("token-line", n)
                    });
                    return "object" == typeof e && "plain" in e && (s.style = e.plain), "object" == typeof r && (s.style = ec(ec({}, s.style || {}), r)), s
                }, [e]),
                eT = e => {
                    let t = (0, X.useCallback)(({
                        types: t,
                        empty: n
                    }) => {
                        if (null != e) return 1 === t.length && "plain" === t[0] ? null != n ? {
                            display: "inline-block"
                        } : void 0 : 1 === t.length && null != n ? e[t[0]] : Object.assign(null != n ? {
                            display: "inline-block"
                        } : {}, ...t.map(t => e[t]))
                    }, [e]);
                    return (0, X.useCallback)(e => {
                        var {
                            token: n,
                            className: r,
                            style: a
                        } = e, o = ed(e, ["token", "className", "style"]);
                        let s = eu(ec({}, o), {
                            className: K("token", ...n.types, r),
                            children: n.content,
                            style: t(n)
                        });
                        return null != a && (s.style = ec(ec({}, s.style || {}), a)), s
                    }, [t])
                },
                eF = /\r\n|\r|\n/,
                eM = e => {
                    0 === e.length ? e.push({
                        types: ["plain"],
                        content: "\n",
                        empty: !0
                    }) : 1 === e.length && "" === e[0].content && (e[0].content = "\n", e[0].empty = !0)
                },
                eI = (e, t) => {
                    let n = e.length;
                    return n > 0 && e[n - 1] === t ? e : e.concat(t)
                },
                eP = e => {
                    let t = [
                            []
                        ],
                        n = [e],
                        r = [0],
                        a = [e.length],
                        o = 0,
                        s = 0,
                        i = [],
                        l = [i];
                    for (; s > -1;) {
                        for (;
                            (o = r[s]++) < a[s];) {
                            let e;
                            let c = t[s],
                                u = n[s],
                                d = u[o];
                            if ("string" == typeof d ? (c = s > 0 ? c : ["plain"], e = d) : (c = eI(c, d.type), d.alias && (c = eI(c, d.alias)), e = d.content), "string" != typeof e) {
                                s++, t.push(c), n.push(e), r.push(0), a.push(e.length);
                                continue
                            }
                            let p = e.split(eF),
                                f = p.length;
                            i.push({
                                types: c,
                                content: p[0]
                            });
                            for (let e = 1; e < f; e++) eM(i), l.push(i = []), i.push({
                                types: c,
                                content: p[e]
                            })
                        }
                        s--, t.pop(), n.pop(), r.pop(), a.pop()
                    }
                    return eM(i), l
                },
                eD = ({
                    prism: e,
                    code: t,
                    grammar: n,
                    language: r
                }) => {
                    let a = (0, X.useRef)(e);
                    return (0, X.useMemo)(() => {
                        if (null == n) return eP([t]);
                        let e = {
                            code: t,
                            grammar: n,
                            language: r,
                            tokens: []
                        };
                        return a.current.hooks.run("before-tokenize", e), e.tokens = a.current.tokenize(t, n), a.current.hooks.run("after-tokenize", e), eP(e.tokens)
                    }, [t, n, r])
                },
                ez = ({
                    children: e,
                    language: t,
                    code: n,
                    theme: r,
                    prism: a
                }) => {
                    let o = t.toLowerCase(),
                        s = e$(o, r),
                        i = e_(s),
                        l = eT(s),
                        c = a.languages[o],
                        u = eD({
                            prism: a,
                            language: o,
                            code: n,
                            grammar: c
                        });
                    return e({
                        tokens: u,
                        className: `prism-code language-${o}`,
                        style: null != s ? s.root : {},
                        getLineProps: i,
                        getTokenProps: l
                    })
                },
                eB = e => (0, X.createElement)(ez, ec({
                    prism: ep,
                    theme: eO
                }, e));
            let eW = (0, _.Ko)({
                settings: {
                    hues: {
                        primary: 180,
                        secondary: 60
                    },
                    fontFamilies: {
                        title: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                        body: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                        cta: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                        input: '"Titillium Web","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                        code: "JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace"
                    }
                }
            });
            n(3050);
            let eU = e => {
                let {
                    className: t,
                    animated: n,
                    code: r,
                    ...a
                } = e;
                return (0, $.jsx)(_.fS, { ...a,
                    animated: n,
                    className: (0, _.cx)("_99kmw0", t),
                    children: (0, $.jsx)(eB, {
                        theme: ef.vsDark,
                        code: r,
                        language: "tsx",
                        children: e => {
                            let {
                                className: t,
                                style: n,
                                tokens: r,
                                getLineProps: a,
                                getTokenProps: o
                            } = e;
                            return (0, $.jsx)("pre", {
                                className: (0, _.cx)("_99kmw1", t),
                                style: { ...n,
                                    background: eW.dark ? "linear-gradient(\n                  to right,\n                  ".concat(eW.colors.primary.text(6, {
                                        alpha: .1
                                    }), ",\n                  ").concat(eW.colors.primary.text(9, {
                                        alpha: .1
                                    }), "\n                )") : eW.colors.primary.bg(2)
                                },
                                children: r.map((e, t) => {
                                    let n = a({
                                        line: e
                                    });
                                    return (0, $.jsx)("div", { ...n,
                                        className: (0, _.cx)("_99kmw2", n.className),
                                        children: e.map((e, t) => (0, $.jsx)("span", { ...o({
                                                token: e
                                            })
                                        }, t))
                                    }, t)
                                })
                            })
                        }
                    })
                })
            };
            var eH = n(73),
                eG = function() {
                    return (eG = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                eq = X.forwardRef(function(e, t) {
                    var n = eG(eG({}, X.useContext(eH.s)), e);
                    return X.createElement("svg", eG({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), X.createElement("path", {
                        d: "M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }),
                eZ = n(6346);
            n(2756);
            let eV = e => {
                let {
                    className: t,
                    title: n,
                    children: r,
                    footer: a,
                    onClose: o
                } = e, s = (0, X.useRef)(null), i = (0, X.useRef)(null), l = (0, _.EM)(s), c = (0, _.EM)(i);
                return (0, $.jsx)(_.LH, {
                    merge: !0,
                    combine: !0,
                    manager: "sequence",
                    children: (0, $.jsxs)("div", {
                        role: "dialog",
                        className: (0, _.cx)("jjk77a0", t),
                        children: [(0, $.jsx)(_.LH, {
                            children: (0, $.jsx)(_.bb, {
                                style: {
                                    position: "fixed"
                                },
                                color: "hsla(180, 29%, 72%, 0.1)",
                                size: 2,
                                distance: 20
                            })
                        }), (0, $.jsxs)(_.fS, {
                            className: "jjk77a1",
                            animated: (0, _.aa)("y", 16, 0),
                            children: [(0, $.jsx)(_.LH, {
                                children: (0, $.jsxs)(_.fS, {
                                    className: "jjk77a2",
                                    animated: (0, _.aa)("scaleY", .5, 1, 1),
                                    children: [(0, $.jsx)(_.cA, {
                                        elementRef: s,
                                        className: "jjk77a3",
                                        style: {
                                            top: 5,
                                            bottom: 5,
                                            height: "calc(100% - 10px)"
                                        },
                                        strokeWidth: 1,
                                        squareSize: 12,
                                        smallLineLength: 12,
                                        largeLineLength: 48,
                                        onRender: l.onRender
                                    }), (0, $.jsx)(_.he, {
                                        elementRef: i,
                                        className: "jjk77a4",
                                        style: {
                                            left: 7,
                                            right: 7,
                                            width: "calc(100% - 14px)"
                                        },
                                        strokeWidth: 3,
                                        squareSize: 12,
                                        smallLineLength: 12,
                                        largeLineLength: 48,
                                        onRender: c.onRender
                                    })]
                                })
                            }), (0, $.jsx)(_.LH, {
                                combine: !0,
                                manager: "stagger",
                                children: (0, $.jsxs)("div", {
                                    className: "jjk77a5",
                                    children: [(0, $.jsxs)("header", {
                                        className: "jjk77a6",
                                        children: [(0, $.jsx)(_.LH, {
                                            children: (0, $.jsx)(_.xv, {
                                                as: "h1",
                                                className: "jjk77a7",
                                                fixed: !0,
                                                children: n
                                            })
                                        }), (0, $.jsx)(_.LH, {
                                            children: (0, $.jsx)(_.fS, {
                                                role: "button",
                                                className: (0, _.cx)(eZ.Eo, "jjk77a8"),
                                                animated: (0, _.Wx)(),
                                                onClick: o,
                                                children: (0, $.jsx)(eq, {})
                                            })
                                        })]
                                    }), (0, $.jsx)(_.LH, {
                                        children: (0, $.jsx)(_.fS, {
                                            as: "hr",
                                            animated: (0, _.aa)("scaleX", 0, 1)
                                        })
                                    }), (0, $.jsx)("main", {
                                        className: "jjk77a9",
                                        children: r
                                    }), (0, $.jsx)("footer", {
                                        className: "jjk77aa",
                                        children: a
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        6709: function(e, t) {
            "use strict";
            var n, r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    PrefetchKind: function() {
                        return n
                    },
                    ACTION_REFRESH: function() {
                        return a
                    },
                    ACTION_NAVIGATE: function() {
                        return o
                    },
                    ACTION_RESTORE: function() {
                        return s
                    },
                    ACTION_SERVER_PATCH: function() {
                        return i
                    },
                    ACTION_PREFETCH: function() {
                        return l
                    },
                    ACTION_FAST_REFRESH: function() {
                        return c
                    },
                    ACTION_SERVER_ACTION: function() {
                        return u
                    }
                });
            let a = "refresh",
                o = "navigate",
                s = "restore",
                i = "server-patch",
                l = "prefetch",
                c = "fast-refresh",
                u = "server-action";
            (r = n || (n = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2542: function(e, t) {
            "use strict";

            function n(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3473: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let r = n(3219),
                a = r._(n(2784)),
                o = n(3750),
                s = n(9117),
                i = n(745),
                l = n(6298),
                c = n(7276),
                u = n(5019),
                d = n(3208),
                p = n(6396),
                f = n(2542),
                g = n(407),
                m = n(6709),
                h = new Set;

            function y(e, t, n, r, a, o) {
                if (!o && !(0, s.isLocalURL)(t)) return;
                if (!r.bypassPrefetchedCheck) {
                    let a = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                        o = t + "%" + n + "%" + a;
                    if (h.has(o)) return;
                    h.add(o)
                }
                let i = o ? e.prefetch(t, a) : e.prefetch(t, n, r);
                Promise.resolve(i).catch(e => {})
            }

            function b(e) {
                return "string" == typeof e ? e : (0, i.formatUrl)(e)
            }
            let v = a.default.forwardRef(function(e, t) {
                    let n, r;
                    let {
                        href: i,
                        as: h,
                        children: v,
                        prefetch: x = null,
                        passHref: w,
                        replace: k,
                        shallow: E,
                        scroll: S,
                        locale: j,
                        onClick: A,
                        onMouseEnter: O,
                        onTouchStart: C,
                        legacyBehavior: L = !1,
                        ...N
                    } = e;
                    n = v, L && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                    let R = !1 !== x,
                        $ = null === x ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
                        _ = a.default.useContext(u.RouterContext),
                        T = a.default.useContext(d.AppRouterContext),
                        F = null != _ ? _ : T,
                        M = !_,
                        {
                            href: I,
                            as: P
                        } = a.default.useMemo(() => {
                            if (!_) {
                                let e = b(i);
                                return {
                                    href: e,
                                    as: h ? b(h) : e
                                }
                            }
                            let [e, t] = (0, o.resolveHref)(_, i, !0);
                            return {
                                href: e,
                                as: h ? (0, o.resolveHref)(_, h) : t || e
                            }
                        }, [_, i, h]),
                        D = a.default.useRef(I),
                        z = a.default.useRef(P);
                    L && (r = a.default.Children.only(n));
                    let B = L ? r && "object" == typeof r && r.ref : t,
                        [W, U, H] = (0, p.useIntersection)({
                            rootMargin: "200px"
                        }),
                        G = a.default.useCallback(e => {
                            (z.current !== P || D.current !== I) && (H(), z.current = P, D.current = I), W(e), B && ("function" == typeof B ? B(e) : "object" == typeof B && (B.current = e))
                        }, [P, B, I, H, W]);
                    a.default.useEffect(() => {
                        F && U && R && y(F, I, P, {
                            locale: j
                        }, {
                            kind: $
                        }, M)
                    }, [P, I, U, j, R, null == _ ? void 0 : _.locale, F, M, $]);
                    let q = {
                        ref: G,
                        onClick(e) {
                            L || "function" != typeof A || A(e), L && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), F && !e.defaultPrevented && function(e, t, n, r, o, i, l, c, u, d) {
                                let {
                                    nodeName: p
                                } = e.currentTarget, f = "A" === p.toUpperCase();
                                if (f && (function(e) {
                                        let t = e.currentTarget,
                                            n = t.getAttribute("target");
                                        return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !u && !(0, s.isLocalURL)(n))) return;
                                e.preventDefault();
                                let g = () => {
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: i,
                                        locale: c,
                                        scroll: l
                                    }) : t[o ? "replace" : "push"](r || n, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                u ? a.default.startTransition(g) : g()
                            }(e, F, I, P, k, E, S, j, M, R)
                        },
                        onMouseEnter(e) {
                            L || "function" != typeof O || O(e), L && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), F && (R || !M) && y(F, I, P, {
                                locale: j,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: $
                            }, M)
                        },
                        onTouchStart(e) {
                            L || "function" != typeof C || C(e), L && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), F && (R || !M) && y(F, I, P, {
                                locale: j,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: $
                            }, M)
                        }
                    };
                    if ((0, l.isAbsoluteUrl)(P)) q.href = P;
                    else if (!L || w || "a" === r.type && !("href" in r.props)) {
                        let e = void 0 !== j ? j : null == _ ? void 0 : _.locale,
                            t = (null == _ ? void 0 : _.isLocaleDomain) && (0, f.getDomainLocale)(P, e, null == _ ? void 0 : _.locales, null == _ ? void 0 : _.domainLocales);
                        q.href = t || (0, g.addBasePath)((0, c.addLocale)(P, e, null == _ ? void 0 : _.defaultLocale))
                    }
                    return L ? a.default.cloneElement(r, q) : a.default.createElement("a", { ...N,
                        ...q
                    }, n)
                }),
                x = v;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6396: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(2784),
                a = n(1333),
                o = "function" == typeof IntersectionObserver,
                s = new Map,
                i = [];

            function l(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: l
                } = e, c = l || !o, [u, d] = (0, r.useState)(!1), p = (0, r.useRef)(null), f = (0, r.useCallback)(e => {
                    p.current = e
                }, []);
                (0, r.useEffect)(() => {
                    if (o) {
                        if (c || u) return;
                        let e = p.current;
                        if (e && e.tagName) {
                            let r = function(e, t, n) {
                                let {
                                    id: r,
                                    observer: a,
                                    elements: o
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = i.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = s.get(r))) return t;
                                    let a = new Map,
                                        o = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = a.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: o,
                                        elements: a
                                    }, i.push(n), s.set(n, t), t
                                }(n);
                                return o.set(e, t), a.observe(e),
                                    function() {
                                        if (o.delete(e), a.unobserve(e), 0 === o.size) {
                                            a.disconnect(), s.delete(r);
                                            let e = i.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            e > -1 && i.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && d(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return r
                        }
                    } else if (!u) {
                        let e = (0, a.requestIdleCallback)(() => d(!0));
                        return () => (0, a.cancelIdleCallback)(e)
                    }
                }, [c, n, t, u, p.current]);
                let g = (0, r.useCallback)(() => {
                    d(!1)
                }, []);
                return [f, u, g]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6841: function() {},
        9663: function() {},
        3982: function() {},
        9570: function() {},
        8812: function() {},
        6920: function() {},
        1132: function() {},
        7533: function() {},
        6195: function() {},
        8369: function() {},
        3050: function() {},
        2768: function() {},
        8848: function() {},
        9849: function() {},
        36: function() {},
        8064: function() {},
        2475: function() {},
        2756: function() {},
        8278: function() {},
        7729: function(e, t, n) {
            e.exports = n(9021)
        },
        9097: function(e, t, n) {
            e.exports = n(3473)
        },
        5632: function(e, t, n) {
            e.exports = n(8111)
        },
        6866: function(e, t) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                a = n ? Symbol.for("react.portal") : 60106,
                o = n ? Symbol.for("react.fragment") : 60107,
                s = n ? Symbol.for("react.strict_mode") : 60108,
                i = n ? Symbol.for("react.profiler") : 60114,
                l = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                u = n ? Symbol.for("react.async_mode") : 60111,
                d = n ? Symbol.for("react.concurrent_mode") : 60111,
                p = n ? Symbol.for("react.forward_ref") : 60112,
                f = n ? Symbol.for("react.suspense") : 60113,
                g = n ? Symbol.for("react.suspense_list") : 60120,
                m = n ? Symbol.for("react.memo") : 60115,
                h = n ? Symbol.for("react.lazy") : 60116,
                y = n ? Symbol.for("react.block") : 60121,
                b = n ? Symbol.for("react.fundamental") : 60117,
                v = n ? Symbol.for("react.responder") : 60118,
                x = n ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case u:
                                case d:
                                case o:
                                case i:
                                case s:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case p:
                                        case h:
                                        case m:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case a:
                            return t
                    }
                }
            }

            function k(e) {
                return w(e) === d
            }
            t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = p, t.Fragment = o, t.Lazy = h, t.Memo = m, t.Portal = a, t.Profiler = i, t.StrictMode = s, t.Suspense = f, t.isAsyncMode = function(e) {
                return k(e) || w(e) === u
            }, t.isConcurrentMode = k, t.isContextConsumer = function(e) {
                return w(e) === c
            }, t.isContextProvider = function(e) {
                return w(e) === l
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return w(e) === p
            }, t.isFragment = function(e) {
                return w(e) === o
            }, t.isLazy = function(e) {
                return w(e) === h
            }, t.isMemo = function(e) {
                return w(e) === m
            }, t.isPortal = function(e) {
                return w(e) === a
            }, t.isProfiler = function(e) {
                return w(e) === i
            }, t.isStrictMode = function(e) {
                return w(e) === s
            }, t.isSuspense = function(e) {
                return w(e) === f
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === o || e === d || e === i || e === s || e === f || e === g || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === v || e.$$typeof === x || e.$$typeof === y)
            }, t.typeOf = w
        },
        8570: function(e, t, n) {
            "use strict";
            e.exports = n(6866)
        },
        2691: function(e, t, n) {
            "use strict";
            var r = n(2784),
                a = n(73),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                s = r.forwardRef(function(e, t) {
                    var n = o(o({}, r.useContext(a.s)), e);
                    return r.createElement("svg", o({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), r.createElement("path", {
                        d: "M21 9v6M3 15V9M12 21v-6M12 3v6M12 15L3 9l9-6 9 6-9 6z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M12 21l-9-6 9-6 9 6-9 6z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                });
            t.Z = s
        },
        4657: function(e, t, n) {
            "use strict";
            var r = n(2784),
                a = n(73),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                s = r.forwardRef(function(e, t) {
                    var n = o(o({}, r.useContext(a.s)), e);
                    return r.createElement("svg", o({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), r.createElement("path", {
                        d: "M19.4 20H4.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6zM11 12V4M4 12h16",
                        stroke: "currentColor"
                    }))
                });
            t.Z = s
        },
        909: function(e, t, n) {
            "use strict";
            var r = n(2784),
                a = n(73),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                s = r.forwardRef(function(e, t) {
                    var n = o(o({}, r.useContext(a.s)), e);
                    return r.createElement("svg", o({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), r.createElement("path", {
                        d: "M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M12 23a3 3 0 100-6 3 3 0 000 6z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                });
            t.Z = s
        },
        73: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return r
                }
            });
            var r = n(2784).createContext({})
        },
        6872: function(e, t, n) {
            "use strict";
            var r = n(2784),
                a = n(73),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                s = r.forwardRef(function(e, t) {
                    var n = o(o({}, r.useContext(a.s)), e);
                    return r.createElement("svg", o({
                        width: "1.5em",
                        height: "1.5em",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, n), r.createElement("path", {
                        d: "M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M16 2v3.4a.6.6 0 00.6.6H20",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                });
            t.Z = s
        },
        6663: function(e, t, n) {
            "use strict";
            n.d(t, {
                fS: function() {
                    return tO
                },
                LH: function() {
                    return tb
                },
                QS: function() {
                    return tw
                },
                tu: function() {
                    return rR
                },
                ix: function() {
                    return tI
                },
                bb: function() {
                    return rc
                },
                cA: function() {
                    return n9
                },
                Ex: function() {
                    return n5
                },
                he: function() {
                    return n6
                },
                oG: function() {
                    return nJ
                },
                rT: function() {
                    return rn
                },
                Oh: function() {
                    return ry
                },
                xv: function() {
                    return nW
                },
                aa: function() {
                    return t$
                },
                rn: function() {
                    return t_
                },
                Wx: function() {
                    return tT
                },
                Ko: function() {
                    return L
                },
                cx: function() {
                    return o
                },
                s0: function() {
                    return tD
                },
                EM: function() {
                    return nH
                }
            });
            let r = "undefined" != typeof window,
                a = r && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome"),
                o = (...e) => e.filter(Boolean).join(" "),
                s = "",
                i = e => {
                    let t = e.slice(0);
                    for (let e = t.length - 1; e > 0; e--) {
                        let n = Math.floor(Math.random() * (e + 1));
                        [t[e], t[n]] = [t[n], t[e]]
                    }
                    return t
                },
                l = (e, t) => n => Math.min(t, Math.max(e, n)),
                c = l(0, 360),
                u = l(0, 100),
                d = l(0, 1),
                p = (e, t) => {
                    let n = e.match(t);
                    return Array.isArray(n) ? String(n[0]) : null
                },
                f = {},
                g = (e, t = f) => {
                    var n;
                    let {
                        alpha: r = 1
                    } = t, a = d(r), o = c(e[0]), s = u(e[1]), i = u(e[2]), l = d((null !== (n = e[3]) && void 0 !== n ? n : 1) * a);
                    return `hsla(${o},${s}%,${i}%,${l})`
                },
                m = (e, t = f) => {
                    if ("string" != typeof e) return g(e, t);
                    let {
                        alpha: n
                    } = t;
                    if (null == n || !/^(hsla?|rgba?)\(\d+(\.\d+)?(%|deg)?(,\s?|\s)\d+(\.\d+)?%?(,\s?|\s)\d+(\.\d+)?%?((,\s?|\s?\/\s?)\d+(\.\d+)?%?)?\)$/.test(e)) return e;
                    let r = Array.from(e.matchAll(/(,\s?|\s?\/\s?|\s)/g)),
                        a = 3 === r.length,
                        o = e.includes(","),
                        s = d(n);
                    if (a) {
                        let t = p(e, /\d+(\.\d+)?%?\)$/),
                            n = t.includes("%"),
                            r = Number(t.replace(/%?\)$/g, ""));
                        return e.replace(/\d+(\.\d+)?%?\)$/, `${r*s}${n?"%":""})`)
                    }
                    return e.replace(/\)$/, o ? `,${s})` : ` / ${s})`)
                },
                h = e => "function" == typeof e ? (t, n) => {
                    let r = e(Math.round(t));
                    return m(r, n)
                } : (t, n) => {
                    if (!e.length) return "";
                    let r = Math.round(t),
                        a = e[r > e.length - 1 ? e.length - 1 : r];
                    return m(a, n)
                },
                y = e => t => {
                    if (Number.isFinite(e)) return e * t;
                    if (Array.isArray(e)) {
                        if (!e.length) return 0;
                        let n = Math.round(t);
                        return e[n > e.length - 1 ? e.length - 1 : n]
                    }
                    return e(t)
                },
                b = (e, t) => {
                    let n = Math.round(t);
                    return e[n > e.length - 1 ? e.length - 1 : n]
                },
                v = e => t => {
                    if ("string" == typeof t) return t;
                    let n = Array.isArray(t) ? t : [t];
                    return Array.isArray(e) ? e.length ? n.map(t => "string" == typeof t ? t : b(e, t)).join(" ") : "" : n.map(t => "string" == typeof t ? t : e(t)).join(" ")
                },
                x = e => t => e.length ? e[Math.round(t)] || e[e.length - 1] : {},
                w = (e = []) => {
                    let t = t => {
                            if ("string" == typeof t) {
                                for (let n of e)
                                    if ("string" != typeof n && n.key === t) return n.value;
                                return t
                            }
                            let n = e[t > e.length - 1 ? e.length - 1 : t];
                            return "string" == typeof n ? n : n.value
                        },
                        n = (e, n) => {
                            let r = (null == n ? void 0 : n.strip) ? "" : "@media ";
                            return `${r}(min-width: ${t(e)})`
                        },
                        r = (e, n) => {
                            let r = (null == n ? void 0 : n.strip) ? "" : "@media ";
                            return `${r}(max-width: calc(${t(e)} - 1px))`
                        },
                        a = (e, n, r) => {
                            let a = (null == r ? void 0 : r.strip) ? "" : "@media ",
                                o = t(e),
                                s = t(n);
                            return `${a}(min-width: ${o}) and (max-width: calc(${s} - 1px))`
                        };
                    return Object.freeze({
                        settings: e,
                        up: n,
                        down: r,
                        between: a
                    })
                },
                k = (e, t, n) => {
                    let r = {};
                    return Object.keys(e).forEach(a => {
                        var o;
                        if ("object" == typeof e[a]) {
                            if (null === e[a]) throw Error("Theme structure values can not be null.");
                            if (!t[a] || "object" != typeof t[a]) throw Error("Theme default value should match theme structure object.");
                            r[a] = k(e[a], t[a], null == n ? void 0 : n[a])
                        } else r[a] = null !== (o = null == n ? void 0 : n[a]) && void 0 !== o ? o : t[a]
                    }), r
                },
                E = (e, t) => {
                    let n = {};
                    return Object.keys(e).forEach(r => {
                        if ("object" == typeof e[r]) n[r] = E(e[r], t[r]);
                        else switch (e[r]) {
                            case "multiplier":
                                n[r] = y(t[r]);
                                break;
                            case "unit":
                                n[r] = v(t[r]);
                                break;
                            case "color":
                                n[r] = h(t[r]);
                                break;
                            case "style":
                                n[r] = x(t[r]);
                                break;
                            case "breakpoints":
                                n[r] = w(t[r]);
                                break;
                            case "other":
                                n[r] = t[r];
                                break;
                            default:
                                throw Error(`Invalid theme structure key "${e[r]}" provided.`)
                        }
                    }), n
                },
                S = (e, t) => {
                    let n = (n = {}) => {
                        let r;
                        return r = Array.isArray(n) ? n.reduce((t, n) => n ? k(e, t, n) : t, t) : k(e, t, n), E(e, r)
                    };
                    return n
                };

            function j(e = {}, t = {}) {
                for (let n in t) "object" != typeof t[n] || Array.isArray(t[n]) || null === t[n] ? e[n] = t[n] : ((void 0 === e[n] || null === e[n]) && (e[n] = {}), j(e[n], t[n]));
                return e
            }
            let A = {
                    main: "color",
                    text: "color",
                    deco: "color",
                    bg: "color",
                    ol: "color"
                },
                O = {
                    dark: "other",
                    space: "unit",
                    spaceN: "multiplier",
                    hues: {
                        primary: "other",
                        secondary: "other",
                        success: "other",
                        info: "other",
                        warning: "other",
                        error: "other"
                    },
                    colors: {
                        primary: A,
                        secondary: A,
                        success: A,
                        info: A,
                        warning: A,
                        error: A
                    },
                    fontFamilies: {
                        title: "other",
                        body: "other",
                        cta: "other",
                        input: "other",
                        code: "other"
                    },
                    typography: {
                        title: "style",
                        body: "style",
                        cta: "style",
                        input: "style",
                        code: "style"
                    },
                    transitions: {
                        duration: "unit",
                        durationN: "multiplier"
                    }
                },
                C = e => ({
                    main: t => [e, 80 + t, 92.5 - 9.44 * t],
                    text: t => [e, 10, 92.5 - 9.44 * t],
                    bg: t => [e, 10, 2 + 2 * t],
                    ol: t => [e, 81, 2 + 2 * t],
                    deco: t => [e, 81, 50, .025 + .025 * t]
                }),
                L = (e = {}) => {
                    var t, n, r, a;
                    let o = (null === (t = e.settings) || void 0 === t ? void 0 : t.dark) === void 0 || !!(null === (n = e.settings) || void 0 === n ? void 0 : n.dark),
                        s = {
                            primary: 200,
                            secondary: 80,
                            success: 120,
                            info: 220,
                            warning: 40,
                            error: 0,
                            ...null === (r = e.settings) || void 0 === r ? void 0 : r.hues
                        },
                        i = {
                            title: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                            body: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                            cta: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                            input: '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
                            code: "JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace",
                            ...null === (a = e.settings) || void 0 === a ? void 0 : a.fontFamilies
                        },
                        l = {
                            dark: o,
                            space: e => `${.25*e}rem`,
                            spaceN: e => 4 * e,
                            hues: s,
                            colors: {
                                primary: C(s.primary),
                                secondary: C(s.secondary),
                                success: C(s.success),
                                info: C(s.info),
                                warning: C(s.warning),
                                error: C(s.error)
                            },
                            fontFamilies: i,
                            typography: {
                                title: [{
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.75rem"
                                }, {
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.625rem"
                                }, {
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.5rem"
                                }, {
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.375rem"
                                }, {
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.25rem"
                                }, {
                                    fontFamily: i.title,
                                    fontWeight: "600",
                                    fontSize: "1.125rem"
                                }],
                                body: [{
                                    fontFamily: i.body,
                                    fontWeight: "400",
                                    fontSize: "1.125rem"
                                }, {
                                    fontFamily: i.body,
                                    fontWeight: "400",
                                    fontSize: "1rem"
                                }, {
                                    fontFamily: i.body,
                                    fontWeight: "400",
                                    fontSize: "0.875rem"
                                }],
                                cta: [{
                                    fontFamily: i.cta,
                                    fontWeight: "500",
                                    fontSize: "1rem",
                                    textTransform: "uppercase"
                                }, {
                                    fontFamily: i.cta,
                                    fontWeight: "500",
                                    fontSize: "0.875rem",
                                    textTransform: "uppercase"
                                }, {
                                    fontFamily: i.cta,
                                    fontWeight: "500",
                                    fontSize: "0.75rem",
                                    textTransform: "uppercase"
                                }],
                                input: [{
                                    fontFamily: i.input,
                                    fontWeight: "400",
                                    fontSize: "1rem"
                                }, {
                                    fontFamily: i.input,
                                    fontWeight: "400",
                                    fontSize: "0.875rem"
                                }, {
                                    fontFamily: i.input,
                                    fontWeight: "400",
                                    fontSize: "0.75rem"
                                }],
                                code: [{
                                    fontFamily: i.code,
                                    fontWeight: "400",
                                    fontSize: "1rem"
                                }, {
                                    fontFamily: i.code,
                                    fontWeight: "400",
                                    fontSize: "0.875rem"
                                }, {
                                    fontFamily: i.code,
                                    fontWeight: "400",
                                    fontSize: "0.75rem"
                                }]
                            },
                            transitions: {
                                duration: e => `${.15*e}s`,
                                durationN: e => .15 * e
                            }
                        },
                        c = S(j(O, e.structure), j(l, e.settings)),
                        u = c();
                    return u
                },
                N = Object.freeze({
                    entered: "entered",
                    entering: "entering",
                    exiting: "exiting",
                    exited: "exited"
                }),
                R = Object.freeze({
                    setup: "setup",
                    enter: "enter",
                    enterEnd: "enterEnd",
                    exit: "exit",
                    exitEnd: "exitEnd",
                    update: "update",
                    refresh: "refresh"
                }),
                $ = Object.freeze({
                    parallel: "parallel",
                    stagger: "stagger",
                    staggerReverse: "staggerReverse",
                    sequence: "sequence",
                    sequenceReverse: "sequenceReverse",
                    switch: "switch"
                }),
                _ = Object.freeze({
                    enter: .4,
                    exit: .4,
                    delay: 0,
                    offset: 0,
                    stagger: .04
                }),
                T = Object.freeze({
                    active: !0,
                    duration: _,
                    manager: $.parallel,
                    merge: !1,
                    combine: !1,
                    initialState: "exited"
                }),
                F = e => {
                    let t = t => {
                            let n = null != t ? t : Array.from(e.children);
                            return n.filter(e => {
                                let {
                                    condition: t
                                } = e.control.getSettings();
                                return !t || t(e)
                            })
                        },
                        n = e => {
                            let n = t(e);
                            return n.reduce((e, t) => Math.max(e, t.duration.enter), 0)
                        },
                        r = e => {
                            let n = t(e);
                            for (let e of n) e.send(R.enter)
                        };
                    return Object.freeze({
                        name: $.parallel,
                        getDurationEnter: n,
                        enterChildren: r
                    })
                },
                M = (e, t) => {
                    let n = 0,
                        r = t => {
                            let n = null != t ? t : Array.from(e.children);
                            return n.filter(e => {
                                let {
                                    condition: t
                                } = e.control.getSettings();
                                return !t || t(e)
                            })
                        },
                        a = t => {
                            let n = r(t);
                            if (!n.length) return 0;
                            let {
                                duration: a
                            } = e.control.getSettings(), o = n[n.length - 1];
                            return a.stagger * (n.length - 1) + o.duration.enter
                        },
                        o = a => {
                            let o = r(a),
                                s = e.control.getSettings(),
                                i = 1e3 * (s.duration.stagger || 0);
                            t === $.staggerReverse && (o = o.reverse());
                            let l = Date.now();
                            for (let e of (n = Math.max(n, l), o)) {
                                let t = e.control.getSettings(),
                                    r = 1e3 * (t.duration.offset || 0);
                                n += r;
                                let a = (n - l) / 1e3,
                                    o = t.duration.delay || 0;
                                n += i, e.scheduler.start(a + o, () => e.send(R.enter))
                            }
                        };
                    return Object.freeze({
                        name: t,
                        getDurationEnter: a,
                        enterChildren: o
                    })
                },
                I = (e, t) => {
                    let n = 0,
                        r = t => {
                            let n = null != t ? t : Array.from(e.children);
                            return n.filter(e => {
                                let {
                                    condition: t
                                } = e.control.getSettings();
                                return !t || t(e)
                            })
                        },
                        a = e => {
                            let t = r(e);
                            return t.reduce((e, t) => e + t.duration.enter, 0)
                        },
                        o = e => {
                            let a = r(e),
                                o = Date.now();
                            for (let e of (t === $.sequenceReverse && (a = a.reverse()), n = Math.max(n, o), a)) {
                                let t = e.control.getSettings(),
                                    r = 1e3 * (t.duration.offset || 0),
                                    a = 1e3 * e.duration.enter;
                                n += r;
                                let s = (n - o) / 1e3,
                                    i = t.duration.delay || 0;
                                n += a, e.scheduler.start(s + i, () => e.send(R.enter))
                            }
                        };
                    return Object.freeze({
                        name: t,
                        getDurationEnter: a,
                        enterChildren: o
                    })
                },
                P = e => {
                    let t, n, r;
                    let a = () => {
                            if (n) return n.duration.enter;
                            let t = Array.from(e.children).find(e => {
                                let {
                                    condition: t
                                } = e.control.getSettings();
                                return !t || t(e)
                            });
                            return t ? t.duration.enter : 0
                        },
                        o = () => {
                            null == r || r(), r = void 0;
                            let a = Array.from(e.children),
                                o = a.find(e => {
                                    let {
                                        condition: t
                                    } = e.control.getSettings();
                                    return !t || t(e)
                                }),
                                s = () => {
                                    o ? o === n ? o.send(R.enter) : (n ? (r = (t = n).subscribe(e => {
                                        e.state === N.exited && (null == r || r(), r = void 0, t = void 0, o.send(R.enter))
                                    }), null == t || t.send(R.exit)) : (o.send(R.enter), t = void 0), n = o) : (t = n, n = void 0)
                                };
                            t ? r = t.subscribe(e => {
                                e.state === N.exited && s()
                            }) : s(), a.filter(e => e !== o).forEach(e => e.send(R.exit))
                        },
                        s = () => {
                            t = void 0, n = void 0, null == r || r(), r = void 0
                        };
                    return Object.freeze({
                        name: $.switch,
                        getDurationEnter: a,
                        enterChildren: o,
                        destroy: s
                    })
                },
                D = (e, t) => {
                    switch (t) {
                        case $.stagger:
                            return M(e, $.stagger);
                        case $.staggerReverse:
                            return M(e, $.staggerReverse);
                        case $.sequence:
                            return I(e, $.sequence);
                        case $.sequenceReverse:
                            return I(e, $.sequenceReverse);
                        case $.switch:
                            return P(e, $.switch);
                        default:
                            return F(e, $.parallel)
                    }
                },
                z = (e, t) => {
                    let n = t,
                        a = {
                            [N.exited]: {
                                onActions: {
                                    [R.enter]: N.entering,
                                    [R.setup]: () => {
                                        let t = e.control.getSettings();
                                        if (e.parent) {
                                            let n = e.parent.control.getSettings();
                                            switch (e.parent.state) {
                                                case N.entering:
                                                    (n.combine || t.merge) && e.parent.manager.enterChildren([e]);
                                                    break;
                                                case N.entered:
                                                    e.parent.manager.enterChildren([e])
                                            }
                                        } else {
                                            let e = void 0 === t.active || t.active;
                                            if (e) return N.entering
                                        }
                                    }
                                }
                            },
                            [N.entering]: {
                                onEntry: {
                                    execute: () => {
                                        let {
                                            combine: t
                                        } = e.control.getSettings(), n = t ? Array.from(e.children) : Array.from(e.children).filter(e => e.control.getSettings().merge);
                                        e.manager.enterChildren(n)
                                    },
                                    schedule: () => {
                                        let {
                                            duration: t
                                        } = e.control.getSettings();
                                        return {
                                            duration: t.delay + t.enter || 0,
                                            action: R.enterEnd
                                        }
                                    }
                                },
                                onActions: {
                                    [R.enterEnd]: N.entered,
                                    [R.exit]: N.exiting,
                                    [R.refresh]: () => {
                                        let t = e.control.getSettings(),
                                            n = Array.from(e.children).filter(e => e.state === N.exited);
                                        if (t.combine) e.manager.enterChildren(n);
                                        else {
                                            let t = n.filter(e => e.control.getSettings().merge);
                                            e.manager.enterChildren(t)
                                        }
                                    }
                                }
                            },
                            [N.entered]: {
                                onEntry: {
                                    execute: () => {
                                        let {
                                            combine: t
                                        } = e.control.getSettings();
                                        if (t) return;
                                        let n = Array.from(e.children).filter(e => !e.control.getSettings().merge);
                                        e.manager.enterChildren(n)
                                    }
                                },
                                onActions: {
                                    [R.exit]: N.exiting,
                                    [R.refresh]: () => {
                                        let t = Array.from(e.children).filter(e => e.state === N.exited);
                                        e.manager.enterChildren(t)
                                    }
                                }
                            },
                            [N.exiting]: {
                                onEntry: {
                                    execute: () => {
                                        Array.from(e.children).forEach(e => {
                                            e.state === N.entering || e.state === N.entered ? e.send(R.exit) : e.state === N.exited && e.scheduler.stopAll()
                                        })
                                    },
                                    schedule: () => ({
                                        duration: e.control.getSettings().duration.exit || 0,
                                        action: R.exitEnd
                                    })
                                },
                                onActions: {
                                    [R.exitEnd]: N.exited,
                                    [R.enter]: N.entering
                                }
                            },
                            "*": {
                                onActions: {
                                    [R.update]: () => {
                                        var t, r;
                                        let a = e.control.getSettings();
                                        if (a.manager !== e.manager.name && (null === (r = (t = e.manager).destroy) || void 0 === r || r.call(t), e.manager = D(e, a.manager)), !e.parent) {
                                            let e = !0 === a.active || void 0 === a.active;
                                            if ((n === N.exited || n === N.exiting) && e) return N.entering;
                                            if ((n === N.entered || n === N.entering) && !e) return N.exiting
                                        }
                                    }
                                }
                            }
                        },
                        o = t => {
                            if (!t || n === t) return;
                            n = t;
                            let {
                                onEntry: r
                            } = a[n] || {}, {
                                onTransition: o
                            } = e.control.getSettings();
                            if (e.scheduler.stopAll(), (null == r ? void 0 : r.execute) && r.execute(), null == r ? void 0 : r.schedule) {
                                let t = r.schedule();
                                e.scheduler.start(t.duration, () => i(t.action))
                            }
                            for (let t of (null == o || o(e), e.subscribers)) t(e)
                        },
                        s = e => {
                            if (void 0 !== e) {
                                if ("string" == typeof e) o(e);
                                else {
                                    let t = e();
                                    t && o(t)
                                }
                            }
                        },
                        i = e => {
                            var t, o, i, l;
                            r && (s(null === (o = null === (t = a[n]) || void 0 === t ? void 0 : t.onActions) || void 0 === o ? void 0 : o[e]), s(null === (l = null === (i = a["*"]) || void 0 === i ? void 0 : i.onActions) || void 0 === l ? void 0 : l[e]))
                        },
                        l = Object.freeze({
                            getState: () => n,
                            send: i
                        });
                    return l
                },
                B = () => {
                    let e;
                    let t = `s${Math.random()}`.replace(".", ""),
                        n = 0,
                        r = (e, r) => {
                            let a = `${t}-n${n++}`,
                                o = {
                                    id: a
                                },
                                i = r.getSettings(),
                                l = z(o, i.initialState),
                                c = D(o, i.manager),
                                u = {
                                    id: {
                                        value: a,
                                        enumerable: !0
                                    },
                                    control: {
                                        value: r,
                                        enumerable: !0
                                    },
                                    parent: {
                                        value: e,
                                        enumerable: !0
                                    },
                                    children: {
                                        value: new Set,
                                        enumerable: !0
                                    },
                                    subscribers: {
                                        value: new Set,
                                        enumerable: !0
                                    },
                                    scheduler: {
                                        value: function() {
                                            let e = new Map,
                                                t = (t = s) => e.has(t),
                                                n = (t = s) => {
                                                    let n = e.get(t);
                                                    n && n(), e.delete(t)
                                                },
                                                r = () => {
                                                    Array.from(e.keys()).forEach(n)
                                                },
                                                a = (t, r, a) => {
                                                    let o = a ? t : s,
                                                        i = a || r;
                                                    n(o);
                                                    let l = setTimeout(() => {
                                                        e.delete(o), i()
                                                    }, (a ? r : t) * 1e3);
                                                    e.set(o, () => {
                                                        clearTimeout(l)
                                                    })
                                                };
                                            return Object.freeze({
                                                isPending: t,
                                                stop: n,
                                                stopAll: r,
                                                start: a
                                            })
                                        }(),
                                        enumerable: !0
                                    },
                                    duration: {
                                        get: () => {
                                            let {
                                                duration: e,
                                                combine: t
                                            } = o.control.getSettings(), n = t ? o.manager.getDurationEnter(Array.from(o.children)) : e.enter || 0, r = e.exit || 0;
                                            return {
                                                enter: n,
                                                exit: r
                                            }
                                        },
                                        enumerable: !0
                                    },
                                    state: {
                                        get: () => l.getState(),
                                        enumerable: !0
                                    },
                                    subscribe: {
                                        value: e => (o.subscribers.add(e), e(o), () => o.subscribers.delete(e)),
                                        enumerable: !0
                                    },
                                    unsubscribe: {
                                        value: e => {
                                            o.subscribers.delete(e)
                                        },
                                        enumerable: !0
                                    },
                                    send: {
                                        value: l.send,
                                        enumerable: !0
                                    },
                                    manager: {
                                        value: c,
                                        enumerable: !0,
                                        writable: !0
                                    }
                                };
                            return Object.defineProperties(o, u), e && e.children.add(o), o
                        },
                        a = e => {
                            for (let t of (e.scheduler.stopAll(), e.children)) a(t);
                            e.parent && e.parent.children.delete(e), e.children.clear(), e.subscribers.clear()
                        },
                        o = (t, n) => {
                            if (null == t) {
                                if (e) throw Error("The root node must be unregistered before registering another root node.");
                                return e = r(void 0, n)
                            }
                            if (!e) throw Error("A root node needs to be registered first in the system before registering children nodes.");
                            return r(t, n)
                        },
                        i = t => {
                            e && (a(t), e.id === t.id && (e = void 0))
                        },
                        l = {};
                    return Object.defineProperties(l, {
                        id: {
                            value: t,
                            enumerable: !0
                        },
                        root: {
                            get: () => e,
                            enumerable: !0
                        },
                        register: {
                            value: o,
                            enumerable: !0
                        },
                        unregister: {
                            value: i,
                            enumerable: !0
                        }
                    }), l
                },
                W = Math.pow,
                U = Math.sqrt,
                H = Math.sin,
                G = Math.cos,
                q = Math.PI,
                Z = 2 * q / 3,
                V = 2 * q / 4.5,
                Y = e => e < .36363636363636365 ? 7.5625 * e * e : e < .7272727272727273 ? 7.5625 * (e -= .5454545454545454) * e + .75 : e < .9090909090909091 ? 7.5625 * (e -= .8181818181818182) * e + .9375 : 7.5625 * (e -= .9545454545454546) * e + .984375,
                X = {
                    linear: e => e,
                    inQuad: e => e * e,
                    outQuad: e => 1 - (1 - e) * (1 - e),
                    inOutQuad: e => e < .5 ? 2 * e * e : 1 - W(-2 * e + 2, 2) / 2,
                    inCubic: e => e * e * e,
                    outCubic: e => 1 - W(1 - e, 3),
                    inOutCubic: e => e < .5 ? 4 * e * e * e : 1 - W(-2 * e + 2, 3) / 2,
                    inQuart: e => e * e * e * e,
                    outQuart: e => 1 - W(1 - e, 4),
                    inOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - W(-2 * e + 2, 4) / 2,
                    inQuint: e => e * e * e * e * e,
                    outQuint: e => 1 - W(1 - e, 5),
                    inOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - W(-2 * e + 2, 5) / 2,
                    inSine: e => 1 - G(e * q / 2),
                    outSine: e => H(e * q / 2),
                    inOutSine: e => -(G(q * e) - 1) / 2,
                    inExpo: e => 0 === e ? 0 : W(2, 10 * e - 10),
                    outExpo: e => 1 === e ? 1 : 1 - W(2, -10 * e),
                    inOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? W(2, 20 * e - 10) / 2 : (2 - W(2, -20 * e + 10)) / 2,
                    inCirc: e => 1 - U(1 - W(e, 2)),
                    outCirc: e => U(1 - W(e - 1, 2)),
                    inOutCirc: e => e < .5 ? (1 - U(1 - W(2 * e, 2))) / 2 : (U(1 - W(-2 * e + 2, 2)) + 1) / 2,
                    inBack: e => 2.70158 * e * e * e - 1.70158 * e * e,
                    outBack: e => 1 + 2.70158 * W(e - 1, 3) + 1.70158 * W(e - 1, 2),
                    inOutBack: e => e < .5 ? W(2 * e, 2) * (7.189819 * e - 2.5949095) / 2 : (W(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2,
                    inElastic: e => 0 === e ? 0 : 1 === e ? 1 : -W(2, 10 * e - 10) * H((10 * e - 10.75) * Z),
                    outElastic: e => 0 === e ? 0 : 1 === e ? 1 : W(2, -10 * e) * H((10 * e - .75) * Z) + 1,
                    inOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -(W(2, 20 * e - 10) * H((20 * e - 11.125) * V)) / 2 : W(2, -20 * e + 10) * H((20 * e - 11.125) * V) / 2 + 1,
                    inBounce: e => 1 - Y(1 - e),
                    outBounce: Y,
                    inOutBounce: e => e < .5 ? (1 - Y(1 - 2 * e)) / 2 : (1 + Y(2 * e - 1)) / 2
                },
                K = e => {
                    let {
                        duration: t,
                        easing: n = "outSine",
                        direction: r = "normal",
                        onUpdate: a,
                        onComplete: o,
                        onCancel: s
                    } = e, i = "function" == typeof n ? n : X[n], l = 1e3 * t, c = null, u = window.performance.now(), d = 0, p = e => {
                        u || (u = e), d = Math.max(e - u, 0), "reverse" === r && (d = l - d);
                        let t = Math.min(1, Math.max(0, i(d / l))),
                            n = "normal" === r ? d < l : d > 0;
                        a(t), n ? c = window.requestAnimationFrame(p) : (c = null, null == o || o())
                    };
                    c = window.requestAnimationFrame(p);
                    let f = () => {
                        null !== c && (window.cancelAnimationFrame(c), null == s || s())
                    };
                    return {
                        isPending: () => null !== c,
                        cancel: f
                    }
                },
                Q = e => {
                    var t;
                    let n = r && !!window.AudioContext;
                    if (!n) return null;
                    let {
                        sources: o,
                        preload: s = !0,
                        loop: i = !1,
                        volume: l = 1,
                        fetchHeaders: c,
                        masterGain: u
                    } = e, d = !1, p = !1, f = !1, g = null, m = null, h = 0, y = null !== (t = e.context) && void 0 !== t ? t : new window.AudioContext, b = y.createGain(), v = new Set, x = () => {
                        if (m || d || p) return;
                        if (!o.length) {
                            p = !0, console.error("Every bleep must have at least one source with a valid audio file URL and type.");
                            return
                        }
                        let e = new window.Audio,
                            t = o.find(t => {
                                if (a && t.type.includes("audio/webm")) return !1;
                                let n = e.canPlayType(t.type || "");
                                return "probably" === n || "maybe" === n
                            });
                        if (!t) {
                            p = !0, console.error(`The bleep sources "${JSON.stringify(o)}" are not supported on this navigator.`);
                            return
                        }
                        let {
                            src: n,
                            type: r
                        } = t;
                        d = !0, window.fetch(n, {
                            method: "GET",
                            headers: c
                        }).then(e => {
                            if (!e.ok) throw Error("Bleep source could not be fetched.");
                            return e
                        }).then(e => e.arrayBuffer()).then(e => y.decodeAudioData(e)).then(e => {
                            h = (m = e).duration
                        }).catch(e => {
                            p = !0, console.error(`The bleep with source URL "${n}" and type "${r}" could not be used:`, e)
                        }).then(() => d = !1)
                    }, w = e => {
                        if (!m) {
                            x();
                            return
                        }
                        if (!i || !f) {
                            if ("suspended" === y.state) {
                                let e = !1;
                                if (y.resume().catch(t => {
                                        e = !0, console.error(`The bleep audio context with sources "${JSON.stringify(o)}" could not be resumed to be played:`, t)
                                    }), e) return
                            }
                            e && v.add(e), f = !0, g && (g.stop(), g.disconnect(b), g = null), (g = y.createBufferSource()).buffer = m, g.loop = i, i && (g.loopStart = 0, g.loopEnd = m.duration), g.connect(b), g.start(), g.onended = () => {
                                f = !1
                            }
                        }
                    }, k = e => {
                        if (!m) return;
                        e && v.delete(e);
                        let t = !i || !v.size;
                        t && (g && (g.stop(), g.disconnect(b), g = null), f = !1)
                    }, E = () => {
                        x()
                    }, S = () => {
                        g && (g.stop(), g.disconnect(b), g = null), m = null, d = !1, p = !1
                    }, j = e => {
                        if (void 0 !== e.volume) {
                            let t = Math.max(0, Math.min(1, e.volume));
                            b.gain.setValueAtTime(t, y.currentTime)
                        }
                    }, A = {};
                    return Object.defineProperties(A, {
                        duration: {
                            get: () => h,
                            enumerable: !0
                        },
                        isPlaying: {
                            get: () => f,
                            enumerable: !0
                        },
                        isLoaded: {
                            get: () => !!m,
                            enumerable: !0
                        },
                        play: {
                            value: w,
                            enumerable: !0
                        },
                        stop: {
                            value: k,
                            enumerable: !0
                        },
                        load: {
                            value: E,
                            enumerable: !0
                        },
                        unload: {
                            value: S,
                            enumerable: !0
                        },
                        update: {
                            value: j,
                            enumerable: !0
                        }
                    }), u ? b.connect(u) : b.connect(y.destination), j({
                        volume: l
                    }), s && x(), A
                },
                J = e => {
                    var t, n;
                    let a = r && !!window.AudioContext,
                        o = a ? new window.AudioContext : null,
                        s = a ? o.createGain() : null,
                        i = {},
                        l = Object.keys(e.bleeps);
                    if (l.forEach(t => {
                            var n;
                            let r = e.bleeps[t],
                                a = r.category ? null === (n = e.categories) || void 0 === n ? void 0 : n[r.category] : null,
                                l = { ...e.common,
                                    ...a
                                };
                            i[t] = l.disabled ? null : Q({ ...l,
                                ...r,
                                context: o,
                                masterGain: s
                            })
                        }), a) {
                        s.connect(o.destination);
                        let r = Math.max(0, Math.min(1, null !== (n = null === (t = null == e ? void 0 : e.master) || void 0 === t ? void 0 : t.volume) && void 0 !== n ? n : 1));
                        s.gain.setValueAtTime(r, o.currentTime)
                    }
                    let c = () => {
                            a && l.forEach(e => {
                                var t;
                                null === (t = i[e]) || void 0 === t || t.unload()
                            })
                        },
                        u = t => {
                            var n;
                            if (a) {
                                if ((null === (n = t.master) || void 0 === n ? void 0 : n.volume) !== void 0) {
                                    let e = Math.max(0, Math.min(1, t.master.volume));
                                    s.gain.setValueAtTime(e, o.currentTime)
                                }
                                l.forEach(n => {
                                    var r, a, l, c;
                                    let u = e.bleeps[n],
                                        d = null == u ? void 0 : u.category,
                                        p = d ? null === (r = t.categories) || void 0 === r ? void 0 : r[d] : null,
                                        f = { ...t.common,
                                            ...p
                                        };
                                    f.disabled ? (null === (a = i[n]) || void 0 === a || a.unload(), i[n] = null) : i[n] ? null === (l = i[n]) || void 0 === l || l.update({ ...f,
                                        ...null === (c = t.bleeps) || void 0 === c ? void 0 : c[n]
                                    }) : i[n] = Q({ ...f,
                                        ...u,
                                        context: o,
                                        masterGain: s
                                    })
                                })
                            }
                        };
                    return Object.freeze({
                        bleeps: i,
                        unload: c,
                        update: u
                    })
                },
                ee = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                et = {
                    ms: e => 1e3 * e,
                    s: e => e / 1e3
                },
                en = () => {},
                er = e => e;

            function ea(e, t = !0) {
                if (e && "finished" !== e.playState) try {
                    e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
                } catch (e) {}
            }
            let eo = e => e(),
                es = (e, t, n = ee.duration) => new Proxy({
                    animations: e.map(eo).filter(Boolean),
                    duration: n,
                    options: t
                }, el),
                ei = e => e.animations[0],
                el = {
                    get: (e, t) => {
                        let n = ei(e);
                        switch (t) {
                            case "duration":
                                return e.duration;
                            case "currentTime":
                                return et.s((null == n ? void 0 : n[t]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null == n ? void 0 : n[t];
                            case "finished":
                                return e.finished || (e.finished = Promise.all(e.animations.map(ec)).catch(en)), e.finished;
                            case "stop":
                                return () => {
                                    e.animations.forEach(e => ea(e))
                                };
                            case "forEachNative":
                                return t => {
                                    e.animations.forEach(n => t(n, e))
                                };
                            default:
                                return void 0 === (null == n ? void 0 : n[t]) ? void 0 : () => e.animations.forEach(e => e[t]())
                        }
                    },
                    set: (e, t, n) => {
                        switch (t) {
                            case "currentTime":
                                n = et.ms(n);
                            case "currentTime":
                            case "playbackRate":
                                for (let r = 0; r < e.animations.length; r++) e.animations[r][t] = n;
                                return !0
                        }
                        return !1
                    }
                },
                ec = e => e.finished,
                eu = e => "object" == typeof e && !!e.createAnimation,
                ed = e => "number" == typeof e,
                ep = e => Array.isArray(e) && !ed(e[0]),
                ef = (e, t, n) => -n * e + n * t + e,
                eg = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e);

            function em(e, t) {
                let n = e[e.length - 1];
                for (let r = 1; r <= t; r++) {
                    let a = eg(0, t, r);
                    e.push(ef(n, 1, a))
                }
            }

            function eh(e) {
                let t = [0];
                return em(t, e - 1), t
            }
            let ey = (e, t, n) => {
                let r = t - e;
                return ((n - e) % r + r) % r + e
            };

            function eb(e, t) {
                return ep(e) ? e[ey(0, e.length, t)] : e
            }
            let ev = (e, t, n) => Math.min(Math.max(n, e), t),
                ex = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

            function ew(e, t, n, r) {
                if (e === t && n === r) return er;
                let a = t => (function(e, t, n, r, a) {
                    let o, s;
                    let i = 0;
                    do(o = ex(s = t + (n - t) / 2, r, a) - e) > 0 ? n = s : t = s; while (Math.abs(o) > 1e-7 && ++i < 12);
                    return s
                })(t, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : ex(a(e), t, r)
            }
            let ek = (e, t = "end") => n => {
                    n = "end" === t ? Math.min(n, .999) : Math.max(n, .001);
                    let r = n * e;
                    return ev(0, 1, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
                },
                eE = e => "function" == typeof e,
                eS = e => Array.isArray(e) && ed(e[0]),
                ej = {
                    ease: ew(.25, .1, .25, 1),
                    "ease-in": ew(.42, 0, 1, 1),
                    "ease-in-out": ew(.42, 0, .58, 1),
                    "ease-out": ew(0, 0, .58, 1)
                },
                eA = /\((.*?)\)/;

            function eO(e) {
                if (eE(e)) return e;
                if (eS(e)) return ew(...e);
                if (ej[e]) return ej[e];
                if (e.startsWith("steps")) {
                    let t = eA.exec(e);
                    if (t) {
                        let e = t[1].split(",");
                        return ek(parseFloat(e[0]), e[1].trim())
                    }
                }
                return er
            }
            class eC {
                constructor(e, t = [0, 1], {
                    easing: n,
                    duration: r = ee.duration,
                    delay: a = ee.delay,
                    endDelay: o = ee.endDelay,
                    repeat: s = ee.repeat,
                    offset: i,
                    direction: l = "normal"
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = er, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        }), eu(n = n || ee.easing)) {
                        let e = n.createAnimation(t);
                        n = e.easing, t = e.keyframes || t, r = e.duration || r
                    }
                    this.repeat = s, this.easing = ep(n) ? er : eO(n), this.updateDuration(r);
                    let c = function(e, t = eh(e.length), n = er) {
                        let r = e.length,
                            a = r - t.length;
                        return a > 0 && em(t, a), a => {
                            let o = 0;
                            for (; o < r - 2 && !(a < t[o + 1]); o++);
                            let s = ev(0, 1, eg(t[o], t[o + 1], a)),
                                i = eb(n, o);
                            return s = i(s), ef(e[o], e[o + 1], s)
                        }
                    }(t, i, ep(n) ? n.map(eO) : er);
                    this.tick = t => {
                        var n;
                        let r = 0;
                        r = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate, this.t = r, r /= 1e3, r = Math.max(r - a, 0), "finished" === this.playState && void 0 === this.pauseTime && (r = this.totalDuration);
                        let s = r / this.duration,
                            i = Math.floor(s),
                            u = s % 1;
                        !u && s >= 1 && (u = 1), 1 === u && i--;
                        let d = i % 2;
                        ("reverse" === l || "alternate" === l && d || "alternate-reverse" === l && !d) && (u = 1 - u);
                        let p = r >= this.totalDuration ? 1 : Math.min(u, 1),
                            f = c(this.easing(p));
                        e(f);
                        let g = void 0 === this.pauseTime && ("finished" === this.playState || r >= this.totalDuration + o);
                        g ? (this.playState = "finished", null === (n = this.resolve) || void 0 === n || n.call(this, f)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    let e = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var e;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (e = this.reject) || void 0 === e || e.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(e) {
                    this.duration = e, this.totalDuration = e * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(e) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(e) {
                    this.rate = e
                }
            }
            var eL, eN, eR, e$ = function() {};
            class e_ {
                setAnimation(e) {
                    this.animation = e, null == e || e.finished.then(() => this.clearAnimation()).catch(() => {})
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            let eT = new WeakMap;

            function eF(e) {
                return eT.has(e) || eT.set(e, {
                    transforms: [],
                    values: new Map
                }), eT.get(e)
            }
            let eM = ["", "X", "Y", "Z"],
                eI = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                eP = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: e => e + "deg"
                },
                eD = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: e => e + "px"
                    },
                    rotate: eP,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: er
                    },
                    skew: eP
                },
                ez = new Map,
                eB = e => `--motion-${e}`,
                eW = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach(e => {
                eM.forEach(t => {
                    eW.push(e + t), ez.set(eB(e + t), eD[e])
                })
            });
            let eU = (e, t) => eW.indexOf(e) - eW.indexOf(t),
                eH = new Set(eW),
                eG = e => eH.has(e),
                eq = (e, t) => {
                    var n;
                    eI[t] && (t = eI[t]);
                    let {
                        transforms: r
                    } = eF(e);
                    n = t, -1 === r.indexOf(n) && r.push(n), e.style.transform = eZ(r)
                },
                eZ = e => e.sort(eU).reduce(eV, "").trim(),
                eV = (e, t) => `${e} ${t}(var(${eB(t)}))`,
                eY = e => e.startsWith("--"),
                eX = new Set,
                eK = (e, t) => document.createElement("div").animate(e, t),
                eQ = {
                    cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            eK({
                                opacity: [1]
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => !!eK({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished,
                    linearEasing: () => {
                        try {
                            eK({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                },
                eJ = {},
                e0 = {};
            for (let e in eQ) e0[e] = () => (void 0 === eJ[e] && (eJ[e] = eQ[e]()), eJ[e]);
            let e1 = (e, t) => {
                    let n = "",
                        r = Math.round(t / .015);
                    for (let t = 0; t < r; t++) n += e(eg(0, r - 1, t)) + ", ";
                    return n.substring(0, n.length - 2)
                },
                e2 = (e, t) => eE(e) ? e0.linearEasing() ? `linear(${e1(e,t)})` : ee.easing : eS(e) ? e5(e) : e,
                e5 = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
                e3 = e => Array.isArray(e) ? e : [e];

            function e4(e) {
                return eI[e] && (e = eI[e]), eG(e) ? eB(e) : e
            }
            let e6 = {
                    get: (e, t) => {
                        let n = eY(t = e4(t)) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                        if (!n && 0 !== n) {
                            let e = ez.get(t);
                            e && (n = e.initialValue)
                        }
                        return n
                    },
                    set: (e, t, n) => {
                        eY(t = e4(t)) ? e.style.setProperty(t, n) : e.style[t] = n
                    }
                },
                e8 = e => "string" == typeof e;

            function e7(e, t, n, r = {}, a) {
                var o;
                let s;
                let i = window.__MOTION_DEV_TOOLS_RECORD,
                    l = !1 !== r.record && i,
                    {
                        duration: c = ee.duration,
                        delay: u = ee.delay,
                        endDelay: d = ee.endDelay,
                        repeat: p = ee.repeat,
                        easing: f = ee.easing,
                        persist: g = !1,
                        direction: m,
                        offset: h,
                        allowWebkitAcceleration: y = !1
                    } = r,
                    b = eF(e),
                    v = eG(t),
                    x = e0.waapi();
                v && eq(e, t);
                let w = e4(t),
                    k = ((o = b.values).has(w) || o.set(w, new e_), o.get(w)),
                    E = ez.get(w);
                return ea(k.animation, !(eu(f) && k.generator) && !1 !== r.record), () => {
                    let o = () => {
                            var t, n;
                            return null !== (n = null !== (t = e6.get(e, w)) && void 0 !== t ? t : null == E ? void 0 : E.initialValue) && void 0 !== n ? n : 0
                        },
                        b = function(e, t) {
                            for (let n = 0; n < e.length; n++) null === e[n] && (e[n] = n ? e[n - 1] : t());
                            return e
                        }(e3(n), o),
                        S = function(e, t) {
                            var n;
                            let r = (null == t ? void 0 : t.toDefaultUnit) || er,
                                a = e[e.length - 1];
                            if (e8(a)) {
                                let e = (null === (n = a.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n ? void 0 : n[2]) || "";
                                e && (r = t => t + e)
                            }
                            return r
                        }(b, E);
                    if (eu(f)) {
                        let e = f.createAnimation(b, "opacity" !== t, o, w, k);
                        f = e.easing, b = e.keyframes || b, c = e.duration || c
                    }
                    if (eY(w) && (e0.cssRegisterProperty() ? function(e) {
                            if (!eX.has(e)) {
                                eX.add(e);
                                try {
                                    let {
                                        syntax: t,
                                        initialValue: n
                                    } = ez.has(e) ? ez.get(e) : {};
                                    CSS.registerProperty({
                                        name: e,
                                        inherits: !1,
                                        syntax: t,
                                        initialValue: n
                                    })
                                } catch (e) {}
                            }
                        }(w) : x = !1), v && !e0.linearEasing() && (eE(f) || ep(f) && f.some(eE)) && (x = !1), x) {
                        E && (b = b.map(e => ed(e) ? E.toDefaultUnit(e) : e)), 1 === b.length && (!e0.partialKeyframes() || l) && b.unshift(o());
                        let t = {
                            delay: et.ms(u),
                            duration: et.ms(c),
                            endDelay: et.ms(d),
                            easing: ep(f) ? void 0 : e2(f, c),
                            direction: m,
                            iterations: p + 1,
                            fill: "both"
                        };
                        (s = e.animate({
                            [w]: b,
                            offset: h,
                            easing: ep(f) ? f.map(e => e2(e, c)) : void 0
                        }, t)).finished || (s.finished = new Promise((e, t) => {
                            s.onfinish = e, s.oncancel = t
                        }));
                        let n = b[b.length - 1];
                        s.finished.then(() => {
                            g || (e6.set(e, w, n), s.cancel())
                        }).catch(en), y || (s.playbackRate = 1.000001)
                    } else if (a && v) 1 === (b = b.map(e => "string" == typeof e ? parseFloat(e) : e)).length && b.unshift(parseFloat(o())), s = new a(t => {
                        e6.set(e, w, S ? S(t) : t)
                    }, b, Object.assign(Object.assign({}, r), {
                        duration: c,
                        easing: f
                    }));
                    else {
                        let t = b[b.length - 1];
                        e6.set(e, w, E && ed(t) ? E.toDefaultUnit(t) : t)
                    }
                    return l && i(e, t, b, {
                        duration: c,
                        delay: u,
                        easing: f,
                        repeat: p,
                        offset: h
                    }, "motion-one"), k.setAnimation(s), s
                }
            }
            let e9 = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);

            function te(e, t) {
                var n;
                return "string" == typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
            }
            let tt = function(e, t, n = {}) {
                e = te(e);
                let r = e.length;
                e$(!!r, "No valid element provided."), e$(!!t, "No keyframes defined.");
                let a = [];
                for (let i = 0; i < r; i++) {
                    let l = e[i];
                    for (let e in t) {
                        var o, s;
                        let c = e9(n, e);
                        c.delay = (o = c.delay, s = i, eE(o) ? o(s, r) : o);
                        let u = e7(l, e, t[e], c, eC);
                        a.push(u)
                    }
                }
                return es(a, n, n.duration)
            };

            function tn(e, t = {}) {
                return es([() => {
                    let n = new eC(e, [0, 1], t);
                    return n.finished.catch(() => {}), n
                }], t, t.duration)
            }

            function tr(e, t, n) {
                let r = eE(e) ? tn : tt;
                return r(e, t, n)
            }
            let ta = (e, t) => {
                    Array.from(e.childNodes).forEach(e => {
                        e.nodeType === Node.TEXT_NODE ? t(e) : e.nodeType === Node.ELEMENT_NODE && ta(e, t)
                    })
                },
                to = (e, t, n) => {
                    let r = 0;
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a],
                            s = t[a],
                            i = r + s.length;
                        if (i <= n) o.textContent !== s && (o.textContent = s);
                        else if (r <= n) {
                            let e = n - r,
                                t = s.substring(0, e);
                            o.textContent !== t && (o.textContent = t)
                        } else "" !== o.textContent && (o.textContent = "");
                        r = i
                    }
                },
                ts = e => {
                    let {
                        rootElement: t,
                        contentElement: n,
                        duration: r,
                        easing: a = "linear",
                        isEntering: o = !0,
                        hideOnExited: s = !0,
                        hideOnEntered: i
                    } = e;
                    if (!t || !n) return {
                        isPending: () => !1,
                        cancel: () => {}
                    };
                    let l = n.cloneNode(!0);
                    Object.assign(l.style, {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        visibility: "visible",
                        opacity: 1
                    });
                    let c = document.createElement("span");
                    c.classList.add("arwes-text__blink"), c.innerHTML = "&#9614;", Object.assign(c.style, {
                        position: "relative",
                        display: "inline-block",
                        width: 0,
                        height: 0,
                        lineHeight: "0",
                        color: "inherit"
                    });
                    let u = [],
                        d = [];
                    ta(l, e => {
                        u.push(e), d.push(e.textContent || ""), o && (e.textContent = "")
                    });
                    let p = d.join("").length;
                    t.appendChild(l), l.appendChild(c), n.style.visibility = "hidden";
                    let f = tr(c, {
                        color: ["transparent", "inherit", "transparent"]
                    }, {
                        duration: .1,
                        easing: "steps(2, end)",
                        repeat: 1 / 0
                    });
                    return K({
                        duration: r,
                        easing: a,
                        direction: o ? "normal" : "reverse",
                        onUpdate: e => {
                            to(u, d, Math.round(e * p))
                        },
                        onComplete: () => {
                            n.style.visibility = o && i || !o && s ? "hidden" : "visible", l.remove(), f.cancel()
                        },
                        onCancel: () => {
                            n.style.visibility = "", l.remove(), f.cancel()
                        }
                    })
                },
                ti = "abcdefghijklmn\xf1opqrstuvwxyzABCDEFGHIJKLMN\xd1OPQRSTUVWXYZ>!\xb7$%&/()=?\xbf≤|@#",
                tl = e => {
                    let {
                        rootElement: t,
                        contentElement: n,
                        duration: r,
                        easing: a = "linear",
                        isEntering: o = !0,
                        hideOnExited: s = !0,
                        hideOnEntered: l
                    } = e;
                    if (!t || !n) return {
                        isPending: () => !1,
                        cancel: () => {}
                    };
                    let c = n.cloneNode(!0);
                    Object.assign(c.style, {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        visibility: "visible",
                        opacity: 1
                    });
                    let u = [],
                        d = [];
                    ta(c, e => {
                        u.push(e), d.push(e.textContent || "")
                    });
                    let p = d.join("").length,
                        f = i(Array(p).fill(null).map((e, t) => t)),
                        g = {};
                    return t.appendChild(c), n.style.visibility = "hidden", K({
                        duration: r,
                        easing: a,
                        direction: o ? "normal" : "reverse",
                        onUpdate: e => {
                            let t = Math.round(p * e);
                            for (let e = 0; e < p; e++) g[f[e]] = e < t;
                            let n = d.map(e => e.split("").map((e, t) => " " === e ? " " : g[t] ? e : ti[Math.round(Math.random() * (ti.length - 1))]).join(""));
                            to(u, n, p)
                        },
                        onComplete: () => {
                            n.style.visibility = o && l || !o && s ? "hidden" : "visible", c.remove()
                        },
                        onCancel: () => {
                            n.style.visibility = "", c.remove()
                        }
                    })
                },
                tc = e => {
                    let {
                        length: t,
                        maxDuration: n = 4,
                        cps: r = 400
                    } = e;
                    return Math.min(1e3 / r * t / 1e3, n)
                };
            var tu = n(2784),
                td = n.t(tu, 2);
            let tp = (e, t) => (0, tu.memo)(e, t),
                tf = (...e) => t => {
                    e.filter(Boolean).forEach(e => {
                        "function" == typeof e ? e(t) : e && "object" == typeof e && (e.current = t)
                    })
                },
                tg = (0, tu.createContext)(void 0),
                tm = (0, tu.createContext)(void 0),
                th = (e, t) => {
                    "function" == typeof e ? e(t) : e && (e.current = t)
                },
                ty = e => {
                    let {
                        root: t,
                        disabled: n,
                        dismissed: r,
                        unmountOnExited: a,
                        unmountOnEntered: o,
                        unmountOnDisabled: s,
                        checkToSendAction: i,
                        checkToSend: l,
                        nodeRef: c,
                        children: u,
                        ...d
                    } = e, p = (0, tu.useContext)(tg), f = (0, tu.useContext)(tm), g = (0, tu.useRef)(d), m = (0, tu.useRef)(null), h = (0, tu.useRef)(null), y = (0, tu.useRef)(void 0), b = (0, tu.useRef)(!0), v = (0, tu.useRef)(!0);
                    g.current = d;
                    let x = null == f ? void 0 : f.getSettings(),
                        w = !!t || !p,
                        k = void 0 !== r ? !!r : !!(null == x ? void 0 : x.dismissed),
                        E = void 0 !== n ? !!n : !!(null == x ? void 0 : x.disabled),
                        S = (0, tu.useMemo)(() => {
                            if (y.current && y.current.system.unregister(y.current.node), k) return th(c, null), p;
                            if (E) {
                                th(c, null);
                                return
                            }
                            let e = w ? B() : p.system,
                                t = () => {
                                    var e, t;
                                    let n = null == f ? void 0 : f.getSettings();
                                    return { ...T,
                                        ...n,
                                        ...g.current,
                                        ...m.current,
                                        duration: { ...T.duration,
                                            ...null == n ? void 0 : n.duration,
                                            ...null === (e = g.current) || void 0 === e ? void 0 : e.duration,
                                            ...null === (t = m.current) || void 0 === t ? void 0 : t.duration
                                        },
                                        onTransition: e => {
                                            var t, n, r, a;
                                            null === (n = null === (t = g.current) || void 0 === t ? void 0 : t.onTransition) || void 0 === n || n.call(t, e), null === (a = null === (r = m.current) || void 0 === r ? void 0 : r.onTransition) || void 0 === a || a.call(r, e)
                                        }
                                    }
                                },
                                n = e => {
                                    m.current = e
                                },
                                r = e => {
                                    h.current = e
                                },
                                a = Object.freeze({
                                    getSettings: t,
                                    setDynamicSettings: n,
                                    getDynamicSettings: () => m.current,
                                    getForeignRef: () => h.current,
                                    setForeignRef: r
                                }),
                                o = w ? e.register(void 0, a) : e.register(p.node, a);
                            return th(c, o), Object.freeze({
                                system: e,
                                node: o
                            })
                        }, [p, w, E, k]);
                    y.current = S;
                    let [j, A] = (0, tu.useState)(() => a && (null == S ? void 0 : S.node.state) === N.exited || o && (null == S ? void 0 : S.node.state) === N.entered || s && E);
                    return (0, tu.useEffect)(() => () => {
                        y.current && y.current.system.unregister(y.current.node)
                    }, []), (0, tu.useEffect)(() => {
                        null == S || S.node.send(R.setup)
                    }, [!!S]), (0, tu.useEffect)(() => {
                        if (b.current) {
                            b.current = !1;
                            return
                        }
                        null == S || S.node.send(R.update)
                    }, [d.active, d.manager, d.merge, d.combine]), (0, tu.useEffect)(() => {
                        if (S) {
                            let e = S.node.subscribe(e => {
                                A(a && e.state === N.exited || o && e.state === N.entered)
                            });
                            return () => e()
                        }
                        A(s)
                    }, [S, a, o, s]), (0, tu.useEffect)(() => {
                        if (v.current) {
                            v.current = !1;
                            return
                        }
                        S && S.node.send(null != i ? i : R.refresh)
                    }, null != l ? l : []), (0, tu.createElement)(tg.Provider, {
                        value: S
                    }, j ? null : u)
                },
                tb = tp(ty),
                tv = () => (0, tu.useContext)(tg),
                tx = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = (0, tu.useRef)(n);
                    r.current = n;
                    let a = (0, tu.useMemo)(() => Object.freeze({
                        getSettings: () => r.current
                    }), []);
                    return (0, tu.createElement)(tm.Provider, {
                        value: a
                    }, t)
                },
                tw = tp(tx);
            Object.freeze({});
            let tk = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                tE = {
                    rotate: "rotate",
                    rotateX: "rotateX",
                    rotateY: "rotateY",
                    rotateZ: "rotateZ",
                    skew: "skew",
                    skewX: "skewX",
                    skewY: "skewY"
                },
                tS = {
                    scale: "scale",
                    scaleX: "scaleX",
                    scaleY: "scaleY",
                    scaleZ: "scaleZ"
                },
                tj = e => {
                    if (!e) return;
                    let t = {},
                        n = "";
                    return Object.keys(e).forEach(r => {
                        let a = e[r];
                        if (tk[r]) {
                            let e = tk[r],
                                t = Number.isFinite(a) ? `${a}px` : String(a);
                            n += ` ${e}(${t})`
                        } else if (tE[r]) {
                            let e = tE[r],
                                t = Number.isFinite(a) ? `${a}deg` : String(a);
                            n += ` ${e}(${t})`
                        } else if (tS[r]) {
                            let e = tS[r];
                            n += ` ${e}(${a})`
                        } else t[r] = a
                    }), (n = n.trim()) && (t.transform = n), t
                },
                tA = e => {
                    let t, n;
                    let {
                        as: r,
                        animated: a,
                        className: o,
                        style: s,
                        elementRef: i,
                        hideOnExited: l = !0,
                        hideOnEntered: c,
                        ...u
                    } = e, d = tv(), p = (0, tu.useMemo)(() => r || "div", []), f = (0, tu.useRef)(null), g = (0, tu.useRef)([]), m = (0, tu.useRef)([]), [h, y] = (0, tu.useState)(() => (null == d ? void 0 : d.node.state) === N.exited), [b, v] = (0, tu.useState)(() => (null == d ? void 0 : d.node.state) === N.entered), x = Array.isArray(a) ? a : [a], w = x.filter(Boolean);
                    return g.current = w, (0, tu.useEffect)(() => {
                        if (!d) return;
                        let e = d.node.subscribe(e => {
                            y(e.state === N.exited), v(e.state === N.entered), m.current = [];
                            let t = f.current;
                            if (!t) return;
                            let n = g.current,
                                {
                                    duration: r
                                } = e,
                                a = e.state === N.entering || e.state === N.entered ? r.enter : r.exit;
                            n.map(t => {
                                var n;
                                return null === (n = t.transitions) || void 0 === n ? void 0 : n[e.state]
                            }).filter(Boolean).map(e => Array.isArray(e) ? e : [e]).flat(1).forEach(e => {
                                if ("function" == typeof e) {
                                    let n = e({
                                        element: t,
                                        duration: a
                                    });
                                    n && m.current.push(n)
                                } else {
                                    let {
                                        duration: n,
                                        delay: r,
                                        easing: o,
                                        options: s,
                                        ...i
                                    } = e, l = tr(t, i, {
                                        duration: n || a,
                                        delay: r,
                                        easing: o,
                                        ...s
                                    });
                                    m.current.push(l)
                                }
                            })
                        });
                        return () => {
                            e(), m.current.forEach(e => e.stop())
                        }
                    }, [d]), d && (t = w.map(e => null == e ? void 0 : e.initialAttributes).reduce((e, t) => ({ ...e,
                        ...t
                    }), {})), d && (n = w.map(e => tj(null == e ? void 0 : e.initialStyle)).reduce((e, t) => ({ ...e,
                        ...t
                    }), {})), (0, tu.createElement)(p, { ...u,
                        ...t,
                        className: o,
                        style: { ...s,
                            ...n,
                            visibility: d && (l && h || c && b) ? "hidden" : "visible"
                        },
                        ref: tf(i, f)
                    })
                },
                tO = (0, tu.memo)((0, tu.forwardRef)((e, t) => (0, tu.createElement)(tA, {
                    elementRef: t,
                    ...e
                }))),
                tC = e => {
                    let t, n;
                    let {
                        as: r,
                        state: a,
                        animated: o,
                        className: s,
                        style: i,
                        elementRef: l,
                        ...c
                    } = e, u = null != a, d = (0, tu.useMemo)(() => r || "div", []), p = (0, tu.useRef)(null), f = (0, tu.useRef)([]), g = (0, tu.useRef)([]), m = Array.isArray(o) ? o : [o], h = m.filter(Boolean);
                    return f.current = h, (0, tu.useEffect)(() => {
                        if (!u) return;
                        g.current = [];
                        let e = p.current,
                            t = f.current;
                        if (e) return t.map(e => {
                            var t;
                            return null === (t = e.transitions) || void 0 === t ? void 0 : t[a]
                        }).filter(Boolean).map(e => Array.isArray(e) ? e : [e]).flat(1).forEach(t => {
                            if ("function" == typeof t) {
                                let n = t({
                                    element: e,
                                    duration: 0
                                });
                                n && g.current.push(n)
                            } else {
                                let {
                                    duration: n,
                                    delay: r,
                                    easing: a,
                                    options: o,
                                    ...s
                                } = t, i = tr(e, s, {
                                    duration: n,
                                    delay: r,
                                    easing: a,
                                    ...o
                                });
                                g.current.push(i)
                            }
                        }), () => {
                            g.current.forEach(e => e.stop())
                        }
                    }, [u, a]), u && (t = h.map(e => null == e ? void 0 : e.initialAttributes).reduce((e, t) => ({ ...e,
                        ...t
                    }), {})), u && (n = h.map(e => tj(null == e ? void 0 : e.initialStyle)).reduce((e, t) => ({ ...e,
                        ...t
                    }), {})), (0, tu.createElement)(d, { ...c,
                        ...t,
                        className: s,
                        style: { ...i,
                            ...n
                        },
                        ref: tf(l, p)
                    })
                };
            (0, tu.memo)((0, tu.forwardRef)((e, t) => (0, tu.createElement)(tC, {
                elementRef: t,
                ...e
            })));

            function tL(e, t, n, r) {
                var a;
                return ed(t) ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (a = r.get(t)) && void 0 !== a ? a : e
            }

            function tN(e, t) {
                return e.at === t.at ? null === e.value ? 1 : -1 : e.at - t.at
            }

            function tR(e, t = {}) {
                var n;
                let r = function(e, t = {}) {
                        var n, r, a, o, {
                                defaultOptions: s = {}
                            } = t,
                            i = function(e, t) {
                                var n = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) 0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                                return n
                            }(t, ["defaultOptions"]);
                        let l = [],
                            c = new Map,
                            u = {},
                            d = new Map,
                            p = 0,
                            f = 0,
                            g = 0;
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            if (e8(i)) {
                                d.set(i, f);
                                continue
                            }
                            if (!Array.isArray(i)) {
                                d.set(i.name, tL(f, i.at, p, d));
                                continue
                            }
                            let [l, m, h = {}] = i;
                            void 0 !== h.at && (f = tL(f, h.at, p, d));
                            let y = 0,
                                b = te(l, u),
                                v = b.length;
                            for (let e = 0; e < v; e++) {
                                let t = b[e],
                                    i = (c.has(t) || c.set(t, {}), c.get(t));
                                for (let t in m) {
                                    let l = (n = t, (r = i)[n] || (r[n] = []), r[n]),
                                        c = e3(m[t]),
                                        u = e9(h, t),
                                        {
                                            duration: d = s.duration || ee.duration,
                                            easing: p = s.easing || ee.easing
                                        } = u;
                                    if (eu(p)) {
                                        e$("opacity" === t || c.length > 1, "spring must be provided 2 keyframes within timeline()");
                                        let e = p.createAnimation(c, "opacity" !== t, () => 0, t);
                                        p = e.easing, c = e.keyframes || c, d = e.duration || d
                                    }
                                    let b = (a = h.delay, o = e, (eE(a) ? a(o, v) : a) || 0),
                                        x = f + b,
                                        w = x + d,
                                        {
                                            offset: k = eh(c.length)
                                        } = u;
                                    1 === k.length && 0 === k[0] && (k[1] = 1);
                                    let E = k.length - c.length;
                                    E > 0 && em(k, E), 1 === c.length && c.unshift(null),
                                        function(e, t, n, r, a, o) {
                                            ! function(e, t, n) {
                                                for (let r = 0; r < e.length; r++) {
                                                    let a = e[r];
                                                    a.at > t && a.at < n && (function(e, t) {
                                                        let n = e.indexOf(t);
                                                        n > -1 && e.splice(n, 1)
                                                    }(e, a), r--)
                                                }
                                            }(e, a, o);
                                            for (let s = 0; s < t.length; s++) e.push({
                                                value: t[s],
                                                at: ef(a, o, r[s]),
                                                easing: eb(n, s)
                                            })
                                        }(l, c, p, k, x, w), y = Math.max(b + d, y), g = Math.max(w, g)
                                }
                            }
                            p = f, f += y
                        }
                        return c.forEach((e, t) => {
                            for (let n in e) {
                                let r = e[n];
                                r.sort(tN);
                                let a = [],
                                    o = [],
                                    c = [];
                                for (let e = 0; e < r.length; e++) {
                                    let {
                                        at: t,
                                        value: n,
                                        easing: s
                                    } = r[e];
                                    a.push(n), o.push(eg(0, g, t)), c.push(s || ee.easing)
                                }
                                0 !== o[0] && (o.unshift(0), a.unshift(a[0]), c.unshift("linear")), 1 !== o[o.length - 1] && (o.push(1), a.push(null)), l.push([t, n, a, Object.assign(Object.assign(Object.assign({}, s), {
                                    duration: g,
                                    easing: c,
                                    offset: o
                                }), i)])
                            }
                        }), l
                    }(e, t),
                    a = r.map(e => e7(...e, eC)).filter(Boolean);
                return es(a, t, null === (n = r[0]) || void 0 === n ? void 0 : n[3].duration)
            }
            let t$ = (e, t, n, r) => ({
                    transitions: {
                        entering: {
                            [e]: [t, n]
                        },
                        exiting: {
                            [e]: [n, null != r ? r : t]
                        }
                    }
                }),
                t_ = () => t$("opacity", 0, 1),
                tT = () => ({
                    transitions: {
                        entering: ({
                            element: e,
                            duration: t
                        }) => tR([
                            [e, {
                                opacity: [0, 1]
                            }],
                            [e, {
                                opacity: [1, .7]
                            }],
                            [e, {
                                opacity: [.7, 1]
                            }]
                        ], {
                            duration: t
                        }),
                        exiting: ({
                            element: e,
                            duration: t
                        }) => tR([
                            [e, {
                                opacity: [1, 0]
                            }],
                            [e, {
                                opacity: [0, .3]
                            }],
                            [e, {
                                opacity: [.3, 0]
                            }]
                        ], {
                            duration: t
                        })
                    }
                }),
                tF = (0, tu.createContext)(null),
                tM = e => {
                    let {
                        master: t,
                        common: n,
                        categories: r,
                        bleeps: a,
                        children: o
                    } = e, s = (0, tu.useMemo)(() => J({
                        master: t,
                        common: n,
                        categories: r,
                        bleeps: a
                    }), []);
                    return (0, tu.useEffect)(() => {
                        null == s || s.update({
                            master: t,
                            common: n,
                            categories: r,
                            bleeps: a
                        })
                    }, [t, n, r, a]), (0, tu.useEffect)(() => () => {
                        null == s || s.unload()
                    }, []), tu.createElement(tF.Provider, {
                        value: s
                    }, o)
                },
                tI = tp(tM),
                tP = {},
                tD = (e = tP) => {
                    var t;
                    if (e.disabled) return {};
                    let n = (0, tu.useContext)(tF);
                    return null !== (t = null == n ? void 0 : n.bleeps) && void 0 !== t ? t : {}
                };
            var tz = function() {
                    function e(e) {
                        var t = this;
                        this._insertTag = function(e) {
                            var n;
                            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                    }
                    var t = e.prototype;
                    return t.hydrate = function(e) {
                        e.forEach(this._insertTag)
                    }, t.insert = function(e) {
                        if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                            var t;
                            this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t))
                        }
                        var n = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var r = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(n);
                            try {
                                r.insertRule(e, r.cssRules.length)
                            } catch (e) {}
                        } else n.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function() {
                        this.tags.forEach(function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        }), this.tags = [], this.ctr = 0
                    }, e
                }(),
                tB = Math.abs,
                tW = String.fromCharCode,
                tU = Object.assign;

            function tH(e, t, n) {
                return e.replace(t, n)
            }

            function tG(e, t) {
                return e.indexOf(t)
            }

            function tq(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function tZ(e, t, n) {
                return e.slice(t, n)
            }

            function tV(e) {
                return e.length
            }

            function tY(e, t) {
                return t.push(e), e
            }
            var tX = 1,
                tK = 1,
                tQ = 0,
                tJ = 0,
                t0 = 0,
                t1 = "";

            function t2(e, t, n, r, a, o, s) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: a,
                    children: o,
                    line: tX,
                    column: tK,
                    length: s,
                    return: ""
                }
            }

            function t5(e, t) {
                return tU(t2("", null, null, "", null, null, 0), e, {
                    length: -e.length
                }, t)
            }

            function t3() {
                return t0 = tJ < tQ ? tq(t1, tJ++) : 0, tK++, 10 === t0 && (tK = 1, tX++), t0
            }

            function t4() {
                return tq(t1, tJ)
            }

            function t6(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function t8(e) {
                return tX = tK = 1, tQ = tV(t1 = e), tJ = 0, []
            }

            function t7(e) {
                var t, n;
                return (t = tJ - 1, n = function e(t) {
                    for (; t3();) switch (t0) {
                        case t:
                            return tJ;
                        case 34:
                        case 39:
                            34 !== t && 39 !== t && e(t0);
                            break;
                        case 40:
                            41 === t && e(t);
                            break;
                        case 92:
                            t3()
                    }
                    return tJ
                }(91 === e ? e + 2 : 40 === e ? e + 1 : e), tZ(t1, t, n)).trim()
            }
            var t9 = "-ms-",
                ne = "-moz-",
                nt = "-webkit-",
                nn = "comm",
                nr = "rule",
                na = "decl",
                no = "@keyframes";

            function ns(e, t) {
                for (var n = "", r = e.length, a = 0; a < r; a++) n += t(e[a], a, e, t) || "";
                return n
            }

            function ni(e, t, n, r) {
                switch (e.type) {
                    case "@import":
                    case na:
                        return e.return = e.return || e.value;
                    case nn:
                        return "";
                    case no:
                        return e.return = e.value + "{" + ns(e.children, r) + "}";
                    case nr:
                        e.value = e.props.join(",")
                }
                return tV(n = ns(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function nl(e, t, n, r, a, o, s, i, l, c, u) {
                for (var d = a - 1, p = 0 === a ? o : [""], f = p.length, g = 0, m = 0, h = 0; g < r; ++g)
                    for (var y = 0, b = tZ(e, d + 1, d = tB(m = s[g])), v = e; y < f; ++y)(v = (m > 0 ? p[y] + " " + b : tH(b, /&\f/g, p[y])).trim()) && (l[h++] = v);
                return t2(e, t, n, 0 === a ? nr : i, l, c, u)
            }

            function nc(e, t, n, r) {
                return t2(e, t, n, na, tZ(e, 0, r), tZ(e, r + 1, -1), r)
            }
            var nu = function(e, t, n) {
                    for (var r = 0, a = 0; r = a, a = t4(), 38 === r && 12 === a && (t[n] = 1), !t6(a);) t3();
                    return tZ(t1, e, tJ)
                },
                nd = function(e, t) {
                    var n = -1,
                        r = 44;
                    do switch (t6(r)) {
                        case 0:
                            38 === r && 12 === t4() && (t[n] = 1), e[n] += nu(tJ - 1, t, n);
                            break;
                        case 2:
                            e[n] += t7(r);
                            break;
                        case 4:
                            if (44 === r) {
                                e[++n] = 58 === t4() ? "&\f" : "", t[n] = e[n].length;
                                break
                            }
                        default:
                            e[n] += tW(r)
                    }
                    while (r = t3());
                    return e
                },
                np = function(e, t) {
                    var n;
                    return n = nd(t8(e), t), t1 = "", n
                },
                nf = new WeakMap,
                ng = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || nf.get(n)) && !r) {
                            nf.set(e, !0);
                            for (var a = [], o = np(t, a), s = n.props, i = 0, l = 0; i < o.length; i++)
                                for (var c = 0; c < s.length; c++, l++) e.props[l] = a[i] ? o[i].replace(/&\f/g, s[c]) : s[c] + " " + o[i]
                        }
                    }
                },
                nm = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                },
                nh = [function(e, t, n, r) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case na:
                            e.return = function e(t, n) {
                                switch (45 ^ tq(t, 0) ? (((n << 2 ^ tq(t, 0)) << 2 ^ tq(t, 1)) << 2 ^ tq(t, 2)) << 2 ^ tq(t, 3) : 0) {
                                    case 5103:
                                        return nt + "print-" + t + t;
                                    case 5737:
                                    case 4201:
                                    case 3177:
                                    case 3433:
                                    case 1641:
                                    case 4457:
                                    case 2921:
                                    case 5572:
                                    case 6356:
                                    case 5844:
                                    case 3191:
                                    case 6645:
                                    case 3005:
                                    case 6391:
                                    case 5879:
                                    case 5623:
                                    case 6135:
                                    case 4599:
                                    case 4855:
                                    case 4215:
                                    case 6389:
                                    case 5109:
                                    case 5365:
                                    case 5621:
                                    case 3829:
                                        return nt + t + t;
                                    case 5349:
                                    case 4246:
                                    case 4810:
                                    case 6968:
                                    case 2756:
                                        return nt + t + ne + t + t9 + t + t;
                                    case 6828:
                                    case 4268:
                                        return nt + t + t9 + t + t;
                                    case 6165:
                                        return nt + t + t9 + "flex-" + t + t;
                                    case 5187:
                                        return nt + t + tH(t, /(\w+).+(:[^]+)/, nt + "box-$1$2" + t9 + "flex-$1$2") + t;
                                    case 5443:
                                        return nt + t + t9 + "flex-item-" + tH(t, /flex-|-self/, "") + t;
                                    case 4675:
                                        return nt + t + t9 + "flex-line-pack" + tH(t, /align-content|flex-|-self/, "") + t;
                                    case 5548:
                                        return nt + t + t9 + tH(t, "shrink", "negative") + t;
                                    case 5292:
                                        return nt + t + t9 + tH(t, "basis", "preferred-size") + t;
                                    case 6060:
                                        return nt + "box-" + tH(t, "-grow", "") + nt + t + t9 + tH(t, "grow", "positive") + t;
                                    case 4554:
                                        return nt + tH(t, /([^-])(transform)/g, "$1" + nt + "$2") + t;
                                    case 6187:
                                        return tH(tH(tH(t, /(zoom-|grab)/, nt + "$1"), /(image-set)/, nt + "$1"), t, "") + t;
                                    case 5495:
                                    case 3959:
                                        return tH(t, /(image-set\([^]*)/, nt + "$1$`$1");
                                    case 4968:
                                        return tH(tH(t, /(.+:)(flex-)?(.*)/, nt + "box-pack:$3" + t9 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + nt + t + t;
                                    case 4095:
                                    case 3583:
                                    case 4068:
                                    case 2532:
                                        return tH(t, /(.+)-inline(.+)/, nt + "$1$2") + t;
                                    case 8116:
                                    case 7059:
                                    case 5753:
                                    case 5535:
                                    case 5445:
                                    case 5701:
                                    case 4933:
                                    case 4677:
                                    case 5533:
                                    case 5789:
                                    case 5021:
                                    case 4765:
                                        if (tV(t) - 1 - n > 6) switch (tq(t, n + 1)) {
                                            case 109:
                                                if (45 !== tq(t, n + 4)) break;
                                            case 102:
                                                return tH(t, /(.+:)(.+)-([^]+)/, "$1" + nt + "$2-$3$1" + ne + (108 == tq(t, n + 3) ? "$3" : "$2-$3")) + t;
                                            case 115:
                                                return ~tG(t, "stretch") ? e(tH(t, "stretch", "fill-available"), n) + t : t
                                        }
                                        break;
                                    case 4949:
                                        if (115 !== tq(t, n + 1)) break;
                                    case 6444:
                                        switch (tq(t, tV(t) - 3 - (~tG(t, "!important") && 10))) {
                                            case 107:
                                                return tH(t, ":", ":" + nt) + t;
                                            case 101:
                                                return tH(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + nt + (45 === tq(t, 14) ? "inline-" : "") + "box$3$1" + nt + "$2$3$1" + t9 + "$2box$3") + t
                                        }
                                        break;
                                    case 5936:
                                        switch (tq(t, n + 11)) {
                                            case 114:
                                                return nt + t + t9 + tH(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                            case 108:
                                                return nt + t + t9 + tH(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                            case 45:
                                                return nt + t + t9 + tH(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                        }
                                        return nt + t + t9 + t + t
                                }
                                return t
                            }(e.value, e.length);
                            break;
                        case no:
                            return ns([t5(e, {
                                value: tH(e.value, "@", "@" + nt)
                            })], r);
                        case nr:
                            if (e.length) return e.props.map(function(t) {
                                var n;
                                switch (n = t, (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n) {
                                    case ":read-only":
                                    case ":read-write":
                                        return ns([t5(e, {
                                            props: [tH(t, /:(read-\w+)/, ":" + ne + "$1")]
                                        })], r);
                                    case "::placeholder":
                                        return ns([t5(e, {
                                            props: [tH(t, /:(plac\w+)/, ":" + nt + "input-$1")]
                                        }), t5(e, {
                                            props: [tH(t, /:(plac\w+)/, ":" + ne + "$1")]
                                        }), t5(e, {
                                            props: [tH(t, /:(plac\w+)/, t9 + "input-$1")]
                                        })], r)
                                }
                                return ""
                            }).join("")
                    }
                }],
                ny = function(e, t, n) {
                    var r = e.key + "-" + t.name;
                    !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                },
                nb = function(e, t, n) {
                    ny(e, t, n);
                    var r = e.key + "-" + t.name;
                    if (void 0 === e.inserted[t.name]) {
                        var a = t;
                        do e.insert(t === a ? "." + r : "", a, e.sheet, !0), a = a.next; while (void 0 !== a)
                    }
                },
                nv = function(e) {
                    for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4) t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, n = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
                    switch (a) {
                        case 3:
                            n ^= (255 & e.charCodeAt(r + 2)) << 16;
                        case 2:
                            n ^= (255 & e.charCodeAt(r + 1)) << 8;
                        case 1:
                            n ^= 255 & e.charCodeAt(r), n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)
                    }
                    return n ^= n >>> 13, (((n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36)
                },
                nx = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                nw = /[A-Z]|^ms/g,
                nk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                nE = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                nS = function(e) {
                    return null != e && "boolean" != typeof e
                },
                nj = (eL = Object.create(null), function(e) {
                    return void 0 === eL[e] && (eL[e] = nE(e) ? e : e.replace(nw, "-$&").toLowerCase()), eL[e]
                }),
                nA = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(nk, function(e, t, n) {
                                return eR = {
                                    name: t,
                                    styles: n,
                                    next: eR
                                }, t
                            })
                    }
                    return 1 === nx[e] || nE(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function nO(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return eR = {
                            name: n.name,
                            styles: n.styles,
                            next: eR
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) eR = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: eR
                                }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var a = 0; a < n.length; a++) r += nO(e, t, n[a]) + ";";
                            else
                                for (var o in n) {
                                    var s = n[o];
                                    if ("object" != typeof s) null != t && void 0 !== t[s] ? r += o + "{" + t[s] + "}" : nS(s) && (r += nj(o) + ":" + nA(o, s) + ";");
                                    else if (Array.isArray(s) && "string" == typeof s[0] && (null == t || void 0 === t[s[0]]))
                                        for (var i = 0; i < s.length; i++) nS(s[i]) && (r += nj(o) + ":" + nA(o, s[i]) + ";");
                                    else {
                                        var l = nO(e, t, s);
                                        switch (o) {
                                            case "animation":
                                            case "animationName":
                                                r += nj(o) + ":" + l + ";";
                                                break;
                                            default:
                                                r += o + "{" + l + "}"
                                        }
                                    }
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var a = eR,
                                o = n(e);
                            return eR = a, nO(e, t, o)
                        }
                }
                if (null == t) return n;
                var s = t[n];
                return void 0 !== s ? s : n
            }
            var nC = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                nL = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var r, a = !0,
                        o = "";
                    eR = void 0;
                    var s = e[0];
                    null == s || void 0 === s.raw ? (a = !1, o += nO(n, t, s)) : o += s[0];
                    for (var i = 1; i < e.length; i++) o += nO(n, t, e[i]), a && (o += s[i]);
                    nC.lastIndex = 0;
                    for (var l = ""; null !== (r = nC.exec(o));) l += "-" + r[1];
                    return {
                        name: nv(o) + l,
                        styles: o,
                        next: eR
                    }
                },
                nN = !!td.useInsertionEffect && td.useInsertionEffect,
                nR = nN || function(e) {
                    return e()
                };
            nN || tu.useLayoutEffect;
            var n$ = {}.hasOwnProperty,
                n_ = (0, tu.createContext)("undefined" != typeof HTMLElement ? function(e) {
                    var t, n, r, a, o, s = e.key;
                    if ("css" === s) {
                        var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(i, function(e) {
                            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                        })
                    }
                    var l = e.stylisPlugins || nh,
                        c = {},
                        u = [];
                    a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s + ' "]'), function(e) {
                        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) c[t[n]] = !0;
                        u.push(e)
                    });
                    var d = (n = (t = [ng, nm].concat(l, [ni, (r = function(e) {
                            o.insert(e)
                        }, function(e) {
                            !e.root && (e = e.return) && r(e)
                        })])).length, function(e, r, a, o) {
                            for (var s = "", i = 0; i < n; i++) s += t[i](e, r, a, o) || "";
                            return s
                        }),
                        p = function(e) {
                            var t, n;
                            return ns((n = function e(t, n, r, a, o, s, i, l, c) {
                                for (var u, d = 0, p = 0, f = i, g = 0, m = 0, h = 0, y = 1, b = 1, v = 1, x = 0, w = "", k = o, E = s, S = a, j = w; b;) switch (h = x, x = t3()) {
                                    case 40:
                                        if (108 != h && 58 == tq(j, f - 1)) {
                                            -1 != tG(j += tH(t7(x), "&", "&\f"), "&\f") && (v = -1);
                                            break
                                        }
                                    case 34:
                                    case 39:
                                    case 91:
                                        j += t7(x);
                                        break;
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        j += function(e) {
                                            for (; t0 = t4();)
                                                if (t0 < 33) t3();
                                                else break;
                                            return t6(e) > 2 || t6(t0) > 3 ? "" : " "
                                        }(h);
                                        break;
                                    case 92:
                                        j += function(e, t) {
                                            for (var n; --t && t3() && !(t0 < 48) && !(t0 > 102) && (!(t0 > 57) || !(t0 < 65)) && (!(t0 > 70) || !(t0 < 97)););
                                            return n = tJ + (t < 6 && 32 == t4() && 32 == t3()), tZ(t1, e, n)
                                        }(tJ - 1, 7);
                                        continue;
                                    case 47:
                                        switch (t4()) {
                                            case 42:
                                            case 47:
                                                tY(t2(u = function(e, t) {
                                                    for (; t3();)
                                                        if (e + t0 === 57) break;
                                                        else if (e + t0 === 84 && 47 === t4()) break;
                                                    return "/*" + tZ(t1, t, tJ - 1) + "*" + tW(47 === e ? e : t3())
                                                }(t3(), tJ), n, r, nn, tW(t0), tZ(u, 2, -2), 0), c);
                                                break;
                                            default:
                                                j += "/"
                                        }
                                        break;
                                    case 123 * y:
                                        l[d++] = tV(j) * v;
                                    case 125 * y:
                                    case 59:
                                    case 0:
                                        switch (x) {
                                            case 0:
                                            case 125:
                                                b = 0;
                                            case 59 + p:
                                                m > 0 && tV(j) - f && tY(m > 32 ? nc(j + ";", a, r, f - 1) : nc(tH(j, " ", "") + ";", a, r, f - 2), c);
                                                break;
                                            case 59:
                                                j += ";";
                                            default:
                                                if (tY(S = nl(j, n, r, d, p, o, l, w, k = [], E = [], f), s), 123 === x) {
                                                    if (0 === p) e(j, n, S, S, k, s, f, l, E);
                                                    else switch (99 === g && 110 === tq(j, 3) ? 100 : g) {
                                                        case 100:
                                                        case 109:
                                                        case 115:
                                                            e(t, S, S, a && tY(nl(t, S, S, 0, 0, o, l, w, o, k = [], f), E), o, E, f, l, a ? k : E);
                                                            break;
                                                        default:
                                                            e(j, S, S, S, [""], E, 0, l, E)
                                                    }
                                                }
                                        }
                                        d = p = m = 0, y = v = 1, w = j = "", f = i;
                                        break;
                                    case 58:
                                        f = 1 + tV(j), m = h;
                                    default:
                                        if (y < 1) {
                                            if (123 == x) --y;
                                            else if (125 == x && 0 == y++ && 125 == (t0 = tJ > 0 ? tq(t1, --tJ) : 0, tK--, 10 === t0 && (tK = 1, tX--), t0)) continue
                                        }
                                        switch (j += tW(x), x * y) {
                                            case 38:
                                                v = p > 0 ? 1 : (j += "\f", -1);
                                                break;
                                            case 44:
                                                l[d++] = (tV(j) - 1) * v, v = 1;
                                                break;
                                            case 64:
                                                45 === t4() && (j += t7(t3())), g = t4(), p = f = tV(w = j += function(e) {
                                                    for (; !t6(t4());) t3();
                                                    return tZ(t1, e, tJ)
                                                }(tJ)), x++;
                                                break;
                                            case 45:
                                                45 === h && 2 == tV(j) && (y = 0)
                                        }
                                }
                                return s
                            }("", null, null, null, [""], t = t8(t = e), 0, [0], t), t1 = "", n), d)
                        },
                        f = {
                            key: s,
                            sheet: new tz({
                                key: s,
                                container: a,
                                nonce: e.nonce,
                                speedy: e.speedy,
                                prepend: e.prepend,
                                insertionPoint: e.insertionPoint
                            }),
                            nonce: e.nonce,
                            inserted: c,
                            registered: {},
                            insert: function(e, t, n, r) {
                                o = n, p(e ? e + "{" + t.styles + "}" : t.styles), r && (f.inserted[t.name] = !0)
                            }
                        };
                    return f.sheet.hydrate(u), f
                }({
                    key: "css"
                }) : null);
            n_.Provider;
            var nT = (0, tu.createContext)({}),
                nF = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                nM = function(e, t) {
                    var n = {};
                    for (var r in t) n$.call(t, r) && (n[r] = t[r]);
                    return n[nF] = e, n
                },
                nI = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        r = e.isStringTag;
                    return ny(t, n, r), nR(function() {
                        return nb(t, n, r)
                    }), null
                },
                nP = (eN = function(e, t, n) {
                    var r, a, o, s = e.css;
                    "string" == typeof s && void 0 !== t.registered[s] && (s = t.registered[s]);
                    var i = e[nF],
                        l = [s],
                        c = "";
                    "string" == typeof e.className ? (r = t.registered, a = e.className, o = "", a.split(" ").forEach(function(e) {
                        void 0 !== r[e] ? l.push(r[e] + ";") : o += e + " "
                    }), c = o) : null != e.className && (c = e.className + " ");
                    var u = nL(l, void 0, (0, tu.useContext)(nT));
                    c += t.key + "-" + u.name;
                    var d = {};
                    for (var p in e) n$.call(e, p) && "css" !== p && p !== nF && (d[p] = e[p]);
                    return d.ref = n, d.className = c, (0, tu.createElement)(tu.Fragment, null, (0, tu.createElement)(nI, {
                        cache: t,
                        serialized: u,
                        isStringTag: "string" == typeof i
                    }), (0, tu.createElement)(i, d))
                }, (0, tu.forwardRef)(function(e, t) {
                    return eN(e, (0, tu.useContext)(n_), t)
                }));
            n(3463);
            var nD = function(e, t) {
                var n = arguments;
                if (null == t || !n$.call(t, "css")) return tu.createElement.apply(void 0, n);
                var r = n.length,
                    a = Array(r);
                a[0] = nP, a[1] = nM(e, t);
                for (var o = 2; o < r; o++) a[o] = n[o];
                return tu.createElement.apply(null, a)
            };
            let nz = "arwes-react-text-text",
                nB = e => {
                    let {
                        as: t = "p",
                        className: n,
                        contentClassName: r,
                        children: a,
                        manager: s,
                        easing: i,
                        fixed: l,
                        hideOnExited: c = !0,
                        hideOnEntered: u,
                        elementRef: d,
                        ...p
                    } = e, f = (0, tu.useMemo)(() => t, []), [g, m] = (0, tu.useState)(""), h = (0, tu.useRef)(null), y = (0, tu.useRef)(null), b = (0, tu.useRef)(null), v = tv(), [x, w] = (0, tu.useState)(() => (null == v ? void 0 : v.node.state) === N.exited), [k, E] = (0, tu.useState)(() => (null == v ? void 0 : v.node.state) === N.entered);
                    return (0, tu.useEffect)(() => {
                        var e, t;
                        m(null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.textContent) && void 0 !== t ? t : "")
                    }, [a]), (0, tu.useEffect)(() => {
                        if (!v) {
                            y.current && (y.current.style.visibility = "visible");
                            return
                        }
                        if (!g.length) return;
                        if (!l) {
                            let e = v.node.control.getSettings(),
                                t = tc({
                                    length: g.length,
                                    maxDuration: e.duration.enter
                                }),
                                n = tc({
                                    length: g.length,
                                    maxDuration: e.duration.exit
                                });
                            v.node.control.setDynamicSettings({
                                duration: {
                                    enter: t,
                                    exit: n
                                }
                            })
                        }
                        let e = "decipher" === s ? tl : ts,
                            t = (t, n) => {
                                var r;
                                null === (r = b.current) || void 0 === r || r.cancel(), b.current = e({
                                    rootElement: h.current,
                                    contentElement: y.current,
                                    duration: t,
                                    isEntering: n,
                                    easing: i,
                                    hideOnExited: c,
                                    hideOnEntered: u
                                })
                            },
                            n = v.node.subscribe(e => {
                                switch (E(e.state === N.entered), w(e.state === N.exited), e.state) {
                                    case "entered":
                                        b.current || t(e.duration.enter, !0);
                                        break;
                                    case "entering":
                                        t(e.duration.enter, !0);
                                        break;
                                    case "exiting":
                                        t(e.duration.exit, !1)
                                }
                            });
                        return () => {
                            var e;
                            n(), null === (e = b.current) || void 0 === e || e.cancel(), b.current = null
                        }
                    }, [v, g]), nD(f, { ...p,
                        className: o(nz, n),
                        css: {
                            position: "relative"
                        },
                        ref: tf(d, h)
                    }, nD("span", {
                        ref: y,
                        className: o(`${nz}__content`, r),
                        css: {
                            position: "relative",
                            zIndex: 1,
                            display: "inline-block",
                            visibility: v && (u && k || c && x) ? "hidden" : "visible"
                        }
                    }, a))
                },
                nW = tp(nB),
                nU = (e, t) => {
                    (0, tu.useEffect)(() => {
                        if (!e.current) return;
                        let n = e.current,
                            r = () => {
                                let {
                                    width: e,
                                    height: r
                                } = n.getBoundingClientRect();
                                n.setAttribute("viewBox", `0 0 ${e} ${r}`), null == t || t(n, e, r)
                            };
                        if (r(), window.ResizeObserver) {
                            let e = !0,
                                t = new window.ResizeObserver(() => {
                                    if (e) {
                                        e = !1;
                                        return
                                    }
                                    r()
                                });
                            return t.observe(n), () => t.disconnect()
                        }
                    }, [t])
                },
                nH = e => {
                    let t = tv(),
                        n = (0, tu.useRef)(null);
                    (0, tu.useEffect)(() => {
                        let r = e.current;
                        if (!r) return;
                        let a = Array.from(r.querySelectorAll("[data-name=bg]")),
                            o = Array.from(r.querySelectorAll("[data-name=line]"));
                        if (a.concat(o).forEach(e => {
                                e.style.opacity = "1", e.style.strokeDasharray = "", e.style.strokeDashoffset = ""
                            }), !t) return;
                        let s = t.node.subscribe(e => {
                            var t;
                            let {
                                duration: r
                            } = e;
                            switch (null === (t = n.current) || void 0 === t || t.cancel(), e.state) {
                                case "exited":
                                    a.concat(o).forEach(e => {
                                        e.style.opacity = "0", e.style.strokeDasharray = "", e.style.strokeDashoffset = ""
                                    });
                                    break;
                                case "entering":
                                    for (let e of o) {
                                        let t = e.getTotalLength();
                                        e.style.opacity = "1", e.style.strokeDasharray = String(t), e.dataset.length = String(t)
                                    }
                                    n.current = tr(e => {
                                        for (let t of a) t.style.opacity = String(e);
                                        for (let t of o) {
                                            let n = Number(t.dataset.length);
                                            t.style.strokeDashoffset = String((1 - e) * n)
                                        }
                                    }, {
                                        duration: r.enter
                                    });
                                    break;
                                case "entered":
                                    a.concat(o).forEach(e => {
                                        e.style.opacity = "1", e.style.strokeDasharray = "", e.style.strokeDashoffset = ""
                                    });
                                    break;
                                case "exiting":
                                    for (let e of o) {
                                        let t = e.getTotalLength();
                                        e.style.strokeDasharray = String(t), e.dataset.length = String(t)
                                    }
                                    n.current = tr(e => {
                                        for (let t of a) t.style.opacity = String(1 - e);
                                        for (let t of o) {
                                            let n = Number(t.dataset.length);
                                            t.style.strokeDashoffset = String(e * n)
                                        }
                                    }, {
                                        duration: r.exit
                                    })
                            }
                        });
                        return () => {
                            var e;
                            null === (e = n.current) || void 0 === e || e.cancel(), s()
                        }
                    }, [t]);
                    let r = (0, tu.useCallback)(() => {
                        var r;
                        if (!t || !e.current) return;
                        let a = e.current,
                            o = Array.from(a.querySelectorAll("[data-name=bg]")),
                            s = Array.from(a.querySelectorAll("[data-name=line]")),
                            i = t.node.state === N.entering || t.node.state === N.entered;
                        null === (r = n.current) || void 0 === r || r.cancel(), o.concat(s).forEach(e => {
                            e.style.opacity = i ? "1" : "0", e.style.strokeDasharray = "", e.style.strokeDashoffset = ""
                        })
                    }, [t]);
                    return {
                        onRender: r
                    }
                },
                nG = (e, t) => {
                    if ("number" == typeof t) return String(t);
                    let n = String(t).trim().replace(/- /g, "-").replace(/\+ /g, "+").replace(/\s{2,}/g, " ").split(" ").reduce((t, n) => {
                        let r = Number(n.replace(/[+\-%]/g, ""));
                        if (0 === r) return t;
                        let a = n.startsWith("-"),
                            o = n.endsWith("%"),
                            s = o ? e * (r / 100) : r;
                        return a ? t - s : t + s
                    }, 0);
                    return String(n)
                },
                nq = (e, t, n) => {
                    if (Array.isArray(n)) {
                        let [r, ...a] = n;
                        if ("H" === r || "h" === r) return `${r} ${nG(e,a[0])}`;
                        if ("V" === r || "v" === r) return `${r} ${nG(t,a[0])}`;
                        if ("A" === r || "a" === r) {
                            let [n, o, s, i, l, c, u] = a, d = [nG(e, n), nG(t, o), s, i, l, nG(e, c), nG(t, u)].join(",");
                            return r + " " + d
                        }
                        let o = a.map((n, r) => nG(r % 2 == 0 ? e : t, n)).join(",");
                        return r + " " + o
                    }
                    return n
                },
                nZ = (e, t, n) => n.map(n => nq(e, t, n)).join(" "),
                nV = (e, t, n, r) => {
                    if (t <= 0 || n <= 0) return;
                    let a = Array.from(e.querySelectorAll("path[data-frame]"));
                    for (let o = 0; o < r.length; o++) {
                        let s = r[o],
                            i = a[o],
                            l = null != i ? i : document.createElementNS("http://www.w3.org/2000/svg", "path"),
                            c = Array.isArray(s),
                            u = c ? s : s.path;
                        if (l.dataset.frame = "", Object.assign(l.style, {
                                vectorEffect: "non-scaling-stroke"
                            }), !c) {
                            let {
                                name: e,
                                id: t,
                                className: n,
                                style: r
                            } = s;
                            l.dataset.name !== e && (l.dataset.name = e), l.id !== t && (l.id = t || ""), l.classList.value !== n && (l.classList.value = n || ""), Object.assign(l.style, r)
                        }
                        l.setAttribute("d", nZ(t, n, u)), l.parentNode !== e && e.appendChild(l)
                    }
                },
                nY = e => {
                    let {
                        paths: t,
                        onRender: n,
                        className: r,
                        style: a,
                        elementRef: s,
                        children: i,
                        ...l
                    } = e, c = (0, tu.useRef)(null), u = (0, tu.useCallback)((e, r, a) => {
                        t && nV(e, r, a, t), null == n || n(e, r, a)
                    }, [t]);
                    return nU(c, u), tu.createElement("svg", {
                        role: "presentation",
                        ref: tf(c, s),
                        className: o("arwes-react-frames-framesvg", r),
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        style: {
                            position: "absolute",
                            zIndex: -1,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            ...a
                        },
                        ...l
                    }, i)
                },
                nX = tp(nY),
                nK = e => e.map((e, t) => [0 === t ? "M" : "L", ...e]),
                nQ = e => {
                    let {
                        leftTop: t = !0,
                        rightTop: n = !0,
                        rightBottom: r = !0,
                        leftBottom: a = !0,
                        squareSize: s = 16,
                        strokeWidth: i = 1,
                        padding: l = 0,
                        className: c,
                        ...u
                    } = e, d = (0, tu.useMemo)(() => {
                        let e = i / 2,
                            o = {
                                stroke: "currentcolor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: String(i),
                                fill: "none"
                            },
                            c = t ? [
                                [s + e + l, e + l],
                                [e + l, s + e + l]
                            ] : [
                                [e + l, e + l]
                            ],
                            u = a ? [
                                [e + l, `100% - ${s+l}`],
                                [s + e + l, `100% - ${e+l}`]
                            ] : [
                                [e + l, `100% - ${e+l}`]
                            ],
                            d = r ? [
                                [`100% - ${s+e+l}`, `100% - ${e+l}`],
                                [`100% - ${e+l}`, `100% - ${s+e+l}`]
                            ] : [
                                [`100% - ${e+l}`, `100% - ${e+l}`]
                            ],
                            p = n ? [
                                [`100% - ${e+l}`, s - e + l],
                                [`100% - ${s-e+l}`, e + l]
                            ] : [
                                [`100% - ${e+l}`, e + l]
                            ],
                            f = nK([...c, ...u, d[0]]),
                            g = nK([...d, ...p, c[0]]),
                            m = [{
                                name: "bg",
                                style: {
                                    strokeWidth: 0,
                                    fill: "currentcolor"
                                },
                                path: f.concat(g)
                            }, {
                                name: "line",
                                style: o,
                                path: f
                            }, {
                                name: "line",
                                style: o,
                                path: g
                            }];
                        return m
                    }, [t, n, r, a, s, i, l]);
                    return tu.createElement(nX, { ...u,
                        className: o("arwes-react-frames-framesvgoctagon", c),
                        paths: d
                    })
                },
                nJ = tp(nQ),
                n0 = e => {
                    let {
                        squareSize: t = 16,
                        strokeWidth: n = 1,
                        inverted: r,
                        className: a,
                        ...s
                    } = e, i = (0, tu.useMemo)(() => {
                        let e = n / 2;
                        return [{
                            name: "bg",
                            style: {
                                strokeWidth: 0,
                                fill: "currentcolor"
                            },
                            path: [
                                ["M", 0, 0],
                                ["L", 0, "100%"],
                                ["L", `100% - ${t}`, "100%"],
                                ["L", "100%", `100% - ${t}`],
                                ["L", "100%", 0]
                            ]
                        }, {
                            name: "line",
                            style: {
                                stroke: "currentcolor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: String(n),
                                fill: "none"
                            },
                            path: [
                                ["M", e, `100% - ${e}`],
                                ["L", `100% - ${t}`, `100% - ${e}`],
                                ["L", `100% - ${e}`, `100% - ${t-e}`]
                            ]
                        }]
                    }, [t, n, r]);
                    return tu.createElement(nX, { ...s,
                        className: o("arwes-react-frames-framesvgunderline", a),
                        paths: i
                    })
                };
            tp(n0);
            let n1 = e => {
                let {
                    strokeWidth: t = 1,
                    cornerLength: n = 16,
                    className: r,
                    ...a
                } = e, s = (0, tu.useMemo)(() => {
                    let e = t / 2,
                        r = {
                            name: "bg",
                            style: {
                                strokeWidth: 0,
                                fill: "currentcolor"
                            },
                            path: [
                                ["M", t, t],
                                ["L", t, `100% - ${t}`],
                                ["L", `100% - ${t}`, `100% - ${t}`],
                                ["L", `100% - ${t}`, t]
                            ]
                        },
                        a = [
                            [
                                ["M", e, e],
                                ["L", e, n]
                            ],
                            [
                                ["M", e, e],
                                ["L", n, e]
                            ],
                            [
                                ["M", `100% - ${e}`, e],
                                ["L", `100% - ${n}`, e]
                            ],
                            [
                                ["M", `100% - ${e}`, e],
                                ["L", `100% - ${e}`, n]
                            ],
                            [
                                ["M", `100% - ${e}`, `100% - ${e}`],
                                ["L", `100% - ${n}`, `100% - ${e}`]
                            ],
                            [
                                ["M", `100% - ${e}`, `100% - ${e}`],
                                ["L", `100% - ${e}`, `100% - ${n}`]
                            ],
                            [
                                ["M", e, `100% - ${e}`],
                                ["L", e, `100% - ${n}`]
                            ],
                            [
                                ["M", e, `100% - ${e}`],
                                ["L", n, `100% - ${e}`]
                            ]
                        ],
                        o = a.map(e => ({
                            name: "line",
                            style: {
                                stroke: "currentcolor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: String(t),
                                fill: "none"
                            },
                            path: e
                        }));
                    return [r, ...o]
                }, [t, n]);
                return tu.createElement(nX, { ...a,
                    className: o("arwes-react-frames-framesvgcorners", r),
                    paths: s
                })
            };
            tp(n1);
            let n2 = e => {
                    let {
                        largeLineWidth: t = 1,
                        smallLineWidth: n = 1,
                        smallLineLength: r = 16,
                        className: a,
                        ...s
                    } = e, i = (0, tu.useMemo)(() => {
                        let e = {
                                strokeLinecap: "square",
                                stroke: "currentcolor",
                                fill: "none"
                            },
                            a = t / 2,
                            o = n / 2,
                            s = [
                                [
                                    ["M", a, a],
                                    ["L", "50% + 0.1", a]
                                ],
                                [
                                    ["M", `100% - ${a}`, a],
                                    ["L", "50% - 0.1", a]
                                ],
                                [
                                    ["M", a, `100% - ${a}`],
                                    ["L", "50% + 0.1", `100% - ${a}`]
                                ],
                                [
                                    ["M", `100% - ${a}`, `100% - ${a}`],
                                    ["L", "50% - 0.1", `100% - ${a}`]
                                ]
                            ],
                            i = [
                                [
                                    ["M", o, t + o],
                                    ["L", r + o, t + o]
                                ],
                                [
                                    ["M", `100% - ${o}`, t + o],
                                    ["L", `100% - ${r+o}`, t + o]
                                ],
                                [
                                    ["M", o, `100% - ${t+o}`],
                                    ["L", r + o, `100% - ${t+o}`]
                                ],
                                [
                                    ["M", `100% - ${o}`, `100% - ${t+o}`],
                                    ["L", `100% - ${r+o}`, `100% - ${t+o}`]
                                ]
                            ];
                        return [{
                            name: "bg",
                            style: {
                                strokeWidth: 0,
                                fill: "currentcolor"
                            },
                            path: [
                                ["M", 0, 0],
                                ["L", 0, "100%"],
                                ["L", "100%", "100%"],
                                ["L", "100%", 0]
                            ]
                        }, ...s.map(n => ({
                            name: "line",
                            style: { ...e,
                                strokeWidth: String(t)
                            },
                            path: n
                        })), ...i.map(t => ({
                            name: "line",
                            style: { ...e,
                                strokeWidth: String(n)
                            },
                            path: t
                        }))]
                    }, [t, n, r]);
                    return tu.createElement(nX, { ...s,
                        className: o("arwes-react-frames-framesvglines", a),
                        paths: i
                    })
                },
                n5 = tp(n2),
                n3 = e => e.map((e, t) => [0 === t ? "M" : "L", ...e]),
                n4 = e => {
                    let {
                        squareSize: t = 16,
                        strokeWidth: n = 1,
                        smallLineLength: r = 16,
                        largeLineLength: a = 64,
                        padding: s = 0,
                        className: i,
                        ...l
                    } = e, c = (0, tu.useMemo)(() => {
                        let e = n / 2,
                            o = {
                                stroke: "currentcolor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: String(n),
                                fill: "none"
                            },
                            i = [
                                [e + s, r + t + e + s],
                                [e + s, t + e + s],
                                [t + e + s, e + s],
                                [t + a + e + s, e + s]
                            ],
                            l = [
                                [`100% - ${e+s}`, `100% - ${r+t+e+s}`],
                                [`100% - ${e+s}`, `100% - ${t+e+s}`],
                                [`100% - ${t+e+s}`, `100% - ${e+s}`],
                                [`100% - ${t+a+e+s}`, `100% - ${e+s}`]
                            ],
                            c = [{
                                name: "bg",
                                style: {
                                    strokeWidth: 0,
                                    fill: "currentcolor"
                                },
                                path: n3(i.concat([
                                    [`100% - ${e+s}`, e + s]
                                ]).concat(l).concat([
                                    [e + s, `100% - ${e+s}`]
                                ]))
                            }, {
                                name: "line",
                                style: o,
                                path: n3(i)
                            }, {
                                name: "line",
                                style: o,
                                path: n3(l)
                            }];
                        return c
                    }, [r, a, t, n, s]);
                    return tu.createElement(nX, { ...l,
                        className: o("arwes-react-frames-framesvgnefrex", i),
                        paths: c
                    })
                },
                n6 = tp(n4),
                n8 = e => e.map((e, t) => [0 === t ? "M" : "L", ...e]),
                n7 = e => {
                    let {
                        squareSize: t = 16,
                        strokeWidth: n = 1,
                        smallLineLength: r = 16,
                        largeLineLength: a = 64,
                        padding: s = 0,
                        className: i,
                        ...l
                    } = e, c = (0, tu.useMemo)(() => {
                        let e = n / 2,
                            o = {
                                stroke: "currentcolor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: String(n),
                                fill: "none"
                            },
                            i = [
                                [e + s + 2 * t, `100% - ${e+s}`],
                                [e + s + t, `100% - ${e+s+t}`],
                                [e + s + t, e + s + a + 3 * t + r],
                                [e + s, e + s + a + 2 * t + r],
                                [e + s, e + s + 2 * t + r],
                                [e + s + t, e + s + r + t],
                                [e + s + t, e + s + t],
                                [e + s + 2 * t, e + s],
                                [`100% - ${e+s+2*t}`, e + s]
                            ],
                            l = [
                                [`100% - ${e+s+2*t}`, e + s],
                                [`100% - ${e+s+t}`, e + s + t],
                                [`100% - ${e+s+t}`, `100% - ${e+s+3*t+r+a}`],
                                [`100% - ${e+s}`, `100% - ${e+s+2*t+r+a}`],
                                [`100% - ${e+s}`, `100% - ${e+s+2*t+r}`],
                                [`100% - ${e+s+t}`, `100% - ${e+s+t+r}`],
                                [`100% - ${e+s+t}`, `100% - ${e+s+t}`],
                                [`100% - ${e+s+2*t}`, `100% - ${e+s}`],
                                [e + s + 2 * t, `100% - ${e+s}`]
                            ],
                            c = [{
                                name: "bg",
                                style: {
                                    strokeWidth: 0,
                                    fill: "currentcolor"
                                },
                                path: n8(i.concat(l))
                            }, {
                                name: "line",
                                style: o,
                                path: n8(i)
                            }, {
                                name: "line",
                                style: o,
                                path: n8(l)
                            }];
                        return c
                    }, [r, a, t, n, s]);
                    return tu.createElement(nX, { ...l,
                        className: o("arwes-react-frames-framesvgkranox", i),
                        paths: c
                    })
                },
                n9 = tp(n7),
                re = e => {
                    let {
                        color: t = "hsl(0 0% 50% / 5%)",
                        size: n = 300,
                        className: r,
                        style: a
                    } = e, s = (0, tu.useId)(), i = (0, tu.useRef)(null);
                    return (0, tu.useEffect)(() => {
                        var e;
                        let t = i.current,
                            r = null === (e = t.parentElement) || void 0 === e ? void 0 : e.parentElement;
                        t.style.transform = `translate(-${n/2}px, -${n/2}px)`;
                        let a = e => {
                                let a = r.getBoundingClientRect(),
                                    o = e.clientX - a.left + n / 2,
                                    s = e.clientY - a.top + n / 2;
                                t.style.opacity = "1", t.setAttribute("cx", String(o)), t.setAttribute("cy", String(s))
                            },
                            o = () => {
                                t.style.opacity = "0"
                            };
                        return document.addEventListener("mousemove", a), document.addEventListener("mouseleave", o), () => {
                            document.removeEventListener("mousemove", a), document.removeEventListener("mouseleave", o)
                        }
                    }, [t, n]), tu.createElement("g", {
                        className: o("arwes-react-frames-illuminatorsvg", r),
                        style: {
                            pointerEvents: "none",
                            ...a
                        }
                    }, tu.createElement("defs", null, tu.createElement("radialGradient", {
                        id: s
                    }, tu.createElement("stop", {
                        offset: "0%",
                        stopColor: t
                    }), tu.createElement("stop", {
                        offset: "100%",
                        stopColor: "transparent"
                    }))), tu.createElement("circle", {
                        ref: i,
                        r: n / 2,
                        style: {
                            position: "absolute",
                            transition: "opacity 200ms ease-out",
                            opacity: 0
                        },
                        fill: `url(#${s})`
                    }))
                };
            tp(re);
            let rt = e => {
                    let {
                        color: t = "hsl(0 0% 50% / 5%)",
                        size: n = 300,
                        className: r,
                        style: a
                    } = e, s = (0, tu.useRef)(null);
                    return (0, tu.useEffect)(() => {
                        let e = s.current,
                            t = e.parentElement,
                            n = n => {
                                let r = t.getBoundingClientRect(),
                                    a = n.clientX - r.left,
                                    o = n.clientY - r.top;
                                e.style.opacity = "1", e.style.transform = `translate(calc(${a}px - 50%), calc(${o}px - 50%))`
                            },
                            r = () => {
                                e.style.opacity = "0"
                            };
                        return document.addEventListener("mousemove", n), document.addEventListener("mouseleave", r), () => {
                            document.removeEventListener("mousemove", n), document.removeEventListener("mouseleave", r)
                        }
                    }, []), tu.createElement("div", {
                        role: "presentation",
                        className: o("arwes-react-frames-illuminator", r),
                        style: {
                            position: "absolute",
                            width: n,
                            height: n,
                            transition: "opacity 200ms ease-out",
                            opacity: 0,
                            pointerEvents: "none",
                            borderRadius: "50%",
                            background: `radial-gradient(${t} 0%, transparent 70%)`,
                            ...a
                        },
                        ref: s
                    })
                },
                rn = tp(rt),
                rr = (e, t, n, r) => Math.sqrt((n - e) ** 2 + (r - t) ** 2),
                ra = (e, t, n, r, a) => {
                    switch (a) {
                        case "left":
                            return n / e;
                        case "right":
                            return 1 - n / e;
                        case "top":
                            return r / t;
                        case "bottom":
                            return 1 - r / t;
                        case "center":
                            a = [.5, .5]
                    }
                    let [o, s] = a, i = e * o, l = t * s, c = rr(n, r, i, l), u = rr(i, l, i < e / 2 ? e : 0, l < t / 2 ? t : 0);
                    return c / u
                },
                {
                    entering: ro,
                    exiting: rs
                } = N,
                ri = {
                    color: "#777",
                    type: "box",
                    distance: 30,
                    size: 4,
                    origin: "center"
                },
                rl = e => {
                    let t = { ...ri,
                            ...e
                        },
                        {
                            elementRef: n,
                            className: r,
                            style: a
                        } = t,
                        s = tv(),
                        i = (0, tu.useRef)(null),
                        l = (0, tu.useRef)(t);
                    return l.current = t, (0, tu.useEffect)(() => {
                        let e, t;
                        if (!s) return;
                        let n = () => {
                                null == e || e.cancel(), null == t || t.disconnect()
                            },
                            r = r => {
                                if (r.state !== ro && r.state !== rs) return;
                                n();
                                let a = r.state === ro,
                                    {
                                        duration: o
                                    } = r.control.getSettings(),
                                    s = (a ? null == o ? void 0 : o.enter : null == o ? void 0 : o.exit) || 0,
                                    c = i.current,
                                    u = c.getContext("2d"),
                                    d = e => {
                                        let {
                                            color: t,
                                            type: n,
                                            distance: r,
                                            size: o,
                                            origin: s,
                                            originInverted: i
                                        } = l.current, d = c.clientWidth, p = c.clientHeight, f = 1 + Math.floor(d / r), g = 1 + Math.floor(p / r), m = d % r, h = p % r;
                                        (c.width !== d || c.height !== p) && (c.width = d, c.height = p), u.clearRect(0, 0, d, p);
                                        for (let l = 0; l < f; l++) {
                                            let c = m / 2 + l * r;
                                            for (let l = 0; l < g; l++) {
                                                let f = h / 2 + l * r,
                                                    g = ra(d, p, c, f, s),
                                                    m = a && i || !a && !i ? 1 - g : g,
                                                    y = e / m,
                                                    b = Math.max(0, Math.min(1, y));
                                                u.beginPath(), u.globalAlpha = a ? b : 1 - b, "box" === n ? u.rect(c - o / 2, f - o / 2, o, o) : u.arc(c, f, o, 0, 2 * Math.PI), u.fillStyle = t, u.fill(), u.closePath()
                                            }
                                        }
                                    };
                                e = tr(d, {
                                    duration: s,
                                    easing: "ease-in-out"
                                }), window.ResizeObserver && (t = new window.ResizeObserver(() => {
                                    let t = (null == e ? void 0 : e.currentTime) || 0;
                                    a && t >= s && d(1)
                                })).observe(c)
                            };
                        return s.node.subscribers.add(r), () => {
                            s.node.subscribers.delete(r), n()
                        }
                    }, [s]), tu.createElement("canvas", {
                        role: "presentation",
                        ref: tf(i, n),
                        className: o("arwes-react-bgs-dots", r),
                        style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            ...a
                        }
                    })
                },
                rc = tp(rl),
                {
                    entering: ru,
                    entered: rd,
                    exiting: rp,
                    exited: rf
                } = N,
                rg = e => Math.min(1, Math.max(0, 1 === e ? 1 : e % 1)),
                rm = {
                    padding: 50,
                    xOffset: [0, 0],
                    yOffset: [-10, -100],
                    radiusInitial: 4,
                    radiusOffset: [4, 40],
                    sets: 5
                },
                rh = e => {
                    let t = { ...rm,
                            ...e
                        },
                        {
                            elementRef: n,
                            className: r,
                            style: a
                        } = t,
                        s = tv(),
                        i = (0, tu.useRef)(null),
                        l = (0, tu.useRef)(t);
                    return l.current = t, (0, tu.useEffect)(() => {
                        let e, t, n;
                        if (!s) return;
                        let r = i.current,
                            a = r.getContext("2d"),
                            o = () => {
                                null == e || e.cancel(), null == t || t.cancel(), window.clearTimeout(n)
                            },
                            c = s => {
                                let i = s.state,
                                    {
                                        duration: c
                                    } = s.control.getSettings();
                                switch (i) {
                                    case ru:
                                        {
                                            o();
                                            let {
                                                color: s,
                                                quantity: i,
                                                padding: u,
                                                xOffset: d,
                                                yOffset: p,
                                                radiusInitial: f,
                                                radiusOffset: g,
                                                sets: m
                                            } = l.current,
                                            h = Math.round(i / m),
                                            y = 1 / m,
                                            b = (e, t) => {
                                                let n = d[0] + Math.random() * d[1],
                                                    r = p[0] + Math.random() * p[1],
                                                    a = g[0] + Math.random() * g[1];
                                                return {
                                                    x: u + Math.random() * (e - 2 * u),
                                                    y: u + Math.random() * (t - 2 * u),
                                                    r: f,
                                                    xo: n,
                                                    yo: r,
                                                    ro: a
                                                }
                                            },
                                            v = (e, t) => Array(m).fill(null).map(() => Array(h).fill(null).map(() => b(e, t))),
                                            x = (e, t) => {
                                                a.globalAlpha = t <= .5 ? 2 * t : -2 * t + 2, e.forEach(e => {
                                                    let n = e.x + t * e.xo,
                                                        r = e.y + t * e.yo,
                                                        o = e.r + t * e.ro,
                                                        i = a.createRadialGradient(n, r, 0, n, r, o);
                                                    i.addColorStop(0, s), i.addColorStop(1, "transparent"), a.beginPath(), a.fillStyle = i, a.arc(n, r, o, 0, 2 * Math.PI), a.fill(), a.closePath()
                                                })
                                            },
                                            w = [],
                                            k = e => {
                                                let t = r.clientWidth,
                                                    n = r.clientHeight,
                                                    o = r.width !== t || r.height !== n;
                                                (o || !w.length) && (w = v(t, n)), r.width = t, r.height = n, a.clearRect(0, 0, t, n), w.forEach((t, n) => {
                                                    let r = rg(e + y * n);
                                                    x(t, X.outSine(r))
                                                })
                                            };e = tr(r, {
                                                opacity: [0, 1]
                                            }, {
                                                duration: null == c ? void 0 : c.enter
                                            });
                                            let E = () => {
                                                t = tr(e => {
                                                    if (k(e), e >= 1) {
                                                        let e = 1e3 * ((null == c ? void 0 : c.intervalPause) || 0);
                                                        window.clearTimeout(n), window.setTimeout(E, e)
                                                    }
                                                }, {
                                                    duration: null == c ? void 0 : c.interval,
                                                    easing: "linear"
                                                })
                                            };E();
                                            break
                                        }
                                    case rd:
                                        break;
                                    case rp:
                                        null == e || e.cancel(), e = tr(r, {
                                            opacity: [1, 0]
                                        }, {
                                            duration: null == c ? void 0 : c.exit
                                        });
                                        break;
                                    case rf:
                                        o(), r.style.opacity = "0"
                                }
                            };
                        return s.node.subscribers.add(c), () => {
                            s.node.subscribers.delete(c), o()
                        }
                    }, [s]), tu.createElement("canvas", {
                        role: "presentation",
                        ref: tf(i, n),
                        className: o("arwes-react-bgs-puffs", r),
                        style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            ...a
                        }
                    })
                },
                ry = tp(rh),
                {
                    entering: rb,
                    exiting: rv
                } = N,
                rx = {
                    lineWidth: 1,
                    lineColor: "#777",
                    horizontalLineDash: [4],
                    verticalLineDash: [],
                    distance: 30
                },
                rw = e => {
                    let t = { ...rx,
                            ...e
                        },
                        {
                            elementRef: n,
                            className: r,
                            style: a
                        } = t,
                        s = tv(),
                        i = (0, tu.useRef)(null),
                        l = (0, tu.useRef)(t);
                    return l.current = t, (0, tu.useEffect)(() => {
                        let e, t;
                        if (!s) return;
                        let n = i.current,
                            r = n.getContext("2d"),
                            a = () => {
                                let {
                                    lineWidth: e,
                                    lineColor: t,
                                    horizontalLineDash: a,
                                    verticalLineDash: o,
                                    distance: s
                                } = l.current, i = n.clientWidth, c = n.clientHeight, u = 1 + Math.floor(i / s), d = 1 + Math.floor(c / s), p = i % s, f = c % s;
                                n.width = i, n.height = c, r.clearRect(0, 0, i, c), r.lineWidth = e, r.strokeStyle = t, r.setLineDash(a);
                                for (let e = 0; e < d; e++) {
                                    let t = f / 2 + e * s;
                                    r.beginPath(), r.moveTo(0, t), r.lineTo(i, t), r.stroke(), r.closePath()
                                }
                                r.setLineDash(o);
                                for (let e = 0; e < u; e++) {
                                    let t = p / 2 + e * s;
                                    r.beginPath(), r.moveTo(t, 0), r.lineTo(t, c), r.stroke(), r.closePath()
                                }
                            },
                            o = t => {
                                let r = t.state,
                                    {
                                        duration: o
                                    } = t.control.getSettings();
                                switch (r) {
                                    case rb:
                                        a(), e = tr(n, {
                                            opacity: [0, 1]
                                        }, {
                                            duration: null == o ? void 0 : o.enter,
                                            easing: "ease-out"
                                        });
                                        break;
                                    case rv:
                                        e = tr(n, {
                                            opacity: [1, 0]
                                        }, {
                                            duration: null == o ? void 0 : o.exit,
                                            easing: "ease-out"
                                        })
                                }
                            };
                        return s.node.subscribers.add(o), window.ResizeObserver && !t && (t = new window.ResizeObserver(() => a())).observe(n), () => {
                            s.node.subscribers.delete(o), null == e || e.cancel(), null == t || t.disconnect()
                        }
                    }, [s]), tu.createElement("canvas", {
                        role: "presentation",
                        ref: tf(i, n),
                        className: o("arwes-react-bgs-gridlines", r),
                        style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            ...a
                        }
                    })
                };
            tp(rw);
            let {
                entering: rk,
                exiting: rE,
                exited: rS
            } = N, rj = (e, t) => (t - e) * Math.random(), rA = e => Math.min(1, Math.max(0, 1 === e ? 1 : e % 1)), rO = e => {
                let {
                    distance: t,
                    positionsLength: n,
                    margin: r,
                    size: a
                } = e, o = Math.floor(rj(.1, .5) * n), s = Array(n).fill(0).map((e, t) => t), l = i(s), c = l.slice(0, o);
                return c.map(e => {
                    let n = Math.floor(rj(.1, .5) * a);
                    return {
                        axis1: r / 2 + e * t,
                        axis2Initial: Math.random() * (a / 2),
                        length: n
                    }
                })
            }, rC = {
                lineWidth: 1,
                lineColor: "#777",
                distance: 30,
                sets: 5
            }, rL = e => {
                let t = { ...rC,
                        ...e
                    },
                    {
                        elementRef: n,
                        className: r,
                        style: a
                    } = t,
                    s = tv(),
                    i = (0, tu.useRef)(null),
                    l = (0, tu.useRef)(t);
                return l.current = t, (0, tu.useEffect)(() => {
                    let e, t;
                    if (!s) return;
                    let n = i.current,
                        r = n.getContext("2d"),
                        a = [],
                        o = e => {
                            let {
                                lineWidth: t,
                                lineColor: o,
                                distance: s,
                                sets: i
                            } = l.current, c = n.clientWidth, u = n.clientHeight, d = n.width !== c || n.height !== u, p = 1 + Math.floor(c / s), f = c % s;
                            n.width = c, n.height = u, r.clearRect(0, 0, c, u), r.lineWidth = t, r.strokeStyle = o, r.shadowBlur = t, r.shadowOffsetX = 0, r.shadowOffsetY = 0, r.shadowColor = o, (0 === a.length || d) && (a = Array(i).fill(null).map(() => rO({
                                positionsLength: p,
                                margin: f,
                                distance: s,
                                size: u
                            }))), a.forEach((t, n) => {
                                let a = rA(e + 1 / i * n),
                                    o = X.inOutCubic(a);
                                t.forEach(e => {
                                    let {
                                        axis1: t,
                                        axis2Initial: n,
                                        length: a
                                    } = e, s = 2 * u * o - u;
                                    r.beginPath(), r.moveTo(t, u - (n + s)), r.lineTo(t, u - (n + a + s)), r.stroke(), r.closePath()
                                })
                            })
                        },
                        c = r => {
                            let a = r.state,
                                {
                                    duration: s
                                } = r.control.getSettings();
                            switch (a) {
                                case rk:
                                    e = tr(n, {
                                        opacity: [0, 1]
                                    }, {
                                        duration: s.enter,
                                        easing: "ease-out"
                                    }), t = tr(o, {
                                        duration: s.interval || 10,
                                        easing: "linear",
                                        repeat: 1 / 0
                                    });
                                    break;
                                case rE:
                                    e = tr(n, {
                                        opacity: [1, 0]
                                    }, {
                                        duration: s.exit,
                                        easing: "ease-out"
                                    });
                                    break;
                                case rS:
                                    null == t || t.cancel()
                            }
                        };
                    return s.node.subscribers.add(c), () => {
                        s.node.subscribers.delete(c), null == e || e.cancel(), null == t || t.cancel()
                    }
                }, [s]), tu.createElement("canvas", {
                    role: "presentation",
                    ref: tf(i, n),
                    className: o("arwes-react-bgs-movinglines", r),
                    style: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        display: "block",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        ...a
                    }
                })
            };
            tp(rL);
            let rN = e => {
                    let {
                        id: t,
                        transitions: n,
                        continuous: r
                    } = e, a = (0, tu.useId)(), o = (0, tu.useRef)(n), s = tv(), i = tD();
                    o.current = n;
                    let l = t || a;
                    return (0, tu.useEffect)(() => {
                        if (!s) return;
                        let e = null,
                            t = s.node.subscribe(t => {
                                let n = o.current[t.state];
                                r || null == e || e.stop(l);
                                let a = i[n];
                                a && (null == e || e.stop(l), (e = a).play(l))
                            });
                        return () => {
                            t(), null == e || e.stop(l)
                        }
                    }, [l, s, i]), tu.createElement(tu.Fragment, null)
                },
                rR = tp(rN)
        },
        9436: function(e) {
            "use strict";
            e.exports = JSON.parse('{"i8":"1.0.0-alpha.23"}')
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6570), t(8111)
        }), _N_E = e.O()
    }
]);
