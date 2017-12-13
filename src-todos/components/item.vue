<template>
  <li :style="{background: myColor}" @mouseenter="changeStyle(true)" @mouseleave="changeStyle(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.todoName}}</span>
    </label>
    <button @click="del(index)" class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script>
  export default {
    props:['todo', 'index', 'del'],
    data(){
      return {
        myColor: 'white',
        isShow: false
      }
    },
    methods: {
      changeStyle(isEnter){
        this.myColor = isEnter?'#eee':'white'
        this.isShow = isEnter?true: false
      }
    }
  }
</script>

<style>

</style>