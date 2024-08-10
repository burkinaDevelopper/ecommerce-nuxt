<script setup>
const theme = ref('');

useHead({
  bodyAttrs: {
    class: theme,
  }
});
const users = useCookie('users');
const tokens = useCookie('tokens');
const auth = useAuthStore();
const logout = async () => {
  users.value = null;
  tokens.value = null;
  auth.logout();
}
const cart = useCartStore();

</script>

<template>

  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu"
        aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href="#">
          <img src="~/assets/static/shopping.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </a>
      </h1>
      <div class="navbar-nav flex-row order-md-last me-3">
        <div class="col-6 col-sm-4 col-md-2 col-xl py-3 me-3">
          <a @click.prevent="theme = 'theme-dark'" href="#" class="btn btn-dark w-100">
            {{ $t('dark') }}
          </a>
        </div>
        <div class="col-6 col-sm-4 col-md-2 col-xl py-3 me-3">
          <a @click.prevent="theme = 'theme-light'" class="btn btn-outline-primary w-100">
            {{ $t('light') }}
          </a>
        </div>
        <div class="d-none d-md-flex">
          <div class="nav-item dropdown d-none d-md-flex me-3">
            <NuxtLink to="/cart" class="nav-link px-0" tabindex="-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              <span class="badge bg-red">{{ cart.getTotalItems }}</span>
            </NuxtLink>
          </div>
        </div>

        <div v-if="!tokens" class="col-6 col-sm-4 col-md-2 col-xl py-3">
          <NuxtLink to="/login" class="btn btn-outline-primary w-100">
            {{ $t('login') }}
          </NuxtLink>
        </div>
        <div v-if="tokens" class="col-6 col-sm-4 col-md-2 col-xl py-3 px-2">
          <a @click.prevent="logout" class="btn btn-outline-primary w-100">
            {{ $t('disconnect') }}
          </a>
        </div>

        <div v-if="users && users.name" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <div class="d-none d-xl-block ps-2">
              <div>{{ users.name }}</div>
              <div class="mt-1 small text-muted">{{ users.password }}</div>
            </div>
          </a>
        </div>
        <div v-else class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <div class="d-none d-xl-block ps-2">
              <div>{{ $t('guest') }}</div>
              <div class="mt-1 small text-muted">user</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped></style>
