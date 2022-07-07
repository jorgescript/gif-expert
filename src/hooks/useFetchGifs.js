import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState({ isLoading: true, gifs: [] });
  useEffect(() => {
    getGifs(category).then((newGifs) => {
      setGifs({ isLoading: false, gifs: newGifs });
    });
  }, []);

  return { gifs: gifs.gifs, isLoading: gifs.isLoading };
};
