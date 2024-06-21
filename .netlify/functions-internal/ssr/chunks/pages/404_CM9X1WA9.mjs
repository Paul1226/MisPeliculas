/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as createAstro, f as renderComponent, g as addAttribute, h as renderHead } from '../astro_DwIvQ8Gp.mjs';

const $$Astro$3 = createAstro();
const $$Svg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Svg;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-width="30" stroke-linejoin="round"> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/Svg.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center gap-4 h-16 px-3 bg-bgs shadow-lg z-50 [grid-area:header] rounded-t-xl sticky top-4" data-astro-cid-5ql2mvdm> <article class="flex items-center justify-between w-full" data-astro-cid-5ql2mvdm> <a class="menu cursor-pointer md:hidden" data-astro-cid-5ql2mvdm> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-6 fill-sky-100 transition-colors duration-300 ease-in-out pointer-events-none", "data-astro-cid-5ql2mvdm": true }, { "default": ($$result2) => renderTemplate` <path d="M480 134.333H170.667C166.158 134.333 161.834 132.542 158.646 129.354C155.458 126.166 153.667 121.842 153.667 117.333C153.667 112.825 155.458 108.501 158.646 105.312C161.834 102.124 166.158 100.333 170.667 100.333H480C484.509 100.333 488.833 102.124 492.021 105.312C495.209 108.501 497 112.825 497 117.333C497 121.842 495.209 126.166 492.021 129.354C488.833 132.542 484.509 134.333 480 134.333Z" data-astro-cid-5ql2mvdm></path> <path d="M170.667 249.667H480C484.509 249.667 488.833 251.458 492.021 254.646C495.209 257.834 497 262.158 497 266.667C497 271.175 495.209 275.499 492.021 278.688C488.833 281.876 484.509 283.667 480 283.667L170.667 283.667C166.158 283.667 161.834 281.876 158.646 278.688C155.458 275.499 153.667 271.175 153.667 266.667C153.667 262.158 155.458 257.834 158.646 254.646C161.834 251.458 166.158 249.667 170.667 249.667Z" data-astro-cid-5ql2mvdm></path> <path d="M170.667 399H480C484.509 399 488.833 400.791 492.021 403.979C495.209 407.167 497 411.491 497 416C497 420.509 495.209 424.833 492.021 428.021C488.833 431.209 484.509 433 480 433H170.667C166.158 433 161.834 431.209 158.646 428.021C155.458 424.833 153.667 420.509 153.667 416C153.667 411.491 155.458 407.167 158.646 403.979C161.834 400.791 166.158 399 170.667 399Z" data-astro-cid-5ql2mvdm></path> <path d="M91.6667 117.333C91.6667 138.504 74.5042 155.667 53.3333 155.667C32.1624 155.667 15 138.504 15 117.333C15 96.1624 32.1624 79 53.3333 79C74.5042 79 91.6667 96.1624 91.6667 117.333Z" data-astro-cid-5ql2mvdm></path> <path d="M91.6667 256C91.6667 277.171 74.5042 294.333 53.3333 294.333C32.1624 294.333 15 277.171 15 256C15 234.829 32.1624 217.667 53.3333 217.667C74.5042 217.667 91.6667 234.829 91.6667 256Z" data-astro-cid-5ql2mvdm></path> <path d="M91.6667 405.333C91.6667 426.504 74.5042 443.667 53.3333 443.667C32.1624 443.667 15 426.504 15 405.333C15 384.162 32.1624 367 53.3333 367C74.5042 367 91.6667 384.162 91.6667 405.333Z" data-astro-cid-5ql2mvdm></path> ` })} </a> <div class="logo" data-astro-cid-5ql2mvdm> <a class="text-2xl font-extrabold hidden md:block" href="/" data-astro-cid-5ql2mvdm>Mis<span class="text-sky-400" data-astro-cid-5ql2mvdm>Peliculas</span><span class="text-xs" data-astro-cid-5ql2mvdm>.com</span></a> </div> <div class="flex items-center justify-center gap-3 relative" data-astro-cid-5ql2mvdm> <button class="icon flex items-center justify-center absolute right-0 cursor-pointer w-9 h-9 outline-none [border-style:none] rounded-full [pointer-events:painted] bg-transparent transition-all duration-200 ease-in-out" data-astro-cid-5ql2mvdm> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-4 fill-sky-100", "data-astro-cid-5ql2mvdm": true }, { "default": ($$result2) => renderTemplate` <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z" data-astro-cid-5ql2mvdm></path> ` })} </button> <input class="input w-9 h-9 bg-sky-400 [border-style:none] p-2 outline-none rounded-full transition-all duration-500 ease-in-out text-sky-200 placeholder:text-sm placeholder:text-sky-300/10 placeholder:px-3" name="buscar" id="buscar" placeholder="Buscar..." data-astro-cid-5ql2mvdm> </div> </article> </header>  `;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/sections/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$LiNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LiNav;
  const { opcion } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class=" text-sky-200 text-sm  hover:bg-sky-50/10 transition-colors duration-300 ease-in-out links cursor-pointer literal" data-astro-cid-dfl436w6> <p class="flex items-center gap-4 p-2 px-4 pointer-events-none" data-astro-cid-dfl436w6> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-full max-w-4 fill-sky-200", "data-astro-cid-dfl436w6": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icono"])} ` })} <span class="w-full flex justify-between items-center" data-astro-cid-dfl436w6> ${opcion} ${renderComponent($$result, "Svg", $$Svg, { "class": "w-4 fill-sky-200 arrow transition-transform duration-300 ease-in-out", "data-astro-cid-dfl436w6": true }, { "default": ($$result2) => renderTemplate` <path d="M219.358 355.083L219.124 354.821L218.877 354.571L81.8891 215.538C73.1081 205.826 71.2806 193.507 76.1451 182.481L76.148 182.475C81.1176 171.196 91.6368 164.333 103.915 164.333H397.141C409.417 164.333 419.939 171.191 424.88 182.439C429.8 193.637 427.824 205.921 419.686 214.977L281.514 355.322L281.271 355.568L281.041 355.825C273.864 363.82 262.544 369 250.539 369C238.652 369 227.287 363.923 219.358 355.083Z" data-astro-cid-dfl436w6></path> ` })} </span> </p> <div class="sublista_container w-full" data-astro-cid-dfl436w6> ${renderSlot($$result, $$slots["lista"])} <!-- primera 108 --> <!-- segundo 108 --> <!-- tercero 396 --> <!-- cuarto 128 --> </div> </li> `;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/LiNav.astro", void 0);

