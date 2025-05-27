import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';

// SEO: Add react-helmet for dynamic metadata
import { Helmet } from 'react-helmet';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO-optimized blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '7 Web Design Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these cutting-edge web design trends that are shaping the digital landscape this year in Prescott, Arizona and beyond.',
      content: `
        <p>At Native Web Design in Prescott, Arizona, we keep our finger on the pulse of the latest web design trends. In 2024, immersive scrolling, dark mode, micro-interactions, and accessibility-first design are leading the way. Businesses in Prescott and across the country are embracing these trends to create more engaging, user-friendly websites that stand out in a crowded digital landscape.</p>
        <h2>1. Immersive Scrolling Experiences</h2>
        <p>Story-driven scrolling and parallax effects are captivating users and keeping them engaged longer.</p>
        <h2>2. Dark Mode as Standard</h2>
        <p>Dark mode is now a must-have for modern websites, offering both style and comfort for users.</p>
        <h2>3. Micro-interactions and Animation</h2>
        <p>Subtle animations provide feedback and delight users, making websites feel more alive.</p>
        <h2>4. Voice User Interfaces</h2>
        <p>With smart speakers and voice search on the rise, voice-friendly websites are gaining traction.</p>
        <h2>5. 3D Elements</h2>
        <p>Three-dimensional graphics add depth and a wow factor to digital experiences.</p>
        <h2>6. Accessibility-First Design</h2>
        <p>Accessible design is not just a trend—it's a necessity for reaching all users and improving SEO.</p>
        <h2>7. Performance Optimization</h2>
        <p>Fast, optimized websites rank higher on Google and keep visitors happy.</p>
        <p>Want to implement these trends for your Prescott business? <a href="/contact" class="text-primary-500 underline">Contact Native Web Design</a> for a free consultation.</p>
      `,
      author: 'Alex Johnson',
      date: 'June 15, 2024',
      readTime: '6 min read',
      category: 'Web Design Trends',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    },
    {
      id: 2,
      title: 'How to Create a Website That Converts Visitors into Customers',
      excerpt: 'Learn the key elements of conversion-focused web design and how Native Web Design helps Prescott businesses turn visitors into loyal customers.',
      content: `
        <p>For businesses in Prescott, Arizona, a beautiful website is only effective if it converts visitors into customers. At Native Web Design, we focus on:</p>
        <ul>
          <li><strong>Clear Value Proposition:</strong> Your site should instantly communicate your unique value.</li>
          <li><strong>Strategic Call-to-Actions:</strong> Guide users to take action with prominent, well-designed buttons.</li>
          <li><strong>Simplified Navigation:</strong> Easy-to-use menus help visitors find what they need fast.</li>
          <li><strong>Trust Signals:</strong> Show testimonials, client logos, and security badges to build credibility.</li>
          <li><strong>Mobile Optimization:</strong> Over 60% of Prescott web traffic is mobile—your site must shine on every device.</li>
          <li><strong>Fast Loading Speed:</strong> Speed is crucial for SEO and conversions.</li>
          <li><strong>Clear Contact Information:</strong> Make it easy for customers to reach you in Prescott or anywhere.</li>
        </ul>
        <p>Ready to boost your website’s conversion rate? <a href="/contact" class="text-primary-500 underline">Contact Native Web Design</a> for a free site audit.</p>
      `,
      author: 'Sarah Parker',
      date: 'May 22, 2024',
      readTime: '8 min read',
      category: 'Small Business',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800'
    },
    {
      id: 3,
      title: 'Case Study: How We Increased Organic Traffic by 200% for a Local Business',
      excerpt: 'See how Native Web Design helped a Prescott, Arizona business double their leads and dominate local search results.',
      content: `
        <p>Evergreen Landscaping, a Prescott-based business, partnered with Native Web Design to overhaul their online presence. Here’s how we did it:</p>
        <h2>Technical SEO Improvements</h2>
        <p>We rebuilt their website for speed, mobile performance, and search engine visibility, using schema markup and a clean site structure.</p>
        <h2>Content Strategy</h2>
        <p>We created keyword-rich landing pages and a blog focused on Prescott landscaping tips and seasonal advice.</p>
        <h2>Local SEO Focus</h2>
        <p>Optimized their Google Business Profile and built local citations to boost visibility in Prescott and surrounding areas.</p>
        <h2>Visual Content Enhancement</h2>
        <p>Professional photos and before/after galleries showcased their work and built trust with new clients.</p>
        <h2>The Results</h2>
        <ul>
          <li>Organic traffic up 200%</li>
          <li>Leads doubled in 6 months</li>
          <li>Top 3 rankings for "Prescott landscaping" and related keywords</li>
        </ul>
        <p>Want results like this for your Prescott business? <a href="/contact" class="text-primary-500 underline">Let’s talk!</a></p>
      `,
      author: 'Michael Chen',
      date: 'April 10, 2024',
      readTime: '10 min read',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800'
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog | Native Web Design Prescott, Arizona</title>
        <meta name="description" content="Web design tips, SEO strategies, and case studies from Native Web Design in Prescott, Arizona. Learn how to grow your business online." />
        <meta name="keywords" content="Prescott web design, Native Web Design, Arizona web design, SEO, small business, website tips, case study" />
        <meta property="og:title" content="Blog | Native Web Design Prescott, Arizona" />
        <meta property="og:description" content="Web design tips, SEO strategies, and case studies from Native Web Design in Prescott, Arizona." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nativeweb.xyz/blog" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              Insights, guides, and stories about web design, business growth, and digital trends in Prescott, Arizona.
            </p>
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border border-secondary-100 hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-serif font-medium mb-2 hover:text-primary-500 transition-colors">
                      <Link to={
                        post.id === 1 ? "/blog/web-design-trends-2024" :
                        post.id === 2 ? "/blog/website-conversion-strategies" :
                        post.id === 3 ? "/blog/local-business-seo-case-study" :
                        "/blog"
                      }>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-secondary-700 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary-500">
                        {post.category}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary-500 group">
                        <Link to={
                          post.id === 1 ? "/blog/web-design-trends-2024" :
                          post.id === 2 ? "/blog/website-conversion-strategies" :
                          post.id === 3 ? "/blog/local-business-seo-case-study" :
                          "/blog"
                        } className="flex items-center">
                          Read more
                          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif font-medium mb-2">No results found</h3>
              <p className="text-secondary-700 mb-6">
                We couldn't find any posts matching your search. Try different keywords or browse all our articles.
              </p>
              <Button onClick={() => setSearchTerm('')}>
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Get the latest web design tips, business strategies, and industry news delivered directly to your inbox from Native Web Design in Prescott, Arizona.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-secondary-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;