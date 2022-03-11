<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="SIGN" value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA38AAAEGCAYAAADVBSyvAAAgAElEQVR4Xu3dCZA8WV0ncIzVEEdEVBC5tHEQXFAQkRuWHm8OHVBh8YDpGREVOQYvvDZoYmFdxJVDUYfgaGQJOUIZ5EZWGkUGWFhmWBwFERq5ZAcVDAEx1mB/X6haev78/12ZVZlVmZWfjPhF9b/rvZfvfTJnqn+Vme993lVsBAgQIECAAAECBAgQILD1Ap+39SM0QAIECBAgQIAAAQIECBC4iuTPSUCAAAECBAgQIECAAIEJCEj+JnCQDZEAAQIECBAgQIAAAQKSP+cAAQIECBAgQIAAAQIEJiAg+ZvAQTZEAgQIECBAgAABAgQISP6cAwQIECBAgAABAgQIEJiAgORvAgfZEAkQIECAAAECBAgQICD5cw4QIECAAAECBAgQIEBgAgKSvwkcZEMkQIAAAQIECBAgQICA5M85QIAAAQIECBAgQIAAgQkISP4mcJANkQABAgQIECBAgAABApI/5wABAgQIECBAgAABAgQmICD5m8BBNkQCBAgQIECAAAECBAhI/pwDBAgQIECAAAECBAgQmICA5G8CB9kQCRAgQIAAAQIECBAgIPlzDhAgQIAAAQIECBAgQGACApK/CRxkQyRAgAABAgQIECBAgIDkzzlAgAABAgQIECBAgACBCQhI/iZwkA2RAAECBAgQIECAAAECkj/nAAECBAgQIECAAAECBCYgIPmbwEE2RAIECBAgQIAAAQIECEj+nAMECBAgQIAAAQIECBCYgIDkbwIH2RAJECBAgAABAgQIECAg+XMOECBAgAABAgQIECBAYAICkr8JHGRDJECAAAECBAgQIECAgOTPOUCAAAECBAgQIECAAIEJCEj+JnCQDZEAAQIECBAgQIAAAQKSP+cAAQIECBAgQIAAAQIEJiAg+ZvAQTZEAgQIECBAgAABAgQISP6cAwQIECBAgAABAgQIEJiAgORvAgfZEAkQIECAAAECBAgQICD5cw4QIECAAAECBAgQIEBgAgKSvwkcZEMkQIAAAQIECBAgQICA5M85QIAAAQIECBAgQIAAgQkISP4mcJANkQABAgQIECBAgAABApI/5wABAgQIECBAgAABAgQmICD5m8BBNkQCBAgQIECAAAECBAhI/pwDBAgQIECAAAECBAgQmICA5G8CB9kQCRAgQIAAAQIECBAgIPlzDhAgQIAAAQIECBAgQGACApK/CRxkQyRAgAABAgQIECBAgIDkzzlAgAABAgQIECBAgACBCQhI/iZwkA2RAAECBAgQIECAAAECkj/nAAECBAgQIECAAAECBCYgIPmbwEE2RAIECBAgQIAAAQIECEj+nAMECBAgQIAAAQIECBCYgIDkbwIH2RAJECBAgAABAgQIECAg+XMOECBAgAABAgQIECBAYAICkr8JHGRDJECAAAECBAgQIECAgOTPOUCAAAECBAgQIECAAIEJCEj+JnCQDZEAAQIECBAgQIAAAQKSP+cAAQIECBAgQIAAAQIEJiAg+ZvAQTZEAgQIECBAgAABAgQISP6cAwQIECBAgAABAgQIEJiAgORvAgfZEAkQIECAAAECBAgQICD5cw4QIECAAAECBAgQIEBgAgKSvwkcZEMkQIAAAQIECBAgQICA5M85QIAAAQIECBAgQIAAgQkISP4mcJANkQABAgQIECBAgAABApI/5wABAgQIECBAgAABAgQmICD5m8BBNkQCBAgQIECAAAECBAhI/pwDBAgQIECAAAECBAgQmICA5G8CB9kQCRAgQIAAAQIECBAgIPlzDhAgQIAAAQIECBAgQGACApK/CRxkQyRAgAABAgQIECBAgIDkzzlAgAABAgQIECBAgACBCQhI/iZwkA2RAAECBAgQIECAAAECkj/nAAECBAgQIECAAAECBCYgIPmbwEE2RAIECBAgQIAAAQIECEj+nAMECBAgQIAAAQIECBCYgIDkbwIH2RAJECDQUuAaVX634gsqnl+xX3HjWRvvmP27ZZOKEyBAgAABApsWkPxt+gjYPwECBNoL7FSVo4rvqzi74q8rvqniphVXzF5fU693qXjzrEzKX7vikxXXrLhjxV9U3KLi74/V+z/18xdWXPeEbqXNb2nfbTUIECBAgACBTQpI/japb98ECBBYLHDrKnLbinMqkuTdreIbF1frvcSP1x6e0vte7IAAAQIECBDoTEDy1xmlhggQINCJwLdVK/ep+NaKr6y4eietdt/Is6rJ+3ffrBYJECBAgACBvgQkf33JapcAAQLNBG5UxS6ouE7FTsVus2obL/Wy6kGuQtoIECBAgACBkQhI/kZyoHSTAIGtE/j1GtGdKnJL5xi39P/nxthxfSZAgAABAlMVkPxN9cgbNwEC6xa4fe0w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" />
<head>
  <meta charset="utf-8">
  <title>Accept a Signature · Signature Pad</title>
  <style>
    body { font: normal 100.01%/1.375 "Helvetica Neue",Helvetica,Arial,sans-serif; }
    
	/* .sign_img{
		background: #FAFAE9 url(${fn:replace(SIGN, ' ', '+')}) no-repeat scroll left top !important;
			 background-size: 100% 100% !important;
	}
	.sign-td{position:relative;}
	.sign-span{display:block;overflow:hidden;position:absolute;top:0;left:0;height:44px;width:58px}
	.sign-span img{display:block;height:30px;position:relative;left:50%;transform:translateX(-50%)} */
	
	
	.sign strong{font-size:20px;}
	.text_blank{display:inline-block;width:70px}
	.sign{position:relative;background-color:transparent; width: 250px;}
	.sign_img{
		position:absolute;bottom:0;right:20px;
		
			background-image: url("${fn:replace(SIGN, ' ', '+')}");
 			background-repeat: no-repeat;
 			background-size: contain;
			background-position: right;
			position: absolute;
			right: 10px;
			width: 100%;
			height: 40px;
		
	}
	.sign2{position:relative;background-color:transparent; width: 250px;}
	.imgTest {
		position:absolute;bottom:0;right:20px;
 			background-repeat: no-repeat;
 			background-size: contain;
			background-position: right;
			position: absolute;
			right: 10px;
			width: 100%;
			height: 40px;
	}
  </style>
  <link href="/resources/css/style.css" rel="stylesheet">
  <link href="/resources/css/style-signup.css" rel="stylesheet">
  <!-- <link href="/resources/js/jquery.signaturepad.min.css" rel="stylesheet"> -->
  <!--[if lt IE 9]><script src="../assets/flashcanvas.js"></script><![endif]-->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script> -->
  <script src="resources/js/jquery-3.2.1.min.js"></script>
