(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    106: function (e, t, n) {
        e.exports = n(1273)
    }, 111: function (e, t, n) {
    }, 1272: function (e, t, n) {
    }, 1273: function (e, t, n) {
        'use strict';
        n.r(t);
        var r = n(0), a = n.n(r), c = n(25), o = n.n(c), i = (n(111), n(112), n(113), n(13)), l = n(29), u = n(1),
            s = n(3), d = n(9), f = n(93), p = n(15), m = n(18), v = n(8), b = n(5);

        function h(e, t, n) {
            var r = e[t];
            return r || (r = e[t] = new n), r
        }

        function O(e, t) {
            t.forEach(e.add, e)
        }

        var y = n(67);

        function g(e) {
            return Object(v.flatMap)(Object(v.castArray)(e.match), 'type')
        }

        function k(e, t) {
            for (var n = t + 1, r = Object(v.flatten)(e), a = [], c = r[n]; c && (a.push.apply(a, Object(m.a)(g(c))), Array.isArray(c) || 0 === c.min);) c = r[++n];
            return a
        }

        function j(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return ''.concat(e).concat(t)
        }

        function E(e) {
            var t = e.match(/(\D+)(\d+)/), n = Object(p.a)(t, 3), r = n[1], a = n[2];
            return { occurrence: parseInt(a), type: r }
        }

        var B = '__START';

        function w(e, t, n) {
            var r = e[j(t, n)];
            if (!r && n > 0) {
                var a = Object.keys(e).filter(function (e) {
                    return e !== B
                }).map(E).filter(function (e) {
                    var n = e.type;
                    return t === n
                }).map(function (e) {
                    return e.occurrence
                }), c = Math.max.apply(Math, Object(m.a)(a));
                return e[j(t, c)]
            }
            return r
        }

        var x = Object(y.a)(function (e) {
            return t = function (e) {
                var t = Object(v.get)(e, 'document.nodes'), n = Object.keys(e.blocks || {}), r = !Array.isArray(t),
                    a = r && 0 === n.length, c = Array.isArray(t) && 0 === t.length;
                if (a || c) return null;
                var o = Object(d.a)({}, B, null);
                if (r) {
                    var i = n.map(function (e) {
                        return ''.concat(e, '0')
                    });
                    o[B] = new Set(i);
                    var l = !0, u = !1, s = void 0;
                    try {
                        for (var f, m = i[Symbol.iterator](); !(l = (f = m.next()).done); l = !0) {
                            var b = f.value;
                            o[b] = new Set(i)
                        }
                    } catch (D) {
                        u = !0, s = D
                    } finally {
                        try {
                            l || null == m.return || m.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                    return o
                }
                var y = k(t, -1).map(Object(v.unary)(j));
                O(h(o, B, Set), y);
                for (var E = 0, w = Object.entries(t); E < w.length; E++) {
                    var x = w[E], S = Object(p.a)(x, 2), I = S[0], T = S[1], R = !0, N = !1, M = void 0;
                    try {
                        for (var A, _ = function () {
                            var e = A.value, n = parseInt(I), r = void 0 === e.max ? 1 / 0 : e.max,
                                a = void 0 === e.min ? 1 : e.min;
                            if (r < a) throw new Error('Max < min in \''.concat(JSON.stringify(e), '\''));
                            var c, i = g(e), l = 0, u = function (e) {
                                return j(e, l)
                            }, s = function (e) {
                                return j(e, l + 1)
                            }, d = k(t, n).map(Object(v.unary)(j));
                            if (a < 1) {
                                var f = !0, p = !1, m = void 0;
                                try {
                                    for (var b, y = i[Symbol.iterator](); !(f = (b = y.next()).done); f = !0) {
                                        var E = j(b.value), B = h(o, E, Set);
                                        O(B, d), r === 1 / 0 && O(B, i.map(j))
                                    }
                                } catch (D) {
                                    p = !0, m = D
                                } finally {
                                    try {
                                        f || null == y.return || y.return()
                                    } finally {
                                        if (p) throw m
                                    }
                                }
                            } else for (; l < a;) {
                                var w = !0, x = !1, S = void 0;
                                try {
                                    for (var T, R = i[Symbol.iterator](); !(w = (T = R.next()).done); w = !0) {
                                        var N = j(T.value, l), M = h(o, N, Set);
                                        l === a - 1 ? (O(M, i.map(u)), O(M, d)) : O(M, i.map(s))
                                    }
                                } catch (D) {
                                    x = !0, S = D
                                } finally {
                                    try {
                                        w || null == R.return || R.return()
                                    } finally {
                                        if (x) throw S
                                    }
                                }
                                l++
                            }
                            if (r !== 1 / 0) for (l = a < 1 ? 0 : a - 1; l < r;) {
                                var _ = !0, C = !1, P = void 0;
                                try {
                                    for (var L, V = i[Symbol.iterator](); !(_ = (L = V.next()).done); _ = !0) {
                                        var z = j(L.value, l), W = h(o, z, Set);
                                        if (O(W, d), l !== r - 1) O(W, i.map(s)); else {
                                            var X = i.map(u);
                                            c = W, X.forEach(c.delete, c)
                                        }
                                    }
                                } catch (D) {
                                    C = !0, P = D
                                } finally {
                                    try {
                                        _ || null == V.return || V.return()
                                    } finally {
                                        if (C) throw P
                                    }
                                }
                                l++
                            }
                        }, C = Object(v.castArray)(T)[Symbol.iterator](); !(R = (A = C.next()).done); R = !0) _()
                    } catch (D) {
                        N = !0, M = D
                    } finally {
                        try {
                            R || null == C.return || C.return()
                        } finally {
                            if (N) throw M
                        }
                    }
                }
                return o
            }(e), Object(v.mapValues)(t, function (e) {
                return Object(m.a)(e).map(E)
            });
            var t
        });
        var S, I = Object(y.a)(function (e, t, n) {
                for (var r = x(e), a = 0, c = t.nodes.get(a), o = {
                    occurrence: 0,
                    type: c && c.type
                }, i = r[B] || []; i.length && c && a < n;) i = w(r, o.type, o.occurrence), a++, o.occurrence++, (c = t.nodes.get(a)) && o.type !== c.type && (o = {
                    occurrence: 0,
                    type: c.type
                });
                return i.map(function (e) {
                    return e.type
                })
            }), T = {
                headline: 'headline',
                title: 'title',
                subtitle: 'subtitle',
                body: 'body',
                unorderedlist: 'unordered-list',
                orderedlist: 'ordered-list',
                listitem: 'list-item',
                preformatted: 'preformatted',
                image: 'image'
            }, R = 'link', N = { bold: 'bold', italic: 'italic', underlined: 'underlined' },
            M = Object.values(N).map(function (e) {
                return { type: e }
            }), A = ['left', 'center', 'right'], _ = function (e) {
                return !e || A.includes(e)
            };
        var C = {
            blocks: (S = {}, Object(d.a)(S, T.headline, {
                helper: 'Title',
                marks: []
            }), Object(d.a)(S, T.title, { marks: [] }), Object(d.a)(S, T.subtitle, { marks: [] }), Object(d.a)(S, T.body, {
                data: { align: _ },
                helper: 'What would you like to share?',
                marks: M
            }), Object(d.a)(S, T.unorderedlist, { nodes: [{ match: { type: T.listitem } }] }), Object(d.a)(S, T.orderedlist, { nodes: [{ match: { type: T.listitem } }] }), Object(d.a)(S, T.listitem, { marks: M }), Object(d.a)(S, T.preformatted, { marks: [] }), Object(d.a)(S, T.image, {
                isVoid: !0,
                data: {
                    src: function (e) {
                        return 'string' === typeof e
                    }, align: _
                }
            }), S),
            document: {
                nodes: [{
                    match: { type: T.headline },
                    min: 1,
                    max: 1
                }, {
                    match: [{ type: T.body }, { type: T.title }, { type: T.subtitle }, { type: T.preformatted }, { type: T.unorderedlist }, { type: T.orderedlist }, { type: T.image }],
                    min: 1
                }], normalize: function (e, t) {
                    var n = Object(f.a)({}, t), r = n.code, a = n.node, c = n.child, o = n.index;
                    if ('document' !== a.object) return e;
                    var i = I(e.props.schema, a, o)[0];
                    switch (r) {
                        case'child_max_invalid':
                            if (a.nodes.get(o + 1).text) {
                                var l = s.a.create({ type: i, nodes: [s.m.create({ text: c.text })] });
                                return e.insertNodeByKey(a.key, o, l)
                            }
                            return e.moveFocusToStartOfNextText().insertText(c.text);
                        case'child_min_invalid':
                            var u = s.a.create({ type: i });
                            return e.insertNodeByKey(a.key, o, u);
                        default:
                            return
                    }
                }
            },
            inlines: Object(d.a)({}, R, {
                data: {
                    href: function (e) {
                        return 'string' === typeof e
                    }
                }, nodes: [{ match: { object: 'text' } }]
            })
        }, D = {
            object: 'value',
            document: {
                object: 'document',
                nodes: [{ object: 'block', type: T.headline, nodes: [{ object: 'text', text: '' }] }, {
                    object: 'block',
                    type: T.body,
                    nodes: [{ object: 'text', text: '' }]
                }]
            }
        };
        n(47);
        T.headline, T.title, T.subtitle, T.body, T.body, T.body, T.preformatted, T.body;
        var P = Object(v.curry)(function (e, t) {
                var n = t.type;
                return Object(v.get)(e, ['schema', 'blocks', n])
            }), L = ''.concat('WREX', '/CHANGE_VALUE'), V = ''.concat('WREX', '/UPDATE_ACTIVE_BLOCK'),
            z = ''.concat('WREX', '/UPDATE_SELECTION_RECT'), W = ''.concat('WREX', '/SET_BLOCK_MENU_OPEN'),
            X = ''.concat('WREX', '/SET_BLOCK_TYPE_DROPDOWN_OPEN'), J = null, U = function (e, t) {
                var n = t.document.nodes, r = n.get(n.size - 1), a = r && P(e, r);
                return a && a.isVoid ? t.setIn(['document', 'nodes'], n.push(s.a.create({ type: T.body }))) : t
            }, K = function (e) {
                var t = e.value, n = e.operations;
                return function (e, r) {
                    var a = r(), c = function (e) {
                        if (!e.selection.isBlurred) return e.startBlock
                    }(t), o = t.document.nodes.indexOf(c);
                    e({ type: L, activeBlockIndex: o, value: U(a, t), operations: n }), H(e)
                }
            }, F = function () {
                return function (e, t) {
                    var n = t(), r = function () {
                        var e = window.getSelection();
                        if (e.rangeCount > 0) return e.getRangeAt(0).getBoundingClientRect()
                    }();
                    if (a = r, c = n.textSelectionRect, !(a === c || a && c && a.x === c.x && a.y === c.y && a.height === c.height && a.width === c.width)) {
                        var a, c, o = n.schema, i = n.value, l = function (e) {
                            var t = e.value, n = t.fragment, r = t.selection, a = t.document;
                            if (!r.isBlurred && !r.isCollapsed && n.text) {
                                var c = a.getLeafBlocksAtRange(r),
                                    o = v.intersection.apply(void 0, Object(m.a)(c.map(P(e)).map(function (e) {
                                        return e && e.marks || M
                                    }).map(function (e) {
                                        return e.map(function (e) {
                                            return e.type
                                        })
                                    }).toJS()));
                                if (!Object(v.isEmpty)(o)) return o
                            }
                        }({ value: i, schema: o }), u = l && i.activeMarks.toJS();
                        e({ type: z, textSelectionRect: r, activeMarksAtSelection: u, possibleMarksAtSelection: l })
                    }
                }
            }, H = Object(v.debounce)(function (e) {
                return e(F())
            }, 5);
        var Y, G, $, q = function (e) {
                return function (t, n) {
                    n().activeBlockIndex !== e && t({ type: V, activeBlockIndex: e })
                }
            }, Q = function (e) {
                return function (t) {
                    t({ type: W, isOpen: e })
                }
            }, Z = function (e) {
                return function (t) {
                    t({ type: X, isOpen: e })
                }
            }, ee = function (e) {
                return function (t, n) {
                    var r = n(), a = r.value, c = r.activeBlockIndex;
                    if (c) {
                        var o = a.document.nodes.get(c).set('type', e).set('data', s.c.create());
                        t(K({ value: a.setIn(['document', 'nodes', c], o) }))
                    }
                }
            }, te = function (e, t) {
                return function (n, r) {
                    var a = r().value;
                    if (void 0 !== e) {
                        var c = a.document.nodes,
                            o = s.a.create({ data: s.c.create({ src: t }), isVoid: !0, type: T.image }), i = c.get(e),
                            l = i.text || i.isVoid ? c.insert(e + 1, o) : c.set(e, o);
                        n(K({ value: a.setIn(['document', 'nodes'], l) }))
                    }
                }
            }, ne = Object(u.Record)({
                value: s.n.fromJSON(JSON.parse(localStorage.getItem('value')) || D),
                schema: C,
                activeBlockIndex: void 0,
                textSelectionRect: void 0,
                possibleMarksAtSelection: void 0,
                activeMarksAtSelection: void 0,
                isBlockMenuOpen: !1,
                isBlockTypeDropdownOpen: !1
            })(), re = n(94), ae = n(36), ce = n(31), oe = n.n(ce), ie = n(45), le = n(98),
            ue = ['gif', 'jpg', 'jpeg', 'png'], se = ue.map(function (e) {
                return 'image/'.concat(e)
            }), de = function (e) {
                return new Promise(function (t, n) {
                    var r = new FileReader;
                    r.onload = function (e) {
                        t(e.target.result)
                    }, r.onerror = n, r.readAsDataURL(e)
                })
            }, fe = n(12),
            pe = (Y = {}, Object(d.a)(Y, N.bold, fe.e), Object(d.a)(Y, N.italic, fe.f), Object(d.a)(Y, N.underlined, fe.j), Y),
            me = function (e) {
                var t = e.markType, n = e.isActive, r = e.onToggleMark;
                return a.a.createElement(b.IconButton, {
                    icon: pe[t] || fe.e,
                    color: b.ColorPalette.light,
                    emphasis: n ? b.ButtonEmphasis.high : b.ButtonEmphasis.low,
                    onMouseDown: function (e) {
                        e.preventDefault(), r(t)
                    }
                })
            }, ve = {
                deleteLink: function () {
                    return function () {
                        J.unwrapInline(R)
                    }
                }, insertLink: function (e) {
                    return function () {
                        J.wrapInline({ type: R, data: { href: e } }), J.moveToEnd()
                    }
                }, onToggleMark: function (e) {
                    return function () {
                        J.toggleMark(e)
                    }
                }
            }, be = Object(i.b)(function (e) {
                var t = e.value.inlines.some(function (e) {
                    return e.type === R
                }), n = t ? Object(v.without)(e.possibleMarksAtSelection, N.underlined) : e.possibleMarksAtSelection;
                return { activeMarks: e.activeMarksAtSelection, hasLinks: t, targetRect: e.textSelectionRect, marks: n }
            }, ve)(function (e) {
                var t = e.targetRect, n = e.activeMarks, c = e.marks, o = e.onToggleMark, i = e.hasLinks, l = e.insertLink,
                    u = e.deleteLink, s = Object(r.useRef)(null), d = function (e, t) {
                        var n = Object(r.useState)({ current: null }), a = Object(p.a)(n, 2), c = a[0], o = a[1];
                        Object(r.useEffect)(function () {
                            o({
                                current: {
                                    getBoundingClientRect: function () {
                                        return t
                                    }
                                }
                            })
                        }, [t]);
                        for (var i = arguments.length, l = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) l[u - 2] = arguments[u];
                        return b.Popover.useComputePosition.apply(b.Popover, [e, c].concat(l))
                    }(b.Placement.BOTTOM, t, s, !0, { vertical: 8 }), f = d.computedPosition, m = d.isVisible;
                return a.a.createElement(b.Popover, {
                    isVisible: m,
                    className: 'editor-hovering-menu',
                    popoverRect: f,
                    popoverRef: s
                }, c.map(function (e) {
                    return a.a.createElement(me, {
                        key: e, markType: e, isActive: (t = e, Boolean(n.find(function (e) {
                            return e.type === t
                        }))), onToggleMark: o
                    });
                    var t
                }), a.a.createElement('div', { className: 'editor-menu__vertical-divider' }), a.a.createElement(b.IconButton, {
                    icon: fe.l,
                    color: b.ColorPalette.light,
                    emphasis: i ? b.ButtonEmphasis.high : b.ButtonEmphasis.low,
                    onMouseDown: function (e) {
                        if (e.preventDefault(), i) u(); else {
                            var t = prompt('Enter the URL of the link:');
                            t && l(t)
                        }
                    }
                }))
            }), he = n(6), Oe = n(17), ye = n.n(Oe), ge = a.a.forwardRef(function (e, t) {
                switch (e.node.type) {
                    case T.headline:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('h1', Object.assign({
                                className: ye()(n, 'lumx-typography-headline'),
                                ref: t
                            }, c), r)
                        }(e, t);
                    case T.title:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('h2', Object.assign({
                                className: ye()(n, 'lumx-typography-title'),
                                ref: t
                            }, c), r)
                        }(e, t);
                    case T.subtitle:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('h3', Object.assign({
                                className: ye()(n, 'lumx-typography-subtitle2'),
                                ref: t
                            }, c), r)
                        }(e, t);
                    case T.body:
                        return function (e, t) {
                            var n = e.className, r = e.node, c = e.children,
                                o = Object(he.a)(e, ['className', 'node', 'children']), i = r.data && r.data.get('align');
                            return a.a.createElement('p', Object.assign({
                                align: i,
                                className: ye()(n, 'lumx-typography-body1'),
                                ref: t
                            }, o), c)
                        }(e, t);
                    case T.preformatted:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('pre', Object.assign({ className: n, ref: t }, c), r)
                        }(e, t);
                    case T.unorderedlist:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('ul', Object.assign({ className: n, ref: t }, c), r)
                        }(e, t);
                    case T.orderedlist:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('ol', Object.assign({ className: n, ref: t }, c), r)
                        }(e, t);
                    case T.listitem:
                        return function (e, t) {
                            var n = e.className, r = (e.node, e.children),
                                c = Object(he.a)(e, ['className', 'node', 'children']);
                            return a.a.createElement('li', Object.assign({ className: n, ref: t }, c), r)
                        }(e, t);
                    case T.image:
                        return function (e, t) {
                            var n = e.className, c = e.deleteBlock, o = e.node,
                                i = (e.children, Object(he.a)(e, ['className', 'deleteBlock', 'node', 'children'])),
                                l = Object(r.useState)(!1), u = Object(p.a)(l, 2), s = u[0], d = u[1],
                                f = o.data && o.data.get('align');
                            return a.a.createElement('div', Object.assign({
                                align: f || 'center',
                                contentEditable: !1,
                                onKeyDown: function (e) {
                                    !c || 'Delete' !== e.key && 'Backspace' !== e.key || c()
                                },
                                onFocus: function () {
                                    return d(!0)
                                },
                                onBlur: function () {
                                    return d(!1)
                                }
                            }, i), a.a.createElement('div', {
                                className: ye()('editor__image-wrapper', s && 'editor__image-wrapper--has-focus'),
                                tabIndex: '0'
                            }, a.a.createElement('img', {
                                alt: '',
                                className: n,
                                draggable: !1,
                                ref: t,
                                src: o.data && o.data.get('src')
                            })))
                        }(e, t);
                    default:
                        return null
                }
            }), ke = n(104), je = n.n(ke),
            Ee = (G = {}, Object(d.a)(G, T.body, 'Body text'), Object(d.a)(G, T.headline, 'Headline'), Object(d.a)(G, T.title, 'Title'), Object(d.a)(G, T.subtitle, 'Subtitle'), Object(d.a)(G, T.preformatted, 'Preformatted'), G),
            Be = { setBlockTypeDropdownOpen: Z, changeBlockType: ee }, we = Object(i.b)(function (e) {
                return { isBlockTypeDropdownOpen: e.isBlockTypeDropdownOpen }
            }, Be)(function (e) {
                var t = e.buttonRef, n = e.dropdownBlockTypes, r = e.blockType, c = e.changeBlockType,
                    o = e.isBlockTypeDropdownOpen, i = e.setBlockTypeDropdownOpen;
                return a.a.createElement(b.Dropdown, {
                    className: 'editor-menu',
                    anchorRef: t,
                    showDropdown: !Object(v.isEmpty)(n) && o,
                    onClose: function () {
                        return o && i(!1)
                    }
                }, a.a.createElement(b.List, null, n.map(function (e) {
                    return a.a.createElement(b.ListItem, {
                        key: e,
                        isSelected: e === r,
                        isClickable: !0,
                        onClick: function () {
                            return c(e)
                        }
                    }, a.a.createElement(ge, { node: { type: e } }, Ee[e]))
                })))
            }), xe = { center: fe.b, left: fe.c, right: fe.d },
            Se = ($ = {}, Object(d.a)($, T.unorderedlist, fe.g), Object(d.a)($, T.orderedlist, fe.h), [T.body, T.headline, T.title, T.subtitle, T.preformatted]),
            Ie = [T.unorderedlist, T.orderedlist], Te = {
                changeBlockAlign: function (e) {
                    return function (t, n) {
                        var r = n(), a = r.value, c = r.activeBlockIndex;
                        c && t(K({ value: a.setIn(['document', 'nodes', c, 'data', 'align'], e) }))
                    }
                }, changeBlockType: ee, setBlockTypeDropdownOpen: Z
            }, Re = Object(i.b)(function (e) {
                var t = e.value, n = e.activeBlockIndex, r = n && t.getIn(['document', 'nodes', n]);
                return {
                    activeBlockIndex: n,
                    blockAlign: r && r.data.get('align') || 'left',
                    blockType: r && r.type,
                    isBlockTypeDropdownOpen: e.isBlockTypeDropdownOpen
                }
            }, Te)(function (e) {
                var t = e.activeBlockIndex, n = e.anchorRef, c = e.changeBlockAlign, o = e.blockAlign,
                    i = e.possibleAlignOptions, l = (e.changeBlockType, e.blockType), u = e.possibleBlockTypes,
                    s = e.setBlockTypeDropdownOpen, d = e.isBlockTypeDropdownOpen, f = Object(r.useRef)(null),
                    p = b.Popover.useComputePosition(b.Placement.BOTTOM_START, n, f, !0, void 0, !0, !1, !1, [t, n]),
                    m = p.computedPosition, h = p.isVisible, O = Object(v.intersection)(Se, u),
                    y = (Object(v.intersection)(Ie, u), Object(r.useRef)(null));
                return a.a.createElement(a.a.Fragment, null, d && a.a.createElement(we, {
                    buttonRef: y,
                    blockType: l,
                    dropdownBlockTypes: O
                }), a.a.createElement(b.Popover, {
                    isVisible: h,
                    className: 'editor-menu',
                    elevation: 0,
                    popoverRef: f,
                    popoverRect: m
                }, a.a.createElement('div', { className: 'editor-hovering-menu editor-menu__content' }, i.map(function (e) {
                    return a.a.createElement(b.IconButton, {
                        key: e,
                        color: b.ColorPalette.light,
                        emphasis: (t = o === e, t ? b.ButtonEmphasis.high : b.ButtonEmphasis.low),
                        icon: xe[e],
                        onClick: function () {
                            return c(e)
                        }
                    });
                    var t
                }), !Object(v.isEmpty)(O) && a.a.createElement(b.Button, {
                    buttonRef: y,
                    color: b.ColorPalette.light,
                    emphasis: b.ButtonEmphasis.low,
                    leftIcon: fe.i,
                    rightIcon: fe.m,
                    onClick: function () {
                        return s(!d)
                    }
                }, '\xa0'))))
            }), Ne = function (e) {
                var t = e.fileInputRef, n = e.onChange, r = Object(he.a)(e, ['fileInputRef', 'onChange']), c = function () {
                    var e = Object(ie.a)(oe.a.mark(function e(t) {
                        var r, a, c;
                        return oe.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(r = t.target).files) {
                                        e.next = 7;
                                        break
                                    }
                                    return o = Object(m.a)(r.files), a = o.filter(function (e) {
                                        return se.includes(e.type)
                                    }), e.next = 5, Promise.all(a.map(de));
                                case 5:
                                    c = e.sent, n(c);
                                case 7:
                                case'end':
                                    return e.stop()
                            }
                            var o
                        }, e)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }();
                return a.a.createElement('input', Object.assign({
                    ref: t,
                    accept: se.join(', '),
                    type: 'file',
                    onChange: c
                }, r))
            }, Me = { setBlockMenuOpen: Q, insertImage: te }, Ae = Object(i.b)(function (e) {
                return { activeBlockIndex: e.activeBlockIndex, isBlockMenuOpen: e.isBlockMenuOpen }
            }, Me)(function (e) {
                var t = e.anchorRef, n = e.isBlockMenuOpen, c = e.setBlockMenuOpen, o = e.activeBlockIndex,
                    i = e.insertImage, l = Object(r.useRef)(null);
                return a.a.createElement(b.Dropdown, {
                    showDropdown: !0, anchorRef: t, onClose: function () {
                        return n && c(!1)
                    }
                }, a.a.createElement(Ne, {
                    fileInputRef: l, style: { display: 'none' }, onChange: function (e) {
                        return e.map(function (e) {
                            return i(o, e)
                        })
                    }
                }), a.a.createElement(b.List, null, a.a.createElement(b.ListItem, {
                    isClickable: !0,
                    isSelected: !1,
                    before: a.a.createElement(b.Icon, { icon: fe.k, size: b.Size.s }),
                    size: b.ListItemSize.tiny,
                    onClick: function () {
                        return l.current && l.current.click()
                    }
                }, 'Image')))
            }), _e = { setBlockMenuOpen: Q }, Ce = Object(i.b)(function (e) {
                var t = e.value, n = e.schema, r = e.activeBlockIndex, a = r && t.getIn(['document', 'nodes', r]),
                    c = a && P(e, a), o = c && !c.isVoid ? I(n, t.document, r) : [];
                return {
                    block: a,
                    possibleAlignOptions: a && Object(v.get)(c, ['data', 'align']) ? A : [],
                    possibleBlockTypes: o,
                    insertMode: Boolean(a && !a.text && c && !c.isVoid),
                    isBlockMenuOpen: e.isBlockMenuOpen
                }
            }, _e)(function (e) {
                var t = e.block, n = e.buttonRef, r = e.possibleAlignOptions, c = e.possibleBlockTypes, o = e.insertMode,
                    i = e.isBlockMenuOpen, l = e.setBlockMenuOpen, u = e.showButton, s = Boolean(r.length),
                    d = c.length > 1 || 1 === c.length && c[0] !== t.type, f = u && (s || d);
                return a.a.createElement(a.a.Fragment, null, f && i && (o ? a.a.createElement(Ae, { anchorRef: n }) : a.a.createElement(Re, {
                    anchorRef: n,
                    possibleAlignOptions: r,
                    possibleBlockTypes: c
                })), a.a.createElement(b.IconButton, {
                    buttonRef: n,
                    emphasis: b.Emphasis.medium,
                    icon: o ? fe.n : fe.a,
                    size: b.Size.m,
                    style: { visibility: f ? 'visible' : 'hidden' },
                    onClick: function (e) {
                        l(!i), e.stopPropagation()
                    }
                }))
            }), De = { setActiveBlockIndex: q }, Pe = Object(i.b)(function (e) {
                return { activeBlockIndex: e.activeBlockIndex, document: e.value.document }
            }, De)(function (e) {
                var t = e.activeBlockIndex, n = e.blockRef, c = e.children, o = e.document, i = e.node,
                    l = e.setActiveBlockIndex,
                    u = Object(he.a)(e, ['activeBlockIndex', 'blockRef', 'children', 'document', 'node', 'setActiveBlockIndex']),
                    s = Object(r.useState)({}), d = Object(p.a)(s, 2), f = d[0], m = d[1], v = Object(r.useRef)(null);
                Object(r.useEffect)(function () {
                    var e = n && n.current && je()(n.current),
                        t = v && v.current && v.current.getBoundingClientRect().height;
                    m({ top: -(t - e) / 2 })
                }, [n, v]);
                var b = o.nodes.indexOf(i), h = t === b;
                return a.a.createElement('div', Object.assign({ className: 'editor-block__wrapper' }, u, {
                    onMouseEnter: function () {
                        return l(b)
                    }
                }), a.a.createElement('div', {
                    contentEditable: !1,
                    className: 'editor-block-wrapper__left-margin',
                    style: f
                }, a.a.createElement(Ce, { buttonRef: v, showButton: h })), c)
            }), Le = a.a.forwardRef(function (e, t) {
                switch (e.node.type) {
                    case R:
                        return function (e, t) {
                            var n = e.node, r = e.children, c = Object(he.a)(e, ['node', 'children']),
                                o = n.data && n.data.get('href');
                            return a.a.createElement('a', Object.assign({
                                ref: t, href: o, onClick: function (e) {
                                    e.ctrlKey && (e.preventDefault(), e.stopPropagation(), window.open(o, '_blank'))
                                }
                            }, c), r)
                        }(e, t);
                    default:
                        return null
                }
            }), Ve = a.a.forwardRef(function (e, t) {
                switch (e.mark.type) {
                    case N.bold:
                        return function (e, t) {
                            var n = e.children, r = Object(he.a)(e, ['children']);
                            return a.a.createElement('strong', Object.assign({ ref: t }, r), n)
                        }(e, t);
                    case N.italic:
                        return function (e, t) {
                            var n = e.children, r = Object(he.a)(e, ['children']);
                            return a.a.createElement('em', Object.assign({ ref: t }, r), n)
                        }(e, t);
                    case N.underlined:
                        return function (e, t) {
                            var n = e.children, r = Object(he.a)(e, ['children']);
                            return a.a.createElement('u', Object.assign({ ref: t }, r), n)
                        }(e, t);
                    default:
                        return null
                }
            }), ze = n(44);
        var We = function (e, t, n) {
                var r = e.children, c = e.attributes, o = e.mark;
                return a.a.createElement(Ve, Object.assign({ mark: o }, c), r) || n()
            }, Xe = function (e, t, n) {
                var r = e.attributes, c = e.children, o = e.node;
                return a.a.createElement(Le, Object.assign({ node: o }, r), c) || n()
            }, Je = function (e) {
                return function (t, n, r) {
                    var c = t.attributes, o = t.children, i = t.node, l = n.value.document.nodes.indexOf(i);
                    'image' === i.type && (c.deleteBlock = function () {
                        return e(l)
                    });
                    var u = a.a.createElement(ge, Object.assign({ node: i }, c), o);
                    return a.a.createElement(Pe, { node: i, blockRef: c.ref }, u || r())
                }
            }, Ue = function (e, t) {
                return function (n, r, a) {
                    return e({ editor: r }), t.current || (t.current = r), a()
                }
            }, Ke = {
                onChange: K, deleteBlock: function (e) {
                    return function (t, n) {
                        var r = n().value;
                        e && t(K({ value: r.removeIn(['document', 'nodes', e]) }))
                    }
                }, setActiveBlockIndex: q, setEditor: function (e) {
                    var t = e.editor;
                    return function () {
                        J = t
                    }
                }, updateSelection: F, insertImage: te
            }, Fe = Object(i.b)(function (e) {
                return {
                    activeBlockIndex: e.activeBlockIndex,
                    value: e.value,
                    schema: e.schema,
                    isTextMenuOpen: e.possibleMarksAtSelection && e.textSelectionRect
                }
            }, Ke)(function (e) {
                var t = e.activeBlockIndex, n = (e.deleteBlock, e.schema), c = e.value, o = e.onChange,
                    i = (e.setActiveBlockIndex, e.setEditor), l = e.updateSelection, u = e.insertImage,
                    s = e.isTextMenuOpen, d = Object(r.useMemo)(function () {
                        return [Object(re.a)(), (e = u, Object(le.a)({
                            extensions: ue, insertImage: function () {
                                var t = Object(ie.a)(oe.a.mark(function t(n, r) {
                                    var a, c;
                                    return oe.a.wrap(function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                return a = n.value.document.nodes.indexOf(n.value.endBlock), t.next = 3, de(r);
                                            case 3:
                                                c = t.sent, e(a, c);
                                            case 5:
                                            case'end':
                                                return t.stop()
                                        }
                                    }, t)
                                }));
                                return function (e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }))].concat(Object(m.a)(function (e) {
                            for (var t = [], n = function () {
                                var e = a[r], n = (c = Object(p.a)(e, 2))[0], o = c[1];
                                if (!o.helper) return 'continue';
                                t.push(Object(ze.a)({
                                    placeholder: o.helper,
                                    style: { verticalAlign: 'unset' },
                                    when: function (e, t) {
                                        return t.type === n && !t.text && !e.value.document.nodes.some(function (e) {
                                            return e !== t && e.type === n
                                        })
                                    }
                                }))
                            }, r = 0, a = Object.entries(e.blocks); r < a.length; r++) {
                                var c;
                                n()
                            }
                            return t
                        }(n)));
                        var e
                    }, [n, u]), f = function () {
                        var e = function () {
                            return { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
                        }, t = Object(r.useState)(e), n = Object(p.a)(t, 2), a = n[0], c = n[1], o = function () {
                            return c(e())
                        };
                        return Object(r.useEffect)(function () {
                            return window.addEventListener('resize', o), function () {
                                window.removeEventListener('resize', o)
                            }
                        }), a
                    }(), v = function () {
                        var e = function () {
                            return { scrollX: window.scrollX, scrollY: window.scrollY }
                        }, t = Object(r.useState)(e), n = Object(p.a)(t, 2), a = n[0], c = n[1], o = function () {
                            return c(e())
                        };
                        return Object(r.useEffect)(function () {
                            return window.addEventListener('scroll', o), function () {
                                window.removeEventListener('scroll', o)
                            }
                        }), a
                    }();
                Object(r.useEffect)(function () {
                    l()
                }, [l, f, v]);
                var b = Object(r.useRef)(null);
                return a.a.createElement(a.a.Fragment, null, a.a.createElement(ae.a, {
                    ref: b,
                    className: 'editor',
                    renderBlock: Je(t),
                    renderEditor: Ue(i, b),
                    renderInline: Xe,
                    renderMark: We,
                    schema: n,
                    value: c,
                    onChange: o,
                    spellCheck: !1,
                    plugins: d
                }), s && a.a.createElement(be, null))
            }), He = n(105),
            Ye = (n(1272), ('object' === typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : l.c)(Object(l.a)(He.a))),
            Ge = Object(l.d)(function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case L:
                        return setTimeout(function () {
                            localStorage.setItem('value', JSON.stringify(t.value))
                        }, 0), e.set('value', t.value).set('activeBlockIndex', t.activeBlockIndex).set('isBlockMenuOpen', !1).set('isBlockTypeDropdownOpen', !1);
                    case V:
                        return e.set('activeBlockIndex', t.activeBlockIndex).set('isBlockMenuOpen', !1).set('isBlockTypeDropdownOpen', !1);
                    case z:
                        return e.set('textSelectionRect', t.textSelectionRect).set('possibleMarksAtSelection', t.possibleMarksAtSelection).set('activeMarksAtSelection', t.activeMarksAtSelection);
                    case W:
                        return e.set('isBlockMenuOpen', t.isOpen);
                    case X:
                        return e.set('isBlockTypeDropdownOpen', t.isOpen);
                    default:
                        return e
                }
            }, Ye);
        Object(i.b)(function (e) {
            return { value: e.value }
        })(function (e) {
            var t = e.value;
            return a.a.createElement('details', { className: 'lumx-theme-color-light-N' }, a.a.createElement('summary', null, 'JSON Model'), a.a.createElement('pre', null, JSON.stringify(t, null, 2)))
        });
        var $e = function () {
            return a.a.createElement(i.a, { store: Ge }, a.a.createElement('section', { className: 'card' }, a.a.createElement('header', null, a.a.createElement(b.UserBlock, {
                name: 'Sergy Sergio',
                fields: ['Product manager'],
                avatar: 'http://i.pravatar.cc/40',
                size: b.Size.m
            })), a.a.createElement(Fe, null), a.a.createElement('footer', null, a.a.createElement(b.Button, { disabled: !0 }, 'Publish'))))
        };
        Boolean('localhost' === window.location.hostname || '[::1]' === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        o.a.render(a.a.createElement($e, null), document.getElementById('root')), 'serviceWorker' in navigator && navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
        })
    }
}, [[106, 1, 2]]]);
//# sourceMappingURL=main.a0f69805.chunk.js.map