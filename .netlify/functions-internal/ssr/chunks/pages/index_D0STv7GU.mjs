/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderSlot, e as createAstro, i as renderTransition, f as renderComponent } from '../astro_DwIvQ8Gp.mjs';
import { a as $$Svg, $ as $$Layout } from './404_QYebdIzA.mjs';
/* empty css                          */
import { m as movies, s as series } from './_idMovie__BuvdIyC0.mjs';

const $$Astro$1 = createAstro();
const $$SectionMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionMain;
  const { idSection, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="pt-5 relative before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-full before:[background-image:linear-gradient(90deg,#38bdf8,#0c4a6e,#0c4a6e,#38bdf8)] before:top-0 w-full seccion principales"${addAttribute(idSection, "id")}> <h2 class="text-xl font-bold">${title}</h2> <div class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-5 my-5 w-full"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/SectionMain.astro", void 0);

const $$Astro = createAstro();
const $$CardMovie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardMovie;
  const { name, image, rating } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-lg overflow-hidden bg-bgs hover:shadow-xl transition-all duration-300 ease-in-out"> <figure class="aspect-ratio-16/9 overflow-hidden relative group"> <img class="w-full [aspect-ratio:1/1.4] object-cover group-hover:scale-110 group-hover:brightness-[.30] transition-all duraction-300 ease-in-out"${addAttribute(image, "src")} alt="Image"${addAttribute(renderTransition($$result, "apbfl64i", "", `movie ${name} image`), "data-astro-transition-scope")}> <a${addAttribute(`/movies/${name}`, "href")} class="absolute inset-0 flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out link"${addAttribute(renderTransition($$result, "uaucyivq", "", `movie ${name} link`), "data-astro-transition-scope")}> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-16 fill-sky-100" }, { "default": ($$result2) => renderTemplate` <path d="M231.637 168.355L231.715 168.399L231.793 168.442L341.826 228.693L342.435 229.035C352.586 234.738 358.355 244.69 358.355 256.021C358.355 267.368 352.577 277.281 342.691 282.865L231.58 343.707L231.502 343.75L231.424 343.794C226.759 346.42 221.66 347.709 216.576 347.709C211.267 347.709 205.906 346.32 200.964 343.428L200.958 343.424C191.334 337.797 185.688 327.945 185.688 316.8V195.221C185.688 184.076 191.334 174.224 200.958 168.597L200.96 168.596C210.544 162.99 221.925 162.886 231.637 168.355ZM15 256C15 123.122 123.122 15 256 15C388.878 15 497 123.122 497 256C497 388.878 388.878 497 256 497C123.122 497 15 388.878 15 256ZM27.6667 256C27.6667 381.916 130.084 484.333 256 484.333C381.916 484.333 484.333 381.916 484.333 256C484.333 130.084 381.916 27.6667 256 27.6667C130.084 27.6667 27.6667 130.084 27.6667 256Z"></path> ` })} </a> </figure> <footer class="flex flex-col gap-2 px-4 py-2"> <h3 class="text-center truncate text-sm">${name}</h3> <span class="flex items-center gap-2 text-xs"> ${renderComponent($$result, "Svg", $$Svg, { "class": "w-4 fill-yellow-500" }, { "default": ($$result2) => renderTemplate` <path d="M74.2806 279.533H74.3256L37.2477 252.425C28.0853 245.726 21.2742 236.303 17.7872 225.501C14.3003 214.7 14.3158 203.073 17.8317 192.281C21.3476 181.49 28.1839 172.085 37.3642 165.41C46.5418 158.738 57.5927 155.136 68.9393 155.117C68.9426 155.117 68.946 155.117 68.9493 155.117L162.133 155.117H173.074L176.416 144.7L204.726 56.4652L204.727 56.4612C208.209 45.5985 215.05 36.1223 224.266 29.3991C233.481 22.6759 244.593 19.0531 256 19.0531C267.407 19.0531 278.519 22.6759 287.734 29.3991C296.95 36.1223 303.791 45.5985 307.273 56.4612L307.274 56.4652L335.584 144.7L338.926 155.117H349.867L443.136 155.117C443.139 155.117 443.143 155.117 443.146 155.117C454.493 155.136 465.543 158.738 474.721 165.41C483.901 172.085 490.738 181.49 494.254 192.281C497.769 203.073 497.785 214.7 494.298 225.501C490.812 236.3 484.003 245.721 474.844 252.42C474.842 252.422 474.84 252.423 474.838 252.425L398.897 307.887L390.136 314.285L393.47 324.609L422.312 413.931C422.312 413.932 422.312 413.932 422.312 413.932C425.811 424.77 425.784 436.438 422.234 447.259C418.683 458.081 411.793 467.498 402.553 474.156C393.314 480.815 382.2 484.372 370.812 484.317C359.423 484.261 348.345 480.596 339.171 473.847L339.166 473.844L264.883 419.252L255.993 412.719L247.109 419.258L172.847 473.914L172.777 473.966L172.708 474.018C163.625 480.866 152.573 484.597 141.198 484.654C129.822 484.711 118.733 481.091 109.583 474.333L109.443 474.23L109.3 474.13C99.9894 467.582 93.0438 458.201 89.4991 447.384C85.9544 436.567 86.0004 424.895 89.6302 414.106L89.6594 414.019L89.6876 413.932L118.53 324.609L121.864 314.285L113.103 307.887L74.2806 279.533Z"></path> ` })}<span>${rating}</span> </span> </footer> </article>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/CardMovie.astro", "self");

