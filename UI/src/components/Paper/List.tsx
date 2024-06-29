import { Product } from "../../../models/Product";
import ListItem from "./ListItem";

const List = ({ products }: { products: Product[] | null | undefined }) => {
  const productsElement = products?.length
    ? products.map((product) => <ListItem key={product.id} product={product} />)
    : null;

  const emptyList = (
    <p className="text-center text-xl font-bold underline underline-offset-4">
      Your list is empty.
    </p>
  );

  const productsError = (
    <p className="text-center text-xl text-red-400 font-bold">
      Can't get products.
    </p>
  );

  return (
    <div className="w-full mt-8 flex-1 justify-start">
      {!products
        ? productsError
        : products && products.length === 0
        ? emptyList
        : productsElement}
    </div>
  );
};

export default List;
