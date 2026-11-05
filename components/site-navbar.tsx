"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/companies", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

function Logo() {
  return (
    <Image
      src="/images/logo.png"
      width={154}
      height={44}
      alt="Hireloop"
      priority
      className="h-9 w-auto sm:h-10 lg:h-11"
    />
  )
}

export function SiteNavbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10">
      <nav className="mx-auto flex h-16 w-full max-w-330 items-center justify-between gap-4 rounded-2xl border border-white/6 bg-[#222222]/95 px-3 shadow-[0_18px_50px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:h-17.5 sm:px-5 lg:h-18.5 lg:px-6">

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base text-white/85 transition-colors hover:text-white",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "font-semibold text-white"
                  : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <span className="h-6 w-px bg-white/25" />

          <Link
            href="/login"
            className={buttonVariants({
              variant: "ghost",
              className:
                "h-13 rounded-xl px-6 font-(family-name:--font-manrope) text-lg font-semibold text-[#5c53fe] hover:bg-white/5 hover:text-white",
            })}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={buttonVariants({
              className:
                "h-13 rounded-xl bg-[#5c53fe] px-6 font-(family-name:--font-instrument-sans) text-lg font-medium text-white hover:bg-[#6a62ff]",
            })}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-xl text-white hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[86%] max-w-sm gap-0 border-white/10 bg-[#141418] p-0 text-white"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <SheetDescription className="sr-only">
              Navigate through Hireloop pages.
            </SheetDescription>

            {/* Mobile Header */}
            <SheetHeader className="flex-row items-center justify-between border-b border-white/10 p-5">
              <Link href="/">
                <Logo />
              </Link>

              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Close menu"
                    className="text-white hover:bg-white/10"
                  />
                }
              >
                <X className="size-5" />
              </SheetClose>
            </SheetHeader>

            {/* Mobile Links */}
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className={cn(
                    "rounded-xl px-4 py-3 text-lg text-white/80 hover:bg-white/5 hover:text-white",
                    pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? "bg-white/5 font-semibold text-white"
                      : ""
                  )}
                >
                  {link.label}
                </SheetClose>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-5">
              <SheetClose
                render={<Link href="/login" />}
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "h-12 w-full rounded-xl border-white/10 bg-transparent text-lg font-semibold text-[#8a83ff] hover:bg-white/5 hover:text-white",
                })}
              >
                Sign In
              </SheetClose>

              <SheetClose
                render={<Link href="/register" />}
                className={buttonVariants({
                  className:
                    "h-12 w-full rounded-xl bg-[#5c53fe] text-lg font-medium text-white hover:bg-[#6a62ff]",
                })}
              >
                Get Started
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  )
}