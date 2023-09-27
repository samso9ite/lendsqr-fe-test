export interface componentType  {
    children: React.ReactNode
}

export interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
  }