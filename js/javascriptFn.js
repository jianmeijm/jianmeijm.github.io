/*
* @Author: LENOVO
* @Date:   2016-06-14 11:27:04
* @Last Modified by:   LENOVO
* @Last Modified time: 2016-06-30 10:39:08
*/

	// 随机数
	function rnd(m,n){

		return parseInt(Math.random()*(n-m)+m)
	}
	// 时间个位数填0
	function zero(n){
		if(n < 10){
			return n = '0' + n ;
		}else{
			return n ;
		}
	} 
	// 判断是否出现重复
	function findInArr(n,arr){
		for(var i = 0 ; i < arr.length; i++){
			if(n == arr[i]){
				return true ;
			}
		}
		return false ;
	}
	// 判断参数是否为数字
	function textNumber(){
		for(var i = 0; i < arguments.length; i++){
			if(typeof arguments[i] != 'number'){
				return false
			}
		}
		return true
	}
	// 查看浏览器内核
	function findKernel(){
		if(navigator.userAgent.indexOf('Chrome') != -1){
			return alert('我是谷歌浏览器');
		}else if(navigator.userAgent.indexOf('Firefix') != -1){
			return alert('我是火狐浏览器');
		}else if(navigator.userAgent.indexOf('MSIE') != -1){
			return alert('我是IE浏览器');
		}else{
			return alert('其他浏览器')
		}
	}
	// 代替window.onload
	function domReady(fn){
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded', function(){
                fn && fn();
            }, false);
        }else{
            document.attachEvent('onreadystatechange', function(){
                if(document.readyState=='complete'){
                    fn && fn();
                }
            });
        }
    }
//------------------------------------------------样式------------------------------------------------//
	// class获取元素(兼容高低版本浏览器)
	function getByClass(oparent,sClass){
		function findInArr(n,arr){
			for(var i = 0 ; i < arr.length; i++){
				if(n == arr[i]){
					return true ;
				}
			}
			return false ;
		}
		if(oparent.getElementsByClassName){
			 return oparent.getElementsByClassName(sClass)
		}else{
			oEle = oparent.getElementsByTagName('*');
			var arr = [];
			for(var i = 0; i < oEle.length; i++){
				var arr2 = oEle[i].className.split(' ')
				if(findInArr(sClass,arr2)){
					arr.push(oEle[i])
				}
			}
			return arr ;
			// 返回为符合条件的标签数组
		}
	}
	// 获取非行间样式(兼容高低版本浏览器)
	function getStyle(obj,style){
		if(obj.currentStyle){
			return obj.currentStyle[style]
		}else{
			return getComputedStyle(obj,false)[style]
		}
	}
	// json设置样式
	function setStyle(obj,json){
		for( name in json){
			obj.style[name] = json[name]
		}
	}
//----------------------------------------------数组字符串--------------------------------------------//
	// 数组去重-json
	function remove(arr){
		var json = {}
		var arr2 = []
		for(var i = 0; i < arr.length; i++){
			json[arr[i]] = 'a' ;
		}
		for(name in json){
			arr2.push(name)
		}
		return arr = arr2
	}
	// 数组去重-排序
	function remove(arr){
		arr.sort()
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == arr[i+1]){
				arr.splice(i,1)
				i--
			}
		}
		return arr
	}
	// 数组求和
	function sum(arr){
		var a = 0;
		for(var i = 0; i < arr.length; i++){
			a = a + arr[i]
		}
		return a
	}
	// 提取数组中最大值和位置
	function findMax(arr,start){
		var iMax = arr[start];
		var iMaxIndex = start ;
		for(var i = start; i < arr.length; i++){
			if(arr[i] > iMax){
				iMax = arr[i]
				iMaxIndex = i ;
			}
		}
		return {M:iMax,I:iMaxIndex}
	}
	// 数组排序-大到小
	function sort(arr){
		function findMax(arr,start){
			var iMax=arr[start];
			var iMaxIndex=start;
			for(var i=start; i<arr.length; i++){
				if(arr[i]>iMax){
					iMax=arr[i];
					iMaxIndex=i;
				}
			}
			return iMaxIndex;
		}
	
		for(var i=0; i<arr.length; i++){
			var n=findMax(arr,i);
			var tmp;
			tmp=arr[n];
			arr[n]=arr[i];
			arr[i]=tmp;
		}
			return arr; 
	}
	// 删除数组中的奇数
	function removeOdd(arr){
		for(var i = 0; i < arr.length; i++){
			if(arr[i]%2 == 1){
				arr.splice(i,1)
				i--
			}
		}
		return arr
	}
	// 查找出现次数最多的字符和出现次数 
	function findMost(str){
		var json = {} ;
		for(var i = 0; i < str.length; i++){
			if(json[str.charAt(i)]){
				json[str.charAt(i)]++ ;
			}else{
				json[str.charAt(i)] = 1 ;
			}
		}
		var iMax = 0 ;
		var iMaxName = ''
		for(name in json){
			if(json[name] > iMax){
				iMax = json[name]
				iMaxName = name
			}
		}
		return '出现最多的字符'+iMaxName+'为出现次数为'+iMax
	}
	// 字符串首字母转大写
	function toUpperCase(str){
		var arr2 = []
		var arr = str.split(' ')
		for(var i = 0; i < arr.length; i++){
			var s = arr[i].charAt(0).toUpperCase()+arr[i].substring(1)
			arr2.push(s)
		}
		var str = arr2.join(' ')
		return str
	}
	// 字符串翻转
	function reverse(str){
		var arr = str.split(' ');
		arr.reverse();
		return str = arr.join('');
	}
