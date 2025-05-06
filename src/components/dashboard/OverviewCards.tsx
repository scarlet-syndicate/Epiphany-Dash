
import { Calendar, Book, Clock, CheckSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Sample data for courses
const todayClasses = [
  {
    id: 1,
    name: "CS 101: Introduction to Programming",
    time: "10:00 AM - 11:30 AM",
    location: "Science Building, Room 305",
    color: "bg-academia-mint",
  },
  {
    id: 2,
    name: "MATH 202: Linear Algebra",
    time: "1:00 PM - 2:30 PM",
    location: "Mathematics Building, Room 120",
    color: "bg-academia-yellow",
  },
  {
    id: 3,
    name: "PSYCH 101: Introduction to Psychology",
    time: "3:00 PM - 4:30 PM",
    location: "Social Sciences Building, Room 210",
    color: "bg-academia-coral",
  },
];

// Sample data for upcoming assignments
const upcomingAssignments = [
  {
    id: 1,
    name: "CS 101 Project: Binary Search Implementation",
    dueDate: "Tomorrow, 11:59 PM",
    course: "CS 101: Introduction to Programming",
    progress: 75,
    priority: "high",
  },
  {
    id: 2,
    name: "MATH 202 Problem Set 3",
    dueDate: "Friday, 5:00 PM",
    course: "MATH 202: Linear Algebra",
    progress: 45,
    priority: "medium",
  },
  {
    id: 3,
    name: "PSYCH 101 Essay: Cognitive Development",
    dueDate: "Next Monday, 9:00 AM",
    course: "PSYCH 101: Introduction to Psychology",
    progress: 20,
    priority: "low",
  },
];

// Sample study data
const studyStats = {
  todayHours: 3.5,
  weeklyTotal: 18.5,
  weeklyGoal: 25,
  mostStudiedSubject: "Computer Science",
};

export function OverviewCards() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="h-5 w-5 text-academia-dustyblue" />
            Today's Classes
          </CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayClasses.map((cls) => (
              <div key={cls.id} className="flex items-start p-3 rounded-lg bg-white/80 shadow-sm">
                <div className={`w-1 self-stretch ${cls.color} rounded-full mr-3`}></div>
                <div className="flex-1">
                  <h4 className="font-medium text-academia-navy">{cls.name}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-academia-charcoal/70 mt-1">
                    <span>{cls.time}</span>
                    <span>{cls.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-academia-dustyblue" />
            Upcoming Assignments
          </CardTitle>
          <CardDescription>
            Due this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="p-3 rounded-lg bg-white/80 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-academia-navy">{assignment.name}</h4>
                  <Badge variant="outline" className={`text-xs ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority}
                  </Badge>
                </div>
                <p className="text-sm text-academia-charcoal/70 mb-1">{assignment.course}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-academia-charcoal/70">{assignment.dueDate}</span>
                  <span className="text-academia-charcoal/70">{assignment.progress}% complete</span>
                </div>
                <Progress 
                  value={assignment.progress} 
                  className="h-1.5 mt-2" 
                  indicatorClassName="bg-academia-dustyblue" 
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <Clock className="h-5 w-5 text-academia-dustyblue" />
            Study Tracker
          </CardTitle>
          <CardDescription>
            Weekly progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-semibold text-academia-navy">{studyStats.todayHours}</span>
            <span className="text-academia-charcoal/70">hours studied today</span>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-academia-charcoal/90 font-medium">Weekly Goal</span>
              <span className="text-sm text-academia-charcoal/70">
                {studyStats.weeklyTotal} / {studyStats.weeklyGoal} hours
              </span>
            </div>
            <Progress 
              value={(studyStats.weeklyTotal / studyStats.weeklyGoal) * 100} 
              className="h-2.5" 
              indicatorClassName="bg-academia-mint" 
            />
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-academia-lavender/30">
            <div className="flex items-center">
              <Book className="h-4 w-4 text-academia-navy mr-2" />
              <span className="text-sm font-medium">Most studied subject</span>
            </div>
            <p className="mt-1 text-academia-navy font-semibold">{studyStats.mostStudiedSubject}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
