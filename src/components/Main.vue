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
      <span><p>Creation Date</p></span>
    </div>
    <div class="list-personagens"></div>
  </main>
</template>

<style scoped>
main {
  margin-left: 7.2rem;
}

.column-infos {
  padding: 0.8rem 0.4rem 0 1rem;
}

.column-infos input {
  margin: 1rem 0rem 1rem 1.2rem;
}

.column-infos div {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}

.column-infos p {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;

  color: #81828a;

  margin: 0 2.4rem;
}

.column-infos span p {
  margin-right: 0.4rem;
}

.column-infos {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
