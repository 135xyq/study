;
(function(root) {
    //渲染高斯模糊的背景和唱片的图片
    function renderBg(src) {
        root.blurImg(src);

        const img = document.querySelector('.songImg img');
        img.src = src;
    }

    // 渲染歌曲信息
    function renderInfo(data) {
        const songChildren = document.querySelector('.songIfo').children;
        // console.log(songChildren)
        songChildren[0].innerHTML = data.name;
        songChildren[1].innerHTML = data.singer;
        songChildren[2].innerHTML = data.album;
    }

    // 渲染是否喜欢
    function renderIsLike(liking) {
        const lis = document.querySelectorAll('.control-menus li');
        lis[0].className = liking ? 'liking' : '';
    }

    root.render = function(data) {
        renderBg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike);
    }
}(window.player || (window.player = {})))