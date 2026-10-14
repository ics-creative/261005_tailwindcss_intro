import type { GalleryItem } from "../data/galleryItems";

type GalleryPreviewProps = {
  item: GalleryItem;
};

export const GalleryPreview = ({ item }: GalleryPreviewProps) => (
  <div className="absolute inset-y-[anchor(center)] right-0 col-start-2 col-end-3 row-start-1 row-end-2 my-13 hidden max-w-full self-center transition-[top,bottom] [position-anchor:--gallery-active] motion-reduce:transition-none sm:block">
    <div className="relative aspect-4/5 w-[clamp(12rem,25vw,23rem)] max-w-full overflow-hidden">
      <img
        src={item.image}
        alt=""
        className="absolute inset-0 size-full scale-105 object-cover opacity-0 mix-blend-plus-lighter transition motion-reduce:transition-none gallery-active:scale-100 gallery-active:opacity-100"
      />
    </div>
  </div>
);
