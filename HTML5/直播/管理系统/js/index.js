(function() {

    const init = function() {
        initEvent();
    }

    const initEvent = function() {
        $('.btn').on('click', () => {
            $('.hidden-list').stop().slideToggle();
            console.log(1)
        })
        $(window).resize(function() {
            if ($(window).innerWidth() >= 768) {
                $('.hidden-list').css('display', 'none');
            }
        });
    }

    init();

})()