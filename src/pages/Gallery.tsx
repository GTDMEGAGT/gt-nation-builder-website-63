
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

type GalleryItem = {
  id: number;
  type: 'image' | 'video';
  title: string;
  caption: string;
  thumbnail: string;
  content: string;
  category: string;
};

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      title: 'Web Development Workshop',
      caption: 'Students learning HTML, CSS, and JavaScript fundamentals',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'workshops'
    },
    {
      id: 2,
      type: 'image',
      title: 'Mobile App Development Session',
      caption: 'Building cross-platform mobile applications with Flutter',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'workshops'
    },
    {
      id: 3,
      type: 'image',
      title: 'UI/UX Design Masterclass',
      caption: 'Creating user-centered designs with Figma',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'workshops'
    },
    {
      id: 4,
      type: 'image',
      title: 'Student Project: E-commerce Platform',
      caption: 'Final project from our Web Development cohort',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'projects'
    },
    {
      id: 5,
      type: 'image',
      title: 'Student Project: Travel App',
      caption: 'Mobile application built by our Flutter students',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'projects'
    },
    {
      id: 6,
      type: 'image',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our 2023 Code Calling graduates',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'events'
    },
    {
      id: 7,
      type: 'image',
      title: 'Tech Meetup',
      caption: 'Community networking event for aspiring developers',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'events'
    },
    {
      id: 8,
      type: 'image',
      title: 'Hackathon Winners',
      caption: 'Team that won our annual coding competition',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'events'
    },
    {
      id: 9,
      type: 'video',
      title: 'Student Testimonial: Sarah',
      caption: 'How our program helped her transition into tech',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg',
      category: 'testimonials'
    }
  ];
  
  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">Gallery</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              A visual journey through our workshops, events, and student projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-blue-500" : ""}
              >
                {category === 'all' ? 'All Items' : formatCategory(category)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer animate-fade-in"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative h-60">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.caption}</p>
                <div className="mt-2">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {formatCategory(item.category)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-4">No gallery items found</h3>
            <p className="text-gray-600 mb-6">Try selecting a different category or check back later for new content.</p>
            <Button onClick={() => setFilter('all')}>View All Items</Button>
          </div>
        )}
        
        {/* Modal for viewing gallery items */}
        {activeItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full animate-scale-in">
              <div className="relative">
                {activeItem.type === 'image' ? (
                  <img
                    src={activeItem.content}
                    alt={activeItem.title}
                    className="w-full h-[60vh] object-contain"
                  />
                ) : (
                  <div className="w-full h-[60vh] bg-black flex items-center justify-center">
                    <div className="text-white">Video Placeholder</div>
                  </div>
                )}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{activeItem.title}</h3>
                <p className="text-gray-600 mb-4">{activeItem.caption}</p>
                <Button onClick={() => setActiveItem(null)}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Logo Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <div className="mb-12">
            <h2 className="heading-lg mb-4">Our Brand</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The GTH Digital Academy logo represents our mission of turning dreams into digital reality
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md inline-block">
              <img 
                src="/lovable-uploads/4c7bd24c-48e2-4607-ab7c-333a1b002183.png" 
                alt="GTH Digital Academy Logo" 
                className="max-w-[300px]"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              Our logo symbolizes the bridge between dreams and reality through digital skills mastery. The bold letters represent strength and confidence, while the blue accent signifies technology and innovation.
            </p>
            <p className="text-gray-700">
              "Dreams to Reality" is more than a tagline — it's our promise to every student who joins our academy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="bg-blue-500 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="heading-lg mb-6">Become Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing community of digital creators, developers, and innovators
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-secondary">
              <Link to="/courses">Explore Courses</Link>
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

export default Gallery;
