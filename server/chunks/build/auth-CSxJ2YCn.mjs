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

const auth = defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("tokens");
  if (!token.value) {
    return "/login";
  }
});

export { auth as default };
//# sourceMappingURL=auth-CSxJ2YCn.mjs.map
