import { ProjectGallery } from './components/ProjectGallery';
import { projects } from './data/projects';

const App = () => (
  <main className="grid min-h-dvh place-items-center bg-canvas text-foreground">
    <ProjectGallery projects={projects} />
  </main>
);

export default App;
