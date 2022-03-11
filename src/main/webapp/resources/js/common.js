/*! jQuery TubePlayer - Simplified YouTube Player Management - v2.1.0 - 2016-12-02
* https://github.com/nirvanatikku/jQuery-TubePlayer-Plugin
* Copyright (c) 2016 Nirvana Tikku; Licensed MIT */
(function(e){"use strict";function t(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),a="x"==e?t:8|3&t;return a.toString(16)})}var a=".tubeplayer",r="jquery-youtube-tubeplayer",n="opts"+a,o={inited:!1,ytplayers:{},inits:[],iframeScriptInited:!1,State:{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},Error:{BAD_INIT:0,INVALID_PARAM:2,NOT_FOUND:100,NOT_EMBEDDABLE:101,CANT_PLAY:150}};e.tubeplayer={TubePlayer:o},e.tubeplayer.defaults={afterReady:function(){},stateChange:function(t){var a=this.onPlayer;return function(r){var n=e("#"+t).parent();switch("object"==typeof r&&(r=r.data),r){case o.State.UNSTARTED:return a.unstarted[t].call(n);case o.State.ENDED:return a.ended[t].call(n);case o.State.PLAYING:return a.playing[t].call(n);case o.State.PAUSED:return a.paused[t].call(n);case o.State.BUFFERING:return a.buffering[t].call(n);case o.State.CUED:return a.cued[t].call(n);default:return null}}},onError:function(t){var a=this.onErr;return function(r){var n=e("#"+t).parent();switch("object"==typeof r&&(r=r.data),r){case o.Error.BAD_INIT:case o.Error.INVALID_PARAM:case o.Error.CANT_PLAY:return a.invalidParameter[t].call(n);case o.Error.NOT_FOUND:return a.notFound[t].call(n);case o.Error.NOT_EMBEDDABLE:return a.notEmbeddable[t].call(n);default:return a.defaultError[t].call(n)}}},qualityChange:function(t){var a=this;return function(r){var n=e("#"+t).parent();return"object"==typeof r&&(r=r.data),a.onQualityChange[t].call(n,r)}},rateChange:function(t){var a=this;return function(r){var n=e("#"+t).parent();return"object"==typeof r&&(r=r.data),a.onRateChange[t].call(n,r)}},onQualityChange:{},onRateChange:{},onPlayer:{unstarted:{},ended:{},playing:{},paused:{},buffering:{},cued:{},loaded:{}},onErr:{defaultError:{},notFound:{},notEmbeddable:{},invalidParameter:{}}},e.tubeplayer.defaults.settings={width:480,height:270,allowFullScreen:"true",initialVideo:"DkoeNLuMbcI",start:0,preferredQuality:"default",controls:1,showRelated:!1,playsinline:!1,annotations:!0,autoPlay:!1,loop:0,color:"red",showinfo:!1,modestbranding:!0,protocol:"https:"==window.location.protocol?"https":"http",allowScriptAccess:"always",playerID:"tubeplayer-player-container",onPlay:function(){},onPause:function(){},onStop:function(){},onSeek:function(){},onMute:function(){},onUnMute:function(){},onPlayerLoaded:function(){},onPlayerUnstarted:function(){},onPlayerEnded:function(){},onPlayerPlaying:function(){},onPlayerPaused:function(){},onPlayerBuffering:function(){},onPlayerCued:function(){},onQualityChange:function(){},onRateChange:function(){},onError:function(){},onErrorNotFound:function(){},onErrorNotEmbeddable:function(){},onErrorInvalidParameter:function(){}},e.fn.tubeplayer=function(t,r){var n=e(this),l=typeof t;return 0===arguments.length||"object"===l?n.each(function(){if(n=e(this),"IFRAME"==n.prop("tagName")){var a=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,r=n.attr("src").match(a);if(r&&11==r[7].length){var l={initialVideo:r[7]},i=n.attr("class"),u=n.attr("id");n.attr("width")&&(l.width=n.attr("width")),n.attr("height")&&(l.height=n.attr("height")),l.allowFullScreen=void 0!==n.attr("allowfullscreen")?"true":!1;var d=e("<div></div>").attr({"class":i?i:"",id:u?u:""});n.replaceWith(d);var y=e.extend({},e.tubeplayer.defaults.settings,l,t);o.init(d,y)}}else o.init(e(this),t)}):"string"===l?n.triggerHandler(t+a,r!==void 0?r:null):void 0};var l=function(e){return function(t,a){var r=o.getPkg(t);if(r.ytplayer){var n=e(t,a,r);return n===void 0&&(n=r.$player),n}return r.$player}};e.tubeplayer.getPlayers=function(){return o.ytplayers},o.init=function(l,u){if(l.hasClass(r))return l;var d=e.extend({},e.tubeplayer.defaults.settings,u);d.playerID+="-"+t(),l.addClass(r).data(n,d);for(var y in i)l.bind(y+a,l,i[y]);return o.initDefaults(e.tubeplayer.defaults,d),e("<div></div>").attr("id",d.playerID).appendTo(l),o.initPlayer(l,d),l},o.getPkg=function(e){var t=e.data,a=t.data(n),r=o.ytplayers[a.playerID];return{$player:t,opts:a,ytplayer:r}},o.iframeReady=function(t){return o.inits.push(function(){new YT.Player(t.playerID,{videoId:t.initialVideo,width:t.width,height:t.height,playerVars:{autoplay:t.autoPlay?1:0,controls:t.controls?t.controls:0,loop:t.loop?1:0,playlist:t.playlist?t.playlist:null,rel:t.showRelated?1:0,fs:t.allowFullScreen?1:0,showinfo:t.showinfo?1:0,modestbranding:t.modestbranding?1:0,iv_load_policy:t.annotations?1:3,start:t.start,color:t.color,playsinline:t.playsinline,origin:window.location.origin},events:{onReady:function(a){o.ytplayers[t.playerID]=a.target;var n=e(a.target.getIframe()).parents("."+r);n.tubeplayer("opts").onPlayerLoaded.call(n),e.tubeplayer.defaults.afterReady(n)},onPlaybackQualityChange:e.tubeplayer.defaults.qualityChange(t.playerID),onPlaybackRateChange:e.tubeplayer.defaults.rateChange(t.playerID),onStateChange:e.tubeplayer.defaults.stateChange(t.playerID),onError:e.tubeplayer.defaults.onError(t.playerID)}})}),o.inits.length>=1&&!o.inited?function(){for(var e=0;o.inits.length>e;e++)o.inits[e]();o.inited=!0}:(o.inited&&o.inits.pop()(),window.onYouTubePlayerAPIReady)},o.initDefaults=function(e,t){var a=t.playerID,r=e.onPlayer;r.unstarted[a]=t.onPlayerUnstarted,r.ended[a]=t.onPlayerEnded,r.playing[a]=t.onPlayerPlaying,r.paused[a]=t.onPlayerPaused,r.buffering[a]=t.onPlayerBuffering,r.cued[a]=t.onPlayerCued,r.loaded[a]=t.onPlayerLoaded,e.onQualityChange[a]=t.onQualityChange,e.onRateChange[a]=t.onRateChange;var n=e.onErr;n.defaultError[a]=t.onError,n.notFound[a]=t.onErrorNotFound,n.notEmbeddable[a]=t.onErrorNotEmbeddable,n.invalidParameter[a]=t.onErrorInvalidParameter},o.initPlayer=function(e,t){if(!o.iframeScriptInited){var a=document.createElement("script");a.src=t.protocol+"://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r),o.iframeScriptInited=!0}window.onYouTubePlayerAPIReady=o.iframeReady(t)},o.getVideoIDFromURL=function(e){e=e||"";var t=e.indexOf("?"),a=e.substring(t,e.length),r=a.indexOf("v=");if(r>-1){var n=a.indexOf("&",r);return-1===n&&(n=a.length),a.substring(r+"v=".length,n)}return""};var i={opts:l(function(e,t,a){return a.opts}),cue:l(function(e,t,a){a.ytplayer.cueVideoById(t,0,a.opts.preferredQuality)}),cuePlaylist:l(function(e,t,a){a.ytplayer.cuePlaylist(t.playlist,t.index||0,t.startSeconds||0,a.opts.preferredQuality)}),play:l(function(e,t,a){var r,n;"object"==typeof t?(r=t.id,n=t.time):t!==void 0&&(r=t,n=0),r?a.ytplayer.loadVideoById({videoId:r,startSeconds:n,suggestedQuality:a.opts.preferredQuality}):a.ytplayer.playVideo(),a.opts.onPlay(t)}),playPlaylist:l(function(e,t,a){var r,n,o;if("object"==typeof t){var l=void 0!==t.length;r=l?t:t.playlist,o=l?0:t.time||0,n=l?0:t.index||0}else t!==void 0&&(r=t,o=0,n=0);r&&(a.ytplayer.loadPlaylist(r,n,o,a.opts.preferredQuality),a.opts.onPlay(t))}),next:l(function(e,t,a){a.ytplayer.nextVideo()}),previous:l(function(e,t,a){a.ytplayer.previousVideo()}),playVideoAt:l(function(e,t,a){a.ytplayer.playVideoAt(t)}),pause:l(function(e,t,a){a.ytplayer.pauseVideo(),a.opts.onPause(a)}),stop:l(function(e,t,a){a.ytplayer.stopVideo(),a.opts.onStop(a)}),seek:l(function(e,t,a){if(/:/.test(t)){var r=t.split(":").reverse();t=0;for(var n=0;r.length>n;n++)t+=Math.pow(60,n)*(0|r[n])}a.ytplayer.seekTo(t,!0),a.opts.onSeek(t)}),mute:l(function(e,t,a){a.$player.attr("data-prev-mute-volume",a.ytplayer.getVolume()),a.ytplayer.mute(),a.opts.onMute(a)}),unmute:l(function(e,t,a){a.ytplayer.unMute(),a.ytplayer.setVolume(a.$player.attr("data-prev-mute-volume")||50),a.opts.onUnMute()}),isMuted:l(function(e,t,a){return a.ytplayer.isMuted()}),volume:l(function(e,t,a){return void 0===t?a.ytplayer.getVolume():(a.ytplayer.setVolume(t),a.$player.attr("data-prev-mute-volume",a.ytplayer.getVolume()),void 0)}),quality:l(function(e,t,a){return void 0===t?a.ytplayer.getPlaybackQuality():(a.ytplayer.setPlaybackQuality(t),void 0)}),playbackRate:l(function(e,t,a){return void 0===t?a.ytplayer.getPlaybackRate():(a.ytplayer.setPlaybackRate(t),void 0)}),data:l(function(e,t,a){var r={},n=a.ytplayer;return r.videoLoadedFraction=n.getVideoLoadedFraction(),r.bytesLoaded=n.getVideoBytesLoaded(),r.bytesTotal=n.getVideoBytesTotal(),r.startBytes=n.getVideoStartBytes(),r.state=n.getPlayerState(),r.currentTime=n.getCurrentTime(),r.duration=n.getDuration(),r.videoURL=n.getVideoUrl(),r.playlist={videoIDs:n.getPlaylist(),currentIndex:n.getPlaylistIndex()},r.videoEmbedCode=n.getVideoEmbedCode(),r.videoID=o.getVideoIDFromURL(r.videoURL),r.availableQualityLevels=n.getAvailableQualityLevels(),r.availablePlaybackRates=n.getAvailablePlaybackRates(),r}),videoId:l(function(e,t,a){return o.getVideoIDFromURL(a.ytplayer.getVideoUrl())}),size:l(function(t,a,r){a!==void 0&&a.width&&a.height&&(r.ytplayer.setSize(a.width,a.height),e(r.ytplayer).css(a))}),destroy:l(function(t,l,i){i.$player.removeClass(r).data(n,null).unbind(a).html(""),delete o.ytplayers[i.opts.playerID];var u=e.tubeplayer.defaults,d=["unstarted","ended","playing","paused","buffering","cued","loaded"];return e.each(d,function(e,t){delete u.onPlayer[t][i.opts.playerID]}),d=["defaultError","notFound","notEmbeddable","invalidParameter"],e.each(d,function(e,t){delete u.onErr[t][i.opts.playerID]}),delete u.onQualityChange[i.opts.playerID],delete u.onRateChange[i.opts.playerID],"destroy"in i.ytplayer&&i.ytplayer.destroy(),e(i.ytplayer).remove(),null}),player:l(function(e,t,a){return a.ytplayer})}})(jQuery);

$(function(){
	// custorm modal overlay
	var Body = $('body'),
		Document = $(document),
		Wrapper = $('.wrap'),
		olContainer = $('#overlay'),
		overLay = function () {
			var insert = Body.find('.insert');
			insert.detach();
			olContainer.append(insert);
			Body
				.on('click', '.insert', function (e) {
					e.stopPropagation();
				})
				.on('click', '.js-closeLay', function (e) {
					olContainer.fadeOut();
					$(this).parents('.insert').addClass('hidden').removeAttr('style');
					bodyfixedOff();
					e.preventDefault();
				})
				.on('click', '#overlay', function (e) {
					$(this).fadeOut();
					$(this).find('.insert').addClass('hidden').removeAttr('style');
					bodyfixedOff();
					e.preventDefault();
				})
				.keyup(function (e) {
					if (e.keyCode == 27) {
						$('#overlay').fadeOut();
						$(this).find('.insert').addClass('hidden').removeAttr('style');
						bodyfixedOff();
					}
				});
				
			Body
				.find('.js-openLay').on('click', function (e) {
					var target = $(this).attr('href'),
						toLoad = $(target);
					//insert.addClass('hidden');
					toLoad.removeClass('hidden');
					olContainer.fadeIn();
					bodyFixed();
					e.stopPropagation();
					setTimeout(function(){
						toLoad.css('top', '50%');
					},10)
				})
		};
		
	overLay();
	//a[href="#"]
	$('a[href="#"]').on('click', function(e){
		e.preventDefault();
	})
	$('.accCheck').on('click', function(e){
		e.preventDefault();
	})
	
	var windowScroll;
	function bodyFixed(){
		windowScroll = $(window).scrollTop();
		Body.addClass('fixed');
		Body.css('top',-windowScroll + 'px');
	}

	function bodyfixedOff(){
		Body.removeClass('fixed');
		Body.removeAttr('style');
		$(window).scrollTop(windowScroll);
	}
})


function responsiveImg(){
	var winWidth = $(window).width(), real_width, mobile = undefined;
	var scrollWidth = window.innerWidth - $(window).width();
	if (scrollWidth == 0){
		if (winWidth < 1200) {
			globalLayout = 'mobile';
		} else {
			globalLayout = 'desktop';
		}
		
	} else {
		if (winWidth < 1200 - scrollWidth) {
			globalLayout = 'mobile';
		} else {
			globalLayout = 'desktop';
		}
	}
	
    $('.responsive-image').each(function(){
    	$(this).attr('src', $(this).attr('data-media-' + globalLayout));
    });
}

function topSpot(){
	var footerTop = browser == 'ie' ? document.getElementById('footer').offsetTop : $('footer').offset().top, //IE 호환
		winHeight = $(window).height(),
		winScroll = $(window).scrollTop();

	
	if(winScroll >= (footerTop - winHeight)){
		$(".sticky_detail").addClass('page_end');
	} else{
		$(".sticky_detail").removeClass('page_end');
	}
}

//design alert
window.org_alert = window.alert;
window.alert = function(message){
	$(document.createElement('div'))
		.attr({title: 'Alert', 'class': 'alert'})
		.html(message)
		.dialog({
			buttons: {"닫기": function(){$(this).dialog('close');}},
			open: function(){
				$(this).parents('.ui-dialog').addClass('alert_dialog');
			},
			close: function(){
				$(this).remove();
				if($(window).scrollTop() == 0){
					$('.bill_box').removeClass('fixed');
				}
			},
			draggable: true,
			modal: true,
			resizable: false
	});
};

