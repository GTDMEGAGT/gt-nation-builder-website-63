
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Content = () => {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Content Hub</h1>
            <p className="text-xl opacity-90 mb-8">
              Insights, education, and updates from across our platforms
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="section">
        <Tabs defaultValue="videos" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="videos" className="text-base">YouTube</TabsTrigger>
              <TabsTrigger value="threads" className="text-base">X Threads</TabsTrigger>
              <TabsTrigger value="blog" className="text-base">Blog Posts</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-[240px] bg-gray-200 flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Video ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">
                      {index === 0 
                        ? "From Zero to Trading Hero: My Journey" 
                        : index === 1 
                        ? "3 Financial Principles That Changed My Life" 
                        : index === 2
                        ? "How to Analyze Market Trends Like a Pro"
                        : "Building Multiple Income Streams: A Guide"}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">15:24</span>
                      <span>{index === 0 ? "2 weeks ago" : index === 1 ? "1 month ago" : index === 2 ? "2 months ago" : "3 months ago"}</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {index === 0 
                        ? "Learn how I started my trading journey with nothing but a smartphone and determination." 
                        : index === 1 
                        ? "These three financial principles completely transformed my approach to money and investing." 
                        : index === 2
                        ? "A detailed breakdown of how to identify and analyze market trends to make better trading decisions."
                        : "Diversification is key to financial freedom. Here's how to build multiple income streams."}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-navy">
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        Watch on YouTube <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="threads">
            <div className="space-y-6">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="/placeholder.svg" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-bold">GT</div>
                      <div className="text-sm text-gray-500">@gt_nationbuilder</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-800 mb-3">
                      {index === 0 
                        ? "🧵 THREAD: 5 Trading Mistakes I Made So You Don't Have To" 
                        : index === 1 
                        ? "🧵 How I Built a Trading System with Just a Smartphone" 
                        : index === 2
                        ? "🧵 The Power of Consistency: Small Actions, Big Results"
                        : index === 3
                        ? "🧵 Financial Freedom Blueprint: Step by Step Guide"
                        : "🧵 Why Most Trading Education Fails (And What Works)"}
                    </p>
                    <p className="text-gray-700">
                      {index === 0 
                        ? "After years of trading, I've made plenty of mistakes. Here are the 5 biggest ones that cost me the most money and how you can avoid them..." 
                        : index === 1 
                        ? "Everyone thinks you need expensive equipment to trade properly. Here's how I built a complete trading system using just a smartphone..." 
                        : index === 2
                        ? "The secret to success isn't about massive overnight changes. It's about small, consistent actions taken every single day..."
                        : index === 3
                        ? "A detailed breakdown of the exact steps I'm taking to achieve financial freedom, starting from zero..."
                        : "Most trading education focuses on the wrong things. After analyzing hundreds of resources, here's what actually works..."}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {index === 0 ? "May 2, 2024" : index === 1 ? "April 15, 2024" : index === 2 ? "March 29, 2024" : index === 3 ? "March 10, 2024" : "February 28, 2024"}
                  </div>
                  <Button asChild variant="link" className="p-0 h-auto text-navy">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      Read Full Thread <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="blog">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Blog ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gold font-medium mb-2">
                      {index === 0 ? "Motivation" : index === 1 ? "Trading" : index === 2 ? "Personal Growth" : "Ecosystem Updates"}
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {index === 0 
                        ? "Start With Nothing, Build Everything" 
                        : index === 1 
                        ? "The African Trader's Advantage" 
                        : index === 2
                        ? "Faith and Business: My Foundation"
                        : "Ecosystem Progress: Q1 2024 Update"}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {index === 0 ? "May 5, 2024" : index === 1 ? "April 20, 2024" : index === 2 ? "March 12, 2024" : "January 5, 2024"}
                    </div>
                    <p className="text-gray-700 mb-4">
                      {index === 0 
                        ? "Why starting with limited resources can actually be your greatest advantage in building something meaningful." 
                        : index === 1 
                        ? "Unique insights and perspectives that traders from Africa bring to global markets and how to leverage them." 
                        : index === 2
                        ? "How my faith journey has shaped my approach to business, leadership, and community building."
                        : "A detailed update on the progress of each component of the ecosystem and what's coming next."}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-navy">
                      <a href="#" className="inline-flex items-center">
                        Read Full Post <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-gray-600 mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-8">
              Subscribe to get notified about new content across all platforms
            </p>
            <form action="https://guru.us14.list-manage.com/subscribe/post?u=184559d44d209c2462827381a&amp;id=10a7d9ed29&amp;f_id=001799e1f0" 
   method="post"
  target="_blank" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
    name="EMAIL"
    placeholder="Your email" 
                className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Content;
