import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Search,
  MapPin,
  Calendar,
  Heart,
  Star,
  Home,
  User,
  Settings,
  Compass,
  Bookmark
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/700.css';

const NomadNestBookingPlatform = () => {
  const [activeTab, setActiveTab] = useState('explore');

  return (
    <MockupLayout title="NomadNest Travel Booking Platform" projectId={4}>
      <style>{`
        /* Override CSS variables for unique NomadNest orange/amber theme */
        .nomadnest-theme {
          --primary: 38 92% 60%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 38 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 38 10% 15%;
          --muted: 38 15% 95%;
          --muted-foreground: 38 10% 40%;
          --accent: 38 30% 90%;
          --accent-foreground: 38 10% 15%;
          --border: 38 15% 85%;
          --ring: 38 92% 60%;
          font-family: 'Rubik', sans-serif;
        }
        
        .nomadnest-theme .bg-orange-50 { background-color: hsl(38 92% 96%); }
        .nomadnest-theme .border-orange-200 { border-color: hsl(38 92% 86%); }
        .nomadnest-theme .text-orange-700 { color: hsl(38 92% 28%); }
        .nomadnest-theme .text-orange-500 { color: hsl(38 92% 60%); }
        .nomadnest-theme .text-orange-600 { color: hsl(38 92% 45%); }
        .nomadnest-theme .border-orange-300 { border-color: hsl(38 92% 76%); }
        .nomadnest-theme .bg-orange-100 { background-color: hsl(38 92% 92%); }
        
        /* Button styling */
        .nomadnest-theme button[data-state="active"],
        .nomadnest-theme button:hover,
        .nomadnest-theme .bg-primary {
          background-color: hsl(38 92% 60%);
          color: white;
        }
      `}</style>
      
      <div className="nomadnest-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-orange-50 border-r border-orange-200">
          <div className="p-4 border-b border-orange-200">
            <h2 className="text-xl font-semibold text-orange-700 flex items-center gap-2">
              <Compass className="h-5 w-5" />
              NomadNest
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'explore' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('explore')}
            >
              <Compass className="mr-2 h-4 w-4" />
              Explore
            </Button>
            <Button 
              variant={activeTab === 'bookings' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('bookings')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              My Bookings
            </Button>
            <Button 
              variant={activeTab === 'wishlist' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('wishlist')}
            >
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              Saved
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Host
            </Button>
          </nav>
          
          <div className="p-4 border-t border-orange-200 space-y-2">
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
              <h1 className="text-2xl font-semibold text-orange-700">Discover Your Next Adventure</h1>
              <p className="text-orange-600">Find unique places to stay around the world</p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-sm border">
              <div className="flex-1">
                <label className="block text-sm font-medium text-orange-700 mb-2">Where</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-orange-700 mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-orange-500" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-orange-700 mb-2">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-orange-500" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-6">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" 
                  alt="Cozy Mountain Cabin"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Cozy Mountain Cabin</h3>
                    <div className="flex items-center text-orange-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Aspen, Colorado</p>
                  <p className="text-orange-700 font-semibold">$180/night</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" 
                  alt="Beachfront Villa"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Beachfront Villa</h3>
                    <div className="flex items-center text-orange-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Malibu, California</p>
                  <p className="text-orange-700 font-semibold">$350/night</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop" 
                  alt="Urban Loft"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Modern Urban Loft</h3>
                    <div className="flex items-center text-orange-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">4.7</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">New York, NY</p>
                  <p className="text-orange-700 font-semibold">$220/night</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default NomadNestBookingPlatform;