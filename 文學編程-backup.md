## Leo 編輯器

* Python 2.6+ / 3.0+
* PyQT - Qt is strongly recommended

## Literate Programming 文學

`The literate programming paradigm, as conceived by Knuth, represents a move away from writing programs in the manner and order imposed by the computer, and instead enables programmers to develop programs in the order demanded by the logic and flow of their thoughts. Literate programs are written as an uninterrupted exposition of logic in an ordinary human language, much like the text of an essay, in which macros which hide abstractions and traditional source code are included. Literate programming tools are used to obtain two representations from a literate source file: one suitable for further compilation or execution by a computer, the "tangled" code, and another for viewing as formatted documentation, which is said to be "woven" from the literate source. While the first generation of literate programming tools were computer language-specific, the later ones are language-agnostic and exist above the programming languages.`

* Literate programming with PHP - https://github.com/bergie/noweb.php

* An outlining editor for programmers.
* Outlines clarify the big picture and provide unlimited space for details.
* A flexible browser for projects, programs, classes or data.
* A literate programming tool, compatible with noweb and CWEB.
* Leo outlines enhance any programming language.
* A data organizer for web sites and other complex data.
* Leo outlines can generate complex data spanning many different files.
* A project manager. Leo provides multiple views of a project within a single outline. Leo naturally * * represents tasks that remain up-to-date.
* Portable. Leo runs on Windows, Linux and MacOS X Jaguar.
* 100% pure Python. Leo uses Tk/tcl to draw the screen.
* Fully scriptable using Python.? Leo's outline files are XML format.
* Open Software, distributed under the Python License.

* noweb
* 强调文档的重要性，代码只是程序员工作的一小部分。
* 文學編程是由高德納發明的編程方法，用以替代 20 世紀 70 年代提出的結構化編程（Structured programming）典範。
  * 電腦程式設計藝術》（The Art of Computer Programming）的作者。此書是計算機科學界最受高度敬重的參考書籍之一。他創造了演算法分析的領域，在數個理論計算機科學的分支做出初步貢獻，此外還是排版軟體 TeX 和字型設計系統 Metafont 的發明人。
* 讓程式設計師用他們 *自己思維內在的邏輯和流程* 所要求的順序開發程式、而非傳統的由電腦強加的編寫程式的方式和順序
* 文學編程工具用來從 *文學原始檔* 中獲得 *兩種表達方式*
  * *繞出* ：一種用於電腦進一步的編譯和執行，稱作「繞出」（Tangled）的代碼 (Output)
  * *織出* ：一種用于格式化文件，稱作從文學原始碼中「織出」（Woven）。[3]。
* 不依賴具體語言，並且存在於比程式語言更高的層次中。
* 文學編程為高質量程式而生，因為它強迫程式設計師 *顯式描述程式背後的思路* ，*讓不充分的設計決策無所遁形*。
* 高德納還聲稱文學編程提供了一流的文件系統，它並非外掛程式，而是隨著編程思路的慢慢展現而不斷自然發展的過程。產生出來的文件使作者能在以後的任何時間重新找到自己的思路，也能使其他程式設計師更容易理解程式的建構過程。
* 範例：是標準Unix單詞計數程式wc的文學實作
* 實際寫作：
  * 由兩個尖括弧組成("<<...>>")的標記符號表示宏，
  * "@"符號在noweb檔案中表示一節代碼的結束。
  * "<<*>>"符號表示「根」，即最上層節點，文學編程工具要從這裡展開宏組成的網。
  * 實際上，擴充功能的原始碼可透過任何節和小節（即標為"<<代码块名>>="的代碼）寫出來
  * 所以一個文學程式檔案可包括多個機器原始碼檔案。

`wc的目的是对多个文件中的行、单词和字母计数。文件中的行数是......../更多解释/

        这里是由 noweb 程序 wc.nw 定义的文件 wc.c 的概述：
        <<*>>=
        <<包含头文件>>
        <<定义>>
        <<全局变量>>
        <<函数>>
        <<主程序>>
        @

        我们必须包含标准输入输出定义，因为我们想发送格式化的输出到stdout和stderr上。
        <<包含头文件>>=
        #include <stdio.h>
        @`

## Leo

* 需安裝 Python (http://www.python.org/getit/)

* http://webpages.charter.net/edreamleo/front.html
* Leo - 文學化編輯環境
* 使用完全看你的需求
* Leo 不能自动完成
* Leo 不能调用环境运行
* Leo 不能单步追踪
* Leo 不能自动重构代码
* Leo 不能自动定位类定义
* 源代码只是构成程序的一小部分！程序的真正主体是对它的算法、结构、目的和用法的描述——实现它的源代码并不是主要的
* 寫程式不只是把原始碼寫出來就夠了，還需要 API 文件、工作日誌、測試、配置
* tangled 網路：人的思維勢非線性的，是自由漫生的，這就是為什麼 MindMap 適合我們發想的原因。
* Leo 是以「節點樹」的概念做維護這樣自由的思路、形成「數據為中心、框架開發」、「以結構為中心、模版化開發」的習慣
* 不需要為了程式碼多而煩惱、多文件管理功能、自動同步文件、同步連結兩個代碼部分
* 編輯產生出的文件、Leo 會自動更新
* 工作很繁雜
  * F2E 專案時程管理、開 Ticket
  * 自己的工作
    * 修 Bug
  * 協助 Team Member
  * 傳教士


