# JavaScript笔记

[TOC]

JavaScript代码一般放在HTML的head中，用`<script>`包裹；也可以放在.js文件中，在HRML中用`<script src="..."></script>`引用

### 语法

#### 变量

+ 声明变量：var，如：`var a = 1;` 可同时声明多个
+ var声明的变量会被提升到头部
+ 变量名区别大小写
+ 变量类型没有限制，可随时更改

#### 标识符

+ 标识符区别大小写
+ 命名规则：第一个字符时unicode字母或$或_ 第二个字符开始可以用数字，中文可用

#### 注释

+ //单行注释

+ /*多行

  注释*/

#### 条件语句

+ if语句：`if (条件){执行语句;} else {执行语句;}`

+ switch语句: `

  ```javascript
  switch (fruit) {
      case "banana":
          执行语句;
          break;
      case "apple":
          执行语句;
          break；
      defalut:
          执行语句;
          break;
  }
  ```

  不写break的话就不会跳出switch

+ switch后跟的括号与case后的值比较时采用严格相等运算符(===)，说明比较的时候不会产生类型转换

+ `?:`：if else简写形式：

  (条件) ? 表达式1 : 表达式2，如：

  var even = (n % 2 === 0) ? true : false;

  意为：如果n能被2整除，则取true，反之取false

#### 循环语句

+ while (条件) {执行语句;}

+ for (单次表达式; 条件表达式; 末尾循环体) {中间循环体}：单词表达式是for开始执行的第一个表达式，随后判断条件表达式是否满足，满足则执行中间循环体，再执行末尾循环体

  表达式可省略，但是圆括号内分号不可省略

  常用于遍历数组：

  ```javascript
  var arr = ["apple", "google", "facebook"];
  var x, i;
  for (i=0; i<arr.length; i++){
      x = arr[i];
      console.log(x)}
  ```

  for...in是for的变种，常用于遍历对象属性，也可以遍历数组：

  ```javascript
  var a = {
      b:12,
      d:12,
      asdua:12};
  for (var b in a) {
      console.log(b)
  }
  
  var asdf=['123', '21323', '21341'];
  for (var r in asdf) {
      console.log(r);
      console.log(arr[r]);}
  ```

+ `do {执行语句;} while (条件);`：先执行一次语句，zai判断条件；

+ break：直接跳出循环或代码块

+ continue：跳出循环并返回循环头部

+ 标签：在语句前加`标签名:`可设置标签，相当于锚点，搭配break和continue使用，如：break top;

+++++++

### 数据类型

#### 分类

+ 数值(number)
+ 字符串(string)
+ 布尔值(boolean)
+ undefined
+ null
+ 对象(object): 
  + 狭义的对象(object)
  + 数组(array)
  + 函数(function)
+ Symbol

前三者被称为原始类型的值

#### typeof运算符

typeof可以返回一个值的数据类型，例：`typeof null`返回值为object

#### null和undefined

+ 都表示“没有”
+ 在if语句中自动转化为false
+ 区别：
  + null转为数值时为0，undefined转为数值时为NaN
  + 待更

#### 布尔值

+ 布尔值只有true和false
+ 除了一下六值会转为false外，其他都会被视为true：
  + undefined
  + null
  + 0
  + false
  + NaN
  + ''或""(空字符串)

#### 数值

+ 数值范围是2^(-1023)到2^1024的开区间
+ 正向溢出时返回infinity；负向溢出时返回0
+ 用Number.MAX/MIN_VALUE可以查看最大/小的数
+ 进制：
  + 八进制：有前缀00或0o或0且只用了0~7
  + 十六进制：有前缀0x或0X
  + 二进制：有前缀0b或0B

#### NaN

+ 含义：not a number
+ 类型仍为数值
+ NaN不等于任何值，包括他本身
+ NaN与任何数运算得到的结果都是NaN

#### Infinity

+ 太大太小都会返回infinity，有正负之分，0除0也返回infinity
+ 可参与四则运算
+ 自己减/除自己，得NaN
+ 0 * Infinity = NaN
+ 与null运算时，null转为0

#### 与数值相关的全局方法

+ parseInt('123')：将所有字符串转化为整数，转换从左至右进行，遇到转换不了的字符时停止，返回已经转换了的数，若第一个字符就不能转换，则返回NaN。若接收的不是字符串，则JavaScript会将它转换为字符串再进行转换
+ parseInt返回值只能是十进制整数或时NaN
+ parseInt还可以接受第二个参数（逗号隔开）（在2到36之间，超出范围则返回NaN），表示第一个数的进制，然后以该数的十进制返回。若字符串中包含超出进制的数（如8进制中出现8、9），则从最高位开始转换，直至转换无法进行
+ parseFloat将字符串转换为浮点数，可用科学计数法
+ isNaN可用来判断值是否为NaN，只对数值有效，若输入其他值，会先转化为数值，如输入字符串，会先转化为NaN，再返回true

+++

### 字符串

+ 用单引号或双引号包裹，若要表示多行字符串，可用` ` `包裹

