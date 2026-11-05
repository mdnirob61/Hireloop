"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    ArrowRight,
    BriefcaseBusiness,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { signUp } from "@/lib/auth-client"

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agreeTerms, setAgreeTerms] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }
        if (!agreeTerms) {
            alert("Please accept the Terms & Conditions.")
            return
        }

        const { data: signUpResponse, error } = await signUp.email({
            name,
            email,
            password,
            callbackURL: "/",
        });

        console.log('sign up response', signUpResponse, error)
        console.log({ name, email, password });

    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080809] px-4 py-12 text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />
            </div>

            {/* Sign Up Card */}
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
                    <div className="mb-7 text-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                            Join Hireloop and take the next step in your career.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white/80">
                                Full Name
                            </label>

                            <div className="relative">
                                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="h-12 border-white/10 bg-[#222228] pl-10 text-sm text-white placeholder:text-white/30 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

                                <Input
                                    id="email"
                                    name="email"
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
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={6}
                                    className="h-12 border-white/10 bg-[#222228] pl-10 pr-11 text-sm text-white placeholder:text-white/30 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-white/80">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    minLength={6}
                                    className="h-12 border-white/10 bg-[#222228] pl-10 pr-11 text-sm text-white placeholder:text-white/30 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start gap-2 pt-1">
                            <Checkbox
                                id="terms"
                                checked={agreeTerms}
                                onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                                className="mt-0.5 border-white/30 data-[state=checked]:border-indigo-600 data-[state=checked]:bg-indigo-600"
                            />

                            <label
                                htmlFor="terms"
                                className="cursor-pointer text-xs leading-5 text-white/50"
                            >
                                I agree to the{" "}
                                <Link href="/terms" className="text-indigo-400 hover:text-indigo-300">
                                    Terms & Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={!agreeTerms}
                            className="h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs text-white/35">
                            OR SIGN UP WITH
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Google Sign Up UI */}
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

                    {/* Sign In Link */}
                    <p className="mt-7 text-center text-sm text-white/45">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-indigo-400 transition hover:text-indigo-300"
                        >
                            Sign In
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