import { getJobs } from "@/lib/api/jobs";
import { BriefcaseBusiness, } from "lucide-react";

import { JobData } from "../dashboard/recruiter/jobs/new/page";
import JobSearchBar from "../components/JobSearchBar";
import SideBarFilter from "../components/SideBarFilter";
import JobCard from "../components/JobCard";

const BrowseJobsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {

    const search = await searchParams;
    const urlSearch = new URLSearchParams(search as Record<string, string>);
    const query = urlSearch.toString();

    const jobs: JobData[] = await getJobs(query);

    return (
        <main className="min-h-screen bg-[#101012] px-4 py-6 text-white sm:px-6">

            <div className="mx-auto max-w-7xl">

                {/* Search Section */}
                <JobSearchBar></JobSearchBar>

                {/* Main Content */}
                <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[210px_minmax(0,1fr)]">

                    {/* Sidebar Filters */}
                    <SideBarFilter></SideBarFilter>

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

                                    <JobCard key={job._id} job={job}></JobCard>

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