+ 单/双引号内可用双/单引号，若单/双引号内想用单/双引号，要在里边的引号前加\表示转义

  常用转义字符：

  | 字符 |  含义  | 字符 |    含义    |
  | :--: | :----: | :--: | :--------: |
  |  \0  |  null  |  \b  |   后退键   |
  |  \f  | 换页符 |  \v  | 垂直制表符 |
  |  \n  | 换行符 | \\'  |     '      |
  |  \r  | 回车键 | \\"  |     "      |
  |  \t  | 制表符 | \\\  |     \      |

+ 可用\加编码输出对应字符

+ 在非特殊字符前用反斜杠\，\会被忽略

+ 字符串可被视为字符数组（待更）

+ 把多个字符串串起来可以用+连接，如遇到中间有变量时：`'你好，' + name + '再见'`；如果有多个变量觉得用+麻烦时，可用`$(变量名)`，如：'你好，$(name)，再见'

+ 要获得字符串中某个字符，可用索引的方法（类似数组）：

  ```javascript
  var s = 'Hello,world';
  s[0]; //'H'
  ```

  字符串不可变，用索引赋值无效

+ toUpperCase()：把一个字符串全部变成大写

+ toLowerCase()：把一个字符串全部变成小写

+ indexOf()：查看指定字符串出现的位置

+ substring()：返回指定索引区域的的子字符串

+ length返回字符串长度，如：

  `var s = "hello"`

  `s.length //5`

+++

### 对象

+ 对象是一组”键值对“(key-value)的集合

+ 定义对象：

  ```javascript
  var obj = {
      foo: "Hello",
      bar: "World"
  };
  ```

  上面代码定义了obj为对象，还有俩键值对，"foo"、"bar"是键名，"Hello"、"World"是键值

+ 对象的所有键名都是字符串（symbol待更），若是数值的话会转换为字符串

+ 如果键名不符合标识符的规则，则必须用引号包裹

+ 键名又称属性，键值可以是任意数据类型

+ 属性不必在对象声明时就指定：（在后边指定的时候直接对属性**赋值**）

  ```javascript
  var obj = {};
  obj.foo = 123;
  obj.foo // 123
  ```

+ 若两个变量名指向通过一个对象，则它们此时的值相同，但若更改第一个变量的值，第二个变量将不受影响：

  ```javascript
  var o1 = {};
  var o2 = o1;
  
  o1 = 1;
  ```

  此时o2的值仍为{}

+++

### 属性

+ 读取对象属性：对象名.属性名/对象名[’属性名‘]，如果方括号内不加''，属性名会被识别为变量；键名为数值时不能用.
+ 用.或[]都可对属性赋值
+ 查看对象所有属性：Object.keys(对象名)
+ 删除属性：delete 对象名.属性名，返回true；删除不存在的属性时也会返回true

+++++++

### Map

+ 用于快速查找，类似（个人感觉）键值对组成的数组

+ 定义map：`var m = new Map([['Michael', 95], ['Bob', 86], ['Mary', 64]]);`

  或定义空map，再增添新的键值对：

  ```javascript
  var m = new Map();
  m.set('Adam', 67);//添加新的键值对
  m.has('Adam');//检查是否有Adam
  m.get('Adam');//获得Adam的值
  m.delete('Adam')
  ```

-------------

### Set

+ 类似（个人感觉）键名组成的数组

+ 定义set：`var s = new Set([1, 2, 3]);`

  或定义空set后添加键名：

  ```javascript
  var s = new Set();
  s.add(1);
  s.has(1);
  s.delete(1);
  ```

