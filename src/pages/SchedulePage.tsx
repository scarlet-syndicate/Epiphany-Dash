
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const SchedulePage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-playfair font-semibold text-academia-navy mb-6">
        Academic Schedule
      </h1>
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
        <p className="text-academia-charcoal mb-4">Your academic schedule will be displayed here.</p>
      </div>
    </DashboardLayout>
  );
};

export default SchedulePage;
