<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add="add"/>
      <list :todos="todos" :del="del"/>
    </div>
  </div>
</template>

<script>
  import add from './add.vue'
  import list from './list.vue'
  export default {
    components: {
      add, list
    },
    data () {
      return {
        todos: [
          {username: '山西人', comment: '我们有煤矿'},
          {username: '北京人', comment: '吃了吗，您那'}
        ]
      }
    },
    methods: {
      add(commentObj){
        this.todos.unshift(commentObj)
      },
      del(index){
        if(confirm(`你确认删除 ${this.todos[index].username}吗？`)){
          this.todos.splice(index, 1)
        }
      }
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }


</style>