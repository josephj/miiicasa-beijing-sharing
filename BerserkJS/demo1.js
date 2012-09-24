// 開啟
App.netListener(true);
// 訪問特定 URL
App.webview.open("http://www.miiicasa.com");
// 等待頁面 onLoad
App.webview.addEventListener("load", function () {
    // 獲取數據
    var data = JSON.stringify(App.networkData(), undefined, 2);
    // 寫入本地檔案
    App.writeFile(App.path + "demo.txt", data);
    // 關閉
    App.netListener(false);
    App.close();
});
