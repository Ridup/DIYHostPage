'use strict';
function baiduSearch(value,name){
    var url = "";
    if(name=="net"){
        if(value!=""){
            url="https://www.baidu.com/s?wd="+value;
        }else{
            url="https://www.baidu.com/";
        }
    }
    if(name=="picture"){
        if(value!=""){
            url="http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word="+value;
        }else{
            url="https://image.baidu.com/";
        }
    }
    window.open(url,"_blank");
}

function googleSearch(value,name){
    var url = "";
    if(name=="net"){
        if(value!=""){
            url="https://www.google.com.hk/search?safe=strict&source=hp&q="+value;
        }else{
            url="https://www.google.com.hk/";
        }
    }
    if(name=="picture"){
        if(value!=""){
            url="https://www.google.com.hk/search?q="+value+"&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi92vHE98HWAhWMTrwKHXjSA1kQ_AUICygC";
        }else{
            url="https://www.google.com.hk/imghp?hl=zh-CN&tab=wi";
        }
    }
    window.open(url,"_blank");
}

function bingSearch(value,name){
    var url = "";
    if(name=="net"){
        if(value!=""){
            url="http://cn.bing.com/search?q="+value;
        }else{
            url="http://cn.bing.com/";
        }
    }
    if(name=="picture"){
        if(value!=""){
            url="http://cn.bing.com/images/search?q="+value;
        }else{
            url="http://cn.bing.com/images/trending?form=HDRSC2";
        }
    }
    window.open(url,"_blank");
}

function taobaoSearch(value,name){
    var url = "";
    if(name=="goods"){
        if(value!=""){
            url="https://s.taobao.com/search?q="+value;
        }else{
            url="https://www.taobao.com/";
        }
    }
    if(name=="shops"){
        if(value!=""){
            url="https://shopsearch.taobao.com/search?app=shopsearch&q="+value;
        }else{
            url="https://www.taobao.com/";
        }
    }
    window.open(url,"_blank");
}

function jdSearch(value,name){
    var url = "";
    if(value!=""){
            url="https://search.jd.com/Search?keyword="+value+"&enc=utf-8";
        }else{
            url="https://www.jd.com/";
    }

    window.open(url,"_blank");
}

function crazySearch(value,name){
    var url = "";
    if(value!=""){
            url="http://ifkdy.com/search?key="+value;
    }else{
            url="http://ifkdy.com/";
    }
    window.open(url,"_blank");
}

function btSearch(value,name){
    var url = "";
    if(name=="digbt"){
        if(value!=""){
            url="http://www.digbt.org/search/"+value+"/?u=y";
        }else{
            url="http://www.digbt.org/";
        }
    }
    if(name=="btsou"){
        if(value!=""){
            url="http://www.btsou.co/list/"+value+"/1";
        }else{
            url="http://www.btsou.co";
        }
    }
    window.open(url,"_blank");
}

/*function panSearch(value,name){
    var url = "";
    if(name=="goods"){
        if(value!=null){
            url="http://www.57fx.com/search/"+value;
        }else{
            url="http://www.57fx.com/";
        }
    }
    window.open(url,"_blank");
}*/






function topRight(){
            $.messager.show({
                title:'使用说明',
                msg:'(^_^)',
                showType:'show',
                style:{
                    left:'',
                    right:0,
                    top:document.body.scrollTop+document.documentElement.scrollTop,
                    bottom:''
                }
            });
        }
