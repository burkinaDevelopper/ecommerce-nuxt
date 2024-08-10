import { _ as __nuxt_component_0 } from './nuxt-link-laNKqxMu.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-CqGneqgE.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductStore } from './product-B4ZNSvYL.mjs';
import { s as storeToRefs, u as useHead } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "CardProduct",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card card-sm" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/product/" + __props.product.id,
        class: "d-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.product.image,
              width: "420",
              height: "220",
              class: "card-img-top",
              fit: "contain",
              loading: "lazy",
              preload: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: __props.product.image,
                width: "420",
                height: "220",
                class: "card-img-top",
                fit: "contain",
                loading: "lazy",
                preload: ""
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-body"><div class="d-flex align-items-center"><div><div><span>${ssrInterpolate(__props.product.title.slice(0, 48))}</span></div><div class="text-muted">${ssrInterpolate(__props.product.category)}</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useProductStore();
    const { products } = storeToRefs(store);
    store.productsAll(null);
    useHead({
      title: "home shopping",
      meta: [
        { name: "description", content: "home page" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardProduct = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-wrapper"><div class="page-body"><div class="container-xl"><div class="row row-cards"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div class="col-sm-6 col-lg-4">`);
        _push(ssrRenderComponent(_component_CardProduct, { product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DpQrFgJx.mjs.map
