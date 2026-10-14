import { useLayoutEffect, useRef, useState } from 'react';
import type { GalleryItem } from '../data/galleryItems';
import { GalleryPreview } from './GalleryPreview';

type GalleryProps = {
  items: GalleryItem[];
};

export const Gallery = ({ items }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const previewTrackRef = useRef<HTMLDivElement>(null);
  const movingPreviewRef = useRef<HTMLDivElement>(null);
  const titleListRef = useRef<HTMLOListElement>(null);
  const titleRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useLayoutEffect(() => {
    const track = previewTrackRef.current;
    const preview = movingPreviewRef.current;
    const titleList = titleListRef.current;
    const firstTitle = titleList?.firstElementChild;
    const lastTitle = titleList?.lastElementChild;
    const title = titleRefs.current[activeIndex];

    if (!track || !preview || !titleList || !firstTitle || !lastTitle || !title) {
      return;
    }

    const alignPreviewWithTitle = () => {
      const trackRect = track.getBoundingClientRect();
      const firstTitleRect = firstTitle.getBoundingClientRect();
      const lastTitleRect = lastTitle.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const titleStyles = getComputedStyle(title);
      const boundaryInset = Number.parseFloat(titleStyles.paddingTop);
      const minY = firstTitleRect.top - trackRect.top + boundaryInset;
      const maxY = Math.max(
        minY,
        lastTitleRect.bottom - trackRect.top - preview.offsetHeight - boundaryInset,
      );
      const titleCenter = titleRect.top + titleRect.height / 2 - trackRect.top;
      const targetY = Math.min(Math.max(titleCenter - preview.offsetHeight / 2, minY), maxY);
      preview.style.transform = `translate(0, ${targetY}px)`;
    };

    const resizeObserver = new ResizeObserver(alignPreviewWithTitle);
    resizeObserver.observe(track);
    resizeObserver.observe(preview);
    resizeObserver.observe(titleList);
    resizeObserver.observe(firstTitle);
    resizeObserver.observe(lastTitle);
    resizeObserver.observe(title);
    alignPreviewWithTitle();

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  return (
    <section className="w-full max-w-7xl px-5 sm:px-12">
      <div className="fixed inset-0 z-0 flex items-center justify-center px-5 sm:hidden">
        <GalleryPreview activeIndex={activeIndex} items={items} variant="mobile" />
      </div>

      <div className="relative z-10 grid sm:grid-cols-[3fr_2fr] sm:gap-12">
        <span
          className="absolute top-6 left-0 hidden h-0 w-full border-t border-border-subtle sm:block"
        />
        <span
          className="absolute bottom-6 left-0 hidden h-0 w-full border-b border-border-subtle sm:block"
        />
        <ol ref={titleListRef} className="flex flex-col justify-center py-10">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={item.title}
                className="border-t border-border-subtle last:border-b sm:first:border-t-0 sm:last:border-b-0"
              >
                <button
                  ref={(element) => {
                    titleRefs.current[index] = element;
                  }}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full min-w-0 cursor-pointer items-center gap-3 py-4 text-gallery-title transition-colors sm:gap-5 sm:py-3 ${
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="shrink-0 font-light tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1 font-medium whitespace-nowrap">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          ref={previewTrackRef}
          className="relative my-10 hidden border-l border-border-subtle sm:block"
        >
          <div
            ref={movingPreviewRef}
            className="absolute top-0 right-0 max-w-full transition-transform motion-reduce:transition-none"
          >
            <GalleryPreview activeIndex={activeIndex} items={items} variant="desktop" />
          </div>
        </div>
      </div>
    </section>
  );
};
