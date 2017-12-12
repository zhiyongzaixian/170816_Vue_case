<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"/>
    </label>
    <span>
          <span>已完成{{allCompleteTodos}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="allCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: ['todos'],
    computed: {
      allCompleteTodos(){
        return this.todos.filter(item => item.complete).length
      }
    }
  }
</script>

<style>


  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>