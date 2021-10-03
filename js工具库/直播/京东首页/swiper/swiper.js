// 给jquery实例对象啊扩展方法

$.fn.extend({
    // options 代表用户传入的配置对象

    swiper: function(options) {
        // 实例化swiper对象
        var obj = new Swiper(options, this);
        obj.init();
    }
})

// 接受用户的配置对象和初始化
/**
 * 
 * @param {用户的配置对象} options 
 * @param {轮播图节点对象} wrap 
 */
function Swiper(options, wrap) {
    //要轮播的对象的容器
    this.wrap = wrap;
    // 轮播的内容,默认为空
    this.contentList = options.contentList || [];
    // 轮播时间间隔 
    this.autoChangeTime = options.autoChangeTime || 5000;
    // 轮播的动画类型 fade 淡入淡出 animate 从左到右,默认淡入淡出
    this.type = options.type || 'fade';
    // 是否自动轮播
    this.isAuto = options.auto === undefined ? true : !!options.isAuto;
    // 左右按钮的显示状态，共有 3 种 
    // 1. always 代表一支显示   2. hide 代表隐藏    3. hover 移入显示
    this.showChangeBtn = options.showChangeBtn || 'always';
    // 是否显示小圆点
    this.showSpots = options.showSpots === undefined ? true : !!options.showSpots;
    // 小圆点的大小
    this.spotSize = options.spotSize || 10;
    // 小圆点的位置 left center right
    this.spotPosition = options.spotPosition || 'left';
    // 小圆点的背景颜色
    this.spotColor = options.spotColor || "rgba(255,255,255,.4)";
    //当前选中的小圆点颜色
    this.curSptColor = options.curSptColor || 'red';
    // 轮播对象的宽度
    this.width = options.width || $(wrap).width();
    // 轮播对象的高度
    this.height = options.height || $(wrap).height();

    // 轮播对象的个数
    this.len = this.contentList.length;
    // 当前轮播的索引值
    this.nowIndex = 0;
    // 自动轮播的计时器
    this.timer = null;
    // 是否切换页面的锁
    this.lock = false;
}

//轮播图的主要方法

Swiper.prototype.init = function() {
    // 创建轮播图的结构，在用户传入结构里面添加，便于操作
    this.createElement();

    // 初始化轮播图结构
    this.initStyle();

    // 绑定事件函数
    this.binEvent();

    // 自动轮播
    if (this.isAuto) {
        this.autoChange();
    }

}

// 添加dom结构
Swiper.prototype.createElement = function() {
    // 创建所有结构，包括大容器，ul ,li，左右方向按钮，下面的小圆点

    //自己创建的最外成结构
    var mySwiperWrapper = $('<div class="my-swiper-wrapper"></div>');
    // ul列表，包裹轮播项目
    var mySwiperItems = $('<ul class="my-swiper-items"></ul>');

    // 创建小圆点容器
    var spotWrapper = $('<div class="my-swiper-spots"></div>')

    // 创建左按钮
    var leftBtn = $('<div class="my-left-btn my-swiper-btn"><i class="iconfont">&#xe628;</i></div>');
    // 创建右按钮
    var rightBtn = $('<div class="my-right-btn my-swiper-btn"><i class="iconfont">&#xe625;</i></div>');

    // 根据用户传入的轮播项目数创建li 和小圆点
    for (var i = 0; i < this.len; i++) {
        // 添加li,并且加入到ul
        $('<li class="my-swiper-item"></li>').html(this.contentList[i]).appendTo(mySwiperItems);
        //创建小圆点，加入到小圆点容器中
        $('<span></span>').appendTo(spotWrapper);
    }

    // 如果用户选择从左到右轮播则需要在末尾再加一个和第一个轮播内容一样的
    if (this.type === 'animate') {
        mySwiperItems.append($('<li class="my-swiper-item"></li>').html($(this.contentList[0]).clone(true)));
    }

    // 根据用户选择是否显示左右按钮
    switch (this.showChangeBtn) {
        case 'hide':
            {
                leftBtn.hide();
                rightBtn.hide();
                break;
            }
        case 'hover':
            {
                // 先把按钮隐藏
                leftBtn.hide();
                rightBtn.hide();
                mySwiperWrapper.hover(
                    function() {
                        leftBtn.show();
                        rightBtn.show();
                    },
                    function() {
                        leftBtn.hide();
                        rightBtn.hide();
                    }
                )
                break;
            }
        default:
            {
                //默认
                break;
            }
    }


    // 设置是否显示小圆点

    // 不显示
    if (!this.showSpots) {
        spotWrapper.hide();
    }

    // console.log(this.len);
    mySwiperWrapper
        .append(mySwiperItems)
        .append(leftBtn)
        .append(rightBtn)
        .append(spotWrapper)
        .appendTo(this.wrap)
        .addClass('my-swiper-wrapper_' + this.type);
    // 最后再根据轮播方式动态的添加一个样式
    // console.log(mySwiperWrapper);
}

// 动态设置样式

