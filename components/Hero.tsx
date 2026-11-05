"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
    Search,
    MapPin,
    BriefcaseBusiness,
    Building2,
    Users,
    Star,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stats = [
    { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
    { icon: Building2, value: "12K", label: "Companies" },
    { icon: Users, value: "2M", label: "Job Seekers" },
    { icon: Star, value: "97%", label: "Satisfaction Rate" },
];

const trending = [
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
];

export default function Hero() {

    const router = useRouter()

    const [keyword, setKeyword] = useState("")
    const [location, setLocation] = useState("")

    // Search jobs
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const params = new URLSearchParams()

        const trimmedKeyword = keyword.trim()
        const trimmedLocation = location.trim()

        if (trimmedKeyword) {
            params.set("keyword", trimmedKeyword)
        }

        if (trimmedLocation) {
            params.set("location", trimmedLocation)
        }

        router.push(`/jobs?${params.toString()}`)
    }

    // Search trending positions
    const handleTrending = (position: string) => {
        const params = new URLSearchParams()
        params.set("keyword", position)

        router.push(`/jobs?${params.toString()}`)
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#080809] text-white">

            <section className="relative isolate min-h-screen overflow-hidden">

                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px] sm:h-[700px] sm:w-[700px]" />
                </div>

                {/* HERO CONTENT */}
                <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-8 pt-16 text-center sm:pt-20 md:pt-24">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[10px] text-white/60">
                        <span>🔥</span>
                        <span className="font-bold text-white">50,000+</span>
                        NEW JOBS THIS MONTH
                    </div>

                    <h1 className="max-w-3xl text-[36px] font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-[58px]">
                        Find Your{" "}
                        <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                            Dream Job
                        </span>{" "}
                        Today
                    </h1>

                    <p className="mt-4 max-w-xl text-xs leading-6 text-white/45 sm:text-sm md:text-base">
                        HireLoop connects top talent with world-class companies.
                        Browse thousands of curated opportunities and land your
                        next role — faster.
                    </p>

                    {/* SEARCH BAR */}
                    <form
                        onSubmit={handleSearch}
                        className="mt-7 flex w-full max-w-[620px] flex-col gap-2 rounded-xl border border-white/10 bg-[#17171c] p-2 shadow-2xl sm:flex-row sm:items-center"
                    >
                        {/* Job Title */}
                        <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                            <Search className="h-4 w-4 shrink-0 text-white/50" />

                            <Input
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Job title, skill or company"
                                className="h-9 min-w-0 border-0 bg-transparent px-0 text-xs shadow-none placeholder:text-white/40 focus-visible:ring-0"
                            />
                        </div>

                        <div className="hidden h-7 w-px bg-white/10 sm:block" />

                        {/* Location */}
                        <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                            <MapPin className="h-4 w-4 shrink-0 text-white/50" />

                            <Input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Location or Remote"
                                className="h-9 min-w-0 border-0 bg-transparent px-0 text-xs shadow-none placeholder:text-white/40 focus-visible:ring-0"
                            />
                        </div>

                        {/* Search Button */}
                        <Button
                            type="submit"
                            className="h-10 w-full shrink-0 rounded-lg bg-indigo-600 hover:bg-indigo-500 sm:w-10"
                            aria-label="Search jobs"
                        >
                            <Search size={17} />
                            <span className="sm:hidden">Search Jobs</span>
                        </Button>
                    </form>

                    {/* TRENDING */}
                    <div className="mt-4 flex max-w-full flex-wrap items-center justify-center gap-2">

                        <span className="text-[10px] text-white/40">
                            Trending Position
                        </span>

                        {trending.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleTrending(item)}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/60 transition hover:border-indigo-400/50 hover:text-white"
                            >
                                {item}
                            </button>
                        ))}

                    </div>
                </div>

                {/* GLOBE + STATS SECTION */}
                <div className="relative mx-auto w-full max-w-[1240px]">

                    {/* Globe */}
                    <div className="pointer-events-none relative flex h-[440px] justify-center overflow-hidden sm:h-[490px] md:h-[520px]">

                        <div className="absolute left-1/2 top-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-indigo-600/50 blur-[100px] sm:h-[440px] sm:w-[440px]" />

                        {/* Earth */}
                        <div className="earth absolute left-1/2 top-8 aspect-square w-[min(100vw,500px)] -translate-x-1/2 overflow-hidden rounded-full border border-indigo-300/30 shadow-[0_-10px_90px_rgba(79,70,229,0.9),0_0_150px_rgba(79,70,229,0.35)]">

                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,#7775db_0%,#4542aa_38%,#191c48_75%,#080b20_100%)]" />

                            {/* Globe continents */}
                            <svg
                                viewBox="0 0 600 600"
                                className="absolute inset-0 h-full w-full opacity-80"
                                fill="none"
                            >
                                <defs>
                                    <clipPath id="earth-clip">
                                        <circle cx="300" cy="300" r="300" />
                                    </clipPath>
                                    <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                                        <stop stopColor="#a5a2ef" />
                                        <stop offset="1" stopColor="#6262bb" />
                                    </linearGradient>
                                </defs>

                                <g clipPath="url(#earth-clip)" fill="url(#land)">
                                    <path d="M25 120 L65 85 115 76 148 51 195 57 224 80 208 105 180 117 174 145 148 158 134 185 112 194 103 225 77 244 62 224 45 198 27 184 Z" />
                                    <path d="M125 205 L153 187 175 202 181 230 164 253 157 282 136 306 124 281 108 261 Z" />
                                    <path d="M190 278 L222 270 245 289 252 320 244 353 231 387 220 431 201 475 184 450 185 411 170 379 173 345 157 320 166 292 Z" />
                                    <path d="M255 98 L285 79 311 85 324 104 348 109 351 129 329 143 307 136 287 151 265 137 247 119 Z" />
                                    <path d="M277 158 L315 148 344 164 359 197 346 233 330 264 314 310 291 296 278 267 259 240 262 207 249 184 Z" />
                                    <path d="M339 83 L386 64 434 71 478 91 526 116 563 148 549 176 512 183 487 209 454 205 431 225 397 204 375 177 350 159 345 130 Z" />
                                    <path d="M420 221 L450 208 482 226 497 252 478 275 453 263 431 251 Z" />
                                    <path d="M470 320 L511 306 543 323 551 350 531 370 496 367 475 350 Z" />
                                </g>
                            </svg>

                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_35%_25%,rgba(255,255,255,0.24),transparent_45%),linear-gradient(150deg,transparent_45%,rgba(0,0,0,0.65)_100%)] shadow-[inset_-35px_-20px_80px_rgba(0,0,0,0.8),inset_15px_15px_45px_rgba(255,255,255,0.12)]" />
                        </div>
                    </div>

                    {/* Globe Text */}
                    <div className="pointer-events-none absolute left-0 right-0 top-[260px] z-10 px-4 text-center sm:top-[300px] md:top-[310px]">
                        <h2 className="mx-auto max-w-md text-base font-medium leading-6 text-white/80 drop-shadow-lg sm:text-xl">
                            Assisting over 15,000 job seekers
                            <br />
                            find their dream positions.
                        </h2>
                    </div>

                    {/* STATS */}
                    <div className="relative z-20 -mt-2 grid grid-cols-2 gap-3 px-4 pb-8 sm:-mt-3 sm:grid-cols-4 sm:px-8 md:px-10">

                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    className="group min-h-[112px] rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#09090b]/95 to-[#19191c]/95 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 sm:min-h-[125px] sm:p-5"
                                >
                                    <Icon className="mb-4 h-4 w-4 text-white/70 transition group-hover:text-indigo-400 sm:mb-6" />

                                    <div className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                                        {stat.value}
                                    </div>

                                    <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
        </main>
    );
}