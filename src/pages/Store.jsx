import Collection from "../components/Collection";
export default function Store({ addProduct }) {
  return (
    <>
      <Collection addProduct={addProduct} />
    </>
  );
}
