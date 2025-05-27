import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Leaf, Bell, Settings, Factory } from 'lucide-react';

// Import unique font for this app
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const EcoTrackSustainabilityDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <MockupLayout title="EcoTrack Sustainability Dashboard" projectId={5}>
      <style>{`
        /* Override CSS variables for unique EcoTrack green theme */
        .ecotrack-theme {
          --primary: 142 76% 36%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 142 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 142 10% 15%;
          --muted: 142 15% 95%;
          --muted-foreground: 142 10% 40%;
          --accent: 142 30% 90%;
          --accent-foreground: 142 10% 15%;
          --border: 142 15% 85%;
          --ring: 142 76% 36%;
          font-family: 'Montserrat', sans-serif;
        }
        
        .ecotrack-theme .bg-green-50 { background-color: hsl(142 76% 96%); }
        .ecotrack-theme .border-green-200 { border-color: hsl(142 76% 86%); }
        .ecotrack-theme .text-green-700 { color: hsl(142 76% 28%); }
        .ecotrack-theme .text-green-500 { color: hsl(142 76% 39%); }
        .ecotrack-theme .text-green-600 { color: hsl(142 76% 33%); }
        .ecotrack-theme .border-green-300 { border-color: hsl(142 76% 76%); }
        
        /* Button styling */
        .ecotrack-theme button[data-state="active"],
        .ecotrack-theme button:hover,
        .ecotrack-theme .bg-primary {
          background-color: hsl(142 76% 36%);
          color: white;
        }
      `}</style>
      
      <div className="ecotrack-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-green-50 border-r border-green-200">
          <div className="p-4 border-b border-green-200">
            <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              EcoTrack
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'overview' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('overview')}
            >
              <Factory className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button 
              variant={activeTab === 'emissions' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('emissions')}
            >
              Emissions
            </Button>
            <Button 
              variant={activeTab === 'energy' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('energy')}
            >
              Energy
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Water & Waste
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Goals & Targets
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Reports
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Initiatives
            </Button>
          </nav>
          
          <div className="p-4 border-t border-green-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Team
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-green-700">Sustainability Overview</h1>
            <p className="text-green-600">Track your environmental impact and progress towards sustainability goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-green-700 mb-2">Carbon Footprint</h3>
              <p className="text-3xl font-bold text-gray-900">2.4t CO₂</p>
              <p className="text-sm text-green-600 mt-1">-15% vs last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-green-700 mb-2">Energy Usage</h3>
              <p className="text-3xl font-bold text-gray-900">8,450 kWh</p>
              <p className="text-sm text-green-600 mt-1">68% renewable</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-green-700 mb-2">Waste Diverted</h3>
              <p className="text-3xl font-bold text-gray-900">850 kg</p>
              <p className="text-sm text-green-600 mt-1">85% recycled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-green-700 mb-2">Sustainability Score</h3>
              <p className="text-3xl font-bold text-gray-900">8.2/10</p>
              <p className="text-sm text-green-600 mt-1">+0.4 this quarter</p>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default EcoTrackSustainabilityDashboard;