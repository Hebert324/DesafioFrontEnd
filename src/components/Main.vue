<script setup>
import Characters from "./Characters.vue";
import ColumnInfos from "./ColumnInfos.vue";
</script>

<template>
  <main>
    <table>
      <ColumnInfos />
      <Characters v-for="i in 10" :key="i" :id="i" v-bind:page="1" />
    </table>
  </main>
</template>

<style scoped>
main {
  padding: 0 0 0 7.2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>
