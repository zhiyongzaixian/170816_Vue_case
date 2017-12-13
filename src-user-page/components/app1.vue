<template>
  <div>
    <h2 v-if="!repoUrl">loading...</h2>
    <p v-else>most start repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted(){
      let url = `https://api.github.com/search/repositories?q=vu&sort=stars`
//      this.$http.get(url)
//          .then((response) => {
//            // success callback
//            console.log(response.body) //返回结果数据
//            this.repoUrl = response.body.items[0].html_url
//            this.repoName = response.body.items[0].name
//          }, (response) => {
//            // error callback
//            console.log(response.statusText) //错误信息
//          })
      axios.get(url)
          .then(response => {
            let data = response.data
            this.repoUrl = data.items[0].html_url
            this.repoName = data.items[0].name
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>

<style>

</style>