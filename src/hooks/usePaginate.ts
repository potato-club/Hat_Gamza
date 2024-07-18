import { useEffect, useState } from "react";
import { PostUser } from "../components/Post/PostList";

interface PagingContent {
  currentPage: number;
  totalPages: number;
  jumpToPage: (page: number) => void;
  currentData: PostUser[];
  viewPageNumber: number[];
}

const limitPageNumber = 5;

function usePagination(data: any[], postPerPage: number): PagingContent {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewPageNumber, setViewPageNumber] = useState<number[]>([]);
  const totalPages = Math.ceil(data.length / postPerPage);

  const currentData = data.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  );

  const jumpToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
    console.log(data);
  };

  useEffect(() => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + limitPageNumber - 1, totalPages);

    const newViewPageNumber = [];
    for (let i = startPage; i <= endPage; i++) {
      newViewPageNumber.push(i);
    }

    setViewPageNumber(newViewPageNumber);
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    jumpToPage,
    currentData,
    viewPageNumber,
  };
}

export default usePagination;
