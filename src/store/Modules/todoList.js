
export default{
  namespaced: true,
  state: () => ({
      todoList:[{id: Math.random(),title:'Go to sleep', added: new Date(), priority: 0, complected: false}],
      
  }),
  
  getters: {
    sortList: (state) => {
      return [...state.todoList].sort((a, b) => b.priority - a.priority)
    }
  }
}