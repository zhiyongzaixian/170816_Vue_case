<template>
  <div>
    <h2 v-if="firstView">enter name to search</h2>
    <h2 v-if="loading">loading...</h2>
    <h3 v-if="error">暂时没有匹配到用户</h3>
    <div v-if="users" class="row">
      <div class="card" v-for="(user, index) in users">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['getSearchName'],
    data(){
      return {
        firstView: true,
        loading: false,
        users: null,
        error: null
      }
    },
    watch: {
      getSearchName (value) {
        console.log(value, '我是监视的值')
        // 更新状态
        this.firstView = false
        this.loading = true
        this.users = null
        this.error = null

        let url = `https://api.github.com/search/users?q=${value}`

        axios.get(url)
            .then(response => {
              let data = response.data
              // 更新状态
              this.loading = false
              this.users = data.items
            })
            .catch(error => {
              this.loading = false
              this.error = error
            })
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>