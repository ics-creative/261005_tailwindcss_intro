import { useLayoutEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'
import { ProjectPreview } from './ProjectPreview'

type ProjectGalleryProps = {
  projects: Project[]
}

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const previewTrackRef = useRef<HTMLDivElement>(null)
  const movingPreviewRef = useRef<HTMLDivElement>(null)
  const titleRefs = useRef<Array<HTMLButtonElement | null>>([])

  useLayoutEffect(() => {
    const track = previewTrackRef.current
    const preview = movingPreviewRef.current
    const title = titleRefs.current[activeIndex]

    if (!track || !preview || !title) {
      return
    }

    const alignPreviewWithTitle = () => {
      const trackRect = track.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()
      const maxY = Math.max(0, trackRect.height - preview.offsetHeight)
      const titleCenter = titleRect.top + titleRect.height / 2 - trackRect.top
      const targetY = Math.min(Math.max(titleCenter - preview.offsetHeight / 2, 0), maxY)
      preview.style.transform = `translate3d(0, ${targetY}px, 0)`
    }

    const resizeObserver = new ResizeObserver(alignPreviewWithTitle)
    resizeObserver.observe(track)
    resizeObserver.observe(preview)
    resizeObserver.observe(title)
    alignPreviewWithTitle()

    return () => {
      resizeObserver.disconnect()
    }
  }, [activeIndex])

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-12">
      <div className="pt-5 lg:hidden">
        <ProjectPreview activeIndex={activeIndex} projects={projects} variant="mobile" />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-12">
        <ol className="flex flex-col justify-center py-10 lg:h-screen lg:py-0">
          {projects.map((project, index) => {
            const isActive = index === activeIndex

            return (
              <li key={project.title} className="border-t border-neutral-950/15 last:border-b">
                <button
                  ref={(element) => {
                    titleRefs.current[index] = element
                  }}
                  type="button"
                  aria-pressed={isActive}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`grid w-full cursor-pointer grid-cols-[2.15em_minmax(0,1fr)] items-center gap-3 py-4 text-left text-3xl leading-none tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 motion-reduce:transition-none lg:gap-5 lg:py-3 lg:text-5xl ${
                    isActive ? 'text-neutral-950' : 'text-neutral-400 hover:text-neutral-950'
                  }`}
                >
                  <span className="font-light tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium whitespace-nowrap">{project.title}</span>
                </button>
              </li>
            )
          })}
        </ol>

        <div ref={previewTrackRef} className="relative hidden h-screen lg:block">
          <div
            ref={movingPreviewRef}
            className="absolute top-0 right-0 transition-transform duration-700 ease-out motion-reduce:transition-none"
          >
            <ProjectPreview activeIndex={activeIndex} projects={projects} />
          </div>
        </div>
      </div>
    </section>
  )
}
