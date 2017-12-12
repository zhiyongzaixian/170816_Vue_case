<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input v-model="username" type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea v-model="comment" class="form-control" rows="6" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="addComment" type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['add'],
    data(){
      return {
        username: '',
        comment: ''
      }
    },
    methods: {
      addComment(){
        // 收集数据
        let username = this.username
        let comment = this.comment
        // 判断数据的合法性
        if(!username || !comment){
          alert('输入的内容不能为空')
          return
        }

        // 整理数据
        let commentObj = {username, comment}
        // 将数据传递给app
        this.add(commentObj)

        // 清空用户输入的内容
        this.username = ''
        this.comment = ''
      }
    }
  }
</script>

<style>

</style>