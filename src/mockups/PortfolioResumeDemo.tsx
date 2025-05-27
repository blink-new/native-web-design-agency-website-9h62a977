import MockupLayout from './MockupLayout';
import { Button } from '../components/ui/button';
import { Mail, Github, Linkedin, Code2, Star } from 'lucide-react';
import '@fontsource/poppins/700.css';
import '@fontsource/fira-mono/400.css';

const projects = [
  {
    title: 'Brand Identity for Flowly',
    desc: 'Developed a new brand system and website for a SaaS startup.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400',
    link: '#'
  },
  {
    title: 'E-commerce UI Kit',
    desc: 'Designed a modular UI kit for a fashion retailer’s online store.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400',
    link: '#'
  },
  {
    title: 'Personal Blog Platform',
    desc: 'Built a fast, accessible blog platform with custom CMS.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400',
    link: '#'
  }
];

const skills = [
  'React', 'TypeScript', 'Figma', 'TailwindCSS', 'Node.js', 'Framer Motion', 'Accessibility', 'Branding'
];

export default function PortfolioResumeDemo() {
  return (
    <MockupLayout title="Ava Lee Portfolio & Resume" projectId={13}>
      <style>{`
        .ava-lee-theme {
          --primary: 320 80% 54%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 222 15% 15%;
          --card: 0 0% 100%;
          --card-foreground: 222 15% 15%;
          --muted: 222 15% 95%;
          --muted-foreground: 222 10% 40%;
          --accent: 320 80% 90%;
          --accent-foreground: 320 80% 54%;
          --border: 222 15% 85%;
          --ring: 320 80% 54%;
          font-family: 'Poppins', sans-serif;
        }
        .ava-lee-theme h1, .ava-lee-theme h2, .ava-lee-theme h3 {
          font-family: 'Poppins', sans-serif;
        }
        .ava-lee-theme .font-mono { font-family: 'Fira Mono', monospace; }
        .ava-lee-theme .bg-pink-50 { background-color: hsl(320 80% 96%); }
        .ava-lee-theme .text-pink-600 { color: hsl(320 80% 54%); }
        .ava-lee-theme .bg-pink-600 { background-color: hsl(320 80% 54%); }
        .ava-lee-theme .hover\:bg-pink-700:hover { background-color: hsl(320 80% 44%); }
      `}</style>
      <div className="ava-lee-theme min-h-screen bg-pink-50">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 pt-20 pb-12 text-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200" alt="Ava Lee" className="mx-auto rounded-full w-32 h-32 object-cover mb-6 border-4 border-pink-600 shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">Ava Lee</h1>
          <p className="text-lg md:text-xl text-pink-600 mb-4 font-mono">Designer & Frontend Developer</p>
          <p className="text-base text-gray-700 mb-6">I craft beautiful, accessible web experiences for brands and startups. Let’s build something memorable together.</p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="border-pink-600 text-pink-600 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </Button>
            <Button variant="outline" className="border-pink-600 text-pink-600 flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button variant="outline" className="border-pink-600 text-pink-600 flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
        </section>
        {/* Projects */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <a key={i} href={p.link} className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition border border-pink-100">
                <img src={p.image} alt={p.title} className="rounded-lg mb-4 object-cover h-32 w-full" />
                <h3 className="text-lg font-bold text-pink-600 mb-1">{p.title}</h3>
                <p className="text-gray-700 mb-2">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-pink-600 font-mono text-xs">View <Code2 className="w-3 h-3" /></span>
              </a>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="bg-white border border-pink-100 text-pink-600 rounded-full px-4 py-2 font-mono text-sm shadow">{skill}</span>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8">Testimonials</h2>
          <div className="bg-white rounded-xl shadow p-8 border border-pink-100 mb-6">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, j) => <Star key={j} className="text-pink-600 w-5 h-5 inline" />)}
            </div>
            <p className="text-gray-700 mb-4">“Ava is a rare blend of creative and technical. She delivered our project ahead of schedule and exceeded expectations in every way.”</p>
            <div className="font-bold text-pink-600">— Jamie R., Product Lead</div>
          </div>
        </section>
        {/* Contact */}
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">Let’s Connect</h2>
          <form className="bg-white rounded-xl shadow p-8 border border-pink-100 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600" />
            <input type="email" placeholder="Your Email" className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600" />
            <textarea placeholder="Message" className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 min-h-[100px]" />
            <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full font-semibold transition">Send Message</Button>
          </form>
        </section>
      </div>
    </MockupLayout>
  );
}
