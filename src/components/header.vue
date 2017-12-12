<template>
  <div>
    <div class="todo-header">
      <input @keyup.enter="addTodo" v-model="newTodo" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
  </div>
</template>

<script>
  export default {
    // props: ['add'],
    data(){
      return {
        newTodo: ''
      }
    },
    methods: {

      addTodo(){
        // 收集数据
        let newTodo = this.newTodo
        // 判断数据的合法性
        if(!newTodo.trim()){
          alert('输入的内容不能为空')
          return
        }
        // 整理数据
        let todoObj = {todoName: newTodo, complete: false}
        // 将数据交给app
        // this.add(todoObj)
        this.$emit('add', todoObj, 'testData')
        //  清空用户输入的内容
        this.newTodo = ''
      }
    }
  }
</script>

<style>

  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>