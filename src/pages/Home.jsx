import Landing from "../components/Landing";
import Shop from "../components/Shop";
import Type from "../components/Type";
import Products from "../components/Products";
import Model from "../components/Model";
import News from "../components/News";
import Dials from "../components/Dials";
export default function Home({ addProduct, handleFavoriteClick }) {
  return (
    <>
      <Landing />
      <Shop />
      <Type />
      <Dials />
      <Products
        handleFavoriteClick={handleFavoriteClick}
        addProduct={addProduct}
      />
      <Model />
      <News />
    </>
  );
}
