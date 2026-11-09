import { getJobs } from "@/lib/api/jobs";
import {
    Bookmark,
    BriefcaseBusiness,
    MapPin,
    Search,
    Wallet,
    Clock3,
    Building2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobData } from "../dashboard/recruiter/jobs/new/page";

const jobTypes = [
    { label: "Full-time", count: "1.2k" },
    { label: "Contract", count: "432" },
    { label: "Freelance", count: "156" },
    { label: "Part-time", count: "320" },
    { label: "Internship", count: "210" },
];

const statuses = [
    { label: "Active", count: "1.1k" },
    { label: "Expired", count: "148" },
];

const categories = [
    "Engineering & Tech",
    "Design",
    "Marketing",
    "Finance",
    "Human Resources",
    "Sales",
    "Customer Support",
    "Other",
];

const BrowseJobsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {

    const search = await searchParams;
    const urlSearch = new URLSearchParams(search as Record<string, string>);
    const query = urlSearch.toString();

    const jobs: JobData[] = await getJobs();

    return (
        <main className="min-h-screen bg-[#101012] px-4 py-6 text-white sm:px-6">

            <div className="mx-auto max-w-7xl">

                {/* Search Section */}
                <form role="search" className="mb-8 rounded-xl border border-white/[0.05] bg-[#151518] p-3 sm:p-4">

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <div className="relative flex-1">
                            <Search
                                size={16}
                                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
                            />

                            <Input
                                placeholder="Search by job title, keywords..."
                                className="h-11 border-white/[0.05] bg-[#1d1d21] pl-10 text-sm text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                            />
                        </div>

                        <Button
                            className="h-11 bg-white px-7 text-sm font-semibold text-black hover:bg-gray-200"
                        >
                            Search Jobs
                        </Button>

                    </div>

                </form>

                {/* Main Content */}
                <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[210px_minmax(0,1fr)]">

                    {/* Sidebar Filters */}
                    <aside className="rounded-xl border border-white/[0.05] bg-[#151518] p-4">

                        <h2 className="mb-5 text-base font-semibold">
                            Filters
                        </h2>

                        {/* Job Type */}
                        <div className="mb-6">

                            <h3 className="mb-3 text-xs font-semibold text-gray-300">
                                Job Type
                            </h3>

                            <div className="space-y-3">

                                {jobTypes.map((type, index) => (
                                    <label
                                        key={type.label}
                                        className="flex cursor-pointer items-center justify-between gap-2 text-xs text-gray-400"
                                    >
                                        <span className="flex items-center gap-2">

                                            <input
                                                type="radio"
                                                name="jobType"
                                                defaultChecked={index === 0}
                                                className="h-3.5 w-3.5 accent-indigo-500"
                                            />

                                            {type.label}

                                        </span>

                                        <span className="text-[10px] text-gray-600">
                                            {type.count}
                                        </span>
                                    </label>
                                ))}

                            </div>

                        </div>

                        {/* Status */}
                        <div className="mb-6 border-t border-white/[0.05] pt-5">

                            <h3 className="mb-3 text-xs font-semibold text-gray-300">
                                Status
                            </h3>

                            <div className="space-y-3">

                                {statuses.map((status) => (
                                    <label
                                        key={status.label}
                                        className="flex cursor-pointer items-center justify-between gap-2 text-xs text-gray-400"
                                    >
                                        <span className="flex items-center gap-2">

                                            <input
                                                type="checkbox"
                                                className="h-3.5 w-3.5 rounded accent-indigo-500"
                                            />

                                            {status.label}

                                        </span>

                                        <span className="text-[10px] text-gray-600">
                                            {status.count}
                                        </span>
                                    </label>
                                ))}

                            </div>

                        </div>

                        {/* Category */}
                        <div className="border-t border-white/[0.05] pt-5">

                            <h3 className="mb-3 text-xs font-semibold text-gray-300">
                                Category
                            </h3>

                            <div className="space-y-3">

                                {categories.map((category) => (
                                    <label
                                        key={category}
                                        className="flex cursor-pointer items-center gap-2 text-xs text-gray-400"
                                    >
                                        <input
                                            type="checkbox"
                                            className="h-3.5 w-3.5 rounded accent-indigo-500"
                                        />

                                        {category}
                                    </label>
                                ))}

                            </div>

                        </div>

                    </aside>

                    {/* Jobs Section */}
                    <section>

                        {/* Jobs Header */}
                        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                            <h2 className="text-base font-semibold text-gray-200">
                                Found {jobs.length.toLocaleString()} Professional Jobs
                            </h2>

                            <div className="flex items-center gap-2">

                                <span className="text-xs text-gray-500">
                                    Sort By:
                                </span>

                                <select
                                    defaultValue="recent"
                                    className="h-8 rounded-md border border-white/[0.05] bg-[#151518] px-2 text-xs text-gray-300 outline-none"
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="salary">Highest Salary</option>
                                </select>

                            </div>

                        </div>

                        {/* Job Cards */}
                        <div className="space-y-3">

                            {jobs.length > 0 ? (
                                jobs.map((job) => (

                                    <article
                                        key={job._id}
                                        className="group rounded-xl border border-white/[0.05] bg-[#151518] p-4 transition-colors hover:border-indigo-500/30 sm:p-5"
                                    >

                                        <div className="flex items-start gap-3">

                                            {/* Company Logo */}
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.05] bg-[#222227] text-indigo-400">
                                                <Building2 size={20} />
                                            </div>

                                            {/* Job Information */}
                                            <div className="min-w-0 flex-1">

                                                <div className="flex items-start justify-between gap-3">

                                                    <div className="min-w-0">

                                                        <h3 className="truncate text-sm font-semibold text-gray-100 sm:text-base">
                                                            {job.title}
                                                        </h3>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {job.companyName}
                                                            <span className="mx-1.5">•</span>
                                                            {job.location}

                                                            {job.remoteAllowed && (
                                                                <>
                                                                    <span className="mx-1.5">•</span>
                                                                    Remote
                                                                </>
                                                            )}
                                                        </p>

                                                    </div>

                                                    <button
                                                        type="button"
                                                        aria-label="Bookmark job"
                                                        className="shrink-0 text-gray-500 transition-colors hover:text-indigo-400"
                                                    >
                                                        <Bookmark size={17} />
                                                    </button>

                                                </div>

                                                {/* Job Badges */}
                                                <div className="mt-4 flex flex-wrap items-center gap-2">

                                                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#1d1d21] px-2 py-1 text-[10px] text-gray-300">
                                                        <Wallet size={11} />

                                                        ${job.minSalary} - ${job.maxSalary}
                                                    </span>

                                                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#1d1d21] px-2 py-1 text-[10px] text-gray-300">
                                                        <BriefcaseBusiness size={11} />

                                                        {job.jobType}
                                                    </span>

                                                    {job.remoteAllowed && (
                                                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#1d1d21] px-2 py-1 text-[10px] text-gray-300">
                                                            <MapPin size={11} />

                                                            Hybrid / Remote
                                                        </span>
                                                    )}

                                                </div>

                                                {/* Additional Information */}
                                                <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">

                                                    <span className="flex items-center gap-1">
                                                        <Clock3 size={11} />

                                                        Deadline: {job.applicationDeadline}
                                                    </span>

                                                    <span>
                                                        {job.category}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </article>

                                ))
                            ) : (

                                <div className="rounded-xl border border-white/[0.05] bg-[#151518] px-4 py-16 text-center">

                                    <BriefcaseBusiness
                                        size={35}
                                        className="mx-auto mb-3 text-gray-600"
                                    />

                                    <h3 className="text-base font-semibold text-gray-300">
                                        No Jobs Available
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        There are no job listings available right now.
                                    </p>

                                </div>

                            )}

                        </div>

                    </section>

                </div>

            </div>

        </main>
    );
};

export default BrowseJobsPage;