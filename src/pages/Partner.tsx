import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Partner = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  /* Handle input/textarea changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  /* Handle submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const form = e.target as HTMLFormElement;

      const res = await fetch("https://formspree.io/f/mpwrdzjw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form), // collects all fields with name=""
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ company: "", email: "", website: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 text-center">Become a Partner</h1>
          <p className="text-gray-specific text-lg mb-8 text-center">
            Join our network of partners and grow your business with Tech-X4
          </p>

          {/* ----- Two-column grid ----- */}
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Why partner list */}
            <div>
              <h2 className="heading-md mb-6">Why Partner With Us?</h2>
              <ul className="space-y-4">
                {[
                  "Access to our network of clients and resources",
                  "Co-marketing opportunities",
                  "Revenue sharing on referred projects",
                  "Technical support and collaboration",
                  "Joint venture possibilities",
                ].map((txt) => (
                  <li key={txt} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-specific">{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner application form */}
            <div className="gth-card">
              <h3 className="text-xl font-bold mb-6">Partner Application</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-blue-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-blue-500"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium mb-1"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-blue-500"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Tell Us About Your Company
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-blue-500"
                    placeholder="What services do you offer? How could we collaborate?"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>

                  {status === "success" && (
                    <p className="text-center text-green-600 text-sm">
                      Thank you! We’ll review your application and get back to
                      you shortly.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-center text-red-600 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Existing partners */}
          <div className="mt-16">
            <h2 className="heading-md mb-6 text-center">Our Current Partners</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-32 h-20 bg-secondary rounded-md flex items-center justify-center"
                >
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
