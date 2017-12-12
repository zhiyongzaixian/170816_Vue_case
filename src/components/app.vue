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