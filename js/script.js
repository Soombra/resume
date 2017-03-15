var html5_=document.getElementById("html5_"),
	css3_=document.getElementById("css3_"),
	js_=document.getElementById("js_"),
	jq_=document.getElementById("jq_"),
	ajax_=document.getElementById("ajax_");
var skills_array=[html5_,css3_,js_,jq_,ajax_];
var pages=document.getElementsByClassName("swiper-slide");
//将定时器放入数组中，页面切换时循环清除
var timer1;
var timer2;
var arrTimer1=[];
var arrTimer2=[];
//初始化swiper
var mySwiper=new Swiper(".swiper-container",{
	direction:"vertical",
	loop:true,
	initialSlide:0,
	onSlideChangeEnd:function(swiper){
		for(var i=0;i<pages.length;i++){
			pages[i].id="";
		}
		if(swiper.activeIndex==0){
			pages[0].id="page"+(pages.length-2);
		}else if(swiper.activeIndex==pages.length-1){
			pages[pages.length-1].id="page1";
		}else{
			pages[swiper.activeIndex].id="page"+swiper.activeIndex;
		}
		if(swiper.realIndex==2){
			 timer2=setTimeout(skillsMove,4000);
			 arrTimer2.push(timer2);
		}else{
			// 循环清除所有timeout定时器
			for(var i=0;i<arrTimer2.length;i++){
				clearTimeout(arrTimer2[i]);
			}
			//循环清除所有interval定时器
			for(var i=0;i<arrTimer1.length;i++){
				clearInterval(arrTimer1[i]);
			}
			for(var j=0;j<skills_array.length;j++){
				skills_array[j].style.opacity=0;
				var spanToClear=skills_array[j].getElementsByTagName("span")[0];
				var pToClear=skills_array[j].getElementsByTagName("p")[0];
				spanToClear.style.width="0";
				pToClear.innerHTML="";
			}
		}
	}
});

//回调来对每个skill实现操作
function skillsMove(){
	skillMove(80,html5_,function(){
		skillMove(90,css3_,function(){
			skillMove(90,js_,function(){
				skillMove(90,jq_,function(){
					skillMove(85,ajax_,function(){
						ajax_.className="";
					})
				})
			})
		})
	});
}

function skillMove(num,cur,fn){
	var current_span=cur.getElementsByTagName("span")[0];
	var current_p=cur.getElementsByTagName("p")[0];
	var wit=0;
	cur.style.opacity=1;
	for(i=0;i<skills_array.length;i++){
		skills_array[i].className="";
	}
	cur.className="skills_active";
		timer1=setInterval(function(){
		wit+=1;
		current_span.style.width=wit*0.04+"rem";
		current_p.innerHTML=wit+"%";
		//根据数值的变化来替换颜色
		if(wit>=85){
			current_p.style.color="#00ff33";
		}else if(wit>=70){
			current_p.style.color="#ffff00";	
		}else{
			current_p.style.color="#ff0000";
		}
		//根据临界值来终止宽度变化
		if(wit==num){
			clearInterval(timer1);
			if(mySwiper.realIndex==2){
				timer2=setTimeout(function(){
				fn();
			},500);
				arrTimer2.push(timer2);
		}
			}
			
	},20);
		arrTimer1.push(timer1);
}

//动态计算rem值
~function(){
	var desW=640,
		winW=document.documentElement.clientWidth,
		ratio=winW/desW;
	var oMain=document.getElementById("main");
	if(winW>desW){
		oMain.style.width=desW+"px";
		oMain.style.margin="0 auto";
		return;
	}
	document.documentElement.style.fontSize=ratio*100+"px";
}();

//设置音乐播放及音乐图标的运动
~function(){
	var myAudio=document.createElement("audio");
	myAudio.src="music/1.mp3";
	myAudio.volume=0.5;
	myAudio.preload="none";
	myAudio.loop=true;
	var music_logo=document.getElementById("music_logo");
	myAudio.oncanplay=function(){
		music_logo.style.display="block";
	}
	setTimeout(function(){
		myAudio.play();
	},2000);
	music_logo.onclick=function(){
		if(myAudio.paused){
			myAudio.play();
			music_logo.className="music_on";
			return;
		}
		myAudio.pause();
		music_logo.className="";
	}
}();