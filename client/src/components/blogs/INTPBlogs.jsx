import React, { useEffect, useState, useRef } from 'react';

function INTPBlogs() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('understanding-intps');

  // Refs for each section
  const sectionRefs = useRef({});

  // List of sections for the outline
  const sections = [
    { id: 'understanding-intps', title: 'Understanding INTPs: The Logician' },
    { id: 'personality-type', title: 'What is the personality type?' },
    { id: 'intp-strengths', title: 'INTP strengths' },
    { id: 'intp-weaknesses', title: 'INTP weaknesses' },
    { id: 'cognitive-functions', title: 'INTP cognitive functions' },
    { id: 'personal-relationships', title: 'Personal relationships with INTPs' },
    { id: 'intp-careers', title: 'INTP careers' },
    { id: 'famous-intps', title: 'Famous INTPs' },
    { id: 'tips-interacting', title: 'Tips for interacting with INTPs' },
  ];

  // IntersectionObserver to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Observe each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar (Outline) */}
      <div className="w-1/4 p-6 bg-white shadow-lg sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Outline</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id} className="flex items-center">
              {activeSection === section.id && (
                <span className="text-blue-500 mr-2">➔</span>
              )}
              <a
                href={`#${section.id}`}
                className={`text-sm ${
                  activeSection === section.id
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-600'
                } hover:text-blue-500 transition-colors`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-1/2 p-8">
        {/* Section 1: Understanding INTPs */}
        <section
          id="understanding-intps"
          ref={(el) => (sectionRefs.current['understanding-intps'] = el)}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold ">
          Understanding the INTP: The Logician<br/> Personality (Introverted, Intuitive, Thinking, and Perceiving)
          </h1>
          <p className="text-gray-700 mb-10 font-semibold text-[12px] hover:text-blue-600">By:<span className='hover:underline cursor-pointer'>Shaz kk</span></p>
          <p className="text-black text-lg text-justify">
          The traits of the (Logician) personality type are Introverted, Intuitive, Thinking, and Perceiving. In many facets of life, 
          these adaptable thinkers like to approach things unusually. By combining their willingness to try new things with their 
          inventiveness, they frequently look for unusual routes. Individuals who identify as logicians (INTP personality types) 
          take great satisfaction in their distinct viewpoint and active intelligence. Some of the most significant philosophers and 
          scientists in history have been INTPs, because they can easily lose themselves in their thoughts when left alone, people with 
          this personality type typically prefer solitude. They also have a great deal of creativity and inventiveness, and they don’t 
          hesitate to stand out from the crowd or to share their original ideas.
          </p>
          <p className="text-black text-lg text-justify mt-10">
          Gaining an understanding of personality types can help us better understand our interactions, motivations, and behaviors. 
          The INTP, or “Logician,” is one of the 16 Myers-Briggs Type Indicator (MBTI) types that is distinguished by its special 
          fusion of creative and analytical thinking. This blog explores the relationships, career paths, strengths, and challenges 
          of the INTP personality type, highlighting its complexity.
          </p>
          <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
            “We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.” – Walt Disney
          </blockquote>
        </section>

        {/* Section 2: What is the personality type? */}
        <section
          id="personality-type"
          ref={(el) => (sectionRefs.current['personality-type'] = el)}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            What is the personality type?
          </h2>
          <p className="text-black text-lg ">
          Among the 16 personality types identified by the Myers-Briggs Type Indicator (MBTI), INTP stands for introverted, intuitive, 
          thinking, and perceiving. Individuals with an INTP personality type are frequently characterized as analytical and quiet. They 
          take pleasure in being by themselves, reflecting on how things operate, and solving problems. INTPs prefer to concentrate on 
          their inner thoughts rather than the outside world because they have a rich inner world. Generally speaking, they don’t have a 
          large social circle, but they do have a few close friends. Because their ideas and actions are grounded in logic, the INTP 
          personality type is referred to as the logician.
          </p>
          <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
          “INTPs approach life with a detached curiosity, always seeking to understand the ‘why’ behind every phenomenon they encounter.” 
          Patricia B. Highsmith, The Secret History
          </blockquote>
        </section>

        {/* Section 3: INTP Strengths */}
        <section
          id="intp-strengths"
          ref={(el) => (sectionRefs.current['intp-strengths'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">INTP Strengths</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Analytical: INTPs excel at breaking down complex problems.</li>
            <li>Creative: They often come up with innovative solutions.</li>
            <li>Curious: INTPs have a natural desire to learn and explore.</li>
            <li>Objective: They make decisions based on logic, not emotions.</li>
          </ul>
        </section>

        {/* Section 4: INTP Weaknesses */}
        <section
          id="intp-weaknesses"
          ref={(el) => (sectionRefs.current['intp-weaknesses'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">INTP Weaknesses</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Overthinking: INTPs can get lost in their thoughts.</li>
            <li>Detached: They may struggle to connect emotionally with others.</li>
            <li>Procrastination: INTPs may delay tasks if they seem uninteresting.</li>
            <li>Insensitive: They can sometimes come across as blunt or uncaring.</li>
          </ul>
        </section>

        {/* Section 5: INTP Cognitive Functions */}
        <section
          id="cognitive-functions"
          ref={(el) => (sectionRefs.current['cognitive-functions'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">INTP Cognitive Functions</h2>
          <p className="text-gray-700">
            INTPs have a unique stack of cognitive functions that shape how they think and interact with the world:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Dominant: Introverted Thinking (Ti) - Focus on internal logic and analysis.</li>
            <li>Auxiliary: Extraverted Intuition (Ne) - Exploring possibilities and ideas.</li>
            <li>Tertiary: Introverted Sensing (Si) - Relying on past experiences.</li>
            <li>Inferior: Extraverted Feeling (Fe) - Struggling with emotional expression.</li>
          </ul>
        </section>

        {/* Section 6: Personal Relationships with INTPs */}
        <section
          id="personal-relationships"
          ref={(el) => (sectionRefs.current['personal-relationships'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Personal Relationships with INTPs
          </h2>
          <p className="text-gray-700">
            INTPs value intellectual connection in relationships. They may struggle with emotional intimacy but are loyal and supportive partners when they feel understood. They often enjoy deep conversations and need space to pursue their interests.
          </p>
        </section>

        {/* Section 7: INTP Careers */}
        <section
          id="intp-careers"
          ref={(el) => (sectionRefs.current['intp-careers'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">INTP Careers</h2>
          <p className="text-gray-700">
            INTPs thrive in careers that allow them to use their analytical and creative skills. Some suitable careers include:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Scientist</li>
            <li>Software Developer</li>
            <li>Philosopher</li>
            <li>Engineer</li>
          </ul>
        </section>

        {/* Section 8: Famous INTPs */}
        <section
          id="famous-intps"
          ref={(el) => (sectionRefs.current['famous-intps'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Famous INTPs</h2>
          <p className="text-gray-700">
            Some famous individuals believed to be INTPs include:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Albert Einstein</li>
            <li>Marie Curie</li>
            <li>Bill Gates</li>
            <li>Larry Page</li>
          </ul>
        </section>

        {/* Section 9: Tips for Interacting with INTPs */}
        <section
          id="tips-interacting"
          ref={(el) => (sectionRefs.current['tips-interacting'] = el)}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Tips for Interacting with INTPs
          </h2>
          <p className="text-gray-700">
            To build a good relationship with an INTP:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Engage in intellectual discussions.</li>
            <li>Respect their need for independence.</li>
            <li>Be patient with their emotional expression.</li>
            <li>Avoid being overly emotional or irrational.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default INTPBlogs;