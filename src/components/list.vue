<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="todos.length == 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul v-else class="list-group">
      <item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :del="del"/>
    </ul>
  </div>
</template>

<script>
  import item from './item.vue'
  export default {
    props: ['todos', 'del'], // 声明接收
    components: { // 注册组件
      item
    }
  }
</script>

<style>

</style>