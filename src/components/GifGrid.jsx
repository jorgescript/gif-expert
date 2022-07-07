import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs(category).then((newGifs) => {
      setGifs(newGifs);
    });
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {gifs ? (
        gifs.map((gif) => (
          <div key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
          </div>
        ))
      ) : (
        <div>No hay categorias</div>
      )}
    </>
  );
};
