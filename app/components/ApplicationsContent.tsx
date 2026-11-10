"use client";

import {
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface Application {
    _id: string;
    jobId: string;
    userId: string;
    email: string;
    companyName: string;
    jobTitle: string;
    applied: string;
    jobType: string;
    workplace: string;
    status: "Applied" | "Review" | "Shortlisted" | "Rejected" | "Offered";
    archived: boolean;
}

const ApplicationsContent = ({
    applications,
}: {
    applications: Application[];
}) => {
    const [activeTab, setActiveTab] = useState("Active");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredApplications = applications
    // .filter((application) =>
    //     activeTab === "Active"
    //         ? !application.archived
    //         : application.archived
    // );

    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

    const currentApplications = filteredApplications.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Statistics
    const totalApplied = applications.length;

    const shortlisted = applications.filter(
        (app) => app.status === "Shortlisted"
    ).length;

    const offered = applications.filter(
        (app) => app.status === "Offered"
    ).length;

    const successRate = totalApplied
        ? Math.round((offered / totalApplied) * 100)
        : 0;

    const stats = [
        { title: "Total Applied", value: totalApplied },
        { title: "Shortlisted", value: shortlisted },
        { title: "Interviews", value: 0 },
        { title: "Success Rate", value: `${successRate}%` },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Applied":
                return "bg-gray-700 text-gray-300";
            case "Review":
                return "bg-amber-500/15 text-amber-400";
            case "Shortlisted":
                return "bg-blue-500/15 text-blue-400";
            case "Rejected":
                return "bg-red-500/15 text-red-400";
            case "Offered":
                return "bg-green-500/15 text-green-400";
            default:
                return "bg-gray-700 text-gray-300";
        }
    };

    return (
        <main className="min-w-5xl bg-[#101012] p-4 text-white sm:p-6">

            {/* Heading */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-semibold">My Applications</h1>
                    <p className="mt-1 text-xs text-gray-500">
                        Track your job applications.
                    </p>
                </div>

                <div className="flex rounded-lg border border-white/[0.07] bg-[#19191d] p-1">
                    {["Active", "Archived"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setCurrentPage(1);
                            }}
                            className={`rounded-md px-4 py-2 text-xs ${activeTab === tab
                                    ? "bg-[#29292f] text-white"
                                    : "text-gray-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Statistics */}
            <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-xl border border-white/[0.06] bg-[#17171b] p-4"
                    >
                        <p className="text-xs text-gray-500">{stat.title}</p>
                        <h2 className="mt-3 text-2xl font-semibold">
                            {stat.value}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Applications */}
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#17171b]">

                {/* Table Header */}
                <div className="hidden grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 border-b border-white/[0.06] px-5 py-4 text-xs text-gray-500 md:grid">
                    <span>Job Title</span>
                    <span>Company</span>
                    <span>Applied</span>
                    <span>Status</span>
                </div>

                {/* Application List */}
                {currentApplications.length > 0 ? (
                    currentApplications.map((app) => (
                        <div
                            key={app._id}
                            className="grid grid-cols-1 gap-3 border-b border-white/[0.06] px-5 py-4 md:grid-cols-[2fr_1.5fr_1fr_1fr] md:items-center"
                        >
                            <div className="flex items-center gap-3">
                                <div className="rounded-md bg-gray-700 p-2">
                                    <BriefcaseBusiness size={16} />
                                </div>

                                <div>
                                    <h3 className="text-xs font-medium">
                                        {app.jobTitle}
                                    </h3>
                                    <p className="mt-1 text-[10px] text-gray-500">
                                        {app.jobType} • {app.workplace}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400">
                                <span className="md:hidden">Company: </span>
                                {app.companyName}
                            </p>

                            <p className="text-xs text-gray-500">
                                <span className="md:hidden">Applied: </span>
                                {app.applied}
                            </p>

                            <div>
                                <span
                                    className={`rounded-full px-2.5 py-1 text-[10px] ${getStatusColor(app.status)}`}
                                >
                                    {app.status}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="py-12 text-center text-sm text-gray-500">
                        No {activeTab.toLowerCase()} applications found.
                    </p>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-5 py-4">
                        <p className="text-xs text-gray-500">
                            Showing {currentApplications.length} of{" "}
                            {filteredApplications.length}
                        </p>

                        <div className="flex items-center gap-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
                                className="rounded-md border border-white/10 p-2 disabled:opacity-30"
                            >
                                <ChevronLeft size={15} />
                            </button>

                            <span className="text-xs text-gray-400">
                                {currentPage} / {totalPages}
                            </span>

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                                className="rounded-md border border-white/10 p-2 disabled:opacity-30"
                            >
                                <ChevronRight size={15} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ApplicationsContent;