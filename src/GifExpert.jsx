import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["Demon Slayer"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Hola mundo</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
};
