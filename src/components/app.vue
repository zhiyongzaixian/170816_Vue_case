<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">home</router-link>
          <!--<a href="#/about" class="list-group-item router-link-exact-active active">About</a>-->
          <!--<a href="#/home" class="list-group-item">Home</a></div>-->
        </div>
      </div>
      <div class="col-xs-6">

        <div class="panel">
          <!--接收路由组件的容器-->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    watch: {
      $route(to, from){
        console.log(to, from)
      }
    }
  }
</script>

<style>

</style>