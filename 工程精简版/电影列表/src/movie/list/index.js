import $ from 'jquery';
import style from './index.module.less'

let container;
// 初始化创建一个容器
const init = function() {
    container = $('<ul>').addClass(style.container).appendTo('#app');
}
init();

// 根据传入的电影数组来生成对应的Dom结构
export function createMovieTags(movies) {
    const html = movies.map(item =>
        `<li>
            <a href="${item.url}" target="_blank"><img src="${item.cover}"/></a>
            <a href="${item.url}" target="_blank"><p class="${style.title}">${item.title}</p></a>
            <p class="${style.rate}">评分： ${item.rate}</p>
        </li>`
    ).join('');
    container.html(html)
}