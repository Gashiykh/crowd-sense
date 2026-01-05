import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-foreground" />
            <span className="font-semibold text-foreground">CrowdWatch</span>
          </div>

          <nav className="flex items-center gap-6">
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
            <Link 
              to="/auth" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 CrowdWatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
