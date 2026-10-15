import type { GalleryItem } from '../data/galleryItems';
import { GalleryPreview } from './GalleryPreview';
import { GalleryTitle } from './GalleryTitle';

type GalleryProps = {
  items: GalleryItem[];
};

export const Gallery = ({ items }: GalleryProps) => (
  <section className="w-full max-w-7xl px-5 sm:px-12">
    <div className="group/gallery relative isolate overflow-clip">
      {/* デスクトップ表示での上下ボーダー */}
      <span className="absolute top-6 left-0 hidden w-full border-t border-border-subtle sm:block" />
      <span className="absolute bottom-6 left-0 hidden w-full border-b border-border-subtle sm:block" />

      <div className="sm:grid sm:grid-cols-[3fr_2fr]">
        <ol className="py-10">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="group cursor-pointer border-t border-border-subtle last:border-b sm:first:border-t-0 sm:last:border-b-0"
            >
              {/* 画像タイトル */}
              <GalleryTitle index={index} title={item.title} />
            </li>
          ))}
        </ol>

        <GalleryPreview items={items} />
      </div>
    </div>
  </section>
);