//----------------------------------------------时间-------------------------------------------------//
	// 返回当前日期
	function getDate(){
		var oDate = new Date();
		var Y = oDate.getFullYear();
		var M = oDate.getMonth();
		var D = oDate.getDate();
		return Y+'年'+(M+1)+'月'+D+'日' ;
	}
	// 返回当前时间
	function getTime(){
		var oDate = new Date();
		var h = oDate.getHours();
		var m = oDate.getMinutes();
		var s = oDate.getSeconds();
		return h+'时'+m+'分'+s+'秒'
	}
//----------------------------------------------拖拽-------------------------------------------------//
	// 获取当前位置
	function getPos(obj){
		var l = 0;
		var t = 0;
		while(obj){
			l+= obj.offsetLeft;
			t+= obj.offsetTop;
			obj = obj.offsetParent;
		}
		return {left:l,top:t}
	};
	// 事件绑定
	function addEvent(obj, sEv, fn){
        if(obj.addEventListener){
            obj.addEventListener(sEv, fn, false);
        }else{
            obj.attachEvent('on'+sEv, fn);
        }
    }
	// 简单拖拽
	function drag(obj){
		obj.onmousedown = function(ev){
			var oEvent = ev || event ;
			var disx = oEvent.clientX - obj.offsetLeft;
			var disy = oEvent.clientY - obj.offsetTop;
			document.onmousemove = function(ev){
				var oEvent = ev || event ;
				obj.style.left = oEvent.clientX - disx + 'px';
				obj.style.top = oEvent.clientY - disy + 'px';
				obj.style.margin=0;
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				
			}
			// return false;
		}
	}
