import React from "react";

const GifItemGrid = (props) => {
  const { title, url } = props;

  return (
    <div className="Card-gif animate__animated animate__bounceInDown animete__delay-2s">
      <li>
        <p>{title}</p>
        <img className="Img" src={url} alt={title} />
      </li>
    </div>
  );
};

export default GifItemGrid;