</head>
<script>
	$(document).ready(function() {
		$(".step_btn.next").addClass("is-active");
	})
</script>
<body>
<div class="video_wrap">
			<div class="inner">
				<div class="img_wrap">
					<img src="" alt="" />
				</div>
				<div class="text_wrap">
					<!--
					<strong class="chapter">Chapter.1</strong>
					<p class="sec_tit">언제, 어디서나<br>캡스가 지켜주는 우리집!</p>
					 -->
					<a href="#" class="play_btn">btn</a>
				</div>
			</div>
		</div>
		<iframe width="480" height="270" src="https://www.youtube.com/embed/4Ii7KWA5gao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="btn_wrap page_btn">
							<a href="/contracts/steps/check.do" class="btn01 col01 step_btn prev">이전</a>
							<a href="#" class="btn01 col02 step_btn next"><span>체크</span></a>
							<a href="#contrSignPop" id="nextBtn" class="btn01 col02 step_btn js-openLay"onclick="signUtil.open();"><span>체크</span></a>
						</div>
					<p class="sign">
							(필수기재)
							<strong>예금주:</strong>
							<span class="text_blank sign_img" id="test">
							</span>
							인 또는 서명
						</p>
						<textarea id='output'></textarea><br/><br/><br/>
						<p class="sign2">
						<span class="imgTest" background-image="url(data:image/png;base64,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)">
						</span>
<div id="overlay" style="display:none;">
  <div id="contrSignPop" class="hidden insert alert">
	<a href="#" class="close-x js-closeLay"><span class="sr-only">창닫기</span></a>
	<div class="lay-cont">
		<!-- [S] layer contents -->
		<div class="lay-inner">
			<div class="cont_box">
				<div class="alert_tit">
					<p>서명</p>
				</div>
				<div class="alert_desc">
					<p>서명해주세요</p>
					
					<!-- pc 서명 -->
					<!-- <div class="mobile_hidden input_wrap">
						<div class="input_box">
							<span class="input_txt">
								<input type="text" value="" id="signText" placeholder="서명"/>
							</span>
						</div>
					</div> -->
					<!-- //pc 서명 -->
					
					<!--  mobile 서명 -->
					<div class="drawing_box" id="signPad">
						<a href="#" class="f_right btn01 col04 mini reset_btn" onclick="signUtil.initPC();">초기화</a>
						<canvas id="sign"></canvas>
					</div>
					<!-- // mobile 서명 -->
				</div>
			</div>
		</div>
		<!-- [E] layer contents -->
			
		<div class="btn_wrap">
			<a href="#" class="btn01 col02 sign-compl">확인</a>
		</div>
	</div>
</div>
</div>
<script type="text/javascript">

	var $video_play_cont = $('.video_wrap .inner');


	$('.play_btn').on('click', function(){
		console.log("asd");
		$video_play_cont.append('<div class="video_cont"></div>')
		$video_play_cont.find('.video_cont').tubeplayer({
			initialVideo: 'cSc9bbK_hgY',
			autoPlay: true,
 			onPlayerEnded: function(){
				$('.video_cont').remove();
			},
			onPlayerPlaying: function(){
				console.log(this.tubeplayer("data"));

			},
			onPlayerBuffering: function(){
				//console.log('Buffering');
			}
		});

	})
	
	$(".sign-compl").off("click", ".step_btn.next", function() {});
	$(".sign-compl").on("click", function() {
			if(signUtil.valid()) {
				var data = signUtil.get();
				console.log(data);
				$('.imgTest').attr('background-image','url("'+data+')"');
				$('#output').val(data);
				$('.play_btn').attr('title','hello');
				if(!$("#contrSignPop").hasClass("hidden")) {
					$("#contrSignPop .close-x").trigger("click");
				}
				
			} else {
				removeLoding();
				alert("서명을 입력하세요.");
			}
		});
</script>
 <script src="resources/js/lib/signature_pad.min.js"></script>
 <script src="resources/js/common.js"></script>
  <script src="resources/js/assets/json2.min.js"></script>
  <script src="resources/js/assets/signature_pad.js"></script>
  <script type="text/javascript" src="/resources/js/sign.js"></script>
</body>