
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { GradeTracker } from "@/components/dashboard/GradeTracker";

const GradesPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-playfair font-semibold text-academia-navy mb-6">
        Academic Performance
      </h1>
      <GradeTracker />
    </DashboardLayout>
  );
};

export default GradesPage;
