
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SocialIcons from "@/components/SocialIcons";

const Story = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">My Mission & Story</h1>
            <p className="text-xl opacity-90 mb-8">
              A journey of faith, grit and unwavering determination
            </p>
            <SocialIcons className="justify-center" iconColor="white" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg mb-12">
            <h2 className="heading-md mb-4">My Personal Mission</h2>
            <p className="text-lg italic">
              "To create accessible pathways to knowledge, financial independence, and personal growth for ambitious individuals across Africa and beyond, through innovative digital platforms that educate, empower, and inspire."
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>The Beginning</h2>
            <p>
              My journey started in humble circumstances. Born and raised in a community where opportunities were scarce, I learned early on that creating your own path was often the only way forward. What I lacked in resources, I made up for in determination and vision.
            </p>
            <p>
              Armed with nothing but a smartphone and an unshakeable belief in my potential, I began consuming knowledge voraciously - learning about business, technology, trading, and personal development through whatever free resources I could find.
            </p>

            <div className="my-12 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Early days of my journey" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <h2>Overcoming Challenges</h2>
            <p>
              The path hasn't been easy. Limited access to technology, frequent power outages, unreliable internet, and financial constraints made progress painfully slow at times. But these obstacles only strengthened my resolve.
            </p>
            <p>
              When others might have given up, I found ways to adapt and persist. When I couldn't afford courses, I found free alternatives. When my phone battery died, I borrowed time on others' devices. Every setback became a setup for something greater.
            </p>

            <h2>Faith and Values</h2>
            <p>
              Throughout this journey, my faith has been my anchor. I believe that purpose is greater than profit, and that we are called to use our gifts to elevate others. The values that guide me are:
            </p>
            <ul>
              <li><strong>Integrity</strong> - Being truthful and transparent in all endeavors</li>
              <li><strong>Excellence</strong> - Pursuing the highest quality in everything I create</li>
              <li><strong>Service</strong> - Focusing on how my work can benefit others</li>
              <li><strong>Persistence</strong> - Never giving up despite obstacles</li>
              <li><strong>Innovation</strong> - Finding creative solutions to complex problems</li>
            </ul>

            <h2>Building the Foundation</h2>
            <p>
              Starting with content creation on free platforms, I began sharing insights on financial literacy, personal development, and entrepreneurship. To my surprise, people resonated with my message and approach.
            </p>
            <p>
              Small successes led to bigger opportunities. I formed a community of like-minded individuals passionate about trading and financial freedom. This community became the testing ground for my ideas and the foundation for what would become my broader ecosystem vision.
            </p>

            <div className="my-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="heading-md mb-4">Key Learning Moments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Power of Consistency",
                    description: "Learning that small daily actions compound into significant results over time"
                  },
                  {
                    title: "Community First",
                    description: "Understanding that building genuine relationships precedes business success"
                  },
                  {
                    title: "Resourcefulness",
                    description: "Finding ways to create value with minimal resources builds unique skills"
                  },
                  {
                    title: "Long-term Vision",
                    description: "Seeing beyond immediate obstacles to the greater purpose keeps motivation alive"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>The Vision Takes Shape</h2>
            <p>
              Through years of persistence, study, and small wins, my vision for an ecosystem of interconnected platforms began to crystallize. I realized that the challenges I faced were not unique to me but shared by millions across Africa and beyond.
            </p>
            <p>
              What if I could create solutions that removed these barriers for others? What if I could build bridges between knowledge and application, between potential and opportunity?
            </p>
            <p>
              Today, this vision is becoming reality. Step by step, platform by platform, I'm building what I believe will become a transformative force for good - enabling others to write their own success stories regardless of where they start.
            </p>

            <h2>Where I'm Headed</h2>
            <p>
              I stand at a pivotal moment in this journey. The foundation is laid, the blueprint is clear, and the initial components of the ecosystem are functioning. Now, I need the right tools, mentorship, and support to scale this vision to its full potential.
            </p>
            <p>
              With the right sponsorship and partnerships, what I've built with minimal resources could impact millions of lives across the continent and beyond. This is bigger than me - it's about creating pathways for an entire generation to access knowledge, build skills, and achieve financial independence.
            </p>
            
            <div className="my-10 text-center">
              <Button asChild className="btn-primary">
                <a href="/sponsor">Join My Journey as a Sponsor</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
