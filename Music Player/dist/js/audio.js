(function(root) {
    function audioMusic() {
        this.audio = new Audio();
        this.status = 'paused';
    }
    audioMusic.prototype = {
        // 加载音乐
        load(src) {
            this.audio.src = src;
            this.audio.load();
        },
        // 播放音乐
        play() {
            this.audio.play();
            this.status = 'playing';
        },
        //暂停音乐
        pause() {
            this.audio.pause();
            this.status = 'paused';
        },
        // 结束音乐的事件
        end(fn) {
            this.audio.onended = fn;
        },
        // 跳到音乐的某个节点
        playTo(time) {
            this.audio.currentTime = time; //事件单位：秒
        }
    }
    root.music = new audioMusic();
})(window.player || (window.player = {}));