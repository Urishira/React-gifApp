import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import GifItemGrid from "../componets/GifItemGrid";
//This component take the categories and rendered the found
export const GifGrid = ({ category }) => {
  //useFetchGif is a custom hook take the logic
  const { data: images, loading } = useFetchGif(category);

  const renderItem = images.map(({ id, ...rest }) => (
    <GifItemGrid key={id} {...rest} />
  ));

  return (
    <div>
      <h3>{category}</h3>
      {loading && "Data loaded"}
      <ol className="card-container">{renderItem}</ol>
    </div>
  );
};