-----------

### iterable

+ Array/Map/Set都属于iterable类型

+ 可以用`for...of`遍历集合：

  ```javascript
  var s = new Set([1, 2, 3]);
  var arr = new Array[1, 2, 3];
  var m = new Map([[1, 3], [2, 1], [3, 2]]);
  for (var a of s){
      console.log(a);
  }
  for (var a of arr){
      console.log(a);
  }
  for (var a of Map){
      console.log(x[0] + '=' + x[1]);
  }
  ```

  

+++

### 函数

#### 函数声明

+ 声明函数：`function 函数名(参数) {执行命令;}`，声明后以后使用`函数名()`就可以调用大括号内的代码

+ 也可以用赋值方法：`var 变量名 = function 函数名(){};`

  这样的话函数名只能在函数内部使用，但可以方便检查错误

+ Function构造函数（没人用）

  ```javascript
  var add = new Function(
      'x',
      'y',
      'return x + y'
  );
  ```

  上面Function接受了3个参数，最后一个时函数体。Function可以接受任意数量的参数，只有最后一个会被认为是函数体

+ 多次声明同一函数时，只有最后一次声明有效

+ return：JavaScript引擎遇到return语句后就回直接返回return后跟的值，后面的语句都不会执行，非必需

+ 用function声明函数时函数会被提升到头部

#### 函数的属性

+ name：查看名字，若通过赋值定义且为匿名函数，则返回变量名
+ length：查看预期参数个数
+ toString：返回函数源码

#### 函数作用域

+ JavaScript有个全局变量window

+ 函数内部定义的变量只能在函数内被引用，且会覆盖同名全局变量

+ 对于var来说，局部变量只能在**函数内部**声明

+ 函数体内部声明的函数，作用域绑定函数体内

+ 如果不同JavaScript文件定义了相同名字的顶层函数，那么都会造成命名冲突，解决方法是创建新的全局变量：

  ```javascript
  var Myapp = {};//定义全局变量
  
  Myapp.name = 'name';
  Myapp.num = 1;//定义绑定Myapp的变量
  
  Myapp.foo = function() {
      console.log(num);
  };
  ```

+ ```javascript
  'use strict';
  var m = function(){
      for (var i = 1; i < 100; i++;){
      }
      i +=100;//i仍可以引用
  }
  ```

  上述代码中，在for的圆括号内定义的变量作用域为m函数内，若想定义作用域在for函数体内的变量，则可用let：

  ```javascript
  'use strict';
  var m = function(){
      for (var i = 1; i < 100; i++;){
      }
      i +=100;//报错
  }
  ```

+ const用来定义常量，let和const都有块级作用域

#### 解构赋值

+ 对数组元素进行赋值：`var [x, y, z] = ['A', 'B', 'C'];`

  还可以忽略某些元素：`var [ , , z] = ['A', 'B', 'C'];`

  数组内部有嵌套的话也可以这样：`var [x, [y, z]] = ['A', ['B', 'C']];`

+ 用解构赋值将对象属性提取出来：

  ```javascript
  var person = {
      name: '小明',
      age: 15,
      grade: 9
  }
  var {name, age, grade} = person;
  ```

  同样可嵌套：

  ```javascript
  var person = {
      name: '小明',
      age: 15,
      hobby: {
          sport: 'running',
              music: 'guitar'
    }
  }
  
  var {name, age, hobby:{sport, music}} = person;
  ```

  上述代码中，最后一行hobby不是变量，是为了获取到sport对象的属性

  如果想让变量名与属性名不一样，可用相似方法：

  ```javascript
  var person = {
      name: '小明',
      age: 15,
      hobby: 'running'
  }
  
  var {name, age = true, hobby: sport} = sport;
  ```

  同样地，上述代码中hobby也不是变量；age后加的东西是为了设置默认值，若对象person没有age这个属性的话那么age默认为true而不是返回undefined

#### 方法

+ 在一个对象中绑定函数，成为这个对象的方法

+ ```javascript
  var xiaoming = {
      birth: 2002,
      age: function(){
          var y = new Date().getFullYear();
          return y - this.birth;
      }
  };
  ```

  上述代码中，this是方法内部的特殊变量，指向当前变量也就是xiaoming，所以this.birth就是xiaoming的birth属性(待更)

