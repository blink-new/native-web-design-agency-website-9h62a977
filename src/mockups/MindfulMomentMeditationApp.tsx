import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Play,
  Pause,
  Home,
  Clock,
  Heart,
  Settings,
  User,
  BarChart3,
  Moon,
  Sun
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/700.css';

const MindfulMomentMeditationApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MockupLayout title="MindfulMoment Meditation App" projectId={3}>
      <style>{`
        /* Override CSS variables for unique MindfulMoment purple theme */
        .mindful-theme {
          --primary: 280 84% 70%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 280 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 280 10% 15%;
          --muted: 280 15% 95%;
          --muted-foreground: 280 10% 40%;
          --accent: 280 30% 90%;
          --accent-foreground: 280 10% 15%;
          --border: 280 15% 85%;
          --ring: 280 84% 70%;
          font-family: 'Quicksand', sans-serif;
        }
        
        .mindful-theme .bg-purple-50 { background-color: hsl(280 84% 96%); }
        .mindful-theme .border-purple-200 { border-color: hsl(280 84% 86%); }
        .mindful-theme .text-purple-700 { color: hsl(280 84% 28%); }
        .mindful-theme .text-purple-500 { color: hsl(280 84% 70%); }
        .mindful-theme .text-purple-600 { color: hsl(280 84% 45%); }
        .mindful-theme .border-purple-300 { border-color: hsl(280 84% 76%); }
        .mindful-theme .bg-purple-100 { background-color: hsl(280 84% 92%); }
        
        /* Button styling */
        .mindful-theme button[data-state="active"],
        .mindful-theme button:hover,
        .mindful-theme .bg-primary {
          background-color: hsl(280 84% 70%);
          color: white;
        }
        
        /* Special gradient background */
        .mindful-theme .meditation-gradient {
          background: linear-gradient(135deg, hsl(280 84% 96%) 0%, hsl(280 84% 92%) 100%);
        }
      `}</style>
      
      <div className="mindful-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-purple-50 border-r border-purple-200">
          <div className="p-4 border-b border-purple-200">
            <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <Moon className="h-5 w-5" />
              MindfulMoment
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'home' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('home')}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button 
              variant={activeTab === 'meditations' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('meditations')}
            >
              <Play className="mr-2 h-4 w-4" />
              Meditations
            </Button>
            <Button 
              variant={activeTab === 'progress' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('progress')}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Progress
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Clock className="mr-2 h-4 w-4" />
              Timer
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Sun className="mr-2 h-4 w-4" />
              Sleep
            </Button>
          </nav>
          
          <div className="p-4 border-t border-purple-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-purple-700">Good evening, Emma</h1>
              <p className="text-purple-600">Take a moment to breathe and be present</p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-purple-700 mb-2">Current Streak</h3>
              <p className="text-3xl font-bold text-gray-900">7 days</p>
              <p className="text-sm text-purple-600 mt-1">Keep going! ✨</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-purple-700 mb-2">Total Sessions</h3>
              <p className="text-3xl font-bold text-gray-900">42</p>
              <p className="text-sm text-purple-600 mt-1">This month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-purple-700 mb-2">Minutes Meditated</h3>
              <p className="text-3xl font-bold text-gray-900">350</p>
              <p className="text-sm text-purple-600 mt-1">This week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-purple-700 mb-2">Mindfulness Level</h3>
              <p className="text-3xl font-bold text-gray-900">Zen</p>
              <p className="text-sm text-purple-600 mt-1">Level 8/10</p>
            </div>
          </div>
          
          <div className="meditation-gradient rounded-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">Evening Reflection</h2>
              <p className="text-purple-600 mb-6">A 10-minute guided meditation to wind down your day</p>
              
              <div className="flex items-center justify-center mb-6">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                </button>
              </div>
              
              <div className="w-full max-w-md mx-auto">
                <div className="flex justify-between text-sm text-purple-600 mb-2">
                  <span>2:30</span>
                  <span>10:00</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-medium mb-2">Stress Relief</h3>
                <p className="text-sm text-gray-600 mb-4">5 min • Breathing</p>
                <Button variant="outline" size="sm">Start Session</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-medium mb-2">Focus Boost</h3>
                <p className="text-sm text-gray-600 mb-4">15 min • Concentration</p>
                <Button variant="outline" size="sm">Start Session</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-medium mb-2">Better Sleep</h3>
                <p className="text-sm text-gray-600 mb-4">20 min • Relaxation</p>
                <Button variant="outline" size="sm">Start Session</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default MindfulMomentMeditationApp;