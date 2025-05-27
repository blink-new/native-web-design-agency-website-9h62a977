import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  MessageCircle,
  Calendar,
  User,
  Users,
  Home,
  Dumbbell,
  Settings,
  BarChart3
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/700.css';

const FitSyncTrainingPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <MockupLayout title="FitSync Personal Training Platform" projectId={7}>
      <style>{`
        /* Override CSS variables for unique FitSync blue/indigo theme */
        .fitsync-theme {
          --primary: 231 84% 60%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 231 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 231 10% 15%;
          --muted: 231 15% 95%;
          --muted-foreground: 231 10% 40%;
          --accent: 231 30% 90%;
          --accent-foreground: 231 10% 15%;
          --border: 231 15% 85%;
          --ring: 231 84% 60%;
          font-family: 'Barlow', sans-serif;
        }
        
        .fitsync-theme .bg-indigo-50 { background-color: hsl(231 84% 96%); }
        .fitsync-theme .border-indigo-200 { border-color: hsl(231 84% 86%); }
        .fitsync-theme .text-indigo-700 { color: hsl(231 84% 28%); }
        .fitsync-theme .text-indigo-500 { color: hsl(231 84% 60%); }
        .fitsync-theme .text-indigo-600 { color: hsl(231 84% 45%); }
        .fitsync-theme .border-indigo-300 { border-color: hsl(231 84% 76%); }
        
        /* Button styling */
        .fitsync-theme button[data-state="active"],
        .fitsync-theme button:hover,
        .fitsync-theme .bg-primary {
          background-color: hsl(231 84% 60%);
          color: white;
        }
      `}</style>
      
      <div className="fitsync-theme flex min-h-screen bg-gray-50">
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-indigo-700">Welcome back, Sarah!</h1>
              <p className="text-indigo-600">Let's crush your fitness goals today</p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=48" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-indigo-700 mb-2">Weekly Workouts</h3>
              <p className="text-3xl font-bold text-gray-900">5/6</p>
              <p className="text-sm text-indigo-600 mt-1">1 more to go!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-indigo-700 mb-2">Calories Burned</h3>
              <p className="text-3xl font-bold text-gray-900">2,450</p>
              <p className="text-sm text-indigo-600 mt-1">This week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-indigo-700 mb-2">Personal Best</h3>
              <p className="text-3xl font-bold text-gray-900">225 lbs</p>
              <p className="text-sm text-indigo-600 mt-1">Deadlift PR</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-indigo-700 mb-2">Streak</h3>
              <p className="text-3xl font-bold text-gray-900">12 days</p>
              <p className="text-sm text-indigo-600 mt-1">Keep it up! </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Today's Workout</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Upper Body Strength</h3>
                <span className="text-sm text-indigo-600">45 min</span>
              </div>
              <p className="text-gray-600 mb-4">Focus on building strength in your chest, shoulders, and arms with compound movements.</p>
              <div className="flex gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Start Workout</Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </main>
        
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-2 md:hidden">
          <div className="container mx-auto max-w-lg">
            <div className="flex justify-around">
              <Button 
                variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'dashboard' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <Home className="h-5 w-5 mb-1" />
                <span className="text-xs">Home</span>
              </Button>
              
              <Button 
                variant={activeTab === 'workouts' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'workouts' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('workouts')}
              >
                <Dumbbell className="h-5 w-5 mb-1" />
                <span className="text-xs">Workouts</span>
              </Button>
              
              <Button 
                variant={activeTab === 'progress' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'progress' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('progress')}
              >
                <BarChart3 className="h-5 w-5 mb-1" />
                <span className="text-xs">Progress</span>
              </Button>
              
              <Button 
                variant={activeTab === 'trainers' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'trainers' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('trainers')}
              >
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs">Trainers</span>
              </Button>
              
              <Button 
                variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'profile' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5 mb-1" />
                <span className="text-xs">Profile</span>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </MockupLayout>
  );
};

export default FitSyncTrainingPlatform;