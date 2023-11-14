// 隐藏的切歌菜单
(function(root) {
    function listControl(data, wrapper) {
        this.dom = wrapper;
        this.data = data;

        const list = document.createElement('div'),
            dl = document.createElement('dl'),
            dt = document.createElement('dt'),
            close = document.createElement('div');
        const musicList = []; //存储所有歌曲对应的dom
        list.className = 'pop-list';
        close.className = 'close';
        dt.innerHTML = '播放列表';
        close.innerHTML = '关闭';
        dl.appendChild(dt);

        data.forEach((value, index) => {
            const dd = document.createElement('dd');
            dd.innerHTML = value.name;
            dd.addEventListener('touchend', () => {
                changeActive(index);
            })
            musicList.push(dd);
            dl.append(dd);

        })


        list.appendChild(dl);
        list.appendChild(close);
        this.dom.appendChild(list);
        changeActive(0);

        const height = list.offsetHeight;
        list.style.transform = `translateY(${height}px)`;

        // 为close按钮添加点击事件
        close.addEventListener('touchend', listDown);
        // 列表显示
        function listUp() {
            list.style.transition = '0.5s';
            list.style.transform = `translateY(0)`;
        }
        // 列表隐藏
        function listDown() {
            list.style.transition = '0.5s';
            list.style.transform = `translateY(${height}px)`;
        }

        /**
         * 
         * @param {改变当前的选中元素} index 
         */
        function changeActive(index) {
            for (let i = 0; i < musicList.length; i++) {
                musicList[i].className = '';
                musicList[index].className = 'active';
            }
        }

        return {
            musicList,
            listUp,
            listDown,
            changeActive
        }

    }
    root.listControl = listControl;

})(window.player || (window.player = {}));