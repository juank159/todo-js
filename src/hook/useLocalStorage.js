import React, { useState } from "react";
 //traer desde localstorage
export function useLocalStorage(nameItem, initialValue) {
  const [itemTodo, setItemTodo] = useState(initialValue);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(nameItem);
        let parseItem;
        if (!localStorageItem) {
          localStorage.setItem(nameItem, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItemTodo(parseItem);
        }
        setloading(false);
      } catch (error) {
        seterror(true)
        setloading(false)
      }
    },500);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(nameItem, JSON.stringify(newItem));
    setItemTodo(newItem);
  };
  return { error, loading, itemTodo, saveItem };
}
