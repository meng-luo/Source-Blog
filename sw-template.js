importScripts('https://img.dreamfall.cn/workbox-sw.js');

if (workbox) {
    console.log('workbox加载成功🎉');
} else {
    console.log('workbox加载失败😬');
}

// Force production builds 是否关闭控制台中的输出
workbox.setConfig({
    debug: true,
});

// self.__WB_DISABLE_DEV_LOGS = true;

//设置缓存cachestorage的名称
workbox.core.setCacheNameDetails({
    prefix: '梦璃雨落',
    suffix: '缓存',
    precache: '离线后备',
    runtime: '运行时',
    googleAnalytics: '谷歌分析'
});

//直接激活跳过等待阶段
self.skipWaiting();
workbox.core.clientsClaim();
// self.clients.claim();

// 通常当用户拜访 / 时，对应的拜访的页面 HTML 文件是 /index.html，默认状况下，precache 路由机制会在任何 URL 的结尾的 / 后加上 index.html，这就认为着你预缓存的任何 index.html 都能够通过 /index.html 或者 / 拜访到。当然，你也能够通过 directoryIndex 参数禁用掉这个默认行为

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreUrlParametersMatching: [/.*/],
    directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// 离线后备方式 1 需同步配置并开启预缓存且导航预加载并非所有浏览器支持 https://caniuse.com/mdn-api_navigationpreloadmanager_enable
// Enable navigation preload.
workbox.navigationPreload.enable();

// The network-only callback should match navigation requests, and
// the handler for the route should use the network-only strategy, but
// fall back to a precached offline page in case the user is offline.

const Offline = new workbox.routing.Route(({ request }) => {
    return request.mode === 'navigate';
}, new workbox.strategies.NetworkOnly({
    plugins: [
        new workbox.precaching.PrecacheFallbackPlugin({
            fallbackURL: 'offline/index.html'
        })
    ]
}));

workbox.routing.registerRoute(Offline);

// 离线后备方式 2 响应超时5秒后,跳转到离线页面

// Hardcode the fallback cache name and the offline
// HTML fallback's URL for failed responses

// const FALLBACK_CACHE_NAME = '离线后备';
// const FALLBACK_HTML = '/offline/index.html';

// // Cache the fallback HTML during installation.

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(FALLBACK_CACHE_NAME).then((cache) => cache.add(FALLBACK_HTML)),
//     );
// });

// Apply a network-only strategy to navigation requests.
// If offline, or if more than five seconds pass before there's a
// network response, fall back to the cached offline HTML.

// const Timeout = new workbox.strategies.NetworkOnly({
//     networkTimeoutSeconds: 5,
//     plugins: [
//         {
//             handlerDidError: async () => {
//                 return await caches.match(FALLBACK_HTML, {
//                     cacheName: FALLBACK_CACHE_NAME,
//                 });
//             },
//         },
//     ],
// });

// Register the route to handle all navigations.

// workbox.routing.registerRoute(new workbox.routing.NavigationRoute(Timeout));

// 离线后备方案 3 综合后备请参考https://developer.chrome.com/docs/workbox/managing-fallback-responses/
// 如果您需要做的只是提供一个自定义的离线 HTML 页面，但别无其他，这里有一个您可以遵循的基准配置：
// 其他缓存选项默认配置可参考 https://developer.chrome.com/docs/workbox/modules/workbox-recipes 可极大节省配置时间
// 只需准备一个名为 offline.html 的离线 HTML 页面，并将其放置在网站根目录下。

// workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());
// workbox.recipes.offlineFallback();

// 离线页面缓存
// workbox.recipes.offlineFallback();
// URL navigation 缓存
// workbox.recipes.pageCache();

// html 的缓存
// HTML，如果你想让页面离线能够拜访，应用 NetworkFirst，如果不须要离线拜访，应用 NetworkOnly，其余策略均不倡议对 HTML 应用。
workbox.routing.registerRoute(new RegExp(/.*\.html/), new workbox.strategies.NetworkOnly());

// 一些缓存小策略
// workbox.recipes.pageCache();
// workbox.recipes.googleFontsCache();
// workbox.recipes.staticResourceCache();
// workbox.recipes.imageCache();
// workbox.recipes.offlineFallback();

// 暖策略缓存
// This can be any strategy, CacheFirst used as an example.

// const strategy = new workbox.strategies.StaleWhileRevalidate();
// const urls = ['/offline/index.html'];
// workbox.recipes.warmStrategyCache({urls, strategy});


// Images
// workbox.routing.registerRoute(
//     /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "images",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 365
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// CDN
// workbox.routing.registerRoute(
//     /\.(?:js|css)$/,
//     new workbox.strategies.StaleWhileRevalidate({
//         cacheName: '静态资源',
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 7
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy

workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script',
        // ||
        // request.destination === 'worker',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            })
        ],
    }),
);

// Fonts
// workbox.routing.registerRoute(
//     /\.(?:eot|ttf|woff|woff2)$/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "fonts",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// Static Libraries
// workbox.routing.registerRoute(
//     /^https:\/\/cdn\.jsdelivr\.net/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "static-libs",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

workbox.googleAnalytics.initialize();