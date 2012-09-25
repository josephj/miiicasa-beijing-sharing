App.webview.open("http://www.miiicasa.com");
App.webview.addEventListener("load", function () {
    App.webview.execScript(function () {
        document.querySelectorAll("input#email")[0].value = "muchiii001@yahoo.com.tw";
        document.querySelectorAll("input#password")[0].value = "zaq12345";
    });
    setTimeout(function () {
        App.webview.sendMouseEvent(App.webview.elementRects("input[type=submit]")[0]);
    }, 2000);
});
