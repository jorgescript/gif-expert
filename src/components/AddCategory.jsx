import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputValueChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    sendNewCategory();
  };

  const sendNewCategory = () => {
    const newCategory = inputValue.trim();
    if (newCategory.length < 1) return;
    onNewCategory(newCategory);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputValueChange}
      />
      <button onClick={sendNewCategory}>Agregar</button>
    </form>
  );
};
