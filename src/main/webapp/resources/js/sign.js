
var signUtil = {
	signaturePad: null
	, init: function() {
//		if(global.isMobile) {
//			this.initMobile();
//		} else {
			this.initPC();
//		}
	}
	, initPC: function() {
		var pad = $("#signPad");
		var sign = $("#signPad canvas");
		sign.width(pad.width());
		sign.height(pad.height());
		
		var wrapper = document.getElementById("signPad");
		var canvas = wrapper.querySelector("canvas");
		if(this.signaturePad == null) {
			this.signaturePad = new SignaturePad(canvas, {
				// It's Necessary to use an opaque color when saving image as JPEG;
				// this option can be omitted if only saving as PNG or SVG
				//backgroundColor: 'rgb(255, 255, 255)'
			});
		}
		
		var ratio =  Math.max(window.devicePixelRatio || 1, 1);
		canvas.width = canvas.offsetWidth * ratio;
		canvas.height = canvas.offsetHeight * ratio;
		canvas.getContext("2d").scale(ratio, ratio);
		this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
	}
	, initMobile: function() {
		
	}
	, open: function() {
	console.log("asdasd");
		setTimeout(function(){
			signUtil.init();
		}, 100);
	}
	, get: function(type) {
		var result;
			type = type == undefined ? "image/png" : type;
			result = this.signaturePad.toDataURL(type);
		return result;
	}
	, valid: function() {
		return !this.signaturePad.isEmpty() ||$("#signText").prop("placeholder") == $("#signText").val();
	}
};