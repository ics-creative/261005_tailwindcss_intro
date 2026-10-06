export type Project = {
  title: string;
  image: string;
  alt: string;
};

const imagePath = (id: number) => `https://picsum.photos/id/${id}/800/1000`;

export const projects: Project[] = [
  {
    title: 'Quiet Companion',
    image: imagePath(237),
    alt: 'Lorem Picsumの写真（画像ID 237）',
  },
  {
    title: 'Open Horizon',
    image: imagePath(238),
    alt: 'Lorem Picsumの写真（画像ID 238）',
  },
  {
    title: 'Soft Current',
    image: imagePath(239),
    alt: 'Lorem Picsumの写真（画像ID 239）',
  },
  {
    title: 'Passing Light',
    image: imagePath(240),
    alt: 'Lorem Picsumの写真（画像ID 240）',
  },
  {
    title: 'Still Surface',
    image: imagePath(241),
    alt: 'Lorem Picsumの写真（画像ID 241）',
  },
  {
    title: 'Wild Texture',
    image: imagePath(242),
    alt: 'Lorem Picsumの写真（画像ID 242）',
  },
  {
    title: 'Morning Shade',
    image: imagePath(243),
    alt: 'Lorem Picsumの写真（画像ID 243）',
  },
  {
    title: 'Faraway Motion',
    image: imagePath(244),
    alt: 'Lorem Picsumの写真（画像ID 244）',
  },
  {
    title: 'Measured Silence',
    image: imagePath(249),
    alt: 'Lorem Picsumの写真（画像ID 249）',
  },
  {
    title: 'Distant Signal',
    image: imagePath(250),
    alt: 'Lorem Picsumの写真（画像ID 250）',
  },
];
