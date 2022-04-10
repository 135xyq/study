(function(root) {
    /**
     * 
     * @param {*} lenth歌曲的总数目
     */
    function musicControl(lenth) {
        this.length = lenth;
        this.index = 0;
    }
    musicControl.prototype = {
        // 上一首
        prev() {
            return this.get(-1);
        },
        // 下一首
        next() {
            return this.get(1);
        },
        get(val) {
            this.index = (this.length + val + this.index) % this.length;
            return this.index;
        }
    }
    root.musicControl = musicControl;

})(window.player || (window.player = {}));