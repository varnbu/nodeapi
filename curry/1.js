!function (e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : e()
}(function () {
    function e () {
        this.sendingData = 0, this.sendingItemKeys = []
    }

    try {
        var t = {};
        t.modules = {};
        var r = t._ = {};
        (function () {
            function e (a, n) {
                function i (e, t) {
                    try {
                        e()
                    } catch (r) {
                        t && t()
                    }
                }

                function s (e) {
                    if (null != s[e]) return s[e];
                    var t;
                    if ("bug-string-char-index" == e) t = "a" != "a"[0]; else if ("json" == e) t = s("json-stringify") && s("date-serialization") && s("json-parse"); else if ("date-serialization" == e) {
                        if (t = s("json-stringify") && w) {
                            var r = n.stringify;
                            i(function () {
                                t = '"-271821-04-20T00:00:00.000Z"' == r(new p((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == r(new p(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new p((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == r(new p((-1)))
                            })
                        }
                    } else {
                        var a, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == e) {
                            var r = n.stringify, u = "function" == typeof r;
                            u && ((a = function () {
                                return 1
                            }).toJSON = a, i(function () {
                                u = "0" === r(0) && "0" === r(new c) && '""' == r(new l) && r(v) === h && r(h) === h && r() === h && "1" === r(a) && "[1]" == r([a]) && "[null]" == r([h]) && "null" == r(null) && "[null,null,null]" == r([h, v, null]) && r({a: [a, !0, !1, null, "\0\b\n\f\r\t"]}) == o && "1" === r(null, a) && "[\n 1,\n 2\n]" == r([1, 2], null, 1)
                            }, function () {
                                u = !1
                            })), t = u
                        }
                        if ("json-parse" == e) {
                            var d, f = n.parse;
                            "function" == typeof f && i(function () {
                                0 !== f("0") || f(!1) || (a = f(o), d = 5 == a.a.length && 1 === a.a[0], d && (i(function () {
                                    d = !f('"\t"')
                                }), d && i(function () {
                                    d = 1 !== f("01")
                                }), d && i(function () {
                                    d = 1 !== f("1.")
                                })))
                            }, function () {
                                d = !1
                            }), t = d
                        }
                    }
                    return s[e] = !!t
                }

                function o (e) {
                    return $(this)
                }

                a || (a = r.Object()), n || (n = r.Object());
                var c = a.Number || r.Number, l = a.String || r.String, u = a.Object || r.Object, p = a.Date || r.Date,
                    d = a.SyntaxError || r.SyntaxError, f = a.TypeError || r.TypeError, _ = a.Math || r.Math,
                    g = a.JSON || r.JSON;
                "object" == typeof g && g && (n.stringify = g.stringify, n.parse = g.parse);
                var h, m = u.prototype, v = m.toString, y = m.hasOwnProperty, w = new p((-0xc782b5b800cec));
                if (i(function () {
                    w = w.getUTCFullYear() == -109252 && 0 === w.getUTCMonth() && 1 === w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
                }), s["bug-string-char-index"] = s["date-serialization"] = s.json = s["json-stringify"] = s["json-parse"] = null, !s("json")) {
                    var b = "[object Function]", S = "[object Date]", k = "[object Number]", j = "[object String]",
                        O = "[object Array]", P = "[object Boolean]", N = s("bug-string-char-index"),
                        A = function (e, r) {
                            var a, n, i, s = 0;
                            (a = function () {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, n = new a;
                            for (i in n) y.call(n, i) && s++;
                            return a = n = null, s ? A = function (e, t) {
                                var r, a, n = v.call(e) == b;
                                for (r in e) n && "prototype" == r || !y.call(e, r) || (a = "constructor" === r) || t(r);
                                (a || y.call(e, r = "constructor")) && t(r)
                            } : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], A = function (e, r) {
                                var a, i, s = v.call(e) == b,
                                    o = !s && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty || y;
                                for (a in e) s && "prototype" == a || !o.call(e, a) || r(a);
                                for (i = n.length; a = n[--i];) o.call(e, a) && r(a)
                            }), A(e, r)
                        };
                    if (!s("json-stringify") && !s("date-serialization")) {
                        var D = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                            x = "000000", C = function (e, t) {
                                return (x + (t || 0)).slice(-e)
                            }, $ = function (e) {
                                var t, r, a, n, i, s, o, c, l;
                                if (w) t = function (e) {
                                    r = e.getUTCFullYear(), a = e.getUTCMonth(), n = e.getUTCDate(), s = e.getUTCHours(), o = e.getUTCMinutes(), c = e.getUTCSeconds(), l = e.getUTCMilliseconds()
                                }; else {
                                    var u = _.floor, p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        d = function (e, t) {
                                            return p[t] + 365 * (e - 1970) + u((e - 1969 + (t = +(t > 1))) / 4) - u((e - 1901 + t) / 100) + u((e - 1601 + t) / 400)
                                        };
                                    t = function (e) {
                                        for (n = u(e / 864e5), r = u(n / 365.2425) + 1970 - 1; d(r + 1, 0) <= n; r++) ;
                                        for (a = u((n - d(r, 0)) / 30.42); d(r, a + 1) <= n; a++) ;
                                        n = 1 + n - d(r, a), i = (e % 864e5 + 864e5) % 864e5, s = u(i / 36e5) % 24, o = u(i / 6e4) % 60, c = u(i / 1e3) % 60, l = i % 1e3
                                    }
                                }
                                return ($ = function (e) {
                                    return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + C(6, r < 0 ? -r : r) : C(4, r)) + "-" + C(2, a + 1) + "-" + C(2, n) + "T" + C(2, s) + ":" + C(2, o) + ":" + C(2, c) + "." + C(3, l) + "Z", r = a = n = s = o = c = l = null) : e = null, e
                                })(e)
                            };
                        if (s("json-stringify") && !s("date-serialization")) {
                            var I = n.stringify;
                            n.stringify = function (e, t, r) {
                                var a = p.prototype.toJSON;
                                p.prototype.toJSON = o;
                                var n = I(e, t, r);
                                return p.prototype.toJSON = a, n
                            }
                        } else {
                            var T = "\\u00", R = function (e) {
                                var t = e.charCodeAt(0), r = D[t];
                                return r ? r : T + C(2, t.toString(16))
                            }, U = /[\x00-\x1f\x22\x5c]/g, E = function (e) {
                                return U.lastIndex = 0, '"' + (U.test(e) ? e.replace(U, R) : e) + '"'
                            }, H = function (e, t, r, a, n, s, o) {
                                var c, l, u, d, _, g, m, y, w;
                                if (i(function () {
                                    c = t[e]
                                }), "object" == typeof c && c && (c.getUTCFullYear && v.call(c) == S && c.toJSON === p.prototype.toJSON ? c = $(c) : "function" == typeof c.toJSON && (c = c.toJSON(e))), r && (c = r.call(t, e, c)), c == h) return c === h ? c : "null";
                                switch (l = typeof c, "object" == l && (u = v.call(c)), u || l) {
                                    case"boolean":
                                    case P:
                                        return "" + c;
                                    case"number":
                                    case k:
                                        return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                                    case"string":
                                    case j:
                                        return E("" + c)
                                }
                                if ("object" == typeof c) {
                                    for (m = o.length; m--;) if (o[m] === c) throw f();
                                    if (o.push(c), d = [], y = s, s += n, u == O) {
                                        for (g = 0, m = c.length; g < m; g++) _ = H(g, c, r, a, n, s, o), d.push(_ === h ? "null" : _);
                                        w = d.length ? n ? "[\n" + s + d.join(",\n" + s) + "\n" + y + "]" : "[" + d.join(",") + "]" : "[]"
                                    } else A(a || c, function (e) {
                                        var t = H(e, c, r, a, n, s, o);
                                        t !== h && d.push(E(e) + ":" + (n ? " " : "") + t)
                                    }), w = d.length ? n ? "{\n" + s + d.join(",\n" + s) + "\n" + y + "}" : "{" + d.join(",") + "}" : "{}";
                                    return o.pop(), w
                                }
                            };
                            n.stringify = function (e, r, a) {
                                var n, i, s, o;
                                if (t[typeof r] && r) if (o = v.call(r), o == b) i = r; else if (o == O) {
                                    s = {};
                                    for (var c, l = 0, u = r.length; l < u;) c = r[l++], o = v.call(c), "[object String]" != o && "[object Number]" != o || (s[c] = 1)
                                }
                                if (a) if (o = v.call(a), o == k) {
                                    if ((a -= a % 1) > 0) for (a > 10 && (a = 10), n = ""; n.length < a;) n += " "
                                } else o == j && (n = a.length <= 10 ? a : a.slice(0, 10));
                                return H("", (c = {}, c[""] = e, c), i, s, n, "", [])
                            }
                        }
                    }
                    if (!s("json-parse")) {
                        var J, L, B = l.fromCharCode,
                            M = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                            q = function () {
                                throw J = L = null, d()
                            }, F = function () {
                                for (var e, t, r, a, n, i = L, s = i.length; J < s;) switch (n = i.charCodeAt(J)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        J++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e = N ? i.charAt(J) : i[J], J++, e;
                                    case 34:
                                        for (e = "@", J++; J < s;) if (n = i.charCodeAt(J), n < 32) q(); else if (92 == n) switch (n = i.charCodeAt(++J)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                e += M[n], J++;
                                                break;
                                            case 117:
                                                for (t = ++J, r = J + 4; J < r; J++) n = i.charCodeAt(J), n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || q();
                                                e += B("0x" + i.slice(t, J));
                                                break;
                                            default:
                                                q()
                                        } else {
                                            if (34 == n) break;
                                            for (n = i.charCodeAt(J), t = J; n >= 32 && 92 != n && 34 != n;) n = i.charCodeAt(++J);
                                            e += i.slice(t, J)
                                        }
                                        if (34 == i.charCodeAt(J)) return J++, e;
                                        q();
                                    default:
                                        if (t = J, 45 == n && (a = !0, n = i.charCodeAt(++J)), n >= 48 && n <= 57) {
                                            for (48 == n && (n = i.charCodeAt(J + 1), n >= 48 && n <= 57) && q(), a = !1; J < s && (n = i.charCodeAt(J), n >= 48 && n <= 57); J++) ;
                                            if (46 == i.charCodeAt(J)) {
                                                for (r = ++J; r < s && (n = i.charCodeAt(r), !(n < 48 || n > 57)); r++) ;
                                                r == J && q(), J = r
                                            }
                                            if (n = i.charCodeAt(J), 101 == n || 69 == n) {
                                                for (n = i.charCodeAt(++J), 43 != n && 45 != n || J++, r = J; r < s && (n = i.charCodeAt(r), !(n < 48 || n > 57)); r++) ;
                                                r == J && q(), J = r
                                            }
                                            return +i.slice(t, J)
                                        }
                                        a && q();
                                        var o = i.slice(J, J + 4);
                                        if ("true" == o) return J += 4, !0;
                                        if ("fals" == o && 101 == i.charCodeAt(J + 4)) return J += 5, !1;
                                        if ("null" == o) return J += 4, null;
                                        q()
                                }
                                return "$"
                            }, K = function (e) {
                                var t, r;
                                if ("$" == e && q(), "string" == typeof e) {
                                    if ("@" == (N ? e.charAt(0) : e[0])) return e.slice(1);
                                    if ("[" == e) {
                                        for (t = []; e = F(), "]" != e;) r ? "," == e ? (e = F(), "]" == e && q()) : q() : r = !0, "," == e && q(), t.push(K(e));
                                        return t
                                    }
                                    if ("{" == e) {
                                        for (t = {}; e = F(), "}" != e;) r ? "," == e ? (e = F(), "}" == e && q()) : q() : r = !0, "," != e && "string" == typeof e && "@" == (N ? e.charAt(0) : e[0]) && ":" == F() || q(), t[e.slice(1)] = K(F());
                                        return t
                                    }
                                    q()
                                }
                                return e
                            }, V = function (e, t, r) {
                                var a = W(e, t, r);
                                a === h ? delete e[t] : e[t] = a
                            }, W = function (e, t, r) {
                                var a, n = e[t];
                                if ("object" == typeof n && n) if (v.call(n) == O) for (a = n.length; a--;) V(v, A, n, a, r); else A(n, function (e) {
                                    V(n, e, r)
                                });
                                return r.call(e, t, n)
                            };
                        n.parse = function (e, t) {
                            var r, a;
                            return J = 0, L = "" + e, r = K(F()), "$" != F() && q(), J = L = null, t && v.call(t) == b ? W((a = {}, a[""] = r, a), "", t) : r
                        }
                    }
                }
                return n.runInContext = e, n
            }

            var t = {"function": !0, object: !0}, r = t[typeof window] && window || this, a = r.JSON, n = r.JSON3,
                i = !1, s = e(r, r.JSON3 = {
                    noConflict: function () {
                        return i || (i = !0, r.JSON = a, r.JSON3 = n, a = n = null), s
                    }
                });
            r.JSON = {parse: s.parse, stringify: s.stringify}
        }).call(this), function (e, t) {
            t(e)
        }(window, function (e) {
            if (e.atob) try {
                e.atob(" ")
            } catch (r) {
                e.atob = function (e) {
                    var t = function (t) {
                        return e(String(t).replace(/[\t\n\f\r ]+/g, ""))
                    };
                    return t.original = e, t
                }(e.atob)
            } else {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
                e.btoa = function (e) {
                    e = String(e);
                    for (var r, n, i, s, o = "", c = 0, l = e.length % 3; c < e.length;) ((n = e.charCodeAt(c++)) > 255 || (i = e.charCodeAt(c++)) > 255 || (s = e.charCodeAt(c++)) > 255) && t.log("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."), r = n << 16 | i << 8 | s, o += a.charAt(r >> 18 & 63) + a.charAt(r >> 12 & 63) + a.charAt(r >> 6 & 63) + a.charAt(63 & r);
                    return l ? o.slice(0, l - 3) + "===".substring(l) : o
                }, e.atob = function (e) {
                    e = String(e).replace(/[\t\n\f\r ]+/g, ""), n.test(e) || t.log("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."), e += "==".slice(2 - (3 & e.length));
                    for (var r, i, s, o = "", c = 0; c < e.length;) r = a.indexOf(e.charAt(c++)) << 18 | a.indexOf(e.charAt(c++)) << 12 | (i = a.indexOf(e.charAt(c++))) << 6 | (s = a.indexOf(e.charAt(c++))), o += 64 === i ? String.fromCharCode(r >> 16 & 255) : 64 === s ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, 255 & r);
                    return o
                }
            }
        }), String.prototype.replaceAll || (String.prototype.replaceAll = function (e, t) {
            return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replace(new RegExp(e, "g"), t)
        }), function () {
            var e = Array.prototype, a = Function.prototype, n = Object.prototype, i = e.slice, s = n.toString,
                o = n.hasOwnProperty, c = (a.bind, e.forEach), l = (e.indexOf, Array.isArray), u = {},
                p = r.each = function (e, t, a) {
                    if (null == e) return !1;
                    if (c && e.forEach === c) e.forEach(t, a); else if (r.isArray(e) && e.length === +e.length) {
                        for (var n = 0, i = e.length; n < i; n++) if (n in e && t.call(a, e[n], n, e) === u) return !1
                    } else for (var s in e) if (o.call(e, s) && t.call(a, e[s], s, e) === u) return !1
                };
            r.map = function (e, t) {
                var r = [];
                return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (p(e, function (e, a, n) {
                    r.push(t(e, a, n))
                }), r)
            }, r.extend = function (e) {
                return p(i.call(arguments, 1), function (t) {
                    for (var r in t) o.call(t, r) && void 0 !== t[r] && (e[r] = t[r])
                }), e
            }, r.extend2Lev = function (e) {
                return p(i.call(arguments, 1), function (t) {
                    for (var a in t) void 0 !== t[a] && (r.isObject(t[a]) && r.isObject(e[a]) ? r.extend(e[a], t[a]) : e[a] = t[a])
                }), e
            }, r.coverExtend = function (e) {
                return p(i.call(arguments, 1), function (t) {
                    for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
                }), e
            }, r.isArray = l || function (e) {
                return "[object Array]" === s.call(e)
            }, r.isFunction = function (e) {
                if (!e) return !1;
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (t) {
                    return !1
                }
            }, r.isArguments = function (e) {
                return !(!e || !o.call(e, "callee"))
            }, r.toArray = function (e) {
                return e ? e.toArray ? e.toArray() : r.isArray(e) ? i.call(e) : r.isArguments(e) ? i.call(e) : r.values(e) : []
            }, r.values = function (e) {
                var t = [];
                return null == e ? t : (p(e, function (e) {
                    t[t.length] = e
                }), t)
            }, r.indexOf = function (e, t) {
                var r = e.indexOf;
                if (r) return r.call(e, t);
                for (var a = 0; a < e.length; a++) if (t === e[a]) return a;
                return -1
            }, r.hasAttributes = function (e, t) {
                if ("string" == typeof t) return r.hasAttribute(e, t);
                if (r.isArray(t)) {
                    for (var a = !1, n = 0; n < t.length; n++) {
                        var i = r.hasAttribute(e, t[n]);
                        if (i) {
                            a = !0;
                            break
                        }
                    }
                    return a
                }
            }, r.hasAttribute = function (e, t) {
                return e.hasAttribute ? e.hasAttribute(t) : !(!e.attributes[t] || !e.attributes[t].specified)
            }, r.filter = function (e, t, r) {
                var a = Object.prototype.hasOwnProperty;
                if (e.filter) return e.filter(t);
                for (var n = [], i = 0; i < e.length; i++) if (a.call(e, i)) {
                    var s = e[i];
                    t.call(r, s, i, e) && n.push(s)
                }
                return n
            }, r.inherit = function (e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, r.trim = function (e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }, r.isObject = function (e) {
                return null != e && "[object Object]" == s.call(e)
            }, r.isEmptyObject = function (e) {
                if (r.isObject(e)) {
                    for (var t in e) if (o.call(e, t)) return !1;
                    return !0
                }
                return !1
            }, r.isUndefined = function (e) {
                return void 0 === e
            }, r.isString = function (e) {
                return "[object String]" == s.call(e)
            }, r.isDate = function (e) {
                return "[object Date]" == s.call(e)
            }, r.isBoolean = function (e) {
                return "[object Boolean]" == s.call(e)
            }, r.isNumber = function (e) {
                return "[object Number]" == s.call(e) && /[\d\.]+/.test(String(e))
            }, r.isElement = function (e) {
                return !(!e || 1 !== e.nodeType)
            }, r.isJSONString = function (e) {
                try {
                    JSON.parse(e)
                } catch (t) {
                    return !1
                }
                return !0
            }, r.safeJSONParse = function (e) {
                var t = null;
                try {
                    t = JSON.parse(e)
                } catch (r) {
                    return !1
                }
                return t
            }, r.decodeURIComponent = function (e) {
                var t = e;
                try {
                    t = decodeURIComponent(e)
                } catch (r) {
                    t = e
                }
                return t
            }, r.decodeURI = function (e) {
                var t = e;
                try {
                    t = decodeURI(e)
                } catch (r) {
                    t = e
                }
                return t
            }, r.isDecodeURI = function (e, t) {
                return e ? r.decodeURI(t) : t
            }, r.encodeDates = function (e) {
                return r.each(e, function (t, a) {
                    r.isDate(t) ? e[a] = r.formatDate(t) : r.isObject(t) && (e[a] = r.encodeDates(t))
                }), e
            }, r.mediaQueriesSupported = function () {
                return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
            }, r.getScreenOrientation = function () {
                var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
                    t = "\u672a\u53d6\u5230\u503c";
                if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait"; else if (r.mediaQueriesSupported()) {
                    var a = window.matchMedia || window.msMatchMedia;
                    a("(orientation: landscape)").matches ? t = "landscape" : a("(orientation: portrait)").matches && (t = "portrait")
                }
                return t
            }, r.now = Date.now || function () {
                return (new Date).getTime()
            }, r.throttle = function (e, t, a) {
                var n, i, s, o = null, c = 0;
                a || (a = {});
                var l = function () {
                    c = a.leading === !1 ? 0 : r.now(), o = null, s = e.apply(n, i), o || (n = i = null)
                };
                return function () {
                    var u = r.now();
                    c || a.leading !== !1 || (c = u);
                    var p = t - (u - c);
                    return n = this, i = arguments, p <= 0 || p > t ? (o && (clearTimeout(o), o = null), c = u, s = e.apply(n, i), o || (n = i = null)) : o || a.trailing === !1 || (o = setTimeout(l, p)), s
                }
            }, r.hashCode = function (e) {
                if ("string" != typeof e) return 0;
                var t = 0, r = null;
                if (0 == e.length) return t;
                for (var a = 0; a < e.length; a++) r = e.charCodeAt(a), t = (t << 5) - t + r, t &= t;
                return t
            }, r.formatDate = function (e) {
                function t (e) {
                    return e < 10 ? "0" + e : e
                }

                return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
            }, r.getRandomBasic = function () {
                function e () {
                    return r = (9301 * r + 49297) % 233280, r / 233280
                }

                var t = new Date, r = t.getTime();
                return function (t) {
                    return Math.ceil(e(r) * t)
                }
            }(), r.getRandom = function () {
                if ("function" == typeof Uint32Array) {
                    var e = "";
                    if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto), r.isObject(e) && e.getRandomValues) {
                        var t = new Uint32Array(1), a = e.getRandomValues(t)[0], n = Math.pow(2, 32);
                        return a / n
                    }
                }
                return r.getRandomBasic(1e19) / 1e19
            }, r.searchObjDate = function (e) {
                r.isObject(e) && r.each(e, function (t, a) {
                    r.isObject(t) ? r.searchObjDate(e[a]) : r.isDate(t) && (e[a] = r.formatDate(t))
                })
            }, r.searchZZAppStyle = function (e) {
                "undefined" != typeof e.properties.$project && (e.project = e.properties.$project, delete e.properties.$project), "undefined" != typeof e.properties.$token && (e.token = e.properties.$token, delete e.properties.$token)
            }, r.formatJsonString = function (e) {
                try {
                    return JSON.stringify(e, null, "  ")
                } catch (t) {
                    return JSON.stringify(e)
                }
            }, r.formatString = function (e, a) {
                return r.isNumber(a) && e.length > a ? (t.log("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, a)) : e
            }, r.searchObjString = function (e) {
                r.isObject(e) && r.each(e, function (a, n) {
                    r.isObject(a) ? r.searchObjString(e[n]) : r.isString(a) && (e[n] = r.formatString(a, "$element_selector" === n ? 1024 : t.para.max_string_length))
                })
            }, r.parseSuperProperties = function (e) {
                var a = e.properties, n = JSON.parse(JSON.stringify(e));
                r.isObject(a) && (r.each(a, function (e, i) {
                    if (r.isFunction(e)) try {
                        a[i] = e(n), r.isFunction(a[i]) && (t.log("\u60a8\u7684\u5c5e\u6027- " + i + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete a[i])
                    } catch (s) {
                        delete a[i], t.log("\u60a8\u7684\u5c5e\u6027- " + i + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                    }
                }), r.strip_sa_properties(a))
            }, r.filterReservedProperties = function (e) {
                var a = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"];
                r.isObject(e) && r.each(a, function (r, a) {
                    r in e && (a < 3 ? (delete e[r], t.log("\u60a8\u7684\u5c5e\u6027- " + r + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")) : t.log("\u60a8\u7684\u5c5e\u6027- " + r + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"))
                })
            }, r.searchConfigData = function (e) {
                if ("object" == typeof e && e.$option) {
                    var t = e.$option;
                    return delete e.$option, t
                }
                return {}
            }, r.unique = function (e) {
                for (var t, r = [], a = {}, n = 0; n < e.length; n++) t = e[n], t in a || (a[t] = !0, r.push(t));
                return r
            }, r.strip_sa_properties = function (e) {
                return r.isObject(e) ? (r.each(e, function (a, n) {
                    if (r.isArray(a)) {
                        var i = [];
                        r.each(a, function (e) {
                            r.isString(e) ? i.push(e) : t.log("\u60a8\u7684\u6570\u636e-", n, a, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                        }), e[n] = i
                    }
                    r.isString(a) || r.isNumber(a) || r.isDate(a) || r.isBoolean(a) || r.isArray(a) || r.isFunction(a) || "$option" === n || (t.log("\u60a8\u7684\u6570\u636e-", n, a, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete e[n])
                }), e) : e
            }, r.strip_empty_properties = function (e) {
                var t = {};
                return r.each(e, function (e, r) {
                    null != e && (t[r] = e)
                }), t
            }, r.base64Encode = function (e) {
                return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                    return String.fromCharCode("0x" + t)
                }))
            }, r.base64Decode = function (e) {
                var t = r.map(atob(e).split(""), function (e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                });
                return decodeURIComponent(t.join(""))
            }, r.UUID = function () {
                var e = function () {
                    for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                    return e.toString(16) + t.toString(16)
                }, t = function () {
                    return r.getRandom().toString(16).replace(".", "")
                }, a = function (e) {
                    function t (e, t) {
                        var r, a = 0;
                        for (r = 0; r < t.length; r++) a |= i[r] << 8 * r;
                        return e ^ a
                    }

                    var r, a, n = navigator.userAgent, i = [], s = 0;
                    for (r = 0; r < n.length; r++) a = n.charCodeAt(r), i.unshift(255 & a), i.length >= 4 && (s = t(s, i), i = []);
                    return i.length > 0 && (s = t(s, i)), s.toString(16)
                };
                return function () {
                    var n = String(screen.height * screen.width);
                    n = n && /\d{5,}/.test(n) ? n.toString(16) : String(31242 * r.getRandom()).replace(".", "").slice(0, 8);
                    var i = e() + "-" + t() + "-" + a() + "-" + n + "-" + e();
                    return i ? i : (String(r.getRandom()) + String(r.getRandom()) + String(r.getRandom())).slice(2, 15)
                }
            }(), r.getQueryParam = function (e, t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = r.decodeURIComponent(e);
                var a = "[\\?&]" + t + "=([^&#]*)", n = new RegExp(a), i = n.exec(e);
                return null === i || i && "string" != typeof i[1] && i[1].length ? "" : r.decodeURIComponent(i[1])
            }, r.urlParse = function (e) {
                var r = function (e) {
                    this._fields = {
                        Username: 4,
                        Password: 5,
                        Port: 7,
                        Protocol: 2,
                        Host: 6,
                        Path: 8,
                        URL: 0,
                        QueryString: 9,
                        Fragment: 10
                    }, this._values = {}, this._regex = null, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, "undefined" != typeof e && this._parse(e)
                };
                return r.prototype.setUrl = function (e) {
                    this._parse(e)
                }, r.prototype._initValues = function () {
                    for (var e in this._fields) this._values[e] = ""
                }, r.prototype.addQueryString = function (e) {
                    if ("object" != typeof e) return !1;
                    var t = this._values.QueryString || "";
                    for (var r in e) t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
                    this._values.QueryString = t
                }, r.prototype.getUrl = function () {
                    var e = "";
                    return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : "", e += this._values.Fragment ? "#" + this._values.Fragment : ""
                }, r.prototype.getUrl = function () {
                    var e = "";
                    return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : ""
                }, r.prototype._parse = function (e) {
                    this._initValues();
                    var r = this._regex.exec(e);
                    r || t.log("DPURLParser::_parse -> Invalid URL");
                    for (var a in this._fields) "undefined" != typeof r[this._fields[a]] && (this._values[a] = r[this._fields[a]]);
                    this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
                }, new r(e)
            }, r.addEvent = function () {
                function e (t) {
                    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation, t._getPath = e._getPath), t
                }

                function a (t, r, a) {
                    var n = function (n) {
                        if (n = n || e(window.event)) {
                            n.target = n.srcElement;
                            var i, s, o = !0;
                            return "function" == typeof a && (i = a(n)), s = r.call(t, n), !1 !== i && !1 !== s || (o = !1), o
                        }
                    };
                    return n
                }

                e._getPath = function () {
                    var e = this, t = function () {
                        try {
                            var t = e.target, r = [t];
                            if (null === t || null === t.parentElement) return [];
                            for (; null !== t.parentElement;) t = t.parentElement, r.unshift(t);
                            return r
                        } catch (a) {
                            return []
                        }
                    };
                    return this.path || this.composedPath && this.composedPath() || t()
                }, e.preventDefault = function () {
                    this.returnValue = !1
                }, e.stopPropagation = function () {
                    this.cancelBubble = !0
                };
                var n = function (n, i, s) {
                    var o = !(!r.isObject(t.para.heatmap) || !t.para.heatmap.useCapture);
                    if (r.isObject(t.para.heatmap) && "undefined" == typeof t.para.heatmap.useCapture && "click" === i && (o = !0), n && n.addEventListener) n.addEventListener(i, function (t) {
                        t._getPath = e._getPath, s.call(this, t)
                    }, o); else {
                        var c = "on" + i, l = n[c];
                        n[c] = a(n, s, l)
                    }
                };
                n.apply(null, arguments)
            }, r.addHashEvent = function (e) {
                var t = "pushState" in window.history ? "popstate" : "hashchange";
                r.addEvent(window, t, e)
            }, r.addSinglePageEvent = function (e) {
                var t = location.href, a = window.history.pushState, n = window.history.replaceState;
                window.history.pushState = function () {
                    a.apply(window.history, arguments), e(t), t = location.href
                }, window.history.replaceState = function () {
                    n.apply(window.history, arguments), e(t), t = location.href
                };
                var i = a ? "popstate" : "hashchange";
                r.addEvent(window, i, function () {
                    e(t), t = location.href
                })
            }, r.cookie = {
                get: function (e) {
                    for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                        for (var i = a[n]; " " == i.charAt(0);) i = i.substring(1, i.length);
                        if (0 == i.indexOf(t)) return r.decodeURIComponent(i.substring(t.length, i.length))
                    }
                    return null
                }, set: function (e, a, n, i) {
                    function s (e) {
                        return !!e && e.replaceAll(/\r\n/g, "")
                    }

                    i = "undefined" == typeof i ? t.para.cross_subdomain : i;
                    var o = "", c = "", l = "";
                    if (n = null == n ? 73e3 : n, i) {
                        var u = r.getCurrentDomain(location.href);
                        "url\u89e3\u6790\u5931\u8d25" === u && (u = ""), o = u ? "; domain=" + u : ""
                    }
                    if (0 !== n) {
                        var p = new Date;
                        "s" === String(n).slice(-1) ? p.setTime(p.getTime() + 1e3 * Number(String(n).slice(0, -1))) : p.setTime(p.getTime() + 24 * n * 60 * 60 * 1e3), c = "; expires=" + p.toGMTString()
                    }
                    t.para.is_secure_cookie && (l = "; secure");
                    var d = "", f = "", _ = "";
                    e && (d = s(e)), a && (f = s(a)), o && (_ = s(o)), d && f && (document.cookie = d + "=" + encodeURIComponent(f) + c + "; path=/" + _ + l)
                }, encrypt: function (e) {
                    return "data:enc;" + r.rot13obfs(e)
                }, decrypt: function (e) {
                    return e = e.substring("data:enc;".length), e = r.rot13defs(e)
                }, resolveValue: function (e) {
                    var t = "data:enc;";
                    return r.isString(e) && 0 === e.indexOf(t) && (e = r.cookie.decrypt(e)), e
                }, remove: function (e, a) {
                    a = "undefined" == typeof a ? t.para.cross_subdomain : a, r.cookie.set(e, "", -1, a)
                }, getCookieName: function (e, a) {
                    var n = "";
                    if (a = a || location.href, t.para.cross_subdomain === !1) {
                        try {
                            n = r.URL(a).hostname
                        } catch (i) {
                            t.log(i)
                        }
                        n = "string" == typeof n && "" !== n ? "sajssdk_2015_" + e + "_" + n.replace(/\./g, "_") : "sajssdk_2015_root_" + e
                    } else n = "sajssdk_2015_cross_" + e;
                    return n
                }, getNewUser: function () {
                    var e = "new_user";
                    return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName(e))
                }
            }, r.getElementContent = function (e, a) {
                var n = "", i = "";
                return e.textContent ? n = r.trim(e.textContent) : e.innerText && (n = r.trim(e.innerText)), n && (n = n.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), i = n || "", "input" !== a && "INPUT" !== a || ("button" === e.type || "submit" === e.type ? i = e.value || "" : t.para.heatmap && "function" == typeof t.para.heatmap.collect_input && t.para.heatmap.collect_input(e) && (i = e.value || "")), i
            }, r.getEleInfo = function (e) {
                if (!e.target) return !1;
                var a = e.target, n = a.tagName.toLowerCase(), i = {};
                return i.$element_type = n, i.$element_name = a.getAttribute("name"), i.$element_id = a.getAttribute("id"), i.$element_class_name = "string" == typeof a.className ? a.className : null, i.$element_target_url = a.getAttribute("href"), i.$element_content = r.getElementContent(a, n), i = r.strip_empty_properties(i), i.$url = r.isDecodeURI(t.para.url_is_decode, location.href), i.$url_path = location.pathname, i.$title = document.title, i.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, i
            }, r.localStorage = {
                get: function (e) {
                    return window.localStorage.getItem(e)
                }, parse: function (e) {
                    var a;
                    try {
                        a = JSON.parse(r.localStorage.get(e)) || null
                    } catch (n) {
                        t.log(n)
                    }
                    return a
                }, set: function (e, t) {
                    window.localStorage.setItem(e, t)
                }, remove: function (e) {
                    window.localStorage.removeItem(e)
                }, isSupport: function () {
                    var e = !0;
                    try {
                        var t = "__sensorsdatasupport__", a = "testIsSupportStorage";
                        r.localStorage.set(t, a), r.localStorage.get(t) !== a && (e = !1), r.localStorage.remove(t)
                    } catch (n) {
                        e = !1
                    }
                    return e
                }
            }, r.sessionStorage = {
                isSupport: function () {
                    var e = !0, t = "__sensorsdatasupport__", r = "testIsSupportStorage";
                    try {
                        sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), e = !0) : e = !1
                    } catch (a) {
                        e = !1
                    }
                    return e
                }
            }, r.isSupportCors = function () {
                return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
            }, r.xhr = function (e) {
                if (e) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
                if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
                if (window.ActiveXObject) try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (r) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (r) {
                        t.log(r)
                    }
                }
            }, r.ajax = function (e) {
                function a (e) {
                    if (!e) return "";
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {}
                    }
                }

                function n () {
                    try {
                        r.isObject(i) && i.abort && i.abort()
                    } catch (a) {
                        t.log(a)
                    }
                    s && (clearTimeout(s), s = null, e.error && e.error(), i.onreadystatechange = null, i.onload = null, i.onerror = null)
                }

                e.timeout = e.timeout || 2e4, e.credentials = "undefined" == typeof e.credentials || e.credentials;
                var i = r.xhr(e.cors);
                if (!i) return !1;
                e.type || (e.type = e.data ? "POST" : "GET"), e = r.extend({
                    success: function () {
                    }, error: function () {
                    }
                }, e), t.debug.protocol.ajax(e.url);
                var s, o = e.success, c = e.error;
                e.success = function (e) {
                    o(e), s && (clearTimeout(s), s = null)
                }, e.error = function (e) {
                    c(e), s && (clearTimeout(s), s = null)
                }, s = setTimeout(function () {
                    n()
                }, e.timeout), "undefined" != typeof XDomainRequest && i instanceof XDomainRequest && (i.onload = function () {
                    e.success && e.success(a(i.responseText)), i.onreadystatechange = null, i.onload = null, i.onerror = null
                }, i.onerror = function () {
                    e.error && e.error(a(i.responseText), i.status), i.onreadystatechange = null, i.onerror = null, i.onload = null
                }), i.onreadystatechange = function () {
                    try {
                        4 == i.readyState && (i.status >= 200 && i.status < 300 || 304 == i.status ? e.success(a(i.responseText)) : e.error(a(i.responseText), i.status), i.onreadystatechange = null, i.onload = null)
                    } catch (t) {
                        i.onreadystatechange = null, i.onload = null
                    }
                }, i.open(e.type, e.url, !0);
                try {
                    e.credentials && (i.withCredentials = !0), r.isObject(e.header) && r.each(e.header, function (e, t) {
                        i.setRequestHeader && i.setRequestHeader(t, e)
                    }), e.data && (e.cors || i.setRequestHeader && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === e.contentType ? i.setRequestHeader && i.setRequestHeader("Content-type", "application/json; charset=UTF-8") : i.setRequestHeader && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
                } catch (l) {
                    t.log(l)
                }
                i.send(e.data || null)
            }, r.loadScript = function (e) {
                e = r.extend({
                    success: function () {
                    }, error: function () {
                    }, appendCall: function (e) {
                        document.getElementsByTagName("head")[0].appendChild(e)
                    }
                }, e);
                var t = null;
                "css" === e.type && (t = document.createElement("link"), t.rel = "stylesheet", t.href = e.url), "js" === e.type && (t = document.createElement("script"), t.async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function () {
                    this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), t.onload = t.onreadystatechange = null)
                }, t.onerror = function () {
                    e.error(), t.onerror = null
                }, e.appendCall(t)
            }, r.getHostname = function (e, a) {
                a && "string" == typeof a || (a = "hostname\u89e3\u6790\u5f02\u5e38");
                var n = null;
                try {
                    n = r.URL(e).hostname
                } catch (i) {
                    t.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
                }
                return n || a
            }, r.getQueryParamsFromUrl = function (e) {
                var t = {}, a = e.split("?"), n = a[1] || "";
                return n && (t = r.getURLSearchParams("?" + n)), t
            }, r.getURLSearchParams = function (e) {
                e = e || "";
                for (var t = function (e) {
                    return decodeURIComponent(e)
                }, r = {}, a = e.substring(1), n = a.split("&"), i = 0; i < n.length; i++) {
                    var s = n[i].indexOf("=");
                    if (s !== -1) {
                        var o = n[i].substring(0, s), c = n[i].substring(s + 1);
                        o = t(o), c = t(c), r[o] = c
                    }
                }
                return r
            }, r.URL = function (e) {
                var a = {}, n = function () {
                    var e;
                    try {
                        return e = new URL("http://modernizr.com/"), "http://modernizr.com/" === e.href
                    } catch (t) {
                        return !1
                    }
                };
                if ("function" == typeof window.URL && n()) a = new URL(e), a.searchParams || (a.searchParams = function () {
                    var e = r.getURLSearchParams(a.search);
                    return {
                        get: function (t) {
                            return e[t]
                        }
                    }
                }()); else {
                    var i = /^https?:\/\/.+/;
                    i.test(e) === !1 && t.log("Invalid URL");
                    var s = r.urlParse(e);
                    a.hash = "", a.host = s._values.Host ? s._values.Host + (s._values.Port ? ":" + s._values.Port : "") : "", a.href = s._values.URL, a.password = s._values.Password, a.pathname = s._values.Path, a.port = s._values.Port, a.search = s._values.QueryString ? "?" + s._values.QueryString : "", a.username = s._values.Username, a.hostname = s._values.Hostname, a.protocol = s._values.Protocol ? s._values.Protocol + ":" : "", a.origin = s._values.Origin ? s._values.Origin + (s._values.Port ? ":" + s._values.Port : "") : "", a.searchParams = function () {
                        var e = r.getURLSearchParams("?" + s._values.QueryString);
                        return {
                            get: function (t) {
                                return e[t]
                            }
                        }
                    }()
                }
                return a
            }, r.getCurrentDomain = function (e) {
                var a = t.para.current_domain;
                switch (typeof a) {
                    case"function":
                        var n = a();
                        return "" === n || "" === r.trim(n) ? "url\u89e3\u6790\u5931\u8d25" : n.indexOf(".") !== -1 ? n : "url\u89e3\u6790\u5931\u8d25";
                    case"string":
                        return "" === a || "" === r.trim(a) ? "url\u89e3\u6790\u5931\u8d25" : a.indexOf(".") !== -1 ? a : "url\u89e3\u6790\u5931\u8d25";
                    default:
                        var i = r.getCookieTopLevelDomain();
                        return "" === e ? "url\u89e3\u6790\u5931\u8d25" : "" === i ? "url\u89e3\u6790\u5931\u8d25" : i
                }
            }, r.getCookieTopLevelDomain = function (e) {
                function t (e) {
                    return !!e && e
                }

                e = e || location.hostname;
                var a = t(e);
                if (!a) return "";
                var n = a.split(".");
                if (r.isArray(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(a)) for (var i = "." + n.splice(n.length - 1, 1); n.length > 0;) if (i = "." + n.splice(n.length - 1, 1) + i, document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + i, document.cookie.indexOf("sensorsdata_domain_test=true") !== -1) {
                    var s = new Date;
                    return s.setTime(s.getTime() - 1e3), document.cookie = "sensorsdata_domain_test=true; expires=" + s.toGMTString() + "; path=/; domain=" + i, i
                }
                return ""
            }, r.isReferralTraffic = function (e) {
                return e = e || document.referrer, "" === e || r.getCookieTopLevelDomain(r.getHostname(e)) !== r.getCookieTopLevelDomain()
            }, r.ry = function (e) {
                return new r.ry.init(e)
            }, r.ry.init = function (e) {
                this.ele = e
            }, r.ry.init.prototype = {
                addClass: function (e) {
                    var t = " " + this.ele.className + " ";
                    return t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this
                }, removeClass: function (e) {
                    var t = " " + this.ele.className + " ";
                    return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this
                }, hasClass: function (e) {
                    var t = " " + this.ele.className + " ";
                    return t.indexOf(" " + e + " ") !== -1
                }, attr: function (e, t) {
                    return "string" == typeof e && r.isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this)
                }, offset: function () {
                    var e = this.ele.getBoundingClientRect();
                    if (e.width || e.height) {
                        var t = this.ele.ownerDocument, r = t.documentElement;
                        return {
                            top: e.top + window.pageYOffset - r.clientTop,
                            left: e.left + window.pageXOffset - r.clientLeft
                        }
                    }
                    return {top: 0, left: 0}
                }, getSize: function () {
                    if (!window.getComputedStyle) return {width: this.ele.offsetWidth, height: this.ele.offsetHeight};
                    try {
                        var e = this.ele.getBoundingClientRect();
                        return {width: e.width, height: e.height}
                    } catch (t) {
                        return {width: 0, height: 0}
                    }
                }, getStyle: function (e) {
                    return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
                }, wrap: function (e) {
                    var t = document.createElement(e);
                    return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), r.ry(t)
                }, getCssStyle: function (e) {
                    var t = this.ele.style.getPropertyValue(e);
                    if (t) return t;
                    var a = null;
                    if ("function" == typeof window.getMatchedCSSRules && (a = getMatchedCSSRules(this.ele)), !a || !r.isArray(a)) return null;
                    for (var n = a.length - 1; n >= 0; n--) {
                        var i = a[n];
                        if (t = i.style.getPropertyValue(e)) return t
                    }
                }, sibling: function (e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType;) ;
                    return e
                }, next: function () {
                    return this.sibling(this.ele, "nextSibling")
                }, prev: function (e) {
                    return this.sibling(this.ele, "previousSibling")
                }, siblings: function (e) {
                    return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
                }, children: function (e) {
                    return this.siblings(this.ele.firstChild)
                }, parent: function () {
                    var e = this.ele.parentNode;
                    return e = e && 11 !== e.nodeType ? e : null, r.ry(e)
                }, previousElementSibling: function () {
                    var e = this.ele;
                    if ("previousElementSibling" in document.documentElement) return r.ry(e.previousElementSibling);
                    for (; e = e.previousSibling;) if (1 === e.nodeType) return r.ry(e);
                    return r.ry(null);
                }, getSameTypeSiblings: function () {
                    for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), a = [], n = 0; n < t.children.length; n++) {
                        var i = t.children[n];
                        1 === i.nodeType && i.tagName.toLowerCase() === r && a.push(t.children[n])
                    }
                    return a
                }
            }, r.strToUnicode = function (e) {
                if ("string" != typeof e) return t.log("\u8f6c\u6362unicode\u9519\u8bef", e), e;
                for (var r = "", a = 0; a < e.length; a++) r += "\\" + e.charCodeAt(a).toString(16);
                return r
            }, r.getReferrer = function (e) {
                var e = e || document.referrer;
                return "string" != typeof e ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e) : (0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]), e = e.slice(0, t.para.max_referrer_string_length), "string" == typeof e ? e : "")
            }, r.getKeywordFromReferrer = function (e) {
                e = e || document.referrer;
                var a = t.para.source_type.keyword;
                if (document && "string" == typeof e) {
                    if (0 === e.indexOf("http")) {
                        var n = r.getReferSearchEngine(e), i = r.getQueryParamsFromUrl(e);
                        if (r.isEmptyObject(i)) return "\u672a\u53d6\u5230\u503c";
                        var s = null;
                        for (var o in a) if (n === o && "object" == typeof i) if (s = a[o], r.isArray(s)) for (var o = 0; o < s.length; o++) {
                            var c = i[s[o]];
                            if (c) return c
                        } else if (i[s]) return i[s];
                        return "\u672a\u53d6\u5230\u503c"
                    }
                    return "" === e ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
                }
                return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
            }, r.getWxAdIdFromUrl = function (e) {
                var t = r.getQueryParam(e, "gdt_vid"), a = r.getQueryParam(e, "hash_key"),
                    n = r.getQueryParam(e, "callbacks"), i = {click_id: "", hash_key: "", callbacks: ""};
                return r.isString(t) && t.length && (i.click_id = 16 == t.length || 18 == t.length ? t : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5", r.isString(a) && a.length && (i.hash_key = a), r.isString(n) && n.length && (i.callbacks = n)), i
            }, r.getReferSearchEngine = function (e) {
                var a = r.getHostname(e);
                if (!a || "hostname\u89e3\u6790\u5f02\u5e38" === a) return "";
                var n = (t.para.source_type.keyword, {
                    baidu: [/^.*\.baidu\.com$/],
                    bing: [/^.*\.bing\.com$/],
                    google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
                    sm: [/^m\.sm\.cn$/],
                    so: [/^.+\.so\.com$/],
                    sogou: [/^.*\.sogou\.com$/],
                    yahoo: [/^.*\.yahoo\.com$/]
                });
                for (var i in n) for (var s = n[i], o = 0, c = s.length; o < c; o++) if (s[o].test(a)) return i;
                return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
            }, r.getSourceFromReferrer = function () {
                function e (e, t) {
                    for (var r = 0; r < e.length; r++) if (t.split("?")[0].indexOf(e[r]) !== -1) return !0
                }

                var a = "(" + t.para.source_type.utm.join("|") + ")\\=[^&]+", n = t.para.source_type.search,
                    i = t.para.source_type.social, s = document.referrer || "", o = r.info.pageProp.url;
                if (o) {
                    var c = o.match(new RegExp(a));
                    return c && c[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : e(n, s) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" : e(i, s) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === s ? "\u76f4\u63a5\u6d41\u91cf" : "\u5f15\u8350\u6d41\u91cf"
                }
                return "\u83b7\u53d6url\u5f02\u5e38"
            }, r.info = {
                initPage: function () {
                    var e = r.getReferrer(), a = location.href, n = r.getCurrentDomain(a);
                    n || t.debug.jssdkDebug("url_domain\u5f02\u5e38_" + a + "_" + n), this.pageProp = {
                        referrer: e,
                        referrer_host: e ? r.getHostname(e) : "",
                        url: a,
                        url_host: r.getHostname(a, "url_host\u53d6\u503c\u5f02\u5e38"),
                        url_domain: n
                    }
                }, pageProp: {}, campaignParams: function () {
                    var e = t.source_channel_standard.split(" "), a = "", n = {};
                    return r.isArray(t.para.source_channel) && t.para.source_channel.length > 0 && (e = e.concat(t.para.source_channel), e = r.unique(e)), r.each(e, function (e) {
                        a = r.getQueryParam(location.href, e), a.length && (n[e] = a)
                    }), n
                }, campaignParamsStandard: function (e, a) {
                    e = e || "", a = a || "";
                    var n = r.info.campaignParams(), i = {}, s = {};
                    return r.each(n, function (r, n, o) {
                        (" " + t.source_channel_standard + " ").indexOf(" " + n + " ") !== -1 ? i[e + n] = o[n] : s[a + n] = o[n]
                    }), {$utms: i, otherUtms: s}
                }, properties: function () {
                    return {
                        $timezone_offset: (new Date).getTimezoneOffset(),
                        $screen_height: Number(screen.height) || 0,
                        $screen_width: Number(screen.width) || 0,
                        $lib: "js",
                        $lib_version: String(t.lib_version)
                    }
                }, currentProps: {}, register: function (e) {
                    r.extend(r.info.currentProps, e)
                }
            }, r.autoExeQueue = function () {
                var e = {
                    items: [], enqueue: function (e) {
                        this.items.push(e), this.start()
                    }, dequeue: function () {
                        return this.items.shift()
                    }, getCurrentItem: function () {
                        return this.items[0]
                    }, isRun: !1, start: function () {
                        this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start())
                    }, close: function () {
                        this.dequeue(), this.isRun = !1, this.start()
                    }
                };
                return e
            }, r.trackLink = function (e, a, n) {
                function i (e) {
                    function r () {
                        i || (i = !0, location.href = s.href)
                    }

                    e.stopPropagation(), e.preventDefault();
                    var i = !1;
                    setTimeout(r, 1e3), t.track(a, n, r)
                }

                e = e || {};
                var s = null;
                return e.ele && (s = e.ele), e.event && (s = e.target ? e.target : e.event.target), n = n || {}, !(!s || "object" != typeof s) && (!s.href || /^javascript/.test(s.href) || s.target || s.download || s.onclick ? (t.track(a, n), !1) : (e.event && i(e.event), void (e.ele && r.addEvent(e.ele, "click", function (e) {
                    i(e)
                }))))
            }, r.eventEmitter = function () {
                this._events = [], this.pendingEvents = []
            }, r.eventEmitter.prototype = {
                emit: function (e) {
                    var t = [].slice.call(arguments, 1);
                    r.each(this._events, function (r) {
                        r.type === e && r.callback.apply(r.context, t)
                    })
                }, on: function (e, t, r) {
                    "function" == typeof t && this._events.push({type: e, callback: t, context: r || this})
                }, tempAdd: function (e, t) {
                    t && e && (this.pendingEvents.push({
                        type: e,
                        data: t
                    }), this.pendingEvents.length > 20 ? this.pendingEvents.shift() : null)
                }, isReady: function () {
                    var e = this;
                    this.tempAdd = this.emit, 0 !== this.pendingEvents.length && (r.each(this.pendingEvents, function (t) {
                        e.emit(t.type, t.data)
                    }), this.pendingEvents = [])
                }
            }, r.rot13obfs = function (e, t) {
                e = String(e), t = "number" == typeof t ? t : 13;
                for (var r = 126, a = e.split(""), n = 0, i = a.length; n < i; n++) {
                    var s = a[n].charCodeAt(0);
                    s < r && (a[n] = String.fromCharCode((a[n].charCodeAt(0) + t) % r))
                }
                return a.join("")
            }, r.rot13defs = function (e) {
                var t = 13, a = 126, e = String(e);
                return r.rot13obfs(e, a - t)
            }, r.urlSafeBase64 = function () {
                var e = {"+": "-", "/": "_", "=": "."}, t = {"-": "+", _: "/", ".": "="}, r = function (t) {
                    return t.replace(/[+\/=]/g, function (t) {
                        return e[t]
                    })
                }, a = function (e) {
                    return e.replace(/[-_.]/g, function (e) {
                        return t[e]
                    })
                }, n = function (e) {
                    return e.replace(/[.=]{1,2}$/, "")
                }, i = function (e) {
                    return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
                }, s = function (e) {
                    return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
                };
                return {encode: r, decode: a, trim: n, isBase64: i, isUrlSafeBase64: s}
            }(), r.setCssStyle = function (e) {
                var t = document.createElement("style");
                t.type = "text/css";
                try {
                    t.appendChild(document.createTextNode(e))
                } catch (r) {
                    t.styleSheet.cssText = e
                }
                var a = document.getElementsByTagName("head")[0], n = document.getElementsByTagName("script")[0];
                a ? a.children.length ? a.insertBefore(t, a.children[0]) : a.appendChild(t) : n.parentNode.insertBefore(t, n)
            }, r.isIOS = function () {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
            }, r.getIOSVersion = function () {
                try {
                    var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
                    return e && e[1] ? Number.parseInt(e[1], 10) : ""
                } catch (t) {
                    return ""
                }
            }, r.getUA = function () {
                var e, t = {}, r = navigator.userAgent.toLowerCase();
                return (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) && (t.safari = Number(e[1].match(/^\d*.\d*/))), t
            }, r.jsonp = function (e) {
                if (!r.isObject(e) || !r.isString(e.callbackName)) return t.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
                e.success = r.isFunction(e.success) ? e.success : function () {
                }, e.error = r.isFunction(e.error) ? e.error : function () {
                }, e.data = e.data || "";
                var a = document.createElement("script"), n = document.getElementsByTagName("head")[0], i = null;
                if (n.appendChild(a), r.isNumber(e.timeout) && (i = setTimeout(function () {
                    e.error("timeout"), window[e.callbackName] = function () {
                        t.log("call jsonp error")
                    }, i = null, n.removeChild(a)
                }, e.timeout)), window[e.callbackName] = function (r) {
                    e.success(r), window[e.callbackName] = function () {
                        t.log("call jsonp error")
                    }, clearTimeout(i), i = null, n.removeChild(a)
                }, e.url.indexOf("?") > -1 ? e.url += "&callbackName=" + e.callbackName : e.url += "?callbackName=" + e.callbackName, r.isObject(e.data)) {
                    var s = [];
                    r.each(e.data, function (e, t) {
                        s.push(t + "=" + e)
                    }), e.data = s.join("&"), e.url += "&" + e.data
                }
                a.onerror = function (r) {
                    window[e.callbackName] = function () {
                        t.log("call jsonp error")
                    }, clearTimeout(i), i = null, n.removeChild(a), e.error(r)
                }, a.src = e.url
            }, r.isSupportBeaconSend = function () {
                var e = r.getUA(), t = !1, a = navigator.userAgent.toLowerCase();
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    var n = /os [\d._]*/gi, i = a.match(n), s = (i + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                        o = s.split(".");
                    "undefined" == typeof e.safari && (e.safari = o[0]), o[0] && o[0] < 13 ? (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 12) && (t = !0) : (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 11.3) && (t = !0)
                } else (e.chrome > 38 || e.edge > 13 || e.firefox > 30 || e.opera > 25 || e.safari > 11) && (t = !0);
                return t
            }, r.secCheck = {
                isHttpUrl: function (e) {
                    if ("string" != typeof e) return !1;
                    var r = /^https?:\/\/.+/;
                    return r.test(e) !== !1 || (t.log("Invalid URL"), !1)
                }, removeScriptProtocol: function (e) {
                    if ("string" != typeof e) return "";
                    for (var t = /^\s*javascript/i; t.test(e);) e = e.replace(t, "");
                    return e
                }
            }
        }(), t.para_default = {
            preset_properties: {
                latest_utm: !0,
                latest_traffic_source_type: !0,
                latest_search_keyword: !0,
                latest_referrer: !0,
                latest_referrer_host: !1,
                latest_landing_page: !1,
                latest_wx_ad_click_id: void 0,
                url: !0,
                title: !0
            },
            encrypt_cookie: !1,
            img_use_crossorigin: !1,
            name: "sa",
            max_referrer_string_length: 200,
            max_string_length: 500,
            cross_subdomain: !0,
            show_log: !0,
            is_debug: !1,
            debug_mode: !1,
            debug_mode_upload: !1,
            session_time: 0,
            use_client_time: !1,
            source_channel: [],
            send_type: "image",
            vtrack_ignore: {},
            auto_init: !0,
            is_track_single_page: !1,
            is_single_page: !1,
            batch_send: !1,
            source_type: {},
            callback_timeout: 200,
            datasend_timeout: 3e3,
            queue_timeout: 300,
            is_track_device_id: !1,
            ignore_oom: !0,
            app_js_bridge: !1,
            url_is_decode: !1
        }, t.addReferrerHost = function (e) {
            var a = "\u53d6\u503c\u5f02\u5e38";
            r.isObject(e.properties) && (e.properties.$first_referrer && (e.properties.$first_referrer_host = r.getHostname(e.properties.$first_referrer, a)), "track" !== e.type && "track_signup" !== e.type || ("$referrer" in e.properties && (e.properties.$referrer_host = "" === e.properties.$referrer ? "" : r.getHostname(e.properties.$referrer, a)), t.para.preset_properties.latest_referrer && t.para.preset_properties.latest_referrer_host && (e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : r.getHostname(e.properties.$latest_referrer, a))))
        }, t.addPropsHook = function (e) {
            t.para.preset_properties && t.para.preset_properties.url && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$url && (e.properties.$url = r.isDecodeURI(t.para.url_is_decode, window.location.href)), t.para.preset_properties && t.para.preset_properties.title && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$title && (e.properties.$title = document.title)
        }, t.initPara = function (e) {
            t.para = e || t.para || {};
            var a = {};
            if (r.isObject(t.para.is_track_latest)) for (var n in t.para.is_track_latest) a["latest_" + n] = t.para.is_track_latest[n];
            t.para.preset_properties = r.extend({}, t.para_default.preset_properties, a, t.para.preset_properties || {});
            var i;
            for (i in t.para_default) void 0 === t.para[i] && (t.para[i] = t.para_default[i]);
            "string" == typeof t.para.server_url && (t.para.server_url = r.trim(t.para.server_url), t.para.server_url && ("://" === t.para.server_url.slice(0, 3) ? t.para.server_url = location.protocol.slice(0, -1) + t.para.server_url : "//" === t.para.server_url.slice(0, 2) ? t.para.server_url = location.protocol + t.para.server_url : "http" !== t.para.server_url.slice(0, 4) && (t.para.server_url = ""))), "string" != typeof t.para.web_url || "://" !== t.para.web_url.slice(0, 3) && "//" !== t.para.web_url.slice(0, 2) || ("://" === t.para.web_url.slice(0, 3) ? t.para.web_url = location.protocol.slice(0, -1) + t.para.web_url : t.para.web_url = location.protocol + t.para.web_url), "image" !== t.para.send_type && "ajax" !== t.para.send_type && "beacon" !== t.para.send_type && (t.para.send_type = "image"), t.debug.protocol.serverUrl(), t.bridge.initPara(), t.bridge.initState();
            var s = {datasend_timeout: 6e3, send_interval: 6e3};
            r.localStorage.isSupport() && r.isSupportCors() && "object" == typeof localStorage ? t.para.batch_send === !0 ? (t.para.batch_send = r.extend({}, s), t.para.use_client_time = !0) : "object" == typeof t.para.batch_send && (t.para.use_client_time = !0, t.para.batch_send = r.extend({}, s, t.para.batch_send)) : t.para.batch_send = !1;
            var o = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
                c = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
                l = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
                u = {
                    baidu: ["wd", "word", "kw", "keyword"],
                    google: "q",
                    bing: "q",
                    yahoo: "p",
                    sogou: ["query", "keyword"],
                    so: "q",
                    sm: "q"
                };
            "object" == typeof t.para.source_type && (t.para.source_type.utm = r.isArray(t.para.source_type.utm) ? t.para.source_type.utm.concat(o) : o, t.para.source_type.search = r.isArray(t.para.source_type.search) ? t.para.source_type.search.concat(c) : c, t.para.source_type.social = r.isArray(t.para.source_type.social) ? t.para.source_type.social.concat(l) : l, t.para.source_type.keyword = r.isObject(t.para.source_type.keyword) ? r.extend(u, t.para.source_type.keyword) : u);
            var p = {div: !1}, d = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
            if (r.isObject(t.para.heatmap)) {
                t.para.heatmap.clickmap = t.para.heatmap.clickmap || "default", t.para.heatmap.scroll_notice_map = t.para.heatmap.scroll_notice_map || "default", t.para.heatmap.scroll_delay_time = t.para.heatmap.scroll_delay_time || 4e3, t.para.heatmap.scroll_event_duration = t.para.heatmap.scroll_event_duration || 18e3, t.para.heatmap.renderRefreshTime = t.para.heatmap.renderRefreshTime || 1e3, t.para.heatmap.loadTimeout = t.para.heatmap.loadTimeout || 1e3;
                var f = r.isArray(t.para.heatmap.track_attr) ? r.filter(t.para.heatmap.track_attr, function (e) {
                    return e && "string" == typeof e
                }) : [];
                if (f.push("data-sensors-click"), t.para.heatmap.track_attr = f, r.isObject(t.para.heatmap.collect_tags)) if (t.para.heatmap.collect_tags.div === !0) t.para.heatmap.collect_tags.div = {
                    ignore_tags: d,
                    max_level: 1
                }; else if (r.isObject(t.para.heatmap.collect_tags.div)) {
                    if (t.para.heatmap.collect_tags.div.ignore_tags ? r.isArray(t.para.heatmap.collect_tags.div.ignore_tags) || (t.log("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"), t.para.heatmap.collect_tags.div.ignore_tags = d) : t.para.heatmap.collect_tags.div.ignore_tags = d, t.para.heatmap.collect_tags.div.max_level) {
                        var _ = [1, 2, 3];
                        r.indexOf(_, t.para.heatmap.collect_tags.div.max_level) === -1 && (t.para.heatmap.collect_tags.div.max_level = 1)
                    }
                } else t.para.heatmap.collect_tags.div = !1; else t.para.heatmap.collect_tags = p
            }
            if (r.isArray(t.para.server_url) && t.para.server_url.length) for (i = 0; i < t.para.server_url.length; i++) /sa\.gif[^\/]*$/.test(t.para.server_url[i]) || (t.para.server_url[i] = t.para.server_url[i].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")); else /sa\.gif[^\/]*$/.test(t.para.server_url) || "string" != typeof t.para.server_url || (t.para.server_url = t.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
            "string" == typeof t.para.server_url && (t.para.debug_mode_url = t.para.debug_mode_url || t.para.server_url.replace("sa.gif", "debug")), t.para.noCache === !0 ? t.para.noCache = "?" + (new Date).getTime() : t.para.noCache = "", t.para.callback_timeout > t.para.datasend_timeout && (t.para.datasend_timeout = t.para.callback_timeout), t.para.callback_timeout > t.para.queue_timeout && (t.para.queue_timeout = t.para.callback_timeout), t.para.queue_timeout > t.para.datasend_timeout && (t.para.datasend_timeout = t.para.queue_timeout)
        }, t.readyState = {
            state: 0,
            historyState: [],
            stateType: {1: "1-init\u672a\u5f00\u59cb", 2: "2-init\u5f00\u59cb", 3: "3-store\u5b8c\u6210"},
            getState: function () {
                return this.historyState.join("\n")
            },
            setState: function (e) {
                String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e])
            }
        }, t.setPreConfig = function (e) {
            t.para = e.para, t._q = e._q
        }, t.setInitVar = function () {
            t._t = t._t || 1 * new Date, t.lib_version = "1.17.2", t.is_first_visitor = !1, t.source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term"
        }, t.log = function () {
            if ((r.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || t.para.show_log) && (!r.isObject(arguments[0]) || t.para.show_log !== !0 && "string" !== t.para.show_log && t.para.show_log !== !1 || (arguments[0] = r.formatJsonString(arguments[0])), "object" == typeof console && console.log)) try {
                return console.log.apply(console, arguments)
            } catch (e) {
                console.log(arguments[0])
            }
        }, t.enableLocalLog = function () {
            if (r.sessionStorage.isSupport()) try {
                sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
            } catch (e) {
                t.log("enableLocalLog error: " + e.message)
            }
        }, t.disableLocalLog = function () {
            r.sessionStorage.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
        }, t.debug = {
            distinct_id: function () {
            }, jssdkDebug: function () {
            }, _sendDebug: function (e) {
                t.track("_sensorsdata2019_debug", {_jssdk_debug_info: e})
            }, apph5: function (e) {
                var a = "app_h5\u6253\u901a\u5931\u8d25-", n = {
                    1: a + "use_app_track\u4e3afalse",
                    2: a + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
                    3.1: a + "Android\u6821\u9a8cserver_url\u5931\u8d25",
                    3.2: a + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
                    4.1: a + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
                    4.2: a + "H5 \u6821\u9a8c Android server_url \u5931\u8d25"
                }, i = e.output, s = e.step, o = e.data || "";
                "all" !== i && "console" !== i || t.log(n[s]), ("all" === i || "code" === i) && r.isObject(t.para.is_debug) && t.para.is_debug.apph5 && (o.type && "profile" === o.type.slice(0, 7) || (o.properties._jssdk_debug_info = "apph5-" + String(s)))
            }, defineMode: function (e) {
                var t = {
                    1: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "\u914d\u7f6e\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    },
                    2: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "\u914d\u7f6e\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    },
                    3: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "\u914d\u7f6e\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
                    },
                    4: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "\u914d\u7f6e\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    }
                };
                return !(!e || !t[e]) && t[e]
            }, protocol: {
                protocolIsSame: function (e, a) {
                    try {
                        if (r.URL(e).protocol !== r.URL(a).protocol) return !1
                    } catch (n) {
                        return t.log("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"), !1
                    }
                    return !0
                }, serverUrl: function () {
                    r.isString(t.para.server_url) && "" !== t.para.server_url && !this.protocolIsSame(t.para.server_url, location.href) && t.log("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")
                }, ajax: function (e) {
                    return e !== t.para.server_url && void (r.isString(e) && "" !== e && !this.protocolIsSame(e, location.href) && t.log("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"))
                }
            }
        };
        var a = {
            setOnlineState: function (e) {
                if (e === !0 && r.isObject(t.para.jsapp) && "function" == typeof t.para.jsapp.getData) {
                    t.para.jsapp.isOnline = !0;
                    var a = t.para.jsapp.getData();
                    r.isArray(a) && a.length > 0 && r.each(a, function (e) {
                        r.isJSONString(e) && t.sendState.pushSend(JSON.parse(e))
                    })
                } else t.para.jsapp.isOnline = !1
            }, autoTrackIsUsed: !1, isReady: function (e) {
                e()
            }, getUtm: function () {
                return r.info.campaignParams()
            }, getStayTime: function () {
                return (new Date - t._t) / 1e3
            }, setProfileLocal: function (e) {
                if (!r.localStorage.isSupport()) return t.setProfile(e), !1;
                if (!r.isObject(e) || r.isEmptyObject(e)) return !1;
                var a = r.localStorage.parse("sensorsdata_2015_jssdk_profile"), n = !1;
                if (r.isObject(a) && !r.isEmptyObject(a)) {
                    for (var i in e) !(i in a && a[i] !== e[i]) && i in a || (a[i] = e[i], n = !0);
                    n && (r.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(a)), t.setProfile(e))
                } else r.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)), t.setProfile(e)
            }, setInitReferrer: function () {
                var e = r.getReferrer();
                t.setOnceProfile({_init_referrer: e, _init_referrer_host: r.info.pageProp.referrer_host})
            }, setSessionReferrer: function () {
                var e = r.getReferrer();
                c.setSessionPropsOnce({_session_referrer: e, _session_referrer_host: r.info.pageProp.referrer_host})
            }, setDefaultAttr: function () {
                r.info.register({
                    _current_url: location.href,
                    _referrer: r.getReferrer(),
                    _referring_host: r.info.pageProp.referrer_host
                })
            }, trackHeatMap: function (e, a, n) {
                if ("object" == typeof e && e.tagName) {
                    var i = e.tagName.toLowerCase(), s = e.parentNode.tagName.toLowerCase(),
                        o = t.para.heatmap && t.para.heatmap.track_attr ? t.para.heatmap.track_attr : ["data-sensors-click"];
                    "button" === i || "a" === i || "a" === s || "button" === s || "input" === i || "textarea" === i || r.hasAttributes(e, o) || u.start(null, e, i, a, n)
                }
            }, trackAllHeatMap: function (e, t, r) {
                if ("object" == typeof e && e.tagName) {
                    var a = e.tagName.toLowerCase();
                    u.start(null, e, a, t, r)
                }
            }, autoTrackSinglePage: function (e, a) {
                function n () {
                    var e = r.info.campaignParams(), a = {};
                    return r.each(e, function (e, r, n) {
                        (" " + t.source_channel_standard + " ").indexOf(" " + r + " ") !== -1 ? a["$" + r] = n[r] : a[r] = n[r]
                    }), a
                }

                function i (e, a) {
                    t.track("$pageview", r.extend({
                        $referrer: r.isDecodeURI(t.para.url_is_decode, s),
                        $url: r.isDecodeURI(t.para.url_is_decode, location.href),
                        $url_path: location.pathname,
                        $title: document.title
                    }, e, n()), a), s = location.href
                }

                if (this.autoTrackIsUsed) var s = r.info.pageProp.url; else var s = r.info.pageProp.referrer;
                e = r.isObject(e) ? e : {}, e = r.isObject(e) ? e : {}, t.is_first_visitor && !e.not_set_profile && (t.setOnceProfile(r.extend({
                    $first_visit_time: new Date,
                    $first_referrer: r.isDecodeURI(t.para.url_is_decode, r.getReferrer()),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: r.getSourceFromReferrer(),
                    $first_search_keyword: r.getKeywordFromReferrer()
                }, n())), t.is_first_visitor = !1), e.not_set_profile && delete e.not_set_profile, i(e, a), this.autoTrackSinglePage = i
            }, autoTrackWithoutProfile: function (e, t) {
                e = r.isObject(e) ? e : {}, this.autoTrack(r.extend(e, {not_set_profile: !0}), t)
            }, autoTrack: function (e, a) {
                e = r.isObject(e) ? e : {};
                var n = r.info.campaignParams(), i = {};
                r.each(n, function (e, r, a) {
                    (" " + t.source_channel_standard + " ").indexOf(" " + r + " ") !== -1 ? i["$" + r] = a[r] : i[r] = a[r]
                }), t.is_first_visitor && !e.not_set_profile && (t.setOnceProfile(r.extend({
                    $first_visit_time: new Date,
                    $first_referrer: r.isDecodeURI(t.para.url_is_decode, r.getReferrer()),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: r.getSourceFromReferrer(),
                    $first_search_keyword: r.getKeywordFromReferrer()
                }, i)), t.is_first_visitor = !1), e.not_set_profile && delete e.not_set_profile;
                var s = location.href;
                t.para.is_single_page && r.addHashEvent(function () {
                    var n = r.getReferrer(s);
                    t.track("$pageview", r.extend({
                        $referrer: r.isDecodeURI(t.para.url_is_decode, n),
                        $url: r.isDecodeURI(t.para.url_is_decode, location.href),
                        $url_path: location.pathname,
                        $title: document.title
                    }, i, e), a), s = location.href
                }), t.track("$pageview", r.extend({
                    $referrer: r.isDecodeURI(t.para.url_is_decode, r.getReferrer()),
                    $url: r.isDecodeURI(t.para.url_is_decode, location.href),
                    $url_path: location.pathname,
                    $title: document.title
                }, i, e), a), this.autoTrackIsUsed = !0
            }, getAnonymousID: function () {
                return r.isEmptyObject(t.store._state) ? "\u8bf7\u5148\u521d\u59cb\u5316SDK" : t.store._state._first_id || t.store._state.first_id || t.store._state._distinct_id || t.store._state.distinct_id
            }, setPlugin: function (e) {
                return !!r.isObject(e) && void r.each(e, function (e, a) {
                    r.isFunction(e) && (r.isObject(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[a] ? e(window.SensorsDataWebJSSDKPlugin[a]) : t.log(a + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + a + "\u7684\u5f15\u5165\u987a\u5e8f\uff01"))
                })
            }, useModulePlugin: function () {
                t.use.apply(t, arguments)
            }, useAppPlugin: function () {
                this.setPlugin.apply(this, arguments)
            }
        };
        t.quick = function () {
            var e = Array.prototype.slice.call(arguments), r = e[0], n = e.slice(1);
            return "string" == typeof r && a[r] ? a[r].apply(a, n) : void ("function" == typeof r ? r.apply(t, n) : t.log("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + e[0]))
        }, t.use = function (e, a) {
            return r.isString(e) ? r.isObject(window.SensorsDataWebJSSDKPlugin) && r.isObject(window.SensorsDataWebJSSDKPlugin[e]) && r.isFunction(window.SensorsDataWebJSSDKPlugin[e].init) ? (window.SensorsDataWebJSSDKPlugin[e].init(t, a), window.SensorsDataWebJSSDKPlugin[e]) : r.isObject(t.modules) && r.isObject(t.modules[e]) && r.isFunction(t.modules[e].init) ? (t.modules[e].init(t, a), t.modules[e]) : void t.log(e + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + e + "\u7684\u5f15\u5165\u987a\u5e8f\uff01") : (t.log("use\u63d2\u4ef6\u540d\u79f0\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff01"), !1)
        }, t.track = function (e, t, r) {
            s.check({event: e, properties: t}) && s.send({type: "track", event: e, properties: t}, r)
        }, t.trackLink = function (e, t, a) {
            "object" == typeof e && e.tagName ? r.trackLink({ele: e}, t, a) : "object" == typeof e && e.target && e.event && r.trackLink(e, t, a)
        }, t.trackLinks = function (e, a, n) {
            return n = n || {}, !(!e || "object" != typeof e) && (!(!e.href || /^javascript/.test(e.href) || e.target) && void r.addEvent(e, "click", function (r) {
                function i () {
                    s || (s = !0, location.href = e.href)
                }

                r.preventDefault();
                var s = !1;
                setTimeout(i, 1e3), t.track(a, n, i)
            }))
        }, t.setProfile = function (e, t) {
            s.check({propertiesMust: e}) && s.send({type: "profile_set", properties: e}, t)
        }, t.setOnceProfile = function (e, t) {
            s.check({propertiesMust: e}) && s.send({type: "profile_set_once", properties: e}, t)
        }, t.appendProfile = function (e, a) {
            s.check({propertiesMust: e}) && (r.each(e, function (a, n) {
                r.isString(a) ? e[n] = [a] : r.isArray(a) ? e[n] = a : (delete e[n], t.log("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
            }), r.isEmptyObject(e) || s.send({type: "profile_append", properties: e}, a))
        }, t.incrementProfile = function (e, a) {
            function n (e) {
                for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) return !1;
                return !0
            }

            var i = e;
            r.isString(e) && (e = {}, e[i] = 1), s.check({propertiesMust: e}) && (n(e) ? s.send({
                type: "profile_increment",
                properties: e
            }, a) : t.log("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"))
        }, t.deleteProfile = function (e) {
            s.send({type: "profile_delete"}, e), c.set("distinct_id", r.UUID()), c.set("first_id", "")
        }, t.unsetProfile = function (e, a) {
            var n = e, i = {};
            r.isString(e) && (e = [], e.push(n)), r.isArray(e) ? (r.each(e, function (e) {
                r.isString(e) ? i[e] = !0 : t.log("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389", e)
            }), s.send({
                type: "profile_unset",
                properties: i
            }, a)) : t.log("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4")
        }, t.identify = function (e, a) {
            "number" == typeof e && (e = String(e));
            var n = c.getFirstId();
            if ("undefined" == typeof e) {
                var i = r.UUID();
                n ? c.set("first_id", i) : c.set("distinct_id", i)
            } else s.check({distinct_id: e}) ? a === !0 ? n ? c.set("first_id", e) : c.set("distinct_id", e) : n ? c.change("first_id", e) : c.change("distinct_id", e) : t.log("identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32")
        }, t.trackSignup = function (e, t, r, a) {
            if (s.check({distinct_id: e, event: t, properties: r})) {
                var n = c.getFirstId() || c.getDistinctId();
                c.set("distinct_id", e), s.send({
                    original_id: n,
                    distinct_id: e,
                    type: "track_signup",
                    event: t,
                    properties: r
                }, a)
            }
        }, t.registerPage = function (e) {
            s.check({properties: e}) ? r.extend(r.info.currentProps, e) : t.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, t.clearAllRegister = function (e) {
            c.clearAllProps(e)
        }, t.clearPageRegister = function (e) {
            if (r.isArray(e) && e.length > 0) for (var t = 0; t < e.length; t++) r.isString(e[t]) && e[t] in r.info.currentProps && delete r.info.currentProps[e[t]]; else if (e === !0) for (var t in r.info.currentProps) delete r.info.currentProps[t]
        }, t.register = function (e) {
            s.check({properties: e}) ? c.setProps(e) : t.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, t.registerOnce = function (e) {
            s.check({properties: e}) ? c.setPropsOnce(e) : t.log("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, t.registerSession = function (e) {
            s.check({properties: e}) ? c.setSessionProps(e) : t.log("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, t.registerSessionOnce = function (e) {
            s.check({properties: e}) ? c.setSessionPropsOnce(e) : t.log("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, t.login = function (e, r) {
            if ("number" == typeof e && (e = String(e)), s.check({distinct_id: e})) {
                var a = c.getFirstId(), n = c.getDistinctId();
                e !== n ? (a || c.set("first_id", n), t.trackSignup(e, "$SignUp", {}, r)) : r && r()
            } else t.log("login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"), r && r()
        }, t.logout = function (e) {
            var a = c.getFirstId();
            if (a) if (c.set("first_id", ""), e === !0) {
                var n = r.UUID();
                c.set("distinct_id", n)
            } else c.set("distinct_id", a); else t.log("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
        }, t.getPresetProperties = function () {
            function e () {
                var e = r.info.campaignParams(), a = {};
                return r.each(e, function (e, r, n) {
                    (" " + t.source_channel_standard + " ").indexOf(" " + r + " ") !== -1 ? a["$" + r] = n[r] : a[r] = n[r]
                }), a
            }

            var a = {
                $is_first_day: r.cookie.getNewUser(),
                $referrer: r.isDecodeURI(t.para.url_is_decode, r.info.pageProp.referrer) || "",
                $referrer_host: r.info.pageProp.referrer ? r.getHostname(r.info.pageProp.referrer) : "",
                $url: r.isDecodeURI(t.para.url_is_decode, location.href),
                $url_path: location.pathname,
                $title: document.title || "",
                _distinct_id: c.getDistinctId()
            }, n = r.extend({}, r.info.properties(), t.store.getProps(), e(), a);
            return t.para.preset_properties.latest_referrer && t.para.preset_properties.latest_referrer_host && (n.$latest_referrer_host = "" === n.$latest_referrer ? "" : r.getHostname(n.$latest_referrer)), n
        }, t.detectMode = function () {
            function e () {
                t.readyState.setState(3);
                new t.JSBridge({
                    type: "visualized", app_call_js: function () {
                        i("undefined" != typeof sa_jssdk_app_define_mode ? !0 : !1)
                    }
                });
                i(!1), t.bridge.app_js_bridge_v1(), r.info.initPage(), t.para.is_track_single_page && r.addSinglePageEvent(function (e) {
                    var a = function (a) {
                        a = a || {}, e !== location.href && (r.info.pageProp.referrer = e, e = r.isDecodeURI(t.para.url_is_decode, e), t.quick("autoTrack", r.extend({
                            $url: r.isDecodeURI(t.para.url_is_decode, location.href),
                            $referrer: e
                        }, a)))
                    };
                    if ("boolean" == typeof t.para.is_track_single_page) a(); else if ("function" == typeof t.para.is_track_single_page) {
                        var n = t.para.is_track_single_page();
                        r.isObject(n) ? a(n) : n === !0 && a()
                    }
                }), t.para.batch_send && (r.addEvent(window, "onpagehide" in window ? "pagehide" : "unload", function (e) {
                    t.batchSend.clearPendingStatus()
                }), t.batchSend.batchInterval()), t.store.init(), t.readyState.setState(4), t._q && r.isArray(t._q) && t._q.length > 0 && r.each(t._q, function (e) {
                    t[e[0]].apply(t, Array.prototype.slice.call(e[1]))
                }), r.isObject(t.para.heatmap) && (u.initHeatmap(), u.initScrollmap())
            }

            var a = {
                searchKeywordMatch: location.search.match(/sa-request-id=([^&#]+)/), isSeachHasKeyword: function () {
                    var e = this.searchKeywordMatch;
                    return !!(e && e[0] && e[1]) && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), !0)
                }, hasKeywordHandle: function () {
                    var e = this.searchKeywordMatch, t = location.search.match(/sa-request-type=([^&#]+)/),
                        a = location.search.match(/sa-request-url=([^&#]+)/);
                    u.setNotice(a), r.sessionStorage.isSupport() && (a && a[0] && a[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(a[1])), sessionStorage.setItem("sensors_heatmap_id", e[1]), t && t[0] && t[1] ? "1" === t[1] || "2" === t[1] || "3" === t[1] ? (t = t[1], sessionStorage.setItem("sensors_heatmap_type", t)) : t = null : t = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), this.isReady(e[1], t)
                }, isReady: function (e, a, n) {
                    t.para.heatmap_url ? r.loadScript({
                        success: function () {
                            setTimeout(function () {
                                "undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(t, e, a, n), "object" == typeof console && "function" == typeof console.log && (t.heatmap_version && t.heatmap_version === t.lib_version || console.log("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))
                            }, 0)
                        }, error: function () {
                        }, type: "js", url: t.para.heatmap_url
                    }) : t.log("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")
                }, isStorageHasKeyword: function () {
                    return r.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
                }, storageHasKeywordHandle: function () {
                    u.setNotice(), a.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
                }
            }, n = {
                isStorageHasKeyword: function () {
                    return r.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode")
                }, isSearchHasKeyword: function () {
                    return !!location.search.match(/sa-visual-mode=true/) && ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), !0)
                }, loadVtrack: function () {
                    r.loadScript({
                        success: function () {
                        },
                        error: function () {
                        },
                        type: "js",
                        url: t.para.vtrack_url ? t.para.vtrack_url : location.protocol + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/vtrack.min.js"
                    })
                }, messageListener: function (e) {
                    function a (e) {
                        return r.secCheck.isHttpUrl(e) ? r.secCheck.removeScriptProtocol(e) : (t.log("\u53ef\u89c6\u5316\u6a21\u5f0f\u68c0\u6d4b URL \u5931\u8d25"), !1)
                    }

                    if ("sa-fe" !== e.data.source) return !1;
                    if ("v-track-mode" === e.data.type) {
                        if (e.data.data && e.data.data.isVtrack) if (r.sessionStorage.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), e.data.data.userURL && location.search.match(/sa-visual-mode=true/)) {
                            var i = a(e.data.data.userURL);
                            i && (window.location.href = i)
                        } else n.loadVtrack();
                        window.removeEventListener("message", n.messageListener, !1)
                    }
                }, removeMessageHandle: function () {
                    window.removeEventListener && window.removeEventListener("message", n.messageListener, !1)
                }, verifyVtrackMode: function () {
                    window.addEventListener && window.addEventListener("message", n.messageListener, !1), n.postMessage()
                }, postMessage: function () {
                    window.parent && window.parent.postMessage && window.parent.postMessage({
                        source: "sa-web-sdk",
                        type: "v-is-vtrack",
                        data: {sdkversion: "1.17.2"}
                    }, "*")
                }, notifyUser: function () {
                    var e = function (t) {
                        return "sa-fe" === t.data.source && void ("v-track-mode" === t.data.type && (t.data.data && t.data.data.isVtrack && alert("\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"),
                            window.removeEventListener("message", e, !1)))
                    };
                    window.addEventListener && window.addEventListener("message", e, !1), n.postMessage()
                }
            }, i = function (e) {
                function a () {
                    var e = [];
                    n.touch_app_bridge || e.push(t.debug.defineMode("1")), r.isObject(t.para.app_js_bridge) || (e.push(t.debug.defineMode("2")), n.verify_success = !1), r.isObject(t.para.heatmap) && "default" == t.para.heatmap.clickmap || e.push(t.debug.defineMode("3")), "fail" === n.verify_success && e.push(t.debug.defineMode("4"));
                    var a = {callType: "app_alert", data: e};
                    SensorsData_App_Visual_Bridge && SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info ? SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info(JSON.stringify(a)) : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(a))
                }

                var n = t.bridge.initDefineBridgeInfo();
                if (r.isObject(window.SensorsData_App_Visual_Bridge) && window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode && (window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode === !0 || window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode())) if (r.isObject(t.para.heatmap) && "default" == t.para.heatmap.clickmap) if (r.isObject(t.para.app_js_bridge) && "success" === n.verify_success) if (e) sa_jssdk_app_define_mode(t, e); else {
                    var i = location.protocol, s = ["http:", "https:"];
                    i = r.indexOf(s, i) > -1 ? i : "https:", r.loadScript({
                        success: function () {
                            setTimeout(function () {
                                "undefined" != typeof sa_jssdk_app_define_mode && sa_jssdk_app_define_mode(t, e)
                            }, 0)
                        }, error: function () {
                        }, type: "js", url: i + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/vapph5define.min.js"
                    })
                } else a(); else a()
            };
            t.para.heatmap && t.para.heatmap.collect_tags && r.isObject(t.para.heatmap.collect_tags) && r.each(t.para.heatmap.collect_tags, function (e, r) {
                "div" !== r && e && t.heatmap.otherTags.push(r)
            }), a.isSeachHasKeyword() ? a.hasKeywordHandle() : window.parent !== self && n.isSearchHasKeyword() ? n.verifyVtrackMode() : a.isStorageHasKeyword() ? a.storageHasKeywordHandle() : window.parent !== self && n.isStorageHasKeyword() ? n.verifyVtrackMode() : (e(), n.notifyUser())
        }, e.prototype = {
            add: function (e) {
                r.isObject(e) && (this.writeStore(e), "track_signup" !== e.type && "$pageview" !== e.event || this.sendStrategy())
            }, clearPendingStatus: function () {
                this.sendingItemKeys.length && this.removePendingItems(this.sendingItemKeys)
            }, remove: function (e) {
                this.sendingData > 0 && --this.sendingData, r.isArray(e) && e.length > 0 && r.each(e, function (e) {
                    r.localStorage.remove(e)
                })
            }, send: function (e) {
                var a, n = this;
                return r.isString(t.para.server_url) && "" !== t.para.server_url || r.isArray(t.para.server_url) && t.para.server_url.length ? (a = r.isArray(t.para.server_url) ? t.para.server_url[0] : t.para.server_url, void r.ajax({
                    url: a,
                    type: "POST",
                    data: "data_list=" + encodeURIComponent(r.base64Encode(JSON.stringify(e.vals))),
                    credentials: !1,
                    timeout: t.para.batch_send.datasend_timeout,
                    cors: !0,
                    success: function () {
                        n.remove(e.keys), n.removePendingItems(e.keys)
                    },
                    error: function () {
                        n.sendingData > 0 && --n.sendingData, n.removePendingItems(e.keys)
                    }
                })) : void t.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
            }, appendPendingItems: function (e) {
                if (r.isArray(e) !== !1) {
                    this.sendingItemKeys = r.unique(this.sendingItemKeys.concat(e));
                    try {
                        var t = this.getPendingItems(), a = r.unique(t.concat(e));
                        localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(a))
                    } catch (n) {
                    }
                }
            }, removePendingItems: function (e) {
                if (r.isArray(e) !== !1) {
                    this.sendingItemKeys.length && (this.sendingItemKeys = r.filter(this.sendingItemKeys, function (t) {
                        return r.indexOf(e, t) === -1
                    }));
                    try {
                        var t = this.getPendingItems(), a = r.filter(t, function (t) {
                            return r.indexOf(e, t) === -1
                        });
                        localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(a))
                    } catch (n) {
                    }
                }
            }, getPendingItems: function () {
                var e = [];
                try {
                    var t = localStorage.getItem("sawebjssdk-sendingitems");
                    t && (e = JSON.parse(t))
                } catch (r) {
                }
                return e
            }, sendPrepare: function (e) {
                this.appendPendingItems(e.keys);
                var t = e.vals, r = t.length;
                r > 0 && this.send({keys: e.keys, vals: t})
            }, sendStrategy: function () {
                if (document.hasFocus() === !1) return !1;
                var e = this.readStore();
                e.keys.length > 0 && 0 === this.sendingData && (this.sendingData = 1, this.sendPrepare(e))
            }, batchInterval: function () {
                var e = this;
                setInterval(function () {
                    e.sendStrategy()
                }, t.para.batch_send.send_interval)
            }, readStore: function () {
                for (var e = [], a = [], n = null, i = (new Date).getTime(), s = localStorage.length, o = this.getPendingItems(), c = 0; c < s; c++) {
                    var l = localStorage.key(c);
                    if (0 === l.indexOf("sawebjssdk-") && /^sawebjssdk\-\d+$/.test(l)) {
                        if (o.length && r.indexOf(o, l) > -1) continue;
                        n = localStorage.getItem(l), n ? (n = r.safeJSONParse(n), n && r.isObject(n) ? (n._flush_time = i, e.push(l), a.push(n)) : (localStorage.removeItem(l), t.log("localStorage-\u6570\u636eparse\u5f02\u5e38" + n))) : (localStorage.removeItem(l), t.log("localStorage-\u6570\u636e\u53d6\u503c\u5f02\u5e38" + n))
                    }
                }
                return {keys: e, vals: a}
            }, writeStore: function (e) {
                var t = String(r.getRandom()).slice(2, 5) + String(r.getRandom()).slice(2, 5) + String((new Date).getTime()).slice(3);
                localStorage.setItem("sawebjssdk-" + t, JSON.stringify(e))
            }
        }, t.batchSend = new e;
        var n = {};
        n.getSendUrl = function (e, t) {
            var a = r.base64Encode(t), n = "crc=" + r.hashCode(a);
            return e.indexOf("?") !== -1 ? e + "&data=" + encodeURIComponent(a) + "&ext=" + encodeURIComponent(n) : e + "?data=" + encodeURIComponent(a) + "&ext=" + encodeURIComponent(n)
        }, n.getSendData = function (e) {
            var t = r.base64Encode(e), a = "crc=" + r.hashCode(t);
            return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(a)
        }, n.getInstance = function (e) {
            var a = this.getSendType(e), n = new this[a](e), i = n.start;
            return n.start = function () {
                r.isObject(t.para.is_debug) && t.para.is_debug.storage && t.store.requests && t.store.requests.push({
                    name: this.server_url,
                    initiatorType: this.img ? "img" : "xmlhttprequest",
                    entryType: "resource",
                    requestData: this.data
                });
                var e = this;
                i.apply(this, arguments), setTimeout(function () {
                    e.isEnd(!0)
                }, t.para.callback_timeout)
            }, n.end = function () {
                this.callback && this.callback();
                var e = this;
                setTimeout(function () {
                    e.lastClear && e.lastClear()
                }, t.para.datasend_timeout - t.para.callback_timeout)
            }, n.isEnd = function (e) {
                if (!this.received) {
                    this.received = !0, this.end();
                    var r = this;
                    e ? t.para.queue_timeout - t.para.callback_timeout <= 0 ? r.close() : setTimeout(function () {
                        r.close()
                    }, t.para.queue_timeout - t.para.callback_timeout) : r.close()
                }
            }, n
        }, n.getRealtimeInstance = function (e) {
            var r = this.getSendType(e), a = new this[r](e);
            a.defaultData = e;
            var n = a.start;
            return a.start = function () {
                var e = this;
                n.apply(this, arguments), setTimeout(function () {
                    e.isEnd(!0)
                }, t.para.callback_timeout)
            }, a.end = function () {
                this.callback && this.callback();
                var e = this;
                setTimeout(function () {
                    e.lastClear && e.lastClear()
                }, t.para.datasend_timeout - t.para.callback_timeout)
            }, a.isEnd = function (e) {
                this.received || (this.received = !0, this.end())
            }, a
        }, n.getSendType = function (e) {
            var a = ["image", "ajax", "beacon"], n = a[0];
            return n = e.config && r.indexOf(a, e.config.send_type) > -1 ? e.config.send_type : t.para.send_type, "beacon" === n && r.isSupportBeaconSend() === !1 && (n = "image"), "ajax" === n && r.isSupportCors() === !1 && (n = "image"), n
        }, n.image = function (e) {
            this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, t.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.data = e.data, this.server_url = n.getSendUrl(e.server_url, e.data)
        }, n.image.prototype.start = function () {
            var e = this;
            t.para.ignore_oom && (this.img.onload = function () {
                this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
            }, this.img.onerror = function () {
                this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
            }, this.img.onabort = function () {
                this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
            }), this.img.src = this.server_url
        }, n.image.prototype.lastClear = function () {
            this.img.src = ""
        }, n.ajax = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = n.getSendData(e.data)
        }, n.ajax.prototype.start = function () {
            var e = this;
            r.ajax({
                url: this.server_url,
                type: "POST",
                data: this.data,
                credentials: !1,
                timeout: t.para.datasend_timeout,
                cors: !0,
                success: function () {
                    e.isEnd()
                },
                error: function () {
                    e.isEnd()
                }
            })
        }, n.beacon = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = n.getSendData(e.data)
        }, n.beacon.prototype.start = function () {
            var e = this;
            "object" == typeof navigator && "function" == typeof navigator.sendBeacon && (navigator.sendBeacon(this.server_url, this.data) || (this.defaultData.config.send_type = "image", i.realtimeSend(this.defaultData))), setTimeout(function () {
                e.isEnd()
            }, 40)
        };
        var i = {};
        t.sendState = i, t.events = new r.eventEmitter, i.queue = r.autoExeQueue(), i.getSendCall = function (e, a, n) {
            if (t.is_heatmap_render_mode) return !1;
            if (t.readyState.state < 3) return t.log("\u521d\u59cb\u5316\u6ca1\u6709\u5b8c\u6210"), !1;
            e._track_id = Number(String(r.getRandom()).slice(2, 5) + String(r.getRandom()).slice(2, 4) + String((new Date).getTime()).slice(-4)), t.para.use_client_time && (e._flush_time = (new Date).getTime());
            var i = e;
            e = JSON.stringify(e);
            var s = {data: i, config: a, callback: n};
            return t.events.tempAdd("send", i), !t.para.app_js_bridge && t.para.batch_send && localStorage.length < 200 ? (t.log(i), t.batchSend.add(s.data), !1) : (t.bridge.dataSend(s, this, n), void t.log(i))
        }, i.prepareServerUrl = function (e) {
            if ("object" == typeof e.config && e.config.server_url) this.sendCall(e, e.config.server_url, e.callback); else if (r.isArray(t.para.server_url) && t.para.server_url.length) for (var a = 0; a < t.para.server_url.length; a++) this.sendCall(e, t.para.server_url[a]); else "string" == typeof t.para.server_url && "" !== t.para.server_url ? this.sendCall(e, t.para.server_url, e.callback) : t.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
        }, i.sendCall = function (e, a, n) {
            var i = {server_url: a, data: JSON.stringify(e.data), callback: n, config: e.config};
            r.isObject(t.para.jsapp) && !t.para.jsapp.isOnline && "function" == typeof t.para.jsapp.setData ? (delete i.callback, i = JSON.stringify(i), t.para.jsapp.setData(i)) : t.para.use_client_time ? this.realtimeSend(i) : this.pushSend(i)
        }, i.pushSend = function (e) {
            var t = n.getInstance(e), r = this;
            t.close = function () {
                r.queue.close()
            }, this.queue.enqueue(t)
        }, i.realtimeSend = function (e) {
            var t = n.getRealtimeInstance(e);
            t.start()
        };
        var s = {};
        t.saEvent = s, s.checkOption = {
            regChecks: {regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},
            checkPropertiesKey: function (e) {
                var t = this, a = !0;
                return r.each(e, function (e, r) {
                    t.regChecks.regName.test(r) || (a = !1)
                }), a
            },
            check: function (e, t) {
                return "string" == typeof this[e] ? this[this[e]](t) : r.isFunction(this[e]) ? this[e](t) : void 0
            },
            str: function (e) {
                return !!r.isString(e) || (t.log("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"), !0)
            },
            properties: function (e) {
                return r.strip_sa_properties(e), !e || (r.isObject(e) ? !!this.checkPropertiesKey(e) || (t.log("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"), !0) : (t.log("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"), !0))
            },
            propertiesMust: function (e) {
                return r.strip_sa_properties(e), void 0 === e || !r.isObject(e) || r.isEmptyObject(e) ? (t.log("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"), !0) : !!this.checkPropertiesKey(e) || (t.log("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"), !0)
            },
            event: function (e) {
                return !(!r.isString(e) || !this.regChecks.regName.test(e)) || (t.log("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff0ceventName \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u4e14\u9700\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u5373\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c $,\u5176\u4e2d\u4ee5 $ \u5f00\u5934\u7684\u8868\u660e\u662f\u7cfb\u7edf\u7684\u4fdd\u7559\u5b57\u6bb5\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u8bf7\u4e0d\u8981\u4ee5 $ \u5f00\u5934"), !0)
            },
            test_id: "str",
            group_id: "str",
            distinct_id: function (e) {
                return !(!r.isString(e) || !/^.{1,255}$/.test(e)) || (t.log("distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32"), !1)
            }
        }, s.check = function (e) {
            var t = !0;
            for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && !this.checkOption.check(r, e[r])) return !1;
            return t
        }, s.send = function (e, a) {
            var n = {
                distinct_id: c.getDistinctId(),
                lib: {$lib: "js", $lib_method: "code", $lib_version: String(t.lib_version)},
                properties: {}
            };
            r.isObject(e) && r.isObject(e.properties) && !r.isEmptyObject(e.properties) && e.properties.$lib_detail && (n.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), r.extend(n, t.store.getUnionId(), e), r.isObject(e.properties) && !r.isEmptyObject(e.properties) && r.extend(n.properties, e.properties), e.type && "profile" === e.type.slice(0, 7) || (n.properties = r.extend({}, r.info.properties(), c.getProps(), c.getSessionProps(), r.info.currentProps, n.properties), t.para.preset_properties.latest_referrer && !r.isString(n.properties.$latest_referrer) && (n.properties.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"), t.para.preset_properties.latest_search_keyword && !r.isString(n.properties.$latest_search_keyword) && (n.properties.$latest_search_keyword = "\u53d6\u503c\u5f02\u5e38"), t.para.preset_properties.latest_traffic_source_type && !r.isString(n.properties.$latest_traffic_source_type) && (n.properties.$latest_traffic_source_type = "\u53d6\u503c\u5f02\u5e38"), t.para.preset_properties.latest_landing_page && !r.isString(n.properties.$latest_landing_page) && (n.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"), "not_collect" === t.para.preset_properties.latest_wx_ad_click_id ? (delete n.properties._latest_wx_ad_click_id, delete n.properties._latest_wx_ad_hash_key, delete n.properties._latest_wx_ad_callbacks) : t.para.preset_properties.latest_wx_ad_click_id && !r.isString(n.properties._latest_wx_ad_click_id) && (n.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38", n.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38", n.properties._latest_wx_ad_callbacks = "\u53d6\u503c\u5f02\u5e38"), r.isString(n.properties._latest_wx_ad_click_id) && (n.properties.$url = r.isDecodeURI(t.para.url_is_decode, window.location.href))), n.properties.$time && r.isDate(n.properties.$time) ? (n.time = 1 * n.properties.$time, delete n.properties.$time) : t.para.use_client_time && (n.time = 1 * new Date), r.parseSuperProperties(n), r.filterReservedProperties(n.properties), r.searchObjDate(n), r.searchObjString(n), r.searchZZAppStyle(n);
            var i = r.searchConfigData(n.properties);
            l.checkIsAddSign(n), l.checkIsFirstTime(n), t.addReferrerHost(n), t.addPropsHook(n), t.para.debug_mode === !0 ? (t.log(n), this.debugPath(JSON.stringify(n), a)) : t.sendState.getSendCall(n, i, a)
        }, s.debugPath = function (e, a) {
            var n = e, i = "";
            i = t.para.debug_mode_url.indexOf("?") !== -1 ? t.para.debug_mode_url + "&data=" + encodeURIComponent(r.base64Encode(e)) : t.para.debug_mode_url + "?data=" + encodeURIComponent(r.base64Encode(e)), r.ajax({
                url: i,
                type: "GET",
                cors: !0,
                header: {"Dry-Run": String(t.para.debug_mode_upload)},
                success: function (e) {
                    r.isEmptyObject(e) === !0 ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + n) : alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e))
                }
            })
        };
        var c = t.store = {
            requests: [], _sessionState: {}, _state: {distinct_id: "", first_id: "", props: {}}, getProps: function () {
                return this._state.props || {}
            }, getSessionProps: function () {
                return this._sessionState
            }, getDistinctId: function () {
                return this._state._distinct_id || this._state.distinct_id
            }, getUnionId: function () {
                var e = {}, t = this._state._first_id || this._state.first_id,
                    r = this._state._distinct_id || this._state.distinct_id;
                return t && r ? (e.login_id = r, e.anonymous_id = t) : e.anonymous_id = r, e
            }, getFirstId: function () {
                return this._state._first_id || this._state.first_id
            }, toState: function (e) {
                var a = null;
                if (null != e && r.isJSONString(e)) if (a = JSON.parse(e), this._state = r.extend(a), a.distinct_id) {
                    if ("object" == typeof a.props) {
                        for (var n in a.props) "string" == typeof a.props[n] && (a.props[n] = a.props[n].slice(0, t.para.max_referrer_string_length));
                        this.save()
                    }
                } else this.set("distinct_id", r.UUID()), t.debug.distinct_id("1", e); else this.set("distinct_id", r.UUID()), t.debug.distinct_id("2", e)
            }, initSessionState: function () {
                var e = r.cookie.get("sensorsdata2015session"), t = null;
                null !== e && "object" == typeof (t = JSON.parse(e)) && (this._sessionState = t || {})
            }, setOnce: function (e, t) {
                e in this._state || this.set(e, t)
            }, set: function (e, r) {
                this._state = this._state || {};
                var a = this._state.distinct_id;
                this._state[e] = r, "first_id" === e ? delete this._state._first_id : "distinct_id" === e && delete this._state._distinct_id, this.save(), "distinct_id" === e && a && t.events.tempAdd("changeDistinctId", r)
            }, change: function (e, t) {
                this._state["_" + e] = t
            }, setSessionProps: function (e) {
                var t = this._sessionState;
                r.extend(t, e), this.sessionSave(t)
            }, setSessionPropsOnce: function (e) {
                var t = this._sessionState;
                r.coverExtend(t, e), this.sessionSave(t)
            }, setProps: function (e, a) {
                var n = {};
                n = a ? e : r.extend(this._state.props || {}, e);
                for (var i in n) "string" == typeof n[i] && (n[i] = n[i].slice(0, t.para.max_referrer_string_length));
                this.set("props", n)
            }, setPropsOnce: function (e) {
                var t = this._state.props || {};
                r.coverExtend(t, e), this.set("props", t)
            }, clearAllProps: function (e) {
                if (this._sessionState = {}, r.isArray(e) && e.length > 0) for (var t = 0; t < e.length; t++) r.isString(e[t]) && e[t].indexOf("latest_") === -1 && e[t] in this._state.props && delete this._state.props[e[t]]; else for (var t in this._state.props) 1 !== t.indexOf("latest_") && delete this._state.props[t];
                this.sessionSave({}), this.save()
            }, sessionSave: function (e) {
                this._sessionState = e, r.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
            }, save: function () {
                var e = JSON.parse(JSON.stringify(this._state));
                delete e._first_id, delete e._distinct_id;
                var a = JSON.stringify(e);
                t.para.encrypt_cookie && (a = r.cookie.encrypt(a)), r.cookie.set(this.getCookieName(), a, 73e3, t.para.cross_subdomain)
            }, getCookieName: function () {
                var e = "";
                if (t.para.cross_subdomain === !1) {
                    try {
                        e = r.URL(location.href).hostname
                    } catch (a) {
                        t.log(a)
                    }
                    e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + e.replace(/\./g, "_") : "sa_jssdk_2015_root"
                } else e = "sensorsdata2015jssdkcross";
                return e
            }, init: function () {
                this.initSessionState();
                var e = r.UUID(), a = r.cookie.get(this.getCookieName());
                a = r.cookie.resolveValue(a), null === a ? (t.is_first_visitor = !0, this.set("distinct_id", e)) : (r.isJSONString(a) && JSON.parse(a).distinct_id || (t.is_first_visitor = !0), this.toState(a)), l.setDeviceId(e), l.storeInitCheck(), l.checkIsFirstLatest()
            }
        }, l = {
            checkIsAddSign: function (e) {
                "track" === e.type && (r.cookie.getNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
            }, is_first_visit_time: !1, checkIsFirstTime: function (e) {
                "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
            }, setDeviceId: function (e) {
                var a = null, n = r.cookie.get("sensorsdata2015jssdkcross");
                n = r.cookie.resolveValue(n);
                var i = {};
                null != n && r.isJSONString(n) && (i = JSON.parse(n), i.$device_id && (a = i.$device_id)), a = a || e, t.para.cross_subdomain === !0 ? c.set("$device_id", a) : (i.$device_id = a, i = JSON.stringify(i), t.para.encrypt_cookie && (i = r.cookie.encrypt(i)), r.cookie.set("sensorsdata2015jssdkcross", i, null, !0)), t.para.is_track_device_id && (r.info.currentProps.$device_id = a)
            }, storeInitCheck: function () {
                if (t.is_first_visitor) {
                    var e = new Date, a = {h: 23 - e.getHours(), m: 59 - e.getMinutes(), s: 59 - e.getSeconds()};
                    r.cookie.set(r.cookie.getCookieName("new_user"), "1", 3600 * a.h + 60 * a.m + a.s + "s"), this.is_first_visit_time = !0
                } else r.cookie.getNewUser() || (this.checkIsAddSign = function (e) {
                    "track" === e.type && (e.properties.$is_first_day = !1)
                }), this.checkIsFirstTime = function (e) {
                    "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
                }
            }, checkIsFirstLatest: function () {
                for (var e = r.info.pageProp.url_domain, a = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], n = c.getProps(), i = 0; i < a.length; i++) a[i] in n && delete n[a[i]];
                c.setProps(n, !0);
                var s = {};
                if ("" === e && (e = "url\u89e3\u6790\u5931\u8d25"), r.each(t.para.preset_properties, function (a, n) {
                    if (n.indexOf("latest_") === -1) return !1;
                    if (n = n.slice(7), a) {
                        if ("wx_ad_click_id" === n && "not_collect" === a) return !1;
                        if ("utm" !== n && "url\u89e3\u6790\u5931\u8d25" === e) "wx_ad_click_id" === n ? (s._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25", s._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25", s._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25") : s["$latest_" + n] = "url\u7684domain\u89e3\u6790\u5931\u8d25"; else if (r.isReferralTraffic(document.referrer)) switch (n) {
                            case"traffic_source_type":
                                s.$latest_traffic_source_type = r.getSourceFromReferrer();
                                break;
                            case"referrer":
                                s.$latest_referrer = r.isDecodeURI(t.para.url_is_decode, r.info.pageProp.referrer);
                                break;
                            case"search_keyword":
                                s.$latest_search_keyword = r.getKeywordFromReferrer();
                                break;
                            case"landing_page":
                                s.$latest_landing_page = r.isDecodeURI(t.para.url_is_decode, location.href);
                                break;
                            case"wx_ad_click_id":
                                var i = r.getWxAdIdFromUrl(location.href);
                                s._latest_wx_ad_click_id = i.click_id, s._latest_wx_ad_hash_key = i.hash_key, s._latest_wx_ad_callbacks = i.callbacks
                        }
                    } else if ("utm" === n && t.store._state.props) for (var o in t.store._state.props) (0 === o.indexOf("$latest_utm") || 0 === o.indexOf("_latest_") && o.indexOf("_latest_wx_ad_") < 0) && delete t.store._state.props[o]; else if (t.store._state.props && "$latest_" + n in t.store._state.props) delete t.store._state.props["$latest_" + n]; else if ("wx_ad_click_id" == n && t.store._state.props && a === !1) {
                        var c = ["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"];
                        r.each(c, function (e) {
                            e in t.store._state.props && delete t.store._state.props[e]
                        })
                    }
                }), t.register(s), t.para.preset_properties.latest_utm) {
                    var o = r.info.campaignParamsStandard("$latest_", "_latest_"), l = o.$utms, u = o.otherUtms;
                    r.isEmptyObject(l) || t.register(l), r.isEmptyObject(u) || t.register(u)
                }
            }
        };
        t.bridge = {
            is_verify_success: !1, initPara: function () {
                var e = {is_send: !0, white_list: [], is_mui: !1};
                "object" == typeof t.para.app_js_bridge ? t.para.app_js_bridge = r.extend({}, e, t.para.app_js_bridge) : t.para.use_app_track === !0 || t.para.app_js_bridge === !0 || "only" === t.para.use_app_track ? (t.para.use_app_track_is_send !== !1 && "only" !== t.para.use_app_track || (e.is_send = !1), t.para.app_js_bridge = r.extend({}, e)) : "mui" === t.para.use_app_track && (e.is_mui = !0, t.para.app_js_bridge = r.extend({}, e)), t.para.app_js_bridge.is_send === !1 && t.log("\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03\uff01")
            }, initState: function () {
                function e (e) {
                    function a (e) {
                        var a = {hostname: "", project: ""};
                        try {
                            a.hostname = r.URL(e).hostname, a.project = r.URL(e).searchParams.get("project") || "default"
                        } catch (n) {
                            t.log(n)
                        }
                        return a
                    }

                    var n = a(e), i = a(t.para.server_url);
                    if (n.hostname === i.hostname && n.project === i.project) return !0;
                    if (t.para.app_js_bridge.white_list.length > 0) for (var s = 0; s < t.para.app_js_bridge.white_list.length; s++) {
                        var o = a(t.para.app_js_bridge.white_list[s]);
                        if (o.hostname === n.hostname && o.project === n.project) return !0
                    }
                    return !1
                }

                if (r.isObject(t.para.app_js_bridge) && !t.para.app_js_bridge.is_mui) if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && r.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) e(window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) && (t.bridge.is_verify_success = !0); else if (r.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
                    var a = window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url();
                    a && e(a) && (t.bridge.is_verify_success = !0)
                }
            }, initDefineBridgeInfo: function () {
                var e = {touch_app_bridge: !0, verify_success: !1};
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && r.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url ? t.bridge.is_verify_success ? e.verify_success = "success" : e.verify_success = "fail" : r.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track ? t.bridge.is_verify_success ? e.verify_success = "success" : e.verify_success = "fail" : "object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify || SensorsData_APP_JS_Bridge.sensorsdata_track) ? SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify ? SensorsData_APP_JS_Bridge.sensorsdata_visual_verify(JSON.stringify({server_url: t.para.server_url})) ? e.verify_success = "success" : e.verify_success = "fail" : e.verify_success = "success" : !/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream ? e.touch_app_bridge = !1 : t.bridge.iOS_UA_bridge() ? e.verify_success = "success" : e.verify_success = "fail", e
            }, iOS_UA_bridge: function () {
                if (/sensors-verify/.test(navigator.userAgent)) {
                    var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
                    if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
                        e = e[1].split("?");
                        var a = null, n = null;
                        try {
                            a = r.URL(t.para.server_url).hostname, n = r.URL(t.para.server_url).searchParams.get("project") || "default"
                        } catch (i) {
                            t.log(i)
                        }
                        return !(!a || a !== e[0] || !n || n !== e[1])
                    }
                    return !1
                }
                return !!/sa-sdk-ios/.test(navigator.userAgent)
            }, dataSend: function (e, a, n) {
                function i (e) {
                    var a = JSON.stringify(r.extend({server_url: t.para.server_url}, e));
                    return a = a.replaceAll(/\r\n/g, ""), a = encodeURIComponent(a), "sensorsanalytics://trackEvent?event=" + a
                }

                var s = e.data;
                if (r.isObject(t.para.app_js_bridge) && !t.para.app_js_bridge.is_mui) if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && r.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) t.bridge.is_verify_success ? (window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify({
                    callType: "app_h5_track",
                    data: r.extend({server_url: t.para.server_url}, s)
                })), "function" == typeof n && n()) : t.para.app_js_bridge.is_send ? (t.debug.apph5({
                    data: s,
                    step: "4.1",
                    output: "all"
                }), a.prepareServerUrl(e)) : "function" == typeof n && n(); else if (r.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) t.bridge.is_verify_success ? (SensorsData_APP_New_H5_Bridge.sensorsdata_track(JSON.stringify(r.extend({server_url: t.para.server_url}, s))), "function" == typeof n && n()) : t.para.app_js_bridge.is_send ? (t.debug.apph5({
                    data: s,
                    step: "4.2",
                    output: "all"
                }), a.prepareServerUrl(e)) : "function" == typeof n && n(); else if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) SensorsData_APP_JS_Bridge.sensorsdata_verify ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(r.extend({server_url: t.para.server_url}, s))) ? "function" == typeof n && n() : t.para.app_js_bridge.is_send ? (t.debug.apph5({
                    data: s,
                    step: "3.1",
                    output: "all"
                }), a.prepareServerUrl(e)) : "function" == typeof n && n() : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(r.extend({server_url: t.para.server_url}, s))), "function" == typeof n && n()); else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) r.isObject(t.para.app_js_bridge) && t.para.app_js_bridge.is_send === !0 ? (t.debug.apph5({
                    data: s,
                    step: "2",
                    output: "all"
                }), a.prepareServerUrl(e)) : "function" == typeof n && n(); else {
                    var o = null;
                    if (t.bridge.iOS_UA_bridge()) {
                        o = document.createElement("iframe");
                        var c = i(s);
                        o.setAttribute("src", c), document.documentElement.appendChild(o), o.parentNode.removeChild(o), o = null, "function" == typeof n && n()
                    } else t.para.app_js_bridge.is_send ? (t.debug.apph5({
                        data: s,
                        step: "3.2",
                        output: "all"
                    }), a.prepareServerUrl(e)) : "function" == typeof n && n()
                } else r.isObject(t.para.app_js_bridge) && t.para.app_js_bridge.is_mui ? r.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event ? (window.plus.SDAnalytics.trackH5Event(data), "function" == typeof n && n()) : r.isObject(t.para.app_js_bridge) && t.para.app_js_bridge.is_send === !0 ? a.prepareServerUrl(e) : "function" == typeof n && n() : (t.debug.apph5({
                    data: s,
                    step: "1",
                    output: "code"
                }), a.prepareServerUrl(e))
            }, app_js_bridge_v1: function () {
                function e (e) {
                    i = e, r.isJSONString(i) && (i = JSON.parse(i)), s && (s(i), s = null, i = null)
                }

                function a () {
                    "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (i = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), r.isJSONString(i) && (i = JSON.parse(i)))
                }

                function n () {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var e = document.createElement("iframe");
                        e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null
                    }
                }

                var i = null, s = null;
                window.sensorsdata_app_js_bridge_call_js = function (t) {
                    e(t)
                }, t.getAppStatus = function (e) {
                    return n(), a(), e ? void (null === i ? s = e : (e(i), i = null)) : i
                }
            }, supportAppCallJs: function () {
                window.sensorsdata_app_call_js = function (e, t) {
                    e in window.sensorsdata_app_call_js.modules && window.sensorsdata_app_call_js.modules[e](t)
                }, window.sensorsdata_app_call_js.modules = {}
            }
        }, t.JSBridge = function (e) {
            this.list = {}, this.type = e.type, this.app_call_js = r.isFunction(e.app_call_js) ? e.app_call_js : function () {
            }, this.init()
        }, t.JSBridge.prototype.init = function () {
            var e = this;
            window.sensorsdata_app_call_js.modules[this.type] || (window.sensorsdata_app_call_js.modules[this.type] = function (t) {
                e.app_call_js(t)
            })
        }, t.JSBridge.prototype.jsCallApp = function (e) {
            var a = {callType: this.type, data: e};
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(a)); else {
                if (!r.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return t.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
                window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(a))
            }
        }, t.JSBridge.prototype.hasAppBridge = function () {
            return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage ? "ios" : r.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app ? "android" : (t.log("App\u7aefbridge\u672a\u66b4\u9732"), !1)
        }, t.JSBridge.prototype.requestToApp = function (e) {
            function a () {
                var e = (new Date).getTime().toString(16), t = String(r.getRandom()).replace(".", "").slice(1, 8);
                return e + "-" + t
            }

            var n = this, i = r.isObject(e.data) ? e.data : {};
            r.isFunction(e.callback) || (e.callback = function () {
            }), r.isObject(e.timeout) && r.isNumber(e.timeout.time) && (r.isFunction(e.timeout.callback) || (e.timeout.callback = function () {
            }), e.timer = setTimeout(function () {
                e.timeout.callback(), delete n.list[s]
            }, e.timeout.time));
            var s = a();
            this.list[s] = e;
            var o = {callType: this.type, data: i};
            if (o.data.message_id = s, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(o)); else {
                if (!r.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return t.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
                window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(o))
            }
        }, t.JSBridge.prototype["double"] = function (e) {
            if (e.message_id) {
                var t = this.list[e.message_id];
                t && (t.timer && clearTimeout(t.timer), t.callback(e), delete this.list[e.message_id])
            }
        };
        var u = t.heatmap = {
            otherTags: [], getTargetElement: function (e, a) {
                var n = this, i = e;
                if ("object" != typeof i) return null;
                if ("string" != typeof i.tagName) return null;
                var s = i.tagName.toLowerCase();
                if ("body" === s.toLowerCase() || "html" === s.toLowerCase()) return null;
                if (!i || !i.parentNode || !i.parentNode.children) return null;
                var o = i.parentNode, c = n.hasElement(a.originalEvent || a), l = t.para.heatmap.track_attr,
                    u = n.otherTags;
                if ("a" === s || "button" === s || "input" === s || "textarea" === s || r.hasAttributes(i, l)) return i;
                if (r.indexOf(u, s) > -1) return i;
                if ("button" === o.tagName.toLowerCase() || "a" === o.tagName.toLowerCase() || r.hasAttributes(o, l)) return o;
                if ("area" === s && "map" === o.tagName.toLowerCase() && r.ry(o).prev().tagName && "img" === r.ry(o).prev().tagName.toLowerCase()) return r.ry(o).prev();
                if (c) return c;
                if ("div" === s && t.para.heatmap.collect_tags.div && n.isDivLevelValid(i)) {
                    var p = t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level || 1;
                    return p > 1 || n.isCollectableDiv(i) ? i : null
                }
                if (n.isStyleTag(s) && t.para.heatmap.collect_tags.div) {
                    var d = n.getCollectableParent(i);
                    if (d && n.isDivLevelValid(d)) return d
                }
                return null
            }, getDivLevels: function (e, t) {
                var a = u.getElementPath(e, !0, t), n = a.split(" > "), i = 0;
                return r.each(n, function (e) {
                    "div" === e && i++
                }), i
            }, isDivLevelValid: function (e) {
                for (var r = t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level || 1, a = e.getElementsByTagName("div"), n = a.length - 1; n >= 0; n--) if (u.getDivLevels(a[n], e) > r) return !1;
                return !0
            }, getElementPath: function (e, t, r) {
                for (var a = []; e.parentNode;) {
                    if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
                        a.unshift(e.tagName.toLowerCase() + "#" + e.id);
                        break
                    }
                    if (r && e === r) {
                        a.unshift(e.tagName.toLowerCase());
                        break
                    }
                    if (e === document.body) {
                        a.unshift("body");
                        break
                    }
                    a.unshift(e.tagName.toLowerCase()), e = e.parentNode
                }
                return a.join(" > ")
            }, getClosestLi: function (e) {
                var t = function (e, t) {
                    for (; e && e !== document && 1 === e.nodeType; e = e.parentNode) if (e.tagName.toLowerCase() === t) return e;
                    return null
                };
                return t(e, "li")
            }, getElementPosition: function (e, a, n) {
                function i (e) {
                    var t = (e.tagName.toLowerCase(), e.parentNode);
                    if (!t) return "";
                    var a = r.ry(e).getSameTypeSiblings(), n = a.length;
                    if (1 === n) return 0;
                    for (var i = 0, s = e; r.ry(s).previousElementSibling().ele; s = r.ry(s).previousElementSibling().ele, i++) ;
                    return i
                }

                var s = t.heatmap.getClosestLi(e);
                if (!s) return null;
                var o = e.tagName.toLowerCase(), c = s.getElementsByTagName(o), l = c.length, u = [];
                if (l > 1) {
                    for (var p = 0; p < l; p++) {
                        var d = t.heatmap.getElementPath(c[p], n);
                        d === a && u.push(c[p])
                    }
                    if (u.length > 1) return r.indexOf(u, e)
                }
                return i(s)
            }, setNotice: function (e) {
                t.is_heatmap_render_mode = !0, t.para.heatmap || (t.errorMsg = "\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"), e && e[0] && e[1] && "http:" === e[1].slice(0, 5) && "https:" === location.protocol && (t.errorMsg = "\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"), t.para.heatmap_url || (t.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + t.lib_version + "/heatmap.min.js")
            }, getDomIndex: function (e) {
                if (!e.parentNode) return -1;
                for (var t = 0, r = e.tagName, a = e.parentNode.children, n = 0; n < a.length; n++) if (a[n].tagName === r) {
                    if (e === a[n]) return t;
                    t++
                }
                return -1
            }, selector: function (e) {
                var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
                return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!t.para.heatmap || t.para.heatmap && "not_use_id" !== t.para.heatmap.element_selector) ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
            }, getDomSelector: function (e, r) {
                if (!e || !e.parentNode || !e.parentNode.children) return !1;
                r = r && r.join ? r : [];
                var a = e.nodeName.toLowerCase();
                return e && "body" !== a && 1 == e.nodeType ? (r.unshift(this.selector(e)), e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && t.para.heatmap && "not_use_id" !== t.para.heatmap.element_selector ? r.join(" > ") : this.getDomSelector(e.parentNode, r)) : (r.unshift("body"), r.join(" > "))
            }, na: function () {
                var e = document.documentElement.scrollLeft || window.pageXOffset;
                return parseInt(isNaN(e) ? 0 : e, 10)
            }, i: function () {
                var e = 0;
                try {
                    e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e
                } catch (t) {
                    e = 0
                }
                return parseInt(e, 10)
            }, getBrowserWidth: function () {
                var e = window.innerWidth || document.body.clientWidth;
                return isNaN(e) ? 0 : parseInt(e, 10)
            }, getBrowserHeight: function () {
                var e = window.innerHeight || document.body.clientHeight;
                return isNaN(e) ? 0 : parseInt(e, 10)
            }, getScrollWidth: function () {
                var e = parseInt(document.body.scrollWidth, 10);
                return isNaN(e) ? 0 : e
            }, W: function (e) {
                var t = parseInt(+e.clientX + +this.na(), 10), e = parseInt(+e.clientY + +this.i(), 10);
                return {x: isNaN(t) ? 0 : t, y: isNaN(e) ? 0 : e}
            }, start: function (e, a, n, i, s) {
                var o = r.isObject(i) ? i : {}, c = r.isFunction(s) ? s : r.isFunction(i) ? i : void 0;
                if (t.para.heatmap && t.para.heatmap.collect_element && !t.para.heatmap.collect_element(a)) return !1;
                var l = this.getDomSelector(a), u = r.getEleInfo({target: a});
                u.$element_selector = l ? l : "", u.$element_path = t.heatmap.getElementPath(a, t.para.heatmap && "not_use_id" === t.para.heatmap.element_selector);
                var p = t.heatmap.getElementPosition(a, u.$element_path, t.para.heatmap && "not_use_id" === t.para.heatmap.element_selector);
                if (r.isNumber(p) && (u.$element_position = p), t.para.heatmap && t.para.heatmap.custom_property) {
                    var d = t.para.heatmap.custom_property(a);
                    r.isObject(d) && (u = r.extend(u, d))
                }
                u = r.extend(u, o), "a" === n && t.para.heatmap && t.para.heatmap.isTrackLink === !0 ? r.trackLink({
                    event: e,
                    target: a
                }, "$WebClick", u) : t.track("$WebClick", u, c)
            }, hasElement: function (e) {
                var t = e._getPath ? e._getPath() : u.getElementPath(e.target, !0).split(" > ");
                if (r.isArray(t) && t.length > 0) for (var a = 0; a < t.length; a++) if (t[a] && t[a].tagName && "a" === t[a].tagName.toLowerCase()) return t[a];
                return !1
            }, isStyleTag: function (e, a) {
                var n = ["a", "div", "input", "button", "textarea"],
                    i = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
                return !(r.indexOf(n, e) > -1) && (!a || t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div ? !!(r.isObject(t.para.heatmap) && r.isObject(t.para.heatmap.collect_tags) && r.isObject(t.para.heatmap.collect_tags.div) && r.indexOf(t.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : r.indexOf(i, e) > -1)
            }, isCollectableDiv: function (e, r) {
                try {
                    if (0 === e.children.length) return !0;
                    for (var a = 0; a < e.children.length; a++) if (1 === e.children[a].nodeType) {
                        var n = e.children[a].tagName.toLowerCase(),
                            i = t.para && t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level;
                        if (!("div" === n && i > 1 || this.isStyleTag(n, r))) return !1;
                        if (!this.isCollectableDiv(e.children[a], r)) return !1
                    }
                    return !0
                } catch (s) {
                    t.log(s)
                }
                return !1
            }, getCollectableParent: function (e, r) {
                try {
                    var a = e.parentNode, n = a ? a.tagName.toLowerCase() : "";
                    if ("body" === n) return !1;
                    var i = t.para && t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t.para.heatmap.collect_tags.div.max_level;
                    if (n && "div" === n && (i > 1 || this.isCollectableDiv(a, r))) return a;
                    if (a && this.isStyleTag(n, r)) return this.getCollectableParent(a, r)
                } catch (s) {
                    t.log(s)
                }
                return !1
            }, initScrollmap: function () {
                if (!r.isObject(t.para.heatmap) || "default" !== t.para.heatmap.scroll_notice_map) return !1;
                var e = function () {
                    return !(t.para.scrollmap && r.isFunction(t.para.scrollmap.collect_url) && !t.para.scrollmap.collect_url())
                }, a = function (e) {
                    var t = {};
                    return t.timeout = e.timeout || 1e3, t.func = e.func, t.hasInit = !1, t.inter = null, t.main = function (e, t) {
                        this.func(e, t), this.inter = null
                    }, t.go = function (e) {
                        var r = {};
                        this.inter || (r.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, r.$viewport_position = Math.round(r.$viewport_position) || 0, r.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, r.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, e ? t.main(r, !0) : this.inter = setTimeout(function () {
                            t.main(r)
                        }, this.timeout))
                    }, t
                }, n = a({
                    timeout: 1e3, func: function (e, a) {
                        var n = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                            i = new Date, s = i - this.current_time;
                        (s > t.para.heatmap.scroll_delay_time && n - e.$viewport_position !== 0 || a) && (e.$url = r.isDecodeURI(t.para.url_is_decode, location.href), e.$title = document.title, e.$url_path = location.pathname, e.event_duration = Math.min(t.para.heatmap.scroll_event_duration, parseInt(s) / 1e3), t.track("$WebStay", e)), this.current_time = i
                    }
                });
                n.current_time = new Date, r.addEvent(window, "scroll", function () {
                    return !!e() && void n.go()
                }), r.addEvent(window, "unload", function () {
                    return !!e() && void n.go("notime")
                })
            }, initHeatmap: function () {
                var e = this;
                return !(!r.isObject(t.para.heatmap) || "default" !== t.para.heatmap.clickmap) && (!(r.isFunction(t.para.heatmap.collect_url) && !t.para.heatmap.collect_url()) && ("all" === t.para.heatmap.collect_elements ? t.para.heatmap.collect_elements = "all" : t.para.heatmap.collect_elements = "interact", void ("all" === t.para.heatmap.collect_elements ? r.addEvent(document, "click", function (t) {
                    var r = t || window.event;
                    if (!r) return !1;
                    var a = r.target || r.srcElement;
                    if ("object" != typeof a) return !1;
                    if ("string" != typeof a.tagName) return !1;
                    var n = a.tagName.toLowerCase();
                    if ("body" === n || "html" === n) return !1;
                    if (!a || !a.parentNode || !a.parentNode.children) return !1;
                    var i = a.parentNode.tagName.toLowerCase();
                    "a" === i || "button" === i ? e.start(r, a.parentNode, i) : e.start(r, a, n)
                }) : r.addEvent(document, "click", function (r) {
                    var a = r || window.event;
                    if (!a) return !1;
                    var n = a.target || a.srcElement, i = t.heatmap.getTargetElement(n, r);
                    i && e.start(a, i, i.tagName.toLowerCase())
                }))))
            }
        };
        t.init = function (e) {
            return !(t.readyState && t.readyState.state && t.readyState.state >= 2) && (t.setInitVar(), t.readyState.setState(2), t.initPara(e), t.bridge.supportAppCallJs(), t.detectMode(), void (t._.isIOS() && t._.getIOSVersion() && t._.getIOSVersion() < 13 && (t.para.heatmap && t.para.heatmap.collect_tags && t.para.heatmap.collect_tags.div && t._.setCssStyle("div, [data-sensors-click] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }"), t.para.heatmap && t.para.heatmap.track_attr && t._.setCssStyle("[" + t.para.heatmap.track_attr.join("], [") + "] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }"))))
        };
        var p = ["getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister"];
        if (r.each(p, function (e) {
            var a = t[e];
            t[e] = function () {
                if (t.readyState.state < 3) return r.isArray(t._q) || (t._q = []), t._q.push([e, arguments]), !1;
                {
                    if (t.readyState.getState()) return a.apply(t, arguments);
                    try {
                        console.error("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")
                    } catch (n) {
                        t.log(n)
                    }
                }
            }
        }), "string" != typeof window.sensorsDataAnalytic201505) return "undefined" == typeof window.sensorsDataAnalytic201505 ? (window.sensorsDataAnalytic201505 = t, t) : window.sensorsDataAnalytic201505;
        t.setPreConfig(window[sensorsDataAnalytic201505]), window[sensorsDataAnalytic201505] = t, window.sensorsDataAnalytic201505 = t, t.init()
    } catch (d) {
        if ("object" == typeof console && console.log) try {
            console.log(d)
        } catch (f) {
            t.log(f)
        }
    }
});
