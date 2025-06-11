
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';


// Sample testimonials data
const testimonials = [
  {
    name: "Yomi Omorewa",
    title: "CEO, Pacesetter Tutorial",
    image: "/yomi-profile.jpg",
    text: "Tech-X4 transformed our online presence completely. Their team delivered beyond our expectations with a website that perfectly captures our brand essence.",
  },
  {
    name: "Austin Titiloye",
    title: "Founder, 30 and UP ELITES",
    image: "/austin-profile.jpg",
    text: "Working with Tech-X4 was a game changer. They took our vision and turned it into a stunning platform that our users love.",
  },
  {
    name: "David Princess",
    title: "Student, Tech-X4 Academy",
    image: "/princess.jpg",
    text: "Their professionalism and speed are unmatched. We now have a robust site that scales perfectly with our operations.",
  },
];

const Portfolio = () => {
  // Sample portfolio projects (placeholders)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "Fashion Brand",
      description: "A complete e-commerce solution with advanced filtering, secure payment processing, and inventory management.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"]
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      client: "Tech Startup",
      description: "Analytics dashboard for a subscription-based service with real-time data visualization and user management.",
      tags: ["React", "Firebase", "Chart.js", "Material UI"]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      client: "Financial Institution",
      description: "Secure mobile banking application with transaction history, fund transfers, and account management.",
      tags: ["Flutter", "Node.js", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Educational Platform",
      client: "Online Academy",
      description: "Learning management system with course creation tools, student progress tracking, and payment processing.",
      tags: ["Vue.js", "Express", "MongoDB", "AWS"]
    },
    {
      id: 5,
      title: "Real Estate Listing",
      client: "Property Management Company",
      description: "Property listing website with advanced search, virtual tours, and agent dashboards.",
      tags: ["React", "Node.js", "Google Maps API"]
    },
    {
      id: 6,
      title: "Health & Fitness App",
      client: "Wellness Brand",
      description: "Mobile application for fitness tracking, meal planning, and community engagement.",
      tags: ["React Native", "Firebase", "GraphQL"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="tech-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Portfolio</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore our latest projects and see how we've transformed ideas into powerful digital solutions.
            </p>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact" className="inline-flex items-center">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="gth-card group hover:border-primary transition-all duration-300">
                <div className="bg-gray-800 h-48 mb-4 rounded-md overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">Client: {project.client}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="text-primary p-0 h-auto" asChild>
                  <a href="#">View Case Study</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<TestimonialsSection />

      {/* CTA Section */}
      <section className="tech-gradient text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Build Your Digital Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's create a digital solution that helps your business stand out and scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Client Testimonials</h2>
        <p className="text-gray-muted max-w-2xl mx-auto">
          What our clients say about working with Tech-X4
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="gth-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-primary mb-4">★★★★★</div>
            <p className="mb-6 text-gray-specific">"{testimonial.text}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4 border border-gray-300 shadow"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-muted">{testimonial.title}</p>
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
              <span className="text-gray-specific">Partner Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
