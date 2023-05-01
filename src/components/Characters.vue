<script setup props="props">
import { ref, onMounted, watchEffect } from "vue";
import { fetchApiCharacters, formatDate } from "../services/api.js";

const props = defineProps({
  id: Number,
  page: Number,
});

let name = ref("");
let status = ref("");
let species = ref("");
let gender = ref("");
let origin = ref("");
let location = ref("");
let characterLink = ref("");
let creationDate = ref("");
let img = ref("");

const featApiCharacters = async () => {
  try {
    const result = await fetchApiCharacters(props.page);
    name.value = result[props.id].name;
    status.value = result[props.id].status;
    species.value = result[props.id].species;
    gender.value = result[props.id].gender;
    origin.value = result[props.id].origin.name;
    location.value = result[props.id].location.name;
    characterLink.value = result[props.id].url;
    creationDate.value = formatDate(result[props.id].created);
    img.value = result[props.id].image;
  } catch (error) {
    console.log(error);
  }
};

onMounted(featApiCharacters);

const checked = ref(false);
const cor = ref("#ffffff");

watchEffect(() => {
  if (checked.value) {
    cor.value = "#E5F7FF";
  } else {
    cor.value = "#ffffff";
  }
});
</script>

<template>
  <tbody>
    <tr>
      <td :style="{ backgroundColor: cor }">
        <input type="checkbox" v-model="checked" />
        <img class="characters-img" v-bind:src="img" alt="Foto do Personagem" />
      </td>
      <td id="name" :style="{ backgroundColor: cor }">{{ name }}</td>
      <td :style="{ backgroundColor: cor }">
        <img
          class="rocket"
          src="../assets/rocket.svg"
          alt="Imagem de um foguete"
        />
      </td>
      <td class="status" :style="{ backgroundColor: cor }">{{ status }}</td>
      <td :style="{ backgroundColor: cor }">{{ species }}</td>
      <td :style="{ backgroundColor: cor }">{{ gender }}</td>
      <td :style="{ backgroundColor: cor }">{{ origin }}</td>
      <td :style="{ backgroundColor: cor }">{{ location }}</td>
      <td :style="{ backgroundColor: cor }">
        <a v-bind:href="characterLink" target="_blank">Character link</a>
      </td>
      <td class="creation-date" :style="{ backgroundColor: cor }">
        {{ creationDate }}
      </td>
    </tr>
  </tbody>
  <br />
</template>

<style scoped>
td {
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: -0.03em;

  color: #696a72;

  padding: 1rem;
}

tr td:first-child {
  border-radius: 2.6rem 0 0 2.6rem;
}

.characters-img {
  width: 28px;
  height: 28px;
  border-radius: 99px;
  cursor: pointer;
}

tr td input {
  display: none;
  cursor: pointer;
  margin-left: 0.6rem;
}

tr td:hover .characters-img {
  display: none;
}

tr td:hover input {
  display: initial;
}

a {
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

.rocket {
  border: 1px solid #eaebf3;
  border-radius: 4px;
  padding: 0.6rem;
  cursor: pointer;
}
</style>
