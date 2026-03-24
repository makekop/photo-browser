import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MAX_PAGES } from '@/App';

export function SelectPage({ page, setPage }) {
  return (
    <Pagination className="bg-white w-screen lg:fixed right-0 left-0 md:flex items-center px-8 py-4 text-4xl font-bold">
      <PaginationPrevious
        className={page <= 1 ? 'pointer-events-none opacity-50' : undefined}
        onClick={() => {
          setPage((page) => page - 1);
        }}
      />

      <PaginationNext
        className={
          page > MAX_PAGES ? 'pointer-events-none opacity-50' : undefined
        }
        onClick={() => {
          setPage((page) => page + 1);
        }}
      />
    </Pagination>
  );
}
