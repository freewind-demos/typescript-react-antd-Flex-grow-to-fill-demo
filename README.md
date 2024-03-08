TypeScript React AntDesign Flex Grow to Fill Demo
=================================

Flex组件默认就是block+flex，子元素会占满空间。

如果指定部分子元素的宽度，希望其它子元素自动占满剩余空间，需要指定`flex:1`（即flex-grow: 1），不然各部分宽度不对

如果Flex中有Flex，子Flex也需要指定`flex: 1`，否则不能占满。

总之就是使用Flex组件并且在部分子元素上添加`flex:1`来控制

```
npm install
npm start
```

It will open page on browser automatically.
