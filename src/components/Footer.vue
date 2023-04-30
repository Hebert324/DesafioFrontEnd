<script setup>
import { ref, onMounted } from "vue";
import { fetchApiCharactersLength } from "../services/api.js";

let characterLength = ref("");
let pagesLength = ref("");

const apiCharactersLength = async () => {
  try {
    const info = await fetchApiCharactersLength();
    characterLength.value = info.count;
    pagesLength.value = info.pages;
  } catch (error) {
    console.log(error);
  }
};

onMounted(apiCharactersLength);

const currentPage = ref(1);
const previousbuttonOpacity = ref(0.5);
const nextbuttonOpacity = ref(1);

const nextPageButton = () => {
  currentPage.value < pagesLength.value && currentPage.value++;
  previousbuttonOpacity.value = 1;
  currentPage.value == pagesLength.value && (nextbuttonOpacity.value = 0.5);
};

const previousPageButton = () => {
  currentPage.value > 1 && currentPage.value--;
  nextbuttonOpacity.value = 1;
  currentPage.value == 1 && (previousbuttonOpacity.value = 0.5);
};
</script>

<template>
  <footer>
    <div>
      <button
        id="linkSetaEsquerda"
        @click="previousPageButton"
        v-bind:style="{ opacity: previousbuttonOpacity }"
      >
        <img src="../assets/btn-arrow-left.svg" />
      </button>
      <p>{{ currentPage }}</p>
      <button @click="nextPageButton">
        <img
          src="../assets/btn-arrow-right.svg"
          alt="Botão de seta para direita"
          v-bind:style="{ opacity: nextbuttonOpacity }"
        />
      </button>
      <p>de {{ pagesLength }}</p>
    </div>
    <p>|</p>
    <p>{{ characterLength }} Personagens na lista</p>
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
}

footer div {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

button {
  border: none;
}

button img {
  cursor: pointer;
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
