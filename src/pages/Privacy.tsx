
import React from 'react';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-specific mb-6">Last updated: May 10, 2025</p>
            
            <h2 className="heading-md mt-8 mb-4">Introduction</h2>
            <p className="text-gray-specific mb-6">
              At Tech-X4, we respect your privacy and are committed to protecting it through our compliance with this policy.
            </p>
            
            <h2 className="heading-md mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-specific mb-6">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-specific">
              <li>Personal information such as name, email address, and phone number when you contact us</li>
              <li>Usage information about your visit to our website</li>
              <li>Information about your device and internet connection</li>
            </ul>
            
            <h2 className="heading-md mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-specific mb-6">
              We use information that we collect about you or that you provide to us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-specific">
              <li>To provide you with information, products, or services that you request from us</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To improve our website and user experience</li>
              <li>For marketing and promotional purposes with your consent</li>
            </ul>
            
            <h2 className="heading-md mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-specific mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-specific">
              Tech-X4<br />
              Email: tech-x4.team@tech-x4.guru<br />
              Phone: +2347085655759
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
