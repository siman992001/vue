import { defineStore } from 'pinia'

export const cart = defineStore('myCart', {
  state: () => ({
    noItems: 0,
    name: 'Ramon',
    items: [],
  }),
  getters: {
    cartCount(state){
        console.log('cartCount', state.noItems);
        return state.noItems;
    },
    cart(state){
        console.log(state, state.items)
        return state.items
    }
  },
  actions: {
    addToCart(item){
        this.items.push(item);
        this.noItems += 1;
        console.log('cart after add', this.cart);
        console.log('cart count after add', this.cartCount);
    },
    removeFromCart(item){
        var temp = this.items.filter((e)=>{e !== item});
        this.noItems -= 1;
        console.log('cart after remove', temp);
        console.log('cart count after remove', this.noItems);
        this.items = temp;
    },
  }
})
