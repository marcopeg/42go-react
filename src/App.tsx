import { Routes, Route } from "react-router-dom"; // Removed Link
import { ThemeToggle } from "@/components/ThemeToggle";
import { HomePage } from "@/components/HomePage";
import { AboutPage } from "@/components/AboutPage";
import { Navigation } from "@/components/Navigation"; // Import Navigation

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background text-foreground">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Use the Navigation component */}
      <Navigation />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
