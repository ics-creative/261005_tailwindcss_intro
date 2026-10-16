type GalleryTitleProps = {
  index: number;
  title: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export const GalleryTitle = ({
  index,
  title,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: GalleryTitleProps) => (
  <li
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="cursor-pointer border-t border-border-subtle first:border-t-0 last:border-b-0"
  >
    <div
      className={`flex w-full items-center gap-y-3 py-4 text-gallery-title text-muted transition-colors hover:text-foreground ${isActive ? 'gallery-anchor' : ''}`}
    >
      <span className="font-light tabular-nums">{String(index + 1).padStart(2, '0')}</span>
      <h2 className="flex-1 text-center font-medium whitespace-nowrap">{title}</h2>
    </div>
  </li>
);
