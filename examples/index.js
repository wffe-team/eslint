
/** no-console */
console.log(123)

/** no-const-assign */
const a = 123;
a = 123

const data = {
  name: 'wf'
}
data.name = 'wfdata'

function sum(a, b) {
  debugger;
  return a + b;
}

let foo = {
  bar: 'baz',
  bar: 'qux'
}

function foo1(a, b, a) {
  const data = a
}

switch(id) {
  case 1:
    break;
  case 1:
    break;
}

if (foo) {
}

try {
  // doSomething
} catch (error) {

}

/^abc[]/.test('abcdefg');
'abcdefg'.match(/^abc[]/);

/^abc/.test('abcdefg');
'abcdefg'.match(/^abc[a-z]/);

if(foo == null) {
  //doSomething
}

if(foo === null) {
  // doSomething
}

window.eval('console.log(123)')

try {
  // doSomething
} catch (error) {
  error = 123
}

a = (b * c)

let test = 123;;

let num = .5;

function foo1() {}
foo1 = bar;

if(num) {
  var b = 10;
  function f() {}
}

RegExp('[')

function thing() {
  return `template <NBSP>string`;
}

{
  var foo2 = bar();
}

if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  }
}

if (foo) {
  // ...
} else {
  if (bar) {
    // ...
  }
}

if (foo) {
  // ...
} else if (bar) {
  // ...
}

for (var i=10; i; i--) {
  (function() { return i; })(); // ✗ avoid
}

var a1 = function() {};

for (var i=10; i; i--) { 
  a1(); // ✓ ok
}

function add(x, y) {
  // --->return x + y;
   return x + y;
}
let abc =  1;

let test1 = 5;



let test2 = 10;

if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

new Character()

let name22 = 'John' 
name22 = 'Jane' 


class A extends B {
  constructor() {
    this.a = 0;
    super();
  }
}

throw 'error'
throw new Error('error')


let testUndef = testUndef1 + 1

let name123 = undefined;
let name1234
name1234 = 'value'


let hello = 'world'
[1, 2, 3].forEach(addNumber);

function doSomething () {
  return true
  console.log('never called')     // ✗ avoid
}

let unused;

abcdef();

function abcdef() {}

foo.call(undefined, 1, 2, 3);

(function(){
  return void 0; // ✗ avoid
})();

with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}

const ac123 = [{ 'foo': 'bar' }];

const arr = [ 'foo', 'bar', 'baz' ];


// ✗ avoid
if (condition)
{
  // ...
}
else
{
  // ...
}

function my_function () { }
function myFunction () { }
 
const my_var = 'hello'
const myVar = 'hello'

const list = [1,2,3,4]

function doSomething1(condition) {
  if (condition) {
      return true;
  } else {
      return;
  }
}


// class B {
//   constructor() {
//     super();  // This is a SyntaxError.
//   }
// }

// class A extends B {
//   constructor() { }  // Would throw a ReferenceError.
// }

if (foo) foo++;

let x = 30

if (x == 42) { } // ✗ avoid
if(x === 41) { } // ✓ ok

function loadData (err, data) {
  doSomething();
}

// ✓ ok
function loadData (err, data) {
  if (err) {
    console.log(err.stack);
  }
  doSomething();
}

if (a) {
    b=c;
    function foo(d) {
      e=f;
  }
}

const space = {'key' : 'value'}     // ✓ ok

const string = "123"

let foo12;let bar12;

if (foo) {
  //...
}else if (bar) {
  //...
}else {
  //...
}
typeof foo === "strnig"; // ✗ avoid
typeof foo === "string"; // ✓ ok