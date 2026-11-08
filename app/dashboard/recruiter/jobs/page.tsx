"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Plus,
    Search,
    MapPin,
    CalendarDays,
    MoreHorizontal,
    BriefcaseBusiness,
    Pencil,
    Eye,
    Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { JobData } from "./new/page"

const jobs: JobData[] = [
    {
        title: "Frontend Developer",
        companyName: "HirePulse Network",
        category: "Engineering & Tech",
        jobType: "Full-time",
        remoteAllowed: true,
        location: "New York, USA",
        applicationDeadline: "2026-12-30",
        minSalary: "4000",
        maxSalary: "6000",
        frequency: "per month",
        responsibilities:
            "Develop responsive user interfaces and collaborate with backend developers.",
        requirements:
            "3+ years of experience with React, TypeScript, and modern frontend technologies.",
        applicants: 24,
        status: "active",
    },
    {
        title: "UI/UX Designer",
        companyName: "Creative Studio",
        category: "Design & Creative",
        jobType: "Full-time",
        remoteAllowed: true,
        location: "London, UK",
        applicationDeadline: "2026-12-20",
        minSalary: "3000",
        maxSalary: "4500",
        frequency: "per month",
        responsibilities:
            "Design user-friendly interfaces and create interactive prototypes.",
        requirements:
            "Experience with Figma, wireframing, prototyping, and user-centered design.",
        applicants: 18,
        status: "active",
    },
    {
        title: "Digital Marketing Specialist",
        companyName: "GrowthLabs",
        category: "Marketing",
        jobType: "Part-time",
        remoteAllowed: false,
        location: "Dhaka, Bangladesh",
        applicationDeadline: "2026-12-15",
        minSalary: "800",
        maxSalary: "1200",
        frequency: "per month",
        responsibilities:
            "Manage digital campaigns, analyze performance, and improve online engagement.",
        requirements:
            "Experience with SEO, social media marketing, and Google Analytics.",
        applicants: 0,
        status: "expired",
    },
    {
        title: "Backend Developer Intern",
        companyName: "TechNova",
        category: "Engineering & Tech",
        jobType: "Internship",
        remoteAllowed: false,
        location: "Toronto, Canada",
        applicationDeadline: "2026-12-25",
        minSalary: "20",
        maxSalary: "25",
        frequency: "per hour",
        responsibilities:
            "Assist in developing APIs and maintaining backend services.",
        requirements:
            "Basic knowledge of Node.js, Express.js, MongoDB, and JavaScript.",
        applicants: 12,
        status: "active",
    },
]

