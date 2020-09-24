# HTML笔记

要记的标签：

+ `<blockquote>`：块引用
+ `<cite>`：引用，标注来源
+ `<abbr>`：缩写，带属性title
+ `<address>`：联系方式
+ `<del>`：删除线（不过CSS貌似可以实现）
+ `<ul> <ol> <li>`：列表
+ `<select>`创建下拉选项，搭配`<option>`使用
+ `<input>`：
  + `type="text"`：让用户输入文本
  + `type="radio"`：创建单选按钮；创建多个`<input type="radio">`后将name属性都设置为相同值即可让用户在多个选项中选择
  + `type="checkbox"`：创建复选按钮
  + `type="reset"`：重置文本框中的内容，但此元素需要和文本框在同一`<form>`下