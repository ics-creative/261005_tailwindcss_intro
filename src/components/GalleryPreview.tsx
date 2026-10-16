import type { CSSProperties } from 'react';

type GalleryPreviewProps = {
  src: string;
  position: number;
};

export const GalleryPreview = ({ src, position }: GalleryPreviewProps) => (
  <div className="gallery-preview hidden sm:block">
    <div
      className="pointer-events-none absolute gallery-preview-position right-12 aspect-4/5 w-[clamp(12rem,25vw,23rem)] transition-[top,translate]"
      style={{ '--preview-position': `${position}%` } as CSSProperties}
    >
      <img src={src} alt="" className="absolute inset-0 size-full object-cover transition" />
    </div>
  </div>
);
