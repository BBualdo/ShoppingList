const NewItemForm = () => {
  return (
    <form className="flex items-center gap-4">
      <input type="text" required className="border-2 border-black py-1 px-2" />
      <button className="px-4 py-1 bg-green-500 hover:bg-green-700 transition-all duration-200 text-white font-bold">
        Add
      </button>
    </form>
  );
};

export default NewItemForm;
