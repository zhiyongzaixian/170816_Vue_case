<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr">
        {{news.content}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        newsArr: [
          {id: 1, content: 'news01'},
          {id: 2, content: 'news02'},
          {id: 3, content: 'news03'}
        ]
      }
    }
  }
</script>

<style>

</style>