# CSS笔记

[TOC]

### 层叠与继承

+ 层叠：多条同级别的选择器对一个元素使用的时候最后一个规则生效

+ 继承：子元素的某些属性会与父元素相同，如：

  ```HTML
  <div>
      <p>
          我将继承div的某些元素。
      </p>
  </div>
  ```

  ```css
  div {
      color: red;
  }
  ```

+ 控制继承：三大继承值：inherit、initial、unset

  + inherit：继承父元素属性

  + initial：属性值与浏览器默认样式相同，若浏览器无此设置则于inherit相同

  + unset：如果是可继承属性，则为inherit；反之为initial

    示例：`a {color: inherit;}`

  + 重设所有属性：` blockquote {all: unset/inherit/initial;}`

+ 优先级：选择器优先级计算方法：计分

  + 千位：内联样式
  + 百位：ID选择器
  + 十位：类选择器、属性选择器、伪类
  + 个位：（伪）元素选择器
  + 计算时不可以进位，即20个元素选择器也抵不过一个类选择器
  + 使用! important可以覆盖以上所有优先级，示例：`a {color: red ! important;}`
  + 覆盖! important的方法为在其后面加一个相同优先级的! important或加更高优先级的! important

--------------

### 选择器

+ 元素选择器：`h1 {}`

+ 类选择器（class）：`.box {}`

+ 指向特定元素的类选择器：`span.special {}`选定class值为special的span

+ id选择器：`#id {}`

+ 全局选择器：`* { }`全部都选

+ 标签属性选择器（a、class、special均为举例）：

  + `a[class] {}`：选择带有class的a
  + `a[class="special"] {}`：选择class值为special的a
  + `a[class~="special"] {}`：选择class值中有special的a（special须被空格包围）
  + `a[class|="special"] {}`：选择class值为special的a或以special-开头的a
  + `a[class^="special"] {}`：选择class以special开头的a
  + `a[class$="special"] {}`：选择class以special结尾的a
  + `a[class*="special"] {}`：选择class中含special的a（对比`a[class~="special"] {}`）
  + 在方括号结尾处加i可使选择器忽略大小写，如：`a[class^="b"]`会选择class以b或B开头的a

+ 伪类选择器：选定在某一状态的元素，如要使文章中第一段始终粗体：

  `article p:first-child {font-weight: bold;}`

  意为在article的子元素中对第一个p附加上述规则

  类似的有：

  + `: only-child`：该元素为唯一子元素
  + `: hover`：鼠标悬浮

+ 伪元素选择器：选定某一元素中的一部分，如要使p中的第一行始终粗体：

  `p::first-line {font-weight: bold;}`

+ 结合伪元素选择器和伪类选择器：

  `article p:first-child::first-line {font-weight:bold;}`

+ 在文本开头或结尾增添内容：

  + `.special ::before {content: "This should show before the other content."}`
  + `.special ::after {content: "This should show after the other content."}`

