<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header />
      <todo-main :todos="todos"/>
      <todo-footer />
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import main from './main.vue'
  import footer from './footer.vue'
  export default {
    components: { // 注册组件
      'todoHeader': header,
      'todo-main': main,
      'todo-footer': footer
    },
    data(){
      return {
        todos: [
          {todoName: '吃饭', complete: false},
          {todoName: '睡觉', complete: false},
          {todoName: '打豆豆', complete: false}
        ]
      }
    }
  }
</script>

<style>


  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }



</style>