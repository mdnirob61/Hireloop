"use client"

import { useState } from "react"
import {
    Building2,
    CalendarDays,
    Euro,
    Globe2,
    MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { createJob } from "@/lib/actions/jobs"

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]

const inputClass =
    "h-10 border-white/5 bg-[#1d1d21] text-sm text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-indigo-500"

export interface JobData {
    title: string
    companyName: string
    category: string
    jobType: string
    remoteAllowed: boolean
    location: string
    applicationDeadline: string
    minSalary: string
    maxSalary: string
    frequency: string
    responsibilities: string
    requirements: string
    applicants?: number
    status?: "active" | "expired"
}

export default function NewJobPage() {
    const [jobType, setJobType] = useState("Full-time")
    const [category, setCategory] = useState("Engineering & Tech")
    const [remoteAllowed, setRemoteAllowed] = useState(true)
    const [frequency, setFrequency] = useState("per hour")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const jobData: JobData = {
            title: formData.get("title") as string,
            companyName: formData.get("companyName") as string,
            category,
            jobType,
            remoteAllowed,
            location: formData.get("location") as string,
            applicationDeadline: formData.get("applicationDeadline") as string,
            minSalary: formData.get("minSalary") as string,
            maxSalary: formData.get("maxSalary") as string,
            frequency,
            responsibilities: formData.get("responsibilities") as string,
            requirements: formData.get("requirements") as string,
        }

        console.log(jobData);

        const result = await createJob(jobData);
        console.log('result', result);
    }

    return (
        <main className="min-h-screen bg-[#101012] px-4 py-6 text-white sm:px-6">

            <div className="mx-auto max-w-5xl">

                {/* Page Heading */}
                <div className="mb-7">
                    <p className="mb-2 text-xs text-gray-500">
                        Manage Jobs <span className="mx-1">&gt;</span>
                        <span className="text-indigo-400">
                            Create New Listing
                        </span>
                    </p>

                    <h1 className="text-2xl font-bold">
                        Post a New Job
                    </h1>

                    <p className="mt-1 text-xs text-gray-500">
                        Fill in the position specifications to attract qualified talent across our network.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* 1. Basic Information */}
                    <section className="rounded-xl border border-white/[0.04] bg-[#151518] p-5">

                        <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            1. Basic Information
                        </h2>

                        <div className="space-y-4">

                            {/* Job Title */}
                            <div className="space-y-1.5">
                                <Label htmlFor="title" className="text-xs text-gray-300">
                                    Job Title <span className="text-indigo-400">*</span>
                                </Label>

                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Frontend Developer"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Company Name and Job Category */}
                            <div className="grid gap-3 sm:grid-cols-2">

                                <div className="space-y-1.5">
                                    <Label htmlFor="companyName" className="text-xs text-gray-300">
                                        Company Name <span className="text-indigo-400">*</span>
                                    </Label>

                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <Input
                                            id="companyName"
                                            name="companyName"
                                            placeholder="HirePulse Network"
                                            required
                                            className={`${inputClass} pl-9`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label className="text-xs text-gray-300">
                                        Job Category <span className="text-indigo-400">*</span>
                                    </Label>

                                    <Select
                                        value={category}
                                        onValueChange={(value) => setCategory(value ?? "")}
                                    >
                                        <SelectTrigger className={`w-full ${inputClass}`}>
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="Engineering & Tech">
                                                Engineering & Tech
                                            </SelectItem>
                                            <SelectItem value="Design & Creative">
                                                Design & Creative
                                            </SelectItem>
                                            <SelectItem value="Marketing">
                                                Marketing
                                            </SelectItem>
                                            <SelectItem value="Business & Finance">
                                                Business & Finance
                                            </SelectItem>
                                            <SelectItem value="Customer Support">
                                                Customer Support
                                            </SelectItem>
                                            <SelectItem value="Education">
                                                Education
                                            </SelectItem>
                                            <SelectItem value="Other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </div>

                            {/* Job Type */}
                            <div className="space-y-2">
                                <Label className="text-xs text-gray-300">
                                    Job Type <span className="text-indigo-400">*</span>
                                </Label>

                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                    {jobTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setJobType(type)}
                                            className={`h-10 rounded-lg border text-xs transition ${jobType === type
                                                ? "border-indigo-500 bg-[#24232e] text-white"
                                                : "border-white/[0.04] bg-[#1d1d21] text-gray-400 hover:border-white/10"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* 2. Location, Compensation & Timeline */}
                    <section className="rounded-xl border border-white/[0.04] bg-[#151518] p-5">

                        <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            2. Location, Compensation & Timeline
                        </h2>

                        <div className="space-y-4">

                            {/* Remote Work */}
                            <div className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-[#1d1d21] p-4">

                                <div className="flex items-center gap-3">
                                    <Globe2 className="h-5 w-5 text-indigo-400" />

                                    <div>
                                        <p className="text-xs font-medium">
                                            Remote Work Allowed (isRemote)
                                        </p>

                                        <p className="mt-1 text-[11px] text-gray-500">
                                            Enable worldwide or distributed candidate applications.
                                        </p>
                                    </div>
                                </div>

                                <Switch
                                    checked={remoteAllowed}
                                    onCheckedChange={setRemoteAllowed}
                                />
                            </div>

                            {/* Location and Deadline */}
                            <div className="grid gap-3 sm:grid-cols-2">

                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="location" className="text-xs text-gray-300">
                                            Job Location (location)
                                        </Label>
                                        <span className="text-[10px] text-gray-600">
                                            Required
                                        </span>
                                    </div>

                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <Input
                                            id="location"
                                            name="location"
                                            placeholder="New York, USA"
                                            required
                                            className={`${inputClass} pl-9`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="applicationDeadline" className="text-xs text-gray-300">
                                        Application Deadline (deadline)
                                    </Label>

                                    <div className="relative">
                                        <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <Input
                                            id="applicationDeadline"
                                            name="applicationDeadline"
                                            type="date"
                                            required
                                            className={`${inputClass} pl-9`}
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Salary */}
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                <div className="space-y-1.5">
                                    <Label htmlFor="minSalary" className="text-xs text-gray-300">
                                        Min Salary / Rate
                                    </Label>

                                    <div className="relative">
                                        <Euro className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <Input
                                            id="minSalary"
                                            name="minSalary"
                                            type="number"
                                            min="0"
                                            placeholder="25"
                                            className={`${inputClass} pl-9`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="maxSalary" className="text-xs text-gray-300">
                                        Max Salary / Rate
                                    </Label>

                                    <div className="relative">
                                        <Euro className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <Input
                                            id="maxSalary"
                                            name="maxSalary"
                                            type="number"
                                            min="0"
                                            placeholder="40"
                                            className={`${inputClass} pl-9`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label className="text-xs text-gray-300">
                                        Frequency
                                    </Label>

                                    <Select
                                        value={frequency}
                                        onValueChange={(value) => {
                                            if (value !== null) setFrequency(value)
                                        }}
                                    >
                                        <SelectTrigger className={`w-full ${inputClass}`}>
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="per hour">per hour</SelectItem>
                                            <SelectItem value="per day">per day</SelectItem>
                                            <SelectItem value="per month">per month</SelectItem>
                                            <SelectItem value="per year">per year</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* 3. Responsibilities & Requirements */}
                    <section className="rounded-xl border border-white/[0.04] bg-[#151518] p-5">

                        <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            3. Responsibilities & Requirements
                        </h2>

                        <div className="space-y-4">

                            <div className="space-y-1.5">
                                <Label htmlFor="responsibilities" className="text-xs text-gray-300">
                                    Key Responsibilities <span className="text-indigo-400">*</span>
                                </Label>

                                <Textarea
                                    id="responsibilities"
                                    name="responsibilities"
                                    placeholder="Describe the main responsibilities of this position..."
                                    rows={4}
                                    required
                                    className="min-h-24 resize-none border-white/[0.04] bg-[#1d1d21] text-xs text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="requirements" className="text-xs text-gray-300">
                                    Qualifications & Requirements <span className="text-indigo-400">*</span>
                                </Label>

                                <Textarea
                                    id="requirements"
                                    name="requirements"
                                    placeholder="List the skills, qualifications, and experience required..."
                                    rows={4}
                                    required
                                    className="min-h-24 resize-none border-white/[0.04] bg-[#1d1d21] text-xs text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                                />
                            </div>

                        </div>
                    </section>

                    {/* Publish Button at Bottom */}
                    <div className="flex justify-end pb-5">
                        <Button
                            type="submit"
                            className="h-10 bg-indigo-600 px-6 text-xs font-semibold text-white hover:bg-indigo-700"
                        >
                            Publish Job →
                        </Button>
                    </div>

                </form>
            </div>
        </main>
    )
}