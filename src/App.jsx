import Hero from "./components/Hero";
import Info from "./components/Info";
import Facts from "./components/Facts";
import Limitations from "./components/Limitations";
function App() {
  return (
    <div className="site-wrapper">
      <Hero />
      <Info />
      <Facts />
      <Limitations />
    </div>
  );
}

export default App;
