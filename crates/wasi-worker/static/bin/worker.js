(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    // A very simple workaround for Big int. Works in conjunction with our custom
    // Dataview workaround at ./dataview.ts
    var globalObj = typeof globalThis !== "undefined" ? globalThis : {};
    // @ts-ignore
    var BigIntPolyfill = globalObj.BigInt || Number;

    // A very simple workaround for Big int. Works in conjunction with our custom
    // BigInt workaround at ./bigint.ts
    var exportedDataView = DataView;
    if (!exportedDataView.prototype.setBigUint64) {
        // Taken from https://gist.github.com/graup/815c9ac65c2bac8a56391f0ca23636fc
        exportedDataView.prototype.setBigUint64 = function (byteOffset, value, littleEndian) {
            var lowWord = value;
            var highWord = 0;
            this.setUint32(littleEndian ? 0 : 4, lowWord, littleEndian);
            this.setUint32(littleEndian ? 4 : 0, highWord, littleEndian);
        };
    }
    var DataViewPolyfill = exportedDataView;

    var global$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited = false;
    function init () {
      inited = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }

    function toByteArray (b64) {
      if (!inited) {
        init();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      if (!inited) {
        init();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString = {}.toString;

    var isArray = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;

    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };

    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
    }

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };

    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };

    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }

    function fromObject (that, obj) {
      if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }
    Buffer.isBuffer = isBuffer;
    function internalIsBuffer (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare (a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (internalIsBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.equals = function equals (b) {
      if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray(buf)
      } else {
        return fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes (str) {
      return toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    }

    function isFastBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
    }

    // Return our buffer depending on browser or node
    var isomorphicBuffer = Buffer;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var browser = true;

    // shim for using process in browser
    // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    var cachedSetTimeout = defaultSetTimout;
    var cachedClearTimeout = defaultClearTimeout;
    if (typeof global$1.setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
    }
    if (typeof global$1.clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }


    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }



    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    function nextTick(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    }
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    var title = 'browser';
    var platform = 'browser';
    var browser$1 = true;
    var env = {};
    var argv = [];
    var version = ''; // empty string to avoid regexp issues
    var versions = {};
    var release = {};
    var config = {};

    function noop() {}

    var on = noop;
    var addListener = noop;
    var once = noop;
    var off = noop;
    var removeListener = noop;
    var removeAllListeners = noop;
    var emit = noop;

    function binding(name) {
        throw new Error('process.binding is not supported');
    }

    function cwd () { return '/' }
    function chdir (dir) {
        throw new Error('process.chdir is not supported');
    }function umask() { return 0; }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance$1 = global$1.performance || {};
    var performanceNow =
      performance$1.now        ||
      performance$1.mozNow     ||
      performance$1.msNow      ||
      performance$1.oNow       ||
      performance$1.webkitNow  ||
      function(){ return (new Date()).getTime() };

    // generate timestamp or delta
    // see http://nodejs.org/api/process.html#process_process_hrtime
    function hrtime(previousTimestamp){
      var clocktime = performanceNow.call(performance$1)*1e-3;
      var seconds = Math.floor(clocktime);
      var nanoseconds = Math.floor((clocktime%1)*1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds<0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds,nanoseconds]
    }

    var startTime = new Date();
    function uptime() {
      var currentTime = new Date();
      var dif = currentTime - startTime;
      return dif / 1000;
    }

    var process = {
      nextTick: nextTick,
      title: title,
      browser: browser$1,
      env: env,
      argv: argv,
      version: version,
      versions: versions,
      on: on,
      addListener: addListener,
      once: once,
      off: off,
      removeListener: removeListener,
      removeAllListeners: removeAllListeners,
      emit: emit,
      binding: binding,
      cwd: cwd,
      chdir: chdir,
      umask: umask,
      hrtime: hrtime,
      platform: platform,
      release: release,
      config: config,
      uptime: uptime
    };

    var lookup$1 = [];
    var revLookup$1 = [];
    var Arr$1 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited$1 = false;
    function init$1 () {
      inited$1 = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup$1[i] = code[i];
        revLookup$1[code.charCodeAt(i)] = i;
      }

      revLookup$1['-'.charCodeAt(0)] = 62;
      revLookup$1['_'.charCodeAt(0)] = 63;
    }

    function toByteArray$1 (b64) {
      if (!inited$1) {
        init$1();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr$1(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup$1[b64.charCodeAt(i)] << 18) | (revLookup$1[b64.charCodeAt(i + 1)] << 12) | (revLookup$1[b64.charCodeAt(i + 2)] << 6) | revLookup$1[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup$1[b64.charCodeAt(i)] << 2) | (revLookup$1[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup$1[b64.charCodeAt(i)] << 10) | (revLookup$1[b64.charCodeAt(i + 1)] << 4) | (revLookup$1[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64$1 (num) {
      return lookup$1[num >> 18 & 0x3F] + lookup$1[num >> 12 & 0x3F] + lookup$1[num >> 6 & 0x3F] + lookup$1[num & 0x3F]
    }

    function encodeChunk$1 (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64$1(tmp));
      }
      return output.join('')
    }

    function fromByteArray$1 (uint8) {
      if (!inited$1) {
        init$1();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk$1(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup$1[tmp >> 2];
        output += lookup$1[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup$1[tmp >> 10];
        output += lookup$1[(tmp >> 4) & 0x3F];
        output += lookup$1[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read$1 (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write$1 (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString$1 = {}.toString;

    var isArray$1 = Array.isArray || function (arr) {
      return toString$1.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES$1 = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer$1.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;

    /*
     * Export kMaxLength after typed array support is determined.
     */
    var _kMaxLength = kMaxLength$1();

    function kMaxLength$1 () {
      return Buffer$1.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer$1 (that, length) {
      if (kMaxLength$1() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer$1.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer$1(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer$1 (arg, encodingOrOffset, length) {
      if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
        return new Buffer$1(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe$1(this, arg)
      }
      return from$1(this, arg, encodingOrOffset, length)
    }

    Buffer$1.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer$1._augment = function (arr) {
      arr.__proto__ = Buffer$1.prototype;
      return arr
    };

    function from$1 (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer$1(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString$1(that, value, encodingOrOffset)
      }

      return fromObject$1(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer$1.from = function (value, encodingOrOffset, length) {
      return from$1(null, value, encodingOrOffset, length)
    };

    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      Buffer$1.prototype.__proto__ = Uint8Array.prototype;
      Buffer$1.__proto__ = Uint8Array;
    }

    function assertSize$1 (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc$1 (that, size, fill, encoding) {
      assertSize$1(size);
      if (size <= 0) {
        return createBuffer$1(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer$1(that, size).fill(fill, encoding)
          : createBuffer$1(that, size).fill(fill)
      }
      return createBuffer$1(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer$1.alloc = function (size, fill, encoding) {
      return alloc$1(null, size, fill, encoding)
    };

    function allocUnsafe$1 (that, size) {
      assertSize$1(size);
      that = createBuffer$1(that, size < 0 ? 0 : checked$1(size) | 0);
      if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer$1.allocUnsafe = function (size) {
      return allocUnsafe$1(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer$1.allocUnsafeSlow = function (size) {
      return allocUnsafe$1(null, size)
    };

    function fromString$1 (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer$1.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength$1(string, encoding) | 0;
      that = createBuffer$1(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike$1 (that, array) {
      var length = array.length < 0 ? 0 : checked$1(array.length) | 0;
      that = createBuffer$1(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer$1 (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer$1.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike$1(that, array);
      }
      return that
    }

    function fromObject$1 (that, obj) {
      if (internalIsBuffer$1(obj)) {
        var len = checked$1(obj.length) | 0;
        that = createBuffer$1(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan$1(obj.length)) {
            return createBuffer$1(that, 0)
          }
          return fromArrayLike$1(that, obj)
        }

        if (obj.type === 'Buffer' && isArray$1(obj.data)) {
          return fromArrayLike$1(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked$1 (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength$1()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength$1().toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer$1.alloc(+length)
    }
    Buffer$1.isBuffer = isBuffer$1;
    function internalIsBuffer$1 (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer$1.compare = function compare (a, b) {
      if (!internalIsBuffer$1(a) || !internalIsBuffer$1(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer$1.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer$1.concat = function concat (list, length) {
      if (!isArray$1(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer$1.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer$1.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer$1(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength$1 (string, encoding) {
      if (internalIsBuffer$1(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes$1(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes$1(string).length
          default:
            if (loweredCase) return utf8ToBytes$1(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer$1.byteLength = byteLength$1;

    function slowToString$1 (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice$1(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice$1(this, start, end)

          case 'ascii':
            return asciiSlice$1(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice$1(this, start, end)

          case 'base64':
            return base64Slice$1(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice$1(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer$1.prototype._isBuffer = true;

    function swap$1 (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer$1.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap$1(this, i, i + 1);
      }
      return this
    };

    Buffer$1.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap$1(this, i, i + 3);
        swap$1(this, i + 1, i + 2);
      }
      return this
    };

    Buffer$1.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap$1(this, i, i + 7);
        swap$1(this, i + 1, i + 6);
        swap$1(this, i + 2, i + 5);
        swap$1(this, i + 3, i + 4);
      }
      return this
    };

    Buffer$1.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice$1(this, 0, length)
      return slowToString$1.apply(this, arguments)
    };

    Buffer$1.prototype.equals = function equals (b) {
      if (!internalIsBuffer$1(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer$1.compare(this, b) === 0
    };

    Buffer$1.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES$1;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer$1(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf$1 (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer$1.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer$1(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf$1(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer$1.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf$1(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf$1 (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf$1(this, val, byteOffset, encoding, true)
    };

    Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf$1(this, val, byteOffset, encoding, false)
    };

    function hexWrite$1 (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write$1 (buf, string, offset, length) {
      return blitBuffer$1(utf8ToBytes$1(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite$1 (buf, string, offset, length) {
      return blitBuffer$1(asciiToBytes$1(string), buf, offset, length)
    }

    function latin1Write$1 (buf, string, offset, length) {
      return asciiWrite$1(buf, string, offset, length)
    }

    function base64Write$1 (buf, string, offset, length) {
      return blitBuffer$1(base64ToBytes$1(string), buf, offset, length)
    }

    function ucs2Write$1 (buf, string, offset, length) {
      return blitBuffer$1(utf16leToBytes$1(string, buf.length - offset), buf, offset, length)
    }

    Buffer$1.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite$1(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write$1(this, string, offset, length)

          case 'ascii':
            return asciiWrite$1(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write$1(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write$1(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write$1(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer$1.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice$1 (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray$1(buf)
      } else {
        return fromByteArray$1(buf.slice(start, end))
      }
    }

    function utf8Slice$1 (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray$1(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH$1 = 0x1000;

    function decodeCodePointsArray$1 (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH$1) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH$1)
        );
      }
      return res
    }

    function asciiSlice$1 (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice$1 (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice$1 (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex$1(buf[i]);
      }
      return out
    }

    function utf16leSlice$1 (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer$1.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer$1.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer$1(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset$1 (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$1(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset$1(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 1, this.length);
      return this[offset]
    };

    Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$1(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$1(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);
      return read$1(this, offset, true, 23, 4)
    };

    Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 4, this.length);
      return read$1(this, offset, false, 23, 4)
    };

    Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 8, this.length);
      return read$1(this, offset, true, 52, 8)
    };

    Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset$1(offset, 8, this.length);
      return read$1(this, offset, false, 52, 8)
    };

    function checkInt$1 (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer$1(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt$1(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt$1(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 1, 0xff, 0);
      if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16$1 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 2, 0xffff, 0);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16$1(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 2, 0xffff, 0);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16$1(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32$1 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32$1(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32$1(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt$1(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt$1(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16$1(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16$1(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32$1(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$1(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer$1.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32$1(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754$1 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat$1 (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754$1(buf, value, offset, 4);
      }
      write$1(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat$1(this, value, offset, true, noAssert)
    };

    Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat$1(this, value, offset, false, noAssert)
    };

    function writeDouble$1 (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754$1(buf, value, offset, 8);
      }
      write$1(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble$1(this, value, offset, true, noAssert)
    };

    Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble$1(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer$1(val)
          ? val
          : utf8ToBytes$1(new Buffer$1(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE$1 = /[^+\/0-9A-Za-z-_]/g;

    function base64clean$1 (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim$1(str).replace(INVALID_BASE64_RE$1, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim$1 (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex$1 (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes$1 (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes$1 (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes$1 (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes$1 (str) {
      return toByteArray$1(base64clean$1(str))
    }

    function blitBuffer$1 (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan$1 (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer$1(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer$1(obj) || isSlowBuffer$1(obj))
    }

    function isFastBuffer$1 (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer$1 (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer$1(obj.slice(0, 0))
    }

    var bufferEs6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        INSPECT_MAX_BYTES: INSPECT_MAX_BYTES$1,
        kMaxLength: _kMaxLength,
        Buffer: Buffer$1,
        SlowBuffer: SlowBuffer,
        isBuffer: isBuffer$1
    });

    var safeBuffer = createCommonjsModule(function (module, exports) {
    /* eslint-disable node/no-deprecated-api */

    var Buffer = bufferEs6.Buffer;

    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = bufferEs6;
    } else {
      // Copy properties from require('buffer')
      copyProps(bufferEs6, exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer (arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }

    SafeBuffer.prototype = Object.create(Buffer.prototype);

    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size);
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return bufferEs6.SlowBuffer(size)
    };
    });
    var safeBuffer_1 = safeBuffer.Buffer;

    var browser$2 = createCommonjsModule(function (module, exports) {

    function oldBrowser () {
      throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11')
    }


    var Buffer = safeBuffer.Buffer;
    var kBufferMaxLength = safeBuffer.kMaxLength;
    var crypto = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
    var kMaxUint32 = Math.pow(2, 32) - 1;
    function assertOffset (offset, length) {
      if (typeof offset !== 'number' || offset !== offset) { // eslint-disable-line no-self-compare
        throw new TypeError('offset must be a number')
      }

      if (offset > kMaxUint32 || offset < 0) {
        throw new TypeError('offset must be a uint32')
      }

      if (offset > kBufferMaxLength || offset > length) {
        throw new RangeError('offset out of range')
      }
    }

    function assertSize (size, offset, length) {
      if (typeof size !== 'number' || size !== size) { // eslint-disable-line no-self-compare
        throw new TypeError('size must be a number')
      }

      if (size > kMaxUint32 || size < 0) {
        throw new TypeError('size must be a uint32')
      }

      if (size + offset > length || size > kBufferMaxLength) {
        throw new RangeError('buffer too small')
      }
    }
    if ((crypto && crypto.getRandomValues) || !browser) {
      exports.randomFill = randomFill;
      exports.randomFillSync = randomFillSync;
    } else {
      exports.randomFill = oldBrowser;
      exports.randomFillSync = oldBrowser;
    }
    function randomFill (buf, offset, size, cb) {
      if (!Buffer.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
      }

      if (typeof offset === 'function') {
        cb = offset;
        offset = 0;
        size = buf.length;
      } else if (typeof size === 'function') {
        cb = size;
        size = buf.length - offset;
      } else if (typeof cb !== 'function') {
        throw new TypeError('"cb" argument must be a function')
      }
      assertOffset(offset, buf.length);
      assertSize(size, offset, buf.length);
      return actualFill(buf, offset, size, cb)
    }

    function actualFill (buf, offset, size, cb) {
      {
        var ourBuf = buf.buffer;
        var uint = new Uint8Array(ourBuf, offset, size);
        crypto.getRandomValues(uint);
        if (cb) {
          nextTick(function () {
            cb(null, buf);
          });
          return
        }
        return buf
      }
    }
    function randomFillSync (buf, offset, size) {
      if (typeof offset === 'undefined') {
        offset = 0;
      }
      if (!Buffer.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
      }

      assertOffset(offset, buf.length);

      if (size === undefined) size = buf.length - offset;

      assertSize(size, offset, buf.length);

      return actualFill(buf, offset, size)
    }
    });
    var browser_1 = browser$2.randomFill;
    var browser_2 = browser$2.randomFillSync;

    var randomfill = createCommonjsModule(function (module, exports) {
    {
      module.exports = browser$2;
    }
    });
    var randomfill_1 = randomfill.randomFill;
    var randomfill_2 = randomfill.randomFillSync;

    // hrtime polyfill for the browser
    function hrtime$1(previousTimestamp) {
        // initilaize our variables
        var clocktime = performance.now() * 1e-3;
        var seconds = Math.floor(clocktime);
        var nanoseconds = Math.floor((clocktime % 1) * 1e9);
        // Compare to the prvious timestamp if we have one
        if (previousTimestamp) {
            seconds = seconds - previousTimestamp[0];
            nanoseconds = nanoseconds - previousTimestamp[1];
            if (nanoseconds < 0) {
                seconds--;
                nanoseconds += 1e9;
            }
        }
        // Return our seconds tuple
        return [seconds, nanoseconds];
    }

    function assertPath(path) {
      if (typeof path !== 'string') {
        throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
      }
    }

    // Resolves . and .. elements in a path with directory names
    function normalizeStringPosix(path, allowAboveRoot) {
      var res = '';
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path.length; ++i) {
        if (i < path.length)
          code = path.charCodeAt(i);
        else if (code === 47 /*/*/)
          break;
        else
          code = 47 /*/*/;
        if (code === 47 /*/*/) {
          if (lastSlash === i - 1 || dots === 1) ; else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf('/');
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = '';
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = '';
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += '/..';
              else
                res = '..';
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += '/' + path.slice(lastSlash + 1, i);
            else
              res = path.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 /*.*/ && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }

    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }

    var posix = {
      // path.resolve([from ...], to)
      resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;

        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path;
          if (i >= 0)
            path = arguments[i];
          else {
            if (cwd === undefined)
              cwd = process.cwd();
            path = cwd;
          }

          assertPath(path);

          // Skip empty entries
          if (path.length === 0) {
            continue;
          }

          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
        }

        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)

        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return '/' + resolvedPath;
          else
            return '/';
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return '.';
        }
      },

      normalize: function normalize(path) {
        assertPath(path);

        if (path.length === 0) return '.';

        var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);

        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';

        if (isAbsolute) return '/' + path;
        return path;
      },

      isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
      },

      join: function join() {
        if (arguments.length === 0)
          return '.';
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === undefined)
              joined = arg;
            else
              joined += '/' + arg;
          }
        }
        if (joined === undefined)
          return '.';
        return posix.normalize(joined);
      },

      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);

        if (from === to) return '';

        from = posix.resolve(from);
        to = posix.resolve(to);

        if (from === to) return '';

        // Trim any leading backslashes
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47 /*/*/)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;

        // Trim any leading backslashes
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47 /*/*/)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;

        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47 /*/*/) {
                // We get here if `from` is the exact base path for `to`.
                // For example: from='/foo/bar'; to='/foo/bar/baz'
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                // We get here if `from` is the root
                // For example: from='/'; to='/foo'
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
                // We get here if `to` is the exact base path for `from`.
                // For example: from='/foo/bar/baz'; to='/foo/bar'
                lastCommonSep = i;
              } else if (i === 0) {
                // We get here if `to` is the root.
                // For example: from='/foo'; to='/'
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47 /*/*/)
            lastCommonSep = i;
        }

        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
            if (out.length === 0)
              out += '..';
            else
              out += '/..';
          }
        }

        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47 /*/*/)
            ++toStart;
          return to.slice(toStart);
        }
      },

      _makeLong: function _makeLong(path) {
        return path;
      },

      dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/;
        var end = -1;
        var matchedSlash = true;
        for (var i = path.length - 1; i >= 1; --i) {
          code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              if (!matchedSlash) {
                end = i;
                break;
              }
            } else {
            // We saw the first non-path separator
            matchedSlash = false;
          }
        }

        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
      },

      basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);

        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;

        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
          if (ext.length === path.length && ext === path) return '';
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  start = i + 1;
                  break;
                }
              } else {
              if (firstNonSlashEnd === -1) {
                // We saw the first non-path separator, remember this index in case
                // we need it if the extension ends up not matching
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                // Try to match the explicit extension
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    // We matched the extension, so mark this as the end of our path
                    // component
                    end = i;
                  }
                } else {
                  // Extension does not match, so our result is the entire path
                  // component
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }

          if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
          return path.slice(start, end);
        } else {
          for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  start = i + 1;
                  break;
                }
              } else if (end === -1) {
              // We saw the first non-path separator, mark this as the end of our
              // path component
              matchedSlash = false;
              end = i + 1;
            }
          }

          if (end === -1) return '';
          return path.slice(start, end);
        }
      },

      extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for (var i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
          if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46 /*.*/) {
              // If this is our first dot, mark it as the start of our extension
              if (startDot === -1)
                startDot = i;
              else if (preDotState !== 1)
                preDotState = 1;
          } else if (startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
          }
        }

        if (startDot === -1 || end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return '';
        }
        return path.slice(startDot, end);
      },

      format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format('/', pathObject);
      },

      parse: function parse(path) {
        assertPath(path);

        var ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/;
        var start;
        if (isAbsolute) {
          ret.root = '/';
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;

        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;

        // Get non-dir info
        for (; i >= start; --i) {
          code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
          if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46 /*.*/) {
              // If this is our first dot, mark it as the start of our extension
              if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
          }
        }

        if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
          } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
          }
          ret.ext = path.slice(startDot, end);
        }

        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

        return ret;
      },

      sep: '/',
      delimiter: ':',
      win32: null,
      posix: null
    };

    posix.posix = posix;

    var pathBrowserify = posix;

    // Simply polyfill for hrtime
    // https://nodejs.org/api/process.html#process_process_hrtime_time
    var NS_PER_SEC = 1e9;
    var getBigIntHrtime = function (nativeHrtime) {
        var baseTime = nativeHrtime();
        return function (time) {
            var diff = nativeHrtime(time || baseTime);
            // Return the time
            return (diff[0] * NS_PER_SEC + diff[1]);
        };
    };

    var bindings = {
        hrtime: getBigIntHrtime(hrtime$1),
        exit: function (code) {
            throw new WASIExitError(code);
        },
        kill: function (signal) {
            throw new WASIKillError(signal);
        },
        randomFillSync: randomfill_2,
        isTTY: function () { return true; },
        path: pathBrowserify,
        // Let the user attach the fs at runtime
        fs: null
    };

    /*

    This project is based from the Node implementation made by Gus Caplan
    https://github.com/devsnek/node-wasi
    However, JavaScript WASI is focused on:
     * Bringing WASI to the Browsers
     * Make easy to plug different filesystems
     * Provide a type-safe api using Typescript


    Copyright 2019 Gus Caplan

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

     */
    var _a;
    var WASI_ESUCCESS = 0;
    var WASI_E2BIG = 1;
    var WASI_EACCES = 2;
    var WASI_EADDRINUSE = 3;
    var WASI_EADDRNOTAVAIL = 4;
    var WASI_EAFNOSUPPORT = 5;
    var WASI_EAGAIN = 6;
    var WASI_EALREADY = 7;
    var WASI_EBADF = 8;
    var WASI_EBADMSG = 9;
    var WASI_EBUSY = 10;
    var WASI_ECANCELED = 11;
    var WASI_ECHILD = 12;
    var WASI_ECONNABORTED = 13;
    var WASI_ECONNREFUSED = 14;
    var WASI_ECONNRESET = 15;
    var WASI_EDEADLK = 16;
    var WASI_EDESTADDRREQ = 17;
    var WASI_EDOM = 18;
    var WASI_EDQUOT = 19;
    var WASI_EEXIST = 20;
    var WASI_EFAULT = 21;
    var WASI_EFBIG = 22;
    var WASI_EHOSTUNREACH = 23;
    var WASI_EIDRM = 24;
    var WASI_EILSEQ = 25;
    var WASI_EINPROGRESS = 26;
    var WASI_EINTR = 27;
    var WASI_EINVAL = 28;
    var WASI_EIO = 29;
    var WASI_EISCONN = 30;
    var WASI_EISDIR = 31;
    var WASI_ELOOP = 32;
    var WASI_EMFILE = 33;
    var WASI_EMLINK = 34;
    var WASI_EMSGSIZE = 35;
    var WASI_EMULTIHOP = 36;
    var WASI_ENAMETOOLONG = 37;
    var WASI_ENETDOWN = 38;
    var WASI_ENETRESET = 39;
    var WASI_ENETUNREACH = 40;
    var WASI_ENFILE = 41;
    var WASI_ENOBUFS = 42;
    var WASI_ENODEV = 43;
    var WASI_ENOENT = 44;
    var WASI_ENOEXEC = 45;
    var WASI_ENOLCK = 46;
    var WASI_ENOLINK = 47;
    var WASI_ENOMEM = 48;
    var WASI_ENOMSG = 49;
    var WASI_ENOPROTOOPT = 50;
    var WASI_ENOSPC = 51;
    var WASI_ENOSYS = 52;
    var WASI_ENOTCONN = 53;
    var WASI_ENOTDIR = 54;
    var WASI_ENOTEMPTY = 55;
    var WASI_ENOTRECOVERABLE = 56;
    var WASI_ENOTSOCK = 57;
    var WASI_ENOTTY = 59;
    var WASI_ENXIO = 60;
    var WASI_EOVERFLOW = 61;
    var WASI_EOWNERDEAD = 62;
    var WASI_EPERM = 63;
    var WASI_EPIPE = 64;
    var WASI_EPROTO = 65;
    var WASI_EPROTONOSUPPORT = 66;
    var WASI_EPROTOTYPE = 67;
    var WASI_ERANGE = 68;
    var WASI_EROFS = 69;
    var WASI_ESPIPE = 70;
    var WASI_ESRCH = 71;
    var WASI_ESTALE = 72;
    var WASI_ETIMEDOUT = 73;
    var WASI_ETXTBSY = 74;
    var WASI_EXDEV = 75;
    var WASI_ENOTCAPABLE = 76;
    var WASI_SIGABRT = 0;
    var WASI_SIGALRM = 1;
    var WASI_SIGBUS = 2;
    var WASI_SIGCHLD = 3;
    var WASI_SIGCONT = 4;
    var WASI_SIGFPE = 5;
    var WASI_SIGHUP = 6;
    var WASI_SIGILL = 7;
    var WASI_SIGINT = 8;
    var WASI_SIGKILL = 9;
    var WASI_SIGPIPE = 10;
    var WASI_SIGQUIT = 11;
    var WASI_SIGSEGV = 12;
    var WASI_SIGSTOP = 13;
    var WASI_SIGTERM = 14;
    var WASI_SIGTRAP = 15;
    var WASI_SIGTSTP = 16;
    var WASI_SIGTTIN = 17;
    var WASI_SIGTTOU = 18;
    var WASI_SIGURG = 19;
    var WASI_SIGUSR1 = 20;
    var WASI_SIGUSR2 = 21;
    var WASI_SIGVTALRM = 22;
    var WASI_SIGXCPU = 23;
    var WASI_SIGXFSZ = 24;
    var WASI_FILETYPE_UNKNOWN = 0;
    var WASI_FILETYPE_BLOCK_DEVICE = 1;
    var WASI_FILETYPE_CHARACTER_DEVICE = 2;
    var WASI_FILETYPE_DIRECTORY = 3;
    var WASI_FILETYPE_REGULAR_FILE = 4;
    var WASI_FILETYPE_SOCKET_STREAM = 6;
    var WASI_FILETYPE_SYMBOLIC_LINK = 7;
    var WASI_FDFLAG_APPEND = 0x0001;
    var WASI_FDFLAG_DSYNC = 0x0002;
    var WASI_FDFLAG_NONBLOCK = 0x0004;
    var WASI_FDFLAG_RSYNC = 0x0008;
    var WASI_FDFLAG_SYNC = 0x0010;
    var WASI_RIGHT_FD_DATASYNC = BigIntPolyfill(0x0000000000000001);
    var WASI_RIGHT_FD_READ = BigIntPolyfill(0x0000000000000002);
    var WASI_RIGHT_FD_SEEK = BigIntPolyfill(0x0000000000000004);
    var WASI_RIGHT_FD_FDSTAT_SET_FLAGS = BigIntPolyfill(0x0000000000000008);
    var WASI_RIGHT_FD_SYNC = BigIntPolyfill(0x0000000000000010);
    var WASI_RIGHT_FD_TELL = BigIntPolyfill(0x0000000000000020);
    var WASI_RIGHT_FD_WRITE = BigIntPolyfill(0x0000000000000040);
    var WASI_RIGHT_FD_ADVISE = BigIntPolyfill(0x0000000000000080);
    var WASI_RIGHT_FD_ALLOCATE = BigIntPolyfill(0x0000000000000100);
    var WASI_RIGHT_PATH_CREATE_DIRECTORY = BigIntPolyfill(0x0000000000000200);
    var WASI_RIGHT_PATH_CREATE_FILE = BigIntPolyfill(0x0000000000000400);
    var WASI_RIGHT_PATH_LINK_SOURCE = BigIntPolyfill(0x0000000000000800);
    var WASI_RIGHT_PATH_LINK_TARGET = BigIntPolyfill(0x0000000000001000);
    var WASI_RIGHT_PATH_OPEN = BigIntPolyfill(0x0000000000002000);
    var WASI_RIGHT_FD_READDIR = BigIntPolyfill(0x0000000000004000);
    var WASI_RIGHT_PATH_READLINK = BigIntPolyfill(0x0000000000008000);
    var WASI_RIGHT_PATH_RENAME_SOURCE = BigIntPolyfill(0x0000000000010000);
    var WASI_RIGHT_PATH_RENAME_TARGET = BigIntPolyfill(0x0000000000020000);
    var WASI_RIGHT_PATH_FILESTAT_GET = BigIntPolyfill(0x0000000000040000);
    var WASI_RIGHT_PATH_FILESTAT_SET_SIZE = BigIntPolyfill(0x0000000000080000);
    var WASI_RIGHT_PATH_FILESTAT_SET_TIMES = BigIntPolyfill(0x0000000000100000);
    var WASI_RIGHT_FD_FILESTAT_GET = BigIntPolyfill(0x0000000000200000);
    var WASI_RIGHT_FD_FILESTAT_SET_SIZE = BigIntPolyfill(0x0000000000400000);
    var WASI_RIGHT_FD_FILESTAT_SET_TIMES = BigIntPolyfill(0x0000000000800000);
    var WASI_RIGHT_PATH_SYMLINK = BigIntPolyfill(0x0000000001000000);
    var WASI_RIGHT_PATH_REMOVE_DIRECTORY = BigIntPolyfill(0x0000000002000000);
    var WASI_RIGHT_PATH_UNLINK_FILE = BigIntPolyfill(0x0000000004000000);
    var WASI_RIGHT_POLL_FD_READWRITE = BigIntPolyfill(0x0000000008000000);
    var WASI_RIGHT_SOCK_SHUTDOWN = BigIntPolyfill(0x0000000010000000);
    var RIGHTS_ALL = WASI_RIGHT_FD_DATASYNC |
        WASI_RIGHT_FD_READ |
        WASI_RIGHT_FD_SEEK |
        WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        WASI_RIGHT_FD_SYNC |
        WASI_RIGHT_FD_TELL |
        WASI_RIGHT_FD_WRITE |
        WASI_RIGHT_FD_ADVISE |
        WASI_RIGHT_FD_ALLOCATE |
        WASI_RIGHT_PATH_CREATE_DIRECTORY |
        WASI_RIGHT_PATH_CREATE_FILE |
        WASI_RIGHT_PATH_LINK_SOURCE |
        WASI_RIGHT_PATH_LINK_TARGET |
        WASI_RIGHT_PATH_OPEN |
        WASI_RIGHT_FD_READDIR |
        WASI_RIGHT_PATH_READLINK |
        WASI_RIGHT_PATH_RENAME_SOURCE |
        WASI_RIGHT_PATH_RENAME_TARGET |
        WASI_RIGHT_PATH_FILESTAT_GET |
        WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
        WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
        WASI_RIGHT_FD_FILESTAT_GET |
        WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        WASI_RIGHT_FD_FILESTAT_SET_SIZE |
        WASI_RIGHT_PATH_SYMLINK |
        WASI_RIGHT_PATH_UNLINK_FILE |
        WASI_RIGHT_PATH_REMOVE_DIRECTORY |
        WASI_RIGHT_POLL_FD_READWRITE |
        WASI_RIGHT_SOCK_SHUTDOWN;
    var RIGHTS_BLOCK_DEVICE_BASE = RIGHTS_ALL;
    var RIGHTS_BLOCK_DEVICE_INHERITING = RIGHTS_ALL;
    var RIGHTS_CHARACTER_DEVICE_BASE = RIGHTS_ALL;
    var RIGHTS_CHARACTER_DEVICE_INHERITING = RIGHTS_ALL;
    var RIGHTS_REGULAR_FILE_BASE = WASI_RIGHT_FD_DATASYNC |
        WASI_RIGHT_FD_READ |
        WASI_RIGHT_FD_SEEK |
        WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        WASI_RIGHT_FD_SYNC |
        WASI_RIGHT_FD_TELL |
        WASI_RIGHT_FD_WRITE |
        WASI_RIGHT_FD_ADVISE |
        WASI_RIGHT_FD_ALLOCATE |
        WASI_RIGHT_FD_FILESTAT_GET |
        WASI_RIGHT_FD_FILESTAT_SET_SIZE |
        WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        WASI_RIGHT_POLL_FD_READWRITE;
    var RIGHTS_REGULAR_FILE_INHERITING = BigIntPolyfill(0);
    var RIGHTS_DIRECTORY_BASE = WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        WASI_RIGHT_FD_SYNC |
        WASI_RIGHT_FD_ADVISE |
        WASI_RIGHT_PATH_CREATE_DIRECTORY |
        WASI_RIGHT_PATH_CREATE_FILE |
        WASI_RIGHT_PATH_LINK_SOURCE |
        WASI_RIGHT_PATH_LINK_TARGET |
        WASI_RIGHT_PATH_OPEN |
        WASI_RIGHT_FD_READDIR |
        WASI_RIGHT_PATH_READLINK |
        WASI_RIGHT_PATH_RENAME_SOURCE |
        WASI_RIGHT_PATH_RENAME_TARGET |
        WASI_RIGHT_PATH_FILESTAT_GET |
        WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
        WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
        WASI_RIGHT_FD_FILESTAT_GET |
        WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        WASI_RIGHT_PATH_SYMLINK |
        WASI_RIGHT_PATH_UNLINK_FILE |
        WASI_RIGHT_PATH_REMOVE_DIRECTORY |
        WASI_RIGHT_POLL_FD_READWRITE;
    var RIGHTS_DIRECTORY_INHERITING = RIGHTS_DIRECTORY_BASE | RIGHTS_REGULAR_FILE_BASE;
    var RIGHTS_SOCKET_BASE = WASI_RIGHT_FD_READ |
        WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        WASI_RIGHT_FD_WRITE |
        WASI_RIGHT_FD_FILESTAT_GET |
        WASI_RIGHT_POLL_FD_READWRITE |
        WASI_RIGHT_SOCK_SHUTDOWN;
    var RIGHTS_SOCKET_INHERITING = RIGHTS_ALL;
    var RIGHTS_TTY_BASE = WASI_RIGHT_FD_READ |
        WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        WASI_RIGHT_FD_WRITE |
        WASI_RIGHT_FD_FILESTAT_GET |
        WASI_RIGHT_POLL_FD_READWRITE;
    var RIGHTS_TTY_INHERITING = BigIntPolyfill(0);
    var WASI_CLOCK_MONOTONIC = 0;
    var WASI_CLOCK_PROCESS_CPUTIME_ID = 1;
    var WASI_CLOCK_REALTIME = 2;
    var WASI_CLOCK_THREAD_CPUTIME_ID = 3;
    var WASI_EVENTTYPE_CLOCK = 0;
    var WASI_EVENTTYPE_FD_READ = 1;
    var WASI_EVENTTYPE_FD_WRITE = 2;
    var WASI_FILESTAT_SET_ATIM_NOW = 1 << 1;
    var WASI_FILESTAT_SET_MTIM_NOW = 1 << 3;
    var WASI_O_CREAT = 1 << 0;
    var WASI_O_DIRECTORY = 1 << 1;
    var WASI_O_EXCL = 1 << 2;
    var WASI_O_TRUNC = 1 << 3;
    var WASI_PREOPENTYPE_DIR = 0;
    var WASI_STDIN_FILENO = 0;
    var WASI_STDOUT_FILENO = 1;
    var WASI_STDERR_FILENO = 2;
    // http://man7.org/linux/man-pages/man3/errno.3.html
    var ERROR_MAP = {
        E2BIG: WASI_E2BIG,
        EACCES: WASI_EACCES,
        EADDRINUSE: WASI_EADDRINUSE,
        EADDRNOTAVAIL: WASI_EADDRNOTAVAIL,
        EAFNOSUPPORT: WASI_EAFNOSUPPORT,
        EALREADY: WASI_EALREADY,
        EAGAIN: WASI_EAGAIN,
        // EBADE: WASI_EBADE,
        EBADF: WASI_EBADF,
        // EBADFD: WASI_EBADFD,
        EBADMSG: WASI_EBADMSG,
        // EBADR: WASI_EBADR,
        // EBADRQC: WASI_EBADRQC,
        // EBADSLT: WASI_EBADSLT,
        EBUSY: WASI_EBUSY,
        ECANCELED: WASI_ECANCELED,
        ECHILD: WASI_ECHILD,
        // ECHRNG: WASI_ECHRNG,
        // ECOMM: WASI_ECOMM,
        ECONNABORTED: WASI_ECONNABORTED,
        ECONNREFUSED: WASI_ECONNREFUSED,
        ECONNRESET: WASI_ECONNRESET,
        EDEADLOCK: WASI_EDEADLK,
        EDESTADDRREQ: WASI_EDESTADDRREQ,
        EDOM: WASI_EDOM,
        EDQUOT: WASI_EDQUOT,
        EEXIST: WASI_EEXIST,
        EFAULT: WASI_EFAULT,
        EFBIG: WASI_EFBIG,
        EHOSTDOWN: WASI_EHOSTUNREACH,
        EHOSTUNREACH: WASI_EHOSTUNREACH,
        // EHWPOISON: WASI_EHWPOISON,
        EIDRM: WASI_EIDRM,
        EILSEQ: WASI_EILSEQ,
        EINPROGRESS: WASI_EINPROGRESS,
        EINTR: WASI_EINTR,
        EINVAL: WASI_EINVAL,
        EIO: WASI_EIO,
        EISCONN: WASI_EISCONN,
        EISDIR: WASI_EISDIR,
        ELOOP: WASI_ELOOP,
        EMFILE: WASI_EMFILE,
        EMLINK: WASI_EMLINK,
        EMSGSIZE: WASI_EMSGSIZE,
        EMULTIHOP: WASI_EMULTIHOP,
        ENAMETOOLONG: WASI_ENAMETOOLONG,
        ENETDOWN: WASI_ENETDOWN,
        ENETRESET: WASI_ENETRESET,
        ENETUNREACH: WASI_ENETUNREACH,
        ENFILE: WASI_ENFILE,
        ENOBUFS: WASI_ENOBUFS,
        ENODEV: WASI_ENODEV,
        ENOENT: WASI_ENOENT,
        ENOEXEC: WASI_ENOEXEC,
        ENOLCK: WASI_ENOLCK,
        ENOLINK: WASI_ENOLINK,
        ENOMEM: WASI_ENOMEM,
        ENOMSG: WASI_ENOMSG,
        ENOPROTOOPT: WASI_ENOPROTOOPT,
        ENOSPC: WASI_ENOSPC,
        ENOSYS: WASI_ENOSYS,
        ENOTCONN: WASI_ENOTCONN,
        ENOTDIR: WASI_ENOTDIR,
        ENOTEMPTY: WASI_ENOTEMPTY,
        ENOTRECOVERABLE: WASI_ENOTRECOVERABLE,
        ENOTSOCK: WASI_ENOTSOCK,
        ENOTTY: WASI_ENOTTY,
        ENXIO: WASI_ENXIO,
        EOVERFLOW: WASI_EOVERFLOW,
        EOWNERDEAD: WASI_EOWNERDEAD,
        EPERM: WASI_EPERM,
        EPIPE: WASI_EPIPE,
        EPROTO: WASI_EPROTO,
        EPROTONOSUPPORT: WASI_EPROTONOSUPPORT,
        EPROTOTYPE: WASI_EPROTOTYPE,
        ERANGE: WASI_ERANGE,
        EROFS: WASI_EROFS,
        ESPIPE: WASI_ESPIPE,
        ESRCH: WASI_ESRCH,
        ESTALE: WASI_ESTALE,
        ETIMEDOUT: WASI_ETIMEDOUT,
        ETXTBSY: WASI_ETXTBSY,
        EXDEV: WASI_EXDEV
    };
    var SIGNAL_MAP = (_a = {},
        _a[WASI_SIGHUP] = "SIGHUP",
        _a[WASI_SIGINT] = "SIGINT",
        _a[WASI_SIGQUIT] = "SIGQUIT",
        _a[WASI_SIGILL] = "SIGILL",
        _a[WASI_SIGTRAP] = "SIGTRAP",
        _a[WASI_SIGABRT] = "SIGABRT",
        _a[WASI_SIGBUS] = "SIGBUS",
        _a[WASI_SIGFPE] = "SIGFPE",
        _a[WASI_SIGKILL] = "SIGKILL",
        _a[WASI_SIGUSR1] = "SIGUSR1",
        _a[WASI_SIGSEGV] = "SIGSEGV",
        _a[WASI_SIGUSR2] = "SIGUSR2",
        _a[WASI_SIGPIPE] = "SIGPIPE",
        _a[WASI_SIGALRM] = "SIGALRM",
        _a[WASI_SIGTERM] = "SIGTERM",
        _a[WASI_SIGCHLD] = "SIGCHLD",
        _a[WASI_SIGCONT] = "SIGCONT",
        _a[WASI_SIGSTOP] = "SIGSTOP",
        _a[WASI_SIGTSTP] = "SIGTSTP",
        _a[WASI_SIGTTIN] = "SIGTTIN",
        _a[WASI_SIGTTOU] = "SIGTTOU",
        _a[WASI_SIGURG] = "SIGURG",
        _a[WASI_SIGXCPU] = "SIGXCPU",
        _a[WASI_SIGXFSZ] = "SIGXFSZ",
        _a[WASI_SIGVTALRM] = "SIGVTALRM",
        _a);

    /* eslint-disable no-unused-vars */
    // Import our default bindings depending on the environment
    var defaultBindings;
    defaultBindings = bindings;
    var msToNs = function (ms) {
        var msInt = Math.trunc(ms);
        var decimal = BigIntPolyfill(Math.round((ms - msInt) * 1000));
        var ns = BigIntPolyfill(msInt) * BigIntPolyfill(1000);
        return ns + decimal;
    };
    var wrap = function (f) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            return f.apply(void 0, __spread(args));
        }
        catch (e) {
            if (typeof e === "number") {
                return e;
            }
            if (e && e.errno) {
                return ERROR_MAP[e.code] || WASI_EINVAL;
            }
            throw e;
        }
    }; };
    var stat = function (wasi, fd) {
        var entry = wasi.FD_MAP.get(fd);
        if (!entry) {
            throw WASI_EBADF;
        }
        if (entry.filetype === undefined) {
            var stats = wasi.bindings.fs.fstatSync(entry.real);
            var _a = translateFileAttributes(wasi, fd, stats), filetype = _a.filetype, rightsBase = _a.rightsBase, rightsInheriting = _a.rightsInheriting;
            entry.filetype = filetype;
            if (!entry.rights) {
                entry.rights = {
                    base: rightsBase,
                    inheriting: rightsInheriting
                };
            }
        }
        return entry;
    };
    var translateFileAttributes = function (wasi, fd, stats) {
        switch (true) {
            case stats.isBlockDevice():
                return {
                    filetype: WASI_FILETYPE_BLOCK_DEVICE,
                    rightsBase: RIGHTS_BLOCK_DEVICE_BASE,
                    rightsInheriting: RIGHTS_BLOCK_DEVICE_INHERITING
                };
            case stats.isCharacterDevice(): {
                var filetype = WASI_FILETYPE_CHARACTER_DEVICE;
                if (fd !== undefined && wasi.bindings.isTTY(fd)) {
                    return {
                        filetype: filetype,
                        rightsBase: RIGHTS_TTY_BASE,
                        rightsInheriting: RIGHTS_TTY_INHERITING
                    };
                }
                return {
                    filetype: filetype,
                    rightsBase: RIGHTS_CHARACTER_DEVICE_BASE,
                    rightsInheriting: RIGHTS_CHARACTER_DEVICE_INHERITING
                };
            }
            case stats.isDirectory():
                return {
                    filetype: WASI_FILETYPE_DIRECTORY,
                    rightsBase: RIGHTS_DIRECTORY_BASE,
                    rightsInheriting: RIGHTS_DIRECTORY_INHERITING
                };
            case stats.isFIFO():
                return {
                    filetype: WASI_FILETYPE_SOCKET_STREAM,
                    rightsBase: RIGHTS_SOCKET_BASE,
                    rightsInheriting: RIGHTS_SOCKET_INHERITING
                };
            case stats.isFile():
                return {
                    filetype: WASI_FILETYPE_REGULAR_FILE,
                    rightsBase: RIGHTS_REGULAR_FILE_BASE,
                    rightsInheriting: RIGHTS_REGULAR_FILE_INHERITING
                };
            case stats.isSocket():
                return {
                    filetype: WASI_FILETYPE_SOCKET_STREAM,
                    rightsBase: RIGHTS_SOCKET_BASE,
                    rightsInheriting: RIGHTS_SOCKET_INHERITING
                };
            case stats.isSymbolicLink():
                return {
                    filetype: WASI_FILETYPE_SYMBOLIC_LINK,
                    rightsBase: BigIntPolyfill(0),
                    rightsInheriting: BigIntPolyfill(0)
                };
            default:
                return {
                    filetype: WASI_FILETYPE_UNKNOWN,
                    rightsBase: BigIntPolyfill(0),
                    rightsInheriting: BigIntPolyfill(0)
                };
        }
    };
    var WASIExitError = /** @class */ (function (_super) {
        __extends(WASIExitError, _super);
        function WASIExitError(code) {
            var _this = _super.call(this, "WASI Exit error: " + code) || this;
            _this.code = code;
            return _this;
        }
        return WASIExitError;
    }(Error));
    var WASIKillError = /** @class */ (function (_super) {
        __extends(WASIKillError, _super);
        function WASIKillError(signal) {
            var _this = _super.call(this, "WASI Kill signal: " + signal) || this;
            _this.signal = signal;
            return _this;
        }
        return WASIKillError;
    }(Error));
    var WASI = /** @class */ (function () {
        function WASI(wasiConfig) {
            var e_1, _a;
            var _this = this;
            // Destructur our wasiConfig
            var preopenDirectories = {};
            if (wasiConfig && wasiConfig.preopenDirectories) {
                preopenDirectories = wasiConfig.preopenDirectories;
            }
            var env = {};
            if (wasiConfig && wasiConfig.env) {
                env = wasiConfig.env;
            }
            var args = [];
            if (wasiConfig && wasiConfig.args) {
                args = wasiConfig.args;
            }
            var bindings = defaultBindings;
            if (wasiConfig && wasiConfig.bindings) {
                bindings = wasiConfig.bindings;
            }
            // @ts-ignore
            this.memory = undefined;
            // @ts-ignore
            this.view = undefined;
            this.bindings = bindings;
            this.FD_MAP = new Map([
                [
                    WASI_STDIN_FILENO,
                    {
                        real: 0,
                        filetype: undefined,
                        rights: {
                            base: RIGHTS_REGULAR_FILE_BASE,
                            inheriting: BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ],
                [
                    WASI_STDOUT_FILENO,
                    {
                        real: 1,
                        filetype: undefined,
                        rights: {
                            base: RIGHTS_REGULAR_FILE_BASE,
                            inheriting: BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ],
                [
                    WASI_STDERR_FILENO,
                    {
                        real: 2,
                        filetype: undefined,
                        rights: {
                            base: RIGHTS_REGULAR_FILE_BASE,
                            inheriting: BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ]
            ]);
            var fs = this.bindings.fs;
            var path = this.bindings.path;
            try {
                for (var _b = __values(Object.entries(preopenDirectories)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                    var real = fs.openSync(v, fs.constants.O_RDONLY);
                    var newfd = __spread(this.FD_MAP.keys()).reverse()[0] + 1;
                    this.FD_MAP.set(newfd, {
                        real: real,
                        filetype: WASI_FILETYPE_DIRECTORY,
                        rights: {
                            base: RIGHTS_DIRECTORY_BASE,
                            inheriting: RIGHTS_DIRECTORY_INHERITING
                        },
                        fakePath: k,
                        path: v
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var getiovs = function (iovs, iovsLen) {
                // iovs* -> [iov, iov, ...]
                // __wasi_ciovec_t {
                //   void* buf,
                //   size_t buf_len,
                // }
                _this.refreshMemory();
                var buffers = Array.from({ length: iovsLen }, function (_, i) {
                    var ptr = iovs + i * 8;
                    var buf = _this.view.getUint32(ptr, true);
                    var bufLen = _this.view.getUint32(ptr + 4, true);
                    return new Uint8Array(_this.memory.buffer, buf, bufLen);
                });
                return buffers;
            };
            var CHECK_FD = function (fd, rights) {
                var stats = stat(_this, fd);
                if (rights !== BigIntPolyfill(0) && (stats.rights.base & rights) === BigIntPolyfill(0)) {
                    throw WASI_EPERM;
                }
                return stats;
            };
            var CPUTIME_START = bindings.hrtime();
            var now = function (clockId) {
                switch (clockId) {
                    case WASI_CLOCK_MONOTONIC:
                    case WASI_CLOCK_REALTIME:
                        return bindings.hrtime();
                    case WASI_CLOCK_PROCESS_CPUTIME_ID:
                    case WASI_CLOCK_THREAD_CPUTIME_ID:
                        // return bindings.hrtime(CPUTIME_START)
                        return bindings.hrtime() - CPUTIME_START;
                    default:
                        return null;
                }
            };
            this.wasiImport = {
                args_get: function (argv, argvBuf) {
                    _this.refreshMemory();
                    var coffset = argv;
                    var offset = argvBuf;
                    args.forEach(function (a) {
                        _this.view.setUint32(coffset, offset, true);
                        coffset += 4;
                        offset += isomorphicBuffer.from(_this.memory.buffer).write(a + "\0", offset);
                    });
                    return WASI_ESUCCESS;
                },
                args_sizes_get: function (argc, argvBufSize) {
                    _this.refreshMemory();
                    _this.view.setUint32(argc, args.length, true);
                    var size = args.reduce(function (acc, a) { return acc + isomorphicBuffer.byteLength(a) + 1; }, 0);
                    _this.view.setUint32(argvBufSize, size, true);
                    return WASI_ESUCCESS;
                },
                environ_get: function (environ, environBuf) {
                    _this.refreshMemory();
                    var coffset = environ;
                    var offset = environBuf;
                    Object.entries(env).forEach(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        _this.view.setUint32(coffset, offset, true);
                        coffset += 4;
                        offset += isomorphicBuffer.from(_this.memory.buffer).write(key + "=" + value + "\0", offset);
                    });
                    return WASI_ESUCCESS;
                },
                environ_sizes_get: function (environCount, environBufSize) {
                    _this.refreshMemory();
                    var envProcessed = Object.entries(env).map(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        return key + "=" + value + "\0";
                    });
                    var size = envProcessed.reduce(function (acc, e) { return acc + isomorphicBuffer.byteLength(e); }, 0);
                    _this.view.setUint32(environCount, envProcessed.length, true);
                    _this.view.setUint32(environBufSize, size, true);
                    return WASI_ESUCCESS;
                },
                clock_res_get: function (clockId, resolution) {
                    _this.view.setBigUint64(resolution, BigIntPolyfill(0));
                    return WASI_ESUCCESS;
                },
                clock_time_get: function (clockId, precision, time) {
                    _this.refreshMemory();
                    var n = now(clockId);
                    if (n === null) {
                        return WASI_EINVAL;
                    }
                    _this.view.setBigUint64(time, BigIntPolyfill(n), true);
                    return WASI_ESUCCESS;
                },
                fd_advise: wrap(function (fd, offset, len, advice) {
                    CHECK_FD(fd, WASI_RIGHT_FD_ADVISE);
                    return WASI_ENOSYS;
                }),
                fd_allocate: wrap(function (fd, offset, len) {
                    CHECK_FD(fd, WASI_RIGHT_FD_ALLOCATE);
                    return WASI_ENOSYS;
                }),
                fd_close: wrap(function (fd) {
                    var stats = CHECK_FD(fd, BigIntPolyfill(0));
                    fs.closeSync(stats.real);
                    _this.FD_MAP.delete(fd);
                    return WASI_ESUCCESS;
                }),
                fd_datasync: function (fd) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_DATASYNC);
                    fs.fdatasyncSync(stats.real);
                    return WASI_ESUCCESS;
                },
                fd_fdstat_get: wrap(function (fd, bufPtr) {
                    var stats = CHECK_FD(fd, BigIntPolyfill(0));
                    _this.refreshMemory();
                    _this.view.setUint8(bufPtr, stats.filetype); // FILETYPE u8
                    _this.view.setUint16(bufPtr + 2, 0, true); // FDFLAG u16
                    _this.view.setUint16(bufPtr + 4, 0, true); // FDFLAG u16
                    _this.view.setBigUint64(bufPtr + 8, stats.rights.base, true); // u64
                    _this.view.setBigUint64(bufPtr + 8 + 8, stats.rights.inheriting, true); // u64
                    return WASI_ESUCCESS;
                }),
                fd_fdstat_set_flags: wrap(function (fd, flags) {
                    CHECK_FD(fd, WASI_RIGHT_FD_FDSTAT_SET_FLAGS);
                    return WASI_ENOSYS;
                }),
                fd_fdstat_set_rights: wrap(function (fd, fsRightsBase, fsRightsInheriting) {
                    var stats = CHECK_FD(fd, BigIntPolyfill(0));
                    var nrb = stats.rights.base | fsRightsBase;
                    if (nrb > stats.rights.base) {
                        return WASI_EPERM;
                    }
                    var nri = stats.rights.inheriting | fsRightsInheriting;
                    if (nri > stats.rights.inheriting) {
                        return WASI_EPERM;
                    }
                    stats.rights.base = nrb;
                    stats.rights.inheriting = nri;
                    return WASI_ESUCCESS;
                }),
                fd_filestat_get: wrap(function (fd, bufPtr) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_FILESTAT_GET);
                    var rstats = fs.fstatSync(stats.real);
                    _this.refreshMemory();
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.dev), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.ino), true);
                    bufPtr += 8;
                    _this.view.setUint8(bufPtr, stats.filetype);
                    bufPtr += 4;
                    _this.view.setUint32(bufPtr, Number(rstats.nlink), true);
                    bufPtr += 4;
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.size), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
                    bufPtr += 8;
                    return WASI_ESUCCESS;
                }),
                fd_filestat_set_size: wrap(function (fd, stSize) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_FILESTAT_SET_SIZE);
                    fs.ftruncate(stats.real, Number(stSize));
                    return WASI_ESUCCESS;
                }),
                fd_filestat_set_times: wrap(function (fd, stAtim, stMtim, fstflags) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_FILESTAT_SET_TIMES);
                    var n = now(WASI_CLOCK_REALTIME);
                    var atimNow = (fstflags & WASI_FILESTAT_SET_ATIM_NOW) ===
                        WASI_FILESTAT_SET_ATIM_NOW;
                    var mtimNow = (fstflags & WASI_FILESTAT_SET_MTIM_NOW) ===
                        WASI_FILESTAT_SET_MTIM_NOW;
                    fs.futimesSync(stats.real, atimNow ? n : stAtim, mtimNow ? n : stMtim);
                    return WASI_ESUCCESS;
                }),
                fd_prestat_get: wrap(function (fd, bufPtr) {
                    var stats = CHECK_FD(fd, BigIntPolyfill(0));
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    _this.view.setUint8(bufPtr, WASI_PREOPENTYPE_DIR);
                    _this.view.setUint32(bufPtr + 4, isomorphicBuffer.byteLength(stats.fakePath), true);
                    return WASI_ESUCCESS;
                }),
                fd_prestat_dir_name: wrap(function (fd, pathPtr, pathLen) {
                    var stats = CHECK_FD(fd, BigIntPolyfill(0));
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    isomorphicBuffer.from(_this.memory.buffer).write(stats.fakePath, pathPtr, pathLen, "utf8");
                    return WASI_ESUCCESS;
                }),
                fd_pwrite: wrap(function (fd, iovs, iovsLen, offset, nwritten) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_WRITE | WASI_RIGHT_FD_SEEK);
                    var written = 0;
                    getiovs(iovs, iovsLen).forEach(function (iov) {
                        var w = 0;
                        while (w < iov.byteLength) {
                            w += fs.writeSync(stats.real, iov, w, iov.byteLength - w, offset + written + w);
                        }
                        written += w;
                    });
                    _this.view.setUint32(nwritten, written, true);
                    return WASI_ESUCCESS;
                }),
                fd_write: wrap(function (fd, iovs, iovsLen, nwritten) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_WRITE);
                    var written = 0;
                    getiovs(iovs, iovsLen).forEach(function (iov) {
                        var w = 0;
                        while (w < iov.byteLength) {
                            // console.log("FD WRITE", stats.real, iov, w, iov.byteLength - w, 0);
                            w += fs.writeSync(stats.real, iov, w, iov.byteLength - w);
                        }
                        written += w;
                    });
                    _this.view.setUint32(nwritten, written, true);
                    return WASI_ESUCCESS;
                }),
                fd_pread: wrap(function (fd, iovs, iovsLen, offset, nread) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_READ | WASI_RIGHT_FD_SEEK);
                    var read = 0;
                    getiovs(iovs, iovsLen).forEach(function (iov) {
                        var r = 0;
                        while (r < iov.byteLength) {
                            r += fs.readSync(stats.real, iov, r, iov.byteLength - r, offset + read + r);
                        }
                        read += r;
                    });
                    _this.view.setUint32(nread, read, true);
                    return WASI_ESUCCESS;
                }),
                fd_read: wrap(function (fd, iovs, iovsLen, nread) {
                    var e_2, _a;
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_READ);
                    var read = 0;
                    try {
                        outer: for (var _b = __values(getiovs(iovs, iovsLen)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var iov = _c.value;
                            var r = 0;
                            while (r < iov.byteLength) {
                                var rr = fs.readSync(stats.real, iov, r, iov.byteLength - r);
                                r += rr;
                                read += rr;
                                if (rr === 0) {
                                    break outer;
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    _this.view.setUint32(nread, read, true);
                    return WASI_ESUCCESS;
                }),
                fd_readdir: wrap(function (fd, bufPtr, bufLen, cookie, bufusedPtr) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_READDIR);
                    _this.refreshMemory();
                    var entries = fs.readdirSync(stats.path, { withFileTypes: true });
                    var startPtr = bufPtr;
                    for (var i = Number(cookie); i < entries.length; i += 1) {
                        var entry = entries[i];
                        var nameLength = isomorphicBuffer.byteLength(entry.name);
                        if (bufPtr + 24 + nameLength >= startPtr + bufLen) {
                            // It doesn't fit in the buffer
                            break;
                        }
                        _this.view.setBigUint64(bufPtr, BigIntPolyfill(i + 1), true);
                        bufPtr += 8;
                        var rstats = fs.statSync(path.resolve(stats.path, entry.name));
                        _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.ino), true);
                        bufPtr += 8;
                        _this.view.setUint32(bufPtr, nameLength, true);
                        bufPtr += 4;
                        var filetype = void 0;
                        switch (true) {
                            case rstats.isBlockDevice():
                                filetype = WASI_FILETYPE_BLOCK_DEVICE;
                                break;
                            case rstats.isCharacterDevice():
                                filetype = WASI_FILETYPE_CHARACTER_DEVICE;
                                break;
                            case rstats.isDirectory():
                                filetype = WASI_FILETYPE_DIRECTORY;
                                break;
                            case rstats.isFIFO():
                                filetype = WASI_FILETYPE_SOCKET_STREAM;
                                break;
                            case rstats.isFile():
                                filetype = WASI_FILETYPE_REGULAR_FILE;
                                break;
                            case rstats.isSocket():
                                filetype = WASI_FILETYPE_SOCKET_STREAM;
                                break;
                            case rstats.isSymbolicLink():
                                filetype = WASI_FILETYPE_SYMBOLIC_LINK;
                                break;
                            default:
                                filetype = WASI_FILETYPE_UNKNOWN;
                                break;
                        }
                        _this.view.setUint8(bufPtr, filetype);
                        bufPtr += 1;
                        bufPtr += 3; // padding
                        var memory_buffer = isomorphicBuffer.from(_this.memory.buffer);
                        memory_buffer.write(entry.name, bufPtr);
                        bufPtr += isomorphicBuffer.byteLength(entry.name);
                    }
                    var bufused = bufPtr - startPtr;
                    _this.view.setUint32(bufusedPtr, bufused, true);
                    return WASI_ESUCCESS;
                }),
                fd_renumber: wrap(function (from, to) {
                    CHECK_FD(from, BigIntPolyfill(0));
                    CHECK_FD(to, BigIntPolyfill(0));
                    fs.closeSync(_this.FD_MAP.get(from).real);
                    _this.FD_MAP.set(from, _this.FD_MAP.get(to));
                    _this.FD_MAP.delete(to);
                    return WASI_ESUCCESS;
                }),
                fd_seek: wrap(function (fd, offset, whence, newOffsetPtr) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_SEEK);
                    // TODO: Why?
                    // Refreshing memory here either way
                    _this.refreshMemory();
                    throw new Error("fd_seek to be implemented (without binding)");
                    // const newOffset = binding.seek(stats.real, offset, {
                    //  [WASI_WHENCE_CUR]: binding.SEEK_CUR,
                    //  [WASI_WHENCE_END]: binding.SEEK_END,
                    //  [WASI_WHENCE_SET]: binding.SEEK_SET,
                    // }[whence]);
                    // if (typeof newOffset === 'number') { // errno
                    // throw newOffset;
                    // }
                    // this.refreshMemory();
                    // this.view.setBigUint64(newOffsetPtr, newOffset, true);
                    // return WASI_ESUCCESS;
                }),
                fd_tell: wrap(function (fd, offsetPtr) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_TELL);
                    // TODO: Why?
                    // Refreshing memory here either way
                    _this.refreshMemory();
                    throw new Error("fd_tell to be implemented (without binding)");
                    // const currentOffset = binding.seek(stats.real, BigInt(0), SEEK_CUR)
                    // if (typeof currentOffset === 'number') {
                    //   // errno
                    //   throw currentOffset
                    // }
                    // this.refreshMemory()
                    // this.view.setBigUint64(offsetPtr, currentOffset, true)
                    // return WASI_ESUCCESS
                }),
                fd_sync: wrap(function (fd) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_FD_SYNC);
                    fs.fsyncSync(stats.real);
                    return WASI_ESUCCESS;
                }),
                path_create_directory: wrap(function (fd, pathPtr, pathLen) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_CREATE_DIRECTORY);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    fs.mkdirSync(path.resolve(stats.path, p));
                    return WASI_ESUCCESS;
                }),
                path_filestat_get: wrap(function (fd, flags, pathPtr, pathLen, bufPtr) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_FILESTAT_GET);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    var rstats = fs.statSync(path.resolve(stats.path, p));
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.dev), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.ino), true);
                    bufPtr += 8;
                    _this.view.setUint8(bufPtr, translateFileAttributes(_this, undefined, rstats).filetype);
                    bufPtr += 4;
                    _this.view.setUint32(bufPtr, Number(rstats.nlink), true);
                    bufPtr += 4;
                    _this.view.setBigUint64(bufPtr, BigIntPolyfill(rstats.size), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
                    bufPtr += 8;
                    _this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
                    bufPtr += 8;
                    return WASI_ESUCCESS;
                }),
                path_filestat_set_times: wrap(function (fd, fstflags, pathPtr, pathLen, stAtim, stMtim) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_FILESTAT_SET_TIMES);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var n = now(WASI_CLOCK_REALTIME);
                    var atimNow = (fstflags & WASI_FILESTAT_SET_ATIM_NOW) ===
                        WASI_FILESTAT_SET_ATIM_NOW;
                    var mtimNow = (fstflags & WASI_FILESTAT_SET_MTIM_NOW) ===
                        WASI_FILESTAT_SET_MTIM_NOW;
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    fs.utimesSync(path.resolve(stats.path, p), atimNow ? n : stAtim, mtimNow ? n : stMtim);
                    return WASI_ESUCCESS;
                }),
                path_link: wrap(function (oldFd, oldFlags, oldPath, oldPathLen, newFd, newPath, newPathLen) {
                    var ostats = CHECK_FD(oldFd, WASI_RIGHT_PATH_LINK_SOURCE);
                    var nstats = CHECK_FD(newFd, WASI_RIGHT_PATH_LINK_TARGET);
                    if (!ostats.path || !nstats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var op = isomorphicBuffer.from(_this.memory.buffer, oldPath, oldPathLen).toString();
                    var np = isomorphicBuffer.from(_this.memory.buffer, newPath, newPathLen).toString();
                    fs.linkSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
                    return WASI_ESUCCESS;
                }),
                path_open: wrap(function (dirfd, dirflags, pathPtr, pathLen, oflags, fsRightsBase, fsRightsInheriting, fsFlags, fd) {
                    var stats = CHECK_FD(dirfd, WASI_RIGHT_PATH_OPEN);
                    fsRightsBase = BigIntPolyfill(fsRightsBase);
                    fsRightsInheriting = BigIntPolyfill(fsRightsInheriting);
                    var read = (fsRightsBase & (WASI_RIGHT_FD_READ | WASI_RIGHT_FD_READDIR)) !==
                        BigIntPolyfill(0);
                    var write = (fsRightsBase &
                        (WASI_RIGHT_FD_DATASYNC |
                            WASI_RIGHT_FD_WRITE |
                            WASI_RIGHT_FD_ALLOCATE |
                            WASI_RIGHT_FD_FILESTAT_SET_SIZE)) !==
                        BigIntPolyfill(0);
                    var noflags;
                    if (write && read) {
                        noflags = fs.constants.O_RDWR;
                    }
                    else if (read) {
                        noflags = fs.constants.O_RDONLY;
                    }
                    else if (write) {
                        noflags = fs.constants.O_WRONLY;
                    }
                    // fsRightsBase is needed here but perhaps we should do it in neededInheriting
                    var neededBase = fsRightsBase | WASI_RIGHT_PATH_OPEN;
                    var neededInheriting = fsRightsBase | fsRightsInheriting;
                    if ((oflags & WASI_O_CREAT) !== 0) {
                        noflags |= fs.constants.O_CREAT;
                        neededBase |= WASI_RIGHT_PATH_CREATE_FILE;
                    }
                    if ((oflags & WASI_O_DIRECTORY) !== 0) {
                        noflags |= fs.constants.O_DIRECTORY;
                    }
                    if ((oflags & WASI_O_EXCL) !== 0) {
                        noflags |= fs.constants.O_EXCL;
                    }
                    if ((oflags & WASI_O_TRUNC) !== 0) {
                        noflags |= fs.constants.O_TRUNC;
                        neededBase |= WASI_RIGHT_PATH_FILESTAT_SET_SIZE;
                    }
                    // Convert file descriptor flags.
                    if ((fsFlags & WASI_FDFLAG_APPEND) !== 0) {
                        noflags |= fs.constants.O_APPEND;
                    }
                    if ((fsFlags & WASI_FDFLAG_DSYNC) !== 0) {
                        if (fs.constants.O_DSYNC) {
                            noflags |= fs.constants.O_DSYNC;
                        }
                        else {
                            noflags |= fs.constants.O_SYNC;
                        }
                        neededInheriting |= WASI_RIGHT_FD_DATASYNC;
                    }
                    if ((fsFlags & WASI_FDFLAG_NONBLOCK) !== 0) {
                        noflags |= fs.constants.O_NONBLOCK;
                    }
                    if ((fsFlags & WASI_FDFLAG_RSYNC) !== 0) {
                        if (fs.constants.O_RSYNC) {
                            noflags |= fs.constants.O_RSYNC;
                        }
                        else {
                            noflags |= fs.constants.O_SYNC;
                        }
                        neededInheriting |= WASI_RIGHT_FD_SYNC;
                    }
                    if ((fsFlags & WASI_FDFLAG_SYNC) !== 0) {
                        noflags |= fs.constants.O_SYNC;
                        neededInheriting |= WASI_RIGHT_FD_SYNC;
                    }
                    if (write &&
                        (noflags & (fs.constants.O_APPEND | fs.constants.O_TRUNC)) === 0) {
                        neededInheriting |= WASI_RIGHT_FD_SEEK;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    var fullUnresolved = path.resolve(stats.path, p);
                    if (path.relative(stats.path, fullUnresolved).startsWith("..")) {
                        return WASI_ENOTCAPABLE;
                    }
                    var full;
                    try {
                        full = fs.realpathSync(fullUnresolved);
                        if (path.relative(stats.path, full).startsWith("..")) {
                            return WASI_ENOTCAPABLE;
                        }
                    }
                    catch (e) {
                        if (e.code === "ENOENT") {
                            full = fullUnresolved;
                        }
                        else {
                            throw e;
                        }
                    }
                    var realfd = fs.openSync(full, noflags);
                    var newfd = __spread(_this.FD_MAP.keys()).reverse()[0] + 1;
                    _this.FD_MAP.set(newfd, {
                        real: realfd,
                        filetype: undefined,
                        rights: {
                            base: neededBase,
                            inheriting: neededInheriting
                        },
                        path: full
                    });
                    stat(_this, newfd);
                    _this.view.setUint32(fd, newfd, true);
                    return WASI_ESUCCESS;
                }),
                path_readlink: wrap(function (fd, pathPtr, pathLen, buf, bufLen, bufused) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_READLINK);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    var full = path.resolve(stats.path, p);
                    var r = fs.readlinkSync(full);
                    var used = isomorphicBuffer.from(_this.memory.buffer).write(r, buf, bufLen);
                    _this.view.setUint32(bufused, used, true);
                    return WASI_ESUCCESS;
                }),
                path_remove_directory: wrap(function (fd, pathPtr, pathLen) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_REMOVE_DIRECTORY);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    fs.rmdirSync(path.resolve(stats.path, p));
                    return WASI_ESUCCESS;
                }),
                path_rename: wrap(function (oldFd, oldPath, oldPathLen, newFd, newPath, newPathLen) {
                    var ostats = CHECK_FD(oldFd, WASI_RIGHT_PATH_RENAME_SOURCE);
                    var nstats = CHECK_FD(newFd, WASI_RIGHT_PATH_RENAME_TARGET);
                    if (!ostats.path || !nstats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var op = isomorphicBuffer.from(_this.memory.buffer, oldPath, oldPathLen).toString();
                    var np = isomorphicBuffer.from(_this.memory.buffer, newPath, newPathLen).toString();
                    fs.renameSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
                    return WASI_ESUCCESS;
                }),
                path_symlink: wrap(function (oldPath, oldPathLen, fd, newPath, newPathLen) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_SYMLINK);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var op = isomorphicBuffer.from(_this.memory.buffer, oldPath, oldPathLen).toString();
                    var np = isomorphicBuffer.from(_this.memory.buffer, newPath, newPathLen).toString();
                    fs.symlinkSync(op, path.resolve(stats.path, np));
                    return WASI_ESUCCESS;
                }),
                path_unlink_file: wrap(function (fd, pathPtr, pathLen) {
                    var stats = CHECK_FD(fd, WASI_RIGHT_PATH_UNLINK_FILE);
                    if (!stats.path) {
                        return WASI_EINVAL;
                    }
                    _this.refreshMemory();
                    var p = isomorphicBuffer.from(_this.memory.buffer, pathPtr, pathLen).toString();
                    fs.unlinkSync(path.resolve(stats.path, p));
                    return WASI_ESUCCESS;
                }),
                poll_oneoff: function (sin, sout, nsubscriptions, nevents) {
                    var eventc = 0;
                    var waitEnd = 0;
                    _this.refreshMemory();
                    for (var i = 0; i < nsubscriptions; i += 1) {
                        var userdata = _this.view.getBigUint64(sin, true);
                        sin += 8;
                        var type = _this.view.getUint8(sin);
                        sin += 1;
                        switch (type) {
                            case WASI_EVENTTYPE_CLOCK: {
                                sin += 7; // padding
                                var identifier = _this.view.getBigUint64(sin, true);
                                sin += 8;
                                var clockid = _this.view.getUint32(sin, true);
                                sin += 4;
                                sin += 4; // padding
                                var timestamp = _this.view.getBigUint64(sin, true);
                                sin += 8;
                                var precision = _this.view.getBigUint64(sin, true);
                                sin += 8;
                                var subclockflags = _this.view.getUint16(sin, true);
                                sin += 2;
                                sin += 6; // padding
                                var absolute = subclockflags === 1;
                                var e = WASI_ESUCCESS;
                                var n = BigIntPolyfill(now(clockid));
                                if (n === null) {
                                    e = WASI_EINVAL;
                                }
                                else {
                                    var end = absolute ? timestamp : n + timestamp;
                                    waitEnd =
                                        end > waitEnd ? end : waitEnd;
                                }
                                _this.view.setBigUint64(sout, userdata, true);
                                sout += 8;
                                _this.view.setUint16(sout, e, true); // error
                                sout += 2; // pad offset 2
                                _this.view.setUint8(sout, WASI_EVENTTYPE_CLOCK);
                                sout += 1; // pad offset 3
                                sout += 5; // padding to 8
                                eventc += 1;
                                break;
                            }
                            case WASI_EVENTTYPE_FD_READ:
                            case WASI_EVENTTYPE_FD_WRITE: {
                                sin += 3; // padding
                                var fd = _this.view.getUint32(sin, true);
                                sin += 4;
                                _this.view.setBigUint64(sout, userdata, true);
                                sout += 8;
                                _this.view.setUint16(sout, WASI_ENOSYS, true); // error
                                sout += 2; // pad offset 2
                                _this.view.setUint8(sout, type);
                                sout += 1; // pad offset 3
                                sout += 5; // padding to 8
                                eventc += 1;
                                break;
                            }
                            default:
                                return WASI_EINVAL;
                        }
                    }
                    _this.view.setUint32(nevents, eventc, true);
                    while (bindings.hrtime() < waitEnd) {
                        // nothing
                    }
                    return WASI_ESUCCESS;
                },
                proc_exit: function (rval) {
                    bindings.exit(rval);
                    return WASI_ESUCCESS;
                },
                proc_raise: function (sig) {
                    if (!(sig in SIGNAL_MAP)) {
                        return WASI_EINVAL;
                    }
                    bindings.kill(SIGNAL_MAP[sig]);
                    return WASI_ESUCCESS;
                },
                random_get: function (bufPtr, bufLen) {
                    _this.refreshMemory();
                    bindings.randomFillSync(new Uint8Array(_this.memory.buffer), bufPtr, bufLen);
                    return WASI_ESUCCESS;
                },
                sched_yield: function () {
                    // Single threaded environment
                    return WASI_ENOSYS;
                },
                sock_recv: function () {
                    return WASI_ENOSYS;
                },
                sock_send: function () {
                    return WASI_ENOSYS;
                },
                sock_shutdown: function () {
                    return WASI_ENOSYS;
                }
            };
        }
        WASI.prototype.refreshMemory = function () {
            // @ts-ignore
            if (!this.view || this.view.buffer.byteLength === 0) {
                this.view = new DataViewPolyfill(this.memory.buffer);
            }
        };
        WASI.prototype.setMemory = function (memory) {
            this.memory = memory;
        };
        WASI.prototype.start = function (instance) {
            var exports = instance.exports;
            if (exports === null || typeof exports !== "object") {
                throw new Error("instance.exports must be an Object. Received " + exports + ".");
            }
            var memory = exports.memory;
            if (!(memory instanceof WebAssembly.Memory)) {
                throw new Error("instance.exports.memory must be a WebAssembly.Memory. Recceived " + memory + ".");
            }
            this.setMemory(memory);
            if (exports._start) {
                exports._start();
            }
        };
        WASI.defaultBindings = defaultBindings;
        return WASI;
    }());

    let wasm;

    let cachegetInt32Memory = null;
    function getInt32Memory() {
      if (
        cachegetInt32Memory === null ||
        cachegetInt32Memory.buffer !== wasm.memory.buffer
      ) {
        cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
      }
      return cachegetInt32Memory;
    }

    let cachedTextDecoder = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    });

    let cachegetUint8Memory = null;
    function getUint8Memory() {
      if (
        cachegetUint8Memory === null ||
        cachegetUint8Memory.buffer !== wasm.memory.buffer
      ) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
      }
      return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
      return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    let WASM_VECTOR_LEN = 0;

    function passArray8ToWasm(arg) {
      const ptr = wasm.__wbindgen_malloc(arg.length * 1);
      getUint8Memory().set(arg, ptr / 1);
      WASM_VECTOR_LEN = arg.length;
      return ptr;
    }

    function getArrayU8FromWasm(ptr, len) {
      return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
    }
    /**
     * i64 lowering that can be done by the browser
     * @param {Uint8Array} wasm_binary
     * @returns {Uint8Array}
     */
    function lowerI64Imports(wasm_binary) {
      const retptr = 8;
      const ret = wasm.lowerI64Imports(
        retptr,
        passArray8ToWasm(wasm_binary),
        WASM_VECTOR_LEN
      );
      const memi32 = getInt32Memory();
      const v0 = getArrayU8FromWasm(
        memi32[retptr / 4 + 0],
        memi32[retptr / 4 + 1]
      ).slice();
      wasm.__wbindgen_free(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);
      return v0;
    }

    function init$2(module) {
      if (typeof module === "undefined") {
        module = (document.currentScript && document.currentScript.src || new URL('worker.js', document.baseURI).href).replace(/\.js$/, "_bg.wasm");
      }
      let result;
      const imports = {};
      imports.wbg = {};
      imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm(arg0, arg1));
      };

      if (
        (typeof URL === "function" && module instanceof URL) ||
        typeof module === "string" ||
        (typeof Request === "function" && module instanceof Request)
      ) {
        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === "function") {
          result = WebAssembly.instantiateStreaming(response, imports).catch(e => {
            return response
              .then(r => {
                if (r.headers.get("Content-Type") != "application/wasm") {
                  console.warn(
                    "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                    e
                  );
                  return r.arrayBuffer();
                } else {
                  throw e;
                }
              })
              .then(bytes => WebAssembly.instantiate(bytes, imports));
          });
        } else {
          result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
      } else {
        result = WebAssembly.instantiate(module, imports).then(result => {
          if (result instanceof WebAssembly.Instance) {
            return { instance: result, module };
          } else {
            return result;
          }
        });
      }
      return result.then(({ instance, module }) => {
        wasm = instance.exports;
        init$2.__wbindgen_wasm_module = module;

        return wasm;
      });
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule$1(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var constants = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.constants = {
      O_RDONLY: 0,
      O_WRONLY: 1,
      O_RDWR: 2,
      S_IFMT: 61440,
      S_IFREG: 32768,
      S_IFDIR: 16384,
      S_IFCHR: 8192,
      S_IFBLK: 24576,
      S_IFIFO: 4096,
      S_IFLNK: 40960,
      S_IFSOCK: 49152,
      O_CREAT: 64,
      O_EXCL: 128,
      O_NOCTTY: 256,
      O_TRUNC: 512,
      O_APPEND: 1024,
      O_DIRECTORY: 65536,
      O_NOATIME: 262144,
      O_NOFOLLOW: 131072,
      O_SYNC: 1052672,
      O_DIRECT: 16384,
      O_NONBLOCK: 2048,
      S_IRWXU: 448,
      S_IRUSR: 256,
      S_IWUSR: 128,
      S_IXUSR: 64,
      S_IRWXG: 56,
      S_IRGRP: 32,
      S_IWGRP: 16,
      S_IXGRP: 8,
      S_IRWXO: 7,
      S_IROTH: 4,
      S_IWOTH: 2,
      S_IXOTH: 1,
      F_OK: 0,
      R_OK: 4,
      W_OK: 2,
      X_OK: 1,
      UV_FS_SYMLINK_DIR: 1,
      UV_FS_SYMLINK_JUNCTION: 2,
      UV_FS_COPYFILE_EXCL: 1,
      UV_FS_COPYFILE_FICLONE: 2,
      UV_FS_COPYFILE_FICLONE_FORCE: 4,
      COPYFILE_EXCL: 1,
      COPYFILE_FICLONE: 2,
      COPYFILE_FICLONE_FORCE: 4,
    };
    });

    unwrapExports(constants);
    var constants_1 = constants.constants;

    var getBigInt = createCommonjsModule$1(function (module, exports) {
    if (typeof BigInt === 'function') exports.default = BigInt;
    else
      exports.default = function BigIntNotSupported() {
        throw new Error('BigInt is not supported in this environment.');
      };
    });

    var Stats_1 = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });


    var S_IFMT = constants.constants.S_IFMT,
      S_IFDIR = constants.constants.S_IFDIR,
      S_IFREG = constants.constants.S_IFREG,
      S_IFBLK = constants.constants.S_IFBLK,
      S_IFCHR = constants.constants.S_IFCHR,
      S_IFLNK = constants.constants.S_IFLNK,
      S_IFIFO = constants.constants.S_IFIFO,
      S_IFSOCK = constants.constants.S_IFSOCK;
    /**
     * Statistics about a file/directory, like `fs.Stats`.
     */
    var Stats = /** @class */ (function() {
      function Stats() {}
      Stats.build = function(node, bigint) {
        if (bigint === void 0) {
          bigint = false;
        }
        var stats = new Stats();
        var uid = node.uid,
          gid = node.gid,
          atime = node.atime,
          mtime = node.mtime,
          ctime = node.ctime;
        var getStatNumber = !bigint
          ? function(number) {
              return number;
            }
          : getBigInt.default;
        // Copy all values on Stats from Node, so that if Node values
        // change, values on Stats would still be the old ones,
        // just like in Node fs.
        stats.uid = getStatNumber(uid);
        stats.gid = getStatNumber(gid);
        stats.rdev = getStatNumber(0);
        stats.blksize = getStatNumber(4096);
        stats.ino = getStatNumber(node.ino);
        stats.size = getStatNumber(node.getSize());
        stats.blocks = getStatNumber(1);
        stats.atime = atime;
        stats.mtime = mtime;
        stats.ctime = ctime;
        stats.birthtime = ctime;
        stats.atimeMs = getStatNumber(atime.getTime());
        stats.mtimeMs = getStatNumber(mtime.getTime());
        var ctimeMs = getStatNumber(ctime.getTime());
        stats.ctimeMs = ctimeMs;
        stats.birthtimeMs = ctimeMs;
        stats.dev = getStatNumber(0);
        stats.mode = getStatNumber(node.mode);
        stats.nlink = getStatNumber(node.nlink);
        return stats;
      };
      Stats.prototype._checkModeProperty = function(property) {
        return (Number(this.mode) & S_IFMT) === property;
      };
      Stats.prototype.isDirectory = function() {
        return this._checkModeProperty(S_IFDIR);
      };
      Stats.prototype.isFile = function() {
        return this._checkModeProperty(S_IFREG);
      };
      Stats.prototype.isBlockDevice = function() {
        return this._checkModeProperty(S_IFBLK);
      };
      Stats.prototype.isCharacterDevice = function() {
        return this._checkModeProperty(S_IFCHR);
      };
      Stats.prototype.isSymbolicLink = function() {
        return this._checkModeProperty(S_IFLNK);
      };
      Stats.prototype.isFIFO = function() {
        return this._checkModeProperty(S_IFIFO);
      };
      Stats.prototype.isSocket = function() {
        return this._checkModeProperty(S_IFSOCK);
      };
      return Stats;
    })();
    exports.Stats = Stats;
    exports.default = Stats;
    });

    unwrapExports(Stats_1);
    var Stats_2 = Stats_1.Stats;

    var global$1$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    var lookup$2 = [];
    var revLookup$2 = [];
    var Arr$2 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited$2 = false;
    function init$3 () {
      inited$2 = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup$2[i] = code[i];
        revLookup$2[code.charCodeAt(i)] = i;
      }

      revLookup$2['-'.charCodeAt(0)] = 62;
      revLookup$2['_'.charCodeAt(0)] = 63;
    }

    function toByteArray$2 (b64) {
      if (!inited$2) {
        init$3();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr$2(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup$2[b64.charCodeAt(i)] << 18) | (revLookup$2[b64.charCodeAt(i + 1)] << 12) | (revLookup$2[b64.charCodeAt(i + 2)] << 6) | revLookup$2[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup$2[b64.charCodeAt(i)] << 2) | (revLookup$2[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup$2[b64.charCodeAt(i)] << 10) | (revLookup$2[b64.charCodeAt(i + 1)] << 4) | (revLookup$2[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64$2 (num) {
      return lookup$2[num >> 18 & 0x3F] + lookup$2[num >> 12 & 0x3F] + lookup$2[num >> 6 & 0x3F] + lookup$2[num & 0x3F]
    }

    function encodeChunk$2 (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64$2(tmp));
      }
      return output.join('')
    }

    function fromByteArray$2 (uint8) {
      if (!inited$2) {
        init$3();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk$2(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup$2[tmp >> 2];
        output += lookup$2[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup$2[tmp >> 10];
        output += lookup$2[(tmp >> 4) & 0x3F];
        output += lookup$2[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read$2 (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write$2 (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString$2 = {}.toString;

    var isArray$2 = Array.isArray || function (arr) {
      return toString$2.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES$2 = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer$2.TYPED_ARRAY_SUPPORT = global$1$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1$1.TYPED_ARRAY_SUPPORT
      : true;

    /*
     * Export kMaxLength after typed array support is determined.
     */
    var _kMaxLength$1 = kMaxLength$2();

    function kMaxLength$2 () {
      return Buffer$2.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer$2 (that, length) {
      if (kMaxLength$2() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer$2.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer$2(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer$2 (arg, encodingOrOffset, length) {
      if (!Buffer$2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$2)) {
        return new Buffer$2(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe$2(this, arg)
      }
      return from$2(this, arg, encodingOrOffset, length)
    }

    Buffer$2.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer$2._augment = function (arr) {
      arr.__proto__ = Buffer$2.prototype;
      return arr
    };

    function from$2 (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer$2(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString$2(that, value, encodingOrOffset)
      }

      return fromObject$2(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer$2.from = function (value, encodingOrOffset, length) {
      return from$2(null, value, encodingOrOffset, length)
    };

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      Buffer$2.prototype.__proto__ = Uint8Array.prototype;
      Buffer$2.__proto__ = Uint8Array;
    }

    function assertSize$2 (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc$2 (that, size, fill, encoding) {
      assertSize$2(size);
      if (size <= 0) {
        return createBuffer$2(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer$2(that, size).fill(fill, encoding)
          : createBuffer$2(that, size).fill(fill)
      }
      return createBuffer$2(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer$2.alloc = function (size, fill, encoding) {
      return alloc$2(null, size, fill, encoding)
    };

    function allocUnsafe$2 (that, size) {
      assertSize$2(size);
      that = createBuffer$2(that, size < 0 ? 0 : checked$2(size) | 0);
      if (!Buffer$2.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer$2.allocUnsafe = function (size) {
      return allocUnsafe$2(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer$2.allocUnsafeSlow = function (size) {
      return allocUnsafe$2(null, size)
    };

    function fromString$2 (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer$2.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength$2(string, encoding) | 0;
      that = createBuffer$2(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike$2 (that, array) {
      var length = array.length < 0 ? 0 : checked$2(array.length) | 0;
      that = createBuffer$2(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer$2 (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer$2.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike$2(that, array);
      }
      return that
    }

    function fromObject$2 (that, obj) {
      if (internalIsBuffer$2(obj)) {
        var len = checked$2(obj.length) | 0;
        that = createBuffer$2(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan$2(obj.length)) {
            return createBuffer$2(that, 0)
          }
          return fromArrayLike$2(that, obj)
        }

        if (obj.type === 'Buffer' && isArray$2(obj.data)) {
          return fromArrayLike$2(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked$2 (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength$2()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength$2().toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer$1 (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer$2.alloc(+length)
    }
    Buffer$2.isBuffer = isBuffer$2;
    function internalIsBuffer$2 (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer$2.compare = function compare (a, b) {
      if (!internalIsBuffer$2(a) || !internalIsBuffer$2(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer$2.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer$2.concat = function concat (list, length) {
      if (!isArray$2(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer$2.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer$2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer$2(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength$2 (string, encoding) {
      if (internalIsBuffer$2(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes$2(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes$2(string).length
          default:
            if (loweredCase) return utf8ToBytes$2(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer$2.byteLength = byteLength$2;

    function slowToString$2 (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice$2(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice$2(this, start, end)

          case 'ascii':
            return asciiSlice$2(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice$2(this, start, end)

          case 'base64':
            return base64Slice$2(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice$2(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer$2.prototype._isBuffer = true;

    function swap$2 (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer$2.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap$2(this, i, i + 1);
      }
      return this
    };

    Buffer$2.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap$2(this, i, i + 3);
        swap$2(this, i + 1, i + 2);
      }
      return this
    };

    Buffer$2.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap$2(this, i, i + 7);
        swap$2(this, i + 1, i + 6);
        swap$2(this, i + 2, i + 5);
        swap$2(this, i + 3, i + 4);
      }
      return this
    };

    Buffer$2.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice$2(this, 0, length)
      return slowToString$2.apply(this, arguments)
    };

    Buffer$2.prototype.equals = function equals (b) {
      if (!internalIsBuffer$2(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer$2.compare(this, b) === 0
    };

    Buffer$2.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES$2;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer$2.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer$2(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf$2 (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer$2.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer$2(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf$2(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer$2.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf$2(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf$2 (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer$2.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer$2.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf$2(this, val, byteOffset, encoding, true)
    };

    Buffer$2.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf$2(this, val, byteOffset, encoding, false)
    };

    function hexWrite$2 (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write$2 (buf, string, offset, length) {
      return blitBuffer$2(utf8ToBytes$2(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite$2 (buf, string, offset, length) {
      return blitBuffer$2(asciiToBytes$2(string), buf, offset, length)
    }

    function latin1Write$2 (buf, string, offset, length) {
      return asciiWrite$2(buf, string, offset, length)
    }

    function base64Write$2 (buf, string, offset, length) {
      return blitBuffer$2(base64ToBytes$2(string), buf, offset, length)
    }

    function ucs2Write$2 (buf, string, offset, length) {
      return blitBuffer$2(utf16leToBytes$2(string, buf.length - offset), buf, offset, length)
    }

    Buffer$2.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite$2(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write$2(this, string, offset, length)

          case 'ascii':
            return asciiWrite$2(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write$2(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write$2(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write$2(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer$2.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice$2 (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray$2(buf)
      } else {
        return fromByteArray$2(buf.slice(start, end))
      }
    }

    function utf8Slice$2 (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray$2(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH$2 = 0x1000;

    function decodeCodePointsArray$2 (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH$2) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH$2)
        );
      }
      return res
    }

    function asciiSlice$2 (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice$2 (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice$2 (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex$2(buf[i]);
      }
      return out
    }

    function utf16leSlice$2 (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer$2.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer$2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer$2(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset$2 (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer$2.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$2(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer$2.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset$2(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer$2.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 1, this.length);
      return this[offset]
    };

    Buffer$2.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer$2.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer$2.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer$2.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer$2.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$2(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer$2.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset$2(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer$2.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer$2.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer$2.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer$2.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer$2.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer$2.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);
      return read$2(this, offset, true, 23, 4)
    };

    Buffer$2.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 4, this.length);
      return read$2(this, offset, false, 23, 4)
    };

    Buffer$2.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 8, this.length);
      return read$2(this, offset, true, 52, 8)
    };

    Buffer$2.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset$2(offset, 8, this.length);
      return read$2(this, offset, false, 52, 8)
    };

    function checkInt$2 (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer$2(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer$2.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt$2(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$2.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt$2(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$2.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 1, 0xff, 0);
      if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16$2 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer$2.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 2, 0xffff, 0);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16$2(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer$2.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 2, 0xffff, 0);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16$2(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32$2 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer$2.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32$2(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer$2.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32$2(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer$2.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt$2(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$2.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt$2(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer$2.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer$2.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16$2(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer$2.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16$2(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer$2.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32$2(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer$2.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt$2(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer$2.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32$2(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754$2 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat$2 (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754$2(buf, value, offset, 4);
      }
      write$2(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer$2.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat$2(this, value, offset, true, noAssert)
    };

    Buffer$2.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat$2(this, value, offset, false, noAssert)
    };

    function writeDouble$2 (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754$2(buf, value, offset, 8);
      }
      write$2(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer$2.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble$2(this, value, offset, true, noAssert)
    };

    Buffer$2.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble$2(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer$2.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer$2.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer$2.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer$2.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer$2(val)
          ? val
          : utf8ToBytes$2(new Buffer$2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE$2 = /[^+\/0-9A-Za-z-_]/g;

    function base64clean$2 (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim$2(str).replace(INVALID_BASE64_RE$2, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim$2 (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex$2 (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes$2 (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes$2 (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes$2 (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes$2 (str) {
      return toByteArray$2(base64clean$2(str))
    }

    function blitBuffer$2 (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan$2 (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer$2(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer$2(obj) || isSlowBuffer$2(obj))
    }

    function isFastBuffer$2 (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer$2 (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer$2(obj.slice(0, 0))
    }

    var bufferEs6$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        INSPECT_MAX_BYTES: INSPECT_MAX_BYTES$2,
        kMaxLength: _kMaxLength$1,
        Buffer: Buffer$2,
        SlowBuffer: SlowBuffer$1,
        isBuffer: isBuffer$2
    });

    // shim for using process in browser
    // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

    function defaultSetTimout$1() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout$1 () {
        throw new Error('clearTimeout has not been defined');
    }
    var cachedSetTimeout$1 = defaultSetTimout$1;
    var cachedClearTimeout$1 = defaultClearTimeout$1;
    if (typeof global$1$1.setTimeout === 'function') {
        cachedSetTimeout$1 = setTimeout;
    }
    if (typeof global$1$1.clearTimeout === 'function') {
        cachedClearTimeout$1 = clearTimeout;
    }

    function runTimeout$1(fun) {
        if (cachedSetTimeout$1 === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout$1 === defaultSetTimout$1 || !cachedSetTimeout$1) && setTimeout) {
            cachedSetTimeout$1 = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout$1(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout$1.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout$1.call(this, fun, 0);
            }
        }


    }
    function runClearTimeout$1(marker) {
        if (cachedClearTimeout$1 === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout$1 === defaultClearTimeout$1 || !cachedClearTimeout$1) && clearTimeout) {
            cachedClearTimeout$1 = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout$1(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout$1.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout$1.call(this, marker);
            }
        }



    }
    var queue$1 = [];
    var draining$1 = false;
    var currentQueue$1;
    var queueIndex$1 = -1;

    function cleanUpNextTick$1() {
        if (!draining$1 || !currentQueue$1) {
            return;
        }
        draining$1 = false;
        if (currentQueue$1.length) {
            queue$1 = currentQueue$1.concat(queue$1);
        } else {
            queueIndex$1 = -1;
        }
        if (queue$1.length) {
            drainQueue$1();
        }
    }

    function drainQueue$1() {
        if (draining$1) {
            return;
        }
        var timeout = runTimeout$1(cleanUpNextTick$1);
        draining$1 = true;

        var len = queue$1.length;
        while(len) {
            currentQueue$1 = queue$1;
            queue$1 = [];
            while (++queueIndex$1 < len) {
                if (currentQueue$1) {
                    currentQueue$1[queueIndex$1].run();
                }
            }
            queueIndex$1 = -1;
            len = queue$1.length;
        }
        currentQueue$1 = null;
        draining$1 = false;
        runClearTimeout$1(timeout);
    }
    function nextTick$1(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue$1.push(new Item$1(fun, args));
        if (queue$1.length === 1 && !draining$1) {
            runTimeout$1(drainQueue$1);
        }
    }
    // v8 likes predictible objects
    function Item$1(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item$1.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    var title$1 = 'browser';
    var platform$1 = 'browser';
    var browser$3 = true;
    var env$1 = {};
    var argv$1 = [];
    var version$1 = ''; // empty string to avoid regexp issues
    var versions$1 = {};
    var release$1 = {};
    var config$1 = {};

    function noop$1() {}

    var on$1 = noop$1;
    var addListener$1 = noop$1;
    var once$1 = noop$1;
    var off$1 = noop$1;
    var removeListener$1 = noop$1;
    var removeAllListeners$1 = noop$1;
    var emit$1 = noop$1;

    function binding$1(name) {
        throw new Error('process.binding is not supported');
    }

    function cwd$1 () { return '/' }
    function chdir$1 (dir) {
        throw new Error('process.chdir is not supported');
    }function umask$1() { return 0; }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance$2 = global$1$1.performance || {};
    var performanceNow$1 =
      performance$2.now        ||
      performance$2.mozNow     ||
      performance$2.msNow      ||
      performance$2.oNow       ||
      performance$2.webkitNow  ||
      function(){ return (new Date()).getTime() };

    // generate timestamp or delta
    // see http://nodejs.org/api/process.html#process_process_hrtime
    function hrtime$2(previousTimestamp){
      var clocktime = performanceNow$1.call(performance$2)*1e-3;
      var seconds = Math.floor(clocktime);
      var nanoseconds = Math.floor((clocktime%1)*1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds<0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds,nanoseconds]
    }

    var startTime$1 = new Date();
    function uptime$1() {
      var currentTime = new Date();
      var dif = currentTime - startTime$1;
      return dif / 1000;
    }

    var process$1 = {
      nextTick: nextTick$1,
      title: title$1,
      browser: browser$3,
      env: env$1,
      argv: argv$1,
      version: version$1,
      versions: versions$1,
      on: on$1,
      addListener: addListener$1,
      once: once$1,
      off: off$1,
      removeListener: removeListener$1,
      removeAllListeners: removeAllListeners$1,
      emit: emit$1,
      binding: binding$1,
      cwd: cwd$1,
      chdir: chdir$1,
      umask: umask$1,
      hrtime: hrtime$2,
      platform: platform$1,
      release: release$1,
      config: config$1,
      uptime: uptime$1
    };

    var inherits;
    if (typeof Object.create === 'function'){
      inherits = function inherits(ctor, superCtor) {
        // implementation from standard node.js 'util' module
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    var inherits$1 = inherits;

    var formatRegExp = /%[sdj%]/g;
    function format(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch (x) {
          case '%s': return String(args[i++]);
          case '%d': return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    }

    // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.
    function deprecate(fn, msg) {
      // Allow for deprecating things in the process of starting up.
      if (isUndefined(global$1$1.process)) {
        return function() {
          return deprecate(fn, msg).apply(this, arguments);
        };
      }

      if (process$1.noDeprecation === true) {
        return fn;
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process$1.throwDeprecation) {
            throw new Error(msg);
          } else if (process$1.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    }

    var debugs = {};
    var debugEnviron;
    function debuglog(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process$1.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = 0;
          debugs[set] = function() {
            var msg = format.apply(null, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    }

    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      // legacy...
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        _extend(ctx, opts);
      }
      // set default options
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }

    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect.colors = {
      'bold' : [1, 22],
      'italic' : [3, 23],
      'underline' : [4, 24],
      'inverse' : [7, 27],
      'white' : [37, 39],
      'grey' : [90, 39],
      'black' : [30, 39],
      'blue' : [34, 39],
      'cyan' : [36, 39],
      'green' : [32, 39],
      'magenta' : [35, 39],
      'red' : [31, 39],
      'yellow' : [33, 39]
    };

    // Don't use 'blue' not visible on cmd.exe
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };


    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
               '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }


    function stylizeNoColor(str, styleType) {
      return str;
    }


    function arrayToHash(array) {
      var hash = {};

      array.forEach(function(val, idx) {
        hash[val] = true;
      });

      return hash;
    }


    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value)
          && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '', array = false, braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray$1$1(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }


    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      // For some reason typeof null is "object", so special case here.
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }


    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }


    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              key, true));
        }
      });
      return output;
    }


    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }


    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf('\n') >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }


    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray$1$1(ar) {
      return Array.isArray(ar);
    }

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    function isNull(arg) {
      return arg === null;
    }

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }

    function isUndefined(arg) {
      return arg === void 0;
    }

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    function isError(e) {
      return isObject(e) &&
          (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function isPrimitive(arg) {
      return arg === null ||
             typeof arg === 'boolean' ||
             typeof arg === 'number' ||
             typeof arg === 'string' ||
             typeof arg === 'symbol' ||  // ES6 symbol
             typeof arg === 'undefined';
    }

    function isBuffer$1$1(maybeBuf) {
      return isBuffer$2(maybeBuf);
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }


    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec'];

    // 26 Feb 16:19:34
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()),
                  pad(d.getMinutes()),
                  pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }


    // log is just a thin wrapper to console.log that prepends a timestamp
    function log() {
      console.log('%s - %s', timestamp(), format.apply(null, arguments));
    }

    function _extend(origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;

      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var util = {
      inherits: inherits$1,
      _extend: _extend,
      log: log,
      isBuffer: isBuffer$1$1,
      isPrimitive: isPrimitive,
      isFunction: isFunction,
      isError: isError,
      isDate: isDate,
      isObject: isObject,
      isRegExp: isRegExp,
      isUndefined: isUndefined,
      isSymbol: isSymbol,
      isString: isString,
      isNumber: isNumber,
      isNullOrUndefined: isNullOrUndefined,
      isNull: isNull,
      isBoolean: isBoolean,
      isArray: isArray$1$1,
      inspect: inspect,
      deprecate: deprecate,
      format: format,
      debuglog: debuglog
    };

    function compare(a, b) {
      if (a === b) {
        return 0;
      }

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }

      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    }
    var hasOwn = Object.prototype.hasOwnProperty;

    var objectKeys = Object.keys || function (obj) {
      var keys = [];
      for (var key in obj) {
        if (hasOwn.call(obj, key)) keys.push(key);
      }
      return keys;
    };
    var pSlice = Array.prototype.slice;
    var _functionsHaveNames;
    function functionsHaveNames() {
      if (typeof _functionsHaveNames !== 'undefined') {
        return _functionsHaveNames;
      }
      return _functionsHaveNames = (function () {
        return function foo() {}.name === 'foo';
      }());
    }
    function pToString (obj) {
      return Object.prototype.toString.call(obj);
    }
    function isView(arrbuf) {
      if (isBuffer$2(arrbuf)) {
        return false;
      }
      if (typeof global$1$1.ArrayBuffer !== 'function') {
        return false;
      }
      if (typeof ArrayBuffer.isView === 'function') {
        return ArrayBuffer.isView(arrbuf);
      }
      if (!arrbuf) {
        return false;
      }
      if (arrbuf instanceof DataView) {
        return true;
      }
      if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
        return true;
      }
      return false;
    }
    // 1. The assert module provides functions that throw
    // AssertionError's when particular conditions are not met. The
    // assert module must conform to the following interface.

    function assert(value, message) {
      if (!value) fail(value, true, message, '==', ok);
    }

    // 2. The AssertionError is defined in assert.
    // new assert.AssertionError({ message: message,
    //                             actual: actual,
    //                             expected: expected })

    var regex = /\s*function\s+([^\(\s]*)\s*/;
    // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
    function getName(func) {
      if (!isFunction(func)) {
        return;
      }
      if (functionsHaveNames()) {
        return func.name;
      }
      var str = func.toString();
      var match = str.match(regex);
      return match && match[1];
    }
    assert.AssertionError = AssertionError;
    function AssertionError(options) {
      this.name = 'AssertionError';
      this.actual = options.actual;
      this.expected = options.expected;
      this.operator = options.operator;
      if (options.message) {
        this.message = options.message;
        this.generatedMessage = false;
      } else {
        this.message = getMessage(this);
        this.generatedMessage = true;
      }
      var stackStartFunction = options.stackStartFunction || fail;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, stackStartFunction);
      } else {
        // non v8 browsers so we can have a stacktrace
        var err = new Error();
        if (err.stack) {
          var out = err.stack;

          // try to strip useless frames
          var fn_name = getName(stackStartFunction);
          var idx = out.indexOf('\n' + fn_name);
          if (idx >= 0) {
            // once we have located the function frame
            // we need to strip out everything before it (and its line)
            var next_line = out.indexOf('\n', idx + 1);
            out = out.substring(next_line + 1);
          }

          this.stack = out;
        }
      }
    }

    // assert.AssertionError instanceof Error
    inherits$1(AssertionError, Error);

    function truncate(s, n) {
      if (typeof s === 'string') {
        return s.length < n ? s : s.slice(0, n);
      } else {
        return s;
      }
    }
    function inspect$1(something) {
      if (functionsHaveNames() || !isFunction(something)) {
        return inspect(something);
      }
      var rawname = getName(something);
      var name = rawname ? ': ' + rawname : '';
      return '[Function' +  name + ']';
    }
    function getMessage(self) {
      return truncate(inspect$1(self.actual), 128) + ' ' +
             self.operator + ' ' +
             truncate(inspect$1(self.expected), 128);
    }

    // At present only the three keys mentioned above are used and
    // understood by the spec. Implementations or sub modules can pass
    // other keys to the AssertionError's constructor - they will be
    // ignored.

    // 3. All of the following functions must throw an AssertionError
    // when a corresponding condition is not met, with a message that
    // may be undefined if not provided.  All assertion methods provide
    // both the actual and expected values to the assertion error for
    // display purposes.

    function fail(actual, expected, message, operator, stackStartFunction) {
      throw new AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
      });
    }

    // EXTENSION! allows for well behaved errors defined elsewhere.
    assert.fail = fail;

    // 4. Pure assertion tests whether a value is truthy, as determined
    // by !!guard.
    // assert.ok(guard, message_opt);
    // This statement is equivalent to assert.equal(true, !!guard,
    // message_opt);. To test strictly for the value true, use
    // assert.strictEqual(true, guard, message_opt);.

    function ok(value, message) {
      if (!value) fail(value, true, message, '==', ok);
    }
    assert.ok = ok;

    // 5. The equality assertion tests shallow, coercive equality with
    // ==.
    // assert.equal(actual, expected, message_opt);
    assert.equal = equal;
    function equal(actual, expected, message) {
      if (actual != expected) fail(actual, expected, message, '==', equal);
    }

    // 6. The non-equality assertion tests for whether two objects are not equal
    // with != assert.notEqual(actual, expected, message_opt);
    assert.notEqual = notEqual;
    function notEqual(actual, expected, message) {
      if (actual == expected) {
        fail(actual, expected, message, '!=', notEqual);
      }
    }

    // 7. The equivalence assertion tests a deep equality relation.
    // assert.deepEqual(actual, expected, message_opt);
    assert.deepEqual = deepEqual;
    function deepEqual(actual, expected, message) {
      if (!_deepEqual(actual, expected, false)) {
        fail(actual, expected, message, 'deepEqual', deepEqual);
      }
    }
    assert.deepStrictEqual = deepStrictEqual;
    function deepStrictEqual(actual, expected, message) {
      if (!_deepEqual(actual, expected, true)) {
        fail(actual, expected, message, 'deepStrictEqual', deepStrictEqual);
      }
    }

    function _deepEqual(actual, expected, strict, memos) {
      // 7.1. All identical values are equivalent, as determined by ===.
      if (actual === expected) {
        return true;
      } else if (isBuffer$2(actual) && isBuffer$2(expected)) {
        return compare(actual, expected) === 0;

      // 7.2. If the expected value is a Date object, the actual value is
      // equivalent if it is also a Date object that refers to the same time.
      } else if (isDate(actual) && isDate(expected)) {
        return actual.getTime() === expected.getTime();

      // 7.3 If the expected value is a RegExp object, the actual value is
      // equivalent if it is also a RegExp object with the same source and
      // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
      } else if (isRegExp(actual) && isRegExp(expected)) {
        return actual.source === expected.source &&
               actual.global === expected.global &&
               actual.multiline === expected.multiline &&
               actual.lastIndex === expected.lastIndex &&
               actual.ignoreCase === expected.ignoreCase;

      // 7.4. Other pairs that do not both pass typeof value == 'object',
      // equivalence is determined by ==.
      } else if ((actual === null || typeof actual !== 'object') &&
                 (expected === null || typeof expected !== 'object')) {
        return strict ? actual === expected : actual == expected;

      // If both values are instances of typed arrays, wrap their underlying
      // ArrayBuffers in a Buffer each to increase performance
      // This optimization requires the arrays to have the same type as checked by
      // Object.prototype.toString (aka pToString). Never perform binary
      // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
      // bit patterns are not identical.
      } else if (isView(actual) && isView(expected) &&
                 pToString(actual) === pToString(expected) &&
                 !(actual instanceof Float32Array ||
                   actual instanceof Float64Array)) {
        return compare(new Uint8Array(actual.buffer),
                       new Uint8Array(expected.buffer)) === 0;

      // 7.5 For all other Object pairs, including Array objects, equivalence is
      // determined by having the same number of owned properties (as verified
      // with Object.prototype.hasOwnProperty.call), the same set of keys
      // (although not necessarily the same order), equivalent values for every
      // corresponding key, and an identical 'prototype' property. Note: this
      // accounts for both named and indexed properties on Arrays.
      } else if (isBuffer$2(actual) !== isBuffer$2(expected)) {
        return false;
      } else {
        memos = memos || {actual: [], expected: []};

        var actualIndex = memos.actual.indexOf(actual);
        if (actualIndex !== -1) {
          if (actualIndex === memos.expected.indexOf(expected)) {
            return true;
          }
        }

        memos.actual.push(actual);
        memos.expected.push(expected);

        return objEquiv(actual, expected, strict, memos);
      }
    }

    function isArguments(object) {
      return Object.prototype.toString.call(object) == '[object Arguments]';
    }

    function objEquiv(a, b, strict, actualVisitedObjects) {
      if (a === null || a === undefined || b === null || b === undefined)
        return false;
      // if one is a primitive, the other must be same
      if (isPrimitive(a) || isPrimitive(b))
        return a === b;
      if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
        return false;
      var aIsArgs = isArguments(a);
      var bIsArgs = isArguments(b);
      if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
        return false;
      if (aIsArgs) {
        a = pSlice.call(a);
        b = pSlice.call(b);
        return _deepEqual(a, b, strict);
      }
      var ka = objectKeys(a);
      var kb = objectKeys(b);
      var key, i;
      // having the same number of owned properties (keys incorporates
      // hasOwnProperty)
      if (ka.length !== kb.length)
        return false;
      //the same set of keys (although not necessarily the same order),
      ka.sort();
      kb.sort();
      //~~~cheap key test
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] !== kb[i])
          return false;
      }
      //equivalent values for every corresponding key, and
      //~~~possibly expensive deep test
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
          return false;
      }
      return true;
    }

    // 8. The non-equivalence assertion tests for any deep inequality.
    // assert.notDeepEqual(actual, expected, message_opt);
    assert.notDeepEqual = notDeepEqual;
    function notDeepEqual(actual, expected, message) {
      if (_deepEqual(actual, expected, false)) {
        fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
      }
    }

    assert.notDeepStrictEqual = notDeepStrictEqual;
    function notDeepStrictEqual(actual, expected, message) {
      if (_deepEqual(actual, expected, true)) {
        fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
      }
    }


    // 9. The strict equality assertion tests strict equality, as determined by ===.
    // assert.strictEqual(actual, expected, message_opt);
    assert.strictEqual = strictEqual;
    function strictEqual(actual, expected, message) {
      if (actual !== expected) {
        fail(actual, expected, message, '===', strictEqual);
      }
    }

    // 10. The strict non-equality assertion tests for strict inequality, as
    // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
    assert.notStrictEqual = notStrictEqual;
    function notStrictEqual(actual, expected, message) {
      if (actual === expected) {
        fail(actual, expected, message, '!==', notStrictEqual);
      }
    }

    function expectedException(actual, expected) {
      if (!actual || !expected) {
        return false;
      }

      if (Object.prototype.toString.call(expected) == '[object RegExp]') {
        return expected.test(actual);
      }

      try {
        if (actual instanceof expected) {
          return true;
        }
      } catch (e) {
        // Ignore.  The instanceof check doesn't work for arrow functions.
      }

      if (Error.isPrototypeOf(expected)) {
        return false;
      }

      return expected.call({}, actual) === true;
    }

    function _tryBlock(block) {
      var error;
      try {
        block();
      } catch (e) {
        error = e;
      }
      return error;
    }

    function _throws(shouldThrow, block, expected, message) {
      var actual;

      if (typeof block !== 'function') {
        throw new TypeError('"block" argument must be a function');
      }

      if (typeof expected === 'string') {
        message = expected;
        expected = null;
      }

      actual = _tryBlock(block);

      message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
                (message ? ' ' + message : '.');

      if (shouldThrow && !actual) {
        fail(actual, expected, 'Missing expected exception' + message);
      }

      var userProvidedMessage = typeof message === 'string';
      var isUnwantedException = !shouldThrow && isError(actual);
      var isUnexpectedException = !shouldThrow && actual && !expected;

      if ((isUnwantedException &&
          userProvidedMessage &&
          expectedException(actual, expected)) ||
          isUnexpectedException) {
        fail(actual, expected, 'Got unwanted exception' + message);
      }

      if ((shouldThrow && actual && expected &&
          !expectedException(actual, expected)) || (!shouldThrow && actual)) {
        throw actual;
      }
    }

    // 11. Expected to throw an error:
    // assert.throws(block, Error_opt, message_opt);
    assert.throws = throws;
    function throws(block, /*optional*/error, /*optional*/message) {
      _throws(true, block, error, message);
    }

    // EXTENSION! This is annoying to write outside this module.
    assert.doesNotThrow = doesNotThrow;
    function doesNotThrow(block, /*optional*/error, /*optional*/message) {
      _throws(false, block, error, message);
    }

    assert.ifError = ifError;
    function ifError(err) {
      if (err) throw err;
    }

    var errors = createCommonjsModule$1(function (module, exports) {
    // The whole point behind this internal module is to allow Node.js to no
    // longer be forced to treat every error message change as a semver-major
    // change. The NodeError classes here all expose a `code` property whose
    // value statically and permanently identifies the error. While the error
    // message may change, the code should not.
    var __extends =
      (commonjsGlobal$1 && commonjsGlobal$1.__extends) ||
      (function() {
        var extendStatics = function(d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(d, b) {
                d.__proto__ = b;
              }) ||
            function(d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
      })();
    Object.defineProperty(exports, '__esModule', { value: true });
    var kCode = typeof Symbol === 'undefined' ? '_kCode' : Symbol('code');
    var messages = {}; // new Map();
    // Lazily loaded
    var assert$1 = null;
    var util$1 = null;
    function makeNodeError(Base) {
      return /** @class */ (function(_super) {
        __extends(NodeError, _super);
        function NodeError(key) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          var _this = _super.call(this, message(key, args)) || this;
          _this.code = key;
          _this[kCode] = key;
          _this.name = _super.prototype.name + ' [' + _this[kCode] + ']';
          return _this;
        }
        return NodeError;
      })(Base);
    }
    var AssertionError = /** @class */ (function(_super) {
      __extends(AssertionError, _super);
      function AssertionError(options) {
        var _this = this;
        if (typeof options !== 'object' || options === null) {
          throw new exports.TypeError('ERR_INVALID_ARG_TYPE', 'options', 'object');
        }
        if (options.message) {
          _this = _super.call(this, options.message) || this;
        } else {
          if (util$1 === null) {
            util$1 = util;
          }
          _this =
            _super.call(
              this,
              util$1.inspect(options.actual).slice(0, 128) +
                ' ' +
                (options.operator + ' ' + util$1.inspect(options.expected).slice(0, 128)),
            ) || this;
        }
        _this.generatedMessage = !options.message;
        _this.name = 'AssertionError [ERR_ASSERTION]';
        _this.code = 'ERR_ASSERTION';
        _this.actual = options.actual;
        _this.expected = options.expected;
        _this.operator = options.operator;
        exports.Error.captureStackTrace(_this, options.stackStartFunction);
        return _this;
      }
      return AssertionError;
    })(commonjsGlobal$1.Error);
    exports.AssertionError = AssertionError;
    function message(key, args) {
      if (assert$1 === null) {
        assert$1 = assert;
      }
      assert$1.strictEqual(typeof key, 'string');
      // const msg = messages.get(key);
      var msg = messages[key];
      assert$1(msg, 'An invalid error message key was used: ' + key + '.');
      var fmt;
      if (typeof msg === 'function') {
        fmt = msg;
      } else {
        if (util$1 === null) {
          util$1 = util;
        }
        fmt = util$1.format;
        if (args === undefined || args.length === 0) return msg;
        args.unshift(msg);
      }
      return String(fmt.apply(null, args));
    }
    exports.message = message;
    // Utility function for registering the error codes. Only used here. Exported
    // *only* to allow for testing.
    function E(sym, val) {
      messages[sym] = typeof val === 'function' ? val : String(val);
    }
    exports.E = E;
    exports.Error = makeNodeError(commonjsGlobal$1.Error);
    exports.TypeError = makeNodeError(commonjsGlobal$1.TypeError);
    exports.RangeError = makeNodeError(commonjsGlobal$1.RangeError);
    // To declare an error message, use the E(sym, val) function above. The sym
    // must be an upper case string. The val can be either a function or a string.
    // The return value of the function must be a string.
    // Examples:
    // E('EXAMPLE_KEY1', 'This is the error value');
    // E('EXAMPLE_KEY2', (a, b) => return `${a} ${b}`);
    //
    // Once an error code has been assigned, the code itself MUST NOT change and
    // any given error code must never be reused to identify a different error.
    //
    // Any error code added here should also be added to the documentation
    //
    // Note: Please try to keep these in alphabetical order
    E('ERR_ARG_NOT_ITERABLE', '%s must be iterable');
    E('ERR_ASSERTION', '%s');
    E('ERR_BUFFER_OUT_OF_BOUNDS', bufferOutOfBounds);
    E('ERR_CHILD_CLOSED_BEFORE_REPLY', 'Child closed before reply received');
    E('ERR_CONSOLE_WRITABLE_STREAM', 'Console expects a writable stream instance for %s');
    E('ERR_CPU_USAGE', 'Unable to obtain cpu usage %s');
    E('ERR_DNS_SET_SERVERS_FAILED', function(err, servers) {
      return 'c-ares failed to set servers: "' + err + '" [' + servers + ']';
    });
    E('ERR_FALSY_VALUE_REJECTION', 'Promise was rejected with falsy value');
    E('ERR_ENCODING_NOT_SUPPORTED', function(enc) {
      return 'The "' + enc + '" encoding is not supported';
    });
    E('ERR_ENCODING_INVALID_ENCODED_DATA', function(enc) {
      return 'The encoded data was not valid for encoding ' + enc;
    });
    E('ERR_HTTP_HEADERS_SENT', 'Cannot render headers after they are sent to the client');
    E('ERR_HTTP_INVALID_STATUS_CODE', 'Invalid status code: %s');
    E('ERR_HTTP_TRAILER_INVALID', 'Trailers are invalid with this transfer encoding');
    E('ERR_INDEX_OUT_OF_RANGE', 'Index out of range');
    E('ERR_INVALID_ARG_TYPE', invalidArgType);
    E('ERR_INVALID_ARRAY_LENGTH', function(name, len, actual) {
      assert$1.strictEqual(typeof actual, 'number');
      return 'The array "' + name + '" (length ' + actual + ') must be of length ' + len + '.';
    });
    E('ERR_INVALID_BUFFER_SIZE', 'Buffer size must be a multiple of %s');
    E('ERR_INVALID_CALLBACK', 'Callback must be a function');
    E('ERR_INVALID_CHAR', 'Invalid character in %s');
    E('ERR_INVALID_CURSOR_POS', 'Cannot set cursor row without setting its column');
    E('ERR_INVALID_FD', '"fd" must be a positive integer: %s');
    E('ERR_INVALID_FILE_URL_HOST', 'File URL host must be "localhost" or empty on %s');
    E('ERR_INVALID_FILE_URL_PATH', 'File URL path %s');
    E('ERR_INVALID_HANDLE_TYPE', 'This handle type cannot be sent');
    E('ERR_INVALID_IP_ADDRESS', 'Invalid IP address: %s');
    E('ERR_INVALID_OPT_VALUE', function(name, value) {
      return 'The value "' + String(value) + '" is invalid for option "' + name + '"';
    });
    E('ERR_INVALID_OPT_VALUE_ENCODING', function(value) {
      return 'The value "' + String(value) + '" is invalid for option "encoding"';
    });
    E('ERR_INVALID_REPL_EVAL_CONFIG', 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
    E('ERR_INVALID_SYNC_FORK_INPUT', 'Asynchronous forks do not support Buffer, Uint8Array or string input: %s');
    E('ERR_INVALID_THIS', 'Value of "this" must be of type %s');
    E('ERR_INVALID_TUPLE', '%s must be an iterable %s tuple');
    E('ERR_INVALID_URL', 'Invalid URL: %s');
    E('ERR_INVALID_URL_SCHEME', function(expected) {
      return 'The URL must be ' + oneOf(expected, 'scheme');
    });
    E('ERR_IPC_CHANNEL_CLOSED', 'Channel closed');
    E('ERR_IPC_DISCONNECTED', 'IPC channel is already disconnected');
    E('ERR_IPC_ONE_PIPE', 'Child process can have only one IPC pipe');
    E('ERR_IPC_SYNC_FORK', 'IPC cannot be used with synchronous forks');
    E('ERR_MISSING_ARGS', missingArgs);
    E('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
    E('ERR_NAPI_CONS_FUNCTION', 'Constructor must be a function');
    E('ERR_NAPI_CONS_PROTOTYPE_OBJECT', 'Constructor.prototype must be an object');
    E('ERR_NO_CRYPTO', 'Node.js is not compiled with OpenSSL crypto support');
    E('ERR_NO_LONGER_SUPPORTED', '%s is no longer supported');
    E('ERR_PARSE_HISTORY_DATA', 'Could not parse history data in %s');
    E('ERR_SOCKET_ALREADY_BOUND', 'Socket is already bound');
    E('ERR_SOCKET_BAD_PORT', 'Port should be > 0 and < 65536');
    E('ERR_SOCKET_BAD_TYPE', 'Bad socket type specified. Valid types are: udp4, udp6');
    E('ERR_SOCKET_CANNOT_SEND', 'Unable to send data');
    E('ERR_SOCKET_CLOSED', 'Socket is closed');
    E('ERR_SOCKET_DGRAM_NOT_RUNNING', 'Not running');
    E('ERR_STDERR_CLOSE', 'process.stderr cannot be closed');
    E('ERR_STDOUT_CLOSE', 'process.stdout cannot be closed');
    E('ERR_STREAM_WRAP', 'Stream has StringDecoder set or is in objectMode');
    E('ERR_TLS_CERT_ALTNAME_INVALID', "Hostname/IP does not match certificate's altnames: %s");
    E('ERR_TLS_DH_PARAM_SIZE', function(size) {
      return 'DH parameter size ' + size + ' is less than 2048';
    });
    E('ERR_TLS_HANDSHAKE_TIMEOUT', 'TLS handshake timeout');
    E('ERR_TLS_RENEGOTIATION_FAILED', 'Failed to renegotiate');
    E('ERR_TLS_REQUIRED_SERVER_NAME', '"servername" is required parameter for Server.addContext');
    E('ERR_TLS_SESSION_ATTACK', 'TSL session renegotiation attack detected');
    E('ERR_TRANSFORM_ALREADY_TRANSFORMING', 'Calling transform done when still transforming');
    E('ERR_TRANSFORM_WITH_LENGTH_0', 'Calling transform done when writableState.length != 0');
    E('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s');
    E('ERR_UNKNOWN_SIGNAL', 'Unknown signal: %s');
    E('ERR_UNKNOWN_STDIN_TYPE', 'Unknown stdin file type');
    E('ERR_UNKNOWN_STREAM_TYPE', 'Unknown stream file type');
    E('ERR_V8BREAKITERATOR', 'Full ICU data not installed. ' + 'See https://github.com/nodejs/node/wiki/Intl');
    function invalidArgType(name, expected, actual) {
      assert$1(name, 'name is required');
      // determiner: 'must be' or 'must not be'
      var determiner;
      if (expected.includes('not ')) {
        determiner = 'must not be';
        expected = expected.split('not ')[1];
      } else {
        determiner = 'must be';
      }
      var msg;
      if (Array.isArray(name)) {
        var names = name
          .map(function(val) {
            return '"' + val + '"';
          })
          .join(', ');
        msg = 'The ' + names + ' arguments ' + determiner + ' ' + oneOf(expected, 'type');
      } else if (name.includes(' argument')) {
        // for the case like 'first argument'
        msg = 'The ' + name + ' ' + determiner + ' ' + oneOf(expected, 'type');
      } else {
        var type = name.includes('.') ? 'property' : 'argument';
        msg = 'The "' + name + '" ' + type + ' ' + determiner + ' ' + oneOf(expected, 'type');
      }
      // if actual value received, output it
      if (arguments.length >= 3) {
        msg += '. Received type ' + (actual !== null ? typeof actual : 'null');
      }
      return msg;
    }
    function missingArgs() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      assert$1(args.length > 0, 'At least one arg needs to be specified');
      var msg = 'The ';
      var len = args.length;
      args = args.map(function(a) {
        return '"' + a + '"';
      });
      switch (len) {
        case 1:
          msg += args[0] + ' argument';
          break;
        case 2:
          msg += args[0] + ' and ' + args[1] + ' arguments';
          break;
        default:
          msg += args.slice(0, len - 1).join(', ');
          msg += ', and ' + args[len - 1] + ' arguments';
          break;
      }
      return msg + ' must be specified';
    }
    function oneOf(expected, thing) {
      assert$1(expected, 'expected is required');
      assert$1(typeof thing === 'string', 'thing is required');
      if (Array.isArray(expected)) {
        var len = expected.length;
        assert$1(len > 0, 'At least one expected value needs to be specified');
        // tslint:disable-next-line
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return 'one of ' + thing + ' ' + expected.slice(0, len - 1).join(', ') + ', or ' + expected[len - 1];
        } else if (len === 2) {
          return 'one of ' + thing + ' ' + expected[0] + ' or ' + expected[1];
        } else {
          return 'of ' + thing + ' ' + expected[0];
        }
      } else {
        return 'of ' + thing + ' ' + String(expected);
      }
    }
    function bufferOutOfBounds(name, isWriting) {
      if (isWriting) {
        return 'Attempt to write outside buffer bounds';
      } else {
        return '"' + name + '" is outside of buffer bounds';
      }
    }
    });

    unwrapExports(errors);
    var errors_1 = errors.AssertionError;
    var errors_2 = errors.message;
    var errors_3 = errors.E;
    var errors_4 = errors.Error;
    var errors_5 = errors.TypeError;
    var errors_6 = errors.RangeError;

    var encoding = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });

    exports.ENCODING_UTF8 = 'utf8';
    function assertEncoding(encoding) {
      if (encoding && !Buffer$2.isEncoding(encoding)) throw new errors.TypeError('ERR_INVALID_OPT_VALUE_ENCODING', encoding);
    }
    exports.assertEncoding = assertEncoding;
    function strToEncoding(str, encoding) {
      if (!encoding || encoding === exports.ENCODING_UTF8) return str; // UTF-8
      if (encoding === 'buffer') return new Buffer$2(str); // `buffer` encoding
      return new Buffer$2(str).toString(encoding); // Custom encoding
    }
    exports.strToEncoding = strToEncoding;
    });

    unwrapExports(encoding);
    var encoding_1 = encoding.ENCODING_UTF8;
    var encoding_2 = encoding.assertEncoding;
    var encoding_3 = encoding.strToEncoding;

    var Dirent_1 = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });


    var S_IFMT = constants.constants.S_IFMT,
      S_IFDIR = constants.constants.S_IFDIR,
      S_IFREG = constants.constants.S_IFREG,
      S_IFBLK = constants.constants.S_IFBLK,
      S_IFCHR = constants.constants.S_IFCHR,
      S_IFLNK = constants.constants.S_IFLNK,
      S_IFIFO = constants.constants.S_IFIFO,
      S_IFSOCK = constants.constants.S_IFSOCK;
    /**
     * A directory entry, like `fs.Dirent`.
     */
    var Dirent = /** @class */ (function() {
      function Dirent() {
        this.name = '';
        this.mode = 0;
      }
      Dirent.build = function(link, encoding$1) {
        var dirent = new Dirent();
        var mode = link.getNode().mode;
        dirent.name = encoding.strToEncoding(link.getName(), encoding$1);
        dirent.mode = mode;
        return dirent;
      };
      Dirent.prototype._checkModeProperty = function(property) {
        return (this.mode & S_IFMT) === property;
      };
      Dirent.prototype.isDirectory = function() {
        return this._checkModeProperty(S_IFDIR);
      };
      Dirent.prototype.isFile = function() {
        return this._checkModeProperty(S_IFREG);
      };
      Dirent.prototype.isBlockDevice = function() {
        return this._checkModeProperty(S_IFBLK);
      };
      Dirent.prototype.isCharacterDevice = function() {
        return this._checkModeProperty(S_IFCHR);
      };
      Dirent.prototype.isSymbolicLink = function() {
        return this._checkModeProperty(S_IFLNK);
      };
      Dirent.prototype.isFIFO = function() {
        return this._checkModeProperty(S_IFIFO);
      };
      Dirent.prototype.isSocket = function() {
        return this._checkModeProperty(S_IFSOCK);
      };
      return Dirent;
    })();
    exports.Dirent = Dirent;
    exports.default = Dirent;
    });

    unwrapExports(Dirent_1);
    var Dirent_2 = Dirent_1.Dirent;

    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    // resolves . and .. elements in a path array with directory names there
    // must be no slashes, empty elements, or device names (c:\) in the array
    // (so also no leading and trailing slashes - it does not distinguish
    // relative and absolute paths)
    function normalizeArray(parts, allowAboveRoot) {
      // if the path tries to go above the root, `up` ends up > 0
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }

      // if the path is allowed to go above the root, restore leading ..s
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }

      return parts;
    }

    // Split a filename into [root, dir, basename, ext], unix version
    // 'root' is just a slash, or nothing.
    var splitPathRe =
        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };

    // path.resolve([from ...], to)
    // posix version
    function resolve() {
      var resolvedPath = '',
          resolvedAbsolute = false;

      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : '/';

        // Skip empty and invalid entries
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }

        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }

      // At this point the path should be resolved to a full absolute path, but
      // handle relative paths to be safe (might happen when process.cwd() fails)

      // Normalize the path
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');

      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    }
    // path.normalize(path)
    // posix version
    function normalize(path) {
      var isPathAbsolute = isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';

      // Normalize the path
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isPathAbsolute).join('/');

      if (!path && !isPathAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }

      return (isPathAbsolute ? '/' : '') + path;
    }
    // posix version
    function isAbsolute(path) {
      return path.charAt(0) === '/';
    }

    // posix version
    function join() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    }


    // path.relative(from, to)
    // posix version
    function relative(from, to) {
      from = resolve(from).substr(1);
      to = resolve(to).substr(1);

      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '') break;
        }

        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '') break;
        }

        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }

      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));

      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }

      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }

      outputParts = outputParts.concat(toParts.slice(samePartsLength));

      return outputParts.join('/');
    }

    var sep = '/';
    var delimiter = ':';

    function dirname(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];

      if (!root && !dir) {
        // No dirname whatsoever
        return '.';
      }

      if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
      }

      return root + dir;
    }

    function basename(path, ext) {
      var f = splitPath(path)[2];
      // TODO: make this comparison case-insensitive on windows?
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    }


    function extname(path) {
      return splitPath(path)[3];
    }
    var pathModule = {
      extname: extname,
      basename: basename,
      dirname: dirname,
      sep: sep,
      delimiter: delimiter,
      relative: relative,
      join: join,
      isAbsolute: isAbsolute,
      normalize: normalize,
      resolve: resolve
    };
    function filter (xs, f) {
        if (xs.filter) return xs.filter(f);
        var res = [];
        for (var i = 0; i < xs.length; i++) {
            if (f(xs[i], i, xs)) res.push(xs[i]);
        }
        return res;
    }

    // String.prototype.substr - negative index don't work in IE8
    var substr = 'ab'.substr(-1) === 'b' ?
        function (str, start, len) { return str.substr(start, len) } :
        function (str, start, len) {
            if (start < 0) start = str.length + start;
            return str.substr(start, len);
        }
    ;

    var setImmediate_1 = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var _setImmediate;
    if (typeof setImmediate === 'function') _setImmediate = setImmediate.bind(commonjsGlobal$1);
    else _setImmediate = setTimeout.bind(commonjsGlobal$1);
    exports.default = _setImmediate;
    });

    unwrapExports(setImmediate_1);

    var process_1 = createCommonjsModule$1(function (module, exports) {
    // Here we mock the global `process` variable in case we are not in Node's environment.
    Object.defineProperty(exports, '__esModule', { value: true });
    /**
     * Looks to return a `process` object, if one is available.
     *
     * The global `process` is returned if defined;
     * otherwise `require('process')` is attempted.
     *
     * If that fails, `undefined` is returned.
     *
     * @return {IProcess | undefined}
     */
    var maybeReturnProcess = function() {
      if (typeof process$1 !== 'undefined') {
        return process$1;
      }
      try {
        return process$1;
      } catch (_a) {
        return undefined;
      }
    };
    function createProcess() {
      var p = maybeReturnProcess() || {};
      if (!p.getuid)
        p.getuid = function() {
          return 0;
        };
      if (!p.getgid)
        p.getgid = function() {
          return 0;
        };
      if (!p.cwd)
        p.cwd = function() {
          return '/';
        };
      if (!p.nextTick) p.nextTick = setImmediate_1.default;
      if (!p.emitWarning)
        p.emitWarning = function(message, type) {
          // tslint:disable-next-line:no-console
          console.warn('' + type + (type ? ': ' : '') + message);
        };
      if (!p.env) p.env = {};
      return p;
    }
    exports.createProcess = createProcess;
    exports.default = createProcess();
    });

    unwrapExports(process_1);
    var process_2 = process_1.createProcess;

    var domain;

    // This constructor is used to store event handlers. Instantiating this is
    // faster than explicitly calling `Object.create(null)` to get a "clean" empty
    // object (tested with v8 v4.9).
    function EventHandlers() {}
    EventHandlers.prototype = Object.create(null);

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    // nodejs oddity
    // require('events') === require('events').EventEmitter
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.usingDomains = false;

    EventEmitter.prototype.domain = undefined;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    EventEmitter.init = function() {
      this.domain = null;
      if (EventEmitter.usingDomains) {
        // if there is an active domain, then attach to it.
        if (domain.active && !(this instanceof domain.Domain)) ;
      }

      if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
        this._events = new EventHandlers();
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || undefined;
    };

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      this._maxListeners = n;
      return this;
    };

    function $getMaxListeners(that) {
      if (that._maxListeners === undefined)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };

    // These standalone emit* functions are used to optimize calling of event
    // handlers for fast cases because emit() itself often has a variable number of
    // arguments and can be deoptimized because of that. These functions always have
    // the same number of arguments and thus do not get deoptimized, so the code
    // inside them can execute faster.
    function emitNone(handler, isFn, self) {
      if (isFn)
        handler.call(self);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self);
      }
    }
    function emitOne(handler, isFn, self, arg1) {
      if (isFn)
        handler.call(self, arg1);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1);
      }
    }
    function emitTwo(handler, isFn, self, arg1, arg2) {
      if (isFn)
        handler.call(self, arg1, arg2);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1, arg2);
      }
    }
    function emitThree(handler, isFn, self, arg1, arg2, arg3) {
      if (isFn)
        handler.call(self, arg1, arg2, arg3);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1, arg2, arg3);
      }
    }

    function emitMany(handler, isFn, self, args) {
      if (isFn)
        handler.apply(self, args);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].apply(self, args);
      }
    }

    EventEmitter.prototype.emit = function emit(type) {
      var er, handler, len, args, i, events, domain;
      var doError = (type === 'error');

      events = this._events;
      if (events)
        doError = (doError && events.error == null);
      else if (!doError)
        return false;

      domain = this.domain;

      // If there is no 'error' event listener then throw.
      if (doError) {
        er = arguments[1];
        if (domain) {
          if (!er)
            er = new Error('Uncaught, unspecified "error" event');
          er.domainEmitter = this;
          er.domain = domain;
          er.domainThrown = false;
          domain.emit('error', er);
        } else if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
        return false;
      }

      handler = events[type];

      if (!handler)
        return false;

      var isFn = typeof handler === 'function';
      len = arguments.length;
      switch (len) {
        // fast cases
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        // slower
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = target._events;
      if (!events) {
        events = target._events = new EventHandlers();
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener) {
          target.emit('newListener', type,
                      listener.listener ? listener.listener : listener);

          // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object
          events = target._events;
        }
        existing = events[type];
      }

      if (!existing) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] = prepend ? [listener, existing] :
                                              [existing, listener];
        } else {
          // If we've already got an array, just append.
          if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
        }

        // Check for listener leak
        if (!existing.warned) {
          m = $getMaxListeners(target);
          if (m && m > 0 && existing.length > m) {
            existing.warned = true;
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                                existing.length + ' ' + type + ' listeners added. ' +
                                'Use emitter.setMaxListeners() to increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            emitWarning(w);
          }
        }
      }

      return target;
    }
    function emitWarning(e) {
      typeof console.warn === 'function' ? console.warn(e) : console.log(e);
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener =
        function prependListener(type, listener) {
          return _addListener(this, type, listener, true);
        };

    function _onceWrap(target, type, listener) {
      var fired = false;
      function g() {
        target.removeListener(type, g);
        if (!fired) {
          fired = true;
          listener.apply(target, arguments);
        }
      }
      g.listener = listener;
      return g;
    }

    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener =
        function prependOnceListener(type, listener) {
          if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
          this.prependListener(type, _onceWrap(this, type, listener));
          return this;
        };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener =
        function removeListener(type, listener) {
          var list, events, position, i, originalListener;

          if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');

          events = this._events;
          if (!events)
            return this;

          list = events[type];
          if (!list)
            return this;

          if (list === listener || (list.listener && list.listener === listener)) {
            if (--this._eventsCount === 0)
              this._events = new EventHandlers();
            else {
              delete events[type];
              if (events.removeListener)
                this.emit('removeListener', type, list.listener || listener);
            }
          } else if (typeof list !== 'function') {
            position = -1;

            for (i = list.length; i-- > 0;) {
              if (list[i] === listener ||
                  (list[i].listener && list[i].listener === listener)) {
                originalListener = list[i].listener;
                position = i;
                break;
              }
            }

            if (position < 0)
              return this;

            if (list.length === 1) {
              list[0] = undefined;
              if (--this._eventsCount === 0) {
                this._events = new EventHandlers();
                return this;
              } else {
                delete events[type];
              }
            } else {
              spliceOne(list, position);
            }

            if (events.removeListener)
              this.emit('removeListener', type, originalListener || listener);
          }

          return this;
        };

    EventEmitter.prototype.removeAllListeners =
        function removeAllListeners(type) {
          var listeners, events;

          events = this._events;
          if (!events)
            return this;

          // not listening for removeListener, no need to emit
          if (!events.removeListener) {
            if (arguments.length === 0) {
              this._events = new EventHandlers();
              this._eventsCount = 0;
            } else if (events[type]) {
              if (--this._eventsCount === 0)
                this._events = new EventHandlers();
              else
                delete events[type];
            }
            return this;
          }

          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            var keys = Object.keys(events);
            for (var i = 0, key; i < keys.length; ++i) {
              key = keys[i];
              if (key === 'removeListener') continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = new EventHandlers();
            this._eventsCount = 0;
            return this;
          }

          listeners = events[type];

          if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
          } else if (listeners) {
            // LIFO order
            do {
              this.removeListener(type, listeners[listeners.length - 1]);
            } while (listeners[0]);
          }

          return this;
        };

    EventEmitter.prototype.listeners = function listeners(type) {
      var evlistener;
      var ret;
      var events = this._events;

      if (!events)
        ret = [];
      else {
        evlistener = events[type];
        if (!evlistener)
          ret = [];
        else if (typeof evlistener === 'function')
          ret = [evlistener.listener || evlistener];
        else
          ret = unwrapListeners(evlistener);
      }

      return ret;
    };

    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;

      if (events) {
        var evlistener = events[type];

        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };

    // About 1.5x faster than the two-arg version of Array#splice().
    function spliceOne(list, index) {
      for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        list[i] = list[k];
      list.pop();
    }

    function arrayClone(arr, i) {
      var copy = new Array(i);
      while (i--)
        copy[i] = arr[i];
      return copy;
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }

    var node = createCommonjsModule$1(function (module, exports) {
    var __extends =
      (commonjsGlobal$1 && commonjsGlobal$1.__extends) ||
      (function() {
        var extendStatics = function(d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(d, b) {
                d.__proto__ = b;
              }) ||
            function(d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
      })();
    Object.defineProperty(exports, '__esModule', { value: true });




    var S_IFMT = constants.constants.S_IFMT,
      S_IFDIR = constants.constants.S_IFDIR,
      S_IFREG = constants.constants.S_IFREG,
      S_IFBLK = constants.constants.S_IFBLK,
      S_IFCHR = constants.constants.S_IFCHR,
      S_IFLNK = constants.constants.S_IFLNK,
      S_IFIFO = constants.constants.S_IFIFO,
      S_IFSOCK = constants.constants.S_IFSOCK,
      O_APPEND = constants.constants.O_APPEND;
    exports.SEP = '/';
    /**
     * Node in a file system (like i-node, v-node).
     */
    var Node = /** @class */ (function(_super) {
      __extends(Node, _super);
      function Node(ino, perm) {
        if (perm === void 0) {
          perm = 438;
        }
        var _this = _super.call(this) || this;
        // User ID and group ID.
        _this.uid = process_1.default.getuid();
        _this.gid = process_1.default.getgid();
        _this.atime = new Date();
        _this.mtime = new Date();
        _this.ctime = new Date();
        // data: string = '';
        _this.buf = null;
        _this.perm = 438; // Permissions `chmod`, `fchmod`
        _this.mode = S_IFREG; // S_IFDIR, S_IFREG, etc.. (file by default?)
        // Number of hard links pointing at this Node.
        _this.nlink = 1;
        // Steps to another node, if this node is a symlink.
        _this.symlink = null;
        _this.perm = perm;
        _this.mode |= perm;
        _this.ino = ino;
        return _this;
      }
      Node.prototype.getString = function(encoding) {
        if (encoding === void 0) {
          encoding = 'utf8';
        }
        return this.getBuffer().toString(encoding);
      };
      Node.prototype.setString = function(str) {
        // this.setBuffer(Buffer.from(str, 'utf8'));
        this.buf = Buffer$2.from(str, 'utf8');
        this.touch();
      };
      Node.prototype.getBuffer = function() {
        if (!this.buf) this.setBuffer(Buffer$2.allocUnsafe(0));
        return Buffer$2.from(this.buf); // Return a copy.
      };
      Node.prototype.setBuffer = function(buf) {
        this.buf = Buffer$2.from(buf); // Creates a copy of data.
        this.touch();
      };
      Node.prototype.getSize = function() {
        return this.buf ? this.buf.length : 0;
      };
      Node.prototype.setModeProperty = function(property) {
        this.mode = (this.mode & ~S_IFMT) | property;
      };
      Node.prototype.setIsFile = function() {
        this.setModeProperty(S_IFREG);
      };
      Node.prototype.setIsDirectory = function() {
        this.setModeProperty(S_IFDIR);
      };
      Node.prototype.setIsSymlink = function() {
        this.setModeProperty(S_IFLNK);
      };
      Node.prototype.isFile = function() {
        return (this.mode & S_IFMT) === S_IFREG;
      };
      Node.prototype.isDirectory = function() {
        return (this.mode & S_IFMT) === S_IFDIR;
      };
      Node.prototype.isSymlink = function() {
        // return !!this.symlink;
        return (this.mode & S_IFMT) === S_IFLNK;
      };
      Node.prototype.makeSymlink = function(steps) {
        this.symlink = steps;
        this.setIsSymlink();
      };
      Node.prototype.write = function(buf, off, len, pos) {
        if (off === void 0) {
          off = 0;
        }
        if (len === void 0) {
          len = buf.length;
        }
        if (pos === void 0) {
          pos = 0;
        }
        if (!this.buf) this.buf = Buffer$2.allocUnsafe(0);
        if (pos + len > this.buf.length) {
          var newBuf = Buffer$2.allocUnsafe(pos + len);
          this.buf.copy(newBuf, 0, 0, this.buf.length);
          this.buf = newBuf;
        }
        buf.copy(this.buf, pos, off, off + len);
        this.touch();
        return len;
      };
      // Returns the number of bytes read.
      Node.prototype.read = function(buf, off, len, pos) {
        if (off === void 0) {
          off = 0;
        }
        if (len === void 0) {
          len = buf.byteLength;
        }
        if (pos === void 0) {
          pos = 0;
        }
        if (!this.buf) this.buf = Buffer$2.allocUnsafe(0);
        var actualLen = len;
        if (actualLen > buf.byteLength) {
          actualLen = buf.byteLength;
        }
        if (actualLen + pos > this.buf.length) {
          actualLen = this.buf.length - pos;
        }
        this.buf.copy(buf, off, pos, pos + actualLen);
        return actualLen;
      };
      Node.prototype.truncate = function(len) {
        if (len === void 0) {
          len = 0;
        }
        if (!len) this.buf = Buffer$2.allocUnsafe(0);
        else {
          if (!this.buf) this.buf = Buffer$2.allocUnsafe(0);
          if (len <= this.buf.length) {
            this.buf = this.buf.slice(0, len);
          } else {
            var buf = Buffer$2.allocUnsafe(0);
            this.buf.copy(buf);
            buf.fill(0, len);
          }
        }
        this.touch();
      };
      Node.prototype.chmod = function(perm) {
        this.perm = perm;
        this.mode = (this.mode & ~511) | perm;
        this.touch();
      };
      Node.prototype.chown = function(uid, gid) {
        this.uid = uid;
        this.gid = gid;
        this.touch();
      };
      Node.prototype.touch = function() {
        this.mtime = new Date();
        this.emit('change', this);
      };
      Node.prototype.canRead = function(uid, gid) {
        if (uid === void 0) {
          uid = process_1.default.getuid();
        }
        if (gid === void 0) {
          gid = process_1.default.getgid();
        }
        if (this.perm & 4 /* IROTH */) {
          return true;
        }
        if (gid === this.gid) {
          if (this.perm & 32 /* IRGRP */) {
            return true;
          }
        }
        if (uid === this.uid) {
          if (this.perm & 256 /* IRUSR */) {
            return true;
          }
        }
        return false;
      };
      Node.prototype.canWrite = function(uid, gid) {
        if (uid === void 0) {
          uid = process_1.default.getuid();
        }
        if (gid === void 0) {
          gid = process_1.default.getgid();
        }
        if (this.perm & 2 /* IWOTH */) {
          return true;
        }
        if (gid === this.gid) {
          if (this.perm & 16 /* IWGRP */) {
            return true;
          }
        }
        if (uid === this.uid) {
          if (this.perm & 128 /* IWUSR */) {
            return true;
          }
        }
        return false;
      };
      Node.prototype.del = function() {
        this.emit('delete', this);
      };
      Node.prototype.toJSON = function() {
        return {
          ino: this.ino,
          uid: this.uid,
          gid: this.gid,
          atime: this.atime.getTime(),
          mtime: this.mtime.getTime(),
          ctime: this.ctime.getTime(),
          perm: this.perm,
          mode: this.mode,
          nlink: this.nlink,
          symlink: this.symlink,
          data: this.getString(),
        };
      };
      return Node;
    })(EventEmitter.EventEmitter);
    exports.Node = Node;
    /**
     * Represents a hard link that points to an i-node `node`.
     */
    var Link = /** @class */ (function(_super) {
      __extends(Link, _super);
      function Link(vol, parent, name) {
        var _this = _super.call(this) || this;
        _this.parent = null;
        _this.children = {};
        // Path to this node as Array: ['usr', 'bin', 'node'].
        _this.steps = [];
        // "i-node" of this hard link.
        _this.node = null;
        // "i-node" number of the node.
        _this.ino = 0;
        // Number of children.
        _this.length = 0;
        _this.vol = vol;
        _this.parent = parent;
        _this.steps = parent ? parent.steps.concat([name]) : [name];
        return _this;
      }
      Link.prototype.setNode = function(node) {
        this.node = node;
        this.ino = node.ino;
      };
      Link.prototype.getNode = function() {
        return this.node;
      };
      Link.prototype.createChild = function(name, node) {
        if (node === void 0) {
          node = this.vol.createNode();
        }
        var link = new Link(this.vol, this, name);
        link.setNode(node);
        if (node.isDirectory()) ;
        this.setChild(name, link);
        return link;
      };
      Link.prototype.setChild = function(name, link) {
        if (link === void 0) {
          link = new Link(this.vol, this, name);
        }
        this.children[name] = link;
        link.parent = this;
        this.length++;
        this.emit('child:add', link, this);
        return link;
      };
      Link.prototype.deleteChild = function(link) {
        delete this.children[link.getName()];
        this.length--;
        this.emit('child:delete', link, this);
      };
      Link.prototype.getChild = function(name) {
        return this.children[name];
      };
      Link.prototype.getPath = function() {
        return this.steps.join(exports.SEP);
      };
      Link.prototype.getName = function() {
        return this.steps[this.steps.length - 1];
      };
      // del() {
      //     const parent = this.parent;
      //     if(parent) {
      //         parent.deleteChild(link);
      //     }
      //     this.parent = null;
      //     this.vol = null;
      // }
      /**
       * Walk the tree path and return the `Link` at that location, if any.
       * @param steps {string[]} Desired location.
       * @param stop {number} Max steps to go into.
       * @param i {number} Current step in the `steps` array.
       * @returns {any}
       */
      Link.prototype.walk = function(steps, stop, i) {
        if (stop === void 0) {
          stop = steps.length;
        }
        if (i === void 0) {
          i = 0;
        }
        if (i >= steps.length) return this;
        if (i >= stop) return this;
        var step = steps[i];
        var link = this.getChild(step);
        if (!link) return null;
        return link.walk(steps, stop, i + 1);
      };
      Link.prototype.toJSON = function() {
        return {
          steps: this.steps,
          ino: this.ino,
          children: Object.keys(this.children),
        };
      };
      return Link;
    })(EventEmitter.EventEmitter);
    exports.Link = Link;
    /**
     * Represents an open file (file descriptor) that points to a `Link` (Hard-link) and a `Node`.
     */
    var File = /** @class */ (function() {
      /**
       * Open a Link-Node pair. `node` is provided separately as that might be a different node
       * rather the one `link` points to, because it might be a symlink.
       * @param link
       * @param node
       * @param flags
       * @param fd
       */
      function File(link, node, flags, fd) {
        /**
         * Hard link that this file opened.
         * @type {any}
         */
        this.link = null;
        /**
         * Reference to a `Node`.
         * @type {Node}
         */
        this.node = null;
        /**
         * A cursor/offset position in a file, where data will be written on write.
         * User can "seek" this position.
         */
        this.position = 0;
        this.link = link;
        this.node = node;
        this.flags = flags;
        this.fd = fd;
      }
      File.prototype.getString = function(encoding) {
        return this.node.getString();
      };
      File.prototype.setString = function(str) {
        this.node.setString(str);
      };
      File.prototype.getBuffer = function() {
        return this.node.getBuffer();
      };
      File.prototype.setBuffer = function(buf) {
        this.node.setBuffer(buf);
      };
      File.prototype.getSize = function() {
        return this.node.getSize();
      };
      File.prototype.truncate = function(len) {
        this.node.truncate(len);
      };
      File.prototype.seekTo = function(position) {
        this.position = position;
      };
      File.prototype.stats = function() {
        return Stats_1.default.build(this.node);
      };
      File.prototype.write = function(buf, offset, length, position) {
        if (offset === void 0) {
          offset = 0;
        }
        if (length === void 0) {
          length = buf.length;
        }
        if (typeof position !== 'number') position = this.position;
        if (this.flags & O_APPEND) position = this.getSize();
        var bytes = this.node.write(buf, offset, length, position);
        this.position = position + bytes;
        return bytes;
      };
      File.prototype.read = function(buf, offset, length, position) {
        if (offset === void 0) {
          offset = 0;
        }
        if (length === void 0) {
          length = buf.byteLength;
        }
        if (typeof position !== 'number') position = this.position;
        var bytes = this.node.read(buf, offset, length, position);
        this.position = position + bytes;
        return bytes;
      };
      File.prototype.chmod = function(perm) {
        this.node.chmod(perm);
      };
      File.prototype.chown = function(uid, gid) {
        this.node.chown(uid, gid);
      };
      return File;
    })();
    exports.File = File;
    });

    unwrapExports(node);
    var node_1 = node.SEP;
    var node_2 = node.Node;
    var node_3 = node.Link;
    var node_4 = node.File;

    var setTimeoutUnref_1 = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    /**
     * `setTimeoutUnref` is just like `setTimeout`,
     * only in Node's environment it will "unref" its macro task.
     */
    function setTimeoutUnref(callback, time, args) {
      var ref = setTimeout.apply(null, arguments);
      if (ref && typeof ref === 'object' && typeof ref.unref === 'function') ref.unref();
      return ref;
    }
    exports.default = setTimeoutUnref;
    });

    unwrapExports(setTimeoutUnref_1);

    function BufferList() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    BufferList.prototype.push = function (v) {
      var entry = { data: v, next: null };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    };

    BufferList.prototype.unshift = function (v) {
      var entry = { data: v, next: this.head };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    };

    BufferList.prototype.shift = function () {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    };

    BufferList.prototype.clear = function () {
      this.head = this.tail = null;
      this.length = 0;
    };

    BufferList.prototype.join = function (s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;
      while (p = p.next) {
        ret += s + p.data;
      }return ret;
    };

    BufferList.prototype.concat = function (n) {
      if (this.length === 0) return Buffer$2.alloc(0);
      if (this.length === 1) return this.head.data;
      var ret = Buffer$2.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        p.data.copy(ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    };

    var safeBuffer$1 = createCommonjsModule$1(function (module, exports) {
    /* eslint-disable node/no-deprecated-api */

    var Buffer = bufferEs6$1.Buffer;

    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = bufferEs6$1;
    } else {
      // Copy properties from require('buffer')
      copyProps(bufferEs6$1, exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer (arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }

    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size);
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return bufferEs6$1.SlowBuffer(size)
    };
    });
    var safeBuffer_1$1 = safeBuffer$1.Buffer;

    /*<replacement>*/

    var Buffer$1$1 = safeBuffer$1.Buffer;
    /*</replacement>*/

    var isEncoding = Buffer$1$1.isEncoding || function (encoding) {
      encoding = '' + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
          return true;
        default:
          return false;
      }
    };

    function _normalizeEncoding(enc) {
      if (!enc) return 'utf8';
      var retried;
      while (true) {
        switch (enc) {
          case 'utf8':
          case 'utf-8':
            return 'utf8';
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 'utf16le';
          case 'latin1':
          case 'binary':
            return 'latin1';
          case 'base64':
          case 'ascii':
          case 'hex':
            return enc;
          default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
        }
      }
    }
    // Do not cache `Buffer.isEncoding` when checking encoding names as some
    // modules monkey-patch it to support additional encodings
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== 'string' && (Buffer$1$1.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
      return nenc || enc;
    }

    // StringDecoder provides an interface for efficiently splitting a series of
    // buffers into a series of JS strings without breaking apart multi-byte
    // characters.
    var StringDecoder_1 = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case 'utf16le':
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case 'utf8':
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case 'base64':
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer$1$1.allocUnsafe(nb);
    }

    StringDecoder.prototype.write = function (buf) {
      if (buf.length === 0) return '';
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || '';
    };

    StringDecoder.prototype.end = utf8End;

    // Returns only complete characters in a Buffer
    StringDecoder.prototype.text = utf8Text;

    // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
    StringDecoder.prototype.fillLast = function (buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };

    // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
    // continuation byte. If an invalid byte is detected, -2 is returned.
    function utf8CheckByte(byte) {
      if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
      return byte >> 6 === 0x02 ? -1 : -2;
    }

    // Checks at most 3 bytes at the end of a Buffer in order to detect an
    // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
    // needed to complete the UTF-8 character (if applicable) are returned.
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }

    // Validates as many continuation bytes for a multi-byte UTF-8 character as
    // needed or are available. If we see a non-continuation byte where we expect
    // one, we "replace" the validated continuation bytes we've seen so far with
    // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
    // behavior. The continuation byte check is included three times in the case
    // where all of the continuation bytes for a character exist in the same buffer.
    // It is also done this way as a slight performance increase instead of using a
    // loop.
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
          self.lastNeed = 1;
          return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 0xC0) !== 0x80) {
            self.lastNeed = 2;
            return '\ufffd';
          }
        }
      }
    }

    // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf);
      if (r !== undefined) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }

    // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
    // partial character, the character's bytes are buffered until the required
    // number of bytes are available.
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString('utf8', i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString('utf8', i, end);
    }

    // For UTF-8, a replacement character is added when ending on a partial
    // character.
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + '\ufffd';
      return r;
    }

    // UTF-16LE typically needs two bytes per character, but even if we have an even
    // number of bytes available, we need to check if we end on a leading/high
    // surrogate. In that case, we need to wait for the next two bytes in order to
    // decode the last character properly.
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 0xD800 && c <= 0xDBFF) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString('utf16le', i, buf.length - 1);
    }

    // For UTF-16LE we do not explicitly append special replacement characters if we
    // end on a partial character, we simply let v8 handle that.
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
      }
      return r;
    }

    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString('base64', i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString('base64', i, buf.length - n);
    }

    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
      return r;
    }

    // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }

    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : '';
    }

    Readable.ReadableState = ReadableState;

    var debug = debuglog('stream');
    inherits$1(Readable, EventEmitter);

    function prependListener(emitter, event, fn) {
      // Sadly this is not cacheable as some libraries bundle their own
      // event emitter implementation with them.
      if (typeof emitter.prependListener === 'function') {
        return emitter.prependListener(event, fn);
      } else {
        // This is a hack to make sure that our error handler is attached before any
        // userland ones.  NEVER DO THIS. This is here only because this code needs
        // to continue to work with older versions of Node.js that do not include
        // the prependListener() method. The goal is to eventually remove this hack.
        if (!emitter._events || !emitter._events[event])
          emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event]))
          emitter._events[event].unshift(fn);
        else
          emitter._events[event] = [fn, emitter._events[event]];
      }
    }
    function listenerCount$1 (emitter, type) {
      return emitter.listeners(type).length;
    }
    function ReadableState(options, stream) {

      options = options || {};

      // object stream flag. Used to make read(n) ignore n and to
      // make all the buffer merging and length checks go away
      this.objectMode = !!options.objectMode;

      if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

      // the point at which it stops calling _read() to fill the buffer
      // Note: 0 is a valid value, means "don't call _read preemptively ever"
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

      // cast to ints.
      this.highWaterMark = ~ ~this.highWaterMark;

      // A linked list is used to store data chunks instead of an array because the
      // linked list can remove elements from the beginning faster than
      // array.shift()
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;

      // a flag to be able to tell if the onwrite cb is called immediately,
      // or on a later tick.  We set this to true at first, because any
      // actions that shouldn't happen until "later" should generally also
      // not happen before the first write call.
      this.sync = true;

      // whenever we return null, then we set a flag to say
      // that we're awaiting a 'readable' event emission.
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;

      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';

      // when piping, we only care about 'readable' events that happen
      // after read()ing all the bytes and not getting any pushback.
      this.ranOut = false;

      // the number of writers that are awaiting a drain event in .pipe()s
      this.awaitDrain = 0;

      // if true, a maybeReadMore has been scheduled
      this.readingMore = false;

      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        this.decoder = new StringDecoder_1(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {

      if (!(this instanceof Readable)) return new Readable(options);

      this._readableState = new ReadableState(options, this);

      // legacy
      this.readable = true;

      if (options && typeof options.read === 'function') this._read = options.read;

      EventEmitter.call(this);
    }

    // Manually shove something into the read() buffer.
    // This returns true if the highWaterMark has not been hit yet,
    // similar to how Writable.write() returns true if you should
    // write() some more.
    Readable.prototype.push = function (chunk, encoding) {
      var state = this._readableState;

      if (!state.objectMode && typeof chunk === 'string') {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer$2.from(chunk, encoding);
          encoding = '';
        }
      }

      return readableAddChunk(this, state, chunk, encoding, false);
    };

    // Unshift should *always* be something directly out of read()
    Readable.prototype.unshift = function (chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, '', true);
    };

    Readable.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };

    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit('error', er);
      } else if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error('stream.push() after EOF');
          stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
          var _e = new Error('stream.unshift() after end event');
          stream.emit('error', _e);
        } else {
          var skipAdd;
          if (state.decoder && !addToFront && !encoding) {
            chunk = state.decoder.write(chunk);
            skipAdd = !state.objectMode && chunk.length === 0;
          }

          if (!addToFront) state.reading = false;

          // Don't add to the buffer if we've decoded to an empty string chunk and
          // we're not in object mode
          if (!skipAdd) {
            // if we want the data now, just emit it.
            if (state.flowing && state.length === 0 && !state.sync) {
              stream.emit('data', chunk);
              stream.read(0);
            } else {
              // update the buffer info.
              state.length += state.objectMode ? 1 : chunk.length;
              if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

              if (state.needReadable) emitReadable(stream);
            }
          }

          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }

      return needMoreData(state);
    }

    // if it's past the high water mark, we can push in some more.
    // Also, if we have no data yet, we can stand some
    // more bytes.  This is to work around cases where hwm=0,
    // such as the repl.  Also, if the push() triggered a
    // readable event, and the user called read(largeNumber) such that
    // needReadable was set, then we ought to push more, so that another
    // 'readable' event will be triggered.
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }

    // backwards compatibility.
    Readable.prototype.setEncoding = function (enc) {
      this._readableState.decoder = new StringDecoder_1(enc);
      this._readableState.encoding = enc;
      return this;
    };

    // Don't raise the hwm > 8MB
    var MAX_HWM = 0x800000;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }

    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
      }
      // If we're asking for more than the current hwm, then raise the hwm.
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      // Don't have enough
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }

    // you can override either this method, or the async _read(n) below.
    Readable.prototype.read = function (n) {
      debug('read', n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;

      if (n !== 0) state.emittedReadable = false;

      // if we're doing read(0) to trigger a readable event, but we
      // already have a bunch of data in the buffer, then just trigger
      // the 'readable' event and move on.
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
        return null;
      }

      n = howMuchToRead(n, state);

      // if we've ended, and we're now clear, then finish it up.
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }

      // All the actual chunk generation logic needs to be
      // *below* the call to _read.  The reason is that in certain
      // synthetic stream cases, such as passthrough streams, _read
      // may be a completely synchronous operation which may change
      // the state of the read buffer, providing enough data when
      // before there was *not* enough.
      //
      // So, the steps are:
      // 1. Figure out what the state of things will be after we do
      // a read from the buffer.
      //
      // 2. If that resulting state will trigger a _read, then call _read.
      // Note that this may be asynchronous, or synchronous.  Yes, it is
      // deeply ugly to write APIs this way, but that still doesn't mean
      // that the Readable class should behave improperly, as streams are
      // designed to be sync/async agnostic.
      // Take note if the _read call is sync or async (ie, if the read call
      // has returned yet), so that we know whether or not it's safe to emit
      // 'readable' etc.
      //
      // 3. Actually pull the requested chunks out of the buffer and return.

      // if we need a readable event, then we need to do some reading.
      var doRead = state.needReadable;
      debug('need readable', doRead);

      // if we currently have less than the highWaterMark, then also read some
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }

      // however, if we've ended, then there's no point, and if we're already
      // reading, then it's unnecessary.
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }

      var ret;
      if (n > 0) ret = fromList(n, state);else ret = null;

      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }

      if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;

        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
      }

      if (ret !== null) this.emit('data', ret);

      return ret;
    };

    function chunkInvalid(state, chunk) {
      var er = null;
      if (!isBuffer$2(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }

    function onEofChunk(stream, state) {
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;

      // emit 'readable' now to make sure it gets picked up.
      emitReadable(stream);
    }

    // Don't emit readable right away in sync mode, because this can trigger
    // another read() call => stack overflow.  This way, it might trigger
    // a nextTick recursion warning, but that's not so bad.
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) nextTick$1(emitReadable_, stream);else emitReadable_(stream);
      }
    }

    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }

    // at this point, the user has presumably seen the 'readable' event,
    // and called read() to consume some data.  that may have triggered
    // in turn another _read(n) call, in which case reading = true if
    // it's in progress.
    // However, if we're not ended, or reading, and the length < hwm,
    // then go ahead and try to read some more preemptively.
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        nextTick$1(maybeReadMore_, stream, state);
      }
    }

    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          // didn't get any data, stop spinning.
          break;else len = state.length;
      }
      state.readingMore = false;
    }

    // abstract method.  to be overridden in specific implementation classes.
    // call cb(er, data) where data is <= n in length.
    // for virtual (non-string, non-buffer) streams, "length" is somewhat
    // arbitrary, and perhaps not very meaningful.
    Readable.prototype._read = function (n) {
      this.emit('error', new Error('not implemented'));
    };

    Readable.prototype.pipe = function (dest, pipeOpts) {
      var src = this;
      var state = this._readableState;

      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

      var doEnd = (!pipeOpts || pipeOpts.end !== false);

      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted) nextTick$1(endFn);else src.once('end', endFn);

      dest.on('unpipe', onunpipe);
      function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) {
          cleanup();
        }
      }

      function onend() {
        debug('onend');
        dest.end();
      }

      // when the dest drains, it reduces the awaitDrain counter
      // on the source.  This would be more elegant with a .once()
      // handler in flow(), but adding and removing repeatedly is
      // too slow.
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);

      var cleanedUp = false;
      function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);

        cleanedUp = true;

        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }

      // If the user pushes more data while we're writing to dest then we'll end up
      // in ondata again. However, we only want to increase awaitDrain once because
      // dest will only emit one 'drain' event for the multiple writes.
      // => Introduce a guard on increasing awaitDrain.
      var increasedAwaitDrain = false;
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          // If the user unpiped during `dest.write()`, it is possible
          // to get stuck in a permanently paused state if that write
          // also returned false.
          // => Check whether `dest` is still a piping destination.
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }

      // if the dest has an error, then stop piping into it.
      // however, don't suppress the throwing behavior for this.
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
      }

      // Make sure our error handler is attached before userland ones.
      prependListener(dest, 'error', onerror);

      // Both close and finish should trigger unpipe, but only once.
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);

      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }

      // tell the dest that it's being piped to
      dest.emit('pipe', src);

      // start the flow if it hasn't been started already.
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }

      return dest;
    };

    function pipeOnDrain(src) {
      return function () {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && src.listeners('data').length) {
          state.flowing = true;
          flow(src);
        }
      };
    }

    Readable.prototype.unpipe = function (dest) {
      var state = this._readableState;

      // if we're not piping anywhere, then do nothing.
      if (state.pipesCount === 0) return this;

      // just one destination.  most common case.
      if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;

        if (!dest) dest = state.pipes;

        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this);
        return this;
      }

      // slow case. multiple pipe destinations.

      if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;

        for (var _i = 0; _i < len; _i++) {
          dests[_i].emit('unpipe', this);
        }return this;
      }

      // try to find the right one.
      var i = indexOf(state.pipes, dest);
      if (i === -1) return this;

      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];

      dest.emit('unpipe', this);

      return this;
    };

    // set up data events if they are asked for
    // Ensure readable listeners eventually get something
    Readable.prototype.on = function (ev, fn) {
      var res = EventEmitter.prototype.on.call(this, ev, fn);

      if (ev === 'data') {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
      } else if (ev === 'readable') {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            nextTick$1(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }

      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;

    function nReadingNextTick(self) {
      debug('readable nexttick read 0');
      self.read(0);
    }

    // pause() and resume() are remnants of the legacy readable stream API
    // If the user uses them, then switch into old mode.
    Readable.prototype.resume = function () {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };

    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        nextTick$1(resume_, stream, state);
      }
    }

    function resume_(stream, state) {
      if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
      }

      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }

    Readable.prototype.pause = function () {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };

    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      while (state.flowing && stream.read() !== null) {}
    }

    // wrap an old-style stream as the async data source.
    // This is *not* part of the readable stream interface.
    // It is an ugly unfortunate mess of history.
    Readable.prototype.wrap = function (stream) {
      var state = this._readableState;
      var paused = false;

      var self = this;
      stream.on('end', function () {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) self.push(chunk);
        }

        self.push(null);
      });

      stream.on('data', function (chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);

        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });

      // proxy all the other methods.
      // important when wrapping filters and duplexes.
      for (var i in stream) {
        if (this[i] === undefined && typeof stream[i] === 'function') {
          this[i] = function (method) {
            return function () {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }

      // proxy certain important events.
      var events = ['error', 'close', 'destroy', 'pause', 'resume'];
      forEach(events, function (ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });

      // when we try to consume some more bytes, simply unpause the
      // underlying stream.
      self._read = function (n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };

      return self;
    };

    // exposed for testing purposes only.
    Readable._fromList = fromList;

    // Pluck off n bytes from an array of buffers.
    // Length is the combined lengths of all the buffers in the list.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromList(n, state) {
      // nothing buffered
      if (state.length === 0) return null;

      var ret;
      if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
      }

      return ret;
    }

    // Extracts only enough buffered data to satisfy the amount requested.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
      } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }

    // Copies a specified amount of characters from the list of buffered data
    // chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }

    // Copies a specified amount of bytes from the list of buffered data chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBuffer(n, list) {
      var ret = Buffer$2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }

    function endReadable(stream) {
      var state = stream._readableState;

      // If we get here before consuming all the bytes, then that is a
      // bug in node.  Should never happen.
      if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

      if (!state.endEmitted) {
        state.ended = true;
        nextTick$1(endReadableNT, state, stream);
      }
    }

    function endReadableNT(state, stream) {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    }

    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }

    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }

    // A bit simpler than readable streams.
    Writable.WritableState = WritableState;
    inherits$1(Writable, EventEmitter);

    function nop() {}

    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
      this.next = null;
    }

    function WritableState(options, stream) {
      Object.defineProperty(this, 'buffer', {
        get: deprecate(function () {
          return this.getBuffer();
        }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
      });
      options = options || {};

      // object stream flag to indicate whether or not this stream
      // contains buffers or objects.
      this.objectMode = !!options.objectMode;

      if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

      // the point at which write() starts returning false
      // Note: 0 is a valid value, means that we always return false if
      // the entire buffer is not flushed immediately on write()
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

      // cast to ints.
      this.highWaterMark = ~ ~this.highWaterMark;

      this.needDrain = false;
      // at the start of calling end()
      this.ending = false;
      // when end() has been called, and returned
      this.ended = false;
      // when 'finish' is emitted
      this.finished = false;

      // should we decode strings into buffers before passing to _write?
      // this is here so that some node-core streams can optimize string
      // handling at a lower level.
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;

      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';

      // not an actual buffer we keep track of, but a measurement
      // of how much we're waiting to get pushed to some underlying
      // socket or file.
      this.length = 0;

      // a flag to see when we're in the middle of a write.
      this.writing = false;

      // when true all writes will be buffered until .uncork() call
      this.corked = 0;

      // a flag to be able to tell if the onwrite cb is called immediately,
      // or on a later tick.  We set this to true at first, because any
      // actions that shouldn't happen until "later" should generally also
      // not happen before the first write call.
      this.sync = true;

      // a flag to know if we're processing previously buffered items, which
      // may call the _write() callback in the same tick, so that we don't
      // end up in an overlapped onwrite situation.
      this.bufferProcessing = false;

      // the callback that's passed to _write(chunk,cb)
      this.onwrite = function (er) {
        onwrite(stream, er);
      };

      // the callback that the user supplies to write(chunk,encoding,cb)
      this.writecb = null;

      // the amount that is being written when _write is called.
      this.writelen = 0;

      this.bufferedRequest = null;
      this.lastBufferedRequest = null;

      // number of pending user-supplied write callbacks
      // this must be 0 before 'finish' can be emitted
      this.pendingcb = 0;

      // emit prefinish if the only thing we're waiting for is _write cbs
      // This is relevant for synchronous Transform streams
      this.prefinished = false;

      // True if the error was already emitted and should not be thrown again
      this.errorEmitted = false;

      // count buffered requests
      this.bufferedRequestCount = 0;

      // allocate the first CorkedRequest, there is always
      // one allocated and free to use, and we maintain at most two
      this.corkedRequestsFree = new CorkedRequest(this);
    }

    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    function Writable(options) {

      // Writable ctor is applied to Duplexes, though they're not
      // instanceof Writable, they're instanceof Readable.
      if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

      this._writableState = new WritableState(options, this);

      // legacy.
      this.writable = true;

      if (options) {
        if (typeof options.write === 'function') this._write = options.write;

        if (typeof options.writev === 'function') this._writev = options.writev;
      }

      EventEmitter.call(this);
    }

    // Otherwise people can pipe Writable streams, which is just wrong.
    Writable.prototype.pipe = function () {
      this.emit('error', new Error('Cannot pipe, not readable'));
    };

    function writeAfterEnd(stream, cb) {
      var er = new Error('write after end');
      // TODO: defer error events consistently everywhere, not just the cb
      stream.emit('error', er);
      nextTick$1(cb, er);
    }

    // If we get something that is not a buffer, string, null, or undefined,
    // and we're not in objectMode, then that's an error.
    // Otherwise stream chunks are all considered to be of length=1, and the
    // watermarks determine how many objects to keep in the buffer, rather than
    // how many bytes or characters.
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      // Always throw error if a null is written
      // if we are not in object mode then throw
      // if it is not a buffer, string, or undefined.
      if (chunk === null) {
        er = new TypeError('May not write null values to stream');
      } else if (!Buffer$2.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      if (er) {
        stream.emit('error', er);
        nextTick$1(cb, er);
        valid = false;
      }
      return valid;
    }

    Writable.prototype.write = function (chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;

      if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }

      if (Buffer$2.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

      if (typeof cb !== 'function') cb = nop;

      if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }

      return ret;
    };

    Writable.prototype.cork = function () {
      var state = this._writableState;

      state.corked++;
    };

    Writable.prototype.uncork = function () {
      var state = this._writableState;

      if (state.corked) {
        state.corked--;

        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };

    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      // node::ParseEncoding() requires lower case.
      if (typeof encoding === 'string') encoding = encoding.toLowerCase();
      if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };

    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer$2.from(chunk, encoding);
      }
      return chunk;
    }

    // if we're already writing something, then just put this
    // in the queue, and wait our turn.  Otherwise, call _write
    // If we return false, then we need a drain event, so set that flag.
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);

      if (Buffer$2.isBuffer(chunk)) encoding = 'buffer';
      var len = state.objectMode ? 1 : chunk.length;

      state.length += len;

      var ret = state.length < state.highWaterMark;
      // we must ensure that previous needDrain will not be reset to false.
      if (!ret) state.needDrain = true;

      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }

      return ret;
    }

    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }

    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) nextTick$1(cb, er);else cb(er);

      stream._writableState.errorEmitted = true;
      stream.emit('error', er);
    }

    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }

    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;

      onwriteStateUpdate(state);

      if (er) onwriteError(stream, state, sync, er, cb);else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);

        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }

        if (sync) {
          /*<replacement>*/
            nextTick$1(afterWrite, stream, state, finished, cb);
          /*</replacement>*/
        } else {
            afterWrite(stream, state, finished, cb);
          }
      }
    }

    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }

    // Must force callback to be called on nextTick, so that we don't
    // emit 'drain' before the write() consumer gets the 'false' return
    // value, and has a chance to attach a 'drain' listener.
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }

    // if there's something in the buffer waiting, then process it
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;

      if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;

        var count = 0;
        while (entry) {
          buffer[count] = entry;
          entry = entry.next;
          count += 1;
        }

        doWrite(stream, state, true, state.length, buffer, '', holder.finish);

        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
      } else {
        // Slow case, write chunks one-by-one
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;

          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          // if we didn't call the onwrite immediately, then
          // it means that we need to wait until it does.
          // also, that means that the chunk and cb are currently
          // being processed, so move the buffer counter past them.
          if (state.writing) {
            break;
          }
        }

        if (entry === null) state.lastBufferedRequest = null;
      }

      state.bufferedRequestCount = 0;
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }

    Writable.prototype._write = function (chunk, encoding, cb) {
      cb(new Error('not implemented'));
    };

    Writable.prototype._writev = null;

    Writable.prototype.end = function (chunk, encoding, cb) {
      var state = this._writableState;

      if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }

      if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

      // .end() fully uncorks
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }

      // ignore unnecessary end() calls.
      if (!state.ending && !state.finished) endWritable(this, state, cb);
    };

    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }

    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }

    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit('finish');
        } else {
          prefinish(stream, state);
        }
      }
      return need;
    }

    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) nextTick$1(cb);else stream.once('finish', cb);
      }
      state.ended = true;
      stream.writable = false;
    }

    // It seems a linked list but it is not
    // there will be only 2 of these for each stream
    function CorkedRequest(state) {
      var _this = this;

      this.next = null;
      this.entry = null;

      this.finish = function (err) {
        var entry = _this.entry;
        _this.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        if (state.corkedRequestsFree) {
          state.corkedRequestsFree.next = _this;
        } else {
          state.corkedRequestsFree = _this;
        }
      };
    }

    inherits$1(Duplex, Readable);

    var keys = Object.keys(Writable.prototype);
    for (var v = 0; v < keys.length; v++) {
      var method = keys[v];
      if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);

      Readable.call(this, options);
      Writable.call(this, options);

      if (options && options.readable === false) this.readable = false;

      if (options && options.writable === false) this.writable = false;

      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

      this.once('end', onend);
    }

    // the no-half-open enforcer
    function onend() {
      // if we allow half-open state, or if the writable side ended,
      // then we're ok.
      if (this.allowHalfOpen || this._writableState.ended) return;

      // no more data can be written.
      // But allow more writes to happen in this tick.
      nextTick$1(onEndNT, this);
    }

    function onEndNT(self) {
      self.end();
    }

    // a transform stream is a readable/writable stream where you do
    inherits$1(Transform, Duplex);

    function TransformState(stream) {
      this.afterTransform = function (er, data) {
        return afterTransform(stream, er, data);
      };

      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
      this.writeencoding = null;
    }

    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;

      var cb = ts.writecb;

      if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

      ts.writechunk = null;
      ts.writecb = null;

      if (data !== null && data !== undefined) stream.push(data);

      cb(er);

      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);

      Duplex.call(this, options);

      this._transformState = new TransformState(this);

      // when the writable side finishes, then flush out anything remaining.
      var stream = this;

      // start out asking for a readable event once data is transformed.
      this._readableState.needReadable = true;

      // we have implemented the _read method, and done the other things
      // that Readable wants before the first _read call, so unset the
      // sync guard flag.
      this._readableState.sync = false;

      if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;

        if (typeof options.flush === 'function') this._flush = options.flush;
      }

      this.once('prefinish', function () {
        if (typeof this._flush === 'function') this._flush(function (er) {
          done(stream, er);
        });else done(stream);
      });
    }

    Transform.prototype.push = function (chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };

    // This is the part where you do stuff!
    // override this function in implementation classes.
    // 'chunk' is an input chunk.
    //
    // Call `push(newChunk)` to pass along transformed output
    // to the readable side.  You may call 'push' zero or more times.
    //
    // Call `cb(err)` when you are done with this chunk.  If you pass
    // an error, then that'll put the hurt on the whole operation.  If you
    // never call cb(), then you'll never get another chunk.
    Transform.prototype._transform = function (chunk, encoding, cb) {
      throw new Error('Not implemented');
    };

    Transform.prototype._write = function (chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };

    // Doesn't matter what the args are here.
    // _transform does all the work.
    // That we got here means that the readable side wants more data.
    Transform.prototype._read = function (n) {
      var ts = this._transformState;

      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
      }
    };

    function done(stream, er) {
      if (er) return stream.emit('error', er);

      // if there's nothing in the write buffer, then that means
      // that nothing more will ever be provided
      var ws = stream._writableState;
      var ts = stream._transformState;

      if (ws.length) throw new Error('Calling transform done when ws.length != 0');

      if (ts.transforming) throw new Error('Calling transform done when still transforming');

      return stream.push(null);
    }

    inherits$1(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);

      Transform.call(this, options);
    }

    PassThrough.prototype._transform = function (chunk, encoding, cb) {
      cb(null, chunk);
    };

    inherits$1(Stream, EventEmitter);
    Stream.Readable = Readable;
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;

    // Backwards-compat with node 0.4.x
    Stream.Stream = Stream;

    // old-style streams.  Note that the pipe method (the only relevant
    // part of this class) is overridden in the Readable class.

    function Stream() {
      EventEmitter.call(this);
    }

    Stream.prototype.pipe = function(dest, options) {
      var source = this;

      function ondata(chunk) {
        if (dest.writable) {
          if (false === dest.write(chunk) && source.pause) {
            source.pause();
          }
        }
      }

      source.on('data', ondata);

      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }

      dest.on('drain', ondrain);

      // If the 'end' option is not supplied, dest.end() will be called when
      // source gets the 'end' or 'close' events.  Only dest.end() once.
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on('end', onend);
        source.on('close', onclose);
      }

      var didOnEnd = false;
      function onend() {
        if (didOnEnd) return;
        didOnEnd = true;

        dest.end();
      }


      function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;

        if (typeof dest.destroy === 'function') dest.destroy();
      }

      // don't leave dangling pipes when there are errors.
      function onerror(er) {
        cleanup();
        if (EventEmitter.listenerCount(this, 'error') === 0) {
          throw er; // Unhandled stream error in pipe.
        }
      }

      source.on('error', onerror);
      dest.on('error', onerror);

      // remove all the event listeners that were added.
      function cleanup() {
        source.removeListener('data', ondata);
        dest.removeListener('drain', ondrain);

        source.removeListener('end', onend);
        source.removeListener('close', onclose);

        source.removeListener('error', onerror);
        dest.removeListener('error', onerror);

        source.removeListener('end', cleanup);
        source.removeListener('close', cleanup);

        dest.removeListener('close', cleanup);
      }

      source.on('end', cleanup);
      source.on('close', cleanup);

      dest.on('close', cleanup);

      dest.emit('pipe', source);

      // Allow for unix-like usage: A.pipe(B).pipe(C)
      return dest;
    };

    var slice = Array.prototype.slice;


    function extend(a, b) {
        for(var key in b) a[key] = b[key];

        return arguments.length < 3
            ? a
            : extend.apply(null, [a].concat(slice.call(arguments, 2)));
    }


    var fastExtend = extend;

    var promises = createCommonjsModule$1(function (module, exports) {
    var __spreadArrays =
      (commonjsGlobal$1 && commonjsGlobal$1.__spreadArrays) ||
      function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
      };
    Object.defineProperty(exports, '__esModule', { value: true });
    function promisify(vol, fn, getResult) {
      if (getResult === void 0) {
        getResult = function(input) {
          return input;
        };
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function(resolve, reject) {
          vol[fn].bind(vol).apply(
            void 0,
            __spreadArrays(args, [
              function(error, result) {
                if (error) return reject(error);
                return resolve(getResult(result));
              },
            ]),
          );
        });
      };
    }
    var FileHandle = /** @class */ (function() {
      function FileHandle(vol, fd) {
        this.vol = vol;
        this.fd = fd;
      }
      FileHandle.prototype.appendFile = function(data, options) {
        return promisify(this.vol, 'appendFile')(this.fd, data, options);
      };
      FileHandle.prototype.chmod = function(mode) {
        return promisify(this.vol, 'fchmod')(this.fd, mode);
      };
      FileHandle.prototype.chown = function(uid, gid) {
        return promisify(this.vol, 'fchown')(this.fd, uid, gid);
      };
      FileHandle.prototype.close = function() {
        return promisify(this.vol, 'close')(this.fd);
      };
      FileHandle.prototype.datasync = function() {
        return promisify(this.vol, 'fdatasync')(this.fd);
      };
      FileHandle.prototype.read = function(buffer, offset, length, position) {
        return promisify(this.vol, 'read', function(bytesRead) {
          return { bytesRead: bytesRead, buffer: buffer };
        })(this.fd, buffer, offset, length, position);
      };
      FileHandle.prototype.readFile = function(options) {
        return promisify(this.vol, 'readFile')(this.fd, options);
      };
      FileHandle.prototype.stat = function(options) {
        return promisify(this.vol, 'fstat')(this.fd, options);
      };
      FileHandle.prototype.sync = function() {
        return promisify(this.vol, 'fsync')(this.fd);
      };
      FileHandle.prototype.truncate = function(len) {
        return promisify(this.vol, 'ftruncate')(this.fd, len);
      };
      FileHandle.prototype.utimes = function(atime, mtime) {
        return promisify(this.vol, 'futimes')(this.fd, atime, mtime);
      };
      FileHandle.prototype.write = function(buffer, offset, length, position) {
        return promisify(this.vol, 'write', function(bytesWritten) {
          return { bytesWritten: bytesWritten, buffer: buffer };
        })(this.fd, buffer, offset, length, position);
      };
      FileHandle.prototype.writeFile = function(data, options) {
        return promisify(this.vol, 'writeFile')(this.fd, data, options);
      };
      return FileHandle;
    })();
    exports.FileHandle = FileHandle;
    function createPromisesApi(vol) {
      if (typeof Promise === 'undefined') return null;
      return {
        FileHandle: FileHandle,
        access: function(path, mode) {
          return promisify(vol, 'access')(path, mode);
        },
        appendFile: function(path, data, options) {
          return promisify(vol, 'appendFile')(path instanceof FileHandle ? path.fd : path, data, options);
        },
        chmod: function(path, mode) {
          return promisify(vol, 'chmod')(path, mode);
        },
        chown: function(path, uid, gid) {
          return promisify(vol, 'chown')(path, uid, gid);
        },
        copyFile: function(src, dest, flags) {
          return promisify(vol, 'copyFile')(src, dest, flags);
        },
        lchmod: function(path, mode) {
          return promisify(vol, 'lchmod')(path, mode);
        },
        lchown: function(path, uid, gid) {
          return promisify(vol, 'lchown')(path, uid, gid);
        },
        link: function(existingPath, newPath) {
          return promisify(vol, 'link')(existingPath, newPath);
        },
        lstat: function(path, options) {
          return promisify(vol, 'lstat')(path, options);
        },
        mkdir: function(path, options) {
          return promisify(vol, 'mkdir')(path, options);
        },
        mkdtemp: function(prefix, options) {
          return promisify(vol, 'mkdtemp')(prefix, options);
        },
        open: function(path, flags, mode) {
          return promisify(vol, 'open', function(fd) {
            return new FileHandle(vol, fd);
          })(path, flags, mode);
        },
        readdir: function(path, options) {
          return promisify(vol, 'readdir')(path, options);
        },
        readFile: function(id, options) {
          return promisify(vol, 'readFile')(id instanceof FileHandle ? id.fd : id, options);
        },
        readlink: function(path, options) {
          return promisify(vol, 'readlink')(path, options);
        },
        realpath: function(path, options) {
          return promisify(vol, 'realpath')(path, options);
        },
        rename: function(oldPath, newPath) {
          return promisify(vol, 'rename')(oldPath, newPath);
        },
        rmdir: function(path) {
          return promisify(vol, 'rmdir')(path);
        },
        stat: function(path, options) {
          return promisify(vol, 'stat')(path, options);
        },
        symlink: function(target, path, type) {
          return promisify(vol, 'symlink')(target, path, type);
        },
        truncate: function(path, len) {
          return promisify(vol, 'truncate')(path, len);
        },
        unlink: function(path) {
          return promisify(vol, 'unlink')(path);
        },
        utimes: function(path, atime, mtime) {
          return promisify(vol, 'utimes')(path, atime, mtime);
        },
        writeFile: function(id, data, options) {
          return promisify(vol, 'writeFile')(id instanceof FileHandle ? id.fd : id, data, options);
        },
      };
    }
    exports.default = createPromisesApi;
    });

    unwrapExports(promises);
    var promises_1 = promises.FileHandle;

    var punycode = createCommonjsModule$1(function (module, exports) {
    (function(root) {

    	/** Detect free variables */
    	var freeExports =  exports &&
    		!exports.nodeType && exports;
    	var freeModule =  module &&
    		!module.nodeType && module;
    	var freeGlobal = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1;
    	if (
    		freeGlobal.global === freeGlobal ||
    		freeGlobal.window === freeGlobal ||
    		freeGlobal.self === freeGlobal
    	) {
    		root = freeGlobal;
    	}

    	/**
    	 * The `punycode` object.
    	 * @name punycode
    	 * @type Object
    	 */
    	var punycode,

    	/** Highest positive signed 32-bit float value */
    	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

    	/** Bootstring parameters */
    	base = 36,
    	tMin = 1,
    	tMax = 26,
    	skew = 38,
    	damp = 700,
    	initialBias = 72,
    	initialN = 128, // 0x80
    	delimiter = '-', // '\x2D'

    	/** Regular expressions */
    	regexPunycode = /^xn--/,
    	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
    	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

    	/** Error messages */
    	errors = {
    		'overflow': 'Overflow: input needs wider integers to process',
    		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    		'invalid-input': 'Invalid input'
    	},

    	/** Convenience shortcuts */
    	baseMinusTMin = base - tMin,
    	floor = Math.floor,
    	stringFromCharCode = String.fromCharCode,

    	/** Temporary variable */
    	key;

    	/*--------------------------------------------------------------------------*/

    	/**
    	 * A generic error utility function.
    	 * @private
    	 * @param {String} type The error type.
    	 * @returns {Error} Throws a `RangeError` with the applicable error message.
    	 */
    	function error(type) {
    		throw RangeError(errors[type]);
    	}

    	/**
    	 * A generic `Array#map` utility function.
    	 * @private
    	 * @param {Array} array The array to iterate over.
    	 * @param {Function} callback The function that gets called for every array
    	 * item.
    	 * @returns {Array} A new array of values returned by the callback function.
    	 */
    	function map(array, fn) {
    		var length = array.length;
    		var result = [];
    		while (length--) {
    			result[length] = fn(array[length]);
    		}
    		return result;
    	}

    	/**
    	 * A simple `Array#map`-like wrapper to work with domain name strings or email
    	 * addresses.
    	 * @private
    	 * @param {String} domain The domain name or email address.
    	 * @param {Function} callback The function that gets called for every
    	 * character.
    	 * @returns {Array} A new string of characters returned by the callback
    	 * function.
    	 */
    	function mapDomain(string, fn) {
    		var parts = string.split('@');
    		var result = '';
    		if (parts.length > 1) {
    			// In email addresses, only the domain name should be punycoded. Leave
    			// the local part (i.e. everything up to `@`) intact.
    			result = parts[0] + '@';
    			string = parts[1];
    		}
    		// Avoid `split(regex)` for IE8 compatibility. See #17.
    		string = string.replace(regexSeparators, '\x2E');
    		var labels = string.split('.');
    		var encoded = map(labels, fn).join('.');
    		return result + encoded;
    	}

    	/**
    	 * Creates an array containing the numeric code points of each Unicode
    	 * character in the string. While JavaScript uses UCS-2 internally,
    	 * this function will convert a pair of surrogate halves (each of which
    	 * UCS-2 exposes as separate characters) into a single code point,
    	 * matching UTF-16.
    	 * @see `punycode.ucs2.encode`
    	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
    	 * @memberOf punycode.ucs2
    	 * @name decode
    	 * @param {String} string The Unicode input string (UCS-2).
    	 * @returns {Array} The new array of code points.
    	 */
    	function ucs2decode(string) {
    		var output = [],
    		    counter = 0,
    		    length = string.length,
    		    value,
    		    extra;
    		while (counter < length) {
    			value = string.charCodeAt(counter++);
    			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
    				// high surrogate, and there is a next character
    				extra = string.charCodeAt(counter++);
    				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
    					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
    				} else {
    					// unmatched surrogate; only append this code unit, in case the next
    					// code unit is the high surrogate of a surrogate pair
    					output.push(value);
    					counter--;
    				}
    			} else {
    				output.push(value);
    			}
    		}
    		return output;
    	}

    	/**
    	 * Creates a string based on an array of numeric code points.
    	 * @see `punycode.ucs2.decode`
    	 * @memberOf punycode.ucs2
    	 * @name encode
    	 * @param {Array} codePoints The array of numeric code points.
    	 * @returns {String} The new Unicode string (UCS-2).
    	 */
    	function ucs2encode(array) {
    		return map(array, function(value) {
    			var output = '';
    			if (value > 0xFFFF) {
    				value -= 0x10000;
    				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
    				value = 0xDC00 | value & 0x3FF;
    			}
    			output += stringFromCharCode(value);
    			return output;
    		}).join('');
    	}

    	/**
    	 * Converts a basic code point into a digit/integer.
    	 * @see `digitToBasic()`
    	 * @private
    	 * @param {Number} codePoint The basic numeric code point value.
    	 * @returns {Number} The numeric value of a basic code point (for use in
    	 * representing integers) in the range `0` to `base - 1`, or `base` if
    	 * the code point does not represent a value.
    	 */
    	function basicToDigit(codePoint) {
    		if (codePoint - 48 < 10) {
    			return codePoint - 22;
    		}
    		if (codePoint - 65 < 26) {
    			return codePoint - 65;
    		}
    		if (codePoint - 97 < 26) {
    			return codePoint - 97;
    		}
    		return base;
    	}

    	/**
    	 * Converts a digit/integer into a basic code point.
    	 * @see `basicToDigit()`
    	 * @private
    	 * @param {Number} digit The numeric value of a basic code point.
    	 * @returns {Number} The basic code point whose value (when used for
    	 * representing integers) is `digit`, which needs to be in the range
    	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
    	 * used; else, the lowercase form is used. The behavior is undefined
    	 * if `flag` is non-zero and `digit` has no uppercase form.
    	 */
    	function digitToBasic(digit, flag) {
    		//  0..25 map to ASCII a..z or A..Z
    		// 26..35 map to ASCII 0..9
    		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    	}

    	/**
    	 * Bias adaptation function as per section 3.4 of RFC 3492.
    	 * http://tools.ietf.org/html/rfc3492#section-3.4
    	 * @private
    	 */
    	function adapt(delta, numPoints, firstTime) {
    		var k = 0;
    		delta = firstTime ? floor(delta / damp) : delta >> 1;
    		delta += floor(delta / numPoints);
    		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
    			delta = floor(delta / baseMinusTMin);
    		}
    		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    	}

    	/**
    	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
    	 * symbols.
    	 * @memberOf punycode
    	 * @param {String} input The Punycode string of ASCII-only symbols.
    	 * @returns {String} The resulting string of Unicode symbols.
    	 */
    	function decode(input) {
    		// Don't use UCS-2
    		var output = [],
    		    inputLength = input.length,
    		    out,
    		    i = 0,
    		    n = initialN,
    		    bias = initialBias,
    		    basic,
    		    j,
    		    index,
    		    oldi,
    		    w,
    		    k,
    		    digit,
    		    t,
    		    /** Cached calculation results */
    		    baseMinusT;

    		// Handle the basic code points: let `basic` be the number of input code
    		// points before the last delimiter, or `0` if there is none, then copy
    		// the first basic code points to the output.

    		basic = input.lastIndexOf(delimiter);
    		if (basic < 0) {
    			basic = 0;
    		}

    		for (j = 0; j < basic; ++j) {
    			// if it's not a basic code point
    			if (input.charCodeAt(j) >= 0x80) {
    				error('not-basic');
    			}
    			output.push(input.charCodeAt(j));
    		}

    		// Main decoding loop: start just after the last delimiter if any basic code
    		// points were copied; start at the beginning otherwise.

    		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

    			// `index` is the index of the next character to be consumed.
    			// Decode a generalized variable-length integer into `delta`,
    			// which gets added to `i`. The overflow checking is easier
    			// if we increase `i` as we go, then subtract off its starting
    			// value at the end to obtain `delta`.
    			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

    				if (index >= inputLength) {
    					error('invalid-input');
    				}

    				digit = basicToDigit(input.charCodeAt(index++));

    				if (digit >= base || digit > floor((maxInt - i) / w)) {
    					error('overflow');
    				}

    				i += digit * w;
    				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

    				if (digit < t) {
    					break;
    				}

    				baseMinusT = base - t;
    				if (w > floor(maxInt / baseMinusT)) {
    					error('overflow');
    				}

    				w *= baseMinusT;

    			}

    			out = output.length + 1;
    			bias = adapt(i - oldi, out, oldi == 0);

    			// `i` was supposed to wrap around from `out` to `0`,
    			// incrementing `n` each time, so we'll fix that now:
    			if (floor(i / out) > maxInt - n) {
    				error('overflow');
    			}

    			n += floor(i / out);
    			i %= out;

    			// Insert `n` at position `i` of the output
    			output.splice(i++, 0, n);

    		}

    		return ucs2encode(output);
    	}

    	/**
    	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
    	 * Punycode string of ASCII-only symbols.
    	 * @memberOf punycode
    	 * @param {String} input The string of Unicode symbols.
    	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
    	 */
    	function encode(input) {
    		var n,
    		    delta,
    		    handledCPCount,
    		    basicLength,
    		    bias,
    		    j,
    		    m,
    		    q,
    		    k,
    		    t,
    		    currentValue,
    		    output = [],
    		    /** `inputLength` will hold the number of code points in `input`. */
    		    inputLength,
    		    /** Cached calculation results */
    		    handledCPCountPlusOne,
    		    baseMinusT,
    		    qMinusT;

    		// Convert the input in UCS-2 to Unicode
    		input = ucs2decode(input);

    		// Cache the length
    		inputLength = input.length;

    		// Initialize the state
    		n = initialN;
    		delta = 0;
    		bias = initialBias;

    		// Handle the basic code points
    		for (j = 0; j < inputLength; ++j) {
    			currentValue = input[j];
    			if (currentValue < 0x80) {
    				output.push(stringFromCharCode(currentValue));
    			}
    		}

    		handledCPCount = basicLength = output.length;

    		// `handledCPCount` is the number of code points that have been handled;
    		// `basicLength` is the number of basic code points.

    		// Finish the basic string - if it is not empty - with a delimiter
    		if (basicLength) {
    			output.push(delimiter);
    		}

    		// Main encoding loop:
    		while (handledCPCount < inputLength) {

    			// All non-basic code points < n have been handled already. Find the next
    			// larger one:
    			for (m = maxInt, j = 0; j < inputLength; ++j) {
    				currentValue = input[j];
    				if (currentValue >= n && currentValue < m) {
    					m = currentValue;
    				}
    			}

    			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    			// but guard against overflow
    			handledCPCountPlusOne = handledCPCount + 1;
    			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
    				error('overflow');
    			}

    			delta += (m - n) * handledCPCountPlusOne;
    			n = m;

    			for (j = 0; j < inputLength; ++j) {
    				currentValue = input[j];

    				if (currentValue < n && ++delta > maxInt) {
    					error('overflow');
    				}

    				if (currentValue == n) {
    					// Represent delta as a generalized variable-length integer
    					for (q = delta, k = base; /* no condition */; k += base) {
    						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
    						if (q < t) {
    							break;
    						}
    						qMinusT = q - t;
    						baseMinusT = base - t;
    						output.push(
    							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
    						);
    						q = floor(qMinusT / baseMinusT);
    					}

    					output.push(stringFromCharCode(digitToBasic(q, 0)));
    					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
    					delta = 0;
    					++handledCPCount;
    				}
    			}

    			++delta;
    			++n;

    		}
    		return output.join('');
    	}

    	/**
    	 * Converts a Punycode string representing a domain name or an email address
    	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
    	 * it doesn't matter if you call it on a string that has already been
    	 * converted to Unicode.
    	 * @memberOf punycode
    	 * @param {String} input The Punycoded domain name or email address to
    	 * convert to Unicode.
    	 * @returns {String} The Unicode representation of the given Punycode
    	 * string.
    	 */
    	function toUnicode(input) {
    		return mapDomain(input, function(string) {
    			return regexPunycode.test(string)
    				? decode(string.slice(4).toLowerCase())
    				: string;
    		});
    	}

    	/**
    	 * Converts a Unicode string representing a domain name or an email address to
    	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
    	 * i.e. it doesn't matter if you call it with a domain that's already in
    	 * ASCII.
    	 * @memberOf punycode
    	 * @param {String} input The domain name or email address to convert, as a
    	 * Unicode string.
    	 * @returns {String} The Punycode representation of the given domain name or
    	 * email address.
    	 */
    	function toASCII(input) {
    		return mapDomain(input, function(string) {
    			return regexNonASCII.test(string)
    				? 'xn--' + encode(string)
    				: string;
    		});
    	}

    	/*--------------------------------------------------------------------------*/

    	/** Define the public API */
    	punycode = {
    		/**
    		 * A string representing the current Punycode.js version number.
    		 * @memberOf punycode
    		 * @type String
    		 */
    		'version': '1.3.2',
    		/**
    		 * An object of methods to convert from JavaScript's internal character
    		 * representation (UCS-2) to Unicode code points, and back.
    		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
    		 * @memberOf punycode
    		 * @type Object
    		 */
    		'ucs2': {
    			'decode': ucs2decode,
    			'encode': ucs2encode
    		},
    		'decode': decode,
    		'encode': encode,
    		'toASCII': toASCII,
    		'toUnicode': toUnicode
    	};

    	/** Expose `punycode` */
    	// Some AMD build optimizers, like r.js, check for specific condition patterns
    	// like the following:
    	if (freeExports && freeModule) {
    		if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
    			freeModule.exports = punycode;
    		} else { // in Narwhal or RingoJS v0.7.0-
    			for (key in punycode) {
    				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
    			}
    		}
    	} else { // in Rhino or a web browser
    		root.punycode = punycode;
    	}

    }(commonjsGlobal$1));
    });

    var util$1 = {
      isString: function(arg) {
        return typeof(arg) === 'string';
      },
      isObject: function(arg) {
        return typeof(arg) === 'object' && arg !== null;
      },
      isNull: function(arg) {
        return arg === null;
      },
      isNullOrUndefined: function(arg) {
        return arg == null;
      }
    };

    // Copyright Joyent, Inc. and other Node contributors.

    // If obj.hasOwnProperty has been overridden, then calling
    // obj.hasOwnProperty(prop) will break.
    // See: https://github.com/joyent/node/issues/1707
    function hasOwnProperty$1(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var decode = function(qs, sep, eq, options) {
      sep = sep || '&';
      eq = eq || '=';
      var obj = {};

      if (typeof qs !== 'string' || qs.length === 0) {
        return obj;
      }

      var regexp = /\+/g;
      qs = qs.split(sep);

      var maxKeys = 1000;
      if (options && typeof options.maxKeys === 'number') {
        maxKeys = options.maxKeys;
      }

      var len = qs.length;
      // maxKeys <= 0 means that we should not limit keys count
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }

      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, '%20'),
            idx = x.indexOf(eq),
            kstr, vstr, k, v;

        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = '';
        }

        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);

        if (!hasOwnProperty$1(obj, k)) {
          obj[k] = v;
        } else if (Array.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }

      return obj;
    };

    // Copyright Joyent, Inc. and other Node contributors.

    var stringifyPrimitive = function(v) {
      switch (typeof v) {
        case 'string':
          return v;

        case 'boolean':
          return v ? 'true' : 'false';

        case 'number':
          return isFinite(v) ? v : '';

        default:
          return '';
      }
    };

    var encode = function(obj, sep, eq, name) {
      sep = sep || '&';
      eq = eq || '=';
      if (obj === null) {
        obj = undefined;
      }

      if (typeof obj === 'object') {
        return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
          if (Array.isArray(obj[k])) {
            return obj[k].map(function(v) {
              return ks + encodeURIComponent(stringifyPrimitive(v));
            }).join(sep);
          } else {
            return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
          }
        }).join(sep);

      }

      if (!name) return '';
      return encodeURIComponent(stringifyPrimitive(name)) + eq +
             encodeURIComponent(stringifyPrimitive(obj));
    };

    var querystring = createCommonjsModule$1(function (module, exports) {

    exports.decode = exports.parse = decode;
    exports.encode = exports.stringify = encode;
    });
    var querystring_1 = querystring.decode;
    var querystring_2 = querystring.parse;
    var querystring_3 = querystring.encode;
    var querystring_4 = querystring.stringify;

    var parse = urlParse;
    var resolve$1 = urlResolve;
    var resolveObject = urlResolveObject;
    var format$1 = urlFormat;

    var Url_1 = Url;

    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.host = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.query = null;
      this.pathname = null;
      this.path = null;
      this.href = null;
    }

    // Reference: RFC 3986, RFC 1808, RFC 2396

    // define these here so at least they only have to be
    // compiled once on the first module load.
    var protocolPattern = /^([a-z0-9.+-]+:)/i,
        portPattern = /:[0-9]*$/,

        // Special case for a simple path URL
        simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

        // RFC 2396: characters reserved for delimiting URLs.
        // We actually just auto-escape these.
        delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

        // RFC 2396: characters not allowed for various reasons.
        unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

        // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
        autoEscape = ['\''].concat(unwise),
        // Characters that are never ever allowed in a hostname.
        // Note that any invalid chars are also handled, but these
        // are the ones that are *expected* to be seen, so we fast-path
        // them.
        nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
        hostEndingChars = ['/', '?', '#'],
        hostnameMaxLen = 255,
        hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
        hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        // protocols that can allow "unsafe" and "unwise" chars.
        unsafeProtocol = {
          'javascript': true,
          'javascript:': true
        },
        // protocols that never have a hostname.
        hostlessProtocol = {
          'javascript': true,
          'javascript:': true
        },
        // protocols that always contain a // bit.
        slashedProtocol = {
          'http': true,
          'https': true,
          'ftp': true,
          'gopher': true,
          'file': true,
          'http:': true,
          'https:': true,
          'ftp:': true,
          'gopher:': true,
          'file:': true
        };

    function urlParse(url, parseQueryString, slashesDenoteHost) {
      if (url && util$1.isObject(url) && url instanceof Url) return url;

      var u = new Url;
      u.parse(url, parseQueryString, slashesDenoteHost);
      return u;
    }

    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      if (!util$1.isString(url)) {
        throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
      }

      // Copy chrome, IE, opera backslash-handling behavior.
      // Back slashes before the query string get converted to forward slashes
      // See: https://code.google.com/p/chromium/issues/detail?id=25916
      var queryIndex = url.indexOf('?'),
          splitter =
              (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
          uSplit = url.split(splitter),
          slashRegex = /\\/g;
      uSplit[0] = uSplit[0].replace(slashRegex, '/');
      url = uSplit.join(splitter);

      var rest = url;

      // trim before proceeding.
      // This is to support parse stuff like "  http://foo.com  \n"
      rest = rest.trim();

      if (!slashesDenoteHost && url.split('#').length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.path = rest;
          this.href = rest;
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
            if (parseQueryString) {
              this.query = querystring.parse(this.search.substr(1));
            } else {
              this.query = this.search.substr(1);
            }
          } else if (parseQueryString) {
            this.search = '';
            this.query = {};
          }
          return this;
        }
      }

      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
      }

      // figure out if it's got a host
      // user@server is *always* interpreted as a hostname, and url
      // resolution will treat //foo/bar as host=foo,path=bar because that's
      // how the browser resolves relative URLs.
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === '//';
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }

      if (!hostlessProtocol[proto] &&
          (slashes || (proto && !slashedProtocol[proto]))) {

        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c

        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.

        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for (var i = 0; i < hostEndingChars.length; i++) {
          var hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }

        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) {
          // atSign can be anywhere.
          atSign = rest.lastIndexOf('@');
        } else {
          // atSign must be in auth portion.
          // http://a@b/c@d => host:b auth:a path:/c@d
          atSign = rest.lastIndexOf('@', hostEnd);
        }

        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = decodeURIComponent(auth);
        }

        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for (var i = 0; i < nonHostChars.length; i++) {
          var hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1)
          hostEnd = rest.length;

        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);

        // pull out port.
        this.parseHost();

        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || '';

        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = this.hostname[0] === '[' &&
            this.hostname[this.hostname.length - 1] === ']';

        // validate a little.
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (var i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) continue;
            if (!part.match(hostnamePartPattern)) {
              var newpart = '';
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  // we replace non-ASCII char with a temporary placeholder
                  // we need this to make sure size of hostname is not
                  // broken by replacing non-ASCII by nothing
                  newpart += 'x';
                } else {
                  newpart += part[j];
                }
              }
              // we test again with ASCII char only
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = '/' + notHost.join('.') + rest;
                }
                this.hostname = validParts.join('.');
                break;
              }
            }
          }
        }

        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = '';
        } else {
          // hostnames are always lower case.
          this.hostname = this.hostname.toLowerCase();
        }

        if (!ipv6Hostname) {
          // IDNA Support: Returns a punycoded representation of "domain".
          // It only converts parts of the domain name that
          // have non-ASCII characters, i.e. it doesn't matter if
          // you call it with a domain that already is ASCII-only.
          this.hostname = punycode.toASCII(this.hostname);
        }

        var p = this.port ? ':' + this.port : '';
        var h = this.hostname || '';
        this.host = h + p;
        this.href += this.host;

        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
          if (rest[0] !== '/') {
            rest = '/' + rest;
          }
        }
      }

      // now rest is set to the post-host stuff.
      // chop off any delim chars.
      if (!unsafeProtocol[lowerProto]) {

        // First, make 100% sure that any "autoEscape" chars get
        // escaped, even if encodeURIComponent doesn't think they
        // need to be.
        for (var i = 0, l = autoEscape.length; i < l; i++) {
          var ae = autoEscape[i];
          if (rest.indexOf(ae) === -1)
            continue;
          var esc = encodeURIComponent(ae);
          if (esc === ae) {
            esc = escape(ae);
          }
          rest = rest.split(ae).join(esc);
        }
      }


      // chop off from the tail first.
      var hash = rest.indexOf('#');
      if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf('?');
      if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) {
          this.query = querystring.parse(this.query);
        }
        rest = rest.slice(0, qm);
      } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = '';
        this.query = {};
      }
      if (rest) this.pathname = rest;
      if (slashedProtocol[lowerProto] &&
          this.hostname && !this.pathname) {
        this.pathname = '/';
      }

      //to support http.request
      if (this.pathname || this.search) {
        var p = this.pathname || '';
        var s = this.search || '';
        this.path = p + s;
      }

      // finally, reconstruct the href based on what has been validated.
      this.href = this.format();
      return this;
    };

    // format a parsed object into a url string
    function urlFormat(obj) {
      // ensure it's an object, and not a string url.
      // If it's an obj, this is a no-op.
      // this way, you can call url_format() on strings
      // to clean up potentially wonky urls.
      if (util$1.isString(obj)) obj = urlParse(obj);
      if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
      return obj.format();
    }

    Url.prototype.format = function() {
      var auth = this.auth || '';
      if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
      }

      var protocol = this.protocol || '',
          pathname = this.pathname || '',
          hash = this.hash || '',
          host = false,
          query = '';

      if (this.host) {
        host = auth + this.host;
      } else if (this.hostname) {
        host = auth + (this.hostname.indexOf(':') === -1 ?
            this.hostname :
            '[' + this.hostname + ']');
        if (this.port) {
          host += ':' + this.port;
        }
      }

      if (this.query &&
          util$1.isObject(this.query) &&
          Object.keys(this.query).length) {
        query = querystring.stringify(this.query);
      }

      var search = this.search || (query && ('?' + query)) || '';

      if (protocol && protocol.substr(-1) !== ':') protocol += ':';

      // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
      // unless they had them to begin with.
      if (this.slashes ||
          (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
      } else if (!host) {
        host = '';
      }

      if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
      if (search && search.charAt(0) !== '?') search = '?' + search;

      pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
      });
      search = search.replace('#', '%23');

      return protocol + host + pathname + search + hash;
    };

    function urlResolve(source, relative) {
      return urlParse(source, false, true).resolve(relative);
    }

    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };

    function urlResolveObject(source, relative) {
      if (!source) return relative;
      return urlParse(source, false, true).resolveObject(relative);
    }

    Url.prototype.resolveObject = function(relative) {
      if (util$1.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }

      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }

      // hash is always overridden, no matter what.
      // even href="" will remove it.
      result.hash = relative.hash;

      // if the relative url is empty, then there's nothing left to do here.
      if (relative.href === '') {
        result.href = result.format();
        return result;
      }

      // hrefs like //foo/bar always cut to the protocol.
      if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== 'protocol')
            result[rkey] = relative[rkey];
        }

        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] &&
            result.hostname && !result.pathname) {
          result.path = result.pathname = '/';
        }

        result.href = result.format();
        return result;
      }

      if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }

        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          var relPath = (relative.pathname || '').split('/');
          while (relPath.length && !(relative.host = relPath.shift()));
          if (!relative.host) relative.host = '';
          if (!relative.hostname) relative.hostname = '';
          if (relPath[0] !== '') relPath.unshift('');
          if (relPath.length < 2) relPath.unshift('');
          result.pathname = relPath.join('/');
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || '';
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
          var p = result.pathname || '';
          var s = result.search || '';
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }

      var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
          isRelAbs = (
              relative.host ||
              relative.pathname && relative.pathname.charAt(0) === '/'
          ),
          mustEndAbs = (isRelAbs || isSourceAbs ||
                        (result.host && relative.pathname)),
          removeAllDots = mustEndAbs,
          srcPath = result.pathname && result.pathname.split('/') || [],
          relPath = relative.pathname && relative.pathname.split('/') || [],
          psychotic = result.protocol && !slashedProtocol[result.protocol];

      // if the url is a non-slashed url, then relative
      // links like ../.. should be able
      // to crawl up to the hostname, as well.  This is strange.
      // result.protocol has already been set by now.
      // Later on, put the first path part into the host field.
      if (psychotic) {
        result.hostname = '';
        result.port = null;
        if (result.host) {
          if (srcPath[0] === '') srcPath[0] = result.host;
          else srcPath.unshift(result.host);
        }
        result.host = '';
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === '') relPath[0] = relative.host;
            else relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
      }

      if (isRelAbs) {
        // it's absolute.
        result.host = (relative.host || relative.host === '') ?
                      relative.host : result.host;
        result.hostname = (relative.hostname || relative.hostname === '') ?
                          relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
        // fall through to the dot-handling below.
      } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!util$1.isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          //occationaly the auth can get stuck only in host
          //this especially happens in cases like
          //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
          var authInHost = result.host && result.host.indexOf('@') > 0 ?
                           result.host.split('@') : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!util$1.isNull(result.pathname) || !util$1.isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : '') +
                        (result.search ? result.search : '');
        }
        result.href = result.format();
        return result;
      }

      if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) {
          result.path = '/' + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }

      // if a url ENDs in . or .., then it must get a trailing slash.
      // however, if it ends in anything else non-slashy,
      // then it must NOT get a trailing slash.
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (
          (result.host || relative.host || srcPath.length > 1) &&
          (last === '.' || last === '..') || last === '');

      // strip single dots, resolve double dots to parent dir
      // if the path tries to go above the root, `up` ends up > 0
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === '.') {
          srcPath.splice(i, 1);
        } else if (last === '..') {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }

      // if the path is allowed to go above the root, restore leading ..s
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift('..');
        }
      }

      if (mustEndAbs && srcPath[0] !== '' &&
          (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
        srcPath.unshift('');
      }

      if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
        srcPath.push('');
      }

      var isAbsolute = srcPath[0] === '' ||
          (srcPath[0] && srcPath[0].charAt(0) === '/');

      // put the host back
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? '' :
                                        srcPath.length ? srcPath.shift() : '';
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ?
                         result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }

      mustEndAbs = mustEndAbs || (result.host && srcPath.length);

      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift('');
      }

      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join('/');
      }

      //to support request.http
      if (!util$1.isNull(result.pathname) || !util$1.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') +
                      (result.search ? result.search : '');
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };

    Url.prototype.parseHost = function() {
      var host = this.host;
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ':') {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) this.hostname = host;
    };

    var url = {
    	parse: parse,
    	resolve: resolve$1,
    	resolveObject: resolveObject,
    	format: format$1,
    	Url: Url_1
    };

    var correctPath_1 = createCommonjsModule$1(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.unixify = unixify;
    exports.correctPath = correctPath;
    var isWin = process$1.platform === 'win32';

    function removeTrailingSeparator(str) {
      var i = str.length - 1;
      if (i < 2) {
        return str;
      }
      while (isSeparator(str, i)) {
        i--;
      }
      return str.substr(0, i + 1);
    }

    function isSeparator(str, i) {
      var char = str[i];
      return i > 0 && (char === '/' || isWin && char === '\\');
    }

    function normalizePath(str, stripTrailing) {
      if (typeof str !== 'string') {
        throw new TypeError('expected a string');
      }
      str = str.replace(/[\\\/]+/g, '/');
      if (stripTrailing !== false) {
        str = removeTrailingSeparator(str);
      }
      return str;
    }

    function unixify(filepath) {
      var stripTrailing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (isWin) {
        filepath = normalizePath(filepath, stripTrailing);
        return filepath.replace(/^([a-zA-Z]+:|\.\/)/, '');
      }
      return filepath;
    }

    function correctPath(filepath) {
      return unixify(filepath.replace(/^\\\\\?\\.:\\/, '\\'));
    }
    });

    unwrapExports(correctPath_1);
    var correctPath_2 = correctPath_1.unixify;
    var correctPath_3 = correctPath_1.correctPath;

    var volume = createCommonjsModule$1(function (module, exports) {
    var __extends =
      (commonjsGlobal$1 && commonjsGlobal$1.__extends) ||
      (function() {
        var extendStatics = function(d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(d, b) {
                d.__proto__ = b;
              }) ||
            function(d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
      })();
    var __spreadArrays =
      (commonjsGlobal$1 && commonjsGlobal$1.__spreadArrays) ||
      function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
      };
    Object.defineProperty(exports, '__esModule', { value: true });
















    var resolveCrossPlatform = pathModule.resolve;
    var O_RDONLY = constants.constants.O_RDONLY,
      O_WRONLY = constants.constants.O_WRONLY,
      O_RDWR = constants.constants.O_RDWR,
      O_CREAT = constants.constants.O_CREAT,
      O_EXCL = constants.constants.O_EXCL,
      O_TRUNC = constants.constants.O_TRUNC,
      O_APPEND = constants.constants.O_APPEND,
      O_SYNC = constants.constants.O_SYNC,
      F_OK = constants.constants.F_OK,
      COPYFILE_EXCL = constants.constants.COPYFILE_EXCL,
      COPYFILE_FICLONE_FORCE = constants.constants.COPYFILE_FICLONE_FORCE;
    var sep;
    var relative;
    {
      sep = pathModule.sep;
      relative = pathModule.relative;
    }
    var isWin = process_1.default.platform === 'win32';
    var kMinPoolSpace = 128;
    // const kMaxLength = require('buffer').kMaxLength;
    // ---------------------------------------- Error messages
    // TODO: Use `internal/errors.js` in the future.
    var ERRSTR = {
      PATH_STR: 'path must be a string or Buffer',
      // FD:             'file descriptor must be a unsigned 32-bit integer',
      FD: 'fd must be a file descriptor',
      MODE_INT: 'mode must be an int',
      CB: 'callback must be a function',
      UID: 'uid must be an unsigned int',
      GID: 'gid must be an unsigned int',
      LEN: 'len must be an integer',
      ATIME: 'atime must be an integer',
      MTIME: 'mtime must be an integer',
      PREFIX: 'filename prefix is required',
      BUFFER: 'buffer must be an instance of Buffer or StaticBuffer',
      OFFSET: 'offset must be an integer',
      LENGTH: 'length must be an integer',
      POSITION: 'position must be an integer',
    };
    var ERRSTR_OPTS = function(tipeof) {
      return 'Expected options to be either an object or a string, but got ' + tipeof + ' instead';
    };
    // const ERRSTR_FLAG = flag => `Unknown file open flag: ${flag}`;
    var ENOENT = 'ENOENT';
    var EBADF = 'EBADF';
    var EINVAL = 'EINVAL';
    var EPERM = 'EPERM';
    var EPROTO = 'EPROTO';
    var EEXIST = 'EEXIST';
    var ENOTDIR = 'ENOTDIR';
    var EMFILE = 'EMFILE';
    var EACCES = 'EACCES';
    var EISDIR = 'EISDIR';
    var ENOTEMPTY = 'ENOTEMPTY';
    var ENOSYS = 'ENOSYS';
    function formatError(errorCode, func, path, path2) {
      if (func === void 0) {
        func = '';
      }
      if (path === void 0) {
        path = '';
      }
      if (path2 === void 0) {
        path2 = '';
      }
      var pathFormatted = '';
      if (path) pathFormatted = " '" + path + "'";
      if (path2) pathFormatted += " -> '" + path2 + "'";
      switch (errorCode) {
        case ENOENT:
          return 'ENOENT: no such file or directory, ' + func + pathFormatted;
        case EBADF:
          return 'EBADF: bad file descriptor, ' + func + pathFormatted;
        case EINVAL:
          return 'EINVAL: invalid argument, ' + func + pathFormatted;
        case EPERM:
          return 'EPERM: operation not permitted, ' + func + pathFormatted;
        case EPROTO:
          return 'EPROTO: protocol error, ' + func + pathFormatted;
        case EEXIST:
          return 'EEXIST: file already exists, ' + func + pathFormatted;
        case ENOTDIR:
          return 'ENOTDIR: not a directory, ' + func + pathFormatted;
        case EISDIR:
          return 'EISDIR: illegal operation on a directory, ' + func + pathFormatted;
        case EACCES:
          return 'EACCES: permission denied, ' + func + pathFormatted;
        case ENOTEMPTY:
          return 'ENOTEMPTY: directory not empty, ' + func + pathFormatted;
        case EMFILE:
          return 'EMFILE: too many open files, ' + func + pathFormatted;
        case ENOSYS:
          return 'ENOSYS: function not implemented, ' + func + pathFormatted;
        default:
          return errorCode + ': error occurred, ' + func + pathFormatted;
      }
    }
    function createError(errorCode, func, path, path2, Constructor) {
      if (func === void 0) {
        func = '';
      }
      if (path === void 0) {
        path = '';
      }
      if (path2 === void 0) {
        path2 = '';
      }
      if (Constructor === void 0) {
        Constructor = Error;
      }
      var error = new Constructor(formatError(errorCode, func, path, path2));
      error.code = errorCode;
      return error;
    }
    function throwError(errorCode, func, path, path2, Constructor) {
      if (func === void 0) {
        func = '';
      }
      if (path === void 0) {
        path = '';
      }
      if (path2 === void 0) {
        path2 = '';
      }
      if (Constructor === void 0) {
        Constructor = Error;
      }
      throw createError(errorCode, func, path, path2, Constructor);
    }
    // ---------------------------------------- Flags
    // List of file `flags` as defined by Node.
    var FLAGS;
    (function(FLAGS) {
      // Open file for reading. An exception occurs if the file does not exist.
      FLAGS[(FLAGS['r'] = O_RDONLY)] = 'r';
      // Open file for reading and writing. An exception occurs if the file does not exist.
      FLAGS[(FLAGS['r+'] = O_RDWR)] = 'r+';
      // Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
      FLAGS[(FLAGS['rs'] = O_RDONLY | O_SYNC)] = 'rs';
      FLAGS[(FLAGS['sr'] = FLAGS.rs)] = 'sr';
      // Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
      FLAGS[(FLAGS['rs+'] = O_RDWR | O_SYNC)] = 'rs+';
      FLAGS[(FLAGS['sr+'] = FLAGS['rs+'])] = 'sr+';
      // Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
      FLAGS[(FLAGS['w'] = O_WRONLY | O_CREAT | O_TRUNC)] = 'w';
      // Like 'w' but fails if path exists.
      FLAGS[(FLAGS['wx'] = O_WRONLY | O_CREAT | O_TRUNC | O_EXCL)] = 'wx';
      FLAGS[(FLAGS['xw'] = FLAGS.wx)] = 'xw';
      // Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
      FLAGS[(FLAGS['w+'] = O_RDWR | O_CREAT | O_TRUNC)] = 'w+';
      // Like 'w+' but fails if path exists.
      FLAGS[(FLAGS['wx+'] = O_RDWR | O_CREAT | O_TRUNC | O_EXCL)] = 'wx+';
      FLAGS[(FLAGS['xw+'] = FLAGS['wx+'])] = 'xw+';
      // Open file for appending. The file is created if it does not exist.
      FLAGS[(FLAGS['a'] = O_WRONLY | O_APPEND | O_CREAT)] = 'a';
      // Like 'a' but fails if path exists.
      FLAGS[(FLAGS['ax'] = O_WRONLY | O_APPEND | O_CREAT | O_EXCL)] = 'ax';
      FLAGS[(FLAGS['xa'] = FLAGS.ax)] = 'xa';
      // Open file for reading and appending. The file is created if it does not exist.
      FLAGS[(FLAGS['a+'] = O_RDWR | O_APPEND | O_CREAT)] = 'a+';
      // Like 'a+' but fails if path exists.
      FLAGS[(FLAGS['ax+'] = O_RDWR | O_APPEND | O_CREAT | O_EXCL)] = 'ax+';
      FLAGS[(FLAGS['xa+'] = FLAGS['ax+'])] = 'xa+';
    })((FLAGS = exports.FLAGS || (exports.FLAGS = {})));
    function flagsToNumber(flags) {
      if (typeof flags === 'number') return flags;
      if (typeof flags === 'string') {
        var flagsNum = FLAGS[flags];
        if (typeof flagsNum !== 'undefined') return flagsNum;
      }
      // throw new TypeError(formatError(ERRSTR_FLAG(flags)));
      throw new errors.TypeError('ERR_INVALID_OPT_VALUE', 'flags', flags);
    }
    exports.flagsToNumber = flagsToNumber;
    // ---------------------------------------- Options
    function getOptions(defaults, options) {
      var opts;
      if (!options) return defaults;
      else {
        var tipeof = typeof options;
        switch (tipeof) {
          case 'string':
            opts = fastExtend({}, defaults, { encoding: options });
            break;
          case 'object':
            opts = fastExtend({}, defaults, options);
            break;
          default:
            throw TypeError(ERRSTR_OPTS(tipeof));
        }
      }
      if (opts.encoding !== 'buffer') encoding.assertEncoding(opts.encoding);
      return opts;
    }
    function optsGenerator(defaults) {
      return function(options) {
        return getOptions(defaults, options);
      };
    }
    function validateCallback(callback) {
      if (typeof callback !== 'function') throw TypeError(ERRSTR.CB);
      return callback;
    }
    function optsAndCbGenerator(getOpts) {
      return function(options, callback) {
        return typeof options === 'function' ? [getOpts(), options] : [getOpts(options), validateCallback(callback)];
      };
    }
    var optsDefaults = {
      encoding: 'utf8',
    };
    var getDefaultOpts = optsGenerator(optsDefaults);
    var getDefaultOptsAndCb = optsAndCbGenerator(getDefaultOpts);
    var readFileOptsDefaults = {
      flag: 'r',
    };
    var getReadFileOptions = optsGenerator(readFileOptsDefaults);
    var writeFileDefaults = {
      encoding: 'utf8',
      mode: 438 /* DEFAULT */,
      flag: FLAGS[FLAGS.w],
    };
    var getWriteFileOptions = optsGenerator(writeFileDefaults);
    var appendFileDefaults = {
      encoding: 'utf8',
      mode: 438 /* DEFAULT */,
      flag: FLAGS[FLAGS.a],
    };
    var getAppendFileOpts = optsGenerator(appendFileDefaults);
    var getAppendFileOptsAndCb = optsAndCbGenerator(getAppendFileOpts);
    var realpathDefaults = optsDefaults;
    var getRealpathOptions = optsGenerator(realpathDefaults);
    var getRealpathOptsAndCb = optsAndCbGenerator(getRealpathOptions);
    var mkdirDefaults = {
      mode: 511 /* DIR */,
      recursive: false,
    };
    var getMkdirOptions = function(options) {
      if (typeof options === 'number') return fastExtend({}, mkdirDefaults, { mode: options });
      return fastExtend({}, mkdirDefaults, options);
    };
    var readdirDefaults = {
      encoding: 'utf8',
      withFileTypes: false,
    };
    var getReaddirOptions = optsGenerator(readdirDefaults);
    var getReaddirOptsAndCb = optsAndCbGenerator(getReaddirOptions);
    var statDefaults = {
      bigint: false,
    };
    var getStatOptions = function(options) {
      if (options === void 0) {
        options = {};
      }
      return fastExtend({}, statDefaults, options);
    };
    var getStatOptsAndCb = function(options, callback) {
      return typeof options === 'function'
        ? [getStatOptions(), options]
        : [getStatOptions(options), validateCallback(callback)];
    };
    // ---------------------------------------- Utility functions
    function getPathFromURLPosix(url) {
      if (url.hostname !== '') {
        throw new errors.TypeError('ERR_INVALID_FILE_URL_HOST', process_1.default.platform);
      }
      var pathname = url.pathname;
      for (var n = 0; n < pathname.length; n++) {
        if (pathname[n] === '%') {
          var third = pathname.codePointAt(n + 2) | 0x20;
          if (pathname[n + 1] === '2' && third === 102) {
            throw new errors.TypeError('ERR_INVALID_FILE_URL_PATH', 'must not include encoded / characters');
          }
        }
      }
      return decodeURIComponent(pathname);
    }
    function pathToFilename(path) {
      if (typeof path !== 'string' && !bufferEs6$1.Buffer.isBuffer(path)) {
        try {
          if (!(path instanceof url.URL)) throw new TypeError(ERRSTR.PATH_STR);
        } catch (err) {
          throw new TypeError(ERRSTR.PATH_STR);
        }
        path = getPathFromURLPosix(path);
      }
      var pathString = String(path);
      nullCheck(pathString);
      // return slash(pathString);
      return pathString;
    }
    exports.pathToFilename = pathToFilename;
    var resolve = function(filename, base) {
      if (base === void 0) {
        base = process_1.default.cwd();
      }
      return resolveCrossPlatform(base, filename);
    };
    if (isWin) {
      var _resolve_1 = resolve;
      var unixify_1 = correctPath_1.unixify;
      resolve = function(filename, base) {
        return unixify_1(_resolve_1(filename, base));
      };
    }
    function filenameToSteps(filename, base) {
      var fullPath = resolve(filename, base);
      var fullPathSansSlash = fullPath.substr(1);
      if (!fullPathSansSlash) return [];
      return fullPathSansSlash.split(sep);
    }
    exports.filenameToSteps = filenameToSteps;
    function pathToSteps(path) {
      return filenameToSteps(pathToFilename(path));
    }
    exports.pathToSteps = pathToSteps;
    function dataToStr(data, encoding$1) {
      if (encoding$1 === void 0) {
        encoding$1 = encoding.ENCODING_UTF8;
      }
      if (bufferEs6$1.Buffer.isBuffer(data)) return data.toString(encoding$1);
      else if (data instanceof Uint8Array) return bufferEs6$1.Buffer.from(data).toString(encoding$1);
      else return String(data);
    }
    exports.dataToStr = dataToStr;
    function dataToBuffer(data, encoding$1) {
      if (encoding$1 === void 0) {
        encoding$1 = encoding.ENCODING_UTF8;
      }
      if (bufferEs6$1.Buffer.isBuffer(data)) return data;
      else if (data instanceof Uint8Array) return bufferEs6$1.Buffer.from(data);
      else return bufferEs6$1.Buffer.from(String(data), encoding$1);
    }
    exports.dataToBuffer = dataToBuffer;
    function bufferToEncoding(buffer, encoding) {
      if (!encoding || encoding === 'buffer') return buffer;
      else return buffer.toString(encoding);
    }
    exports.bufferToEncoding = bufferToEncoding;
    function nullCheck(path, callback) {
      if (('' + path).indexOf('\u0000') !== -1) {
        var er = new Error('Path must be a string without null bytes');
        er.code = ENOENT;
        if (typeof callback !== 'function') throw er;
        process_1.default.nextTick(callback, er);
        return false;
      }
      return true;
    }
    function _modeToNumber(mode, def) {
      if (typeof mode === 'number') return mode;
      if (typeof mode === 'string') return parseInt(mode, 8);
      if (def) return modeToNumber(def);
      return undefined;
    }
    function modeToNumber(mode, def) {
      var result = _modeToNumber(mode, def);
      if (typeof result !== 'number' || isNaN(result)) throw new TypeError(ERRSTR.MODE_INT);
      return result;
    }
    function isFd(path) {
      return path >>> 0 === path;
    }
    function validateFd(fd) {
      if (!isFd(fd)) throw TypeError(ERRSTR.FD);
    }
    // converts Date or number to a fractional UNIX timestamp
    function toUnixTimestamp(time) {
      // tslint:disable-next-line triple-equals
      if (typeof time === 'string' && +time == time) {
        return +time;
      }
      if (time instanceof Date) {
        return time.getTime() / 1000;
      }
      if (isFinite(time)) {
        if (time < 0) {
          return Date.now() / 1000;
        }
        return time;
      }
      throw new Error('Cannot parse time: ' + time);
    }
    exports.toUnixTimestamp = toUnixTimestamp;
    /**
     * Returns optional argument and callback
     * @param arg Argument or callback value
     * @param callback Callback or undefined
     * @param def Default argument value
     */
    function getArgAndCb(arg, callback, def) {
      return typeof arg === 'function' ? [def, arg] : [arg, callback];
    }
    function validateUid(uid) {
      if (typeof uid !== 'number') throw TypeError(ERRSTR.UID);
    }
    function validateGid(gid) {
      if (typeof gid !== 'number') throw TypeError(ERRSTR.GID);
    }
    // ---------------------------------------- Volume
    var promisesWarn = !process_1.default.env.MEMFS_DONT_WARN;
    /**
     * `Volume` represents a file system.
     */
    var Volume = /** @class */ (function() {
      function Volume(props) {
        if (props === void 0) {
          props = {};
        }
        // I-node number counter.
        this.ino = 0;
        // A mapping for i-node numbers to i-nodes (`Node`);
        this.inodes = {};
        // List of released i-node numbers, for reuse.
        this.releasedInos = [];
        // A mapping for file descriptors to `File`s.
        this.fds = {};
        // A list of reusable (opened and closed) file descriptors, that should be
        // used first before creating a new file descriptor.
        this.releasedFds = [];
        // Max number of open files.
        this.maxFiles = 10000;
        // Current number of open files.
        this.openFiles = 0;
        this.promisesApi = promises.default(this);
        this.statWatchers = {};
        this.props = fastExtend({ Node: node.Node, Link: node.Link, File: node.File }, props);
        var root = this.createLink();
        root.setNode(this.createNode(true));
        var self = this; // tslint:disable-line no-this-assignment
        this.StatWatcher = /** @class */ (function(_super) {
          __extends(StatWatcher, _super);
          function StatWatcher() {
            return _super.call(this, self) || this;
          }
          return StatWatcher;
        })(StatWatcher);
        var _ReadStream = FsReadStream;
        this.ReadStream = /** @class */ (function(_super) {
          __extends(class_1, _super);
          function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return _super.apply(this, __spreadArrays([self], args)) || this;
          }
          return class_1;
        })(_ReadStream);
        var _WriteStream = FsWriteStream;
        this.WriteStream = /** @class */ (function(_super) {
          __extends(class_2, _super);
          function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return _super.apply(this, __spreadArrays([self], args)) || this;
          }
          return class_2;
        })(_WriteStream);
        this.FSWatcher = /** @class */ (function(_super) {
          __extends(FSWatcher, _super);
          function FSWatcher() {
            return _super.call(this, self) || this;
          }
          return FSWatcher;
        })(FSWatcher);
        // root.setChild('.', root);
        // root.getNode().nlink++;
        // root.setChild('..', root);
        // root.getNode().nlink++;
        this.root = root;
      }
      Volume.fromJSON = function(json, cwd) {
        var vol = new Volume();
        vol.fromJSON(json, cwd);
        return vol;
      };
      Object.defineProperty(Volume.prototype, 'promises', {
        get: function() {
          if (promisesWarn) {
            promisesWarn = false;
            process_1.default.emitWarning('The fs.promises API is experimental', 'ExperimentalWarning');
          }
          if (this.promisesApi === null) throw new Error('Promise is not supported in this environment.');
          return this.promisesApi;
        },
        enumerable: true,
        configurable: true,
      });
      Volume.prototype.createLink = function(parent, name, isDirectory, perm) {
        if (isDirectory === void 0) {
          isDirectory = false;
        }
        return parent ? parent.createChild(name, this.createNode(isDirectory, perm)) : new this.props.Link(this, null, '');
      };
      Volume.prototype.deleteLink = function(link) {
        var parent = link.parent;
        if (parent) {
          parent.deleteChild(link);
          link.vol = null;
          link.parent = null;
          return true;
        }
        return false;
      };
      Volume.prototype.newInoNumber = function() {
        if (this.releasedInos.length) return this.releasedInos.pop();
        else {
          this.ino = (this.ino + 1) % 0xffffffff;
          return this.ino;
        }
      };
      Volume.prototype.newFdNumber = function() {
        return this.releasedFds.length ? this.releasedFds.pop() : Volume.fd--;
      };
      Volume.prototype.createNode = function(isDirectory, perm) {
        if (isDirectory === void 0) {
          isDirectory = false;
        }
        var node = new this.props.Node(this.newInoNumber(), perm);
        if (isDirectory) node.setIsDirectory();
        this.inodes[node.ino] = node;
        return node;
      };
      Volume.prototype.getNode = function(ino) {
        return this.inodes[ino];
      };
      Volume.prototype.deleteNode = function(node) {
        node.del();
        delete this.inodes[node.ino];
        this.releasedInos.push(node.ino);
      };
      // Generates 6 character long random string, used by `mkdtemp`.
      Volume.prototype.genRndStr = function() {
        var str = (Math.random() + 1).toString(36).substr(2, 6);
        if (str.length === 6) return str;
        else return this.genRndStr();
      };
      // Returns a `Link` (hard link) referenced by path "split" into steps.
      Volume.prototype.getLink = function(steps) {
        return this.root.walk(steps);
      };
      // Just link `getLink`, but throws a correct user error, if link to found.
      Volume.prototype.getLinkOrThrow = function(filename, funcName) {
        var steps = filenameToSteps(filename);
        var link = this.getLink(steps);
        if (!link) throwError(ENOENT, funcName, filename);
        return link;
      };
      // Just like `getLink`, but also dereference/resolves symbolic links.
      Volume.prototype.getResolvedLink = function(filenameOrSteps) {
        var steps = typeof filenameOrSteps === 'string' ? filenameToSteps(filenameOrSteps) : filenameOrSteps;
        var link = this.root;
        var i = 0;
        while (i < steps.length) {
          var step = steps[i];
          link = link.getChild(step);
          if (!link) return null;
          var node = link.getNode();
          if (node.isSymlink()) {
            steps = node.symlink.concat(steps.slice(i + 1));
            link = this.root;
            i = 0;
            continue;
          }
          i++;
        }
        return link;
      };
      // Just like `getLinkOrThrow`, but also dereference/resolves symbolic links.
      Volume.prototype.getResolvedLinkOrThrow = function(filename, funcName) {
        var link = this.getResolvedLink(filename);
        if (!link) throwError(ENOENT, funcName, filename);
        return link;
      };
      Volume.prototype.resolveSymlinks = function(link) {
        // let node: Node = link.getNode();
        // while(link && node.isSymlink()) {
        //     link = this.getLink(node.symlink);
        //     if(!link) return null;
        //     node = link.getNode();
        // }
        // return link;
        return this.getResolvedLink(link.steps.slice(1));
      };
      // Just like `getLinkOrThrow`, but also verifies that the link is a directory.
      Volume.prototype.getLinkAsDirOrThrow = function(filename, funcName) {
        var link = this.getLinkOrThrow(filename, funcName);
        if (!link.getNode().isDirectory()) throwError(ENOTDIR, funcName, filename);
        return link;
      };
      // Get the immediate parent directory of the link.
      Volume.prototype.getLinkParent = function(steps) {
        return this.root.walk(steps, steps.length - 1);
      };
      Volume.prototype.getLinkParentAsDirOrThrow = function(filenameOrSteps, funcName) {
        var steps = filenameOrSteps instanceof Array ? filenameOrSteps : filenameToSteps(filenameOrSteps);
        var link = this.getLinkParent(steps);
        if (!link) throwError(ENOENT, funcName, sep + steps.join(sep));
        if (!link.getNode().isDirectory()) throwError(ENOTDIR, funcName, sep + steps.join(sep));
        return link;
      };
      Volume.prototype.getFileByFd = function(fd) {
        return this.fds[String(fd)];
      };
      Volume.prototype.getFileByFdOrThrow = function(fd, funcName) {
        if (!isFd(fd)) throw TypeError(ERRSTR.FD);
        var file = this.getFileByFd(fd);
        if (!file) throwError(EBADF, funcName);
        return file;
      };
      Volume.prototype.getNodeByIdOrCreate = function(id, flags, perm) {
        if (typeof id === 'number') {
          var file = this.getFileByFd(id);
          if (!file) throw Error('File nto found');
          return file.node;
        } else {
          var steps = pathToSteps(id);
          var link = this.getLink(steps);
          if (link) return link.getNode();
          // Try creating a node if not found.
          if (flags & O_CREAT) {
            var dirLink = this.getLinkParent(steps);
            if (dirLink) {
              var name_1 = steps[steps.length - 1];
              link = this.createLink(dirLink, name_1, false, perm);
              return link.getNode();
            }
          }
          throwError(ENOENT, 'getNodeByIdOrCreate', pathToFilename(id));
        }
      };
      Volume.prototype.wrapAsync = function(method, args, callback) {
        var _this = this;
        validateCallback(callback);
        setImmediate_1.default(function() {
          try {
            callback(null, method.apply(_this, args));
          } catch (err) {
            callback(err);
          }
        });
      };
      Volume.prototype._toJSON = function(link, json, path) {
        if (link === void 0) {
          link = this.root;
        }
        if (json === void 0) {
          json = {};
        }
        var isEmpty = true;
        for (var name_2 in link.children) {
          isEmpty = false;
          var child = link.getChild(name_2);
          var node = child.getNode();
          if (node.isFile()) {
            var filename = child.getPath();
            if (path) filename = relative(path, filename);
            json[filename] = node.getString();
          } else if (node.isDirectory()) {
            this._toJSON(child, json, path);
          }
        }
        var dirPath = link.getPath();
        if (path) dirPath = relative(path, dirPath);
        if (dirPath && isEmpty) {
          json[dirPath] = null;
        }
        return json;
      };
      Volume.prototype.toJSON = function(paths, json, isRelative) {
        if (json === void 0) {
          json = {};
        }
        if (isRelative === void 0) {
          isRelative = false;
        }
        var links = [];
        if (paths) {
          if (!(paths instanceof Array)) paths = [paths];
          for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var path = paths_1[_i];
            var filename = pathToFilename(path);
            var link = this.getResolvedLink(filename);
            if (!link) continue;
            links.push(link);
          }
        } else {
          links.push(this.root);
        }
        if (!links.length) return json;
        for (var _a = 0, links_1 = links; _a < links_1.length; _a++) {
          var link = links_1[_a];
          this._toJSON(link, json, isRelative ? link.getPath() : '');
        }
        return json;
      };
      // fromJSON(json: {[filename: string]: string}, cwd: string = '/') {
      Volume.prototype.fromJSON = function(json, cwd) {
        if (cwd === void 0) {
          cwd = process_1.default.cwd();
        }
        for (var filename in json) {
          var data = json[filename];
          if (typeof data === 'string') {
            filename = resolve(filename, cwd);
            var steps = filenameToSteps(filename);
            if (steps.length > 1) {
              var dirname = sep + steps.slice(0, steps.length - 1).join(sep);
              this.mkdirpBase(dirname, 511 /* DIR */);
            }
            this.writeFileSync(filename, data);
          } else {
            this.mkdirpBase(filename, 511 /* DIR */);
          }
        }
      };
      Volume.prototype.reset = function() {
        this.ino = 0;
        this.inodes = {};
        this.releasedInos = [];
        this.fds = {};
        this.releasedFds = [];
        this.openFiles = 0;
        this.root = this.createLink();
        this.root.setNode(this.createNode(true));
      };
      // Legacy interface
      Volume.prototype.mountSync = function(mountpoint, json) {
        this.fromJSON(json, mountpoint);
      };
      Volume.prototype.openLink = function(link, flagsNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) {
          resolveSymlinks = true;
        }
        if (this.openFiles >= this.maxFiles) {
          // Too many open files.
          throw createError(EMFILE, 'open', link.getPath());
        }
        // Resolve symlinks.
        var realLink = link;
        if (resolveSymlinks) realLink = this.resolveSymlinks(link);
        if (!realLink) throwError(ENOENT, 'open', link.getPath());
        var node = realLink.getNode();
        if (node.isDirectory()) {
          var isRead = flagsNum === FLAGS.r;
          var isDir = (flagsNum & constants.constants.O_DIRECTORY) !== 0;
          if (!isRead && !isDir) {
            throwError(EISDIR, 'open', link.getPath());
          }
        }
        // Check node permissions
        if (!(flagsNum & O_WRONLY)) {
          if (!node.canRead()) {
            throwError(EACCES, 'open', link.getPath());
          }
        }
        var file = new this.props.File(link, node, flagsNum, this.newFdNumber());
        this.fds[file.fd] = file;
        this.openFiles++;
        if (flagsNum & O_TRUNC) file.truncate();
        return file;
      };
      Volume.prototype.openFile = function(filename, flagsNum, modeNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) {
          resolveSymlinks = true;
        }
        var steps = filenameToSteps(filename);
        var link = resolveSymlinks ? this.getResolvedLink(steps) : this.getLink(steps);
        // Try creating a new file, if it does not exist.
        if (!link && flagsNum & O_CREAT) {
          // const dirLink: Link = this.getLinkParent(steps);
          var dirLink = this.getResolvedLink(steps.slice(0, steps.length - 1));
          // if(!dirLink) throwError(ENOENT, 'open', filename);
          if (!dirLink) throwError(ENOENT, 'open', sep + steps.join(sep));
          if (flagsNum & O_CREAT && typeof modeNum === 'number') {
            link = this.createLink(dirLink, steps[steps.length - 1], false, modeNum);
          }
        }
        if (link) return this.openLink(link, flagsNum, resolveSymlinks);
        throwError(ENOENT, 'open', filename);
      };
      Volume.prototype.openBase = function(filename, flagsNum, modeNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) {
          resolveSymlinks = true;
        }
        var file = this.openFile(filename, flagsNum, modeNum, resolveSymlinks);
        if (!file) throwError(ENOENT, 'open', filename);
        return file.fd;
      };
      Volume.prototype.openSync = function(path, flags, mode) {
        if (mode === void 0) {
          mode = 438 /* DEFAULT */;
        }
        // Validate (1) mode; (2) path; (3) flags - in that order.
        var modeNum = modeToNumber(mode);
        var fileName = pathToFilename(path);
        var flagsNum = flagsToNumber(flags);
        return this.openBase(fileName, flagsNum, modeNum);
      };
      Volume.prototype.open = function(path, flags, a, b) {
        var mode = a;
        var callback = b;
        if (typeof a === 'function') {
          mode = 438 /* DEFAULT */;
          callback = a;
        }
        mode = mode || 438 /* DEFAULT */;
        var modeNum = modeToNumber(mode);
        var fileName = pathToFilename(path);
        var flagsNum = flagsToNumber(flags);
        this.wrapAsync(this.openBase, [fileName, flagsNum, modeNum], callback);
      };
      Volume.prototype.closeFile = function(file) {
        if (!this.fds[file.fd]) return;
        this.openFiles--;
        delete this.fds[file.fd];
        this.releasedFds.push(file.fd);
      };
      Volume.prototype.closeSync = function(fd) {
        validateFd(fd);
        var file = this.getFileByFdOrThrow(fd, 'close');
        this.closeFile(file);
      };
      Volume.prototype.close = function(fd, callback) {
        validateFd(fd);
        this.wrapAsync(this.closeSync, [fd], callback);
      };
      Volume.prototype.openFileOrGetById = function(id, flagsNum, modeNum) {
        if (typeof id === 'number') {
          var file = this.fds[id];
          if (!file) throw createError(ENOENT);
          return file;
        } else {
          return this.openFile(pathToFilename(id), flagsNum, modeNum);
        }
      };
      Volume.prototype.readBase = function(fd, buffer, offset, length, position) {
        var file = this.getFileByFdOrThrow(fd);
        return file.read(buffer, Number(offset), Number(length), position);
      };
      Volume.prototype.readSync = function(fd, buffer, offset, length, position) {
        validateFd(fd);
        return this.readBase(fd, buffer, offset, length, position);
      };
      Volume.prototype.read = function(fd, buffer, offset, length, position, callback) {
        var _this = this;
        validateCallback(callback);
        // This `if` branch is from Node.js
        if (length === 0) {
          return process_1.default.nextTick(function() {
            if (callback) callback(null, 0, buffer);
          });
        }
        setImmediate_1.default(function() {
          try {
            var bytes = _this.readBase(fd, buffer, offset, length, position);
            callback(null, bytes, buffer);
          } catch (err) {
            callback(err);
          }
        });
      };
      Volume.prototype.readFileBase = function(id, flagsNum, encoding) {
        var result;
        var isUserFd = typeof id === 'number';
        var userOwnsFd = isUserFd && isFd(id);
        var fd;
        if (userOwnsFd) fd = id;
        else {
          var filename = pathToFilename(id);
          var steps = filenameToSteps(filename);
          var link = this.getResolvedLink(steps);
          if (link) {
            var node = link.getNode();
            if (node.isDirectory()) throwError(EISDIR, 'open', link.getPath());
          }
          fd = this.openSync(id, flagsNum);
        }
        try {
          result = bufferToEncoding(this.getFileByFdOrThrow(fd).getBuffer(), encoding);
        } finally {
          if (!userOwnsFd) {
            this.closeSync(fd);
          }
        }
        return result;
      };
      Volume.prototype.readFileSync = function(file, options) {
        var opts = getReadFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        return this.readFileBase(file, flagsNum, opts.encoding);
      };
      Volume.prototype.readFile = function(id, a, b) {
        var _a = optsAndCbGenerator(getReadFileOptions)(a, b),
          opts = _a[0],
          callback = _a[1];
        var flagsNum = flagsToNumber(opts.flag);
        this.wrapAsync(this.readFileBase, [id, flagsNum, opts.encoding], callback);
      };
      Volume.prototype.writeBase = function(fd, buf, offset, length, position) {
        var file = this.getFileByFdOrThrow(fd, 'write');
        return file.write(buf, offset, length, position);
      };
      Volume.prototype.writeSync = function(fd, a, b, c, d) {
        validateFd(fd);
        var encoding;
        var offset;
        var length;
        var position;
        var isBuffer = typeof a !== 'string';
        if (isBuffer) {
          offset = b | 0;
          length = c;
          position = d;
        } else {
          position = b;
          encoding = c;
        }
        var buf = dataToBuffer(a, encoding);
        if (isBuffer) {
          if (typeof length === 'undefined') {
            length = buf.length;
          }
        } else {
          offset = 0;
          length = buf.length;
        }
        return this.writeBase(fd, buf, offset, length, position);
      };
      Volume.prototype.write = function(fd, a, b, c, d, e) {
        var _this = this;
        validateFd(fd);
        var offset;
        var length;
        var position;
        var encoding;
        var callback;
        var tipa = typeof a;
        var tipb = typeof b;
        var tipc = typeof c;
        var tipd = typeof d;
        if (tipa !== 'string') {
          if (tipb === 'function') {
            callback = b;
          } else if (tipc === 'function') {
            offset = b | 0;
            callback = c;
          } else if (tipd === 'function') {
            offset = b | 0;
            length = c;
            callback = d;
          } else {
            offset = b | 0;
            length = c;
            position = d;
            callback = e;
          }
        } else {
          if (tipb === 'function') {
            callback = b;
          } else if (tipc === 'function') {
            position = b;
            callback = c;
          } else if (tipd === 'function') {
            position = b;
            encoding = c;
            callback = d;
          }
        }
        var buf = dataToBuffer(a, encoding);
        if (tipa !== 'string') {
          if (typeof length === 'undefined') length = buf.length;
        } else {
          offset = 0;
          length = buf.length;
        }
        validateCallback(callback);
        setImmediate_1.default(function() {
          try {
            var bytes = _this.writeBase(fd, buf, offset, length, position);
            if (tipa !== 'string') {
              callback(null, bytes, buf);
            } else {
              callback(null, bytes, a);
            }
          } catch (err) {
            callback(err);
          }
        });
      };
      Volume.prototype.writeFileBase = function(id, buf, flagsNum, modeNum) {
        // console.log('writeFileBase', id, buf, flagsNum, modeNum);
        // const node = this.getNodeByIdOrCreate(id, flagsNum, modeNum);
        // node.setBuffer(buf);
        var isUserFd = typeof id === 'number';
        var fd;
        if (isUserFd) fd = id;
        else {
          fd = this.openBase(pathToFilename(id), flagsNum, modeNum);
          // fd = this.openSync(id as TFilePath, flagsNum, modeNum);
        }
        var offset = 0;
        var length = buf.length;
        var position = flagsNum & O_APPEND ? null : 0;
        try {
          while (length > 0) {
            var written = this.writeSync(fd, buf, offset, length, position);
            offset += written;
            length -= written;
            if (position !== null) position += written;
          }
        } finally {
          if (!isUserFd) this.closeSync(fd);
        }
      };
      Volume.prototype.writeFileSync = function(id, data, options) {
        var opts = getWriteFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        var modeNum = modeToNumber(opts.mode);
        var buf = dataToBuffer(data, opts.encoding);
        this.writeFileBase(id, buf, flagsNum, modeNum);
      };
      Volume.prototype.writeFile = function(id, data, a, b) {
        var options = a;
        var callback = b;
        if (typeof a === 'function') {
          options = writeFileDefaults;
          callback = a;
        }
        var opts = getWriteFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        var modeNum = modeToNumber(opts.mode);
        var buf = dataToBuffer(data, opts.encoding);
        this.wrapAsync(this.writeFileBase, [id, buf, flagsNum, modeNum], callback);
      };
      Volume.prototype.linkBase = function(filename1, filename2) {
        var steps1 = filenameToSteps(filename1);
        var link1 = this.getLink(steps1);
        if (!link1) throwError(ENOENT, 'link', filename1, filename2);
        var steps2 = filenameToSteps(filename2);
        // Check new link directory exists.
        var dir2 = this.getLinkParent(steps2);
        if (!dir2) throwError(ENOENT, 'link', filename1, filename2);
        var name = steps2[steps2.length - 1];
        // Check if new file already exists.
        if (dir2.getChild(name)) throwError(EEXIST, 'link', filename1, filename2);
        var node = link1.getNode();
        node.nlink++;
        dir2.createChild(name, node);
      };
      Volume.prototype.copyFileBase = function(src, dest, flags) {
        var buf = this.readFileSync(src);
        if (flags & COPYFILE_EXCL) {
          if (this.existsSync(dest)) {
            throwError(EEXIST, 'copyFile', src, dest);
          }
        }
        if (flags & COPYFILE_FICLONE_FORCE) {
          throwError(ENOSYS, 'copyFile', src, dest);
        }
        this.writeFileBase(dest, buf, FLAGS.w, 438 /* DEFAULT */);
      };
      Volume.prototype.copyFileSync = function(src, dest, flags) {
        var srcFilename = pathToFilename(src);
        var destFilename = pathToFilename(dest);
        return this.copyFileBase(srcFilename, destFilename, flags | 0);
      };
      Volume.prototype.copyFile = function(src, dest, a, b) {
        var srcFilename = pathToFilename(src);
        var destFilename = pathToFilename(dest);
        var flags;
        var callback;
        if (typeof a === 'function') {
          flags = 0;
          callback = a;
        } else {
          flags = a;
          callback = b;
        }
        validateCallback(callback);
        this.wrapAsync(this.copyFileBase, [srcFilename, destFilename, flags], callback);
      };
      Volume.prototype.linkSync = function(existingPath, newPath) {
        var existingPathFilename = pathToFilename(existingPath);
        var newPathFilename = pathToFilename(newPath);
        this.linkBase(existingPathFilename, newPathFilename);
      };
      Volume.prototype.link = function(existingPath, newPath, callback) {
        var existingPathFilename = pathToFilename(existingPath);
        var newPathFilename = pathToFilename(newPath);
        this.wrapAsync(this.linkBase, [existingPathFilename, newPathFilename], callback);
      };
      Volume.prototype.unlinkBase = function(filename) {
        var steps = filenameToSteps(filename);
        var link = this.getLink(steps);
        if (!link) throwError(ENOENT, 'unlink', filename);
        // TODO: Check if it is file, dir, other...
        if (link.length) throw Error('Dir not empty...');
        this.deleteLink(link);
        var node = link.getNode();
        node.nlink--;
        // When all hard links to i-node are deleted, remove the i-node, too.
        if (node.nlink <= 0) {
          this.deleteNode(node);
        }
      };
      Volume.prototype.unlinkSync = function(path) {
        var filename = pathToFilename(path);
        this.unlinkBase(filename);
      };
      Volume.prototype.unlink = function(path, callback) {
        var filename = pathToFilename(path);
        this.wrapAsync(this.unlinkBase, [filename], callback);
      };
      Volume.prototype.symlinkBase = function(targetFilename, pathFilename) {
        var pathSteps = filenameToSteps(pathFilename);
        // Check if directory exists, where we about to create a symlink.
        var dirLink = this.getLinkParent(pathSteps);
        if (!dirLink) throwError(ENOENT, 'symlink', targetFilename, pathFilename);
        var name = pathSteps[pathSteps.length - 1];
        // Check if new file already exists.
        if (dirLink.getChild(name)) throwError(EEXIST, 'symlink', targetFilename, pathFilename);
        // Create symlink.
        var symlink = dirLink.createChild(name);
        symlink.getNode().makeSymlink(filenameToSteps(targetFilename));
        return symlink;
      };
      // `type` argument works only on Windows.
      Volume.prototype.symlinkSync = function(target, path, type) {
        var targetFilename = pathToFilename(target);
        var pathFilename = pathToFilename(path);
        this.symlinkBase(targetFilename, pathFilename);
      };
      Volume.prototype.symlink = function(target, path, a, b) {
        var _a = getArgAndCb(a, b),
          callback = _a[1];
        var targetFilename = pathToFilename(target);
        var pathFilename = pathToFilename(path);
        this.wrapAsync(this.symlinkBase, [targetFilename, pathFilename], callback);
      };
      Volume.prototype.realpathBase = function(filename, encoding$1) {
        var steps = filenameToSteps(filename);
        var link = this.getLink(steps);
        // TODO: this check has to be perfomed by `lstat`.
        if (!link) throwError(ENOENT, 'realpath', filename);
        // Resolve symlinks.
        var realLink = this.resolveSymlinks(link);
        if (!realLink) throwError(ENOENT, 'realpath', filename);
        return encoding.strToEncoding(realLink.getPath(), encoding$1);
      };
      Volume.prototype.realpathSync = function(path, options) {
        return this.realpathBase(pathToFilename(path), getRealpathOptions(options).encoding);
      };
      Volume.prototype.realpath = function(path, a, b) {
        var _a = getRealpathOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        var pathFilename = pathToFilename(path);
        this.wrapAsync(this.realpathBase, [pathFilename, opts.encoding], callback);
      };
      Volume.prototype.lstatBase = function(filename, bigint) {
        if (bigint === void 0) {
          bigint = false;
        }
        var link = this.getLink(filenameToSteps(filename));
        if (!link) throwError(ENOENT, 'lstat', filename);
        return Stats_1.default.build(link.getNode(), bigint);
      };
      Volume.prototype.lstatSync = function(path, options) {
        return this.lstatBase(pathToFilename(path), getStatOptions(options).bigint);
      };
      Volume.prototype.lstat = function(path, a, b) {
        var _a = getStatOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        this.wrapAsync(this.lstatBase, [pathToFilename(path), opts.bigint], callback);
      };
      Volume.prototype.statBase = function(filename, bigint) {
        if (bigint === void 0) {
          bigint = false;
        }
        var link = this.getLink(filenameToSteps(filename));
        if (!link) throwError(ENOENT, 'stat', filename);
        // Resolve symlinks.
        link = this.resolveSymlinks(link);
        if (!link) throwError(ENOENT, 'stat', filename);
        return Stats_1.default.build(link.getNode(), bigint);
      };
      Volume.prototype.statSync = function(path, options) {
        return this.statBase(pathToFilename(path), getStatOptions(options).bigint);
      };
      Volume.prototype.stat = function(path, a, b) {
        var _a = getStatOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        this.wrapAsync(this.statBase, [pathToFilename(path), opts.bigint], callback);
      };
      Volume.prototype.fstatBase = function(fd, bigint) {
        if (bigint === void 0) {
          bigint = false;
        }
        var file = this.getFileByFd(fd);
        if (!file) throwError(EBADF, 'fstat');
        return Stats_1.default.build(file.node, bigint);
      };
      Volume.prototype.fstatSync = function(fd, options) {
        return this.fstatBase(fd, getStatOptions(options).bigint);
      };
      Volume.prototype.fstat = function(fd, a, b) {
        var _a = getStatOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        this.wrapAsync(this.fstatBase, [fd, opts.bigint], callback);
      };
      Volume.prototype.renameBase = function(oldPathFilename, newPathFilename) {
        var link = this.getLink(filenameToSteps(oldPathFilename));
        if (!link) throwError(ENOENT, 'rename', oldPathFilename, newPathFilename);
        // TODO: Check if it is directory, if non-empty, we cannot move it, right?
        var newPathSteps = filenameToSteps(newPathFilename);
        // Check directory exists for the new location.
        var newPathDirLink = this.getLinkParent(newPathSteps);
        if (!newPathDirLink) throwError(ENOENT, 'rename', oldPathFilename, newPathFilename);
        // TODO: Also treat cases with directories and symbolic links.
        // TODO: See: http://man7.org/linux/man-pages/man2/rename.2.html
        // Remove hard link from old folder.
        var oldLinkParent = link.parent;
        if (oldLinkParent) {
          oldLinkParent.deleteChild(link);
        }
        // Rename should overwrite the new path, if that exists.
        var name = newPathSteps[newPathSteps.length - 1];
        link.steps = __spreadArrays(newPathDirLink.steps, [name]);
        newPathDirLink.setChild(link.getName(), link);
      };
      Volume.prototype.renameSync = function(oldPath, newPath) {
        var oldPathFilename = pathToFilename(oldPath);
        var newPathFilename = pathToFilename(newPath);
        this.renameBase(oldPathFilename, newPathFilename);
      };
      Volume.prototype.rename = function(oldPath, newPath, callback) {
        var oldPathFilename = pathToFilename(oldPath);
        var newPathFilename = pathToFilename(newPath);
        this.wrapAsync(this.renameBase, [oldPathFilename, newPathFilename], callback);
      };
      Volume.prototype.existsBase = function(filename) {
        return !!this.statBase(filename);
      };
      Volume.prototype.existsSync = function(path) {
        try {
          return this.existsBase(pathToFilename(path));
        } catch (err) {
          return false;
        }
      };
      Volume.prototype.exists = function(path, callback) {
        var _this = this;
        var filename = pathToFilename(path);
        if (typeof callback !== 'function') throw Error(ERRSTR.CB);
        setImmediate_1.default(function() {
          try {
            callback(_this.existsBase(filename));
          } catch (err) {
            callback(false);
          }
        });
      };
      Volume.prototype.accessBase = function(filename, mode) {
        var link = this.getLinkOrThrow(filename, 'access');
        // TODO: Verify permissions
      };
      Volume.prototype.accessSync = function(path, mode) {
        if (mode === void 0) {
          mode = F_OK;
        }
        var filename = pathToFilename(path);
        mode = mode | 0;
        this.accessBase(filename, mode);
      };
      Volume.prototype.access = function(path, a, b) {
        var mode = a;
        var callback = b;
        if (typeof mode === 'function') {
          mode = F_OK;
          callback = a;
        }
        var filename = pathToFilename(path);
        mode = mode | 0;
        this.wrapAsync(this.accessBase, [filename, mode], callback);
      };
      Volume.prototype.appendFileSync = function(id, data, options) {
        if (options === void 0) {
          options = appendFileDefaults;
        }
        var opts = getAppendFileOpts(options);
        // force append behavior when using a supplied file descriptor
        if (!opts.flag || isFd(id)) opts.flag = 'a';
        this.writeFileSync(id, data, opts);
      };
      Volume.prototype.appendFile = function(id, data, a, b) {
        var _a = getAppendFileOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        // force append behavior when using a supplied file descriptor
        if (!opts.flag || isFd(id)) opts.flag = 'a';
        this.writeFile(id, data, opts, callback);
      };
      Volume.prototype.readdirBase = function(filename, options) {
        var steps = filenameToSteps(filename);
        var link = this.getResolvedLink(steps);
        if (!link) throwError(ENOENT, 'readdir', filename);
        var node = link.getNode();
        if (!node.isDirectory()) throwError(ENOTDIR, 'scandir', filename);
        if (options.withFileTypes) {
          var list_1 = [];
          for (var name_3 in link.children) {
            list_1.push(Dirent_1.default.build(link.children[name_3], options.encoding));
          }
          if (!isWin && options.encoding !== 'buffer')
            list_1.sort(function(a, b) {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            });
          return list_1;
        }
        var list = [];
        for (var name_4 in link.children) {
          list.push(encoding.strToEncoding(name_4, options.encoding));
        }
        if (!isWin && options.encoding !== 'buffer') list.sort();
        return list;
      };
      Volume.prototype.readdirSync = function(path, options) {
        var opts = getReaddirOptions(options);
        var filename = pathToFilename(path);
        return this.readdirBase(filename, opts);
      };
      Volume.prototype.readdir = function(path, a, b) {
        var _a = getReaddirOptsAndCb(a, b),
          options = _a[0],
          callback = _a[1];
        var filename = pathToFilename(path);
        this.wrapAsync(this.readdirBase, [filename, options], callback);
      };
      Volume.prototype.readlinkBase = function(filename, encoding$1) {
        var link = this.getLinkOrThrow(filename, 'readlink');
        var node = link.getNode();
        if (!node.isSymlink()) throwError(EINVAL, 'readlink', filename);
        var str = sep + node.symlink.join(sep);
        return encoding.strToEncoding(str, encoding$1);
      };
      Volume.prototype.readlinkSync = function(path, options) {
        var opts = getDefaultOpts(options);
        var filename = pathToFilename(path);
        return this.readlinkBase(filename, opts.encoding);
      };
      Volume.prototype.readlink = function(path, a, b) {
        var _a = getDefaultOptsAndCb(a, b),
          opts = _a[0],
          callback = _a[1];
        var filename = pathToFilename(path);
        this.wrapAsync(this.readlinkBase, [filename, opts.encoding], callback);
      };
      Volume.prototype.fsyncBase = function(fd) {
        this.getFileByFdOrThrow(fd, 'fsync');
      };
      Volume.prototype.fsyncSync = function(fd) {
        this.fsyncBase(fd);
      };
      Volume.prototype.fsync = function(fd, callback) {
        this.wrapAsync(this.fsyncBase, [fd], callback);
      };
      Volume.prototype.fdatasyncBase = function(fd) {
        this.getFileByFdOrThrow(fd, 'fdatasync');
      };
      Volume.prototype.fdatasyncSync = function(fd) {
        this.fdatasyncBase(fd);
      };
      Volume.prototype.fdatasync = function(fd, callback) {
        this.wrapAsync(this.fdatasyncBase, [fd], callback);
      };
      Volume.prototype.ftruncateBase = function(fd, len) {
        var file = this.getFileByFdOrThrow(fd, 'ftruncate');
        file.truncate(len);
      };
      Volume.prototype.ftruncateSync = function(fd, len) {
        this.ftruncateBase(fd, len);
      };
      Volume.prototype.ftruncate = function(fd, a, b) {
        var _a = getArgAndCb(a, b),
          len = _a[0],
          callback = _a[1];
        this.wrapAsync(this.ftruncateBase, [fd, len], callback);
      };
      Volume.prototype.truncateBase = function(path, len) {
        var fd = this.openSync(path, 'r+');
        try {
          this.ftruncateSync(fd, len);
        } finally {
          this.closeSync(fd);
        }
      };
      Volume.prototype.truncateSync = function(id, len) {
        if (isFd(id)) return this.ftruncateSync(id, len);
        this.truncateBase(id, len);
      };
      Volume.prototype.truncate = function(id, a, b) {
        if (isFd(id)) return this.ftruncate(id, a, b);
        var _a = getArgAndCb(a, b, 0),
          len = _a[0],
          callback = _a[1];
        this.wrapAsync(this.truncateBase, [id, len], callback);
      };
      Volume.prototype.futimesBase = function(fd, atime, mtime) {
        var file = this.getFileByFdOrThrow(fd, 'futimes');
        var node = file.node;
        node.atime = new Date(atime * 1000);
        node.mtime = new Date(mtime * 1000);
      };
      Volume.prototype.futimesSync = function(fd, atime, mtime) {
        this.futimesBase(fd, toUnixTimestamp(atime), toUnixTimestamp(mtime));
      };
      Volume.prototype.futimes = function(fd, atime, mtime, callback) {
        this.wrapAsync(this.futimesBase, [fd, toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
      };
      Volume.prototype.utimesBase = function(filename, atime, mtime) {
        var fd = this.openSync(filename, 'r+');
        try {
          this.futimesBase(fd, atime, mtime);
        } finally {
          this.closeSync(fd);
        }
      };
      Volume.prototype.utimesSync = function(path, atime, mtime) {
        this.utimesBase(pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime));
      };
      Volume.prototype.utimes = function(path, atime, mtime, callback) {
        this.wrapAsync(this.utimesBase, [pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
      };
      Volume.prototype.mkdirBase = function(filename, modeNum) {
        var steps = filenameToSteps(filename);
        // This will throw if user tries to create root dir `fs.mkdirSync('/')`.
        if (!steps.length) {
          throwError(EISDIR, 'mkdir', filename);
        }
        var dir = this.getLinkParentAsDirOrThrow(filename, 'mkdir');
        // Check path already exists.
        var name = steps[steps.length - 1];
        if (dir.getChild(name)) throwError(EEXIST, 'mkdir', filename);
        dir.createChild(name, this.createNode(true, modeNum));
      };
      /**
       * Creates directory tree recursively.
       * @param filename
       * @param modeNum
       */
      Volume.prototype.mkdirpBase = function(filename, modeNum) {
        var steps = filenameToSteps(filename);
        var link = this.root;
        for (var i = 0; i < steps.length; i++) {
          var step = steps[i];
          if (!link.getNode().isDirectory()) throwError(ENOTDIR, 'mkdir', link.getPath());
          var child = link.getChild(step);
          if (child) {
            if (child.getNode().isDirectory()) link = child;
            else throwError(ENOTDIR, 'mkdir', child.getPath());
          } else {
            link = link.createChild(step, this.createNode(true, modeNum));
          }
        }
      };
      Volume.prototype.mkdirSync = function(path, options) {
        var opts = getMkdirOptions(options);
        var modeNum = modeToNumber(opts.mode, 511);
        var filename = pathToFilename(path);
        if (opts.recursive) this.mkdirpBase(filename, modeNum);
        else this.mkdirBase(filename, modeNum);
      };
      Volume.prototype.mkdir = function(path, a, b) {
        var _a = getArgAndCb(a, b),
          options = _a[0],
          callback = _a[1];
        var opts = getMkdirOptions(options);
        var modeNum = modeToNumber(opts.mode, 511);
        var filename = pathToFilename(path);
        if (opts.recursive) this.wrapAsync(this.mkdirpBase, [filename, modeNum], callback);
        else this.wrapAsync(this.mkdirBase, [filename, modeNum], callback);
      };
      // legacy interface
      Volume.prototype.mkdirpSync = function(path, mode) {
        this.mkdirSync(path, { mode: mode, recursive: true });
      };
      Volume.prototype.mkdirp = function(path, a, b) {
        var _a = getArgAndCb(a, b),
          mode = _a[0],
          callback = _a[1];
        this.mkdir(path, { mode: mode, recursive: true }, callback);
      };
      Volume.prototype.mkdtempBase = function(prefix, encoding$1, retry) {
        if (retry === void 0) {
          retry = 5;
        }
        var filename = prefix + this.genRndStr();
        try {
          this.mkdirBase(filename, 511 /* DIR */);
          return encoding.strToEncoding(filename, encoding$1);
        } catch (err) {
          if (err.code === EEXIST) {
            if (retry > 1) this.mkdtempBase(prefix, encoding$1, retry - 1);
            else throw Error('Could not create temp dir.');
          } else throw err;
        }
      };
      Volume.prototype.mkdtempSync = function(prefix, options) {
        var encoding = getDefaultOpts(options).encoding;
        if (!prefix || typeof prefix !== 'string') throw new TypeError('filename prefix is required');
        if (!nullCheck(prefix)) return;
        return this.mkdtempBase(prefix, encoding);
      };
      Volume.prototype.mkdtemp = function(prefix, a, b) {
        var _a = getDefaultOptsAndCb(a, b),
          encoding = _a[0].encoding,
          callback = _a[1];
        if (!prefix || typeof prefix !== 'string') throw new TypeError('filename prefix is required');
        if (!nullCheck(prefix)) return;
        this.wrapAsync(this.mkdtempBase, [prefix, encoding], callback);
      };
      Volume.prototype.rmdirBase = function(filename) {
        var link = this.getLinkAsDirOrThrow(filename, 'rmdir');
        // Check directory is empty.
        if (link.length) throwError(ENOTEMPTY, 'rmdir', filename);
        this.deleteLink(link);
      };
      Volume.prototype.rmdirSync = function(path) {
        this.rmdirBase(pathToFilename(path));
      };
      Volume.prototype.rmdir = function(path, callback) {
        this.wrapAsync(this.rmdirBase, [pathToFilename(path)], callback);
      };
      Volume.prototype.fchmodBase = function(fd, modeNum) {
        var file = this.getFileByFdOrThrow(fd, 'fchmod');
        file.chmod(modeNum);
      };
      Volume.prototype.fchmodSync = function(fd, mode) {
        this.fchmodBase(fd, modeToNumber(mode));
      };
      Volume.prototype.fchmod = function(fd, mode, callback) {
        this.wrapAsync(this.fchmodBase, [fd, modeToNumber(mode)], callback);
      };
      Volume.prototype.chmodBase = function(filename, modeNum) {
        var fd = this.openSync(filename, 'r+');
        try {
          this.fchmodBase(fd, modeNum);
        } finally {
          this.closeSync(fd);
        }
      };
      Volume.prototype.chmodSync = function(path, mode) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.chmodBase(filename, modeNum);
      };
      Volume.prototype.chmod = function(path, mode, callback) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.wrapAsync(this.chmodBase, [filename, modeNum], callback);
      };
      Volume.prototype.lchmodBase = function(filename, modeNum) {
        var fd = this.openBase(filename, O_RDWR, 0, false);
        try {
          this.fchmodBase(fd, modeNum);
        } finally {
          this.closeSync(fd);
        }
      };
      Volume.prototype.lchmodSync = function(path, mode) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.lchmodBase(filename, modeNum);
      };
      Volume.prototype.lchmod = function(path, mode, callback) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.wrapAsync(this.lchmodBase, [filename, modeNum], callback);
      };
      Volume.prototype.fchownBase = function(fd, uid, gid) {
        this.getFileByFdOrThrow(fd, 'fchown').chown(uid, gid);
      };
      Volume.prototype.fchownSync = function(fd, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.fchownBase(fd, uid, gid);
      };
      Volume.prototype.fchown = function(fd, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.fchownBase, [fd, uid, gid], callback);
      };
      Volume.prototype.chownBase = function(filename, uid, gid) {
        var link = this.getResolvedLinkOrThrow(filename, 'chown');
        var node = link.getNode();
        node.chown(uid, gid);
        // if(node.isFile() || node.isSymlink()) {
        //
        // } else if(node.isDirectory()) {
        //
        // } else {
        // TODO: What do we do here?
        // }
      };
      Volume.prototype.chownSync = function(path, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.chownBase(pathToFilename(path), uid, gid);
      };
      Volume.prototype.chown = function(path, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.chownBase, [pathToFilename(path), uid, gid], callback);
      };
      Volume.prototype.lchownBase = function(filename, uid, gid) {
        this.getLinkOrThrow(filename, 'lchown')
          .getNode()
          .chown(uid, gid);
      };
      Volume.prototype.lchownSync = function(path, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.lchownBase(pathToFilename(path), uid, gid);
      };
      Volume.prototype.lchown = function(path, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.lchownBase, [pathToFilename(path), uid, gid], callback);
      };
      Volume.prototype.watchFile = function(path, a, b) {
        var filename = pathToFilename(path);
        var options = a;
        var listener = b;
        if (typeof options === 'function') {
          listener = a;
          options = null;
        }
        if (typeof listener !== 'function') {
          throw Error('"watchFile()" requires a listener function');
        }
        var interval = 5007;
        var persistent = true;
        if (options && typeof options === 'object') {
          if (typeof options.interval === 'number') interval = options.interval;
          if (typeof options.persistent === 'boolean') persistent = options.persistent;
        }
        var watcher = this.statWatchers[filename];
        if (!watcher) {
          watcher = new this.StatWatcher();
          watcher.start(filename, persistent, interval);
          this.statWatchers[filename] = watcher;
        }
        watcher.addListener('change', listener);
        return watcher;
      };
      Volume.prototype.unwatchFile = function(path, listener) {
        var filename = pathToFilename(path);
        var watcher = this.statWatchers[filename];
        if (!watcher) return;
        if (typeof listener === 'function') {
          watcher.removeListener('change', listener);
        } else {
          watcher.removeAllListeners('change');
        }
        if (watcher.listenerCount('change') === 0) {
          watcher.stop();
          delete this.statWatchers[filename];
        }
      };
      Volume.prototype.createReadStream = function(path, options) {
        return new this.ReadStream(path, options);
      };
      Volume.prototype.createWriteStream = function(path, options) {
        return new this.WriteStream(path, options);
      };
      // watch(path: TFilePath): FSWatcher;
      // watch(path: TFilePath, options?: IWatchOptions | string): FSWatcher;
      Volume.prototype.watch = function(path, options, listener) {
        var filename = pathToFilename(path);
        if (typeof options === 'function') {
          listener = options;
          options = null;
        }
        // tslint:disable-next-line prefer-const
        var _a = getDefaultOpts(options),
          persistent = _a.persistent,
          recursive = _a.recursive,
          encoding = _a.encoding;
        if (persistent === undefined) persistent = true;
        if (recursive === undefined) recursive = false;
        var watcher = new this.FSWatcher();
        watcher.start(filename, persistent, recursive, encoding);
        if (listener) {
          watcher.addListener('change', listener);
        }
        return watcher;
      };
      /**
       * Global file descriptor counter. UNIX file descriptors start from 0 and go sequentially
       * up, so here, in order not to conflict with them, we choose some big number and descrease
       * the file descriptor of every new opened file.
       * @type {number}
       * @todo This should not be static, right?
       */
      Volume.fd = 0x7fffffff;
      return Volume;
    })();
    exports.Volume = Volume;
    function emitStop(self) {
      self.emit('stop');
    }
    var StatWatcher = /** @class */ (function(_super) {
      __extends(StatWatcher, _super);
      function StatWatcher(vol) {
        var _this = _super.call(this) || this;
        _this.vol = null;
        _this.timeoutRef = null;
        _this.prev = null;
        _this.onInterval = function() {
          try {
            var stats = _this.vol.statSync(_this.filename);
            if (_this.hasChanged(stats)) {
              _this.emit('change', stats, _this.prev);
              _this.prev = stats;
            }
          } finally {
            _this.loop();
          }
        };
        _this.vol = vol;
        return _this;
      }
      StatWatcher.prototype.loop = function() {
        this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
      };
      StatWatcher.prototype.hasChanged = function(stats) {
        // if(!this.prev) return false;
        if (stats.mtimeMs > this.prev.mtimeMs) return true;
        if (stats.nlink !== this.prev.nlink) return true;
        return false;
      };
      StatWatcher.prototype.start = function(path, persistent, interval) {
        if (persistent === void 0) {
          persistent = true;
        }
        if (interval === void 0) {
          interval = 5007;
        }
        this.filename = pathToFilename(path);
        this.setTimeout = persistent ? setTimeout : setTimeoutUnref_1.default;
        this.interval = interval;
        this.prev = this.vol.statSync(this.filename);
        this.loop();
      };
      StatWatcher.prototype.stop = function() {
        clearTimeout(this.timeoutRef);
        process_1.default.nextTick(emitStop, this);
      };
      return StatWatcher;
    })(EventEmitter.EventEmitter);
    exports.StatWatcher = StatWatcher;
    var pool;
    function allocNewPool(poolSize) {
      pool = bufferEs6$1.Buffer.allocUnsafe(poolSize);
      pool.used = 0;
    }
    util.inherits(FsReadStream, Stream.Readable);
    exports.ReadStream = FsReadStream;
    function FsReadStream(vol, path, options) {
      if (!(this instanceof FsReadStream)) return new FsReadStream(vol, path, options);
      this._vol = vol;
      // a little bit bigger buffer and water marks by default
      options = fastExtend({}, getOptions(options, {}));
      if (options.highWaterMark === undefined) options.highWaterMark = 64 * 1024;
      Stream.Readable.call(this, options);
      this.path = pathToFilename(path);
      this.fd = options.fd === undefined ? null : options.fd;
      this.flags = options.flags === undefined ? 'r' : options.flags;
      this.mode = options.mode === undefined ? 438 : options.mode;
      this.start = options.start;
      this.end = options.end;
      this.autoClose = options.autoClose === undefined ? true : options.autoClose;
      this.pos = undefined;
      this.bytesRead = 0;
      if (this.start !== undefined) {
        if (typeof this.start !== 'number') {
          throw new TypeError('"start" option must be a Number');
        }
        if (this.end === undefined) {
          this.end = Infinity;
        } else if (typeof this.end !== 'number') {
          throw new TypeError('"end" option must be a Number');
        }
        if (this.start > this.end) {
          throw new Error('"start" option must be <= "end" option');
        }
        this.pos = this.start;
      }
      if (typeof this.fd !== 'number') this.open();
      this.on('end', function() {
        if (this.autoClose) {
          if (this.destroy) this.destroy();
        }
      });
    }
    FsReadStream.prototype.open = function() {
      var self = this; // tslint:disable-line no-this-assignment
      this._vol.open(this.path, this.flags, this.mode, function(er, fd) {
        if (er) {
          if (self.autoClose) {
            if (self.destroy) self.destroy();
          }
          self.emit('error', er);
          return;
        }
        self.fd = fd;
        self.emit('open', fd);
        // start the flow of data.
        self.read();
      });
    };
    FsReadStream.prototype._read = function(n) {
      if (typeof this.fd !== 'number') {
        return this.once('open', function() {
          this._read(n);
        });
      }
      if (this.destroyed) return;
      if (!pool || pool.length - pool.used < kMinPoolSpace) {
        // discard the old pool.
        allocNewPool(this._readableState.highWaterMark);
      }
      // Grab another reference to the pool in the case that while we're
      // in the thread pool another read() finishes up the pool, and
      // allocates a new one.
      var thisPool = pool;
      var toRead = Math.min(pool.length - pool.used, n);
      var start = pool.used;
      if (this.pos !== undefined) toRead = Math.min(this.end - this.pos + 1, toRead);
      // already read everything we were supposed to read!
      // treat as EOF.
      if (toRead <= 0) return this.push(null);
      // the actual read.
      var self = this; // tslint:disable-line no-this-assignment
      this._vol.read(this.fd, pool, pool.used, toRead, this.pos, onread);
      // move the pool positions, and internal position for reading.
      if (this.pos !== undefined) this.pos += toRead;
      pool.used += toRead;
      function onread(er, bytesRead) {
        if (er) {
          if (self.autoClose && self.destroy) {
            self.destroy();
          }
          self.emit('error', er);
        } else {
          var b = null;
          if (bytesRead > 0) {
            self.bytesRead += bytesRead;
            b = thisPool.slice(start, start + bytesRead);
          }
          self.push(b);
        }
      }
    };
    FsReadStream.prototype._destroy = function(err, cb) {
      this.close(function(err2) {
        cb(err || err2);
      });
    };
    FsReadStream.prototype.close = function(cb) {
      var _this = this;
      if (cb) this.once('close', cb);
      if (this.closed || typeof this.fd !== 'number') {
        if (typeof this.fd !== 'number') {
          this.once('open', closeOnOpen);
          return;
        }
        return process_1.default.nextTick(function() {
          return _this.emit('close');
        });
      }
      this.closed = true;
      this._vol.close(this.fd, function(er) {
        if (er) _this.emit('error', er);
        else _this.emit('close');
      });
      this.fd = null;
    };
    // needed because as it will be called with arguments
    // that does not match this.close() signature
    function closeOnOpen(fd) {
      this.close();
    }
    util.inherits(FsWriteStream, Stream.Writable);
    exports.WriteStream = FsWriteStream;
    function FsWriteStream(vol, path, options) {
      if (!(this instanceof FsWriteStream)) return new FsWriteStream(vol, path, options);
      this._vol = vol;
      options = fastExtend({}, getOptions(options, {}));
      Stream.Writable.call(this, options);
      this.path = pathToFilename(path);
      this.fd = options.fd === undefined ? null : options.fd;
      this.flags = options.flags === undefined ? 'w' : options.flags;
      this.mode = options.mode === undefined ? 438 : options.mode;
      this.start = options.start;
      this.autoClose = options.autoClose === undefined ? true : !!options.autoClose;
      this.pos = undefined;
      this.bytesWritten = 0;
      if (this.start !== undefined) {
        if (typeof this.start !== 'number') {
          throw new TypeError('"start" option must be a Number');
        }
        if (this.start < 0) {
          throw new Error('"start" must be >= zero');
        }
        this.pos = this.start;
      }
      if (options.encoding) this.setDefaultEncoding(options.encoding);
      if (typeof this.fd !== 'number') this.open();
      // dispose on finish.
      this.once('finish', function() {
        if (this.autoClose) {
          this.close();
        }
      });
    }
    FsWriteStream.prototype.open = function() {
      this._vol.open(
        this.path,
        this.flags,
        this.mode,
        function(er, fd) {
          if (er) {
            if (this.autoClose && this.destroy) {
              this.destroy();
            }
            this.emit('error', er);
            return;
          }
          this.fd = fd;
          this.emit('open', fd);
        }.bind(this),
      );
    };
    FsWriteStream.prototype._write = function(data, encoding, cb) {
      if (!(data instanceof bufferEs6$1.Buffer)) return this.emit('error', new Error('Invalid data'));
      if (typeof this.fd !== 'number') {
        return this.once('open', function() {
          this._write(data, encoding, cb);
        });
      }
      var self = this; // tslint:disable-line no-this-assignment
      this._vol.write(this.fd, data, 0, data.length, this.pos, function(er, bytes) {
        if (er) {
          if (self.autoClose && self.destroy) {
            self.destroy();
          }
          return cb(er);
        }
        self.bytesWritten += bytes;
        cb();
      });
      if (this.pos !== undefined) this.pos += data.length;
    };
    FsWriteStream.prototype._writev = function(data, cb) {
      if (typeof this.fd !== 'number') {
        return this.once('open', function() {
          this._writev(data, cb);
        });
      }
      var self = this; // tslint:disable-line no-this-assignment
      var len = data.length;
      var chunks = new Array(len);
      var size = 0;
      for (var i = 0; i < len; i++) {
        var chunk = data[i].chunk;
        chunks[i] = chunk;
        size += chunk.length;
      }
      var buf = bufferEs6$1.Buffer.concat(chunks);
      this._vol.write(this.fd, buf, 0, buf.length, this.pos, function(er, bytes) {
        if (er) {
          if (self.destroy) self.destroy();
          return cb(er);
        }
        self.bytesWritten += bytes;
        cb();
      });
      if (this.pos !== undefined) this.pos += size;
    };
    FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy;
    FsWriteStream.prototype.close = FsReadStream.prototype.close;
    // There is no shutdown() for files.
    FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
    // ---------------------------------------- FSWatcher
    var FSWatcher = /** @class */ (function(_super) {
      __extends(FSWatcher, _super);
      function FSWatcher(vol) {
        var _this = _super.call(this) || this;
        _this._filename = '';
        _this._steps = null;
        _this._filenameEncoded = '';
        // _persistent: boolean = true;
        _this._recursive = false;
        _this._encoding = encoding.ENCODING_UTF8;
        _this._link = null;
        _this._onNodeChange = function() {
          _this._emit('change');
        };
        _this._onParentChild = function(link) {
          if (link.getName() === _this._getName()) {
            _this._emit('rename');
          }
        };
        _this._emit = function(type) {
          _this.emit('change', type, _this._filenameEncoded);
        };
        _this._persist = function() {
          _this._timer = setTimeout(_this._persist, 1e6);
        };
        _this._vol = vol;
        return _this;
        // TODO: Emit "error" messages when watching.
        // this._handle.onchange = function(status, eventType, filename) {
        //     if (status < 0) {
        //         self._handle.close();
        //         const error = !filename ?
        //             errnoException(status, 'Error watching file for changes:') :
        //             errnoException(status, `Error watching file ${filename} for changes:`);
        //         error.filename = filename;
        //         self.emit('error', error);
        //     } else {
        //         self.emit('change', eventType, filename);
        //     }
        // };
      }
      FSWatcher.prototype._getName = function() {
        return this._steps[this._steps.length - 1];
      };
      FSWatcher.prototype.start = function(path, persistent, recursive, encoding$1) {
        if (persistent === void 0) {
          persistent = true;
        }
        if (recursive === void 0) {
          recursive = false;
        }
        if (encoding$1 === void 0) {
          encoding$1 = encoding.ENCODING_UTF8;
        }
        this._filename = pathToFilename(path);
        this._steps = filenameToSteps(this._filename);
        this._filenameEncoded = encoding.strToEncoding(this._filename);
        // this._persistent = persistent;
        this._recursive = recursive;
        this._encoding = encoding$1;
        try {
          this._link = this._vol.getLinkOrThrow(this._filename, 'FSWatcher');
        } catch (err) {
          var error = new Error('watch ' + this._filename + ' ' + err.code);
          error.code = err.code;
          error.errno = err.code;
          throw error;
        }
        this._link.getNode().on('change', this._onNodeChange);
        var parent = this._link.parent;
        if (parent) {
          // parent.on('child:add', this._onParentChild);
          parent.on('child:delete', this._onParentChild);
        }
        if (persistent) this._persist();
      };
      FSWatcher.prototype.close = function() {
        clearTimeout(this._timer);
        this._link.getNode().removeListener('change', this._onNodeChange);
        var parent = this._link.parent;
        if (parent) {
          // parent.removeListener('child:add', this._onParentChild);
          parent.removeListener('child:delete', this._onParentChild);
        }
      };
      return FSWatcher;
    })(EventEmitter.EventEmitter);
    exports.FSWatcher = FSWatcher;
    });

    unwrapExports(volume);
    var volume_1 = volume.FLAGS;
    var volume_2 = volume.flagsToNumber;
    var volume_3 = volume.pathToFilename;
    var volume_4 = volume.filenameToSteps;
    var volume_5 = volume.pathToSteps;
    var volume_6 = volume.dataToStr;
    var volume_7 = volume.dataToBuffer;
    var volume_8 = volume.bufferToEncoding;
    var volume_9 = volume.toUnixTimestamp;
    var volume_10 = volume.Volume;
    var volume_11 = volume.StatWatcher;
    var volume_12 = volume.ReadStream;
    var volume_13 = volume.WriteStream;
    var volume_14 = volume.FSWatcher;

    var lists = createCommonjsModule$1(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var fsProps = exports.fsProps = ['constants', 'F_OK', 'R_OK', 'W_OK', 'X_OK', 'Stats'];

    var fsSyncMethods = exports.fsSyncMethods = ['renameSync', 'ftruncateSync', 'truncateSync', 'chownSync', 'fchownSync', 'lchownSync', 'chmodSync', 'fchmodSync', 'lchmodSync', 'statSync', 'lstatSync', 'fstatSync', 'linkSync', 'symlinkSync', 'readlinkSync', 'realpathSync', 'unlinkSync', 'rmdirSync', 'mkdirSync', 'mkdirpSync', 'readdirSync', 'closeSync', 'openSync', 'utimesSync', 'futimesSync', 'fsyncSync', 'writeSync', 'readSync', 'readFileSync', 'writeFileSync', 'appendFileSync', 'existsSync', 'accessSync', 'fdatasyncSync', 'mkdtempSync', 'copyFileSync', 'createReadStream', 'createWriteStream'];

    var fsAsyncMethods = exports.fsAsyncMethods = ['rename', 'ftruncate', 'truncate', 'chown', 'fchown', 'lchown', 'chmod', 'fchmod', 'lchmod', 'stat', 'lstat', 'fstat', 'link', 'symlink', 'readlink', 'realpath', 'unlink', 'rmdir', 'mkdir', 'mkdirp', 'readdir', 'close', 'open', 'utimes', 'futimes', 'fsync', 'write', 'read', 'readFile', 'writeFile', 'appendFile', 'exists', 'access', 'fdatasync', 'mkdtemp', 'copyFile', 'watchFile', 'unwatchFile', 'watch'];
    });

    unwrapExports(lists);
    var lists_1 = lists.fsProps;
    var lists_2 = lists.fsSyncMethods;
    var lists_3 = lists.fsAsyncMethods;

    var lib = createCommonjsModule$1(function (module, exports) {
    var __assign =
      (commonjsGlobal$1 && commonjsGlobal$1.__assign) ||
      function() {
        __assign =
          Object.assign ||
          function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    Object.defineProperty(exports, '__esModule', { value: true });



    var fsSyncMethods = lists.fsSyncMethods,
      fsAsyncMethods = lists.fsAsyncMethods;

    var F_OK = constants.constants.F_OK,
      R_OK = constants.constants.R_OK,
      W_OK = constants.constants.W_OK,
      X_OK = constants.constants.X_OK;
    exports.Volume = volume.Volume;
    // Default volume.
    exports.vol = new volume.Volume();
    function createFsFromVolume(vol) {
      var fs = {
        F_OK: F_OK,
        R_OK: R_OK,
        W_OK: W_OK,
        X_OK: X_OK,
        constants: constants.constants,
        Stats: Stats_1.default,
        Dirent: Dirent_1.default,
      };
      // Bind FS methods.
      for (var _i = 0, fsSyncMethods_1 = fsSyncMethods; _i < fsSyncMethods_1.length; _i++) {
        var method = fsSyncMethods_1[_i];
        if (typeof vol[method] === 'function') fs[method] = vol[method].bind(vol);
      }
      for (var _a = 0, fsAsyncMethods_1 = fsAsyncMethods; _a < fsAsyncMethods_1.length; _a++) {
        var method = fsAsyncMethods_1[_a];
        if (typeof vol[method] === 'function') fs[method] = vol[method].bind(vol);
      }
      fs.StatWatcher = vol.StatWatcher;
      fs.FSWatcher = vol.FSWatcher;
      fs.WriteStream = vol.WriteStream;
      fs.ReadStream = vol.ReadStream;
      fs.promises = vol.promises;
      fs._toUnixTimestamp = volume.toUnixTimestamp;
      return fs;
    }
    exports.createFsFromVolume = createFsFromVolume;
    exports.fs = createFsFromVolume(exports.vol);
    module.exports = __assign(__assign({}, module.exports), exports.fs);
    module.exports.semantic = true;
    });

    unwrapExports(lib);
    var lib_1 = lib.Volume;
    var lib_2 = lib.vol;
    var lib_3 = lib.createFsFromVolume;
    var lib_4 = lib.fs;
    var lib_5 = lib.semantic;

    // An alternative fs for the browser and testing
    var assert$1 = function (cond, message) {
        if (!cond) {
            throw new Error(message);
        }
    };
    var WasmFsService = /** @class */ (function () {
        function WasmFsService() {
            this.volume = new volume_10();
            this.fs = lib_3(this.volume);
            this.fromJSON({
                "/dev/stdin": "",
                "/dev/stdout": "",
                "/dev/stderr": ""
            });
        }
        WasmFsService.prototype.toJSON = function () {
            return this.volume.toJSON();
        };
        WasmFsService.prototype.fromJSON = function (fsJson) {
            this.volume = volume_10.fromJSON(fsJson);
            // @ts-ignore
            this.volume.releasedFds = [0, 1, 2];
            var fdErr = this.volume.openSync("/dev/stderr", "w");
            var fdOut = this.volume.openSync("/dev/stdout", "w");
            var fdIn = this.volume.openSync("/dev/stdin", "r");
            assert$1(fdErr === 2, "invalid handle for stderr: " + fdErr);
            assert$1(fdOut === 1, "invalid handle for stdout: " + fdOut);
            assert$1(fdIn === 0, "invalid handle for stdin: " + fdIn);
            this.fs = lib_3(this.volume);
        };
        WasmFsService.prototype.getStdOut = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var promise;
                var _this = this;
                return __generator$1(this, function (_a) {
                    promise = new Promise(function (resolve) {
                        resolve(_this.fs.readFileSync("/dev/stdout", "utf8"));
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        return WasmFsService;
    }());
    var WasmFs = /** @class */ (function (_super) {
        __extends$1(WasmFs, _super);
        function WasmFs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return WasmFs;
    }(WasmFsService));

    var WorkerFS = /** @class */ (function () {
        function WorkerFS() {
            this.wasmFs = new WasmFsService();
            this.stdin = new BufferedStdin();
            this.stdin.bindToFd(this.wasmFs.volume.fds[0]);
            this.stdout = new PipedWriter(this.wasmFs.volume.fds[1]);
            this.stderr = new PipedWriter(this.wasmFs.volume.fds[2]);
            this.stderr.mapStrFn(function (str) { return console.error("worker error>" + str); });
            var outgoingFd = this.wasmFs.fs.openSync("/output.bin", "w+");
            this.output = new PipedWriter(this.wasmFs.volume.fds[outgoingFd]);
            // @ts-ignore
            //console.log(this.wasmFs.volume.getFileByFd(outgoingFd));
        }
        WorkerFS.prototype.getFs = function () {
            return this.wasmFs.fs;
        };
        return WorkerFS;
    }());
    var PipedWriter = /** @class */ (function () {
        function PipedWriter(fd) {
            var _this = this;
            this.writes = 0;
            this.write = function (stdoutBuffer, offset, length, position) {
                if (length === void 0) { length = stdoutBuffer.byteLength; }
                _this.writes++;
                if (_this.binFn) {
                    _this.binFn(stdoutBuffer);
                    return stdoutBuffer.length;
                }
                var dataString = new TextDecoder("utf-8").decode(stdoutBuffer);
                if (_this.strFn) {
                    _this.strFn(dataString);
                }
                else {
                    console.log(dataString);
                }
                // Record all of our stdout to show in the prompt
                return stdoutBuffer.length;
            };
            this.fd = fd;
            this.fd.node.write = this.write;
        }
        PipedWriter.prototype.mapBinFn = function (fn) {
            this.binFn = fn;
        };
        PipedWriter.prototype.mapStrFn = function (fn) {
            this.strFn = fn;
        };
        return PipedWriter;
    }());
    var BufferedStdin = /** @class */ (function () {
        function BufferedStdin() {
            var _this = this;
            this.read = function (stdinBuffer, offset, length, position) {
                if (length === void 0) { length = stdinBuffer.byteLength; }
                if (_this.messages.length === 0) {
                    return 0;
                }
                else if (position && position > 0) {
                    _this.error("BufferedStdin read on position not supported: " + position);
                }
                var message = _this.messages.shift();
                if (message && message.length < length) {
                    stdinBuffer.set(message);
                }
                else if (message) {
                    _this.error("Message does not fit passed stdin.read buffer: " + message.length);
                }
                else {
                    return 0;
                }
                return message.length;
            };
            this.messages = new Array;
        }
        BufferedStdin.prototype.bindToFd = function (stdin_fd) {
            stdin_fd.node.read = this.read;
        };
        BufferedStdin.prototype.push = function (message) {
            this.messages.push(message);
        };
        BufferedStdin.prototype.error = function (message) {
            var err = new Error("BufferedStdin error: " + message);
            console.error(err);
            throw err;
        };
        return BufferedStdin;
    }());

    var wasmTransformerUrl = "wasm_transformer_bg.wasm";
    var workerUrl = "worker.wasm"; //"wabench_app_wasi.wasm"; //
    var iamWorker = self;
    var instance = null;
    var workerFs = new WorkerFS();
    var wasi = new WASI({
        preopenDirectories: {
            "/": "/"
        },
        args: [],
        env: {},
        bindings: __assign(__assign({}, WASI.defaultBindings), { fs: workerFs.getFs() })
    });
    var fetchAndTransformWasmBinary = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var fetchedOriginalWasmBinary, originalWasmBinaryBuffer, originalWasmBinary, transformedBinary, transformedWasmModule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    fetchedOriginalWasmBinary = _a.sent();
                    return [4 /*yield*/, fetchedOriginalWasmBinary.arrayBuffer()];
                case 2:
                    originalWasmBinaryBuffer = _a.sent();
                    originalWasmBinary = new Uint8Array(originalWasmBinaryBuffer);
                    // Initialize our wasm-transformer
                    return [4 /*yield*/, init$2(wasmTransformerUrl)];
                case 3:
                    // Initialize our wasm-transformer
                    _a.sent();
                    transformedBinary = lowerI64Imports(originalWasmBinary);
                    return [4 /*yield*/, WebAssembly.compile(transformedBinary)];
                case 4:
                    transformedWasmModule = _a.sent();
                    return [2 /*return*/, transformedWasmModule];
            }
        });
    }); };
    var startWasiTask = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var module_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetchAndTransformWasmBinary(file)];
                case 1:
                    module_1 = _a.sent();
                    console.log("Module transformed and compiled, starting...");
                    return [4 /*yield*/, WebAssembly.instantiate(module_1, {
                            wasi_unstable: wasi.wasiImport
                        })];
                case 2:
                    // Instantiate the WebAssembly file
                    instance = _a.sent();
                    // Start the WebAssembly WASI instance!
                    wasi.start(instance);
                    console.log("worker has started");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    console.error(e_1.stack);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    workerFs.output.mapBinFn(function (buffer) {
        console.log("Worker outgoing> " + buffer);
        if (typeof iamWorker.postMessage === "function") {
            iamWorker.postMessage(Array.from(buffer));
        }
    });
    iamWorker.onmessage = function (event) {
        console.log("Worker incoming> " + event.data);
        workerFs.stdin.push(event.data);
        console.log(instance.exports.message_ready());
    };
    startWasiTask(workerUrl);

}());