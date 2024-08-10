<script setup>

const store = useProductStore();
store.productsCategories();
const { categories } = storeToRefs(store);

const router = useRouter();
const productByCategory = (category) => {
  store.productsAll(category);
  router.push({ path: '/', query: { category } });
}
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
      <div class="navbar navbar-light">
        <div class="container-xl">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span class="nav-link-title">
                  {{ $t('home') }}
                </span>
              </NuxtLink>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                role="button" aria-expanded="false">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                  </svg>
                </span>
                <span class="nav-link-title">
                  {{ $t('category') }}
                </span>
              </a>
              <div class="dropdown-menu">
                <a v-for="category in categories" :key="category" @click.prevent="productByCategory(category)"
                  class="dropdown-item">
                  {{ category }}
                </a>

              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                role="button" aria-expanded="false">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                  </svg>
                </span>
                <span class="nav-link-title">
                  {{ $t('language') }}
                </span>
              </a>
              <div class="dropdown-menu">
                <NuxtLink :to="switchLocalePath('fr')" class="dropdown-item">
                  french
                </NuxtLink>
                <NuxtLink :to="switchLocalePath('en')" class="dropdown-item">
                  english
                </NuxtLink>

              </div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
