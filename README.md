<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Convert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Convert an array to an array of a different data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-convert
```

</section>

<section class="usage">

## Usage

```javascript
var convertArray = require( '@stdlib/array-convert' );
```

#### convertArray( arr, dtype )

Converts an `array` to an array of a different data type.

```javascript
var arr = [ 1.0, 2.0, 3.0 ];
var out = convertArray( arr, 'float32' );
// returns <Float32Array>[ 1.0, 2.0, 3.0 ]
```

The function supports the following data types:

-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `generic`: values of any type.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `int8`: signed 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.
-   `uint8`: unsigned 8-bit integers.
-   `uint8c`: unsigned clamped 8-bit integers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array-dtypes' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var convertArray = require( '@stdlib/array-convert' );

// Create a generic array:
var arr = [];
var i;
for ( i = 0; i < 5; i++ ) {
    arr.push( floor( randu()*1.0e25 ) - 5.0e24 );
}

// Get a list of array data types:
var DTYPES = dtypes();

// Convert the generic array to each array data type:
var out;
for ( i = 0; i < DTYPES.length; i++ ) {
    out = convertArray( arr, DTYPES[ i ] );
    console.log( out );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-convert.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-convert

[test-image]: https://github.com/stdlib-js/array-convert/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-convert/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-convert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-convert?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-convert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-convert/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-convert/main/LICENSE

</section>

<!-- /.links -->
