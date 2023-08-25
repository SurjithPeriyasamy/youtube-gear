import React, { useEffect, useState } from "react";
import Button from "./Button";
import { CATEGORIES_API } from "../utils/constants";

const Filterbuttons = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    setCategories(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {categories.map((button, index) => (
        <Button name={button.snippet.title} key={index} />
      ))}
    </div>
  );
};

export default Filterbuttons;
