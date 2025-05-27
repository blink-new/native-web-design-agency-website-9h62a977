import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { ArrowRight, Cloud, CheckCircle, Zap, Shield } from 'lucide-react';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

const features = [
  {
    icon: <Zap className="text-sky-500 w-6 h-6" />,
    title: 'Lightning Fast',
    desc: 'Instant cloud sync and blazing performance for teams of any size.'
  },
  {
    icon: <Shield className="text-sky-500 w-6 h-6" />,
    title: 'Enterprise Security',
    desc: 'End-to-end encryption and SSO. Your data is always protected.'
  },
  {
    icon: <CheckCircle className="text-sky-500 w-6 h-6" />,
    title: '99.99% Uptime',
    desc: 'Global CDN and redundant infrastructure. Always online.'
  }
];

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/Spotify_logo_without_text.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
];

export default function SaasLandingPageDemo() {
  return (
    <MockupLayout title="Cloudly SaaS Landing Page" projectId={11}>
      <style>{`
        .cloudly-theme {
          --primary: 200 100% 55%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 200 10% 15%;
          --card: 0 0% 100%;
          --card-foreground: 200 10% 15%;
          --muted: 200 15% 95%;
          --muted-foreground: 200 10% 40%;
          --accent: 200 30% 90%;
          --accent-foreground: 200 10% 15%;
          --border: 200 15% 85%;
          --ring: 200 100% 55%;
          font-family: 'Raleway', sans-serif !important;
        }
        .cloudly-theme h1, .cloudly-theme h2, .cloudly-theme h3, .cloudly-theme h4, .cloudly-theme h5, .cloudly-theme h6 {
          font-family: 'Raleway', sans-serif !important;
        }
        .cloudly-theme .bg-sky-50 { background-color: hsl(200 100% 97%); }
        .cloudly-theme .text-sky-500 { color: hsl(200 100% 55%); }
        .cloudly-theme .bg-sky-500 { background-color: hsl(200 100% 55%); }
        .cloudly-theme .hover\:bg-sky-600:hover { background-color: hsl(200 100% 45%); }
        .cloudly-theme .text-sky-900 { color: hsl(200 100% 20%); }
        .cloudly-theme .border-sky-200 { border-color: hsl(200 100% 85%); }
        .cloudly-theme .shadow-sky { box-shadow: 0 8px 32px 0 hsl(200 100% 55% / 0.10); }
      `}</style>
      <div className="cloudly-theme min-h-screen bg-sky-50">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-sky-200 text-sky-500 font-semibold text-sm shadow-sky">
              <Cloud className="w-5 h-5" />
              Cloudly
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-sky-900 mb-6 leading-tight">Supercharge Your Team’s Productivity in the Cloud</h1>
          <p className="text-lg md:text-xl text-sky-900/80 mb-8 max-w-2xl mx-auto">
            Cloudly is the all-in-one platform for modern teams. Collaborate, sync, and automate—all in real time, from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white text-base px-8 py-3 rounded-full font-semibold shadow-sky transition">
              Get Started Free
            </Button>
            <Button variant="outline" className="text-sky-500 border-sky-200 bg-white text-base px-8 py-3 rounded-full font-semibold">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80 mt-8">
            {logos.map((logo, i) => (
              <img key={i} src={logo} alt="logo" className="h-8 w-auto grayscale" />
            ))}
          </div>
        </section>
        {/* Features */}
        <section className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sky p-8 text-center border border-sky-200">
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">{f.title}</h3>
              <p className="text-sky-900/80">{f.desc}</p>
            </div>
          ))}
        </section>
        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="bg-sky-500 rounded-2xl py-12 px-6 shadow-sky">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-lg text-white/90 mb-8">Sign up in seconds. No credit card required.</p>
            <Button className="bg-white text-sky-500 hover:bg-sky-100 text-lg px-10 py-3 rounded-full font-semibold transition">
              Start Free Trial
            </Button>
          </div>
        </section>
      </div>
    </MockupLayout>
  );
}