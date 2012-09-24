App.webview.open("http://www.miiicasa.com");
App.webview.addEventListener("load", function (rect) {
	App.webview.saveImage(App.path + "demo3.png", "png", 100, App.webview.elementRects("#bd")[0])
	App.close();
});