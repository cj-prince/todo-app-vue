<template>
  <div class="wrapper">
    <div class="container">
      <div class="input-container">
        <input type="text" class="inputField" v-model="title" placeholder="Add task...">
        <TButton name='Add' class="Tbutton" @click="addTodo()" v-if="!isEditing"/>
        <TButton name='Save' class="Tbutton" @click="saveTodo()"  v-else/>

      </div>
      <div class="todoList">
        <div class="todoItems" v-for="item, index in sortList" :key="index">
            <input type="checkbox" v-model="item.complected">
            <div class="todo-title">
              <h5 :class="['title',{'complected': item.complected} ]">{{item.title}}</h5>
              <p class="todoDate">{{item.added}}</p>
            </div>
            
      
          <div class="icons">
            <div class="edit" @click="editTodo(item.id, item.title)" ><img src="@/assets/akar-icons_edit.png" alt="edit"></div>
              <div class="delete" @click="deleteTodo(item.id)"><img src="@/assets/Vector.png" alt="delete"></div>
          </div>
        
          <div class="priority">
            <div class="p-item">
              {{item.priority}}
            </div>
          <div class="P-btn">
              <i class="fa fa-caret-up" @click="item.priority=item.priority + 1" aria-hidden="true" ></i>
              <i class="fa fa-caret-down" @click="item.priority=item.priority -1"  aria-hidden="true"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'T-Todo',
    data: () => ({
      todoList:[{id: Math.random(),title:'Go to sleep', added: new Date(), priority: 0, complected: false}],

      title:'',
      isEditing: null,
    }),
    methods:{
      addTodo(){
        if (!this.title) return
        const newTodo = {
          id: Math.random(),
          title: this.title,
          added: new Date(),
          priority: 0,
          complected: false
        }
        this.todoList.push(newTodo)
        this.title = ''
      },

      editTodo(itemId, title){
        this.isEditing =itemId;
        this.title = title;
      },

      saveTodo(){
        if (!this.title) return
        const itemId = this.isEditing
        this.todoList.map((item) => {
          if (item.id === itemId){
            item.title = this.title
          }
        })

        this.title= '';
        this.isEditing = null;
      },


      deleteTodo(itemId){
        this.todoList=this.todoList.filter((item) => item.id != itemId)
      },
    },
    computed: {
        sortList() {
          return [...this.todoList].sort((a, b) => b.priority - a.priority);
        }
    },
  }
</script>

<style scoped>
.wrapper{
  margin-block: 24px;
  text-align: center;
}

.container{
  max-width: 640px;
  margin-inline: auto;
}

.input-container{
  display: flex;
}

.inputField{
  flex-basis: 100%;
  border: none;
  padding: 4px 8px;
  outline: none;
  border-radius: 8px;
}

.Tbutton{
  margin-left: -80px;
}

.todoItems{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  margin-block: 20px;
  border-radius: 8px;
  background: #FFFFFF;
}

.todo-title{
  text-align: left;
  margin-left: -20px ;
}

.title{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

.complected{
  text-decoration: line-through;
}

p{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.49);
  margin-top: -20px;
}

.icons{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
}

.priority{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.p-item{
  background: #EFEFEF;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center; 
}

.P-btn{
  display: flex;
  flex-flow: column;
  gap: 10px;
  cursor: pointer;
}
</style>