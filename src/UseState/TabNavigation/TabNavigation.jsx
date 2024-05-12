import { useState } from "react";
import dataTabNavigation from "./data";
import TabItems from "./TabItems";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <TabItems
        dataTabNavigation={dataTabNavigation}
        handleClick={handleClick}
        activeTab={activeTab}
      />

      {dataTabNavigation.map((item, index) => (
        <div
          key={item.id}
          className={`${activeTab === index ? "block" : "hidden"}`}
        >
          {index === 0 && (
            <div className="bg-slate-100 m-10 p-10">
              <h1 className="font-bold text-green-600 my-4 text-4xl">
                Welcome to Alexis Website!
              </h1>
              <p className="text-sm">
                Welcome to [Your Company Name], where we transform houses into
                homes and dreams into reality. With our passion for creativity
                and commitment to excellence, we specialize in crafting spaces
                that inspire and uplift.
              </p>

              <h2 className="font-bold text-green-600 my-4 text-xl">
                Discover Our Services:
              </h2>
              <ul className="list-disc">
                <li>
                  Interior Design: From concept to execution, our team of
                  experts will tailor every detail to reflect your unique style
                  and personality.
                </li>
                <li>
                  Home Renovation: Whether it's a small makeover or a complete
                  overhaul, trust us to breathe new life into your living space.
                </li>
                <li>
                  Decor Consultation: Need advice on colors, furniture, or
                  layout? Let us guide you with our expert decor consultation
                  services.
                </li>
              </ul>
              <h2 className="font-bold text-green-600 my-4 text-xl">
                Explore Our Portfolio:
              </h2>
              <p className="text-sm">
                Browse through our portfolio to see the magic we've created for
                our clients. Be inspired by stunning transformations and
                innovative designs that redefine what's possible.
              </p>

              <h2 className="font-bold text-green-600 my-4 text-xl">
                Ready to Transform Your Home?
              </h2>
              <p className="text-sm">
                Contact us today to schedule a consultation and take the first
                step towards making your dream home a reality.
              </p>
            </div>
          )}
          {index === 1 && (
            <div className="bg-slate-100 m-10 p-10">
              <h1 className="font-bold text-green-600 my-4 text-4xl">
                Welcome to Our Blog!
              </h1>
              <p className="text-sm">
                Stay up-to-date with the latest trends, tips, and inspiration in
                home design and decor. Our blog is your go-to resource for
                expert advice, DIY hacks, and real-life stories that celebrate
                the beauty of home living.
              </p>

              <h2 className="font-bold text-green-600 my-4 text-xl">
                Recent Posts:
              </h2>
              <ul className="list-disc">
                <li>5 Creative Ways to Maximize Small Spaces</li>
                <li>The Art of Mixing Patterns: A Beginner's Guide</li>
                <li>How to Create a Cozy Reading Nook in Your Home</li>
                <li>
                  Inspiring Home Renovation Before and After Transformations
                </li>
              </ul>
              <h2 className="font-bold text-green-600 my-4 text-xl">
                Explore More:
              </h2>
              <p className="text-sm">
                Dive into our archive to discover even more insightful articles
                and helpful guides. Whether you're a design enthusiast or a DIY
                novice, there's something here for everyone.
              </p>
            </div>
          )}
          {index === 2 && (
            <div className="bg-slate-100 m-10 p-10">
              <h1 className="font-bold text-green-600 my-4 text-4xl">
                About [Your Company Name]
              </h1>
              <p className="text-sm">
                At [Your Company Name], we believe that every home has a story
                waiting to be told. Our mission is to help you write yours by
                creating spaces that resonate with your personality and
                lifestyle.
              </p>

              <h2 className="font-bold text-green-600 my-4 text-xl">
                Our Values:
              </h2>
              <ul className="list-disc">
                <li>
                  Passion: We are passionate about design and dedicated to
                  delivering exceptional results that exceed expectations.
                </li>
                <li>
                  Creativity: We thrive on creativity and innovation, constantly
                  pushing boundaries to bring your vision to life.
                </li>
                <li>
                  Collaboration: Your input is invaluable to us. We work closely
                  with you every step of the way to ensure your dreams are
                  realized.
                </li>
                <li>
                  Quality: From materials to craftsmanship, we never compromise
                  on quality. Your satisfaction is our top priority.
                </li>
              </ul>
              <h2 className="font-bold text-green-600 my-4 text-xl">
                Meet Our Team:
              </h2>
              <p className="text-sm">
                Get to know the talented individuals behind [Your Company Name].
                With diverse backgrounds and a shared passion for design, our
                team is committed to turning your dreams into reality.
              </p>
            </div>
          )}
          {index === 3 && (
            <div className="bg-slate-100 m-10 p-10">
              <h1 className="font-bold text-green-600 my-4 text-4xl">
                Get in Touch
              </h1>
              <p className="text-sm">
                Ready to transform your home? Have a question or inquiry? We'd
                love to hear from you! Contact us today to schedule a
                consultation or get more information about our services.
              </p>

              <h2 className="font-bold text-green-600 my-4 text-xl">
                Contact Information:
              </h2>
              <ul className="list-disc">
                <li>Phone: [Your Phone Number]</li>
                <li>Email: [Your Email Address]</li>
                <li>Address: [Your Physical Address, if applicable]</li>
                <li>
                  Social Media: Connect with us on [Facebook, Instagram,
                  Twitter, etc.]
                </li>
              </ul>

              <p className="text-sm">
                Fill out the form below and one of our team members will reach
                out to you shortly.
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
