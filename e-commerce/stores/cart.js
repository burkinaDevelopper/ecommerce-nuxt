
import { useLocalStorage } from '@vueuse/core'
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: useLocalStorage('shoppingItems', []),
    }),
    hydrate(state, initialState) {
        state.items = useLocalStorage('shoppingItems', []);
    },
    getters: {
        getItems: (state) => state.items,
        getTotalItems: (state) => state.items.reduce((sum, current) => {
            return sum + current.quantity;
        }, 0),
        getTotalAmount: (state) => state.items.reduce((sum, current) => {
            return sum + current.subTotal;
        }, 0),
    },
    actions: {
        async addToCard(itemPayload) {
            let existingItems = this.items.find(item => {
                return item.productId == itemPayload.id;
            });
            if (existingItems) {
                let index = this.items.findIndex(item => {
                    return item.productId == itemPayload.id;
                });
                existingItems.quantity += 1;
                existingItems.subTotal = existingItems.quantity * existingItems.price;
                this.items[index] = existingItems;
            } else {
                this.items.push({
                    productId: itemPayload.id,
                    productTitle: itemPayload.title,
                    productImage: itemPayload.image,
                    price: itemPayload.price,
                    quantity: 1,
                    category: itemPayload.category,
                    subTotal: itemPayload.price,
                });
            }
        },
        async incrementCart(itemPayload) {
            let index = this.items.findIndex(item => {
                return item.productId == itemPayload.id;
            });
            itemPayload.quantity += 1;
            itemPayload.subTotal = itemPayload.quantity * itemPayload.price;
            this.items[index] = itemPayload;
        },
        async decrementCart(itemPayload) {
            let index = this.items.findIndex(item => {
                return item.productId == itemPayload.id;
            });
            itemPayload.quantity -= 1;
            itemPayload.subTotal = itemPayload.quantity * itemPayload.price;
            this.items[index] = itemPayload;
            if (itemPayload.quantity < 1) {
                this.removeItem(itemPayload);
            }
        },
        async removeItem(itemPayload) {
            let index = this.items.findIndex(item => {
                return item.productId == itemPayload.id;
            });
            this.items.splice(index, 1);
        },
        async clearItems() {
            this.items = [];
        }
    },
})

