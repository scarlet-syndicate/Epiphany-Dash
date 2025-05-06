
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch" },
  { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
  { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats" },
];

export function GreetingSection() {
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [date, setDate] = useState("");
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting("Good morning");
      } else if (hour < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      }));
    };

    // Set random quote
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    // Initial updates
    updateGreeting();
    updateTime();
    
    // Set up intervals for updates
    const greetingInterval = setInterval(updateGreeting, 60000); // every minute
    const timeInterval = setInterval(updateTime, 1000); // every second
    
    return () => {
      clearInterval(greetingInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-academia-lavender/20 shadow-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-academia-navy animate-slide-in">
              {greeting}, Sarah
            </h1>
            <div className="flex items-center text-academia-charcoal/70 space-x-2">
              <Clock className="h-4 w-4" />
              <span>{currentTime} • {date}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 px-4 py-3 bg-academia-lavender/20 rounded-lg max-w-lg">
            <p className="text-academia-charcoal/90 italic text-sm md:text-base">"{randomQuote.text}"</p>
            <p className="text-right text-academia-charcoal/70 text-xs md:text-sm font-medium mt-1">— {randomQuote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
