import { createStore } from 'vuex'
// import {productList} from '../components/Product'
import productList from './Modules/productList'
import todoList from './Modules/todoList'

// Create a new store instance.
const store = createStore({
  
  modules:{
    todoList,
    productList
  }

  
})



export default store