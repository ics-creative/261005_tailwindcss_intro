import type { Project } from '../data/projects';

type ProjectPreviewProps = {
  activeIndex: number;
  projects: Project[];
  variant?: 'desktop' | 'mobile';
};

export const ProjectPreview = ({
  activeIndex,
  projects,
  variant = 'desktop',
}: ProjectPreviewProps) => (
  <div
    className={
      variant === 'mobile'
        ? 'relative aspect-[16/11] w-full overflow-hidden'
        : 'relative aspect-[4/5] w-[clamp(16rem,25vw,23rem)] overflow-hidden'
    }
  >
    {projects.map((project, index) => {
      const isActive = index === activeIndex;

      return (
        <img
          key={project.image}
          src={project.image}
          alt={isActive ? project.alt : ''}
          aria-hidden={!isActive}
          className={`absolute inset-0 size-full object-cover transition duration-500 ease-out motion-reduce:transition-none ${
            isActive ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      );
    })}
  </div>
);
