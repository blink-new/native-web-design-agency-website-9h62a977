import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Bed, MapPin, Star, Wifi, Coffee, Leaf } from 'lucide-react';
import '@fontsource/playfair-display/700.css';
import '@fontsource/quicksand/400.css';

const amenities = [
  { icon: <Bed className="text-emerald-700 w-6 h-6" />, label: 'Luxury Suites' },
  { icon: <Wifi className="text-emerald-700 w-6 h-6" />, label: 'Free High-Speed WiFi' },
  { icon: <Coffee className="text-emerald-700 w-6 h-6" />, label: 'Breakfast Included' },
  { icon: <Leaf className="text-emerald-700 w-6 h-6" />, label: 'Eco-Friendly' },
];

const testimonials = [
  {
    name: 'Sophie L.',
    text: 'The most beautiful boutique hotel I have ever stayed at. The staff were so welcoming and the breakfast was divine!',
    rating: 5
  },
  {
    name: 'Carlos M.',
    text: 'Perfect location, stunning rooms, and the garden is a hidden gem. Will definitely return!',
    rating: 5
  }
];

export default function HotelWebsiteDemo() {
  return (
    <MockupLayout title="Casa Verde Boutique Hotel" projectId={12}>
      <style>{`
        .casa-verde-theme {
          --primary: 154 64% 32%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 154 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 154 10% 15%;
          --muted: 154 15% 95%;
          --muted-foreground: 154 10% 40%;
          --accent: 44 100% 60%;
          --accent-foreground: 44 10% 15%;
          --border: 154 15% 85%;
          --ring: 154 64% 32%;
          font-family: 'Quicksand', sans-serif;
        }
        .casa-verde-theme h1, .casa-verde-theme h2, .casa-verde-theme h3 {
          font-family: 'Playfair Display', serif;
        }
        .casa-verde-theme .bg-emerald-50 { background-color: hsl(154 64% 96%); }
        .casa-verde-theme .text-emerald-700 { color: hsl(154 64% 32%); }
        .casa-verde-theme .bg-emerald-700 { background-color: hsl(154 64% 32%); }
        .casa-verde-theme .bg-gold { background-color: hsl(44 100% 60%); }
        .casa-verde-theme .text-gold { color: hsl(44 100% 40%); }
      `}</style>
      <div className="casa-verde-theme min-h-screen bg-emerald-50">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200" alt="Casa Verde Hotel" className="absolute inset-0 w-full h-full object-cover object-center brightness-75" />
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Casa Verde</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow">Boutique Hotel & Garden Retreat</p>
            <Button className="bg-gold text-emerald-700 text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition">Book Your Stay</Button>
          </div>
        </section>
        {/* Amenities */}
        <section className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 text-center">
          {amenities.map((a, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-emerald-100">
              <div className="mb-3">{a.icon}</div>
              <h3 className="text-lg font-bold text-emerald-700 mb-1">{a.label}</h3>
            </div>
          ))}
        </section>
        {/* About & Gallery */}
        <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Welcome to Casa Verde</h2>
            <p className="text-lg text-emerald-900 mb-6">Nestled in the heart of the city, Casa Verde offers a tranquil escape with lush gardens, artisanal breakfasts, and luxury suites. Experience the perfect blend of comfort, style, and nature.</p>
            <Button className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-emerald-800 transition">See Rooms</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400" alt="Room" className="rounded-lg shadow object-cover h-40 w-full" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400" alt="Garden" className="rounded-lg shadow object-cover h-40 w-full" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400" alt="Breakfast" className="rounded-lg shadow object-cover h-40 w-full" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400" alt="Lobby" className="rounded-lg shadow object-cover h-40 w-full" />
          </div>
        </section>
        {/* Testimonials */}
        <section className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-8">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-8 border border-emerald-100">
                <div className="flex justify-center mb-2">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="text-gold w-5 h-5 inline" />)}
                </div>
                <p className="text-emerald-900 mb-4">“{t.text}”</p>
                <div className="font-bold text-emerald-700">{t.name}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Location CTA */}
        <section className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-emerald-700 rounded-2xl py-10 px-6 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visit Us</h2>
            <div className="flex items-center justify-center gap-2 text-white mb-4">
              <MapPin className="w-5 h-5" />
              123 Garden Lane, San Miguel
            </div>
            <Button className="bg-gold text-emerald-700 text-lg px-8 py-3 rounded-full font-semibold shadow hover:bg-yellow-400 transition">Get Directions</Button>
          </div>
        </section>
      </div>
    </MockupLayout>
  );
}
