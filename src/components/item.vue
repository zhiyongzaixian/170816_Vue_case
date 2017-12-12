<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.todoName}}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
  export default {
    props:['todo', 'index']
  }
</script>

<style>

</style>