import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CardImage({ photos, startIndex, endIndex }) {
  if (!photos) return null;
  return photos?.slice(startIndex, endIndex).map((photo) => {
    const thumbUrl = `https://picsum.photos/id/${photo.id}/150/150`;
    const imageUrl = `https://picsum.photos/id/${photo.id}/600/600`;
    return (
      <Card
        key={photo.id}
        className="flex-col rounded-2xl bg-white m-4 md:transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-gray-100"
      >
        <img
          className="w-full"
          src={thumbUrl}
          alt={photo.title}
          width={200}
          height={200}
          onClick={() => console.log('click')}
        />
        <CardHeader>
          <CardAction>{console.log(photo.id)}</CardAction>
          <CardTitle>{photo.title}</CardTitle>
          {/*           <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription> */}
        </CardHeader>
        {/* </Card></CardFooter> */}
      </Card>
    );
  });
}
