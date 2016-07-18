//父级
function getPos(obj){
    var l=0;
    var t=0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;

        obj=obj.offsetParent;
    }
    return {left: l, top: t};
}
//回到顶部
function Top(id,st){
    var oBtn=document.getElementById(id);
    var timer;
    oBtn.onclick=function(){
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        var start=scrollTop;//初始值
        var dis=st-start;//距离

        var count=Math.floor(1000/30);
        var n=0;
        clearInterval(timer);
        timer=setInterval(function(){
            n++;

            var a=n/count;
            var cur=start+dis*a;
            document.documentElement.scrollTop=document.body.scrollTop=cur;
            if(n==count){
                clearInterval(timer);
            }
        }, 30);
    };
}
//补零
function toDouble(n){
    return n<10?'0'+n:''+n;
}
//随机数
function rnd(n,m){
    return parseInt(Math.random()*(m-n)+n)
}
//定位
function getPos(obj){
    var l = 0;
    var t = 0;
    while(obj){
        l += obj.offsetLeft;
        t += obj.offsetTop;
        obj = obj.offsetParent
    }
    return {left:l,top:t}
}
window.onload = function () {
    //图片时钟
    var oClock=document.getElementById('top_tp_md');
    var aC_Img=oClock.getElementsByTagName('img');
    function clock(){
        var oDate=new Date();
        var str=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());
        for(var i=0; i<aC_Img.length; i++){
            move(aC_Img[i], {top: -35*str.charAt(i)}, {easing: 'linear', duration: 500});
        }
    }
    clock();
    setInterval(clock, 1000);
    //随机位置
    var oTop_bm_lf = document.getElementById('top_bm_lf');
    
        for(var i = 0; i < 10; i++){
            var oBubble = document.createElement('div');
            oBubble.style.left = rnd(0,510)+'px';
            oBubble.style.top = rnd(0,660)+'px';
            // oBubble.style.width = rnd(20,30)+'px';
            // oBubble.style.height = this.offsetWidth+'px';
            oBubble.className = 'bubble';
            oTop_bm_lf.appendChild(oBubble)
        }
        var oBubble = oTop_bm_lf.getElementsByTagName('div')
        function on(){
            for (var i = 0; i < oBubble.length; i++) {
                move(oBubble[i],{top:rnd(0,660),left:rnd(0,510)},{
                    duration:10000,
                    easing:'linear',
                    complete:function(){
                        on();
                    }
                })
            }
        }
        on();
    //吸顶条
    var oTop_tp = document.getElementById('top_tp');
    var oTop_tp_a = document.getElementById('top_tp_a');
    var top = getPos(oTop_tp).top;
    var oScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(oScroll >= top){
        oTop_tp.style.position = 'fixed';
        oTop_tp.style.top = 0;
        oTop_tp_a.style.display = 'block';
    }else{
        oTop_tp.style.position = '';
        oTop_tp_a.style.display = 'none';
    }
    //首页
    Top('index',0);
    Top('iDo',650);
    Top('work',950);
    Top('me',1550);
    //banner右侧圆
    var oPica = document.getElementById('pica');
    var oPicb = document.getElementById('picb');
    var oPicc = document.getElementById('picc');
    var iNow=0;
    function circle(chunk){
        iNow+=0.1;
        if(iNow >= 360){
            iNow = 0
        }
        chunk.style.transform = 'rotate('+iNow+'deg)'
    }
    setInterval(function(){
        circle(oPica);
        circle(oPicb);
        circle(oPicc);
    },30);
    //案例
    //js案例
    function hoverDir(obj, ev){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
        var y=getPos(obj).top+obj.offsetHeight/2-scrollTop-ev.clientY;
        return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
    }
    var oBd_ul=document.getElementById('bd_ul');
    var aBd_li=oBd_ul.children;
    for(var i=0; i<aBd_li.length; i++){
        aBd_li[i].onmouseenter=function(ev){
            var oEvent=ev || event;
            var n=hoverDir(this, oEvent);
            var oBd_Span=this.children[0];
            switch(n){
                case 0:
                    oBd_Span.style.left='180px';
                    oBd_Span.style.top=0;
                    break;
                case 1:
                    oBd_Span.style.left=0;
                    oBd_Span.style.top='180px';
                    break;
                case 2:
                    oBd_Span.style.left='-180px';
                    oBd_Span.style.top=0;
                    break;
                case 3:
                    oBd_Span.style.left=0;
                    oBd_Span.style.top='-180px';
                    break;
            }
            move(oBd_Span, {left: 0, top: 0});
        };
        aBd_li[i].onmouseleave=function(ev){
            var oEvent=ev || event;
            var n=hoverDir(this, oEvent);

            var oBd_Span=this.children[0];
            switch(n){
                case 0:
                    move(oBd_Span, {left: 180, top: 0});
                    break;
                case 1:
                    move(oBd_Span, {left: 0, top: 180});
                    break;
                case 2:
                    move(oBd_Span, {left: -180, top: 0});
                    break;
                case 3:
                    move(oBd_Span, {left: 0, top: -180});
                    break;
            }
        };
    }
    //案例下导航
     var oBd_bm_ul=document.getElementById('bd_bm_ul');
     var oBd_md = document.getElementById('bd_md')
     var aBm_li=oBd_bm_ul.children;
     var oBlock=aBm_li[aBm_li.length-1];
     for(var i=0; i<aBm_li.length-1; i++){
         aBm_li[i].index = i;
         aBm_li[i].onclick=function(){
             elastic(oBlock, this.offsetLeft);
             move(oBd_md,{top:-400*this.index})
         };
     }
};