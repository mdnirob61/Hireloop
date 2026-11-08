'use client'
import { Trash2, Trash2Icon } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { JobData } from "../dashboard/recruiter/jobs/new/page"
import { deleteJob } from "@/lib/actions/jobs"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export function DeleteDialogJob({ job }: { job: JobData }) {
    const router = useRouter();

    const handleDelete = async () => {
        const result = await deleteJob(job._id);

        if (result.deletedCount === 1) {
            toast.success("Job deleted successfully");
            router.refresh();
        } else {
            toast.error("Failed to delete job");
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={<Button variant={'destructive'}><Trash2 /></Button>}
            />
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete Job?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete {job.title}? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} variant="destructive">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
