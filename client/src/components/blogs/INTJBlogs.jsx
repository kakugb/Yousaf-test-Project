import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function INTJBlogs() {
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
                    Understanding the INTJ: The Architect <br />
                    Personality (Introverted, Intuitive, Thinking, Judging)
                  </h1>
                  {/* <p className="text-gray-700 mb-10 font-semibold text-[12px] hover:text-blue-600">
                    By:{" "}
                    <span className="hover:underline cursor-pointer">
                      Shaz kkk
                    </span>
                  </p> */}
                  <p className="text-black text-lg text-justify mt-4">
                    The INTJ personality type, also known as the “Architect” or
                    “Strategist,” is characterized by Introverted, Intuitive
                    Thinking and Judging traits. INTJs are creative, analytical,
                    and logical individuals often recognized for their ambition,
                    independence, and goal-oriented nature. They stay
                    consistently informed on events and facts, exhibiting high
                    knowledge and logic. INTJs are passionate about perfecting
                    the details of life, infusing everything they do with
                    creativity and rationality. Their inner world is often
                    private and complex, driven by a deep-seated thirst for
                    knowledge.
                  </p>

                  <h1 className="text-3xl font-bold">Image Here</h1>
                  <h1 className="text-2xl font-bold mt-4">
                    What Is an INTJ Personality Type?
                  </h1>

                  <p className="text-black text-lg mt-6">
                    The INTJ personality type is one of the 16 types created by
                    Katharine Briggs and Isabel Myers, based on the work of
                    psychologist C.G. Jung. Each of the four letters in INTJ
                    represents a core personality trait. INTJs are energized by
                    time alone (Introverted), focus on ideas and concepts rather
                    than facts (Intuitive), make decisions based on logic
                    (Thinking), and prefer to be organized (Judging).
                  </p>

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    "The happiness of your life depends upon the quality of your
                    thoughts." Marcus Aurelius
                  </blockquote>

                  <p className="text-black text-lg mt-6">
                    Reasoning and problem-solving are activities in which INTJs
                    feel comfortable. They flourish when working on projects
                    that increase efficiency. Although they tend to be reserved,
                    INTJs see the world as a source of curiosity and come to
                    life in intellectually stimulating environments.
                  </p>
                  <blockquote className=" bg-teal-300 p-4 italic text-black text-xl py-10 mt-6 text-justify">
                    <b>Top Takeaways </b>
                    <br />
                    Discover the traits, strengths, and weaknesses associated
                    with the INTJ personality type. Keep in mind that this
                    information is not meant to serve as career, psychological,
                    or medical advice. By exploring these potential traits, you
                    can gain deeper insights into your own tendencies and
                    challenges.
                  </blockquote>
                  <h1 className="text-3xl font-bold">Image Here</h1>

                  <h2 className="text-3xl font-bold mb-4">INTJ Subtypes</h2>
                  <h1 className="text-2xl font-bold mt-4">
                    INTJ-A (Assertive Architect)
                  </h1>
                  <p className="text-black text-lg mt-6">
                    The confident, resilient, Assertive Architect — INTJ-A Those
                    with this type remain more at ease in the face of adversity
                    and are less likely to spiral into self-doubt and shame.
                    Assertive Architects are also less swayed by how others
                    respond, or even the occasional setback, because they look
                    to their inner strength to carry them through. This
                    confidence allows them to go after their goals with a sure
                    hand and laser focus.
                  </p>

                  <h2 className="text-3xl font-bold mb-4">
                    INTJ-T (Turbulent Architect)
                  </h2>
                  <h1 className="text-2xl font-bold mt-4">
                    INTJ-A (Assertive Architect)
                  </h1>
                  <p className="text-black text-lg mt-6">
                    The second type is INTJ-T, or the Turbulent Architect, who
                    is more likely to be self-reflective and sensitive to
                    natural and perceived shortcomings. This type often takes
                    their inner critic and turns that attribute into motivation;
                    they will see themselves working harder and focusing on
                    details to meet their high standards. In contrast, Turbulent
                    Architects are more willing to change their plans and
                    activities in response to feedback, making them arguably
                    more flexible but also more sensitive to stress and
                    self-doubt than their Assertive counterparts.
                  </p>

                  <h2 className="text-3xl font-bold mb-4">
                    Differences between INTJ-A and INTJ-T
                  </h2>
                  <h1 className="text-2xl font-bold mt-4">Self-Confidence: </h1>
                  <p className="text-black text-lg mt-6">
                    INTJ-As exhibit greater self-assurance and are less likely
                    to question their decisions, even in challenging situations.
                    INTJ-Ts, however, tend to reflect more critically on their
                    actions and often push themselves to improve, driven by a
                    heightened awareness of their perceived shortcomings.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Response to Challenges:{" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    Assertive Architects (INTJ-A) approach difficulties with
                    calm resilience, rarely dwelling on setbacks. Turbulent
                    Architects (INTJ-T) use their inner critique as fuel, often
                    intensifying their efforts to meet personal standards.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Attention to Detail:{" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    INTJ-T individuals are more detail-oriented and motivated by
                    their internal pressure to perfect their work. INTJ-As are
                    more likely to focus on the big picture and less on granular
                    details, trusting their broader vision to carry them
                    forward.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    INTJ Cognitive Functions{" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    According to Jung's original eight functions, each
                    personality type favors using four of them. All four of
                    these operations make up its "function stack.". Dominant,
                    auxiliary, tertiary, and inferior are the four functions
                    that are arranged according to the relative strength of
                    preference.
                  </p>

                  <h1 className="text-3xl font-bold mt-4">Image Here</h1>
                  <h1 className="text-2xl font-bold mt-4">
                    Dominant: Introverted Intuition (Ni){" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    A dominant function of Introverted Intuition (Ni) allows an
                    INTJ to see connections, find symbolism, and predict the
                    future as a natural course of daily living. This dominant
                    function makes them think more about concepts and easily
                    envision what could happen. Naturally, the inner vision
                    within an INTJ is quite strong, which always helps them
                    synthesize information and connect the dots between
                    different tasks and their outputs; they are visionary.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Auxiliary: Extraverted Thinking (Te){" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    Supportive Extraverted Thinking (Te) lends structure and
                    order to their intuition. The role of this function is to
                    help the INTJ use logic and organization to get things done.
                    INTJs generally like to decide for themselves and prefer
                    efficiency at times.
                  </p>
                  <h1 className="text-3xl font-bold mt-4">Image Here</h1>
                  <h1 className="text-2xl font-bold mt-4">
                    Tertiary: Introverted Feeling (Fi){" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    Fi is not as strong, but it still plays a role in their
                    value system, helping them make choices based on something
                    that feels less rational at its core. So, this trait aids
                    INTJs in searching for people with similar beliefs.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Inferior: Extraverted Sensing (Se){" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    As an extension to introverted intuition (Ni), extraverted
                    sensing (Se) allows these individuals to get grounded in the
                    present moment and reacquaint themselves with the world
                    around them apart from the abstract ideas that may generally
                    take precedence in their lives. Because this function is
                    poorly developed, INTJs may need help staying here and now
                    and focusing on tangible things.
                  </p>

                  <h1 className="text-3xl font-bold mt-4">
                    Personality Development Phases
                  </h1>
                  <h1 className="text-2xl font-bold mt-4">
                    Phase I: Early Life and Growth{" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    INTJs' primary function in early life is Introverted
                    Intuition (Ni). It's not clear how much work or development
                    the dominant function needs to undergo. In any case, INTJs
                    gather a lot of information for their Ni to process
                    throughout their early years. Their perspective becomes
                    clearer, and their confidence in their comprehension of the
                    world increases with age and life experience.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs have a strong desire to comprehend how things operate
                    and a natural curiosity about the world. They seek out
                    hidden patterns and connections by looking past the obvious
                    rather than simply accepting what they see.
                  </p>
                  <p className="text-black text-lg mt-6">
                    They are not always serious or unduly preoccupied with
                    intellectual endeavors, despite their analytical nature.
                    They explore pastimes like playing video games, watching
                    movies, learning music, or browsing the internet during
                    their early years, just like many others. Curiously, they
                    frequently learn a lot from these activities without even
                    realizing it —it just happens as they interact with their
                    surroundings.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Phase II: From Adolescence to Adulthood (Teens to 30s){" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    Extraverted Sensing (Se), INTJs' weakest function, starts to
                    exert its pull during Phase II and starts to play a more
                    significant part in their psychological growth. This change
                    occurs as a result of their dominant function's innate
                    desire for contrast to preserve equilibrium. Because of
                    this, INTJs are drawn to experiences that feel entirely
                    different from how they typically think. It's common for the
                    inferior function to feel almost magical, thrilling,
                    enigmatic, and even exuberant. Finding "a whole new world"
                    is how some people characterize it. As a result, many
                    people—INTJs in particular—develop a keen curiosity and a
                    strong desire to investigate this less well-known aspect of
                    themselves.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs may exhibit a growing appreciation for aesthetics and
                    new sensations as they mature, including actively seeking
                    out new sensory experiences. Though they are frequently
                    hesitant to try new things, INTJ kids eventually grow more
                    receptive to trying new things as they get older. Many INTJs
                    start to view these sensory experiences as a welcome
                    diversion from their typical intellectual focus, which gives
                    their lives a sense of balance and excitement, even though
                    they may not be as naturally adventurous as NP types.
                  </p>
                  <p className="text-black text-lg mt-6">
                    During Phase II, the inferior function can sometimes lead
                    INTJs to make risky decisions about their careers or
                    relationships because it feels so new and alluring. The
                    "opposites attract" dynamic may cause them to be attracted
                    to partners who initially seem exciting but turn out to be a
                    bad fit. Recalling that their fundamental identity is based
                    in Ni, not Se, is why INTJs in this stage frequently find it
                    helpful to take a step back and center themselves in their
                    actual selves.
                  </p>

                  <p className="text-black text-lg mt-6">
                    Extraverted Thinking (Te), an auxiliary function, can help
                    INTJs resist the pull of their inferior function. Whether in
                    consulting, science, or math, developing to enables them to
                    express their insights. It also helps them change from
                    passively taking in information to actively making choices,
                    which gives their personalities more balance and structure.
                    Leaning into Te helps INTJs stay focused and not get
                    sidetracked by the distractions of their inferior function.
                  </p>

                  <h1 className="text-2xl font-bold mt-4">
                    Phase III: Life’s Later Chapters: 30s, 40s, and Beyond{" "}
                  </h1>
                  <p className="text-black text-lg mt-6">
                    INTJs learn more about their inferior function and the
                    difficulties it poses in Phase III. They discover a more
                    balanced method to integrate all of their cognitive
                    processes rather than veering between extremes, as they
                    frequently do in Phase II. As they gradually develop their
                    weaker functions more deliberately and sustainably, they
                    learn to maintain their roots in their dominant Ni. They can
                    develop as a result of this change without losing sight of
                    their fundamental advantages.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs also learn how to enter what psychologist Mihály
                    Csíkszentmihályi refers to as the "flow state" during Phase
                    III. They achieve a deep state of concentration in which
                    they are absorbed in an activity, finding the ideal ratio of
                    engagement to challenge and making significant progress. In
                    these situations, INTJs become absorbed in the work at hand
                    and feel totally in sync with it. They are more likely to
                    reach this state when they are doing things that stimulate
                    their auxiliary Te and dominant Ni, which enables them to
                    think deeply and apply what they have learned methodically.
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
                        <tr className="bg-yellow-400 font-bold border-b-4">
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
                            Logical Precision and Rational Thought
                          </td>
                          <td className="p-3 text-black">
                            Confidence that Borders on Arrogance
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            Autonomy and Self-Assuredness
                          </td>
                          <td className="p-3 text-black">
                            Limited Tolerance for Emotional Expressions
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Innovative and Visionary Outlook
                          </td>
                          <td className="p-3 text-black">
                            Perfectionistic and Narrow Focus
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            {" "}
                            Relentless Focus and Drive
                          </td>
                          <td className="p-3 text-black">
                            Impatience with Others’ Learning Pace
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Setting High Benchmarks
                          </td>
                          <td className="p-3 text-black">
                            Social Hurdles Due to Analytical Outlook
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            ● Keen Insight and Pattern Recognition
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-3xl font-bold mb-1 mt-4">Strengths</h2>
                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Logical Precision and Rational Thought{" "}
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Individuals who identify as INTJs take great pride in their
                    mental prowess. They can reinterpret almost any obstacle as
                    a chance to improve their knowledge and sharpen their
                    logical thinking abilities. Armed with this mentality, they
                    can create creative answers to even the most challenging
                    issues.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    On a deep level, INTJs are analytical and logical. They
                    value objective facts over subjective feelings, and because
                    of their systematic, strategic thinking, they are sometimes
                    called “the Mastermind.”
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    In addition to enjoying theoretical and abstract ideas,
                    INTJs frequently base their decisions on reasoned reasoning
                    rather than feelings.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Autonomy and Confidence:
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are fiercely independent and prefer to manage things
                    independently. They firmly believe they can make decisions
                    independently without consulting others.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    Independence and confidence are traits of people with the
                    INTJ personality type who make decisions without consulting
                    others.
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are self-reliant and self-assured and prefer to make
                    choices without seeking input or approval from others.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Forward and Out-of-the-Box Thinking
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    The INTJ has a unique mind with fresh take-on events. Some
                    of history’s most radical concepts and inventions are due to
                    their rebellious streak.
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are known for their innovative thinking, coming up
                    with abstract ideas that create solutions to real-world
                    problems. They seek opportunities to reform the environment
                    and are driven by a sense of perfection.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Relentless Focus and Drive
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Famous for being ambitious and goal-driven, INTJs will only
                    stop once they have reached their version of success.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are very driven and focused and usually work toward
                    achieving their goals. They tend to implement their plan
                    without getting demotivated easily.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Setting High Benchmarks for Self and Others
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    The most positive quality about INTJs is that they set the
                    bar very high and expect high results from anyone around
                    them.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    An INTJ has high expectations of himself and those around
                    him and is not likely to accept mediocrity when it comes to
                    their work or the work of others.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Keen Insight and Pattern Recognition
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    They have an excellent eye for spotting patterns, analyzing
                    complex systems, and figuring out how everything fits
                    together. This means they can see the big picture almost
                    instantly and decide accordingly.
                  </p>

                  <h2 className="text-3xl font-bold mb-1 mt-4">Weaknesses</h2>
                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Confidence that Borders on Arrogance
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs’ overconfidence can prevent them from seeing helpful
                    information from others, especially those they perceive as
                    intellectually inferior.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    Because of their confidence in their intellectual abilities,
                    INTJs can sometimes seem arrogant or dismissive of the ideas
                    of others.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs may display a superiority complex, feeling they know
                    better, which can cause friction with others.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Limited Tolerance for Emotional Expressions
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are impatient with those who value feelings over
                    facts, often dismissing feelings as unimportant.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs tend to prioritize logic and often have difficulty
                    judging feelings, which can lead them to dismiss emotional
                    issues as unimportant.
                  </p>

                  <p className="text-black text-lg text-justify mt-4">
                    People with the INTJ personality type may seem emotionally
                    distant or unempathetic, often prioritizing rationality over
                    emotional considerations.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Perfectionistic and Narrow Focus
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs’ desire for perfection can sometimes make them overly
                    critical and uncompromising.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    They are known for their perfectionist tendencies, which can
                    lead to disappointment when things don’t go as planned.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs often struggle with perfectionism by focusing solely
                    on their own goals, which can sometimes lead them to isolate
                    themselves or ignore the contributions of others.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Impatience with Others’ Learning Pace
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs often need more patience for those who don’t match
                    their pace or intensity and see others’ slow progress as a
                    hindrance.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    People with the INTJ personality type can quickly become
                    frustrated with others who don’t do things as soon as they
                    do.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs may need help tolerating the slow progress of others
                    and often become impatient when things do not proceed as
                    efficiently as they would like.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Social Hurdles Due to Analytical Outlook
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs’ constant rationality can make them feel distant in
                    social situations and disconnected from the emotional needs
                    of others.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    They tend to experience social difficulties because they
                    prefer logic over emotion, making it difficult for them to
                    connect with others on an emotional level.
                  </p>
                  <p className="text-black text-lg text-justify mt-4">
                    INTJs are generally incapable of adapting to social cues,
                    and their rationale, the transactional approach, can make it
                    difficult for them to connect with others.
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

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6 text-justify">
                    “Darkness cannot drive out darkness; only light can do that.
                    Hate cannot drive out hate; only love can do that.” (Martin
                    Luther King Jr.)
                  </blockquote>
                  <p className="text-black text-lg mt-6">
                    Advocates who identify as INFJs look for depth and
                    significance in relationships, and romantic relationships
                    are no different. INFJs are known for having a vivid
                    imagination and for idealizing their relationships by
                    creating a “perfect” partner. When tempered with a dash of
                    realism, this idealism can improve their romantic life even
                    though it can occasionally result in irrational
                    expectations. Deeply aware of their basic beliefs, INFJs
                    look for genuine compatibility. They place a high value on
                    sincerity, seeing past outward attraction to determine
                    whether a partnership is consistent with their core values.
                    Rather than attempting to alter them, they prefer partners
                    who value and accept them for who they are because of their
                    strong sense of integrity.
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
                    In romantic relationships, INFJs display warmth, empathy,
                    sincerity, and a keen sense of understanding. They patiently
                    dedicate themselves to uncovering the deeper emotional needs
                    and desires of the one they love.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INFJs have a great deal of empathy, but because they are
                    introverted, they are selective about who they reveal their
                    actual selves. They prefer emotional intimacy over
                    surface-level interactions and are more inclined to open up
                    with a select group of people they can trust. INFJs
                    frequently require alone time to refuel and think after
                    spending time in social settings.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INFJ Compatibility
                  </h2>
                  <p className="text-black text-lg">
                    Within the MBTI framework, INFJs typically pair best with
                    ENTPs and ENFPs. Conversely, INFJs often find the least
                    compatibility with ISTPs and ESTPs.
                  </p>
                </section>
              )}

              {/* Friendships Section */}
              {activeSection === "friendships" && (
                <section id="friendships">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Friendships</h2>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6 text-justify">
                    “True friendship comes when the silence between two people
                    is comfortable.” (David Tyson Gentry)
                  </blockquote>
                  <p className="text-black text-lg mt-4">
                    People with the INFJ personality type (Advocates) are rarely
                    content with friendships that are superficial and shallow.
                    Casual interactions with coworkers or classmates don’t
                    satisfy them; instead, they long for genuine, meaningful
                    friendships that let them express their emotions, share
                    their dreams and feel understood and accepted for who they
                    are. In contrast to having a large network of acquaintances,
                    INFJs are more than happy to have just one or two
                    confidants. INFJs may appear quiet or reserved to the
                    general public, but they are incredibly vivacious around
                    their closest friends. Talking with someone who shares their
                    interests, passions, and beliefs makes them happier than
                    anything else. INFJs find it liberating to let their guard
                    down and be fully themselves with a trusted friend, even
                    though they prefer their own company.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INFJs value authenticity in friendships and have high
                    standards for them. They know that someone is not the right
                    friend for them if they have to play down their emotions or
                    act nice to someone. They also value friendships that grow
                    and support one another. While enjoying each other’s company
                    is important, INFJs look for friends who push them to grow,
                    learn, and better themselves. For friendship, INFJs seek a
                    soulmate who shares their beliefs and passions, not just
                    someone to hang out with. INFJs are private and reserved,
                    which makes them occasionally challenging to get to know.
                    Friends who understand and support their need to withdraw
                    and refuel are highly valued by them. A good friend can help
                    INFJs by taking the time to understand their viewpoint and
                    recognize their strengths, even though they may conceal
                    their emotions when they are hurt.
                  </p>
                </section>
              )}

              {/* Parenthood Section */}
              {activeSection === "parenthood" && (
                <section id="parenthood">
                  <h1 className="text-3xl font-bold mb-2">
                    Family and Parenting Dynamics
                  </h1>

                  <p className="text-black text-lg mt-4">
                    INFJs frequently work to foster harmony within their
                    families and place high importance on meaningful family
                    relationships. They are extremely sensitive to the needs of
                    their family members due to their empathetic nature, which
                    allows them to offer understanding and support during trying
                    times.
                  </p>
                  <p className="text-black text-lg mt-4">
                    As parents, INFJs are excellent at emotionally understanding
                    and relating to their kids. They strive to keep strong, deep
                    relationships with their kids and are very sympathetic. To
                    raise kids who are kind, considerate, and compassionate,
                    INFJs have high standards and frequently have explicit
                    behavioral expectations. To create an atmosphere where each
                    child can reach their full potential, INFJs encourage their
                    kids to follow their interests and skills.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Steeped in idealism, INFJ parents are driven to foster
                    humanitarian values in their children. They long to raise
                    empathetic, emotionally astute individuals who will work
                    toward the greater good.
                  </p>
                </section>
              )}

              {/* Career Paths Section */}
              {activeSection === "careers" && (
                <section id="careers">
                  <h1 className="text-3xl font-bold mb-2 mt-6">Career Paths</h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Suitable Careers
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INFJs frequently choose occupations that enable them to
                    significantly impact others’ lives. They flourish in
                    positions that call for imagination, compassion, and an
                    emphasis on one’s development.
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    “I can accept failure, everyone fails at something. But I
                    can’t accept not trying.” (Michael Jordan)
                  </blockquote>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl font-bold">
                      Psychology and counseling
                    </li>
                    <p className="text-black text-lg mt-4">
                      INFJs frequently pursue careers in psychology and
                      counseling, which allow them to use their innate empathy
                      and wisdom to assist others.
                    </p>

                    <li className="mt-4 text-xl font-bold">Teaching</li>
                    <p className="text-black text-lg mt-4">
                      Imparting information and providing others with purposeful
                      direction. The arts, such as writing, which allows them to
                      express their imagination and idealistic views.
                    </p>

                    <li className="mt-4 text-xl font-bold">
                      Non-Profit Sector
                    </li>
                    <p className="text-black text-lg mt-4">
                      Focusing on changing the world and coordinating their work
                      with their values. INFJs are especially drawn to
                      professions that allow them to positively influence people
                      and society at large while also integrating their work
                      with their values.
                    </p>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Popular INFJ Careers
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Popular careers for INFJs often overlap with their values
                    and creative inclinations. These include:
                  </p>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 font-bold text-xl">Artist</li>
                    <li className="mt-4 font-bold text-xl">Actor</li>
                    <li className="mt-4 font-bold text-xl">Entrepreneur</li>
                    <li className="mt-4 font-bold text-xl">Religious Worker</li>
                    <li className="mt-4 font-bold text-xl">Musician</li>
                    <li className="mt-4 font-bold text-xl">Librarian</li>
                    <li className="mt-4 font-bold text-xl">Counselor</li>
                    <li className="mt-4 font-bold text-xl">Psychologist</li>
                    <li className="mt-4 font-bold text-xl">Writer</li>
                    <li className="mt-4 font-bold text-xl">Teacher</li>
                    <li className="mt-4 font-bold text-xl">Photographer</li>
                  </ul>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    INFJs can be both nurturing counselors and insightful
                    visionaries, balancing compassion with a drive for meaning.”
                    <p className="text-gray-400 text-xl mt-4">
                      Drenth, A.J. “INFJ Personality Profile.” Personality
                      Junkie, 2012.
                    </p>
                  </blockquote>

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    Reserved but visionary, INFJs often see creative
                    possibilities and future potentials long before others do.”
                    <p className="text-gray-400 text-xl mt-4">
                      Myers, Isabel Briggs, and Peter B. Myers. Gifts Differing:
                      Understanding Personality Type. Davies-Black Publishing,
                      1980.
                    </p>
                  </blockquote>

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    INFJs are idealists who want nothing more than to see the
                    world live up to their deeply held values.”
                    <p className="text-gray-400 text-xl mt-4">
                      Keirsey, David. Please Understand Me II: Temperament,
                      Character, Intelligence. Prometheus Nemesis Book Company,
                      1998.
                    </p>
                  </blockquote>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Famous INFJs: Historical and Modern Figures
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Famous INFJs Include
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 font-bold text-xl">Mohandas Gandhi</li>
                    <li className="mt-4 font-bold text-xl">
                      Eleanor Roosevelt
                    </li>
                    <li className="mt-4 font-bold text-xl">Emily Brontë</li>
                    <li className="mt-4 font-bold text-xl">Jane Goodall</li>
                    <li className="mt-4 font-bold text-xl">Carl Jung</li>
                    <li className="mt-4 font-bold text-xl">
                      Fyodor Dostoevsky
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Florence Nightingale
                    </li>
                    <li className="mt-4 font-bold text-xl">Shirley MacLaine</li>
                    <li className="mt-4 font-bold text-xl">Jimmy Carter</li>
                    <li className="mt-4 font-bold text-xl">Brené Brown</li>
                    <li className="mt-4 font-bold text-xl">Edward Snowden</li>

                    <li className="mt-4 font-bold text-xl">J.K. Rowling</li>
                    <li className="mt-4 font-bold text-xl">
                      Marianne Williamson
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Oprah Winfrey,{" "}
                      <span className="font-normal">
                        television personality
                      </span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Martin Luther King, Jr.{" "}
                      <span className="font-normal">civil rights leader</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Taylor Swift <span className="font-normal">musician</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Fictional Characters
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 font-bold text-xl">
                      Luke Skywalker{" "}
                      <span className="font-normal">from Star Wars</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Lisa Simpson{" "}
                      <span className="font-normal">from The Simpsons</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Albus Dumbledore{" "}
                      <span className="font-normal"> from Harry Potter</span>
                    </li>

                    <li className="mt-4 font-bold text-xl">
                      Atticus Finch
                      <span className="font-normal">
                        {" "}
                        from To Kill a Mockingbird
                      </span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Melisandre{" "}
                      <span className="font-normal"> from Game of Thrones</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Elsa <span className="font-normal"> from Frozen</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      The Tin Man{" "}
                      <span className="font-normal">
                        {" "}
                        from The Wizard of Oz
                      </span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Sam Winchester{" "}
                      <span className="font-normal"> from Supernatural</span>
                    </li>
                    <li className="mt-4 font-bold text-xl">
                      Lady Galadriel{" "}
                      <span className="font-normal">
                        {" "}
                        from The Lord of the Rings
                      </span>
                    </li>
                  </ul>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-yellow-400 font-bold border-b-4">
                          <th className="p-3 text-lg font-bold text-black text-center">
                            Famous INFJs
                          </th>
                          <th className="p-3 text-lg font-bold text-black text-center">
                            Fictional Characters
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-3 text-black font-bold">
                            Eleanor Roosevelt celebrated her advocacy for human
                            rights and her ability to inspire and connect with
                            others on a deep emotional level.
                          </td>
                          <td className="p-3 text-black">
                            <b>Atticus Finch</b> from To Kill a Mockingbird
                            embodies integrity, empathy, and a strong commitment
                            to justice.
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            <b> Albus Dumbledore</b> from Harry Potter
                            exemplifies wisdom, foresight, and a deep sense of
                            moral responsibility.
                          </td>
                          <td className="p-3 text-black">
                            <b>Atticus Finch</b> from To Kill a
                            MockingbirdEmbodies integrity, empathy, and a strong
                            commitment to justice.t
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black font-bold">
                            Carl JungPioneer of analytical psychology, whose
                            introspective and visionary ideas reflect typical
                            INFJ characteristics.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Workplace Habits Section */}
              {activeSection === "workplace-habits" && (
                <section id="workplace-habits">
                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Workplace Habits and Preferences
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Workplace Habits
                  </h2>

                  <p className="text-black text-lg mt-4">
                    In the workplace, INFJs respect collaboration, tact, and
                    genuineness. They work best in settings that support
                    equality and justice, but they can get annoyed by office
                    politics, strict regulations, or repetitive, inflexible
                    procedures, which can deplete their motivation and leave
                    them feeling unfulfilled. For INFJs, the most fulfilling
                    work enables them to support others while simultaneously
                    promoting their development.
                  </p>

                  <p className="text-black text-lg mt-4">
                    For INFJs, alignment with personal values is a crucial
                    component of job satisfaction. Office politics, dishonest
                    coworkers, pointless regulations, and an overabundance of
                    bureaucracy can all seriously demotivate them. INFJs favor
                    environments at work where cooperation, decency, and equity
                    are valued. Because they value an egalitarian approach to
                    working relationships regardless of their position on the
                    job ladder, they generally avoid seeing themselves as
                    superior to or inferior to others.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INFJ as Managers
                  </h2>

                  <p className="text-black text-lg mt-4">
                    As managers, INFJs tend to think of everyone as equals,
                    regardless of titles or positions, and they frequently
                    detest using their power. Instead of micromanaging their
                    subordinates, INFJs work to give them the freedom to think
                    and act for themselves. They constantly exhibit integrity
                    and dedication, encourage others, foster an environment of
                    respect for one another, and set an example. Fair and
                    caring, INFJ managers take pride in recognizing the
                    individual strengths of their staff members and supporting
                    their development.
                  </p>
                  <p className="text-black text-lg mt-4">
                    On the other hand, this does not imply that they have low
                    standards; on the contrary. Because INFJs value honesty,
                    rigor, motivation, and dependability in their staff, they
                    expect their team members to meet the high standards they
                    set for themselves. Managers who are INFJ are not very
                    tolerant of unethical or unreliable behavior. They can be
                    extremely harsh if they witness someone acting in a way that
                    they believe to be immoral. However, INFJ managers put in a
                    lot of effort to make sure their team feels appreciated,
                    content, and successful when their workers share their good
                    intentions and values.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INFJ as Subordinates
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INFJs appreciate independence, sensitivity, and teamwork in
                    the workplace. They perform best as employees when their
                    managers are receptive to their opinions and have an open
                    mind. Having a manager who listens to INFJs can greatly
                    boost their morale because they can be especially frustrated
                    when they feel ignored. While INFJs are inclined to follow
                    their convictions and strive for excellence, their morale is
                    particularly susceptible to criticism, especially if it
                    seems unjustified.
                  </p>
                  <p className="text-black text-lg mt-4">
                    They may also become demotivated by routine tasks, rigid
                    structures, stringent rules, and requests to redo work for
                    reasons they believe are unjustified. INFJs prefer managers
                    who support and encourage them and whose values coincide
                    with their own. But in less-than-ideal work settings, INFJs
                    might have to rely on their inner fortitude and look for
                    assistance from other mentors. Thankfully, working with a
                    challenging manager is just one of the challenges that INFJs
                    can easily handle at work.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INFJ as Colleagues
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INFJs put integrity first and are industrious, careful
                    workers who focus on doing the right thing. They can
                    continuously produce high-quality work because they have a
                    strong sense of personal accountability for the tasks
                    assigned to them. Because of their diligence, they gain the
                    respect and trust of their colleagues, which opens the door
                    to productive teamwork and mutual success. As coworkers,
                    INFJs are frequently regarded as capable, articulate, and
                    helpful. They are gifted at seeing the motivations of others
                    and figuring out the underlying reasons for conflict before
                    anyone else does. They contribute significantly to team
                    dynamics because of this ability.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INFJs frequently place a higher value on teamwork and
                    supporting colleagues than on sheer productivity. This is
                    advantageous, but there is a chance that others will take
                    advantage of their readiness to assist. At the expense of
                    their vitality and well-being, they might have to take on
                    the responsibilities of less committed colleagues. INFJs are
                    still introverted even though they are generally liked by
                    their coworkers. They might occasionally need to take a step
                    back and work alone, concentrating on their objectives in
                    their own manner. This is not an indication of bitterness
                    but rather of their need to strike a balance between taking
                    care of themselves and helping others.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Growth and Challenges
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    INFJ Perfectionism
                  </h2>

                  <p className="text-black text-lg mt-4">
                    One characteristic that distinguishes INFJs is their ability
                    to envision a better world. Receiving fresh impressions and
                    visions is a defining feature of their personality (Ni). But
                    when they get too attached to the ideals’ perfect
                    realization (Se), their perfectionism frequently shows.
                    INFJs may be extremely picky about their jobs or belongings
                    due to their desire to see their intuitive ideas fully
                    realized.
                  </p>
                  <p className="text-black text-lg mt-4">
                    In severe situations, INFJs might put their health at risk
                    to make sure their vision is carried out flawlessly. It can
                    be devastating to deviate from their ideal. Their
                    self-expectations also exhibit this perfectionism. INFJs
                    frequently treat themselves much harsher than they do other
                    people. They struggle to extend the same grace to
                    themselves, believing that their moral or idealistic
                    insights should make them impervious to failure, even though
                    their Extraverted Feeling (Fe) allows them to forgive the
                    shortcomings of others.
                  </p>
                  <p className="text-black text-lg mt-4">
                    The perfectionism of INFJs affects their daily lives as
                    well. Their idealistic focus may prevent them from
                    appreciating the realities of their relationships,
                    employment, or living arrangements. It’s possible for them
                    to become obsessed with flaws and question whether they
                    ought to look for something better. The messiness of real
                    life is not given much space by this tendency.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Balancing Idealism and Self-Care
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INFJs frequently have fewer options for relaxation or stress
                    relief because of their perfectionism and reserved demeanor.
                    They run the risk of wearing themselves out in their desire
                    to serve others and follow their ideals if they don’t take
                    care of themselves and maintain balance. Their well-being
                    depends on them taking the time to rest and embracing life’s
                    flaws.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Coping with Stress and Burnout
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INFJs frequently have limited ways to vent because of their
                    meticulousness and reserved demeanor. If they don’t strike a
                    balance between their need for self-care and rest and their
                    desire to assist others, they risk burning out. Sometimes
                    INFJs can be so focused on their principles that they
                    neglect their health, which can result in stress and
                    burnout. They must not forget to take care of themselves
                    while they are busy tending to everyone else.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    The balance between Helping Others and Self-Care
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INFJs are passionate about improving the world and assisting
                    others. Their introverted personality, however, means that
                    they are selective about revealing their “true selves” and
                    require time to recover from social engagements.
                  </p>

                  <p className="text-black text-lg mt-4">
                    INFJs must strike a balance between the need for self-care
                    and their strong desire to assist others. They frequently
                    take on too much, which is detrimental to their own
                    emotional and mental well-being. They can continue to pursue
                    their objectives of assisting others and making a
                    significant contribution to the world while maintaining
                    their well-being when they can strike this balance.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Debunking Myths
                  </h1>

                  <p className="text-black text-lg mt-4">
                    Like all personality types, INFJs are frequently subjected
                    to false beliefs that may cause them to misinterpret who
                    they are. Some common misconceptions about INFJs are listed
                    below, along with the truth about them.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 1: INFJs Are Always Gentle and PassiveReality
                  </h2>

                  <p className="text-black text-lg ">
                    Although INFJs are renowned for their composure and empathy
                    when their deeply held beliefs are questioned, they can
                    become extremely fervent and assertive. They have a strong
                    sense of determination due to their Judging trait, and they
                    are more than capable of standing up for their beliefs even
                    if it means defying the crowd.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 2: INFJs Are PsychicReality
                  </h2>
                  <p className="text-black text-lg">
                    INFJs frequently appear to possess an almost supernatural
                    aptitude for making predictions or deciphering the
                    intentions of others. This is a result of their primary
                    function, Introverted Intuition (Ni), not any mystical
                    power. They appear to have foresight because of this
                    function, which enables them to combine patterns and draw
                    perceptive connections that others might miss.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 3: INFJs Are Always Introverted and ReservedReality
                  </h2>
                  <p className="text-black text-lg">
                    Although introverted and in need of solitude to refuel,
                    INFJs can also be gregarious, gregarious, and very engaging
                    when given the proper circumstances. Although they favor
                    quality over quantity in their social interactions, they
                    frequently enjoy emotionally connecting with people and
                    thrive in in-depth, meaningful conversations.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 4: INFJs Are Perfect and UnflawedReality
                  </h2>
                  <p className="text-black text-lg">
                    People tend to think INFJs have it all figured out because
                    they are idealists. In actuality, because of their high
                    expectations of both themselves and other people, INFJs are
                    prone to self-doubt, perfectionism, and burnout. They may
                    feel overburdened or unable to make decisions because of
                    their propensity to overanalyze.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 5: INFJs Are Too Sensitive to Function Reality
                  </h2>
                  <p className="text-black text-lg">
                    The truth is that INFJs are not inherently weak or overly
                    sentimental, despite their considerable empathy and
                    emotional sensitivity. They strike a balance between their
                    sensitivity and resilience and a strong sense of purpose,
                    frequently using their emotional intelligence to uplift and
                    empower others.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 6: INFJs Are Rare and Therefore Superior Reality
                  </h2>
                  <p className="text-black text-lg">
                    In actuality, INFJs are among the rarest personality types;
                    however, this does not mean that they are better than other
                    people. Every personality type has special qualities and
                    contributions of its own. INFJs are not superior or inferior
                    to other people; rather, their rarity emphasizes how unique
                    their characteristics are.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Myth 7: INFJs Are Always Altruistic Reality
                  </h2>
                  <p className="text-black text-lg">
                    Despite having a strong sense of compassion and frequently
                    being driven by a desire to assist others, INFJs
                    occasionally experience selfishness or frustration. When
                    they feel misunderstood or that their efforts are not
                    valued, they may become agitated or withdrawn. Demystifying
                    these fallacies helps us grasp the genuine depth and
                    intricacy of the INFJ personality type. INFJs are
                    multi-dimensional people who merge sensitivity, insight and
                    resolve, creating a significant influence for beneficial
                    transformation in the world. Recognizing and appreciating
                    their subtleties is crucial for cultivating genuine ties
                    with them.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Interaction tips
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for friends
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INFJs can be reticent and private, which makes it
                    challenging to get to know them. They cherish intimate,
                    meaningful relationships and are sensitive to hurt, though
                    they frequently keep these emotions to themselves. To be a
                    good friend to an INFJ, you must recognize and respect their
                    need to rest and rejuvenate. Sometimes, INFJs feel
                    misinterpreted. By spending time getting to know their
                    viewpoint and recognizing their positive traits, you can
                    improve your friendship.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for Partners
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Romantic relationships with individuals who share their
                    values are the most fulfilling for INFJs. They thrive on
                    emotional closeness and have an innate capacity to
                    comprehend their partner’s emotions. Giving INFJs the
                    support, sincerity, honesty, and authenticity they seek is
                    crucial to building a strong relationship with them. These
                    qualities build trust in the relationship and are greatly
                    valued.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Tips for colleagues
                  </h2>
                  <p className="text-black text-lg mt-4">
                    As coworkers, INFJs are dependable, hardworking, and
                    popular. Well-known for their diligence and moral character,
                    they flourish in settings that value collaboration, equity,
                    equality, and genuineness. However, because of their
                    introverted personality, they might occasionally require
                    solitude to regroup and refocus.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Working with an INFJ requires respecting their values,
                    hearing what they have to say, and creating an environment
                    of openness and justice. Even though they work best in group
                    environments, strict procedures, office politics, or
                    situations that go against their values can irritate them.
                  </p>
                </section>
              )}

              {/* Conclusion Section */}
              {activeSection === "conclusion" && (
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Conclusion</h2>
                  <p className="text-black text-lg mt-6">
                    One of the rarest and most complex personality types, INFJs
                    are renowned for their idealism, inventiveness, and
                    kindness. Their path to personal development entails
                    comprehending and integrating their cognitive processes,
                    with extraverted feeling (Fe) emerging after introverted
                    intuition (Ni). Later stages of development entail bringing
                    these less conscious processes into the light of awareness
                    by investigating their inferior Extraverted Sensing (Se) and
                    tertiary Introverted Thinking (Ti). Through this process,
                    INFJs can swap out unhealthy thought and behaviour patterns
                    for more constructive ones, leading to a greater sense of
                    fulfillment and completeness.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Individuals with the Advocate personality find fulfillment
                    in utilizing their traits, such as idealism, persistence,
                    and the capacity to envision a more prosperous future, to
                    create significant impacts on the globe. INFJs are not
                    satisfied with merely comprehending their capabilities;
                    rather, they are deeply dedicated to utilizing them to serve
                    a higher cause. Through the practice of introspection, INFJs
                    unlock their remarkable abilities, thereby avoiding the
                    chance of leading a life misaligned with their distinctive
                    vision and beliefs.
                  </p>
                  <p className="text-black text-lg mt-8">
                    Understanding the characteristics of their personality type,
                    including its advantages and disadvantages, is the first
                    step toward personal development for INFJs. In addition to
                    being fascinating, this self-awareness is crucial to
                    ensuring they realize their greatest potential. INFJs can
                    get over the persistent fear of not living up to their ideal
                    life by valuing their inventiveness, passion, and dedication
                    to doing the right thing. Rather, they can use their talents
                    to improve themselves, form deep relationships, and shape a
                    future that is consistent with their values. Our journey
                    asINFJsJ starts with applying what you’ve learned to
                    develop, learn, and live a genuine life. Are you prepared to
                    realize the full potential of your strengths?
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

export default INTJBlogs;
