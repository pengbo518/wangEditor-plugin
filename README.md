# wangEditor-plugin
富文本编辑器wangEditor【全屏】【源码】插件

使用方法：

依赖jquery，须先引入jquery

引入wangEditor-plugin.css和wangEditor-plugin.js两个文件

在wangEditor的create方法调用后，再调用插件的初始化方法，如：

var E = window.wangEditor; 
var editor = new E('#editor');
editor.create();
// 全屏
E.fullscreen.init('#content');
// 源码
E.viewsource.init('#content', editor);
