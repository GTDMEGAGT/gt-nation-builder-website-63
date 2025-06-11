import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube, Mail, MessageSquare, Phone } from "lucide-react";
import TiktokIcon from "@/components/TiktokIcon";
import Layout from "@/components/Layout";
import { useState } from "react";

// Mailchimp embed URL pieces
const MC_BASE   = "https://guru.us14.list-manage.com/subscribe/post";
const MC_U      = "184559d44d209c2462827381a";   // from  name="u" value="…"
const MC_ID     = "10a7d9ed29";                  // from  name="id" value="…"
// optional but harmless to include:
const MC_FID    = "001799e1f0";                  // from  action  …&f_id=…

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus("loading");

  try {
    /* ----------------------------------------------
       1️⃣  Send the main message to Formspree
    ---------------------------------------------- */
    const resp = await fetch("https://formspree.io/f/myzjeqwq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!resp.ok) throw new Error("Formspree failed");

    /* ----------------------------------------------
       2️⃣  If the user ticked Newsletter, ping Mailchimp
    ---------------------------------------------- */
    if (formData.newsletter) {
      /* Build exactly the fields Mailchimp’s embed form expects */
      const mcData = new URLSearchParams({
        EMAIL: formData.email,
        u: MC_U,
        id: MC_ID,
        "f_id": MC_FID,          // optional but matches your form
      });

      /* POST using no-cors so the browser doesn’t block you.
         We don’t get a JSON response back (that’s normal).     */
      await fetch(MC_BASE, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: mcData.toString(),
      });
    }

    /* All good */
    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    });
  } catch (err) {
    setFormStatus("error");
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
                  <a href="mailto:tech-x4.team@tech-x4.guru" className="text-navy hover:text-gold transition-colors">
                    tech-x4.team@tech-x4.guru
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
                  <a href="https://wa.me/7085655759" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                    +234-7085-655-759
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
                  <a href="tel:+2347085655759" className="text-navy hover:text-gold transition-colors">
                    +234-7085-655-759
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Available Monday-Friday, 9am-5pm WAT
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://x.com/TechX4_Guru" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md text-gray-800">
                    <Twitter size={20} className="mr-2 text-blue-400" />
                    <span>@TechX4_Guru</span>
                  </a>
                  <a href="https://www.instagram.com/techx4_guru/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md text-gray-800">
                    <Instagram size={20} className="mr-2 text-pink-500" />
                    <span>@TechX4_Guru</span>
                  </a>
                  <a href="https://www.tiktok.com/@techx4_guru" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md text-gray-800">
                    <TiktokIcon className="w-5 h-5 text-black-500" />
                    <span>TikTok: @techx4_guru</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UC2Ib304K6-yw2e3o0wBVZyA" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-md text-gray-800">
                    <Youtube size={20} className="mr-2 text-red-600" />
                    <span>@TechX4_Guru</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-lg mb-6 text-gray-800">FAQ</h3>
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
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-bold mb-2 text-gray-800">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-gray-800">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy text-gray-800 bg-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy text-gray-800 bg-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy text-gray-800 bg-white"
                    required
                  >
                    <option value="" className="text-gray-500">Select a subject</option>
                    <option value="sponsorship" className="text-gray-800">Sponsorship Inquiry</option>
                    <option value="collaboration" className="text-gray-800">Collaboration Proposal</option>
                    <option value="question" className="text-gray-800">General Question</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy text-gray-800 bg-white"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">Subscribe to newsletter and updates</label>
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {formStatus === 'success' && (
                  <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                )}
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
            <p className="text-xl font-medium">Delta, Nigeria</p>
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