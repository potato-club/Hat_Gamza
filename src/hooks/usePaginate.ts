import { useState, useEffect } from "react";

export interface PagingContent {
  totalPage: number;
  page: number;
  onChangePage: (page: number) => void;
  prevPage: number;
  nextPage: number;
}

// 보여질 페이지 숫자 최대 5개까지
const limitPage = 5;

export function usePaginate({ totalPage, page, onChangePage }: PagingContent) {
  const [currentPage, setCurrentPage] = useState(page);
  const [pageNumber, setPageNumber] = useState<number[]>([]);

  useEffect(() => {
    //page값에 따라 현재 페이지 업데이트
    setCurrentPage(page);
    //시작페이지 번호 계산 현재 페이지 기준으로 5개 까지 표시하게
    const startPage = Math.min(currentPage - 1, totalPage - limitPage + 1) + 1;
    //끝페이지 번호 계산 시작페이지 부터 전체페이지 이상으로 표시안되게 계산
    const endPage = Math.min(startPage + limitPage - 1, totalPage);
    //시작 부터 끝 번호까지 페이지수를 담는 배열
    const viewNumber = [];
    for (let i = startPage; i <= endPage; i++) {
      viewNumber.push(i);
    }
    //viewNumber값 업데이트에따른 setPageNumber 업데이트
    setPageNumber(viewNumber);
  }, [page, totalPage]);

  const prevPage = () => {
    //전의 페이지로 이동 로직 전으로 가려는 페이지(현재 페이지 -1 값) , 최소 1페이지미만으로는 x 중 최대값
    onChangePage(Math.max(currentPage - 1, 1));
  };

  const nextPage = () => {
    //다음 페이지로 이동 로직 다음으로 가려는 페이지(현재 페이지값 + 1) , 최대 범위 전체 페이지중 최솟값
    onChangePage(Math.min(currentPage + 1, totalPage));
  };

  return {
    totalPage,
    page,
    currentPage,
    pageNumber,
    prevPage,
    nextPage,
    onChangePage,
  };
}
