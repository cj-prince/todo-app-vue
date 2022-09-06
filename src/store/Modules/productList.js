import {productList} from '../../components/Product'

export default{
  namespaced: true,
  state: () =>({
    productList,

    cart:[]
  }),
  mutations:{
    addCart:(state, productId) => {
      if(!state.cart.includes(productId)){
        state.cart.push(productId)
      }
    },
    removeCart: (state, productId) => {
      let find =  state.cart.indexOf(productId) 
      state.cart.splice(find, 1)
    }
  },
  actions:{
    addCart:(context, productId)=>{
      context.commit('addCart', productId)
    },
    removeCart:(context, productId)=>{
      context.commit('removeCart', productId)
    }
  }
}