if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/pages/404.js",revision:"141b3edb9f71c344eaffeb2cc66c88cd"},{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/pages/_app.js",revision:"f36d031fa79764065d42ecbfeb6aefda"},{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/pages/_error.js",revision:"e6e32495218a0b66171e0fb61fc67106"},{url:"/_next/static/aeD_wjtlb9an9CpQOtwgH/pages/index.js",revision:"13977a5b023157c3bce1330980cda14b"},{url:"/_next/static/chunks/7171d7c23798a3680505cd7a0796c0beb9d8882e.c2e7b864cd5f7c77da15.js",revision:"31894fb1057ec4f2d21d020bf39bb1a3"},{url:"/_next/static/chunks/e459265bb1882735bb34cdbcfee78890eb69734b.5de08c90fac2360cb805.js",revision:"147070b53f3ef28552f1ca3fdae9ef8d"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-0127d6da402033323ad6.js",revision:"f4effae020bf13543441427b716f1d90"},{url:"/_next/static/runtime/polyfills-b10afcedf826ebd862ad.js",revision:"73747fb253edba922d720d89d48a9ffa"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/fonts/silka-bold-webfont.ttf",revision:"11defb172a6471fc41baf17f6d23b6db"},{url:"/fonts/silka-medium-webfont.ttf",revision:"bc72d32b4e86d36e82ebe8fd48f3a9ba"},{url:"/fonts/silka-regular-webfont.ttf",revision:"5e4afc29d3a90977454bd8ebd748acd6"},{url:"/fonts/silka-semibold-webfont.ttf",revision:"761c0cdc9056e534ebe03c9cedb9dbfc"},{url:"/images/emoji-thompson-1.png",revision:"7bc3361c8e4f791925c323470bbeccb7"},{url:"/images/emoji-thompson-10.png",revision:"680954adcc9cbf81b000e08b79da37de"},{url:"/images/emoji-thompson-2.png",revision:"145995d5f91cb3e31a02213f45d10a76"},{url:"/images/emoji-thompson-3.png",revision:"9b2fca90501787490a7cc358ae40096f"},{url:"/images/emoji-thompson-4.png",revision:"e8328b22e37202dcc992e56332617f1f"},{url:"/images/emoji-thompson-5.png",revision:"2f1e26c386dd4349a0b3df06d907ade6"},{url:"/images/emoji-thompson-6.png",revision:"30616f5ea9c9fb8c13cae1279300364c"},{url:"/images/emoji-thompson-7.png",revision:"110abc108327fa3219bd7a532938e0c5"},{url:"/images/emoji-thompson-8.png",revision:"ba33473d9ba4124bbea3ffdb56bb4f0d"},{url:"/images/emoji-thompson-9.png",revision:"fabb57d66df6090fb3040391dfd233c2"},{url:"/images/emoji-thompson.psd",revision:"d0fbb972f8eaf1aa79e5740ece0ade25"},{url:"/images/icon-192.png",revision:"83c444b7aa6a59a73da56a259618bf94"},{url:"/images/icon-512.png",revision:"135302df8d152b41b7053a821ef10e26"},{url:"/manifest.json",revision:"b41be94bc5cdcd86b6279421eff010ff"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));