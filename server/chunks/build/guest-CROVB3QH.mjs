import { g as defineNuxtRouteMiddleware, i as useCookie } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const guest = defineNuxtRouteMiddleware(
  (to, from) => {
    const token = useCookie("tokens");
    if (token.value) {
      return "/";
    }
  }
);

export { guest as default };
//# sourceMappingURL=guest-CROVB3QH.mjs.map
