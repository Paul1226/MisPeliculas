import { renderers } from './renderers.mjs';
import { manifest } from './manifest_mIS4UOg3.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_nFrwao78.mjs');
const _page1 = () => import('./chunks/404_CmBJ2gkZ.mjs');
const _page2 = () => import('./chunks/_idMovie__CCIetJxU.mjs');
const _page3 = () => import('./chunks/index_LucJjsKN.mjs');
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
    "middlewareSecret": "de2919c6-2518-4b05-98ca-75b4337dc516"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
