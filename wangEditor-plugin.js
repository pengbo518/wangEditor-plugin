/**
 * 全屏
 */
window.wangEditor.fullscreen = {
    // editor create 之后调用
    init: function(editorSelector){
        $(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_fullscreen" href="javascript:;" onclick="window.wangEditor.fullscreen.toggleFullscreen(\'' + editorSelector + '\')">全屏</a></div>');
    },
    toggleFullscreen: function(editorSelector){
        $(editorSelector).toggleClass('fullscreen-editor');
        if($(editorSelector + ' ._wangEditor_btn_fullscreen').text() == '全屏'){
            $(editorSelector + ' ._wangEditor_btn_fullscreen').text('退出全屏');
        }else{
            $(editorSelector + ' ._wangEditor_btn_fullscreen').text('全屏');
        }
    }
};

/**
 * 查看源代码
 */
window.wangEditor.viewsource = {
    // editor create 之后调用
    init: function(editorSelector, oEditor) {
        var editor = oEditor;
        $(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_viewsource" href="javascript:;" id="btn_viewsource">源码</a></div>');
        $(editorSelector).on("click", "#btn_viewsource", function () {
            editorHtml = editor.txt.html();
            if($(editorSelector + ' ._wangEditor_btn_viewsource').text() == '源码'){
                editorHtml = editorHtml.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
                $(editorSelector + ' ._wangEditor_btn_viewsource').text('返回');
            }else{
                editorHtml = editor.txt.text().replace(/&lt;/ig, "<").replace(/&gt;/ig, ">").replace(/&nbsp;/ig, " ");
                $(editorSelector + ' ._wangEditor_btn_viewsource').text('源码');
            }
            editor.txt.html(editorHtml);
            // 更新编辑器的内容
            editor.change && editor.change();
        });
    }
};