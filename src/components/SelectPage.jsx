import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export function SelectPage({ startIndex, setStartIndex, setEndIndex, photos }) {
  const minPhotos = 0;
  const imagesPerPage = 20;
  const endIndex = startIndex + imagesPerPage;
  console.log(startIndex);
  console.log(endIndex);

  return (
    <Pagination>
      <PaginationPrevious
        className={
          startIndex <= minPhotos ? 'pointer-events-none opacity-50' : undefined
        }
        onClick={() => {
          setStartIndex(startIndex - imagesPerPage);
          setEndIndex(endIndex - imagesPerPage);
        }}
      />

      <PaginationNext
        className={
          endIndex > photos.length
            ? 'pointer-events-none opacity-50'
            : undefined
        }
        onClick={() => {
          setStartIndex(startIndex + imagesPerPage);
          setEndIndex(endIndex + imagesPerPage);
        }}
      />
    </Pagination>
  );
}
