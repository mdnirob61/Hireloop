"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    ArrowRight,
    BriefcaseBusiness,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log({ email, password })
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080809] px-4 py-12 text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />
            </div>

            {/* Sign In Card */}
            <div className="relative z-10 w-full max-w-md">

                {/* Logo */}
                <Link href="/" className="mb-8 flex items-center justify-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                        <BriefcaseBusiness className="h-5 w-5 text-white" />
                    </div>

                    <Image src={'/images/logo.png'}
                        alt="logo"
                        width={140}
                        height={140} />
                </Link>

                <div className="rounded-2xl border border-white/10 bg-[#17171c]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-9">

                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Welcome Back!
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                            Sign in to continue your journey and find your dream job.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-12 border-white/10 bg-[#222228] pl-10 text-sm text-white placeholder:text-white/30 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-white/80">
                                Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="h-12 border-white/10 bg-[#222228] pl-10 pr-11 text-sm text-white placeholder:text-white/30 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-white"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="remember"
                                    className="border-white/30 data-[state=checked]:border-indigo-600 data-[state=checked]:bg-indigo-600"
                                />

                                <label
                                    htmlFor="remember"
                                    className="cursor-pointer text-xs text-white/50"
                                >
                                    Remember me
                                </label>
                            </div>

                            <Link
                                href="/forgot-password"
                                className="text-xs font-medium text-indigo-400 transition hover:text-indigo-300"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
                        >
                            Sign In
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                    </form>

                    {/* Divider */}
                    <div className="my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs text-white/35">
                            OR CONTINUE WITH
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Google Sign In UI */}
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full rounded-xl border-white/10 bg-transparent text-sm font-medium text-white hover:bg-white/5 hover:text-white"
                    >
                        <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.73 7.18l7.73 6C44.45 37.98 46.98 31.86 46.98 24.55z" />
                            <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.86.92 7.5 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>

                        Continue with Google
                    </Button>

                    {/* Register Link */}
                    <p className="mt-7 text-center text-sm text-white/45">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-indigo-400 transition hover:text-indigo-300"
                        >
                            Create an account
                        </Link>
                    </p>

                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-white/30">
                    © 2026 Hireloop. All rights reserved.
                </p>

            </div>
        </main>
    )
}