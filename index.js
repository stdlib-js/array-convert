// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).convertArray=e()}(this,(function(){"use strict";var r=Math.floor;function e(e){return r(e)===e}function t(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function c(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var y=Math.abs,p=String.prototype.toLowerCase,h=String.prototype.toUpperCase,g=String.prototype.replace,m=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,E=/\.0*e/,A=/(\..*[^0])0*e/;function T(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":y(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,A,"$1e"),t=g.call(t,E,"e"),t=g.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,m,"e+0$1"),t=g.call(t,w,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):p.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var j=String.fromCharCode,V=isNaN,k=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,i,o,a,f,l,y;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,l=0;l<r.length;l++)if(s(n=r[l]))a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(i=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,V(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!V(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(o)?String(n.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(B(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){return"string"==typeof r}function P(r){var e,t,n;if(!C(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return R.apply(null,t)}var F,O=Object.prototype,M=O.toString,U=O.__defineGetter__,N=O.__defineSetter__,Y=O.__lookupGetter__,W=O.__lookupSetter__;F=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var $=F;function G(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return Z&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var K=X()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[H]=t:delete r[H],n}:function(r){return J.call(r)};var Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function rr(r){return null!==r&&"object"==typeof r}function er(r){return rr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function tr(){return/^\s*function\s*([^(]*)/i}G(rr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(rr));var nr=/^\s*function\s*([^(]*)/i;function ir(r){var e,t,n;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=nr.exec(n.toString()))return e[1]}return er(r)?"Buffer":t}G(tr,"REGEXP",nr);var or={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ar="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr="function"==typeof Float64Array?Float64Array:void 0;var lr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(ar&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")},cr="function"==typeof Float32Array;var sr=Number.POSITIVE_INFINITY,yr="function"==typeof Float32Array?Float32Array:null;var pr="function"==typeof Float32Array?Float32Array:void 0;var hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,5e40]),t=e,r=(cr&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===sr}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},gr="function"==typeof Uint32Array;var mr="function"==typeof Uint32Array?Uint32Array:null;var wr="function"==typeof Uint32Array?Uint32Array:void 0;var br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(gr&&t instanceof Uint32Array||"[object Uint32Array]"===K(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")},vr="function"==typeof Int32Array;var dr="function"==typeof Int32Array?Int32Array:null;var Er="function"==typeof Int32Array?Int32Array:void 0;var Ar=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,2147483648]),t=e,r=(vr&&t instanceof Int32Array||"[object Int32Array]"===K(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")},Tr="function"==typeof Uint16Array;var _r="function"==typeof Uint16Array?Uint16Array:null;var xr="function"==typeof Uint16Array?Uint16Array:void 0;var jr=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Tr&&t instanceof Uint16Array||"[object Uint16Array]"===K(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")},Vr="function"==typeof Int16Array;var kr="function"==typeof Int16Array?Int16Array:null;var Lr="function"==typeof Int16Array?Int16Array:void 0;var Rr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr([1,3.14,-3.14,32768]),t=e,r=(Vr&&t instanceof Int16Array||"[object Int16Array]"===K(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Sr="function"==typeof Uint8Array;var Br="function"==typeof Uint8Array?Uint8Array:null;var Ir="function"==typeof Uint8Array?Uint8Array:void 0;var Cr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,256,257]),t=e,r=(Sr&&t instanceof Uint8Array||"[object Uint8Array]"===K(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")},Pr="function"==typeof Uint8ClampedArray;var Fr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Or="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Mr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Pr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===K(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")},Ur="function"==typeof Int8Array;var Nr="function"==typeof Int8Array?Int8Array:null;var Yr="function"==typeof Int8Array?Int8Array:void 0;var Wr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,128]),t=e,r=(Ur&&t instanceof Int8Array||"[object Int8Array]"===K(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};function $r(r){return"number"==typeof r}var Gr=Number,Zr=Gr.prototype.toString;var Xr=X();function Jr(r){return"object"==typeof r&&(r instanceof Gr||(Xr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function zr(r){return $r(r)||Jr(r)}G(zr,"isPrimitive",$r),G(zr,"isObject",Jr);var qr=Gr.NEGATIVE_INFINITY;function Dr(r){return r<sr&&r>qr&&e(r)}function Hr(r){return $r(r)&&Dr(r)}function Kr(r){return Jr(r)&&Dr(r.valueOf())}function Qr(r){return Hr(r)||Kr(r)}function re(r){return Hr(r)&&r>=0}function ee(r){return Kr(r)&&r.valueOf()>=0}function te(r){return re(r)||ee(r)}G(Qr,"isPrimitive",Hr),G(Qr,"isObject",Kr),G(te,"isPrimitive",re),G(te,"isObject",ee);function ne(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=4294967295}var ie="function"==typeof ArrayBuffer;function oe(r){return ie&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===K(r)}function ae(r){return"object"==typeof r&&null!==r&&!Q(r)}var ue=/./;function fe(r){return"boolean"==typeof r}var le=Boolean,ce=Boolean.prototype.toString;var se=X();function ye(r){return"object"==typeof r&&(r instanceof le||(se?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function pe(r){return fe(r)||ye(r)}function he(){return new Function("return this;")()}G(pe,"isPrimitive",fe),G(pe,"isObject",ye);var ge="object"==typeof self?self:null,me="object"==typeof window?window:null,we="object"==typeof global?global:null,be="object"==typeof globalThis?globalThis:null;var ve=function(r){if(arguments.length){if(!fe(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return he()}if(be)return be;if(ge)return ge;if(me)return me;if(we)return we;throw new Error("unexpected error. Unable to resolve global object.")}(),de=ve.document&&ve.document.childNodes,Ee=Int8Array;var Ae="function"==typeof ue||"object"==typeof Ee||"function"==typeof de?function(r){return ir(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ir(r).toLowerCase():e};function Te(r){return"function"===Ae(r)}function _e(r,e){if(!(this instanceof _e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!$r(r))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",r));if(!$r(e))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}G(_e,"BYTES_PER_ELEMENT",8),G(_e.prototype,"BYTES_PER_ELEMENT",8),G(_e.prototype,"byteLength",16),G(_e.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),G(_e.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var xe="function"==typeof Math.fround?Math.fround:null,je=new hr(1);var Ve="function"==typeof xe?xe:function(r){return je[0]=r,je[0]};function ke(r,e){if(!(this instanceof ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!$r(r))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",r));if(!$r(e))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ve(r)}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ve(e)}),this}function Le(r){return r instanceof _e||r instanceof ke||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Re(r){return e(r/2)}function Se(){return"function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator}G(ke,"BYTES_PER_ELEMENT",4),G(ke.prototype,"BYTES_PER_ELEMENT",4),G(ke.prototype,"byteLength",8),G(ke.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),G(ke.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Be=Se()?Symbol.iterator:null;function Ie(r,e,t){$(r,e,{configurable:!1,enumerable:!1,get:t})}function Ce(r){return r.re}function Pe(r){return r.im}function Fe(r,e){return new hr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Oe(r,e){return new lr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var Me={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Ue(r){var e=Me[r];return"function"==typeof e?e:Me.default}var Ne={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ye(r){var e=Ne[r];return"function"==typeof e?e:Ne.default}function We(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ne(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Le(n))return new TypeError(P("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ce(n),Pe(n))}return e}function $e(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ne(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Le(o))return new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ce(o),Pe(o))}return n}function Ge(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Le(n=e[i]))return null;r[o]=Ce(n),r[o+1]=Pe(n),o+=2}return r}var Ze=2*hr.BYTES_PER_ELEMENT,Xe=Se();function Je(r){return r instanceof He||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ze(r){return r===He||"Complex128Array"===r.name}function qe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ze}function De(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ze}function He(){var r,n,i,o;if(n=arguments.length,!(this instanceof He))return 0===n?new He:1===n?new He(arguments[0]):2===n?new He(arguments[0],arguments[1]):new He(arguments[0],arguments[1],arguments[2]);if(0===n)i=new hr(0);else if(1===n)if(re(arguments[0]))i=new hr(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&Q(i)&&Le(i[0])){if(null===(i=Ge(new hr(2*o),i))){if(!Re(o))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new hr(arguments[0])}}else{if(qe(i))i=Fe(i,0);else if(De(i))i=Oe(i,0);else if(!Re(o))throw new RangeError(P("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new hr(i)}else if(oe(arguments[0])){if(!e((i=arguments[0]).byteLength/Ze))throw new RangeError(P("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ze,i.byteLength));i=new hr(i)}else{if(!ae(arguments[0]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===Xe)throw new TypeError(P("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Te(i[Be]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!Te((i=i[Be]()).next))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=We(i))instanceof Error)throw i;i=new hr(i)}else{if(!oe(i=arguments[0]))throw new TypeError(P("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!re(r=arguments[1]))throw new TypeError(P("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!e(r/Ze))throw new RangeError(P("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ze,r));if(2===n){if(!e((o=i.byteLength-r)/Ze))throw new RangeError(P("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ze,o));i=new hr(i,r)}else{if(!re(o=arguments[2]))throw new TypeError(P("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*Ze>i.byteLength-r)throw new RangeError(P("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*Ze));i=new hr(i,r,2*o)}}return G(this,"_buffer",i),G(this,"_length",i.length/2),this}function Ke(r){return r.re}function Qe(r){return r.im}function rt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ne(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Le(n))return new TypeError(P("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ke(n),Qe(n))}return e}function et(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ne(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Le(o))return new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ke(o),Qe(o))}return n}function tt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Le(n=e[i]))return null;r[o]=Ke(n),r[o+1]=Qe(n),o+=2}return r}G(He,"BYTES_PER_ELEMENT",Ze),G(He,"name","Complex64Array"),G(He,"from",(function(r){var e,n,i,o,a,u,f,l,c,s,y,p;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Te(i=arguments[1]))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(Je(r)){if(l=r.length,i){for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Le(s=i.call(e,r.get(y),y)))a[p]=Ce(s),a[p+1]=Pe(s);else{if(!(ne(s)&&s.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(r)}if(t(r)){if(i){for(l=r.length,f=r.get&&r.set?Ye("default"):Ue("default"),y=0;y<l;y++)if(!Le(f(r,y))){c=!0;break}if(c){if(!Re(l))throw new RangeError(P("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,l));for(a=(o=new this(l/2))._buffer,y=0;y<l;y++)a[y]=i.call(e,f(r,y),y);return o}for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Le(s=i.call(e,f(r,y),y)))a[p]=Ce(s),a[p+1]=Pe(s);else{if(!(ne(s)&&s.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(r)}if(ae(r)&&Xe&&Te(r[Be])){if(!Te((a=r[Be]()).next))throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((u=i?$e(a,i,e):We(a))instanceof Error)throw u;for(a=(o=new this(l=u.length/2))._buffer,y=0;y<l;y++)a[y]=u[y];return o}throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),G(He,"of",(function(){var r,e;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ie(He.prototype,"buffer",(function(){return this._buffer.buffer})),Ie(He.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ie(He.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),G(He.prototype,"BYTES_PER_ELEMENT",He.BYTES_PER_ELEMENT),G(He.prototype,"copyWithin",(function(r,e){if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),G(He.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,G(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ke(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),G(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Be&&G(t,Be,(function(){return e.entries()})),t})),G(He.prototype,"get",(function(r){var e;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(P("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new ke((e=this._buffer)[r*=2],e[r+1])})),Ie(He.prototype,"length",(function(){return this._length})),G(He.prototype,"set",(function(r){var e,n,i,o,a,u,f,l,c;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!re(n=arguments[1]))throw new TypeError(P("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Le(r)){if(n>=this._length)throw new RangeError(P("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Ce(r),void(i[n+1]=Pe(r))}if(Je(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+n*Ze,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new hr(e.length),l=0;l<e.length;l++)o[l]=e[l];e=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError(P("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(u=r.length,l=0;l<u;l++)if(!Le(r[l])){a=!0;break}if(a){if(!Re(u))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+n*Ze,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new hr(u),l=0;l<u;l++)o[l]=e[l];e=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],i[n]=Ce(f),i[n+1]=Pe(f),n+=2}}));var nt=2*lr.BYTES_PER_ELEMENT,it=Se();function ot(r){return r instanceof lt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function at(r){return r===lt||"Complex64Array"===r.name}function ut(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt/2}function ft(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt}function lt(){var r,n,i,o;if(n=arguments.length,!(this instanceof lt))return 0===n?new lt:1===n?new lt(arguments[0]):2===n?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===n)i=new lr(0);else if(1===n)if(re(arguments[0]))i=new lr(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&Q(i)&&Le(i[0])){if(null===(i=tt(new lr(2*o),i))){if(!Re(o))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new lr(arguments[0])}}else{if(ut(i))i=Fe(i,0);else if(ft(i))i=Oe(i,0);else if(!Re(o))throw new RangeError(P("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new lr(i)}else if(oe(arguments[0])){if(!e((i=arguments[0]).byteLength/nt))throw new RangeError(P("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",nt,i.byteLength));i=new lr(i)}else{if(!ae(arguments[0]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===it)throw new TypeError(P("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Te(i[Be]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!Te((i=i[Be]()).next))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=rt(i))instanceof Error)throw i;i=new lr(i)}else{if(!oe(i=arguments[0]))throw new TypeError(P("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!re(r=arguments[1]))throw new TypeError(P("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!e(r/nt))throw new RangeError(P("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",nt,r));if(2===n){if(!e((o=i.byteLength-r)/nt))throw new RangeError(P("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",nt,o));i=new lr(i,r)}else{if(!re(o=arguments[2]))throw new TypeError(P("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*nt>i.byteLength-r)throw new RangeError(P("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*nt));i=new lr(i,r,2*o)}}return G(this,"_buffer",i),G(this,"_length",i.length/2),this}G(lt,"BYTES_PER_ELEMENT",nt),G(lt,"name","Complex128Array"),G(lt,"from",(function(r){var e,n,i,o,a,u,f,l,c,s,y,p;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Te(i=arguments[1]))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(ot(r)){if(l=r.length,i){for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Le(s=i.call(e,r.get(y),y)))a[p]=Ke(s),a[p+1]=Qe(s);else{if(!(ne(s)&&s.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(r)}if(t(r)){if(i){for(l=r.length,f=r.get&&r.set?Ye("default"):Ue("default"),y=0;y<l;y++)if(!Le(f(r,y))){c=!0;break}if(c){if(!Re(l))throw new RangeError(P("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",l));for(a=(o=new this(l/2))._buffer,y=0;y<l;y++)a[y]=i.call(e,f(r,y),y);return o}for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Le(s=i.call(e,f(r,y),y)))a[p]=Ke(s),a[p+1]=Qe(s);else{if(!(ne(s)&&s.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(r)}if(ae(r)&&it&&Te(r[Be])){if(!Te((a=r[Be]()).next))throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((u=i?et(a,i,e):rt(a))instanceof Error)throw u;for(a=(o=new this(l=u.length/2))._buffer,y=0;y<l;y++)a[y]=u[y];return o}throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),G(lt,"of",(function(){var r,e;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ie(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Ie(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ie(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),G(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),G(lt.prototype,"copyWithin",(function(r,e){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),G(lt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,G(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new _e(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),G(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Be&&G(t,Be,(function(){return e.entries()})),t})),G(lt.prototype,"get",(function(r){var e;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(P("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new _e((e=this._buffer)[r*=2],e[r+1])})),Ie(lt.prototype,"length",(function(){return this._length})),G(lt.prototype,"set",(function(r){var e,n,i,o,a,u,f,l,c;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!re(n=arguments[1]))throw new TypeError(P("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Le(r)){if(n>=this._length)throw new RangeError(P("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Ke(r),void(i[n+1]=Qe(r))}if(ot(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+n*nt,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new lr(e.length),l=0;l<e.length;l++)o[l]=e[l];e=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError(P("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(u=r.length,l=0;l<u;l++)if(!Le(r[l])){a=!0;break}if(a){if(!Re(u))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+n*nt,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new lr(u),l=0;l<u;l++)o[l]=e[l];e=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],i[n]=Ke(f),i[n+1]=Qe(f),n+=2}}));var ct=[lr,hr,Ar,br,Rr,jr,Wr,Cr,Mr,He,lt],st=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],yt=st.length;function pt(r){var e;if(Q(r))return"generic";if(er(r))return null;for(e=0;e<yt;e++)if(r instanceof ct[e])return st[e];return or[ir(r)]||null}var ht={float64:lr,float32:hr,generic:Array,int16:Rr,int32:Ar,int8:Wr,uint16:jr,uint32:br,uint8:Cr,uint8c:Mr,complex64:He,complex128:lt};function gt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var mt="function";function wt(r){return typeof r.get===mt&&typeof r.set===mt}var bt={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function vt(r){var e=bt[r];return"function"==typeof e?e:bt.default}var dt={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function Et(r){var e=dt[r];return"function"==typeof e?e:dt.default}function At(r){var e=function(r){var e=pt(r);return wt(r)?{accessorProtocol:!0,accessors:[Ye(e),Et(e)]}:{accessorProtocol:!1,accessors:[Ue(e),vt(e)]}}(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function Tt(r,e,t,n,i,o,a){var u,f,l,c,s,y,p;for(u=e.data,f=i.data,c=e.accessors[0],l=i.accessors[1],s=n,y=a,p=0;p<r;p++)l(f,y,c(u,s)),s+=t,y+=o;return e}function _t(r,e,t,n,i){var o,a,u,f,l,c;if(r<=0)return n;if(u=At(e),f=At(n),u.accessorProtocol||f.accessorProtocol)return Tt(r,u,t,o=t<0?(1-r)*t:0,f,i,a=i<0?(1-r)*i:0),f.data;if(1===t&&1===i){if((l=r%8)>0)for(c=0;c<l;c++)n[c]=e[c];if(r<8)return n;for(c=l;c<r;c+=8)n[c]=e[c],n[c+1]=e[c+1],n[c+2]=e[c+2],n[c+3]=e[c+3],n[c+4]=e[c+4],n[c+5]=e[c+5],n[c+6]=e[c+6],n[c+7]=e[c+7];return n}for(o=t<0?(1-r)*t:0,a=i<0?(1-r)*i:0,c=0;c<r;c++)n[a]=e[o],o+=t,a+=i;return n}function xt(r){return"complex64"===r}function jt(r){return"complex128"===r}return G(_t,"ndarray",(function(r,e,t,n,i,o,a){var u,f,l,c,s,y;if(r<=0)return i;if(l=At(e),c=At(i),l.accessorProtocol||c.accessorProtocol)return Tt(r,l,t,n,c,o,a),c.data;if(u=n,f=a,1===t&&1===o){if((s=r%8)>0)for(y=0;y<s;y++)i[f]=e[u],u+=t,f+=o;if(r<8)return i;for(y=s;y<r;y+=8)i[f]=e[u],i[f+1]=e[u+1],i[f+2]=e[u+2],i[f+3]=e[u+3],i[f+4]=e[u+4],i[f+5]=e[u+5],i[f+6]=e[u+6],i[f+7]=e[u+7],u+=8,f+=8;return i}for(y=0;y<r;y++)i[f]=e[u],u+=t,f+=o;return i})),function(r,e){var n,i,o,a,u,f;if(!t(r))throw new TypeError(gt("00V2O,GW",r));if("generic"===e)return function(r){var e,t,n,i,o;for(i=pt(r),n=wt(r)?Ye(i):Ue(i),t=r.length,e=[],o=0;o<t;o++)e.push(n(r,o));return e}(r);if(i=function(r){return ht[r]||null}(e),null===i)throw new TypeError(gt("00V2P,Mp",e));return u=r.length,n=xt(f=pt(r)),a=new i(u),n||jt(f)?(o=n?Fe(r,0):Oe(r,0),xt(e)?(_t(2*u,o,1,Fe(a,0),1),a):jt(e)?(_t(2*u,o,1,Oe(a,0),1),a):(_t(u,o,2,a,1),a)):(n=xt(e))||jt(e)?(_t(u,r,1,n?Fe(a,0):Oe(a,0),2),a):(_t(u,r,1,a,1),a)}}));
//# sourceMappingURL=index.js.map
