function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

function startMove(dom, attrObj, callback) {
    // clearInterval(timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function() {
        var bStop = true;
        for (var prop in attrObj) {
            if (prop == 'opacity') {
                iCur = parseFloat(getStyle(dom, prop)) * 100;
            } else {
                iCur = parseInt(getStyle(dom, prop));
            }
            iSpeed = (attrObj[prop] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (iCur != attrObj[prop]) {
                bStop = false;
            }
            if (prop == 'opacity') {
                dom.style[prop] = (iCur + iSpeed) / 100;
            } else {
                dom.style[prop] = iCur + iSpeed + 'px';
            }
        }
        if (bStop) {
            clearInterval(dom.timer);
            typeof callback == 'function' && callback();
        }
    }, 30)
}