import { ChartSection } from "@/components/dashboard/chart-section";
import { DepartmentTable } from "@/components/dashboard/department-table";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function StarterPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8">
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-7">
        <ChartSection />
        <RecentActivity />
      </div>
      <DepartmentTable />
    </div>
  );
}
