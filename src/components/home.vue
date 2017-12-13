<template>
  <div>
    <h2>home组件。。。</h2>
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">News</router-link></li>
      <li><router-link to="/home/message">Message</router-link></li>
      <!--<li><a href="#/home/news" class="">News</a></li>-->
      <!--<li><a href="#/home/message" class="router-link-exact-active active">Message</a></li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>