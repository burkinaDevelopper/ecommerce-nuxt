<script setup>
useHead({
  title: 'cart shopping',
  meta: [
    { name: "description", content: 'liste des produit' }],
});
definePageMeta({
  layout: 'main',
});
const cart = useCartStore();
const incrementCart = async (product) => {
  cart.incrementCart(product);
}
const decrementCart = async (product) => {
  cart.decrementCart(product);
}
const removeItem = async (product) => {
  cart.removeItem(product);
}
const clearItems = async () => {
  cart.clearItems();
}
</script>

<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          <div class="col-12">
            <button @click="clearItems()" class="btn btn-danger">{{ $t('clear') }}</button>
            <div class="card">
              <div class="table-responsive">
                <table class="table table-vcenter card-table">
                  <thead>
                    <tr>
                      <th>Produit</th>
                      <th>Qty</th>
                      <th>Prix</th>
                      <th class="w-1">Total produit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cart.getItems" :key="item.id">
                      <td>
                        <div class="d-flex py-1 align-items-center">
                          <span @click="removeItem(item)" class="cursor-pointer"><i
                              class="fa-solid fa-trash text-danger"></i></span> &nbsp;
                          <span class="avatar me-2"
                            :style="{ 'background-image': 'url(' + item.productImage + ')' }"></span>
                          <div class="flex-fill">
                            <div class="font-weight-medium">{{ item.productTitle }}</div>
                            <div class="text-muted"><a href="#" class="text-reset">{{ item.category }}</a></div>
                          </div>
                        </div>
                      </td>
                      <td class="fs-2">
                        <button @click="decrementCart(item)" class="badge bg-primary-lt">-</button>
                        {{ item.quantity }}
                        <button @click="incrementCart(item)" class="badge bg-primary-lt">+</button>
                      </td>
                      <td>
                        {{ item.price.toFixed(2) }}€
                      </td>
                      <td>
                        {{ item.subTotal.toFixed(2) }}€
                      </td>
                    </tr>

                    <tr>
                      <td colspan="3">
                        <h3>Total</h3>
                      </td>
                      <td>
                        <h3>{{ cart.getTotalAmount.toFixed(2) }}€</h3>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped></style>
