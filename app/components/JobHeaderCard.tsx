'use client'
import React from 'react';
import { JobData1 } from '../browse-jobs/[id]/page';
import Image from 'next/image';
import { Bookmark, Building2, ShieldCheck } from 'lucide-react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { applyToJob, getApplyToJobCount } from '@/lib/api/jobs';
import { toast } from 'react-toastify';

const JobHeaderCard = ({ job }: { job: JobData1 }) => {
    const router = useRouter()

    const { data: session } = useSession()
    const user = session?.user;

    const handleApplyNow = async () => {
        if (!user) {
            router.push(`/login?redirectTo=/browse-jobs/${job._id}`);
            return;
        }
        else if (user.role === 'seeker') {
            const countResult = await getApplyToJobCount(`applocandId=${user.id}`);
            if (countResult.count >= 10) {
                router.push('/checkout');
                return;
            }

            else {
                const application = {
                    jobId: job._id,
                    userId: user.id,
                    email: user.email,
                    jobTitle: job.title,
                    companyName: job.companyName
                }

                const result = await applyToJob(application);
                router.push('/browse-jobs')
                toast.success('Applied Successfully')
                console.log(result)
            }
        }
        else {
            console.log('Not the seeker');
        }

    }

    return (
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
                    onClick={handleApplyNow}
                    className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobHeaderCard;