<%@page import="org.springframework.web.servlet.support.RequestContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>

<style type="text/css">
.loginpage {
  margin-top: 70px;
}
.modal-body{
  text-align: center;
}
.form-check{
  white-space: nowrap;
}
.modal-header{
  height: 100px;
}
</style>

<title>Login</title>
</head>

<body>
	<div class="modal-content">
		<div class="modal-header">
			<div class="container text-center loginpage">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true"><i class="zmdi zmdi-close"></i></button>
				<h1>Welcome To Movie Ace</h1>
				<br>
			</div>
		</div>
		<div class="modal-body">
				<form class="px-4 py-3" id="loginForm" name="loginForm" method="post">
					<div class="form-group">
						<label for="exampleDropdownFormEmail1">ID</label> <input type="text" class="form-control" name="memberId" id="memberId" placeholder="아이디">
					</div>
					<div class="form-group">
						<label for="exampleDropdownFormPassword1">Password</label> <input type="password" class="form-control" name="memberPw" id="memberPw" placeholder="비밀번호">
					</div>
					<div class="form-check">
						<label class="form-check-label"> <input type="checkbox" class="form-check-input" style="display: inline;"> Remember me
						</label>
					</div>
					<br>
					<button onclick="signIn();" class="btn btn-primary">Sign in</button>
				</form>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/signUp">New around here? Sign up</a><br /> <a class="dropdown-item" href="#">Forgot password?</a>
		</div>
		<div class="modal-footer"></div>
	</div>
</body>
<script type="text/javascript">
	function signIn(){
		
    	var memberId=$("#memberId").val();
    	var memberPw=$("#memberPw").val();
    	var param="memberId="+memberId+"&memberPw="+memberPw;
    	console.log(param);
		$.ajax({
			type:"POST",
			url:"/login",
			data: $("#loginForm").serialize(),
			dataType:"json",
			success : function(){
				console.log("hi");
			}
		})
	}
</script>
</html>