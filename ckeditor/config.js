/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
// Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';

    config.language = 'zh-cn'; // 配置语言
//
//    config.uiColor = '#fff'; // 背景颜色
//
    config.width = '2000px'; // 宽度

    config.height = '2000px'; // 高度
//
//    config.skin = 'office2003';// 界面v2,kama,office2003
//
//     config.toolbar = 'Full';// 工具栏风格Full,Basic
//
//    config.font_names='宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;' +
//    '隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;'+ config.font_names;

    //  config.htmlEncodeOutput = true;
    //config.startupOutlineBlocks = false;

    //配置默认配置
    /**config.language = 'zh-cn'; //配置语言
     config.uiColor = '#FFF'; //背景颜色
     config.width = 400; //宽度
     config.height = 400; //高度
     config.skin = 'v2'; //编辑器皮肤样式
     // 取消 “拖拽以改变尺寸”功能
     config.resize_enabled = false;
     // 使用基础工具栏
     config.toolbar = "Basic";
     // 使用全能工具栏
     config.toolbar = "Full";
     //使用自定义工具栏
     config.toolbar =
     [
     ['Source', 'Preview', '-'],
     ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', ],
     ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
     ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar','PageBreak'],
     '/',
     ['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript'],
     ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
     ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
     ['Link', 'Unlink', 'Anchor'],
     '/',
     ['Format', 'Font', 'FontSize'],
     ['TextColor', 'BGColor'],
     ['Maximize', 'ShowBlocks', '-', 'About']
     ];*/
    config.image_previewText=' ';
    var strFullPath=window.document.location.href;
    var strPath=window.document.location.pathname;
    var pos=strFullPath.indexOf(strPath);
    var prePath=strFullPath.substring(0,pos);
    var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
    var webPath=prePath+postPath;
    /*** 文件上传功能的配置-----------------------
     */
    config.filebrowserBrowseUrl = webPath+'/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = webPath+'/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = webPath+'/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = webPath+'/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = webPath+'/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = webPath+'/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';

};
