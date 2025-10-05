import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TrendingUp, Award, BookOpen, User, Settings, Swords } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { User as UserEntity, UserStats } from "@/entities/all";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "שיעורים",
    url: createPageUrl("Dashboard"),
    icon: BookOpen,
  },
  {
    title: "תרגול",
    url: createPageUrl("Practice"),
    icon: Swords,
  },
  {
    title: "הישגים", 
    url: createPageUrl("Achievements"),
    icon: Award,
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await UserEntity.me();
        setUser(u);
        const s = await UserStats.filter({user_email: u.email});
        if (s.length > 0) {
          setStats(s[0]);
        }
      } catch (e) {
        // Not logged in
      }
    };
    fetchUser();
  }, []);

  const getUserLevel = () => {
    const xp = stats?.total_xp || 0;
    return Math.floor(xp / 200) + 1;
  };


  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <Sidebar className="border-l border-gray-100">
          <SidebarHeader className="border-b border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">FinanceAcademy</h2>
                <p className="text-sm text-gray-500">לומדים פיננסים חכם</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                תפריט
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`rounded-xl transition-all duration-200 ${
                          location.pathname === item.url 
                            ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 shadow-sm border border-emerald-100' 
                            : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5 ml-3" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-100 p-4">
             {user ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">{user.full_name}</p>
                  <p className="text-xs text-gray-500 truncate">רמה {getUserLevel()} • {stats?.total_xp || 0} XP</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Settings className="w-4 h-4 text-gray-500" />
                </button>
              </div>
             ) : (
                <div className="text-center">
                    <Link to="/login"><Button>התחבר</Button></Link>
                </div>
             )}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-6 py-4 md:hidden sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-xl transition-colors duration-200" />
              <h1 className="text-xl font-bold text-gray-900">FinanceAcademy</h1>
            </div>
          </header>

          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
