<template>
  <div class="container">
    <search :getName="getName"/>
    <list :getSearchName="getSearchName"/>
  </div>
</template>

<script>
  import search from './search.vue'
  import list from './list.vue'
  export default {
    components: {
      search, list
    },
    data(){
      return {
        getSearchName: ''
      }
    },
    methods: {
      getName(searchName){
        this.getSearchName = searchName
      }
    }
  }
</script>

<style>

</style>