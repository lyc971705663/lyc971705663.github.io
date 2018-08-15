/***
***/

$(function(){
    
	$("#xBtn").on('click',function(){
		nextV();		
	});
	
	$("#sBtn").on('click',function(){
		sV();		
	});
	
});

var vnameArr = ['m1.mp4','m2.mp4','m3.mp4','m4.mp4','m5.mp4','m6.mp4','m7.mp4','m8.mp4',];
var count = 0;
var nextV = function() {
	if(count < vnameArr.length) {
		$("#mv").empty();
	    var html = '<video id="mvideo" width="auto" height="auto" controls><source src="mv/'+vnameArr[count]+'" type="video/mp4">您的浏览器不支持 HTML5 video 标签。</video>';
	    $("#mv").append(html);
		count++;
	}else{
		count=0;
		nextV();
	}
};

var sV = function() {
	if(count > 0) {
		$("#mv").empty();
	    var html = '<video id="mvideo" width="auto" height="auto" controls><source src="mv/'+vnameArr[count]+'" type="video/mp4">您的浏览器不支持 HTML5 video 标签。</video>';
	    $("#mv").append(html);
		count--;
	}else{
		count=vnameArr.length-1;
		sV();
	}
};