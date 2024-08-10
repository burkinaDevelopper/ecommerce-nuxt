<script setup>
defineProps(['product']);
</script>

<template>
  <div class="card card-sm">
    <NuxtLink :to="'/product/' + product.id" class="d-block">
      <NuxtImg :src="product.image" width="420" height="220" class="card-img-top" fit="contain" loading="lazy"
        preload />
    </NuxtLink>
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div>
          <div><span>{{ product.title.slice(0, 48) }}</span></div>
          <div class="text-muted">{{ product.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
