<template>
<div class="home-d">
  <div class="hello">
    <div>
      <h2>Manage your <br> tasks effectively</h2>
      <p>Modern todo list application to help you <br> track your activities and stay productive.</p>
       <TButton name='Get Started' @click="linkTodo"></TButton>
    </div>
  </div>
  <div>
    <img src="@/assets/hero-illustration.png" alt="">
  </div>
</div>
 
</template>

<script>
export default {

  name: 'HomePage',
  props: {
   
  },
  methods:{
    linkTodo(){
      this.$router.push('/todo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  h2{
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -1px;
  }

  p{
    line-height: 160%;
  }
  .home-d{
    display: flex;
    justify-content: center;
    gap: 122px;
    margin-block: 60px;
  }
</style>
