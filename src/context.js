import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const handleFavouritesAdd = (product) => {
    if (!favourites.includes(product)) {
      setFavourites([...favourites, product]);
    }
  };

  const handleFavouritesDelete = (product) => {
    setFavourites(favourites.filter((fav) => fav !== product));
  };

  return (
    <AppContext.Provider
      value={{
        showCart,
        setShowCart,
        favourites,
        handleFavouritesAdd,
        handleFavouritesDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
