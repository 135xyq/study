(function() {
    var videoPlayer,
        video,
        play,
        menu,
        time,
        nowpro,
        nowSpot,
        progroess,
        quick,
        quickList,
        lists,
        add,
        ins;

    var init = function() {
        // 初始化变量
        initialize();

        // 绑定事件函数
        addEventsMyFunction();

        // 页面渲染
        renderPages();
    }

    var initialize = function() {
        videoPlayer = document.getElementsByClassName('video_player')[0];
        video = document.getElementsByTagName('video')[0];
        play = document.getElementsByClassName('play')[0];
        menu = document.getElementsByClassName('menu')[0];
        time = document.getElementsByClassName('time')[0];
        nowpro = document.getElementsByClassName('nowpro')[0];
        nowSpot = document.getElementsByClassName('now-spot')[0];
        progroess = document.getElementsByClassName('progroess')[0];
        quick = document.getElementsByClassName('quick')[0];
        quickList = document.getElementsByClassName('quickList')[0];
        lists = document.getElementsByClassName('quickList')[0].getElementsByTagName('li');
        add = document.getElementsByClassName('add')[0];
        ins = document.getElementsByClassName('ins')[0];

    }

    var addEventsMyFunction = function() {
        // 导航栏显示
        videoPlayer.addEventListener('mouseenter', onmouseenterPlay)
        videoPlayer.addEventListener('mouseleave', onmouseleavePlay)

        // 播放按钮事件
        play.addEventListener('click', onclickPlay);

        // 进度条放大显示
        progroess.addEventListener('mouseenter', onmouseenterProBig)
        progroess.addEventListener('mouseleave', onmouseleaveProSmall)

        // 拖拉进度条
        progroess.addEventListener('click', onclickDragPro)

        // 倍速
        quick.addEventListener('click', onclickQuickShow);
        quickList.addEventListener('mouseleave', onmouseleaveQuickHide);

        // 加减音量
        add.addEventListener('click', onclickAddSound);
        ins.addEventListener('click', onclickInsSound);


    }

    var renderPages = function() {
        // 渲染播放时间
        showPlayTime();

        // 倍速
        showQuick()
    }

    // 导航栏显示
    var onmouseenterPlay = function() {
        menu.style.display = 'block';
    }
    var onmouseleavePlay = function() {
        menu.style.display = 'none';
    }

    // 播放按钮事件
    var onclickPlay = function() {
        if (video.paused) {
            video.play();
            play.innerHTML = "暂停"
        } else {
            video.pause();
            play.innerHTML = "播放"
        }
    }

    // 进度条放大显示
    var onmouseenterProBig = function() {
        progroess.style.height = "12px";
        nowpro.style.height = "12px";
        nowSpot.style.height = "16px";
        progroess.style.top = "-12px";
    }

    var onmouseleaveProSmall = function() {
        progroess.style.height = "2px";
        nowpro.style.height = "2px";
        nowSpot.style.height = "6px";
        progroess.style.top = "-2px";
    }

    // 拖拉进度条
    var onclickDragPro = function(e) {
        var location = e.layerX;
        var width = progroess.clientWidth;
        var currentTimes = location / width * (video.duration);
        video.currentTime = currentTimes;
    }

    //倍速显示
    var onclickQuickShow = function() {
        quickList.style.display = "block";
    }

    var onmouseleaveQuickHide = function() {
        quickList.style.display = "none";
    }

    //加减音量
    var onclickAddSound = function() {
        video.volume = video.volume + 0.1 >= 1 ? 1 : video.volume + 0.1;
    }

    var onclickInsSound = function() {
        video.volume = video.volume - 0.1 <= 0 ? 0 : video.volume - 0.1;
    }

    var showQuick = function() {
        for (var i = 0; i < lists.length; i++) {
            lists[i].index = i;
            lists[i].onclick = function() {
                // console.log(this.index)
                switch (this.index) {
                    case 0:
                        video.playbackRate = 1;
                        quick.innerHTML = "倍速";
                        break;
                    case 1:
                        video.playbackRate = 1.25;
                        quick.innerHTML = "x1.25";
                        break;
                    case 2:
                        video.playbackRate = 1.5;
                        quick.innerHTML = "x1.5";
                        break;
                    case 3:
                        video.playbackRate = 2.0;
                        quick.innerHTML = "x2.0";
                        break;
                }
            }
        }

    }

    // 显示时间
    var showPlayTime = function() {
        setInterval(function() {
            var totalTime = video.duration;
            var nowTime = video.currentTime;
            time.innerHTML = parseInt(nowTime / 60) + ":" + parseInt(nowTime % 60) + '/' + parseInt(totalTime / 60) + ':' + parseInt(totalTime % 60)
            var width = nowTime / totalTime * progroess.clientWidth;
            nowpro.style.width = width + "px";
            nowSpot.style.left = width + "px";
        }, 500)
    }


    init();

})()