// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@esm/index.mjs";function o(e){return"complex64"===e}function p(e){return"complex128"===e}function l(l,j){var c,h,f,a,b,x,g;if(!e(l))throw new TypeError(n("00V2O,GW",l));if("generic"===j)return m(l);if(null===(h=r(j)))throw new TypeError(n("00V2P,Mp",j));return x=l.length,c=o(g=t(l)),b=new h(x),c||p(g)?(f=c?i(l,0):s(l,0),o(j)?(a=i(b,0),d(2*x,f,1,a,1),b):p(j)?(a=s(b,0),d(2*x,f,1,a,1),b):(d(x,f,2,b,1),b)):(c=o(j))||p(j)?(a=c?i(b,0):s(b,0),d(x,l,1,a,2),b):(d(x,l,1,b,1),b)}export{l as default};
//# sourceMappingURL=index.mjs.map
