import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
            About Native Web Design
          </h1>
          <p className="text-lg md:text-xl text-secondary-700 mb-8">
            At Native Web Design, we believe that great design isn’t just about looks—it’s about creating experiences that feel intuitive, seamless, and uniquely you.
          </p>
          <p className="text-lg md:text-xl text-secondary-700 mb-8">
            We’re a web design studio passionate about building bold, responsive, and user-focused websites that help brands stand out and connect meaningfully with their audience. Whether you're launching a new business, rebranding, or ready to elevate your digital presence, we’re here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-2">Custom Web Design</h3>
              <p className="text-secondary-700 mb-4">Tailored websites built from scratch to reflect your brand's identity and goals.</p>
            </div>
            <div className="bg-secondary-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-2">Responsive Development</h3>
              <p className="text-secondary-700 mb-4">Your site will look great and perform flawlessly across all devices.</p>
            </div>
            <div className="bg-secondary-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-2">UI/UX Design</h3>
              <p className="text-secondary-700 mb-4">Clean, thoughtful interfaces that make it easy for visitors to engage and convert.</p>
            </div>
            <div className="bg-secondary-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-2">Branding & Strategy</h3>
              <p className="text-secondary-700 mb-4">More than just a logo—we help define your voice, story, and digital direction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg text-secondary-700 max-w-2xl mx-auto">
            <li><span className="font-semibold text-primary-500">People-first approach</span> – We listen closely and communicate clearly.</li>
            <li><span className="font-semibold text-primary-500">Design with purpose</span> – Every detail serves a function, not just aesthetics.</li>
            <li><span className="font-semibold text-primary-500">Modern tools & techniques</span> – We stay on top of the latest trends, tech, and best practices.</li>
            <li><span className="font-semibold text-primary-500">Collaboration at the core</span> – We work with you, not just for you.</li>
          </ul>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-lg md:text-xl text-secondary-700 mb-8">
            We’re not just designers—we’re your digital partners. From idea to launch and beyond, Native Web Design is committed to helping you succeed online with a site that feels as native to your brand as it is to the web.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let’s turn your ideas into a digital reality. <Link to="/contact" className="underline font-semibold hover:text-white">Contact us</Link> or <Link to="/portfolio" className="underline font-semibold hover:text-white">check out our portfolio</Link> to see what we’ve built.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
