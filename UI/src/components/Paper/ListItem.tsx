import { useState } from "react";
import { Product } from "../../../models/Product";
import { url } from "../../../config/url";

const ListItem = ({ product }: { product: Product }) => {
  const [isPickedUp, setIsPickedUp] = useState(product.isPickedUp);

  const onPickupChange = (): void => {
    const updatedIsPickedUp = !isPickedUp;
    setIsPickedUp(updatedIsPickedUp);
    fetch(url + "products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, isPickedUp: updatedIsPickedUp }),
    });
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

      <button className="bg-red-300 hover:bg-red-500 transition-all duration-200 text-white font-bold px-2 py-1">
        Delete
      </button>
    </div>
  );
};

export default ListItem;
