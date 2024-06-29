import { useEffect, useState } from "react";
import List from "./List";
import NewItemForm from "./NewItemForm";
import Paginator from "./Paginator";
import { PaginatedProducts } from "../../../models/PaginatedProducts";
import ProductsService from "../../../services/ProductsService";

const Paper = () => {
  const [data, setData] = useState<PaginatedProducts | null | undefined>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleDelete = async () => {
    await ProductsService.fetchProducts();
    setData(ProductsService.getProducts());
  };

  const handleAdd = async () => {
    await ProductsService.fetchProducts();
    setData(ProductsService.getProducts());
  };

  useEffect(() => {
    const fetchData = async () => {
      await ProductsService.fetchProducts(currentPage);
      const data = ProductsService.getProducts();
      setData(data);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="w-[400px] h-[560px] p-4 flex flex-col items-center justify-between bg-yellow-100">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-playwrite">Shopping List</h1>
        <NewItemForm onAdd={handleAdd} />
      </div>
      <List products={data?.products} onDelete={handleDelete} />
      <Paginator currentPage={currentPage} totalPages={data?.totalPages} />
    </div>
  );
};

export default Paper;
