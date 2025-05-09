
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Laptop, Smartphone, Palette, Database, Brain, BarChart, Video, User, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-black to-blue-700 text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl mb-6">GTH Digital Academy</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              From Dreams to Reality — Learn, Build, and Thrive in the Digital World.
            </p>
            <p className="mb-8 text-gray-200">
              Empowering dreamers to become digital builders through comprehensive training in tech skills, brand building, and digital entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-secondary">
                <Link to="/courses">Join the Academy</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <img 
                src="/lovable-uploads/4c7bd24c-48e2-4607-ab7c-333a1b002183.png" 
                alt="GTH Digital Academy Logo" 
                className="w-full h-full object-contain animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Slider Component
const SkillSlider = () => {
  const skills = [
    { name: "Frontend & Backend Development", icon: <Code size={24} /> },
    { name: "App Development (iOS & Android)", icon: <Smartphone size={24} /> },
    { name: "UI/UX Design", icon: <Palette size={24} /> },
    { name: "Blockchain & Web3", icon: <Database size={24} /> },
    { name: "AI & Automation", icon: <Brain size={24} /> },
    { name: "Brand Strategy & Positioning", icon: <BarChart size={24} /> },
    { name: "Digital Marketing", icon: <LineChart size={24} /> },
    { name: "Content Creation", icon: <Video size={24} /> },
    { name: "Personal Development", icon: <User size={24} /> },
    { name: "Forex, Crypto & Arbitrage Trading", icon: <Database size={24} /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-10">What You Will Learn</h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {skills.map((skill, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="skill-card group hover:bg-blue-500 hover:text-white transition-colors">
                  <div className="mr-3 text-blue-500 group-hover:text-white">{skill.icon}</div>
                  <div className="font-medium">{skill.name}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-8 text-center">
          <Button asChild variant="link">
            <Link to="/skills" className="inline-flex items-center">
              View All Skills <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// What We Do Section
const WhatWeDoSection = () => {
  const services = [
    {
      title: "Code Calling",
      description: "Tech bootcamp & coding with accountability",
      icon: <Code size={32} />
    },
    {
      title: "Brand Building",
      description: "Helping brands earn trust online",
      icon: <BarChart size={32} />
    },
    {
      title: "Digital Business Ecosystem",
      description: "Guidance for building sustainable digital businesses",
      icon: <Database size={32} />
    },
    {
      title: "Monetization Mentorship",
      description: "Learn how to monetize your digital skills",
      icon: <LineChart size={32} />
    },
    {
      title: "Creative Economy Support",
      description: "Resources and tools for digital creators",
      icon: <Palette size={32} />
    }
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">What We Do</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering the next generation with digital skills through our comprehensive programs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="gth-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link to="/what-we-do" className="inline-flex items-center">
            Learn More About What We Do <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// Stats Section with Animated Counters
const StatsSection = () => {
  const [counts, setCounts] = useState({ skills: 0, students: 0, hours: 0 });
  const targets = { skills: 25, students: 2000, hours: 5000 };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        skills: prev.skills < targets.skills ? prev.skills + 1 : targets.skills,
        students: prev.students < targets.students ? prev.students + 50 : targets.students,
        hours: prev.hours < targets.hours ? prev.hours + 100 : targets.hours
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="animated-counter">{counts.skills}+</div>
            <div className="text-lg mt-2">Technical Skills Taught</div>
          </div>
          <div>
            <div className="animated-counter">{counts.students}+</div>
            <div className="text-lg mt-2">Students Impacted</div>
          </div>
          <div>
            <div className="animated-counter">{counts.hours}+</div>
            <div className="text-lg mt-2">Hours of Training</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Courses Section
const FeaturedCoursesSection = () => {
  const courses = [
    {
      title: "Code Calling: Learn Web Dev in 90 Days",
      description: "Master HTML, CSS, JavaScript and React with our guided cohort program",
      image: "/placeholder.svg"
    },
    {
      title: "Build Your Brand from Scratch",
      description: "Learn how to create a compelling digital brand that resonates with your audience",
      image: "/placeholder.svg"
    },
    {
      title: "From Zero to Crypto Pro",
      description: "Understand blockchain technology and learn trading strategies for digital assets",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our hands-on courses designed to give you practical skills for the digital economy
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="course-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="h-48 bg-gray-200">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Button asChild variant="outline">
                <Link to="/courses">Join Waitlist</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link to="/courses" className="inline-flex items-center">
            View All Courses <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// Motivation Section
const MotivationSection = () => {
  const motivationWords = ["Discipline", "Belief", "Mastery", "Ownership"];
  
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-xl mb-8 animate-fade-in">"Your Dreams Are Valid — Let's Make Them Digital Reality."</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {motivationWords.map((word, index) => (
              <div 
                key={index} 
                className="text-xl md:text-2xl font-medium opacity-80 floating" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-2xl mb-4">★★★★★</div>
              <p className="mb-4 italic">
                "GTH Digital Academy transformed my life. I went from knowing nothing about coding to building my own applications in just 3 months!"
              </p>
              <div className="font-medium">- Student Name, {2023 - index}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sponsor Section
const SponsorSection = () => {
  return (
    <section className="section">
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Partner & Sponsor</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Empowering the next generation of tech leaders. Join the movement.
          </p>
          <p className="text-blue-500 font-medium mt-4">
            "Sponsor a dream without even knowing you did."
          </p>
          <p className="text-gray-600 italic mt-2">
            Be part of the silent revolution shaping Africa's digital future.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-32 h-32 bg-white rounded-lg shadow flex items-center justify-center">
              <div className="text-gray-300 text-xl">Partner Logo</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild>
            <Link to="/contact">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-blue-700 text-white py-16">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6 animate-fade-in">Ready to Transform Your Digital Skills?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.1s"}}>
          Join our community of learners and start your journey from dreams to digital reality today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button asChild className="btn-secondary">
            <Link to="/courses">Join the Academy</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
            <Link to="/contact">Contact Us</Link>
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
      <SkillSlider />
      <WhatWeDoSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <MotivationSection />
      <SponsorSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
