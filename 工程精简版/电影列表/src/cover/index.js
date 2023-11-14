import videoUrl from '../assets/movie.mp4';
import audioUrl from '../assets/music.mp3';
import style from './index.module.less';
import $ from 'jquery';

const init = () => {
    const container = $('<div>').addClass(style.container).appendTo('#app');
    const vdo = $('<video>')
        .addClass(style.video)
        .prop('src', videoUrl)
        .prop('autoplay', true)
        .prop('loop', true)
        .appendTo(container);
    const aud = $('<audio>')
        .prop('src', audioUrl)
        .prop('autoplay', true)
        .prop('loop', true)
        .appendTo(container);
    $('<h1>').text("豆瓣电影").addClass(style.title).appendTo(container);

    // 监听视频的播放和暂停
    $(window).on('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const viewTop = document.documentElement.clientHeight;
        // 当页面滚动到视频底部时暂停，再次回来时开始播放
        if (scrollTop > viewTop) {
            vdo[0].pause();
            aud[0].pause();
        } else {
            vdo[0].play();
            aud[0].play();
        }
    })
}

init();