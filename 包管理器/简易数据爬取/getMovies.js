const axios = require('axios');
const cheerio = require('cheerio');

/**
 * 获取网页的源码字符串
 * @returns 
 */
async function getMovies() {
    const str = await axios.get('https://www.iqiyi.com/dianying_new/i_list_paihangbang.html')
    return str.data;
}

/**
 * 获取电影的数据并返回一个数组
 */

async function getMoviesDetails() {
    const html = await getMovies();
    const $load = cheerio.load(html);
    let movies = [];
    const trs = $load('.site-piclist li');
    for (let tr of trs) {
        let movie = getIfo($load(tr));
        movies.push(movie);
    }
    return movies;
}

/**
 * 根据传入的jquery对象获取具体的信息
 * @param {*} html 
 */
function getIfo(html) {
    const title = html.find('.site-piclist_info .site-piclist_info_title a').text();
    const details = html.find('.site-piclist_info .site-piclist_info_describe').text()
    const imgSrc = 'https:' + html.find('.site-piclist_pic .site-piclist_pic_link img').attr('src');
    const href = html.find('.site-piclist_pic .site-piclist_pic_link').attr('href');
    return {
        title,
        details,
        imgSrc,
        href
    }
}

module.exports = getMoviesDetails();