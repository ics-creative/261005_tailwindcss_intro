import { ProjectGallery } from './components/ProjectGallery';
import { projects } from './data/projects';

const App = () => (
  <main className="grid min-h-dvh justify-items-center bg-white text-neutral-950">
    <ProjectGallery projects={projects} />
  </main>
);

export default App;
