export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?key=sRw4LL3bSfvWQDNW1nij7rMeDSzJDo51&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};
