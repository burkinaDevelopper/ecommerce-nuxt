import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-laNKqxMu.mjs';
import { useSSRContext, ref, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, createTextVNode } from 'vue';
import { u as useHead, i as useCookie, s as storeToRefs, k as useRouter, l as useSwitchLocalePath } from './server.mjs';
import { u as useAuthStore } from './auth-DxBrF6Hy.mjs';
import { u as useCartStore } from './cart-CJCsnxbF.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useProductStore } from './product-B4ZNSvYL.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const _imports_0 = "" + buildAssetsURL("shopping.CbbJiq5-.svg");
const _sfc_main$3 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = ref("");
    useHead({
      bodyAttrs: {
        class: theme
      }
    });
    const users = useCookie("users");
    const tokens = useCookie("tokens");
    useAuthStore();
    const cart = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-md navbar-light d-print-none" }, _attrs))}><div class="container-xl"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"><a href="#"><img${ssrRenderAttr("src", _imports_0)} width="110" height="32" alt="Tabler" class="navbar-brand-image"></a></h1><div class="navbar-nav flex-row order-md-last me-3"><div class="col-6 col-sm-4 col-md-2 col-xl py-3 me-3"><a href="#" class="btn btn-dark w-100">${ssrInterpolate(_ctx.$t("dark"))}</a></div><div class="col-6 col-sm-4 col-md-2 col-xl py-3 me-3"><a class="btn btn-outline-primary w-100">${ssrInterpolate(_ctx.$t("light"))}</a></div><div class="d-none d-md-flex"><div class="nav-item dropdown d-none d-md-flex me-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "nav-link px-0",
        tabindex: "-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><circle cx="6" cy="19" r="2"${_scopeId}></circle><circle cx="17" cy="19" r="2"${_scopeId}></circle><path d="M17 17h-11v-14h-2"${_scopeId}></path><path d="M6 5l14 1l-1 7h-13"${_scopeId}></path></svg><span class="badge bg-red"${_scopeId}>${ssrInterpolate(unref(cart).getTotalItems)}</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "icon icon-tabler icon-tabler-shopping-cart",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "stroke-width": "2",
                stroke: "currentColor",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("circle", {
                  cx: "6",
                  cy: "19",
                  r: "2"
                }),
                createVNode("circle", {
                  cx: "17",
                  cy: "19",
                  r: "2"
                }),
                createVNode("path", { d: "M17 17h-11v-14h-2" }),
                createVNode("path", { d: "M6 5l14 1l-1 7h-13" })
              ])),
              createVNode("span", { class: "badge bg-red" }, toDisplayString(unref(cart).getTotalItems), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (!unref(tokens)) {
        _push(`<div class="col-6 col-sm-4 col-md-2 col-xl py-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn btn-outline-primary w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(tokens)) {
        _push(`<div class="col-6 col-sm-4 col-md-2 col-xl py-3 px-2"><a class="btn btn-outline-primary w-100">${ssrInterpolate(_ctx.$t("disconnect"))}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(users) && unref(users).name) {
        _push(`<div class="nav-item dropdown"><a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu"><div class="d-none d-xl-block ps-2"><div>${ssrInterpolate(unref(users).name)}</div><div class="mt-1 small text-muted">${ssrInterpolate(unref(users).password)}</div></div></a></div>`);
      } else {
        _push(`<div class="nav-item dropdown"><a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu"><div class="d-none d-xl-block ps-2"><div>${ssrInterpolate(_ctx.$t("guest"))}</div><div class="mt-1 small text-muted">user</div></div></a></div>`);
      }
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TheNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useProductStore();
    store.productsCategories();
    const { categories } = storeToRefs(store);
    useRouter();
    const switchLocalePath = useSwitchLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar-expand-md" }, _attrs))}><div class="collapse navbar-collapse" id="navbar-menu"><div class="navbar navbar-light"><div class="container-xl"><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-link-icon d-md-none d-lg-inline-block"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><polyline points="5 12 3 12 12 3 21 12 19 12"${_scopeId}></polyline><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"${_scopeId}></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"${_scopeId}></path></svg></span><span class="nav-link-title"${_scopeId}>${ssrInterpolate(_ctx.$t("home"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "nav-link-icon d-md-none d-lg-inline-block" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "icon",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2",
                  stroke: "currentColor",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("polyline", { points: "5 12 3 12 12 3 21 12 19 12" }),
                  createVNode("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
                  createVNode("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
                ]))
              ]),
              createVNode("span", { class: "nav-link-title" }, toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false"><span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><circle cx="17" cy="17" r="3"></circle></svg></span><span class="nav-link-title">${ssrInterpolate(_ctx.$t("category"))}</span></a><div class="dropdown-menu"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<a class="dropdown-item">${ssrInterpolate(category)}</a>`);
      });
      _push(`<!--]--></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false"><span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><circle cx="17" cy="17" r="3"></circle></svg></span><span class="nav-link-title">${ssrInterpolate(_ctx.$t("language"))}</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath)("fr"),
        class: "dropdown-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` french `);
          } else {
            return [
              createTextVNode(" french ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath)("en"),
        class: "dropdown-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` english `);
          } else {
            return [
              createTextVNode(" english ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer footer-transparent d-print-none" }, _attrs))}><div class="container-xl"><div class="row text-center align-items-center flex-row-reverse"><div class="col-12 col-lg-auto mt-3 mt-lg-0"><ul class="list-inline list-inline-dots mb-0"><li class="list-inline-item"> Copyright \xA9 2024 <a href="." class="link-secondary">Sale Online</a>. All rights reserved. </li><li class="list-inline-item"><a href="./changelog.html" class="link-secondary" rel="noopener"> v1.0.0-beta16 </a></li></ul></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = _sfc_main$3;
  const _component_TheNavbar = _sfc_main$2;
  const _component_TheFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_TheNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { main as default };
//# sourceMappingURL=main-CaMRoo19.mjs.map
