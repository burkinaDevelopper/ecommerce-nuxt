import { reactive, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './auth-DxBrF6Hy.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import './server.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const form = reactive({
      name: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}><div class="page-body"><div class="container-xl"><div class="row justify-content-center"><div class="col-lg-10 col-xl-9"><div class="card card-lg"><div class="card-body markdown"><span>user= <em>admin</em></span> \xA0 <span>password= <em>1234</em></span><form><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">user</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="form-control" id="exampleFormControlInput1"></div><div class="mb-3"><label for="exampleFormControlInput2" class="form-label">password</label><input${ssrRenderAttr("value", unref(form).password)} type="password" class="form-control" id="exampleFormControlInput2"></div><div class="mb-3"><button type="submit" class="btn btn-primary">Connexion</button></div></form></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Bw0Iipbp.mjs.map
