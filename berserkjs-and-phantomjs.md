# BerserkJS 與 PhantomJS

基於 QT Webkit 製作，使用 JavaScript 語法開發*測試邏輯*的 Webkit 網路請求工具。

* 只要能安裝 QT 的平台都能使用 BerserkJS
* 作者 - [@貘吃馍香](http://weibo.com/itapir)。綽號寶哥、會寫 Delphi、C 的前端工程師。
![](http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash4/s720x720/304482_4206241027984_1871452624_n.jpg)
* 巴薩卡 - 批著熊皮的狂戰士，用多了會興奮、忘卻痛苦。
<img src="http://images3.alphacoders.com/334/3347.jpg" width="540">
* [投影片](http://vdisk.weibo.com/s/8lqXb)

## 如何安裝 Berserk

### Windows

* 安裝 Qt - [下載頁面](http://qt.digia.com/Try-Qt-Now/)
* 下載 BerserkJS - [下載頁面](https://github.com/tapir-dream/berserkJS/zipball/master)
* 只需要留下 build/release 下的目錄，執行檔為 berserkJS.exe

### MacOSX

Mac/Linux 的使用者要安裝會比較辛苦些！

* 需要安裝 Qt Creator 自行編譯

## 如何使用

* 執行 berserkJS.exe 會顯示一個視窗，可以在左下角輸入 JavaScript 程式碼
* 批次執行：當然就是使用 Command Line

        berserkJS.exe --script=<預先寫好的 JavaScript> --command

## 實際範例

* 新浪微博所使用的效能檢測工具，每日做統計最後累積出這個報表：
![](http://farm9.staticflickr.com/8300/8017880430_a9b3707df7_b.jpg)
![](http://farm9.staticflickr.com/8440/8017877511_f7af8079a6_k.jpg)
![](http://farm9.staticflickr.com/8440/8017881158_2dfac522c1_k.jpg)

## 相關連結

* [介紹頁面](http://tapir-dream.github.com/berserkJS/)
* [GitHub](https://github.com/tapir-dream/berserkJS)

## 相似工具 - PhantomJS

BerserkJS 還能有一個介面讓你比較有感覺，至於 PhantomJS 就完全是走命令行的啦！

* Headless Webkit w/ JavaScript API
* 基於 node-webkit 架設、So… 只要能安裝 Node.js 的平台都能使用 PhantomJS
* 與 BerserkJS 很相似、但較為普及的工具。
* [下載頁面](http://phantomjs.org/download.html)
* 當然功能幾乎一樣，都是用來作網站性能或功能測試：有比較多人整合既有的 UnitTest 框架。
* 使用方式比較麻煩，得透過 page.evaluate 處理 Dom 節點，不若 BerserkJS 來得簡單。
* YUI 的 Grover 就是 PhantomJS 結合 YUI Test 的 Unit Test 自動化測試工具。