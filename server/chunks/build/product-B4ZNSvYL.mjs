import { v as defineStore } from './server.mjs';
import axios from 'axios';

const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    product: [],
    categories: [],
    baseUrl: "https://fakestoreapi.com/products"
  }),
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async productsAll(category = null) {
      this.products = [];
      if (category == null) {
        axios.get(this.baseUrl).then((response) => {
          if (response.status == 200) {
            this.products = response.data;
          }
        }).catch((error) => {
          console.log(error);
        });
      } else {
        axios.get(this.baseUrl + "/category/" + category).then((response) => {
          if (response.status == 200) {
            this.products = response.data;
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    async productDetail(id) {
      this.product = [];
      await axios.get(this.baseUrl + "/" + id).then((response) => {
        if (response.status == 200) {
          this.product = response.data;
          console.log(this.product);
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    async productsCategories() {
      this.categories = [];
      await axios.get(this.baseUrl + "/categories").then((response) => {
        if (response.status == 200) {
          this.categories = response.data;
          console.log(this.categories);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
});

export { useProductStore as u };
//# sourceMappingURL=product-B4ZNSvYL.mjs.map
