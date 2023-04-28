<script setup props="props">
import { ref, onMounted } from "vue";

const props = defineProps({
  id: String,
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const fetchApi = (id) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return result;
};

let img = ref("");
let name = ref("");
let status = ref("");
let species = ref("");
let gender = ref("");
let origin = ref("");
let location = ref("");
let characterLink = ref("");
let creationDate = ref("");

const fetchCharacter = () => {
  fetchApi(props.id)
    .then((character) => {
      name.value = character.name;
      status.value = character.status;
      species.value = character.species;
      gender.value = character.gender;
      origin.value = character.origin.name;
      location.value = character.location.name;
      characterLink.value = character.url;
      creationDate.value = formatDate(character.created);
      img.value = character.image;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(fetchCharacter);
</script>

<template>
  <div class="characters">
    <div>
      <img class="characters-img" v-bind:src="img" alt="Foto do Personagem" />
      <p id="name">{{ name }}</p>
    </div>
    <div>
      <img
        class="rocket"
        src="../assets/rocket.svg"
        alt="Imagem de um foguete"
      />
      <p class="status">{{ status }}</p>
    </div>
    <p class="species">{{ species }}</p>
    <p class="gender">{{ gender }}</p>
    <p class="origin">{{ origin.slice(0, 10) + "..." }}</p>
    <p class="location">{{ location.slice(0, 10) + "..." }}</p>
    <a v-bind:href="characterLink" target="_blank">Character link</a>
    <p class="creation-date">{{ creationDate }}</p>
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

.characters-img {
  width: 28px;
  height: 28px;
  border-radius: 99px;
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
  cursor: pointer;
}
</style>
