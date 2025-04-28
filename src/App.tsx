import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import the toggle

function App() {
  return (
    // Add dark mode background and text colors
    <div className="flex flex-col items-center justify-center min-h-svh bg-background text-foreground">
      {/* Position the toggle button */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      {/* Example: Button might already handle dark mode via ShadCN variables */}
      <Button>Click me</Button>
    </div>
  );
}

export default App;
