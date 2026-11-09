import { JobData } from "@/app/dashboard/recruiter/jobs/new/page";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getJobs = async (query = ""): Promise<JobData[]> => {
    const res = await fetch(`${BASE_URL}/jobs?${query}`);

    return res.json();
}