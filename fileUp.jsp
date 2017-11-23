<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'fileUp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="css/fileUp.css"> 
	<style type="text/css">
		.add_input{
			width:100px;
			height:100px;
			margin-bottom:30px;
			border:1px solid red;
		}
		#id{
			width:200px;
			height:200px;
		}
	</style> 
  </head>
  
  <body> 

  
  	 
    <form action="materialAction!tuSubmitMaterial" method="post" enctype="multipart/form-data">
	  <!-- 隐藏input_图片隐藏 -->
      <div class="all">
      	<div class="img-cont" id="img_cont1">
      		<a href="javascript:;" class="file" id="file1">选择文件
      		<input type="file" onchange='PreviewImage(this)' value="图片" name="img0" id="tp1"/>
   		 		<!-- <input type="file" onchange='PreviewImage(this)' value="图片" name="img1" id="tp1"/> -->
	    	</a>
	    </div>
	   	</div>
      </div>
      <input type="submit" value="提交" onclick="submit()"/>
    </form>
     	
     <!-- 图片展示容器 -->


  <!-- js -->
  <script  src="js/jquery-1.11.3.min.js"></script>
  <script  src="js/fileUp.js"></script>
   
<script type="text/javascript">
</script>
 </body> 
</html>
