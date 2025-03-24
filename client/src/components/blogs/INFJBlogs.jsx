import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function INFJBlogs() {
  // Define the sections in order
  const sections = [
    "introduction",
    "strengths-weaknesses",
    "romantic-relationships",
    "friendships",
    "parenthood",
    "careers",
    "workplace-habits",
    "conclusion",
  ];

  // State to track the active section
  const [activeSection, setActiveSection] = useState(sections[0]); // Start with the first section

  // State to track the scroll progress for each section in the nav bar
  const [scrollProgress, setScrollProgress] = useState({});

  // Ref to the main content area for scrolling
  const mainRef = useRef(null);

  // Ref to the nav bar for tracking scroll position
  const navRef = useRef(null);

  // Function to handle navigation to the next section
  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      setActiveSection(nextSection);
    }
  };

  const handleGoBack = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1];
      setActiveSection(prevSection);
    }
  };

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  const handleNavScroll = () => {
    if (navRef.current) {
      const nav = navRef.current;
      const scrollLeft = nav.scrollLeft;
      const scrollWidth = nav.scrollWidth - nav.clientWidth;

      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress((prev) => ({
        ...prev,
        [activeSection]: progress,
      }));
    }
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    setScrollProgress((prev) => ({
      ...prev,
      [activeSection]: 0,
    }));

    if (navRef.current) {
      const activeLink = navRef.current.querySelector(
        `a[href="#${activeSection}"]`
      );
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }
  }, [activeSection]);

  return (
    <div className="w-full pt-20">
      <div className="w-full flex font-sans">
        {/* Sidebar (Fixed on Desktop, Hidden on Mobile) */}
        <aside
          className={`hidden md:block fixed top-24 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300`}
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-[#1A3C34] mb-6">
              Explore This Type
            </h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={`#${section}`}
                    onClick={() => handleSidebarClick(section)}
                    className={`flex items-center pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors ${
                      activeSection === section
                        ? "text-[#1A73E8] bg-[#F5F5F5] border-l-4 border-[#1A73E8]"
                        : "text-[#1A3C34]"
                    }`}
                  >
                    {section
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                    <FaChevronRight
                      className={`ml-auto text-[#B0BEC5] text-xs ${
                        activeSection === section ? "text-[#1A73E8]" : ""
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main
          ref={mainRef}
          className="w-full flex-1 ml-0 md:ml-64 lg:ml-72 px-[2px] overflow-y-auto"
        >
          {/* Navigation Links (Visible on Mobile) */}
          <nav
            ref={navRef}
            className="md:hidden flex space-x-11 mb-6 py-4 overflow-x-auto whitespace-nowrap bg-white shadow-md fixed top-22 left-0 right-0 z-10"
            onScroll={handleNavScroll}
          >
            {sections.map((section) => (
              <Link
                key={section}
                to={`#${section}`}
                onClick={() => handleSidebarClick(section)}
                className={`relative text-[#1A73E8] font-semibold hover:underline px-4 py-2 ${
                  activeSection === section ? "underline" : ""
                }`}
              >
                {/* Background Fill for Active Section */}
                {activeSection === section && (
                  <span
                    className="absolute inset-0 bg-[#E8F5E9] z-[-1] transition-all duration-300"
                    style={{ width: `${scrollProgress[section] || 0}%` }}
                  />
                )}
                {section
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            ))}
          </nav>

          <div className="pt-20 md:pt-4 px-4 md:px-0">
            {/* Sections (Show only the active section) */}
            <div className="w-full md:w-10/12">
              {/* Introduction Section */}
              {activeSection === "introduction" && (
                <section id="introduction">
                  <h1 className="text-3xl font-bold">
                  Understanding the INFJ: The Advocate <br />Personality (Introverted, Intuitive, Feeling, and Judging)
                  </h1>
                  <p className="text-gray-700 mb-10 font-semibold text-[12px] hover:text-blue-600">
                    By:{" "}
                    <span className="hover:underline cursor-pointer">
                      Shaz kk
                    </span>
                  </p>
                  <p className="text-black text-lg text-justify">
                  What if you belonged to the rarest personality type in the world? Meet the INFJ – the Advocate.
                   The Introverted, Intuitive, Feeling, and Judging (INFJ) personality type, is driven by their values and intuition, energized by solitude, and focused on comprehending ideas and concepts.
                  </p>
                
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                  “You cannot teach a man anything; you can only help him find it within himself.” (Galileo Galilei)
                  </blockquote>


                  <p className="text-black text-lg mt-6">
                  They also make firm decisions. Individuals with this mix of personality traits are incredibly idealistic, genuine, and sympathetic. Their quiet, 
                  principled form of humanism, along with their inner vision and personal values, serve as their compass in everything. Individuals with this 
                  personality type frequently feel misinterpreted.
                  </p>


                  <p className="text-black text-lg mt-6">
                  Maybe that’s because INFJs make up only 1 to 3 percent of the U.S. population, making them the rarest MBTI personality type. S. populace. INFJs tend to be laid-back perfectionists. INFJs cherish 
                  close relationships and emotional intimacy with their close friends and family, even though they typically do not have a large social circle.  Because they think the world can be a better place, 
                  INFJs focus on doing everything in their power to make it so. The INFJ personality type (Advocates) wants to stand up. They aren’t satisfied with coasting through life; they want to take action, 
                  change the world, and be a positive influence.
                  </p>
                  
                  <h2 className="text-3xl font-bold mb-4">
                  What Does INFJ Stand For?
                  </h2>
                  <h1 className="text-3xl font-bold">Image here</h1>
                  <p className="text-black text-lg mt-6">
                  The Myers-Briggs Type Indicator (MBTI) was developed by Katharine Briggs and Isabel Myers, who also created the sixteen personality
                   types, including INFJ. Based on the research of psychologist C. G. Jung, each of the four letters in the INFJ code stands for a 
                   crucial personality characteristic of this kind.
                  </p>

                  <p className="text-black text-xl mt-6">
                  <b>Introverted (I):</b> Time alone gets INFJs going.
                  </p>
                  <p className="text-black text-xl mt-6">
                  <b>Feeling (F):</b> INFJs care more about concepts and ideas than specifics.
                  </p>
                  <p className="text-black text-xl mt-6">
                  <b>Judging (J):</b> INFJs like to be structured and planned, not impulsive and adaptable.<br/>INFJs can also be categorized into two subtypes:
                  </p>
                  <p className="text-black text-xl mt-6">
                  <b>INFJ-A (Assertive Advocate):</b> Displays confidence and a relaxed demeanour.
                  </p>

                  <p className="text-black text-xl mt-6">
                  <b>INFJ-T (Turbulent Advocate):</b> Tends to be less confident and more easily stressed.
                  </p>
                  
                  <blockquote className=" bg-teal-300 p-4 italic text-black text-xl py-10 mt-6 text-justify">
                  <b>Top Takeaways </b><br/>
                  Discover the traits, strengths, and weaknesses associated with the INFJ personality type. Keep in mind that this information is not meant to 
                  serve as career, psychological, or medical advice. By exploring these potential traits, you can gain deeper insights into your own tendencies and challenges.
                  </blockquote>

                  <h1 className="text-3xl font-bold mt-4">
                  Why INFJs Are Unique
                  </h1>
                  <h2 className="text-3xl font-bold mb-1 mt-4">Intuition and Insight</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs perceive two sides in every individual. They look at the public image, the façade that is visible to others. More significantly, their dominant function, 
                  Introverted Intuition (Ni), gives a more profound impression of individuals by piercing outward appearances and disclosing hidden intentions and motives. 
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                  As a result, INFJs frequently believe they have a better understanding of others than those individuals have of themselves. INFJs (and INTJs) are known for 
                  their intense concern for quality. They yearn to witness the physical realization of their Ni ideals (Se). Ni concentrates on deeper qualities, making sure 
                  that things are substantial, carefully crafted, and in line with their high standards, whereas Se is more concerned with appearance. INFJs value the quality
                   and craftsmanship of things more than their outward appearance. Their ability to see connections and patterns between seemingly unrelated pieces of information 
                   is made possible by their Ni, which frequently results in insights that seem almost prophetic. INFJs can comprehend the world differently than others because they
                    can synthesize subtle impressions and complex ideas. 
                  </p>

                  <h2 className="text-3xl font-bold mb-1 mt-4">Driven by Purpose and Compassion</h2> 
                  <p className="text-black text-lg text-justify mt-4">
                  Although INFJ personalities may come across as a little reserved, they are motivated by a deep-seated internal passion. They devote their lives to seeking meaning,
                   driven by profound, introspective thought and a great deal of empathy. Due to the rarity of their personality type, INFJs frequently feel, consciously or unconsciously, 
                   that they are different from most people. They are not always accepted by others because of their complex inner lives and a strong desire to discover their life’s purpose. 
                   This feeling of being out of step, though, does not lessen their dedication to improving the world. 
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                  “See the light in others, and treat them as if that is all you see.” (Wayne Dyer)
                  </blockquote>

                  <p className="text-black text-lg text-justify mt-4">
                  They are often troubled by injustice, prefer altruism to self-interest, and feel compelled to use their sensitivity, imagination, and inventiveness to inspire others and foster 
                  compassion. Making a positive difference in someone else’s life is the greatest source of inspiration for an INFJ. Helping others is a life mission for many INFJs, and they 
                  actively seek out opportunities to step up and stand up for what is right. They also hope to address the more fundamental issues facing society, to eradicate injustice and 
                  suffering. However, they may neglect their health as a result of their intense focus on their ideals, which can lead to stress and burnout. 
                  </p>
                  <h2 className="text-3xl font-bold mb-1 mt-4">Harmonious Paradoxes</h2> 
                  <p className="text-black text-lg text-justify mt-4">
                  They are walking and talking contradictions. INFJs tend to be laid-back perfectionists. They possess both creativity and analysis, as well as both logic and emotion. 
                   NFJs prioritize their feelings over objective facts when making decisions. This does not imply, however, that they have an idealized perspective on the world.
                    INFJs are aware of both the positive and negative aspects of the world and aspire to improve it. 
                  </p>
                  <h2 className="text-3xl font-bold mb-1 mt-4">Key Characteristics</h2>
                  <h1 className="text-3xl font-bold mb-1 ">Image Here</h1>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs are considerate nurturers who are driven to help others reach their full potential and have a strong sense of personal integrity. They are committed and creative, and they
                   have a gift for offering others unique answers to their problems. The counsellor has a special talent for figuring out the motivations and feelings of others; they frequently 
                   understand someone else’s feelings before they do. INFJs have great faith in their ability to read people and trust their insights. Despite their sensitivity, they choose 
                   carefully and privately when disclosing their private thoughts and emotions. INFJs look for purpose and meaning in both their personal and external lives. They are very
                    interested in learning about society, culture, and the cosmos in general. They naturally see how every idea or action could have important repercussions, both positive 
                    and negative, because of their introspective and inquisitive worldview. Their interactions with others and the environment are shaped by this distinct viewpoint. In the end,
                     INFJs aim to translate their cerebral and abstract concepts into tangible deeds that have a profound effect on other people. When they are at their best, their actions are
                      consistent with their true values, even though they occasionally struggle with overanalyzing and acting.
                  </p>


                  <h1 className="text-3xl font-bold mb-2">Important Qualities of INFJs</h1>
                  <h2 className="text-2xl font-bold mb-1 mt-4">Compassionate spirit</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs are empathetic and soft-spoken due to their strong emotional understanding and intuition. This does not imply that they are being lenient, though. INFJs have strong
                   convictions and the capacity to take decisive action to accomplish their objectives.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Helper</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  Although introverted by nature, INFJs can build deep, meaningful relationships with other people. They like assisting others, but they also need space and time to rest. 
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Idealist</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  The capacity to turn idealism into action is what distinguishes INFJs. They actively strive to change the world rather than just dreaming about it.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Well disciplined</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs like to take charge by organizing, planning, and making decisions early on, which reflects their methodical and deliberate outlook on life.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Well disciplined</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs like to take charge by organizing, planning, and making decisions early on, which reflects their methodical and deliberate outlook on life.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Balanced Intellect and Emotion</h2>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs give their feelings and ideals precedence over impartial information when making decisions. But they don’t have a romanticized perspective on the world. Understanding 
                  both the positive and negative aspects of the world, INFJs aspire to make it a better place.
                  </p>


                  <h1 className="text-3xl font-bold mb-2">INFJ Motivations and Values</h1>
                  <p className="text-black text-lg text-justify mt-4">
                  INFJs are motivated by a carefully thought-out set of personal values. They have a strong sense of optimism and can picture a better, happier future. Even though the harsh realities
                   of the present may depress them, they are nevertheless driven and tenacious in their pursuit of constructive action. INFJs have an innate desire to improve the world in whatever way 
                   they can. They look for a purposeful life and meaningful relationships.
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                  Despite their reluctance to open up, INFJs value emotional closeness with a chosen, dedicated few. Although their complex inner lives can occasionally give the impression that they are
                   enigmatic or private to others, they cherish genuine relationships with those they can trust. INFJs are the epitome of idealists; they see ways to make the world and society better. They
                    think that the only way to make progress is to concentrate on doing the right thing, regardless of the immediate repercussions. 
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                  However, they place equal importance on harmonious relationships. INFJs are adept mediators who look for the underlying causes of disputes and try to identify points of agreement. They prefer 
                  diplomatic communication to prevent needless strife. INFJs are very interested in learning about the mind and have a great deal of respect for human potential. They are motivated to seek 
                  genuine self-improvement and make an effort to reach their full potential while inspiring others to follow suit. According to their idealistic perspective, “dream it and achieve it” is
                   possible if one believes in the extraordinary.
                  </p>
                                 </section>
              )}

              {/* Strengths and Weaknesses Section */}
              {activeSection === "strengths-weaknesses" && (
                <section id="strengths-weaknesses">
                  <h2 className="text-2xl font-bold mb-4">
                    Strengths and Weaknesses
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-teal-200 font-bold border-b-4">
                          <th className="p-3 text-lg font-bold text-black text-center">
                            Strengths
                          </th>
                          <th className="p-3 text-lg font-bold text-black text-center">
                            Weaknesses
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Exceptional Analytical Skills
                          </td>
                          <td className="p-3 text-black">
                            Tendency to Become Disconnected
                          </td>
                        </tr>
                        <tr className="bg-teal-200">
                          <td className="p-3 text-black">
                            Innovative and Original Thinkers
                          </td>
                          <td className="p-3 text-black">
                            Potential to Seem Insensitive
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Receptive to New Ideas
                          </td>
                          <td className="p-3 text-black">
                            Perpetual Dissatisfaction with the Status Quo
                          </td>
                        </tr>
                        <tr className="bg-teal-200">
                          <td className="p-3 text-black">Deeply Inquisitive</td>
                          <td className="p-3 text-black">
                            Prone to Analyzing Situations
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Committed to Truth and Integrity
                          </td>
                          <td className="p-3 text-black">
                            Can Exhibit Impatience
                          </td>
                        </tr>
                        <tr className="bg-teal-200">
                          <td className="p-3 text-black">
                            Highly Logical and Objective
                          </td>
                          <td className="p-3 text-black">
                            May Be Difficult to Get to Know
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Proficient in Abstract Thinking
                          </td>
                          <td className="p-3 text-black">
                            Susceptible to Self-Doubt
                          </td>
                        </tr>
                        <tr className="bg-teal-200">
                          <td className="p-3 text-black">
                            Autonomous and Self-Reliant
                          </td>
                          <td className="p-3 text-black">
                            Difficulty Adhering to Rules
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Loyal and Affectionate with Close Relationships
                          </td>
                          <td className="p-3 text-black">
                            Challenges in Expressing Emotions
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h1 className="text-3xl font-bold mb-1">INTP Strengths</h1>
                  <h2 className="text-2xl font-semibold mb-4">
                    Exceptional Analytical Skills
                  </h2>
                  <p className="text-black text-lg">
                    Logicians, or those with the INTP personality type, examine
                    everything they encounter. Because of this, they have a
                    talent for identifying connections and patterns that other
                    personalities might miss.
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6 text-justify">
                    “INTPs are defined by their intuitive logic, navigating the
                    world through a lens of abstract reasoning and conceptual
                    analysis.” Carl Jung, Psychological Types
                  </blockquote>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Exceptional Analytical Skills
                  </h2>
                  <p className="text-black text-lg">
                    These individuals can generate innovative and unconventional
                    ideas that most people would not think of because of their
                    relentless imagination. While not all of these concepts are
                    realistic, INTPs’ ability to think creatively can result in
                    some amazing inventions.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Receptive to New Ideas
                  </h2>
                  <p className="text-black text-lg">
                    Curiosity and an intense desire to learn are what motivate
                    INTPs. They rarely hesitate to change their minds as they
                    gain knowledge, even when it comes to political, religious,
                    and philosophical issues. Individuals with this personality
                    type are generally open to new concepts, provided that they
                    are intellectually compatible.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Deeply Inquisitive
                  </h2>
                  <p className="text-black text-lg">
                    These individuals are constantly searching for new
                    information. They might become engrossed in geophysics one
                    week and then lose themselves in guitar-building videos the
                    next. When inspiration strikes, INTPs immerse themselves in
                    their new passion and absorb as much information as they
                    can.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Committed to Truth and Integrity
                  </h2>
                  <p className="text-black text-lg">
                    Truth is important to INTPs. They seek to comprehend what is
                    happening beneath the surface of things rather than finding
                    solace in ideology or conventional wisdom. Because of this,
                    they can be trusted to fight prejudice and false
                    information, even when doing so is difficult, and they
                    anticipate honesty from others.
                  </p>
                  <h1 className="text-3xl font-bold mb-4 mt-6">
                    INTP Weaknesses
                  </h1>
                  <h2 className="text-2xl font-semibold mb-2">
                    Tendency to Become Disconnected
                  </h2>
                  <p className="text-black text-lg">
                    Even when they’re with other people, INTP personalities can
                    lose themselves in their thoughts. When they eventually come
                    back with something to say, they might discover that the
                    topic has already been discussed without them. Particularly
                    at big social events, this can make people with this
                    personality type feel alienated from other people.
                  </p>

                  <h2 className="text-2xl font-semibold mb-2">
                    Potential to Seem Insensitive
                  </h2>
                  <p className="text-black text-lg">
                    For INTPs, the solution to a better, happier world lies in
                    reason. They might occasionally undervalue irrational values
                    like emotion, compassion, manners, and tradition. As a
                    result, despite having generally good intentions, these
                    personalities may unintentionally come across as callous or
                    cruel.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Perpetual Dissatisfaction with the Status Quo
                  </h2>
                  <p className="text-black text-lg">
                    This personality type is unable to stop imagining how things
                    could be better than they are. INTPs are always searching
                    for new challenges to tackle, subjects to learn, and methods
                    to do things. When taken too far, this way of thinking can
                    become debilitating, with these individuals never stopping
                    trying to come up with new ideas instead of consistently
                    attending to their obligations and needs.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Prone to Analyzing Situations
                  </h2>
                  <p className="text-black text-lg">
                    The minds of INTPs are constantly working, even when they
                    are not actively thinking. Although they can occasionally
                    benefit from their quick-witted thoughts, they can also
                    overthink things and become victims of analysis paralysis.
                    INTPs may find it difficult to make a choice or act when
                    this happens because they are too preoccupied with weighing
                    every scenario or viewpoint.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Can Exhibit Impatience
                  </h2>
                  <p className="text-black text-lg">
                    INTP personalities are proud of their expertise and are not
                    afraid to express their opinions. They aren’t always
                    patient, though, when it comes to explaining their
                    reasoning. They might end the conversation with a
                    contemptuous “never mind” if their conversation partner
                    doesn’t follow along or show enough interest.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Communication Style
                  </h2>
                  <p className="text-black text-lg">
                    INTPs are known for their analytical and thoughtful
                    communication style, emphasizing clarity and logic over
                    small talk and favoring in-depth, idea-driven conversations.
                    Sometimes their speech comes across as unduly technical or
                    detailed because they pick their words carefully to ensure
                    accuracy. Reflective and thoughtful, INTPs give thoughtful
                    answers that might come across as hesitant in hurried
                    discussions because they take their time. They enjoy
                    discussions that push concepts and promote critical
                    thinking, frequently challenging presumptions to gain a
                    deeper understanding. They thrive in intellectual debates.
                    It can be difficult for them to express or deal with
                    feelings because they prioritize logic over emotion, which
                    can result in a communication style that occasionally comes
                    across as aloof or reserved.
                  </p>
                </section>
              )}

              {/* Romantic Relationships Section */}
              {activeSection === "romantic-relationships" && (
                <section id="romantic-relationships">
                  <h1 className="text-3xl font-bold mb-2">Relationships</h1>
                  <h2 className="text-2xl font-bold mb-2">
                    Personal Relationships with INTPs
                  </h2>
                  <p className="text-black text-lg">
                    For the most part, INTPs, who are introverted, prefer to be
                    by themselves. In social situations, introverts must expend
                    energy, in contrast to extroverts who get their energy from
                    interacting with a large number of people. To refuel and
                    regain equilibrium, INTPs may feel that they need to spend
                    time alone after being around a lot of people. With their
                    close family and friends, INTPs are typically gregarious and
                    friendly, but they may be bashful around strangers.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTPs can come across as distant and aloof to others because
                    they value solitude and introspection. People with this
                    personality type occasionally tend to lose sight of the
                    outside world and become absorbed in their thoughts. INTPs
                    value knowledge and intelligence highly and are idea-loving.
                    INTPs are generally laid-back and tolerant in social
                    settings.
                  </p>
                  <p className="text-black text-lg mt-6">
                    They may, however, become uncompromising if their
                    convictions or beliefs are questioned. Given their strong
                    focus on logic, INTPs may find it challenging to refrain
                    from correcting others when they make illogical or
                    nonsensical arguments. It can also be very challenging to
                    convince INTPs because they rely on their judgment.
                  </p>
                </section>
              )}

              {/* Friendships Section */}
              {activeSection === "friendships" && (
                <section id="friendships">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Friendships</h2>
                  <p className="text-black text-lg">
                    People with the INTP personality type (Logicians) seek
                    support and companionship from their friends, just like
                    everyone else. Nevertheless, I also value intellectual
                    depth. Not everyone will fit their ideal friend profile, but
                    when they do, a bond can form right away, surprising
                    everyone who assumed they had this aloof personality type
                    figured out.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Highly Selective
                  </h2>
                  <p className="text-black text-lg">
                    They may avoid socializing for the sake of socializing
                    because they don’t mind the company of their thoughts. It is
                    therefore not always simple to establish a close friendship
                    with these individuals. However, when INTPs do open up, they
                    can be vivacious, creative friends who never fail to say
                    something novel or intriguing.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Best friends of INTPs typically have a similar enthusiasm
                    for novel concepts, puzzles, and solutions. This personality
                    type does not, however, imply that they only look for
                    friends who share their views. Individuals who are INTPs
                    don’t mind having their opinions challenged; in fact, they
                    greatly admire those who challenge them and keep them alert.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Friendships between INTPs are knowledge-based and supported
                    by the sharing of concepts, theories, and ideas. A
                    mind-bending conversation that lasts until the early hours
                    of the morning is the most thrilling thing to this
                    personality type. People may feel ignored or dismissed if
                    they can’t keep up or if their tastes are very different
                    (don’t discuss celebrities with them). These friends only
                    engage in conversation about subjects that are important to
                    them or with people they already like.
                  </p>
                  <p className="text-black text-lg mt-8">
                    It’s acceptable that not everyone is a fan of INTPs’
                    intellectual style. The majority of people with this
                    personality type favor having a select group of close
                    friends.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    The Essence of Friendship
                  </h2>
                  <p className="text-black text-lg">
                    INTPs are usually eager to assist friends who approach them
                    with issues and conundrums. You can rely on these
                    individuals to provide sensible solutions and logical
                    advice, reducing even the most complex situations to a list
                    of advantages and disadvantages.
                  </p>
                  <p className="text-black text-lg mt-8">
                    When it comes to matters of the heart or emotional support,
                    however, people with this personality type might feel a
                    little out of their element. One of the most important (and
                    challenging) lessons for INTPs to learn about friendship is
                    that sometimes people just need someone to be there for
                    them, without trying to solve their problems.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Individuals with the INTP personality type typically think
                    that their minds are their strongest suit. Regardless of how
                    novel or revolutionary their ideas may be, friendship can
                    help them see that they have more to offer the world than
                    just their thoughts.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Friends can anticipate stimulating discussions, candid
                    honesty, and original viewpoints on a broad range of
                    subjects when they are with INTPs. Despite their small
                    number, they cherish and carefully cultivate their
                    friendships. People with the INTP personality type are
                    remarkably adept at seeing past outward manifestations of a
                    person’s social standing or appearance and recognizing their
                    inner potential. These people can encourage their friends to
                    defy expectations, disregard fads, and discover their voices
                    in a society that is fixated on fitting in.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Understanding INTP Friendship Dynamics
                  </h2>
                  <p className="text-black text-lg">
                    One of the best ways to make friends with an INTP is through
                    shared interests. They can be very slow to make friends and
                    have a tendency to place the highest value on intelligence.
                    An INTP typically makes fewer friends as a result, but the
                    ones they do make are usually very close. Your INTP friends
                    may not be the best at handling strong emotions, but they
                    enjoy connecting over meaningful discussions and common
                    interests.
                  </p>
                </section>
              )}

              {/* Parenthood Section */}
              {activeSection === "parenthood" && (
                <section id="parenthood">
                  <h1 className="text-3xl font-bold mb-2">
                    Family and parenting dynamics
                  </h1>
                  <h2 className="text-2xl font-bold mb-2">
                    Commitment to Self-Integrity
                  </h2>
                  <p className="text-black text-lg">
                    Social expectations are typically not a major concern for
                    parents who have the INTP personality type. To put it
                    another way, they hardly ever obsess over parenting tips or
                    other people’s perceptions of appropriate child behavior.
                    Additionally, they are unlikely to encourage their kids to
                    follow the conventional path of going to school, getting a
                    job, getting married, buying a home, having children, and
                    retiring—in that order. Though they might occasionally share
                    their viewpoints and ideas, INTP parents let their kids
                    develop their values and beliefs.
                  </p>
                  <p className="text-black text-lg mt-8">
                    This does not imply that INTP parents do not have
                    expectations for their kids; on the contrary, they do. These
                    individuals anticipate that their kids will be
                    self-sufficient and driven. When their children are old
                    enough, they hope to possess the critical thinking skills
                    needed to choose their course in life and determine how to
                    pursue it.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Cherishing Freedom
                  </h2>
                  <p className="text-black text-lg">
                    Children of INTP personality types are encouraged to be
                    curious and are allowed to learn new things and broaden
                    their horizons. These parents typically approach their kids
                    in a laid-back, cerebral manner. They seek to establish a
                    home environment that promotes independence and exploration
                    rather than enforcing rigid schedules or unnecessary rules.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Additionally, INTPs place a high importance on their
                    children’s intellectual development. They urge their kids to
                    question everything and think for themselves. Instead of
                    giving straight answers, these parents are more likely to
                    ask, “What do you think?” in response to a child’s question.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Respecting their children’s independence is a sign of
                    respect for INTP personalities. However, this degree of
                    personal autonomy can be intimidating for a lot of kids (and
                    even young adults). These kids may become disoriented or
                    adrift if their home environment lacks appropriate
                    boundaries and parental guidance. They may believe they must
                    navigate the world on their own, which is a difficult task.
                    Ironically, children of INTPs may require a stable home
                    environment with nurturing rules and parental approval to
                    develop into their distinct, self-sufficient personalities.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Thankfully, INTPs possess the mental adaptability to realize
                    that they can foster their kids’ independence without being
                    overly controlling. By being there to provide guidance and
                    support whenever their children need it, parents with this
                    personality type can regain equilibrium. To help their
                    children navigate everyday life without totally depending on
                    their developing self-control, they can also set reasonable
                    consequences for misbehavior and clear, commonsense
                    boundaries.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Combining Logic with Emotional Support
                  </h2>
                  <p className="text-black text-lg">
                    It may be difficult for INTP parents to provide emotional
                    support; in fact, it may be one of their biggest challenges,
                    along with setting limits and rules. Even though it may
                    require some work, these personalities are more than capable
                    of handling this challenge.
                  </p>
                  <p className="text-black text-lg mt-8">
                    The goal of INTPs is to enable their kids to take care of
                    themselves and solve their problems. Before being able to
                    face the world independently, children require a solid
                    foundation of approval and support in addition to the
                    previously mentioned guidelines and limits. These parents
                    must show their children how much they love, care for, and
                    admire them to lay this foundation.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Although outbursts of affection may appear strange or
                    excessive to logical INTP personalities, they greatly
                    contribute to children’s feelings of security, acceptance,
                    and love.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Nothing is more important to INTPs than for their kids to
                    grow up intelligent and self-sufficient. Children of this
                    personality type can develop into self-assured adults who
                    know how to ask questions, use their brains, and take care
                    of themselves no matter what happens as long as their
                    parents instill empathy in addition to reason.
                  </p>
                </section>
              )}

              {/* Career Paths Section */}
              {activeSection === "careers" && (
                <section id="careers">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Career Paths</h2>
                  <p className="text-black text-lg">
                    People with the INTP personality type (Logicians), who are
                    free-thinking and eccentric, may have trouble finding
                    careers and jobs that truly fit them. Few workplaces are
                    made with them in mind because they are eccentric
                    individuals with distinct worldviews. However, with a little
                    resourcefulness, INTPs can locate employment that fully
                    utilizes their strengths, which include inventiveness, a
                    love of ideas, and a creative spirit. Like so many other
                    aspects of this personality type, these traits are uncommon.
                    They can therefore, with a little work, figure out how to
                    stand out in a variety of fields.
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    “The INTPs love for abstract thinking and theoretical
                    frameworks allows them to excel in fields that require deep
                    analytical skills.” Brian R. Little, Me 2.0: How We Share
                    and Connect in a More Digital World
                  </blockquote>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTP as Subordinates
                  </h2>
                  <p className="text-black text-lg">
                    When given the correct circumstances, INTP employees are
                    creative and resourceful and can quickly solve any
                    challenging issues that come up. They can be extremely
                    valuable assets to their workplace due to their unique
                    capacity for task immersion and their aptitude for coming up
                    with creative solutions. Their inclination to work alone and
                    their occasional forgetfulness of important details or
                    routine tasks, however, may occasionally be viewed as a
                    disadvantage.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Tasks that appear dull or beneath them are frequently put
                    off by INTPs, but their bosses are unlikely to give them the
                    freedom and latitude they desire until they “pay their dues”
                    by completing these tasks. Despite their desire to jump
                    straight to the interesting parts, people with this
                    personality type must first prove themselves to their
                    managers.
                  </p>
                  <p className="text-black text-lg mt-8">
                    The good news is that they can develop new habits and
                    abilities that will help them succeed in the future during
                    their time at the bottom of the job ladder. Completing tasks
                    isn’t usually one of these personalities’ many strong
                    points. INTPs can be frustrated by the oversight and
                    constraints they face in their early careers, or they can
                    take advantage of the extra structure and accountability to
                    improve their ability to translate their ideas into reality.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTP as Colleagues
                  </h2>
                  <p className="text-black text-lg">
                    Sometimes, INTPs may view their coworkers as a collection of
                    possible distractions who occasionally offer helpful
                    information rather than as a group of individuals to
                    interact and collaborate with. The idea of engaging in water
                    cooler conversation won’t motivate these personalities to
                    get out of bed in the morning, but that’s not to say they
                    don’t enjoy their coworkers’ company.
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    “With their relentless pursuit of knowledge and
                    understanding, INTPs serve as the intellectual backbone in
                    any team or community.” Debra Lynne Katz, The Art of Type
                    Talk
                  </blockquote>
                  <p className="text-black text-lg mt-8">
                    Nevertheless, they may be surprised to learn how much they
                    can gain from their coworkers. INTP personalities can ensure
                    that they are truly performing at their highest level by
                    surrounding themselves with challenging individuals. Even
                    though they aren’t particularly gregarious, they frequently
                    discover that the workday goes by a bit more quickly when
                    they get to share their thoughts with colleagues they
                    admire.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Building strong relationships increases the likelihood that
                    INTPs will be asked to offer their knowledge and suggestions
                    for new initiatives. These personalities would do well to
                    position themselves as helpful collaborators rather than
                    lone wolves if they wish to stay on the cutting edge of the
                    most fascinating new developments occurring at their
                    workplace.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTP as Managers
                  </h2>
                  <p className="text-black text-lg">
                    Although INTPs frequently enjoy management roles, they
                    typically don’t care about having authority over others.
                    People with this personality type can assign administrative
                    duties that make their eyes glaze over and concentrate on
                    the important things, like coming up with new ideas, when
                    they are in charge.
                  </p>
                  <p className="text-black text-lg mt-8">
                    INTPs are typically adaptable and tolerant managers. They
                    give their employees a fair amount of autonomy and are
                    receptive to suggestions—as long as they make sense, of
                    course. However, this independence has a price: INTP
                    managers have high expectations of others, expecting them to
                    understand their insights immediately and contribute
                    equally.
                  </p>
                  <p className="text-black text-lg mt-8">
                    This personality type can be associated with exacting
                    bosses. Disparities in their employees’ work are immediately
                    noticed by them, and they might not hesitate to give
                    unfavorable criticism. With experience, INTP managers
                    frequently find that their team can experience increased
                    morale and, more importantly, improved outcomes by striking
                    a balance between constructive criticism and encouragement.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Popular INTP Careers
                  </h2>
                  <p className="text-black text-lg">
                    INTPs are often especially successful in careers related to
                    science because they like abstract and theoretical ideas.
                    They have a strong sense of logic and reasoning, but they
                    also think very creatively. In addition to emphasizing
                    personal freedom and autonomy, INTPs can be highly
                    independent. They may occasionally become irritated with
                    those in positions of authority, especially if they believe
                    that they are attempting to limit their freedom of thought
                    and action. Because of this, INTPs usually thrive in jobs
                    that allow them a lot of freedom and flexibility.
                  </p>
                  <p className="text-black text-lg">
                    If you are an INTP, you may enjoy a career as a:
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">Image Here</h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 font-bold text-xl">Chemist</li>
                    <li className="mt-4 font-bold text-xl">Physicist</li>
                    <li className="mt-4 font-bold text-xl">
                      Computer Programmer
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Forensic Scientist
                    </li>
                    <li className="mt-4 font-bold text-xl">Engineer</li>
                    <li className="mt-4 font-bold text-xl">Mathematician</li>
                    <li className="mt-4 font-bold text-xl">Pharmacist</li>
                    <li className="mt-4 font-bold text-xl">
                      Software Developer
                    </li>
                    <li className="mt-4 font-bold text-xl">Geologist</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTPs’ Motivations and Connections with Others
                  </h2>
                  <p className="text-black text-lg">
                    These personalities can occasionally be challenging for
                    their coworkers to comprehend. INTPs aren’t driven by the
                    desire to win a fancy new job title, win acceptance from
                    their coworkers, or impress their boss like many other
                    personality types are. Things that inspire other employees,
                    like team-building activities, water cooler banter, check-in
                    meetings, or inspirational speeches from supervisors, tend
                    to turn them off. Rather, this personality type is motivated
                    by their curiosity and high expectations of themselves.
                  </p>
                  <p className="text-black text-lg mt-8">
                    “Good enough” is rarely enough for INTPs, and they would
                    detest being labeled average or, worse, mediocre. However,
                    they don’t work hard for the sake of working hard, and they
                    don’t give every task their full attention. These
                    personalities occasionally tend to overlook administrative
                    or routine tasks in favor of activities they find more
                    significant or interesting.
                  </p>
                  <p className="text-black text-lg mt-8">
                    All that INTPs truly desire is to become fully engaged in an
                    intriguing project, and anything that detracts from this
                    concentration tends to irritate them.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Dealing with bosses who are too controlling or waiting for
                    other people’s opinions are two things that aggravate these
                    personalities the most. Consequently, INTPs tend to avoid
                    highly regimented, inflexible settings or occupations that
                    necessitate extensive social engagement or rigorous
                    conformity to a hierarchy. They would rather operate on
                    their own schedule. As a result, labs and pretty much any
                    setting that lets them work on projects and experiment with
                    ideas without too many people watching them can be great
                    fits for someone with this personality type. By choosing to
                    work for themselves and offer their services as consultants
                    and freelancers, many INTPs preserve their sense of
                    flexibility and independence.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTPs in the Eyes of Others
                  </h2>
                  <p className="text-black text-lg">
                    In addition to being deeply absorbed in their thoughts,
                    INTPs typically come across as unusual and unconventional to
                    others. The INTP’s mind is very active, and because of their
                    inward focus, they may overlook trivial details like
                    appropriate attire or home décor. They don’t usually care
                    about small talk, but when discussing science, math,
                    computers, or the more significant theoretical issues facing
                    the cosmos, they can get passionate. Since the architect is
                    more interested in the theory underlying everything, the
                    reality is frequently of only passing interest to them.
                  </p>
                  <p className="text-black text-lg mt-8">
                    INTPs tend to speak with precision and use well-chosen words
                    to convey complicated concepts. Even in the most casual
                    conversations, they insist on intellectual rigor and are
                    quick to point out logical or conceptual errors. An INTP may
                    disregard social graces in favor of logical analysis, and
                    they may offend others by subjecting their deeply held
                    beliefs and values to logical examination.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Rarity and Representation
                  </h2>
                  <h2 className="text-2xl font-bold mb-2 mt-6">Image Here</h2>

                  <h2 className="text-2xl font-bold mb-2 mt-6">Famous INTPs</h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl">Albert Einstein</li>
                    <li className="mt-4 text-xl">Kristen Stewart</li>
                    <li className="mt-4 text-xl">Elon Musk</li>
                    <li className="mt-4 text-xl">Tina Fey</li>
                    <li className="mt-4 text-xl">Jesse Eisenberg</li>
                    <li className="mt-4 text-xl">Rene Descartes</li>
                    <li className="mt-4 text-xl">Charles Darwin</li>
                    <li className="mt-4 text-xl">Marie Curie</li>
                    <li className="mt-4 text-xl">Socrates</li>
                    <li className="mt-4 text-xl">Abraham Lincoln</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Additional Examples
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl">Spinoza</li>
                    <li className="mt-4 text-xl">Kant</li>
                    <li className="mt-4 text-xl">Schiller</li>
                    <li className="mt-4 text-xl">Chomsky</li>
                    <li className="mt-4 text-xl">Bill Gates</li>
                    <li className="mt-4 text-xl">Herbert Spencer</li>
                    <li className="mt-4 text-xl">Fichte</li>
                    <li className="mt-4 text-xl">Bergson</li>
                    <li className="mt-4 text-xl">Robert Pirsig</li>
                    <li className="mt-4 text-xl">Christian Wolff</li>
                    <li className="mt-4 text-xl">Paul Tillich</li>
                    <li className="mt-4 text-xl">Viktor Frankl</li>
                  </ul>
                </section>
              )}

              {/* Workplace Habits Section */}
              {activeSection === "workplace-habits" && (
                <section id="workplace-habits">
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INTP Hobbies and Interests
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl">Reading</li>
                    <li className="mt-4 text-xl">Art and cultural events</li>
                    <li className="mt-4 text-xl">
                      Chess and other strategy games
                    </li>
                    <li className="mt-4 text-xl">Writing</li>
                    <li className="mt-4 text-xl">Taking classes</li>
                    <li className="mt-4 text-xl">Working with computers</li>
                    <li className="mt-4 text-xl">Hiking</li>
                    <li className="mt-4 text-xl">Meditation</li>
                  </ul>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Debunking Myths About the INTP
                  </h1>
                  <p className="text-black text-lg">
                    Many misconceptions surround the INTP personality type, also
                    known as the “Logician,” which oversimplifies or
                    misrepresents their complex nature. The following are some
                    widespread misconceptions regarding INTPs and their
                    underlying realities.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    1. Myth: INTPs Are Cold and Emotionless
                  </h2>
                  <p className="text-black text-lg">
                    Even though INTPs value reason and critical thinking, this
                    does not imply that they are emotionless or uncaring. They
                    may find it difficult to communicate their emotions
                    verbally, but they feel strong emotions and have a great
                    concern for the people and concepts they hold dear.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    2. Myth: INTPs Are Always Introverted and Antisocial
                  </h2>
                  <p className="text-black text-lg">
                    Despite their innate introversion and love of solitude,
                    INTPs are not antisocial. They flourish in meaningful
                    conversations, particularly when talking about subjects that
                    they find interesting, and they can be animated,
                    captivating, and even funny in these settings.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    3. Myth: INTPs Are Disorganized and Unreliable
                  </h2>
                  <p className="text-black text-lg">
                    When working on projects that suit their interests, INTPs
                    can be remarkably focused and dependable, despite their
                    tendency to dislike rigid routines and favor flexible
                    thinking, which can make them appear disorganized. Their
                    “organized chaos” is frequently a reflection of their
                    distinct approach to prioritization and idea management.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    4. Myth: INTPs Only Succeed in Academic or Scientific Fields
                  </h2>
                  <p className="text-black text-lg">
                    Because of their passion for problem-solving and abstract
                    thought, INTPs are frequently linked to disciplines like
                    philosophy and science. However, they also succeed in fields
                    like writing, art, technology, and entrepreneurship because
                    of their inventiveness and curiosity.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    5. Myth: INTPs Are Indifferent to Rules and Authority
                  </h2>
                  <p className="text-black text-lg">
                    INTPs are not completely unaffected by rules, even though
                    they frequently question authority and conventional norms.
                    They are more inclined to disapprove of regulations that
                    they believe to be unreasonable or ineffective, and they
                    value systems and structures that are reasonable and
                    equitable.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Interaction tips
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for friends
                  </h2>
                  <p className="text-black text-lg">
                    It’s critical to honor INTP friends’ needs for intellectual
                    stimulation and privacy when interacting with them. Discuss
                    subjects they are enthusiastic about, like science,
                    philosophy, or technology, with them in depth. INTPs value
                    friends who are willing to explore unusual ideas and who
                    prioritize in-depth conversations over small talk. A solid
                    and trustworthy friendship is also fostered by allowing them
                    to follow their interests without placing restrictions on
                    them. Your relationship will also be strengthened if you are
                    understanding and patient when they require solitude to
                    refuel.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for colleagues
                  </h2>
                  <p className="text-black text-lg">
                    Working with INTP coworkers in a professional context can be
                    very fulfilling if done carefully. Environments that promote
                    creative problem-solving and innovative thinking are ideal
                    for INTPs. Give them tasks that make sense and give them the
                    freedom to decide how to reach their objectives. Enhancing
                    teamwork and productivity can be achieved by respecting
                    their analytical approach and appreciating their input
                    during brainstorming sessions. Additionally, INTPs will
                    perform at their highest level if they receive constructive
                    criticism and refrain from micromanaging, utilizing their
                    creative and analytical strengths to the team’s advantage.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for partners
                  </h2>
                  <p className="text-black text-lg">
                    It is necessary to comprehend the distinct emotional
                    landscape and communication style of an INTP to establish a
                    romantic relationship with them. INTP partners seek a
                    profound mental connection with their partners and value
                    intellectual compatibility. Be open to their insightful
                    viewpoints and promote candid conversations about concepts,
                    goals, and dreams. It’s crucial to understand that, as
                    opposed to overt emotional expressions, INTPs may show their
                    affection through behavior and thought. Giving them the
                    freedom to think and develop on their own while
                    simultaneously creating a nurturing and thought-provoking
                    atmosphere can result in a successful and well-rounded
                    collaboration.
                  </p>
                </section>
              )}

              {/* Conclusion Section */}
              {activeSection === "conclusion" && (
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Conclusion</h2>
                  <p className="text-black text-lg">
                    An overview of the many facets of the INTP personality type
                    (Logician) is provided by what you have read thus far. You
                    might have muttered to yourself along the way, “Wow, this is
                    so accurate, it’s a little creepy,” or “Finally, someone
                    understands me!” You might have even wondered, “How do they
                    know more about me than the people I’m closest to?” If you
                    feel understood right now, it’s because you are.
                  </p>
                  <p className="text-black text-lg mt-8">
                    We now have a thorough understanding of the special
                    advantages and difficulties faced by INTPs like you thanks
                    to years of research. And that encompasses the darker sides
                    of your personality type: the inability to understand why
                    other people don’t seem to understand you, the ongoing
                    annoyance at a world that seems uninteresting and shallow,
                    and the persistent worry that all of your lofty goals may
                    never come to fruition.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Reasoning, creativity, and the capacity to see a brighter
                    future are among the gifts of INTPs, but they are not only
                    interested in learning what makes them great. When faced
                    with problems that seem unsolvable, this personality type
                    seeks out practical, significant solutions. We have
                    therefore made it our goal to assist INTPs like you in
                    maximizing your strengths. Discovering your personality type
                    is incredibly fascinating, particularly if, like many INTPs,
                    you have spent the majority of your life feeling
                    misunderstood and undervalued. But there’s more to it than
                    that.
                  </p>
                </section>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center p-8 ">
              {/* Go Back Button */}
              <button
                onClick={handleGoBack}
                className={`flex items-center text-green-500 hover:text-green-600 text-lg ${
                  sections.indexOf(activeSection) === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={sections.indexOf(activeSection) === 0}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Go Back
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className={`flex items-center text-green-500 hover:text-green-600 text-lg ${
                  sections.indexOf(activeSection) === sections.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  sections.indexOf(activeSection) === sections.length - 1
                }
              >
                Next
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default INFJBlogs