//----------------------------------------------运动--------------------------------------------------//
	//  普通运动
	function move(obj, json, options){
	    var options=options || {};
	    options.duration=options.duration || 600;
	    options.easing=options.easing || 'linear';
	    var start={};
	    var dis={};
	    for(var name in json){
	        start[name]=parseFloat(getStyle(obj, name)) || 0;
	        dis[name]=json[name]-start[name];
	    }
	    var count=Math.floor(options.duration/30);
	    var n=0;
	    clearInterval(obj.timer);
		    obj.timer=setInterval(function(){
		        n++;
		        for(var name in json){
		            switch(options.easing){
		                case 'linear':
		                    var a=n/count;
		                    var cur=start[name]+dis[name]*a;
		                    break;
		                case 'ease-in':
		                    var a=n/count;
		                    var cur=start[name]+dis[name]*a*a*a;
		                    break;
		                case 'ease-out':
		                    var a=1-n/count;
		                    var cur=start[name]+dis[name]*(1-a*a*a);
		                    break;
			        }
		            if(name=='opacity'){
		                obj.style.opacity=cur;
		                obj.style.filter='alpha(opacity='+cur*100+')';
		            }else{
		                obj.style[name]=cur+'px';
		            }
			    }

		        if(n==count){
		            clearInterval(obj.timer);
		            options.complete && options.complete();
		        }
	    	}, 30);
	}
	 // 圆周运动
	 function cirMove(parent,obj,json,options){
	 	var options=options || {};
	    options.duration=options.duration || 1079;
	    options.easing=options.easing || 'linear';
	 	var R=parent.offsetWidth/2;
	 	obj.a=obj.a || 0;
	 	var start = {}
	 	var dis = {}
	 	var wh = {}
	 	start.iTarget = obj.a
	 	for(name in json){
	 		start[name]=parseFloat(getStyle(obj, name)) || 0;
	 		dis[name]=json[name]-start[name]
	 	}   
        // var start=obj.a;
        // var dis=iTarget-start;
        var count=Math.floor(options.duration/30);
        var n=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            n++;
            for(name in json){
	            switch(options.easing){
	                case 'linear':
	                    var a=n/count;
	                    var cur=start[name]+dis[name]*a;
	                    break;
	                case 'ease-in':
	                    var a=n/count;
	                    var cur=start[name]+dis[name]*a*a*a;
	                    break;
	                case 'ease-out':
	                    var a=1-n/count;
	                    var cur=start[name]+dis[name]*(1-a*a*a);
	                    break;

	            }
	            // console.log(dis['width'])
	            // console.log(cur)
	             
	            if(name == 'iTarget'){
	            	// console.log(dis['width'])	
	            	obj.a=cur;
	            	// console.log(a)
	            	// console.log(getPosDis(obj,parent))
		            var x=R+R*Math.sin(cur*Math.PI/180);
		            var y=R-R*Math.cos(cur*Math.PI/180);
		            // console.log(getPos(obj).top)
		            console.log(getPosDis(obj,parent))
		            //  var x=R+R*Math.sin(cur*Math.PI/180);
		            // var y=R-R*Math.cos(cur*Math.PI/180);
		            obj.style.left=x+'px';
		            obj.style.top=y+'px';
	            }else{
		            if(name=='opacity'){
		                obj.style.opacity=cur;
		                obj.style.filter='alpha(opacity='+cur*100+')';
		            }else{
		                obj.style[name]=cur+'px';
		        	}
		        }     
            }
            
            // obj.a=cur;
            // var x=R+R*Math.sin(cur*Math.PI/180);
            // var y=R-R*Math.cos(cur*Math.PI/180);
            // obj.style.left=x+'px';
            // obj.style.top=y+'px';
            if(n==count){
                clearInterval(obj.timer);
                options.complete && options.complete();
            }
        }, 30);
    }
    //  弹性运动
    function elastic(obj,iTarget){
		var n = 0;
		var left = 0;
		var timer
		timer = setInterval(function(){
			n+=(iTarget-left)/5
			n*=0.8
			left+=n;
			obj.style.left = Math.round(left)+'px';
			if(Math.abs(n)<1 && Math.round(left)==iTarget){
				clearInterval(timer)
			}
		},30)
	}
	//  碰撞检测
	function collTest(obj, obj2){
        var l1=obj.offsetLeft;
        var r1=obj.offsetWidth+l1;
        var t1=obj.offsetTop;
        var b1=obj.offsetHeight+t1;

        var l2=obj2.offsetLeft;
        var r2=obj2.offsetWidth+l2;
        var t2=obj2.offsetTop;
        var b2=obj2.offsetHeight+t2;

        if(r1<l2 || b1<t2 || l1>r2 || t1>b2){
            return false;
        }else{
            return true;
        }
    }
    //求对角线距离
    function getDis(obj, obj2){
        var l1=obj.offsetLeft+obj.offsetWidth/2;
        var t1=obj.offsetTop+obj.offsetHeight/2;

        var l2=obj2.offsetLeft+obj2.offsetWidth/2;
        var t2=obj2.offsetTop+obj2.offsetHeight/2;

        var a=l1-l2;
        var b=t1-t2;
        return Math.sqrt(a*a+b*b);
    }
    // function getPosDis(obj, obj2){
    //     var l1=getPos(obj).left+obj.offsetWidth/2;
    //     var t1=getPos(obj).top+obj.offsetHeight/2;

    //     var l2=getPos(obj2).left+obj2.offsetWidth/2;
    //     var t2=getPos(obj2).top+obj2.offsetHeight/2;

    //     var a=l1-l2;
    //     var b=t1-t2;
    //     return Math.sqrt(a*a+b*b);
    // }
