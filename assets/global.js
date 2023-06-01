var T4SThemeSP        = {},
isStorageSpSession    = false,
isStorageSpSessionAll = false,
isStorageSpdLocal     = false,
isStorageSpdLocalAll  = false,
T4Sconfigs            = window.T4Sconfigs,
IsDesignMode          = window.T4Srequest.design_mode,
isThemeRTL            = ("rtl" == document.documentElement.getAttribute("dir"));
T4stt_var             = { 
	  "HoverInterval":35,
	  "HoverTimeout":150,
	  "dragThreshold":10,
	  "prevOnHref":false
	};

/*! jQuery v3.6.0 */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
//var jQuery_T4NT = $.noConflict(true); 
var jQuery_T4NT = jQuery; 

/* JavaScript Client Detection * (C) viazenetti GmbH (Christian Ludwig) 
https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
http://jsfiddle.net/ChristianL/AVyND/ */
(function (window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Internet';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Internet';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            //osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }
        switch (os) {
            case 'Mac OS X':
                // osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                // osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                // osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                // osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
        
        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else  {
                flashVersion = unknown;
            }
        }
    }

    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        flashVersion: flashVersion
    };
}(this));
//document.getElementsByTagName('body')[0].className+=' browser-'+ jscd.browser + " platform-" + jscd.os;
jQuery_T4NT("html").addClass("t4s-browser-" + jscd.browser + " t4s-platform-" + jscd.os);

