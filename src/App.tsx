import { Gallery } from "./components/Gallery";
import { galleryItems } from "./data/galleryItems";

const App = () => (
  <main className="grid min-h-dvh place-items-center bg-canvas text-foreground">
    <Gallery items={galleryItems} />
  </main>
);

export default App;
