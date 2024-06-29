import { useEffect, useState } from "react";
import List from "./List";
import NewItemForm from "./NewItemForm";
import Paginator from "./Paginator";
import { url } from "../../../config/url";
import { PaginatedProducts } from "../../../models/PaginatedProducts";

const Paper = () => {
  const [data, setData] = useState<PaginatedProducts | null | undefined>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchProducts = (page: number = 1, pageSize: number = 5) => {
    fetch(url + `products/?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div className="w-[400px] h-[560px] p-4 flex flex-col items-center justify-between bg-yellow-100">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-playwrite">Shopping List</h1>
        <NewItemForm />
      </div>
      <List products={data?.products} />
      <Paginator currentPage={currentPage} totalPages={data?.totalPages} />
    </div>
  );
};

export default Paper;
