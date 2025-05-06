
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Accessibility, 
  Palette, 
  LayoutDashboard, 
  Focus, 
  Star 
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(false);
  const [theme, setTheme] = useState("default");
  const [focusMode, setFocusMode] = useState(false);
  
  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
    document.documentElement.style.fontSize = `${value[0]}px`;
    
    toast({
      title: "Font size updated",
      description: `Text size set to ${value[0]}px`,
    });
  };
  
  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked);
    // In a real implementation, we would toggle a class on the root element
    if (checked) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    toast({
      title: `High contrast ${checked ? 'enabled' : 'disabled'}`,
      description: `Display settings updated`,
    });
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
    
    toast({
      title: "Theme updated",
      description: `${value.charAt(0).toUpperCase() + value.slice(1)} theme applied`,
    });
  };

  const handleFocusModeChange = (checked: boolean) => {
    setFocusMode(checked);
    
    toast({
      title: `Focus mode ${checked ? 'enabled' : 'disabled'}`,
      description: `Distraction-free mode ${checked ? 'active' : 'inactive'}`,
    });
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-playfair font-semibold text-academia-navy mb-6">
        Settings
      </h1>
      
      <Tabs defaultValue="accessibility" className="w-full">
        <TabsList className="mb-6 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="accessibility" className="flex items-center gap-2">
            <Accessibility size={16} />
            <span className="hidden sm:inline">Accessibility</span>
          </TabsTrigger>
          <TabsTrigger value="personalization" className="flex items-center gap-2">
            <Palette size={16} />
            <span className="hidden sm:inline">Personalization</span>
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex items-center gap-2">
            <LayoutDashboard size={16} />
            <span className="hidden sm:inline">Layout</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="accessibility" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Options</CardTitle>
              <CardDescription>
                Customize the application to improve accessibility and readability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="font-size">Text Size: {fontSize}px</Label>
                    <span className="text-xs text-muted-foreground">
                      {fontSize < 16 ? 'Small' : fontSize < 20 ? 'Medium' : 'Large'}
                    </span>
                  </div>
                  <Slider
                    id="font-size"
                    min={12}
                    max={24}
                    step={1}
                    defaultValue={[fontSize]}
                    onValueChange={handleFontSizeChange}
                    className="w-full"
                  />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="high-contrast" className="flex-1">
                    High Contrast Mode
                    <p className="text-xs text-muted-foreground mt-1">
                      Increases contrast for better visibility
                    </p>
                  </Label>
                  <Switch
                    id="high-contrast"
                    checked={highContrast}
                    onCheckedChange={handleHighContrastChange}
                  />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="screen-reader" className="flex-1">
                    Screen Reader Support
                    <p className="text-xs text-muted-foreground mt-1">
                      Optimizes content for screen readers
                    </p>
                  </Label>
                  <Switch
                    id="screen-reader"
                    checked={screenReader}
                    onCheckedChange={setScreenReader}
                  />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="keyboard-shortcuts" className="flex-1">
                    Keyboard Shortcuts
                    <p className="text-xs text-muted-foreground mt-1">
                      Enable navigation using keyboard shortcuts
                    </p>
                  </Label>
                  <Switch
                    id="keyboard-shortcuts"
                    checked={keyboardShortcuts}
                    onCheckedChange={setKeyboardShortcuts}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="personalization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Color Theme</Label>
                  <ToggleGroup 
                    type="single" 
                    value={theme} 
                    onValueChange={(value) => value && handleThemeChange(value)}
                    className="flex flex-wrap gap-3"
                  >
                    <ToggleGroupItem value="default" className="rounded-lg px-4 py-2 bg-academia-lavender">
                      Default
                    </ToggleGroupItem>
                    <ToggleGroupItem value="mint" className="rounded-lg px-4 py-2 bg-academia-mint">
                      Mint
                    </ToggleGroupItem>
                    <ToggleGroupItem value="coral" className="rounded-lg px-4 py-2 bg-academia-coral">
                      Coral
                    </ToggleGroupItem>
                    <ToggleGroupItem value="yellow" className="rounded-lg px-4 py-2 bg-academia-yellow">
                      Sunrise
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                <div className="flex items-center justify-between space-x-2 pt-4">
                  <Label htmlFor="focus-mode" className="flex-1">
                    Focus Mode
                    <p className="text-xs text-muted-foreground mt-1">
                      Hide non-essential elements for better concentration
                    </p>
                  </Label>
                  <Switch
                    id="focus-mode"
                    checked={focusMode}
                    onCheckedChange={handleFocusModeChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Goal Tracking</CardTitle>
              <CardDescription>
                Set personal academic goals and track your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Goal Priority</Label>
                  <RadioGroup defaultValue="balanced" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="balanced" id="balanced" />
                      <Label htmlFor="balanced">Balanced Learning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="grades" id="grades" />
                      <Label htmlFor="grades">Grade Improvement</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="skills" id="skills" />
                      <Label htmlFor="skills">Skill Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom Objectives</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Layout</CardTitle>
              <CardDescription>
                Customize the arrangement of your dashboard components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-muted text-center cursor-pointer hover:border-academia-dustyblue transition-colors">
                    <Focus className="mx-auto mb-2" />
                    <span className="text-sm">Study Timer</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-muted text-center cursor-pointer hover:border-academia-dustyblue transition-colors">
                    <Star className="mx-auto mb-2" />
                    <span className="text-sm">Grades</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-muted text-center cursor-pointer hover:border-academia-dustyblue transition-colors">
                    <LayoutDashboard className="mx-auto mb-2" />
                    <span className="text-sm">Calendar</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic mt-2">
                  Drag and drop widgets to rearrange your dashboard (coming soon)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default SettingsPage;
