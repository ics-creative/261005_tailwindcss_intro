import type { GalleryItem } from '../data/galleryItems';

type GalleryPreviewProps = {
  activeIndex: number;
  items: GalleryItem[];
  variant?: 'desktop' | 'mobile';
};

export const GalleryPreview = ({
  activeIndex,
  items,
  variant = 'desktop',
}: GalleryPreviewProps) => (
  <div
    className={
      variant === 'mobile'
        ? 'relative isolate aspect-16/11 w-full overflow-hidden'
        : 'relative isolate aspect-4/5 w-[clamp(12rem,25vw,23rem)] max-w-full overflow-hidden'
    }
  >
    {items.map((item, index) => {
      const isActive = index === activeIndex;

      return (
        <img
          key={item.image}
          src={item.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 size-full object-cover mix-blend-plus-lighter transition motion-reduce:transition-none ${
            isActive ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      );
    })}
  </div>
);
