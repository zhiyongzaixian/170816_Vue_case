<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add="add"/>
      <todo-main :todos="todos" :del="del"/>
      <todo-footer :todos="todos" :changeAllCheckBox="changeAllCheckBox" :delAllCompleteTodo="delAllCompleteTodo"/>
    </div>
  </div>
</template>

<script>
  import localStorageUtil from '../util/localStorageUtil.js'
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
        todos: []
      }
    },
    mounted(){
      // 更新状态
      this.todos = localStorageUtil.getData() || []
    },
    methods: {
      add(todoObj){
        this.todos.unshift(todoObj)
      },
      del(index){
        this.todos.splice(index, 1)
      },
      changeAllCheckBox(isChecked){
        // 修改全部checkbox的选中/未选中的状态
        this.todos.forEach(item => item.complete = isChecked)
      },
      // 清除选中的todo
      delAllCompleteTodo(){
        this.todos = this.todos.filter(item => !item.complete)
      }
    },
    watch: {
      todos: {
        deep: true, // 深度监视数据
        handler: function (value) {
          console.log(value)
          // todos内部的数据发生了改变
          localStorageUtil.setData(value)
        }
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