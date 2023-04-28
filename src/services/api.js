export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const fetchApi = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
};

export const fetchApiCharacterLength = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await response.json();
  let characterLength = await data.info.count;
  console.log(characterLength);
  return characterLength;
};
