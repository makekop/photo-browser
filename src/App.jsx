import PhotoCard from './components/PhotoCard';
import { useState } from 'react';
import { SelectPage } from './components/SelectPage';
import Header from './components/Header';
import useFetch from './hooks/fetchHook';
export const IMAGES_PER_PAGE = 20;
export const MAX_PAGES = 5000 / IMAGES_PER_PAGE;

export default function App() {
  const [page, setPage] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${IMAGES_PER_PAGE}`;
  const { data: photos, loading, error } = useFetch(url);

  return (
    <div>
      <Header />
      {loading && <p>Loading...</p>}
      {error && <p>Big Error!!</p>}
      <div className="grid gap-y-8 sm:grid-cols-5 lg:grid-cols-10 pt-20 pb-10">
        {photos.map((photo) => {
          return <PhotoCard photo={photo} key={photo.id} />;
        })}
      </div>
      <div className="lg:fixed bottom-0 right-0 left-0 md:flex items-center justify-center m-8">
        <SelectPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}
