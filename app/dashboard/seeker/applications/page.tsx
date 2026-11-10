"use client";
import {
    BriefcaseBusiness,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Code,
    Download,
    FileText,
    FlaskConical,
    Monitor,
    Palette,
    ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const applications = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "Stark Industries",
        applied: "2 hours ago",
        type: "Full-time • Remote",
        status: "Applied",
        icon: Code,
        color: "bg-gray-700",
        archived: false,
    },
    {
        id: 2,
        title: "Product Designer",
        company: "Cyberdyne Systems",
        applied: "1 day ago",
        type: "Contract • Hybrid",
        status: "Review",
        icon: Palette,
        color: "bg-gray-700",
        archived: false,
    },
    {
        id: 3,
        title: "Lead Data Scientist",
        company: "Wayne Enterprises",
        applied: "4 days ago",
        type: "Full-time • On-site",
        status: "Shortlisted",
        icon: FlaskConical,
        color: "bg-gray-700",
        archived: false,
    },
    {
        id: 4,
        title: "Cloud Architect",
        company: "Oscorp Tech",
        applied: "1 week ago",
        type: "Full-time • Remote",
        status: "Rejected",
        icon: Monitor,
        color: "bg-red-900",
        archived: true,
    },
    {
        id: 5,
        title: "AI Research Engineer",
        company: "Hooli Corp",
        applied: "2 weeks ago",
        type: "Full-time • Hybrid",
        status: "Offered",
        icon: ShieldCheck,
        color: "bg-gray-700",
        archived: false,
    },
];

const stats = [
    {
        title: "Total Applied",
        value: "24",
        icon: BriefcaseBusiness,
        color: "text-white",
    },
    {
        title: "Shortlisted",
        value: "8",
        icon: ShieldCheck,
        color: "text-white",
    },
    {
        title: "Interviews",
        value: "3",
        icon: CalendarDays,
        color: "text-amber-400",
    },
    {
        title: "Success Rate",
        value: "12%",
        icon: FileText,
        color: "text-green-500",
    },
];

const MyApplicationsPage = () => {
    const [activeTab, setActiveTab] = useState("Active");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredApplications =
        activeTab === "Active"
            ? applications.filter((application) => !application.archived)
            : applications.filter((application) => application.archived);

    return (
        <main className="min-w-5xl min-h-screen bg-[#101012] p-4 text-white sm:p-6">

            {/* Page Heading */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-xl font-semibold">My Applications</h1>
                    <p className="mt-1 text-xs text-gray-500">
                        Track your job applications and interview progress in real-time.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex rounded-lg border border-white/[0.07] bg-[#19191d] p-1">
                        {["Active", "Archived"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setCurrentPage(1);
                                }}
                                className={`rounded-md px-4 py-2 text-xs transition ${activeTab === tab
                                        ? "bg-[#29292f] text-white"
                                        : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-xs font-medium text-black transition hover:bg-gray-200">
                        <Download size={14} />
                        <span className="hidden sm:inline">Export PDF</span>
                    </button>
                </div>
            </div>

            {/* Statistics */}
            <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="rounded-xl border border-white/[0.06] bg-[#17171b] p-4"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <p className="text-xs text-gray-500">
                                    {stat.title}
                                </p>
                                <Icon size={15} className="text-gray-600" />
                            </div>

                            <h2 className={`text-2xl font-semibold ${stat.color}`}>
                                {stat.value}
                            </h2>
                        </div>
                    );
                })}
            </div>

            {/* Applications Table */}
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#17171b]">

                {/* Table Header */}
                <div className="hidden grid-cols-[2fr_1.5fr_1fr_1fr_0.5fr] gap-4 border-b border-white/[0.06] px-5 py-4 text-[11px] font-medium text-gray-500 md:grid">
                    <span>Job Title</span>
                    <span>Company</span>
                    <span>Applied</span>
                    <span>Status</span>
                    <span className="text-right">Action</span>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-white/[0.06]">
                    {filteredApplications.length > 0 ? (
                        filteredApplications.map((application) => {
                            const Icon = application.icon;

                            return (
                                <div
                                    key={application.id}
                                    className="grid grid-cols-1 gap-3 px-5 py-4 transition hover:bg-white/[0.02] md:grid-cols-[2fr_1.5fr_1fr_1fr_0.5fr] md:items-center md:gap-4"
                                >
                                    {/* Job */}
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${application.color}`}
                                        >
                                            <Icon size={15} className="text-gray-200" />
                                        </div>

                                        <div>
                                            <h3 className="text-xs font-medium text-gray-200">
                                                {application.title}
                                            </h3>
                                            <p className="mt-1 text-[10px] text-gray-500">
                                                {application.type}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <p className="text-xs text-gray-400">
                                        <span className="mr-2 text-gray-600 md:hidden">
                                            Company:
                                        </span>
                                        {application.company}
                                    </p>

                                    {/* Applied Date */}
                                    <p className="text-xs text-gray-500">
                                        <span className="mr-2 text-gray-600 md:hidden">
                                            Applied:
                                        </span>
                                        {application.applied}
                                    </p>

                                    {/* Status */}
                                    <div>
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${application.status === "Applied"
                                                    ? "bg-gray-700/50 text-gray-300"
                                                    : application.status === "Review"
                                                        ? "bg-amber-500/15 text-amber-400"
                                                        : application.status === "Shortlisted"
                                                            ? "bg-blue-500/15 text-blue-400"
                                                            : application.status === "Rejected"
                                                                ? "bg-red-500/15 text-red-400"
                                                                : "bg-green-500/15 text-green-400"
                                                }`}
                                        >
                                            {application.status}
                                        </span>
                                    </div>

                                    {/* Action */}
                                    <div className="text-left md:text-right">
                                        <button className="text-xs text-gray-400 transition hover:text-indigo-400">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="py-12 text-center text-sm text-gray-500">
                            No {activeTab.toLowerCase()} applications found.
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex flex-col gap-4 border-t border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-gray-500">
                        Showing 1-{filteredApplications.length} of{" "}
                        {filteredApplications.length} applications
                    </p>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] text-gray-400 transition hover:bg-white/10 disabled:opacity-30"
                        >
                            <ChevronLeft size={14} />
                        </button>

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`h-7 w-7 rounded-md text-xs transition ${currentPage === page
                                        ? "bg-white text-black"
                                        : "border border-white/[0.07] text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] text-gray-400 transition hover:bg-white/10"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyApplicationsPage;