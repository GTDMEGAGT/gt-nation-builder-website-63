
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Sponsor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Why I Need a Sponsor</h1>
            <p className="text-xl opacity-90 mb-8">
              I've built the skeleton. I need belief.
            </p>
            <Button asChild className="btn-secondary">
              <a href="#sponsor-options">Become a Sponsor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* My Journey So Far */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">What I've Built With Limited Resources</h2>
            <p className="mb-6 text-gray-700">
              Using only a smartphone and determination, I've managed to create content that resonates with thousands of people, develop a blueprint for an ecosystem of platforms, and build a passionate community.
            </p>
            <p className="mb-6 text-gray-700">
              I've mastered the art of maximizing minimal resources, creating high-quality content despite significant limitations, and building authentic connections with my audience.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-4">Current Achievements:</h3>
              <ul className="space-y-3">
                {[
                  "Built an engaged audience of 1,000+ followers",
                  "Created 50+ educational videos using only a smartphone",
                  "Developed comprehensive trading strategies and methodology",
                  "Designed blueprints for integrated ecosystem platforms",
                  "Helped dozens of community members improve their trading results"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-700">
              Imagine what could be possible with the right tools, resources, and mentorship to properly execute my vision.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="My Journey So Far" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* What I Need */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What I Need to Scale My Impact</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              To transform my vision into reality and impact lives at scale, I need specific tools, resources, and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Equipment",
                icon: "💻",
                items: [
                  "Professional laptop (MacBook Pro or similar)",
                  "Video production equipment (camera, mic, lighting)",
                  "Multiple smart devices for cross-platform testing",
                  "Trading monitors for market analysis"
                ]
              },
              {
                category: "Software & Tools",
                icon: "🛠️",
                items: [
                  "Professional trading platform subscriptions",
                  "Design and development software",
                  "Video editing and production tools",
                  "Analytics and data visualization tools"
                ]
              },
              {
                category: "Mentorship & Support",
                icon: "🤝",
                items: [
                  "Technical mentorship for platform development",
                  "Business guidance and strategic planning",
                  "Network connections within the industry",
                  "Access to learning resources and communities"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-navy mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="btn-secondary inline-flex items-center">
              <a href="#" download>
                Download Detailed Vision Blueprint (PDF) <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="section" id="sponsor-options">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Sponsorship Options</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Join me on this journey and help bring this vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              tier: "Partner",
              price: "$500",
              description: "Initial support to get started with basic tools",
              features: [
                "Personal thank you video",
                "Logo/name on website",
                "Monthly progress updates",
                "Early access to new content"
              ],
              highlighted: false
            },
            {
              tier: "Accelerator",
              price: "$2,000",
              description: "Comprehensive support for significant progress",
              features: [
                "Everything in Partner tier",
                "Monthly strategy call",
                "Logo in video content",
                "Exclusive beta access to platforms",
                "Quarterly detailed impact report"
              ],
              highlighted: true
            },
            {
              tier: "Visionary",
              price: "$5,000+",
              description: "Full ecosystem development partnership",
              features: [
                "Everything in Accelerator tier",
                "Advisory board position",
                "Co-creation opportunities",
                "Profit sharing options available",
                "Full ecosystem branding integration"
              ],
              highlighted: false
            }
          ].map((tier, index) => (
            <div key={index} className={`rounded-lg overflow-hidden ${
              tier.highlighted 
                ? "border-2 border-gold shadow-lg relative" 
                : "border border-gray-200 shadow-md"
            }`}>
              {tier.highlighted && (
                <div className="bg-gold text-navy font-bold py-2 px-4 text-center">
                  Recommended
                </div>
              )}
              <div className={`p-6 ${tier.highlighted ? "bg-navy text-white" : "bg-white"}`}>
                <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                <div className="text-2xl font-bold mb-2">{tier.price}</div>
                <p className={`mb-6 ${tier.highlighted ? "text-gray-200" : "text-gray-600"}`}>
                  {tier.description}
                </p>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className={`mr-2 ${tier.highlighted ? "text-gold" : "text-navy"}`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={tier.highlighted ? "btn-secondary w-full" : "btn-primary w-full"}>
                  <a href="#contact-form">Select {tier.tier}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16" id="contact-form">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="heading-lg text-center mb-8">Become a Sponsor</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization (if applicable)</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Your company or organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="sponsorship" className="block text-sm font-medium text-gray-700 mb-1">Sponsorship Tier</label>
                  <select 
                    id="sponsorship" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  >
                    <option value="">Select a sponsorship tier</option>
                    <option value="partner">Partner ($500)</option>
                    <option value="accelerator">Accelerator ($2,000)</option>
                    <option value="visionary">Visionary ($5,000+)</option>
                    <option value="custom">Custom amount</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Share any specific interests or questions"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="updates" className="mr-2" />
                  <label htmlFor="updates" className="text-sm text-gray-700">Receive updates on the ecosystem progress</label>
                </div>
                
                <Button type="submit" className="btn-primary w-full">Submit Sponsorship Inquiry</Button>
                
                <p className="text-center text-sm text-gray-600">
                  I'll respond personally to your inquiry within 24 hours to discuss next steps
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Potential Impact */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">The Impact of Your Support</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Here's how your sponsorship will create ripple effects across communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Knowledge Accessibility",
              description: "Enable free and low-cost education to reach thousands who lack access to quality financial and business education."
            },
            {
              title: "Economic Empowerment",
              description: "Help individuals develop trading and investing skills that can create financial independence and generational wealth."
            },
            {
              title: "Technology Innovation",
              description: "Support the development of tools specifically designed for African markets and infrastructure challenges."
            },
            {
              title: "Job Creation",
              description: "As the ecosystem grows, it will create jobs in content production, software development, and education."
            },
            {
              title: "Community Building",
              description: "Foster supportive communities where knowledge sharing and collaboration drive collective success."
            },
            {
              title: "Continental Impact",
              description: "Build a model that can be replicated across regions to maximize impact throughout Africa."
            }
          ].map((impact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gold">
              <h3 className="font-bold text-lg mb-3">{impact.title}</h3>
              <p className="text-gray-700">{impact.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Sponsor;
