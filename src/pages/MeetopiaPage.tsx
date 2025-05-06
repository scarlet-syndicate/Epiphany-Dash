
import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { VideoIcon, Users, Share2, PenTool } from "lucide-react";

const MeetopiaPage = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-playfair font-semibold text-academia-navy">
              Meetopia
            </h1>
            <p className="text-academia-charcoal mt-1">
              Virtual meetings for study groups and academic collaboration
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-academia-mint hover:bg-academia-mint/90 text-academia-navy">
              <VideoIcon className="mr-2 h-4 w-4" />
              New Meeting
            </Button>
            <Button variant="outline" className="border-academia-mint text-academia-navy hover:bg-academia-mint/20">
              Join Meeting
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
            <h3 className="font-playfair text-xl text-academia-navy">Scheduled Meetings</h3>
            <p className="text-academia-charcoal/70 mt-1 text-sm">Upcoming virtual sessions</p>
            <div className="mt-4 space-y-3">
              <div className="border border-academia-lavender/50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-academia-navy">Calculus Study Group</h4>
                    <p className="text-xs text-academia-charcoal/70">Today at 2:00 PM</p>
                  </div>
                  <Button size="sm" variant="outline" className="h-7 text-xs">Join</Button>
                </div>
                <div className="flex items-center mt-2 text-xs text-academia-charcoal/70">
                  <Users className="h-3 w-3 mr-1" /> 4 participants
                </div>
              </div>
              
              <div className="border border-academia-lavender/50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-academia-navy">Project Coordination</h4>
                    <p className="text-xs text-academia-charcoal/70">Tomorrow at 11:30 AM</p>
                  </div>
                  <Button size="sm" variant="outline" className="h-7 text-xs">Join</Button>
                </div>
                <div className="flex items-center mt-2 text-xs text-academia-charcoal/70">
                  <Users className="h-3 w-3 mr-1" /> 6 participants
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
            <h3 className="font-playfair text-xl text-academia-navy">Recent Meetings</h3>
            <p className="text-academia-charcoal/70 mt-1 text-sm">Previous sessions with recordings</p>
            <div className="mt-4 space-y-3">
              <div className="border border-academia-lavender/50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-academia-navy">Physics Review</h4>
                    <p className="text-xs text-academia-charcoal/70">Yesterday, 45 minutes</p>
                  </div>
                  <Button size="sm" variant="ghost" className="h-7 text-xs">View</Button>
                </div>
              </div>
              
              <div className="border border-academia-lavender/50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-academia-navy">Literature Discussion</h4>
                    <p className="text-xs text-academia-charcoal/70">May 1, 60 minutes</p>
                  </div>
                  <Button size="sm" variant="ghost" className="h-7 text-xs">View</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
            <h3 className="font-playfair text-xl text-academia-navy">Quick Actions</h3>
            <p className="text-academia-charcoal/70 mt-1 text-sm">Tools for collaboration</p>
            <div className="mt-4 grid gap-3">
              <Button variant="outline" className="justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Share meeting link
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="mr-2 h-4 w-4" />
                Create study group
              </Button>
              <Button variant="outline" className="justify-start border-academia-yellow/70 bg-academia-yellow/20 hover:bg-academia-yellow/30">
                <PenTool className="mr-2 h-4 w-4" />
                Open Mirofy Whiteboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeetopiaPage;
