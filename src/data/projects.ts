export type Project = {
  title: string;
  image: string;
  alt: string;
};

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const projects: Project[] = [
  {
    title: 'Negative Space',
    image: imagePath('preview-01.svg'),
    alt: '青いグラデーションと半透明の円を組み合わせた抽象作品',
  },
  {
    title: 'Quiet Geometry',
    image: imagePath('preview-02.svg'),
    alt: 'オレンジ色の背景に黒いアーチを配置した抽象作品',
  },
  {
    title: 'Light Fragments',
    image: imagePath('preview-03.svg'),
    alt: '緑の背景に光の筋と格子を重ねた抽象作品',
  },
  {
    title: 'Form Memory',
    image: imagePath('preview-04.svg'),
    alt: '紫色の空間に立体的な球体を浮かべた抽象作品',
  },
  {
    title: 'Soft Boundary',
    image: imagePath('preview-05.svg'),
    alt: 'モノクロームの面と線を大胆に配置した抽象作品',
  },
  {
    title: 'Color Resonance',
    image: imagePath('preview-06.svg'),
    alt: '赤い背景に青と黄色の円を重ねた抽象作品',
  },
];
