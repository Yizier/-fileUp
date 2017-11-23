//////定义上传方法函数
var id="1";
var list=["aa"];
var i=0;
var k="11";
var img_cont="1";
function PreviewImage(imgFile) { 
	
    var pattern = /(\.*.PNG$)|(\.*.png$)|(\.*.jpg$)|(\.*.jpeg$)|(\.*.bmp$)/;
    if(!pattern.test(imgFile.value)) { 
      alert("系统仅支持PNG/png格式的照片！");  
      imgFile.focus();
      
    }else{
       //定义图片路径 
       var path;
       //添加显示图片的HTML元素
   		id += 1;
       /*判断图片上限*/
   		var imgNum=document.getElementsByTagName("img");
   		
       if(imgNum.length<9){
    	   
       	for(var j=0;j<list.length;j++){
       		if(list[j]==imgFile.value){
       			alert("已存在此图片");
       			break;
       		}else{
           		$("#img_cont"+img_cont).append("<div><div id='"+id+"'><img src=' '/></div><a class='hide delete-btn'>删除</a></div>");
           		list[i]=imgFile.value;
           	   	i+=1;
           		img_cont+=1;
           		break;
       			}       		
       	}
    	
       /*	alert(list.toString());*/
       }else{alert("最多上传九张图片");}
       //判断浏览器类型
       if(document.all){ 
       //兼容IE
        imgFile.select(); 
       	path = document.selection.createRange().text;
        document.getElementById(id).innerHTML=""; 
        document.getElementById(id).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果 
        
       }else{
        //兼容其他浏览器 
        path = URL.createObjectURL(imgFile.files[0]);
       	document.getElementById(id).innerHTML = "<img src='"+path+"' width='106' height='80' />"; 
      
       }
    } 
    
  /*  $('.all').append(" <div class='img-cont' id='img_cont" +k+"'><a href='javascript:;' class='file' id='file'"+k+">选择文件<input type='file' onchange='PreviewImage(this)' value='图片' name='img"+k+"' id='tp1'/></a></div>");*/
    if(imgNum.length<=9){
    	 $('.all').append(" <div class='img-cont' id='img_cont" +k+"'><a href='javascript:;' class='file' id='file'"+k+">选择文件<input type='file' onchange='PreviewImage(this)' value='图片' name='img0' id='tp1'/></a></div>");
    	   	k+=1;
    }
   
}  

function submit(){
	/*var imgPath=[];
	var img=document.getElementsByTagName("img");
	for(var j=0;j<img.length;j++){
		var mydate=new Date().getTime();
		var ranNum1 = Math.ceil(Math.random() * 25);
		var zimu1=String.fromCharCode(97+ranNum1);
		var ranNum2 = Math.ceil(Math.random() * 25);
		var zimu2=String.fromCharCode(97+ranNum2);
		var src=img[j].src;
		src=mydate+"_"+zimu1+zimu2+";"
		imgPath[j]="img"+j+":"+src;
	}
	alert(imgPath);*/
	
	
}
//重置表单,允许用户连续添加相同的图片
function setForm(imgFile){
	var imgFile1=imgFile.value;
	//获取名称+后缀
	var arr=imgFile1.split('\\');//注split可以用字符或字符串分割
	var my=arr[arr.length-1];//这就是要取得的图片名称 
	//获取名称.后缀里的名称
	var arr1=my.split('.');//注split可以用字符或字符串分割
	var name=arr1[arr1.length-2];
	//获取后缀名
	var houzhui=/\.[^\.]+$/.exec(imgFile1);
	//获取当前时间
	var mydate=new Date();
	var date=mydate.toLocaleString();
	//获取一组(7位)随机数
	var Rand=Math.random();
	var num=Math.floor(Rand*10000000);
	//文件名src值
	var ptname=date+"_"+num+houzhui;
	return ptname;
}
//控制"按钮"显示与隐藏
$(".all").on("mouseenter","div",function(){
    var that=this;//类名为img-cont
    var dom=$(that).children("div").children("a");
    dom.removeClass("hide");
    //为点击事件解绑，防止重复执行
    dom.off("click");
    dom.on("click",function(){
    	var img=$(that).children("div").children("div").children("img");
    	 /*for(var j=0;j<list.length;j++){
        	if(list[j]==img){
        		list.remove(list[j]);
        	}
        }*/
    	
    	//删除当前图片
     	dom.parent().parent().remove();
     	//删除图片名称,即删除a所在div
     	/*var src= $(that).children("div").getElementsByTagName("img").src;*/
     	/*alert(list.toString());*/
     });
}).off("mouseleave","div").on("mouseleave","div",function(){
    var that=this;
    /* var path=src.src;*/
    $(that).children("div").children("a").addClass("hide");
})

 
   
