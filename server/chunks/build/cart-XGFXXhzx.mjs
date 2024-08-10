import { u as useHead } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { u as useCartStore } from './cart-CJCsnxbF.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "cart shopping",
      meta: [
        { name: "description", content: "liste des produit" }
      ]
    });
    const cart = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}><div class="page-body"><div class="container-xl"><div class="row row-cards"><div class="col-12"><button class="btn btn-danger">${ssrInterpolate(_ctx.$t("clear"))}</button><div class="card"><div class="table-responsive"><table class="table table-vcenter card-table"><thead><tr><th>Produit</th><th>Qty</th><th>Prix</th><th class="w-1">Total produit</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(cart).getItems, (item) => {
        _push(`<tr><td><div class="d-flex py-1 align-items-center"><span class="cursor-pointer"><i class="fa-solid fa-trash text-danger"></i></span> \xA0 <span class="avatar me-2" style="${ssrRenderStyle({ "background-image": "url(" + item.productImage + ")" })}"></span><div class="flex-fill"><div class="font-weight-medium">${ssrInterpolate(item.productTitle)}</div><div class="text-muted"><a href="#" class="text-reset">${ssrInterpolate(item.category)}</a></div></div></div></td><td class="fs-2"><button class="badge bg-primary-lt">-</button> ${ssrInterpolate(item.quantity)} <button class="badge bg-primary-lt">+</button></td><td>${ssrInterpolate(item.price.toFixed(2))}\u20AC </td><td>${ssrInterpolate(item.subTotal.toFixed(2))}\u20AC </td></tr>`);
      });
      _push(`<!--]--><tr><td colspan="3"><h3>Total</h3></td><td><h3>${ssrInterpolate(unref(cart).getTotalAmount.toFixed(2))}\u20AC</h3></td></tr></tbody></table></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-XGFXXhzx.mjs.map
