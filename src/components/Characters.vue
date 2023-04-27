<template>
  <div class="characters">
    <div>
      <img src="../assets/ricky-image.svg" alt="Foto do Personagem" />
      <p id="name">Rick Sanchez</p>
    </div>
    <div>
      <img
        class="rocket"
        src="../assets/rocket.svg"
        alt="Imagem de um foguete"
      />
      <p class="status">Alive</p>
    </div>
    <p class="species">Human</p>
    <p class="gender">Male</p>
    <p class="origin">Eartch (C-137)</p>
    <p class="location">Citadel of Ricks</p>
    <a href="#">Character link</a>
    <p class="creation-date">04/11/2017</p>
  </div>
</template>

<style scoped>
.characters {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 26px 0px 0px 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.1rem;
}

.characters p {
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: -0.03em;

  color: #696a72;
}

.characters a {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: -0.03em;
  text-align: center;

  color: #2979ff;
  text-decoration: none;

  background: #e8ecff;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
}

#name {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: -0.03em;

  color: #3a3c43;
}

.characters div {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}

.rocket {
  border: 1px solid #eaebf3;
  border-radius: 4px;
  padding: 0.6rem;
}
</style>
