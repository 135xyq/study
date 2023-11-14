import $ from 'jquery';
import style from './index.module.less'
import { getMovies } from '@/api/movies'
import { createMovieTags } from '../list'

let container;

// 创建一个分页的容器
const init = () => {
    container = $('<div>').addClass(style.container).appendTo('#app');
}

init();

/**
 *
 * @param {页码} page
 * @param {页容量}} limit
 * @param {总数量} total
 */
export function createPages(page, limit, total) {
    container.empty();
    /**
     *
     * @param {页码内容}} text
     * @param {页码的状态} status 值为disabled表示禁用，为active表示选中，为“”表示一般
     * @param {*} targetPage
     */
    const createTags = function(text, status, targetPage) {
        const span = $('<span>').text(text).appendTo(container);
        const className = style[status];
        span.addClass(className);
        // 只在正常状态下监听
        if (status === '') {
            span.on('click', async() => {
                // 重新获取数据
                const resp = await getMovies(targetPage, limit);
                // console.log(resp.data.movieList)
                // 重新生成列表
                createMovieTags(resp.data.movieList);
                //生成分页
                createPages(targetPage, limit, resp.data.movieTotal);
            })
        }
    }

    // 总的数据量
    const maxNumber = Math.ceil(total / limit);

    // 创建首页
    createTags("首页", page === 1 ? 'disabled' : "", 1);
    // 创建上一页
    createTags("上一页", page === 1 ? 'disabled' : "", page - 1);

    const maxCount = 7; //要展示的最多页码个数
    let min = Math.ceil(page - maxCount / 2) > 0 ? Math.ceil(page - maxCount / 2) : 1; //展示的最小页码
    let max = maxCount + min - 1 < maxNumber ? maxCount + min - 1 : maxNumber; //展示的最小页码
    // console.log(min, max)
    for (let i = min; i <= max; i++) {
        createTags(i, i === page ? 'active' : "", i);
    }
    // 创建下一页
    createTags("下一页", page === maxNumber ? 'disabled' : "", page + 1);
    // 创建尾页
    createTags("尾页", page === maxNumber ? 'disabled' : "", maxNumber);
}