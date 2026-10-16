type GalleryPreviewProps = {
  src: string;
};

export const GalleryPreview = ({ src }: GalleryPreviewProps) => (
  <div className="pointer-events-none absolute gallery-preview-position right-12 h-[var(--gallery-preview-height)] w-[var(--gallery-preview-width)] transition-[top]">
    <img src={src} alt="" className="absolute inset-0 size-full object-cover transition" />
  </div>
);
