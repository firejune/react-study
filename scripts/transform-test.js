'use strict';

/*
transform-es2015-arrow-functions => 구현됨
transform-es2015-block-scoped-functions => 구현됨
transform-es2015-block-scoping => 구현됨
transform-es2015-classes => 일부 구현됨 (O)
transform-es2015-computed-properties => 구현됨
transform-es2015-destructuring => 구현 안됨 (O)
transform-es2015-for-of => 구현됨
transform-es2015-function-name => 구현됨
transform-es2015-literals => 구현됨
transform-es2015-modules-commonjs => 구현 안됨 (O)
transform-es2015-object-super => 구현됨
transform-es2015-parameters => 일부 구현됨 (O)
transform-es2015-shorthand-properties => 구현 안됨 (O)
transform-es2015-spread => 구현됨
transform-es2015-sticky-regex => 구현 안됨, transform 오작동 (X)
transform-es2015-template-literals => 구현됨
transform-es2015-typeof-symbol => 구현됨
transform-es2015-unicode-regex => 구현됨
*/

// transform-es2015-classes
class AClass {
  static a() {
    //
  }

  static get b() {
    //
  }

  static set b(b) {
    this.value = b;
  }
}

const aClass = new AClass();
console.info('es2015-classes', aClass);

// transform-es2015-destructuring
let x;
let y;
[x, y] = [1, 2];
console.log('es2015-destructuring', x, y);

// transform-es2015-modules-commonjs
import React from 'react';
console.info('es2015-modules-commonjs', React);

// transform-es2015-parameters
// ...args는 브라우저에서 구현되었지만 default parameters는 구현 안됨
function parameters(arg = 123, ...args) {
  console.log('es2015-parameters', arg, args);
}
parameters(1, 2, 3, 4);

// transform-es2015-shorthand-properties
const c = 1;
const d = 2;
console.info('es2015-shorthand-properties', {c, d, e: 3});

// transform-es2015-sticky-regex
// 이거는 오류가 발생함
// const stickyRegX = /o+/y;
// console.info('es2015-sticky-regex', stickyRegX);

/*
Stage-1
transform-class-constructor-call
transform-class-properties
transform-decorators
transform-export-extensions
*/

/*
Stage-2
syntax-trailing-function-commas => 뭔지 모름
transform-object-rest-spread => 사용함 (O)
*/

// transform-object-rest-spread
const spreadA = {
  a: 1,
  b: 2
};
const spreadB = {
  c: 3,
  d: 4
};
console.info('object-rest-spread', {...spreadA, ...spreadB});

/*
Stage-3
transform-async-to-generator
transform-exponentiation-operator
*/

/*
React
syntax-flow => 사용안함
syntax-jsx => 사용안함
transform-flow-strip-types => 사용안함
transform-react-jsx => 사용함 (O)
*/

// transform-react-jsx
class Hello extends React.Component {
  render() {
    return (
      <node>Hello</node>
    );
  }
}
console.info('react-jsx', Hello);

console.debug('------- end of transform test ------');
