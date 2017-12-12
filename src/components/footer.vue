<template>
  <div class="todo-footer">
    <label>
      <input v-model="changeAllComplete" type="checkbox"/>
    </label>
    <slot name="count"></slot>
    <slot name="delAll"></slot>
  </div>
</template>

<script>
  export default {
    props: ['todos', 'changeAllCheckBox', 'delAllCompleteTodo'],
    computed: {
      // 计算全部完成的todolength
      allCompleteTodos(){
        // return this.todos.filter(item => item.complete).length
        let result = 0
        this.todos.reduce(function (preCount, todo) {
          result += todo.complete?1:0
        }, 0)
        return result
      },
      // 设置全选全不选按钮的状态
      changeAllComplete: {
        get(){
          return this.allCompleteTodos == this.todos.length && this.allCompleteTodos
        },
        set(isChecked){// 监视checkbox是否选中
          console.log(isChecked)
          this.changeAllCheckBox(isChecked)
        }
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