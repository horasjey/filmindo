(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([
[207, 681, 581, 250, 716], {
    8377: function (t, e, i) {
        "use strict";
        i.d(e, {
            M: function () {
                return n
            },
            _: function () {
                return a
            }
        });
        var n = function (t, e) {
                var i = t.kind || "cc";
                return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
            },
            a = function (t, e) {
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
                return w
            },
            xl: function () {
                return p
            }
        });
        var n = i(7477),
            a = i(2894),
            o = i(6886),
            r = i(7941),
            s = i(7387),
            l = i(2957),
            c = i(4446),
            u = function (t) {
                throw new c.rG(null, t)
            };
        var d = function (t) {
                return t.map((function (t) {
                    return new n.Z(t.begin, t.end, t.text)
                }))
            },
            h = function (t, e, n, o) {
                var h, p, w = t.responseXML ? t.responseXML.firstChild : null;
                if (w)
                    for ("xml" === (0, r.r1)(w) && (w = w.nextSibling); w && w.nodeType === w.COMMENT_NODE;) w = w.nextSibling;
                try {
                    if (w && "tt" === (0, r.r1)(w)) {
                        if (!t.responseXML) throw new Error("Empty XML response");
                        h = function (t) {
                            t || u(306007);
                            var e = [],
                                i = t.getElementsByTagName("p"),
                                n = 30,
                                a = t.getElementsByTagName("tt");
                            if (a && a[0]) {
                                var o = parseFloat(a[0].getAttribute("ttp:frameRate") || "");
                                isNaN(o) || (n = o)
                            }
                            i || u(306005), i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
                            for (var r = 0; r < i.length; r++) {
                                for (var s = i[r], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
                                    var h = c[d];
                                    h && h.parentNode && h.parentNode.replaceChild(t.createTextNode("\r\n"), h)
                                }
                                var p = s.innerHTML || s.textContent || s.text || "",
                                    w = (0, l.fy)(p).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                if (w) {
                                    var f = s.getAttribute("begin") || "",
                                        g = s.getAttribute("dur") || "",
                                        m = s.getAttribute("end") || "",
                                        j = {
                                            begin: (0, l.m9)(f, n),
                                            text: w
                                        };
                                    m ? j.end = (0, l.m9)(m, n) : g && (j.end = (j.begin || 0) + (0, l.m9)(g, n)), e.push(j)
                                }
                            }
                            return e.length || u(306005), e
                        }(t.responseXML), p = d(h), delete e.xhr, n(p)
                    } else {
                        var f = t.responseText;
                        f.indexOf("WEBVTT") >= 0 ? i.e(347).then(function (t) {
                            return i(2776).default
                        }.bind(null, i)).catch((0, a.Jt)(301131)).then((function (t) {
                            var i = new t(window);
                            p = [], i.oncue = function (t) {
                                p.push(t)
                            }, i.onflush = function () {
                                delete e.xhr, n(p)
                            }, i.parse(f)
                        })).catch((function (t) {
                            delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                        })) : (h = (0, s.Z)(f), p = d(h), delete e.xhr, n(p))
                    }
                } catch (t) {
                    delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                }
            },
            p = function (t, e, i) {
                t.xhr = (0, o.h)(t.file, (function (n) {
                    h(n, t, e, i)
                }), (function (t, e, n, a) {
                    i((0, c.l9)(a, c.Y7))
                }))
            },
            w = function (t) {
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
                return o
            }
        });
        var n = i(2957),
            a = function (t) {
                var e = {},
                    i = t.split("\r\n");
                1 === i.length && (i = t.split("\n"));
                var a = 1;
                if (i[0].indexOf(" --> ") > 0 && (a = 0), i.length > a + 1 && i[a + 1]) {
                    var o = i[a],
                        r = o.indexOf(" --> ");
                    r > 0 && (e.begin = (0, n.m9)(o.substr(0, r)), e.end = (0, n.m9)(o.substr(r + 5)), e.text = i.slice(a + 1).join("\r\n"))
                }
                return e
            };

        function o(t) {
            var e = [],
                i = (t = (0, n.fy)(t)).split("\r\n\r\n");
            1 === i.length && (i = t.split("\n\n"));
            for (var o = 0; o < i.length; o++)
                if ("WEBVTT" !== i[o]) {
                    var r = a(i[o]);
                    r.text && e.push(r)
                } return e
        }
    },
    7477: function (t, e) {
        "use strict";
        var i = window.VTTCue,
            n = function (t) {
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
            var a = "auto";
            (i = function (t, e, i) {
                var o = this;
                o.hasBeenReset = !1;
                var r = "",
                    s = !1,
                    l = t,
                    c = e,
                    u = i,
                    d = null,
                    h = "",
                    p = !0,
                    w = a,
                    f = "start",
                    g = a,
                    m = 100,
                    j = "middle";
                Object.defineProperty(o, "id", {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                    set: function (t) {
                        r = "" + t
                    }
                }), Object.defineProperty(o, "pauseOnExit", {
                    enumerable: !0,
                    get: function () {
                        return s
                    },
                    set: function (t) {
                        s = Boolean(t)
                    }
                }), Object.defineProperty(o, "startTime", {
                    enumerable: !0,
                    get: function () {
                        return l
                    },
                    set: function (t) {
                        if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                        l = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "endTime", {
                    enumerable: !0,
                    get: function () {
                        return c
                    },
                    set: function (t) {
                        if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                        c = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "text", {
                    enumerable: !0,
                    get: function () {
                        return u
                    },
                    set: function (t) {
                        u = "" + t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "region", {
                    enumerable: !0,
                    get: function () {
                        return d
                    },
                    set: function (t) {
                        d = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "vertical", {
                    enumerable: !0,
                    get: function () {
                        return h
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
                        h = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "snapToLines", {
                    enumerable: !0,
                    get: function () {
                        return p
                    },
                    set: function (t) {
                        p = Boolean(t), this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "line", {
                    enumerable: !0,
                    get: function () {
                        return w
                    },
                    set: function (t) {
                        if ("number" != typeof t && t !== a) throw new SyntaxError("An invalid number or illegal string was specified.");
                        w = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "lineAlign", {
                    enumerable: !0,
                    get: function () {
                        return f
                    },
                    set: function (t) {
                        var e = n(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        f = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "position", {
                    enumerable: !0,
                    get: function () {
                        return g
                    },
                    set: function (t) {
                        if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                        g = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "size", {
                    enumerable: !0,
                    get: function () {
                        return m
                    },
                    set: function (t) {
                        if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                        m = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(o, "align", {
                    enumerable: !0,
                    get: function () {
                        return j
                    },
                    set: function (t) {
                        var e = n(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        j = e, this.hasBeenReset = !0
                    }
                }), o.displayState = void 0
            }).prototype.getCueAsHTML = function () {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            }
        }
        e.Z = i
    },
    4506: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return n
            }
        });
        var n = function (t) {
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
                return k
            }
        });
        var n = i(6103),
            a = i(8377),
            o = {
                TIT2: "title",
                TT2: "title",
                WXXX: "url",
                TPE1: "artist",
                TP1: "artist",
                TALB: "album",
                TAL: "album"
            },
            r = function (t, e) {
                for (var i, n, a, o = t.length, r = "", s = e || 0; s < o;)
                    if (0 !== (i = t[s++]) && 3 !== i) switch (i >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        r += String.fromCharCode(i);
                        break;
                    case 12:
                    case 13:
                        n = t[s++], r += String.fromCharCode((31 & i) << 6 | 63 & n);
                        break;
                    case 14:
                        n = t[s++], a = t[s++], r += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | (63 & a) << 0)
                    }
                return r
            },
            s = function (t) {
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
                        n = i.length;
                    t = {
                        value: {
                            key: "",
                            data: ""
                        }
                    };
                    for (var a = 10; a < 14 && a < i.length && 0 !== i[a];) t.value.key += String.fromCharCode(i[a]), a++;
                    var l = 19,
                        c = i[l];
                    3 !== c && 0 !== c || (c = i[++l], n--);
                    var u = 0;
                    if (1 !== c && 2 !== c)
                        for (var d = l + 1; d < n; d++)
                            if (0 === i[d]) {
                                u = d - l;
                                break
                            } if (u > 0) {
                        var h = r(i.subarray(l, l += u), 0);
                        if ("PRIV" === t.value.key) {
                            if ("com.apple.streaming.transportStreamTimestamp" === h) {
                                var p = 1 & s(i.subarray(l, l += 4)),
                                    w = s(i.subarray(l, l += 4)) + (p ? 4294967296 : 0);
                                t.value.data = w
                            } else t.value.data = r(i, l + 1);
                            t.value.info = h
                        } else t.value.info = h, t.value.data = r(i, l + 1)
                    } else {
                        var f = i[l];
                        t.value.data = 1 === f || 2 === f ? function (t, e) {
                            for (var i = t.length - 1, n = "", a = e || 0; a < i;) 254 === t[a] && 255 === t[a + 1] || (n += String.fromCharCode((t[a] << 8) + t[a + 1])), a += 2;
                            return n
                        }(i, l + 1) : r(i, l + 1)
                    }
                }
                if (function (t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    }(o, t.value.key) && (e[o[t.value.key]] = t.value.data), t.value.info) {
                    var g = e[t.value.key];
                    g !== Object(g) && (g = {}, e[t.value.key] = g), g[t.value.info] = t.value.data
                } else e[t.value.key] = t.value.data;
                return e
            },
            c = i(8348),
            u = i(1643),
            d = i(6042),
            h = function (t, e, i) {
                e && e.length && (0, d.S6)(e, (function (e) {
                    var n = e._id || "";
                    if (i && (e._id = void 0), !c.Browser.ie && !c.Browser.safari || !t || !/^(native|subtitle|cc)/.test(n)) {
                        if (c.Browser.ie && "disabled" === e.mode || (e.mode = "disabled", e.mode = "hidden"), e.cues)
                            for (var a = e.cues.length; a--;) e.removeCue(e.cues[a]);
                        e.embedded || (e.mode = "disabled"), e.inuse = !1
                    }
                }))
            },
            p = function (t) {
                return /^native(?:captions|subtitles)/.test(t)
            },
            w = function (t) {
                return "captions" === t || "subtitles" === t
            },
            f = function (t) {
                var e = t.target,
                    i = e.activeCues,
                    n = e.cues,
                    a = e._id,
                    o = this._cues,
                    r = this._activeCues;
                if (n && n.length) {
                    var s = o[a];
                    o[a] = Array.prototype.slice.call(n), this.parseNativeID3Cues(n, s)
                } else delete o[a];
                if (i && i.length) {
                    var l = r[a],
                        c = r[a] = Array.prototype.slice.call(i);
                    this.triggerActiveCues(c, l)
                } else delete r[a]
            },
            g = function (t, e, i) {
                if (c.Browser.ie) {
                    var n = i;
                    (t || "metadata" === e.kind) && (n = new window.TextTrackCue(i.startTime, i.endTime, i.text), i.value && (n.value = i.value)),
                    function (t, e) {
                        var i = [],
                            n = t.mode;
                        t.mode = "hidden";
                        var a = t.cues;
                        if (a)
                            for (var o = a.length - 1; o >= 0 && a[o].startTime > e.startTime; o--) i.unshift(a[o]), t.removeCue(a[o]);
                        try {
                            t.addCue(e), i.forEach((function (e) {
                                return t.addCue(e)
                            }))
                        } catch (t) {
                            console.error(t)
                        }
                        t.mode = n
                    }(e, n)
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
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (!a._id || !i[a._id]) return !0
                }
                return !1
            },
            j = function () {
                var t = this.video.textTracks,
                    e = (0, d.hX)(t, (function (t) {
                        return (t.inuse || !t._id) && w(t.kind)
                    }));
                if (this._textTracks && !m.call(this, e)) {
                    for (var i = -1, n = 0; n < this._textTracks.length; n++)
                        if ("showing" === this._textTracks[n].mode) {
                            i = n;
                            break
                        } i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1)
                } else this.setTextTracks(t)
            },
            v = function (t) {
                var e = t.track;
                e && e._id || this.setTextTracks(this.video.textTracks)
            },
            y = function (t, e) {
                return t.startTime === e.startTime && t.endTime === e.endTime && t.text === e.text && t.data === e.data && JSON.stringify(t.value) === JSON.stringify(e.value)
            },
            b = function (t) {
                var e = l(t);
                return {
                    metadataType: "id3",
                    metadataTime: t.startTime,
                    metadata: e
                }
            },
            k = {
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
                    (0, n.VS)(this._itemTracks);
                    var e = this._tracksById;
                    if (e && Object.keys(e).forEach((function (i) {
                            if (0 === i.indexOf("nativemetadata")) {
                                var n = e[i];
                                t.cueChangeHandler && n.removeEventListener("cuechange", t.cueChangeHandler), h(t.renderNatively, [n], !0)
                            }
                        })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                        var i = this.video.textTracks;
                        this.textTrackChangeHandler && this.removeTracksListener(i, "change", this.textTrackChangeHandler), h(this.renderNatively, i, !0)
                    }
                },
                clearMetaCues: function () {
                    var t = this,
                        e = this._tracksById,
                        i = this._cachedVTTCues;
                    e && i && Object.keys(e).forEach((function (n) {
                        if (0 === n.indexOf("nativemetadata")) {
                            var a = e[n];
                            h(t.renderNatively, [a], !1), a.mode = "hidden", a.inuse = !0, a._id && (i[a._id] = {})
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
                        (e && p(e) || this.renderNatively && c.OS.iOS) && (t.mode = "hidden")
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
                        if (!(t.includedInManifest || t.kind && !w(t.kind))) {
                            var a = e._createTrack(t);
                            e._addTrackToList(a), i.push(a), t.file && (t.data = [], (0, n.xl)(t, (function (t) {
                                a.sideloaded = !0, e.addVTTCuesToTrack(a, t)
                            }), (function (t) {
                                e.trigger(u.cM, t)
                            })))
                        }
                    })), this._textTracks && this._textTracks.length && this.trigger(u.jt, {
                        tracks: this._textTracks
                    }), i) : i
                },
                setTextTracks: function (t) {
                    var e = this;
                    if (this._currentTextTrackIndex = -1, t) {
                        if (this._textTracks) {
                            var i = this._tracksById;
                            this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((function (t) {
                                var n = t._id;
                                return e.renderNatively && n && p(n) ? (delete i[n], !1) : (t.name && 0 === t.name.indexOf("Unknown") && e._unknownCount++, 0 === n.indexOf("nativemetadata") && "com.apple.streaming" === t.inBandMetadataTrackDispatchType && delete i[n], !0)
                            }), this)
                        } else this._initTextTracks();
                        if (t.length)
                            for (var n = 0, o = t.length, r = this._tracksById, s = this._cuesByTrackId; n < o; n++) {
                                var l = t[n],
                                    c = l._id || "";
                                if (!c) {
                                    if (!1 === l.inuse && w(l.kind) && this.renderNatively) {
                                        l._id = "native" + l.kind + n;
                                        continue
                                    }
                                    if (w(l.kind) || "metadata" === l.kind) {
                                        if (c = l._id = "native" + l.kind + n, !l.label && "captions" === l.kind) {
                                            var d = (0, a._)(l, this._unknownCount);
                                            l.name = d.label, this._unknownCount = d.unknownCount
                                        }
                                    } else c = l._id = (0, a.M)(l, this._textTracks ? this._textTracks.length : 0);
                                    if (r[c]) continue;
                                    l.inuse = !0
                                }
                                if (l.inuse && !r[c])
                                    if ("metadata" === l.kind) {
                                        l.mode = "hidden";
                                        var h = this.cueChangeHandler = this.cueChangeHandler || f.bind(this);
                                        l.removeEventListener("cuechange", h), l.addEventListener("cuechange", h), r[c] = l
                                    } else if (w(l.kind)) {
                                    var m = l.mode,
                                        j = void 0;
                                    if (l.mode = "hidden", (!l.cues || !l.cues.length) && l.embedded) continue;
                                    if (("disabled" !== m || p(c)) && (l.mode = m), s[c] && !s[c].loaded) {
                                        for (var v = s[c].cues; j = v.shift();) g(this.renderNatively, l, j);
                                        l.mode = m, s[c].loaded = !0
                                    }
                                    this._addTrackToList(l)
                                }
                            }
                        this.renderNatively && this.addTrackListeners(t), this._textTracks && this._textTracks.length && this.trigger(u.jt, {
                            tracks: this._textTracks
                        })
                    }
                },
                addTrackListeners: function (t) {
                    var e = this.textTrackChangeHandler = this.textTrackChangeHandler || j.bind(this);
                    this.removeTracksListener(t, "change", e), this.addTracksListener(t, "change", e), (c.Browser.edge && c.Browser.ie || c.Browser.firefox) && (e = this.addTrackHandler = this.addTrackHandler || v.bind(this), this.removeTracksListener(t, "addtrack", e), this.addTracksListener(t, "addtrack", e))
                },
                setupSideloadedTracks: function (t) {
                    if (this.renderNatively) {
                        var e = (t = t || null) === this._itemTracks;
                        e || (0, n.VS)(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(t)))
                    }
                },
                setSubtitlesTrack: function (t) {
                    if (this.renderNatively) {
                        if (this._textTracks && (0 === t && this._textTracks.forEach((function (t) {
                                t.mode = t.embedded ? "hidden" : "disabled"
                            })), this._currentTextTrackIndex !== t - 1)) {
                            this.disableTextTrack(), this._currentTextTrackIndex = t - 1;
                            var e = this.getCurrentTextTrack();
                            e && (e.mode = "showing"), this.trigger(u.UF, {
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
                        n = this._tracksById[i],
                        a = "captions" === t.type ? "Unknown CC" : "ID3 Metadata",
                        o = t.cue;
                    if (!n) {
                        var r = {
                            kind: t.type,
                            _id: i,
                            label: a,
                            default: !1
                        };
                        this.renderNatively || "metadata" === r.kind ? ((n = this._createTrack(r)).embedded = !0, this.setTextTracks(this.video.textTracks)) : n = this.addTextTracks([r])[0]
                    }
                    if (this._cacheVTTCue(n, o, e)) {
                        var s = this.renderNatively || "metadata" === n.kind;
                        return s ? g(s, n, o) : n.data.push(o), o
                    }
                    return null
                },
                addVTTCuesToTrack: function (t, e) {
                    if (this.renderNatively) {
                        var i, n = t._id,
                            a = this._tracksById,
                            o = this._cuesByTrackId,
                            r = a[n];
                        if (!r) return o || (o = this._cuesByTrackId = {}), void(o[n] = {
                            cues: e,
                            loaded: !1
                        });
                        if (!o[n] || !o[n].loaded)
                            for (o[n] = {
                                    cues: e,
                                    loaded: !0
                                }; i = e.shift();) g(this.renderNatively, r, i)
                    }
                },
                parseNativeID3Cues: function (t, e) {
                    var i = this,
                        n = t[t.length - 1];
                    if (!e || e.length !== t.length || !n._parsed && !y(e[e.length - 1], n)) {
                        for (var a = [], o = [], r = -1, s = -1, l = -1, c = 0; c < t.length; c++) {
                            var d = t[c];
                            if (!d._extended && Boolean(d.data || d.value)) {
                                if (d.startTime !== s || null === d.endTime) {
                                    l = s, s = d.startTime;
                                    var h = a[r];
                                    if (a[++r] = [], o[r] = [], h && s - l > 0)
                                        for (var p = 0; p < h.length; p++) {
                                            var w = h[p];
                                            w.endTime = s, w._extended = !0
                                        }
                                }
                                a[r].push(d), d._parsed || (o[r].push(d), d.endTime - s < .25 && (d.endTime = s + .25), d._parsed = !0)
                            }
                        }
                        for (var f = 0; f < o.length; f++) o[f].length && o[f].forEach((function (t) {
                            var e = b(t);
                            i.trigger(u.O1, e)
                        }))
                    }
                },
                triggerActiveCues: function (t, e) {
                    var i = this,
                        n = t.filter((function (t) {
                            if (e && e.some((function (e) {
                                    return y(t, e)
                                }))) return !1;
                            if (t.data) return !0;
                            var n = t.text ? function (t) {
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
                            if (n) "emsg" === n.metadataType && (n.metadata = n.metadata || {}, n.metadata.messageData = t.value), i.trigger(u.rx, n);
                            else if (t.value) return !0;
                            return !1
                        }));
                    n.length && n.forEach((function (t) {
                        var e = b(t);
                        i.trigger(u.rx, e)
                    }))
                },
                ensureMetaTracksActive: function () {
                    for (var t = this.video.textTracks, e = t.length, i = 0; i < e; i++) {
                        var n = t[i];
                        "metadata" === n.kind && "disabled" === n.mode && (n.mode = "hidden")
                    }
                },
                _cacheVTTCue: function (t, e, i) {
                    var n = t.kind,
                        a = t._id,
                        o = this._cachedVTTCues;
                    o[a] || (o[a] = {});
                    var r, s = o[a];
                    switch (n) {
                    case "captions":
                    case "subtitles":
                        r = i || Math.floor(20 * e.startTime);
                        var l = "_" + (e.line || "auto"),
                            c = Math.floor(20 * e.endTime),
                            u = s[r + l] || s[r + 1 + l] || s[r - 1 + l];
                        return !(u && Math.abs(u - c) <= 1) && (s[r + l] = c, !0);
                    case "metadata":
                        var d = e.data ? new Uint8Array(e.data).join("") : e.text;
                        return !s[r = i || e.startTime + d] && (s[r] = e.endTime, !0);
                    default:
                        return !1
                    }
                },
                _addTrackToList: function (t) {
                    this._textTracks.push(t), this._tracksById[t._id] = t
                },
                _createTrack: function (t) {
                    var e, i = (0, a._)(t, this._unknownCount),
                        n = i.label;
                    if (this._unknownCount = i.unknownCount, this.renderNatively || "metadata" === t.kind) {
                        var o = this.video.textTracks;
                        (e = (0, d._e)(o, {
                            label: n
                        })) || (e = this.video.addTextTrack(t.kind, n, t.language || "")), e.default = t.default, e.mode = "disabled", e.inuse = !0
                    } else(e = t).data = e.data || [];
                    return e._id || (e._id = (0, a.M)(t, this._textTracks ? this._textTracks.length : 0)), e
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
                return a
            },
            Z: function () {
                return o
            }
        });
        var n = i(4446),
            a = function (t) {
                return t >= 400 && t < 600 ? t : 6
            };

        function o(t, e, i) {
            var o = t + 1e3,
                r = n.ul;
            return e > 0 ? (403 === e && (r = n.H4), o += a(e)) : "http:" === ("" + i).substring(0, 5) && "https:" === document.location.protocol ? o += 12 : 0 === e && (o += 11), {
                code: o,
                key: r
            }
        }
    },
    5099: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return a
            }
        });
        var n = function (t, e, i) {
            var n = new Error(i);
            return n.name = t, n.code = e, n
        };

        function a(t) {
            return new Promise((function (e, i) {
                if (t.paused) return i(n("NotAllowedError", 0, "play() failed."));
                var a, o = function (t) {
                        if (a(), "playing" !== t.type) {
                            var o = 'The play() request was interrupted by a "' + t.type + '" event.';
                            return "error" === t.type ? i(n("NotSupportedError", 9, o)) : i(n("AbortError", 20, o))
                        }
                        e()
                    },
                    r = function () {
                        t.addEventListener("playing", o), t.addEventListener("abort", o), t.addEventListener("error", o), t.addEventListener("pause", o)
                    };
                a = function () {
                    t.removeEventListener("play", r), t.removeEventListener("playing", o), t.removeEventListener("pause", o), t.removeEventListener("abort", o), t.removeEventListener("error", o)
                }, t.addEventListener("play", r)
            }))
        }
    },
    686: function (t, e, i) {
        "use strict";
        i.d(e, {
            s: function () {
                return a
            },
            v: function () {
                return o
            }
        });
        var n = function (t) {
                return void 0 === t ? 120 : Math.max(t, 0)
            },
            a = function (t, e) {
                return t !== 1 / 0 && Math.abs(t) >= Math.max(n(e), 0)
            },
            o = function (t, e) {
                var i = "VOD";
                return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = a(t, n(e)) ? "DVR" : "LIVE"), i
            }
    },
    3949: function (t, e, i) {
        "use strict";
        var n = i(8348),
            a = i(974),
            o = i(9974),
            r = {
                container: null,
                volume: function (t) {
                    this.video.volume = Math.min(Math.max(0, t / 100), 1)
                },
                mute: function (t) {
                    this.video.muted = Boolean(t), this.video.muted || this.video.removeAttribute("muted")
                },
                resize: function (t, e, i) {
                    var o = this.video,
                        r = o.videoWidth,
                        s = o.videoHeight;
                    if (t && e && r && s) {
                        var l = {
                                objectFit: "",
                                width: "",
                                height: ""
                            },
                            c = t / e,
                            u = r / s;
                        if ("uniform" === i)(c > u ? t - t / (c / u) : e - e / (u / c)) < 6 && (l.objectFit = "fill", i = "exactfit");
                        if (n.Browser.ie || n.OS.iOS && (n.OS.version.major || 0) < 9 || n.Browser.androidNative)
                            if ("uniform" !== i) {
                                l.objectFit = "contain";
                                var d = 1,
                                    h = 1;
                                "none" === i ? d = h = c > u ? Math.ceil(100 * s / e) / 100 : Math.ceil(100 * r / t) / 100 : "fill" === i ? d = h = c > u ? c / u : u / c : "exactfit" === i && (c > u ? (d = c / u, h = 1) : (d = 1, h = u / c)), (0, a.vs)(o, "matrix(" + d.toFixed(2) + ", 0, 0, " + h.toFixed(2) + ", 0, 0)")
                            } else l.top = l.left = l.margin = "", (0, a.vs)(o, "");
                        (0, a.oB)(o, l)
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
                    return (0, o.Z)(this.video.buffered) - this.video.currentTime <= 2
                }
            };
        e.Z = r
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
        var n = i(1643),
            a = i(1261),
            o = {
                canplay: function () {
                    this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(n.Jl)
                },
                play: function () {
                    this.stallTime = -1, this.video.paused || this.state === n._5 || this.state === n.r0 || this.setState(n.ik)
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
                    e && (t.drm = e), this.trigger(n.rx, t)
                },
                timeupdate: function () {
                    var t = this.video.currentTime,
                        e = this.getCurrentTime(),
                        i = this.getDuration();
                    if (!isNaN(i)) {
                        this.seeking || this.video.paused || this.state !== n.nQ && this.state !== n.ik || this.stallTime === t || (this.stallTime = -1, this.setState(n.r0), this.trigger(n.Gj));
                        var a = {
                                position: e,
                                duration: i,
                                currentTime: t,
                                seekRange: this.getSeekRange(),
                                metadata: {
                                    currentTime: t
                                }
                            },
                            o = this.getLiveLatency();
                        if (null !== o && (a.latency = o, this.getTargetLatency)) {
                            var r = this.getTargetLatency();
                            null !== r && (a.targetLatency = r)
                        }(this.state === n.r0 || this.seeking && this.state !== n.bc) && this.trigger(n.R2, a)
                    }
                },
                click: function (t) {
                    this.trigger(n.ot, t)
                },
                volumechange: function () {
                    var t = this.video;
                    this.trigger(n.yH, {
                        volume: Math.round(100 * t.volume)
                    }), this.trigger(n.gy, {
                        mute: t.muted
                    })
                },
                seeking: function () {
                    if (this.state === n.ik) {
                        var t = this.video.buffered.length ? this.video.buffered.start(0) : -1;
                        if (this.video.currentTime === t) return
                    } else if (this.state === n.bc) return;
                    this.seeking = !0
                },
                seeked: function () {
                    this.seeking && (this.seeking = !1, this.trigger(n.aQ))
                },
                playing: function () {
                    -1 === this.stallTime && this.setState(n.r0), this.trigger(n.Gj)
                },
                pause: function () {
                    this.state !== n.xQ && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(n._5))
                },
                progress: function () {
                    var t = this.getDuration();
                    if (!(t <= 0 || t === 1 / 0)) {
                        var e = this.video.buffered;
                        if (e && 0 !== e.length) {
                            var i = (0, a.v)(e.end(e.length - 1) / t, 0, 1);
                            this.trigger(n.uT, {
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
                    this.trigger(n.TJ, {
                        playbackRate: this.video.playbackRate
                    })
                },
                ended: function () {
                    this.state !== n.bc && this.state !== n.xQ && this.trigger(n.Ms)
                }
            };
        e.Z = o
    },
    4667: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return o
            }
        });
        var n, a = i(2799);

        function o(t) {
            return n || (n = new DOMParser), (0, a.gB)((0, a.oH)(n.parseFromString(t, "image/svg+xml").documentElement))
        }
    },
    9974: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.length ? t.end(t.length - 1) : 0
        }
        i.d(e, {
            Z: function () {
                return n
            }
        })
    },
    1831: function (t, e, i) {
        "use strict";
        i.d(e, {
            R: function () {
                return h
            }
        });
        var n, a = i(7462),
            o = i(8348),
            r = i(2894),
            s = i(328),
            l = i(1643),
            c = i(974),
            u = i(2799),
            d = i(6042),
            h = {
                back: !0,
                backgroundOpacity: 50,
                edgeStyle: null,
                fontSize: 14,
                fontOpacity: 100,
                fontScale: .05,
                preprocessor: d.yR,
                windowOpacity: 0
            },
            p = function (t) {
                var e, s, p, w, f, g, m, j, v = this,
                    y = t.player,
                    b = document.createElement("div");
                b.className = "jw-captions jw-reset";
                var k = function () {
                        var t = y.get("containerHeight");
                        if (t) {
                            var e;
                            if (y.get("fullscreen") && o.OS.iOS) e = null;
                            else {
                                var i = t * m;
                                e = Math.round(10 * function (t) {
                                    var e = y.get("mediaElement");
                                    if (e && e.videoHeight) {
                                        var i = e.videoWidth,
                                            n = e.videoHeight,
                                            a = i / n,
                                            r = y.get("containerHeight"),
                                            s = y.get("containerWidth");
                                        if (y.get("fullscreen") && o.OS.mobile) {
                                            var l = window.screen;
                                            l.orientation && (r = l.availHeight, s = l.availWidth)
                                        }
                                        if (s && r && i && n) return (s / r > a ? r : n * s / i) * m
                                    }
                                    return t
                                }(i)) / 10
                            }
                            y.get("renderCaptionsNatively") ? function (t, e) {
                                var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
                                e && (e += "px", o.OS.iOS && (0, c.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0)), j.fontSize = e, (0, c.iv)(i, j, t, !0)
                            }(y.get("id"), e) : (0, c.oB)(b, {
                                fontSize: e
                            })
                        }
                    },
                    x = function t() {
                        (0, d.xV)(e.fontSize) && (y.get("containerHeight") ? m = h.fontScale * (e.userFontScale || 1) * e.fontSize / h.fontSize : y.once("change:containerHeight", t, v))
                    },
                    T = function (t, e, i) {
                        var n = (0, c.HY)("#000000", i);
                        "dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
                    },
                    C = function (t, e) {
                        k(),
                            function (t, e) {
                                o.Browser.safari && (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
                                    backgroundColor: e.backgroundColor
                                }, t, !0), (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display", j, t, !0), (0, c.iv)("#" + t + " .jw-video::cue", e, t, !0)
                            }(t, e),
                            function (t, e) {
                                (0, c.iv)("#" + t + " .jw-text-track-display", j, t), (0, c.iv)("#" + t + " .jw-text-track-cue", e, t)
                            }(t, e)
                    };
                this.show = function () {
                    (0, u.cn)(b, "jw-captions-enabled")
                }, this.hide = function () {
                    (0, u.IV)(b, "jw-captions-enabled")
                }, this.populate = function (t) {
                    y.get("renderCaptionsNatively") || (p = [], s = t, t ? this.selectCues(t, w) : this.renderCues())
                }, this.resize = function () {
                    k(), this.renderCues(!0)
                }, this.renderCues = function (t) {
                    t = Boolean(t), n && n.processCues(window, p, b, t)
                }, this.selectCues = function (t, e) {
                    if (t && t.data && e && !y.get("renderCaptionsNatively")) {
                        var i = this.getAlignmentPosition(t, e);
                        !1 !== i && (p = this.getCurrentCues(t.data, i), this.renderCues(!0))
                    }
                }, this.getCurrentCues = function (t, e) {
                    return (0, d.hX)(t, (function (t) {
                        return e >= t.startTime && (!t.endTime || e <= t.endTime)
                    }))
                }, this.getAlignmentPosition = function (t, e) {
                    var i = t.source,
                        n = e.metadata,
                        a = e.currentTime;
                    return i && n && (0, d.hj)(n[i]) && (a = n[i]), a
                }, this.clear = function () {
                    (0, u.cS)(b)
                }, this.setup = function (t, i) {
                    f = document.createElement("div"), g = document.createElement("span"), f.className = "jw-captions-window jw-reset", g.className = "jw-captions-text jw-reset", e = (0, a.Z)({}, h, i), m = h.fontScale;
                    var n = function () {
                        x(e.fontSize);
                        var i = e.windowColor,
                            n = e.windowOpacity,
                            a = e.edgeStyle;
                        j = {};
                        var o = {};
                        ! function (t, e) {
                            var i = e.color,
                                n = e.fontOpacity;
                            if ((i || n !== h.fontOpacity) && (t.color = (0, c.HY)(i || "#ffffff", n)), e.back) {
                                var a = e.backgroundColor,
                                    o = e.backgroundOpacity;
                                a === h.backgroundColor && o === h.backgroundOpacity || (t.backgroundColor = (0, c.HY)(a, o))
                            } else t.background = "transparent";
                            e.fontFamily && (t.fontFamily = e.fontFamily), e.fontStyle && (t.fontStyle = e.fontStyle), e.fontWeight && (t.fontWeight = e.fontWeight), e.textDecoration && (t.textDecoration = e.textDecoration)
                        }(o, e), (i || n !== h.windowOpacity) && (j.backgroundColor = (0, c.HY)(i || "#000000", n)), T(a, o, e.fontOpacity), e.back || null !== a || T("uniform", o), (0, c.oB)(f, j), (0, c.oB)(g, o), C(t, o)
                    };
                    n(), f.appendChild(g), b.appendChild(f), y.change("captionsTrack", (function (t, e) {
                        this.populate(e)
                    }), this), y.set("captions", e), y.on("change:captions", (function (t, i) {
                        e = i, n()
                    }))
                }, this.element = function () {
                    return b
                }, this.destroy = function () {
                    y.off(null, null, this), this.off()
                };
                var _ = function (t) {
                    w = t, v.selectCues(s, w)
                };
                y.on("change:playlistItem", (function () {
                    w = null, p = []
                }), this), y.on(l.NZ, (function (t) {
                    p = [], _(t)
                }), this), y.on(l.R2, _, this), y.on("subtitlesTrackData", (function () {
                    this.selectCues(s, w)
                }), this), y.on("change:captionsList", (function t(e, a) {
                    1 !== a.length && (e.get("renderCaptionsNatively") || n || (i.e(63).then(function (t) {
                        n = i(8698).default
                    }.bind(null, i)).catch((0, r.Jt)(301121)).catch((function (t) {
                        v.trigger(l.cM, t)
                    })), e.off("change:captionsList", t, v)))
                }), this)
            };
        (0, a.Z)(p.prototype, s.ZP), e.Z = p
    },
    8165: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return r
            }
        });
        var n = i(4667),
            a = i(4429),
            o = i(5646);

        function r(t, e, i, r) {
            var s = document.createElement("div");
            s.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t, s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"), i && s.setAttribute("aria-label", i), s.style.display = "none";
            var l = (0, o.Z)(s, e || a.Z.noop);
            return r && Array.prototype.forEach.call(r, (function (t) {
                "string" == typeof t ? s.appendChild((0, n.Z)(t)) : s.appendChild(t)
            })), {
                ui: l,
                element: function () {
                    return s
                },
                toggle: function (t) {
                    t ? this.show() : this.hide()
                },
                show: function () {
                    s.style.display = ""
                },
                hide: function () {
                    s.style.display = "none"
                }
            }
        }
    },
    8168: function (t, e, i) {
        "use strict";
        i.d(e, {
            w: function () {
                return s
            }
        });
        var n = i(974),
            a = i(4667),
            o = i(5646),
            r = {},
            s = function (t) {
                if (!r[t]) {
                    var e = Object.keys(r);
                    e.length > 10 && delete r[e[0]];
                    var i = (0, a.Z)(t);
                    r[t] = i
                }
                return r[t].cloneNode(!0)
            },
            l = function () {
                function t(t, e, i, a, r) {
                    var l, c = document.createElement("div");
                    c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (r || ""), c.setAttribute("button", a), c.setAttribute("role", "button"), c.setAttribute("tabindex", "0"), e && c.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? l = s(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(l, {
                        backgroundImage: "url(" + t + ")"
                    })), c.appendChild(l), (0, o.Z)(c, i, this), c.addEventListener("mousedown", (function (t) {
                        t.preventDefault()
                    })), this.id = a, this.buttonElement = c
                }
                var e = t.prototype;
                return e.element = function () {
                    return this.buttonElement
                }, e.toggle = function (t) {
                    t ? this.show() : this.hide()
                }, e.show = function () {
                    this.buttonElement.style.display = ""
                }, e.hide = function () {
                    this.buttonElement.style.display = "none"
                }, t
            }();
        e.Z = l
    },
    3946: function (t, e, i) {
        "use strict";
        i.d(e, {
            M: function () {
                return n
            }
        });
        var n = function () {
            function t(t, e, i) {
                this.begin = "number" == typeof t ? t : parseFloat(t), this.time = t, this.text = e, this.cueType = i
            }
            var e = t.prototype;
            return e.makeEl = function () {
                this.el = document.createElement("div");
                var t = "jw-cue jw-reset";
                this.cueType && "string" == typeof this.cueType && (t += " jw-cue-type-" + this.cueType), this.el.className = t
            }, e.align = function (t) {
                var e;
                "%" === this.time.toString().slice(-1) ? e = this.time : e = this.time / t * 100 + "%";
                this.el && (this.el.style.left = e)
            }, t
        }()
    },
    3477: function (t, e, i) {
        "use strict";
        i.d(e, {
            k: function () {
                return l
            },
            s: function () {
                return s
            }
        });
        var n = i(4578),
            a = i(2799),
            o = i(3163),
            r = i(5646),
            s = function () {
                function t(t, e, i) {
                    void 0 === i && (i = o.Ge), this.el = (0, a.az)(i(t)), this.ui = (0, r.Z)(this.el, e, this)
                }
                return t.prototype.destroy = function () {
                    this.el.parentNode && this.el.parentNode.removeChild(this.el), this.ui.destroy()
                }, t
            }(),
            l = function (t) {
                function e(e, i, n) {
                    return void 0 === n && (n = o.dr), t.call(this, e, i, n) || this
                }(0, n.Z)(e, t);
                var i = e.prototype;
                return i.activate = function () {
                    this.active || ((0, a.og)(this.el, "jw-settings-item-active", !0), this.el.setAttribute("aria-checked", "true"), this.active = !0)
                }, i.deactivate = function () {
                    this.active && ((0, a.og)(this.el, "jw-settings-item-active", !1), this.el.setAttribute("aria-checked", "false"), this.active = !1)
                }, e
            }(s)
    },
    7284: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return g
            }
        });
        var n = i(7326),
            a = i(4578),
            o = i(5882),
            r = i(328),
            s = i(2799),
            l = i(8165),
            c = i(7191),
            u = i(3477),
            d = i(7509),
            h = i(2810),
            p = i(5349),
            w = function (t) {
                var e = t.name,
                    i = t.title,
                    n = {
                        captions: "cc-off",
                        audioTracks: "audio-tracks",
                        quality: "quality-100",
                        playbackRates: "playback-rate"
                    } [e];
                if (n || t.icon) {
                    var a = (0, l.Z)("jw-settings-" + e + " jw-submenu-" + e, (function (e) {
                            t.open(e)
                        }), i, [t.icon && (0, s.az)(t.icon) || (0, c.W)(n)]),
                        o = a.element();
                    return o.setAttribute("name", e), o.setAttribute("role", "button"), o.setAttribute("type", "button"), o.setAttribute("aria-expanded", "false"), o.setAttribute("aria-controls", t.el.id), "ontouchstart" in window || (a.tooltip = (0, p.m)(o, e, i)), a.ui.directSelect = !0, a
                }
            },
            f = i(8518),
            g = function (t) {
                function e(e, i, a, o, r) {
                    var l;
                    return void 0 === r && (r = d.qF), (l = t.call(this) || this).open = l.open.bind((0, n.Z)(l)), l.close = l.close.bind((0, n.Z)(l)), l.toggle = l.toggle.bind((0, n.Z)(l)), l.name = e, l.title = i || e, l.localizedPrevious = o.prev, l.isSubmenu = Boolean(a), l.el = (0, s.az)(r(l.isSubmenu, e, l.title)), l.buttonContainer = l.el.querySelector(".jw-" + l.name + "-topbar-buttons"), l.children = {}, l.openMenus = [], l.items = [], l.visible = !1, l.parentMenu = a, l.mainMenu = l.parentMenu ? l.parentMenu.mainMenu : (0, n.Z)(l), l.categoryButton = null, l.closeButton = l.mainMenu.closeButton, l.isSubmenu && (l.parentMenu.name === l.mainMenu.name && (l.categoryButton = l.createCategoryButton()), l.parentMenu.parentMenu && !l.mainMenu.backButton && (l.mainMenu.backButton = l.createBackButton(l.localizedPrevious)), l.itemsContainer = l.createItemsContainer(), l.parentMenu.appendMenu((0, n.Z)(l))), l
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.createItemsContainer = function () {
                    var t = this,
                        e = this.el.querySelector(".jw-settings-submenu-items"),
                        i = this.mainMenu.closeButton && this.mainMenu.closeButton.element(),
                        n = this.mainMenu.backButton && this.mainMenu.backButton.element(),
                        a = this.categoryButton && this.categoryButton.element(),
                        r = new o.ZP(e);
                    return r.on("keydown", (function (o) {
                        if (event.target.parentNode === e) {
                            var r, l = o.sourceEvent,
                                c = o.target,
                                u = t.topbar && t.topbar.firstChild,
                                d = document.getElementsByClassName("jw-icon-settings")[0],
                                p = a ? (0, s.AH)(a) : i,
                                w = a ? (0, s.i3)(a) : n,
                                f = (0, s.AH)(c) || u || e.firstChild,
                                g = (0, s.i3)(c) || u || e.lastChild,
                                m = l && (0, h.ku)(l.key);
                            switch (m) {
                            case "Tab":
                                r = l.shiftKey ? w : p;
                                break;
                            case "Left":
                                r = w || t.close(o) && d;
                                break;
                            case "Up":
                                r = g;
                                break;
                            case "Right":
                                r = p;
                                break;
                            case "Down":
                                r = f;
                                break;
                            case "Esc":
                                r = d, t.mainMenu.close(event)
                            }
                            r && r.focus(), l.preventDefault(), "Esc" !== m && l.stopPropagation()
                        }
                    })), r
                }, i.createCategoryButton = function () {
                    return w(this)
                }, i.createBackButton = function (t) {
                    var e = this,
                        i = (0, l.Z)("jw-settings-back", (function (t) {
                            var i = e.mainMenu.backButtonTarget;
                            i && i.open(t)
                        }), t, [(0, c.W)("arrow-left")]);
                    return (0, s.SH)(this.mainMenu.topbar.el, i.element()), i
                }, i.setBackButtonAriaLabel = function (t) {
                    var e = this.mainMenu.backButton.element(),
                        i = t ? this.localizedPrevious + " - " + t : this.localizedPrevious;
                    e.setAttribute("aria-label", i)
                }, i.createTopbar = function () {
                    var t = (0, s.az)('<div class="jw-reset jw-submenu-topbar"></div>'),
                        e = this.itemsContainer.el,
                        i = this.mainMenu,
                        n = this.categoryButton;
                    return this.topbarUI = new o.ZP(t).on("keydown", (function (t) {
                        var a = t.sourceEvent,
                            o = function () {
                                n ? ((0, s.i3)(n.element()).focus(), a.preventDefault()) : i.backButton.element().focus()
                            },
                            r = function () {
                                n ? ((0, s.AH)(n.element()).focus(), a.preventDefault()) : i.closeButton.element().focus()
                            };
                        switch ((0, h.ku)(a.key)) {
                        case "Up":
                            e.lastChild.focus();
                            break;
                        case "Down":
                            e.firstChild.focus();
                            break;
                        case "Left":
                            o();
                            break;
                        case "Right":
                            r();
                            break;
                        case "Tab":
                            a.shiftKey ? o() : r()
                        }
                    })), (0, s.SH)(this.el, t), t
                }, i.createItems = function (t, e, i, n) {
                    var a = this;
                    void 0 === i && (i = {}), void 0 === n && (n = u.k);
                    var o = this.name;
                    return t.map((function (t, r) {
                        var l, c, u, d;
                        switch (o) {
                        case "quality":
                            "Auto" === t.label && 0 === r ? (l = "" + i.defaultText, u = ' <span class="jw-reset jw-auto-label"></span>') : l = t.label;
                            break;
                        case "captions":
                            l = "Off" !== t.label && "off" !== t.id || 0 !== r ? t.label : i.defaultText;
                            break;
                        case "playbackRates":
                            c = t, l = (0, f.t6)(i.tooltipText) ? "x" + t : t + "x";
                            break;
                        case "audioTracks":
                            l = t.name
                        }
                        l || (l = t, "object" == typeof t && (l.options = i));
                        return d = new n(l, function (t) {
                            if ((0 !== t.pageX || 0 !== t.pageY) && !d.active) {
                                if (d.deactivate) {
                                    a.items.filter((function (t) {
                                        return !0 === t.active
                                    })).forEach((function (t) {
                                        t.deactivate()
                                    }));
                                    var i = a.mainMenu.backButtonTarget;
                                    i ? i.open(t) : a.mainMenu.close(t)
                                }
                                d.activate && d.activate(), e(c || r)
                            }
                        }.bind(a)), u && d.el.appendChild((0, s.az)(u)), d
                    }))
                }, i.setMenuItems = function (t, e) {
                    var i = this;
                    t ? (this.destroyItems(), t.forEach((function (t) {
                        i.items.push(t), i.itemsContainer.el.appendChild(t.el)
                    })), e > -1 && this.items[e].activate(), this.categoryButton && this.categoryButton.show()) : this.removeMenu()
                }, i.appendMenu = function (t) {
                    if (t) {
                        var e = t.el,
                            i = t.name,
                            n = t.categoryButton;
                        if (this.children[i] = t, n) {
                            var a = this.mainMenu.buttonContainer,
                                o = a.querySelector(".jw-settings-sharing"),
                                r = "quality" === i ? a.firstChild : o || this.closeButton.element();
                            a.insertBefore(n.element(), r)
                        }
                        this.mainMenu.el.appendChild(e), this.mainMenu.trigger("menuAppended", i)
                    }
                }, i.removeMenu = function (t) {
                    if (!t) return this.parentMenu.removeMenu(this.name);
                    var e = this.children[t];
                    e && (delete this.children[t], e.destroy(), this.mainMenu.trigger("menuRemoved", t))
                }, i.open = function (t) {
                    var e, i = this,
                        n = this.mainMenu.visible;
                    if (this.items.length) {
                        var a = t && t.sourceEvent,
                            o = this.itemsContainer ? this.itemsContainer.el.firstChild : this.items[0].el,
                            r = this.itemsContainer ? this.itemsContainer.el.lastChild : this.items[this.items.length - 1].el,
                            s = a && "keydown" === a.type,
                            l = "Up" === (s && (0, h.ku)(a.key)) ? r : o;
                        if (!this.visible || this.openMenus.length) {
                            var c = this.mainMenu,
                                u = this.parentMenu,
                                d = this.categoryButton;
                            if (u.openMenus.push(this.name), u.openMenus.length > 1 && u.closeChildren(this.name), d && d.element().setAttribute("aria-expanded", "true"), u.isSubmenu) {
                                u.el.classList.remove("jw-settings-submenu-active"), c.topbar.el.classList.add("jw-nested-menu-open");
                                var p = c.topbar.el.querySelector(".jw-settings-topbar-text");
                                p.setAttribute("name", this.title), p.innerText = this.title;
                                var w = u.title;
                                this.setBackButtonAriaLabel(w), c.backButton.show(), this.mainMenu.backButtonTarget = this.parentMenu, this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0), e = p
                            } else c.topbar.el.classList.remove("jw-nested-menu-open"), c.backButton && c.backButton.hide(), this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                            this.el.classList.add("jw-settings-submenu-active"), n && s ? e = l : n || (c.open(t), e = d.element(), d && d.tooltip && !s && (d.tooltip.suppress = !0)), this.openMenus.length && this.closeChildren(), this.el.scrollTop = 0, this.visible = !0, this.el.setAttribute("aria-expanded", "true"), e && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((function () {
                                e.focus(), i._openTimeout = null
                            })))
                        } else this.items.length && s && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((function () {
                            l.focus(), i._openTimeout = null
                        })))
                    }
                }, i.close = function (t) {
                    var e = this;
                    this._openTimeout && (clearTimeout(this._openTimeout), this._openTimeout = null), this.visible && (this.visible = !1, this.el.setAttribute("aria-expanded", "false"), this.el.classList.remove("jw-settings-submenu-active"), this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !1), this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"), this.parentMenu.openMenus = this.parentMenu.openMenus.filter((function (t) {
                        return t !== e.name
                    })), !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t), this.openMenus.length && this.closeChildren())
                }, i.closeChildren = function (t) {
                    var e = this;
                    this.openMenus.forEach((function (i) {
                        if (i !== t) {
                            var n = e.children[i];
                            n && n.close()
                        }
                    }))
                }, i.toggle = function (t, e) {
                    if (e && this.mainMenu.visible) return this.mainMenu.close(t);
                    this.visible ? this.close(t) : this.open(t)
                }, i.destroyItems = function () {
                    this.items.forEach((function (t) {
                        t.destroy()
                    })), this.items = []
                }, i.destroy = function () {
                    var t = this;
                    this._openTimeout && (clearTimeout(this._openTimeout), this._openTimeout = null), Object.keys(this.children).forEach((function (e) {
                        t.children[e].destroy()
                    })), this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()), this.categoryButton.ui.destroy()), this.topbarUI && this.topbarUI.destroy(), this.destroyItems(), this.itemsContainer.destroy();
                    var e = this.parentMenu.openMenus,
                        i = e.indexOf(this.name);
                    e.length && i > -1 && this.openMenus.splice(i, 1), delete this.parentMenu, this.visible = !1, this.el.parentNode && this.el.parentNode.removeChild(this.el), this.off()
                }, e
            }(r.ZP)
    },
    2810: function (t, e, i) {
        "use strict";
        i.d(e, {
            JU: function () {
                return d
            },
            MR: function () {
                return p
            },
            dt: function () {
                return w
            },
            ku: function () {
                return h
            }
        });
        var n, a, o = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"],
            r = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
            s = ["100%", "75%", "50%", "25%", "0%"],
            l = [100, 75, 50, 25, 0],
            c = function (t) {
                var e = t.white,
                    i = t.black,
                    a = t.red,
                    o = t.green,
                    r = t.blue,
                    s = t.yellow,
                    l = t.magenta,
                    c = t.cyan;
                return n = [e, i, a, o, r, s, l, c]
            },
            u = function (t) {
                var e = t.none,
                    i = t.raised,
                    n = t.depressed,
                    o = t.uniform,
                    r = t.dropShadow;
                return a = [e, i, n, o, r]
            },
            d = function (t) {
                return [{
                    name: "color",
                    label: t.color,
                    options: n || c(t),
                    values: o,
                    defaultVal: "#ffffff"
                }, {
                    name: "fontOpacity",
                    label: t.fontOpacity,
                    options: ["100%", "75%", "50%", "25%"],
                    values: [100, 75, 50, 25],
                    defaultVal: 100
                }, {
                    name: "userFontScale",
                    label: t.userFontScale,
                    options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
                    values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
                    defaultVal: 1
                }, {
                    name: "fontFamily",
                    label: t.fontFamily,
                    options: r,
                    values: r,
                    defaultVal: "Arial"
                }, {
                    name: "edgeStyle",
                    label: t.edgeStyle,
                    options: a || u(t),
                    values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                    defaultVal: "none"
                }, {
                    name: "backgroundColor",
                    label: t.backgroundColor,
                    options: n || c(t),
                    values: o,
                    defaultVal: "#000000"
                }, {
                    name: "backgroundOpacity",
                    label: t.backgroundOpacity,
                    options: s,
                    values: l,
                    defaultVal: 50
                }, {
                    name: "windowColor",
                    label: t.windowColor,
                    options: n || c(t),
                    values: o,
                    defaultVal: "#000000"
                }, {
                    name: "windowOpacity",
                    label: t.windowOpacity,
                    options: ["100%", "75%", "50%", "25%", "0%"],
                    values: l,
                    defaultVal: 0
                }]
            },
            h = function (t) {
                return t && t.replace(/(Arrow|ape)/, "")
            },
            p = function () {
                var t = this;
                this._destroyed || (this._destroyed = !0, Object.keys(this.children).forEach((function (e) {
                    t.children[e].destroy()
                })), this.children = {}, this.model && (this.model.off(null, null, this), delete this.model), this.off())
            },
            w = function (t, e) {
                t && e > -1 && (t.items.forEach((function (t) {
                    t.deactivate()
                })), t.items[e].activate())
            }
    },
    5349: function (t, e, i) {
        "use strict";
        i.d(e, {
            m: function () {
                return a
            }
        });
        var n = i(2799),
            a = function (t, e, i, a, o) {
                var r = document.createElement("div");
                r.className = "jw-reset-text jw-tooltip jw-tooltip-" + e, r.setAttribute("dir", "auto");
                var s, l = document.createElement("div");
                l.className = "jw-text", r.appendChild(l), t.appendChild(r);
                var c = function (t) {
                    t && s.dirty && ((0, n.nh)(l, s.text), s.dirty = !1), s.opened = t, (0, n.og)(r, "jw-open", t)
                };
                return s = {
                    dirty: Boolean(i),
                    opened: !1,
                    text: i,
                    touchEvent: !1,
                    suppress: !1,
                    open: function () {
                        s.touchEvent || (s.suppress ? s.suppress = !1 : (c(!0), a && a()))
                    },
                    close: function () {
                        s.touchEvent || (c(!1), o && o())
                    },
                    setText: function (t) {
                        t !== s.text && (s.text = t, s.dirty = !0), s.opened && c(!0)
                    }
                }, t.addEventListener("mouseover", s.open), t.addEventListener("focus", s.open), t.addEventListener("blur", s.close), t.addEventListener("mouseout", s.close), t.addEventListener("touchstart", (function () {
                    s.touchEvent = !0
                }), {
                    passive: !0
                }), s
            }
    },
    4244: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return u
            }
        });
        var n = i(4578),
            a = i(8348),
            o = i(328),
            r = i(5882),
            s = i(1261),
            l = i(2799),
            c = function (t) {
                var e = (0, l.A8)(t),
                    i = window.pageXOffset;
                return i && a.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i, e.right -= i), e
            },
            u = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this) || this).className = e + " jw-background-color jw-reset", n.orientation = i, n
                }(0, n.Z)(e, t);
                var i = e.prototype;
                return i.setup = function () {
                    var t, e;
                    this.el = (0, l.az)((t = this.className, e = "jw-slider-" + this.orientation, void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="' + t + " " + e + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>')), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new r.ZP(this.element(), {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
                }, i.dragStart = function () {
                    this.trigger("dragStart"), this.railBounds = c(this.elementRail)
                }, i.dragEnd = function (t) {
                    this.dragMove(t), this.trigger("dragEnd")
                }, i.dragMove = function (t) {
                    var e, i, n = this.railBounds = this.railBounds ? this.railBounds : c(this.elementRail);
                    return "pointercancel" === t.sourceEvent.type || (i = "horizontal" === this.orientation ? (e = t.pageX) < n.left ? 0 : e > n.right ? 100 : 100 * (0, s.v)((e - n.left) / n.width, 0, 1) : (e = t.pageY) >= n.bottom ? 0 : e <= n.top ? 100 : 100 * (0, s.v)((n.height - (e - n.top)) / n.height, 0, 1), this.render(i), this.update(i)), !1
                }, i.tap = function (t) {
                    this.railBounds = c(this.elementRail), this.dragMove(t)
                }, i.limit = function (t) {
                    return t
                }, i.update = function (t) {
                    this.trigger("update", {
                        percentage: t
                    })
                }, i.render = function (t) {
                    t = Math.max(0, Math.min(t, 100));
                    var e = this.elementThumb,
                        i = this.elementProgress;
                    "horizontal" === this.orientation ? (e.style.left = t + "%", i.style.width = t + "%") : (e.style.bottom = t + "%", i.style.height = t + "%")
                }, i.updateBuffer = function (t) {
                    this.elementBuffer.style.width = t + "%"
                }, i.element = function () {
                    return this.el
                }, e
            }(o.ZP)
    },
    8993: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return b
            }
        });
        var n = i(4578),
            a = i(6042),
            o = i(1261),
            r = i(974),
            s = i(9888),
            l = i(2799),
            c = i(7462),
            u = i(5882),
            d = i(4244),
            h = i(520),
            p = i(3946),
            w = i(6886),
            f = i(7387),
            g = i(8381),
            m = i(1643),
            j = function (t) {
                this.begin = t.begin, this.end = t.end, this.img = t.text
            },
            v = function (t) {
                function e() {
                    return t.apply(this, arguments) || this
                }(0, n.Z)(e, t);
                var i = e.prototype;
                return i.setup = function () {
                    this.textChapter = document.createElement("span"), this.textChapter.className = "jw-time-chapter jw-text jw-reset", this.textChapter.style.display = "none", this.textTime = document.createElement("span"), this.textTime.className = "jw-time-time jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-time-thumb jw-reset", this.containerWidth = 0, this.textLength = 0, this.dragJustReleased = !1;
                    var t = document.createElement("div");
                    t.className = "jw-time-tip jw-reset", t.appendChild(this.img), t.appendChild(this.textChapter), t.appendChild(this.textTime), this.addContent(t)
                }, i.image = function (t) {
                    (0, r.oB)(this.img, t)
                }, i.update = function (t, e) {
                    this.textTime && (this.textTime.textContent = t, e ? this.textChapter && (this.textChapter.textContent = e, this.textChapter.style.removeProperty("display")) : this.textChapter && (this.textChapter.style.display = "none", this.textChapter.textContent = ""))
                }, i.getWidth = function () {
                    return this.containerWidth || this.setWidth(), this.containerWidth
                }, i.setWidth = function (t) {
                    t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0, l.A8)(this.container).width + 16)
                }, i.resetWidth = function () {
                    this.containerWidth = 0
                }, e
            }(h.Z),
            y = function (t) {
                function e(e, i, n) {
                    var o, r, s, l;
                    return (o = t.call(this, "jw-slider-time", "horizontal") || this)._model = e, o._api = i, o.timeUpdateKeeper = n, o.timeTip = new v("jw-tooltip-time", null, !0), o.timeTip.setup(), o.cues = [], o.seekThrottled = (0, a.P2)(o.performSeek, 400), o._updateAriaTextLimitedThrottled = (r = (0, a.P2)(o.updateAriaText, 1e3), s = 4, l = 0, (0, c.Z)((function () {
                        if (++l < s) {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return r.apply(this, e)
                        }
                    }), {
                        reset: function () {
                            l = 0
                        },
                        shush: function () {
                            l = 1 / 0
                        }
                    })), o.sliderOptions = o._model.get("timeSlider"), o
                }(0, n.Z)(e, t);
                var i = e.prototype;
                return i.setup = function () {
                    var e = this;
                    t.prototype.setup.call(this), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("change:chapters", this.onChapters, this).on("seeked", (function () {
                        e._model.get("scrubbing") || (e._updateAriaTextLimitedThrottled.reset(), e._updateAriaTextLimitedThrottled())
                    })), this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), this._model.player.change("playlistItem", this.onPlaylistItem, this);
                    var i = this.el;
                    (0, l.P$)(i, "tabindex", "0"), (0, l.P$)(i, "role", "slider"), (0, l.P$)(i, "aria-label", this._model.get("localization").slider), i.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new u.ZP(i)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (function () {
                        return i.focus()
                    })).on("focus", (function () {
                        return e._updateAriaTextLimitedThrottled.reset()
                    })).on("blur", (function () {
                        return e._updateAriaTextLimitedThrottled.shush()
                    })), this.sliderOptions && !this.sliderOptions.showKnob && (this.elementThumb.style.opacity = "0")
                }, i.update = function (e) {
                    this.seekTo = e, this.seekThrottled(), t.prototype.update.apply(this, [e])
                }, i.dragStart = function () {
                    this._model.set("scrubbing", !0), t.prototype.dragStart.call(this)
                }, i.dragEnd = function (e) {
                    t.prototype.dragEnd.apply(this, [e]), this._model.set("scrubbing", !1)
                }, i.onBuffer = function (t, e) {
                    this.updateBuffer(e)
                }, i.onPosition = function (t, e) {
                    this.updateChapter(e), this.updateTime(e, t.get("duration"))
                }, i.onDuration = function (t, e) {
                    this.updateTime(t.get("position"), e), (0, l.P$)(this.el, "aria-valuemin", 0), (0, l.P$)(this.el, "aria-valuemax", Math.abs(e)), this.updateCues(null, t.getCues())
                }, i.onStreamType = function (t, e) {
                    this.streamType = e
                }, i.onChapters = function () {
                    this.updateCues(null, this._model.getCues())
                }, i.updateTime = function (t, e) {
                    var i = 0,
                        n = Boolean(this._model.get("instreamMode"));
                    if (e)
                        if ("DVR" !== this.streamType || n) "VOD" !== this.streamType && this.streamType && !n || (i = t / e * 100);
                        else {
                            var a = this._model.get("dvrSeekLimit"),
                                o = e + a;
                            i = (o - (t + a)) / o * 100
                        } this._updateAriaTextLimitedThrottled(), this.render(i)
                }, i.onPlaylistItem = function (t, e) {
                    var i = this;
                    this.reset();
                    var n = t.getCues();
                    !this.cues.length && n.length && this.updateCues(null, n);
                    var o = e.tracks;
                    (0, a.S6)(o, (function (t) {
                        t && t.kind && "thumbnails" === t.kind.toLowerCase() ? i.loadThumbnails(t.file) : t && t.kind && "chapters" === t.kind.toLowerCase() && i.loadChapters(t.file)
                    }))
                }, i.performSeek = function () {
                    var t, e = this.seekTo,
                        i = this._model.get("duration");
                    if (0 === i) this._api.play({
                        reason: "interaction"
                    });
                    else if ("DVR" === this.streamType) {
                        var n = this._model.get("seekRange") || {
                                start: 0
                            },
                            a = this._model.get("dvrSeekLimit");
                        t = (n.start + (-i - a)) * e / 100, this._api.seek(t, {
                            reason: "interaction"
                        })
                    } else t = e / 100 * i, this._api.seek(Math.min(t, i - .25), {
                        reason: "interaction"
                    })
                }, i.showTimeTooltip = function (t) {
                    var e = this._model.get("duration");
                    if (0 !== e) {
                        var i, n = this._model.get("containerWidth"),
                            a = (0, l.A8)(this.elementRail),
                            c = t.pageX ? t.pageX - a.left : t.x,
                            u = (c = (0, o.v)(c, 0, a.width)) / a.width,
                            d = e * u;
                        if (e < 0) d = (e += this._model.get("dvrSeekLimit")) - (d = e * u);
                        var h = (0, s.timeFormat)(d, !0),
                            p = this.timeTip,
                            w = this.getActiveCue(d);
                        if (w) p.update(h, w.text), i = w.text.length + h.length;
                        else {
                            var f = h;
                            e < 0 && d > -1 && (f = "Live"), p.update(f), i = f.length
                        }
                        this.textLength !== i && (this.textLength = i, p.resetWidth()), this.showThumbnail(d), (0, l.cn)(p.el, "jw-open");
                        var g = p.getWidth(),
                            m = n - a.width,
                            j = 0;
                        g > m && (j = (g - m) / 2);
                        var v = Math.round(4 * Math.min(a.width - j, Math.max(j, c))) / 4;
                        (0, r.vs)(p.el, "translateX(" + v + "px)")
                    }
                }, i.hideTimeTooltip = function () {
                    (0, l.IV)(this.timeTip.el, "jw-open")
                }, i.updateCues = function (t, e) {
                    var i = this;
                    this.resetCues(), e && e.length && (e.forEach((function (t) {
                        i.addCue(t)
                    })), this.drawCues())
                }, i.updateAriaText = function () {
                    var t = this._model,
                        e = this.el,
                        i = t.get("position"),
                        n = t.get("duration");
                    "DVR" === this.streamType && (i = (n = Math.abs(n)) + i);
                    var a = (0, s.timeFormatAria)(i) + " of " + (0, s.timeFormatAria)(n);
                    this.timeUpdateKeeper.textContent = a, (0, l.P$)(e, "aria-valuetext", a), (0, l.P$)(e, "aria-valuenow", i)
                }, i.reset = function () {
                    this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0, this._updateAriaTextLimitedThrottled.reset()
                }, i.loadThumbnails = function (t) {
                    t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, (0, w.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                        plainText: !0
                    }))
                }, i.thumbnailsLoaded = function (t) {
                    var e = this,
                        i = (0, f.Z)(t.responseText);
                    Array.isArray(i) && (i.forEach((function (t) {
                        e.thumbnails.push(new j(t))
                    })), this.drawCues(), this.showThumbnail(0))
                }, i.thumbnailsFailed = function () {}, i.chooseThumbnail = function (t) {
                    var e = this.thumbnails;
                    if (!e || !e.length) return "";
                    var i = (0, a.e1)(e, {
                        end: t
                    }, (0, a.Cb)("end"));
                    i >= e.length && (i = e.length - 1);
                    var n = e[i].img;
                    return n.indexOf("://") < 0 && (n = this.vttPath ? this.vttPath + "/" + n : n), n
                }, i.loadThumbnail = function (t) {
                    var e = this,
                        i = this.chooseThumbnail(t),
                        n = {
                            width: "0px",
                            height: "0px",
                            margin: "0 auto",
                            backgroundImage: "",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: ""
                        };
                    if (!i || !i.length) return n;
                    if (i.indexOf("#xywh") > 0) try {
                            var a = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(i);
                            if (!a) throw new Error("No match for expected thumbnail pattern");
                            i = a[1];
                            var o = parseFloat(a[2]),
                                s = parseFloat(a[3]);
                            n.backgroundPosition = -1 * o + "px " + -1 * s + "px", n.width = a[4], this.timeTip.setWidth(Number(r.oB.width)), n.height = a[5]
                        } catch (t) {
                            return
                        } else if (this.individualImage) n.backgroundSize = "contain", n.width = "160px", n.height = "68px", this.timeTip.setWidth(160);
                        else {
                            var l = this.individualImage = new Image;
                            l.onload = function () {
                                l.onload = null, e.timeTip.image({
                                    width: l.width,
                                    height: l.height
                                }), e.timeTip.setWidth(l.width)
                            }, l.src = i
                        } return n.backgroundImage = 'url("' + i + '")', n
                }, i.showThumbnail = function (t) {
                    this._model.get("containerWidth") <= 420 || this.timeTip.image(this.loadThumbnail(t))
                }, i.resetThumbnails = function () {
                    this.timeTip.image({
                        backgroundImage: "",
                        width: 0,
                        height: 0
                    }), this.thumbnails = []
                }, i.loadChapters = function (t) {
                    (0, w.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                        plainText: !0
                    })
                }, i.chaptersLoaded = function (t) {
                    var e = (0, f.Z)(t.responseText);
                    if (Array.isArray(e)) {
                        var i = this._model.get("playlistItem") || {};
                        if (!i.chapters || !i.chapters.timestamps || !i.chapters.timestamps.length) {
                            var n = (0, g._b)(e, i.chapters);
                            i.chapters = n, this._model.set("playlistItem", i), n.timestamps[0] && 0 === n.timestamps[0].time && this._api.trigger(m.t6, n.timestamps[0])
                        }
                    }
                }, i.chaptersFailed = function () {}, i.addCue = function (t) {
                    var e = new p.M(t.begin, t.text, t.cueType);
                    e.makeEl(), this.cues.push(e)
                }, i.drawCues = function () {
                    var t = this,
                        e = this._model.get("duration");
                    !e || e <= 0 || this.cues.forEach((function (i) {
                        i.align(e), i.el && t.elementRail.appendChild(i.el)
                    }))
                }, i.getActiveCue = function (t) {
                    return this.cues.reduce((function (e, i) {
                        return t < i.time ? e : e ? i.time > e.time ? i : e : i
                    }), null)
                }, i.resetCues = function () {
                    this.cues.forEach((function (t) {
                        t.el && t.el.parentNode && t.el.parentNode.removeChild(t.el)
                    })), this.cues.length = 0
                }, i.updateChapter = function (t) {
                    var e = (this._model.get("playlistItem") || {}).chapters;
                    if (e && e.timestamps) {
                        var i = (0, g.Mf)(t, e.timestamps);
                        i && i !== this.activeChapter && (this.activeChapter = i, this._api.trigger(m.t6, i))
                    }
                }, e
            }(d.Z),
            b = y
    },
    520: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return s
            }
        });
        var n = i(4578),
            a = i(328);
        var o = i(2799),
            r = i(4667),
            s = function (t) {
                function e(e, i, n, a) {
                    var o;
                    (o = t.call(this) || this).el = document.createElement("div");
                    var s, l, c = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset";
                    return n || (c += " jw-hidden"), i && (s = o.el, l = i, s && l && (s.setAttribute("aria-label", l), s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"))), o.el.className = c, o.tooltip = document.createElement("div"), o.tooltip.className = "jw-overlay jw-reset", o.openClass = "jw-open", o.componentType = "tooltip", o.el.appendChild(o.tooltip), a && a.length > 0 && Array.prototype.forEach.call(a, (function (t) {
                        "string" == typeof t ? o.el.appendChild((0, r.Z)(t)) : o.el.appendChild(t)
                    })), o
                }(0, n.Z)(e, t);
                var i = e.prototype;
                return i.addContent = function (t) {
                    this.content && this.removeContent(), this.content = t, this.tooltip.appendChild(t)
                }, i.removeContent = function () {
                    this.content && (this.tooltip.removeChild(this.content), this.content = null)
                }, i.hasContent = function () {
                    return Boolean(this.content)
                }, i.element = function () {
                    return this.el
                }, i.openTooltip = function (t) {
                    this.isOpen || (this.trigger("open-" + this.componentType, t, {
                        isOpen: !0
                    }), this.isOpen = !0, (0, o.og)(this.el, this.openClass, this.isOpen))
                }, i.closeTooltip = function (t) {
                    this.isOpen && (this.trigger("close-" + this.componentType, t, {
                        isOpen: !1
                    }), this.isOpen = !1, (0, o.og)(this.el, this.openClass, this.isOpen))
                }, i.toggleOpenState = function (t) {
                    this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
                }, e
            }(a.ZP)
    },
    8268: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return B
            }
        });
        var n = i(7462),
            a = i(8348),
            o = i(1643),
            r = i(7191),
            s = i(8168),
            l = i(8993),
            c = i(4578),
            u = i(2799),
            d = i(3946),
            h = function () {
                function t(t, e, i, n, a, o, r) {
                    var s = this;
                    this.begin = t, this.time = t, this.end = e, this.text = i, this.first = n, this.last = a, this.cueType = "chapter", this.image = r, o && o.length && (this.ads = o.map((function (t) {
                        var e = (t.begin - s.begin) / (s.end - s.begin) * 100;
                        return new d.M(e + "%", t.text, t.cueType)
                    })))
                }
                var e = t.prototype;
                return e.align = function (t) {}, e.makeEl = function () {
                    var t, e, i, n, a = this;
                    this.el = (0, u.az)('<div class="jw-timesegment jw-reset" aria-hidden="true">\n            <div class="jw-timesegment-resetter jw-reset">\n                <div class="jw-timesegment-container jw-reset">\n                    <div class="jw-timesegment-bar jw-rail jw-timesegment-background jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-buffer jw-timesegment-buffered jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-progress jw-timesegment-progress jw-reset"></div>\n                </div>\n            </div>\n        </div>'), this.paddingEl = null == (t = this.el) ? void 0 : t.querySelector(".jw-timesegment-resetter"), this.containerEl = null == (e = this.el) ? void 0 : e.querySelector(".jw-timesegment-container"), this.bufferedEl = null == (i = this.el) ? void 0 : i.querySelector(".jw-timesegment-buffered"), this.progressEl = null == (n = this.el) ? void 0 : n.querySelector(".jw-timesegment-progress"), this.ads && this.ads.length && this.ads.forEach((function (t) {
                        t.makeEl(), t.align(0), a.containerEl && a.progressEl && t.el && a.containerEl.insertBefore(t.el, a.progressEl)
                    })), this.paddingEl && (this.first || (this.paddingEl.style.paddingLeft = "1px"), this.last || (this.paddingEl.style.paddingRight = "2px")), this.el && (this.el.style.flexGrow = String(Math.abs(Math.round(this.end - this.begin))))
                }, e.setProgress = function (t) {
                    this.progressEl && (this.progressEl.style.width = t + "%")
                }, e.setBuffered = function (t) {
                    this.bufferedEl && (this.bufferedEl.style.width = t + "%")
                }, t
            }(),
            p = function (t) {
                function e(e, i, n) {
                    var a;
                    return (a = t.call(this, e, i, n) || this).cues = [], a.className = "jw-slider-time jw-chapter-slider-time jw-background-color jw-reset", a
                }(0, c.Z)(e, t);
                var i = e.prototype;
                return i.setup = function () {
                    t.prototype.setup.call(this), this.elementActualRail = this.el.getElementsByClassName("jw-rail")[0], this.elementActualRail.classList.replace("jw-rail", "jw-old-rail"), this.elementBuffer.classList.replace("jw-buffer", "jw-old-buffer"), this.elementProgress.classList.replace("jw-progress", "jw-old-progress")
                }, i.sizeSegmentsFromElement = function (t, e) {
                    var i = (0, u.A8)(t);
                    this.cues.forEach((function (t) {
                        if ("chapter" === t.cueType) {
                            var n = (0, u.A8)(t.el),
                                a = (i.right - n.left) / n.width,
                                o = 100 * Math.max(0, Math.min(a, 1));
                            t[e](o)
                        }
                    }))
                }, i.onBuffer = function (e, i) {
                    t.prototype.onBuffer.call(this, e, i), this.sizeSegmentsFromElement(this.elementBuffer, "setBuffered")
                }, i.updateTime = function (e, i) {
                    t.prototype.updateTime.call(this, e, i), this.sizeSegmentsFromElement(this.elementProgress, "setProgress")
                }, i.updateCues = function (t, e) {
                    var i = this;
                    this.resetCues();
                    var n = function (t, e, i) {
                            return t.filter((function (t) {
                                return t.begin >= e && t.begin < i
                            }))
                        },
                        a = [],
                        o = [];
                    e && (a = e.filter((function (t) {
                        return "chapters" === t.cueType
                    })).sort((function (t, e) {
                        return t.begin - e.begin
                    })), o = e.filter((function (t) {
                        return "ads" === t.cueType
                    })).sort((function (t, e) {
                        return t.begin - e.begin
                    })));
                    var r = this._model.get("duration"),
                        s = !1;
                    if (a.length) {
                        if (0 !== a[0].begin) {
                            var l = {
                                begin: 0,
                                end: a[0].begin,
                                text: "",
                                first: !0,
                                last: !1,
                                ads: n(o, 0, a[0].begin),
                                image: void 0
                            };
                            this.addCue(l), s = !0
                        }
                        a.forEach((function (t, e) {
                            var l = e + 1 === a.length,
                                c = {
                                    begin: t.begin,
                                    end: t.end,
                                    text: t.text,
                                    first: !1,
                                    last: !1,
                                    ads: n(o, t.begin, t.end),
                                    image: t.image
                                };
                            l && void 0 !== t.end && t.end >= r && (c.last = !0), s || (s = !0, c.first = !0), i.addCue(c)
                        }));
                        var c = a[a.length - 1];
                        if (void 0 !== c.end && c.end < r) {
                            var u = {
                                begin: c.end,
                                end: r,
                                text: "",
                                first: !1,
                                last: !0,
                                ads: n(o, c.end, r),
                                image: void 0
                            };
                            this.addCue(u)
                        }
                    } else {
                        var d = {
                            begin: 0,
                            end: r,
                            text: "",
                            first: !0,
                            last: !0,
                            ads: o,
                            image: void 0
                        };
                        this.addCue(d)
                    }
                    this.drawCues()
                }, i.addCue = function (t) {
                    var e = new h(t.begin, t.end, t.text, t.first, t.last, t.ads, t.image);
                    e.makeEl(), this.cues.push(e)
                }, i.getActiveCue = function (t) {
                    var e = this.cues.find((function (e) {
                        return t < e.end && t >= e.begin
                    }));
                    return e || null
                }, i.drawCues = function () {
                    var t = this;
                    this._model.get("duration") && (this.cues.forEach((function (e) {
                        "chapter" === e.cueType && t.elementActualRail && e.el && t.elementActualRail.appendChild(e.el)
                    })), this.sizeSegmentsFromElement(this.elementBuffer, "setBuffered"), this.sizeSegmentsFromElement(this.elementProgress, "setProgress"))
                }, i.chooseThumbnail = function (e) {
                    var i = t.prototype.chooseThumbnail.call(this, e),
                        n = this.getActiveCue(e),
                        a = !i;
                    return this.sliderOptions && this.sliderOptions.preferChapterImages && (a = !0), a && n && n.image ? n.image : i
                }, e
            }(l.Z),
            w = i(7326),
            f = i(520),
            g = i(4244),
            m = i(5882),
            j = function (t) {
                function e(e, i, n) {
                    var a, o = "jw-slider-volume";
                    return "vertical" === e && (o += " jw-volume-tip"), (a = t.call(this, o, e) || this).setup(), a.element().classList.remove("jw-background-color"), (0, u.P$)(n, "tabindex", "0"), (0, u.P$)(n, "aria-label", i), (0, u.P$)(n, "aria-orientation", e), (0, u.P$)(n, "aria-valuemin", 0), (0, u.P$)(n, "aria-valuemax", 100), (0, u.P$)(n, "role", "slider"), a.uiOver = new m.ZP(n).on("click", (function () {})), a
                }
                return (0, c.Z)(e, t), e
            }(g.Z),
            v = function (t) {
                function e(e, i, n, a, o) {
                    var r;
                    (r = t.call(this, i, n, !0, a) || this)._model = e, r.horizontalContainer = o;
                    var s = e.get("localization").volumeSlider;
                    return r.horizontalSlider = new j("horizontal", s, o), r.verticalSlider = new j("vertical", s, r.tooltip), o.appendChild(r.horizontalSlider.element()), r.addContent(r.verticalSlider.element()), r.verticalSlider.on("update", (function (t) {
                        this.trigger("update", t)
                    }), (0, w.Z)(r)), r.horizontalSlider.on("update", (function (t) {
                        this.trigger("update", t)
                    }), (0, w.Z)(r)), r.horizontalSlider.uiOver.on("keydown", (function (t) {
                        var e = t.sourceEvent;
                        switch (e.keyCode) {
                        case 37:
                            e.stopPropagation(), r.trigger("adjustVolume", -10);
                            break;
                        case 39:
                            e.stopPropagation(), r.trigger("adjustVolume", 10)
                        }
                    })), r.ui = new m.ZP(r.el, {
                        directSelect: !0
                    }).on("click", r.handleClick, (0, w.Z)(r)).on("enter", (function () {
                        return r.trigger("toggleValue")
                    })), r.addSliderHandlers(r.ui), r.addSliderHandlers(r.horizontalSlider.uiOver), r.addSliderHandlers(r.verticalSlider.uiOver), r._model.change("audioMode", r.updateSlider, (0, w.Z)(r)), r
                }(0, c.Z)(e, t);
                var i = e.prototype;
                return i.updateSlider = function (t, e) {
                    var i = t.get("horizontalVolumeSlider") || e;
                    (0, u.og)(this.element(), "jw-flag-horizontal-slider", Boolean(i))
                }, i.addSliderHandlers = function (t) {
                    var e = this.openSlider,
                        i = this.closeSlider;
                    t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
                }, i.openSlider = function (e) {
                    t.prototype.openTooltip.call(this, e), (0, u.og)(this.horizontalContainer, this.openClass, !0)
                }, i.closeSlider = function (e) {
                    t.prototype.closeTooltip.call(this, e), (0, u.og)(this.horizontalContainer, this.openClass, !1), this.horizontalContainer.blur()
                }, i.handleClick = function (t) {
                    a.OS.mobile ? this.toggleOpenState(t) : this.trigger("toggleValue")
                }, i.destroy = function () {
                    this.horizontalSlider.uiOver.destroy(), this.verticalSlider.uiOver.destroy(), this.ui.destroy()
                }, e
            }(f.Z),
            y = i(8165),
            b = i(5349),
            k = i(328),
            x = i(2268),
            T = i(9888),
            C = i(6234),
            _ = i(5646),
            M = function (t, e) {
                var i = document.createElement("div");
                return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + t, e && (0, u.P$)(i, "role", e), i
            },
            S = function (t) {
                var e = document.createElement("div");
                return e.className = "jw-reset " + t, e
            },
            E = function (t, e) {
                if ("WebKitPlaybackTargetAvailabilityEvent" in window) {
                    var i = (0, y.Z)("jw-icon-airplay jw-off", t, e.airplay, (0, r.o)("airplay-off,airplay-on"));
                    return (0, b.m)(i.element(), "airplay", e.airplay), i
                }
                if (a.Browser.chrome && window.chrome) {
                    var n = document.createElement("google-cast-launcher");
                    (0, u.P$)(n, "tabindex", "-1"), n.className += " jw-reset";
                    var o = (0, y.Z)("jw-icon-cast", null, e.cast);
                    o.ui.off();
                    var s = o.element();
                    return s.style.cursor = "pointer", s.appendChild(n), o.button = n, (0, b.m)(s, "chromecast", e.cast), o
                }
            },
            A = function (t, e, i) {
                if (!a.OS.mobile && "disabled" !== t && (a.Browser.chrome && !(0, x.yS)() || a.Browser.edge || a.Browser.safari)) {
                    var n = (0, y.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0, r.o)("pip-on,pip-off"));
                    return (0, b.m)(n.element(), "pip", i.pipIcon), n
                }
            },
            I = function (t, e) {
                return t.filter((function (t) {
                    return !e.some((function (e) {
                        return e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback
                    }))
                }))
            },
            L = function (t, e) {
                e.forEach((function (e) {
                    e.element && (e = e.element()), t.appendChild(e)
                }))
            },
            B = function () {
                function t(t, e, i) {
                    var s = this;
                    (0, n.Z)(this, k.ZP), this._api = t, this._model = e, this._isMobile = a.OS.mobile, this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                    var c = e.get("localization"),
                        d = e.get("timeSlider"),
                        h = new(!d || d.legacy ? l.Z : p)(e, t, i.querySelector(".jw-time-update"));
                    h.setup();
                    var w, f, g, j = this.menus = [];
                    this.ui = [];
                    var x = "",
                        T = c.volume;
                    if (this._isMobile) {
                        if (!(e.get("sdkplatform") || a.OS.iOS && a.OS.version.major < 10)) {
                            var I = (0, r.o)("volume-0,volume-100");
                            g = (0, y.Z)("jw-icon-volume", (function () {
                                t.setMute()
                            }), T, I)
                        }
                    } else {
                        (f = document.createElement("div")).className = "jw-horizontal-volume-container";
                        var B = (w = new v(e, "jw-icon-volume", T, (0, r.o)("volume-0,volume-50,volume-100"), f)).element();
                        j.push(w), (0, u.P$)(B, "role", "group"), e.change("mute", (function (t, e) {
                            var i = e ? c.unmute : c.mute;
                            (0, u.P$)(B, "aria-label", i + " button")
                        }), this)
                    }
                    var P = (0, y.Z)("jw-icon-next", (function () {
                            t.next({
                                feedShownId: x,
                                reason: "interaction"
                            })
                        }), c.next, (0, r.o)("next")),
                        z = (0, y.Z)("jw-icon-settings jw-settings-submenu-button", (function (t) {
                            s.trigger("settingsInteraction", "quality", !0, t)
                        }), c.settings, (0, r.o)("settings"));
                    (0, u.P$)(z.element(), "aria-controls", "jw-settings-menu"), (0, u.P$)(z.element(), "aria-expanded", !1);
                    var Z = (0, y.Z)("jw-icon-cc jw-settings-submenu-button", (function (t) {
                        s.trigger("settingsInteraction", "captions", !1, t)
                    }), c.cc, (0, r.o)("cc-off,cc-on"));
                    (0, u.P$)(Z.element(), "aria-controls", "jw-settings-submenu-captions");
                    var R = (0, y.Z)("jw-text-live", (function () {
                        s.goToLiveEdge()
                    }), c.liveBroadcast);
                    R.element().textContent = c.liveBroadcast;
                    var V, F, H, O = this.elements = {
                            alt: (V = "jw-text-alt", F = "status", H = document.createElement("span"), H.className = "jw-text jw-reset-text " + V, F && (0, u.P$)(H, "role", F), (0, u.P$)(H, "dir", "auto"), H),
                            play: (0, y.Z)("jw-icon-playback", (function () {
                                t.playToggle({
                                    reason: "interaction"
                                })
                            }), c.play, (0, r.o)("play,pause,stop")),
                            rewind: (0, y.Z)("jw-icon-rewind", (function () {
                                s.rewind()
                            }), c.rewind, (0, r.o)("rewind")),
                            live: R,
                            next: P,
                            elapsed: M("jw-text-elapsed", "timer"),
                            countdown: M("jw-text-countdown", "timer"),
                            time: h,
                            duration: M("jw-text-duration", "timer"),
                            mute: g,
                            volumetooltip: w,
                            horizontalVolumeContainer: f,
                            cast: E((function () {
                                t.castToggle()
                            }), c),
                            pip: A(e.get("pipIcon"), (function () {
                                t.setPip()
                            }), c),
                            imaFullscreen: (0, y.Z)("jw-icon-fullscreen", (function () {
                                t.setFullscreen()
                            }), c.fullscreen, (0, r.o)("fullscreen-off,fullscreen-on")),
                            fullscreen: (0, y.Z)("jw-icon-fullscreen", (function () {
                                t.setFullscreen()
                            }), c.fullscreen, (0, r.o)("fullscreen-off,fullscreen-on")),
                            spacer: S("jw-spacer"),
                            buttonContainer: S("jw-button-container"),
                            settingsButton: z,
                            captionsButton: Z
                        },
                        N = (0, b.m)(Z.element(), "captions", c.cc),
                        D = function (t) {
                            var e = t.get("captionsList")[t.get("captionsIndex")],
                                i = c.cc;
                            e && "Off" !== e.label && (i = e.label), N.setText(i)
                        },
                        U = (0, b.m)(O.play.element(), "play", c.play);
                    this.setPlayText = function (t) {
                        U.setText(t)
                    };
                    var q = O.next.element(),
                        W = (0, b.m)(q, "next", c.nextUp, (function () {
                            var t = e.get("nextUp");
                            t && (x = (0, C.B)(C.F), s.trigger("nextShown", {
                                mode: t.mode,
                                ui: "nextup",
                                itemsShown: [t],
                                feedData: t.feedData,
                                reason: "hover",
                                feedShownId: x
                            }))
                        }), (function () {
                            x = ""
                        }));
                    (0, u.P$)(q, "dir", "auto"), (0, b.m)(O.rewind.element(), "rewind", c.rewind), (0, b.m)(O.settingsButton.element(), "settings", c.settings);
                    var Q = [(0, b.m)(O.fullscreen.element(), "fullscreen", c.fullscreen), (0, b.m)(O.imaFullscreen.element())];
                    (0, u.cn)(O.imaFullscreen.element(), "jw-fullscreen-ima");
                    var X = [O.play, O.rewind, O.next, O.volumetooltip, O.horizontalVolumeContainer, O.imaFullscreen, O.mute, O.alt, O.live, O.elapsed, O.countdown, O.duration, O.spacer, O.cast, O.captionsButton, O.settingsButton, O.pip, O.fullscreen].filter((function (t) {
                            return t
                        })),
                        Y = [O.time, O.buttonContainer].filter((function (t) {
                            return t
                        }));
                    this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", L(O.buttonContainer, X), L(this.el, Y);
                    var $ = e.get("logo");
                    if ($ && "control-bar" === $.position && this.addLogo($), O.play.show(), O.fullscreen.show(), O.imaFullscreen.show(), O.mute && O.mute.show(), O.pip && O.pip.show(), e.change("volume", this.onVolume, this), e.change("mute", (function (t, e) {
                            s.renderVolume(e, t.get("volume"))
                        }), this), e.change("state", this.onState, this), e.change("duration", this.onDuration, this), e.change("position", this.onElapsed, this), e.change("fullscreen", (function (t, e) {
                            for (var i = [s.elements.fullscreen.element(), s.elements.imaFullscreen.element()], n = 0; n < i.length; n++) {
                                var a = i[n];
                                (0, u.og)(i[n], "jw-off", e);
                                var o = t.get("fullscreen") ? c.exitFullscreen : c.fullscreen;
                                Q[n].setText(o), (0, u.P$)(a, "aria-label", o)
                            }
                        }), this), e.change("allowFullscreen", this.onAllowFullscreenToggle, this), e.change("pip", (function (t, e) {
                            s.elements.pip && (0, u.og)(s.elements.pip.element(), "jw-off", e)
                        }), this), e.change("mediaType", (function (t, e) {
                            s.elements.pip && s.elements.pip.toggle("audio" !== e)
                        }), this), e.change("streamType", this.onStreamTypeChange, this), e.change("dvrLive", (function (t, e) {
                            var i = c.liveBroadcast,
                                n = c.notLive,
                                a = s.elements.live.element(),
                                o = !1 === e;
                            (0, u.og)(a, "jw-dvr-live", o), (0, u.P$)(a, "aria-label", o ? n : i), a.textContent = o ? n : i
                        }), this), e.change("altText", this.setAltText, this), e.change("customButtons", this.updateButtons, this), e.on("change:captionsIndex", D, this), e.on("change:captionsList", D, this), e.change("nextUp", (function (t, e) {
                            x = (0, C.B)(C.F);
                            var i = c.nextUp;
                            e && e.title && (i += ": " + e.title), W.setText(i), O.next.toggle(Boolean(e))
                        }), this), e.change("audioMode", this.onAudioMode, this), O.cast && (e.change("castAvailable", this.onCastAvailable, this), e.change("castActive", this.onCastActive, this)), O.volumetooltip && (O.volumetooltip.on("update", (function (t) {
                            var e = t.percentage;
                            this._api.setVolume(e)
                        }), this), O.volumetooltip.on("toggleValue", (function () {
                            this._api.setMute()
                        }), this), O.volumetooltip.on("adjustVolume", (function (t) {
                            this.trigger("adjustVolume", t)
                        }), this)), O.cast && O.cast.button) {
                        var K = O.cast.ui.on("click enter", (function (t) {
                            "keydown" === t.type && O.cast.button.click(), this._model.set("castClicked", !0)
                        }), this);
                        this.ui.push(K)
                    }
                    var G = (0, _.Z)(O.duration, (function () {
                        if ("DVR" === this._model.get("streamType")) {
                            var t = this._model.get("position"),
                                e = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-e, t), {
                                reason: "interaction"
                            })
                        }
                    }), this);
                    this.ui.push(G);
                    var J = new m.ZP(this.el).on("click drag", (function () {
                        this.trigger(o.xf)
                    }), this);
                    this.ui.push(J), j.forEach((function (t) {
                        t.on("open-tooltip", s.closeMenus, s)
                    }))
                }
                var e = t.prototype;
                return e.onVolume = function (t, e) {
                    this.renderVolume(t.get("mute"), e)
                }, e.renderVolume = function (t, e) {
                    var i = this.elements.mute,
                        n = this.elements.volumetooltip;
                    if (i && ((0, u.og)(i.element(), "jw-off", t), (0, u.og)(i.element(), "jw-full", !t)), n) {
                        var a = t ? 0 : e,
                            o = n.element();
                        n.verticalSlider.render(a), n.horizontalSlider.render(a);
                        var r = n.tooltip,
                            s = n.horizontalContainer;
                        (0, u.og)(o, "jw-off", t), (0, u.og)(o, "jw-full", e >= 75 && !t), (0, u.P$)(r, "aria-valuenow", a), (0, u.P$)(s, "aria-valuenow", a);
                        var l = "Volume " + a + "%";
                        (0, u.P$)(r, "aria-valuetext", l), (0, u.P$)(s, "aria-valuetext", l), document.activeElement !== r && document.activeElement !== s && (this._volumeAnnouncer.textContent = l)
                    }
                }, e.onCastAvailable = function (t, e) {
                    this.elements.cast.toggle(e)
                }, e.onCastActive = function (t, e) {
                    this.elements.fullscreen.toggle(!e), this.elements.imaFullscreen.toggle(!e), this.elements.pip && this.elements.pip.toggle(!e), this.elements.cast.button && (0, u.og)(this.elements.cast.button, "jw-off", !e)
                }, e.onElapsed = function (t, e) {
                    var i, n, a = t.get("duration");
                    if ("DVR" === t.get("streamType")) {
                        var o = Math.ceil(e),
                            r = this._model.get("dvrSeekLimit");
                        i = n = o >= -r ? "" : "-" + (0, T.timeFormat)(-(e + r)), t.set("dvrLive", o >= -r)
                    } else i = (0, T.timeFormat)(e), n = (0, T.timeFormat)(a - e);
                    this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
                }, e.onDuration = function (t, e) {
                    this.elements.duration.textContent = (0, T.timeFormat)(Math.abs(e))
                }, e.onAudioMode = function (t, e) {
                    var i = this.elements.time.element();
                    e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0, u.SH)(this.el, i)
                }, e.element = function () {
                    return this.el
                }, e.setAltText = function (t, e) {
                    this.elements.alt.textContent = e
                }, e.closeMenus = function (t) {
                    this.menus.forEach((function (e) {
                        t && t.target === e.el || e.closeTooltip(t)
                    }))
                }, e.rewind = function () {
                    var t, e = 0,
                        i = this._model.get("currentTime");
                    i ? t = i - 10 : (t = this._model.get("position") - 10, "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))), this._api.seek(Math.max(t, e), {
                        reason: "interaction"
                    })
                }, e.onState = function (t, e) {
                    var i = t.get("localization"),
                        n = i.play;
                    this.setPlayText(n), e === o.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause, this.setPlayText(n)) : (n = i.stop, this.setPlayText(n))), (0, u.P$)(this.elements.play.element(), "aria-label", n)
                }, e.onAllowFullscreenToggle = function (t, e) {
                    [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((function (t) {
                        (0, u.og)(t, "jw-fullscreen-disallowed", !e)
                    }))
                }, e.onStreamTypeChange = function (t, e) {
                    var i = "LIVE" === e,
                        n = "DVR" === e;
                    this.elements.rewind && this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), (0, u.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(t, t.get("duration")), this.onState(t, t.get("state"))
                }, e.addLogo = function (t) {
                    var e = this.elements.buttonContainer,
                        i = new s.Z(t.file, this._model.get("localization").logo, (function () {
                            t.link && (0, u.nG)(t.link, "_blank", {
                                rel: "noreferrer"
                            })
                        }), "logo", "jw-logo-button");
                    t.link || (0, u.P$)(i.element(), "tabindex", "-1"), e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
                }, e.goToLiveEdge = function () {
                    if ("DVR" === this._model.get("streamType")) {
                        var t = Math.min(this._model.get("position"), -1),
                            e = this._model.get("dvrSeekLimit");
                        this._api.seek(Math.max(-e, t), {
                            reason: "interaction"
                        }), this._api.play({
                            reason: "interaction"
                        })
                    }
                }, e.updateButtons = function (t, e, i) {
                    if (e) {
                        var n, a, o = this.elements.buttonContainer;
                        e !== i && i ? (n = I(e, i), a = I(i, e), this.removeButtons(o, a)) : n = e;
                        for (var r = n.length - 1; r >= 0; r--) {
                            var l = n[r],
                                c = new s.Z(l.img, l.tooltip, l.callback, l.id, l.btnClass);
                            l.tooltip && (0, b.m)(c.element(), l.id, l.tooltip);
                            var u = void 0;
                            "related" === c.id ? u = this.elements.settingsButton.element() : "share" === c.id ? u = o.querySelector('[button="related"]') || this.elements.settingsButton.element() : (u = this.elements.spacer.nextSibling) && "logo" === u.getAttribute("button") && (u = u.nextSibling), o.insertBefore(c.element(), u)
                        }
                    }
                }, e.removeButtons = function (t, e) {
                    for (var i = e.length; i--;) {
                        var n = t.querySelector('[button="' + e[i].id + '"]');
                        n && t.removeChild(n)
                    }
                }, e.toggleCaptionsButtonState = function (t) {
                    var e = this.elements.captionsButton;
                    e && (0, u.og)(e.element(), "jw-off", !t)
                }, e.destroy = function () {
                    var t = this;
                    this._model.off(null, null, this), Object.keys(this.elements).forEach((function (e) {
                        var i = t.elements[e];
                        i && "function" == typeof i.destroy && t.elements[e].destroy()
                    })), this.ui.forEach((function (t) {
                        t.destroy()
                    })), this.ui = []
                }, t
            }()
    },
    4697: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return p
            }
        });
        var n = function (t, e) {
                return void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="jw-display-icon-container jw-display-icon-' + t + ' jw-reset"><div class="jw-icon jw-icon-' + t + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e + '"></div></div>'
            },
            a = i(5646),
            o = function () {
                function t(t, e, i) {
                    var n = i.querySelector(".jw-icon");
                    this.el = i, this.ui = (0, a.Z)(n, (function () {
                        var i = t.get("position"),
                            n = t.get("duration"),
                            a = i - 10,
                            o = 0;
                        "DVR" === t.get("streamType") && (o = n), e.seek(Math.max(a, o))
                    }))
                }
                return t.prototype.element = function () {
                    return this.el
                }, t
            }(),
            r = i(4578),
            s = i(328),
            l = i(2799),
            c = function (t) {
                function e(e, i, n) {
                    var o;
                    o = t.call(this) || this;
                    var r = e.get("localization"),
                        s = n.querySelector(".jw-icon");
                    if (o.icon = s, o.el = n, o.ui = (0, a.Z)(s, (function (t) {
                            o.trigger(t.type)
                        })), e.on("change:state", (function (t, e) {
                            var i;
                            switch (e) {
                            case "buffering":
                                i = r.buffer;
                                break;
                            case "playing":
                                i = r.pause;
                                break;
                            case "idle":
                            case "paused":
                                i = r.playback;
                                break;
                            case "complete":
                                i = r.replay;
                                break;
                            default:
                                i = ""
                            }
                            "" !== i ? s.setAttribute("aria-label", i) : s.removeAttribute("aria-label")
                        })), e.get("displayPlaybackLabel")) {
                        var c = o.icon.getElementsByClassName("jw-idle-icon-text")[0];
                        c || (c = (0, l.az)('<div class="jw-idle-icon-text">' + r.playback + "</div>"), (0, l.cn)(o.icon, "jw-idle-label"), o.icon.appendChild(c))
                    }
                    return o
                }
                return (0, r.Z)(e, t), e.prototype.element = function () {
                    return this.el
                }, e
            }(s.ZP),
            u = function () {
                function t(t, e, i) {
                    var n = i.querySelector(".jw-icon");
                    this.ui = (0, a.Z)(n, (function () {
                        e.next({
                            reason: "interaction"
                        })
                    })), t.change("nextUp", (function (t, e) {
                        i.style.visibility = e ? "" : "hidden"
                    })), this.el = i
                }
                return t.prototype.element = function () {
                    return this.el
                }, t
            }(),
            d = i(7191),
            h = function (t, e, i, n, a, o, r) {
                var s = n.querySelector(".jw-display-icon-" + t),
                    l = n.querySelector(".jw-icon-" + t);
                e.forEach((function (t) {
                    l.appendChild(t)
                })), a[t] = new i(o, r, s)
            },
            p = function () {
                function t(t, e) {
                    var i;
                    this.el = (0, l.az)((i = t.get("localization"), '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                    var a = this.el.querySelector(".jw-display-controls"),
                        r = {};
                    h("rewind", (0, d.o)("rewind"), o, a, r, t, e), h("display", (0, d.o)("play,pause,buffer,replay"), c, a, r, t, e), h("next", (0, d.o)("next"), u, a, r, t, e), this.container = a, this.buttons = r
                }
                var e = t.prototype;
                return e.element = function () {
                    return this.el
                }, e.destroy = function () {
                    var t = this.buttons;
                    Object.keys(t).forEach((function (e) {
                        t[e].ui && t[e].ui.destroy()
                    }))
                }, t
            }()
    },
    7191: function (t, e, i) {
        "use strict";
        i.d(e, {
            W: function () {
                return ut
            },
            o: function () {
                return dt
            }
        });
        var n = i(147),
            a = i.n(n),
            o = i(4886),
            r = i.n(o),
            s = i(4777),
            l = i.n(s),
            c = i(6084),
            u = i.n(c),
            d = i(2521),
            h = i.n(d),
            p = i(6207),
            w = i.n(p),
            f = i(6641),
            g = i.n(f),
            m = i(3498),
            j = i.n(m),
            v = i(3918),
            y = i.n(v),
            b = i(3356),
            k = i.n(b),
            x = i(8157),
            T = i.n(x),
            C = i(5806),
            _ = i.n(C),
            M = i(7766),
            S = i.n(M),
            E = i(4851),
            A = i.n(E),
            I = i(3207),
            L = i.n(I),
            B = i(7938),
            P = i.n(B),
            z = i(4060),
            Z = i.n(z),
            R = i(4119),
            V = i.n(R),
            F = i(9992),
            H = i.n(F),
            O = i(6038),
            N = i.n(O),
            D = i(5058),
            U = i.n(D),
            q = i(7459),
            W = i.n(q),
            Q = i(4606),
            X = i.n(Q),
            Y = i(1438),
            $ = i.n(Y),
            K = i(5147),
            G = i.n(K),
            J = i(9863),
            tt = i.n(J),
            et = i(2494),
            it = i.n(et),
            nt = i(8675),
            at = i.n(nt),
            ot = i(4667),
            rt = null,
            st = function () {
                return rt || (rt = (0, ot.Z)("<xml>" + a() + r() + l() + u() + h() + w() + g() + j() + y() + k() + T() + _() + S() + A() + L() + P() + Z() + V() + H() + N() + U() + $() + G() + W() + X() + tt() + it() + at() + "</xml>")), rt
            },
            lt = function (t) {
                return ".jw-svg-icon-" + t
            },
            ct = function (t) {
                return t.cloneNode(!0)
            },
            ut = function (t) {
                var e = st().querySelector(lt(t));
                return e ? ct(e) : null
            },
            dt = function (t) {
                var e = st().querySelectorAll(t.split(",").map(lt).join(","));
                return Array.prototype.map.call(e, (function (t) {
                    return ct(t)
                }))
            }
    },
    3163: function (t, e, i) {
        "use strict";
        i.d(e, {
            Ge: function () {
                return o
            },
            dr: function () {
                return s
            },
            v2: function () {
                return r
            }
        });
        var n = i(4060),
            a = i.n(n),
            o = function (t) {
                return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" dir="auto">' + t + "</button>"
            },
            r = function (t) {
                var e = t.label;
                return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + e + '" aria-controls="jw-settings-submenu-' + t.name + '" aria-expanded="false" dir="auto">' + e + "<div class='jw-reset jw-settings-value-wrapper'><div class=\"jw-reset-text jw-settings-content-item-value\">" + t.currentSelection + '</div><div class="jw-reset-text jw-settings-content-item-arrow">' + a() + "</div></div></button>"
            },
            s = function (t) {
                return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" role="menuitemradio" aria-checked="false" dir="auto">' + t + "</button>"
            }
    },
    7509: function (t, e, i) {
        "use strict";
        i.d(e, {
            E6: function () {
                return a
            },
            Z2: function () {
                return o
            },
            qF: function () {
                return n
            }
        });
        var n = function (t, e) {
                return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu" class="jw-reset jw-settings-menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>'
            },
            a = function (t, e) {
                return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" aria-expanded="false"></div>'
            },
            o = function (t, e, i) {
                return '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-' + e + '"><div class="jw-reset jw-reset-text jw-settings-topbar-text">' + i + '</div><div class="jw-reset jw-settings-submenu-items"></div></div>'
            }
    },
    5187: function (t, e, i) {
        "use strict";
        var n = i(974),
            a = i(2799),
            o = i(8348),
            r = function () {
                function t(t) {
                    this.model = t.player, this.truncated = t.get("__ab_truncated") && !o.Browser.ie
                }
                var e = t.prototype;
                return e.hide = function () {
                    (0, n.oB)(this.el, {
                        display: "none"
                    })
                }, e.show = function () {
                    (0, n.oB)(this.el, {
                        display: ""
                    })
                }, e.setup = function (t) {
                    if (this.el = t, this.el) {
                        var e = this.el.getElementsByTagName("div");
                        this.title = e[0], this.description = e[1], this.truncated && this.el.classList.add("jw-ab-truncated"), this.model.on("change:logoWidth", this.update, this), this.model.change("playlistItem", this.playlistItem, this)
                    }
                }, e.update = function (t) {
                    var e = {},
                        i = t.get("logo");
                    if (i) {
                        var a = 1 * parseInt(("" + i.margin).replace("px", ""), 10),
                            o = t.get("logoWidth") + (isNaN(a) ? 0 : a + 10);
                        "top-left" === i.position ? e.paddingLeft = o : "top-right" === i.position && (e.paddingRight = o)
                    }(0, n.oB)(this.el, e)
                }, e.playlistItem = function (t, e) {
                    if (e)
                        if (t.get("displaytitle") || t.get("displaydescription")) {
                            var i = "",
                                n = "";
                            "string" == typeof e.title && t.get("displaytitle") && (i = e.title), "string" == typeof e.description && t.get("displaydescription") && (n = e.description), this.updateText(i, n)
                        } else this.hide()
                }, e.updateText = function (t, e) {
                    this.title && this.description && ((0, a.nh)(this.title, (0, a.Ww)(t)), (0, a.nh)(this.description, (0, a.Ww)(e)), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
                }, e.element = function () {
                    return this.el
                }, t
            }();
        e.Z = r
    },
    5646: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return a
            }
        });
        var n = i(5882),
            a = function (t, e, i) {
                return new n.ZP(t).on("click enter", e, i)
            }
    },
    6436: function (t, e, i) {
        "use strict";
        i.d(e, {
            d: function () {
                return o
            },
            i: function () {
                return a
            }
        });
        var n = i(2799),
            a = function (t) {
                var e = -1;
                return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
            },
            o = function (t, e) {
                var i = "jw-breakpoint-" + e;
                (0, n.L_)(t, /jw-breakpoint--?\d+/, i)
            }
    },
    8446: function (t, e, i) {
        "use strict";
        i.d(e, {
            FM: function () {
                return o
            },
            Sf: function () {
                return s
            },
            xq: function () {
                return r
            }
        });
        var n = i(2957),
            a = i(974),
            o = function (t) {
                return t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2")
            },
            r = function (t) {
                t || (t = {});
                var e = t.active,
                    i = t.inactive,
                    n = t.background,
                    o = {};
                return o.controlbar = function (t) {
                    if (t || e || i || n) {
                        var a = {};
                        return t = t || {}, a.iconsActive = t.iconsActive || e, a.icons = t.icons || i, a.text = t.text || i, a.background = t.background || n, a
                    }
                }(t.controlbar), o.timeslider = function (t) {
                    if (t || e) {
                        var i = {};
                        return t = t || {}, i.progress = t.progress || e, i.rail = t.rail, i.buffer = t.buffer, !i.buffer && i.progress && (i.buffer = (0, a.HY)(i.progress, 50)), i.knob = t.knob || i.progress, i.ads = t.ads || n, i
                    }
                }(t.timeslider), o.menus = function (t) {
                    if (t || e || i || n) {
                        var a = {};
                        return t = t || {}, a.text = t.text || i, a.textActive = t.textActive || e, a.background = t.background || n, a
                    }
                }(t.menus), o.tooltips = function (t) {
                    if (t || i || n) {
                        var e = {};
                        return t = t || {}, e.text = t.text || i, e.background = t.background || n, e
                    }
                }(t.tooltips), o
            },
            s = function (t, e) {
                if (e) {
                    var i, o = function (e, i, o, r) {
                        if (o) {
                            e = (0, n.O4)(e, "#" + t + (r ? "" : " "));
                            var s = {};
                            s[i] = o, (0, a.iv)(e.join(", "), s, t)
                        }
                    };
                    e.controlbar && (i = e.controlbar, o([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", i.text), i.icons && (o([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", i.icons), o([".jw-display-icon-container .jw-button-color"], "color", i.icons), (0, a.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + i.icons + "}", t)), i.iconsActive && (o([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", i.iconsActive), o([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", i.iconsActive), o([".jw-svg-icon-buffer"], "fill", i.icons), (0, a.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + i.iconsActive + "}", t), (0, a.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + i.iconsActive + "}", t)), o([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", i.background, !0)), e.timeslider && function (t) {
                        var e = t.progress,
                            i = t.buffer,
                            n = t.rail,
                            r = t.knob,
                            s = t.ads;
                        e && "none" !== e && (o([".jw-progress"], "background-color", e), o([".jw-slider-volume .jw-buffer"], "background-color", (0, a.HY)(e, 50))), i && "none" !== i && o([".jw-slider-time .jw-buffer"], "background-color", i), s && "none" !== s && o([".jw-slider-time .jw-cue-type-ads"], "background-color", s), r && "none" !== r && o([".jw-knob"], "background-color", r), n && "none" !== n && o([".jw-rail"], "background-color", n), o([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
                    }(e.timeslider), e.menus && function (t) {
                        o([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", t.text), o([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", t.textActive), o([".jw-nextup", ".jw-settings-menu"], "background", t.background)
                    }(e.menus), e.tooltips && function (t) {
                        o([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background), o([".jw-time-tip", ".jw-tooltip"], "color", t.background), o([".jw-skip"], "border", "none"), o([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
                    }(e.tooltips), e.menus && function (e) {
                        if (e.textActive) {
                            var i = {
                                color: e.textActive,
                                borderColor: e.textActive,
                                stroke: e.textActive
                            };
                            (0, a.iv)("#" + t + " .jw-color-active", i, t), (0, a.iv)("#" + t + " .jw-color-active-hover:hover", i, t)
                        }
                        if (e.text) {
                            var n = {
                                color: e.text,
                                borderColor: e.text,
                                stroke: e.text
                            };
                            (0, a.iv)("#" + t + " .jw-color-inactive", n, t), (0, a.iv)("#" + t + " .jw-color-inactive-hover:hover", n, t)
                        }
                    }(e.menus)
                }
            }
    },
    8151: function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, {
            default: function () {
                return Oe
            }
        });
        var n = i(1918),
            a = i(1643),
            o = i(7462),
            r = i(6391),
            s = i(623),
            l = i(5191),
            c = ["notVisible", "always", "never"],
            u = i(9128),
            d = i(7263),
            h = i(8320),
            p = i(658),
            w = i(2957),
            f = i(328),
            g = i(3144),
            m = i(4578),
            j = i(2303),
            v = i(7326),
            y = function () {
                function t(t) {
                    this.callback = t
                }
                var e = t.prototype;
                return e.async = function () {
                    for (var t = this, e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return Promise.resolve().then((function () {
                        if (null !== t.callback) return t.callback.apply(t, i)
                    }))
                }, e.cancel = function () {
                    this.callback = null
                }, e.cancelled = function () {
                    return null === this.callback
                }, t
            }();

        function b(t) {
            return new y(t)
        }
        var k = i(4446),
            x = i(6042),
            T = function (t, e) {
                var i = this.mediaModel,
                    n = (0, o.Z)({}, e, {
                        type: t
                    });
                switch (t) {
                case a.oZ:
                    if (i.get(a.oZ) === n.mediaType) return;
                    i.set(a.oZ, n.mediaType);
                    break;
                case a.ug:
                    return void i.set(a.ug, (0, o.Z)({}, e));
                case a.gy:
                    if (e[a.gy] === this.model.getMute()) return;
                    break;
                case a.uc:
                    var r = e.newstate;
                    r === a.bc && (this.thenPlayPromise.cancel(), i.srcReset());
                    var s = i.attributes.mediaState;
                    i.attributes.mediaState = r, i.trigger("change:mediaState", i, r, s);
                    break;
                case a.Ms:
                    return this.beforeComplete = !0, this.trigger(a.s$, n), void(this.attached && !this.background && this._playbackComplete());
                case a.Ew:
                    i.get("setup") ? (this.thenPlayPromise.cancel(), i.srcReset()) : (t = a.cM, n.code += 1e5);
                    break;
                case a.rx:
                    var l = e,
                        c = l.duration,
                        u = l.metadataType,
                        d = l.seekRange;
                    u || (n.metadataType = "unknown"), (0, x.qh)(c) && (i.set("seekRange", d), i.set("duration", c));
                    break;
                case a.uT:
                    i.set("buffer", e.bufferPercent);
                case a.R2:
                    var h = e;
                    i.set("seekRange", h.seekRange), i.set("position", h.position), i.set("currentTime", h.currentTime);
                    var p = h.duration;
                    (0, x.qh)(p) && i.set("duration", p), t === a.R2 && "starttime" in this.item && delete this.item.starttime;
                    break;
                case a.aQ:
                    var w = this.mediaElement;
                    w && w.paused && i.set("mediaState", "paused");
                    break;
                case a.UZ:
                    i.set(a.UZ, e.levels);
                case a.aM:
                    var f = e,
                        g = f.currentQuality,
                        m = f.levels;
                    g > -1 && m.length > 1 && i.set("currentLevel", parseInt(g, 10));
                    break;
                case a.j0:
                    i.set(a.j0, e.tracks);
                case a._B:
                    var j = e,
                        v = j.currentTrack,
                        y = j.tracks;
                    v > -1 && y.length > 0 && v < y.length && i.set("currentAudioTrack", parseInt(v, 10))
                }
                this.trigger(t, n)
            },
            C = function (t, e) {
                var i = this.model;
                switch (t) {
                case a.uc:
                    return;
                case a.yH:
                    return void i.set(a.yH, e[a.yH]);
                case a.gy:
                    return void i.set(a.gy, e[a.gy]);
                case a.TJ:
                    return void i.set("playbackRate", e.playbackRate);
                case a.rx:
                    (0, o.Z)(i.get("itemMeta"), e.metadata);
                    break;
                case a.aM:
                    i.persistQualityLevel(e.currentQuality, e.levels);
                    break;
                case a.UF:
                    i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                    break;
                case a.R2:
                    e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
                case a.NZ:
                case a.aQ:
                case a.h7:
                case a.jt:
                case "subtitlesTracksData":
                    i.trigger(t, e);
                    break;
                case a.qG:
                    return void i.persistBandwidthEstimate(e.bandwidthEstimate)
                }
                this.trigger(t, e)
            },
            _ = i(8348),
            M = i(7753),
            S = i(9918),
            E = i(8381),
            A = function (t) {
                function e() {
                    var e;
                    return (e = t.call(this) || this).addAttributes({
                        mediaState: a.bc
                    }), e
                }
                return (0, m.Z)(e, t), e.prototype.srcReset = function () {
                    (0, o.Z)(this.attributes, {
                        setup: !1,
                        started: !1,
                        preloaded: !1,
                        visualQuality: null,
                        buffer: 0,
                        currentTime: 0
                    })
                }, e
            }(M.Z),
            I = function (t) {
                function e() {
                    var e;
                    return (e = t.call(this) || this).providerController = null, e._provider = null, e.addAttributes({
                        mediaModel: new A,
                        minDvrWindow: S.ni,
                        dvrSeekLimit: S.OG
                    }), e
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.setup = function (t) {
                    return t = t || {}, this._normalizeConfig(t), (0, o.Z)(this.attributes, t, S.bv), this.providerController = new j.Z(this.getConfiguration()), this.setAutoStart(), this
                }, i.getConfiguration = function () {
                    var t = this.clone(),
                        e = t.mediaModel.attributes;
                    return Object.keys(S.L4).forEach((function (i) {
                        t[i] = e[i]
                    })), t.instreamMode = Boolean(t.instream), delete t.instream, delete t.mediaModel, t
                }, i.persistQualityLevel = function (t, e) {
                    var i = e[t] || {},
                        n = i.label,
                        a = (0, x.qh)(i.bitrate) ? i.bitrate : null;
                    this.set("bitrateSelection", a), this.set("qualityLabel", n)
                }, i.setActiveItem = function (t) {
                    var e = this.get("playlist")[t];
                    this.resetItem(e), this.attributes.playlistItem = null, this.set("item", t), this.set("minDvrWindow", e.minDvrWindow), this.set("dvrSeekLimit", e.dvrSeekLimit || S.OG), this.set("playlistItem", e)
                }, i.setMediaModel = function (t) {
                    this.mediaModel && this.mediaModel !== t && this.mediaModel.off(), t = t || new A, this.mediaModel = t,
                        function (t) {
                            var e = t.get("mediaState");
                            t.trigger("change:mediaState", t, e, e)
                        }(t)
                }, i.destroy = function () {
                    this.attributes._destroyed = !0, this.off(), this._provider && (this._provider.off(null, null, this), this._provider.destroy(), this._provider = null), this.mediaModel && this.mediaModel.off(), this.providerController = null
                }, i.getVideo = function () {
                    return this._provider
                }, i.setFullscreen = function (t) {
                    (t = Boolean(t)) !== this.get("fullscreen") && this.set("fullscreen", t)
                }, i.getProviders = function () {
                    return this.providerController
                }, i.setVolume = function (t) {
                    if ((0, x.qh)(t)) {
                        var e = Math.min(Math.max(0, t), 100);
                        this.set("volume", e);
                        var i = 0 === e;
                        i !== this.getMute() && this.setMute(i)
                    }
                }, i.getMute = function () {
                    return this.get("autostartMuted") || this.get("mute")
                }, i.setMute = function (t) {
                    if (void 0 === t && (t = !this.getMute()), this.set("mute", Boolean(t)), !t) {
                        var e = Math.max(10, this.get("volume"));
                        this.set("autostartMuted", !1), this.setVolume(e)
                    }
                }, i.setStreamType = function (t) {
                    this.set("streamType", t), "LIVE" === t && this.setPlaybackRate(1)
                }, i.setProvider = function (t) {
                    this._provider = t,
                        function (t, e) {
                            t.set("provider", e.getName()), !0 === t.get("instreamMode") && (e.instreamMode = !0), t.setPlaybackRate(t.get("defaultPlaybackRate")), t.set("supportsPlaybackRate", e.supportsPlaybackRate), t.set("playbackRate", e.getPlaybackRate()), t.set("renderCaptionsNatively", e.renderNatively)
                        }(this, t)
                }, i.resetProvider = function () {
                    this._provider = null, this.set("provider", void 0)
                }, i.setPlaybackRate = function (t) {
                    (0, x.hj)(t) && (t = Math.max(Math.min(t, 4), .25), "LIVE" === this.get("streamType") && (t = 1), this.set("defaultPlaybackRate", t), this._provider && this._provider.setPlaybackRate && this._provider.setPlaybackRate(t))
                }, i.persistCaptionsTrack = function () {
                    var t = this.get("captionsTrack");
                    t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
                }, i.setVideoSubtitleTrack = function (t, e) {
                    this.set("captionsIndex", t), t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
                }, i.persistVideoSubtitleTrack = function (t, e) {
                    this.setVideoSubtitleTrack(t, e), this.persistCaptionsTrack()
                }, i.setAutoStart = function (t) {
                    void 0 !== t && this.set("autostart", t);
                    var e = Boolean(_.OS.mobile && this.get("autostart"));
                    this.set("playOnViewable", e || "viewable" === this.get("autostart"))
                }, i.setCues = function (t) {
                    var e = this.get("playlistItem");
                    e.chapters = (0, E._b)(t, e.chapters);
                    var i = t.filter((function (t) {
                        return "chapters" !== t.cueType
                    }));
                    this.set("cues", i), this.set("playlistItem", e), this.trigger("change:chapters", this)
                }, i.getCues = function () {
                    var t = this.get("playlistItem").chapters,
                        e = (0, E.$W)(t, this.mediaModel.get("duration"));
                    return (this.get("cues") || []).concat(e)
                }, i.resetItem = function (t) {
                    var e = t ? (0, w.m9)(t.starttime) : 0,
                        i = t ? (0, w.m9)(t.duration) : 0,
                        n = this.mediaModel;
                    this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", e), n.set("currentTime", 0), n.set("duration", i)
                }, i.persistBandwidthEstimate = function (t) {
                    (0, x.qh)(t) && this.set("bandwidthEstimate", t)
                }, i._normalizeConfig = function (t) {
                    var e = t.floating;
                    e && Boolean(e.disabled) && delete t.floating
                }, e
            }(M.Z),
            L = I,
            B = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this) || this).attached = !0, n.beforeComplete = !1, n.item = null, n.mediaModel = new A, n.model = i, n.provider = e, n.providerListener = T, n.thenPlayPromise = b((function () {})), e.off(), e.on("all", n.providerListener, (0, v.Z)(n)), n.eventQueue = new u.Z((0, v.Z)(n), ["trigger"], (function () {
                        return !n.attached || n.background
                    })), n
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.play = function (t) {
                    var e = this.item,
                        i = this.model,
                        n = this.mediaModel,
                        a = this.provider;
                    if (t || (t = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return a.play() || Promise.resolve();
                    n.set("setup", !0);
                    var o = this._loadAndPlay(e, a);
                    return n.get("started") ? o : this._playAttempt(o, t)
                }, i.stop = function () {
                    var t = this.provider;
                    this.beforeComplete = !1, t.stop()
                }, i.pause = function () {
                    this.provider.pause()
                }, i.preload = function () {
                    var t = this.item,
                        e = this.mediaModel,
                        i = this.provider;
                    !t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0), i.preload(t))
                }, i.destroy = function () {
                    var t = this.provider,
                        e = this.mediaModel;
                    this.off(), e.off(), t.off(), this.eventQueue.destroy(), this.detach(), t.getContainer() && t.remove(), this.eventQueue && this.eventQueue.destroy(), delete t.instreamMode, this.thenPlayPromise && this.thenPlayPromise.cancel(), this.provider = this.mediaModel = this.model = this.eventQueue = this.item = this.providerListener = this.thenPlayPromise = null
                }, i.attach = function () {
                    var t = this.model,
                        e = this.provider;
                    t.setPlaybackRate(t.get("defaultPlaybackRate")), e.attachMedia(), this.attached = !0, this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()
                }, i.detach = function () {
                    var t = this.provider;
                    this.thenPlayPromise.cancel();
                    var e = t.detachMedia();
                    return this.attached = !1, e
                }, i._playAttempt = function (t, e) {
                    var i = this,
                        n = this.item,
                        r = this.mediaModel,
                        s = this.model,
                        l = this.provider,
                        c = l ? l.video : null;
                    return this.trigger(a.cq, {
                        item: n,
                        playReason: e
                    }), (c ? c.paused : s.get(a.uc) !== a.r0) || s.set(a.uc, a.Kb), t.then((function () {
                        r.get("setup") && (r.set("started", !0), r === s.mediaModel && function (t) {
                            var e = t.get("mediaState");
                            t.trigger("change:mediaState", t, e, e)
                        }(r))
                    })).catch((function (t) {
                        if (i.item && r === s.mediaModel) {
                            if (s.set("playRejected", !0), c && c.paused) {
                                if (c.src === location.href) return i._loadAndPlay(n, l);
                                r.set("mediaState", a._5)
                            }
                            var u = (0, o.Z)(new k.rG(null, (0, k.nm)(t), t), {
                                error: t,
                                item: n,
                                playReason: e
                            });
                            throw delete u.key, i.trigger(a.Je, u), t
                        }
                    }))
                }, i._playbackComplete = function () {
                    var t = this.item,
                        e = this.provider;
                    t && delete t.starttime, this.beforeComplete = !1, e.setState(a.xQ), this.trigger(a.Ms, {})
                }, i._loadAndPlay = function () {
                    var t = this,
                        e = this.item,
                        i = this.provider,
                        n = i.load(e);
                    if (n) {
                        var a = b((function () {
                            return t.provider.play() || Promise.resolve()
                        }));
                        return this.thenPlayPromise = a, n.then((function () {
                            return a.async()
                        }))
                    }
                    return i.play() || Promise.resolve()
                }, (0, g.Z)(e, [{
                    key: "audioTracks",
                    get: function () {
                        return this.provider.getAudioTracks()
                    }
                }, {
                    key: "mediaElement",
                    get: function () {
                        return this.provider.video
                    }
                }, {
                    key: "preloaded",
                    get: function () {
                        return this.mediaModel.get("preloaded")
                    }
                }, {
                    key: "qualities",
                    get: function () {
                        return this.provider.getQualityLevels()
                    }
                }, {
                    key: "setup",
                    get: function () {
                        return this.mediaModel.get("setup")
                    }
                }, {
                    key: "started",
                    get: function () {
                        return this.mediaModel.get("started")
                    }
                }, {
                    key: "activeItem",
                    get: function () {
                        return this.provider.activeItem
                    },
                    set: function (t) {
                        var e = this.mediaModel = new A,
                            i = t ? (0, w.m9)(t.starttime) : 0,
                            n = t ? (0, w.m9)(t.duration) : 0,
                            a = e.attributes;
                        e.srcReset(), a.position = i, a.duration = n, this.item = t, this.provider.init(t)
                    }
                }, {
                    key: "audioTrack",
                    get: function () {
                        return this.provider.getCurrentAudioTrack()
                    },
                    set: function (t) {
                        this.provider.setCurrentAudioTrack(t)
                    }
                }, {
                    key: "background",
                    get: function () {
                        if (!this.attached) return !1;
                        var t = this.provider;
                        if (!t.video) return !1;
                        var e = t.getContainer();
                        return !e || e && !e.contains(t.video)
                    },
                    set: function (t) {
                        var e = this.provider;
                        if (e.video) {
                            var i = e.getContainer();
                            i && (t ? this.background || (this.thenPlayPromise.cancel(), this.pause(), e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video), this.container = null) : (this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()))
                        } else t ? this.detach() : this.attach()
                    }
                }, {
                    key: "container",
                    get: function () {
                        return this.provider.getContainer()
                    },
                    set: function (t) {
                        this.provider.setContainer(t)
                    }
                }, {
                    key: "controls",
                    get: function () {
                        return this.provider.controls
                    },
                    set: function (t) {
                        this.provider.setControls(t)
                    }
                }, {
                    key: "mute",
                    get: function () {
                        return this.provider.getMute()
                    },
                    set: function (t) {
                        this.provider.mute(t)
                    }
                }, {
                    key: "position",
                    get: function () {
                        return this.provider.position
                    },
                    set: function (t) {
                        var e = this.provider;
                        this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
                    }
                }, {
                    key: "quality",
                    get: function () {
                        return this.provider.getCurrentQuality()
                    },
                    set: function (t) {
                        this.provider.setCurrentQuality(t)
                    }
                }, {
                    key: "subtitles",
                    get: function () {
                        return this.provider.subtitles
                    },
                    set: function (t) {
                        this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
                    }
                }, {
                    key: "volume",
                    get: function () {
                        return this.provider.volume
                    },
                    set: function (t) {
                        this.provider.volume(t)
                    }
                }]), e
            }(f.ZP);

        function P(t) {
            return P = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, P(t)
        }
        var z = i(9611);

        function Z() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }

        function R(t, e, i) {
            return R = Z() ? Reflect.construct : function (t, e, i) {
                var n = [null];
                n.push.apply(n, e);
                var a = new(Function.bind.apply(t, n));
                return i && (0, z.Z)(a, i.prototype), a
            }, R.apply(null, arguments)
        }

        function V(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return V = function (t) {
                if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                var i;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, n)
                }

                function n() {
                    return R(t, arguments, P(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), (0, z.Z)(n, t)
            }, V(t)
        }
        var F = i(393),
            H = function (t) {
                function e(e) {
                    var i;
                    return (i = t.call(this, e) || this).code = k._M, i
                }
                return (0, m.Z)(e, t), e
            }(V(Error)),
            O = function () {
                function t(t, e, i) {
                    var n = this;
                    this.index = t, this.model = e, this.api = i, this.promise = new Promise((function (t, e) {
                        n.resolve = t, n.reject = e
                    })), this.async = null, this.asyncPromise = null, this.rejected = !1
                }
                var e = t.prototype;
                return e.run = function () {
                    var t = this,
                        e = this.api,
                        i = this.async,
                        n = this.index,
                        a = this.model,
                        o = this.resolve,
                        r = this.reject,
                        s = this.promise,
                        l = a.get("playlist"),
                        c = this.getItem(n);
                    if (!c) {
                        var u = -1 === n ? "No recs item" : "No playlist item at index " + n;
                        this.rejected = !0, r(new Error(u))
                    }
                    if (i) {
                        this.clear();
                        var d = this.asyncPromise = i.call(e, c, n);
                        d && d.then ? d.then((function (e) {
                            if (e && e !== c && l === a.get("playlist")) {
                                var i = t.replace(e);
                                if (i) return t.model.set("playlistItem", i), void o(i)
                            }
                            o(c)
                        })).catch((function (e) {
                            var i = new H("Item skipped by playlist item callback");
                            i.sourceError = e, t.rejected = !0, r(i)
                        })) : this.asyncPromise = null
                    }
                    return this.asyncPromise || o(c), s
                }, e.getItem = function (t) {
                    var e = this.model;
                    return -1 === t ? e.get("nextUp") : e.get("playlist")[t]
                }, e.replace = function (t) {
                    var e = this.index,
                        i = this.model,
                        n = (0, h.YF)(i, new F.Z(t), t.feedData || {});
                    if (n) {
                        if (-1 === e) i.set("nextUp", n);
                        else i.get("playlist")[e] = n;
                        return n
                    }
                }, e.clear = function () {
                    this.async = null
                }, e.destroy = function () {
                    this.model = this.api = this.promise = this.resolve = this.reject = this.async = this.asyncPromise = null
                }, (0, g.Z)(t, [{
                    key: "callback",
                    set: function (t) {
                        this.async = t
                    }
                }, {
                    key: "skipped",
                    get: function () {
                        return this.rejected
                    }
                }]), t
            }(),
            N = function (t, e) {
                t.off().on("all", e.mediaControllerListener, e)
            },
            D = function (t) {
                return t && t.sources && t.sources[0]
            },
            U = function (t) {
                function e(e, i, n) {
                    var a, o, r;
                    return (a = t.call(this) || this).adPlaying = !1, a.apiContext = n, a.background = (o = null, r = null, {
                        setNext: function (t, e) {
                            r = {
                                item: t,
                                loadPromise: e
                            }
                        },
                        isNext: function (t) {
                            return Boolean(r && JSON.stringify(r.item.sources[0]) === JSON.stringify(t.sources[0]))
                        },
                        updateNext: function (t) {
                            r && (r.item = t)
                        },
                        clearNext: function () {
                            r = null
                        },
                        get nextLoadPromise() {
                            return r ? r.loadPromise : null
                        },
                        get currentMedia() {
                            return o
                        },
                        set currentMedia(t) {
                            o = t
                        }
                    }), a.mediaPool = i, a.mediaController = null, a.mediaControllerListener = C, a.model = e, a.providers = new j.Z(e.getConfiguration()), a.loadPromise = null, a.backgroundLoading = e.get("backgroundLoading"), a.asyncItems = [], a.itemSetContext = 0, a.backgroundLoading || e.set("mediaElement", a.mediaPool.getPrimedElement()), a
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.asyncActiveItem = function (t) {
                    var e = this,
                        i = this.model,
                        n = setTimeout((function () {
                            i.set(a.uc, a.Kb)
                        }), 50);
                    return this.getAsyncItem(t).run().then((function (t) {
                        return clearTimeout(n), t
                    })).catch((function (a) {
                        if (clearTimeout(n), t < i.get("playlist").length - 1) return e.setActiveItem(t + 1).then((function () {
                            return null
                        }));
                        throw a
                    }))
                }, i.setActiveItem = function (t) {
                    var e = this,
                        i = this.background,
                        n = this.mediaController,
                        a = this.model,
                        o = a.get("playlist")[t];
                    a.attributes.itemReady = !1, n && (n.mediaModel.off(), a.attributes.mediaModel = new A, a.mediaModel.attributes = n.mediaModel.clone()), i.isNext(o) || this._destroyBackgroundMedia();
                    var r = this.itemSetContext = Math.random();
                    return this.loadPromise = this.asyncActiveItem(t).then((function (o) {
                        if (null === o || r !== e.itemSetContext || null === e.providers) return null;
                        a.setActiveItem(t);
                        var s = D(o);
                        if (!s) return Promise.reject(new k.rG(k.ul, k.o2));
                        if (i.isNext(o)) return e._destroyActiveMedia(), e._activateBackgroundMedia();
                        if (n) {
                            if (a.get("castActive") || e._providerCanPlay(n.provider, s)) return n.activeItem = o, e._setActiveMedia(n), n;
                            e._destroyActiveMedia()
                        }
                        return e._setupMediaController(s).then((function (t) {
                            if (r === e.itemSetContext) return t.activeItem = o, e._setActiveMedia(t), t
                        })).catch((function (t) {
                            throw e._destroyActiveMedia(), t
                        }))
                    }))
                }, i.setAttached = function (t) {
                    var e = this.mediaController;
                    if (this.attached = t, e) {
                        if (!t) {
                            var i = e.detach(),
                                n = e.item,
                                a = e.mediaModel.get("position");
                            return a && (n.starttime = a), i
                        }
                        e.attach()
                    }
                }, i.playVideo = function (t) {
                    var e, i = this,
                        n = this.mediaController,
                        o = this.model;
                    if (!o.get("playlistItem")) return Promise.reject(new Error("No media"));
                    if (t || (t = o.get("playReason")), n) e = n.play(t);
                    else {
                        o.set(a.uc, a.Kb);
                        var r = b((function (e) {
                            if (i.mediaController && i.mediaController.mediaModel === e.mediaModel) return e.play(t);
                            throw new Error("Playback cancelled.")
                        }));
                        e = (this.loadPromise || Promise.resolve()).catch((function (t) {
                            throw r.cancel(), t
                        })).then((function () {
                            return r.async()
                        }))
                    }
                    return e
                }, i.stopVideo = function () {
                    var t = this.mediaController,
                        e = this.model,
                        i = e.get("playlist")[e.get("item")];
                    e.attributes.playlistItem = i, e.resetItem(i), t && t.stop()
                }, i.preloadVideo = function () {
                    var t = this.background,
                        e = this.mediaController || t.currentMedia;
                    e && e.preload()
                }, i.pause = function () {
                    var t = this.mediaController;
                    t && t.pause()
                }, i.castVideo = function (t, e) {
                    var i = this.model;
                    i.attributes.itemReady = !1;
                    var n = (0, o.Z)({}, e),
                        a = n.starttime = i.mediaModel.get("currentTime");
                    this._destroyActiveMedia();
                    var r = new B(t, i);
                    r.activeItem = n, this._setActiveMedia(r), i.mediaModel.set("currentTime", a)
                }, i.stopCast = function () {
                    var t = this.model,
                        e = t.get("item");
                    t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"), this.stopVideo(), this.setActiveItem(e).catch((function () {}))
                }, i.backgroundActiveMedia = function () {
                    this.adPlaying = !0;
                    var t = this.background,
                        e = this.mediaController;
                    e && (t.currentMedia && this._destroyMediaController(t.currentMedia), e.background = !0, t.currentMedia = e, this.mediaController = null)
                }, i.restoreBackgroundMedia = function () {
                    this.adPlaying = !1;
                    var t = this.background,
                        e = this.mediaController,
                        i = t.currentMedia;
                    if (i) {
                        if (e && e !== i) return this._destroyMediaController(i), void(t.currentMedia = null);
                        var n = i.mediaModel.attributes;
                        n.mediaState === a.bc ? n.mediaState = a._5 : n.mediaState !== a._5 && (n.mediaState = a.Kb), this._setActiveMedia(i), i.background = !1, t.currentMedia = null
                    }
                }, i.backgroundLoad = function (t, e) {
                    var i = this,
                        n = this.background,
                        a = this.getAsyncItem(e).run().then((function (t) {
                            n.updateNext(t);
                            var e = D(t);
                            return i._setupMediaController(e).then((function (e) {
                                return e.activeItem = t, e.preload(), e
                            }))
                        })).catch((function () {
                            n.clearNext()
                        }));
                    n.setNext(t, a)
                }, i.forwardEvents = function () {
                    var t = this.mediaController;
                    t && N(t, this)
                }, i.routeEvents = function (t) {
                    var e = this.mediaController;
                    e && (e.off(), t && N(e, t))
                }, i.destroy = function () {
                    this.off(), this._destroyBackgroundMedia(), this._destroyActiveMedia(), this.asyncItems && this.asyncItems.forEach((function (t) {
                        t && t.destroy()
                    })), this.asyncItems = this.loadPromise = this.mediaControllerListener = this.model = this.providers = this.apiContext = null
                }, i._setActiveMedia = function (t) {
                    var e = this.model,
                        i = t.mediaModel,
                        n = t.provider;
                    ! function (t, e) {
                        var i = t.get("mediaContainer");
                        i ? e.container = i : t.once("change:mediaContainer", (function (t, i) {
                            e.container = i
                        }))
                    }(e, t), this.mediaController = t, e.set("mediaElement", t.mediaElement), e.setMediaModel(i), e.setProvider(n), N(t, this), e.set("itemReady", !0)
                }, i._destroyActiveMedia = function () {
                    var t = this.mediaController,
                        e = this.model;
                    t && t.provider && (t.detach(), this._destroyMediaController(t), e.resetProvider(), this.mediaController = null)
                }, i._destroyBackgroundMedia = function () {
                    var t = this.background;
                    this._destroyMediaController(t.currentMedia), t.currentMedia = null, this._destroyBackgroundLoadingMedia()
                }, i._destroyMediaController = function (t) {
                    var e = this.mediaPool;
                    t && t.provider && (e.recycle(t.mediaElement), t.destroy())
                }, i._setupMediaController = function (t) {
                    var e = this,
                        i = this.model,
                        n = this.providers,
                        a = function (t) {
                            return new B(new t(i.get("id"), i.getConfiguration(), e.primedElement), i)
                        },
                        o = n.choose(t),
                        r = o.provider,
                        s = o.name;
                    return r ? Promise.resolve(a(r)) : n.load(s).then((function (t) {
                        return a(t)
                    }))
                }, i._activateBackgroundMedia = function () {
                    var t = this,
                        e = this.background,
                        i = this.background.nextLoadPromise,
                        n = this.model;
                    return this._destroyMediaController(e.currentMedia), e.currentMedia = null, i.then((function (i) {
                        if (i) return e.clearNext(), t.adPlaying ? (n.attributes.itemReady = !0, e.currentMedia = i) : (t._setActiveMedia(i), i.background = !1), i
                    }))
                }, i._destroyBackgroundLoadingMedia = function () {
                    var t = this,
                        e = this.background,
                        i = this.background.nextLoadPromise;
                    i && i.then((function (i) {
                        t._destroyMediaController(i), e.clearNext()
                    }))
                }, i._providerCanPlay = function (t, e) {
                    var i = this.providers.choose(e).provider;
                    return i && t && t instanceof i
                }, i.setMute = function (t) {
                    var e = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.mute = t), e.currentMedia && (e.currentMedia.mute = t), n.syncMute(t)
                }, i.setVolume = function (t) {
                    var e = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.volume = t), e.currentMedia && (e.currentMedia.volume = t), n.syncVolume(t)
                }, i.getAsyncItem = function (t) {
                    var e = this.asyncItems[t];
                    return e || ((e = this.asyncItems[t] = new O(t, this.model, this.apiContext)).callback = this.model.get("playlistItemCallback")), e
                }, i.clearItemPromises = function () {
                    this.asyncItems.forEach((function (t) {
                        t && t.reject(new Error("Item playback aborted"))
                    })), this.asyncItems.length = 0
                }, (0, g.Z)(e, [{
                    key: "audioTracks",
                    get: function () {
                        var t = this.mediaController;
                        if (t) return t.audioTracks
                    }
                }, {
                    key: "beforeComplete",
                    get: function () {
                        var t = this.mediaController,
                            e = this.background.currentMedia;
                        return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
                    }
                }, {
                    key: "primedElement",
                    get: function () {
                        return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement")
                    }
                }, {
                    key: "qualities",
                    get: function () {
                        var t = this.mediaController;
                        return t ? t.qualities : null
                    }
                }, {
                    key: "audioTrack",
                    get: function () {
                        var t = this.mediaController;
                        return t ? t.audioTrack : -1
                    },
                    set: function (t) {
                        var e = this.mediaController;
                        e && (e.audioTrack = parseInt(t, 10) || 0)
                    }
                }, {
                    key: "position",
                    get: function () {
                        return this.mediaController.position
                    },
                    set: function (t) {
                        var e = this.mediaController;
                        e && (e.item.starttime = t, e.attached && (e.position = t))
                    }
                }, {
                    key: "quality",
                    get: function () {
                        return this.mediaController ? this.mediaController.quality : -1
                    },
                    set: function (t) {
                        var e = this.mediaController;
                        e && (e.quality = parseInt(t, 10) || 0)
                    }
                }, {
                    key: "subtitles",
                    get: function () {
                        return this.mediaController.subtitles
                    },
                    set: function (t) {
                        var e = this.mediaController;
                        e && (e.subtitles = t)
                    }
                }, {
                    key: "itemCallback",
                    get: function () {
                        return this.model.get("playlistItemCallback")
                    },
                    set: function (t) {
                        this.model.set("playlistItemCallback", t), this.asyncItems.forEach((function (e) {
                            e && (e.callback = t)
                        }))
                    }
                }]), e
            }(f.ZP),
            q = function (t) {
                return t === a.xQ || t === a.Vy ? a.bc : t
            };

        function W(t, e, i) {
            if ((e = q(e)) !== (i = q(i))) {
                var n = e.replace(/(?:ing|d)$/, ""),
                    o = function (t, e) {
                        return t === a.Kb ? e === a.nQ ? e : a.ik : e
                    }(e, t.mediaModel.get("mediaState")),
                    r = {
                        type: n,
                        newstate: e,
                        oldstate: i,
                        reason: o
                    };
                "play" === n ? r.playReason = t.get("playReason") : "pause" === n && (r.pauseReason = t.get("pauseReason")), this.trigger(n, r)
            }
        }
        var Q = i(4609),
            X = function (t) {
                function e(e, i) {
                    var n, a, o = (n = t.call(this, e, i) || this).model = new L;
                    if (n.playerModel = e, n.provider = null, n.backgroundLoading = e.get("backgroundLoading"), o.mediaModel.attributes.mediaType = "video", n.backgroundLoading) a = i.getAdElement();
                    else {
                        a = e.get("mediaElement"), o.attributes.mediaElement = a, o.attributes.mediaSrc = a.src;
                        var r = n.srcResetListener = function () {
                            n.srcReset()
                        };
                        a.addEventListener("emptied", r), a.playbackRate = a.defaultPlaybackRate = 1
                    }
                    return n.mediaPool = (0, Q.Z)(a, i), n
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.setup = function () {
                    var t = this.model,
                        e = this.playerModel,
                        i = this.primedElement,
                        n = e.attributes,
                        o = e.mediaModel;
                    t.setup({
                        id: n.id,
                        volume: n.volume,
                        instreamMode: !0,
                        edition: n.edition,
                        mediaContext: o,
                        mute: n.mute,
                        streamType: "VOD",
                        autostartMuted: n.autostartMuted,
                        autostart: n.autostart,
                        advertising: n.advertising,
                        sdkplatform: n.sdkplatform,
                        skipButton: !1
                    }), t.on("change:state", W, this), t.on(a.pn, (function (t) {
                        this.trigger(a.pn, t)
                    }), this), i.paused || i.pause()
                }, i.setActiveItem = function (e) {
                    var i = this;
                    return this.adPlaying = !0, this.stopVideo(), this.provider = null, t.prototype.setActiveItem.call(this, e).then((function (t) {
                        return i.trigger(a.$_), i._setProvider(t.provider), i.playVideo()
                    }))
                }, i.usePsuedoProvider = function (t) {
                    t && (this._setProvider(t), t.off(a.pn), t.on(a.pn, (function (t) {
                        this.trigger(a.pn, t)
                    }), this))
                }, i._setProvider = function (t) {
                    var e = this;
                    if (t && this.mediaPool) {
                        this.provider = t;
                        var i = this.model,
                            n = this.playerModel,
                            r = "vpaid" === t.type;
                        t.off(), t.on("all", (function (t, e) {
                            r && t === a.Ms || this.trigger(t, (0, o.Z)({}, e, {
                                type: t
                            }))
                        }), this);
                        var s = i.mediaModel;
                        t.on(a.uc, (function (t) {
                            t.oldstate = t.oldstate || i.get(a.uc), s.set("mediaState", t.newstate)
                        })), t.on(a.h7, this._nativeFullscreenHandler, this), s.on("change:mediaState", (function (t, i) {
                            e._stateHandler(i)
                        })), t.attachMedia(), t.volume(n.get("volume")), t.mute(n.getMute()), t.setPlaybackRate && t.setPlaybackRate(1), n.on("change:volume", (function (t, e) {
                            this.volume = e
                        }), this), n.on("change:mute", (function (t, e) {
                            this.mute = e, e || (this.volume = n.get("volume"))
                        }), this), n.on("change:autostartMuted", (function (t, e) {
                            e || (i.set("autostartMuted", e), this.mute = n.get("mute"))
                        }), this)
                    }
                }, i.destroy = function () {
                    this.adPlaying = !1;
                    var t = this.model,
                        e = this.mediaPool,
                        i = this.playerModel;
                    t.off(), this.provider = null;
                    var n = e.getPrimedElement();
                    if (this.backgroundLoading) {
                        e.clean();
                        var a = i.get("mediaContainer");
                        n.parentNode === a && a.removeChild(n)
                    } else n && (n.removeEventListener("emptied", this.srcResetListener), n.src !== t.get("mediaSrc") && this.srcReset())
                }, i.srcReset = function () {
                    var t = this.playerModel,
                        e = t.get("mediaModel"),
                        i = t.getVideo();
                    e.srcReset(), i && (i.src = null)
                }, i._nativeFullscreenHandler = function (t) {
                    this.model.trigger(a.h7, t), this.trigger(a.UW, {
                        fullscreen: t.jwstate
                    })
                }, i._stateHandler = function (t) {
                    var e = this.model;
                    switch (t) {
                    case a.r0:
                    case a._5:
                        e.set(a.uc, t)
                    }
                }, (0, g.Z)(e, [{
                    key: "mute",
                    get: function () {
                        return this.provider.getMute()
                    },
                    set: function (e) {
                        var i = this.mediaController,
                            n = this.model,
                            a = this.provider;
                        n.set("mute", e), t.prototype.setMute.call(this, e), i || a.mute(e)
                    }
                }, {
                    key: "volume",
                    get: function () {
                        return this.provider.volume
                    },
                    set: function (e) {
                        var i = this.mediaController,
                            n = this.model,
                            a = this.provider;
                        n.set("volume", e), t.prototype.setVolume.call(this, e), i || a.volume(e)
                    }
                }]), e
            }(U),
            Y = {
                skipoffset: null,
                tag: null
            },
            $ = function (t, e, i, n) {
                var r, s, l, c, u = this,
                    d = new X(e, n),
                    h = 0,
                    f = {},
                    g = null,
                    m = {},
                    j = function () {
                        h++, u.loadItem(r).catch((function () {}))
                    },
                    v = function (t) {
                        f = {}, r && h + 1 < r.length ? j() : (t.type === a.Ms && this.trigger(a.V$, {}), this.destroy())
                    },
                    y = function (t) {
                        var e = {};
                        m.tag && (e.tag = m.tag), this.trigger(a.Ms, e), v.call(this, t)
                    },
                    b = v,
                    k = !1,
                    x = !1,
                    T = !1,
                    C = !1,
                    _ = function (t) {
                        x || ((t = t || {}).hasControls = Boolean(e.get("controls")), u.trigger(a.l5, t), d.model.get("state") === a._5 ? t.hasControls && d.playVideo().catch((function () {})) : d.pause())
                    },
                    M = function () {
                        x || d.model.get("state") === a._5 && e.get("controls") && (t.setFullscreen(), t.play())
                    },
                    S = function (e) {
                        var i = e.duration,
                            n = e.position,
                            a = d.model.mediaModel || d.model;
                        a.set("duration", i), a.set("position", n), c || (c = ((0, w.U5)(l, i) || i) - p.l_), !k && n >= Math.max(c, p.HB) && (t.preloadNextItem(), k = !0)
                    },
                    E = function (t, e) {
                        "complete" !== t && (e = e || {}, m.tag && !e.tag && (e.tag = m.tag), this.trigger(t, e), "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
                    },
                    A = function () {
                        d.model.set("playRejected", !0)
                    },
                    I = function (n) {
                        n.width && n.height && i && i.resizeMedia(), e.get("pip") && t.requestPip(d.primedElement)
                    },
                    L = function (e) {
                        var i = e.newstate;
                        i === a.r0 ? t.trigger(a.WE, e) : i === a._5 && t.trigger(a.Ax, e)
                    },
                    B = function (t) {
                        var e = t.newstate,
                            i = t.oldstate || d.model.get("state");
                        i !== e && L((0, o.Z)({
                            oldstate: i
                        }, f, t))
                    };
                this.init = function () {
                    if (!T && !x) {
                        T = !0, f = {}, d.setup(), d.on("all", E, this), d.on(a.Je, A, this), d.on(a.R2, S, this), d.on(a.Ms, y, this), d.on(a.rx, I, this), d.on(a.uc, B, this), g = t.detachMedia();
                        var n = d.primedElement;
                        if (e.get("mediaContainer").appendChild(n), e.set("instream", d), d.model.set("state", a.Kb), i) {
                            var o = i.clickHandler();
                            o && o.setAlternateClickHandlers((function () {}), null)
                        }
                        return this.setText(e.get("localization").loadingAd), C = t.isBeforeComplete() || e.get("state") === a.xQ, this
                    }
                };
                this.enableAdsMode = function (n) {
                    var o = this;
                    if (!T && !x) return t.routeEvents({
                            mediaControllerListener: function (t, e) {
                                o.trigger(t, e)
                            }
                        }), e.set("instream", d), d.model.set("state", a.r0),
                        function (n) {
                            if (i) {
                                var o = i.clickHandler();
                                o && o.setAlternateClickHandlers((function (i) {
                                    x || ((i = i || {}).hasControls = Boolean(e.get("controls")), u.trigger(a.l5, i), n && (e.get("state") === a._5 ? t.playVideo() : (t.pause(), n && (t.trigger(a.Rt, {
                                        clickThroughUrl: n
                                    }), window.open(n)))))
                                }), null)
                            }
                        }(n), this
                }, this.setEventData = function (t) {
                    f = t
                }, this.setState = function (t) {
                    var e = t.newstate,
                        i = d.model;
                    t.oldstate = i.get("state"), i.set("state", e), L(t)
                }, this.setTime = function (e) {
                    S(e), t.trigger(a.uL, e)
                }, this.loadNextItemOnError = function () {
                    r && h + 1 < r.length && j()
                };
                var P = function () {
                    !x && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(_, M)
                };
                this.loadItem = function (t, i) {
                    if (x || !T) return Promise.reject(new Error("Instream not setup"));
                    f = {};
                    var n = t;
                    Array.isArray(t) ? (s = i || s, t = (r = t)[h], s && (i = s[h])) : n = [t];
                    var c = d.model;
                    c.set("playlist", n), e.set("hideAdsControls", !1), t.starttime = 0, u.trigger(a.gO, {
                        index: h,
                        item: t
                    }), m = (0, o.Z)({}, Y, i), P(), c.set("skipButton", !1);
                    var p = !e.get("backgroundLoading") && g ? g.then((function () {
                        return d.setActiveItem(h)
                    })) : d.setActiveItem(h);
                    return k = !1, void 0 !== (l = t.skipoffset || m.skipoffset) && u.setupSkipButton(l, m), p
                }, this.setupSkipButton = function (t, e, i) {
                    var n = d.model;
                    b = i || v, n.set("skipMessage", e.skipMessage), n.set("skipText", e.skipText), n.set("skipOffset", t), n.attributes.skipButton = !1, n.set("skipButton", !0)
                }, this.applyProviderListeners = function (t) {
                    d.usePsuedoProvider(t), P()
                }, this.play = function () {
                    f = {}, d.playVideo()
                }, this.pause = function () {
                    f = {}, d && d.pause()
                }, this.skipAd = function (t) {
                    var i = e.get("autoPause").pauseAds,
                        n = "autostart" === e.get("playReason"),
                        o = e.get("viewable");
                    !i || n || o || (this.noResume = !0);
                    var r = a.k3;
                    this.trigger(r, t), b.call(this, {
                        type: r
                    })
                }, this.replacePlaylistItem = function (t) {
                    x || (e.set("playlistItem", t), d.srcReset())
                }, this.destroy = function () {
                    x || (x = !0, u.trigger("destroyed"), u.off(), i && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), e.off(null, null, d), d.off(null, null, u), d.destroy(), T && d.model && (e.attributes.state = a._5), t.forwardEvents(), e.set("instream", null), d = null, f = {}, g = null, T && !e.attributes._destroyed && (t.attachMedia(), e.get("pip") && t.requestPip(), u.noResume || (C ? t.stopVideo() : t.playVideo())))
                }, this.getState = function () {
                    return !x && d.model.get("state")
                }, this.setText = function (t) {
                    return x || !i || i.setAltText(t || ""), this
                }, this.hide = function () {
                    x || e.set("hideAdsControls", !0)
                }, this.getMediaElement = function () {
                    return x ? null : d.primedElement
                }, this.setSkipOffset = function (t) {
                    l = t > 0 ? t : null, d && d.model.set("skipOffset", l)
                }
            };
        (0, o.Z)($.prototype, f.ZP);
        var K = $,
            G = i(6103),
            J = i(8377),
            tt = function () {
                function t(t) {
                    var e = this;
                    this._model = t, this._tracks = [], this._tracksById = {}, this._unknownCount = 0, this._defaultIndex = 0, this._model.on("change:playlistItem", (function (t) {
                        e._tracks = [], e._tracksById = {}, e._unknownCount = 0;
                        var i = t.attributes;
                        i.captionsIndex = 0, i.captionsList = e._captionsMenu(), t.set("captionsTrack", null)
                    }), this), this._model.on("change:itemReady", (function () {
                        e._model.get("castActive") && (e._tracks = [], e._tracksById = {}, e._unknownCount = 0);
                        var t = e._model.get("playlistItem").tracks,
                            i = t && t.length;
                        if (i && !e._model.get("renderCaptionsNatively"))
                            for (var n = function (i) {
                                    var n = t[i];
                                    n.includedInManifest || !e._kindSupported(n.kind) || e._tracksById[n._id] || (n.sideloaded = !0, e._addTrack(n), (0, G.xl)(n, (function (t) {
                                        e._addVTTCuesToTrack(n, t)
                                    }), (function (t) {
                                        e.trigger(a.cM, t)
                                    })))
                                }, o = 0; o < i; o++) n(o);
                        e._setCaptionsList()
                    }), this), this._model.on("change:captionsIndex", (function (t, i) {
                        var n = null;
                        0 !== i && (n = e._tracks[i - 1]), t.set("captionsTrack", n)
                    }), this)
                }
                var e = t.prototype;
                return e.setSubtitlesTracks = function (t) {
                    var e = this;
                    Array.isArray(t) && (t.length ? (t.forEach((function (t) {
                        return e._addTrack(t)
                    })), this._tracks.sort((function (e, i) {
                        var n = t.indexOf(e);
                        if (-1 === n) return 1;
                        var a = t.indexOf(i);
                        return -1 === a ? -1 : n - a
                    }))) : (this._tracks = [], this._tracksById = {}, this._unknownCount = 0), this._setCaptionsList())
                }, e._kindSupported = function (t) {
                    return "subtitles" === t || "captions" === t
                }, e._addVTTCuesToTrack = function (t, e) {
                    t.data = e
                }, e._addTrack = function (t) {
                    t.data = t.data || [], t.name = t.label || t.name || t.language;
                    var e = (0, J.M)(t, this._tracks.length);
                    if (!t.name) {
                        var i = (0, J._)(t, this._unknownCount);
                        t.name = i.label, this._unknownCount = i.unknownCount
                    }
                    t._id = e, this._tracksById[e] = t, this._tracks = this._tracks.filter((function (t) {
                        return t._id !== e
                    })), this._tracks.push(t)
                }, e._captionsMenu = function () {
                    var t = [{
                        id: "off",
                        label: "Off"
                    }];
                    this._model.get("castActive") && (this._tracks = this._tracks.filter((function (t) {
                        return -1 !== t._id.indexOf("nativesubtitles")
                    })));
                    for (var e = 0; e < this._tracks.length; e++) t.push({
                        id: this._tracks[e]._id,
                        label: this._tracks[e].name || "Unknown CC",
                        language: this._tracks[e].subtitleTrack ? this._tracks[e].subtitleTrack.lang : this._tracks[e].language
                    });
                    return t
                }, e.selectDefaultIndex = function (t) {
                    var e = this._defaultIndex = t,
                        i = this._model.get("captionLabel");
                    if ("Off" !== i) {
                        for (var n = 0; n < this._tracks.length; n++) {
                            var a = this._tracks[n];
                            if (i && i === a.name) {
                                e = n + 1;
                                break
                            }
                            a.default || a.defaulttrack || "default" === a._id ? e = n + 1 : a.autoselect
                        }
                        this._setCurrentIndex(e)
                    } else this._model.set("captionsIndex", 0)
                }, e._setCurrentIndex = function (t) {
                    this._tracks.length ? this._model.setVideoSubtitleTrack(t, this._tracks) : this._model.set("captionsIndex", t)
                }, e._setCaptionsList = function () {
                    var t = this._captionsMenu();
                    this.listIdentity(t) !== this.listIdentity(this._model.get("captionsList")) && (this._model.set("captionsList", t), this.selectDefaultIndex(this._defaultIndex))
                }, e.listIdentity = function (t) {
                    return t.map((function (t) {
                        return t.id + "-" + t.label
                    })).join(",")
                }, e.getCurrentIndex = function () {
                    return this._model.get("captionsIndex")
                }, e.getCaptionsList = function () {
                    return this._model.get("captionsList")
                }, e.destroy = function () {
                    this.off(null, null, this)
                }, t
            }();
        (0, o.Z)(tt.prototype, f.ZP);
        var et = tt,
            it = i(4225),
            nt = i(4671),
            at = function (t) {
                try {
                    return t.getBoundingClientRect()
                } catch (t) {}
            };

        function ot(t, e) {
            if (t.get("fullscreen")) return 1;
            if (!t.get("activeTab")) return 0;
            if (t.get("isFloating")) return 1;
            var i = t.get("intersectionRatio");
            return void 0 === i && (i = function (t) {
                var e = document.documentElement,
                    i = document.body,
                    n = {
                        top: 0,
                        left: 0,
                        right: e.clientWidth || i.clientWidth,
                        width: e.clientWidth || i.clientWidth,
                        bottom: e.clientHeight || i.clientHeight,
                        height: e.clientHeight || i.clientHeight
                    };
                if (!i.contains(t)) return 0;
                if ("none" === window.getComputedStyle(t).display) return 0;
                var a = at(t);
                if (!a) return 0;
                for (var o, r, s, l, c, u, d, h, p = a, w = t.parentNode, f = !1; !f;) {
                    var g = null;
                    if (w === i || w === e || 1 !== w.nodeType ? (f = !0, g = n) : "visible" !== window.getComputedStyle(w).overflow && (g = at(w)), g && (o = g, r = p, s = void 0, l = void 0, c = void 0, u = void 0, d = void 0, h = void 0, s = Math.max(o.top, r.top), l = Math.min(o.bottom, r.bottom), c = Math.max(o.left, r.left), h = l - s, !(p = (d = (u = Math.min(o.right, r.right)) - c) >= 0 && h >= 0 && {
                            top: s,
                            bottom: l,
                            left: c,
                            right: u,
                            width: d,
                            height: h
                        }))) return 0;
                    w = w.parentNode
                }
                var m = a.width * a.height,
                    j = p.width * p.height;
                return m ? j / m : 0
            }(e), window.top !== window.self && i) ? 0 : i
        }
        var rt = i(6875),
            st = i(1776),
            lt = i(6436),
            ct = i(8446),
            ut = i(4601),
            dt = i(2799),
            ht = i(2268),
            pt = i(974),
            wt = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        var ft, gt = i(7010),
            mt = {};

        function jt(t, e, i) {
            var n = function (t, e, i) {
                    for (var n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, a = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen, o = Boolean(n && a), r = wt.length; r--;) e.addEventListener(wt[r], i);
                    return {
                        events: wt,
                        supportsDomFullscreen: function () {
                            return o
                        },
                        requestFullscreen: function () {
                            n.call(t, {
                                navigationUI: "hide"
                            })
                        },
                        exitFullscreen: function () {
                            null !== this.fullscreenElement() && a.apply(e)
                        },
                        fullscreenElement: function () {
                            var t = e.fullscreenElement,
                                i = e.webkitCurrentFullScreenElement,
                                n = e.mozFullScreenElement,
                                a = e.msFullscreenElement;
                            return null === t ? t : t || i || n || a
                        },
                        destroy: function () {
                            for (var t = wt.length; t--;) e.removeEventListener(wt[t], i)
                        }
                    }
                }(t, e, i),
                a = mt.requestFullscreen || n.requestFullscreen,
                o = mt.exitFullscreen || n.exitFullscreen,
                r = ft || function () {
                    return (0, gt.Z)() && !_.OS.iOS && !_.Browser.safari
                };
            return n.requestFullscreen = function () {
                if (!r()) return a.call(n)
            }, n.exitFullscreen = function () {
                if (!r()) return o.call(n)
            }, n
        }
        var vt = i(5882),
            yt = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this) || this).revertAlternateClickHandlers(), n.domElement = i, n.model = e, n.ui = new vt.ZP(i).on("click", n.clickHandler, (0, v.Z)(n)).on("doubleClick", (function () {
                        this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                    }), (0, v.Z)(n)), n
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.destroy = function () {
                    this.ui && (this.ui.destroy(), this.ui = null, this.domElement = null, this.model = null, this.revertAlternateClickHandlers())
                }, i.clickHandler = function (t) {
                    this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(a.ot))
                }, i.element = function () {
                    return this.domElement
                }, i.setAlternateClickHandlers = function (t, e) {
                    this.alternateClickHandler = t, this.alternateDoubleClickHandler = e || null
                }, i.revertAlternateClickHandlers = function () {
                    this.alternateClickHandler = null, this.alternateDoubleClickHandler = null
                }, e
            }(f.ZP),
            bt = i(1831),
            kt = i(5646),
            xt = {
                linktarget: "_blank",
                margin: 8,
                hide: !1,
                position: "top-right"
            };

        function Tt(t) {
            var e, i;
            (0, o.Z)(this, f.ZP);
            var n = new Image;
            this.setup = function () {
                var r, s;
                ((i = (0, o.Z)({}, xt, t.get("logo"))).position = i.position || xt.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position) && (e || (e = (0, dt.az)((r = i.position, s = i.hide, '<div class="jw-logo jw-logo-' + r + (s ? " jw-hide" : "") + ' jw-reset"></div>'))), t.set("logo", i), n.onload = function () {
                    var n = this.height,
                        a = this.width,
                        o = {
                            backgroundImage: 'url("' + this.src + '")'
                        };
                    if (i.margin !== xt.margin) {
                        var r = /(\w+)-(\w+)/.exec(i.position);
                        3 === r.length && (o["margin-" + r[1]] = i.margin, o["margin-" + r[2]] = i.margin)
                    }
                    var s = .15 * t.get("containerHeight"),
                        l = .15 * t.get("containerWidth");
                    if (n > s || a > l) {
                        var c = a / n;
                        l / s > c ? (n = s, a = s * c) : (a = l, n = l / c)
                    }
                    o.width = Math.round(a), o.height = Math.round(n), (0, pt.oB)(e, o), t.set("logoWidth", o.width)
                }, n.src = i.file, i.link && (e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", t.get("localization").logo)), this.ui = (0, kt.Z)(e, (function () {
                    this.trigger(a.Ib, {
                        link: i.link,
                        linktarget: i.linktarget
                    })
                }), this))
            }, this.setContainer = function (t) {
                e && t.appendChild(e)
            }, this.element = function () {
                return e
            }, this.position = function () {
                return i.position
            }, this.destroy = function () {
                n.onload = null, this.ui && this.ui.destroy()
            }
        }
        var Ct = function () {
                function t(t) {
                    this.model = t, this.image = null
                }
                var e = t.prototype;
                return e.setup = function (t) {
                    this.el = t, this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"), this.hasZoomThumbnail && (this.zoomOriginX = Math.ceil(100 * Math.random()) + "%", this.zoomOriginY = Math.ceil(100 * Math.random()) + "%", this.model.on("change:viewable", this.pauseZoomThumbnail, this), this.model.on("change:isFloating", this.enableZoomThumbnail, this))
                }, e.setImage = function (t) {
                    var e = this.image;
                    e && (e.onload = null), this.image = null;
                    var i = "";
                    "string" == typeof t && t.length > 0 && (i = 'url("' + t + '")', (e = this.image = new Image).src = t), this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"), (0, pt.oB)(this.imageEl, {
                        backgroundImage: i
                    }), this.el && this.el.appendChild(this.imageEl), this.enableZoomThumbnail()) : (0, pt.oB)(this.el, {
                        backgroundImage: i
                    })
                }, e.enableZoomThumbnail = function () {
                    var t = this;
                    this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout), this.zoomThumbnailTimeout = window.setTimeout((function () {
                        t.imageEl && (t.imageEl.classList.add("jw-ab-zoom-thumbnail"), t.imageEl.style.transformOrigin = t.zoomOriginX + " " + t.zoomOriginY)
                    }), 2e3))
                }, e.pauseZoomThumbnail = function () {
                    clearTimeout(this.zoomThumbnailTimeout), this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
                }, e.removeZoomThumbnail = function () {
                    clearTimeout(this.zoomThumbnailTimeout), this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
                }, e.resize = function (t, e, i) {
                    var n, a = this;
                    if ("uniform" === i) {
                        if (t && (this.playerAspectRatio = t / e), !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n) return;
                        var o = this.image,
                            r = null;
                        if (o) {
                            if (0 === o.width) return void(o.onload = function () {
                                a.resize(t, e, i)
                            });
                            var s = o.width / o.height;
                            Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
                        }(0, pt.oB)(this.el, {
                            backgroundSize: r
                        })
                    }
                }, e.element = function () {
                    return this.el
                }, e.destroy = function () {
                    this.hasZoomThumbnail && (this.removeZoomThumbnail(), this.model.off(null, null, this))
                }, t
            }(),
            _t = i(3296),
            Mt = function (t) {
                var e = new Ct(t),
                    i = !t.get("autostart"),
                    n = e.setImage.bind(e);
                return (e = (0, o.Z)(e, f.ZP)).deferSetImage = function (n, o, r) {
                    t.once("change:playRejected change:autostart", (function () {
                        t.get("state") === a.bc && (i = !0, e.setImage(n, o, r))
                    }))
                }, e.setImage = function (a, o, r) {
                    if (t.get("isAudioFile") && (i = !0), !i) return e.deferSetImage(a, o, r);
                    (n(a), o) && new _t.Z("posterItem", e.el, r, t, (function () {
                        e.trigger("videoThumbnailFirstFrame", {
                            feedData: r.feedData,
                            target: r,
                            ui: "poster",
                            viewable: t.get("viewable")
                        })
                    })).init()
                }, e
            },
            St = i(5187),
            Et = function (t, e, i) {
                return t - e - i
            },
            At = function (t, e, i, n, a) {
                return Math.max(Math.min(t + e - i, n), a)
            },
            It = function (t, e) {
                return (0, pt.oB)(t, {
                    willChange: e
                })
            },
            Lt = function () {
                function t(t) {
                    this.container = t
                }
                var e = t.prototype;
                return e.disable = function () {
                    this.container && ((0, dt.IV)(this.container, "jw-floating-dragged"), (0, dt.IV)(this.container, "jw-floating-dragging"), It(this.container, "auto")), this.uiMedia = this.uiMedia && this.uiMedia.destroy(), this.uiBar = this.uiBar && this.uiBar.destroy(), this.uiTitle = this.uiTitle && this.uiTitle.destroy(), this.uiIcon = this.uiIcon && this.uiIcon.destroy()
                }, e.enable = function () {
                    this.inputMedia = this.container.querySelector(".jw-media"), this.inputBar = this.container.querySelector(".jw-float-bar"), this.inputTitle = this.container.querySelector(".jw-float-bar-title"), this.inputIcon = this.container.querySelector(".jw-float-bar-icon"), this.x = 0, this.y = 0, this.uiMedia = new vt.ZP(this.inputMedia, {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiBar = new vt.ZP(this.inputBar, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiTitle = new vt.ZP(this.inputTitle, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiIcon = new vt.ZP(this.inputIcon, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this)
                }, e.dragStart = function (t) {
                    var e = t.pageX,
                        i = t.pageY,
                        n = window,
                        a = n.innerWidth,
                        o = n.innerHeight,
                        r = this.container.querySelector(".jw-float-bar"),
                        s = r && r.offsetHeight || 0,
                        l = this.container,
                        c = l.offsetLeft,
                        u = l.offsetTop,
                        d = l.offsetWidth,
                        h = l.offsetHeight;
                    this.startX = e, this.startY = i, this.minDeltaX = -c, this.minDeltaY = -u, this.maxDeltaX = Et(a, c, d), this.maxDeltaY = Et(o, u, h + s), (0, dt.cn)(this.container, "jw-floating-dragged"), (0, dt.cn)(this.container, "jw-floating-dragging"), It(this.container, "transform")
                }, e.drag = function (t) {
                    var e = t.pageX,
                        i = t.pageY;
                    this.deltaX = At(this.x, e, this.startX, this.maxDeltaX, this.minDeltaX), this.deltaY = At(this.y, i, this.startY, this.maxDeltaY, this.minDeltaY), (0, pt.vs)(this.container, "translate(" + this.deltaX + "px, " + this.deltaY + "px)")
                }, e.dragEnd = function () {
                    (0, dt.IV)(this.container, "jw-floating-dragging"), It(this.container, "auto"), this.x = this.deltaX, this.y = this.deltaY
                }, t
            }(),
            Bt = function (t, e, i, n) {
                var a = {
                    width: e
                };
                if (n && void 0 !== i && t.set("aspectratio", null), !t.get("aspectratio")) {
                    var o = i;
                    (0, x.hj)(o) && 0 !== o && (o = Math.max(o, 44)), a.height = o
                }
                return a
            },
            Pt = [],
            zt = function (t) {
                var e = Pt.indexOf(t); - 1 !== e && Pt.splice(e, 1)
            },
            Zt = null,
            Rt = {
                floatingPlayer: Zt
            };
        Object.defineProperty(Rt, "floatingPlayer", {
            get: function () {
                return Zt
            },
            set: function (t) {
                if (t !== Zt) {
                    Zt = t;
                    var e = Pt.slice();
                    Pt.length = 0, e.forEach((function (t) {
                        t.startFloating()
                    }))
                }
            }
        });
        var Vt, Ft = function () {
                function t(t, e, i, n) {
                    void 0 === n && (n = _.OS.mobile), this._playerEl = i.player, this._wrapperEl = i.wrapper, this._preview = i.preview, this._model = t, this._floatingUI = new Lt(this._wrapperEl), this._floatingStoppedForever = !1, this._lastIntRatio = 0, this._playerBounds = e, this._isMobile = n, this._mobileCheckCanFire = !0, this._inTransition = !1, this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this), this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
                }
                var e = t.prototype;
                return e.setup = function () {
                    this._model.change("floating", this._boundInitFloatingBehavior)
                }, e.initFloatingBehavior = function () {
                    if (!this._floatingStoppedForever && (nt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), zt(this), this.getFloatingConfig())) {
                        var t = this.getFloatMode();
                        "notVisible" === t ? this._isMobile ? (nt.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
                    }
                }, e.updatePlayerBounds = function (t) {
                    this._playerBounds = t
                }, e.getFloatingConfig = function () {
                    return this._model.get("floating")
                }, e.getFloatMode = function () {
                    var t = this.getFloatingConfig();
                    return t && t.mode || "notVisible"
                }, e.resize = function () {
                    this._model.get("isFloating") && this.updateFloatingSize()
                }, e.fosMobileBehavior = function () {
                    return this._isMobile && !(0, dt.UM)() && !this._model.get("fullscreen")
                }, e.shouldFloatOnViewable = function () {
                    var t = this._model.get("state");
                    return t !== a.bc && t !== a.Vy && t !== a.xQ
                }, e.startFloating = function (t) {
                    var e, i = this,
                        n = this._playerBounds;
                    if (null !== this.getFloatingPlayer() || !this._wrapperEl.querySelector(".jw-float-bar") && this._model.get("controlsEnabled")) this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (e = this, -1 === Pt.indexOf(e) && Pt.push(e));
                    else {
                        this.setFloatingPlayer(this._playerEl), this.transitionFloating(!0), this._model.set("isFloating", !0), (0, dt.cn)(this._playerEl, "jw-flag-floating"), t ? ((0, pt.oB)(this._wrapperEl, {
                            transform: "translateY(-" + (62 - n.top) + "px)"
                        }), window.setTimeout((function () {
                            (0, pt.oB)(i._wrapperEl, {
                                transform: "translateY(0)",
                                transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                            })
                        }))) : (0, pt.oB)(this._wrapperEl, {
                            transform: "translate(0)"
                        }), window.setTimeout((function () {
                            i.transitionFloating(!1)
                        }), 50);
                        var a = this._preview.el;
                        (0, pt.oB)(this._playerEl, {
                            backgroundImage: a.style.backgroundImage
                        }), this.updateFloatingSize(), this._model.get("instreamMode") || this._floatingUI.enable()
                    }
                }, e.stopFloating = function (t, e) {
                    var i = this;
                    if (t && (this._floatingStoppedForever = !0, nt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)), this.getFloatingPlayer() === this._playerEl) {
                        this.transitionFloating(!0), this.setFloatingPlayer(null), this._model.set("isFloating", !1);
                        var n = this._playerBounds,
                            a = function () {
                                (0, dt.IV)(i._playerEl, "jw-flag-floating"), i._model.trigger("forceAspectRatioChange", {}), (0, pt.oB)(i._playerEl, {
                                    backgroundImage: null
                                }), (0, pt.oB)(i._wrapperEl, {
                                    maxWidth: null,
                                    width: null,
                                    height: null,
                                    transform: null,
                                    transition: null,
                                    "transition-timing-function": null
                                }), window.setTimeout((function () {
                                    i.transitionFloating(!1)
                                }), 50)
                            };
                        e ? ((0, pt.oB)(this._wrapperEl, {
                            transform: "translateY(-" + (62 - n.top) + "px)",
                            "transition-timing-function": "ease-out"
                        }), window.setTimeout(a, 150)) : a(), this.disableFloatingUI()
                    }
                }, e.transitionFloating = function (t) {
                    this._inTransition = t;
                    var e = this._wrapperEl;
                    (0, pt.oB)(e, {
                        display: t ? "none" : null
                    }), t || this._model.trigger("forceResponsiveListener", {})
                }, e.isInTransition = function () {
                    return this._inTransition
                }, e.updateFloatingSize = function () {
                    var t = this._playerBounds,
                        e = this._model.get("width"),
                        i = this._model.get("height"),
                        n = Bt(this._model, e);
                    if (n.maxWidth = Math.min(400, t.width), !this._model.get("aspectratio")) {
                        var a = t.width,
                            o = t.height / a || .5625;
                        (0, x.hj)(e) && (0, x.hj)(i) && (o = i / e), this._model.trigger("forceAspectRatioChange", {
                            ratio: 100 * o + "%"
                        })
                    }(0, pt.oB)(this._wrapperEl, n)
                }, e.enableFloatingUI = function () {
                    this._floatingUI.enable()
                }, e.disableFloatingUI = function () {
                    this._floatingUI.disable()
                }, e.setFloatingPlayer = function (t) {
                    Rt.floatingPlayer = t
                }, e.getFloatingPlayer = function () {
                    return Rt.floatingPlayer
                }, e.destroy = function () {
                    this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null), this.getFloatingConfig() && this._isMobile && nt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._floatingUI.disable(), zt(this), this._model.off("change:floating", this._boundInitFloatingBehavior)
                }, e.updateFloating = function (t, e) {
                    t < .5 && !(0, ht.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
                }, e.checkFloatOnScroll = function () {
                    if ("notVisible" === this.getFloatMode()) {
                        var t = this._model.get("isFloating"),
                            e = this._playerBounds,
                            i = e.top < 62,
                            n = window.scrollY || window.pageYOffset,
                            a = i ? e.top <= n : e.top <= n + 62;
                        !t && a ? this.updateFloating(0, i) : t && !a && this.updateFloating(1, i)
                    }
                }, e.throttledMobileFloatScrollHandler = function () {
                    var t = this;
                    this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout), this._mobileDebounceTimeout = window.setTimeout(this.checkFloatOnScroll.bind(this), 150), this._mobileCheckCanFire && (this._mobileCheckCanFire = !1, this.checkFloatOnScroll(), window.setTimeout((function () {
                        t._mobileCheckCanFire = !0
                    }), 50)))
                }, e.checkFloatIntersection = function (t) {
                    var e = "number" == typeof t,
                        i = e ? t : this._lastIntRatio;
                    this._canFloat = this._canFloat || i >= .5, !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i), e && (this._lastIntRatio = t)
                }, e.updateStyles = function () {
                    !this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler()
                }, t
            }(),
            Ht = i(9926);
        i(5430);
        var Ot = _.OS.mobile,
            Nt = _.Browser.ie;
        var Dt = function (t, e) {
                var i, n, r, s, l, c, u = this,
                    d = (0, o.Z)(this, f.ZP, {
                        isSetup: !1,
                        api: t,
                        model: e
                    }),
                    h = e.get("localization"),
                    p = (0, dt.az)((i = e.get("id"), n = h.player, '<div id="' + i + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (n || "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>')),
                    w = p.querySelector(".jw-wrapper"),
                    g = p.querySelector(".jw-media"),
                    m = new Mt(e, t),
                    j = new St.Z(e),
                    v = new bt.Z(e);
                v.on("all", d.trigger, d);
                var y = -1,
                    b = -1,
                    k = -1,
                    T = e.get("floating");
                this.dismissible = T && T.dismissible;
                var C, M, S, E = {},
                    A = new Ft(e, E, {
                        player: p,
                        wrapper: w,
                        preview: m
                    }),
                    I = null,
                    L = null,
                    B = !1,
                    P = null,
                    z = function () {
                        return e.get("isFloating") ? w : p
                    },
                    Z = function () {
                        d.isSetup && !A.isInTransition() && (d.updateBounds(), d.updateStyles(), d.checkResized())
                    },
                    R = function () {
                        (0, st.W)(b), b = (0, st.U)(Z)
                    };
                this.responsiveListener = R;
                var V = function (t, i) {
                        if ((0, x.hj)(t) && (0, x.hj)(i)) {
                            var n = (0, lt.i)(t);
                            (0, lt.d)(p, n);
                            var a = n < 2;
                            (0, dt.og)(p, "jw-flag-small-player", a), (0, dt.og)(p, "jw-orientation-portrait", i > t)
                        }
                        if (e.get("controls")) {
                            var o = function (t) {
                                var e = t.get("height");
                                if (t.get("aspectratio")) return !1;
                                if ("string" == typeof e && e.indexOf("%") > -1) return !1;
                                var i = Number(e) || NaN;
                                return !!(i = isNaN(i) ? t.get("containerHeight") : i) && Boolean(i && i <= 44)
                            }(e);
                            (0, dt.og)(p, "jw-flag-audio-player", o), e.set("audioMode", o)
                        }
                    },
                    F = function (t, i) {
                        if ((t && !isNaN(Number(t)) || (t = e.get("containerWidth"))) && (i && !isNaN(Number(i)) || (i = e.get("containerHeight")))) {
                            m && m.resize(t, i, e.get("stretching"));
                            var n = e.getVideo();
                            n && n.resize(t, i, e.get("stretching"))
                        }
                    },
                    H = function () {
                        e.get("pip") || e.set("visibility", ot(e, p))
                    },
                    O = function (i) {
                        i.link ? (t.pause({
                            reason: "interaction"
                        }), t.setFullscreen(!1), (0, dt.nG)(i.link, i.linktarget, {
                            rel: "noreferrer"
                        })) : e.get("controls") && t.playToggle({
                            reason: "interaction"
                        })
                    },
                    N = function (t) {
                        L && L.mouseMove(t)
                    },
                    D = function (t) {
                        L && !L.showing && "IFRAME" === t.target.nodeName && L.userActive()
                    },
                    U = function (t) {
                        L && L.showing && (t.relatedTarget && !p.contains(t.relatedTarget) || !t.relatedTarget && _.Features.iframe) && L.userActive()
                    },
                    q = function (t, e, i) {
                        var n = new yt(e, i),
                            o = e.get("controls");
                        return n.on({
                            click: function () {
                                if (d.trigger(a.cy), z().focus(), L) {
                                    if (_.OS.mobile) {
                                        var i = e.get("state");
                                        if (o && (i === a.bc || i === a.xQ || e.get("instream") && i === a._5) && t.playToggle({
                                                reason: "interaction"
                                            }), o && i === a._5) {
                                            if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType")) return;
                                            (0, dt.og)(p, "jw-flag-controls-hidden"), d.dismissible && (0, dt.og)(p, "jw-floating-dismissible", (0, dt.pv)(p, "jw-flag-controls-hidden")), v.renderCues(!0)
                                        } else L.showing ? L.userInactive() : L.userActive();
                                        return
                                    }
                                    n = L && L.settingsMenu, Boolean(n && n.visible) ? L.settingsMenu.close() : e.get("displayStats") ? e.set("displayStats", !1) : t.playToggle({
                                        reason: "interaction"
                                    })
                                }
                                var n
                            },
                            doubleClick: function () {
                                return L && t.setFullscreen()
                            }
                        }), Ot || (p.addEventListener("mousemove", N), p.addEventListener("mouseover", D), p.addEventListener("mouseout", U)), n
                    },
                    W = function (t) {
                        var i = e.get("fullscreen"),
                            n = void 0 !== t.jwstate ? t.jwstate : function () {
                                if (M.supportsDomFullscreen()) {
                                    var t = M.fullscreenElement();
                                    return Boolean(t && t === p)
                                }
                                return e.getVideo().getFullScreen()
                            }();
                        i !== n && e.set("fullscreen", n), _.OS.android && n && screen.orientation.lock("landscape-primary"), R(), clearTimeout(y), y = setTimeout(F, 200)
                    },
                    Q = function (t) {
                        _.OS.mobile && ((0, dt.og)(p, "jw-flag-ios-fullscreen", t.jwstate), W(t))
                    },
                    X = function (t, e) {
                        if (e) {
                            var i = (0, it.Z)(t, e);
                            it.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(it.Z.cloneIcon("error")), j.hide(), p.appendChild(i.firstChild), (0, dt.og)(p, "jw-flag-audio-player", Boolean(t.get("audioMode")))
                        } else j.playlistItem(t, t.get("playlistItem"))
                    },
                    Y = function (t) {
                        switch (e.get("controls") && t !== a._5 && (0, dt.pv)(p, "jw-flag-controls-hidden") && ((0, dt.IV)(p, "jw-flag-controls-hidden"), (0, dt.og)(p, "jw-floating-dismissible", d.dismissible)), (0, dt.L_)(p, /jw-state-\S+/, "jw-state-" + t), t) {
                        case a.Vy:
                            d.stopFloating();
                        case a.bc:
                        case a.xQ:
                            v && v.hide(), m && m.enableZoomThumbnail();
                            break;
                        default:
                            v && (v.show(), t === a._5 && L && !L.showing && v.renderCues(!0)), m && m.removeZoomThumbnail()
                        }
                    },
                    $ = function (t, e, i) {
                        if (d.isSetup) {
                            if (i === a.Vy) {
                                var n = p.querySelector(".jw-error-msg");
                                n && n.parentNode.removeChild(n)
                            }(0, st.W)(k), e === a.r0 ? Y(e) : k = (0, st.U)((function () {
                                return Y(e)
                            }))
                        }
                    },
                    K = function (t, e) {
                        (0, dt.L_)(p, /jw-stretch-\S+/, "jw-stretch-" + e)
                    },
                    G = function (t, e) {
                        (0, dt.og)(p, "jw-flag-aspect-mode", Boolean(e));
                        var i = p.querySelectorAll(".jw-aspect");
                        (0, pt.oB)(i, {
                            paddingTop: e || null
                        }), d.isSetup && e && !t.get("isFloating") && (0, pt.oB)(p, Bt(t, t.get("width")))
                    },
                    J = function (t, e) {
                        (0, dt.og)(t, "jw-flag-fullscreen", e), (0, pt.oB)(document.body, {
                            overflowY: e ? "hidden" : ""
                        }), e && L && L.userActive(), F(), R()
                    },
                    tt = function (e, i) {
                        if (i && L && e.get("autostartMuted") && L.unmuteAutoplay(t, e), M.supportsDomFullscreen()) i ? M.requestFullscreen() : M.exitFullscreen(), J(p, i);
                        else if (Nt) J(p, i);
                        else {
                            var n = e.get("instream"),
                                a = n ? n.provider : null,
                                o = e.getVideo() || a;
                            o && o.setFullscreen && o.setFullscreen(i)
                        }
                    },
                    et = function (t, e) {
                        e ? d.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
                    },
                    at = function () {
                        if (P) {
                            var t = P,
                                e = t.video,
                                i = t.enter,
                                n = t.leave;
                            e.removeEventListener("loadedmetadata", i), e.removeEventListener("leavepictureinpicture", n)
                        }
                    },
                    wt = function () {
                        var t = new Vt(document, d.element());
                        d.addControls(t)
                    },
                    ft = function (t, e) {
                        var i = {
                            controls: e
                        };
                        e ? (Vt = ut.v.controls) ? wt() : (i.loadPromise = (0, ut.z)().then((function (e) {
                            Vt = e;
                            var i = t.get("controls");
                            return i && wt(), i
                        })), i.loadPromise.catch((function (t) {
                            d.trigger(a.cM, t)
                        }))) : d.removeControls(), s && l && d.trigger(a.Hy, i)
                    },
                    gt = function (t, e, i) {
                        e && !i && ($(0, t.get("state")), d.updateStyles())
                    },
                    mt = function (t, e) {
                        var i = "LIVE" === e;
                        (0, dt.og)(p, "jw-flag-live", i)
                    },
                    kt = function (t, e) {
                        var i = "audio" === e,
                            n = t.get("isAudioFile"),
                            a = t.get("playlistItem");
                        n !== i && (t.set("isAudioFile", i), m.setImage(a && a.image)), (0, dt.og)(p, "jw-flag-media-audio", i), i && t.get("pip") && t.set("pip", !1);
                        var o = i ? g : g.nextSibling;
                        m.el.parentNode.insertBefore(m.el, o)
                    },
                    xt = function (t, e) {
                        u.setPosterImage(e, m), Ot && function (t, e) {
                            var i = t.get("mediaElement");
                            if (i) {
                                var n = (0, dt.bJ)(e.title || "");
                                i.setAttribute("title", n.textContent)
                            }
                        }(t, e)
                    };
                this.updateBounds = function () {
                    (0, st.W)(b);
                    var t = z(),
                        i = document.body.contains(t),
                        n = (0, dt.A8)(t),
                        a = Math.round(n.width),
                        o = Math.round(n.height);
                    if (E = (0, dt.A8)(p), A.updatePlayerBounds(E), a === s && o === l) return s && l || R(), void e.set("inDom", i);
                    a && o || s && l || R(), (a || o || i) && (e.set("containerWidth", a), e.set("containerHeight", o)), e.set("inDom", i), i && nt.Z.observe(p)
                }, this.updateStyles = function () {
                    var t = e.get("containerWidth"),
                        i = e.get("containerHeight");
                    V(t, i), L && L.resize(t, i), F(t, i), v.resize(), A.updateStyles()
                }, this.checkResized = function () {
                    var t = e.get("containerWidth"),
                        i = e.get("containerHeight"),
                        n = e.get("isFloating");
                    if (t !== s || i !== l) {
                        this.resizeListener || (this.resizeListener = new Ht.Z(w, this, e)), s = t, l = i, d.trigger(a.sF, {
                            width: t,
                            height: i
                        });
                        var o = (0, lt.i)(t);
                        I !== o && (I = o, d.trigger(a.Bs, {
                            breakpoint: I
                        }))
                    }
                    n !== c && (c = n, d.trigger(a.RF, {
                        floating: n
                    }), H())
                }, this.setup = function () {
                    m.setup(p.querySelector(".jw-preview")), j.setup(p.querySelector(".jw-title")), (r = new Tt(e)).setup(), r.setContainer(w), r.on(a.Ib, O), v.setup(p.id, e.get("captions")), j.element().parentNode.insertBefore(v.element(), j.element()), C = q(t, e, g), S = new vt.ZP(p).on("click", (function () {})), M = jt(p, document, W), e.on("change:hideAdsControls", (function (t, e) {
                        (0, dt.og)(p, "jw-flag-ads-hide-controls", e)
                    })), e.on("change:scrubbing", (function (t, e) {
                        (0, dt.og)(p, "jw-flag-dragging", e)
                    })), e.on("change:playRejected", (function (t, e) {
                        (0, dt.og)(p, "jw-flag-play-rejected", e)
                    })), e.on(a.h7, Q), e.on("change:" + a.ug, (function () {
                        F(), v.resize()
                    })), e.player.on("change:errorEvent", X), e.change("stretching", K);
                    var i = e.get("width"),
                        n = e.get("height"),
                        o = Bt(e, i, n);
                    (0, pt.oB)(p, o), e.change("aspectratio", G), V(i, n), e.get("controls") || ((0, dt.cn)(p, "jw-flag-controls-hidden"), (0, dt.IV)(p, "jw-floating-dismissible")), Nt && (0, dt.cn)(p, "jw-ie");
                    var s = e.get("skin") || {};
                    s.name && (0, dt.L_)(p, /jw-skin-\S+/, "jw-skin-" + s.name);
                    var l = (0, ct.xq)(s);
                    (0, ct.Sf)(e.get("id"), l), e.set("mediaContainer", g), e.set("iFrame", _.Features.iframe), e.set("activeTab", (0, rt.Z)()), e.set("touchMode", Ot && ("string" == typeof n || n >= 44)), nt.Z.add(this), e.get("enableGradient") && !Nt && (0, dt.cn)(p, "jw-ab-drop-shadow"), this.isSetup = !0, e.trigger("viewSetup", p);
                    var c = document.body.contains(p);
                    c && nt.Z.observe(p), e.set("inDom", c), e.on("forceAspectRatioChange", (function (t) {
                        var i = t.ratio || e.get("aspectratio");
                        G(e, i)
                    })), e.on("forceResponsiveListener", R), A.setup()
                }, this.init = function () {
                    this.updateBounds(), e.on("change:fullscreen", tt), e.on("change:pip", et), e.on("change:activeTab", H), e.on("change:fullscreen", H), e.on("change:intersectionRatio", H), e.on("change:visibility", gt), e.on("instreamMode", (function (t) {
                        t ? ((0, dt.cn)(p, "jw-flag-ads"), L && L.setupInstream(), A.disableFloatingUI()) : function () {
                            if (C) {
                                L && L.destroyInstream(e), A.getFloatingPlayer() !== p || (0, ht.cL)() || A.enableFloatingUI(), d.setAltText(""), (0, dt.IV)(p, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), e.set("hideAdsControls", !1);
                                var t = e.getVideo();
                                t && t.setContainer(g), C.revertAlternateClickHandlers()
                            }
                        }()
                    })), H(), 1 !== nt.Z.size() || e.get("visibility") || gt(e, 1, 0);
                    var t = e.player;
                    e.change("state", $), t.change("controls", ft), e.change("streamType", mt), e.change("mediaType", kt), t.change("playlistItem", (function (t, e) {
                        xt(t, e)
                    })), s = l = null, this.initFloatingBehavior(), this.checkResized()
                }, this.initFloatingBehavior = function () {
                    A.initFloatingBehavior()
                }, this.addControls = function (i) {
                    var n = this;
                    L = i, (0, dt.IV)(p, "jw-flag-controls-hidden"), (0, dt.og)(p, "jw-floating-dismissible", this.dismissible), i.enable(t, e), l && (V(s, l), i.resize(s, l), v.renderCues(!0)), i.on("userActive userInactive", (function () {
                        var t = e.get("state");
                        t !== a.r0 && t !== a.Kb || v.renderCues(!0)
                    })), i.on("dismissFloating", (function () {
                        n.stopFloating(!0), e.get("autoPause") && !e.get("autoPause").pauseAds && Boolean(e.get("instream")) || t.pause({
                            reason: "interaction"
                        })
                    })), i.on("all", d.trigger, d), e.get("instream") && L.setupInstream()
                }, this.removeControls = function () {
                    L && (L.disable(e), L = null), (0, dt.cn)(p, "jw-flag-controls-hidden"), (0, dt.IV)(p, "jw-floating-dismissible")
                }, this.resize = function (t, i) {
                    var n = Bt(e, t, i, !0);
                    void 0 !== t && void 0 !== i && (e.set("width", t), e.set("height", i)), (0, pt.oB)(p, n), A.resize(), Z()
                }, this.resizeMedia = F, this.setPosterImage = function (t, e) {
                    e.setImage(t && t.image)
                }, this.requestPip = function (t) {
                    var i = t || e.get("mediaElement");
                    if (i.requestPictureInPicture) {
                        var n = function t() {
                            i.removeEventListener("leavepictureinpicture", t), B && (B = !1, d.trigger("pipLeave", {
                                video: i
                            }), e.set("pip", !1), document.pictureInPictureElement && document.exitPictureInPicture())
                        };
                        at();
                        var a = function t() {
                            at(), i.requestPictureInPicture().then((function () {
                                B || (B = !0, d.trigger("pipEnter", {
                                    video: i
                                })), i.addEventListener("leavepictureinpicture", n)
                            })), i.removeEventListener("loadedmetadata", t)
                        };
                        i.readyState ? a() : i.addEventListener("loadedmetadata", a), P = {
                            video: i,
                            enter: a,
                            leave: n
                        }
                    }
                }, this.setAltText = function (t) {
                    e.set("altText", t)
                }, this.clickHandler = function () {
                    return C
                }, this.getContainer = this.element = function () {
                    return p
                }, this.getWrapper = function () {
                    return w
                }, this.controlsContainer = function () {
                    return L ? L.element() : null
                }, this.getSafeRegion = function (t) {
                    void 0 === t && (t = !0);
                    var e = {
                        x: 0,
                        y: 0,
                        width: s || 0,
                        height: l || 0
                    };
                    return L && t && (e.height -= L.controlbarHeight()), e
                }, this.setCaptions = function (t) {
                    v.clear(), v.setup(e.get("id"), t), v.resize()
                }, this.setIntersection = function (t) {
                    var i = Math.round(100 * t.intersectionRatio) / 100;
                    e.set("intersectionRatio", i), this.checkFloatIntersection(i)
                }, this.checkFloatIntersection = function (t) {
                    A.checkFloatIntersection(t)
                }, this.stopFloating = function (t, e) {
                    A.stopFloating(t, e)
                }, this.destroy = function () {
                    e.destroy(), m.destroy(), nt.Z.unobserve(p), nt.Z.remove(this), this.isSetup = !1, this.off(), (0, st.W)(b), clearTimeout(y), S && (S.destroy(), S = null), M && (M.destroy(), M = null), L && L.disable(e), C && (C.destroy(), p.removeEventListener("mousemove", N), p.removeEventListener("mouseout", U), p.removeEventListener("mouseover", D), C = null), v.destroy(), r && (r.destroy(), r = null), (0, pt.oI)(e.get("id")), this.resizeListener && (this.resizeListener.destroy(), delete this.resizeListener), A.destroy()
                }
            },
            Ut = !1,
            qt = window.$sf,
            Wt = function (t, e) {
                this.playerElement = t, this.wrapperElement = e
            };
        (0, o.Z)(Wt.prototype, {
            setup: function (t) {
                var e = (0, dt.az)(function (t) {
                    return '<span class="jw-text jw-reset">' + t + "</span>"
                }(t));
                this.wrapperElement.appendChild(e), (0, dt.cn)(this.playerElement, "jw-flag-top")
            }
        });
        var Qt, Xt = Wt,
            Yt = i(8675),
            $t = i.n(Yt),
            Kt = i(8168),
            Gt = i(2977),
            Jt = function (t, e, n) {
                var o = "free" === e.get("edition");
                o && !Qt && (i(678), Qt = !0, n && n.cssInjected && n.cssInjected());
                var r = new(n && n.View ? n.View : Dt)(t, e),
                    s = r.setup;
                if (r.setPosterImage = function (i, n) {
                        var a = (0, Gt.Cz)(i.images),
                            o = i && i.image,
                            s = r.model.get("containerWidth");
                        s && (o = (0, Gt.Bf)(i, (0, Gt.IJ)(s))), a ? (_.OS.mobile || a.reverse(), i.videoThumbnail = a[0].src, n.on("videoThumbnailFirstFrame", (function (e) {
                            t.trigger("videoThumbFirstFrame", e)
                        })), n.setImage(o, !0, i, e)) : n.setImage(o)
                    }, r.setup = function () {
                        var t = this;
                        (s.call(this), e.get("displayHeading")) && new Xt(r.getContainer(), r.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading);
                        e.change("castAvailable", (function (e, i) {
                            var n = e.get("cast");
                            Object(n) === n && (0, dt.og)(t.getContainer(), "jw-flag-cast-available", i)
                        }), this), e.change("castActive", (function (e, i) {
                            var n = e.get("airplayActive"),
                                a = t.getContainer();
                            (0, dt.og)(a, "jw-flag-casting", i || !1), (0, dt.og)(a, "jw-flag-airplay-casting", n || !1)
                        }), this)
                    }, o) {
                    var l = r.addControls;
                    r.addControls = function (t) {
                        l.call(this, t);
                        var e = document.querySelector(".jw-logo-button");
                        if (e) {
                            var i = (0, Kt.w)($t());
                            e.appendChild(i)
                        }
                    }
                }
                var c = e.get("advertising");
                return c && c.outstream && function (t, e) {
                    Ut || (Ut = !0, i(8206));
                    var n = e.model,
                        o = e.getSafeRegion;
                    e.getSafeRegion = function (t) {
                        var e = o.call(this, t);
                        return e.height = this.api.getHeight(), e
                    }, n.on("change:mediaState", (function (i, r) {
                        if (r === a.ik || r === a.r0) {
                            if (n.off("change:mediaState", null, e), qt && qt.ext && qt.ext.supports()["exp-push"]) {
                                var s = qt.ext.geom(),
                                    l = s.exp,
                                    c = s.self,
                                    u = Math.min(t.getHeight() - c.h, l.yx ? 1 / 0 : l.b),
                                    d = Math.min(t.getWidth() - c.w, l.xs ? 1 / 0 : l.r);
                                (u > 0 || d > 0) && qt.ext.expand({
                                    b: Math.max(0, u),
                                    r: Math.max(0, d),
                                    push: !0
                                })
                            }(0, dt.IV)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = o, e.responsiveListener()
                        }
                    }), e);
                    var r = e.setup;
                    e.setup = function () {
                        r.call(this), (0, dt.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                    };
                    var s = n.get("advertising");
                    s.dismissible && (e.dismissible = !0, e.on("dismissFloating", (function () {
                        t.remove()
                    }))), qt && qt.ext && t.once(a.Rc, (function () {
                        qt.ext.register(t.getWidth(), t.getHeight())
                    })), t.once(a.V$, (function () {
                        e.stopFloating(!0), "close" === s.endstate && ((0, dt.cn)(e.getContainer(), "jw-flag-outstream-close"), qt && qt.ext && qt.ext.collapse())
                    }))
                }(t, r), r
            },
            te = /^change:(.+)$/,
            ee = function (t, e, i) {
                Object.keys(e).forEach((function (n) {
                    n in e && e[n] !== i[n] && t.trigger("change:" + n, t, e[n], i[n])
                }))
            },
            ie = function (t, e) {
                t && t.off(null, null, e)
            },
            ne = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this) || this)._model = e, n._mediaModel = null, (0, o.Z)(e.attributes, {
                        altText: "",
                        fullscreen: !1,
                        logoWidth: 0,
                        scrubbing: !1
                    }), e.on("all", (function (t, a, o, r) {
                        a === e && (a = (0, v.Z)(n)), i && !i(t, a, o, r) || n.trigger(t, a, o, r)
                    }), (0, v.Z)(n)), e.on("change:mediaModel", (function (t, e) {
                        n.mediaModel = e
                    }), (0, v.Z)(n)), n
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.get = function (t) {
                    var e = this._mediaModel;
                    return e && t in e.attributes ? e.get(t) : this._model.get(t)
                }, i.set = function (t, e) {
                    return this._model.set(t, e)
                }, i.getCues = function () {
                    return this._model.getCues()
                }, i.getVideo = function () {
                    return this._model.getVideo()
                }, i.destroy = function () {
                    ie(this._model, this), ie(this._mediaModel, this), this.off()
                }, (0, g.Z)(e, [{
                    key: "mediaModel",
                    set: function (t) {
                        var e = this,
                            i = this._mediaModel;
                        ie(i, this), this._mediaModel = t, t.on("all", (function (i, n, a, o) {
                            n === t && (n = e), e.trigger(i, n, a, o)
                        }), this), i && ee(this, t.attributes, i.attributes)
                    }
                }]), e
            }(M.Z),
            ae = function (t) {
                function e(e) {
                    var i;
                    return (i = t.call(this, e, (function (t) {
                        var e = i._instreamModel;
                        if (e) {
                            var n = te.exec(t);
                            if (n)
                                if (n[1] in e.attributes) return !1
                        }
                        return !0
                    })) || this)._instreamModel = null, i._playerViewModel = new ne(i._model), e.on("change:instream", (function (t, e) {
                        var n = e ? e.model : null;
                        i._model.set("instreamMode", Boolean(n)), i.instreamModel = n
                    }), (0, v.Z)(i)), i
                }(0, m.Z)(e, t);
                var i = e.prototype;
                return i.get = function (t) {
                    var e = this._mediaModel;
                    if (e && t in e.attributes) return e.get(t);
                    var i = this._instreamModel;
                    return i && t in i.attributes ? i.get(t) : this._model.get(t)
                }, i.getVideo = function () {
                    var e = this._instreamModel;
                    return e && e.getVideo() ? e.getVideo() : t.prototype.getVideo.call(this)
                }, i.destroy = function () {
                    t.prototype.destroy.call(this), ie(this._instreamModel, this)
                }, (0, g.Z)(e, [{
                    key: "player",
                    get: function () {
                        return this._playerViewModel
                    }
                }, {
                    key: "instreamModel",
                    set: function (t) {
                        var e = this,
                            i = this._instreamModel;
                        if (i || t)
                            if (ie(i, this), this._model.off("change:mediaModel", null, this), this._instreamModel = t, this.trigger("instreamMode", Boolean(t)), t) t.on("all", (function (i, n, a, o) {
                                n === t && (n = e), e.trigger(i, n, a, o)
                            }), this), t.change("mediaModel", (function (t, i) {
                                e.mediaModel = i
                            }), this), ee(this, t.attributes, this._model.attributes);
                            else if (i) {
                            this._model.change("mediaModel", (function (t, i) {
                                e.mediaModel = i
                            }), this);
                            var n = (0, o.Z)({}, this._model.attributes, i.attributes);
                            ee(this, this._model.attributes, n)
                        }
                    }
                }]), e
            }(ne);
        var oe, re, se = i(5099),
            le = (oe = window).URL && oe.URL.createObjectURL ? oe.URL : oe.webkitURL || oe.mozURL,
            ce = window.Blob,
            ue = function (t, e) {
                var i = e.muted;
                if (!re) try {
                    re = new ce([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                        type: "video/mp4"
                    })
                } catch (t) {
                    return Promise.resolve()
                }
                return _.OS.tizen ? Promise.resolve() : (t.muted = i, t.src = le.createObjectURL(re), t.play() || (0, se.Z)(t))
            },
            de = "autoplayMuted",
            he = "autoplayDisabled",
            pe = {},
            we = function (t, e) {
                var i, n = e.cancelable,
                    a = e.muted,
                    o = void 0 !== a && a,
                    r = e.allowMuted,
                    s = void 0 !== r && r,
                    l = e.timeout,
                    c = void 0 === l ? 1e4 : l,
                    u = t.getTestElement(),
                    d = o ? "muted" : "" + s;
                pe[d] || (pe[d] = ue(u, {
                    muted: o
                }).catch((function (t) {
                    if (!n.cancelled() && !1 === o && s) return ue(u, {
                        muted: o = !0
                    });
                    throw t
                })).then((function () {
                    return o ? (pe[d] = null, de) : "autoplayEnabled"
                })).catch((function (t) {
                    throw clearTimeout(i), pe[d] = null, t.reason = he, t
                })));
                var h = pe[d].then((function (t) {
                        if (clearTimeout(i), n.cancelled()) {
                            var e = new Error("Autoplay test was cancelled");
                            throw e.reason = "cancelled", e
                        }
                        return t
                    })),
                    p = new Promise((function (t, e) {
                        i = setTimeout((function () {
                            pe[d] = null;
                            var t = new Error("Autoplay test timed out");
                            t.reason = "timeout", e(t)
                        }), c)
                    }));
                return Promise.race([h, p])
            },
            fe = i(686),
            ge = i(7543),
            me = i(7411),
            je = "tabVisible",
            ve = function (t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return (0, m.Z)(e, t), e.prototype.getFirstFrame = function () {
                    var t = this.between(a.cq, a.FU),
                        e = this.between(je, a.FU);
                    return e && t && e > 0 && e < t ? e : t
                }, e
            }(me.Z),
            ye = function (t, e) {
                e.off(a.cq, t._onPlayAttempt), e.off(a.Gj, t._triggerFirstFrame), e.off(a.R2, t._onTime), t.off("change:activeTab", t._onTabVisible), t._triggerFirstFrame = t._onTime = null
            },
            be = function (t, e) {
                t.change("mediaModel", (function (t, i, n) {
                    t._qoeItem && n && t._qoeItem.end(n.get("mediaState")), t._qoeItem = new ve, t._qoeItem.tick(a.gO), t._qoeItem.start(i.get("mediaState")),
                        function (t, e) {
                            t._onTabVisible && ye(t, e);
                            var i, n, o = !1;
                            t._triggerFirstFrame = function (i) {
                                if (!o && e.mediaController) {
                                    var n = e.mediaController.mediaModel,
                                        r = n.attributes.mediaState;
                                    if (r === a.r0 || r === a._5 || i.type === a.Gj) {
                                        o = !0;
                                        var s = t._qoeItem;
                                        s.tick(a.FU);
                                        var l = s.getFirstFrame();
                                        e.trigger(a.FU, {
                                            loadTime: l
                                        }), n.off("change:" + a.ug, null, n), n.change(a.ug, (function (t, i) {
                                            i && e.trigger(a.ug, i)
                                        }), n), ye(t, e)
                                    }
                                }
                            }, t._onTime = (i = t._triggerFirstFrame, n = 0, function (t) {
                                var e = t.position;
                                e > n && i(t), n = e
                            }), t._onPlayAttempt = function () {
                                this._qoeItem.tick(a.cq)
                            }, t._onTabVisible = function (t, e) {
                                e ? t._qoeItem.tick(je) : t._qoeItem.tick("tabHidden")
                            }, t.on("change:activeTab", t._onTabVisible), e.on(a.cq, t._onPlayAttempt, t), e.once(a.Gj, t._triggerFirstFrame), e.on(a.R2, t._onTime)
                        }(t, e), i.on("change:mediaState", (function (e, i, n) {
                            i !== n && (t._qoeItem.end(n), t._qoeItem.start(i))
                        }))
                }))
            },
            ke = function (t) {
                for (var e = (t || "").replace(/^\?/, "").split("&"), i = -1, n = 0; n < e.length; n++)
                    if (/^jw_start=/.test(e[n])) {
                        i = n;
                        break
                    } if (-1 === i) return -1;
                var a = parseFloat(e[i].replace("jw_start=", ""));
                return "number" != typeof a || isNaN(a) || a < 0 ? -1 : a
            },
            xe = i(2557);
        var Te = function () {},
            Ce = function () {};
        (0, o.Z)(Te.prototype, {
            destroy: function () {
                var t, e;
                this.off(), this.stop(), (0, s.c2)(this, this.originalContainer), this._view && this._view.destroy(), this._model && (t = this._model, e = this._programController, t._onTabVisible && ye(t, e), t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null, this._model.destroy()), this._apiQueue && this._apiQueue.destroy(), this._captions && this._captions.destroy(), this._programController && this._programController.destroy(), this.instreamDestroy(!0), this._view = this._model = this._apiQueue = this._captions = this._programController = null, this.clearSetupVars && this.clearSetupVars()
            },
            playerSetup: function (t, e, i, n, w, g) {
                var m, j, v, y = this,
                    T = this,
                    C = T._model = new L;
                C.set("jwStart", ke(window.location.search));
                var M, S, A, I = !1,
                    B = !1,
                    P = null,
                    z = b(q),
                    Z = b(Ce);
                T.originalContainer = T.currentContainer = i, T._events = n, T.trigger = function (t, e) {
                    var i = function (t, e, i) {
                        var n = i;
                        switch (e) {
                        case "time":
                        case "beforePlay":
                        case "pause":
                        case "play":
                        case "ready":
                            var a = t.get("viewable");
                            void 0 !== a && (n = (0, o.Z)({}, i, {
                                viewable: a
                            }))
                        }
                        return n
                    }(C, t, e);
                    return f.ZP.trigger.call(this, t, i)
                };
                var R = new u.Z(T, ["trigger"], (function () {
                        return !0
                    })),
                    V = function (t, e) {
                        T.trigger(t, e)
                    };
                C.setup(t);
                var F = C.get("backgroundLoading"),
                    H = new ae(C);
                (j = this._view = new Jt(e, H)).on("all", (function (t, e) {
                    e && e.doNotForward || V(t, e)
                }), T), H.on("viewSetup", (function (t) {
                    (0, s.c2)(y, t)
                }));
                var O = this._programController = new U(C, g, e._publicApi);
                jt(), O.on("all", V, T).on("subtitlesTracks", (function (t) {
                    if (v) {
                        v.setSubtitlesTracks(t.tracks);
                        var e = v.getCurrentIndex();
                        e > 0 && ft(e, t.tracks)
                    }
                }), T).on(a.Ms, (function () {
                    Promise.resolve().then(wt)
                }), T).on(a.Ew, T.triggerError, T), be(C, O), T.clearSetupVars = function () {
                    R && R.destroy(), T = O = C = j = z = Z = A = R = null
                }, C.on(a.pn, T.triggerError, T), C.on("change:state", (function (t, e, i) {
                    tt() || W.call(y, t, e, i)
                }), this), C.on("change:castState", (function (t, e) {
                    T.trigger(a.pi, e)
                })), C.on("change:fullscreen", (function (t, e) {
                    T.trigger(a.UW, {
                        fullscreen: e
                    }), e && t.set("playOnViewable", !1)
                })), C.on("change:volume", (function (t, e) {
                    T.trigger(a.yH, {
                        volume: e
                    })
                })), C.on("change:mute", (function (t) {
                    T.trigger(a.gy, {
                        mute: t.getMute()
                    })
                })), C.on("change:playbackRate", (function (t, e) {
                    T.trigger(a.QF, {
                        playbackRate: e,
                        position: t.get("position")
                    })
                }));
                var N = function t(e, i) {
                    "clickthrough" === i || "interaction" === i || "external" === i ? (C.set("playOnViewable", !1), C.off("change:playReason change:pauseReason", t)) : !i && C.get("autostart") && "playing" === tt() && C.set("playReason", "autostart")
                };

                function D(t, e) {
                    (0, x.o8)(e) || C.set("viewable", Math.round(e))
                }

                function q() {
                    A && (C.get("generateSEOMetadata") && C.get("jwStart") >= 0 ? (T._model.setAutoStart("viewable"), T._model.set("playReason", "jwstart"), C.get("viewable") ? G(C, C.get("viewable")) : J(C, C.get("viewable"))) : !0 !== C.get("autostart") || C.get("playOnViewable") || rt("autostart"), A.flush())
                }

                function Q(t, e) {
                    T.trigger("viewable", {
                        viewable: e
                    }), X()
                }

                function X() {
                    if ((r.Z[0] === e || 1 === C.get("viewable")) && "idle" === C.get("state") && !1 === C.get("autostart"))
                        if (!g.primed() && _.OS.android) {
                            var t = g.getTestElement(),
                                i = T.getMute();
                            Promise.resolve().then((function () {
                                return ue(t, {
                                    muted: i
                                })
                            })).then((function () {
                                "idle" === C.get("state") && O.preloadVideo()
                            })).catch(Ce)
                        } else O.preloadVideo()
                }

                function Y(t) {
                    T._instreamAdapter.noResume = !t, t || lt({
                        reason: "viewable"
                    })
                }

                function $(t) {
                    t || (T.pause({
                        reason: "viewable"
                    }), C.set("playOnViewable", !t))
                }

                function G(t, e) {
                    var i = tt();
                    if (t.get("playOnViewable")) {
                        if (e) {
                            var n = "viewable",
                                o = t.get("autoPause").pauseAds,
                                r = t.get("pauseReason");
                            it() === a.bc ? rt(n) : i && !o || "interaction" === r || nt({
                                reason: n
                            })
                        } else _.OS.mobile && !i && t.get("autoPause").viewability && (T.pause({
                            reason: "autostart"
                        }), C.set("playOnViewable", !0));
                        _.OS.mobile && i && Y(e)
                    }
                }

                function J(t, e) {
                    var i = t.get("state"),
                        n = tt(),
                        o = t.get("playReason");
                    n ? t.get("autoPause").pauseAds ? $(e) : Y(e) : i === a.r0 || i === a.Kb ? $(e) : i === a.bc && "playlist" === o && t.once("change:state", (function () {
                        $(e)
                    }))
                }

                function tt() {
                    var t = T._instreamAdapter;
                    return !!t && t.getState()
                }

                function it() {
                    var t = tt();
                    return t || C.get("state")
                }

                function nt(t) {
                    if (z.cancel(), B = !1, C.get("state") === a.Vy) return Promise.resolve();
                    var i = ot(t);
                    C.set("playReason", i);
                    var n = tt();
                    return n ? (C.get("autostart") && "paused" === n && C.set("playReason", "autostart"), T._instreamAdapter.off("state", dt, T), e.pauseAd(!1, t), Promise.resolve()) : C.get("state") === a.xQ ? (st(!0), T.setItemIndex(0).then((function () {
                        return at(t, i)
                    }))) : at(t, i)
                }

                function at(t, e) {
                    if (!I && (I = !0, T.trigger(a.$j, {
                            playReason: e,
                            startTime: t && t.startTime ? t.startTime : C.get("playlistItem").starttime
                        }), I = !1, (0, ge.C)() && !g.primed() && g.prime(), "playlist" === e && C.get("autoPause").viewability && J(C, C.get("viewable")), S)) {
                        if ((0, ge.C)() && !F) {
                            var i = C.get("mediaElement");
                            T._instreamAdapter && (i.preload = "none"), i.load()
                        }
                        return S = !1, M = null, Promise.resolve()
                    }
                    return O.playVideo(e).then(g.played)
                }

                function ot(t) {
                    return t && t.reason ? t.reason : t && t.startTime ? "jwstart" : "unknown"
                }

                function rt(t) {
                    if (it() === a.bc) {
                        z = b(q);
                        var e = C.get("advertising");
                        we(g, {
                            cancelable: z,
                            muted: T.getMute(),
                            allowMuted: !e || e.autoplayadsmuted
                        }).then((function (e) {
                            return C.set("canAutoplay", e), e !== de || T.getMute() || (C.set("autostartMuted", !0), jt(), C.once("change:autostartMuted", (function (t) {
                                C.get("autoPause").viewability || C.get("playOnViewable") || t.off("change:viewable", G), T.trigger(a.gy, {
                                    mute: C.getMute()
                                })
                            }))), v && T.getMute() && C.get("enableDefaultCaptions") && v.selectDefaultIndex(1), nt({
                                reason: t
                            }).catch((function () {
                                T._instreamAdapter || C.set("autostartFailed", !0), M = null
                            }))
                        })).catch((function (t) {
                            if (C.set("canAutoplay", he), C.set("autostart", !1), !z.cancelled()) {
                                var e = (0, k.nm)(t);
                                T.trigger(a.wh, {
                                    reason: t.reason,
                                    code: e,
                                    error: t
                                })
                            }
                        }))
                    }
                }

                function st(t) {
                    if (z.cancel(), A.empty(), tt()) {
                        var e = T._instreamAdapter;
                        return e && (e.noResume = !0), void(M = function () {
                            return O.stopVideo()
                        })
                    }
                    M = null, !t && (B = !0), I && (S = !0), C.set("errorEvent", void 0), O.stopVideo()
                }

                function lt(t) {
                    var e = ot(t);
                    C.set("pauseReason", e), C.set("playOnViewable", "viewable" === e)
                }

                function ct(t) {
                    M = null, z.cancel();
                    var i = tt();
                    if (i && i !== a._5) return lt(t), void(i === a.Kb ? j.once("dismissFloating", ut) : e.pauseAd(!0, t));
                    switch (C.get("state")) {
                    case a.Vy:
                        return;
                    case a.r0:
                        lt(t), O.pause();
                        break;
                    case a.Kb:
                        lt(t), O.pause(), 0 === T.get("buffer") && (S = !0);
                        break;
                    default:
                        I && (S = !0)
                    }
                }

                function ut() {
                    T._instreamAdapter.once("state", dt), T._instreamAdapter.noResume = !0
                }

                function dt() {
                    var t = C.get("pauseReason");
                    e.pauseAd(!0, {
                        reason: t
                    })
                }

                function ht(t, e) {
                    T.instreamDestroy(), st(!0), T.setItemIndex(t), T.play(e)
                }

                function pt(t) {
                    ht(C.get("item") + 1, t)
                }

                function wt() {
                    T.completeCancelled() || (M = T.completeHandler, T.shouldAutoAdvance() ? T.nextItem() : C.get("repeat") ? pt({
                        reason: "repeat"
                    }) : (_.OS.iOS && mt(!1), C.set("playOnViewable", !1), C.set("state", a.xQ), T.trigger(a.V$, {})))
                }

                function ft(t, e) {
                    t = parseInt(t, 10) || 0, C.persistVideoSubtitleTrack(t, e), O.subtitles = t, T.trigger(a.Z_, {
                        tracks: gt(),
                        track: t
                    })
                }

                function gt() {
                    return v ? v.getCaptionsList() : []
                }

                function mt(t) {
                    C.get("pip") && C.set("pip", !1), (0, x.jn)(t) || (t = !C.get("fullscreen")), !C.get("allowFullscreen") && t || (C.set("fullscreen", t), T._instreamAdapter && T._instreamAdapter._adModel && T._instreamAdapter._adModel.set("fullscreen", t))
                }

                function jt() {
                    O.setMute(C.getMute()), O.setVolume(C.get("volume"))
                }
                C.on("change:playReason change:pauseReason", N), T.on(a.WE, (function (t) {
                    return N(0, t.playReason)
                })), T.on(a.Ax, (function (t) {
                    return N(0, t.pauseReason)
                })), C.on("change:scrubbing", (function (t, e) {
                    e ? (P = C.get("state") !== a._5, ct({
                        reason: "interaction"
                    })) : P && nt({
                        reason: "interaction"
                    })
                })), C.on("change:captionsList", (function (t, e) {
                    T.trigger(a.SL, {
                        tracks: e,
                        track: C.get("captionsIndex") || 0
                    })
                })), C.on("change:mediaModel", (function (t, e) {
                    var i = this;
                    t.set("errorEvent", void 0), e.change("mediaState", (function (e, i) {
                        var n;
                        t.get("errorEvent") || t.set(a.uc, (n = i) === a.ik || n === a.nQ ? a.Kb : n)
                    }), this), e.change("duration", (function (e, i) {
                        if (0 !== i) {
                            var n = t.get("minDvrWindow"),
                                a = (0, fe.v)(i, n);
                            t.setStreamType(a)
                        }
                    }), this);
                    var n = "autoplay" === (t.get("related") || {}).oncomplete,
                        o = t.get("item") + 1,
                        r = t.get("playlist")[o];
                    if (r || n) {
                        e.on("change:position", (function t(a, s) {
                            if (n && !r && (o = -1, r = C.get("nextUp")), r && !r.daiSetting) {
                                var l = e.get("duration");
                                s && l > 0 && s >= l - p.l_ && (e.off("change:position", t, i), F ? O.backgroundLoad(r, o) : O.getAsyncItem(o).run())
                            }
                        }), this)
                    }
                })), (v = this._captions = new et(C)).on("all", V, T), this.playerReady = function () {
                    j.once(a.sF, (function () {
                        try {
                            ! function () {
                                C.change("visibility", D), R.off(), T.trigger(a.Rc, {
                                    setupTime: 0
                                }), C.change("playlist", (function (t, e) {
                                    if (e.length) {
                                        var i = {
                                                playlist: e
                                            },
                                            n = C.get("feedData");
                                        n && (i.feedData = (0, o.Z)({}, n)), T.trigger(a.Ow, i)
                                    }
                                })), C.change("playlistItem", (function (t, e) {
                                    if (e) {
                                        var i = e.title,
                                            n = e.image;
                                        if ("mediaSession" in navigator && window.MediaMetadata && (i || n)) try {
                                            navigator.mediaSession.metadata = new window.MediaMetadata({
                                                title: i,
                                                artist: window.location.hostname,
                                                artwork: [{
                                                    src: n || ""
                                                }]
                                            })
                                        } catch (t) {}
                                        e.chapters || t.setCues([]), T.trigger(a.gO, {
                                            index: C.get("item"),
                                            item: e
                                        })
                                    }
                                })), R.flush(), R.destroy(), R = null, C.change("viewable", Q), C.change("viewable", G), C.get("autoPause").viewability ? C.change("viewable", J) : C.once("change:autostartFailed change:mute", (function (t) {
                                    t.off("change:viewable", G)
                                }));
                                q(), C.on("change:itemReady", (function (t, e) {
                                    e && (A.flush(), C.get("pip") && !T._instreamAdapter && j.requestPip())
                                }))
                            }()
                        } catch (t) {
                            T.triggerError((0, k.Mm)(k.ud, k.YQ, t))
                        }
                    })), j.init()
                }, this.preload = X, this.load = function (t, e) {
                    var i, n = T._instreamAdapter;
                    switch (n && (n.noResume = !0), T.trigger("destroyPlugin", {}), st(!0), O.clearItemPromises(), z.cancel(), z = b(q), Z.cancel(), (0, ge.C)() && g.prime(), typeof t) {
                    case "string":
                        C.attributes.item = 0, C.attributes.itemReady = !1, Z = b((function (t) {
                            if (t) return T.updatePlaylist((0, h.ZP)(t.playlist), t)
                        })), i = function (t) {
                            var e = this;
                            return new Promise((function (i, n) {
                                var o = new d.Z;
                                o.on(a.Ow, (function (t) {
                                    i(t)
                                })), o.on(a.pn, n, e), o.load(t)
                            }))
                        }(t).then((function (t) {
                            return Z.async(t)
                        }));
                        break;
                    case "object":
                        C.attributes.item = 0, i = T.updatePlaylist((0, h.ZP)(t), e || {});
                        break;
                    case "number":
                        i = T.setItemIndex(t);
                        break;
                    default:
                        return
                    }
                    i.catch((function (t) {
                        T.triggerError((0, k.l9)(t, k.DD))
                    })), i.then((function () {
                        return z.async()
                    })).catch(Ce)
                }, this.play = function (t) {
                    return nt(t).catch(Ce)
                }, this.pause = ct, this.seek = function (t, e) {
                    var i = C.get("state");
                    if (i !== a.Vy) {
                        e && i === a.r0 && C.get("playReason") !== e.reason && C.set("playReason", e.reason), O.position = t;
                        var n = i === a.bc;
                        C.get("scrubbing") || !n && i !== a.xQ || (n && ((e = e || {}).startTime = t), this.play(e))
                    }
                }, this.stop = st, this.playlistItem = ht, this.playlistNext = pt, this.playlistPrev = function (t) {
                    ht(C.get("item") - 1, t)
                }, this.setCurrentCaptions = ft, this.setCurrentQuality = function (t) {
                    O.quality = t
                }, this.setFullscreen = mt, this.setAllowFullscreen = function (t) {
                    C.set("allowFullscreen", t), !t && C.get("fullscreen") && T.setFullscreen(!1)
                }, this.setPip = function (t) {
                    C.get("fullscreen") && C.set("fullscreen", !1), (0, x.jn)(t) || (t = !C.get("pip")), C.set("pip", t)
                }, this.getCurrentQuality = function () {
                    return O.quality
                }, this.getQualityLevels = function () {
                    return O.qualities
                }, this.setCurrentAudioTrack = function (t) {
                    O.audioTrack = t
                }, this.getCurrentAudioTrack = function () {
                    return O.audioTrack
                }, this.getAudioTracks = function () {
                    return O.audioTracks
                }, this.getCurrentCaptions = function () {
                    return v ? v.getCurrentIndex() : -1
                }, this.getCaptionsList = gt, this.getVisualQuality = function () {
                    var t = this._model.get("mediaModel");
                    return t ? t.get(a.ug) : null
                }, this.getConfig = function () {
                    return this._model ? this._model.getConfiguration() : void 0
                }, this.getState = it, this.next = Ce, this.completeHandler = wt, this.completeCancelled = function () {
                    return (t = C.get("state")) !== a.bc && t !== a.xQ && t !== a.Vy || !!B && (B = !1, !0);
                    var t
                }, this.shouldAutoAdvance = function () {
                    return C.get("item") !== C.get("playlist").length - 1
                }, this.nextItem = function () {
                    pt({
                        reason: "playlist"
                    })
                }, this.setConfig = function (t) {
                    ! function (t, e) {
                        var i = t._model,
                            n = i.attributes;
                        if (e.height && (e.height = (0, l.a)(e.height), e.width = e.width || n.width), e.width && (e.width = (0, l.a)(e.width), e.aspectratio ? (n.width = e.width, delete e.width) : e.height = n.height), e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height), e.floating) {
                            var a = i.get("floating") || {},
                                r = (0, o.Z)({}, a, e.floating); - 1 === c.indexOf(r.mode) ? delete e.floating : e.floating = r
                        }
                        Object.keys(e).forEach((function (a) {
                            var o = e[a];
                            if (void 0 !== o) switch (a) {
                            case "aspectratio":
                                i.set(a, (0, l.R)(o, n.width));
                                break;
                            case "autostart":
                                ! function (t, e, i) {
                                    t.setAutoStart(i), "idle" === t.get("state") && !0 === i && e.play({
                                        reason: "autostart"
                                    })
                                }(i, t, o);
                                break;
                            case "mute":
                                t.setMute(o);
                                break;
                            case "volume":
                                t.setVolume(o);
                                break;
                            case "playbackRateControls":
                            case "playbackRates":
                            case "repeat":
                            case "stretching":
                            case "floating":
                                i.set(a, o)
                            }
                        }))
                    }(T, t)
                }, this.setItemIndex = function (t) {
                    O.stopVideo();
                    var e = C.get("playlist").length,
                        i = (0, h.bx)(t, e);
                    return O.setActiveItem(i).catch((function (t) {
                        if (t.code === k._M) {
                            if (O.asyncItems.reduce((function (t, e) {
                                    return t && e.skipped
                                }), !0)) throw t;
                            var e = y.shouldAutoAdvance;
                            return y.shouldAutoAdvance = function () {
                                return !1
                            }, wt(), C.attributes.itemReady = !0, void(y.shouldAutoAdvance = e)
                        }
                        t.code >= 151 && t.code <= 162 && (t = (0, k.l9)(t, k.EY)), y.triggerError((0, k.Mm)(k.ul, k.tJ, t))
                    }))
                }, this.detachMedia = function () {
                    if (I && (S = !0), C.get("autoPause").viewability && J(C, C.get("viewable")), !F) return O.setAttached(!1);
                    O.backgroundActiveMedia()
                }, this.attachMedia = function () {
                    F ? O.restoreBackgroundMedia() : O.setAttached(!0), "function" == typeof M && M()
                }, this.routeEvents = function (t) {
                    return O.routeEvents(t)
                }, this.forwardEvents = function () {
                    return O.forwardEvents()
                }, this.playVideo = function (t) {
                    return O.playVideo(t)
                }, this.stopVideo = function () {
                    return O.stopVideo()
                }, this.castVideo = function (t, e) {
                    return O.castVideo(t, e)
                }, this.stopCast = function () {
                    return O.stopCast()
                }, this.backgroundActiveMedia = function () {
                    return O.backgroundActiveMedia()
                }, this.restoreBackgroundMedia = function () {
                    return O.restoreBackgroundMedia()
                }, this.preloadNextItem = function () {
                    O.background.currentMedia && O.preloadVideo()
                }, this.isBeforeComplete = function () {
                    return O.beforeComplete
                }, this.setVolume = function (t) {
                    C.setVolume(t), jt()
                }, this.setMute = function (t) {
                    C.setMute(t), jt()
                }, this.setPlaybackRate = function (t) {
                    C.setPlaybackRate(t)
                }, this.getProvider = function () {
                    return C.get("provider")
                }, this.getWidth = function () {
                    return C.get("containerWidth")
                }, this.getHeight = function () {
                    return C.get("containerHeight")
                }, this.getItemQoe = function () {
                    return C._qoeItem
                }, this.setItemCallback = function (t) {
                    O.itemCallback = t
                }, this.getItemPromise = function (t) {
                    var e = C.get("playlist");
                    if (t < -1 || t > e.length - 1 || isNaN(t)) return null;
                    var i = O.getAsyncItem(t);
                    return i ? i.promise : null
                }, this.addButton = function (t, e, i, n, a) {
                    var o = C.get("customButtons") || [],
                        r = !1,
                        s = {
                            img: t,
                            tooltip: e,
                            callback: i,
                            id: n,
                            btnClass: a
                        };
                    o = o.reduce((function (t, e) {
                        return e.id === n ? (r = !0, t.push(s)) : t.push(e), t
                    }), []), r || o.unshift(s), C.set("customButtons", o)
                }, this.removeButton = function (t) {
                    var e = C.get("customButtons") || [];
                    e = e.filter((function (e) {
                        return e.id !== t
                    })), C.set("customButtons", e)
                }, this.resize = j.resize, this.getSafeRegion = j.getSafeRegion, this.setCaptions = j.setCaptions, this.checkBeforePlay = function () {
                    return I
                }, this.setControls = function (t) {
                    (0, x.jn)(t) || (t = !C.get("controls")), C.set("controls", t), O.controls = t
                }, this.addCues = function (t) {
                    this.setCues(C.getCues().concat(t))
                }, this.setCues = function (t) {
                    C.setCues(t)
                }, this.getCues = function () {
                    return C.getCues()
                }, this.getChapters = function () {
                    return C.get("playlistItem").chapters.timestamps
                }, this.getCurrentChapter = function () {
                    var t = C.get("state"),
                        e = C.get("playlistItem").chapters.timestamps;
                    if (!e || !e.length || t === a.xQ) return null;
                    if (t === a.bc) return e[0];
                    var i = this.get("currentTime");
                    return (0, E.Mf)(i, e)
                }, this.setChapter = function (t) {
                    try {
                        var e = C.get("playlistItem"),
                            i = e.chapters.timestamps;
                        if (!i) return;
                        t instanceof xe.u || (t = new xe.u(t));
                        for (var n = -1, a = 0; a < i.length; a++)
                            if (i[a].time === t.time) {
                                n = a;
                                break
                            } - 1 !== n ? i[n] = t : i.push(t), e.chapters.timestamps = i, C.setCues(C.getCues()), C.set("playlistItem", e), C.trigger("change:chapters", C, t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, this.setPlaylistItem = function (t, e) {
                    var i = C.get("playlist"),
                        n = (0, h.bx)(t, i.length),
                        a = O.getAsyncItem(n);
                    if (a.replace(e)) {
                        var o = i[n];
                        e && e !== o && (O.asyncItems[n] = null, a.reject(new Error("Item replaced"))), n === C.get("item") && "idle" === C.get("state") && this.setItemIndex(n)
                    }
                }, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function () {
                    return this.instreamDestroy(), this._instreamAdapter = new K(this, C, j, g), this._instreamAdapter
                }, this.instreamDestroy = function (t) {
                    this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0), this._instreamAdapter.off("state", dt), this._instreamAdapter.destroy(), this._instreamAdapter = null), j.off("dismissFloating", ut)
                }, (m = (A = this._apiQueue = new u.Z(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"], (function () {
                    return !y._model.get("itemReady") || R
                }))).queue).push.apply(m, w), j && j.setup()
            },
            requestPip: function (t) {
                this._view && this._view.requestPip(t)
            },
            get: function (t) {
                if (t in S.L4) {
                    var e = this._model.get("mediaModel");
                    return e ? e.get(t) : S.L4[t]
                }
                return this._model.get(t)
            },
            getContainer: function () {
                return this.currentContainer || this.originalContainer
            },
            getMute: function () {
                return this._model.getMute()
            },
            triggerError: function (t) {
                var e = this._model;
                t.message = e.get("localization").errors[t.key], delete t.key, e.set("errorEvent", t), e.set("state", a.Vy), e.once("change:state", (function () {
                    this.set("errorEvent", void 0)
                }), e), this.trigger(a.pn, t)
            },
            updatePlaylist: function (t, e) {
                var i = this._model;
                try {
                    var n = (0, h.s7)(t, i, e);
                    (0, h._)(n);
                    var a = (0, o.Z)({}, e);
                    delete a.playlist, i.set("feedData", a), i.set("playlist", n)
                } catch (t) {
                    return Promise.reject(t)
                }
                return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") && !i.get("advertising") ? (i.set("repeat", !1), i.set("loop", !0)) : i.set("loop", !1), this.setItemIndex(i.get("item"))
            }
        });
        var _e = Te,
            Me = "afs_ads ad-placement",
            Se = function (t, e) {
                var i, n, a = !1;
                t && ((n = document.createElement("div")).className = Me, n.innerHTML = "&nbsp;", n.style.width = "1px", n.style.height = "1px", n.style.position = "absolute", n.style.background = "transparent", i = n, t.element().appendChild(i));
                return {
                    onReady: function () {
                        if (a) return !0;
                        t && document.body.contains(t.element()) && (null !== i.offsetParent && i.className === Me && "" !== i.innerHTML && 0 !== i.clientHeight || (a = !0)), a && e.trigger("adBlock")
                    },
                    getAdBlock: function () {
                        return a
                    }
                }
            },
            Ee = i(6593),
            Ae = i(6245),
            Ie = i(2894),
            Le = i(4101),
            Be = i(7164),
            Pe = function (t, e, n, o) {
                if (function (t, e, i) {
                        var n = t.get("related"),
                            a = e.getPlaylist(),
                            o = Boolean(n && n.file) || Boolean(i.recommendations);
                        return (a.length > 1 || o) && (!1 !== t.get("controls") || !n.disableRelated)
                    }(t, e, o)) return function (t, e) {
                    return i.e(365).then(function (n) {
                        if (!t.attributes._destroyed && !e.getPlugin("related")) {
                            var a = new Le.Z;
                            return a.name = "related", a.js = i(8222).default, a
                        }
                    }.bind(null, i)).catch((0, Ie.Ep)(301129))
                }(t, e).then((function (i) {
                    var a = e.getPlugin("related");
                    if (!a) {
                        var o = t.get("related");
                        (a = (0, Be.MK)(i, o, e)).on("nextUp", (function (e) {
                            var i = null;
                            e === Object(e) && ((i = (0, F.Z)(e)).sources = (0, h.T5)(i, t), i.feedType = e.feedType), t.set("nextUp", i)
                        })), a.on("warning", (function (t) {
                            n.trigger("warning", t)
                        })), a.setup(t), a.addToPlayer.call(e)
                    }
                })).catch((function (e) {
                    return e.message = e.message || t.get("localization").errors[e.key], delete e.key, n.trigger(a.cM, e), e
                }))
            },
            ze = i(560),
            Ze = "__jw-ld-json",
            Re = function (t, e) {
                var i = t.search,
                    n = t.hash,
                    a = t.origin,
                    o = t.pathname;
                void 0 === e && (e = "{seek_to_second_number}");
                var r = "jw_start=" + e;
                if (i) {
                    for (var s = i.replace(/^\?/, "").split("&"), l = -1, c = 0; c < s.length; c++)
                        if (/^jw_start=/.test(s[c])) {
                            l = c;
                            break
                        } - 1 !== l ? s[l] = r : s.push(r), i = "?" + s.join("&")
                } else i = "?" + r;
                return (a || "") + (o || "") + (i || "") + (n || "")
            },
            Ve = function (t) {
                var e = t.getElementById(Ze);
                if (e && e.innerText) try {
                    var i = JSON.parse(e.innerText);
                    return Array.isArray(i) || (i = [i]), i
                } catch (t) {}
                return []
            },
            Fe = function (t, e) {
                if (!t.length || !e) return -1;
                for (var i = JSON.stringify(e), n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (JSON.stringify(a) === i) return n
                }
                return -1
            },
            He = function () {
                function t(t, e, i) {
                    this.controller_ = e, this.item_ = t, this.metadata_ = null, this.metadataToUpdate_ = {}, this.window_ = i && i.window || window, this.document_ = i && i.document || document
                }
                var e = t.prototype;
                return e.addMetadata = function () {
                    if (!this.metadata_) {
                        this.metadata_ = function (t, e, i) {
                            void 0 === i && (i = window);
                            var n = {
                                "@context": "https://schema.org",
                                "@type": "VideoObject",
                                name: t.title,
                                description: t.description,
                                thumbnailUrl: t.image,
                                potentialAction: {
                                    "@type": "SeekToAction",
                                    target: Re(window.location),
                                    "startOffset-input": "required name=seek_to_second_number"
                                }
                            };
                            if (t.pubdate && (n.uploadDate = new Date(1e3 * t.pubdate).toISOString()), t.sources && t.sources.length) {
                                var a = (0, x.sE)(t.sources, (function (t) {
                                    return "video/mp4" === t.type
                                })) || t.sources[0];
                                a && (n.contentUrl = a.file)
                            }
                            var o = e.getConfig();
                            (0, ze.Z)() ? t.mediaid && o.pid && (n.embedUrl = "https://cdn.jwplayer.com/players/" + t.mediaid + "-" + o.pid + ".html"): n.embedUrl = window.location.href;
                            var r = e.get("duration");
                            return r && (n.duration = "PT" + Math.floor(r / 60) + "M" + Math.round(r) % 60 + "S"), n
                        }(this.item_, this.controller_);
                        var t = Ve(this.document_).concat([this.metadata_]),
                            e = this.document_.getElementById(Ze);
                        if (e || ((e = this.document_.createElement("script")).setAttribute("type", "application/ld+json"), e.setAttribute("id", Ze), this.document_.head.appendChild(e)), e.innerText = JSON.stringify(t.length > 1 ? t : t[0]), (0, ze.Z)()) try {
                            this.window_.parent.postMessage({
                                type: "metadata",
                                generateSEOMetadata: !0,
                                metadata: this.metadata_
                            }, "*")
                        } catch (t) {}
                    }
                }, e.removeMetadata = function () {
                    var t = this.document_.getElementById(Ze),
                        e = this.metadata_;
                    if (this.metadata_ = null, e && t) {
                        var i = Ve(this.document_),
                            n = Fe(i, e);
                        n >= 0 && (i.splice(n, 1), i.length ? t.innerText = JSON.stringify(i.length > 1 ? i : i[0]) : t.parentElement && t.parentElement.removeChild(t))
                    }
                }, e.updateDurationAsync = function (t) {
                    !this.metadata_.duration && t && (this.metadataToUpdate_.duration = "PT" + Math.floor(t / 60) + "M" + Math.round(t) % 60 + "S")
                }, e.updateChapterCuesAsync = function (t) {
                    var e;
                    this.metadata_.hasPart || (t = t.filter((function (t) {
                        return "ads" !== t.cueType
                    }))) && t.length && (e = t.map((function (t) {
                        return {
                            "@type": "Clip",
                            name: t.text || "",
                            startOffset: t.begin,
                            endOffset: t.end,
                            url: Re(window.location, Math.floor(t.begin))
                        }
                    })), this.metadataToUpdate_.hasPart = e)
                }, e.updateScriptTag = function () {
                    if (Object.keys(this.metadataToUpdate_).length) {
                        var t = Ve(this.document_),
                            e = Fe(t, this.metadata_),
                            i = this.document_.getElementById(Ze);
                        if (e >= 0 && t.length) {
                            if (this.metadata_ = (0, o.Z)(this.metadata_, this.metadataToUpdate_), t[e] = this.metadata_, i.innerText = JSON.stringify(t), (0, ze.Z)()) try {
                                this.window_.parent.postMessage({
                                    type: "metadata",
                                    generateSEOMetadata: !0,
                                    metadata: this.metadata_
                                }, "*")
                            } catch (t) {}
                            this.metadataToUpdate_ = {}
                        }
                    }
                }, e.destroy = function () {
                    this.destroyed_ || (this.destroyed_ = !0, this.removeMetadata(), this.window_ = null, this.document_ = null, this.item_ = null, this.controller_ = null)
                }, t
            }();
        _e.prototype.osPlayerSetup = _e.prototype.playerSetup, _e.prototype.playerSetup = function (t, e, o, r, s, l) {
            var c = this;
            this.osPlayerSetup(t, e, o, r, s, l);
            var u, d = this.shouldAutoAdvance,
                h = this._model,
                p = this._view,
                w = this.modelShim,
                f = Se(p, this),
                g = h.get("advertising");
            if (w && w.attributes.ampController) {
                var m = w.attributes.ampController,
                    j = this.playerReady;
                this.ampController = m, delete w.attributes.ampController, this.playerReady = function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    j.apply(this, e), m.ready(h)
                }
            }
            t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform), h.once("change:visibility", (function () {
                f.onReady.call(c)
            }));
            var v = function (t, e, i, n) {
                if (t) {
                    var a = h.get("nextUp");
                    a && c.trigger(e, {
                        mode: a.mode,
                        ui: "nextup",
                        feedShownId: i,
                        target: a,
                        itemsShown: [a],
                        feedData: a.feedData
                    }), "function" == typeof n && n()
                }
            };
            this.next = function (t) {
                t = t || {};
                var i = e.getPlugin("related");
                v.call(this, i, "nextClick", t.feedShownId, (function () {
                    return i.next(t)
                }))
            };
            var y = this.nextItem;
            this.nextItem = function () {
                var t = e.getPlugin("related");
                v.call(this, t, "nextAutoAdvance"), y.call(this)
            }, this.updatePlaylist = function (t, i) {
                var a = this,
                    o = [];
                return h.get("mobileSdk") || ! function (t) {
                    return window.WebGLRenderingContext && t.some((function (t) {
                        return t.stereomode && t.stereomode.length > 0
                    }))
                }(t) || e.getPlugin("vr") || console.warn("Playlist contains 360° or VR media. JW Player 360°/VR support is now deprecated"), (0, n.w0)(t) && o.push((0, n.lD)(h.get("edition"))), (0, Ae.g)(t, "images", "image"), o.length ? (h.attributes.itemReady = !1, Promise.all(o).then((function () {
                    return _e.prototype.updatePlaylist.call(a, t, i)
                }))) : _e.prototype.updatePlaylist.call(this, t, i)
            }, this.shouldAutoAdvance = function () {
                var t = h.get("related"),
                    e = h.get("nextUp");
                return e && "playlist" === e.mode ? Boolean(t.shouldAutoAdvance) : d.call(this)
            };
            var b = function (t, i) {
                    f.onReady(), Pe(h, e, c, i)
                },
                k = function () {
                    return u || (u = i.e(926).then(function (t) {
                        return new(0, i(8460).default)(p, h, e)
                    }.bind(null, i)).catch((function (t) {
                        throw t
                    })).catch((function (t) {
                        console.error("jwplayer.stats:", t)
                    }))), u
                },
                T = function (t) {
                    c.trigger(a.cM, t)
                },
                C = function () {
                    if (window.chrome && _.Browser.chrome) return function (t, e, n) {
                        i.e(977).then(function (n) {
                            var a = new(0, i(5016).default)(t, e);
                            return t.castToggle = a.castToggle.bind(t._castController), t._castController = a, t.stopCasting = a.stopCasting, a.init()
                        }.bind(null, i)).catch((0, Ie.Jt)(301161)).catch(n)
                    }(c, h, T)
                },
                M = function () {
                    var t = h.getVideo();
                    t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
                },
                S = function () {
                    if (window.WebKitPlaybackTargetAvailabilityEvent && !h.get("playlist").some((function (t) {
                            return !(0, Ee.H)(t.sources[0])
                        }))) return function (t, e, n) {
                        return i.e(520).then(function (n) {
                            var a = i(6342).default;
                            t._airplayController = new a(t, e), t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                        }.bind(null, i)).catch((0, Ie.Jt)(301162)).catch(n)
                    }(c, h, T);
                    M()
                };
            e.getAdBlock = f.getAdBlock, this.once(a.gO, (function (t) {
                h.on("change:playlistItem", b, c), !(g && g.outstream) && h.get("cast") ? (!(h.get("cast") || {}).customAppId && (0, n.w0)(h.get("playlist")) || C.apply(c), S.apply(c)) : M(), Pe(h, e, c, t.item), h.get("generateSEOMetadata") && (c._seoMetadataManager = new He(t.item, c), c._seoMetadataManager.addMetadata(), c.updateMetadataAsync = setTimeout((function () {
                    if (c._seoMetadataManager) {
                        var t = h.getCues();
                        t && t.length && c._seoMetadataManager.updateChapterCuesAsync(t), c._seoMetadataManager.updateDurationAsync(c.get("duration")), c._seoMetadataManager.updateScriptTag()
                    }
                }), 4e3)), c.getContainer().addEventListener("keydown", (function (t) {
                    "n" === t.key && (h.set("displayStats", !h.get("displayStats")), k())
                }), c), h.on("change:displayStats", (function (t, e) {
                    e ? k().then((function (t) {
                        return t.show()
                    })) : !1 === e && k().then((function (t) {
                        return t.hide()
                    }))
                }), c)
            }), this), g && g.outstream && function (t, e) {
                var i = t._model,
                    n = t._view,
                    o = !1,
                    r = e.height,
                    s = e.width,
                    l = t.getHeight;
                t.getHeight = function () {
                    var t = i.get("aspectratio");
                    return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : r
                };
                var c, u = t.getWidth;
                t.getWidth = function () {
                    return (0, x.hj)(s) ? s : u.call(this)
                }, t.getSafeRegion = function (t) {
                    return n.getSafeRegion(t)
                }, t.resize = function (t, e) {
                    return n.resize(t, e)
                }, c = n.resize, n.resize = function (t, e) {
                    return r = e, s = t, c.call(n, t, e)
                }, i.setAutoStart("viewable"), t.setMute(!0), t.setItemIndex = function () {
                    return i.setActiveItem(0), Promise.resolve()
                }, t.updatePlaylist = function () {
                    return i.set("playlist", [{
                        sources: [{}]
                    }]), i.attributes.itemReady = !0, this.setItemIndex(0)
                };
                var d = t.attachMedia;
                t.attachMedia = t.playerDestroy;
                var h = function () {
                    return o || i.set("repeat", !1), i.get("backgroundLoading") || t._programController.mediaPool.clean(), i.set("state", a.xQ), t._programController.trigger(a.Ms, {}), d.call(t)
                };
                t._programController.playVideo = function () {
                    return Promise.resolve()
                };
                var p = t.createInstream;
                t.createInstream = function () {
                    var e = p.call(this);
                    return e.noResume = !0, o = !1, e.on("state", (function (e) {
                        var i = e.newstate;
                        i !== a.ik && i !== a.r0 || (t.attachMedia = h, t.getHeight = l, t.getWidth = u, n && (n.resize = c), o = !0)
                    })), e
                }
            }(this, t)
        }, _e.prototype.osDestroy = _e.prototype.destroy, _e.prototype.destroy = function () {
            this._seoMetadataManager && (this._seoMetadataManager.destroy(), this._seoMetadataManager = null, this.updateMetadataAsync && clearTimeout(this.updateMetadataAsync)), this.osDestroy()
        };
        var Oe = _e
    },
    3343: function (t, e, i) {
        "use strict";
        i.d(e, {
            q: function () {
                return r
            }
        });
        var n = i(6042),
            a = i(1643),
            o = function (t, e) {
                var i = t[e];
                return (0, n.xV)(i) && i >= 0 ? i : null
            },
            r = function (t, e, i) {
                var r = function (t, e, i) {
                    var a;
                    if (null === (a = (0, n.xV)(i.startPTS) ? o(i, "startPTS") : o(i, "start"))) return null;
                    switch (t) {
                    case "PROGRAM-DATE-TIME":
                        return {
                            metadataType: "program-date-time", programDateTime: e, start: a, end: a + o(i, "duration")
                        };
                    case "EXT-X-DATERANGE":
                        var r = {},
                            s = e.split(",").map((function (t) {
                                var e = t.split("="),
                                    i = e[0],
                                    n = (e[1] || "").replace(/^"|"$/g, "");
                                return r[i] = n, {
                                    name: i,
                                    value: n
                                }
                            })),
                            l = r["START-DATE"];
                        if (!l) return null;
                        var c = r["END-DATE"],
                            u = a;
                        if ((0, n.xV)(i.programDateTime) && (u += (new Date(l).getTime() - new Date(i.programDateTime).getTime()) / 1e3), isNaN(u)) return null;
                        var d = parseFloat(r["PLANNED-DURATION"] || r.DURATION) || 0;
                        return !d && c && (d = (new Date(c).getTime() - new Date(l).getTime()) / 1e3), {
                            metadataType: "date-range",
                            tag: t,
                            content: e,
                            attributes: s,
                            start: u,
                            end: u + d,
                            startDate: l,
                            endDate: c,
                            duration: d
                        };
                    case "EXT-X-CUE-IN":
                    case "EXT-X-CUE-OUT":
                        return {
                            metadataType: "scte-35", tag: t, content: e, start: a, end: a + (parseFloat(e) || 0)
                        };
                    case "DISCONTINUITY":
                        var h, p = a + o(i, "duration");
                        return "cc" in i && (h = i.cc), {
                            metadataType: "discontinuity",
                            tag: t,
                            discontinuitySequence: h,
                            PTS: e,
                            start: a,
                            end: p
                        };
                    default:
                        return null
                    }
                }(t, e, i);
                if (r) {
                    if (!(0, n.xV)(r.start)) return;
                    var s = this.createCue(r.start, r.end, JSON.stringify(r)),
                        l = i.sn + "_" + t + "_" + e;
                    if (this.addVTTCue({
                            type: "metadata",
                            cue: s
                        }, l)) {
                        var c = r.metadataType;
                        delete r.metadataType, this.trigger(a.O1, {
                            metadataType: c,
                            metadata: r
                        })
                    }
                }
            }
    },
    9181: function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, {
            default: function () {
                return $
            }
        });
        var n = i(7462),
            a = i(5140),
            o = i(1643),
            r = i(4506),
            s = i(8348),
            l = i(1628),
            c = i(8702),
            u = i(3949),
            d = i(186),
            h = i(686),
            p = i(974),
            w = i(2799),
            f = i(6528),
            g = i(328),
            m = i(3328),
            j = i(9974),
            v = i(5099),
            y = i(6042),
            b = i(5004),
            k = i(4446),
            x = i(1384),
            T = 324e3,
            C = window.clearTimeout,
            _ = function () {},
            M = function (t, e) {
                Object.keys(t).forEach((function (i) {
                    e.removeEventListener(i, t[i])
                }))
            },
            S = function (t, e, i) {
                var a = this;
                a.state = o.bc, a.seeking = !1, a.currentTime = -1, a.retries = 0, a.maxRetries = 3, a.muteToggle = s.OS.iOS || s.Browser.safari;
                var f = e.loadAndParseHlsMetadata;
                a.loadAndParseHlsMetadata = void 0 === f || Boolean(f);
                var S, E = e.minDvrWindow,
                    A = i,
                    I = {
                        level: {}
                    },
                    L = !1,
                    B = 0,
                    P = null,
                    z = null,
                    Z = -1,
                    R = _,
                    V = null,
                    F = -1,
                    H = -1,
                    O = null,
                    N = !1,
                    D = null,
                    U = null,
                    q = 0;
                this.video = A, this.supportsPlaybackRate = !0, this.startDateTime = 0;
                var W = function () {
                        if (!(A.readyState < 2 && 0 === A.buffered.length)) return 0 === A.videoHeight
                    },
                    Q = function () {
                        if (a.muteToggle && A.muted) {
                            var t = W();
                            if (void 0 === t) return;
                            var i = !A.paused;
                            A.muted = a.muteToggle = !1, t ? A.muted = e.mute : (A.muted = !0, i && A.paused && A.play())
                        }
                    },
                    X = null !== e.liveTimeout ? e.liveTimeout : 3e4,
                    Y = function () {
                        C(H), H = -1
                    },
                    $ = function () {
                        if (0 !== X) {
                            var t = (0, j.Z)(A.buffered);
                            a.isLive() && t && O === t ? -1 === H && (H = window.setTimeout((function () {
                                !0 && a.atEdgeOfLiveStream() && a.trigger(o.Ew, new k.rG(k.Sp, 220001))
                            }), X)) : (Y(), !1), O = t
                        }
                    },
                    K = function (t) {
                        z = t
                    },
                    G = function () {
                        var t = W();
                        if (void 0 !== t) {
                            var e = t ? "audio" : "video";
                            a.trigger(o.oZ, {
                                mediaType: e
                            })
                        }
                    },
                    J = function () {
                        var t = I.level;
                        if (t.width !== A.videoWidth || t.height !== A.videoHeight) {
                            if (!A.videoWidth && !W() || -1 === Z) return;
                            a.ensureMetaTracksActive(), t.width = A.videoWidth, t.height = A.videoHeight, G(), I.reason = I.reason || "auto";
                            var e = "hls" === S[Z].type ? "auto" : "manual";
                            t.index = Z, t.label = S[Z].label, a.trigger(o.ug, {
                                reason: I.reason,
                                mode: e,
                                bitrate: 0,
                                level: {
                                    width: t.width,
                                    height: t.height,
                                    index: t.index,
                                    label: t.label
                                }
                            }), I.reason = ""
                        }
                    },
                    tt = function (t) {
                        A && A.audioTracks && V && t > -1 && t < A.audioTracks.length && t !== F && (A.audioTracks[F].enabled = !1, F = t, A.audioTracks[F].enabled = !0, a.trigger(o._B, {
                            currentTrack: F,
                            tracks: V
                        }))
                    },
                    et = function () {
                        for (var t = -1, e = A.audioTracks, i = 0; i < e.length; i++)
                            if (e[i].enabled) {
                                t = i;
                                break
                            } tt(t)
                    },
                    it = function (t) {
                        var e = a.getSeekRange();
                        return a.isLive() && (0, h.s)(e.end - e.start, E) ? Math.min(0, t - e.end) : t
                    },
                    nt = function () {
                        A && (a.disableTextTrack(), A.removeAttribute("preload"), A.removeAttribute("src"), (0, w.EU)(A), (0, p.oB)(A, {
                            objectFit: ""
                        }), Z = -1, !s.Browser.msie && "load" in A && A.load())
                    },
                    at = {
                        progress: function () {
                            c.Z.progress.call(a), W() && Q(), $()
                        },
                        timeupdate: function () {
                            a.currentTime >= 0 && (a.retries = 0), a.currentTime = A.currentTime, (0, x.If)() && z !== A.currentTime && K(A.currentTime), c.Z.timeupdate.call(a), $(), s.Browser.ie && J()
                        },
                        resize: J,
                        ended: function () {
                            Z = -1, Y(), c.Z.ended.call(a)
                        },
                        loadedmetadata: function () {
                            var t = a.getDuration();
                            N && t === 1 / 0 && (t = 0);
                            var e = {
                                metadataType: "media",
                                duration: t,
                                height: A.videoHeight,
                                width: A.videoWidth,
                                seekRange: a.getSeekRange()
                            };
                            a.fairplay && (e.drm = "fairplay"), a.trigger(o.rx, e), J()
                        },
                        durationchange: function () {
                            N || c.Z.progress.call(a)
                        },
                        loadeddata: function () {
                            var t;
                            ! function () {
                                var t = A;
                                if (t.getStartDate) {
                                    var e = t.getStartDate(),
                                        i = e.getTime ? e.getTime() : NaN;
                                    i === a.startDateTime || isNaN(i) || a.setStartDateTime(i)
                                }
                            }(),
                            function (t) {
                                if (V = null, t) {
                                    if (t.length) {
                                        for (var e = 0; e < t.length; e++)
                                            if (t[e].enabled) {
                                                F = e;
                                                break
                                            } - 1 === F && (t[F = 0].enabled = !0), V = (0, y.UI)(t, (function (t) {
                                            return {
                                                name: t.label || t.language,
                                                language: t.language
                                            }
                                        }))
                                    }
                                    a.addTracksListener(t, "change", et), V && a.trigger(o.j0, {
                                        currentTrack: F,
                                        tracks: V
                                    })
                                }
                            }(A.audioTracks), t = a.getDuration(), B && -1 !== B && t && t !== 1 / 0 && a.seek(B)
                        },
                        canplay: function () {
                            L || (L = !0, N || G(), J(), c.Z.canplay.call(a))
                        },
                        seeking: function () {
                            var t = z,
                                e = null !== P ? it(P) : a.getCurrentTime(),
                                i = it(t);
                            z = P, P = null, B = 0, a.seeking = !0, a.trigger(o.NZ, {
                                position: i,
                                offset: e,
                                duration: a.getDuration(),
                                currentTime: t,
                                seekRange: a.getSeekRange(),
                                metadata: {
                                    currentTime: t
                                }
                            })
                        },
                        seeked: function () {
                            c.Z.seeked.call(a), a.ensureMetaTracksActive()
                        },
                        waiting: function () {
                            a.seeking || a.video.seeking ? a.setState(o.ik) : a.state === o.r0 && (a.atEdgeOfLiveStream() && a.setPlaybackRate(1), a.stallTime = a.video.currentTime, a.setState(o.nQ))
                        },
                        error: function () {
                            var t = a.video,
                                e = t.error,
                                i = e && e.code || -1;
                            if ((3 === i || 4 === i) && a.retries < a.maxRetries) return a.trigger(o.cM, new k.rG(null, T + i - 1, e)), a.retries++, A.load(), void(-1 !== a.currentTime && (L = !1, a.seek(a.currentTime), a.currentTime = -1));
                            var n = 224e3,
                                r = k.ul;
                            1 === i ? n += i : 2 === i ? (r = k.MD, n = 221e3) : 3 === i || 4 === i ? (n += i - 1, 4 === i && t.src === location.href && (n = 224005)) : r = k.ud, nt(), a.trigger(o.Ew, new k.rG(r, n, e))
                        }
                    };
                Object.keys(c.Z).forEach((function (t) {
                    if (!at[t]) {
                        var e = c.Z[t];
                        at[t] = function (t) {
                            e.call(a, t)
                        }
                    }
                }));
                var ot, rt = function () {
                        if (!s.Browser.safari) return !0;
                        var t = a.getCurrentTextTrack();
                        return t && t.sideloaded
                    },
                    st = function (t) {
                        var i = Math.max(0, Z),
                            n = e.qualityLabel;
                        if (t)
                            for (var a = 0; a < t.length; a++)
                                if (t[a].default && (i = a), n && t[a].label === n) return a;
                        return I.reason = "initial choice", I.level.width && I.level.height || (I.level = {}), i
                    },
                    lt = function (t) {
                        V = null, F = -1, I.reason || (I.reason = "initial choice", I.level = {}), L = !1;
                        var e = document.createElement("source");
                        e.src = t.file, A.src !== e.src && (A.src = t.file)
                    };
                (0, n.Z)(this, g.ZP, u.Z, d.Z, m.Z, {
                    renderNatively: (ot = e.renderCaptionsNatively, !(!s.OS.iOS && !s.Browser.safari) || ot && s.Browser.chrome),
                    eventsOn_: function () {
                        var t, e;
                        t = at, e = A, Object.keys(t).forEach((function (i) {
                            e.removeEventListener(i, t[i]), e.addEventListener(i, t[i])
                        })), (0, x.Nm)(a, A)
                    },
                    eventsOff_: function () {
                        M(at, A), (0, x.IP)(A)
                    },
                    detachMedia: function () {
                        d.Z.detachMedia.call(a), Y(), this.removeTracksListener(A.textTracks, "change", this.textTrackChangeHandler), this.removeTracksListener(A.textTracks, "addtrack", this.addTrackHandler), this.videoLoad && (A.load = this.videoLoad), rt() && this.disableTextTrack()
                    },
                    attachMedia: function () {
                        if (d.Z.attachMedia.call(a), L = !1, this.seeking = !1, A.loop = Boolean(e.loop), s.OS.iOS && !this.videoLoad) {
                            var t = this.videoLoad = A.load;
                            A.load = function () {
                                return A.src === location.href ? (-1 === Z && (Z = st(S)), lt(S[Z]), a.state === o.r0 && A.play(), void a.trigger(o.cM, new k.rG(null, 324005, new Error("video.load() was called after setting video.src to empty while playing video")))) : t.call(A)
                            }
                        }
                        rt() && this.enableTextTrack(), this.renderNatively && this.setTextTracks(this.video.textTracks), this.addTracksListener(A.textTracks, "change", this.textTrackChangeHandler)
                    },
                    isLive: function () {
                        return A.duration === 1 / 0
                    }
                });
                var ct = function (t) {
                    var e = a.getSeekRange();
                    if (a.isLive() && ((!U || Math.abs(D - e.end) > 1) && (! function (t) {
                            D = t.end, U = Math.min(0, A.currentTime - D), q = (0, b.z)()
                        }(e), a.ensureMetaTracksActive()), (0, h.s)(e.end - e.start, E))) return U;
                    return t
                };
                a.setStartDateTime = function (t) {
                    a.startDateTime = t;
                    var e = new Date(t).toISOString(),
                        i = a.getSeekRange(),
                        n = i.start,
                        o = i.end,
                        r = {
                            metadataType: "program-date-time",
                            programDateTime: e,
                            start: n = Math.max(0, n),
                            end: o = Math.max(n, o + 10)
                        },
                        s = a.createCue(n, o, JSON.stringify(r));
                    a.addVTTCue({
                        type: "metadata",
                        cue: s
                    })
                }, a.getCurrentTime = function () {
                    return ct(A.currentTime)
                };
                var ut = function () {
                        var t = 0;
                        return ["buffered", "seekable"].forEach((function (e) {
                            for (var i = A[e], n = i ? i.length : 0; n--;) {
                                var a = Math.max(t, i.end(n));
                                (0, y.xV)(a) && (t = a)
                            }
                        })), t
                    },
                    dt = function () {
                        var t = 1 / 0;
                        return ["buffered", "seekable"].forEach((function (e) {
                            for (var i = A[e], n = i ? i.length : 0; n--;) {
                                var a = Math.min(t, i.start(n));
                                (0, y.xV)(a) && (t = a)
                            }
                        })), t
                    };
                a.getDuration = function () {
                    var t = A.duration;
                    if (N && t === 1 / 0 && 0 === A.currentTime || isNaN(t)) return 0;
                    var e = ut();
                    if (a.isLive() && e) {
                        var i = e - dt();
                        (0, h.s)(i, E) && (t = -i)
                    }
                    return t
                }, a.getSeekRange = function () {
                    var t = {
                        start: 0,
                        end: 0
                    };
                    return A.seekable.length ? (t.end = ut(), t.start = dt()) : (0, y.xV)(A.duration) && (t.end = A.duration), t
                }, a.getLiveLatency = function () {
                    var t = null,
                        e = ut();
                    return a.isLive() && e && (t = (e + ((0, b.z)() - q)) / 1e3 - A.currentTime), t
                };
                var ht = function (t) {
                        var e;
                        return Array.isArray(t) && t.length > 0 && (e = t.map((function (t, e) {
                            return {
                                label: t.label || e
                            }
                        }))), e
                    },
                    pt = function (t) {
                        a.currentTime = -1, E = t.minDvrWindow, S = t.sources, Z = st(S)
                    },
                    wt = function () {
                        return A.paused && A.played && A.played.length && a.isLive() && !(0, h.s)(ut() - dt(), E) && (a.attachMedia(), A.load()), A.play() || (0, v.Z)(A)
                    },
                    ft = function (t) {
                        a.currentTime = -1, B = 0, Y();
                        var e = A.src,
                            i = document.createElement("source");
                        i.src = S[Z].file, i.src !== e ? (lt(S[Z]), e && A.load()) : 0 === t && A.currentTime > 0 && (B = -1, a.seek(t)), t > 0 && A.currentTime !== t && a.seek(t);
                        var n = ht(S);
                        n && a.trigger(o.UZ, {
                            levels: n,
                            currentQuality: Z
                        }), S.length && "hls" !== S[0].type && G()
                    };
                this.stop = function () {
                    Y(), nt(), this.clearTracks(), s.Browser.ie && A.pause(), this.setState(o.bc)
                }, this.destroy = function () {
                    var t = a.addTrackHandler,
                        e = a.cueChangeHandler,
                        i = a.textTrackChangeHandler,
                        n = A.textTracks;
                    if (a.off(), a.videoLoad && (A.load = a.videoLoad), R = _, M(at, A), a.removeTracksListener(A.audioTracks, "change", et), a.removeTracksListener(n, "change", i), a.removeTracksListener(n, "addtrack", t), e)
                        for (var o = 0, r = n.length; o < r; o++) n[o].removeEventListener("cuechange", e)
                }, this.init = function (t) {
                    a.retries = 0, a.maxRetries = t.adType ? 0 : 3, pt(t);
                    var e = S[Z];
                    (N = (0, l.V)(e)) && (a.supportsPlaybackRate = !1, at.waiting = _), a.eventsOn_(), S.length && "hls" !== S[0].type && this.sendMediaType(S), I.reason = ""
                }, this.preload = function (t) {
                    pt(t);
                    var e = S[Z],
                        i = e.preload || "metadata";
                    "none" !== i && (A.setAttribute("preload", i), lt(e))
                }, this.load = function (t) {
                    pt(t), A.loop = Boolean(e.loop), ft(t.starttime), this.setupSideloadedTracks(t.tracks)
                }, this.play = function () {
                    return R(), wt()
                }, this.pause = function () {
                    Y(), R = function () {
                        if (A.paused && A.currentTime && a.isLive()) {
                            var t = ut(),
                                e = t - dt(),
                                i = !(0, h.s)(e, E),
                                n = t - A.currentTime;
                            if (i && t && (n > 15 || n < 0)) {
                                if (P = Math.max(t - 10, t - e), !(0, y.xV)(P)) return;
                                K(A.currentTime), A.currentTime = P
                            }
                        }
                    }, A.pause()
                }, this.seek = function (t) {
                    var e = a.getSeekRange(),
                        i = t;
                    if (t < 0 && (i += e.end), L || (L = Boolean(ut())), L) {
                        Q(), B = 0;
                        try {
                            if (a.seeking = !0, a.isLive() && (0, h.s)(e.end - e.start, E))
                                if (U = Math.min(0, i - D), t < 0) i += Math.min(12, ((0, b.z)() - q) / 1e3);
                            P = i, K(A.currentTime), A.currentTime = i
                        } catch (t) {
                            a.seeking = !1, B = i
                        }
                    } else B = i, s.Browser.firefox && A.paused && wt()
                }, this.setVisibility = function (t) {
                    (t = Boolean(t)) || s.OS.android ? (0, p.oB)(a.container, {
                        visibility: "visible",
                        opacity: 1
                    }) : (0, p.oB)(a.container, {
                        visibility: "",
                        opacity: 0
                    })
                }, a.getFullscreen = function () {
                    return (0, x.If)() || Boolean(A.webkitDisplayingFullscreen)
                }, this.setCurrentQuality = function (t) {
                    Z !== t && t >= 0 && S && S.length > t && (Z = t, I.reason = "api", I.level = {}, this.trigger(o.aM, {
                        currentQuality: t,
                        levels: ht(S)
                    }), e.qualityLabel = S[t].label, ft(A.currentTime || 0), wt())
                }, this.setPlaybackRate = function (t) {
                    A.playbackRate = A.defaultPlaybackRate = t
                }, this.getPlaybackRate = function () {
                    return A.playbackRate
                }, this.getCurrentQuality = function () {
                    return Z
                }, this.getQualityLevels = function () {
                    return Array.isArray(S) ? S.map((function (t) {
                        return (0, r.Z)(t)
                    })) : []
                }, this.getName = function () {
                    return {
                        name: "html5"
                    }
                }, this.setCurrentAudioTrack = tt;
                this.getAudioTracks = function () {
                    return V || []
                };
                this.getCurrentAudioTrack = function () {
                    return F
                }
            };
        (0, n.Z)(S.prototype, f.Z), S.getName = function () {
            return {
                name: "html5"
            }
        };
        var E = S,
            A = i(6886),
            I = i(9601),
            L = i(2957),
            B = i(3144),
            P = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            z = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            Z = function () {
                this.relurl = null, this.tagList = [], this.cc = this.sn = this.start = 0, this.title = null, this.programDateTime = this.rawProgramDateTime = null
            },
            R = function () {
                function t(t) {
                    this.fragments = [], this.url = t, this.live = !0, this.startSN = this.endSN = this.startCC = this.endCC = this.targetduration = this.totalduration = 0
                }
                return (0, B.Z)(t, [{
                    key: "startProgramDateTime",
                    get: function () {
                        return this.fragments[0] ? this.fragments[0].programDateTime : null
                    }
                }]), t
            }(),
            V = function (t, e) {
                t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), (0, y.xV)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
            },
            F = function (t, e) {
                var i, n, a = new R(e),
                    o = 0,
                    r = 0,
                    s = 0,
                    l = null,
                    c = new Z,
                    u = null;
                for (P.lastIndex = 0; null !== (i = P.exec(t));) {
                    var d = i[1];
                    if (d) {
                        c.duration = parseFloat(d);
                        var h = (" " + i[2]).slice(1);
                        c.title = h || null, c.tagList.push(h ? ["INF", d, h] : ["INF", d])
                    } else if (i[3]) {
                        if ((0, y.xV)(c.duration)) {
                            var p = o++;
                            c.start = r, c.sn = p, c.cc = s, c.relurl = (" " + i[3]).slice(1), V(c, l), a.fragments.push(c), l = c, r += c.duration, c = new Z
                        }
                    } else if (i[4]) c.rawProgramDateTime = (" " + i[4]).slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]), null === u && (u = a.fragments.length);
                    else {
                        for (i = i[0].match(z), n = 1; n < i.length && void 0 === i[n]; n++);
                        var w = (" " + i[n + 1]).slice(1),
                            f = (" " + i[n + 2]).slice(1);
                        switch (i[n]) {
                        case "#":
                            c.tagList.push(f ? [w, f] : [w]);
                            break;
                        case "MEDIA-SEQUENCE":
                            o = a.startSN = parseInt(w, 10);
                            break;
                        case "TARGETDURATION":
                            a.targetduration = parseFloat(w);
                            break;
                        case "ENDLIST":
                            a.live = !1;
                            break;
                        case "DIS":
                            s++, c.tagList.push(["DIS"]);
                            break;
                        case "DISCONTINUITY-SEQ":
                            s = parseInt(w, 10);
                            break;
                        case "MAP":
                            var g = c.rawProgramDateTime;
                            (c = new Z).rawProgramDateTime = g
                        }
                    }
                }
                if (!r) throw new Error("Invalid playlist");
                return l && !l.relurl && (a.fragments.pop(), r -= l.duration), a.totalduration = r, a.endSN = o - 1, a.startCC = a.fragments[0] ? a.fragments[0].cc : 0, a.endCC = s, u && function (t, e) {
                    for (var i = t[e], n = e - 1; n >= 0; n--) {
                        var a = t[n];
                        a.programDateTime = i.programDateTime - 1e3 * a.duration, i = a
                    }
                }(a.fragments, u), a
            },
            H = window.performance,
            O = window.URL,
            N = function (t, e) {
                void 0 === e && (e = 0), t.errors++, e && t.errors >= e && (t.ignore = !0)
            },
            D = function () {
                function t(t, e) {
                    var i = this;
                    this.video = t, this.endTime = 0, this.fetchTime = 0, this.parsedTime = 0, this.matches = {}, this.parent = {
                        src: "",
                        url: null,
                        topDomain: "",
                        origin: "",
                        pathname: ""
                    }, this.xhr = null, this.onLevelLoaded = e, this.onResourceBufferFull = function (t) {
                        i.run(i.endTime), H.clearResourceTimings()
                    }, H.addEventListener("resourcetimingbufferfull", this.onResourceBufferFull)
                }
                var e = t.prototype;
                return e.run = function (t) {
                    var e = this,
                        i = this.fetchTime,
                        n = this.parent,
                        a = this.video,
                        o = a.src;
                    if (o && o.startsWith("http") && document.body.contains(a)) {
                        if (n.src !== o) {
                            this.matches = {}, n.src = o;
                            var r = n.url = new O(o);
                            n.topDomain = r.hostname.replace(/.*?([^.]+\.[^.]+)$/, "$1"), n.origin = r.origin, n.pathname = r.pathname
                        }
                        for (var s = H.getEntriesByType("resource"), l = s.length; l--;) {
                            var c = s[l];
                            if (c.responseEnd <= i) break;
                            if ("video" === c.initiatorType) {
                                var u = function () {
                                    var i = c.name;
                                    if (i === o) return e.fetchTime = Math.max(c.fetchStart, e.fetchTime), "break";
                                    var a = (0, L.AO)(i);
                                    if ("ts" === a || "aac" === a || "vtt" === a || "key" === a || "mp4" === a || "m4s" === a || "m4v" === a || "m4a" === a) return "continue";
                                    var r = e.matches[i];
                                    if (!r) {
                                        var s = "m3u8" === a,
                                            l = i.includes(n.topDomain),
                                            u = l && i.startsWith(n.origin),
                                            d = u && i.startsWith(n.origin + n.pathname);
                                        r = e.matches[i] = {
                                            count: 0,
                                            ignore: !1,
                                            errors: 0,
                                            onlyVideo: !1,
                                            matches: {
                                                m3u8: s,
                                                topLevelDomain: l,
                                                origin: u,
                                                path: d
                                            }
                                        }
                                    }
                                    r.count++, r.onlyVideo = document.body.querySelectorAll("video audio").length < 2, (r.onlyVideo || r.matches.path || r.matches.m3u8 && r.matches.topLevelDomain) && (e.xhr && (0, A.E)(e.xhr), e.xhr = (0, A.h)({
                                        url: i,
                                        responseType: "text",
                                        oncomplete: function (n) {
                                            var a = n.responseText;
                                            if (a) {
                                                var o, s;
                                                try {
                                                    o = F(a, i)
                                                } catch (t) {
                                                    N(r, 1)
                                                }
                                                if (o && o.fragments && o.fragments.length) {
                                                    s = e.parsedTime, e.parsedTime = t, e.onLevelLoaded(o, s, t)
                                                }
                                            } else N(r, 3)
                                        },
                                        onerror: function () {
                                            N(r, 3)
                                        }
                                    })), e.fetchTime = c.responseEnd
                                }();
                                if ("break" === u) break;
                                if ("continue" === u) continue
                            }
                        }
                        s.length > 50 && (0 === this.fetchTime || H.now() - this.fetchTime > 5e3) && H.clearResourceTimings(), this.endTime = t
                    }
                }, e.destroy = function () {
                    this.video = null, this.matches = null, this.onLevelLoaded = null, H.removeEventListener("resourcetimingbufferfull", this.onResourceBufferFull), this.onResourceBufferFull = null, this.xhr && ((0, A.E)(this.xhr), this.xhr = null)
                }, t
            }(),
            U = i(3343),
            q = 225e3,
            W = function (t) {
                var e = new Uint16Array(t.buffer);
                return String.fromCharCode.apply(null, e)
            },
            Q = function (t, e, i) {
                t && t.removeEventListener(e, i, !1)
            },
            X = function (t, e, i) {
                Q(t, e, i), t.addEventListener(e, i, !1)
            },
            Y = function (t, e, i) {
                E.call(this, t, e, i);
                var r = this,
                    s = r.init,
                    l = r.load,
                    c = r.destroy,
                    u = r.setStartDateTime,
                    d = r.getSeekRange;
                this.processPlaylistMetadata = U.q;
                var h = function (t) {
                        var e = r.fairplay.session,
                            i = t;
                        "string" == typeof i && (i = function (t) {
                            for (var e = (0, a.t)(t), i = e.length, n = new Uint8Array(new ArrayBuffer(i)), o = 0; o < i; o++) n[o] = e.charCodeAt(o);
                            return n
                        }(i)), e.update(i)
                    },
                    p = function (t) {
                        var e = r.fairplay.extractKey(t);
                        "function" == typeof e.then ? e.then(h) : h(e)
                    },
                    w = function (t) {
                        var e = r.fairplay,
                            i = t.target,
                            n = {};
                        (i.getAllResponseHeaders() || "").trim().split(/[\r\n]+/).forEach((function (t) {
                            var e = t.split(": "),
                                i = e.shift();
                            n[i] = e.join(": ")
                        }));
                        var a = {
                                data: i.response,
                                headers: n
                            },
                            o = e.licenseResponseFilter.call(t.target, a, e);
                        o && "function" == typeof o.then ? o.then((function () {
                            p(a.data)
                        })) : p(a.data)
                    },
                    f = function (t) {
                        r.trigger(o.Ew, new k.rG(k.H4, 226e3 + (0, I.E)(t.currentTarget.status), t))
                    },
                    g = function (t) {
                        Object.keys(t.headers).forEach((function (e) {
                            t.setRequestHeader(e, t.headers[e])
                        })), t.send(t.body)
                    },
                    m = function (t) {
                        var e = r.fairplay,
                            i = t.target,
                            n = t.message,
                            a = new XMLHttpRequest;
                        a.responseType = e.licenseResponseType, a.addEventListener("load", w, !1), a.addEventListener("error", f, !1);
                        var o = "";
                        o = "function" == typeof e.processSpcUrl ? e.processSpcUrl(W(e.initData)) : e.processSpcUrl, a.open("POST", o, !0), a.body = e.licenseRequestMessage(n, i), a.headers = {}, [].concat(e.licenseRequestHeaders || []).forEach((function (t) {
                            a.setRequestHeader(t.name, t.value)
                        }));
                        var s = e.licenseRequestFilter.call(t.target, a, e);
                        s && "function" == typeof s.then ? s.then((function () {
                            g(a)
                        })) : g(a)
                    },
                    j = function (t) {
                        r.trigger(o.Ew, new k.rG(k.H4, 225650, t))
                    },
                    v = function (t, e, i, n) {
                        n.code += q, n.key = k.H4, r.trigger(o.Ew, n)
                    },
                    y = function (t) {
                        var e = t.target,
                            i = t.initData;
                        if (e.webkitKeys || e.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")), !e.webkitKeys) throw new Error("Could not create MediaKeys");
                        var n = r.fairplay;
                        n.initData = i, (0, A.h)(n.certificateUrl, (function (t) {
                            var a = new Uint8Array(t.response),
                                o = n.extractContentId(W(i));
                            "string" == typeof o && (o = function (t) {
                                for (var e = new ArrayBuffer(2 * t.length), i = new Uint16Array(e), n = 0, a = t.length; n < a; n++) i[n] = t.charCodeAt(n);
                                return i
                            }(o));
                            var r = function (t, e, i) {
                                    var n = 0,
                                        a = new ArrayBuffer(t.byteLength + 4 + e.byteLength + 4 + i.byteLength),
                                        o = new DataView(a);
                                    new Uint8Array(a, n, t.byteLength).set(t), n += t.byteLength, o.setUint32(n, e.byteLength, !0), n += 4;
                                    var r = new Uint16Array(a, n, e.length);
                                    return r.set(e), n += r.byteLength, o.setUint32(n, i.byteLength, !0), n += 4, new Uint8Array(a, n, i.byteLength).set(i), new Uint8Array(a, 0, a.byteLength)
                                }(i, o, a),
                                s = e.webkitKeys.createSession("video/mp4", r);
                            if (!s) throw new Error("Could not create key session");
                            X(s, "webkitkeymessage", m), X(s, "webkitkeyerror", j), n.session = s
                        }), v, {
                            responseType: "arraybuffer"
                        })
                    },
                    b = function (t) {
                        var e = t.sources[0];
                        if (!r.fairplay || !Object.is(r.fairplay.source, e)) {
                            var i = e.drm;
                            i && i.fairplay ? (r.fairplay = (0, n.Z)({}, {
                                certificateUrl: "",
                                processSpcUrl: "",
                                licenseResponseType: "arraybuffer",
                                licenseRequestHeaders: [],
                                licenseRequestMessage: function (t) {
                                    return t
                                },
                                licenseRequestFilter: function () {},
                                licenseResponseFilter: function () {},
                                extractContentId: function (t) {
                                    return t.split("skd://")[1]
                                },
                                extractKey: function (t) {
                                    return new Uint8Array(t)
                                }
                            }, i.fairplay), r.fairplay.source = e, r.fairplay.destroy = function () {
                                Q(r.video, "webkitneedkey", y);
                                var t = this.session;
                                t && (Q(t, "webkitkeymessage", m), Q(t, "webkitkeyerror", j))
                            }, X(r.video, "webkitneedkey", y)) : r.fairplay && (r.fairplay.destroy(), r.fairplay = null)
                        }
                    };
                this.init = function (t) {
                    b(t), s.call(this, t)
                }, this.load = function (t) {
                    b(t), l.call(this, t)
                }, this.destroy = function (t) {
                    this.fairplay && (this.fairplay.destroy(), this.fairplay = null), this.metaLoader && (this.metaLoader.destroy(), this.metaLoader = null), c.call(this, t)
                }, this.setStartDateTime = function (t) {
                    var e = this,
                        i = this.video;
                    this.loadAndParseHlsMetadata && function (t) {
                        if (!Boolean(O && t && t.getStartDate && H && H.getEntriesByType && H.clearResourceTimings && H.addEventListener)) return !1;
                        var e = t.getStartDate(),
                            i = e.getTime ? e.getTime() : NaN;
                        return !isNaN(i)
                    }(i) && (this.startDateTime = t, (this.metaLoader = new D(i, (function (n, a, o) {
                        var r = n.fragments,
                            s = (n.startProgramDateTime - t) / 1e3;
                        r.forEach((function (t) {
                            var n = t.start = t.startPTS = t.start + s;
                            if (n >= a && n < o && t.tagList && (t.tagList.forEach((function (i) {
                                    var n = i[0],
                                        a = i[1];
                                    return e.processPlaylistMetadata(n, a, t)
                                })), i.duration === 1 / 0 && i.buffered && i.buffered.start(0))) {
                                var r = i.buffered.start(0),
                                    l = e._tracksById.nativemetadata;
                                if (l && l.cues)
                                    for (var c = l.cues, u = 0; u < c.length && c[u].endTime < r; u++) l.removeCue(c[u])
                            }
                        }))
                    }))).run(0));
                    u.call(this, t)
                }, this.getSeekRange = function () {
                    var t = this.metaLoader,
                        e = d.call(this);
                    return t && t.endTime !== e.end && t.run(e.end), e
                }
            };
        (0, n.Z)(Y.prototype, E.prototype), Y.getName = E.getName;
        var $ = Y
    },
    3414: function (t, e, i) {
        "use strict";
        i.d(e, {
            B: function () {
                return n
            },
            K: function () {
                return a
            }
        });
        var n = [40, 120, 320, 480, 640, 720, 1280, 1920],
            a = 4500
    },
    2977: function (t, e, i) {
        "use strict";
        i.d(e, {
            Bf: function () {
                return r
            },
            Cz: function () {
                return a
            },
            IJ: function () {
                return o
            }
        });
        var n = i(3414),
            a = function (t) {
                if (t && t.length) {
                    var e = t.filter((function (t) {
                        return t.type && t.type.match(/video/)
                    }));
                    if (e && e.length) return e
                }
                return !1
            },
            o = function (t) {
                for (var e = 0, i = n.B[e]; i < t && e < n.B.length;) i = n.B[e++];
                return i
            },
            r = function (t, e) {
                var i = t.mediaid,
                    n = t.image;
                return i || n ? i && new RegExp("jwplayer.com/v2/media/" + i).test(n) ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=" + e : n : ""
            }
    },
    6245: function (t, e, i) {
        "use strict";
        i.d(e, {
            g: function () {
                return o
            }
        });
        var n, a = i(6234),
            o = function (t, e, i) {
                var o = function () {
                    try {
                        n = window.localStorage.jwplayerLocalId
                    } catch (t) {}
                    return n = n || (0, a.B)(12)
                }();
                t.forEach((function (t) {
                    var n = t.variations;
                    if (n && n[e]) {
                        n.selected = n.selected || {};
                        var a = function (t, e) {
                                for (var i = function (t) {
                                        for (var e = 1794770992, i = 0, n = t.length; i < n; i++) e ^= t.charCodeAt(i), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                                        return e >>> 0
                                    }(t), n = i % 2520, a = e.reduce((function (t, e) {
                                        return t + e.weight
                                    }), 0), o = 0, r = 0; r < e.length; r++) {
                                    var s = e[r];
                                    if ((o += 2520 * s.weight / a) > n) return s
                                }
                            }(o, n[e]),
                            r = a[i];
                        r && (t[i] = r, n.selected[e] = a)
                    }
                }))
            }
    },
    3296: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return l
            }
        });
        var n = i(2799),
            a = i(8348),
            o = i(1776),
            r = i(7683),
            s = i(5099),
            l = function () {
                function t(t, e, i, n, a) {
                    this.hoverElement = e, this.item = i, this.model = n, this.onView = a, this.type = t, this.container = null, this.played = !1, this.seeking = !1, this.completed = !1, this.src = i.videoThumbnail, this.video = (0, r.V)({
                        class: "jw-reset jw-video-thumbnail"
                    }), this.video.muted = !0, this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this)
                }
                var e = t.prototype;
                return e.adapt = function () {
                    var t = this.video;
                    switch (this.type) {
                    case "overlayItem":
                        this.container = this.hoverElement.querySelector(".jw-related-item-poster"), this.container && this.container.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
                        break;
                    case "widgetItem":
                        this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
                        break;
                    case "shelfItem":
                    default:
                        break;
                    case "posterItem":
                        t.setAttribute("loop", "")
                    }
                    this.container || (this.container = (0, n.az)('<div class="jw-video-thumbnail-generated"></div>'))
                }, e.onPlay = function () {
                    var t = this.video;
                    return this.src ? ((0, n.cn)(this.video, "jw-video-thumbnail-visible"), t && !t.src && (t.src = this.src, t.load()), this.completed && (t.currentTime = 0, (0, n.IV)(t, "jw-video-thumbnail-completed"), this.completed = !1), a.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
                }, e.onPause = function () {
                    (0, n.IV)(this.video, "jw-video-thumbnail-visible"), this.seeking = !1, this.video.pause()
                }, e.onEnded = function () {
                    "posterItem" !== this.type && (0, n.cn)(this.video, "jw-video-thumbnail-completed"), this.completed = !0, this.seeking = !1
                }, e.onFirstFrame = function () {
                    this.played = !0, "function" == typeof this.onView && this.onView(this.item)
                }, e.onError = function () {
                    this.destroy()
                }, e.onViewPoster = function (t, e) {
                    if (e) return this.onPlay();
                    this.onPause()
                }, e.asyncPlay = function () {
                    var t = this,
                        e = this.video;
                    return (e.play() || (0, s.Z)(e)).then((function () {
                        t.played || t.onFirstFrame()
                    })).catch((function (e) {
                        if (20 !== e.code) return 9 !== e.code && "Failed to load because no supported source was found." !== e.message ? t.seekPlay() : void t.destroy()
                    }))
                }, e.seekPlay = function () {
                    var t = this,
                        e = this.video,
                        i = e.hasAttribute("loop"),
                        n = 0,
                        a = this.seek = function (r) {
                            if (t.seeking) {
                                if (!e.duration) return (0, o.U)(a);
                                n || (n = r);
                                var s = (r - n) / 1e3;
                                i ? s %= e.duration : s = Math.min(s, e.duration), e.currentTime = s, e.duration > s || i ? (0, o.U)(a) : t.onEnded()
                            }
                        },
                        r = this.handleSeek = function () {
                            t.onFirstFrame(), t.video.removeEventListener("seeked", r)
                        };
                    this.played || this.video.addEventListener("seeked", r), this.seeking = !0, (0, o.U)(a)
                }, e.addEventListeners = function () {
                    "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this), this.model.on("change:viewable", this.onViewPoster, this)) : (a.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay), this.hoverElement.addEventListener("mouseleave", this.onPause)), this.video.addEventListener("ended", this.onEnded)), this.video.addEventListener("error", this.onError)
                }, e.removeEventListeners = function () {
                    "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this), this.model.off("change:viewable", this.onViewPoster, this)) : (a.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay), this.hoverElement.removeEventListener("mouseleave", this.onPause)), this.video.removeEventListener("ended", this.onEnded)), this.video.removeEventListener("error", this.onError), this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
                }, e.init = function () {
                    this.adapt(this.hoverElement.className), (0, n.cn)(this.container, "jw-video-thumbnail-container"), "widgetItem" === this.type ? (0, n.SH)(this.container, this.video) : this.container.appendChild(this.video), this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0, n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container), this.addEventListeners(), "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
                }, e.isDestroyed = function () {
                    return !this.video
                }, e.destroy = function () {
                    this.isDestroyed() || (this.removeEventListeners(), this.seeking = !1, this.seek && (0, o.W)(this.seek), this.onPause(), this.video.removeAttribute("src"), this.video.load(), this.container.removeChild(this.video), this.video = null, this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0, n.IV)(this.container, "jw-video-thumbnail-container"), this.container = null)
                }, t
            }()
    },
    4646: function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, {
            default: function () {
                return zt
            }
        });
        var n = {};
        i.r(n), i.d(n, {
            email: function () {
                return jt
            },
            embed: function () {
                return yt
            },
            facebook: function () {
                return ht
            },
            link: function () {
                return vt
            },
            linkedin: function () {
                return wt
            },
            pinterest: function () {
                return ft
            },
            reddit: function () {
                return gt
            },
            tumblr: function () {
                return mt
            },
            twitter: function () {
                return pt
            }
        });
        var a = i(4578),
            o = i(8348),
            r = i(1643),
            s = i(328),
            l = i(1261),
            c = i(2799),
            u = i(5004),
            d = i(8165),
            h = i(8268),
            p = i(4697),
            w = i(7462),
            f = i(974),
            g = i(5882),
            m = i(7191),
            j = i(2957),
            v = i(6234),
            y = i(9888),
            b = i(5646),
            k = function () {
                function t(t, e, i) {
                    (0, w.Z)(this, s.ZP), this._model = t, this._api = e, this._playerElement = i, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.closeUi = null, this.tooltipUi = null, this.reset()
                }
                var e = t.prototype;
                return e.setup = function (t) {
                    this.container = t.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                    var e, i, n, a, r = (0, c.az)((void 0 === e && (e = ""), void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === a && (a = ""), '<div class="jw-nextup jw-background-color jw-reset' + (o.Browser.firefox ? " jw-nextup-firefox-pip-fix" : "") + '"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + e + '</div><div class="jw-nextup-title jw-reset-text" dir="auto">' + i + '</div><div class="jw-nextup-duration jw-reset">' + n + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + a + '"></button></div>'));
                    r.querySelector(".jw-nextup-close").appendChild((0, m.W)("close")), this.addContent(r), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                    var s = this._model,
                        l = s.player;
                    this.enabled = !1, s.on("change:nextUp", this.onNextUp, this), l.change("duration", this.onDuration, this), l.change("position", this.onElapsed, this), l.change("streamType", this.onStreamType, this), l.change("state", (function (t, e) {
                        "complete" === e && this.toggle(!1)
                    }), this), this.closeUi = (0, b.Z)(this.closeButton, (function () {
                        this.nextUpSticky = !1, this.toggle(!1)
                    }), this), this.tooltipUi = new g.ZP(this.tooltip).on("click", this.click, this)
                }, e.loadThumbnail = function (t) {
                    return this.nextUpImage = new Image, this.nextUpImage.onload = function () {
                        this.nextUpImage.onload = null
                    }.bind(this), this.nextUpImage.src = t, {
                        backgroundImage: 'url("' + t + '")'
                    }
                }, e.click = function () {
                    var t = this.feedShownId;
                    this.reset(), this._api.next({
                        feedShownId: t,
                        reason: "interaction"
                    })
                }, e.toggle = function (t, e) {
                    if (this.enabled && ((0, c.og)(this.container, "jw-nextup-sticky", Boolean(this.nextUpSticky)), this.shown !== t)) {
                        this.shown = t, (0, c.og)(this.container, "jw-nextup-container-visible", t), (0, c.og)(this._playerElement, "jw-flag-nextup", t);
                        var i = this._model.get("nextUp");
                        t && i ? (this.feedShownId = (0, v.B)(v.F), this.trigger("nextShown", {
                            mode: i.mode,
                            ui: "nextup",
                            itemsShown: [i],
                            feedData: i.feedData,
                            reason: e,
                            feedShownId: this.feedShownId
                        })) : this.feedShownId = ""
                    }
                }, e.setNextUpItem = function (t) {
                    var e = this;
                    setTimeout((function () {
                        var i = t.mediaid,
                            n = t.image,
                            a = t.title,
                            o = t.duration;
                        if (e.thumbnail = e.content.querySelector(".jw-nextup-thumbnail"), (0, c.og)(e.content, "jw-nextup-thumbnail-visible", Boolean(n)), n || i) {
                            var r;
                            r = i ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=120" : n;
                            var s = e.loadThumbnail(r);
                            (0, f.oB)(e.thumbnail, s)
                        }
                        e.header = e.content.querySelector(".jw-nextup-header"), e.header.textContent = (0, c.az)(e.localization.nextUp).textContent, e.title = e.content.querySelector(".jw-nextup-title"), e.title.textContent = a ? (0, c.az)(a).textContent : "", o && (e.duration = e.content.querySelector(".jw-nextup-duration"), e.duration.textContent = "number" == typeof o ? (0, y.timeFormat)(o) : o)
                    }), 500)
                }, e.onNextUp = function (t, e) {
                    this.reset(), e || (e = {
                        showNextUp: !1
                    }), this.enabled = Boolean(e.title || e.image), this.enabled && (e.showNextUp || (this.nextUpSticky = !1, this.toggle(!1)), this.setNextUpItem(e))
                }, e.onDuration = function (t, e) {
                    if (e) {
                        var i = t.get("nextupoffset"),
                            n = -10;
                        i && (n = (0, j.U5)(i, e)), n < 0 && (n += e), (0, j.zz)(i) && e - 5 < n && (n = e - 5), this.offset = n
                    }
                }, e.onElapsed = function (t, e) {
                    var i = this.nextUpSticky;
                    if (this.enabled && !1 !== i) {
                        var n = e >= this.offset;
                        n && void 0 === i ? (this.nextUpSticky = n, this.toggle(n, "time")) : !n && i && this.reset()
                    }
                }, e.onStreamType = function (t, e) {
                    "VOD" !== e && (this.nextUpSticky = !1, this.toggle(!1))
                }, e.element = function () {
                    return this.container
                }, e.addContent = function (t) {
                    this.content && this.removeContent(), this.content = t, this.container.appendChild(t)
                }, e.removeContent = function () {
                    this.content && (this.container.removeChild(this.content), this.content = null)
                }, e.reset = function () {
                    this.nextUpSticky = void 0, this.toggle(!1)
                }, e.destroy = function () {
                    this.off(), this._model.off(null, null, this), this.closeUi && this.closeUi.destroy(), this.tooltipUi && this.tooltipUi.destroy()
                }, t
            }(),
            x = {
                link: function (t) {
                    var e = t.link,
                        i = t.title;
                    return '<a href="' + (e || "") + '" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">' + t.logo + (i || "") + "</a>"
                },
                share: function (t, e) {
                    return '<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">' + e.sharing.heading + "</button>"
                },
                pip: function (t, e) {
                    return '<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">' + e.pipIcon + "</button>"
                },
                keyboardShortcuts: function (t, e) {
                    return '<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">' + e.shortcuts.keyboardShortcuts + "</button>"
                },
                button: function (t) {
                    var e = t.title;
                    return '<button type="button" class="jw-reset-text jw-rightclick-link jw-' + t.button.name + '-item" dir="auto">' + e + "</button>"
                }
            },
            T = function (t, e) {
                var i = t.items,
                    n = (void 0 === i ? [] : i).map((function (t) {
                        return function (t, e) {
                            var i = t.featured,
                                n = t.showLogo,
                                a = t.type;
                            return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + x[a](t, e) + "</li>"
                        }(t, e)
                    }));
                return '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + n.join("") + "</ul></div>"
            },
            C = i(6601),
            _ = i(2268),
            M = i(8518),
            S = {
                free: 0,
                pro: 1,
                premium: 2,
                ads: 3,
                invalid: 4,
                enterprise: 6,
                trial: 7,
                platinum: 8,
                starter: 9,
                business: 10,
                developer: 11
            },
            E = function (t) {
                var e = (0, c.az)(t),
                    i = e.querySelector(".jw-rightclick-logo");
                return i && i.appendChild((0, m.W)("jwplayer-logo")), e
            },
            A = function () {
                function t(t) {
                    this.shortcutsTooltip = t
                }
                var e = t.prototype;
                return e.buildArray = function () {
                    var t = C.i.split("+")[0],
                        e = this.model,
                        i = e.get("edition"),
                        n = e.get("localization").poweredBy,
                        a = '<span class="jw-reset">JW Player ' + t + "</span>",
                        r = {
                            items: [{
                                title: (0, M.t6)(n) ? a + " " + n : n + " " + a,
                                type: "link",
                                featured: !0,
                                showLogo: !0,
                                link: "https://jwplayer.com/learn-more?e=" + S[i]
                            }]
                        },
                        s = r.items;
                    return this.shortcutsTooltip && s.splice(s.length - 1, 0, {
                        type: "keyboardShortcuts"
                    }), this.pipMenu = !o.OS.mobile && "disabled" !== e.get("pipIcon") && (o.Browser.chrome && !(0, _.yS)() || o.Browser.edge || o.Browser.safari), this.pipMenu && s.splice(s.length - 1, 0, {
                        type: "pip"
                    }), r
                }, e.rightClick = function (t) {
                    if (this.lazySetup(), this.mouseOverContext) return !1;
                    this.hideMenu(), this.showMenu(t), this.addHideMenuHandlers()
                }, e.getOffset = function (t) {
                    var e = (0, c.A8)(this.wrapperElement),
                        i = t.pageX - e.left,
                        n = t.pageY - e.top;
                    return this.model.get("touchMode") && (n -= 100), {
                        x: i,
                        y: n
                    }
                }, e.showMenu = function (t) {
                    var e = this,
                        i = this.getOffset(t);
                    return this.el.style.left = i.x + "px", this.el.style.top = i.y + "px", this.outCount = 0, (0, c.cn)(this.playerContainer, "jw-flag-rightclick-open"), (0, c.cn)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout((function () {
                        return e.hideMenu()
                    }), 3e3), !1
                }, e.hideMenu = function (t) {
                    t && this.el && this.el.contains(t.target) || ((0, c.IV)(this.playerContainer, "jw-flag-rightclick-open"), (0, c.IV)(this.el, "jw-open"))
                }, e.lazySetup = function () {
                    var t = this,
                        e = T(this.buildArray(), this.model.get("localization"));
                    if (this.el) {
                        if (this.html !== e) {
                            this.html = e;
                            var i = E(e);
                            (0, c.EU)(this.el);
                            for (var n = i.childNodes.length; n--;) this.el.appendChild(i.firstChild)
                        }
                    } else this.html = e, this.el = E(this.html), this.wrapperElement.appendChild(this.el), this.hideMenuHandler = function (e) {
                        (0, g.dO)(e) || t.hideMenu(e)
                    }, this.overHandler = function () {
                        t.mouseOverContext = !0
                    }, this.outHandler = function (e) {
                        t.mouseOverContext = !1, e.relatedTarget && !t.el.contains(e.relatedTarget) && ++t.outCount > 1 && t.hideMenu()
                    }, this.pipHandler = function () {
                        t.model.set("pip", !t.model.get("pip"))
                    }, this.shortcutsTooltipHandler = function () {
                        t.mouseOverContext = !1, t.hideMenu(), t.shortcutsTooltip.open()
                    }
                }, e.setup = function (t, e, i) {
                    this.wrapperElement = i, this.model = t, this.mouseOverContext = !1, this.playerContainer = e, this.ui = new g.ZP(i).on("longPress", this.rightClick, this)
                }, e.addHideMenuHandlers = function () {
                    this.removeHideMenuHandlers(), this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler), document.addEventListener("touchstart", this.hideMenuHandler), o.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler), document.addEventListener("click", this.hideMenuHandler), this.el.addEventListener("mouseover", this.overHandler), this.el.addEventListener("mouseout", this.outHandler)), this.pipMenu && this.el.querySelector(".jw-pip-item").addEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
                }, e.removeHideMenuHandlers = function () {
                    this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler), this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)), this.el && (this.el.removeEventListener("mouseover", this.overHandler), this.el.removeEventListener("mouseout", this.outHandler), this.pipMenu && this.el.querySelector(".jw-pip-item").removeEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)), document.removeEventListener("click", this.hideMenuHandler), document.removeEventListener("touchstart", this.hideMenuHandler)
                }, e.destroy = function () {
                    clearTimeout(this._menuTimeout), this.removeHideMenuHandlers(), this.el && (this.hideMenu(), this.hideMenuHandler = null, this.el = null), this.wrapperElement && (this.wrapperElement.oncontextmenu = null, this.wrapperElement = null), this.model && (this.model = null), this.ui && (this.ui.destroy(), this.ui = null)
                }, t
            }(),
            I = function (t) {
                function e() {
                    return t.apply(this, arguments) || this
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.buildArray = function () {
                    var e = this.model,
                        i = t.prototype.buildArray.call(this),
                        n = e.get("localization"),
                        a = n.abouttext,
                        o = n.videoInfo,
                        r = i.items;
                    if (a) {
                        for (var s, l, c = 0; c < r.length; c++)
                            if (r[c].featured) {
                                l = r[c], s = c;
                                break
                            } if (l) {
                            l.showLogo = !1;
                            var u = {
                                title: a,
                                type: "link",
                                link: e.get("aboutlink") || l.link
                            };
                            r[s] = u
                        }
                    }
                    return this.shareHandler && r.unshift({
                        type: "share"
                    }), i.items.splice(0, 0, {
                        type: "button",
                        title: o,
                        button: {
                            name: "stats"
                        }
                    }), i
                }, i.enableSharing = function (t) {
                    var e = this;
                    this.shareHandler = function () {
                        e.mouseOverContext = !1, e.hideMenu(), t()
                    }
                }, i.addHideMenuHandlers = function () {
                    var e = this;
                    t.prototype.addHideMenuHandlers.call(this);
                    var i = this.el.querySelector(".jw-share-item");
                    i && i.addEventListener("click", this.shareHandler);
                    var n = this.el.querySelector(".jw-stats-item");
                    n && (this.statsHandler = function () {
                        var t = e.model;
                        e.mouseOverContext = !1, e.hideMenu(), t.set("displayStats", !t.get("displayStats"))
                    }, n.addEventListener("click", this.statsHandler))
                }, i.removeHideMenuHandlers = function () {
                    if (t.prototype.removeHideMenuHandlers.call(this), this.el) {
                        var e = this.el.querySelector(".jw-share-item");
                        e && e.removeEventListener("click", this.shareHandler);
                        var i = this.el.querySelector(".jw-stats-item");
                        i && i.removeEventListener("click", this.statsHandler)
                    }
                }, e
            }(A),
            L = i(7326),
            B = i(7284),
            P = i(3477),
            z = i(3163),
            Z = i(1831),
            R = i(2810),
            V = i(6436),
            F = function (t, e, i, n) {
                if (t && "Auto" === t[0].label && i && i.items.length) {
                    var a = i.items[0].el.querySelector(".jw-auto-label"),
                        o = t[e.index] || {
                            label: ""
                        };
                    a.textContent = n ? "" : o.label
                }
            },
            H = function (t) {
                function e(e, i, n, a) {
                    var o, r, s, l;
                    return (o = t.call(this, "settings", a.settings, null, a) || this).api = e, o.model = i, o.localization = a, o.controlbar = n, o.closeButton = function (t, e, i) {
                        var n = (0, d.Z)("jw-settings-close", e, i.close, [(0, m.W)("close")]);
                        return n.show(), n.ui.on("keydown", (function (t) {
                            var i = t.sourceEvent,
                                n = (0, R.ku)(i.key);
                            ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                        }), void 0), t.appendChild(n.element()), n
                    }(o.el.querySelector(".jw-" + o.name + "-topbar-buttons"), o.close, a), o.backButtonTarget = null, o.defaultChild = null, o.topbar = (r = (0, L.Z)(o), s = r.closeButton, l = r.el.querySelector(".jw-settings-topbar"), new g.ZP(l).on("keydown", (function (t) {
                        var e, i, n = t.sourceEvent,
                            a = t.target,
                            o = (0, c.AH)(a),
                            l = (0, c.i3)(a),
                            u = function (e) {
                                l ? e || l.focus() : r.close(t)
                            };
                        switch ((0, R.ku)(n.key)) {
                        case "Esc":
                            r.close(t);
                            break;
                        case "Left":
                            u();
                            break;
                        case "Right":
                            o && s.element() && a !== s.element() && o.focus();
                            break;
                        case "Tab":
                            n.shiftKey && u(!0);
                            break;
                        case "Up":
                        case "Down":
                        case "Enter":
                            e = a.getAttribute("name"), !(i = r.children[e]) && e && r.backButtonTarget && (i = r.backButtonTarget.children[e]), i && i.open && i.open(t)
                        }
                        if (n.stopPropagation(), /13|32|37|38|39|40/.test(n.keyCode)) return n.preventDefault(), !1
                    }))), o.onDocumentClick = o.onDocumentClick.bind((0, L.Z)(o)), o.addEventListeners(), o
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.setupMenu = function (t, e, i, n, a, o) {
                    if (!i || i.length <= 1) this.removeMenu(t);
                    else {
                        var r = this.children[t];
                        r || (r = new B.Z(t, e, this, this.localization)), r.setMenuItems(r.createItems(i, n, o), a);
                        var s = r.categoryButton && r.categoryButton.element();
                        this.buttonContainer.firstChild === s && (this.defaultChild = r)
                    }
                }, i.onLevels = function (t, e) {
                    var i = this,
                        n = {
                            defaultText: this.localization.auto
                        };
                    this.setupMenu("quality", this.localization.hd, e, (function (t) {
                        return i.api.setCurrentQuality(t)
                    }), t.get("currentLevel") || 0, n)
                }, i.onCurrentLevel = function (t, e) {
                    var i = this.children.quality,
                        n = t.get("visualQuality");
                    n && i && F(t.get("levels"), n.level, i, e), i.items[e].active || (0, R.dt)(i, e)
                }, i.onVisualQuality = function (t, e) {
                    var i = this.children.quality;
                    e && i && F(t.get("levels"), e.level, i, t.get("currentLevel"))
                }, i.onAudioTracks = function (t, e) {
                    var i = this;
                    this.setupMenu("audioTracks", this.localization.audioTracks, e, (function (t) {
                        return i.api.setCurrentAudioTrack(t)
                    }), t.get("currentAudioTrack"))
                }, i.onAudioTrackIndex = function (t, e) {
                    this.children.audioTracks && (0, R.dt)(this.children.audioTracks, e)
                }, i.onCaptionsList = function (t, e) {
                    var i = this,
                        n = {
                            defaultText: this.localization.off
                        },
                        a = t.get("captionsIndex");
                    this.setupMenu("captions", this.localization.cc, e, (function (t) {
                        return i.api.setCurrentCaptions(t)
                    }), a, n);
                    var o = this.children.captions;
                    if (o && !o.children.captionsSettings) {
                        o.topbar = o.topbar || o.createTopbar(), (0, c.EU)(o.topbar);
                        var r = this.localization.captionsStyles,
                            s = new B.Z("captionsSettings", r.subtitleSettings, o, this.localization),
                            l = s.open;
                        s.open = function (t) {
                            var e = s.visible;
                            l.call(s, t), e || i.trigger("captionStylesOpened")
                        };
                        var u = s.destroy;
                        s.destroy = function (t) {
                            o.topbar.parentNode.removeChild(o.topbar), o.topbar = null, o.topbarUI.destroy(), u.call(s, t)
                        };
                        var d = new P.s(this.localization.settings, s.open);
                        o.topbar.appendChild(d.el);
                        var h = t.get("captions");
                        ! function e(n) {
                            var a = new P.s(i.localization.reset, (function () {
                                i.model.set("captions", (0, w.Z)({}, Z.R)), e(!0)
                            }));
                            a.el.classList.add("jw-settings-reset");
                            var o = [];
                            (0, R.JU)(r).forEach((function (e) {
                                !n && h && h[e.name] ? e.val = h[e.name] : e.val = e.defaultVal;
                                var a = e.values.indexOf(e.val);
                                e.currentSelection = e.options[a];
                                var r = new B.Z(e.name, e.label, s, i.localization),
                                    l = new P.s(e, r.open, z.v2);
                                r.buttonContainer = l;
                                var c = r.createItems(e.options, (function (n) {
                                    var a = l.el.querySelector(".jw-settings-content-item-value");
                                    ! function (e, n) {
                                        var a = t.get("captions"),
                                            o = e.name,
                                            r = e.values[n],
                                            s = (0, w.Z)({}, a);
                                        s[o] = r, i.model.set("captions", s)
                                    }(e, n), a.innerText = e.options[n]
                                }), null);
                                r.setMenuItems(c, e.values.indexOf(e.val) || 0), o.push(l)
                            })), o.push(a), s.setMenuItems(o)
                        }()
                    }
                }, i.onPlaylistItem = function () {
                    this.removeMenu("captions"), this.removeMenu("audioTracks"), this.removeMenu("quality"), this.controlbar.elements.captionsButton.hide(), this.visible && this.close()
                }, i.onCaptionsIndex = function (t, e) {
                    var i = this.children.captions;
                    i && (0, R.dt)(i, e), this.controlbar.toggleCaptionsButtonState(Boolean(e))
                }, i.onPlaybackRates = function (t, e) {
                    var i = this;
                    !e && t && (e = t.get("playbackRates"));
                    var n = this.localization,
                        a = this.children;
                    if (t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls")) {
                        var o = e.indexOf(t.get("playbackRate")),
                            r = {
                                tooltipText: n.playbackRates
                            };
                        this.setupMenu("playbackRates", this.localization.playbackRates, e, (function (t) {
                            return i.api.setPlaybackRate(t)
                        }), o, r)
                    } else a.playbackRates && this.removeMenu("playbackRates")
                }, i.onPlaybackRate = function (t, e) {
                    var i = t.get("playbackRates"),
                        n = -1;
                    i && (n = i.indexOf(e)), (0, R.dt)(this.children.playbackRates, n)
                }, i.onPlaybackRateControls = function (t) {
                    this.onPlaybackRates(t)
                }, i.onCastActive = function (t, e, i) {
                    e !== i && (e ? (this.removeMenu("audioTracks"), this.removeMenu("quality"), this.removeMenu("playbackRates"), this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")), this.onLevels(t, t.get("levels")), this.onPlaybackRates(t, t.get("playbackRates")), this.onCaptionsList(t, t.get("captionsList"))))
                }, i.onChangeStreamType = function () {
                    this.onPlaybackRates(this.model)
                }, i.onDocumentClick = function (t) {
                    /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
                }, i.addEventListeners = function () {
                    var t = this.updateControlbarButtons,
                        e = this.model;
                    this.on("menuAppended menuRemoved", t, this), e.change("levels", this.onLevels, this), e.on("change:currentLevel", this.onCurrentLevel, this), e.on("change:visualQuality", this.onVisualQuality, this), e.change("audioTracks", this.onAudioTracks, this), e.on("change:currentAudioTrack", this.onAudioTrackIndex, this), e.change("captionsList", this.onCaptionsList, this), e.on("change:playlistItem", this.onPlaylistItem, this), e.change("captionsIndex", this.onCaptionsIndex, this), e.change("playbackRates", this.onPlaybackRates, this), e.change("playbackRate", this.onPlaybackRate, this), e.on("change:playbackRateControls", this.onPlaybackRateControls, this), e.on("change:castActive", this.onCastActive, this), e.on("change:streamType", this.onChangeStreamType, this)
                }, i.open = function (t) {
                    var e = (0, V.i)(this.model.get("containerWidth"));
                    if (!this.visible) {
                        e < 2 && "LIVE" !== this.model.get("streamType") && (this.mediaStateWhenOpened = this.model.get("state"), this.api.pause());
                        var i = this.controlbar.elements.settingsButton.element();
                        i && i.setAttribute("aria-expanded", !0), this.el.parentNode.classList.add("jw-settings-open"), this.trigger("visibility", {
                            visible: !0,
                            evt: t
                        }), document.addEventListener("click", this.onDocumentClick), this.el.setAttribute("aria-expanded", "true"), this.visible = !0
                    }
                }, i.close = function (t) {
                    var e, i = (0, R.ku)(t && t.sourceEvent && t.sourceEvent.key),
                        n = this.controlbar.elements.settingsButton.element(),
                        a = (0, V.i)(this.model.get("containerWidth"));
                    switch (n && n.setAttribute("aria-expanded", !1), a < 2 && (this.mediaStateWhenOpened !== r.r0 && this.mediaStateWhenOpened !== r.Kb || this.api.play()), this.el.setAttribute("aria-expanded", "false"), this.el.parentNode.classList.remove("jw-settings-open"), this.trigger("visibility", {
                        visible: !1,
                        evt: t
                    }), document.removeEventListener("click", this.onDocumentClick), this.visible = !1, this.openMenus.length && this.closeChildren(), i) {
                    case "Right":
                        e = (0, c.AH)(n);
                        break;
                    case "Left":
                        e = (0, c.i3)(n);
                        break;
                    case "Tab":
                        if (t.shiftKey) {
                            e = (0, c.i3)(n);
                            break
                        }
                        case "Enter":
                        case "Esc":
                            e = n
                    }
                    e && e.focus({
                        preventScroll: !event
                    })
                }, i.updateControlbarButtons = function (t) {
                    var e = this.children,
                        i = this.controlbar,
                        n = this.model,
                        a = Boolean(e.quality) || Boolean(e.playbackRates) || Boolean(e.audioTracks) || Object.keys(e).length > 1;
                    i.elements.settingsButton.toggle(a), e.captions && i.toggleCaptionsButtonState(Boolean(n.get("captionsIndex")));
                    var o = i.elements[t + "Button"];
                    if (o) {
                        var r = Boolean(e[t]);
                        o.toggle(r)
                    } else if (a)
                        for (var s = Object.keys(this.children), l = 0; l < s.length; l++) {
                            var c = this.children[s[l]],
                                u = c.categoryButton && c.categoryButton.element();
                            this.buttonContainer.firstChild === u && (this.defaultChild = c)
                        }
                }, i.destroy = function () {
                    R.MR.call(this), document.removeEventListener("click", this.onDocumentClick)
                }, e
            }(B.Z),
            O = i(4225),
            N = i(6391);

        function D(t, e, i, n) {
            var a, o = !1,
                r = i.get("localization").shortcuts,
                s = (0, c.az)(function (t, e) {
                    return '<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="' + e + '"><span class="jw-hidden" id="jw-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">' + e + '</span><button role="switch" aria-label="' + e + '" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">' + t.map((function (t) {
                        return '<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">' + t.description + '</span><span class="jw-shortcuts-key jw-reset">' + t.key + "</span></div>"
                    })).join("") + "</div></div></div></div>"
                }(function (t) {
                    var e = t.playPause,
                        i = t.volumeToggle,
                        n = t.fullscreenToggle,
                        a = t.seekPercent,
                        o = t.increaseVolume,
                        r = t.decreaseVolume,
                        s = t.seekForward,
                        l = t.seekBackward;
                    return [{
                        key: t.spacebar,
                        description: e
                    }, {
                        key: "↑",
                        description: o
                    }, {
                        key: "↓",
                        description: r
                    }, {
                        key: "→",
                        description: s
                    }, {
                        key: "←",
                        description: l
                    }, {
                        key: "c",
                        description: t.captionsToggle
                    }, {
                        key: "f",
                        description: n
                    }, {
                        key: "m",
                        description: i
                    }, {
                        key: "0-9",
                        description: a
                    }]
                }(r), r.keyboardShortcuts)),
                l = new g.ZP(s.querySelector(".jw-switch")),
                u = function () {
                    (0, c.IV)(s, "jw-open"), document.removeEventListener("click", a), o = !1, n(!1)
                };
            a = function (t) {
                var e = t.target;
                /jw-shortcuts|jw-switch/.test(e.className) || u()
            };
            var h, p = function () {
                    l.el.setAttribute("aria-checked", i.get("enableShortcuts")), (0, c.cn)(s, "jw-open"), s.querySelector(".jw-shortcuts-close").focus(), document.addEventListener("click", a), o = !0, n(!0)
                },
                w = function (t) {
                    var e = t.currentTarget,
                        n = "true" !== e.getAttribute("aria-checked");
                    e.setAttribute("aria-checked", n.toString()), i.set("enableShortcuts", n)
                };
            return h = (0, d.Z)("jw-shortcuts-close", u, i.get("localization").close, [(0, m.W)("close")]), (0, c.SH)(s, h.element()), h.show(), t.appendChild(s), l.on("click", w), {
                el: s,
                open: p,
                close: u,
                destroy: function () {
                    u(), l.destroy()
                },
                toggleVisibility: function () {
                    o ? u() : p()
                }
            }
        }
        var U = function (t) {
            function e(e, i, n) {
                var a;
                (a = t.call(this) || this).element = (0, c.az)(function (t, e) {
                    return '<div class="jw-float-bar jw-reset">\n            <div class="jw-float-bar-title" aria-label="' + e + '" >' + e + '</div>\n            <div class="jw-float-bar-icon jw-float-icon jw-icon jw-button-color jw-reset" aria-label="' + t + '" tabindex="0">\n            </div>\n        </div>'
                }(i, n));
                var o = a.element.querySelector(".jw-float-bar-icon");
                return o.appendChild((0, m.W)("floating-close")), a.ui = (0, b.Z)(o, (function () {
                    a.trigger(r.xf)
                })), a.title = a.element.querySelector(".jw-float-bar-title"), e.appendChild(a.element), a
            }(0, a.Z)(e, t);
            var i = e.prototype;
            return i.destroy = function () {
                this.element && (this.ui.destroy(), this.element.parentNode.removeChild(this.element), this.element = null), this.off()
            }, i.setTitle = function (t) {
                t ? (this.title.innerText = t, this.title.setAttribute("aria-label", t)) : (this.title.innerHTML = "&nbsp;", this.title.setAttribute("aria-label", ""))
            }, e
        }(s.ZP);
        i(9725), i(1334);
        var q = o.OS.mobile ? 4e3 : 2e3,
            W = [27];
        O.Z.cloneIcon = m.W, N.Z.forEach((function (t) {
            if (t.getState() === r.Vy) {
                var e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                e && !e.hasChildNodes() && e.appendChild(O.Z.cloneIcon("error"))
            }
        }));
        var Q = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this) || this).activeTimeout = -1, n.inactiveTime = 0, n.context = e, n.controlbar = null, n.displayContainer = null, n.backdrop = null, n.enabled = !0, n.instreamState = null, n.keydownCallback = null, n.keyupCallback = null, n.blurCallback = null, n.mute = null, n.nextUpToolTip = null, n.playerContainer = i, n.wrapperElement = i.querySelector(".jw-wrapper"), n.rightClickMenu = null, n.settingsMenu = null, n.shortcutsTooltip = null, n.showing = !1, n.muteChangeCallback = null, n.unmuteCallback = null, n.logo = null, n.div = null, n.dimensions = {}, n.userInactiveTimeout = function () {
                        var t = n.inactiveTime - (0, u.z)();
                        n.inactiveTime && t > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, t) : n.playerContainer.querySelector(".jw-tab-focus") ? n.resetActiveTimeout() : n.userInactive()
                    }, n
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.resetActiveTimeout = function () {
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.inactiveTime = 0
                }, i.enable = function (t, e) {
                    var i = this,
                        n = this.context.createElement("div");
                    n.className = "jw-controls jw-reset", this.div = n;
                    var a = this.context.createElement("div");
                    a.className = "jw-controls-backdrop jw-reset", this.backdrop = a, this.logo = this.playerContainer.querySelector(".jw-logo");
                    var s = e.get("touchMode");
                    if (this.focusPlayerElement = function () {
                            e.get("isFloating") ? i.wrapperElement.querySelector("video").focus({
                                preventScroll: !0
                            }) : i.playerContainer.focus({
                                preventScroll: !0
                            })
                        }, !this.displayContainer) {
                        var u = new p.Z(e, t);
                        u.buttons.display.on("click enter", (function () {
                            i.trigger(r.cy), i.userActive(1e3), t.playToggle({
                                reason: "interaction"
                            }), i.focusPlayerElement()
                        })), this.div.appendChild(u.element()), this.displayContainer = u
                    }
                    o.OS.mobile || (this.shortcutsTooltip = new D(this.wrapperElement, t, e, (function (t) {
                        t || i.focusPlayerElement()
                    }))), this.rightClickMenu = new I(this.shortcutsTooltip), s && (0, c.cn)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement), e.get("floating") && this.setupFloating(t, e);
                    var w = this.controlbar = new h.Z(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                    w.on(r.xf, (function () {
                        i.off("userInactive", i.focusPlayerElement, i), i.once("userInactive", i.focusPlayerElement, i), i.userActive()
                    })), w.on("nextShown", (function (t) {
                        this.trigger("nextShown", t)
                    }), this);
                    var f = function (i) {
                        var n = (0, l.v)(e.get("volume") + i, 0, 100);
                        t.setVolume(n)
                    };
                    if (w.on("adjustVolume", f, this), e.get("nextUpDisplay") && !w.nextUpToolTip) {
                        var g = new k(e, t, this.playerContainer);
                        g.on("all", this.trigger, this), g.setup(this.context), w.nextUpToolTip = g, this.div.appendChild(g.element())
                    }
                    this.div.appendChild(w.element());
                    var j = e.get("localization"),
                        v = this.settingsMenu = new H(t, e.player, this.controlbar, j),
                        y = null;
                    v.on("menuVisibility", (function (n) {
                        var a = n.visible,
                            o = n.evt,
                            s = e.get("state"),
                            l = {
                                reason: "settingsInteraction"
                            },
                            c = i.controlbar.elements.settingsButton,
                            u = "keydown" === (o && o.sourceEvent || o || {}).type,
                            d = a || u ? 0 : q;
                        i.userActive(d), (0, V.i)(e.get("containerWidth")) < 2 && (a && s === r.r0 ? t.pause(l) : a || s !== r._5 || y !== r.r0 || t.play(l)), y = s, !a && u && c ? c.element().focus() : o && i.focusPlayerElement()
                    })), v.on("captionStylesOpened", (function () {
                        return i.trigger("captionStylesOpened")
                    })), w.on("settingsInteraction", (function (t, e, i) {
                        if (e) return v.defaultChild.toggle(i, !0);
                        v.children[t].toggle(i)
                    })), o.OS.mobile ? this.div.appendChild(v.el) : (this.playerContainer.setAttribute("aria-describedby", "jw-shortcuts-tooltip-explanation"), this.div.insertBefore(v.el, w.element()));
                    var b = function (e) {
                        if (e.get("autostartMuted")) {
                            var n = function () {
                                    return i.unmuteAutoplay(t, e)
                                },
                                a = function (t, e) {
                                    e || n()
                                };
                            o.OS.mobile && (i.mute = (0, d.Z)("jw-autostart-mute jw-off", n, e.get("localization").unmute, [(0, m.W)("volume-0")]), i.mute.show(), i.div.appendChild(i.mute.element())), w.renderVolume(!0, e.get("volume")), (0, c.cn)(i.playerContainer, "jw-flag-autostart"), e.on("change:autostartFailed", n, i), e.on("change:autostartMuted change:mute", a, i), i.muteChangeCallback = a, i.unmuteCallback = n
                        }
                    };
                    e.once("change:autostartMuted", b), b(e);
                    var x = function (i) {
                            var n = 0,
                                a = e.get("duration"),
                                o = e.get("position");
                            if ("DVR" === e.get("streamType")) {
                                var r = e.get("dvrSeekLimit");
                                n = a, a = Math.max(o, -r)
                            }
                            var s = (0, l.v)(o + i, n, a);
                            t.seek(s, {
                                reason: "interaction"
                            })
                        },
                        T = function (n) {
                            if (n.ctrlKey || n.metaKey) return !0;
                            var a = !i.settingsMenu || !i.settingsMenu.visible,
                                o = !0 === e.get("enableShortcuts"),
                                r = i.instreamState;
                            if (o || -1 !== W.indexOf(n.keyCode)) {
                                switch (n.keyCode) {
                                case 27:
                                    if (e.get("fullscreen")) t.setFullscreen(!1), i.playerContainer.blur(), i.userInactive();
                                    else {
                                        var s = t.getPlugin("related");
                                        s && s.close({
                                            type: "escape"
                                        })
                                    }
                                    i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(), e.get("displayStats") && e.set("displayStats", !1), i.shortcutsTooltip && i.shortcutsTooltip.close();
                                    break;
                                case 13:
                                case 32:
                                    if (document.activeElement.classList.contains("jw-switch") && 13 === n.keyCode) return !0;
                                    t.playToggle({
                                        reason: "interaction"
                                    });
                                    break;
                                case 37:
                                    !r && a && x(-5);
                                    break;
                                case 39:
                                    !r && a && x(5);
                                    break;
                                case 38:
                                    a && f(10);
                                    break;
                                case 40:
                                    a && f(-10);
                                    break;
                                case 67:
                                    var l = t.getCaptionsList().length;
                                    if (l) {
                                        var c = (t.getCurrentCaptions() + 1) % l;
                                        t.setCurrentCaptions(c)
                                    }
                                    break;
                                case 77:
                                    t.setMute();
                                    break;
                                case 70:
                                    t.setFullscreen();
                                    break;
                                case 191:
                                    i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
                                    break;
                                default:
                                    if (n.keyCode >= 48 && n.keyCode <= 59) {
                                        var u = (n.keyCode - 48) / 10 * e.get("duration");
                                        t.seek(u, {
                                            reason: "interaction"
                                        })
                                    }
                                }
                                return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(), !1) : void 0
                            }
                        };
                    this.playerContainer.addEventListener("keydown", T), this.keydownCallback = T;
                    var C = function (t) {
                        switch (t.keyCode) {
                        case 9:
                            var e = i.playerContainer.contains(t.target) ? 0 : q;
                            i.userActive(e);
                            break;
                        case 32:
                            t.preventDefault()
                        }
                    };
                    this.playerContainer.addEventListener("keyup", C), this.keyupCallback = C;
                    var _ = function (t) {
                        i.off("userInactive", i.focusPlayerElement, i);
                        var e = t.relatedTarget || document.querySelector(":focus");
                        e && (i.playerContainer.contains(e) || i.userInactive())
                    };
                    this.playerContainer.addEventListener("blur", _, !0), this.blurCallback = _;
                    var M = function t() {
                        "jw-shortcuts-tooltip-explanation" === i.playerContainer.getAttribute("aria-describedby") && i.playerContainer.removeAttribute("aria-describedby"), i.playerContainer.removeEventListener("blur", t, !0)
                    };
                    this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", M, !0), this.onRemoveShortcutsDescription = M), this.userActive(), this.addControls(), this.addBackdrop(), e.set("controlsEnabled", !0)
                }, i.addControls = function () {
                    this.wrapperElement.appendChild(this.div)
                }, i.disable = function (t) {
                    var e = this.nextUpToolTip,
                        i = this.settingsMenu,
                        n = this.controlbar,
                        a = this.rightClickMenu,
                        o = this.shortcutsTooltip,
                        r = this.playerContainer,
                        s = this.div;
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.off(), t.off(null, null, this), t.set("controlsEnabled", !1), s.parentNode && ((0, c.IV)(r, "jw-flag-touch"), s.parentNode.removeChild(s)), n && n.destroy(), a && a.destroy(), this.keydownCallback && r.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && r.removeEventListener("keyup", this.keyupCallback), this.blurCallback && r.removeEventListener("blur", this.blurCallback), this.onRemoveShortcutsDescription && r.removeEventListener("blur", this.onRemoveShortcutsDescription), this.displayContainer && this.displayContainer.destroy(), e && e.destroy(), i && i.destroy(), t.get("displayStats") && t.set("displayStats", !1), o && o.destroy(), this.removeBackdrop()
                }, i.controlbarHeight = function () {
                    return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight), this.dimensions.cbHeight
                }, i.element = function () {
                    return this.div
                }, i.resize = function () {
                    this.dimensions = {}
                }, i.unmuteAutoplay = function (t, e) {
                    var i = !e.get("autostartFailed"),
                        n = e.get("mute");
                    i ? n = !1 : e.set("playOnViewable", !1), this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), e.set("autostartFailed", void 0), e.set("autostartMuted", void 0), t.setMute(n), this.controlbar.renderVolume(n, e.get("volume")), this.mute && this.mute.hide(), (0, c.IV)(this.playerContainer, "jw-flag-autostart"), this.userActive()
                }, i.mouseMove = function (t) {
                    var e = this.controlbar.element().contains(t.target),
                        i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(t.target),
                        n = this.logo && this.logo.contains(t.target),
                        a = e || i || n ? 0 : q;
                    this.userActive(a)
                }, i.userActive = function (t) {
                    void 0 === t && (t = q), t > 0 ? (this.inactiveTime = (0, u.z)() + t, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(), this.showing || ((0, c.IV)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
                }, i.userInactive = function () {
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, (0, c.cn)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive"))
                }, i.addBackdrop = function () {
                    var t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                    this.wrapperElement.insertBefore(this.backdrop, t)
                }, i.removeBackdrop = function () {
                    var t = this.backdrop.parentNode;
                    t && t.removeChild(this.backdrop)
                }, i.setupInstream = function () {
                    this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), (0, c.IV)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
                }, i.destroyInstream = function (t) {
                    this.instreamState = null, this.addBackdrop(), t.get("autostartMuted") && (0, c.cn)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "0")
                }, i.setupFloating = function (t, e) {
                    var i = this,
                        n = e.get("localization"),
                        a = e.get("advertising"),
                        o = e.get("floating"),
                        s = function () {
                            var t = e.get("playlistItem").title;
                            return o.showTitle ? i.instreamState ? n.advertising && n.advertising.displayHeading ? n.advertising.displayHeading : " " : t : " "
                        },
                        l = new U(this.wrapperElement, n.close, s());
                    a && a.outstream && a.dismissible ? l.on(r.xf, (function () {
                        return t.remove()
                    })) : l.on(r.xf, (function () {
                        return i.trigger("dismissFloating", {
                            doNotForward: !0
                        })
                    })), o && !1 !== o.dismissible && (0, c.cn)(this.playerContainer, "jw-floating-dismissible"), e.on("change:playlistItem", (function () {
                        l.setTitle(s())
                    }), this), e.on("instreamMode", (function () {
                        l.setTitle(s())
                    }), this)
                }, e
            }(s.ZP),
            X = i(8711),
            Y = i.n(X),
            $ = i(1983),
            K = i.n($),
            G = i(1277),
            J = i.n(G),
            tt = i(7928),
            et = i.n(tt),
            it = i(5484),
            nt = i.n(it),
            at = i(6598),
            ot = i.n(at),
            rt = i(8053),
            st = i.n(rt),
            lt = i(1666),
            ct = i.n(lt),
            ut = i(4375),
            dt = i.n(ut),
            ht = {
                label: "facebook",
                src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
                svg: Y(),
                jwsource: "fb"
            },
            pt = {
                label: "twitter",
                src: "http://twitter.com/intent/tweet?url=[URL]",
                svg: ot(),
                jwsource: "twi"
            },
            wt = {
                label: "linkedin",
                src: "https://www.linkedin.com/cws/share?url=[URL]",
                svg: K(),
                jwsource: "lkn"
            },
            ft = {
                label: "pinterest",
                src: "http://pinterest.com/pin/create/button/?url=[URL]",
                svg: J(),
                jwsource: "pin"
            },
            gt = {
                label: "reddit",
                src: "http://www.reddit.com/submit?url=[URL]",
                svg: et(),
                jwsource: "rdt"
            },
            mt = {
                label: "tumblr",
                src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
                svg: nt(),
                jwsource: "tbr"
            },
            jt = {
                label: "email",
                src: "mailto:?body=[URL]",
                svg: st(),
                jwsource: "em"
            },
            vt = {
                label: "link",
                svg: ct(),
                jwsource: "cl"
            },
            yt = {
                label: "embed",
                svg: dt(),
                jwsource: "ceb"
            },
            bt = i(549),
            kt = i.n(bt),
            xt = i(6042),
            Tt = !1,
            Ct = function (t, e, a, o, r) {
                var l = this,
                    u = r && r.openLink || c.nG;
                (0, w.Z)(this, s.ZP);
                var d, h, p = [ht, pt, jt],
                    f = function (t) {
                        a.trigger("settingsInteraction", "sharing", !1, t)
                    };
                ! function () {
                    if (Array.isArray(e.sites)) {
                        var i = [];
                        (0, xt.S6)(e.sites, (function (t) {
                            (0, xt.HD)(t) && n[t] ? i.push(n[t]) : (0, xt.Kn)(t) && i.push(t)
                        })), p = i
                    }
                    t.addButton(kt(), o, f, "share", "jw-settings-sharing");
                    var r = a.el.querySelector(".jw-settings-sharing");
                    r.setAttribute("aria-controls", "jw-settings-submenu-sharing"), r.setAttribute("role", "button")
                }();
                var g = function (t, e) {
                        var i = t.indexOf("MEDIAID");
                        return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
                    },
                    m = function (t, i) {
                        if (i) return i;
                        if (e.link) {
                            var n = g(e.link, t);
                            if (n) return n
                        }
                        return window.top === window ? window.location.toString() : document.referrer
                    },
                    j = function () {
                        var i = t.getPlaylistItem(),
                            n = p.filter((function (t) {
                                return "link" === t.label
                            }))[0],
                            a = i.mediaid,
                            o = i.link;
                        d = m(a, o), n ? -1 === n.src.indexOf(d) && (n.src = d) : p.push((0, w.Z)({
                            src: d
                        }, vt));
                        var r = p.filter((function (t) {
                            return "embed" === t.label
                        }));
                        h = function (t) {
                            var i = null;
                            if (e.code) {
                                i = g(e.code, t) || i
                            }
                            return i
                        }(i.mediaid) || e.code, r[0] ? r[0].src = decodeURIComponent(h) : e.code && p.push((0, w.Z)({
                            src: decodeURIComponent(h)
                        }, yt))
                    },
                    v = function (t) {
                        l.trigger("click", {
                            method: t
                        })
                    };
                return this.getShareMethods = function () {
                    return j(), p
                }, this.getLink = function (t, e) {
                    return m(t, e)
                }, this.getHeading = function () {
                    return o
                }, this.onSubmenuToggle = function (t, e) {
                    void 0 === e && (e = "interaction"), t && !Tt && (Tt = !0, i(3484)), l.trigger(t ? "open" : "close", {
                        visible: t,
                        method: e
                    })
                }, this.action = function (e) {
                    var i = p[e].label;
                    "embed" !== i && "link" !== i ? function (e) {
                        var i = e.src;
                        if ((0, xt.mf)(i)) i(d);
                        else if (null != i) {
                            var n = encodeURIComponent(d || "share"),
                                a = i.replace(/\[URL\]/gi, n);
                            i === a && (a = i + n), t.pause({
                                reason: "sharing"
                            }), u(a, "_blank", {
                                rel: "noreferrer"
                            }), window.focus()
                        }
                        v(e.label)
                    }(p[e]) : v(i)
                }, this.open = function () {
                    a.trigger("sharingApi", !0)
                }, this.close = function () {
                    a.trigger("sharingApi", !1)
                }, this
            },
            _t = function (t, e) {
                var i = this,
                    n = (0, c.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
                n.querySelector(".jw-icon").appendChild((0, m.W)("next")), this.el = n, this.skiptext = this.el.querySelector(".jw-skiptext"), this.skipUI = (0, b.Z)(this.el, this.skipAd, this), this.model = t, this.skipMessage = t.get("skipText") || "", this.skipMessageCountdown = t.get("skipMessage") || "", this.waitTime = (0, j.U5)(t.get("skipOffset")), t.change("duration", (function (n, a) {
                    a && (i.waitTime || (i.waitTime = (0, j.U5)(n.get("skipOffset"), a)), i.el.parentNode !== e && i.waitTime + 2 < a && (t.change("position", (function (t, e) {
                        var n = i.waitTime - (e || 0);
                        n > 0 ? i.updateMessage(i.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(n) + "$2")) : null !== i.waitTime && (i.updateMessage(i.skipMessage), i.skippable = !0, (0, c.cn)(i.el, "jw-skippable"))
                    }), i), e.appendChild(i.el)))
                }), this)
            };
        (0, w.Z)(_t.prototype, s.ZP, {
            updateMessage: function (t) {
                (0, c.nh)(this.skiptext, t), this.el.setAttribute("aria-label", t)
            },
            skipAd: function () {
                this.skippable && (this.skipUI.off(), this.trigger(r.k3))
            },
            destroy: function () {
                this.model.off(null, null, this), this.skipUI && this.skipUI.destroy(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        });
        var Mt = _t,
            St = function (t, e, i) {
                this.api = t, this.playerElement = e, this.wrapperElement = i
            };
        (0, w.Z)(St.prototype, {
            setup: function (t) {
                var e = this;
                this.element = (0, c.az)(function (t) {
                    return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + t + ' tabindex="0"></div>'
                }(t)), this.element.appendChild((0, m.W)("close")), this.ui = (0, b.Z)(this.element, (function () {
                    e.api.remove()
                }), this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), (0, c.cn)(this.playerElement, "jw-flag-top")
            },
            destroy: function () {
                this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null)
            }
        });
        var Et = St,
            At = function (t) {
                var e = t.label,
                    i = t.src,
                    n = t.options,
                    a = t.displayText,
                    o = t.svg,
                    r = void 0 === o ? "" : o,
                    s = t.icon,
                    l = void 0 === s ? "" : s,
                    c = l ? '<img src="' + l + '" class="jw-svg-icon"/>' : r;
                return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (a || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + i + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (a || e) + '"><div class="jw-text">' + n.copyText + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">' + c + " " + (a || e) + "</button>"
            },
            It = function (t) {
                function e(e, i, n) {
                    var a;
                    return void 0 === n && (n = At), (a = t.call(this, e, i, n) || this).content = e, a.el && e.label ? (a.el.setAttribute("aria-label", e.label), a.el.setAttribute("role", "button"), a.el.setAttribute("tabindex", "0"), a) : (0, L.Z)(a)
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.activate = function () {
                    if ("embed" === this.content.label || "link" === this.content.label) {
                        var t = this.el.querySelector(".jw-sharing-textarea");
                        if (t.select(), document.execCommand("copy")) {
                            var e = t.nextSibling;
                            (0, c.cn)(e, "jw-open"), setTimeout((function () {
                                (0, c.IV)(e, "jw-open")
                            }), 1e3)
                        } else window.prompt("Copy the text below", this.content.src);
                        t.blur()
                    }
                }, i.destroy = function () {
                    this.ui.destroy()
                }, e
            }(P.s),
            Lt = It,
            Bt = function (t) {
                function e() {
                    return t.apply(this, arguments) || this
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.createCategoryButton = function () {
                    return "sharing" === this.name && (this.icon = kt()), t.prototype.createCategoryButton.call(this, this.title)
                }, i.createItems = function (e, i, n, a) {
                    return "sharing" === this.name && (a = Lt), t.prototype.createItems.apply(this, [e, i, n, a])
                }, e
            }(B.Z),
            Pt = function (t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this, e, i) || this).playerContainer = i, n.sharing = null, n.sharingApi = !1, n.dismissButton = null, n.skipButton = null, n
                }(0, a.Z)(e, t);
                var i = e.prototype;
                return i.disable = function (e) {
                    t.prototype.disable.call(this, e), this.dismissButton && (this.dismissButton.destroy(), this.dismissButton = null)
                }, i.enable = function (e, i) {
                    var n = this;
                    t.prototype.enable.call(this, e, i), i.change("instream", (function () {
                        n._destroySkipButton()
                    })), i.change("skipButton", (function (t, i) {
                        n._destroySkipButton(), i && (n.skipButton = new Mt(t, n.div), n.skipButton.on(r.k3, (function () {
                            t.set("skipButton", !1), e.skipAd()
                        })), n.controlbar.adSkipButton = n.skipButton)
                    }));
                    var a = i.get("localization"),
                        o = i.get("advertising");
                    o && o.outstream && o.dismissible && (this.dismissButton = new Et(e, this.playerContainer, this.playerContainer.querySelector(".jw-top")), this.dismissButton.setup(a.close));
                    var s = i.get("sharing");
                    if (!this.sharing && s) {
                        var l = this.controlbar,
                            c = this.settingsMenu,
                            u = a.sharing;
                        this.sharing = new Ct(e, s, l, u.heading), e.addPlugin("sharing", this.sharing), i.change("playlistItem", (function () {
                            var t = n.sharing.getShareMethods().map((function (t) {
                                var e = u[t.label];
                                return e && (t.displayText = e), t
                            }));
                            c.removeMenu("sharing");
                            var e = new Bt("sharing", a.sharing.heading, c, a),
                                i = e.open,
                                o = e.close,
                                r = a.sharing.copied;
                            e.open = function (t) {
                                e.visible || n._onSharingActive(!0), i(t)
                            }, e.close = function (t) {
                                e.visible && n._onSharingActive(!1), o(t)
                            }, e.setMenuItems(e.createItems(t, n.sharing.action, {
                                copyText: r
                            })), e.el.classList.add("jw-sharing-menu")
                        })), this._addSharingApiEvent(l, c), this.rightClickMenu.enableSharing(this.sharing.open)
                    }
                }, i._destroySkipButton = function () {
                    this.skipButton && (this.skipButton.destroy(), this.skipButton = null, this.controlbar.adSkipButton = null)
                }, i._addSharingApiEvent = function (t, e) {
                    var i = this;
                    t.on("sharingApi", (function (t) {
                        var n = e.children.sharing;
                        n && (i.sharingApi = !0, t && !n.visible ? (e.children.sharing.open(), i.sharing.onSubmenuToggle(!0, "api")) : !t && n.visible && (e.close(), i.sharing.onSubmenuToggle(!1, "api")))
                    }))
                }, i._onSharingActive = function (t) {
                    this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
                }, e
            }(Q),
            zt = Pt
    },
    4542: function (t, e, i) {
        "use strict";
        var n = i(8081),
            a = i.n(n),
            o = i(3645),
            r = i.n(o)()(a());
        r.push([t.id, '.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar{max-height:140px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,0);transition:transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time:not(.jw-chapter-slider-time){height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time:not(.jw-chapter-slider-time){z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;transform:translate(0,-50%) scale(1,.6);transition:transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-rail{transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time).jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:12px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time{height:16px;width:100%;align-items:center;background:transparent none;padding:0 12px;outline:0}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{position:absolute;cursor:pointer}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;display:flex;background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress{opacity:0;pointer-events:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-cue{width:3px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{z-index:1;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment{position:relative;flex:0 0 0px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-background{background-color:rgba(255,255,255,.49)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-buffered{background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-resetter{height:5px;width:100%;top:50%;position:relative;transform:translate(0,-50%) scale(1,.6)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-container{height:100%;position:relative}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-bar{height:100%;position:absolute}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-background{width:100%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-buffered{width:0%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-progress{width:0%;background-color:#f2f2f2}.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time::before{height:34px}.jw-flag-dragging .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter,.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time:focus .jw-knob,.jw-slider-horizontal.jw-chapter-slider-time:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time.jw-tab-focus:focus .jw-old-rail{outline:solid 2px #4d90fe}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-horizontal.jw-chapter-slider-time{height:11px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0;background-color:#fff}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;transform-origin:75% 50%;transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,visibility;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jw-chapter-slider-time .jw-tooltip-time .jw-overlay:before{height:1em;top:auto}.jw-chapter-slider-time .jw-tooltip-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%;min-height:200px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@keyframes jw-ab-zoom-thumbnail-animation{0%{transform:scale(1,1)}50%{transform:scale(1.25,1.25)}100%{transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:jw-spin 2s linear infinite;display:block}@keyframes jw-spin{100%{transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-chapter-slider-time,.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]), e.Z = r
    },
    8901: function (t, e, i) {
        "use strict";
        var n = i(8081),
            a = i.n(n),
            o = i(3645),
            r = i.n(o)()(a());
        r.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating.jw-floating-dismissible .jw-wrapper{bottom:3rem}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-icon{margin:0;padding:0}.jw-flag-floating .jw-float-bar-icon{pointer-events:all;cursor:pointer;display:flex;height:24px;width:24px}.jw-flag-floating .jw-float-bar-icon:hover{background:#1d1d1d;border-radius:100px}.jw-flag-floating .jw-float-bar-icon .jw-svg-icon{display:block;margin:auto;padding:0;height:10px;width:10px}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible .jw-float-bar{display:inline-flex;flex-direction:row;align-items:center;position:fixed;z-index:2147483647;top:100%;height:32px;width:100%;max-height:32px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar{left:0;right:0;top:auto}}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-float-bar{display:none;position:absolute;padding:4px 8px;background:#2f2d2d;touch-action:none}.jw-float-bar-title{width:100%;max-height:24px;font-family:Arial,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:16px;margin-left:0;padding-right:22px;color:rgba(255,255,255,.8)!important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@keyframes jw-float-to-bottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]), e.Z = r
    },
    3591: function (t, e, i) {
        "use strict";
        var n = i(8081),
            a = i.n(n),
            o = i(3645),
            r = i.n(o)()(a());
        r.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button .jw-svg-icon.jw-svg-icon-watermark{width:150px}", ""]), e.Z = r
    },
    2792: function (t, e, i) {
        "use strict";
        var n = i(8081),
            a = i.n(n),
            o = i(3645),
            r = i.n(o)()(a());
        r.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;animation:250ms jw-outstream-collapse 1 step-end}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{transform:scaleY(0)}", ""]), e.Z = r
    },
    8406: function (t, e, i) {
        "use strict";
        var n = i(8081),
            a = i.n(n),
            o = i(3645),
            r = i.n(o)()(a());
        r.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]), e.Z = r
    },
    3645: function (t) {
        "use strict";
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var i = "",
                        n = void 0 !== e[5];
                    return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), n && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i
                })).join("")
            }, e.i = function (t, i, n, a, o) {
                "string" == typeof t && (t = [
                    [null, t, void 0]
                ]);
                var r = {};
                if (n)
                    for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (r[l] = !0)
                    }
                for (var c = 0; c < t.length; c++) {
                    var u = [].concat(t[c]);
                    n && r[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), i && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = i) : u[2] = i), a && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = a) : u[4] = "".concat(a)), e.push(u))
                }
            }, e
        }
    },
    8081: function (t) {
        "use strict";
        t.exports = function (t) {
            return t[1]
        }
    },
    1334: function () {
        ! function () {
            if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
                var t = !1;
                try {
                    var e = document.createElement("div");
                    e.addEventListener("focus", (function (t) {
                        t.preventDefault(), t.stopPropagation()
                    }), !0), e.focus(Object.defineProperty({}, "preventScroll", {
                        get: function () {
                            t = !0
                        }
                    }))
                } catch (t) {}
                if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                    var i = function (t) {
                        for (var e = 0; e < t.length; e++) t[e][0].scrollTop = t[e][1], t[e][0].scrollLeft = t[e][2];
                        t = []
                    };
                    HTMLElement.prototype.focus = function (t) {
                        if (t && t.preventScroll) {
                            var e = function (t) {
                                for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]), e = e.parentNode;
                                return e = n, i.push([e, e.scrollTop, e.scrollLeft]), i
                            }(this);
                            this.nativeFocus(), "function" == typeof setTimeout ? setTimeout((function () {
                                i(e)
                            }), 0) : i(e)
                        } else this.nativeFocus()
                    }
                }
            }
        }()
    },
    9725: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379),
            a = i.n(n),
            o = i(7795),
            r = i.n(o),
            s = i(569),
            l = i.n(s),
            c = i(3565),
            u = i.n(c),
            d = i(9216),
            h = i.n(d),
            p = i(4589),
            w = i.n(p),
            f = i(4542),
            g = {};
        g.styleTagTransform = w(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = r(), g.insertStyleElement = h();
        a()(f.Z, g);
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    5430: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379),
            a = i.n(n),
            o = i(7795),
            r = i.n(o),
            s = i(569),
            l = i.n(s),
            c = i(3565),
            u = i.n(c),
            d = i(9216),
            h = i.n(d),
            p = i(4589),
            w = i.n(p),
            f = i(8901),
            g = {};
        g.styleTagTransform = w(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = r(), g.insertStyleElement = h();
        a()(f.Z, g);
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    678: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379),
            a = i.n(n),
            o = i(7795),
            r = i.n(o),
            s = i(569),
            l = i.n(s),
            c = i(3565),
            u = i.n(c),
            d = i(9216),
            h = i.n(d),
            p = i(4589),
            w = i.n(p),
            f = i(3591),
            g = {};
        g.styleTagTransform = w(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = r(), g.insertStyleElement = h();
        a()(f.Z, g);
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    8206: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379),
            a = i.n(n),
            o = i(7795),
            r = i.n(o),
            s = i(569),
            l = i.n(s),
            c = i(3565),
            u = i.n(c),
            d = i(9216),
            h = i.n(d),
            p = i(4589),
            w = i.n(p),
            f = i(2792),
            g = {};
        g.styleTagTransform = w(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = r(), g.insertStyleElement = h();
        a()(f.Z, g);
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    3484: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379),
            a = i.n(n),
            o = i(7795),
            r = i.n(o),
            s = i(569),
            l = i.n(s),
            c = i(3565),
            u = i.n(c),
            d = i(9216),
            h = i.n(d),
            p = i(4589),
            w = i.n(p),
            f = i(8406),
            g = {};
        g.styleTagTransform = w(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = r(), g.insertStyleElement = h();
        a()(f.Z, g);
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    3379: function (t) {
        "use strict";
        var e = [];

        function i(t) {
            for (var i = -1, n = 0; n < e.length; n++)
                if (e[n].identifier === t) {
                    i = n;
                    break
                } return i
        }

        function n(t, n) {
            for (var o = {}, r = [], s = 0; s < t.length; s++) {
                var l = t[s],
                    c = n.base ? l[0] + n.base : l[0],
                    u = o[c] || 0,
                    d = "".concat(c, " ").concat(u);
                o[c] = u + 1;
                var h = i(d),
                    p = {
                        css: l[1],
                        media: l[2],
                        sourceMap: l[3],
                        supports: l[4],
                        layer: l[5]
                    };
                if (-1 !== h) e[h].references++, e[h].updater(p);
                else {
                    var w = a(p, n);
                    n.byIndex = s, e.splice(s, 0, {
                        identifier: d,
                        updater: w,
                        references: 1
                    })
                }
                r.push(d)
            }
            return r
        }

        function a(t, e) {
            var i = e.domAPI(e);
            i.update(t);
            return function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                    i.update(t = e)
                } else i.remove()
            }
        }
        t.exports = function (t, a) {
            var o = n(t = t || [], a = a || {});
            return function (t) {
                t = t || [];
                for (var r = 0; r < o.length; r++) {
                    var s = i(o[r]);
                    e[s].references--
                }
                for (var l = n(t, a), c = 0; c < o.length; c++) {
                    var u = i(o[c]);
                    0 === e[u].references && (e[u].updater(), e.splice(u, 1))
                }
                o = l
            }
        }
    },
    569: function (t) {
        "use strict";
        var e = {};
        t.exports = function (t, i) {
            var n = function (t) {
                if (void 0 === e[t]) {
                    var i = document.querySelector(t);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                    e[t] = i
                }
                return e[t]
            }(t);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n.appendChild(i)
        }
    },
    9216: function (t) {
        "use strict";
        t.exports = function (t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
        }
    },
    3565: function (t, e, i) {
        "use strict";
        t.exports = function (t) {
            var e = i.nc;
            e && t.setAttribute("nonce", e)
        }
    },
    7795: function (t) {
        "use strict";
        t.exports = function (t) {
            var e = t.insertStyleElement(t);
            return {
                update: function (i) {
                    ! function (t, e, i) {
                        var n = "";
                        i.supports && (n += "@supports (".concat(i.supports, ") {")), i.media && (n += "@media ".concat(i.media, " {"));
                        var a = void 0 !== i.layer;
                        a && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, a && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                        var o = i.sourceMap;
                        o && "undefined" != typeof btoa && (n += "\n")), e.styleTagTransform(n, t, e.options)
                }(e, t, i)
            }, remove: function () {
                ! function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t)
                }(e)
            }
        }
    }
},
4589: function (t) {
    "use strict";
    t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }
},
3207: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
},
4851: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
},
7938: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
},
4060: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
},
6038: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
},
147: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
},
7766: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
},
5806: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
},
9863: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
},
2494: function (t) {
    t.exports = '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-floating-close" focusable="false"><path d="M7.41499 5.00001L10.705 1.70501C10.8688 1.51371 10.9544 1.26763 10.9447 1.01595C10.935 0.764278 10.8307 0.525539 10.6526 0.347444C10.4745 0.16935 10.2357 0.0650171 9.98405 0.055296C9.73237 0.0455748 9.48629 0.131181 9.29499 0.295007L5.99999 3.58501L2.70499 0.295007C2.51369 0.131181 2.26762 0.0455748 2.01594 0.055296C1.76426 0.0650171 1.52552 0.16935 1.34743 0.347444C1.16934 0.525539 1.065 0.764278 1.05528 1.01595C1.04556 1.26763 1.13117 1.51371 1.29499 1.70501L4.58499 5.00001L1.29499 8.29501C1.19031 8.38466 1.10529 8.49497 1.04527 8.61904C0.985244 8.7431 0.951515 8.87824 0.946195 9.01596C0.940876 9.15367 0.964081 9.29101 1.01436 9.41933C1.06463 9.54766 1.14089 9.6642 1.23834 9.76166C1.3358 9.85911 1.45235 9.93537 1.58067 9.98565C1.709 10.0359 1.84633 10.0591 1.98405 10.0538C2.12177 10.0485 2.2569 10.0148 2.38096 9.95473C2.50503 9.89471 2.61535 9.80969 2.70499 9.70501L5.99999 6.41501L9.29499 9.70501C9.48629 9.86884 9.73237 9.95444 9.98405 9.94472C10.2357 9.935 10.4745 9.83067 10.6526 9.65257C10.8307 9.47448 10.935 9.23574 10.9447 8.98406C10.9544 8.73239 10.8688 8.48631 10.705 8.29501L7.41499 5.00001Z" fill="white" fill-opacity="0.8"></path></svg>'
},
7459: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
},
4606: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
},
8675: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
},
6641: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
},
2521: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
},
5147: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
},
1438: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
},
6084: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
},
4777: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
},
4119: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
},
5058: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
},
4886: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
},
6207: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
},
9992: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
},
3498: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
},
3918: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
},
8157: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
},
3356: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
},
8053: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
},
8711: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
},
1983: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
},
1277: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
},
7928: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
},
5484: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
},
6598: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
},
4375: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
},
1666: function (t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
},
549: function (t) {
    t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
},
7326: function (t, e, i) {
    "use strict";

    function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    i.d(e, {
        Z: function () {
            return n
        }
    })
},
3144: function (t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function a(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }
    i.d(e, {
        Z: function () {
            return a
        }
    })
}
}]);