+ [伪类选择器和伪元素选择器参考表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

+ 后代选择器：空格 如：`div p {color: red;}`选定div后代中的p（不论是第几代）

+ 子代选择器：> 如：`div > p {color: red;}`选定div第一代中的p

+ 相邻兄弟：+ 如：`h1 + p {color: red;}`选定与h1同等级的相邻的p

+ 通用兄弟：~ 如：h1 ~ p {color: red;}选定h1之后的所有同等级的p

--------------

### 盒子模型

#### 块级盒子

块级盒子会换行、推开周围元素

<img src="C:\Users\202013\Desktop\盒子模型.png" alt="Alt text" style="zoom:38%;" />

+ Content Box:用width和height设置属性
+ Padding Box:用padding设置属性
+ Margin Box:用margin设置属性
  
  + 外边距折叠：当两个盒子的外边距相接时，这俩盒子之间的外边距不会是两个外边距相加之和，而是取最大的外边距的值
+ Border Box:用border设置属性

+ 标准盒子模型

  <img src="C:\Users\202013\Desktop\标准盒子模型.png" alt="Alt text" style="zoom:38%;" />

+ IE盒子模型

  <img src="C:\Users\202013\Desktop\IE盒子模型.png" alt="Alt text" style="zoom:38%;" />

+ 标准盒子转IE盒子：`.box {box-sizing: border-box}

#### 内联盒子

内联盒子不换行、不推开周围元素

#### 中间态盒子

不换行、但推开其他元素：`.box {display: inline-block;}`

------------

### 背景样式

+ background-color换颜色  rgba(0, 0, 0, 0)：前三个数表示颜色，第四个数表示透明度

+ background-image: url(图片地址)

  加图片，大于边框的图片只显示部分，小于边框的图片用平铺填充，填充设置：

  + background-repeat: no repeat
  + background-repeat: repeat-x
  + background-repeat: repeat-y
  + background-repeat: repeat

+ background-size更改背景图片大小 可用关键字：cover、contain

+ background-position:背景图像定位

  页面左上角坐标是(0,0)，对应x轴y轴坐标，示例：`background-position: 40px 20px`

+ background-image: linear-gradient(“方向”， 颜色， 颜色)：线性渐变

+ background-image: radial-gradient()：径向渐变

+ background系列属性可在同个括号内用逗号分各指向对应图片的值，当值不够用时会自动循环

+ background-attachment：设置背景移动与鼠标滚动的关系

-----------------

### 边框

+ border-radius设置边框圆角 输入两个数值可以设定水平圆角和竖直圆角

-------

### 文本自定义样式

+ 添加字体栈：font-family {"字体1", "字体2"， ....}
+ em：父元素的字体大小
+ text-transform：转换字体（大小写、全角/半角）
+ text-decoration：文本装饰（下划线、删除线...），可一次添加多个关键字
+ text-shadow: 后边跟4个值，分别指定水平位移、垂直位移、模糊半径、阴影颜色
+ text-align：文本对齐
+ line-height：行高，推荐1.5~2
+ letterr-spacing/word-spacing：调整字母/单词间距

----------

### 列表样式

+ list-style-image：把序号变为图片
+ list-style-position：自定义序号位置
+ 插入HTML有序列表知识：
  + `<ol start="4"></ol>`：列表项从4开始计数
  + `<ol start="4" reversed>`：列表项从4开始倒数
  + `<li value="4">`：此项为4

---------

### 链接样式

+ 链接状态排列有顺序：a、a:link、a:visited、a:focus、a:hover、a:active----LoVe Fears HAte

---------

### FLEX

+ 在想要用flex布局的元素的父元素中添加属性：`display: flex`，该父元素被称为父容器，存在两条轴，默认情况下是水平的主轴和竖直的交叉轴
+ 在父容器上设置属性：
  + flex-direction：设置子元素排列方向
  + flex-wrap：决定子元素排不下时如何换行
  + flex-flow：为flex-direction和flex-wrap的简写
  + justify-content：设置子元素在主轴上的对齐方式
  + align-items：设置子元素在交叉轴上的对齐方式
  + align-content：待更
+ 在元素中用属性order可以设置排列顺序：`border: 1`
+ flex-grow设置元素放大比例，若设置为0，则即使有剩余空间也不放大；如果全部项目都是1，那么他们将等分剩余空间；如果一个项目是2，其他项目是1，那么这个项目所占剩余空间（如果有的话）将会是其他项目的2倍
+ flex-shrink设置元素缩小比例，与flex-grow类似
+ align-self：设置某单一项目的特殊对齐方式
+ flex-basis：待更

------------

### GRID

#### 容器属性

+ 同Flex一样，在父容器上设置`display: grid`

+ grid排列只对最容器的顶层子元素生效

+ 网格排列可设置为行内元素：`display: inline-grid`

+ grid-template-colums：定义列宽，定几列就写几个数字

+ grid-template-rows：定义行宽，定几行就写几个数字

+ 定义行/列宽时可用`repeat()`函数，如：`grid-template-columns: repeat(3, 33.3%)`；重复某种规律也行：`grid-template-rows: repeat(3, 100px 20px 40px)`

+ auto-fill：希望每一行/列容纳尽可能多的项目是使用：`grid-template-columns: repeat(auto-fill, 100px)`

+ fr：表示比例，如：`grid-template-rows: 50px 1pr 2pr`，表示第一行宽为50px，第三行行宽是第二行行宽的两倍

+ 方括号可为行/列线命名，如：`grid-template-rows: [cl] 50px [cl1] 30px [cl2]`

+ row-gap设置行间距，column-gap设置列间距，gap设俩，前row后column

+ grid-template-areas：定义区域，如：

  ```css
  .container {
      display: grid;
      grid-template-rows: 100px 100px 100px;
      grid-template-columns: 100px 100px 100px;
      grid-template-areas:'a b c'
                          'd e f'
                          'g h i'
  }
  ```

  如果某些区域不需要利用，则用 . 表示

+ 每个区域的起始/终止网格线会被命名为“区域名-start/end"

+ grid-auto-flow：设置项目排列顺序

+ justify-items/align-items：设置单元格中内容对齐方式

+ place-items：align-items和justify-items的简写

+ justify-content/align-content：设置整个内容（所有格子）的对齐方式

+ place-content：align-content和justify-content的简写

+ grid-auto-rows/grid-auto-columns：设置网页自动生成的单元格的大小

#### 项目属性

+ grid-column/row-start-end：设置单元格的位置（设置起始/终止行/列）
+ grid-row/column：是上一项的简写
+ grid-area：指定项目放在哪个区域
+ justify/align-self：指定单个项目中内容的对齐方式

--------

### 定位

+ 相对定位：position: relative 然后添加top、left等值
+ 绝对定位：position: absolute 同上
+ 固定定位（可随页面滚动）：position: fixed 同上
+ 粘性定位：position: sticky

---------

### 多列布局

用column-count指定需要多少列，或用column-width指定以某个宽度容纳尽可能多的列

