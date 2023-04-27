<template>
  <div id="container">
    <div id="header">
      <img
        src="../assets/btn-add-personagens.svg"
        alt="Botão verde de adicionar"
      />
      <p>Personagens</p>
    </div>
    <div id="menu">
      <div class="pesquisar">
        <img
          src="../assets/btn-search.svg"
          alt="Botão para Pesquisar ou Buscar personagens"
        />
        <p>Buscar</p>
      </div>
      <div class="btn-atualizar">
        <img
          src="../assets/btn-refreseh.svg"
          alt="Botão de atualizar a página"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  margin-bottom: 0.8rem;
}

#container,
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header {
  padding: 1.3rem 2rem;
  margin-left: 7.6rem;
}

#header p {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: -0.03em;

  color: #3a3c43;
  padding-left: 1.6rem;
}

#menu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.6rem;
  padding: 1rem 1.2rem;
  margin: 0.3rem 1.6rem;

  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(152, 153, 163, 0.2);
}

#menu .pesquisar {
  display: flex;
  align-items: center;
  padding: 0.9rem;
}

.pesquisar p {
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: -0.03em;

  color: #3a3c43;

  margin: 0 2rem 0 0.9rem;
}

.btn-atualizar {
  padding: 0.7rem;
}

.pesquisar,
.btn-atualizar {
  border: 1px solid #dedfe7;
  border-radius: 4px;
}
</style>
