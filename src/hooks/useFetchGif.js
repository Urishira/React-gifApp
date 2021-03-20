import { useState, useEffect } from "react";
import getGifs from "../api/gifs";
import gifListFormater from "../helpers/gifListFormater";

export const useFetchGif = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fn = async () => {
      try {
        const dataApiGift = await getGifs(category);
        const dataProcess = gifListFormater(dataApiGift);
        setstate({
          data: dataProcess,
          loading: false,
        });
      } catch (error) {
        throw error;
      }
    };
    fn();
  }, [category]);

  return state;
};
