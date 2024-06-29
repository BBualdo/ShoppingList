const Paginator = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number | null | undefined;
}) => {
  return (
    totalPages && (
      <div className="flex items-center gap-4 justify-end w-full">
        <button>{"<"}</button>
        <div>
          {currentPage} / {totalPages}
        </div>
        <button>{">"}</button>
      </div>
    )
  );
};

export default Paginator;
