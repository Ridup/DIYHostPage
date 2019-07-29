/*
* @Author: Marte
* @Date:   2017-09-23 10:41:40
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-27 23:46:10
*/

'use strict';
jQuery(document).ready(function ($) {
  //加载背景图片
  if (!window.localStorage) {
    $.messager.show({
      title: 'Tips',
      msg: 'Your browser is not support localStorage !',
      showType: 'show',
      style: {
        right: '',
        top: document.body.scrollTop + document.documentElement.scrollTop,
        bottom: ''
      }
    });
  } else {
    var currentBG = window.localStorage.getItem("currentBG");
    $(".page").attr("style", currentBG);
  }

  /*alert("beginning...");
  var strUrl = "";
  var NewXmlDoc = loadXML("../xml/config.xml");
  var NewTmpTag = NewXmlDoc.getElementsByTagName("background-images");
  var strUrl = NewTmpTag[0].getElementsByTagName("now-image")[0].firstChild.nodeValue;
  alert(strUrl);*/
  //元素hover()特效
  $(".changeImg").hover(function () {
    $(".changeImg span").css("color", "#1ADACF");
  }, function () {
    $(".changeImg span").css("color", "white");
  });
  $(".helpTip").hover(function () {
    $(".helpTip span").css("color", "#1ADACF");
  }, function () {
    $(".helpTip span").css("color", "white");
  });
  $(".cloudMusic").hover(function () {
    $(".cloudMusic span").css("color", "#C20C0C");
  }, function () {
    $(".cloudMusic span").css("color", "white");
  });

});

//背景图片切换
function changeBg() {
  var randomNumber = parseInt(Math.random() * (4050 - 1 + 1) + 1);
  var imgBgUrl =
    "background-image: url('https://img.infinitynewtab.com/wallpaper/" + randomNumber + ".jpg');"
  $(".page").attr("style", imgBgUrl);

  //保存图片路径
  if (!window.localStorage) {
    $.messager.show({
      title: 'Tips',
      msg: 'Your browser is not support localStorage !',
      showType: 'show',
      style: {
        right: '',
        top: document.body.scrollTop + document.documentElement.scrollTop,
        bottom: ''
      }
    });
  } else {
    window.localStorage.setItem("currentBG", imgBgUrl);
  }
}

// 访问音乐
function toMyCloudMusic(){
  window.open("http://118.24.103.162/music/","_blank");
}


window.onload = function () {
  var input = document.getElementById("_easyui_textbox_input1");
  input.focus();
};


$(document).keydown(function (event) {

  console.log(event.keyCode);

});