#### 参数

+ 参数：函数运行时需要的外部数据

+ 参数可以省略，省略的值变成undefined，且不可以省略前边的参数直接输入，后续参数，但可手动输入undefined

+ 函数参数如果是原始类型的值，传递方式为传值传递，意为若在函数体内修改参数的值，不会影响到外部参数；但如果是其他类型的值，传递方式则为地址传递，在函数体内部修改参数将对外部参数产生影响；然而，如果函数内部替换掉了整个参数的值，那么原始值将不受影响

+ 若出现同名参数，则取最后出现的那个值，即使最后的值被忽略了

+ argument关键字：指向函数输入的所有参数，用来读取参数，只能在函数体内部使用，如：

  ```javascript
  var f = function(one) {
      console.log(arguments[1]);
  }
  f(1, 2, 3)
  ```

  arguments[0]是第一个参数，arguments[1]是第二个参数，以此类推

  arguments[]可以在运行时被修改，`'use strict';`指令后不会影响到参数的值

  arguments.length：函数调用参数的个数

+ rest参数：用来获取多输入的参数：

  ```javascript
  var s = function(a, b, ...rest){
      console.log('a = ' + a);
      console.log('b = ' + b);
      console.log(rest);
  }
  ```

  如上，rest要与`...`连用

#### 立即调用函数

+ 函数后加圆括号表示调用函数
+ 用`function () {}`声明匿名函数时，若要立即调用，则需要在开头加上某一符号，防止让function打头，原因是JavaScript默认function打头时应解释为语句而不是表达式，所以结尾不应该是()。

+++

### This

+ This就是函数运行时的环境对象

+ this有四种使用场景：

  + 函数调用：

    ```javascript
    var x = 1;
    function test() {
        console.log(this.x);
    }
    ```

    这时，this指全局变量

  + 作为对象的方法调用：

    ```javascript
    var s = {
        name: 'xiaoming'
    }
    function test() {
        console.log(this.name);
    }
    
    s.abs = test;
    s.abs();
    ```

    调用函数s.abs()时，this指s这个对象

  + 作为构造函数调用：

    ```javascript
    function Student(name) {
        this.name = name;
    }
    
    var xiaoming = new Student('小明');
    ```

    此时，this就指新创建的对象

  + apply调用：待更

-----------

### 闭包

函数套函数，内部函数用来读取函数内部变量、使变量一直存在于内存中（待更）、封装对象的私有属性和私有方法（待更）。不能滥用闭包，否则会占用大量内存

### 数组

+ 数组是按次序排列的一组值，每个值都有编号（从0开始），整个数组用方括号表示

  `var arr = ['a', 'b', 'c']`

+ 可用Array()函数创建数组：`new Array(1, 2. 3);`

+ 数组可以先定义后赋值：

  ```javascript
  var arr = [];
  arr[0] = 'a';
  arr[1] = 'b';
  arr[2] = 'c';
  ```

+ 任何类型的数据都可以放进数组

+ 查看数组：`arr[键名]`

+ 数组本质是对象，键名是依次排列的0、1、2、3

+ 数组的length属性返回数组成员的数量，是键名中最大整数+1

+ indexOf()搜索某个值的位置（键名）

+ slice()就是数组版的substring()，返回一个区间内的值

+ push()向数组末尾添加若干个成员；pop()把数组最后一个成员删除；在头部添加成员用unshift()；删除第一个成员用shift()

+ reverse()把数组成员顺序倒过来

+ splice()：如`arr.splice(2, 3, 'a', 'ab)`意为从位置2开始删除3个成员，再从该位置添加'a'和'ab'

+ concat()把一个数组和另一个数组连接起来（不是修改数组而是返回一个新数组）

+ join()把数组的每一个元素都用某个符号连接起来，如：`arr.join(-)`

+ 数组中成员可以不连续，对arr[2]赋值后可以直接对arr[1000]赋值，中间的可以不管

+ 数组的length属性可更改，可添加/减少

+ 如果一个对象的所有键名都是非负整数，且有length属性，那么他就是个array-like-object。典型的array-like-object是arguments对象、字符串、大多数DOM元素（待更）。用slice方法可以把ALO变成真正的数组（待更）。

++++++++

### 运算符

