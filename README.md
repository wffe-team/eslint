# eslint

万方数据前端团队eslint配置检测规范

# Vscode 自动修复配置
1. 在vscode中安装eslint插件
2. 在settings.json添加如下配置
  ```js
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  ```

# 规则

* 不使用console

[no-console](https://eslint.org/docs/rules/no-console)

```js
console.log(123); // ✗ avoid
```

* 避免修改const声明的变量

[no-const-assign](https://eslint.org/docs/rules/no-const-assign)

```js
const a = 0;
a = 1;           // ✗ avoid
```

* 不使用 debugger

[no-debugger](https://eslint.org/docs/rules/no-debugger)

```js
function sum(a, b) {
  debugger;     // ✗ avoid
  return a + b;
}
```

* 对象字面量只呢个不定义重复的属性

[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

``` js
var foo = {
  bar: 'baz',
  bar: 'qux'    // ✗ avoid
}
```

* 不定义冗余的函数参数

[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)

```js
function foo(a, b, a) {  // ✗ avoid
  const data = a;
}
```

* switch语句中不定义重复的case分支

[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

```js
switch(id) {
  case 1:
    // ...
  case 1:     // ✗ avoid
}
```
* 不允许空块语句,该规则忽略包含注释的块语句,但允许空catch语句

[no-empty](https://eslint.org/docs/rules/no-empty)

```js
if (foo) {  // ✗ avoid
}

if (foo) {  // ✓ ok
  // empty
}

try {
  // doSomething
} catch (error) {  // ✓ ok

}
```

* 正则表达式中不使用空字符

[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

```js
/^abc[]/.test('abcdefg');  // ✗ avoid
'abcdefg'.match(/^abc[]/); // ✗ avoid

/^abc/.test('abcdefg');  // ✓ ok
'abcdefg'.match(/^abc[a-z]/); // ✓ ok
```

* 不使用 == 或 != 操作符与null进行比较

[no-eq-null](https://eslint.org/docs/rules/no-eq-null)

```js
if(foo == null) { // ✗ avoid
  // doSomething
}

if(foo === null) { // ✓ ok
  // doSomething
}
```

* 不使用eval

[no-eval](https://eslint.org/docs/rules/no-eval)

```js
window.eval('console.log(123)') // ✗ avoid
```

* catch 中不要对错误重新赋值

[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)

```js
try {
  // doSomething
} catch (error) {
  error = 123 // ✗ avoid
}
```

* 不使用多余的括号包裹函数

[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)

```js
a = (b * c) // ✗ avoid
```

* 不使用不必要的分号

[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)

```js
const test = 123;;  // ✗ avoid
```

* 不省略小数点前面的0

[no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)

```js
const num = .5; // ✗ avoid
```

* 避免对声明过的函数重新赋值

[no-func-assign](https://eslint.org/docs/rules/no-func-assign)

```js
function foo() {}
foo = bar; // ✗ avoid
```

* 嵌套代码块中禁止定义函数或使用var声明变量

[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)

```js
if(test) {
  const foo = 30; // ✗ avoid
}
if(test) {
  function f(){} // ✗ avoid
}
```

* 使用let或者const 代替 var

[no-var](https://eslint.org/docs/rules/no-var)

```js
const a = 123; // ✗ avoid
```

* 不要向RegExp构造器传入非法的正则表达式

[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)

```js
RegExp('['); // ✗ avoid
```

* 禁止this关键字在类或类对象之外出现，只在严格模式下生效

[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)

```js
"use strict";

this.a = 0;
baz(() => this); // ✗ avoid
```

* 不使用非法空白符

[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)

```js
function thing() {
  return `template <NBSP>string`;  // ✗ avoid
}
```

* 不书写不必要的嵌套代码块

[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)

```js
{
  const foo = bar(); // ✗ avoid
}
```

* 不允许将 if 语句作为 else 块中的唯一语句

[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)

```js
if (foo) {
  // ...
} else { // ✗ avoid
  if (bar) {
    // ...
  }
}

if (foo) {
  // ...
} else if (bar) { // ✓ ok
  // ...
}
```

* 禁止在循环中使用函数

[no-loop-func](https://eslint.org/docs/rules/no-loop-func)

```js
for (let i=10; i; i--) {
    (function() { return i; })(); // ✗ avoid
}

const a = function() {};

for (let i=10; i<0; i--) { 
    a(); // ✓ ok
}
```

* 不要混合使用空格与制表符作为缩进

[no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

```js
function add(x, y) {
// --->..return x + y;  
        return x + y;
}
```

* 除了缩进，不要使用多个空格

[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

```js
let abc =  1; // ✗ avoid
let abc1 = 1; // ✓ ok
```

* 允许最多连续两行空格

[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)

```js
let test1 = 5; // ✗ avoid



let test2 = 10; // ✓ ok


let test3 = 11;
```

* 关系运算符的左值不要做取反操作

[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)

```js
if (!key in object) { // ✗ avoid
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!(key in object)) { // ✓ ok
  // key is not in object
}
```

* new创造对象实例后需要赋值给变量

[no-new](https://eslint.org/docs/rules/no-new)

```js
new Character()                     // ✗ avoid
const character = new Character()   // ✓ ok
```

* 禁止重复生命变量

[no-redeclare](https://eslint.org/docs/rules/no-redeclare)

```js
let name = 'John'
let name = 'Jane'     // ✗ avoid
 
let name = 'John'
name = 'Jane'         // ✓ ok
```

* 行末不留空格

[no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

```js
const foo = 0;//•••••
const baz = 5;//••
```

* 使用 this 前请确保 super() 已调用

[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)

```js
class A extends B {
  constructor() {
    this.a = 0;
    super();           // ✗ avoid
  }
}

class A extends B {
  constructor() {
    super();           // ✗ avoid
    this.a = 0;
  }
}
```

* 使用throw抛错时，抛出Error对象而不是字符串

[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

```js
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok
```

* 对于未声明的变量引用会导致警告

[no-undef](https://eslint.org/docs/rules/no-undef)

```js
let testUndef = testUndef1 + 1// ✗ avoid
```

* 禁止使用undefined初始化变量

[no-undef-init](http://eslint.org/docs/rules/no-undef-init)

```js
let name = undefined    // ✗ avoid
let name
name = 'value'          // ✓ ok
```

* 不要使用 (, [, or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。

[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

```js
let hello = 'world'
[1, 2, 3].forEach(addNumber);  // ✗ avoid
```

* return，throw，continue 和 break 后不要再跟代码。

[no-unreachable](https://eslint.org/docs/rules/no-unreachable)

```js
function doSomething () {
  return true
  console.log('never called')     // ✗ avoid
}
```

* 禁止无用的表达式

[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

```js
if(0) 0 // ✗ avoid
```

* 不要定义未使用的变量

[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

```js
let a;
```

* 在使用变量或函数之前定义

[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)

```js
abcdef(); // ✗ avoid

function abcdef() {}
```

* 避免不必要的.call()和.apply()

[no-useless-call](https://eslint.org/docs/rules/no-useless-call)

```js
sum.call(null, 1, 2, 3)   // ✗ avoid
```

* 禁止使用void操作符

[no-void](https://eslint.org/docs/rules/no-void)

```js
(function(){
    return void 0; // ✗ avoid
})();
```

* 禁止使用with

[no-with](https://eslint.org/docs/rules/no-with)

```js
with (val) {...}    // ✗ avoid
```

* 数组元素之间以空格隔开,[ 之后和 ] 之前 不能加空格

[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)

```js
const [ x, y ] = z; // ✗ avoid
const [x, y] = z;   // ✓ ok
```

* else 关键字要与花括号保持在同一行。

[brace-style](https://eslint.org/docs/rules/brace-style)

```js
// ✓ ok
if (condition) {
  // ...
} else {
  // ...
}

// ✗ avoid
if (condition)
{
  // ...
}
else
{
  // ...
}
```

* 对于变量和函数名统一使用驼峰命名法

[camelcase](https://eslint.org/docs/rules/camelcase)

```js
function my_function () { }    // ✗ avoid
function myFunction () { }     // ✓ ok
 
const my_var = 'hello'         // ✗ avoid
const myVar = 'hello'          // ✓ ok
```

* 不允许有多余的行末逗号。

[comma-dangle](https://eslint.org/docs/rules/comma-dangle)

```js
const obj = {
  message: 'hello',   // ✗ avoid
}
```

* 逗号后面加空格

[comma-spacing](https://eslint.org/docs/rules/comma-spacing)

```js
// ✓ ok
const list = [1, 2, 3, 4]
function greet (name, options) { ... }
// ✗ avoid
let list = [1,2,3,4]
function greet (name,options) { ... }
```

* 始终将逗号置于行末

[comma-style](https://eslint.org/docs/rules/comma-style)

```js
let obj = {
  foo: 'foo'
  ,bar: 'bar'   // ✗ avoid
}

let obj = {
  foo: 'foo',
  bar: 'bar'   // ✓ ok
}
```

* return 语句必须有返回值

[consistent-return](https://eslint.org/docs/rules/consistent-return)

```js
// ✗ avoid
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}
// ✓ ok
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```

* 派生类的构造器中一定要调用 super, 非派生类的构造器不能调用super

[constructor-super](https://eslint.org/docs/rules/constructor-super)

```js
class A {
  constructor() {
    super();  // This is a SyntaxError.
  }
}

class A extends B {
  constructor() { }  // Would throw a ReferenceError.
}

// ✓ ok
class A {
  constructor() { }
}

class A extends B {
  constructor() {
    super();
  }
}
```

* 多行 if 语句的的括号不能省略

[curly](https://eslint.org/docs/rules/curly)

```js
if (foo) foo++; // ✗ avoid

// ✓ ok
if (foo) {
  foo++;
}
```

* switch语句最后必须有default

[default-case](https://eslint.org/docs/rules/default-case)

```js
switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;
  // no default ✗ avoid
}

// ✓ ok
switch (a) {
  case 1:
    /* code */
    break;

  default:
    /* code */
    break;
}
```

* 使用 === 代替 ==

[eqeqeq](https://eslint.org/docs/rules/eqeqeq)

```js
if (x == 42) { } // ✗ avoid
if(x === 41) { } // ✓ ok
```

* 不要丢掉异常处理中err参数。

[handle-callback-err](https://eslint.org/docs/handle-callback-err)

```js
// ✗ avoid
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
```

* 使用两个空格进行缩进。

[indent](https://eslint.org/docs/rules/indent)

```js
// ✗ avoid
if (a) {
    b=c;
    function foo(d) {
        e=f;
    }
}

// ✓ ok
if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}

```

* 键值对当中冒号与值之间要留空白

[key-spacing](https://eslint.org/docs/rules/key-spacing)

```js
const obj = { 'key' : 'value' }    // ✗ avoid
const obj = { 'key' :'value' }     // ✗ avoid
const obj = { 'key':'value' }      // ✗ avoid
const obj = { 'key': 'value' }     // ✓ ok
```

* 除需要转义的情况外，字符串统一使用单引号

[quotes](https://eslint.org/docs/rules/quotes)

```js
const double = "double"; // ✗ avoid
consg single = 'single'; // ✓ ok
```

* 使用分号结尾

[semi](https://eslint.org/docs/rules/semi)

```js
const value = 1 // ✗ avoid
const value = 1; // ✓ ok
```

* 遇到分号时空格要后留前不留

[semi-spacing](https://eslint.org/docs/rules/semi-spacing)

```js
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

* 关键字后面加空格
[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)

```js
if (condition) { ... }   // ✓ ok
if(condition) { ... }    // ✗ avoid
```

* 判断类型是不是NAN使用isNaN()

[use-isnan](https://eslint.org/docs/rules/use-isnan)

```js
// ✗ avoid
if (foo == NaN) {
  // ...
}

// ✓ ok
if (isNaN(foo)) {
  // ...
}
```

* 用合法的字符串跟 typeof 进行比较操作

[valid-typeof](http://eslint.org/docs/rules/valid-typeof)

```js
typeof foo === "strnig"; // ✗ avoid
typeof foo === "string"; // ✓ ok
```

*自调用匿名函数 (IIFEs) 使用括号包裹

[wrap-iife](https://eslint.org/docs/rules/wrap-iife)

```js
const getName = function () { }()     // ✗ avoid
 
const getName = (function () { }())   // ✓ ok
```