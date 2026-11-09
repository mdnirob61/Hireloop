import { JobData } from "@/app/dashboard/recruiter/jobs/new/page";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createJob = async (data: JobData) => {
    const res = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}


export const deleteJob = async (jobId: string) => {
    const res = await fetch(`${BASE_URL}/jobs/${jobId}`, {
        method: "DELETE"
    })
    return res.json()
}


export const updatedJob = async (jobId: string, updatedData: Partial<JobData>) => {
    const res = await fetch(`${BASE_URL}/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    });
    return res.json();
}