#### 加法运算符

+ true + true // 2：布尔值会自动转为数值
+ 'a' + 'bc' // 'abc'：两个字符串相加会让两个字符串连在一起（引号不同也行）
+ 如果相加两项一个是字符串另一个不是，那么非字符串会先转换成字符串再进行连接
+ 运算子的不同，会导致不同的语法行为，被称为重载，只有加法运算符会发生重载，其他运算规则是一律转化为数值再进行运算
+ 运算子是对象的话，对象先转换成原始类型的值再运算

#### 比较运算符

+ 严格相等运算符：`===`值和数据类型都要相同才返回true，运算符两边是两个复合类型（对象、数组、函数）比较地址是否相同
+ 严格不相等运算符：`!==`

#### 布尔运算符

+ `!`：相反运算符，用于将布尔值变成相反值，常用两个!来把数值转换为布尔值

+ `&&`：且运算符，如果第一个算子的布尔值为true，则返回第二个算子的值；如果第一个算子的布尔值为false，则返回第一个算子的值，且不再对第二个算子进行运算（被跳过了），可用此特点代写if。且运算符可多次连用，若最后一个算子前全部都为true，则输出最后一个算子的值，反之输出第一个为false的值

+ `||`：或运算符，若第一个算子的布尔值为true，则返回第一个算子的值，且跳过第二个算子；若第一个算子布尔值为false，则返回第二个算子的值，常用于为一个变量设置默认值，如：

  ```javascript
  function (text) {
      text = text || '';
  }
  ```

  意为若没提供text参数则默认参数为空字符串

+ `?:`：三元条件运算符，如果第一个算子的布尔值为true，则返回第二个算子的值，否则返回第三个算子的值

#### 二进制位运算符

+ `|`：二进制或运算符，两边都是0时，返回0，否则返回1
+ `&`：二进制与运算符，两边都是1时，返回1，否则返回0
+ '~'：二进制否运算符，对一个二进制取反
+ `^`：异或运算符，若两个二进制不同，返回1，相同返回0
+ 位运算符只对整数起作用，如果算子不是整数会被转换成整数后再运算，返回值也是整数

### 转换数据类型

+ 强制转换数据类型：
  + Number()：将任意类型的值转化为数值

### Date

`var now = new Date();`

+ `now;`：获取现在时间
+ `now.getFullYear();`：获取当前年份
+ `now.getDate();`：获取当前日期
+ `now.getMonth();`：获取当前月份（0表示一月，1表示二月，以此类推）
+ `now.getHours();`：获取当前hour
+ `now.getMinutes();`：获取当前minute
+ `now.getSeconds();`：获取当前second

---------

### RegExp

+ 通过创建正则表达式来检查某一字符串是否合法

+ 直接给出字符，则是精确匹配；用`\d`匹配数字；用`\w`匹配字母或数字；`.`匹配任意字符；`\s`匹配一个空白符，包括空格、tab等；

+ 用`*`表示任意个字符（包括0）；用`+`表示至少一个字符；用`{n}`表示n个字符；用`{n, m}`表示n到m个字符（开区间）；用`?`表示0或1个字符

  示例：`\d{3}\s+\d{3, 8}`

+ 进阶：

  `[0-9a-zA-Z\_]`表示匹配一个数字或字母或下划线

  `[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0,19}`表示第一个字符匹配字母或下划线或`$`，跟在后面可写0到19个数字、字母、下划线或`$`

  `(J/j)ava(S/s)cript`可以匹配`Javascript`、`javascript`、`javaScript`或`JavaScriipt`

  `^`表示行的开始；`$`表示行的结束

+ 创建正则表达式：

  通过`/正则表达式/`：`var re1 = /ABC\-001/;`

  通过RegExp：`var = new RegExp('ABC\\-001');`（用RegExp时有些字符需要转义如：`\\`）

  用test()方法检测字符串是否合法：`re1.test('ABC\-001')`

+ 切分字符串：把输入的字符串分割（个人理解）

  普通写法：`'a b   c'.split(' '); // ['a', 'b', '', '', 'c']`

  正则表达式写法：`'a, ;  b,  ed ,   wad'.split(/[\s\,\;]+/); // ['a', 'b', 'ed', 'wad']`

