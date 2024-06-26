/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isCollection = require( '@stdlib/assert-is-collection' );
var getType = require( '@stdlib/array-dtype' );
var ctors = require( '@stdlib/array-ctors' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );
var gcopy = require( '@stdlib/blas-base-gcopy' );
var copy = require( '@stdlib/array-base-copy' );
var resolveGetter = require( '@stdlib/array-base-resolve-getter' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Tests whether a data type is a single-precision complex floating-point number data type.
*
* @private
* @param {string} dtype - data type
* @returns {boolean} boolean indicating whether a provided data type is a single-precision complex floating-point number data type
*
* @example
* var bool = isComplex64( 'float64' );
* // returns false
*
* @example
* var bool = isComplex64( 'complex64' );
* // returns true
*/
function isComplex64( dtype ) {
	return ( dtype === 'complex64' );
}

/**
* Tests whether a data type is a double-precision complex floating-point number data type.
*
* @private
* @param {string} dtype - data type
* @returns {boolean} boolean indicating whether a provided data type is a double-precision complex floating-point number data type
*
* @example
* var bool = isComplex128( 'float64' );
* // returns false
*
* @example
* var bool = isComplex128( 'complex128' );
* // returns true
*/
function isComplex128( dtype ) {
	return ( dtype === 'complex128' );
}

/**
* Tests whether a data type is a boolean data type.
*
* @private
* @param {string} dtype - data type
* @returns {boolean} boolean indicating whether a provided data type is a boolean data type
*
* @example
* var bool = isBool( 'bool' );
* // returns true
*
* @example
* var bool = isBool( 'complex128' );
* // returns false
*/
function isBool( dtype ) {
	return ( dtype === 'bool' );
}


// MAIN //

/**
* Converts an array to an array of a different data type.
*
* @param {Collection} x - array to convert
* @param {string} dtype - output data type
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must be a recognized array data type
* @returns {(Array|TypedArray|ComplexArray)} output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
*
* var out = convert( arr, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function convert( x, dtype ) {
	var isc64;
	var ctor;
	var xbuf;
	var obuf;
	var get;
	var out;
	var len;
	var t;
	var i;

	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	// If the output data type is "generic", our task is relatively straightforward...
	if ( dtype === 'generic' ) {
		return copy( x );
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a recognized array data type. Value: `%s`.', dtype ) );
	}
	// Cache the input array length:
	len = x.length;

	// Get the input array data type:
	t = getType( x );
	isc64 = isComplex64( t );

	// Create the output array:
	out = new ctor( len );

	// As the output data type is not "generic", we need to explicitly handle complex number input arrays...
	if ( isc64 || isComplex128( t ) ) {
		if ( isc64 ) {
			xbuf = reinterpret64( x, 0 );
		} else {
			xbuf = reinterpret128( x, 0 );
		}
		// Check whether the output data type is a complex number data type...
		if ( isComplex64( dtype ) ) { // cmplx => cmplx
			obuf = reinterpret64( out, 0 );
			gcopy( len*2, xbuf, 1, obuf, 1 );
			return out;
		}
		if ( isComplex128( dtype ) ) { // cmplx => cmplx
			obuf = reinterpret128( out, 0 );
			gcopy( len*2, xbuf, 1, obuf, 1 );
			return out;
		}
		// Check whether the output data type is a boolean data type...
		if ( isBool( dtype ) ) { // cmplx => bool
			obuf = reinterpretBoolean( out, 0 );
			for ( i = 0; i < len; i++ ) {
				// A complex number is only falsy when both the real and imaginary components are zero...
				if ( xbuf[ 2*i ] || xbuf[ (2*i)+1 ] ) {
					obuf[ i ] = 1;
				} else {
					obuf[ i ] = 0;
				}
			}
			return out;
		}
		// We assume that the output data type is a real number data type, given that we're looking to convert a provided complex number array; in which case, we'll only extract the real components from the complex number input array...
		gcopy( len, xbuf, 2, out, 1 ); // cmplx => real
		return out;
	}
	// Check whether the input array is a boolean array...
	if ( isBool( t ) ) {
		xbuf = reinterpretBoolean( x, 0 );

		// Check whether the output data type is a boolean data type...
		if ( isBool( dtype ) ) { // bool => bool
			obuf = reinterpretBoolean( out, 0 );
			gcopy( len, xbuf, 1, obuf, 1 );
			return out;
		}
		// Check whether the output data type is a complex number data type...
		if ( isComplex64( dtype ) ) { // bool => cmplx
			obuf = reinterpret64( out, 0 );
			gcopy( len, xbuf, 1, obuf, 2 );
			return out;
		}
		if ( isComplex128( dtype ) ) { // bool => cmplx
			obuf = reinterpret128( out, 0 );
			gcopy( len, xbuf, 1, obuf, 2 );
			return out;
		}
		gcopy( len, xbuf, 1, out, 1 ); // bool => real
		return out;
	}
	// Check whether we need to explicitly handle complex number output arrays...
	isc64 = isComplex64( dtype );
	if ( isc64 || isComplex128( dtype ) ) {
		if ( isc64 ) {
			obuf = reinterpret64( out, 0 );
		} else {
			obuf = reinterpret128( out, 0 );
		}
		// We assume that the input data type is a real number data type, given that we're looking to convert to a complex number array; in which case, we'll only set the real components... (WARNING: we're assuming that the output array has been zero-initialized! The imaginary components should be zero!)
		gcopy( len, x, 1, obuf, 2 ); // real => cmplx
		return out;
	}
	// Check whether the output data type is a boolean data type...
	if ( isBool( dtype ) ) {
		obuf = reinterpretBoolean( out, 0 );
		get = resolveGetter( x );
		for ( i = 0; i < len; i++ ) {
			if ( get( x, i ) ) {
				obuf[ i ] = 1;
			} else {
				obuf[ i ] = 0;
			}
		}
		return out;
	}
	// At this point, we're no longer handling complex number or boolean arrays, so we'll just assume that we can perform a straightforward copy...
	gcopy( len, x, 1, out, 1 ); // note: `gcopy` is assumed to support arrays using accessors
	return out;
}


// EXPORTS //

module.exports = convert;
