<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import axios from "axios";

  function makeReq() {
    console.log('makeReq');
    axios('/api/testwithcurrentuser').then(response => {
      console.log(response);
    });
  }
  function getMail() {
    console.log('testmail');
    axios('/api/test-mailer').then(response => {
      console.log(response);
    });
  }
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button class="bg-blue" @click="makeReq">
    Make Api req
  </button>
  <button class="bg-blue" @click="getMail">
    mail
  </button>
<!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.bg-blue {
  background-color: #535bf2 !important;
  font-size: 50px;
}
</style>
