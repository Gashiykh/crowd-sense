import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-foreground" />
            <span className="text-xl font-semibold text-foreground">CrowdWatch</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/public-transport" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Public Transport
            </Link>
            <Link 
              to="/public-places" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Public Places
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="sm">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
