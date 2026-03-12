import { getLeads } from "@/src/app/actions/lead";
import ClientLeadsPage from "./ClientLeadsPage";

export default async function LeadsPage() {
    const leads = await getLeads();

    // Calculate Summary Stats Server Side
    const total = leads.length;
    const pending = leads.filter((l: { status: string }) => l.status === "New" || l.status === "Pending").length;
    const qualified = leads.filter((l: { status: string }) => l.status === "Qualified" || l.status === "Demo Completed").length;

    let conversion = "0%";
    if (total > 0) {
        conversion = Math.round((qualified / total) * 100) + "%";
    }

    const summaryStats = {
        total,
        pending,
        conversion
    };

    return <ClientLeadsPage initialLeads={leads} summaryStats={summaryStats} />;
}
