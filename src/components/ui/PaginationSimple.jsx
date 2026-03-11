import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export function PaginationSimple({
  startIndex,
  rowsPerPage,
  setStartIndex,
  setEndIndex,
}) {
  const endIndex = startIndex + rowsPerPage;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              startIndex === 0 ? 'pointer-events-none opacity-50' : undefined
            }
            onClick={() => {
              setStartIndex(startIndex - rowsPerPage);
              setEndIndex(endIndex - rowsPerPage);
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={
              endIndex === 100 ? 'pointer-events-none opacity-50' : undefined
            }
            onClick={() => {
              setStartIndex(startIndex + rowsPerPage);
              setEndIndex(endIndex + rowsPerPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
