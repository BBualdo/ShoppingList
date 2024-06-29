import { useState } from "react";
import { Product } from "../../../models/Product";

const ListItem = ({ product }: { product: Product }) => {
  const [isPickedUp, setIsPickedUp] = useState(product.isPickedUp);

  const onPickupChange = (): void => {
    setIsPickedUp((prev) => !prev);
  };

  return (
    <div className="flex items-center mt-4 justify-between w-full">
      <p
        onClick={onPickupChange}
        className={`font-playwrite border-b select-none cursor-pointer border-black w-full mr-10 ${
          isPickedUp ? "line-through" : ""
        }`}
      >
        {product.title}
      </p>
      <div className="flex items-center gap-4">
        <button className="px-2 py-1 bg-yellow-400 hover:bg-yellow-300 transition-all duration-200 text-white font-bold">
          Edit
        </button>
        <button className="bg-red-300 hover:bg-red-500 transition-all duration-200 text-white font-bold px-2 py-1">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
