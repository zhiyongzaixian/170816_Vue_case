<template>
  <div>
    <ul>
      <li v-for="(message, index) in messageArr">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.content}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        messageArr: []
      }
    },
    mounted(){
      setTimeout(() => {
        this.messageArr = [
          {id: 1, content: 'message01'},
          {id: 2, content: 'message02'},
          {id: 3, content: 'message03'}
        ]
      }, 1500)
    }
  }
</script>

<style>

</style>