(function($, player) {
    function MusicPlayer(dom) {
        this.wrap = dom;
        this.dataList = []; //存放请求到的文件
        this.currentIndex = null; //当前歌曲数组的下标
        this.clearRotateTimer = null; //图片旋转的定时器
        this.listObj = null; //切歌存储对象
        this.list = null; //切歌控制返回的对象
        this.progressMove = player.progress.pro();
    }

    MusicPlayer.prototype = {
        init() {
            this.getDom(); //获取dom元素
            this.getData('../mock/data.json'); //获取数据
        },
        getDom() {
            this.record = document.querySelector('.songImg img');
            this.controls = document.querySelectorAll('.control-menus li');
        },
        getData(url) {
            const This = this;
            $.ajax({
                url: url,
                type: 'get',
                success: function(data) {
                    This.dataList = data;
                    This.listControl();
                    This.listObj = new player.musicControl(data.length);
                    This.loadMusic(This.listObj.index); //加载音乐
                    This.controlMusic(); //控制音乐的上一首，下一首
                    player.music.end(() => {
                        player.music.status = 'playing';
                        This.loadMusic(This.listObj.next());
                    });

                    This.dragProcess();
                },
                error: function() {
                    console.log('数据请求失败！');
                }
            })
        },
        loadMusic(index) {
            player.render(this.dataList[index]); //渲染歌曲图片信息
            player.music.load(this.dataList[index].audioSrc); //加载音乐

            this.progressMove.renderAllTime(this.dataList[index].duration);
            if (player.music.status === 'playing') {
                player.music.play();
                this.controls[2].className = 'playing';
                this.imgRotate(0);

                this.progressMove.move(0);
            }
            this.currentIndex = index;
            this.list.changeActive(index);
        },
        controlMusic() {
            const This = this;
            // 上一首
            this.controls[1].addEventListener('touchend', () => {
                // 切换为上一首时自动播放
                player.music.status = 'playing';
                this.loadMusic(This.listObj.prev());
            });
            // 下一首
            this.controls[3].addEventListener('touchend', () => {
                // 切换为下一首时自动播放
                player.music.status = 'playing';
                this.loadMusic(This.listObj.next());

            });

            // 播放暂停与开始
            this.controls[2].addEventListener('touchend', () => {
                // 当前状态是播放的状态
                if (player.music.status === 'playing') {
                    player.music.pause();
                    this.controls[2].className = '';
                    this.imgStop();
                    this.progressMove.stop();
                } else {
                    player.music.play();
                    this.imgRotate(this.record.dataset.rotate || 0);
                    this.controls[2].className = 'playing'
                    this.progressMove.move();
                }
            })
        },
        // 唱片图片旋转
        imgRotate(deg) {
            clearInterval(this.clearRotateTimer);
            this.clearRotateTimer = setInterval(() => {
                deg = +deg + 0.2;
                this.record.style.transform = `rotate(${deg}deg)`;
                this.record.dataset.rotate = deg;
            }, 1000 / 60)
        },
        // 图片停止旋转
        imgStop() {
            clearInterval(this.clearRotateTimer);
        },


        //列表切歌
        listControl() {
            this.list = player.listControl(this.dataList, this.wrap);
            this.controls[4].addEventListener('touchend', () => {
                this.list.listUp();
            });
            this.list.musicList.forEach((value, index) => {
                value.addEventListener('touchend', () => {
                    // 若点击的是当前播放的歌曲，不做处理
                    if (this.currentIndex === index) {
                        return;
                    }
                    player.music.status = 'playing';
                    this.loadMusic(index);
                    this.list.changeActive(index);
                    this.list.listDown();
                })
            })
        },

        // 拖拽模块
        dragProcess() {

            const This = this;
            const circle = player.progress.drag(document.getElementsByClassName('circle')[0]);
            circle.init();

            // 按下小圆点
            circle.start = function() {
                This.progressMove.stop();
            }

            // 拖拽原点
            circle.move = function(pre) {
                This.progressMove.update(pre);
            }

            // 抬起原点
            circle.end = function(pre) {
                const cutTime = pre * This.dataList[This.listObj.index].duration;
                player.music.playTo(cutTime);
                player.music.play();

                This.progressMove.move(pre); //进度条也要走

                // 旋转图片
                This.imgRotate(This.record.dataset.rotate || 0);

                This.controls[2].className = 'playing';
            }
        }

    }

    const musicPlayer = new MusicPlayer(document.getElementById('wrapper'));
    musicPlayer.init();

})(window.Zepto, window.player)