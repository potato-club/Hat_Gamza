export interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void; // 함수 타입
}
