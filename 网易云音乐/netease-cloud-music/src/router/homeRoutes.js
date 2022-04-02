// 首页的子路由

export default [{
        path: 'discover',
        // name: 'Discover',
        component: () =>
            import ('@/views/Home/Discover'),
        meta: {
            name: '网易云音乐',
            auth: false,
        },
        children: [{
                path: 'toplist',
                name: 'Toplist',
                component: () =>
                    import ('@/views/Home/Toplist'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
            {
                path: '',
                name: 'DiscoverContent',
                component: () =>
                    import ('@/views/Home/Discover/Content.vue'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
            {
                path: 'playlist',
                name: 'Playlist',
                component: () =>
                    import ('@/views/Home/Playlist'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
            {
                path: 'djradio',
                name: 'Djradio',
                component: () =>
                    import ('@/views/Home/Djradio'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
            {
                path: 'artist',
                name: 'Artist',
                component: () =>
                    import ('@/views/Home/Artist'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
            {
                path: 'album',
                name: 'Album',
                component: () =>
                    import ('@/views/Home/Album'),
                meta: {
                    name: '网易云音乐',
                    auth: false,
                }
            },
        ]
    },

]