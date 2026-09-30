import { createContext, useContext, useState } from "react";
import React from 'react';
const FavouriteContext = createContext(null);

export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (studentId) => {
    setFavourites((current) =>
      current.includes(studentId) ? current : [...current, studentId]
    );
  };

  const removeFavourite = (studentId) => {
    setFavourites((current) => current.filter((id) => id !== studentId));
  };

  const isFavourite = (studentId) => favourites.includes(studentId);

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourites must be used inside FavouriteProvider");
  }
  return context;
}