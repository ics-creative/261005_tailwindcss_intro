type GalleryPreviewProps = {
  image: string;
};

export const GalleryPreview = ({ image }: GalleryPreviewProps) => (
  <div className="pointer-events-none invisible absolute gallery-preview-position right-0 col-start-2 col-end-3 my-13 aspect-4/5 w-[clamp(12rem,25vw,23rem)] self-center overflow-hidden transition-[top,bottom] group-has-[li:hover]/gallery:visible max-sm:hidden">
    <img
      src={image}
      alt=""
      className="absolute inset-0 size-full scale-105 object-cover opacity-0 mix-blend-plus-lighter transition group-hover:scale-100 group-hover:opacity-100"
    />
  </div>
);
