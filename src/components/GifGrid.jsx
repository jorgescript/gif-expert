import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading ? (
          <h3>Cargando gifs...</h3>
        ) : (
          gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)
        )}
      </div>
    </>
  );
};