//--------------------------------------------交互-----------------------------------------------------//
	//  设置cookie
	function addCookie(name,value,iDay){
		if(iDay){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+iDay);
			document.cookie = name + '=' + value +'; path=/; epxpires= '+oDate.toUTCString();
		}else{
			document.cookie = name+ '=' + value +'; path=/'
		}
	}
	//  获取cookie
	function getCookie(name){
		var arr = document.cookie.split('; ');
		for(var i = 0; i < arr.length; i++){
			var arr2 = arr[i].split('=');
			if(arr2[0] == name){
				return arr2[1];
			}
		}
		return '';
	}
	//  删除cookie
	function removeCookie(name){
		addCookie(name,123,-1000);
	}
	//  ajax------------------------------------------------------------------
	function json2url(json){
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
	}
	function ajax(json){
	    var json=json || {};
	    if(!json.url)return;
	    json.data=json.data || {};
	    json.type=json.type || 'get';
	    json.time=json.time || 3000;
	    // 1.准备自己的ajax、创建对象
	    if(window.XMLHttpRequest){
	        var oAjax=new XMLHttpRequest();
	    }else{
	        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	    }

	    switch(json.type.toLowerCase()){
	        case 'get':
	            oAjax.open('GET', json.url+'?'+json2url(json.data), true);
	            oAjax.send();
	            break;
	        case 'post':
	            oAjax.open('POST', json.url, true);
	            oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	            oAjax.send(json2url(json.data));
	            break;
	    }

	    // 4、接收数据
	    oAjax.onreadystatechange=function(){
	        if(oAjax.readyState==4){
	            if((oAjax.status>=200 && oAjax.status<300) || oAjax.status==304){
	                // alert('成功'+oAjax.responseText);
	                json.success && json.success(oAjax.responseText);
	            }else{
	                json.error && json.error(oAjax.status);
	            }
	            clearTimeout(timer);
	        }
	    };

	    var timer=setTimeout(function(){
	        alert('网络超时');
	        oAjax.onreadystatechange=null;
	    }, json.time);
	}
	//--------------------------------------------------------------------------
	function jsonp(json){
	    // 考虑默认值
	    var json=json || {};
	    if(!json.url)return;
	    json.cbName=json.cbName || 'cb';
	    json.data=json.data || {};

	    var fnName='show'+Math.random();
	    // 替换fnName里面的小数点
	    fnName=fnName.replace('.', '');
	    window[fnName]=function(a){
	        json.success && json.success(a);
	        // 删除多余script标签
	        oHead.removeChild(oS);
	    };
	    json.data[json.cbName]=fnName;
	    var arr=[];
	    for(var name in json.data){
	        arr.push(name+'='+json.data[name]);
	    }
	    var str=arr.join('&');
	    var oS=document.createElement('script');
	    oS.src=json.url+'?'+str;
	    var oHead=document.getElementsByTagName('head')[0];
	    oHead.appendChild(oS);
	}
//------------------------------------------------------------------正则验证----------------------------------------------------//
	function checkform(form){
		var reg = {
			email : /^\w+@[0-9a-zA-Z-]+(\.[a-zA-Z]{2,8}){1,2}$/,
			age : /^(1[8-9]|[2-9]\d|100)$/,
			tel : /^(0\d{2,3}-)?[1-9]\d{6,7}$/
		}
		var aInput = document.getElementsByTagName('input')
		function on(obj,reg){
			if(obj.value){
					var str = obj.value;
					if(!reg.test(str)){
						obj.parentNode.children[1].innerHTML = obj.getAttribute('data-err');
						return true;
					}else{
						obj.parentNode.children[1].innerHTML = '';
						return false;
					}
				}else{
					obj.parentNode.children[1].innerHTML = '*内容不能为空';
					return true;
				}
		}
		form.onsubmit = function(){
			var Flag = true;
			for(var i = 0; i < aInput.length; i++){
				if(reg[aInput[i].name]){
					if(on(aInput[i],reg[aInput[i].name])){
						Flag = false;
					}
				}
			}
			return Flag
		}
		for(var i = 0; i < aInput.length; i++){
			(function(index){
			aInput[i].onblur = function(){
				if(reg[aInput[index].name]){
					if(on(aInput[index],reg[aInput[index].name])){
						return false;
					}
				}
			}
			})(i)
		}
	}
//------------------------------------------------------------------面向对象-----------------------------------------------------------------------//
	function CreatePerson(name,age){
		var obj = new Object();
		obj.name = name;
		obj.age = age;
		obj.showName = function(){
			return this.name;
		}
		obj.showAge = function(){
			return this.age;
		}
		return obj
	}