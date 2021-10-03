(function() {

    moment.locale('zh-cn');
    var time1,
        time2,
        time3,
        week,
        date,
        up,
        down,
        today = moment(),
        month,
        year,
        go;
    //获取dom元素
    var getDomElementFunction = function() {
        time1 = document.querySelector('.time1');
        time2 = document.querySelector('.time2');
        time3 = document.querySelector('.time3');
        week = document.querySelector('.week');
        date = document.querySelector('.date');
        up = document.querySelector('.up');
        down = document.querySelector('.down');
        month = document.querySelector('.controls #month');
        year = document.querySelector('.controls #year');
        go = document.querySelector('#btn');
    }

    var init = function() {
        getDomElementFunction(); //获取dom元素函数
        createDomFunction(); //渲染页面函数
        addEventsFunctions(); //事件函数

    }

    var addEventsFunctions = function() {
        // console.log(time1);
        up.addEventListener('click', onPreviousMonth); //添加查找上个月日历的事件

        down.addEventListener('click', onNextMonth); //添加查找下个月日历的事件

        time2.addEventListener('click', onJumpToToday); //点击今天的日历跳转到当前页面

        year.addEventListener('click', onGetValueOfYear); //获取选项栏的年份

        month.addEventListener('click', onGetValueOfMonth); //获取选项栏的月份

        go.addEventListener('click', onGoPages); //跳转到指定页面

        date.addEventListener('click', ongg); //下面展示栏
    }

    var createDomFunction = function() {
        // console.log('2');
        jumpToSomeYearSelect(); //跳转到指定日期

        getRealTime(); //获取实时时间
        setInterval(getRealTime, 500); //没过1000毫秒重新获取一次时间

        getRealDate(); //获取实时的日期，并为time2添加内容

        setWeek(); // 显示星期

        setMainContent(moment()); //创建日历中间部分

        // setInterval(setJumpToSomeYear, 5000);

    }


    // 获取实时的事件为time1添加内容
    var getRealTime = function() {
        time1.innerHTML = moment().format('LTS')
    }

    //获取实时的日期，并为time2添加内容
    var getRealDate = function() {
        var dayCn = window.calendar.solar2lunar(moment().year(), moment().month() + 1, moment().date()); //取到农历日期
        time2.innerHTML = moment().format('YYYY年MM月DD日') + ' ' + dayCn.IMonthCn + dayCn.IDayCn + ' ' + (dayCn.Term ? dayCn.Term : '');
    }

    // 显示星期
    var setWeek = function() {
        var weekDay = moment.weekdaysMin(true);
        // console.log(weekDay);
        weekDay.forEach(function(item) {
            week.innerHTML += '<span>' + item + '</span>'
        })
    }

    //获取某月的天数
    var getMonthDays = function(moment) {
            return moment.daysInMonth();
        }
        // console.log(getMonthDays(moment()));

    // 获取某月第一天的星期
    var getMonthStartWeek = function(moment) {
        return moment.startOf('month').weekday();
    }

    // console.log(getMonthStartWeek(moment()));

    // 创建日历中间部分
    var setMainContent = function(m) {
        var lastEndDay = getMonthDays(m.clone().subtract(1, 'month')); //上个月最后一天的日期，注意要用副本
        var curEndDay = getMonthDays(m); //获取当前月份最后一天
        var week = getMonthStartWeek(m.clone()); //获取当前月份第一天的星期数

        // console.log(lastEndDay, curEndDay, week);
        var arr = []; //存放dom结构
        var nextMonthStart = 0; //下个月的起始日期

        for (var i = 0; i < 42; i++) {
            if (i < week) {
                //添加前一个月的日期
                arr.push(
                    '<li class="color" id = "liItem' + (i + 1) + '">' +
                    '<span>' + (lastEndDay - week + i) + '</span>' +
                    '<span>' + getLunarShow(m.year(), m.month(), lastEndDay - week + i) + '</span>' +
                    '</li>'
                )
            } else if (i >= week + curEndDay) {
                //添加后一个月的日期
                nextMonthStart++;
                arr.push(
                    '<li class="color"  id = "liItem' + (i + 1) + '">' +
                    '<span>' + (nextMonthStart) + '</span>' +
                    '<span>' + getLunarShow(m.year(), m.month() + 2, nextMonthStart) + '</span>' +
                    '</li>'
                )
            } else {
                //添加高亮状态
                var active = m.date() == (i - week + 1) ? 'active' : ' ';

                if (m.year() != moment().year() || m.month() != moment().month() || m.date() != moment().date()) {
                    // 不是当前时间取消高亮状态
                    active = '';
                    // console.log(moment().date())
                }
                // console.log(m.year(), m.month(), m.date())
                // console.log(moment().year(), moment().month(), moment().date(), 4)
                arr.push(
                    '<li id=liItem' + (i + 1) + ' ' + 'class=' + active + '>' +
                    '<span>' + (i - week + 1) + '</span>' +
                    '<span>' + getLunarShow(m.year(), m.month() + 1, i - week + 1) + '</span>' +
                    '</li>'
                )
            }
        }

        time3.innerHTML = m.format('YYYY年MMM');
        date.innerHTML = arr.join('')
            // console.log(arr.join(''));
    }

    // 添加上一个月的事件
    var onPreviousMonth = function() {
        setMainContent(today.subtract(1, 'month'));
    }

    // 添加下一个月事件
    var onNextMonth = function() {
        setMainContent(today.add(1, 'month'));
    }

    // 跳转到当前时间
    var onJumpToToday = function() {
        // console.log(today);
        setMainContent(moment());
    }

    //获取 选项栏的年份
    var onGetValueOfYear = function() {
        return year.value;
        // console.log(year.value);

    }

    //获取选项栏的月份
    var onGetValueOfMonth = function() {
        // setJumpToSomeYear();
        return month.value;
        // console.log(month.value);
    }

    // 跳转到指定页面
    var onGoPages = function() {
        setJumpToSomeYear();
    }

    //根据选项栏跳转
    var setJumpToSomeYear = function() {
        var skillYear = onGetValueOfYear();
        var skillMonth = onGetValueOfMonth() - 1; //月份从0开始
        // console.log(skillYear, skillMonth)
        var myMoment = moment([skillYear, skillMonth]);
        setMainContent(myMoment);
    }


    // 获取阴历部分
    var getLunarShow = function(year, month, date) {
        var dayCn = window.calendar.solar2lunar(year, month, date);
        // console.log(dayCn);

        var result = '';
        if (dayCn.IDayCn == '初一') { //如果是月初的话，换成这个月的名字
            result = dayCn.IMonthCn;
        } else if (dayCn.Term) { //如果有节气的话，换成节气
            result = dayCn.Term;
        } else if (dayCn.festival) { //如果有节日的话，换成节日
            result = dayCn.festival;
        } else if (dayCn.lunarFestival) { //如果有中国传统的节日的话，换成传统节日（春节、元宵节、端午节）
            result = dayCn.lunarFestival;
        } else {
            result = dayCn.IDayCn; //都没有的话就是农历
        }
        return result;
    }

    // console.log(setLunarShow(2021, 08, 7));

    var jumpToSomeYearSelect = function() {
        for (i = 1900; i <= 2100; i++) {
            year.innerHTML += ' <option class=itemYear' + i + ' value=' + i + '>' + i + '</option>';
        }
        for (i = 1; i <= 12; i++) {
            month.innerHTML += ' <option class=itemMonth' + i + ' value=' + i + '>' + i + '</option>';
        }
        // console.log(month.value);
        setNowShowSelect(); //
    }

    //选项栏显示当前日期
    var setNowShowSelect = function() {
        var years = parseInt(moment().year()); //变为int型
        var months = moment().month() + 1;
        var str1 = 'itemYear' + years;
        var str2 = 'itemMonth' + months;
        // console.log(str);
        // console.log(document.getElementsByClassName(str1)[0])
        // console.log(year);
        // 选项栏默认为当前时间
        // console.log(1)
        document.getElementsByClassName(str1)[0].setAttribute('selected', 'selected');
        document.getElementsByClassName(str2)[0].setAttribute('selected', 'selected');
    }

    var ongg = function(e) {
        // console.log(date)
        var target = e.target;
        var total = time3.innerHTML;
        var showYear1 = parseInt(total.slice(0, 4));
        var showMonth1 = parseInt(total.slice(5));
        var showDate1 = parseInt(target.innerHTML);
        // var t = target + ':first-child';
        // console.log(target)
        if (showDate1 > 0) {
            showDate1 = parseInt(showDate1);
            //最上面的年月日
            dateNow3.innerHTML = showDate1;
        } else {
            dateNow3.innerHTML = target.innerHTML + '(农历)'
            showDate1 = 1;
            // var q = document.querySelector('target :first-child')
            // console.log(q)
        }
        // console.log(dateNow1)
        dateNow1.innerHTML = showYear1;
        dateNow2.innerHTML = showMonth1;

        // 中间的天干地支纪年法
        var dayCn = window.calendar.solar2lunar(showYear1, showMonth1, showDate1);
        // console.log(dayCn)
        gu1.innerHTML = dayCn.gzYear;
        gu2.innerHTML = dayCn.gzMonth;
        gu3.innerHTML = dayCn.gzDay;

        // 最下面的属相和星座
        foregin1.innerHTML = dayCn.Animal;
        foregin2.innerHTML = dayCn.astro;

    }
    init();
})()