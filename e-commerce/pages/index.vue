<script setup>
const store = useProductStore();
const { products } = storeToRefs(store);
store.productsAll(null);
useHead({
  title: 'home shopping',
  meta: [
    { name: "description", content: 'home page' }],
});
definePageMeta({
  layout: 'main',
});

</script>

<template>
  <div class="page">
    <!-- Navbar -->

    <div class="page-wrapper">
      <!-- Page body -->
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-cards">
            <div v-for="product in products" :key="product.id" class="col-sm-6 col-lg-4">
              <CardProduct :product="product" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped></style>