export default function ManageJobsPage() {
    const [search, setSearch] = useState("")

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.companyName.toLowerCase().includes(search.toLowerCase()) ||
        job.category.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <main className="min-h-screen bg-[#101012] px-4 py-6 text-white sm:px-6">

            <div className="mx-auto max-w-7xl">

                {/* Page Heading */}
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div>
                        <p className="mb-2 text-xs text-gray-500">
                            Dashboard <span className="mx-1">&gt;</span>
                            <span className="text-indigo-400">
                                Manage Jobs
                            </span>
                        </p>

                        <h1 className="text-2xl font-bold">
                            Manage Jobs
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage and track all your job listings in one place.
                        </p>
                    </div>

                    <Button
                        asChild
                        className="bg-indigo-600 text-white hover:bg-indigo-700 p-6"
                    >
                        <Link href="/dashboard/recruiter/jobs/new">
                            <Plus size={17} />
                            Post a New Job
                        </Link>
                    </Button>

                </div>

                {/* Jobs Section */}
                <section className="rounded-xl border border-white/[0.05] bg-[#151518]">

                    {/* Section Header */}
                    <div className="flex flex-col gap-4 border-b border-white/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="text-base font-semibold">
                                Your Job Listings
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                View and manage your published job listings.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:max-w-xs">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />

                            <Input
                                placeholder="Search jobs..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="h-10 border-white/[0.05] bg-[#1d1d21] pl-9 text-sm text-white placeholder:text-gray-500"
                            />
                        </div>

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[950px] text-left">

                            <thead>
                                <tr className="border-b border-white/[0.05] bg-[#19191d] text-xs text-gray-500">
                                    <th className="px-5 py-4 font-medium">
                                        Job Title
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Category
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Job Type
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Location
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Salary
                                    </th>

                                    <th className="px-5 py-4 font-medium">Applicants</th>

                                    <th className="px-5 py-4 font-medium">Status</th>

                                    <th className="px-5 py-4 font-medium">
                                        Deadline
                                    </th>

                                    <th className="px-5 py-4 text-right font-medium">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredJobs.map((job, index) => (

                                    <tr
                                        key={`${job.title}-${index}`}
                                        className="border-b border-white/[0.04] transition hover:bg-white/[0.02]"
                                    >

                                        {/* Job Title */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                                                    <BriefcaseBusiness size={18} />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-gray-200">
                                                        {job.title}
                                                    </p>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {job.companyName}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="px-5 py-4">
                                            <span className="text-xs text-gray-300">
                                                {job.category}
                                            </span>
                                        </td>

                                        {/* Job Type */}
                                        <td className="px-5 py-4">
                                            <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1.5 text-xs text-indigo-300">
                                                {job.jobType}
                                            </span>
                                        </td>

                                        {/* Location */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <MapPin size={14} />
                                                {job.location}
                                            </div>
                                        </td>

                                        {/* Salary */}
                                        <td className="px-5 py-4">
                                            <p className="text-xs text-gray-300">
                                                {job.minSalary && job.maxSalary
                                                    ? `${job.minSalary} - ${job.maxSalary}`
                                                    : job.minSalary
                                                        ? `From ${job.minSalary}`
                                                        : job.maxSalary
                                                            ? `Up to ${job.maxSalary}`
                                                            : "Not specified"}
                                            </p>

                                            {(job.minSalary || job.maxSalary) && (
                                                <p className="mt-1 text-[10px] text-gray-500">
                                                    {job.frequency}
                                                </p>
                                            )}
                                        </td>

                                        <td className="px-5 py-4">
                                            <span className="text-xs text-gray-300 flex items-center gap-1">
                                                {job.applicants} <p>Candidates</p>
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span
                                                className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${job.status === "active"
                                                    ? "bg-green-500/10 text-green-400"
                                                    : "bg-red-500/10 text-red-400"
                                                    }`}
                                            >
                                                {job.status === "active" ? "Active" : "Expired"}
                                            </span>
                                        </td>

                                        {/* Deadline */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <CalendarDays size={14} />

                                                {job.applicationDeadline}
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-gray-400 hover:bg-white/5 hover:text-white"
                                                    >
                                                        <MoreHorizontal size={18} />
                                                    </Button>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent
                                                    align="end"
                                                    className="border-white/10 bg-[#1d1d21] text-gray-200"
                                                >
                                                    <DropdownMenuItem>
                                                        <Eye size={15} />
                                                        View Job
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem>
                                                        <Pencil size={15} />
                                                        Edit Job
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem className="text-red-400 focus:text-red-400">
                                                        <Trash2 size={15} />
                                                        Delete Job
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>

                                    </tr>

                                ))}

                                {/* Empty State */}
                                {filteredJobs.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={7}
                                            className="px-5 py-16 text-center"
                                        >
                                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                                <BriefcaseBusiness size={22} />
                                            </div>

                                            <h3 className="mt-4 text-sm font-semibold text-gray-200">
                                                {search
                                                    ? "No matching jobs found"
                                                    : "No jobs posted yet"}
                                            </h3>

                                            <p className="mt-2 text-xs text-gray-500">
                                                {search
                                                    ? "Try searching with another keyword."
                                                    : "Start by creating your first job listing."}
                                            </p>

                                            {!search && (
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    className="mt-5 bg-indigo-600 hover:bg-indigo-700 p-6"
                                                >
                                                    <Link href="/dashboard/recruiter/jobs/new">
                                                        <Plus size={15} />
                                                        Post a Job
                                                    </Link>
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/[0.05] px-5 py-4">
                        <p className="text-xs text-gray-500">
                            Showing {filteredJobs.length} of {jobs.length} jobs
                        </p>
                    </div>

                </section>

            </div>
        </main>
    )
}