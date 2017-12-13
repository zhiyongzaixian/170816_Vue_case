<template>
  <div>
    <p>消息ID为{{this.$route.params.newsId}}的详情为xxxxxxxxxxx</p>
    <button @click="$router.push('/about')">跳转到about</button>
    <button @click="$router.replace('/home')">跳转到home</button>
    <button @click="$router.back()">回退1</button>
    <button @click="$router.go(-1)">回退2</button>
  </div>
</template>

<script>
  export default {
    methods: {
      test(){
        this.$router.push('/about')
      }
    }
  }
</script>

<style>

</style>