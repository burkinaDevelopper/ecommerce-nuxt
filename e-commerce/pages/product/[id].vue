<script setup>
const route = useRoute();
const store = useProductStore();
store.productDetail(route.params.id);
const product = computed(() => store.product);

definePageMeta({
  layout: 'main',
  middleware: 'auth',
});
const cart = useCartStore();
const addToCart = async (product) => {
  cart.addToCard({
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    category: product.category,
  });
}

</script>

<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9">
            <div class="card card-lg">
              <div class="card-body markdown">
                <h1 class="mb-0">{{ product.title }}</h1>
                <p>
                  <NuxtImg :src="product.image" :alt="product.title" loading="lazy" preload />
                </p>

                <p>
                  {{ product.description }}
                </p>
                <div v-if="product.rating?.rate" class="rate">
                  <span v-for="i in Math.round(product.rating?.rate)">&starf;</span>
                  <span v-for="i in Math.round(5 - product.rating?.rate)">&star;</span>
                  <span> {{ product.rating?.rate.toFixed(1) }}</span>
                </div>

                <div class="col-6 col-sm-4 col-md-2 col-xl-auto py-3">
                  <a @click.prevent="addToCart(product)" href="#" class="btn btn-tabler w-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="6" cy="19" r="2"></circle>
                      <circle cx="17" cy="19" r="2"></circle>
                      <path d="M17 17h-11v-14h-2"></path>
                      <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"></path>
                      <path d="M15 6h6m-3 -3v6"></path>
                    </svg>
                    Ajouter {{ product.price }} €
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
