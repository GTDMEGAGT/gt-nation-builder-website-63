
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">About GTH Digital Academy</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Empowering dreams and building digital futures since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="heading-lg mb-6">Our Mission & Vision</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-500 mb-3">Mission</h3>
              <p className="text-gray-700 text-lg">
                "Empowering dreamers to become digital builders."
              </p>
              <p className="mt-4 text-gray-600">
                We exist to bridge the gap between ambitious youth and the digital skills they need to thrive in the modern economy. Through practical education, mentorship, and community support, we transform aspiration into digital mastery.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-500 mb-3">Vision</h3>
              <p className="text-gray-700 text-lg">
                "To create a community of creators who are trusted, skilled, and unstoppable."
              </p>
              <p className="mt-4 text-gray-600">
                We envision a future where African youth lead global digital innovation through mastery of cutting-edge skills, ethical practices, and entrepreneurial mindsets. Our graduates become the backbone of a thriving digital economy.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl animate-slide-in-right">
            <img 
              src="/placeholder.svg" 
              alt="GTH Digital Academy Team" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at GTH Digital Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { name: "Self-Belief", description: "We foster confidence in personal abilities" },
              { name: "Skill-Building", description: "Continuous learning and practical mastery" },
              { name: "Community", description: "Strength through collaboration and support" },
              { name: "Innovation", description: "Embracing new ideas and technologies" },
              { name: "Digital Excellence", description: "Setting the highest standards in all we do" }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-xl font-bold text-blue-500 mb-3">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story/History */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to a growing digital skills academy
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 -ml-[1px] h-full border-l-2 border-dashed border-blue-300"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 relative">
            {[
              {year: "2020", title: "The Beginning", description: "Started with small coding workshops and online tutorials"},
              {year: "2021", title: "First Cohort", description: "Launched our first official web development bootcamp with 20 students"},
              {year: "2022", title: "Expansion", description: "Added courses in digital marketing, UI/UX design and mobile development"},
              {year: "2023", title: "Community Growth", description: "Reached 1,000+ students across multiple courses and programs"},
              {year: "2024", title: "Digital Ecosystem", description: "Developing comprehensive platform for digital skills mastery"}
            ].map((item, index) => (
              <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                    <div className="text-blue-500 font-bold mb-2">{item.year}</div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section Placeholder */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate educators and digital experts behind GTH Digital Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-64 bg-gray-200">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">Team Member Name</h3>
                  <p className="text-blue-500 mb-4">Position / Role</p>
                  <p className="text-gray-600 text-sm">
                    Brief bio about the team member and their expertise in digital education.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section">
        <div className="bg-blue-500 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="heading-lg mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether as a student, mentor, or sponsor, there's a place for you in our community
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
