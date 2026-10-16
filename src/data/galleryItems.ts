export type GalleryItem = {
  title: string;
  image: string;
};

const imagePath = (id: number) => `https://picsum.photos/id/${id}/800/1000`;

export const galleryItems: GalleryItem[] = [
  {
    title: 'A Dog at Rest',
    image: imagePath(237),
  },
  {
    title: 'City Skyline',
    image: imagePath(238),
  },
  {
    title: 'Dandelion Drift',
    image: imagePath(239),
  },
  {
    title: 'Coastal Light',
    image: imagePath(13),
  },
  {
    title: 'Ridge Trail',
    image: imagePath(241),
  },
  {
    title: 'Evening Tracks',
    image: imagePath(242),
  },
  {
    title: 'Misty Mountain Path',
    image: imagePath(243),
  },
];
