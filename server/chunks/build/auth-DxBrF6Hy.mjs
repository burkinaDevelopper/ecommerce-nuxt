import { v as defineStore, i as useCookie, k as useRouter } from './server.mjs';

const useAuthStore = defineStore("auth", {
  state: () => ({
    logged: false,
    users: {
      name: null,
      password: null
    },
    tokens: null
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  actions: {
    async login(name, password) {
      if (name == "admin" && password == "1234") {
        this.users.name = name;
        this.users.password = password;
        this.tokens = 1234;
        const users = useCookie("users", this.users);
        const tokens = useCookie("tokens", this.tokens);
        users.value = this.users;
        tokens.value = this.tokens;
        const router = useRouter();
        router.push({ path: "/" });
      }
    },
    async logout() {
      this.users.name = null;
      this.users.password = null;
      this.tokens = null;
      const users = useCookie("users", this.users);
      const tokens = useCookie("tokens", this.tokens);
      users.value = "";
      tokens.value = "";
      const router = useRouter();
      router.push({ path: "/login" });
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=auth-DxBrF6Hy.mjs.map
