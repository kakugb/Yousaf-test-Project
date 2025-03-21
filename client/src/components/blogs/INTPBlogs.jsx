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
    <div className="flex min-h-screen">
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
            <h1 className='text-3xl font-bold '>Image here</h1>
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
          <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6 text-justify">
          “INTPs approach life with a detached curiosity, always seeking to understand the ‘why’ behind every phenomenon they encounter.” 
          Patricia B. Highsmith, The Secret History
          </blockquote>
          <h1 className='text-3xl font-bold '>Image here</h1>
          <p className="text-black text-lg text-justify mt-4">
          The traits of the (Logician) personality type are Introverted, Intuitive, Thinking, and Perceiving. In many facets of life, these
           adaptable thinkers like to approach things unusually. By combining their willingness to try new things with their inventiveness,
            they frequently look for unusual routes. Individuals who identify as logicians (INTP personality types) take great satisfaction 
            in their distinct viewpoint and active intelligence. Some of the most significant philosophers and scientists in history have been
             INTPs, because they can easily lose themselves in their thoughts when left alone, people with this personality type typically prefer
              solitude. They also have a great deal of creativity and inventiveness, and they don’t hesitate to stand out from the crowd or to 
              share their original ideas.
          </p>
        </section>

        {/* Section 3: INTP Strengths */}
        <section
          id="intp-strengths"
          ref={(el) => (sectionRefs.current['intp-strengths'] = el)}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-1 ">INTP subtypes</h2>
          <p className='text-md'>There are two INTP subtypes:</p>
          <ul className="list-disc pl-5 text-black text-xl">
            <li className='mt-4'> <span className='font-bold '>INTP-A:</span> The “assertive logician” has a stronger sense of self-assurance and self-confidence than an INTP-T, and they are also more 
                content with their current circumstances.</li>
            <li className='mt-8'> <span className='font-bold'>INTP-T:</span> In contrast, a “turbulent logician” tends to have lower levels of confidence, comfort with themselves, and satisfaction 
            compared to an INTP-A.</li>
          </ul>
          <h1 className="text-3xl font-bold mt-8">
          INTP Personality Core Characteristics
          </h1>
          <p className="text-black text-lg text-justify mt-4">
          The most self-reliant and analytical of the 16 personality types is the INTP. Personal independence and freedom of thought are deeply necessary for INTPs. Even though they might not fully
           develop their intellectual side as early as an INTJ, INTPs exhibit an insatiable appetite for theorizing and ideation once their auxiliary function, Extraverted Intuition (Ne), has been
            fully awakened. Many people take pleasure in investigating metaphysical truths and unifying theories that clarify the fundamental nature of things. They might read mountains of books
             on philosophy, religion, psychology, evolutionary theory, and other topics to achieve this.
          </p>
          <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
          “INTPs are the quintessential architects of ideas, constantly deconstructing and reconstructing concepts to build a coherent understanding of the world.” John Beebe, Integrity in Depth
          </blockquote>
          <p className="text-black text-lg text-justify mt-6">
          Like ENTPs, INTPs can be eccentric, humorous, and gregarious when they’re taking a break from their philosophical research. Because they are extraverted in their Intuition (Ne) and
           Feeling (Fe), INTPs can be charming, friendly, and approachable. Because their minds are constantly active, they can be stimulating conversationalists when talking about a topic that
            interests them. This allows for a wide-ranging and complex discussion. However, if they are bored, as they might be if they are made to listen to lengthy small talk, they will either 
            quickly lose interest or find a way to change the subject. Although INTPs give off the impression of being sincere and affable, they are more interested in talking about concepts than 
            the everyday specifics of other people’s lives. They take pleasure in learning about people’s motivations, interests, tendencies, and patterns. This enables INTPs to develop and
             improve their theories of human nature (Ti-Ne) (Fe).
          </p>
          <p className="text-black text-lg text-justify mt-6">
          INTPs can be nervous and self-conscious people, just like other introverts. They frequently exhibit a few tense behaviors, or at the very least, some indication that they are uncomfortable.
           They typically avoid making direct eye contact because they believe it could injure them or make it impossible for them to think or speak. The disorganized nature of their Ne expressions in 
           the first place frequently causes INTPs to feel insecure enough. It only gets worse when they feel like someone else is observing or criticizing them. Similar to INFPs, INTPs may take their
            time sharing details about their inner lives.
          </p>
          <p className="text-black text-lg text-justify mt-6">
          Even though it may seem odd to other types, INTPs frequently hide some of their most prominent personality traits, such as their extremely logical and cerebral side. Only a few people might 
          be given complete access to this INTP side.  It’s possible that others only get a glimpse of INTPs’ inner lives through their work, like reading something they’ve written. This could help to
           explain why writing is so popular among INTPs, as it offers a great platform for more thorough and accurate self-expression.
          </p>

          <p className="text-black text-lg text-justify mt-6">
          INTPs frequently believe that others are unaware of their actual level of knowledge and proficiency because of their hesitancy to openly express the logical side of their personalities and the 
          disorganized nature of their Ne expressions. Their peculiar outward manner and lack of enthusiasm for organizational life can be mistaken for incompetence in the workplace, where this is 
          particularly prevalent. As we covered in our piece on INTP careers, they may have trouble finding fulfilling positions within the system and are frequently more content working as independent
           contractors or business owners.
          </p>
          <p className="text-black text-lg text-justify mt-6">
          INTPs can also struggle in relationships. Although their Ne and Fe can be used to draw in possible mates, their conflict between Ti and Fe—between their independence (Ti) and relationships (Fe)—can 
          lead to a variety of issues.
          </p>
        </section>

        {/* Section 4: INTP Weaknesses */}
        <section
          id="intp-weaknesses"
          ref={(el) => (sectionRefs.current['intp-weaknesses'] = el)}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Cognitive Functions and Personality Development Phases</h2>
          <h2 className="text-2xl font-bold mb-4">Cognitive Functions</h2>
          <p className="text-black text-lg text-justify mt-6">
          The theory of psychoanalyst Carl Jung, upon which the MBTI is based, contends that personality is made up of a variety of cognitive processes. Patterns of behavior and personality are established by the 
          hierarchy of these functions. Even though the auxiliary supports the dominant function, the dominant function is the one that contributes most to personality. Even though the tertiary function is less developed, 
          it still has some influence and gets stronger as one develops this area. The inferior function is a weakness and is primarily unconscious.
          </p>
          <h2 className="text-3xl font-bold mb-4">Image Here</h2>


          <h2 className="text-2xl font-bold mt-8">Dominant: Introverted Thinking (Ti)</h2>
          <p className="text-black text-lg text-justify mt-2">
          This function is concerned with how individuals process information about the outside world. INTPs typically dissect concepts or objects to determine how they fit and work together to understand how things operate.
           Generally speaking, INTPs are very efficient and logical thinkers. Before they express an opinion or take action, they prefer to fully comprehend a subject. To comprehend a particular situation, system, or issue, 
           logic and reason must be applied. Ti gives INTPs a strong sense of inner control by giving their inner world structure and order.
          </p>

          <p className="text-black text-lg text-justify mt-6">
          Internally, INTPs are very self-disciplined and strive to efficiently control their thoughts and lives. INTPs are compelled by their Ti’s disciplined nature to frame a lot of things as challenges or goals. 
          These difficulties could be physical (e.g. attempting to reach a desired level of fitness or health), cerebral, pragmatic, and psychological (e.g.  Self-actualization), or later on in their growth, interpersonal 
          (e.g. becoming a skilled lover or “perfecting” a relationship).
          </p>

          <p className="text-black text-lg text-justify mt-6">
          Additionally, INTPs are more interested in working with ideas than facts. According to Jung, “His concepts are based on his subjective foundation rather than objective facts.”. INTPs are always researching the history
           of their ideas to make sure they are based on sound logic and to gain a deeper understanding of where they came from.
          </p>



          <h2 className="text-2xl font-bold mt-8">Auxiliary: Extraverted Intuition (Ne)</h2>
          <p className="text-black text-lg text-justify mt-2">
          INTPs use insight, imagination, and experiences to generate ideas as they investigate possibilities and what-ifs. To get an
           idea or insight into a problem, INTPs frequently review their knowledge in search of patterns. They often spend a lot of time 
           envisioning all the possibilities and thinking about the future. 
          </p>

          <p className="text-black text-lg text-justify mt-6">
          Ne can have either an expressive or perceptual function. Ne’s verbal expression is comparable to “brainstorming aloud.”. Because 
          they rambling jump from one idea to the next, INTPs may not always seem to “have a point” when speaking.
          </p>

          <p className="text-black text-lg text-justify mt-6">
          Ne encourages INTPs to gather information in their receptive role. Ne does more than just collect sensory data like Se does. Instead, 
          it transcends or looks past sensory data, enabling INTPs to identify patterns, opportunities, and potentials that would otherwise go undetected.
          </p>



          <h2 className="text-2xl font-bold mt-8">Tertiary: Introverted Sensing (Si)</h2>
          <p className="text-black text-lg text-justify mt-2">
          INTPs have a propensity for meticulously classifying all of the numerous facts and experiences they absorb. To predict what they think will happen 
          next, INTPs evaluate new information by contrasting it with what they already know. Si entails a devotion to the accustomed, predictable, and routine—to prior experiences and precedent. 
          </p>

          <p className="text-black text-lg text-justify mt-6">
          INTPs and other types with Si in their function stack typically eat a fairly regular or consistent diet, “eating to live” as opposed to “living to eat.” Si’s ability to perceive internal 
          body sensations—the body as felt and experienced from within—is a function that is frequently disregarded. Activities like yoga, tai chi, meditation, or other relaxation techniques that call for intense awareness of one’s internal body state highlight this aspect of Si.
          </p>



          <h2 className="text-2xl font-bold mt-8">Inferior: Extraverted Feeling (Fe)</h2>
          <p className="text-black text-lg text-justify mt-2">
          In groups, INTPs are inclined to look for harmony. Even though they are introverted, INTPs can be very gregarious around people they know well and feel at ease with. However, INTPs suppress their emotions and find it difficult to relate to others when they are under stress.
           They frequently turn to reason instead of emotion when under stress. 
          </p>

          <p className="text-black text-lg text-justify mt-6">
          He cares about preserving social harmony as well. Fe encourages INTPs to act as peacemakers, whereas Ti and Ne may motivate them to act as provocateurs. Compared to INTJs, INTPs are far more likely to “bite their tongue” to prevent hurting or upsetting other people.
          </p>

          <p className="text-black text-lg text-justify mt-6">
          Building emotional ties and rapport with people is one of Life’s other goals. Although INTPs might be fairly good at interpreting the emotions of others, they might not truly “feel” what the other person is going through. For this reason, INTPs are sometimes characterized 
          as “warm on the outside, but cold or calculating on the inside.
          </p>
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