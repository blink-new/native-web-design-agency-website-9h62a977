import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { 
  ChefHat,
  Search,
  Heart,
  Clock,
  Users,
  Star,
  Settings,
  User,

  BookOpen
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';

const CulinaryCompanionApp = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  return (
    <MockupLayout title="Culinary Companion Recipe App" projectId={6}>
      <style>{`
        /* Override CSS variables for unique Culinary Companion emerald/gold theme */
        .culinary-theme {
          --primary: 158 64% 52%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 158 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 158 10% 15%;
          --muted: 158 15% 95%;
          --muted-foreground: 158 10% 40%;
          --accent: 158 30% 90%;
          --accent-foreground: 158 10% 15%;
          --border: 158 15% 85%;
          --ring: 158 64% 52%;
          font-family: 'Merriweather', serif;
        }
        
        .culinary-theme .bg-emerald-50 { background-color: hsl(158 64% 96%); }
        .culinary-theme .border-emerald-200 { border-color: hsl(158 64% 86%); }
        .culinary-theme .text-emerald-700 { color: hsl(158 64% 28%); }
        .culinary-theme .text-emerald-500 { color: hsl(158 64% 52%); }
        .culinary-theme .text-emerald-600 { color: hsl(158 64% 40%); }
        
        /* Button styling */
        .culinary-theme button[data-state="active"],
        .culinary-theme button:hover,
        .culinary-theme .bg-primary {
          background-color: hsl(158 64% 52%);
          color: white;
        }
      `}</style>
      
      <div className="culinary-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-emerald-50 border-r border-emerald-200">
          <div className="p-4 border-b border-emerald-200">
            <h2 className="text-xl font-semibold text-emerald-700 flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              Culinary Companion
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'recipes' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('recipes')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Recipes
            </Button>
            <Button 
              variant={activeTab === 'favorites' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('favorites')}
            >
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <ChefHat className="mr-2 h-4 w-4" />
              My Recipes
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Clock className="mr-2 h-4 w-4" />
              Meal Planning
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Users className="mr-2 h-4 w-4" />
              Shopping List
            </Button>
          </nav>
          
          <div className="p-4 border-t border-emerald-200 space-y-2">
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
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-emerald-700">Discover Delicious Recipes</h1>
            <p className="text-emerald-600">Find your next favorite dish</p>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-emerald-500" />
              <input
                type="text"
                placeholder="Search recipes, ingredients..."
                className="w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop" 
                alt="Italian Pasta"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700 mb-2">Creamy Tuscan Pasta</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    25 min
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    4 servings
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    4.8
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">View Recipe</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop" 
                alt="Avocado Toast"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700 mb-2">Gourmet Avocado Toast</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    10 min
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    2 servings
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    4.6
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">View Recipe</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop" 
                alt="Chocolate Cake"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700 mb-2">Decadent Chocolate Cake</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    60 min
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    8 servings
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    4.9
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">View Recipe</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default CulinaryCompanionApp;