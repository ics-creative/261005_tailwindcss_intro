import type { GalleryItem } from '../data/galleryItems';

type GalleryPreviewProps = {
  items: GalleryItem[];
};

export const GalleryPreview = ({ items }: GalleryPreviewProps) => (
  <div className="my-10 hidden gallery-preview border-l border-border-subtle sm:block">
    <div className="pointer-events-none invisible absolute gallery-preview-position right-0 my-13 aspect-4/5 w-[clamp(12rem,25vw,23rem)] self-center overflow-hidden transition-[top,bottom] group-has-[li:hover]/gallery:visible">
      {items.map((item) => (
        <img
          key={item.title}
          src={item.image}
          alt=""
          className="absolute inset-0 size-full scale-105 object-cover opacity-0 mix-blend-plus-lighter transition"
        />
      ))}
    </div>
  </div>
);
