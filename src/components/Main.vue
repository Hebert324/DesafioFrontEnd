<script setup>
import Characters from "./Characters.vue";
import ColumnInfos from "./ColumnInfos.vue";
</script>

<template>
  <main>
    <table>
      <ColumnInfos />
      <Characters v-for="i in 12" :key="i" :id="i" />
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
