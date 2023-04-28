<script setup>
import Characters from "./Characters.vue";
</script>

<template>
  <main>
    <div class="column-infos">
      <div>
        <input type="checkbox" />
        <p>Name</p>
      </div>
      <p>Status</p>
      <p>Species</p>
      <p>Gender</p>
      <p>Origin</p>
      <p>Location</p>
      <p>Link</p>
      <p id="creationDate">Creation Date</p>
    </div>
    <div class="list-characters">
      <Characters id="1" />
      <Characters id="2" />
      <Characters id="3" />
      <Characters id="4" />
      <Characters id="5" />
    </div>
  </main>
</template>

<style scoped>
main {
  margin-left: 7.2rem;
}

.column-infos {
  padding: 0.8rem 0.4rem 0.8rem 1rem;
}

.column-infos div {
  display: flex;
  align-items: center;
  margin-right: 8rem;
}

.column-infos input {
  margin: 1rem 2.4rem 1rem 1.2rem;
  background: #81828a;
}

.column-infos p {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;

  color: #81828a;
}

.column-infos #creationDate {
  margin-right: 0.4rem;
}

.column-infos {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
