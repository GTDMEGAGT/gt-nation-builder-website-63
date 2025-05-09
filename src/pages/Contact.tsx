
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Youtube, Mail, MessageSquare, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Let's Connect</h1>
            <p className="text-xl opacity-90 mb-8">
              I'm always open to discuss opportunities, answer questions, or simply connect
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-navy text-white p-4 rounded-lg mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:contact@example.com" className="text-navy hover:text-gold transition-colors">
                    contact@example.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    For general inquiries, partnerships, and sponsorships
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy text-white p-4 rounded-lg mr-6">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Quick questions and direct communication
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy text-white p-4 rounded-lg mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-navy hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Available Monday-Friday, 9am-5pm WAT
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md">
                    <Twitter size={20} className="mr-2" />
                    <span>@gt_nationbuilder</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md">
                    <Instagram size={20} className="mr-2" />
                    <span>@gt_official</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md">
                    <Linkedin size={20} className="mr-2" />
                    <span>GT</span>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md">
                    <Youtube size={20} className="mr-2" />
                    <span>GT Nation Builder</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-lg mb-6">FAQ</h3>
              <div className="space-y-6">
                {[
                  {
                    question: "What does sponsorship involve?",
                    answer: "Sponsorship can range from providing equipment, software, mentorship, or financial support. Each sponsorship is customized based on your capabilities and interests."
                  },
                  {
                    question: "How can I collaborate with you?",
                    answer: "I'm open to collaborations with other content creators, businesses, and platforms that align with my mission. Please reach out via email with your proposal."
                  },
                  {
                    question: "Do you offer consulting services?",
                    answer: "Yes, I offer limited consulting for trading, content creation, and ecosystem building. Please contact me directly to discuss your specific needs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-6">Send Me a Message</h3>
              <form className="space-y-6">
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
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  >
                    <option value="">Select a subject</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="question">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">Subscribe to newsletter and updates</label>
                </div>
                
                <Button type="submit" className="btn-primary w-full">Send Message</Button>
              </form>
            </div>
            
            <div className="mt-8 bg-navy text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Response Time</h3>
              <p>
                I aim to respond to all inquiries within 24-48 hours. For urgent matters, please reach out via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Location */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Based in</h2>
            <p className="text-xl font-medium">Lagos, Nigeria</p>
            <p className="text-gray-600">Available for remote collaboration worldwide</p>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="mb-4 text-4xl">🌍</div>
              <h3 className="font-bold text-lg mb-2">Map Placeholder</h3>
              <p className="text-gray-600">
                A dynamic and interactive map would be displayed here in the final version
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
