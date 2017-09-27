/*
* @Author: Marte
* @Date:   2017-09-23 10:41:40
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-27 23:46:10
*/

'use strict';
jQuery(document).ready(function($) {
    //加载背景图片
    /*alert("beginning...");
    var strUrl = "";
    var NewXmlDoc = loadXML("../xml/config.xml");
    var NewTmpTag = NewXmlDoc.getElementsByTagName("background-images");
    var strUrl = NewTmpTag[0].getElementsByTagName("now-image")[0].firstChild.nodeValue;
    alert(strUrl);*/
    //元素hover()特效
    $(".changeImg").hover(function(){
    $(".changeImg span").css("color","#1ADACF");
},function(){
    $(".changeImg span").css("color","white");
});
    $(".helpTip").hover(function(){
    $(".helpTip span").css("color","#1ADACF");
},function(){
    $(".helpTip span").css("color","white");
});





});

//加载xml文件
/*function loadXML(xmlFile) {
        alert("beginning...1");

            var xmlDoc, xmlhttp;
            if (window.XMLHttpRequest) {//兼容 IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {//兼容 IE5、IE6
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", xmlFile, false);  //使用HTTP GET初始化HTTP请求
            xmlhttp.send(); //发送HTTP请求并获取HTTP响应
                alert("beginning...2");

            xmlDoc = xmlhttp.responseXML;  //获取XML文档
            return xmlDoc;
}*/

//背景图片切换
function changeBg(){
    var randomNumber = parseInt(Math.random()*(4050-1+1) + 1);
    var imgBgUrl =
    "background-image: url('https://img.infinitynewtab.com/wallpaper/"+randomNumber+".jpg');"
    $(".page").attr("style",imgBgUrl);

    // //保存图片路径
    // XmlDocument xmlDoc=new XmlDocument();
    // xmlDoc.Load("config.xml");
    // XmlNode xn=xmlDoc.SelectSingleNode("background-images");
    // XmlNodeList xnl=xn.ChildNodes;
    // alert("message");
    // XmlNode imgUrl=xnl[0];
    // alert(imgUrl);
    // XmlElement xe=(XmlElement)imgUrl;
    // xe.SetAttribute("now-image",imgBgUrl);
    // xmlDoc.Save("config.xml");//保存。
    //





}



window.onload = function() {
    var input = document.getElementById("_easyui_textbox_input1");
    input.focus();
};


$(document).keydown(function(event){

console.log(event.keyCode);

});




