type GalleryTitleProps = {
  index: number;
  title: string;
  onActivate: () => void;
};

export const GalleryTitle = ({
  index,
  title,
  onActivate,
}: GalleryTitleProps) => (
  <button
    type="button"
    onPointerEnter={onActivate}
    className="flex w-full cursor-pointer items-center gap-3 py-4 text-gallery-title text-muted transition-colors group-data-active:text-foreground group-data-active:gallery-anchor sm:gap-5 sm:py-3"
  >
    <span className="shrink-0 font-light tabular-nums">
      {String(index + 1).padStart(2, "0")}
    </span>
    <span className="flex-1 font-medium whitespace-nowrap">{title}</span>
  </button>
);
