import { Product } from "../../../models/Product";
import ListItem from "./ListItem";

const items: Product[] = [
  {
    id: 1,
    title: "Hello",
    isPickedUp: false,
  },
];

const List = () => {
  return (
    <div className="w-full flex-1 justify-start">
      {items.map((item) => (
        <ListItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default List;
