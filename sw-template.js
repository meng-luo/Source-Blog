importScripts('https://img.dreamfall.cn/workbox-sw.js');

if (workbox) {
    console.log('workbox加载成功🎉');
} else {
    console.log('workbox加载失败😬');
}

workbox.setConfig({
    debug: true,
});

workbox.core.setCacheNameDetails({
    prefix: "梦璃雨落",
    suffix: '缓存',
    precache: '离线后备',
    runtime: '运行时',
});

self.skipWaiting();

workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreUrlParametersMatching: [/.*/],
    directoryIndex: null,
});

// 清空过期缓存
workbox.precaching.cleanupOutdatedCaches();

//离线页面

// 离线后备方式 2 响应超时5秒后,跳转到离线页面

// Hardcode the fallback cache name and the offline
// HTML fallback's URL for failed responses

const FALLBACK_CACHE_NAME = '离线后备';
const FALLBACK_HTML = '/offline/index.html';

// // Cache the fallback HTML during installation.

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(FALLBACK_CACHE_NAME).then((cache) => cache.add(FALLBACK_HTML)),
    );
});

// Apply a network-only strategy to navigation requests.
// If offline, or if more than five seconds pass before there's a
// network response, fall back to the cached offline HTML.

const Timeout = new workbox.strategies.NetworkOnly({
    networkTimeoutSeconds: 5,
    plugins: [
        {
            handlerDidError: async () => {
                return await caches.match(FALLBACK_HTML, {
                    cacheName: FALLBACK_CACHE_NAME,
                });
            },
        },
    ],
});

workbox.routing.registerRoute(new workbox.routing.NavigationRoute(Timeout));

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\.(?:svg|ico|cur|background.webp)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
     plugins: [
            new workbox.expiration.ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30
            }),
             new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();