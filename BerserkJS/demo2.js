App.netListener(true);
App.webview.open("http://www.miiicasa.com");
App.webview.addEventListener("load", function () {
	App.selector.png();
	App.selector.sizeout(30*30);
	var data = JSON.stringify(App.selector.get(), undefined, 2);
	App.writeFile(App.path + "demo2.txt", data);
	App.netListener(false);
	App.close();
});