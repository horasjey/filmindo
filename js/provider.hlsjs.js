(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([
    [98], {
        8377: function (t, e, i) {
            "use strict";
            i.d(e, {
                M: function () {
                    return r
                },
                _: function () {
                    return n
                }
            });
            var r = function (t, e) {
                    var i = t.kind || "cc";
                    return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
                },
                n = function (t, e) {
                    var i = t.label || t.name || t.language;
                    return i || (i = "Unknown CC", (e += 1) > 1 && (i += " [" + e + "]")), {
                        label: i,
                        unknownCount: e
                    }
                }
        },
        6103: function (t, e, i) {
            "use strict";
            i.d(e, {
                VS: function () {
                    return v
                },
                xl: function () {
                    return f
                }
            });
            var r = i(7477),
                n = i(2894),
                a = i(6886),
                s = i(7941),
                o = i(7387),
                l = i(2957),
                u = i(4446),
                h = function (t) {
                    throw new u.rG(null, t)
                };
            var d = function (t) {
                    return t.map((function (t) {
                        return new r.Z(t.begin, t.end, t.text)
                    }))
                },
                c = function (t, e, r, a) {
                    var c, f, v = t.responseXML ? t.responseXML.firstChild : null;
                    if (v)
                        for ("xml" === (0, s.r1)(v) && (v = v.nextSibling); v && v.nodeType === v.COMMENT_NODE;) v = v.nextSibling;
                    try {
                        if (v && "tt" === (0, s.r1)(v)) {
                            if (!t.responseXML) throw new Error("Empty XML response");
                            c = function (t) {
                                t || h(306007);
                                var e = [],
                                    i = t.getElementsByTagName("p"),
                                    r = 30,
                                    n = t.getElementsByTagName("tt");
                                if (n && n[0]) {
                                    var a = parseFloat(n[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(a) || (r = a)
                                }
                                i || h(306005), i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
                                for (var s = 0; s < i.length; s++) {
                                    for (var o = i[s], u = o.getElementsByTagName("br"), d = 0; d < u.length; d++) {
                                        var c = u[d];
                                        c && c.parentNode && c.parentNode.replaceChild(t.createTextNode("\r\n"), c)
                                    }
                                    var f = o.innerHTML || o.textContent || o.text || "",
                                        v = (0, l.fy)(f).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (v) {
                                        var g = o.getAttribute("begin") || "",
                                            p = o.getAttribute("dur") || "",
                                            m = o.getAttribute("end") || "",
                                            T = {
                                                begin: (0, l.m9)(g, r),
                                                text: v
                                            };
                                        m ? T.end = (0, l.m9)(m, r) : p && (T.end = (T.begin || 0) + (0, l.m9)(p, r)), e.push(T)
                                    }
                                }
                                return e.length || h(306005), e
                            }(t.responseXML), f = d(c), delete e.xhr, r(f)
                        } else {
                            var g = t.responseText;
                            g.indexOf("WEBVTT") >= 0 ? i.e(347).then(function (t) {
                                return i(2776).default
                            }.bind(null, i)).catch((0, n.Jt)(301131)).then((function (t) {
                                var i = new t(window);
                                f = [], i.oncue = function (t) {
                                    f.push(t)
                                }, i.onflush = function () {
                                    delete e.xhr, r(f)
                                }, i.parse(g)
                            })).catch((function (t) {
                                delete e.xhr, a((0, u.Mm)(null, u.Y7, t))
                            })) : (c = (0, o.Z)(g), f = d(c), delete e.xhr, r(f))
                        }
                    } catch (t) {
                        delete e.xhr, a((0, u.Mm)(null, u.Y7, t))
                    }
                },
                f = function (t, e, i) {
                    t.xhr = (0, a.h)(t.file, (function (r) {
                        c(r, t, e, i)
                    }), (function (t, e, r, n) {
                        i((0, u.l9)(n, u.Y7))
                    }))
                },
                v = function (t) {
                    t && t.forEach((function (t) {
                        var e = t.xhr;
                        e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
                    }))
                }
        },
        7387: function (t, e, i) {
            "use strict";
            i.d(e, {
                Z: function () {
                    return a
                }
            });
            var r = i(2957),
                n = function (t) {
                    var e = {},
                        i = t.split("\r\n");
                    1 === i.length && (i = t.split("\n"));
                    var n = 1;
                    if (i[0].indexOf(" --> ") > 0 && (n = 0), i.length > n + 1 && i[n + 1]) {
                        var a = i[n],
                            s = a.indexOf(" --> ");
                        s > 0 && (e.begin = (0, r.m9)(a.substr(0, s)), e.end = (0, r.m9)(a.substr(s + 5)), e.text = i.slice(n + 1).join("\r\n"))
                    }
                    return e
                };
            function a(t) {
                var e = [],
                    i = (t = (0, r.fy)(t)).split("\r\n\r\n");
                1 === i.length && (i = t.split("\n\n"));
                for (var a = 0; a < i.length; a++)
                    if ("WEBVTT" !== i[a]) {
                        var s = n(i[a]);
                        s.text && e.push(s)
                    } return e
            }
        },
        7477: function (t, e) {
            "use strict";
            var i = window.VTTCue,
                r = function (t) {
                    if ("string" != typeof t) return !1;
                    return !!{
                        start: !0,
                        middle: !0,
                        end: !0,
                        left: !0,
                        right: !0
                    } [t.toLowerCase()] && t.toLowerCase()
                };
            if (!i) {
                var n = "auto";
                (i = function (t, e, i) {
                    var a = this;
                    a.hasBeenReset = !1;
                    var s = "",
                        o = !1,
                        l = t,
                        u = e,
                        h = i,
                        d = null,
                        c = "",
                        f = !0,
                        v = n,
                        g = "start",
                        p = n,
                        m = 100,
                        T = "middle";
                    Object.defineProperty(a, "id", {
                        enumerable: !0,
                        get: function () {
                            return s
                        },
                        set: function (t) {
                            s = "" + t
                        }
                    }), Object.defineProperty(a, "pauseOnExit", {
                        enumerable: !0,
                        get: function () {
                            return o
                        },
                        set: function (t) {
                            o = Boolean(t)
                        }
                    }), Object.defineProperty(a, "startTime", {
                        enumerable: !0,
                        get: function () {
                            return l
                        },
                        set: function (t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "endTime", {
                        enumerable: !0,
                        get: function () {
                            return u
                        },
                        set: function (t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            u = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "text", {
                        enumerable: !0,
                        get: function () {
                            return h
                        },
                        set: function (t) {
                            h = "" + t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "region", {
                        enumerable: !0,
                        get: function () {
                            return d
                        },
                        set: function (t) {
                            d = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "vertical", {
                        enumerable: !0,
                        get: function () {
                            return c
                        },
                        set: function (t) {
                            var e = function (t) {
                                return "string" == typeof t && (!!{
                                    "": !0,
                                    lr: !0,
                                    rl: !0
                                } [t.toLowerCase()] && t.toLowerCase())
                            }(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            c = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "snapToLines", {
                        enumerable: !0,
                        get: function () {
                            return f
                        },
                        set: function (t) {
                            f = Boolean(t), this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "line", {
                        enumerable: !0,
                        get: function () {
                            return v
                        },
                        set: function (t) {
                            if ("number" != typeof t && t !== n) throw new SyntaxError("An invalid number or illegal string was specified.");
                            v = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "lineAlign", {
                        enumerable: !0,
                        get: function () {
                            return g
                        },
                        set: function (t) {
                            var e = r(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "position", {
                        enumerable: !0,
                        get: function () {
                            return p
                        },
                        set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            p = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "size", {
                        enumerable: !0,
                        get: function () {
                            return m
                        },
                        set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "align", {
                        enumerable: !0,
                        get: function () {
                            return T
                        },
                        set: function (t) {
                            var e = r(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = e, this.hasBeenReset = !0
                        }
                    }), a.displayState = void 0
                }).prototype.getCueAsHTML = function () {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            e.Z = i
        },
        2728: function (t, e, i) {
            "use strict";
            i.d(e, {
                Z: function () {
                    return a
                }
            });
            var r = i(1643),
                n = i(6042);
            function a(t, e) {
                var i, a = e;
                return {
                    start: function () {
                        this.stop(), i = window.setInterval((function () {
                            var e = t.getBandwidthEstimate();
                            (0, n.qh)(e) && (a = e, t.trigger(r.qG, {
                                bandwidthEstimate: a
                            }))
                        }), 1e3)
                    },
                    stop: function () {
                        clearInterval(i)
                    },
                    getEstimate: function () {
                        return a
                    }
                }
            }
        },
        548: function (t, e, i) {
            "use strict";
            i.d(e, {
                Zv: function () {
                    return r
                },
                i0: function () {
                    return a
                },
                pR: function () {
                    return n
                }
            });
            var r = 1,
                n = r + 1,
                a = 25
        },
        4506: function (t, e, i) {
            "use strict";
            i.d(e, {
                Z: function () {
                    return r
                }
            });
            var r = function (t) {
                return {
                    bitrate: t.bitrate,
                    label: t.label,
                    width: t.width,
                    height: t.height
                }
            }
        },
        3328: function (t, e, i) {
            "use strict";
            i.d(e, {
                Z: function () {
                    return S
                }
            });
            var r = i(6103),
                n = i(8377),
                a = {
                    TIT2: "title",
                    TT2: "title",
                    WXXX: "url",
                    TPE1: "artist",
                    TP1: "artist",
                    TALB: "album",
                    TAL: "album"
                },
                s = function (t, e) {
                    for (var i, r, n, a = t.length, s = "", o = e || 0; o < a;)
                        if (0 !== (i = t[o++]) && 3 !== i) switch (i >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            s += String.fromCharCode(i);
                            break;
                        case 12:
                        case 13:
                            r = t[o++], s += String.fromCharCode((31 & i) << 6 | 63 & r);
                            break;
                        case 14:
                            r = t[o++], n = t[o++], s += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | (63 & n) << 0)
                        }
                    return s
                },
                o = function (t) {
                    var e = function (t) {
                        for (var e = "0x", i = 0; i < t.length; i++) t[i] < 16 && (e += "0"), e += t[i].toString(16);
                        return parseInt(e, 16)
                    }(t);
                    return 127 & e | (32512 & e) >> 1 | (8323072 & e) >> 2 | (2130706432 & e) >> 3
                },
                l = function (t) {
                    var e = {};
                    if (!("value" in t) && "data" in t && t.data instanceof ArrayBuffer) {
                        var i = new Uint8Array(t.data),
                            r = i.length;
                        t = {
                            value: {
                                key: "",
                                data: ""
                            }
                        };
                        for (var n = 10; n < 14 && n < i.length && 0 !== i[n];) t.value.key += String.fromCharCode(i[n]), n++;
                        var l = 19,
                            u = i[l];
                        3 !== u && 0 !== u || (u = i[++l], r--);
                        var h = 0;
                        if (1 !== u && 2 !== u)
                            for (var d = l + 1; d < r; d++)
                                if (0 === i[d]) {
                                    h = d - l;
                                    break
                                } if (h > 0) {
                            var c = s(i.subarray(l, l += h), 0);
                            if ("PRIV" === t.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === c) {
                                    var f = 1 & o(i.subarray(l, l += 4)),
                                        v = o(i.subarray(l, l += 4)) + (f ? 4294967296 : 0);
                                    t.value.data = v
                                } else t.value.data = s(i, l + 1);
                                t.value.info = c
                            } else t.value.info = c, t.value.data = s(i, l + 1)
                        } else {
                            var g = i[l];
                            t.value.data = 1 === g || 2 === g ? function (t, e) {
                                for (var i = t.length - 1, r = "", n = e || 0; n < i;) 254 === t[n] && 255 === t[n + 1] || (r += String.fromCharCode((t[n] << 8) + t[n + 1])), n += 2;
                                return r
                            }(i, l + 1) : s(i, l + 1)
                        }
                    }
                    if (function (t, e) {
                            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                            return Object.prototype.hasOwnProperty.call(Object(t), e)
                        }(a, t.value.key) && (e[a[t.value.key]] = t.value.data), t.value.info) {
                        var p = e[t.value.key];
                        p !== Object(p) && (p = {}, e[t.value.key] = p), p[t.value.info] = t.value.data
                    } else e[t.value.key] = t.value.data;
                    return e
                },
                u = i(8348),
                h = i(1643),
                d = i(6042),
                c = function (t, e, i) {
                    e && e.length && (0, d.S6)(e, (function (e) {
                        var r = e._id || "";
                        if (i && (e._id = void 0), !u.Browser.ie && !u.Browser.safari || !t || !/^(native|subtitle|cc)/.test(r)) {
                            if (u.Browser.ie && "disabled" === e.mode || (e.mode = "disabled", e.mode = "hidden"), e.cues)
                                for (var n = e.cues.length; n--;) e.removeCue(e.cues[n]);
                            e.embedded || (e.mode = "disabled"), e.inuse = !1
                        }
                    }))
                },
                f = function (t) {
                    return /^native(?:captions|subtitles)/.test(t)
                },
                v = function (t) {
                    return "captions" === t || "subtitles" === t
                },
                g = function (t) {
                    var e = t.target,
                        i = e.activeCues,
                        r = e.cues,
                        n = e._id,
                        a = this._cues,
                        s = this._activeCues;
                    if (r && r.length) {
                        var o = a[n];
                        a[n] = Array.prototype.slice.call(r), this.parseNativeID3Cues(r, o)
                    } else delete a[n];
                    if (i && i.length) {
                        var l = s[n],
                            u = s[n] = Array.prototype.slice.call(i);
                        this.triggerActiveCues(u, l)
                    } else delete s[n]
                },
                p = function (t, e, i) {
                    if (u.Browser.ie) {
                        var r = i;
                        (t || "metadata" === e.kind) && (r = new window.TextTrackCue(i.startTime, i.endTime, i.text), i.value && (r.value = i.value)),
                        function (t, e) {
                            var i = [],
                                r = t.mode;
                            t.mode = "hidden";
                            var n = t.cues;
                            if (n)
                                for (var a = n.length - 1; a >= 0 && n[a].startTime > e.startTime; a--) i.unshift(n[a]), t.removeCue(n[a]);
                            try {
                                t.addCue(e), i.forEach((function (e) {
                                    return t.addCue(e)
                                }))
                            } catch (t) {
                                console.error(t)
                            }
                            t.mode = r
                        }(e, r)
                    } else try {
                        e.addCue(i)
                    } catch (t) {
                        console.error(t)
                    }
                },
                m = function (t) {
                    var e = this._textTracks,
                        i = this._tracksById;
                    if (t.length > e.length) return !0;
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (!n._id || !i[n._id]) return !0
                    }
                    return !1
                },
                T = function () {
                    var t = this.video.textTracks,
                        e = (0, d.hX)(t, (function (t) {
                            return (t.inuse || !t._id) && v(t.kind)
                        }));
                    if (this._textTracks && !m.call(this, e)) {
                        for (var i = -1, r = 0; r < this._textTracks.length; r++)
                            if ("showing" === this._textTracks[r].mode) {
                                i = r;
                                break
                            } i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1)
                    } else this.setTextTracks(t)
                },
                y = function (t) {
                    var e = t.track;
                    e && e._id || this.setTextTracks(this.video.textTracks)
                },
                b = function (t, e) {
                    return t.startTime === e.startTime && t.endTime === e.endTime && t.text === e.text && t.data === e.data && JSON.stringify(t.value) === JSON.stringify(e.value)
                },
                E = function (t) {
                    var e = l(t);
                    return {
                        metadataType: "id3",
                        metadataTime: t.startTime,
                        metadata: e
                    }
                },
                S = {
                    _itemTracks: null,
                    _textTracks: null,
                    _currentTextTrackIndex: -1,
                    _tracksById: null,
                    _cuesByTrackId: null,
                    _cachedVTTCues: null,
                    _metaCuesByTextTime: null,
                    _unknownCount: 0,
                    _activeCues: null,
                    _cues: null,
                    textTrackChangeHandler: null,
                    addTrackHandler: null,
                    cueChangeHandler: null,
                    renderNatively: !1,
                    _initTextTracks: function () {
                        this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._cues = {}, this._activeCues = {}, this._unknownCount = 0
                    },
                    addTracksListener: function (t, e, i) {
                        t && (this.removeTracksListener(t, e, i), this.instreamMode || (t.addEventListener ? t.addEventListener(e, i) : t["on" + e] = i))
                    },
                    removeTracksListener: function (t, e, i) {
                        t && (t.removeEventListener && i ? t.removeEventListener(e, i) : t["on" + e] = null)
                    },
                    clearTracks: function () {
                        var t = this;
                        (0, r.VS)(this._itemTracks);
                        var e = this._tracksById;
                        if (e && Object.keys(e).forEach((function (i) {
                                if (0 === i.indexOf("nativemetadata")) {
                                    var r = e[i];
                                    t.cueChangeHandler && r.removeEventListener("cuechange", t.cueChangeHandler), c(t.renderNatively, [r], !0)
                                }
                            })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                            var i = this.video.textTracks;
                            this.textTrackChangeHandler && this.removeTracksListener(i, "change", this.textTrackChangeHandler), c(this.renderNatively, i, !0)
                        }
                    },
                    clearMetaCues: function () {
                        var t = this,
                            e = this._tracksById,
                            i = this._cachedVTTCues;
                        e && i && Object.keys(e).forEach((function (r) {
                            if (0 === r.indexOf("nativemetadata")) {
                                var n = e[r];
                                c(t.renderNatively, [n], !1), n.mode = "hidden", n.inuse = !0, n._id && (i[n._id] = {})
                            }
                        }))
                    },
                    clearCueData: function (t) {
                        var e = this._cachedVTTCues;
                        e && e[t] && (e[t] = {}, this._tracksById && (this._tracksById[t].data = []))
                    },
                    disableTextTrack: function () {
                        var t = this.getCurrentTextTrack();
                        if (t) {
                            t.mode = "disabled";
                            var e = t._id;
                            (e && f(e) || this.renderNatively && u.OS.iOS) && (t.mode = "hidden")
                        }
                    },
                    enableTextTrack: function () {
                        var t = this.getCurrentTextTrack();
                        t && (t.mode = "showing")
                    },
                    getCurrentTextTrack: function () {
                        if (this._textTracks) return this._textTracks[this._currentTextTrackIndex]
                    },
                    getSubtitlesTrack: function () {
                        return this._currentTextTrackIndex
                    },
                    addTextTracks: function (t) {
                        var e = this,
                            i = [];
                        return t ? (this._textTracks || this._initTextTracks(), t.forEach((function (t) {
                            if (!(t.includedInManifest || t.kind && !v(t.kind))) {
                                var n = e._createTrack(t);
                                e._addTrackToList(n), i.push(n), t.file && (t.data = [], (0, r.xl)(t, (function (t) {
                                    n.sideloaded = !0, e.addVTTCuesToTrack(n, t)
                                }), (function (t) {
                                    e.trigger(h.cM, t)
                                })))
                            }
                        })), this._textTracks && this._textTracks.length && this.trigger(h.jt, {
                            tracks: this._textTracks
                        }), i) : i
                    },
                    setTextTracks: function (t) {
                        var e = this;
                        if (this._currentTextTrackIndex = -1, t) {
                            if (this._textTracks) {
                                var i = this._tracksById;
                                this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((function (t) {
                                    var r = t._id;
                                    return e.renderNatively && r && f(r) ? (delete i[r], !1) : (t.name && 0 === t.name.indexOf("Unknown") && e._unknownCount++, 0 === r.indexOf("nativemetadata") && "com.apple.streaming" === t.inBandMetadataTrackDispatchType && delete i[r], !0)
                                }), this)
                            } else this._initTextTracks();
                            if (t.length)
                                for (var r = 0, a = t.length, s = this._tracksById, o = this._cuesByTrackId; r < a; r++) {
                                    var l = t[r],
                                        u = l._id || "";
                                    if (!u) {
                                        if (!1 === l.inuse && v(l.kind) && this.renderNatively) {
                                            l._id = "native" + l.kind + r;
                                            continue
                                        }
                                        if (v(l.kind) || "metadata" === l.kind) {
                                            if (u = l._id = "native" + l.kind + r, !l.label && "captions" === l.kind) {
                                                var d = (0, n._)(l, this._unknownCount);
                                                l.name = d.label, this._unknownCount = d.unknownCount
                                            }
                                        } else u = l._id = (0, n.M)(l, this._textTracks ? this._textTracks.length : 0);
                                        if (s[u]) continue;
                                        l.inuse = !0
                                    }
                                    if (l.inuse && !s[u])
                                        if ("metadata" === l.kind) {
                                            l.mode = "hidden";
                                            var c = this.cueChangeHandler = this.cueChangeHandler || g.bind(this);
                                            l.removeEventListener("cuechange", c), l.addEventListener("cuechange", c), s[u] = l
                                        } else if (v(l.kind)) {
                                        var m = l.mode,
                                            T = void 0;
                                        if (l.mode = "hidden", (!l.cues || !l.cues.length) && l.embedded) continue;
                                        if (("disabled" !== m || f(u)) && (l.mode = m), o[u] && !o[u].loaded) {
                                            for (var y = o[u].cues; T = y.shift();) p(this.renderNatively, l, T);
                                            l.mode = m, o[u].loaded = !0
                                        }
                                        this._addTrackToList(l)
                                    }
                                }
                            this.renderNatively && this.addTrackListeners(t), this._textTracks && this._textTracks.length && this.trigger(h.jt, {
                                tracks: this._textTracks
                            })
                        }
                    },
                    addTrackListeners: function (t) {
                        var e = this.textTrackChangeHandler = this.textTrackChangeHandler || T.bind(this);
                        this.removeTracksListener(t, "change", e), this.addTracksListener(t, "change", e), (u.Browser.edge && u.Browser.ie || u.Browser.firefox) && (e = this.addTrackHandler = this.addTrackHandler || y.bind(this), this.removeTracksListener(t, "addtrack", e), this.addTracksListener(t, "addtrack", e))
                    },
                    setupSideloadedTracks: function (t) {
                        if (this.renderNatively) {
                            var e = (t = t || null) === this._itemTracks;
                            e || (0, r.VS)(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(t)))
                        }
                    },
                    setSubtitlesTrack: function (t) {
                        if (this.renderNatively) {
                            if (this._textTracks && (0 === t && this._textTracks.forEach((function (t) {
                                    t.mode = t.embedded ? "hidden" : "disabled"
                                })), this._currentTextTrackIndex !== t - 1)) {
                                this.disableTextTrack(), this._currentTextTrackIndex = t - 1;
                                var e = this.getCurrentTextTrack();
                                e && (e.mode = "showing"), this.trigger(h.UF, {
                                    currentTrack: this._currentTextTrackIndex + 1,
                                    tracks: this._textTracks
                                })
                            }
                        } else this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(t - 1)
                    },
                    createCue: function (t, e, i) {
                        return new(window.VTTCue || window.TextTrackCue)(t, Math.max(e || 0, t + .25), i)
                    },
                    addVTTCue: function (t, e) {
                        this._tracksById || this._initTextTracks();
                        var i = t.track ? t.track : "native" + t.type,
                            r = this._tracksById[i],
                            n = "captions" === t.type ? "Unknown CC" : "ID3 Metadata",
                            a = t.cue;
                        if (!r) {
                            var s = {
                                kind: t.type,
                                _id: i,
                                label: n,
                                default: !1
                            };
                            this.renderNatively || "metadata" === s.kind ? ((r = this._createTrack(s)).embedded = !0, this.setTextTracks(this.video.textTracks)) : r = this.addTextTracks([s])[0]
                        }
                        if (this._cacheVTTCue(r, a, e)) {
                            var o = this.renderNatively || "metadata" === r.kind;
                            return o ? p(o, r, a) : r.data.push(a), a
                        }
                        return null
                    },
                    addVTTCuesToTrack: function (t, e) {
                        if (this.renderNatively) {
                            var i, r = t._id,
                                n = this._tracksById,
                                a = this._cuesByTrackId,
                                s = n[r];
                            if (!s) return a || (a = this._cuesByTrackId = {}), void(a[r] = {
                                cues: e,
                                loaded: !1
                            });
                            if (!a[r] || !a[r].loaded)
                                for (a[r] = {
                                        cues: e,
                                        loaded: !0
                                    }; i = e.shift();) p(this.renderNatively, s, i)
                        }
                    },
                    parseNativeID3Cues: function (t, e) {
                        var i = this,
                            r = t[t.length - 1];
                        if (!e || e.length !== t.length || !r._parsed && !b(e[e.length - 1], r)) {
                            for (var n = [], a = [], s = -1, o = -1, l = -1, u = 0; u < t.length; u++) {
                                var d = t[u];
                                if (!d._extended && Boolean(d.data || d.value)) {
                                    if (d.startTime !== o || null === d.endTime) {
                                        l = o, o = d.startTime;
                                        var c = n[s];
                                        if (n[++s] = [], a[s] = [], c && o - l > 0)
                                            for (var f = 0; f < c.length; f++) {
                                                var v = c[f];
                                                v.endTime = o, v._extended = !0
                                            }
                                    }
                                    n[s].push(d), d._parsed || (a[s].push(d), d.endTime - o < .25 && (d.endTime = o + .25), d._parsed = !0)
                                }
                            }
                            for (var g = 0; g < a.length; g++) a[g].length && a[g].forEach((function (t) {
                                var e = E(t);
                                i.trigger(h.O1, e)
                            }))
                        }
                    },
                    triggerActiveCues: function (t, e) {
                        var i = this,
                            r = t.filter((function (t) {
                                if (e && e.some((function (e) {
                                        return b(t, e)
                                    }))) return !1;
                                if (t.data) return !0;
                                var r = t.text ? function (t) {
                                    var e;
                                    try {
                                        e = JSON.parse(t.text)
                                    } catch (t) {
                                        return null
                                    }
                                    var i = {
                                        metadataType: e.metadataType,
                                        metadataTime: t.startTime,
                                        metadata: e
                                    };
                                    return e.programDateTime && (i.programDateTime = e.programDateTime), i
                                }(t) : null;
                                if (r) "emsg" === r.metadataType && (r.metadata = r.metadata || {}, r.metadata.messageData = t.value), i.trigger(h.rx, r);
                                else if (t.value) return !0;
                                return !1
                            }));
                        r.length && r.forEach((function (t) {
                            var e = E(t);
                            i.trigger(h.rx, e)
                        }))
                    },
                    ensureMetaTracksActive: function () {
                        for (var t = this.video.textTracks, e = t.length, i = 0; i < e; i++) {
                            var r = t[i];
                            "metadata" === r.kind && "disabled" === r.mode && (r.mode = "hidden")
                        }
                    },
                    _cacheVTTCue: function (t, e, i) {
                        var r = t.kind,
                            n = t._id,
                            a = this._cachedVTTCues;
                        a[n] || (a[n] = {});
                        var s, o = a[n];
                        switch (r) {
                        case "captions":
                        case "subtitles":
                            s = i || Math.floor(20 * e.startTime);
                            var l = "_" + (e.line || "auto"),
                                u = Math.floor(20 * e.endTime),
                                h = o[s + l] || o[s + 1 + l] || o[s - 1 + l];
                            return !(h && Math.abs(h - u) <= 1) && (o[s + l] = u, !0);
                        case "metadata":
                            var d = e.data ? new Uint8Array(e.data).join("") : e.text;
                            return !o[s = i || e.startTime + d] && (o[s] = e.endTime, !0);
                        default:
                            return !1
                        }
                    },
                    _addTrackToList: function (t) {
                        this._textTracks.push(t), this._tracksById[t._id] = t
                    },
                    _createTrack: function (t) {
                        var e, i = (0, n._)(t, this._unknownCount),
                            r = i.label;
                        if (this._unknownCount = i.unknownCount, this.renderNatively || "metadata" === t.kind) {
                            var a = this.video.textTracks;
                            (e = (0, d._e)(a, {
                                label: r
                            })) || (e = this.video.addTextTrack(t.kind, r, t.language || "")), e.default = t.default, e.mode = "disabled", e.inuse = !0
                        } else(e = t).data = e.data || [];
                        return e._id || (e._id = (0, n.M)(t, this._textTracks ? this._textTracks.length : 0)), e
                    },
                    _clearSideloadedTextTracks: function () {
                        if (this._textTracks) {
                            var t = this._textTracks.filter((function (t) {
                                return t.embedded || "subs" === t.groupid
                            }));
                            this._initTextTracks();
                            var e = this._tracksById;
                            t.forEach((function (t) {
                                e[t._id] = t
                            })), this._textTracks = t
                        }
                    }
                }
        },
        9601: function (t, e, i) {
            "use strict";
            i.d(e, {
                E: function () {
                    return n
                },
                Z: function () {
                    return a
                }
            });
            var r = i(4446),
                n = function (t) {
                    return t >= 400 && t < 600 ? t : 6
                };
            function a(t, e, i) {
                var a = t + 1e3,
                    s = r.ul;
                return e > 0 ? (403 === e && (s = r.H4), a += n(e)) : "http:" === ("" + i).substring(0, 5) && "https:" === document.location.protocol ? a += 12 : 0 === e && (a += 11), {
                    code: a,
                    key: s
                }
            }
        },
        5099: function (t, e, i) {
            "use strict";
            i.d(e, {
                Z: function () {
                    return n
                }
            });
            var r = function (t, e, i) {
                var r = new Error(i);
                return r.name = t, r.code = e, r
            };
            function n(t) {
                return new Promise((function (e, i) {
                    if (t.paused) return i(r("NotAllowedError", 0, "play() failed."));
                    var n, a = function (t) {
                            if (n(), "playing" !== t.type) {
                                var a = 'The play() request was interrupted by a "' + t.type + '" event.';
                                return "error" === t.type ? i(r("NotSupportedError", 9, a)) : i(r("AbortError", 20, a))
                            }
                            e()
                        },
                        s = function () {
                            t.addEventListener("playing", a), t.addEventListener("abort", a), t.addEventListener("error", a), t.addEventListener("pause", a)
                        };
                    n = function () {
                        t.removeEventListener("play", s), t.removeEventListener("playing", a), t.removeEventListener("pause", a), t.removeEventListener("abort", a), t.removeEventListener("error", a)
                    }, t.addEventListener("play", s)
                }))
            }
        },
        5256: function (t, e, i) {
            "use strict";
            i.d(e, {
                _T: function () {
                    return r
                },
                c3: function () {
                    return o
                },
                ji: function () {
                    return a
                },
                s_: function () {
                    return l
                }
            });
            var r = function (t) {
                    return Math.floor(t / 1e3)
                },
                n = function (t, e) {
                    var i = null;
                    if (e && t) {
                        var n = Object.keys(t);
                        if (n.length) {
                            var a = function (t, e) {
                                var i, r = null,
                                    n = 1 / 0;
                                return t.forEach((function (t) {
                                    (i = Math.abs(parseFloat(t) - e)) < n && (r = t, n = i)
                                })), r
                            }(n, r(e));
                            a && (i = t[a])
                        }
                    }
                    return i
                },
                a = function (t, e, i) {
                    if (!t) return "";
                    var a = t.bitrate || t.bandwidth;
                    return n(e, a) || t.label || function (t, e, i) {
                        if (!t && !e) return "";
                        var n = "",
                            a = "";
                        return e && (n = a = r(e) + " kbps"), t && (n = t + "p", e && i && (n += " (" + a + ")")), n
                    }(t.height, a, i)
                },
                s = function (t, e) {
                    return t.some((function (t) {
                        for (var i, r = 0; r < e.length && !(i = t[e[r]]); r++);
                        if (!i) return !1;
                        var n = this[i] || !1;
                        return this[i] = !0, n
                    }), {})
                },
                o = function (t) {
                    return !!Array.isArray(t) && s(t, ["height", "bitrate", "bandwidth"])
                },
                l = function (t) {
                    return !!Array.isArray(t) && s(t, ["label"])
                }
        },
        686: function (t, e, i) {
            "use strict";
            i.d(e, {
                s: function () {
                    return n
                },
                v: function () {
                    return a
                }
            });
            var r = function (t) {
                    return void 0 === t ? 120 : Math.max(t, 0)
                },
                n = function (t, e) {
                    return t !== 1 / 0 && Math.abs(t) >= Math.max(r(e), 0)
                },
                a = function (t, e) {
                    var i = "VOD";
                    return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = n(t, r(e)) ? "DVR" : "LIVE"), i
                }
        },
        3949: function (t, e, i) {
            "use strict";
            var r = i(8348),
                n = i(974),
                a = i(9974),
                s = {
                    container: null,
                    volume: function (t) {
                        this.video.volume = Math.min(Math.max(0, t / 100), 1)
                    },
                    mute: function (t) {
                        this.video.muted = Boolean(t), this.video.muted || this.video.removeAttribute("muted")
                    },
                    resize: function (t, e, i) {
                        var a = this.video,
                            s = a.videoWidth,
                            o = a.videoHeight;
                        if (t && e && s && o) {
                            var l = {
                                    objectFit: "",
                                    width: "",
                                    height: ""
                                },
                                u = t / e,
                                h = s / o;
                            if ("uniform" === i)(u > h ? t - t / (u / h) : e - e / (h / u)) < 6 && (l.objectFit = "fill", i = "exactfit");
                            if (r.Browser.ie || r.OS.iOS && (r.OS.version.major || 0) < 9 || r.Browser.androidNative)
                                if ("uniform" !== i) {
                                    l.objectFit = "contain";
                                    var d = 1,
                                        c = 1;
                                    "none" === i ? d = c = u > h ? Math.ceil(100 * o / e) / 100 : Math.ceil(100 * s / t) / 100 : "fill" === i ? d = c = u > h ? u / h : h / u : "exactfit" === i && (u > h ? (d = u / h, c = 1) : (d = 1, c = h / u)), (0, n.vs)(a, "matrix(" + d.toFixed(2) + ", 0, 0, " + c.toFixed(2) + ", 0, 0)")
                                } else l.top = l.left = l.margin = "", (0, n.vs)(a, "");
                            (0, n.oB)(a, l)
                        }
                    },
                    getContainer: function () {
                        return this.container
                    },
                    setContainer: function (t) {
                        this.container = t, this.video.parentNode !== t && t.appendChild(this.video)
                    },
                    removeFromContainer: function () {
                        var t = this.container,
                            e = this.video;
                        this.container = null, t && t === e.parentNode && t.removeChild(e)
                    },
                    remove: function () {
                        this.stop(), this.destroy(), this.removeFromContainer()
                    },
                    atEdgeOfLiveStream: function () {
                        if (!this.isLive()) return !1;
                        return (0, a.Z)(this.video.buffered) - this.video.currentTime <= 2
                    }
                };
            e.Z = s
        },
        186: function (t, e) {
            "use strict";
            e.Z = {
                eventsOn_: function () {},
                eventsOff_: function () {},
                attachMedia: function () {
                    this.eventsOn_()
                },
                detachMedia: function () {
                    return this.eventsOff_()
                }
            }
        },
        8702: function (t, e, i) {
            "use strict";
            var r = i(1643),
                n = i(1261),
                a = {
                    canplay: function () {
                        this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(r.Jl)
                    },
                    play: function () {
                        this.stallTime = -1, this.video.paused || this.state === r._5 || this.state === r.r0 || this.setState(r.ik)
                    },
                    loadedmetadata: function () {
                        var t = {
                                metadataType: "media",
                                duration: this.getDuration(),
                                height: this.video.videoHeight,
                                width: this.video.videoWidth,
                                seekRange: this.getSeekRange()
                            },
                            e = this.drmUsed;
                        e && (t.drm = e), this.trigger(r.rx, t)
                    },
                    timeupdate: function () {
                        var t = this.video.currentTime,
                            e = this.getCurrentTime(),
                            i = this.getDuration();
                        if (!isNaN(i)) {
                            this.seeking || this.video.paused || this.state !== r.nQ && this.state !== r.ik || this.stallTime === t || (this.stallTime = -1, this.setState(r.r0), this.trigger(r.Gj));
                            var n = {
                                    position: e,
                                    duration: i,
                                    currentTime: t,
                                    seekRange: this.getSeekRange(),
                                    metadata: {
                                        currentTime: t
                                    }
                                },
                                a = this.getLiveLatency();
                            if (null !== a && (n.latency = a, this.getTargetLatency)) {
                                var s = this.getTargetLatency();
                                null !== s && (n.targetLatency = s)
                            }(this.state === r.r0 || this.seeking && this.state !== r.bc) && this.trigger(r.R2, n)
                        }
                    },
                    click: function (t) {
                        this.trigger(r.ot, t)
                    },
                    volumechange: function () {
                        var t = this.video;
                        this.trigger(r.yH, {
                            volume: Math.round(100 * t.volume)
                        }), this.trigger(r.gy, {
                            mute: t.muted
                        })
                    },
                    seeking: function () {
                        if (this.state === r.ik) {
                            var t = this.video.buffered.length ? this.video.buffered.start(0) : -1;
                            if (this.video.currentTime === t) return
                        } else if (this.state === r.bc) return;
                        this.seeking = !0
                    },
                    seeked: function () {
                        this.seeking && (this.seeking = !1, this.trigger(r.aQ))
                    },
                    playing: function () {
                        -1 === this.stallTime && this.setState(r.r0), this.trigger(r.Gj)
                    },
                    pause: function () {
                        this.state !== r.xQ && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(r._5))
                    },
                    progress: function () {
                        var t = this.getDuration();
                        if (!(t <= 0 || t === 1 / 0)) {
                            var e = this.video.buffered;
                            if (e && 0 !== e.length) {
                                var i = (0, n.v)(e.end(e.length - 1) / t, 0, 1);
                                this.trigger(r.uT, {
                                    bufferPercent: 100 * i,
                                    position: this.getCurrentTime(),
                                    duration: t,
                                    currentTime: this.video.currentTime,
                                    seekRange: this.getSeekRange()
                                })
                            }
                        }
                    },
                    ratechange: function () {
                        this.trigger(r.TJ, {
                            playbackRate: this.video.playbackRate
                        })
                    },
                    ended: function () {
                        this.state !== r.bc && this.state !== r.xQ && this.trigger(r.Ms)
                    }
                };
            e.Z = a
        },
        9974: function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.length ? t.end(t.length - 1) : 0
            }
            i.d(e, {
                Z: function () {
                    return r
                }
            })
        },
        9054: function (t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function () {
                    return St
                }
            });
            var r = {};
            i.r(r), i.d(r, {
                debug: function () {
                    return y
                },
                error: function () {
                    return L
                },
                info: function () {
                    return E
                },
                log: function () {
                    return b
                },
                warn: function () {
                    return S
                }
            });
            var n = i(4578),
                a = i(7462),
                s = i(3144),
                o = i(7326),
                l = i(6042),
                u = function () {
                    function t(t, e, i, r) {
                        this.video = t, this.hlsjs = i, this.videoListeners = e, this.hlsjsListeners = r
                    }
                    var e = t.prototype;
                    return e.on = function () {
                        var t = this;
                        this.off(), (0, l.S6)(this.videoListeners, (function (e, i) {
                            t.video.addEventListener(i, e, !1)
                        })), (0, l.S6)(this.hlsjsListeners, (function (e, i) {
                            t.hlsjs.on(i, e)
                        }))
                    }, e.off = function () {
                        var t = this;
                        (0, l.S6)(this.videoListeners, (function (e, i) {
                            t.video.removeEventListener(i, e)
                        })), (0, l.S6)(this.hlsjsListeners, (function (e, i) {
                            t.hlsjs.off(i, e)
                        }))
                    }, t
                }(),
                h = i(5256),
                d = i(8348),
                c = function (t) {
                    return t.audioGroupIds ? t.audioGroupIds[t._urlId || t.urlId] : void 0
                },
                f = function (t, e) {
                    var i = (0, h.c3)(t),
                        r = (0, l.UI)(t, (function (t, r) {
                            return {
                                label: (0, h.ji)(t, e, i),
                                level_id: t.id,
                                hlsjsIndex: r,
                                bitrate: t.bitrate,
                                height: t.height,
                                width: t.width,
                                audioGroupId: c(t)
                            }
                        }));
                    return r.sort((function (t, e) {
                        return t.height && e.height && t.height !== e.height ? e.height - t.height : (e.bitrate || 0) - (t.bitrate || 0)
                    })), r.length > 1 && r.unshift({
                        label: "Auto",
                        level_id: "auto",
                        hlsjsIndex: -1
                    }), r
                },
                v = function (t, e) {
                    return Math.max(0, (0, l.cq)(e, (0, l.sE)(e, (function (e) {
                        return e.hlsjsIndex === t
                    }))))
                },
                g = function (t, e, i, r) {
                    void 0 === r && (r = t.length);
                    var n, a, s = function () {
                        try {
                            return window.devicePixelRatio
                        } catch (t) {}
                        return 1
                    }();
                    e *= s, i *= s, d.OS.tizen && (e = 1 / 0, i = 1 / 0);
                    for (var o = 0; o < r; o++) {
                        var l = t[o];
                        if ((l.width >= e || l.height >= i) && (n = l, !(a = t[o + 1]) || n.width !== a.width || n.height !== a.height)) return o
                    }
                    return r - 1
                },
                p = i(4742),
                m = function () {},
                T = function (t) {
                    return p.Z.debug ? console[t].bind(console, "[Hls.js " + t + "] ->") : m
                },
                y = T("debug"),
                b = T("log"),
                E = T("info"),
                S = T("warn"),
                L = T("error"),
                k = i(548),
                R = i(5083);
            function A(t) {
                var e = t.withCredentials,
                    i = t.aesToken,
                    n = t.renderTextTracksNatively,
                    s = t.onXhrOpen,
                    o = t.liveSyncDuration,
                    u = t.hlsjsConfig,
                    h = (0, l.ei)(u || {}, ["liveSyncDuration", "liveSyncDurationCount", "liveMaxLatencyDuration", "liveMaxLatencyDurationCount", "liveBackBufferLength", "backBufferLength", "loader", "pLoader", "fLoader", "fragLoadingMaxRetry", "fragLoadingRetryDelay", "enableWorker", "debug"]),
                    d = {
                        autoStartLoad: !1,
                        capLevelToPlayerSize: !1,
                        captionsTextTrack1Label: "Unknown CC",
                        captionsTextTrack2Label: "Unknown CC",
                        captionsTextTrack1LanguageCode: "",
                        captionsTextTrack2LanguageCode: "",
                        debug: !!p.Z.debug && r,
                        fragLoadingMaxRetry: 2,
                        fragLoadingRetryDelay: 4e3,
                        maxMaxBufferLength: k.i0,
                        renderTextTracksNatively: n,
                        startLevel: -1,
                        testBandwidth: !1
                    },
                    c = h.liveSyncDurationCount,
                    f = h.liveMaxLatencyDurationCount,
                    v = h.liveMaxLatencyDuration;
                return void 0 !== c || void 0 !== f ? (h.liveSyncDuration = h.liveMaxLatencyDuration = void 0, h.liveSyncDurationCount = (0, l.xV)(c) ? c : 1 / 0, h.liveMaxLatencyDurationCount = (0, l.xV)(f) ? f : 1 / 0) : void 0 === o && void 0 === v || (h.liveSyncDurationCount = h.liveMaxLatencyDurationCount = void 0, d.liveSyncDuration = (0, R.G0)(o), h.liveMaxLatencyDuration = (0, l.xV)(v) ? v : 1 / 0), e || i || s ? (0, a.Z)({}, d, function (t, e, i) {
                    return {
                        xhrSetup: function (r, n) {
                            if (t && (r.withCredentials = !0), e) {
                                var a = n.indexOf("?") > 0 ? "&token=" : "?token=";
                                r.open("GET", n + a + e, !0)
                            }
                            "function" == typeof i && i(r, n)
                        },
                        fetchSetup: function (i, r) {
                            if (e) {
                                var n = i.url.indexOf("?") > 0 ? "&token=" : "?token=";
                                i.url = i.url + n + e
                            }
                            return t && (r.credentials = "include"), new Request(i.url, r)
                        }
                    }
                }(e, i, s), h) : (0, a.Z)({}, d, h)
            }
            var _, D = i(9601),
                O = i(4446);
            ! function (t) {
                t[t.BASE_ERROR = 23e4] = "BASE_ERROR", t[t.ERROR_LIVE_STREAM_DOWN_OR_ENDED = 230001] = "ERROR_LIVE_STREAM_DOWN_OR_ENDED", t[t.MANIFEST_ERROR_CONNECTION_LOST = 232002] = "MANIFEST_ERROR_CONNECTION_LOST", t[t.ERROR_CONNECTION_LOST = 230002] = "ERROR_CONNECTION_LOST", t[t.MANIFEST_PARSING_ERROR = 232600] = "MANIFEST_PARSING_ERROR", t[t.LEVEL_EMPTY_ERROR = 232631] = "LEVEL_EMPTY_ERROR", t[t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = 232632] = "MANIFEST_INCOMPATIBLE_CODECS_ERROR", t[t.FRAG_PARSING_ERROR = 233600] = "FRAG_PARSING_ERROR", t[t.FRAG_DECRYPT_ERROR = 233650] = "FRAG_DECRYPT_ERROR", t[t.BUFFER_STALLED_ERROR = 234001] = "BUFFER_STALLED_ERROR", t[t.BUFFER_APPEND_ERROR = 234002] = "BUFFER_APPEND_ERROR", t[t.PROTECTED_CONTENT_ACCESS_ERROR = 232403] = "PROTECTED_CONTENT_ACCESS_ERROR"
            }(_ || (_ = {}));
            var C = function (t) {
                if (t) {
                    if (/^frag/.test(t)) return 2e3;
                    if (/^(manifest|level|audioTrack)/.test(t)) return 1e3;
                    if (/^key/.test(t)) return 4e3
                }
                return 0
            };
            var I = i(328),
                w = i(3949),
                x = i(186),
                P = i(3328),
                M = function (t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return (0, n.Z)(e, t), e
                }(I.ZP);
            (0, a.Z)(M.prototype, w.Z, x.Z, P.Z);
            var F, N = M,
                U = i(4506),
                B = i(3343),
                j = i(686),
                G = i(1643),
                H = i(5004),
                K = i(8702),
                V = i(386),
                W = i(5099),
                Y = i(2728),
                q = i(7477),
                X = i(1384),
                z = (F = "warn", p.Z.debug ? console[F].bind(console) : function () {}),
                Z = function (t, e, i) {
                    var r = t.sources[0];
                    return void 0 !== r[i] ? r[i] : void 0 !== t[i] ? t[i] : e[i]
                };
            var Q, J, $, tt, et, it, rt, nt, at, st, ot, lt, ut, ht, dt, ct, ft, vt, gt, pt, mt, Tt, yt, bt = i(4560),
                Et = (Q = i.n(bt)(), J = Q.Events, $ = J.MEDIA_ATTACHED, tt = J.MEDIA_DETACHED, et = J.MANIFEST_PARSED, it = J.LEVEL_LOADED, rt = J.LEVEL_UPDATED, nt = J.LEVEL_PTS_UPDATED, at = J.FRAG_CHANGED, st = J.LEVEL_SWITCHED, ot = J.FRAG_PARSING_METADATA, lt = J.BUFFER_APPENDED, ut = J.BUFFER_CODECS, ht = J.FRAG_BUFFERED, dt = J.INIT_PTS_FOUND, ct = J.NON_NATIVE_TEXT_TRACKS_FOUND, ft = J.CUES_PARSED, vt = J.AUDIO_TRACKS_UPDATED, gt = J.ERROR, pt = Q.ErrorTypes, mt = pt.MEDIA_ERROR, Tt = pt.NETWORK_ERROR, yt = function (t) {
                    var e = t.ErrorTypes.NETWORK_ERROR,
                        i = t.ErrorDetails,
                        r = i.MANIFEST_PARSING_ERROR,
                        n = i.LEVEL_EMPTY_ERROR,
                        a = i.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        s = i.FRAG_PARSING_ERROR,
                        o = i.FRAG_DECRYPT_ERROR,
                        l = i.BUFFER_STALLED_ERROR,
                        u = i.BUFFER_APPEND_ERROR,
                        h = i.INTERNAL_EXCEPTION,
                        d = i.MANIFEST_LOAD_ERROR,
                        c = i.MANIFEST_LOAD_TIMEOUT,
                        f = i.LEVEL_LOAD_ERROR,
                        v = i.LEVEL_LOAD_TIMEOUT,
                        g = i.FRAG_LOAD_ERROR,
                        p = i.FRAG_LOAD_TIMEOUT,
                        m = i.BUFFER_SEEK_OVER_HOLE,
                        T = i.BUFFER_NUDGE_ON_STALL,
                        y = [d, c, r, a, f, v, g, p],
                        b = [l, m, T],
                        E = [n, f, v];
                    return function (t) {
                        var i = t.details,
                            d = t.response,
                            c = t.type,
                            f = t.fatal,
                            v = y.indexOf(i) < 0,
                            g = b.indexOf(i) >= 0,
                            p = E.indexOf(i) >= 0,
                            m = O.ul,
                            T = _.BASE_ERROR;
                        switch (i) {
                        case r:
                            T = _.MANIFEST_PARSING_ERROR;
                            break;
                        case n:
                            T = _.LEVEL_EMPTY_ERROR;
                            break;
                        case a:
                            m = O.zO, T = _.MANIFEST_INCOMPATIBLE_CODECS_ERROR;
                            break;
                        case s:
                            T = _.FRAG_PARSING_ERROR;
                            break;
                        case o:
                            T = _.FRAG_DECRYPT_ERROR;
                            break;
                        case l:
                            T = _.BUFFER_STALLED_ERROR;
                            break;
                        case u:
                            T = _.BUFFER_APPEND_ERROR;
                            break;
                        case h:
                            T = 239e3;
                            break;
                        default:
                            if (c === e)
                                if (!1 === navigator.onLine) v = !1, p = !1, T = (f = "manifestLoadError" === i) ? _.MANIFEST_ERROR_CONNECTION_LOST : _.ERROR_CONNECTION_LOST, m = O.MD;
                                else if (/TimeOut$/.test(i)) T = _.BASE_ERROR + 1001 + C(i);
                            else if (d) {
                                var S = (0, D.Z)(_.BASE_ERROR, d.code, t.url);
                                T = S.code, m = S.key, T += C(i)
                            }
                        }
                        return {
                            key: m,
                            code: T,
                            recoverable: v,
                            stalling: g,
                            suppressLevel: p,
                            fatal: f,
                            error: t
                        }
                    }
                }(Q), function (t) {
                    function e(i, r, n) {
                        var a, s;
                        return (a = t.call(this) || this).bandwidthMonitor = (0, Y.Z)((0, o.Z)(a), r.bandwidthEstimate), a.bitrateSelection = r.bitrateSelection, a.bufferStallTimeout = 1e3, a.connectionTimeoutDuration = 1e4, a.dvrEnd = null, a.dvrPosition = null, a.dvrUpdatedTime = 0, a.eventHandler = null, a.hlsjs = null, a.hlsjsConfig = null, a.hlsjsOptions = null, a.jwConfig = r, a.lastPosition = 0, a.maxRetries = 3, a.playerId = i, a.processPlaylistMetadata = B.q, a.recoveryInterval = 5e3, a.renderNatively = (s = r.renderCaptionsNatively, !(!d.OS.iOS && !d.Browser.safari) || d.Browser.chrome && s), a.savedVideoProperties = !1, a.seeking = !1, a.staleManifestDurationMultiplier = 3e3, a.state = G.bc, a.supports = e.supports, a.supportsPlaybackRate = !0, a.video = n, a.playerWidth = 0, a.playerHeight = 0, a.playerStretching = null, a.capLevels = !1, a.levelDuration = 0, a.live = !1, a.liveEdgePosition = null, a.liveEdgeUpdated = 0, a.staleManifestTimeout = -1, a.connectionTimeout = -1, a.programDateSyncTime = 0, a.retryCount = 0, a.stallTime = -1, a.jwLevels = [], a.audioTracks = null, a.audioTracksArray = null, a.resetLifecycleVariables(), a
                    }(0, n.Z)(e, t);
                    var i = e.prototype;
                    return i.resetLifecycleVariables = function () {
                        this.resetRecovery(), this.stopStaleTimeout(), this.stopConnectionTimeout(), this.stallTime = -1, this.streamBitrate = -1, this.videoFound = !1, this.videoHeight = 0, this.src = null, this.currentHlsjsLevel = null, this.currentAudioTrackIndex = null, this.currentJwItem = null, this.jwLevels = [], this.audioTracks = null, this.audioTracksArray = null, this.lastRecoveryTime = null, this.lastEndSn = null, this.levelDuration = 0, this.live = !1, this.liveEdgePosition = null, this.liveEdgeUpdated = 0, this.liveEdgeSn = -1, this.livePaused = !1, this.recoveringMediaError = !1, this.recoveringNetworkError = !1, this.streamType = "VOD", this.lastProgramDateTime = 0, this.programDateSyncTime = 0
                    }, i.resetRecovery = function () {
                        this.retryCount = 0
                    }, i.stopStaleTimeout = function () {
                        clearTimeout(this.staleManifestTimeout), this.staleManifestTimeout = -1
                    }, i.stopConnectionTimeout = function () {
                        clearTimeout(this.connectionTimeout), this.connectionTimeout = -1
                    }, i.startConnectionTimeout = function () {
                        var t = this; - 1 === this.connectionTimeout && (this.connectionTimeout = window.setTimeout((function () {
                            navigator.onLine ? t.hlsjs.startLoad() : t.handleError(_.ERROR_CONNECTION_LOST, null, O.MD)
                        }), this.connectionTimeoutDuration))
                    }, i.initHlsjs = function (t) {
                        var e = this.jwConfig.hlsjsConfig,
                            i = {
                                withCredentials: Boolean(Z(t, this.jwConfig, "withCredentials")),
                                aesToken: Z(t, this.jwConfig, "aestoken"),
                                renderTextTracksNatively: this.renderNatively,
                                onXhrOpen: t.sources[0].onXhrOpen,
                                liveSyncDuration: Z(t, this.jwConfig, "liveSyncDuration"),
                                hlsjsConfig: e
                            };
                        if (this.setupSideloadedTracks(t.tracks), this.capLevels = !t.stereomode, !this.hlsjs || !(0, l.wB)(this.hlsjsOptions)(i)) {
                            this.hlsjsOptions = i, this.restoreVideoProperties(), this.stopStaleTimeout(), this.stopConnectionTimeout(), this.hlsjsConfig = A(i);
                            var r = (0, a.Z)({}, this.hlsjsConfig),
                                n = this.bandwidthMonitor.getEstimate();
                            (0, l.qh)(n) && (r.abrEwmaDefaultEstimate = n), r.appendErrorMaxRetry = 1, this.hlsjs = new Q(r), this.eventHandler = new u(this.video, this.createVideoListeners(), this.hlsjs, this.createHlsjsListeners())
                        }
                    }, i.init = function (t) {
                        this.destroy(), this.initHlsjs(t)
                    }, i.preload = function (t) {
                        "metadata" === t.preload && (this.maxBufferLength = k.Zv), this.load(t)
                    }, i.load = function (t) {
                        var e = this.hlsjs,
                            i = this.video,
                            r = this.src;
                        if (e) {
                            var n = t.sources[0].file,
                                a = n.url && "string" == typeof n.url ? n.url : n;
                            if (r !== a || this.videoSrc !== i.src) {
                                var s = t.starttime || -1;
                                s < -1 && (s = this.lastPosition), this.initHlsjs(t), this.currentJwItem = t, this.src = a, this.videoHeight = 0, this.eventsOn_(), e.config.startPosition = s, e.loadSource(a), e.attachMedia(i), this.videoSrc = i.src
                            } else this.maxBufferLength = k.i0
                        }
                    }, i.restartStream = function (t) {
                        var e = (0, a.Z)({}, this.currentJwItem);
                        t ? e.starttime = t : delete e.starttime, this.src = null, this._clearNonNativeCues(), this.clearMetaCues(), this.clearTracks(), this.init(e), this.load(e), delete e.starttime
                    }, i.play = function () {
                        return this.livePaused && (this.livePaused = !1, this.restartStream()), this.video.play() || (0, W.Z)(this.video)
                    }, i.pause = function () {
                        this.stopConnectionTimeout(), this.live && "LIVE" === this.streamType && !this.livePaused && this.livePause(), this.video.pause()
                    }, i.livePause = function () {
                        this.hlsjs && (this.livePaused = !0, this.hlsjs.stopLoad(), this.stopStaleTimeout())
                    }, i.stop = function () {
                        this.clearTracks(), this.hlsjs && (this.eventsOff_(), this.hlsjs.stopLoad()), this.pause(), this.setState(G.bc)
                    }, i.seek = function (t) {
                        var e = this.getDuration();
                        if (e && e !== 1 / 0 && !(0, l.i2)(e)) {
                            this.stopStaleTimeout(), this.stopConnectionTimeout();
                            var i = t >= 0 ? t : t + this.video.duration,
                                r = this.getSeekRange();
                            "DVR" === this.streamType && null !== this.dvrEnd && (this.dvrPosition = i - this.dvrEnd, t < 0 && (i += Math.min(12, ((0, H.z)() - this.dvrUpdatedTime) / 1e3))), this.seeking = !0;
                            var n = this.video.currentTime;
                            this.trigger(G.NZ, {
                                position: this.getCurrentTime(),
                                offset: i,
                                duration: e,
                                currentTime: n,
                                seekRange: r,
                                metadata: {
                                    currentTime: n
                                }
                            }), this.video.currentTime = i;
                            var a = this.video.currentTime,
                                s = {
                                    position: this.getCurrentTime(),
                                    duration: e,
                                    currentTime: a,
                                    seekRange: r,
                                    metadata: {
                                        currentTime: a
                                    }
                                };
                            this.trigger("time", s)
                        }
                    }, i.getCurrentQuality = function () {
                        var t = 0;
                        return this.hlsjs && !this.hlsjs.autoLevelEnabled && (t = v(this.hlsjs.manualLevel, this.jwLevels)), t
                    }, i.getQualityLevels = function () {
                        return (0, l.UI)(this.jwLevels, (function (t) {
                            return (0, U.Z)(t)
                        }))
                    }, i.getCurrentAudioTrack = function () {
                        return (0, l.hj)(this.currentAudioTrackIndex) ? this.currentAudioTrackIndex : -1
                    }, i.getAudioTracks = function () {
                        return this.audioTracks || []
                    }, i.getCurrentTime = function () {
                        return this.live && "DVR" === this.streamType ? (this.dvrPosition || this.updateDvrPosition(this.getSeekRange()), this.dvrPosition) : this.video.currentTime
                    }, i.getDuration = function () {
                        if (this.live && this.currentJwItem) {
                            var t = this.levelDuration,
                                e = this.currentJwItem.minDvrWindow;
                            return (0, j.s)(t, e) ? (this.streamType = "DVR", -t) : (this.streamType = "LIVE", 1 / 0)
                        }
                        return this.streamType = "VOD", this.video.duration
                    }, i.getCurrentHlsjsLevel = function () {
                        var t = 0,
                            e = this.hlsjs;
                        return e && (t = e.streamController.loadedmetadata && e.currentLevel > 0 ? e.currentLevel : e.firstLevel), t
                    }, i.getName = function () {
                        return {
                            name: "hlsjs"
                        }
                    }, i.getPlaybackRate = function () {
                        return this.video.playbackRate
                    }, i.getSeekRange = function () {
                        var t = this.levelDuration,
                            e = this.video,
                            i = e.seekable,
                            r = e.duration,
                            n = i.length ? Math.max(i.end(0), i.end(i.length - 1)) : r;
                        return (0, l.i2)(r) ? {
                            start: 0,
                            end: 0
                        } : {
                            start: Math.max(0, n - t),
                            end: n
                        }
                    }, i.getBandwidthEstimate = function () {
                        var t = this.hlsjs;
                        return t ? t.bandwidthEstimate : null
                    }, i.getLiveLatency = function () {
                        var t = null;
                        if (this.live && null !== this.liveEdgePosition) {
                            var e = (0, H.z)();
                            t = this.liveEdgePosition + (e - this.liveEdgeUpdated) / 1e3 - this.video.currentTime;
                            var i = this.lastProgramDateTime;
                            if (i) {
                                var r = e / 1e3 - (i / 1e3 + (this.video.currentTime - this.programDateSyncTime)) - t;
                                r > 0 && r < 10 && (t += r)
                            }
                        }
                        return t
                    }, i.getTargetLatency = function () {
                        return this.hlsjs && this.hlsjs.targetLatency || null
                    }, i.setCurrentQuality = function (t) {
                        if (!(t < 0)) {
                            var e = function (t, e) {
                                var i = -1;
                                return t > -1 && e[t] && (i = e[t].hlsjsIndex), i
                            }(t, this.jwLevels);
                            this.hlsjs.nextLevel = e, this.trigger(G.aM, {
                                levels: this.jwLevels,
                                currentQuality: t
                            }), this.bitrateSelection = this.jwLevels[t].bitrate
                        }
                    }, i.setCurrentAudioTrack = function (t) {
                        var e = this.getCurrentHlsjsLevel(),
                            i = this.hlsjs.levels[e],
                            r = v(e, this.jwLevels);
                        if (this.jwLevels && this.jwLevels[r] && i && this.audioTracksArray && (0, l.dp)(this.audioTracksArray) && (0, l.hj)(t)) {
                            var n = this.audioTracks = this.audioTracksArray;
                            if (n && (0, l.dp)(n) && n[t] && this.currentAudioTrackIndex !== t) {
                                this.trigger(G.j0, {
                                    tracks: n,
                                    currentTrack: t
                                });
                                var a = (n = this.audioTracks)[t];
                                null !== this.currentAudioTrackIndex && a.hlsjsIndex !== this.hlsjs.audioTrack && (this.trigger(G._B, {
                                    tracks: n,
                                    currentTrack: t
                                }), a = this.audioTracks[t]), this.currentAudioTrackIndex = t, a.hlsjsIndex !== this.hlsjs.audioTrack && (this.hlsjs.audioTrack = a.hlsjsIndex)
                            }
                        }
                    }, i.updateAudioTrack = function (t) {
                        if (this.hlsjs && this.hlsjs.audioTracks.length) {
                            var e, i = this.currentAudioTrackIndex;
                            (0, l.hj)(i) ? this.audioTracks && this.audioTracks[i].hlsjsIndex === this.hlsjs.audioTrack || (this.currentAudioTrackIndex = null): i = this.audioTracksArray ? (void 0 === (e = this.audioTracksArray) && (e = []), Math.max((0, l.cq)(e, (0, l.sE)(e, (function (t) {
                                return t.defaulttrack
                            }))), 0)) : 0, this.setCurrentAudioTrack(i)
                        }
                    }, i.updateDvrPosition = function (t) {
                        this.dvrPosition = this.video.currentTime - t.end, this.dvrEnd = t.end, this.dvrUpdatedTime = (0, H.z)()
                    }, i.setCurrentSubtitleTrack = function (t) {
                        this.hlsjs.subtitleTrack = t
                    }, i.setPlaybackRate = function (t) {
                        this.video.playbackRate = this.video.defaultPlaybackRate = t
                    }, i.isLive = function () {
                        return this.live
                    }, i.checkAdaptation = function (t) {
                        var e = this,
                            i = this.hlsjs,
                            r = i.levels,
                            n = i.autoLevelEnabled,
                            a = r[t];
                        if (a) {
                            var s = a.width,
                                o = a.height,
                                l = a.bitrate;
                            if (s = s || this.video.videoWidth, (o = o || this.video.videoHeight) !== this.videoHeight || l !== this.streamBitrate) {
                                var u = v(t, this.jwLevels),
                                    h = "api"; - 1 !== this.streamBitrate && this.streamBitrate || this.videoHeight ? n && (h = "auto") : h = "initial choice", this.videoHeight = o, this.streamBitrate = l;
                                var c = n ? "auto" : "manual",
                                    f = n && r.length > 1 ? "auto" : this.jwLevels[u].label,
                                    g = function () {
                                        e.trigger(G.ug, {
                                            reason: h,
                                            mode: c,
                                            level: {
                                                bitrate: l,
                                                index: u,
                                                label: f,
                                                width: s,
                                                height: o
                                            }
                                        })
                                    };
                                d.Browser.ie ? this.once("time", g, this) : g()
                            }
                        }
                    }, i.createVideoListeners = function () {
                        var t = this,
                            e = {
                                waiting: function () {
                                    t.startConnectionTimeout(), t.seeking ? t.setState(G.ik) : t.state === G.r0 && (t.atEdgeOfLiveStream() && t.setPlaybackRate(1), t.stallTime = t.video.currentTime, t.setState(G.nQ))
                                }
                            };
                        return Object.keys(K.Z).forEach((function (i) {
                            var r = K.Z[i];
                            "playing" === i ? e[i] = function () {
                                var t = this.getCurrentHlsjsLevel();
                                this.checkAdaptation(t), r.call(this)
                            }.bind(t) : "ended" === i ? e[i] = function () {
                                this.videoHeight = 0, this.streamBitrate = -1, r.call(this)
                            }.bind(t) : "error" !== i && (e[i] = r.bind(t))
                        })), e
                    }, i.createHlsjsListeners = function () {
                        var t = this,
                            e = {};
                        return e[$] = function () {
                            t.recoveringMediaError && (t.hlsjs.startLoad(), t.recoveringMediaError = !1, t.resetRecovery(), t.stopStaleTimeout(), t.stopConnectionTimeout())
                        }, e[tt] = function () {
                            t._clearNonNativeCues()
                        }, e[et] = function (e, i) {
                            var r = i.levels,
                                n = t.hlsjs,
                                a = t.bitrateSelection,
                                s = t.jwConfig,
                                o = -1,
                                u = -1;
                            if (t.currentHlsjsLevel = null, t.jwLevels = f(r, s.qualityLabels), t.capLevels && (t.playerWidth || t.playerHeight) && t.playerStretching) {
                                var h = g(r, t.playerWidth, t.playerHeight, i.firstLevel + 1);
                                n.levelController.firstLevel !== h && (n.firstLevel = h), t.resize(t.playerWidth, t.playerHeight, t.playerStretching)
                            }(0, l.qh)(a) && (o = function (t, e) {
                                if (!e) return -1;
                                for (var i = Number.MAX_VALUE, r = -1, n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    if (a.bitrate) {
                                        var s = Math.abs(e - a.bitrate);
                                        if (s <= i && (i = s, r = n), !s) break
                                    }
                                }
                                return r
                            }(r, a), u = o), n.startLevel = o, n.nextLevel = u, n.startLoad(n.config.startPosition), t.trigger(G.UZ, {
                                levels: t.jwLevels,
                                currentQuality: v(o, t.jwLevels)
                            })
                        }, e[it] = function (e, i) {
                            var r = i.details,
                                n = r.endSN,
                                a = r.live,
                                s = r.targetduration;
                            t.checkStaleManifest(n, a, s)
                        }, e[rt] = function (e, i) {
                            var r = i.details,
                                n = r.live,
                                a = r.totalduration;
                            t.live = n, t.levelDuration = a;
                            var s = t.getSeekRange(),
                                o = null !== t.dvrEnd && Math.abs(t.dvrEnd - s.end) > 1;
                            "DVR" === t.streamType && o && t.updateDvrPosition(s), n && t.state === G.bc && t.livePause()
                        }, e[nt] = function (e, i) {
                            var r = i.details,
                                n = r.fragments,
                                a = r.totalduration;
                            if (t.levelDuration = a, n.length) {
                                var s = n[n.length - 1];
                                s.sn !== t.liveEdgeSn && (t.liveEdgeUpdated = (0, H.z)(), t.liveEdgeSn = s.sn, t.liveEdgePosition = s.start + s.duration)
                            }
                        }, e[st] = function (e, i) {
                            var r = i.level;
                            r !== t.currentHlsjsLevel ? t.setCurrentLevel(r) : t.checkAdaptation(r)
                        }, e[at] = function (e, i) {
                            t.lastProgramDateTime = i.frag.programDateTime, t.programDateSyncTime = i.frag.start
                        }, e[ot] = function (e, i) {
                            i.samples && ([].some.call(t.video.textTracks, (function (t) {
                                return !t.inuse
                            })) && t.setTextTracks(t.video.textTracks), i && i.samples && i.samples.forEach((function (e) {
                                t.trigger(G.rx, {
                                    metadataType: "dai-hls",
                                    metadata: {
                                        messageData: e.data,
                                        start: e.pts,
                                        type: "ID3"
                                    }
                                })
                            })))
                        }, e[lt] = function () {
                            -1 !== t.connectionTimeout && t.stopConnectionTimeout(), t.atEdgeOfLiveStream() || t.stopStaleTimeout(), t.recoveringNetworkError && (t.resetRecovery(), t.recoveringNetworkError = !1)
                        }, e[ut] = function (e, i) {
                            if (!i.audio || !t.videoFound) {
                                var r = i.audiovideo || i.video ? "video" : "audio";
                                t.videoFound = t.videoFound || "video" === r, t.trigger(G.oZ, {
                                    mediaType: r
                                })
                            }
                        }, e[ht] = function (e, i) {
                            var r = i.frag;
                            (r.tagList || []).forEach((function (e) {
                                var i = e[0],
                                    n = e[1];
                                return t.processPlaylistMetadata(i, n, r)
                            }))
                        }, e[dt] = function (e, i) {
                            var r = i.frag,
                                n = i.initPTS;
                            t.processPlaylistMetadata("DISCONTINUITY", n, r)
                        }, this.renderNatively || (e[ct] = function (e, i) {
                            t.addTextTracks(i.tracks)
                        }, e[ft] = function (e, i) {
                            if (i && i.cues && i.cues.length) {
                                var r = !(i.cues[0] instanceof q.Z);
                                i.cues.forEach((function (e) {
                                    if (r) {
                                        var n = e;
                                        (e = new q.Z(n.startTime, n.endTime, n.text)).line = n.line, e.align = n.align, e.position = n.position
                                    }
                                    t.addVTTCue({
                                        type: i.type,
                                        cue: e,
                                        track: i.track
                                    })
                                }))
                            }
                        }), e[vt] = function (e, i) {
                            var r = i.audioTracks,
                                n = t.hlsjs.levels,
                                a = t.getCurrentHlsjsLevel();
                            r && r.length && (t.audioTracksArray = function (t) {
                                return (0, l.u4)(t, (function (t, e, i) {
                                    return t.push({
                                        autoselect: e.autoselect,
                                        defaulttrack: e.default,
                                        groupid: e.groupId,
                                        language: e.lang,
                                        name: e.name,
                                        hlsjsIndex: i
                                    }), t
                                }), [])
                            }(r), t.jwLevels.forEach((function (t) {
                                var e = t.hlsjsIndex > 0 ? n[t.hlsjsIndex] : null;
                                e && (t.audioGroupId = c(e))
                            })), t.updateAudioTrack(n[a]))
                        }, e[gt] = function (e, i) {
                            var r, n = t.hlsjs,
                                a = yt(i),
                                s = i.type,
                                o = a.key;
                            if (z(i), "DVR" === t.streamType && s === Tt) {
                                var l = t.getSeekRange();
                                t.updateDvrPosition(l)
                            }
                            if (232403 === a.code && t.retryCount < t.maxRetries && /jwpsrv.com\/.*\?token=/.test(i.url) && (a.suppressLevel = !1, a.recoverable = !0, a.fatal = !0, r = !0, t.maxRetries = 1), a.suppressLevel) {
                                var u = n.levels,
                                    h = (i.context || i).level,
                                    d = u[h];
                                if (d && Array.isArray(d.url) && 1 === d.url.length) {
                                    if (n.removeLevel(h, 0), !n.levels.length) return void t.handleError(a.code, i, o);
                                    a.fatal = !1, t.jwLevels = f(n.levels, t.jwConfig.qualityLabels), t.playerWidth && t.playerHeight && t.playerStretching && t.resize(t.playerWidth, t.playerHeight, t.playerStretching), n.loadLevel = 0, n.currentLevel = -1, t.trigger(G.UZ, {
                                        levels: t.jwLevels,
                                        currentQuality: 0
                                    })
                                }
                            }
                            if (a.fatal) {
                                var c = (0, H.z)(),
                                    v = a.recoverable && (s === Tt || s === mt),
                                    g = t.retryCount;
                                if (!(v && g < t.maxRetries)) return n.stopLoad(), void t.handleError(a.code, i, o);
                                (!t.lastRecoveryTime || c >= t.lastRecoveryTime + t.recoveryInterval) && (z("Attempting to recover, retry count:", g), s === Tt ? /^manifest/.test(i.details) || r ? (t.recoverManifestError(), t.retryCount = g) : n.startLoad() : s === mt && ("bufferAppendError" === i.details ? (z("Encountered a bufferAppendError in hls not attempting to recover media and destroying instance"), n.destroy()) : (t.recoveringMediaError = !0, n.recoverMediaError())), t.recoveringNetworkError = !0, t.retryCount += 1, t.lastRecoveryTime = c)
                            }
                            t.trigger(G.cM, new O.rG(null, a.code + 1e5, i))
                        }, e
                    }, i.resize = function (e, i, r) {
                        if (this.playerWidth = e, this.playerHeight = i, this.playerStretching = r, this.capLevels) {
                            var n = this.hlsjs;
                            if (n && n.levels) {
                                var a = n.autoLevelCapping,
                                    s = g(n.levels, this.playerWidth, this.playerHeight);
                                s !== a && (n.autoLevelCapping = s, s > a && -1 !== a && this.state !== G.bc && this.state !== G.xQ && n.streamController.nextLevelSwitch())
                            }
                        }
                        t.prototype.resize.call(this, e, i, r)
                    }, i.recoverManifestError = function () {
                        var t = this.video,
                            e = t.currentTime,
                            i = t.paused;
                        e || !i ? (this.restartStream(e), i || this.play().catch((function () {}))) : (this.hlsjs.stopLoad(), this.hlsjs.loadSource(this.src))
                    }, i.eventsOn_ = function () {
                        var t = this.bandwidthMonitor,
                            e = this.eventHandler,
                            i = this.video;
                        e && e.on(), t.start(), (0, X.Nm)(this, i)
                    }, i.eventsOff_ = function () {
                        var t = this.bandwidthMonitor,
                            e = this.eventHandler,
                            i = this.hlsjs,
                            r = this.video;
                        i && e && (this.disableTextTrack(), this.lastPosition = this.video.currentTime, i.detachMedia(), e.off()), this.off(null, null, this), t.stop(), this.resetLifecycleVariables(), (0, X.IP)(r)
                    }, i.handleError = function (t, e, i) {
                        this.resetLifecycleVariables(), this.trigger(G.Ew, new O.rG(i, t, e))
                    }, i.destroy = function () {
                        this.hlsjs && (this.eventsOff_(), this.hlsjs.destroy(), this.hlsjs = null, this.hlsjsOptions = null)
                    }, i.restoreVideoProperties = function () {
                        this.savedVideoProperties && (this.volume(this.jwConfig.volume), this.mute(this.jwConfig.mute), this.savedVideoProperties = !1)
                    }, i.checkStaleManifest = function (t, e, i) {
                        var r = this,
                            n = null !== this.jwConfig.liveTimeout ? this.jwConfig.liveTimeout : this.staleManifestDurationMultiplier * i;
                        e && this.lastEndSn === t && 0 !== n ? -1 === this.staleManifestTimeout && (this.staleManifestTimeout = window.setTimeout((function () {
                            r.checkStreamEnded()
                        }), n)) : this.stopStaleTimeout(), this.lastEndSn = t, this.live = e
                    }, i.checkStreamEnded = function () {
                        this.hlsjs && (this.video.ended || this.atEdgeOfLiveStream()) && (this.hlsjs.stopLoad(), this.handleError(_.ERROR_LIVE_STREAM_DOWN_OR_ENDED, null, O.Sp))
                    }, i.setCurrentLevel = function (t) {
                        this.currentHlsjsLevel = t, this.checkAdaptation(t), this.updateAudioTrack(this.hlsjs.levels[t])
                    }, i._clearNonNativeCues = function () {
                        var t = this;
                        !this.renderNatively && this._textTracks && this._textTracks.forEach((function (e) {
                            t.clearCueData(e._id)
                        }))
                    }, e.setEdition = function (t) {
                        e.supports = (0, V.Z)(t)
                    }, (0, s.Z)(e, [{
                        key: "maxBufferLength",
                        get: function () {
                            return this.hlsjs ? this.hlsjs.config.maxMaxBufferLength : NaN
                        },
                        set: function (t) {
                            this.hlsjs && (this.hlsjs.config.maxMaxBufferLength = t)
                        }
                    }]), e
                }(N)),
                St = function (t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return (0, n.Z)(e, t), e.prototype.getName = function () {
                        return {
                            name: "hlsjs"
                        }
                    }, e.getName = function () {
                        return {
                            name: "hlsjs"
                        }
                    }, e
                }(Et)
        },
        3343: function (t, e, i) {
            "use strict";
            i.d(e, {
                q: function () {
                    return s
                }
            });
            var r = i(6042),
                n = i(1643),
                a = function (t, e) {
                    var i = t[e];
                    return (0, r.xV)(i) && i >= 0 ? i : null
                },
                s = function (t, e, i) {
                    var s = function (t, e, i) {
                        var n;
                        if (null === (n = (0, r.xV)(i.startPTS) ? a(i, "startPTS") : a(i, "start"))) return null;
                        switch (t) {
                        case "PROGRAM-DATE-TIME":
                            return {
                                metadataType: "program-date-time", programDateTime: e, start: n, end: n + a(i, "duration")
                            };
                        case "EXT-X-DATERANGE":
                            var s = {},
                                o = e.split(",").map((function (t) {
                                    var e = t.split("="),
                                        i = e[0],
                                        r = (e[1] || "").replace(/^"|"$/g, "");
                                    return s[i] = r, {
                                        name: i,
                                        value: r
                                    }
                                })),
                                l = s["START-DATE"];
                            if (!l) return null;
                            var u = s["END-DATE"],
                                h = n;
                            if ((0, r.xV)(i.programDateTime) && (h += (new Date(l).getTime() - new Date(i.programDateTime).getTime()) / 1e3), isNaN(h)) return null;
                            var d = parseFloat(s["PLANNED-DURATION"] || s.DURATION) || 0;
                            return !d && u && (d = (new Date(u).getTime() - new Date(l).getTime()) / 1e3), {
                                metadataType: "date-range",
                                tag: t,
                                content: e,
                                attributes: o,
                                start: h,
                                end: h + d,
                                startDate: l,
                                endDate: u,
                                duration: d
                            };
                        case "EXT-X-CUE-IN":
                        case "EXT-X-CUE-OUT":
                            return {
                                metadataType: "scte-35", tag: t, content: e, start: n, end: n + (parseFloat(e) || 0)
                            };
                        case "DISCONTINUITY":
                            var c, f = n + a(i, "duration");
                            return "cc" in i && (c = i.cc), {
                                metadataType: "discontinuity",
                                tag: t,
                                discontinuitySequence: c,
                                PTS: e,
                                start: n,
                                end: f
                            };
                        default:
                            return null
                        }
                    }(t, e, i);
                    if (s) {
                        if (!(0, r.xV)(s.start)) return;
                        var o = this.createCue(s.start, s.end, JSON.stringify(s)),
                            l = i.sn + "_" + t + "_" + e;
                        if (this.addVTTCue({
                                type: "metadata",
                                cue: o
                            }, l)) {
                            var u = s.metadataType;
                            delete s.metadataType, this.trigger(n.O1, {
                                metadataType: u,
                                metadata: s
                            })
                        }
                    }
                }
        },
        4560: function (t, e) {
            var i, r;
            "undefined" != typeof window && (i = this, r = function () {
                return function (t) {
                    var e = {};
                    function i(r) {
                        if (e[r]) return e[r].exports;
                        var n = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                    }
                    return i.m = t, i.c = e, i.d = function (t, e, r) {
                        i.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    }, i.r = function (t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, i.t = function (t, e) {
                        if (1 & e && (t = i(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (i.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var n in t) i.d(r, n, function (e) {
                                return t[e]
                            }.bind(null, n));
                        return r
                    }, i.n = function (t) {
                        var e = t && t.__esModule ? function () {
                            return t.default
                        } : function () {
                            return t
                        };
                        return i.d(e, "a", e), e
                    }, i.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, i.p = "/dist/", i(i.s = 21)
                }([function (t, e, i) {
                    "use strict";
                    var r;
                    i.d(e, "a", (function () {
                            return r
                        })),
                        function (t) {
                            t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached"
                        }(r || (r = {}))
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return o
                    })), i.d(e, "b", (function () {
                        return l
                    }));
                    var r = function () {},
                        n = {
                            trace: r,
                            debug: r,
                            log: r,
                            warn: r,
                            info: r,
                            error: r
                        },
                        a = n;
                    function s(t) {
                        var e = self.console[t];
                        return e ? e.bind(self.console, "[" + t + "] >") : r
                    }
                    function o(t) {
                        if (self.console && !0 === t || "object" == typeof t) {
                            ! function (t) {
                                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                                i.forEach((function (e) {
                                    a[e] = t[e] ? t[e].bind(t) : s(e)
                                }))
                            }(t, "debug", "log", "info", "warn", "error");
                            try {
                                a.log()
                            } catch (t) {
                                a = n
                            }
                        } else a = n
                    }
                    var l = n
                }, function (t, e, i) {
                    "use strict";
                    var r, n;
                    i.d(e, "b", (function () {
                            return r
                        })), i.d(e, "a", (function () {
                            return n
                        })),
                        function (t) {
                            t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError"
                        }(r || (r = {})),
                        function (t) {
                            t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown"
                        }(n || (n = {}))
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return r
                    }));
                    var r = Number.isFinite || function (t) {
                        return "number" == typeof t && isFinite(t)
                    };
                    Number.MAX_SAFE_INTEGER
                }, function (t, e, i) {
                    "use strict";
                    var r, n;
                    i.d(e, "a", (function () {
                            return r
                        })), i.d(e, "b", (function () {
                            return n
                        })),
                        function (t) {
                            t.MANIFEST = "manifest", t.LEVEL = "level", t.AUDIO_TRACK = "audioTrack", t.SUBTITLE_TRACK = "subtitleTrack"
                        }(r || (r = {})),
                        function (t) {
                            t.MAIN = "main", t.AUDIO = "audio", t.SUBTITLE = "subtitle"
                        }(n || (n = {}))
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return l
                    })), i.d(e, "c", (function () {
                        return v
                    })), i.d(e, "k", (function () {
                        return g
                    })), i.d(e, "h", (function () {
                        return p
                    })), i.d(e, "e", (function () {
                        return m
                    })), i.d(e, "d", (function () {
                        return T
                    })), i.d(e, "f", (function () {
                        return b
                    })), i.d(e, "l", (function () {
                        return E
                    })), i.d(e, "b", (function () {
                        return S
                    })), i.d(e, "j", (function () {
                        return L
                    })), i.d(e, "i", (function () {
                        return R
                    })), i.d(e, "g", (function () {
                        return A
                    }));
                    var r = i(10),
                        n = i(6),
                        a = i(7),
                        s = Math.pow(2, 32) - 1,
                        o = [].push,
                        l = {
                            video: 1,
                            audio: 2,
                            id3: 3,
                            text: 4
                        };
                    function u(t) {
                        return String.fromCharCode.apply(null, t)
                    }
                    function h(t, e) {
                        var i = t[e] << 8 | t[e + 1];
                        return i < 0 ? 65536 + i : i
                    }
                    function d(t, e) {
                        var i = c(t, e);
                        return i < 0 ? 4294967296 + i : i
                    }
                    function c(t, e) {
                        return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
                    }
                    function f(t, e, i) {
                        t[e] = i >> 24, t[e + 1] = i >> 16 & 255, t[e + 2] = i >> 8 & 255, t[e + 3] = 255 & i
                    }
                    function v(t, e) {
                        var i = [];
                        if (!e.length) return i;
                        for (var r = t.byteLength, n = 0; n < r;) {
                            var a = d(t, n),
                                s = a > 1 ? n + a : r;
                            if (u(t.subarray(n + 4, n + 8)) === e[0])
                                if (1 === e.length) i.push(t.subarray(n + 8, s));
                                else {
                                    var l = v(t.subarray(n + 8, s), e.slice(1));
                                    l.length && o.apply(i, l)
                                } n = s
                        }
                        return i
                    }
                    function g(t) {
                        var e = [],
                            i = t[0],
                            r = 8,
                            n = d(t, r);
                        r += 4, r += 0 === i ? 8 : 16, r += 2;
                        var a = t.length + 0,
                            s = h(t, r);
                        r += 2;
                        for (var o = 0; o < s; o++) {
                            var l = r,
                                u = d(t, l);
                            l += 4;
                            var c = 2147483647 & u;
                            if (1 == (2147483648 & u) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
                            var f = d(t, l);
                            l += 4, e.push({
                                referenceSize: c,
                                subsegmentDuration: f,
                                info: {
                                    duration: f / n,
                                    start: a,
                                    end: a + c - 1
                                }
                            }), a += c, r = l += 4
                        }
                        return {
                            earliestPresentationTime: 0,
                            timescale: n,
                            version: i,
                            referencesCount: s,
                            references: e
                        }
                    }
                    function p(t) {
                        for (var e = [], i = v(t, ["moov", "trak"]), r = 0; r < i.length; r++) {
                            var a = i[r],
                                s = v(a, ["tkhd"])[0];
                            if (s) {
                                var o = s[0],
                                    l = 0 === o ? 12 : 20,
                                    h = d(s, l),
                                    c = v(a, ["mdia", "mdhd"])[0];
                                if (c) {
                                    var f = d(c, l = 0 === (o = c[0]) ? 12 : 20),
                                        g = v(a, ["mdia", "hdlr"])[0];
                                    if (g) {
                                        var p = u(g.subarray(8, 12)),
                                            m = {
                                                soun: n.a.AUDIO,
                                                vide: n.a.VIDEO
                                            } [p];
                                        if (m) {
                                            var T = v(a, ["mdia", "minf", "stbl", "stsd"])[0],
                                                y = void 0;
                                            T && (y = u(T.subarray(12, 16))), e[h] = {
                                                timescale: f,
                                                type: m
                                            }, e[m] = {
                                                timescale: f,
                                                id: h,
                                                codec: y
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return v(t, ["moov", "mvex", "trex"]).forEach((function (t) {
                            var i = d(t, 4),
                                r = e[i];
                            r && (r.default = {
                                duration: d(t, 12),
                                flags: d(t, 20)
                            })
                        })), e
                    }
                    function m(t, e) {
                        return v(e, ["moof", "traf"]).reduce((function (e, i) {
                            var r = v(i, ["tfdt"])[0],
                                n = r[0],
                                a = v(i, ["tfhd"]).reduce((function (e, i) {
                                    var a = d(i, 4),
                                        s = t[a];
                                    if (s) {
                                        var o = d(r, 4);
                                        1 === n && (o *= Math.pow(2, 32), o += d(r, 8));
                                        var l = o / (s.timescale || 9e4);
                                        if (isFinite(l) && (null === e || l < e)) return l
                                    }
                                    return e
                                }), null);
                            return null !== a && isFinite(a) && (null === e || a < e) ? a : e
                        }), null) || 0
                    }
                    function T(t, e) {
                        for (var i = 0, r = 0, a = 0, s = v(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
                            var l = s[o],
                                u = v(l, ["tfhd"])[0],
                                h = e[d(u, 4)];
                            if (h) {
                                var c = h.default,
                                    f = d(u, 0) | (null == c ? void 0 : c.flags),
                                    p = null == c ? void 0 : c.duration;
                                8 & f && (p = d(u, 2 & f ? 12 : 8));
                                for (var m = h.timescale || 9e4, T = v(l, ["trun"]), b = 0; b < T.length; b++) !(i = y(T[b])) && p && (i = p * d(T[b], 4)), h.type === n.a.VIDEO ? r += i / m : h.type === n.a.AUDIO && (a += i / m)
                            }
                        }
                        if (0 === r && 0 === a) {
                            for (var E = 0, S = v(t, ["sidx"]), L = 0; L < S.length; L++) {
                                var k = g(S[L]);
                                null != k && k.references && (E += k.references.reduce((function (t, e) {
                                    return t + e.info.duration || 0
                                }), 0))
                            }
                            return E
                        }
                        return r || a
                    }
                    function y(t) {
                        var e = d(t, 0),
                            i = 8;
                        1 & e && (i += 4), 4 & e && (i += 4);
                        for (var r = 0, n = d(t, 4), a = 0; a < n; a++) 256 & e && (r += d(t, i), i += 4), 512 & e && (i += 4), 1024 & e && (i += 4), 2048 & e && (i += 4);
                        return r
                    }
                    function b(t, e, i) {
                        v(e, ["moof", "traf"]).forEach((function (e) {
                            v(e, ["tfhd"]).forEach((function (r) {
                                var n = d(r, 4),
                                    a = t[n];
                                if (a) {
                                    var o = a.timescale || 9e4;
                                    v(e, ["tfdt"]).forEach((function (t) {
                                        var e = t[0],
                                            r = d(t, 4);
                                        if (0 === e) r -= i * o, f(t, 4, r = Math.max(r, 0));
                                        else {
                                            r *= Math.pow(2, 32), r += d(t, 8), r -= i * o, r = Math.max(r, 0);
                                            var n = Math.floor(r / (s + 1)),
                                                a = Math.floor(r % (s + 1));
                                            f(t, 4, n), f(t, 8, a)
                                        }
                                    }))
                                }
                            }))
                        }))
                    }
                    function E(t) {
                        var e = {
                                valid: null,
                                remainder: null
                            },
                            i = v(t, ["moof"]);
                        if (!i) return e;
                        if (i.length < 2) return e.remainder = t, e;
                        var n = i[i.length - 1];
                        return e.valid = Object(r.a)(t, 0, n.byteOffset - 8), e.remainder = Object(r.a)(t, n.byteOffset - 8), e
                    }
                    function S(t, e) {
                        var i = new Uint8Array(t.length + e.length);
                        return i.set(t), i.set(e, t.length), i
                    }
                    function L(t, e) {
                        var i = [],
                            r = e.samples,
                            a = e.timescale,
                            s = e.id,
                            o = !1;
                        return v(r, ["moof"]).map((function (l) {
                            var u = l.byteOffset - 8;
                            v(l, ["traf"]).map((function (l) {
                                var h = v(l, ["tfdt"]).map((function (t) {
                                    var e = t[0],
                                        i = d(t, 4);
                                    return 1 === e && (i *= Math.pow(2, 32), i += d(t, 8)), i / a
                                }))[0];
                                return void 0 !== h && (t = h), v(l, ["tfhd"]).map((function (h) {
                                    var f = d(h, 4),
                                        g = 16777215 & d(h, 0),
                                        p = 0,
                                        m = 0 != (16 & g),
                                        T = 0,
                                        y = 0 != (32 & g),
                                        b = 8;
                                    f === s && (0 != (1 & g) && (b += 8), 0 != (2 & g) && (b += 4), 0 != (8 & g) && (p = d(h, b), b += 4), m && (T = d(h, b), b += 4), y && (b += 4), "video" === e.type && (o = function (t) {
                                        if (!t) return !1;
                                        var e = t.indexOf("."),
                                            i = e < 0 ? t : t.substring(0, e);
                                        return "hvc1" === i || "hev1" === i || "dvh1" === i || "dvhe" === i
                                    }(e.codec)), v(l, ["trun"]).map((function (s) {
                                        var l = s[0],
                                            h = 16777215 & d(s, 0),
                                            f = 0 != (1 & h),
                                            v = 0,
                                            g = 0 != (4 & h),
                                            m = 0 != (256 & h),
                                            y = 0,
                                            b = 0 != (512 & h),
                                            E = 0,
                                            S = 0 != (1024 & h),
                                            L = 0 != (2048 & h),
                                            A = 0,
                                            _ = d(s, 4),
                                            D = 8;
                                        f && (v = d(s, D), D += 4), g && (D += 4);
                                        for (var O = v + u, C = 0; C < _; C++) {
                                            if (m ? (y = d(s, D), D += 4) : y = p, b ? (E = d(s, D), D += 4) : E = T, S && (D += 4), L && (A = 0 === l ? d(s, D) : c(s, D), D += 4), e.type === n.a.VIDEO)
                                                for (var I = 0; I < E;) {
                                                    var w = d(r, O),
                                                        x = 31 & r[O += 4];
                                                    k(o, x) && R(r.subarray(O, O + w), t + A / a, i), O += w, I += w + 4
                                                }
                                            t += y / a
                                        }
                                    })))
                                }))
                            }))
                        })), i
                    }
                    function k(t, e) {
                        return t ? 39 === e || 40 === e : 6 === e
                    }
                    function R(t, e, i) {
                        var r = function (t) {
                                for (var e = t.byteLength, i = [], r = 1; r < e - 2;) 0 === t[r] && 0 === t[r + 1] && 3 === t[r + 2] ? (i.push(r + 2), r += 2) : r++;
                                if (0 === i.length) return t;
                                var n = e - i.length,
                                    a = new Uint8Array(n),
                                    s = 0;
                                for (r = 0; r < n; s++, r++) s === i[0] && (s++, i.shift()), a[r] = t[s];
                                return a
                            }(t),
                            n = 0;
                        n++;
                        for (var s = 0, o = 0, l = !1, u = 0; n < r.length;) {
                            s = 0;
                            do {
                                if (n >= r.length) break;
                                s += u = r[n++]
                            } while (255 === u);
                            o = 0;
                            do {
                                if (n >= r.length) break;
                                o += u = r[n++]
                            } while (255 === u);
                            var c = r.length - n;
                            if (!l && 4 === s && n < r.length) {
                                if (l = !0, 181 === r[n++]) {
                                    var f = h(r, n);
                                    if (n += 2, 49 === f) {
                                        var v = d(r, n);
                                        if (n += 4, 1195456820 === v) {
                                            var g = r[n++];
                                            if (3 === g) {
                                                var p = r[n++],
                                                    m = 64 & p,
                                                    T = m ? 2 + 3 * (31 & p) : 0,
                                                    y = new Uint8Array(T);
                                                if (m) {
                                                    y[0] = p;
                                                    for (var b = 1; b < T; b++) y[b] = r[n++]
                                                }
                                                i.push({
                                                    type: g,
                                                    payloadType: s,
                                                    pts: e,
                                                    bytes: y
                                                })
                                            }
                                        }
                                    }
                                }
                            } else if (5 === s && o < c) {
                                if (l = !0, o > 16) {
                                    for (var E = [], S = 0; S < 16; S++) {
                                        var L = r[n++].toString(16);
                                        E.push(1 == L.length ? "0" + L : L), 3 !== S && 5 !== S && 7 !== S && 9 !== S || E.push("-")
                                    }
                                    for (var k = o - 16, R = new Uint8Array(k), A = 0; A < k; A++) R[A] = r[n++];
                                    i.push({
                                        payloadType: s,
                                        pts: e,
                                        uuid: E.join(""),
                                        userData: Object(a.f)(R),
                                        userDataBytes: R
                                    })
                                }
                            } else if (o < c) n += o;
                            else if (o > c) break
                        }
                    }
                    function A(t) {
                        var e = t[0],
                            i = "",
                            r = "",
                            n = 0,
                            a = 0,
                            s = 0,
                            o = 0,
                            l = 0,
                            h = 0;
                        if (0 === e) {
                            for (;
                                "\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
                            for (i += u(t.subarray(h, h + 1)), h += 1;
                                "\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
                            r += u(t.subarray(h, h + 1)), h += 1, n = d(t, 12), a = d(t, 16), o = d(t, 20), l = d(t, 24), h = 28
                        } else if (1 === e) {
                            n = d(t, h += 4);
                            var c = d(t, h += 4),
                                f = d(t, h += 4);
                            for (h += 4, s = Math.pow(2, 32) * c + f, Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER, console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = d(t, h), l = d(t, h += 4), h += 4;
                                "\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
                            for (i += u(t.subarray(h, h + 1)), h += 1;
                                "\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
                            r += u(t.subarray(h, h + 1)), h += 1
                        }
                        return {
                            schemeIdUri: i,
                            value: r,
                            timeScale: n,
                            presentationTime: s,
                            presentationTimeDelta: a,
                            eventDuration: o,
                            id: l,
                            payload: t.subarray(h, t.byteLength)
                        }
                    }
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return r
                    })), i.d(e, "b", (function () {
                        return v
                    })), i.d(e, "c", (function () {
                        return g
                    }));
                    var r, n = i(3),
                        a = i(12),
                        s = i(1),
                        o = i(18),
                        l = i(14);
                    function u(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, h(t, e)
                    }
                    function h(t, e) {
                        return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    function d(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function c(t, e, i) {
                        return e && d(t.prototype, e), i && d(t, i), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }! function (t) {
                        t.AUDIO = "audio", t.VIDEO = "video", t.AUDIOVIDEO = "audiovideo"
                    }(r || (r = {}));
                    var f = function () {
                            function t(t) {
                                var e;
                                this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[r.AUDIO] = null, e[r.VIDEO] = null, e[r.AUDIOVIDEO] = null, e), this.baseurl = t
                            }
                            return t.prototype.setByteRange = function (t, e) {
                                var i = t.split("@", 2),
                                    r = [];
                                1 === i.length ? r[0] = e ? e.byteRangeEndOffset : 0 : r[0] = parseInt(i[1]), r[1] = parseInt(i[0]) + r[0], this._byteRange = r
                            }, c(t, [{
                                key: "byteRange",
                                get: function () {
                                    return this._byteRange ? this._byteRange : []
                                }
                            }, {
                                key: "byteRangeStartOffset",
                                get: function () {
                                    return this.byteRange[0]
                                }
                            }, {
                                key: "byteRangeEndOffset",
                                get: function () {
                                    return this.byteRange[1]
                                }
                            }, {
                                key: "url",
                                get: function () {
                                    return !this._url && this.baseurl && this.relurl && (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                        alwaysNormalize: !0
                                    })), this._url || ""
                                },
                                set: function (t) {
                                    this._url = t
                                }
                            }]), t
                        }(),
                        v = function (t) {
                            function e(e, i) {
                                var r;
                                return (r = t.call(this, i) || this)._decryptdata = null, r.rawProgramDateTime = null, r.programDateTime = null, r.tagList = [], r.duration = 0, r.sn = 0, r.levelkey = void 0, r.type = void 0, r.loader = null, r.level = -1, r.cc = 0, r.startPTS = void 0, r.endPTS = void 0, r.appendedPTS = void 0, r.startDTS = void 0, r.endDTS = void 0, r.start = 0, r.deltaPTS = void 0, r.maxStartPTS = void 0, r.minEndPTS = void 0, r.stats = new l.a, r.urlId = 0, r.data = void 0, r.bitrateTest = !1, r.title = null, r.initSegment = null, r.type = e, r
                            }
                            u(e, t);
                            var i = e.prototype;
                            return i.createInitializationVector = function (t) {
                                for (var e = new Uint8Array(16), i = 12; i < 16; i++) e[i] = t >> 8 * (15 - i) & 255;
                                return e
                            }, i.setDecryptDataFromLevelKey = function (t, e) {
                                var i = t;
                                return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((i = o.a.fromURI(t.uri)).method = t.method, i.iv = this.createInitializationVector(e), i.keyFormat = "identity"), i
                            }, i.setElementaryStreamInfo = function (t, e, i, r, n, a) {
                                void 0 === a && (a = !1);
                                var s = this.elementaryStreams,
                                    o = s[t];
                                o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, i), o.startDTS = Math.min(o.startDTS, r), o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                                    startPTS: e,
                                    endPTS: i,
                                    startDTS: r,
                                    endDTS: n,
                                    partial: a
                                }
                            }, i.clearElementaryStreamInfo = function () {
                                var t = this.elementaryStreams;
                                t[r.AUDIO] = null, t[r.VIDEO] = null, t[r.AUDIOVIDEO] = null
                            }, c(e, [{
                                key: "decryptdata",
                                get: function () {
                                    if (!this.levelkey && !this._decryptdata) return null;
                                    if (!this._decryptdata && this.levelkey) {
                                        var t = this.sn;
                                        "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                                    }
                                    return this._decryptdata
                                }
                            }, {
                                key: "end",
                                get: function () {
                                    return this.start + this.duration
                                }
                            }, {
                                key: "endProgramDateTime",
                                get: function () {
                                    if (null === this.programDateTime) return null;
                                    if (!Object(n.a)(this.programDateTime)) return null;
                                    var t = Object(n.a)(this.duration) ? this.duration : 0;
                                    return this.programDateTime + 1e3 * t
                                }
                            }, {
                                key: "encrypted",
                                get: function () {
                                    var t;
                                    return !(null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
                                }
                            }]), e
                        }(f),
                        g = function (t) {
                            function e(e, i, r, n, a) {
                                var s;
                                (s = t.call(this, r) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new l.a, s.duration = e.decimalFloatingPoint("DURATION"), s.gap = e.bool("GAP"), s.independent = e.bool("INDEPENDENT"), s.relurl = e.enumeratedString("URI"), s.fragment = i, s.index = n;
                                var o = e.enumeratedString("BYTERANGE");
                                return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s
                            }
                            return u(e, t), c(e, [{
                                key: "start",
                                get: function () {
                                    return this.fragment.start + this.fragOffset
                                }
                            }, {
                                key: "end",
                                get: function () {
                                    return this.start + this.duration
                                }
                            }, {
                                key: "loaded",
                                get: function () {
                                    var t = this.elementaryStreams;
                                    return !!(t.audio || t.video || t.audiovideo)
                                }
                            }]), e
                        }(f)
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "b", (function () {
                        return s
                    })), i.d(e, "a", (function () {
                        return l
                    })), i.d(e, "d", (function () {
                        return u
                    })), i.d(e, "e", (function () {
                        return h
                    })), i.d(e, "c", (function () {
                        return c
                    })), i.d(e, "f", (function () {
                        return T
                    }));
                    var r, n = function (t, e) {
                            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                        },
                        a = function (t, e) {
                            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                        },
                        s = function (t, e) {
                            for (var i = e, r = 0; n(t, e);) r += 10, r += o(t, e + 6), a(t, e + 10) && (r += 10), e += r;
                            if (r > 0) return t.subarray(i, i + r)
                        },
                        o = function (t, e) {
                            var i = 0;
                            return i = (127 & t[e]) << 21, i |= (127 & t[e + 1]) << 14, (i |= (127 & t[e + 2]) << 7) | 127 & t[e + 3]
                        },
                        l = function (t, e) {
                            return n(t, e) && o(t, e + 6) + 10 <= t.length - e
                        },
                        u = function (t) {
                            for (var e = c(t), i = 0; i < e.length; i++) {
                                var r = e[i];
                                if (h(r)) return m(r)
                            }
                        },
                        h = function (t) {
                            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                        },
                        d = function (t) {
                            var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                i = o(t, 4);
                            return {
                                type: e,
                                size: i,
                                data: t.subarray(10, 10 + i)
                            }
                        },
                        c = function (t) {
                            for (var e = 0, i = []; n(t, e);) {
                                for (var r = o(t, e + 6), s = (e += 10) + r; e + 8 < s;) {
                                    var l = d(t.subarray(e)),
                                        u = f(l);
                                    u && i.push(u), e += l.size + 10
                                }
                                a(t, e) && (e += 10)
                            }
                            return i
                        },
                        f = function (t) {
                            return "PRIV" === t.type ? v(t) : "W" === t.type[0] ? p(t) : g(t)
                        },
                        v = function (t) {
                            if (!(t.size < 2)) {
                                var e = T(t.data, !0),
                                    i = new Uint8Array(t.data.subarray(e.length + 1));
                                return {
                                    key: t.type,
                                    info: e,
                                    data: i.buffer
                                }
                            }
                        },
                        g = function (t) {
                            if (!(t.size < 2)) {
                                if ("TXXX" === t.type) {
                                    var e = 1,
                                        i = T(t.data.subarray(e), !0);
                                    e += i.length + 1;
                                    var r = T(t.data.subarray(e));
                                    return {
                                        key: t.type,
                                        info: i,
                                        data: r
                                    }
                                }
                                var n = T(t.data.subarray(1));
                                return {
                                    key: t.type,
                                    data: n
                                }
                            }
                        },
                        p = function (t) {
                            if ("WXXX" === t.type) {
                                if (t.size < 2) return;
                                var e = 1,
                                    i = T(t.data.subarray(e), !0);
                                e += i.length + 1;
                                var r = T(t.data.subarray(e));
                                return {
                                    key: t.type,
                                    info: i,
                                    data: r
                                }
                            }
                            var n = T(t.data);
                            return {
                                key: t.type,
                                data: n
                            }
                        },
                        m = function (t) {
                            if (8 === t.data.byteLength) {
                                var e = new Uint8Array(t.data),
                                    i = 1 & e[3],
                                    r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                                return r /= 45, i && (r += 47721858.84), Math.round(r)
                            }
                        },
                        T = function (t, e) {
                            void 0 === e && (e = !1);
                            var i = y();
                            if (i) {
                                var r = i.decode(t);
                                if (e) {
                                    var n = r.indexOf("\0");
                                    return -1 !== n ? r.substring(0, n) : r
                                }
                                return r.replace(/\0/g, "")
                            }
                            for (var a, s, o, l = t.length, u = "", h = 0; h < l;) {
                                if (0 === (a = t[h++]) && e) return u;
                                if (0 !== a && 3 !== a) switch (a >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    u += String.fromCharCode(a);
                                    break;
                                case 12:
                                case 13:
                                    s = t[h++], u += String.fromCharCode((31 & a) << 6 | 63 & s);
                                    break;
                                case 14:
                                    s = t[h++], o = t[h++], u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                                }
                            }
                            return u
                        };
                    function y() {
                        return r || void 0 === self.TextDecoder || (r = new self.TextDecoder("utf-8")), r
                    }
                }, function (t, e, i) {
                    "use strict";
                    var r;
                    i.d(e, "a", (function () {
                            return r
                        })),
                        function (t) {
                            t.audioId3 = "org.id3", t.dateRange = "com.apple.quicktime.HLS", t.emsg = "https://aomedia.org/emsg/ID3"
                        }(r || (r = {}))
                }, function (t, e, i) {
                    "use strict";
                    function r(t, e, i, r) {
                        void 0 === i && (i = 1), void 0 === r && (r = !1);
                        var n = t * e * i;
                        return r ? Math.round(n) : n
                    }
                    function n(t, e, i, n) {
                        return void 0 === i && (i = 1), void 0 === n && (n = !1), r(t, e, 1 / i, n)
                    }
                    function a(t, e) {
                        return void 0 === e && (e = !1), r(t, 1e3, 1 / 9e4, e)
                    }
                    function s(t, e) {
                        return void 0 === e && (e = 1), r(t, 9e4, 1 / e)
                    }
                    i.d(e, "c", (function () {
                        return n
                    })), i.d(e, "b", (function () {
                        return a
                    })), i.d(e, "a", (function () {
                        return s
                    }))
                }, function (t, e, i) {
                    "use strict";
                    function r(t, e, i) {
                        return Uint8Array.prototype.slice ? t.slice(e, i) : new Uint8Array(Array.prototype.slice.call(t, e, i))
                    }
                    i.d(e, "a", (function () {
                        return r
                    }))
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "c", (function () {
                        return ht
                    })), i.d(e, "d", (function () {
                        return ct
                    })), i.d(e, "a", (function () {
                        return ft
                    })), i.d(e, "b", (function () {
                        return vt
                    }));
                    var r = i(0),
                        n = i(2),
                        a = i(17),
                        s = i(3),
                        o = i(7),
                        l = i(8);
                    function u(t, e) {
                        return void 0 === t && (t = ""), void 0 === e && (e = 9e4), {
                            type: t,
                            id: -1,
                            pid: -1,
                            inputTimeScale: e,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        }
                    }
                    var h = i(5),
                        d = i(10),
                        c = function () {
                            function t() {
                                this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null
                            }
                            var e = t.prototype;
                            return e.resetInitSegment = function (t, e, i, r) {
                                this._id3Track = {
                                    type: "id3",
                                    id: 3,
                                    pid: -1,
                                    inputTimeScale: 9e4,
                                    sequenceNumber: 0,
                                    samples: [],
                                    dropped: 0
                                }
                            }, e.resetTimeStamp = function (t) {
                                this.initPTS = t, this.resetContiguity()
                            }, e.resetContiguity = function () {
                                this.basePTS = null, this.frameIndex = 0
                            }, e.canParse = function (t, e) {
                                return !1
                            }, e.appendFrame = function (t, e, i) {}, e.demux = function (t, e) {
                                this.cachedData && (t = Object(h.b)(this.cachedData, t), this.cachedData = null);
                                var i, r, n = o.b(t, 0),
                                    a = n ? n.length : 0,
                                    c = this._audioTrack,
                                    v = this._id3Track,
                                    g = n ? o.d(n) : void 0,
                                    p = t.length;
                                for ((null === this.basePTS || 0 === this.frameIndex && Object(s.a)(g)) && (this.basePTS = f(g, e, this.initPTS)), n && n.length > 0 && v.samples.push({
                                        pts: this.basePTS,
                                        dts: this.basePTS,
                                        data: n,
                                        type: l.a.audioId3
                                    }), r = this.basePTS; a < p;) {
                                    if (this.canParse(t, a)) {
                                        var m = this.appendFrame(c, t, a);
                                        m ? (this.frameIndex++, r = m.sample.pts, i = a += m.length) : a = p
                                    } else o.a(t, a) ? (n = o.b(t, a), v.samples.push({
                                        pts: r,
                                        dts: r,
                                        data: n,
                                        type: l.a.audioId3
                                    }), i = a += n.length) : a++;
                                    if (a === p && i !== p) {
                                        var T = Object(d.a)(t, i);
                                        this.cachedData ? this.cachedData = Object(h.b)(this.cachedData, T) : this.cachedData = T
                                    }
                                }
                                return {
                                    audioTrack: c,
                                    videoTrack: u(),
                                    id3Track: v,
                                    textTrack: u()
                                }
                            }, e.demuxSampleAes = function (t, e, i) {
                                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
                            }, e.flush = function (t) {
                                var e = this.cachedData;
                                return e && (this.cachedData = null, this.demux(e, 0)), {
                                    audioTrack: this._audioTrack,
                                    videoTrack: u(),
                                    id3Track: this._id3Track,
                                    textTrack: u()
                                }
                            }, e.destroy = function () {}, t
                        }(),
                        f = function (t, e, i) {
                            return Object(s.a)(t) ? 90 * t : 9e4 * e + (i || 0)
                        },
                        v = c,
                        g = i(1);
                    function p(t, e) {
                        return 255 === t[e] && 240 == (246 & t[e + 1])
                    }
                    function m(t, e) {
                        return 1 & t[e + 1] ? 7 : 9
                    }
                    function T(t, e) {
                        return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
                    }
                    function y(t, e) {
                        return e + 1 < t.length && p(t, e)
                    }
                    function b(t, e) {
                        if (y(t, e)) {
                            var i = m(t, e);
                            if (e + i >= t.length) return !1;
                            var r = T(t, e);
                            if (r <= i) return !1;
                            var n = e + r;
                            return n === t.length || y(t, n)
                        }
                        return !1
                    }
                    function E(t, e, i, a, s) {
                        if (!t.samplerate) {
                            var o = function (t, e, i, a) {
                                var s, o, l, u, h = navigator.userAgent.toLowerCase(),
                                    d = a,
                                    c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                                s = 1 + ((192 & e[i + 2]) >>> 6);
                                var f = (60 & e[i + 2]) >>> 2;
                                if (!(f > c.length - 1)) return l = (1 & e[i + 2]) << 2, l |= (192 & e[i + 3]) >>> 6, g.b.log("manifest codec:" + a + ", ADTS type:" + s + ", samplingIndex:" + f), /firefox/i.test(h) ? f >= 6 ? (s = 5, u = new Array(4), o = f - 3) : (s = 2, u = new Array(2), o = f) : -1 !== h.indexOf("android") ? (s = 2, u = new Array(2), o = f) : (s = 5, u = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && f >= 6 ? o = f - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (f >= 6 && 1 === l || /vivaldi/i.test(h)) || !a && 1 === l) && (s = 2, u = new Array(2)), o = f)), u[0] = s << 3, u[0] |= (14 & f) >> 1, u[1] |= (1 & f) << 7, u[1] |= l << 3, 5 === s && (u[1] |= (14 & o) >> 1, u[2] = (1 & o) << 7, u[2] |= 8, u[3] = 0), {
                                    config: u,
                                    samplerate: c[f],
                                    channelCount: l,
                                    codec: "mp4a.40." + s,
                                    manifestCodec: d
                                };
                                t.trigger(r.a.ERROR, {
                                    type: n.b.MEDIA_ERROR,
                                    details: n.a.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "invalid ADTS sampling index:" + f
                                })
                            }(e, i, a, s);
                            if (!o) return;
                            t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, g.b.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
                        }
                    }
                    function S(t) {
                        return 9216e4 / t
                    }
                    function L(t, e, i, r, n) {
                        var a, s = r + n * S(t.samplerate),
                            o = function (t, e) {
                                var i = m(t, e);
                                if (e + i <= t.length) {
                                    var r = T(t, e) - i;
                                    if (r > 0) return {
                                        headerLength: i,
                                        frameLength: r
                                    }
                                }
                            }(e, i);
                        if (o) {
                            var l = o.frameLength,
                                u = o.headerLength,
                                h = u + l,
                                d = Math.max(0, i + h - e.length);
                            d ? (a = new Uint8Array(h - u)).set(e.subarray(i + u, e.length), 0) : a = e.subarray(i + u, i + h);
                            var c = {
                                unit: a,
                                pts: s
                            };
                            return d || t.samples.push(c), {
                                sample: c,
                                length: h,
                                missing: d
                            }
                        }
                        var f = e.length - i;
                        return (a = new Uint8Array(f)).set(e.subarray(i, e.length), 0), {
                            sample: {
                                unit: a,
                                pts: s
                            },
                            length: f,
                            missing: -1
                        }
                    }
                    function k(t, e) {
                        return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var R = function (t) {
                        var e, i;
                        function r(e, i) {
                            var r;
                            return (r = t.call(this) || this).observer = void 0, r.config = void 0, r.observer = e, r.config = i, r
                        }
                        i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, k(e, i);
                        var n = r.prototype;
                        return n.resetInitSegment = function (e, i, r, n) {
                            t.prototype.resetInitSegment.call(this, e, i, r, n), this._audioTrack = {
                                container: "audio/adts",
                                type: "audio",
                                id: 2,
                                pid: -1,
                                sequenceNumber: 0,
                                segmentCodec: "aac",
                                samples: [],
                                manifestCodec: i,
                                duration: n,
                                inputTimeScale: 9e4,
                                dropped: 0
                            }
                        }, r.probe = function (t) {
                            if (!t) return !1;
                            for (var e = (o.b(t, 0) || []).length, i = t.length; e < i; e++)
                                if (b(t, e)) return g.b.log("ADTS sync word found !"), !0;
                            return !1
                        }, n.canParse = function (t, e) {
                            return function (t, e) {
                                return function (t, e) {
                                    return e + 5 < t.length
                                }(t, e) && p(t, e) && T(t, e) <= t.length - e
                            }(t, e)
                        }, n.appendFrame = function (t, e, i) {
                            E(t, this.observer, e, i, t.manifestCodec);
                            var r = L(t, e, i, this.basePTS, this.frameIndex);
                            if (r && 0 === r.missing) return r
                        }, r
                    }(v);
                    R.minProbeByteLength = 9;
                    var A = R,
                        _ = /\/emsg[-/]ID3/i,
                        D = function () {
                            function t(t, e) {
                                this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
                            }
                            var e = t.prototype;
                            return e.resetTimeStamp = function () {}, e.resetInitSegment = function (t, e, i, r) {
                                var n = Object(h.h)(t),
                                    a = this.videoTrack = u("video", 1),
                                    s = this.audioTrack = u("audio", 1),
                                    o = this.txtTrack = u("text", 1);
                                if (this.id3Track = u("id3", 1), this.timeOffset = 0, n.video) {
                                    var l = n.video,
                                        d = l.id,
                                        c = l.timescale,
                                        f = l.codec;
                                    a.id = d, a.timescale = o.timescale = c, a.codec = f
                                }
                                if (n.audio) {
                                    var v = n.audio,
                                        g = v.id,
                                        p = v.timescale,
                                        m = v.codec;
                                    s.id = g, s.timescale = p, s.codec = m
                                }
                                o.id = h.a.text, a.sampleDuration = 0, a.duration = s.duration = r
                            }, e.resetContiguity = function () {}, t.probe = function (t) {
                                return t = t.length > 16384 ? t.subarray(0, 16384) : t, Object(h.c)(t, ["moof"]).length > 0
                            }, e.demux = function (t, e) {
                                this.timeOffset = e;
                                var i = t,
                                    r = this.videoTrack,
                                    n = this.txtTrack;
                                if (this.config.progressive) {
                                    this.remainderData && (i = Object(h.b)(this.remainderData, t));
                                    var a = Object(h.l)(i);
                                    this.remainderData = a.remainder, r.samples = a.valid || new Uint8Array
                                } else r.samples = i;
                                var s = this.extractID3Track(r, e);
                                return n.samples = Object(h.j)(e, r), {
                                    videoTrack: r,
                                    audioTrack: this.audioTrack,
                                    id3Track: s,
                                    textTrack: this.txtTrack
                                }
                            }, e.flush = function () {
                                var t = this.timeOffset,
                                    e = this.videoTrack,
                                    i = this.txtTrack;
                                e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                                var r = this.extractID3Track(e, this.timeOffset);
                                return i.samples = Object(h.j)(t, e), {
                                    videoTrack: e,
                                    audioTrack: u(),
                                    id3Track: r,
                                    textTrack: u()
                                }
                            }, e.extractID3Track = function (t, e) {
                                var i = this.id3Track;
                                if (t.samples.length) {
                                    var r = Object(h.c)(t.samples, ["emsg"]);
                                    r && r.forEach((function (t) {
                                        var r = Object(h.g)(t);
                                        if (_.test(r.schemeIdUri)) {
                                            var n = Object(s.a)(r.presentationTime) ? r.presentationTime / r.timeScale : e + r.presentationTimeDelta / r.timeScale,
                                                a = r.payload;
                                            i.samples.push({
                                                data: a,
                                                len: a.byteLength,
                                                dts: n,
                                                pts: n,
                                                type: l.a.emsg
                                            })
                                        }
                                    }))
                                }
                                return i
                            }, e.demuxSampleAes = function (t, e, i) {
                                return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                            }, e.destroy = function () {}, t
                        }();
                    D.minProbeByteLength = 1024;
                    var O = D,
                        C = null,
                        I = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                        w = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                        x = [
                            [0, 72, 144, 12],
                            [0, 0, 0, 0],
                            [0, 72, 144, 12],
                            [0, 144, 144, 12]
                        ],
                        P = [0, 1, 1, 4];
                    function M(t, e, i, r, n) {
                        if (!(i + 24 > e.length)) {
                            var a = F(e, i);
                            if (a && i + a.frameLength <= e.length) {
                                var s = r + n * (9e4 * a.samplesPerFrame / a.sampleRate),
                                    o = {
                                        unit: e.subarray(i, i + a.frameLength),
                                        pts: s,
                                        dts: s
                                    };
                                return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(o), {
                                    sample: o,
                                    length: a.frameLength,
                                    missing: 0
                                }
                            }
                        }
                    }
                    function F(t, e) {
                        var i = t[e + 1] >> 3 & 3,
                            r = t[e + 1] >> 1 & 3,
                            n = t[e + 2] >> 4 & 15,
                            a = t[e + 2] >> 2 & 3;
                        if (1 !== i && 0 !== n && 15 !== n && 3 !== a) {
                            var s = t[e + 2] >> 1 & 1,
                                o = t[e + 3] >> 6,
                                l = 1e3 * I[14 * (3 === i ? 3 - r : 3 === r ? 3 : 4) + n - 1],
                                u = w[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + a],
                                h = 3 === o ? 1 : 2,
                                d = x[i][r],
                                c = P[r],
                                f = 8 * d * c,
                                v = Math.floor(d * l / u + s) * c;
                            if (null === C) {
                                var g = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                C = g ? parseInt(g[1]) : 0
                            }
                            return !!C && C <= 87 && 2 === r && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                                sampleRate: u,
                                channelCount: h,
                                frameLength: v,
                                samplesPerFrame: f
                            }
                        }
                    }
                    function N(t, e) {
                        return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
                    }
                    function U(t, e) {
                        return e + 1 < t.length && N(t, e)
                    }
                    function B(t, e) {
                        if (e + 1 < t.length && N(t, e)) {
                            var i = F(t, e),
                                r = 4;
                            null != i && i.frameLength && (r = i.frameLength);
                            var n = e + r;
                            return n === t.length || U(t, n)
                        }
                        return !1
                    }
                    var j = function () {
                            function t(t) {
                                this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
                            }
                            var e = t.prototype;
                            return e.loadWord = function () {
                                var t = this.data,
                                    e = this.bytesAvailable,
                                    i = t.byteLength - e,
                                    r = new Uint8Array(4),
                                    n = Math.min(4, e);
                                if (0 === n) throw new Error("no bytes available");
                                r.set(t.subarray(i, i + n)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
                            }, e.skipBits = function (t) {
                                var e;
                                this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                            }, e.readBits = function (t) {
                                var e = Math.min(this.bitsAvailable, t),
                                    i = this.word >>> 32 - e;
                                return t > 32 && g.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable ? i << e | this.readBits(e) : i
                            }, e.skipLZ = function () {
                                var t;
                                for (t = 0; t < this.bitsAvailable; ++t)
                                    if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                                return this.loadWord(), t + this.skipLZ()
                            }, e.skipUEG = function () {
                                this.skipBits(1 + this.skipLZ())
                            }, e.skipEG = function () {
                                this.skipBits(1 + this.skipLZ())
                            }, e.readUEG = function () {
                                var t = this.skipLZ();
                                return this.readBits(t + 1) - 1
                            }, e.readEG = function () {
                                var t = this.readUEG();
                                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                            }, e.readBoolean = function () {
                                return 1 === this.readBits(1)
                            }, e.readUByte = function () {
                                return this.readBits(8)
                            }, e.readUShort = function () {
                                return this.readBits(16)
                            }, e.readUInt = function () {
                                return this.readBits(32)
                            }, e.skipScalingList = function (t) {
                                for (var e = 8, i = 8, r = 0; r < t; r++) 0 !== i && (i = (e + this.readEG() + 256) % 256), e = 0 === i ? e : i
                            }, e.readSPS = function () {
                                var t, e, i, r = 0,
                                    n = 0,
                                    a = 0,
                                    s = 0,
                                    o = this.readUByte.bind(this),
                                    l = this.readBits.bind(this),
                                    u = this.readUEG.bind(this),
                                    h = this.readBoolean.bind(this),
                                    d = this.skipBits.bind(this),
                                    c = this.skipEG.bind(this),
                                    f = this.skipUEG.bind(this),
                                    v = this.skipScalingList.bind(this);
                                o();
                                var g = o();
                                if (l(5), d(3), o(), f(), 100 === g || 110 === g || 122 === g || 244 === g || 44 === g || 83 === g || 86 === g || 118 === g || 128 === g) {
                                    var p = u();
                                    if (3 === p && d(1), f(), f(), d(1), h())
                                        for (e = 3 !== p ? 8 : 12, i = 0; i < e; i++) h() && v(i < 6 ? 16 : 64)
                                }
                                f();
                                var m = u();
                                if (0 === m) u();
                                else if (1 === m)
                                    for (d(1), c(), c(), t = u(), i = 0; i < t; i++) c();
                                f(), d(1);
                                var T = u(),
                                    y = u(),
                                    b = l(1);
                                0 === b && d(1), d(1), h() && (r = u(), n = u(), a = u(), s = u());
                                var E = [1, 1];
                                if (h() && h()) switch (o()) {
                                case 1:
                                    E = [1, 1];
                                    break;
                                case 2:
                                    E = [12, 11];
                                    break;
                                case 3:
                                    E = [10, 11];
                                    break;
                                case 4:
                                    E = [16, 11];
                                    break;
                                case 5:
                                    E = [40, 33];
                                    break;
                                case 6:
                                    E = [24, 11];
                                    break;
                                case 7:
                                    E = [20, 11];
                                    break;
                                case 8:
                                    E = [32, 11];
                                    break;
                                case 9:
                                    E = [80, 33];
                                    break;
                                case 10:
                                    E = [18, 11];
                                    break;
                                case 11:
                                    E = [15, 11];
                                    break;
                                case 12:
                                    E = [64, 33];
                                    break;
                                case 13:
                                    E = [160, 99];
                                    break;
                                case 14:
                                    E = [4, 3];
                                    break;
                                case 15:
                                    E = [3, 2];
                                    break;
                                case 16:
                                    E = [2, 1];
                                    break;
                                case 255:
                                    E = [o() << 8 | o(), o() << 8 | o()]
                                }
                                return {
                                    width: Math.ceil(16 * (T + 1) - 2 * r - 2 * n),
                                    height: (2 - b) * (y + 1) * 16 - (b ? 2 : 4) * (a + s),
                                    pixelRatio: E
                                }
                            }, e.readSliceType = function () {
                                return this.readUByte(), this.readUEG(), this.readUEG()
                            }, t
                        }(),
                        G = function () {
                            function t(t, e, i) {
                                this.keyData = void 0, this.decrypter = void 0, this.keyData = i, this.decrypter = new a.a(t, e, {
                                    removePKCS7Padding: !1
                                })
                            }
                            var e = t.prototype;
                            return e.decryptBuffer = function (t, e) {
                                this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
                            }, e.decryptAacSample = function (t, e, i, r) {
                                var n = t[e].unit;
                                if (!(n.length <= 16)) {
                                    var a = n.subarray(16, n.length - n.length % 16),
                                        s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                                        o = this;
                                    this.decryptBuffer(s, (function (a) {
                                        var s = new Uint8Array(a);
                                        n.set(s, 16), r || o.decryptAacSamples(t, e + 1, i)
                                    }))
                                }
                            }, e.decryptAacSamples = function (t, e, i) {
                                for (;; e++) {
                                    if (e >= t.length) return void i();
                                    if (!(t[e].unit.length < 32)) {
                                        var r = this.decrypter.isSync();
                                        if (this.decryptAacSample(t, e, i, r), !r) return
                                    }
                                }
                            }, e.getAvcEncryptedData = function (t) {
                                for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, i = new Int8Array(e), r = 0, n = 32; n < t.length - 16; n += 160, r += 16) i.set(t.subarray(n, n + 16), r);
                                return i
                            }, e.getAvcDecryptedUnit = function (t, e) {
                                for (var i = new Uint8Array(e), r = 0, n = 32; n < t.length - 16; n += 160, r += 16) t.set(i.subarray(r, r + 16), n);
                                return t
                            }, e.decryptAvcSample = function (t, e, i, r, n, a) {
                                var s = z(n.data),
                                    o = this.getAvcEncryptedData(s),
                                    l = this;
                                this.decryptBuffer(o.buffer, (function (o) {
                                    n.data = l.getAvcDecryptedUnit(s, o), a || l.decryptAvcSamples(t, e, i + 1, r)
                                }))
                            }, e.decryptAvcSamples = function (t, e, i, r) {
                                if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                                for (;; e++, i = 0) {
                                    if (e >= t.length) return void r();
                                    for (var n = t[e].units; !(i >= n.length); i++) {
                                        var a = n[i];
                                        if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                            var s = this.decrypter.isSync();
                                            if (this.decryptAvcSample(t, e, i, r, a, s), !s) return
                                        }
                                    }
                                }
                            }, t
                        }();
                    function H() {
                        return (H = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    var K = function () {
                        function t(t, e, i) {
                            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = i
                        }
                        t.probe = function (e) {
                            var i = t.syncOffset(e);
                            return !(i < 0 || (i && g.b.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"), 0))
                        }, t.syncOffset = function (t) {
                            for (var e = Math.min(1e3, t.length - 564), i = 0; i < e;) {
                                if (71 === t[i] && 71 === t[i + 188] && 71 === t[i + 376]) return i;
                                i++
                            }
                            return -1
                        }, t.createTrack = function (t, e) {
                            return {
                                container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                                type: t,
                                id: h.a[t],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: 0,
                                duration: "audio" === t ? e : void 0
                            }
                        };
                        var e = t.prototype;
                        return e.resetInitSegment = function (e, i, r, n) {
                            this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video"), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3"), this._txtTrack = t.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.audioCodec = i, this.videoCodec = r, this._duration = n
                        }, e.resetTimeStamp = function () {}, e.resetContiguity = function () {
                            var t = this._audioTrack,
                                e = this._avcTrack,
                                i = this._id3Track;
                            t && (t.pesData = null), e && (e.pesData = null), i && (i.pesData = null), this.aacOverFlow = null
                        }, e.demux = function (e, i, a, s) {
                            var o;
                            void 0 === a && (a = !1), void 0 === s && (s = !1), a || (this.sampleAes = null);
                            var l = this._avcTrack,
                                u = this._audioTrack,
                                d = this._id3Track,
                                c = this._txtTrack,
                                f = l.pid,
                                v = l.pesData,
                                p = u.pid,
                                m = d.pid,
                                T = u.pesData,
                                y = d.pesData,
                                b = !1,
                                E = this.pmtParsed,
                                S = this._pmtId,
                                L = e.length;
                            if (this.remainderData && (L = (e = Object(h.b)(this.remainderData, e)).length, this.remainderData = null), L < 188 && !s) return this.remainderData = e, {
                                audioTrack: u,
                                videoTrack: l,
                                id3Track: d,
                                textTrack: c
                            };
                            var k = Math.max(0, t.syncOffset(e));
                            (L -= (L + k) % 188) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, L, e.buffer.byteLength - L));
                            for (var R = 0, A = k; A < L; A += 188)
                                if (71 === e[A]) {
                                    var _ = !!(64 & e[A + 1]),
                                        D = ((31 & e[A + 1]) << 8) + e[A + 2],
                                        O = void 0;
                                    if ((48 & e[A + 3]) >> 4 > 1) {
                                        if ((O = A + 5 + e[A + 4]) === A + 188) continue
                                    } else O = A + 4;
                                    switch (D) {
                                    case f:
                                        _ && (v && (o = q(v)) && this.parseAVCPES(l, c, o, !1), v = {
                                            data: [],
                                            size: 0
                                        }), v && (v.data.push(e.subarray(O, A + 188)), v.size += A + 188 - O);
                                        break;
                                    case p:
                                        if (_) {
                                            if (T && (o = q(T))) switch (u.segmentCodec) {
                                            case "aac":
                                                this.parseAACPES(u, o);
                                                break;
                                            case "mp3":
                                                this.parseMPEGPES(u, o)
                                            }
                                            T = {
                                                data: [],
                                                size: 0
                                            }
                                        }
                                        T && (T.data.push(e.subarray(O, A + 188)), T.size += A + 188 - O);
                                        break;
                                    case m:
                                        _ && (y && (o = q(y)) && this.parseID3PES(d, o), y = {
                                            data: [],
                                            size: 0
                                        }), y && (y.data.push(e.subarray(O, A + 188)), y.size += A + 188 - O);
                                        break;
                                    case 0:
                                        _ && (O += e[O] + 1), S = this._pmtId = W(e, O);
                                        break;
                                    case S:
                                        _ && (O += e[O] + 1);
                                        var C = Y(e, O, this.typeSupported, a);
                                        (f = C.avc) > 0 && (l.pid = f), (p = C.audio) > 0 && (u.pid = p, u.segmentCodec = C.segmentCodec), (m = C.id3) > 0 && (d.pid = m), b && !E && (g.b.log("reparse from beginning"), b = !1, A = k - 188), E = this.pmtParsed = !0;
                                        break;
                                    case 17:
                                    case 8191:
                                        break;
                                    default:
                                        b = !0
                                    }
                                } else R++;
                            R > 0 && this.observer.emit(r.a.ERROR, r.a.ERROR, {
                                type: n.b.MEDIA_ERROR,
                                details: n.a.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "Found " + R + " TS packet/s that do not start with 0x47"
                            }), l.pesData = v, u.pesData = T, d.pesData = y;
                            var I = {
                                audioTrack: u,
                                videoTrack: l,
                                id3Track: d,
                                textTrack: c
                            };
                            return s && this.extractRemainingSamples(I), I
                        }, e.flush = function () {
                            var t, e = this.remainderData;
                            return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                                videoTrack: this._avcTrack,
                                audioTrack: this._audioTrack,
                                id3Track: this._id3Track,
                                textTrack: this._txtTrack
                            }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                        }, e.extractRemainingSamples = function (t) {
                            var e, i = t.audioTrack,
                                r = t.videoTrack,
                                n = t.id3Track,
                                a = t.textTrack,
                                s = r.pesData,
                                o = i.pesData,
                                l = n.pesData;
                            if (s && (e = q(s)) ? (this.parseAVCPES(r, a, e, !0), r.pesData = null) : r.pesData = s, o && (e = q(o))) {
                                switch (i.segmentCodec) {
                                case "aac":
                                    this.parseAACPES(i, e);
                                    break;
                                case "mp3":
                                    this.parseMPEGPES(i, e)
                                }
                                i.pesData = null
                            } else null != o && o.size && g.b.log("last AAC PES packet truncated,might overlap between fragments"), i.pesData = o;
                            l && (e = q(l)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = l
                        }, e.demuxSampleAes = function (t, e, i) {
                            var r = this.demux(t, i, !0, !this.config.progressive),
                                n = this.sampleAes = new G(this.observer, this.config, e);
                            return this.decrypt(r, n)
                        }, e.decrypt = function (t, e) {
                            return new Promise((function (i) {
                                var r = t.audioTrack,
                                    n = t.videoTrack;
                                r.samples && "aac" === r.segmentCodec ? e.decryptAacSamples(r.samples, 0, (function () {
                                    n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function () {
                                        i(t)
                                    })) : i(t)
                                })) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function () {
                                    i(t)
                                }))
                            }))
                        }, e.destroy = function () {
                            this._duration = 0
                        }, e.parseAVCPES = function (t, e, i, r) {
                            var n, a = this,
                                s = this.parseAVCNALu(t, i.data),
                                o = this.avcSample,
                                l = !1;
                            i.data = null, o && s.length && !t.audFound && (X(o, t), o = this.avcSample = V(!1, i.pts, i.dts, "")), s.forEach((function (r) {
                                switch (r.type) {
                                case 1:
                                    n = !0, o || (o = a.avcSample = V(!0, i.pts, i.dts, "")), o.frame = !0;
                                    var s = r.data;
                                    if (l && s.length > 4) {
                                        var u = new j(s).readSliceType();
                                        2 !== u && 4 !== u && 7 !== u && 9 !== u || (o.key = !0)
                                    }
                                    break;
                                case 5:
                                    n = !0, o || (o = a.avcSample = V(!0, i.pts, i.dts, "")), o.key = !0, o.frame = !0;
                                    break;
                                case 6:
                                    n = !0, Object(h.i)(z(r.data), i.pts, e.samples);
                                    break;
                                case 7:
                                    if (n = !0, l = !0, !t.sps) {
                                        var d = new j(r.data).readSPS();
                                        t.width = d.width, t.height = d.height, t.pixelRatio = d.pixelRatio, t.sps = [r.data], t.duration = a._duration;
                                        for (var c = r.data.subarray(1, 4), f = "avc1.", v = 0; v < 3; v++) {
                                            var g = c[v].toString(16);
                                            g.length < 2 && (g = "0" + g), f += g
                                        }
                                        t.codec = f
                                    }
                                    break;
                                case 8:
                                    n = !0, t.pps || (t.pps = [r.data]);
                                    break;
                                case 9:
                                    n = !1, t.audFound = !0, o && X(o, t), o = a.avcSample = V(!1, i.pts, i.dts, "");
                                    break;
                                case 12:
                                    n = !0;
                                    break;
                                default:
                                    n = !1, o && (o.debug += "unknown NAL " + r.type + " ")
                                }
                                o && n && o.units.push(r)
                            })), r && o && (X(o, t), this.avcSample = null)
                        }, e.getLastNalUnit = function (t) {
                            var e, i, r = this.avcSample;
                            if (r && 0 !== r.units.length || (r = t[t.length - 1]), null !== (e = r) && void 0 !== e && e.units) {
                                var n = r.units;
                                i = n[n.length - 1]
                            }
                            return i
                        }, e.parseAVCNALu = function (t, e) {
                            var i, r, n = e.byteLength,
                                a = t.naluState || 0,
                                s = a,
                                o = [],
                                l = 0,
                                u = -1,
                                h = 0;
                            for (-1 === a && (u = 0, h = 31 & e[0], a = 0, l = 1); l < n;)
                                if (i = e[l++], a)
                                    if (1 !== a)
                                        if (i)
                                            if (1 === i) {
                                                if (u >= 0) {
                                                    var d = {
                                                        data: e.subarray(u, l - a - 1),
                                                        type: h
                                                    };
                                                    o.push(d)
                                                } else {
                                                    var c = this.getLastNalUnit(t.samples);
                                                    if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (r = l - a - 1) > 0)) {
                                                        var f = new Uint8Array(c.data.byteLength + r);
                                                        f.set(c.data, 0), f.set(e.subarray(0, r), c.data.byteLength), c.data = f, c.state = 0
                                                    }
                                                }
                                                l < n ? (u = l, h = 31 & e[l], a = 0) : a = -1
                                            } else a = 0;
                            else a = 3;
                            else a = i ? 0 : 2;
                            else a = i ? 0 : 1;
                            if (u >= 0 && a >= 0) {
                                var v = {
                                    data: e.subarray(u, n),
                                    type: h,
                                    state: a
                                };
                                o.push(v)
                            }
                            if (0 === o.length) {
                                var g = this.getLastNalUnit(t.samples);
                                if (g) {
                                    var p = new Uint8Array(g.data.byteLength + e.byteLength);
                                    p.set(g.data, 0), p.set(e, g.data.byteLength), g.data = p
                                }
                            }
                            return t.naluState = a, o
                        }, e.parseAACPES = function (t, e) {
                            var i, a, s, o, l, u = 0,
                                h = this.aacOverFlow,
                                d = e.data;
                            if (h) {
                                this.aacOverFlow = null;
                                var c = h.missing,
                                    f = h.sample.unit.byteLength;
                                if (-1 === c) {
                                    var v = new Uint8Array(f + d.byteLength);
                                    v.set(h.sample.unit, 0), v.set(d, f), d = v
                                } else {
                                    var p = f - c;
                                    h.sample.unit.set(d.subarray(0, c), p), t.samples.push(h.sample), u = h.missing
                                }
                            }
                            for (i = u, a = d.length; i < a - 1 && !y(d, i); i++);
                            if (i === u || (i < a - 1 ? (s = "AAC PES did not start with ADTS header,offset:" + i, o = !1) : (s = "no ADTS header found in AAC PES", o = !0), g.b.warn("parsing error:" + s), this.observer.emit(r.a.ERROR, r.a.ERROR, {
                                    type: n.b.MEDIA_ERROR,
                                    details: n.a.FRAG_PARSING_ERROR,
                                    fatal: o,
                                    reason: s
                                }), !o)) {
                                if (E(t, this.observer, d, i, this.audioCodec), void 0 !== e.pts) l = e.pts;
                                else {
                                    if (!h) return void g.b.warn("[tsdemuxer]: AAC PES unknown PTS");
                                    var m = S(t.samplerate);
                                    l = h.sample.pts + m
                                }
                                for (var T, b = 0; i < a;) {
                                    if (i += (T = L(t, d, i, l, b)).length, T.missing) {
                                        this.aacOverFlow = T;
                                        break
                                    }
                                    for (b++; i < a - 1 && !y(d, i); i++);
                                }
                            }
                        }, e.parseMPEGPES = function (t, e) {
                            var i = e.data,
                                r = i.length,
                                n = 0,
                                a = 0,
                                s = e.pts;
                            if (void 0 !== s)
                                for (; a < r;)
                                    if (U(i, a)) {
                                        var o = M(t, i, a, s, n);
                                        if (!o) break;
                                        a += o.length, n++
                                    } else a++;
                            else g.b.warn("[tsdemuxer]: MPEG PES unknown PTS")
                        }, e.parseID3PES = function (t, e) {
                            if (void 0 !== e.pts) {
                                var i = H({}, e, {
                                    type: this._avcTrack ? l.a.emsg : l.a.audioId3
                                });
                                t.samples.push(i)
                            } else g.b.warn("[tsdemuxer]: ID3 PES unknown PTS")
                        }, t
                    }();
                    function V(t, e, i, r) {
                        return {
                            key: t,
                            frame: !1,
                            pts: e,
                            dts: i,
                            units: [],
                            debug: r,
                            length: 0
                        }
                    }
                    function W(t, e) {
                        return (31 & t[e + 10]) << 8 | t[e + 11]
                    }
                    function Y(t, e, i, r) {
                        var n = {
                                audio: -1,
                                avc: -1,
                                id3: -1,
                                segmentCodec: "aac"
                            },
                            a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
                        for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                            var s = (31 & t[e + 1]) << 8 | t[e + 2];
                            switch (t[e]) {
                            case 207:
                                if (!r) {
                                    g.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                                    break
                                }
                                case 15:
                                    -1 === n.audio && (n.audio = s);
                                    break;
                                case 21:
                                    -1 === n.id3 && (n.id3 = s);
                                    break;
                                case 219:
                                    if (!r) {
                                        g.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                        break
                                    }
                                    case 27:
                                        -1 === n.avc && (n.avc = s);
                                        break;
                                    case 3:
                                    case 4:
                                        !0 !== i.mpeg && !0 !== i.mp3 ? g.b.log("MPEG audio found, not supported in this browser") : -1 === n.audio && (n.audio = s, n.segmentCodec = "mp3");
                                        break;
                                    case 36:
                                        g.b.warn("Unsupported HEVC stream type found")
                            }
                            e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                        }
                        return n
                    }
                    function q(t) {
                        var e, i, r, n, a, s = 0,
                            o = t.data;
                        if (!t || 0 === t.size) return null;
                        for (; o[0].length < 19 && o.length > 1;) {
                            var l = new Uint8Array(o[0].length + o[1].length);
                            l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
                        }
                        if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                            if ((i = (e[4] << 8) + e[5]) && i > t.size - 6) return null;
                            var u = e[7];
                            192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (g.b.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                            var h = (r = e[8]) + 9;
                            if (t.size <= h) return null;
                            t.size -= h;
                            for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
                                var v = (e = o[c]).byteLength;
                                if (h) {
                                    if (h > v) {
                                        h -= v;
                                        continue
                                    }
                                    e = e.subarray(h), v -= h, h = 0
                                }
                                d.set(e, s), s += v
                            }
                            return i && (i -= r + 3), {
                                data: d,
                                pts: n,
                                dts: a,
                                len: i
                            }
                        }
                        return null
                    }
                    function X(t, e) {
                        if (t.units.length && t.frame) {
                            if (void 0 === t.pts) {
                                var i = e.samples,
                                    r = i.length;
                                if (!r) return void e.dropped++;
                                var n = i[r - 1];
                                t.pts = n.pts, t.dts = n.dts
                            }
                            e.samples.push(t)
                        }
                        t.debug.length && g.b.log(t.pts + "/" + t.dts + ":" + t.debug)
                    }
                    function z(t) {
                        for (var e = t.byteLength, i = [], r = 1; r < e - 2;) 0 === t[r] && 0 === t[r + 1] && 3 === t[r + 2] ? (i.push(r + 2), r += 2) : r++;
                        if (0 === i.length) return t;
                        var n = e - i.length,
                            a = new Uint8Array(n),
                            s = 0;
                        for (r = 0; r < n; s++, r++) s === i[0] && (s++, i.shift()), a[r] = t[s];
                        return a
                    }
                    K.minProbeByteLength = 188;
                    var Z = K;
                    function Q(t, e) {
                        return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var J = function (t) {
                        var e, i;
                        function r() {
                            return t.apply(this, arguments) || this
                        }
                        i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Q(e, i);
                        var n = r.prototype;
                        return n.resetInitSegment = function (e, i, r, n) {
                            t.prototype.resetInitSegment.call(this, e, i, r, n), this._audioTrack = {
                                container: "audio/mpeg",
                                type: "audio",
                                id: 2,
                                pid: -1,
                                sequenceNumber: 0,
                                segmentCodec: "mp3",
                                samples: [],
                                manifestCodec: i,
                                duration: n,
                                inputTimeScale: 9e4,
                                dropped: 0
                            }
                        }, r.probe = function (t) {
                            if (!t) return !1;
                            for (var e = (o.b(t, 0) || []).length, i = t.length; e < i; e++)
                                if (B(t, e)) return g.b.log("MPEG Audio sync word found !"), !0;
                            return !1
                        }, n.canParse = function (t, e) {
                            return function (t, e) {
                                return N(t, e) && 4 <= t.length - e
                            }(t, e)
                        }, n.appendFrame = function (t, e, i) {
                            if (null !== this.basePTS) return M(t, e, i, this.basePTS, this.frameIndex)
                        }, r
                    }(v);
                    J.minProbeByteLength = 4;
                    var $ = J,
                        tt = i(13),
                        et = i(6),
                        it = function () {
                            function t() {
                                this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null
                            }
                            var e = t.prototype;
                            return e.destroy = function () {}, e.resetTimeStamp = function (t) {
                                this.initPTS = t, this.lastEndDTS = null
                            }, e.resetNextTimestamp = function () {
                                this.lastEndDTS = null
                            }, e.resetInitSegment = function (t, e, i) {
                                this.audioCodec = e, this.videoCodec = i, this.generateInitSegment(t), this.emitInitSegment = !0
                            }, e.generateInitSegment = function (t) {
                                var e = this.audioCodec,
                                    i = this.videoCodec;
                                if (!t || !t.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
                                var r = this.initData = Object(h.h)(t);
                                e || (e = nt(r.audio, et.a.AUDIO)), i || (i = nt(r.video, et.a.VIDEO));
                                var n = {};
                                r.audio && r.video ? n.audiovideo = {
                                    container: "video/mp4",
                                    codec: e + "," + i,
                                    initSegment: t,
                                    id: "main"
                                } : r.audio ? n.audio = {
                                    container: "audio/mp4",
                                    codec: e,
                                    initSegment: t,
                                    id: "audio"
                                } : r.video ? n.video = {
                                    container: "video/mp4",
                                    codec: i,
                                    initSegment: t,
                                    id: "main"
                                } : g.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n
                            }, e.remux = function (t, e, i, r, n) {
                                var a, o = this.initPTS,
                                    l = this.lastEndDTS,
                                    u = {
                                        audio: void 0,
                                        video: void 0,
                                        text: r,
                                        id3: i,
                                        initSegment: void 0
                                    };
                                Object(s.a)(l) || (l = this.lastEndDTS = n || 0);
                                var d = e.samples;
                                if (!d || !d.length) return u;
                                var c = {
                                        initPTS: void 0,
                                        timescale: 1
                                    },
                                    f = this.initData;
                                if (f && f.length || (this.generateInitSegment(d), f = this.initData), !f || !f.length) return g.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
                                this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1), Object(s.a)(o) || (this.initPTS = c.initPTS = o = rt(f, d, l));
                                var v = Object(h.d)(d, f),
                                    p = l,
                                    m = v + p;
                                Object(h.f)(f, d, o), v > 0 ? this.lastEndDTS = m : (g.b.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                                var T = !!f.audio,
                                    y = !!f.video,
                                    b = "";
                                T && (b += "audio"), y && (b += "video");
                                var E = {
                                    data1: d,
                                    startPTS: p,
                                    startDTS: p,
                                    endPTS: m,
                                    endDTS: m,
                                    type: b,
                                    hasAudio: T,
                                    hasVideo: y,
                                    nb: 1,
                                    dropped: 0
                                };
                                u.audio = "audio" === E.type ? E : void 0, u.video = "audio" !== E.type ? E : void 0, u.initSegment = c;
                                var S = null != (a = this.initPTS) ? a : 0;
                                return u.id3 = Object(tt.b)(i, n, S, S), r.samples.length && (u.text = Object(tt.c)(r, n, S)), u
                            }, t
                        }(),
                        rt = function (t, e, i) {
                            return Object(h.e)(t, e) - i
                        };
                    function nt(t, e) {
                        var i = null == t ? void 0 : t.codec;
                        return i && i.length > 4 ? i : "hvc1" === i || "hev1" === i ? "hvc1.1.c.L120.90" : "av01" === i ? "av01.0.04M.08" : "avc1" === i || e === et.a.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
                    }
                    var at, st = it,
                        ot = i(15);
                    try {
                        at = self.performance.now.bind(self.performance)
                    } catch (t) {
                        g.b.debug("Unable to use Performance API on this environment"), at = self.Date.now
                    }
                    var lt = [{
                            demux: Z,
                            remux: tt.a
                        }, {
                            demux: O,
                            remux: st
                        }, {
                            demux: A,
                            remux: tt.a
                        }, {
                            demux: $,
                            remux: tt.a
                        }],
                        ut = 1024;
                    lt.forEach((function (t) {
                        var e = t.demux;
                        ut = Math.max(ut, e.minProbeByteLength)
                    }));
                    var ht = function () {
                            function t(t, e, i, r, n) {
                                this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new ot.a, this.observer = t, this.typeSupported = e, this.config = i, this.vendor = r, this.id = n
                            }
                            var e = t.prototype;
                            return e.configure = function (t) {
                                this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
                            }, e.push = function (t, e, i, r) {
                                var n = this,
                                    a = i.transmuxing;
                                a.executeStart = at();
                                var s = new Uint8Array(t),
                                    o = this.cache,
                                    l = this.config,
                                    u = this.currentTransmuxState,
                                    d = this.transmuxConfig;
                                r && (this.currentTransmuxState = r);
                                var c = function (t, e) {
                                    var i = null;
                                    return t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (i = e), i
                                }(s, e);
                                if (c && "AES-128" === c.method) {
                                    var f = this.getDecrypter();
                                    if (!l.enableSoftwareAES) return this.decryptionPromise = f.webCryptoDecrypt(s, c.key.buffer, c.iv.buffer).then((function (t) {
                                        var e = n.push(t, null, i);
                                        return n.decryptionPromise = null, e
                                    })), this.decryptionPromise;
                                    var v = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
                                    if (!v) return a.executeEnd = at(), dt(i);
                                    s = new Uint8Array(v)
                                }
                                var g = r || u,
                                    p = g.contiguous,
                                    m = g.discontinuity,
                                    T = g.trackSwitch,
                                    y = g.accurateTimeOffset,
                                    b = g.timeOffset,
                                    E = g.initSegmentChange,
                                    S = d.audioCodec,
                                    L = d.videoCodec,
                                    k = d.defaultInitPts,
                                    R = d.duration,
                                    A = d.initSegmentData;
                                if ((m || T || E) && this.resetInitSegment(A, S, L, R), (m || E) && this.resetInitialTimestamp(k), p || this.resetContiguity(), this.needsProbing(s, m, T)) {
                                    if (o.dataLength) {
                                        var _ = o.flush();
                                        s = Object(h.b)(_, s)
                                    }
                                    this.configureTransmuxer(s, d)
                                }
                                var D = this.transmux(s, c, b, y, i),
                                    O = this.currentTransmuxState;
                                return O.contiguous = !0, O.discontinuity = !1, O.trackSwitch = !1, a.executeEnd = at(), D
                            }, e.flush = function (t) {
                                var e = this,
                                    i = t.transmuxing;
                                i.executeStart = at();
                                var a = this.decrypter,
                                    s = this.cache,
                                    o = this.currentTransmuxState,
                                    l = this.decryptionPromise;
                                if (l) return l.then((function () {
                                    return e.flush(t)
                                }));
                                var u = [],
                                    h = o.timeOffset;
                                if (a) {
                                    var d = a.flush();
                                    d && u.push(this.push(d, null, t))
                                }
                                var c = s.dataLength;
                                s.reset();
                                var f = this.demuxer,
                                    v = this.remuxer;
                                if (!f || !v) return c >= ut && this.observer.emit(r.a.ERROR, r.a.ERROR, {
                                    type: n.b.MEDIA_ERROR,
                                    details: n.a.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                }), i.executeEnd = at(), [dt(t)];
                                var g = f.flush(h);
                                return ct(g) ? g.then((function (i) {
                                    return e.flushRemux(u, i, t), u
                                })) : (this.flushRemux(u, g, t), u)
                            }, e.flushRemux = function (t, e, i) {
                                var r = e.audioTrack,
                                    n = e.videoTrack,
                                    a = e.id3Track,
                                    s = e.textTrack,
                                    o = this.currentTransmuxState,
                                    l = o.accurateTimeOffset,
                                    u = o.timeOffset;
                                g.b.log("[transmuxer.ts]: Flushed fragment " + i.sn + (i.part > -1 ? " p: " + i.part : "") + " of level " + i.level);
                                var h = this.remuxer.remux(r, n, a, s, u, l, !0, this.id);
                                t.push({
                                    remuxResult: h,
                                    chunkMeta: i
                                }), i.transmuxing.executeEnd = at()
                            }, e.resetInitialTimestamp = function (t) {
                                var e = this.demuxer,
                                    i = this.remuxer;
                                e && i && (e.resetTimeStamp(t), i.resetTimeStamp(t))
                            }, e.resetContiguity = function () {
                                var t = this.demuxer,
                                    e = this.remuxer;
                                t && e && (t.resetContiguity(), e.resetNextTimestamp())
                            }, e.resetInitSegment = function (t, e, i, r) {
                                var n = this.demuxer,
                                    a = this.remuxer;
                                n && a && (n.resetInitSegment(t, e, i, r), a.resetInitSegment(t, e, i))
                            }, e.destroy = function () {
                                this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
                            }, e.transmux = function (t, e, i, r, n) {
                                return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, i, r, n) : this.transmuxUnencrypted(t, i, r, n)
                            }, e.transmuxUnencrypted = function (t, e, i, r) {
                                var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                                    a = n.audioTrack,
                                    s = n.videoTrack,
                                    o = n.id3Track,
                                    l = n.textTrack;
                                return {
                                    remuxResult: this.remuxer.remux(a, s, o, l, e, i, !1, this.id),
                                    chunkMeta: r
                                }
                            }, e.transmuxSampleAes = function (t, e, i, r, n) {
                                var a = this;
                                return this.demuxer.demuxSampleAes(t, e, i).then((function (t) {
                                    return {
                                        remuxResult: a.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, i, r, !1, a.id),
                                        chunkMeta: n
                                    }
                                }))
                            }, e.configureTransmuxer = function (t, e) {
                                for (var i, r = this.config, n = this.observer, a = this.typeSupported, s = this.vendor, o = e.audioCodec, l = e.defaultInitPts, u = e.duration, h = e.initSegmentData, d = e.videoCodec, c = 0, f = lt.length; c < f; c++)
                                    if (lt[c].demux.probe(t)) {
                                        i = lt[c];
                                        break
                                    } i || (g.b.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), i = {
                                    demux: O,
                                    remux: st
                                });
                                var v = this.demuxer,
                                    p = this.remuxer,
                                    m = i.remux,
                                    T = i.demux;
                                p && p instanceof m || (this.remuxer = new m(n, r, a, s)), v && v instanceof T || (this.demuxer = new T(n, r, a), this.probe = T.probe), this.resetInitSegment(h, o, d, u), this.resetInitialTimestamp(l)
                            }, e.needsProbing = function (t, e, i) {
                                return !this.demuxer || !this.remuxer || e || i
                            }, e.getDecrypter = function () {
                                var t = this.decrypter;
                                return t || (t = this.decrypter = new a.a(this.observer, this.config)), t
                            }, t
                        }(),
                        dt = function (t) {
                            return {
                                remuxResult: {},
                                chunkMeta: t
                            }
                        };
                    function ct(t) {
                        return "then" in t && t.then instanceof Function
                    }
                    var ft = function (t, e, i, r, n) {
                            this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = i, this.duration = r, this.defaultInitPts = n
                        },
                        vt = function (t, e, i, r, n, a) {
                            this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = i, this.trackSwitch = r, this.timeOffset = n, this.initSegmentChange = a
                        }
                }, function (t, e, i) {
                    var r, n, a, s, o;
                    r = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, n = /^(?=([^\/?#]*))\1([^]*)$/, a = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
                        buildAbsoluteURL: function (t, e, i) {
                            if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                                if (!i.alwaysNormalize) return t;
                                var r = o.parseURL(t);
                                if (!r) throw new Error("Error trying to parse base URL.");
                                return r.path = o.normalizePath(r.path), o.buildURLFromParts(r)
                            }
                            var a = o.parseURL(e);
                            if (!a) throw new Error("Error trying to parse relative URL.");
                            if (a.scheme) return i.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : e;
                            var s = o.parseURL(t);
                            if (!s) throw new Error("Error trying to parse base URL.");
                            if (!s.netLoc && s.path && "/" !== s.path[0]) {
                                var l = n.exec(s.path);
                                s.netLoc = l[1], s.path = l[2]
                            }
                            s.netLoc && !s.path && (s.path = "/");
                            var u = {
                                scheme: s.scheme,
                                netLoc: a.netLoc,
                                path: null,
                                params: a.params,
                                query: a.query,
                                fragment: a.fragment
                            };
                            if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0]))
                                if (a.path) {
                                    var h = s.path,
                                        d = h.substring(0, h.lastIndexOf("/") + 1) + a.path;
                                    u.path = o.normalizePath(d)
                                } else u.path = s.path, a.params || (u.params = s.params, a.query || (u.query = s.query));
                            return null === u.path && (u.path = i.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(u)
                        },
                        parseURL: function (t) {
                            var e = r.exec(t);
                            return e ? {
                                scheme: e[1] || "",
                                netLoc: e[2] || "",
                                path: e[3] || "",
                                params: e[4] || "",
                                query: e[5] || "",
                                fragment: e[6] || ""
                            } : null
                        },
                        normalizePath: function (t) {
                            for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(s, "")).length;);
                            return t.split("").reverse().join("")
                        },
                        buildURLFromParts: function (t) {
                            return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                        }
                    }, t.exports = o
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return m
                    })), i.d(e, "d", (function () {
                        return T
                    })), i.d(e, "b", (function () {
                        return y
                    })), i.d(e, "c", (function () {
                        return b
                    }));
                    var r = i(3),
                        n = function () {
                            function t() {}
                            return t.getSilentFrame = function (t, e) {
                                if ("mp4a.40.2" === t) {
                                    if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                    if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                    if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                    if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                    if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                    if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                                } else {
                                    if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                    if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                    if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                                }
                            }, t
                        }(),
                        a = Math.pow(2, 32) - 1,
                        s = function () {
                            function t() {}
                            return t.init = function () {
                                var e;
                                for (e in t.types = {
                                        avc1: [],
                                        avcC: [],
                                        btrt: [],
                                        dinf: [],
                                        dref: [],
                                        esds: [],
                                        ftyp: [],
                                        hdlr: [],
                                        mdat: [],
                                        mdhd: [],
                                        mdia: [],
                                        mfhd: [],
                                        minf: [],
                                        moof: [],
                                        moov: [],
                                        mp4a: [],
                                        ".mp3": [],
                                        mvex: [],
                                        mvhd: [],
                                        pasp: [],
                                        sdtp: [],
                                        stbl: [],
                                        stco: [],
                                        stsc: [],
                                        stsd: [],
                                        stsz: [],
                                        stts: [],
                                        tfdt: [],
                                        tfhd: [],
                                        traf: [],
                                        trak: [],
                                        trun: [],
                                        trex: [],
                                        tkhd: [],
                                        vmhd: [],
                                        smhd: []
                                    }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                    r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                t.HDLR_TYPES = {
                                    video: i,
                                    audio: r
                                };
                                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                    a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                                var s = new Uint8Array([105, 115, 111, 109]),
                                    o = new Uint8Array([97, 118, 99, 49]),
                                    l = new Uint8Array([0, 0, 0, 1]);
                                t.FTYP = t.box(t.types.ftyp, s, l, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
                            }, t.box = function (t) {
                                for (var e = 8, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
                                for (var a = r.length, s = a; a--;) e += r[a].byteLength;
                                var o = new Uint8Array(e);
                                for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), a = 0, e = 8; a < s; a++) o.set(r[a], e), e += r[a].byteLength;
                                return o
                            }, t.hdlr = function (e) {
                                return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                            }, t.mdat = function (e) {
                                return t.box(t.types.mdat, e)
                            }, t.mdhd = function (e, i) {
                                i *= e;
                                var r = Math.floor(i / (a + 1)),
                                    n = Math.floor(i % (a + 1));
                                return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                            }, t.mdia = function (e) {
                                return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                            }, t.mfhd = function (e) {
                                return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                            }, t.minf = function (e) {
                                return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                            }, t.moof = function (e, i, r) {
                                return t.box(t.types.moof, t.mfhd(e), t.traf(r, i))
                            }, t.moov = function (e) {
                                for (var i = e.length, r = []; i--;) r[i] = t.trak(e[i]);
                                return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(t.mvex(e)))
                            }, t.mvex = function (e) {
                                for (var i = e.length, r = []; i--;) r[i] = t.trex(e[i]);
                                return t.box.apply(null, [t.types.mvex].concat(r))
                            }, t.mvhd = function (e, i) {
                                i *= e;
                                var r = Math.floor(i / (a + 1)),
                                    n = Math.floor(i % (a + 1)),
                                    s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                return t.box(t.types.mvhd, s)
                            }, t.sdtp = function (e) {
                                var i, r, n = e.samples || [],
                                    a = new Uint8Array(4 + n.length);
                                for (i = 0; i < n.length; i++) r = n[i].flags, a[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                                return t.box(t.types.sdtp, a)
                            }, t.stbl = function (e) {
                                return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                            }, t.avc1 = function (e) {
                                var i, r, n, a = [],
                                    s = [];
                                for (i = 0; i < e.sps.length; i++) n = (r = e.sps[i]).byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(r));
                                for (i = 0; i < e.pps.length; i++) n = (r = e.pps[i]).byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(r));
                                var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
                                    l = e.width,
                                    u = e.height,
                                    h = e.pixelRatio[0],
                                    d = e.pixelRatio[1];
                                return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                            }, t.esds = function (t) {
                                var e = t.config.length;
                                return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                            }, t.mp4a = function (e) {
                                var i = e.samplerate;
                                return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), t.box(t.types.esds, t.esds(e)))
                            }, t.mp3 = function (e) {
                                var i = e.samplerate;
                                return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                            }, t.stsd = function (e) {
                                return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                            }, t.tkhd = function (e) {
                                var i = e.id,
                                    r = e.duration * e.timescale,
                                    n = e.width,
                                    s = e.height,
                                    o = Math.floor(r / (a + 1)),
                                    l = Math.floor(r % (a + 1));
                                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                            }, t.traf = function (e, i) {
                                var r = t.sdtp(e),
                                    n = e.id,
                                    s = Math.floor(i / (a + 1)),
                                    o = Math.floor(i % (a + 1));
                                return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
                            }, t.trak = function (e) {
                                return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                            }, t.trex = function (e) {
                                var i = e.id;
                                return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                            }, t.trun = function (e, i) {
                                var r, n, a, s, o, l, u = e.samples || [],
                                    h = u.length,
                                    d = 12 + 16 * h,
                                    c = new Uint8Array(d);
                                for (i += 8 + d, c.set([0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0), r = 0; r < h; r++) a = (n = u[r]).duration, s = n.size, o = n.flags, l = n.cts, c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
                                return t.box(t.types.trun, c)
                            }, t.initSegment = function (e) {
                                t.types || t.init();
                                var i = t.moov(e),
                                    r = new Uint8Array(t.FTYP.byteLength + i.byteLength);
                                return r.set(t.FTYP), r.set(i, t.FTYP.byteLength), r
                            }, t
                        }();
                    s.types = void 0, s.HDLR_TYPES = void 0, s.STTS = void 0, s.STSC = void 0, s.STCO = void 0, s.STSZ = void 0, s.VMHD = void 0, s.SMHD = void 0, s.STSD = void 0, s.FTYP = void 0, s.DINF = void 0;
                    var o = s,
                        l = i(0),
                        u = i(2),
                        h = i(1),
                        d = i(4),
                        c = i(9);
                    function f() {
                        return (f = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    var v = null,
                        g = null,
                        p = !1,
                        m = function () {
                            function t(t, e, i, r) {
                                if (void 0 === r && (r = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = i, this.ISGenerated = !1, null === v) {
                                    var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                    v = n ? parseInt(n[1]) : 0
                                }
                                if (null === g) {
                                    var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                                    g = a ? parseInt(a[1]) : 0
                                }
                                p = !(v && v >= 75 || g && g >= 600)
                            }
                            var e = t.prototype;
                            return e.destroy = function () {}, e.resetTimeStamp = function (t) {
                                h.b.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
                            }, e.resetNextTimestamp = function () {
                                h.b.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
                            }, e.resetInitSegment = function () {
                                h.b.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
                            }, e.getVideoStartPts = function (t) {
                                var e = !1,
                                    i = t.reduce((function (t, i) {
                                        var r = i.pts - t;
                                        return r < -4294967296 ? (e = !0, T(t, i.pts)) : r > 0 ? t : i.pts
                                    }), t[0].pts);
                                return e && h.b.debug("PTS rollover detected"), i
                            }, e.remux = function (t, e, i, r, n, a, s, o) {
                                var l, u, c, f, v, g, p = n,
                                    m = n,
                                    E = t.pid > -1,
                                    S = e.pid > -1,
                                    L = e.samples.length,
                                    k = t.samples.length > 0,
                                    R = s && L > 0 || L > 1;
                                if ((!E || k) && (!S || R) || this.ISGenerated || s) {
                                    this.ISGenerated || (c = this.generateIS(t, e, n));
                                    var A, _ = this.isVideoContiguous,
                                        D = -1;
                                    if (R && (D = function (t) {
                                            for (var e = 0; e < t.length; e++)
                                                if (t[e].key) return e;
                                            return -1
                                        }(e.samples), !_ && this.config.forceKeyFrameOnDiscontinuity))
                                        if (g = !0, D > 0) {
                                            h.b.warn("[mp4-remuxer]: Dropped " + D + " out of " + L + " video samples due to a missing keyframe");
                                            var O = this.getVideoStartPts(e.samples);
                                            e.samples = e.samples.slice(D), e.dropped += D, A = m += (e.samples[0].pts - O) / e.inputTimeScale
                                        } else -1 === D && (h.b.warn("[mp4-remuxer]: No keyframe found out of " + L + " video samples"), g = !1);
                                    if (this.ISGenerated) {
                                        if (k && R) {
                                            var C = this.getVideoStartPts(e.samples),
                                                I = (T(t.samples[0].pts, C) - C) / e.inputTimeScale;
                                            p += Math.max(0, I), m += Math.max(0, -I)
                                        }
                                        if (k) {
                                            if (t.samplerate || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c = this.generateIS(t, e, n)), u = this.remuxAudio(t, p, this.isAudioContiguous, a, S || R || o === d.b.AUDIO ? m : void 0), R) {
                                                var w = u ? u.endPTS - u.startPTS : 0;
                                                e.inputTimeScale || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c = this.generateIS(t, e, n)), l = this.remuxVideo(e, m, _, w)
                                            }
                                        } else R && (l = this.remuxVideo(e, m, _, 0));
                                        l && (l.firstKeyFrame = D, l.independent = -1 !== D, l.firstKeyFramePTS = A)
                                    }
                                }
                                return this.ISGenerated && (i.samples.length && (v = y(i, n, this._initPTS, this._initDTS)), r.samples.length && (f = b(r, n, this._initPTS))), {
                                    audio: u,
                                    video: l,
                                    initSegment: c,
                                    independent: g,
                                    text: f,
                                    id3: v
                                }
                            }, e.generateIS = function (t, e, i) {
                                var n, a, s, l = t.samples,
                                    u = e.samples,
                                    h = this.typeSupported,
                                    d = {},
                                    c = !Object(r.a)(this._initPTS),
                                    f = "audio/mp4";
                                if (c && (n = a = 1 / 0), t.config && l.length && ("mp3" === (t.timescale = t.samplerate, t.segmentCodec) && (h.mpeg ? (f = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3")), d.audio = {
                                        id: "audio",
                                        container: f,
                                        codec: t.codec,
                                        initSegment: "mp3" === t.segmentCodec && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                                        metadata: {
                                            channelCount: t.channelCount
                                        }
                                    }, c && (s = t.inputTimeScale, n = a = l[0].pts - Math.round(s * i))), e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, d.video = {
                                        id: "main",
                                        container: "video/mp4",
                                        codec: e.codec,
                                        initSegment: o.initSegment([e]),
                                        metadata: {
                                            width: e.width,
                                            height: e.height
                                        }
                                    }, c)) {
                                    s = e.inputTimeScale;
                                    var v = this.getVideoStartPts(u),
                                        g = Math.round(s * i);
                                    a = Math.min(a, T(u[0].dts, v) - g), n = Math.min(n, v - g)
                                }
                                if (Object.keys(d).length) return this.ISGenerated = !0, c && (this._initPTS = n, this._initDTS = a), {
                                    tracks: d,
                                    initPTS: n,
                                    timescale: s
                                }
                            }, e.remuxVideo = function (t, e, i, r) {
                                var n, a, s = t.inputTimeScale,
                                    d = t.samples,
                                    g = [],
                                    m = d.length,
                                    y = this._initPTS,
                                    b = this.nextAvcDts,
                                    S = 8,
                                    L = this.videoSampleDuration,
                                    k = Number.POSITIVE_INFINITY,
                                    R = Number.NEGATIVE_INFINITY,
                                    A = 0,
                                    _ = !1;
                                i && null !== b || (b = e * s - (d[0].pts - T(d[0].dts, d[0].pts)));
                                for (var D = 0; D < m; D++) {
                                    var O = d[D];
                                    O.pts = T(O.pts - y, b), O.dts = T(O.dts - y, b), O.dts > O.pts && (A = Math.max(Math.min(A, O.pts - O.dts), -18e3)), O.dts < d[D > 0 ? D - 1 : D].dts && (_ = !0)
                                }
                                _ && d.sort((function (t, e) {
                                    var i = t.dts - e.dts,
                                        r = t.pts - e.pts;
                                    return i || r
                                })), n = d[0].dts;
                                var C = d[d.length - 1].dts - n,
                                    I = C ? Math.round(C / (m - 1)) : L || t.inputTimeScale / 30;
                                if (A < 0) {
                                    if (A < -2 * I) {
                                        h.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.b)(-I, !0) + " ms");
                                        for (var w = A, x = 0; x < m; x++) d[x].dts = w = Math.max(w, d[x].pts - I), d[x].pts = Math.max(w, d[x].pts)
                                    } else {
                                        h.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.b)(A, !0) + " ms to overcome this issue");
                                        for (var P = 0; P < m; P++) d[P].dts = d[P].dts + A
                                    }
                                    n = d[0].dts
                                }
                                if (i) {
                                    var M = n - b,
                                        F = M > I;
                                    if (F || M < -1) {
                                        F ? h.b.warn("AVC: " + Object(c.b)(M, !0) + " ms (" + M + "dts) hole between fragments detected, filling it") : h.b.warn("AVC: " + Object(c.b)(-M, !0) + " ms (" + M + "dts) overlapping between fragments detected"), n = b;
                                        var N = d[0].pts - M;
                                        d[0].dts = n, d[0].pts = N, h.b.log("Video: First PTS/DTS adjusted: " + Object(c.b)(N, !0) + "/" + Object(c.b)(n, !0) + ", delta: " + Object(c.b)(M, !0) + " ms")
                                    }
                                }
                                p && (n = Math.max(0, n));
                                for (var U = 0, B = 0, j = 0; j < m; j++) {
                                    for (var G = d[j], H = G.units, K = H.length, V = 0, W = 0; W < K; W++) V += H[W].data.length;
                                    B += V, U += K, G.length = V, G.dts = Math.max(G.dts, n), G.pts = Math.max(G.pts, G.dts, 0), k = Math.min(G.pts, k), R = Math.max(G.pts, R)
                                }
                                a = d[m - 1].dts;
                                var Y, q = B + 4 * U + 8;
                                try {
                                    Y = new Uint8Array(q)
                                } catch (t) {
                                    return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                                        type: u.b.MUX_ERROR,
                                        details: u.a.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: q,
                                        reason: "fail allocating video mdat " + q
                                    })
                                }
                                var X = new DataView(Y.buffer);
                                X.setUint32(0, q), Y.set(o.types.mdat, 4);
                                for (var z = !1, Z = 0; Z < m; Z++) {
                                    for (var Q = d[Z], J = Q.units, $ = 0, tt = 0, et = J.length; tt < et; tt++) {
                                        var it = J[tt],
                                            rt = it.data,
                                            nt = it.data.byteLength;
                                        X.setUint32(S, nt), S += 4, Y.set(rt, S), S += nt, $ += 4 + nt
                                    }
                                    if (Z < m - 1) L = d[Z + 1].dts - Q.dts;
                                    else {
                                        var at = this.config,
                                            st = Z > 0 ? Q.dts - d[Z - 1].dts : I;
                                        if (at.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                            var ot = Math.floor(at.maxBufferHole * s),
                                                lt = (r ? k + r * s : this.nextAudioPts) - Q.pts;
                                            lt > ot ? ((L = lt - st) < 0 ? L = st : z = !0, h.b.log("[mp4-remuxer]: It is approximately " + lt / 90 + " ms to the next segment; using duration " + L / 90 + " ms for the last video frame.")) : L = st
                                        } else L = st
                                    }
                                    var ut = Math.round(Q.pts - Q.dts);
                                    g.push(new E(Q.key, L, $, ut))
                                }
                                if (g.length && v && v < 70) {
                                    var ht = g[0].flags;
                                    ht.dependsOn = 2, ht.isNonSync = 0
                                }
                                L = z || !L ? I : L, this.nextAvcDts = b = a + L, this.videoSampleDuration = L, this.isVideoContiguous = !0;
                                var dt = {
                                    data1: o.moof(t.sequenceNumber++, n, f({}, t, {
                                        samples: g
                                    })),
                                    data2: Y,
                                    startPTS: k / s,
                                    endPTS: (R + L) / s,
                                    startDTS: n / s,
                                    endDTS: b / s,
                                    type: "video",
                                    hasAudio: !1,
                                    hasVideo: !0,
                                    nb: g.length,
                                    dropped: t.dropped
                                };
                                return t.samples = [], t.dropped = 0, dt
                            }, e.remuxAudio = function (t, e, i, r, a) {
                                var s = t.inputTimeScale,
                                    d = s / (t.samplerate ? t.samplerate : s),
                                    c = "aac" === t.segmentCodec ? 1024 : 1152,
                                    v = c * d,
                                    g = this._initPTS,
                                    p = "mp3" === t.segmentCodec && this.typeSupported.mpeg,
                                    m = [],
                                    y = void 0 !== a,
                                    b = t.samples,
                                    S = p ? 0 : 8,
                                    L = this.nextAudioPts || -1,
                                    k = e * s;
                                if (this.isAudioContiguous = i = i || b.length && L > 0 && (r && Math.abs(k - L) < 9e3 || Math.abs(T(b[0].pts - g, k) - L) < 20 * v), b.forEach((function (t) {
                                        t.pts = T(t.pts - g, k)
                                    })), !i || L < 0) {
                                    if (!(b = b.filter((function (t) {
                                            return t.pts >= 0
                                        }))).length) return;
                                    L = 0 === a ? 0 : r && !y ? Math.max(0, k) : b[0].pts
                                }
                                if ("aac" === t.segmentCodec)
                                    for (var R = this.config.maxAudioFramesDrift, A = 0, _ = L; A < b.length; A++) {
                                        var D = b[A],
                                            O = D.pts,
                                            C = O - _,
                                            I = Math.abs(1e3 * C / s);
                                        if (C <= -R * v && y) 0 === A && (h.b.warn("Audio frame @ " + (O / s).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * C / s) + " ms."), this.nextAudioPts = L = _ = O);
                                        else if (C >= R * v && I < 1e4 && y) {
                                            var w = Math.round(C / v);
                                            (_ = O - w * v) < 0 && (w--, _ += v), 0 === A && (this.nextAudioPts = L = _), h.b.warn("[mp4-remuxer]: Injecting " + w + " audio frame @ " + (_ / s).toFixed(3) + "s due to " + Math.round(1e3 * C / s) + " ms gap.");
                                            for (var x = 0; x < w; x++) {
                                                var P = Math.max(_, 0),
                                                    M = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                                M || (h.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), M = D.unit.subarray()), b.splice(A, 0, {
                                                    unit: M,
                                                    pts: P
                                                }), _ += v, A++
                                            }
                                        }
                                        D.pts = _, _ += v
                                    }
                                for (var F, N = null, U = null, B = 0, j = b.length; j--;) B += b[j].unit.byteLength;
                                for (var G = 0, H = b.length; G < H; G++) {
                                    var K = b[G],
                                        V = K.unit,
                                        W = K.pts;
                                    if (null !== U) m[G - 1].duration = Math.round((W - U) / d);
                                    else {
                                        if (i && "aac" === t.segmentCodec && (W = L), N = W, !(B > 0)) return;
                                        B += S;
                                        try {
                                            F = new Uint8Array(B)
                                        } catch (t) {
                                            return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                                                type: u.b.MUX_ERROR,
                                                details: u.a.REMUX_ALLOC_ERROR,
                                                fatal: !1,
                                                bytes: B,
                                                reason: "fail allocating audio mdat " + B
                                            })
                                        }
                                        p || (new DataView(F.buffer).setUint32(0, B), F.set(o.types.mdat, 4))
                                    }
                                    F.set(V, S);
                                    var Y = V.byteLength;
                                    S += Y, m.push(new E(!0, c, Y, 0)), U = W
                                }
                                var q = m.length;
                                if (q) {
                                    var X = m[m.length - 1];
                                    this.nextAudioPts = L = U + d * X.duration;
                                    var z = p ? new Uint8Array(0) : o.moof(t.sequenceNumber++, N / d, f({}, t, {
                                        samples: m
                                    }));
                                    t.samples = [];
                                    var Z = N / s,
                                        Q = L / s,
                                        J = {
                                            data1: z,
                                            data2: F,
                                            startPTS: Z,
                                            endPTS: Q,
                                            startDTS: Z,
                                            endDTS: Q,
                                            type: "audio",
                                            hasAudio: !0,
                                            hasVideo: !1,
                                            nb: q
                                        };
                                    return this.isAudioContiguous = !0, J
                                }
                            }, e.remuxEmptyAudio = function (t, e, i, r) {
                                var a = t.inputTimeScale,
                                    s = a / (t.samplerate ? t.samplerate : a),
                                    o = this.nextAudioPts,
                                    l = (null !== o ? o : r.startDTS * a) + this._initDTS,
                                    u = r.endDTS * a + this._initDTS,
                                    d = 1024 * s,
                                    c = Math.ceil((u - l) / d),
                                    f = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                if (h.b.warn("[mp4-remuxer]: remux empty Audio"), f) {
                                    for (var v = [], g = 0; g < c; g++) {
                                        var p = l + g * d;
                                        v.push({
                                            unit: f,
                                            pts: p,
                                            dts: p
                                        })
                                    }
                                    return t.samples = v, this.remuxAudio(t, e, i, !1)
                                }
                                h.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
                            }, t
                        }();
                    function T(t, e) {
                        var i;
                        if (null === e) return t;
                        for (i = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += i;
                        return t
                    }
                    function y(t, e, i, r) {
                        var n = t.samples.length;
                        if (n) {
                            for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                                var o = t.samples[s];
                                o.pts = T(o.pts - i, e * a) / a, o.dts = T(o.dts - r, e * a) / a
                            }
                            var l = t.samples;
                            return t.samples = [], {
                                samples: l
                            }
                        }
                    }
                    function b(t, e, i) {
                        var r = t.samples.length;
                        if (r) {
                            for (var n = t.inputTimeScale, a = 0; a < r; a++) {
                                var s = t.samples[a];
                                s.pts = T(s.pts - i, e * n) / n
                            }
                            t.samples.sort((function (t, e) {
                                return t.pts - e.pts
                            }));
                            var o = t.samples;
                            return t.samples = [], {
                                samples: o
                            }
                        }
                    }
                    var E = function (t, e, i, r) {
                            this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = i, this.cts = r, this.flags = new S(t)
                        },
                        S = function (t) {
                            this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
                        }
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return r
                    }));
                    var r = function () {
                        this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                            start: 0,
                            first: 0,
                            end: 0
                        }, this.parsing = {
                            start: 0,
                            end: 0
                        }, this.buffering = {
                            start: 0,
                            first: 0,
                            end: 0
                        }
                    }
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return r
                    }));
                    var r = function () {
                        function t() {
                            this.chunks = [], this.dataLength = 0
                        }
                        var e = t.prototype;
                        return e.push = function (t) {
                            this.chunks.push(t), this.dataLength += t.length
                        }, e.flush = function () {
                            var t, e = this.chunks,
                                i = this.dataLength;
                            return e.length ? (t = 1 === e.length ? e[0] : function (t, e) {
                                for (var i = new Uint8Array(e), r = 0, n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    i.set(a, r), r += a.length
                                }
                                return i
                            }(e, i), this.reset(), t) : new Uint8Array(0)
                        }, e.reset = function () {
                            this.chunks.length = 0, this.dataLength = 0
                        }, t
                    }()
                }, function (t, e, i) {
                    "use strict";
                    var r = Object.prototype.hasOwnProperty,
                        n = "~";
                    function a() {}
                    function s(t, e, i) {
                        this.fn = t, this.context = e, this.once = i || !1
                    }
                    function o(t, e, i, r, a) {
                        if ("function" != typeof i) throw new TypeError("The listener must be a function");
                        var o = new s(i, r || t, a),
                            l = n ? n + e : e;
                        return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
                    }
                    function l(t, e) {
                        0 == --t._eventsCount ? t._events = new a : delete t._events[e]
                    }
                    function u() {
                        this._events = new a, this._eventsCount = 0
                    }
                    Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (n = !1)), u.prototype.eventNames = function () {
                        var t, e, i = [];
                        if (0 === this._eventsCount) return i;
                        for (e in t = this._events) r.call(t, e) && i.push(n ? e.slice(1) : e);
                        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
                    }, u.prototype.listeners = function (t) {
                        var e = n ? n + t : t,
                            i = this._events[e];
                        if (!i) return [];
                        if (i.fn) return [i.fn];
                        for (var r = 0, a = i.length, s = new Array(a); r < a; r++) s[r] = i[r].fn;
                        return s
                    }, u.prototype.listenerCount = function (t) {
                        var e = n ? n + t : t,
                            i = this._events[e];
                        return i ? i.fn ? 1 : i.length : 0
                    }, u.prototype.emit = function (t, e, i, r, a, s) {
                        var o = n ? n + t : t;
                        if (!this._events[o]) return !1;
                        var l, u, h = this._events[o],
                            d = arguments.length;
                        if (h.fn) {
                            switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
                            case 1:
                                return h.fn.call(h.context), !0;
                            case 2:
                                return h.fn.call(h.context, e), !0;
                            case 3:
                                return h.fn.call(h.context, e, i), !0;
                            case 4:
                                return h.fn.call(h.context, e, i, r), !0;
                            case 5:
                                return h.fn.call(h.context, e, i, r, a), !0;
                            case 6:
                                return h.fn.call(h.context, e, i, r, a, s), !0
                            }
                            for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                            h.fn.apply(h.context, l)
                        } else {
                            var c, f = h.length;
                            for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
                            case 1:
                                h[u].fn.call(h[u].context);
                                break;
                            case 2:
                                h[u].fn.call(h[u].context, e);
                                break;
                            case 3:
                                h[u].fn.call(h[u].context, e, i);
                                break;
                            case 4:
                                h[u].fn.call(h[u].context, e, i, r);
                                break;
                            default:
                                if (!l)
                                    for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                                h[u].fn.apply(h[u].context, l)
                            }
                        }
                        return !0
                    }, u.prototype.on = function (t, e, i) {
                        return o(this, t, e, i, !1)
                    }, u.prototype.once = function (t, e, i) {
                        return o(this, t, e, i, !0)
                    }, u.prototype.removeListener = function (t, e, i, r) {
                        var a = n ? n + t : t;
                        if (!this._events[a]) return this;
                        if (!e) return l(this, a), this;
                        var s = this._events[a];
                        if (s.fn) s.fn !== e || r && !s.once || i && s.context !== i || l(this, a);
                        else {
                            for (var o = 0, u = [], h = s.length; o < h; o++)(s[o].fn !== e || r && !s[o].once || i && s[o].context !== i) && u.push(s[o]);
                            u.length ? this._events[a] = 1 === u.length ? u[0] : u : l(this, a)
                        }
                        return this
                    }, u.prototype.removeAllListeners = function (t) {
                        var e;
                        return t ? (e = n ? n + t : t, this._events[e] && l(this, e)) : (this._events = new a, this._eventsCount = 0), this
                    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, t.exports = u
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return u
                    }));
                    var r = function () {
                            function t(t, e) {
                                this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                            }
                            return t.prototype.decrypt = function (t, e) {
                                return this.subtle.decrypt({
                                    name: "AES-CBC",
                                    iv: this.aesIV
                                }, e, t)
                            }, t
                        }(),
                        n = function () {
                            function t(t, e) {
                                this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                            }
                            return t.prototype.expandKey = function () {
                                return this.subtle.importKey("raw", this.key, {
                                    name: "AES-CBC"
                                }, !1, ["encrypt", "decrypt"])
                            }, t
                        }(),
                        a = i(10),
                        s = function () {
                            function t() {
                                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                            }
                            var e = t.prototype;
                            return e.uint8ArrayToUint32Array_ = function (t) {
                                for (var e = new DataView(t), i = new Uint32Array(4), r = 0; r < 4; r++) i[r] = e.getUint32(4 * r);
                                return i
                            }, e.initTable = function () {
                                var t = this.sBox,
                                    e = this.invSBox,
                                    i = this.subMix,
                                    r = i[0],
                                    n = i[1],
                                    a = i[2],
                                    s = i[3],
                                    o = this.invSubMix,
                                    l = o[0],
                                    u = o[1],
                                    h = o[2],
                                    d = o[3],
                                    c = new Uint32Array(256),
                                    f = 0,
                                    v = 0,
                                    g = 0;
                                for (g = 0; g < 256; g++) c[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                                for (g = 0; g < 256; g++) {
                                    var p = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                                    p = p >>> 8 ^ 255 & p ^ 99, t[f] = p, e[p] = f;
                                    var m = c[f],
                                        T = c[m],
                                        y = c[T],
                                        b = 257 * c[p] ^ 16843008 * p;
                                    r[f] = b << 24 | b >>> 8, n[f] = b << 16 | b >>> 16, a[f] = b << 8 | b >>> 24, s[f] = b, b = 16843009 * y ^ 65537 * T ^ 257 * m ^ 16843008 * f, l[p] = b << 24 | b >>> 8, u[p] = b << 16 | b >>> 16, h[p] = b << 8 | b >>> 24, d[p] = b, f ? (f = m ^ c[c[c[y ^ m]]], v ^= c[c[v]]) : f = v = 1
                                }
                            }, e.expandKey = function (t) {
                                for (var e = this.uint8ArrayToUint32Array_(t), i = !0, r = 0; r < e.length && i;) i = e[r] === this.key[r], r++;
                                if (!i) {
                                    this.key = e;
                                    var n = this.keySize = e.length;
                                    if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                                    var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1),
                                        h = this.keySchedule = new Uint32Array(u),
                                        d = this.invKeySchedule = new Uint32Array(u),
                                        c = this.sBox,
                                        f = this.rcon,
                                        v = this.invSubMix,
                                        g = v[0],
                                        p = v[1],
                                        m = v[2],
                                        T = v[3];
                                    for (a = 0; a < u; a++) a < n ? o = h[a] = e[a] : (l = o, a % n == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[a] = o = (h[a - n] ^ l) >>> 0);
                                    for (s = 0; s < u; s++) a = u - s, l = 3 & s ? h[a] : h[a - 4], d[s] = s < 4 || a <= 4 ? l : g[c[l >>> 24]] ^ p[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ T[c[255 & l]], d[s] = d[s] >>> 0
                                }
                            }, e.networkToHostOrderSwap = function (t) {
                                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                            }, e.decrypt = function (t, e, i) {
                                for (var r, n, a, s, o, l, u, h, d, c, f, v, g, p, m = this.keySize + 6, T = this.invKeySchedule, y = this.invSBox, b = this.invSubMix, E = b[0], S = b[1], L = b[2], k = b[3], R = this.uint8ArrayToUint32Array_(i), A = R[0], _ = R[1], D = R[2], O = R[3], C = new Int32Array(t), I = new Int32Array(C.length), w = this.networkToHostOrderSwap; e < C.length;) {
                                    for (d = w(C[e]), c = w(C[e + 1]), f = w(C[e + 2]), v = w(C[e + 3]), o = d ^ T[0], l = v ^ T[1], u = f ^ T[2], h = c ^ T[3], g = 4, p = 1; p < m; p++) r = E[o >>> 24] ^ S[l >> 16 & 255] ^ L[u >> 8 & 255] ^ k[255 & h] ^ T[g], n = E[l >>> 24] ^ S[u >> 16 & 255] ^ L[h >> 8 & 255] ^ k[255 & o] ^ T[g + 1], a = E[u >>> 24] ^ S[h >> 16 & 255] ^ L[o >> 8 & 255] ^ k[255 & l] ^ T[g + 2], s = E[h >>> 24] ^ S[o >> 16 & 255] ^ L[l >> 8 & 255] ^ k[255 & u] ^ T[g + 3], o = r, l = n, u = a, h = s, g += 4;
                                    r = y[o >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[u >> 8 & 255] << 8 ^ y[255 & h] ^ T[g], n = y[l >>> 24] << 24 ^ y[u >> 16 & 255] << 16 ^ y[h >> 8 & 255] << 8 ^ y[255 & o] ^ T[g + 1], a = y[u >>> 24] << 24 ^ y[h >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & l] ^ T[g + 2], s = y[h >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & u] ^ T[g + 3], I[e] = w(r ^ A), I[e + 1] = w(s ^ _), I[e + 2] = w(a ^ D), I[e + 3] = w(n ^ O), A = d, _ = c, D = f, O = v, e += 4
                                }
                                return I.buffer
                            }, t
                        }(),
                        o = i(1),
                        l = i(5),
                        u = function () {
                            function t(t, e, i) {
                                var r = (void 0 === i ? {} : i).removePKCS7Padding,
                                    n = void 0 === r || r;
                                if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = n, n) try {
                                    var a = self.crypto;
                                    a && (this.subtle = a.subtle || a.webkitSubtle)
                                } catch (t) {}
                                null === this.subtle && (this.config.enableSoftwareAES = !0)
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                this.observer = null
                            }, e.isSync = function () {
                                return this.config.enableSoftwareAES
                            }, e.flush = function () {
                                var t = this.currentResult;
                                if (t) {
                                    var e, i, r, n = new Uint8Array(t);
                                    return this.reset(), this.removePKCS7Padding ? (r = (i = (e = n).byteLength) && new DataView(e.buffer).getUint8(i - 1)) ? Object(a.a)(e, 0, i - r) : e : n
                                }
                                this.reset()
                            }, e.reset = function () {
                                this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                            }, e.decrypt = function (t, e, i, r) {
                                if (this.config.enableSoftwareAES) {
                                    this.softwareDecrypt(new Uint8Array(t), e, i);
                                    var n = this.flush();
                                    n && r(n.buffer)
                                } else this.webCryptoDecrypt(new Uint8Array(t), e, i).then(r)
                            }, e.softwareDecrypt = function (t, e, i) {
                                var r = this.currentIV,
                                    n = this.currentResult,
                                    o = this.remainderData;
                                this.logOnce("JS AES decrypt"), o && (t = Object(l.b)(o, t), this.remainderData = null);
                                var u = this.getValidChunk(t);
                                if (!u.length) return null;
                                r && (i = r);
                                var h = this.softwareDecrypter;
                                h || (h = this.softwareDecrypter = new s), h.expandKey(e);
                                var d = n;
                                return this.currentResult = h.decrypt(u.buffer, 0, i), this.currentIV = Object(a.a)(u, -16).buffer, d || null
                            }, e.webCryptoDecrypt = function (t, e, i) {
                                var a = this,
                                    s = this.subtle;
                                return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new n(s, e)), this.fastAesKey.expandKey().then((function (e) {
                                    return s ? new r(s, i).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
                                })).catch((function (r) {
                                    return a.onWebCryptoError(r, t, e, i)
                                }))
                            }, e.onWebCryptoError = function (t, e, i, r) {
                                return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(e, i, r)
                            }, e.getValidChunk = function (t) {
                                var e = t,
                                    i = t.length - t.length % 16;
                                return i !== t.length && (e = Object(a.a)(t, 0, i), this.remainderData = Object(a.a)(t, i)), e
                            }, e.logOnce = function (t) {
                                this.logEnabled && (o.b.log("[decrypter.ts]: " + t), this.logEnabled = !1)
                            }, t
                        }()
                }, function (t, e, i) {
                    "use strict";
                    i.d(e, "a", (function () {
                        return a
                    }));
                    var r = i(12);
                    function n(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var a = function () {
                        function t(t, e) {
                            this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = e ? Object(r.buildAbsoluteURL)(t, e, {
                                alwaysNormalize: !0
                            }) : t
                        }
                        var e, i;
                        return t.fromURL = function (e, i) {
                            return new t(e, i)
                        }, t.fromURI = function (e) {
                            return new t(e)
                        }, e = t, (i = [{
                            key: "uri",
                            get: function () {
                                return this._uri
                            }
                        }]) && n(e.prototype, i), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }()
                }, function (t, e, i) {
                    function r(t) {
                        var e = {};
                        function i(r) {
                            if (e[r]) return e[r].exports;
                            var n = e[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                        }
                        i.m = t, i.c = e, i.i = function (t) {
                            return t
                        }, i.d = function (t, e, r) {
                            i.o(t, e) || Object.defineProperty(t, e, {
                                configurable: !1,
                                enumerable: !0,
                                get: r
                            })
                        }, i.r = function (t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                        }, i.n = function (t) {
                            var e = t && t.__esModule ? function () {
                                return t.default
                            } : function () {
                                return t
                            };
                            return i.d(e, "a", e), e
                        }, i.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }, i.p = "/", i.oe = function (t) {
                            throw console.error(t), t
                        };
                        var r = i(i.s = ENTRY_MODULE);
                        return r.default || r
                    }
                    function n(t) {
                        return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                    }
                    function a(t, e, r) {
                        var a = {};
                        a[r] = [];
                        var s = e.toString(),
                            o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                        if (!o) return a;
                        for (var l, u = o[1], h = new RegExp("(\\\\n|\\W)" + n(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = h.exec(s);) "dll-reference" !== l[3] && a[r].push(l[3]);
                        for (h = new RegExp("\\(" + n(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = h.exec(s);) t[l[2]] || (a[r].push(l[1]), t[l[2]] = i(l[1]).m), a[l[2]] = a[l[2]] || [], a[l[2]].push(l[4]);
                        for (var d, c = Object.keys(a), f = 0; f < c.length; f++)
                            for (var v = 0; v < a[c[f]].length; v++) d = a[c[f]][v], isNaN(1 * d) || (a[c[f]][v] = 1 * a[c[f]][v]);
                        return a
                    }
                    function s(t) {
                        return Object.keys(t).reduce((function (e, i) {
                            return e || t[i].length > 0
                        }), !1)
                    }
                    t.exports = function (t, e) {
                        e = e || {};
                        var n = {
                                main: i.m
                            },
                            o = e.all ? {
                                main: Object.keys(n.main)
                            } : function (t, e) {
                                for (var i = {
                                        main: [e]
                                    }, r = {
                                        main: []
                                    }, n = {
                                        main: {}
                                    }; s(i);)
                                    for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                                        var u = o[l],
                                            h = i[u].pop();
                                        if (n[u] = n[u] || {}, !n[u][h] && t[u][h]) {
                                            n[u][h] = !0, r[u] = r[u] || [], r[u].push(h);
                                            for (var d = a(t, t[u][h], u), c = Object.keys(d), f = 0; f < c.length; f++) i[c[f]] = i[c[f]] || [], i[c[f]] = i[c[f]].concat(d[c[f]])
                                        }
                                    }
                                return r
                            }(n, t),
                            l = "";
                        Object.keys(o).filter((function (t) {
                            return "main" !== t
                        })).forEach((function (t) {
                            for (var e = 0; o[t][e];) e++;
                            o[t].push(e), n[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + t + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o[t].map((function (e) {
                                return JSON.stringify(e) + ": " + n[t][e].toString()
                            })).join(",") + "});\n"
                        })), l = l + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o.main.map((function (t) {
                            return JSON.stringify(t) + ": " + n.main[t].toString()
                        })).join(",") + "}))(self);";
                        var u = new window.Blob([l], {
                            type: "text/javascript"
                        });
                        if (e.bare) return u;
                        var h = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
                            d = new window.Worker(h);
                        return d.objectURL = h, d
                    }
                }, function (t, e, i) {
                    "use strict";
                    i.r(e), i.d(e, "default", (function () {
                        return o
                    }));
                    var r = i(11),
                        n = i(0),
                        a = i(1),
                        s = i(16);
                    function o(t) {
                        var e = new s.EventEmitter,
                            i = function (e, i) {
                                t.postMessage({
                                    event: e,
                                    data: i
                                })
                            };
                        e.on(n.a.FRAG_DECRYPTED, i), e.on(n.a.ERROR, i), t.addEventListener("message", (function (n) {
                            var s = n.data;
                            switch (s.cmd) {
                            case "init":
                                var o = JSON.parse(s.config);
                                t.transmuxer = new r.c(e, s.typeSupported, o, s.vendor, s.id), Object(a.a)(o.debug),
                                    function () {
                                        var t = function (t) {
                                            a.b[t] = function (e) {
                                                i("workerLog", {
                                                    logType: t,
                                                    message: e
                                                })
                                            }
                                        };
                                        for (var e in a.b) t(e)
                                    }(), i("init", null);
                                break;
                            case "configure":
                                t.transmuxer.configure(s.config);
                                break;
                            case "demux":
                                var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                                Object(r.d)(u) ? u.then((function (e) {
                                    l(t, e)
                                })) : l(t, u);
                                break;
                            case "flush":
                                var d = s.chunkMeta,
                                    c = t.transmuxer.flush(d);
                                Object(r.d)(c) ? c.then((function (e) {
                                    h(t, e, d)
                                })) : h(t, c, d)
                            }
                        }))
                    }
                    function l(t, e) {
                        if (!((i = e.remuxResult).audio || i.video || i.text || i.id3 || i.initSegment)) return !1;
                        var i, r = [],
                            n = e.remuxResult,
                            a = n.audio,
                            s = n.video;
                        return a && u(r, a), s && u(r, s), t.postMessage({
                            event: "transmuxComplete",
                            data: e
                        }, r), !0
                    }
                    function u(t, e) {
                        e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
                    }
                    function h(t, e, i) {
                        e.reduce((function (e, i) {
                            return l(t, i) || e
                        }), !1) || t.postMessage({
                            event: "transmuxComplete",
                            data: e[0]
                        }), t.postMessage({
                            event: "flush",
                            data: i
                        })
                    }
                }, function (t, e, i) {
                    "use strict";
                    i.r(e), i.d(e, "default", (function () {
                        return ur
                    }));
                    var r, n = i(12),
                        a = i(3),
                        s = i(0),
                        o = i(2),
                        l = i(1),
                        u = i(5),
                        h = /^(\d+)x(\d+)$/,
                        d = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                        c = function () {
                            function t(e) {
                                for (var i in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(i) && (this[i] = e[i])
                            }
                            var e = t.prototype;
                            return e.decimalInteger = function (t) {
                                var e = parseInt(this[t], 10);
                                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                            }, e.hexadecimalInteger = function (t) {
                                if (this[t]) {
                                    var e = (this[t] || "0x").slice(2);
                                    e = (1 & e.length ? "0" : "") + e;
                                    for (var i = new Uint8Array(e.length / 2), r = 0; r < e.length / 2; r++) i[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
                                    return i
                                }
                                return null
                            }, e.hexadecimalIntegerAsNumber = function (t) {
                                var e = parseInt(this[t], 16);
                                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                            }, e.decimalFloatingPoint = function (t) {
                                return parseFloat(this[t])
                            }, e.optionalFloat = function (t, e) {
                                var i = this[t];
                                return i ? parseFloat(i) : e
                            }, e.enumeratedString = function (t) {
                                return this[t]
                            }, e.bool = function (t) {
                                return "YES" === this[t]
                            }, e.decimalResolution = function (t) {
                                var e = h.exec(this[t]);
                                if (null !== e) return {
                                    width: parseInt(e[1], 10),
                                    height: parseInt(e[2], 10)
                                }
                            }, t.parseAttrList = function (t) {
                                var e, i = {};
                                for (d.lastIndex = 0; null !== (e = d.exec(t));) {
                                    var r = e[2];
                                    0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1)), i[e[1]] = r
                                }
                                return i
                            }, t
                        }();
                    function f() {
                        return (f = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    function v(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }! function (t) {
                        t.ID = "ID", t.CLASS = "CLASS", t.START_DATE = "START-DATE", t.DURATION = "DURATION", t.END_DATE = "END-DATE", t.END_ON_NEXT = "END-ON-NEXT", t.PLANNED_DURATION = "PLANNED-DURATION", t.SCTE35_OUT = "SCTE35-OUT", t.SCTE35_IN = "SCTE35-IN"
                    }(r || (r = {}));
                    var g = function () {
                            function t(t, e) {
                                if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
                                    var i = e.attr;
                                    for (var n in i)
                                        if (Object.prototype.hasOwnProperty.call(t, n) && t[n] !== i[n]) {
                                            l.b.warn('DATERANGE tag attribute: "' + n + '" does not match for tags with ID: "' + t.ID + '"'), this._badValueForSameId = n;
                                            break
                                        } t = f(new c({}), i, t)
                                }
                                if (this.attr = t, this._startDate = new Date(t[r.START_DATE]), r.END_DATE in this.attr) {
                                    var s = new Date(this.attr[r.END_DATE]);
                                    Object(a.a)(s.getTime()) && (this._endDate = s)
                                }
                            }
                            var e, i;
                            return e = t, (i = [{
                                key: "id",
                                get: function () {
                                    return this.attr.ID
                                }
                            }, {
                                key: "class",
                                get: function () {
                                    return this.attr.CLASS
                                }
                            }, {
                                key: "startDate",
                                get: function () {
                                    return this._startDate
                                }
                            }, {
                                key: "endDate",
                                get: function () {
                                    if (this._endDate) return this._endDate;
                                    var t = this.duration;
                                    return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
                                }
                            }, {
                                key: "duration",
                                get: function () {
                                    if (r.DURATION in this.attr) {
                                        var t = this.attr.decimalFloatingPoint(r.DURATION);
                                        if (Object(a.a)(t)) return t
                                    } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                                    return null
                                }
                            }, {
                                key: "plannedDuration",
                                get: function () {
                                    return r.PLANNED_DURATION in this.attr ? this.attr.decimalFloatingPoint(r.PLANNED_DURATION) : null
                                }
                            }, {
                                key: "endOnNext",
                                get: function () {
                                    return this.attr.bool(r.END_ON_NEXT)
                                }
                            }, {
                                key: "isValid",
                                get: function () {
                                    return !!this.id && !this._badValueForSameId && Object(a.a)(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
                                }
                            }]) && v(e.prototype, i), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }(),
                        p = i(6);
                    function m(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var T = function () {
                            function t(t) {
                                this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.txt = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.dateRanges = {}, this.url = t
                            }
                            var e, i;
                            return t.prototype.reloaded = function (t) {
                                if (!t) return this.advanced = !0, void(this.updated = !0);
                                var e = this.lastPartSn - t.lastPartSn,
                                    i = this.lastPartIndex - t.lastPartIndex;
                                this.updated = this.endSN !== t.endSN || !!i || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && i > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
                            }, e = t, (i = [{
                                key: "hasProgramDateTime",
                                get: function () {
                                    return !!this.fragments.length && Object(a.a)(this.fragments[this.fragments.length - 1].programDateTime)
                                }
                            }, {
                                key: "levelTargetDuration",
                                get: function () {
                                    return this.averagetargetduration || this.targetduration || 10
                                }
                            }, {
                                key: "drift",
                                get: function () {
                                    var t = this.driftEndTime - this.driftStartTime;
                                    return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                                }
                            }, {
                                key: "edge",
                                get: function () {
                                    return this.partEnd || this.fragmentEnd
                                }
                            }, {
                                key: "partEnd",
                                get: function () {
                                    var t;
                                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                                }
                            }, {
                                key: "fragmentEnd",
                                get: function () {
                                    var t;
                                    return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
                                }
                            }, {
                                key: "age",
                                get: function () {
                                    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                                }
                            }, {
                                key: "lastPartIndex",
                                get: function () {
                                    var t;
                                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
                                }
                            }, {
                                key: "lastPartSn",
                                get: function () {
                                    var t;
                                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                                }
                            }]) && m(e.prototype, i), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }(),
                        y = i(18),
                        b = {
                            audio: {
                                a3ds: !0,
                                "ac-3": !0,
                                "ac-4": !0,
                                alac: !0,
                                alaw: !0,
                                dra1: !0,
                                "dts+": !0,
                                "dts-": !0,
                                dtsc: !0,
                                dtse: !0,
                                dtsh: !0,
                                "ec-3": !0,
                                enca: !0,
                                g719: !0,
                                g726: !0,
                                m4ae: !0,
                                mha1: !0,
                                mha2: !0,
                                mhm1: !0,
                                mhm2: !0,
                                mlpa: !0,
                                mp4a: !0,
                                "raw ": !0,
                                Opus: !0,
                                samr: !0,
                                sawb: !0,
                                sawp: !0,
                                sevc: !0,
                                sqcp: !0,
                                ssmv: !0,
                                twos: !0,
                                ulaw: !0
                            },
                            video: {
                                avc1: !0,
                                avc2: !0,
                                avc3: !0,
                                avc4: !0,
                                avcp: !0,
                                av01: !0,
                                drac: !0,
                                dvav: !0,
                                dvhe: !0,
                                encv: !0,
                                hev1: !0,
                                hvc1: !0,
                                mjp2: !0,
                                mp4v: !0,
                                mvc1: !0,
                                mvc2: !0,
                                mvc3: !0,
                                mvc4: !0,
                                resv: !0,
                                rv60: !0,
                                s263: !0,
                                svc1: !0,
                                svc2: !0,
                                "vc-1": !0,
                                vp08: !0,
                                vp09: !0
                            },
                            text: {
                                stpp: !0,
                                wvtt: !0
                            }
                        };
                    function E(t, e) {
                        return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
                    }
                    var S = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
                        L = /#EXT-X-MEDIA:(.*)/g,
                        k = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
                        R = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
                        A = /\.(mp4|m4s|m4v|m4a)$/i,
                        _ = function () {
                            function t() {}
                            return t.findGroup = function (t, e) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    if (r.id === e) return r
                                }
                            }, t.convertAVC1ToAVCOTI = function (t) {
                                var e = t.split(".");
                                if (e.length > 2) {
                                    var i = e.shift() + ".";
                                    return (i += parseInt(e.shift()).toString(16)) + ("000" + parseInt(e.shift()).toString(16)).slice(-4)
                                }
                                return t
                            }, t.resolve = function (t, e) {
                                return n.buildAbsoluteURL(e, t, {
                                    alwaysNormalize: !0
                                })
                            }, t.parseMasterPlaylist = function (e, i) {
                                var r, n = [],
                                    a = {},
                                    s = !1;
                                for (S.lastIndex = 0; null != (r = S.exec(e));)
                                    if (r[1]) {
                                        var o = new c(r[1]),
                                            l = {
                                                attrs: o,
                                                bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                                                name: o.NAME,
                                                url: t.resolve(r[2], i)
                                            },
                                            u = o.decimalResolution("RESOLUTION");
                                        u && (l.width = u.width, l.height = u.height), D((o.CODECS || "").split(/[ ,]+/).filter((function (t) {
                                            return t
                                        })), l), l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec)), n.push(l)
                                    } else if (r[3]) {
                                    var h = new c(r[3]);
                                    h["DATA-ID"] && (s = !0, a[h["DATA-ID"]] = h)
                                }
                                return {
                                    levels: n,
                                    sessionData: s ? a : null
                                }
                            }, t.parseMasterPlaylistMedia = function (e, i, r, n) {
                                var a;
                                void 0 === n && (n = []);
                                var s = [],
                                    o = 0;
                                for (L.lastIndex = 0; null !== (a = L.exec(e));) {
                                    var l = new c(a[1]);
                                    if (l.TYPE === r) {
                                        var u = {
                                            attrs: l,
                                            bitrate: 0,
                                            id: o++,
                                            groupId: l["GROUP-ID"],
                                            instreamId: l["INSTREAM-ID"],
                                            name: l.NAME || l.LANGUAGE || "",
                                            type: r,
                                            default: l.bool("DEFAULT"),
                                            autoselect: l.bool("AUTOSELECT"),
                                            forced: l.bool("FORCED"),
                                            lang: l.LANGUAGE,
                                            url: l.URI ? t.resolve(l.URI, i) : ""
                                        };
                                        if (n.length) {
                                            var h = t.findGroup(n, u.groupId) || n[0];
                                            O(u, h, "audioCodec"), O(u, h, "textCodec")
                                        }
                                        s.push(u)
                                    }
                                }
                                return s
                            }, t.parseLevelPlaylist = function (t, e, i, r, s) {
                                var o, u, h, d = new T(e),
                                    f = d.fragments,
                                    v = null,
                                    m = 0,
                                    b = 0,
                                    E = 0,
                                    S = 0,
                                    L = null,
                                    _ = new p.b(r, e),
                                    D = -1,
                                    O = !1;
                                for (k.lastIndex = 0, d.txt = t; null !== (o = k.exec(t));) {
                                    O && (O = !1, (_ = new p.b(r, e)).start = E, _.sn = m, _.cc = S, _.level = i, v && (_.initSegment = v, _.rawProgramDateTime = v.rawProgramDateTime, v.rawProgramDateTime = null));
                                    var w = o[1];
                                    if (w) {
                                        _.duration = parseFloat(w);
                                        var x = (" " + o[2]).slice(1);
                                        _.title = x || null, _.tagList.push(x ? ["INF", w, x] : ["INF", w])
                                    } else if (o[3]) Object(a.a)(_.duration) && (_.start = E, h && (_.levelkey = h), _.sn = m, _.level = i, _.cc = S, _.urlId = s, f.push(_), _.relurl = (" " + o[3]).slice(1), C(_, L), L = _, E += _.duration, m++, b = 0, O = !0);
                                    else if (o[4]) {
                                        var P = (" " + o[4]).slice(1);
                                        L ? _.setByteRange(P, L) : _.setByteRange(P)
                                    } else if (o[5]) _.rawProgramDateTime = (" " + o[5]).slice(1), _.tagList.push(["PROGRAM-DATE-TIME", _.rawProgramDateTime]), -1 === D && (D = f.length);
                                    else {
                                        if (!(o = o[0].match(R))) {
                                            l.b.warn("No matches on slow regex match for level playlist!");
                                            continue
                                        }
                                        for (u = 1; u < o.length && void 0 === o[u]; u++);
                                        var M = (" " + o[u]).slice(1),
                                            F = (" " + o[u + 1]).slice(1),
                                            N = o[u + 2] ? (" " + o[u + 2]).slice(1) : "";
                                        switch (M) {
                                        case "PLAYLIST-TYPE":
                                            d.type = F.toUpperCase();
                                            break;
                                        case "MEDIA-SEQUENCE":
                                            m = d.startSN = parseInt(F);
                                            break;
                                        case "SKIP":
                                            var U = new c(F),
                                                B = U.decimalInteger("SKIPPED-SEGMENTS");
                                            if (Object(a.a)(B)) {
                                                d.skippedSegments = B;
                                                for (var j = B; j--;) f.unshift(null);
                                                m += B
                                            }
                                            var G = U.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                            G && (d.recentlyRemovedDateranges = G.split("\t"));
                                            break;
                                        case "TARGETDURATION":
                                            d.targetduration = parseFloat(F);
                                            break;
                                        case "VERSION":
                                            d.version = parseInt(F);
                                            break;
                                        case "EXTM3U":
                                            break;
                                        case "ENDLIST":
                                            d.live = !1;
                                            break;
                                        case "#":
                                            (F || N) && _.tagList.push(N ? [F, N] : [F]);
                                            break;
                                        case "DISCONTINUITY":
                                            S++, _.tagList.push(["DIS"]);
                                            break;
                                        case "GAP":
                                            _.tagList.push([M]);
                                            break;
                                        case "BITRATE":
                                            _.tagList.push([M, F]);
                                            break;
                                        case "DATERANGE":
                                            var H = new c(F),
                                                K = new g(H, d.dateRanges[H.ID]);
                                            K.isValid || d.skippedSegments ? d.dateRanges[K.id] = K : l.b.warn('Ignoring invalid DATERANGE tag: "' + F + '"'), _.tagList.push(["EXT-X-DATERANGE", F]);
                                            break;
                                        case "DISCONTINUITY-SEQUENCE":
                                            S = parseInt(F);
                                            break;
                                        case "KEY":
                                            var V, W = new c(F),
                                                Y = W.enumeratedString("METHOD"),
                                                q = W.URI,
                                                X = W.hexadecimalInteger("IV"),
                                                z = W.enumeratedString("KEYFORMATVERSIONS"),
                                                Z = W.enumeratedString("KEYID"),
                                                Q = null != (V = W.enumeratedString("KEYFORMAT")) ? V : "identity";
                                            if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(Q) > -1) {
                                                l.b.warn("Keyformat " + Q + " is not supported from the manifest");
                                                continue
                                            }
                                            if ("identity" !== Q) continue;
                                            Y && (h = y.a.fromURL(e, q), q && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(Y) >= 0 && (h.method = Y, h.keyFormat = Q, Z && (h.keyID = Z), z && (h.keyFormatVersions = z), h.iv = X));
                                            break;
                                        case "START":
                                            var J = new c(F).decimalFloatingPoint("TIME-OFFSET");
                                            Object(a.a)(J) && (d.startTimeOffset = J);
                                            break;
                                        case "MAP":
                                            var $ = new c(F);
                                            if (_.duration) {
                                                var tt = new p.b(r, e);
                                                I(tt, $, i, h), v = tt, _.initSegment = v, v.rawProgramDateTime && !_.rawProgramDateTime && (_.rawProgramDateTime = v.rawProgramDateTime)
                                            } else I(_, $, i, h), v = _, O = !0;
                                            break;
                                        case "SERVER-CONTROL":
                                            var et = new c(F);
                                            d.canBlockReload = et.bool("CAN-BLOCK-RELOAD"), d.canSkipUntil = et.optionalFloat("CAN-SKIP-UNTIL", 0), d.canSkipDateRanges = d.canSkipUntil > 0 && et.bool("CAN-SKIP-DATERANGES"), d.partHoldBack = et.optionalFloat("PART-HOLD-BACK", 0), d.holdBack = et.optionalFloat("HOLD-BACK", 0);
                                            break;
                                        case "PART-INF":
                                            var it = new c(F);
                                            d.partTarget = it.decimalFloatingPoint("PART-TARGET");
                                            break;
                                        case "PART":
                                            var rt = d.partList;
                                            rt || (rt = d.partList = []);
                                            var nt = b > 0 ? rt[rt.length - 1] : void 0,
                                                at = b++,
                                                st = new p.c(new c(F), _, e, at, nt);
                                            rt.push(st), _.duration += st.duration;
                                            break;
                                        case "PRELOAD-HINT":
                                            var ot = new c(F);
                                            d.preloadHint = ot;
                                            break;
                                        case "RENDITION-REPORT":
                                            var lt = new c(F);
                                            d.renditionReports = d.renditionReports || [], d.renditionReports.push(lt);
                                            break;
                                        default:
                                            l.b.warn("line parsed but not handled: " + o)
                                        }
                                    }
                                }
                                L && !L.relurl ? (f.pop(), E -= L.duration, d.partList && (d.fragmentHint = L)) : d.partList && (C(_, L), _.cc = S, d.fragmentHint = _);
                                var ut = f.length,
                                    ht = f[0],
                                    dt = f[ut - 1];
                                if ((E += d.skippedSegments * d.targetduration) > 0 && ut && dt) {
                                    d.averagetargetduration = E / ut;
                                    var ct = dt.sn;
                                    d.endSN = "initSegment" !== ct ? ct : 0, ht && (d.startCC = ht.cc, ht.initSegment || d.fragments.every((function (t) {
                                        return t.relurl && (e = t.relurl, A.test(null != (i = null === (r = n.parseURL(e)) || void 0 === r ? void 0 : r.path) ? i : ""));
                                        var e, i, r
                                    })) && (l.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete txt), trying to fetch SIDX"), (_ = new p.b(r, e)).relurl = dt.relurl, _.level = i, _.sn = "initSegment", ht.initSegment = _, d.needSidxRanges = !0))
                                } else d.endSN = 0, d.startCC = 0;
                                return d.fragmentHint && (E += d.fragmentHint.duration), d.totalduration = E, d.endCC = S, D > 0 && function (t, e) {
                                    for (var i = t[e], r = e; r--;) {
                                        var n = t[r];
                                        if (!n) return;
                                        n.programDateTime = i.programDateTime - 1e3 * n.duration, i = n
                                    }
                                }(f, D), d
                            }, t
                        }();
                    function D(t, e) {
                        ["video", "audio", "text"].forEach((function (i) {
                            var r = t.filter((function (t) {
                                return function (t, e) {
                                    var i = b[e];
                                    return !!i && !0 === i[t.slice(0, 4)]
                                }(t, i)
                            }));
                            if (r.length) {
                                var n = r.filter((function (t) {
                                    return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                }));
                                e[i + "Codec"] = n.length > 0 ? n[0] : r[0], t = t.filter((function (t) {
                                    return -1 === r.indexOf(t)
                                }))
                            }
                        })), e.unknownCodecs = t
                    }
                    function O(t, e, i) {
                        var r = e[i];
                        r && (t[i] = r)
                    }
                    function C(t, e) {
                        t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), Object(a.a)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
                    }
                    function I(t, e, i, r) {
                        t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = i, t.sn = "initSegment", r && (t.levelkey = r), t.initSegment = null
                    }
                    var w = i(4);
                    function x(t, e) {
                        var i = t.url;
                        return void 0 !== i && 0 !== i.indexOf("data:") || (i = e.url), i
                    }
                    var P = function () {
                            function t(t) {
                                this.hls = void 0, this.loaders = Object.create(null), this.hls = t, this.registerListeners()
                            }
                            var e = t.prototype;
                            return e.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(s.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                            }, e.unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(s.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                            }, e.createInternalLoader = function (t) {
                                var e = this.hls.config,
                                    i = e.pLoader,
                                    r = e.loader,
                                    n = new(i || r)(e);
                                return t.loader = n, this.loaders[t.type] = n, n
                            }, e.getInternalLoader = function (t) {
                                return this.loaders[t.type]
                            }, e.resetInternalLoader = function (t) {
                                this.loaders[t] && delete this.loaders[t]
                            }, e.destroyInternalLoaders = function () {
                                for (var t in this.loaders) {
                                    var e = this.loaders[t];
                                    e && e.destroy(), this.resetInternalLoader(t)
                                }
                            }, e.destroy = function () {
                                this.unregisterListeners(), this.destroyInternalLoaders()
                            }, e.onManifestLoading = function (t, e) {
                                var i = e.url;
                                this.load({
                                    id: null,
                                    groupId: null,
                                    level: 0,
                                    responseType: "text",
                                    type: w.a.MANIFEST,
                                    url: i,
                                    deliveryDirectives: null
                                })
                            }, e.onLevelLoading = function (t, e) {
                                var i = e.id,
                                    r = e.level,
                                    n = e.url,
                                    a = e.deliveryDirectives;
                                this.load({
                                    id: i,
                                    groupId: null,
                                    level: r,
                                    responseType: "text",
                                    type: w.a.LEVEL,
                                    url: n,
                                    deliveryDirectives: a
                                })
                            }, e.onAudioTrackLoading = function (t, e) {
                                var i = e.id,
                                    r = e.groupId,
                                    n = e.url,
                                    a = e.deliveryDirectives;
                                this.load({
                                    id: i,
                                    groupId: r,
                                    level: null,
                                    responseType: "text",
                                    type: w.a.AUDIO_TRACK,
                                    url: n,
                                    deliveryDirectives: a
                                })
                            }, e.onSubtitleTrackLoading = function (t, e) {
                                var i = e.id,
                                    r = e.groupId,
                                    n = e.url,
                                    a = e.deliveryDirectives;
                                this.load({
                                    id: i,
                                    groupId: r,
                                    level: null,
                                    responseType: "text",
                                    type: w.a.SUBTITLE_TRACK,
                                    url: n,
                                    deliveryDirectives: a
                                })
                            }, e.load = function (t) {
                                var e, i, r, n, a, s, o = this.hls.config,
                                    u = this.getInternalLoader(t);
                                if (u) {
                                    var h = u.context;
                                    if (h && h.url === t.url) return void l.b.trace("[playlist-loader]: playlist request ongoing");
                                    l.b.log("[playlist-loader]: aborting previous loader for type: " + t.type), u.abort()
                                }
                                switch (t.type) {
                                case w.a.MANIFEST:
                                    i = o.manifestLoadingMaxRetry, r = o.manifestLoadingTimeOut, n = o.manifestLoadingRetryDelay, a = o.manifestLoadingMaxRetryTimeout;
                                    break;
                                case w.a.LEVEL:
                                case w.a.AUDIO_TRACK:
                                case w.a.SUBTITLE_TRACK:
                                    i = 0, r = o.levelLoadingTimeOut;
                                    break;
                                default:
                                    i = o.levelLoadingMaxRetry, r = o.levelLoadingTimeOut, n = o.levelLoadingRetryDelay, a = o.levelLoadingMaxRetryTimeout
                                }
                                if (u = this.createInternalLoader(t), null !== (e = t.deliveryDirectives) && void 0 !== e && e.part && (t.type === w.a.LEVEL && null !== t.level ? s = this.hls.levels[t.level].details : t.type === w.a.AUDIO_TRACK && null !== t.id ? s = this.hls.audioTracks[t.id].details : t.type === w.a.SUBTITLE_TRACK && null !== t.id && (s = this.hls.subtitleTracks[t.id].details), s)) {
                                    var d = s.partTarget,
                                        c = s.targetduration;
                                    d && c && (r = Math.min(1e3 * Math.max(3 * d, .8 * c), r))
                                }
                                var f = {
                                        timeout: r,
                                        maxRetry: i,
                                        retryDelay: n,
                                        maxRetryDelay: a,
                                        highWaterMark: 0
                                    },
                                    v = {
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };
                                u.load(t, f, v)
                            }, e.loadsuccess = function (t, e, i, r) {
                                if (void 0 === r && (r = null), i.isSidxRequest) return this.handleSidxRequest(t, i), void this.handlePlaylistLoaded(t, e, i, r);
                                this.resetInternalLoader(i.type);
                                var n = t.data;
                                0 === n.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, i, r) : this.handleMasterPlaylist(t, e, i, r)) : this.handleManifestParsingError(t, i, "no EXTM3U delimiter", r)
                            }, e.loaderror = function (t, e, i) {
                                void 0 === i && (i = null), this.handleNetworkError(e, i, !1, t)
                            }, e.loadtimeout = function (t, e, i) {
                                void 0 === i && (i = null), this.handleNetworkError(e, i, !0)
                            }, e.handleMasterPlaylist = function (t, e, i, r) {
                                var n = this.hls,
                                    a = t.data,
                                    o = x(t, i),
                                    u = _.parseMasterPlaylist(a, o),
                                    h = u.levels,
                                    d = u.sessionData;
                                if (h.length) {
                                    var f = h.map((function (t) {
                                            return {
                                                id: t.attrs.AUDIO,
                                                audioCodec: t.audioCodec
                                            }
                                        })),
                                        v = h.map((function (t) {
                                            return {
                                                id: t.attrs.SUBTITLES,
                                                textCodec: t.textCodec
                                            }
                                        })),
                                        g = _.parseMasterPlaylistMedia(a, o, "AUDIO", f),
                                        p = _.parseMasterPlaylistMedia(a, o, "SUBTITLES", v),
                                        m = _.parseMasterPlaylistMedia(a, o, "CLOSED-CAPTIONS");
                                    g.length && (g.some((function (t) {
                                        return !t.url
                                    })) || !h[0].audioCodec || h[0].attrs.AUDIO || (l.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
                                        type: "main",
                                        name: "main",
                                        default: !1,
                                        autoselect: !1,
                                        forced: !1,
                                        id: -1,
                                        attrs: new c({}),
                                        bitrate: 0,
                                        url: ""
                                    }))), n.trigger(s.a.MANIFEST_LOADED, {
                                        levels: h,
                                        audioTracks: g,
                                        subtitles: p,
                                        captions: m,
                                        url: o,
                                        stats: e,
                                        networkDetails: r,
                                        sessionData: d
                                    })
                                } else this.handleManifestParsingError(t, i, "no level found in manifest", r)
                            }, e.handleTrackOrLevelPlaylist = function (t, e, i, r) {
                                var n = this.hls,
                                    l = i.id,
                                    u = i.level,
                                    h = i.type,
                                    d = x(t, i),
                                    f = Object(a.a)(l) ? l : 0,
                                    v = Object(a.a)(u) ? u : f,
                                    g = function (t) {
                                        switch (t.type) {
                                        case w.a.AUDIO_TRACK:
                                            return w.b.AUDIO;
                                        case w.a.SUBTITLE_TRACK:
                                            return w.b.SUBTITLE;
                                        default:
                                            return w.b.MAIN
                                        }
                                    }(i),
                                    p = _.parseLevelPlaylist(t.data, d, v, g, f);
                                if (p.fragments.length) {
                                    if (h === w.a.MANIFEST) {
                                        var m = {
                                            attrs: new c({}),
                                            bitrate: 0,
                                            details: p,
                                            name: "",
                                            url: d
                                        };
                                        n.trigger(s.a.MANIFEST_LOADED, {
                                            levels: [m],
                                            audioTracks: [],
                                            url: d,
                                            stats: e,
                                            networkDetails: r,
                                            sessionData: null
                                        })
                                    }
                                    if (e.parsing.end = performance.now(), p.needSidxRanges) {
                                        var T, y = null === (T = p.fragments[0].initSegment) || void 0 === T ? void 0 : T.url;
                                        this.load({
                                            url: y,
                                            isSidxRequest: !0,
                                            type: h,
                                            level: u,
                                            levelDetails: p,
                                            id: l,
                                            groupId: null,
                                            rangeStart: 0,
                                            rangeEnd: 2048,
                                            responseType: "arraybuffer",
                                            deliveryDirectives: null
                                        })
                                    } else i.levelDetails = p, this.handlePlaylistLoaded(t, e, i, r)
                                } else n.trigger(s.a.ERROR, {
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.LEVEL_EMPTY_ERROR,
                                    fatal: !1,
                                    url: d,
                                    reason: "no fragments found in level",
                                    level: "number" == typeof i.level ? i.level : void 0
                                })
                            }, e.handleSidxRequest = function (t, e) {
                                var i = new Uint8Array(t.data),
                                    r = Object(u.c)(i, ["sidx"])[0];
                                if (r) {
                                    var n = Object(u.k)(r);
                                    if (n) {
                                        var a = n.references,
                                            s = e.levelDetails;
                                        a.forEach((function (t, e) {
                                            var r = t.info,
                                                n = s.fragments[e];
                                            if (0 === n.byteRange.length && n.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start)), n.initSegment) {
                                                var a = Object(u.c)(i, ["moov"])[0],
                                                    o = a ? a.length : null;
                                                n.initSegment.setByteRange(String(o) + "@0")
                                            }
                                        }))
                                    }
                                }
                            }, e.handleManifestParsingError = function (t, e, i, r) {
                                this.hls.trigger(s.a.ERROR, {
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.MANIFEST_PARSING_ERROR,
                                    fatal: e.type === w.a.MANIFEST,
                                    url: t.url,
                                    reason: i,
                                    response: t,
                                    context: e,
                                    networkDetails: r
                                })
                            }, e.handleNetworkError = function (t, e, i, r) {
                                void 0 === i && (i = !1), l.b.warn("[playlist-loader]: A network " + (i ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
                                var n = o.a.UNKNOWN,
                                    a = !1,
                                    u = this.getInternalLoader(t);
                                switch (t.type) {
                                case w.a.MANIFEST:
                                    n = i ? o.a.MANIFEST_LOAD_TIMEOUT : o.a.MANIFEST_LOAD_ERROR, a = !0;
                                    break;
                                case w.a.LEVEL:
                                    n = i ? o.a.LEVEL_LOAD_TIMEOUT : o.a.LEVEL_LOAD_ERROR, a = !1;
                                    break;
                                case w.a.AUDIO_TRACK:
                                    n = i ? o.a.AUDIO_TRACK_LOAD_TIMEOUT : o.a.AUDIO_TRACK_LOAD_ERROR, a = !1;
                                    break;
                                case w.a.SUBTITLE_TRACK:
                                    n = i ? o.a.SUBTITLE_TRACK_LOAD_TIMEOUT : o.a.SUBTITLE_LOAD_ERROR, a = !1
                                }
                                u && this.resetInternalLoader(t.type);
                                var h = {
                                    type: o.b.NETWORK_ERROR,
                                    details: n,
                                    fatal: a,
                                    url: t.url,
                                    loader: u,
                                    context: t,
                                    networkDetails: e
                                };
                                r && (h.response = r), this.hls.trigger(s.a.ERROR, h)
                            }, e.handlePlaylistLoaded = function (t, e, i, r) {
                                var n = i.type,
                                    a = i.level,
                                    o = i.id,
                                    l = i.groupId,
                                    u = i.loader,
                                    h = i.levelDetails,
                                    d = i.deliveryDirectives;
                                if (null != h && h.targetduration) {
                                    if (u) switch (h.live && (u.getCacheAge && (h.ageHeader = u.getCacheAge() || 0), u.getCacheAge && !isNaN(h.ageHeader) || (h.ageHeader = 0)), n) {
                                    case w.a.MANIFEST:
                                    case w.a.LEVEL:
                                        this.hls.trigger(s.a.LEVEL_LOADED, {
                                            details: h,
                                            level: a || 0,
                                            id: o || 0,
                                            stats: e,
                                            networkDetails: r,
                                            deliveryDirectives: d
                                        });
                                        break;
                                    case w.a.AUDIO_TRACK:
                                        this.hls.trigger(s.a.AUDIO_TRACK_LOADED, {
                                            details: h,
                                            id: o || 0,
                                            groupId: l || "",
                                            stats: e,
                                            networkDetails: r,
                                            deliveryDirectives: d
                                        });
                                        break;
                                    case w.a.SUBTITLE_TRACK:
                                        this.hls.trigger(s.a.SUBTITLE_TRACK_LOADED, {
                                            details: h,
                                            id: o || 0,
                                            groupId: l || "",
                                            stats: e,
                                            networkDetails: r,
                                            deliveryDirectives: d
                                        })
                                    }
                                } else this.handleManifestParsingError(t, i, "invalid target duration", r)
                            }, t
                        }(),
                        M = function () {
                            function t(t) {
                                this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t, this._registerListeners()
                            }
                            var e = t.prototype;
                            return e._registerListeners = function () {
                                this.hls.on(s.a.KEY_LOADING, this.onKeyLoading, this)
                            }, e._unregisterListeners = function () {
                                this.hls.off(s.a.KEY_LOADING, this.onKeyLoading)
                            }, e.destroy = function () {
                                for (var t in this._unregisterListeners(), this.loaders) {
                                    var e = this.loaders[t];
                                    e && e.destroy()
                                }
                                this.loaders = {}
                            }, e.onKeyLoading = function (t, e) {
                                var i = e.frag,
                                    r = i.type,
                                    n = this.loaders[r];
                                if (i.decryptdata) {
                                    var a = i.decryptdata.uri;
                                    if (a !== this.decrypturl || null === this.decryptkey) {
                                        var o = this.hls.config;
                                        if (n && (l.b.warn("abort previous key loader for type:" + r), n.abort()), !a) return void l.b.warn("key uri is falsy");
                                        var u = o.loader,
                                            h = i.loader = this.loaders[r] = new u(o);
                                        this.decrypturl = a, this.decryptkey = null;
                                        var d = {
                                                url: a,
                                                frag: i,
                                                responseType: "arraybuffer"
                                            },
                                            c = {
                                                timeout: o.fragLoadingTimeOut,
                                                maxRetry: 0,
                                                retryDelay: o.fragLoadingRetryDelay,
                                                maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                                                highWaterMark: 0
                                            },
                                            f = {
                                                onSuccess: this.loadsuccess.bind(this),
                                                onError: this.loaderror.bind(this),
                                                onTimeout: this.loadtimeout.bind(this)
                                            };
                                        h.load(d, c, f)
                                    } else this.decryptkey && (i.decryptdata.key = this.decryptkey, this.hls.trigger(s.a.KEY_LOADED, {
                                        frag: i
                                    }))
                                } else l.b.warn("Missing decryption data on fragment in onKeyLoading")
                            }, e.loadsuccess = function (t, e, i) {
                                var r = i.frag;
                                r.decryptdata ? (this.decryptkey = r.decryptdata.key = new Uint8Array(t.data), r.loader = null, delete this.loaders[r.type], this.hls.trigger(s.a.KEY_LOADED, {
                                    frag: r
                                })) : l.b.error("after key load, decryptdata unset")
                            }, e.loaderror = function (t, e) {
                                var i = e.frag,
                                    r = i.loader;
                                r && r.abort(), delete this.loaders[i.type], this.hls.trigger(s.a.ERROR, {
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.KEY_LOAD_ERROR,
                                    fatal: !1,
                                    frag: i,
                                    response: t
                                })
                            }, e.loadtimeout = function (t, e) {
                                var i = e.frag,
                                    r = i.loader;
                                r && r.abort(), delete this.loaders[i.type], this.hls.trigger(s.a.ERROR, {
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.KEY_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: i
                                })
                            }, t
                        }();
                    function F(t, e) {
                        var i;
                        try {
                            i = new Event("addtrack")
                        } catch (t) {
                            (i = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                        }
                        i.track = t, e.dispatchEvent(i)
                    }
                    function N(t, e) {
                        var i = t.mode;
                        if ("disabled" === i && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
                            if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
                        } catch (i) {
                            l.b.debug("[texttrack-utils]: " + i);
                            var r = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                            r.id = e.id, t.addCue(r)
                        }
                        "disabled" === i && (t.mode = i)
                    }
                    function U(t) {
                        var e = t.mode;
                        if ("disabled" === e && (t.mode = "hidden"), t.cues)
                            for (var i = t.cues.length; i--;) t.removeCue(t.cues[i]);
                        "disabled" === e && (t.mode = e)
                    }
                    function B(t, e, i, r) {
                        var n = t.mode;
                        if ("disabled" === n && (t.mode = "hidden"), t.cues && t.cues.length > 0)
                            for (var a = function (t, e, i) {
                                    var r = [],
                                        n = function (t, e) {
                                            if (e < t[0].startTime) return 0;
                                            var i = t.length - 1;
                                            if (e > t[i].endTime) return -1;
                                            for (var r = 0, n = i; r <= n;) {
                                                var a = Math.floor((n + r) / 2);
                                                if (e < t[a].startTime) n = a - 1;
                                                else {
                                                    if (!(e > t[a].startTime && r < i)) return a;
                                                    r = a + 1
                                                }
                                            }
                                            return t[r].startTime - e < e - t[n].startTime ? r : n
                                        }(t, e);
                                    if (n > -1)
                                        for (var a = n, s = t.length; a < s; a++) {
                                            var o = t[a];
                                            if (o.startTime >= e && o.endTime <= i) r.push(o);
                                            else if (o.startTime > i) return r
                                        }
                                    return r
                                }(t.cues, e, i), s = 0; s < a.length; s++) r && !r(a[s]) || t.removeCue(a[s]);
                        "disabled" === n && (t.mode = n)
                    }
                    var j = i(7),
                        G = i(8);
                    function H() {
                        return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
                    }
                    function K(t, e) {
                        return t.getTime() / 1e3 - e
                    }
                    var V = function () {
                        function t(t) {
                            this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
                        }
                        var e = t.prototype;
                        return e.destroy = function () {
                            this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
                        }, e._registerListeners = function () {
                            var t = this.hls;
                            t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this)
                        }, e._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.a.LEVEL_UPDATED, this.onLevelUpdated, this)
                        }, e.onMediaAttached = function (t, e) {
                            this.media = e.media
                        }, e.onMediaDetaching = function () {
                            this.id3Track && (U(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
                        }, e.onManifestLoading = function () {
                            this.dateRangeCuesAppended = {}
                        }, e.createTrack = function (t) {
                            var e = this.getID3Track(t.textTracks);
                            return e.mode = "hidden", e
                        }, e.getID3Track = function (t) {
                            if (this.media) {
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    if ("metadata" === i.kind && "id3" === i.label) return F(i, this.media), i
                                }
                                return this.media.addTextTrack("metadata", "id3")
                            }
                        }, e.onFragParsingMetadata = function (t, e) {
                            if (this.media) {
                                var i = this.hls.config,
                                    r = i.enableEmsgMetadataCues,
                                    n = i.enableID3MetadataCues;
                                if (r || n) {
                                    var a = e.frag,
                                        s = e.samples,
                                        o = e.details;
                                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                                    for (var l = o.edge || a.end, u = H(), h = !1, d = {}, c = 0; c < s.length; c++) {
                                        var f = s[c].type;
                                        if ((f !== G.a.emsg || r) && n) {
                                            var v = j.c(s[c].data);
                                            if (v) {
                                                var g = s[c].pts,
                                                    p = l;
                                                p - g <= 0 && (p = g + .25);
                                                for (var m = 0; m < v.length; m++) {
                                                    var T = v[m];
                                                    if (!j.e(T)) {
                                                        var y = new u(g, p, "");
                                                        y.value = T, f && (y.type = f), this.id3Track.addCue(y), d[T.key] = null, h = !0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    h && this.updateId3CueEnds(d)
                                }
                            }
                        }, e.updateId3CueEnds = function (t) {
                            var e, i = null === (e = this.id3Track) || void 0 === e ? void 0 : e.cues;
                            if (i)
                                for (var r = i.length; r--;) {
                                    var n, a = i[r],
                                        s = null === (n = a.value) || void 0 === n ? void 0 : n.key;
                                    if (s && s in t) {
                                        var o = t[s];
                                        o && a.endTime !== o && (a.endTime = o), t[s] = a.startTime
                                    }
                                }
                        }, e.onBufferFlushing = function (t, e) {
                            var i = e.startOffset,
                                r = e.endOffset,
                                n = e.type,
                                a = this.id3Track,
                                s = this.hls;
                            if (s) {
                                var o = s.config,
                                    l = o.enableEmsgMetadataCues,
                                    u = o.enableID3MetadataCues;
                                a && (l || u) && B(a, i, r, "audio" === n ? function (t) {
                                    return t.type === G.a.audioId3 && u
                                } : "video" === n ? function (t) {
                                    return t.type === G.a.emsg && l
                                } : function (t) {
                                    return t.type === G.a.audioId3 && u || t.type === G.a.emsg && l
                                })
                            }
                        }, e.onLevelUpdated = function (t, e) {
                            var i = this,
                                n = e.details;
                            if (this.media && n.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
                                var s = this.dateRangeCuesAppended,
                                    o = this.id3Track,
                                    l = n.dateRanges,
                                    u = Object.keys(l);
                                if (o)
                                    for (var h = Object.keys(s).filter((function (t) {
                                            return !u.includes(t)
                                        })), d = function (t) {
                                            var e = h[t];
                                            Object.keys(s[e].cues).forEach((function (t) {
                                                o.removeCue(s[e].cues[t])
                                            })), delete s[e]
                                        }, c = h.length; c--;) d(c);
                                var f = n.fragments[n.fragments.length - 1];
                                if (0 !== u.length && Object(a.a)(null == f ? void 0 : f.programDateTime)) {
                                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                                    for (var v = f.programDateTime / 1e3 - f.start, g = n.edge || f.end, p = H(), m = function (t) {
                                            var e = u[t],
                                                n = l[e],
                                                a = s[e],
                                                o = (null == a ? void 0 : a.cues) || {},
                                                h = (null == a ? void 0 : a.durationKnown) || !1,
                                                d = K(n.startDate, v),
                                                c = g,
                                                f = n.endDate;
                                            if (f) c = K(f, v), h = !0;
                                            else if (n.endOnNext && !h) {
                                                var m = u.reduce((function (t, e) {
                                                    var i = l[e];
                                                    return i.class === n.class && i.id !== e && i.startDate > n.startDate && t.push(i), t
                                                }), []).sort((function (t, e) {
                                                    return t.startDate.getTime() - e.startDate.getTime()
                                                }))[0];
                                                m && (c = K(m.startDate, v), h = !0)
                                            }
                                            for (var T, y = Object.keys(n.attr), b = 0; b < y.length; b++) {
                                                var E = y[b];
                                                if (E !== r.ID && E !== r.CLASS && E !== r.START_DATE && E !== r.DURATION && E !== r.END_DATE && E !== r.END_ON_NEXT) {
                                                    var S = o[E];
                                                    if (S) h && !a.durationKnown && (S.endTime = c);
                                                    else {
                                                        var L = n.attr[E];
                                                        S = new p(d, c, ""), E !== r.SCTE35_OUT && E !== r.SCTE35_IN || (T = L, L = Uint8Array.from(T.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), S.value = {
                                                            key: E,
                                                            data: L
                                                        }, S.type = G.a.dateRange, i.id3Track.addCue(S), o[E] = S
                                                    }
                                                }
                                            }
                                            s[e] = {
                                                cues: o,
                                                dateRange: n,
                                                durationKnown: h
                                            }
                                        }, T = 0; T < u.length; T++) m(T)
                                }
                            }
                        }, t
                    }();
                    function W(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var Y, q = function () {
                        function t(t) {
                            var e = this;
                            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function () {
                                return e.timeupdate()
                            }, this.hls = t, this.config = t.config, this.registerListeners()
                        }
                        var e, i, r = t.prototype;
                        return r.destroy = function () {
                            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
                        }, r.registerListeners = function () {
                            this.hls.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(s.a.ERROR, this.onError, this)
                        }, r.unregisterListeners = function () {
                            this.hls.off(s.a.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(s.a.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(s.a.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(s.a.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(s.a.ERROR, this.onError)
                        }, r.onMediaAttached = function (t, e) {
                            this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
                        }, r.onMediaDetaching = function () {
                            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                        }, r.onManifestLoading = function () {
                            this.levelDetails = null, this._latency = null, this.stallCount = 0
                        }, r.onLevelUpdated = function (t, e) {
                            var i = e.details;
                            this.levelDetails = i, i.advanced && this.timeupdate(), !i.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                        }, r.onError = function (t, e) {
                            e.details === o.a.BUFFER_STALLED_ERROR && (this.stallCount++, l.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                        }, r.timeupdate = function () {
                            var t = this.media,
                                e = this.levelDetails;
                            if (t && e) {
                                this.currentTime = t.currentTime;
                                var i = this.computeLatency();
                                if (null !== i) {
                                    this._latency = i;
                                    var r = this.config,
                                        n = r.lowLatencyMode,
                                        a = r.maxLiveSyncPlaybackRate;
                                    if (n && 1 !== a) {
                                        var s = this.targetLatency;
                                        if (null !== s) {
                                            var o = i - s,
                                                l = o < Math.min(this.maxLatency, s + e.targetduration);
                                            if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                                var u = Math.min(2, Math.max(1, a)),
                                                    h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                                t.playbackRate = Math.min(u, Math.max(1, h))
                                            } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                                        }
                                    }
                                }
                            }
                        }, r.estimateLiveEdge = function () {
                            var t = this.levelDetails;
                            return null === t ? null : t.edge + t.age
                        }, r.computeLatency = function () {
                            var t = this.estimateLiveEdge();
                            return null === t ? null : t - this.currentTime
                        }, e = t, (i = [{
                            key: "latency",
                            get: function () {
                                return this._latency || 0
                            }
                        }, {
                            key: "maxLatency",
                            get: function () {
                                var t = this.config,
                                    e = this.levelDetails;
                                return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                            }
                        }, {
                            key: "targetLatency",
                            get: function () {
                                var t = this.levelDetails;
                                if (null === t) return null;
                                var e = t.holdBack,
                                    i = t.partHoldBack,
                                    r = t.targetduration,
                                    n = this.config,
                                    a = n.liveSyncDuration,
                                    s = n.liveSyncDurationCount,
                                    o = n.lowLatencyMode,
                                    l = this.hls.userConfig,
                                    u = o && i || e;
                                (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * r);
                                var h = r;
                                return u + Math.min(1 * this.stallCount, h)
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function () {
                                var t = this.estimateLiveEdge(),
                                    e = this.targetLatency,
                                    i = this.levelDetails;
                                if (null === t || null === e || null === i) return null;
                                var r = i.edge,
                                    n = t - e - this.edgeStalled,
                                    a = r - i.totalduration,
                                    s = r - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
                                return Math.min(Math.max(a, n), s)
                            }
                        }, {
                            key: "drift",
                            get: function () {
                                var t = this.levelDetails;
                                return null === t ? 1 : t.drift
                            }
                        }, {
                            key: "edgeStalled",
                            get: function () {
                                var t = this.levelDetails;
                                if (null === t) return 0;
                                var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                                return Math.max(t.age - e, 0)
                            }
                        }, {
                            key: "forwardBufferLength",
                            get: function () {
                                var t = this.media,
                                    e = this.levelDetails;
                                if (!t || !e) return 0;
                                var i = t.buffered.length;
                                return (i ? t.buffered.end(i - 1) : e.edge) - this.currentTime
                            }
                        }]) && W(e.prototype, i), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();
                    function X(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }! function (t) {
                        t.No = "", t.Yes = "YES", t.v2 = "v2"
                    }(Y || (Y = {}));
                    var z = function () {
                            function t(t, e, i) {
                                this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = i
                            }
                            return t.prototype.addDirectives = function (t) {
                                var e = new self.URL(t);
                                return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.toString()
                            }, t
                        }(),
                        Z = function () {
                            function t(t) {
                                this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this.attrs = t.attrs, this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter((function (t) {
                                    return t
                                })).join(",").replace(/\.[^.,]+/g, "")
                            }
                            var e, i;
                            return e = t, (i = [{
                                key: "maxBitrate",
                                get: function () {
                                    return Math.max(this.realBitrate, this.bitrate)
                                }
                            }, {
                                key: "uri",
                                get: function () {
                                    return this.url[this._urlId] || ""
                                }
                            }, {
                                key: "urlId",
                                get: function () {
                                    return this._urlId
                                },
                                set: function (t) {
                                    var e = t % this.url.length;
                                    this._urlId !== e && (this.details = void 0, this._urlId = e)
                                }
                            }]) && X(e.prototype, i), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }();
                    function Q() {
                        return (Q = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    function J(t, e, i) {
                        switch (e) {
                        case "audio":
                            t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(i);
                            break;
                        case "text":
                            t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(i)
                        }
                    }
                    function $(t) {
                        var e = {};
                        t.forEach((function (t) {
                            var i = t.groupId || "";
                            t.id = e[i] = e[i] || 0, e[i]++
                        }))
                    }
                    function tt(t, e) {
                        var i = e.startPTS;
                        if (Object(a.a)(i)) {
                            var r, n = 0;
                            e.sn > t.sn ? (n = i - t.start, r = t) : (n = t.start - i, r = e), r.duration !== n && (r.duration = n)
                        } else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
                    }
                    function et(t, e, i, r, n, s) {
                        r - i <= 0 && (l.b.warn("Fragment should have a positive duration", e), r = i + e.duration, s = n + e.duration);
                        var o = i,
                            u = r,
                            h = e.startPTS,
                            d = e.endPTS;
                        if (Object(a.a)(h)) {
                            var c = Math.abs(h - i);
                            Object(a.a)(e.deltaPTS) ? e.deltaPTS = Math.max(c, e.deltaPTS) : e.deltaPTS = c, o = Math.max(i, h), i = Math.min(i, h), n = Math.min(n, e.startDTS), u = Math.min(r, d), r = Math.max(r, d), s = Math.max(s, e.endDTS)
                        }
                        e.duration = r - i;
                        var f = i - e.start;
                        e.appendedPTS = r, e.start = e.startPTS = i, e.maxStartPTS = o, e.startDTS = n, e.endPTS = r, e.minEndPTS = u, e.endDTS = s;
                        var v, g = e.sn;
                        if (!t || g < t.startSN || g > t.endSN) return 0;
                        var p = g - t.startSN,
                            m = t.fragments;
                        for (m[p] = e, v = p; v > 0; v--) tt(m[v], m[v - 1]);
                        for (v = p; v < m.length - 1; v++) tt(m[v], m[v + 1]);
                        return t.fragmentHint && tt(m[m.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, f
                    }
                    function it(t, e) {
                        for (var i = null, r = t.fragments, n = r.length - 1; n >= 0; n--) {
                            var s = r[n].initSegment;
                            if (s) {
                                i = s;
                                break
                            }
                        }
                        t.fragmentHint && delete t.fragmentHint.endPTS;
                        var o, u = 0;
                        if (function (t, e, i) {
                                for (var r = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, a = (t.fragmentHint ? 1 : 0) + (r ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= a; u++) {
                                    var h = l[s + u],
                                        d = o[u];
                                    r && !d && u < r && (d = e.fragments[u] = h), h && d && i(h, d)
                                }
                            }(t, e, (function (t, r) {
                                t.relurl && (u = t.cc - r.cc), Object(a.a)(t.startPTS) && Object(a.a)(t.endPTS) && (r.start = r.startPTS = t.startPTS, r.startDTS = t.startDTS, r.appendedPTS = t.appendedPTS, r.maxStartPTS = t.maxStartPTS, r.endPTS = t.endPTS, r.endDTS = t.endDTS, r.minEndPTS = t.minEndPTS, r.duration = t.endPTS - t.startPTS, r.duration && (o = r), e.PTSKnown = e.alignedSliding = !0), r.elementaryStreams = t.elementaryStreams, r.loader = t.loader, r.stats = t.stats, r.urlId = t.urlId, t.initSegment && (r.initSegment = t.initSegment, i = t.initSegment)
                            })), i && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function (t) {
                                var e;
                                t.initSegment && t.initSegment.relurl !== (null === (e = i) || void 0 === e ? void 0 : e.relurl) || (t.initSegment = i)
                            })), e.skippedSegments)
                            if (e.deltaUpdateFailed = e.fragments.some((function (t) {
                                    return !t
                                })), e.deltaUpdateFailed) {
                                l.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                                for (var h = e.skippedSegments; h--;) e.fragments.shift();
                                e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
                            } else e.canSkipDateRanges && (e.dateRanges = function (t, e, i) {
                                var r = Q({}, t);
                                return i && i.forEach((function (t) {
                                    delete r[t]
                                })), Object.keys(e).forEach((function (t) {
                                    var i = new g(e[t].attr, r[t]);
                                    i.isValid ? r[t] = i : l.b.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(e[t].attr) + '"')
                                })), r
                            }(t.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
                        var d = e.fragments;
                        if (u) {
                            l.b.warn("discontinuity sliding from playlist, take drift into account");
                            for (var c = 0; c < d.length; c++) d[c].cc += u
                        }
                        e.skippedSegments && (e.startCC = e.fragments[0].cc),
                            function (t, e, i) {
                                if (t && e)
                                    for (var r = 0, n = 0, a = t.length; n <= a; n++) {
                                        var s = t[n],
                                            o = e[n + r];
                                        s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? i(s, o) : r--
                                    }
                            }(t.partList, e.partList, (function (t, e) {
                                e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
                            })), o ? et(e, o, o.startPTS, o.endPTS, o.startDTS, o.endDTS) : rt(t, e), d.length && (e.totalduration = e.edge - d[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
                        var f = e.advancedDateTime;
                        if (e.advanced && f) {
                            var v = e.edge;
                            e.driftStart || (e.driftStartTime = f, e.driftStart = v), e.driftEndTime = f, e.driftEnd = v
                        } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
                    }
                    function rt(t, e) {
                        var i = e.startSN + e.skippedSegments - t.startSN,
                            r = t.fragments;
                        i < 0 || i >= r.length || nt(e, r[i].start)
                    }
                    function nt(t, e) {
                        if (e) {
                            for (var i = t.fragments, r = t.skippedSegments; r < i.length; r++) i[r].start += e;
                            t.fragmentHint && (t.fragmentHint.start += e)
                        }
                    }
                    var at = function () {
                        function t(t, e) {
                            this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = l.b.log.bind(l.b, e + ":"), this.warn = l.b.warn.bind(l.b, e + ":"), this.hls = t
                        }
                        var e = t.prototype;
                        return e.destroy = function () {
                            this.clearTimer(), this.hls = this.log = this.warn = null
                        }, e.onError = function (t, e) {
                            e.fatal && e.type === o.b.NETWORK_ERROR && this.clearTimer()
                        }, e.clearTimer = function () {
                            clearTimeout(this.timer), this.timer = -1
                        }, e.startLoad = function () {
                            this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
                        }, e.stopLoad = function () {
                            this.canLoad = !1, this.clearTimer()
                        }, e.switchParams = function (t, e) {
                            var i = null == e ? void 0 : e.renditionReports;
                            if (i)
                                for (var r = 0; r < i.length; r++) {
                                    var n = i[r],
                                        s = "" + n.URI;
                                    if (s === t.slice(-s.length)) {
                                        var o = parseInt(n["LAST-MSN"]),
                                            l = parseInt(n["LAST-PART"]);
                                        if (e && this.hls.config.lowLatencyMode) {
                                            var u = Math.min(e.age - e.partTarget, e.targetduration);
                                            void 0 !== l && u > e.partTarget && (l += 1)
                                        }
                                        if (Object(a.a)(o)) return new z(o, Object(a.a)(l) ? l : void 0, Y.No)
                                    }
                                }
                        }, e.loadPlaylist = function (t) {}, e.shouldLoadTrack = function (t) {
                            return this.canLoad && t && !!t.url && (!t.details || t.details.live)
                        }, e.playlistLoaded = function (t, e, i) {
                            var r = this,
                                n = e.details,
                                a = e.stats,
                                s = a.loading.end ? Math.max(0, self.performance.now() - a.loading.end) : 0;
                            if (n.advancedDateTime = Date.now() - s, n.live || null != i && i.live) {
                                if (n.reloaded(i), i && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")), i && n.fragments.length > 0 && it(i, n), !this.canLoad || !n.live) return;
                                var o, l = void 0,
                                    u = void 0;
                                if (n.canBlockReload && n.endSN && n.advanced) {
                                    var h = this.hls.config.lowLatencyMode,
                                        d = n.lastPartSn,
                                        c = n.endSN,
                                        f = n.lastPartIndex,
                                        v = d === c; - 1 !== f ? (l = v ? c + 1 : d, u = v ? h ? 0 : f : f + 1) : l = c + 1;
                                    var g = n.age,
                                        p = g + n.ageHeader,
                                        m = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                                    if (m > 0) {
                                        if (i && m > i.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + i.tuneInGoal + " to: " + m + " with playlist age: " + n.age), m = 0;
                                        else {
                                            var T = Math.floor(m / n.targetduration);
                                            l += T, void 0 !== u && (u += Math.round(m % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + g.toFixed(2) + "s goal: " + m + " skip sn " + T + " to part " + u)
                                        }
                                        n.tuneInGoal = m
                                    }
                                    if (o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u), h || !v) return void this.loadPlaylist(o)
                                } else o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u);
                                var y = function (t, e) {
                                    var i, r = 1e3 * t.levelTargetDuration,
                                        n = r / 2,
                                        a = t.age,
                                        s = a > 0 && a < 3 * r,
                                        o = e.loading.end - e.loading.start,
                                        l = t.availabilityDelay;
                                    if (!1 === t.updated)
                                        if (s) {
                                            var u = 333 * t.misses;
                                            i = Math.max(Math.min(n, 2 * o), u), t.availabilityDelay = (t.availabilityDelay || 0) + i
                                        } else i = n;
                                    else s ? (l = Math.min(l || r / 2, a), t.availabilityDelay = l, i = l + r - a) : i = r - o;
                                    return Math.round(i)
                                }(n, a);
                                void 0 !== l && n.canBlockReload && (y -= n.partTarget || 1), this.log("reload live playlist " + t + " in " + Math.round(y) + " ms"), this.timer = self.setTimeout((function () {
                                    return r.loadPlaylist(o)
                                }), y)
                            } else this.clearTimer()
                        }, e.getDeliveryDirectives = function (t, e, i, r) {
                            var n = function (t, e) {
                                var i = t.canSkipUntil,
                                    r = t.canSkipDateRanges,
                                    n = t.endSN;
                                return i && (void 0 !== e ? e - n : 0) < i ? r ? Y.v2 : Y.Yes : Y.No
                            }(t, i);
                            return null != e && e.skip && t.deltaUpdateFailed && (i = e.msn, r = e.part, n = Y.No), new z(i, r, n)
                        }, e.retryLoadingOrFail = function (t) {
                            var e, i = this,
                                r = this.hls.config,
                                n = this.retryCount < r.levelLoadingMaxRetry;
                            if (n)
                                if (this.retryCount++, t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'), this.loadPlaylist();
                                else {
                                    var a = Math.min(Math.pow(2, this.retryCount) * r.levelLoadingRetryDelay, r.levelLoadingMaxRetryTimeout);
                                    this.timer = self.setTimeout((function () {
                                        return i.loadPlaylist()
                                    }), a), this.warn("retry playlist loading #" + this.retryCount + " in " + a + ' ms after "' + t.details + '"')
                                }
                            else this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), t.fatal = !0;
                            return n
                        }, t
                    }();
                    function st() {
                        return (st = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    function ot(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function lt(t, e) {
                        return (lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var ut, ht = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                        dt = function (t) {
                            var e, i;
                            function r(e) {
                                var i;
                                return (i = t.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._startLevel = void 0, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.onParsedComplete = void 0, i._registerListeners(), i
                            }
                            i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, lt(e, i);
                            var n, a, l = r.prototype;
                            return l._registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.ERROR, this.onError, this)
                            }, l._unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.ERROR, this.onError, this)
                            }, l.destroy = function () {
                                this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t.prototype.destroy.call(this)
                            }, l.startLoad = function () {
                                this._levels.forEach((function (t) {
                                    t.loadError = 0
                                })), t.prototype.startLoad.call(this)
                            }, l.onManifestLoaded = function (t, e) {
                                var i, r, n = [],
                                    a = [],
                                    l = [],
                                    u = {},
                                    h = !1,
                                    d = !1,
                                    c = !1;
                                if (e.levels.forEach((function (t) {
                                        var e = t.attrs;
                                        h = h || !(!t.width || !t.height), d = d || !!t.videoCodec, c = c || !!t.audioCodec, ht && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0);
                                        var i = t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
                                        (r = u[i]) ? r.url.push(t.url): (r = new Z(t), u[i] = r, n.push(r)), e && (e.AUDIO && J(r, "audio", e.AUDIO), e.SUBTITLES && J(r, "text", e.SUBTITLES))
                                    })), (h || d) && c && (n = n.filter((function (t) {
                                        var e = t.videoCodec,
                                            i = t.width,
                                            r = t.height;
                                        return !!e || !(!i || !r)
                                    }))), n = n.filter((function (t) {
                                        var e = t.audioCodec,
                                            i = t.videoCodec;
                                        return (!e || E(e, "audio")) && (!i || E(i, "video"))
                                    })), e.audioTracks && $(a = e.audioTracks.filter((function (t) {
                                        return !t.audioCodec || E(t.audioCodec, "audio")
                                    }))), e.subtitles && $(l = e.subtitles), n.length > 0) {
                                    i = n[0].bitrate, n.sort((function (t, e) {
                                        return t.bitrate - e.bitrate
                                    })), this._levels = n;
                                    for (var f = 0; f < n.length; f++)
                                        if (n[f].bitrate === i) {
                                            this._firstLevel = f, this.log("manifest loaded, " + n.length + " level(s) found, first bitrate: " + i);
                                            break
                                        } var v = c && !d,
                                        g = {
                                            levels: n,
                                            audioTracks: a,
                                            subtitleTracks: l,
                                            firstLevel: this._firstLevel,
                                            stats: e.stats,
                                            audio: c,
                                            video: d,
                                            altAudio: !v && a.some((function (t) {
                                                return !!t.url
                                            }))
                                        };
                                    this.hls.trigger(s.a.MANIFEST_PARSED, g), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                                } else this.hls.trigger(s.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: e.url,
                                    reason: "no level with compatible codecs found in manifest"
                                })
                            }, l.onError = function (e, i) {
                                if (t.prototype.onError.call(this, e, i), !i.fatal) {
                                    var r = i.context,
                                        n = this._levels[this.currentLevelIndex];
                                    if (r && (r.type === w.a.AUDIO_TRACK && n.audioGroupIds && r.groupId === n.audioGroupIds[n.urlId] || r.type === w.a.SUBTITLE_TRACK && n.textGroupIds && r.groupId === n.textGroupIds[n.urlId])) this.redundantFailover(this.currentLevelIndex);
                                    else {
                                        var a, s = !1,
                                            l = !0;
                                        switch (i.details) {
                                        case o.a.FRAG_LOAD_ERROR:
                                        case o.a.FRAG_LOAD_TIMEOUT:
                                        case o.a.KEY_LOAD_ERROR:
                                        case o.a.KEY_LOAD_TIMEOUT:
                                            if (i.frag) {
                                                var u = this._levels[i.frag.level];
                                                u ? (u.fragmentError++, u.fragmentError > this.hls.config.fragLoadingMaxRetry && (a = i.frag.level)) : a = i.frag.level
                                            }
                                            break;
                                        case o.a.LEVEL_LOAD_ERROR:
                                        case o.a.LEVEL_LOAD_TIMEOUT:
                                            r && (r.deliveryDirectives && (l = !1), a = r.level), s = !0;
                                            break;
                                        case o.a.REMUX_ALLOC_ERROR:
                                            a = i.level, s = !0
                                        }
                                        void 0 !== a && this.recoverLevel(i, a, s, l)
                                    }
                                }
                            }, l.recoverLevel = function (t, e, i, r) {
                                var n = t.details,
                                    a = this._levels[e];
                                if (a.loadError++, i) {
                                    if (!this.retryLoadingOrFail(t)) return void(this.currentLevelIndex = -1);
                                    t.levelRetry = !0
                                }
                                if (r) {
                                    var s = a.url.length;
                                    if (s > 1 && a.loadError < s) t.levelRetry = !0, this.redundantFailover(e);
                                    else if (-1 === this.manualLevelIndex) {
                                        var o = 0 === e ? this._levels.length - 1 : e - 1;
                                        this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(n + ": switch to " + o), t.levelRetry = !0, this.hls.nextAutoLevel = o)
                                    }
                                }
                            }, l.redundantFailover = function (t) {
                                var e = this._levels[t],
                                    i = e.url.length;
                                if (i > 1) {
                                    var r = (e.urlId + 1) % i;
                                    this.warn("Switching to redundant URL-id " + r), this._levels.forEach((function (t) {
                                        t.urlId = r
                                    })), this.level = t
                                }
                            }, l.onFragLoaded = function (t, e) {
                                var i = e.frag;
                                if (void 0 !== i && i.type === w.b.MAIN) {
                                    var r = this._levels[i.level];
                                    void 0 !== r && (r.fragmentError = 0, r.loadError = 0)
                                }
                            }, l.onLevelLoaded = function (t, e) {
                                var i, r, n = e.level,
                                    a = e.details,
                                    s = this._levels[n];
                                if (!s) return this.warn("Invalid level index " + n), void(null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (a.deltaUpdateFailed = !0));
                                n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0, this.retryCount = 0), this.playlistLoaded(n, e, s.details)) : null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (a.deltaUpdateFailed = !0)
                            }, l.onAudioTrackSwitched = function (t, e) {
                                var i = this.hls.levels[this.currentLevelIndex];
                                if (i && i.audioGroupIds) {
                                    for (var r = -1, n = this.hls.audioTracks[e.id].groupId, a = 0; a < i.audioGroupIds.length; a++)
                                        if (i.audioGroupIds[a] === n) {
                                            r = a;
                                            break
                                        } r !== i.urlId && (i.urlId = r, this.startLoad())
                                }
                            }, l.loadPlaylist = function (t) {
                                var e = this.currentLevelIndex,
                                    i = this._levels[e];
                                if (this.canLoad && i && i.url.length > 0) {
                                    var r = i.urlId,
                                        n = i.url[r];
                                    if (t) try {
                                        n = t.addDirectives(n)
                                    } catch (t) {
                                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                    }
                                    this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + r + " " + n), this.clearTimer(), this.hls.trigger(s.a.LEVEL_LOADING, {
                                        url: n,
                                        level: e,
                                        id: r,
                                        deliveryDirectives: t || null
                                    })
                                }
                            }, l.removeLevel = function (t, e) {
                                var i = function (t, i) {
                                        return i !== e
                                    },
                                    r = this._levels.filter((function (r, n) {
                                        return n !== t || r.url.length > 1 && void 0 !== e && (r.url = r.url.filter(i), r.audioGroupIds && (r.audioGroupIds = r.audioGroupIds.filter(i)), r.textGroupIds && (r.textGroupIds = r.textGroupIds.filter(i)), r.urlId = 0, !0)
                                    })).map((function (t, e) {
                                        var i = t.details;
                                        return null != i && i.fragments && i.fragments.forEach((function (t) {
                                            t.level = e
                                        })), t
                                    }));
                                this._levels = r, this.hls.trigger(s.a.LEVELS_UPDATED, {
                                    levels: r
                                })
                            }, n = r, (a = [{
                                key: "levels",
                                get: function () {
                                    return 0 === this._levels.length ? null : this._levels
                                }
                            }, {
                                key: "level",
                                get: function () {
                                    return this.currentLevelIndex
                                },
                                set: function (t) {
                                    var e, i = this._levels;
                                    if (0 !== i.length && (this.currentLevelIndex !== t || null === (e = i[t]) || void 0 === e || !e.details)) {
                                        if (t < 0 || t >= i.length) {
                                            var r = t < 0;
                                            if (this.hls.trigger(s.a.ERROR, {
                                                    type: o.b.OTHER_ERROR,
                                                    details: o.a.LEVEL_SWITCH_ERROR,
                                                    level: t,
                                                    fatal: r,
                                                    reason: "invalid level idx"
                                                }), r) return;
                                            t = Math.min(t, i.length - 1)
                                        }
                                        this.clearTimer();
                                        var n = this.currentLevelIndex,
                                            a = i[n],
                                            l = i[t];
                                        this.log("switching to level " + t + " from " + n), this.currentLevelIndex = t;
                                        var u = st({}, l, {
                                            level: t,
                                            maxBitrate: l.maxBitrate,
                                            uri: l.uri,
                                            urlId: l.urlId
                                        });
                                        delete u._urlId, this.hls.trigger(s.a.LEVEL_SWITCHING, u);
                                        var h = l.details;
                                        if (!h || h.live) {
                                            var d = this.switchParams(l.uri, null == a ? void 0 : a.details);
                                            this.loadPlaylist(d)
                                        }
                                    }
                                }
                            }, {
                                key: "manualLevel",
                                get: function () {
                                    return this.manualLevelIndex
                                },
                                set: function (t) {
                                    this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                                }
                            }, {
                                key: "firstLevel",
                                get: function () {
                                    return this._firstLevel
                                },
                                set: function (t) {
                                    this._firstLevel = t
                                }
                            }, {
                                key: "startLevel",
                                get: function () {
                                    if (void 0 === this._startLevel) {
                                        var t = this.hls.config.startLevel;
                                        return void 0 !== t ? t : this._firstLevel
                                    }
                                    return this._startLevel
                                },
                                set: function (t) {
                                    this._startLevel = t
                                }
                            }, {
                                key: "nextLoadLevel",
                                get: function () {
                                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                                },
                                set: function (t) {
                                    this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                                }
                            }]) && ot(n.prototype, a), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), r
                        }(at);
                    ! function (t) {
                        t.NOT_LOADED = "NOT_LOADED", t.APPENDING = "APPENDING", t.PARTIAL = "PARTIAL", t.OK = "OK"
                    }(ut || (ut = {}));
                    var ct = function () {
                        function t(t) {
                            this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = t, this._registerListeners()
                        }
                        var e = t.prototype;
                        return e._registerListeners = function () {
                            var t = this.hls;
                            t.on(s.a.BUFFER_APPENDED, this.onBufferAppended, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this)
                        }, e._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(s.a.BUFFER_APPENDED, this.onBufferAppended, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this)
                        }, e.destroy = function () {
                            this._unregisterListeners(), this.fragments = this.timeRanges = null
                        }, e.getAppendedFrag = function (t, e) {
                            if (e === w.b.MAIN) {
                                var i = this.activeFragment,
                                    r = this.activeParts;
                                if (!i) return null;
                                if (r)
                                    for (var n = r.length; n--;) {
                                        var a = r[n],
                                            s = a ? a.end : i.appendedPTS;
                                        if (a.start <= t && void 0 !== s && t <= s) return n > 9 && (this.activeParts = r.slice(n - 9)), a
                                    } else if (i.start <= t && void 0 !== i.appendedPTS && t <= i.appendedPTS) return i
                            }
                            return this.getBufferedFrag(t, e)
                        }, e.getBufferedFrag = function (t, e) {
                            for (var i = this.fragments, r = Object.keys(i), n = r.length; n--;) {
                                var a = i[r[n]];
                                if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                                    var s = a.body;
                                    if (s.start <= t && t <= s.end) return s
                                }
                            }
                            return null
                        }, e.detectEvictedFragments = function (t, e, i) {
                            var r = this;
                            Object.keys(this.fragments).forEach((function (n) {
                                var a = r.fragments[n];
                                if (a)
                                    if (a.buffered) {
                                        var s = a.range[t];
                                        s && s.time.some((function (t) {
                                            var i = !r.isTimeBuffered(t.startPTS, t.endPTS, e);
                                            return i && r.removeFragment(a.body), i
                                        }))
                                    } else a.body.type === i && r.removeFragment(a.body)
                            }))
                        }, e.detectPartialFragments = function (t) {
                            var e = this,
                                i = this.timeRanges,
                                r = t.frag,
                                n = t.part;
                            if (i && "initSegment" !== r.sn) {
                                var a = vt(r),
                                    s = this.fragments[a];
                                s && (Object.keys(i).forEach((function (t) {
                                    var a = r.elementaryStreams[t];
                                    if (a) {
                                        var o = i[t],
                                            l = null !== n || !0 === a.partial;
                                        s.range[t] = e.getBufferedTimes(r, n, l, o)
                                    }
                                })), s.loaded = null, Object.keys(s.range).length ? s.buffered = !0 : this.removeFragment(s.body))
                            }
                        }, e.fragBuffered = function (t) {
                            var e = vt(t),
                                i = this.fragments[e];
                            i && (i.loaded = null, i.buffered = !0)
                        }, e.getBufferedTimes = function (t, e, i, r) {
                            for (var n = {
                                    time: [],
                                    partial: i
                                }, a = e ? e.start : t.start, s = e ? e.end : t.end, o = t.minEndPTS || s, l = t.maxStartPTS || a, u = 0; u < r.length; u++) {
                                var h = r.start(u) - this.bufferPadding,
                                    d = r.end(u) + this.bufferPadding;
                                if (l >= h && o <= d) {
                                    n.time.push({
                                        startPTS: Math.max(a, r.start(u)),
                                        endPTS: Math.min(s, r.end(u))
                                    });
                                    break
                                }
                                if (a < d && s > h) n.partial = !0, n.time.push({
                                    startPTS: Math.max(a, r.start(u)),
                                    endPTS: Math.min(s, r.end(u))
                                });
                                else if (s <= h) break
                            }
                            return n
                        }, e.getPartialFragment = function (t) {
                            var e, i, r, n = null,
                                a = 0,
                                s = this.bufferPadding,
                                o = this.fragments;
                            return Object.keys(o).forEach((function (l) {
                                var u = o[l];
                                u && ft(u) && (i = u.body.start - s, r = u.body.end + s, t >= i && t <= r && (e = Math.min(t - i, r - t), a <= e && (n = u.body, a = e)))
                            })), n
                        }, e.getState = function (t) {
                            var e = vt(t),
                                i = this.fragments[e];
                            return i ? i.buffered ? ft(i) ? ut.PARTIAL : ut.OK : ut.APPENDING : ut.NOT_LOADED
                        }, e.isTimeBuffered = function (t, e, i) {
                            for (var r, n, a = 0; a < i.length; a++) {
                                if (r = i.start(a) - this.bufferPadding, n = i.end(a) + this.bufferPadding, t >= r && e <= n) return !0;
                                if (e <= r) return !1
                            }
                            return !1
                        }, e.onFragLoaded = function (t, e) {
                            var i = e.frag,
                                r = e.part;
                            if ("initSegment" !== i.sn && !i.bitrateTest && !r) {
                                var n = vt(i);
                                this.fragments[n] = {
                                    body: i,
                                    loaded: e,
                                    buffered: !1,
                                    range: Object.create(null)
                                }
                            }
                        }, e.onBufferAppended = function (t, e) {
                            var i = this,
                                r = e.frag,
                                n = e.part,
                                a = e.timeRanges;
                            if (r.type === w.b.MAIN)
                                if (this.activeFragment = r, n) {
                                    var s = this.activeParts;
                                    s || (this.activeParts = s = []), s.push(n)
                                } else this.activeParts = null;
                            this.timeRanges = a, Object.keys(a).forEach((function (t) {
                                var e = a[t];
                                if (i.detectEvictedFragments(t, e), !n)
                                    for (var s = 0; s < e.length; s++) r.appendedPTS = Math.max(e.end(s), r.appendedPTS || 0)
                            }))
                        }, e.onFragBuffered = function (t, e) {
                            this.detectPartialFragments(e)
                        }, e.hasFragment = function (t) {
                            var e = vt(t);
                            return !!this.fragments[e]
                        }, e.removeFragmentsInRange = function (t, e, i) {
                            var r = this;
                            Object.keys(this.fragments).forEach((function (n) {
                                var a = r.fragments[n];
                                if (a && a.buffered) {
                                    var s = a.body;
                                    s.type === i && s.start < e && s.end > t && r.removeFragment(s)
                                }
                            }))
                        }, e.removeFragment = function (t) {
                            var e = vt(t);
                            t.stats.loaded = 0, t.clearElementaryStreamInfo(), delete this.fragments[e]
                        }, e.removeAllFragments = function () {
                            this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null
                        }, t
                    }();
                    function ft(t) {
                        var e, i;
                        return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (i = t.range.audio) || void 0 === i ? void 0 : i.partial))
                    }
                    function vt(t) {
                        return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
                    }
                    var gt = function () {
                            function t() {
                                this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                this.onHandlerDestroying(), this.onHandlerDestroyed()
                            }, e.onHandlerDestroying = function () {
                                this.clearNextTick(), this.clearInterval()
                            }, e.onHandlerDestroyed = function () {}, e.hasInterval = function () {
                                return !!this._tickInterval
                            }, e.hasNextTick = function () {
                                return !!this._tickTimer
                            }, e.setInterval = function (t) {
                                return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
                            }, e.clearInterval = function () {
                                return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                            }, e.clearNextTick = function () {
                                return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                            }, e.tick = function () {
                                this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
                            }, e.tickImmediate = function () {
                                this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
                            }, e.doTick = function () {}, t
                        }(),
                        pt = {
                            length: 0,
                            start: function () {
                                return 0
                            },
                            end: function () {
                                return 0
                            }
                        },
                        mt = function () {
                            function t() {}
                            return t.isBuffered = function (e, i) {
                                try {
                                    if (e)
                                        for (var r = t.getBuffered(e), n = 0; n < r.length; n++)
                                            if (i >= r.start(n) && i <= r.end(n)) return !0
                                } catch (t) {}
                                return !1
                            }, t.bufferInfo = function (e, i, r) {
                                try {
                                    if (e) {
                                        var n, a = t.getBuffered(e),
                                            s = [];
                                        for (n = 0; n < a.length; n++) s.push({
                                            start: a.start(n),
                                            end: a.end(n)
                                        });
                                        return this.bufferedInfo(s, i, r)
                                    }
                                } catch (t) {}
                                return {
                                    len: 0,
                                    start: i,
                                    end: i,
                                    nextStart: void 0
                                }
                            }, t.bufferedInfo = function (t, e, i) {
                                e = Math.max(0, e), t.sort((function (t, e) {
                                    return t.start - e.start || e.end - t.end
                                }));
                                var r = [];
                                if (i)
                                    for (var n = 0; n < t.length; n++) {
                                        var a = r.length;
                                        if (a) {
                                            var s = r[a - 1].end;
                                            t[n].start - s < i ? t[n].end > s && (r[a - 1].end = t[n].end) : r.push(t[n])
                                        } else r.push(t[n])
                                    } else r = t;
                                for (var o, l = 0, u = e, h = e, d = 0; d < r.length; d++) {
                                    var c = r[d].start,
                                        f = r[d].end;
                                    if (e + i >= c && e < f) u = c, l = (h = f) - e;
                                    else if (e + i < c) {
                                        o = c;
                                        break
                                    }
                                }
                                return {
                                    len: l,
                                    start: u || 0,
                                    end: h || 0,
                                    nextStart: o
                                }
                            }, t.getBuffered = function (t) {
                                try {
                                    return t.buffered
                                } catch (t) {
                                    return l.b.log("failed to get media.buffered", t), pt
                                }
                            }, t
                        }(),
                        Tt = function (t, e, i, r, n, a) {
                            void 0 === r && (r = 0), void 0 === n && (n = -1), void 0 === a && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                                start: 0,
                                executeStart: 0,
                                executeEnd: 0,
                                end: 0
                            }, this.buffering = {
                                audio: {
                                    start: 0,
                                    executeStart: 0,
                                    executeEnd: 0,
                                    end: 0
                                },
                                video: {
                                    start: 0,
                                    executeStart: 0,
                                    executeEnd: 0,
                                    end: 0
                                },
                                audiovideo: {
                                    start: 0,
                                    executeStart: 0,
                                    executeEnd: 0,
                                    end: 0
                                }
                            }, this.level = t, this.sn = e, this.id = i, this.size = r, this.part = n, this.partial = a
                        };
                    function yt(t, e) {
                        if (t) {
                            var i = t.start + e;
                            t.start = t.startPTS = i, t.endPTS = i + t.duration
                        }
                    }
                    function bt(t, e) {
                        for (var i = e.fragments, r = 0, n = i.length; r < n; r++) yt(i[r], t);
                        e.fragmentHint && yt(e.fragmentHint, t), e.alignedSliding = !0
                    }
                    function Et(t, e, i) {
                        e && (function (t, e, i) {
                            if (function (t, e, i) {
                                    return !(!e.details || !(i.endCC > i.startCC || t && t.cc < i.startCC))
                                }(t, i, e)) {
                                var r = function (t, e) {
                                    var i = t.fragments,
                                        r = e.fragments;
                                    if (r.length && i.length) {
                                        var n = function (t, e) {
                                            for (var i = null, r = 0, n = t.length; r < n; r++) {
                                                var a = t[r];
                                                if (a && a.cc === e) {
                                                    i = a;
                                                    break
                                                }
                                            }
                                            return i
                                        }(i, r[0].cc);
                                        if (n && (!n || n.startPTS)) return n;
                                        l.b.log("No frag in previous level to align on")
                                    } else l.b.log("No fragments to align")
                                }(i.details, e);
                                r && Object(a.a)(r.start) && (l.b.log("Adjusting PTS using last level due to CC increase within current level " + e.url), bt(r.start, e))
                            }
                        }(t, i, e), !i.alignedSliding && e.details && function (t, e) {
                            if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                                var i = e.fragments[0].programDateTime,
                                    r = t.fragments[0].programDateTime,
                                    n = (r - i) / 1e3 + e.fragments[0].start;
                                n && Object(a.a)(n) && (l.b.log("Adjusting PTS using programDateTime delta " + (r - i) + "ms, sliding:" + n.toFixed(3) + " " + t.url + " "), bt(n, t))
                            }
                        }(i, e.details), i.alignedSliding || !e.details || i.skippedSegments || rt(e.details, i))
                    }
                    function St(t, e) {
                        var i = t.programDateTime;
                        if (i) {
                            var r = (i - e) / 1e3;
                            t.start = t.startPTS = r, t.endPTS = r + t.duration
                        }
                    }
                    function Lt(t, e) {
                        if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                            var i = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start;
                            t.fragments.forEach((function (t) {
                                St(t, i)
                            })), t.fragmentHint && St(t.fragmentHint, i), t.alignedSliding = !0
                        }
                    }
                    var kt = function (t, e) {
                        for (var i = 0, r = t.length - 1, n = null, a = null; i <= r;) {
                            var s = e(a = t[n = (i + r) / 2 | 0]);
                            if (s > 0) i = n + 1;
                            else {
                                if (!(s < 0)) return a;
                                r = n - 1
                            }
                        }
                        return null
                    };
                    function Rt(t, e, i, r) {
                        void 0 === i && (i = 0), void 0 === r && (r = 0);
                        var n = null;
                        return t ? n = e[t.sn - e[0].sn + 1] || null : 0 === i && 0 === e[0].start && (n = e[0]), n && 0 === At(i, r, n) ? n : kt(e, At.bind(null, i, r)) || n
                    }
                    function At(t, e, i) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0);
                        var r = Math.min(e, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                        return i.start + i.duration - r <= t ? 1 : i.start - r > t && i.start ? -1 : 0
                    }
                    function _t(t, e, i) {
                        var r = 1e3 * Math.min(e, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                        return (i.endProgramDateTime || 0) - r > t
                    }
                    function Dt(t) {
                        var e = "function" == typeof Map ? new Map : void 0;
                        return (Dt = function (t) {
                            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                            var i;
                            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, r)
                            }
                            function r() {
                                return Ot(t, arguments, wt(this).constructor)
                            }
                            return r.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), It(r, t)
                        })(t)
                    }
                    function Ot(t, e, i) {
                        return (Ot = Ct() ? Reflect.construct.bind() : function (t, e, i) {
                            var r = [null];
                            r.push.apply(r, e);
                            var n = new(Function.bind.apply(t, r));
                            return i && It(n, i.prototype), n
                        }).apply(null, arguments)
                    }
                    function Ct() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }
                    function It(t, e) {
                        return (It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    function wt(t) {
                        return (wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var xt = Math.pow(2, 17),
                        Pt = function () {
                            function t(t) {
                                this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                this.loader && (this.loader.destroy(), this.loader = null)
                            }, e.abort = function () {
                                this.loader && this.loader.abort()
                            }, e.load = function (t, e) {
                                var i = this,
                                    r = t.url;
                                if (!r) return Promise.reject(new Ft({
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    networkDetails: null
                                }, "Fragment does not have a " + (r ? "part list" : "url")));
                                this.abort();
                                var n = this.config,
                                    a = n.fLoader,
                                    s = n.loader;
                                return new Promise((function (r, l) {
                                    i.loader && i.loader.destroy();
                                    var u = i.loader = t.loader = a ? new a(n) : new s(n),
                                        h = Mt(t),
                                        d = {
                                            timeout: n.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                                            highWaterMark: "initSegment" === t.sn ? 1 / 0 : xt
                                        };
                                    t.stats = u.stats, u.load(h, d, {
                                        onSuccess: function (e, n, a, s) {
                                            i.resetLoader(t, u), r({
                                                frag: t,
                                                part: null,
                                                payload: e.data,
                                                networkDetails: s
                                            })
                                        },
                                        onError: function (e, r, n) {
                                            i.resetLoader(t, u), l(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.FRAG_LOAD_ERROR,
                                                fatal: !1,
                                                frag: t,
                                                response: e,
                                                networkDetails: n
                                            }))
                                        },
                                        onAbort: function (e, r, n) {
                                            i.resetLoader(t, u), l(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.INTERNAL_ABORTED,
                                                fatal: !1,
                                                frag: t,
                                                networkDetails: n
                                            }))
                                        },
                                        onTimeout: function (e, r, n) {
                                            i.resetLoader(t, u), l(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.FRAG_LOAD_TIMEOUT,
                                                fatal: !1,
                                                frag: t,
                                                networkDetails: n
                                            }))
                                        },
                                        onProgress: function (i, r, n, a) {
                                            e && e({
                                                frag: t,
                                                part: null,
                                                payload: n,
                                                networkDetails: a
                                            })
                                        }
                                    })
                                }))
                            }, e.loadPart = function (t, e, i) {
                                var r = this;
                                this.abort();
                                var n = this.config,
                                    a = n.fLoader,
                                    s = n.loader;
                                return new Promise((function (l, u) {
                                    r.loader && r.loader.destroy();
                                    var h = r.loader = t.loader = a ? new a(n) : new s(n),
                                        d = Mt(t, e),
                                        c = {
                                            timeout: n.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                                            highWaterMark: xt
                                        };
                                    e.stats = h.stats, h.load(d, c, {
                                        onSuccess: function (n, a, s, o) {
                                            r.resetLoader(t, h), r.updateStatsFromPart(t, e);
                                            var u = {
                                                frag: t,
                                                part: e,
                                                payload: n.data,
                                                networkDetails: o
                                            };
                                            i(u), l(u)
                                        },
                                        onError: function (i, n, a) {
                                            r.resetLoader(t, h), u(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.FRAG_LOAD_ERROR,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                response: i,
                                                networkDetails: a
                                            }))
                                        },
                                        onAbort: function (i, n, a) {
                                            t.stats.aborted = e.stats.aborted, r.resetLoader(t, h), u(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.INTERNAL_ABORTED,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                networkDetails: a
                                            }))
                                        },
                                        onTimeout: function (i, n, a) {
                                            r.resetLoader(t, h), u(new Ft({
                                                type: o.b.NETWORK_ERROR,
                                                details: o.a.FRAG_LOAD_TIMEOUT,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                networkDetails: a
                                            }))
                                        }
                                    })
                                }))
                            }, e.updateStatsFromPart = function (t, e) {
                                var i = t.stats,
                                    r = e.stats,
                                    n = r.total;
                                if (i.loaded += r.loaded, n) {
                                    var a = Math.round(t.duration / e.duration),
                                        s = Math.min(Math.round(i.loaded / n), a),
                                        o = (a - s) * Math.round(i.loaded / s);
                                    i.total = i.loaded + o
                                } else i.total = Math.max(i.loaded, i.total);
                                var l = i.loading,
                                    u = r.loading;
                                l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
                            }, e.resetLoader = function (t, e) {
                                t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
                            }, t
                        }();
                    function Mt(t, e) {
                        void 0 === e && (e = null);
                        var i = e || t,
                            r = {
                                frag: t,
                                part: e,
                                responseType: "arraybuffer",
                                url: i.url,
                                headers: {},
                                rangeStart: 0,
                                rangeEnd: 0
                            },
                            n = i.byteRangeStartOffset,
                            s = i.byteRangeEndOffset;
                        return Object(a.a)(n) && Object(a.a)(s) && (r.rangeStart = n, r.rangeEnd = s), r
                    }
                    var Ft = function (t) {
                            var e, i;
                            function r(e) {
                                for (var i, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                return (i = t.call.apply(t, [this].concat(n)) || this).data = void 0, i.data = e, i
                            }
                            return i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, It(e, i), r
                        }(Dt(Error)),
                        Nt = i(17),
                        Ut = function (t) {
                            for (var e = "", i = t.length, r = 0; r < i; r++) e += "[" + t.start(r).toFixed(3) + "," + t.end(r).toFixed(3) + "]";
                            return e
                        };
                    function Bt(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function jt(t, e) {
                        return (jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var Gt = "STOPPED",
                        Ht = "IDLE",
                        Kt = "KEY_LOADING",
                        Vt = "FRAG_LOADING",
                        Wt = "FRAG_LOADING_WAITING_RETRY",
                        Yt = "WAITING_TRACK",
                        qt = "PARSING",
                        Xt = "PARSED",
                        zt = "ENDED",
                        Zt = "ERROR",
                        Qt = "WAITING_INIT_PTS",
                        Jt = "WAITING_LEVEL",
                        $t = function (t) {
                            var e, i;
                            function r(e, i, r) {
                                var n;
                                return (n = t.call(this) || this).hls = void 0, n.fragPrevious = null, n.fragCurrent = null, n.fragmentTracker = void 0, n.transmuxer = null, n._state = Gt, n.media = void 0, n.mediaBuffer = void 0, n.config = void 0, n.bitrateTest = !1, n.lastCurrentTime = 0, n.nextLoadPosition = 0, n.startPosition = 0, n.loadedmetadata = !1, n.fragLoadError = 0, n.retryDate = 0, n.levels = null, n.fragmentLoader = void 0, n.levelLastLoaded = null, n.startFragRequested = !1, n.decrypter = void 0, n.initPTS = [], n.onvseeking = null, n.onvended = null, n.logPrefix = "", n.log = void 0, n.warn = void 0, n.logPrefix = r, n.log = l.b.log.bind(l.b, r + ":"), n.warn = l.b.warn.bind(l.b, r + ":"), n.hls = e, n.fragmentLoader = new Pt(e.config), n.fragmentTracker = i, n.config = e.config, n.decrypter = new Nt.a(e, e.config), e.on(s.a.KEY_LOADED, n.onKeyLoaded, function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(n)), n
                            }
                            i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, jt(e, i);
                            var n, h, d = r.prototype;
                            return d.doTick = function () {
                                this.onTickEnd()
                            }, d.onTickEnd = function () {}, d.startLoad = function (t) {}, d.stopLoad = function () {
                                this.fragmentLoader.abort();
                                var t = this.fragCurrent;
                                t && this.fragmentTracker.removeFragment(t), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Gt
                            }, d._streamEnded = function (t, e) {
                                var i = this.fragCurrent,
                                    r = this.fragmentTracker;
                                if (!e.live && i && i.sn >= e.endSN && !t.nextStart) {
                                    var n = e.partList;
                                    if (null != n && n.length) {
                                        var a = n[n.length - 1];
                                        return mt.isBuffered(this.media, a.start + a.duration / 2)
                                    }
                                    var s = r.getState(i);
                                    return s === ut.PARTIAL || s === ut.OK
                                }
                                return !1
                            }, d.onMediaAttached = function (t, e) {
                                var i = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
                                var r = this.config;
                                this.levels && r.autoStartLoad && this.state === Gt && this.startLoad(r.startPosition)
                            }, d.onMediaDetaching = function () {
                                var t = this.media;
                                null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                            }, d.onMediaSeeking = function () {
                                var t = this.config,
                                    e = this.fragCurrent,
                                    i = this.media,
                                    r = this.mediaBuffer,
                                    n = this.state,
                                    s = i ? i.currentTime : 0,
                                    o = mt.bufferInfo(r || i, s, t.maxBufferHole);
                                if (this.log("media seeking to " + (Object(a.a)(s) ? s.toFixed(3) : s) + ", state: " + n), n === zt) this.resetLoadingState();
                                else if (e && !o.len) {
                                    var l = t.maxFragLookUpTolerance,
                                        u = e.start - l,
                                        h = s > e.start + e.duration + l;
                                    (s < u || h) && (h && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.loader.abort()), this.resetLoadingState())
                                }
                                i && (this.lastCurrentTime = s), this.loadedmetadata || o.len || (this.nextLoadPosition = this.startPosition = s), this.tickImmediate()
                            }, d.onMediaEnded = function () {
                                this.startPosition = this.lastCurrentTime = 0
                            }, d.onKeyLoaded = function (t, e) {
                                if (this.state === Kt && e.frag === this.fragCurrent && this.levels) {
                                    this.state = Ht;
                                    var i = this.levels[e.frag.level].details;
                                    i && this.loadFragment(e.frag, i, e.frag.start)
                                }
                            }, d.onHandlerDestroying = function () {
                                this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                            }, d.onHandlerDestroyed = function () {
                                this.state = Gt, this.hls.off(s.a.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
                            }, d.loadKey = function (t, e) {
                                this.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = Kt, this.fragCurrent = t, this.hls.trigger(s.a.KEY_LOADING, {
                                    frag: t
                                })
                            }, d.loadFragment = function (t, e, i) {
                                this._loadFragForPlayback(t, e, i)
                            }, d._loadFragForPlayback = function (t, e, i) {
                                var r = this;
                                this._doFragLoad(t, e, i, (function (e) {
                                    if (r.fragContextChanged(t)) return r.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void r.fragmentTracker.removeFragment(t);
                                    t.stats.chunkCount++, r._handleFragmentLoadProgress(e)
                                })).then((function (e) {
                                    if (e) {
                                        r.fragLoadError = 0;
                                        var i = r.state;
                                        r.fragContextChanged(t) ? (i === Vt || !r.fragCurrent && i === qt) && (r.fragmentTracker.removeFragment(t), r.state = Ht) : ("payload" in e && (r.log("Loaded fragment " + t.sn + " of level " + t.level), r.hls.trigger(s.a.FRAG_LOADED, e)), r._handleFragmentLoadComplete(e))
                                    }
                                })).catch((function (e) {
                                    r.state !== Gt && (r.warn(e), r.resetFragmentLoading(t))
                                }))
                            }, d.flushMainBuffer = function (t, e, i) {
                                if (void 0 === i && (i = null), t - e) {
                                    var r = {
                                        startOffset: t,
                                        endOffset: e,
                                        type: i
                                    };
                                    this.fragLoadError = 0, this.hls.trigger(s.a.BUFFER_FLUSHING, r)
                                }
                            }, d._loadInitSegment = function (t) {
                                var e = this;
                                this._doFragLoad(t).then((function (i) {
                                    if (!i || e.fragContextChanged(t) || !e.levels) throw new Error("init load aborted");
                                    return i
                                })).then((function (i) {
                                    var r = e.hls,
                                        n = i.payload,
                                        a = t.decryptdata;
                                    if (n && n.byteLength > 0 && a && a.key && a.iv && "AES-128" === a.method) {
                                        var o = self.performance.now();
                                        return e.decrypter.webCryptoDecrypt(new Uint8Array(n), a.key.buffer, a.iv.buffer).then((function (e) {
                                            var n = self.performance.now();
                                            return r.trigger(s.a.FRAG_DECRYPTED, {
                                                frag: t,
                                                payload: e,
                                                stats: {
                                                    tstart: o,
                                                    tdecrypt: n
                                                }
                                            }), i.payload = e, i
                                        }))
                                    }
                                    return i
                                })).then((function (i) {
                                    var r = e.fragCurrent,
                                        n = e.hls,
                                        a = e.levels;
                                    if (!a) throw new Error("init load aborted, missing levels");
                                    a[t.level].details;
                                    var o = t.stats;
                                    e.state = Ht, e.fragLoadError = 0, t.data = new Uint8Array(i.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), i.frag === r && n.trigger(s.a.FRAG_BUFFERED, {
                                        stats: o,
                                        frag: r,
                                        part: null,
                                        id: t.type
                                    }), e.tick()
                                })).catch((function (i) {
                                    e.warn(i), e.resetFragmentLoading(t)
                                }))
                            }, d.fragContextChanged = function (t) {
                                var e = this.fragCurrent;
                                return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                            }, d.fragBufferedComplete = function (t, e) {
                                var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + Ut(mt.getBuffered(i))), this.state = Ht, this.tick()
                            }, d._handleFragmentLoadComplete = function (t) {
                                var e = this.transmuxer;
                                if (e) {
                                    var i = t.frag,
                                        r = t.part,
                                        n = t.partsLoaded,
                                        a = !n || 0 === n.length || n.some((function (t) {
                                            return !t
                                        })),
                                        s = new Tt(i.level, i.sn, i.stats.chunkCount + 1, 0, r ? r.index : -1, !a);
                                    e.flush(s)
                                }
                            }, d._handleFragmentLoadProgress = function (t) {}, d._doFragLoad = function (t, e, i, r) {
                                var n = this;
                                if (void 0 === i && (i = null), !this.levels) throw new Error("frag load aborted, missing levels");
                                if (i = Math.max(t.start, i || 0), this.config.lowLatencyMode && e) {
                                    var o = e.partList;
                                    if (o && r) {
                                        i > t.end && e.fragmentHint && (t = e.fragmentHint);
                                        var l = this.getNextPart(o, t, i);
                                        if (l > -1) {
                                            var u = o[l];
                                            return this.log("Loading part sn: " + t.sn + " p: " + u.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + l + "-" + (o.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(i.toFixed(3))), this.nextLoadPosition = u.start + u.duration, this.state = Vt, this.hls.trigger(s.a.FRAG_LOADING, {
                                                frag: t,
                                                part: o[l],
                                                targetBufferTime: i
                                            }), this.doFragPartsLoad(t, o, l, r).catch((function (t) {
                                                return n.handleFragLoadError(t)
                                            }))
                                        }
                                        if (!t.url || this.loadedEndOfParts(o, i)) return Promise.resolve(null)
                                    }
                                }
                                return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(i.toFixed(3))), Object(a.a)(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = Vt, this.hls.trigger(s.a.FRAG_LOADING, {
                                    frag: t,
                                    targetBufferTime: i
                                }), this.fragmentLoader.load(t, r).catch((function (t) {
                                    return n.handleFragLoadError(t)
                                }))
                            }, d.doFragPartsLoad = function (t, e, i, r) {
                                var n = this;
                                return new Promise((function (a, o) {
                                    var l = [];
                                    ! function i(u) {
                                        var h = e[u];
                                        n.fragmentLoader.loadPart(t, h, r).then((function (r) {
                                            l[h.index] = r;
                                            var o = r.part;
                                            n.hls.trigger(s.a.FRAG_LOADED, r);
                                            var d = e[u + 1];
                                            if (!d || d.fragment !== t) return a({
                                                frag: t,
                                                part: o,
                                                partsLoaded: l
                                            });
                                            i(u + 1)
                                        })).catch(o)
                                    }(i)
                                }))
                            }, d.handleFragLoadError = function (t) {
                                var e = t.data;
                                return e && e.details === o.a.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(s.a.ERROR, e), null
                            }, d._handleTransmuxerFlush = function (t) {
                                var e = this.getCurrentContext(t);
                                if (e && this.state === qt) {
                                    var i = e.frag,
                                        r = e.part,
                                        n = e.level,
                                        a = self.performance.now();
                                    i.stats.parsing.end = a, r && (r.stats.parsing.end = a), this.updateLevelTiming(i, r, n, t.partial)
                                } else this.fragCurrent || (this.state = Ht)
                            }, d.getCurrentContext = function (t) {
                                var e = this.levels,
                                    i = t.level,
                                    r = t.sn,
                                    n = t.part;
                                if (!e || !e[i]) return this.warn("Levels object was unset while buffering fragment " + r + " of level " + i + ". The current chunk will not be buffered."), null;
                                var a = e[i],
                                    s = n > -1 ? function (t, e, i) {
                                        if (!t || !t.details) return null;
                                        var r = t.details.partList;
                                        if (r)
                                            for (var n = r.length; n--;) {
                                                var a = r[n];
                                                if (a.index === i && a.fragment.sn === e) return a
                                            }
                                        return null
                                    }(a, r, n) : null,
                                    o = s ? s.fragment : function (t, e, i) {
                                        if (!t || !t.details) return null;
                                        var r = t.details,
                                            n = r.fragments[e - r.startSN];
                                        return n || ((n = r.fragmentHint) && n.sn === e ? n : e < r.startSN && i && i.sn === e ? i : null)
                                    }(a, r, this.fragCurrent);
                                return o ? {
                                    frag: o,
                                    part: s,
                                    level: a
                                } : null
                            }, d.bufferFragmentData = function (t, e, i, r) {
                                if (t && this.state === qt) {
                                    var n = t.data1,
                                        a = t.data2,
                                        o = n;
                                    if (n && a && (o = Object(u.b)(n, a)), o && o.length) {
                                        var l = {
                                            type: t.type,
                                            frag: e,
                                            part: i,
                                            chunkMeta: r,
                                            parent: e.type,
                                            data: o
                                        };
                                        this.hls.trigger(s.a.BUFFER_APPENDING, l), t.dropped && t.independent && !i && this.flushBufferGap(e)
                                    }
                                }
                            }, d.flushBufferGap = function (t) {
                                var e = this.media;
                                if (e)
                                    if (mt.isBuffered(e, e.currentTime)) {
                                        var i = e.currentTime,
                                            r = mt.bufferInfo(e, i, 0),
                                            n = t.duration,
                                            a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                                            s = Math.max(Math.min(t.start - a, r.end - a), i + a);
                                        t.start - s > a && this.flushMainBuffer(s, t.start)
                                    } else this.flushMainBuffer(0, t.start)
                            }, d.getFwdBufferInfo = function (t, e) {
                                var i = this.config,
                                    r = this.getLoadPosition();
                                if (!Object(a.a)(r)) return null;
                                var n = mt.bufferInfo(t, r, i.maxBufferHole);
                                if (0 === n.len && void 0 !== n.nextStart) {
                                    var s = this.fragmentTracker.getBufferedFrag(r, e);
                                    if (s && n.nextStart < s.end) return mt.bufferInfo(t, r, Math.max(n.nextStart, i.maxBufferHole))
                                }
                                return n
                            }, d.getMaxBufferLength = function (t) {
                                var e, i = this.config;
                                return e = t ? Math.max(8 * i.maxBufferSize / t, i.maxBufferLength) : i.maxBufferLength, Math.min(e, i.maxMaxBufferLength)
                            }, d.reduceMaxBufferLength = function (t) {
                                var e = this.config,
                                    i = t || e.maxBufferLength;
                                return e.maxMaxBufferLength >= i && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                            }, d.getNextFragment = function (t, e) {
                                var i = e.fragments,
                                    r = i.length;
                                if (!r) return null;
                                var n, a = this.config,
                                    s = i[0].start;
                                if (e.live) {
                                    var o = a.initialLiveManifestSize;
                                    if (r < o) return this.warn("Not enough fragments to start playback (have: " + r + ", need: " + o + ")"), null;
                                    e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n = this.getInitialLiveFragment(e, i), this.startPosition = n ? this.hls.liveSyncPosition || n.start : t)
                                } else t <= s && (n = i[0]);
                                if (!n) {
                                    var l = a.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                                    n = this.getFragmentAtPosition(t, l, e)
                                }
                                return this.mapToInitFragWhenRequired(n)
                            }, d.mapToInitFragWhenRequired = function (t) {
                                return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
                            }, d.getNextPart = function (t, e, i) {
                                for (var r = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                                    var l = t[s];
                                    if (a = a && !l.independent, r > -1 && i < l.start) break;
                                    var u = l.loaded;
                                    !u && (n || l.independent || a) && l.fragment === e && (r = s), n = u
                                }
                                return r
                            }, d.loadedEndOfParts = function (t, e) {
                                var i = t[t.length - 1];
                                return i && e > i.start && i.loaded
                            }, d.getInitialLiveFragment = function (t, e) {
                                var i = this.fragPrevious,
                                    r = null;
                                if (i) {
                                    if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), r = function (t, e, i) {
                                            if (null === e || !Array.isArray(t) || !t.length || !Object(a.a)(e)) return null;
                                            if (e < (t[0].programDateTime || 0)) return null;
                                            if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                                            i = i || 0;
                                            for (var r = 0; r < t.length; ++r) {
                                                var n = t[r];
                                                if (_t(e, i, n)) return n
                                            }
                                            return null
                                        }(e, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !r) {
                                        var n = i.sn + 1;
                                        if (n >= t.startSN && n <= t.endSN) {
                                            var s = e[n - t.startSN];
                                            i.cc === s.cc && (r = s, this.log("Live playlist, switching playlist, load frag with next SN: " + r.sn))
                                        }
                                        r || (r = function (t, e) {
                                            return kt(t, (function (t) {
                                                return t.cc < e ? 1 : t.cc > e ? -1 : 0
                                            }))
                                        }(e, i.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + r.sn)
                                    }
                                } else {
                                    var o = this.hls.liveSyncPosition;
                                    null !== o && (r = this.getFragmentAtPosition(o, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                                }
                                return r
                            }, d.getFragmentAtPosition = function (t, e, i) {
                                var r, n = this.config,
                                    a = this.fragPrevious,
                                    s = i.fragments,
                                    o = i.endSN,
                                    l = i.fragmentHint,
                                    u = n.maxFragLookUpTolerance,
                                    h = !!(n.lowLatencyMode && i.partList && l);
                                if (h && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), r = t < e ? Rt(a, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
                                    var d = r.sn - i.startSN,
                                        c = a && r.level === a.level,
                                        f = s[d + 1];
                                    a && r.sn === a.sn && !h && c && (r.sn < o && this.fragmentTracker.getState(f) !== ut.OK ? (this.log("SN " + r.sn + " just loaded, load next one: " + f.sn), r = f) : r = null)
                                }
                                return r
                            }, d.synchronizeToLiveEdge = function (t) {
                                var e = this.config,
                                    i = this.media;
                                if (i) {
                                    var r = this.hls.liveSyncPosition,
                                        n = i.currentTime,
                                        a = t.fragments[0].start,
                                        s = t.edge,
                                        o = n >= a - e.maxFragLookUpTolerance && n <= s;
                                    if (null !== r && i.duration > r && (n < r || !o)) {
                                        var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                                        (!o && i.readyState < 4 || n < s - l) && (this.loadedmetadata || (this.nextLoadPosition = r), i.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + r.toFixed(3)), i.currentTime = r))
                                    }
                                }
                            }, d.alignPlaylists = function (t, e) {
                                var i = this.levels,
                                    r = this.levelLastLoaded,
                                    n = this.fragPrevious,
                                    s = null !== r ? i[r] : null,
                                    o = t.fragments.length;
                                if (!o) return this.warn("No fragments in live playlist"), 0;
                                var l = t.fragments[0].start,
                                    u = !e,
                                    h = t.alignedSliding && Object(a.a)(l);
                                if (u || !h && !l) {
                                    Et(n, s, t);
                                    var d = t.fragments[0].start;
                                    return this.log("Live playlist sliding: " + d.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (n ? n.sn : "na") + " fragments: " + o), d
                                }
                                return l
                            }, d.waitForCdnTuneIn = function (t) {
                                return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                            }, d.setStartPosition = function (t, e) {
                                var i = this.startPosition;
                                if (i < e && (i = -1), -1 === i || -1 === this.lastCurrentTime) {
                                    var r = t.startTimeOffset;
                                    Object(a.a)(r) ? (i = e + r, r < 0 && (i += t.totalduration), i = Math.min(Math.max(e, i), e + t.totalduration), this.log("Start time offset " + r + " found in playlist, adjust startPosition to " + i), this.startPosition = i) : t.live ? i = this.hls.liveSyncPosition || e : this.startPosition = i = 0, this.lastCurrentTime = i
                                }
                                this.nextLoadPosition = i
                            }, d.getLoadPosition = function () {
                                var t = this.media,
                                    e = 0;
                                return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                            }, d.handleFragLoadAborted = function (t, e) {
                                this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part" + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                            }, d.resetFragmentLoading = function (t) {
                                this.fragCurrent && this.fragContextChanged(t) || (this.state = Ht)
                            }, d.onFragmentOrKeyLoadError = function (t, e) {
                                if (!e.fatal) {
                                    var i = e.frag;
                                    if (i && i.type === t) {
                                        this.fragCurrent;
                                        var r = this.config;
                                        if (this.fragLoadError + 1 <= r.fragLoadingMaxRetry) {
                                            if (this.resetLiveStartWhenNotLoaded(i.level)) return;
                                            var n = Math.min(Math.pow(2, this.fragLoadError) * r.fragLoadingRetryDelay, r.fragLoadingMaxRetryTimeout);
                                            this.warn("Fragment " + i.sn + " of " + t + " " + i.level + " failed to load, retrying in " + n + "ms"), this.retryDate = self.performance.now() + n, this.fragLoadError++, this.state = Wt
                                        } else e.levelRetry ? (t === w.b.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = Ht) : (l.b.error(e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = Zt)
                                    }
                                }
                            }, d.afterBufferFlushed = function (t, e, i) {
                                if (t) {
                                    var r = mt.getBuffered(t);
                                    this.fragmentTracker.detectEvictedFragments(e, r, i), this.state === zt && this.resetLoadingState()
                                }
                            }, d.resetLoadingState = function () {
                                this.fragCurrent = null, this.fragPrevious = null, this.state = Ht
                            }, d.resetLiveStartWhenNotLoaded = function (t) {
                                if (!this.loadedmetadata) {
                                    this.startFragRequested = !1;
                                    var e = this.levels ? this.levels[t].details : null;
                                    if (null != e && e.live) return this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState(), !0;
                                    this.nextLoadPosition = this.startPosition
                                }
                                return !1
                            }, d.updateLevelTiming = function (t, e, i, r) {
                                var n = this,
                                    a = i.details;
                                Object.keys(t.elementaryStreams).reduce((function (e, o) {
                                    var l = t.elementaryStreams[o];
                                    if (l) {
                                        var u = l.endPTS - l.startPTS;
                                        if (u <= 0) return n.warn("Could not parse fragment " + t.sn + " " + o + " duration reliably (" + u + ")"), e || !1;
                                        var h = r ? 0 : et(a, t, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
                                        return n.hls.trigger(s.a.LEVEL_PTS_UPDATED, {
                                            details: a,
                                            level: i,
                                            drift: h,
                                            type: o,
                                            frag: t,
                                            start: l.startPTS,
                                            end: l.endPTS
                                        }), !0
                                    }
                                    return e
                                }), !1) || (this.warn("Found no media in fragment " + t.sn + " of level " + i.id + " resetting transmuxer to fallback to playlist timing"), this.resetTransmuxer()), this.state = Xt, this.hls.trigger(s.a.FRAG_PARSED, {
                                    frag: t,
                                    part: e
                                })
                            }, d.resetTransmuxer = function () {
                                this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                            }, n = r, (h = [{
                                key: "state",
                                get: function () {
                                    return this._state
                                },
                                set: function (t) {
                                    var e = this._state;
                                    e !== t && (this._state = t, this.log(e + "->" + t))
                                }
                            }]) && Bt(n.prototype, h), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), r
                        }(gt);
                    function te() {
                        return self.MediaSource || self.WebKitMediaSource
                    }
                    function ee() {
                        return self.SourceBuffer || self.WebKitSourceBuffer
                    }
                    var ie = i(19),
                        re = i(11),
                        ne = i(16),
                        ae = te() || {
                            isTypeSupported: function () {
                                return !1
                            }
                        },
                        se = function () {
                            function t(t, e, i, r) {
                                var n = this;
                                this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t, this.id = e, this.onTransmuxComplete = i, this.onFlush = r;
                                var a = t.config,
                                    u = function (e, i) {
                                        (i = i || {}).frag = n.frag, i.id = n.id, t.trigger(e, i)
                                    };
                                this.observer = new ne.EventEmitter, this.observer.on(s.a.FRAG_DECRYPTED, u), this.observer.on(s.a.ERROR, u);
                                var h = {
                                        mp4: ae.isTypeSupported("video/mp4"),
                                        mpeg: ae.isTypeSupported("audio/mpeg"),
                                        mp3: ae.isTypeSupported('audio/mp4; codecs="mp3"')
                                    },
                                    d = navigator.vendor;
                                if (a.enableWorker && "undefined" != typeof Worker) {
                                    var c;
                                    l.b.log("demuxing in webworker");
                                    try {
                                        c = this.worker = ie(20), this.onwmsg = this.onWorkerMessage.bind(this), c.addEventListener("message", this.onwmsg), c.onerror = function (e) {
                                            t.trigger(s.a.ERROR, {
                                                type: o.b.OTHER_ERROR,
                                                details: o.a.INTERNAL_EXCEPTION,
                                                fatal: !0,
                                                event: "demuxerWorker",
                                                error: new Error(e.message + "  (" + e.filename + ":" + e.lineno + ")")
                                            })
                                        }, c.postMessage({
                                            cmd: "init",
                                            typeSupported: h,
                                            vendor: d,
                                            id: e,
                                            config: JSON.stringify(a)
                                        })
                                    } catch (t) {
                                        l.b.warn("Error in worker:", t), l.b.error("Error while initializing DemuxerWorker, fallback to inline"), c && self.URL.revokeObjectURL(c.objectURL), this.transmuxer = new re.c(this.observer, h, a, d, e), this.worker = null
                                    }
                                } else this.transmuxer = new re.c(this.observer, h, a, d, e)
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                var t = this.worker;
                                if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null, this.onwmsg = void 0;
                                else {
                                    var e = this.transmuxer;
                                    e && (e.destroy(), this.transmuxer = null)
                                }
                                var i = this.observer;
                                i && i.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
                            }, e.push = function (t, e, i, r, n, a, s, o, u, h) {
                                var d, c, f = this;
                                u.transmuxing.start = self.performance.now();
                                var v = this.transmuxer,
                                    g = this.worker,
                                    p = a ? a.start : n.start,
                                    m = n.decryptdata,
                                    T = this.frag,
                                    y = !(T && n.cc === T.cc),
                                    b = !(T && u.level === T.level),
                                    E = T ? u.sn - T.sn : -1,
                                    S = this.part ? u.part - this.part.index : -1,
                                    L = 0 === E && u.id > 1 && u.id === (null == T ? void 0 : T.stats.chunkCount),
                                    k = !b && (1 === E || 0 === E && (1 === S || L && S <= 0)),
                                    R = self.performance.now();
                                (b || E || 0 === n.stats.parsing.start) && (n.stats.parsing.start = R), !a || !S && k || (a.stats.parsing.start = R);
                                var A = !(T && (null === (d = n.initSegment) || void 0 === d ? void 0 : d.url) === (null === (c = T.initSegment) || void 0 === c ? void 0 : c.url)),
                                    _ = new re.b(y, k, o, b, p, A);
                                if (!k || y || A) {
                                    l.b.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + y + "\n        trackSwitch: " + b + "\n        contiguous: " + k + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + p + "\n        initSegmentChange: " + A);
                                    var D = new re.a(i, r, e, s, h);
                                    this.configureTransmuxer(D)
                                }
                                if (this.frag = n, this.part = a, g) g.postMessage({
                                    cmd: "demux",
                                    data: t,
                                    decryptdata: m,
                                    chunkMeta: u,
                                    state: _
                                }, t instanceof ArrayBuffer ? [t] : []);
                                else if (v) {
                                    var O = v.push(t, m, u, _);
                                    Object(re.d)(O) ? O.then((function (t) {
                                        f.handleTransmuxComplete(t)
                                    })) : this.handleTransmuxComplete(O)
                                }
                            }, e.flush = function (t) {
                                var e = this;
                                t.transmuxing.start = self.performance.now();
                                var i = this.transmuxer,
                                    r = this.worker;
                                if (r) r.postMessage({
                                    cmd: "flush",
                                    chunkMeta: t
                                });
                                else if (i) {
                                    var n = i.flush(t);
                                    Object(re.d)(n) ? n.then((function (i) {
                                        e.handleFlushResult(i, t)
                                    })) : this.handleFlushResult(n, t)
                                }
                            }, e.handleFlushResult = function (t, e) {
                                var i = this;
                                t.forEach((function (t) {
                                    i.handleTransmuxComplete(t)
                                })), this.onFlush(e)
                            }, e.onWorkerMessage = function (t) {
                                var e = t.data,
                                    i = this.hls;
                                switch (e.event) {
                                case "init":
                                    self.URL.revokeObjectURL(this.worker.objectURL);
                                    break;
                                case "transmuxComplete":
                                    this.handleTransmuxComplete(e.data);
                                    break;
                                case "flush":
                                    this.onFlush(e.data);
                                    break;
                                case "workerLog":
                                    l.b[e.data.logType] && l.b[e.data.logType](e.data.message);
                                    break;
                                default:
                                    e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, i.trigger(e.event, e.data)
                                }
                            }, e.configureTransmuxer = function (t) {
                                var e = this.worker,
                                    i = this.transmuxer;
                                e ? e.postMessage({
                                    cmd: "configure",
                                    config: t
                                }) : i && i.configure(t)
                            }, e.handleTransmuxComplete = function (t) {
                                t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
                            }, t
                        }(),
                        oe = function () {
                            function t(t, e, i, r) {
                                this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = i, this.hls = r
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                this.media = null, this.hls = this.fragmentTracker = null
                            }, e.poll = function (t, e) {
                                var i = this.config,
                                    r = this.media,
                                    n = this.stalled;
                                if (null !== r) {
                                    var a = r.currentTime,
                                        s = r.seeking,
                                        o = this.seeking && !s,
                                        u = !this.seeking && s;
                                    if (this.seeking = s, a === t) {
                                        if ((u || o) && (this.stalled = null), !(r.paused && !s || r.ended || 0 === r.playbackRate) && mt.getBuffered(r).length) {
                                            var h = mt.bufferInfo(r, a, 0),
                                                d = h.len > 0,
                                                c = h.nextStart || 0;
                                            if (d || c) {
                                                if (s) {
                                                    var f = h.len > 2,
                                                        v = !c || e && e.start <= a || c - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                                    if (f || v) return;
                                                    this.moved = !1
                                                }
                                                if (!this.moved && null !== this.stalled) {
                                                    var g, p = Math.max(c, h.start || 0) - a,
                                                        m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                                        T = (null == m || null === (g = m.details) || void 0 === g ? void 0 : g.live) ? 2 * m.details.targetduration : 2;
                                                    if (p > 0 && p <= T) return void this._trySkipBufferHole(null)
                                                }
                                                var y = self.performance.now();
                                                if (null !== n) {
                                                    var b = y - n;
                                                    if (s || !(b >= 250) || (this._reportStall(h), this.media)) {
                                                        var E = mt.bufferInfo(r, a, i.maxBufferHole);
                                                        this._tryFixBufferStall(E, b)
                                                    }
                                                } else this.stalled = y
                                            }
                                        }
                                    } else if (this.moved = !0, null !== n) {
                                        if (this.stallReported) {
                                            var S = self.performance.now() - n;
                                            l.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(S) + "ms"), this.stallReported = !1
                                        }
                                        this.stalled = null, this.nudgeRetry = 0
                                    }
                                }
                            }, e._tryFixBufferStall = function (t, e) {
                                var i = this.config,
                                    r = this.fragmentTracker,
                                    n = this.media;
                                if (null !== n) {
                                    var a = n.currentTime,
                                        s = r.getPartialFragment(a);
                                    if (s && (this._trySkipBufferHole(s) || !this.media)) return;
                                    t.len > i.maxBufferHole && e > 1e3 * i.highBufferWatchdogPeriod && (l.b.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                                }
                            }, e._reportStall = function (t) {
                                var e = this.hls,
                                    i = this.media;
                                !this.stallReported && i && (this.stallReported = !0, l.b.warn("Playback stalling at @" + i.currentTime + " due to low buffer (" + JSON.stringify(t) + ")"), e.trigger(s.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.BUFFER_STALLED_ERROR,
                                    fatal: !1,
                                    buffer: t.len
                                }))
                            }, e._trySkipBufferHole = function (t) {
                                var e = this.config,
                                    i = this.hls,
                                    r = this.media;
                                if (null === r) return 0;
                                for (var n = r.currentTime, a = 0, u = mt.getBuffered(r), h = 0; h < u.length; h++) {
                                    var d = u.start(h);
                                    if (n + e.maxBufferHole >= a && n < d) {
                                        var c = Math.max(d + .05, r.currentTime + .1);
                                        return l.b.warn("skipping hole, adjusting currentTime from " + n + " to " + c), this.moved = !0, this.stalled = null, r.currentTime = c, t && i.trigger(s.a.ERROR, {
                                            type: o.b.MEDIA_ERROR,
                                            details: o.a.BUFFER_SEEK_OVER_HOLE,
                                            fatal: !1,
                                            reason: "fragment loaded with buffer holes, seeking from " + n + " to " + c,
                                            frag: t
                                        }), c
                                    }
                                    a = u.end(h)
                                }
                                return 0
                            }, e._tryNudgeBuffer = function () {
                                var t = this.config,
                                    e = this.hls,
                                    i = this.media,
                                    r = this.nudgeRetry;
                                if (null !== i) {
                                    var n = i.currentTime;
                                    if (this.nudgeRetry++, r < t.nudgeMaxRetry) {
                                        var a = n + (r + 1) * t.nudgeOffset;
                                        l.b.warn("Nudging 'currentTime' from " + n + " to " + a), i.currentTime = a, e.trigger(s.a.ERROR, {
                                            type: o.b.MEDIA_ERROR,
                                            details: o.a.BUFFER_NUDGE_ON_STALL,
                                            fatal: !1
                                        })
                                    } else l.b.error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(s.a.ERROR, {
                                        type: o.b.MEDIA_ERROR,
                                        details: o.a.BUFFER_STALLED_ERROR,
                                        fatal: !0
                                    })
                                }
                            }, t
                        }();
                    function le(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function ue(t, e) {
                        return (ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var he = function (t) {
                            var e, i;
                            function r(e, i) {
                                var r;
                                return (r = t.call(this, e, i, "[stream-controller]") || this).audioCodecSwap = !1, r.gapController = null, r.level = -1, r._forceStartLoad = !1, r.altAudio = !1, r.audioOnly = !1, r.fragPlaying = null, r.onvplaying = null, r.onvseeked = null, r.fragLastKbps = 0, r.couldBacktrack = !1, r.backtrackFragment = null, r.audioCodecSwitch = !1, r.videoBuffer = null, r._registerListeners(), r
                            }
                            i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, ue(e, i);
                            var n, l, u = r.prototype;
                            return u._registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
                            }, u._unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
                            }, u.onHandlerDestroying = function () {
                                this._unregisterListeners(), this.onMediaDetaching()
                            }, u.startLoad = function (t) {
                                if (this.levels) {
                                    var e = this.lastCurrentTime,
                                        i = this.hls;
                                    if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                        var r = i.startLevel; - 1 === r && (i.config.testBandwidth ? (r = 0, this.bitrateTest = !0) : r = i.nextAutoLevel), this.level = i.nextLoadLevel = r, this.loadedmetadata = !1
                                    }
                                    e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = Ht, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                                } else this._forceStartLoad = !0, this.state = Gt
                            }, u.stopLoad = function () {
                                this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
                            }, u.doTick = function () {
                                switch (this.state) {
                                case Ht:
                                    this.doTickIdle();
                                    break;
                                case Jt:
                                    var t, e = this.levels,
                                        i = this.level,
                                        r = null == e || null === (t = e[i]) || void 0 === t ? void 0 : t.details;
                                    if (r && (!r.live || this.levelLastLoaded === this.level)) {
                                        if (this.waitForCdnTuneIn(r)) break;
                                        this.state = Ht;
                                        break
                                    }
                                    break;
                                case Wt:
                                    var n, a = self.performance.now(),
                                        s = this.retryDate;
                                    (!s || a >= s || null !== (n = this.media) && void 0 !== n && n.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = Ht)
                                }
                                this.onTickEnd()
                            }, u.onTickEnd = function () {
                                t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
                            }, u.doTickIdle = function () {
                                var t, e, i = this.hls,
                                    r = this.levelLastLoaded,
                                    n = this.levels,
                                    a = this.media,
                                    o = i.config,
                                    l = i.nextLoadLevel;
                                if (null !== r && (a || !this.startFragRequested && o.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && n && n[l]) {
                                    var u = n[l];
                                    this.level = i.nextLoadLevel = l;
                                    var h = u.details;
                                    if (!h || this.state === Jt || h.live && this.levelLastLoaded !== l) this.state = Jt;
                                    else {
                                        var d = this.getMainFwdBufferInfo();
                                        if (null !== d && !(d.len >= this.getMaxBufferLength(u.maxBitrate))) {
                                            if (this._streamEnded(d, h)) {
                                                var c = {};
                                                return this.altAudio && (c.type = "video"), this.hls.trigger(s.a.BUFFER_EOS, c), void(this.state = zt)
                                            }
                                            this.backtrackFragment && this.backtrackFragment.start > d.end && (this.backtrackFragment = null);
                                            var f = this.backtrackFragment ? this.backtrackFragment.start : d.end,
                                                v = this.getNextFragment(f, h);
                                            if (this.couldBacktrack && !this.fragPrevious && v && "initSegment" !== v.sn && this.fragmentTracker.getState(v) !== ut.OK) {
                                                var g, m = (null != (g = this.backtrackFragment) ? g : v).sn - h.startSN,
                                                    T = h.fragments[m - 1];
                                                T && v.cc === T.cc && (v = T, this.fragmentTracker.removeFragment(T))
                                            } else this.backtrackFragment && d.len && (this.backtrackFragment = null);
                                            if (v && this.fragmentTracker.getState(v) === ut.OK && this.nextLoadPosition > f) {
                                                var y = this.audioOnly && !this.altAudio ? p.a.AUDIO : p.a.VIDEO;
                                                this.afterBufferFlushed(a, y, w.b.MAIN), v = this.getNextFragment(this.nextLoadPosition, h)
                                            }
                                            v && (!v.initSegment || v.initSegment.data || this.bitrateTest || (v = v.initSegment), "identity" !== (null === (t = v.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = v.decryptdata) && void 0 !== e && e.key ? this.loadFragment(v, h, f) : this.loadKey(v, h))
                                        }
                                    }
                                }
                            }, u.loadFragment = function (e, i, r) {
                                var n, a = this.fragmentTracker.getState(e);
                                this.fragCurrent = e, a === ut.NOT_LOADED || a === ut.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0, this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, i, r)) : a === ut.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) && this.fragmentTracker.removeAllFragments()
                            }, u.getAppendedFrag = function (t) {
                                var e = this.fragmentTracker.getAppendedFrag(t, w.b.MAIN);
                                return e && "fragment" in e ? e.fragment : e
                            }, u.getBufferedFrag = function (t) {
                                return this.fragmentTracker.getBufferedFrag(t, w.b.MAIN)
                            }, u.followingBufferedFrag = function (t) {
                                return t ? this.getBufferedFrag(t.end + .5) : null
                            }, u.immediateLevelSwitch = function () {
                                this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                            }, u.nextLevelSwitch = function () {
                                var t = this.levels,
                                    e = this.media;
                                if (null != e && e.readyState) {
                                    var i, r = this.getAppendedFrag(e.currentTime);
                                    if (r && r.start > 1 && this.flushMainBuffer(0, r.start - 1), !e.paused && t) {
                                        var n = t[this.hls.nextLoadLevel],
                                            a = this.fragLastKbps;
                                        i = a && this.fragCurrent ? this.fragCurrent.duration * n.maxBitrate / (1e3 * a) + 1 : 0
                                    } else i = 0;
                                    var s = this.getBufferedFrag(e.currentTime + i);
                                    if (s) {
                                        var o = this.followingBufferedFrag(s);
                                        if (o) {
                                            this.abortCurrentFrag();
                                            var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                                                u = o.duration,
                                                h = Math.max(s.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
                                            this.flushMainBuffer(h, Number.POSITIVE_INFINITY)
                                        }
                                    }
                                }
                            }, u.abortCurrentFrag = function () {
                                var t = this.fragCurrent;
                                switch (this.fragCurrent = null, this.backtrackFragment = null, null != t && t.loader && t.loader.abort(), this.state) {
                                case Kt:
                                case Vt:
                                case Wt:
                                case qt:
                                case Xt:
                                    this.state = Ht
                                }
                                this.nextLoadPosition = this.getLoadPosition()
                            }, u.flushMainBuffer = function (e, i) {
                                t.prototype.flushMainBuffer.call(this, e, i, this.altAudio ? "video" : null)
                            }, u.onMediaAttached = function (e, i) {
                                t.prototype.onMediaAttached.call(this, e, i);
                                var r = i.media;
                                this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), r.addEventListener("playing", this.onvplaying), r.addEventListener("seeked", this.onvseeked), this.gapController = new oe(this.config, r, this.fragmentTracker, this.hls)
                            }, u.onMediaDetaching = function () {
                                var e = this.media;
                                e && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
                            }, u.onMediaPlaying = function () {
                                this.tick()
                            }, u.onMediaSeeked = function () {
                                var t = this.media,
                                    e = t ? t.currentTime : null;
                                Object(a.a)(e) && this.log("Media seeked to " + e.toFixed(3)), this.tick()
                            }, u.onManifestLoading = function () {
                                this.log("Trigger BUFFER_RESET"), this.hls.trigger(s.a.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null, this.backtrackFragment = null
                            }, u.onManifestParsed = function (t, e) {
                                var i, r, n, a = !1,
                                    s = !1;
                                e.levels.forEach((function (t) {
                                    (i = t.audioCodec) && (-1 !== i.indexOf("mp4a.40.2") && (a = !0), -1 !== i.indexOf("mp4a.40.5") && (s = !0))
                                })), this.audioCodecSwitch = a && s && !("function" == typeof (null == (n = ee()) || null === (r = n.prototype) || void 0 === r ? void 0 : r.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
                            }, u.onLevelLoading = function (t, e) {
                                var i = this.levels;
                                if (i && this.state === Ht) {
                                    var r = i[e.level];
                                    (!r.details || r.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(r.details)) && (this.state = Jt)
                                }
                            }, u.onLevelLoaded = function (t, e) {
                                var i, r = this.levels,
                                    n = e.level,
                                    a = e.details,
                                    o = a.totalduration;
                                if (r) {
                                    this.log("Level " + n + " loaded [" + a.startSN + "," + a.endSN + "], cc [" + a.startCC + ", " + a.endCC + "] duration:" + o);
                                    var l = this.fragCurrent;
                                    !l || this.state !== Vt && this.state !== Wt || l.level !== e.level && l.loader && (this.state = Ht, this.backtrackFragment = null, l.loader.abort());
                                    var u = r[n],
                                        h = 0;
                                    if (a.live || null !== (i = u.details) && void 0 !== i && i.live) {
                                        if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed) return;
                                        h = this.alignPlaylists(a, u.details)
                                    }
                                    if (u.details = a, this.levelLastLoaded = n, this.hls.trigger(s.a.LEVEL_UPDATED, {
                                            details: a,
                                            level: n
                                        }), this.state === Jt) {
                                        if (this.waitForCdnTuneIn(a)) return;
                                        this.state = Ht
                                    }
                                    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, h), this.tick()
                                } else this.warn("Levels were reset while loading level " + n)
                            }, u._handleFragmentLoadProgress = function (t) {
                                var e, i = t.frag,
                                    r = t.part,
                                    n = t.payload,
                                    a = this.levels;
                                if (a) {
                                    var s = a[i.level],
                                        o = s.details;
                                    if (o) {
                                        var l = s.videoCodec,
                                            u = o.PTSKnown || !o.live,
                                            h = null === (e = i.initSegment) || void 0 === e ? void 0 : e.data,
                                            d = this._getAudioCodec(s),
                                            c = this.transmuxer = this.transmuxer || new se(this.hls, w.b.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                                            f = r ? r.index : -1,
                                            v = -1 !== f,
                                            g = new Tt(i.level, i.sn, i.stats.chunkCount, n.byteLength, f, v),
                                            p = this.initPTS[i.cc];
                                        c.push(n, h, d, l, i, r, o.totalduration, u, g, p)
                                    } else this.warn("Dropping fragment " + i.sn + " of level " + i.level + " after level details were reset")
                                } else this.warn("Levels were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered")
                            }, u.onAudioTrackSwitching = function (t, e) {
                                var i = this.altAudio,
                                    r = !!e.url,
                                    n = e.id;
                                if (!r) {
                                    if (this.mediaBuffer !== this.media) {
                                        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                        var a = this.fragCurrent;
                                        null != a && a.loader && (this.log("Switching to main audio track, cancel main fragment load"), a.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()
                                    } else this.audioOnly && this.resetTransmuxer();
                                    var o = this.hls;
                                    i && o.trigger(s.a.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY,
                                        type: "audio"
                                    }), o.trigger(s.a.AUDIO_TRACK_SWITCHED, {
                                        id: n
                                    })
                                }
                            }, u.onAudioTrackSwitched = function (t, e) {
                                var i = e.id,
                                    r = !!this.hls.audioTracks[i].url;
                                if (r) {
                                    var n = this.videoBuffer;
                                    n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                                }
                                this.altAudio = r, this.tick()
                            }, u.onBufferCreated = function (t, e) {
                                var i, r, n = e.tracks,
                                    a = !1;
                                for (var s in n) {
                                    var o = n[s];
                                    if ("main" === o.id) {
                                        if (r = s, i = o, "video" === s) {
                                            var l = n[s];
                                            l && (this.videoBuffer = l.buffer)
                                        }
                                    } else a = !0
                                }
                                a && i ? (this.log("Alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
                            }, u.onFragBuffered = function (t, e) {
                                var i = e.frag,
                                    r = e.part;
                                if (!i || i.type === w.b.MAIN) {
                                    if (this.fragContextChanged(i)) return this.warn("Fragment " + i.sn + (r ? " p: " + r.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state), void(this.state === Xt && (this.state = Ht));
                                    var n = r ? r.stats : i.stats;
                                    this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)), "initSegment" !== i.sn && (this.fragPrevious = i), this.fragBufferedComplete(i, r)
                                }
                            }, u.onError = function (t, e) {
                                switch (e.details) {
                                case o.a.FRAG_LOAD_ERROR:
                                case o.a.FRAG_LOAD_TIMEOUT:
                                case o.a.KEY_LOAD_ERROR:
                                case o.a.KEY_LOAD_TIMEOUT:
                                    this.onFragmentOrKeyLoadError(w.b.MAIN, e);
                                    break;
                                case o.a.LEVEL_LOAD_ERROR:
                                case o.a.LEVEL_LOAD_TIMEOUT:
                                    this.state !== Zt && (e.fatal ? (this.warn("" + e.details), this.state = Zt) : e.levelRetry || this.state !== Jt || (this.state = Ht));
                                    break;
                                case o.a.BUFFER_FULL_ERROR:
                                    if ("main" === e.parent && (this.state === qt || this.state === Xt)) {
                                        var i = !0,
                                            r = this.getFwdBufferInfo(this.media, w.b.MAIN);
                                        r && r.len > .5 && (i = !this.reduceMaxBufferLength(r.len)), i && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState()
                                    }
                                }
                            }, u.checkBuffer = function () {
                                var t = this.media,
                                    e = this.gapController;
                                if (t && e && t.readyState) {
                                    var i = mt.getBuffered(t);
                                    if (!this.loadedmetadata && i.length) this.loadedmetadata = !0, this.seekToStartPos();
                                    else {
                                        var r = this.state !== Ht ? this.fragCurrent : null;
                                        e.poll(this.lastCurrentTime, r)
                                    }
                                    this.lastCurrentTime = t.currentTime
                                }
                            }, u.onFragLoadEmergencyAborted = function () {
                                this.state = Ht, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
                            }, u.onBufferFlushed = function (t, e) {
                                var i = e.type;
                                if (i !== p.a.AUDIO || this.audioOnly && !this.altAudio) {
                                    var r = (i === p.a.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                                    this.afterBufferFlushed(r, i, w.b.MAIN)
                                }
                            }, u.onLevelsUpdated = function (t, e) {
                                this.levels = e.levels
                            }, u.swapAudioCodec = function () {
                                this.audioCodecSwap = !this.audioCodecSwap
                            }, u.seekToStartPos = function () {
                                var t = this.media,
                                    e = t.currentTime,
                                    i = this.startPosition;
                                if (i >= 0 && e < i) {
                                    if (t.seeking) return void this.log("could not seek to " + i + ", already seeking at " + e);
                                    var r = mt.getBuffered(t),
                                        n = (r.length ? r.start(0) : 0) - i;
                                    n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n + " to match buffer start"), i += n, this.startPosition = i), this.log("seek to target start position " + i + " from current time " + e), t.currentTime = i
                                }
                            }, u._getAudioCodec = function (t) {
                                var e = this.config.defaultAudioCodec || t.audioCodec;
                                return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
                            }, u._loadBitrateTestFrag = function (t) {
                                var e = this;
                                this._doFragLoad(t).then((function (i) {
                                    var r = e.hls;
                                    if (i && !r.nextLoadLevel && !e.fragContextChanged(t)) {
                                        e.fragLoadError = 0, e.state = Ht, e.startFragRequested = !1, e.bitrateTest = !1;
                                        var n = t.stats;
                                        n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(), r.trigger(s.a.FRAG_LOADED, i)
                                    }
                                }))
                            }, u._handleTransmuxComplete = function (t) {
                                var e, i = "main",
                                    r = this.hls,
                                    n = t.remuxResult,
                                    o = t.chunkMeta,
                                    l = this.getCurrentContext(o);
                                if (!l) return this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(o.level);
                                var u = l.frag,
                                    h = l.part,
                                    d = l.level,
                                    c = n.video,
                                    f = n.text,
                                    v = n.id3,
                                    g = n.initSegment,
                                    m = d.details,
                                    T = this.altAudio ? void 0 : n.audio;
                                if (!this.fragContextChanged(u)) {
                                    if (this.state = qt, g) {
                                        g.tracks && (this._bufferInitSegment(d, g.tracks, u, o), r.trigger(s.a.FRAG_PARSING_INIT_SEGMENT, {
                                            frag: u,
                                            id: i,
                                            tracks: g.tracks
                                        }));
                                        var y = g.initPTS,
                                            b = g.timescale;
                                        Object(a.a)(y) && (this.initPTS[u.cc] = y, r.trigger(s.a.INIT_PTS_FOUND, {
                                            frag: u,
                                            id: i,
                                            initPTS: y,
                                            timescale: b
                                        }))
                                    }
                                    if (c && !1 !== n.independent) {
                                        if (m) {
                                            var E = c.startPTS,
                                                S = c.endPTS,
                                                L = c.startDTS,
                                                k = c.endDTS;
                                            if (h) h.elementaryStreams[c.type] = {
                                                startPTS: E,
                                                endPTS: S,
                                                startDTS: L,
                                                endDTS: k
                                            };
                                            else if (c.firstKeyFrame && c.independent && (this.couldBacktrack = !0), c.dropped && c.independent) {
                                                var R = this.getMainFwdBufferInfo();
                                                if ((R ? R.end : this.getLoadPosition()) + this.config.maxBufferHole < (c.firstKeyFramePTS ? c.firstKeyFramePTS : E) - this.config.maxBufferHole) return void this.backtrack(u);
                                                u.setElementaryStreamInfo(c.type, u.start, S, u.start, k, !0)
                                            }
                                            u.setElementaryStreamInfo(c.type, E, S, L, k), this.backtrackFragment && (this.backtrackFragment = u), this.bufferFragmentData(c, u, h, o)
                                        }
                                    } else if (!1 === n.independent) return void this.backtrack(u);
                                    if (T) {
                                        var A = T.startPTS,
                                            _ = T.endPTS,
                                            D = T.startDTS,
                                            O = T.endDTS;
                                        h && (h.elementaryStreams[p.a.AUDIO] = {
                                            startPTS: A,
                                            endPTS: _,
                                            startDTS: D,
                                            endDTS: O
                                        }), u.setElementaryStreamInfo(p.a.AUDIO, A, _, D, O), this.bufferFragmentData(T, u, h, o)
                                    }
                                    if (m && null != v && null !== (e = v.samples) && void 0 !== e && e.length) {
                                        var C = {
                                            id: i,
                                            frag: u,
                                            details: m,
                                            samples: v.samples
                                        };
                                        r.trigger(s.a.FRAG_PARSING_METADATA, C)
                                    }
                                    if (m && f) {
                                        var I = {
                                            id: i,
                                            frag: u,
                                            details: m,
                                            samples: f.samples
                                        };
                                        r.trigger(s.a.FRAG_PARSING_USERDATA, I)
                                    }
                                }
                            }, u._bufferInitSegment = function (t, e, i, r) {
                                var n = this;
                                if (this.state === qt) {
                                    this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                                    var a = e.audio,
                                        o = e.video,
                                        l = e.audiovideo;
                                    if (a) {
                                        var u = t.audioCodec,
                                            h = navigator.userAgent.toLowerCase();
                                        this.audioCodecSwitch && (u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a.metadata.channelCount && -1 === h.indexOf("firefox") && (u = "mp4a.40.5")), -1 !== h.indexOf("android") && "audio/mpeg" !== a.container && (u = "mp4a.40.2", this.log("Android: force audio codec to " + u)), t.audioCodec && t.audioCodec !== u && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"'), a.levelCodec = u, a.id = "main", this.log("Init audio buffer, container:" + a.container + ", codecs[selected/level/parsed]=[" + (u || "") + "/" + (t.audioCodec || "") + "/" + a.codec + "]")
                                    }
                                    o && (o.levelCodec = t.videoCodec, o.id = "main", this.log("Init video buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + o.codec + "]")), l && this.log("Init audiovideo buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + l.codec + "]"), this.hls.trigger(s.a.BUFFER_CODECS, e), Object.keys(e).forEach((function (t) {
                                        var a = e[t].initSegment;
                                        null != a && a.byteLength && n.hls.trigger(s.a.BUFFER_APPENDING, {
                                            type: t,
                                            data: a,
                                            frag: i,
                                            part: null,
                                            chunkMeta: r,
                                            parent: i.type
                                        })
                                    })), this.tick()
                                }
                            }, u.getMainFwdBufferInfo = function () {
                                return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, w.b.MAIN)
                            }, u.backtrack = function (t) {
                                this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Ht
                            }, u.checkFragmentChanged = function () {
                                var t = this.media,
                                    e = null;
                                if (t && t.readyState > 1 && !1 === t.seeking) {
                                    var i = t.currentTime;
                                    if (mt.isBuffered(t, i) ? e = this.getAppendedFrag(i) : mt.isBuffered(t, i + .1) && (e = this.getAppendedFrag(i + .1)), e) {
                                        this.backtrackFragment = null;
                                        var r = this.fragPlaying,
                                            n = e.level;
                                        r && e.sn === r.sn && r.level === n && e.urlId === r.urlId || (this.hls.trigger(s.a.FRAG_CHANGED, {
                                            frag: e
                                        }), r && r.level === n || this.hls.trigger(s.a.LEVEL_SWITCHED, {
                                            level: n
                                        }), this.fragPlaying = e)
                                    }
                                }
                            }, n = r, (l = [{
                                key: "nextLevel",
                                get: function () {
                                    var t = this.nextBufferedFrag;
                                    return t ? t.level : -1
                                }
                            }, {
                                key: "currentFrag",
                                get: function () {
                                    var t = this.media;
                                    return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
                                }
                            }, {
                                key: "currentProgramDateTime",
                                get: function () {
                                    var t = this.media;
                                    if (t) {
                                        var e = t.currentTime,
                                            i = this.currentFrag;
                                        if (i && Object(a.a)(e) && Object(a.a)(i.programDateTime)) {
                                            var r = i.programDateTime + 1e3 * (e - i.start);
                                            return new Date(r)
                                        }
                                    }
                                    return null
                                }
                            }, {
                                key: "currentLevel",
                                get: function () {
                                    var t = this.currentFrag;
                                    return t ? t.level : -1
                                }
                            }, {
                                key: "nextBufferedFrag",
                                get: function () {
                                    var t = this.currentFrag;
                                    return t ? this.followingBufferedFrag(t) : null
                                }
                            }, {
                                key: "forceStartLoad",
                                get: function () {
                                    return this._forceStartLoad
                                }
                            }]) && le(n.prototype, l), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), r
                        }($t),
                        de = function () {
                            function t(t, e, i) {
                                void 0 === e && (e = 0), void 0 === i && (i = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = i
                            }
                            var e = t.prototype;
                            return e.sample = function (t, e) {
                                var i = Math.pow(this.alpha_, t);
                                this.estimate_ = e * (1 - i) + i * this.estimate_, this.totalWeight_ += t
                            }, e.getTotalWeight = function () {
                                return this.totalWeight_
                            }, e.getEstimate = function () {
                                if (this.alpha_) {
                                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                    if (t) return this.estimate_ / t
                                }
                                return this.estimate_
                            }, t
                        }(),
                        ce = function () {
                            function t(t, e, i) {
                                this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new de(t), this.fast_ = new de(e)
                            }
                            var e = t.prototype;
                            return e.update = function (t, e) {
                                var i = this.slow_,
                                    r = this.fast_;
                                this.slow_.halfLife !== t && (this.slow_ = new de(t, i.getEstimate(), i.getTotalWeight())), this.fast_.halfLife !== e && (this.fast_ = new de(e, r.getEstimate(), r.getTotalWeight()))
                            }, e.sample = function (t, e) {
                                var i = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                                    r = 8 * e / i;
                                this.fast_.sample(i, r), this.slow_.sample(i, r)
                            }, e.canEstimate = function () {
                                var t = this.fast_;
                                return t && t.getTotalWeight() >= this.minWeight_
                            }, e.getEstimate = function () {
                                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                            }, e.destroy = function () {}, t
                        }();
                    function fe(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var ve = function () {
                            function t(t) {
                                this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
                                var e = t.config;
                                this.bwEstimator = new ce(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
                            }
                            var e, i, r = t.prototype;
                            return r.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.FRAG_LOADING, this.onFragLoading, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.ERROR, this.onError, this)
                            }, r.unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.FRAG_LOADING, this.onFragLoading, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.ERROR, this.onError, this)
                            }, r.destroy = function () {
                                this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
                            }, r.onFragLoading = function (t, e) {
                                var i, r = e.frag;
                                r.type === w.b.MAIN && (this.timer || (this.fragCurrent = r, this.partCurrent = null != (i = e.part) ? i : null, this.timer = self.setInterval(this.onCheck, 100)))
                            }, r.onLevelLoaded = function (t, e) {
                                var i = this.hls.config;
                                e.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD)
                            }, r._abandonRulesCheck = function () {
                                var t = this.fragCurrent,
                                    e = this.partCurrent,
                                    i = this.hls,
                                    r = i.autoLevelEnabled,
                                    n = i.config,
                                    o = i.media;
                                if (t && o) {
                                    var u = e ? e.stats : t.stats,
                                        h = e ? e.duration : t.duration;
                                    if (u.aborted) return l.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                                    if (r && !o.paused && o.playbackRate && o.readyState) {
                                        var d = performance.now() - u.loading.start,
                                            c = Math.abs(o.playbackRate);
                                        if (!(d <= 500 * h / c)) {
                                            var f = i.levels,
                                                v = i.minAutoLevel,
                                                g = f[t.level],
                                                p = u.total || Math.max(u.loaded, Math.round(h * g.maxBitrate / 8)),
                                                m = Math.max(1, u.bwEstimate ? u.bwEstimate / 8 : 1e3 * u.loaded / d),
                                                T = (p - u.loaded) / m,
                                                y = o.currentTime,
                                                b = (mt.bufferInfo(o, y, n.maxBufferHole).end - y) / c;
                                            if (!(b >= 2 * h / c || T <= b)) {
                                                var E, S = Number.POSITIVE_INFINITY;
                                                for (E = t.level - 1; E > v && !((S = h * f[E].maxBitrate / (6.4 * m)) < b); E--);
                                                if (!(S >= T)) {
                                                    var L = this.bwEstimator.getEstimate();
                                                    l.b.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + E + "\n      Current BW estimate: " + (Object(a.a)(L) ? (L / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + T.toFixed(3) + " s\n      Estimated load time for the next fragment: " + S.toFixed(3) + " s\n      Time to underbuffer: " + b.toFixed(3) + " s"), i.nextLoadLevel = E, this.bwEstimator.sample(d, u.loaded), this.clearTimer(), t.loader && (this.fragCurrent = this.partCurrent = null, t.loader.abort()), i.trigger(s.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                        frag: t,
                                                        part: e,
                                                        stats: u
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }, r.onFragLoaded = function (t, e) {
                                var i = e.frag,
                                    r = e.part;
                                if (i.type === w.b.MAIN && Object(a.a)(i.sn)) {
                                    var n = r ? r.stats : i.stats,
                                        o = r ? r.duration : i.duration;
                                    if (this.clearTimer(), this.lastLoadedFragLevel = i.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                        var l = this.hls.levels[i.level],
                                            u = (l.loaded ? l.loaded.bytes : 0) + n.loaded,
                                            h = (l.loaded ? l.loaded.duration : 0) + o;
                                        l.loaded = {
                                            bytes: u,
                                            duration: h
                                        }, l.realBitrate = Math.round(8 * u / h)
                                    }
                                    if (i.bitrateTest) {
                                        var d = {
                                            stats: n,
                                            frag: i,
                                            part: r,
                                            id: i.type
                                        };
                                        this.onFragBuffered(s.a.FRAG_BUFFERED, d), i.bitrateTest = !1
                                    }
                                }
                            }, r.onFragBuffered = function (t, e) {
                                var i = e.frag,
                                    r = e.part,
                                    n = r ? r.stats : i.stats;
                                if (!n.aborted && i.type === w.b.MAIN && "initSegment" !== i.sn) {
                                    var a = n.parsing.end - n.loading.start;
                                    this.bwEstimator.sample(a, n.loaded), n.bwEstimate = this.bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                                }
                            }, r.onError = function (t, e) {
                                switch (e.details) {
                                case o.a.FRAG_LOAD_ERROR:
                                case o.a.FRAG_LOAD_TIMEOUT:
                                    this.clearTimer()
                                }
                            }, r.clearTimer = function () {
                                self.clearInterval(this.timer), this.timer = void 0
                            }, r.getNextABRAutoLevel = function () {
                                var t = this.fragCurrent,
                                    e = this.partCurrent,
                                    i = this.hls,
                                    r = i.maxAutoLevel,
                                    n = i.config,
                                    a = i.minAutoLevel,
                                    s = i.media,
                                    o = e ? e.duration : t ? t.duration : 0,
                                    u = s ? s.currentTime : 0,
                                    h = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
                                    d = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                    c = (mt.bufferInfo(s, u, n.maxBufferHole).end - u) / h,
                                    f = this.findBestLevel(d, a, r, c, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                                if (f >= 0) return f;
                                l.b.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                                var v = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay,
                                    g = n.abrBandWidthFactor,
                                    p = n.abrBandWidthUpFactor;
                                if (!c) {
                                    var m = this.bitrateTestDelay;
                                    m && (v = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - m, l.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), g = p = 1)
                                }
                                return f = this.findBestLevel(d, a, r, c + v, g, p), Math.max(f, 0)
                            }, r.findBestLevel = function (t, e, i, r, n, a) {
                                for (var s, o = this.fragCurrent, u = this.partCurrent, h = this.lastLoadedFragLevel, d = this.hls.levels, c = d[h], f = !(null == c || null === (s = c.details) || void 0 === s || !s.live), v = null == c ? void 0 : c.codecSet, g = u ? u.duration : o ? o.duration : 0, p = i; p >= e; p--) {
                                    var m = d[p];
                                    if (m && (!v || m.codecSet === v)) {
                                        var T, y = m.details,
                                            b = (u ? null == y ? void 0 : y.partTarget : null == y ? void 0 : y.averagetargetduration) || g;
                                        T = p <= h ? n * t : a * t;
                                        var E = d[p].maxBitrate,
                                            S = E * b / T;
                                        if (l.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(T) + "/" + E + "/" + b + "/" + r + "/" + S), T > E && (!S || f && !this.bitrateTestDelay || S < r)) return p
                                    }
                                }
                                return -1
                            }, e = t, (i = [{
                                key: "nextAutoLevel",
                                get: function () {
                                    var t = this._nextAutoLevel,
                                        e = this.bwEstimator;
                                    if (!(-1 === t || e && e.canEstimate())) return t;
                                    var i = this.getNextABRAutoLevel();
                                    return -1 !== t && (i = Math.min(t, i)), i
                                },
                                set: function (t) {
                                    this._nextAutoLevel = t
                                }
                            }]) && fe(e.prototype, i), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }(),
                        ge = i(15);
                    function pe() {
                        return (pe = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    function me(t, e) {
                        return (me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var Te = function (t) {
                        var e, i;
                        function r(e, i) {
                            var r;
                            return (r = t.call(this, e, i, "[audio-stream-controller]") || this).videoBuffer = null, r.videoTrackCC = -1, r.waitingVideoCC = -1, r.audioSwitch = !1, r.trackId = -1, r.waitingData = null, r.mainDetails = null, r.bufferFlushed = !1, r.cachedTrackLoadedData = null, r._registerListeners(), r
                        }
                        i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, me(e, i);
                        var n = r.prototype;
                        return n.onHandlerDestroying = function () {
                            this._unregisterListeners(), this.mainDetails = null
                        }, n._registerListeners = function () {
                            var t = this.hls;
                            t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.BUFFER_RESET, this.onBufferReset, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
                        }, n._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.BUFFER_RESET, this.onBufferReset, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
                        }, n.onInitPtsFound = function (t, e) {
                            var i = e.frag,
                                r = e.id,
                                n = e.initPTS;
                            if ("main" === r) {
                                var a = i.cc;
                                this.initPTS[i.cc] = n, this.log("InitPTS for cc: " + a + " found from main: " + n), this.videoTrackCC = a, this.state === Qt && this.tick()
                            }
                        }, n.startLoad = function (t) {
                            if (!this.levels) return this.startPosition = t, void(this.state = Gt);
                            var e = this.lastCurrentTime;
                            this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = Ht) : (this.loadedmetadata = !1, this.state = Yt), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                        }, n.doTick = function () {
                            switch (this.state) {
                            case Ht:
                                this.doTickIdle();
                                break;
                            case Yt:
                                var e, i = this.levels,
                                    r = this.trackId,
                                    n = null == i || null === (e = i[r]) || void 0 === e ? void 0 : e.details;
                                if (n) {
                                    if (this.waitForCdnTuneIn(n)) break;
                                    this.state = Qt
                                }
                                break;
                            case Wt:
                                var a, s = performance.now(),
                                    o = this.retryDate;
                                (!o || s >= o || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = Ht);
                                break;
                            case Qt:
                                var l = this.waitingData;
                                if (l) {
                                    var u = l.frag,
                                        h = l.part,
                                        d = l.cache,
                                        c = l.complete;
                                    if (void 0 !== this.initPTS[u.cc]) {
                                        this.waitingData = null, this.waitingVideoCC = -1, this.state = Vt;
                                        var f = {
                                            frag: u,
                                            part: h,
                                            payload: d.flush(),
                                            networkDetails: null
                                        };
                                        this._handleFragmentLoadProgress(f), c && t.prototype._handleFragmentLoadComplete.call(this, f)
                                    } else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + u.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                                    else {
                                        var v = this.getLoadPosition(),
                                            g = mt.bufferInfo(this.mediaBuffer, v, this.config.maxBufferHole);
                                        At(g.end, this.config.maxFragLookUpTolerance, u) < 0 && (this.log("Waiting fragment cc (" + u.cc + ") @ " + u.start + " cancelled because another fragment at " + g.end + " is needed"), this.clearWaitingFragment())
                                    }
                                } else this.state = Ht
                            }
                            this.onTickEnd()
                        }, n.clearWaitingFragment = function () {
                            var t = this.waitingData;
                            t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Ht)
                        }, n.resetLoadingState = function () {
                            this.clearWaitingFragment(), t.prototype.resetLoadingState.call(this)
                        }, n.onTickEnd = function () {
                            var t = this.media;
                            if (t && t.readyState) {
                                var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                                !this.loadedmetadata && e.length && (this.loadedmetadata = !0), this.lastCurrentTime = t.currentTime
                            }
                        }, n.doTickIdle = function () {
                            var t, e, i = this.hls,
                                r = this.levels,
                                n = this.media,
                                a = this.trackId,
                                o = i.config;
                            if (r && r[a] && (n || !this.startFragRequested && o.startFragPrefetch)) {
                                var l = r[a].details;
                                if (!l || l.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(l)) this.state = Yt;
                                else {
                                    this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, p.a.AUDIO, w.b.AUDIO));
                                    var u = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, w.b.AUDIO);
                                    if (null !== u) {
                                        var h = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, w.b.MAIN),
                                            d = u.len,
                                            c = this.getMaxBufferLength(null == h ? void 0 : h.len),
                                            f = this.audioSwitch;
                                        if (!(d >= c) || f) {
                                            if (!f && this._streamEnded(u, l)) return i.trigger(s.a.BUFFER_EOS, {
                                                type: "audio"
                                            }), void(this.state = zt);
                                            var v = l.fragments[0].start,
                                                g = u.end;
                                            if (f) {
                                                var m = this.getLoadPosition();
                                                g = m, l.PTSKnown && m < v && (u.end > v || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), n.currentTime = v + .05)
                                            }
                                            if (!(h && g > h.end + l.targetduration) && (h && h.len || !u.len)) {
                                                var T = this.getNextFragment(g, l);
                                                T ? "identity" !== (null === (t = T.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = T.decryptdata) && void 0 !== e && e.key ? this.loadFragment(T, l, g) : this.loadKey(T, l) : this.bufferFlushed = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }, n.getMaxBufferLength = function (e) {
                            var i = t.prototype.getMaxBufferLength.call(this);
                            return e ? Math.max(i, e) : i
                        }, n.onMediaDetaching = function () {
                            this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
                        }, n.onAudioTracksUpdated = function (t, e) {
                            var i = e.audioTracks;
                            this.resetTransmuxer(), this.levels = i.map((function (t) {
                                return new Z(t)
                            }))
                        }, n.onAudioTrackSwitching = function (t, e) {
                            var i = !!e.url;
                            this.trackId = e.id;
                            var r = this.fragCurrent;
                            null != r && r.loader && r.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), i ? this.setInterval(100) : this.resetTransmuxer(), i ? (this.audioSwitch = !0, this.state = Ht) : this.state = Gt, this.tick()
                        }, n.onManifestLoading = function () {
                            this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1
                        }, n.onLevelLoaded = function (t, e) {
                            this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(s.a.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
                        }, n.onAudioTrackLoaded = function (t, e) {
                            var i;
                            if (null != this.mainDetails) {
                                var r = this.levels,
                                    n = e.details,
                                    a = e.id;
                                if (r) {
                                    this.log("Track " + a + " loaded [" + n.startSN + "," + n.endSN + "],duration:" + n.totalduration);
                                    var s = r[a],
                                        o = 0;
                                    if (n.live || null !== (i = s.details) && void 0 !== i && i.live) {
                                        var l = this.mainDetails;
                                        if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed || !l) return;
                                        !s.details && n.hasProgramDateTime && l.hasProgramDateTime ? (Lt(n, l), o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details)
                                    }
                                    s.details = n, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o), this.state !== Yt || this.waitForCdnTuneIn(n) || (this.state = Ht), this.tick()
                                } else this.warn("Audio tracks were reset while loading level " + a)
                            } else this.cachedTrackLoadedData = e
                        }, n._handleFragmentLoadProgress = function (t) {
                            var e, i = t.frag,
                                r = t.part,
                                n = t.payload,
                                a = this.config,
                                s = this.trackId,
                                o = this.levels;
                            if (o) {
                                var l = o[s],
                                    u = l.details,
                                    h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
                                    d = this.transmuxer;
                                d || (d = this.transmuxer = new se(this.hls, w.b.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                                var c = this.initPTS[i.cc],
                                    f = null === (e = i.initSegment) || void 0 === e ? void 0 : e.data;
                                if (void 0 !== c) {
                                    var v = r ? r.index : -1,
                                        g = -1 !== v,
                                        p = new Tt(i.level, i.sn, i.stats.chunkCount, n.byteLength, v, g);
                                    d.push(n, f, h, "", i, r, u.totalduration, !1, p, c)
                                } else this.log("Unknown video PTS for cc " + i.cc + ", waiting for video PTS before demuxing audio frag " + i.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s), (this.waitingData = this.waitingData || {
                                    frag: i,
                                    part: r,
                                    cache: new ge.a,
                                    complete: !1
                                }).cache.push(new Uint8Array(n)), this.waitingVideoCC = this.videoTrackCC, this.state = Qt
                            } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered")
                        }, n._handleFragmentLoadComplete = function (e) {
                            this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
                        }, n.onBufferReset = function () {
                            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                        }, n.onBufferCreated = function (t, e) {
                            var i = e.tracks.audio;
                            i && (this.mediaBuffer = i.buffer), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                        }, n.onFragBuffered = function (t, e) {
                            var i = e.frag,
                                r = e.part;
                            i.type === w.b.AUDIO && (this.fragContextChanged(i) ? this.warn("Fragment " + i.sn + (r ? " p: " + r.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== i.sn && (this.fragPrevious = i, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(s.a.AUDIO_TRACK_SWITCHED, {
                                id: this.trackId
                            }))), this.fragBufferedComplete(i, r)))
                        }, n.onError = function (e, i) {
                            switch (i.details) {
                            case o.a.FRAG_LOAD_ERROR:
                            case o.a.FRAG_LOAD_TIMEOUT:
                            case o.a.KEY_LOAD_ERROR:
                            case o.a.KEY_LOAD_TIMEOUT:
                                this.onFragmentOrKeyLoadError(w.b.AUDIO, i);
                                break;
                            case o.a.AUDIO_TRACK_LOAD_ERROR:
                            case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
                                this.state !== Zt && this.state !== Gt && (this.state = i.fatal ? Zt : Ht, this.warn(i.details + " while loading frag, switching to " + this.state + " state"));
                                break;
                            case o.a.BUFFER_FULL_ERROR:
                                if ("audio" === i.parent && (this.state === qt || this.state === Xt)) {
                                    var r = !0,
                                        n = this.getFwdBufferInfo(this.mediaBuffer, w.b.AUDIO);
                                    n && n.len > .5 && (r = !this.reduceMaxBufferLength(n.len)), r && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState()
                                }
                            }
                        }, n.onBufferFlushed = function (t, e) {
                            e.type === p.a.AUDIO && (this.bufferFlushed = !0)
                        }, n._handleTransmuxComplete = function (t) {
                            var e, i = "audio",
                                r = this.hls,
                                n = t.remuxResult,
                                a = t.chunkMeta,
                                o = this.getCurrentContext(a);
                            if (!o) return this.warn("The loading context changed while buffering fragment " + a.sn + " of level " + a.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(a.level);
                            var l = o.frag,
                                u = o.part,
                                h = o.level.details,
                                d = n.audio,
                                c = n.text,
                                f = n.id3,
                                v = n.initSegment;
                            if (!this.fragContextChanged(l) && h) {
                                if (this.state = qt, this.audioSwitch && d && this.completeAudioSwitch(), null != v && v.tracks && (this._bufferInitSegment(v.tracks, l, a), r.trigger(s.a.FRAG_PARSING_INIT_SEGMENT, {
                                        frag: l,
                                        id: i,
                                        tracks: v.tracks
                                    })), d) {
                                    var g = d.startPTS,
                                        m = d.endPTS,
                                        T = d.startDTS,
                                        y = d.endDTS;
                                    u && (u.elementaryStreams[p.a.AUDIO] = {
                                        startPTS: g,
                                        endPTS: m,
                                        startDTS: T,
                                        endDTS: y
                                    }), l.setElementaryStreamInfo(p.a.AUDIO, g, m, T, y), this.bufferFragmentData(d, l, u, a)
                                }
                                if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
                                    var b = pe({
                                        id: i,
                                        frag: l,
                                        details: h
                                    }, f);
                                    r.trigger(s.a.FRAG_PARSING_METADATA, b)
                                }
                                if (c) {
                                    var E = pe({
                                        id: i,
                                        frag: l,
                                        details: h
                                    }, c);
                                    r.trigger(s.a.FRAG_PARSING_USERDATA, E)
                                }
                            }
                        }, n._bufferInitSegment = function (t, e, i) {
                            if (this.state === qt) {
                                t.video && delete t.video;
                                var r = t.audio;
                                if (r) {
                                    r.levelCodec = r.codec, r.id = "audio", this.log("Init audio buffer, container:" + r.container + ", codecs[parsed]=[" + r.codec + "]"), this.hls.trigger(s.a.BUFFER_CODECS, t);
                                    var n = r.initSegment;
                                    if (null != n && n.byteLength) {
                                        var a = {
                                            type: "audio",
                                            frag: e,
                                            part: null,
                                            chunkMeta: i,
                                            parent: e.type,
                                            data: n
                                        };
                                        this.hls.trigger(s.a.BUFFER_APPENDING, a)
                                    }
                                    this.tick()
                                }
                            }
                        }, n.loadFragment = function (e, i, r) {
                            var n = this.fragmentTracker.getState(e);
                            this.fragCurrent = e, (this.audioSwitch || n === ut.NOT_LOADED || n === ut.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : i.live && !Object(a.a)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Qt) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, i, r)))
                        }, n.completeAudioSwitch = function () {
                            var e = this.hls,
                                i = this.media,
                                r = this.trackId;
                            i && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, e.trigger(s.a.AUDIO_TRACK_SWITCHED, {
                                id: r
                            })
                        }, r
                    }($t);
                    function ye(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function be(t, e) {
                        return (be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var Ee = function (t) {
                        var e, i;
                        function r(e) {
                            var i;
                            return (i = t.call(this, e, "[audio-track-controller]") || this).tracks = [], i.groupId = null, i.tracksInGroup = [], i.trackId = -1, i.trackName = "", i.selectDefaultTrack = !0, i.registerListeners(), i
                        }
                        i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, be(e, i);
                        var n, a, l = r.prototype;
                        return l.registerListeners = function () {
                            var t = this.hls;
                            t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.a.ERROR, this.onError, this)
                        }, l.unregisterListeners = function () {
                            var t = this.hls;
                            t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.a.ERROR, this.onError, this)
                        }, l.destroy = function () {
                            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, t.prototype.destroy.call(this)
                        }, l.onManifestLoading = function () {
                            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0
                        }, l.onManifestParsed = function (t, e) {
                            this.tracks = e.audioTracks || []
                        }, l.onAudioTrackLoaded = function (t, e) {
                            var i = e.id,
                                r = e.details,
                                n = this.tracksInGroup[i];
                            if (n) {
                                var a = n.details;
                                n.details = e.details, this.log("audioTrack " + i + " loaded [" + r.startSN + "-" + r.endSN + "]"), i === this.trackId && (this.retryCount = 0, this.playlistLoaded(i, e, a))
                            } else this.warn("Invalid audio track id " + i)
                        }, l.onLevelLoading = function (t, e) {
                            this.switchLevel(e.level)
                        }, l.onLevelSwitching = function (t, e) {
                            this.switchLevel(e.level)
                        }, l.switchLevel = function (t) {
                            var e = this.hls.levels[t];
                            if (null != e && e.audioGroupIds) {
                                var i = e.audioGroupIds[e.urlId];
                                if (this.groupId !== i) {
                                    this.groupId = i;
                                    var r = this.tracks.filter((function (t) {
                                        return !i || t.groupId === i
                                    }));
                                    this.selectDefaultTrack && !r.some((function (t) {
                                        return t.default
                                    })) && (this.selectDefaultTrack = !1), this.tracksInGroup = r;
                                    var n = {
                                        audioTracks: r
                                    };
                                    this.log("Updating audio tracks, " + r.length + ' track(s) found in "' + i + '" group-id'), this.hls.trigger(s.a.AUDIO_TRACKS_UPDATED, n), this.selectInitialTrack()
                                }
                            }
                        }, l.onError = function (e, i) {
                            t.prototype.onError.call(this, e, i), !i.fatal && i.context && i.context.type === w.a.AUDIO_TRACK && i.context.id === this.trackId && i.context.groupId === this.groupId && this.retryLoadingOrFail(i)
                        }, l.setAudioTrack = function (t) {
                            var e = this.tracksInGroup;
                            if (t < 0 || t >= e.length) this.warn("Invalid id passed to audio-track controller");
                            else {
                                this.clearTimer();
                                var i = e[this.trackId];
                                this.log("Now switching to audio-track index " + t);
                                var r = e[t],
                                    n = r.id,
                                    a = r.groupId,
                                    o = void 0 === a ? "" : a,
                                    l = r.name,
                                    u = r.type,
                                    h = r.url;
                                if (this.trackId = t, this.trackName = l, this.selectDefaultTrack = !1, this.hls.trigger(s.a.AUDIO_TRACK_SWITCHING, {
                                        id: n,
                                        groupId: o,
                                        name: l,
                                        type: u,
                                        url: h
                                    }), !r.details || r.details.live) {
                                    var d = this.switchParams(r.url, null == i ? void 0 : i.details);
                                    this.loadPlaylist(d)
                                }
                            }
                        }, l.selectInitialTrack = function () {
                            this.tracksInGroup;
                            var t = this.trackName,
                                e = this.findTrackId(t) || this.findTrackId(); - 1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(s.a.ERROR, {
                                type: o.b.MEDIA_ERROR,
                                details: o.a.AUDIO_TRACK_LOAD_ERROR,
                                fatal: !0
                            }))
                        }, l.findTrackId = function (t) {
                            for (var e = this.tracksInGroup, i = 0; i < e.length; i++) {
                                var r = e[i];
                                if ((!this.selectDefaultTrack || r.default) && (!t || t === r.name)) return r.id
                            }
                            return -1
                        }, l.loadPlaylist = function (t) {
                            var e = this.tracksInGroup[this.trackId];
                            if (this.shouldLoadTrack(e)) {
                                var i = e.id,
                                    r = e.groupId,
                                    n = e.url;
                                if (t) try {
                                    n = t.addDirectives(n)
                                } catch (t) {
                                    this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                }
                                this.log("loading audio-track playlist for id: " + i), this.clearTimer(), this.hls.trigger(s.a.AUDIO_TRACK_LOADING, {
                                    url: n,
                                    id: i,
                                    groupId: r,
                                    deliveryDirectives: t || null
                                })
                            }
                        }, n = r, (a = [{
                            key: "audioTracks",
                            get: function () {
                                return this.tracksInGroup
                            }
                        }, {
                            key: "audioTrack",
                            get: function () {
                                return this.trackId
                            },
                            set: function (t) {
                                this.selectDefaultTrack = !1, this.setAudioTrack(t)
                            }
                        }]) && ye(n.prototype, a), Object.defineProperty(n, "prototype", {
                            writable: !1
                        }), r
                    }(at);
                    function Se(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function Le(t, e) {
                        return (Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    var ke = function (t) {
                        var e, i;
                        function r(e, i) {
                            var r;
                            return (r = t.call(this, e, i, "[subtitle-stream-controller]") || this).levels = [], r.currentTrackId = -1, r.tracksBuffered = [], r.mainDetails = null, r._registerListeners(), r
                        }
                        i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Le(e, i);
                        var n, a, o = r.prototype;
                        return o.onHandlerDestroying = function () {
                            this._unregisterListeners(), this.mainDetails = null
                        }, o._registerListeners = function () {
                            var t = this.hls;
                            t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
                        }, o._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
                        }, o.startLoad = function () {
                            this.stopLoad(), this.state = Ht, this.setInterval(500), this.tick()
                        }, o.onManifestLoading = function () {
                            this.mainDetails = null, this.fragmentTracker.removeAllFragments()
                        }, o.onLevelLoaded = function (t, e) {
                            this.mainDetails = e.details
                        }, o.onSubtitleFragProcessed = function (t, e) {
                            var i = e.frag,
                                r = e.success;
                            if (this.fragPrevious = i, this.state = Ht, r) {
                                var n = this.tracksBuffered[this.currentTrackId];
                                if (n) {
                                    for (var a, s = i.start, o = 0; o < n.length; o++)
                                        if (s >= n[o].start && s <= n[o].end) {
                                            a = n[o];
                                            break
                                        } var l = i.start + i.duration;
                                    a ? a.end = l : (a = {
                                        start: s,
                                        end: l
                                    }, n.push(a)), this.fragmentTracker.fragBuffered(i)
                                }
                            }
                        }, o.onBufferFlushing = function (t, e) {
                            var i = e.startOffset,
                                r = e.endOffset;
                            if (0 === i && r !== Number.POSITIVE_INFINITY) {
                                var n = this.currentTrackId,
                                    a = this.levels;
                                if (!a.length || !a[n] || !a[n].details) return;
                                var s = r - a[n].details.targetduration;
                                if (s <= 0) return;
                                e.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach((function (t) {
                                    for (var e = 0; e < t.length;)
                                        if (t[e].end <= s) t.shift();
                                        else {
                                            if (!(t[e].start < s)) break;
                                            t[e].start = s, e++
                                        }
                                })), this.fragmentTracker.removeFragmentsInRange(i, s, w.b.SUBTITLE)
                            }
                        }, o.onError = function (t, e) {
                            var i, r = e.frag;
                            r && r.type === w.b.SUBTITLE && (null !== (i = this.fragCurrent) && void 0 !== i && i.loader && this.fragCurrent.loader.abort(), this.state = Ht)
                        }, o.onSubtitleTracksUpdated = function (t, e) {
                            var i = this,
                                r = e.subtitleTracks;
                            this.tracksBuffered = [], this.levels = r.map((function (t) {
                                return new Z(t)
                            })), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach((function (t) {
                                i.tracksBuffered[t.id] = []
                            })), this.mediaBuffer = null
                        }, o.onSubtitleTrackSwitch = function (t, e) {
                            if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
                                var i = this.levels[this.currentTrackId];
                                null != i && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(500)
                            } else this.clearInterval()
                        }, o.onSubtitleTrackLoaded = function (t, e) {
                            var i, r = e.details,
                                n = e.id,
                                a = this.currentTrackId,
                                s = this.levels;
                            if (s.length) {
                                var o = s[a];
                                if (!(n >= s.length || n !== a) && o) {
                                    if (this.mediaBuffer = this.mediaBufferTimeRanges, r.live || null !== (i = o.details) && void 0 !== i && i.live) {
                                        var l = this.mainDetails;
                                        if (r.deltaUpdateFailed || !l) return;
                                        var u = l.fragments[0];
                                        o.details ? 0 === this.alignPlaylists(r, o.details) && u && nt(r, u.start) : r.hasProgramDateTime && l.hasProgramDateTime ? Lt(r, l) : u && nt(r, u.start)
                                    }
                                    o.details = r, this.levelLastLoaded = n, this.tick(), r.live && !this.fragCurrent && this.media && this.state === Ht && (Rt(null, r.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
                                }
                            }
                        }, o._handleFragmentLoadComplete = function (t) {
                            var e = t.frag,
                                i = t.payload,
                                r = e.decryptdata,
                                n = this.hls;
                            if (!this.fragContextChanged(e) && i && i.byteLength > 0 && r && r.key && r.iv && "AES-128" === r.method) {
                                var a = performance.now();
                                this.decrypter.webCryptoDecrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer).then((function (t) {
                                    var i = performance.now();
                                    n.trigger(s.a.FRAG_DECRYPTED, {
                                        frag: e,
                                        payload: t,
                                        stats: {
                                            tstart: a,
                                            tdecrypt: i
                                        }
                                    })
                                }))
                            }
                        }, o.doTick = function () {
                            if (this.media) {
                                if (this.state === Ht) {
                                    var t = this.currentTrackId,
                                        e = this.levels;
                                    if (!e.length || !e[t] || !e[t].details) return;
                                    var i = e[t].details,
                                        r = i.targetduration,
                                        n = this.config,
                                        a = this.media,
                                        s = mt.bufferedInfo(this.mediaBufferTimeRanges, a.currentTime - r, n.maxBufferHole),
                                        o = s.end;
                                    if (s.len > this.getMaxBufferLength() + r) return;
                                    var l, u = i.fragments,
                                        h = u.length,
                                        d = i.edge,
                                        c = this.fragPrevious;
                                    if (o < d) {
                                        var f = n.maxFragLookUpTolerance;
                                        !(l = Rt(c, u, Math.max(u[0].start, o), f)) && c && c.start < u[0].start && (l = u[0])
                                    } else l = u[h - 1];
                                    if (!(l = this.mapToInitFragWhenRequired(l))) return;
                                    l.encrypted ? this.loadKey(l, i) : this.fragmentTracker.getState(l) === ut.NOT_LOADED && this.loadFragment(l, i, o)
                                }
                            } else this.state = Ht
                        }, o.loadFragment = function (e, i, r) {
                            this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e) : t.prototype.loadFragment.call(this, e, i, r)
                        }, n = r, (a = [{
                            key: "mediaBufferTimeRanges",
                            get: function () {
                                return this.tracksBuffered[this.currentTrackId] || []
                            }
                        }]) && Se(n.prototype, a), Object.defineProperty(n, "prototype", {
                            writable: !1
                        }), r
                    }($t);
                    function Re(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function Ae(t, e) {
                        return (Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    function _e(t) {
                        for (var e = [], i = 0; i < t.length; i++) {
                            var r = t[i];
                            "subtitles" === r.kind && r.label && e.push(t[i])
                        }
                        return e
                    }
                    var De, Oe = function (t) {
                            var e, i;
                            function r(e) {
                                var i;
                                return (i = t.call(this, e, "[subtitle-track-controller]") || this).media = null, i.tracks = [], i.groupId = null, i.tracksInGroup = [], i.trackId = -1, i.selectDefaultTrack = !0, i.queuedDefaultTrack = -1, i.trackChangeListener = function () {
                                    return i.onTextTracksChanged()
                                }, i.asyncPollTrackChange = function () {
                                    return i.pollTrackChange(0)
                                }, i.useTextTrackPolling = !1, i.subtitlePollingInterval = -1, i._subtitleDisplay = !0, i.registerListeners(), i
                            }
                            i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Ae(e, i);
                            var n, a, o = r.prototype;
                            return o.destroy = function () {
                                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
                            }, o.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.a.ERROR, this.onError, this)
                            }, o.unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.a.ERROR, this.onError, this)
                            }, o.onMediaAttached = function (t, e) {
                                this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
                            }, o.pollTrackChange = function (t) {
                                self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
                            }, o.onMediaDetaching = function () {
                                this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), _e(this.media.textTracks).forEach((function (t) {
                                    U(t)
                                })), this.subtitleTrack = -1, this.media = null)
                            }, o.onManifestLoading = function () {
                                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
                            }, o.onManifestParsed = function (t, e) {
                                this.tracks = e.subtitleTracks
                            }, o.onSubtitleTrackLoaded = function (t, e) {
                                var i = e.id,
                                    r = e.details,
                                    n = this.trackId,
                                    a = this.tracksInGroup[n];
                                if (a) {
                                    var s = a.details;
                                    a.details = e.details, this.log("subtitle track " + i + " loaded [" + r.startSN + "-" + r.endSN + "]"), i === this.trackId && (this.retryCount = 0, this.playlistLoaded(i, e, s))
                                } else this.warn("Invalid subtitle track id " + i)
                            }, o.onLevelLoading = function (t, e) {
                                this.switchLevel(e.level)
                            }, o.onLevelSwitching = function (t, e) {
                                this.switchLevel(e.level)
                            }, o.switchLevel = function (t) {
                                var e = this.hls.levels[t];
                                if (null != e && e.textGroupIds) {
                                    var i = e.textGroupIds[e.urlId];
                                    if (this.groupId !== i) {
                                        var r = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                                            n = this.tracks.filter((function (t) {
                                                return !i || t.groupId === i
                                            }));
                                        this.tracksInGroup = n;
                                        var a = this.findTrackId(null == r ? void 0 : r.name) || this.findTrackId();
                                        this.groupId = i;
                                        var o = {
                                            subtitleTracks: n
                                        };
                                        this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + i + '" group-id'), this.hls.trigger(s.a.SUBTITLE_TRACKS_UPDATED, o), -1 !== a && this.setSubtitleTrack(a, r)
                                    }
                                }
                            }, o.findTrackId = function (t) {
                                for (var e = this.tracksInGroup, i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    if ((!this.selectDefaultTrack || r.default) && (!t || t === r.name)) return r.id
                                }
                                return -1
                            }, o.onError = function (e, i) {
                                t.prototype.onError.call(this, e, i), !i.fatal && i.context && i.context.type === w.a.SUBTITLE_TRACK && i.context.id === this.trackId && i.context.groupId === this.groupId && this.retryLoadingOrFail(i)
                            }, o.loadPlaylist = function (t) {
                                var e = this.tracksInGroup[this.trackId];
                                if (this.shouldLoadTrack(e)) {
                                    var i = e.id,
                                        r = e.groupId,
                                        n = e.url;
                                    if (t) try {
                                        n = t.addDirectives(n)
                                    } catch (t) {
                                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                    }
                                    this.log("Loading subtitle playlist for id " + i), this.hls.trigger(s.a.SUBTITLE_TRACK_LOADING, {
                                        url: n,
                                        id: i,
                                        groupId: r,
                                        deliveryDirectives: t || null
                                    })
                                }
                            }, o.toggleTrackModes = function (t) {
                                var e = this,
                                    i = this.media,
                                    r = this.trackId;
                                if (i) {
                                    var n = _e(i.textTracks),
                                        a = n.filter((function (t) {
                                            return t.groupId === e.groupId
                                        }));
                                    if (-1 === t)[].slice.call(n).forEach((function (t) {
                                        t.mode = "disabled"
                                    }));
                                    else {
                                        var s = a[r];
                                        s && (s.mode = "disabled")
                                    }
                                    var o = a[t];
                                    o && (o.mode = this.subtitleDisplay ? "showing" : "hidden")
                                }
                            }, o.setSubtitleTrack = function (t, e) {
                                var i, r = this.tracksInGroup;
                                if (this.media) {
                                    if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null !== (i = r[t]) && void 0 !== i && i.details) || t < -1 || t >= r.length)) {
                                        this.clearTimer();
                                        var n = r[t];
                                        if (this.log("Switching to subtitle track " + t), this.trackId = t, n) {
                                            var a = n.id,
                                                o = n.groupId,
                                                l = void 0 === o ? "" : o,
                                                u = n.name,
                                                h = n.type,
                                                d = n.url;
                                            this.hls.trigger(s.a.SUBTITLE_TRACK_SWITCH, {
                                                id: a,
                                                groupId: l,
                                                name: u,
                                                type: h,
                                                url: d
                                            });
                                            var c = this.switchParams(n.url, null == e ? void 0 : e.details);
                                            this.loadPlaylist(c)
                                        } else this.hls.trigger(s.a.SUBTITLE_TRACK_SWITCH, {
                                            id: t
                                        })
                                    }
                                } else this.queuedDefaultTrack = t
                            }, o.onTextTracksChanged = function () {
                                if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
                                    for (var t = -1, e = _e(this.media.textTracks), i = 0; i < e.length; i++)
                                        if ("hidden" === e[i].mode) t = i;
                                        else if ("showing" === e[i].mode) {
                                        t = i;
                                        break
                                    }
                                    this.subtitleTrack !== t && (this.subtitleTrack = t)
                                }
                            }, n = r, (a = [{
                                key: "subtitleDisplay",
                                get: function () {
                                    return this._subtitleDisplay
                                },
                                set: function (t) {
                                    this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes(this.trackId)
                                }
                            }, {
                                key: "subtitleTracks",
                                get: function () {
                                    return this.tracksInGroup
                                }
                            }, {
                                key: "subtitleTrack",
                                get: function () {
                                    return this.trackId
                                },
                                set: function (t) {
                                    this.selectDefaultTrack = !1;
                                    var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                                    this.setSubtitleTrack(t, e)
                                }
                            }]) && Re(n.prototype, a), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), r
                        }(at),
                        Ce = function () {
                            function t(t) {
                                this.buffers = void 0, this.queues = {
                                    video: [],
                                    audio: [],
                                    audiovideo: []
                                }, this.buffers = t
                            }
                            var e = t.prototype;
                            return e.append = function (t, e) {
                                var i = this.queues[e];
                                i.push(t), 1 === i.length && this.buffers[e] && this.executeNext(e)
                            }, e.insertAbort = function (t, e) {
                                this.queues[e].unshift(t), this.executeNext(e)
                            }, e.appendBlocker = function (t) {
                                var e, i = new Promise((function (t) {
                                        e = t
                                    })),
                                    r = {
                                        execute: e,
                                        onStart: function () {},
                                        onComplete: function () {},
                                        onError: function () {}
                                    };
                                return this.append(r, t), i
                            }, e.executeNext = function (t) {
                                var e = this.buffers,
                                    i = this.queues,
                                    r = e[t],
                                    n = i[t];
                                if (n.length) {
                                    var a = n[0];
                                    try {
                                        a.execute()
                                    } catch (e) {
                                        l.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), a.onError(e), r && r.updating || (n.shift(), this.executeNext(t))
                                    }
                                }
                            }, e.shiftAndExecuteNext = function (t) {
                                this.queues[t].shift(), this.executeNext(t)
                            }, e.current = function (t) {
                                return this.queues[t][0]
                            }, t
                        }(),
                        Ie = te(),
                        we = /([ha]vc.)(?:\.[^.,]+)+/,
                        xe = function () {
                            function t(t) {
                                var e = this;
                                this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function () {
                                    var t = e.hls,
                                        i = e.media,
                                        r = e.mediaSource;
                                    l.b.log("[buffer-controller]: Media source opened"), i && (e.updateMediaElementDuration(), t.trigger(s.a.MEDIA_ATTACHED, {
                                        media: i
                                    })), r && r.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                                }, this._onMediaSourceClose = function () {
                                    l.b.log("[buffer-controller]: Media source closed")
                                }, this._onMediaSourceEnded = function () {
                                    l.b.log("[buffer-controller]: Media source ended")
                                }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
                            }
                            var e = t.prototype;
                            return e.hasSourceTypes = function () {
                                return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                            }, e.destroy = function () {
                                this.unregisterListeners(), this.details = null
                            }, e.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.BUFFER_RESET, this.onBufferReset, this), t.on(s.a.BUFFER_APPENDING, this.onBufferAppending, this), t.on(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.a.BUFFER_EOS, this.onBufferEos, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(s.a.FRAG_PARSED, this.onFragParsed, this), t.on(s.a.FRAG_CHANGED, this.onFragChanged, this)
                            }, e.unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.BUFFER_RESET, this.onBufferReset, this), t.off(s.a.BUFFER_APPENDING, this.onBufferAppending, this), t.off(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.a.BUFFER_EOS, this.onBufferEos, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(s.a.FRAG_PARSED, this.onFragParsed, this), t.off(s.a.FRAG_CHANGED, this.onFragChanged, this)
                            }, e._initSourceBuffer = function () {
                                this.sourceBuffer = {}, this.operationQueue = new Ce(this.sourceBuffer), this.listeners = {
                                    audio: [],
                                    video: [],
                                    audiovideo: []
                                }
                            }, e.onManifestParsed = function (t, e) {
                                var i = 2;
                                (e.audio && !e.video || !e.altAudio) && (i = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, this.details = null, l.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                            }, e.onMediaAttaching = function (t, e) {
                                var i = this.media = e.media;
                                if (i && Ie) {
                                    var r = this.mediaSource = new Ie;
                                    r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), i.src = self.URL.createObjectURL(r), this._objectUrl = i.src
                                }
                            }, e.onMediaDetaching = function () {
                                var t = this.media,
                                    e = this.mediaSource,
                                    i = this._objectUrl;
                                if (e) {
                                    if (l.b.log("[buffer-controller]: media source detaching"), "open" === e.readyState) try {
                                        e.endOfStream()
                                    } catch (t) {
                                        l.b.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                                    }
                                    this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (i && self.URL.revokeObjectURL(i), t.src === i ? (t.removeAttribute("src"), t.load()) : l.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                                }
                                this.hls.trigger(s.a.MEDIA_DETACHED, void 0)
                            }, e.onBufferReset = function () {
                                var t = this;
                                this.getSourceBufferTypes().forEach((function (e) {
                                    var i = t.sourceBuffer[e];
                                    try {
                                        i && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(i), t.sourceBuffer[e] = void 0)
                                    } catch (t) {
                                        l.b.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                                    }
                                })), this._initSourceBuffer()
                            }, e.onBufferCodecs = function (t, e) {
                                var i = this,
                                    r = this.getSourceBufferTypes().length;
                                Object.keys(e).forEach((function (t) {
                                    if (r) {
                                        var n = i.tracks[t];
                                        if (n && "function" == typeof n.buffer.changeType) {
                                            var a = e[t],
                                                s = a.id,
                                                o = a.codec,
                                                u = a.levelCodec,
                                                h = a.container,
                                                d = a.metadata,
                                                c = (n.levelCodec || n.codec).replace(we, "$1"),
                                                f = (u || o).replace(we, "$1");
                                            if (c !== f) {
                                                var v = h + ";codecs=" + (u || o);
                                                i.appendChangeType(t, v), l.b.log("[buffer-controller]: switching codec " + c + " to " + f), i.tracks[t] = {
                                                    buffer: n.buffer,
                                                    codec: o,
                                                    container: h,
                                                    levelCodec: u,
                                                    metadata: d,
                                                    id: s
                                                }
                                            }
                                        }
                                    } else i.pendingTracks[t] = e[t]
                                })), r || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                            }, e.appendChangeType = function (t, e) {
                                var i = this,
                                    r = this.operationQueue,
                                    n = {
                                        execute: function () {
                                            var n = i.sourceBuffer[t];
                                            n && (l.b.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), n.changeType(e)), r.shiftAndExecuteNext(t)
                                        },
                                        onStart: function () {},
                                        onComplete: function () {},
                                        onError: function (e) {
                                            l.b.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                                        }
                                    };
                                r.append(n, t)
                            }, e.onBufferAppending = function (t, e) {
                                var i = this,
                                    r = this.hls,
                                    n = this.operationQueue,
                                    a = this.tracks,
                                    u = e.data,
                                    h = e.type,
                                    d = e.frag,
                                    c = e.part,
                                    f = e.chunkMeta,
                                    v = f.buffering[h],
                                    g = self.performance.now();
                                v.start = g;
                                var p = d.stats.buffering,
                                    m = c ? c.stats.buffering : null;
                                0 === p.start && (p.start = g), m && 0 === m.start && (m.start = g);
                                var T = a.audio,
                                    y = "audio" === h && 1 === f.id && "audio/mpeg" === (null == T ? void 0 : T.container),
                                    b = {
                                        execute: function () {
                                            if (v.executeStart = self.performance.now(), y) {
                                                var t = i.sourceBuffer[h];
                                                if (t) {
                                                    var e = d.start - t.timestampOffset;
                                                    Math.abs(e) >= .1 && (l.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + d.start + " (delta: " + e + ") sn: " + d.sn + ")"), t.timestampOffset = d.start)
                                                }
                                            }
                                            i.appendExecutor(u, h)
                                        },
                                        onStart: function () {},
                                        onComplete: function () {
                                            var t = self.performance.now();
                                            v.executeEnd = v.end = t, 0 === p.first && (p.first = t), m && 0 === m.first && (m.first = t);
                                            var e = i.sourceBuffer,
                                                r = {};
                                            for (var n in e) r[n] = mt.getBuffered(e[n]);
                                            i.appendError = 0, i.hls.trigger(s.a.BUFFER_APPENDED, {
                                                type: h,
                                                frag: d,
                                                part: c,
                                                chunkMeta: f,
                                                parent: d.type,
                                                timeRanges: r
                                            })
                                        },
                                        onError: function (t) {
                                            l.b.error("[buffer-controller]: Error encountered while trying to append to the " + h + " SourceBuffer", t);
                                            var e = {
                                                type: o.b.MEDIA_ERROR,
                                                parent: d.type,
                                                details: o.a.BUFFER_APPEND_ERROR,
                                                err: t,
                                                fatal: !1
                                            };
                                            t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = o.a.BUFFER_FULL_ERROR : (i.appendError++, e.details = o.a.BUFFER_APPEND_ERROR, i.appendError > r.config.appendErrorMaxRetry && (l.b.error("[buffer-controller]: Failed " + r.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)), r.trigger(s.a.ERROR, e)
                                        }
                                    };
                                n.append(b, h)
                            }, e.onBufferFlushing = function (t, e) {
                                var i = this,
                                    r = this.operationQueue,
                                    n = function (t) {
                                        return {
                                            execute: i.removeExecutor.bind(i, t, e.startOffset, e.endOffset),
                                            onStart: function () {},
                                            onComplete: function () {
                                                i.hls.trigger(s.a.BUFFER_FLUSHED, {
                                                    type: t
                                                })
                                            },
                                            onError: function (e) {
                                                l.b.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                                            }
                                        }
                                    };
                                e.type ? r.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function (t) {
                                    r.append(n(t), t)
                                }))
                            }, e.onFragParsed = function (t, e) {
                                var i = this,
                                    r = e.frag,
                                    n = e.part,
                                    a = [],
                                    o = n ? n.elementaryStreams : r.elementaryStreams;
                                o[p.a.AUDIOVIDEO] ? a.push("audiovideo") : (o[p.a.AUDIO] && a.push("audio"), o[p.a.VIDEO] && a.push("video")), 0 === a.length && l.b.warn("Fragments must have at least one ElementaryStreamType set. type: " + r.type + " level: " + r.level + " sn: " + r.sn), this.blockBuffers((function () {
                                    var t = self.performance.now();
                                    r.stats.buffering.end = t, n && (n.stats.buffering.end = t);
                                    var e = n ? n.stats : r.stats;
                                    i.hls.trigger(s.a.FRAG_BUFFERED, {
                                        frag: r,
                                        part: n,
                                        stats: e,
                                        id: r.type
                                    })
                                }), a)
                            }, e.onFragChanged = function (t, e) {
                                this.flushBackBuffer()
                            }, e.onBufferEos = function (t, e) {
                                var i = this;
                                this.getSourceBufferTypes().reduce((function (t, r) {
                                    var n = i.sourceBuffer[r];
                                    return e.type && e.type !== r || n && !n.ended && (n.ended = !0, l.b.log("[buffer-controller]: " + r + " sourceBuffer now EOS")), t && !(n && !n.ended)
                                }), !0) && this.blockBuffers((function () {
                                    var t = i.mediaSource;
                                    t && "open" === t.readyState && t.endOfStream()
                                }))
                            }, e.onLevelUpdated = function (t, e) {
                                var i = e.details;
                                i.fragments.length && (this.details = i, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                            }, e.flushBackBuffer = function () {
                                var t = this.hls,
                                    e = this.details,
                                    i = this.media,
                                    r = this.sourceBuffer;
                                if (i && null !== e) {
                                    var n = this.getSourceBufferTypes();
                                    if (n.length) {
                                        var o = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                                        if (Object(a.a)(o) && !(o < 0)) {
                                            var l = i.currentTime,
                                                u = e.levelTargetDuration,
                                                h = Math.max(o, u),
                                                d = Math.floor(l / u) * u - h;
                                            n.forEach((function (i) {
                                                var n = r[i];
                                                if (n) {
                                                    var a = mt.getBuffered(n);
                                                    a.length > 0 && d > a.start(0) && (t.trigger(s.a.BACK_BUFFER_REACHED, {
                                                        bufferEnd: d
                                                    }), e.live && t.trigger(s.a.LIVE_BACK_BUFFER_REACHED, {
                                                        bufferEnd: d
                                                    }), t.trigger(s.a.BUFFER_FLUSHING, {
                                                        startOffset: 0,
                                                        endOffset: d,
                                                        type: i
                                                    }))
                                                }
                                            }))
                                        }
                                    }
                                }
                            }, e.updateMediaElementDuration = function () {
                                if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                                    var t = this.details,
                                        e = this.hls,
                                        i = this.media,
                                        r = this.mediaSource,
                                        n = t.fragments[0].start + t.totalduration,
                                        s = i.duration,
                                        o = Object(a.a)(r.duration) ? r.duration : 0;
                                    t.live && e.config.liveDurationInfinity ? (l.b.log("[buffer-controller]: Media Source duration is set to Infinity"), r.duration = 1 / 0, this.updateSeekableRange(t)) : (n > o && n > s || !Object(a.a)(s)) && (l.b.log("[buffer-controller]: Updating Media Source duration to " + n.toFixed(3)), r.duration = n)
                                }
                            }, e.updateSeekableRange = function (t) {
                                var e = this.mediaSource,
                                    i = t.fragments;
                                if (i.length && t.live && null != e && e.setLiveSeekableRange) {
                                    var r = Math.max(0, i[0].start),
                                        n = Math.max(r, r + t.totalduration);
                                    e.setLiveSeekableRange(r, n)
                                }
                            }, e.checkPendingTracks = function () {
                                var t = this.bufferCodecEventsExpected,
                                    e = this.operationQueue,
                                    i = this.pendingTracks,
                                    r = Object.keys(i).length;
                                if (r && !t || 2 === r) {
                                    this.createSourceBuffers(i), this.pendingTracks = {};
                                    var n = this.getSourceBufferTypes();
                                    if (0 === n.length) return void this.hls.trigger(s.a.ERROR, {
                                        type: o.b.MEDIA_ERROR,
                                        details: o.a.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                        fatal: !0,
                                        reason: "could not create source buffer for media codec(s)"
                                    });
                                    n.forEach((function (t) {
                                        e.executeNext(t)
                                    }))
                                }
                            }, e.createSourceBuffers = function (t) {
                                var e = this.sourceBuffer,
                                    i = this.mediaSource;
                                if (!i) throw Error("createSourceBuffers called when mediaSource was null");
                                var r = 0;
                                for (var n in t)
                                    if (!e[n]) {
                                        var a = t[n];
                                        if (!a) throw Error("source buffer exists for track " + n + ", however track does not");
                                        var u = a.levelCodec || a.codec,
                                            h = a.container + ";codecs=" + u;
                                        l.b.log("[buffer-controller]: creating sourceBuffer(" + h + ")");
                                        try {
                                            var d = e[n] = i.addSourceBuffer(h),
                                                c = n;
                                            this.addBufferListener(c, "updatestart", this._onSBUpdateStart), this.addBufferListener(c, "updateend", this._onSBUpdateEnd), this.addBufferListener(c, "error", this._onSBUpdateError), this.tracks[n] = {
                                                buffer: d,
                                                codec: u,
                                                container: a.container,
                                                levelCodec: a.levelCodec,
                                                metadata: a.metadata,
                                                id: a.id
                                            }, r++
                                        } catch (t) {
                                            l.b.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(s.a.ERROR, {
                                                type: o.b.MEDIA_ERROR,
                                                details: o.a.BUFFER_ADD_CODEC_ERROR,
                                                fatal: !1,
                                                error: t,
                                                mimeType: h
                                            })
                                        }
                                    } r && this.hls.trigger(s.a.BUFFER_CREATED, {
                                    tracks: this.tracks
                                })
                            }, e._onSBUpdateStart = function (t) {
                                this.operationQueue.current(t).onStart()
                            }, e._onSBUpdateEnd = function (t) {
                                var e = this.operationQueue;
                                e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                            }, e._onSBUpdateError = function (t, e) {
                                l.b.error("[buffer-controller]: " + t + " SourceBuffer error", e), this.hls.trigger(s.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.BUFFER_APPENDING_ERROR,
                                    fatal: !1
                                });
                                var i = this.operationQueue.current(t);
                                i && i.onError(e)
                            }, e.removeExecutor = function (t, e, i) {
                                var r = this.media,
                                    n = this.mediaSource,
                                    s = this.operationQueue,
                                    o = this.sourceBuffer[t];
                                if (!r || !n || !o) return l.b.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void s.shiftAndExecuteNext(t);
                                var u = Object(a.a)(r.duration) ? r.duration : 1 / 0,
                                    h = Object(a.a)(n.duration) ? n.duration : 1 / 0,
                                    d = Math.max(0, e),
                                    c = Math.min(i, u, h);
                                c > d ? (l.b.log("[buffer-controller]: Removing [" + d + "," + c + "] from the " + t + " SourceBuffer"), o.remove(d, c)) : s.shiftAndExecuteNext(t)
                            }, e.appendExecutor = function (t, e) {
                                var i = this.operationQueue,
                                    r = this.sourceBuffer[e];
                                if (!r) return l.b.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void i.shiftAndExecuteNext(e);
                                r.ended = !1, r.appendBuffer(t)
                            }, e.blockBuffers = function (t, e) {
                                var i = this;
                                if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return l.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
                                var r = this.operationQueue,
                                    n = e.map((function (t) {
                                        return r.appendBlocker(t)
                                    }));
                                Promise.all(n).then((function () {
                                    t(), e.forEach((function (t) {
                                        var e = i.sourceBuffer[t];
                                        e && e.updating || r.shiftAndExecuteNext(t)
                                    }))
                                }))
                            }, e.getSourceBufferTypes = function () {
                                return Object.keys(this.sourceBuffer)
                            }, e.addBufferListener = function (t, e, i) {
                                var r = this.sourceBuffer[t];
                                if (r) {
                                    var n = i.bind(this, t);
                                    this.listeners[t].push({
                                        event: e,
                                        listener: n
                                    }), r.addEventListener(e, n)
                                }
                            }, e.removeBufferListeners = function (t) {
                                var e = this.sourceBuffer[t];
                                e && this.listeners[t].forEach((function (t) {
                                    e.removeEventListener(t.event, t.listener)
                                }))
                            }, t
                        }(),
                        Pe = {
                            42: 225,
                            92: 233,
                            94: 237,
                            95: 243,
                            96: 250,
                            123: 231,
                            124: 247,
                            125: 209,
                            126: 241,
                            127: 9608,
                            128: 174,
                            129: 176,
                            130: 189,
                            131: 191,
                            132: 8482,
                            133: 162,
                            134: 163,
                            135: 9834,
                            136: 224,
                            137: 32,
                            138: 232,
                            139: 226,
                            140: 234,
                            141: 238,
                            142: 244,
                            143: 251,
                            144: 193,
                            145: 201,
                            146: 211,
                            147: 218,
                            148: 220,
                            149: 252,
                            150: 8216,
                            151: 161,
                            152: 42,
                            153: 8217,
                            154: 9473,
                            155: 169,
                            156: 8480,
                            157: 8226,
                            158: 8220,
                            159: 8221,
                            160: 192,
                            161: 194,
                            162: 199,
                            163: 200,
                            164: 202,
                            165: 203,
                            166: 235,
                            167: 206,
                            168: 207,
                            169: 239,
                            170: 212,
                            171: 217,
                            172: 249,
                            173: 219,
                            174: 171,
                            175: 187,
                            176: 195,
                            177: 227,
                            178: 205,
                            179: 204,
                            180: 236,
                            181: 210,
                            182: 242,
                            183: 213,
                            184: 245,
                            185: 123,
                            186: 125,
                            187: 92,
                            188: 94,
                            189: 95,
                            190: 124,
                            191: 8764,
                            192: 196,
                            193: 228,
                            194: 214,
                            195: 246,
                            196: 223,
                            197: 165,
                            198: 164,
                            199: 9475,
                            200: 197,
                            201: 229,
                            202: 216,
                            203: 248,
                            204: 9487,
                            205: 9491,
                            206: 9495,
                            207: 9499
                        },
                        Me = function (t) {
                            var e = t;
                            return Pe.hasOwnProperty(t) && (e = Pe[t]), String.fromCharCode(e)
                        },
                        Fe = {
                            17: 1,
                            18: 3,
                            21: 5,
                            22: 7,
                            23: 9,
                            16: 11,
                            19: 12,
                            20: 14
                        },
                        Ne = {
                            17: 2,
                            18: 4,
                            21: 6,
                            22: 8,
                            23: 10,
                            19: 13,
                            20: 15
                        },
                        Ue = {
                            25: 1,
                            26: 3,
                            29: 5,
                            30: 7,
                            31: 9,
                            24: 11,
                            27: 12,
                            28: 14
                        },
                        Be = {
                            25: 2,
                            26: 4,
                            29: 6,
                            30: 8,
                            31: 10,
                            27: 13,
                            28: 15
                        },
                        je = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
                    ! function (t) {
                        t[t.ERROR = 0] = "ERROR", t[t.TEXT = 1] = "TEXT", t[t.WARNING = 2] = "WARNING", t[t.INFO = 2] = "INFO", t[t.DEBUG = 3] = "DEBUG", t[t.DATA = 3] = "DATA"
                    }(De || (De = {}));
                    var Ge = function () {
                            function t() {
                                this.time = null, this.verboseLevel = De.ERROR
                            }
                            return t.prototype.log = function (t, e) {
                                this.verboseLevel >= t && l.b.log(this.time + " [" + t + "] " + e)
                            }, t
                        }(),
                        He = function (t) {
                            for (var e = [], i = 0; i < t.length; i++) e.push(t[i].toString(16));
                            return e
                        },
                        Ke = function () {
                            function t(t, e, i, r, n) {
                                this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = i || !1, this.background = r || "black", this.flash = n || !1
                            }
                            var e = t.prototype;
                            return e.reset = function () {
                                this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                            }, e.setStyles = function (t) {
                                for (var e = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    t.hasOwnProperty(r) && (this[r] = t[r])
                                }
                            }, e.isDefault = function () {
                                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                            }, e.equals = function (t) {
                                return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                            }, e.copy = function (t) {
                                this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                            }, e.toString = function () {
                                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                            }, t
                        }(),
                        Ve = function () {
                            function t(t, e, i, r, n, a) {
                                this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new Ke(e, i, r, n, a)
                            }
                            var e = t.prototype;
                            return e.reset = function () {
                                this.uchar = " ", this.penState.reset()
                            }, e.setChar = function (t, e) {
                                this.uchar = t, this.penState.copy(e)
                            }, e.setPenState = function (t) {
                                this.penState.copy(t)
                            }, e.equals = function (t) {
                                return this.uchar === t.uchar && this.penState.equals(t.penState)
                            }, e.copy = function (t) {
                                this.uchar = t.uchar, this.penState.copy(t.penState)
                            }, e.isEmpty = function () {
                                return " " === this.uchar && this.penState.isDefault()
                            }, t
                        }(),
                        We = function () {
                            function t(t) {
                                this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                                for (var e = 0; e < 100; e++) this.chars.push(new Ve);
                                this.logger = t, this.pos = 0, this.currPenState = new Ke
                            }
                            var e = t.prototype;
                            return e.equals = function (t) {
                                for (var e = !0, i = 0; i < 100; i++)
                                    if (!this.chars[i].equals(t.chars[i])) {
                                        e = !1;
                                        break
                                    } return e
                            }, e.copy = function (t) {
                                for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e])
                            }, e.isEmpty = function () {
                                for (var t = !0, e = 0; e < 100; e++)
                                    if (!this.chars[e].isEmpty()) {
                                        t = !1;
                                        break
                                    } return t
                            }, e.setCursor = function (t) {
                                this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(De.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(De.DEBUG, "Too large cursor position " + this.pos), this.pos = 100)
                            }, e.moveCursor = function (t) {
                                var e = this.pos + t;
                                if (t > 1)
                                    for (var i = this.pos + 1; i < e + 1; i++) this.chars[i].setPenState(this.currPenState);
                                this.setCursor(e)
                            }, e.backSpace = function () {
                                this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                            }, e.insertChar = function (t) {
                                t >= 144 && this.backSpace();
                                var e = Me(t);
                                this.pos >= 100 ? this.logger.log(De.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
                            }, e.clearFromPos = function (t) {
                                var e;
                                for (e = t; e < 100; e++) this.chars[e].reset()
                            }, e.clear = function () {
                                this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                            }, e.clearToEndOfRow = function () {
                                this.clearFromPos(this.pos)
                            }, e.getTextString = function () {
                                for (var t = [], e = !0, i = 0; i < 100; i++) {
                                    var r = this.chars[i].uchar;
                                    " " !== r && (e = !1), t.push(r)
                                }
                                return e ? "" : t.join("")
                            }, e.setPenStyles = function (t) {
                                this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                            }, t
                        }(),
                        Ye = function () {
                            function t(t) {
                                this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                                for (var e = 0; e < 15; e++) this.rows.push(new We(t));
                                this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                            }
                            var e = t.prototype;
                            return e.reset = function () {
                                for (var t = 0; t < 15; t++) this.rows[t].clear();
                                this.currRow = 14
                            }, e.equals = function (t) {
                                for (var e = !0, i = 0; i < 15; i++)
                                    if (!this.rows[i].equals(t.rows[i])) {
                                        e = !1;
                                        break
                                    } return e
                            }, e.copy = function (t) {
                                for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
                            }, e.isEmpty = function () {
                                for (var t = !0, e = 0; e < 15; e++)
                                    if (!this.rows[e].isEmpty()) {
                                        t = !1;
                                        break
                                    } return t
                            }, e.backSpace = function () {
                                this.rows[this.currRow].backSpace()
                            }, e.clearToEndOfRow = function () {
                                this.rows[this.currRow].clearToEndOfRow()
                            }, e.insertChar = function (t) {
                                this.rows[this.currRow].insertChar(t)
                            }, e.setPen = function (t) {
                                this.rows[this.currRow].setPenStyles(t)
                            }, e.moveCursor = function (t) {
                                this.rows[this.currRow].moveCursor(t)
                            }, e.setCursor = function (t) {
                                this.logger.log(De.INFO, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                            }, e.setPAC = function (t) {
                                this.logger.log(De.INFO, "pacData = " + JSON.stringify(t));
                                var e = t.row - 1;
                                if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                                    for (var i = 0; i < 15; i++) this.rows[i].clear();
                                    var r = this.currRow + 1 - this.nrRollUpRows,
                                        n = this.lastOutputScreen;
                                    if (n) {
                                        var a = n.rows[r].cueStartTime,
                                            s = this.logger.time;
                                        if (a && null !== s && a < s)
                                            for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[r + o])
                                    }
                                }
                                this.currRow = e;
                                var l = this.rows[this.currRow];
                                if (null !== t.indent) {
                                    var u = t.indent,
                                        h = Math.max(u - 1, 0);
                                    l.setCursor(t.indent), t.color = l.chars[h].penState.foreground
                                }
                                var d = {
                                    foreground: t.color,
                                    underline: t.underline,
                                    italics: t.italics,
                                    background: "black",
                                    flash: !1
                                };
                                this.setPen(d)
                            }, e.setBkgData = function (t) {
                                this.logger.log(De.INFO, "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                            }, e.setRollUpRows = function (t) {
                                this.nrRollUpRows = t
                            }, e.rollUp = function () {
                                if (null !== this.nrRollUpRows) {
                                    this.logger.log(De.TEXT, this.getDisplayText());
                                    var t = this.currRow + 1 - this.nrRollUpRows,
                                        e = this.rows.splice(t, 1)[0];
                                    e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(De.INFO, "Rolling up")
                                } else this.logger.log(De.DEBUG, "roll_up but nrRollUpRows not set yet")
                            }, e.getDisplayText = function (t) {
                                t = t || !1;
                                for (var e = [], i = "", r = -1, n = 0; n < 15; n++) {
                                    var a = this.rows[n].getTextString();
                                    a && (r = n + 1, t ? e.push("Row " + r + ": '" + a + "'") : e.push(a.trim()))
                                }
                                return e.length > 0 && (i = t ? "[" + e.join(" | ") + "]" : e.join("\n")), i
                            }, e.getTextAndFormat = function () {
                                return this.rows
                            }, t
                        }(),
                        qe = function () {
                            function t(t, e, i) {
                                this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Ye(i), this.nonDisplayedMemory = new Ye(i), this.lastOutputScreen = new Ye(i), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i
                            }
                            var e = t.prototype;
                            return e.reset = function () {
                                this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                            }, e.getHandler = function () {
                                return this.outputFilter
                            }, e.setHandler = function (t) {
                                this.outputFilter = t
                            }, e.setPAC = function (t) {
                                this.writeScreen.setPAC(t)
                            }, e.setBkgData = function (t) {
                                this.writeScreen.setBkgData(t)
                            }, e.setMode = function (t) {
                                t !== this.mode && (this.mode = t, this.logger.log(De.INFO, "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                            }, e.insertChars = function (t) {
                                for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                                var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                this.logger.log(De.INFO, i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(De.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                            }, e.ccRCL = function () {
                                this.logger.log(De.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                            }, e.ccBS = function () {
                                this.logger.log(De.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                            }, e.ccAOF = function () {}, e.ccAON = function () {}, e.ccDER = function () {
                                this.logger.log(De.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                            }, e.ccRU = function (t) {
                                this.logger.log(De.INFO, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                            }, e.ccFON = function () {
                                this.logger.log(De.INFO, "FON - Flash On"), this.writeScreen.setPen({
                                    flash: !0
                                })
                            }, e.ccRDC = function () {
                                this.logger.log(De.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                            }, e.ccTR = function () {
                                this.logger.log(De.INFO, "TR"), this.setMode("MODE_TEXT")
                            }, e.ccRTD = function () {
                                this.logger.log(De.INFO, "RTD"), this.setMode("MODE_TEXT")
                            }, e.ccEDM = function () {
                                this.logger.log(De.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                            }, e.ccCR = function () {
                                this.logger.log(De.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                            }, e.ccENM = function () {
                                this.logger.log(De.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                            }, e.ccEOC = function () {
                                if (this.logger.log(De.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                    var t = this.displayedMemory;
                                    this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(De.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                                }
                                this.outputDataUpdate(!0)
                            }, e.ccTO = function (t) {
                                this.logger.log(De.INFO, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                            }, e.ccMIDROW = function (t) {
                                var e = {
                                    flash: !1
                                };
                                if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                                else {
                                    var i = Math.floor(t / 2) - 16;
                                    e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][i]
                                }
                                this.logger.log(De.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                            }, e.outputDataUpdate = function (t) {
                                void 0 === t && (t = !1);
                                var e = this.logger.time;
                                null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                            }, e.cueSplitAtTime = function (t) {
                                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                            }, t
                        }();
                    function Xe(t, e, i) {
                        i.a = t, i.b = e
                    }
                    function ze(t, e, i) {
                        return i.a === t && i.b === e
                    }
                    var Ze = function () {
                            function t(t, e, i) {
                                this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                                var r = new Ge;
                                this.channels = [null, new qe(t, e, r), new qe(t + 1, i, r)], this.cmdHistory = {
                                    a: null,
                                    b: null
                                }, this.logger = r
                            }
                            var e = t.prototype;
                            return e.getHandler = function (t) {
                                return this.channels[t].getHandler()
                            }, e.setHandler = function (t, e) {
                                this.channels[t].setHandler(e)
                            }, e.addData = function (t, e) {
                                var i, r, n, a = !1;
                                this.logger.time = t;
                                for (var s = 0; s < e.length; s += 2)
                                    if (r = 127 & e[s], n = 127 & e[s + 1], 0 !== r || 0 !== n) {
                                        if (this.logger.log(De.DATA, "[" + He([e[s], e[s + 1]]) + "] -> (" + He([r, n]) + ")"), (i = this.parseCmd(r, n)) || (i = this.parseMidrow(r, n)), i || (i = this.parsePAC(r, n)), i || (i = this.parseBackgroundAttributes(r, n)), !i && (a = this.parseChars(r, n))) {
                                            var o = this.currentChannel;
                                            o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(De.WARNING, "No channel found yet. TEXT-MODE?")
                                        }
                                        i || a || this.logger.log(De.WARNING, "Couldn't parse cleaned data " + He([r, n]) + " orig: " + He([e[s], e[s + 1]]))
                                    }
                            }, e.parseCmd = function (t, e) {
                                var i = this.cmdHistory;
                                if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                                if (ze(t, e, i)) return Xe(null, null, i), this.logger.log(De.DEBUG, "Repeated command (" + He([t, e]) + ") is dropped"), !0;
                                var r = 20 === t || 21 === t || 23 === t ? 1 : 2,
                                    n = this.channels[r];
                                return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), Xe(t, e, i), this.currentChannel = r, !0
                            }, e.parseMidrow = function (t, e) {
                                var i = 0;
                                if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                                    if ((i = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(De.ERROR, "Mismatch channel in midrow parsing"), !1;
                                    var r = this.channels[i];
                                    return !!r && (r.ccMIDROW(e), this.logger.log(De.DEBUG, "MIDROW (" + He([t, e]) + ")"), !0)
                                }
                                return !1
                            }, e.parsePAC = function (t, e) {
                                var i, r = this.cmdHistory;
                                if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                                if (ze(t, e, r)) return Xe(null, null, r), !0;
                                var n = t <= 23 ? 1 : 2;
                                i = e >= 64 && e <= 95 ? 1 === n ? Fe[t] : Ue[t] : 1 === n ? Ne[t] : Be[t];
                                var a = this.channels[n];
                                return !!a && (a.setPAC(this.interpretPAC(i, e)), Xe(t, e, r), this.currentChannel = n, !0)
                            }, e.interpretPAC = function (t, e) {
                                var i, r = {
                                    color: null,
                                    italics: !1,
                                    indent: null,
                                    underline: !1,
                                    row: t
                                };
                                return i = e > 95 ? e - 96 : e - 64, r.underline = 1 == (1 & i), i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2), r
                            }, e.parseChars = function (t, e) {
                                var i, r, n = null,
                                    a = null;
                                if (t >= 25 ? (i = 2, a = t - 8) : (i = 1, a = t), a >= 17 && a <= 19 ? (r = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(De.INFO, "Special char '" + Me(r) + "' in channel " + i), n = [r]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]), n) {
                                    var s = He(n);
                                    this.logger.log(De.DEBUG, "Char codes =  " + s.join(",")), Xe(t, e, this.cmdHistory)
                                }
                                return n
                            }, e.parseBackgroundAttributes = function (t, e) {
                                var i;
                                if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
                                var r = {};
                                16 === t || 24 === t ? (i = Math.floor((e - 32) / 2), r.background = je[i], e % 2 == 1 && (r.background = r.background + "_semi")) : 45 === e ? r.background = "transparent" : (r.foreground = "black", 47 === e && (r.underline = !0));
                                var n = t <= 23 ? 1 : 2;
                                return this.channels[n].setBkgData(r), Xe(t, e, this.cmdHistory), !0
                            }, e.reset = function () {
                                for (var t = 0; t < Object.keys(this.channels).length; t++) {
                                    var e = this.channels[t];
                                    e && e.reset()
                                }
                                this.cmdHistory = {
                                    a: null,
                                    b: null
                                }
                            }, e.cueSplitAtTime = function (t) {
                                for (var e = 0; e < this.channels.length; e++) {
                                    var i = this.channels[e];
                                    i && i.cueSplitAtTime(t)
                                }
                            }, t
                        }(),
                        Qe = function () {
                            function t(t, e) {
                                this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
                            }
                            var e = t.prototype;
                            return e.dispatchCue = function () {
                                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                            }, e.newCue = function (t, e, i) {
                                (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName)
                            }, e.reset = function () {
                                this.cueRanges = [], this.startTime = null
                            }, t
                        }(),
                        Je = function () {
                            if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
                            var t = ["", "lr", "rl"],
                                e = ["start", "middle", "end", "left", "right"];
                            function i(t, e) {
                                if ("string" != typeof e) return !1;
                                if (!Array.isArray(t)) return !1;
                                var i = e.toLowerCase();
                                return !!~t.indexOf(i) && i
                            }
                            function r(t) {
                                return i(e, t)
                            }
                            function n(t) {
                                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                                for (var n = 1; n < arguments.length; n++) {
                                    var a = arguments[n];
                                    for (var s in a) t[s] = a[s]
                                }
                                return t
                            }
                            function a(e, a, s) {
                                var o = this,
                                    l = {
                                        enumerable: !0
                                    };
                                o.hasBeenReset = !1;
                                var u = "",
                                    h = !1,
                                    d = e,
                                    c = a,
                                    f = s,
                                    v = null,
                                    g = "",
                                    p = !0,
                                    m = "auto",
                                    T = "start",
                                    y = 50,
                                    b = "middle",
                                    E = 50,
                                    S = "middle";
                                Object.defineProperty(o, "id", n({}, l, {
                                    get: function () {
                                        return u
                                    },
                                    set: function (t) {
                                        u = "" + t
                                    }
                                })), Object.defineProperty(o, "pauseOnExit", n({}, l, {
                                    get: function () {
                                        return h
                                    },
                                    set: function (t) {
                                        h = !!t
                                    }
                                })), Object.defineProperty(o, "startTime", n({}, l, {
                                    get: function () {
                                        return d
                                    },
                                    set: function (t) {
                                        if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                                        d = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "endTime", n({}, l, {
                                    get: function () {
                                        return c
                                    },
                                    set: function (t) {
                                        if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                                        c = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "text", n({}, l, {
                                    get: function () {
                                        return f
                                    },
                                    set: function (t) {
                                        f = "" + t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "region", n({}, l, {
                                    get: function () {
                                        return v
                                    },
                                    set: function (t) {
                                        v = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "vertical", n({}, l, {
                                    get: function () {
                                        return g
                                    },
                                    set: function (e) {
                                        var r = function (e) {
                                            return i(t, e)
                                        }(e);
                                        if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        g = r, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "snapToLines", n({}, l, {
                                    get: function () {
                                        return p
                                    },
                                    set: function (t) {
                                        p = !!t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "line", n({}, l, {
                                    get: function () {
                                        return m
                                    },
                                    set: function (t) {
                                        if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                                        m = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "lineAlign", n({}, l, {
                                    get: function () {
                                        return T
                                    },
                                    set: function (t) {
                                        var e = r(t);
                                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                        T = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "position", n({}, l, {
                                    get: function () {
                                        return y
                                    },
                                    set: function (t) {
                                        if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                                        y = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "positionAlign", n({}, l, {
                                    get: function () {
                                        return b
                                    },
                                    set: function (t) {
                                        var e = r(t);
                                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                        b = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "size", n({}, l, {
                                    get: function () {
                                        return E
                                    },
                                    set: function (t) {
                                        if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                                        E = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "align", n({}, l, {
                                    get: function () {
                                        return S
                                    },
                                    set: function (t) {
                                        var e = r(t);
                                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                        S = e, this.hasBeenReset = !0
                                    }
                                })), o.displayState = void 0
                            }
                            return a.prototype.getCueAsHTML = function () {
                                return self.WebVTT.convertCueToDOMTree(self, this.text)
                            }, a
                        }(),
                        $e = function () {
                            function t() {}
                            return t.prototype.decode = function (t, e) {
                                if (!t) return "";
                                if ("string" != typeof t) throw new Error("Error - expected string data.");
                                return decodeURIComponent(encodeURIComponent(t))
                            }, t
                        }();
                    function ti(t) {
                        function e(t, e, i, r) {
                            return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + parseFloat(r || 0)
                        }
                        var i = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                        return i ? parseFloat(i[2]) > 59 ? e(i[2], i[3], 0, i[4]) : e(i[1], i[2], i[3], i[4]) : null
                    }
                    var ei = function () {
                        function t() {
                            this.values = Object.create(null)
                        }
                        var e = t.prototype;
                        return e.set = function (t, e) {
                            this.get(t) || "" === e || (this.values[t] = e)
                        }, e.get = function (t, e, i) {
                            return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
                        }, e.has = function (t) {
                            return t in this.values
                        }, e.alt = function (t, e, i) {
                            for (var r = 0; r < i.length; ++r)
                                if (e === i[r]) {
                                    this.set(t, e);
                                    break
                                }
                        }, e.integer = function (t, e) {
                            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                        }, e.percent = function (t, e) {
                            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                                var i = parseFloat(e);
                                if (i >= 0 && i <= 100) return this.set(t, i), !0
                            }
                            return !1
                        }, t
                    }();
                    function ii(t, e, i, r) {
                        var n = r ? t.split(r) : [t];
                        for (var a in n)
                            if ("string" == typeof n[a]) {
                                var s = n[a].split(i);
                                2 === s.length && e(s[0], s[1])
                            }
                    }
                    var ri = new Je(0, 0, ""),
                        ni = "middle" === ri.align ? "middle" : "center";
                    function ai(t, e, i) {
                        var r = t;
                        function n() {
                            var e = ti(t);
                            if (null === e) throw new Error("Malformed timestamp: " + r);
                            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                        }
                        function a() {
                            t = t.replace(/^\s+/, "")
                        }
                        if (a(), e.startTime = n(), a(), "-->" !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + r);
                        t = t.slice(3), a(), e.endTime = n(), a(),
                            function (t, e) {
                                var r = new ei;
                                ii(t, (function (t, e) {
                                    var n;
                                    switch (t) {
                                    case "region":
                                        for (var a = i.length - 1; a >= 0; a--)
                                            if (i[a].id === e) {
                                                r.set(t, i[a].region);
                                                break
                                            } break;
                                    case "vertical":
                                        r.alt(t, e, ["rl", "lr"]);
                                        break;
                                    case "line":
                                        n = e.split(","), r.integer(t, n[0]), r.percent(t, n[0]) && r.set("snapToLines", !1), r.alt(t, n[0], ["auto"]), 2 === n.length && r.alt("lineAlign", n[1], ["start", ni, "end"]);
                                        break;
                                    case "position":
                                        n = e.split(","), r.percent(t, n[0]), 2 === n.length && r.alt("positionAlign", n[1], ["start", ni, "end", "line-left", "line-right", "auto"]);
                                        break;
                                    case "size":
                                        r.percent(t, e);
                                        break;
                                    case "align":
                                        r.alt(t, e, ["start", ni, "end", "left", "right"])
                                    }
                                }), /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", "");
                                var n = r.get("line", "auto");
                                "auto" === n && -1 === ri.line && (n = -1), e.line = n, e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", ni);
                                var a = r.get("position", "auto");
                                "auto" === a && 50 === ri.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
                            }(t, e)
                    }
                    function si(t) {
                        return t.replace(/<br(?: \/)?>/gi, "\n")
                    }
                    var oi = function () {
                            function t() {
                                this.state = "INITIAL", this.buffer = "", this.decoder = new $e, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
                            }
                            var e = t.prototype;
                            return e.parse = function (t) {
                                var e = this;
                                function i() {
                                    var t = e.buffer,
                                        i = 0;
                                    for (t = si(t); i < t.length && "\r" !== t[i] && "\n" !== t[i];) ++i;
                                    var r = t.slice(0, i);
                                    return "\r" === t[i] && ++i, "\n" === t[i] && ++i, e.buffer = t.slice(i), r
                                }
                                t && (e.buffer += e.decoder.decode(t, {
                                    stream: !0
                                }));
                                try {
                                    var r = "";
                                    if ("INITIAL" === e.state) {
                                        if (!/\r\n|\n/.test(e.buffer)) return this;
                                        var n = (r = i()).match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);
                                        if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
                                        e.state = "HEADER"
                                    }
                                    for (var a = !1; e.buffer;) {
                                        if (!/\r\n|\n/.test(e.buffer)) return this;
                                        switch (a ? a = !1 : r = i(), e.state) {
                                        case "HEADER":
                                            /:/.test(r) ? ii(r, (function (t, e) {}), /:/) : r || (e.state = "ID");
                                            continue;
                                        case "NOTE":
                                            r || (e.state = "ID");
                                            continue;
                                        case "ID":
                                            if (/^NOTE($|[ \t])/.test(r)) {
                                                e.state = "NOTE";
                                                break
                                            }
                                            if (!r) continue;
                                            if (e.cue = new Je(0, 0, ""), e.state = "CUE", -1 === r.indexOf("-->")) {
                                                e.cue.id = r;
                                                continue
                                            }
                                            case "CUE":
                                                if (!e.cue) {
                                                    e.state = "BADCUE";
                                                    continue
                                                }
                                                try {
                                                    ai(r, e.cue, e.regionList)
                                                } catch (t) {
                                                    e.cue = null, e.state = "BADCUE";
                                                    continue
                                                }
                                                e.state = "CUETEXT";
                                                continue;
                                            case "CUETEXT":
                                                var s = -1 !== r.indexOf("-->");
                                                if (!r || s && (a = !0)) {
                                                    e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                                    continue
                                                }
                                                if (null === e.cue) continue;
                                                e.cue.text && (e.cue.text += "\n"), e.cue.text += r;
                                                continue;
                                            case "BADCUE":
                                                r || (e.state = "ID")
                                        }
                                    }
                                } catch (t) {
                                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                                }
                                return this
                            }, e.flush = function () {
                                try {
                                    if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw new Error("Malformed WebVTT signature.")
                                } catch (t) {
                                    this.onparsingerror && this.onparsingerror(t)
                                }
                                return this.onflush && this.onflush(), this
                            }, t
                        }(),
                        li = i(9),
                        ui = i(13),
                        hi = /\r\n|\n\r|\n|\r/g,
                        di = function (t, e, i) {
                            return void 0 === i && (i = 0), t.slice(i, i + e.length) === e
                        },
                        ci = function (t) {
                            for (var e = 5381, i = t.length; i;) e = 33 * e ^ t.charCodeAt(--i);
                            return (e >>> 0).toString()
                        };
                    function fi(t, e, i) {
                        return ci(t.toString()) + ci(e.toString()) + ci(i)
                    }
                    function vi(t, e, i, r, n, s, o, l) {
                        var u, h = new oi,
                            d = Object(j.f)(new Uint8Array(t)).trim().replace(hi, "\n").split("\n"),
                            c = [],
                            f = Object(li.a)(e, i),
                            v = "00:00.000",
                            g = 0,
                            p = 0,
                            m = !0;
                        h.oncue = function (t) {
                            var e = r[n],
                                i = r.ccOffset,
                                a = (g - f) / 9e4;
                            null != e && e.new && (void 0 !== p ? i = r.ccOffset = e.start : function (t, e, i) {
                                var r = t[e],
                                    n = t[r.prevCC];
                                if (!n || !n.new && r.new) return t.ccOffset = t.presentationOffset = r.start, void(r.new = !1);
                                for (; null !== (a = n) && void 0 !== a && a.new;) {
                                    var a;
                                    t.ccOffset += r.start - n.start, r.new = !1, n = t[(r = n).prevCC]
                                }
                                t.presentationOffset = i
                            }(r, n, a)), a && (i = a - r.presentationOffset);
                            var o = t.endTime - t.startTime,
                                l = Object(ui.d)(9e4 * (t.startTime + i - p), 9e4 * s) / 9e4;
                            t.startTime = Math.max(l, 0), t.endTime = Math.max(l + o, 0);
                            var u = t.text.trim();
                            t.text = decodeURIComponent(encodeURIComponent(u)), t.id || (t.id = fi(t.startTime, t.endTime, u)), t.endTime > 0 && c.push(t)
                        }, h.onparsingerror = function (t) {
                            u = t
                        }, h.onflush = function () {
                            u ? l(u) : o(c)
                        }, d.forEach((function (t) {
                            if (m) {
                                if (di(t, "X-TIMESTAMP-MAP=")) {
                                    m = !1, t.slice(16).split(",").forEach((function (t) {
                                        di(t, "LOCAL:") ? v = t.slice(6) : di(t, "MPEGTS:") && (g = parseInt(t.slice(7)))
                                    }));
                                    try {
                                        p = function (t) {
                                            var e = parseInt(t.slice(-3)),
                                                i = parseInt(t.slice(-6, -4)),
                                                r = parseInt(t.slice(-9, -7)),
                                                n = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
                                            if (!(Object(a.a)(e) && Object(a.a)(i) && Object(a.a)(r) && Object(a.a)(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                            return e += 1e3 * i, (e += 6e4 * r) + 36e5 * n
                                        }(v) / 1e3
                                    } catch (t) {
                                        u = t
                                    }
                                    return
                                }
                                "" === t && (m = !1)
                            }
                            h.parse(t + "\n")
                        })), h.flush()
                    }
                    function gi() {
                        return (gi = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    var pi = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                        mi = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                        Ti = {
                            left: "start",
                            center: "center",
                            right: "end",
                            start: "start",
                            end: "end"
                        };
                    function yi(t, e, i, r, n) {
                        var a = Object(u.c)(new Uint8Array(t), ["mdat"]);
                        if (0 !== a.length) {
                            var s = a.map((function (t) {
                                    return Object(j.f)(t)
                                })),
                                o = Object(li.c)(e, 1, i);
                            try {
                                s.forEach((function (t) {
                                    return r(function (t, e) {
                                        var i = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                                        if (!i) throw new Error("Invalid ttml");
                                        var r = {
                                                frameRate: 30,
                                                subFrameRate: 1,
                                                frameRateMultiplier: 0,
                                                tickRate: 0
                                            },
                                            n = Object.keys(r).reduce((function (t, e) {
                                                return t[e] = i.getAttribute("ttp:" + e) || r[e], t
                                            }), {}),
                                            a = "preserve" !== i.getAttribute("xml:space"),
                                            s = Ei(bi(i, "styling", "style")),
                                            o = Ei(bi(i, "layout", "region")),
                                            l = bi(i, "body", "[begin]");
                                        return [].map.call(l, (function (t) {
                                            var i = function t(e, i) {
                                                return [].slice.call(e.childNodes).reduce((function (e, r, n) {
                                                    var a;
                                                    return "br" === r.nodeName && n ? e + "\n" : null !== (a = r.childNodes) && void 0 !== a && a.length ? t(r, i) : i ? e + r.textContent.trim().replace(/\s+/g, " ") : e + r.textContent
                                                }), "")
                                            }(t, a);
                                            if (!i || !t.hasAttribute("begin")) return null;
                                            var r = ki(t.getAttribute("begin"), n),
                                                l = ki(t.getAttribute("dur"), n),
                                                u = ki(t.getAttribute("end"), n);
                                            if (null === r) throw Li(t);
                                            if (null === u) {
                                                if (null === l) throw Li(t);
                                                u = r + l
                                            }
                                            var h = new Je(r - e, u - e, i);
                                            h.id = fi(h.startTime, h.endTime, h.text);
                                            var d = o[t.getAttribute("region")],
                                                c = s[t.getAttribute("style")];
                                            h.position = 10, h.size = 80;
                                            var f = function (t, e, i) {
                                                    var r = "http://www.w3.org/ns/ttml#styling",
                                                        n = null,
                                                        a = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                                    return a && i.hasOwnProperty(a) && (n = i[a]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function (i, a) {
                                                        var s = Si(e, r, a) || Si(t, r, a) || Si(n, r, a);
                                                        return s && (i[a] = s), i
                                                    }), {})
                                                }(d, c, s),
                                                v = f.textAlign;
                                            if (v) {
                                                var g = Ti[v];
                                                g && (h.lineAlign = g), h.align = v
                                            }
                                            return gi(h, f), h
                                        })).filter((function (t) {
                                            return null !== t
                                        }))
                                    }(t, o))
                                }))
                            } catch (t) {
                                n(t)
                            }
                        } else n(new Error("Could not parse IMSC1 mdat"))
                    }
                    function bi(t, e, i) {
                        var r = t.getElementsByTagName(e)[0];
                        return r ? [].slice.call(r.querySelectorAll(i)) : []
                    }
                    function Ei(t) {
                        return t.reduce((function (t, e) {
                            var i = e.getAttribute("xml:id");
                            return i && (t[i] = e), t
                        }), {})
                    }
                    function Si(t, e, i) {
                        return t && t.hasAttributeNS(e, i) ? t.getAttributeNS(e, i) : null
                    }
                    function Li(t) {
                        return new Error("Could not parse ttml timestamp " + t)
                    }
                    function ki(t, e) {
                        if (!t) return null;
                        var i = ti(t);
                        return null === i && (pi.test(t) ? i = function (t, e) {
                            var i = pi.exec(t),
                                r = (0 | i[4]) + (0 | i[5]) / e.subFrameRate;
                            return 3600 * (0 | i[1]) + 60 * (0 | i[2]) + (0 | i[3]) + r / e.frameRate
                        }(t, e) : mi.test(t) && (i = function (t, e) {
                            var i = mi.exec(t),
                                r = Number(i[1]);
                            switch (i[2]) {
                            case "h":
                                return 3600 * r;
                            case "m":
                                return 60 * r;
                            case "ms":
                                return 1e3 * r;
                            case "f":
                                return r / e.frameRate;
                            case "t":
                                return r / e.tickRate
                            }
                            return r
                        }(t, e))), i
                    }
                    var Ri = function () {
                        function t(t) {
                            if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                                    ccOffset: 0,
                                    presentationOffset: 0,
                                    0: {
                                        start: 0,
                                        prevCC: -1,
                                        new: !1
                                    }
                                }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                                    textTrack1: {
                                        label: this.config.captionsTextTrack1Label,
                                        languageCode: this.config.captionsTextTrack1LanguageCode
                                    },
                                    textTrack2: {
                                        label: this.config.captionsTextTrack2Label,
                                        languageCode: this.config.captionsTextTrack2LanguageCode
                                    },
                                    textTrack3: {
                                        label: this.config.captionsTextTrack3Label,
                                        languageCode: this.config.captionsTextTrack3LanguageCode
                                    },
                                    textTrack4: {
                                        label: this.config.captionsTextTrack4Label,
                                        languageCode: this.config.captionsTextTrack4LanguageCode
                                    }
                                }, this.config.enableCEA708Captions) {
                                var e = new Qe(this, "textTrack1"),
                                    i = new Qe(this, "textTrack2"),
                                    r = new Qe(this, "textTrack3"),
                                    n = new Qe(this, "textTrack4");
                                this.cea608Parser1 = new Ze(1, e, i), this.cea608Parser2 = new Ze(3, r, n)
                            }
                            t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.a.FRAG_LOADING, this.onFragLoading, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(s.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
                        }
                        var e = t.prototype;
                        return e.destroy = function () {
                            var t = this.hls;
                            t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.a.FRAG_LOADING, this.onFragLoading, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(s.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
                        }, e.addCues = function (t, e, i, r, n) {
                            for (var a, o, l, u, h = !1, d = n.length; d--;) {
                                var c = n[d],
                                    f = (a = c[0], o = c[1], l = e, u = i, Math.min(o, u) - Math.max(a, l));
                                if (f >= 0 && (c[0] = Math.min(c[0], e), c[1] = Math.max(c[1], i), h = !0, f / (i - e) > .5)) return
                            }
                            if (h || n.push([e, i]), this.config.renderTextTracksNatively) {
                                var v = this.captionsTracks[t];
                                this.Cues.newCue(v, e, i, r)
                            } else {
                                var g = this.Cues.newCue(null, e, i, r);
                                this.hls.trigger(s.a.CUES_PARSED, {
                                    type: "captions",
                                    cues: g,
                                    track: t
                                })
                            }
                        }, e.onInitPtsFound = function (t, e) {
                            var i = this,
                                r = e.frag,
                                n = e.id,
                                a = e.initPTS,
                                o = e.timescale,
                                l = this.unparsedVttFrags;
                            "main" === n && (this.initPTS[r.cc] = a, this.timescale[r.cc] = o), l.length && (this.unparsedVttFrags = [], l.forEach((function (t) {
                                i.onFragLoaded(s.a.FRAG_LOADED, t)
                            })))
                        }, e.getExistingTrack = function (t) {
                            var e = this.media;
                            if (e)
                                for (var i = 0; i < e.textTracks.length; i++) {
                                    var r = e.textTracks[i];
                                    if (r[t]) return r
                                }
                            return null
                        }, e.createCaptionsTrack = function (t) {
                            this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
                        }, e.createNativeTrack = function (t) {
                            if (!this.captionsTracks[t]) {
                                var e = this.captionsProperties,
                                    i = this.captionsTracks,
                                    r = this.media,
                                    n = e[t],
                                    a = n.label,
                                    s = n.languageCode,
                                    o = this.getExistingTrack(t);
                                if (o) i[t] = o, U(i[t]), F(i[t], r);
                                else {
                                    var l = this.createTextTrack("captions", a, s);
                                    l && (l[t] = !0, i[t] = l)
                                }
                            }
                        }, e.createNonNativeTrack = function (t) {
                            if (!this.nonNativeCaptionsTracks[t]) {
                                var e = this.captionsProperties[t];
                                if (e) {
                                    var i = {
                                        _id: t,
                                        label: e.label,
                                        kind: "captions",
                                        default: !!e.media && !!e.media.default,
                                        closedCaptions: e.media
                                    };
                                    this.nonNativeCaptionsTracks[t] = i, this.hls.trigger(s.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                        tracks: [i]
                                    })
                                }
                            }
                        }, e.createTextTrack = function (t, e, i) {
                            var r = this.media;
                            if (r) return r.addTextTrack(t, e, i)
                        }, e.onMediaAttaching = function (t, e) {
                            this.media = e.media, this._cleanTracks()
                        }, e.onMediaDetaching = function () {
                            var t = this.captionsTracks;
                            Object.keys(t).forEach((function (e) {
                                U(t[e]), delete t[e]
                            })), this.nonNativeCaptionsTracks = {}
                        }, e.onManifestLoading = function () {
                            this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
                        }, e._cleanTracks = function () {
                            var t = this.media;
                            if (t) {
                                var e = t.textTracks;
                                if (e)
                                    for (var i = 0; i < e.length; i++) U(e[i])
                            }
                        }, e.onSubtitleTracksUpdated = function (t, e) {
                            var i = this;
                            this.textTracks = [];
                            var r = e.subtitleTracks || [],
                                n = r.some((function (t) {
                                    return "stpp.ttml.im1t" === t.textCodec
                                }));
                            if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                                var a = this.tracks && r && this.tracks.length === r.length;
                                if (this.tracks = r || [], this.config.renderTextTracksNatively) {
                                    var o = this.media ? this.media.textTracks : [];
                                    this.tracks.forEach((function (t, e) {
                                        var r;
                                        if (e < o.length) {
                                            for (var n = null, a = 0; a < o.length; a++)
                                                if (Ai(o[a], t)) {
                                                    n = o[a];
                                                    break
                                                } n && (r = n)
                                        }
                                        if (r) U(r);
                                        else {
                                            var s = i._captionsOrSubtitlesFromCharacteristics(t);
                                            (r = i.createTextTrack(s, t.name, t.lang)) && (r.mode = "disabled")
                                        }
                                        r && (r.groupId = t.groupId, i.textTracks.push(r))
                                    }))
                                } else if (!a && this.tracks && this.tracks.length) {
                                    var l = this.tracks.map((function (t) {
                                        return {
                                            label: t.name,
                                            kind: t.type.toLowerCase(),
                                            default: t.default,
                                            subtitleTrack: t
                                        }
                                    }));
                                    this.hls.trigger(s.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                        tracks: l
                                    })
                                }
                            }
                        }, e._captionsOrSubtitlesFromCharacteristics = function (t) {
                            var e;
                            if (null !== (e = t.attrs) && void 0 !== e && e.CHARACTERISTICS) {
                                var i = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
                                    r = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
                                if (i && r) return "captions"
                            }
                            return "subtitles"
                        }, e.onManifestLoaded = function (t, e) {
                            var i = this;
                            this.config.enableCEA708Captions && e.captions && e.captions.forEach((function (t) {
                                var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                                if (e) {
                                    var r = "textTrack" + e[1],
                                        n = i.captionsProperties[r];
                                    n && (n.label = t.name, t.lang && (n.languageCode = t.lang), n.media = t)
                                }
                            }))
                        }, e.onFragLoading = function (t, e) {
                            var i = this.cea608Parser1,
                                r = this.cea608Parser2,
                                n = this.lastSn,
                                a = this.lastPartIndex;
                            if (this.enabled && i && r && e.frag.type === w.b.MAIN) {
                                var s, o, l = e.frag.sn,
                                    u = null != (s = null == e || null === (o = e.part) || void 0 === o ? void 0 : o.index) ? s : -1;
                                l === n + 1 || l === n && u === a + 1 || (i.reset(), r.reset()), this.lastSn = l, this.lastPartIndex = u
                            }
                        }, e.onFragLoaded = function (t, e) {
                            var i = e.frag,
                                r = e.payload,
                                n = this.initPTS,
                                o = this.unparsedVttFrags;
                            if (i.type === w.b.SUBTITLE)
                                if (r.byteLength) {
                                    if (!Object(a.a)(n[i.cc])) return o.push(e), void(n.length && this.hls.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                        success: !1,
                                        frag: i,
                                        error: new Error("Missing initial subtitle PTS")
                                    }));
                                    var l = i.decryptdata,
                                        u = "stats" in e;
                                    if (null == l || null == l.key || "AES-128" !== l.method || u) {
                                        var h = this.tracks[i.level],
                                            d = this.vttCCs;
                                        d[i.cc] || (d[i.cc] = {
                                            start: i.start,
                                            prevCC: this.prevCC,
                                            new: !0
                                        }, this.prevCC = i.cc), h && "stpp.ttml.im1t" === h.textCodec ? this._parseIMSC1(i, r) : this._parseVTTs(i, r, d)
                                    }
                                } else this.hls.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: i,
                                    error: new Error("Empty subtitle payload")
                                })
                        }, e._parseIMSC1 = function (t, e) {
                            var i = this,
                                r = this.hls;
                            yi(e, this.initPTS[t.cc], this.timescale[t.cc], (function (e) {
                                i._appendCues(e, t.level), r.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: t
                                })
                            }), (function (e) {
                                l.b.log("Failed to parse IMSC1: " + e), r.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t,
                                    error: e
                                })
                            }))
                        }, e._parseVTTs = function (t, e, i) {
                            var r, n = this,
                                a = this.hls;
                            vi(null !== (r = t.initSegment) && void 0 !== r && r.data ? Object(u.b)(t.initSegment.data, new Uint8Array(e)) : e, this.initPTS[t.cc], this.timescale[t.cc], i, t.cc, t.start, (function (e) {
                                n._appendCues(e, t.level), a.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: t
                                })
                            }), (function (i) {
                                n._fallbackToIMSC1(t, e), l.b.log("Failed to parse VTT cue: " + i), a.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t,
                                    error: i
                                })
                            }))
                        }, e._fallbackToIMSC1 = function (t, e) {
                            var i = this,
                                r = this.tracks[t.level];
                            r.textCodec || yi(e, this.initPTS[t.cc], this.timescale[t.cc], (function () {
                                r.textCodec = "stpp.ttml.im1t", i._parseIMSC1(t, e)
                            }), (function () {
                                r.textCodec = "wvtt"
                            }))
                        }, e._appendCues = function (t, e) {
                            var i = this.hls;
                            if (this.config.renderTextTracksNatively) {
                                var r = this.textTracks[e];
                                if (!r || "disabled" === r.mode) return;
                                t.forEach((function (t) {
                                    return N(r, t)
                                }))
                            } else {
                                var n = this.tracks[e];
                                if (!n) return;
                                var a = n.default ? "default" : "subtitles" + e;
                                i.trigger(s.a.CUES_PARSED, {
                                    type: "subtitles",
                                    cues: t,
                                    track: a
                                })
                            }
                        }, e.onFragDecrypted = function (t, e) {
                            var i = e.frag;
                            if (i.type === w.b.SUBTITLE) {
                                if (!Object(a.a)(this.initPTS[i.cc])) return void this.unparsedVttFrags.push(e);
                                this.onFragLoaded(s.a.FRAG_LOADED, e)
                            }
                        }, e.onSubtitleTracksCleared = function () {
                            this.tracks = [], this.captionsTracks = {}
                        }, e.onFragParsingUserdata = function (t, e) {
                            var i = this.cea608Parser1,
                                r = this.cea608Parser2;
                            if (this.enabled && i && r)
                                for (var n = 0; n < e.samples.length; n++) {
                                    var a = e.samples[n].bytes;
                                    if (a) {
                                        var s = this.extractCea608Data(a);
                                        i.addData(e.samples[n].pts, s[0]), r.addData(e.samples[n].pts, s[1])
                                    }
                                }
                        }, e.onBufferFlushing = function (t, e) {
                            var i = e.startOffset,
                                r = e.endOffset,
                                n = e.endOffsetSubtitles,
                                a = e.type,
                                s = this.media;
                            if (s && !(s.currentTime < r)) {
                                if (!a || "video" === a) {
                                    var o = this.captionsTracks;
                                    Object.keys(o).forEach((function (t) {
                                        return B(o[t], i, r)
                                    }))
                                }
                                if (this.config.renderTextTracksNatively && 0 === i && void 0 !== n) {
                                    var l = this.textTracks;
                                    Object.keys(l).forEach((function (t) {
                                        return B(l[t], i, n)
                                    }))
                                }
                            }
                        }, e.extractCea608Data = function (t) {
                            for (var e = [
                                    [],
                                    []
                                ], i = 31 & t[0], r = 2, n = 0; n < i; n++) {
                                var a = t[r++],
                                    s = 127 & t[r++],
                                    o = 127 & t[r++];
                                if ((0 !== s || 0 !== o) && 0 != (4 & a)) {
                                    var l = 3 & a;
                                    0 !== l && 1 !== l || (e[l].push(s), e[l].push(o))
                                }
                            }
                            return e
                        }, t
                    }();
                    function Ai(t, e) {
                        return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
                    }
                    function _i(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var Di, Oi = function () {
                            function t(t) {
                                this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
                            }
                            var e, i, r = t.prototype;
                            return r.setStreamController = function (t) {
                                this.streamController = t
                            }, r.destroy = function () {
                                this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
                            }, r.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this)
                            }, r.unregisterListener = function () {
                                var t = this.hls;
                                t.off(s.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this)
                            }, r.onFpsDropLevelCapping = function (e, i) {
                                t.isLevelAllowed(i.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(i.droppedLevel)
                            }, r.onMediaAttaching = function (t, e) {
                                this.media = e.media instanceof HTMLVideoElement ? e.media : null
                            }, r.onManifestParsed = function (t, e) {
                                var i = this.hls;
                                this.restrictedLevels = [], this.firstLevel = e.firstLevel, i.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, r.onBufferCodecs = function (t, e) {
                                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, r.onMediaDetaching = function () {
                                this.stopCapping()
                            }, r.detectPlayerSize = function () {
                                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                                    var t = this.hls.levels;
                                    if (t.length) {
                                        var e = this.hls;
                                        e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                                    }
                                }
                            }, r.getMaxLevel = function (e) {
                                var i = this,
                                    r = this.hls.levels;
                                if (!r.length) return -1;
                                var n = r.filter((function (r, n) {
                                    return t.isLevelAllowed(n, i.restrictedLevels) && n <= e
                                }));
                                return this.clientRect = null, t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                            }, r.startCapping = function () {
                                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                            }, r.stopCapping = function () {
                                this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                            }, r.getDimensions = function () {
                                if (this.clientRect) return this.clientRect;
                                var t = this.media,
                                    e = {
                                        width: 0,
                                        height: 0
                                    };
                                if (t) {
                                    var i = t.getBoundingClientRect();
                                    e.width = i.width, e.height = i.height, e.width || e.height || (e.width = i.right - i.left || t.width || 0, e.height = i.bottom - i.top || t.height || 0)
                                }
                                return this.clientRect = e, e
                            }, t.isLevelAllowed = function (t, e) {
                                return void 0 === e && (e = []), -1 === e.indexOf(t)
                            }, t.getMaxLevelByMediaSize = function (t, e, i) {
                                if (!t || !t.length) return -1;
                                for (var r, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                                    var o = t[s];
                                    if ((o.width >= e || o.height >= i) && (r = o, !(n = t[s + 1]) || r.width !== n.width || r.height !== n.height)) {
                                        a = s;
                                        break
                                    }
                                }
                                return a
                            }, e = t, (i = [{
                                key: "mediaWidth",
                                get: function () {
                                    return this.getDimensions().width * this.contentScaleFactor
                                }
                            }, {
                                key: "mediaHeight",
                                get: function () {
                                    return this.getDimensions().height * this.contentScaleFactor
                                }
                            }, {
                                key: "contentScaleFactor",
                                get: function () {
                                    var t = 1;
                                    if (!this.hls.config.ignoreDevicePixelRatio) try {
                                        t = self.devicePixelRatio
                                    } catch (t) {}
                                    return t
                                }
                            }]) && _i(e.prototype, i), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t
                        }(),
                        Ci = function () {
                            function t(t) {
                                this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
                            }
                            var e = t.prototype;
                            return e.setStreamController = function (t) {
                                this.streamController = t
                            }, e.registerListeners = function () {
                                this.hls.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this)
                            }, e.unregisterListeners = function () {
                                this.hls.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching)
                            }, e.destroy = function () {
                                this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
                            }, e.onMediaAttaching = function (t, e) {
                                var i = this.hls.config;
                                if (i.capLevelOnFPSDrop) {
                                    var r = e.media instanceof self.HTMLVideoElement ? e.media : null;
                                    this.media = r, r && "function" == typeof r.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod)
                                }
                            }, e.checkFPS = function (t, e, i) {
                                var r = performance.now();
                                if (e) {
                                    if (this.lastTime) {
                                        var n = r - this.lastTime,
                                            a = i - this.lastDroppedFrames,
                                            o = e - this.lastDecodedFrames,
                                            u = 1e3 * a / n,
                                            h = this.hls;
                                        if (h.trigger(s.a.FPS_DROP, {
                                                currentDropped: a,
                                                currentDecoded: o,
                                                totalDroppedFrames: i
                                            }), u > 0 && a > h.config.fpsDroppedMonitoringThreshold * o) {
                                            var d = h.currentLevel;
                                            l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= d) && (d -= 1, h.trigger(s.a.FPS_DROP_LEVEL_CAPPING, {
                                                level: d,
                                                droppedLevel: h.currentLevel
                                            }), h.autoLevelCapping = d, this.streamController.nextLevelSwitch())
                                        }
                                    }
                                    this.lastTime = r, this.lastDroppedFrames = i, this.lastDecodedFrames = e
                                }
                            }, e.checkFPSInterval = function () {
                                var t = this.media;
                                if (t)
                                    if (this.isVideoPlaybackQualityAvailable) {
                                        var e = t.getVideoPlaybackQuality();
                                        this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                                    } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                            }, t
                        }();
                    ! function (t) {
                        t.WIDEVINE = "com.widevine.alpha", t.PLAYREADY = "com.microsoft.playready"
                    }(Di || (Di = {}));
                    var Ii = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
                    function wi(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var xi, Pi, Mi, Fi = function () {
                        function t(t) {
                            this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = t, this._config = t.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
                        }
                        var e, i, r = t.prototype;
                        return r.destroy = function () {
                            this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null
                        }, r._registerListeners = function () {
                            this.hls.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this)
                        }, r._unregisterListeners = function () {
                            this.hls.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(s.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this)
                        }, r.getLicenseServerUrl = function (t) {
                            switch (t) {
                            case Di.WIDEVINE:
                                if (!this._widevineLicenseUrl) break;
                                return this._widevineLicenseUrl
                            }
                            throw new Error('no license server URL configured for key-system "' + t + '"')
                        }, r._attemptKeySystemAccess = function (t, e, i) {
                            var r = this,
                                n = function (t, e, i, r) {
                                    if (t === Di.WIDEVINE) return function (t, e, i) {
                                        var r = {
                                            audioCapabilities: [],
                                            videoCapabilities: []
                                        };
                                        return t.forEach((function (t) {
                                            r.audioCapabilities.push({
                                                contentType: 'audio/mp4; codecs="' + t + '"',
                                                robustness: i.audioRobustness || ""
                                            })
                                        })), e.forEach((function (t) {
                                            r.videoCapabilities.push({
                                                contentType: 'video/mp4; codecs="' + t + '"',
                                                robustness: i.videoRobustness || ""
                                            })
                                        })), [r]
                                    }(e, i, r);
                                    throw new Error("Unknown key-system: " + t)
                                }(t, e, i, this._drmSystemOptions);
                            l.b.log("Requesting encrypted media key-system access");
                            var a = this.requestMediaKeySystemAccess(t, n);
                            this.mediaKeysPromise = a.then((function (e) {
                                return r._onMediaKeySystemAccessObtained(t, e)
                            })), a.catch((function (e) {
                                l.b.error('Failed to obtain key-system "' + t + '" access:', e)
                            }))
                        }, r._onMediaKeySystemAccessObtained = function (t, e) {
                            var i = this;
                            l.b.log('Access for key-system "' + t + '" obtained');
                            var r = {
                                mediaKeysSessionInitialized: !1,
                                mediaKeySystemAccess: e,
                                mediaKeySystemDomain: t
                            };
                            this._mediaKeysList.push(r);
                            var n = Promise.resolve().then((function () {
                                return e.createMediaKeys()
                            })).then((function (e) {
                                return r.mediaKeys = e, l.b.log('Media-keys created for key-system "' + t + '"'), i._onMediaKeysCreated(), e
                            }));
                            return n.catch((function (t) {
                                l.b.error("Failed to create media-keys:", t)
                            })), n
                        }, r._onMediaKeysCreated = function () {
                            var t = this;
                            this._mediaKeysList.forEach((function (e) {
                                e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                            }))
                        }, r._onNewMediaKeySession = function (t) {
                            var e = this;
                            l.b.log("New key-system session " + t.sessionId), t.addEventListener("message", (function (i) {
                                e._onKeySessionMessage(t, i.message)
                            }), !1)
                        }, r._onKeySessionMessage = function (t, e) {
                            l.b.log("Got EME message event, creating license request"), this._requestLicense(e, (function (e) {
                                l.b.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e).catch((function (t) {
                                    l.b.warn("Updating key-session failed: " + t)
                                }))
                            }))
                        }, r.onMediaEncrypted = function (t) {
                            var e = this;
                            if (l.b.log('Media is encrypted using "' + t.initDataType + '" init data type'), !this.mediaKeysPromise) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(s.a.ERROR, {
                                type: o.b.KEY_SYSTEM_ERROR,
                                details: o.a.KEY_SYSTEM_NO_KEYS,
                                fatal: !0
                            });
                            var i = function (i) {
                                e._media && (e._attemptSetMediaKeys(i), e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                            };
                            this.mediaKeysPromise.then(i).catch(i)
                        }, r._attemptSetMediaKeys = function (t) {
                            if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                            if (!this._hasSetMediaKeys) {
                                var e = this._mediaKeysList[0];
                                if (!e || !e.mediaKeys) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(s.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_NO_KEYS,
                                    fatal: !0
                                });
                                l.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                            }
                        }, r._generateRequestWithPreferredKeySession = function (t, e) {
                            var i = this,
                                r = this._mediaKeysList[0];
                            if (!r) return l.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, {
                                type: o.b.KEY_SYSTEM_ERROR,
                                details: o.a.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            if (r.mediaKeysSessionInitialized) l.b.warn("Key-Session already initialized but requested again");
                            else {
                                var n = r.mediaKeysSession;
                                if (!n) return l.b.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(s.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_NO_SESSION,
                                    fatal: !0
                                });
                                if (!e) return l.b.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(s.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_NO_INIT_DATA,
                                    fatal: !0
                                });
                                l.b.log('Generating key-session request for "' + t + '" init data type'), r.mediaKeysSessionInitialized = !0, n.generateRequest(t, e).then((function () {
                                    l.b.debug("Key-session generation succeeded")
                                })).catch((function (t) {
                                    l.b.error("Error generating key-session request:", t), i.hls.trigger(s.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_NO_SESSION,
                                        fatal: !1
                                    })
                                }))
                            }
                        }, r._createLicenseXhr = function (t, e, i) {
                            var r = new XMLHttpRequest;
                            r.responseType = "arraybuffer", r.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, r, t, e, i);
                            var n = this._licenseXhrSetup;
                            if (n) try {
                                n.call(this.hls, r, t), n = void 0
                            } catch (t) {
                                l.b.error(t)
                            }
                            try {
                                r.readyState || r.open("POST", t, !0), n && n.call(this.hls, r, t)
                            } catch (t) {
                                throw new Error("issue setting up KeySystem license XHR " + t)
                            }
                            return r
                        }, r._onLicenseRequestReadyStageChange = function (t, e, i, r) {
                            if (4 === t.readyState)
                                if (200 === t.status) {
                                    this._requestLicenseFailureCount = 0, l.b.log("License request succeeded");
                                    var n = t.response,
                                        a = this._licenseResponseCallback;
                                    if (a) try {
                                        n = a.call(this.hls, t, e)
                                    } catch (t) {
                                        l.b.error(t)
                                    }
                                    r(n)
                                } else {
                                    if (l.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(s.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                        fatal: !0
                                    });
                                    var u = 3 - this._requestLicenseFailureCount + 1;
                                    l.b.warn("Retrying license request, " + u + " attempts left"), this._requestLicense(i, r)
                                }
                        }, r._generateLicenseRequestChallenge = function (t, e) {
                            if (t.mediaKeySystemDomain === Di.WIDEVINE) return e;
                            throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
                        }, r._requestLicense = function (t, e) {
                            l.b.log("Requesting content license for key-system");
                            var i = this._mediaKeysList[0];
                            if (!i) return l.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, {
                                type: o.b.KEY_SYSTEM_ERROR,
                                details: o.a.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            try {
                                var r = this.getLicenseServerUrl(i.mediaKeySystemDomain),
                                    n = this._createLicenseXhr(r, t, e);
                                l.b.log("Sending license request to URL: " + r);
                                var a = this._generateLicenseRequestChallenge(i, t);
                                n.send(a)
                            } catch (t) {
                                l.b.error("Failure requesting DRM license: " + t), this.hls.trigger(s.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                            }
                        }, r.onMediaAttached = function (t, e) {
                            if (this._emeEnabled) {
                                var i = e.media;
                                this._media = i, i.addEventListener("encrypted", this._onMediaEncrypted)
                            }
                        }, r.onMediaDetached = function () {
                            var t = this._media,
                                e = this._mediaKeysList;
                            t && (t.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map((function (t) {
                                if (t.mediaKeysSession) return t.mediaKeysSession.close().catch((function () {}))
                            }))).then((function () {
                                return t.setMediaKeys(null)
                            })).catch((function () {})))
                        }, r.onManifestParsed = function (t, e) {
                            if (this._emeEnabled) {
                                var i = e.levels.map((function (t) {
                                        return t.audioCodec
                                    })).filter((function (t) {
                                        return !!t
                                    })),
                                    r = e.levels.map((function (t) {
                                        return t.videoCodec
                                    })).filter((function (t) {
                                        return !!t
                                    }));
                                this._attemptKeySystemAccess(Di.WIDEVINE, i, r)
                            }
                        }, e = t, (i = [{
                            key: "requestMediaKeySystemAccess",
                            get: function () {
                                if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                return this._requestMediaKeySystemAccess
                            }
                        }]) && wi(e.prototype, i), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();
                    function Ni(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    function Ui(t, e, i) {
                        return e && Ni(t.prototype, e), i && Ni(t, i), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                    }
                    function Bi(t, e) {
                        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (i) return (i = i.call(t)).next.bind(i);
                        if (Array.isArray(t) || (i = function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return ji(t, e);
                                    var i = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ji(t, e) : void 0
                                }
                            }(t)) || e && t && "number" == typeof t.length) {
                            i && (t = i);
                            var r = 0;
                            return function () {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    function ji(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                        return r
                    }
                    function Gi() {
                        return (Gi = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }! function (t) {
                        t.MANIFEST = "m", t.AUDIO = "a", t.VIDEO = "v", t.MUXED = "av", t.INIT = "i", t.CAPTION = "c", t.TIMED_TEXT = "tt", t.KEY = "k", t.OTHER = "o"
                    }(xi || (xi = {})),
                    function (t) {
                        t.DASH = "d", t.HLS = "h", t.SMOOTH = "s", t.OTHER = "o"
                    }(Pi || (Pi = {})),
                    function (t) {
                        t.VOD = "v", t.LIVE = "l"
                    }(Mi || (Mi = {}));
                    var Hi = function () {
                            function t(e) {
                                var i = this;
                                this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function () {
                                    i.initialized && (i.starved = !0), i.buffering = !0
                                }, this.onPlaying = function () {
                                    i.initialized || (i.initialized = !0), i.buffering = !1
                                }, this.applyPlaylistData = function (t) {
                                    try {
                                        i.apply(t, {
                                            ot: xi.MANIFEST,
                                            su: !i.initialized
                                        })
                                    } catch (t) {
                                        l.b.warn("Could not generate manifest CMCD data.", t)
                                    }
                                }, this.applyFragmentData = function (t) {
                                    try {
                                        var e = t.frag,
                                            r = i.hls.levels[e.level],
                                            n = i.getObjectType(e),
                                            a = {
                                                d: 1e3 * e.duration,
                                                ot: n
                                            };
                                        n !== xi.VIDEO && n !== xi.AUDIO && n != xi.MUXED || (a.br = r.bitrate / 1e3, a.tb = i.getTopBandwidth(n) / 1e3, a.bl = i.getBufferLength(n)), i.apply(t, a)
                                    } catch (t) {
                                        l.b.warn("Could not generate segment CMCD data.", t)
                                    }
                                }, this.hls = e;
                                var r = this.config = e.config,
                                    n = r.cmcd;
                                null != n && (r.pLoader = this.createPlaylistLoader(), r.fLoader = this.createFragmentLoader(), this.sid = n.sessionId || t.uuid(), this.cid = n.contentId, this.useHeaders = !0 === n.useHeaders, this.registerListeners())
                            }
                            var e = t.prototype;
                            return e.registerListeners = function () {
                                var t = this.hls;
                                t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHED, this.onMediaDetached, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this)
                            }, e.unregisterListeners = function () {
                                var t = this.hls;
                                t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHED, this.onMediaDetached, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached()
                            }, e.destroy = function () {
                                this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
                            }, e.onMediaAttached = function (t, e) {
                                this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
                            }, e.onMediaDetached = function () {
                                this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
                            }, e.onBufferCreated = function (t, e) {
                                var i, r;
                                this.audioBuffer = null === (i = e.tracks.audio) || void 0 === i ? void 0 : i.buffer, this.videoBuffer = null === (r = e.tracks.video) || void 0 === r ? void 0 : r.buffer
                            }, e.createData = function () {
                                var t;
                                return {
                                    v: 1,
                                    sf: Pi.HLS,
                                    sid: this.sid,
                                    cid: this.cid,
                                    pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
                                    mtp: this.hls.bandwidthEstimate / 1e3
                                }
                            }, e.apply = function (e, i) {
                                void 0 === i && (i = {}), Gi(i, this.createData());
                                var r = i.ot === xi.INIT || i.ot === xi.VIDEO || i.ot === xi.MUXED;
                                if (this.starved && r && (i.bs = !0, i.su = !0, this.starved = !1), null == i.su && (i.su = this.buffering), this.useHeaders) {
                                    var n = t.toHeaders(i);
                                    if (!Object.keys(n).length) return;
                                    e.headers || (e.headers = {}), Gi(e.headers, n)
                                } else {
                                    var a = t.toQuery(i);
                                    if (!a) return;
                                    e.url = t.appendQueryToUri(e.url, a)
                                }
                            }, e.getObjectType = function (t) {
                                var e = t.type;
                                return "subtitle" === e ? xi.TIMED_TEXT : "initSegment" === t.sn ? xi.INIT : "audio" === e ? xi.AUDIO : "main" === e ? this.hls.audioTracks.length ? xi.VIDEO : xi.MUXED : void 0
                            }, e.getTopBandwidth = function (t) {
                                var e, i = 0,
                                    r = this.hls;
                                if (t === xi.AUDIO) e = r.audioTracks;
                                else {
                                    var n = r.maxAutoLevel,
                                        a = n > -1 ? n + 1 : r.levels.length;
                                    e = r.levels.slice(0, a)
                                }
                                for (var s, o = Bi(e); !(s = o()).done;) {
                                    var l = s.value;
                                    l.bitrate > i && (i = l.bitrate)
                                }
                                return i > 0 ? i : NaN
                            }, e.getBufferLength = function (t) {
                                var e = this.hls.media,
                                    i = t === xi.AUDIO ? this.audioBuffer : this.videoBuffer;
                                return i && e ? 1e3 * mt.bufferInfo(i, e.currentTime, this.config.maxBufferHole).len : NaN
                            }, e.createPlaylistLoader = function () {
                                var t = this.config.pLoader,
                                    e = this.applyPlaylistData,
                                    i = t || this.config.loader;
                                return function () {
                                    function t(t) {
                                        this.loader = void 0, this.loader = new i(t)
                                    }
                                    var r = t.prototype;
                                    return r.destroy = function () {
                                        this.loader.destroy()
                                    }, r.abort = function () {
                                        this.loader.abort()
                                    }, r.load = function (t, i, r) {
                                        e(t), this.loader.load(t, i, r)
                                    }, Ui(t, [{
                                        key: "stats",
                                        get: function () {
                                            return this.loader.stats
                                        }
                                    }, {
                                        key: "context",
                                        get: function () {
                                            return this.loader.context
                                        }
                                    }]), t
                                }()
                            }, e.createFragmentLoader = function () {
                                var t = this.config.fLoader,
                                    e = this.applyFragmentData,
                                    i = t || this.config.loader;
                                return function () {
                                    function t(t) {
                                        this.loader = void 0, this.loader = new i(t)
                                    }
                                    var r = t.prototype;
                                    return r.destroy = function () {
                                        this.loader.destroy()
                                    }, r.abort = function () {
                                        this.loader.abort()
                                    }, r.load = function (t, i, r) {
                                        e(t), this.loader.load(t, i, r)
                                    }, Ui(t, [{
                                        key: "stats",
                                        get: function () {
                                            return this.loader.stats
                                        }
                                    }, {
                                        key: "context",
                                        get: function () {
                                            return this.loader.context
                                        }
                                    }]), t
                                }()
                            }, t.uuid = function () {
                                var t = URL.createObjectURL(new Blob),
                                    e = t.toString();
                                return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
                            }, t.serialize = function (t) {
                                for (var e, i = [], r = function (t) {
                                        return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
                                    }, n = function (t) {
                                        return Math.round(t)
                                    }, a = function (t) {
                                        return 100 * n(t / 100)
                                    }, s = {
                                        br: n,
                                        d: n,
                                        bl: a,
                                        dl: a,
                                        mtp: a,
                                        nor: function (t) {
                                            return encodeURIComponent(t)
                                        },
                                        rtp: a,
                                        tb: n
                                    }, o = Bi(Object.keys(t || {}).sort()); !(e = o()).done;) {
                                    var l = e.value,
                                        u = t[l];
                                    if (r(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
                                        var h = s[l];
                                        h && (u = h(u));
                                        var d, c = typeof u;
                                        d = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === c ? l : "number" === c ? l + "=" + u : l + "=" + JSON.stringify(u), i.push(d)
                                    }
                                }
                                return i.join(",")
                            }, t.toHeaders = function (e) {
                                for (var i = {}, r = ["Object", "Request", "Session", "Status"], n = [{}, {}, {}, {}], a = {
                                        br: 0,
                                        d: 0,
                                        ot: 0,
                                        tb: 0,
                                        bl: 1,
                                        dl: 1,
                                        mtp: 1,
                                        nor: 1,
                                        nrr: 1,
                                        su: 1,
                                        cid: 2,
                                        pr: 2,
                                        sf: 2,
                                        sid: 2,
                                        st: 2,
                                        v: 2,
                                        bs: 3,
                                        rtp: 3
                                    }, s = 0, o = Object.keys(e); s < o.length; s++) {
                                    var l = o[s];
                                    n[null != a[l] ? a[l] : 1][l] = e[l]
                                }
                                for (var u = 0; u < n.length; u++) {
                                    var h = t.serialize(n[u]);
                                    h && (i["CMCD-" + r[u]] = h)
                                }
                                return i
                            }, t.toQuery = function (e) {
                                return "CMCD=" + encodeURIComponent(t.serialize(e))
                            }, t.appendQueryToUri = function (t, e) {
                                if (!e) return t;
                                var i = t.includes("?") ? "&" : "?";
                                return "" + t + i + e
                            }, t
                        }(),
                        Ki = i(14),
                        Vi = /^age:\s*[\d.]+\s*$/m,
                        Wi = function () {
                            function t(t) {
                                this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t ? t.xhrSetup : null, this.stats = new Ki.a, this.retryDelay = 0
                            }
                            var e = t.prototype;
                            return e.destroy = function () {
                                this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
                            }, e.abortInternal = function () {
                                var t = this.loader;
                                self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
                            }, e.abort = function () {
                                var t;
                                this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                            }, e.load = function (t, e, i) {
                                if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                                this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = i, this.retryDelay = e.retryDelay, this.loadInternal()
                            }, e.loadInternal = function () {
                                var t = this.config,
                                    e = this.context;
                                if (t) {
                                    var i = this.loader = new self.XMLHttpRequest,
                                        r = this.stats;
                                    r.loading.first = 0, r.loaded = 0;
                                    var n = this.xhrSetup;
                                    try {
                                        if (n) try {
                                            n(i, e.url)
                                        } catch (t) {
                                            i.open("GET", e.url, !0), n(i, e.url)
                                        }
                                        i.readyState || i.open("GET", e.url, !0);
                                        var a = this.context.headers;
                                        if (a)
                                            for (var s in a) i.setRequestHeader(s, a[s])
                                    } catch (t) {
                                        return void this.callbacks.onError({
                                            code: i.status,
                                            text: t.message
                                        }, e, i)
                                    }
                                    e.rangeEnd && i.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), i.onreadystatechange = this.readystatechange.bind(this), i.onprogress = this.loadprogress.bind(this), i.responseType = e.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout), i.send()
                                }
                            }, e.readystatechange = function () {
                                var t = this.context,
                                    e = this.loader,
                                    i = this.stats;
                                if (t && e) {
                                    var r = e.readyState,
                                        n = this.config;
                                    if (!i.aborted && r >= 2)
                                        if (self.clearTimeout(this.requestTimeout), 0 === i.loading.first && (i.loading.first = Math.max(self.performance.now(), i.loading.start)), 4 === r) {
                                            e.onreadystatechange = null, e.onprogress = null;
                                            var a = e.status;
                                            if (a >= 200 && a < 300) {
                                                var s, o;
                                                if (i.loading.end = Math.max(self.performance.now(), i.loading.first), o = "arraybuffer" === t.responseType ? (s = e.response).byteLength : (s = e.responseText).length, i.loaded = i.total = o, !this.callbacks) return;
                                                var u = this.callbacks.onProgress;
                                                if (u && u(i, t, s, e), !this.callbacks) return;
                                                var h = {
                                                    url: e.responseURL,
                                                    data: s
                                                };
                                                this.callbacks.onSuccess(h, i, t, e)
                                            } else i.retry >= n.maxRetry || a >= 400 && a < 499 ? (l.b.error(a + " while loading " + t.url), this.callbacks.onError({
                                                code: a,
                                                text: e.statusText
                                            }, t, e)) : (l.b.warn(a + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay), i.retry++)
                                        } else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.timeout)
                                }
                            }, e.loadtimeout = function () {
                                l.b.warn("timeout while loading " + this.context.url);
                                var t = this.callbacks;
                                t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
                            }, e.loadprogress = function (t) {
                                var e = this.stats;
                                e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
                            }, e.getCacheAge = function () {
                                var t = null;
                                if (this.loader && Vi.test(this.loader.getAllResponseHeaders())) {
                                    var e = this.loader.getResponseHeader("age");
                                    t = e ? parseFloat(e) : null
                                }
                                return t
                            }, t
                        }();
                    function Yi(t) {
                        var e = "function" == typeof Map ? new Map : void 0;
                        return (Yi = function (t) {
                            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                            var i;
                            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, r)
                            }
                            function r() {
                                return qi(t, arguments, Zi(this).constructor)
                            }
                            return r.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), zi(r, t)
                        })(t)
                    }
                    function qi(t, e, i) {
                        return (qi = Xi() ? Reflect.construct.bind() : function (t, e, i) {
                            var r = [null];
                            r.push.apply(r, e);
                            var n = new(Function.bind.apply(t, r));
                            return i && zi(n, i.prototype), n
                        }).apply(null, arguments)
                    }
                    function Xi() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }
                    function zi(t, e) {
                        return (zi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    function Zi(t) {
                        return (Zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    function Qi() {
                        return (Qi = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    var Ji = function () {
                        function t(t) {
                            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || $i, this.controller = new self.AbortController, this.stats = new Ki.a
                        }
                        var e = t.prototype;
                        return e.destroy = function () {
                            this.loader = this.callbacks = null, this.abortInternal()
                        }, e.abortInternal = function () {
                            var t = this.response;
                            t && t.ok || (this.stats.aborted = !0, this.controller.abort())
                        }, e.abort = function () {
                            var t;
                            this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
                        }, e.load = function (t, e, i) {
                            var r = this,
                                n = this.stats;
                            if (n.loading.start) throw new Error("Loader can only be used once.");
                            n.loading.start = self.performance.now();
                            var s = function (t, e) {
                                    var i = {
                                        method: "GET",
                                        mode: "cors",
                                        credentials: "same-origin",
                                        signal: e,
                                        headers: new self.Headers(Qi({}, t.headers))
                                    };
                                    return t.rangeEnd && i.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), i
                                }(t, this.controller.signal),
                                o = i.onProgress,
                                l = "arraybuffer" === t.responseType,
                                u = l ? "byteLength" : "length";
                            this.context = t, this.config = e, this.callbacks = i, this.request = this.fetchSetup(t, s), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout((function () {
                                r.abortInternal(), i.onTimeout(n, t, r.response)
                            }), e.timeout), self.fetch(this.request).then((function (i) {
                                if (r.response = r.loader = i, !i.ok) {
                                    var s = i.status,
                                        u = i.statusText;
                                    throw new tr(u || "fetch, bad network response", s, i)
                                }
                                return n.loading.first = Math.max(self.performance.now(), n.loading.start), n.total = parseInt(i.headers.get("Content-Length") || "0"), o && Object(a.a)(e.highWaterMark) ? r.loadProgressively(i, n, t, e.highWaterMark, o) : l ? i.arrayBuffer() : i.text()
                            })).then((function (s) {
                                var l = r.response;
                                self.clearTimeout(r.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first), n.loaded = n.total = s[u];
                                var h = {
                                    url: l.url,
                                    data: s
                                };
                                o && !Object(a.a)(e.highWaterMark) && o(n, t, s, l), i.onSuccess(h, n, t, l)
                            })).catch((function (e) {
                                if (self.clearTimeout(r.requestTimeout), !n.aborted) {
                                    var a = e && e.code || 0,
                                        s = e ? e.message : null;
                                    i.onError({
                                        code: a,
                                        text: s
                                    }, t, e ? e.details : null)
                                }
                            }))
                        }, e.getCacheAge = function () {
                            var t = null;
                            if (this.response) {
                                var e = this.response.headers.get("age");
                                t = e ? parseFloat(e) : null
                            }
                            return t
                        }, e.loadProgressively = function (t, e, i, r, n) {
                            void 0 === r && (r = 0);
                            var a = new ge.a,
                                s = t.body.getReader();
                            return function o() {
                                return s.read().then((function (s) {
                                    if (s.done) return a.dataLength && n(e, i, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
                                    var l = s.value,
                                        u = l.length;
                                    return e.loaded += u, u < r || a.dataLength ? (a.push(l), a.dataLength >= r && n(e, i, a.flush(), t)) : n(e, i, l, t), o()
                                })).catch((function () {
                                    return Promise.reject()
                                }))
                            }()
                        }, t
                    }();
                    function $i(t, e) {
                        return new self.Request(t.url, e)
                    }
                    var tr = function (t) {
                            var e, i;
                            function r(e, i, r) {
                                var n;
                                return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = i, n.details = r, n
                            }
                            return i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, zi(e, i), r
                        }(Yi(Error)),
                        er = Ji,
                        ir = /\s/;
                    function rr() {
                        return (rr = Object.assign ? Object.assign.bind() : function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    function nr(t, e) {
                        var i = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), i.push.apply(i, r)
                        }
                        return i
                    }
                    function ar(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? nr(Object(i), !0).forEach((function (e) {
                                sr(t, e, i[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : nr(Object(i)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                        }
                        return t
                    }
                    function sr(t, e, i) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = i, t
                    }
                    var or = ar(ar({
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        ignoreDevicePixelRatio: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        backBufferLength: 1 / 0,
                        maxBufferSize: 6e7,
                        maxBufferHole: .1,
                        highBufferWatchdogPeriod: 2,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        maxLiveSyncPlaybackRate: 1,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: null,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: Wi,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        licenseResponseCallback: void 0,
                        abrController: ve,
                        bufferController: xe,
                        capLevelController: Oi,
                        fpsController: Ci,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        drmSystemOptions: {},
                        requestMediaKeySystemAccessFunc: Ii,
                        testBandwidth: !0,
                        progressive: !1,
                        lowLatencyMode: !0,
                        cmcd: void 0,
                        enableDateRangeMetadataCues: !0,
                        enableEmsgMetadataCues: !0,
                        enableID3MetadataCues: !0
                    }, {
                        cueHandler: {
                            newCue: function (t, e, i, r) {
                                for (var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < r.rows.length; d++)
                                    if (s = !0, o = 0, l = "", !(n = r.rows[d]).isEmpty()) {
                                        for (var c = 0; c < n.chars.length; c++) ir.test(n.chars[c].uchar) && s ? o++ : (l += n.chars[c].uchar, s = !1);
                                        n.cueStartTime = e, e === i && (i += 1e-4), o >= 16 ? o-- : o++;
                                        var f = si(l.trim()),
                                            v = fi(e, i, f);
                                        t && t.cues && t.cues.getCueById(v) || ((a = new h(e, i, f)).id = v, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(a))
                                    } return t && u.length && (u.sort((function (t, e) {
                                    return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                                })), u.forEach((function (e) {
                                    return N(t, e)
                                }))), u
                            }
                        },
                        enableWebVTT: !0,
                        enableIMSC1: !0,
                        enableCEA708Captions: !0,
                        captionsTextTrack1Label: "English",
                        captionsTextTrack1LanguageCode: "en",
                        captionsTextTrack2Label: "Spanish",
                        captionsTextTrack2LanguageCode: "es",
                        captionsTextTrack3Label: "Unknown CC",
                        captionsTextTrack3LanguageCode: "",
                        captionsTextTrack4Label: "Unknown CC",
                        captionsTextTrack4LanguageCode: "",
                        renderTextTracksNatively: !0
                    }), {}, {
                        subtitleStreamController: ke,
                        subtitleTrackController: Oe,
                        timelineController: Ri,
                        audioStreamController: Te,
                        audioTrackController: Ee,
                        emeController: Fi,
                        cmcdController: Hi
                    });
                    function lr(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var ur = function () {
                        function t(e) {
                            void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new ne.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
                            var i = this.config = function (t, e) {
                                if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                                if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                                if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                                return rr({}, t, e)
                            }(t.DefaultConfig, e);
                            this.userConfig = e, Object(l.a)(i.debug), this._autoLevelCapping = -1, i.progressive && function (t) {
                                var e = t.loader;
                                e !== er && e !== Wi ? (l.b.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function () {
                                    if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                                        return new self.ReadableStream({}), !0
                                    } catch (t) {}
                                    return !1
                                }() && (t.loader = er, t.progressive = !0, t.enableSoftwareAES = !0, l.b.log("[config]: Progressive streaming enabled, using FetchLoader"))
                            }(i);
                            var r = i.abrController,
                                n = i.bufferController,
                                a = i.capLevelController,
                                s = i.fpsController,
                                o = this.abrController = new r(this),
                                u = this.bufferController = new n(this),
                                h = this.capLevelController = new a(this),
                                d = new s(this),
                                c = new P(this),
                                f = new M(this),
                                v = new V(this),
                                g = this.levelController = new dt(this),
                                p = new ct(this),
                                m = this.streamController = new he(this, p);
                            h.setStreamController(m), d.setStreamController(m);
                            var T = [g, m];
                            this.networkControllers = T;
                            var y = [c, f, o, u, h, d, v, p];
                            this.audioTrackController = this.createController(i.audioTrackController, null, T), this.createController(i.audioStreamController, p, T), this.subtitleTrackController = this.createController(i.subtitleTrackController, null, T), this.createController(i.subtitleStreamController, p, T), this.createController(i.timelineController, null, y), this.emeController = this.createController(i.emeController, null, y), this.cmcdController = this.createController(i.cmcdController, null, y), this.latencyController = this.createController(q, null, y), this.coreComponents = y
                        }
                        t.isSupported = function () {
                            return function () {
                                var t = te();
                                if (!t) return !1;
                                var e = ee(),
                                    i = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                    r = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                                return !!i && !!r
                            }()
                        };
                        var e, i, r, a = t.prototype;
                        return a.createController = function (t, e, i) {
                            if (t) {
                                var r = e ? new t(this, e) : new t(this);
                                return i && i.push(r), r
                            }
                            return null
                        }, a.on = function (t, e, i) {
                            void 0 === i && (i = this), this._emitter.on(t, e, i)
                        }, a.once = function (t, e, i) {
                            void 0 === i && (i = this), this._emitter.once(t, e, i)
                        }, a.removeAllListeners = function (t) {
                            this._emitter.removeAllListeners(t)
                        }, a.off = function (t, e, i, r) {
                            void 0 === i && (i = this), this._emitter.off(t, e, i, r)
                        }, a.listeners = function (t) {
                            return this._emitter.listeners(t)
                        }, a.emit = function (t, e, i) {
                            return this._emitter.emit(t, e, i)
                        }, a.trigger = function (t, e) {
                            if (this.config.debug) return this.emit(t, t, e);
                            try {
                                return this.emit(t, t, e)
                            } catch (e) {
                                l.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.trigger(s.a.ERROR, {
                                    type: o.b.OTHER_ERROR,
                                    details: o.a.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: t,
                                    error: e
                                })
                            }
                            return !1
                        }, a.listenerCount = function (t) {
                            return this._emitter.listenerCount(t)
                        }, a.destroy = function () {
                            l.b.log("destroy"), this.trigger(s.a.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function (t) {
                                return t.destroy()
                            })), this.networkControllers.length = 0, this.coreComponents.forEach((function (t) {
                                return t.destroy()
                            })), this.coreComponents.length = 0
                        }, a.attachMedia = function (t) {
                            l.b.log("attachMedia"), this._media = t, this.trigger(s.a.MEDIA_ATTACHING, {
                                media: t
                            })
                        }, a.detachMedia = function () {
                            l.b.log("detachMedia"), this.trigger(s.a.MEDIA_DETACHING, void 0), this._media = null
                        }, a.loadSource = function (t) {
                            this.stopLoad();
                            var e = this.media,
                                i = this.url,
                                r = this.url = n.buildAbsoluteURL(self.location.href, t, {
                                    alwaysNormalize: !0
                                });
                            l.b.log("loadSource:" + r), e && i && i !== r && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(e)), this.trigger(s.a.MANIFEST_LOADING, {
                                url: t
                            })
                        }, a.startLoad = function (t) {
                            void 0 === t && (t = -1), l.b.log("startLoad(" + t + ")"), this.networkControllers.forEach((function (e) {
                                e.startLoad(t)
                            }))
                        }, a.stopLoad = function () {
                            l.b.log("stopLoad"), this.networkControllers.forEach((function (t) {
                                t.stopLoad()
                            }))
                        }, a.swapAudioCodec = function () {
                            l.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                        }, a.recoverMediaError = function () {
                            l.b.log("recoverMediaError");
                            var t = this._media;
                            this.detachMedia(), t && this.attachMedia(t)
                        }, a.removeLevel = function (t, e) {
                            void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
                        }, e = t, r = [{
                            key: "version",
                            get: function () {
                                return "1.2.1"
                            }
                        }, {
                            key: "Events",
                            get: function () {
                                return s.a
                            }
                        }, {
                            key: "ErrorTypes",
                            get: function () {
                                return o.b
                            }
                        }, {
                            key: "ErrorDetails",
                            get: function () {
                                return o.a
                            }
                        }, {
                            key: "DefaultConfig",
                            get: function () {
                                return t.defaultConfig ? t.defaultConfig : or
                            },
                            set: function (e) {
                                t.defaultConfig = e
                            }
                        }], (i = [{
                            key: "levels",
                            get: function () {
                                return this.levelController.levels || []
                            }
                        }, {
                            key: "currentLevel",
                            get: function () {
                                return this.streamController.currentLevel
                            },
                            set: function (t) {
                                l.b.log("set currentLevel:" + t), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
                            }
                        }, {
                            key: "nextLevel",
                            get: function () {
                                return this.streamController.nextLevel
                            },
                            set: function (t) {
                                l.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                            }
                        }, {
                            key: "loadLevel",
                            get: function () {
                                return this.levelController.level
                            },
                            set: function (t) {
                                l.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
                            }
                        }, {
                            key: "nextLoadLevel",
                            get: function () {
                                return this.levelController.nextLoadLevel
                            },
                            set: function (t) {
                                this.levelController.nextLoadLevel = t
                            }
                        }, {
                            key: "firstLevel",
                            get: function () {
                                return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                            },
                            set: function (t) {
                                l.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
                            }
                        }, {
                            key: "startLevel",
                            get: function () {
                                return this.levelController.startLevel
                            },
                            set: function (t) {
                                l.b.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                            }
                        }, {
                            key: "capLevelToPlayerSize",
                            get: function () {
                                return this.config.capLevelToPlayerSize
                            },
                            set: function (t) {
                                var e = !!t;
                                e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                            }
                        }, {
                            key: "autoLevelCapping",
                            get: function () {
                                return this._autoLevelCapping
                            },
                            set: function (t) {
                                this._autoLevelCapping !== t && (l.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                            }
                        }, {
                            key: "bandwidthEstimate",
                            get: function () {
                                var t = this.abrController.bwEstimator;
                                return t ? t.getEstimate() : NaN
                            }
                        }, {
                            key: "autoLevelEnabled",
                            get: function () {
                                return -1 === this.levelController.manualLevel
                            }
                        }, {
                            key: "manualLevel",
                            get: function () {
                                return this.levelController.manualLevel
                            }
                        }, {
                            key: "minAutoLevel",
                            get: function () {
                                var t = this.levels,
                                    e = this.config.minAutoBitrate;
                                if (!t) return 0;
                                for (var i = t.length, r = 0; r < i; r++)
                                    if (t[r].maxBitrate >= e) return r;
                                return 0
                            }
                        }, {
                            key: "maxAutoLevel",
                            get: function () {
                                var t = this.levels,
                                    e = this.autoLevelCapping;
                                return -1 === e && t && t.length ? t.length - 1 : e
                            }
                        }, {
                            key: "nextAutoLevel",
                            get: function () {
                                return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                            },
                            set: function (t) {
                                this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                            }
                        }, {
                            key: "playingDate",
                            get: function () {
                                return this.streamController.currentProgramDateTime
                            }
                        }, {
                            key: "audioTracks",
                            get: function () {
                                var t = this.audioTrackController;
                                return t ? t.audioTracks : []
                            }
                        }, {
                            key: "audioTrack",
                            get: function () {
                                var t = this.audioTrackController;
                                return t ? t.audioTrack : -1
                            },
                            set: function (t) {
                                var e = this.audioTrackController;
                                e && (e.audioTrack = t)
                            }
                        }, {
                            key: "subtitleTracks",
                            get: function () {
                                var t = this.subtitleTrackController;
                                return t ? t.subtitleTracks : []
                            }
                        }, {
                            key: "subtitleTrack",
                            get: function () {
                                var t = this.subtitleTrackController;
                                return t ? t.subtitleTrack : -1
                            },
                            set: function (t) {
                                var e = this.subtitleTrackController;
                                e && (e.subtitleTrack = t)
                            }
                        }, {
                            key: "media",
                            get: function () {
                                return this._media
                            }
                        }, {
                            key: "subtitleDisplay",
                            get: function () {
                                var t = this.subtitleTrackController;
                                return !!t && t.subtitleDisplay
                            },
                            set: function (t) {
                                var e = this.subtitleTrackController;
                                e && (e.subtitleDisplay = t)
                            }
                        }, {
                            key: "lowLatencyMode",
                            get: function () {
                                return this.config.lowLatencyMode
                            },
                            set: function (t) {
                                this.config.lowLatencyMode = t
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function () {
                                return this.latencyController.liveSyncPosition
                            }
                        }, {
                            key: "latency",
                            get: function () {
                                return this.latencyController.latency
                            }
                        }, {
                            key: "maxLatency",
                            get: function () {
                                return this.latencyController.maxLatency
                            }
                        }, {
                            key: "targetLatency",
                            get: function () {
                                return this.latencyController.targetLatency
                            }
                        }, {
                            key: "drift",
                            get: function () {
                                return this.latencyController.drift
                            }
                        }, {
                            key: "forceStartLoad",
                            get: function () {
                                return this.streamController.forceStartLoad
                            }
                        }]) && lr(e.prototype, i), r && lr(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();
                    ur.defaultConfig = void 0
                }]).default
            }, "object" == typeof e && "object" == typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof e ? e.Hls = r() : i.Hls = r())
        },
        7326: function (t, e, i) {
            "use strict";
            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            i.d(e, {
                Z: function () {
                    return r
                }
            })
        },
        3144: function (t, e, i) {
            "use strict";
            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            function n(t, e, i) {
                return e && r(t.prototype, e), i && r(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            i.d(e, {
                Z: function () {
                    return n
                }
            })
        }
    }
]);
