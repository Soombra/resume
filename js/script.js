var mySwiper=new Swiper(".swiper-container",{
	direction:"vertical",
	loop:true,
	initialSlide:0,
});

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
		//myAudio.play();
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