App.webview.open("http://www.miiicasa.com");
App.webview.addEventListener("load", function (rect) {
	var base64 = App.webview.dataURIFromRect({
		x: 500,
		y: 200,
		width: 200,
		height: 200
	});
	App.webview.execScript(function (base64) {
		var img = document.createElement("img");
		img.src = base64;
		document.getElementById("bd").appendChild(img);
	}, base64);
});