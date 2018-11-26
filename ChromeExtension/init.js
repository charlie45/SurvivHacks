! function () {
    return function n(e, t, i) {

        function a(r, s) {
            if (!t[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, true);
                    if (o) return o(r, true);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var p = t[r] = {
                    exports: {}
                };
                e[r][0].call(p.exports, function (n) {
                    return a(e[r][1][n] || n)
                }, p, p.exports, n, e, t, i)
            }
            return t[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) a(i[r]);
        return a
    }
}()({
    1: [function (n, e, t) {
        "use strict";
        var i = [],
            a = function (n, e) {
                var t = document.head || document.getElementsByTagName("head")[0],
                    a = i[i.length - 1];
                if ((e = e || {}).insertAt = e.insertAt || "bottom", "top" === e.insertAt) a ? a.nextSibling ? t.insertBefore(n, a.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), i.push(n);
                else {
                    if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    t.appendChild(n)
                }
            };
        e.exports = {
            createLink: function (n, e) {
                var t = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("link");
                for (var a in i.href = n, i.rel = "stylesheet", e);
                if (e.hasOwnProperty(a)) {
                    var o = e[a];
                    i.setAttribute("data-" + a, o)
                }
                t.appendChild(i)
            },
            createStyle: function (n, e, t) {
                t = t || {};
                var i = document.createElement("style");
                for (var o in i.type = "text/css", e)
                    if (e.hasOwnProperty(o)) {
                        var r = e[o];
                        i.setAttribute("data-" + o, r)
                    } i.sheet ? (i.innerHTML = n, i.sheet.cssText = n, a(i, {
                    insertAt: t.insertAt
                })) : i.styleSheet ? (a(i, {
                    insertAt: t.insertAt
                }), i.styleSheet.cssText = n) : (i.appendChild(document.createTextNode(n)), a(i, {
                    insertAt: t.insertAt
                }))
            }
        }
    }, {}],
    2: [function (n, e, t) {
        (function (n) {
            var i, a;
            i = void 0 !== n ? n : window || this.window || this.global, a = function (n) {
                "use strict";
                var e = {},
                    t = (document.querySelector("body"), !!/Mobi/.test(navigator.userAgent)),
                    i = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                    a = "undefined" != typeof InstallTrigger,
                    o = "ontouchstart" in document.documentElement,
                    r = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"],
                    s = {};
                e.children = {};
                var l = {
                    id: null,
                    class: "",
                    title: "",
                    titleColor: "",
                    titleSize: "",
                    titleLineHeight: "",
                    message: "",
                    messageColor: "",
                    messageSize: "",
                    messageLineHeight: "",
                    backgroundColor: "",
                    theme: "light",
                    color: "",
                    icon: "",
                    iconText: "",
                    iconColor: "",
                    iconUrl: null,
                    image: "",
                    imageWidth: 50,
                    maxWidth: null,
                    zindex: null,
                    layout: 1,
                    balloon: false,
                    close: true,
                    closeOnEscape: false,
                    closeOnClick: false,
                    displayMode: 0,
                    position: "bottomRight",
                    target: "",
                    targetFirst: true,
                    timeout: 5e3,
                    rtl: false,
                    animateInside: true,
                    drag: true,
                    pauseOnHover: true,
                    resetOnHover: false,
                    progressBar: true,
                    progressBarColor: "",
                    progressBarEasing: "linear",
                    overlay: false,
                    overlayClose: false,
                    overlayColor: "rgba(0, 0, 0, 0.6)",
                    transitionIn: "fadeInUp",
                    transitionOut: "fadeOut",
                    transitionInMobile: "fadeInUp",
                    transitionOutMobile: "fadeOutDown",
                    buttons: {},
                    inputs: {},
                    onOpening: function () {},
                    onOpened: function () {},
                    onClosing: function () {},
                    onClosed: function () {}
                };
                if ("remove" in Element.prototype || (Element.prototype.remove = function () {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), "function" != typeof window.CustomEvent) {
                    var c = function (n, e) {
                        e = e || {
                            bubbles: false,
                            cancelable: false,
                            detail: void 0
                        };
                        var t = document.createEvent("CustomEvent");
                        return t.initCustomEvent(n, e.bubbles, e.cancelable, e.detail), t
                    };
                    c.prototype = window.Event.prototype, window.CustomEvent = c
                }
                var p = function (n, e, t) {
                        if ("[object Object]" === Object.prototype.toString.call(n))
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.call(t, n[i], i, n);
                        else if (n)
                            for (var a = 0, o = n.length; a < o; a++) e.call(t, n[a], a, n)
                    },
                    d = function (n, e) {
                        var t = {};
                        return p(n, function (e, i) {
                            t[i] = n[i]
                        }), p(e, function (n, i) {
                            t[i] = e[i]
                        }), t
                    },
                    u = function (n) {
                        var e = document.createDocumentFragment(),
                            t = document.createElement("div");
                        for (t.innerHTML = n; t.firstChild;) e.appendChild(t.firstChild);
                        return e
                    },
                    m = {
                        move: function (n, e, t, o) {
                            var r;
                            0 !== o && (n.classList.add("iziToast-dragged"), n.style.transform = "translateX(" + o + "px)", o > 0 ? (r = (180 - o) / 180) < .3 && e.hide(d(t, {
                                transitionOut: "fadeOutRight",
                                transitionOutMobile: "fadeOutRight"
                            }), n, "drag") : (r = (180 + o) / 180) < .3 && e.hide(d(t, {
                                transitionOut: "fadeOutLeft",
                                transitionOutMobile: "fadeOutLeft"
                            }), n, "drag"), n.style.opacity = r, r < .3 && ((i || a) && (n.style.left = o + "px"), n.parentNode.style.opacity = .3, this.stopMoving(n, null)))
                        },
                        startMoving: function (n, e, t, i) {
                            i = i || window.event;
                            var a = o ? i.touches[0].clientX : i.clientX,
                                r = n.style.transform.replace("px)", ""),
                                s = a - (r = r.replace("translateX(", ""));
                            t.transitionIn && n.classList.remove(t.transitionIn), t.transitionInMobile && n.classList.remove(t.transitionInMobile), n.style.transition = "", o ? document.ontouchmove = function (i) {
                                i.preventDefault();
                                var a = (i = i || window.event).touches[0].clientX - s;
                                m.move(n, e, t, a)
                            } : document.onmousemove = function (i) {
                                i.preventDefault();
                                var a = (i = i || window.event).clientX - s;
                                m.move(n, e, t, a)
                            }
                        },
                        stopMoving: function (n, e) {
                            o ? document.ontouchmove = function () {} : document.onmousemove = function () {}, n.style.opacity = "", n.style.transform = "", n.classList.contains("iziToast-dragged") && (n.classList.remove("iziToast-dragged"), n.style.transition = "transform 0.4s ease, opacity 0.4s ease", setTimeout(function () {
                                n.style.transition = ""
                            }, 400))
                        }
                    };
                return e.setSetting = function (n, t, i) {
                    e.children[n][t] = i
                }, e.getSetting = function (n, t) {
                    return e.children[n][t]
                }, e.destroy = function () {
                    p(document.querySelectorAll(".iziToast-overlay"), function (n, e) {
                        n.remove()
                    }), p(document.querySelectorAll(".iziToast-wrapper"), function (n, e) {
                        n.remove()
                    }), p(document.querySelectorAll(".iziToast"), function (n, e) {
                        n.remove()
                    }), this.children = {}, document.removeEventListener("iziToast-opened", {}, false), document.removeEventListener("iziToast-opening", {}, false), document.removeEventListener("iziToast-closing", {}, false), document.removeEventListener("iziToast-closed", {}, false), document.removeEventListener("keyup", {}, false), s = {}
                }, e.settings = function (n) {
                    e.destroy(), s = n, l = d(l, n || {})
                }, p({
                    info: {
                        color: "blue",
                        icon: "ico-info"
                    },
                    success: {
                        color: "green",
                        icon: "ico-success"
                    },
                    warning: {
                        color: "orange",
                        icon: "ico-warning"
                    },
                    error: {
                        color: "red",
                        icon: "ico-error"
                    },
                    question: {
                        color: "yellow",
                        icon: "ico-question"
                    }
                }, function (n, t) {
                    e[t] = function (e) {
                        var t = d(s, e || {});
                        t = d(n, t || {}), this.show(t)
                    }
                }), e.progress = function (n, e, t) {
                    var i = this,
                        a = e.getAttribute("data-iziToast-ref"),
                        o = d(this.children[a], n || {}),
                        r = e.querySelector(".iziToast-progressbar div");
                    return {
                        start: function () {
                            void 0 === o.time.REMAINING && (e.classList.remove("iziToast-reseted"), null !== r && (r.style.transition = "width " + o.timeout + "ms " + o.progressBarEasing, r.style.width = "0%"), o.time.START = (new Date).getTime(), o.time.END = o.time.START + o.timeout, o.time.TIMER = setTimeout(function () {
                                clearTimeout(o.time.TIMER), e.classList.contains("iziToast-closing") || (i.hide(o, e, "timeout"), "function" == typeof t && t.apply(i))
                            }, o.timeout), i.setSetting(a, "time", o.time))
                        },
                        pause: function () {
                            if (void 0 !== o.time.START && !e.classList.contains("iziToast-paused") && !e.classList.contains("iziToast-reseted")) {
                                if (e.classList.add("iziToast-paused"), o.time.REMAINING = o.time.END - (new Date).getTime(), clearTimeout(o.time.TIMER), i.setSetting(a, "time", o.time), null !== r) {
                                    var n = window.getComputedStyle(r).getPropertyValue("width");
                                    r.style.transition = "none", r.style.width = n
                                }
                                "function" == typeof t && setTimeout(function () {
                                    t.apply(i)
                                }, 10)
                            }
                        },
                        resume: function () {
                            void 0 !== o.time.REMAINING ? (e.classList.remove("iziToast-paused"), null !== r && (r.style.transition = "width " + o.time.REMAINING + "ms " + o.progressBarEasing, r.style.width = "0%"), o.time.END = (new Date).getTime() + o.time.REMAINING, o.time.TIMER = setTimeout(function () {
                                clearTimeout(o.time.TIMER), e.classList.contains("iziToast-closing") || (i.hide(o, e, "timeout"), "function" == typeof t && t.apply(i))
                            }, o.time.REMAINING), i.setSetting(a, "time", o.time)) : this.start()
                        },
                        reset: function () {
                            clearTimeout(o.time.TIMER), delete o.time.REMAINING, i.setSetting(a, "time", o.time), e.classList.add("iziToast-reseted"), e.classList.remove("iziToast-paused"), null !== r && (r.style.transition = "none", r.style.width = "100%"), "function" == typeof t && setTimeout(function () {
                                t.apply(i)
                            }, 10)
                        }
                    }
                }, e.hide = function (n, e, i) {
                    "object" != typeof e && (e = document.querySelector(e));
                    var a = this,
                        o = d(this.children[e.getAttribute("data-iziToast-ref")], n || {});
                    o.closedBy = i || null, delete o.time.REMAINING, e.classList.add("iziToast-closing"),
                        function () {
                            var n = document.querySelector(".iziToast-overlay");
                            if (null !== n) {
                                var e = n.getAttribute("data-iziToast-ref"),
                                    t = (e = e.split(",")).indexOf(String(o.ref)); - 1 !== t && e.splice(t, 1), n.setAttribute("data-iziToast-ref", e.join()), 0 === e.length && (n.classList.remove("fadeIn"), n.classList.add("fadeOut"), setTimeout(function () {
                                    n.remove()
                                }, 700))
                            }
                        }(), o.transitionIn && e.classList.remove(o.transitionIn), o.transitionInMobile && e.classList.remove(o.transitionInMobile), t || window.innerWidth <= 568 ? o.transitionOutMobile && e.classList.add(o.transitionOutMobile) : o.transitionOut && e.classList.add(o.transitionOut);
                    var r = e.parentNode.offsetHeight;
                    e.parentNode.style.height = r + "px", e.style.pointerEvents = "none", (!t || window.innerWidth > 568) && (e.parentNode.style.transitionDelay = "0.2s");
                    try {
                        var s = new CustomEvent("iziToast-closing", {
                            detail: o,
                            bubbles: true,
                            cancelable: true
                        });
                        document.dispatchEvent(s)
                    } catch (n) {
                        console.warn(n)
                    }
                    setTimeout(function () {
                        e.parentNode.style.height = "0px", e.parentNode.style.overflow = "", setTimeout(function () {
                            delete a.children[o.ref], e.parentNode.remove();
                            try {
                                var n = new CustomEvent("iziToast-closed", {
                                    detail: o,
                                    bubbles: true,
                                    cancelable: true
                                });
                                document.dispatchEvent(n)
                            } catch (n) {
                                console.warn(n)
                            }
                            void 0 !== o.onClosed && o.onClosed.apply(null, [o, e, i])
                        }, 1e3)
                    }, 200), void 0 !== o.onClosing && o.onClosing.apply(null, [o, e, i])
                }, e.show = function (n) {
                    var i, a = this,
                        c = d(s, n || {});
                    if ((c = d(l, c)).time = {}, null === c.id && (c.id = (i = c.title + c.message + c.color, btoa(encodeURIComponent(i)).replace(/=/g, ""))), 1 === c.displayMode || "once" == c.displayMode) try {
                        if (document.querySelectorAll(".iziToast#" + c.id).length > 0) return false
                    } catch (n) {
                        console.warn("[iziToast] Could not find an element with this selector: #" + c.id + ". Try to set an valid id.")
                    }
                    if (2 === c.displayMode || "replace" == c.displayMode) try {
                        p(document.querySelectorAll(".iziToast#" + c.id), function (n, e) {
                            a.hide(c, n, "replaced")
                        })
                    } catch (n) {
                        console.warn("[iziToast] Could not find an element with this selector: #" + c.id + ". Try to set an valid id.")
                    }
                    c.ref = (new Date).getTime() + Math.floor(1e7 * Math.random() + 1), e.children[c.ref] = c;
                    var f, b = {
                        body: document.querySelector("body"),
                        overlay: document.createElement("div"),
                        toast: document.createElement("div"),
                        toastBody: document.createElement("div"),
                        toastTexts: document.createElement("div"),
                        toastCapsule: document.createElement("div"),
                        cover: document.createElement("div"),
                        buttons: document.createElement("div"),
                        inputs: document.createElement("div"),
                        icon: c.iconUrl ? document.createElement("img") : document.createElement("i"),
                        wrapper: null
                    };
                    b.toast.setAttribute("data-iziToast-ref", c.ref), b.toast.appendChild(b.toastBody), b.toastCapsule.appendChild(b.toast),
                        function () {
                            if (b.toast.classList.add("iziToast"), b.toast.classList.add("iziToast-opening"), b.toastCapsule.classList.add("iziToast-capsule"), b.toastBody.classList.add("iziToast-body"), b.toastTexts.classList.add("iziToast-texts"), t || window.innerWidth <= 568 ? c.transitionInMobile && b.toast.classList.add(c.transitionInMobile) : c.transitionIn && b.toast.classList.add(c.transitionIn), c.class) {
                                var n = c.class.split(" ");
                                p(n, function (n, e) {
                                    b.toast.classList.add(n)
                                })
                            }
                            var e;
                            c.id && (b.toast.id = c.id), c.rtl && (b.toast.classList.add("iziToast-rtl"), b.toast.setAttribute("dir", "rtl")), c.layout > 1 && b.toast.classList.add("iziToast-layout" + c.layout), c.balloon && b.toast.classList.add("iziToast-balloon"), c.maxWidth && (isNaN(c.maxWidth) ? b.toast.style.maxWidth = c.maxWidth : b.toast.style.maxWidth = c.maxWidth + "px"), "" === c.theme && "light" === c.theme || b.toast.classList.add("iziToast-theme-" + c.theme), c.color && ("#" == (e = c.color).substring(0, 1) || "rgb" == e.substring(0, 3) || "hsl" == e.substring(0, 3) ? b.toast.style.background = c.color : b.toast.classList.add("iziToast-color-" + c.color)), c.backgroundColor && (b.toast.style.background = c.backgroundColor, c.balloon && (b.toast.style.borderColor = c.backgroundColor))
                        }(), c.image && (b.cover.classList.add("iziToast-cover"), b.cover.style.width = c.imageWidth + "px", function (n) {
                            try {
                                return btoa(atob(n)) == n
                            } catch (n) {
                                return false
                            }
                        }(c.image.replace(/ /g, "")) ? b.cover.style.backgroundImage = "url(data:image/png;base64," + c.image.replace(/ /g, "") + ")" : b.cover.style.backgroundImage = "url(" + c.image + ")", c.rtl ? b.toastBody.style.marginRight = c.imageWidth + 10 + "px" : b.toastBody.style.marginLeft = c.imageWidth + 10 + "px", b.toast.appendChild(b.cover)), c.close ? (b.buttonClose = document.createElement("button"), b.buttonClose.type = "button", b.buttonClose.classList.add("iziToast-close"), b.buttonClose.addEventListener("click", function (n) {
                            n.target, a.hide(c, b.toast, "button")
                        }), b.toast.appendChild(b.buttonClose)) : c.rtl ? b.toast.style.paddingLeft = "18px" : b.toast.style.paddingRight = "18px", c.progressBar && (b.progressBar = document.createElement("div"), b.progressBarDiv = document.createElement("div"), b.progressBar.classList.add("iziToast-progressbar"), b.progressBarDiv.style.background = c.progressBarColor, b.progressBar.appendChild(b.progressBarDiv), b.toast.appendChild(b.progressBar)), c.timeout && (c.pauseOnHover && !c.resetOnHover && (b.toast.addEventListener("mouseenter", function (n) {
                            a.progress(c, b.toast).pause()
                        }), b.toast.addEventListener("mouseleave", function (n) {
                            a.progress(c, b.toast).resume()
                        })), c.resetOnHover && (b.toast.addEventListener("mouseenter", function (n) {
                            a.progress(c, b.toast).reset()
                        }), b.toast.addEventListener("mouseleave", function (n) {
                            a.progress(c, b.toast).start()
                        }))), c.iconUrl ? (b.icon.setAttribute("class", "iziToast-icon"), b.icon.setAttribute("src", c.iconUrl)) : c.icon && (b.icon.setAttribute("class", "iziToast-icon " + c.icon), c.iconText && b.icon.appendChild(document.createTextNode(c.iconText)), c.iconColor && (b.icon.style.color = c.iconColor)), (c.icon || c.iconUrl) && (c.rtl ? b.toastBody.style.paddingRight = "33px" : b.toastBody.style.paddingLeft = "33px", b.toastBody.appendChild(b.icon)), c.title.length > 0 && (b.strong = document.createElement("strong"), b.strong.classList.add("iziToast-title"), b.strong.appendChild(u(c.title)), b.toastTexts.appendChild(b.strong), c.titleColor && (b.strong.style.color = c.titleColor), c.titleSize && (isNaN(c.titleSize) ? b.strong.style.fontSize = c.titleSize : b.strong.style.fontSize = c.titleSize + "px"), c.titleLineHeight && (isNaN(c.titleSize) ? b.strong.style.lineHeight = c.titleLineHeight : b.strong.style.lineHeight = c.titleLineHeight + "px")), c.message.length > 0 && (b.p = document.createElement("p"), b.p.classList.add("iziToast-message"), b.p.appendChild(u(c.message)), b.toastTexts.appendChild(b.p), c.messageColor && (b.p.style.color = c.messageColor), c.messageSize && (isNaN(c.titleSize) ? b.p.style.fontSize = c.messageSize : b.p.style.fontSize = c.messageSize + "px"), c.messageLineHeight && (isNaN(c.titleSize) ? b.p.style.lineHeight = c.messageLineHeight : b.p.style.lineHeight = c.messageLineHeight + "px")), c.title.length > 0 && c.message.length > 0 && (c.rtl ? b.strong.style.marginLeft = "10px" : 2 === c.layout || c.rtl || (b.strong.style.marginRight = "10px")), b.toastBody.appendChild(b.toastTexts), c.inputs.length > 0 && (b.inputs.classList.add("iziToast-inputs"), p(c.inputs, function (n, e) {
                            b.inputs.appendChild(u(n[0])), (f = b.inputs.childNodes)[e].classList.add("iziToast-inputs-child"), n[3] && setTimeout(function () {
                                f[e].focus()
                            }, 300), f[e].addEventListener(n[1], function (e) {
                                return (0, n[2])(a, b.toast, this, e)
                            })
                        }), b.toastBody.appendChild(b.inputs)), c.buttons.length > 0 && (b.buttons.classList.add("iziToast-buttons"), p(c.buttons, function (n, e) {
                            b.buttons.appendChild(u(n[0]));
                            var t = b.buttons.childNodes;
                            t[e].classList.add("iziToast-buttons-child"), n[2] && setTimeout(function () {
                                t[e].focus()
                            }, 300), t[e].addEventListener("click", function (e) {
                                return e.preventDefault(), (0, n[1])(a, b.toast, this, e, f)
                            })
                        })), b.toastBody.appendChild(b.buttons), c.message.length > 0 && (c.inputs.length > 0 || c.buttons.length > 0) && (b.p.style.marginBottom = "0"), (c.inputs.length > 0 || c.buttons.length > 0) && (c.rtl ? b.toastTexts.style.marginLeft = "10px" : b.toastTexts.style.marginRight = "10px", c.inputs.length > 0 && c.buttons.length > 0 && (c.rtl ? b.inputs.style.marginLeft = "8px" : b.inputs.style.marginRight = "8px")), b.toastCapsule.style.visibility = "hidden", setTimeout(function () {
                            var n = b.toast.offsetHeight,
                                e = b.toast.currentStyle || window.getComputedStyle(b.toast),
                                t = e.marginTop;
                            t = t.split("px"), t = parseInt(t[0]);
                            var i = e.marginBottom;
                            i = i.split("px"), i = parseInt(i[0]), b.toastCapsule.style.visibility = "", b.toastCapsule.style.height = n + i + t + "px", setTimeout(function () {
                                b.toastCapsule.style.height = "auto", c.target && (b.toastCapsule.style.overflow = "visible")
                            }, 500), c.timeout && a.progress(c, b.toast).start()
                        }, 100),
                        function () {
                            var n = c.position;
                            if (c.target) b.wrapper = document.querySelector(c.target), b.wrapper.classList.add("iziToast-target"), c.targetFirst ? b.wrapper.insertBefore(b.toastCapsule, b.wrapper.firstChild) : b.wrapper.appendChild(b.toastCapsule);
                            else {
                                if (-1 == r.indexOf(c.position)) return void console.warn("[iziToast] Incorrect position.\nIt can be › " + r);
                                n = t || window.innerWidth <= 568 ? "bottomLeft" == c.position || "bottomRight" == c.position || "bottomCenter" == c.position ? "iziToast-wrapper-bottomCenter" : "topLeft" == c.position || "topRight" == c.position || "topCenter" == c.position ? "iziToast-wrapper-topCenter" : "iziToast-wrapper-center" : "iziToast-wrapper-" + n, b.wrapper = document.querySelector(".iziToast-wrapper." + n), b.wrapper || (b.wrapper = document.createElement("div"), b.wrapper.classList.add("iziToast-wrapper"), b.wrapper.classList.add(n), document.body.appendChild(b.wrapper)), "topLeft" == c.position || "topCenter" == c.position || "topRight" == c.position ? b.wrapper.insertBefore(b.toastCapsule, b.wrapper.firstChild) : b.wrapper.appendChild(b.toastCapsule)
                            }
                            isNaN(c.zindex) ? console.warn("[iziToast] Invalid zIndex.") : b.wrapper.style.zIndex = c.zindex
                        }(), c.overlay && (null !== document.querySelector(".iziToast-overlay.fadeIn") ? (b.overlay = document.querySelector(".iziToast-overlay"), b.overlay.setAttribute("data-iziToast-ref", b.overlay.getAttribute("data-iziToast-ref") + "," + c.ref), isNaN(c.zindex) || null === c.zindex || (b.overlay.style.zIndex = c.zindex - 1)) : (b.overlay.classList.add("iziToast-overlay"), b.overlay.classList.add("fadeIn"), b.overlay.style.background = c.overlayColor, b.overlay.setAttribute("data-iziToast-ref", c.ref), isNaN(c.zindex) || null === c.zindex || (b.overlay.style.zIndex = c.zindex - 1), document.querySelector("body").appendChild(b.overlay)), c.overlayClose ? (b.overlay.removeEventListener("click", {}), b.overlay.addEventListener("click", function (n) {
                            a.hide(c, b.toast, "overlay")
                        })) : b.overlay.removeEventListener("click", {})),
                        function () {
                            if (c.animateInside) {
                                b.toast.classList.add("iziToast-animateInside");
                                var n = [200, 100, 300];
                                "bounceInLeft" != c.transitionIn && "bounceInRight" != c.transitionIn || (n = [400, 200, 400]), c.title.length > 0 && setTimeout(function () {
                                    b.strong.classList.add("slideIn")
                                }, n[0]), c.message.length > 0 && setTimeout(function () {
                                    b.p.classList.add("slideIn")
                                }, n[1]), (c.icon || c.iconUrl) && setTimeout(function () {
                                    b.icon.classList.add("revealIn")
                                }, n[2]);
                                var e = 150;
                                c.buttons.length > 0 && b.buttons && setTimeout(function () {
                                    p(b.buttons.childNodes, function (n, t) {
                                        setTimeout(function () {
                                            n.classList.add("revealIn")
                                        }, e), e += 150
                                    })
                                }, c.inputs.length > 0 ? 150 : 0), c.inputs.length > 0 && b.inputs && (e = 150, p(b.inputs.childNodes, function (n, t) {
                                    setTimeout(function () {
                                        n.classList.add("revealIn")
                                    }, e), e += 150
                                }))
                            }
                        }(), c.onOpening.apply(null, [c, b.toast]);
                    try {
                        var A = new CustomEvent("iziToast-opening", {
                            detail: c,
                            bubbles: true,
                            cancelable: true
                        });
                        document.dispatchEvent(A)
                    } catch (n) {
                        console.warn(n)
                    }
                    setTimeout(function () {
                        b.toast.classList.remove("iziToast-opening"), b.toast.classList.add("iziToast-opened");
                        try {
                            var n = new CustomEvent("iziToast-opened", {
                                detail: c,
                                bubbles: true,
                                cancelable: true
                            });
                            document.dispatchEvent(n)
                        } catch (n) {
                            console.warn(n)
                        }
                        c.onOpened.apply(null, [c, b.toast])
                    }, 1e3), c.drag && (o ? (b.toast.addEventListener("touchstart", function (n) {
                        m.startMoving(this, a, c, n)
                    }, false), b.toast.addEventListener("touchend", function (n) {
                        m.stopMoving(this, n)
                    }, false)) : (b.toast.addEventListener("mousedown", function (n) {
                        n.preventDefault(), m.startMoving(this, a, c, n)
                    }, false), b.toast.addEventListener("mouseup", function (n) {
                        n.preventDefault(), m.stopMoving(this, n)
                    }, false))), c.closeOnEscape && document.addEventListener("keyup", function (n) {
                        27 == (n = n || window.event).keyCode && a.hide(c, b.toast, "esc")
                    }), c.closeOnClick && b.toast.addEventListener("click", function (n) {
                        a.hide(c, b.toast, "toast")
                    }), a.toast = b.toast
                }, e
            }, "function" == typeof define && define.amd ? define([], a()) : "object" == typeof t ? e.exports = a() : i.iziToast = a()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    3: [function (n, e, t) {
        "object" == typeof e && (e.exports = function () {
            var n = Date.now(),
                e = n,
                t = 0,
                i = 1 / 0,
                a = 0,
                o = 0,
                r = 1 / 0,
                s = 0,
                l = 0,
                c = 0,
                p = document.createElement("div");
            p.id = "stats", p.addEventListener("mousedown", function (n) {
                n.preventDefault(), g(++c % 2)
            }, false), p.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
            var d = document.createElement("div");
            d.id = "fps", d.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", p.appendChild(d);
            var u = document.createElement("div");
            u.id = "fpsText", u.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", u.innerHTML = "FPS", d.appendChild(u);
            var m = document.createElement("div");
            for (m.id = "fpsGraph", m.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", d.appendChild(m); 74 > m.children.length;) {
                var f = document.createElement("span");
                f.style.cssText = "width:1px;height:30px;float:left;background-color:#113", m.appendChild(f)
            }
            var b = document.createElement("div");
            b.id = "ms", b.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", p.appendChild(b);
            var A = document.createElement("div");
            A.id = "msText", A.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", A.innerHTML = "MS", b.appendChild(A);
            var y = document.createElement("div");
            for (y.id = "msGraph", y.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", b.appendChild(y); 74 > y.children.length;)(f = document.createElement("span")).style.cssText = "width:1px;height:30px;float:left;background-color:#131", y.appendChild(f);
            var g = function (n) {
                switch (c = n) {
                    case 0:
                        d.style.display = "block", b.style.display = "none";
                        break;
                    case 1:
                        d.style.display = "none", b.style.display = "block"
                }
            };
            return {
                REVISION: 12,
                domElement: p,
                setMode: g,
                begin: function () {
                    n = Date.now()
                },
                end: function () {
                    var c = Date.now();
                    t = c - n, i = Math.min(i, t), a = Math.max(a, t), A.textContent = t + " MS (" + i + "-" + a + ")";
                    var p = Math.min(30, 30 - t / 200 * 30);
                    return y.appendChild(y.firstChild).style.height = p + "px", l++, c > e + 1e3 && (o = Math.round(1e3 * l / (c - e)), r = Math.min(r, o), s = Math.max(s, o), u.textContent = o + " FPS (" + r + "-" + s + ")", p = Math.min(30, 30 - o / 100 * 30), m.appendChild(m.firstChild).style.height = p + "px", e = c, l = 0), c
                },
                update: function () {
                    n = this.end()
                }
            }
        })
    }, {}],
    4: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = e.playerBarn,
                a = ["playerBarn"],
                o = [],
                r = false,
                s = function (n) {};
            return {
                bind: function () {
                    r || (s = i.prototype.render, i.prototype.render = function (n) {
                        var e = true,
                            i = false,
                            a = void 0;
                        try {
                            for (var r, l = o[Symbol.iterator](); !(e = (r = l.next()).done); e = true) {
                                var c = r.value;
                                "playerBarn" == c.type && t[c.callback].call()
                            }
                        } catch (n) {
                            i = true, a = n
                        } finally {
                            try {
                                !e && l.return && l.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        s.call(this, n)
                    }), r = true
                },
                unbind: function () {
                    r && (i.prototype.render = s, o = []), r = false
                },
                add: function (n, e) {
                    return !(!a.includes(n) || function (n, e) {
                        return o.filter(function (n, t, i) {
                            return n.callback === e
                        }).length > 0
                    }(0, e) || (o.push({
                        type: n,
                        callback: e
                    }), 0))
                },
                remove: function (n, e) {
                    for (var t = 0; t < o.length; t++)
                        if (o[t].type == n && o[t].callback == e) return o.splice(t, 1), true;
                    return false
                }
            }
        }
    }, {}],
    5: [function (n, e, t) {
							   
		  
						   
										  
						   
		  
						   
						 
					  
						
									 
										
																											  
		 
		
						  
							 
								   
		 
		
						   
						   
							
						
					
					 
						   
						 
		 
		
				   
								  
						
							   
											   
							
									
												
												  
						
								
							
									 
										
									  
									 
								   
								  
							  
							 
		 
		
										 
							   
					
					  
						
					   
												
		 
		
											 
						
						
										  
									   
		 
		
										   
						
							   
					   
					   
					 
					  
					  
											  
												
										
									  
							 
		 
		
														  
				   
						 
		 
		
										
									 
		 
		
								   
							   
					
				   
					  
						 
					  
								  
										 
										 
												
		 
		
								   
							   
					 
				   
					  
					   
						
						
						 
																																																																																																																																																																				
								 
							
					   
		 
		
										 
					   
		 
		
								  
							   
								
						 
							 
							   
							 
		 
		
										
        var i = `.btn-game-menu,.iziToast-capsule,.iziToast-capsule *,.ui-game-menu{box-sizing:border-box}.iziToast-capsule{font-size:0;height:0;width:100%;transform:translateZ(0);backface-visibility:hidden;transition:transform .5s cubic-bezier(.25,.8,.25,1),height .5s cubic-bezier(.25,.8,.25,1)}.iziToast-overlay{display:block;position:fixed;top:-100px;left:0;right:0;bottom:-100px;z-index:997}.iziToast{display:inline-block;clear:both;position:relative;font-family:Lato,Tahoma,Arial;font-size:14px;padding:8px 45px 9px 0;background:rgba(238,238,238,.9);border-color:rgba(238,238,238,.9);width:100%;pointer-events:all;cursor:default;transform:translateX(0);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-height:54px}.iziToast>.iziToast-progressbar{position:absolute;left:0;bottom:0;width:100%;z-index:1;background:rgba(255,255,255,.2)}.iziToast>.iziToast-progressbar>div{height:2px;width:100%;background:rgba(0,0,0,.3);border-radius:0 0 3px 3px}.iziToast.iziToast-balloon:before{content:'';position:absolute;right:8px;left:auto;width:0;height:0;top:100%;border-right:0 solid transparent;border-left:15px solid transparent;border-top:10px solid #000;border-top-color:inherit;border-radius:0}.iziToast.iziToast-balloon .iziToast-progressbar{top:0;bottom:auto}.iziToast.iziToast-balloon>div{border-radius:0 0 0 3px}.iziToast>.iziToast-cover{position:absolute;left:0;top:0;bottom:0;height:100%;margin:0;background-size:100%;background-position:50% 50%;background-repeat:no-repeat;background-color:rgba(0,0,0,.1)}.iziToast>.iziToast-close{position:absolute;right:0;top:0;border:0;padding:0;opacity:.6;width:42px;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAJPAAACTwBcGfW0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD3SURBVFiF1ZdtDoMgDEBfdi4PwAX8vLFn0qT7wxantojKupmQmCi8R4tSACpgjC2ICCUbEBa8ingjsU1AXRBeR8aLN64FiknswN8CYefBBDQ3whuFESy7WyQMeC0ipEI0A+0FeBvHUFN8xPaUhAH/iKoWsnXHGegy4J0yxialOfaHJAz4bhRzQzgDvdGnz4GbAonZbCQMuBm1K/kcFu8Mp1N2cFFpsxsMuJqqbIGExGl4loARajU1twskJLLhIsID7+tvUoDnIjTg5T9DPH9EBrz8rxjPzciAl9+O8SxI8CzJ8CxKFfh3ynK8Dyb8wNHM/XDqejx/AtNyPO87tNybAAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:8px;cursor:pointer;outline:0}.iziToast>.iziToast-close:hover{opacity:1}.iziToast>.iziToast-body{position:relative;padding:0 0 0 10px;height:auto;min-height:36px;margin:0 0 0 15px;text-align:left}.iziToast>.iziToast-body:after{content:"";display:table;clear:both}.iziToast>.iziToast-body .iziToast-texts{margin:10px 0 0;padding-right:2px;display:inline-block;float:left}.iziToast>.iziToast-body .iziToast-inputs{min-height:19px;float:left;margin:3px -2px}.iziToast>.iziToast-body .iziToast-inputs>input:not([type=checkbox]):not([type=radio]),.iziToast>.iziToast-body .iziToast-inputs>select{position:relative;display:inline-block;margin:2px;border-radius:2px;border:0;padding:4px 7px;font-size:13px;letter-spacing:.02em;background:rgba(0,0,0,.1);color:#000;box-shadow:0 0 0 1px rgba(0,0,0,.2);min-height:26px}.iziToast>.iziToast-body .iziToast-buttons>a:focus,.iziToast>.iziToast-body .iziToast-buttons>button:focus,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):focus,.iziToast>.iziToast-body .iziToast-inputs>input:not([type=checkbox]):not([type=radio]):focus,.iziToast>.iziToast-body .iziToast-inputs>select:focus{box-shadow:0 0 0 1px rgba(0,0,0,.6)}.iziToast>.iziToast-body .iziToast-buttons{min-height:17px;float:left;margin:4px -2px}.iziToast>.iziToast-body .iziToast-buttons>a,.iziToast>.iziToast-body .iziToast-buttons>button,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]){position:relative;display:inline-block;margin:2px;border-radius:2px;border:0;padding:5px 10px;font-size:12px;letter-spacing:.02em;cursor:pointer;background:rgba(0,0,0,.1);color:#000}.iziToast>.iziToast-body .iziToast-buttons>a:hover,.iziToast>.iziToast-body .iziToast-buttons>button:hover,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):hover{background:rgba(0,0,0,.2)}.iziToast>.iziToast-body .iziToast-buttons>a:active,.iziToast>.iziToast-body .iziToast-buttons>button:active,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):active{top:1px}.iziToast>.iziToast-body .iziToast-icon{position:absolute;left:0;top:50%;display:table;font-size:23px;line-height:24px;margin-top:-12px;color:#000;width:24px;height:24px}.iziToast>.iziToast-body .iziToast-icon.ico-info{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA6PsIvDob+OapavVhWRYPrIry2MxGQ97czsOzpJaMcE0qJQOwVtKjfxCVFeIAAAI3SURBVFjDlJPZsoIwEETnCiGyb8q+qmjl/3/wFmGKwjBROS9QWbtnOqDDGPq4MdMkSc0m7gcDDhF4NRdv8NoL4EcMpzoJglPl/KTDz4WW3IdvXEvxkfIKn7BMZb1bFK4yZFqghZ03jk0nG8N5NBwzx9xU5cxAg8fXi20/hDdC316lcA8o7t16eRuQvW1XGd2d2P8QSHQDDbdIII/9CR3lUF+lbucfJy4WfMS64EJPORnrZxtfc2pjJdnbuags3l04TTtJMXrdTph4Pyg4XAjugAJqMDf5Rf+oXx2/qi4u6nipakIi7CsgiuMSEF9IGKg8heQJKkxIfFSUU/egWSwNrS1fPDtLfon8sZOcYUQml1Qv9a3kfwsEUyJEMgFBKzdV8o3Iw9yAjg1jdLQCV4qbd3no8yD2GugaC3oMbF0NYHCpJYSDhNI5N2DAWB4F4z9Aj/04Cna/x7eVAQ17vRjQZPh+G/kddYv0h49yY4NWNDWMMOMUIRYvlTECmrN8pUAjo5RCMn8KoPmbJ/+Appgnk//Sy90GYBCGgm7IAskQ7D9hFKW4ApB1ei3FSYD9PjGAKygAV+ARFYBH5BsVgG9kkBSAQWKUFYBRZpkUgGVinRWAdUZQDABBQdIcAElDVBUAUUXWHQBZx1gMAGMprM0AsLbVXHsA5trZe93/wp3svQ0YNb/jWV3AIOLsMtlznSNOH7JqjOpDVh7z8qCZR10ftvO4nxeOvPLkpSuvfXnxzKtvXr7j+v8C5ii0e71At7cAAAAASUVORK5CYII=) 50% 50% no-repeat;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-warning{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAkFBMVEUAAAAAAAABAAIAAAABAAIAAAMAAAABAAIBAAIBAAIAAAIAAAABAAIAAAABAAICAAICAAIAAAIAAAAAAAAAAAABAAIBAAIAAAMAAAABAAIBAAMBAAECAAIAAAIAAAIAAAABAAIBAAIBAAMBAAIBAAEAAAIAAAMAAAAAAAABAAECAAICAAIAAAIAAAMAAAQAAAE05yNAAAAAL3RSTlMAB+kD7V8Q+PXicwv7I9iYhkAzJxnx01IV5cmnk2xmHfzexsK4eEw5L7Gei39aRw640awAAAHQSURBVFjD7ZfJdoJAEEWJgCiI4oDiPM8m7///LidErRO7sHrY5u7YXLr7vKqu9kTC0HPmo9n8cJbEQOzqqAdAUHeUZACQuTkGDQBoDJwkHZR0XBz9FkpafXuHP0SJ09mGeJLZ5wwlTmcbA0THPmdEK7XPGTG1zxmInn3OiJ19zkB0jSVTKExMHT0wjAwlWzC0fSPHF1gWRpIhWMYm7fYTFcQGlbemf4dFfdTGg0B/KXM8qBU/3wntbq7rSGqvJ9kla6IpueFJet8fxfem5yhykjyOgNaWF1qSGd5JMNNxpNF7SZQaVh5JzLrTCZIEJ1GyEyVyd+pClMjdaSJK5O40giSRu5PfFiVyd1pAksjdKRnrSsbVdbiHrgT7yss315fkVQPLFQrL+4FHeOXKO5YRFEKv5AiFaMlKLlBpJuVCJlC5sJfvCgztru/3NmBYccPgGTxRAzxn1XGEMUf58pXZvjoOsOCgjL08+b53mtfAM/SVsZcjKLtysQZPqIy9HPP3m/3zKItRwT0LyQo8sTr26tcO83DIUMWIJjierHLsJda/tbNBFY0BP/bKtcM8HNIWCK3aYR4OMzgxo5w5EFLOLKDExXAm9gI4E3iAO94/Ct/lKWuM2LMGbgAAAABJRU5ErkJggg==) 50% 50% no-repeat;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-error{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVyEiIAAAAJ3RSTlMA3BsB98QV8uSyWVUFz7+kcWMM2LuZioBpTUVBNcq2qaibj4d1azLZZYABAAACZElEQVRYw7WX25KCMAyGAxUoFDkpiohnV97/DXeGBtoOUprZ2dyo1K82fxKbwJJVp+KQZ7so2mX5oThVQLKwjDe9YZu4DF3ptAn6rxY0qQPOEq9fNC9ha3y77a22ba24v+9Xbe8v8x03dPOC2/NdvB6xeSreLfGJpnx0TyotKqLm2s7Jd/WO6ivXNp0tCy02R/aFz5VQ5wUPlUL5fIfj5KIlVGU0nWHm/5QtoTVMWY8mzIVu1K9O7XH2JiU/xnOOT39gnUfj+lFHddx4tFjL3/H8jjzaFCy2Rf0c/fdQyQszI8BDR973IyMSKa4krjxAiW/lkRvMP+bKK9WbYS1ASQg8dKjaUGlYPwRe/WoIkz8tiQchH5QAEMv6T0k8MD4mUyWr4E7jAWqZ+xWcMIYkXvlwggJ3IvFK+wIOcpXAo8n8P0COAaXyKH4OsjBuZB4ew0IGu+H1SebhNazsQBbWm8yj+hFuUJB5eMsN0IUXmYendAFFfJB5uEkRMYwxmcd6zDGRtmQePEykAgubymMRFmMxCSIPCRbTuFNN5OGORTjmNGc0Po0m8Uv0gcCry6xUhR2QeLii9tofbEfhz/qvNti+OfPqNm2Mq6105FUMvdT4GPmufMiV8PqBMkc+DdT1bjYYbjzU/ew23VP4n3mLAz4n8Jtv/Ui3ceTT2mzz5o1mZt0gnBpmsdjqRqVlmplcPdqa7X23kL9brdm2t/uBYDPn2+tyu48mtIGD10JTuUrukVrbCFiwDzcHrPjxKt7PW+AZQyT/WESO+1WL7f3o+WLHL2dYMSZsg6dg/z360ofvP4//v1NPzgs28WlWAAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:80%}.iziToast>.iziToast-body .iziToast-icon.ico-success{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAACnRSTlMApAPhIFn82wgGv8mVtwAAAKVJREFUSMft0LEJAkEARNFFFEw1NFJb8CKjAy1AEOzAxNw+bEEEg6nyFjbY4LOzcBwX7S/gwUxoTdIn+Jbv4Lv8bx446+kB6VsBtK0B+wbMCKxrwL33wOrVeeChX28n7KTOTjgoEu6DRSYAgAAAAkAmAIAAAAIACQIkMkACAAgAIACAyECBKAOJuCagTJwSUCaUAEMAABEBRwAAEQFLbCJgO4bW+AZKGnktR+jAFAAAAABJRU5ErkJggg==) 50% 50% no-repeat;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-question{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhCQkUEhFovxTxAAAEDklEQVRo3s2ZTWgTQRTHf03ipTRUqghNSgsRjHgQrFUQC6JgD1Kak3gQUUoPqRdBglf1oBehBws9Cn4cGk+1SOmh2upBxAYVoeJHrR9tgq0i1Cq0lqYeks7MbpPdmU00/c8hm9n33v/t7Nt5M2+qMEWQI0QIibZKRrQpHvLL2KI2wnQzzBKrDm2RIeKEy01dTYKUI7G1ZRknQXV5yP10kTYgly1NF/5S6duZ8ES+1iZodyaocrjXxE0OFeifYYgp0mRIkwFChAkRJsIxGgrIP+I0n82fvZW5dc/zkss0O2o1c5mX6/TmaDWl77RFe5YkUW3tKEmyFv0lOvXJ/fTYnmCEFuMRbGHEZqVHLyT9DFjUJmkzJl9DG5MWWwM6Llif/gF1nukB6nhgGwUXdFrE+wiURA8QoM9i0zEWWpXQW+ZsyeRrOMuyEo5Fv4gmy4dXPvqcC+pH2VRYaMwy+OWG+iLGCgm0W0Kv9HdvR8ASjmKCXpuK/bxiV/76A/v5UdDIZuKcJGjrnec5KZ7wwsWFOp6xPX/9mt2sqDe7FO+Kf/fXHBPPDWpdXGhTpLvUG9VKwh1xMDDjkvu+cNDFBTk7ptX1QkKZ850m3duu6fcrWxwdaFFyREJ2j4vOpKP6Du6z4uJCv8sYJIVkCnJBGGZaBONO3roY2EqNrSfIPi7SKP4fdXyNUd6I6wbSAHEl33tFLe+FlSsusnK90A0+oEPcuufZgXnOi+u9LrKSJQZQw6LwqBnv2CKsfHORbFbyQhA6xN/pEuihSdj56Co7LWRjPiKie6gkB2LiKuUqK5kiPkLiz1QJ9K1cNXBAMoUCigNpQ9IqDtMI1HKA4/jyvUsaoSyZLA5kjOjDPFZen8Ql5TsvBskUgjciIPSX3QAXC86DT7VWvlEh/xZ+ij9BDVWJ0QL0SbZq6QaFxoLPcXPmBLveLCc4wXdDK6s+6/vwhCSniFLPXW0NJe5UB8zKCsviqpc7vGPVQFcyZbyPwGD+d5ZnxmNWlhG4xSBZZjivjIWHEQgoDkSMjMwTo54569JSE5IpA7EyJSMTyGTUAUFlO1ZKOtaHTMeL1PhYYFTcihmY2cQ5+ullj7EDkiVfVez2sCTz8yiv84djhg7IJVk81xFWJlPdfHBG0flkRC/zQFZ+DSllNtfDdUsOMCliyGX5uOzU3ZhIXFDof4m1gDuKbEx0t2YS25gVGpcMnr/I1kx3c6piB8P8ZoqEwfMX3ZyCXynJTmq/U7NUXqfUzCbWL1wqVKBQUeESzQYoUlW8TAcVL1RCxUu1G6BYXfFyfQ4VPbDI4T8d2WzgQ6sc/vmxnTsqfHCZQzUJxm1h5dxS5Tu6lQgTZ0ipqRVqSwzTbbLHMt+c19iO76tsx/cLZub+Ali+tYC93olEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA5LTA5VDIwOjE4OjE3KzAyOjAwjKtfjgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOS0wOVQyMDoxODoxNyswMjowMP325zIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:85%}.iziToast>.iziToast-body .iziToast-message,.iziToast>.iziToast-body .iziToast-title{padding:0;font-size:14px;line-height:16px;text-align:left;float:left;white-space:normal}.iziToast>.iziToast-body .iziToast-title{color:#000;margin:0}.iziToast>.iziToast-body .iziToast-message{margin:0 0 10px;color:rgba(0,0,0,.6)}.iziToast.iziToast-animateInside .iziToast-buttons-child,.iziToast.iziToast-animateInside .iziToast-icon,.iziToast.iziToast-animateInside .iziToast-inputs-child,.iziToast.iziToast-animateInside .iziToast-message,.iziToast.iziToast-animateInside .iziToast-title{opacity:0}.iziToast-target{position:relative;width:100%;margin:0 auto}.iziToast-target .iziToast-capsule{overflow:hidden}.iziToast-target .iziToast-capsule:after{visibility:hidden;display:block;font-size:0;content:"";clear:both;height:0}.iziToast-target .iziToast-capsule .iziToast{width:100%;float:left}.iziToast-wrapper{z-index:99999;position:fixed;width:100%;pointer-events:none;display:flex;flex-direction:column}.iziToast-wrapper .iziToast.iziToast-balloon:before{border-right:0 solid transparent;border-left:15px solid transparent;border-top:10px solid #000;border-top-color:inherit;right:8px;left:auto}.iziToast-wrapper-bottomLeft{left:0;bottom:0;text-align:left}.iziToast-wrapper-bottomLeft .iziToast.iziToast-balloon:before,.iziToast-wrapper-topLeft .iziToast.iziToast-balloon:before{border-right:15px solid transparent;border-left:0 solid transparent;right:auto;left:8px}.iziToast-wrapper-bottomRight{right:0;bottom:0;text-align:right}.iziToast-wrapper-topLeft{left:0;top:0;text-align:left}.iziToast-wrapper-topRight{top:0;right:0;text-align:right}.iziToast-wrapper-topCenter{top:0;left:0;right:0;text-align:center}.iziToast-wrapper-bottomCenter,.iziToast-wrapper-center{bottom:0;left:0;right:0;text-align:center}.iziToast-wrapper-center{top:0;justify-content:center;flex-flow:column;align-items:center}.iziToast-rtl{direction:rtl;padding:8px 0 9px 45px;font-family:Tahoma,Lato,Arial}.iziToast-rtl .iziToast-cover{left:auto;right:0}.iziToast-rtl .iziToast-close{right:auto;left:0}.iziToast-rtl .iziToast-body{padding:0 10px 0 0;margin:0 16px 0 0;text-align:right}.iziToast-rtl .iziToast-body .iziToast-buttons,.iziToast-rtl .iziToast-body .iziToast-inputs,.iziToast-rtl .iziToast-body .iziToast-message,.iziToast-rtl .iziToast-body .iziToast-texts,.iziToast-rtl .iziToast-body .iziToast-title{float:right;text-align:right}.btn-game-menu,.center,.info-container{text-align:center}.iziToast-rtl .iziToast-body .iziToast-icon{left:auto;right:0}@media only screen and (min-width:568px){.iziToast-wrapper{padding:10px 15px}.iziToast{margin:5px 0;border-radius:3px;width:auto}.iziToast:after{content:'';z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:3px;box-shadow:inset 0 -10px 20px -10px rgba(0,0,0,.2),inset 0 0 5px rgba(0,0,0,.1),0 8px 8px -5px rgba(0,0,0,.25)}.iziToast:not(.iziToast-rtl) .iziToast-cover{border-radius:3px 0 0 3px}.iziToast.iziToast-rtl .iziToast-cover{border-radius:0 3px 3px 0}.iziToast.iziToast-color-dark:after{box-shadow:inset 0 -10px 20px -10px rgba(255,255,255,.3),0 10px 10px -5px rgba(0,0,0,.25)}.iziToast.iziToast-balloon .iziToast-progressbar{background:0 0}.iziToast.iziToast-balloon:after{box-shadow:0 10px 10px -5px rgba(0,0,0,.25),inset 0 10px 20px -5px rgba(0,0,0,.25)}.iziToast-target .iziToast:after{box-shadow:inset 0 -10px 20px -10px rgba(0,0,0,.2),inset 0 0 5px rgba(0,0,0,.1)}}.iziToast.iziToast-theme-dark{background:#565c70;border-color:#565c70}.iziToast.iziToast-theme-dark .iziToast-title{color:#fff}.iziToast.iziToast-theme-dark .iziToast-message{color:rgba(255,255,255,.7);font-weight:300}.iziToast.iziToast-theme-dark .iziToast-close{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgCR4OIQIPSao6AAAAwElEQVRIx72VUQ6EIAwFmz2XB+AConhjzqTJ7JeGKhLYlyx/BGdoBVpjIpMJNjgIZDKTkQHYmYfwmR2AfAqGFBcO2QjXZCd24bEggvd1KBx+xlwoDpYmvnBUUy68DYXD77ESr8WDtYqvxRex7a8oHP4Wo1Mkt5I68Mc+qYqv1h5OsZmZsQ3gj/02h6cO/KEYx29hu3R+VTTwz6D3TymIP1E8RvEiiVdZfEzicxYLiljSxKIqlnW5seitTW6uYnv/Aqh4whX3mEUrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA5LTMwVDE0OjMzOjAyKzAyOjAwl6RMVgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wOS0zMFQxNDozMzowMiswMjowMOb59OoAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:8px}.iziToast.iziToast-theme-dark .iziToast-icon{color:#fff}.iziToast.iziToast-theme-dark .iziToast-icon.ico-info{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vroaSAAAAKXRSTlMA6PsIvDob+OapavVhWRYPrIry2MxGQ97czsOzpJaMcE0qJQOwVtKjfxCVFeIAAAI3SURBVFjDlJPZsoIwEETnCiGyb8q+qmjl/3/wFmGKwjBROS9QWbtnOqDDGPq4MdMkSc0m7gcDDhF4NRdv8NoL4EcMpzoJglPl/KTDz4WW3IdvXEvxkfIKn7BMZb1bFK4yZFqghZ03jk0nG8N5NBwzx9xU5cxAg8fXi20/hDdC316lcA8o7t16eRuQvW1XGd2d2P8QSHQDDbdIII/9CR3lUF+lbucfJy4WfMS64EJPORnrZxtfc2pjJdnbuags3l04TTtJMXrdTph4Pyg4XAjugAJqMDf5Rf+oXx2/qi4u6nipakIi7CsgiuMSEF9IGKg8heQJKkxIfFSUU/egWSwNrS1fPDtLfon8sZOcYUQml1Qv9a3kfwsEUyJEMgFBKzdV8o3Iw9yAjg1jdLQCV4qbd3no8yD2GugaC3oMbF0NYHCpJYSDhNI5N2DAWB4F4z9Aj/04Cna/x7eVAQ17vRjQZPh+G/kddYv0h49yY4NWNDWMMOMUIRYvlTECmrN8pUAjo5RCMn8KoPmbJ/+Appgnk//Sy90GYBCGgm7IAskQ7D9hFKW4ApB1ei3FSYD9PjGAKygAV+ARFYBH5BsVgG9kkBSAQWKUFYBRZpkUgGVinRWAdUZQDABBQdIcAElDVBUAUUXWHQBZx1gMAGMprM0AsLbVXHsA5trZe93/wp3svQ0YNb/jWV3AIOLsMtlznSNOH7JqjOpDVh7z8qCZR10ftvO4nxeOvPLkpSuvfXnxzKtvXr7j+v8C5ii0e71At7cAAAAASUVORK5CYII=) 50% 50% no-repeat;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-warning{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAllBMVEUAAAD////+//3+//3+//3///////z+//3+//3+//3////////////9//3////+//39//3///3////////////+//3+//39//3///z+//z+//7///3///3///3///3////////+//3+//3+//3+//z+//3+//7///3///z////////+//79//3///3///z///v+//3///+trXouAAAAMHRSTlMAB+j87RBf+PXiCwQClSPYhkAzJxnx05tSyadzcmxmHRbp5d7Gwrh4TDkvsYt/WkdQzCITAAAB1UlEQVRYw+3XaXKCQBCGYSIIighoxCVqNJrEPfly/8vFImKXduNsf/Mc4K1y7FnwlMLQc/bUbj85R6bA1LXRDICg6RjJcZa7NQYtnLUGTpERSiOXxrOPkv9s30iGKDmtbYir3H7OUHJa2ylAuvZzRvzUfs7Ii/2cgfTt54x82s8ZSM848gJmYtroQzA2jHwA+LkBIEuMGt+QIng1igzlyMrkuP2CyOi47axRaYTL5jhDJehoR+aovC29s3iIyly3Eb+hRCvZo2qsGTnhKr2cLDS+J73GsqBI9W80UCmWWpEuhIjh6ZRGjyNRarjzKGJ2Ou2himCvjHwqI+rTqQdlRH06TZQR9ek0hiqiPp06mV4ke7QPX6ERUZxO8Uo3sqrfhxvoRrCpvXwL/UjR9GRHMIvLgke4d5QbiwhM6JV2YKKF4vIl7XIBkwm4keryJVmvk/TfwcmPwQNkUQuyA2/sYGwnXL7GPu4bW1jYsmevrNj09/MGZMOEPXslQVqO8hqykD17JfPHP/bmo2yGGpdZiH3IZvzZa7B3+IdDjjpjesHJcvbs5dZ/e+cddVoDdvlq7x12Nac+iN7e4R8OXTjp0pw5CGnOLNDEzeBs5gVwFniAO+8f8wvfeXP2hyqnmwAAAABJRU5ErkJggg==) 50% 50% no-repeat;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-error{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GqOSsAAAAJ3RSTlMA3BsB98QV8uSyWVUFz6RxYwzYvbupmYqAaU1FQTXKv7abj4d1azKNUit3AAACZElEQVRYw7WXaZOCMAyGw30UORRQBLxX/v8/3BkaWjrY2szO5otKfGrzJrEp6Kw6F8f8sI+i/SE/FucKSBaWiT8p5idlaEtnXTB9tKDLLHAvdSatOan3je93k9F2vRF36+mr1a6eH2NFNydoHq/ieU/UXcWjjk9XykdNWq2ywtp4tXL6Wb2T/MqtzzZutsrNyfvA51KoQROhVCjfrnASIRpSVUZiD5v4RbWExjRdJzSmOsZFvzYz59kRSr6V5zE+/QELHkNdb3VRx45HS1b1u+zfkkcbRAZ3qJ9l/A4qefHUDMShJe+6kZKJDD2pLQ9Q4lu+5Q7rz7Plperd7AtQEgIPI6o2dxr2D4GXvxqCiKcn8cD4gxIAEt7/GYkHL16KqeJd0NB4gJbXfgVnzCGJlzGcocCVSLzUvoAj9xJ4NF7/R8gxoVQexc/hgBpSebjPjgPs59cHmYfn7NkDb6wXmUf1I1ygIPPw4gtgCE8yDw8eAop4J/PQcBExjQmZx37MsZB2ZB4cLKQCG5vKYxMWSzMxIg8pNtOyUkvkocEmXGo69mh8FgnxS4yBwMvDrJSNHZB4uC3ayz/YkcIP4lflwVIT+OU07ZSjrbTkZQ6dTPkYubZ8GC/Cqxu6WvJZII93dcCw46GdNqdpTeF/tiMOuDGB9z/NI6NvyWetGPM0g+bVNeovBmamHXWj0nCbEaGeTMN2PWrqd6cM26ZxP2DeJvj+ph/30Zi/GmRbtlK5SptI+nwGGnvH6gUruT+L16MJHF+58rwNIifTV0vM8+hwMeOXAb6Yx0wXT+b999WXfvn+8/X/F7fWzjdTord5AAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:80%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-success{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMApAPhIFn82wgGv8mVtwAAAKVJREFUSMft0LEJAkEARNFFFEw1NFJb8CKjAy1AEOzAxNw+bEEEg6nyFjbY4LOzcBwX7S/gwUxoTdIn+Jbv4Lv8bx446+kB6VsBtK0B+wbMCKxrwL33wOrVeeChX28n7KTOTjgoEu6DRSYAgAAAAkAmAIAAAAIACQIkMkACAAgAIACAyECBKAOJuCagTJwSUCaUAEMAABEBRwAAEQFLbCJgO4bW+AZKGnktR+jAFAAAAABJRU5ErkJggg==) 50% 50% no-repeat;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-question{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhCQkUEg18vki+AAAETUlEQVRo3s1ZTWhbRxD+VlIuxsLFCYVIIQYVopBDoK5bKDWUBupDMNbJ5FBKg/FBziUQdE9yaC+FHBrwsdCfQ9RTGoLxwWl+DqHEojUFFydxnB9bInZDqOsErBrr6yGvs/ueX97bldTKo4Pe7puZb3Z33s7srIIjMY1jyCEjP6ImvyX8pF64arSHznKC06wzijY5xSKz7YbuYokV2lODsyyxqz3gSY6z6gCuqcpxJluFH+Z8U+D/0jyHoxFUBHgfvsGHIS9WMIUlVFFDFTUAGWSRQRY5HMeBEP6b+Ew9dh/7INd2jGeO59kfKdXP85zbIbfGQVf4sYC3N1hm3lo6zzIbPvk6x+zBk7wQGMEMB5xncIAzAS0XrFySSV72iS1yyBVcdA1x0afrsoUJgdFfY2+z8ADAXl7zz0KcwJiPfZKpVuABgClO+nRG+QIHDdfb4qlWwUXvKW4Z7vi6L4J9vg+vbfCeCeZH2RfOdMOc/HbCA4BvIW6EMQz7XK/ltd+hP+VzR9mgva2YSfyGI17fA7ynnocqeQNFfIJ0oHsdv6CC2+rXGBN6cQdveY3fcVRtmy/HDete+93zy8jA8zV7YkwYMrjHzRddRsCdiVCwwmh6wg9iTNC7Y9XIF1iS7kbUpsvvGEdPuTfSgAEjRpR096x0liPFD/Eqt2NMuBQzB2XhrACAApjFsuQFh9XdGAX70B3oSuNdnMVBaX+sopYxjwVpHFBVACyKTXNoktjD+6Ll8xhenS9MAAkAI/Lux2YNUOs4I413Ypg1SgEAu7kpFvWjaeJe0fJHDGe/cNaZBkekudw8PMA+0fMwlndZeAsJ5KR/qhUDUJCnSiyvRsolkJHGUgvjH8QXDgZopEzKMKDqCKrwEQ4C6MH7GEXC665buLJG8hlQc4LP4paxfJrOqYVYYY2UARfEIazTbgDg2dB98GebzJd54b8L/iWNdLyooeR6CHyZ+6xk0yKxkYg6nEVSUG4VJ9QJ9cxRCxO+9WiOyvgUeexXP1hLGH5nGuBWVtiSp4vqe3VP0UFWI9Wan4Er3v8q7jjPWVtm4FtcQQMrOKO2nOQCM5AyDMi56FDrKHA/1nyppS1ppBpYaE8wciEjGI2AaeM41kI4doDX4XiT3Qm1gevyruCgZg9P8xIv8m1nCzTKq6oiJ9xTMiZ505P5m8cdZ0CnZMVXHVljM7WMBzxpyDxygtdxoCEFTaMIWbZU85UvBjgUMYy0fBaAF8V1Lj9qWQ1aMZ5f4k9r+AGMSkMP1vZoZih6k6sicc5h/OFHM9vDqU/VIU7zJZdYYsKGH4g4nAJMGiXZRds1pVMoZ69RM5vfkbh0qkBhsnS2RLMLilQdL9MBHS9UAh0v1e6CYnXHy/WeeCcvLDwl/9OVze69tPKM+M+v7eJN6OzFpWdEF0ucDbhVNFXadnVrmJFlkVNGTS2M6pzmhMvltfPhnN2B63sVuL7fcNP3D1TSk2ihosPrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA5LTA5VDIwOjE4OjEzKzAyOjAweOR7nQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOS0wOVQyMDoxODoxMyswMjowMAm5wyEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) 50% 50% no-repeat;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-buttons>a,.iziToast.iziToast-theme-dark .iziToast-buttons>button,.iziToast.iziToast-theme-dark .iziToast-buttons>input{color:#fff;background:rgba(255,255,255,.1)}.iziToast.iziToast-theme-dark .iziToast-buttons>a:hover,.iziToast.iziToast-theme-dark .iziToast-buttons>button:hover,.iziToast.iziToast-theme-dark .iziToast-buttons>input:hover{background:rgba(255,255,255,.2)}.iziToast.iziToast-theme-dark .iziToast-buttons>a:focus,.iziToast.iziToast-theme-dark .iziToast-buttons>button:focus,.iziToast.iziToast-theme-dark .iziToast-buttons>input:focus{box-shadow:0 0 0 1px rgba(255,255,255,.6)}.iziToast.iziToast-color-red{background:rgba(255,175,180,.9);border-color:rgba(255,175,180,.9)}.iziToast.iziToast-color-orange{background:rgba(255,207,165,.9);border-color:rgba(255,207,165,.9)}.iziToast.iziToast-color-yellow{background:rgba(255,249,178,.9);border-color:rgba(255,249,178,.9)}.iziToast.iziToast-color-blue{background:rgba(157,222,255,.9);border-color:rgba(157,222,255,.9)}.iziToast.iziToast-color-green{background:rgba(166,239,184,.9);border-color:rgba(166,239,184,.9)}.iziToast.iziToast-layout2 .iziToast-body .iziToast-message,.iziToast.iziToast-layout2 .iziToast-body .iziToast-texts{width:100%}.iziToast.iziToast-layout3{border-radius:2px}.iziToast.iziToast-layout3::after{display:none}.iziToast .revealIn,.iziToast.revealIn{-webkit-animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both;-moz-animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both;animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both}.iziToast .slideIn,.iziToast.slideIn{-webkit-animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both;-moz-animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both;animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both}.iziToast.bounceInLeft{-webkit-animation:iziT-bounceInLeft .7s ease-in-out both;animation:iziT-bounceInLeft .7s ease-in-out both}.iziToast.bounceInRight{-webkit-animation:iziT-bounceInRight .85s ease-in-out both;animation:iziT-bounceInRight .85s ease-in-out both}.iziToast.bounceInDown{-webkit-animation:iziT-bounceInDown .7s ease-in-out both;animation:iziT-bounceInDown .7s ease-in-out both}.iziToast.bounceInUp{-webkit-animation:iziT-bounceInUp .7s ease-in-out both;animation:iziT-bounceInUp .7s ease-in-out both}.iziToast .fadeIn,.iziToast.fadeIn{-webkit-animation:iziT-fadeIn .5s ease both;animation:iziT-fadeIn .5s ease both}.iziToast.fadeInUp{-webkit-animation:iziT-fadeInUp .7s ease both;animation:iziT-fadeInUp .7s ease both}.iziToast.fadeInDown{-webkit-animation:iziT-fadeInDown .7s ease both;animation:iziT-fadeInDown .7s ease both}.iziToast.fadeInLeft{-webkit-animation:iziT-fadeInLeft .85s cubic-bezier(.25,.8,.25,1) both;animation:iziT-fadeInLeft .85s cubic-bezier(.25,.8,.25,1) both}.iziToast.fadeInRight{-webkit-animation:iziT-fadeInRight .85s cubic-bezier(.25,.8,.25,1) both;animation:iziT-fadeInRight .85s cubic-bezier(.25,.8,.25,1) both}.iziToast.flipInX{-webkit-animation:iziT-flipInX .85s cubic-bezier(.35,0,.25,1) both;animation:iziT-flipInX .85s cubic-bezier(.35,0,.25,1) both}.iziToast.fadeOut{-webkit-animation:iziT-fadeOut .7s ease both;animation:iziT-fadeOut .7s ease both}.iziToast.fadeOutDown{-webkit-animation:iziT-fadeOutDown .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-fadeOutDown .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast.fadeOutUp{-webkit-animation:iziT-fadeOutUp .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-fadeOutUp .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast.fadeOutLeft{-webkit-animation:iziT-fadeOutLeft .5s ease both;animation:iziT-fadeOutLeft .5s ease both}.iziToast.fadeOutRight{-webkit-animation:iziT-fadeOutRight .5s ease both;animation:iziT-fadeOutRight .5s ease both}.iziToast.flipOutX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation:iziT-flipOutX .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-flipOutX .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast-overlay.fadeIn{-webkit-animation:iziT-fadeIn .5s ease both;animation:iziT-fadeIn .5s ease both}.iziToast-overlay.fadeOut{-webkit-animation:iziT-fadeOut .7s ease both;animation:iziT-fadeOut .7s ease both}@-webkit-keyframes iziT-revealIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,1)}to{opacity:1}}@-moz-keyframes iziT-revealIn{0%{opacity:0;-moz-transform:scale3d(.3,.3,1)}to{opacity:1}}@-webkit-keyframes iziT-slideIn{0%{opacity:0;-webkit-transform:translateX(50px)}to{opacity:1;-webkit-transform:translateX(0)}}@-moz-keyframes iziT-slideIn{0%{opacity:0;-moz-transform:translateX(50px)}to{opacity:1;-moz-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInLeft{0%{opacity:0;-webkit-transform:translateX(280px)}50%{opacity:1;-webkit-transform:translateX(-20px)}70%{-webkit-transform:translateX(10px)}to{-webkit-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInRight{0%{opacity:0;-webkit-transform:translateX(-280px)}50%{opacity:1;-webkit-transform:translateX(20px)}70%{-webkit-transform:translateX(-10px)}to{-webkit-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInDown{0%{opacity:0;-webkit-transform:translateY(-200px)}50%{opacity:1;-webkit-transform:translateY(10px)}70%{-webkit-transform:translateY(-5px)}to{-webkit-transform:translateY(0)}}@-webkit-keyframes iziT-bounceInUp{0%{opacity:0;-webkit-transform:translateY(200px)}50%{opacity:1;-webkit-transform:translateY(-10px)}70%{-webkit-transform:translateY(5px)}to{-webkit-transform:translateY(0)}}@-moz-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-webkit-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-o-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-moz-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-moz-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-webkit-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-o-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-moz-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-webkit-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-o-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-moz-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-webkit-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-o-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-moz-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-webkit-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-o-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-moz-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-o-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-moz-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-o-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-moz-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-o-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-moz-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-o-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-moz-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-webkit-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-o-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-moz-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-webkit-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-o-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-moz-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-webkit-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-o-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.iziToast-message,.iziToast-title{font-size:22px!important}.ui-game-menu{background-color:rgba(0,0,0,.5);border-radius:5px;display:none;padding:10px 15px}@media (max-width:850px) and (max-height:300px){.ui-game-menu{margin-top:0}}.ui-game-menu p{bottom:4px;display:inline-block;font-size:14px;position:relative}@media screen and (max-width:850px){.ui-game-menu{height:auto;padding:4px 10px;width:190px}.ui-game-menu p{bottom:0;font-size:12px;margin-bottom:8px;margin-top:6px}}.ui-game-menu-desktop{height:495px;width:350px}.btns-game-double-row{display:flex;position:relative}.btns-game-double-row>.btn-game-container{position:relative;width:100%}.btns-game-double-row>.btn-game-container>.btn-double-row{display:inline-block}.btns-game-double-row>div:not(:last-child){margin-right:2px}.btn-grey{background-color:grey!important;border-bottom:2px solid #3e3e3e!important;box-shadow:inset 0 -2px #3c3c3c!important}.btn-game-tabs>.btn-game-container>.btn-game-menu{text-align:center;color:#fff;line-height:36px;font-size:16px;background-color:transparent;border:2px solid #fff;box-shadow:none;cursor:pointer;flex:1}.btn-game-tabs>.btn-game-container>.btn-game-menu-selected{border:2px solid #0f0!important;background-color:rgba(0,0,0,.35)}.ui-list{overflow-y:auto}.ui-list>div{width:98%}.ui-game-tab-settings{display:block;height:auto}.ui-game-tab-settings-desktop{height:340px}.full-height{height:422px!important}.btn-game-menu{line-height:38px;display:block;width:100%;height:40px;border:0;border-radius:5px;position:relative;margin:5px auto;color:#fff;font-size:16px;text-shadow:0 1px 2px rgba(0,0,0,.25);background-color:#50afab;border-bottom:2px solid #387c79;box-shadow:inset 0 -2px #387c79;background-repeat:no-repeat;cursor:pointer}#ui-game-menu,.ui-game-menu{float:left!important;margin:20px!important}#ui-center{width:max-content!important}.info-text{font-size:20px!important;color:#fff}.slider-current-value{display:block;background:0 0;border-radius:2px;padding:6px 10px}.left{float:left;text-align:left}.right{float:right}.ui-green{background:#2b4013}select[class^=\"select-cheat\"]{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:0;box-shadow:none;border:0!important;background:rgba(0,0,0,.68)!important;width:100%;height:100%;margin:0;padding:15px;color:#fff;cursor:pointer}.select-cheat{position:relative;display:block;background:rgba(0,0,0,.68)!important;overflow:hidden;border-radius:.25em}select[class^=\"select-cheat\"]::-ms-expand{display:none}.select::after{content:'\\25BC';position:absolute;top:0;right:0;bottom:0;padding:0 1em;background:#34495e;pointer-events:none;-webkit-transition:.25s all ease;-o-transition:.25s all ease;transition:.25s all ease}.select:hover::after{color:#f39c12}.ui-cheat-enemy-info{position:absolute;width:200px;padding:4px;margin-bottom:8px;color:#fff;top:calc(50% - 119px);margin-left:10px}#ui-cheat-info{width:auto!important}#ui-cheat-armor-container{margin:0!important;padding-top:26px!important;display:block;pointer-events:auto}.ui-cheat-armor-counter{float:left;position:relative!important;margin-left:4px;margin-right:4px}.ui-cheat-team-member-name{width:100%;text-align:center;max-width:initial!important}.ui-cheat-armor-image{transform:scale(1,1);display:none}          `
		 
        n("browserify-css").createStyle(i, {
            href: "src\\css\\app.css"
        }, {
            insertAt: "bottom"
        }), e.exports = i
    }, {
        "browserify-css": 1
    }],
    6: [function (n, e, t) {
        "use strict";
        window.obfuscate = n("./obfuscate.js"), window.iziToast = n("iziToast"), n("./css/app.css"), window.Stats = n("stats-js"), n("./modules/checkVersion.js").bind(obfuscate), n("./modules/basics.js"), window.notifications = n("./modules/notifications.js");
        n("./modules/telemetry.js"), n("./modules/autoVariableFinder.js");
        var scripts = {
                smokeAlphaManager: n("./plugins/smokeAlphaManager.js"),
                zoomRadiusManager: n("./plugins/zoomRadiusManager.js"),
                autoOpeningDoors: n("./plugins/autoOpeningDoors.js"),
                airDropTracking: n("./plugins/airDropTracking.js"),
                linesToPlayers: n("./plugins/linesToPlayers.js"),
                bigMapManager: n("./plugins/bigMapManager.js"),
                grenadeTimer: n("./plugins/grenadeTimer.js"),
                laserPointer: n("./plugins/laserPointer.js"),
                fpsCounter: n("./plugins/fpsCounter.js"),
                triggerBot: n("./plugins/triggerBot.js"),
                autoDodge: n("./plugins/autoDodge.js"),
                autoFire: n("./plugins/autoFire.js"),
                autoHeal: n("./plugins/autoHeal.js"),
                autoSwitch: n("./plugins/autoSwitch.js"),
                streamerMode: n("./plugins/streamerMode.js"),
                autoLoot: n("./plugins/autoLoot.js"),
                multibox: n("./plugins/multibox.js"),
                autoAim: n("./plugins/autoAim.js"),
                menu: n("./plugins/menu.js")
            },
            a = n("./EventsManager.js");
        window.init = function (game, exports, t, o, r, options, l) {
            if (exports) {
                var c = function (n, e) {
                    chrome.runtime.sendMessage(n, JSON.stringify(e)), console.log("Storing options...")
                };
                options || c(l, options = {
                    particlesTransparency: .5,
                    ceilingTransparency: .5,
                    bigMapTransparency: .9,
                    fragGrenadeSize: .31,
                    fragGrenadeColor: 16711680,
                    smokeGrenadeAlpha: .1,
                    defaultFragGrenadeEnabled: false,
										
                    autoAim: {
                        enabled: true,
                        forwardFiringCoeff: 1,
                        targetEnemyNicknameVisibility: true,
                        smoothLevel: 6,
                        restirctionAngle: 15,
                        restirctions: false,
                        detectOnDifferentLevels: false,
                        enemyExtendedInfo: true,
                        showEnemiesActions: true
												
											 
                    },
                    autoLoot: {
                        enabled: true,
                        autoPickUp: {
                            allow: false,
                            weapon1: "",
                            weapon2: "",
                            weapon3: "",
                            skin: ""
                        },
                        safeDistance: .9,
                        dropDelay: 300
                    },
                    autoHeal: {
                        enabled: false
                    },
                    autoOpeningDoors: {
                        enabled: true
                    },
                    grenadeTimer: {
                        enabled: true
                    },
                    laserPointer: {
                        enabled: true
                    },
                    linesToPlayers: {
                        enabled: true
                    },
                    autoFire: {
                        enabled: true
                    },
                    zoomRadiusManager: {
                        enabled: true
                    },
                    fpsCounter: {
                        enabled: true
                    },
                    airDropTracking: {
                        enabled: true
                    },
                    triggerBot: {
                        enabled: true
                    },
                    autoDodge: {
                        enabled: false
                    },
                    autoSwitch: {
                        enabled: true
                    },
                    streamerMode: {
                        enabled: false
                    },
                    multibox: {
                        enabled: true
                    }
                }), r.scope = options.smokeGrenadeAlpha, o.scope = function () {};
							  
                var p = exports.ceee80d9.exports.Defs,
                    bullets = exports["989ad62a"].exports.bullets,
                    player = exports["989ad62a"].exports.player,
                    items = exports["989ad62a"].exports.items,
                    bagSizes = exports["989ad62a"].exports.bagSizes,
                    scopeZoomRadius = (exports["989ad62a"].exports.Input, exports["989ad62a"].exports.scopeZoomRadius.desktop),
                    protocolVersion = exports["989ad62a"].exports.protocolVersion,
                    y = exports.e5d16b4d.exports.tt,
                    playerBarn = exports.a508b62a.exports.De,
                    lootBarn = exports.a48f3bb2.exports.Ke,
                    h = exports.c73dee75.exports.Oe,
                    uiModel = exports.d3da5587.exports.$e,
                    keys = exports["4b8d140f"].exports.Key;
                // console.log(e.e5d16b4d.exports, e.a508b62a.exports, e.a48f3bb2.exports, e.c73dee75.exports, e.d3da5587.exports);
                setInterval(function () {
                    game.scope
                }, 2e3);
                /*
                this.console.log(exports)
										 

                setInterval(function () {
                    console.log(game.scope)

                }, 2000)
                //*/
								 
																	 
								   
									  
					
													
															   
																		   
																							   
																		  
																								   
																							 
																					   
					 
				 
                var w = null,
                    z = null,
                    k = null,
                    I = null,
                    C = null,
                    E = null,
                    B = null,
                    aaForwardFiringCoeffCb = null,
                    aaSmoothLevelCb = null,
                    aaRestirctionAngleCb = null,
                    aaRestrictionsCb = null,
                    aaDetectOnDifferentLevels = null,
                    aaEnemyExtendedInfo = null,
                    aaShowEnemiesActions = null,
                    F = null,
                    j = null,
                    U = null,
										
											
                    N = null,
											
                    X = null,
                    V = null,
                    G = false;
                if (!(p)) return console.log("Error: Variable p not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(items)) return console.log("Error: items not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(bullets)) return console.log("Error: bullets not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(bagSizes)) return console.log("Error: bagSizes not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(playerBarn)) return console.log("Error: playerbarn not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(lootBarn)) return console.log("Error: lootBarn not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(scopeZoomRadius)) return console.log("Error: scopeZoomRadius not defined"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                if (!(protocolVersion === obfuscate.protocolVersion)) return console.log("Error: Protocol mismatch"), notifications.create("error", "This extension can not work with this version of the game!", "error", 2e4), false;
                var Q = function () {
                    return !(!isset(game.scope) || !game.scope.initialized || null == game.scope[obfuscate.activePlayer.main] || null == game.scope[obfuscate.input.main] || game.scope.spectating)
                };
                setInterval(function () {
                    vn && !Q() ? Tn() : Q() && !G ? xn() : vn || Q() || !G || (G = false)
                }, 500);

	

                var Y = y.prototype.l;
                y.prototype.l = function () {
                    this.options || function () {
                        this.options = {}, this.__defineSetter__("emoteMouseTriggered", function (n) {
                            this.options.emoteTriggered = n
                        }), this.__defineGetter__("emoteMouseTriggered", function () {
                            var e = game.scope[obfuscate.camera];
                            return this.emoteScreenPos = {
                                x: e.screenWidth / 2,
                                y: e.screenHeight / 2
                            }, this.options.emoteTriggered
                        })
                    }.call(this), Y.apply(this, arguments)
				  
	
                }, X = items.frag.worldImg.tint, V = items.frag.worldImg.scale, items.frag.worldImg.tint = options.fragGrenadeColor, items.frag.worldImg.scale = options.fragGrenadeSize, Object.keys(p).forEach(function (n) {
                    p[n].ceiling && p[n].ceiling.imgs.forEach(function (n) {
                        n.alpha = options.ceilingTransparency
                    })
                }), p.bush_01.img.alpha = options.particlesTransparency, p.bush_02.img.alpha = options.particlesTransparency, p.bush_03.img.alpha = options.particlesTransparency, p.bush_04.img.alpha = options.particlesTransparency, p.bush_05.img.alpha = options.particlesTransparency, p.bush_06.img.alpha = options.particlesTransparency, p.stone_02.img.alpha = options.particlesTransparency, p.tree_01.img.alpha = options.particlesTransparency, p.tree_02.img.alpha = options.particlesTransparency, p.tree_03.img.alpha = options.particlesTransparency, p.tree_06.img.alpha = options.particlesTransparency, p.tree_07.img.alpha = options.particlesTransparency, p.tree_08.img.alpha = options.particlesTransparency, p.tree_08b.img.alpha = options.particlesTransparency, p.tree_08c.img.alpha = options.particlesTransparency, p.tree_09.img.alpha = options.particlesTransparency, p.table_02.img.alpha = options.particlesTransparency, p.table_01.img.alpha = options.particlesTransparency, w = function (n) {
                    options.particlesTransparency = n, p.bush_01.img.alpha = n, p.bush_02.img.alpha = n, p.bush_03.img.alpha = n, p.bush_04.img.alpha = n, p.bush_05.img.alpha = n, p.bush_06.img.alpha = n, p.stone_02.img.alpha = n, p.tree_01.img.alpha = n, p.tree_02.img.alpha = n, p.tree_03.img.alpha = n, p.tree_06.img.alpha = n, p.tree_07.img.alpha = n, p.tree_08.img.alpha = n, p.tree_08b.img.alpha = n, p.tree_08c.img.alpha = n, p.tree_09.img.alpha = n, p.table_01.img.alpha = n, p.table_02.img.alpha = n
                }, z = function (n) {
                    options.ceilingTransparency = n, Object.keys(p).forEach(function (e) {
                        p[e].ceiling && p[e].ceiling.imgs.forEach(function (e) {
                            e.alpha = n
                        })
                    })
                }, k = function (n) {
                    options.bigMapTransparency = n, bigMapManager.setBigMapTransparency(n)
                }, I = function (n, e) {
                    options.fragGrenadeSize = n, options.fragGrenadeColor = e, items.frag.worldImg.tint = e, items.frag.worldImg.scale = n
                }, E = function (n) {
                    options.smokeGrenadeAlpha = parseFloat(n), smokeAlphaManager.setSmokeAlpha(options.smokeGrenadeAlpha)
                }, C = function () {
                    return options.fragGrenadeSize = V, options.fragGrenadeColor = X, items.frag.worldImg.scale = V, items.frag.worldImg.tint = X, {
                        defaultFragGrenadeScale: V,
                        defaultFragGrenadeTint: X
                    }
                };
                var H = function () {
                    autoAim.isBinded() && options.autoAim.enabled && (autoAimUnbind(), autoAimBind())
                };
                B = function () {
                    options.autoAim.targetEnemyNicknameVisibility = !options.autoAim.targetEnemyNicknameVisibility, autoAim.setTargetEnemyNicknameVisibility(options.autoAim.targetEnemyNicknameVisibility), H()
                }, aaForwardFiringCoeffCb = function (n) {
                    options.autoAim.forwardFiringCoeff = parseFloat(n), autoAim.setForwardFiringCoeff(options.autoAim.forwardFiringCoeff), H()
                }, aaSmoothLevelCb = function (n) {
                    options.autoAim.smoothLevel = parseInt(n), autoAim.setSmoothLevel(options.autoAim.smoothLevel), H()
                }, aaRestirctionAngleCb = function (n) {
                    options.autoAim.restirctionAngle = parseInt(n), autoAim.setRestirctionAngle(options.autoAim.restirctionAngle), H()
                }, aaRestrictionsCb = function () {
                    options.autoAim.restirctions = !options.autoAim.restirctions, autoAim.setRestirctions(options.autoAim.restirctions), H()
                }, aaDetectOnDifferentLevels = function () {
                    options.autoAim.detectOnDifferentLevels = !options.autoAim.detectOnDifferentLevels, autoAim.setDetectOnDifferentLevels(options.autoAim.detectOnDifferentLevels), H()
                }, aaEnemyExtendedInfo = function () {
                    options.autoAim.enemyExtendedInfo = !options.autoAim.enemyExtendedInfo, autoAim.setEnemyExtendedInfo(options.autoAim.enemyExtendedInfo), H()
                }, aaShowEnemiesActions = function () {
                    options.autoAim.showEnemiesActions = !options.autoAim.showEnemiesActions, autoAim.setShowEnemiesActions(options.autoAim.showEnemiesActions), H()
                }, F = function (n) {
																																																								  
													
																																																								  
													   
                    return autoLoot.getItemsFromSlot(n)
                }, j = function (n, e) {
                    1 === n ? options.autoLoot.autoPickUp.weapon1 = e : 2 === n ? options.autoLoot.autoPickUp.weapon2 = e : 3 === n ? options.autoLoot.autoPickUp.weapon3 = e : 5 === n && (options.autoLoot.autoPickUp.skin = e), autoLoot.setAutoPickUp(options.autoLoot.autoPickUp)
                }, U = function (n) {
                    options.autoLoot.safeDistance = n, autoLoot.setSafeDistance(options.autoLoot.safeDistance)
                }, N = function (n) {
                    options.autoLoot.dropDelay = n, autoLoot.setDropDelay(options.autoLoot.dropDelay)
				  
														 

				 
																																		
	  
	 
											  
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													   
							
												   
	  
                };
	
							 
	
                var autoAimBind = function () {
                        autoAim.bind({
                            targetEnemyNicknameVisibility: options.autoAim.targetEnemyNicknameVisibility,
                            forwardFiringCoeff: options.autoAim.forwardFiringCoeff,
                            smoothLevel: options.autoAim.smoothLevel,
                            restirctionAngle: options.autoAim.restirctionAngle,
                            restirctions: options.autoAim.restirctions,
                            detectOnDifferentLevels: options.autoAim.detectOnDifferentLevels,
                            enemyExtendedInfo: options.autoAim.enemyExtendedInfo,
                            showEnemiesActions: options.autoAim.showEnemiesActions
																			   
																			  
                        })
                    },
                    autoAimUnbind = function () {
                        autoAim.unbind()
                    },
                    autoLootBind = function () {
                        autoLoot.bind({
                            autoPickUp: options.autoLoot.autoPickUp,
                            safeDistance: options.autoLoot.safeDistance,
                            dropDelay: options.autoLoot.dropDelay
                        })
                    },
                    autoLootUnbind = function () {
                        autoLoot.unbind()
                    },
                    q = function (e) {
                        return !(!isset(game.scope) || true !== game.scope.initialized) && e.isBinded()
                    };
                window.events = a(obfuscate, {
                    playerBarn: playerBarn
                }, {
                    autoAimRenderCb: function () {
                        q(autoAim) && autoAim.render()
                    },
                    laserPointerRenderCb: function () {
                        q(laserPointer) && laserPointer.render()
                    },
                    linesToPlayersRenderCb: function () {
                        q(linesToPlayers) && linesToPlayers.render()
                    },
                    airDropTrackingRenderCb: function () {
                        q(airDropTracking) && airDropTracking.render()
                    },
                    triggerBotRenderCb: function () {
                        q(triggerBot) && triggerBot.render()
                    },
                    autoFireRenderCb: function () {
                        q(autoFire) && autoFire.render()
                    }
                });
                var autoAim = scripts.autoAim(obfuscate, game, {
                        bullets: bullets,
                        items: items,
                        playerBarn: playerBarn,
                        options: options
                    }),
                    autoLoot = scripts.autoLoot(obfuscate, game, {
                        lootBarn: lootBarn,
                        bagSizes: bagSizes,
                        items: items,
                        uiModule: uiModel
                    }),
                    autoHeal = scripts.autoHeal(obfuscate, game, {
                        key: keys
                    }),
                    autoSwitch = scripts.autoSwitch(obfuscate, game, {
                        key: keys,
                        bullets: bullets,
                        items: items,
                        playerBarn: playerBarn
                    }),
                    multibox = scripts.multibox(obfuscate, game, {
                        key: keys
                    }),
                    streamerMode = scripts.streamerMode(obfuscate, game, {
                        options: options
                    }),
                    autoOpeningDoors = scripts.autoOpeningDoors(obfuscate, game, o, t),
                    bigMapManager = scripts.bigMapManager(obfuscate, game),
                    grenadeTimer = scripts.grenadeTimer(obfuscate, game),
                    laserPointer = scripts.laserPointer(obfuscate, game, {
                        bullets: bullets,
                        items: items
                    }),
                    linesToPlayers = scripts.linesToPlayers(obfuscate, game),
                    autoFire = scripts.autoFire(obfuscate, game, {
                        items: items
                    }),
                    zoomRadiusManager = scripts.zoomRadiusManager(obfuscate, game, {
                        scopeZoomRadius: scopeZoomRadius
                    }),
                    smokeAlphaManager = scripts.smokeAlphaManager(obfuscate, game, r),
                    fpsCounter = scripts.fpsCounter(obfuscate, game),
                    airDropTracking = scripts.airDropTracking(obfuscate, game),
                    triggerBot = scripts.triggerBot(obfuscate, game, {
                        bullets: bullets,
                        items: items
                    }),
                    autoDodge = scripts.autoDodge(obfuscate, game, {
                        bulletBarn: h,
                        player: player,
                        key: keys
                    }),
                    fn = function (e) {
                        var t = game.scope[obfuscate.input.main].binds,
                            i = null != t[31] ? t[31].code : -1;
                        16 == e.which ? (autoAim.isBinded() && autoAimUnbind(), autoLoot.isBinded() && autoLootUnbind(), autoHeal.isBinded() && autoHeal.unbind(), autoSwitch.isBinded() && autoSwitch.unbind(), autoSwitch.isBinded() && autoSwitch.unbind(), streamerMode.isBinded() && streamerMode.unbind()) : e.which == i && autoAim.isBinded() && autoAimUnbind()
                    },
                    bn = function (e) {
                        var t = game.scope[obfuscate.input.main].binds,
                            i = null != t[31] ? t[31].code : -1;
                        16 == e.which ? (options.autoAim.enabled && !autoAim.isBinded() && autoAimBind(), options.autoLoot.enabled && !autoLoot.isBinded() && autoLootBind(), options.autoHeal.enabled && !autoHeal.isBinded() && autoHeal.bind(), options.autoSwitch.enabled && !autoSwitch.isBinded() && autoSwitch.bind() && !autoSwitch.isBinded() && autoSwitch.bind(), options.streamerMode.enabled && !streamerMode.isBinded() && streamerMode.bind()) : e.which == i && options.autoAim.enabled && !autoAim.isBinded() && autoAimBind()
                    },
                    An = function () {
                        window.addEventListener("keydown", fn), window.addEventListener("keyup", bn), options.autoAim.enabled && !autoAim.isBinded() && autoAimBind(), options.autoLoot.enabled && !autoLoot.isBinded() && autoLootBind(), options.autoHeal.enabled && !autoHeal.isBinded() && autoHeal.bind(), options.autoSwitch.enabled && !autoSwitch.isBinded() && autoSwitch.bind(), options.multibox.enabled && !multibox.isBinded() && multibox.bind(), options.streamerMode.enabled && !streamerMode.isBinded() && streamerMode.bind(), options.autoOpeningDoors.enabled && !autoOpeningDoors.isBinded() && autoOpeningDoors.bind(), bigMapManager.isBinded() || bigMapManager.bind(options.bigMapTransparency), options.grenadeTimer.enabled && !grenadeTimer.isBinded() && grenadeTimer.bind(), options.laserPointer.enabled && !laserPointer.isBinded() && laserPointer.bind(), options.linesToPlayers.enabled && !linesToPlayers.isBinded() && linesToPlayers.bind(), options.autoFire.enabled && !autoFire.isBinded() && autoFire.bind(), options.zoomRadiusManager.enabled && !zoomRadiusManager.isBinded() && zoomRadiusManager.bind(), smokeAlphaManager.isBinded() || smokeAlphaManager.bind({
                            smokeAlpha: options.smokeGrenadeAlpha
                        }), options.fpsCounter.enabled && !fpsCounter.isBinded() && fpsCounter.bind(), options.airDropTracking.enabled && !airDropTracking.isBinded() && airDropTracking.bind(), options.triggerBot.enabled && !triggerBot.isBinded() && triggerBot.bind(), options.autoDodge.enabled && !autoDodge.isBinded() && autoDodge.bind(), window.events.bind()
                    },
                    yn = function () {
                        window.removeEventListener("keydown", fn), window.removeEventListener("keyup", bn), autoAim.isBinded() && autoAimUnbind(), autoLoot.isBinded() && autoLootUnbind(), autoHeal.isBinded() && autoHeal.unbind(), autoSwitch.isBinded() && autoSwitch.unbind(), streamerMode.isBinded() && streamerMode.unbind(), autoSwitch.isBinded() && autoSwitch.unbind(), autoOpeningDoors.isBinded() && autoOpeningDoors.unbind(), bigMapManager.isBinded() && bigMapManager.unbind(), grenadeTimer.isBinded() && grenadeTimer.unbind(), laserPointer.isBinded() && laserPointer.unbind(), linesToPlayers.isBinded() && linesToPlayers.unbind(), autoFire.isBinded() && autoFire.unbind(), zoomRadiusManager.isBinded() && zoomRadiusManager.unbind(), smokeAlphaManager.isBinded() && smokeAlphaManager.unbind(), fpsCounter.isBinded() && fpsCounter.unbind(), airDropTracking.isBinded() && airDropTracking.unbind(), triggerBot.isBinded() && triggerBot.unbind(), autoDodge.isBinded() && autoDodge.unbind(), window.events.unbind()
                    },
                    gn = function () {
                        return !game.scope || !!game.scope.gameOver
                    },
                    vn = false,
                    hn = function (n) {
                        90 == n.which && (gn() || (vn ? (Tn(), G = true) : xn()))
                    };
                scripts.menu(obfuscate, game, options, {
                    particlesTransparencyCb: w,
                    ceilingTransparencyCb: z,
                    bigMapTransparencyCb: k,
                    grenadePropertiesCb: I,
                    defaultGrenadePropertiesCb: C,
                    smokeGrenadePropertiesCb: E,
                    autoAimEnableCb: function () {
                        options.autoAim.enabled ? (q(autoAim) && autoAimUnbind(), options.autoAim.enabled = false) : options.autoAim.enabled || (!q(autoAim) && Q() && autoAimBind(), options.autoAim.enabled = true)
                    },
                    autoAimSmoothLevelCb: aaSmoothLevelCb,
                    autoAimRestirctionsCb: aaRestrictionsCb,
                    autoAimRestirctionAngleCb: aaRestirctionAngleCb,
                    autoAimEnemyExtendedInfoCb: aaEnemyExtendedInfo,
                    autoAimForwardFiringCoeffCb: aaForwardFiringCoeffCb,
                    autoAimDetectOnDifferentLevelsCb: aaDetectOnDifferentLevels,
                    autoAimTargetEnemyNicknameVisibilityCb: B,
                    autoAimShowEnemiesActionsCb: aaShowEnemiesActions,
																  
																  
													  
                    autoLootEnableCb: function () {
                        options.autoLoot.enabled ? (q(autoLoot) && autoLootUnbind(), options.autoLoot.enabled = false) : options.autoLoot.enabled || (!q(autoLoot) && Q() && autoLootBind(), options.autoLoot.enabled = true)
                    },
                    getAutoLootAutoPickUpCb: F,
                    setAutoLootAutoPickUpCb: j,
                    autoLootSafeDistanceCb: U,
                    autoLootDropDelayCb: N,
                    airDropTrackingEnableCb: function () {
                        options.airDropTracking.enabled ? (q(airDropTracking) && airDropTracking.unbind(), options.airDropTracking.enabled = false) : options.airDropTracking.enabled || (!q(airDropTracking) && Q() && airDropTracking.bind(), options.airDropTracking.enabled = true)
                    },
                    autoHealEnableCb: function () {
                        options.autoHeal.enabled ? (q(autoHeal) && autoHeal.unbind(), options.autoHeal.enabled = false) : options.autoHeal.enabled || (!q(autoHeal) && Q() && autoHeal.bind(), options.autoHeal.enabled = true)
                    },
                    autoSwitchEnableCb: function () {
                        options.autoSwitch.enabled ? (q(autoSwitch) && autoSwitch.unbind(), options.autoSwitch.enabled = false) : options.autoSwitch.enabled || (!q(autoSwitch) && Q() && autoSwitch.bind(), options.autoSwitch.enabled = true)
                    },
                    streamerModeEnableCb: function () {
                        options.streamerMode.enabled ? (q(autoSwitch) && streamerMode.unbind(), options.streamerMode.enabled = false) : options.streamerMode.enabled || (!q(streamerMode) && Q() && streamerMode.bind(), options.streamerMode.enabled = true)
                    },
                    multiboxEnableCb: function () {
                        options.multibox.enabled ? (q(autoSwitch) && autoSwitch.unbind(), options.multibox.enabled = false) : options.multibox.enabled || (!q(autoSwitch) && Q() && autoSwitch.bind(), options.multibox.enabled = true)
                    },
                    autoOpeningDoorsEnableCb: function () {
                        options.autoOpeningDoors.enabled ? (q(autoOpeningDoors) && autoOpeningDoors.unbind(), options.autoOpeningDoors.enabled = false) : options.autoOpeningDoors.enabled || (!q(autoOpeningDoors) && Q() && autoOpeningDoors.bind(), options.autoOpeningDoors.enabled = true)
                    },
                    laserPointerEnableCb: function () {
                        options.laserPointer.enabled ? (q(laserPointer) && laserPointer.unbind(), options.laserPointer.enabled = false) : options.laserPointer.enabled || (!q(laserPointer) && Q() && laserPointer.bind(), options.laserPointer.enabled = true)
                    },
                    linesToPlayersEnableCb: function () {
                        options.linesToPlayers.enabled ? (q(linesToPlayers) && linesToPlayers.unbind(), options.linesToPlayers.enabled = false) : options.linesToPlayers.enabled || (!q(linesToPlayers) && Q() && linesToPlayers.bind(), options.linesToPlayers.enabled = true)
                    },
                    autoFireEnableCb: function () {
                        options.autoFire.enabled ? (q(autoFire) && autoFire.unbind(), options.autoFire.enabled = false) : options.autoFire.enabled || (!q(autoFire) && Q() && autoFire.bind(), options.autoFire.enabled = true)
                    },
                    zoomRadiusManagerEnableCb: function () {
                        options.zoomRadiusManager.enabled ? (q(zoomRadiusManager) && zoomRadiusManager.unbind(), options.zoomRadiusManager.enabled = false) : options.zoomRadiusManager.enabled || (!q(zoomRadiusManager) && Q() && zoomRadiusManager.bind(), options.zoomRadiusManager.enabled = true)
                    },
                    grenadeTimerEnableCb: function () {
                        options.grenadeTimer.enabled ? (q(grenadeTimer) && grenadeTimer.unbind(), options.grenadeTimer.enabled = false) : options.grenadeTimer.enabled || (!q(grenadeTimer) && Q() && grenadeTimer.bind(), options.grenadeTimer.enabled = true)
                    },
                    fpsCounterEnableCb: function () {
                        options.fpsCounter.enabled ? (q(fpsCounter) && fpsCounter.unbind(), options.fpsCounter.enabled = false) : options.fpsCounter.enabled || (!q(fpsCounter) && Q() && fpsCounter.bind(), options.fpsCounter.enabled = true)
                    },
                    triggerBotEnableCb: function () {
                        options.triggerBot.enabled ? (q(triggerBot) && triggerBot.unbind(), options.triggerBot.enabled = false) : options.triggerBot.enabled || (!q(triggerBot) && Q() && triggerBot.bind(), options.triggerBot.enabled = true)
                    },
                    autoDodgeEnableCb: function () {
                        options.autoDodge.enabled ? (q(autoDodge) && autoDodge.unbind(), options.autoDodge.enabled = false) : options.autoDodge.enabled || (!q(autoDodge) && Q() && autoDodge.bind(), options.autoDodge.enabled = true)
                    },
                    storeOptionsCb: function () {
                        c(l, options)
                    }
                }).bind(), window.removeEventListener("keyup", hn), window.addEventListener("keyup", hn)
            } else console.log("Error: Exports not defined, return.");

            function xn() {
                !game.scope || gn() || vn || (An(), vn = true)
            }

            function Tn() {
                vn && (yn(), vn = false)
            }
        }
    }, {
        "./EventsManager.js": 4,
        "./css/app.css": 5,
        "./modules/autoVariableFinder.js": 7,
        "./modules/basics.js": 8,
        "./modules/checkVersion.js": 9,
        "./modules/notifications.js": 10,
        "./modules/telemetry.js": 11,
        "./obfuscate.js": 12,
        "./plugins/airDropTracking.js": 13,
        "./plugins/autoAim.js": 14,
        "./plugins/autoDodge.js": 15,
        "./plugins/autoFire.js": 16,
        "./plugins/autoHeal.js": 17,
        "./plugins/autoLoot.js": 18,
        "./plugins/autoOpeningDoors.js": 19,
        "./plugins/bigMapManager.js": 20,
        "./plugins/fpsCounter.js": 21,
        "./plugins/grenadeTimer.js": 22,
        "./plugins/laserPointer.js": 23,
        "./plugins/linesToPlayers.js": 24,
        "./plugins/menu.js": 25,
        "./plugins/smokeAlphaManager.js": 26,
        "./plugins/triggerBot.js": 27,
        "./plugins/zoomRadiusManager.js": 28,
        "./plugins/autoSwitch.js": 29,
        "./plugins/multibox.js": 30,
        "./plugins/streamerMode.js": 31,
        iziToast: 2,
        "stats-js": 3
    }],
    7: [function (n, e, t) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        };
        e.exports = function (n) {
            var e = function (e) {
                for (var t = Object.keys(n), a = 0; a < t.length; a++)
                    if ("object" == i(n[t[a]]) && null != n[t[a]] && void 0 !== n[t[a]][e]) return t[a]
            };
            return {
                findAllVariables: function (n, t) {
                    for (var i = Object.keys(n), a = 0; a < i.length; a++) n[i[a]] = e(t[i[a]]);
                    return n
                }
            }
        }
    }, {}],
    8: [function (n, e, t) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        };
        window.isset = function (n) {
            return void 0 !== n && null !== n && "" !== n
        };
        window.removeHTMLElement = function (n) {
            document.getElementById(n) && function (n) {
                var e = document.getElementById(n);
                e.parentNode.removeChild(e)
            }(n)
        }, window.fetchFromObject = function (n, e) {
            if (!isset(n)) return false;
            var t = e.indexOf(".");
            return t > -1 ? fetchFromObject(n[e.substring(0, t)], e.substr(t + 1)) : n[e]
        }, window.hasClass = function (n, e) {
            return n.classList ? n.classList.contains(e) : !!n.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        }, window.addClass = function (n, e) {
            n.classList ? n.classList.add(e) : hasClass(n, e) || (n.className += " " + e)
        }, window.removeClass = function (n, e) {
            if (n.classList) n.classList.remove(e);
            else if (hasClass(n, e)) {
                var t = new RegExp("(\\s|^)" + e + "(\\s|$)");
                n.className = n.className.replace(t, " ")
            }
        }, document.getElementsByAttribute = function (n, e, t) {
            e = e.replace(/\|/g, "\\|").replace(/\[/g, "\\[").replace(/\(/g, "\\(").replace(/\+/g, "\\+").replace(/\./g, "\\.").replace(/\*/g, "\\*").replace(/\?/g, "\\?").replace(/\//g, "\\/");
            t = !!isset(t) && t;
            for (var i, a, o = document.getElementsByTagName("*"), r = [], s = new RegExp(t ? "\\b" + e + "\\b" : "^" + e + "$"), l = 0; a = o.item(l++);)(i = a.getAttributeNode(n)) && i.specified && s.test(i.value) && r.push(a);
            return r
        }, window.isObject = function (n) {
            return n && "object" === (void 0 === n ? "undefined" : i(n)) && n.constructor === Object
        }
    }, {}],
    9: [function (n, e, t) {
        "use strict";
        var i = {},
            a = function () {
                fetch("https://raw.githubusercontent.com/zbot473/SurvivHacks/master/ChromeExtension/manifest.json").then(function (n) {
                    return n.json()
                }).then(function (n) {
                    return function (n, e) {
                        if (n && e) {
                            var t = n.split("."),
                                i = e.split(".");
                            t.filter(function (n, e, t) {
                                return n < i[e]
                            }).length > 0 && notifications.create("info", "A new version of the cheat is available! Use the auto update scripts!", "INFO", 1e4)
                        }
                    }(i.version, n.version)
                }).catch(function (n) {
                    return console.error("Error:", n)
                })
            };
        e.exports = {
            bind: function (n) {
                i = n, a()
            },
            unbind: function () {}
        }
    }, {}],
    10: [function (n, e, t) {
        "use strict";
        iziToast.settings({
            transitionIn: "flipInX",
            transitionOut: "flipOutX",
            zindex: 1e4
        });
        e.exports = {
            create: function (n, e, t) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500;
                return ("success" == n || "error" == n || "info" == n) && (iziToast[n]({
                    timeout: i,
                    title: t,
                    message: e
                }), true)
            }
        }
    }, {}],
    11: [function (n, e, t) {
        "use strict";
        e.exports = {
            init: function (n, e) {
                window.onerror = function (t, i, a, o, r) {
                    var s = {
                        msg: t,
                        url: i,
                        line: a,
                        col: o,
                        error: r,
                        extensionId: n,
                        userAgent: navigator.userAgent,
                        cheatVersion: e,
                        type: "telemetry"
                    };
                    chrome.runtime.sendMessage(n, JSON.stringify(s))
                }
            }
        }
    }, {}],
    12: [function (n, e, t) {
        "use strict";
        e.exports = {
            menu: "xe",
            camera: "N",
            bullets: "Ee",
            planes: "Ne",
            activeId: "me",
            targetZoom: "f",
            objectCreator: "lt",
            pieTimer: "Ye",
            map: "Ce",
            input: {
                main: "ye",
                input: "input",
                mousePressed: "$"
            },
            activePlayer: {
                main: "mt",
                netData: "q",
                localData: "U"
            },
            playerBarn: {
                main: "Ie",
                players: "At"
            },
            lootBarn: {
                main: "He",
                itemf: "Pt",
                lootPool: "rt",
                pool: "de"
            },
            version: "1.1.001",
            protocolVersion: 39
        }
    }, {}],
    13: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e) {
            var t = false,
                i = {
                    draw: [],
                    lastPlaneId: -1
                },
                a = {},
                o = window.PIXI.Texture.fromImage("img/map/map-plane-01.svg"),
                r = function (t) {
                    var a = e.scope[n.menu];
                    if (a && a.container) {
                        var r = null;
                        if (isset(i.draw[t.id]) && (r = i.draw[t.id]), r || ((r = window.PIXI.Sprite.from(o)).visible = false, r.scale.set(.4, .4), r.tint = 16711680, r.alpha = .6, r.anchor.set(.5, .5), a.display.player.addChild(r), i.draw[t.id] = r), r) {
                            var s = function (n, e) {
                                return {
                                    x: n.mapSprite.x - n.mapSprite.width / 2 + e.x / n.mapWidth * n.mapSprite.width,
                                    y: n.mapSprite.y + n.mapSprite.height / 2 - e.y / n.mapHeight * n.mapSprite.height
                                }
                            }(e.scope[n.menu], t.pos);
                            r.position.set(s.x, s.y), r.rotation = t.sprite.rotation, r.visible = t.active
                        }
                    }
                },
                s = function () {
                    for (var t = e.scope[n.menu].airdropSprites, i = 0; i < t.length; i++) {
                        var o = t[i];
                        0 != o.pingPulseWave.position.x && true === o.pingPulseWave.displayed && 1 == !a[i] && (o.mapSprite.maxLife = 100, o.mapSprite.life = 100, a[i] = true)
                    }
                };
            return {
                bind: function () {
                    ! function () {
                        i.draw = [], i.lastPlaneId = -1, a = {};
                        for (var n = 0; n < 20; n++) a[n] = false
                    }(), t = true, window.events.add("playerBarn", "airDropTrackingRenderCb")
                },
                unbind: function () {
                    window.events.remove("playerBarn", "airDropTrackingRenderCb"), t = false
                },
                isBinded: function () {
                    return t
                },
                render: function () {
                    t && e.scope.initialized && (s(), function () {
                        var t = e.scope[n.planes].planes,
                            a = t.length;
                        if (a > 0) {
                            for (var o = 0; o < a; o++) r(t[o]);
                            t[a - 1].id != i.lastPlaneId && (i.lastPlaneId = t[a - 1].id, notifications.create("info", "Attention, the next plane is coming!", "OK", 5e3))
                        }
                    }())
                }
            }
        }
    }, {}],
    14: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.bullets,
                a = t.items,
                o = t.playerBarn,
                op = t.options,
                r = false,
                s = null,
                l = {},
                c = window.PIXI.Texture.fromImage("img/gui/ping-team-coming.svg"),
                p = window.PIXI.Texture.fromImage("https://cdn.rawgit.com/zbot473/SurvivHacks/e0e08a8d/ChromeExtension/images/reload.svg"),
                d = window.PIXI.Texture.fromImage("https://cdn.rawgit.com/zbot473/SurvivHacks/e0e08a8d/ChromeExtension/images/heal.svg");
            if (i && a && o) {
                var u = function (t) {
                        var i = e.scope[n.input.main][n.input.input].keys;
                        i[t] || setTimeout(function () {
                            i[t] = true, setTimeout(function () {
                                delete i[t]
                            }, 50)
                        }, 0)
                    },
                    //angle
                    m = function (n, e, t, i) {
                        var a = i - e,
                            o = t - n;
                        return Math.atan2(a, o)
                    },
                    //distance
                    f = function (n, e, t, i) {
                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(e - i, 2))
                    },
                    b = function () {
                        return e.scope[n.activePlayer.main].pos
                    },
                    A = function () {
                        return e.scope[n.input.main][n.input.input].mousePos
                    },
                    y = function (n, e) {
                        var t = true;
                        return l.detectOnDifferentLevels || n.layer == e.layer || 2 == e.layer || 2 == n.layer || 3 == e.layer || 3 == n.layer || (t = false), t
                    },
                    g = function (n, e, t, i) {
                        return t.teamId == e || i == n
                    },
                    v = function () {
                        s.player.nameText.visible = false, s.player.nameText.style.fontSize = 22, s.player.nameText.style.fill = "#00FFFF"
                    },
													
																								  
																						  
						 
					  
                    h = null,
                    x = function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        null != h && h != n && (h.visible = false, h = null), h = null != n ? n : null
                    },
                    T = function (t) {
                        var o = b(),
                            r = {
                                x: o.x + s.mouseRelPointPos.x,
                                y: o.y + s.mouseRelPointPos.y
                            },
                            p = [],
                            d = [],
                            u = [],
                            A = [],
                            y = [],
                            g = Object.keys(t);
                        if (!g.length) return s.new && (s.new = false, l.targetEnemyNicknameVisibility && v(), window.aimTarget = null), x(), void I();
                        for (var h = 0; h < g.length; h++) {
                            var T = t[g[h]][n.activePlayer.netData].pos,
                                w = f(o.x, o.y, T.x, T.y),
                                k = f(r.x, r.y, T.x, T.y),
                                C = m(o.x, o.y, T.x, T.y),
                                E = Math.abs(C - m(o.x, o.y, r.x, r.y));
                            p.push(w), d.push(k), u.push(C), A.push(E), y.push(true)
                        }
                        var B, L = null;
                        if (l.restirctions) {
                            var M = null;
                            y = y.map(function (n, e) {
                                var t = A[e] < l.restirctionAngle * Math.PI / 180;
                                return t && (null == M || d[M] > d[e]) && (M = e), t
                            }), L = M
                        } else L = (B = d).indexOf(Math.min.apply(null, B));
                        if (null != L) {
                            for (s.unshift({
                                    distance: p[L],
                                    radianAngle: u[L],
                                    pos: t[g[L]][n.activePlayer.netData].pos,
                                    timestamp: Date.now()
                                }), s.pop(), s[0].targetMousePosition = function (t, o, r, s, c) {
                                    var p = 0,
                                        d = 1 / 0;
                                    p = e.scope[n.activePlayer.main].weapType && a[e.scope[n.activePlayer.main].weapType].bulletType ? i[a[e.scope[n.activePlayer.main].weapType].bulletType].speed * l.forwardFiringCoeff : 1e3;
                                    for (var u = b(), A = {
                                            x: t.x,
                                            y: t.y
                                        }, y = f(u.x, u.y, t.x, t.y), g = (t.x - r.x) / ((o - s + 1) / 1e3), v = (t.y - r.y) / ((o - s + 1) / 1e3), h = 0; h < 10; h++) d = y / p, A = {
                                        x: t.x + g * d,
                                        y: t.y + v * d
                                    }, y = f(u.x, u.y, A.x, A.y);
                                    var x = e.scope[n.camera].screenWidth / 2,
                                        T = e.scope[n.camera].screenHeight / 2,
                                        w = T > x ? x : T;
                                    w = Math.floor(w - 1);
                                    var z = m(u.x, u.y, A.x, A.y);
                                    return {
                                        x: x + w * Math.cos(z),
                                        y: T - w * Math.sin(z)
                                    }
                                }(s[0].pos, s[0].timestamp, s[1].pos, s[1].timestamp, s.distance), s.averageTargetMousePosition = {
                                    x: 0,
                                    y: 0
                                }, h = 0; h < s.length; h++) s.averageTargetMousePosition.x += s[h].targetMousePosition.x, s.averageTargetMousePosition.y += s[h].targetMousePosition.y;
                            s.averageTargetMousePosition.x /= s.length, s.averageTargetMousePosition.y /= s.length, l.targetEnemyNicknameVisibility && v(), s.player = t[g[L]], l.targetEnemyNicknameVisibility && (s.player.nameText.visible = true, s.player.nameText.style.fontSize = 100, s.player.nameText.style.fill = "#D50000"), window.aimTarget = s.player,
                                function () {
                                    var e = s.player,
                                        t = e[n.activePlayer.netData].dir;
                                    if (e && e[n.activePlayer.netData].dir) {
                                        var i = e.targetIndicator;
                                        if (!op.streamerMode.enabled) {
                                            if (i || ((i = window.PIXI.Sprite.from(c)).visible = false, i.scale.set(.6, .6), i.tint = 16711680, i.alpha = .5, e.container.addChild(i), e.targetIndicator = i), i) {
                                                var a = {
                                                    x: -.5 * i.width + t.x,
                                                    y: -.5 * i.height + t.y
                                                };
                                                i.position.set(a.x, a.y), i.visible = true, x(i)
                                            }
                                        }
                                    }
                                }(), l.enemyExtendedInfo && z(), s.new = true
                        } else s.new = false, window.aimTarget = null, x()
                    },
                    w = function (n) {
                        var e = Object.keys(a),
                            t = true,
                            i = false,
                            o = void 0;
                        try {
                            for (var r, s = e[Symbol.iterator](); !(t = (r = s.next()).done); t = true) {
                                var l = r.value,
                                    c = a[l];
                                if (l === n) return c
                            }
                        } catch (n) {
                            i = true, o = n
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return null
                    },
                    z = function () {
                        var e, t = s.player,
                            i = t[n.activePlayer.netData];
                        k(), e = t.nameText._text, t[n.activePlayer.netData].curWeapType, document.getElementById("ui-cheat-info").getElementsByClassName("ui-cheat-team-member-name")[0].innerHTML = e,
                            function (n) {
                                var e = document.getElementById("ui-cheat-armor-container"),
                                    t = true,
                                    i = false,
                                    a = void 0;
                                try {
                                    for (var o, r = ["helmet", "chest", "backpack", "curWeapType"][Symbol.iterator](); !(t = (o = r.next()).done); t = true) {
                                        var s = o.value,
                                            l = e.getElementsByClassName(s)[0],
                                            c = (l.getElementsByClassName("ui-armor-counter-inner")[0], l.getElementsByClassName("ui-armor-level")[0]),
                                            p = l.getElementsByTagName("img")[0];
                                        if ("" != n[s]) {
                                            var d = parseInt(n[s].slice(-2), 10);
                                            if (Number.isInteger(d) && "curWeapType" !== s ? (c.style.color = 3 == d ? "rgb(255, 153, 0)" : "rgb(255, 255, 255)", c.innerHTML = "P. " + d) : c.innerHTML = "", "backpack" === s && (s = "pack"), "curWeapType" !== s) p.src = "img/loot/loot-" + s + "-0" + d + ".svg", p.style.display = "block";
                                            else {
                                                var u = w(n[s]);
                                                if (u) {
                                                    var m = u.lootImg.sprite.replace(".img", ".svg");
                                                    p.src = "img/loot/" + m, p.style.display = "block"
                                                }
                                            }
                                        } else p.style.display = "none"
                                    }
                                } catch (n) {
                                    i = true, a = n
                                } finally {
                                    try {
                                        !t && r.return && r.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                            }(i)
                    },
                    k = function () {
                        var n = document.getElementById("ui-game");
                        if (!document.getElementById("ui-cheat-info")) {
                            var e = document.createElement("div");
                            e.id = "ui-cheat-info", e.className = "ui-cheat-enemy-info ui-bg-standard", e.appendChild(function () {
                                var n = document.createElement("div");
                                n.className = "ui-basic-info";
                                var e = document.createElement("div");
                                return e.className = "ui-team-member-name ui-cheat-team-member-name", n.appendChild(e), n
                            }()), e.appendChild(function () {
                                var n = document.createElement("div");
                                n.id = "ui-cheat-armor-container", n.className = "ui-armor-container";
                                var e = true,
                                    t = false,
                                    i = void 0;
                                try {
                                    for (var a, o = ["helmet", "chest", "backpack", "curWeapType"][Symbol.iterator](); !(e = (a = o.next()).done); e = true) {
                                        var r = a.value,
                                            s = document.createElement("div");
                                        s.id = r, s.className = "ui-armor-counter ui-cheat-armor-counter ui-outline-hover " + r;
                                        var l = document.createElement("div");
                                        l.className = "ui-armor-counter-inner";
                                        var c = document.createElement("div");
                                        c.className = "ui-armor-level";
                                        var p = document.createElement("img");
                                        p.className = "ui-armor-image ui-cheat-armor-image ui-loot-image", s.appendChild(l), s.appendChild(c), s.appendChild(p), n.appendChild(s)
                                    }
                                } catch (n) {
                                    t = true, i = n
                                } finally {
                                    try {
                                        !e && o.return && o.return()
                                    } finally {
                                        if (t) throw i
                                    }
                                }
                                return n
                            }()), n.appendChild(e)
                        }
                    },
                    I = function () {
                        var n, e;
                        document.getElementById("ui-cheat-info") && (n = "ui-cheat-info", (e = document.getElementById(n)).parentNode.removeChild(e))
                    },
                    C = function (e) {
                        var t = e[n.activePlayer.netData].dir,
                            i = e.curAction.type;
                        if (e && e[n.activePlayer.netData].dir) {
                            var a = e.targetAction;
                            if (a || ((a = window.PIXI.Sprite.from(p)).visible = false, a.scale.set(.15, .15), a.tint = 16711680, a.alpha = .5, e.container.addChild(a), e.targetAction = a, a.actionType = 1), a) {
                                1 === i && a.actionType !== i ? a.texture = p : 2 === i && a.actionType !== i && (a.texture = d), a.actionType = i;
                                var o = {
                                    x: -.5 * a.width + t.x,
                                    y: -1.5 * a.width + t.y
                                };
                                a.position.set(o.x, o.y), a.visible = 1 === i || 2 === i
                            }
                        }
                    },
                    E = function (n) {},
                    B = function (n) {},
                    L = function () {
                        for (var t = e.scope[n.input.main].binds, i = t.length, a = 0; a < i; a++)
                            if (null != t[a] && 2 == t[a].type && 2 == t[a].code) return true;
                        return false
                    },
                    M = function (t) {
										 
                        if (2 === t.button && !L()) {
                            var i = e.scope[n.activePlayer.main];
                            if (i.curWeapIdx) return void u("49");
                            if (!i.curWeapIdx) return void u("50")
                        }
                        if ((0 === t.button || 2 === t.button && !L()) && s.new) {
                            var a = e.scope[n.input.main][n.input.input],
                                o = t.button;
                            a.mousePos = s.averageTargetMousePosition, a.mouseButtonsOld[o] = false, a.mouseButtons[o] = true
                        } else E(t)
                    },
                    D = function (t) {
                        var i = b(),
                            a = e.scope[n.camera].screenToPoint({
                                x: t.clientX,
                                y: t.clientY
                            });
                        s.mouseRelPointPos = {
                            x: a.x - i.x,
                            y: a.y - i.y
                        }, s.new || B(t)
                    },
                    P = function () {
                        window.removeEventListener("mousedown", M), window.removeEventListener("mousemove", D)
                    },
                    O = function (t) {
                        var i = e.scope[n.input.main][n.input.input].mouseButtons;
                        32 == t.which && (i[0] = true)
                    },
                    R = function (t) {
                        var i = e.scope[n.input.main][n.input.input].mouseButtons;
                        32 == t.which && (i[0] = false)
                    },
                    S = function () {
                        window.removeEventListener("keydown", O), window.removeEventListener("keyup", R)
                    };
                return {
                    bind: function (t) {
                        var i, a, o, c = e.scope[n.input.main][n.input.input];
                        i = t, l.targetEnemyNicknameVisibility = i.targetEnemyNicknameVisibility, l.forwardFiringCoeff = i.forwardFiringCoeff, l.smoothLevel = i.smoothLevel, l.restirctionAngle = i.restirctionAngle, l.restirctions = i.restirctions, l.detectOnDifferentLevels = i.detectOnDifferentLevels, l.enemyExtendedInfo = i.enemyExtendedInfo, l.showEnemiesActions = i.showEnemiesActions, s = function () {
                            for (var n = [], e = 0; e < l.smoothLevel; e++) n.push({
                                distance: null,
                                radianAngle: null,
                                pos: A(),
                                targetMousePosition: A(),
                                timestamp: 0
                            });
                            return n.new = null, n.player = {
                                nameText: {
                                    visible: false,
                                    style: {
                                        fontSize: 22,
                                        fill: "#00FFFF"
                                    }
                                }
                            }, n.averageTargetMousePosition = null, n.mouseRelPointPos = {
                                x: 0,
                                y: 0
                            }, n
                        }(), E = c.bOnMouseDown, B = c.bOnMouseMove, window.removeEventListener("mousedown", c.bOnMouseDown), window.removeEventListener("mousemove", c.bOnMouseMove), P(), S(), window.addEventListener("mousedown", M), window.addEventListener("mousemove", D), window.addEventListener("keydown", O), window.addEventListener("keyup", R), a = e.scope[n.input.main].binds, o = e.scope[n.input.main].boundKeys, null != a[31] && 2 === a[31].code && 2 === a[31].type && (a[31].type = 1, a[31].code = 66, o[66] = true), r = true, window.events.add("playerBarn", "autoAimRenderCb")
                    },
                    unbind: function () {
                        window.events.remove("playerBarn", "autoAimRenderCb"), P(), S(), window.removeEventListener("mousedown", E), window.removeEventListener("mousemove", B), window.addEventListener("mousedown", E), window.addEventListener("mousemove", B), x(), I(), window.aimTarget = null, r = false
                    },
                    isBinded: function () {
                        return r
                    },
                    setTargetEnemyNicknameVisibility: function (n) {
                        l.setTargetEnemyNicknameVisibility = n
                    },
                    setForwardFiringCoeff: function (n) {
                        l.forwardFiringCoeff = n
                    },
                    setSmoothLevel: function (n) {
                        l.smoothLevel = n
                    },
                    setRestirctionAngle: function (n) {
                        l.restirctionAngle = n
                    },
                    setRestirctions: function (n) {
                        l.restirctions = n
                    },
                    setDetectOnDifferentLevels: function (n) {
                        l.detectOnDifferentLevels = n
                    },
                    setEnemyExtendedInfo: function (n) {
                        l.enemyExtendedInfo = n
                    },
                    setShowEnemiesActions: function (n) {
                        l.showEnemiesActions = n
                    },
                    render: function () {
											  
					  
													  
											  
					  
										
                        var t;
                        T(function () {
                            var t = [];
                            if (!e.scope[n.playerBarn.main][n.playerBarn.players][e.scope[n.activeId]]) return t;
                            for (var i, a = e.scope[n.activeId], o = e.scope[n.playerBarn.main][n.playerBarn.players][a].teamId, r = Object.keys(e.scope[n.playerBarn.main][n.playerBarn.players]), s = e.scope[n.activePlayer.main], c = 0; c < r.length; c++) {
                                var p = e.scope[n.objectCreator].idToObj[r[c]],
                                    d = e.scope[n.playerBarn.main][n.playerBarn.players][r[c]];
														 
																	 
										
													   
								 
                                p && (l.showEnemiesActions && C(p), (i = p)[n.activePlayer.netData].dead || i[n.activePlayer.netData].downed || g(a, o, d, r[c]) || !y(s, p) || (t[r[c]] = p))
                            }
                            return t
                        }()), s.new && (t = s.averageTargetMousePosition, e.scope[n.input.main][n.input.input].mousePos = t)
                    }
                }
            }
            console.log("Cannot init autoaim")
        }
    }, {}],
    15: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.bulletBarn,
                a = t.player,
                o = t.key,
                r = false;
            if (i && a) {
                var s = function (t) {
                        var i = e.scope[n.input.main][n.input.input].keys;
                        i[t] || setTimeout(function () {
                            i[t] = true, setTimeout(function () {
                                delete i[t]
                            }, 50)
                        }, 0)
                    },
                    l = function () {
                        return e.scope[n.activePlayer.main].pos
                    },
                    c = function (n, e, t, i) {
                        return (i * n - t * e) / -t
                    },
                    p = function (n, e, t, i) {
                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(e - i, 2))
                    },
                    d = function (n) {};
                return {
                    bind: function () {
                        d = i.prototype.render, i.prototype.render = function (t) {
                            ! function (n) {
                                if (n.length)
                                    for (var e = l(), t = 0; t < n.length; t++) {
                                        var i = {
                                                x: e.x + n[t].intersectionOfCoordLines.x,
                                                y: e.y + n[t].intersectionOfCoordLines.y
                                            },
                                            a = {
                                                x: p(n[t].bullet.pos.x, n[t].bullet.pos.y, i.x, e.y),
                                                y: p(n[t].bullet.pos.x, n[t].bullet.pos.y, e.x, i.y)
                                            };
                                        a.x < a.y ? Math.sign(n[t].intersectionOfCoordLines.x) < 0 ? s(o.D) : s(o.A) : Math.sign(n[t].intersectionOfCoordLines.y) < 0 ? s(o.W) : s(o.S)
                                    }
                            }(function () {
                                for (var t, i, o, r, s = [], p = l(), d = a.maxVisualRadius * Math.sqrt(2), u = e.scope[n.activePlayer.main], m = e.scope[n.bullets].bullets, f = 0; f < m.length; f++)
                                    if (m[f].alive && u.layer == m[f].layer) {
                                        var b = {
                                                x: m[f].pos.x - p.x,
                                                y: m[f].pos.y - p.y
                                            },
                                            A = m[f].dir;
                                        if (Math.sign(b.x) == Math.sign(A.x) && Math.sign(b.y) == Math.sign(A.y)) continue;
                                        var y = {
                                            x: (t = b.x, i = b.y, o = A.x, r = A.y, (r * t - o * i) / r),
                                            y: c(b.x, b.y, A.x, A.y)
                                        };
                                        (Math.abs(y.x) < d || Math.abs(y.y) < d) && s.push({
                                            bullet: e.scope[n.bullets].bullets[f],
                                            intersectionOfCoordLines: y
                                        })
                                    } return s
                            }()), d.call(this, t)
                        }, r = true
                    },
                    unbind: function () {
                        i.prototype.render = d, r = false
                    },
                    isBinded: function () {
                        return r
                    }
                }
            }
            console.log("Cannot init autododge")
        }
    }, {}],
    16: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.items,
                a = false,
                o = false,
                r = [];
            if (i) {
                var s = function (n) {};
                return {
                    bind: function () {
                        var t = function (n) {
                                var e = [],
                                    t = Object.keys(i),
                                    a = true,
                                    o = false,
                                    r = void 0;
                                try {
                                    for (var s, l = t[Symbol.iterator](); !(a = (s = l.next()).done); a = true) {
                                        var c = s.value;
                                        i[c].fireMode === n && e.push(c)
                                    }
                                } catch (n) {
                                    o = true, r = n
                                } finally {
                                    try {
                                        !a && l.return && l.return()
                                    } finally {
                                        if (o) throw r
                                    }
                                }
                                return e
                            }("single"),
                            l = function (n) {
                                var e = [],
                                    t = Object.keys(i),
                                    a = true,
                                    o = false,
                                    r = void 0;
                                try {
                                    for (var s, l = t[Symbol.iterator](); !(a = (s = l.next()).done); a = true) {
                                        var c = s.value;
                                        i[c].type === n && e.push(c)
                                    }
                                } catch (n) {
                                    o = true, r = n
                                } finally {
                                    try {
                                        !a && l.return && l.return()
                                    } finally {
                                        if (o) throw r
                                    }
                                }
                                return e
                            }("melee");
                        r = t.concat(l, "fists"), s = e.scope[n.input.main][n.input.input][n.input.mousePressed], e.scope[n.input.main][n.input.input][n.input.mousePressed] = function (t) {
                            return !(0 !== t || !o && !window.autoFire) || s.call(e.scope[n.input.main][n.input.input], t)
                        }, a = true, window.events.add("playerBarn", "autoFireRenderCb")
                    },
                    unbind: function () {
                        window.events.remove("playerBarn", "autoFireRenderCb"), a = false, s = function (n) {
                            return !this.mouseButtonsOld[n] && !!this.mouseButtons[n]
                        }, e.scope[n.input.main][n.input.input][n.input.mousePressed] = s, o = false
                    },
                    isBinded: function () {
                        return a
                    },
                    render: function () {
                        var t = e.scope[n.activePlayer.main],
                            i = e.scope[n.input.main][n.input.input].mouseButtons;
                        o = !(!i[0] || !r.includes(t.weapType))
                    }
                }
            }
            console.log("Cannot init autoFire")
        }
    }, {}],
    17: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.key,
                a = false,
                o = null,
                r = function (t) {
                    var i = e.scope[n.input.main][n.input.input].keys;
                    i[t] || setTimeout(function () {
                        i[t] = true, setTimeout(function () {
                            delete i[t]
                        }, 90)
                    }, 0)
                },
                s = function () {
                    if (function () {
                            var t = e.scope[n.playerBarn.main][n.playerBarn.players];
                            if (!t[e.scope[n.activeId]]) return false;
                            for (var i = t[e.scope[n.activeId]].teamId, a = Object.keys(t), o = e.scope[n.objectCreator].idToObj, r = 0; r < a.length; r++) {
                                var s = a[r];
                                if (o[s] && !o[s][n.activePlayer.netData].dead && !o[s][n.activePlayer.netData].downed && t[s].teamId != i) return false
                            }
                            return true
                        }() && !((o = e.scope[n.input.main][n.input.input].keys)[i.W] || o[i.D] || o[i.S] || o[i.A]) && ("Reloading" != (a = e.scope[n.menu].pieTimer).clientData.label || !a.active)) {
                        var t = e.scope[n.activePlayer.main][n.activePlayer.localData];
                        if (t.health < 30 && t.inventory.healthkit > 0) return void r(i.Eight);
                        if (t.health < 70 && t.boost < 40 && t.inventory.bandage > 0) return void r(i.Seven);
                        if (t.boost < 50 && t.inventory.painkiller > 0) return void r(i.Zero);
                        if (t.boost < 75 && t.inventory.soda > 0) return void r(i.Nine)
                    }
                    var a, o
                };
            return {
                bind: function () {
                    ! function n() {
                        s(), o = setTimeout(n, 1e3)
                    }(), a = true
                },
                unbind: function () {
                    clearTimeout(o), o = null, a = false
                },
                isBinded: function () {
                    return a
                }
            }
        }
    }, {}],
    18: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.lootBarn,
                a = t.bagSizes,
                o = t.items,
                r = t.uiModule,
                s = false,
                l = {},
                c = window.performance.now();
            if (i && a && o && r) {
                var p = function (t) {
                        var i = e.scope[n.input.main][n.input.input].keys;
                        i[t] || setTimeout(function () {
                            i[t] = true, setTimeout(function () {
                                delete i[t]
                            }, 90)
                        }, 0)
                    },
                    d = function (n, e) {
                        var t = Object.keys(o),
                            i = true,
                            a = false,
                            r = void 0;
                        try {
                            for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = true) {
                                var c = s.value,
                                    p = o[c],
                                    d = true,
                                    u = false,
                                    m = void 0;
                                try {
                                    for (var f, b = e[Symbol.iterator](); !(d = (f = b.next()).done); d = true) {
                                        var A = f.value;
                                        if (p.type === A && c === n) return c
                                    }
                                } catch (n) {
                                    u = true, m = n
                                } finally {
                                    try {
                                        !d && b.return && b.return()
                                    } finally {
                                        if (u) throw m
                                    }
                                }
                            }
                        } catch (n) {
                            a = true, r = n
                        } finally {
                            try {
                                !i && l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return null
                    },
                    u = function (n, e) {
                        return t = n.pos, i = e.pos, a = i.x - t.x, o = i.y - t.y, Math.sqrt(a * a + o * o);
                        var t, i, a, o
                    },
                    m = function () {
                        var t, i, o = e.scope[n.lootBarn.main][n.lootBarn.itemf],
                            r = e.scope[n.activePlayer.main][n.activePlayer.netData],
                            s = e.scope[n.activePlayer.main][n.activePlayer.localData];
                        if (o && o.active && function (t) {
                                return e.scope[n.lootBarn.main][n.lootBarn.lootPool][n.lootBarn.pool].filter(function (n) {
                                    return n.active && u(n, t) < l.safeDistance
                                }).length > 0
                            }(r) && (i = c, window.performance.now() - i > l.dropDelay)) {
                            if (function (n, e, t) {
                                    if (null !== d(n.name, ["ammo", "heal", "boost", "throwable"])) {
                                        var i = t ? parseInt(t.slice(-2), 10) : 0,
                                            o = a[n.name][i];
                                        return e[n.name] !== o && p("70"), true
                                    }
                                    return false
                                }(o, s.inventory, r.backpack)) return;
                            if (function (n, e) {
                                    return !!/scope/.test(n.name) && (parseInt(n.name.slice(0, -6), 10), e[n.name] || p("70"), true)
                                }(o, s.inventory)) return;
                            if (function (t, i, a) {
                                    if (/helmet/.test(t.name) || /chest/.test(t.name) || /backpack/.test(t.name)) {
                                        var o = t.name.slice(0, -2),
                                            r = parseInt(t.name.slice(-2), 10);
                                        return e.scope[n.activePlayer.main][n.activePlayer.netData][o] ? (parseInt(a[o].slice(-2), 10) < r && p("70"), true) : (p("70"), true)
                                    }
                                    return false
                                }(o, r.backpack, r)) return;
                            if (l.autoPickUp.allow = function () {
                                    var t = e.scope[n.playerBarn.main][n.playerBarn.players];
                                    if (!t[e.scope[n.activeId]]) return false;
                                    for (var i = t[e.scope[n.activeId]].teamId, a = Object.keys(t), o = e.scope[n.objectCreator].idToObj, r = 0; r < a.length; r++) {
                                        var s = a[r];
                                        if (o[s] && !o[s][n.activePlayer.netData].dead && !o[s][n.activePlayer.netData].downed && t[s].teamId != i) return false
                                    }
                                    return true
                                }() && ("Reloading" != (t = e.scope[n.menu].pieTimer).clientData.label || !t.active), function (n, e) {
                                    var t = d(n.name, ["gun"]);
                                    if (l.autoPickUp.allow) {
                                        if (l.autoPickUp.weapon1 === t && e[0].name !== t) return p("49"), p("70"), true;
                                        if (l.autoPickUp.weapon2 === t && e[1].name !== t) return p("50"), p("70"), true
                                    }
                                    return ("" === e[0].name || "" === e[1].name) && null !== t && (p("70"), true)
                                }(o, s.weapons)) return;
                            if (function (n, e) {
                                    var t = d(n.name, ["melee"]);
                                    return l.autoPickUp.allow && l.autoPickUp.weapon3 === t && e[2].name !== t ? (p("51"), p("70"), true) : "fists" === e[2].name && null !== t && (p("70"), true)
                                }(o, s.weapons)) return;
                            if (function (n, e) {
                                    var t = d(n.name, ["skin"]);
                                    return l.autoPickUp.skin === t && e.skin !== t ? (p("70"), true) : "outfitBase" === e.skin && "outfitBase" !== l.autoPickUp.skin && t !== e.skin && "outfitBase" !== t && null !== t && (p("70"), true)
                                }(o, r)) return
                        }
                    },
                    f = function (n, e, t, i) {},
                    b = {},
                    A = function (n) {};
                return {
                    bind: function (n) {
                        var e;
                        e = n, l.autoPickUp = e.autoPickUp, l.safeDistance = e.safeDistance, l.dropDelay = e.dropDelay, f = i.prototype.l, i.prototype.l = function (n, e, t, i) {
                            b = this, m(), f.call(b, n, e, t, i)
                        }, A = r.prototype.pushAction, r.prototype.pushAction = function (n) {
                            ! function (n) {
                                "drop" === n.action && (c = window.performance.now())
                            }(n), A.call(this, n)
                        }, s = true
                    },
                    unbind: function () {
                        i.prototype.l = f, r.prototype.pushAction = A, s = false
                    },
                    isBinded: function () {
                        return s
                    },
                    getItemsFromSlot: function (n) {
                        var e = void 0;
                        return 1 != n && 2 != n || (e = "gun"), 3 == n && (e = "melee"), 5 == n && (e = "skin"),
                            function (n) {
                                var e = [],
                                    t = Object.keys(o),
                                    i = true,
                                    a = false,
                                    r = void 0;
                                try {
                                    for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = true) {
                                        var c = s.value;
                                        o[c].type === n && e.push({
                                            name: o[c].name,
                                            key: c
                                        })
                                    }
                                } catch (n) {
                                    a = true, r = n
                                } finally {
                                    try {
                                        !i && l.return && l.return()
                                    } finally {
                                        if (a) throw r
                                    }
                                }
                                return e
                            }(e).filter(function (n) {
                                return "fists" != n.key.toLowerCase()
                            })
                    },
                    setAutoPickUp: function (n) {
                        l.autoPickUp = n
                    },
                    setSafeDistance: function (n) {
                        l.safeDistance = n
                    },
                    setDropDelay: function (n) {
                        l.dropDelay = n
                    }
                }
            }
            console.log("Cannot init autoloot")
        }
    }, {}],
    19: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t, i) {
            var a = false,
                o = 2;
            return {
                bind: function () {
                    t.scope = function () {
                        if (i.scope) switch (i.scope.__type) {
                            case o:
                                i.scope.hasOwnProperty("door") && !i.scope.door.open && (t = "70", (a = e.scope[n.input.main][n.input.input].keys)[t] || setTimeout(function () {
                                    a[t] = true, setTimeout(function () {
                                        delete a[t]
                                    }, 50)
                                }, 50))
                        }
                        var t, a
                    }, a = true
                },
                unbind: function () {
                    t.scope = function () {}, a = false
                },
                isBinded: function () {
                    return a
                }
            }
        }
    }, {}],
    20: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e) {
            var t = false,
                i = function (t) {
                    e.scope[n.menu].container.alpha = t
                };
            return {
                bind: function (n) {
                    i(n), t = true
                },
                unbind: function () {
                    t = false
                },
                isBinded: function () {
                    return t
                },
                setBigMapTransparency: i
            }
        }
    }, {}],
    21: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e) {
            var t = false,
                i = false,
                a = function n() {
                    i && i.update(), t && requestAnimationFrame(n)
                };
            return {
                bind: function () {
                    t = true, i = new Stats,
                        function () {
                            if (i) {
                                var n = i.domElement.style;
                                n.position = "absolute", n.top = "", n.bottom = "4px", n.left = "4px", document.body.appendChild(i.domElement)
                            }
                        }(), requestAnimationFrame(a)
                },
                unbind: function () {
                    t = false, i.domElement.remove(), i = false
                },
                isBinded: function () {
                    return t
                }
            }
        }
    }, {}],
    22: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e) {
            var t = false,
                i = true,
                a = function () {
                    e.scope[n.pieTimer].a(function () {
                            o()
                        }, 4.2, "Grenade", true), i = false,
                        function t() {
                            var a = e.scope[n.activePlayer.main];
                            3 !== a.curWeapIdx || "frag" !== a.weapType || i ? o() : setTimeout(t, 100)
                        }()
                },
                o = function () {
                    e.scope[n.pieTimer] && e.scope[n.pieTimer].o(true), i = true
                },
                r = function (t) {
                    var o = e.scope[n.activePlayer.main];
                    3 === o.curWeapIdx && "frag" === o.weapType && i && 0 === t.button && !e.scope.gameOver && a()
                },
                s = function (n) {
                    0 !== n.button || i || o()
                };
            return {
                bind: function (n) {
                    window.addEventListener("mousedown", r), window.addEventListener("mouseup", s), t = true
                },
                unbind: function () {
                    window.removeEventListener("mousedown", r), window.addEventListener("mouseup", s), t = false
                },
                isBinded: function () {
                    return t
                }
            }
        }
    }, {}],
    23: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.bullets,
                a = t.items,
                o = false,
                r = {
                    draw: null,
                    range: 0,
                    direction: 0,
                    angle: 0
                };
            if (i && a) {
                var s = function (n) {
                        return (window.performance.now() - n) / 1e3
                    },
                    l = function (n, e) {
                        if (n) {
                            var t = {
                                pos: n.pos,
                                time: window.performance.now()
                            };
                            if (!n.posData || s(n.posData[0].time) > .19) return n.posData = [t], n.prediction = {
                                x: 0,
                                y: 0
                            }, n.speed = 0, n.distance = 0, void(n.direction = null);
                            var i, a, o, r, l = n.posData[0],
                                c = (i = t.pos, a = l.pos, o = a.x - i.x, r = a.y - i.y, Math.sqrt(o * o + r * r));
                            n.direction = c > 1e-4 ? {
                                x: (t.pos.x - l.pos.x) / c,
                                y: (t.pos.y - l.pos.y) / c
                            } : null;
                            var p = c / s(l.time);
                            for (n.speed && (p = p * (1 - e) + n.speed * e), n.speed = p, n.distance = c, n.posData.push(t); n.posData.length > 4;) n.posData.shift()
                        }
                    },
                    c = function () {
                        r.draw && e.scope.initialized && r.draw.clear()
                    };
                return {
                    bind: function () {
                        o = true, r.draw = null, c(), window.events.add("playerBarn", "laserPointerRenderCb")
                    },
                    unbind: function () {
                        window.events.remove("playerBarn", "laserPointerRenderCb"), o = false, c()
                    },
                    isBinded: function () {
                        return o
                    },
                    render: function () {
                        var t = e.scope[n.activePlayer.main];
                        if (t.weapType) {
                            var o = e.scope[n.camera],
                                s = a[t.weapType];
                            isset(s.shotSpread) && isset(s.bulletType) ? (l(t[n.activePlayer.netData], .1), r.range = i[s.bulletType].distance * o.ppu, r.direction = Math.atan2(t[n.activePlayer.netData].dir.x, t[n.activePlayer.netData].dir.y) - Math.PI / 2, r.angle = .01745329252 * (s.shotSpread + (t[n.activePlayer.netData].speed > .01 ? s.moveSpread : 0)) / 2, function () {
                                var t, i = r.draw;
                                if (i || (i = new window.PIXI.Graphics, r.draw = i, (t = e.scope[n.activePlayer.main]).container.addChild(i), t.container.setChildIndex(i, 0)), i.graphicsData) {
                                    i.clear();
                                    var a = 0,
                                        o = 0,
                                        s = r.range,
                                        l = r.direction - r.angle,
                                        c = r.direction + r.angle;
                                    l = l > 2 * Math.PI ? l - 2 * Math.PI : l < 0 ? l + 2 * Math.PI : l, c = c > 2 * Math.PI ? c - 2 * Math.PI : c < 0 ? c + 2 * Math.PI : c, i.beginFill(16711680, .35), i.moveTo(a, o), i.arc(a, o, s, l, c), i.lineTo(a, o), i.endFill()
                                }
                            }()) : c()
                        }
                    }
                }
            }
            console.log("Cannot init laserpointer")
        }
    }, {}],
    24: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e) {
            var t = false,
                i = {
                    draw: null,
                    points: null
                },
                a = function (t) {
                    var a = function () {
                            var t = e.scope[n.playerBarn.main][n.playerBarn.players],
                                i = e.scope[n.activeId],
                                a = [];
                            if (!t[i]) return a;
                            for (var o = e.scope[n.objectCreator].idToObj, r = t[i].teamId, s = Object.keys(t), l = 0; l < s.length; l++) !o[s[l]] || o[s[l]][n.activePlayer.netData].dead || o[s[l]][n.activePlayer.netData].downed || t[s[l]].teamId == r || s[l] != i && (a[s[l]] = o[s[l]]);
                            return a
                        }(),
                        o = e.scope[n.camera];
                    i.points = a.map(function (e) {
                        return {
                            x: (e.pos.x - t[n.activePlayer.netData].pos.x) * o.ppu,
                            y: (t[n.activePlayer.netData].pos.y - e.pos.y) * o.ppu
                        }
                    })
                },
                o = function () {
                    i.draw && e.scope.initialized && i.draw.clear()
                };
            return {
                bind: function () {
                    t = true, i.draw = null, o(), window.events.add("playerBarn", "linesToPlayersRenderCb")
                },
                unbind: function () {
                    window.events.remove("playerBarn", "linesToPlayersRenderCb"), t = false, o()
                },
                isBinded: function () {
                    return t
                },
                render: function () {
                    var t = e.scope[n.activePlayer.main];
                    a(t),
                        function (n) {
                            if (n && n.container) {
                                var e = i.points,
                                    t = i.draw;
                                !e && e.length > 0 || (t || (t = new window.PIXI.Graphics, i.draw = t, n.container.addChild(t), n.container.setChildIndex(t, 0)), t.graphicsData && (t.clear(), t.beginFill(), t.lineStyle(2, 16562432), e.forEach(function (n) {
                                    t.moveTo(0, 0), t.lineTo(n.x, n.y)
                                }), t.endFill()))
                            }
                        }(t)
                }
            }
        }
    }, {}],
    25: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t, i) {
            var a = false,
                o = false,
                r = false,
                s = null,
                l = false,
                c = [{
                    name: "Modules"
                }, {
                    name: "Config"
                }],
                p = [{
                        type: "checkbox",
                        description: "Auto aim enabled",
                        inputProps: {
                            value: "autoAim.enabled"
                        },
                        callbacks: {
                            value: "autoAimEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Auto loot enabled",
                        inputProps: {
                            value: "autoLoot.enabled"
                        },
                        callbacks: {
                            value: "autoLootEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Auto heal enabled",
                        inputProps: {
                            value: "autoHeal.enabled"
                        },
                        callbacks: {
                            value: "autoHealEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Auto Switch enabled",
                        inputProps: {
                            value: "autoSwitch.enabled"
                        },
                        callbacks: {
                            value: "autoSwitchEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Multiboxing enabled",
                        inputProps: {
                            value: "multibox.enabled"
                        },
                        callbacks: {
                            value: "multiboxEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "AutoDodge enabled",
                        inputProps: {
                            value: "autoDodge.enabled"
                        },
                        callbacks: {
                            value: "autoDodgeEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Auto opening doors enabled",
                        inputProps: {
                            value: "autoOpeningDoors.enabled"
                        },
                        callbacks: {
                            value: "autoOpeningDoorsEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Grenade timer enabled",
                        inputProps: {
                            value: "grenadeTimer.enabled"
                        },
                        callbacks: {
                            value: "grenadeTimerEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Laser pointer enabled",
                        inputProps: {
                            value: "laserPointer.enabled"
                        },
                        callbacks: {
                            value: "laserPointerEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Lines to players enabled",
                        inputProps: {
                            value: "linesToPlayers.enabled"
                        },
                        callbacks: {
                            value: "linesToPlayersEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Bump fire enabled",
                        inputProps: {
                            value: "autoFire.enabled"
                        },
                        callbacks: {
                            value: "autoFireEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Zoom changing enabled",
                        inputProps: {
                            value: "zoomRadiusManager.enabled"
                        },
                        callbacks: {
                            value: "zoomRadiusManagerEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "Air drop tracking enabled",
                        inputProps: {
                            value: "airDropTracking.enabled"
                        },
                        callbacks: {
                            value: "airDropTrackingEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "FPS counter enabled",
                        inputProps: {
                            value: "fpsCounter.enabled"
                        },
                        callbacks: {
                            value: "fpsCounterEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "checkbox",
                        description: "TriggerBot enabled",
                        inputProps: {
                            value: "triggerBot.enabled"
                        },
                        callbacks: {
                            value: "triggerBotEnableCb"
                        },
                        tabId: 0
                    }, {
                        type: "info",
                        description: "Transparency",
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Particles transparency level",
                        inputProps: {
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: "particlesTransparency"
                        },
                        callbacks: {
                            value: "particlesTransparencyCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Ceiling transparency level",
                        inputProps: {
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: "ceilingTransparency"
                        },
                        callbacks: {
                            value: "ceilingTransparencyCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Big map transparency level",
                        inputProps: {
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: "bigMapTransparency"
                        },
                        callbacks: {
                            value: "bigMapTransparencyCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Grenade color",
                        inputProps: {
                            min: "0",
                            max: "16777216",
                            step: "1",
                            value: "fragGrenadeColor"
                        },
                        callbacks: {
                            value: "grenadePropertiesCb",
                            useInputValueFrom: "fragGrenadeSize",
                            position: 0
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Grenade size",
                        inputProps: {
                            min: "0.1",
                            max: "0.5",
                            step: "0.01",
                            value: "fragGrenadeSize"
                        },
                        callbacks: {
                            value: "grenadePropertiesCb",
                            useInputValueFrom: "fragGrenadeColor",
                            position: 1
                        },
                        tabId: 1
					
									 
												  
								
											  
                    }, {
								
												
					  
							
				   
                        type: "resetButton",
                        description: "Reset grenade properties",
                        callbacks: {
                            value: "defaultGrenadePropertiesCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Smoke alpha",
                        inputProps: {
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: "smokeGrenadeAlpha"
                        },
                        callbacks: {
                            value: "smokeGrenadePropertiesCb"
                        },
                        tabId: 1
                    }, {
                        type: "info",
                        description: "AutoAim",
                        tabId: 1
                    }, {
                        type: "checkbox",
                        description: "Target enemy nickname visibility enabled",
                        inputProps: {
                            value: "autoAim.targetEnemyNicknameVisibility"
                        },
                        callbacks: {
                            value: "autoAimTargetEnemyNicknameVisibilityCb"
                        },
                        tabId: 1
                    }, {
                        type: "checkbox",
                        description: "Target enemy extended info enabled",
                        inputProps: {
                            value: "autoAim.enemyExtendedInfo"
                        },
                        callbacks: {
                            value: "autoAimEnemyExtendedInfoCb"
                        },
                        tabId: 1
                    }, {
                        type: "checkbox",
                        description: "Detect on different levels",
                        inputProps: {
                            value: "autoAim.detectOnDifferentLevels"
                        },
                        callbacks: {
                            value: "autoAimDetectOnDifferentLevelsCb"
                        },
                        tabId: 1
                    }, {
                        type: "checkbox",
                        description: "Show enemies actions",
                        inputProps: {
                            value: "autoAim.showEnemiesActions"
                        },
                        callbacks: {
                            value: "autoAimShowEnemiesActionsCb"
					  
							
					
									 
															   
								 
													 
					  
								
													  
                        },
							  
															   
					  
                        tabId: 1
					
									 
													  
								 
														 
                    }, {
								
														  
					  
							
					
                        type: "checkbox",
                        description: "Turn off permanent tracking",
								 
														 
					  
								
														  
					  
							
					
								   
														
								 
								   
								   
									 
														   
					  
								
															
					  
							
					
								   
												
								 
								 
								  
								  
													
					  
								
													 
					  
							
					
								   
													 
                        inputProps: {
								 
								  
								  
														 
					  
								
														  
					  
							  
								  
                            value: "autoAim.restirctions"
                        },
                        callbacks: {
                            value: "autoAimRestirctionsCb"
                        },
                        options: {
                            showOrHide: ["autoAimrestirctionAngle"]
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Forward firing coeff",
                        inputProps: {
                            min: "0.9",
                            max: "1.1",
                            step: "0.01",
                            value: "autoAim.forwardFiringCoeff"
                        },
                        callbacks: {
                            value: "autoAimForwardFiringCoeffCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Smooth level",
                        inputProps: {
                            min: "2",
                            max: "20",
                            step: "1",
                            value: "autoAim.smoothLevel"
                        },
                        callbacks: {
                            value: "autoAimSmoothLevelCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Restirction angle",
                        inputProps: {
                            min: "1",
                            max: "60",
                            step: "1",
                            value: "autoAim.restirctionAngle"
                        },
                        callbacks: {
                            value: "autoAimRestirctionAngleCb"
                        },
                        options: {
                            display: {
                                value: "autoAim.restirctions"
                            },
                            id: "autoAimrestirctionAngle"
                        },
                        tabId: 1
                    }, {
                        type: "info",
                        description: "AutoLoot",
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Safe distance",
                        inputProps: {
                            min: "0.1",
                            max: "1.3",
                            step: "0.1",
                            value: "autoLoot.safeDistance"
                        },
                        callbacks: {
                            value: "autoLootSafeDistanceCb"
                        },
                        tabId: 1
                    }, {
                        type: "slider",
                        description: "Autoloot drop delay",
                        inputProps: {
                            min: "0",
                            max: "2000",
                            step: "10",
                            value: "autoLoot.dropDelay"
                        },
                        callbacks: {
                            value: "autoLootDropDelayCb"
                        },
                        tabId: 1
                    }, {
                        type: "select",
                        description: "Automatic weapon(slot 1) pick up",
                        inputProps: {
                            valuesFromFunction: "getAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 1
                            },
                            selected: "autoLoot.autoPickUp.weapon1"
                        },
                        callbacks: {
                            value: "setAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 1,
                                position: 0
                            }
                        },
                        tabId: 1
                    }, {
                        type: "select",
                        description: "Automatic weapon(slot 2) pick up",
                        inputProps: {
                            valuesFromFunction: "getAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 2
                            },
                            selected: "autoLoot.autoPickUp.weapon2"
                        },
                        callbacks: {
                            value: "setAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 2,
                                position: 0
                            }
                        },
                        tabId: 1
                    }, {
                        type: "select",
                        description: "Automatic weapon(slot 3) pick up",
                        inputProps: {
                            valuesFromFunction: "getAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 3
                            },
                            selected: "autoLoot.autoPickUp.weapon3"
                        },
                        callbacks: {
                            value: "setAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 3,
                                position: 0
                            }
                        },
                        tabId: 1
                    }, {
                        type: "select",
                        description: "Automatic skin pick up",
                        inputProps: {
                            valuesFromFunction: "getAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 5
                            },
                            selected: "autoLoot.autoPickUp.skin"
                        },
															   
					  
                        callbacks: {
                            value: "setAutoLootAutoPickUpCb",
                            functionValue: {
                                value: 5,
                                position: 0
                            }
					  
							
					
								   
																	
								 
																	  
										
									
                        },
                        tabId: 1
                    }, {
                        type: "info",
                        description: "Streamer Mode",
                        tabId: 1
                    },
                    {
                        type: "checkbox",
										
									 
									   
						 
					  
							
					
								   
                        description: "Streamer Mode ",
                        inputProps: {
                            value: "streamerMode.enabled"
										
									
                        },
															   
					  
                        callbacks: {
                            value: "streamerModeEnableCb"
										
									 
									   
						 
					  
							
					
								   
														  
								 
																	  
										
									
                        },
                        tabId: 1
					  
								
														 
										
									 
									   
                    }
                ],
							
				   
                d = function () {
                    setTimeout(function () {
                        i.storeOptionsCb.call()
                    })
                },
                u = function (n, e) {
                    e ? removeClass(n, "btn-grey") : addClass(n, "btn-grey")
                },
                m = function (n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = document.createElement("div");
                    i.className = "btn-game-container";
                    var a = document.createElement("a");
                    a.className = "btn-game-settings btn-game-tab-select btn-game-menu btn-darken", a.setAttribute("data-cheat-tab", "tab-" + n), e && (a.innerHTML = e);
                    var o = document.createElement("div");
                    return t && (o.className = "btn-double-row game-menu-icon-static", addClass(o, t.className)), a.addEventListener("click", function () {
                        var n = this.getAttribute("data-cheat-tab").split("-")[1];
                        b(n)
                    }), i.appendChild(a), i.appendChild(o), i
                },
                f = function () {
                    var n = function () {
                            var n = document.createElement("div");
                            return n.className = "btn-game-tabs btns-game-double-row", n.style = "display: flex", n
                        }(),
                        e = 0,
                        t = true,
                        i = false,
                        a = void 0;
                    try {
                        for (var o, r = c[Symbol.iterator](); !(t = (o = r.next()).done); t = true) {
                            var s = o.value,
                                l = !!isset(s.name) && s.name,
                                p = !!isset(s.name) && s.icon,
                                d = m(e, l, p);
                            n.appendChild(d), e++
                        }
                    } catch (n) {
                        i = true, a = n
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                },
                b = function (n) {
                    if (n = parseInt(n), s !== n) {
                        var e = document.getElementsByAttribute("data-cheat-tab", "tab-" + n)[0];
                        if (addClass(e, "btn-game-menu-selected"), null !== s) {
                            var t = document.getElementsByAttribute("data-cheat-tab", "tab-" + s)[0];
                            removeClass(t, "btn-game-menu-selected")
                        }
                        document.getElementById("ui-cheat-tab-" + n).style = "display: block", null !== s && (document.getElementById("ui-cheat-tab-" + s).style = "display: none"), s = n
                    }
                },
                A = function (n) {
                    var e = document.createElement("div");
                    e.className = "ui-list ui-game-tab ui-game-tab-settings-desktop full-height", e.style = "display: none;", e.id = "ui-cheat-tab-" + n;
                    var t = document.createElement("div");
                    return t.style = "height: 100%;", e.appendChild(t), e
                },
                y = function (n) {
                    var e, a, o, r, s = null;
                    if ("slider" === n.type) {
                        var l = false;
                        isset(n.options) && (l = n.options), s = function (n, e, a) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                r = document.createElement("div");
                            if (i[a.value]) {
                                r.className = "slider-container ui-slider-container center", isset(o.id) && (r.id = o.id), isset(o.display) && (fetchFromObject(t, o.display.value) || (r.style = "display: none;"));
                                var s = document.createElement("p");
                                s.className = "slider-text left", s.innerHTML = n;
                                var l = fetchFromObject(t, e.value),
                                    c = document.createElement("span");
                                c.className = "slider-current-value right", c.innerHTML = l;
                                var p = document.createElement("input");
                                p.className = "slider", p.type = "range", p.min = e.min, p.max = e.max, p.step = e.step, p.value = l, p.addEventListener("input", function () {
                                    if (isset(a.useInputValueFrom)) {
                                        var n = fetchFromObject(t, a.useInputValueFrom),
                                            e = 0 === a.position ? n : this.value,
                                            o = 1 === a.position ? n : this.value;
                                        i[a.value].call(this, e, o)
                                    } else i[a.value].call(this, this.value);
                                    c.innerHTML = this.value, d()
                                }, false), r.appendChild(s), r.appendChild(c), r.appendChild(p)
                            }
                            return r
                        }(n.description, n.inputProps, n.callbacks, l)
                    } else "checkbox" === n.type ? (l = false, isset(n.options) && (l = n.options), s = function (n, e, a) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = document.createElement("div");
                        if (i[a]) {
                            var s = document.createElement("button");
                            s.className = "btn-game-menu btn-darken", s.style = "display: block", s.innerHTML = n, s.setAttribute("data", fetchFromObject(t, e.value)), u(s, fetchFromObject(t, e.value)), s.addEventListener("click", function () {
                                i[a].call();
                                var n = fetchFromObject(t, e.value);
                                if (u(this, n), d(), isset(o.showOrHide)) {
                                    var r = true,
                                        s = false,
                                        l = void 0;
                                    try {
                                        for (var c, p = o.showOrHide[Symbol.iterator](); !(r = (c = p.next()).done); r = true) {
                                            var m = c.value,
                                                f = document.getElementById(m);
                                            f.style.display = n ? "block" : "none"
                                        }
                                    } catch (n) {
                                        s = true, l = n
                                    } finally {
                                        try {
                                            !r && p.return && p.return()
                                        } finally {
                                            if (s) throw l
                                        }
                                    }
                                }
                            }, false), r.appendChild(s)
                        }
                        return r
                    }(n.description, n.inputProps, n.callbacks.value, l)) : "resetButton" === n.type ? (e = n.description, a = n.callbacks.value, o = n.tabId, r = document.createElement("div"), i[a] && (r.className = "menu-option btn-darken", r.innerHTML = e, r.addEventListener("click", function () {
                        i[a].call(), setTimeout(function () {
                            v(), g(), b(o), d()
                        })
                    }, false)), s = r) : "select" === n.type ? s = function (n, e, a) {
                        var o = document.createElement("div");
                        if (i[a.value]) {
                            var r = document.createElement("p");
                            r.className = "slider-text", r.innerHTML = n;
                            var s = document.createElement("select");
                            s.className = "select-cheat";
                            var l = [];
                            if (isset(e.values)) l = fetchFromObject(t, e.values);
                            else if (isset(e.functionValue)) {
                                var c = e.functionValue.value;
                                l = fetchFromObject(i, e.valuesFromFunction).call(this, c)
                            } else l = fetchFromObject(i, e.valuesFromFunction).call(this);
                            l.unshift({
                                name: "None",
                                key: ""
                            });
                            for (var p = 0; p < l.length; p++) {
                                var u = document.createElement("option");
                                u.value = l[p].key, u.text = l[p].name, fetchFromObject(t, e.selected) === l[p].key && (u.selected = true), s.appendChild(u)
                            }
                            s.addEventListener("change", function () {
                                if (isset(a.functionValue)) {
                                    var n = a.functionValue.value,
                                        e = 0 === a.functionValue.position ? n : this.value,
                                        t = 1 === a.functionValue.position ? n : this.value;
                                    i[a.value].call(this, e, t)
                                } else i[a.value].call(this);
                                d()
                            }, false), o.appendChild(r), o.appendChild(s)
                        }
                        return o
                    }(n.description, n.inputProps, n.callbacks) : "info" === n.type && (s = function (n) {
                        var e = document.createElement("div");
                        e.className = "info-container";
                        var t = document.createElement("p");
                        return t.className = "info-text", t.innerHTML = n, e.appendChild(t), e
                    }(n.description));
                    return s
                },
                g = function () {
                    var n;
                    r && ((n = document.getElementById("game-area-wrapper")).style.display = "contents", n.style.opacity = ""), removeHTMLElement("ui-cheat-menu"), T();
                    var e = function () {
                            var n = document.createElement("div");
                            return n.className = "ui-game-menu ui-game-menu-desktop", r && addClass(n, "ui-green"), n.style = "display: block; float: right;", n.id = "ui-cheat-menu", n
                        }(),
                        t = f();
                    e.appendChild(t);
                    var i = function () {
                            for (var n = [], e = 0; e < c.length; e++) {
                                for (var t = A(e), i = 0; i < p.length; i++)
                                    if (p[i].tabId === e) {
                                        var a = y(p[i]);
                                        isset(a) && t.firstChild.appendChild(a)
                                    } n.push(t)
                            }
                            return n
                        }(),
                        a = true,
                        o = false,
                        l = void 0;
                    try {
                        for (var d, u = i[Symbol.iterator](); !(a = (d = u.next()).done); a = true) {
                            var m = d.value;
                            e.appendChild(m)
                        }
                    } catch (n) {
                        o = true, l = n
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (o) throw l
                        }
                    }
                    document.getElementById("ui-center").appendChild(e), document.getElementById("btn-game-resume").addEventListener("click", v), document.getElementById("btn-game-quit").addEventListener("click", v), s = null, b(0)
                },
                v = function n() {
                    removeHTMLElement("ui-cheat-menu"), l && document.getElementById("btn-game-resume").removeEventListener("click", n, false), l && document.getElementById("btn-game-quit").removeEventListener("click", n, false), o = false, l = false
                },
                h = function (n) {
                    27 == event.which && (T(true), (o = !o) ? g() : v())
                },
                x = function () {
                    window.removeEventListener("keyup", h)
                },
                T = function () {
                    var t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    t = !(r = !(isset(e.scope) && true === e.scope.initialized)) && i ? !e.scope[n.menu].escMenuDisplayed : r ? o : e.scope[n.menu].escMenuDisplayed, o = t
                };
            return {
                bind: function () {
                    removeHTMLElement("ui-cheat-menu"), T(), x(), window.addEventListener("keyup", h), a = true
                },
                unbind: function () {
                    o && (v(), o = false), x(), a = false
                },
                isBinded: function () {
                    return a
                }
            }
        }
    }, {}],
    26: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = false;
            return {
                bind: function (n) {
                    t.scope = n.smokeAlpha, i = true
                },
                unbind: function () {
                    t.scope = 1, i = false
                },
                isBinded: function () {
                    return i
                },
                setSmokeAlpha: function (n) {
                    t.scope = n
                }
            }
        }
    }, {}],
    27: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.bullets,
                a = t.items,
                o = false;
            if (a) {
                var r = function (n, e, t, i) {
                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(e - i, 2))
                    },
                    s = function (t) {
                        var pos = (u = e.scope[n.activePlayer.main]).pos,
                            objects = e.scope[n.objectCreator].idToObj,
                            collidableObjects = Object.keys(objects).filter(function (n) {
                                if (typeof objects[n].img == "string") {
                                    return void 0 !== objects[n].collidable && objects[n].collidable || objects[n].img.includes("door") || objects[n].img.includes("stair")
                                } else {
                                    return void 0 !== objects[n].collidable && objects[n].collidable
                                }
                            }, ),
                            p = [];
                        p.A = [], p.B = [], p.C = [], p.D = [], p.A.x = pos.x, p.A.y = pos.y, p.B.x = t.x, p.B.y = t.y;
                        var d = true;
                        collidableObjects.forEach(function (n, e, t) {
                            var i;
                            objects[n].layer !== u.layer || objects[n].dead || void 0 !== (i = objects[n]).img && i.img.indexOf("window") > -1 || (void 0 !== objects[n].collider && void 0 !== objects[n].collider.min && void 0 !== objects[n].collider.max ? (p.C.x = objects[n].collider.min.x, p.C.y = objects[n].collider.min.y, p.D.x = objects[n].collider.max.x, p.D.y = objects[n].collider.min.y, l(p) && (d = false), p.C.x = objects[n].collider.max.x, p.C.y = objects[n].collider.min.y, p.D.x = objects[n].collider.max.x, p.D.y = objects[n].collider.max.y, l(p) && (d = false), p.C.x = objects[n].collider.max.x, p.C.y = objects[n].collider.max.y, p.D.x = objects[n].collider.min.x, p.D.y = objects[n].collider.max.y, l(p) && (d = false), p.C.x = objects[n].collider.min.x, p.C.y = objects[n].collider.max.y, p.D.x = objects[n].collider.min.x, p.D.y = objects[n].collider.max.y, l(p) && (d = false)) : function (n, e, t, i, a, o) {
                                var r, s, l = a - t,
                                    c = o - i,
                                    p = l * l + c * c,
                                    d = -1;
                                0 != p && (d = ((n - t) * l + (e - i) * c) / p), d < 0 ? (r = t, s = i) : d > 1 ? (r = a, s = o) : (r = t + d * l, s = i + d * c);
                                var u = n - r,
                                    m = e - s;
                                return Math.sqrt(u * u + m * m)
                            }(objects[n].collider.pos.x, objects[n].collider.pos.y, p.A.x, p.A.y, p.B.x, p.B.y) <= objects[n].collider.rad && (d = false))
                        });
                        var u = e.scope[n.activePlayer.main];
                        d && !e.scope[n.menu].pieTimer.active && 3 !== u.curWeapIdx && function (n, e) {
                            var t = r(n.pos.x, n.pos.y, e.pos.x, e.pos.y);
                            if (n.weapType) {
                                var o = a[n.weapType];
														  
                                if (isset(o.bulletType)) return t < i[o.bulletType].distance
								 
																												 
																	   
											  
															
                            }
                            return true
                        }(u, window.aimTarget) ? window.autoFire = true : window.autoFire = false
                    };
                return {
                    bind: function () {
                        window.events.add("playerBarn", "triggerBotRenderCb"), o = true
                    },
                    unbind: function () {
                        window.events.remove("playerBarn", "triggerBotRenderCb"), o = false, window.autoFire = false
                    },
                    isBinded: function () {
                        return o
                    },
                    render: function () {
                        void 0 !== window.aimTarget && null != window.aimTarget ? s(window.aimTarget.pos) : window.autoFire = false
                    }
                }
            }

            function l(n) {
                return !! function (n) {
                    return c(n.A, n.B, n.C) || c(n.A, n.B, n.D) || c(n.C, n.D, n.A) || c(n.C, n.D, n.B)
                }(n) || !(p(n.A, n.B, n.C) * p(n.A, n.B, n.D) >= 0 || p(n.C, n.D, n.A) * p(n.C, n.D, n.B) >= 0)
            }

            function c(n, e, t) {
                return 0 == n.x * e.y + e.x * t.y + t.x * n.y - t.x * e.y - n.x * t.y - e.x * n.y && Math.min([n.x, e.x]) <= t.x && t.x <= Math.max([n.x, e.x]) && Math.min([n.y, e.y]) <= t.y && t.y <= Math.max([n.y], e.y)
            }

            function p(n, e, t) {
                return n.x * e.y + e.x * t.y + t.x * n.y - t.x * e.y - n.x * t.y - e.x * n.y
            }
            console.log("Cannot init autoFire")
        }
    }, {}],
    28: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var i = t.scopeZoomRadius,
                a = Object.assign({}, i),
                o = false;
            if (i) {
                var r = function (n) {
                        i ? Object.keys(i).map(function (e) {
                            "scope" === e.replace(/[0-9]/g, "").slice(1) && (i[e] = n)
                        }) : console.log("Scope zoom and radius not patched")
                    },
                    s = 68,
                    l = function (n) {},
                    c = function (n) {
                        if (n.shiftKey) {
                            var e = n.deltaY || n.detail || n.wheelDelta;
                            (s += 10 * Math.sign(e)) < 10 && (s = 10), s > 1e3 && (s = 1e3), r(s)
                        } else l(n)
                    },
                    p = function (n) {
                        window.removeEventListener("wheel", c)
                    };
                return {
                    bind: function () {
                        var t = e.scope[n.input.main][n.input.input];
                        l = t.bOnMouseWheel, window.removeEventListener("wheel", t.bOnMouseWheel), p(), window.addEventListener("wheel", c), r(s), o = true
                    },
                    unbind: function () {
                        p(), window.removeEventListener("wheel", l), window.addEventListener("wheel", l), i ? Object.keys(i).map(function (n) {
                            "scope" === n.replace(/[0-9]/g, "").slice(1) && (i[n] = a[n])
                        }) : console.log("Scope zoom and radius not patched"), o = false
                    },
                    isBinded: function () {
                        return o
                    }
                }
            }
            console.log("Cannot init zoom radius manager")
        }
    }, {}],
    29: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var isBinded = false,
                o = null,
                realMousePos = {
                    x: 0,
                    y: 0
                },
                curAction = null,
                items = t.items,
                bullets = t.bullets,
                //returns enemies inside playerbarn from objectcreator
                getEnemies = function () {
                    var result = [],
                        curTeamId = e.scope[n.playerBarn.main][n.playerBarn.players][e.scope[n.activeId]].teamId,
                        playerIds = Object.keys(e.scope[n.playerBarn.main][n.playerBarn.players])
                    for (var i = 0; i < playerIds.length; i++) {
                        var enemyObject = e.scope[n.objectCreator].idToObj[playerIds[i]]
                        if (enemyObject && enemyObject.__id != e.scope[n.activeId] && !e.scope[n.objectCreator].idToObj[playerIds[i]][n.activePlayer.localData].dead && !e.scope[n.objectCreator].idToObj[playerIds[i]][n.activePlayer.netData].downed && e.scope[n.playerBarn.main][n.playerBarn.players][playerIds[i]].teamId != curTeamId) {
                            result[playerIds[i]] = e.scope[n.objectCreator].idToObj[playerIds[i]];
                        }
                    }
                    return result

                },
                calculateDistance = function (x1, y1, x2, y2) {
                    // ___________________
                    //√(x1-x2)^2+(y1-y2)^2
                    return (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))
                },
                //get player position
                getCurPos = function () {
                    return e.scope[n.activePlayer.main].pos
                },
                pressKey = function (key) {
                    var keys = e.scope[n.input.main][n.input.input].keys;
                    keys[key] || setTimeout(function () {
                        keys[key] = true, setTimeout(function () {
                            delete keys[key]
                        }, 90)
                    }, 0)
                },
                getMousePos = function (event) {
                    var playerPos = getCurPos();
                    realMousePos = e.scope[n.camera].screenToPoint({
                        x: event.clientX + playerPos.x,
                        y: event.clientY + playerPos.y
                    });
                },
                selectEnemy = function () {
                    var enemies = getEnemies(),
                        distanceArray = []

                    if (enemies) {
                        enemies = enemies.filter(function (e) {
                            return e
                        });
                        for (var i = 0; i < enemies.length; i++) {
                            distanceArray[i] = calculateDistance(realMousePos.x, realMousePos.y, enemies[i].pos.x, enemies[i].pos.y)
                        }
                        var min = Math.min.apply(null, distanceArray)
                        if (min != Infinity) {
                            var minIndex = distanceArray.findIndex(function (e) {
                                return e == min
                            })
                            return enemies[minIndex]
                        }
                    }
                },
                switchWeapon = function () {
                    var gun1 = items[e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["0"].name],
                        gun2 = items[e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["1"].name],
                        distanceToEnemy = null,
                        curPos = getCurPos(),
                        enemy = selectEnemy(),
                        mouseDown = false
                    curAction = e.scope[n.activePlayer.main][n.activePlayer.localData].action.type,
                        window.onmousedown = function () {
                            mouseDown = true
                        }
                    if (gun1 != undefined && gun2 != undefined && !mouseDown) {
                        var bullet1 = bullets[gun1.bulletType],
                            bullet2 = bullets[gun2.bulletType]
                        //true / false if we can reload or not
                        var needtoReload1 = e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["0"].ammo < gun1.maxReload,
                            needtoReload2 = e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["1"].ammo < gun2.maxReload,
                            reloading = false
                        if (needtoReload1 || needtoReload2) {
                            // if (no enemy, not doing anything, not shooting and need to reload) then reload
                            if (!enemy && curAction == 0 && !reloading && needtoReload1 && e.scope[n.activePlayer.main][n.activePlayer.localData].inventory[bullet1.tracerColor] > 0) {
                                pressKey("49")
                                pressKey("82")
                                setTimeout(function () {
                                    reloading = false
                                }, gun1.reloadTime * 1000)
                            }
                            if (!enemy && curAction == 0 && !reloading && needtoReload2 && e.scope[n.activePlayer.main][n.activePlayer.localData].inventory[bullet2.tracerColor] > 0) {
                                pressKey("50")
                                pressKey("82")
                                reloading = true
                                setTimeout(function () {
                                    reloading = false
                                }, gun2.reloadTime * 1000)
                            }
                        }
                        if (enemy != undefined && curPos && bullets && items && curAction == 0 && !needtoReload1 && !needtoReload2) {
                            distanceToEnemy = calculateDistance(curPos.x, curPos.y, enemy.pos.x, enemy.pos.y)
                            //  Bullet count per trigger pull * Bullet damage * Exponential falloff calculation / Fire delay / Acuraccy
                            var Pref1 = ((2 * ((gun1.bulletCount * bullet1.damage - Math.pow(distanceToEnemy, bullet1.falloff))) / gun1.fireDelay) / gun1.shotSpread),
                                Pref2 = ((2 * ((gun2.bulletCount * bullet2.damage - Math.pow(distanceToEnemy, bullet2.falloff))) / gun2.fireDelay) / gun2.shotSpread)
                            //Check if outside range or if magazine is empty
                            if (distanceToEnemy > bullet1.distance || e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["0"].ammo == 0) {
                                Pref1 = -100000
                            }
                            if (distanceToEnemy > bullet2.distance || e.scope[n.activePlayer.main][n.activePlayer.localData].weapons["1"].ammo == 0) {
                                Pref2 = -100000
                            }
                            //Perform switch
                            if (!(e.scope[n.activePlayer.main].curWeapIdx == 3 || e.scope[n.activePlayer.main].curWeapIdx == 4)) {
                                if (Pref2 == Pref1) {
                                    return null //do nothing
                                } else if (Pref2 > Pref1) {
                                    pressKey("50")
                                } else {
                                    pressKey("49");
                                }

                            }

                        }
                    }
                }
            return {
                bind: function () {
                    var pos = getCurPos()
                    realMousePos.x = pos.x
                    realMousePos.y = pos.y
                    window.addEventListener("mousemove", getMousePos);

                    ! function n() {
                        switchWeapon(), o = setTimeout(n, 5e2)
                    }()

                    isBinded = true
                },
                unbind: function () {
                    window.removeEventListener("mousemove", getMousePos)
                    clearTimeout(o), o = null, isBinded = false
                },
                isBinded: function () {
                    return isBinded
                }
            }
        }
    }, {}],
    30: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var isBinded = false,
                keys = t.key,
                broadcastchannel = new BroadcastChannel("multibox"),
                sendKeys = function (event) {
                    broadcastchannel.postMessage(JSON.stringify({
                        "keypressed": event.key
                    }))
                },
                pressKey = function (key) {
                    var keys = e.scope[n.input.main][n.input.input].keys;
                    keys[key] || setTimeout(function () {
                        keys[key] = true, setTimeout(function () {
                            delete keys[key]
                        }, 90)
                    }, 0)
                }
            return {
                bind: function () {
                    broadcastchannel.onmessage = function (input) {
                        console.log("hi")
                        var json = JSON.parse(input.data)
                        pressKey(keys[json.keypressed.toUpperCase()])
                    }
                    window.addEventListener("keypress", sendKeys)
                    window.onbeforeunload = function () {
                        broadcastchannel.close()
                    };
                },
                unbind: function () {
                    window.removeEventListener("keypress", sendKeys)
                    clearTimeout(o), o = null, isBinded = false
                },

                isBinded: function () {
                    return isBinded
                }
            }
        }
    }],
    31: [function (n, e, t) {
        "use strict";
        e.exports = function (n, e, t) {
            var isBinded = false,
                options = t.options
            options.zoomRadiusManager.enabled = true;
            options.autoAim.targetEnemyNicknameVisibility = true;
            options.autoAim.showEnemiesActions = true;
            options.autoAim.enemyExtendedInfo = true;
            options.laserPointer.enabled = true
            options.smokeGrenadeAlpha = 0.1
            options.particlesTransparency = 0.5
            options.ceilingTransparency = 0.5
            options.linesToPlayers.enabled = true
            options.fpsCounter.enabled = true
            return {
                bind: function () {
                    options.zoomRadiusManager.enabled = false;
                    options.autoAim.targetEnemyNicknameVisibility = false;
                    options.autoAim.showEnemiesActions = false;
                    options.autoAim.enemyExtendedInfo = false;
                    options.laserPointer.enabled = false
                    options.smokeGrenadeAlpha = 1
                    options.particlesTransparency = 1
                    options.ceilingTransparency = 1
                    options.linesToPlayers.enabled = false
                    options.fpsCounter.enabled = false
                    options.airDropTracking.enabled = false
                    options.grenadeTimer.enabled = false
                },
                unbind: function () {
                    options.zoomRadiusManager.enabled = true;
                    options.autoAim.targetEnemyNicknameVisibility = true;
                    options.autoAim.showEnemiesActions = true;
                    options.autoAim.enemyExtendedInfo = true;
                    options.laserPointer.enabled = true
                    options.smokeGrenadeAlpha = 0.1
                    options.particlesTransparency = 0.5
                    options.ceilingTransparency = 0.5
                    options.linesToPlayers.enabled = true
                    options.fpsCounter.enabled = true
                    options.airDropTracking.enabled = true
                    options.grenadeTimer.enabled = true
                },
                isBinded: function () {
                    return isBinded
                }
            }
        }
    }, {}]
}, {}, [6]);
