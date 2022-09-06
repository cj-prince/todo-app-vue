<template>
<div class="cart">
  Item in Cart: <span class="count">{{cart.length}}</span> 
</div>
<ul>
  <li class="ProductItems" v-for="item in productList" :key="item.id">
    <img :src="item.image" alt="productimage">
    <div class="title">{{item.title}}</div>
    <p>${{item.price}}</p>
    <TButton name='Remove from Cart' v-if="cart.includes(item.id)" @click="removeCart(item.id)"/>
    <TButton name='Add to Cart' @click="addCart(item.id)" v-else/>
  </li>
</ul>
  
</template>

<script>
  import {  mapActions, mapState  } from 'vuex'
  export default {
    name:'P-Product',
    data: ()=>({
      // cart:[]
    }),
    methods:{
      ...mapActions({addCart:'productList/addCart', removeCart:'productList/removeCart'}),
      // addCart(productId){
      //   if (!this.cart.includes(productId)){
      //     this.cart.push(productId)
      //   }
      // },
      // removeCart(productId){
      //   let find =  this.cart.indexOf(productId) 
      //   this.cart.splice(find, 1)
      // }
    },
    computed: {
      ...mapState({
        productList: (state) => state.productList.productList,
        cart: (state) => state.productList.cart
      }),
      // productList(){
      //   return this.$store.state.productList.productList

      // },

      // Cart(){
      //   return this.$store.state.productList.cart
      // }
    },
   
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    max-width: 80vw;
  }
  .cart{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    margin-block: 1rem;
  }

  .count{
    background: crimson;
    color: white;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul{
    display: grid;
    grid: auto-flow / repeat(4, 1fr);
    list-style: none;
    margin: 20px auto;
    gap: 1.5rem;
  }

.ProductItems{
  width: 100%;
  background: white;
  padding: 1rem;
  text-align: center;
}

.ProductItems img{
  width: 100%;
  height: 180px;
  object-fit: contain;
}

</style>