const $$AllMovies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_peliculas", "title": "Pel\xEDculas" }, { "default": ($$result2) => renderTemplate`${[...movies].map(({ title, image, rating }) => {
    return renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": title, "image": image, "rating": rating })}`;
  })}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/AllMovies.astro", void 0);

const $$AllSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_series", "title": "Series" }, { "default": ($$result2) => renderTemplate`${[...series].map((serie) => {
    return renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": serie.title, "image": serie.image, "rating": serie.rating })}`;
  })}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/AllSeries.astro", void 0);

const $$PeliculasPopulares = createComponent(($$result, $$props, $$slots) => {
  const mayorPopularidad = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_peliculas_populares", "title": "M\xE1s populares" }, { "default": ($$result2) => renderTemplate`${mayorPopularidad.map((movie) => renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": movie.title, "image": movie.image, "rating": movie.rating })}`)}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/PeliculasPopulares.astro", void 0);

const $$UltimosEstrenos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_ultimos_estrenos", "title": "Pel\xEDculas - \xDAltimos Estrenos" }, { "default": ($$result2) => renderTemplate`${[...movies].map((movie) => {
    if (movie.release_date >= "2015-01-01" && movie.rating >= 7.8) return renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": movie.title, "image": movie.image, "rating": movie.rating })}`;
  })}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/UltimosEstrenos.astro", void 0);

const $$SeriesPopulares = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_series_populares", "title": "M\xE1s populares" }, { "default": ($$result2) => renderTemplate`${[...series].sort((a, b) => b.rating - a.rating).slice(0, 10).map((serie) => renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": serie.title, "image": serie.image, "rating": serie.rating })}`)}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/SeriesPopulares.astro", void 0);

const $$UltimoEstrenosSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, { "idSection": "seccion_series_estrenos", "title": "Series - \xDAltimos estrenos" }, { "default": ($$result2) => renderTemplate`${[...series].map((serie) => {
    if (serie.release_date >= "2018-01-01" && serie.rating >= 8) return renderTemplate`${renderComponent($$result2, "CardMovie", $$CardMovie, { "name": serie.title, "image": serie.image, "rating": serie.rating })}`;
  })}` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/components/UltimoEstrenosSeries.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MisPeliculas | Proyecto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="seccion_contenido"> ${renderComponent($$result2, "AllMovies", $$AllMovies, {})} ${renderComponent($$result2, "PeliculasPopulares", $$PeliculasPopulares, {})} ${renderComponent($$result2, "UltimosEstrenos", $$UltimosEstrenos, {})} ${renderComponent($$result2, "AllSeries", $$AllSeries, {})} ${renderComponent($$result2, "SeriesPopulares", $$SeriesPopulares, {})} ${renderComponent($$result2, "UltimoEstrenosSeries", $$UltimoEstrenosSeries, {})} </section> ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/index.astro", void 0);

const $$file = "/mnt/c/users/laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
