<template>
  <footer>
    <div>
      <img
        src="../assets/btn-arrow-left.svg"
        alt="Botão de seta para esquerda"
      />
      <p>1</p>
      <img
        src="../assets/btn-arrow-right.svg"
        alt="Botão de seta para direita"
      />
      <p>de 1800</p>
    </div>
    <p>|</p>
    <p>36001 Personagens na lista</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  text-align: center;
  margin: 2.2rem 1.6rem;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

footer div {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

footer div img:first-child {
  opacity: 0.4;
}

footer div p {
  color: #9899a1;
}

footer p {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;

  color: #81828a;
}
</style>
