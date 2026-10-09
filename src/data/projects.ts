export type Project = {
  title: string;
  image: string;
};

const imagePath = (id: number) => `https://picsum.photos/id/${id}/800/1000`;

export const projects: Project[] = [
  {
    title: 'Quiet Companion',
    image: imagePath(237),
  },
  {
    title: 'Open Horizon',
    image: imagePath(238),
  },
  {
    title: 'Soft Current',
    image: imagePath(239),
  },
  {
    title: 'Coastal Light',
    image: imagePath(13),
  },
  {
    title: 'Still Surface',
    image: imagePath(241),
  },
  {
    title: 'Wild Texture',
    image: imagePath(242),
  },
  {
    title: 'Morning Shade',
    image: imagePath(243),
  },
  {
    title: 'Faraway Motion',
    image: imagePath(244),
  },
  {
    title: 'Measured Silence',
    image: imagePath(249),
  },
  {
    title: 'Crimson Cliffs',
    image: imagePath(1016),
  },
];
