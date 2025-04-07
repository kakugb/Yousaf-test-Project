import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ENTPBlogs() {
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
                    Understanding the ENTP: The Debater
                    <br /> Personality (Extraverted, Intuitive, Thinking, and
                    Perceiving)
                  </h1>

                  <p className="text-black text-lg text-justify mt-4">
                    The debater, an ENTP personality type, is distinguished by
                    a special fusion of audacity,
                    inventiveness, and flexibility. ENTPs get their energy from
                    interacting with people, do well in hectic settings, and
                    are motivated to find creative solutions to issues. They are
                    quick-witted, self-assured, and endearing visionaries who
                    frequently take on tasks that others would consider
                    insurmountable. Although ENTPs challenge convention
                    and trust their gut feelings, they can occasionally come
                    across as impatient or unpractical.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-4">
                    What Is an ENTP Personality Type?
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Katharine Briggs and Isabel Myers identified sixteen
                    personality types, including ENTP, which stands for
                    Extraverted, Intuitive, Thinking, and Perceiving.
                    These people are driven by social
                    interactions, give logic precedence over details when making
                    decisions, embrace spontaneity over strict plans, and
                    concentrate on big-picture concepts. Since
                    they are passionate about innovation and
                    creative problem-solving, ENTPs are frequently referred to
                    as "Visionary" personalities.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ENTPs, who are renowned for their audacity and
                    mental dexterity, love coming up with new ideas and breaking
                    down concepts to reassemble them in novel and unusual ways.
                    They are frequently referred to as "devil's advocates"
                    because they are born debaters who love to refute
                    presumptions, including their own. Because of their
                    curiosity and desire to learn about other viewpoints, they
                    have a contrarian streak and are adept at seeing
                    opportunities that others might miss. ENTPs, on the other
                    hand, tend to shy away from repetitive tasks in favor of
                    concentrating on abstract concepts rather than
                    the specifics.
                  </p>

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black text-xl py-10 mt-6">
                    Follow the path of the unsafe, independent thinker. Expose
                    your ideas to the dangers of controversy.
                    <span className="font-bold">— Thomas J. Watson</span>
                  </blockquote>

                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    Rebellious Streak and Innovation
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ENTPs are known for their
                    rebellious nature, which fuels their unrelenting quest for
                    change and innovation. They believe that no principle is too
                    fundamental to examine, no belief is too sacred
                    to challenge, and no rule is too significant to put to
                    the test. Their propensity to question conventions is not a
                    result of disobedience, but rather
                    of their natural curiosity and drive to push boundaries
                    in creative, unorthodox ways. 
                  </p>

                  <p className="text-black text-lg mt-4">
                    ENTPs enjoy challenging the dominant
                    ways of thinking and finding hidden value in underdogs
                    or underappreciated ideas rather than mindlessly following
                    social pressures or traditions. They find opportunities
                    to reconsider what others take for granted
                    because their active minds are always reimagining
                    possibilities. But turning their intellectual energy
                    into observable, practical accomplishments is one of their
                    biggest obstacles.
                  </p>

                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    Challenges with Follow-Through
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ENTPs enjoy brainstorming and big-picture thinking, but they
                    frequently shun the "grunt work" of making their
                    ideas a reality. They might find it difficult to set
                    priorities and complete their tasks when there are so
                    many ideas and recommendations vying for their attention.
                    They may not be able to reach their full potential because
                    of this tendency unless they become more
                    disciplined and willing to see their ideas through
                    to completion.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Despite their legendary love of debate and questioning,
                    ENTPs aren't always beneficial. Openly disagreeing
                    with their boss or analyzing a partner's remarks during a
                    meeting could come across as supporting reason and logic.
                    These contrarian tendencies, however, may inadvertently
                    undermine their prospects for prosperity and contentment,
                    particularly if it comes at the expense of other people's
                    patience or sentiments.
                  </p>

                  <p className="text-black text-lg mt-4">
                    The innate tendency of ENTPs to challenge beliefs or ignore
                    feelings is not always advantageous. This conduct could
                    eventually cause rifts and make it more difficult for
                    them to form lasting bonds. They are respected for
                    their humor, vision, and self-assurance, but maintaining
                    both personal and professional success requires developing
                    sensitivity and knowing when to control their contrarian
                    tendencies.
                  </p>

                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    Balancing Contrarianism with Compassion
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Many ENTPs learn that developing and sustaining healthy
                    relationships requires a more compassionate approach.
                    Their natural tendency is to "win" arguments and promote
                    reason, but they eventually realize that doing so can turn
                    off the people they need to get what they want.
                    Understanding the value of others in their ideal life,
                    ENTPs discover that their nonconformist edge can coexist
                    with consideration and compromise.
                  </p>

                  <p className="text-black text-lg mt-4">
                    By using their cognitive flexibility, ENTPs can investigate
                    different viewpoints while striking a balance between their
                    emotional sensitivity and their drive for advancement. They
                    are still able to stay true to their innovative and
                    visionary nature while making meaningful connections thanks
                    to this change. Despite their propensity for coming up with
                    grand theories and ideas, ENTPs frequently find it
                    difficult to put them into practice. Further highlighting
                    the need to strike a balance between creativity and
                    pragmatism, their emphasis on possibilities rather than
                    specifics can result in a cycle of brainstorming
                    without action.
                  </p>

                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    Boundless Energy and Restlessness
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ENTPs are adaptable and tolerant people who are constantly
                    seeking out new concepts and opportunities due to
                    their restless energy. They enjoy novelty and are easily
                    bored. They frequently balance an endless number
                    of interests and investigate several areas of interest
                    simultaneously. They have fast-paced minds that
                    produce ideas and connections at breakneck speed. This
                    mental activity can cause anxiety, restlessness, and
                    even irregular sleep patterns. 
                  </p>

                  <p className="text-black text-lg mt-4">
                    Additionally, ENTPs take pleasure in exchanging ideas and
                    forming imaginative connections with others.
                    However, their propensity to be distracted can also make
                    them seem disorganized, erratic, or unfocused, which can
                    lead to incorrect diagnoses of ADHD or ADD. Open-Minded
                    Skepticism
                  </p>

                  <p className="text-black text-lg mt-4">
                    Incoming information is not meticulously screened and
                    filtered by ENTPs, in contrast to ENTJs or other types with
                    a dominant Judging function. They are genuinely one of the
                    most receptive groups when it comes to taking in ideas
                    from other people. They are not necessarily quick to accept
                    new information as true, though, just because they
                    are receptive to it. Even though they do so in a rather
                    passive manner, ENTPs gradually develop their theories about
                    the world and human nature as they absorb ideas over time.
                    Their skepticism and criticism of the majority's opinions
                    increase when these theories don't align with
                    conventional wisdom, which is frequently the case.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Incoming information is not meticulously screened and
                    filtered by ENTPs, in contrast to ENTJs or other types with
                    a dominant Judging function. They are genuinely one of the
                    most receptive groups when it comes to taking in ideas
                    from other people. They are not necessarily quick to accept
                    new information as true, though, just because they
                    are receptive to it. Even though they do so in a rather
                    passive manner, ENTPs gradually develop their theories about
                    the world and human nature as they absorb ideas over time.
                    Their skepticism and criticism of the majority's opinions
                    increase when these theories don't align with
                    conventional wisdom, which is frequently the case.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Despite being extraverted by nature, ENTPs can share traits
                    with INT types, such as skepticism and
                    unconventional thinking. ENTPs are not particularly
                    intentional or agenda-driven when they are concentrating on
                    their primary function, Extraverted Intuition (Ne); in fact,
                    their only objective may be to prevent boredom. They may
                    therefore lack the INTP's purposeful motivation or fixation
                    on uncovering the truth. 
                  </p>

                  <p className="text-black text-lg mt-4">
                    Many ENTPs, particularly those who have developed their
                    auxiliary function, Introverted Thinking (Ti), are aware of
                    their propensity to philosophize. They enjoy exploring
                    broad metaphysical theories and reoccurring patterns, just
                    like INTPs do. Despite these inclinations, they seem less
                    likely to become solely focused on intellectual endeavors,
                    opting instead to allocate their
                    energies across a range of hobbies and interests.
                  </p>
                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    ENTP-T and ENTP-A Subtypes
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    ENTPs can be further categorized into two groups: ENTP-T and
                    ENTP-A.
                  </p>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4">
                      <span className="font-bold">
                        ENTP-T’s (Turbulent debaters):
                      </span>{" "}
                      They are frequently enraged, envious, or in need
                      of attention, approval, and agreement. Compared to
                      ENTP-A’s, they exhibit more emotionally motivated
                      behavior.
                    </li>
                    <li className="mt-8">
                      <span className="font-bold">
                        ENTP-A’s (Assertive debaters):
                      </span>{" "}
                      Compared to ENTP-T’s, ENTP-A’s are more
                      self-assured, assume that others accept them, and are
                      less interested in talking
                      about their emotions. They typically
                      exhibit less emotional reactivity.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-6 mb-4">
                    Cognitive Functions and Development Phases
                  </h2>

                  <p className="text-black text-lg mt-4">
                    According to Jung's original eight functions, each
                    personality type favors using four of them. All four of
                    these operations make up its "function stack.".
                    Dominant, auxiliary, tertiary, and inferior are the four
                    functions that are arranged according to the relative
                    strength of preference. In that order, ENTPs prefer Ne
                    over Ti, Fe, and Si. This is demonstrated by the way
                    their function stack is organized.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-4">
                    ENTP Function Stack
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Dominant: Extraverted Intuition (Ne)
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    Auxiliary: Introverted Thinking (Ti)
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    Tertiary: Extraverted Feeling (Fe)
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    Inferior: Introverted Sensing (Si)
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    ENTPs’ Dominant Function: Extraverted Intuition (Ne)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENTPs are motivated to explore concepts, relationships, and
                    opportunities rather than novel experiences or material
                    objects because of a novelty-seeking function called
                    extraverted intuition (Ne). Ne's verbal
                    expression is comparable to "brainstorming aloud," and it
                    possesses both expressive and perceptual functioning
                    abilities. ". ENTPs are renowned for their ability to switch
                    between ideas quickly, which they commonly employ to make
                    decisions after weighing several options. Others may not
                    trust Ne's seemingly random nature, but ENTPs cherish it
                    and think it will lead them to truth or wisdom. Many ENTPs
                    make their expressions even simpler by using their tertiary
                    function, Extraverted Feeling (Fe).
                  </p>
                  <p className="text-black text-lg mt-4">
                    Ne is receptive, obtaining information beyond sensory data
                    and identifying potentials and hidden patterns.
                    Through reading, watching movies, and having conversations,
                    ENTPs use this aspect of their personalities. Ne multiplies
                    possibilities rather than condensing them to a single
                    solution, in contrast to Introverted Intuition (Ni), which
                    is intensive and convergent. Convergence is possible for
                    ENTPs with the aid of their auxiliary Introverted
                    Thinking (Ti).
                  </p>
                  <p className="text-black text-lg mt-4">
                    Additionally, Ne encourages open-mindedness, which
                    helps ENTPs see the truth on both sides of a
                    debate without drawing hasty judgments. It helps them
                    resist excessive external structuring, which
                    they perceive as an infringement on their autonomy, and to
                    appreciate alternative lifestyles. Since they
                    thrive in dynamic environments, they may become bored and
                    frustrated by static or sterile surroundings.
                  </p>
                  <p className="text-black text-lg mt-4">
                    For ENTPs, Ne presents difficulties despite its advantages.
                    They may become indecisive as a result, and they may find it
                    difficult to remain composed or reach firm decisions. Even
                    so, they value the openness, wonder, and adventure that
                    Ne offers despite navigating its complexities.
                  </p>
                  <p className="text-black text-lg mt-4">
                    The dominant function of ENTPs, according to the
                    Myers-Briggs framework, is Extroverted Intuition. Their
                    ability to quickly gather information, identify hidden
                    connections, and concentrate on possibilities is a result of
                    this. Their innovative ideas are what drive
                    their entrepreneurial minds, which
                    makes them adept at spotting connections that others
                    might miss.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    ENTPs’ Auxiliary Function: Introverted Thinking (Ti)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Because they are dominant perceivers, ENTPs tend to
                    be passive and stay in an open mode of perception until they
                    are asked to use their auxiliary judging function,
                    Introverted Thinking (Ti). ENTPs exhibit intense,
                    inward-focused behavior when forced to use their Ti, which
                    is similar to how INTPs normally behave. However,
                    this logical side of the ENTP might go unnoticed by others
                    because Ti is introverted.
                  </p>
                  <p className="text-black text-lg mt-4">
                    It entails using reason and logic to comprehend a
                    system, issue, or circumstance. It gives ENTPs a strong
                    sense of inner control by structuring their inner world. By
                    using their Ti, ENTPs investigate the sources of their
                    ideas to make sure they make sense. They are
                    excellent at seeing contradictions or speculating about
                    situations in which a theory might fail. ENTPs are better at
                    asserting the untruth than they are at boldly stating the
                    truth.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ENTPs and INTPs differ primarily in where Ti is located in
                    their function stack. Ti is dominant in INTPs, which
                    makes them more quick to make internal judgments. Ne
                    is their auxiliary for additional investigation. ENTPs have
                    the opposite order. They examine concepts through Ne's new
                    perspective before using Ti
                    to hone and clarify these impressions.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Compared to INTPs, ENTPs are more receptive to ambiguity and
                    playful exploration because of their dominant Ne. For
                    instance, ENTPs rank "having fun" as a top value and
                    frequently place a high priority on enjoyment and adventure.
                    The dominant Ti of INTPs, on the other hand, forces them to
                    take life more seriously. A further characteristic that sets
                    ENTPs apart from INTPs is their increased interest
                    in the arts and culture. The difference between Ti and Fi
                    (Introverted Feeling) emphasizes their rational focus even
                    more. Fi types are adept at making moral judgments and
                    evaluating things according to their goodness, badness,
                    hate, and love. On the other hand, TPs assess situations as
                    logical or illogical, placing a higher value on sound
                    reasoning and paying less attention to morality up front.
                    It may be difficult for ENTPs to discern between logical (T)
                    and emotional (F) considerations at an early age because Ti
                    and Fe are adjacent in their function stack.
                  </p>
                  <p className="text-black text-lg mt-4">
                    The information obtained by their dominant Ne is processed
                    by ENTPs when they activate their Ti. They can make sense
                    of a variety of concepts and data thanks to
                    the logic and order this function imposes. The "why" and
                    "how" behind something's operation is of greater interest to
                    ENTPs than simply knowing that it works.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    ENTPs’ Tertiary Function: Extraverted Feeling (Fe)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Extraverted Feeling (Fe), the most interpersonal of all the
                    functions, is the tertiary function of ENTPs and aims to
                    promote harmony, understanding, and peace.  Fe entails
                    paying attention to both what is said and how it is
                    said. Even though they might not be as sensitive to outside
                    conflict as some other types, ENTPs nevertheless make an
                    effort to foster positive emotions in their surroundings,
                    even if unintentionally.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ENTPs are more at ease internalizing judgments (Ti) than
                    extroverting them (Fe), despite Fe being their preferred
                    extraverted Judging function and occupying
                    a lower position in their function stack. This may cause
                    them to routinely submit to the desires of others instead of
                    expressing their own, as is the case with other Perceiving
                    types. But because of their sharp minds, they might become
                    internally resentful of people who they believe are
                    attempting to manipulate them. Even though ENTPs tend to
                    be more self-assertive than IPs, their discomfort with
                    using Fe can still cause problems in their relationships.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Fe, when fully developed, enables ENTPs to
                    become gregarious charmers who get along with people. In
                    contrast, when this facet of their personality is less
                    strong, ENTPs could come across as distant or cruel, which
                    could cause others to misinterpret their motivations.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    ENTPs’ Inferior Function: Introverted Sensing (Si)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENTPs may not realize how much their inferior function,
                    Introverted Sensing (Si), affects their choices and actions,
                    just like other types do. For ENTPs looking to better
                    understand themselves and their personalities, it is crucial
                    to comprehend how Si shows up in their personalities.
                    The opposite of Extraverted Intuition (Ne), Introverted
                    Sensing is concerned
                    with past preservation and precedent-based limit
                    recognition.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Si is meticulous and cautious, whereas Ne
                    is broad-minded and forward-thinking. Although ENTPs
                    consciously embrace Ne's creative nature, they may
                    experience internal conflict as a result of their
                    subconscious Si's pull toward tradition and structure.
                  </p>
                  <p className="text-black text-lg mt-4">
                    In everyday life, this conflict is apparent: ENTPs may put
                    off doing menial chores like exercising or paying their
                    bills, but when they are intensely focused on a project,
                    they may become perfectionistic. Moreover, Si affects
                    body awareness, which can occasionally result
                    in overcompensation and psychosomatic issues.
                    Furthermore, ENTPs are skilled in professions like politics
                    or journalism because they frequently combine their
                    visionary Ne with their historical interests (driven by Si).
                  </p>
                  <p className="text-black text-lg mt-4">
                    To avoid being limited by Si, ENTPs must rely on their
                    strengths in Ne and Ti to maintain equilibrium in this
                    dynamic. Si offers useful insights, but it can also present
                    problems, like forgetting details or holding onto
                    out-of-date patterns. ENTPs
                    can encourage personal development and creative exploration
                    by fusing Ne's vision with Si's respect for the past.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Development Phases
                  </h2>
                  <p className="text-black text-lg mt-4">
                    The type development of ENTPs is divided into three stages.
                    Generally speaking, these stages match the function stack's
                    ordering, with Ne blossoming first, Ti second, and so forth.
                    The inferior function, however, is a unique situation that
                    demands ENTPs' attention earlier than might be anticipated,
                    as we shall see.
                  </p>
                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase I: Early Life and Growth
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Phase I, which spans from childhood to early adulthood, is
                    when the dominant function of ENTPs, Extraverted
                    Intuition (Ne), emerges and differentiates. This is
                    particularly noticeable during this stage of development,
                    even though ENTPs are naturally
                    inquisitive and tolerant throughout their lives. Phase I
                    ENTPs are free to relax and take in the world
                    without excessive worry or concern, aside from the demands
                    of education. This enables their Ne to form a
                    variety of associations and connections that may ultimately
                    come together to form a cohesive worldview.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase II: From Adolescence to Adulthood (Teens to 30s)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Introverted Sensing (Si), the inferior function of ENTPs,
                    takes over and starts to play a more significant and cunning
                    role once the dominant function reaches
                    a particular threshold of strength and dominance.
                    Although the inferior function is not the next in line for
                    development in the function stack, its bipolar relationship
                    with the dominant function gives it undue influence, which
                    can be confusing. Regretfully, Phase II of type development
                    is when the inferior's influence peaks and this is also
                    when people are
                    making crucial decisions regarding their relationships and careers.
                    Issues about inferior function in ENTPs are covered later in
                    this profile.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Phase II ENTPs are also developing their auxiliary function,
                    Introverted Thinking (Ti), in addition to the growing
                    influence and presence of Si. Ti gives the thoughts,
                    identity, and worldview of ENTPs more
                    structure and clarity. As ENTPs grow and apply their Ti,
                    they might also become more driven, serious, and focused.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase III: Life’s Later Chapters: 30s, 40s, and Beyond
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENTPs grow more conscious of the sneaky ways of their
                    inferior Si if they are lucky enough to enter Phase III.
                    They experience more balance between their Ne and Si as they
                    grow more conscious of their inferiority and learn
                    to act more like ENTPs. They find that as they authentically
                    use their Ne and Ti, integrating their Si occurs
                    organically and indirectly. Their sense of peace, wholeness,
                    and contentment increases as they create environments that
                    enhance their innate strengths.
                  </p>
                </section>
              )}

              {/* Strengths and Weaknesses Section */}
              {activeSection === "strengths-weaknesses" && (
                <section id="strengths-weaknesses">
                  <h2 className="text-2xl font-bold mb-4">ENFP Strengths</h2>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Excellent Communicators
                  </h2>

                  <p className="text-black text-lg text-justify mt-4">
                    Communication skills are exceptional, and ENFPs know how to
                    use them. At any time, they will strike up a conversation
                    with anyone, and they are skilled at attracting others in a
                    way that maintains the flow of the conversation. ENFPs are
                    the engine that keeps the conversation going, whether it's
                    taking place informally or in the workplace. Though they are
                    full of things to say, people with the ENFP personality type
                    can also listen with compassion. Their ability to engage in
                    constructive and pleasurable dialogue with a wide range of
                    individuals, including those who aren't particularly
                    gregarious or agreeable, is almost unrivaled.
                  </p>
                  <h2 className="text-2xl font-bold mb-1 mt-4">Imaginative</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    The notion that conventional methods are always the best is
                    rejected by ENFPs, who solve problems creatively. They
                    refuse to become prisoners of routine or habit and think
                    that an innovative approach is both desirable and feasible
                    in every circumstance. They approach every obstacle they
                    encounter with new perspectives and no preconceived ideas,
                    and they view obstacles as opportunities.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Natural Leaders
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Easily and naturally, ENFPs take on leadership roles right
                    away. They have faith that they can manage difficult tasks
                    that many people find frightening or intimidating. carefully
                    listening to their colleagues' opinions and enthusiastically
                    responding to their insightful recommendations, ENFP leaders
                    are consensus builders who put a lot of effort into earning
                    their trust. They inspire and motivate others to take action
                    with their assertive, "can-do" attitude.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Strong Social Conscience
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    ENFPs frequently participate in social movements and are
                    unapologetically vocal about their beliefs. Although some
                    people play the compassion game but don't actually do
                    anything about it, ENFPs think it's crucial to support kind
                    words with deeds. Even though they are generally amiable,
                    when an ENFP witnesses injustice and suffering, they will
                    explode with righteous rage. If they need to make their
                    opinions known, they can become very vocal and forceful.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Curious</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Nearly anything can be beautiful and fascinating to people
                    with the ENFP personality type. Being creative and
                    receptive, ENFPs don't hesitate to step outside of their
                    comfort zone in pursuit of novel concepts, encounters, and
                    adventures. Furthermore, they are not only curious about new
                    things. They also have a strong desire to comprehend the
                    workings of the world and the reasons behind its current
                    state.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Perceptive</h2>

                  <p className="text-black text-lg text-justify mt-4">
                    Individuals with this particular personality trait don't
                    consider anyone insignificant, possibly due to their ability
                    to detect even the slightest changes in another person's
                    emotion or facial expression. Given their heightened
                    awareness of others' emotions and requirements, ENFPs can
                    effectively utilize their compassionate and thoughtful
                    disposition.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Enthusiastic</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    When they find something inspiring and captivating, ENFPs
                    want to share it with as many people as possible.
                    Additionally, they are equally interested in hearing other
                    people's perspectives, even if they diverge greatly from
                    their own.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Easygoing</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Though they may enjoy in-depth discussions, ENFPs can also
                    be impulsive and humorous. These individuals are adept at
                    finding joy and fun in the here and now, and there aren't
                    many things that make them happier than spreading their
                    happiness to others.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Good-Natured and Positive
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    The combination of these qualities creates a person who is
                    friendly, approachable, altruistic, and warm-hearted. Since
                    ENFPs aim to get along with almost everyone, they frequently
                    have large social networks of friends and acquaintances.
                  </p>

                  <h2 className="text-3xl font-bold mb-1 mt-4">
                    ENFP Weaknesses
                  </h2>
                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Hypersensitivity
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    ENFPs often let their imaginations run freely, sometimes
                    perceiving false negative intentions. Their heightened
                    awareness contributes to better social understanding, but
                    deciphering hidden messages only proves fruitful when
                    there's something concealed. When there's nothing hidden,
                    miscommunications may occur, potentially causing hurt
                    feelings and damaging strong relationships.
                  </p>

                  <h1 className="text-2xl font-bold mt-8 mb-2">
                    Lack of Focus and Follow-Through
                  </h1>
                  <p className="text-black text-lg">
                    A thousand days could be filled with a thousand audacious
                    ideas from ENFPs' boundless creativity. Their best ideas
                    might never be implemented, though, if they don't always
                    carry out their inspirations and don't enlist others to
                    manage the details. ENFPs tend to over-rely on their initial
                    enthusiasm and passion and lack the self-control needed to
                    turn their ideas into practical output. ENFPs sometimes fail
                    to see things through to completion because they have a
                    propensity to begin new projects before the last ones are
                    completed.
                  </p>
                  <h1 className="text-2xl font-bold mt-4 mb-2">Overthinking</h1>
                  <p className="text-black text-lg">
                    ENFPs often overanalyze other people's actions, which can
                    cause needless rage and conflict. They also have a
                    propensity to see slights, resentments, or hostility where
                    none actually exist. Insecurities can be triggered and ENFPs
                    may begin to feel unloved and undervalued if they don't get
                    the amount of praise they anticipate from their partners.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Overemotional and Approval-Seeking
                  </h2>
                  <p className="text-black text-lg">
                    Even though an ENFP's emotional expression is fundamental to
                    who they are, it can be overpowering. Not all partners are a
                    good fit for the vivacious personality of ENFPs, and
                    introverts in particular may feel rushed around them. In an
                    attempt to make a good impression, ENFPs may go a bit too
                    far, talking too much and listening too little because they
                    are also approval-seekers and want acknowledgement and
                    praise.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    People-Pleasing
                  </h2>
                  <p className="text-black text-lg">
                    Those identified as ENFPs typically feel uneasy about the
                    possibility of being disliked. In order to keep the peace,
                    they may sacrifice their own values or endure mistreatment.
                    When they fail to win someone's approval, they might
                    experience sleepless nights, contemplating possible courses
                    of action.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Disorganized
                  </h2>
                  <p className="text-black text-lg">
                    Sometimes, ENFPs' attention to daily practical issues is
                    overshadowed by their big-picture focus and love of
                    discovering new concepts and experiences. In particular,
                    those with this personality type might attempt to avoid
                    mundane activities that they find uninteresting, such as
                    paperwork, basic maintenance, or housework. Their life may
                    become extremely stressful as a result of the ensuing
                    feeling of disarray.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Overly Accommodating
                  </h2>
                  <p className="text-black text-lg">
                    When someone asks for advice or assistance, ENFP
                    personalities may find themselves responding in the
                    affirmative because they feel compelled to encourage others.
                    Even the most active of them may become overcommitted and
                    lack the time and energy to take care of their own needs if
                    they don't establish boundaries.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Overly Optimistic
                  </h2>
                  <p className="text-black text-lg mt-4">
                    One of this personality type's main advantages may be
                    optimism. However, the optimistic attitude of ENFPs can
                    cause them to make well-meaning but naïve choices, like
                    trusting people they haven't earned. This characteristic may
                    also make it challenging for these personalities to share
                    and accept difficult but necessary truths.
                  </p>

                  <h1 className="text-2xl font-bold mb-4 mt-6">Restless</h1>
                  <p className="text-black text-lg mt-4">
                    On the outside, ENFPs rarely appear unhappy or dissatisfied
                    due to their cheerful, positive outlook. However, their
                    internal idealism may cause them to feel constantly that
                    they are falling short in some important areas of their
                    lives, such as their relationships, their jobs, or their
                    homes.
                  </p>
                </section>
              )}

              {/* Romantic Relationships Section */}
              {activeSection === "romantic-relationships" && (
                <section id="romantic-relationships">
                  <h1 className="text-3xl font-bold mb-2">Relationships</h1>
                  <h2 className="text-2xl font-bold mb-2">
                    Romantic Relationships
                  </h2>

                  <p className="text-black text-lg mt-6">
                    Since they are extraverted, ENFPs enjoy interacting with
                    people. By nature, they are cheerful, affectionate, and
                    constantly looking to improve their relationships. Sharing
                    their emotions and life experiences with their partners
                    helps ENFPs connect with them. They encourage their partners
                    to follow their dreams and expect the same support in
                    return. They accept their partners for who they are and
                    refrain from forcing them to be or do anything in
                    particular.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INFJs are motivated by their strong morals and look for
                    purpose in friendships and interpersonal relationships,
                    among other aspects of their lives. Even though they might
                    not know many people, the close friendships they do make are
                    frequently incredibly strong and enduring. INFJs are great
                    listeners who provide emotional support and connection to
                    people they care about.
                  </p>
                  <p className="text-black text-lg mt-6">
                    In love, ENFPs are extremely idealistic, full of ideas,
                    hopes, and dreams, and they yearn for a life filled with
                    rich experiences. They show their partners a lot of
                    affection and have faith in the depth of their feelings,
                    which makes them fall in love quickly and deeply. They
                    remain optimistic despite real-world difficulties, such as
                    long-distance relationships. But occasionally, their high
                    standards and fervor can make it challenging when their
                    partner requires more emotional or physical space.
                  </p>
                  <p className="text-black text-lg mt-6">
                    ENFPs often focus on what is possible rather than
                    appreciating things as they are, which can make long-term
                    relationships difficult for them. They might wonder if their
                    devotion has been misdirected if the excitement begins to
                    wane. ENFPs must value the present while keeping things
                    interesting and novel through travel and novel experiences
                    in order to sustain a fruitful collaboration. Despite their
                    sensitivity, they prefer to avoid conflict and instead
                    retreat, which can affect how well people communicate in
                    relationships.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Compatibility with Other Personality Types
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJ and INFJ personality types are likely to be the most
                    compatible with ENFPs, making them excellent candidates for
                    marriage or other partnerships.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ISTP, ESTJ, ISTJ, and ISFJ personalities, on the other hand,
                    are the least compatible with ENFPs, and these relationships
                    frequently present difficulties.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Certain personality types are inherently compatible with the
                    values, hobbies, and outlook of the ENFP. Although they may
                    not always agree, these like-minded people frequently get
                    along well with ENFPs and have a lot in common.
                  </p>

                  <p className="text-black text-lg mt-4">
                    On the other hand, confronting the opposite can lead to both
                    meaningful chances for personal development and personality
                    conflicts. At first, it could be challenging to relate to
                    these types because of their essentially different values
                    and motivations. However, relationships with them can
                    promote significant personal development because their
                    strengths complement the ENFP's weaknesses.
                  </p>
                </section>
              )}

              {/* Friendships Section */}
              {activeSection === "friendships" && (
                <section id="friendships">
                  <h2 className="text-3xl font-bold mb-2 mt-6">
                    ENFPs as Friends
                  </h2>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    {" "}
                    Transforming Ordinary Moments into Adventures
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Enthusiastic and creative, ENFPs are adept at transforming
                    even the most mundane situations into memorable events. They
                    can turn any event into an adventure with their
                    characteristic good humor, whether it's a memorable dance
                    party, an unplanned cookie-baking competition, or a
                    thoughtful discussion about the state of the world. Almost
                    every opportunity to spend time with friends is an
                    opportunity for ENFPs to make enduring memories.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Balancing Social Connections with Deeper, Meaningful
                    Relationships
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Even though ENFPs appear to be social by nature, they have a
                    strong desire for deep connections. However, some people
                    might not be as receptive to emotional depth as ENFPs are.
                    Others might have judgmental or narrow-minded opinions that
                    run counter to ENFPs' principles. When ENFPs feel that the
                    world is happy with surface-level relationships, they may
                    wonder if their desire for meaningful human connection is
                    too great for other people to handle. They may find it
                    difficult to accept that they can't befriend everyone
                    because they are eternal idealists.
                  </p>
                </section>
              )}

              {/* Parenthood Section */}
              {activeSection === "parenthood" && (
                <section id="parenthood">
                  <h1 className="text-3xl font-bold mb-2">ENFPs as Parents</h1>

                  <p className="text-black text-lg mt-4">
                    ENFPs are imaginative, loving parents who love creating new
                    experiences for their families and encouraging their kids to
                    develop as people. Whether it's dolls and dinosaurs today or
                    oceans and stars tomorrow, they foster curiosity and easily
                    adjust to their kids' changing interests. They are great
                    confidants because of their radiance of acceptance and
                    compassion, which fosters safe environments where kids can
                    freely express their frustrations, anxieties, and dreams
                    without worrying about being judged.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Although ENFPs have strong moral convictions, they have a
                    hard time enforcing discipline because they value close
                    relationships more than anything else. For fear of
                    alienating their kids, they might be reluctant to establish
                    clear limits. Many ENFP parents eventually discover, though,
                    that providing just the right amount of structure fosters
                    their kids' success. Seeing it as another way to show their
                    love and concern, they figure out how to firmly but lovingly
                    enforce the rules that are necessary.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Even though ENFPs are passionate about parenting, they can
                    get bored easily with routine tasks and demands. Rather than
                    routine duties, they derive the most joy from emotional
                    connection and creative exploration with their children.
                  </p>
                </section>
              )}

              {/* Career Paths Section */}
              {activeSection === "careers" && (
                <section id="careers">
                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Career Preferences for ENFPs
                  </h1>

                  <p className="text-black text-lg mt-4">
                    ENFPs look for work that reflects their values and are
                    frequently inspired by their support of humanitarian causes.
                    They have a special interest in assisting others in their
                    personal growth. They are particularly drawn to occupations
                    that enable them to pursue the goals of artistic expression
                    and personal development.
                  </p>

                  <p className="text-black text-lg mt-4">
                    They excel at speaking and writing, and they are
                    well-represented in journalism. Because they enjoy
                    identifying and developing others' potential, many ENFPs are
                    drawn to careers in teaching, counseling, or ministry. While
                    some people prefer to work primarily with ideas, others like
                    to mix this with adventure and action.
                  </p>

                  <p className="text-black text-lg mt-4">
                    The scientific and technical domains where ENFPs can make a
                    difference, like environmental science and human health, may
                    also appeal to them. Additionally, they can balance
                    creativity and a sense of human connection by working in
                    communications and social media.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Flexibility and Creativity in the Workplace
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Open-ended, flexible work settings that encourage innovation
                    and teamwork are ideal for ENFPs. They enjoy asking
                    questions and are drawn to variety. When they are forced to
                    devote all of their energy to a single project or topic for
                    an extended period of time, they often become distracted.
                  </p>

                  <p className="text-black text-lg mt-4">
                    They may become discouraged by repetition and
                    predictability. They particularly dislike routine work that
                    involves a lot of rules or uninteresting details because
                    they prefer dynamic and demanding assignments.
                  </p>

                  <p className="text-black text-lg mt-4">
                    However, when immersed in a creative project, ENFPs can
                    become perfectionistic and obsessive over details, even
                    though they frequently struggle with managing everyday life
                    details like paying bills, eating a balanced diet, or
                    exercising regularly.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ENFP Career Statistics
                  </h2>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4text-lg">
                      <b>Gender Wage Gap:</b> Female ENFPs only make 72% of what
                      male ENFPs make, making them one of the groups with the
                      biggest gender wage gaps.{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Self-Employment vs. Standard Job Income</b>{" "}
                      Self-employed ENFPs typically make $60,000, which is
                      higher than the $48,000 they would make in a regular job.{" "}
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Popular Careers for ENFPs
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4  text-lg">
                      Counseling & Psychology (Counselor, Therapist, Social
                      Worker)
                    </li>

                    <li className="mt-4  text-lg">
                      Teaching & Education (Teacher, Professor, Educational
                      Consultant)
                    </li>
                    <li className="mt-4  text-lg">
                      Arts & Creativity (Writer, Journalist, Actor, Musician,
                      Graphic Designer)
                    </li>
                    <li className="mt-4  text-lg">
                      Communication & Media (Public Relations Specialist, Social
                      Media Manager, Marketing Specialist)
                    </li>
                    <li className="mt-4  text-lg">
                      Science & Environment (Human Health Researcher,
                      Environmental Scientist)
                    </li>
                    <li className="mt-4  text-lg">
                      Entrepreneurship & Business (Startup Founder, Business
                      Consultant, Life Coach)
                    </li>
                    <li className="mt-4  text-lg">
                      Ministry & Nonprofit Work (Clergy Member, NGO Worker,
                      Community Organizer)
                    </li>
                  </ul>
                </section>
              )}

              {/* Workplace Habits Section */}
              {activeSection === "workplace-habits" && (
                <section id="workplace-habits">
                  <h2 className="text-3xl font-bold mb-2 mt-6">
                    Workplace Habits
                  </h2>

                  <p className="text-black text-lg mt-4">
                    People with the ENFP personality type (Campaigners) are
                    known for their innate charm and inventiveness, which infuse
                    their work environment with a special vitality. They love
                    coming up with ideas with their teams, and they usually do
                    well in leadership roles because they can bring
                    encouragement and positivity to the workplace. No matter
                    where they are in their career, ENFPs frequently use their
                    warmth and open-mindedness to make their workplaces more
                    imaginative, motivating, and compassionate.
                  </p>

                  <p className="text-black text-lg mt-4">
                    ENFP personalities are happiest when given the opportunity
                    to experiment with new ideas, regardless of whether they are
                    CEOs or recent hires. It's even better if they can
                    investigate those concepts with others who are as excited as
                    they are. ENFPs view all of their coworkers as equals, in
                    contrast to some personality types who are ardent supporters
                    of workplace hierarchy. Although they probably want to make
                    a good impression on everyone, they might also want to
                    impress their boss.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ENFP Subordinates
                  </h2>

                  <p className="text-black text-lg mt-4">
                    As workers, ENFPs frequently wow their supervisors with
                    their inventiveness and flexibility. Individuals with this
                    personality type are not afraid to try new things and alter
                    their plans when needed. They are also notable for being
                    outstanding listeners who are constantly willing to take
                    into account the opinions of others.
                  </p>
                  <p className="text-black text-lg mt-4">
                    However, ENFP subordinates have their annoyances, just like
                    any other personality type. Micromanagement is the most
                    important of these. ENFPs are concerned with doing a good
                    job, and they frequently believe that they perform at their
                    best when given the freedom to work at their own pace and in
                    their own way. For these vivacious individuals, their boss's
                    constant criticism can be extremely upsetting.
                  </p>

                  <p className="text-black text-lg mt-4">
                    However, some direct supervision and management do help a
                    lot of people with this personality type. It's common for
                    ENFPs to move on to a new project before finishing the
                    previous one. They enjoy trying out new things, but they
                    might struggle to maintain their motivation once a project's
                    appeal wanes. Thus, rather than micromanaging, these
                    personalities might find it useful to see their boss's
                    check-ins as a sign of accountability and support, or
                    teamwork.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ENFP Colleagues
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ENFPs consider their coworkers to be friends as well as
                    colleagues. These individuals genuinely care about their
                    coworkers and want to know what drives them. These
                    personalities will always be well-liked around the
                    watercooler because of their capacity for leisure and
                    enjoyment. However, what distinguishes ENFPs is their
                    ability to turn their popularity into a natural leadership
                    style, motivating their peers to form groups and work
                    together to accomplish their objectives.
                  </p>
                  <p className="text-black text-lg mt-4">
                    This personality type is constantly looking for solutions to
                    problems that will benefit both parties. They rarely put
                    down a colleague to boost their own reputation, and they
                    don't want to succeed at the expense of others. Instead,
                    they lavish praise on anyone who performs well and give
                    credit where credit is due. They excel at brainstorming in
                    groups. In addition to being tolerant, ENFPs listen to other
                    people's opinions and recommendations with sincere
                    enthusiasm.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ENFP Managers
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Employees are not treated with contempt by ENFP managers.
                    Instead of giving orders from behind their desks, managers
                    with this personality type set up genuine connections with
                    their staff and lead by example. In fact, they act much like
                    they did before they were in charge. But not everyone has
                    the same view of leadership.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Without explicit directives, some staff members might think
                    they are expected to read their ENFP manager's mind. To
                    complete their projects successfully, some teams might
                    require rigorous timetables and deadlines.
                  </p>
                  <p className="text-black text-lg mt-4">
                    It can be particularly challenging for ENFP personalities to
                    discipline or terminate workers, even those who deserve it.
                    Bosses with this personality type risk being let down or
                    even exploited by their employees if they don't establish
                    clear expectations and boundaries.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Thankfully, ENFPs are sensitive and perceptive enough to
                    know when their team needs more discipline or structure to
                    succeed. Even the most difficult situations at work can be
                    handled in a fair and compassionate manner by using their
                    empathy and communication skills, even though it might not
                    be simple.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    How ENFP is perceived by others
                  </h2>

                  <p className="text-black text-lg mt-4">
                    People who are ENFPs are frequently seen as vivacious,
                    amiable, and open-minded. People are drawn to them because
                    of their excitement and curiosity, which makes them seem
                    personable and interesting.
                  </p>

                  <p className="text-black text-lg mt-4">
                    ENFPs are regarded as vivacious and captivating in social
                    situations, inspiring and uplifting those around them. Their
                    ability to adapt enables them to flourish in a variety of
                    settings, and their zeal frequently inspires others to
                    follow their own interests.
                  </p>

                  <p className="text-black text-lg mt-4">
                    However, because ENFPs dislike routine and structure, some
                    people might view them as disorganized or dispersed. Their
                    propensity for exploration and spontaneity can occasionally
                    make it difficult for them to stay focused or fulfill
                    commitments.
                  </p>

                  <p className="text-black text-lg mt-4">
                    All things considered, ENFPs are seen as vibrant, inspiring
                    people who infuse their relationships with warmth,
                    inventiveness, and a sense of possibility. They are
                    cherished friends and coworkers because of their capacity
                    for profound human connection and their enthusiasm for life.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Rarity and Representation of ENFP
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Up to 8% of people in the general population have the ENFP
                    personality type, making it one of the more prevalent ones.
                    The ratio of females to males in this type is two to one.
                    The tendency to seek novelty and a broad range of interests
                    are characteristics of ENFPs. Fearing boredom and stagnation
                    above all else, they are always on the lookout for novel and
                    fascinating concepts, people, and experiences. Because they
                    are constantly searching for the next adventure, they may
                    even find sleep to be boring.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Famous ENFP Personalities
                  </h2>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4text-lg">
                      <b>Robin Williams –</b> Actor and comedian{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Dr. Seuss – </b> Children's author
                    </li>
                    <li className="mt-4text-lg">
                      <b>Salvador Dali – </b>Artist{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Ellen DeGeneres – </b> Comedian and talk show host{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Trevor Noah – </b>Comedian and television host{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Russell Brand – </b> Comedian and actor{" "}
                    </li>
                    <li className="mt-4text-lg">
                      <b>Madonna – </b> Singer and performer
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Hobbies and Interests
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Hobbies that let ENFPs express themselves and try new things
                    appeal to them because they are known for their zeal,
                    inventiveness, and sociability. Their lively personalities
                    are matched with the following activities.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Creative Arts:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Painting, writing, and sculpture are among the artistic
                    endeavors that ENFPs frequently partake in. These pursuits
                    offer a platform for creativity and self-expression.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">Music:</h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs enjoy musical pursuits that fit with their imaginative
                    nature, whether they are playing instruments or writing
                    music.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Performing Arts:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs can express themselves and build relationships by
                    acting and taking part in community theater.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">Writing:</h2>
                  <p className="text-black text-lg mt-4">
                    Because ENFPs have a natural talent for telling stories,
                    they frequently like to express their creativity through
                    writing poetry, fiction, or blogs.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">Traveling:</h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs' spirit of adventure drives them to discover new
                    places and cultures, sating their curiosity and passion for
                    new experiences.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Volunteering:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs frequently participate in charitable endeavors and
                    community service because they want to have a positive
                    influence.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">Dancing:</h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs love dancing as a fun and social activity that allows
                    them to express themselves through movement.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">Photography:</h2>
                  <p className="text-black text-lg mt-4">
                    Using photography to document special moment’s appeals to
                    ENFPs' sense of creativity and beauty.
                  </p>

                  <h2 className="text-3xl font-bold mb-2 mt-6">
                    Interaction Tips
                  </h2>
                  <h2 className="text-2xl font-bold mb-2 mt-6">For Friends:</h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs enjoy having in-depth discussions about concepts,
                    ideals, and goals. They value companions who foster their
                    creative thinking and participate in candid conversations.
                    Being spontaneous is essential; since ENFPs enjoy
                    discovering new possibilities, be receptive to last-minute
                    arrangements and daring adventures. Your relationship with
                    them is strengthened when you listen well and show genuine
                    empathy, as they also value emotional support.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">For Parents:</h2>
                  <p className="text-black text-lg mt-4">
                    An ENFP child needs to be encouraged to be creative because
                    they thrive when allowed the opportunity to pursue creative
                    and inventive endeavors. They also yearn for independence,
                    so giving them the freedom to follow their passions
                    encourages self-assurance and development. Patience is
                    essential because ENFPs are very emotional; handling
                    delicate conversations with compassion and understanding
                    makes them feel genuinely supported.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    For Colleagues:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs do best at work in a team-oriented atmosphere that
                    encourages creativity and idea exchange. Because rigid
                    structures can feel stifling to their free-spirited nature,
                    they value tasks that are flexible. It's critical to be
                    sympathetic and constructive when giving feedback,
                    emphasizing development and progress over harsh criticism. A
                    more fruitful and interesting working relationship may
                    result from adjusting to their dynamic energy.
                  </p>

                  <h2 className="text-3xl font-bold mb-2 mt-6">
                    Personal Growth for ENFPs
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs are dynamic and creative personalities who find joy in
                    brainstorming possibilities and motivating others. For their
                    own development, they can concentrate on several crucial
                    aspects:
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    1. Develop Decision-Making Skills
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Although ENFPs frequently come up with a lot of ideas, they
                    might find it difficult to carry them out successfully. They
                    can turn their ideas into reality and feel a sense of
                    accomplishment by improving their decision-making skills.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    2. Cultivate Focus and Attention to Detail
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Although ENFPs are excellent at generalizing, they may miss
                    important details. Increasing their level of focus and
                    attentiveness can help them be more successful in a variety
                    of pursuits.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    3. Prioritize Self-Care
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs frequently put other people's needs ahead of their
                    own. Journaling, meditation, or time spent in nature are
                    examples of self-care practices that can help them refuel
                    and stay in balance.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    4. Set Realistic Goals
                  </h2>
                  <p className="text-black text-lg mt-4">
                    The eagerness of ENFPs may cause them to take on too many
                    projects at once, which could result in burnout.
                    Overstretching can be avoided by managing commitments and
                    setting attainable objectives.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    5. Seek Constructive Feedback
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Accepting criticism promotes both professional and personal
                    growth by helping ENFPs recognize their areas of strength
                    and growth. By using these techniques, ENFPs can take
                    advantage of their innate abilities and deal with possible
                    obstacles, which will result in a more balanced and
                    satisfying life.
                  </p>
                </section>
              )}

              {/* Conclusion Section */}
              {activeSection === "conclusion" && (
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Conclusion</h2>
                  <p className="text-black text-lg mt-6">
                    ENFPs are among the most imaginative and gregarious
                    personality types (Campaigners). They excel at handling
                    unforeseen obstacles and making a positive impact on those
                    around them, and they are well-known for their idealism and
                    excitement. They might stumble in some aspects of life,
                    though. ENFPs must intentionally work on their areas of
                    weakness and acquire new skills while utilizing their many
                    strengths when it comes to forming relationships, picking a
                    career, or realizing their dreams. Their vitality,
                    inventiveness, and curiosity are important components of
                    their personal development. But in order to realize their
                    greatest potential, they need to learn how to balance their
                    strengths by improving their consistency, self-control, and
                    focus. Because of this, they are able to turn their passion
                    and inventiveness into worthwhile endeavors. In order to
                    become self-aware, ENFPs must integrate their cognitive
                    functions as they grow older. This includes developing their
                    auxiliary Introverted Feeling (Fi), balancing their tertiary
                    and inferior functions (Te and Si), and utilizing their
                    dominant Extraverted Intuition (Ne). They eventually find
                    personal fulfillment and a well-rounded outlook on life as a
                    result of this deeper understanding of both themselves and
                    others.
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

export default ENTPBlogs;
