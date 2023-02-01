// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(e){return r(e)===e}function t(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,f=a.__defineGetter__,l=a.__defineSetter__,c=a.__lookupGetter__,y=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,s;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(c.call(r,e)||y.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,s="set"in t,o&&(i||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&f&&f.call(r,e,t.get),s&&l&&l.call(r,e,t.set),r};var s=o;function h(r,e,t){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return m&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function b(r,e){return null!=r&&w.call(r,e)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var d=p()?function(r){var e,t,n;if(null==r)return g.call(r);t=r[v],e=b(r,v);try{r[v]=void 0}catch(e){return g.call(r)}return n=g.call(r),e?r[v]=t:delete r[v],n}:function(r){return g.call(r)};var E=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};function A(r){return null!==r&&"object"==typeof r}function _(r){return A(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function T(){return/^\s*function\s*([^(]*)/i}h(A,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!E(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(A));var j=/^\s*function\s*([^(]*)/i;function x(r){var e,t,n;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=j.exec(n.toString()))return e[1]}return _(r)?"Buffer":t}h(T,"REGEXP",j);var B={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},L="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null;var S="function"==typeof Float64Array?Float64Array:void 0;var V=function(){var r,e,t;if("function"!=typeof R)return!1;try{e=new R([1,3.14,-3.14,NaN]),t=e,r=(L&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")},k="function"==typeof Float32Array;var I=Number.POSITIVE_INFINITY,C="function"==typeof Float32Array?Float32Array:null;var O="function"==typeof Float32Array?Float32Array:void 0;var M=function(){var r,e,t;if("function"!=typeof C)return!1;try{e=new C([1,3.14,-3.14,5e40]),t=e,r=(k&&t instanceof Float32Array||"[object Float32Array]"===d(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===I}catch(e){r=!1}return r}()?O:function(){throw new Error("not implemented")},U="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null;var N="function"==typeof Uint32Array?Uint32Array:void 0;var P=function(){var r,e,t;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")},Y="function"==typeof Int32Array;var W="function"==typeof Int32Array?Int32Array:null;var G="function"==typeof Int32Array?Int32Array:void 0;var J=function(){var r,e,t;if("function"!=typeof W)return!1;try{e=new W([1,3.14,-3.14,2147483648]),t=e,r=(Y&&t instanceof Int32Array||"[object Int32Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?G:function(){throw new Error("not implemented")},X="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var z="function"==typeof Uint16Array?Uint16Array:void 0;var D=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,65536,65537]),t=e,r=(X&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?z:function(){throw new Error("not implemented")},H="function"==typeof Int16Array;var K="function"==typeof Int16Array?Int16Array:null;var Q="function"==typeof Int16Array?Int16Array:void 0;var Z=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,32768]),t=e,r=(H&&t instanceof Int16Array||"[object Int16Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")},$="function"==typeof Uint8Array;var rr="function"==typeof Uint8Array?Uint8Array:null;var er="function"==typeof Uint8Array?Uint8Array:void 0;var tr=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr(e=[1,3.14,-3.14,256,257]),t=e,r=($&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")},nr="function"==typeof Uint8ClampedArray;var or="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ar=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or([-1,0,1,3.14,4.99,255,256]),t=e,r=(nr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===d(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")},ur="function"==typeof Int8Array;var fr="function"==typeof Int8Array?Int8Array:null;var lr="function"==typeof Int8Array?Int8Array:void 0;var cr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,128]),t=e,r=(ur&&t instanceof Int8Array||"[object Int8Array]"===d(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};function yr(r){return"number"==typeof r}var sr=Number,hr=sr.prototype.toString;var mr=p();function pr(r){return"object"==typeof r&&(r instanceof sr||(mr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===d(r)))}function gr(r){return yr(r)||pr(r)}h(gr,"isPrimitive",yr),h(gr,"isObject",pr);var wr=sr.NEGATIVE_INFINITY;function br(r){return r<I&&r>wr&&e(r)}function vr(r){return yr(r)&&br(r)}function dr(r){return pr(r)&&br(r.valueOf())}function Er(r){return vr(r)||dr(r)}function Ar(r){return vr(r)&&r>=0}function _r(r){return dr(r)&&r.valueOf()>=0}function Tr(r){return Ar(r)||_r(r)}h(Er,"isPrimitive",vr),h(Er,"isObject",dr),h(Tr,"isPrimitive",Ar),h(Tr,"isObject",_r);function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=4294967295}var xr="function"==typeof ArrayBuffer;function Br(r){return xr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===d(r)}function Lr(r){return"object"==typeof r&&null!==r&&!E(r)}var Rr=/./;function Sr(r){return"boolean"==typeof r}var Vr=Boolean.prototype.toString;var kr=p();function Ir(r){return"object"==typeof r&&(r instanceof Boolean||(kr?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function Cr(r){return Sr(r)||Ir(r)}function Or(){return new Function("return this;")()}h(Cr,"isPrimitive",Sr),h(Cr,"isObject",Ir);var Mr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Fr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Nr="object"==typeof Fr?Fr:null;var Pr=function(r){if(arguments.length){if(!Sr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Or()}if(Mr)return Mr;if(Ur)return Ur;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Pr.document&&Pr.document.childNodes,Wr=Int8Array;var Gr="function"==typeof Rr||"object"==typeof Wr||"function"==typeof Yr?function(r){return x(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?x(r).toLowerCase():e};function Jr(r){return"function"===Gr(r)}function Xr(r,e){if(!(this instanceof Xr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!yr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!yr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return s(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),s(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}h(Xr,"BYTES_PER_ELEMENT",8),h(Xr.prototype,"BYTES_PER_ELEMENT",8),h(Xr.prototype,"byteLength",16),h(Xr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),h(Xr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var qr="function"==typeof Math.fround?Math.fround:null,zr=new M(1);var Dr="function"==typeof qr?qr:function(r){return zr[0]=r,zr[0]};function Hr(r,e){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!yr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!yr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return s(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),s(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),this}function Kr(r){return r instanceof Xr||r instanceof Hr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Qr(r){return e(r/2)}function Zr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}h(Hr,"BYTES_PER_ELEMENT",4),h(Hr.prototype,"BYTES_PER_ELEMENT",4),h(Hr.prototype,"byteLength",8),h(Hr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),h(Hr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var $r=Zr()?Symbol.iterator:null;function re(r,e,t){s(r,e,{configurable:!1,enumerable:!1,get:t})}function ee(r){return r.re}function te(r){return r.im}function ne(r,e){return new M(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function oe(r,e){return new V(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ie(r,e){return r[e]}function ae(r,e){return r.get(e)}function ue(r,e,t){r[e]=t}function fe(r,e,t){r.set(t,e)}function le(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ae:ie,setter:e?fe:ue}}function ce(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ee(n),te(n))}return e}function ye(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,jr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!Kr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ee(i),te(i))}return n}function se(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Kr(n=e[o]))return null;r[i]=ee(n),r[i+1]=te(n),i+=2}return r}var he=2*M.BYTES_PER_ELEMENT,me=Zr();function pe(r){return r instanceof ve||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ge(r){return r===ve||"Complex128Array"===r.name}function we(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===he}function be(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*he}function ve(){var r,n,o,i;if(n=arguments.length,!(this instanceof ve))return 0===n?new ve:1===n?new ve(arguments[0]):2===n?new ve(arguments[0],arguments[1]):new ve(arguments[0],arguments[1],arguments[2]);if(0===n)o=new M(0);else if(1===n)if(Ar(arguments[0]))o=new M(2*arguments[0]);else if(t(arguments[0]))if((i=(o=arguments[0]).length)&&E(o)&&Kr(o[0])){if(null===(o=se(new M(2*i),o))){if(!Qr(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");o=new M(arguments[0])}}else{if(we(o))o=ne(o,0);else if(be(o))o=oe(o,0);else if(!Qr(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");o=new M(o)}else if(Br(arguments[0])){if(!e((o=arguments[0]).byteLength/he))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+he+". Byte length: `"+o.byteLength+"`.");o=new M(o)}else{if(!Lr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(o=arguments[0],!1===me)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+o+"`.");if(!Jr(o[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+o+"`.");if(!Jr((o=o[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((o=ce(o))instanceof Error)throw o;o=new M(o)}else{if(!Br(o=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+o+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!e(r/he))throw new RangeError("invalid argument. Byte offset must be a multiple of "+he+". Value: `"+r+"`.");if(2===n){if(!e((i=o.byteLength-r)/he))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+he+". View byte length: `"+i+"`.");o=new M(o,r)}else{if(!Ar(i=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*he>o.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*he+"`.");o=new M(o,r,2*i)}}return h(this,"_buffer",o),h(this,"_length",o.length/2),this}function de(r){return r.re}function Ee(r){return r.im}function Ae(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(de(n),Ee(n))}return e}function _e(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,jr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!Kr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(de(i),Ee(i))}return n}function Te(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Kr(n=e[o]))return null;r[i]=de(n),r[i+1]=Ee(n),i+=2}return r}h(ve,"BYTES_PER_ELEMENT",he),h(ve,"name","Complex64Array"),h(ve,"from",(function(r){var e,n,o,i,a,u,f,l,c,y,s;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Jr(o=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+o+"`.");n>2&&(e=arguments[2])}if(pe(r)){if(f=r.length,o){for(a=(i=new this(f))._buffer,s=0,y=0;y<f;y++){if(Kr(c=o.call(e,r.get(y),y)))a[s]=ee(c),a[s+1]=te(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");a[s]=c[0],a[s+1]=c[1]}s+=2}return i}return new this(r)}if(t(r)){if(o){for(f=r.length,u=le(r),y=0;y<f;y++)if(!Kr(u.getter(r,y))){l=!0;break}if(l){if(!Qr(f))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+f+"`.");for(a=(i=new this(f/2))._buffer,y=0;y<f;y++)a[y]=o.call(e,u.getter(r,y),y);return i}for(a=(i=new this(f))._buffer,s=0,y=0;y<f;y++){if(Kr(c=o.call(e,u.getter(r,y),y)))a[s]=ee(c),a[s+1]=te(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");a[s]=c[0],a[s+1]=c[1]}s+=2}return i}return new this(r)}if(Lr(r)&&me&&Jr(r[$r])){if(!Jr((a=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((u=o?ye(a,o,e):ce(a))instanceof Error)throw u;for(a=(i=new this(f=u.length/2))._buffer,y=0;y<f;y++)a[y]=u[y];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),h(ve,"of",(function(){var r,e;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(ve.prototype,"buffer",(function(){return this._buffer.buffer})),re(ve.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(ve.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),h(ve.prototype,"BYTES_PER_ELEMENT",ve.BYTES_PER_ELEMENT),h(ve.prototype,"copyWithin",(function(r,e){if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),h(ve.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,h(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Hr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),h(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&h(t,$r,(function(){return e.entries()})),t})),h(ve.prototype,"get",(function(r){var e;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Hr((e=this._buffer)[r*=2],e[r+1])})),re(ve.prototype,"length",(function(){return this._length})),h(ve.prototype,"set",(function(r){var e,n,o,i,a,u,f,l,c;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,arguments.length>1){if(!Ar(n=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(Kr(r)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return o[n*=2]=ee(r),void(o[n+1]=te(r))}if(pe(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=o.byteOffset+n*he,e.buffer===o.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new M(e.length),l=0;l<e.length;l++)i[l]=e[l];e=i}for(n*=2,c=0,l=0;l<u;l++)o[n]=e[c],o[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(u=r.length,l=0;l<u;l++)if(!Kr(r[l])){a=!0;break}if(a){if(!Qr(u))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+u+"`.");if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=o.byteOffset+n*he,e.buffer===o.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new M(u),l=0;l<u;l++)i[l]=e[l];e=i}for(n*=2,u/=2,c=0,l=0;l<u;l++)o[n]=e[c],o[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],o[n]=ee(f),o[n+1]=te(f),n+=2}}));var je=2*V.BYTES_PER_ELEMENT,xe=Zr();function Be(r){return r instanceof Ve||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Le(r){return r===Ve||"Complex64Array"===r.name}function Re(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je/2}function Se(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je}function Ve(){var r,n,o,i;if(n=arguments.length,!(this instanceof Ve))return 0===n?new Ve:1===n?new Ve(arguments[0]):2===n?new Ve(arguments[0],arguments[1]):new Ve(arguments[0],arguments[1],arguments[2]);if(0===n)o=new V(0);else if(1===n)if(Ar(arguments[0]))o=new V(2*arguments[0]);else if(t(arguments[0]))if((i=(o=arguments[0]).length)&&E(o)&&Kr(o[0])){if(null===(o=Te(new V(2*i),o))){if(!Qr(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");o=new V(arguments[0])}}else{if(Re(o))o=ne(o,0);else if(Se(o))o=oe(o,0);else if(!Qr(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");o=new V(o)}else if(Br(arguments[0])){if(!e((o=arguments[0]).byteLength/je))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+je+". Byte length: `"+o.byteLength+"`.");o=new V(o)}else{if(!Lr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(o=arguments[0],!1===xe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+o+"`.");if(!Jr(o[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+o+"`.");if(!Jr((o=o[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((o=Ae(o))instanceof Error)throw o;o=new V(o)}else{if(!Br(o=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+o+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!e(r/je))throw new RangeError("invalid argument. Byte offset must be a multiple of "+je+". Value: `"+r+"`.");if(2===n){if(!e((i=o.byteLength-r)/je))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+je+". View byte length: `"+i+"`.");o=new V(o,r)}else{if(!Ar(i=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*je>o.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*je+"`.");o=new V(o,r,2*i)}}return h(this,"_buffer",o),h(this,"_length",o.length/2),this}h(Ve,"BYTES_PER_ELEMENT",je),h(Ve,"name","Complex128Array"),h(Ve,"from",(function(r){var e,n,o,i,a,u,f,l,c,y,s;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Jr(o=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+o+"`.");n>2&&(e=arguments[2])}if(Be(r)){if(f=r.length,o){for(a=(i=new this(f))._buffer,s=0,y=0;y<f;y++){if(Kr(c=o.call(e,r.get(y),y)))a[s]=de(c),a[s+1]=Ee(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");a[s]=c[0],a[s+1]=c[1]}s+=2}return i}return new this(r)}if(t(r)){if(o){for(f=r.length,u=le(r),y=0;y<f;y++)if(!Kr(u.getter(r,y))){l=!0;break}if(l){if(!Qr(f))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+f+"`.");for(a=(i=new this(f/2))._buffer,y=0;y<f;y++)a[y]=o.call(e,u.getter(r,y),y);return i}for(a=(i=new this(f))._buffer,s=0,y=0;y<f;y++){if(Kr(c=o.call(e,u.getter(r,y),y)))a[s]=de(c),a[s+1]=Ee(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");a[s]=c[0],a[s+1]=c[1]}s+=2}return i}return new this(r)}if(Lr(r)&&xe&&Jr(r[$r])){if(!Jr((a=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((u=o?_e(a,o,e):Ae(a))instanceof Error)throw u;for(a=(i=new this(f=u.length/2))._buffer,y=0;y<f;y++)a[y]=u[y];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),h(Ve,"of",(function(){var r,e;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(Ve.prototype,"buffer",(function(){return this._buffer.buffer})),re(Ve.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(Ve.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),h(Ve.prototype,"BYTES_PER_ELEMENT",Ve.BYTES_PER_ELEMENT),h(Ve.prototype,"copyWithin",(function(r,e){if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),h(Ve.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,h(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Xr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),h(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&h(t,$r,(function(){return e.entries()})),t})),h(Ve.prototype,"get",(function(r){var e;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Xr((e=this._buffer)[r*=2],e[r+1])})),re(Ve.prototype,"length",(function(){return this._length})),h(Ve.prototype,"set",(function(r){var e,n,o,i,a,u,f,l,c;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,arguments.length>1){if(!Ar(n=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+n+"`.")}else n=0;if(Kr(r)){if(n>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+n+"`.");return o[n*=2]=de(r),void(o[n+1]=Ee(r))}if(Be(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=o.byteOffset+n*je,e.buffer===o.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new V(e.length),l=0;l<e.length;l++)i[l]=e[l];e=i}for(n*=2,c=0,l=0;l<u;l++)o[n]=e[c],o[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(u=r.length,l=0;l<u;l++)if(!Kr(r[l])){a=!0;break}if(a){if(!Qr(u))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+u+"`.");if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=o.byteOffset+n*je,e.buffer===o.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new V(u),l=0;l<u;l++)i[l]=e[l];e=i}for(n*=2,u/=2,c=0,l=0;l<u;l++)o[n]=e[c],o[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],o[n]=de(f),o[n+1]=Ee(f),n+=2}}));var ke=[V,M,J,P,Z,D,cr,tr,ar,ve,Ve],Ie=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Ce=Ie.length;var Oe={float64:V,float32:M,generic:Array,int16:Z,int32:J,int8:cr,uint16:D,uint32:P,uint8:tr,uint8c:ar,complex64:ve,complex128:Ve};function Me(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Ue(r,e,t,n,o,i,a){var u,f,l,c,y,s,h;for(u=e.data,f=o.data,c=e.getter,l=o.setter,y=n,s=a,h=0;h<r;h++)l(f,s,c(u,y)),y+=t,s+=i;return e}function Fe(r,e,t,n,o){var i,a,u,f,l,c;if(r<=0)return n;if(u=le(e),f=le(n),u.accessors||f.accessors)return Ue(r,u,t,i=t<0?(1-r)*t:0,f,o,a=o<0?(1-r)*o:0),f.data;if(1===t&&1===o){if((l=r%8)>0)for(c=0;c<l;c++)n[c]=e[c];if(r<8)return n;for(c=l;c<r;c+=8)n[c]=e[c],n[c+1]=e[c+1],n[c+2]=e[c+2],n[c+3]=e[c+3],n[c+4]=e[c+4],n[c+5]=e[c+5],n[c+6]=e[c+6],n[c+7]=e[c+7];return n}for(i=t<0?(1-r)*t:0,a=o<0?(1-r)*o:0,c=0;c<r;c++)n[a]=e[i],i+=t,a+=o;return n}function Ne(r){return"complex64"===r}function Pe(r){return"complex128"===r}function Ye(r,e){var n,o,i,a,u,f;if(!t(r))throw new TypeError(Me("00F2a",r));if("generic"===e)return function(r){var e;return(e=le(r)).accessors?function(r){var e,t,n,o,i;for(e=r.data,o=r.getter,n=e.length,t=[],i=0;i<n;i++)t.push(o(e,i));return t}(e):function(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}(r)}(r);if(o=function(r){return Oe[r]||null}(e),null===o)throw new TypeError(Me("00F2b",e));return u=r.length,n=Ne(f=function(r){var e;if(E(r))return"generic";if(_(r))return null;for(e=0;e<Ce;e++)if(r instanceof ke[e])return Ie[e];return B[x(r)]||null}(r)),a=new o(u),n||Pe(f)?(i=n?ne(r,0):oe(r,0),Ne(e)?(Fe(2*u,i,1,ne(a,0),1),a):Pe(e)?(Fe(2*u,i,1,oe(a,0),1),a):(Fe(u,i,2,a,1),a)):(n=Ne(e))||Pe(e)?(Fe(u,r,1,n?ne(a,0):oe(a,0),2),a):(Fe(u,r,1,a,1),a)}h(Fe,"ndarray",(function(r,e,t,n,o,i,a){var u,f,l,c,y,s;if(r<=0)return o;if(l=le(e),c=le(o),l.accessors||c.accessors)return Ue(r,l,t,n,c,i,a),c.data;if(u=n,f=a,1===t&&1===i){if((y=r%8)>0)for(s=0;s<y;s++)o[f]=e[u],u+=t,f+=i;if(r<8)return o;for(s=y;s<r;s+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(s=0;s<r;s++)o[f]=e[u],u+=t,f+=i;return o}));export{Ye as default};
//# sourceMappingURL=mod.js.map
