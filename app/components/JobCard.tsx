'use client'
import { redirect } from 'next/navigation';
import React from 'react';
import { JobData } from '../dashboard/recruiter/jobs/new/page';
import { Bookmark, BriefcaseBusiness, Building2, Clock3, MapPin, Wallet } from 'lucide-react';

const JobCard = ({ job }: { job: JobData }) => {


    const handleViewJobDetail = (jobId: string) => {
        redirect(`/browse-jobs/${jobId}`)
    }


    return (
        <article
            key={job._id}
            onClick={() => handleViewJobDetail(job._id)}
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
    );
};

export default JobCard;