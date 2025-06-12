
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  Home, 
  TreePine, 
  MapPin, 
  Users, 
  Shield, 
  Database, 
  Settings,
  CheckCircle,
  Megaphone
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Campaigns", url: "/campaigns", icon: Megaphone },
  { title: "Category Hierarchy", url: "/categories", icon: TreePine },
  { title: "Geography", url: "/geography", icon: MapPin },
  { title: "Roles & Users", url: "/users", icon: Users },
  { title: "Attributes", url: "/attributes", icon: Database },
  { title: "Entities", url: "/entities", icon: Shield },
  { title: "Approvals", url: "/approvals", icon: CheckCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Maker-Checker</span>
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