Swiper.prototype.initStyle = function() {
    // 轮播区域的整体大小
    $(this.wrap)
        .find('.my-swiper-items')
        .css({
            width: this.type === 'animate' ? this.width * (this.len + 1) : this.width,
            height: this.height
        })
        .find('.my-swiper-item')
        .css({
            width: this.width,
            height: this.height
        })


    // 根据轮播图类型确定第一张图片
    if (this.type === 'fade') {
        // 显示第一张
        $(this.wrap).find('.my-swiper-item').eq(this.nowIndex).show();
    } else {
        $(this.wrap).find('.my-swiper-items').css({
            left: -this.nowIndex * this.width,
        })
    }

    // 设置小圆点
    $(this.wrap)
        // 设置容器
        .find('.my-swiper-spots')
        .css({
            textAlign: this.spotPosition,
            display: this.showSpots ? 'block' : 'none'
        })
        // 设置每一个小圆点
        .find('span')
        .css({
            height: this.spotSize,
            width: this.spotSize,
            backgroundColor: this.spotColor,
        })
        // 这里取余视为了最后一张时能立马回到第一张‘
        .eq(this.nowIndex % this.len)
        .css({
            backgroundColor: this.curSptColor
        })
}

// 绑定轮播事件
Swiper.prototype.binEvent = function() {
    // 保存this指向

    var self = this;

    $(this.wrap)
        // 左边按钮
        .find('.my-left-btn')
        .click(function() {
            // console.log(self.lock)
            // console.log(1)
            // 图片是否切换完成
            if (self.lock) {
                return;
            }
            self.lock = true;
            // console.log(112);
            if (self.type === 'fade') {
                if (self.nowIndex === 0) {
                    self.nowIndex = self.len - 1;
                } else {
                    self.nowIndex--;
                }

            } else {
                if (self.nowIndex === 0) {
                    $(self.wrap)
                        .find('.my-swiper-items')
                        .css({
                            left: -self.len * self.width,
                        })
                        // 第一张要跳转到最后一张
                    self.nowIndex = self.len - 1;
                } else {
                    self.nowIndex--;
                }
                // console.log(1);
            }
            // 重新渲染页面
            self.change();
        })

    $(this.wrap)
        // y右按钮、
        .find('.my-right-btn')
        .click(function() {
            // console.log(2)
            // console.log(self.lock)

            // 图片是否切换完成
            if (self.lock) {
                return;
            }

            self.lock = true;

            if (self.type === 'fade') {
                if (self.nowIndex === self.len - 1) {
                    self.nowIndex = 0;
                } else {
                    self.nowIndex++;
                }

            } else {
                if (self.nowIndex === self.len) {
                    $(self.wrap)
                        .find('.my-swiper-items')
                        .css({
                            left: 0,
                        })
                        // 最后一张要跳转到第一张
                    self.nowIndex = 1;
                } else {
                    self.nowIndex++;
                }
                // console.log(2)
            }
            // 重新渲染页面
            self.change();
        })

    // 小圆点的事件
    $(this.wrap)
        .find('.my-swiper-spots')
        // 事件委托到span
        .on('click', 'span', function() {
            console.log(3)
            if (self.lock) {
                return;
            }

            self.lock = true;
            self.nowIndex = $(this).index();
            // self.change();
            // console.log(3)
        })

    // 鼠标的移入移出
    $(this.wrap).mouseenter(function() {
        clearInterval(self.timer);
    }).mouseleave(function() {
        if (self.isAuto) {
            self.autoChange();
        }
    })

    // 切换页面时关闭定时器
    $(window).blur(function() {
        clearInterval(self.timer);
    }).focus(function() {
        if (self.isAuto) {
            self.autoChange();
        }
    })
}

// 根据下标更新图片

Swiper.prototype.change = function() {
    var self = this;
    // console.log(this.nowIndex)
    if (this.type === 'fade') {
        $(this.wrap)
            .find('.my-swiper-item')
            .fadeOut()
            .eq(self.nowIndex)
            .fadeIn(function() {
                self.lock = false; // 淡入淡出效果已经完成，关闭锁
                // console.log(self.lock)
            });
        // console.log(self.lock)
        // console.log($(this.wrap)
        //     .find('.my-swiper-item').eq(self.nowIndex)[0])
        // console.log(self.nowIndex)
    } else {
        $(this.wrap)
            .find('.my-swiper-items')
            .animate({
                left: -this.nowIndex * this.width,
            }, function() {
                self.lock = false; // 从左到右，关闭锁
            })
    }

    // 更新小圆点
    $(this.wrap).find('.my-swiper-spots > span')
        .css({
            backgroundColor: this.spotColor,
        })
        .eq(this.nowIndex % this.len)
        .css({
            backgroundColor: this.curSptColor,
        })
}

// 自动播放
Swiper.prototype.autoChange = function() {
    var self = this;
    clearInterval(this.timer);
    self.timer = setInterval(function() {
        $(self.wrap).find('.my-right-btn').trigger('click');
    }, self.autoChangeTime);
}