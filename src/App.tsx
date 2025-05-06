
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GradesPage from "./pages/GradesPage";
import CoursesPage from "./pages/CoursesPage";
import SchedulePage from "./pages/SchedulePage";
import StudyTimerPage from "./pages/StudyTimerPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import MeetopiaPage from "./pages/MeetopiaPage";
import MirofyPage from "./pages/MirofyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/study-timer" element={<StudyTimerPage />} />
          <Route path="/meetopia" element={<MeetopiaPage />} />
          <Route path="/mirofy" element={<MirofyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
