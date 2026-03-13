import PhotoCard from './components/PhotoCard';
import { useState, useEffect } from 'react';
import { SelectPage } from './components/SelectPage';
import Header from './components/Header';

export default function App() {
  const maxPhotos = 5000;
  const [photos, setPhotos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);

  async function fetchPhotos() {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${maxPhotos}`,
      );
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error('Error message: ', err);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid gap-y-8 sm:grid-cols-5 lg:grid-cols-10 pt-20 pb-10">
        <PhotoCard
          photos={photos}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
      <div className="lg:fixed bottom-0 right-0 left-0 md:flex items-center justify-center m-8">
        <SelectPage
          startIndex={startIndex}
          endIndex={endIndex}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
          photos={photos}
        />
      </div>
    </div>
  );
}
