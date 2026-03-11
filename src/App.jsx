import { CardImage } from '@/components/ui/CardImage';
import { useState, useEffect } from 'react';
import { PaginationSimple } from './components/ui/PaginationSimple';
import Header from './components/ui/Header';

export default function App() {
  const rowsPerPage = 100;
  const [photos, setPhotos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);

  async function fetchPlaceholders() {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${rowsPerPage}`,
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error('Error message: ', err);
    }
  }

  useEffect(() => {
    fetchPlaceholders();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid gap-y-8 sm:grid-cols-5 lg:grid-cols-10">
        <CardImage
          photos={photos}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <PaginationSimple
          startIndex={startIndex}
          endIndex={endIndex}
          rowsPerPage={20}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
        />
      </div>
    </div>
  );
}
