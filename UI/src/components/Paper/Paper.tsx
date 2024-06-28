import List from "./List";
import NewItemForm from "./NewItemForm";
import Paginator from "./Paginator";

const Paper = () => {
  return (
    <div className="w-[400px] h-[560px] p-4 flex flex-col items-center justify-between bg-yellow-100">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-playwrite">Shopping List</h1>
        <NewItemForm />
      </div>
      <List />
      <Paginator />
    </div>
  );
};

export default Paper;