/*! isotope_libs */
var jsBdThe4=document.getElementsByTagName("HTML")[0],RtlThe4=jsBdThe4.classList.contains("rtl_true"),LtrThe4=!RtlThe4;!function(t,e){"function"==typeof define&&define.amd?define("jQuery_T4NT-bridget/jQuery_T4NT-bridget",["jQuery_T4NT"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jQuery_T4NT")):t.jQuery_T4NTBridget=e(t,t.jQuery_T4NT)}(window,function(t,e){"use strict";function i(i,o,a){(a=a||e||t.jQuery_T4NT)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){return"string"==typeof t?function(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,h){var l=a.data(h,i);if(l){var u=l[e];if(u&&"_"!=e.charAt(0)){var c=u.apply(l,n);s=void 0===s?c:s}else r(o+" is not a valid method")}else r(i+" not initialized. Cannot call methods, i.e. "+o)}),void 0!==s?s:t}(this,t,s.call(arguments,1)):(function(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}(this,t),this)},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r=void 0===o?function(){}:function(t){o.error(t)};return n(e||t.jQuery_T4NT),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(t){var e=getComputedStyle(t);return e||o("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function i(){if(!h){h=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var o=document.body||document.documentElement;o.appendChild(i);var r=e(i);s=200==Math.round(t(r.width)),n.isBoxSizeOuter=s,o.removeChild(i)}}function n(n){if(i(),"string"==typeof n&&(n=document.querySelector(n)),n&&"object"==typeof n&&n.nodeType){var o=e(n);if("none"==o.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<a;e++)t[r[e]]=0;return t}();var h={};h.width=n.offsetWidth,h.height=n.offsetHeight;for(var l=h.isBorderBox="border-box"==o.boxSizing,u=0;u<a;u++){var c=r[u],d=o[c],f=parseFloat(d);h[c]=isNaN(f)?0:f}var p=h.paddingLeft+h.paddingRight,m=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,y=h.marginTop+h.marginBottom,v=h.borderLeftWidth+h.borderRightWidth,_=h.borderTopWidth+h.borderBottomWidth,x=l&&s,b=t(o.width);!1!==b&&(h.width=b+(x?0:p+v));var S=t(o.height);return!1!==S&&(h.height=S+(x?0:m+_)),h.innerWidth=h.width-(p+v),h.innerHeight=h.height-(m+_),h.outerWidth=h.width+g,h.outerHeight=h.height+y,h}}var s,o="undefined"==typeof console?function(){}:function(t){console.error(t)},r=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=r.length,h=!1;return n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+o),l=i.makeArray(a).concat(i.makeArray(h)),u=r+"-options",c=t.jQuery_T4NT;l.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(u);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);c&&c.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var n=document.documentElement.style,s="string"==typeof n.transition?"transition":"WebkitTransition",o="string"==typeof n.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],a={transform:o,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},h=i.prototype=Object.create(t.prototype);h.constructor=i,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=LtrThe4,i=this.layout._getOption("originTop"),n=t[e?"left":"right"],s=t[i?"top":"bottom"],o=parseFloat(n),r=parseFloat(s),a=this.layout.size;-1!=n.indexOf("%")&&(o=o/100*a.width),-1!=s.indexOf("%")&&(r=r/100*a.height),o=isNaN(o)?0:o,r=isNaN(r)?0:r,o-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},h.layoutPosition=function(){var t=this.layout.size,e={},i=LtrThe4,n=this.layout._getOption("originTop"),s=i?"paddingLeft":"paddingRight",o=i?"left":"right",r=i?"right":"left",a=this.position.x+t[s];e[o]=this.getXValue(a),e[r]="";var h=n?"paddingTop":"paddingBottom",l=n?"top":"bottom",u=n?"bottom":"top",c=this.position.y+t[h];e[l]=this.getYValue(c),e[u]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,s=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!s||this.isTransitioning){var o=t-i,r=e-n,a={};a.transform=this.getTranslate(o,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},h.getTranslate=function(t,e){return"translate3d("+(t=LtrThe4?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},h._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var l="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(o);h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var u={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=u[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(c)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,s,o){return e(t,i,n,s,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,s){"use strict";function o(t,e){var i=n.getQueryElement(t);if(i){this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var s=++u;this.element.outlayerGUID=s,c[s]=this,this._create(),this._getOption("initLayout")&&this.layout()}else a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t))}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery_T4NT,l=function(){},u=0,c={};o.namespace="outlayer",o.Item=s,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=o.prototype;n.extend(d,e.prototype),d.option=function(t){n.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0;s<e.length;s++){var o=new i(e[s],this);n.push(o)}return n},d._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=i(this.element)},d._getMeasurement=function(t,e){var n,s=this.options[t];s?("string"==typeof s?n=this.element.querySelector(s):s instanceof HTMLElement&&(n=s),this[t]=n?i(n)[e]:s):this[t]=0},d.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(f[n]||1):0}(t),this.stagger)},d._positionItem=function(t,e,i,n,s){n?t.goTo(e,i):(t.stagger(s*this.stagger),t.moveTo(e,i))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},d._getContainerSize=l,d._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},d._emitCompleteOnItems=function(t,e){function i(){s.dispatchEvent(t+"Complete",null,[e])}function n(){++r==o&&i()}var s=this,o=e.length;if(e&&o){var r=0;e.forEach(function(e){e.once(t,n)})}else i()},d.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var s=h.Event(e);s.type=t,this.$element.trigger(s,i)}else this.$element.trigger(t,i)},d.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},d.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},d.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},d.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},d._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),n.makeArray(t)},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=l,d._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,s=i(t);return{left:e.left-n.left-s.marginLeft,top:e.top-n.top-s.marginTop,right:n.right-e.right-s.marginRight,bottom:n.bottom-e.bottom-s.marginBottom}},d.handleEvent=n.handleEvent,d.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},n.debounceMethod(o,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},d.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},d.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},d.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},d.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},d.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},d.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},d.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},o.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&c[e]},o.create=function(t,e){var i=r(o);return i.defaults=n.extend({},o.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},o.compatOptions),i.namespace=t,i.data=o.data,i.Item=r(s),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var f={ms:1,s:1e3};return o.Item=s,o}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.isotopet4s=t.isotopet4s||{},t.isotopet4s.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var s=i.destroy;return i.destroy=function(){s.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.isotopet4s=t.isotopet4s||{},t.isotopet4s.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotopet4s=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotopet4s,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotopet4s.element);return this.isotopet4s.size&&e&&e.innerHeight!=this.isotopet4s.size.innerHeight},n._getMeasurement=function(){this.isotopet4s._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var s=this.getFirstItemSize();this[i]=s&&s[n]||this.isotopet4s.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotopet4s.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotopet4s.layout.apply(this.isotopet4s,arguments)},n.getSize=function(){this.isotopet4s.getSize(),this.size=this.isotopet4s.size},i.modes={},i.create=function(t,e){function s(){i.apply(this,arguments)}return s.prototype=Object.create(n),s.prototype.constructor=s,e&&(s.options=e),s.prototype.namespace=t,i.modes[t]=s,s},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,s=this.containerWidth+this.gutter,o=s/n,r=n-s%n;o=Math[r&&r<1?"round":"floor"](o),this.cols=Math.max(o,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),s={x:this.columnWidth*n.col,y:n.y},o=n.y+t.size.outerHeight,r=i+n.col,a=n.col;a<r;a++)this.colYs[a]=o;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),s=this._getOption("originLeft")?n.left:n.right,o=s+i.outerWidth,r=Math.floor(s/this.columnWidth);r=Math.max(0,r);var a=Math.floor(o/this.columnWidth);a-=o%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,l=r;l<=a;l++)this.colYs[l]=Math.max(h,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.isotopet4s.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,s={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var o in e.prototype)s[o]||(n[o]=e.prototype[o]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotopet4s.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotopet4s,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.isotopet4s.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotopet4s.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.isotopet4s.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotopet4s.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotopet4s-layout/js/item","isotopet4s-layout/js/layout-mode","isotopet4s-layout/js/layout-modes/masonry","isotopet4s-layout/js/layout-modes/fit-rows","isotopet4s-layout/js/layout-modes/vertical"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotopet4s-layout/js/item"),require("isotopet4s-layout/js/layout-mode"),require("isotopet4s-layout/js/layout-modes/masonry"),require("isotopet4s-layout/js/layout-modes/fit-rows"),require("isotopet4s-layout/js/layout-modes/vertical")):t.isotopet4s=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.isotopet4s.Item,t.isotopet4s.LayoutMode)}(window,function(t,e,i,n,s,o,r){var a=t.jQuery_T4NT,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},l=e.create("isotopet4s",{layoutMode:"masonry",isjQuery_T4NTFiltering:!0,sortAscending:!0});l.Item=o,l.LayoutMode=r;var u=l.prototype;u._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},u.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},u._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},u._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},u.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},u._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},u.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},u._init=u.arrange,u._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},u._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},u._bindArrangeComplete=function(){function t(){e&&i&&n&&s.dispatchEvent("arrangeComplete",null,[s.filteredItems])}var e,i,n,s=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},u._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],s=[],o=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var h=o(a);h&&i.push(a),h&&a.isHidden?n.push(a):h||a.isHidden||s.push(a)}}return{matches:i,needReveal:n,needHide:s}},u._getFilterTest=function(t){return a&&this.options.isjQuery_T4NTFiltering?function(e){return a(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},u.updateSortData=function(t){var e;t?(t=s.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},u._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=c(i)}},u._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var c=function(){return function(t){if("string"!=typeof t)return t;var e=h(t).split(" "),i=e[0],n=i.match(/^\[(.+)\]$/),s=function(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}(n&&n[1],i),o=l.sortDataParsers[e[1]];return o?function(t){return t&&o(s(t))}:function(t){return t&&s(t)}}}();l.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},u._sort=function(){if(this.options.sortBy){var t=s.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=function(t,e){return function(i,n){for(var s=0;s<t.length;s++){var o=t[s],r=i.sortData[o],a=n.sortData[o];if(r>a||r<a)return(r>a?1:-1)*((void 0!==e[o]?e[o]:e)?1:-1)}return 0}}(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},u._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},u._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},u._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},u._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},u._manageStamp=function(t){this._mode()._manageStamp(t)},u._getContainerSize=function(){return this._mode()._getContainerSize()},u.needsResizeLayout=function(){return this._mode().needsResizeLayout()},u.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},u.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},u._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},u.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,s=e.length;for(i=0;i<s;i++)n=e[i],this.element.appendChild(n.element);var o=this._filter(e).matches;for(i=0;i<s;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<s;i++)delete e[i].isLayoutInstant;this.reveal(o)}};var d=u.remove;return u.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);d.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var o=e[n];s.removeFrom(this.filteredItems,o)}},u.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},u._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},u.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},l}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/rect",e):"object"==typeof module&&module.exports?module.exports=e():(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window,function(){function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}t.defaults={x:0,y:0,width:0,height:0};var e=t.prototype;return e.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,s=t.y+t.height;return this.x<n&&e>t.x&&this.y<s&&i>t.y},e.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,n=[],s=this.x+this.width,o=this.y+this.height,r=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),n.push(i)),s>r&&(i=new t({x:r,y:this.y,width:s-r,height:this.height}),n.push(i)),o>a&&(i=new t({x:this.x,y:a,width:this.width,height:o-a}),n.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),n.push(i)),n},e.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t}),function(t,e){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],e);else if("object"==typeof module&&module.exports)module.exports=e(require("./rect"));else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window,function(t){function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=n[this.sortDirection]||n.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var n=this.spaces[i],s=n.getMaximalFreeRects(t);s?e.push.apply(e,s):e.push(n)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var n=0,s=t[e+n];s;){if(s==i)n++;else{if(s.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(s)?t.splice(e+n,1):n++}s=t[e+n]}i=t[++e]}return t};var n={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("./rect")):t.Packery.Item=e(t.Outlayer,t.Packery.Rect)}(window,function(t,e){var i="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",n=function(){t.Item.apply(this,arguments)},s=n.prototype=Object.create(t.Item.prototype),o=s._create;s._create=function(){o.call(this),this.rect=new e};var r=s.moveTo;return s.moveTo=function(t,e){var i=Math.abs(this.position.x-t),n=Math.abs(this.position.y-e);return this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>i&&1>n?void this.goTo(t,e):void r.apply(this,arguments)},s.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&i&&(this.element.style[i]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},s.disablePlacing=function(){this.isPlacing=!1},s.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},s.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||((t=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},s.positionDropPlaceholder=function(){this.dropPlaceholder.style[i]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},s.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},n}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=e(t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(t,e,i,n,s){function o(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function r(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var a=e.create("packery");a.Item=s;var h=a.prototype;h._create=function(){e.prototype._create.call(this),this.packer=new n,this.shiftPacker=new n,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(e,i){i&&t.itemDragStart(e.currentTarget)},drag:function(e,i){i&&t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e,i){i&&t.itemDragEnd(e.currentTarget)}}},h._resetLayout=function(){var t,e,i;this.getSize(),this._getMeasurements(),this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,i="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,i="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},h._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},h._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var e=this._getPackMethod();this.packer[e](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},h.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},h._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},h._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},h._setRectSize=function(e,i){var n=t(e),s=n.outerWidth,o=n.outerHeight;(s||o)&&(s=this._applyGridGutter(s,this.columnWidth),o=this._applyGridGutter(o,this.rowHeight)),i.width=Math.min(s,this.packer.width),i.height=Math.min(o,this.packer.height)},h._applyGridGutter=function(t,e){if(!e)return t+this.gutter;var i=t%(e+=this.gutter);return Math[i&&1>i?"round":"ceil"](t/e)*e},h._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},h._manageStamp=function(t){var e,n=this.getItem(t);if(n&&n.isPlacing)e=n.rect;else{var s=this._getElementOffset(t);e=new i({x:this._getOption("originLeft")?s.left:s.right,y:this._getOption("originTop")?s.top:s.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},h.sortItemsByPosition=function(){var t=this._getOption("horizontal")?r:o;this.items.sort(t)},h.fit=function(t,e,i){var n=this.getItem(t);n&&(this.stamp(n.element),n.enablePlacing(),this.updateShiftTargets(n),e=void 0===e?n.rect.x:e,i=void 0===i?n.rect.y:i,this.shift(n,e,i),this._bindFitEvents(n),n.moveTo(n.rect.x,n.rect.y),this.shiftLayout(),this.unstamp(n.element),this.sortItemsByPosition(),n.disablePlacing())},h._bindFitEvents=function(t){function e(){2==++n&&i.dispatchEvent("fitComplete",null,[t])}var i=this,n=0;t.once("layout",e),this.once("layoutComplete",e)},h.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},h.needsResizeLayout=function(){var e=t(this.element),i=this._getOption("horizontal")?"innerHeight":"innerWidth";return e[i]!=this.size[i]},h.resizeShiftPercentLayout=function(){var e=this._getItemsForLayout(this.items),i=this._getOption("horizontal"),n=i?"y":"x",s=i?"height":"width",o=i?"rowHeight":"columnWidth",r=i?"innerHeight":"innerWidth",a=this[o];if(a=a&&a+this.gutter){this._getMeasurements();var h=this[o]+this.gutter;e.forEach(function(t){var e=Math.round(t.rect[n]/a);t.rect[n]=e*h})}else{var l=t(this.element)[r]+this.gutter,u=this.packer[s];e.forEach(function(t){t.rect[n]=t.rect[n]/u*l})}this.shiftLayout()},h.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var e=this.getItem(t);e&&(e.enablePlacing(),e.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(e))}},h.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var e=this._getOption("originLeft"),n=this._getOption("originTop");this.stamps.forEach(function(t){var s=this.getItem(t);if(!s||!s.isPlacing){var o=this._getElementOffset(t),r=new i({x:e?o.left:o.right,y:n?o.top:o.bottom});this._setRectSize(t,r),this.shiftPacker.placed(r)}},this);var s=this._getOption("horizontal"),o=s?"rowHeight":"columnWidth",r=s?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var a,h=this[o];if(h=h&&h+this.gutter){var l=Math.ceil(t.rect[r]/h),u=Math.floor((this.shiftPacker[r]+this.gutter)/h);a=(u-l)*h;for(var c=0;u>c;c++)this._addShiftTarget(c*h,0,a)}else a=this.shiftPacker[r]+this.gutter-t.rect[r],this._addShiftTarget(0,0,a);var d=this._getItemsForLayout(this.items),f=this._getPackMethod();d.forEach(function(t){var e=t.rect;this._setRectSize(t.element,e),this.shiftPacker[f](e),this._addShiftTarget(e.x,e.y,a);var i=s?e.x+e.width:e.x,n=s?e.y:e.y+e.height;if(this._addShiftTarget(i,n,a),h)for(var o=Math.round(e[r]/h),l=1;o>l;l++){var u=s?i:e.x+h*l,c=s?e.y+h*l:n;this._addShiftTarget(u,c,a)}},this)},h._addShiftTarget=function(t,e,i){var n=this._getOption("horizontal")?e:t;if(!(0!==n&&n>i)){var s=t+","+e;-1!=this.shiftTargetKeys.indexOf(s)||(this.shiftTargetKeys.push(s),this.shiftTargets.push({x:t,y:e}))}},h.shift=function(t,e,i){var n,s=1/0,o={x:e,y:i};this.shiftTargets.forEach(function(t){var e=function(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}(t,o);s>e&&(n=t,s=e)}),t.rect.x=n.x,t.rect.y=n.y};h.itemDragMove=function(t,e,i){function n(){o.shift(s,e,i),s.positionDropPlaceholder(),o.layout()}var s=this.isEnabled&&this.getItem(t);if(s){e-=this.size.paddingLeft,i-=this.size.paddingTop;var o=this,r=new Date;this._itemDragTime&&r-this._itemDragTime<120?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(n,120)):(n(),this._itemDragTime=r)}},h.itemDragEnd=function(t){function e(){2==++n&&(i.element.classList.remove("is-positioning-post-drag"),i.hideDropPlaceholder(),s.dispatchEvent("dragItemPositioned",null,[i]))}var i=this.isEnabled&&this.getItem(t);if(i){clearTimeout(this.dragTimeout),i.element.classList.add("is-positioning-post-drag");var n=0,s=this;i.once("layout",e),this.once("layoutComplete",e),i.moveTo(i.rect.x,i.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),i.disablePlacing(),this.unstamp(i.element)}},h.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},h.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},h._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},h.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},h.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},h._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)};var l=h.destroy;return h.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},a.Rect=i,a.Packer=n,a}),function(t,e){"function"==typeof define&&define.amd?define(["isotopet4s-layout/js/layout-mode","packery/js/packery"],e):"object"==typeof module&&module.exports?module.exports=e(require("isotopet4s-layout/js/layout-mode"),require("packery")):e(t.isotopet4s.LayoutMode,t.Packery)}(window,function(t,e){var i=t.create("packery"),n=i.prototype,s={_getElementOffset:!0,_getMeasurement:!0};for(var o in e.prototype)s[o]||(n[o]=e.prototype[o]);var r=n._resetLayout;n._resetLayout=function(){this.packer=this.packer||new e.Packer,this.shiftPacker=this.shiftPacker||new e.Packer,r.apply(this,arguments)};var a=n._getItemLayoutPosition;n._getItemLayoutPosition=function(t){return t.rect=t.rect||new e.Rect,a.call(this,t)};var h=n.needsResizeLayout;n.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():h.call(this)};var l=n._getOption;return n._getOption=function(t){return"horizontal"==t?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:l.apply(this.isotopet4s,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQuery_T4NTBridget=e(t,t.jQuery_T4NT)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,s=void 0===n?function(){}:function(t){n.error(t)};function o(n,o,a){(a=a||e||t.jQuery_T4NT)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[n]=function(t){var e;return"string"==typeof t?function(t,e,i){var o,r="$()."+n+'("'+e+'")';return t.each(function(t,h){var l=a.data(h,n);if(l){var u=l[e];if(u&&"_"!=e.charAt(0)){var c=u.apply(l,i);o=void 0===o?c:o}else s(r+" is not a valid method")}else s(n+" not initialized. Cannot call methods, i.e. "+r)}),void 0!==o?o:t}(this,t,i.call(arguments,1)):(e=t,this.each(function(t,i){var s=a.data(i,n);s?(s.option(e),s._init()):(s=new o(i,e),a.data(i,n,s))}),this)},r(a))}function r(t){!t||t&&t.bridget||(t.bridget=o)}return r(e||t.jQuery_T4NT),o}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function s(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var o,r=!1;return function e(a){if(function(){if(!r){r=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(i);var a=s(i);o=200==Math.round(t(a.width)),e.isBoxSizeOuter=o,n.removeChild(i)}}(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var h=s(a);if("none"==h.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var l={};l.width=a.offsetWidth,l.height=a.offsetHeight;for(var u=l.isBorderBox="border-box"==h.boxSizing,c=0;c<n;c++){var d=i[c],f=h[d],p=parseFloat(f);l[d]=isNaN(p)?0:p}var m=l.paddingLeft+l.paddingRight,g=l.paddingTop+l.paddingBottom,y=l.marginLeft+l.marginRight,v=l.marginTop+l.marginBottom,_=l.borderLeftWidth+l.borderRightWidth,x=l.borderTopWidth+l.borderBottomWidth,b=u&&o,S=t(h.width);!1!==S&&(l.width=S+(b?0:m+_));var E=t(h.height);return!1!==E&&(l.height=E+(b?0:g+x)),l.innerWidth=l.width-(m+_),l.innerHeight=l.height-(g+x),l.outerWidth=l.width+y,l.outerHeight=l.height+v,l}}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}else s.push(t)}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+o),l=i.makeArray(a).concat(i.makeArray(h)),u=r+"-options",c=t.jQuery_T4NT;l.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(u);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);c&&c.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0,this.element.style[this.parent.originSide]=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]="",this.element.style.transform="",this.element.removeAttribute("aria-hidden")},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e="left"===this.parent.originSide?1:-1,i=this.parent.options.percentPosition?t*e*(this.parent.size.innerWidth/this.size.width):t*e;this.element.style.transform="translateX("+this.parent.getPositionValue(i)+")"},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){return{startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=RtlThe4?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){!this.isPointerDown&&Math.round(100*this.x)==Math.round(100*t)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}this._checkVisibility()},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if((!this.isDraggable||!this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}}}),function(t,e){if("function"==typeof define&&define.amd)define("flickityt4s/js/flickityt4s",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickityt4s;t.Flickityt4s=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){var a=t.jQuery_T4NT,h=t.getComputedStyle,l=t.console;function u(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}var c=0,d={};function f(t,e){var i=n.getQueryElement(t);if(i){if(this.element=i,this.element.flickityt4sGUID){var s=d[this.element.flickityt4sGUID];return s&&s.option(e),s}switch(a&&(this.$element=a(this.element)),this.options=n.extend({},this.constructor.defaults),e.originwrapAround=e.wrapAround,e.rightToLeft="rtl"==document.documentElement.getAttribute("dir"),e.arrowIcon){case"1":e.arrowShape="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z";break;case"2":e.arrowShape="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z";break;case"3":e.arrowShape="M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z"}this.option(e),this._create()}else l&&l.error("Bad element for Flickityt4s: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0,setPrevNextButtons:!1,checkVisibility:!1,sync:!1},f.createMethods=[];var p=f.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++c;for(var i in this.element.flickityt4sGUID=e,d[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=RtlThe4?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickityt4s-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this),this.options.on){var n=this.options.on[i];this.on(i,n)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickityt4s-enabled"),RtlThe4&&this.element.classList.add("flickityt4s-rtl"),this.getSize(),u(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickityt4s-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new s(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0,this.maxVisibilityHeight=0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide?"marginRight":"marginLeft",i=this._getCanCellFit();this.cells.forEach(function(n,s){if(t.cells.length){var r=t.outerWidth-t.firstMargin+(n.size.outerWidth-n.size[e]);i.call(this,s,r)?t.addCell(n):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(n))}else t.addCell(n)},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var m={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=m[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;t=this.maxVisibilityHeight&&this.maxVisibilityHeight>t?this.maxVisibilityHeight:t,this.viewport.style.height=t+"px"}},p.setPrevNextButtons=function(){if(this.options.setPrevNextButtons){var t=this.viewport.querySelector(".is-selected [data-cacl-slide]");if(null!==t){var e=t.offsetHeight/2;this.element.style.setProperty("--prev-next-top",e+"px")}}},p._checkVisibility=function(){if(this.options.checkVisibility&&this.options.adaptiveHeight)for(var t=this.viewport.getBoundingClientRect().x,e=this.viewport.offsetWidth,i=this.cells.length,n=0;n<i;n++){var s=this.cells[n],o=s.element.getBoundingClientRect().x-t;o+s.size.innerWidth>t&&o+s.size.innerWidth<e||o>t&&o<e?(this.maxVisibilityHeight=Math.max(s.size.outerHeight,this.maxVisibilityHeight),s.element.classList.add("is-t4s-visible"),s.element.removeAttribute("aria-hidden")):(s.element.classList.remove("is-t4s-visible"),s.element.setAttribute("aria-hidden",!0))}},p._getWrapShiftCells=function(){if(this.options.originwrapAround)if(this.slides.length<2)this.options.wrapAround=!1;else{this.options.wrapAround=!0,this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=RtlThe4?"marginRight":"marginLeft",e=RtlThe4?"marginLeft":"marginRight",i=this.slideableWidth-this.getLastCell().size[e],n=i<this.size.innerWidth,s=this.cursorPosition+this.cells[0].size[t],o=i-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){n?t.target=i*this.cellAlign:(t.target=Math.max(t.target,s),t.target=Math.min(t.target,o))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),a&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickityt4s":"";if(e){var o=new a.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t])){var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.setPrevNextButtons(),this.dispatchEvent("select",null,[t]),t!=s&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&e>1))return t;var i=n.modulo(t,e),s=Math.abs(i-this.selectedIndex),o=Math.abs(i+e-this.selectedIndex),r=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&o<s?t+=e:!this.isDragSelect&&r<s&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t&&this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++)if(-1!=this.slides[e].cells.indexOf(t))return e},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){return this.getCell(t)||(t=n.getParent(t,".flickityt4s-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#.]?[\d/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive&&!this.isAnimating&&!this.isDragging){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=h(this.element,":after").content.indexOf("flickityt4s")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=RtlThe4?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=RtlThe4?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var e=t.pageYOffset;this.element.focus({preventScroll:!0}),t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickityt4s-enabled"),this.element.classList.remove("flickityt4s-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),u(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),a&&this.$element&&a.removeData(this.element,"flickityt4s"),delete this.element.flickityt4sGUID,delete d[this.guid]},n.extend(p,r),f.data=function(t){var e=(t=n.getQueryElement(t))&&t.flickityt4sGUID;return e&&d[e]},n.htmlInit(f,"flickityt4s"),a&&a.bridget&&a.bridget("flickityt4s",f),f.setJQuery=function(t){a=t},f.Cell=s,f.Slide=o,f}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindStartEvent=function(t){this._bindStartEvent(t,!0)},n.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},n._bindStartEvent=function(e,i){var n=(i=void 0===i||i)?"addEventListener":"removeEventListener",s="mousedown";"ontouchstart"in t?s="touchstart":t.PointerEvent&&(s="pointerdown"),e[n](s,this)},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},n.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},n.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},n.onpointerdown=function(t){this._pointerDown(t,t)},n._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},n.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return n._bindPostStartEvents=function(e){if(e){var i=s[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},n._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},n.onmousemove=function(t){this._pointerMove(t,t)},n.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},n.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},n._pointerMove=function(t,e){this.pointerMove(t,e)},n.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},n.onmouseup=function(t){this._pointerUp(t,t)},n.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},n.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},n._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},n._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},n._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},n.pointerDone=function(){},n.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},n.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},n._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},n.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){for(var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/drag",["./flickityt4s","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unidragger"),require("fizzy-ui-utils")):t.Flickityt4s=e(t,t.Flickityt4s,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){n.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var s=e.prototype;n.extend(s,i.prototype),s._touchActionValue="pan-y",s._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable)},s.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},s.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},s.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:"smart"==this.options.draggable?(this.viewport,this.isDraggable=this.viewport.scrollWidth>this.viewport.offsetWidth):this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},s.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},s.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},s._uiChangeDrag=function(){delete this.isFreeScrolling},s.pointerDown=function(e,i){this.isDraggable?this.okayPointerDown(e)&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=r(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i)):this._pointerDownDefault(e,i)},s._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var o={INPUT:!0,TEXTAREA:!0,SELECT:!0};function r(){return{x:t.pageXOffset,y:t.pageYOffset}}return s.pointerDownFocus=function(t){o[t.target.nodeName]||this.focus()},s._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=o[t.target.nodeName];e||i||n||t.preventDefault()},s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},s.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},s.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},s.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},s.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=RtlThe4?-1:1;this.options.wrapAround&&(i.x%=this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},s.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},s.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},s._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},s.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},s.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},s.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},s.onscroll=function(){var t=r(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/prev-next-button",["./flickityt4s","unipointer/unipointer","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unipointer"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.Unipointer,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}o.prototype=Object.create(i.prototype),o.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickityt4s-button flickityt4s-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickityt4s-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.isPrevious?"prev_":"next_";this.parent.element.classList.remove("flickityt4s_"+t+"disable","flickityt4s_"+t+"enable");var e=this.parent.slides;if(this.parent.options.wrapAround&&e.length>1)this.enable();else{var i=e.length?e.length-1:0,n=this.isPrevious?0:i,s=this.parent.selectedIndex==n?"disable":"enable";this[s](),this.parent.element.classList.add("flickityt4s_"+t+s)}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/page-dots",["./flickityt4s","unipointer/unipointer","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unipointer"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.Unipointer,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=Object.create(i.prototype),s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickityt4s-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickityt4s"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickityt4s")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickityt4s)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),n.prototype.play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/add-remove-cell",["./flickityt4s","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;return n.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},n.append=function(t){this.insert(t,this.cells.length)},n.prepend=function(t){this.insert(t,0)},n.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},n.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},n.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/index",["./flickityt4s","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickityt4s"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s-as-nav-for/as-nav-for",["flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickityt4s"),require("fizzy-ui-utils")):t.Flickityt4s=e(t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e){t.createMethods.push("_createAsNavFor");var i=t.prototype;return i._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},i.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i,n=e[0],s=this.navCompanion.cells.indexOf(n),o=s+e.length-1,r=Math.floor((o-(i=s))*this.navCompanion.cellAlign+i);if(this.selectCell(r,!1,t),this.removeNavSelectedElements(),!(r>=this.cells.length)){var a=this.cells.slice(s,o+1);this.navSelectedElements=a.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},i.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},i.activateAsNavFor=function(){this.navCompanionSelect(!0)},i.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},i.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},i.deactivateAsNavFor=function(){this.removeNavSelectedElements()},i.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"function"==typeof define&&define.amd?define(["flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickityt4s"),require("fizzy-ui-utils")):e(t.Flickityt4s,t.fizzyUIUtils)}(this,function(t,e){var i=t.Slide,n=i.prototype.updateTarget;i.prototype.updateTarget=function(){if(n.apply(this,arguments),this.parent.options.fade){var t=this.target-this.x,e=this.cells[0].x;this.cells.forEach(function(i){var n=i.x-e-t;i.renderPosition(n)})}},i.prototype.setOpacity=function(t){this.cells.forEach(function(e){e.element.style.opacity=t})};var s=t.prototype;t.createMethods.push("_createFade"),s._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var o=s.updateSlides;s.updateSlides=function(){o.apply(this,arguments),this.options.fade},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){delete this.didDragEnd,this.options.fade},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(t){t.setOpacity("")}))};var r=s.positionSlider;s.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):r.apply(this,arguments)};var a=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),a.apply(this,arguments)},s.fadeSlides=function(){this.slides.length},s.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},s.getFadeDragWrapIndexes=function(){var t=this.slides.map(function(t,e){return this.getSlideDistance(-this.x,e)},this),i=t.map(function(t){return Math.abs(t)}),n=Math.min.apply(Math,i),s=i.indexOf(n),o=t[s],r=this.slides.length,a=o>=0?1:-1;return{a:s,b:e.modulo(s+a,r)}},s.getFadeDragLimitIndexes=function(){for(var t=0,e=0;e<this.slides.length-1;e++){var i=this.slides[e];if(-this.x<i.target)break;t=e}return{a:t,b:t+1}},s.wrapDifference=function(t,e){var i=e-t;if(!this.options.wrapAround)return i;var n=i+this.slideableWidth,s=i-this.slideableWidth;return Math.abs(n)<Math.abs(i)&&(i=n),Math.abs(s)<Math.abs(i)&&(i=s),i};var h=s._getWrapShiftCells;s._getWrapShiftCells=function(){this.options.fade||h.apply(this,arguments)};var l=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||l.apply(this,arguments)},t}),function(t,e){"function"==typeof define&&define.amd?define(["flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickityt4s"),require("fizzy-ui-utils")):t.Flickityt4s=e(t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e){"use strict";return t.createMethods.push("_createSync"),t.prototype._createSync=function(){this.syncers={};var t=this.options.sync;if(this.on("destroy",this.unsyncAll),t){var e=this;setTimeout(function(){e.sync(t)})}},t.prototype.sync=function(i){i=e.getQueryElement(i);var n=t.data(i);n&&(this._syncCompanion(n),n._syncCompanion(this))},t.prototype._syncCompanion=function(t){var e=this;function i(){var i=e.selectedIndex;t.selectedIndex!=i&&t.select(i)}this.on("select",i),this.syncers[t.guid]={flickityt4s:t,listener:i}},t.prototype.unsync=function(i){i=e.getQueryElement(i);var n=t.data(i);this._unsync(n)},t.prototype._unsync=function(t){t&&(this._unsyncCompanion(t),t._unsyncCompanion(this))},t.prototype._unsyncCompanion=function(t){var e=t.guid,i=this.syncers[e];this.off("select",i.listener),delete this.syncers[e]},t.prototype.unsyncAll=function(){for(var t in this.syncers){var e=this.syncers[t];this._unsync(e.flickityt4s)}},t});
// var jsBdThe4=document.getElementsByTagName("HTML")[0],RtlThe4=jsBdThe4.classList.contains("rtl_true"),LtrThe4=!RtlThe4;!function(t,e){"function"==typeof define&&define.amd?define("jQuery_T4NT-bridget/jQuery_T4NT-bridget",["jQuery_T4NT"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jQuery_T4NT")):t.jQuery_T4NTBridget=e(t,t.jQuery_T4NT)}(window,function(t,e){"use strict";function i(i,o,a){(a=a||e||t.jQuery_T4NT)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){return"string"==typeof t?function(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,h){var l=a.data(h,i);if(l){var c=l[e];if(c&&"_"!=e.charAt(0)){var u=c.apply(l,n);s=void 0===s?u:s}else r(o+" is not a valid method")}else r(i+" not initialized. Cannot call methods, i.e. "+o)}),void 0!==s?s:t}(this,t,s.call(arguments,1)):(function(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}(this,t),this)},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r=void 0===o?function(){}:function(t){o.error(t)};return n(e||t.jQuery_T4NT),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(t){var e=getComputedStyle(t);return e||o("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function i(){if(!h){h=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var o=document.body||document.documentElement;o.appendChild(i);var r=e(i);s=200==Math.round(t(r.width)),n.isBoxSizeOuter=s,o.removeChild(i)}}function n(n){if(i(),"string"==typeof n&&(n=document.querySelector(n)),n&&"object"==typeof n&&n.nodeType){var o=e(n);if("none"==o.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<a;e++)t[r[e]]=0;return t}();var h={};h.width=n.offsetWidth,h.height=n.offsetHeight;for(var l=h.isBorderBox="border-box"==o.boxSizing,c=0;c<a;c++){var u=r[c],d=o[u],f=parseFloat(d);h[u]=isNaN(f)?0:f}var p=h.paddingLeft+h.paddingRight,m=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,y=h.marginTop+h.marginBottom,v=h.borderLeftWidth+h.borderRightWidth,_=h.borderTopWidth+h.borderBottomWidth,x=l&&s,b=t(o.width);!1!==b&&(h.width=b+(x?0:p+v));var S=t(o.height);return!1!==S&&(h.height=S+(x?0:m+_)),h.innerWidth=h.width-(p+v),h.innerHeight=h.height-(m+_),h.outerWidth=h.width+g,h.outerHeight=h.height+y,h}}var s,o="undefined"==typeof console?function(){}:function(t){console.error(t)},r=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=r.length,h=!1;return n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+o),l=i.makeArray(a).concat(i.makeArray(h)),c=r+"-options",u=t.jQuery_T4NT;l.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);u&&u.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var n=document.documentElement.style,s="string"==typeof n.transition?"transition":"WebkitTransition",o="string"==typeof n.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],a={transform:o,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},h=i.prototype=Object.create(t.prototype);h.constructor=i,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=LtrThe4,i=this.layout._getOption("originTop"),n=t[e?"left":"right"],s=t[i?"top":"bottom"],o=parseFloat(n),r=parseFloat(s),a=this.layout.size;-1!=n.indexOf("%")&&(o=o/100*a.width),-1!=s.indexOf("%")&&(r=r/100*a.height),o=isNaN(o)?0:o,r=isNaN(r)?0:r,o-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},h.layoutPosition=function(){var t=this.layout.size,e={},i=LtrThe4,n=this.layout._getOption("originTop"),s=i?"paddingLeft":"paddingRight",o=i?"left":"right",r=i?"right":"left",a=this.position.x+t[s];e[o]=this.getXValue(a),e[r]="";var h=n?"paddingTop":"paddingBottom",l=n?"top":"bottom",c=n?"bottom":"top",u=this.position.y+t[h];e[l]=this.getYValue(u),e[c]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,s=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!s||this.isTransitioning){var o=t-i,r=e-n,a={};a.transform=this.getTranslate(o,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},h.getTranslate=function(t,e){return"translate3d("+(t=LtrThe4?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},h._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var l="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(o);h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var u={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(u)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,s,o){return e(t,i,n,s,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,s){"use strict";function o(t,e){var i=n.getQueryElement(t);if(i){this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var s=++c;this.element.outlayerGUID=s,u[s]=this,this._create(),this._getOption("initLayout")&&this.layout()}else a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t))}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery_T4NT,l=function(){},c=0,u={};o.namespace="outlayer",o.Item=s,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=o.prototype;n.extend(d,e.prototype),d.option=function(t){n.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0;s<e.length;s++){var o=new i(e[s],this);n.push(o)}return n},d._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=i(this.element)},d._getMeasurement=function(t,e){var n,s=this.options[t];s?("string"==typeof s?n=this.element.querySelector(s):s instanceof HTMLElement&&(n=s),this[t]=n?i(n)[e]:s):this[t]=0},d.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(f[n]||1):0}(t),this.stagger)},d._positionItem=function(t,e,i,n,s){n?t.goTo(e,i):(t.stagger(s*this.stagger),t.moveTo(e,i))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},d._getContainerSize=l,d._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},d._emitCompleteOnItems=function(t,e){function i(){s.dispatchEvent(t+"Complete",null,[e])}function n(){++r==o&&i()}var s=this,o=e.length;if(e&&o){var r=0;e.forEach(function(e){e.once(t,n)})}else i()},d.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var s=h.Event(e);s.type=t,this.$element.trigger(s,i)}else this.$element.trigger(t,i)},d.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},d.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},d.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},d.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},d._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),n.makeArray(t)},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=l,d._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,s=i(t);return{left:e.left-n.left-s.marginLeft,top:e.top-n.top-s.marginTop,right:n.right-e.right-s.marginRight,bottom:n.bottom-e.bottom-s.marginBottom}},d.handleEvent=n.handleEvent,d.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},n.debounceMethod(o,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},d.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},d.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},d.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},d.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},d.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},d.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},d.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete u[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},o.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&u[e]},o.create=function(t,e){var i=r(o);return i.defaults=n.extend({},o.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},o.compatOptions),i.namespace=t,i.data=o.data,i.Item=r(s),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var f={ms:1,s:1e3};return o.Item=s,o}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.isotopet4s=t.isotopet4s||{},t.isotopet4s.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var s=i.destroy;return i.destroy=function(){s.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.isotopet4s=t.isotopet4s||{},t.isotopet4s.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotopet4s=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotopet4s,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotopet4s.element);return this.isotopet4s.size&&e&&e.innerHeight!=this.isotopet4s.size.innerHeight},n._getMeasurement=function(){this.isotopet4s._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var s=this.getFirstItemSize();this[i]=s&&s[n]||this.isotopet4s.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotopet4s.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotopet4s.layout.apply(this.isotopet4s,arguments)},n.getSize=function(){this.isotopet4s.getSize(),this.size=this.isotopet4s.size},i.modes={},i.create=function(t,e){function s(){i.apply(this,arguments)}return s.prototype=Object.create(n),s.prototype.constructor=s,e&&(s.options=e),s.prototype.namespace=t,i.modes[t]=s,s},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,s=this.containerWidth+this.gutter,o=s/n,r=n-s%n;o=Math[r&&r<1?"round":"floor"](o),this.cols=Math.max(o,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),s={x:this.columnWidth*n.col,y:n.y},o=n.y+t.size.outerHeight,r=i+n.col,a=n.col;a<r;a++)this.colYs[a]=o;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),s=this._getOption("originLeft")?n.left:n.right,o=s+i.outerWidth,r=Math.floor(s/this.columnWidth);r=Math.max(0,r);var a=Math.floor(o/this.columnWidth);a-=o%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,l=r;l<=a;l++)this.colYs[l]=Math.max(h,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.isotopet4s.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,s={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var o in e.prototype)s[o]||(n[o]=e.prototype[o]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotopet4s.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotopet4s,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.isotopet4s.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotopet4s.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotopet4s-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.isotopet4s.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotopet4s.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotopet4s-layout/js/item","isotopet4s-layout/js/layout-mode","isotopet4s-layout/js/layout-modes/masonry","isotopet4s-layout/js/layout-modes/fit-rows","isotopet4s-layout/js/layout-modes/vertical"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotopet4s-layout/js/item"),require("isotopet4s-layout/js/layout-mode"),require("isotopet4s-layout/js/layout-modes/masonry"),require("isotopet4s-layout/js/layout-modes/fit-rows"),require("isotopet4s-layout/js/layout-modes/vertical")):t.isotopet4s=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.isotopet4s.Item,t.isotopet4s.LayoutMode)}(window,function(t,e,i,n,s,o,r){var a=t.jQuery_T4NT,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},l=e.create("isotopet4s",{layoutMode:"masonry",isjQuery_T4NTFiltering:!0,sortAscending:!0});l.Item=o,l.LayoutMode=r;var c=l.prototype;c._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},c.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},c._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},c._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},c.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},c._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},c._init=c.arrange,c._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},c._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},c._bindArrangeComplete=function(){function t(){e&&i&&n&&s.dispatchEvent("arrangeComplete",null,[s.filteredItems])}var e,i,n,s=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},c._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],s=[],o=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var h=o(a);h&&i.push(a),h&&a.isHidden?n.push(a):h||a.isHidden||s.push(a)}}return{matches:i,needReveal:n,needHide:s}},c._getFilterTest=function(t){return a&&this.options.isjQuery_T4NTFiltering?function(e){return a(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},c.updateSortData=function(t){var e;t?(t=s.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},c._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=u(i)}},c._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var u=function(){return function(t){if("string"!=typeof t)return t;var e=h(t).split(" "),i=e[0],n=i.match(/^\[(.+)\]$/),s=function(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}(n&&n[1],i),o=l.sortDataParsers[e[1]];return o?function(t){return t&&o(s(t))}:function(t){return t&&s(t)}}}();l.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c._sort=function(){if(this.options.sortBy){var t=s.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=function(t,e){return function(i,n){for(var s=0;s<t.length;s++){var o=t[s],r=i.sortData[o],a=n.sortData[o];if(r>a||r<a)return(r>a?1:-1)*((void 0!==e[o]?e[o]:e)?1:-1)}return 0}}(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},c._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},c._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},c._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},c._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c._manageStamp=function(t){this._mode()._manageStamp(t)},c._getContainerSize=function(){return this._mode()._getContainerSize()},c.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},c._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},c.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,s=e.length;for(i=0;i<s;i++)n=e[i],this.element.appendChild(n.element);var o=this._filter(e).matches;for(i=0;i<s;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<s;i++)delete e[i].isLayoutInstant;this.reveal(o)}};var d=c.remove;return c.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);d.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var o=e[n];s.removeFrom(this.filteredItems,o)}},c.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},c._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},c.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},l}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/rect",e):"object"==typeof module&&module.exports?module.exports=e():(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window,function(){function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}t.defaults={x:0,y:0,width:0,height:0};var e=t.prototype;return e.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,s=t.y+t.height;return this.x<n&&e>t.x&&this.y<s&&i>t.y},e.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,n=[],s=this.x+this.width,o=this.y+this.height,r=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),n.push(i)),s>r&&(i=new t({x:r,y:this.y,width:s-r,height:this.height}),n.push(i)),o>a&&(i=new t({x:this.x,y:a,width:this.width,height:o-a}),n.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),n.push(i)),n},e.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t}),function(t,e){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],e);else if("object"==typeof module&&module.exports)module.exports=e(require("./rect"));else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window,function(t){function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=n[this.sortDirection]||n.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var n=this.spaces[i],s=n.getMaximalFreeRects(t);s?e.push.apply(e,s):e.push(n)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var n=0,s=t[e+n];s;){if(s==i)n++;else{if(s.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(s)?t.splice(e+n,1):n++}s=t[e+n]}i=t[++e]}return t};var n={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("./rect")):t.Packery.Item=e(t.Outlayer,t.Packery.Rect)}(window,function(t,e){var i="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",n=function(){t.Item.apply(this,arguments)},s=n.prototype=Object.create(t.Item.prototype),o=s._create;s._create=function(){o.call(this),this.rect=new e};var r=s.moveTo;return s.moveTo=function(t,e){var i=Math.abs(this.position.x-t),n=Math.abs(this.position.y-e);return this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>i&&1>n?void this.goTo(t,e):void r.apply(this,arguments)},s.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&i&&(this.element.style[i]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},s.disablePlacing=function(){this.isPlacing=!1},s.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},s.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||((t=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},s.positionDropPlaceholder=function(){this.dropPlaceholder.style[i]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},s.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},n}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=e(t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(t,e,i,n,s){function o(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function r(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var a=e.create("packery");a.Item=s;var h=a.prototype;h._create=function(){e.prototype._create.call(this),this.packer=new n,this.shiftPacker=new n,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(e,i){i&&t.itemDragStart(e.currentTarget)},drag:function(e,i){i&&t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e,i){i&&t.itemDragEnd(e.currentTarget)}}},h._resetLayout=function(){var t,e,i;this.getSize(),this._getMeasurements(),this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,i="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,i="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},h._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},h._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var e=this._getPackMethod();this.packer[e](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},h.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},h._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},h._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},h._setRectSize=function(e,i){var n=t(e),s=n.outerWidth,o=n.outerHeight;(s||o)&&(s=this._applyGridGutter(s,this.columnWidth),o=this._applyGridGutter(o,this.rowHeight)),i.width=Math.min(s,this.packer.width),i.height=Math.min(o,this.packer.height)},h._applyGridGutter=function(t,e){if(!e)return t+this.gutter;var i=t%(e+=this.gutter);return Math[i&&1>i?"round":"ceil"](t/e)*e},h._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},h._manageStamp=function(t){var e,n=this.getItem(t);if(n&&n.isPlacing)e=n.rect;else{var s=this._getElementOffset(t);e=new i({x:this._getOption("originLeft")?s.left:s.right,y:this._getOption("originTop")?s.top:s.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},h.sortItemsByPosition=function(){var t=this._getOption("horizontal")?r:o;this.items.sort(t)},h.fit=function(t,e,i){var n=this.getItem(t);n&&(this.stamp(n.element),n.enablePlacing(),this.updateShiftTargets(n),e=void 0===e?n.rect.x:e,i=void 0===i?n.rect.y:i,this.shift(n,e,i),this._bindFitEvents(n),n.moveTo(n.rect.x,n.rect.y),this.shiftLayout(),this.unstamp(n.element),this.sortItemsByPosition(),n.disablePlacing())},h._bindFitEvents=function(t){function e(){2==++n&&i.dispatchEvent("fitComplete",null,[t])}var i=this,n=0;t.once("layout",e),this.once("layoutComplete",e)},h.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},h.needsResizeLayout=function(){var e=t(this.element),i=this._getOption("horizontal")?"innerHeight":"innerWidth";return e[i]!=this.size[i]},h.resizeShiftPercentLayout=function(){var e=this._getItemsForLayout(this.items),i=this._getOption("horizontal"),n=i?"y":"x",s=i?"height":"width",o=i?"rowHeight":"columnWidth",r=i?"innerHeight":"innerWidth",a=this[o];if(a=a&&a+this.gutter){this._getMeasurements();var h=this[o]+this.gutter;e.forEach(function(t){var e=Math.round(t.rect[n]/a);t.rect[n]=e*h})}else{var l=t(this.element)[r]+this.gutter,c=this.packer[s];e.forEach(function(t){t.rect[n]=t.rect[n]/c*l})}this.shiftLayout()},h.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var e=this.getItem(t);e&&(e.enablePlacing(),e.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(e))}},h.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var e=this._getOption("originLeft"),n=this._getOption("originTop");this.stamps.forEach(function(t){var s=this.getItem(t);if(!s||!s.isPlacing){var o=this._getElementOffset(t),r=new i({x:e?o.left:o.right,y:n?o.top:o.bottom});this._setRectSize(t,r),this.shiftPacker.placed(r)}},this);var s=this._getOption("horizontal"),o=s?"rowHeight":"columnWidth",r=s?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var a,h=this[o];if(h=h&&h+this.gutter){var l=Math.ceil(t.rect[r]/h),c=Math.floor((this.shiftPacker[r]+this.gutter)/h);a=(c-l)*h;for(var u=0;c>u;u++)this._addShiftTarget(u*h,0,a)}else a=this.shiftPacker[r]+this.gutter-t.rect[r],this._addShiftTarget(0,0,a);var d=this._getItemsForLayout(this.items),f=this._getPackMethod();d.forEach(function(t){var e=t.rect;this._setRectSize(t.element,e),this.shiftPacker[f](e),this._addShiftTarget(e.x,e.y,a);var i=s?e.x+e.width:e.x,n=s?e.y:e.y+e.height;if(this._addShiftTarget(i,n,a),h)for(var o=Math.round(e[r]/h),l=1;o>l;l++){var c=s?i:e.x+h*l,u=s?e.y+h*l:n;this._addShiftTarget(c,u,a)}},this)},h._addShiftTarget=function(t,e,i){var n=this._getOption("horizontal")?e:t;if(!(0!==n&&n>i)){var s=t+","+e;-1!=this.shiftTargetKeys.indexOf(s)||(this.shiftTargetKeys.push(s),this.shiftTargets.push({x:t,y:e}))}},h.shift=function(t,e,i){var n,s=1/0,o={x:e,y:i};this.shiftTargets.forEach(function(t){var e=function(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}(t,o);s>e&&(n=t,s=e)}),t.rect.x=n.x,t.rect.y=n.y};h.itemDragMove=function(t,e,i){function n(){o.shift(s,e,i),s.positionDropPlaceholder(),o.layout()}var s=this.isEnabled&&this.getItem(t);if(s){e-=this.size.paddingLeft,i-=this.size.paddingTop;var o=this,r=new Date;this._itemDragTime&&r-this._itemDragTime<120?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(n,120)):(n(),this._itemDragTime=r)}},h.itemDragEnd=function(t){function e(){2==++n&&(i.element.classList.remove("is-positioning-post-drag"),i.hideDropPlaceholder(),s.dispatchEvent("dragItemPositioned",null,[i]))}var i=this.isEnabled&&this.getItem(t);if(i){clearTimeout(this.dragTimeout),i.element.classList.add("is-positioning-post-drag");var n=0,s=this;i.once("layout",e),this.once("layoutComplete",e),i.moveTo(i.rect.x,i.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),i.disablePlacing(),this.unstamp(i.element)}},h.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},h.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},h._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},h.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},h.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},h._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)};var l=h.destroy;return h.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},a.Rect=i,a.Packer=n,a}),function(t,e){"function"==typeof define&&define.amd?define(["isotopet4s-layout/js/layout-mode","packery/js/packery"],e):"object"==typeof module&&module.exports?module.exports=e(require("isotopet4s-layout/js/layout-mode"),require("packery")):e(t.isotopet4s.LayoutMode,t.Packery)}(window,function(t,e){var i=t.create("packery"),n=i.prototype,s={_getElementOffset:!0,_getMeasurement:!0};for(var o in e.prototype)s[o]||(n[o]=e.prototype[o]);var r=n._resetLayout;n._resetLayout=function(){this.packer=this.packer||new e.Packer,this.shiftPacker=this.shiftPacker||new e.Packer,r.apply(this,arguments)};var a=n._getItemLayoutPosition;n._getItemLayoutPosition=function(t){return t.rect=t.rect||new e.Rect,a.call(this,t)};var h=n.needsResizeLayout;n.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():h.call(this)};var l=n._getOption;return n._getOption=function(t){return"horizontal"==t?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:l.apply(this.isotopet4s,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("jQuery_T4NT-bridget/jQuery_T4NT-bridget",["jQuery_T4NT"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jQuery_T4NT")):t.jQuery_T4NTBridget=e(t,t.jQuery_T4NT)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,s=void 0===n?function(){}:function(t){n.error(t)};function o(n,o,a){(a=a||e||t.jQuery_T4NT)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[n]=function(t){var e;return"string"==typeof t?function(t,e,i){var o,r="$()."+n+'("'+e+'")';return t.each(function(t,h){var l=a.data(h,n);if(l){var c=l[e];if(c&&"_"!=e.charAt(0)){var u=c.apply(l,i);o=void 0===o?u:o}else s(r+" is not a valid method")}else s(n+" not initialized. Cannot call methods, i.e. "+r)}),void 0!==o?o:t}(this,t,i.call(arguments,1)):(e=t,this.each(function(t,i){var s=a.data(i,n);s?(s.option(e),s._init()):(s=new o(i,e),a.data(i,n,s))}),this)},r(a))}function r(t){!t||t&&t.bridget||(t.bridget=o)}return r(e||t.jQuery_T4NT),o}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function s(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var o,r=!1;return function e(a){if(function(){if(!r){r=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(i);var a=s(i);o=200==Math.round(t(a.width)),e.isBoxSizeOuter=o,n.removeChild(i)}}(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var h=s(a);if("none"==h.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var l={};l.width=a.offsetWidth,l.height=a.offsetHeight;for(var c=l.isBorderBox="border-box"==h.boxSizing,u=0;u<n;u++){var d=i[u],f=h[d],p=parseFloat(f);l[d]=isNaN(p)?0:p}var m=l.paddingLeft+l.paddingRight,g=l.paddingTop+l.paddingBottom,y=l.marginLeft+l.marginRight,v=l.marginTop+l.marginBottom,_=l.borderLeftWidth+l.borderRightWidth,x=l.borderTopWidth+l.borderBottomWidth,b=c&&o,S=t(h.width);!1!==S&&(l.width=S+(b?0:m+_));var E=t(h.height);return!1!==E&&(l.height=E+(b?0:g+x)),l.innerWidth=l.width-(m+_),l.innerHeight=l.height-(g+x),l.outerWidth=l.width+y,l.outerHeight=l.height+v,l}}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}else s.push(t)}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+o),l=i.makeArray(a).concat(i.makeArray(h)),c=r+"-options",u=t.jQuery_T4NT;l.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);u&&u.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0,this.element.style[this.parent.originSide]=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]="",this.element.style.transform="",this.element.removeAttribute("aria-hidden")},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e="left"===this.parent.originSide?1:-1,i=this.parent.options.percentPosition?t*e*(this.parent.size.innerWidth/this.size.width):t*e;this.element.style.transform="translateX("+this.parent.getPositionValue(i)+")"},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickityt4s=t.Flickityt4s||{},t.Flickityt4s.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){return{startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){!this.isPointerDown&&Math.round(100*this.x)==Math.round(100*t)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}this._checkVisibility()},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if((!this.isDraggable||!this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}}}),function(t,e){if("function"==typeof define&&define.amd)define("flickityt4s/js/flickityt4s",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickityt4s;t.Flickityt4s=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){var a=t.jQuery_T4NT,h=t.getComputedStyle,l=t.console;function c(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}var u=0,d={};function f(t,e){var i=n.getQueryElement(t);if(i){if(this.element=i,this.element.flickityt4sGUID){var s=d[this.element.flickityt4sGUID];return s&&s.option(e),s}switch(a&&(this.$element=a(this.element)),this.options=n.extend({},this.constructor.defaults),e.originwrapAround=e.wrapAround,e.rightToLeft="rtl"==document.documentElement.getAttribute("dir"),e.arrowIcon){case"1":e.arrowShape="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z";break;case"2":e.arrowShape="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z";break;case"3":e.arrowShape="M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z"}this.option(e),this._create()}else l&&l.error("Bad element for Flickityt4s: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespacejQuery_T4NTEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0,setPrevNextButtons:!1,checkVisibility:!1,sync:!1},f.createMethods=[];var p=f.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++u;for(var i in this.element.flickityt4sGUID=e,d[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickityt4s-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this),this.options.on){var n=this.options.on[i];this.on(i,n)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickityt4s-enabled"),this.options.rightToLeft&&this.element.classList.add("flickityt4s-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickityt4s-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new s(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0,this.maxVisibilityHeight=0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide?"marginRight":"marginLeft",i=this._getCanCellFit();this.cells.forEach(function(n,s){if(t.cells.length){var r=t.outerWidth-t.firstMargin+(n.size.outerWidth-n.size[e]);i.call(this,s,r)?t.addCell(n):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(n))}else t.addCell(n)},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var m={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=m[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;t=this.maxVisibilityHeight&&this.maxVisibilityHeight>t?this.maxVisibilityHeight:t,this.viewport.style.height=t+"px"}},p.setPrevNextButtons=function(){if(this.options.setPrevNextButtons){var t=this.viewport.querySelector(".is-selected [data-cacl-slide]");if(null!==t){var e=t.offsetHeight/2;this.element.style.setProperty("--prev-next-top",e+"px")}}},p._checkVisibility=function(){if(this.options.checkVisibility&&this.options.adaptiveHeight)for(var t=this.viewport.getBoundingClientRect().x,e=this.viewport.offsetWidth,i=this.cells.length,n=0;n<i;n++){var s=this.cells[n],o=s.element.getBoundingClientRect().x-t;o+s.size.innerWidth>t&&o+s.size.innerWidth<e||o>t&&o<e?(this.maxVisibilityHeight=Math.max(s.size.outerHeight,this.maxVisibilityHeight),s.element.classList.add("is-t4s-visible"),s.element.removeAttribute("aria-hidden")):(s.element.classList.remove("is-t4s-visible"),s.element.setAttribute("aria-hidden",!0))}},p._getWrapShiftCells=function(){if(this.options.originwrapAround)if(this.slides.length<2)this.options.wrapAround=!1;else{this.options.wrapAround=!0,this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),a&&this.$element){var s=t+=this.options.namespacejQuery_T4NTEvents?".flickityt4s":"";if(e){var o=new a.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t])){var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.setPrevNextButtons(),this.dispatchEvent("select",null,[t]),t!=s&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&e>1))return t;var i=n.modulo(t,e),s=Math.abs(i-this.selectedIndex),o=Math.abs(i+e-this.selectedIndex),r=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&o<s?t+=e:!this.isDragSelect&&r<s&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t&&this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++)if(-1!=this.slides[e].cells.indexOf(t))return e},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){return this.getCell(t)||(t=n.getParent(t,".flickityt4s-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#.]?[\d/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive&&!this.isAnimating&&!this.isDragging){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=h(this.element,":after").content.indexOf("flickityt4s")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var e=t.pageYOffset;this.element.focus({preventScroll:!0}),t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickityt4s-enabled"),this.element.classList.remove("flickityt4s-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),a&&this.$element&&a.removeData(this.element,"flickityt4s"),delete this.element.flickityt4sGUID,delete d[this.guid]},n.extend(p,r),f.data=function(t){var e=(t=n.getQueryElement(t))&&t.flickityt4sGUID;return e&&d[e]},n.htmlInit(f,"flickityt4s"),a&&a.bridget&&a.bridget("flickityt4s",f),f.setjQuery_T4NT=function(t){a=t},f.Cell=s,f.Slide=o,f}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindStartEvent=function(t){this._bindStartEvent(t,!0)},n.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},n._bindStartEvent=function(e,i){var n=(i=void 0===i||i)?"addEventListener":"removeEventListener",s="mousedown";"ontouchstart"in t?s="touchstart":t.PointerEvent&&(s="pointerdown"),e[n](s,this)},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},n.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},n.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},n.onpointerdown=function(t){this._pointerDown(t,t)},n._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},n.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return n._bindPostStartEvents=function(e){if(e){var i=s[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},n._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},n.onmousemove=function(t){this._pointerMove(t,t)},n.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},n.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},n._pointerMove=function(t,e){this.pointerMove(t,e)},n.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},n.onmouseup=function(t){this._pointerUp(t,t)},n.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},n.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},n._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},n._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},n._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},n.pointerDone=function(){},n.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},n.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},n._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},n.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){for(var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/drag",["./flickityt4s","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unidragger"),require("fizzy-ui-utils")):t.Flickityt4s=e(t,t.Flickityt4s,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){n.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var s=e.prototype;n.extend(s,i.prototype),s._touchActionValue="pan-y",s._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable)},s.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},s.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},s.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:"smart"==this.options.draggable?(this.viewport,this.isDraggable=this.viewport.scrollWidth>this.viewport.offsetWidth):this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},s.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},s.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},s._uiChangeDrag=function(){delete this.isFreeScrolling},s.pointerDown=function(e,i){this.isDraggable?this.okayPointerDown(e)&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=r(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i)):this._pointerDownDefault(e,i)},s._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var o={INPUT:!0,TEXTAREA:!0,SELECT:!0};function r(){return{x:t.pageXOffset,y:t.pageYOffset}}return s.pointerDownFocus=function(t){o[t.target.nodeName]||this.focus()},s._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=o[t.target.nodeName];e||i||n||t.preventDefault()},s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},s.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},s.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},s.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},s.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x%=this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},s.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},s.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},s._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},s.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},s.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},s.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},s.onscroll=function(){var t=r(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/prev-next-button",["./flickityt4s","unipointer/unipointer","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unipointer"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.Unipointer,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}o.prototype=Object.create(i.prototype),o.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickityt4s-button flickityt4s-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickityt4s-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.isPrevious?"prev_":"next_";this.parent.element.classList.remove("flickityt4s_"+t+"disable","flickityt4s_"+t+"enable");var e=this.parent.slides;if(this.parent.options.wrapAround&&e.length>1)this.enable();else{var i=e.length?e.length-1:0,n=this.isPrevious?0:i,s=this.parent.selectedIndex==n?"disable":"enable";this[s](),this.parent.element.classList.add("flickityt4s_"+t+s)}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/page-dots",["./flickityt4s","unipointer/unipointer","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("unipointer"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.Unipointer,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=Object.create(i.prototype),s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickityt4s-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickityt4s"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickityt4s")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickityt4s)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),n.prototype.play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/add-remove-cell",["./flickityt4s","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;return n.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},n.append=function(t){this.insert(t,this.cells.length)},n.prepend=function(t){this.insert(t,0)},n.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},n.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},n.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.setPrevNextButtons();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/lazyload",["./flickityt4s","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickityt4s"),require("fizzy-ui-utils")):e(t,t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e,i){"use strict";e.createMethods.push("_createLazyload");var n=e.prototype;function s(t,e){this.img=t,this.flickityt4s=e,this.load()}return n._createLazyload=function(){this.on("select",this.lazyLoad)},n.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,n=this.getAdjacentCellElements(e),o=[];n.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickityt4s-lazyload"),n=t.getAttribute("data-flickityt4s-lazyload-src"),s=t.getAttribute("data-flickityt4s-lazyload-srcset");if(e||n||s)return[t]}var o=t.querySelectorAll("img[data-flickityt4s-lazyload], img[data-flickityt4s-lazyload-src], img[data-flickityt4s-lazyload-srcset]");return i.makeArray(o)}(t);o=o.concat(e)}),o.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickityt4s-lazyload")||this.img.getAttribute("data-flickityt4s-lazyload-src"),e=this.img.getAttribute("data-flickityt4s-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickityt4s-lazyload"),this.img.removeAttribute("data-flickityt4s-lazyload-src"),this.img.removeAttribute("data-flickityt4s-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickityt4s-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickityt4s-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickityt4s.getParentCell(this.img),n=i&&i.element;this.flickityt4s.cellSizeChange(n),this.img.classList.add(e),this.flickityt4s.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s/js/index",["./flickityt4s","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickityt4s"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickityt4s-as-nav-for/as-nav-for",["flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickityt4s"),require("fizzy-ui-utils")):t.Flickityt4s=e(t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e){t.createMethods.push("_createAsNavFor");var i=t.prototype;return i._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},i.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i,n=e[0],s=this.navCompanion.cells.indexOf(n),o=s+e.length-1,r=Math.floor((o-(i=s))*this.navCompanion.cellAlign+i);if(this.selectCell(r,!1,t),this.removeNavSelectedElements(),!(r>=this.cells.length)){var a=this.cells.slice(s,o+1);this.navSelectedElements=a.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},i.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},i.activateAsNavFor=function(){this.navCompanionSelect(!0)},i.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},i.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},i.deactivateAsNavFor=function(){this.removeNavSelectedElements()},i.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){var i=t.jQuery_T4NT,n=t.console;function s(t,e){for(var i in e)t[i]=e[i];return t}var o=Array.prototype.slice;function r(t,e,a){if(!(this instanceof r))return new r(t,e,a);var h,l=t;"string"==typeof t&&(l=document.querySelectorAll(t)),l?(this.elements=(h=l,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?o.call(h):[h]),this.options=s({},this.options),"function"==typeof e?a=e:s(this.options,e),a&&this.on("always",a),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(l||t))}r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var a={1:!0,9:!0,11:!0};function h(t){this.img=t}function l(t,e){this.url=t,this.element=e,this.img=new Image}return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new h(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new l(t,e);this.images.push(i)},r.prototype.check=function(){var t=this;function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(h.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makejQuery_T4NTPlugin=function(e){(e=e||t.jQuery_T4NT)&&((i=e).fn.imagesLoaded=function(t,e){return new r(this,t,e).jqDeferred.promise(i(this))})},r.makejQuery_T4NTPlugin(),r}),function(t,e){"function"==typeof define&&define.amd?define(["flickityt4s/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickityt4s"),require("imagesloaded")):t.Flickityt4s=e(t,t.Flickityt4s,t.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var t=this;i(this.slider).on("progress",function(e,i){var n=t.getParentCell(i.img);t.cellSizeChange(n&&n.element),t.options.freeScroll||t.positionSliderAtSelected()})}},e}),function(t,e){"function"==typeof define&&define.amd?define(["flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickityt4s"),require("fizzy-ui-utils")):e(t.Flickityt4s,t.fizzyUIUtils)}(this,function(t,e){var i=t.Slide,n=i.prototype.updateTarget;i.prototype.updateTarget=function(){if(n.apply(this,arguments),this.parent.options.fade){var t=this.target-this.x,e=this.cells[0].x;this.cells.forEach(function(i){var n=i.x-e-t;i.renderPosition(n)})}},i.prototype.setOpacity=function(t){this.cells.forEach(function(e){e.element.style.opacity=t})};var s=t.prototype;t.createMethods.push("_createFade"),s._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var o=s.updateSlides;s.updateSlides=function(){o.apply(this,arguments),this.options.fade},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){delete this.didDragEnd,this.options.fade},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(t){t.setOpacity("")}))};var r=s.positionSlider;s.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):r.apply(this,arguments)};var a=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),a.apply(this,arguments)},s.fadeSlides=function(){this.slides.length},s.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},s.getFadeDragWrapIndexes=function(){var t=this.slides.map(function(t,e){return this.getSlideDistance(-this.x,e)},this),i=t.map(function(t){return Math.abs(t)}),n=Math.min.apply(Math,i),s=i.indexOf(n),o=t[s],r=this.slides.length,a=o>=0?1:-1;return{a:s,b:e.modulo(s+a,r)}},s.getFadeDragLimitIndexes=function(){for(var t=0,e=0;e<this.slides.length-1;e++){var i=this.slides[e];if(-this.x<i.target)break;t=e}return{a:t,b:t+1}},s.wrapDifference=function(t,e){var i=e-t;if(!this.options.wrapAround)return i;var n=i+this.slideableWidth,s=i-this.slideableWidth;return Math.abs(n)<Math.abs(i)&&(i=n),Math.abs(s)<Math.abs(i)&&(i=s),i};var h=s._getWrapShiftCells;s._getWrapShiftCells=function(){this.options.fade||h.apply(this,arguments)};var l=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||l.apply(this,arguments)},t}),function(t,e){"function"==typeof define&&define.amd?define(["Flickityt4s/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("Flickityt4s"),require("fizzy-ui-utils")):t.Flickityt4s=e(t.Flickityt4s,t.fizzyUIUtils)}(window,function(t,e){"use strict";return t.createMethods.push("_createSync"),t.prototype._createSync=function(){this.syncers={};var t=this.options.sync;if(this.on("destroy",this.unsyncAll),t){var e=this;setTimeout(function(){e.sync(t)})}},t.prototype.sync=function(i){i=e.getQueryElement(i);var n=t.data(i);n&&(this._syncCompanion(n),n._syncCompanion(this))},t.prototype._syncCompanion=function(t){var e=this;function i(){var i=e.selectedIndex;t.selectedIndex!=i&&t.select(i)}this.on("select",i),this.syncers[t.guid]={Flickityt4s:t,listener:i}},t.prototype.unsync=function(i){i=e.getQueryElement(i);var n=t.data(i);this._unsync(n)},t.prototype._unsync=function(t){t&&(this._unsyncCompanion(t),t._unsyncCompanion(this))},t.prototype._unsyncCompanion=function(t){var e=t.guid,i=this.syncers[e];this.off("select",i.listener),delete this.syncers[e]},t.prototype.unsyncAll=function(){for(var t in this.syncers){var e=this.syncers[t];this._unsync(e.Flickityt4s)}},t});

/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function d(e,t){p(e,function(e){return t(e),1})}function v(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--h){u[o]=1,s&&s();for(var e in f)p(e.split("|"),g)&&!d(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,h=e.length;return setTimeout(function(){d(e,function t(e,n){if(e===null)return y();!n&&!/^https?:\/\//.test(e)&&c&&(e=e.indexOf(".js")===-1?c+e+".js":c+e);if(l[e])return o&&(a[o]=1),l[e]==2?y():setTimeout(function(){t(e,!0)},0);l[e]=1,o&&(a[o]=1),m(e,y)})},0),v}function m(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e,t,n){(function r(i){i=e.shift(),e.length?v(i,r):v(i,t,n)})()},v.path=function(e){c=e},v.urlArgs=function(e){h=e},v.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!d(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v});

/*! js-cookie v3.0.1 | MIT
 * https://github.com/js-cookie/js-cookie 
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
var CookiesT4 = Cookies.noConflict();

(function ($) {
	'use strict';

  /**
   *-------------------------------------------------------------------------------------------------------------------------------------------
   * Assign Variable
   *-------------------------------------------------------------------------------------------------------------------------------------------
   */

	var $window         = $(window),
	$document           = $(document),
	$body               = $('body'),
	root_url            = window.T4Sroutes.root_url,
	windowWidth         = $window.width(),
	cacheNameFirst      = T4Sconfigs.cacheName+T4Sconfigs.cartCurrency+Shopify.country+root_url,
	IsScreen767Smaller  = (windowWidth < 768),
	isScreen1025Smaller = (windowWidth < 1025);
	
	isStorageSpSession    = isStorageSupported('session');
	isStorageSpSessionAll = isStorageSupported('session',false);
	isStorageSpdLocal     = isStorageSupported('local');
	isStorageSpdLocalAll  = isStorageSupported('local',false);

	if ( Shopify.theme.role == 'development' && isStorageSpSessionAll ) sessionStorage.clear();

	T4SThemeSP.$appendComponent = $('#t4s-append-component');
	T4SThemeSP.cacheNameFirst = cacheNameFirst;
	T4SThemeSP.root_url = (root_url != '/') ? root_url + '/' : '/';

	function isStorageSupported(type,bl = true) {
	    // Return false if we are in an iframe without access to sessionStorage 
	    // window.self !== window.top
	    if (IsDesignMode && bl) {
	      return false;
	    }

	    var storage = (type === 'session') ? window.sessionStorage : window.localStorage;

	    try {
	      storage.setItem('t4s', 'test');
	      storage.removeItem('t4s');
	      return true;
	    } catch (error) {
	      return false;
	    }
	};

	/*
	 * Shopify Common JS
	 *
	 */
	if ((typeof window.Shopify) == 'undefined') {
	  window.Shopify = {};
	}

	Shopify.bind = function(fn, scope) {
	  return function() {
	    return fn.apply(scope, arguments);
	  }
	};

	Shopify.setSelectorByValue = function(selector, value) {
	  for (var i = 0, count = selector.options.length; i < count; i++) {
	    var option = selector.options[i];
	    if (value == option.value || value == option.innerHTML) {
	      selector.selectedIndex = i;
	      return i;
	    }
	  }
	};

	Shopify.addListener = function(target, eventName, callback) {
	  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on'+eventName, callback);
	};

	Shopify.postLink = function(path, options) {
		  options = options || {};
		  var method = options['method'] || 'post';
		  var params = options['parameters'] || {};

		  var form = document.createElement("form");
		  form.setAttribute("method", method);
		  form.setAttribute("action", path);

		  for(var key in params) {
		    var hiddenField = document.createElement("input");
		    hiddenField.setAttribute("type", "hidden");
		    hiddenField.setAttribute("name", key);
		    hiddenField.setAttribute("value", params[key]);
		    form.appendChild(hiddenField);
		  }
		  document.body.appendChild(form);
		  form.submit();
		  document.body.removeChild(form);
	};

	Shopify.CountryProvinceSelector = function(country_domid, province_domid, options) {
	  this.countryEl         = document.getElementById(country_domid);
	  this.provinceEl        = document.getElementById(province_domid);
	  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);

	  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler,this));

	  this.initCountry();
	  this.initProvince();
	};

	Shopify.CountryProvinceSelector.prototype = {
	   initCountry: function() {
		    var value = this.countryEl.getAttribute('data-default');
		    Shopify.setSelectorByValue(this.countryEl, value);
		    this.countryHandler();
	   },

	   initProvince: function() {
		    var value = this.provinceEl.getAttribute('data-default');
		    if (value && this.provinceEl.options.length > 0) {
		      Shopify.setSelectorByValue(this.provinceEl, value);
		    }
	   },

	   countryHandler: function(e) {
		    var opt       = this.countryEl.options[this.countryEl.selectedIndex];
		    var raw       = opt.getAttribute('data-provinces');
		    var provinces = JSON.parse(raw);

		    this.clearOptions(this.provinceEl);
		    if (provinces && provinces.length == 0) {
		      this.provinceContainer.style.display = 'none';
		    } else {
		      for (var i = 0; i < provinces.length; i++) {
		        var opt = document.createElement('option');
		        opt.value = provinces[i][0];
		        opt.innerHTML = provinces[i][1];
		        this.provinceEl.appendChild(opt);
		      }

		      this.provinceContainer.style.display = "";
		    }
	   },

	   clearOptions: function(selector) {
		    while (selector.firstChild) {
		      selector.removeChild(selector.firstChild);
		    }
	   },

	   setOptions: function(selector, values) {
		    for (var i = 0, count = values.length; i < values.length; i++) {
		      var opt = document.createElement('option');
		      opt.value = values[i];
		      opt.innerHTML = values[i];
		      selector.appendChild(opt);
		    }
	   }
	};

  /**
   *-------------------------------------------------------------------------------------------------------------------------------------------
   * Helper Function
   *-------------------------------------------------------------------------------------------------------------------------------------------
   */

    // resizeEventT4
	T4SThemeSP.resizeEventT4 = function(func, wait, immediate) {
      try {
        // This doesn't work in Internet Explorer, where you'll have to do the longhand:
        window.dispatchEvent(new Event('resize'));
      }
      catch(err) {
        // Fixed in Internet Explorer
        var resizeEvent = window.document.createEvent('UIEvents'); 
       resizeEvent.initUIEvent('resize', true, false, window, 0); 
       window.dispatchEvent(resizeEvent);
      }
	};

	T4SThemeSP.debounce = function(wait, func, immediate) {
		var timeout;
		return function() {
			var context = this;
			var args = arguments;
			var later = function() {
				timeout = null;

				if (!immediate) {
					func.apply(context, args);
				}
			};
			var callNow = immediate && !timeout;

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);

			if (callNow) {
				func.apply(context, args);
			}
		};
	};

   T4SThemeSP.storageCurrency = function() {
      return (isStorageSpdLocal) ? localStorage.getItem('T4Currency') : null;
   };

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * fullHeight firt Section js
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
	T4SThemeSP.fullHeightFirtSe = function() {
	   var $parent = $("#MainContent >.t4s-section:first"),
	   $element = $parent.find(".t4s_ratio_fh");
	   if ($element.length ==0) return;

      var windowHeight, offsetTop, fullHeight;
      windowHeight = $window.height(); 
      offsetTop = $element.offset().top; 
      if (offsetTop < windowHeight) {
        fullHeight = 100 - offsetTop / (windowHeight / 100);
        $element.css("--t4s-aspect-ratio-fh", fullHeight + "vh");
        //$element.css("min-height", fullHeight + "vh");
      }
	};
   
   // T4SThemeSP.preventOverflow = (function() {

	// 	const classAddedHidden = 'is-added-hidden',
	// 	classAddedPadding      = 'is-added-padding',
	// 	resizeEvent            = 'resize.preventOh';

	// 	// if ( $window.scrollTop() > $('#MainContent').offset().top ) {
	// 	// 	$('.t4s-section-header').addClass('shopify-section-header-hidden animate');
	// 	// }

	// 	$body.append(`<style>.${classAddedPadding}{padding-left:var(--pdl-fx) !important;padding-right:var(--pdr-fx) !important}.${classAddedHidden}{overflow-x:hidden !important}body:not(.${classAddedHidden}){overflow-x:visible !important}</style>`);

   // 	function int() {

	//    	const windowWidth2 = $window.width();
	//    	$body.addClass(classAddedHidden);
	// 		$(`.${classAddedHidden},.${classAddedPadding}`).removeClass(classAddedHidden+' '+classAddedPadding);

	// 		$('.t4s-section-inner > .t4s-row, .t4s-section-inner >.t4s-container > .t4s-row').each(function( index ) {
	// 			 let $this = $(this),
	// 			 currentWidth = $this.width(),
	// 			 diffWidth = currentWidth - windowWidth2;

	// 			 if ( diffWidth <= 0 ) return;

	// 			 //let $parent = $this.closest('.t4s-container-fluid,.t4s-container-wrap,.t4s-container');
	// 			 let $parent = $this.closest('.t4s-container-fluid,.t4s-container');

	// 			 if ($parent.hasClass('is-not-overflow-important') || ($parent.hasClass('is-not-overflow') && windowWidth2 > 767) ) {
	// 				$parent.addClass(classAddedPadding);
	// 				$parent.css({
	// 				   '--pdl-fx' : diffWidth/2,
	// 				   '--pdr-fx' : diffWidth/2
	// 				});

	// 			 } else {
	// 			 	$parent.addClass(classAddedHidden);
	// 			 }
	// 		});
	//    	$body.removeClass(classAddedHidden);
   // 	}

   //    $window.on(resizeEvent, T4SThemeSP.debounce(300, function() {
   //      int();
   //    }.bind(this)));

   // 	return int;
	// })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * flickity js
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   // https://codepen.io/sarus/pen/rNmLBKe
   // https://flickity.metafizzy.co/options.html#selectedattraction-friction
   // T4SThemeSP.Flickityt4s = (function () {
       
   //    function initEach() {
   //    	return false;
   //    	var $Flickityt4s = $('.flickityt4s:not(.flickityt4s-later):not(.flickityt4s-enabled)');
   //    	if ($Flickityt4s.length == 0) return;

			// $Flickityt4s.each(function() {
			// 	init($(this));
			// });
   //    }

   //    function init(_this) {

			// if (windowWidth <= 1024 && _this.hasClass('disable-owl-mb-true') || _this.length == 0) return;

			// var $carousel    = _this,
			// option           = JSON.parse($carousel.attr("data-flickityt4s-js") || '{}'),
			// Isthumb          = option.isThum || false,
			// IsthumbVertical  = option.IsthumbVertical || false,
			// IdSlider         = option.t4sid || '19041994',
			// $previousButton  = $('.btn__prev--'+IdSlider),
			// $carouselNav     = $('.carousel__nav--'+IdSlider),
			// $nextButton      = $('.btn__next--'+IdSlider),
			// $cellButtonGroup = $('.btn_group--cells'+IdSlider),
			// $cellButtons     = $cellButtonGroup.find('.btn_dott4s'),
			// isWrapAround     = option.wrapAround || false,
			// isWrapAround     = option.wrapAround || false;

   //       // effect slider slide fade parallax distortion
   //       // add fade effect and rtl to option
   //       option.fade = $carousel.hasClass('t4s-slide-eff-fade');
   //       option.rightToLeft = isThemeRTL;

			// // bind event listener first
			// $carousel.on( 'ready.flickityt4s', function() {
			//   //console.log('Flickity ready');
			//   $document.trigger('T4sFlickityEnabled');
			//   if ($carousel.hasClass('slide-ani-distortion')) {
			//   	$document.trigger('T4sFlickityWebgl');
			//   }
			// });

			// // initialize Flickity
	  //     $carousel.flickityt4s(option);

	  //     var flkty = $carousel.data('flickityt4s');
			// setTimeout(function() {
			// 	$carousel.addClass('t4s-enabled');
			// }, 100);
         
   //       // custom thums
   //       if (Isthumb || IsthumbVertical) {
	  //        $carouselNav.on( 'click', '.t4s-carousel__nav--item', function( event ) {
	  //           $carousel.flickityt4s( 'select', $(this).index() );
	  //        });
   //       }
         
   //       // custom navigation UI with jQuery, disabled prev/next buttons
   //       if ($nextButton.length || $cellButtonGroup.length) {
		 //      // previous
		 //      $previousButton.on( 'click', function() {
		 //         $carousel.flickityt4s('previous');
		 //      });
		          
		 //      // next
		 //      $nextButton.on( 'click', function() {
		 //         $carousel.flickityt4s('next');
		 //      });

	  //        // update selected cellButtons
	  //        $carousel.on( 'select.flickityt4s', function() {
	  //            //console.log('select.flickityt4s')
	  //            // update dot selected
	  //            $cellButtons.filter('.is-selected').removeClass('is-selected');
	  //            $cellButtons.eq( flkty.selectedIndex ).addClass('is-selected');

	  //            // enable/disable previous/next buttons
	  //            if ( !flkty.cells[ flkty.selectedIndex - 1 ] && !isWrapAround) {
	  //              $previousButton.attr( 'disabled', 'disabled' );
	  //              $nextButton.removeAttr('disabled'); // <-- remove disabled from the next
	  //            } else if ( !flkty.cells[ flkty.selectedIndex +1 ] && !isWrapAround) {
	  //              $nextButton.attr( 'disabled', 'disabled' );
	  //              $previousButton.removeAttr('disabled'); //<-- remove disabled from the prev
	  //            } else {
	  //              $previousButton.removeAttr('disabled');
	  //              $nextButton.removeAttr('disabled');
	  //            }
	  //        });

	  //        // select cell on button click
	  //        $cellButtonGroup.on( 'click', '.btn_dott4s', function() {
	  //            $carousel.flickityt4s( 'select', $(this).index() );
	  //        });

   //       } // end if

   //       // https://codepen.io/Skoulix/pen/BRJRPd
   //       // Filter flickity: https://codepen.io/jeffglenn/pen/YYwMao
			// if ($carousel.hasClass('slide-eff-parallax')) {

			// 	if (IsScreen767Smaller) {
   //           var img_str = '.t4s-slide .t4s-img-as-bg.t4s-d-md-none';
			// 	} else {
   //           var img_str = '.t4s-slide .t4s-img-as-bg.t4s-d-md-block';
			// 	}

   //          var $imgs =  $carousel.find(img_str);
   //          if ($imgs.length == 0) return

			// 	$carousel.on('scroll.flickityt4s', function(event, progress) {

			// 		flkty.slides.forEach(function(e, i) {
			// 			var img = $imgs[i];

			// 			// var x = 0 === i
			// 			// 	? Math.abs(flkty.x) > flkty.slidesWidth
			// 			// 		? flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1].outerWidth + e.target
			// 			// 		: e.target + flkty.x
			// 			// 	: i === flkty.slides.length - 1 && Math.abs(flkty.x) + flkty.slides[i].outerWidth < flkty.slidesWidth
			// 			// 		? e.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth
			// 			// 		: e.target + flkty.x;
               
			// 			// img.style.transform = 'translateX( ' + x  + 'px)';
			// 			var x = ( e.target + flkty.x ) * -1/3;
			// 			img.style.transform = 'translateX( ' + x  + 'px)';
						
			// 		});

			// 	  // flkty.slides.forEach(function (slide, i) {
			// 	  //   var img = $imgs[i];
			// 	  //   var x = (slide.target + flkty.x) * -1/3;
			// 	  //   img.style.backgroundPosition = x + 'px';
			// 	  // });

			// 	  // flkty.slides.forEach( function( slide, i ) {
			// 	  //   var img = $imgs[i];
			// 	  //   var x = ( slide.target + flkty.x ) * -1/3;
			// 	  //   img.style.transform = 'translateX( ' + x  + 'px)';
			// 	  // });

			// 	});
			// } // end if
         
   //       /**
   //        * https://codepen.io/desandro/pen/bNyrqy
   //        */
			// var $galleryStatus = $('.carousel--status'+IdSlider);

			// if ($galleryStatus.length > 0) {
            
			// 	var $currentSlide = $galleryStatus.find('[data-current-slide]'),
			// 	$totalNumber      = $galleryStatus.find('[data-total-number]'),
			// 	optionPad         = option.pad || false;

			// 	function updateStatus() {

			// 	  var cellNumber = flkty.selectedIndex + 1,
			// 	      totalNumber = flkty.slides.length;
			// 	  if (optionPad) {
			// 	  	 cellNumber =  pad(cellNumber, 2);
			// 	  	 totalNumber =  pad(totalNumber, 2);
			// 	  }
			// 	  $currentSlide.text( cellNumber );
			// 	  $totalNumber.text( totalNumber );
			// 	}

			// 	// https://stackoverflow.com/questions/6466135/adding-extra-zeros-in-front-of-a-number-using-jquery
			// 	function pad (str, max) {
			// 	  str = str.toString();
			// 	  return str.length < max ? pad("0" + str, max) : str;
			// 	}
	  //        updateStatus();
			// 	$carousel.on( 'select.flickityt4s', updateStatus );

			// }

   //    } // end fuction int

   //    return {
   //      initEach: initEach,
   //      init: init
   //    };

   // })();
   // 
   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init Helper
    * https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
    * https://www.educative.io/answers/how-to-escape-unescape-html-characters-in-string-in-javascript
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */

	T4SThemeSP.handle = function(str) {
	  str = (str+'').toLowerCase();
	  var str_ = str.replace(/'|"|\(|\)|\[|\]/g,"").replace(/[\s\x21-\x2f\x3a-\x40\x7b-\x7f^`\\[\]]+/g,"-").replace(/\W+/g,"-").replace(/^-+|-+$/g,"");
	  return str_ == '' ? str : str_;
	};

	T4SThemeSP._handle = function(str) {
	  str = (str+'').toLowerCase();
	  var str_ = str.replace(/'|"|\(|\)|\[|\]/g,"").replace(/[\s\x21-\x2f\x3a-\x40\x7b-\x7f^`\\[\]]+/g,"_").replace(/\W+/g,"_").replace(/^-+|-+$/g,"");  
	  return str_ == '' ? str : str_;
	};

	T4SThemeSP.escapeHtml = function(str) {
      return str
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
   };

   T4SThemeSP.descapeHtml = function(str) {
	    return str
	         .replace(/&lt;/g , "<")
	         .replace(/&gt;/g , ">")
	         .replace(/&quot;/g , "\"")
	         .replace(/&#39;/g , "\'")
	         .replace(/&amp;/g , "&");
	};

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init Images
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
  
   T4SThemeSP.Images = (function() {
  
      /**
       * preloadImages
       */
      function preloadImages(arrayOfImages) {
         $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
         });
      }
  
      /**
       * Find the Shopify image attribute size
       */
      // function imageSize(src) {
      //    if (!src) {
      //      return '620x'; // default based on theme
      //    }
     
      //    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
     
      //    if (match !== null) {
      //      return match[1];
      //    } else {
      //      return null;
      //    }
      // }
     
      /**
       * Adds a Shopify size attribute to a URL
       */
      // function getSizedImageUrl(src, size) {
      //    if (!src) {
      //      return src;
      //    }
     
      //    if (size == null) {
      //      return src;
      //    }
     
      //    if (size === 'master') {
      //      return this.removeProtocol(src);
      //    }
     
      //    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
     
      //    if (match != null) {
      //      var prefix = src.split(match[0]);
      //      var suffix = match[0];
     
      //      return this.removeProtocol(prefix[0] + '_' + size + suffix);
      //    }
     
      //    return null;
      // }
     
      /**
       * Adds a Shopify size image_url URL
       */
      function getNewImageUrl(src, width = 0, height = 0) {

       	 if (!width && !height) return null;
         
         if (width) {
           src  = src + '&width=' + width;
         }
         
         if (height) {
           src  = src + '&height=' + height;
         }

         return this.removeProtocol(src);
      }
     
      function removeProtocol(path) {
         return path.replace(/http(s)?:/, '');
      }
     
      // function lazyloadImagePath(string) {
         
      //    if ( string.indexOf('_1x1.') > -1 ) {
      //      return string;
      //    }

      //    var image;
      //    if (string !== null) {
      //      image = string.replace(/(\.[^.]*)$/, "_1x1$1");
      //    }
     
      //    return image;
      // }
     
      function lazyloadImagePath(src) {
         return this.removeProtocol(src+'&width=1');
      }
     
      return {
			preloadImages    : preloadImages,
			// imageSize        : imageSize,
			// getSizedImageUrl : getSizedImageUrl,
			getNewImageUrl   : getNewImageUrl,
			removeProtocol   : removeProtocol,
			lazyloadImagePath: lazyloadImagePath
      };
   })();

   /**
    Follow Impulse
    */
   // http://rocha.la/JavaScript-bitwise-operators-in-practice
   T4SThemeSP.getUID = function(prefix) {
      do prefix += ~~(Math.random() * 1000000)
      while (document.getElementById(prefix))
      return prefix
   };

   T4SThemeSP.Carousel = (function() {

	   var classes = {
			animateOut : 'animate-out',
			isPlaying  : 'is--playing',
			isPaused   : 'is--paused',
			isActive   : 'is--active',
			isNavActive: 'is-nav-selected',
			isXrShowing: 'is-shopify-xr__showing',
			navItem    : 't4s-carousel__nav-item',
			selected   : 'is-selected'
	   },
	   selectors = {
	      currentSlide: `.${classes.selected}`,
	      wrapper: '.t4s-carousel-wrapper',
	      pauseButton: '.t4s-carousel__pause',
	      productMediaWrapper: '[data-product-single-media-wrapper]',
		   mediaGroup: '[data-product-single-media-group]',
	      dataMediaPlay: 'data-is-mediaPlay',
	      productMediaPlay: '[data-is-mediaPlay]'
	   },
	   defaults = {
	      adaptiveHeight: false,
	      autoPlay: false,
	      avoidReflow: false, // custom by Archetype

	      thumbNav: false, // nathan custom
	      thumbVertical: false, // nathan custom
	      navUI: false, // nathan custom
	      dotUI: false, // nathan custom
	      parallax: false, // nathan custom
	      status: false, // nathan custom
	      isMedia: false, // nathan custom
	      t4sid: '19041994', // nathan custom
	      t4sidTab: '19041994', // nathan custom
	      selectWithSelector: false , // nathan custom
	      scrollbar: false, // nathan custom
	      scrollbarDraggable: false, // nathan custom
	      fullwidthSide: false, // nathan custom
	      centerSlide: false, // nathan custom
	      isSimple: false , // nathan custom
	      minWidthLG: 19041994, // nathan custom
	      cellAlign: 'center',
	      cellAlignLG: 'left', // nathan custom
	      btnSmartTab: false, // nathan custom
	      activeTab: false, // nathan custom
	      customIcon: 0, // nathan custom
	      viewBox: '0 0 100 100', // nathan custom
	      checkVisibility: true, // nathan custom
	      autoPlayT4: false,
	      dragThreshold: 7,
	      fade: false,
	      friction: 0.8,
	      initialIndex: 0,
	      pageDots: false,
	      pauseAutoPlayOnHover: false,
	      prevNextButtons: false,
	      selectedAttraction: 0.14
	   },
	   eventT4S = {
	   	select    : 'select.carousel',
	   	clicknavUI: 'click.navt4s',
	   	clickdotUI: 'click.dott4s',
	   	clickThumb: 'click.thumbt4s'
	   },
	   mediaHide = 'is--media-hide',
	   jsonIcons = {
				'video'                :'<svg viewBox="0 0 384 512"><use href="#icon-thumb-video"/></svg>',
				'external_videoyoutube':'<svg viewBox="0 0 576 512"><use href="#icon-external-youtube"/></svg>',
				'external_videovimeo'  :'<svg viewBox="0 0 448 512"><use href="#icon-external-vimeo"/></svg>',
				'model'                :'<svg viewBox="0 0 512 512"><use href="#icon-thumb-model"/></svg>',
				'360'                  :'<svg viewBox="0 0 640 512"><use href="#icon-thumb-360"/></svg>'
		},
		resizeEvent,
		destroyEvent = 'destroy.t4s',
	   markup = '',
	   options = '{}',
	   addedThumbIcons = false,
	   supportSmoothScrolling = (window.CSS.supports('scroll-behavior', 'smooth')); // Supports smooth scrolling
	   const flickityt4sWrap = 'flickityt4s-viewport-wrap';
	   const objCellAlign = {
		  start: 'left',
		  end: 'right'
		};

   	function carousel(el) {
         
         // console.log(this)
	      this.el  = el;
	      this.$el = $(el);
	      this.UID = T4SThemeSP.getUID();
	      resizeEvent = 'resize.carousel'+ this.UID;

	      options  = JSON.parse( this.$el.attr("data-flickityt4s-js") || options);
         
	      // options 
	      this.args = Object.assign({}, defaults, options);

         // standardization start to left, end to right
         let _cellAlign   = this.args.cellAlign,
             _cellAlignLG = this.args.cellAlignLG;
         this.args.cellAlign = objCellAlign[_cellAlign] || _cellAlign;
         this.args.cellAlignLG = objCellAlign[_cellAlignLG] || _cellAlignLG;
         // end standardization
         
	      this.IdSlider = this.args.t4sid;
	      this.args.fade = this.$el.hasClass('t4s-slide-eff-fade') || this.args.fade;
         this.args.rightToLeft = isThemeRTL;
         this.$deferredMedia = this.$el.find(selectors.productMediaWrapper);

         if ( this.args.isMedia ) {
         	this.isMedia = (this.$el.find('[data-deferred-media]').length > 0 || this.$el.find('[data-media-type="360"]').length > 0);
         	if ( this.isMedia ) {
              this.$groupBtn = $(`[ data-t4s-group-btns="${this.args.t4sid}"]`);
              this.$mediaGroup= this.$el.closest(selectors.mediaGroup);
         	}
         }
         
         // Fix cuon anh khi loop o mobile
         // https://app.clickup.com/t/865bf8pyz
         if (this.args.wrapAround && isScreen1025Smaller ) {
         	this.args.dragThreshold = 55;
         }
  
	      // Setup listeners as part of arguments
	      this.args.on = {
	        ready: this.init.bind(this),
	        change: this.slideChange.bind(this),
	        select: this.slideSelect.bind(this),
	        settle: this.afterChange.bind(this)
	      };
	      
	      // Initialize thumb
	      if (this.args.thumbNav) this._initCarouselNav();
	  
	      if (this.args.avoidReflow) {
	        avoidReflow(el);
	      }

	      this.$wrapper  = this.$el.closest(selectors.wrapper);
	      this.wrapper   = this.$wrapper[0];
	      this.pauseBtn  = (this.wrapper) ? this.wrapper.querySelector(selectors.pauseButton) : null;
	      this.$pauseBtn = $(this.pauseBtn);
         this.isPlaying = (this.args.autoPlay || this.args.autoPlayT4);
         this.args.cellAlignOriginnal = this.args.cellAlign;

         // check cell align responsive
         this.hasMWLG = (this.args.minWidthLG != 19041994);
         if ( this.hasMWLG && this.args.minWidthLG <= $window.width() ) {
         	this.args.cellAlign = this.args.cellAlignLG;
         }

         // check center slide
         // if (this.args.centerSlide && this.args.wrapAround && this.$el.width() > windowWidth) {
         if (this.args.centerSlide && this.args.wrapAround) {
         	this.args.cellAlign = 'center';
         	this.args.cellAlignOriginnal = 'center';
         }

	      // Initialize Flickity
	      this.$carousel = this.$el.flickityt4s(this.args);

	      // get instance
	      this.flkty     = this.$carousel.data('flickityt4s');
         
         this.selectedIndex =  this.flkty.selectedIndex;

	      var self = this;
			setTimeout(function() {
				self.$el.addClass('t4s-enabled');
	         if (self.args.isSimple) {
	         	self.actionsAPI('resize');
	         	setTimeout( self.actionsAPI('resize') , 150);
	         }
	         // Initialize thumb
	         //if (self.args.thumbNav) self._initCarouselNav();
			}, 100);
	      this._selectChange();

	      if ( this.isPlaying && this.wrapper && this.pauseBtn) {
	        	//this.$pauseBtn = $(this.pauseBtn);
	         this.pauseBtn.addEventListener('click', this._togglePause.bind(this));
	      }

	      // custom navigation UI with jQuery, disabled prev/next buttons
	      if (this.args.navUI) this._customNavUI();

	      // custom dot UI with jQuery
	      if (this.args.dotUI) this._customDotUI();
         
         // Parallax Effect
	      if (this.args.parallax) this._parallaxEffect(); 
         
         // Status - eg:1/5
         if (this.args.status) this._status();

         if (this.args.isFilter) this._updateCarousel();
         if (this.args.btnSmartTab) this._updateBtnTab();
         if (this.args.prevNextButtons) this._customIcon( this.$carousel.find('.flickityt4s-button.previous'), this.$carousel.find('.flickityt4s-button.next') );

         if (this.args.selectWithSelector) this._selectWithSelector();

         if (this.args.scrollbar && !this.args.scrollbarDraggable) this._scrollbarCarousel();

         if (this.args.scrollbar && this.args.scrollbarDraggable) this._scrollbarDraggableCarousel();

         // if (this.args.fullwidthSide) this.fullwidthSide();
  
	      // Reset dimensions on resize
	      var orginThumbVertical = this.args.thumbVertical;

	      if ($window.width() < 1025 && orginThumbVertical ) {
	      	this.args.thumbVertical = false
	      }

	      $window.on(resizeEvent, T4SThemeSP.debounce(300, function() {
	        // check cell align self.flkty.options
            // console.log(self.flkty.options)
	        if ( self.hasMWLG ) {
                if ( self.args.minWidthLG <= $window.width() ) {
	         	self.flkty.options.cellAlign = self.args.cellAlignLG;
                } else {
                  self.flkty.options.cellAlign = self.args.cellAlignOriginnal;
                }
	         	//console.log(this.args.cellAlign)
	        }
	        self.actionsAPI('resize');
	        
	        //console.log( $window.width() )
	        if ($window.width() < 1025 && orginThumbVertical ) {
	        	self.args.thumbVertical = false
	        } else if ($window.width() > 1024 && orginThumbVertical) {
	        	self.args.thumbVertical = true
	        }
	        // if (self.args.fullwidthSide) self.fullwidthSide();
	      }.bind(this)));

	      self.$el.on(destroyEvent, self.destroy.bind(self) );
	  
	      // Set flickity-viewport height to first element to
	      // avoid awkward page reflows while initializing.
	      // Must be added in a `style` tag because element does not exist yet.
	      // Slideshow element must have an ID
	      function avoidReflow(el) {
	        if (!el.id) return;
	        var firstChild = el.firstChild;
	        while(firstChild != null && firstChild.nodeType == 3){ // skip TextNodes
	          firstChild = firstChild.nextSibling;
	        }
	        var style = document.createElement('style');
	        style.innerHTML = `#${el.id} .flickity-viewport{height:${firstChild.offsetHeight}px}`;
	        document.head.appendChild(style);
	      }
   	}
    
   	carousel.prototype = Object.assign({}, carousel.prototype, {
        
         init: function(el) {
	         var self = this;
	         self.currentSlide = self.el.querySelector(selectors.currentSlide);
	         if (self.args.autoPlayT4) self.autoPlayT4();
	         self.$pauseBtn.addClass(classes.isPlaying);
	  
	         // Optional onInit callback
	         if (self.args.callbacks && self.args.callbacks.onInit) {
		         if (typeof self.args.callbacks.onInit === 'function') {
		            self.args.callbacks.onInit(self.currentSlide);
		         }
	         }

         },

         slideChange: function(index) {
            var self = this;
	         // Match index with child nav
	         if (self.args.thumbNav) {
	           self.thumbnailsGoto(index);
	         }
  
	         // Optional onChange callback
	         if (self.args.callbacks && self.args.callbacks.onChange) {
	           if (typeof self.args.callbacks.onChange === 'function') {
	             self.args.callbacks.onChange(index);
	           }
	         }

	        // Show/hide arrows depending on selected index
	         if (self.$carouselNavPrev && self.$carouselNavPrev.length) {
	            self.$carouselNavPrev[0].classList.toggle('is--hide', index === 0);
	            self.$carouselNavNext[0].classList.toggle('is--hide', index === (self.$carouselNavLinks.length - 1));
	         }
	         // console.log(this)
	      	if (self.isMedia) self._switchMedia(index);

	         if (self.args.autoPlayT4) {

	         	self.autoPlayT4();
	         }
         },

         autoPlayT4: function() {
         	// console.log('autoPlayT4')
         	var self = this;
         	if (!self.time) {
         	   if (self.wrapper) self.wrapper.style.setProperty('--play-carousel-speed', `${self.args.autoPlayT4}ms`);
         		self.time = {};
         	}

         	// get current time format milliseconds
         	self.time.START = new Date().getTime();
         	// current tim milliseconds plus sale.stayTime
         	self.time.END   = self.time.START + self.args.autoPlayT4;
         	//console.log(sale.time.END, sale.stayTime)
         	// if (self.stayTimeout) clearTimeout(self.stayTimeout);
         	 
         	self.$pauseBtn.removeClass(classes.isPlaying)
         	if (self.isPlaying) {
         		clearTimeout(self.stayTimeout);
		         self.stayTimeout = setTimeout(function() {
		            // console.log('unloadSalesPopup run');
		            self.actionsAPI('next',true);
		         }, self.args.autoPlayT4);

		         //self.$pauseBtn.removeClass(classes.isPlaying)
		         clearTimeout(self.pauseBtnTimeout);
		         self.pauseBtnTimeout =setTimeout(function() {
		         	self.$pauseBtn.addClass(classes.isPlaying);
		         }, 20);
		      }

	         self.time.REMAINING = self.args.autoPlayT4;
         },

         slideSelect: function(index) {
         	//console.log(this.flkty )
         },

         afterChange: function(index) {
	        // Match index with child nav (in case slider height changed first)
	        // console.log(this.flkty)
	        if (this.args.thumbNav) {
	          this.thumbnailsGoto(this.flkty.selectedIndex);
	          
	        }

	        
         },

         destroy: function() {

	        if (this.$carouselNav) {
	        	 this.$carouselNav.find('.'+classes.isNavActive).removeClass(classes.isNavActive);
	        }
	        //console.log(this.actionsAPI)
	        this.actionsAPI('destroy');
	        this.$el.off(destroyEvent);
	        $window.off(resizeEvent);
         },

         _togglePause: function() {
            var self = this,
                textPause = self.$pauseBtn.data('pause-title'),
                textPlay  = self.$pauseBtn.data('play-title');

	         if (self.pauseBtn.classList.contains(classes.isPaused)) {
		         self.pauseBtn.classList.remove(classes.isPaused);
		         self.wrapper.classList.remove(classes.isPaused);
		         $('.t4s-tooltip .tooltip-inner').text(textPause);
		         self.pauseBtn.setAttribute('data-original-title',textPause);
		         self.isPlaying = true;
		         // this.actionsAPI('playPlayer');
		         if (self.args.autoPlayT4) {
		         	// update time end
		         	self.time.END = new Date().getTime() + self.time.REMAINING;
	               self.stayTimeout = setTimeout(function() {
	                  self.actionsAPI('next',true);
	               }, self.time.REMAINING);
		         }
	         } else {
		         self.wrapper.classList.add(classes.isPaused);
		         self.pauseBtn.classList.add(classes.isPaused);
		         $('.t4s-tooltip .tooltip-inner').text(textPlay);
		         self.pauseBtn.setAttribute('data-original-title',textPlay);
		         self.isPlaying = false;
		         //this.actionsAPI('pausePlayer');
		         if (self.args.autoPlayT4) {
		         	clearTimeout(self.stayTimeout);
		         	self.time.REMAINING = self.time.END - new Date().getTime();
		         }
	         }
	         if (self.isPlaying) self.$pauseBtn.addClass(classes.isPlaying);
         },

	      actionsAPI: function(action, bl = false) {
	      	this.$carousel.flickityt4s(action, bl);
	      },

	      _selectChange: function(index) {
            var self = this;
	      	// self.$carousel.on( 'select.flickityt4s', self.$carousel.trigger( eventT4S.select );
	      	self.$carousel.on( 'select.flickityt4s', function(event, index) {
	      		self.$carousel.trigger( eventT4S.select );
	      	});
	      },

	      _customNavUI: function($previousButton, $nextButton) {
				var self        = this,
				isWrapAround    = self.args.wrapAround || false;


				$previousButton = $previousButton || $('.btn__prev--'+self.IdSlider);
				$nextButton     = $nextButton || $('.btn__next--'+self.IdSlider);

				if ($nextButton.length == 0) return;

            self._customIcon( $previousButton, $nextButton );

		      // previous button click
		      $previousButton.on( eventT4S.clicknavUI, function() {
		         self.actionsAPI('previous');
		      });
		          
		      // next button click
		      $nextButton.on( eventT4S.clicknavUI, function() {
		      	self.actionsAPI('next');
		      });

	           // const selectedIndex = this.flkty.selectedIndex;
	           // if (selectedIndex == this.flkty.slides.length - 1) {
	           //     this.nextArrow.setAttribute('disabled', '');
	           // } else {
	           //     this.nextArrow.removeAttribute('disabled');
	           // }
	           // if (selectedIndex === 0) {
	           //     this.prevArrow.setAttribute('disabled', '');
	           // } else {
	           //     this.prevArrow.removeAttribute('disabled');
	           // }
            self._setButtonStatus( isWrapAround, $previousButton, $nextButton );
	         // Update previous/next buttons
	         self.$carousel.on( eventT4S.select, function() {
	            // enable/disable previous/next buttons
	            self._setButtonStatus( isWrapAround, $previousButton, $nextButton )
	         });
	      },

	      _setButtonStatus: function(isWrapAround, $previousButton, $nextButton) {
               // https://codepen.io/desandro/pen/VLPJqO
               // https://github.com/metafizzy/flickity/issues/289
	            // enable/disable previous/next buttons
	            // console.log(this.flkty.slides)
	            let $active = $nextButton.closest('[data-tab-active]'),
	            target = this.flkty.selectedCell.target;

	            $active.addClass('prev_next_added');
	            $active.removeClass('tab_prev_next_disable');
               // console.log(this.flkty.selectedIndex, this.flkty.cells)
	            if ( this.flkty.slides.length < 2) {
	            	$active.addClass('tab_prev_next_disable');
	            	$previousButton.attr( 'disabled', 'disabled' );
	            	$nextButton.attr( 'disabled', 'disabled' );
	            // } else if ( !this.flkty.cells[ this.flkty.selectedIndex - 1 ] && !isWrapAround) {
	            } else if ( target == this.flkty.cells[0].target && !isWrapAround) {
	            	// console.log('$previousButton disabled')
	               $previousButton.attr( 'disabled', 'disabled' );
	               $nextButton.removeAttr('disabled'); // <-- remove disabled from the next
	            // } else if ( !this.flkty.cells[ this.flkty.selectedIndex + 1 ] && !isWrapAround) {
	            } else if ( target == this.flkty.getLastCell().target && !isWrapAround) {
	            	// console.log('$nextButton disabled')
	               $nextButton.attr( 'disabled', 'disabled' );
	               $previousButton.removeAttr('disabled'); //<-- remove disabled from the prev
	            } else {
	               $previousButton.removeAttr('disabled');
	               $nextButton.removeAttr('disabled');
	            }

	      },

	      _customDotUI: function() {
				var  self        = this,
				$cellButtonGroup = $('.btn_group--cells'+self.IdSlider),
				$cellButtons     = $cellButtonGroup.find('.btn_dott4s');

				if ($cellButtons.length == 0) return;

				$cellButtons.eq( self.flkty.selectedIndex ).addClass(classes.selected);
		
				$cellButtonGroup.on( eventT4S.clickdotUI, '.btn_dott4s', function() {
				//$cellButtons.click(function(){
	            self.$carousel.flickityt4s( 'select', $(this).index() );
	         });

	         // Update dot selected
	         self.$carousel.on( eventT4S.select, function() {
	            $cellButtons.filter(`.${classes.selected}`).removeClass(classes.selected);
	            $cellButtons.eq( self.flkty.selectedIndex ).addClass(classes.selected);
	         });
	      },

	      _parallaxEffect: function() {

	         // https://codepen.io/Skoulix/pen/BRJRPd
	         // Filter flickity: https://codepen.io/jeffglenn/pen/YYwMao
	         var self = this;
				if ( !self.$carousel.hasClass('slide-eff-parallax') ) return;

				if (IsScreen767Smaller) {
             var img_str = '.t4s-slide .t4s-img-as-bg.t4s-d-md-none';
				} else {
             var img_str = '.t4s-slide .t4s-img-as-bg.t4s-d-md-block';
				}

            var $imgs =  self.$carousel.find(img_str);
            if ($imgs.length == 0) return

				self.$carousel.on('scroll.flickityt4s', function(event, progress) {

					self.flkty.slides.forEach(function(e, i) {
						var img = $imgs[i];
						var x = ( e.target + self.flkty.x ) * -1/3;
						img.style.transform = 'translateX( ' + x  + 'px)';
						
					});

				});
	      },

	      _status: function() {
	         /**
	          * https://codepen.io/desandro/pen/bNyrqy
	          */
	         var self       = this,
				$galleryStatus = $('.carousel--status'+self.IdSlider);

				if ($galleryStatus.length == 0) return;
	            
				var $currentSlide = $galleryStatus.find('[data-current-slide]'),
				$totalNumber      = $galleryStatus.find('[data-total-number]'),
				optionPad         = self.args.pad || false,
				cellNumber        = 0,
				totalNumber       = 0;

	         updateStatus();
				self.$carousel.on( eventT4S.select, updateStatus );


				function updateStatus() {

				  cellNumber = self.flkty.selectedIndex + 1,
				  totalNumber = self.flkty.slides.length;
				  if (optionPad) {
				  	 cellNumber =  pad(cellNumber, 2);
				  	 totalNumber =  pad(totalNumber, 2);
				  }
				  $currentSlide.text( cellNumber );
				  $totalNumber.text( totalNumber );
				}

				// https://stackoverflow.com/questions/6466135/adding-extra-zeros-in-front-of-a-number-using-jquery
				function pad (str, max) {
				  str = str.toString();
				  return str.length < max ? pad("0" + str, max) : str;
				}
				
	      },

	      _initCarouselNav: function() {

				var  self    = this;

				self.$carouselNav = $('.carousel__nav--'+self.IdSlider);
            
            // console.log('_initCarouselNav',this)
				// if (self.$carouselNav.length == 0 || self.flkty.slides.length < 2) return;
				if (self.$carouselNav.length == 0) return;
            if (!addedThumbIcons) { 
            	self.addThumbIcons() 
            }

            self.thumbnailsMarkup();

            // Setup first nav class active
            self.$carouselNavLinks.eq([self.args.initialIndex]).addClass(classes.isNavActive);
            //this.childNavLinks[self.args.initialIndex].classList.add('is-active');
  
	         // Setup optional arrows
	         self.$carouselNavPrev = $(`[data-thumb-btn__prev="${self.IdSlider}"]`);
	         self.$carouselNavNext = $(`[data-thumb-btn__next="${self.IdSlider}"]`);

	         if (this.$carouselNavPrev.length || this.$carouselNavNext.length) {
			      self.$carouselNavPrev.on( eventT4S.clickThumb, function() {
			         self.actionsAPI('previous');
			      });
			          
			      // next button click
			      self.$carouselNavNext.on( eventT4S.clickThumb, function() {
			      	self.actionsAPI('next');
			      });

	         }
  
            // Setup events
            if (self.args.isFilter) {

		         self.$carouselNav.on( eventT4S.clickThumb, '.'+classes.navItem, function( event ) {
		         	let index = self.$carouselNav.find(`.${classes.navItem}:visible`).index($(this));
		            self.$carousel.flickityt4s( 'select', index );
		         });

            } else {
		         self.$carouselNav.on( eventT4S.clickThumb, '.'+classes.navItem, function( event ) {
		            self.$carousel.flickityt4s( 'select', $(this).index() );
		         });
            }

	         // self.$carouselNav[0].addEventListener("wheel", self.eventWheel, {
	         //    passive: false,
	         // })
	         // 
	         // 
	         // self.$carouselNav[0].addEventListener('scroll', self.eventWheel, {
	         //    passive: false,
	         // })

			   // var previousScroll = 0;
			   // self.$carouselNav.scroll(function(){
			   //    var currentScroll = $(this).scrollTop();
			   //    if (currentScroll > previousScroll){
			   //       console.log('down');
			   //    } else {
			   //       console.log('up');
			   //    }
			   //    previousScroll = currentScroll;
			   // });

	      },

	      addThumbIcons: function() {
	      	var $tmpIcons =  $('template[data-icons-thumb]');

	      	if ($tmpIcons.length == 0 ) return;
	      	T4SThemeSP.$appendComponent.after( $tmpIcons.html() );
	      	addedThumbIcons = true;
	      },

	      thumbnailsMarkup: function() {
	      	var self = this;
	         markup = '';

	         self.$el.find('[data-main-slide]').each(function () {

				var $this     = $(this),
				isMediaHidden = $this.hasClass(mediaHide) ? mediaHide : '',
				mdtype        = $this.data('media-type'),
				vhost         = $this.data('vhost') || '',
				grname        = $this.data('grname') || '',
				grpvl         = $this.data('grpvl') || '',
				style         = $this.find('.t4s_ratio').attr('style'),
				image         = $this.find('img'),
				img           = T4SThemeSP.Images.lazyloadImagePath( image.attr('data-master') || image.attr('data-src') ),
				iconSvg       = jsonIcons[mdtype+vhost] || '';

	            markup += `<div class="t4s-col-item ${classes.navItem} ${isMediaHidden}" data-grname="${grname}" data-grpvl="${grpvl}" data-mdtype="${mdtype}" data-vhost="${vhost}"><div class="t4s_ratio t4s-carousel__nav-inner t4s-bg-11" style="${style};background: url(${img})"><img alt="${T4SThemeSP.escapeHtml(image.attr('alt'))}" loading="lazy" class="lazyloadt4s" data-src="${img}" data-widths="[80, 120, 160 ,180, 360, 540]" data-optimumx="1.8" data-sizes="auto" src="${img}"><span class="t4s-thumbnail__badge t4s-not-style t4s-op-0" aria-hidden="true">${iconSvg}</span></div></div>`
	         });
	         self.$carouselNav.empty().append(markup).addClass('is--nav-ready');
	         self.$carouselNavLinks = self.$carouselNav.find(`.${classes.navItem}:not(.is--media-hide):visible`);
	      },

	      thumbnailsGoto: function(index) {
             
            //console.log('thumbnailsGoto');
            
				var $el  = this.$carouselNavLinks.eq(index),
				el       = $el[0],
				timer    = 350;

            this.$carouselNavScroller = $(`[data-thumb__scroller="${this.IdSlider}"]`);
            
            this.$carouselNav.find('.'+classes.isNavActive).removeClass(classes.isNavActive);
            $el.addClass(classes.isNavActive);
            
            // console.log(this.args.thumbVertical)
	         if (this.args.thumbVertical) {

	           var elTop = el.offsetTop;
              if (supportSmoothScrolling) {
              	  this.$carouselNavScroller[0].scrollTop = elTop - 100;
              } else {
		           this.$carouselNavScroller.stop().animate({
			            scrollTop: elTop - 100
			        }, timer);
              }

	         } else {

	           var elLeft = el.offsetLeft;
              if (supportSmoothScrolling) {
              	  this.$carouselNavScroller[0].scrollLeft = elLeft - 100;
              } else {
		           this.$carouselNavScroller.stop().animate({
			            scrollLeft: elLeft - 100
			        }, timer);
              }

	         }

	      },

		   _switchMedia: function(index) {

            var $currentMedia = this.$el.find(`.flickityt4s-slider ${selectors.productMediaWrapper}`).eq(this.selectedIndex),
                $newMedia = this.$el.find(`.flickityt4s-slider ${selectors.productMediaWrapper}`).eq(index);
            
            //console.log( this.flkty, this.selectedIndex)
            // Update selectedIndex
            this.selectedIndex =  this.flkty.selectedIndex;

            // Update group btn
            this.$groupBtn.removeAttr('hidden');
            this.$mediaGroup.removeClass(classes.isXrShowing);
            this.flkty.options.draggable = true;

		      $(selectors.productMediaPlay).each(function () {
		      	//console.log(this)
			      this.dispatchEvent(
			        new CustomEvent('mediaHidden', {
			          bubbles: true,
			          cancelable: true
			        })
			      );
			      this.removeAttribute(selectors.dataMediaPlay);
		      });
            // console.log($newMedia)
            if ( !$newMedia.is('[data-deferred-media]') && !$newMedia.is('[data-media-type="360"]') ) {
               this.flkty.updateDraggable();
            	return;
            }
            
            this.flkty.options.draggable = false;
            this.flkty.updateDraggable();
            
             // Update group btn
            
            if ( $newMedia.is('[data-media-type="model"]') ) {
            	this.$mediaGroup.addClass(classes.isXrShowing);
            } else {
            	this.$groupBtn.attr('hidden',true);
            }

            $newMedia.attr(selectors.dataMediaPlay,'');
		      $newMedia[0].dispatchEvent(
		        new CustomEvent('mediaVisible', {
		          bubbles: true,
		          cancelable: true
		        })
		      );

		   },

		   _updateCarousel: function(index) {
           
            var self = this;
            self.$carousel.on( 'update.flickityt4s', function(event) {
              // self._initCarouselNav();
              // console.log(event)
              //var indexMedia = self.$carousel.find(`[data-media-id="${event.mediaID}"`).index();
           	  $(this).flickityt4s('deactivate').flickityt4s('activate');
           	  if (self.$carouselNav) self.$carouselNavLinks = self.$carouselNav.find(`.${classes.navItem}:not(.is--media-hide):visible`);
           });

         },

		   _updateBtnTab: function(index) {
           
            var self = this;
            // update button next prev when trigger carousel
            
				let $prevTabButton = $('#btn-tab-smart__prev--'+self.args.t4sidTab),
				$nextTabButton = $('#btn-tab-smart__next--'+self.args.t4sidTab);

				if ($nextTabButton.length == 0) return;

            self.$carousel.on( 'updateBtnTab.flickityt4s', function(event) {
               // buttonTabClass: ".btn-prev-{{section.id))",

					$prevTabButton.off( eventT4S.clicknavUI );
					$nextTabButton.off( eventT4S.clicknavUI );

           	   // $(this).flickityt4s('deactivate').flickityt4s('activate');
           	   self._customNavUI( $prevTabButton, $nextTabButton );
           	   self._customIcon( $prevTabButton, $nextTabButton );

            });
            if (self.args.activeTab) self.$carousel.trigger( 'updateBtnTab.flickityt4s');

         },
         
         _customIcon: function($prevButton , $nextButton) {
         	let _customIcon = this.args.customIcon;
            if (!_customIcon) return;
            let iconSVG_prev = `<svg viewBox="${this.args.viewBox}" class="flickitybee-button-icon bee-cus-icon-slider is--cus-ic-${_customIcon}"><use href="#svg-slider-btn___prev-${_customIcon}"></svg><span class="bee-flicky-btn-text">${BEEstrings.btn_prev}</span>`;
            let iconSVG_next = `<svg viewBox="${this.args.viewBox}" class="flickitybee-button-icon bee-cus-icon-slider is--cus-ic-${_customIcon}"><use href="#svg-slider-btn___next-${_customIcon}"></svg><span class="bee-flicky-btn-text">${BEEstrings.btn_next}</span>`;
            $prevButton.html(iconSVG_prev);
            $nextButton.html(iconSVG_next);

         },
         
        //  eventWheel: function(e) {
        //  	console.log(e)

				    // if (e.deltaY >= 0) {
				    //     console.log('Scroll bottom');
				    // }
				    // else {
				    //     console.log('Scroll top');
				    // }
        //    // https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/scroll-wheel-controls/javascript?file=/index.html:1660-1684
        //  },
         
         // select with selector
         // <button type="button" data-carousel-id="194"></button>
         // selectWithSelector : true
         _selectWithSelector: function() {
         	var self = this;
         	let $selector = $(`[data-carousel-id="${self.IdSlider}"]`);
            
            if ($selector.length == 0) return;

				$selector.on( 'click', function() {
				  // $selector.removeClass(classes.isActive);
				  // $(this).addClass(classes.isActive);
				  self.$carousel.flickityt4s( 'select', $(this).index() );
				});

	         // Update selector active
	         let $link = self.$carousel.find('[data-flickity-link]');
	         self.$carousel.on( eventT4S.select, function() {
	            $selector.filter(`.${classes.isActive}`).removeClass(classes.isActive);
	            $selector.eq( self.flkty.selectedIndex ).addClass(classes.isActive);

	            // Update link
	            let url = $( self.flkty.selectedElement ).data('url');
	            if ( $link[0] && url) $link.attr('href',  url );
	         });
         },
          
         // https://codepen.io/sarus/pen/yLpzpOP
         _scrollbarCarousel: function() {
            var self = this;
         	self.$scrollbar = $('.t4s-carousel-scrollbar--'+self.IdSlider);

            if (!self.$scrollbar[0]) return;

				// recalculate scrollbar size
            self.$scrollbarDrag = self.$scrollbar.find('.t4s-carousel-scrollbar__drag');
				self.scrollInnerSize = 0;
				self.recalculateScrollSizeTimeout;

			   function recalculateScrollSize() {

			    	clearTimeout(self.recalculateScrollSizeTimeout);

			    	self.recalculateScrollSizeTimeout = setTimeout(function() {
				      //self.$scrollbarDrag.width( self.flkty.size.width * self.flkty.size.width / self.flkty.slideableWidth );

	               self.$scrollbar.css({
	                  '--width': self.flkty.size.width * self.flkty.size.width / self.flkty.slideableWidth + 'px'
	               });

				      // hide scrollbar if don't needed
				      if ( self.flkty.size.width >= self.flkty.slideableWidth ) {
				        self.$scrollbar.addClass('is--hidden');
				      } else {
				        self.$scrollbar.removeClass('is--hidden');
				      }
				      self.scrollInnerSize = self.$scrollbarDrag.width() / self.$scrollbar.width();
			     }, 155); // flickity has debounce 150ms

			   }
				recalculateScrollSize();
			   // self.$carousel.on( 'ready.flickityt4s change.flickityt4s', recalculateScrollSize);
			   // $window.on('resize', recalculateScrollSize);
		      $window.on(`resize.scrollbar${self.IdSlider}`, T4SThemeSP.debounce(400, function() {

		        recalculateScrollSize();
		        // if (self.args.fullwidthSide) self.fullwidthSide();
		      }));

			   // set scrollbar position
			   self.$carousel.on('scroll.flickityt4s', function(event, progress) {
				   // self.$scrollbarDrag.css({
				   //    left: (progress * (1 - self.scrollInnerSize)) * 100 + '%'
				   // });
               self.$scrollbar.css({
                  '--left': (progress * (1 - self.scrollInnerSize)) * 100 + '%'
               });
			  });
			  //self.$carousel.flickityt4s('reposition');
			  
			  // scrollbar drag event.
         },
         
         // https://codepen.io/sarus/pen/jOzzLYd
         _scrollbarDraggableCarousel: function() {

         },

		   // fullwidthSide() {
		   //    const viewportEl = $(this.flkty.viewport);
		   //    const elementWidth = this.flkty.size.width - parseInt(this.$el.css('padding-left'), 10);
		   //    const viewportElOffset = viewportEl.offset();
		   //    const windowWidth1 = liquidWindowWidth();
		   //    const viewportElOffsetRight = windowWidth1 - (elementWidth + viewportElOffset.left);

		   //    // const margin = !this.isRTL ? 'marginRight' : 'marginLeft';
		   //    // const padding = !this.isRTL ? 'paddingRight' : 'paddingLeft';
		   //    const margin = !this.RtlThe4 ? 'marginRight' : 'marginLeft';
		   //    const padding = !this.RtlThe4 ? 'paddingRight' : 'paddingLeft';
		   //    let viewportElWrap = $(`<div class="${flickityt4sWrap}" />`);

		   //    if (!viewportEl.parent('.'+flickityt4sWrap).length) {
		   //      viewportEl.wrap(viewportElWrap);
		   //    }

		   //    viewportElWrap = viewportEl.parent();
		   //    viewportElWrap.css({
		   //      [margin]: '',
		   //      [padding]: ''
		   //    });

		   //    viewportElWrap.css({
		   //      [margin]: viewportElOffsetRight >= 0 ? (viewportElOffsetRight - 1) * -1 : viewportElOffsetRight - 1,
		   //      [padding]: Math.abs(viewportElOffsetRight - 1),
		   //      overflow: 'hidden'
		   //    });

		   //    viewportEl.css('overflow', 'visible');
		   //    //this.flkty.resize();
		   //    this.flkty.reposition();
		   // }

   	});
      
      return carousel;
   })();

   window.liquidWindowWidth = function () {
	  return window.innerWidth;
	};

   T4SThemeSP.initCarousel = function() {
   	var $flickityt4s = $('.flickityt4s:not(.flickityt4s-later):not(.flickityt4s-enabled)');
   	if ($flickityt4s.length == 0) return;

		$flickityt4s.each(function() {
			this.flickityt4s = new T4SThemeSP.Carousel(this);
		});
   };
   //}();
  
   // Init section function when it's visible, then disable observer
   T4SThemeSP.initWhenVisible = function(options) {
	   var threshold = options.threshold ? options.threshold : 0;
	  
	   var observer = new IntersectionObserver((entries, observer) => {
	      entries.forEach(entry => {
	        if (entry.isIntersecting) {
	          if (typeof options.callback === 'function') {
	            options.callback();
	            observer.unobserve(entry.target);
	          }
	        }
	    });
     }, {rootMargin: '0px 0px '+ threshold +'px 0px'});
  
     observer.observe(options.element);
   };
   // T4SThemeSP.initWhenVisible({
   //   element: this.container,
   //   callback: this.init.bind(this),
   //   threshold: 600
   // });

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * isotope js
    * T4SThemeSP.Isotopet4s.init
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   // https://isotope.metafizzy.co/events.html#isotope-events
	T4SThemeSP.Isotopet4s = (function () {



      function initEach() {
      	var $Isotopet4s = $('.isotopet4s:not(.isotopet4s-later):not(.isotopet4s-enabled)');

      	if ($Isotopet4s.length == 0) return;

			$Isotopet4s.each(function() {
				initISO($(this));
			});

			initFilter();
      }

      function initISO(_this) {
          _this.removeClass('isotopet4s-later');
	       var option = _this.attr("data-isotopet4s-js") || '{}',
	           $grid = _this.isotopet4s(JSON.parse(option)).addClass('isotopet4s-enabled');

	    //      $grid.one( 'arrangeComplete', function() {
			  //     // console.log('_this',_this);
			  //    _this.addClass('isotopet4s-enabled');
			  // });
      }

      /**
       * data-filter="*" data-filter=".t4s_filter_123"
       * class="t4s_filter_123"
       */
      function initFilter() {
           
			var str_isoFilter = '[data-isotopet4s-filter]',
			$isoFilter        = $(str_isoFilter);

         if ( $isoFilter.length == 0 ) return;

			var $isoClick     = IsDesignMode ? $body : $isoFilter,
			$btnClick         = IsDesignMode ? str_isoFilter+'>button' : '>button',
			classActive       = 'is--active';

         $isoClick.on( 'click', $btnClick, function() {
            
				var $this = $(this),
				$filter = $this.closest(str_isoFilter),
				grid = $filter.data('grid'),
				$grid = (grid) ? $(grid) : $filter.next();

            $filter.find('.'+classActive).removeClass(classActive);
            $this.addClass(classActive);

            $grid.isotopet4s({ filter: $this.attr('data-filter') });
         });
      }

      return {
			initEach: initEach,
			init    : initISO,
			filter  : initFilter
      };

	})();
	// $grid.isotope({ filter: '*' })

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Mobile responsive table
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
    T4SThemeSP.T4SWrappTable = function () {
       $("table:not('.t4s-table-res')").wrap("<div class='t4s-table-res-df'></div>");
    };

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * AccordionMobileInt js
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   T4SThemeSP.AccordionMobileInt = function() {
      var $accordion = $('.t4s-accordion-mb-true');
      if ($accordion.length == 0) return;
      
      if ($(window).width() <= 1024) {
         $accordion.removeClass('t4s-type-tabs').addClass('t4s-type-accordion');
      } else {
         $accordion.removeClass('t4s-type-accordion').addClass('t4s-type-tabs');
      }
   };


   T4SThemeSP.CartAttrHidden = function () {

		var $attr_rm = $('[data-cart-attr-rm]'),
		count        = 0;

      if ( $attr_rm.length == 0 || T4Sconfigs.CartAttrHidden) return;

      var loopfnsremove = setInterval(function() { 
        $attr_rm.val('');
        //console.log('loopfnsremove')
        if (count == 15) { clearInterval(loopfnsremove) }
        count++
      }, 500);
     
      $body.on('click', 'button[type=submit][name="checkout"]', function(e) {
       $attr_rm.val('');
      });

   };

   T4SThemeSP.announcement = function () {
   	var classes = {
	        bar: '.t4s-announcement-bar',
	        btnClose: '.t4s-announcement-bar__close'
        },
		$bar      = $(classes.bar),
		num_ver   = $bar.attr('data-ver'),
		themeName = T4Sconfigs.theme,
		txt_ver   = 't4s_announcement_'+ themeName +'_'+ num_ver,
		date      = parseInt($bar.attr('data-date'));

       if ( $bar.length == 0 || CookiesT4.get(txt_ver) == 'closed' ) return;
       
       var num_ver2 = (num_ver == '1_nt') ? '2_nt' : '1_nt',
           txt_ver2 = 't4s_announcement_'+ themeName +'_'+ num_ver2;

       if (CookiesT4.get(txt_ver2) == 'closed') CookiesT4.remove(txt_ver2);
       // if (CookiesT4.get(txt_ver) == 'closed') {
	      //  $bar.addClass("t4s-d-none").attr('aria-hidden',true);
      	// return;
       // }

	   $(classes.btnClose).on('click', function(e) {
	       $bar.css("min-height", "auto").attr('aria-hidden',true).slideUp();

	       if (!IsDesignMode) {
	       	CookiesT4.set( txt_ver, 'closed', { expires: date, path: '/' } ) 
	       }
	   });

   };

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Marquee3k js
    * https://minion-theme-vertical.myshopify.com/
    * https://habitat-main.myshopify.com/
    * 3/0 = Infinity
    * co the tham khao sau: https://github.com/ezekielaquino/Marquee3000/blob/master/marquee3k.js https://bullet1-openthinking.myshopify.com/
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   T4SThemeSP.Marquee3k = (function () {

   	var resizeEvent,
   	classes = {
   		enabled: 'marqueet4s-enabled',
   		animation: 't4s-marquee--animation',
   		duplicate:'t4s-marquee--duplicate'
   	};

      
      function marquee3k(el) {
         this.el = el;
      	this.$el = $(el);
      	this.width = 0;
	      this.UID = T4SThemeSP.getUID();
	      resizeEvent = 'resize.marquee'+ this.UID;
      	this.marquee3kItem = el.querySelector('.t4s-marquee__item');
         IsDesignMode ? setTimeout(this.resizeHandler.bind(this), 100) : this.resizeHandler();
         this.$el.addClass(classes.enabled);
         
         // window.addEventListener("resize", this.resizeHandler.bind(this), false);
         var self = this;
	      $window.on(resizeEvent, T4SThemeSP.debounce(300, function() {
	        self.resizeHandler();
	      }.bind(this)));

      }

      marquee3k.prototype = Object.assign({}, marquee3k.prototype, {
         
         resizeHandler: function() {

		    	if (this.width == window.innerWidth) return;

				this.width = window.innerWidth;
		    	this.marquee3kItem.classList.remove(classes.animation);
		    	var boxes = this.el.querySelectorAll('.'+classes.duplicate);
		    	if (boxes.length) {
		      	boxes.forEach(e => e.remove());
		    	}
		    	var length = window.innerWidth / this.marquee3kItem.offsetWidth,
		      clone = false;
		      length = length ==Infinity?5:length;

		    	for(var i=0; i < length; i++){
			      clone = this.marquee3kItem.cloneNode(true);
			      clone.setAttribute('aria-hidden',true);
			      clone.classList.add(classes.duplicate);
			      clone.classList.add(classes.animation);
			      this.el.append(clone);
		    	}
		    	this.marquee3kItem.classList.add(classes.animation);
         }

      });

      return marquee3k;

	})();

   T4SThemeSP.initMarquee3k = function() {
   	var $marquee = $('.t4s-marquee:not(.marqueet4s-enabled)');
   	if ($marquee.length == 0) return;

		$marquee.each(function() {
			this.marquee3k = new T4SThemeSP.Marquee3k(this);
		});
   };
   //}();

   T4SThemeSP.initVarHeight = function() {

   	var str_height = '[data-get-height]:not(.var-css-enabled)',
   	   $height     = $(str_height),
	      resizeEvent = 'resize.varHeight';

   	if ($height.length == 0) return;
      
      varHeight();

      $window.on(resizeEvent, T4SThemeSP.debounce(550, function() {
        // update $height
        $height = $(str_height);
        varHeight();

      }));

      
      function varHeight() {
			$height.each(function() {
				$(this).closest('.t4s-section').css("--var-t4s-height", $(this).height()+'px');
			});
		}

   };

   //T4SThemeSP.fixResponseForm = function() {
   let fixResponseForm = function() {
      if (window.location.search.indexOf('_posted=true') < 0 ) return;
      let recentform = localStorage.getItem("t4s-recentform") || "xyz";
		$(` form:not(${window.location.hash}):not(#${recentform})`).each(function(){
		   //console.log(this);
		   $(this).find('[data-t4s-response-form]').hide()
		})
   }();

   //T4SThemeSP.fixResponseForm = function() {
   let hidePreviewBar = function() {
      if (window.location.href.indexOf(T4Sconfigs.preViewBar) < 0 ) return;
		$('html').addClass('is--hidden-previewbar');
   }();

   T4SThemeSP.Helpers = (function() {
        // var touchDevice = false;

        // var classes = {
        //   preventScrolling: 'prevent-scrolling'
        // };

        // var scrollPosition = window.pageYOffset;

        // function setTouch() {
        //   touchDevice = true;
        // }

        // function isTouch() {
        //   return touchDevice;
        // }

        // function enableScrollLock() {
        //   scrollPosition = window.pageYOffset;
        //   document.body.style.top = '-' + scrollPosition + 'px';
        //   document.body.classList.add(classes.preventScrolling);
        // }

        // function disableScrollLock() {
        //   document.body.classList.remove(classes.preventScrolling);
        //   document.body.style.removeProperty('top');
        //   window.scrollTo(0, scrollPosition);
        // }
  
        // function lockMobileScrolling(namespace, element) {
        //   var el = element ? element : $document;
        //   $html.addClass('lock-scroll');
        //   $document.on('touchmove.' + namespace, function(e) {
        //     e.preventDefault();
        //     return true;
        //   });
        // }
        // // T4SThemeSP.Helpers.lockMobileScrolling(namespace);
      
        // function unlockMobileScrolling(namespace, element) {
        //   $html.removeClass('lock-scroll');
        //   var el = element ? element : $document;
        //   $document.off('touchmove.' + namespace);
        // }
        // function lockMobileScrolling(namespace, element) {
        //   var el = element ? element : document.documentElement;
        //   document.documentElement.classList.add('lock-scroll');
        //   el.on('touchmove' + namespace, function() {
        //     return true;
        //   });
        // }
      
        // function unlockMobileScrolling(namespace, element) {
        //   document.documentElement.classList.remove('lock-scroll');
        //   var el = element ? element : document.documentElement;
        //   el.off('touchmove' + namespace);
        // }
        
        // https://gist.github.com/thuijssoon/fd238517b487a45ce78d8f7ddfa7fee9
        function disableBodyScroll() {

            /**
             * Private variables
             */
            var _selector = false,
                _element = false,
                _clientY;

            /**
             * Polyfills for Element.matches and Element.closest
             */
            if (!Element.prototype.matches)
                Element.prototype.matches = Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector;

            if (!Element.prototype.closest)
                Element.prototype.closest = function (s) {
                    var ancestor = this;
                    if (!document.documentElement.contains(el)) return null;
                    do {
                        if (ancestor.matches(s)) return ancestor;
                        ancestor = ancestor.parentElement;
                    } while (ancestor !== null);
                    return el;
                };

            /**
             * Prevent default unless within _selector
             * 
             * @param  event object event
             * @return void
             */
            var preventBodyScroll = function (event) {
                if (false === _element || !event.target.closest(_selector)) {
                    event.preventDefault();
                }
            };

            /**
             * Cache the clientY co-ordinates for
             * comparison
             * 
             * @param  event object event
             * @return void
             */
            var captureClientY = function (event) {
                // only respond to a single touch
                if (event.targetTouches.length === 1) { 
                    _clientY = event.targetTouches[0].clientY;
                }
            };

            /**
             * Detect whether the element is at the top
             * or the bottom of their scroll and prevent
             * the user from scrolling beyond
             * 
             * @param  event object event
             * @return void
             */
            var preventOverscroll = function (event) {
                // only respond to a single touch
                if (event.targetTouches.length !== 1) {
                    return;
                }

                var clientY = event.targetTouches[0].clientY - _clientY;

                // The element at the top of its scroll,
                // and the user scrolls down
                if (_element.scrollTop === 0 && clientY > 0) {
                    event.preventDefault();
                }

                // The element at the bottom of its scroll,
                // and the user scrolls up
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
                if ((_element.scrollHeight - _element.scrollTop <= _element.clientHeight) && clientY < 0) {
                    event.preventDefault();
                }

            };

            /**
             * Disable body scroll. Scrolling with the selector is
             * allowed if a selector is porvided.
             * 
             * @param  boolean allow
             * @param  string selector Selector to element to change scroll permission
             * @return void
             */
            return function (allow, selector) {
                if (typeof selector !== "undefined") {
                    _selector = selector;
                    _element = document.querySelector(selector);
                }

                if (true === allow) {
                    if (false !== _element) {
                        _element.addEventListener('touchstart', captureClientY, false);
                        _element.addEventListener('touchmove', preventOverscroll, false);
                    }
                    document.body.addEventListener("touchmove", preventBodyScroll, false);
                } else {
                    if (false !== _element) {
                        _element.removeEventListener('touchstart', captureClientY, false);
                        _element.removeEventListener('touchmove', preventOverscroll, false);
                    }
                    document.body.removeEventListener("touchmove", preventBodyScroll, false);
                }
            };
        }

        function debounce(func, wait, immediate) {
          var timeout;

          return function() {
            var context = this,
              args = arguments;

            var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        }

        function getScript(source, beforeEl) {
          return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            var prior = beforeEl || document.getElementsByTagName('script')[0];

            script.async = true;
            script.defer = true;

            // eslint-disable-next-line shopify/prefer-early-return
            function onloadHander(_, isAbort) {
              if (
                isAbort ||
                !script.readyState ||
                /loaded|complete/.test(script.readyState)
              ) {
                script.onload = null;
                script.onreadystatechange = null;
                script = undefined;

                if (isAbort) {
                  reject();
                } else {
                  resolve();
                }
              }
            }

            script.onload = onloadHander;
            script.onreadystatechange = onloadHander;

            script.src = source;
            prior.parentNode.insertBefore(script, prior);
          });
        }

         function loadScript(url, callback) {
          if (url == undefined) return;
          $.ajax({
              url: url,
              dataType: 'script',
              success: callback,
              async: true
          });
         }

      /* Based on the prepareTransition by Jonathan Snook */
      /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
      function prepareTransition(element) {
       element.addEventListener(
         'transitionend',
         function(event) {
           event.currentTarget.classList.remove('is-transitioning');
         },
         { once: true }
       );

       var properties = [
         'transition-duration',
         '-moz-transition-duration',
         '-webkit-transition-duration',
         '-o-transition-duration'
       ];

       var duration = 0;

       properties.forEach(function(property) {
         var computedValue = getComputedStyle(element)[property];

         if (computedValue) {
           computedValue.replace(/\D/g, '');
           duration || (duration = parseFloat(computedValue));
         }
       });

       if (duration !== 0) {
         element.classList.add('is-transitioning');
         element.offsetWidth;
       }
      }

      /*!
      * Serialize all form data into a SearchParams string
      * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
      * @param  {Node}   form The form to serialize
      * @return {String}      The serialized form data
      */
      // function serialize(form) {
      //     var arr = [];
      //     Array.prototype.slice.call(form.elements).forEach(function(field) {
      //       if (
      //         !field.name ||
      //         field.disabled ||
      //         ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
      //       )
      //         return;
      //       if (field.type === 'select-multiple') {
      //         Array.prototype.slice.call(field.options).forEach(function(option) {
      //           if (!option.selected) return;
      //           arr.push(
      //             encodeURIComponent(field.name) +
      //               '=' +
      //               encodeURIComponent(option.value)
      //           );
      //         });
      //         return;
      //       }
      //       if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
      //         return;
      //       arr.push(
      //         encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
      //       );
      //     });
      //     return arr.join('&');
        
      // }

      function cookiesEnabled() {
          var cookieEnabled = navigator.cookieEnabled;

          if (!cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
          }

          return cookieEnabled;
      }
      
      function promiseStylesheet(stylesheet) {
          var stylesheetUrl = stylesheet,
              stylesheetName = stylesheetUrl.match(/[\w-]+\.(css)/g)[0],
              myTimeout = 100; // default:0
          // '/assets/mini-cart.css?v=94263984409177095751671607407' to mini-cart.css
          // var stylesheetUrl = stylesheet || theme.stylesheet;
          // https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
          // https://stackoverflow.com/questions/37807568/get-only-the-image-filename-from-a-url-with-regex [\w-]+.(jpg|png|txt)/g
          
          // console.log(this, this.stylesheetPromise)
          if (typeof T4SThemeSP.stylesheetPromise[stylesheetName] === 'undefined') {

            T4SThemeSP.stylesheetPromise[stylesheetName] = new Promise(function(resolve) {

				   let head  = document.getElementsByTagName('head')[0],
				   link  = document.createElement('link');

				   // link.id   = cssId;
				   link.rel  = 'stylesheet';
				   link.type = 'text/css';
				   link.href = stylesheetUrl;
				   link.media = 'all';

				   head.appendChild(link);
	            // var link = document.querySelector('link[href="' + stylesheetUrl + '"]');

              if (link.loaded) resolve();

              link.addEventListener('load', function() {
                setTimeout(resolve, myTimeout);
              });

            });
          }

          return T4SThemeSP.stylesheetPromise[stylesheetName];
      }

        return {
          // setTouch: setTouch,
          // isTouch: isTouch,
          // enableScrollLock: enableScrollLock,
          // disableScrollLock: disableScrollLock,
          // lockMobileScrolling: lockMobileScrolling,
          // unlockMobileScrolling: unlockMobileScrolling,
          disableBodyScroll: disableBodyScroll,
          debounce: debounce,
          getScript: getScript,
          loadScript: loadScript,
          prepareTransition: prepareTransition,
          // serialize: serialize,
          cookiesEnabled: cookiesEnabled,
          promiseStylesheet: promiseStylesheet
        };
        // Use T4SThemeSP.Helpers.setTouch() T4SThemeSP.Helpers.enableScrollLock()
   })();

   T4SThemeSP.stylesheetPromise = {}

   function JsonParse(str,str2) {
     return JSON.parse(str || str2 || '{}');
   };
   T4SThemeSP.Drawer = (function () {
      var classes = {
         overlayVisible: 'is--visible'
      };
      var isOpen   = false,
      click_drawer = 'click.drawer',
      keyup_drawer = 'keyup.drawer',
      data_options = 'data-drawer-options',
      data_delay   = 'data-drawer-delay',
      opend_drawer   = ' is--opend-drawer',
      $html           = $('html'),
      $overlay            = $('.t4s-close-overlay'),
      t4s_lock_scroll     = 't4s-lock-scroll',
      attr_data_scroll    = '[data-t4s-scroll-me]';

      function Opend(event, $this, isTrigger = false) {

         if (isOpen) return;

         if (event) {
            event.preventDefault();
         }
         var options = JsonParse( $this.attr(data_options) ),
             $drawer = isTrigger ? $this : $(options.id);
         
         // console.log(options,$drawer)
         $drawer.trigger('opendDrawer');
         $drawer.attr('aria-hidden', 'false');
         $overlay.addClass(classes.overlayVisible); 
         isOpen = true;

         $body.addClass(t4s_lock_scroll+opend_drawer);
         T4SThemeSP.Helpers.disableBodyScroll(true, attr_data_scroll);
      }

      function close(event) {

         if (!isOpen) return;

         if (event) {
            event.preventDefault();
         }

         var $drawerOpend = $('.t4s-drawer[aria-hidden=false]');

         $drawerOpend.attr('aria-hidden', 'true');
         $overlay.removeClass(classes.overlayVisible);
         isOpen = false;
         
         // $html.removeClass(t4s_lock_scroll+opend_drawer);
         $drawerOpend.one( 'transitionend webkitTransitionEnd oTransitionEnd', function( ) { 
            $body.removeClass(t4s_lock_scroll+opend_drawer);
            T4SThemeSP.Helpers.disableBodyScroll(false, attr_data_scroll);
         });
         
         // Remove listener close
         $overlay.off(click_drawer);
         $body.off(click_drawer);
         $body.off(keyup_drawer);
      }

      function removeDataDelay(id) {
         $('['+data_options+'*="#'+id+'"]').removeAttr(data_delay);
      }

      function openListener() {

         $document.on(click_drawer, '['+data_options+']:not(['+data_delay+'])', function(e) {
            Opend(e, $(this));
            // close Listener
            closeListener();
         });
         
         sidebarTrigger();
      }

      function opendTrigger($this) {
           isOpen = false;
            Opend(null, $this, true);
            // close Listener
            closeListener();
      }
      
      // function closeByEsc(event) {
      //   if (event.keyCode !== 27) return
      //    close();
      //    $body.off(keyup_drawer, closeByEsc);
        
      // }


      function closeListener() {

         // Close by button overlay
         $overlay.on(click_drawer, function(e) {
            close(e);
         });
         
         // Close by button close
         $body.on(click_drawer, '[data-drawer-close]', function(e) {
            close(e);
         });

         // Close by esc
        $body.on('keyup.drawer', function(e) {
            if (e.keyCode !== 27) return
            close(e);
         });
      }

      function sidebarTrigger() {

         let $trigger = $('[data-sidebar-trigger]'),
         $sidebar     = $('.t4s-btn-sidebar');

         if ( $trigger.length == 0 || $sidebar.length == 0 ) return;

         $trigger.on(click_drawer, function(e) {
            e.preventDefault();
            $sidebar.trigger(click_drawer);
         });

      }

      // return {
      //    init: function () {
      //       openListener();
      //    }
      // };

      return {
         init: openListener,
         opend: opendTrigger,
         close: close,
         remove: removeDataDelay
      };

   })();


//    class tickerHandler extends HTMLElement {
//   constructor() {
//     super();
//     this.width = 0;
//     this.ticker = this.querySelector('.ticker__container');
//     Shopify.designMode ? setTimeout(this.resizeHandler.bind(this), 100) : this.resizeHandler();
//     window.addEventListener("resize", this.resizeHandler.bind(this), false);
//   }
//   resizeHandler(){
//     if(this.width == window.innerWidth) return;
// 	this.width = window.innerWidth;
//     this.ticker.classList.remove('ticker--animation');
//     var boxes = this.querySelectorAll('.ticker--clone');
//     if(boxes.length){
//       boxes.forEach(e => e.remove());
//     }
//     var length = window.innerWidth / this.ticker.offsetWidth,
//         clone = false;
//     length = length==Infinity?5:length;
//     for(var i=0; i < length; i++){
//       clone = this.ticker.cloneNode(true);
//       clone.classList.add('ticker--clone');
//       clone.classList.add('ticker--animation');
//       this.append(clone);
//     }
//     this.ticker.classList.add('ticker--animation');
//   }
// }
// customElements.define('ticker-section', tickerHandler);


})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
   
   // lazySizesT4 load with 'async' need check loaded to run it
   // if (typeof lazySizesT4 != 'undefined') {
   // 	lazySizesT4.init();
   // } else {

	//    document.addEventListener('lazysizet4s:loaded', function(evt) {
	// 	  // console.log(evt.detail); 
	//      lazySizesT4.init();
	//    });
   // }
	// $(document).on('lazyloaded', function(e){
	// 	if ( $(e.target).hasClass('img_first_js') ) {
 //        $(e.target).parent().addClass('t4s-img-loaded')
	// 	}
	// });
   //setTimeout(function(){ $('.img_first_js').addClass('lazyloadt4s') }, 1000);
   // T4SThemeSP.preventOverflow();
   T4SThemeSP.fullHeightFirtSe();
   T4SThemeSP.initVarHeight();
   T4SThemeSP.initMarquee3k();
   //T4SThemeSP.Flickityt4s.initEach();
   T4SThemeSP.initCarousel();
   T4SThemeSP.Isotopet4s.initEach();
   T4SThemeSP.announcement();
   T4SThemeSP.T4SWrappTable();
   T4SThemeSP.CartAttrHidden();
   T4SThemeSP.Drawer.init();
  
	//$(window).resize();
	// T4SThemeSP.resizeEventT4();
   
   // Load Script
   if ('fetch' in window && 'assign' in Object && 'ResizeObserver' in window && 'IntersectionObserver' in window && 'DateTimeFormat' in Intl ) {
	  
	   $script(T4Sconfigs.script2, function () {
	     if (IsDesignMode) $script(T4Sconfigs.script9);
	     $script(T4Sconfigs.script10);
	   });

   } else {

	   $script(T4Sconfigs.script1, function () {
		  $script(T4Sconfigs.script2, function () {
		    if (IsDesignMode) $script(T4Sconfigs.script9);
		    $script(T4Sconfigs.script10);
		  })
		});

   }

   if ( $('[data-t4s-type]').length > 0 ) $script(T4Sconfigs.script12d);

});

jQuery_T4NT(window).on('resize', function() {
    // console.log('window resize')
   T4SThemeSP.AccordionMobileInt();
   //T4SThemeSP.preventOverflow();
});
