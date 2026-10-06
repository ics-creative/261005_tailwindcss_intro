import { ProjectGallery } from './components/ProjectGallery';
import { projects } from './data/projects';

const App = () => (
  <main className="grid min-h-screen justify-items-center bg-[#f1f0ec] text-neutral-950">
    <ProjectGallery projects={projects} />
  </main>
);

export default App;
