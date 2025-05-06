
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChartBar } from "lucide-react";

// Sample grade data
const gradeData = [
  {
    month: 'Sep',
    'CS 101': 85,
    'MATH 202': 72,
    'PSYCH 101': 90,
  },
  {
    month: 'Oct',
    'CS 101': 88,
    'MATH 202': 78,
    'PSYCH 101': 92,
  },
  {
    month: 'Nov',
    'CS 101': 90,
    'MATH 202': 83,
    'PSYCH 101': 89,
  },
  {
    month: 'Dec',
    'CS 101': 92,
    'MATH 202': 86,
    'PSYCH 101': 91,
  },
];

// Course stats
const courseStats = [
  { 
    id: 1, 
    name: 'CS 101: Introduction to Programming', 
    grade: 'A-', 
    score: 92, 
    recentChange: '+2%', 
    color: '#B5EAD7',
    trend: 'up' 
  },
  { 
    id: 2, 
    name: 'MATH 202: Linear Algebra', 
    grade: 'B', 
    score: 86, 
    recentChange: '+3%', 
    color: '#FEEAA1',
    trend: 'up' 
  },
  { 
    id: 3, 
    name: 'PSYCH 101: Introduction to Psychology', 
    grade: 'A', 
    score: 91, 
    recentChange: '-1%', 
    color: '#F7C3C3',
    trend: 'down' 
  }
];

export function GradeTracker() {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm mt-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-academia-dustyblue" />
              Academic Performance
            </CardTitle>
            <CardDescription>
              Track your progress across all courses
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-academia-mint/20 text-academia-navy border-academia-mint/30">
            GPA: 3.7
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="chart">Performance Chart</TabsTrigger>
            <TabsTrigger value="courses">Course Breakdown</TabsTrigger>
          </TabsList>
          <TabsContent value="chart" className="space-y-4">
            <div className="h-[300px] w-full bg-white rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={gradeData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis domain={[50, 100]} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      border: 'none'
                    }} 
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="CS 101" 
                    stackId="1" 
                    stroke="#B5EAD7" 
                    fill="#B5EAD7" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="MATH 202" 
                    stackId="2" 
                    stroke="#FEEAA1" 
                    fill="#FEEAA1" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="PSYCH 101" 
                    stackId="3" 
                    stroke="#F7C3C3" 
                    fill="#F7C3C3" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="courses">
            <div className="space-y-4">
              {courseStats.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-center">
                    <div 
                      className="w-1.5 h-12 rounded-full mr-3" 
                      style={{ backgroundColor: course.color }}
                    ></div>
                    <div>
                      <h4 className="font-medium text-academia-navy">{course.name}</h4>
                      <p className="text-sm text-academia-charcoal/70">Current Grade: {course.grade}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-academia-navy">{course.score}%</p>
                      <p className="text-xs text-academia-charcoal/70">Total Score</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium ${course.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {course.recentChange}
                      </p>
                      <p className="text-xs text-academia-charcoal/70">Change</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
