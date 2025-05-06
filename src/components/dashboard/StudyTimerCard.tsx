
import { useState, useEffect } from "react";
import { Clock, Play, Pause, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Timer presets (in minutes)
const TIMER_PRESETS = [
  { label: "25 min", value: 25 },
  { label: "45 min", value: 45 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
];

// Course options
const COURSE_OPTIONS = [
  { label: "CS 101: Programming", value: "cs101" },
  { label: "MATH 202: Linear Algebra", value: "math202" },
  { label: "PSYCH 101: Psychology", value: "psych101" },
];

export function StudyTimerCard() {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(TIMER_PRESETS[0].value.toString());
  const [selectedCourse, setSelectedCourse] = useState(COURSE_OPTIONS[0].value);
  const [timeLeft, setTimeLeft] = useState(TIMER_PRESETS[0].value * 60); // in seconds
  const [totalTime, setTotalTime] = useState(TIMER_PRESETS[0].value * 60); // in seconds

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress percentage
  const progress = 100 - (timeLeft / totalTime) * 100;

  // Handle preset change
  const handlePresetChange = (value: string) => {
    const newTime = parseInt(value) * 60;
    setSelectedPreset(value);
    setTimeLeft(newTime);
    setTotalTime(newTime);
    if (isRunning) {
      setIsRunning(false);
    }
  };

  // Handle timer start/pause
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(parseInt(selectedPreset) * 60);
  };

  // Timer effect
  useEffect(() => {
    let interval: number;
    
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play sound or notify here when timer is done
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm mt-6">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Clock className="h-5 w-5 text-academia-dustyblue" />
          Study Timer
        </CardTitle>
        <CardDescription>
          Focus with the Pomodoro technique
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-academia-charcoal mb-1.5 block">
                Timer Duration
              </label>
              <Select value={selectedPreset} onValueChange={handlePresetChange}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {TIMER_PRESETS.map((preset) => (
                    <SelectItem key={preset.value} value={preset.value.toString()}>
                      {preset.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-academia-charcoal mb-1.5 block">
                Subject
              </label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {COURSE_OPTIONS.map((course) => (
                    <SelectItem key={course.value} value={course.value}>
                      {course.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-academia-lavender/20 flex items-center justify-center relative mb-6">
              <svg className="w-full h-full absolute top-0 left-0 -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="#D8D5DB"
                  strokeWidth="6"
                  strokeDasharray="553"
                  strokeDashoffset="0"
                  className="opacity-30"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="#7FCDEE"
                  strokeWidth="6"
                  strokeDasharray="553"
                  strokeDashoffset={553 - (553 * progress) / 100}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="z-10 text-center">
                <div className="text-4xl font-bold text-academia-navy">{formatTime(timeLeft)}</div>
                <div className="text-sm text-academia-charcoal/70 mt-1">
                  {isRunning ? "Focusing..." : "Ready to focus"}
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={toggleTimer}
                className="bg-academia-dustyblue hover:bg-academia-dustyblue/80 text-white"
              >
                {isRunning ? <Pause className="mr-1 h-4 w-4" /> : <Play className="mr-1 h-4 w-4" />}
                {isRunning ? "Pause" : "Start"}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetTimer}
                className="border-academia-lavender hover:bg-academia-lavender/20"
              >
                <RotateCcw className="mr-1 h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
