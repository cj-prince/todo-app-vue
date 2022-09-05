<template>
  <button class="btn">
    {{name}}
  </button>
</template>

<script>
  export default {
    name: 'TButton',
    props: ['name']
  }
</script>

<style scoped>
.btn{
  background:#5222D0;
  color: #FFFFFF;
  padding: 8px 24px;
  border: none;
  font-size: 16px;
  line-height: 160%;
  border-radius: 8px;
  cursor: pointer;
}
</style>