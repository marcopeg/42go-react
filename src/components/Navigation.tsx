import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="mb-8">
      <NavLink to="/" className="mr-4">
        {({ isActive }) => (
          <Button variant={isActive ? "outline" : "link"}>Home</Button>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => (
          <Button variant={isActive ? "outline" : "link"}>About</Button>
        )}
      </NavLink>
    </nav>
  );
}
