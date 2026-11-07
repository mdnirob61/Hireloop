"use client";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client"
import {
    LayoutDashboard,
    Search,
    FileText,
    Bookmark,
    UserRound,
    Settings,
    PlusCircle,
    BriefcaseBusiness,
    Users,
    Building2,
    ChartNoAxesCombined,
    ShieldCheck,
    ClipboardList,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MenuItem {
    id: string
    name: string
    url: string
    icon: LucideIcon
}

type UserRole = "seeker" | "recruiter" | "admin"

const menuItemsByRole: Record<UserRole, MenuItem[]> = {
    seeker: [
        {
            id: "overview",
            name: "Overview",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            id: "browse-jobs",
            name: "Browse Jobs",
            url: "/dashboard/jobs",
            icon: Search,
        },
        {
            id: "applications",
            name: "My Applications",
            url: "/dashboard/applications",
            icon: FileText,
        },
        {
            id: "saved-jobs",
            name: "Saved Jobs",
            url: "/dashboard/saved-jobs",
            icon: Bookmark,
        },
        {
            id: "profile",
            name: "My Profile",
            url: "/dashboard/profile",
            icon: UserRound,
        },
        {
            id: "settings",
            name: "Settings",
            url: "/dashboard/settings",
            icon: Settings,
        },
    ],

    recruiter: [
        {
            id: "overview",
            name: "Overview",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            id: "post-job",
            name: "Post a Job",
            url: "/dashboard/post-job",
            icon: PlusCircle,
        },
        {
            id: "my-jobs",
            name: "My Jobs",
            url: "/dashboard/my-jobs",
            icon: BriefcaseBusiness,
        },
        {
            id: "applicants",
            name: "Applicants",
            url: "/dashboard/applicants",
            icon: Users,
        },
        {
            id: "company",
            name: "Company Profile",
            url: "/dashboard/company",
            icon: Building2,
        },
        {
            id: "settings",
            name: "Settings",
            url: "/dashboard/settings",
            icon: Settings,
        },
    ],

    admin: [
        {
            id: "overview",
            name: "Overview",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            id: "users",
            name: "Manage Users",
            url: "/dashboard/users",
            icon: Users,
        },
        {
            id: "jobs",
            name: "Manage Jobs",
            url: "/dashboard/jobs",
            icon: BriefcaseBusiness,
        },
        {
            id: "companies",
            name: "Manage Companies",
            url: "/dashboard/companies",
            icon: Building2,
        },
        {
            id: "applications",
            name: "Applications",
            url: "/dashboard/applications",
            icon: ClipboardList,
        },
        {
            id: "analytics",
            name: "Analytics",
            url: "/dashboard/analytics",
            icon: ChartNoAxesCombined,
        },
        {
            id: "settings",
            name: "Settings",
            url: "/dashboard/settings",
            icon: ShieldCheck,
        },
    ],
}

export function DashboardSideBar() {
    const { data: session, isPending } = useSession()

    if (isPending) {
        return null
    }

    const userRole: UserRole =
        session?.user?.role === "admin"
            ? "admin"
            : session?.user?.role === "recruiter"
                ? "recruiter"
                : "seeker"

    const menuItems = menuItemsByRole[userRole]

    return (
        <Sidebar>
            <SidebarHeader />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <SidebarMenuItem key={item.id}>
                                <SidebarMenuButton
                                    render={<Link href={item.url} />}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}