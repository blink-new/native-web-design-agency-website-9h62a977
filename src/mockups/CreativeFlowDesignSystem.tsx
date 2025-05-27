import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { 
  Palette,
  Type,
  Layers,
  Grid,
  Zap,
  Settings,
  User,
  Folder,
  Search
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';

const CreativeFlowDesignSystem = () => {
  const [activeTab, setActiveTab] = useState('components');

  return (
    <MockupLayout title="CreativeFlow Design System" projectId={2}>
      <style>{`
        /* Override CSS variables for unique CreativeFlow violet theme */
        .creativeflow-theme {
          --primary: 271 91% 65%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 271 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 271 10% 15%;
          --muted: 271 15% 95%;
          --muted-foreground: 271 10% 40%;
          --accent: 271 30% 90%;
          --accent-foreground: 271 10% 15%;
          --border: 271 15% 85%;
          --ring: 271 91% 65%;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .creativeflow-theme .bg-violet-50 { background-color: hsl(271 91% 96%); }
        .creativeflow-theme .border-violet-200 { border-color: hsl(271 91% 86%); }
        .creativeflow-theme .text-violet-700 { color: hsl(271 91% 28%); }
        .creativeflow-theme .text-violet-500 { color: hsl(271 91% 65%); }
        .creativeflow-theme .text-violet-600 { color: hsl(271 91% 45%); }
        
        /* Button styling */
        .creativeflow-theme button[data-state="active"],
        .creativeflow-theme button:hover,
        .creativeflow-theme .bg-primary {
          background-color: hsl(271 91% 65%);
          color: white;
        }
      `}</style>
      
      <div className="creativeflow-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-violet-50 border-r border-violet-200">
          <div className="p-4 border-b border-violet-200">
            <h2 className="text-xl font-semibold text-violet-700 flex items-center gap-2">
              <Palette className="h-5 w-5" />
              CreativeFlow
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'components' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('components')}
            >
              <Layers className="mr-2 h-4 w-4" />
              Components
            </Button>
            <Button 
              variant={activeTab === 'tokens' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('tokens')}
            >
              <Palette className="mr-2 h-4 w-4" />
              Design Tokens
            </Button>
            <Button 
              variant={activeTab === 'typography' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('typography')}
            >
              <Type className="mr-2 h-4 w-4" />
              Typography
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Grid className="mr-2 h-4 w-4" />
              Layout
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Zap className="mr-2 h-4 w-4" />
              Playground
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Folder className="mr-2 h-4 w-4" />
              Resources
            </Button>
          </nav>
          
          <div className="p-4 border-t border-violet-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Team
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-violet-700">Design System Components</h1>
              <p className="text-violet-600">Build consistent and beautiful interfaces</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-violet-500" />
              <input
                type="text"
                placeholder="Search components..."
                className="pl-10 pr-4 py-2 border border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-violet-700 mb-4">Buttons</h3>
              <div className="space-y-3">
                <Button className="w-full bg-violet-600 hover:bg-violet-700">Primary Button</Button>
                <Button variant="outline" className="w-full">Secondary Button</Button>
                <Button variant="ghost" className="w-full">Ghost Button</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-violet-700 mb-4">Color Palette</h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="h-8 bg-violet-100 rounded"></div>
                <div className="h-8 bg-violet-200 rounded"></div>
                <div className="h-8 bg-violet-400 rounded"></div>
                <div className="h-8 bg-violet-600 rounded"></div>
                <div className="h-8 bg-violet-800 rounded"></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-violet-700 mb-4">Typography</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-violet-700">Heading 1</p>
                <p className="text-xl font-semibold text-violet-700">Heading 2</p>
                <p className="text-lg font-medium text-violet-700">Heading 3</p>
                <p className="text-base text-gray-600">Body text</p>
                <p className="text-sm text-gray-500">Caption text</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default CreativeFlowDesignSystem;