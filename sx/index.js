!function (e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : e()
}(function () {
    try {
        var e = {modules: {}}, t = e._ = {};
        (function () {
            var e = {"function": !0, object: !0}, t = e[typeof window] && window || this;
            var r = t.JSON, a = t.JSON3, i = !1, n = function s (r, a) {
                r || (r = t.Object()), a || (a = t.Object());
                var i = r.Number || t.Number, n = r.String || t.String, o = r.Object || t.Object, c = r.Date || t.Date,
                    l = r.SyntaxError || t.SyntaxError, u = r.TypeError || t.TypeError, p = r.Math || t.Math,
                    d = r.JSON || t.JSON;
                "object" == typeof d && d && (a.stringify = d.stringify, a.parse = d.parse);
                var f, _ = o.prototype, g = _.toString, h = _.hasOwnProperty;

                function m (e, t) {
                    try {
                        e()
                    } catch (r) {
                        t && t()
                    }
                }

                var v = new c(-0xc782b5b800cec);

                function y (e) {
                    if (null != y[e]) return y[e];
                    var t;
                    if ("bug-string-char-index" == e) t = "a" != "a"[0]; else if ("json" == e) t = y("json-stringify") && y("date-serialization") && y("json-parse"); else if ("date-serialization" == e) {
                        if (t = y("json-stringify") && v) {
                            var r = a.stringify;
                            m(function () {
                                t = '"-271821-04-20T00:00:00.000Z"' == r(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == r(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == r(new c(-1))
                            })
                        }
                    } else {
                        var s, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == e) {
                            var l = "function" == typeof (r = a.stringify);
                            l && ((s = function () {
                                return 1
                            }).toJSON = s, m(function () {
                                l = "0" === r(0) && "0" === r(new i) && '""' == r(new n) && r(g) === f && r(f) === f && r() === f && "1" === r(s) && "[1]" == r([s]) && "[null]" == r([f]) && "null" == r(null) && "[null,null,null]" == r([f, g, null]) && r({a: [s, !0, !1, null, "\0\b\n\f\r\t"]}) == o && "1" === r(null, s) && "[\n 1,\n 2\n]" == r([1, 2], null, 1)
                            }, function () {
                                l = !1
                            })), t = l
                        }
                        if ("json-parse" == e) {
                            var u, p = a.parse;
                            "function" == typeof p && m(function () {
                                0 !== p("0") || p(!1) || (s = p(o), (u = 5 == s.a.length && 1 === s.a[0]) && (m(function () {
                                    u = !p('"\t"')
                                }), u && m(function () {
                                    u = 1 !== p("01")
                                }), u && m(function () {
                                    u = 1 !== p("1.")
                                })))
                            }, function () {
                                u = !1
                            }), t = u
                        }
                    }
                    return y[e] = !!t
                }

                if (m(function () {
                    v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
                }), y["bug-string-char-index"] = y["date-serialization"] = y.json = y["json-stringify"] = y["json-parse"] = null, !y("json")) {
                    var S = y("bug-string-char-index"), w = function (t, r) {
                        var a, i, n, s = 0;
                        for (n in (a = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, i = new a) h.call(i, n) && s++;
                        return a = i = null, s ? w = function (e, t) {
                            var r, a, i = "[object Function]" == g.call(e);
                            for (r in e) i && "prototype" == r || !h.call(e, r) || (a = "constructor" === r) || t(r);
                            (a || h.call(e, r = "constructor")) && t(r)
                        } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], w = function (t, r) {
                            var a, n, s = "[object Function]" == g.call(t),
                                o = !s && "function" != typeof t.constructor && e[typeof t.hasOwnProperty] && t.hasOwnProperty || h;
                            for (a in t) s && "prototype" == a || !o.call(t, a) || r(a);
                            for (n = i.length; a = i[--n];) o.call(t, a) && r(a)
                        }), w(t, r)
                    };
                    if (!y("json-stringify") && !y("date-serialization")) {
                        var b = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                            k = function (e, t) {
                                return ("000000" + (t || 0)).slice(-e)
                            }, j = function (e) {
                                var t, r, a, i, n, s, o, c, l;
                                if (v) t = function (e) {
                                    r = e.getUTCFullYear(), a = e.getUTCMonth(), i = e.getUTCDate(), s = e.getUTCHours(), o = e.getUTCMinutes(), c = e.getUTCSeconds(), l = e.getUTCMilliseconds()
                                }; else {
                                    var u = p.floor, d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        f = function (e, t) {
                                            return d[t] + 365 * (e - 1970) + u((e - 1969 + (t = +(t > 1))) / 4) - u((e - 1901 + t) / 100) + u((e - 1601 + t) / 400)
                                        };
                                    t = function (e) {
                                        for (i = u(e / 864e5), r = u(i / 365.2425) + 1970 - 1; f(r + 1, 0) <= i; r++) ;
                                        for (a = u((i - f(r, 0)) / 30.42); f(r, a + 1) <= i; a++) ;
                                        i = 1 + i - f(r, a), s = u((n = (e % 864e5 + 864e5) % 864e5) / 36e5) % 24, o = u(n / 6e4) % 60, c = u(n / 1e3) % 60, l = n % 1e3
                                    }
                                }
                                return (j = function (e) {
                                    return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + k(6, r < 0 ? -r : r) : k(4, r)) + "-" + k(2, a + 1) + "-" + k(2, i) + "T" + k(2, s) + ":" + k(2, o) + ":" + k(2, c) + "." + k(3, l) + "Z", r = a = i = s = o = c = l = null) : e = null, e
                                })(e)
                            };
                        if (y("json-stringify") && !y("date-serialization")) {
                            function P (e) {
                                return j(this)
                            }

                            var O = a.stringify;
                            a.stringify = function (e, t, r) {
                                var a = c.prototype.toJSON;
                                c.prototype.toJSON = P;
                                var i = O(e, t, r);
                                return c.prototype.toJSON = a, i
                            }
                        } else {
                            var D = function (e) {
                                var t = e.charCodeAt(0), r = b[t];
                                return r || "\\u00" + k(2, t.toString(16))
                            }, A = /[\x00-\x1f\x22\x5c]/g, N = function (e) {
                                return A.lastIndex = 0, '"' + (A.test(e) ? e.replace(A, D) : e) + '"'
                            }, C = function (e, t, r, a, i, n, s) {
                                var o, l, p, d, _, h, v, y, S;
                                if (m(function () {
                                    o = t[e]
                                }), "object" == typeof o && o && (o.getUTCFullYear && "[object Date]" == g.call(o) && o.toJSON === c.prototype.toJSON ? o = j(o) : "function" == typeof o.toJSON && (o = o.toJSON(e))), r && (o = r.call(t, e, o)), o == f) return o === f ? o : "null";
                                switch ("object" == (l = typeof o) && (p = g.call(o)), p || l) {
                                    case"boolean":
                                    case"[object Boolean]":
                                        return "" + o;
                                    case"number":
                                    case"[object Number]":
                                        return o > -1 / 0 && o < 1 / 0 ? "" + o : "null";
                                    case"string":
                                    case"[object String]":
                                        return N("" + o)
                                }
                                if ("object" == typeof o) {
                                    for (v = s.length; v--;) if (s[v] === o) throw u();
                                    if (s.push(o), d = [], y = n, n += i, "[object Array]" == p) {
                                        for (h = 0, v = o.length; h < v; h++) _ = C(h, o, r, a, i, n, s), d.push(_ === f ? "null" : _);
                                        S = d.length ? i ? "[\n" + n + d.join(",\n" + n) + "\n" + y + "]" : "[" + d.join(",") + "]" : "[]"
                                    } else w(a || o, function (e) {
                                        var t = C(e, o, r, a, i, n, s);
                                        t !== f && d.push(N(e) + ":" + (i ? " " : "") + t)
                                    }), S = d.length ? i ? "{\n" + n + d.join(",\n" + n) + "\n" + y + "}" : "{" + d.join(",") + "}" : "{}";
                                    return s.pop(), S
                                }
                            };
                            a.stringify = function (t, r, a) {
                                var i, n, s, o;
                                if (e[typeof r] && r) if ("[object Function]" == (o = g.call(r))) n = r; else if ("[object Array]" == o) {
                                    s = {};
                                    for (var c, l = 0, u = r.length; l < u;) c = r[l++], "[object String]" != (o = g.call(c)) && "[object Number]" != o || (s[c] = 1)
                                }
                                if (a) if ("[object Number]" == (o = g.call(a))) {
                                    if ((a -= a % 1) > 0) for (a > 10 && (a = 10), i = ""; i.length < a;) i += " "
                                } else "[object String]" == o && (i = a.length <= 10 ? a : a.slice(0, 10));
                                return C("", ((c = {})[""] = t, c), n, s, i, "", [])
                            }
                        }
                    }
                    if (!y("json-parse")) {
                        var x, $, I = n.fromCharCode,
                            T = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                            R = function () {
                                throw x = $ = null, l()
                            }, U = function () {
                                for (var e, t, r, a, i, n = $, s = n.length; x < s;) switch (i = n.charCodeAt(x)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        x++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e = S ? n.charAt(x) : n[x], x++, e;
                                    case 34:
                                        for (e = "@", x++; x < s;) if ((i = n.charCodeAt(x)) < 32) R(); else if (92 == i) switch (i = n.charCodeAt(++x)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                e += T[i], x++;
                                                break;
                                            case 117:
                                                for (t = ++x, r = x + 4; x < r; x++) (i = n.charCodeAt(x)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || R();
                                                e += I("0x" + n.slice(t, x));
                                                break;
                                            default:
                                                R()
                                        } else {
                                            if (34 == i) break;
                                            for (i = n.charCodeAt(x), t = x; i >= 32 && 92 != i && 34 != i;) i = n.charCodeAt(++x);
                                            e += n.slice(t, x)
                                        }
                                        if (34 == n.charCodeAt(x)) return x++, e;
                                        R();
                                    default:
                                        if (t = x, 45 == i && (a = !0, i = n.charCodeAt(++x)), i >= 48 && i <= 57) {
                                            for (48 == i && (i = n.charCodeAt(x + 1)) >= 48 && i <= 57 && R(), a = !1; x < s && (i = n.charCodeAt(x)) >= 48 && i <= 57; x++) ;
                                            if (46 == n.charCodeAt(x)) {
                                                for (r = ++x; r < s && !((i = n.charCodeAt(r)) < 48 || i > 57); r++) ;
                                                r == x && R(), x = r
                                            }
                                            if (101 == (i = n.charCodeAt(x)) || 69 == i) {
                                                for (43 != (i = n.charCodeAt(++x)) && 45 != i || x++, r = x; r < s && !((i = n.charCodeAt(r)) < 48 || i > 57); r++) ;
                                                r == x && R(), x = r
                                            }
                                            return +n.slice(t, x)
                                        }
                                        a && R();
                                        var o = n.slice(x, x + 4);
                                        if ("true" == o) return x += 4, !0;
                                        if ("fals" == o && 101 == n.charCodeAt(x + 4)) return x += 5, !1;
                                        if ("null" == o) return x += 4, null;
                                        R()
                                }
                                return "$"
                            }, E = function (e) {
                                var t, r;
                                if ("$" == e && R(), "string" == typeof e) {
                                    if ("@" == (S ? e.charAt(0) : e[0])) return e.slice(1);
                                    if ("[" == e) {
                                        for (t = []; "]" != (e = U());) r ? "," == e ? "]" == (e = U()) && R() : R() : r = !0, "," == e && R(), t.push(E(e));
                                        return t
                                    }
                                    if ("{" == e) {
                                        for (t = {}; "}" != (e = U());) r ? "," == e ? "}" == (e = U()) && R() : R() : r = !0, "," != e && "string" == typeof e && "@" == (S ? e.charAt(0) : e[0]) && ":" == U() || R(), t[e.slice(1)] = E(U());
                                        return t
                                    }
                                    R()
                                }
                                return e
                            }, L = function (e, t, r) {
                                var a = J(e, t, r);
                                a === f ? delete e[t] : e[t] = a
                            }, J = function (e, t, r) {
                                var a, i = e[t];
                                if ("object" == typeof i && i) if ("[object Array]" == g.call(i)) for (a = i.length; a--;) L(g, w, i); else w(i, function (e) {
                                    L(i, e, r)
                                });
                                return r.call(e, t, i)
                            };
                        a.parse = function (e, t) {
                            var r, a;
                            return x = 0, $ = "" + e, r = E(U()), "$" != U() && R(), x = $ = null, t && "[object Function]" == g.call(t) ? J(((a = {})[""] = r, a), "", t) : r
                        }
                    }
                }
                return a.runInContext = s, a
            }(t, t.JSON3 = {
                noConflict: function () {
                    return i || (i = !0, t.JSON = r, t.JSON3 = a, r = a = null), n
                }
            });
            t.JSON = {parse: n.parse, stringify: n.stringify}
        }).call(this), function (t) {
            if (t.atob) try {
                t.atob(" ")
            } catch (s) {
                t.atob = (r = t.atob, (a = function (e) {
                    return r(String(e).replace(/[\t\n\f\r ]+/g, ""))
                }).original = r, a)
            } else {
                var r, a, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
                t.btoa = function (t) {
                    t = String(t);
                    for (var r, a, n, s, o = "", c = 0, l = t.length % 3; c < t.length;) ((a = t.charCodeAt(c++)) > 255 || (n = t.charCodeAt(c++)) > 255 || (s = t.charCodeAt(c++)) > 255) && e.log("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."), o += i.charAt((r = a << 16 | n << 8 | s) >> 18 & 63) + i.charAt(r >> 12 & 63) + i.charAt(r >> 6 & 63) + i.charAt(63 & r);
                    return l ? o.slice(0, l - 3) + "===".substring(l) : o
                }, t.atob = function (t) {
                    t = String(t).replace(/[\t\n\f\r ]+/g, ""), n.test(t) || e.log("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."), t += "==".slice(2 - (3 & t.length));
                    for (var r, a, s, o = "", c = 0; c < t.length;) r = i.indexOf(t.charAt(c++)) << 18 | i.indexOf(t.charAt(c++)) << 12 | (a = i.indexOf(t.charAt(c++))) << 6 | (s = i.indexOf(t.charAt(c++))), o += 64 === a ? String.fromCharCode(r >> 16 & 255) : 64 === s ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, 255 & r);
                    return o
                }
            }
        }(window), String.prototype.replaceAll || (String.prototype.replaceAll = function (e, t) {
            return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replace(new RegExp(e, "g"), t)
        }), g = Array.prototype, h = Function.prototype, v = Object.prototype, y = g.slice, S = v.toString, w = v.hasOwnProperty, h.bind, b = g.forEach, g.indexOf, k = Array.isArray, j = {}, P = t.each = function (e, r, a) {
            if (null == e) return !1;
            if (b && e.forEach === b) e.forEach(r, a); else if (t.isArray(e) && e.length === +e.length) {
                for (var i = 0, n = e.length; i < n; i++) if (i in e && r.call(a, e[i], i, e) === j) return !1
            } else for (var s in e) if (w.call(e, s) && r.call(a, e[s], s, e) === j) return !1
        }, t.map = function (e, t) {
            var r = [];
            return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (P(e, function (e, a, i) {
                r.push(t(e, a, i))
            }), r)
        }, t.extend = function (e) {
            return P(y.call(arguments, 1), function (t) {
                for (var r in t) w.call(t, r) && void 0 !== t[r] && (e[r] = t[r])
            }), e
        }, t.extend2Lev = function (e) {
            return P(y.call(arguments, 1), function (r) {
                for (var a in r) void 0 !== r[a] && (t.isObject(r[a]) && t.isObject(e[a]) ? t.extend(e[a], r[a]) : e[a] = r[a])
            }), e
        }, t.coverExtend = function (e) {
            return P(y.call(arguments, 1), function (t) {
                for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
            }), e
        }, t.isArray = k || function (e) {
            return "[object Array]" === S.call(e)
        }, t.isFunction = function (e) {
            if (!e) return !1;
            try {
                return /^\s*\bfunction\b/.test(e)
            } catch (t) {
                return !1
            }
        }, t.isArguments = function (e) {
            return !(!e || !w.call(e, "callee"))
        }, t.toArray = function (e) {
            return e ? e.toArray ? e.toArray() : t.isArray(e) ? y.call(e) : t.isArguments(e) ? y.call(e) : t.values(e) : []
        }, t.values = function (e) {
            var t = [];
            return null == e ? t : (P(e, function (e) {
                t[t.length] = e
            }), t)
        }, t.indexOf = function (e, t) {
            var r = e.indexOf;
            if (r) return r.call(e, t);
            for (var a = 0; a < e.length; a++) if (t === e[a]) return a;
            return -1
        }, t.hasAttributes = function (e, r) {
            if ("string" == typeof r) return t.hasAttribute(e, r);
            if (t.isArray(r)) {
                for (var a = !1, i = 0; i < r.length; i++) if (t.hasAttribute(e, r[i])) {
                    a = !0;
                    break
                }
                return a
            }
        }, t.hasAttribute = function (e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : !(!e.attributes[t] || !e.attributes[t].specified)
        }, t.filter = function (e, t, r) {
            var a = Object.prototype.hasOwnProperty;
            if (e.filter) return e.filter(t);
            for (var i = [], n = 0; n < e.length; n++) if (a.call(e, n)) {
                var s = e[n];
                t.call(r, s, n, e) && i.push(s)
            }
            return i
        }, t.inherit = function (e, t) {
            return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
        }, t.trim = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }, t.isObject = function (e) {
            return null != e && "[object Object]" == S.call(e)
        }, t.isEmptyObject = function (e) {
            if (t.isObject(e)) {
                for (var r in e) if (w.call(e, r)) return !1;
                return !0
            }
            return !1
        }, t.isUndefined = function (e) {
            return void 0 === e
        }, t.isString = function (e) {
            return "[object String]" == S.call(e)
        }, t.isDate = function (e) {
            return "[object Date]" == S.call(e)
        }, t.isBoolean = function (e) {
            return "[object Boolean]" == S.call(e)
        }, t.isNumber = function (e) {
            return "[object Number]" == S.call(e) && /[\d\.]+/.test(String(e))
        }, t.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, t.isJSONString = function (e) {
            try {
                JSON.parse(e)
            } catch (t) {
                return !1
            }
            return !0
        }, t.safeJSONParse = function (e) {
            var t = null;
            try {
                t = JSON.parse(e)
            } catch (r) {
                return !1
            }
            return t
        }, t.decodeURIComponent = function (e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (r) {
                t = e
            }
            return t
        }, t.decodeURI = function (e) {
            var t = e;
            try {
                t = decodeURI(e)
            } catch (r) {
                t = e
            }
            return t
        }, t.isDecodeURI = function (e, r) {
            return e ? t.decodeURI(r) : r
        }, t.encodeDates = function (e) {
            return t.each(e, function (r, a) {
                t.isDate(r) ? e[a] = t.formatDate(r) : t.isObject(r) && (e[a] = t.encodeDates(r))
            }), e
        }, t.mediaQueriesSupported = function () {
            return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
        }, t.getScreenOrientation = function () {
            var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
                r = "\u672a\u53d6\u5230\u503c";
            if (e) r = e.indexOf("landscape") > -1 ? "landscape" : "portrait"; else if (t.mediaQueriesSupported()) {
                var a = window.matchMedia || window.msMatchMedia;
                a("(orientation: landscape)").matches ? r = "landscape" : a("(orientation: portrait)").matches && (r = "portrait")
            }
            return r
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.throttle = function (e, r, a) {
            var i, n, s, o = null, c = 0;
            a || (a = {});
            var l = function () {
                c = !1 === a.leading ? 0 : t.now(), o = null, s = e.apply(i, n), o || (i = n = null)
            };
            return function () {
                var u = t.now();
                c || !1 !== a.leading || (c = u);
                var p = r - (u - c);
                return i = this, n = arguments, p <= 0 || p > r ? (o && (clearTimeout(o), o = null), c = u, s = e.apply(i, n), o || (i = n = null)) : o || !1 === a.trailing || (o = setTimeout(l, p)), s
            }
        }, t.hashCode = function (e) {
            if ("string" != typeof e) return 0;
            var t = 0;
            if (0 == e.length) return t;
            for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
            return t
        }, t.formatDate = function (e) {
            function t (e) {
                return e < 10 ? "0" + e : e
            }

            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
        }, t.getRandomBasic = (p = (new Date).getTime(), function (e) {
            return Math.ceil((p = (9301 * p + 49297) % 233280) / 233280 * e)
        }), t.getRandom = function () {
            if ("function" == typeof Uint32Array) {
                var e = "";
                if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto), t.isObject(e) && e.getRandomValues) {
                    var r = new Uint32Array(1);
                    return e.getRandomValues(r)[0] / Math.pow(2, 32)
                }
            }
            return t.getRandomBasic(1e19) / 1e19
        }, t.searchObjDate = function (e) {
            t.isObject(e) && t.each(e, function (r, a) {
                t.isObject(r) ? t.searchObjDate(e[a]) : t.isDate(r) && (e[a] = t.formatDate(r))
            })
        }, t.searchZZAppStyle = function (e) {
            "undefined" != typeof e.properties.$project && (e.project = e.properties.$project, delete e.properties.$project), "undefined" != typeof e.properties.$token && (e.token = e.properties.$token, delete e.properties.$token)
        }, t.formatJsonString = function (e) {
            try {
                return JSON.stringify(e, null, "  ")
            } catch (t) {
                return JSON.stringify(e)
            }
        }, t.formatString = function (r, a) {
            return t.isNumber(a) && r.length > a ? (e.log("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + r), r.slice(0, a)) : r
        }, t.searchObjString = function (r) {
            t.isObject(r) && t.each(r, function (a, i) {
                t.isObject(a) ? t.searchObjString(r[i]) : t.isString(a) && (r[i] = t.formatString(a, "$element_selector" === i ? 1024 : e.para.max_string_length))
            })
        }, t.parseSuperProperties = function (r) {
            var a = r.properties, i = JSON.parse(JSON.stringify(r));
            t.isObject(a) && (t.each(a, function (r, n) {
                if (t.isFunction(r)) try {
                    a[n] = r(i), t.isFunction(a[n]) && (e.log("\u60a8\u7684\u5c5e\u6027- " + n + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete a[n])
                } catch (s) {
                    delete a[n], e.log("\u60a8\u7684\u5c5e\u6027- " + n + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                }
            }), t.strip_sa_properties(a))
        }, t.filterReservedProperties = function (r) {
            t.isObject(r) && t.each(["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"], function (t, a) {
                t in r && (a < 3 ? (delete r[t], e.log("\u60a8\u7684\u5c5e\u6027- " + t + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")) : e.log("\u60a8\u7684\u5c5e\u6027- " + t + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"))
            })
        }, t.searchConfigData = function (e) {
            if ("object" == typeof e && e.$option) {
                var t = e.$option;
                return delete e.$option, t
            }
            return {}
        }, t.unique = function (e) {
            for (var t, r = [], a = {}, i = 0; i < e.length; i++) (t = e[i]) in a || (a[t] = !0, r.push(t));
            return r
        }, t.strip_sa_properties = function (r) {
            return t.isObject(r) ? (t.each(r, function (a, i) {
                if (t.isArray(a)) {
                    var n = [];
                    t.each(a, function (r) {
                        t.isString(r) ? n.push(r) : e.log("\u60a8\u7684\u6570\u636e-", i, a, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                    }), r[i] = n
                }
                t.isString(a) || t.isNumber(a) || t.isDate(a) || t.isBoolean(a) || t.isArray(a) || t.isFunction(a) || "$option" === i || (e.log("\u60a8\u7684\u6570\u636e-", i, a, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete r[i])
            }), r) : r
        }, t.strip_empty_properties = function (e) {
            var r = {};
            return t.each(e, function (e, t) {
                null != e && (r[t] = e)
            }), r
        }, t.base64Encode = function (e) {
            return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                return String.fromCharCode("0x" + t)
            }))
        }, t.base64Decode = function (e) {
            var r = t.map(atob(e).split(""), function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            });
            return decodeURIComponent(r.join(""))
        }, t.UUID = (d = function () {
            for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
            return e.toString(16) + t.toString(16)
        }, function () {
            var e = String(screen.height * screen.width);
            e = e && /\d{5,}/.test(e) ? e.toString(16) : String(31242 * t.getRandom()).replace(".", "").slice(0, 8);
            var r = d() + "-" + t.getRandom().toString(16).replace(".", "") + "-" + function (e) {
                var t, r, a = navigator.userAgent, i = [], n = 0;

                function s (e, t) {
                    var r, a = 0;
                    for (r = 0; r < t.length; r++) a |= i[r] << 8 * r;
                    return e ^ a
                }

                for (t = 0; t < a.length; t++) r = a.charCodeAt(t), i.unshift(255 & r), i.length >= 4 && (n = s(n, i), i = []);
                return i.length > 0 && (n = s(n, i)), n.toString(16)
            }() + "-" + e + "-" + d();
            return r || (String(t.getRandom()) + String(t.getRandom()) + String(t.getRandom())).slice(2, 15)
        }), t.getQueryParam = function (e, r) {
            r = r.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = t.decodeURIComponent(e);
            var a = new RegExp("[\\?&]" + r + "=([^&#]*)").exec(e);
            return null === a || a && "string" != typeof a[1] && a[1].length ? "" : t.decodeURIComponent(a[1])
        }, t.urlParse = function (t) {
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
                }, this._values = {}, this._regex = null, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, void 0 !== e && this._parse(e)
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
            }, r.prototype._parse = function (t) {
                this._initValues();
                var r = this._regex.exec(t);
                for (var a in r || e.log("DPURLParser::_parse -> Invalid URL"), this._fields) "undefined" != typeof r[this._fields[a]] && (this._values[a] = r[this._fields[a]]);
                this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
            }, new r(t)
        }, t.addEvent = function () {
            function r (e) {
                return e && (e.preventDefault = r.preventDefault, e.stopPropagation = r.stopPropagation, e._getPath = r._getPath), e
            }

            r._getPath = function () {
                var e = this;
                return this.path || this.composedPath && this.composedPath() || function () {
                    try {
                        var t = e.target, r = [t];
                        if (null === t || null === t.parentElement) return [];
                        for (; null !== t.parentElement;) t = t.parentElement, r.unshift(t);
                        return r
                    } catch (a) {
                        return []
                    }
                }()
            }, r.preventDefault = function () {
                this.returnValue = !1
            }, r.stopPropagation = function () {
                this.cancelBubble = !0
            }, function (a, i, n) {
                var s = !(!t.isObject(e.para.heatmap) || !e.para.heatmap.useCapture);
                if (t.isObject(e.para.heatmap) && "undefined" == typeof e.para.heatmap.useCapture && "click" === i && (s = !0), a && a.addEventListener) a.addEventListener(i, function (e) {
                    e._getPath = r._getPath, n.call(this, e)
                }, s); else {
                    var o = "on" + i, c = a[o];
                    a[o] = function (e, t, a) {
                        return function (i) {
                            if (!(i = i || r(window.event))) return undefined;
                            i.target = i.srcElement;
                            var n, s, o = !0;
                            return "function" == typeof a && (n = a(i)), s = t.call(e, i), !1 !== n && !1 !== s || (o = !1), o
                        }
                    }(a, n, c)
                }
            }.apply(null, arguments)
        }, t.addHashEvent = function (e) {
            var r = "pushState" in window.history ? "popstate" : "hashchange";
            t.addEvent(window, r, e)
        }, t.addSinglePageEvent = function (e) {
            var r = location.href, a = window.history.pushState, i = window.history.replaceState;
            window.history.pushState = function () {
                a.apply(window.history, arguments), e(r), r = location.href
            }, window.history.replaceState = function () {
                i.apply(window.history, arguments), e(r), r = location.href
            };
            var n = a ? "popstate" : "hashchange";
            t.addEvent(window, n, function () {
                e(r), r = location.href
            })
        }, t.cookie = {
            get: function (e) {
                for (var r = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                    for (var n = a[i]; " " == n.charAt(0);) n = n.substring(1, n.length);
                    if (0 == n.indexOf(r)) return t.decodeURIComponent(n.substring(r.length, n.length))
                }
                return null
            }, set: function (r, a, i, n) {
                var s = "", o = "", c = "";
                if (i = null == i ? 73e3 : i, n = void 0 === n ? e.para.cross_subdomain : n) {
                    var l = t.getCurrentDomain(location.href);
                    "url\u89e3\u6790\u5931\u8d25" === l && (l = ""), s = l ? "; domain=" + l : ""
                }
                if (0 !== i) {
                    var u = new Date;
                    "s" === String(i).slice(-1) ? u.setTime(u.getTime() + 1e3 * Number(String(i).slice(0, -1))) : u.setTime(u.getTime() + 24 * i * 60 * 60 * 1e3), o = "; expires=" + u.toGMTString()
                }

                function p (e) {
                    return !!e && e.replaceAll(/\r\n/g, "")
                }

                e.para.is_secure_cookie && (c = "; secure");
                var d = "", f = "", _ = "";
                r && (d = p(r)), a && (f = p(a)), s && (_ = p(s)), d && f && (document.cookie = d + "=" + encodeURIComponent(f) + o + "; path=/" + _ + c)
            }, encrypt: function (e) {
                return "data:enc;" + t.rot13obfs(e)
            }, decrypt: function (e) {
                return e = e.substring("data:enc;".length), e = t.rot13defs(e)
            }, resolveValue: function (e) {
                return t.isString(e) && 0 === e.indexOf("data:enc;") && (e = t.cookie.decrypt(e)), e
            }, remove: function (r, a) {
                a = void 0 === a ? e.para.cross_subdomain : a, t.cookie.set(r, "", -1, a)
            }, getCookieName: function (r, a) {
                var i = "";
                if (a = a || location.href, !1 === e.para.cross_subdomain) {
                    try {
                        i = t.URL(a).hostname
                    } catch (n) {
                        e.log(n)
                    }
                    i = "string" == typeof i && "" !== i ? "sajssdk_2015_" + r + "_" + i.replace(/\./g, "_") : "sajssdk_2015_root_" + r
                } else i = "sajssdk_2015_cross_" + r;
                return i
            }, getNewUser: function () {
                return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName("new_user"))
            }
        }, t.getElementContent = function (r, a) {
            var i = "", n = "";
            return r.textContent ? i = t.trim(r.textContent) : r.innerText && (i = t.trim(r.innerText)), i && (i = i.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n = i || "", "input" !== a && "INPUT" !== a || ("button" === r.type || "submit" === r.type ? n = r.value || "" : e.para.heatmap && "function" == typeof e.para.heatmap.collect_input && e.para.heatmap.collect_input(r) && (n = r.value || "")), n
        }, t.getEleInfo = function (r) {
            if (!r.target) return !1;
            var a = r.target, i = a.tagName.toLowerCase(), n = {};
            return n.$element_type = i, n.$element_name = a.getAttribute("name"), n.$element_id = a.getAttribute("id"), n.$element_class_name = "string" == typeof a.className ? a.className : null, n.$element_target_url = a.getAttribute("href"), n.$element_content = t.getElementContent(a, i), (n = t.strip_empty_properties(n)).$url = t.isDecodeURI(e.para.url_is_decode, location.href), n.$url_path = location.pathname, n.$title = document.title, n.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, n
        }, t.localStorage = {
            get: function (e) {
                return window.localStorage.getItem(e)
            }, parse: function (r) {
                var a;
                try {
                    a = JSON.parse(t.localStorage.get(r)) || null
                } catch (i) {
                    e.log(i)
                }
                return a
            }, set: function (e, t) {
                window.localStorage.setItem(e, t)
            }, remove: function (e) {
                window.localStorage.removeItem(e)
            }, isSupport: function () {
                var e = !0;
                try {
                    var r = "__sensorsdatasupport__", a = "testIsSupportStorage";
                    t.localStorage.set(r, a), t.localStorage.get(r) !== a && (e = !1), t.localStorage.remove(r)
                } catch (i) {
                    e = !1
                }
                return e
            }
        }, t.sessionStorage = {
            isSupport: function () {
                var e = !0, t = "testIsSupportStorage";
                try {
                    sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__sensorsdatasupport__", t), sessionStorage.removeItem("__sensorsdatasupport__", t), e = !0) : e = !1
                } catch (r) {
                    e = !1
                }
                return e
            }
        }, t.isSupportCors = function () {
            return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
        }, t.xhr = function (t) {
            if (t) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
            if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
            if (window.ActiveXObject) try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (r) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (r) {
                    e.log(r)
                }
            }
        }, t.ajax = function (r) {
            function a (e) {
                if (!e) return "";
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return {}
                }
            }

            r.timeout = r.timeout || 2e4, r.credentials = "undefined" == typeof r.credentials || r.credentials;
            var i = t.xhr(r.cors);
            if (!i) return !1;
            r.type || (r.type = r.data ? "POST" : "GET"), r = t.extend({
                success: function () {
                }, error: function () {
                }
            }, r), e.debug.protocol.ajax(r.url);
            var n, s = r.success, o = r.error;
            r.success = function (e) {
                s(e), n && (clearTimeout(n), n = null)
            }, r.error = function (e) {
                o(e), n && (clearTimeout(n), n = null)
            }, n = setTimeout(function () {
                !function () {
                    try {
                        t.isObject(i) && i.abort && i.abort()
                    } catch (a) {
                        e.log(a)
                    }
                    n && (clearTimeout(n), n = null, r.error && r.error(), i.onreadystatechange = null, i.onload = null, i.onerror = null)
                }()
            }, r.timeout), "undefined" != typeof XDomainRequest && i instanceof XDomainRequest && (i.onload = function () {
                r.success && r.success(a(i.responseText)), i.onreadystatechange = null, i.onload = null, i.onerror = null
            }, i.onerror = function () {
                r.error && r.error(a(i.responseText), i.status), i.onreadystatechange = null, i.onerror = null, i.onload = null
            }), i.onreadystatechange = function () {
                try {
                    4 == i.readyState && (i.status >= 200 && i.status < 300 || 304 == i.status ? r.success(a(i.responseText)) : r.error(a(i.responseText), i.status), i.onreadystatechange = null, i.onload = null)
                } catch (e) {
                    i.onreadystatechange = null, i.onload = null
                }
            }, i.open(r.type, r.url, !0);
            try {
                r.credentials && (i.withCredentials = !0), t.isObject(r.header) && t.each(r.header, function (e, t) {
                    i.setRequestHeader && i.setRequestHeader(t, e)
                }), r.data && (r.cors || i.setRequestHeader && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === r.contentType ? i.setRequestHeader && i.setRequestHeader("Content-type", "application/json; charset=UTF-8") : i.setRequestHeader && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
            } catch (c) {
                e.log(c)
            }
            i.send(r.data || null)
        }, t.loadScript = function (e) {
            e = t.extend({
                success: function () {
                }, error: function () {
                }, appendCall: function (e) {
                    document.getElementsByTagName("head")[0].appendChild(e)
                }
            }, e);
            var r = null;
            "css" === e.type && ((r = document.createElement("link")).rel = "stylesheet", r.href = e.url), "js" === e.type && ((r = document.createElement("script")).async = "async", r.setAttribute("charset", "UTF-8"), r.src = e.url, r.type = "text/javascript"), r.onload = r.onreadystatechange = function () {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), r.onload = r.onreadystatechange = null)
            }, r.onerror = function () {
                e.error(), r.onerror = null
            }, e.appendCall(r)
        }, t.getHostname = function (r, a) {
            a && "string" == typeof a || (a = "hostname\u89e3\u6790\u5f02\u5e38");
            var i = null;
            try {
                i = t.URL(r).hostname
            } catch (n) {
                e.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
            }
            return i || a
        }, t.getQueryParamsFromUrl = function (e) {
            var r = {}, a = e.split("?")[1] || "";
            return a && (r = t.getURLSearchParams("?" + a)), r
        }, t.getURLSearchParams = function (e) {
            for (var t = function (e) {
                return decodeURIComponent(e)
            }, r = {}, a = (e = e || "").substring(1).split("&"), i = 0; i < a.length; i++) {
                var n = a[i].indexOf("=");
                if (-1 !== n) {
                    var s = a[i].substring(0, n), o = a[i].substring(n + 1);
                    s = t(s), o = t(o), r[s] = o
                }
            }
            return r
        }, t.URL = function (r) {
            var a, i = {};
            if ("function" == typeof window.URL && function () {
                try {
                    return "http://modernizr.com/" === new URL("http://modernizr.com/").href
                } catch (e) {
                    return !1
                }
            }()) (i = new URL(r)).searchParams || (i.searchParams = (a = t.getURLSearchParams(i.search), {
                get: function (e) {
                    return a[e]
                }
            })); else {
                !1 === /^https?:\/\/.+/.test(r) && e.log("Invalid URL");
                var n = t.urlParse(r);
                i.hash = "", i.host = n._values.Host ? n._values.Host + (n._values.Port ? ":" + n._values.Port : "") : "", i.href = n._values.URL, i.password = n._values.Password, i.pathname = n._values.Path, i.port = n._values.Port, i.search = n._values.QueryString ? "?" + n._values.QueryString : "", i.username = n._values.Username, i.hostname = n._values.Hostname, i.protocol = n._values.Protocol ? n._values.Protocol + ":" : "", i.origin = n._values.Origin ? n._values.Origin + (n._values.Port ? ":" + n._values.Port : "") : "", i.searchParams = function () {
                    var e = t.getURLSearchParams("?" + n._values.QueryString);
                    return {
                        get: function (t) {
                            return e[t]
                        }
                    }
                }()
            }
            return i
        }, t.getCurrentDomain = function (r) {
            var a = e.para.current_domain;
            switch (typeof a) {
                case"function":
                    var i = a();
                    return "" === i || "" === t.trim(i) ? "url\u89e3\u6790\u5931\u8d25" : -1 !== i.indexOf(".") ? i : "url\u89e3\u6790\u5931\u8d25";
                case"string":
                    return "" === a || "" === t.trim(a) ? "url\u89e3\u6790\u5931\u8d25" : -1 !== a.indexOf(".") ? a : "url\u89e3\u6790\u5931\u8d25";
                default:
                    var n = t.getCookieTopLevelDomain();
                    return "" === r ? "url\u89e3\u6790\u5931\u8d25" : "" === n ? "url\u89e3\u6790\u5931\u8d25" : n
            }
        }, t.getCookieTopLevelDomain = function (e) {
            var r = (e = e || location.hostname) || !1;
            if (!r) return "";
            var a = r.split(".");
            if (t.isArray(a) && a.length >= 2 && !/^(\d+\.)+\d+$/.test(r)) for (var i = "." + a.splice(a.length - 1, 1); a.length > 0;) if (i = "." + a.splice(a.length - 1, 1) + i, document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + i, -1 !== document.cookie.indexOf("sensorsdata_domain_test=true")) {
                var n = new Date;
                return n.setTime(n.getTime() - 1e3), document.cookie = "sensorsdata_domain_test=true; expires=" + n.toGMTString() + "; path=/; domain=" + i, i
            }
            return ""
        }, t.isReferralTraffic = function (e) {
            return "" === (e = e || document.referrer) || t.getCookieTopLevelDomain(t.getHostname(e)) !== t.getCookieTopLevelDomain()
        }, t.ry = function (e) {
            return new t.ry.init(e)
        }, t.ry.init = function (e) {
            this.ele = e
        }, t.ry.init.prototype = {
            addClass: function (e) {
                return -1 === (" " + this.ele.className + " ").indexOf(" " + e + " ") && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this
            }, removeClass: function (e) {
                var t = " " + this.ele.className + " ";
                return -1 !== t.indexOf(" " + e + " ") && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this
            }, hasClass: function (e) {
                return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ")
            }, attr: function (e, r) {
                return "string" == typeof e && t.isUndefined(r) ? this.ele.getAttribute(e) : ("string" == typeof e && (r = String(r), this.ele.setAttribute(e, r)), this)
            }, offset: function () {
                var e = this.ele.getBoundingClientRect();
                if (e.width || e.height) {
                    var t = this.ele.ownerDocument.documentElement;
                    return {
                        top: e.top + window.pageYOffset - t.clientTop,
                        left: e.left + window.pageXOffset - t.clientLeft
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
                var r = document.createElement(e);
                return this.ele.parentNode.insertBefore(r, this.ele), r.appendChild(this.ele), t.ry(r)
            }, getCssStyle: function (e) {
                var r = this.ele.style.getPropertyValue(e);
                if (r) return r;
                var a = null;
                if ("function" == typeof window.getMatchedCSSRules && (a = getMatchedCSSRules(this.ele)), !a || !t.isArray(a)) return null;
                for (var i = a.length - 1; i >= 0; i--) if (r = a[i].style.getPropertyValue(e)) return r
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
                return e = e && 11 !== e.nodeType ? e : null, t.ry(e)
            }, previousElementSibling: function () {
                var e = this.ele;
                if ("previousElementSibling" in document.documentElement) return t.ry(e.previousElementSibling);
                for (; e = e.previousSibling;) if (1 === e.nodeType) return t.ry(e);
                return t.ry(null)
            }, getSameTypeSiblings: function () {
                for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), a = [], i = 0; i < t.children.length; i++) {
                    var n = t.children[i];
                    1 === n.nodeType && n.tagName.toLowerCase() === r && a.push(t.children[i])
                }
                return a
            }
        }, t.strToUnicode = function (t) {
            if ("string" != typeof t) return e.log("\u8f6c\u6362unicode\u9519\u8bef", t), t;
            for (var r = "", a = 0; a < t.length; a++) r += "\\" + t.charCodeAt(a).toString(16);
            return r
        }, t.getReferrer = function (t) {
            return "string" != typeof (t = t || document.referrer) ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(t) : (0 === t.indexOf("https://www.baidu.com/") && (t = t.split("?")[0]), "string" == typeof (t = t.slice(0, e.para.max_referrer_string_length)) ? t : "")
        }, t.getKeywordFromReferrer = function (r) {
            r = r || document.referrer;
            var a = e.para.source_type.keyword;
            if (document && "string" == typeof r) {
                if (0 === r.indexOf("http")) {
                    var i = t.getReferSearchEngine(r), n = t.getQueryParamsFromUrl(r);
                    if (t.isEmptyObject(n)) return "\u672a\u53d6\u5230\u503c";
                    var s = null;
                    for (var o in a) if (i === o && "object" == typeof n) if (s = a[o], t.isArray(s)) for (o = 0; o < s.length; o++) {
                        var c = n[s[o]];
                        if (c) return c
                    } else if (n[s]) return n[s];
                    return "\u672a\u53d6\u5230\u503c"
                }
                return "" === r ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
            }
            return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(r)
        }, t.getWxAdIdFromUrl = function (e) {
            var r = t.getQueryParam(e, "gdt_vid"), a = t.getQueryParam(e, "hash_key"),
                i = t.getQueryParam(e, "callbacks"), n = {click_id: "", hash_key: "", callbacks: ""};
            return t.isString(r) && r.length && (n.click_id = 16 == r.length || 18 == r.length ? r : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5", t.isString(a) && a.length && (n.hash_key = a), t.isString(i) && i.length && (n.callbacks = i)), n
        }, t.getReferSearchEngine = function (r) {
            var a = t.getHostname(r);
            if (!a || "hostname\u89e3\u6790\u5f02\u5e38" === a) return "";
            e.para.source_type.keyword;
            var i = {
                baidu: [/^.*\.baidu\.com$/],
                bing: [/^.*\.bing\.com$/],
                google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
                sm: [/^m\.sm\.cn$/],
                so: [/^.+\.so\.com$/],
                sogou: [/^.*\.sogou\.com$/],
                yahoo: [/^.*\.yahoo\.com$/]
            };
            for (var n in i) for (var s = i[n], o = 0, c = s.length; o < c; o++) if (s[o].test(a)) return n;
            return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
        }, t.getSourceFromReferrer = function () {
            function r (e, t) {
                for (var r = 0; r < e.length; r++) if (-1 !== t.split("?")[0].indexOf(e[r])) return !0
            }

            var a = "(" + e.para.source_type.utm.join("|") + ")\\=[^&]+", i = e.para.source_type.search,
                n = e.para.source_type.social, s = document.referrer || "", o = t.info.pageProp.url;
            if (o) {
                var c = o.match(new RegExp(a));
                return c && c[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : r(i, s) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" : r(n, s) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === s ? "\u76f4\u63a5\u6d41\u91cf" : "\u5f15\u8350\u6d41\u91cf"
            }
            return "\u83b7\u53d6url\u5f02\u5e38"
        }, t.info = {
            initPage: function () {
                var r = t.getReferrer(), a = location.href, i = t.getCurrentDomain(a);
                i || e.debug.jssdkDebug("url_domain\u5f02\u5e38_" + a + "_" + i), this.pageProp = {
                    referrer: r,
                    referrer_host: r ? t.getHostname(r) : "",
                    url: a,
                    url_host: t.getHostname(a, "url_host\u53d6\u503c\u5f02\u5e38"),
                    url_domain: i
                }
            }, pageProp: {}, campaignParams: function () {
                var r = e.source_channel_standard.split(" "), a = "", i = {};
                return t.isArray(e.para.source_channel) && e.para.source_channel.length > 0 && (r = r.concat(e.para.source_channel), r = t.unique(r)), t.each(r, function (e) {
                    (a = t.getQueryParam(location.href, e)).length && (i[e] = a)
                }), i
            }, campaignParamsStandard: function (r, a) {
                r = r || "", a = a || "";
                var i = t.info.campaignParams(), n = {}, s = {};
                return t.each(i, function (t, i, o) {
                    -1 !== (" " + e.source_channel_standard + " ").indexOf(" " + i + " ") ? n[r + i] = o[i] : s[a + i] = o[i]
                }), {$utms: n, otherUtms: s}
            }, properties: function () {
                return {
                    $timezone_offset: (new Date).getTimezoneOffset(),
                    $screen_height: Number(screen.height) || 0,
                    $screen_width: Number(screen.width) || 0,
                    $lib: "js",
                    $lib_version: String(e.lib_version)
                }
            }, currentProps: {}, register: function (e) {
                t.extend(t.info.currentProps, e)
            }
        }, t.autoExeQueue = function () {
            return {
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
            }
        }, t.trackLink = function (r, a, i) {
            var n = null;
            if ((r = r || {}).ele && (n = r.ele), r.event && (n = r.target ? r.target : r.event.target), i = i || {}, !n || "object" != typeof n) return !1;
            if (!n.href || /^javascript/.test(n.href) || n.target || n.download || n.onclick) return e.track(a, i), !1;

            function s (t) {
                t.stopPropagation(), t.preventDefault();
                var r = !1;

                function s () {
                    r || (r = !0, location.href = n.href)
                }

                setTimeout(s, 1e3), e.track(a, i, s)
            }

            r.event && s(r.event), r.ele && t.addEvent(r.ele, "click", function (e) {
                s(e)
            })
        }, t.eventEmitter = function () {
            this._events = [], this.pendingEvents = []
        }, t.eventEmitter.prototype = {
            emit: function (e) {
                var r = [].slice.call(arguments, 1);
                t.each(this._events, function (t) {
                    t.type === e && t.callback.apply(t.context, r)
                })
            }, on: function (e, t, r) {
                "function" == typeof t && this._events.push({type: e, callback: t, context: r || this})
            }, tempAdd: function (e, t) {
                t && e && (this.pendingEvents.push({
                    type: e,
                    data: t
                }), this.pendingEvents.length > 20 && this.pendingEvents.shift())
            }, isReady: function () {
                var e = this;
                this.tempAdd = this.emit, 0 !== this.pendingEvents.length && (t.each(this.pendingEvents, function (t) {
                    e.emit(t.type, t.data)
                }), this.pendingEvents = [])
            }
        },t.rot13obfs = function (e, t) {
            t = "number" == typeof t ? t : 13;
            for (var r = (e = String(e)).split(""), a = 0, i = r.length; a < i; a++) r[a].charCodeAt(0) < 126 && (r[a] = String.fromCharCode((r[a].charCodeAt(0) + t) % 126));
            return r.join("")
        },t.rot13defs = function (e) {
            return e = String(e), t.rot13obfs(e, 113)
        },t.urlSafeBase64 = (f = {"+": "-", "/": "_", "=": "."}, _ = {
            "-": "+",
            _: "/",
            ".": "="
        }, {
            encode: function (e) {
                return e.replace(/[+\/=]/g, function (e) {
                    return f[e]
                })
            }, decode: function (e) {
                return e.replace(/[-_.]/g, function (e) {
                    return _[e]
                })
            }, trim: function (e) {
                return e.replace(/[.=]{1,2}$/, "")
            }, isBase64: function (e) {
                return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
            }, isUrlSafeBase64: function (e) {
                return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
            }
        }),t.setCssStyle = function (e) {
            var t = document.createElement("style");
            t.type = "text/css";
            try {
                t.appendChild(document.createTextNode(e))
            } catch (i) {
                t.styleSheet.cssText = e
            }
            var r = document.getElementsByTagName("head")[0], a = document.getElementsByTagName("script")[0];
            r ? r.children.length ? r.insertBefore(t, r.children[0]) : r.appendChild(t) : a.parentNode.insertBefore(t, a)
        },t.isIOS = function () {
            return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },t.getIOSVersion = function () {
            try {
                var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
                return e && e[1] ? Number.parseInt(e[1], 10) : ""
            } catch (t) {
                return ""
            }
        },t.getUA = function () {
            var e, t = {}, r = navigator.userAgent.toLowerCase();
            return (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) && (t.safari = Number(e[1].match(/^\d*.\d*/))), t
        },t.jsonp = function (r) {
            if (!t.isObject(r) || !t.isString(r.callbackName)) return e.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
            r.success = t.isFunction(r.success) ? r.success : function () {
            }, r.error = t.isFunction(r.error) ? r.error : function () {
            }, r.data = r.data || "";
            var a = document.createElement("script"), i = document.getElementsByTagName("head")[0], n = null;
            if (i.appendChild(a), t.isNumber(r.timeout) && (n = setTimeout(function () {
                r.error("timeout"), window[r.callbackName] = function () {
                    e.log("call jsonp error")
                }, n = null, i.removeChild(a)
            }, r.timeout)), window[r.callbackName] = function (t) {
                r.success(t), window[r.callbackName] = function () {
                    e.log("call jsonp error")
                }, clearTimeout(n), n = null, i.removeChild(a)
            }, r.url.indexOf("?") > -1 ? r.url += "&callbackName=" + r.callbackName : r.url += "?callbackName=" + r.callbackName, t.isObject(r.data)) {
                var s = [];
                t.each(r.data, function (e, t) {
                    s.push(t + "=" + e)
                }), r.data = s.join("&"), r.url += "&" + r.data
            }
            a.onerror = function (t) {
                window[r.callbackName] = function () {
                    e.log("call jsonp error")
                }, clearTimeout(n), n = null, i.removeChild(a), r.error(t)
            }, a.src = r.url
        },t.isSupportBeaconSend = function () {
            var e = t.getUA(), r = !1, a = navigator.userAgent.toLowerCase();
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                var i = (a.match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".");
                "undefined" == typeof e.safari && (e.safari = i[0]), i[0] && i[0] < 13 ? (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 12) && (r = !0) : (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 11.3) && (r = !0)
            } else (e.chrome > 38 || e.edge > 13 || e.firefox > 30 || e.opera > 25 || e.safari > 11) && (r = !0);
            return r
        },t.secCheck = {
            isHttpUrl: function (t) {
                return "string" == typeof t && (!1 !== /^https?:\/\/.+/.test(t) || (e.log("Invalid URL"), !1))
            }, removeScriptProtocol: function (e) {
                if ("string" != typeof e) return "";
                for (var t = /^\s*javascript/i; t.test(e);) e = e.replace(t, "");
                return e
            }
        },e.para_default = {
            preset_properties: {
                latest_utm: !0,
                latest_traffic_source_type: !0,
                latest_search_keyword: !0,
                latest_referrer: !0,
                latest_referrer_host: !1,
                latest_landing_page: !1,
                latest_wx_ad_click_id: undefined,
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
        },e.addReferrerHost = function (r) {
            t.isObject(r.properties) && (r.properties.$first_referrer && (r.properties.$first_referrer_host = t.getHostname(r.properties.$first_referrer, "\u53d6\u503c\u5f02\u5e38")), "track" !== r.type && "track_signup" !== r.type || ("$referrer" in r.properties && (r.properties.$referrer_host = "" === r.properties.$referrer ? "" : t.getHostname(r.properties.$referrer, "\u53d6\u503c\u5f02\u5e38")), e.para.preset_properties.latest_referrer && e.para.preset_properties.latest_referrer_host && (r.properties.$latest_referrer_host = "" === r.properties.$latest_referrer ? "" : t.getHostname(r.properties.$latest_referrer, "\u53d6\u503c\u5f02\u5e38"))))
        },e.addPropsHook = function (r) {
            e.para.preset_properties && e.para.preset_properties.url && ("track" === r.type || "track_signup" === r.type) && "undefined" == typeof r.properties.$url && (r.properties.$url = t.isDecodeURI(e.para.url_is_decode, window.location.href)), e.para.preset_properties && e.para.preset_properties.title && ("track" === r.type || "track_signup" === r.type) && "undefined" == typeof r.properties.$title && (r.properties.$title = document.title)
        },e.initPara = function (r) {
            e.para = r || e.para || {};
            var a, i = {};
            if (t.isObject(e.para.is_track_latest)) for (var n in e.para.is_track_latest) i["latest_" + n] = e.para.is_track_latest[n];
            for (a in e.para.preset_properties = t.extend({}, e.para_default.preset_properties, i, e.para.preset_properties || {}), e.para_default) void 0 === e.para[a] && (e.para[a] = e.para_default[a]);
            "string" == typeof e.para.server_url && (e.para.server_url = t.trim(e.para.server_url), e.para.server_url && ("://" === e.para.server_url.slice(0, 3) ? e.para.server_url = location.protocol.slice(0, -1) + e.para.server_url : "//" === e.para.server_url.slice(0, 2) ? e.para.server_url = location.protocol + e.para.server_url : "http" !== e.para.server_url.slice(0, 4) && (e.para.server_url = ""))), "string" != typeof e.para.web_url || "://" !== e.para.web_url.slice(0, 3) && "//" !== e.para.web_url.slice(0, 2) || ("://" === e.para.web_url.slice(0, 3) ? e.para.web_url = location.protocol.slice(0, -1) + e.para.web_url : e.para.web_url = location.protocol + e.para.web_url), "image" !== e.para.send_type && "ajax" !== e.para.send_type && "beacon" !== e.para.send_type && (e.para.send_type = "image"), e.debug.protocol.serverUrl(), e.bridge.initPara(), e.bridge.initState();
            var s = {datasend_timeout: 6e3, send_interval: 6e3};
            t.localStorage.isSupport() && t.isSupportCors() && "object" == typeof localStorage ? !0 === e.para.batch_send ? (e.para.batch_send = t.extend({}, s), e.para.use_client_time = !0) : "object" == typeof e.para.batch_send && (e.para.use_client_time = !0, e.para.batch_send = t.extend({}, s, e.para.batch_send)) : e.para.batch_send = !1;
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
            "object" == typeof e.para.source_type && (e.para.source_type.utm = t.isArray(e.para.source_type.utm) ? e.para.source_type.utm.concat(o) : o, e.para.source_type.search = t.isArray(e.para.source_type.search) ? e.para.source_type.search.concat(c) : c, e.para.source_type.social = t.isArray(e.para.source_type.social) ? e.para.source_type.social.concat(l) : l, e.para.source_type.keyword = t.isObject(e.para.source_type.keyword) ? t.extend(u, e.para.source_type.keyword) : u);
            var p = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
            if (t.isObject(e.para.heatmap)) {
                e.para.heatmap.clickmap = e.para.heatmap.clickmap || "default", e.para.heatmap.scroll_notice_map = e.para.heatmap.scroll_notice_map || "default", e.para.heatmap.scroll_delay_time = e.para.heatmap.scroll_delay_time || 4e3, e.para.heatmap.scroll_event_duration = e.para.heatmap.scroll_event_duration || 18e3, e.para.heatmap.renderRefreshTime = e.para.heatmap.renderRefreshTime || 1e3, e.para.heatmap.loadTimeout = e.para.heatmap.loadTimeout || 1e3;
                var d = t.isArray(e.para.heatmap.track_attr) ? t.filter(e.para.heatmap.track_attr, function (e) {
                    return e && "string" == typeof e
                }) : [];
                if (d.push("data-sensors-click"), e.para.heatmap.track_attr = d, t.isObject(e.para.heatmap.collect_tags)) if (!0 === e.para.heatmap.collect_tags.div) e.para.heatmap.collect_tags.div = {
                    ignore_tags: p,
                    max_level: 1
                }; else if (t.isObject(e.para.heatmap.collect_tags.div)) {
                    if (e.para.heatmap.collect_tags.div.ignore_tags ? t.isArray(e.para.heatmap.collect_tags.div.ignore_tags) || (e.log("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"), e.para.heatmap.collect_tags.div.ignore_tags = p) : e.para.heatmap.collect_tags.div.ignore_tags = p, e.para.heatmap.collect_tags.div.max_level) {
                        -1 === t.indexOf([1, 2, 3], e.para.heatmap.collect_tags.div.max_level) && (e.para.heatmap.collect_tags.div.max_level = 1)
                    }
                } else e.para.heatmap.collect_tags.div = !1; else e.para.heatmap.collect_tags = {div: !1}
            }
            if (t.isArray(e.para.server_url) && e.para.server_url.length) for (a = 0; a < e.para.server_url.length; a++) /sa\.gif[^\/]*$/.test(e.para.server_url[a]) || (e.para.server_url[a] = e.para.server_url[a].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")); else /sa\.gif[^\/]*$/.test(e.para.server_url) || "string" != typeof e.para.server_url || (e.para.server_url = e.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
            "string" == typeof e.para.server_url && (e.para.debug_mode_url = e.para.debug_mode_url || e.para.server_url.replace("sa.gif", "debug")), !0 === e.para.noCache ? e.para.noCache = "?" + (new Date).getTime() : e.para.noCache = "", e.para.callback_timeout > e.para.datasend_timeout && (e.para.datasend_timeout = e.para.callback_timeout), e.para.callback_timeout > e.para.queue_timeout && (e.para.queue_timeout = e.para.callback_timeout), e.para.queue_timeout > e.para.datasend_timeout && (e.para.datasend_timeout = e.para.queue_timeout)
        },e.readyState = {
            state: 0,
            historyState: [],
            stateType: {1: "1-init\u672a\u5f00\u59cb", 2: "2-init\u5f00\u59cb", 3: "3-store\u5b8c\u6210"},
            getState: function () {
                return this.historyState.join("\n")
            },
            setState: function (e) {
                String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e])
            }
        },e.setPreConfig = function (t) {
            e.para = t.para, e._q = t._q
        },e.setInitVar = function () {
            e._t = e._t || 1 * new Date, e.lib_version = "1.17.2", e.is_first_visitor = !1, e.source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term"
        },e.log = function () {
            if ((t.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || e.para.show_log) && (!t.isObject(arguments[0]) || !0 !== e.para.show_log && "string" !== e.para.show_log && !1 !== e.para.show_log || (arguments[0] = t.formatJsonString(arguments[0])), "object" == typeof console && console.log)) try {
                return console.log.apply(console, arguments)
            } catch (r) {
                console.log(arguments[0])
            }
        },e.enableLocalLog = function () {
            if (t.sessionStorage.isSupport()) try {
                sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
            } catch (r) {
                e.log("enableLocalLog error: " + r.message)
            }
        },e.disableLocalLog = function () {
            t.sessionStorage.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
        },e.debug = {
            distinct_id: function () {
            }, jssdkDebug: function () {
            }, _sendDebug: function (t) {
                e.track("_sensorsdata2019_debug", {_jssdk_debug_info: t})
            }, apph5: function (r) {
                var a = "app_h5\u6253\u901a\u5931\u8d25-", i = {
                    1: a + "use_app_track\u4e3afalse",
                    2: a + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
                    3.1: a + "Android\u6821\u9a8cserver_url\u5931\u8d25",
                    3.2: a + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
                    4.1: a + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
                    4.2: a + "H5 \u6821\u9a8c Android server_url \u5931\u8d25"
                }, n = r.output, s = r.step, o = r.data || "";
                "all" !== n && "console" !== n || e.log(i[s]), ("all" === n || "code" === n) && t.isObject(e.para.is_debug) && e.para.is_debug.apph5 && (o.type && "profile" === o.type.slice(0, 7) || (o.properties._jssdk_debug_info = "apph5-" + String(s)))
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
                protocolIsSame: function (r, a) {
                    try {
                        if (t.URL(r).protocol !== t.URL(a).protocol) return !1
                    } catch (i) {
                        return e.log("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"), !1
                    }
                    return !0
                }, serverUrl: function () {
                    t.isString(e.para.server_url) && "" !== e.para.server_url && !this.protocolIsSame(e.para.server_url, location.href) && e.log("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")
                }, ajax: function (r) {
                    if (r === e.para.server_url) return !1;
                    t.isString(r) && "" !== r && !this.protocolIsSame(r, location.href) && e.log("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")
                }
            }
        };
        var r = {
            setOnlineState: function (r) {
                if (!0 === r && t.isObject(e.para.jsapp) && "function" == typeof e.para.jsapp.getData) {
                    e.para.jsapp.isOnline = !0;
                    var a = e.para.jsapp.getData();
                    t.isArray(a) && a.length > 0 && t.each(a, function (r) {
                        t.isJSONString(r) && e.sendState.pushSend(JSON.parse(r))
                    })
                } else e.para.jsapp.isOnline = !1
            }, autoTrackIsUsed: !1, isReady: function (e) {
                e()
            }, getUtm: function () {
                return t.info.campaignParams()
            }, getStayTime: function () {
                return (new Date - e._t) / 1e3
            }, setProfileLocal: function (r) {
                if (!t.localStorage.isSupport()) return e.setProfile(r), !1;
                if (!t.isObject(r) || t.isEmptyObject(r)) return !1;
                var a = t.localStorage.parse("sensorsdata_2015_jssdk_profile"), i = !1;
                if (t.isObject(a) && !t.isEmptyObject(a)) {
                    for (var n in r) !(n in a && a[n] !== r[n]) && n in a || (a[n] = r[n], i = !0);
                    i && (t.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(a)), e.setProfile(r))
                } else t.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(r)), e.setProfile(r)
            }, setInitReferrer: function () {
                var r = t.getReferrer();
                e.setOnceProfile({_init_referrer: r, _init_referrer_host: t.info.pageProp.referrer_host})
            }, setSessionReferrer: function () {
                var e = t.getReferrer();
                c.setSessionPropsOnce({_session_referrer: e, _session_referrer_host: t.info.pageProp.referrer_host})
            }, setDefaultAttr: function () {
                t.info.register({
                    _current_url: location.href,
                    _referrer: t.getReferrer(),
                    _referring_host: t.info.pageProp.referrer_host
                })
            }, trackHeatMap: function (r, a, i) {
                if ("object" == typeof r && r.tagName) {
                    var n = r.tagName.toLowerCase(), s = r.parentNode.tagName.toLowerCase(),
                        o = e.para.heatmap && e.para.heatmap.track_attr ? e.para.heatmap.track_attr : ["data-sensors-click"];
                    "button" === n || "a" === n || "a" === s || "button" === s || "input" === n || "textarea" === n || t.hasAttributes(r, o) || u.start(null, r, n, a, i)
                }
            }, trackAllHeatMap: function (e, t, r) {
                if ("object" == typeof e && e.tagName) {
                    var a = e.tagName.toLowerCase();
                    u.start(null, e, a, t, r)
                }
            }, autoTrackSinglePage: function (r, a) {
                if (this.autoTrackIsUsed) var i = t.info.pageProp.url; else i = t.info.pageProp.referrer;

                function n () {
                    var r = t.info.campaignParams(), a = {};
                    return t.each(r, function (t, r, i) {
                        -1 !== (" " + e.source_channel_standard + " ").indexOf(" " + r + " ") ? a["$" + r] = i[r] : a[r] = i[r]
                    }), a
                }

                function s (r, a) {
                    e.track("$pageview", t.extend({
                        $referrer: t.isDecodeURI(e.para.url_is_decode, i),
                        $url: t.isDecodeURI(e.para.url_is_decode, location.href),
                        $url_path: location.pathname,
                        $title: document.title
                    }, r, n()), a), i = location.href
                }

                r = t.isObject(r) ? r : {}, r = t.isObject(r) ? r : {}, e.is_first_visitor && !r.not_set_profile && (e.setOnceProfile(t.extend({
                    $first_visit_time: new Date,
                    $first_referrer: t.isDecodeURI(e.para.url_is_decode, t.getReferrer()),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: t.getSourceFromReferrer(),
                    $first_search_keyword: t.getKeywordFromReferrer()
                }, n())), e.is_first_visitor = !1), r.not_set_profile && delete r.not_set_profile, s(r, a), this.autoTrackSinglePage = s
            }, autoTrackWithoutProfile: function (e, r) {
                e = t.isObject(e) ? e : {}, this.autoTrack(t.extend(e, {not_set_profile: !0}), r)
            }, autoTrack: function (r, a) {
                r = t.isObject(r) ? r : {};
                var i = t.info.campaignParams(), n = {};
                t.each(i, function (t, r, a) {
                    -1 !== (" " + e.source_channel_standard + " ").indexOf(" " + r + " ") ? n["$" + r] = a[r] : n[r] = a[r]
                }), e.is_first_visitor && !r.not_set_profile && (e.setOnceProfile(t.extend({
                    $first_visit_time: new Date,
                    $first_referrer: t.isDecodeURI(e.para.url_is_decode, t.getReferrer()),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: t.getSourceFromReferrer(),
                    $first_search_keyword: t.getKeywordFromReferrer()
                }, n)), e.is_first_visitor = !1), r.not_set_profile && delete r.not_set_profile;
                var s = location.href;
                e.para.is_single_page && t.addHashEvent(function () {
                    var i = t.getReferrer(s);
                    e.track("$pageview", t.extend({
                        $referrer: t.isDecodeURI(e.para.url_is_decode, i),
                        $url: t.isDecodeURI(e.para.url_is_decode, location.href),
                        $url_path: location.pathname,
                        $title: document.title
                    }, n, r), a), s = location.href
                }), e.track("$pageview", t.extend({
                    $referrer: t.isDecodeURI(e.para.url_is_decode, t.getReferrer()),
                    $url: t.isDecodeURI(e.para.url_is_decode, location.href),
                    $url_path: location.pathname,
                    $title: document.title
                }, n, r), a), this.autoTrackIsUsed = !0
            }, getAnonymousID: function () {
                return t.isEmptyObject(e.store._state) ? "\u8bf7\u5148\u521d\u59cb\u5316SDK" : e.store._state._first_id || e.store._state.first_id || e.store._state._distinct_id || e.store._state.distinct_id
            }, setPlugin: function (r) {
                if (!t.isObject(r)) return !1;
                t.each(r, function (r, a) {
                    t.isFunction(r) && (t.isObject(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[a] ? r(window.SensorsDataWebJSSDKPlugin[a]) : e.log(a + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + a + "\u7684\u5f15\u5165\u987a\u5e8f\uff01"))
                })
            }, useModulePlugin: function () {
                e.use.apply(e, arguments)
            }, useAppPlugin: function () {
                this.setPlugin.apply(this, arguments)
            }
        };

        function a () {
            this.sendingData = 0, this.sendingItemKeys = []
        }

        e.quick = function () {
            var t = Array.prototype.slice.call(arguments), a = t[0], i = t.slice(1);
            if ("string" == typeof a && r[a]) return r[a].apply(r, i);
            "function" == typeof a ? a.apply(e, i) : e.log("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + t[0])
        }, e.use = function (r, a) {
            return t.isString(r) ? t.isObject(window.SensorsDataWebJSSDKPlugin) && t.isObject(window.SensorsDataWebJSSDKPlugin[r]) && t.isFunction(window.SensorsDataWebJSSDKPlugin[r].init) ? (window.SensorsDataWebJSSDKPlugin[r].init(e, a), window.SensorsDataWebJSSDKPlugin[r]) : t.isObject(e.modules) && t.isObject(e.modules[r]) && t.isFunction(e.modules[r].init) ? (e.modules[r].init(e, a), e.modules[r]) : void e.log(r + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + r + "\u7684\u5f15\u5165\u987a\u5e8f\uff01") : (e.log("use\u63d2\u4ef6\u540d\u79f0\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff01"), !1)
        }, e.track = function (e, t, r) {
            s.check({event: e, properties: t}) && s.send({type: "track", event: e, properties: t}, r)
        }, e.trackLink = function (e, r, a) {
            "object" == typeof e && e.tagName ? t.trackLink({ele: e}, r, a) : "object" == typeof e && e.target && e.event && t.trackLink(e, r, a)
        }, e.trackLinks = function (r, a, i) {
            return i = i || {}, !(!r || "object" != typeof r) && (!(!r.href || /^javascript/.test(r.href) || r.target) && void t.addEvent(r, "click", function (t) {
                t.preventDefault();
                var n = !1;

                function s () {
                    n || (n = !0, location.href = r.href)
                }

                setTimeout(s, 1e3), e.track(a, i, s)
            }))
        }, e.setProfile = function (e, t) {
            s.check({propertiesMust: e}) && s.send({type: "profile_set", properties: e}, t)
        }, e.setOnceProfile = function (e, t) {
            s.check({propertiesMust: e}) && s.send({type: "profile_set_once", properties: e}, t)
        }, e.appendProfile = function (r, a) {
            s.check({propertiesMust: r}) && (t.each(r, function (a, i) {
                t.isString(a) ? r[i] = [a] : t.isArray(a) ? r[i] = a : (delete r[i], e.log("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
            }), t.isEmptyObject(r) || s.send({type: "profile_append", properties: r}, a))
        }, e.incrementProfile = function (r, a) {
            var i = r;
            t.isString(r) && ((r = {})[i] = 1), s.check({propertiesMust: r}) && (!function (e) {
                for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) return !1;
                return !0
            }(r) ? e.log("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57") : s.send({
                type: "profile_increment",
                properties: r
            }, a))
        }, e.deleteProfile = function (e) {
            s.send({type: "profile_delete"}, e), c.set("distinct_id", t.UUID()), c.set("first_id", "")
        }, e.unsetProfile = function (r, a) {
            var i = r, n = {};
            t.isString(r) && (r = []).push(i), t.isArray(r) ? (t.each(r, function (r) {
                t.isString(r) ? n[r] = !0 : e.log("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389", r)
            }), s.send({
                type: "profile_unset",
                properties: n
            }, a)) : e.log("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4")
        }, e.identify = function (r, a) {
            "number" == typeof r && (r = String(r));
            var i = c.getFirstId();
            if (void 0 === r) {
                var n = t.UUID();
                i ? c.set("first_id", n) : c.set("distinct_id", n)
            } else s.check({distinct_id: r}) ? !0 === a ? i ? c.set("first_id", r) : c.set("distinct_id", r) : i ? c.change("first_id", r) : c.change("distinct_id", r) : e.log("identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32")
        }, e.trackSignup = function (e, t, r, a) {
            if (s.check({distinct_id: e, event: t, properties: r})) {
                var i = c.getFirstId() || c.getDistinctId();
                c.set("distinct_id", e), s.send({
                    original_id: i,
                    distinct_id: e,
                    type: "track_signup",
                    event: t,
                    properties: r
                }, a)
            }
        }, e.registerPage = function (r) {
            s.check({properties: r}) ? t.extend(t.info.currentProps, r) : e.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, e.clearAllRegister = function (e) {
            c.clearAllProps(e)
        }, e.clearPageRegister = function (e) {
            if (t.isArray(e) && e.length > 0) for (var r = 0; r < e.length; r++) t.isString(e[r]) && e[r] in t.info.currentProps && delete t.info.currentProps[e[r]]; else if (!0 === e) for (var r in t.info.currentProps) delete t.info.currentProps[r]
        }, e.register = function (t) {
            s.check({properties: t}) ? c.setProps(t) : e.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, e.registerOnce = function (t) {
            s.check({properties: t}) ? c.setPropsOnce(t) : e.log("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, e.registerSession = function (t) {
            s.check({properties: t}) ? c.setSessionProps(t) : e.log("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, e.registerSessionOnce = function (t) {
            s.check({properties: t}) ? c.setSessionPropsOnce(t) : e.log("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
        }, e.login = function (t, r) {
            if ("number" == typeof t && (t = String(t)), s.check({distinct_id: t})) {
                var a = c.getFirstId(), i = c.getDistinctId();
                t !== i ? (a || c.set("first_id", i), e.trackSignup(t, "$SignUp", {}, r)) : r && r()
            } else e.log("login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"), r && r()
        }, e.logout = function (r) {
            var a = c.getFirstId();
            if (a) if (c.set("first_id", ""), !0 === r) {
                var i = t.UUID();
                c.set("distinct_id", i)
            } else c.set("distinct_id", a); else e.log("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
        }, e.getPresetProperties = function () {
            var r, a, i = {
                    $is_first_day: t.cookie.getNewUser(),
                    $referrer: t.isDecodeURI(e.para.url_is_decode, t.info.pageProp.referrer) || "",
                    $referrer_host: t.info.pageProp.referrer ? t.getHostname(t.info.pageProp.referrer) : "",
                    $url: t.isDecodeURI(e.para.url_is_decode, location.href),
                    $url_path: location.pathname,
                    $title: document.title || "",
                    _distinct_id: c.getDistinctId()
                },
                n = t.extend({}, t.info.properties(), e.store.getProps(), (r = t.info.campaignParams(), a = {}, t.each(r, function (t, r, i) {
                    -1 !== (" " + e.source_channel_standard + " ").indexOf(" " + r + " ") ? a["$" + r] = i[r] : a[r] = i[r]
                }), a), i);
            return e.para.preset_properties.latest_referrer && e.para.preset_properties.latest_referrer_host && (n.$latest_referrer_host = "" === n.$latest_referrer ? "" : t.getHostname(n.$latest_referrer)), n
        }, e.detectMode = function () {
            var r = {
                searchKeywordMatch: location.search.match(/sa-request-id=([^&#]+)/), isSeachHasKeyword: function () {
                    var e = this.searchKeywordMatch;
                    return !!(e && e[0] && e[1]) && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), !0)
                }, hasKeywordHandle: function () {
                    var e = this.searchKeywordMatch, r = location.search.match(/sa-request-type=([^&#]+)/),
                        a = location.search.match(/sa-request-url=([^&#]+)/);
                    u.setNotice(a), t.sessionStorage.isSupport() && (a && a[0] && a[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(a[1])), sessionStorage.setItem("sensors_heatmap_id", e[1]), r && r[0] && r[1] ? "1" === r[1] || "2" === r[1] || "3" === r[1] ? (r = r[1], sessionStorage.setItem("sensors_heatmap_type", r)) : r = null : r = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), this.isReady(e[1], r)
                }, isReady: function (r, a, i) {
                    e.para.heatmap_url ? t.loadScript({
                        success: function () {
                            setTimeout(function () {
                                "undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(e, r, a, i), "object" == typeof console && "function" == typeof console.log && (e.heatmap_version && e.heatmap_version === e.lib_version || console.log("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))
                            }, 0)
                        }, error: function () {
                        }, type: "js", url: e.para.heatmap_url
                    }) : e.log("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")
                }, isStorageHasKeyword: function () {
                    return t.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
                }, storageHasKeywordHandle: function () {
                    u.setNotice(), r.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
                }
            }, a = {
                isStorageHasKeyword: function () {
                    return t.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode")
                }, isSearchHasKeyword: function () {
                    return !!location.search.match(/sa-visual-mode=true/) && ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), !0)
                }, loadVtrack: function () {
                    t.loadScript({
                        success: function () {
                        },
                        error: function () {
                        },
                        type: "js",
                        url: e.para.vtrack_url ? e.para.vtrack_url : location.protocol + "//static.sensorsdata.cn/sdk/" + e.lib_version + "/vtrack.min.js"
                    })
                }, messageListener: function (r) {
                    if ("sa-fe" !== r.data.source) return !1;
                    if ("v-track-mode" === r.data.type) {
                        if (r.data.data && r.data.data.isVtrack) if (t.sessionStorage.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), r.data.data.userURL && location.search.match(/sa-visual-mode=true/)) {
                            var i = (n = r.data.data.userURL, t.secCheck.isHttpUrl(n) ? t.secCheck.removeScriptProtocol(n) : (e.log("\u53ef\u89c6\u5316\u6a21\u5f0f\u68c0\u6d4b URL \u5931\u8d25"), !1));
                            i && (window.location.href = i)
                        } else a.loadVtrack();
                        window.removeEventListener("message", a.messageListener, !1)
                    }
                    var n
                }, removeMessageHandle: function () {
                    window.removeEventListener && window.removeEventListener("message", a.messageListener, !1)
                }, verifyVtrackMode: function () {
                    window.addEventListener && window.addEventListener("message", a.messageListener, !1), a.postMessage()
                }, postMessage: function () {
                    window.parent && window.parent.postMessage && window.parent.postMessage({
                        source: "sa-web-sdk",
                        type: "v-is-vtrack",
                        data: {sdkversion: "1.17.2"}
                    }, "*")
                }, notifyUser: function () {
                    var e = function (t) {
                        if ("sa-fe" !== t.data.source) return !1;
                        "v-track-mode" === t.data.type && (t.data.data && t.data.data.isVtrack && alert("\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"), window.removeEventListener("message", e, !1))
                    };
                    window.addEventListener && window.addEventListener("message", e, !1), a.postMessage()
                }
            }, i = function (r) {
                var a = e.bridge.initDefineBridgeInfo();

                function i () {
                    var r = [];
                    a.touch_app_bridge || r.push(e.debug.defineMode("1")), t.isObject(e.para.app_js_bridge) || (r.push(e.debug.defineMode("2")), a.verify_success = !1), t.isObject(e.para.heatmap) && "default" == e.para.heatmap.clickmap || r.push(e.debug.defineMode("3")), "fail" === a.verify_success && r.push(e.debug.defineMode("4"));
                    var i = {callType: "app_alert", data: r};
                    SensorsData_App_Visual_Bridge && SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info ? SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info(JSON.stringify(i)) : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(i))
                }

                if (t.isObject(window.SensorsData_App_Visual_Bridge) && window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode && (!0 === window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode || window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode())) if (t.isObject(e.para.heatmap) && "default" == e.para.heatmap.clickmap) if (t.isObject(e.para.app_js_bridge) && "success" === a.verify_success) if (r) sa_jssdk_app_define_mode(e, r); else {
                    var n = location.protocol;
                    n = t.indexOf(["http:", "https:"], n) > -1 ? n : "https:", t.loadScript({
                        success: function () {
                            setTimeout(function () {
                                "undefined" != typeof sa_jssdk_app_define_mode && sa_jssdk_app_define_mode(e, r)
                            }, 0)
                        }, error: function () {
                        }, type: "js", url: n + "//static.sensorsdata.cn/sdk/" + e.lib_version + "/vapph5define.min.js"
                    })
                } else i(); else i()
            };
            e.para.heatmap && e.para.heatmap.collect_tags && t.isObject(e.para.heatmap.collect_tags) && t.each(e.para.heatmap.collect_tags, function (t, r) {
                "div" !== r && t && e.heatmap.otherTags.push(r)
            }), r.isSeachHasKeyword() ? r.hasKeywordHandle() : window.parent !== self && a.isSearchHasKeyword() ? a.verifyVtrackMode() : r.isStorageHasKeyword() ? r.storageHasKeywordHandle() : window.parent !== self && a.isStorageHasKeyword() ? a.verifyVtrackMode() : (e.readyState.setState(3), new e.JSBridge({
                type: "visualized",
                app_call_js: function () {
                    "undefined" != typeof sa_jssdk_app_define_mode ? i(!0) : i(!1)
                }
            }), i(!1), e.bridge.app_js_bridge_v1(), t.info.initPage(), e.para.is_track_single_page && t.addSinglePageEvent(function (r) {
                var a = function (a) {
                    a = a || {}, r !== location.href && (t.info.pageProp.referrer = r, r = t.isDecodeURI(e.para.url_is_decode, r), e.quick("autoTrack", t.extend({
                        $url: t.isDecodeURI(e.para.url_is_decode, location.href),
                        $referrer: r
                    }, a)))
                };
                if ("boolean" == typeof e.para.is_track_single_page) a(); else if ("function" == typeof e.para.is_track_single_page) {
                    var i = e.para.is_track_single_page();
                    t.isObject(i) ? a(i) : !0 === i && a()
                }
            }), e.para.batch_send && (t.addEvent(window, "onpagehide" in window ? "pagehide" : "unload", function (t) {
                e.batchSend.clearPendingStatus()
            }), e.batchSend.batchInterval()), e.store.init(), e.readyState.setState(4), e._q && t.isArray(e._q) && e._q.length > 0 && t.each(e._q, function (t) {
                e[t[0]].apply(e, Array.prototype.slice.call(t[1]))
            }), t.isObject(e.para.heatmap) && (u.initHeatmap(), u.initScrollmap()), a.notifyUser())
        }, a.prototype = {
            add: function (e) {
                t.isObject(e) && (this.writeStore(e), "track_signup" !== e.type && "$pageview" !== e.event || this.sendStrategy())
            }, clearPendingStatus: function () {
                this.sendingItemKeys.length && this.removePendingItems(this.sendingItemKeys)
            }, remove: function (e) {
                this.sendingData > 0 && --this.sendingData, t.isArray(e) && e.length > 0 && t.each(e, function (e) {
                    t.localStorage.remove(e)
                })
            }, send: function (r) {
                var a, i = this;
                t.isString(e.para.server_url) && "" !== e.para.server_url || t.isArray(e.para.server_url) && e.para.server_url.length ? (a = t.isArray(e.para.server_url) ? e.para.server_url[0] : e.para.server_url, t.ajax({
                    url: a,
                    type: "POST",
                    data: "data_list=" + encodeURIComponent(t.base64Encode(JSON.stringify(r.vals))),
                    credentials: !1,
                    timeout: e.para.batch_send.datasend_timeout,
                    cors: !0,
                    success: function () {
                        i.remove(r.keys), i.removePendingItems(r.keys)
                    },
                    error: function () {
                        i.sendingData > 0 && --i.sendingData, i.removePendingItems(r.keys)
                    }
                })) : e.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
            }, appendPendingItems: function (e) {
                if (!1 !== t.isArray(e)) {
                    this.sendingItemKeys = t.unique(this.sendingItemKeys.concat(e));
                    try {
                        var r = this.getPendingItems(), a = t.unique(r.concat(e));
                        localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(a))
                    } catch (i) {
                    }
                }
            }, removePendingItems: function (e) {
                if (!1 !== t.isArray(e)) {
                    this.sendingItemKeys.length && (this.sendingItemKeys = t.filter(this.sendingItemKeys, function (r) {
                        return -1 === t.indexOf(e, r)
                    }));
                    try {
                        var r = this.getPendingItems(), a = t.filter(r, function (r) {
                            return -1 === t.indexOf(e, r)
                        });
                        localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(a))
                    } catch (i) {
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
                var t = e.vals;
                t.length > 0 && this.send({keys: e.keys, vals: t})
            }, sendStrategy: function () {
                if (!1 === document.hasFocus()) return !1;
                var e = this.readStore();
                e.keys.length > 0 && 0 === this.sendingData && (this.sendingData = 1, this.sendPrepare(e))
            }, batchInterval: function () {
                var t = this;
                setInterval(function () {
                    t.sendStrategy()
                }, e.para.batch_send.send_interval)
            }, readStore: function () {
                for (var r = [], a = [], i = null, n = (new Date).getTime(), s = localStorage.length, o = this.getPendingItems(), c = 0; c < s; c++) {
                    var l = localStorage.key(c);
                    if (0 === l.indexOf("sawebjssdk-") && /^sawebjssdk\-\d+$/.test(l)) {
                        if (o.length && t.indexOf(o, l) > -1) continue;
                        (i = localStorage.getItem(l)) ? (i = t.safeJSONParse(i)) && t.isObject(i) ? (i._flush_time = n, r.push(l), a.push(i)) : (localStorage.removeItem(l), e.log("localStorage-\u6570\u636eparse\u5f02\u5e38" + i)) : (localStorage.removeItem(l), e.log("localStorage-\u6570\u636e\u53d6\u503c\u5f02\u5e38" + i))
                    }
                }
                return {keys: r, vals: a}
            }, writeStore: function (e) {
                var r = String(t.getRandom()).slice(2, 5) + String(t.getRandom()).slice(2, 5) + String((new Date).getTime()).slice(3);
                localStorage.setItem("sawebjssdk-" + r, JSON.stringify(e))
            }
        }, e.batchSend = new a;
        var i = {
            getSendUrl: function (e, r) {
                var a = t.base64Encode(r), i = "crc=" + t.hashCode(a);
                return -1 !== e.indexOf("?") ? e + "&data=" + encodeURIComponent(a) + "&ext=" + encodeURIComponent(i) : e + "?data=" + encodeURIComponent(a) + "&ext=" + encodeURIComponent(i)
            }, getSendData: function (e) {
                var r = t.base64Encode(e), a = "crc=" + t.hashCode(r);
                return "data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(a)
            }, getInstance: function (r) {
                var a = new (this[this.getSendType(r)])(r), i = a.start;
                return a.start = function () {
                    t.isObject(e.para.is_debug) && e.para.is_debug.storage && e.store.requests && e.store.requests.push({
                        name: this.server_url,
                        initiatorType: this.img ? "img" : "xmlhttprequest",
                        entryType: "resource",
                        requestData: this.data
                    });
                    var r = this;
                    i.apply(this, arguments), setTimeout(function () {
                        r.isEnd(!0)
                    }, e.para.callback_timeout)
                }, a.end = function () {
                    this.callback && this.callback();
                    var t = this;
                    setTimeout(function () {
                        t.lastClear && t.lastClear()
                    }, e.para.datasend_timeout - e.para.callback_timeout)
                }, a.isEnd = function (t) {
                    if (!this.received) {
                        this.received = !0, this.end();
                        var r = this;
                        t ? e.para.queue_timeout - e.para.callback_timeout <= 0 ? r.close() : setTimeout(function () {
                            r.close()
                        }, e.para.queue_timeout - e.para.callback_timeout) : r.close()
                    }
                }, a
            }, getRealtimeInstance: function (t) {
                var r = new (this[this.getSendType(t)])(t);
                r.defaultData = t;
                var a = r.start;
                return r.start = function () {
                    var t = this;
                    a.apply(this, arguments), setTimeout(function () {
                        t.isEnd(!0)
                    }, e.para.callback_timeout)
                }, r.end = function () {
                    this.callback && this.callback();
                    var t = this;
                    setTimeout(function () {
                        t.lastClear && t.lastClear()
                    }, e.para.datasend_timeout - e.para.callback_timeout)
                }, r.isEnd = function (e) {
                    this.received || (this.received = !0, this.end())
                }, r
            }, getSendType: function (r) {
                var a = ["image", "ajax", "beacon"], i = a[0];
                return "beacon" === (i = r.config && t.indexOf(a, r.config.send_type) > -1 ? r.config.send_type : e.para.send_type) && !1 === t.isSupportBeaconSend() && (i = "image"), "ajax" === i && !1 === t.isSupportCors() && (i = "image"), i
            }, image: function (t) {
                this.callback = t.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, e.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.data = t.data, this.server_url = i.getSendUrl(t.server_url, t.data)
            }
        };
        i.image.prototype.start = function () {
            var t = this;
            e.para.ignore_oom && (this.img.onload = function () {
                this.onload = null, this.onerror = null, this.onabort = null, t.isEnd()
            }, this.img.onerror = function () {
                this.onload = null, this.onerror = null, this.onabort = null, t.isEnd()
            }, this.img.onabort = function () {
                this.onload = null, this.onerror = null, this.onabort = null, t.isEnd()
            }), this.img.src = this.server_url
        }, i.image.prototype.lastClear = function () {
            this.img.src = ""
        }, i.ajax = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = i.getSendData(e.data)
        }, i.ajax.prototype.start = function () {
            var r = this;
            t.ajax({
                url: this.server_url,
                type: "POST",
                data: this.data,
                credentials: !1,
                timeout: e.para.datasend_timeout,
                cors: !0,
                success: function () {
                    r.isEnd()
                },
                error: function () {
                    r.isEnd()
                }
            })
        }, i.beacon = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = i.getSendData(e.data)
        }, i.beacon.prototype.start = function () {
            var e = this;
            "object" == typeof navigator && "function" == typeof navigator.sendBeacon && (navigator.sendBeacon(this.server_url, this.data) || (this.defaultData.config.send_type = "image", n.realtimeSend(this.defaultData))), setTimeout(function () {
                e.isEnd()
            }, 40)
        };
        var n = {};
        e.sendState = n, e.events = new t.eventEmitter, n.queue = t.autoExeQueue(), n.getSendCall = function (r, a, i) {
            if (e.is_heatmap_render_mode) return !1;
            if (e.readyState.state < 3) return e.log("\u521d\u59cb\u5316\u6ca1\u6709\u5b8c\u6210"), !1;
            r._track_id = Number(String(t.getRandom()).slice(2, 5) + String(t.getRandom()).slice(2, 4) + String((new Date).getTime()).slice(-4)), e.para.use_client_time && (r._flush_time = (new Date).getTime());
            var n = r;
            r = JSON.stringify(r);
            var s = {data: n, config: a, callback: i};
            if (e.events.tempAdd("send", n), !e.para.app_js_bridge && e.para.batch_send && localStorage.length < 200) return e.log(n), e.batchSend.add(s.data), !1;
            e.bridge.dataSend(s, this, i), e.log(n)
        }, n.prepareServerUrl = function (r) {
            if ("object" == typeof r.config && r.config.server_url) this.sendCall(r, r.config.server_url, r.callback); else if (t.isArray(e.para.server_url) && e.para.server_url.length) for (var a = 0; a < e.para.server_url.length; a++) this.sendCall(r, e.para.server_url[a]); else "string" == typeof e.para.server_url && "" !== e.para.server_url ? this.sendCall(r, e.para.server_url, r.callback) : e.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
        }, n.sendCall = function (r, a, i) {
            var n = {server_url: a, data: JSON.stringify(r.data), callback: i, config: r.config};
            t.isObject(e.para.jsapp) && !e.para.jsapp.isOnline && "function" == typeof e.para.jsapp.setData ? (delete n.callback, n = JSON.stringify(n), e.para.jsapp.setData(n)) : e.para.use_client_time ? this.realtimeSend(n) : this.pushSend(n)
        }, n.pushSend = function (e) {
            var t = i.getInstance(e), r = this;
            t.close = function () {
                r.queue.close()
            }, this.queue.enqueue(t)
        }, n.realtimeSend = function (e) {
            i.getRealtimeInstance(e).start()
        };
        var s = {};
        e.saEvent = s, s.checkOption = {
            regChecks: {regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},
            checkPropertiesKey: function (e) {
                var r = this, a = !0;
                return t.each(e, function (e, t) {
                    r.regChecks.regName.test(t) || (a = !1)
                }), a
            },
            check: function (e, r) {
                return "string" == typeof this[e] ? this[this[e]](r) : t.isFunction(this[e]) ? this[e](r) : void 0
            },
            str: function (r) {
                return !!t.isString(r) || (e.log("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"), !0)
            },
            properties: function (r) {
                return t.strip_sa_properties(r), !r || (t.isObject(r) ? !!this.checkPropertiesKey(r) || (e.log("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"), !0) : (e.log("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"), !0))
            },
            propertiesMust: function (r) {
                return t.strip_sa_properties(r), r === undefined || !t.isObject(r) || t.isEmptyObject(r) ? (e.log("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"), !0) : !!this.checkPropertiesKey(r) || (e.log("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"), !0)
            },
            event: function (r) {
                return !(!t.isString(r) || !this.regChecks.regName.test(r)) || (e.log("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff0ceventName \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u4e14\u9700\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u5373\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c $,\u5176\u4e2d\u4ee5 $ \u5f00\u5934\u7684\u8868\u660e\u662f\u7cfb\u7edf\u7684\u4fdd\u7559\u5b57\u6bb5\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u8bf7\u4e0d\u8981\u4ee5 $ \u5f00\u5934"), !0)
            },
            test_id: "str",
            group_id: "str",
            distinct_id: function (r) {
                return !(!t.isString(r) || !/^.{1,255}$/.test(r)) || (e.log("distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32"), !1)
            }
        }, s.check = function (e) {
            for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !this.checkOption.check(t, e[t])) return !1;
            return !0
        }, s.send = function (r, a) {
            var i = {
                distinct_id: c.getDistinctId(),
                lib: {$lib: "js", $lib_method: "code", $lib_version: String(e.lib_version)},
                properties: {}
            };
            t.isObject(r) && t.isObject(r.properties) && !t.isEmptyObject(r.properties) && r.properties.$lib_detail && (i.lib.$lib_detail = r.properties.$lib_detail, delete r.properties.$lib_detail), t.extend(i, e.store.getUnionId(), r), t.isObject(r.properties) && !t.isEmptyObject(r.properties) && t.extend(i.properties, r.properties), r.type && "profile" === r.type.slice(0, 7) || (i.properties = t.extend({}, t.info.properties(), c.getProps(), c.getSessionProps(), t.info.currentProps, i.properties), e.para.preset_properties.latest_referrer && !t.isString(i.properties.$latest_referrer) && (i.properties.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"), e.para.preset_properties.latest_search_keyword && !t.isString(i.properties.$latest_search_keyword) && (i.properties.$latest_search_keyword = "\u53d6\u503c\u5f02\u5e38"), e.para.preset_properties.latest_traffic_source_type && !t.isString(i.properties.$latest_traffic_source_type) && (i.properties.$latest_traffic_source_type = "\u53d6\u503c\u5f02\u5e38"), e.para.preset_properties.latest_landing_page && !t.isString(i.properties.$latest_landing_page) && (i.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"), "not_collect" === e.para.preset_properties.latest_wx_ad_click_id ? (delete i.properties._latest_wx_ad_click_id, delete i.properties._latest_wx_ad_hash_key, delete i.properties._latest_wx_ad_callbacks) : e.para.preset_properties.latest_wx_ad_click_id && !t.isString(i.properties._latest_wx_ad_click_id) && (i.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38", i.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38", i.properties._latest_wx_ad_callbacks = "\u53d6\u503c\u5f02\u5e38"), t.isString(i.properties._latest_wx_ad_click_id) && (i.properties.$url = t.isDecodeURI(e.para.url_is_decode, window.location.href))), i.properties.$time && t.isDate(i.properties.$time) ? (i.time = 1 * i.properties.$time, delete i.properties.$time) : e.para.use_client_time && (i.time = 1 * new Date), t.parseSuperProperties(i), t.filterReservedProperties(i.properties), t.searchObjDate(i), t.searchObjString(i), t.searchZZAppStyle(i);
            var n = t.searchConfigData(i.properties);
            l.checkIsAddSign(i), l.checkIsFirstTime(i), e.addReferrerHost(i), e.addPropsHook(i), !0 === e.para.debug_mode ? (e.log(i), this.debugPath(JSON.stringify(i), a)) : e.sendState.getSendCall(i, n, a)
        }, s.debugPath = function (r, a) {
            var i = r, n = "";
            n = -1 !== e.para.debug_mode_url.indexOf("?") ? e.para.debug_mode_url + "&data=" + encodeURIComponent(t.base64Encode(r)) : e.para.debug_mode_url + "?data=" + encodeURIComponent(t.base64Encode(r)), t.ajax({
                url: n,
                type: "GET",
                cors: !0,
                header: {"Dry-Run": String(e.para.debug_mode_upload)},
                success: function (e) {
                    !0 === t.isEmptyObject(e) ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + i) : alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e))
                }
            })
        };
        var c = e.store = {
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
            }, toState: function (r) {
                var a = null;
                if (null != r && t.isJSONString(r)) if (a = JSON.parse(r), this._state = t.extend(a), a.distinct_id) {
                    if ("object" == typeof a.props) {
                        for (var i in a.props) "string" == typeof a.props[i] && (a.props[i] = a.props[i].slice(0, e.para.max_referrer_string_length));
                        this.save()
                    }
                } else this.set("distinct_id", t.UUID()), e.debug.distinct_id("1", r); else this.set("distinct_id", t.UUID()), e.debug.distinct_id("2", r)
            }, initSessionState: function () {
                var e = t.cookie.get("sensorsdata2015session"), r = null;
                null !== e && "object" == typeof (r = JSON.parse(e)) && (this._sessionState = r || {})
            }, setOnce: function (e, t) {
                e in this._state || this.set(e, t)
            }, set: function (t, r) {
                this._state = this._state || {};
                var a = this._state.distinct_id;
                this._state[t] = r, "first_id" === t ? delete this._state._first_id : "distinct_id" === t && delete this._state._distinct_id, this.save(), "distinct_id" === t && a && e.events.tempAdd("changeDistinctId", r)
            }, change: function (e, t) {
                this._state["_" + e] = t
            }, setSessionProps: function (e) {
                var r = this._sessionState;
                t.extend(r, e), this.sessionSave(r)
            }, setSessionPropsOnce: function (e) {
                var r = this._sessionState;
                t.coverExtend(r, e), this.sessionSave(r)
            }, setProps: function (r, a) {
                var i = {};
                for (var n in i = a ? r : t.extend(this._state.props || {}, r)) "string" == typeof i[n] && (i[n] = i[n].slice(0, e.para.max_referrer_string_length));
                this.set("props", i)
            }, setPropsOnce: function (e) {
                var r = this._state.props || {};
                t.coverExtend(r, e), this.set("props", r)
            }, clearAllProps: function (e) {
                if (this._sessionState = {}, t.isArray(e) && e.length > 0) for (var r = 0; r < e.length; r++) t.isString(e[r]) && -1 === e[r].indexOf("latest_") && e[r] in this._state.props && delete this._state.props[e[r]]; else for (var r in this._state.props) 1 !== r.indexOf("latest_") && delete this._state.props[r];
                this.sessionSave({}), this.save()
            }, sessionSave: function (e) {
                this._sessionState = e, t.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
            }, save: function () {
                var r = JSON.parse(JSON.stringify(this._state));
                delete r._first_id, delete r._distinct_id;
                var a = JSON.stringify(r);
                e.para.encrypt_cookie && (a = t.cookie.encrypt(a)), t.cookie.set(this.getCookieName(), a, 73e3, e.para.cross_subdomain)
            }, getCookieName: function () {
                var r = "";
                if (!1 === e.para.cross_subdomain) {
                    try {
                        r = t.URL(location.href).hostname
                    } catch (a) {
                        e.log(a)
                    }
                    r = "string" == typeof r && "" !== r ? "sa_jssdk_2015_" + r.replace(/\./g, "_") : "sa_jssdk_2015_root"
                } else r = "sensorsdata2015jssdkcross";
                return r
            }, init: function () {
                this.initSessionState();
                var r = t.UUID(), a = t.cookie.get(this.getCookieName());
                null === (a = t.cookie.resolveValue(a)) ? (e.is_first_visitor = !0, this.set("distinct_id", r)) : (t.isJSONString(a) && JSON.parse(a).distinct_id || (e.is_first_visitor = !0), this.toState(a)), l.setDeviceId(r), l.storeInitCheck(), l.checkIsFirstLatest()
            }
        }, l = {
            checkIsAddSign: function (e) {
                "track" === e.type && (t.cookie.getNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
            }, is_first_visit_time: !1, checkIsFirstTime: function (e) {
                "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
            }, setDeviceId: function (r) {
                var a = null, i = t.cookie.get("sensorsdata2015jssdkcross"), n = {};
                null != (i = t.cookie.resolveValue(i)) && t.isJSONString(i) && (n = JSON.parse(i)).$device_id && (a = n.$device_id), a = a || r, !0 === e.para.cross_subdomain ? c.set("$device_id", a) : (n.$device_id = a, n = JSON.stringify(n), e.para.encrypt_cookie && (n = t.cookie.encrypt(n)), t.cookie.set("sensorsdata2015jssdkcross", n, null, !0)), e.para.is_track_device_id && (t.info.currentProps.$device_id = a)
            }, storeInitCheck: function () {
                if (e.is_first_visitor) {
                    var r = new Date, a = {h: 23 - r.getHours(), m: 59 - r.getMinutes(), s: 59 - r.getSeconds()};
                    t.cookie.set(t.cookie.getCookieName("new_user"), "1", 3600 * a.h + 60 * a.m + a.s + "s"), this.is_first_visit_time = !0
                } else t.cookie.getNewUser() || (this.checkIsAddSign = function (e) {
                    "track" === e.type && (e.properties.$is_first_day = !1)
                }), this.checkIsFirstTime = function (e) {
                    "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
                }
            }, checkIsFirstLatest: function () {
                for (var r = t.info.pageProp.url_domain, a = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], i = c.getProps(), n = 0; n < a.length; n++) a[n] in i && delete i[a[n]];
                c.setProps(i, !0);
                var s = {};
                if ("" === r && (r = "url\u89e3\u6790\u5931\u8d25"), t.each(e.para.preset_properties, function (a, i) {
                    if (-1 === i.indexOf("latest_")) return !1;
                    if (i = i.slice(7), a) {
                        if ("wx_ad_click_id" === i && "not_collect" === a) return !1;
                        if ("utm" !== i && "url\u89e3\u6790\u5931\u8d25" === r) "wx_ad_click_id" === i ? (s._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25", s._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25", s._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25") : s["$latest_" + i] = "url\u7684domain\u89e3\u6790\u5931\u8d25"; else if (t.isReferralTraffic(document.referrer)) switch (i) {
                            case"traffic_source_type":
                                s.$latest_traffic_source_type = t.getSourceFromReferrer();
                                break;
                            case"referrer":
                                s.$latest_referrer = t.isDecodeURI(e.para.url_is_decode, t.info.pageProp.referrer);
                                break;
                            case"search_keyword":
                                s.$latest_search_keyword = t.getKeywordFromReferrer();
                                break;
                            case"landing_page":
                                s.$latest_landing_page = t.isDecodeURI(e.para.url_is_decode, location.href);
                                break;
                            case"wx_ad_click_id":
                                var n = t.getWxAdIdFromUrl(location.href);
                                s._latest_wx_ad_click_id = n.click_id, s._latest_wx_ad_hash_key = n.hash_key, s._latest_wx_ad_callbacks = n.callbacks
                        }
                    } else if ("utm" === i && e.store._state.props) for (var o in e.store._state.props) (0 === o.indexOf("$latest_utm") || 0 === o.indexOf("_latest_") && o.indexOf("_latest_wx_ad_") < 0) && delete e.store._state.props[o]; else if (e.store._state.props && "$latest_" + i in e.store._state.props) delete e.store._state.props["$latest_" + i]; else if ("wx_ad_click_id" == i && e.store._state.props && !1 === a) {
                        t.each(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function (t) {
                            t in e.store._state.props && delete e.store._state.props[t]
                        })
                    }
                }), e.register(s), e.para.preset_properties.latest_utm) {
                    var o = t.info.campaignParamsStandard("$latest_", "_latest_"), l = o.$utms, u = o.otherUtms;
                    t.isEmptyObject(l) || e.register(l), t.isEmptyObject(u) || e.register(u)
                }
            }
        };
        e.bridge = {
            is_verify_success: !1, initPara: function () {
                var r = {is_send: !0, white_list: [], is_mui: !1};
                "object" == typeof e.para.app_js_bridge ? e.para.app_js_bridge = t.extend({}, r, e.para.app_js_bridge) : !0 === e.para.use_app_track || !0 === e.para.app_js_bridge || "only" === e.para.use_app_track ? (!1 !== e.para.use_app_track_is_send && "only" !== e.para.use_app_track || (r.is_send = !1), e.para.app_js_bridge = t.extend({}, r)) : "mui" === e.para.use_app_track && (r.is_mui = !0, e.para.app_js_bridge = t.extend({}, r)), !1 === e.para.app_js_bridge.is_send && e.log("\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03\uff01")
            }, initState: function () {
                function r (r) {
                    function a (r) {
                        var a = {hostname: "", project: ""};
                        try {
                            a.hostname = t.URL(r).hostname, a.project = t.URL(r).searchParams.get("project") || "default"
                        } catch (i) {
                            e.log(i)
                        }
                        return a
                    }

                    var i = a(r), n = a(e.para.server_url);
                    if (i.hostname === n.hostname && i.project === n.project) return !0;
                    if (e.para.app_js_bridge.white_list.length > 0) for (var s = 0; s < e.para.app_js_bridge.white_list.length; s++) {
                        var o = a(e.para.app_js_bridge.white_list[s]);
                        if (o.hostname === i.hostname && o.project === i.project) return !0
                    }
                    return !1
                }

                if (t.isObject(e.para.app_js_bridge) && !e.para.app_js_bridge.is_mui) if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && t.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) r(window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) && (e.bridge.is_verify_success = !0); else if (t.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
                    var a = window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url();
                    a && r(a) && (e.bridge.is_verify_success = !0)
                }
            }, initDefineBridgeInfo: function () {
                var r = {touch_app_bridge: !0, verify_success: !1};
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && t.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url ? e.bridge.is_verify_success ? r.verify_success = "success" : r.verify_success = "fail" : t.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track ? e.bridge.is_verify_success ? r.verify_success = "success" : r.verify_success = "fail" : "object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify || SensorsData_APP_JS_Bridge.sensorsdata_track) ? SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify ? SensorsData_APP_JS_Bridge.sensorsdata_visual_verify(JSON.stringify({server_url: e.para.server_url})) ? r.verify_success = "success" : r.verify_success = "fail" : r.verify_success = "success" : !/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream ? r.touch_app_bridge = !1 : e.bridge.iOS_UA_bridge() ? r.verify_success = "success" : r.verify_success = "fail", r
            }, iOS_UA_bridge: function () {
                if (/sensors-verify/.test(navigator.userAgent)) {
                    var r = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
                    if (r && r[0] && "string" == typeof r[1] && 2 === r[1].split("?").length) {
                        r = r[1].split("?");
                        var a = null, i = null;
                        try {
                            a = t.URL(e.para.server_url).hostname, i = t.URL(e.para.server_url).searchParams.get("project") || "default"
                        } catch (n) {
                            e.log(n)
                        }
                        return !(!a || a !== r[0] || !i || i !== r[1])
                    }
                    return !1
                }
                return !!/sa-sdk-ios/.test(navigator.userAgent)
            }, dataSend: function (r, a, i) {
                var n = r.data;
                if (t.isObject(e.para.app_js_bridge) && !e.para.app_js_bridge.is_mui) if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && t.isObject(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) e.bridge.is_verify_success ? (window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify({
                    callType: "app_h5_track",
                    data: t.extend({server_url: e.para.server_url}, n)
                })), "function" == typeof i && i()) : e.para.app_js_bridge.is_send ? (e.debug.apph5({
                    data: n,
                    step: "4.1",
                    output: "all"
                }), a.prepareServerUrl(r)) : "function" == typeof i && i(); else if (t.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) e.bridge.is_verify_success ? (SensorsData_APP_New_H5_Bridge.sensorsdata_track(JSON.stringify(t.extend({server_url: e.para.server_url}, n))), "function" == typeof i && i()) : e.para.app_js_bridge.is_send ? (e.debug.apph5({
                    data: n,
                    step: "4.2",
                    output: "all"
                }), a.prepareServerUrl(r)) : "function" == typeof i && i(); else if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) SensorsData_APP_JS_Bridge.sensorsdata_verify ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(t.extend({server_url: e.para.server_url}, n))) ? "function" == typeof i && i() : e.para.app_js_bridge.is_send ? (e.debug.apph5({
                    data: n,
                    step: "3.1",
                    output: "all"
                }), a.prepareServerUrl(r)) : "function" == typeof i && i() : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(t.extend({server_url: e.para.server_url}, n))), "function" == typeof i && i()); else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) t.isObject(e.para.app_js_bridge) && !0 === e.para.app_js_bridge.is_send ? (e.debug.apph5({
                    data: n,
                    step: "2",
                    output: "all"
                }), a.prepareServerUrl(r)) : "function" == typeof i && i(); else {
                    var s = null;
                    if (e.bridge.iOS_UA_bridge()) {
                        s = document.createElement("iframe");
                        var o = function (r) {
                            var a = JSON.stringify(t.extend({server_url: e.para.server_url}, r));
                            return a = a.replaceAll(/\r\n/g, ""), "sensorsanalytics://trackEvent?event=" + (a = encodeURIComponent(a))
                        }(n);
                        s.setAttribute("src", o), document.documentElement.appendChild(s), s.parentNode.removeChild(s), s = null, "function" == typeof i && i()
                    } else e.para.app_js_bridge.is_send ? (e.debug.apph5({
                        data: n,
                        step: "3.2",
                        output: "all"
                    }), a.prepareServerUrl(r)) : "function" == typeof i && i()
                } else t.isObject(e.para.app_js_bridge) && e.para.app_js_bridge.is_mui ? t.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event ? (window.plus.SDAnalytics.trackH5Event(data), "function" == typeof i && i()) : t.isObject(e.para.app_js_bridge) && !0 === e.para.app_js_bridge.is_send ? a.prepareServerUrl(r) : "function" == typeof i && i() : (e.debug.apph5({
                    data: n,
                    step: "1",
                    output: "code"
                }), a.prepareServerUrl(r))
            }, app_js_bridge_v1: function () {
                var r = null, a = null;
                window.sensorsdata_app_js_bridge_call_js = function (e) {
                    !function (e) {
                        r = e, t.isJSONString(r) && (r = JSON.parse(r)), a && (a(r), a = null, r = null)
                    }(e)
                }, e.getAppStatus = function (e) {
                    if (function () {
                        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                            var e = document.createElement("iframe");
                            e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null
                        }
                    }(), "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (r = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), t.isJSONString(r) && (r = JSON.parse(r))), !e) return r;
                    null === r ? a = e : (e(r), r = null)
                }
            }, supportAppCallJs: function () {
                window.sensorsdata_app_call_js = function (e, t) {
                    e in window.sensorsdata_app_call_js.modules && window.sensorsdata_app_call_js.modules[e](t)
                }, window.sensorsdata_app_call_js.modules = {}
            }
        }, e.JSBridge = function (e) {
            this.list = {}, this.type = e.type, this.app_call_js = t.isFunction(e.app_call_js) ? e.app_call_js : function () {
            }, this.init()
        }, e.JSBridge.prototype.init = function () {
            var e = this;
            window.sensorsdata_app_call_js.modules[this.type] || (window.sensorsdata_app_call_js.modules[this.type] = function (t) {
                e.app_call_js(t)
            })
        }, e.JSBridge.prototype.jsCallApp = function (r) {
            var a = {callType: this.type, data: r};
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(a)); else {
                if (!t.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return e.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
                window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(a))
            }
        }, e.JSBridge.prototype.hasAppBridge = function () {
            return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage ? "ios" : t.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app ? "android" : (e.log("App\u7aefbridge\u672a\u66b4\u9732"), !1)
        }, e.JSBridge.prototype.requestToApp = function (r) {
            var a = this, i = t.isObject(r.data) ? r.data : {};
            t.isFunction(r.callback) || (r.callback = function () {
            }), t.isObject(r.timeout) && t.isNumber(r.timeout.time) && (t.isFunction(r.timeout.callback) || (r.timeout.callback = function () {
            }), r.timer = setTimeout(function () {
                r.timeout.callback(), delete a.list[n]
            }, r.timeout.time));
            var n = (new Date).getTime().toString(16) + "-" + String(t.getRandom()).replace(".", "").slice(1, 8);
            this.list[n] = r;
            var s = {callType: this.type, data: i};
            if (s.data.message_id = n, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(s)); else {
                if (!t.isObject(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return e.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
                window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(s))
            }
        }, e.JSBridge.prototype.double = function (e) {
            if (e.message_id) {
                var t = this.list[e.message_id];
                t && (t.timer && clearTimeout(t.timer), t.callback(e), delete this.list[e.message_id])
            }
        };
        var u = e.heatmap = {
            otherTags: [], getTargetElement: function (r, a) {
                var i = r;
                if ("object" != typeof i) return null;
                if ("string" != typeof i.tagName) return null;
                var n = i.tagName.toLowerCase();
                if ("body" === n.toLowerCase() || "html" === n.toLowerCase()) return null;
                if (!i || !i.parentNode || !i.parentNode.children) return null;
                var s = i.parentNode, o = this.hasElement(a.originalEvent || a), c = e.para.heatmap.track_attr,
                    l = this.otherTags;
                if ("a" === n || "button" === n || "input" === n || "textarea" === n || t.hasAttributes(i, c)) return i;
                if (t.indexOf(l, n) > -1) return i;
                if ("button" === s.tagName.toLowerCase() || "a" === s.tagName.toLowerCase() || t.hasAttributes(s, c)) return s;
                if ("area" === n && "map" === s.tagName.toLowerCase() && t.ry(s).prev().tagName && "img" === t.ry(s).prev().tagName.toLowerCase()) return t.ry(s).prev();
                if (o) return o;
                if ("div" === n && e.para.heatmap.collect_tags.div && this.isDivLevelValid(i)) return (e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div && e.para.heatmap.collect_tags.div.max_level || 1) > 1 || this.isCollectableDiv(i) ? i : null;
                if (this.isStyleTag(n) && e.para.heatmap.collect_tags.div) {
                    var u = this.getCollectableParent(i);
                    if (u && this.isDivLevelValid(u)) return u
                }
                return null
            }, getDivLevels: function (e, r) {
                var a = u.getElementPath(e, !0, r).split(" > "), i = 0;
                return t.each(a, function (e) {
                    "div" === e && i++
                }), i
            }, isDivLevelValid: function (t) {
                for (var r = e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div && e.para.heatmap.collect_tags.div.max_level || 1, a = t.getElementsByTagName("div"), i = a.length - 1; i >= 0; i--) if (u.getDivLevels(a[i], t) > r) return !1;
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
                return function (e, t) {
                    for (; e && e !== document && 1 === e.nodeType; e = e.parentNode) if (e.tagName.toLowerCase() === t) return e;
                    return null
                }(e, "li")
            }, getElementPosition: function (r, a, i) {
                var n = e.heatmap.getClosestLi(r);
                if (!n) return null;
                var s = r.tagName.toLowerCase(), o = n.getElementsByTagName(s), c = o.length, l = [];
                if (c > 1) {
                    for (var u = 0; u < c; u++) {
                        e.heatmap.getElementPath(o[u], i) === a && l.push(o[u])
                    }
                    if (l.length > 1) return t.indexOf(l, r)
                }
                return function (e) {
                    if (e.tagName.toLowerCase(), !e.parentNode) return "";
                    if (1 === t.ry(e).getSameTypeSiblings().length) return 0;
                    for (var r = 0, a = e; t.ry(a).previousElementSibling().ele; a = t.ry(a).previousElementSibling().ele, r++) ;
                    return r
                }(n)
            }, setNotice: function (t) {
                e.is_heatmap_render_mode = !0, e.para.heatmap || (e.errorMsg = "\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"), t && t[0] && t[1] && "http:" === t[1].slice(0, 5) && "https:" === location.protocol && (e.errorMsg = "\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"), e.para.heatmap_url || (e.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + e.lib_version + "/heatmap.min.js")
            }, getDomIndex: function (e) {
                if (!e.parentNode) return -1;
                for (var t = 0, r = e.tagName, a = e.parentNode.children, i = 0; i < a.length; i++) if (a[i].tagName === r) {
                    if (e === a[i]) return t;
                    t++
                }
                return -1
            }, selector: function (t) {
                var r = t.parentNode && 9 == t.parentNode.nodeType ? -1 : this.getDomIndex(t);
                return t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && (!e.para.heatmap || e.para.heatmap && "not_use_id" !== e.para.heatmap.element_selector) ? "#" + t.getAttribute("id") : t.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
            }, getDomSelector: function (t, r) {
                if (!t || !t.parentNode || !t.parentNode.children) return !1;
                r = r && r.join ? r : [];
                var a = t.nodeName.toLowerCase();
                return t && "body" !== a && 1 == t.nodeType ? (r.unshift(this.selector(t)), t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && e.para.heatmap && "not_use_id" !== e.para.heatmap.element_selector ? r.join(" > ") : this.getDomSelector(t.parentNode, r)) : (r.unshift("body"), r.join(" > "))
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
                var t = parseInt(+e.clientX + +this.na(), 10);
                e = parseInt(+e.clientY + +this.i(), 10);
                return {x: isNaN(t) ? 0 : t, y: isNaN(e) ? 0 : e}
            }, start: function (r, a, i, n, s) {
                var o = t.isObject(n) ? n : {}, c = t.isFunction(s) ? s : t.isFunction(n) ? n : undefined;
                if (e.para.heatmap && e.para.heatmap.collect_element && !e.para.heatmap.collect_element(a)) return !1;
                var l = this.getDomSelector(a), u = t.getEleInfo({target: a});
                u.$element_selector = l || "", u.$element_path = e.heatmap.getElementPath(a, e.para.heatmap && "not_use_id" === e.para.heatmap.element_selector);
                var p = e.heatmap.getElementPosition(a, u.$element_path, e.para.heatmap && "not_use_id" === e.para.heatmap.element_selector);
                if (t.isNumber(p) && (u.$element_position = p), e.para.heatmap && e.para.heatmap.custom_property) {
                    var d = e.para.heatmap.custom_property(a);
                    t.isObject(d) && (u = t.extend(u, d))
                }
                u = t.extend(u, o), "a" === i && e.para.heatmap && !0 === e.para.heatmap.isTrackLink ? t.trackLink({
                    event: r,
                    target: a
                }, "$WebClick", u) : e.track("$WebClick", u, c)
            }, hasElement: function (e) {
                var r = e._getPath ? e._getPath() : u.getElementPath(e.target, !0).split(" > ");
                if (t.isArray(r) && r.length > 0) for (var a = 0; a < r.length; a++) if (r[a] && r[a].tagName && "a" === r[a].tagName.toLowerCase()) return r[a];
                return !1
            }, isStyleTag: function (r, a) {
                return !(t.indexOf(["a", "div", "input", "button", "textarea"], r) > -1) && (!a || e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div ? !!(t.isObject(e.para.heatmap) && t.isObject(e.para.heatmap.collect_tags) && t.isObject(e.para.heatmap.collect_tags.div) && t.indexOf(e.para.heatmap.collect_tags.div.ignore_tags, r) > -1) : t.indexOf(["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"], r) > -1)
            }, isCollectableDiv: function (t, r) {
                try {
                    if (0 === t.children.length) return !0;
                    for (var a = 0; a < t.children.length; a++) if (1 === t.children[a].nodeType) {
                        var i = t.children[a].tagName.toLowerCase(),
                            n = e.para && e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div && e.para.heatmap.collect_tags.div.max_level;
                        if (!("div" === i && n > 1 || this.isStyleTag(i, r))) return !1;
                        if (!this.isCollectableDiv(t.children[a], r)) return !1
                    }
                    return !0
                } catch (s) {
                    e.log(s)
                }
                return !1
            }, getCollectableParent: function (t, r) {
                try {
                    var a = t.parentNode, i = a ? a.tagName.toLowerCase() : "";
                    if ("body" === i) return !1;
                    var n = e.para && e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div && e.para.heatmap.collect_tags.div.max_level;
                    if (i && "div" === i && (n > 1 || this.isCollectableDiv(a, r))) return a;
                    if (a && this.isStyleTag(i, r)) return this.getCollectableParent(a, r)
                } catch (s) {
                    e.log(s)
                }
                return !1
            }, initScrollmap: function () {
                if (!t.isObject(e.para.heatmap) || "default" !== e.para.heatmap.scroll_notice_map) return !1;
                var r = function () {
                    return !(e.para.scrollmap && t.isFunction(e.para.scrollmap.collect_url) && !e.para.scrollmap.collect_url())
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
                }({
                    timeout: 1e3, func: function (r, a) {
                        var i = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                            n = new Date, s = n - this.current_time;
                        (s > e.para.heatmap.scroll_delay_time && i - r.$viewport_position != 0 || a) && (r.$url = t.isDecodeURI(e.para.url_is_decode, location.href), r.$title = document.title, r.$url_path = location.pathname, r.event_duration = Math.min(e.para.heatmap.scroll_event_duration, parseInt(s) / 1e3), e.track("$WebStay", r)), this.current_time = n
                    }
                });
                a.current_time = new Date, t.addEvent(window, "scroll", function () {
                    if (!r()) return !1;
                    a.go()
                }), t.addEvent(window, "unload", function () {
                    if (!r()) return !1;
                    a.go("notime")
                })
            }, initHeatmap: function () {
                var r = this;
                return !(!t.isObject(e.para.heatmap) || "default" !== e.para.heatmap.clickmap) && (!(t.isFunction(e.para.heatmap.collect_url) && !e.para.heatmap.collect_url()) && ("all" === e.para.heatmap.collect_elements ? e.para.heatmap.collect_elements = "all" : e.para.heatmap.collect_elements = "interact", void ("all" === e.para.heatmap.collect_elements ? t.addEvent(document, "click", function (e) {
                    var t = e || window.event;
                    if (!t) return !1;
                    var a = t.target || t.srcElement;
                    if ("object" != typeof a) return !1;
                    if ("string" != typeof a.tagName) return !1;
                    var i = a.tagName.toLowerCase();
                    if ("body" === i || "html" === i) return !1;
                    if (!a || !a.parentNode || !a.parentNode.children) return !1;
                    var n = a.parentNode.tagName.toLowerCase();
                    "a" === n || "button" === n ? r.start(t, a.parentNode, n) : r.start(t, a, i)
                }) : t.addEvent(document, "click", function (t) {
                    var a = t || window.event;
                    if (!a) return !1;
                    var i = a.target || a.srcElement, n = e.heatmap.getTargetElement(i, t);
                    n && r.start(a, n, n.tagName.toLowerCase())
                }))))
            }
        };
        e.init = function (t) {
            if (e.readyState && e.readyState.state && e.readyState.state >= 2) return !1;
            e.setInitVar(), e.readyState.setState(2), e.initPara(t), e.bridge.supportAppCallJs(), e.detectMode(), e._.isIOS() && e._.getIOSVersion() && e._.getIOSVersion() < 13 && (e.para.heatmap && e.para.heatmap.collect_tags && e.para.heatmap.collect_tags.div && e._.setCssStyle("div, [data-sensors-click] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }"), e.para.heatmap && e.para.heatmap.track_attr && e._.setCssStyle("[" + e.para.heatmap.track_attr.join("], [") + "] { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }"))
        };
        if (t.each(["getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister"], function (r) {
            var a = e[r];
            e[r] = function () {
                if (e.readyState.state < 3) return t.isArray(e._q) || (e._q = []), e._q.push([r, arguments]), !1;
                if (e.readyState.getState()) return a.apply(e, arguments);
                try {
                    console.error("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")
                } catch (i) {
                    e.log(i)
                }
            }
        }), e.modules.Amp = function () {
            "use strict";
            var e = {
                sd: null, init: function (e) {
                    if (this.sd) return !1;
                    if (this.sd = e, !this.sd || !this.sd._) return !1;
                    var t = this.sd._.cookie.get("sensors_amp_id"), r = this.sd.store._state.distinct_id;
                    if (t && t.length > 0) {
                        var a = "amp-" === t.slice(0, 4);
                        if (t !== r) {
                            if (!a) return !1;
                            this.sd.store._state.first_id ? (this.sd.identify(t, !0), this.sd.saEvent.send({
                                original_id: t,
                                distinct_id: r,
                                type: "track_signup",
                                event: "$SignUp",
                                properties: {}
                            }, null), this.setAmpId(r)) : this.sd.identify(t, !0)
                        }
                    } else this.setAmpId(r);
                    this.addListener()
                }, addListener: function () {
                    var e = this;
                    this.sd.events.on("changeDistinctId", function (t) {
                        e.setAmpId(t)
                    }), this.sd.events.isReady()
                }, setAmpId: function (e) {
                    this.sd._.cookie.set("sensors_amp_id", e)
                }
            };
            return window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) ? window.SensorsDataWebJSSDKPlugin.Amp = window.SensorsDataWebJSSDKPlugin.Amp || e : window.SensorsDataWebJSSDKPlugin = {Amp: e}, e
        }(), e.modules.Channel = function () {
            "use strict";
            var e, t, r = {
                event_list: [], latest_event_initial_time: null, max_save_time: 2592e6, init: function (r) {
                    return !t && (!!(t = r) && (!!(e = t._).localStorage.isSupport() && (t.para.max_string_length = 1024, this.eventList.init(), this.addLatestChannelUrl(), void this.addIsChannelCallbackEvent())))
                }, addIsChannelCallbackEvent: function () {
                    t.registerPage({
                        $is_channel_callback_event: function (e) {
                            if (e.event && "$WebClick" !== e.event && "$pageview" !== e.event && "$WebStay" !== e.event && "$SignUp" !== e.event) return !r.eventList.hasEvent(e.event) && (r.eventList.add(e.event), !0)
                        }
                    })
                }, addLatestChannelUrl: function () {
                    var a = this.getUrlDomain(), i = this.cookie.getChannel();
                    if ("url\u89e3\u6790\u5931\u8d25" === a) this.registerAndSave({
                        _sa_channel_landing_url: "",
                        _sa_channel_landing_url_error: "url\u7684domain\u89e3\u6790\u5931\u8d25"
                    }); else if (e.isReferralTraffic(document.referrer)) {
                        var n = e.getQueryParam(location.href, "sat_cf");
                        e.isString(n) && n.length > 0 ? (this.registerAndSave({_sa_channel_landing_url: location.href}), r.channelLinkHandler()) : this.registerAndSave({_sa_channel_landing_url: ""})
                    } else i ? t.registerPage(i) : t.registerPage({
                        _sa_channel_landing_url: "",
                        _sa_channel_landing_url_error: "\u53d6\u503c\u5f02\u5e38"
                    })
                }, registerAndSave: function (e) {
                    t.registerPage(e), this.cookie.saveChannel(e)
                }, cookie: {
                    getChannel: function () {
                        var r;
                        try {
                            r = JSON.parse(e.cookie.get("sensorsdata2015jssdkchannel"))
                        } catch (a) {
                            t.log(a)
                        }
                        return !(!e.isObject(r) || !r.prop) && r.prop
                    }, saveChannel: function (t) {
                        var r = {prop: t};
                        e.cookie.set("sensorsdata2015jssdkchannel", JSON.stringify(r))
                    }
                }, channelLinkHandler: function () {
                    this.eventList.reset(), t.track("$ChannelLinkReaching")
                }, getUrlDomain: function () {
                    var t = e.info.pageProp.url_domain;
                    return "" === t && (t = "url\u89e3\u6790\u5931\u8d25"), t
                }, eventList: {
                    init: function () {
                        var t = this.get(), a = (new Date).getTime();
                        if (t && e.isNumber(t.latest_event_initial_time) && e.isArray(t.eventList)) {
                            var i = a - t.latest_event_initial_time;
                            i > 0 && i < r.max_save_time ? (r.event_list = t.eventList, r.latest_event_initial_time = t.latest_event_initial_time) : this.reset()
                        } else this.reset()
                    }, get: function () {
                        var r = {};
                        try {
                            r = JSON.parse(e.localStorage.get("sawebjssdkchannel"))
                        } catch (a) {
                            t.log(a)
                        }
                        return r
                    }, add: function (e) {
                        r.event_list.push(e), this.save()
                    }, save: function () {
                        var t = {latest_event_initial_time: r.latest_event_initial_time, eventList: r.event_list};
                        e.localStorage.set("sawebjssdkchannel", JSON.stringify(t))
                    }, reset: function () {
                        r.event_list = [], r.latest_event_initial_time = (new Date).getTime(), this.save()
                    }, hasEvent: function (t) {
                        var a = !1;
                        return e.each(r.event_list, function (e) {
                            e === t && (a = !0)
                        }), a
                    }
                }
            };
            return window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) ? window.SensorsDataWebJSSDKPlugin.SensorsChannel = window.SensorsDataWebJSSDKPlugin.SensorsChannel || r : window.SensorsDataWebJSSDKPlugin = {SensorsChannel: r}, r
        }(), e.modules.Deeplink = function () {
            "use strict";
            /micromessenger\/([\d.]+)/i.test(navigator.userAgent || "");
            var e, t = function () {
                var e = {};
                return "undefined" != typeof document.hidden ? (e.hidden = "hidden", e.visibilityChange = "visibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e
            };

            function r () {
                return void 0 !== e && document[e]
            }

            e = t().hidden;
            var a = {android: /Android/i, iOS: /iPhone|iPad|iPod/i}, i = function () {
                for (var e in a) if (navigator.userAgent.match(a[e])) return e;
                return ""
            }(), n = function (e) {
                return null != e && "[object Object]" == Object.prototype.toString.call(e)
            }, s = {
                key: null,
                timer: null,
                sd: null,
                data: null,
                timeout: 2500,
                apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
                init: function () {
                    if (this.sd) return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"), !1;
                    if (n(sensorsDataAnalytic201505) && (this.sd = sensorsDataAnalytic201505), this.log("init()"), null === this.sd) return this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"), !1;
                    var e = {};
                    if (arguments.length > 0 && (1 === arguments.length && n(arguments[0]) ? e = arguments[0] : arguments.length >= 2 && n(arguments[1]) && (e = arguments[1])), !a.hasOwnProperty(i)) return this.log("\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"), !1;
                    if (n(e) && this.sd._.isNumber(e.timeout) && e.timeout >= 2500 && (this.timeout = e.timeout), !this.sd.para.server_url) return this.log("\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"), !1;
                    var t, r, o = (t = this.sd, {
                        origin: (r = t._.URL(t.para.server_url)).origin,
                        project: r.searchParams.get("project") || "default"
                    });
                    this.apiURL = this.apiURL.replace("{origin}", o.origin).replace("{project}", o.project);
                    var c = this.sd._.URL(window.location.href).searchParams.get("deeplink");
                    if (!c) return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"), !1;
                    c = window.decodeURIComponent(c);
                    var l = c.match(/\/sd\/(\w+)\/(\w+)$/);
                    if (!l) return this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"), !1;
                    this.key = l[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(l[2])), this.sd._.ajax({
                        url: this.apiURL,
                        type: "GET",
                        cors: !0,
                        credentials: !1,
                        success: function (e) {
                            if (e.errorMsg) return s.log("API\u62a5\u9519\uff1a" + e.errorMsg), !1;
                            s.data = e, s.log("API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a" + JSON.stringify(e, null, "  ")), this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))
                        }.bind(this),
                        error: function (e) {
                            s.log("API\u67e5\u8be2\u51fa\u9519")
                        }
                    }), this.addListeners()
                },
                openDeepLink: function () {
                    if (this.log("openDeeplink()"), !this.data) return this.log("\u6ca1\u6709Deep link\u6570\u636e!"), !1;
                    if ("iOS" === i) {
                        this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");
                        var t = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
                        this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + t), a = this, n = t, s = this.data.ios_info.download_url, a.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:" + n), window.location.href = n, a.timer = setTimeout(function () {
                            if (r()) return a.log("The page is hidden, stop navigating to download page"), !1;
                            a.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), window.location.href = s
                        }, a.timeout), a.log("new timer:" + a.timer)
                    } else this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"), function (t, a, i) {
                        t.log("\u5c1d\u8bd5\u5524\u8d77 android app");
                        var n = a;
                        t.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + n), window.location = n, t.timer = setTimeout(function () {
                            var a = r();
                            if (t.log("hide:" + e + ":" + document[e]), a) return t.log("The page is hidden, stop navigating to download page"), !1;
                            t.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), window.location = i
                        }, t.timeout)
                    }(this, this.data.android_info.url_schemes, this.data.android_info.download_url);
                    var a, n, s
                },
                log: function (e) {
                    this.sd && this.sd.log(e)
                },
                addListeners: function () {
                    var e = t().visibilityChange;
                    e && document.addEventListener(e, function () {
                        clearTimeout(this.timer), this.log("visibilitychange, clear timeout:" + this.timer)
                    }.bind(this), !1), window.addEventListener("pagehide", function () {
                        this.log("page hide, clear timeout:" + this.timer), clearTimeout(this.timer)
                    }.bind(this), !1)
                }
            };
            return n(window.SensorsDataWebJSSDKPlugin) ? (window.SensorsDataWebJSSDKPlugin.Deeplink = window.SensorsDataWebJSSDKPlugin.Deeplink || s, window.SensorsDataWebJSSDKPlugin.deeplink = window.SensorsDataWebJSSDKPlugin.deeplink || s) : window.SensorsDataWebJSSDKPlugin = {
                Deeplink: s,
                deeplink: s
            }, s
        }(), e.modules.SiteLinker = function () {
            "use strict";
            var e = {
                getPart: function (e) {
                    var t = this.option.length;
                    if (t) for (var r = 0; r < t; r++) if (e.indexOf(this.option[r].part_url) > -1) return !0;
                    return !1
                }, getPartHash: function (e) {
                    var t = this.option.length;
                    if (t) for (var r = 0; r < t; r++) if (e.indexOf(this.option[r].part_url) > -1) return this.option[r].after_hash;
                    return !1
                }, getCurrenId: function () {
                    var e = this.store.getDistinctId() || "", r = this.store.getFirstId() || "";
                    return this._.urlSafeBase64 && this._.urlSafeBase64.encode ? e = e ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(t.base64Encode(e))) : "" : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : ""), encodeURIComponent(r ? "f" + e : "d" + e)
                }, rewireteUrl: function (e, t) {
                    var r = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e), a = "";
                    if (r) {
                        var i, n = r[1] || "", s = r[2] || "", o = r[3] || "";
                        if (this.getPartHash(e)) i = o.indexOf("_sasdk"), a = o.indexOf("?") > -1 ? i > -1 ? n + s + "#" + o.substring(1, i) + "_sasdk=" + this.getCurrenId() : n + s + "#" + o.substring(1) + "&_sasdk=" + this.getCurrenId() : n + s + "#" + o.substring(1) + "?_sasdk=" + this.getCurrenId(); else i = s.indexOf("_sasdk"), a = /^\?(\w)+/.test(s) ? i > -1 ? n + "?" + s.substring(1, i) + "_sasdk=" + this.getCurrenId() + o : n + "?" + s.substring(1) + "&_sasdk=" + this.getCurrenId() + o : n + "?" + s.substring(1) + "_sasdk=" + this.getCurrenId() + o;
                        return t && (t.href = a), a
                    }
                }, getUrlId: function () {
                    var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
                    if (this._.isArray(e) && e[1]) {
                        var r = decodeURIComponent(e[1]);
                        return !r || "f" !== r.substring(0, 1) && "d" !== r.substring(0, 1) || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(r) ? r = r.substring(0, 1) + t.base64Decode(this._.urlSafeBase64.decode(r.substring(1))) : this._.rot13defs && (r = r.substring(0, 1) + this._.rot13defs(r.substring(1)))), r
                    }
                    return ""
                }, setRefferId: function () {
                    var e = this.store.getDistinctId(), t = this.getUrlId();
                    if ("" === t) return !1;
                    var r = "a" === t.substring(0, 1) || "d" === t.substring(0, 1);
                    if ((t = t.substring(1)) === e) return !1;
                    t && r && this.store.getFirstId() && (this.sd.identify(t, !0), this.sd.saEvent.send({
                        original_id: t,
                        distinct_id: e,
                        type: "track_signup",
                        event: "$SignUp",
                        properties: {}
                    }, null)), t && r && !this.store.getFirstId() && this.sd.identify(t, !0), !t || r || this.store.getFirstId() || this.sd.login(t)
                }, addListen: function () {
                    var e = this, t = function (t) {
                        var r, a, i = t.target, n = i.tagName.toLowerCase(), s = i.parentNode;
                        if ("a" === n && i.href || s && s.tagName && "a" === s.tagName.toLowerCase() && s.href) {
                            "a" === n && i.href ? (r = i.href, a = i) : (r = s.href, a = s);
                            var o = e._.URL(r).protocol;
                            "http:" !== o && "https:" !== o || e.getPart(r) && e.rewireteUrl(r, a)
                        }
                    };
                    e._.addEvent(document, "mousedown", t), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && e._.addEvent(document, "pointerdown", t)
                }, init: function (e, t) {
                    this.sd = e, this._ = e._, this.store = e.store, this.para = e.para, this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0 ? (this.setRefferId(), this.addListen(), this.option = t.linker, this.option = function (t) {
                        for (var r = t.length, a = [], i = 0; i < r; i++) /[A-Za-z0-9]+\./.test(t[i].part_url) && "[object Boolean]" == Object.prototype.toString.call(t[i].after_hash) ? a.push(t[i]) : e.log("linker \u914d\u7f6e\u7684\u7b2c " + (i + 1) + " \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");
                        return a
                    }(this.option)) : e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")
                }
            };
            return t.isObject(window.SensorsDataWebJSSDKPlugin) ? window.SensorsDataWebJSSDKPlugin.SiteLinker = window.SensorsDataWebJSSDKPlugin.SiteLinker || e : window.SensorsDataWebJSSDKPlugin = {SiteLinker: e}, e
        }(), "string" != typeof window.sensorsDataAnalytic201505) return "undefined" == typeof window.sensorsDataAnalytic201505 ? (window.sensorsDataAnalytic201505 = e, e) : window.sensorsDataAnalytic201505;
        e.setPreConfig(window[sensorsDataAnalytic201505]), window[sensorsDataAnalytic201505] = e, window.sensorsDataAnalytic201505 = e, e.init()
    } catch (O) {
        if ("object" == typeof console && console.log) try {
            console.log(O)
        } catch (D) {
            e.log(D)
        }
    }
    var p, d, f, _, g, h, v, y, S, w, b, k, j, P
});
