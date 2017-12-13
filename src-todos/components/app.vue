<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<todo-header v-on:add="add"/>-->
      <todo-header ref="header"/>
      <todo-main :todos="todos" :del="del"/>
      <todo-footer :todos="todos" :changeAllCheckBox="changeAllCheckBox" :delAllCompleteTodo="delAllCompleteTodo">
        <span slot="count">
          <span>333已完成{{allCompleteTodos}}</span> / 全部{{todos.length}}
        </span>
        <button slot="delAll" @click="delAllCompleteTodo" class="btn btn-danger" v-show="allCompleteTodos">清除已完成任务</button>

      </todo-footer>
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
      this.$refs.header.$on('add', this.add)
      // 更新状态
      this.todos = localStorageUtil.getData() || []
    },
    methods: {
      add(todoObj, test){
        console.log(todoObj, test)
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
    },
    computed: {
      // 计算全部完成的todolength
      allCompleteTodos(){
        // return this.todos.filter(item => item.complete).length
        let result = 0
        this.todos.reduce(function (preCount, todo) {
          result += todo.complete?1:0
        }, 0)
        return result
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