(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n(225)},109:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),o=n.n(c),i=(n(109),n(110),n(111),n(13)),l=n(29),u=n(1),s=n(3),d="headline",f="title",p="subtitle",m="body",v="unordered-list",b="ordered-list",O="list-item",h="preformatted",g="image",y="link",k={bold:"bold",italic:"italic",underlined:"underlined"},j={object:"value",document:{object:"document",nodes:[{object:"block",type:d,nodes:[{object:"text",text:""}]},{object:"block",type:m,nodes:[{object:"text",text:""}]}]}},E=n(9),B=n(91),w=n(15),x=n(18),S=n(8),I=n(5);function T(e,t,n){var r=e[t];return r||(r=e[t]=new n),r}function R(e,t){t.forEach(e.add,e)}var N=n(66);function M(e){return Object(S.flatMap)(Object(S.castArray)(e.match),"type")}function A(e,t){for(var n=t+1,r=Object(S.flatten)(e),a=[],c=r[n];c&&(a.push.apply(a,Object(x.a)(M(c))),Array.isArray(c)||0===c.min);)c=r[++n];return a}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat(e).concat(t)}function C(e){var t=e.match(/(\D+)(\d+)/),n=Object(w.a)(t,3),r=n[1],a=n[2];return{occurrence:parseInt(a),type:r}}var D="__START";function P(e,t,n){var r=e[_(t,n)];if(!r&&n>0){var a=Object.keys(e).filter(function(e){return e!==D}).map(C).filter(function(e){var n=e.type;return t===n}).map(function(e){return e.occurrence}),c=Math.max.apply(Math,Object(x.a)(a));return e[_(t,c)]}return r}var L=Object(N.a)(function(e){return t=function(e){var t=Object(S.get)(e,"document.nodes"),n=Object.keys(e.blocks||{}),r=!Array.isArray(t),a=r&&0===n.length,c=Array.isArray(t)&&0===t.length;if(a||c)return null;var o=Object(E.a)({},D,null);if(r){var i=n.map(function(e){return"".concat(e,"0")});o[D]=new Set(i);var l=!0,u=!1,s=void 0;try{for(var d,f=i[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var p=d.value;o[p]=new Set(i)}}catch(C){u=!0,s=C}finally{try{l||null==f.return||f.return()}finally{if(u)throw s}}return o}var m=A(t,-1).map(Object(S.unary)(_));R(T(o,D,Set),m);for(var v=0,b=Object.entries(t);v<b.length;v++){var O=b[v],h=Object(w.a)(O,2),g=h[0],y=h[1],k=!0,j=!1,B=void 0;try{for(var x,I=function(){var e=x.value,n=parseInt(g),r=void 0===e.max?1/0:e.max,a=void 0===e.min?1:e.min;if(r<a)throw new Error("Max < min in '".concat(JSON.stringify(e),"'"));var c,i=M(e),l=0,u=function(e){return _(e,l)},s=function(e){return _(e,l+1)},d=A(t,n).map(Object(S.unary)(_));if(a<1){var f=!0,p=!1,m=void 0;try{for(var v,b=i[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var O=_(v.value),h=T(o,O,Set);R(h,d),r===1/0&&R(h,i.map(_))}}catch(C){p=!0,m=C}finally{try{f||null==b.return||b.return()}finally{if(p)throw m}}}else for(;l<a;){var y=!0,k=!1,j=void 0;try{for(var E,B=i[Symbol.iterator]();!(y=(E=B.next()).done);y=!0){var w=_(E.value,l),I=T(o,w,Set);l===a-1?(R(I,i.map(u)),R(I,d)):R(I,i.map(s))}}catch(C){k=!0,j=C}finally{try{y||null==B.return||B.return()}finally{if(k)throw j}}l++}if(r!==1/0)for(l=a<1?0:a-1;l<r;){var N=!0,D=!1,P=void 0;try{for(var L,V=i[Symbol.iterator]();!(N=(L=V.next()).done);N=!0){var z=_(L.value,l),W=T(o,z,Set);if(R(W,d),l!==r-1)R(W,i.map(s));else{var X=i.map(u);c=W,X.forEach(c.delete,c)}}}catch(C){D=!0,P=C}finally{try{N||null==V.return||V.return()}finally{if(D)throw P}}l++}},N=Object(S.castArray)(y)[Symbol.iterator]();!(k=(x=N.next()).done);k=!0)I()}catch(C){j=!0,B=C}finally{try{k||null==N.return||N.return()}finally{if(j)throw B}}}return o}(e),Object(S.mapValues)(t,function(e){return Object(x.a)(e).map(C)});var t});var V,z=Object(N.a)(function(e,t,n){for(var r=L(e),a=0,c=t.nodes.get(a),o={occurrence:0,type:c&&c.type},i=r[D]||[];i.length&&c&&a<n;)i=P(r,o.type,o.occurrence),a++,o.occurrence++,(c=t.nodes.get(a))&&o.type!==c.type&&(o={occurrence:0,type:c.type});return i.map(function(e){return e.type})}),W=Object.values(k).map(function(e){return{type:e}}),X=["left","center","right"],J=function(e){return!e||X.includes(e)};var U={blocks:(V={},Object(E.a)(V,d,{helper:"Title",marks:[]}),Object(E.a)(V,f,{marks:[]}),Object(E.a)(V,p,{marks:[]}),Object(E.a)(V,m,{data:{align:J},helper:"What would you like to share?",marks:W}),Object(E.a)(V,v,{nodes:[{match:{type:O}}]}),Object(E.a)(V,b,{nodes:[{match:{type:O}}]}),Object(E.a)(V,O,{marks:W}),Object(E.a)(V,h,{marks:[]}),Object(E.a)(V,g,{isVoid:!0,data:{src:function(e){return"string"===typeof e},align:J}}),V),document:{nodes:[{match:{type:d},min:1,max:1},{match:[{type:m},{type:f},{type:p},{type:h},{type:v},{type:b},{type:g}],min:1}],normalize:function(e,t){var n=Object(B.a)({},t),r=n.code,a=n.node,c=n.child,o=n.index;if("document"!==a.object)return e;var i=z(e.props.schema,a,o)[0];switch(r){case"child_max_invalid":if(a.nodes.get(o+1).text){var l=s.a.create({type:i,nodes:[s.m.create({text:c.text})]});return e.insertNodeByKey(a.key,o,l)}return e.moveFocusToStartOfNextText().insertText(c.text);case"child_min_invalid":var u=s.a.create({type:i});return e.insertNodeByKey(a.key,o,u);default:return}}},inlines:Object(E.a)({},y,{data:{href:function(e){return"string"===typeof e}},nodes:[{match:{object:"text"}}]})};var K=Object(S.curry)(function(e,t){var n=t.type;return Object(S.get)(e,["schema","blocks",n])}),F="".concat("WREX","/CHANGE_VALUE"),H="".concat("WREX","/UPDATE_ACTIVE_BLOCK"),Y="".concat("WREX","/UPDATE_SELECTION_RECT"),G="".concat("WREX","/SET_BLOCK_MENU_OPEN"),$="".concat("WREX","/SET_BLOCK_TYPE_DROPDOWN_OPEN"),q=null,Q=function(e,t){var n=t.document.nodes,r=n.get(n.size-1),a=r&&K(e,r);return a&&a.isVoid?t.setIn(["document","nodes"],n.push(s.a.create({type:m}))):t},Z=function(e){var t=e.value,n=e.operations;return function(e,r){var a=r(),c=function(e){if(!e.selection.isBlurred)return e.startBlock}(t),o=t.document.nodes.indexOf(c);e({type:F,activeBlockIndex:o,value:Q(a,t),operations:n}),te(e)}},ee=function(){return function(e,t){var n=t(),r=function(){var e=window.getSelection();if(e.rangeCount>0)return e.getRangeAt(0).getBoundingClientRect()}();if(a=r,c=n.textSelectionRect,!(a===c||a&&c&&a.x===c.x&&a.y===c.y&&a.height===c.height&&a.width===c.width)){var a,c,o=n.schema,i=n.value,l=function(e){var t=e.value,n=t.fragment,r=t.selection,a=t.document;if(!r.isBlurred&&!r.isCollapsed&&n.text){var c=a.getLeafBlocksAtRange(r),o=S.intersection.apply(void 0,Object(x.a)(c.map(K(e)).map(function(e){return e&&e.marks||W}).map(function(e){return e.map(function(e){return e.type})}).toJS()));if(!Object(S.isEmpty)(o))return o}}({value:i,schema:o}),u=l&&i.activeMarks.toJS();e({type:Y,textSelectionRect:r,activeMarksAtSelection:u,possibleMarksAtSelection:l})}}},te=Object(S.debounce)(function(e){return e(ee())},5);var ne,re,ae,ce=function(e){return function(t,n){n().activeBlockIndex!==e&&t({type:H,activeBlockIndex:e})}},oe=function(e){return function(t){t({type:G,isOpen:e})}},ie=function(e){return function(t){t({type:$,isOpen:e})}},le=function(e){return function(t,n){var r=n(),a=r.value,c=r.activeBlockIndex;if(c){var o=a.document.nodes.get(c).set("type",e).set("data",s.c.create());t(Z({value:a.setIn(["document","nodes",c],o)}))}}},ue=function(e,t){return function(n,r){var a=r().value;if(void 0!==e){var c=a.document.nodes,o=s.a.create({data:s.c.create({src:t}),isVoid:!0,type:g}),i=c.get(e),l=i.text||i.isVoid?c.insert(e+1,o):c.set(e,o);n(Z({value:a.setIn(["document","nodes"],l)}))}}},se=Object(u.Record)({value:s.n.fromJSON(JSON.parse(localStorage.getItem("value"))||j),schema:U,activeBlockIndex:void 0,textSelectionRect:void 0,possibleMarksAtSelection:void 0,activeMarksAtSelection:void 0,isBlockMenuOpen:!1,isBlockTypeDropdownOpen:!1})(),de=n(92),fe=n(36),pe=n(31),me=n.n(pe),ve=n(45),be=n(96),Oe=["gif","jpg","jpeg","png"],he=Oe.map(function(e){return"image/".concat(e)}),ge=function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=n,r.readAsDataURL(e)})},ye=n(12),ke=(ne={},Object(E.a)(ne,k.bold,ye.e),Object(E.a)(ne,k.italic,ye.f),Object(E.a)(ne,k.underlined,ye.j),ne),je=function(e){var t=e.markType,n=e.isActive,r=e.onToggleMark;return a.a.createElement(I.IconButton,{icon:ke[t]||ye.e,color:I.ColorPalette.light,emphasis:n?I.ButtonEmphasis.high:I.ButtonEmphasis.low,onMouseDown:function(e){e.preventDefault(),r(t)}})},Ee={deleteLink:function(){return function(){q.unwrapInline(y)}},insertLink:function(e){return function(){q.wrapInline({type:y,data:{href:e}}),q.moveToEnd()}},onToggleMark:function(e){return function(){q.toggleMark(e)}}},Be=Object(i.b)(function(e){var t=e.value.inlines.some(function(e){return e.type===y}),n=t?Object(S.without)(e.possibleMarksAtSelection,k.underlined):e.possibleMarksAtSelection;return{activeMarks:e.activeMarksAtSelection,hasLinks:t,targetRect:e.textSelectionRect,marks:n}},Ee)(function(e){var t=e.targetRect,n=e.activeMarks,c=e.marks,o=e.onToggleMark,i=e.hasLinks,l=e.insertLink,u=e.deleteLink,s=Object(r.useRef)(null),d=function(e,t){var n=Object(r.useState)({current:null}),a=Object(w.a)(n,2),c=a[0],o=a[1];Object(r.useEffect)(function(){o({current:{getBoundingClientRect:function(){return t}}})},[t]);for(var i=arguments.length,l=new Array(i>2?i-2:0),u=2;u<i;u++)l[u-2]=arguments[u];return I.Popover.useComputePosition.apply(I.Popover,[e,c].concat(l))}(I.Placement.BOTTOM,t,s,!0,{vertical:8}),f=d.computedPosition,p=d.isVisible;return a.a.createElement(I.Popover,{isVisible:p,className:"editor-hovering-menu",popoverRect:f,popoverRef:s},c.map(function(e){return a.a.createElement(je,{key:e,markType:e,isActive:(t=e,Boolean(n.find(function(e){return e.type===t}))),onToggleMark:o});var t}),a.a.createElement("div",{className:"editor-menu__vertical-divider"}),a.a.createElement(I.IconButton,{icon:ye.l,color:I.ColorPalette.light,emphasis:i?I.ButtonEmphasis.high:I.ButtonEmphasis.low,onMouseDown:function(e){if(e.preventDefault(),i)u();else{var t=prompt("Enter the URL of the link:");t&&l(t)}}}))}),we=n(6),xe=n(17),Se=n.n(xe),Ie=a.a.forwardRef(function(e,t){switch(e.node.type){case d:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("h1",Object.assign({className:Se()(n,"lumx-typography-headline"),ref:t},c),r)}(e,t);case f:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("h2",Object.assign({className:Se()(n,"lumx-typography-title"),ref:t},c),r)}(e,t);case p:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("h3",Object.assign({className:Se()(n,"lumx-typography-subtitle2"),ref:t},c),r)}(e,t);case m:return function(e,t){var n=e.className,r=e.node,c=e.children,o=Object(we.a)(e,["className","node","children"]),i=r.data&&r.data.get("align");return a.a.createElement("p",Object.assign({align:i,className:Se()(n,"lumx-typography-body1"),ref:t},o),c)}(e,t);case h:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("pre",Object.assign({className:n,ref:t},c),r)}(e,t);case v:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("ul",Object.assign({className:n,ref:t},c),r)}(e,t);case b:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("ol",Object.assign({className:n,ref:t},c),r)}(e,t);case O:return function(e,t){var n=e.className,r=(e.node,e.children),c=Object(we.a)(e,["className","node","children"]);return a.a.createElement("li",Object.assign({className:n,ref:t},c),r)}(e,t);case g:return function(e,t){var n=e.className,c=e.deleteBlock,o=e.node,i=(e.children,Object(we.a)(e,["className","deleteBlock","node","children"])),l=Object(r.useState)(!1),u=Object(w.a)(l,2),s=u[0],d=u[1],f=o.data&&o.data.get("align")||"center",p=o.data&&o.data.get("caption"),m=o.data&&o.data.get("src");return a.a.createElement("figure",Object.assign({className:Se()(n,"editor-figure","editor-figure--align-".concat(f)),contentEditable:!1,tabIndex:"0",onKeyDown:function(e){s&&c&&("Delete"===e.key||"Backspace"===e.key)&&c(),e.preventDefault(),e.stopPropagation()},onFocus:function(){return d(!0)},onBlur:function(){return d(!1)}},i),a.a.createElement("img",{alt:p,className:Se()("editor-figure__image",s&&"editor-figure__image--has-focus"),draggable:!1,ref:t,src:m,tabIndex:"0"}),p&&a.a.createElement("figcaption",null,p))}(e,t);default:return null}}),Te=n(102),Re=n.n(Te),Ne=(re={},Object(E.a)(re,m,"Body text"),Object(E.a)(re,d,"Headline"),Object(E.a)(re,f,"Title"),Object(E.a)(re,p,"Subtitle"),Object(E.a)(re,h,"Preformatted"),re),Me={setBlockTypeDropdownOpen:ie,changeBlockType:le},Ae=Object(i.b)(function(e){return{isBlockTypeDropdownOpen:e.isBlockTypeDropdownOpen}},Me)(function(e){var t=e.buttonRef,n=e.dropdownBlockTypes,r=e.blockType,c=e.changeBlockType,o=e.isBlockTypeDropdownOpen,i=e.setBlockTypeDropdownOpen;return a.a.createElement(I.Dropdown,{className:"editor-menu",anchorRef:t,showDropdown:!Object(S.isEmpty)(n)&&o,onClose:function(){return o&&i(!1)}},a.a.createElement(I.List,null,n.map(function(e){return a.a.createElement(I.ListItem,{key:e,isSelected:e===r,isClickable:!0,onClick:function(){return c(e)}},a.a.createElement(Ie,{node:{type:e}},Ne[e]))})))}),_e={center:ye.b,left:ye.c,right:ye.d},Ce=(ae={},Object(E.a)(ae,v,ye.g),Object(E.a)(ae,b,ye.h),[m,d,f,p,h]),De=[v,b],Pe={changeBlockAlign:function(e){return function(t,n){var r=n(),a=r.value,c=r.activeBlockIndex;c&&t(Z({value:a.setIn(["document","nodes",c,"data","align"],e)}))}},changeBlockType:le,setBlockTypeDropdownOpen:ie},Le=Object(i.b)(function(e){var t=e.value,n=e.activeBlockIndex,r=n&&t.getIn(["document","nodes",n]);return{activeBlockIndex:n,blockAlign:r&&r.data.get("align")||"left",blockType:r&&r.type,isBlockTypeDropdownOpen:e.isBlockTypeDropdownOpen}},Pe)(function(e){var t=e.activeBlockIndex,n=e.anchorRef,c=e.changeBlockAlign,o=e.blockAlign,i=e.possibleAlignOptions,l=(e.changeBlockType,e.blockType),u=e.possibleBlockTypes,s=e.setBlockTypeDropdownOpen,d=e.isBlockTypeDropdownOpen,f=Object(r.useRef)(null),p=I.Popover.useComputePosition(I.Placement.BOTTOM_START,n,f,!0,void 0,!0,!1,!1,[t,n]),m=p.computedPosition,v=p.isVisible,b=Object(S.intersection)(Ce,u),O=(Object(S.intersection)(De,u),Object(r.useRef)(null));return a.a.createElement(a.a.Fragment,null,d&&a.a.createElement(Ae,{buttonRef:O,blockType:l,dropdownBlockTypes:b}),a.a.createElement(I.Popover,{isVisible:v,className:"editor-menu",elevation:0,popoverRef:f,popoverRect:m},a.a.createElement("div",{className:"editor-hovering-menu editor-menu__content"},i.map(function(e){return a.a.createElement(I.IconButton,{key:e,color:I.ColorPalette.light,emphasis:(t=o===e,t?I.ButtonEmphasis.high:I.ButtonEmphasis.low),icon:_e[e],onClick:function(){return c(e)}});var t}),!Object(S.isEmpty)(b)&&a.a.createElement(I.Button,{buttonRef:O,color:I.ColorPalette.light,emphasis:I.ButtonEmphasis.low,leftIcon:ye.i,rightIcon:ye.m,onClick:function(){return s(!d)}},"\xa0"))))}),Ve=function(e){var t=e.fileInputRef,n=e.onChange,r=Object(we.a)(e,["fileInputRef","onChange"]),c=function(){var e=Object(ve.a)(me.a.mark(function e(t){var r,a,c;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.target).files){e.next=7;break}return o=Object(x.a)(r.files),a=o.filter(function(e){return he.includes(e.type)}),e.next=5,Promise.all(a.map(ge));case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}var o},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("input",Object.assign({ref:t,accept:he.join(", "),type:"file",onChange:c},r))},ze={setBlockMenuOpen:oe,insertImage:ue},We=Object(i.b)(function(e){return{activeBlockIndex:e.activeBlockIndex,isBlockMenuOpen:e.isBlockMenuOpen}},ze)(function(e){var t=e.anchorRef,n=e.isBlockMenuOpen,c=e.setBlockMenuOpen,o=e.activeBlockIndex,i=e.insertImage,l=Object(r.useRef)(null);return a.a.createElement(I.Dropdown,{showDropdown:!0,anchorRef:t,onClose:function(){return n&&c(!1)}},a.a.createElement(Ve,{fileInputRef:l,style:{display:"none"},onChange:function(e){return e.map(function(e){return i(o,e)})}}),a.a.createElement(I.List,null,a.a.createElement(I.ListItem,{isClickable:!0,isSelected:!1,before:a.a.createElement(I.Icon,{icon:ye.k,size:I.Size.s}),size:I.ListItemSize.tiny,onClick:function(){return l.current&&l.current.click()}},"Image")))}),Xe={setBlockMenuOpen:oe},Je=Object(i.b)(function(e){var t=e.value,n=e.schema,r=e.activeBlockIndex,a=r&&t.getIn(["document","nodes",r]),c=a&&K(e,a),o=c&&!c.isVoid?z(n,t.document,r):[];return{block:a,possibleAlignOptions:a&&Object(S.get)(c,["data","align"])?X:[],possibleBlockTypes:o,insertMode:Boolean(a&&!a.text&&c&&!c.isVoid),isBlockMenuOpen:e.isBlockMenuOpen}},Xe)(function(e){var t=e.block,n=e.buttonRef,r=e.possibleAlignOptions,c=e.possibleBlockTypes,o=e.insertMode,i=e.isBlockMenuOpen,l=e.setBlockMenuOpen,u=e.showButton,s=Boolean(r.length),d=c.length>1||1===c.length&&c[0]!==t.type,f=u&&(s||d);return a.a.createElement(a.a.Fragment,null,f&&i&&(o?a.a.createElement(We,{anchorRef:n}):a.a.createElement(Le,{anchorRef:n,possibleAlignOptions:r,possibleBlockTypes:c})),a.a.createElement(I.IconButton,{buttonRef:n,emphasis:I.Emphasis.medium,icon:o?ye.n:ye.a,size:I.Size.m,style:{visibility:f?"visible":"hidden"},onClick:function(e){l(!i),e.stopPropagation()}}))}),Ue={setActiveBlockIndex:ce},Ke=Object(i.b)(function(e){return{activeBlockIndex:e.activeBlockIndex,document:e.value.document}},Ue)(function(e){var t=e.activeBlockIndex,n=e.blockRef,c=e.children,o=e.document,i=e.node,l=e.setActiveBlockIndex,u=Object(we.a)(e,["activeBlockIndex","blockRef","children","document","node","setActiveBlockIndex"]),s=Object(r.useState)({}),d=Object(w.a)(s,2),f=d[0],p=d[1],m=Object(r.useRef)(null);Object(r.useEffect)(function(){var e=n&&n.current&&Re()(n.current),t=m&&m.current&&m.current.getBoundingClientRect().height;p({top:-(t-e)/2})},[n,m]);var v=o.nodes.indexOf(i),b=t===v;return a.a.createElement("div",Object.assign({},u,{className:"editor-block-wrapper",onMouseEnter:function(){return l(v)}}),a.a.createElement("div",{contentEditable:!1,className:"editor-block-wrapper__left-margin",style:f},a.a.createElement(Je,{buttonRef:m,showButton:b})),c)}),Fe=a.a.forwardRef(function(e,t){switch(e.node.type){case y:return function(e,t){var n=e.node,r=e.children,c=Object(we.a)(e,["node","children"]),o=n.data&&n.data.get("href");return a.a.createElement("a",Object.assign({ref:t,href:o,onClick:function(e){e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),window.open(o,"_blank"))}},c),r)}(e,t);default:return null}}),He=a.a.forwardRef(function(e,t){switch(e.mark.type){case k.bold:return function(e,t){var n=e.children,r=Object(we.a)(e,["children"]);return a.a.createElement("strong",Object.assign({ref:t},r),n)}(e,t);case k.italic:return function(e,t){var n=e.children,r=Object(we.a)(e,["children"]);return a.a.createElement("em",Object.assign({ref:t},r),n)}(e,t);case k.underlined:return function(e,t){var n=e.children,r=Object(we.a)(e,["children"]);return a.a.createElement("u",Object.assign({ref:t},r),n)}(e,t);default:return null}}),Ye=n(44);var Ge=function(e,t,n){var r=e.children,c=e.attributes,o=e.mark;return a.a.createElement(He,Object.assign({mark:o},c),r)||n()},$e=function(e,t,n){var r=e.attributes,c=e.children,o=e.node;return a.a.createElement(Fe,Object.assign({node:o},r),c)||n()},qe=function(e){return function(t,n,r){var c=t.attributes,o=t.children,i=t.node,l=n.value.document.nodes.indexOf(i);"image"===i.type&&(c.deleteBlock=function(){return e(l)});var u=a.a.createElement(Ie,Object.assign({node:i},c),o);return a.a.createElement(Ke,{node:i,blockRef:c.ref},u||r())}},Qe=function(e,t){return function(n,r,a){return e({editor:r}),t.current||(t.current=r),a()}},Ze={onChange:Z,deleteBlock:function(e){return function(t,n){var r=n().value;e&&t(Z({value:r.removeIn(["document","nodes",e])}))}},setActiveBlockIndex:ce,setEditor:function(e){var t=e.editor;return function(){q=t}},updateSelection:ee,insertImage:ue},et=Object(i.b)(function(e){return{activeBlockIndex:e.activeBlockIndex,value:e.value,schema:e.schema,isTextMenuOpen:e.possibleMarksAtSelection&&e.textSelectionRect}},Ze)(function(e){var t=e.deleteBlock,n=e.schema,c=e.value,o=e.onChange,i=e.setEditor,l=e.updateSelection,u=e.insertImage,s=e.isTextMenuOpen,d=Object(r.useMemo)(function(){return[Object(de.a)(),(e=u,Object(be.a)({extensions:Oe,insertImage:function(){var t=Object(ve.a)(me.a.mark(function t(n,r){var a,c;return me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.value.document.nodes.indexOf(n.value.endBlock),t.next=3,ge(r);case 3:c=t.sent,e(a,c);case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}))].concat(Object(x.a)(function(e){for(var t=[],n=function(){var e=a[r],n=(c=Object(w.a)(e,2))[0],o=c[1];if(!o.helper)return"continue";t.push(Object(Ye.a)({placeholder:o.helper,style:{verticalAlign:"unset"},when:function(e,t){return t.type===n&&!t.text&&!e.value.document.nodes.some(function(e){return e!==t&&e.type===n})}}))},r=0,a=Object.entries(e.blocks);r<a.length;r++){var c;n()}return t}(n)));var e},[n,u]),f=function(){var e=function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight}},t=Object(r.useState)(e),n=Object(w.a)(t,2),a=n[0],c=n[1],o=function(){return c(e())};return Object(r.useEffect)(function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),a}(),p=function(){var e=function(){return{scrollX:window.scrollX,scrollY:window.scrollY}},t=Object(r.useState)(e),n=Object(w.a)(t,2),a=n[0],c=n[1],o=function(){return c(e())};return Object(r.useEffect)(function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),a}();Object(r.useEffect)(function(){l()},[l,f,p]);var m=Object(r.useRef)(null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(fe.a,{ref:m,className:"editor",renderBlock:qe(t),renderEditor:Qe(i,m),renderInline:$e,renderMark:Ge,schema:n,value:c,onChange:o,spellCheck:!1,plugins:d}),s&&a.a.createElement(Be,null))}),tt=n(103),nt=(n(224),("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:l.c)(Object(l.a)(tt.a))),rt=Object(l.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return setTimeout(function(){localStorage.setItem("value",JSON.stringify(t.value))},0),e.set("value",t.value).set("activeBlockIndex",t.activeBlockIndex).set("isBlockMenuOpen",!1).set("isBlockTypeDropdownOpen",!1);case H:return e.set("activeBlockIndex",t.activeBlockIndex).set("isBlockMenuOpen",!1).set("isBlockTypeDropdownOpen",!1);case Y:return e.set("textSelectionRect",t.textSelectionRect).set("possibleMarksAtSelection",t.possibleMarksAtSelection).set("activeMarksAtSelection",t.activeMarksAtSelection);case G:return e.set("isBlockMenuOpen",t.isOpen);case $:return e.set("isBlockTypeDropdownOpen",t.isOpen);default:return e}},nt);Object(i.b)(function(e){return{value:e.value}})(function(e){var t=e.value;return a.a.createElement("details",{className:"lumx-theme-color-light-N"},a.a.createElement("summary",null,"JSON Model"),a.a.createElement("pre",null,JSON.stringify(t,null,2)))});var at=function(){return a.a.createElement(i.a,{store:rt},a.a.createElement("section",{className:"card"},a.a.createElement("header",null,a.a.createElement(I.UserBlock,{name:"Sergy Sergio",fields:["Product manager"],avatar:"http://i.pravatar.cc/40",size:I.Size.m})),a.a.createElement(et,null),a.a.createElement("footer",null,a.a.createElement(I.Button,{disabled:!0},"Publish"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,1,2]]]);
//# sourceMappingURL=main.a2d89226.chunk.js.map