
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Database, Brain, BarChart, Video, Laptop, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="tech-gradient text-white py-28 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in z-10">
            <h1 className="heading-xl mb-6">We Build Digital Brands that Win Trust.</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              GTH Digital Academy — Turning Dreams to Reality with Code, Design, and Strategy.
            </p>
            <p className="mb-8 text-gray-300">
              Transform your business ideas into powerful digital realities with our expert team of developers, designers, and digital strategists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-secondary">
                <Link to="/contact">Let's Build Yours</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                <Link to="/skills">See Our Skills</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
              <div className="absolute w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/93c859bf-5ffd-4de8-b833-d822b128a6bd.png" 
                alt="GTH Digital Academy Logo" 
                className="w-4/5 h-auto object-contain animate-fade-in z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What We Do Section
const ServicesSection = () => {
  const services = [
    {
      title: "Website & App Development",
      description: "Custom-built solutions for web and mobile platforms",
      icon: <Laptop size={32} />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that convert",
      icon: <Palette size={32} />
    },
    {
      title: "Brand Strategy & Identity",
      description: "Distinctive visual identity and positioning",
      icon: <BarChart size={32} />
    },
    {
      title: "Digital Business Setup",
      description: "Online stores, funnels, and automations",
      icon: <Database size={32} />
    },
    {
      title: "Content Strategy",
      description: "Engaging content that drives traffic and conversion",
      icon: <Video size={32} />
    },
    {
      title: "Tech Support & Growth",
      description: "Ongoing assistance and strategic guidance",
      icon: <LineChart size={32} />
    }
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">What We Do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We build complete digital solutions for businesses of all sizes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="gth-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link to="/services" className="inline-flex items-center">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// Technologies Section
const TechnologiesSection = () => {
  const techGroups = [
    {
      title: "Frontend",
      techs: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Vue.js"]
    },
    {
      title: "Backend",
      techs: ["Node.js", "Python", "PHP", "Express.js", "Django", "Flask"]
    },
    {
      title: "App Dev",
      techs: ["Flutter", "Kotlin", "Swift", "React Native"]
    },
    {
      title: "CMS & Ecom",
      techs: ["WordPress", "Shopify", "Webflow", "Wix"]
    },
    {
      title: "Databases",
      techs: ["Firebase", "MongoDB", "PostgreSQL", "Supabase"]
    },
    {
      title: "Web3 & AI",
      techs: ["Solidity", "Rust", "AI APIs", "Web3 Tools"]
    }
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Technologies We Work With</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team is proficient in a wide range of modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="gth-card animate-fade-in" style={{animationDelay: `${groupIndex * 0.1}s`}}>
              <h3 className="text-xl font-bold mb-4 text-primary">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-black px-3 py-1 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/skills" className="inline-flex items-center">
              Explore Our Skills <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Stats Section with Animated Counters
const StatsSection = () => {
  const [counts, setCounts] = useState({ projects: 0, languages: 0, satisfaction: 0 });
  const targets = { projects: 100, languages: 20, satisfaction: 99 };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < targets.projects ? prev.projects + 2 : targets.projects,
        languages: prev.languages < targets.languages ? prev.languages + 1 : targets.languages,
        satisfaction: prev.satisfaction < targets.satisfaction ? prev.satisfaction + 3 : targets.satisfaction
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="gth-card">
            <div className="animated-counter">{counts.projects}+</div>
            <div className="text-lg mt-2 text-gray-300">Projects Executed</div>
          </div>
          <div className="gth-card">
            <div className="animated-counter">{counts.languages}+</div>
            <div className="text-lg mt-2 text-gray-300">Languages & Stacks Mastered</div>
          </div>
          <div className="gth-card">
            <div className="animated-counter">{counts.satisfaction}%</div>
            <div className="text-lg mt-2 text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <section className="section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Client Testimonials</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          What our clients say about working with GTH Digital Academy
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="gth-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="text-primary mb-4">★★★★★</div>
            <p className="mb-6 text-gray-300">
              "GTH Digital Academy transformed our online presence completely. Their team delivered beyond our expectations with a website that perfectly captures our brand essence."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Client Name</h4>
                <p className="text-sm text-gray-400">Position, Company</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6 text-center">Our Brand Partners</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-32 h-20 bg-secondary rounded-md flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CTASection = () => {
  return (
    <section className="tech-gradient text-white py-16">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6 animate-fade-in">Your Idea Deserves a Digital Home. Let's Build It Right.</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.1s"}}>
          Start your digital transformation journey with our expert team today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button asChild className="btn-secondary">
            <Link to="/contact">Book a Free Discovery Call</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
