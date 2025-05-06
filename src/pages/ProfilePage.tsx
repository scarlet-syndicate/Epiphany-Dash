
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-playfair font-semibold text-academia-navy mb-6">
        Student Profile
      </h1>
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
        <p className="text-academia-charcoal mb-4">Your student profile will be displayed here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
