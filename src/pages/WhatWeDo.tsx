
import { Link } from 'react-router-dom';
import { ArrowRight, Code, BarChart, Database, LineChart, Palette, Users, Video, Laptop, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features 
}: { 
  title: string; 
  description: string; 
  icon: JSX.Element; 
  features: string[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in">
      <div className="p-6">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="text-blue-500 mr-2">✓</div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full">
          <Link to="/courses">Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex items-start animate-fade-in">
      <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">What We Do</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Comprehensive digital education and services for the modern economy
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a range of services designed to equip you with the skills and knowledge needed to thrive in the digital world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Code Calling" 
            description="Tech bootcamp & coding with accountability partners" 
            icon={<Code size={32} />}
            features={[
              "Structured coding curriculum",
              "Pair programming sessions",
              "Weekly accountability check-ins",
              "Real-world project assignments"
            ]}
          />
          
          <ServiceCard 
            title="Brand Building" 
            description="Helping brands earn trust and visibility online" 
            icon={<BarChart size={32} />}
            features={[
              "Brand identity development",
              "Digital presence strategy",
              "Content planning & creation",
              "Trust building techniques"
            ]}
          />
          
          <ServiceCard 
            title="Digital Business Ecosystem" 
            description="Guidance for building sustainable digital businesses" 
            icon={<Database size={32} />}
            features={[
              "Business model creation",
              "Digital product development",
              "Ecosystem strategy & planning",
              "Integration of multiple platforms"
            ]}
          />
          
          <ServiceCard 
            title="Monetization Mentorship" 
            description="Learn how to monetize your digital skills" 
            icon={<LineChart size={32} />}
            features={[
              "Revenue stream identification",
              "Pricing strategy development",
              "Sales funnel creation",
              "Sustainable business practices"
            ]}
          />
          
          <ServiceCard 
            title="Creative Economy Support" 
            description="Resources and tools for digital creators" 
            icon={<Palette size={32} />}
            features={[
              "Content creator toolkit",
              "Audience building strategies",
              "Monetization channels",
              "Creator-business partnerships"
            ]}
          />
          
          <ServiceCard 
            title="Community Building" 
            description="Creating engaged digital communities" 
            icon={<Users size={32} />}
            features={[
              "Community design & planning",
              "Engagement strategies",
              "Moderation & management",
              "Growth & retention tactics"
            ]}
          />
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our methodology for delivering exceptional digital education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <ProcessStep 
              number={1} 
              title="Assessment & Goal Setting" 
              description="We start by understanding your current skills and setting clear, achievable goals for your learning journey."
            />
            
            <ProcessStep 
              number={2} 
              title="Customized Learning Path" 
              description="Based on your goals, we create a personalized curriculum tailored to your specific needs and aspirations."
            />
            
            <ProcessStep 
              number={3} 
              title="Hands-On Learning" 
              description="Our approach focuses on practical, project-based learning where you build real-world applications and solutions."
            />
            
            <ProcessStep 
              number={4} 
              title="Mentorship & Support" 
              description="You'll receive ongoing guidance from experienced mentors who provide feedback and help overcome challenges."
            />
            
            <ProcessStep 
              number={5} 
              title="Community Engagement" 
              description="Learn alongside peers, collaborate on projects, and build a network of fellow digital creators."
            />
            
            <ProcessStep 
              number={6} 
              title="Application & Implementation" 
              description="Apply your skills to real projects, building your portfolio and establishing your presence in the digital space."
            />
          </div>
        </div>
      </section>

      {/* Technologies We Teach */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Technologies We Teach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of the cutting-edge technologies and tools covered in our programs
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "React", icon: <Code size={24} /> },
            { name: "Node.js", icon: <Code size={24} /> },
            { name: "Python", icon: <Code size={24} /> },
            { name: "Flutter", icon: <Smartphone size={24} /> },
            { name: "Figma", icon: <Palette size={24} /> },
            { name: "Firebase", icon: <Database size={24} /> },
            { name: "AWS", icon: <Database size={24} /> },
            { name: "Git", icon: <Code size={24} /> },
            { name: "Solidity", icon: <Code size={24} /> },
            { name: "MongoDB", icon: <Database size={24} /> },
            { name: "Next.js", icon: <Code size={24} /> },
            { name: "TailwindCSS", icon: <Code size={24} /> },
            { name: "TypeScript", icon: <Code size={24} /> },
            { name: "WordPress", icon: <Code size={24} /> },
            { name: "Premiere Pro", icon: <Video size={24} /> },
            { name: "Photoshop", icon: <Palette size={24} /> },
            { name: "Trading Tools", icon: <LineChart size={24} /> },
            { name: "Analytics", icon: <BarChart size={24} /> }
          ].map((tech, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center shadow hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
              <div className="text-blue-500 mb-2">{tech.icon}</div>
              <div className="font-medium">{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Success Stories</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              See how our programs have transformed careers and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex T.",
                before: "Struggling to find tech employment",
                after: "Full-stack developer at a leading startup",
                quote: "The Code Calling program gave me both the skills and confidence to pursue my dream career in tech."
              },
              {
                name: "Sarah K.",
                before: "Small business with no online presence",
                after: "Thriving e-commerce brand with loyal customers",
                quote: "The Brand Building program transformed how I connect with customers online. My business has grown 300% since graduating."
              },
              {
                name: "Michael J.",
                before: "Creative with no monetization strategy",
                after: "Profitable content creator with multiple income streams",
                quote: "I learned how to turn my passion into a sustainable business through the Monetization Mentorship program."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-4 italic">
                  "{story.quote}"
                </div>
                <div className="font-bold">{story.name}</div>
                <div className="text-sm">
                  <span className="opacity-75">Before: </span>{story.before}
                </div>
                <div className="text-sm">
                  <span className="opacity-75">After: </span>{story.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-6">Tools & Resources</h2>
            <p className="text-gray-600 mb-6">
              We provide access to premium tools, software, and resources to ensure you have everything needed for success in the digital world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="text-blue-500 mr-3"><Laptop size={20} /></div>
                <div>Development Environments</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="text-blue-500 mr-3"><Palette size={20} /></div>
                <div>Design Software</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="text-blue-500 mr-3"><Video size={20} /></div>
                <div>Content Creation Tools</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="text-blue-500 mr-3"><LineChart size={20} /></div>
                <div>Analytics Platforms</div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/courses" className="inline-flex items-center">
                Explore Our Programs <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="/placeholder.svg" 
              alt="GTH Digital Academy Tools" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join GTH Digital Academy today and transform your digital skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/courses">Browse Our Courses</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
