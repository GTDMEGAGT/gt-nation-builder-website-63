
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SocialIcons from '@/components/SocialIcons';
import Layout from '@/components/Layout';

// Components for each section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="heading-xl mb-6">From Nothing to <span className="text-gold">Nation-Builder</span></h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              I'm building an ecosystem that will impact lives across Africa and beyond.
            </p>
            <p className="mb-8 text-gray-200">
              Visionary entrepreneur on a mission to create platforms that empower, educate, and enable economic freedom for the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-secondary">
                <Link to="/sponsor">Sponsor My Vision</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                <Link to="/ecosystem">View Blueprint</Link>
              </Button>
            </div>
            <div className="mt-8">
              <SocialIcons iconColor="white" />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gold">
                <img 
                  src="/placeholder.svg" 
                  alt="GT - Visionary Entrepreneur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-lg font-bold">
                GT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="section" id="mission">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">My Mission & Story</h2>
        <div className="w-16 h-1 bg-gold mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="My Journey" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h3 className="heading-md mb-6">The Journey of Persistence</h3>
          <p className="mb-4 text-gray-700">
            My path hasn't been straightforward. Starting with nothing but determination, faith, and a vision, I've faced countless obstacles that would have stopped most people in their tracks.
          </p>
          <p className="mb-4 text-gray-700">
            Through grit, resilience, and an unwavering belief in my purpose, I've laid the foundation for what will become a transformative ecosystem of platforms designed to empower others.
          </p>
          <p className="mb-6 text-gray-700">
            My mission is clear: create accessible paths to knowledge, financial independence, and personal growth for ambitious individuals across Africa and beyond.
          </p>
          <Button asChild>
            <Link to="/story" className="inline-flex items-center">
              Read My Full Story <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="heading-md text-center mb-8">Key Milestones</h3>
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 -ml-[1px] h-full border-l-2 border-dashed border-navy"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 relative">
            {[
              {year: "2019", title: "The Beginning", description: "Started content creation with just a mobile phone"},
              {year: "2020", title: "First Online Platform", description: "Launched initial education content reaching over 1,000 people"},
              {year: "2022", title: "Trading Community", description: "Built a community of aspiring traders & financial enthusiasts"},
              {year: "2023", title: "Ecosystem Blueprint", description: "Developed comprehensive vision for interconnected platforms"},
              {year: "2024", title: "Current Phase", description: "Seeking sponsorship to scale impact and technology infrastructure"}
            ].map((item, index) => (
              <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-gold font-bold mb-2">{item.year}</div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-navy border-2 border-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EcosystemPreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">My Ecosystem</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A comprehensive network of platforms designed to educate, empower, and create economic opportunities
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Content Creation",
              description: "Educational and inspirational content across YouTube, X, TikTok and other platforms",
              status: "Active",
              icon: "📱"
            },
            {
              title: "Trading Platforms",
              description: "Analytics and tools for forex, futures, stocks and digital asset trading",
              status: "Coming Soon",
              icon: "📈"
            },
            {
              title: "Education Hub",
              description: "Comprehensive learning platform for personal and professional growth",
              status: "In Development",
              icon: "🎓"
            }
          ].map((platform, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <div className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
                platform.status === "Active" 
                  ? "bg-green-100 text-green-800" 
                  : platform.status === "Coming Soon" 
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {platform.status}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="btn-primary">
            <Link to="/ecosystem">Explore Full Ecosystem</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const SponsorshipCTA = () => {
  return (
    <section className="section">
      <div className="bg-navy text-white rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Why I Need a Sponsor</h2>
            <p className="mb-6">
              I've built the skeleton of something extraordinary with limited resources. Now I need belief and support to expand my impact across Africa.
            </p>
            <p className="mb-6">
              With just a mobile phone, I've created content reaching thousands. Imagine what's possible with proper equipment and mentorship.
            </p>
            <div className="space-y-3 mb-8">
              <h4 className="font-bold text-lg">Current Needs:</h4>
              <ul className="space-y-2">
                {["Professional laptop for development & content creation", 
                  "Smart devices for testing across platforms",
                  "Trading tools & software subscriptions",
                  "Technical mentorship & industry connections"].map((need, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-secondary">
                <Link to="/sponsor">Become a Sponsor</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                <a href="#" download>Download Vision Blueprint (PDF)</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/placeholder.svg" 
              alt="Support My Vision" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Latest Content</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Insights, updates, and educational resources from across my platforms
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img 
                src="/placeholder.svg" 
                alt={`Content preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gold font-medium mb-2">
                {index === 0 ? "YouTube Video" : index === 1 ? "X Thread" : "Blog Post"}
              </div>
              <h3 className="font-bold text-lg mb-2">
                {index === 0 
                  ? "How I Started With Nothing" 
                  : index === 1 
                  ? "5 Trading Principles That Changed My Life" 
                  : "Building a Vision Bigger Than Yourself"}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {index === 0
                  ? "In this video I share my journey from humble beginnings to building multiple platforms..."
                  : index === 1
                  ? "A detailed thread on the fundamental principles that have guided my trading journey..."
                  : "The importance of creating impact that outlasts you and how to start building today..."}
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-navy">
                <Link to="/content" className="inline-flex items-center">
                  View Content <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild className="btn-primary">
          <Link to="/content">View Content Hub</Link>
        </Button>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-lg mb-6">Let's Connect</h2>
          <p className="text-gray-700 mb-8">
            Have questions about my vision? Want to discuss potential sponsorship? Or simply interested in connecting? Reach out using any of these channels.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-navy text-white p-3 rounded-md mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <a href="mailto:contact@example.com" className="text-navy hover:text-gold transition-colors">
                  contact@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-navy text-white p-3 rounded-md mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp</h4>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                  Click to message on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-navy text-white p-3 rounded-md mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Social Media</h4>
                <SocialIcons className="mt-2" iconColor="#1A1F2C" />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="subscribe" className="mr-2" />
                <label htmlFor="subscribe" className="text-sm text-gray-700">Subscribe to updates</label>
              </div>
              <Button type="submit" className="btn-primary w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <EcosystemPreview />
      <SponsorshipCTA />
      <ContentPreview />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
