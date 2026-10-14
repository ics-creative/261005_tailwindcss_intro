import type { GalleryItem } from '../data/galleryItems';
import { GalleryPreview } from './GalleryPreview';

type GalleryProps = {
  items: GalleryItem[];
};

export const Gallery = ({ items }: GalleryProps) => (
  <section className="w-full max-w-7xl px-5 sm:px-12">
    <div className="relative isolate grid [anchor-scope:--gallery-active] sm:grid-cols-[3fr_2fr] sm:gap-12">
      <span className="absolute top-6 left-0 hidden w-full border-t border-border-subtle sm:block" />
      <span className="absolute bottom-6 left-0 hidden w-full border-b border-border-subtle sm:block" />
      <ol className="gallery-list py-10">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="border-t border-border-subtle last:border-b sm:first:border-t-0 sm:last:border-b-0"
          >
            <button
              type="button"
              className="gallery-title flex w-full cursor-pointer items-center gap-3 py-4 text-gallery-title text-muted transition-colors sm:gap-5 sm:py-3 gallery-active:text-foreground gallery-active:[anchor-name:--gallery-active]"
            >
              <span className="shrink-0 font-light tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1 font-medium whitespace-nowrap">{item.title}</span>
            </button>
            <GalleryPreview item={item} />
          </li>
        ))}
      </ol>

      <div className="my-10 hidden border-l border-border-subtle sm:block" />
    </div>
  </section>
);
