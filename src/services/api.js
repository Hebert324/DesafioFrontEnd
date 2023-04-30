export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const fetchApiCharacters = async (pages) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pages}`
  );
  const res = await response.json();
  let data = await res.results;
  return data;
};

export const fetchApiCharactersLength = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await response.json();
  let characterLength = await data.info;
  return characterLength;
};
