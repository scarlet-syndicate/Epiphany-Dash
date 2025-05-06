
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { GreetingSection } from "@/components/dashboard/GreetingSection";
import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { GradeTracker } from "@/components/dashboard/GradeTracker";
import { StudyTimerCard } from "@/components/dashboard/StudyTimerCard";

const Index = () => {
  return (
    <DashboardLayout>
      <GreetingSection />
      <OverviewCards />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <GradeTracker />
        <StudyTimerCard />
      </div>
    </DashboardLayout>
  );
};

export default Index;
