import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import INTJ_1 from '../../assets/INTJ-Images/INTJ-01.jpg'
import INTJ_2 from '../../assets/INTJ-Images/INTJ-02.jpg'
import INTJ_3 from '../../assets/INTJ-Images/INTJ-03.jpg'
import INTJ_4 from '../../assets/INTJ-Images/INTJ-04.jpg'
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
          className={`hidden md:block fixed top-24 left-0 h-auto w-64 bg-white shadow-lg z-50 transform transition-transform duration-300`}
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

                  <img src={INTJ_1}/>
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
                  <img src={INTJ_2} className="my-6"/>

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

                  <img src={INTJ_3} className="my-6"/>
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
                  <img src={INTJ_4} className="my-6"/>
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
                            Keen Insight and Pattern Recognition
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
                  <h1 className="text-3xl font-bold mb-2">
                    Relationships with INTJ
                  </h1>
                  <h2 className="text-2xl font-bold mb-2">
                    Romantic relationships
                  </h2>

                  <p className="text-black text-lg mt-6">
                    INTJs approach relationships with the same goal-orientedness
                    and rationality that they apply to other facets of life.
                    They prefer to find a partner who shares their intellectual
                    interests and aspirations, and they frequently have no
                    interest in shallow relationships.
                  </p>
                  <p className="text-black text-lg mt-6">
                    NTJs emphasize honesty and a close intellectual bond in
                    romantic relationships. They tend to be picky about who they
                    pursue, concentrating on partners pushing and challenging
                    them intellectually.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs frequently find it easier to connect with people who
                    approach relationships with a similar emphasis on logic and
                    independence. In contrast, they may find it challenging to
                    form romantic relationships with those who rely heavily on
                    emotional cues and sentiments.
                  </p>

                  <blockquote className=" bg-teal-300 p-4 italic text-black text-xl py-10 mt-6 text-center">
                    <b className="text-center">
                      INTJ compatibility with other personality types{" "}
                    </b>
                    <br />
                    ENFPs, ENTPs, and ESTPs are personality types that make good
                    relationship choices because they get along well with INTJs.
                    ISFP, ISFJ, and ESFJ personality types are generally less
                    compatible with INTJs.
                  </blockquote>

                  <h2 className="text-2xl font-bold mb-2">
                    INTJ Preferences for Loyalty, Independence, and
                    Understanding
                  </h2>
                  <p className="text-black text-lg mt-6">
                    In relationships, INTJs’ fundamental values are independence
                    and loyalty. They seek a partner who supports their goals
                    and acknowledges their privacy needs. Establishing a
                    harmonious relationship with an INTJ requires an
                    understanding of these preferences.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs are looking for a partner who appreciates independence
                    and loyalty. They are loyal to people who respect their
                    self-reliance and value their emphasis on intellectual
                    development and personal objectives.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    Common Challenges in Romantic Relationships
                  </h2>
                  <p className="text-black text-lg mt-6">
                    It can be challenging for INTJs to have emotionally charged
                    conversations, which can result in miscommunication in
                    romantic partnerships. They may occasionally appear
                    judgmental or insensitive due to their emphasis on logic and
                    progress.
                  </p>
                  <p className="text-black text-lg mt-6">
                    The inability to openly express emotions is one of the
                    problems that INTJs face in romantic relationships. Their
                    propensity to value reason and honesty over emotion can
                    occasionally make it difficult for their partners to feel
                    emotionally connected.
                  </p>
                </section>
              )}

              {/* Friendships Section */}
              {activeSection === "friendships" && (
                <section id="friendships">
                  <h2 className="text-3xl font-bold mb-2">
                    Friendships with INTJs
                  </h2>
                  <h2 className="text-2xl font-bold mb-2">
                    INTJs as Loyal and Selective Friends
                  </h2>
                  <p className="text-black text-lg mt-6">
                    Selecting friends who share their values and intellectual
                    interests is a common practice for INTJs. However, they are
                    incredibly devoted and loyal once a friendship is formed.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs may have few friends but make a significant investment
                    in close friendships. When their friends value their
                    intelligence and hold similar beliefs, they remain faithful
                    to them.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    Preference for Deep, Intellectual Conversations
                  </h2>
                  <p className="text-black text-lg mt-6">
                    INTJs frequently favor discussions that are
                    thought-provoking. I am drawn to friends who can interact
                    with them on this level because they like conversations that
                    let them delve deeply into concepts and theories.
                  </p>
                  <p className="text-black text-lg mt-6">
                    INTJs value friendships that present intellectual
                    challenges. They enjoy in-depth discussions and significant
                    interactions and get satisfaction from debating intricate
                    concepts and theories with like-minded people.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    Low Tolerance for Drama and Small Talk
                  </h2>
                  <p className="text-black text-lg mt-6">
                    NTJs could be more patient with drama or pointless social
                    interactions. They tend to steer clear of relationships that
                    require them to chit-chat and prefer friendships free of
                    needless conflict.
                  </p>
                  <p className="text-black text-lg mt-6">
                    Because they are straightforward, INTJs avoid people who
                    enjoy drama and detest small talk. Their preference for
                    directness and honesty affects their social interactions and
                    friend selection.
                  </p>
                </section>
              )}

              {/* Parenthood Section */}
              {activeSection === "parenthood" && (
                <section id="parenthood">
                  <h2 className="text-2xl font-bold mb-2">
                    Family and Parenting Dynamics
                  </h2>
                  <h2 className="text-2xl font-bold mb-2">
                    Encouraging Independence and Self-Directed Thinking
                  </h2>
                  <p className="text-black text-lg mt-6">
                    INTJ parents prioritize fostering independence and
                    self-reliance in their children. They actively encourage
                    intellectual curiosity and critical thinking, helping their
                    kids develop confidence in their ability to make wise
                    decisions and overcome challenges. By promoting
                    self-directed thinking and personal growth, INTJs aim to
                    raise children who are self-sufficient and capable of
                    navigating life’s complexities.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    High Expectations for Growth and Self-Sufficiency
                  </h2>
                  <p className="text-black text-lg mt-6">
                    INTJs hold their children to high standards and emphasize
                    the importance of striving for excellence. They provide
                    their kids with the tools and support needed to succeed,
                    encouraging both academic and personal development. With a
                    focus on self-improvement, INTJ parents aim to instill a
                    sense of responsibility and independence in their children,
                    ensuring they are well-prepared for the future.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    Balancing Intellectual and Emotional Needs
                  </h2>
                  <p className="text-black text-lg mt-6">
                    While INTJs are deeply committed to their children’s
                    welfare, they may find it challenging to express affection
                    openly. Their parenting style often prioritizes intellectual
                    growth over emotional displays, which can sometimes create a
                    perception of emotional distance. However, their unwavering
                    dedication to their kids’ development demonstrates their
                    love and care, even if it is not always shown through
                    traditional warmth.
                  </p>
                </section>
              )}

              {/* Career Paths Section */}
              {activeSection === "careers" && (
                <section id="careers">
                  <h2 className="text-2xl font-bold mb-2">
                    Career Preferences for INTJs
                  </h2>
                  <p className="text-black text-lg mt-6">
                    Careers requiring deep analysis and intellectual work are
                    inherently appealing to INTJs; they frequently choose STEM
                    and other fields. Their aptitude for rationality and
                    problem-solving makes them ideal for professions like
                    science, engineering, law, research, and project management,
                    which offer the intellectual challenges that INTJs are drawn
                    to.
                  </p>
                  <h2 className="text-2xl font-bold mb-2">
                    Popular INTJ Careers
                  </h2>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 font-bold text-xl">Scientist</li>
                    <li className="mt-4 font-bold text-xl">Mathematician</li>
                    <li className="mt-4 font-bold text-xl">Engineer</li>
                    <li className="mt-4 font-bold text-xl">Dentist</li>
                    <li className="mt-4 font-bold text-xl">Doctor</li>
                    <li className="mt-4 font-bold text-xl">Teacher</li>
                    <li className="mt-4 font-bold text-xl">Judge</li>
                    <li className="mt-4 font-bold text-xl">Lawyer</li>
                  </ul>

                  <p className="text-black text-lg mt-6">
                    These occupations are ideally suited to their skill set
                    since they flourish in positions that require accuracy,
                    systematic thought, and creative problem-solving.
                  </p>

                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6">
                    INTJs are adept at obtaining, evaluating, and drawing new
                    conclusions from information they observe in the outside
                    world. This personality type tends to be highly logical and
                    analytical.
                  </blockquote>

                  <p className="text-black text-lg mt-4">
                    INTJs (often referred to as architects) prefer to work
                    independently, regardless of their professional stage. They
                    are naturally adept at solving problems and hold themselves
                    to very high standards, constantly looking for more
                    effective and efficient ways to complete tasks. They are, in
                    many respects, perfect employees and coworkers because of
                    this. However, INTJs can be direct or contemptuous to
                    coworkers they don't like, and regrettably, it's not always
                    simple to gain their respect. Teamwork can occasionally be
                    difficult for them in settings where people value
                    socializing over creativity or convenience over creativity.
                  </p>
                  <blockquote className=" bg-teal-300 p-4 italic text-black text-xl py-10 mt-6 text-center">
                    For INTJs, completing a task is not enough. Individuals with
                    this personality type are extremely valuable assets in
                    increasing operational efficiency in organizations because
                    they go above and beyond and constantly consider ways to
                    improve it.
                  </blockquote>

                  <h2 className="text-2xl font-bold mb-2">
                    INTJs as subordinates
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Due to their strong sense of independence, INTJs are not
                    afraid to take the initiative, correct errors, or improve
                    even the most minor aspects of a project. There is nothing
                    that irritates them more than a boss who micromanages,
                    especially if the boss wastes their time with pointless
                    meetings, enforces meaningless rules, or judges employees
                    more on their likeability than their ability.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INTJs are resistant to any attempts to restrict their
                    autonomy, even in entry-level roles. They have little regard
                    for job titles, and they frequently find it difficult to
                    respect a manager who they perceive to be less capable than
                    they are. Their candor may even cause them to criticize
                    their supervisor, a behavior that can either be welcomed or
                    completely backfire depending on the person in charge. In
                    actuality, not all managers are as logical and efficient as
                    INTJs.
                  </p>
                  <p className="text-black text-lg mt-4">
                    That does not imply, however, that they should allow a
                    challenging boss to hinder them. Even in less-than-ideal
                    work environments, INTJs can find ways to increase their
                    responsibilities and advance their expertise by utilizing
                    their creativity and problem-solving abilities. To achieve
                    this, they might have to concentrate on developing a
                    positive and professional relationship with their manager,
                    despite any flaws in that individual.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    INTJs as Colleagues
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Careers requiring continuous social interaction or teamwork
                    are rarely pursued by INTJs. They find most team-building
                    activities and group meetings to be pointless, and they are
                    not very patient with office politics or gossip. Even
                    brainstorming, which they usually find enjoyable, can
                    quickly turn into a frustrating process if it is unfocused
                    or does not yield useful outcomes.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Instead of being slowed down by a well-intentioned but
                    distracted colleague, INTJs prefer to work alone.
                    Fortunately, they can be extremely productive even in the
                    absence of much teamwork due to their keen focus and
                    tenacity. However, working with others is something that
                    INTJs are more than capable of doing, and it may even lead
                    to some of their greatest successes. Despite their aversion
                    to working with just anybody, they frequently discover that
                    many of their coworkers are more capable and perceptive than
                    they initially thought. The correct individuals can make
                    their brainstorming sessions even livelier and produce
                    creative and practical answers.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">INTJ as managers</h2>
                  <p className="text-black text-lg mt-4">
                    Despite not always considering themselves to be born
                    leaders, INTJs possess all the traits of a great leader.
                    They are excellent at planning and carrying out projects
                    with precision and strategic thinking. In contrast to
                    certain managers who exercise power merely for the sake of
                    exercising it, INTJs prioritize fostering creativity and
                    increasing productivity, even if doing so means questioning
                    established hierarchies.
                  </p>
                  <p className="text-black text-lg mt-4">
                    For them, success is far more important than approval, so
                    they don't care to be flattering or catered to. Instead of
                    micromanaging daily tasks, INTJs prefer to focus on
                    big-picture strategies and treat their staff as intellectual
                    equals. They expect to be informed and will not be afraid to
                    delve into the specifics when needed, so they are by no
                    means disengaged.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INTJs assign tasks to people who show excellent
                    problem-solving abilities and reward proactive, independent
                    thinkers. However, this independence is expected rather than
                    merely a benefit. Workers who require continual guidance or
                    who use charm to cover up subpar work may find it difficult
                    to work under an INTJ manager because these leaders can spot
                    fallacious justifications and hold their staff to
                    extraordinarily high standards.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    How INTJ are perceived by others
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs appear to be serious, reserved, and extremely
                    perceptive. They constantly try to comprehend the underlying
                    ideas of what they see because they are inherently curious.
                    They take their time to consider a question before providing
                    a thoughtful answer. They frequently identify ways to
                    increase productivity and concentrate on broad strategies,
                    occasionally ignoring the specifics, and are renowned for
                    their critical thinking.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Despite not being the friendliest or most gregarious, INTJs
                    radiate confidence in their intelligence. They thrive in
                    intellectually stimulating environments and anticipate that
                    others will see the logic in their ideas. Their
                    straightforward style and perfectionist tendencies can
                    occasionally come across as blunt, particularly when
                    questioning ideas that aren't supported by evidence.
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    How Rare Is the INTJ Personality Type?
                  </h2>
                  <p className="text-black text-lg text-bold mt-4">
                    INTJs are one of the rarest types in the population. INTJs
                    make up:
                  </p>
                  <p className="text-black text-lg mt-2">
                    2.6% of the general population
                  </p>
                  <p className="text-black text-lg mt-2">3% of men</p>
                  <p className="text-black text-lg mt-2">2.2% of women</p>

                  <p className="text-black text-lg mt-4">
                    According to psychologist David Keirsey, developer of the
                    Keirsey Temperament Sorter, approximately 1% to 4% of the
                    population has an INTJ personality type. (The rarest
                    personality type is INFJ.)
                  </p>

                  <h2 className="text-2xl font-bold mb-2">
                    Famous INTJ Personalities
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs have significantly impacted various fields, such as
                    science, literature, politics, and technology. INTJs are
                    recognized for their logical approach and innovative
                    contributions to shaping the world. They are known for their
                    analytical mindset, strategic thinking, and visionary
                    outlook.
                  </p>
                  <p className="text-black text-lg mt-4">
                    <b>Jane Austen:</b> a celebrated author known for her keen
                    insights into social structures and influential novels.
                  </p>
                  <p className="text-black text-lg mt-4">
                    <b>Stephen Hawking: </b> Theoretical physicist famous for
                    his cosmology and quantum mechanics contributions.
                  </p>

                  <p className="text-black text-lg mt-4">
                    <b>Hillary Clinton: </b> a political leader who applied her
                    analytical skills in public service roles, exemplifying the
                    INTJ’s strategic approach.
                  </p>
                  <p className="text-black text-lg mt-4">
                    <p className="text-black text-lg mt-4">
                      <b>Bill Gates: </b> Co-founder of Microsoft, who
                      demonstrates the INTJ’s drive for innovation and
                      forward-thinking in technology.
                    </p>
                    <b>Thomas Jefferson: </b> Jefferson is a key figure in
                    American history, known for his strategic vision and role in
                    shaping foundational policies.
                  </p>

                  <blockquote className=" bg-teal-300 p-4 italic text-black text-xl py-10 mt-6 text-center">
                    <p className="text-black text-lg mt-4 font-bold">
                      "INTJs are often seen as masterminds, able to see complex
                      patterns and long-term outcomes that others overlook."
                    </p>

                    <p className="text-black text-lg mt-2">
                      Dr. A.J. Drenth, author of My True Type
                    </p>
                    <p className="text-black text-lg mt-4 font-bold">
                      "The independent, analytical mind of the INTJ seeks
                      understanding and depth in all things, often leading them
                      to unconventional paths."
                    </p>
                    <p className="text-black text-lg mt-2">
                      Paul D. Tieger & Barbara Barron-Tieger, Do What You Are
                    </p>
                    <p className="text-black text-lg mt-4 font-bold">
                      "INTJs are known for their unyielding vision, paired with
                      a tenacious will to turn it into reality. They are seldom
                      content with the status quo."
                    </p>
                    <p className="text-black text-lg mt-2">
                      Otto Kroeger, Type Talk
                    </p>
                  </blockquote>
                </section>
              )}

              {/* Workplace Habits Section */}
              {activeSection === "workplace-habits" && (
                <section id="workplace-habits">
                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Hobbies and Interests
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Cognitive Engagement and Independent Pursuits
                  </h2>

                  <p className="text-black text-lg mt-4">
                    INTJs are naturally drawn to hobbies that promote
                    intellectual stimulation and independent thought. They often
                    favor solitary activities such as reading, which allows them
                    to explore intricate subjects at their own pace, and video
                    games that challenge their strategic and problem-solving
                    abilities. Individual sports like swimming, cycling, and
                    running also appeal to their drive for self-improvement and
                    personal focus.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Appreciation for Art and Lifelong Learning
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs value cultural enrichment and intellectual growth,
                    often seeking out art and cultural activities that broaden
                    their horizons. They enjoy visiting museums, attending
                    lectures, and participating in intellectually stimulating
                    events that expose them to diverse perspectives. Their love
                    for continuous learning extends beyond formal education,
                    driving them to engage in activities that expand their
                    knowledge and understanding of the world.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Fascination with Technology and Practical Exploration
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Alongside their scholarly interests, INTJs have a keen
                    fascination with technology, often exploring advancements in
                    computer science and related fields. They pair this interest
                    with hands-on pursuits like marathon running or backpacking,
                    which allow them to set personal goals and work toward
                    success in their unique way. This combination of
                    intellectual curiosity and practical application reflects
                    their multifaceted approach to hobbies.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Interaction tips For Friends
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Patience and Depth in Friendships with INTJs:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs cherish deep and enduring friendships with individuals
                    who can appreciate their complexity and depth of thought.
                    Establishing a friendship with an INTJ takes perseverance
                    and a shared dedication to sincere and thought-provoking
                    conversations frequently.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Avoidance of Small Talk and Value of Intellectual Bonding:
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Small talk tends to bore INTJs, who are more interested in
                    intellectually stimulating conversations. They value friends
                    who actively seek out contentious debates and contribute
                    interesting viewpoints to their discussions.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">For partners</h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Encouragement for Clear, Direct Communication with INTJ
                    Partners:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs value partners who are direct and honest in their
                    communication. INTJs benefit from clear communication
                    because it eliminates the ambiguity that can be frustrating
                    and helps them understand their partner’s needs and
                    intentions.
                  </p>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Importance of Independence and Loyalty in Partnerships:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs appreciate independence in relationships and
                    anticipate that their partners will respect their need for
                    privacy and autonomy. Since they prefer meaningful and
                    long-lasting relationships to fleeting ones, loyalty and
                    respect for one another are essential for INTJs.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Workplace tips
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Respect for INTJs Analytical Abilities and Independent Work
                    Style:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs flourish in work settings when their analytical
                    prowess and need for independence are acknowledged. They
                    appreciate jobs where they can apply their problem-solving
                    skills and prefer working independently.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Approaches for Effective Collaboration with INTJs:
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Being direct and rational when working with INTJs works well
                    because they value precise goals and doable tactics. They
                    react favorably to reasonable, constructive criticism that
                    respects their level of expertise.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Tips for Personal Growth
                  </h1>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Embracing Personal Strengths While Managing Weaknesses
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Managing Weaknesses While Embracing Personal Strengths INTJs
                    are frequently urged to acknowledge and value their innate
                    strengths, including independence, strategic thinking, and
                    logical thinking. However, it is equally important that they
                    continue to be aware of areas that might need attention,
                    like interpersonal issues brought on by their direct
                    communication style. INTJs can strengthen their personal and
                    professional relationships by emphasizing their strengths
                    and trying to temper them with awareness and empathy. A
                    deeper understanding of oneself and more fruitful
                    interactions can result from acknowledging and balancing
                    one’s strengths and shortcomings.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Balance Between Rationality and Emotional Awareness
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs may occasionally need help to balance their need for
                    emotional awareness and their preference for reason and
                    logic, particularly in social or private settings. Although
                    they frequently place a higher value on making objective
                    decisions, INTJs can also grow personally by becoming more
                    emotionally intelligent. By addressing their feelings and
                    those of others, they can establish deeper connections with
                    friends, family, and coworkers. His equilibrium improves
                    their capacity to react intelligently in social situations
                    and cultivates more meaningful connections.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Continuous Learning and Adapting to Social Challenges
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INTJs are inherently motivated to expand their knowledge and
                    deepen their understanding of the world, for they are
                    lifelong learners. However, for INTJs, developing their
                    interpersonal skills and adjusting to social challenges are
                    also important aspects of personal growth. They might
                    benefit from practicing tolerance for diverse viewpoints and
                    concentrating on small talk or informal interactions, which
                    can be awkward but are frequently required in various social
                    situations. INTJs can enhance their social presence and
                    adaptability in multiple contexts by learning new things
                    constantly and making minor adjustments to improve their
                    social interactions.
                  </p>
                </section>
              )}

              {/* Conclusion Section */}
              {activeSection === "conclusion" && (
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Conclusion</h2>
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
