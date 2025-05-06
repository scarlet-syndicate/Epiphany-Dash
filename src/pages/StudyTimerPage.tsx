
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StudyTimerCard } from "@/components/dashboard/StudyTimerCard";

const StudyTimerPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-playfair font-semibold text-academia-navy mb-6">
        Study Timer
      </h1>
      <StudyTimerCard />
    </DashboardLayout>
  );
};

export default StudyTimerPage;
