
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Code, Smartphone, Palette, Database, Brain, BarChart, Video, LineChart } from 'lucide-react';

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h3 className="heading-md text-blue-500 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card hover:bg-blue-50 transition-colors">
            <div className="mr-2 text-blue-500">✓</div>
            <div>{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [counts, setCounts] = useState({ skills: 0, years: 0, students: 0 });
  const targets = { skills: 50, years: 5, students: 2000 };
  const countersRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const interval = setInterval(() => {
            setCounts(prev => ({
              skills: prev.skills < targets.skills ? prev.skills + 1 : targets.skills,
              years: prev.years < targets.years ? prev.years + 1 : targets.years,
              students: prev.students < targets.students ? prev.students + 50 : targets.students
            }));
          }, 50);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    
    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, [hasAnimated]);

  // Skills database
  const skillsData = {
    webDevelopment: [
      "HTML5", "CSS3", "JavaScript", "TypeScript",
      "React.js", "Next.js", "Vue.js", "Angular",
      "Tailwind CSS", "Bootstrap", "SASS/SCSS",
      "Node.js", "Express.js", "REST APIs", "GraphQL"
    ],
    mobileDevelopment: [
      "Flutter", "React Native", "Kotlin", "Swift",
      "iOS Development", "Android Development",
      "Mobile UI Design", "App Store Optimization"
    ],
    dataAndBackend: [
      "Python", "Django", "Flask", "FastAPI",
      "MongoDB", "PostgreSQL", "MySQL", "Firebase",
      "AWS", "Docker", "CI/CD", "Git & GitHub"
    ],
    designAndUX: [
      "Figma", "Adobe XD", "Canva", "Sketch",
      "UI Design", "UX Research", "Wireframing",
      "Prototyping", "Design Systems"
    ],
    digitalMarketing: [
      "SEO", "SEM", "Social Media Marketing",
      "Content Marketing", "Email Marketing",
      "Google Analytics", "Facebook Ads", "Google Ads"
    ],
    emergingTech: [
      "Blockchain", "Web3", "Solidity", "Smart Contracts",
      "AI Fundamentals", "Machine Learning Basics",
      "ChatGPT Prompting", "Midjourney", "DALL-E"
    ],
    businessAndCreative: [
      "Personal Branding", "Digital Economy",
      "Forex Trading", "Crypto Trading", "Arbitrage",
      "Content Creation", "Video Production",
      "Podcast Production", "Community Building"
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">Skills Dashboard</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Comprehensive overview of all the skills and technologies you'll master at GTH Digital Academy
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-gray-50" ref={countersRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-500 mb-2">{counts.skills}+</div>
              <div className="text-gray-700">Digital Skills Taught</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-500 mb-2">{counts.years}+</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-500 mb-2">{counts.students}+</div>
              <div className="text-gray-700">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Skills Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive list of skills and technologies taught across our various programs
          </p>
        </div>
        
        <SkillCategory title="Web Development" skills={skillsData.webDevelopment} />
        <SkillCategory title="Mobile Development" skills={skillsData.mobileDevelopment} />
        <SkillCategory title="Data & Backend" skills={skillsData.dataAndBackend} />
        <SkillCategory title="Design & UX" skills={skillsData.designAndUX} />
        <SkillCategory title="Digital Marketing" skills={skillsData.digitalMarketing} />
        <SkillCategory title="Emerging Technologies" skills={skillsData.emergingTech} />
        <SkillCategory title="Business & Creative" skills={skillsData.businessAndCreative} />
      </section>

      {/* Learning Paths */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Learning Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured skill progression to take you from beginner to professional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Developer Path",
                duration: "16 weeks",
                level: "Beginner to Intermediate",
                icon: <Code size={32} />
              },
              {
                title: "Mobile Developer Path",
                duration: "14 weeks",
                level: "Beginner to Intermediate",
                icon: <Smartphone size={32} />
              },
              {
                title: "UI/UX Designer Path",
                duration: "12 weeks",
                level: "Beginner to Intermediate",
                icon: <Palette size={32} />
              },
              {
                title: "Backend Developer Path",
                duration: "16 weeks",
                level: "Beginner to Intermediate",
                icon: <Database size={32} />
              },
              {
                title: "AI Explorer Path",
                duration: "10 weeks",
                level: "Beginner to Intermediate",
                icon: <Brain size={32} />
              },
              {
                title: "Digital Marketing Path",
                duration: "8 weeks",
                level: "Beginner to Intermediate",
                icon: <BarChart size={32} />
              },
            ].map((path, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-blue-500 mb-4">{path.icon}</div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <div className="text-sm text-gray-500 mb-1">Duration: {path.duration}</div>
                <div className="text-sm text-gray-500 mb-4">Level: {path.level}</div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Relevance */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Industry-Relevant Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum is constantly updated to match industry demands and technological trends
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Industry Skills" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="heading-md mb-6">Why Our Skills Matter</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-blue-500 mr-3">✓</div>
                <div>
                  <h4 className="font-bold">In-Demand Tech Skills</h4>
                  <p className="text-gray-600">Focus on the most sought-after skills in today's job market</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Practical Project Experience</h4>
                  <p className="text-gray-600">Build real-world projects for your portfolio</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Entrepreneurial Mindset</h4>
                  <p className="text-gray-600">Learn how to monetize your skills in the digital economy</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Ongoing Support</h4>
                  <p className="text-gray-600">Join a community of learners and mentors for continuous growth</p>
                </div>
              </div>
            </div>
            <Button asChild>
              <Link to="/courses" className="inline-flex items-center">
                Start Your Learning Journey <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Master These Skills?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our academy today and start your journey to becoming a digital professional
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
