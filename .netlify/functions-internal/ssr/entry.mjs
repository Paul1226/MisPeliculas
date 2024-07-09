import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CrWAqLY-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C-WnFzkZ.mjs');
const _page1 = () => import('./chunks/404_yLT_iDAw.mjs');
const _page2 = () => import('./chunks/_idMovie__CQQMGBbG.mjs');
const _page3 = () => import('./chunks/index_CAHG1Kxm.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.10.2_@types+node@20.14.7_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/movies/[idMovie].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "77d5cb68-dd24-4eb1-b403-b2895696177f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