+ 利用正则表达式分组`()`提取字符转中的内容：

  ```javascript
  var re = /^(\d{3})-(\d{3, 8})$/;
  var re = /^(\d{3})-(\d{3,8})$/;
  re.exec('010-24124');
  ```

+ 正则匹配默认时贪婪匹配，也就是尽可能多地匹配字符，若要采用非贪婪匹配，可在分组圆括号结尾前加`?`

+ 若想多次依次提取内容，可用`g`标志正则表达式：

  ```javascript
  var s = 'JavaScript, VBSript, Jscript and ECMAScript';
  var re = /[a-zA-Z]+Script/g;
  re.exec(s);
  ```

  多次输入`re.exec(s)`可依次返回JavaScript、VBScript、JScript、ECMAScript

### JSON(JavaScript Object Notation)

+ 字符串必须用双引号包裹，对象的键也必须用双引号包裹

+ 将对象序列化成JSON格式字符串：

  ```javascript
  var xiaoming = {
      name: '小明',
      age: 14,
      gender: true,
      height: 1.65,
      grade: null,
      'middle-school': '\"W3C\" Middle School',
      skills: ['JavaScript', 'Java', 'Python', 'Lisp']
  }
  var s = JSON.stringify(xiaoming);
  console.log(s);
  ```

  若要缩进后输出可用`var s = JSON.stringify(xiaoming, null, '  ');`

  第二个参数用于筛选属性，若只想输出某些属性，可输入由这些属性组成的数组，如：

  `var s = JSON.stringify(xiaoming, ['name', 'age', 'gender', ' ']);`

  还可以输入一个函数，这样的话每一个属性都会先被这个函数处理一遍

+ 反序列化：

  用JSON.parse()：

  `JSON.parse('{"name":"小明","age":14,"gender":true}');`

### 面向对象编程

+ JavaScript中对象可绑定一个原型，会继承该原型的属性

#### 创建对象

+ 用构造函数创建对象：

  先定义一个构造函数：

  ```javascript
  function Student(name){
      this.name = name;
      this.hello = function(){
          alert('Hello, ' + this.name + '!');
      }
  }
  var xiaoming = new Student('小明');
  xiaoming.name; // 小明
  xiaoming.hello();
  ```

  这样就创建了xiaoming这个对象，如果还用此方法创建了xiaohong、xiaojun等对象，他们的.helllo()函数是不相同的，为了节省内存，可将此函数绑定于他们共有的原型上，修改代码如下：

  ```javascript
  function Student(name){
      this.name = name;
  }
  
  Student.prototype.hello = function() {
      alert('Hello, ' + this.name + '!')
  }
  ```

#### 原型继承

+ 即创建一个子原型（个人理解）

+ 先定义出子原型：

  ```javascript
  function Primarystudent(props) {
      Student.call(this, props);
      this.grade = props.grade || 1;
  }
  ```

  借助中间对象实现原型链

  ```javascript
  function F() {};
  F.prototype = Student.prototype;
  Primarystudent.prototype = new F();
  Primarystudent.prototype.constructor = Primarystudent;
  ```

  继续在子原型上定义方法：

  ```javascript
  Primarystudent.prototype.getGrade = function() {
      return this.grade;
  };
  ```

  创建对象：

  ```javascript
  var xiaoming = new Primarystudent({
      name: '小明',
      grade: 16
  })
  ```

------------

### 浏览器对象

#### window

+ window有inner/outerWidth/Height属性，可查看浏览器窗口大小

#### navigator

+ navitor表示浏览器信息
+ appName属性查看名称
+ appVersion属性查看浏览器版本
+ language属性查看设置的语言
+ platform属性查看操作系统类型
+ userAgent属性查看浏览器设定的userAgent字符串
+ navigator的信息很容易被用户修改，所以JavaScript读取的值不一定是准确的

#### screen

+ screen表示屏幕的信息
+ width属性查看屏幕宽度
+ height属性查看屏幕高度
+ colorDepth属性查看颜色位数

#### location

+ location表示当前页面url信息
+ href属性获取当前页面url
+ location.assign('url')加载新页面
+ location.reload()重新加载页面

### DOM

+ HTML文档解析后就是一颗DOM树，可用JavaScript操作DOM以改变HTML结构

