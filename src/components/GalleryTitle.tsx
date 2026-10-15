type GalleryTitleProps = {
  index: number;
  title: string;
};

export const GalleryTitle = ({ index, title }: GalleryTitleProps) => (
  <div className="flex w-full items-center gap-3 py-4 text-gallery-title text-muted transition-colors group-hover:gallery-anchor hover:text-foreground sm:gap-5 sm:py-3">
    <span className="shrink-0 font-light tabular-nums">{String(index + 1).padStart(2, '0')}</span>
    <h2 className="flex-1 text-center font-medium whitespace-nowrap">{title}</h2>
  </div>
);
