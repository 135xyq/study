// 获取关键热门词汇
Mock.mock('/hotWords', {
    'result|8-15': [{
        name: '@cword(2,5)',
        href: '@url(http)'
    }]
})

Mock.mock('/firstHotWord', {
    'result': {
        name: '@cword(2,5)',
        href: '@url(http)'
    }
})