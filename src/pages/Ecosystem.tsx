
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Ecosystem = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">My Ecosystem Vision</h1>
            <p className="text-xl opacity-90 mb-8">
              A comprehensive network of platforms designed to educate, empower, and create economic opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>The Vision: An Integrated Ecosystem</h2>
            <p>
              My vision is to create an interconnected ecosystem of digital platforms that work together to provide a comprehensive solution for personal growth, financial independence, and community building.
            </p>
            <p>
              Rather than isolated tools or content, this ecosystem approach means that each platform enhances the others, creating a seamless experience that addresses multiple needs simultaneously.
            </p>

            <div className="my-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-center">Ecosystem Overview</h3>
              {/* Simple Ecosystem Diagram/Visualization */}
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="flex flex-col items-center">
                  <div className="bg-navy text-white rounded-full p-6 w-32 h-32 flex items-center justify-center text-center">
                    <span className="font-bold">GT Ecosystem</span>
                  </div>
                  <div className="w-1 h-8 bg-navy-light my-4"></div>
                  
                  {/* Ecosystem Components */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                      {
                        title: "Content Platforms",
                        description: "Knowledge distribution through multiple channels",
                        elements: ["YouTube", "X (Twitter)", "TikTok", "Blog"]
                      },
                      {
                        title: "Trading Tools",
                        description: "Financial empowerment & analysis",
                        elements: ["Trading App", "Market Analysis", "Risk Management", "Investment Strategies"]
                      },
                      {
                        title: "Education Hub",
                        description: "Structured learning & development",
                        elements: ["Courses", "Mentorship", "Community", "Resource Library"]
                      }
                    ].map((platform, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
                        <h4 className="font-bold text-lg mb-2">{platform.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
                        <ul className="space-y-1 text-sm">
                          {platform.elements.map((element, idx) => (
                            <li key={idx} className="text-navy">{element}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* Ecosystem Benefits */}
                  <div className="w-1 h-8 bg-navy-light my-4"></div>
                  <div className="bg-gold text-navy rounded-lg p-4 w-full text-center">
                    <span className="font-bold">User Benefits: Knowledge → Skills → Financial Independence → Community Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Ecosystem Components</h2>
          
          {/* Content Creation Platform */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg" 
                    alt="Content Creation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="text-sm font-medium text-gold mb-2">Active & Growing</div>
                  <h3 className="heading-md mb-4">Content Creation Platforms</h3>
                  <p className="text-gray-700 mb-6">
                    The foundation of the ecosystem is our multi-platform content strategy that delivers valuable insights, education, and inspiration across various formats.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">YouTube Channel</h4>
                      <p className="text-sm text-gray-600">
                        In-depth educational videos on trading, financial literacy, and personal development
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">X (Twitter)</h4>
                      <p className="text-sm text-gray-600">
                        Daily insights, market analysis, and educational threads
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">TikTok</h4>
                      <p className="text-sm text-gray-600">
                        Short-form educational content and inspiration for new audiences
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Blog & Newsletter</h4>
                      <p className="text-sm text-gray-600">
                        Detailed articles and exclusive insights for subscribers
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="inline-flex items-center">
                    <a href="/content">Explore Content <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trading Platform */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg" 
                    alt="Trading Platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="text-sm font-medium text-blue-600 mb-2">Coming Soon</div>
                  <h3 className="heading-md mb-4">Trading & Investment Platforms</h3>
                  <p className="text-gray-700 mb-6">
                    A suite of tools designed to help users apply their knowledge through practical trading and investment activities.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Market Analysis App</h4>
                      <p className="text-sm text-gray-600">
                        Real-time data and analysis for forex, futures, and stock markets
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Risk Management Tools</h4>
                      <p className="text-sm text-gray-600">
                        Position sizing, risk calculation, and portfolio management features
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Arbitrage Opportunities</h4>
                      <p className="text-sm text-gray-600">
                        Tools to identify and execute cross-market arbitrage strategies
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Trading Journal</h4>
                      <p className="text-sm text-gray-600">
                        Track performance, identify patterns, and improve trading decisions
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="inline-flex items-center" variant="outline">
                    <a href="#notify">Get Notified <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Hub */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg" 
                    alt="Education Hub" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="text-sm font-medium text-yellow-600 mb-2">In Development</div>
                  <h3 className="heading-md mb-4">Education & Growth Hub</h3>
                  <p className="text-gray-700 mb-6">
                    A comprehensive learning platform that provides structured education, mentorship, and resources for personal and professional growth.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Structured Courses</h4>
                      <p className="text-sm text-gray-600">
                        Step-by-step learning paths for various skills and domains
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Mentorship Program</h4>
                      <p className="text-sm text-gray-600">
                        Connect with experienced mentors for guidance and feedback
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Resource Library</h4>
                      <p className="text-sm text-gray-600">
                        Curated collection of tools, templates, and reference materials
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-bold mb-2">Community Features</h4>
                      <p className="text-sm text-gray-600">
                        Forums, accountability groups, and networking opportunities
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="inline-flex items-center" variant="outline">
                    <a href="#notify">Get Early Access <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Timeline */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Implementation Timeline</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A strategic roadmap for bringing the ecosystem vision to life
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-0 ml-6 h-full border-r-2 border-dashed border-navy"></div>
            
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1: Foundation",
                  time: "Already Implemented",
                  description: "Content creation across multiple platforms, establishing audience and credibility",
                  items: [
                    "YouTube channel creation",
                    "Social media presence",
                    "Initial community building",
                    "Content strategy development"
                  ]
                },
                {
                  phase: "Phase 2: Expansion",
                  time: "Q3-Q4 2024",
                  description: "Content scaling, initial tools development, and community structure",
                  items: [
                    "Increase content production with better equipment",
                    "Develop prototype for trading tools",
                    "Create structured community forums",
                    "Establish partnerships with experts"
                  ]
                },
                {
                  phase: "Phase 3: Integration",
                  time: "Q1-Q2 2025",
                  description: "Launch of initial trading tools and education platform beta",
                  items: [
                    "Release trading analysis app v1.0",
                    "Launch educational membership platform",
                    "Implement cross-platform integration",
                    "Expand team with key technical roles"
                  ]
                },
                {
                  phase: "Phase 4: Scaling",
                  time: "Q3-Q4 2025",
                  description: "Complete ecosystem integration and market expansion",
                  items: [
                    "Full feature trading platform release",
                    "Comprehensive educational curriculum",
                    "Mobile applications for all platforms",
                    "Regional expansion across Africa"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="md:flex">
                  <div className="md:w-1/4 pl-12 md:pl-0 relative">
                    <div className="hidden md:block absolute left-0 top-0 -ml-1 mt-2 w-4 h-4 rounded-full bg-navy border-4 border-white"></div>
                    <h3 className="font-bold text-lg">{phase.phase}</h3>
                    <div className="text-gold font-medium">{phase.time}</div>
                  </div>
                  <div className="md:w-3/4 mt-4 md:mt-0 pl-12 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="btn-primary">
            <a href="/sponsor">Support This Vision</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Ecosystem;
