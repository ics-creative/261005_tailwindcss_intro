import type { GalleryItem } from '../data/galleryItems';
import { GalleryTitle } from './GalleryTitle';

type GalleryProps = {
  items: GalleryItem[];
};

export const Gallery = ({ items }: GalleryProps) => (
  <section className="w-full max-w-7xl px-5 sm:px-12">
    <div className="group/gallery relative isolate grid overflow-clip sm:grid-cols-[3fr_2fr] sm:gap-12">
      {/* デスクトップ表示での上下ボーダー */}
      <span className="absolute top-6 left-0 hidden w-full border-t border-border-subtle sm:block" />
      <span className="absolute bottom-6 left-0 hidden w-full border-b border-border-subtle sm:block" />

      <ol className="py-10">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="group cursor-pointer border-t border-border-subtle last:border-b sm:first:border-t-0 sm:last:border-b-0"
          >
            {/* 画像タイトル */}
            <GalleryTitle index={index} title={item.title} />
            {/* ホバー中の画像表示 */}
            <div className="pointer-events-none invisible absolute gallery-preview-position right-0 col-start-2 col-end-3 my-13 aspect-4/5 w-[clamp(12rem,25vw,23rem)] self-center overflow-hidden transition-[top,bottom] group-has-[li:hover]/gallery:visible max-sm:hidden">
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 size-full scale-105 object-cover opacity-0 mix-blend-plus-lighter transition group-hover:scale-100 group-hover:opacity-100"
              />
            </div>
          </li>
        ))}
      </ol>

      <div className="my-10 hidden border-l border-border-subtle sm:block" />
    </div>
  </section>
);
