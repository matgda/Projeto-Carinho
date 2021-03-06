/*!
 * bulma-toast 2.0.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */
(function(a, b) { "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : (a = a || self, b(a.bulmaToast = {})) })(this, function(a) {
    'use strict';

    function b(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

    function c(a, b) { for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c) }

    function d(a, b, d) { return b && c(a.prototype, b), d && c(a, d), a }

    function e(a, b, c) { return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a }

    function f(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(a);
            b && (d = d.filter(function(b) { return Object.getOwnPropertyDescriptor(a, b).enumerable })), c.push.apply(c, d)
        }
        return c
    }

    function g(a) { for (var b, c = 1; c < arguments.length; c++) b = null == arguments[c] ? {} : arguments[c], c % 2 ? f(Object(b), !0).forEach(function(c) { e(a, c, b[c]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : f(Object(b)).forEach(function(c) { Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c)) }); return a }

    function h(a) { if (m.position) return m.position; var b = n.createElement("div"); return b.setAttribute("style", "width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;" + l[a]), n.body.appendChild(b), m.position = b, b }

    function i(a) {
        var b = g({}, k, {}, a),
            c = new o(b),
            d = h(b.position || k.position);
        if (b.single)
            for (var e = d.lastElementChild; e;) d.removeChild(e), e = d.lastElementChild;
        d.appendChild(c.element)
    }

    function j(a) {
        for (var b in m) m[b].remove();
        m = {}, n = a
    }
    var k = { message: "Your message here", duration: 2e3, position: "top-right", closeOnClick: !0, opacity: 1, single: !1 },
        l = { "top-left": "left:0;top:0;text-align:left;align-items:flex-start;", "top-right": "right:0;top:0;text-align:right;align-items:flex-end;", "top-center": "top:0;left:0;right:0;text-align:center;align-items:center;", "bottom-left": "left:0;bottom:0;text-align:left;align-items:flex-start;", "bottom-right": "right:0;bottom:0;text-align:right;align-items:flex-end;", "bottom-center": "bottom:0;left:0;right:0;text-align:center;align-items:center;", center: "top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;" },
        m = {},
        n = document,
        o = /*#__PURE__*/ function() {
            function a(c) {
                var d = this;
                b(this, a), this.element = n.createElement("div"), this.opacity = c.opacity, this.type = c.type, this.animate = c.animate, this.dismissible = c.dismissible, this.closeOnClick = c.closeOnClick, this.message = c.message, this.duration = c.duration, this.pauseOnHover = c.pauseOnHover;
                var e = "width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity, ";"),
                    f = ["notification"];
                if (this.type && f.push(this.type), this.animate && this.animate["in"]) {
                    var g = "animate__".concat(this.animate["in"]),
                        h = this.animate.speed ? "animate__".concat(this.animate.speed) : "animate__faster";
                    f.push("animate__animated ".concat(g, " ").concat(h)), this.onAnimationEnd(function() { return d.element.classList.remove(g) })
                }
                if (this.element.className = f.join(" "), this.dismissible) {
                    var i = n.createElement("button");
                    i.className = "delete", i.addEventListener("click", function() { d.destroy() }), this.element.insertAdjacentElement("afterbegin", i)
                } else e += "padding: 1.25rem 1.5rem";
                this.closeOnClick && this.element.addEventListener("click", function() { d.destroy() }), this.element.setAttribute("style", e), "string" == typeof this.message ? this.element.insertAdjacentHTML("beforeend", this.message) : this.element.appendChild(this.message);
                var j = new p(function() { d.destroy() }, this.duration);
                this.pauseOnHover && (this.element.addEventListener("mouseover", function() { j.pause() }), this.element.addEventListener("mouseout", function() { j.resume() }))
            }
            return d(a, [{
                key: "destroy",
                value: function() {
                    var a = this;
                    this.animate && this.animate.out ? (this.element.classList.add("animate__".concat(this.animate.out)), this.onAnimationEnd(function() { a.removeParent(a.element), delete m.position })) : (this.removeParent(this.element), delete m.position)
                }
            }, { key: "removeParent", value: function(a) { a.parentNode && a.parentNode.remove() } }, {
                key: "onAnimationEnd",
                value: function() {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function() {},
                        b = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };
                    for (var c in b)
                        if (void 0 !== this.element.style[c]) { this.element.addEventListener(b[c], function() { return a() }); break }
                }
            }]), a
        }(),
        p = /*#__PURE__*/ function() {
            function a(c, d) { b(this, a), this.timer, this.start, this.remaining = d, this.callback = c, this.resume() }
            return d(a, [{ key: "pause", value: function() { window.clearTimeout(this.timer), this.remaining -= new Date - this.start } }, { key: "resume", value: function() { this.start = new Date, window.clearTimeout(this.timer), this.timer = window.setTimeout(this.callback, this.remaining) } }]), a
        }();
    a.setDoc = j, a.toast = i, Object.defineProperty(a, "__esModule", { value: !0 })
});