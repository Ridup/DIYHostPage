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
    let currentBGUrl = window.localStorage.getItem("currentBGUrl");
    if(!currentBGUrl){
        currentBGUrl = 'https://img.infinitynewtab.com/wallpaper/3278.jpg';
        window.localStorage.setItem("currentBGUrl", currentBGUrl);
    }
    const bgImgAttr = "background-image: url(" + currentBGUrl + ");"
    $(".page").attr("style", bgImgAttr);
    getFontColor();
  }

  /*alert("beginning...");
  const strUrl = "";
  const NewXmlDoc = loadXML("../xml/config.xml");
  const NewTmpTag = NewXmlDoc.getElementsByTagName("background-images");
  const strUrl = NewTmpTag[0].getElementsByTagName("now-image")[0].firstChild.nodeValue;
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
  const randomNumber = parseInt(Math.random() * (4050 - 1 + 1) + 1);
  const imgBgUrl = 'https://img.infinitynewtab.com/wallpaper/' + randomNumber + '.jpg';
  const bgImgAttr = "background-image: url(" + imgBgUrl + ");"
  $(".page").attr("style", bgImgAttr);

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
    window.localStorage.setItem("currentBGUrl", imgBgUrl);
  }
  getFontColor();
}

function getFontColor() {
  const currentBGUrl = window.localStorage.getItem("currentBGUrl");
  let img = new Image(100,100);
  img.src = currentBGUrl + '?' + new Date().getTime();
  img.crossOrigin = "Anonymous";
  img.addEventListener('load', function() {
    const vibrant = new Vibrant(img, 64, 1);
    const swatches = vibrant.swatches()||{};
    let populations = Object.keys(swatches).map(key=>swatches[key]&&swatches[key].getPopulation());
    let number = Math.max(...populations.filter(i=>i!==undefined));
    let swatchKey = Object.keys(swatches).filter(key=>swatches[key]&&swatches[key].getPopulation()===number);
    console.log(populations,"===="+findTextColor(swatches[swatchKey]&&swatches[swatchKey].getHex()));
    $("#myTag li,#myTag a").css("color",findTextColor(swatches[swatchKey]&&swatches[swatchKey].getHex()));
    for (const swatch in swatches)
      if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
        console.log("%c"+swatches[swatch].getHex(),"color: "+swatches[swatch].getHex());
        console.log("%c字体颜色：","color: "+findTextColor(swatches[swatch].getHex()));
        console.log("%c字体颜色getTitleTextColor：","color: "+swatches[swatch].getTitleTextColor());
        console.log("%c字体颜色getBodyTextColor：","color: "+swatches[swatch].getBodyTextColor());
        console.log("getPopulation：",swatches[swatch].population);
      }
  });
}

/**
 * 转换字体颜色
 *
 * @param {array} rgbArr rgb数组
 */
function resBgColor(rgbArr) {
  // 当color值大于128时,color值偏向255,即#ffffff,此时字体颜色应为#000000
  // 当color值小于128时,color值偏向0,即#000000,此时字体颜色应为#ffffff
  const color = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
  return color? '#000000': '#ffffff'
}

/**
 * 获取字体颜色
 * @param colorValue #000 #FFF rgb(...)
 * @returns {string|boolean}
 */
function findTextColor(colorValue) {
  // #123456或者rgb(12,34,56)转为rgb数组[12,34,56]
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  const that = colorValue;
  if (/^(rgb|RGB)/.test(that)) {
    // 处理rgb转为数组
    const aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return resBgColor(aColor);
  } else if (reg.test(that)) {
    // 处理十六进制色值
    let sColor = colorValue.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return resBgColor(sColorChange);
    } else {
      return false;
    }
  } else {
    return false;
  }
}


window.onload = function () {
  const input = document.getElementById("_easyui_textbox_input1");
  input.focus();
};


$(document).keydown(function (event) {
  console.log(event.keyCode);
});




