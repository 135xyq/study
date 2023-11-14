const axios = require('axios');
const cheerio = require('cheerio');

const Book = require('../models/Book');

// 获取网页源码

async function getBooksHTML() {
    const resp = await axios.get('https://book.douban.com/latest');
    return resp.data;
}

/**
 * 获取书籍详情页链接
 */
async function getBooksDetailLink() {
    const html = await getBooksHTML();
    const $ = cheerio.load(html);
    const bookLinks = $('.chart-dashed-list .media .media__body a.fleft');
    const links = bookLinks.map((i, ele) => {
        return ele.attribs.href;
    }).get();

    return links;
}

/**
 * 获取详情页数据
 * @param {string} link 链接
 */
async function getBooksDetail(link) {
    const html = await axios.get(link);
    const $ = cheerio.load(html.data);
    const name = $('h1 span').text().trim(); // 书名
    const imgUrl = $('.subject #mainpic a img')[0].attribs.src; // 封面图片
    const spans = $('.subject #info span.pl')
    const authorSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('作者');
    })

    const author = authorSpan.next('a').text().trim(); //作者
    const publishSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('出版年');
    })

    const publishDate = publishSpan[0].nextSibling.nodeValue.trim();

    return {
        name,
        imgUrl,
        publishDate,
        author
    }
}

/**
 * 处理每一个链接
 * @returns 
 */
async function fetchAll() {
    const links = await getBooksDetailLink();
    const p = links.map(link => {
        return getBooksDetail(link)
    })
    return Promise.all(p);
}

fetchAll().then(resp => {
    console.log(resp)
})

// 存到数据库

async function saveToDb() {
    const books = await fetchAll();
    await Book.bulkCreate(books);
    console.log('同步成功')
}

saveToDb()