import React, { useState } from "react";
import AddCategory from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

const GifCouserApp = () => {
  const [categories, setCategories] = useState(["Goku"]);
  //Send setCategories to the addCategory

  return (
    <>
      <h2>GifCouserApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol className="container1">
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />; //Send categories to gifGrid before function map loop
        })}
      </ol>
    </>
  );
};

export default GifCouserApp;
