// �}��
App.netListener(true);
// �X�ݯS�w URL
App.webview.open("http://www.miiicasa.com");
// ���ݭ��� onLoad
App.webview.addEventListener("load", function () {
    // ����ƾ�
    var data = JSON.stringify(App.networkData(), undefined, 2);
    // �g�J���a�ɮ�
    App.writeFile(App.path + "demo.txt", data);
    // ����
    App.netListener(false);
    App.close();
});
