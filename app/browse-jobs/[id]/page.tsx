import { getJobs } from "@/lib/api/jobs";
import {
    ArrowUpRight,
    Bookmark,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    Clock3,
    MapPin,
    ShieldCheck,
    Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface JobData {
    _id: string;
    title: string;
    companyName: string;
    companyLogo?: string;
    companySize?: string;
    industry?: string;
    website?: string;

    category: string;
    jobType: string;
    remoteAllowed: boolean;
    location: string;
    experience?: string;

    applicationDeadline: string;
    minSalary: string;
    maxSalary: string;
    frequency: string;

    description?: string;
    responsibilities: string;
    requirements: string;
    benefits?: string[];

    applicants: number;
    status: "active" | "expired";
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const JobDetailsPage = async ({ params, }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const job = (await getJobs()).find((job) => job._id === id);

    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#080809] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* Job Header */}
                <div className="mb-5 flex flex-col gap-5 rounded-xl border border-white/[0.07] bg-[#151518] p-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#202024]">
                            {job.companyLogo ? (
                                <Image
                                    src={job.companyLogo}
                                    alt={job.companyName}
                                    height={200}
                                    width={200}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <Building2 className="h-7 w-7 text-indigo-400" />
                            )}
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold sm:text-2xl">
                                {job.title}
                            </h1>

                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                                <span>{job.companyName}</span>
                                <span>•</span>
                                <span
                                    className={`flex items-center gap-1 ${job.status === "active"
                                        ? "text-green-400"
                                        : "text-red-400"
                                        }`}
                                >
                                    <ShieldCheck size={13} />
                                    {job.status === "active" ? "Active Job" : "Expired"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#202024] text-gray-300 transition hover:bg-white/10">
                            <Bookmark size={17} />
                        </button>

                        <button
                            disabled={job.status !== "active"}
                            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

                    {/* Left Section */}
                    <div className="space-y-5 lg:col-span-2">

                        {/* Job Information */}
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                            <InfoCard
                                icon={<Wallet size={16} />}
                                label="Salary Range"
                                value={`${job.minSalary} - ${job.maxSalary}`}
                                extra={job.frequency}
                            />

                            <InfoCard
                                icon={<MapPin size={16} />}
                                label="Location"
                                value={job.location}
                                extra={job.remoteAllowed ? "Remote" : "On-site"}
                            />

                            <InfoCard
                                icon={<BriefcaseBusiness size={16} />}
                                label="Job Type"
                                value={job.jobType}
                                extra={job.category}
                            />

                            <InfoCard
                                icon={<Clock3 size={16} />}
                                label="Experience"
                                value={job.experience || "Not specified"}
                                extra="Experience level"
                            />
                        </div>

                        {/* Job Description */}
                        <section className="rounded-xl border border-white/[0.07] bg-[#151518] p-5 sm:p-6">
                            <h2 className="mb-4 text-lg font-semibold">
                                Job Description
                            </h2>

                            <p className="whitespace-pre-line text-sm leading-7 text-gray-400">
                                {job.description || job.responsibilities}
                            </p>

                            {/* Responsibilities */}
                            <div className="my-6 border-t border-white/[0.07]" />

                            <h3 className="mb-4 font-semibold">
                                Responsibilities
                            </h3>

                            <ul className="space-y-3">
                                {job.responsibilities
                                    .split("\n")
                                    .filter(Boolean)
                                    .map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-sm leading-6 text-gray-400"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                                            {item.replace(/^[-•]\s*/, "")}
                                        </li>
                                    ))}
                            </ul>

                            <div className="my-6 border-t border-white/[0.07]" />

                            {/* Requirements */}
                            <h3 className="mb-4 font-semibold">
                                Requirements
                            </h3>

                            <div className="mb-4 flex flex-wrap gap-2">
                                {job.category && (
                                    <span className="rounded-md border border-white/10 bg-[#202024] px-3 py-1.5 text-xs text-gray-300">
                                        {job.category}
                                    </span>
                                )}

                                {job.experience && (
                                    <span className="rounded-md border border-white/10 bg-[#202024] px-3 py-1.5 text-xs text-gray-300">
                                        {job.experience}
                                    </span>
                                )}

                                {job.remoteAllowed && (
                                    <span className="rounded-md border border-white/10 bg-[#202024] px-3 py-1.5 text-xs text-gray-300">
                                        Remote Work
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-3">
                                {job.requirements
                                    .split("\n")
                                    .filter(Boolean)
                                    .map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-sm leading-6 text-gray-400"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                                            {item.replace(/^[-•]\s*/, "")}
                                        </li>
                                    ))}
                            </ul>

                            {/* Benefits */}
                            {job.benefits && job.benefits.length > 0 && (
                                <>
                                    <div className="my-6 border-t border-white/[0.07]" />

                                    <h3 className="mb-5 font-semibold">
                                        Benefits
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {job.benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 text-sm text-gray-300"
                                            >
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25252b] text-indigo-400">
                                                    <CheckCircle2 size={16} />
                                                </span>
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </section>
                    </div>

                    {/* Right Section - Company Overview */}
                    <aside className="h-fit rounded-xl border border-white/[0.07] bg-[#151518] p-5">

                        <h2 className="mb-5 text-lg font-semibold">
                            Company Overview
                        </h2>

                        <div className="mb-5 flex h-36 items-center justify-center overflow-hidden rounded-lg bg-[#202024]">
                            {job.companyLogo ? (
                                <Image
                                    src={job.companyLogo}
                                    alt={job.companyName}
                                    height={200}
                                    width={200}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <Building2 size={48} className="text-gray-600" />
                            )}
                        </div>

                        <h3 className="mb-5 text-center font-semibold">
                            {job.companyName}
                        </h3>

                        <div className="space-y-5">

                            <CompanyInfo
                                label="Company Size"
                                value={job.companySize || "Not specified"}
                            />

                            <CompanyInfo
                                label="Industry"
                                value={job.industry || job.category}
                            />

                            <CompanyInfo
                                label="Applicants"
                                value={`${job.applicants} Applicants`}
                            />

                            <CompanyInfo
                                label="Application Deadline"
                                value={new Date(
                                    job.applicationDeadline
                                ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            />
                        </div>

                        {job.website && (
                            <Link
                                href={job.website}
                                target="_blank"
                                className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#202024] py-3 text-xs font-medium text-gray-300 transition hover:bg-white/10"
                            >
                                Visit Website
                                <ArrowUpRight size={14} />
                            </Link>
                        )}
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default JobDetailsPage;


/* Reusable Components */

function InfoCard({
    icon,
    label,
    value,
    extra,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    extra?: string;
}) {
    return (
        <div className="rounded-lg border border-white/[0.07] bg-[#151518] p-3">
            <div className="mb-2 flex items-center gap-2 text-gray-500">
                {icon}
                <span className="text-[10px] uppercase tracking-wide">
                    {label}
                </span>
            </div>

            <p className="text-sm font-medium text-gray-200">{value}</p>

            {extra && (
                <p className="mt-1 text-[10px] text-gray-500">{extra}</p>
            )}
        </div>
    );
}

function CompanyInfo({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-gray-500">{label}</span>
            <span className="text-right text-gray-300">{value}</span>
        </div>
    );
}