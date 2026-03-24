import { Card, CardTitle } from '@/components/ui/card';

export default function PhotoCard({ photo }) {
  if (!photo) return null;
  const thumbUrl = `https://picsum.photos/id/${photo.id}/150/150`;
  const imageUrl = `https://picsum.photos/id/${photo.id}/600/600`;
  return (
    <Card
      onClick={() => alert(imageUrl)}
      key={photo.id}
      className="flex-col rounded-2xl bg-white m-4 md:transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-gray-100"
    >
      <img className="w-full" src={thumbUrl} alt={photo.title} loading="lazy" />
      <CardTitle className="p-2 text-start">{photo.title}</CardTitle>
    </Card>
  );
}
