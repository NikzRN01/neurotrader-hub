
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Globe, 
  Lightbulb, 
  GraduationCap, 
  User,
  Search,
  BellRing,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/portfolio", label: "Portfolio", icon: BarChart3 },
    { path: "/markets", label: "Markets", icon: Globe },
    { path: "/insights", label: "Insights", icon: Lightbulb },
    { path: "/learn", label: "Learn", icon: GraduationCap },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="glass-panel sticky top-0 z-50 w-full px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="NeuroTradeX Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold tracking-tight text-gradient">
              NeuroTradeX
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Search and User Actions */}
        <div className="flex items-center space-x-4">
          <div className={`relative ${isSearchOpen ? "w-64" : "w-10"} transition-all duration-300`}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground ${
                isSearchOpen ? "z-10" : ""
              }`}
            >
              <Search className="h-4 w-4" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`input-search ${
                isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </div>

          <button className="relative">
            <BellRing className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-destructive text-[8px] font-medium text-white">
              3
            </span>
          </button>

          <div className="relative hidden md:block">
            <button className="h-9 w-9 overflow-hidden rounded-full border-2 border-primary/40 transition-all hover:border-primary">
              <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 to-blue-800/40"></div>
              <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-primary">
                SJ
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-2 glass-panel rounded-lg animate-fade-in">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item mx-2 my-1 ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
