import { _ as __nuxt_component_0 } from './nuxt-img-CqGneqgE.mjs';
import { a as useRoute } from './server.mjs';
import { u as useProductStore } from './product-B4ZNSvYL.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { u as useCartStore } from './cart-CJCsnxbF.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const store = useProductStore();
    store.productDetail(route.params.id);
    const product = computed(() => store.product);
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}><div class="page-body"><div class="container-xl"><div class="row justify-content-center"><div class="col-lg-10 col-xl-9"><div class="card card-lg"><div class="card-body markdown"><h1 class="mb-0">${ssrInterpolate(unref(product).title)}</h1><p>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(product).image,
        alt: unref(product).title,
        loading: "lazy",
        preload: ""
      }, null, _parent));
      _push(`</p><p>${ssrInterpolate(unref(product).description)}</p>`);
      if ((_a = unref(product).rating) == null ? void 0 : _a.rate) {
        _push(`<div class="rate"><!--[-->`);
        ssrRenderList(Math.round((_b = unref(product).rating) == null ? void 0 : _b.rate), (i) => {
          _push(`<span>\u2605</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(Math.round(5 - ((_c = unref(product).rating) == null ? void 0 : _c.rate)), (i) => {
          _push(`<span>\u2606</span>`);
        });
        _push(`<!--]--><span>${ssrInterpolate((_d = unref(product).rating) == null ? void 0 : _d.rate.toFixed(1))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-6 col-sm-4 col-md-2 col-xl-auto py-3"><a href="#" class="btn btn-tabler w-100"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"></path><path d="M15 6h6m-3 -3v6"></path></svg> Ajouter ${ssrInterpolate(unref(product).price)} \u20AC </a></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DfyC2amf.mjs.map
