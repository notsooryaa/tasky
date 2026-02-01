import Home from "./pages/Home";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-20 flex-1 transition-all duration-300">
        <Home />
      </main>
    </div>
  );
}

export default App;
