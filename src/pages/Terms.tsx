
import React from 'react';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-specific mb-6">Last updated: May 10, 2025</p>
            
            <h2 className="heading-md mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-specific mb-6">
              By accessing or using the GTH Digital Academy website, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p className="text-gray-specific mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive property of GTH Digital Academy.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-specific mb-6">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">4. Links To Other Web Sites</h2>
            <p className="text-gray-specific mb-6">
              Our Service may contain links to third-party websites or services that are not owned or controlled by GTH Digital Academy.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">5. Governing Law</h2>
            <p className="text-gray-specific mb-6">
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-specific mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-specific">
              GTH Digital Academy<br />
              Email: info@gthdigital.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
