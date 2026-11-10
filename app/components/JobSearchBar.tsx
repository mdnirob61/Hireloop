'use client'
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const JobSearchBar = () => {

    const router = useRouter();

    const handleSearchBar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        const search = data.searchField;

        const params = new URLSearchParams();
        params.set('search', search as string);

        router.push(`/browse-jobs?${params.toString()}`);
    }
    return (
        <form onSubmit={handleSearchBar} role="search" className="mb-8 rounded-xl border border-white/[0.05] bg-[#151518] p-3 sm:p-4">

            <div className="flex flex-col gap-3 sm:flex-row">

                <div className="relative flex-1">
                    <Search
                        size={16}
                        className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
                    />

                    <Input
                        name="searchField"
                        aria-label="Search Jobs"
                        placeholder="Search by job title, keywords..."
                        className="h-11 border-white/[0.05] bg-[#1d1d21] pl-10 text-sm text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                    />
                </div>

                <Button
                    type='submit'
                    className="h-11 bg-white px-7 text-sm font-semibold text-black hover:bg-gray-200"
                >
                    Search Jobs
                </Button>

            </div>

        </form>
    );
};

export default JobSearchBar;