+ 获得DOM节点：`document.getElementById()`或`document.getElementsByTagName()`或CSS选择器：`document.getElementsByClassName()`，第一者返回唯一的DOM节点，后二者返回一组DOM节点：

  ```javascript
  var test = document.getElementById('test');
  var reds = document.getElementById('test-div').getElementByClass('red')
  ```

  可用children属性获得子节点：

  `var cs = test.children;`

  还可以通过`querySelector()`和`querySelectorAll()`来获得，括号里边用CSS中选择器的语法：

  `var q1 = document.querySelector('#q1')`

  后边可以加[n]表示第[n+1]个对应节点

  ***Tips***：id选择后可直接进行DOM操作，class和tag法要用中括号指定某一个结点之后才可以进行DOM操作

+ 更新DOM：

  + 修改文本：

    用innerHTML修改：

    ```javascript
    var p = document.getElementById('p-id');
    p.innerHTML = 'ABC<span style="color : red">red</span>XYZ';
    ```

    用innerText或textContent修改，此方式无法设置HTML标签

  + 修改CSS：

    ```javascript
    var p = document.getElementById('p0id');
    p.style.color = 'red';
    p.style.fontSize = 'bold';
    ```

    如上，JavaScript中需要使用驼峰式命名

+ 插入DOM：如果在空节点插入，直接用innerHTML；如果节点非空，可用appendChild把原有的一个节点插入到父节点的最后一个子节点：

  ```javascript
  var js = document.getElementById('js');
  var list = document.getElementById('list');
  list.appendChild(js);
  ```

  上述代码将js插入到了list中

  也可以创建一个新的节点再插入，用createElement()：

  ```javascript
  var list = document.getElementById('list');
  var haskell = document.createElement('p');
  haskell.id = 'haskell';
  haskell.innerText = 'Haskell';
  list.appendChild(haskell);
  ```

  如果要插入到某个特定位置：`parentElement.insertBefore(newElement, referenceElement);`

  newElement就会被插入到referenceElement之前，如：

  ```javascript
  
  var f = document.getElementById('test-list'); //父元素
  var a = document.getElementsByClassName('lang')[0];
  var b = document.getElementsByClassName('lang')[1];
  f.insertBefore(a, b);
  ```

  上述代码将a插在b前

+ 删除DOM：先拿到要删除的节点，再获取其父节点，再调用父节点的removeChild()即可：

  ```javascript
  var self = document.getElementById('to-be-removed');
  var parent = self.parentElement;
  parent.removeChile(self);
  ```

  还可以直接获取父节点就进行操作：

  ```javascript
  var a = document.getElementById('parent');
  a.removeChild(a.children[2]);
  ```

  删除子节点时子节点后边的数字会随时变化，要时刻小心

--------------

### 操作表单

+ 获取值：拿到了`<input>`之后，可用value属性获得值，包括文本框内容和select的选项，但如果是用radio或者是checkbox的话要用checked判断用户是否勾选选项
+ 改变值：可用value属性 直接赋值来改变文本框中的内容
+ 提交表单：用form的submit()或待更

### jQuery

#### 选择器

+ 按id查找：`var div = $('#abc');`

+ 按tag查找：`var s = $('div');`

+ 按class查找：`var s = $('.red');`

  若要找同时含有多个class的节点：`var s = $('.red.green');`

+ 按属性查找：`var s = $('[属性名=值]');`若值含空格等特殊字符时要用双引号包裹

+ 组合查找：`var s = $('div[name = "Joe"]');` `var b = $('div.firstClass');`

+ 层级选择器：`var s = $('div p');`

+ 子代选择器（只能是父子关系）：`var s = $('div > p');`

拿到对象后，还可以进一步地进行查找过滤：

+ 在子节点中查找：用find()

  `var p = ul.find('.dy');`

+ 从子节点向上查找：用parent()

  `var p = ul.parent('div[name = 'Joe']');`

+ 同级节点查找：用next()或prev()，指上一个或下一个节点

+ filter()可以过滤掉不满足要求的节点：`p.filter('.red')`

+ 如果获得了多个节点，可用last()、first()、slice()来去掉不必要的节点：

  ```javascript
  var s = b.firrst();
  var s = b.last();
  var s = b.slice(2,4);
  ```

#### 操作DOM

+ 用text()和html()获取节点的文本和原html文本

