
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Partner = () => {
  return (
    <Layout>
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 text-center">Become a Partner</h1>
          <p className="text-gray-specific text-lg mb-8 text-center">
            Join our network of partners and grow your business with GTH Digital Academy
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="heading-md mb-6">Why Partner With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-specific">Access to our network of clients and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-specific">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-specific">Revenue sharing on referred projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-specific">Technical support and collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-specific">Joint venture possibilities</span>
                </li>
              </ul>
            </div>
            
            <div className="gth-card">
              <h3 className="text-xl font-bold mb-6">Partner Application</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="https://yourcompany.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Tell Us About Your Company</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="What services do you offer? How do you think we can collaborate?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="heading-md mb-6 text-center">Our Current Partners</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-32 h-20 bg-secondary rounded-md flex items-center justify-center">
                  <span className="text-gray-specific">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partner;
