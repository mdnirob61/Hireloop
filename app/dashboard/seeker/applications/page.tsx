import ApplicationsContent from "@/app/components/ApplicationsContent";
import { getApplyToJob } from "@/lib/api/jobs";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyApplicationsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const applications = await getApplyToJob(`applicantId=${session?.user.id}`);

    return (
        <ApplicationsContent
            applications={applications as unknown as React.ComponentProps<typeof ApplicationsContent>["applications"]}
        />
    );
};

export default MyApplicationsPage;