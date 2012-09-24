App.webview.open("http://www.miiicasa.com");
var repaintCount = 0;
App.webview.addEventListener("repaint", function (rect) {
    rect.repaintCount = repaintCount++
    App.webview.execScript(function (rect) {
        console.log("repaint count: " + rect.repaintCount,
            "repaint rect: ",
            "x: " + rect.x,
            "y: " + rect.y,
            "width: " + rect.width,
            "height: " + rect.height
        );
    }, rect);
});