
import { useState, useEffect } from "react";
import { 
  Book, 
  Calendar, 
  Clock, 
  Menu, 
  Settings, 
  BarChart, 
  User,
  VideoIcon,
  PenTool
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
  isNew?: boolean;
};

const navItems: NavItem[] = [
  { name: "Dashboard", icon: Book, path: "/" },
  { name: "Grades", icon: BarChart, path: "/grades" },
  { name: "Courses", icon: Book, path: "/courses" },
  { name: "Schedule", icon: Calendar, path: "/schedule" },
  { name: "Study Timer", icon: Clock, path: "/study-timer" },
  { name: "Meetopia", icon: VideoIcon, path: "/meetopia", isNew: true },
  { name: "Mirofy", icon: PenTool, path: "/mirofy", isNew: true },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export function AcademicSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // If on mobile and sidebar is closed, just show the toggle button
  if (isMobile && !isOpen) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleSidebar}
        className="fixed left-4 top-4 z-50 hover:bg-academia-lavender/50 bg-academia-lavender/30"
      >
        <Menu className="h-5 w-5 text-academia-navy" />
      </Button>
    );
  }

  return (
    <div 
      className={cn(
        "fixed z-40 transition-all duration-300 ease-in-out",
        isMobile ? 
          "inset-0 bg-black/20" : 
          "h-screen left-0 top-0",
        isMobile && !isOpen ? "pointer-events-none opacity-0" : ""
      )}
      onClick={isMobile ? () => setIsOpen(false) : undefined}
    >
      <div 
        className={cn(
          "h-screen flex flex-col bg-academia-lavender transition-all duration-300 ease-in-out",
          isMobile ? 
            "w-64 max-w-[80%]" : 
            (collapsed ? "w-20" : "w-64"),
          isMobile && "shadow-xl"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-academia-lavender/30">
          {(!collapsed || isMobile) && (
            <h1 className="text-2xl font-playfair font-semibold text-academia-navy">
              Academia
            </h1>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="hover:bg-academia-lavender/50"
          >
            <Menu className="h-5 w-5 text-academia-navy" />
          </Button>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={cn(
                    "flex items-center p-3 rounded-md transition-all hover:bg-white/40 text-academia-navy font-medium relative",
                    window.location.pathname === item.path && "bg-white/60"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 flex-shrink-0", collapsed && !isMobile ? "mx-auto" : "mr-3")} />
                  {(!collapsed || isMobile) && <span>{item.name}</span>}
                  {item.isNew && (!collapsed || isMobile) && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-academia-mint rounded-full text-academia-navy">
                      New
                    </span>
                  )}
                  {item.isNew && collapsed && !isMobile && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-academia-mint rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-academia-lavender/30">
          <div className={cn(
            "flex items-center rounded-lg bg-white/30 p-3",
            collapsed && !isMobile ? "justify-center" : "justify-start"
          )}>
            <div className="w-8 h-8 rounded-full bg-academia-mint flex items-center justify-center text-academia-navy font-semibold">
              S
            </div>
            {(!collapsed || isMobile) && (
              <div className="ml-3">
                <p className="text-sm font-medium text-academia-navy">Sarah Johnson</p>
                <p className="text-xs text-academia-navy/70">Computer Science</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
