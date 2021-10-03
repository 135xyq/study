(function() {

    var runFlag = 0;
    var totalImgLen = 0;

    var init = function() {
        initData();
        initEvents();
    }

    var initEvents = function() {
        window.addEventListener('scroll', onWindowScroll);
    }

    // 展示瀑布效果

    var onWindowScroll = function() {
        var screenHeight = window.innerHeight; //屏幕高度
        var scrollTop = window.pageYOffset; //滚动的距离
        var total = screenHeight + scrollTop; //页面的底部距离顶部的高度
        var lastImg = document.querySelectorAll('.item')[document.querySelectorAll('.item').length - 1]
        var lasNodeDistance = lastImg.offsetTop + lastImg.offsetHeight / 2; //最后一行图片的一半距离顶端的高度
        // 节流
        if (total >= lasNodeDistance) {
            var now = Date.now(); // 时间戳 
            if (now - runFlag > 50) {
                initData();
                runFlag = now;
            }
        }
    }

    //请求数据
    var initData = function() {
            ajax({
                url: 'https://api.hyfarsight.com/test/testRequest/imgList',
                data: {},
                onSuccess: function(response) {
                    renderImgList(response.imgList);
                },
                onError: function(error) {
                    console.log(error);
                }
            });
        }
        // 渲染图片
    var renderImgList = function(imgList) {
        imgList.forEach(function(item) {
            var divNode = document.createElement('div');
            divNode.className = 'item';
            var img = new Image();
            img.src = item;
            divNode.appendChild(img);
            document.querySelector('.img-container').appendChild(divNode);
        })
        document.querySelectorAll('img').forEach(function(img) {
            img.onload = function() {
                totalImgLen++
                totalImgLen === document.querySelectorAll('img').length && waterfallFn();
            }
        })
    }

    // 图片自动填充空格部分
    var waterfallFn = function() {
        var arrNode = Array.prototype.slice.call(document.querySelectorAll('.item'));
        var hArr = arrNode.slice(0, 5).map(function(node) {
            return node.offsetHeight;
        })

        arrNode.slice(5).forEach(function(img) {
            var minHeight = Math.min.apply(null, hArr);
            var minIndex = hArr.indexOf(minHeight);

            img.style.position = 'absolute';
            img.style.top = minHeight + 20 + 'px';
            img.style.left = arrNode[minIndex].offsetLeft - 10 + 'px';
            hArr[minIndex] += img.offsetHeight + 20;
        })
    }
    init();
})()