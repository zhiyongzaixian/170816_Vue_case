<template>
  <li class="list-group-item">
    <div class="handle">
      <a @click="del(index)" href="javascript:;">删除</a>
    </div>
    <p class="user"><span >{{todo.username}}</span><span> 说: </span></p>
    <p class="centence">{{todo.comment}}</p>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: {
        type: Number,
        required: true
      },
      del: Function
    },
    methods: {
//      delComment(){
//        if(confirm(`你确认删除 ${this.todo.username}吗？`)){
//          this.del(this.index)
//        }
//      }
    }
  }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>