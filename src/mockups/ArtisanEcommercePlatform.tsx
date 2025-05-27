import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  ShoppingBag,
  Search,
  Heart,
  Star,
  ShoppingCart,
  Filter,
  Settings,
  User,
  Home,
  Package
} from 'lucide-react';

// Import unique font for this app
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';

const ArtisanEcommercePlatform = () => {
  const [activeTab, setActiveTab] = useState('shop');

  return (
    <MockupLayout title="Artisans United E-commerce Platform" projectId={8}>
      <style>{`
        /* Override CSS variables for unique Artisan earth-toned theme */
        .artisan-theme {
          --primary: 25 95% 39%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 25 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 25 10% 15%;
          --muted: 25 15% 95%;
          --muted-foreground: 25 10% 40%;
          --accent: 25 30% 90%;
          --accent-foreground: 25 10% 15%;
          --border: 25 15% 85%;
          --ring: 25 95% 39%;
          font-family: 'Lora', serif;
        }
        
        .artisan-theme .bg-amber-50 { background-color: hsl(25 95% 96%); }
        .artisan-theme .border-amber-200 { border-color: hsl(25 95% 86%); }
        .artisan-theme .text-amber-700 { color: hsl(25 95% 28%); }
        .artisan-theme .text-amber-500 { color: hsl(25 95% 39%); }
        .artisan-theme .text-amber-600 { color: hsl(25 95% 33%); }
        .artisan-theme .bg-amber-100 { background-color: hsl(25 95% 92%); }
        
        /* Button styling */
        .artisan-theme button[data-state="active"],
        .artisan-theme button:hover,
        .artisan-theme .bg-primary {
          background-color: hsl(25 95% 39%);
          color: white;
        }
      `}</style>
      
      <div className="artisan-theme flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-amber-50 border-r border-amber-200">
          <div className="p-4 border-b border-amber-200">
            <h2 className="text-xl font-semibold text-amber-700 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Artisans United
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'shop' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('shop')}
            >
              <Home className="mr-2 h-4 w-4" />
              Shop
            </Button>
            <Button 
              variant={activeTab === 'cart' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('cart')}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart (3)
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
              <Package className="mr-2 h-4 w-4" />
              Orders
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Filter className="mr-2 h-4 w-4" />
              Categories
            </Button>
          </nav>
          
          <div className="p-4 border-t border-amber-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-amber-700">Handcrafted with Love</h1>
              <p className="text-amber-600">Discover unique artisan creations from around the world</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-amber-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=40" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                alt="Handmade Ceramic Bowl"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-amber-700 mb-1">Handmade Ceramic Bowl</h3>
                <p className="text-sm text-gray-600 mb-2">by Sarah's Pottery</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-amber-700">$45.00</span>
                  <div className="flex items-center text-amber-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=300&fit=crop" 
                alt="Wooden Cutting Board"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-amber-700 mb-1">Walnut Cutting Board</h3>
                <p className="text-sm text-gray-600 mb-2">by Artisan Woodworks</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-amber-700">$85.00</span>
                  <div className="flex items-center text-amber-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">5.0</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1434932021253-32d97fec0d11?w=400&h=300&fit=crop" 
                alt="Knitted Scarf"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-amber-700 mb-1">Hand-Knitted Wool Scarf</h3>
                <p className="text-sm text-gray-600 mb-2">by Mountain Knits</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-amber-700">$65.00</span>
                  <div className="flex items-center text-amber-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop" 
                alt="Leather Wallet"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-amber-700 mb-1">Leather Bi-fold Wallet</h3>
                <p className="text-sm text-gray-600 mb-2">by Heritage Leather Co.</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-amber-700">$120.00</span>
                  <div className="flex items-center text-amber-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">4.7</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default ArtisanEcommercePlatform;