const $$Astro$1 = createAstro();
const $$SubLi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SubLi;
  const { subLink, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(subLink, "href")} class="flex px-5 py-2 transition-colors duration-300 ease-in-out hover:bg-sky-200/10 truncate">${name}</a> </li>`;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/SubLi.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const generos = [
    { link: "#", tipo: "Acci\xF3n" },
    { link: "#", tipo: "Aventura" },
    { link: "#", tipo: "Comedia" },
    { link: "#", tipo: "Crimen" },
    { link: "#", tipo: "Drama" },
    { link: "#", tipo: "Fantasia" },
    { link: "#", tipo: "Historia" },
    { link: "#", tipo: "Misterio" },
    { link: "#", tipo: "Romance" },
    { link: "#", tipo: "Suspenso" },
    { link: "#", tipo: "Terror" }
  ];
  const anios = [
    { link: "#", tipo: "2024" },
    { link: "#", tipo: "2023" },
    { link: "#", tipo: "2022" },
    { link: "#", tipo: "2021" },
    { link: "#", tipo: "2020" },
    { link: "#", tipo: "2019" },
    { link: "#", tipo: "2018" },
    { link: "#", tipo: "2017" },
    { link: "#", tipo: "2016" },
    { link: "#", tipo: "2015" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="nav [grid-area:nav] w-1/2 h-[80dvh] max-w-[250px] bg-bgs fixed top-20 left-[-100%] z-20 flex flex-col gap-1 rounded-r-xl shadow-l-lg overflow-y-auto scroll-smooth md:relative md:top-0 md:left-0 md:w-full md:min-w-[250px]" data-astro-cid-jh42xr26> <h3 class="text-xs text-sky-100/50 uppercase p-4" data-astro-cid-jh42xr26>Navegación</h3> <ul class="h-min nav_ul" data-astro-cid-jh42xr26> <li class="li_inicio" data-astro-cid-jh42xr26> <a class="flex items-center gap-4 text-sky-200 text-sm p-2 px-4 hover:bg-sky-50/10 transition-colors duration-300 ease-in-out links" href="/" data-astro-cid-jh42xr26> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-4 fill-sky-200", "data-astro-cid-jh42xr26": true }, { "default": ($$result2) => renderTemplate` <path d="M454.333 122.112V129.612L460.333 134.112C483.365 151.386 497 178.457 497 207.445V405.333C497 455.865 455.865 497 405.333 497H362.667C359.163 497 356.333 494.168 356.333 490.667V298.667C356.333 278.638 340.07 262.333 320 262.333H192C171.93 262.333 155.667 278.638 155.667 298.667V490.667C155.667 494.168 152.837 497 149.333 497H106.667C56.1349 497 15 455.865 15 405.333V207.445C15 176.913 30.1003 148.525 55.3905 131.451L204.719 30.6756C204.72 30.6749 204.721 30.6743 204.722 30.6736C235.896 9.64743 276.104 9.64754 307.279 30.6739C307.28 30.6745 307.281 30.675 307.281 30.6756L418.276 105.575L441.667 121.359V93.1414V42.6667C441.667 39.1652 444.497 36.3334 448 36.3334C451.503 36.3334 454.333 39.1652 454.333 42.6667V122.112Z" data-astro-cid-jh42xr26></path> ` })} <span class="w-full flex justify-between items-center" data-astro-cid-jh42xr26>
Inicio
</span> </a> </li> ${renderComponent($$result, "LiNav", $$LiNav, { "opcion": "Pel\xEDculas", "data-astro-cid-jh42xr26": true }, { "icono": ($$result2) => renderTemplate`<path d="M328.714 371.288C348.549 359.4 350.978 332.709 336.003 317.195V315.281L328.08 311.042L229.503 258.285C206.294 244.715 177 261.437 177 288.427V394.261C177 421.251 206.294 437.973 229.503 424.403L328.08 371.647L328.402 371.475L328.714 371.288ZM269.045 134.333L367.045 36.3334H405.333C408.012 36.3334 410.663 36.4488 413.28 36.675L315.621 134.333H269.045ZM497 128V134.333H418.379L479.076 73.6358C490.347 88.865 497 107.673 497 128ZM264.288 36.3334L166.288 134.333H131.25L230.622 36.3334H264.288ZM15 134.333V128C15 77.4683 56.1349 36.3334 106.667 36.3334H127.14L27.7678 134.333H15ZM497 207V384C497 434.532 455.865 475.667 405.333 475.667H106.667C56.1349 475.667 15 434.532 15 384V207H497Z" data-astro-cid-jh42xr26></path>`, "lista": ($$result2) => renderTemplate`<ul class="bg-sky-950/50 text-sm flex flex-col pl-4 subLista subLista_peliculas" id="peliculas" data-astro-cid-jh42xr26> ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "Todas las pel\xEDculas", "data-astro-cid-jh42xr26": true })} ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "M\xE1s populares", "data-astro-cid-jh42xr26": true })} ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "\xDAltimos estrenos", "data-astro-cid-jh42xr26": true })} </ul>` })} ${renderComponent($$result, "LiNav", $$LiNav, { "opcion": "Series", "data-astro-cid-jh42xr26": true }, { "icono": ($$result2) => renderTemplate`<path d="M177 85.3333C177 124.174 145.508 155.667 106.667 155.667C67.8256 155.667 36.3333 124.174 36.3333 85.3333C36.3333 46.4923 67.8256 15 106.667 15C145.508 15 177 46.4923 177 85.3333ZM228.333 85.3333C228.333 46.4923 259.826 15 298.667 15C337.508 15 369 46.4923 369 85.3333C369 124.174 337.508 155.667 298.667 155.667C259.826 155.667 228.333 124.174 228.333 85.3333ZM390.333 298.667V426.667C390.333 465.508 358.841 497 320 497H85.3333C46.4923 497 15 465.508 15 426.667V298.667C15 259.826 46.4923 228.333 85.3333 228.333H320C358.841 228.333 390.333 259.826 390.333 298.667ZM463 429.008V276.101L474.92 264.181C483.095 256.016 497 261.824 497 273.301V431.787C497 443.321 483.075 449.084 474.927 440.935L463 429.008Z" data-astro-cid-jh42xr26></path>`, "lista": ($$result2) => renderTemplate`<ul class="bg-sky-950/50 text-sm flex flex-col pl-4 subLista subLista_series" id="series" data-astro-cid-jh42xr26> ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "Todas las series", "data-astro-cid-jh42xr26": true })} ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "Series populares", "data-astro-cid-jh42xr26": true })} ${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": "#", "name": "\xDAltimos estrenos", "data-astro-cid-jh42xr26": true })} </ul>` })} ${renderComponent($$result, "LiNav", $$LiNav, { "opcion": "G\xE9neros", "data-astro-cid-jh42xr26": true }, { "icono": ($$result2) => renderTemplate`<path d="M480 134.333H170.667C166.158 134.333 161.834 132.542 158.646 129.354C155.458 126.166 153.667 121.842 153.667 117.333C153.667 112.825 155.458 108.501 158.646 105.312C161.834 102.124 166.158 100.333 170.667 100.333H480C484.509 100.333 488.833 102.124 492.021 105.312C495.209 108.501 497 112.825 497 117.333C497 121.842 495.209 126.166 492.021 129.354C488.833 132.542 484.509 134.333 480 134.333Z" data-astro-cid-jh42xr26></path><path d="M170.667 249.667H480C484.509 249.667 488.833 251.458 492.021 254.646C495.209 257.834 497 262.158 497 266.667C497 271.175 495.209 275.499 492.021 278.688C488.833 281.876 484.509 283.667 480 283.667L170.667 283.667C166.158 283.667 161.834 281.876 158.646 278.688C155.458 275.499 153.667 271.175 153.667 266.667C153.667 262.158 155.458 257.834 158.646 254.646C161.834 251.458 166.158 249.667 170.667 249.667Z" data-astro-cid-jh42xr26></path><path d="M170.667 399H480C484.509 399 488.833 400.791 492.021 403.979C495.209 407.167 497 411.491 497 416C497 420.509 495.209 424.833 492.021 428.021C488.833 431.209 484.509 433 480 433H170.667C166.158 433 161.834 431.209 158.646 428.021C155.458 424.833 153.667 420.509 153.667 416C153.667 411.491 155.458 407.167 158.646 403.979C161.834 400.791 166.158 399 170.667 399Z" data-astro-cid-jh42xr26></path><path d="M91.6667 117.333C91.6667 138.504 74.5042 155.667 53.3333 155.667C32.1624 155.667 15 138.504 15 117.333C15 96.1624 32.1624 79 53.3333 79C74.5042 79 91.6667 96.1624 91.6667 117.333Z" data-astro-cid-jh42xr26></path><path d="M91.6667 256C91.6667 277.171 74.5042 294.333 53.3333 294.333C32.1624 294.333 15 277.171 15 256C15 234.829 32.1624 217.667 53.3333 217.667C74.5042 217.667 91.6667 234.829 91.6667 256Z" data-astro-cid-jh42xr26></path><path d="M91.6667 405.333C91.6667 426.504 74.5042 443.667 53.3333 443.667C32.1624 443.667 15 426.504 15 405.333C15 384.162 32.1624 367 53.3333 367C74.5042 367 91.6667 384.162 91.6667 405.333Z" data-astro-cid-jh42xr26></path>`, "lista": ($$result2) => renderTemplate`<ul class="bg-sky-950/50 text-sm flex flex-col pl-4 subLista subLista_generos" id="generos" data-astro-cid-jh42xr26> ${generos.map((genero) => {
    return renderTemplate`${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": genero.link, "name": genero.tipo, "data-astro-cid-jh42xr26": true })}`;
  })} </ul>` })} ${renderComponent($$result, "LiNav", $$LiNav, { "opcion": "A\xF1o", "data-astro-cid-jh42xr26": true }, { "icono": ($$result2) => renderTemplate`<path d="M320 333.333C320 309.287 310.448 286.226 293.444 269.222C276.441 252.219 253.38 242.667 229.333 242.667C205.287 242.667 182.226 252.219 165.222 269.222C148.219 286.226 138.667 309.287 138.667 333.333C138.667 341.82 142.038 349.96 148.039 355.961C154.04 361.962 162.18 365.333 170.667 365.333C179.154 365.333 187.293 361.962 193.294 355.961C199.295 349.96 202.667 341.82 202.667 333.333C202.667 326.261 205.476 319.478 210.477 314.477C215.478 309.476 222.261 306.667 229.333 306.667C236.406 306.667 243.189 309.476 248.19 314.477C253.191 319.478 256 326.261 256 333.333C256 346.667 230.571 365.739 210.133 381.056C176.64 406.187 138.667 434.667 138.667 480C138.667 488.487 142.038 496.626 148.039 502.627C154.04 508.629 162.18 512 170.667 512H288C296.487 512 304.626 508.629 310.628 502.627C316.629 496.626 320 488.487 320 480C320 471.513 316.629 463.374 310.628 457.373C304.626 451.371 296.487 448 288 448H228.267C234.88 442.581 242.027 437.333 248.64 432.277C282.027 407.147 320 378.667 320 333.333Z" data-astro-cid-jh42xr26></path><path d="M480 234.667C471.513 234.667 463.374 238.038 457.373 244.039C451.371 250.04 448 258.18 448 266.667V362.667H432C424.931 362.655 418.155 359.842 413.156 354.844C408.158 349.845 405.345 343.069 405.333 336V266.667C405.333 258.18 401.962 250.04 395.961 244.039C389.959 238.038 381.82 234.667 373.333 234.667C364.846 234.667 356.707 238.038 350.706 244.039C344.705 250.04 341.333 258.18 341.333 266.667V336C341.361 360.038 350.923 383.083 367.92 400.08C384.917 417.077 407.962 426.638 432 426.667H448V480C448 488.487 451.371 496.626 457.373 502.627C463.374 508.629 471.513 512 480 512C488.487 512 496.626 508.629 502.627 502.627C508.628 496.626 512 488.487 512 480V266.667C512 258.18 508.628 250.04 502.627 244.039C496.626 238.038 488.487 234.667 480 234.667Z" data-astro-cid-jh42xr26></path><path d="M475.584 57.7494L447.36 85.9734C405.51 38.8721 347.759 8.85893 285.162 1.67861C222.564 -5.50172 159.518 10.6552 108.089 47.0567C56.6602 83.4583 20.4622 137.548 6.42344 198.971C-7.61536 260.395 1.49119 324.839 32.0001 379.968C34.0382 383.644 36.7803 386.882 40.0699 389.498C43.3594 392.114 47.132 394.056 51.1722 395.214C55.2125 396.372 59.4412 396.722 63.6169 396.246C67.7927 395.77 71.8338 394.475 75.5094 392.437C79.185 390.399 82.4232 387.657 85.0391 384.368C87.6549 381.078 89.5972 377.305 90.7551 373.265C91.913 369.225 92.2638 364.996 91.7874 360.82C91.311 356.645 90.0168 352.604 87.9787 348.928C64.9166 307.321 58.1366 258.63 68.9547 212.306C79.7729 165.981 107.417 125.329 146.522 98.2402C185.627 71.1514 233.402 59.5587 280.573 65.7123C327.744 71.866 370.946 95.3271 401.792 131.541L377.749 155.584C374.767 158.568 372.736 162.368 371.913 166.506C371.09 170.644 371.513 174.932 373.127 178.83C374.741 182.728 377.475 186.059 380.982 188.403C384.49 190.747 388.613 191.999 392.832 192H490.667C496.325 192 501.751 189.752 505.752 185.752C509.752 181.751 512 176.325 512 170.667V72.832C511.999 68.6133 510.747 64.4896 508.403 60.9822C506.059 57.4748 502.728 54.7412 498.83 53.1269C494.932 51.5126 490.644 51.0901 486.506 51.9129C482.368 52.7357 478.568 54.7667 475.584 57.7494Z" data-astro-cid-jh42xr26></path>`, "lista": ($$result2) => renderTemplate`<ul class="bg-sky-950/50 text-xs flex flex-wrap pl-4 subLista subLista_anios" id="generos" data-astro-cid-jh42xr26> ${anios.map((anio) => {
    return renderTemplate`${renderComponent($$result2, "SubLi", $$SubLi, { "subLink": anio.link, "name": anio.tipo, "data-astro-cid-jh42xr26": true })}`;
  })} </ul>` })} </ul> </nav>  `;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/sections/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.4.0/uicons-bold-rounded/css/uicons-bold-rounded.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- <ViewTransitions fallback="none" /> -->${renderHead()}</head> <body class="bg-sky-950 text-sky-100 p-4 overflow-y-hidden"> <div class="w-full rounded-xl grid [grid-template-areas:'header''main'] [grid-template-rows:auto_1fr] h-full"> ${renderComponent($$result, "Header", $$Header, {})} <main class="relative grid [grid-template-areas:'content']
		[grid-area:main] md:[grid-template-areas:'nav_content'] md:[grid-template-columns:auto_1fr]"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="p-4 [grid-area:content] flex flex-col"> <div class="flex flex-col gap-4"> <header class="py-2 bg-red-5"> <h1 class="text-2xl font-bold text-center pb-2 text-balance">
MIS PELICULAS - VER PELICULAS Y SERIES ONLINE EN
							HD
</h1> <span class="text-xs text-sky-50/50 text-center block">Todas las mejores películas y series las
							encuentras aquí y en mayor calidad</span> </header> <main class="bg-red-90 w-full h-[460px] overflow-y-auto main_content_movies"> ${renderSlot($$result, $$slots["default"])} <footer> <p class="text-xs text-sky-50/40 text-center block pt-5">
© 2022 - Esta página fue creada con fines educativos.
</p> </footer> </main> </div> </main> </main> </div>  </body></html>`;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/layouts/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Movie no enecontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col gap-4 justify-center items-center flex-1"> <h1 class="text-5xl font-bold">404</h1> <h2 class="text-3xl font-bold text-sky-400">Lo sentimos esta pagina no esta en la base de datos</h2> </section> ` })}`;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/404.astro", void 0);

const $$file = "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Svg as a };