+ 修改文本和html也用text()和html()

  ```javascript
  var s = $('p.red');
  s.text('Hello world');
  s.html('<span>Hello</span> world');
  ```

+ jQuery对象可包含任意个dom节点，进行操作时操作将会执行于包含的每一个节点

+ 修改CSS：用jQuery对象的css('name', 'value')，如：

  `$('li.red').css('color', 'red').css('backgroundColor', 'black');`

+ 修改DOM的class属性：

  hasClass('className')用于查看是否含有某class

  addClass('className')用于添加class

  removeClass('className')用于删除class

+ 隐藏/显示DOM：用hide()或show()

+ 获取DOM信息：用height()、width()等可直接获取

+ 操作DOM的属性：用attr('attributeName')获取属性值，用removeAttr('attributeName')删除某属性，用attr('attributeName', 'value')改变某属性的值；prop()用法与attr()类似，更改radio、checkbox时用prop()（亲测）

+ 对于表单元素用val()查看值，用val('value')更改值

+ 添加DOM：除了用html()外，还可以用append()：

  ```javascript
  var ul = $('#list'); //拿到父节点
  var s = document.createElement('li');
  s.innerHTML('<span>JavaScript</span>');
  ul.append(s);
  ```

  append()可以传入字符串也可以传入对象也可以传入函数返回值；append()把DOM添加到最后，prepend()把DOM添加到最前；若添加的DOM已经存在于html文档中，会先删除此DOM再添加，也就是移动DOM；如果要再特定位置插入DOM，用after()或before()，如：

  ```javascript
  var s = $('#Python'); // 定位到同级元素
  s.after('<p>Javascript</p>'); //将DOM插入到s后面
  ```

#### 事件

+ 用on来绑定事件：

  ```javascript
  var a = $('#test-link');
  a.on('click', function(){
      alert('Helllo!');
  })
  ```

  或直接用click：

  ```javascript
  var a = $('#test-link');
  a.click(function(){
      alert('Hello!');
  })
  ```

+ on能绑定的事件：

  + 鼠标：

    click

    dblclick

    mouseenter

    mouseleave

    mousemove

    hover

  + 键盘：

    keydown

    keyup

    keypress

  + 其他：

    focus：获得焦点时触发

    blur：失焦时触发

    change：`<input>`、`<select>`、`<textarea>`内容改变时触发

    submit：form提交时触发

    ready：当页面载入DOM树并完成初始化之后触发，多用于document，以保证选择器能选到正确的节点，如：

    ```javascript
    $(document).ready(function(){
        $('#testForm').submit(function(){
            alert('Submit!');
        });
    })
    ```

    还可以简化为$(function(){...})，如：

    ```javascript
    $(function(){
        console.log('init A')
    })
    ```

+ 用off取消事件绑定：`off('click', function)`，此方法只能取消绑定已命名的函数，对于匿名函数，可用`off('click')`取消所有click绑定的函数，或用`off()`取消绑定的所有事件

#### 动画 

+ `hide()`、`show()`、`toggle()`：可以让DOM从左上角消失/出现，传入时间参数（以毫秒为单位）可控制消失事件，也可传入`'slow'`、`'fast'`

+ `slideUp()`、`slideDown()`、`slideToggle()`：使DOM从上边界开始消失/出现，参数同上

+ `fadeIn()`、`fadeOut()`、`fadeToggle`：使DOM淡入淡出，参数同上

+ `animate()`：自定义动画，传入参数为最终的CSS状态，jQuery会自动地在给定时间内过渡到此状态，如：

  ```javascript
  var div = $('#test-animate');
  div.animate({
      opacity: 0.25,
      width: '25px',
      height: '15px'
  }, 3000, function(){
      console.log('动画完成');
  })
  ```

+ 动画可以串行执行：

  ```javascript
  var div = $('#test-animate');
  div.hide(5000)
     .delay(3000)
     .animate({
      width: '2132px',
      height: '126px',
      opacity: 0.25
  }, 2000, function(){
      console.log('动画已完成')；
  })
  ```

### 定时器

+ 设置定时器：`setInterva(funciton(){}, 100);`function是要执行的函数，定时器开始后每隔一个给定时间就会将函数放入执行队列
+ 清除定时器：`clearInterval()`写了定时器就一定要清除定时器，否则会一直占用内存