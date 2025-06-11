
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  BarChart, 
  Video, 
  Laptop, 
  LineChart, 
  Globe, 
  ShoppingCart, 
  Settings, 
  Users,
  Zap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "Custom-built websites and web applications tailored to your unique business needs.",
      icon: <Code size={32} />,
      details: [
        "Custom websites from landing pages to complex web applications",
        "Frontend development with React, Next.js, Vue.js",
        "Backend development with Node.js, Python, PHP",
        "Database design and integration",
        "API development and third-party integrations",
        "Performance optimization and scalability"
      ]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone size={32} />,
      details: [
        "iOS app development with Swift",
        "Android app development with Kotlin",
        "Cross-platform development with Flutter and React Native",
        "App Store and Google Play deployment",
        "App maintenance and updates",
        "Integration with device features (camera, GPS, etc.)"
      ]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-focused design that enhances user experience and drives conversions.",
      icon: <Palette size={32} />,
      details: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design for all devices",
        "Usability testing and optimization",
        "Design systems creation"
      ]
    },
    {
      id: 4,
      title: "Brand Strategy & Identity",
      description: "Comprehensive brand development to establish a strong market presence.",
      icon: <BarChart size={32} />,
      details: [
        "Brand strategy development",
        "Logo and visual identity design",
        "Brand voice and messaging",
        "Brand guidelines and assets",
        "Market positioning strategy",
        "Competitive analysis"
      ]
    },
    {
      id: 5,
      title: "E-Commerce Solutions",
      description: "Online stores and shopping experiences that drive sales and customer loyalty.",
      icon: <ShoppingCart size={32} />,
      details: [
        "Custom e-commerce website development",
        "Shopify, WooCommerce, and custom platform development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory management systems",
        "Customer accounts and loyalty programs"
      ]
    },
    {
      id: 6,
      title: "Digital Business Setup",
      description: "Complete digital infrastructure setup for startups and growing businesses.",
      icon: <Settings size={32} />,
      details: [
        "Business website and email setup",
        "CRM and business tool implementation",
        "Payment processing systems",
        "Automated workflows and processes",
        "Business analytics and reporting",
        "Digital security and backup systems"
      ]
    },
    {
      id: 7,
      title: "Content Strategy & Creation",
      description: "Strategic content planning and production that engages your audience.",
      icon: <Video size={32} />,
      details: [
        "Content strategy development",
        "Blog and article writing",
        "Video content production",
        "Social media content creation",
        "Content calendar management",
        "SEO-optimized content"
      ]
    },
    {
      id: 8,
      title: "Tech Support & Growth",
      description: "Ongoing technical support and strategic guidance for digital growth.",
      icon: <Zap size={32} />,
      details: [
        "Website maintenance and updates",
        "Performance monitoring and optimization",
        "Technical troubleshooting and support",
        "Digital growth strategy",
        "Analytics and reporting",
        "Technology consultation and roadmapping"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="tech-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              From concept to launch, we provide end-to-end digital solutions that help businesses thrive online.
            </p>
            <Button asChild variant="outline" className="border border-border text-foreground hover:bg-muted hover:text-foreground dark:border-white dark:text-white dark:hover:bg-white/10 dark:hover:text-white">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Consultation <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We build complete digital solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="gth-card group hover:border-primary transition-all duration-300">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Button variant="link" className="text-primary p-0 h-auto" asChild>
                  <a href={`#service-${service.id}`}>Learn More</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Our Services in Detail</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {services.map((service) => (
                <AccordionItem key={service.id} value={`service-${service.id}`} id={`service-${service.id}`} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-900 hover:no-underline">
                    <div className="flex items-center">
                      <div className="text-primary mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-left">{service.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we turn your ideas into successful digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                description: "We start by understanding your goals, target audience, and business challenges.",
                icon: <Users size={28} />
              },
              {
                title: "Strategy",
                description: "We develop a tailored strategy that aligns with your objectives and budget.",
                icon: <LineChart size={28} />
              },
              {
                title: "Creation",
                description: "Our team designs and develops your solution with regular feedback and iteration.",
                icon: <Code size={28} />
              },
              {
                title: "Launch & Growth",
                description: "We launch your solution and provide ongoing support for continuous improvement.",
                icon: <Zap size={28} />
              }
            ].map((step, index) => (
              <div key={index} className="gth-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="text-primary mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-black">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long does it typically take to complete a project?",
                  answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. During our initial consultation, we'll provide a more accurate timeline for your specific project."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We offer custom quotes based on project requirements. We work with fixed-price contracts for most projects, with clear deliverables and payment milestones. For ongoing services, we offer monthly retainer packages."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. These can include regular updates, performance monitoring, security patches, and content updates."
                },
                {
                  question: "Can you help with an existing website or application?",
                  answer: "Absolutely. We offer services for redesigning, optimizing, or expanding existing digital products. We'll begin with an audit of your current assets to identify opportunities for improvement."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "Our team is proficient in a wide range of technologies including React, Next.js, Vue.js, Flutter, Node.js, Python, and more. We select the most appropriate technology stack based on your specific project requirements."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800 hover:no-underline">
                    <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tech-gradient text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss how we can help your business succeed online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" className="border border-border text-foreground hover:bg-muted hover:text-foreground dark:border-white dark:text-white dark:hover:bg-white/10 dark:hover:text-white">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
