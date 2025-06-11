
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import { ArrowRight, Code, Smartphone, Palette, Database, Brain, BarChart, Video, LineChart, Users, User } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  features: string[];
  image: string;
  icon: JSX.Element;
  status: 'enrolling' | 'coming-soon' | 'waitlist';
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="course-card animate-fade-in">
      <div className="h-48 bg-gray-200 relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
          course.status === 'enrolling' 
            ? 'bg-green-100 text-green-800' 
            : course.status === 'waitlist'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-orange-100 text-orange-800'
        }`}>
          {course.status === 'enrolling' ? 'Now Enrolling' : course.status === 'waitlist' ? 'Join Waitlist' : 'Coming Soon'}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="text-blue-500 mr-2">{course.icon}</div>
          <div className="text-sm text-gray-500">{course.category}</div>
        </div>
        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <div className="mr-4">{course.duration}</div>
          <div>{course.level}</div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">{course.description}</p>
        <Button asChild className={course.status === 'enrolling' ? 'btn-primary' : 'btn-outline'}>
          <Link to={`/contact?course=${course.id}`}>
            {course.status === 'enrolling' ? 'Enroll Now' : course.status === 'waitlist' ? 'Join Waitlist' : 'Get Notified'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

const CourseDetails = ({ course, onClose }: { course: Course, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="h-60 bg-gray-200">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <div className="text-blue-500 mr-2">{course.icon}</div>
            <div className="text-sm text-gray-500">{course.category}</div>
          </div>
          <h3 className="font-bold text-xl mb-2">{course.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <div className="mr-4">{course.duration}</div>
            <div>{course.level}</div>
          </div>
          
          <p className="text-gray-700 mb-6">{course.description}</p>
          
          <h4 className="font-bold mb-3">What You'll Learn</h4>
          <ul className="space-y-2 mb-6">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="text-blue-500 mr-2">✓</div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="btn-primary">
              <Link to={`/contact?course=${course.id}`}>
                {course.status === 'enrolling' ? 'Enroll Now' : course.status === 'waitlist' ? 'Join Waitlist' : 'Get Notified'}
              </Link>
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const courses: Course[] = [
    {
      id: 1,
      title: "Code Calling: Learn Web Development in 90 Days",
      category: "Web Development",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      description: "A comprehensive bootcamp that takes you from zero coding knowledge to building full-stack web applications. Learn HTML, CSS, JavaScript, and React with hands-on projects and accountability partners.",
      features: [
        "HTML, CSS and JavaScript fundamentals",
        "React.js front-end development",
        "Node.js and Express back-end basics",
        "Database integration with MongoDB",
        "Deployment and hosting on Vercel/Netlify",
        "Building a full portfolio website",
      ],
      image: "/placeholder.svg",
      icon: <Code size={20} />,
      status: 'enrolling'
    },
    {
      id: 2,
      title: "Mobile App Development Bootcamp",
      category: "Mobile Development",
      duration: "10 weeks",
      level: "Intermediate",
      description: "Learn to create native and cross-platform mobile applications for iOS and Android using Flutter and React Native. Build real-world apps that can be published to app stores.",
      features: [
        "Flutter fundamentals and Dart programming",
        "React Native and JavaScript for mobile",
        "UI/UX design for mobile interfaces",
        "State management and API integration",
        "Publishing to Google Play and App Store",
        "Building a portfolio-quality mobile app"
      ],
      image: "/placeholder.svg",
      icon: <Smartphone size={20} />,
      status: 'waitlist'
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      duration: "8 weeks",
      level: "Beginner",
      description: "Master the principles of user interface and experience design. Learn to create beautiful, intuitive designs that solve real user problems using industry-standard tools like Figma.",
      features: [
        "UI/UX design principles and theory",
        "Wireframing and prototyping in Figma",
        "User research and testing methods",
        "Design systems and component libraries",
        "Responsive design for web and mobile",
        "Portfolio development with case studies"
      ],
      image: "/placeholder.svg",
      icon: <Palette size={20} />,
      status: 'enrolling'
    },
    {
      id: 4,
      title: "Build Your Brand from Scratch",
      category: "Brand Building",
      duration: "6 weeks",
      level: "Beginner to Advanced",
      description: "Learn how to create a compelling digital brand that resonates with your audience. Develop your brand identity, messaging, and digital presence strategy.",
      features: [
        "Brand identity development",
        "Target audience definition",
        "Visual branding elements",
        "Content strategy and creation",
        "Social media presence building",
        "Community engagement tactics"
      ],
      image: "/placeholder.svg",
      icon: <BarChart size={20} />,
      status: 'enrolling'
    },
    {
      id: 5,
      title: "From Zero to Crypto Pro",
      category: "Trading",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      description: "Understand blockchain technology and learn trading strategies for digital assets. From basic concepts to advanced techniques, this course covers everything you need to know.",
      features: [
        "Blockchain and cryptocurrency fundamentals",
        "Security and wallet management",
        "Technical analysis basics",
        "Trading psychology and risk management",
        "DeFi protocols and yield strategies",
        "Portfolio construction and management"
      ],
      image: "/placeholder.svg",
      icon: <LineChart size={20} />,
      status: 'waitlist'
    },
    {
      id: 6,
      title: "AI Tools Mastery",
      category: "Emerging Tech",
      duration: "4 weeks",
      level: "Beginner",
      description: "Learn to leverage AI tools like ChatGPT, Midjourney, and DALL-E to enhance your productivity and creativity. Understand how to prompt effectively and integrate AI into your workflow.",
      features: [
        "Advanced prompting techniques",
        "Generative AI for content creation",
        "Image generation and manipulation",
        "AI workflow automation",
        "Ethical considerations in AI usage",
        "Building AI-powered applications"
      ],
      image: "/placeholder.svg",
      icon: <Brain size={20} />,
      status: 'coming-soon'
    },
    {
      id: 7,
      title: "Content Creation Masterclass",
      category: "Content",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      description: "Master the art and science of creating compelling digital content across multiple platforms. Learn video production, writing, and distribution strategies.",
      features: [
        "Video content creation fundamentals",
        "Script writing and storyboarding",
        "Video editing with Premiere Pro",
        "Written content optimization",
        "Podcast production basics",
        "Multi-platform content strategy"
      ],
      image: "/placeholder.svg",
      icon: <Video size={20} />,
      status: 'coming-soon'
    },
    {
      id: 8,
      title: "Backend Development with Node.js",
      category: "Web Development",
      duration: "8 weeks",
      level: "Intermediate",
      description: "Dive deep into server-side development with Node.js and Express. Build robust APIs, implement authentication, and connect to databases.",
      features: [
        "Node.js and Express fundamentals",
        "RESTful API design and development",
        "Authentication and authorization",
        "Database integration (SQL and NoSQL)",
        "Performance optimization",
        "Deployment and DevOps basics"
      ],
      image: "/placeholder.svg",
      icon: <Database size={20} />,
      status: 'coming-soon'
    }
  ];
  
  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);
  
  const categories = ['all', ...new Set(courses.map(course => course.category))];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">Our Courses</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Practical, hands-on courses designed to give you real-world digital skills
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-lg font-bold">Filter Courses</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-1 rounded-full text-sm ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-600 hover:bg-gray-500'}`}
                >
                  {category === 'all' ? 'All Courses' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} onClick={() => setSelectedCourse(course)} className="cursor-pointer">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-4">No courses found</h3>
            <p className="text-gray-600 mb-6">Try selecting a different category or check back later for new courses.</p>
            <Button onClick={() => setFilter('all')}>View All Courses</Button>
          </div>
        )}
        
        {selectedCourse && (
          <CourseDetails 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
          />
        )}
      </section>

      {/* Learning Approach */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-600 mb-4">Our Learning Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes Tech-x4 courses different?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based Learning",
                description: "Build real-world projects that you can add to your portfolio, demonstrating your skills to potential employers or clients.",
                icon: <Code size={24} />
              },
              {
                title: "Accountability Partners",
                description: "You'll be paired with fellow students to motivate each other, share progress, and overcome challenges together.",
                icon: <Users size={24} />
              },
              {
                title: "Mentorship & Support",
                description: "Get guidance from experienced professionals who will review your work and provide personalized feedback.",
                icon: <User size={24} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-xl text-blue-600 font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of those who have completed our courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-2xl text-yellow-400 mb-4">★★★★★</div>
              <p className="mb-4 italic text-gray-700">
                "The course was incredibly practical. I was building real projects from week one, and by the end, I had a portfolio that helped me land my first tech job!"
              </p>
              <div className="font-medium">- Student Name</div>
              <div className="text-sm text-gray-500">Web Development Graduate</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need any prior experience to take these courses?",
                answer: "Most of our beginner courses require no prior experience, while intermediate and advanced courses may have prerequisites. Each course page clearly lists what background knowledge is expected."
              },
              {
                question: "How much time do I need to commit per week?",
                answer: "Most courses require 10-15 hours per week for optimal learning outcomes. This includes watching lectures, completing exercises, working on projects, and participating in accountability sessions."
              },
              {
                question: "Are there payment plans available?",
                answer: "Yes, we offer flexible payment plans for most of our courses. You can pay in full or in monthly installments. Scholarships are also available for eligible students."
              },
              {
                question: "Will I receive a certificate upon completion?",
                answer: "Yes, all graduates receive a digital certificate of completion. More importantly, you'll have portfolio-ready projects that demonstrate your skills to employers or clients."
              },
              {
                question: "What happens if I fall behind in the course?",
                answer: "We understand that life happens. You'll have access to course materials for an extended period, and our mentors are available to help you catch up. Your accountability partner will also support you in staying on track."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="font-bold text-gray-600 text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Digital Skills?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our academy today and start your journey to becoming a digital professional
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button asChild variant="outline" className="border border-border text-foreground hover:bg-muted hover:text-foreground dark:border-white dark:text-white dark:hover:bg-white/10 dark:hover:text-white">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
