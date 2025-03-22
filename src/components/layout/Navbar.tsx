
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Globe, 
  Lightbulb,
  User,
  BellRing,
  Menu,
  X,
  MessageSquare,
  LogOut
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { insightRecommendations } from "@/utils/mockData";
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const notificationsDropdownRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { ThemeToggle } = useTheme();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/portfolio", label: "Portfolio", icon: BarChart3 },
    { path: "/markets", label: "Markets", icon: Globe },
    { path: "/insights", label: "Insights", icon: Lightbulb },
    { path: "/ai-chat", label: "AI Chat", icon: MessageSquare },
    { path: "/profile", label: "Profile", icon: User },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
      if (notificationsDropdownRef.current && !notificationsDropdownRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account"
    });
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  const handleNotificationClick = (id: number) => {
    setIsNotificationsOpen(false);
    navigate(`/ai-recommendation/${id}`);
  };

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

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Notifications */}
          <div className="relative" ref={notificationsDropdownRef}>
            <button 
              className="relative"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <BellRing className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-destructive text-[8px] font-medium text-white">
                {insightRecommendations.length}
              </span>
            </button>
            
            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 glass-panel rounded-lg animate-fade-in p-2 z-50">
                <h3 className="text-sm font-medium px-2 py-1 border-b border-border">
                  AI Recommendations
                </h3>
                <div className="max-h-80 overflow-y-auto">
                  {insightRecommendations.map((rec) => (
                    <button
                      key={rec.id}
                      className="w-full text-left p-2 hover:bg-secondary/40 rounded-md flex items-start gap-2 my-1"
                      onClick={() => handleNotificationClick(rec.id)}
                    >
                      <span className={`h-2 w-2 rounded-full mt-1.5 flex-shrink-0 ${
                        rec.impact === 'High' ? 'bg-red-400' : 
                        rec.impact === 'Medium' ? 'bg-amber-400' : 
                        'bg-blue-400'
                      }`}></span>
                      <div>
                        <p className="text-xs font-medium">{rec.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{rec.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileDropdownRef}>
            <button 
              className="h-9 w-9 overflow-hidden rounded-full transition-all hover:opacity-80"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 to-blue-800/40"></div>
              <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-primary">
                SJ
              </span>
            </button>
            
            {/* Profile Dropdown */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-panel rounded-lg animate-fade-in z-50">
                <button
                  className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-secondary/40 rounded-md text-sm"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </button>
              </div>
            )}
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
