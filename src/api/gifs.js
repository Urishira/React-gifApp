const getGifs = async (category) => {
  const api_key = "SmHNfPD3p52dEvaSQN4Pil30Y3mkZ0VE";
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`
  );
  const { data } = await resp.json();

  return data;
};

export default getGifs;
