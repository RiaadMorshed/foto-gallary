import "./App.css";
import ImageGrid from "./components/ImageGrid";
import images from "./data/images.ts";

function App() {
  return <ImageGrid images={images} />;
}

export default App;
