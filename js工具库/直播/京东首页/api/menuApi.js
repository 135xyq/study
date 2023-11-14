// 获取导航栏数据
Mock.mock('./menuList', {
    'lists|18': [{
        'title|2-4': [{
            name: '@cword(2,5)',
            href: '@url(http)'
        }],
        content: {
            'tabs|2-5': [{
                name: '@cword(2,5)',
                href: '@url(http)'
            }],
            'details|8-16': [{
                smallTitle: '@cword(2,5)',
                'items|8-16': [{
                    name: '@cword(2,5)',
                    href: '@url(http)'
                }]

            }]
        }
    }]
})