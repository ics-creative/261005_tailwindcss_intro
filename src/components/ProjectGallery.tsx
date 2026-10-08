import { useLayoutEffect, useRef, useState } from 'react';
import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

type ProjectGalleryProps = {
  projects: Project[];
};

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
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
      preview.style.transform = `translate3d(0, ${targetY}px, 0)`;
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
      <div className="pt-5 sm:hidden">
        <ProjectPreview activeIndex={activeIndex} projects={projects} variant="mobile" />
      </div>

      <div className="grid sm:grid-cols-[3fr_2fr] sm:gap-12">
        <ol ref={titleListRef} className="flex flex-col justify-center py-10">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={project.title}
                className="relative border-t border-neutral-950/15 first:border-t-0"
              >
                {index === 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 left-0 hidden h-0 w-[calc(166.667%+3rem)] border-t border-neutral-950/15 sm:block"
                  />
                )}
                {index === projects.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 left-0 hidden h-0 w-[calc(166.667%+3rem)] border-b border-neutral-950/15 sm:block"
                  />
                )}
                <button
                  ref={(element) => {
                    titleRefs.current[index] = element;
                  }}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`grid w-full min-w-0 cursor-pointer grid-cols-[2.15em_minmax(0,1fr)] items-center gap-3 py-4 text-[clamp(1.25rem,4vw,3rem)] leading-none tracking-tight transition-colors duration-300 motion-reduce:transition-none sm:gap-5 sm:py-3 ${
                    isActive ? 'text-neutral-950' : 'text-neutral-400 hover:text-neutral-950'
                  }`}
                >
                  <span className="font-light tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 font-medium whitespace-nowrap">{project.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          ref={previewTrackRef}
          className="relative my-10 hidden border-l border-neutral-950/15 sm:block"
        >
          <div
            ref={movingPreviewRef}
            className="absolute top-0 right-0 max-w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          >
            <ProjectPreview activeIndex={activeIndex} projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};
