import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSideBar } from "../components/DashboardSideBar"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSideBar></DashboardSideBar>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}