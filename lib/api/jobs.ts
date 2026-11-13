import { JobData } from "@/app/dashboard/recruiter/jobs/new/page";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getJobs = async (query = ""): Promise<JobData[]> => {
    const res = await fetch(`${BASE_URL}/jobs?${query}`);

    return res.json();
}


export const getJobById = async (jobId: string) => {
    const res = await fetch(`${BASE_URL}/jobs/${jobId}`);
    return res.json()
}


export const applyToJob = async (data) => {
    const res = await fetch(`${BASE_URL}/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res.json()
}

export const getApplyToJob = async (query = ""): Promise<JobData[]> => {
    const res = await fetch(`${BASE_URL}/applications?${query}`);

    return res.json();
}

export const getApplyToJobCount = async (query = ""): Promise<{count: number}> => {
    const res = await fetch(`${BASE_URL}/applications/count?${query}`);

    return res.json();
}