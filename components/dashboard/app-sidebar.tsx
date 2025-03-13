import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";
import { NavHeader } from "./navigation/nav-header";
import { NavMain } from "./navigation/nav-main";
import { NavUser } from "./navigation/nav-user";
import { useSession } from "next-auth/react";
import { FaBackward, FaForward, FaHome, FaUser, FaVideo } from "react-icons/fa";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: <FaHome />,
  },
  {
    title: "Upcoming",
    url: "/upcoming",
    icon: <FaForward />,
  },
  {
    title: "Previous",
    url: "/previous",
    icon: <FaBackward />,
  },
  {
    title: "Recordings",
    url: "/recordings",
    icon: <FaVideo />,
  },
  {
    title: "Personal Room",
    url: "/personal",
    icon: <FaUser />,
  },
];

export function AppSidebar() {
  const currentPage = usePathname();
  const { data: session } = useSession();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} currentPage={currentPage} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: session?.user?.name ?? "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
