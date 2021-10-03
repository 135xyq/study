var t = document.getElementsByClassName('t')[0];
var view = document.getElementsByClassName('waiguan')[0];
var viewSelect = ["全屏", "禅模式", "居中布局", "显示菜单栏", "显示侧边栏", "显示状态栏", "显示面板", "放大", "缩小", "重置缩放"];
var str = "";
t.onclick = function() {

    viewSelect.forEach(function(ele, index, self) {
        str += '<li>' + ele + '</li>';
    });
    view.innerHTML = str;
}