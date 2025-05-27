import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Bell, Settings, Search, Home } from 'lucide-react';

// Import unique font for this app
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/700.css';

const LuminaFinanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <MockupLayout title="Lumina Finance Dashboard" projectId={1}>
      <style>{`
        /* Override CSS variables for unique Lumina Finance theme */
        .lumina-theme {
          --primary: 185 84% 39%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 185 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 185 10% 15%;
          --muted: 185 15% 95%;
          --muted-foreground: 185 10% 40%;
          --accent: 185 30% 90%;
          --accent-foreground: 185 10% 15%;
          --border: 185 15% 85%;
          --ring: 185 84% 39%;
          font-family: 'IBM Plex Sans', sans-serif;
        }
        
        .lumina-theme .bg-teal-50 { background-color: hsl(174 74% 96%); }
        .lumina-theme .border-teal-200 { border-color: hsl(174 74% 86%); }
        .lumina-theme .text-teal-700 { color: hsl(174 84% 28%); }
        .lumina-theme .text-teal-500 { color: hsl(174 84% 39%); }
        .lumina-theme .text-teal-600 { color: hsl(174 84% 33%); }
        .lumina-theme .border-teal-300 { border-color: hsl(174 74% 76%); }
        .lumina-theme .focus\\:ring-teal-500:focus { --ring: 174 84% 39%; }
        .lumina-theme .focus\\:border-transparent:focus { border-color: transparent; }
        
        /* Button styling */
        .lumina-theme button[data-state="active"],
        .lumina-theme button:hover,
        .lumina-theme .bg-primary {
          background-color: hsl(174 84% 39%);
          color: white;
        }
      `}</style>
      
      <div className="lumina-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-teal-50 border-r border-teal-200">
          <div className="p-4 border-b border-teal-200">
            <h2 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
              <Home className="h-5 w-5" />
              Lumina Finance
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'portfolio' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </Button>
            <Button 
              variant={activeTab === 'transactions' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Investments
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              Advisors
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              History
            </Button>
          </nav>
          
          <div className="p-4 border-t border-teal-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-teal-700">Dashboard</h1>
              <p className="text-teal-700">Welcome back, Alex! Here's your financial summary.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-teal-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md border border-teal-300 pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-teal-600" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline font-medium text-teal-700">Alex Chen</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Portfolio Value</h3>
              <p className="text-3xl font-bold text-gray-900">$125,430</p>
              <p className="text-sm text-green-600 mt-1">+8.2% this month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Monthly Returns</h3>
              <p className="text-3xl font-bold text-gray-900">$2,845</p>
              <p className="text-sm text-green-600 mt-1">+2.3% vs last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Risk Level</h3>
              <p className="text-3xl font-bold text-gray-900">Moderate</p>
              <p className="text-sm text-teal-600 mt-1">6.4/10 score</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Goal Progress</h3>
              <p className="text-3xl font-bold text-gray-900">78%</p>
              <p className="text-sm text-teal-600 mt-1">$125K of $160K goal</p>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default LuminaFinanceDashboard;