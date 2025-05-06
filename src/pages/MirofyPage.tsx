
import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { PenTool, Plus, Layout, Share2, Folder } from "lucide-react";

const MirofyPage = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-playfair font-semibold text-academia-navy">
              Mirofy
            </h1>
            <p className="text-academia-charcoal mt-1">
              Digital whiteboard for visual collaboration and brainstorming
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-academia-coral hover:bg-academia-coral/90 text-academia-navy">
              <PenTool className="mr-2 h-4 w-4" />
              New Board
            </Button>
            <Button variant="outline" className="border-academia-coral text-academia-navy hover:bg-academia-coral/20">
              Templates
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
              <h3 className="font-playfair text-xl text-academia-navy">Recent Boards</h3>
              <p className="text-academia-charcoal/70 mt-1 text-sm">Continue where you left off</p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-academia-lavender rounded-md overflow-hidden hover:shadow-md transition-all group">
                  <div className="h-32 bg-academia-lavender/20 relative p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-academia-mint/20 to-academia-lavender/30"></div>
                    <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <span className="text-xs font-medium px-2 py-0.5 bg-white/70 rounded-full">
                        Physics
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-academia-navy">Circuit Diagrams</h4>
                    <p className="text-xs text-academia-charcoal/70 mt-1">Last edited 2 days ago</p>
                  </div>
                </div>
                
                <div className="border border-academia-lavender rounded-md overflow-hidden hover:shadow-md transition-all group">
                  <div className="h-32 bg-academia-lavender/20 relative p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-academia-yellow/20 to-academia-lavender/30"></div>
                    <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <span className="text-xs font-medium px-2 py-0.5 bg-white/70 rounded-full">
                        Literature
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-academia-navy">Character Map: Hamlet</h4>
                    <p className="text-xs text-academia-charcoal/70 mt-1">Last edited yesterday</p>
                  </div>
                </div>
                
                <div className="border border-academia-lavender rounded-md overflow-hidden hover:shadow-md transition-all group">
                  <div className="h-32 bg-academia-lavender/20 relative p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-academia-coral/20 to-academia-lavender/30"></div>
                    <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <span className="text-xs font-medium px-2 py-0.5 bg-white/70 rounded-full">
                        Computer Science
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-academia-navy">Algorithm Flowchart</h4>
                    <p className="text-xs text-academia-charcoal/70 mt-1">Last edited 5 days ago</p>
                  </div>
                </div>
                
                <div className="border border-dashed border-academia-lavender rounded-md overflow-hidden hover:shadow-md transition-all flex items-center justify-center h-full">
                  <Button variant="ghost" className="h-full w-full flex flex-col items-center py-10">
                    <Plus className="h-8 w-8 mb-2 text-academia-navy/50" />
                    <span className="text-academia-navy/70">Create New Board</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
              <h3 className="font-playfair text-xl text-academia-navy">Board Templates</h3>
              <p className="text-academia-charcoal/70 mt-1 text-sm">Start with pre-designed layouts</p>
              
              <div className="mt-4 space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="mr-2 h-4 w-4" />
                  Mind Map
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="mr-2 h-4 w-4" />
                  Kanban Board
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="mr-2 h-4 w-4" />
                  Timeline
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="mr-2 h-4 w-4" />
                  Concept Map
                </Button>
              </div>
              
              <div className="mt-6">
                <Button variant="ghost" className="w-full text-academia-charcoal hover:text-academia-navy">
                  <Folder className="mr-2 h-4 w-4" />
                  View All Templates
                </Button>
              </div>
            </div>
            
            <div className="mt-6 bg-academia-mint/30 rounded-lg p-6">
              <h3 className="font-playfair text-lg text-academia-navy">Need help?</h3>
              <p className="text-sm text-academia-charcoal/80 mt-1">Check out our tutorial videos to get started with Mirofy.</p>
              <Button className="mt-4 bg-white text-academia-navy hover:bg-white/90 w-full">
                Watch Tutorials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MirofyPage;
